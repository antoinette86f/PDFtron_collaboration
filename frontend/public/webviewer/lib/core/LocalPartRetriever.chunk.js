/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [7],
    {
      575: function (ya, ua, n) {
        n.r(ua);
        var pa = n(0),
          na = n(3),
          oa = n(196);
        ya = n(120);
        var ka = n(329);
        n = n(496);
        var ia = window;
        ya = (function (fa) {
          function x(y, r, h) {
            r = fa.call(this, y, r, h) || this;
            if (y.name && "xod" !== y.name.toLowerCase().split(".").pop())
              throw Error("Not an XOD file");
            if (!ia.FileReader || !ia.File || !ia.Blob)
              throw Error("File API is not supported in this browser");
            r.file = y;
            r.gJ = [];
            r.NR = 0;
            return r;
          }
          Object(pa.c)(x, fa);
          x.prototype.OV = function (y, r, h) {
            var f = this,
              e = new FileReader();
            e.onloadend = function (b) {
              if (0 < f.gJ.length) {
                var a = f.gJ.shift();
                a.aFa.readAsBinaryString(a.file);
              } else f.NR--;
              if (e.error) {
                b = e.error;
                if (b.code === b.ABORT_ERR) {
                  Object(na.i)(
                    "Request for chunk "
                      .concat(r.start, "-")
                      .concat(r.stop, " was aborted"),
                  );
                  return;
                }
                return h(b);
              }
              if ((b = e.content || b.target.result)) return h(!1, b);
              Object(na.i)("No data was returned from FileReader.");
            };
            r &&
              (y = (y.slice || y.webkitSlice || y.mozSlice || y.OPa).call(
                y,
                r.start,
                r.stop,
              ));
            0 === f.gJ.length && 50 > f.NR
              ? (e.readAsBinaryString(y), f.NR++)
              : f.gJ.push({ aFa: e, file: y });
            return function () {
              e.abort();
            };
          };
          x.prototype.$y = function (y) {
            var r = this;
            r.cJ = !0;
            var h = oa.a;
            r.OV(r.file, { start: -h, stop: r.file.size }, function (f, e) {
              if (f)
                return (
                  Object(na.i)("Error loading end header: %s ".concat(f)), y(f)
                );
              if (e.length !== h)
                throw Error("Zip end header data is wrong size!");
              r.Se = new ka.a(e);
              var b = r.Se.T6();
              r.OV(r.file, b, function (a, w) {
                if (a)
                  return (
                    Object(na.i)(
                      "Error loading central directory: %s ".concat(a),
                    ),
                    y(a)
                  );
                if (w.length !== b.stop - b.start)
                  throw Error("Zip central directory data is wrong size!");
                r.Se.Eba(w);
                r.qR = !0;
                r.cJ = !1;
                return y(!1);
              });
            });
          };
          x.prototype.mX = function (y, r) {
            var h = this,
              f = h.Cj[y];
            if (h.Se.u4(y)) {
              var e = h.Se.cD(y),
                b = h.OV(h.file, e, function (a, w) {
                  delete h.Cj[y];
                  if (a)
                    return (
                      Object(na.i)(
                        'Error loading part "%s": %s, '
                          .concat(y, ", ")
                          .concat(a),
                      ),
                      r(a)
                    );
                  if (w.length !== e.stop - e.start)
                    throw Error("Part data is wrong size!");
                  r(!1, y, w, h.Se.e9(y));
                });
              f.Kea = !0;
              f.cancel = b;
            } else r(Error('File not found: "'.concat(y, '"')), y);
          };
          return x;
        })(ya.a);
        Object(n.a)(ya);
        Object(n.b)(ya);
        ua["default"] = ya;
      },
    },
  ]);
}).call(this || window);
