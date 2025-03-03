"use strict";
var Module = {};
if (
  typeof process === "object" &&
  typeof process.versions === "object" &&
  typeof process.versions.node === "string"
) {
  var nodeWorkerThreads = require("worker_threads");
  var parentPort = nodeWorkerThreads.parentPort;
  parentPort.on("message", function (data) {
    onmessage({ data: data });
  });
  var nodeFS = require("fs");
  Object.assign(global, {
    self: global,
    require: require,
    Module: Module,
    location: { href: __filename },
    Worker: nodeWorkerThreads.Worker,
    importScripts: function (f) {
      (0, eval)(nodeFS.readFileSync(f, "utf8"));
    },
    postMessage: function (msg) {
      parentPort.postMessage(msg);
    },
    performance: global.performance || {
      now: function () {
        return Date.now();
      },
    },
  });
}
var initializedJS = false;
function threadPrintErr() {
  var text = Array.prototype.slice.call(arguments).join(" ");
  console.error(text);
}
function threadAlert() {
  var text = Array.prototype.slice.call(arguments).join(" ");
  postMessage({
    cmd: "alert",
    text: text,
    threadId: Module["_pthread_self"](),
  });
}
var err = threadPrintErr;
self.alert = threadAlert;
Module["instantiateWasm"] = (info, receiveInstance) => {
  var instance = new WebAssembly.Instance(Module["wasmModule"], info);
  receiveInstance(instance);
  Module["wasmModule"] = null;
  return instance.exports;
};
self.onmessage = (e) => {
  try {
    if (e.data.cmd === "load") {
      Module["wasmModule"] = e.data.wasmModule;
      Module["wasmMemory"] = e.data.wasmMemory;
      Module["buffer"] = Module["wasmMemory"].buffer;
      Module["ENVIRONMENT_IS_PTHREAD"] = true;
      if (typeof e.data.urlOrBlob === "string") {
        importScripts(e.data.urlOrBlob);
      } else {
        var objectUrl = URL.createObjectURL(e.data.urlOrBlob);
        importScripts(objectUrl);
        URL.revokeObjectURL(objectUrl);
      }
    } else if (e.data.cmd === "run") {
      Module["__performance_now_clock_drift"] = performance.now() - e.data.time;
      Module["__emscripten_thread_init"](e.data.threadInfoStruct, 0, 0, 1);
      Module["establishStackSpace"]();
      Module["PThread"].receiveObjectTransfer(e.data);
      Module["PThread"].threadInit();
      if (!initializedJS) {
        Module["___embind_register_native_and_builtin_types"]();
        initializedJS = true;
      }
      try {
        var result = Module["invokeEntryPoint"](
          e.data.start_routine,
          e.data.arg,
        );
        if (Module["keepRuntimeAlive"]()) {
          Module["PThread"].setExitStatus(result);
        } else {
          Module["__emscripten_thread_exit"](result);
        }
      } catch (ex) {
        if (ex != "unwind") {
          if (ex instanceof Module["ExitStatus"]) {
            if (Module["keepRuntimeAlive"]()) {
            } else {
              Module["__emscripten_thread_exit"](ex.status);
            }
          } else {
            throw ex;
          }
        }
      }
    } else if (e.data.cmd === "cancel") {
      if (Module["_pthread_self"]()) {
        Module["__emscripten_thread_exit"](-1);
      }
    } else if (e.data.target === "setimmediate") {
    } else if (e.data.cmd === "processThreadQueue") {
      if (Module["_pthread_self"]()) {
        Module["_emscripten_current_thread_process_queued_calls"]();
      }
    } else {
      err("worker.js received unknown command " + e.data.cmd);
      err(e.data);
    }
  } catch (ex) {
    err("worker.js onmessage() captured an uncaught exception: " + ex);
    if (ex && ex.stack) err(ex.stack);
    throw ex;
  }
};
