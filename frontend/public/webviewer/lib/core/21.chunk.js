/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [21],
    {
      592: function (ya, ua, n) {
        n.r(ua);
        var pa = n(0),
          na = n(7),
          oa = n(3);
        ya = n(61);
        var ka = n(34),
          ia = n(17);
        n = (function () {
          function fa() {
            this.init();
          }
          fa.prototype.init = function () {
            this.Poa = !1;
            this.Mg = this.ep = this.connection = null;
            this.tl = {};
            this.ga = this.mO = null;
          };
          fa.prototype.gO = function (x) {
            for (var y = this, r = 0; r < x.length; ++r) {
              var h = x[r];
              switch (h.at) {
                case "create":
                  this.tl[h.author] || (this.tl[h.author] = h.aName);
                  this.aza(h);
                  break;
                case "modify":
                  this.ga.ts(h.xfdf).then(function (f) {
                    y.ga.Bb(f[0]);
                  });
                  break;
                case "delete":
                  (h = "<delete><id>".concat(h.aId, "</id></delete>")),
                    this.ga.ts(h);
              }
            }
          };
          fa.prototype.aza = function (x) {
            var y = this;
            this.ga.ts(x.xfdf).then(function (r) {
              r = r[0];
              r.authorId = x.author;
              y.ga.Bb(r);
              y.ga.trigger(na.c.UPDATE_ANNOTATION_PERMISSION, [r]);
            });
          };
          fa.prototype.oya = function (x, y, r) {
            this.ep && this.ep(x, y, r);
          };
          fa.prototype.preloadAnnotations = function (x) {
            this.addEventListener(
              "webViewerServerAnnotationsEnabled",
              this.oya.bind(this, x, "add", { imported: !1 }),
              { once: !0 },
            );
          };
          fa.prototype.initiateCollaboration = function (x, y, r) {
            var h = this;
            if (x) {
              h.Mg = y;
              h.ga = r.ka();
              r.addEventListener(na.h.DOCUMENT_UNLOADED, function () {
                h.disableCollaboration();
              });
              h.zMa(x);
              var f = new XMLHttpRequest();
              f.addEventListener("load", function () {
                if (200 === f.status && 0 < f.responseText.length)
                  try {
                    var e = JSON.parse(f.responseText);
                    h.connection = exports.da.PNa(
                      Object(ka.k)(h.Mg, "blackbox/"),
                      "annot",
                    );
                    h.mO = e.id;
                    h.tl[e.id] = e.user_name;
                    h.ga.kY(e.id);
                    h.connection.xRa(
                      function (b) {
                        b.t && b.t.startsWith("a_") && b.data && h.gO(b.data);
                      },
                      function () {
                        h.connection.send({ t: "a_retrieve", dId: x });
                        h.trigger(
                          fa.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,
                          [h.tl[e.id], h.mO],
                        );
                      },
                      function () {
                        h.disableCollaboration();
                      },
                    );
                  } catch (b) {
                    Object(oa.f)(b.message);
                  }
              });
              f.open("GET", Object(ka.k)(this.Mg, "demo/SessionInfo.jsp"));
              f.withCredentials = !0;
              f.send();
              h.Poa = !0;
              h.ga.lda(function (e) {
                return h.tl[e.Author] || e.Author;
              });
            } else Object(oa.f)("Document ID required for collaboration");
          };
          fa.prototype.disableCollaboration = function () {
            this.ep &&
              (this.ga.removeEventListener(
                ia.a.Events.ANNOTATION_CHANGED,
                this.ep,
              ),
              (this.ep = null));
            this.connection && this.connection.Bu();
            this.ga && this.ga.kY("Guest");
            this.init();
            this.trigger(fa.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED);
          };
          fa.prototype.zMa = function (x) {
            var y = this;
            this.ep &&
              this.ga.removeEventListener(
                ia.a.Events.ANNOTATION_CHANGED,
                this.ep,
              );
            this.ep = function (r, h, f) {
              return Object(pa.b)(this, void 0, void 0, function () {
                var e, b, a, w, z, aa, ca, ba, ha;
                return Object(pa.d)(this, function (ea) {
                  switch (ea.label) {
                    case 0:
                      if (f.imported) return [2];
                      e = { t: "a_".concat(h), dId: x, annots: [] };
                      return [4, y.ga.R5()];
                    case 1:
                      b = ea.aa();
                      "delete" !== h &&
                        ((a = new DOMParser().parseFromString(b, "text/xml")),
                        (w = new XMLSerializer()));
                      for (z = 0; z < r.length; z++)
                        (aa = r[z]),
                          (ba = ca = void 0),
                          "add" === h
                            ? ((ca = a.querySelector(
                                '[name="'.concat(aa.Id, '"]'),
                              )),
                              (ba = w.serializeToString(ca)),
                              (ha = null),
                              aa.InReplyTo &&
                                (ha =
                                  y.ga.yi(aa.InReplyTo).authorId || "default"),
                              e.annots.push({
                                at: "create",
                                aId: aa.Id,
                                author: y.mO,
                                aName: y.tl[y.mO],
                                parent: ha,
                                xfdf: "<add>".concat(ba, "</add>"),
                              }))
                            : "modify" === h
                              ? ((ca = a.querySelector(
                                  '[name="'.concat(aa.Id, '"]'),
                                )),
                                (ba = w.serializeToString(ca)),
                                e.annots.push({
                                  at: "modify",
                                  aId: aa.Id,
                                  xfdf: "<modify>".concat(ba, "</modify>"),
                                }))
                              : "delete" === h &&
                                e.annots.push({ at: "delete", aId: aa.Id });
                      0 < e.annots.length && y.connection.send(e);
                      return [2];
                  }
                });
              });
            }.bind(y);
            this.ga.addEventListener(ia.a.Events.ANNOTATION_CHANGED, this.ep);
          };
          fa.Events = {
            WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:
              "webViewerServerAnnotationsEnabled",
            WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:
              "webViewerServerAnnotationsDisabled",
          };
          return fa;
        })();
        Object(ya.a)(n);
        ua["default"] = n;
      },
    },
  ]);
}).call(this || window);
