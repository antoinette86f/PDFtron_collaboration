/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [19],
    {
      590: function (ya) {
        (function () {
          ya.exports = {
            Ma: function () {
              function ua(e, b) {
                this.scrollLeft = e;
                this.scrollTop = b;
              }
              function n(e) {
                if (
                  null === e ||
                  "object" !== typeof e ||
                  void 0 === e.behavior ||
                  "auto" === e.behavior ||
                  "instant" === e.behavior
                )
                  return !0;
                if ("object" === typeof e && "smooth" === e.behavior) return !1;
                throw new TypeError(
                  "behavior member of ScrollOptions " +
                    e.behavior +
                    " is not a valid value for enumeration ScrollBehavior.",
                );
              }
              function pa(e, b) {
                if ("Y" === b) return e.clientHeight + f < e.scrollHeight;
                if ("X" === b) return e.clientWidth + f < e.scrollWidth;
              }
              function na(e, b) {
                e = fa.getComputedStyle(e, null)["overflow" + b];
                return "auto" === e || "scroll" === e;
              }
              function oa(e) {
                var b = pa(e, "Y") && na(e, "Y");
                e = pa(e, "X") && na(e, "X");
                return b || e;
              }
              function ka(e) {
                var b = (h() - e.startTime) / 468;
                var a = 0.5 * (1 - Math.cos(Math.PI * (1 < b ? 1 : b)));
                b = e.TF + (e.x - e.TF) * a;
                a = e.UF + (e.y - e.UF) * a;
                e.method.call(e.lN, b, a);
                (b === e.x && a === e.y) ||
                  fa.requestAnimationFrame(ka.bind(fa, e));
              }
              function ia(e, b, a) {
                var w = h();
                if (e === x.body) {
                  var z = fa;
                  var aa = fa.scrollX || fa.pageXOffset;
                  e = fa.scrollY || fa.pageYOffset;
                  var ca = r.scroll;
                } else
                  (z = e), (aa = e.scrollLeft), (e = e.scrollTop), (ca = ua);
                ka({
                  lN: z,
                  method: ca,
                  startTime: w,
                  TF: aa,
                  UF: e,
                  x: b,
                  y: a,
                });
              }
              var fa = window,
                x = document;
              if (
                !("scrollBehavior" in x.documentElement.style && !0 !== fa.pOa)
              ) {
                var y = fa.HTMLElement || fa.Element,
                  r = {
                    scroll: fa.scroll || fa.scrollTo,
                    scrollBy: fa.scrollBy,
                    J5: y.prototype.scroll || ua,
                    scrollIntoView: y.prototype.scrollIntoView,
                  },
                  h =
                    fa.performance && fa.performance.now
                      ? fa.performance.now.bind(fa.performance)
                      : Date.now,
                  f = RegExp("MSIE |Trident/|Edge/").test(
                    fa.navigator.userAgent,
                  )
                    ? 1
                    : 0;
                fa.scroll = fa.scrollTo = function (e, b) {
                  void 0 !== e &&
                    (!0 === n(e)
                      ? r.scroll.call(
                          fa,
                          void 0 !== e.left
                            ? e.left
                            : "object" !== typeof e
                              ? e
                              : fa.scrollX || fa.pageXOffset,
                          void 0 !== e.top
                            ? e.top
                            : void 0 !== b
                              ? b
                              : fa.scrollY || fa.pageYOffset,
                        )
                      : ia.call(
                          fa,
                          x.body,
                          void 0 !== e.left
                            ? ~~e.left
                            : fa.scrollX || fa.pageXOffset,
                          void 0 !== e.top
                            ? ~~e.top
                            : fa.scrollY || fa.pageYOffset,
                        ));
                };
                fa.scrollBy = function (e, b) {
                  void 0 !== e &&
                    (n(e)
                      ? r.scrollBy.call(
                          fa,
                          void 0 !== e.left
                            ? e.left
                            : "object" !== typeof e
                              ? e
                              : 0,
                          void 0 !== e.top ? e.top : void 0 !== b ? b : 0,
                        )
                      : ia.call(
                          fa,
                          x.body,
                          ~~e.left + (fa.scrollX || fa.pageXOffset),
                          ~~e.top + (fa.scrollY || fa.pageYOffset),
                        ));
                };
                y.prototype.scroll = y.prototype.scrollTo = function (e, b) {
                  if (void 0 !== e)
                    if (!0 === n(e)) {
                      if ("number" === typeof e && void 0 === b)
                        throw new SyntaxError("Value could not be converted");
                      r.J5.call(
                        this,
                        void 0 !== e.left
                          ? ~~e.left
                          : "object" !== typeof e
                            ? ~~e
                            : this.scrollLeft,
                        void 0 !== e.top
                          ? ~~e.top
                          : void 0 !== b
                            ? ~~b
                            : this.scrollTop,
                      );
                    } else
                      (b = e.left),
                        (e = e.top),
                        ia.call(
                          this,
                          this,
                          "undefined" === typeof b ? this.scrollLeft : ~~b,
                          "undefined" === typeof e ? this.scrollTop : ~~e,
                        );
                };
                y.prototype.scrollBy = function (e, b) {
                  void 0 !== e &&
                    (!0 === n(e)
                      ? r.J5.call(
                          this,
                          void 0 !== e.left
                            ? ~~e.left + this.scrollLeft
                            : ~~e + this.scrollLeft,
                          void 0 !== e.top
                            ? ~~e.top + this.scrollTop
                            : ~~b + this.scrollTop,
                        )
                      : this.scroll({
                          left: ~~e.left + this.scrollLeft,
                          top: ~~e.top + this.scrollTop,
                          behavior: e.behavior,
                        }));
                };
                y.prototype.scrollIntoView = function (e) {
                  if (!0 === n(e))
                    r.scrollIntoView.call(this, void 0 === e ? !0 : e);
                  else {
                    for (e = this; e !== x.body && !1 === oa(e); )
                      e = e.parentNode || e.host;
                    var b = e.getBoundingClientRect(),
                      a = this.getBoundingClientRect();
                    e !== x.body
                      ? (ia.call(
                          this,
                          e,
                          e.scrollLeft + a.left - b.left,
                          e.scrollTop + a.top - b.top,
                        ),
                        "fixed" !== fa.getComputedStyle(e).position &&
                          fa.scrollBy({
                            left: b.left,
                            top: b.top,
                            behavior: "smooth",
                          }))
                      : fa.scrollBy({
                          left: a.left,
                          top: a.top,
                          behavior: "smooth",
                        });
                  }
                };
              }
            },
          };
        })();
      },
    },
  ]);
}).call(this || window);
