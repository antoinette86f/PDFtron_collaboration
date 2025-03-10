/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  /*
 Pikaday

 Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
*/
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [16],
    {
      574: function (ya, ua) {
        !(function (n, pa) {
          if ("object" == typeof ua) {
            try {
              var na = require("moment");
            } catch (oa) {}
            ya.exports = pa(na);
          } else
            "function" == typeof define && define.amd
              ? define(function (oa) {
                  try {
                    na = oa("moment");
                  } catch (ka) {}
                  return pa(na);
                })
              : (n.Pikaday = pa(n.moment));
        })(this, function (n) {
          function pa(ma) {
            var la = this,
              ja = la.config(ma);
            la._onMouseDown = function (sa) {
              if (la._v) {
                var qa = (sa = sa || window.event).target || sa.srcElement;
                if (qa)
                  if (
                    (a(qa, "is-disabled") ||
                      (!a(qa, "pika-button") ||
                      a(qa, "is-empty") ||
                      a(qa.parentNode, "is-disabled")
                        ? a(qa, "pika-prev")
                          ? la.prevMonth()
                          : a(qa, "pika-next")
                            ? la.nextMonth()
                            : a(qa, "pika-set-today") &&
                              (la.setDate(new Date()), la.hide())
                        : (la.setDate(
                            new Date(
                              qa.getAttribute("data-pika-year"),
                              qa.getAttribute("data-pika-month"),
                              qa.getAttribute("data-pika-day"),
                            ),
                          ),
                          ja.bound &&
                            ha(function () {
                              la.hide();
                              ja.blurFieldOnSelect &&
                                ja.field &&
                                ja.field.blur();
                            }, 100))),
                    a(qa, "pika-select"))
                  )
                    la._c = !0;
                  else {
                    if (!sa.preventDefault) return (sa.returnValue = !1), !1;
                    sa.preventDefault();
                  }
              }
            };
            la._onChange = function (sa) {
              var qa = (sa = sa || window.event).target || sa.srcElement;
              qa &&
                (a(qa, "pika-select-month")
                  ? la.gotoMonth(qa.value)
                  : a(qa, "pika-select-year") && la.gotoYear(qa.value));
            };
            la._onKeyChange = function (sa) {
              if (((sa = sa || window.event), la.isVisible()))
                switch (sa.keyCode) {
                  case 13:
                  case 27:
                    ja.field && ja.field.blur();
                    break;
                  case 37:
                    la.adjustDate("subtract", 1);
                    break;
                  case 38:
                    la.adjustDate("subtract", 7);
                    break;
                  case 39:
                    la.adjustDate("add", 1);
                    break;
                  case 40:
                    la.adjustDate("add", 7);
                    break;
                  case 8:
                  case 46:
                    la.setDate(null);
                }
            };
            la._parseFieldValue = function () {
              if (ja.parse) return ja.parse(ja.field.value, ja.format);
              if (aa) {
                var sa = n(ja.field.value, ja.format, ja.formatStrict);
                return sa && sa.isValid() ? sa.toDate() : null;
              }
              return new Date(Date.parse(ja.field.value));
            };
            la._onInputChange = function (sa) {
              var qa;
              sa.firedBy !== la &&
                ((qa = la._parseFieldValue()),
                h(qa) && la.setDate(qa),
                la._v || la.show());
            };
            la._onInputFocus = function () {
              la.show();
            };
            la._onInputClick = function () {
              la.show();
            };
            la._onInputBlur = function () {
              var sa = ba.activeElement;
              do if (a(sa, "pika-single")) return;
              while ((sa = sa.parentNode));
              la._c ||
                (la._b = ha(function () {
                  la.hide();
                }, 50));
              la._c = !1;
            };
            la._onClick = function (sa) {
              var qa = (sa = sa || window.event).target || sa.srcElement;
              if ((sa = qa)) {
                !ca &&
                  a(qa, "pika-select") &&
                  (qa.onchange ||
                    (qa.setAttribute("onchange", "return;"),
                    z(qa, "change", la._onChange)));
                do if (a(sa, "pika-single") || sa === ja.trigger) return;
                while ((sa = sa.parentNode));
                la._v && qa !== ja.trigger && sa !== ja.trigger && la.hide();
              }
            };
            la.el = ba.createElement("div");
            la.el.className =
              "pika-single" +
              (ja.isRTL ? " is-rtl" : "") +
              (ja.theme ? " " + ja.theme : "");
            z(la.el, "mousedown", la._onMouseDown, !0);
            z(la.el, "touchend", la._onMouseDown, !0);
            z(la.el, "change", la._onChange);
            ja.keyboardInput && z(ba, "keydown", la._onKeyChange);
            ja.field &&
              (ja.container
                ? ja.container.appendChild(la.el)
                : ja.bound
                  ? ba.body.appendChild(la.el)
                  : ja.field.parentNode.insertBefore(
                      la.el,
                      ja.field.nextSibling,
                    ),
              z(ja.field, "change", la._onInputChange),
              ja.defaultDate ||
                ((ja.defaultDate = la._parseFieldValue()),
                (ja.setDefaultDate = !0)));
            ma = ja.defaultDate;
            h(ma)
              ? ja.setDefaultDate
                ? la.setDate(ma, !0)
                : la.gotoDate(ma)
              : la.gotoDate(new Date());
            ja.bound
              ? (this.hide(),
                (la.el.className += " is-bound"),
                z(ja.trigger, "click", la._onInputClick),
                z(ja.trigger, "focus", la._onInputFocus),
                z(ja.trigger, "blur", la._onInputBlur))
              : this.show();
          }
          function na(ma, la, ja) {
            return (
              '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' +
              ja +
              '">' +
              (function (sa) {
                var qa,
                  ra = [];
                sa.showWeekNumber && ra.push("<th></th>");
                for (qa = 0; 7 > qa; qa++)
                  ra.push(
                    '<th scope="col"><abbr title="' +
                      ka(sa, qa) +
                      '">' +
                      ka(sa, qa, !0) +
                      "</abbr></th>",
                  );
                return (
                  "<thead><tr>" +
                  (sa.isRTL ? ra.reverse() : ra).join("") +
                  "</tr></thead>"
                );
              })(ma) +
              ("<tbody>" + la.join("") + "</tbody>") +
              (ma.showTodayButton
                ? (function (sa) {
                    var qa = [];
                    return (
                      qa.push(
                        '<td colspan="' +
                          (sa.showWeekNumber ? "8" : "7") +
                          '"><button class="pika-set-today">' +
                          sa.i18n.today +
                          "</button></td>",
                      ),
                      "<tfoot>" +
                        (sa.isRTL ? qa.reverse() : qa).join("") +
                        "</tfoot>"
                    );
                  })(ma)
                : "") +
              "</table>"
            );
          }
          function oa(ma, la, ja, sa, qa, ra) {
            var ta,
              va,
              Ba = ma._o,
              Ca = ja === Ba.minYear,
              Aa = ja === Ba.maxYear,
              Ia =
                '<div id="' +
                ra +
                '" class="pika-title" role="heading" aria-live="assertive">',
              Ea = !0,
              La = !0;
            var Na = [];
            for (ra = 0; 12 > ra; ra++)
              Na.push(
                '<option value="' +
                  (ja === qa ? ra - la : 12 + ra - la) +
                  '"' +
                  (ra === sa ? ' selected="selected"' : "") +
                  ((Ca && ra < Ba.minMonth) || (Aa && ra > Ba.maxMonth)
                    ? ' disabled="disabled"'
                    : "") +
                  ">" +
                  Ba.i18n.months[ra] +
                  "</option>",
              );
            qa =
              '<div class="pika-label">' +
              Ba.i18n.months[sa] +
              '<select class="pika-select pika-select-month" tabindex="-1">' +
              Na.join("") +
              "</select></div>";
            f(Ba.yearRange)
              ? ((ra = Ba.yearRange[0]), (ta = Ba.yearRange[1] + 1))
              : ((ra = ja - Ba.yearRange), (ta = 1 + ja + Ba.yearRange));
            for (Na = []; ra < ta && ra <= Ba.maxYear; ra++)
              ra >= Ba.minYear &&
                Na.push(
                  '<option value="' +
                    ra +
                    '"' +
                    (ra === ja ? ' selected="selected"' : "") +
                    ">" +
                    ra +
                    "</option>",
                );
            return (
              (va =
                '<div class="pika-label">' +
                ja +
                Ba.yearSuffix +
                '<select class="pika-select pika-select-year" tabindex="-1">' +
                Na.join("") +
                "</select></div>"),
              Ba.showMonthAfterYear ? (Ia += va + qa) : (Ia += qa + va),
              Ca && (0 === sa || Ba.minMonth >= sa) && (Ea = !1),
              Aa && (11 === sa || Ba.maxMonth <= sa) && (La = !1),
              0 === la &&
                (Ia +=
                  '<button class="pika-prev' +
                  (Ea ? "" : " is-disabled") +
                  '" type="button">' +
                  Ba.i18n.previousMonth +
                  "</button>"),
              la === ma._o.numberOfMonths - 1 &&
                (Ia +=
                  '<button class="pika-next' +
                  (La ? "" : " is-disabled") +
                  '" type="button">' +
                  Ba.i18n.nextMonth +
                  "</button>"),
              Ia + "</div>"
            );
          }
          function ka(ma, la, ja) {
            for (la += ma.firstDay; 7 <= la; ) la -= 7;
            return ja ? ma.i18n.weekdaysShort[la] : ma.i18n.weekdays[la];
          }
          function ia(ma) {
            return (
              0 > ma.month &&
                ((ma.year -= Math.ceil(Math.abs(ma.month) / 12)),
                (ma.month += 12)),
              11 < ma.month &&
                ((ma.year += Math.floor(Math.abs(ma.month) / 12)),
                (ma.month -= 12)),
              ma
            );
          }
          function fa(ma, la, ja) {
            var sa;
            ba.createEvent
              ? ((sa = ba.createEvent("HTMLEvents")).initEvent(la, !0, !1),
                (sa = x(sa, ja)),
                ma.dispatchEvent(sa))
              : ba.createEventObject &&
                ((sa = ba.createEventObject()),
                (sa = x(sa, ja)),
                ma.fireEvent("on" + la, sa));
          }
          function x(ma, la, ja) {
            var sa, qa;
            for (sa in la)
              (qa = void 0 !== ma[sa]) &&
              "object" == typeof la[sa] &&
              null !== la[sa] &&
              void 0 === la[sa].nodeName
                ? h(la[sa])
                  ? ja && (ma[sa] = new Date(la[sa].getTime()))
                  : f(la[sa])
                    ? ja && (ma[sa] = la[sa].slice(0))
                    : (ma[sa] = x({}, la[sa], ja))
                : (!ja && qa) || (ma[sa] = la[sa]);
            return ma;
          }
          function y(ma) {
            h(ma) && ma.setHours(0, 0, 0, 0);
          }
          function r(ma, la) {
            return [
              31,
              (0 == ma % 4 && 0 != ma % 100) || 0 == ma % 400 ? 29 : 28,
              31,
              30,
              31,
              30,
              31,
              31,
              30,
              31,
              30,
              31,
            ][la];
          }
          function h(ma) {
            return (
              /Date/.test(Object.prototype.toString.call(ma)) &&
              !isNaN(ma.getTime())
            );
          }
          function f(ma) {
            return /Array/.test(Object.prototype.toString.call(ma));
          }
          function e(ma, la) {
            var ja;
            ma.className = (ja = (" " + ma.className + " ").replace(
              " " + la + " ",
              " ",
            )).trim
              ? ja.trim()
              : ja.replace(/^\s+|\s+$/g, "");
          }
          function b(ma, la) {
            a(ma, la) ||
              (ma.className =
                "" === ma.className ? la : ma.className + " " + la);
          }
          function a(ma, la) {
            return -1 !== (" " + ma.className + " ").indexOf(" " + la + " ");
          }
          function w(ma, la, ja, sa) {
            ca
              ? ma.removeEventListener(la, ja, !!sa)
              : ma.detachEvent("on" + la, ja);
          }
          function z(ma, la, ja, sa) {
            ca
              ? ma.addEventListener(la, ja, !!sa)
              : ma.attachEvent("on" + la, ja);
          }
          var aa = "function" == typeof n,
            ca = !!window.addEventListener,
            ba = window.document,
            ha = window.setTimeout,
            ea = {
              field: null,
              bound: void 0,
              ariaLabel: "Use the arrow keys to pick a date",
              position: "bottom left",
              reposition: !0,
              format: "YYYY-MM-DD",
              toString: null,
              parse: null,
              defaultDate: null,
              setDefaultDate: !1,
              firstDay: 0,
              firstWeekOfYearMinDays: 4,
              formatStrict: !1,
              minDate: null,
              maxDate: null,
              yearRange: 10,
              showWeekNumber: !1,
              showTodayButton: !1,
              pickWholeWeek: !1,
              minYear: 0,
              maxYear: 9999,
              minMonth: void 0,
              maxMonth: void 0,
              startRange: null,
              endRange: null,
              isRTL: !1,
              yearSuffix: "",
              showMonthAfterYear: !1,
              showDaysInNextAndPreviousMonths: !1,
              enableSelectionDaysInNextAndPreviousMonths: !1,
              numberOfMonths: 1,
              mainCalendar: "left",
              container: void 0,
              blurFieldOnSelect: !0,
              i18n: {
                previousMonth: "Previous Month",
                nextMonth: "Next Month",
                today: "Today",
                months:
                  "January February March April May June July August September October November December".split(
                    " ",
                  ),
                weekdays:
                  "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                    " ",
                  ),
                weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
              },
              theme: null,
              events: [],
              onSelect: null,
              onOpen: null,
              onClose: null,
              onDraw: null,
              keyboardInput: !0,
            };
          return (
            (pa.prototype = {
              config: function (ma) {
                this._o || (this._o = x({}, ea, !0));
                ma = x(this._o, ma, !0);
                ma.isRTL = !!ma.isRTL;
                ma.field = ma.field && ma.field.nodeName ? ma.field : null;
                ma.theme =
                  "string" == typeof ma.theme && ma.theme ? ma.theme : null;
                ma.bound = !!(void 0 !== ma.bound
                  ? ma.field && ma.bound
                  : ma.field);
                ma.trigger =
                  ma.trigger && ma.trigger.nodeName ? ma.trigger : ma.field;
                ma.disableWeekends = !!ma.disableWeekends;
                ma.disableDayFn =
                  "function" == typeof ma.disableDayFn ? ma.disableDayFn : null;
                var la = parseInt(ma.numberOfMonths, 10) || 1;
                ((ma.numberOfMonths = 4 < la ? 4 : la),
                h(ma.minDate) || (ma.minDate = !1),
                h(ma.maxDate) || (ma.maxDate = !1),
                ma.minDate &&
                  ma.maxDate &&
                  ma.maxDate < ma.minDate &&
                  (ma.maxDate = ma.minDate = !1),
                ma.minDate && this.setMinDate(ma.minDate),
                ma.maxDate && this.setMaxDate(ma.maxDate),
                f(ma.yearRange))
                  ? ((la = new Date().getFullYear() - 10),
                    (ma.yearRange[0] = parseInt(ma.yearRange[0], 10) || la),
                    (ma.yearRange[1] = parseInt(ma.yearRange[1], 10) || la))
                  : ((ma.yearRange =
                      Math.abs(parseInt(ma.yearRange, 10)) || ea.yearRange),
                    100 < ma.yearRange && (ma.yearRange = 100));
                return ma;
              },
              toString: function (ma) {
                return (
                  (ma = ma || this._o.format),
                  h(this._d)
                    ? this._o.toString
                      ? this._o.toString(this._d, ma)
                      : aa
                        ? n(this._d).format(ma)
                        : this._d.toDateString()
                    : ""
                );
              },
              getMoment: function () {
                return aa ? n(this._d) : null;
              },
              setMoment: function (ma, la) {
                aa && n.isMoment(ma) && this.setDate(ma.toDate(), la);
              },
              getDate: function () {
                return h(this._d) ? new Date(this._d.getTime()) : null;
              },
              setDate: function (ma, la) {
                if (!ma)
                  return (
                    (this._d = null),
                    this._o.field &&
                      ((this._o.field.value = ""),
                      fa(this._o.field, "change", { firedBy: this })),
                    this.draw()
                  );
                if (
                  ("string" == typeof ma && (ma = new Date(Date.parse(ma))),
                  h(ma))
                ) {
                  var ja = this._o.minDate,
                    sa = this._o.maxDate;
                  h(ja) && ma < ja ? (ma = ja) : h(sa) && ma > sa && (ma = sa);
                  this._d = new Date(ma.getTime());
                  this.gotoDate(this._d);
                  this._o.field &&
                    ((this._o.field.value = this.toString()),
                    fa(this._o.field, "change", { firedBy: this }));
                  la ||
                    "function" != typeof this._o.onSelect ||
                    this._o.onSelect.call(this, this.getDate());
                }
              },
              clear: function () {
                this.setDate(null);
              },
              gotoDate: function (ma) {
                var la = !0;
                if (h(ma)) {
                  if (this.calendars) {
                    la = new Date(
                      this.calendars[0].year,
                      this.calendars[0].month,
                      1,
                    );
                    var ja = new Date(
                        this.calendars[this.calendars.length - 1].year,
                        this.calendars[this.calendars.length - 1].month,
                        1,
                      ),
                      sa = ma.getTime();
                    ja.setMonth(ja.getMonth() + 1);
                    ja.setDate(ja.getDate() - 1);
                    la = sa < la.getTime() || ja.getTime() < sa;
                  }
                  la &&
                    ((this.calendars = [
                      { month: ma.getMonth(), year: ma.getFullYear() },
                    ]),
                    "right" === this._o.mainCalendar &&
                      (this.calendars[0].month += 1 - this._o.numberOfMonths));
                  this.adjustCalendars();
                }
              },
              adjustDate: function (ma, la) {
                var ja,
                  sa = this.getDate() || new Date();
                la = 864e5 * parseInt(la);
                "add" === ma
                  ? (ja = new Date(sa.valueOf() + la))
                  : "subtract" === ma && (ja = new Date(sa.valueOf() - la));
                this.setDate(ja);
              },
              adjustCalendars: function () {
                this.calendars[0] = ia(this.calendars[0]);
                for (var ma = 1; ma < this._o.numberOfMonths; ma++)
                  this.calendars[ma] = ia({
                    month: this.calendars[0].month + ma,
                    year: this.calendars[0].year,
                  });
                this.draw();
              },
              gotoToday: function () {
                this.gotoDate(new Date());
              },
              gotoMonth: function (ma) {
                isNaN(ma) ||
                  ((this.calendars[0].month = parseInt(ma, 10)),
                  this.adjustCalendars());
              },
              nextMonth: function () {
                this.calendars[0].month++;
                this.adjustCalendars();
              },
              prevMonth: function () {
                this.calendars[0].month--;
                this.adjustCalendars();
              },
              gotoYear: function (ma) {
                isNaN(ma) ||
                  ((this.calendars[0].year = parseInt(ma, 10)),
                  this.adjustCalendars());
              },
              setMinDate: function (ma) {
                ma instanceof Date
                  ? (y(ma),
                    (this._o.minDate = ma),
                    (this._o.minYear = ma.getFullYear()),
                    (this._o.minMonth = ma.getMonth()))
                  : ((this._o.minDate = ea.minDate),
                    (this._o.minYear = ea.minYear),
                    (this._o.minMonth = ea.minMonth),
                    (this._o.startRange = ea.startRange));
                this.draw();
              },
              setMaxDate: function (ma) {
                ma instanceof Date
                  ? (y(ma),
                    (this._o.maxDate = ma),
                    (this._o.maxYear = ma.getFullYear()),
                    (this._o.maxMonth = ma.getMonth()))
                  : ((this._o.maxDate = ea.maxDate),
                    (this._o.maxYear = ea.maxYear),
                    (this._o.maxMonth = ea.maxMonth),
                    (this._o.endRange = ea.endRange));
                this.draw();
              },
              setStartRange: function (ma) {
                this._o.startRange = ma;
              },
              setEndRange: function (ma) {
                this._o.endRange = ma;
              },
              draw: function (ma) {
                if (this._v || ma) {
                  var la = this._o;
                  var ja = la.minYear;
                  var sa = la.maxYear,
                    qa = la.minMonth,
                    ra = la.maxMonth;
                  ma = "";
                  this._y <= ja &&
                    ((this._y = ja),
                    !isNaN(qa) && this._m < qa && (this._m = qa));
                  this._y >= sa &&
                    ((this._y = sa),
                    !isNaN(ra) && this._m > ra && (this._m = ra));
                  for (sa = 0; sa < la.numberOfMonths; sa++)
                    (ja =
                      "pika-title-" +
                      Math.random()
                        .toString(36)
                        .replace(/[^a-z]+/g, "")
                        .substr(0, 2)),
                      (ma +=
                        '<div class="pika-lendar">' +
                        oa(
                          this,
                          sa,
                          this.calendars[sa].year,
                          this.calendars[sa].month,
                          this.calendars[0].year,
                          ja,
                        ) +
                        this.render(
                          this.calendars[sa].year,
                          this.calendars[sa].month,
                          ja,
                        ) +
                        "</div>");
                  this.el.innerHTML = ma;
                  la.bound &&
                    "hidden" !== la.field.type &&
                    ha(function () {
                      la.trigger.focus();
                    }, 1);
                  "function" == typeof this._o.onDraw && this._o.onDraw(this);
                  la.bound && la.field.setAttribute("aria-label", la.ariaLabel);
                }
              },
              adjustPosition: function () {
                var ma, la, ja, sa, qa, ra, ta, va, Ba;
                if (!this._o.container) {
                  if (
                    ((this.el.style.position = "absolute"),
                    (la = ma = this._o.trigger),
                    (ja = this.el.offsetWidth),
                    (sa = this.el.offsetHeight),
                    (qa = window.innerWidth || ba.documentElement.clientWidth),
                    (ra =
                      window.innerHeight || ba.documentElement.clientHeight),
                    (ta =
                      window.pageYOffset ||
                      ba.body.scrollTop ||
                      ba.documentElement.scrollTop),
                    (va = !0),
                    (Ba = !0),
                    "function" == typeof ma.getBoundingClientRect)
                  ) {
                    var Ca =
                      (la = ma.getBoundingClientRect()).left +
                      window.pageXOffset;
                    var Aa = la.bottom + window.pageYOffset;
                  } else
                    for (
                      Ca = la.offsetLeft, Aa = la.offsetTop + la.offsetHeight;
                      (la = la.offsetParent);

                    )
                      (Ca += la.offsetLeft), (Aa += la.offsetTop);
                  ((this._o.reposition && Ca + ja > qa) ||
                    (-1 < this._o.position.indexOf("right") &&
                      0 < Ca - ja + ma.offsetWidth)) &&
                    ((Ca = Ca - ja + ma.offsetWidth), (va = !1));
                  ((this._o.reposition && Aa + sa > ra + ta) ||
                    (-1 < this._o.position.indexOf("top") &&
                      0 < Aa - sa - ma.offsetHeight)) &&
                    ((Aa = Aa - sa - ma.offsetHeight), (Ba = !1));
                  0 > Ca && (Ca = 0);
                  0 > Aa && (Aa = 0);
                  this.el.style.left = Ca + "px";
                  this.el.style.top = Aa + "px";
                  b(this.el, va ? "left-aligned" : "right-aligned");
                  b(this.el, Ba ? "bottom-aligned" : "top-aligned");
                  e(this.el, va ? "right-aligned" : "left-aligned");
                  e(this.el, Ba ? "top-aligned" : "bottom-aligned");
                }
              },
              render: function (ma, la, ja) {
                var sa = this._o,
                  qa = new Date(),
                  ra = r(ma, la),
                  ta = new Date(ma, la, 1).getDay(),
                  va = [],
                  Ba = [];
                y(qa);
                0 < sa.firstDay && 0 > (ta -= sa.firstDay) && (ta += 7);
                for (
                  var Ca = 0 === la ? 11 : la - 1,
                    Aa = 11 === la ? 0 : la + 1,
                    Ia = 0 === la ? ma - 1 : ma,
                    Ea = 11 === la ? ma + 1 : ma,
                    La = r(Ia, Ca),
                    Na = ra + ta,
                    Oa = Na;
                  7 < Oa;

                )
                  Oa -= 7;
                Na += 7 - Oa;
                for (var Ta = !1, Sa = (Oa = 0); Oa < Na; Oa++) {
                  var Ga = new Date(ma, la, Oa - ta + 1),
                    cb = !!h(this._d) && Ga.getTime() === this._d.getTime(),
                    Ma = Ga.getTime() === qa.getTime(),
                    Ua = -1 !== sa.events.indexOf(Ga.toDateString()),
                    Qa = Oa < ta || Oa >= ra + ta,
                    Ka = Oa - ta + 1,
                    ab = la,
                    Ja = ma,
                    Ya =
                      sa.startRange && sa.startRange.getTime() === Ga.getTime(),
                    Xa = sa.endRange && sa.endRange.getTime() === Ga.getTime(),
                    bb =
                      sa.startRange &&
                      sa.endRange &&
                      sa.startRange < Ga &&
                      Ga < sa.endRange;
                  Qa &&
                    (Oa < ta
                      ? ((Ka = La + Ka), (ab = Ca), (Ja = Ia))
                      : ((Ka -= ra), (ab = Aa), (Ja = Ea)));
                  var Za = cb,
                    Fa;
                  !(Fa =
                    (sa.minDate && Ga < sa.minDate) ||
                    (sa.maxDate && Ga > sa.maxDate)) &&
                    (Fa = sa.disableWeekends) &&
                    ((Fa = Ga.getDay()), (Fa = 0 === Fa || 6 === Fa));
                  Qa = {
                    day: Ka,
                    month: ab,
                    year: Ja,
                    hasEvent: Ua,
                    isSelected: Za,
                    isToday: Ma,
                    isDisabled: Fa || (sa.disableDayFn && sa.disableDayFn(Ga)),
                    isEmpty: Qa,
                    isStartRange: Ya,
                    isEndRange: Xa,
                    isInRange: bb,
                    showDaysInNextAndPreviousMonths:
                      sa.showDaysInNextAndPreviousMonths,
                    enableSelectionDaysInNextAndPreviousMonths:
                      sa.enableSelectionDaysInNextAndPreviousMonths,
                  };
                  sa.pickWholeWeek && cb && (Ta = !0);
                  cb = Ba;
                  Ga = cb.push;
                  a: {
                    Ya = Qa;
                    Xa = [];
                    bb = "false";
                    if (Ya.isEmpty) {
                      if (!Ya.showDaysInNextAndPreviousMonths) {
                        Qa = '<td class="is-empty"></td>';
                        break a;
                      }
                      Xa.push("is-outside-current-month");
                      Ya.enableSelectionDaysInNextAndPreviousMonths ||
                        Xa.push("is-selection-disabled");
                    }
                    Qa =
                      (Ya.isDisabled && Xa.push("is-disabled"),
                      Ya.isToday && Xa.push("is-today"),
                      Ya.isSelected && (Xa.push("is-selected"), (bb = "true")),
                      Ya.hasEvent && Xa.push("has-event"),
                      Ya.isInRange && Xa.push("is-inrange"),
                      Ya.isStartRange && Xa.push("is-startrange"),
                      Ya.isEndRange && Xa.push("is-endrange"),
                      '<td data-day="' +
                        Ya.day +
                        '" class="' +
                        Xa.join(" ") +
                        '" aria-selected="' +
                        bb +
                        '"><button class="pika-button pika-day" type="button" data-pika-year="' +
                        Ya.year +
                        '" data-pika-month="' +
                        Ya.month +
                        '" data-pika-day="' +
                        Ya.day +
                        '">' +
                        Ya.day +
                        "</button></td>");
                  }
                  Ga.call(cb, Qa);
                  7 == ++Sa &&
                    (sa.showWeekNumber &&
                      ((Sa = Ba),
                      (cb = Sa.unshift),
                      (Ya = sa.firstWeekOfYearMinDays),
                      (Ga = new Date(ma, la, Oa - ta)),
                      aa
                        ? (Ga = n(Ga).isoWeek())
                        : (Ga.setHours(0, 0, 0, 0),
                          (Xa = Ga.getDate()),
                          (Qa = Ya - 1),
                          Ga.setDate(Xa + Qa - ((Ga.getDay() + 7 - 1) % 7)),
                          (Ya = new Date(Ga.getFullYear(), 0, Ya)),
                          (Ga =
                            1 +
                            Math.round(
                              ((Ga.getTime() - Ya.getTime()) / 864e5 -
                                Qa +
                                ((Ya.getDay() + 7 - 1) % 7)) /
                                7,
                            ))),
                      cb.call(Sa, '<td class="pika-week">' + Ga + "</td>")),
                    (Sa = va),
                    (cb = Sa.push),
                    (Ba =
                      '<tr class="pika-row' +
                      (sa.pickWholeWeek ? " pick-whole-week" : "") +
                      (Ta ? " is-selected" : "") +
                      '">' +
                      (sa.isRTL ? Ba.reverse() : Ba).join("") +
                      "</tr>"),
                    cb.call(Sa, Ba),
                    (Ba = []),
                    (Sa = 0),
                    (Ta = !1));
                }
                return na(sa, va, ja);
              },
              isVisible: function () {
                return this._v;
              },
              show: function () {
                this.isVisible() ||
                  ((this._v = !0),
                  this.draw(),
                  e(this.el, "is-hidden"),
                  this._o.bound &&
                    (z(ba, "click", this._onClick), this.adjustPosition()),
                  "function" == typeof this._o.onOpen &&
                    this._o.onOpen.call(this));
              },
              hide: function () {
                var ma = this._v;
                !1 !== ma &&
                  (this._o.bound && w(ba, "click", this._onClick),
                  this._o.container ||
                    ((this.el.style.position = "static"),
                    (this.el.style.left = "auto"),
                    (this.el.style.top = "auto")),
                  b(this.el, "is-hidden"),
                  (this._v = !1),
                  void 0 !== ma &&
                    "function" == typeof this._o.onClose &&
                    this._o.onClose.call(this));
              },
              destroy: function () {
                var ma = this._o;
                this.hide();
                w(this.el, "mousedown", this._onMouseDown, !0);
                w(this.el, "touchend", this._onMouseDown, !0);
                w(this.el, "change", this._onChange);
                ma.keyboardInput && w(ba, "keydown", this._onKeyChange);
                ma.field &&
                  (w(ma.field, "change", this._onInputChange),
                  ma.bound &&
                    (w(ma.trigger, "click", this._onInputClick),
                    w(ma.trigger, "focus", this._onInputFocus),
                    w(ma.trigger, "blur", this._onInputBlur)));
                this.el.parentNode && this.el.parentNode.removeChild(this.el);
              },
            }),
            pa
          );
        });
      },
    },
  ]);
}).call(this || window);
