(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    1855: function (o, e, t) {
      var r = t(30),
        n = t(1856);
      "string" == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[o.i, n, ""]]);
      var i = {
        insert: function (o) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(o);
          let e;
          (e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function o(e, t = document) {
                const r = [];
                return (
                  t.querySelectorAll(e).forEach((o) => r.push(o)),
                  t.querySelectorAll("*").forEach((t) => {
                    t.shadowRoot && r.push(...o(e, t.shadowRoot));
                  }),
                  r
                );
              })("apryse-webviewer"));
          const t = [];
          for (let r = 0; r < e.length; r++) {
            const n = e[r];
            if (0 === r)
              n.shadowRoot.appendChild(o),
                (o.onload = function () {
                  t.length > 0 &&
                    t.forEach((e) => {
                      e.innerHTML = o.innerHTML;
                    });
                });
            else {
              const e = o.cloneNode(!0);
              n.shadowRoot.appendChild(e), t.push(e);
            }
          }
        },
        singleton: !1,
      };
      r(n, i);
      o.exports = n.locals || {};
    },
    1856: function (o, e, t) {
      (e = o.exports = t(31)(!1)).push([
        o.i,
        ".open.ColorPickerModal{visibility:visible}.closed.ColorPickerModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ColorPickerModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.ColorPickerModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.ColorPickerModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.ColorPickerModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.ColorPickerModal .footer .modal-button.cancel:hover,.ColorPickerModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.ColorPickerModal .footer .modal-button.cancel,.ColorPickerModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.ColorPickerModal .footer .modal-button.cancel.disabled,.ColorPickerModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.ColorPickerModal .footer .modal-button.cancel.disabled span,.ColorPickerModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.ColorPickerModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.ColorPickerModal .modal-container .wrapper .modal-content{padding:10px}.ColorPickerModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.ColorPickerModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.ColorPickerModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.ColorPickerModal .footer .modal-button.confirm{margin-left:4px}.ColorPickerModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .footer .modal-button{padding:23px 8px}}.ColorPickerModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .swipe-indicator{width:32px}}.ColorPickerModal .container{display:flex;flex-direction:column;justify-content:center;align-items:center;background:var(--component-background);padding:15px 16px;border-radius:4px;width:250px;overflow-y:unset}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ColorPickerModal .container{width:100%;padding:24px 24px 16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ColorPickerModal .container{width:100%;padding:24px 24px 16px}}.ColorPickerModal .container .sketch-picker{border-radius:0!important;box-shadow:none!important;width:220px!important;padding:0!important;background:var(--component-background)!important}.ColorPickerModal .container .sketch-picker>div{border-radius:2px!important}.ColorPickerModal .container .sketch-picker .saturation-white>div>div{width:12px!important;height:12px!important;transform:translateX(-6px) translateY(-6px)!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2) span{color:var(--text-color)!important;cursor:default!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:first-child{border-radius:2px}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:first-child>div{margin-top:6px;cursor:ew-resize!important;overflow:visible!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2) .hue-horizontal{width:97%;border-radius:2px}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2) .hue-horizontal div div{transform:translateX(-7px) translateY(-3px)!important;height:14px!important;width:14px!important;border-radius:14px!important;border:1px solid var(--gray-6)!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:nth-child(2){height:24px!important;border-radius:12px!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(2)>div:nth-child(2)>div{border-radius:12px!important}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(3) input{width:100%!important;text-align:center;border-radius:2px}.ColorPickerModal .container .sketch-picker .flexbox-fix:nth-child(3) label{color:var(--text-color)!important}.ColorPickerModal .container .buttons{width:220px;text-align:right;font-size:13px;margin-top:20px;display:flex;justify-content:flex-end}.ColorPickerModal .container .buttons .save-button{background-color:transparent;color:var(--primary-button-text);padding:6px 16px;background:var(--primary-button);border-radius:4px;border:0;height:32px;cursor:pointer;width:-moz-fit-content;width:fit-content}.ColorPickerModal .container .buttons .save-button:hover{background:var(--blue-6)}.ColorPickerModal .container .buttons .cancel-button{cursor:pointer;background:none;border:0;color:var(--secondary-button-text);padding:6px 16px;margin-right:4px;height:32px;width:-moz-fit-content;width:fit-content}.ColorPickerModal .container .buttons .cancel-button:hover{color:var(--secondary-button-hover)}.ColorPickerModal .flexbox-fix input{padding:8px!important;font-size:13px!important;border:1px solid var(--gray-6)!important;box-shadow:none!important}.ColorPickerModal .flexbox-fix input:focus{border:1px solid var(--blue-5)!important;box-shadow:none!important}.ColorPickerModal .flexbox-fix label{font-size:13px!important}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" });
    },
    1909: function (o, e, t) {
      "use strict";
      t.r(e);
      t(18),
        t(11),
        t(13),
        t(8),
        t(14),
        t(10),
        t(9),
        t(12),
        t(16),
        t(15),
        t(20),
        t(17),
        t(27),
        t(28),
        t(25),
        t(22),
        t(34),
        t(32),
        t(54),
        t(23),
        t(24),
        t(56),
        t(55);
      var r = t(0),
        n = t.n(r),
        i = t(3),
        a = t(2),
        l = t(6),
        c = (t(76), t(19)),
        d = t.n(c),
        p = t(396),
        s = t(1883),
        u = t(5),
        b = t(43),
        f = t(334),
        m = (t(1855), t(170));
      function h(o, e) {
        return (
          (function (o) {
            if (Array.isArray(o)) return o;
          })(o) ||
          (function (o, e) {
            var t =
              null == o
                ? null
                : ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                  o["@@iterator"];
            if (null != t) {
              var r,
                n,
                i,
                a,
                l = [],
                c = !0,
                d = !1;
              try {
                if (((i = (t = t.call(o)).next), 0 === e)) {
                  if (Object(t) !== t) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(t)).done) &&
                    (l.push(r.value), l.length !== e);
                    c = !0
                  );
              } catch (o) {
                (d = !0), (n = o);
              } finally {
                try {
                  if (
                    !c &&
                    null != t.return &&
                    ((a = t.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (d) throw n;
                }
              }
              return l;
            }
          })(o, e) ||
          (function (o, e) {
            if (!o) return;
            if ("string" == typeof o) return x(o, e);
            var t = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === t && o.constructor && (t = o.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(o);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return x(o, e);
          })(o, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function x(o, e) {
        (null == e || e > o.length) && (e = o.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = o[t];
        return r;
      }
      var y = function (o) {
        var e = o.isDisabled,
          t = o.isOpen,
          i = o.color,
          a = o.closeModal,
          l = o.handleChangeSave,
          c = o.handleChangeCancel,
          x = h(Object(p.a)(), 1)[0],
          y = h(Object(r.useState)({}), 2),
          w = y[0],
          v = y[1],
          g = d()({ Modal: !0, ColorPickerModal: !0, open: t, closed: !t });
        Object(r.useEffect)(function () {
          var o = function (o) {
            "Escape" === o.key &&
              (null == o || o.stopPropagation(),
              null == o || o.preventDefault(),
              k());
          };
          return (
            window.addEventListener("keydown", o),
            function () {
              return window.removeEventListener("keydown", o);
            }
          );
        }, []),
          Object(r.useEffect)(
            function () {
              i && 0 !== i.A
                ? v({ r: i.R, g: i.G, b: i.B, a: 1 })
                : v({ r: 0, g: 0, b: 0, a: 1 });
            },
            [i],
          );
        var k = Object(m.a)(a),
          C = Object(m.a)(c),
          P = Object(m.a)(function () {
            l(w);
          });
        return e
          ? null
          : n.a.createElement(
              "div",
              {
                className: g,
                "data-element": u.a.COLOR_PICKER_MODAL,
                onMouseDown: a,
              },
              n.a.createElement(
                f.a,
                {
                  isOpen: t,
                  closeHandler: k,
                  onCloseClick: k,
                  swipeToClose: !0,
                  accessibleLabel: "colorPickerModal.modalTitle",
                },
                n.a.createElement(
                  "div",
                  {
                    className: "container",
                    onMouseDown: function (o) {
                      return o.stopPropagation();
                    },
                  },
                  n.a.createElement(s.a, {
                    color: w,
                    disableAlpha: !0,
                    onChange: function (o) {
                      v(o.rgb);
                    },
                    presetColors: [],
                  }),
                  n.a.createElement(
                    "div",
                    { className: "buttons" },
                    n.a.createElement(b.a, {
                      className: "cancel-button",
                      onClick: C,
                      label: x("action.cancel"),
                    }),
                    n.a.createElement(b.a, {
                      className: "save-button",
                      onClick: P,
                      label: x("action.ok"),
                    }),
                  ),
                ),
              ),
            );
      };
      function w(o) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  "function" == typeof Symbol &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? "symbol"
                  : typeof o;
              })(o);
      }
      var v = ["closeColorPicker", "onColorChange"];
      function g(o, e) {
        var t = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(o);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(o, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function k(o) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? g(Object(t), !0).forEach(function (e) {
                C(o, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t))
              : g(Object(t)).forEach(function (e) {
                  Object.defineProperty(
                    o,
                    e,
                    Object.getOwnPropertyDescriptor(t, e),
                  );
                });
        }
        return o;
      }
      function C(o, e, t) {
        return (
          (e = (function (o) {
            var e = (function (o, e) {
              if ("object" !== w(o) || null === o) return o;
              var t = o[Symbol.toPrimitive];
              if (void 0 !== t) {
                var r = t.call(o, e || "default");
                if ("object" !== w(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(o);
            })(o, "string");
            return "symbol" === w(e) ? e : String(e);
          })(e)) in o
            ? Object.defineProperty(o, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (o[e] = t),
          o
        );
      }
      function P(o, e) {
        if (null == o) return {};
        var t,
          r,
          n = (function (o, e) {
            if (null == o) return {};
            var t,
              r,
              n = {},
              i = Object.keys(o);
            for (r = 0; r < i.length; r++)
              (t = i[r]), e.indexOf(t) >= 0 || (n[t] = o[t]);
            return n;
          })(o, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(o);
          for (r = 0; r < i.length; r++)
            (t = i[r]),
              e.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(o, t) &&
                  (n[t] = o[t]));
        }
        return n;
      }
      var O = function (o) {
        var e = o.closeColorPicker,
          t = o.onColorChange,
          i = P(o, v),
          a = Object(r.useCallback)(
            function () {
              e();
            },
            [e],
          ),
          l = Object(r.useCallback)(
            function () {
              e();
            },
            [e],
          ),
          c = k(
            k({}, i),
            {},
            {
              closeModal: a,
              handleChangeSave: function (o) {
                t(o), e();
              },
              handleChangeCancel: l,
            },
          );
        return n.a.createElement(y, c);
      };
      function M(o) {
        return (M =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  "function" == typeof Symbol &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? "symbol"
                  : typeof o;
              })(o);
      }
      function j(o, e) {
        var t = Object.keys(o);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(o);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(o, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function S(o) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? j(Object(t), !0).forEach(function (e) {
                A(o, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t))
              : j(Object(t)).forEach(function (e) {
                  Object.defineProperty(
                    o,
                    e,
                    Object.getOwnPropertyDescriptor(t, e),
                  );
                });
        }
        return o;
      }
      function A(o, e, t) {
        return (
          (e = (function (o) {
            var e = (function (o, e) {
              if ("object" !== M(o) || null === o) return o;
              var t = o[Symbol.toPrimitive];
              if (void 0 !== t) {
                var r = t.call(o, e || "default");
                if ("object" !== M(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === e ? String : Number)(o);
            })(o, "string");
            return "symbol" === M(e) ? e : String(e);
          })(e)) in o
            ? Object.defineProperty(o, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (o[e] = t),
          o
        );
      }
      function E(o, e) {
        return (
          (function (o) {
            if (Array.isArray(o)) return o;
          })(o) ||
          (function (o, e) {
            var t =
              null == o
                ? null
                : ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                  o["@@iterator"];
            if (null != t) {
              var r,
                n,
                i,
                a,
                l = [],
                c = !0,
                d = !1;
              try {
                if (((i = (t = t.call(o)).next), 0 === e)) {
                  if (Object(t) !== t) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(t)).done) &&
                    (l.push(r.value), l.length !== e);
                    c = !0
                  );
              } catch (o) {
                (d = !0), (n = o);
              } finally {
                try {
                  if (
                    !c &&
                    null != t.return &&
                    ((a = t.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (d) throw n;
                }
              }
              return l;
            }
          })(o, e) ||
          (function (o, e) {
            if (!o) return;
            if ("string" == typeof o) return D(o, e);
            var t = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === t && o.constructor && (t = o.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(o);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return D(o, e);
          })(o, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function D(o, e) {
        (null == e || e > o.length) && (e = o.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = o[t];
        return r;
      }
      var T = function (o) {
        var e = Object(l.d)(),
          t = E(
            Object(l.e)(function (o) {
              return [
                i.a.isElementDisabled(o, "ColorPickerModal"),
                i.a.isElementOpen(o, "ColorPickerModal"),
                i.a.getCustomColor(o),
              ];
            }),
            3,
          ),
          r = t[0],
          c = t[1],
          d = t[2],
          p = S(
            S({}, o),
            {},
            {
              color: d,
              onColorChange: function (o) {
                var t = new window.Core.Annotations.Color(o.r, o.g, o.b, o.a);
                e(a.a.setCustomColor(t));
              },
              isDisabled: r,
              closeColorPicker: function () {
                e(a.a.closeElement("ColorPickerModal"));
              },
              isOpen: c,
            },
          );
        return n.a.createElement(O, p);
      };
      e.default = T;
    },
  },
]);
//# sourceMappingURL=chunk.56.js.map
