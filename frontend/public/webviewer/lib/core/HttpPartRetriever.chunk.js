/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [0],
    {
      573: function (ya, ua, n) {
        n.r(ua);
        n.d(ua, "ByteRangeRequest", function () {
          return w;
        });
        var pa = n(0),
          na = n(1);
        n.n(na);
        var oa = n(3),
          ka = n(196);
        ya = n(120);
        var ia = n(329),
          fa = n(109),
          x = n(100),
          y = n(328),
          r = n(220);
        n = n(496);
        var h = [],
          f = [],
          e = window,
          b = (function () {
            return function () {
              this.vq = 1;
            };
          })(),
          a;
        (function (aa) {
          aa[(aa.UNSENT = 0)] = "UNSENT";
          aa[(aa.DONE = 4)] = "DONE";
        })(a || (a = {}));
        var w = (function () {
            function aa(ca, ba, ha, ea) {
              var ma = this;
              this.url = ca;
              this.range = ba;
              this.Nf = ha;
              this.withCredentials = ea;
              this.tja = a;
              this.request = new XMLHttpRequest();
              this.request.open("GET", this.url, !0);
              e.Uint8Array && (this.request.responseType = "arraybuffer");
              ea && (this.request.withCredentials = ea);
              z.DISABLE_RANGE_HEADER ||
                (Object(na.isUndefined)(ba.stop)
                  ? this.request.setRequestHeader(
                      "Range",
                      "bytes=".concat(ba.start),
                    )
                  : this.request.setRequestHeader(
                      "Range",
                      ["bytes=", ba.start, "-", ba.stop - 1].join(""),
                    ));
              ha &&
                Object.keys(ha).forEach(function (la) {
                  ma.request.setRequestHeader(la, ha[la]);
                });
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
            aa.prototype.start = function (ca) {
              var ba = this,
                ha = this.request;
              ha.onreadystatechange = function () {
                if (ba.aborted)
                  return (ba.status = y.a.ABORTED), ca({ code: y.a.ABORTED });
                if (this.readyState === ba.tja.DONE) {
                  ba.QK();
                  var ea = 0 === window.document.URL.indexOf("file:///");
                  200 === ha.status ||
                  206 === ha.status ||
                  (ea && 0 === ha.status)
                    ? ((ea = e.G7(this)), ba.cZ(ea, ca))
                    : ((ba.status = y.a.ERROR),
                      ca({ code: ba.status, status: ba.status }));
                }
              };
              this.request.send(null);
              this.status = y.a.STARTED;
            };
            aa.prototype.cZ = function (ca, ba) {
              this.status = y.a.SUCCESS;
              if (ba) return ba(!1, ca);
            };
            aa.prototype.abort = function () {
              this.QK();
              this.aborted = !0;
              this.request.abort();
            };
            aa.prototype.QK = function () {
              var ca = Object(r.c)(this.url, this.range, f);
              -1 !== ca && f.splice(ca, 1);
              if (0 < h.length) {
                ca = h.shift();
                var ba = new aa(
                  ca.url,
                  ca.range,
                  this.Nf,
                  this.withCredentials,
                );
                ca.request = ba;
                f.push(ca);
                ba.start(Object(r.d)(ca));
              }
            };
            aa.prototype.extend = function (ca) {
              var ba = Object.assign({}, this, ca.prototype);
              ba.constructor = ca;
              return ba;
            };
            return aa;
          })(),
          z = (function (aa) {
            function ca(ba, ha, ea, ma, la) {
              ea = aa.call(this, ba, ea, ma) || this;
              ea.qm = {};
              ea.UI = ha;
              ea.url = ba;
              ea.DISABLE_RANGE_HEADER = !1;
              ea.ZE = w;
              ea.t_ = 3;
              ea.Nf = la || {};
              return ea;
            }
            Object(pa.c)(ca, aa);
            ca.prototype.jC = function (ba, ha, ea) {
              var ma = -1 === ba.indexOf("?") ? "?" : "&";
              switch (ea) {
                case !1:
                case x.a.NEVER_CACHE:
                  ba = "".concat(ba + ma, "_=").concat(Object(na.uniqueId)());
                  break;
                case !0:
                case x.a.CACHE:
                  ba = ""
                    .concat(ba + ma, "_=")
                    .concat(ha.start, ",")
                    .concat(Object(na.isUndefined)(ha.stop) ? "" : ha.stop);
              }
              return ba;
            };
            ca.prototype.L4 = function (ba, ha, ea, ma) {
              void 0 === ea && (ea = {});
              return new this.ZE(ba, ha, ea, ma);
            };
            ca.prototype.Dta = function (ba, ha, ea, ma, la) {
              for (var ja = 0; ja < h.length; ja++)
                if (
                  Object(na.isEqual)(h[ja].range, ha) &&
                  Object(na.isEqual)(h[ja].url, ba)
                )
                  return h[ja].gj.push(ma), h[ja].gM++, null;
              for (ja = 0; ja < f.length; ja++)
                if (
                  Object(na.isEqual)(f[ja].range, ha) &&
                  Object(na.isEqual)(f[ja].url, ba)
                )
                  return f[ja].gj.push(ma), f[ja].gM++, null;
              ea = { url: ba, range: ha, UI: ea, gj: [ma], gM: 1 };
              if (0 === h.length && f.length < this.t_)
                return (
                  f.push(ea),
                  (ea.request = this.L4(ba, ha, la, this.withCredentials)),
                  ea
                );
              h.push(ea);
              return null;
            };
            ca.prototype.Bs = function (ba, ha, ea) {
              var ma = this.jC(ba, ha, this.UI);
              (ba = this.Dta(ma, ha, this.UI, ea, this.Nf)) &&
                ba.request.start(Object(r.d)(ba));
              return function () {
                var la = Object(r.c)(ma, ha, f);
                if (-1 !== la) {
                  var ja = --f[la].gM;
                  0 === ja && f[la].request && f[la].request.abort();
                } else
                  (la = Object(r.c)(ma, ha, h)),
                    -1 !== la &&
                      ((ja = --h[la].gM), 0 === ja && h.splice(la, 1));
              };
            };
            ca.prototype.W6 = function () {
              return { start: -ka.a };
            };
            ca.prototype.sya = function () {
              var ba = -(ka.a + ka.e);
              return { start: ba - ka.d, end: ba };
            };
            ca.prototype.$y = function (ba) {
              var ha = this;
              this.cJ = !0;
              var ea = ka.a;
              this.Bs(this.url, this.W6(), function (ma, la, ja) {
                function sa() {
                  var qa = ha.Se.T6();
                  ha.Bs(ha.url, qa, function (ra, ta) {
                    if (ra)
                      return (
                        Object(oa.i)(
                          "Error loading central directory: ".concat(ra),
                        ),
                        ba(ra)
                      );
                    ta = Object(fa.a)(ta);
                    if (ta.length !== qa.stop - qa.start)
                      return ba(
                        "Invalid XOD file: Zip central directory data is wrong size! Should be "
                          .concat(qa.stop - qa.start, " but is ")
                          .concat(ta.length),
                      );
                    ha.Se.Eba(ta);
                    ha.qR = !0;
                    ha.cJ = !1;
                    return ba(!1);
                  });
                }
                if (ma)
                  return (
                    Object(oa.i)("Error loading end header: ".concat(ma)),
                    ba(ma, la, ja)
                  );
                la = Object(fa.a)(la);
                if (la.length !== ea)
                  return ba(
                    "Invalid XOD file: Zip end header data is wrong size!",
                  );
                try {
                  ha.Se = new ia.a(la);
                } catch (qa) {
                  return ba(qa);
                }
                ha.Se.TAa
                  ? ha.Bs(ha.url, ha.sya(), function (qa, ra) {
                      if (qa)
                        return (
                          Object(oa.i)(
                            "Error loading zip64 header: ".concat(qa),
                          ),
                          ba(qa)
                        );
                      ra = Object(fa.a)(ra);
                      ha.Se.wBa(ra);
                      sa();
                    })
                  : sa();
              });
            };
            ca.prototype.z7 = function (ba) {
              ba(Object.keys(this.Se.Tr));
            };
            ca.prototype.mX = function (ba, ha) {
              var ea = this;
              if (this.Se.u4(ba)) {
                var ma = this.Se.bD(ba);
                if (ma in this.qm) {
                  var la = this.Cj[ba];
                  la.sx = this.qm[ma];
                  la.sx.vq++;
                  la.cancel = la.sx.cancel;
                } else {
                  var ja = this.Se.Wva(ba),
                    sa = this.Bs(this.url, ja, function (ra, ta) {
                      ra
                        ? (Object(oa.i)(
                            'Error loading part "'.concat(ba, '": ').concat(ra),
                          ),
                          ea.Bs(ea.url, ja, function (va, Ba) {
                            if (va) return ha(va, ba);
                            ea.Iba(Ba, ja, ma, ba, ha);
                          }))
                        : ea.Iba(ta, ja, ma, ba, ha);
                    }),
                    qa = this.Cj[ba];
                  qa &&
                    ((qa.Kea = !0),
                    (qa.cancel = function () {
                      qa.sx.vq--;
                      0 === qa.sx.vq && (sa(), delete ea.qm[ma]);
                    }),
                    (this.qm[ma] = new b(ma)),
                    (qa.sx = this.qm[ma]),
                    (qa.sx.cancel = qa.cancel));
                }
              } else
                delete this.Cj[ba],
                  ha(Error('File not found: "'.concat(ba, '"')), ba);
            };
            ca.prototype.Iba = function (ba, ha, ea, ma, la) {
              if (ba.length !== ha.stop - ha.start)
                la(Error("Part data is wrong size!"), ma);
              else {
                do {
                  if (!this.qm[ea]) return;
                  ma = this.qm[ea].vq;
                  for (var ja = ha.Iv.length, sa = 0; sa < ja; ++sa) {
                    var qa = ha.Iv[sa];
                    la(
                      !1,
                      qa.Ev,
                      ba["string" === typeof ba ? "substring" : "subarray"](
                        qa.start,
                        qa.stop,
                      ),
                      this.Se.e9(qa.Ev),
                    );
                    qa.Ev in this.Cj && delete this.Cj[qa.Ev];
                  }
                } while (ma !== this.qm[ea].vq);
                delete this.qm[ea];
              }
            };
            ca.DISABLE_RANGE_HEADER = !1;
            ca.t_ = 3;
            return ca;
          })(ya.a);
        (function (aa) {
          function ca(ba, ha, ea) {
            var ma = aa.call(this) || this,
              la;
            for (la in ba) ma[la] = ba[la];
            ma.RQa = ba;
            ma.startOffset = ha;
            ma.endOffset = ea;
            ma.L4 = function (ja, sa, qa, ra) {
              Object(na.isUndefined)(sa.stop)
                ? ((sa.start += ma.endOffset), (sa.stop = ma.endOffset))
                : ((sa.start += ma.startOffset), (sa.stop += ma.startOffset));
              ja = ma.jC(ma.url, sa, ma.UI);
              return new ba.ZE(ja, sa, qa, ra);
            };
            return ma;
          }
          Object(pa.c)(ca, aa);
          return ca;
        })(z);
        Object(n.a)(z);
        Object(n.b)(z);
        ua["default"] = z;
      },
    },
  ]);
}).call(this || window);
