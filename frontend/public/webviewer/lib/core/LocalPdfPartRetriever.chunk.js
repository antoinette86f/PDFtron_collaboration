/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [8],
    {
      576: function (ya, ua, n) {
        n.r(ua);
        var pa = n(0);
        ya = n(61);
        var na = n(496),
          oa = n(278),
          ka = n(28),
          ia = window;
        n = (function () {
          function fa(x) {
            var y = this;
            this.hAa = function (r) {
              return (
                r &&
                ("image" === r.type.split("/")[0].toLowerCase() ||
                  (r.name && !!r.name.match(/.(jpg|jpeg|png|gif)$/i)))
              );
            };
            this.file = x;
            this.wAa = new Promise(function (r) {
              return Object(pa.b)(y, void 0, void 0, function () {
                var h;
                return Object(pa.d)(this, function (f) {
                  switch (f.label) {
                    case 0:
                      return this.hAa(this.file)
                        ? [4, Object(oa.b)(x)]
                        : [3, 2];
                    case 1:
                      (h = f.aa()),
                        (this.file = ka.q
                          ? new Blob([h], { type: x.type })
                          : new File(
                              [h],
                              null === x || void 0 === x ? void 0 : x.name,
                              { type: x.type },
                            )),
                        (f.label = 2);
                    case 2:
                      return r(!0), [2];
                  }
                });
              });
            });
          }
          fa.prototype.getFileData = function (x) {
            var y = this,
              r = new FileReader();
            r.onload = function (h) {
              y.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS, [
                h.loaded,
                h.loaded,
              ]);
              x(new Uint8Array(h.target.result));
            };
            r.onprogress = function (h) {
              h.lengthComputable &&
                y.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS, [
                  h.loaded,
                  0 < h.total ? h.total : 0,
                ]);
            };
            r.readAsArrayBuffer(this.file);
          };
          fa.prototype.getFile = function () {
            return Object(pa.b)(this, void 0, Promise, function () {
              return Object(pa.d)(this, function (x) {
                switch (x.label) {
                  case 0:
                    return [4, this.wAa];
                  case 1:
                    return (
                      x.aa(),
                      ia.da.isJSWorker ? [2, this.file.path] : [2, this.file]
                    );
                }
              });
            });
          };
          fa.Events = { DOCUMENT_LOADING_PROGRESS: "documentLoadingProgress" };
          return fa;
        })();
        Object(ya.a)(n);
        Object(na.a)(n);
        Object(na.b)(n);
        ua["default"] = n;
      },
    },
  ]);
}).call(this || window);
