(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    1831: function (o, e, n) {
      var t = n(30),
        i = n(1832);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[o.i, i, ""]]);
      var r = {
        insert: function (o) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(o);
          let e;
          (e = document.getElementsByTagName("apryse-webviewer")),
            e.length ||
              (e = (function o(e, n = document) {
                const t = [];
                return (
                  n.querySelectorAll(e).forEach((o) => t.push(o)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && t.push(...o(e, n.shadowRoot));
                  }),
                  t
                );
              })("apryse-webviewer"));
          const n = [];
          for (let t = 0; t < e.length; t++) {
            const i = e[t];
            if (0 === t)
              i.shadowRoot.appendChild(o),
                (o.onload = function () {
                  n.length > 0 &&
                    n.forEach((e) => {
                      e.innerHTML = o.innerHTML;
                    });
                });
            else {
              const e = o.cloneNode(!0);
              i.shadowRoot.appendChild(e), n.push(e);
            }
          }
        },
        singleton: !1,
      };
      t(i, r);
      o.exports = i.locals || {};
    },
    1832: function (o, e, n) {
      (e = o.exports = n(31)(!1)).push([
        o.i,
        ".open.LoadingModal{visibility:visible}.closed.LoadingModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.LoadingModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover);border-color:var(--primary-button-hover);color:var(--gray-0)}.LoadingModal .footer .modal-button.confirm{background:var(--primary-button);border-color:var(--primary-button);color:var(--primary-button-text)}.LoadingModal .footer .modal-button.confirm.disabled{cursor:default;background:var(--disabled-button-color);color:var(--primary-button-text)}.LoadingModal .footer .modal-button.confirm.disabled span{color:var(--primary-button-text)}.LoadingModal .footer .modal-button.cancel:hover,.LoadingModal .footer .modal-button.secondary-btn-custom:hover{border:none;box-shadow:inset 0 0 0 1px var(--blue-6);color:var(--blue-6)}.LoadingModal .footer .modal-button.cancel,.LoadingModal .footer .modal-button.secondary-btn-custom{border:none;box-shadow:inset 0 0 0 1px var(--primary-button);color:var(--primary-button)}.LoadingModal .footer .modal-button.cancel.disabled,.LoadingModal .footer .modal-button.secondary-btn-custom.disabled{cursor:default;border:none;box-shadow:inset 0 0 0 1px rgba(43,115,171,.5);color:rgba(43,115,171,.5)}.LoadingModal .footer .modal-button.cancel.disabled span,.LoadingModal .footer .modal-button.secondary-btn-custom.disabled span{color:rgba(43,115,171,.5)}.LoadingModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.LoadingModal .modal-container .wrapper .modal-content{padding:10px}.LoadingModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.LoadingModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.LoadingModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.LoadingModal .footer .modal-button.confirm{margin-left:4px}.LoadingModal .footer .modal-button.secondary-btn-custom{border-radius:4px;padding:2px 20px 4px;cursor:pointer}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LoadingModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LoadingModal .footer .modal-button{padding:23px 8px}}.LoadingModal .swipe-indicator{background:var(--swipe-indicator-bg);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LoadingModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .LoadingModal .swipe-indicator{display:none}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LoadingModal .swipe-indicator{width:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LoadingModal .swipe-indicator{width:32px}}.LoadingModal .container{display:flex;flex-direction:column;align-items:center;padding:10px}.LoadingModal .inner-wrapper{margin:10px;border-top:5px solid var(--border);border:5px solid var(--border);border-top-color:var(--focus-border);border-radius:50%;width:54px;height:54px;animation:spin 1.2s ease infinite}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",
        "",
      ]),
        (e.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" });
    },
    1931: function (o, e, n) {
      "use strict";
      n.r(e);
      n(27),
        n(28),
        n(11),
        n(13),
        n(8),
        n(25),
        n(22),
        n(41),
        n(46),
        n(40),
        n(84),
        n(37),
        n(14),
        n(10),
        n(9),
        n(12);
      var t = n(0),
        i = n.n(t),
        r = n(4),
        a = n.n(r),
        d = n(6),
        p = n(1451),
        l = n(2),
        s = n(3),
        c = n(5);
      n(1831);
      function u(o) {
        return (u =
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
      function m(o, e) {
        if (!(o instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function b(o, e) {
        for (var n = 0; n < e.length; n++) {
          var t = e[n];
          (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            "value" in t && (t.writable = !0),
            Object.defineProperty(o, g(t.key), t);
        }
      }
      function f(o, e) {
        return (f = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (o, e) {
              return (o.__proto__ = e), o;
            })(o, e);
      }
      function y(o) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (o) {
            return !1;
          }
        })();
        return function () {
          var n,
            t = w(o);
          if (e) {
            var i = w(this).constructor;
            n = Reflect.construct(t, arguments, i);
          } else n = t.apply(this, arguments);
          return h(this, n);
        };
      }
      function h(o, e) {
        if (e && ("object" === u(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return (function (o) {
          if (void 0 === o)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return o;
        })(o);
      }
      function w(o) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function g(o) {
        var e = (function (o, e) {
          if ("object" !== u(o) || null === o) return o;
          var n = o[Symbol.toPrimitive];
          if (void 0 !== n) {
            var t = n.call(o, e || "default");
            if ("object" !== u(t)) return t;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(o);
        })(o, "string");
        return "symbol" === u(e) ? e : String(e);
      }
      var x,
        v,
        L,
        M = (function (o) {
          !(function (o, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (o.prototype = Object.create(e && e.prototype, {
              constructor: { value: o, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(o, "prototype", { writable: !1 }),
              e && f(o, e);
          })(a, o);
          var e,
            n,
            t,
            r = y(a);
          function a() {
            return m(this, a), r.apply(this, arguments);
          }
          return (
            (e = a),
            (n = [
              {
                key: "componentDidUpdate",
                value: function (o) {
                  !o.isOpen &&
                    this.props.isOpen &&
                    this.props.closeElements([
                      c.a.SIGNATURE_MODAL,
                      c.a.PRINT_MODAL,
                      c.a.ERROR_MODAL,
                    ]);
                },
              },
              {
                key: "render",
                value: function () {
                  if (this.props.isDisabled) return null;
                  var o = Object(p.a)("Modal LoadingModal", this.props);
                  return i.a.createElement(
                    "div",
                    { className: o, "data-element": c.a.LOADING_MODAL },
                    i.a.createElement(
                      "div",
                      { className: "container" },
                      i.a.createElement("div", { className: "inner-wrapper" }),
                    ),
                  );
                },
              },
            ]) && b(e.prototype, n),
            t && b(e, t),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            a
          );
        })(i.a.PureComponent);
      (x = M),
        (v = "propTypes"),
        (L = {
          isDisabled: a.a.bool,
          isOpen: a.a.bool,
          closeElements: a.a.func.isRequired,
        }),
        (v = g(v)) in x
          ? Object.defineProperty(x, v, {
              value: L,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (x[v] = L);
      var O = { closeElements: l.a.closeElements },
        A = Object(d.b)(function (o) {
          return {
            isDisabled: s.a.isElementDisabled(o, c.a.LOADING_MODAL),
            isOpen: s.a.isElementOpen(o, c.a.LOADING_MODAL),
          };
        }, O)(M);
      e.default = A;
    },
  },
]);
//# sourceMappingURL=chunk.63.js.map
