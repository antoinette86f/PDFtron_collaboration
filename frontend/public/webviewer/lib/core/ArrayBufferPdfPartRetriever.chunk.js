/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [2],
    {
      578: function (ya, ua, n) {
        n.r(ua);
        ya = n(61);
        n = n(496);
        var pa = (function () {
          function na(oa) {
            this.buffer = oa;
            this.fileSize =
              null === oa || void 0 === oa ? void 0 : oa.byteLength;
          }
          na.prototype.getFileData = function (oa) {
            oa(new Uint8Array(this.buffer));
          };
          na.prototype.getFile = function () {
            return Promise.resolve(null);
          };
          return na;
        })();
        Object(ya.a)(pa);
        Object(n.a)(pa);
        Object(n.b)(pa);
        ua["default"] = pa;
      },
    },
  ]);
}).call(this || window);
