/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [1],
    {
      577: function (ya, ua, n) {
        n.r(ua);
        var pa = n(0),
          na = n(328);
        ya = n(573);
        n = n(496);
        var oa = window,
          ka = (function (ia) {
            function fa(x, y) {
              var r = ia.call(this, x, y) || this;
              r.url = x;
              r.range = y;
              r.request = new XMLHttpRequest();
              r.request.open("GET", r.url, !0);
              oa.Uint8Array && (r.request.responseType = "arraybuffer");
              r.request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
              r.status = na.a.NOT_STARTED;
              return r;
            }
            Object(pa.c)(fa, ia);
            return fa;
          })(ya.ByteRangeRequest);
        ya = (function (ia) {
          function fa(x, y, r, h) {
            x = ia.call(this, x, y, r, h) || this;
            x.ZE = ka;
            return x;
          }
          Object(pa.c)(fa, ia);
          fa.prototype.jC = function (x, y) {
            return ""
              .concat(x, "/bytes=")
              .concat(y.start, ",")
              .concat(y.stop ? y.stop : "");
          };
          return fa;
        })(ya["default"]);
        Object(n.a)(ya);
        Object(n.b)(ya);
        ua["default"] = ya;
      },
    },
  ]);
}).call(this || window);
