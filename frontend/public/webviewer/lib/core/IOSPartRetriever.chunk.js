/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [6],
    {
      581: function (ya, ua, n) {
        n.r(ua);
        var pa = n(0),
          na = n(328);
        ya = n(573);
        n(34);
        n = n(496);
        var oa = (function (ka) {
          function ia(fa, x) {
            var y = ka.call(this, fa, x) || this;
            y.url = fa;
            y.range = x;
            y.status = na.a.NOT_STARTED;
            return y;
          }
          Object(pa.c)(ia, ka);
          ia.prototype.start = function () {
            var fa = document.createElement("IFRAME");
            fa.setAttribute("src", this.url);
            document.documentElement.appendChild(fa);
            fa.parentNode.removeChild(fa);
            this.status = na.a.STARTED;
            this.QK();
          };
          return ia;
        })(ya.ByteRangeRequest);
        ya = (function (ka) {
          function ia(fa, x, y, r) {
            fa = ka.call(this, fa, x, y, r) || this;
            fa.ZE = oa;
            return fa;
          }
          Object(pa.c)(ia, ka);
          ia.prototype.jC = function (fa, x) {
            return ""
              .concat(fa, "#")
              .concat(x.start, "&")
              .concat(x.stop ? x.stop : "");
          };
          return ia;
        })(ya["default"]);
        Object(n.a)(ya);
        Object(n.b)(ya);
        ua["default"] = ya;
      },
    },
  ]);
}).call(this || window);
