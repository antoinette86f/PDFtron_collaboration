/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [13],
    {
      584: function (ya, ua, n) {
        function pa() {
          return !1;
        }
        function na(z, aa, ca) {
          if (!(aa in w)) return !0;
          aa = w[aa];
          for (var ba = 0; ba < aa.length; ba++) {
            var ha = z;
            var ea = aa[ba];
            var ma = ca;
            if (ea.name in ha) {
              var la = "",
                ja = !1;
              ha = ha[ea.name];
              switch (ea.type) {
                case "s":
                  la = "String";
                  ja = Object(ia.isString)(ha);
                  break;
                case "a":
                  la = "Array";
                  ja = Object(ia.isArray)(ha);
                  break;
                case "n":
                  la = "Number";
                  ja = Object(ia.isNumber)(ha) && Object(ia.isFinite)(ha);
                  break;
                case "o":
                  (la = "Object"),
                    (ja = Object(ia.isObject)(ha) && !Object(ia.isArray)(ha));
              }
              ja ||
                ma.reject(
                  'Expected response field "'
                    .concat(ea.name, '" to have type ')
                    .concat(la),
                );
              ea = ja;
            } else
              ma.reject('Response missing field "'.concat(ea.name, '"')),
                (ea = !1);
            if (!ea) return !1;
          }
          return !0;
        }
        function oa(z) {
          for (
            var aa = 0,
              ca = [
                "locale",
                "excelMaxAllowedCellCount",
                "applyPageBreaksToSheet",
                "excelDefaultCellBorderWidth",
                "displayChangeTracking",
              ];
            aa < ca.length;
            aa++
          ) {
            var ba = ca[aa],
              ha = ba;
            ba = ba.charAt(0).toUpperCase() + ba.slice(1);
            z[ha] &&
              (Object.defineProperty(
                z,
                ba,
                Object.getOwnPropertyDescriptor(z, ha),
              ),
              delete z[ha]);
          }
          return z;
        }
        n.r(ua);
        var ka = n(0),
          ia = n(1);
        n.n(ia);
        var fa = n(3);
        ya = n(61);
        var x = n(34),
          y = n(602),
          r = n(120),
          h = n(496),
          f = n(54),
          e = n(220),
          b = (function () {
            function z() {
              this.request = this.result = null;
              this.state = 0;
              var aa = this;
              aa.promise = new Promise(function (ca, ba) {
                aa.resolve = function () {
                  if (0 === aa.state || 4 === aa.state)
                    (aa.state = 1),
                      (aa.result = arguments[0]),
                      ca.apply(null, arguments);
                };
                aa.reject = function () {
                  if (0 === aa.state || 4 === aa.state)
                    (aa.state = 2), ba.apply(null, arguments);
                };
              });
            }
            z.prototype.Ty = function () {
              return 1 === (this.state & 1);
            };
            z.prototype.yAa = function () {
              return 2 === (this.state & 2);
            };
            z.prototype.Yl = function () {
              return !this.yAa() && !this.Ty();
            };
            z.prototype.Rza = function () {
              return 4 === (this.state & 4);
            };
            z.prototype.pY = function () {
              this.state |= 4;
            };
            return z;
          })(),
          a = (function () {
            function z() {
              this.Gy = {};
              this.Kc = [];
            }
            z.prototype.pop = function () {
              var aa = this.Kc.pop();
              this.Gy[aa.key] = void 0;
              return aa;
            };
            z.prototype.push = function (aa, ca) {
              ca = { key: aa, data: ca };
              this.Kc.push(ca);
              this.Gy[aa] = ca.data;
            };
            z.prototype.contains = function (aa) {
              return !!this.Gy[aa];
            };
            z.prototype.get = function (aa) {
              return this.Gy[aa];
            };
            z.prototype.set = function (aa, ca) {
              var ba = this;
              this.Gy[aa] = ca;
              this.Kc.forEach(function (ha, ea) {
                ha.key === aa && (ba.Kc[ea] = ha);
              });
            };
            z.prototype.remove = function (aa) {
              var ca = this;
              this.Gy[aa] = void 0;
              this.Kc.forEach(function (ba, ha) {
                ba.key === aa && ca.Kc.splice(ha, 1);
              });
            };
            z.prototype.length = function () {
              return this.Kc.length;
            };
            return z;
          })(),
          w = {
            pages: [{ name: "pages", type: "a" }],
            pdf: [{ name: "url", type: "s" }],
            docmod: [
              { name: "url", type: "s" },
              { name: "rID", type: "s" },
            ],
            health: [],
            tiles: [
              { name: "z", type: "n" },
              { name: "rID", type: "n" },
              { name: "tiles", type: "a" },
              { name: "size", type: "n" },
            ],
            cAnnots: [{ name: "annots", type: "a" }],
            annots: [
              { name: "url", type: "s" },
              { name: "name", type: "s" },
            ],
            image: [
              { name: "url", type: "s" },
              { name: "name", type: "s" },
              { name: "p", type: "n" },
            ],
            text: [
              { name: "url", type: "s" },
              { name: "name", type: "s" },
              { name: "p", type: "n" },
            ],
            ApString2Xod: [
              { name: "url", type: "s" },
              { name: "rID", type: "s" },
            ],
          };
        n = (function () {
          function z(aa, ca, ba) {
            var ha = this;
            this.VY = this.p5 = !1;
            this.Bj =
              this.rO =
              this.vA =
              this.og =
              this.SB =
              this.Gs =
              this.RB =
              this.Nq =
                null;
            this.mq = new b();
            this.ku = new b();
            this.mJ = !1;
            this.Eh = this.sg = this.tg = this.th = null;
            this.$h = [];
            this.iK = [];
            this.cache = {};
            this.timeStamp = 0;
            this.wj = [];
            this.im = [];
            this.HS = null;
            this.b5 = !1;
            this.ida = this.id = null;
            this.MV = this.C8 = pa;
            this.Sh = 0;
            this.sU = !1;
            this.S$ = 1;
            this.em = {};
            this.Zw = 0;
            this.Dz = new a();
            ca.endsWith("/") || (ca += "/");
            ba = ba || {};
            this.p5 = ba.disableWebsockets || !1;
            this.VY = ba.singleServerMode || !1;
            null != ba.customQueryParameters &&
              Object(f.b)("wvsQueryParameters", ba.customQueryParameters);
            ca.endsWith("blackbox/") || (ca += "blackbox/");
            this.Nq = ba.uploadData || null;
            this.vA = ba.uriData || null;
            this.RB = ba.cacheKey || null;
            if ((this.Gs = ba.officeOptions || null)) this.Gs = oa(this.Gs);
            this.og = ba.rasterizerOptions || null;
            this.SB = ba.cadOptions || null;
            this.Mg = ca;
            this.iS = aa;
            this.Vs(!0);
            this.zx = new y.a(ca, null, this.uk()).Hua(
              !this.p5,
              function (ea) {
                ha.ICa(ea);
              },
              function () {
                return null;
              },
              function () {
                ha.mJ = !1;
              },
              function () {
                ha.MGa();
              },
            );
          }
          z.prototype.Dqa = function () {
            var aa = this;
            return new Promise(function (ca, ba) {
              var ha = new XMLHttpRequest(),
                ea = "".concat(aa.Mg, "ck");
              ha.open("GET", ea);
              ha.withCredentials = aa.uk();
              ha.onreadystatechange = function () {
                ha.readyState === XMLHttpRequest.DONE &&
                  (200 === ha.status ? ca() : ba());
              };
              ha.send();
            });
          };
          z.prototype.IIa = function (aa) {
            this.C8 = aa || pa;
            this.MV = pa;
          };
          z.prototype.Ooa = function () {
            this.Aca();
            return this.zx.Bu();
          };
          z.prototype.Aca = function () {
            Object(ka.b)(this, void 0, void 0, function () {
              return Object(ka.d)(this, function (aa) {
                switch (aa.label) {
                  case 0:
                    return (
                      (this.ku = new b()),
                      (this.mq = new b()),
                      (this.mJ = !1),
                      (this.id = null),
                      (this.b5 = !1),
                      [4, this.Dqa().catch(function () {})]
                    );
                  case 1:
                    return aa.aa(), [2];
                }
              });
            });
          };
          z.prototype.MGa = function () {
            this.C8();
            this.Aca();
            this.th &&
              (this.th.Yl()
                ? this.Gj(this.th.request)
                : this.th.Ty() &&
                  this.MV(this.th.result.url, "pdf") &&
                  ((this.th = null), this.xca()));
            this.Eh && this.Eh.Yl() && this.Gj(this.Eh.request);
            this.tg && this.tg.Yl()
              ? this.Gj(this.tg.request)
              : this.sg && this.sg.Yl() && this.h8();
            var aa;
            for (aa = 0; aa < this.wj.length; aa++)
              this.wj[aa] &&
                (this.wj[aa].Yl()
                  ? this.Gj(this.wj[aa].request)
                  : this.wj[aa].Ty() &&
                    this.MV(this.wj[aa].result.url, "image") &&
                    ((this.wj[aa] = null), this.dN(Object(ia.uniqueId)(), aa)));
            for (aa = 0; aa < this.im.length; aa++)
              this.im[aa] &&
                this.im[aa].Yl() &&
                !this.im[aa].Rza() &&
                this.Gj(this.im[aa].request);
            for (aa = 0; aa < this.$h.length; aa++)
              this.$h[aa] && this.$h[aa].Yl() && this.Gj(this.$h[aa].request);
          };
          z.prototype.iza = function () {
            return this.mJ
              ? Promise.resolve()
              : ((this.mJ = !0), (this.timeStamp = Date.now()), this.zx.vL());
          };
          z.prototype.hMa = function () {
            var aa = this,
              ca,
              ba,
              ha,
              ea,
              ma;
            return new Promise(function (la, ja) {
              if (aa.Nq)
                (ca = new FormData()),
                  ca.append("file", aa.Nq.fileHandle, aa.Nq.fileHandle.name),
                  aa.Gs && ca.append("officeOptions", JSON.stringify(aa.Gs)),
                  aa.og &&
                    ca.append("rasterizerOptions", JSON.stringify(aa.og)),
                  aa.SB && ca.append("cadOptions", aa.SB.getJsonString()),
                  aa.RB && ca.append("cacheKey", aa.RB),
                  (ba = aa.Nq.loadCallback),
                  (ea = "upload"),
                  (ha = aa.Nq.extension);
              else if (aa.vA)
                (ca = { uri: aa.vA.uri, rRa: aa.vA.shareId }),
                  (ca = Object.keys(ca)
                    .map(function (ra) {
                      return ""
                        .concat(ra, "=")
                        .concat(ca[ra] ? encodeURIComponent(ca[ra]) : "");
                    })
                    .join("&")),
                  (ma = "application/x-www-form-urlencoded; charset=UTF-8"),
                  (ba = aa.vA.loadCallback),
                  (ea = "url"),
                  (ha = aa.vA.extension);
              else {
                la();
                return;
              }
              var sa = new XMLHttpRequest(),
                qa = Object(x.k)(aa.Mg, "AuxUpload");
              qa = Object(e.a)(qa, { type: ea, ext: ha });
              sa.open("POST", qa);
              sa.withCredentials = aa.uk();
              ma && sa.setRequestHeader("Content-Type", ma);
              sa.addEventListener("load", function () {
                if (sa.readyState === sa.DONE && 200 === sa.status) {
                  var ra = JSON.parse(sa.response);
                  aa.iS = ra.uri;
                  ba(ra);
                  la(ra);
                }
              });
              sa.addEventListener("error", function () {
                ja("".concat(sa.statusText, " ").concat(JSON.stringify(sa)));
              });
              aa.Nq &&
                null != aa.Nq.onProgress &&
                (sa.upload.onprogress = function (ra) {
                  aa.Nq.onProgress(ra);
                });
              sa.send(ca);
            });
          };
          z.prototype.yGa = function (aa) {
            this.password = aa || null;
            this.mq.Ty() || ((this.mq = new b()), this.Gj({ t: "pages" }));
            return this.mq.promise;
          };
          z.prototype.kF = function (aa) {
            this.HS = aa || null;
            this.mq.Ty() || this.Gj({ t: "pages" });
            return this.mq.promise;
          };
          z.prototype.eC = function (aa) {
            aa = Object.assign(aa, { uri: encodeURIComponent(this.iS) });
            this.HS && (aa.ext = this.HS);
            this.Bj && (aa.c = this.Bj);
            this.password && (aa.pswd = this.password);
            this.RB && (aa.cacheKey = this.RB);
            this.Gs && (aa.officeOptions = this.Gs);
            this.og && (aa.rastOptions = this.og);
            this.SB && (aa.cadOptions = this.SB.mImpl);
            return aa;
          };
          z.prototype.sHa = function () {
            0 < this.Dz.length() &&
              10 >= this.Zw &&
              this.tHa(this.Dz.pop().data);
          };
          z.prototype.Zna = function (aa) {
            0 < this.Dz.length() && this.Dz.contains(aa) && this.Dz.remove(aa);
          };
          z.prototype.Gj = function (aa) {
            aa = this.eC(aa);
            this.zx.send(aa);
          };
          z.prototype.dda = function (aa, ca) {
            10 < this.Zw
              ? this.Dz.push(aa, ca)
              : (this.Zw++, (aa = this.eC(ca)), this.zx.send(aa));
          };
          z.prototype.tHa = function (aa) {
            this.Zw++;
            aa = this.eC(aa);
            this.zx.send(aa);
          };
          z.prototype.kp = function (aa) {
            return aa;
          };
          z.prototype.B8 = function (aa) {
            this.VY && aa
              ? Object(fa.i)(
                  "Server failed health check. Single server mode ignoring check.",
                )
              : !this.APa && aa && 3 >= this.Sh
                ? ((this.sU = !0), this.zx.Bu())
                : 3 < this.Sh && (this.VY = !0);
          };
          z.prototype.ICa = function (aa) {
            var ca = this,
              ba = aa.data,
              ha = aa.err,
              ea = aa.t;
            switch (ea) {
              case "upload":
                ha ? this.iMa.reject(ha) : this.iMa.resolve("Success");
                break;
              case "pages":
                ha
                  ? this.mq.reject(ha)
                  : na(ba, ea, this.mq) && this.mq.resolve(ba);
                break;
              case "config":
                if (ha) this.ku.reject(ha);
                else if (na(ba, ea, this.ku)) {
                  this.B8(ba.unhealthy);
                  ba.id && (this.id = ba.id);
                  if (ba.auth) {
                    var ma = Object(f.a)("wvsQueryParameters");
                    ma.auth = ba.auth;
                    Object(f.b)("wvsQueryParameters", ma);
                  }
                  ba.serverVersion &&
                    ((this.rO = ba.serverVersion),
                    Object(fa.g)(
                      "[WebViewer Server] server version: ".concat(this.rO),
                    ));
                  ba.serverID
                    ? ((this.Sh =
                        ba.serverID === this.ida && this.sU ? this.Sh + 1 : 0),
                      (this.ida = ba.serverID))
                    : (this.Sh = 0);
                  this.sU = !1;
                  this.ku.resolve(ba);
                }
                break;
              case "health":
                ha
                  ? this.ku.reject(ha)
                  : na(ba, ea, this.ku) && this.B8(ba.unhealthy);
                break;
              case "pdf":
                ba.url = Object(e.a)(
                  "".concat(this.Mg, "../").concat(encodeURI(ba.url)),
                );
                ha
                  ? this.th.reject(ha)
                  : na(ba, ea, this.th) && this.th.resolve(ba);
                break;
              case "ApString2Xod":
                ba.url = Object(e.a)(
                  "".concat(this.Mg, "../data/").concat(encodeURI(ba.url)),
                );
                ha
                  ? this.em[ba.rID].reject(ha)
                  : na(ba, ea, this.em[ba.rID]) && this.em[ba.rID].resolve(ba);
                break;
              case "docmod":
                ba.url = Object(e.a)(
                  "".concat(this.Mg, "../").concat(encodeURI(ba.url)),
                );
                ha
                  ? this.em[ba.rID].reject(ha)
                  : na(ba, ea, this.th) && this.em[ba.rID].resolve(ba);
                break;
              case "xod":
                if (ha)
                  this.tg && this.tg.Yl() && this.tg.reject(ha),
                    this.sg && this.sg.Yl() && this.sg.reject(ha);
                else if (ba.notFound)
                  ba.noCreate ||
                    (this.tg && this.tg.Yl() && this.tg.resolve(ba)),
                    this.sg && this.sg.Yl() && this.sg.resolve(ba);
                else {
                  ba.url &&
                    (ba.url = Object(e.a)(
                      "".concat(this.Mg, "../").concat(encodeURI(ba.url)),
                    ));
                  if (!this.sg || this.sg.Ty())
                    (this.sg = new b()),
                      (this.sg.request = { t: "xod", noCreate: !0 });
                  this.tg ||
                    ((this.tg = new b()), (this.tg.request = { t: "xod" }));
                  this.sg.resolve(ba);
                  this.tg.resolve(ba);
                }
                break;
              case "cAnnots":
                ma = this.Eh;
                if (ha) ma.reject(ha);
                else if (na(ba, ea, ma)) {
                  ma.pY();
                  var la = [],
                    ja = ba.annots;
                  ba = function (Ba) {
                    var Ca = ja[Ba].s,
                      Aa = ja[Ba].e,
                      Ia = ""
                        .concat(sa.Mg, "../")
                        .concat(encodeURI(ja[Ba].xfdf)),
                      Ea =
                        "true" === ja[Ba].hasAppearance
                          ? Object(e.a)("".concat(Ia, ".xodapp"))
                          : null,
                      La = Object(ia.range)(Ca, Aa);
                    la[Ba] = {
                      range: La,
                      promise: new Promise(function (Na, Oa) {
                        var Ta = new XMLHttpRequest();
                        Ta.open("GET", Object(e.a)(Ia));
                        Ta.responseType = "text";
                        Ta.withCredentials = ca.uk();
                        Ta.addEventListener("load", function () {
                          Ta.readyState === Ta.DONE &&
                            200 === Ta.status &&
                            Na({ iw: Ta.response, Zo: Ea, range: La });
                        });
                        Ta.addEventListener("error", function () {
                          Oa(
                            ""
                              .concat(Ta.statusText, " ")
                              .concat(JSON.stringify(Ta)),
                          );
                        });
                        Ta.send();
                      }),
                    };
                  };
                  var sa = this;
                  for (ha = 0; ha < ja.length; ha++) ba(ha);
                  ma.resolve(la);
                }
                break;
              case "annots":
                if (ha) this.Eh.reject(ha);
                else if (na(ba, ea, this.Eh)) {
                  this.Eh.pY();
                  var qa = new XMLHttpRequest();
                  ma = "".concat(this.Mg, "../").concat(encodeURI(ba.url));
                  var ra = ba.hasAppearance
                    ? Object(e.a)("".concat(ma, ".xodapp"))
                    : null;
                  qa.open("GET", Object(e.a)(ma));
                  qa.responseType = "text";
                  qa.withCredentials = this.uk();
                  qa.addEventListener("load", function () {
                    qa.readyState === qa.DONE &&
                      200 === qa.status &&
                      ca.Eh.resolve({ iw: qa.response, Zo: ra });
                  });
                  qa.addEventListener("error", function () {
                    ca.Eh.reject(
                      "".concat(qa.statusText, " ").concat(JSON.stringify(qa)),
                    );
                  });
                  qa.send();
                }
                break;
              case "image":
                this.Zw--;
                var ta = this.wj[ba.p];
                ha
                  ? ta.promise.reject(ha)
                  : na(ba, ea, ta) &&
                    ((ta.result = ba),
                    (ta.result.url = Object(e.a)(
                      ""
                        .concat(this.Mg, "../")
                        .concat(encodeURI(ta.result.url)),
                    )),
                    ta.resolve(ta.result));
                break;
              case "tiles":
                this.Zw--;
                ta = ba.rID;
                ma = this.$h[ta];
                this.$h[ta] = null;
                this.iK.push(ta);
                if (ha) ma.reject(ha);
                else if (na(ba, ea, ma)) {
                  for (ha = 0; ha < ba.tiles.length; ha++)
                    ba.tiles[ha] = Object(e.a)(
                      "".concat(this.Mg, "../").concat(encodeURI(ba.tiles[ha])),
                    );
                  ma.resolve(ba);
                }
                break;
              case "text":
                ta = this.im[ba.p];
                if (ha) ta.reject(ha);
                else if (na(ba, ea, ta)) {
                  ta.pY();
                  var va = new XMLHttpRequest();
                  ba = Object(e.a)(
                    "".concat(this.Mg, "../").concat(encodeURI(ba.url)),
                  );
                  va.open("GET", ba);
                  va.withCredentials = this.uk();
                  va.addEventListener("load", function () {
                    va.readyState === va.DONE &&
                      200 === va.status &&
                      ((ta.result = JSON.parse(va.response)),
                      ta.resolve(ta.result));
                  });
                  va.addEventListener("error", function (Ba) {
                    ta.reject(
                      "".concat(va.statusText, " ").concat(JSON.stringify(Ba)),
                    );
                  });
                  va.send();
                }
                break;
              case "progress":
                "loading" === ba.t &&
                  this.trigger(r.a.Events.DOCUMENT_LOADING_PROGRESS, [
                    ba.bytes,
                    ba.total,
                  ]);
            }
            this.sHa();
            !ea &&
              aa.echo &&
              aa &&
              "apstring2xod" === aa.echo.t &&
              (aa = aa.echo.reqID) &&
              (2 <= parseInt(this.rO, 10)
                ? this.em[aa].reject("Message unhandled by server")
                : this.em[aa].reject());
          };
          z.prototype.pva = function () {
            return Object(ka.b)(this, void 0, void 0, function () {
              return Object(ka.d)(this, function (aa) {
                switch (aa.label) {
                  case 0:
                    return [4, this.iza()];
                  case 1:
                    return aa.aa(), [2, this.ku.promise];
                }
              });
            });
          };
          z.prototype.Vua = function (aa) {
            for (
              var ca = this,
                ba = new XMLHttpRequest(),
                ha = Object(e.a)("".concat(this.Mg, "aul"), { id: this.id }),
                ea = new FormData(),
                ma = {},
                la = 0;
              la < aa.body.length;
              la++
            ) {
              var ja = aa.body[la];
              ma[ja.id] = "".concat(ja.KQ.w, ";").concat(ja.KQ.h);
              ea.append(ja.id, ja.KQ.dataString);
            }
            aa = { t: "apstring2xod", reqID: this.S$++, parts: ma };
            var sa = this.eC(aa);
            ea.append("msg", JSON.stringify(sa));
            this.em[sa.reqID] = new b();
            ba.open("POST", ha);
            ba.withCredentials = this.uk;
            ha = new Promise(function (qa, ra) {
              ba.onreadystatechange = function () {
                4 === ba.readyState &&
                  (200 === ba.status
                    ? qa()
                    : ra(
                        "An error occurred while sending down appearance strings to the server",
                      ));
              };
            });
            ba.send(ea);
            return ha.then(function () {
              return ca.em[sa.reqID].promise;
            });
          };
          z.prototype.Soa = function () {
            var aa = this.rO.split("-")[0].split("."),
              ca = ["1", "5", "9"];
            if (3 !== aa.length) throw Error("Invalid WVS version length.");
            if (3 !== ca.length) throw Error("Invalid version length.");
            for (var ba = 0; ba < aa.length; ++ba) {
              if (ca.length === ba || aa[ba] > ca[ba]) return -1;
              if (aa[ba] !== ca[ba]) return 1;
            }
            return 0;
          };
          z.prototype.fu = function () {
            return 0 >= this.Soa();
          };
          z.prototype.VS = function () {
            this.Eh ||
              ((this.Eh = new b()),
              this.fu()
                ? (this.Eh.request = { t: "cAnnots" })
                : (this.Eh.request = { t: "annots" }),
              this.Gj(this.Eh.request));
            return this.Eh.promise;
          };
          z.prototype.dN = function (aa, ca) {
            this.wj[ca] ||
              ((this.wj[ca] = new b()),
              (this.wj[ca].request = { t: "image", p: ca }),
              this.dda(aa, this.wj[ca].request));
            return this.wj[ca].promise;
          };
          z.prototype.zGa = function (aa) {
            this.im[aa] ||
              ((this.im[aa] = new b()),
              (this.im[aa].request = { t: "text", p: aa }),
              this.Gj(this.im[aa].request));
            return this.im[aa].promise;
          };
          z.prototype.AGa = function (aa, ca, ba, ha, ea) {
            var ma = this.$h.length;
            this.iK.length && (ma = this.iK.pop());
            this.$h[ma] = new b();
            this.$h[ma].request = {
              t: "tiles",
              p: ca,
              z: ba,
              r: ha,
              size: ea,
              rID: ma,
            };
            this.dda(aa, this.$h[ma].request);
            return this.$h[ma].promise;
          };
          z.prototype.xca = function () {
            this.th ||
              ((this.th = new b()),
              (this.th.request = { t: "pdf" }),
              this.b5
                ? this.th.resolve({ url: this.iS })
                : this.Gj(this.th.request));
            return this.th.promise;
          };
          z.prototype.m7 = function (aa) {
            var ca = this,
              ba = new XMLHttpRequest(),
              ha = Object(e.a)("".concat(this.Mg, "aul"), { id: this.id }),
              ea = new FormData(),
              ma = {};
            aa.annots && (ma.annots = "xfdf");
            aa.watermark && (ma.watermark = "png");
            aa.redactions && (ma.redactions = "redact");
            ma = { t: "docmod", reqID: this.S$++, parts: ma };
            aa.print && (ma.print = !0);
            var la = this.eC(ma);
            ea.append("msg", JSON.stringify(la));
            return Promise.all(
              [aa.annots, aa.watermark, aa.redactions].map(function (ja) {
                return Promise.resolve(ja);
              }),
            ).then(function (ja) {
              var sa = ja[0],
                qa = ja[1];
              ja = ja[2];
              sa && ea.append("annots", sa);
              qa && ea.append("watermark", qa);
              ja && ea.append("redactions", ja);
              ca.em[la.reqID] = new b();
              ba.open("POST", ha);
              ba.withCredentials = ca.uk;
              sa = new Promise(function (ra, ta) {
                ba.onreadystatechange = function () {
                  4 === ba.readyState &&
                    (200 === ba.status
                      ? ra()
                      : ta(
                          "An error occurred while sending down annotation data to the server",
                        ));
                };
              });
              ba.send(ea);
              return sa.then(function () {
                return ca.em[la.reqID].promise;
              });
            });
          };
          z.prototype.h8 = function () {
            this.sg ||
              ((this.sg = new b()),
              (this.sg.request = { t: "xod", noCreate: !0 }),
              this.Gj(this.sg.request));
            return this.sg.promise;
          };
          z.prototype.BGa = function () {
            this.tg ||
              ((this.tg = new b()),
              (this.tg.request = { t: "xod" }),
              this.Gj(this.tg.request));
            return this.tg.promise;
          };
          z.prototype.Ps = function () {
            return !0;
          };
          z.prototype.request = function () {};
          z.prototype.Nba = function () {};
          z.prototype.abort = function () {
            for (var aa = 0; aa < this.$h.length; aa++)
              this.$h[aa] &&
                (this.$h[aa].resolve(null),
                (this.$h[aa] = null),
                this.iK.push(aa));
            this.close();
          };
          z.prototype.uN = function (aa) {
            this.Bj = this.Bj || {};
            this.Bj.headers = aa;
          };
          z.prototype.Vs = function (aa) {
            this.Bj = this.Bj || {};
            this.Bj.internal = this.Bj.internal || {};
            this.Bj.internal.withCredentials = aa;
          };
          z.prototype.uk = function () {
            return this.Bj && this.Bj.internal
              ? this.Bj.internal.withCredentials
              : null;
          };
          z.prototype.getFileData = function () {
            return Promise.reject();
          };
          return z;
        })();
        Object(ya.a)(n);
        Object(h.a)(n);
        Object(h.b)(n);
        ua["default"] = n;
      },
      602: function (ya, ua, n) {
        var pa = n(0),
          na = n(3),
          oa = n(34),
          ka = n(54),
          ia = n(220),
          fa = n(102),
          x = (function () {
            function r(h, f, e, b, a, w) {
              void 0 === e && (e = null);
              void 0 === b && (b = null);
              void 0 === a && (a = null);
              void 0 === w && (w = null);
              this.vU = !1;
              this.Sh = 0;
              this.jE = 8;
              this.Nca = 3e3;
              this.QN = !1;
              this.u3 = this.HMa(h);
              this.url = f
                ? "".concat(this.u3, "/").concat(f)
                : "".concat(this.u3, "/ws");
              this.TR = e;
              this.BE = b;
              this.cC = a;
              this.yca = w;
            }
            r.prototype.HMa = function (h) {
              var f = h.indexOf("://"),
                e = "ws://";
              0 > f ? (f = 0) : (5 === f && (e = "wss://"), (f += 3));
              var b = h.lastIndexOf("/");
              0 > b && (b = h.length);
              return e + h.slice(f, b);
            };
            r.prototype.send = function (h) {
              this.mt.readyState === WebSocket.CLOSED ||
                this.vU ||
                this.mt.send(JSON.stringify(h));
            };
            r.prototype.vL = function () {
              return Object(pa.b)(this, void 0, void 0, function () {
                var h,
                  f = this;
                return Object(pa.d)(this, function () {
                  h = Object(ka.a)("wvsQueryParameters");
                  h.bcid = Object(oa.l)(8);
                  Object(ka.b)("wvsQueryParameters", h);
                  return [
                    2,
                    new Promise(function (e, b) {
                      var a = Object(ia.a)(f.url);
                      f.QN = !1;
                      f.mt = new WebSocket(a);
                      f.mt.onopen = function () {
                        f.vU = !1;
                        f.Sh = 0;
                        f.BE && f.BE();
                        e();
                      };
                      f.mt.onerror = function () {
                        f.vU = !0;
                      };
                      f.mt.onclose = function (w) {
                        w = w.code;
                        f.cC && f.cC();
                        1e3 !== w && 3e3 !== w && f.Fya(w, e, b);
                      };
                      f.mt.onmessage = function (w) {
                        w &&
                          w.data &&
                          ((w = JSON.parse(w.data)),
                          w.hb
                            ? f.send({ hb: !0 })
                            : w.end
                              ? close()
                              : f.TR(w));
                      };
                    }),
                  ];
                });
              });
            };
            r.prototype.Fya = function (h, f, e) {
              Object(pa.b)(this, void 0, void 0, function () {
                var b = this;
                return Object(pa.d)(this, function () {
                  if (this.QN) return f(), [2];
                  this.Sh < this.jE
                    ? setTimeout(function () {
                        b.QN
                          ? f()
                          : (b.Sh++,
                            Object(na.i)(
                              "Failed to connect to server with WebSocket close code "
                                .concat(
                                  h,
                                  ". Reconnecting to WebViewer Server, attempt ",
                                )
                                .concat(b.Sh, " of ")
                                .concat(b.jE, " ..."),
                            ),
                            b.vL().then(f).catch(e));
                      }, this.Nca)
                    : e(fa.a);
                  return [2];
                });
              });
            };
            r.prototype.Bu = function () {
              var h;
              void 0 === h && (h = !1);
              this.Sh = 0;
              this.QN = !0;
              h ? this.mt.close(3e3) : this.mt.close();
              return Promise.resolve();
            };
            return r;
          })(),
          y = (function () {
            function r(h, f, e, b, a, w, z) {
              void 0 === b && (b = null);
              void 0 === a && (a = null);
              void 0 === w && (w = null);
              void 0 === z && (z = null);
              this.Sh = this.cN = this.id = 0;
              this.CD = !1;
              this.request = null;
              this.jE = 8;
              this.Nca = 3e3;
              h = this.vEa(h);
              this.url = f
                ? "".concat(h, "/").concat(f, "pf")
                : "".concat(h, "/pf");
              this.kO = e;
              this.TR = b;
              this.BE = a;
              this.cC = w;
              this.yca = z;
            }
            r.prototype.vEa = function (h) {
              var f = h.lastIndexOf("/");
              0 > f && (f = h.length);
              return h.slice(0, f);
            };
            r.prototype.eqa = function (h) {
              h = h.split("\n");
              for (
                h[h.length - 1] && h.pop();
                0 < h.length && 3 > h[h.length - 1].length;

              )
                "]" === h.pop() && (this.id = 0);
              0 < h.length && 3 > h[0].length && h.shift();
              for (var f = 0; f < h.length; ++f)
                h[f].endsWith(",") && (h[f] = h[f].substr(0, h[f].length - 1));
              return h;
            };
            r.prototype.Mca = function () {
              return Object(pa.b)(this, void 0, void 0, function () {
                var h = this;
                return Object(pa.d)(this, function (f) {
                  switch (f.label) {
                    case 0:
                      return this.Sh++ < this.jE
                        ? [
                            4,
                            new Promise(function (e) {
                              return setTimeout(function () {
                                h.yca();
                                h.vL();
                                e();
                              }, 3e3);
                            }),
                          ]
                        : [3, 2];
                    case 1:
                      f.aa(), (f.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            };
            r.prototype.yEa = function (h) {
              Object(pa.b)(this, void 0, void 0, function () {
                var f, e;
                return Object(pa.d)(this, function (b) {
                  switch (b.label) {
                    case 0:
                      (f = null), (e = 0), (b.label = 1);
                    case 1:
                      if (!(e < h.length)) return [3, 6];
                      f = JSON.parse(h[e]);
                      if (!f) return [3, 5];
                      if (!f.end) return [3, 2];
                      close();
                      return [3, 5];
                    case 2:
                      if (!f.id || Number(f.id) === this.id) return [3, 4];
                      Object(na.i)("Reconnecting, new server detected");
                      this.Bu();
                      return [4, this.Mca()];
                    case 3:
                      return b.aa(), [3, 5];
                    case 4:
                      f.hb && Number(f.id) === this.id
                        ? this.send({ hb: !0 })
                        : this.CD || this.TR(f),
                        (b.label = 5);
                    case 5:
                      return ++e, [3, 1];
                    case 6:
                      return [2];
                  }
                });
              });
            };
            r.prototype.DCa = function (h) {
              Object(pa.b)(this, void 0, void 0, function () {
                var f, e, b;
                return Object(pa.d)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (!(3 <= h.readyState)) return [3, 2];
                      try {
                        f = h.responseText.length;
                      } catch (w) {
                        return Object(na.g)("caught exception"), [2];
                      }
                      if (0 < f)
                        try {
                          (e = this.eqa(h.responseText)),
                            0 === this.id &&
                              0 < e.length &&
                              ((b = JSON.parse(e.shift())),
                              (this.id = b.id),
                              (this.Sh = 0)),
                            this.yEa(e);
                        } catch (w) {}
                      return this.CD ? [3, 2] : [4, this.e6()];
                    case 1:
                      a.aa(), (a.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            };
            r.prototype.e6 = function () {
              return Object(pa.b)(this, void 0, void 0, function () {
                var h = this;
                return Object(pa.d)(this, function () {
                  return [
                    2,
                    new Promise(function (f, e) {
                      function b() {
                        return Object(pa.b)(h, void 0, void 0, function () {
                          return Object(pa.d)(this, function (w) {
                            switch (w.label) {
                              case 0:
                                e(), this.Bu(), (w.label = 1);
                              case 1:
                                return this.CD && this.Sh < this.jE
                                  ? [4, this.Mca()]
                                  : [3, 3];
                              case 2:
                                return w.aa(), [3, 1];
                              case 3:
                                return [2];
                            }
                          });
                        });
                      }
                      h.request = new XMLHttpRequest();
                      h.request.withCredentials = h.kO;
                      var a = Object(ia.a)(
                        h.url,
                        0 !== h.id
                          ? { id: String(h.id), uc: String(h.cN) }
                          : { uc: String(h.cN) },
                      );
                      h.cN++;
                      h.request.open("GET", a, !0);
                      h.request.setRequestHeader("Cache-Control", "no-cache");
                      h.request.setRequestHeader(
                        "X-Requested-With",
                        "XMLHttpRequest",
                      );
                      h.request.onreadystatechange = function () {
                        h.DCa(h.request);
                      };
                      h.request.addEventListener("error", b);
                      h.request.addEventListener("timeout", b);
                      h.request.addEventListener("load", function () {
                        h.BE && h.BE();
                        f();
                      });
                      h.request.send();
                    }),
                  ];
                });
              });
            };
            r.prototype.vL = function () {
              var h = Object(ka.a)("wvsQueryParameters");
              h.bcid = Object(oa.l)(8);
              Object(ka.b)("wvsQueryParameters", h);
              this.cN = this.id = 0;
              this.CD = !1;
              return this.e6();
            };
            r.prototype.send = function (h) {
              var f = this,
                e = new XMLHttpRequest();
              e.withCredentials = this.kO;
              var b = Object(ia.a)(this.url, { id: String(this.id) }),
                a = new FormData();
              a.append("data", JSON.stringify(h));
              e.addEventListener("error", function () {
                f.Bu();
              });
              e.open("POST", b);
              e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
              e.send(a);
            };
            r.prototype.Bu = function () {
              this.id = 0;
              this.CD = !0;
              this.cC && this.cC();
              this.request.abort();
              return Promise.resolve();
            };
            return r;
          })();
        ya = (function () {
          function r(h, f, e) {
            this.r4 = h;
            this.target = f;
            this.kO = e;
          }
          r.prototype.Hua = function (h, f, e, b, a) {
            void 0 === h && (h = !0);
            void 0 === f && (f = null);
            void 0 === e && (e = null);
            void 0 === b && (b = null);
            void 0 === a && (a = null);
            return h
              ? new x(this.r4, this.target, f, e, b, a)
              : new y(this.r4, this.target, this.kO, f, e, b, a);
          };
          return r;
        })();
        ua.a = ya;
      },
    },
  ]);
}).call(this || window);
