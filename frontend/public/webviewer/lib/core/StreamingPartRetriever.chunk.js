/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [11],
    {
      582: function (ya, ua, n) {
        n.r(ua);
        var pa = n(0),
          na = n(1);
        n.n(na);
        var oa = n(3),
          ka = n(196);
        ya = n(61);
        var ia = n(120),
          fa = n(329),
          x = n(100),
          y = n(328);
        n = n(496);
        var r = window,
          h = (function () {
            function b(a, w, z) {
              var aa = -1 === a.indexOf("?") ? "?" : "&";
              switch (w) {
                case x.a.NEVER_CACHE:
                  this.url = ""
                    .concat(a + aa, "_=")
                    .concat(Object(na.uniqueId)());
                  break;
                default:
                  this.url = a;
              }
              this.Nf = z;
              this.request = new XMLHttpRequest();
              this.request.open("GET", this.url, !0);
              this.request.setRequestHeader(
                "X-Requested-With",
                "XMLHttpRequest",
              );
              this.request.overrideMimeType
                ? this.request.overrideMimeType(
                    "text/plain; charset=x-user-defined",
                  )
                : this.request.setRequestHeader(
                    "Accept-Charset",
                    "x-user-defined",
                  );
              this.status = y.a.NOT_STARTED;
            }
            b.prototype.start = function (a, w) {
              var z = this,
                aa = this,
                ca = this.request,
                ba;
              aa.eE = 0;
              a &&
                Object.keys(a).forEach(function (ha) {
                  z.request.setRequestHeader(ha, a[ha]);
                });
              w && (this.request.withCredentials = w);
              this.RM = setInterval(function () {
                var ha = 0 === window.document.URL.indexOf("file:///");
                ha = 200 === ca.status || (ha && 0 === ca.status);
                if (ca.readyState !== y.b.DONE || ha) {
                  try {
                    ca.responseText;
                  } catch (ea) {
                    return;
                  }
                  aa.eE < ca.responseText.length &&
                    (ba = aa.HEa()) &&
                    aa.trigger(b.Events.DATA, [ba]);
                  0 === ca.readyState &&
                    (clearInterval(aa.RM), aa.trigger(b.Events.DONE));
                } else
                  clearInterval(aa.RM),
                    aa.trigger(b.Events.DONE, [
                      "Error received return status ".concat(ca.status),
                    ]);
              }, 1e3);
              this.request.send(null);
              this.status = y.a.STARTED;
            };
            b.prototype.HEa = function () {
              var a = this.request,
                w = a.responseText;
              if (0 !== w.length)
                if (this.eE === w.length)
                  clearInterval(this.RM), this.trigger(b.Events.DONE);
                else
                  return (
                    (w = Math.min(this.eE + 3e6, w.length)),
                    (a = r.G7(a, this.eE, !0, w)),
                    (this.eE = w),
                    a
                  );
            };
            b.prototype.abort = function () {
              clearInterval(this.RM);
              var a = this;
              this.request.onreadystatechange = function () {
                Object(oa.i)("StreamingRequest aborted");
                a.status = y.a.ABORTED;
                return a.trigger(b.Events.ABORTED);
              };
              this.request.abort();
            };
            b.prototype.finish = function () {
              var a = this;
              this.request.onreadystatechange = function () {
                a.status = y.a.SUCCESS;
                return a.trigger(b.Events.DONE);
              };
              this.request.abort();
            };
            b.Events = { DONE: "done", DATA: "data", ABORTED: "aborted" };
            return b;
          })();
        Object(ya.a)(h);
        var f;
        (function (b) {
          b[(b.LOCAL_HEADER = 0)] = "LOCAL_HEADER";
          b[(b.FILE = 1)] = "FILE";
          b[(b.CENTRAL_DIR = 2)] = "CENTRAL_DIR";
        })(f || (f = {}));
        var e = (function (b) {
          function a() {
            var w = b.call(this) || this;
            w.buffer = "";
            w.state = f.LOCAL_HEADER;
            w.UY = 4;
            w.bq = null;
            w.ez = ka.c;
            w.Tr = {};
            return w;
          }
          Object(pa.c)(a, b);
          a.prototype.wEa = function (w) {
            var z;
            for (w = this.buffer + w; w.length >= this.ez; )
              switch (this.state) {
                case f.LOCAL_HEADER:
                  this.bq = z = this.LEa(w.slice(0, this.ez));
                  if (z.Uz !== ka.g)
                    throw Error(
                      "Wrong signature in local header: ".concat(z.Uz),
                    );
                  w = w.slice(this.ez);
                  this.state = f.FILE;
                  this.ez = z.dR + z.uv + z.FC + this.UY;
                  this.trigger(a.Events.HEADER, [z]);
                  break;
                case f.FILE:
                  this.bq.name = w.slice(0, this.bq.uv);
                  this.Tr[this.bq.name] = this.bq;
                  z = this.ez - this.UY;
                  var aa = w.slice(this.bq.uv + this.bq.FC, z);
                  this.trigger(a.Events.FILE, [this.bq.name, aa, this.bq.zR]);
                  w = w.slice(z);
                  if (w.slice(0, this.UY) === ka.h)
                    (this.state = f.LOCAL_HEADER), (this.ez = ka.c);
                  else return (this.state = f.CENTRAL_DIR), !0;
              }
            this.buffer = w;
            return !1;
          };
          a.Events = { HEADER: "header", FILE: "file" };
          return a;
        })(fa.a);
        Object(ya.a)(e);
        ya = (function (b) {
          function a(w, z, aa, ca, ba) {
            aa = b.call(this, w, aa, ca) || this;
            aa.url = w;
            aa.stream = new h(w, z);
            aa.Se = new e();
            aa.fba = window.createPromiseCapability();
            aa.Oba = {};
            aa.Nf = ba;
            return aa;
          }
          Object(pa.c)(a, b);
          a.prototype.kF = function (w) {
            var z = this;
            this.request([this.Fm, this.Ho, this.Em]);
            this.stream.addEventListener(h.Events.DATA, function (aa) {
              try {
                if (z.Se.wEa(aa)) return z.stream.finish();
              } catch (ca) {
                throw (z.stream.abort(), z.Fu(ca), w(ca), ca);
              }
            });
            this.stream.addEventListener(h.Events.DONE, function (aa) {
              z.UDa = !0;
              z.fba.resolve();
              aa && (z.Fu(aa), w(aa));
            });
            this.Se.addEventListener(
              e.Events.HEADER,
              Object(na.bind)(this.Nba, this),
            );
            this.Se.addEventListener(
              e.Events.FILE,
              Object(na.bind)(this.bFa, this),
            );
            return this.stream.start(this.Nf, this.withCredentials);
          };
          a.prototype.z7 = function (w) {
            var z = this;
            this.fba.promise.then(function () {
              w(Object.keys(z.Se.Tr));
            });
          };
          a.prototype.Ps = function () {
            return !0;
          };
          a.prototype.request = function (w) {
            var z = this;
            this.UDa &&
              w.forEach(function (aa) {
                z.Oba[aa] || z.vLa(aa);
              });
          };
          a.prototype.Nba = function () {};
          a.prototype.abort = function () {
            this.stream && this.stream.abort();
          };
          a.prototype.vLa = function (w) {
            this.trigger(ia.a.Events.PART_READY, [
              { Lb: w, error: "Requested part not found", Al: !1, ri: !1 },
            ]);
          };
          a.prototype.bFa = function (w, z, aa) {
            this.Oba[w] = !0;
            this.trigger(ia.a.Events.PART_READY, [
              { Lb: w, data: z, Al: !1, ri: !1, error: null, ue: aa },
            ]);
          };
          return a;
        })(ia.a);
        Object(n.a)(ya);
        Object(n.b)(ya);
        ua["default"] = ya;
      },
    },
  ]);
}).call(this || window);
