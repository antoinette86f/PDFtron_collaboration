(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    1881: function (e, t, n) {
      var r = n(30),
        i = n(1882);
      "string" == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, ""]]);
      var o = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          (t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const r = [];
                return (
                  n.querySelectorAll(t).forEach((e) => r.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && r.push(...e(t, n.shadowRoot));
                  }),
                  r
                );
              })("apryse-webviewer"));
          const n = [];
          for (let r = 0; r < t.length; r++) {
            const i = t[r];
            if (0 === r)
              i.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                });
            else {
              const t = e.cloneNode(!0);
              i.shadowRoot.appendChild(t), n.push(t);
            }
          }
        },
        singleton: !1,
      };
      r(i, o);
      e.exports = i.locals || {};
    },
    1882: function (e, t, n) {
      (t = e.exports = n(31)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.MainHeader.OfficeEditorTools{padding:0 8px;align-items:center;flex-direction:row}.MainHeader.OfficeEditorTools .HeaderItems{width:auto}.MainHeader.OfficeEditorTools .HeaderItems .Dropdown{margin-left:8px}.MainHeader.OfficeEditorTools .HeaderItems .Dropdown .picked-option{text-align:left}.MainHeader.OfficeEditorTools .HeaderItems .action-button-wrapper{display:flex;align-items:center;position:relative}.MainHeader.OfficeEditorTools .HeaderItems .action-button-wrapper .more-tools{position:absolute;top:46px;right:6px;width:auto;padding:0}.MainHeader.OfficeEditorTools .Button .Icon svg{vertical-align:middle}.MainHeader.OfficeEditorTools .icon-text-color{display:flex;align-items:center;justify-content:center}.MainHeader.OfficeEditorTools .list-style-button{margin-right:0!important}.MainHeader.OfficeEditorTools .list-style-dropdown{background:transparent;border:none;width:12px!important;height:32px!important;margin-left:0!important;z-index:0}.MainHeader.OfficeEditorTools .list-style-dropdown.Dropdown__wrapper:hover{border-radius:4px;background:var(--tools-button-hover)}.MainHeader.OfficeEditorTools .list-style-dropdown .Dropdown{padding:0}.MainHeader.OfficeEditorTools .list-style-dropdown .Dropdown svg rect{stroke:none}.MainHeader.OfficeEditorTools .list-style-dropdown .picked-option-text{display:none}.MainHeader.OfficeEditorTools .list-style-dropdown .arrow{padding-left:0}.MainHeader.OfficeEditorTools .list-style-dropdown .Dropdown__items{overflow:hidden;width:auto!important}.MainHeader.OfficeEditorTools .list-style-dropdown .Dropdown__items .Dropdown__item{height:74px!important;padding:15px 0;margin:3px;cursor:pointer}.MainHeader.OfficeEditorTools .list-style-dropdown .Dropdown__items .Dropdown__item .officeEditor-list-style-icon{width:60px!important;height:74px!important}.MainHeader.OfficeEditorTools .insert-table-dropdown{margin:0 6px}.MainHeader.OfficeEditorTools .insert-table-dropdown.open{background-color:var(--tools-button-hover);border-radius:4px}.MainHeader.OfficeEditorTools .insert-table-dropdown .display-button{display:flex;align-items:center;cursor:pointer}.MainHeader.OfficeEditorTools .insert-table-dropdown .display-button:hover{background-color:var(--tools-button-hover);border-radius:4px}.MainHeader.OfficeEditorTools .insert-table-dropdown .display-button .Button{background-color:transparent!important}.MainHeader.OfficeEditorTools .insert-table-dropdown .display-button .Icon.arrow{width:12px;height:12px;margin:0 2px}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" });
    },
    1893: function (e, t, n) {
      "use strict";
      n.r(t);
      n(39),
        n(92),
        n(45),
        n(51),
        n(337),
        n(403),
        n(94),
        n(8),
        n(106),
        n(34),
        n(111),
        n(27),
        n(28),
        n(11),
        n(13),
        n(25),
        n(22),
        n(59),
        n(14),
        n(10),
        n(9),
        n(12),
        n(64),
        n(65),
        n(66),
        n(67),
        n(37),
        n(40),
        n(23),
        n(24),
        n(15),
        n(41),
        n(63),
        n(16),
        n(18),
        n(20),
        n(17),
        n(32),
        n(54),
        n(56),
        n(55);
      var r = n(0),
        i = n.n(r),
        o = n(6),
        a = n(2),
        c = n(3),
        l = n(189),
        s = n(1),
        d = n(81),
        u = n(86),
        f = n(230),
        p = n(71),
        m = n(550),
        h = n(551),
        g = n(42),
        E = n(552),
        y = n(5),
        v = n(213),
        b = n(47),
        w = n(531),
        O = n(73);
      n(445), n(1881), n(580);
      function x(e) {
        return (x =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                L(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : S(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function _(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                c = [],
                l = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = o.call(n)).done) &&
                    (c.push(r.value), c.length !== t);
                    l = !0
                  );
              } catch (e) {
                (s = !0), (i = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw i;
                }
              }
              return c;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return j(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return j(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function I() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ I =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          o = i.iterator || "@@iterator",
          a = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (e) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, i) {
          var o = t && t.prototype instanceof f ? t : f,
            a = Object.create(o.prototype),
            c = new _(i || []);
          return r(a, "_invoke", { value: w(e, n, c) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = s;
        var u = {};
        function f() {}
        function p() {}
        function m() {}
        var h = {};
        l(h, o, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          E = g && g(g(j([])));
        E && E !== t && n.call(E, o) && (h = E);
        var y = (m.prototype = f.prototype = Object.create(h));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var i;
          r(this, "_invoke", {
            value: function (r, o) {
              function a() {
                return new t(function (i, a) {
                  !(function r(i, o, a, c) {
                    var l = d(e[i], e, o);
                    if ("throw" !== l.type) {
                      var s = l.arg,
                        u = s.value;
                      return u && "object" == x(u) && n.call(u, "__await")
                        ? t.resolve(u.__await).then(
                            function (e) {
                              r("next", e, a, c);
                            },
                            function (e) {
                              r("throw", e, a, c);
                            },
                          )
                        : t.resolve(u).then(
                            function (e) {
                              (s.value = e), a(s);
                            },
                            function (e) {
                              return r("throw", e, a, c);
                            },
                          );
                    }
                    c(l.arg);
                  })(r, o, i, a);
                });
              }
              return (i = i ? i.then(a, a) : a());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (i, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === i) throw o;
              return C();
            }
            for (n.method = i, n.arg = o; ; ) {
              var a = n.delegate;
              if (a) {
                var c = O(a, n);
                if (c) {
                  if (c === u) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = d(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === u)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function O(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                O(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              u
            );
          var i = d(r, e.iterator, t.arg);
          if ("throw" === i.type)
            return (
              (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), u
            );
          var o = i.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              u);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function T(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function j(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                i = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (i.next = i);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = m),
          r(y, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: p, configurable: !0 }),
          (p.displayName = l(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(b.prototype),
          l(b.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new b(s(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          v(y),
          l(y, c, "Generator"),
          l(y, o, function () {
            return this;
          }),
          l(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = j),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(T),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), u)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                u
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), T(n), u;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    T(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                u
              );
            },
          }),
          e
        );
      }
      function C(e, t, n, r, i, o, a) {
        try {
          var c = e[o](a),
            l = c.value;
        } catch (e) {
          return void n(e);
        }
        c.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function k(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = e.apply(t, n);
            function a(e) {
              C(o, r, i, a, c, "next", e);
            }
            function c(e) {
              C(o, r, i, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function L(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" !== x(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" !== x(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === x(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var A = window.Core.Document.OfficeEditorToggleableStyles,
        H = function (e) {
          var t = e.activeStates;
          return Object.values(A).map(function (e) {
            return i.a.createElement(u.a, {
              key: e,
              isActive: t[e],
              ariaPressed: t[e],
              onClick: function () {
                s.a
                  .getOfficeEditor()
                  .updateSelectionAndCursorStyle(L({}, e, !0));
              },
              dataElement: "office-editor-".concat(e),
              title: "officeEditor.".concat(e),
              img: "icon-text-".concat(e),
            });
          });
        },
        P = function (e) {
          var t = e.justification;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(u.a, {
              isActive: t === b.h.Left,
              dataElement: "office-editor-left-align",
              title: "officeEditor.leftAlign",
              img: "icon-menu-left-align",
              onClick: function () {
                s.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: "left" });
              },
            }),
            i.a.createElement(u.a, {
              isActive: t === b.h.Center,
              dataElement: "office-editor-center-align",
              title: "officeEditor.centerAlign",
              img: "icon-menu-center-align",
              onClick: function () {
                s.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: "center" });
              },
            }),
            i.a.createElement(u.a, {
              isActive: t === b.h.Right,
              dataElement: "office-editor-right-align",
              title: "officeEditor.rightAlign",
              img: "icon-menu-right-align",
              onClick: function () {
                s.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: "right" });
              },
            }),
            i.a.createElement(u.a, {
              isActive: t === b.h.Both,
              dataElement: "office-editor-justify",
              title: "officeEditor.justify",
              img: "icon-menu-both-align",
              onClick: function () {
                s.a
                  .getOfficeEditor()
                  .updateParagraphStyle({ justification: "both" });
              },
            }),
          );
        },
        N = function (e) {
          var t = e.listType,
            n = b.k.map(function (e) {
              return {
                className: "officeEditor-list-style-icon",
                key: e.enum,
                src: e.img,
              };
            }),
            r = b.n.map(function (e) {
              return {
                className: "officeEditor-list-style-icon",
                key: e.enum,
                src: e.img,
              };
            });
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(u.a, {
              isActive: t === b.j.Unordered,
              dataElement: "unorderedListDropButton",
              title: "officeEditor.bulletList",
              img: "icon-office-editor-bullet-list",
              className: "list-style-button",
              onClick: function () {
                s.a.getOfficeEditor().toggleListSelection(b.j.Unordered);
              },
            }),
            i.a.createElement(d.a, {
              id: "office-editor-bullet-list-dropdown",
              dataElement: "office-editor-bullet-list-dropdown",
              images: n,
              columns: 3,
              onClickItem: function (e) {
                s.a.getOfficeEditor().setListPreset(e);
              },
              className: "list-style-dropdown",
            }),
            i.a.createElement(u.a, {
              isActive: t === b.j.Ordered,
              dataElement: "office-editor-number-list",
              title: "officeEditor.numberList",
              img: "icon-office-editor-number-list",
              className: "list-style-button",
              onClick: function () {
                s.a.getOfficeEditor().toggleListSelection(b.j.Ordered);
              },
            }),
            i.a.createElement(d.a, {
              id: "office-editor-number-list-dropdown",
              dataElement: "office-editor-number-list-dropdown",
              images: r,
              columns: 3,
              onClickItem: function (e) {
                s.a.getOfficeEditor().setListPreset(e);
              },
              className: "list-style-dropdown",
            }),
            i.a.createElement(u.a, {
              dataElement: "decreaseIndentButton",
              title: "officeEditor.decreaseIndent",
              img: "ic-indent-decrease",
              onClick: k(
                I().mark(function e() {
                  return I().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), s.a.getOfficeEditor().decreaseIndent()
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            }),
            i.a.createElement(u.a, {
              dataElement: "increaseIndentButton",
              title: "officeEditor.increaseIndent",
              img: "ic-indent-increase",
              onClick: k(
                I().mark(function e() {
                  return I().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), s.a.getOfficeEditor().increaseIndent()
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              ),
            }),
          );
        };
      t.default = function () {
        var e,
          t = Object(o.d)(),
          n = _(
            Object(o.e)(function (e) {
              return [
                c.a.isElementOpen(e, y.a.OFFICE_EDITOR_TOOLS_HEADER),
                c.a.getOfficeEditorCursorProperties(e),
                c.a.isCursorInTable(e),
                c.a.getOfficeEditorSelectionProperties(e),
                c.a.getAvailableFontFaces(e),
                c.a.getActiveTheme(e),
                c.a.getCSSFontValues(e),
              ];
            }, o.c),
            7,
          ),
          x = n[0],
          S = n[1],
          j = n[2],
          C = n[3],
          L = n[4],
          A = n[5],
          F = n[6],
          M = _(Object(r.useState)(0), 2),
          D = M[0],
          R = M[1],
          B = _(Object(r.useState)(0), 2),
          G = B[0],
          z = B[1],
          U = _(Object(r.useState)(6), 2),
          K = U[0],
          V = U[1],
          W = _(Object(r.useState)(!1), 2),
          Y = W[0],
          X = W[1];
        Object(r.useEffect)(function () {
          var e,
            n = (function () {
              var e = k(
                I().mark(function e(n) {
                  return I().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t(a.a.setOfficeEditorCursorProperties(n));
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            r = function (e) {
              t(a.a.setOfficeEditorSelectionProperties(e));
            };
          return (
            s.a.getDocument().addEventListener("cursorPropertiesUpdated", n),
            null === (e = s.a.getDocument()) ||
              void 0 === e ||
              e.addEventListener("selectionPropertiesUpdated", r),
            function () {
              s.a
                .getDocument()
                .removeEventListener("selectionPropertiesUpdated", r),
                s.a
                  .getDocument()
                  .removeEventListener("cursorPropertiesUpdated", n);
            }
          );
        }, []),
          Object(r.useEffect)(
            function () {
              S.fontFace &&
                !L.includes(S.fontFace) &&
                t(a.a.addOfficeEditorAvailableFontFace(S.fontFace));
            },
            [L, S],
          ),
          Object(r.useEffect)(
            function () {
              if (0 !== D && 0 !== G) {
                var e = D - 16;
                V(
                  e >= G
                    ? 6
                    : e < G && e >= G - 121 + 77
                      ? 5
                      : e < G - 121 + 77 && e >= G - 121 - 209 + 77 && e >= 858
                        ? 4
                        : 3,
                );
              }
            },
            [D, G],
          );
        var q = s.a.getOfficeEditor().isTextSelected() ? C : S,
          J = q.bold,
          $ = q.italic,
          Q = "single" === q.underlineStyle,
          Z = q.fontFace || "",
          ee = q.pointSize,
          te = void 0 === ee ? "" : ee.toString(),
          ne = q.paragraphProperties.justification,
          re = Object(O.a)(
            q.paragraphProperties.lineHeightMultiplier,
            q.paragraphProperties.lineHeight,
            S.paragraphProperties.fontPointSize || b.d,
          ),
          ie = q.paragraphProperties.listType,
          oe = A === v.a.LIGHT,
          ae = Object(O.b)(q.color),
          ce = oe
            ? "rgba(255,255,255,1)" === ae.toString()
            : "rgba(0,0,0,1)" === ae.toString(),
          le =
            null == ae || null === (e = ae.toHexString) || void 0 === e
              ? void 0
              : e.call(ae);
        return x
          ? i.a.createElement(
              p.a,
              {
                dataElement: y.a.OFFICE_EDITOR_TOOLS_HEADER,
                className: "HeaderToolsContainer",
              },
              i.a.createElement(
                l.a,
                {
                  bounds: !0,
                  onResize: function (e) {
                    var t = e.bounds;
                    R(t.width);
                  },
                },
                function (e) {
                  var n = e.measureRef;
                  return i.a.createElement(
                    "div",
                    { className: "MainHeader Tools OfficeEditorTools", ref: n },
                    i.a.createElement(
                      l.a,
                      {
                        bounds: !0,
                        onResize: function (e) {
                          var t = e.bounds;
                          0 === G && z(t.width);
                        },
                      },
                      function (e) {
                        var n = e.measureRef;
                        return i.a.createElement(
                          "div",
                          { className: "HeaderItems", ref: n },
                          i.a.createElement(d.a, {
                            id: "office-editor-text-format",
                            items: Object.keys(b.b),
                            onOpened: function () {
                              return X(!1);
                            },
                            onClickItem: (function () {
                              var e = k(
                                I().mark(function e(t) {
                                  var n, r, i, o, a;
                                  return I().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (n = b.b[t]),
                                            (r = parseInt(n.fontSize, 10)),
                                            (i =
                                              new window.Core.Annotations.Color(
                                                n.color,
                                              )),
                                            (o = {
                                              r: i.R,
                                              g: i.G,
                                              b: i.B,
                                              a: 255,
                                            }),
                                            (a = {
                                              bold: !1,
                                              italic: !1,
                                              underline: !1,
                                              pointSize: r,
                                              color: o,
                                            }),
                                            (e.next = 7),
                                            s.a
                                              .getOfficeEditor()
                                              .updateParagraphStylePresets(a)
                                          );
                                        case 7:
                                          return (
                                            (e.next = 9),
                                            s.a
                                              .getOfficeEditor()
                                              .setMainCursorStyle(a)
                                          );
                                        case 9:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                }),
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })(),
                            getCustomItemStyle: function (e) {
                              return T(
                                T({}, b.b[e]),
                                {},
                                {
                                  padding: "20px 10px",
                                  color: "var(--gray-8)",
                                },
                              );
                            },
                            applyCustomStyleToButton: !1,
                            currentSelectionKey: Object(O.c)(q),
                            width: 160,
                            dataElement: "office-editor-text-format",
                          }),
                          i.a.createElement(d.a, {
                            id: "office-editor-font",
                            items: L,
                            onOpened: function () {
                              return X(!1);
                            },
                            onClickItem: function (e) {
                              "string" == typeof e &&
                                s.a
                                  .getOfficeEditor()
                                  .updateSelectionAndCursorStyle({
                                    fontFace: e,
                                  });
                            },
                            getCustomItemStyle: function (e) {
                              return T({}, F[e]);
                            },
                            maxHeight: 500,
                            customDataValidator: function (e) {
                              return L.includes(e);
                            },
                            width: 160,
                            dataElement: "office-editor-font",
                            currentSelectionKey: Z,
                            hasInput: !0,
                          }),
                          i.a.createElement(d.a, {
                            id: "office-editor-font-size",
                            items: b.a,
                            onOpened: function () {
                              return X(!1);
                            },
                            onClickItem: function (e) {
                              var t = parseInt(e, 10);
                              isNaN(t) && (t = b.d),
                                t > b.g.MAX
                                  ? (t = b.g.MAX)
                                  : t < b.g.MIN && (t = b.g.MIN),
                                s.a
                                  .getOfficeEditor()
                                  .updateSelectionAndCursorStyle({
                                    pointSize: t,
                                  });
                            },
                            currentSelectionKey: te,
                            width: 80,
                            dataElement: "office-editor-font-size",
                            hasInput: !0,
                            isSearchEnabled: !1,
                          }),
                          K >= 4 &&
                            i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement("div", {
                                className: "divider",
                              }),
                              i.a.createElement(H, {
                                activeStates: {
                                  bold: J,
                                  italic: $,
                                  underline: Q,
                                },
                              }),
                            ),
                          i.a.createElement("div", { className: "divider" }),
                          i.a.createElement(f.a, {
                            onClick: function () {
                              return X(!1);
                            },
                            dataElement: y.a.OFFICE_EDITOR_TEXT_COLOR_BUTTON,
                            title: "officeEditor.textColor",
                            ariaLabel: le,
                            img: "icon-office-editor-circle",
                            element: y.a.OFFICE_EDITOR_COLOR_PICKER_OVERLAY,
                            color: ae.toString(),
                            iconClassName: "".concat(
                              ce ? "icon-border" : "",
                              " icon-text-color",
                            ),
                          }),
                          i.a.createElement(h.a, {
                            onStyleChange: function (e, n) {
                              var r = { r: n.R, g: n.G, b: n.B, a: 255 };
                              s.a
                                .getOfficeEditor()
                                .updateSelectionAndCursorStyle({ color: r }),
                                t(
                                  a.a.closeElements([
                                    y.a.OFFICE_EDITOR_COLOR_PICKER_OVERLAY,
                                  ]),
                                );
                            },
                            color: ae,
                          }),
                          K >= 5 &&
                            i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement("div", {
                                className: "divider",
                              }),
                              i.a.createElement(P, { justification: ne }),
                            ),
                          i.a.createElement("div", { className: "divider" }),
                          i.a.createElement(d.a, {
                            id: "office-editor-line-spacing",
                            items: Object.keys(b.i),
                            onClickItem: function (e) {
                              var t = b.i[e];
                              s.a.getOfficeEditor().updateParagraphStyle({
                                lineHeightMultiplier: t,
                              });
                            },
                            currentSelectionKey: re,
                            width: 80,
                            dataElement: "office-editor-line-spacing",
                            displayButton: function (e) {
                              return i.a.createElement(u.a, {
                                title: "officeEditor.lineSpacing",
                                img: "icon-office-editor-line-spacing",
                                isActive: e,
                                onClick: function () {
                                  return X(!1);
                                },
                              });
                            },
                          }),
                          i.a.createElement("div", { className: "divider" }),
                          i.a.createElement(u.a, {
                            title: "officeEditor.pageBreak",
                            img: "icon-office-editor-page-break",
                            dataElement: y.a.OFFICE_EDITOR_PAGE_BREAK,
                            disabled: j,
                            onClick: function () {
                              s.a.getOfficeEditor().insertPageBreak();
                            },
                          }),
                          i.a.createElement(
                            d.a,
                            {
                              id: "office-editor-insert-table",
                              dataElement:
                                y.a.OFFICE_EDITOR_TOOLS_HEADER_INSERT_TABLE,
                              width: 136,
                              className: "insert-table-dropdown",
                              displayButton: function (e) {
                                return i.a.createElement(
                                  i.a.Fragment,
                                  null,
                                  i.a.createElement(u.a, {
                                    title: "officeEditor.table",
                                    img: "ic-table",
                                    isActive: e,
                                  }),
                                  i.a.createElement(g.a, {
                                    className: "arrow",
                                    glyph: "icon-chevron-".concat(
                                      e ? "up" : "down",
                                    ),
                                  }),
                                );
                              },
                            },
                            i.a.createElement(E.a, null),
                          ),
                          i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(u.a, {
                              className: "tool-group-button",
                              dataElement:
                                y.a.OFFICE_EDITOR_TOOLS_HEADER_INSERT_IMAGE,
                              title: "officeEditor.insertImage",
                              img: "icon-tool-image-line",
                              onClick: function () {
                                Object(w.a)();
                              },
                            }),
                            i.a.createElement(m.a, null),
                          ),
                          6 === K &&
                            i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement("div", {
                                className: "divider",
                              }),
                              i.a.createElement(N, { listType: ie }),
                            ),
                          K < 6 &&
                            i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement("div", {
                                className: "divider",
                              }),
                              i.a.createElement(
                                "div",
                                { className: "action-button-wrapper" },
                                i.a.createElement(u.a, {
                                  className: "tool-group-button",
                                  isActive: Y,
                                  dataElement: "office-editor-more-tools",
                                  title: "action.more",
                                  img: "icon-tools-more-vertical",
                                  onClick: function () {
                                    return X(!Y);
                                  },
                                }),
                                Y &&
                                  i.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "more-tools MainHeader Tools OfficeEditorTools",
                                    },
                                    i.a.createElement(
                                      "div",
                                      { className: "HeaderItems" },
                                      K < 4 &&
                                        i.a.createElement(
                                          i.a.Fragment,
                                          null,
                                          i.a.createElement(H, {
                                            activeStates: {
                                              bold: J,
                                              italic: $,
                                              underline: Q,
                                            },
                                          }),
                                          i.a.createElement("div", {
                                            className: "divider",
                                          }),
                                        ),
                                      K < 5 &&
                                        i.a.createElement(
                                          i.a.Fragment,
                                          null,
                                          i.a.createElement(P, {
                                            justification: ne,
                                          }),
                                          i.a.createElement("div", {
                                            className: "divider",
                                          }),
                                        ),
                                      K < 6 &&
                                        i.a.createElement(N, { listType: ie }),
                                    ),
                                  ),
                              ),
                            ),
                        );
                      },
                    ),
                  );
                },
              ),
            )
          : null;
      };
    },
  },
]);
//# sourceMappingURL=chunk.61.js.map
