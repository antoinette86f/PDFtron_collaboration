(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    1804: function (t, e, o) {
      var n = o(30),
        a = o(1805);
      "string" == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[t.i, a, ""]]);
      var i = {
        insert: function (t) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(t);
          let e;
          (e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function t(e, o = document) {
                const n = [];
                return (
                  o.querySelectorAll(e).forEach((t) => n.push(t)),
                  o.querySelectorAll("*").forEach((o) => {
                    o.shadowRoot && n.push(...t(e, o.shadowRoot));
                  }),
                  n
                );
              })("apryse-webviewer"));
          const o = [];
          for (let n = 0; n < e.length; n++) {
            const a = e[n];
            if (0 === n)
              a.shadowRoot.appendChild(t),
                (t.onload = function () {
                  o.length > 0 &&
                    o.forEach((e) => {
                      e.innerHTML = t.innerHTML;
                    });
                });
            else {
              const e = t.cloneNode(!0);
              a.shadowRoot.appendChild(e), o.push(e);
            }
          }
        },
        singleton: !1,
      };
      n(a, i);
      t.exports = a.locals || {};
    },
    1805: function (t, e, o) {
      (e = t.exports = o(31)(!1)).push([
        t.i,
        ".open.FilterAnnotModal{visibility:visible}.closed.FilterAnnotModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.FilterAnnotModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.FilterAnnotModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.FilterAnnotModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.FilterAnnotModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.FilterAnnotModal .footer .modal-button.cancel:hover,.FilterAnnotModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.FilterAnnotModal .footer .modal-button.cancel,.FilterAnnotModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.FilterAnnotModal .footer .modal-button.cancel.disabled,.FilterAnnotModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.FilterAnnotModal .footer .modal-button.cancel.disabled span,.FilterAnnotModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.FilterAnnotModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.FilterAnnotModal .modal-container .wrapper .modal-content{padding:10px}.FilterAnnotModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.FilterAnnotModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.FilterAnnotModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.FilterAnnotModal .footer .modal-button.confirm{margin-left:4px}.FilterAnnotModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .footer .modal-button{padding:23px 8px}}.FilterAnnotModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .swipe-indicator{width:32px}}.FilterAnnotModal .container .filter-modal .body .tab-list{width:100%;height:28px;display:flex;border-radius:4px;color:var(--text-color)}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button{background-color:transparent;text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;flex:1;border-radius:0;cursor:pointer}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:hover{background:var(--popup-button-hover)}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button.selected{background:var(--tab-color-selected);cursor:default}.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button.focus-visible,.FilterAnnotModal .container .filter-modal .body .tab-list .tab-options-button:focus-visible{outline:var(--focus-visible-outline)}.FilterAnnotModal{font-size:.9em}.FilterAnnotModal .container{display:flex;flex-direction:column;align-items:center;border-radius:4px;background:var(--component-background);width:360px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .container{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .container{width:100%}}.FilterAnnotModal .container .message{font-size:14px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .FilterAnnotModal .container .message{font-size:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .FilterAnnotModal .container .message{font-size:16px}}.FilterAnnotModal .container .filter-modal{display:flex;flex-direction:column;width:100%}.FilterAnnotModal .container .filter-modal .divider{height:1px;width:100%;background:var(--divider)}.FilterAnnotModal .container .filter-modal .header{display:flex;justify-content:space-between;margin:16px;font-size:16px;font-weight:700;align-items:center;height:24px}.FilterAnnotModal .container .filter-modal .header .Button{height:32px}.FilterAnnotModal .container .filter-modal .body{padding:16px}.FilterAnnotModal .container .filter-modal .body .filter-options{height:200px;width:100%}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel{height:100%;width:100%;display:flex;flex-direction:column}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .include-replies{display:flex;height:20px;margin-top:12px}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .include-replies label{color:var(--gray-7)}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .three-column-filter{margin-top:20px;overflow-y:scroll;display:grid;grid-gap:5px 16px;grid-template-columns:repeat(3,minmax(0,1fr))}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .color-filters{margin-top:20px;overflow-y:scroll;display:grid;grid-gap:16px;grid-template-columns:repeat(5,minmax(0,1fr))}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .buttons{display:grid;padding:6px 0;grid-template-columns:100px 100px}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .colorSelect{display:flex;flex-direction:row}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel .colorSelect .colorCell{width:22px;height:22px;border-radius:10000000px;margin-left:4px;border:1px solid var(--gray-6)}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel label{overflow:hidden}.FilterAnnotModal .container .filter-modal .body .filter-options .tab-panel label div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.FilterAnnotModal .container .filter-modal .settings-body{display:flex;flex-direction:column;margin:16px 0 0;border:0;padding:16px;font-size:var(--font-size-default);grid-gap:12px;gap:12px}.FilterAnnotModal .container .filter-modal .settings-body .settings-header{font-weight:var(--font-weight-bold);padding:0}.FilterAnnotModal .container .filter-modal .settings-body .settings{display:flex;flex-direction:column;grid-gap:8px;gap:8px}.FilterAnnotModal .container .filter-modal .footer{display:flex;justify-content:space-between;width:100%;padding:16px;margin-top:0}.FilterAnnotModal .container .filter-modal .footer .Button{display:flex;justify-content:center;align-items:center;color:var(--primary-button-text);padding:6px 18px;width:auto;width:-moz-fit-content;width:fit-content;background:var(--primary-button);border-radius:4px;height:32px;cursor:pointer}.FilterAnnotModal .container .filter-modal .footer .Button.filter-annot-apply:hover{background:var(--primary-button-hover)}.FilterAnnotModal .container .filter-modal .footer .Button.disabled{border-color:var(--gray-6);cursor:not-allowed}.FilterAnnotModal .container .filter-modal .footer .filter-annot-clear{color:var(--blue-5);background:none}.FilterAnnotModal .container .filter-modal .footer .filter-annot-clear:not(.disabled):hover{color:var(--secondary-button-hover);background:none}.FilterAnnotModal .container .filter-modal .footer .filter-annot-clear:disabled{opacity:.5}.FilterAnnotModal .container .filter-modal .footer .filter-annot-clear:disabled span{color:unset}.FilterAnnotModal .container .tab-list .tab-options-divider+.tab-options-button{border-left:none!important}.FilterAnnotModal .container .tab-list .tab-options-button{border-top:1px solid var(--tab-border-color);border-bottom:1px solid var(--tab-border-color)}.FilterAnnotModal .container .tab-list .tab-options-button:first-child{border-left:1px solid var(--tab-border-color)}.FilterAnnotModal .container .tab-list .tab-options-button:last-child{border-right:1px solid var(--tab-border-color)}.FilterAnnotModal .container .tab-list .tab-options-button:hover{background:var(--tab-background-color-hover);border-top:1px solid var(--tab-border-color-hover);border-bottom:1px solid var(--tab-border-color-hover);border-right:1px solid var(--tab-border-color-hover)}.FilterAnnotModal .container .tab-list .tab-options-button:hover+button,.FilterAnnotModal .container .tab-list .tab-options-button:hover+div{border-left:none}.FilterAnnotModal .container .tab-list .tab-options-button.selected{background:var(--tab-color-selected);border:1px solid var(--tab-color-selected);color:var(--tab-text-color-selected)}.FilterAnnotModal .container .tab-list .tab-options-button.selected+button,.FilterAnnotModal .container .tab-list .tab-options-button.selected+div{border-left:none!important}.FilterAnnotModal .container .tab-list .tab-options-button:not(.selected){border-right:1px solid var(--tab-border-color)}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" });
    },
    1929: function (t, e, o) {
      "use strict";
      o.r(e);
      o(39),
        o(60),
        o(111),
        o(35),
        o(32),
        o(8),
        o(45),
        o(51),
        o(23),
        o(24),
        o(10),
        o(151),
        o(9),
        o(12),
        o(76),
        o(132),
        o(18),
        o(11),
        o(13),
        o(14),
        o(16),
        o(15),
        o(20),
        o(17);
      var n = o(0),
        a = o.n(n),
        i = o(19),
        r = o.n(i),
        l = o(6),
        d = o(396),
        c = o(1),
        s = o(2),
        p = o(3),
        u = o(58),
        b = o(69),
        m = o(50),
        f = o(44),
        h = o(5),
        g = o(239),
        A = o(237),
        y = o(152),
        v = o(43),
        x = o(129),
        w = o(124),
        F = o(97),
        E = o(334);
      o(1804);
      function M(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return T(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          k(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function N(t, e) {
        var o =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!o) {
          if (
            Array.isArray(t) ||
            (o = k(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            o && (t = o);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[n++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          r = !0,
          l = !1;
        return {
          s: function () {
            o = o.call(t);
          },
          n: function () {
            var t = o.next();
            return (r = t.done), t;
          },
          e: function (t) {
            (l = !0), (i = t);
          },
          f: function () {
            try {
              r || null == o.return || o.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function O(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var o =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != o) {
              var n,
                a,
                i,
                r,
                l = [],
                d = !0,
                c = !1;
              try {
                if (((i = (o = o.call(t)).next), 0 === e)) {
                  if (Object(o) !== o) return;
                  d = !1;
                } else
                  for (
                    ;
                    !(d = (n = i.call(o)).done) &&
                    (l.push(n.value), l.length !== e);
                    d = !0
                  );
              } catch (t) {
                (c = !0), (a = t);
              } finally {
                try {
                  if (
                    !d &&
                    null != o.return &&
                    ((r = o.return()), Object(r) !== r)
                  )
                    return;
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          })(t, e) ||
          k(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function k(t, e) {
        if (t) {
          if ("string" == typeof t) return T(t, e);
          var o = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === o && t.constructor && (o = t.constructor.name),
            "Map" === o || "Set" === o
              ? Array.from(t)
              : "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? T(t, e)
                : void 0
          );
        }
      }
      function T(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
        return n;
      }
      var S = "filterAnnotModal",
        j = function () {
          var t = O(
              Object(l.e)(function (t) {
                return [
                  p.a.isElementDisabled(t, h.a.FILTER_MODAL),
                  p.a.isElementOpen(t, h.a.FILTER_MODAL),
                  p.a.getColorMap(t),
                  p.a.getSelectedTab(t, S),
                  p.a.getAnnotationFilters(t),
                  p.a.getIsMeasurementAnnotationFilterEnabled(t),
                ];
              }),
              6,
            ),
            e = t[0],
            o = t[1],
            i = t[2],
            k = t[3],
            T = t[4],
            j = t[5],
            L = O(Object(d.a)(), 1)[0],
            _ = Object(l.d)(),
            C = O(Object(n.useState)([]), 2),
            I = C[0],
            R = C[1],
            D = O(Object(n.useState)([]), 2),
            U = D[0],
            B = D[1],
            P = O(Object(n.useState)([]), 2),
            V = P[0],
            z = P[1],
            H = O(Object(n.useState)([]), 2),
            G = H[0],
            W = H[1],
            q = O(Object(n.useState)([]), 2),
            J = q[0],
            Y = q[1],
            $ = O(Object(n.useState)([]), 2),
            K = $[0],
            Q = $[1],
            X = O(Object(n.useState)([]), 2),
            Z = X[0],
            tt = X[1],
            et = O(Object(n.useState)(!0), 2),
            ot = et[0],
            nt = et[1],
            at = O(Object(n.useState)(!1), 2),
            it = at[0],
            rt = at[1],
            lt = O(Object(n.useState)([]), 2),
            dt = lt[0],
            ct = lt[1],
            st = O(Object(n.useState)(0), 2),
            pt = st[0],
            ut = st[1],
            bt = O(Object(n.useState)(!1), 2),
            mt = bt[0],
            ft = bt[1],
            ht = function (t) {
              var e,
                o = Object(f.g)(t);
              return t[
                null === (e = i[o]) || void 0 === e ? void 0 : e.iconColor
              ];
            },
            gt = function (t, e) {
              var o = t.map(function (t) {
                return Object.assign({
                  R: parseInt("".concat(t[1]).concat(t[2]), 16),
                  G: parseInt("".concat(t[3]).concat(t[4]), 16),
                  B: parseInt("".concat(t[5]).concat(t[6]), 16),
                });
              });
              return !!o.filter(function (t) {
                return (
                  Math.abs(e.R - t.R) < 10 &&
                  Math.abs(e.G - t.G) < 10 &&
                  Math.abs(e.B - t.B) < 10
                );
              }).length;
            },
            At = function () {
              var t = function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1,
                  o = !0,
                  n = !0,
                  a = !0,
                  i = !0;
                if (K.length > 0) {
                  var r = t.IT || t.getCustomData("trn-is-count");
                  if (j && r) {
                    var l = Object(f.g)(t);
                    o = K.includes(l);
                  } else o = K.includes(Object(A.a)(t));
                }
                if (
                  J.length > 0 &&
                  !(n = J.includes(c.a.getDisplayAuthor(t.Author, e))) &&
                  ot
                ) {
                  var d,
                    s = t.getReplies(),
                    p = N(s);
                  try {
                    for (p.s(); !(d = p.n()).done; ) {
                      var u = d.value;
                      if (J.includes(c.a.getDisplayAuthor(u.Author, e))) {
                        n = !0;
                        break;
                      }
                    }
                  } catch (t) {
                    p.e(t);
                  } finally {
                    p.f();
                  }
                }
                if (Z.length > 0) {
                  var b = ht(t);
                  a = b ? gt(Z, b) : Z.includes(F.b.gray8);
                }
                return (
                  dt.length > 0 &&
                    (i = t.getStatus()
                      ? dt.includes(t.getStatus())
                      : dt.includes("None")),
                  o && n && a && i
                );
              };
              _(s.a.setCustomNoteFilter(t)),
                _(
                  s.a.setAnnotationFilters({
                    isDocumentFilterActive: it,
                    includeReplies: ot,
                    authorFilter: J,
                    colorFilter: Z,
                    typeFilter: K,
                    statusFilter: dt,
                  }),
                );
              var e = [];
              it
                ? c.a.getDocumentViewers().forEach(function (o, n) {
                    return o
                      .getAnnotationManager()
                      .getAnnotationsList()
                      .forEach(function (o) {
                        var a = !t(o, n + 1);
                        a !== o.NoView && ((o.NoView = a), e.push(o));
                      });
                  })
                : c.a.getDocumentViewers().forEach(function (t) {
                    return t
                      .getAnnotationManager()
                      .getAnnotationsList()
                      .forEach(function (t) {
                        !0 === t.NoView && ((t.NoView = !1), e.push(t));
                      });
                  }),
                c.a.getDocumentViewers().forEach(function (t) {
                  return t.getAnnotationManager().drawAnnotationsFromList(e);
                }),
                Object(u.a)(m.a.ANNOTATION_FILTER_CHANGED, {
                  types: K,
                  authors: J,
                  colors: Z,
                  statuses: dt,
                  checkRepliesForAuthorFilter: ot,
                }),
                vt();
            },
            yt = function () {
              nt(!1), rt(!1), Y([]), Q([]), tt([]), ct([]);
              var t = [];
              c.a.getDocumentViewers().forEach(function (e) {
                return e
                  .getAnnotationManager()
                  .getAnnotationsList()
                  .forEach(function (e) {
                    !0 === e.NoView && ((e.NoView = !1), t.push(e));
                  });
              }),
                c.a.getDocumentViewers().forEach(function (e) {
                  return e.getAnnotationManager().drawAnnotationsFromList(t);
                });
            },
            vt = function () {
              _(s.a.closeElement(h.a.FILTER_MODAL)), c.a.setToolMode(b.a);
            };
          Object(n.useEffect)(function () {
            var t = function () {
              yt(), At();
            };
            return (
              c.a.addEventListener("documentUnloaded", t),
              function () {
                c.a.removeEventListener("documentUnloaded", t);
              }
            );
          }, []),
            Object(n.useEffect)(
              function () {
                var t,
                  e = c.a.getDocumentViewers().map(function (t) {
                    return t.getAnnotationManager().getAnnotationsList();
                  }),
                  o = (t = []).concat.apply(t, M(e)).filter(function (t) {
                    return !t.Hidden;
                  }),
                  n = new Set(),
                  a = new Set(),
                  i = new Set(),
                  r = new Set();
                return (
                  o.forEach(function (t) {
                    var e = c.a.getDisplayAuthor(t.Author);
                    if (
                      (e && "" !== e && n.add(e),
                      !(
                        (!c.a
                          .getAnnotationManager()
                          .getFormFieldCreationManager()
                          .isInFormFieldCreationMode() &&
                          t instanceof
                            window.Core.Annotations.WidgetAnnotation) ||
                        (t instanceof
                          window.Core.Annotations.StickyAnnotation &&
                          t.isReply()) ||
                        t instanceof window.Core.Annotations.Link
                      ))
                    ) {
                      var o = t.IT || t.getCustomData("trn-is-count");
                      if (j && o) {
                        var l = Object(f.g)(t);
                        a.add(l);
                      } else a.add(Object(A.a)(t));
                      var d = ht(t);
                      d &&
                        !gt(M(i), d) &&
                        i.add(Object(g.e)(d.R, d.G, d.B, d.A)),
                        t.getStatus() ? r.add(t.getStatus()) : r.add("None");
                    }
                  }),
                  R(M(n)),
                  B(M(a)),
                  z(M(i)),
                  W(M(r)),
                  c.a.addEventListener("documentUnloaded", vt),
                  function () {
                    c.a.removeEventListener("documentUnloaded", vt);
                  }
                );
              },
              [o, j],
            ),
            Object(n.useEffect)(
              function () {
                k !== h.a.ANNOTATION_STATUS_FILTER_PANEL_BUTTON ||
                  mt ||
                  _(
                    s.a.setSelectedTab(
                      S,
                      h.a.ANNOTATION_USER_FILTER_PANEL_BUTTON,
                    ),
                  );
              },
              [o, k, mt],
            ),
            Object(n.useEffect)(
              function () {
                ut(
                  (ot ? 1 : 0) +
                    (it ? 1 : 0) +
                    J.length +
                    Z.length +
                    K.length +
                    dt.length,
                );
              },
              [ot, it, J, Z, K, dt],
            ),
            Object(n.useEffect)(
              function () {
                ft(G.length > 1 || (1 === G.length && "None" !== G[0]));
              },
              [G],
            ),
            Object(n.useEffect)(
              function () {
                o &&
                  (rt(T.isDocumentFilterActive),
                  nt(T.includeReplies),
                  Y(T.authorFilter),
                  tt(T.colorFilter),
                  Q(T.typeFilter),
                  ct(T.statusFilter));
              },
              [o],
            );
          var xt = r()({
            Modal: !0,
            FilterAnnotModal: !0,
            open: o,
            closed: !o,
          });
          return e
            ? null
            : a.a.createElement(
                "div",
                { className: xt, "data-element": h.a.FILTER_MODAL },
                a.a.createElement(
                  E.a,
                  {
                    isOpen: o,
                    title: ""
                      .concat(L("option.filterAnnotModal.filters"), " (")
                      .concat(pt, ")"),
                    closeHandler: vt,
                    onCloseClick: vt,
                    swipeToClose: !0,
                  },
                  a.a.createElement(
                    "div",
                    {
                      className: "container",
                      onMouseDown: function (t) {
                        return t.stopPropagation();
                      },
                    },
                    c.a.getAnnotationsList().length > 0
                      ? a.a.createElement(
                          "div",
                          { className: "filter-modal" },
                          a.a.createElement(
                            "div",
                            { className: "body" },
                            a.a.createElement(
                              x.d,
                              { id: S },
                              a.a.createElement(
                                "div",
                                { className: "tab-list" },
                                a.a.createElement(
                                  x.a,
                                  {
                                    dataElement:
                                      h.a.ANNOTATION_USER_FILTER_PANEL_BUTTON,
                                  },
                                  a.a.createElement(
                                    "button",
                                    { className: "tab-options-button" },
                                    L("option.filterAnnotModal.user"),
                                  ),
                                ),
                                a.a.createElement("div", {
                                  className: "tab-options-divider",
                                }),
                                a.a.createElement(
                                  x.a,
                                  {
                                    dataElement:
                                      h.a.ANNOTATION_COLOR_FILTER_PANEL_BUTTON,
                                  },
                                  a.a.createElement(
                                    "button",
                                    { className: "tab-options-button" },
                                    L("option.filterAnnotModal.color"),
                                  ),
                                ),
                                a.a.createElement("div", {
                                  className: "tab-options-divider",
                                }),
                                a.a.createElement(
                                  x.a,
                                  {
                                    dataElement:
                                      h.a.ANNOTATION_TYPE_FILTER_PANEL_BUTTON,
                                  },
                                  a.a.createElement(
                                    "button",
                                    { className: "tab-options-button" },
                                    L("option.filterAnnotModal.type"),
                                  ),
                                ),
                                mt &&
                                  a.a.createElement(
                                    a.a.Fragment,
                                    null,
                                    a.a.createElement("div", {
                                      className: "tab-options-divider",
                                    }),
                                    a.a.createElement(
                                      x.a,
                                      {
                                        dataElement:
                                          h.a
                                            .ANNOTATION_STATUS_FILTER_PANEL_BUTTON,
                                      },
                                      a.a.createElement(
                                        "button",
                                        { className: "tab-options-button" },
                                        L("option.filterAnnotModal.status"),
                                      ),
                                    ),
                                  ),
                              ),
                              a.a.createElement(
                                "div",
                                { className: "filter-options" },
                                a.a.createElement(
                                  x.c,
                                  { dataElement: "annotationUserFilterPanel" },
                                  a.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "user-filters three-column-filter",
                                    },
                                    M(I).map(function (t, e) {
                                      return a.a.createElement(y.a, {
                                        type: "checkbox",
                                        key: e,
                                        "aria-label": ""
                                          .concat(t, " ")
                                          .concat(
                                            L("formField.types.checkbox"),
                                          ),
                                        label: a.a.createElement(
                                          w.a,
                                          { content: t },
                                          a.a.createElement("div", null, t),
                                        ),
                                        checked: J.includes(t),
                                        id: t,
                                        onChange: function (t) {
                                          -1 ===
                                          J.indexOf(t.target.getAttribute("id"))
                                            ? Y(
                                                [].concat(M(J), [
                                                  t.target.getAttribute("id"),
                                                ]),
                                              )
                                            : Y(
                                                J.filter(function (e) {
                                                  return (
                                                    e !==
                                                    t.target.getAttribute("id")
                                                  );
                                                }),
                                              );
                                        },
                                      });
                                    }),
                                  ),
                                ),
                                a.a.createElement(
                                  x.c,
                                  { dataElement: "annotationColorFilterPanel" },
                                  a.a.createElement(
                                    "div",
                                    { className: "color-filters" },
                                    M(V).map(function (t, e) {
                                      var o;
                                      return a.a.createElement(
                                        "div",
                                        {
                                          className: "colorSelect",
                                          key: "color".concat(e),
                                        },
                                        a.a.createElement(
                                          w.a,
                                          {
                                            content: ""
                                              .concat(
                                                L(
                                                  "option.colorPalette.colorLabel",
                                                ),
                                                " ",
                                              )
                                              .concat(
                                                null == t ||
                                                  null ===
                                                    (o = t.toUpperCase) ||
                                                  void 0 === o
                                                  ? void 0
                                                  : o.call(t),
                                              ),
                                            hideOnClick: !1,
                                          },
                                          a.a.createElement(y.a, {
                                            type: "checkbox",
                                            checked: Z.includes(t),
                                            "aria-label": ""
                                              .concat(
                                                L(
                                                  "option.colorPalette.colorLabel",
                                                ),
                                                " ",
                                              )
                                              .concat(
                                                null == t
                                                  ? void 0
                                                  : t.toUpperCase(),
                                                " ",
                                              )
                                              .concat(
                                                L("formField.types.checkbox"),
                                              ),
                                            id: t,
                                            onChange: function (t) {
                                              -1 ===
                                              Z.indexOf(
                                                t.target.getAttribute("id"),
                                              )
                                                ? tt(
                                                    [].concat(M(Z), [
                                                      t.target.getAttribute(
                                                        "id",
                                                      ),
                                                    ]),
                                                  )
                                                : tt(
                                                    Z.filter(function (e) {
                                                      return (
                                                        e !==
                                                        t.target.getAttribute(
                                                          "id",
                                                        )
                                                      );
                                                    }),
                                                  );
                                            },
                                          }),
                                        ),
                                        a.a.createElement("div", {
                                          className: "colorCell",
                                          style: { background: Object(g.a)(t) },
                                        }),
                                      );
                                    }),
                                  ),
                                ),
                                a.a.createElement(
                                  x.c,
                                  { dataElement: "annotationTypeFilterPanel" },
                                  a.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "type-filters three-column-filter",
                                    },
                                    M(U)
                                      .sort(function (t, e) {
                                        return L("annotation.".concat(t)) <=
                                          L("annotation.".concat(e))
                                          ? -1
                                          : 1;
                                      })
                                      .map(function (t, e) {
                                        return a.a.createElement(y.a, {
                                          type: "checkbox",
                                          key: e,
                                          label: a.a.createElement(
                                            w.a,
                                            {
                                              content: L(
                                                "annotation.".concat(t),
                                              ),
                                            },
                                            a.a.createElement(
                                              "div",
                                              null,
                                              L("annotation.".concat(t)),
                                            ),
                                          ),
                                          checked: K.includes(t),
                                          id: t,
                                          onChange: function (t) {
                                            -1 ===
                                            K.indexOf(
                                              t.target.getAttribute("id"),
                                            )
                                              ? Q(
                                                  [].concat(M(K), [
                                                    t.target.getAttribute("id"),
                                                  ]),
                                                )
                                              : Q(
                                                  K.filter(function (e) {
                                                    return (
                                                      e !==
                                                      t.target.getAttribute(
                                                        "id",
                                                      )
                                                    );
                                                  }),
                                                );
                                          },
                                        });
                                      }),
                                  ),
                                ),
                                mt &&
                                  a.a.createElement(
                                    x.c,
                                    {
                                      dataElement:
                                        "annotationStatusFilterPanel",
                                    },
                                    a.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "status-filters three-column-filter",
                                      },
                                      M(G).map(function (t, e) {
                                        return a.a.createElement(y.a, {
                                          type: "checkbox",
                                          key: e,
                                          checked: dt.includes(t),
                                          "aria-label": ""
                                            .concat(t, " ")
                                            .concat(
                                              L("formField.types.checkbox"),
                                            ),
                                          label: L(
                                            "option.state.".concat(
                                              t.toLocaleLowerCase(),
                                            ),
                                          ),
                                          id: t,
                                          onChange: function (t) {
                                            -1 ===
                                            dt.indexOf(
                                              t.target.getAttribute("id"),
                                            )
                                              ? ct(
                                                  [].concat(M(dt), [
                                                    t.target.getAttribute("id"),
                                                  ]),
                                                )
                                              : ct(
                                                  dt.filter(function (e) {
                                                    return (
                                                      e !==
                                                      t.target.getAttribute(
                                                        "id",
                                                      )
                                                    );
                                                  }),
                                                );
                                          },
                                        });
                                      }),
                                    ),
                                  ),
                              ),
                            ),
                          ),
                          a.a.createElement("div", { className: "divider" }),
                          a.a.createElement(
                            "fieldset",
                            { className: "settings-body" },
                            a.a.createElement(
                              "legend",
                              {
                                id: "filter-settings",
                                className: "settings-header",
                              },
                              L("option.filterAnnotModal.filterSettings"),
                            ),
                            a.a.createElement(
                              "div",
                              {
                                className: "settings",
                                role: "group",
                                "aria-labelledby": "filter-settings",
                              },
                              a.a.createElement(y.a, {
                                label: L(
                                  "option.filterAnnotModal.includeReplies",
                                ),
                                checked: ot,
                                onChange: function (t) {
                                  return nt(t.target.checked);
                                },
                                id: "filter-annot-modal-include-replies",
                              }),
                              a.a.createElement(y.a, {
                                label: L(
                                  "option.filterAnnotModal.filterDocument",
                                ),
                                checked: it,
                                onChange: function (t) {
                                  return rt(t.target.checked);
                                },
                                id: "filter-annot-modal-filter-document",
                              }),
                            ),
                          ),
                          a.a.createElement("div", { className: "divider" }),
                          a.a.createElement(
                            "div",
                            { className: "footer" },
                            a.a.createElement(v.a, {
                              className: "filter-annot-clear",
                              onClick: yt,
                              label: L("action.clearAll"),
                              disabled: 0 === pt,
                            }),
                            a.a.createElement(v.a, {
                              className: "filter-annot-apply",
                              onClick: At,
                              label: L("action.apply"),
                            }),
                          ),
                        )
                      : a.a.createElement(
                          "div",
                          null,
                          a.a.createElement("div", {
                            className: "swipe-indicator",
                          }),
                          a.a.createElement(
                            "div",
                            { className: "message" },
                            L("message.noAnnotationsFilter"),
                          ),
                        ),
                  ),
                ),
              );
        };
      e.default = j;
    },
  },
]);
//# sourceMappingURL=chunk.60.js.map
