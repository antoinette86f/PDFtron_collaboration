/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [14],
    {
      583: function (ya, ua, n) {
        n.r(ua);
        var pa = n(0),
          na = n(328);
        ya = n(573);
        var oa = n(120);
        n = n(496);
        var ka = {},
          ia = (function (fa) {
            function x(y, r) {
              var h = fa.call(this, y, r) || this;
              h.url = y;
              h.range = r;
              h.status = na.a.NOT_STARTED;
              return h;
            }
            Object(pa.c)(x, fa);
            x.prototype.start = function (y) {
              var r = this;
              "undefined" === typeof ka[this.range.start] &&
                ((ka[this.range.start] = {
                  cZ: function (h) {
                    var f = atob(h),
                      e,
                      b = f.length;
                    h = new Uint8Array(b);
                    for (e = 0; e < b; ++e) h[e] = f.charCodeAt(e);
                    f = h.length;
                    e = "";
                    for (var a = 0; a < f; )
                      (b = h.subarray(a, a + 1024)),
                        (a += 1024),
                        (e += String.fromCharCode.apply(null, b));
                    r.cZ(e, y);
                  },
                  NPa: function () {
                    r.status = na.a.ERROR;
                    y({ code: r.status });
                  },
                }),
                window.external.notify(this.url),
                (this.status = na.a.STARTED));
              r.QK();
            };
            return x;
          })(ya.ByteRangeRequest);
        ya = (function (fa) {
          function x(y, r, h, f) {
            y = fa.call(this, y, h, f) || this;
            y.ZE = ia;
            return y;
          }
          Object(pa.c)(x, fa);
          x.prototype.jC = function (y, r) {
            return ""
              .concat(y, "?")
              .concat(r.start, "&")
              .concat(r.stop ? r.stop : "");
          };
          return x;
        })(oa.a);
        Object(n.a)(ya);
        Object(n.b)(ya);
        ua["default"] = ya;
      },
    },
  ]);
}).call(this || window);
