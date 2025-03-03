/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [5],
    {
      580: function (ya, ua, n) {
        n.r(ua);
        var pa = n(0);
        ya = n(61);
        var na = n(220),
          oa = n(496),
          ka = n(278),
          ia = window;
        n = (function () {
          function fa(x, y) {
            this.p9 = function (r) {
              r = r.split(".");
              return r[r.length - 1].match(/(jpg|jpeg|png|gif)$/i);
            };
            y = y || {};
            this.url = x;
            this.filename = y.filename || x;
            this.Nf = y.customHeaders;
            this.lMa = !!y.useDownloader;
            this.withCredentials = !!y.withCredentials;
          }
          fa.prototype.uN = function (x) {
            this.Nf = x;
          };
          fa.prototype.getCustomHeaders = function () {
            return this.Nf;
          };
          fa.prototype.getFileData = function (x) {
            var y = this,
              r = this,
              h = new XMLHttpRequest(),
              f = 0 === this.url.indexOf("blob:") ? "blob" : "arraybuffer";
            h.open("GET", this.url, !0);
            h.withCredentials = this.withCredentials;
            h.responseType = f;
            this.Nf &&
              Object.keys(this.Nf).forEach(function (b) {
                h.setRequestHeader(b, y.Nf[b]);
              });
            var e = /^https?:/i.test(this.url);
            h.addEventListener(
              "load",
              function (b) {
                return Object(pa.b)(this, void 0, void 0, function () {
                  var a, w, z, aa, ca, ba;
                  return Object(pa.d)(this, function (ha) {
                    switch (ha.label) {
                      case 0:
                        if (200 !== this.status && (e || 0 !== this.status))
                          return [3, 10];
                        r.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS, [
                          b.loaded,
                          b.loaded,
                        ]);
                        if ("blob" !== this.responseType) return [3, 4];
                        a = this.response;
                        return r.p9(r.filename) ? [4, Object(ka.b)(a)] : [3, 2];
                      case 1:
                        return (
                          (w = ha.aa()),
                          (r.fileSize = w.byteLength),
                          x(new Uint8Array(w)),
                          [3, 3]
                        );
                      case 2:
                        (z = new FileReader()),
                          (z.onload = function (ea) {
                            ea = new Uint8Array(ea.target.result);
                            r.fileSize = ea.length;
                            x(ea);
                          }),
                          z.readAsArrayBuffer(a),
                          (ha.label = 3);
                      case 3:
                        return [3, 9];
                      case 4:
                        ha.wd.push([4, 8, , 9]);
                        aa = new Uint8Array(this.response);
                        if (!r.p9(r.filename)) return [3, 6];
                        a = new Blob([aa.buffer]);
                        return [4, Object(ka.b)(a)];
                      case 5:
                        return (
                          (w = ha.aa()),
                          (r.fileSize = w.byteLength),
                          x(new Uint8Array(w)),
                          [3, 7]
                        );
                      case 6:
                        (r.fileSize = aa.length), x(aa), (ha.label = 7);
                      case 7:
                        return [3, 9];
                      case 8:
                        return (
                          ha.aa(),
                          r.trigger(fa.Events.ERROR, [
                            "pdfLoad",
                            "Out of memory",
                          ]),
                          [3, 9]
                        );
                      case 9:
                        return [3, 11];
                      case 10:
                        (ca = b.currentTarget),
                          (ba = Object(na.b)(ca)),
                          r.trigger(fa.Events.ERROR, [
                            "pdfLoad",
                            "".concat(this.status, " ").concat(ca.statusText),
                            ba,
                          ]),
                          (ha.label = 11);
                      case 11:
                        return (r.AG = null), [2];
                    }
                  });
                });
              },
              !1,
            );
            h.onprogress = function (b) {
              r.trigger(fa.Events.DOCUMENT_LOADING_PROGRESS, [
                b.loaded,
                0 < b.total ? b.total : 0,
              ]);
            };
            h.addEventListener(
              "error",
              function () {
                r.trigger(fa.Events.ERROR, ["pdfLoad", "Network failure"]);
                r.AG = null;
              },
              !1,
            );
            h.send();
            this.AG = h;
          };
          fa.prototype.getFile = function () {
            var x = this;
            return new Promise(function (y) {
              ia.da.isJSWorker && y(x.url);
              if (x.lMa) {
                var r = Object(pa.a)(
                  { url: x.url },
                  x.Nf ? { customHeaders: x.Nf } : {},
                );
                y(r);
              }
              y(null);
            });
          };
          fa.prototype.abort = function () {
            this.AG && (this.AG.abort(), (this.AG = null));
          };
          fa.Events = {
            DOCUMENT_LOADING_PROGRESS: "documentLoadingProgress",
            ERROR: "error",
          };
          return fa;
        })();
        Object(ya.a)(n);
        Object(oa.a)(n);
        Object(oa.b)(n);
        ua["default"] = n;
      },
    },
  ]);
}).call(this || window);
