/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [23],
    {
      493: function (ja, ea, e) {
        e.r(ea);
        var z = e(0),
          fa = e(9),
          ia = e(3);
        ja = e(48);
        var ha = e(25),
          ca = e(16);
        e = (function () {
          function e() {
            this.init();
          }
          e.prototype.init = function () {
            this.Tca = !1;
            this.Ff = this.Bm = this.connection = null;
            this.Qt = {};
            this.ga = this.bI = null;
          };
          e.prototype.wva = function (e) {
            for (var x = this, w = 0; w < e.length; ++w) {
              var r = e[w];
              switch (r.at) {
                case "create":
                  this.Qt[r.author] || (this.Qt[r.author] = r.aName);
                  this.ela(r);
                  break;
                case "modify":
                  this.ga.vp(r.xfdf).then(function (e) {
                    x.ga.zb(e[0]);
                  });
                  break;
                case "delete":
                  this.ga.vp("<delete><id>" + r.aId + "</id></delete>");
              }
            }
          };
          e.prototype.ela = function (e) {
            var x = this;
            this.ga.vp(e.xfdf).then(function (w) {
              w = w[0];
              w.authorId = e.author;
              x.ga.zb(w);
              x.ga.trigger(fa.c.UPDATE_ANNOTATION_PERMISSION, [w]);
            });
          };
          e.prototype.Dka = function (e, x, w) {
            this.Bm && this.Bm(e, x, w);
          };
          e.prototype.preloadAnnotations = function (e) {
            this.addEventListener(
              "webViewerServerAnnotationsEnabled",
              this.Dka.bind(this, e, "add", { imported: !1 }),
              { once: !0 },
            );
          };
          e.prototype.initiateCollaboration = function (y, x, w) {
            var r = this;
            if (y) {
              r.Ff = x;
              r.ga = w.pa();
              w.addEventListener(fa.g.DOCUMENT_UNLOADED, function () {
                r.disableCollaboration();
              });
              r.Wva(y);
              var h = new XMLHttpRequest();
              h.addEventListener("load", function () {
                if (200 === h.status && 0 < h.responseText.length)
                  try {
                    var f = JSON.parse(h.responseText);
                    r.connection = exports.da.Iwa(
                      Object(ha.k)(r.Ff, "blackbox/"),
                      "annot",
                    );
                    r.bI = f.id;
                    r.Qt[f.id] = f.user_name;
                    r.ga.ZP(f.id);
                    r.connection.gAa(
                      function (e) {
                        e.t && e.t.startsWith("a_") && e.data && r.wva(e.data);
                      },
                      function () {
                        r.connection.send({ t: "a_retrieve", dId: y });
                        r.trigger(
                          e.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,
                          [r.Qt[f.id], r.bI],
                        );
                      },
                      function () {
                        r.disableCollaboration();
                      },
                    );
                  } catch (n) {
                    Object(ia.g)(n.message);
                  }
              });
              h.open("GET", Object(ha.k)(this.Ff, "demo/SessionInfo.jsp"));
              h.withCredentials = !0;
              h.send();
              r.Tca = !0;
              r.ga.z3(function (e) {
                return r.Qt[e.Author] || e.Author;
              });
            } else Object(ia.g)("Document ID required for collaboration");
          };
          e.prototype.disableCollaboration = function () {
            this.Bm &&
              (this.ga.removeEventListener(
                ca.a.Events.ANNOTATION_CHANGED,
                this.Bm,
              ),
              (this.Bm = null));
            this.connection && this.connection.pr();
            this.ga && this.ga.ZP("Guest");
            this.init();
            this.trigger(e.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED);
          };
          e.prototype.Wva = function (e) {
            var x = this;
            this.Bm &&
              this.ga.removeEventListener(
                ca.a.Events.ANNOTATION_CHANGED,
                this.Bm,
              );
            this.Bm = function (w, r, h) {
              return Object(z.b)(this, void 0, void 0, function () {
                var f, n, y, ba, ca, ea, ha, fa, ia;
                return Object(z.d)(this, function (z) {
                  switch (z.label) {
                    case 0:
                      if (h.imported) return [2];
                      f = { t: "a_" + r, dId: e, annots: [] };
                      return [4, x.ga.oX()];
                    case 1:
                      n = z.ba();
                      "delete" !== r &&
                        ((y = new DOMParser().parseFromString(n, "text/xml")),
                        (ba = new XMLSerializer()));
                      for (ca = 0; ca < w.length; ca++)
                        (ea = w[ca]),
                          (fa = ha = void 0),
                          "add" === r
                            ? ((ha = y.querySelector('[name="' + ea.Id + '"]')),
                              (fa = ba.serializeToString(ha)),
                              (ia = null),
                              ea.InReplyTo &&
                                (ia =
                                  x.ga.Wf(ea.InReplyTo).authorId || "default"),
                              f.annots.push({
                                at: "create",
                                aId: ea.Id,
                                author: x.bI,
                                aName: x.Qt[x.bI],
                                parent: ia,
                                xfdf: "<add>" + fa + "</add>",
                              }))
                            : "modify" === r
                              ? ((ha = y.querySelector(
                                  '[name="' + ea.Id + '"]',
                                )),
                                (fa = ba.serializeToString(ha)),
                                f.annots.push({
                                  at: "modify",
                                  aId: ea.Id,
                                  xfdf: "<modify>" + fa + "</modify>",
                                }))
                              : "delete" === r &&
                                f.annots.push({ at: "delete", aId: ea.Id });
                      0 < f.annots.length && x.connection.send(f);
                      return [2];
                  }
                });
              });
            }.bind(x);
            this.ga.addEventListener(ca.a.Events.ANNOTATION_CHANGED, this.Bm);
          };
          e.Events = {
            WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:
              "webViewerServerAnnotationsEnabled",
            WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:
              "webViewerServerAnnotationsDisabled",
          };
          return e;
        })();
        Object(ja.a)(e);
        ea["default"] = e;
      },
    },
  ]);
}).call(this || window);
