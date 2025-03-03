!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o),
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/core/legacyOffice/"),
    n((n.s = 1));
})([
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    e.exports = n(7);
  },
  function (e, t, n) {
    "use strict";
    (function (e, t) {
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      !(function (e) {
        e.createPromiseCapability = function () {
          var e = {};
          return (
            (e.promise = new A(function (t, n) {
              (e.resolve = t), (e.reject = n);
            })),
            e
          );
        };
        var o = e.Promise,
          i =
            o &&
            "resolve" in o &&
            "reject" in o &&
            "all" in o &&
            "race" in o &&
            (function () {
              var e;
              return (
                new o(function (t) {
                  e = t;
                }),
                "function" == typeof e
              );
            })();
        "undefined" != typeof exports && exports
          ? ((exports.Promise = i ? o : A), (exports.Polyfill = A))
          : "function" == typeof define && n(6)
            ? define(function () {
                return i ? o : A;
              })
            : i || (e.Promise = A);
        var a = function () {};
        function s(e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        }
        var c,
          u = void 0 !== t ? t : setTimeout,
          f = [];
        function l() {
          for (var e = 0; e < f.length; e++) f[e][0](f[e][1]);
          (f = []), (c = !1);
        }
        function d(e, t) {
          f.push([e, t]), c || ((c = !0), u(l, 0));
        }
        function m(e) {
          var t = e.owner,
            n = t.state_,
            r = t.data_,
            o = e[n],
            i = e.then;
          if ("function" == typeof o) {
            n = "fulfilled";
            try {
              r = o(r);
            } catch (e) {
              g(i, e);
            }
          }
          h(i, r) ||
            ("fulfilled" === n && p(i, r), "rejected" === n && g(i, r));
        }
        function h(e, t) {
          var n;
          try {
            if (e === t)
              throw new TypeError(
                "A promises callback cannot return that same promise.",
              );
            if (t && ("function" == typeof t || "object" === r(t))) {
              var o = t.then;
              if ("function" == typeof o)
                return (
                  o.call(
                    t,
                    function (r) {
                      n || ((n = !0), t !== r ? p(e, r) : y(e, r));
                    },
                    function (t) {
                      n || ((n = !0), g(e, t));
                    },
                  ),
                  !0
                );
            }
          } catch (t) {
            return n || g(e, t), !0;
          }
          return !1;
        }
        function p(e, t) {
          (e !== t && h(e, t)) || y(e, t);
        }
        function y(e, t) {
          "pending" === e.state_ &&
            ((e.state_ = "sealed"), (e.data_ = t), d(b, e));
        }
        function g(e, t) {
          "pending" === e.state_ &&
            ((e.state_ = "sealed"), (e.data_ = t), d(w, e));
        }
        function v(e) {
          var t = e.then_;
          e.then_ = void 0;
          for (var n = 0; n < t.length; n++) m(t[n]);
        }
        function b(e) {
          (e.state_ = "fulfilled"), v(e);
        }
        function w(e) {
          (e.state_ = "rejected"), v(e);
        }
        function A(e) {
          if ("function" != typeof e)
            throw new TypeError(
              "Promise constructor takes a function argument",
            );
          if (!(this instanceof A))
            throw new TypeError(
              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
            );
          (this.then_ = []),
            (function (e, t) {
              function n(e) {
                g(t, e);
              }
              try {
                e(function (e) {
                  p(t, e);
                }, n);
              } catch (e) {
                n(e);
              }
            })(e, this);
        }
        (A.prototype = {
          constructor: A,
          state_: "pending",
          then_: null,
          data_: void 0,
          then: function (e, t) {
            var n = {
              owner: this,
              then: new this.constructor(a),
              fulfilled: e,
              rejected: t,
            };
            return (
              "fulfilled" === this.state_ || "rejected" === this.state_
                ? d(m, n)
                : this.then_.push(n),
              n.then
            );
          },
          catch: function (e) {
            return this.then(null, e);
          },
        }),
          (A.all = function (e) {
            if (!s(e))
              throw new TypeError("You must pass an array to Promise.all().");
            return new this(function (t, n) {
              var r = [],
                o = 0;
              function i(e) {
                return (
                  o++,
                  function (n) {
                    (r[e] = n), --o || t(r);
                  }
                );
              }
              for (var a, s = 0; s < e.length; s++)
                (a = e[s]) && "function" == typeof a.then
                  ? a.then(i(s), n)
                  : (r[s] = a);
              o || t(r);
            });
          }),
          (A.race = function (e) {
            if (!s(e))
              throw new TypeError("You must pass an array to Promise.race().");
            return new this(function (t, n) {
              for (var r, o = 0; o < e.length; o++)
                (r = e[o]) && "function" == typeof r.then ? r.then(t, n) : t(r);
            });
          }),
          (A.resolve = function (e) {
            return e && "object" === r(e) && e.constructor === this
              ? e
              : new this(function (t) {
                  t(e);
                });
          }),
          (A.reject = function (e) {
            return new this(function (t, n) {
              n(e);
            });
          });
      })(
        "undefined" != typeof window
          ? window
          : void 0 !== e
            ? e
            : "undefined" != typeof self
              ? self
              : void 0,
      );
    }).call(this, n(0), n(3).setImmediate);
  },
  function (e, t, n) {
    (function (e) {
      var r =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        o = Function.prototype.apply;
      function i(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new i(o.call(setTimeout, r, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new i(o.call(setInterval, r, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (i.prototype.unref = i.prototype.ref = function () {}),
        (i.prototype.close = function () {
          this._clearFn.call(r, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        n(4),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }).call(this, n(0));
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        "use strict";
        if (!e.setImmediate) {
          var r,
            o,
            i,
            a,
            s,
            c = 1,
            u = {},
            f = !1,
            l = e.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (d = d && d.setTimeout ? d : e),
            "[object process]" === {}.toString.call(e.process)
              ? (r = function (e) {
                  t.nextTick(function () {
                    h(e);
                  });
                })
              : !(function () {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function () {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? e.MessageChannel
                  ? (((i = new MessageChannel()).port1.onmessage = function (
                      e,
                    ) {
                      h(e.data);
                    }),
                    (r = function (e) {
                      i.port2.postMessage(e);
                    }))
                  : l && "onreadystatechange" in l.createElement("script")
                    ? ((o = l.documentElement),
                      (r = function (e) {
                        var t = l.createElement("script");
                        (t.onreadystatechange = function () {
                          h(e),
                            (t.onreadystatechange = null),
                            o.removeChild(t),
                            (t = null);
                        }),
                          o.appendChild(t);
                      }))
                    : (r = function (e) {
                        setTimeout(h, 0, e);
                      })
                : ((a = "setImmediate$" + Math.random() + "$"),
                  (s = function (t) {
                    t.source === e &&
                      "string" == typeof t.data &&
                      0 === t.data.indexOf(a) &&
                      h(+t.data.slice(a.length));
                  }),
                  e.addEventListener
                    ? e.addEventListener("message", s, !1)
                    : e.attachEvent("onmessage", s),
                  (r = function (t) {
                    e.postMessage(a + t, "*");
                  })),
            (d.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1];
              var o = { callback: e, args: t };
              return (u[c] = o), r(c), c++;
            }),
            (d.clearImmediate = m);
        }
        function m(e) {
          delete u[e];
        }
        function h(e) {
          if (f) setTimeout(h, 0, e);
          else {
            var t = u[e];
            if (t) {
              f = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(void 0, n);
                  }
                })(t);
              } finally {
                m(e), (f = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }).call(this, n(0), n(5));
  },
  function (e, t) {
    var n,
      r,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        r = a;
      }
    })();
    var c,
      u = [],
      f = !1,
      l = -1;
    function d() {
      f &&
        c &&
        ((f = !1), c.length ? (u = c.concat(u)) : (l = -1), u.length && m());
    }
    function m() {
      if (!f) {
        var e = s(d);
        f = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++l < t; ) c && c[l].run();
          (l = -1), (t = u.length);
        }
        (c = null),
          (f = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function p() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new h(e, t)), 1 !== u.length || f || s(m);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = p),
      (o.addListener = p),
      (o.once = p),
      (o.off = p),
      (o.removeListener = p),
      (o.removeAllListeners = p),
      (o.emit = p),
      (o.prependListener = p),
      (o.prependOnceListener = p),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    (function (t) {
      e.exports = t;
    }).call(this, {});
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(2),
      (function (e) {
        void 0 === e.crypto &&
          (e.crypto = {
            getRandomValues: function (e) {
              for (var t = 0; t < e.length; t++) e[t] = 256 * Math.random();
            },
          });
      })("undefined" == typeof window ? self : window),
      console.log,
      console.warn,
      console.error;
    function r(e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            c(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(a, s);
        }
        c((r = r.apply(e, t || [])).next());
      });
    }
    function o(e, t) {
      var n,
        r,
        o,
        i,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function s(s) {
        return function (c) {
          return (function (s) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; i && ((i = 0), s[0] && (a = 0)), a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & s[0]
                        ? r.return
                        : s[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                    !(o = o.call(r, s[1])).done)
                )
                  return o;
                switch (((r = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                  case 0:
                  case 1:
                    o = s;
                    break;
                  case 4:
                    return a.label++, { value: s[1], done: !1 };
                  case 5:
                    a.label++, (r = s[1]), (s = [0]);
                    continue;
                  case 7:
                    (s = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = a.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== s[0] && 2 !== s[0]))
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                      a.label = s[1];
                      break;
                    }
                    if (6 === s[0] && a.label < o[1]) {
                      (a.label = o[1]), (o = s);
                      break;
                    }
                    if (o && a.label < o[2]) {
                      (a.label = o[2]), a.ops.push(s);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                s = t.call(e, a);
              } catch (e) {
                (s = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & s[0]) throw s[1];
            return { value: s[0] ? s[1] : void 0, done: !0 };
          })([s, c]);
        };
      }
    }
    Object.create;
    Object.create;
    "function" == typeof SuppressedError && SuppressedError;
    var i = {
        flattenedResources: !1,
        CANVAS_CACHE_SIZE: void 0,
        maxPagesBefore: void 0,
        maxPagesAhead: void 0,
        disableLogs: !1,
        wvsQueryParameters: {},
        _trnDebugMode: !1,
        _logFiltersEnabled: null,
      },
      a = function (e) {
        return i[e];
      },
      s = function (e, t) {
        a("disableLogs") ||
          (t ? console.warn("".concat(e, ": ").concat(t)) : console.warn(e));
      };
    function c(e, t, n) {
      return new Promise(function (r) {
        if (!e) return r();
        var o = n.document.createElement("script");
        (o.type = "text/javascript"),
          (o.onload = function () {
            r();
          }),
          (o.onerror = function () {
            t && s(t), r();
          }),
          (o.src = e),
          n.document.getElementsByTagName("head")[0].appendChild(o);
      });
    }
    var u,
      f = function (e) {
        if ("string" == typeof e) {
          for (
            var t = new Uint8Array(e.length), n = e.length, r = 0;
            r < n;
            r++
          )
            t[r] = e.charCodeAt(r);
          return t;
        }
        return e;
      },
      l = function (e) {
        if ("string" != typeof e) {
          for (var t = "", n = 0, r = e.length, o = void 0; n < r; )
            (o = e.subarray(n, n + 1024)),
              (n += 1024),
              (t += String.fromCharCode.apply(null, o));
          return t;
        }
        return e;
      },
      d = "undefined" == typeof window ? self : window,
      m = d.importScripts,
      h = !1,
      p = function (e, t) {
        h || (m("".concat(d.basePath, "decode.min.js")), (h = !0));
        var n = self.BrotliDecode(f(e));
        return t ? n : l(n);
      },
      y = function (e, t) {
        return r(void 0, void 0, Promise, function () {
          var n;
          return o(this, function (r) {
            switch (r.label) {
              case 0:
                return h
                  ? [3, 2]
                  : [
                      4,
                      c(
                        "".concat(
                          self.Core.getWorkerPath(),
                          "external/decode.min.js",
                        ),
                        "Failed to download decode.min.js",
                        window,
                      ),
                    ];
              case 1:
                r.sent(), (h = !0), (r.label = 2);
              case 2:
                return (n = self.BrotliDecode(f(e))), [2, t ? n : l(n)];
            }
          });
        });
      },
      g =
        ((function () {
          function e() {
            this.remainingDataArrays = [];
          }
          (e.prototype.processRaw = function (e) {
            return e;
          }),
            (e.prototype.processBrotli = function (e) {
              return this.remainingDataArrays.push(e), null;
            }),
            (e.prototype.GetNextChunk = function (e) {
              return (
                this.decodeFunction ||
                  (0 === e[0] && 97 === e[1] && 115 === e[2] && 109 === e[3]
                    ? (this.decodeFunction = this.processRaw)
                    : (this.decodeFunction = this.processBrotli)),
                this.decodeFunction(e)
              );
            }),
            (e.prototype.End = function () {
              if (this.remainingDataArrays.length) {
                for (var e = this.arrays, t = 0, n = 0; n < e.length; ++n)
                  t += e[n].length;
                var r = new Uint8Array(t),
                  o = 0;
                for (n = 0; n < e.length; ++n) {
                  var i = e[n];
                  r.set(i, o), (o += i.length);
                }
                return p(r, !0);
              }
              return null;
            });
        })(),
        function (e) {
          var t = e.lastIndexOf("/");
          -1 === t && (t = 0);
          var n = e.slice(t).replace(".", ".br.");
          return (
            m ||
              (n.endsWith(".js.mem")
                ? (n = n.replace(".js.mem", ".mem"))
                : n.endsWith(".js") && (n = n.concat(".mem"))),
            e.slice(0, t) + n
          );
        }),
      v = function (e, t) {
        return (
          (t.url = g(e)),
          (t.decompressFunction = m ? p : y),
          (function (e) {
            var t = !e.shouldOutputArray,
              n = new XMLHttpRequest();
            n.open("GET", e.url, e.isAsync);
            var r = t && n.overrideMimeType;
            (n.responseType = r ? "text" : "arraybuffer"),
              r && n.overrideMimeType("text/plain; charset=x-user-defined"),
              n.send();
            var o = function () {
              var o,
                i = Date.now();
              return (
                (o = r ? n.responseText : new Uint8Array(n.response)),
                "Result length is ".concat(o.length),
                o.length < e.compressedMaximum
                  ? ((o = e.decompressFunction(o, e.shouldOutputArray)),
                    s(
                      "There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See https://docs.apryse.com/documentation/web/faq/content-encoding/ for instructions on how to resolve this.",
                    ),
                    m && "Decompressed length is ".concat(o.length))
                  : t && (o = l(o)),
                m &&
                  ""
                    .concat(e.url, " Decompression took ")
                    .concat(Date.now() - i),
                o
              );
            };
            if (!e.isAsync) {
              if (200 === n.status || 0 === n.status) return o();
              throw new Error("Failed to load ".concat(e.url));
            }
            return new Promise(function (t, r) {
              (n.onload = function () {
                200 === this.status || 0 === this.status
                  ? t(o())
                  : r("Download Failed ".concat(e.url));
              }),
                (n.onerror = function () {
                  r("Network error occurred ".concat(e.url));
                });
            });
          })(t)
        );
      },
      b = function (e, t, n, r) {
        return e.catch(function (e) {
          return s(e), r(t, n);
        });
      },
      w = function (e, t, n, r) {
        return (function (e, t, n) {
          var r;
          if (n.isAsync) {
            var o = t[0](e, n);
            for (r = 1; r < t.length; ++r) o = b(o, e, n, t[r]);
            return o;
          }
          for (r = 0; r < t.length; ++r)
            try {
              return t[r](e, n);
            } catch (e) {
              s(e.message);
            }
          throw new Error("");
        })(e, [v], { compressedMaximum: t, isAsync: n, shouldOutputArray: r });
      };
    function A(e, t, n) {
      var r, o;
      return (function i(a) {
        return (
          (o = o || Date.now()),
          a
            ? fetch(g(e))
                .then(function (e) {
                  return WebAssembly.instantiateStreaming(e, t);
                })
                .catch(function (t) {
                  return (
                    "instantiateStreaming Failed "
                      .concat(e, " message ")
                      .concat(t.message),
                    i(!1)
                  );
                })
            : w(e, n, !0, !0).then(function (e) {
                return (
                  (r = Date.now()),
                  "Request took ".concat(r - o, " ms"),
                  WebAssembly.instantiate(e, t)
                );
              })
        );
      })(!!WebAssembly.instantiateStreaming).then(function (e) {
        return "WASM compilation took ".concat(Date.now() - (r || o), " ms"), e;
      });
    }
    var P,
      T,
      _,
      x,
      j,
      M = "undefined" == typeof window ? self : window,
      S =
        ((P = navigator.userAgent.toLowerCase()),
        (T =
          /(msie) ([\w.]+)/.exec(P) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(P))
          ? parseInt(T[2], 10)
          : T),
      O =
        ((_ = M.navigator.userAgent.match(/OPR/)),
        (x = M.navigator.userAgent.match(/Maxthon/)),
        (j = M.navigator.userAgent.match(/Edge/)),
        M.navigator.userAgent.match(/Chrome\/(.*?) /) && !_ && !x && !j),
      E =
        ((function () {
          if (!O) return null;
          var e = M.navigator.userAgent.match(/Chrome\/([0-9]+)\./);
          e && parseInt(e[1], 10);
        })(),
        !!navigator.userAgent.match(/Edge/i) ||
          (navigator.userAgent.match(/Edg\/(.*?)/) &&
            M.navigator.userAgent.match(/Chrome\/(.*?) /))),
      I =
        ((function () {
          if (!E) return null;
          var e = M.navigator.userAgent.match(/Edg\/([0-9]+)\./);
          e && parseInt(e[1], 10);
        })(),
        /iPad|iPhone|iPod/.test(M.navigator.platform) ||
          ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) ||
          /iPad|iPhone|iPod/.test(M.navigator.userAgent)),
      k = (function () {
        var e = M.navigator.userAgent.match(
          /.*\/([0-9\.]+)\s(Safari|Mobile).*/i,
        );
        return e ? parseFloat(e[1]) : e;
      })(),
      L =
        /^((?!chrome|android).)*safari/i.test(M.navigator.userAgent) ||
        (/^((?!chrome|android).)*$/.test(M.navigator.userAgent) && I),
      R =
        (L &&
          /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
          parseInt(
            null === (u = navigator.userAgent.match(/Version\/(\d+)/)) ||
              void 0 === u
              ? void 0
              : u[1],
            10,
          ),
        M.navigator.userAgent.match(/Firefox/)),
      W =
        ((function () {
          if (!R) return null;
          var e = M.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
          e && parseInt(e[1], 10);
        })(),
        S || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent),
        navigator.userAgent.match(/(iPad|iPhone|iPod)/i),
        M.navigator.userAgent.indexOf("Android"),
        /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(M.navigator.userAgent)),
      B =
        !!M.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i) &&
        parseInt(
          M.navigator.userAgent.match(/(iPad|iPhone).+\sOS\s((\d+)(_\d)*)/i)[3],
          10,
        ) >= 14,
      F = !(!self.WebAssembly || !self.WebAssembly.validate),
      U =
        M.navigator.userAgent.indexOf("Edge/16") > -1 ||
        M.navigator.userAgent.indexOf("MSAppHost") > -1,
      C = function () {
        return F && !U && !(!B && ((L && k < 14) || W));
      };
    var D = (function () {
      function e(e) {
        var t = this;
        this.promise = e.then(function (e) {
          (t.response = e), (t.status = 200);
        });
      }
      return (
        (e.prototype.addEventListener = function (e, t) {
          this.promise.then(t);
        }),
        e
      );
    })();
    function N(e) {
      return (N =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var z = null;
    !(function (e) {
      var t,
        n,
        r,
        o,
        i = [];
      function a(e) {
        i || (i = []), i.push(e);
      }
      var s = function () {
        e.basePath = "../";
        var a,
          s,
          c = e.legacyOfficeWorkerPath || "";
        function u(e) {
          var t = (function (e) {
            var t = [];
            return {
              resource_array: t,
              msg: JSON.stringify(e.data, function (e, n) {
                if ("object" === N(n)) {
                  var i = null;
                  if (
                    (n instanceof Uint8Array
                      ? (i = n)
                      : n instanceof ArrayBuffer && (i = new Uint8Array(n)),
                    i)
                  ) {
                    var a = r(i.length),
                      s = o(a);
                    if (s)
                      new Uint8Array(Module.HEAPU8.buffer, s, i.length).set(i);
                    return t.push(a), { __trn_res_id: a };
                  }
                }
                return n;
              }),
            };
          })(e);
          n(t.msg);
        }
        e.workerBasePath && (e.basePath = e.workerBasePath),
          e.externalPath
            ? (e.basePath = e.externalPath)
            : (e.basePath += "external/"),
          importScripts("".concat(e.basePath, "Promise.js")),
          (e.ContinueFunc = function (e) {
            t("ContinueFunc called"),
              setTimeout(function () {
                onmessage({ data: { action: "continue" } });
              }, e);
          }),
          e.pdfWorkerPath && (a = e.pdfWorkerPath),
          e.officeAsmPath && (s = e.officeAsmPath),
          (e.Module = {
            memoryInitializerPrefixURL: a,
            asmjsPrefix: s,
            onRuntimeInitialized: function () {
              t || (t = function () {});
              var e = Date.now() - z;
              "time duration from start to ready: ".concat(JSON.stringify(e)),
                (n = function (e) {
                  if (null != e && 0 !== e) {
                    var t = 1 + (e.length << 2),
                      n = Module._malloc(t);
                    stringToUTF8(e, n, t) > 0 && Module._TRN_OnMessage(n);
                  }
                }),
                (r = function (e) {
                  return Module._TRN_CreateBufferResource(e);
                }),
                (o = function (e) {
                  return Module._TRN_GetResourcePointer(e);
                }),
                t("OnReady called"),
                (onmessage = u),
                Module._TRN_InitWorker();
              for (var a = 0; a < i.length; ++a) onmessage(i[a]);
              i = null;
            },
            fetchSelf: function () {
              (z = Date.now()),
                (function (e, t, n) {
                  var r, o;
                  if (C() && !n) {
                    if (
                      ((self.Module.instantiateWasm = function (n, r) {
                        return A(
                          "".concat(e, "Wasm.wasm"),
                          n,
                          t["Wasm.wasm"],
                        ).then(function (e) {
                          r(e.instance);
                        });
                      }),
                      t.disableObjectURLBlobs)
                    )
                      return void importScripts("".concat(e, "Wasm.js"));
                    (r = w(
                      "".concat(e, "Wasm.js.mem"),
                      t["Wasm.js.mem"],
                      !1,
                      !1,
                    )),
                      (o = new Blob([r], { type: "application/javascript" })),
                      importScripts(URL.createObjectURL(o));
                  } else {
                    if (t.disableObjectURLBlobs)
                      return void importScripts(
                        "".concat(
                          (self.Module.asmjsPrefix
                            ? self.Module.asmjsPrefix
                            : "") + e,
                          ".js",
                        ),
                      );
                    r = w(
                      "".concat(
                        (self.Module.asmjsPrefix
                          ? self.Module.asmjsPrefix
                          : "") + e,
                        ".js.mem",
                      ),
                      t[".js.mem"],
                      !1,
                    );
                    var i = w(
                      "".concat(
                        (self.Module.memoryInitializerPrefixURL
                          ? self.Module.memoryInitializerPrefixURL
                          : "") + e,
                        ".mem",
                      ),
                      t[".mem"],
                      !0,
                      !0,
                    );
                    (self.Module.memoryInitializerRequest = new D(i)),
                      (o = new Blob([r], { type: "application/javascript" })),
                      importScripts(URL.createObjectURL(o));
                  }
                })(
                  "".concat(c, "WebB2XOfficeWorker"),
                  {
                    "Wasm.wasm": 5e6,
                    "Wasm.js.mem": 1e5,
                    ".js.mem": 5e6,
                    ".mem": 3e6,
                    disableObjectURLBlobs: e.disableObjectURLBlobs,
                  },
                  !!navigator.userAgent.match(/Edge/i) || e.wasmDisabled,
                );
            },
            noExitRuntime: !0,
          });
      };
      e.onmessage = function (t) {
        "init" === t.data.action &&
          ((e.wasmDisabled = !t.data.wasm),
          (e.externalPath = t.data.externalPath),
          (e.officeAsmPath = t.data.officeAsmPath),
          (e.pdfWorkerPath = t.data.pdfWorkerPath),
          (e.disableObjectURLBlobs = t.data.disableObjectURLBlobs),
          (e.onmessage = a),
          s(),
          e.Module.fetchSelf());
      };
    })("undefined" == typeof window ? self : window);
    ArrayBuffer.prototype.slice ||
      (ArrayBuffer.prototype.slice = function (e, t) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.byteLength),
          (e = Math.floor(e)),
          (t = Math.floor(t)),
          e < 0 && (e += this.byteLength),
          t < 0 && (t += this.byteLength),
          (e = Math.min(Math.max(0, e), this.byteLength)),
          (t = Math.min(Math.max(0, t), this.byteLength)) - e <= 0)
        )
          return new ArrayBuffer(0);
        var n = new ArrayBuffer(t - e),
          r = new Uint8Array(n),
          o = new Uint8Array(this, e, t - e);
        return r.set(o), n;
      });
  },
]);
