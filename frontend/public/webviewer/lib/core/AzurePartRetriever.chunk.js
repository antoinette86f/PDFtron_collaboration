/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [3],
    {
      579: function (ya, ua, n) {
        n.r(ua);
        var pa = n(0),
          na = n(196);
        ya = n(573);
        n = n(496);
        ya = (function (oa) {
          function ka(ia, fa, x, y) {
            return oa.call(this, ia, fa, x, y) || this;
          }
          Object(pa.c)(ka, oa);
          ka.prototype.W6 = function () {
            return { start: this.V5 - na.a, stop: this.V5 };
          };
          ka.prototype.$y = function (ia) {
            var fa = this;
            this.Bs(this.url, { start: 0, stop: 1 }, function (x, y, r) {
              if (x) return ia(x);
              x = r.request.getResponseHeader("Content-Range");
              fa.V5 = x.split("/")[1];
              oa.prototype.$y.call(fa, ia);
            });
          };
          return ka;
        })(ya["default"]);
        Object(n.a)(ya);
        Object(n.b)(ya);
        ua["default"] = ya;
      },
    },
  ]);
}).call(this || window);
