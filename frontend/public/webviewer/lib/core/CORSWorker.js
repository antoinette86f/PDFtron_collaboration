(function () {
  (function (f) {
    function c(a) {
      if (d[a]) return d[a].exports;
      var b = (d[a] = { i: a, l: !1, exports: {} });
      f[a].call(b.exports, b, b.exports, c);
      b.l = !0;
      return b.exports;
    }
    var d = {};
    c.m = f;
    c.c = d;
    c.d = function (a, b, e) {
      c.o(a, b) || Object.defineProperty(a, b, { enumerable: !0, get: e });
    };
    c.r = function (a) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(a, "__esModule", { value: !0 });
    };
    c.t = function (a, b) {
      b & 1 && (a = c(a));
      if (b & 8 || (b & 4 && "object" === typeof a && a && a.__esModule))
        return a;
      var e = Object.create(null);
      c.r(e);
      Object.defineProperty(e, "default", { enumerable: !0, value: a });
      if (b & 2 && "string" != typeof a)
        for (var g in a)
          c.d(
            e,
            g,
            function (h) {
              return a[h];
            }.bind(null, g),
          );
      return e;
    };
    c.n = function (a) {
      var b =
        a && a.__esModule
          ? function () {
              return a["default"];
            }
          : function () {
              return a;
            };
      c.d(b, "a", b);
      return b;
    };
    c.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };
    c.p = "/core/";
    return c((c.s = 0));
  })([
    function (f, c, d) {
      f.exports = d(1);
    },
    function (f, c, d) {
      self.onmessage = function (a) {
        if ("init" === a.data.action) {
          var b = a.data.path;
          b &&
            ((self.workerBasePath = b),
            (self.pdfWorkerPath = "".concat(b, "pdf/")),
            (self.officeWorkerPath = "".concat(b, "office/")),
            (self.legacyOfficeWorkerPath = "".concat(b, "legacyOffice/")));
          importScripts(a.data.file);
          self.onmessage(a);
        }
      };
    },
  ]);
}).call(this || window);
