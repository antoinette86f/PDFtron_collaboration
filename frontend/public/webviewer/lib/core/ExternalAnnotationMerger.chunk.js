/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [4],
    {
      589: function (ya, ua, n) {
        n.r(ua);
        var pa = n(0),
          na = n(611),
          oa = n(612),
          ka;
        (function (ia) {
          ia[(ia.EXTERNAL_XFDF_NOT_REQUESTED = 0)] =
            "EXTERNAL_XFDF_NOT_REQUESTED";
          ia[(ia.EXTERNAL_XFDF_NOT_AVAILABLE = 1)] =
            "EXTERNAL_XFDF_NOT_AVAILABLE";
          ia[(ia.EXTERNAL_XFDF_AVAILABLE = 2)] = "EXTERNAL_XFDF_AVAILABLE";
        })(ka || (ka = {}));
        ya = (function () {
          function ia(fa) {
            this.ba = fa;
            this.state = ka.EXTERNAL_XFDF_NOT_REQUESTED;
          }
          ia.prototype.fya = function () {
            var fa = this;
            return function (x, y, r) {
              return Object(pa.b)(fa, void 0, void 0, function () {
                var h,
                  f,
                  e,
                  b,
                  a,
                  w,
                  z,
                  aa = this,
                  ca;
                return Object(pa.d)(this, function (ba) {
                  switch (ba.label) {
                    case 0:
                      if (this.state !== ka.EXTERNAL_XFDF_NOT_REQUESTED)
                        return [3, 2];
                      h = this.ba.getDocument().iy();
                      return [4, this.Tva(h)];
                    case 1:
                      (f = ba.aa()),
                        (e = this.Kpa(f)),
                        (this.DS =
                          null !==
                            (ca =
                              null === e || void 0 === e
                                ? void 0
                                : e.parse()) && void 0 !== ca
                            ? ca
                            : null),
                        (this.state =
                          null === this.DS
                            ? ka.EXTERNAL_XFDF_NOT_AVAILABLE
                            : ka.EXTERNAL_XFDF_AVAILABLE),
                        (ba.label = 2);
                    case 2:
                      if (this.state === ka.EXTERNAL_XFDF_NOT_AVAILABLE)
                        return r(x), [2];
                      b = new DOMParser();
                      a = b.parseFromString(x, "text/xml");
                      y.forEach(function (ha) {
                        aa.merge(a, aa.DS, ha - 1);
                      });
                      w = new XMLSerializer();
                      z = w.serializeToString(a);
                      r(z);
                      return [2];
                  }
                });
              });
            };
          };
          ia.prototype.oY = function (fa) {
            this.Tva = fa;
          };
          ia.prototype.dg = function () {
            this.DS = void 0;
            this.state = ka.EXTERNAL_XFDF_NOT_REQUESTED;
          };
          ia.prototype.Kpa = function (fa) {
            return fa
              ? Array.isArray(fa)
                ? new na.a(fa)
                : "string" !== typeof fa
                  ? null
                  : new DOMParser()
                        .parseFromString(fa, "text/xml")
                        .querySelector("xfdf > add")
                    ? new na.a(fa)
                    : new oa.a(fa)
              : null;
          };
          ia.prototype.merge = function (fa, x, y) {
            var r = this;
            0 === y && (this.MBa(fa, x.bu), this.OBa(fa, x.jS));
            var h = x.ea[y];
            h &&
              (this.PBa(fa, h.Wt),
              this.RBa(fa, h.Sfa, x.HC),
              this.QBa(fa, h.page, y),
              this.NBa(fa, h.h5));
            h = this.ba.Eb();
            if (y === h - 1) {
              var f = x.HC;
              Object.keys(f).forEach(function (e) {
                f[e].xU || r.w$(fa, e, f[e]);
              });
            }
          };
          ia.prototype.MBa = function (fa, x) {
            null !== x &&
              ((fa = this.GB(fa)), this.Hv(fa, "calculation-order", x));
          };
          ia.prototype.OBa = function (fa, x) {
            null !== x &&
              ((fa = this.GB(fa)), this.Hv(fa, "document-actions", x));
          };
          ia.prototype.PBa = function (fa, x) {
            var y = this,
              r = this.FB(fa.querySelector("xfdf"), "annots");
            Object.keys(x).forEach(function (h) {
              y.Hv(r, '[name="'.concat(h, '"]'), x[h]);
            });
          };
          ia.prototype.RBa = function (fa, x, y) {
            var r = this;
            if (0 !== x.length) {
              var h = this.GB(fa);
              x.forEach(function (f) {
                var e = f.getAttribute("field"),
                  b = y[e];
                b && (r.w$(fa, e, b), r.Hv(h, "null", f));
              });
            }
          };
          ia.prototype.w$ = function (fa, x, y) {
            var r = this.GB(fa),
              h = r.querySelector('ffield[name="'.concat(x, '"]'));
            null !== y.cK &&
              null === h &&
              this.Hv(r, 'ffield[name="'.concat(x, '"]'), y.cK);
            fa = this.FB(fa.querySelector("xfdf"), "xfdf > fields", "fields");
            x = x.split(".");
            this.jX(fa, x, 0, y.value);
            y.xU = !0;
          };
          ia.prototype.QBa = function (fa, x, y) {
            null !== x &&
              ((fa = this.GB(fa)),
              (fa = this.FB(fa, "pages")),
              this.Hv(fa, '[number="'.concat(y + 1, '"]'), x));
          };
          ia.prototype.NBa = function (fa, x) {
            Object.keys(x).forEach(function (y) {
              (y = fa.querySelector('annots [name="'.concat(y, '"]'))) &&
                y.parentElement.removeChild(y);
            });
          };
          ia.prototype.jX = function (fa, x, y, r) {
            if (y === x.length)
              (x = document.createElementNS("", "value")),
                (x.textContent = r),
                this.Hv(fa, "value", x);
            else {
              var h = x[y];
              this.FB(fa, '[name="'.concat(h, '"]'), "field").setAttribute(
                "name",
                h,
              );
              fa = fa.querySelectorAll('[name="'.concat(h, '"]'));
              1 === fa.length
                ? this.jX(fa[0], x, y + 1, r)
                : ((h = this.eua(fa)),
                  this.jX(
                    y === x.length - 1 ? h : this.dLa(fa, h),
                    x,
                    y + 1,
                    r,
                  ));
            }
          };
          ia.prototype.eua = function (fa) {
            for (var x = null, y = 0; y < fa.length; y++) {
              var r = fa[y];
              if (
                0 === r.childElementCount ||
                (1 === r.childElementCount && "value" === r.children[0].tagName)
              ) {
                x = r;
                break;
              }
            }
            return x;
          };
          ia.prototype.dLa = function (fa, x) {
            for (var y = 0; y < fa.length; y++) if (fa[y] !== x) return fa[y];
            return null;
          };
          ia.prototype.Hv = function (fa, x, y) {
            x = fa.querySelector(x);
            null !== x && fa.removeChild(x);
            fa.appendChild(y);
          };
          ia.prototype.GB = function (fa) {
            var x = fa.querySelector("pdf-info");
            if (null !== x) return x;
            x = this.FB(fa.querySelector("xfdf"), "pdf-info");
            x.setAttribute("xmlns", "http://www.pdftron.com/pdfinfo");
            x.setAttribute("version", "2");
            x.setAttribute("import-version", "4");
            return x;
          };
          ia.prototype.FB = function (fa, x, y) {
            var r = fa.querySelector(x);
            if (null !== r) return r;
            r = document.createElementNS("", y || x);
            fa.appendChild(r);
            return r;
          };
          return ia;
        })();
        ua["default"] = ya;
      },
      600: function (ya, ua) {
        ya = (function () {
          function n() {}
          n.prototype.mI = function (pa) {
            var na = { bu: null, jS: null, HC: {}, ea: {} };
            pa = new DOMParser().parseFromString(pa, "text/xml");
            na.bu = pa.querySelector("pdf-info calculation-order");
            na.jS = pa.querySelector("pdf-info document-actions");
            na.HC = this.oDa(pa);
            na.ea = this.CDa(pa);
            return na;
          };
          n.prototype.oDa = function (pa) {
            var na = pa.querySelector("fields");
            pa = pa.querySelectorAll("pdf-info > ffield");
            if (null === na && null === pa) return {};
            var oa = {};
            this.jma(oa, na);
            this.hma(oa, pa);
            return oa;
          };
          n.prototype.jma = function (pa, na) {
            if (null !== na && na.children) {
              for (var oa = [], ka = 0; ka < na.children.length; ka++) {
                var ia = na.children[ka];
                oa.push({ name: ia.getAttribute("name"), element: ia });
              }
              for (; 0 !== oa.length; )
                for (
                  na = oa.shift(), ka = 0;
                  ka < na.element.children.length;
                  ka++
                )
                  (ia = na.element.children[ka]),
                    "value" === ia.tagName
                      ? (pa[na.name] = {
                          value: ia.textContent,
                          cK: null,
                          xU: !1,
                        })
                      : ia.children &&
                        oa.push({
                          name: ""
                            .concat(na.name, ".")
                            .concat(ia.getAttribute("name")),
                          element: ia,
                        });
            }
          };
          n.prototype.hma = function (pa, na) {
            na.forEach(function (oa) {
              var ka = oa.getAttribute("name");
              pa[ka]
                ? (pa[ka].cK = oa)
                : (pa[ka] = { value: null, cK: oa, xU: !1 });
            });
          };
          n.prototype.CDa = function (pa) {
            var na = this,
              oa = {};
            pa.querySelectorAll("pdf-info widget").forEach(function (ka) {
              var ia = parseInt(ka.getAttribute("page"), 10) - 1;
              na.uL(oa, ia);
              oa[ia].Sfa.push(ka);
            });
            pa.querySelectorAll("pdf-info page").forEach(function (ka) {
              var ia = parseInt(ka.getAttribute("number"), 10) - 1;
              na.uL(oa, ia);
              oa[ia].page = ka;
            });
            this.k7(pa).forEach(function (ka) {
              var ia = parseInt(ka.getAttribute("page"), 10),
                fa = ka.getAttribute("name");
              na.uL(oa, ia);
              oa[ia].Wt[fa] = ka;
            });
            this.S6(pa).forEach(function (ka) {
              var ia = parseInt(ka.getAttribute("page"), 10);
              ka = ka.textContent;
              na.uL(oa, ia);
              oa[ia].h5[ka] = !0;
            });
            return oa;
          };
          n.prototype.uL = function (pa, na) {
            pa[na] || (pa[na] = { Wt: {}, h5: {}, Sfa: [], page: null });
          };
          return n;
        })();
        ua.a = ya;
      },
      611: function (ya, ua, n) {
        var pa = n(0),
          na = n(1);
        n.n(na);
        ya = (function (oa) {
          function ka(ia) {
            var fa = oa.call(this) || this;
            fa.Ota = Array.isArray(ia) ? ia : [ia];
            return fa;
          }
          Object(pa.c)(ka, oa);
          ka.prototype.parse = function () {
            var ia = this,
              fa = { bu: null, jS: null, HC: {}, ea: {} };
            this.Ota.forEach(function (x) {
              fa = Object(na.merge)(fa, ia.mI(x));
            });
            return fa;
          };
          ka.prototype.k7 = function (ia) {
            var fa = [];
            ia.querySelectorAll("add > *").forEach(function (x) {
              fa.push(x);
            });
            ia.querySelectorAll("modify > *").forEach(function (x) {
              fa.push(x);
            });
            return fa;
          };
          ka.prototype.S6 = function (ia) {
            return ia.querySelectorAll("delete > *");
          };
          return ka;
        })(n(600).a);
        ua.a = ya;
      },
      612: function (ya, ua, n) {
        var pa = n(0);
        ya = (function (na) {
          function oa(ka) {
            var ia = na.call(this) || this;
            ia.Pta = ka;
            return ia;
          }
          Object(pa.c)(oa, na);
          oa.prototype.parse = function () {
            return this.mI(this.Pta);
          };
          oa.prototype.k7 = function (ka) {
            return ka.querySelectorAll("annots > *");
          };
          oa.prototype.S6 = function () {
            return [];
          };
          return oa;
        })(n(600).a);
        ua.a = ya;
      },
    },
  ]);
}).call(this || window);
