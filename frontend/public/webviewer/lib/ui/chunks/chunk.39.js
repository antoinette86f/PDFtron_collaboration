(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    1443: function (e, t, n) {
      var o = n(30),
        r = n(1568);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var a = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          (t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer"));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                });
            else {
              const t = e.cloneNode(!0);
              r.shadowRoot.appendChild(t), n.push(t);
            }
          }
        },
        singleton: !1,
      };
      o(r, a);
      e.exports = r.locals || {};
    },
    1564: function (e, t, n) {
      var o = n(30),
        r = n(1565);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var a = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          (t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer"));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                });
            else {
              const t = e.cloneNode(!0);
              r.shadowRoot.appendChild(t), n.push(t);
            }
          }
        },
        singleton: !1,
      };
      o(r, a);
      e.exports = r.locals || {};
    },
    1565: function (e, t, n) {
      (t = e.exports = n(31)(!1)).push([
        e.i,
        ':host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.thumbnailControls-overlay{display:grid;text-align:center;z-index:2;margin-top:5px;grid-template-areas:"rotate delete . more";grid-template-columns:repeat(3,1fr)}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.thumbnailControls-overlay{display:flex}}.thumbnailControls-overlay .Button{height:32px;padding:0;width:32px}.thumbnailControls-overlay .Button .Icon{height:24px;width:24px;color:var(--icon-color)}.thumbnailControls-overlay .Button:hover{background:var(--view-header-button-hover);border-radius:4px}.thumbnailControls-overlay .Button.active{background:var(--view-header-button-active)}.thumbnailControls-overlay .Button.active .Icon{color:var(--selected-icon-color)}.thumbnailControls-overlay.modular-ui .Button:hover{border:1px solid var(--focus-border);background:var(--tools-button-hover)}.thumbnailControls-overlay .rotate-button{grid-area:rotate}.thumbnailControls-overlay .delete-button{grid-area:delete}.thumbnailControls-overlay .more-options{grid-area:more}.thumbnailControls-overlay.custom-buttons .Button{grid-area:auto}.thumbnailControls{display:flex;flex-direction:row;text-align:center;z-index:2;margin-top:5px}.thumbnailControls .Button{height:32px;padding:0;width:32px;margin:0 4px}.thumbnailControls .Button .Icon{height:24px;width:24px;color:var(--icon-color)}.thumbnailControls .Button:hover{background:var(--view-header-button-hover);border-radius:4px}',
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" });
    },
    1566: function (e, t, n) {
      var o = n(30),
        r = n(1567);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var a = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          (t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer"));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                });
            else {
              const t = e.cloneNode(!0);
              r.shadowRoot.appendChild(t), n.push(t);
            }
          }
        },
        singleton: !1,
      };
      o(r, a);
      e.exports = r.locals || {};
    },
    1567: function (e, t, n) {
      (t = e.exports = n(31)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.Thumbnail{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;cursor:pointer}.Thumbnail.active .container .page-image{border:2px solid var(--focus-border);box-shadow:none;box-sizing:content-box}.Thumbnail .container{position:relative;display:flex;justify-content:center;align-items:center;cursor:pointer}.Thumbnail .container .page-image{box-shadow:0 0 3px 0 var(--box-shadow)}.Thumbnail .container .annotation-image,.Thumbnail .container .page-image{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.Thumbnail .container .checkbox{position:absolute;border-radius:4px;z-index:4}.Thumbnail .container .default{top:3%;right:15%}.Thumbnail .container .rotated{top:15%;right:3%}.Thumbnail .page-label{margin-top:11px}.Thumbnail.selected .container .thumbnail:before{color:#fff;background:var(--focus-border);width:16px;height:16px;position:absolute;z-index:10}.Thumbnail.selected .container canvas{background:hsla(0,0%,100%,.6)}.Thumbnail.active .page-label{color:var(--focus-border)!important}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" });
    },
    1568: function (e, t, n) {
      (t = e.exports = n(31)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .documentControlsContainer{margin-left:16px;margin-right:16px;margin-bottom:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .documentControlsContainer{margin-left:16px;margin-right:16px;margin-bottom:16px}}.documentControlsContainer .PageControlContainer{display:flex;background-color:var(--gray-2);justify-content:center;align-content:center;border-radius:4px}.documentControlsContainer .PageControlContainer .dropdown-menu{position:relative}.documentControlsContainer .PageControlContainer .dropdown-menu .indicator{position:absolute;bottom:1px;right:1px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #c4c4c4;transform:rotateY(0deg) rotate(315deg)}.documentControlsContainer .PageControlContainer button .Icon{height:21px;width:21px;color:var(--icon-color)}.documentControlsContainer .PageControlContainer .button-hover:hover{background:var(--view-header-button-hover);border-radius:4px}.documentControlsContainer .PageControlContainer .divider{height:20px;width:1px;background:var(--divider);margin:6px;display:block!important}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" });
    },
    1569: function (e, t, n) {
      var o = n(30),
        r = n(1570);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var a = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          (t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer"));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                });
            else {
              const t = e.cloneNode(!0);
              r.shadowRoot.appendChild(t), n.push(t);
            }
          }
        },
        singleton: !1,
      };
      o(r, a);
      e.exports = r.locals || {};
    },
    1570: function (e, t, n) {
      (t = e.exports = n(31)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.documentControls{display:flex;flex-direction:column}.documentControls .divider{height:1px;background:var(--divider);margin:16px 0 8px}.documentControls .documentControlsInput{display:flex;flex-direction:row;padding-bottom:16px;padding-top:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .documentControls .documentControlsInput{padding-bottom:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .documentControls .documentControlsInput{padding-bottom:0}}.documentControls .documentControlsInput.customizableUI{padding:8px 0}.documentControls .documentControlsInput .pagesInput{width:100%;height:30px;border:1px solid var(--border);border-radius:4px;color:var(--text-color);padding:4px 8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .documentControls .documentControlsInput .pagesInput{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .documentControls .documentControlsInput .pagesInput{font-size:13px}}.documentControls .documentControlsInput .pagesInput:focus{outline:none;border:1px solid var(--focus-border)}.documentControls .documentControlsInput .pagesInput::-moz-placeholder{color:var(--placeholder-text)}.documentControls .documentControlsInput .pagesInput::placeholder{color:var(--placeholder-text)}.documentControls .documentControlsInput .documentControlsButton{display:flex;flex-direction:row;padding-left:2px}.documentControls .documentControlsInput .documentControlsButton .Button{height:30px;padding:0;width:30px;margin:0 4px}.documentControls .documentControlsInput .documentControlsButton .Button .Icon{height:24px;width:24px;color:var(--icon-color)}.documentControls .documentControlsInput .documentControlsButton .Button:hover{background:var(--view-header-button-hover);border-radius:4px}.documentControls .documentControlsLabel{margin-top:16px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .documentControls .documentControlsLabel{margin-top:8px;font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .documentControls .documentControlsLabel{margin-top:8px;font-size:13px}}.documentControls .documentControlsLabel .multiSelectExampleLabel{color:var(--faded-text);margin-left:2px}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" });
    },
    1571: function (e, t, n) {
      var o = n(30),
        r = n(1572);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[e.i, r, ""]]);
      var a = {
        insert: function (e) {
          if (!window.isApryseWebViewerWebComponent)
            return void document.head.appendChild(e);
          let t;
          (t = document.getElementsByTagName("apryse-webviewer")),
            t.length ||
              (t = (function e(t, n = document) {
                const o = [];
                return (
                  n.querySelectorAll(t).forEach((e) => o.push(e)),
                  n.querySelectorAll("*").forEach((n) => {
                    n.shadowRoot && o.push(...e(t, n.shadowRoot));
                  }),
                  o
                );
              })("apryse-webviewer"));
          const n = [];
          for (let o = 0; o < t.length; o++) {
            const r = t[o];
            if (0 === o)
              r.shadowRoot.appendChild(e),
                (e.onload = function () {
                  n.length > 0 &&
                    n.forEach((t) => {
                      t.innerHTML = e.innerHTML;
                    });
                });
            else {
              const t = e.cloneNode(!0);
              r.shadowRoot.appendChild(t), n.push(t);
            }
          }
        },
        singleton: !1,
      };
      o(r, a);
      e.exports = r.locals || {};
    },
    1572: function (e, t, n) {
      (t = e.exports = n(31)(!1)).push([
        e.i,
        ":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.thumbnail-slider-container{display:flex;align-items:center;width:230px;margin:0 auto;height:40px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumbnail-slider-container{width:inherit;margin:16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumbnail-slider-container{width:inherit;margin:16px}}.thumbnail-slider-container .thumbnail-slider{width:100%;height:20px;padding:0;color:transparent;background-color:transparent;border:0 transparent}.thumbnail-slider-container input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;accent-color:green;height:3px;background:#2980b9}.thumbnail-slider-container input[type=range]::-webkit-slider-runnable-track{height:5px;border-radius:6px}.thumbnail-slider-container input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;height:14px;width:14px;background-color:var(--slider-filled);border-radius:50%;border:2px solid var(--slider-filled);margin-top:-4px}.thumbnail-slider-container input[type=range]::-moz-range-track{height:5px;border-radius:4px}.thumbnail-slider-container Button{width:15px;height:15px;margin:2.5px;padding-top:6px}.thumbnail-slider-container Button:hover{background:var(--view-header-button-hover);border-radius:4px}.thumbnail-slider-container .slider{width:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumbnail-slider-container .slider{margin-top:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumbnail-slider-container .slider{margin-top:0}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumbnail-slider-container .slider .slider-element-container{width:auto;margin-left:auto}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumbnail-slider-container .slider .slider-element-container{width:auto;margin-left:auto}}.ThumbnailsPanel{overflow:hidden!important;display:flex;height:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ThumbnailsPanel{width:inherit;margin:0 16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ThumbnailsPanel{width:inherit;margin:0 16px}}.ThumbnailsPanel #virtualized-thumbnails-container{flex:1}.ThumbnailsPanel .row{display:flex;justify-content:space-around;align-items:center;flex-direction:column}.ThumbnailsPanel .thumbnailPlaceholder{width:150px;margin:2px;border:1px solid var(--focus-border)}.ThumbnailsPanel .columnsOfThumbnails.row{display:flex;justify-content:left;align-items:center;flex-direction:row}.ThumbnailsPanel .columnsOfThumbnails .cellThumbContainer{display:flex;flex-direction:row}.ThumbnailsPanel .columnsOfThumbnails .Thumbnail{display:inline-flex}.ThumbnailsPanel .columnsOfThumbnails .thumbnailPlaceholder{width:116px;min-width:116px;height:150px;margin-bottom:30px}.cellThumbContainer{border-radius:4px}.thumbnailAutoScrollArea{position:absolute;width:calc(100% - 55px);z-index:10;background:hsla(0,0%,100%,0)}",
        "",
      ]),
        (t.locals = { LEFT_HEADER_WIDTH: "41px", RIGHT_HEADER_WIDTH: "41px" });
    },
    1603: function (e, t, n) {
      "use strict";
      n.r(t);
      n(35),
        n(20),
        n(9),
        n(32),
        n(8),
        n(76),
        n(39),
        n(23),
        n(24),
        n(94),
        n(95),
        n(123),
        n(45),
        n(51),
        n(118),
        n(571),
        n(25),
        n(18),
        n(11),
        n(13),
        n(14),
        n(10),
        n(12),
        n(16),
        n(15),
        n(17),
        n(27),
        n(28),
        n(22),
        n(34),
        n(54),
        n(56),
        n(55);
      var o = n(119),
        r = n.n(o),
        a = n(0),
        i = n.n(a),
        l = n(6),
        c = n(1482),
        u = n(189),
        s = n(19),
        d = n.n(s),
        m = n(36),
        p = (n(60), n(46), n(3)),
        h = n(2),
        f =
          (n(87),
          n(111),
          n(151),
          n(59),
          n(64),
          n(65),
          n(66),
          n(67),
          n(37),
          n(40),
          n(41),
          n(63),
          n(211)),
        b = n(1),
        g = n(4),
        v = n.n(g),
        y = n(117),
        w = n(43),
        x = (n(1564), n(5)),
        E = n(104);
      var C = function (e) {
          var t = e.className,
            n = e.pageIndex,
            o = Object(l.d)(),
            r = Object(l.e)(function (e) {
              return p.a.getSelectedThumbnailPageIndexes(e);
            });
          return i.a.createElement(
            "div",
            {
              className: t,
              onClick: function () {
                -1 === r.indexOf(n) && o(h.a.setSelectedPageThumbnails([n]));
              },
            },
            i.a.createElement(E.a, {
              dataElement: x.a.PAGE_MANIPULATION_OVERLAY_BUTTON,
              toggleElement: x.a.PAGE_MANIPULATION,
              img: "icon-tool-more",
              title: "option.thumbnailPanel.moreOptions",
            }),
          );
        },
        O = n(70),
        T = n(396),
        A = n(243);
      function S(e, t) {
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
              var o,
                r,
                a,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return l;
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
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var P = { index: v.a.number.isRequired },
        k = function (e) {
          var t = e.index,
            n = Object(T.a)().t,
            o = S(
              Object(l.e)(function (e) {
                return [p.a.isElementDisabled(e, "thumbnailControl")];
              }),
              1,
            )[0],
            r = S(
              Object(l.e)(function (e) {
                return [
                  p.a.isElementDisabled(
                    e,
                    x.a.PAGE_MANIPULATION_OVERLAY_BUTTON,
                  ),
                ];
              }),
              1,
            )[0],
            c = S(
              Object(l.e)(function (e) {
                return [
                  p.a.pageDeletionConfirmationModalEnabled(e),
                  p.a.getSelectedThumbnailPageIndexes(e),
                ];
              }),
              2,
            ),
            u = c[0],
            s = c[1],
            m = Object(l.d)(),
            h = Object(a.useRef)([]),
            f = Object(a.useRef)(null),
            g = S(
              Object(l.e)(function (e) {
                return [
                  p.a.getCurrentPage(e),
                  p.a.getThumbnailControlMenuItems(e),
                  p.a.getFeatureFlags(e),
                ];
              }, l.c),
              3,
            ),
            v = g[0],
            E = g[1],
            j = g[2],
            P =
              s.length > 0
                ? s.map(function (e) {
                    return e + 1;
                  })
                : [t + 1],
            k = P.includes(v),
            I = j.customizableUI;
          k || (P = [v]);
          var L = b.a.getDocument(),
            N = null == L ? void 0 : L.type,
            D = N === O.a.XOD,
            R = N === O.a.OFFICE || N === O.a.LEGACY_OFFICE,
            M = {
              thumbRotateClockwise: i.a.createElement(w.a, {
                className: "rotate-button",
                img: "icon-header-page-manipulation-page-rotation-clockwise-line",
                onClick: function () {
                  return Object(y.o)(P);
                },
                title: "option.thumbnailPanel.rotatePageClockwise",
                dataElement: "thumbRotateClockwise",
              }),
              thumbRotateCounterClockwise: i.a.createElement(w.a, {
                img: "icon-header-page-manipulation-page-rotation-counterclockwise-line",
                onClick: function () {
                  return Object(y.p)(P);
                },
                title: "option.thumbnailPanel.rotatePageCounterClockwise",
                dataElement: "thumbRotateCounterClockwise",
              }),
              thumbDelete: i.a.createElement(w.a, {
                className: "delete-button",
                img: "icon-delete-line",
                onClick: function () {
                  return Object(y.b)(P, m, u);
                },
                title: "option.thumbnailPanel.delete",
                dataElement: "thumbDelete",
                onClickAnnouncement: ""
                  .concat(n("action.delete"), " ")
                  .concat(n("action.modal"), " ")
                  .concat(n("action.isOpen")),
              }),
            },
            _ = !1,
            H = [],
            z = E.map(function (e) {
              var t = e.dataElement,
                n = t,
                o = M[t];
              if (H.indexOf(t) > -1) return null;
              if ((H.push(t), !o)) {
                _ = !0;
                var r = e.img,
                  a = e.onClick,
                  l = e.title;
                o = i.a.createElement(w.a, {
                  className: "".concat(t, "-button"),
                  img: r,
                  onClick: function () {
                    return a(v);
                  },
                  title: l,
                  dataElement: t,
                });
              }
              return o ? i.a.cloneElement(o, { key: n }) : null;
            });
          return (
            Object(a.useEffect)(
              function () {
                (h.current = Object(A.a)(f.current)),
                  h.current.length > 0 &&
                    h.current.forEach(function (e) {
                      e.tabIndex = -1;
                    });
              },
              [h.current, z],
            ),
            o
              ? null
              : D || R || (null != L && L.isWebViewerServerDocument())
                ? i.a.createElement(
                    "div",
                    {
                      className: "thumbnailControls-overlay",
                      "data-element": "thumbnailControl",
                      style: { display: "flex" },
                    },
                    i.a.createElement(w.a, {
                      img: "icon-header-page-manipulation-page-rotation-counterclockwise-line",
                      onClick: function () {
                        return Object(y.p)(P);
                      },
                      title: "option.thumbnailPanel.rotatePageCounterClockwise",
                      dataElement: "thumbRotateCounterClockwise",
                    }),
                    i.a.createElement(w.a, {
                      img: "icon-header-page-manipulation-page-rotation-clockwise-line",
                      onClick: function () {
                        return Object(y.o)(P);
                      },
                      title: "option.thumbnailPanel.rotatePageClockwise",
                      dataElement: "thumbRotateClockwise",
                    }),
                  )
                : i.a.createElement(
                    "div",
                    {
                      className: d()({
                        "thumbnailControls-overlay": !0,
                        "custom-buttons": _,
                        "modular-ui": I,
                      }),
                      "data-element": "thumbnailControl",
                      ref: f,
                    },
                    z,
                    r
                      ? null
                      : i.a.createElement(C, {
                          className: "more-options",
                          pageIndex: t,
                        }),
                  )
          );
        };
      k.propTypes = P;
      var I = k,
        L = n(345),
        N = (n(1566), n(1261)),
        D = n(21);
      function R(e) {
        return (R =
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
      function M(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return B(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          U(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _ =
          function () {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
          l = r.toStringTag || "@@toStringTag";
        function c(e, t, n) {
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
          c({}, "");
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, r) {
          var a = t && t.prototype instanceof m ? t : m,
            i = Object.create(a.prototype),
            l = new T(r || []);
          return o(i, "_invoke", { value: x(e, n, l) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = u;
        var d = {};
        function m() {}
        function p() {}
        function h() {}
        var f = {};
        c(f, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          g = b && b(b(A([])));
        g && g !== t && n.call(g, a) && (f = g);
        var v = (h.prototype = m.prototype = Object.create(f));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var r;
          o(this, "_invoke", {
            value: function (o, a) {
              function i() {
                return new t(function (r, i) {
                  !(function o(r, a, i, l) {
                    var c = s(e[r], e, a);
                    if ("throw" !== c.type) {
                      var u = c.arg,
                        d = u.value;
                      return d && "object" == R(d) && n.call(d, "__await")
                        ? t.resolve(d.__await).then(
                            function (e) {
                              o("next", e, i, l);
                            },
                            function (e) {
                              o("throw", e, i, l);
                            },
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return o("throw", e, i, l);
                            },
                          );
                    }
                    l(c.arg);
                  })(o, a, r, i);
                });
              }
              return (r = r ? r.then(i, i) : i());
            },
          });
        }
        function x(e, t, n) {
          var o = "suspendedStart";
          return function (r, a) {
            if ("executing" === o)
              throw new Error("Generator is already running");
            if ("completed" === o) {
              if ("throw" === r) throw a;
              return S();
            }
            for (n.method = r, n.arg = a; ; ) {
              var i = n.delegate;
              if (i) {
                var l = E(i, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === o) throw ((o = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = "executing";
              var c = s(e, t, n);
              if ("normal" === c.type) {
                if (
                  ((o = n.done ? "completed" : "suspendedYield"), c.arg === d)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              "throw" === c.type &&
                ((o = "completed"), (n.method = "throw"), (n.arg = c.arg));
            }
          };
        }
        function E(e, t) {
          var n = t.method,
            o = e.iterator[n];
          if (void 0 === o)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                E(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method",
                  )))),
              d
            );
          var r = s(o, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), d
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function C(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function T(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(C, this),
            this.reset(!0);
        }
        function A(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                r = function t() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (t.value = e[o]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = h),
          o(v, "constructor", { value: h, configurable: !0 }),
          o(h, "constructor", { value: p, configurable: !0 }),
          (p.displayName = c(h, l, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), c(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(w.prototype),
          c(w.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, o, r, a) {
            void 0 === a && (a = Promise);
            var i = new w(u(t, n, o, r), a);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(v),
          c(v, l, "Generator"),
          c(v, a, function () {
            return this;
          }),
          c(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = A),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
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
              function o(n, o) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  o && ((t.method = "next"), (t.arg = void 0)),
                  !!o
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r],
                  i = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var l = n.call(a, "catchLoc"),
                    c = n.call(a, "finallyLoc");
                  if (l && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var r = this.tryEntries[o];
                if (
                  r.tryLoc <= this.prev &&
                  n.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var a = r;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ("throw" === o.type) {
                    var r = o.arg;
                    O(n);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: A(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function H(e, t, n, o, r, a, i) {
        try {
          var l = e[a](i),
            c = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(c) : Promise.resolve(c).then(o, r);
      }
      function z(e, t) {
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
              var o,
                r,
                a,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          U(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function U(e, t) {
        if (e) {
          if ("string" == typeof e) return B(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? B(e, t)
                : void 0
          );
        }
      }
      function B(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var F = i.a.forwardRef(function (e, t) {
        var n = e.index,
          o = e.isSelected,
          r = e.updateAnnotations,
          l = e.shiftKeyThumbnailPivotIndex,
          c = e.onFinishLoading,
          u = e.onLoad,
          s = e.onRemove,
          m = void 0 === s ? function () {} : s,
          p = e.onDragStart,
          h = e.onDragOver,
          g = e.isDraggable,
          v = e.shouldShowControls,
          y = e.thumbnailSize,
          w = e.currentPage,
          x = e.pageLabels,
          E = void 0 === x ? [] : x,
          C = e.selectedPageIndexes,
          O = e.isThumbnailMultiselectEnabled,
          S = e.isReaderModeOrReadOnly,
          j = e.dispatch,
          P = e.actions,
          k = e.isMobile,
          R = e.canLoad,
          U = e.onCancel,
          B = e.isThumbnailSelectingPages,
          F = e.thumbnailSelectionMode,
          G = e.activeDocumentViewerKey,
          W = e.panelSelector,
          V = e.parentKeyListener,
          K = y ? Number(y) : 150,
          q = z(Object(a.useState)(-1), 2),
          Y = q[0],
          $ = q[1],
          X = Object(a.useRef)(null),
          J = Object(a.useRef)([]),
          Q = Object(a.useRef)([]),
          Z = z(Object(a.useState)({ width: K, height: K }), 2),
          ee = Z[0],
          te = Z[1],
          ne = Object(T.a)().t,
          oe = z(Object(a.useState)(!1), 2),
          re = oe[0],
          ae = oe[1],
          ie = null;
        Object(a.useEffect)(function () {
          var e = function (e) {
            X.current && !X.current.contains(e.target) && fe();
          };
          return (
            document.addEventListener("mousedown", e),
            function () {
              document.removeEventListener("mousedown", e);
            }
          );
        }, []);
        var le = function () {
          ie = setTimeout(function () {
            var e,
              t,
              o = Object(D.a)().querySelector(
                ".ThumbnailsPanel.".concat(W, " #pageThumb").concat(n),
              ),
              a = n + 1,
              i = b.a.getRotation(a),
              l = b.a.getDocument(G);
            if (l && l.getPageInfo(a)) {
              var s = l.loadCanvas({
                pageNumber: a,
                width: K,
                height: K,
                drawComplete:
                  ((e = _().mark(function e(t) {
                    var o, a, l, u;
                    return _().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (o = Object(D.a)().querySelector(
                              ".ThumbnailsPanel."
                                .concat(W, " #pageThumb")
                                .concat(n),
                            )) &&
                              ((a = o.querySelector(".page-image")) &&
                                o.removeChild(a),
                              (t.className = "page-image"),
                              (l = Math.min(K / t.width, K / t.height)),
                              (t.style.width = "".concat(t.width * l, "px")),
                              (t.style.height = "".concat(t.height * l, "px")),
                              te({
                                width: Number(t.width),
                                height: Number(t.height),
                              }),
                              Math.abs(i) &&
                                ((u = "rotate(".concat(
                                  90 * i,
                                  "deg) translate(-50%,-50%)",
                                )),
                                (t.style.transform = u),
                                (t.style["transform-origin"] = "top left"),
                                (t.style["ms-transform"] = u),
                                (t.style["ms-transform-origin"] = "top left"),
                                (t.style["-moz-transform"] = u),
                                (t.style["-moz-transform-origin"] = "top left"),
                                (t.style["-webkit-transform-origin"] =
                                  "top left"),
                                (t.style["-webkit-transform"] = u),
                                (t.style["-o-transform"] = u),
                                (t.style["-o-transform-origin"] = "top left")),
                              o.appendChild(t)),
                              r && r(n),
                              c(n),
                              ae(!0);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  (t = function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (o, r) {
                      var a = e.apply(t, n);
                      function i(e) {
                        H(a, o, r, i, l, "next", e);
                      }
                      function l(e) {
                        H(a, o, r, i, l, "throw", e);
                      }
                      i(void 0);
                    });
                  }),
                  function (e) {
                    return t.apply(this, arguments);
                  }),
                allowUseOfOptimizedThumbnail: !0,
              });
              u(n, o, s);
            }
          }, 50);
        };
        Object(a.useEffect)(function () {
          var e = function (e) {
              var t = e.contentChanged,
                o = e.moved,
                r = e.added,
                a = e.removed,
                i = n + 1,
                l = r.includes(i),
                c = t.some(function (e) {
                  return i === e;
                }),
                u = Object.keys(o).some(function (e) {
                  return i === parseInt(e);
                }),
                s = a.includes(i),
                d = b.a.getTotalPages();
              (a.length > 0 && n + 1 > d) || ((l || c || u || s) && le());
            },
            t = function () {
              ae(!1), le();
            };
          return (
            b.a.addEventListener("pagesUpdated", e),
            b.a.addEventListener("rotationUpdated", t),
            R && le(),
            function () {
              b.a.removeEventListener("pagesUpdated", e),
                b.a.removeEventListener("rotationUpdated", t),
                clearTimeout(ie),
                m(n);
            }
          );
        }, []),
          Object(f.a)(
            function () {
              R ? (le(), r(n)) : U(n);
            },
            [R, G],
          );
        var ce = w === n + 1,
          ue = E[n],
          se = "default",
          de = b.a.getRotation(n + 1);
        (((!de || 2 === de) && ee.width > ee.height) ||
          ((1 === de || 3 === de) && ee.width < ee.height)) &&
          (se = "rotated"),
          Object(a.useImperativeHandle)(t, function () {
            return {
              focusInput: function () {
                B && re
                  ? (me(Q.current[0]), $(0))
                  : J.current &&
                    setTimeout(function () {
                      me(J.current[0]), $(0);
                    }, 0);
              },
            };
          });
        var me = function (e) {
            e && ((e.ariaCurrent = "page"), e.focus());
          },
          pe = function (e) {
            e && (e.ariaCurrent = void 0);
          },
          he = function (e) {
            e.preventDefault(), fe();
          },
          fe = function () {
            J.current.forEach(function (e) {
              pe(e);
            });
          },
          be = Object(a.useCallback)(
            function (e) {
              e.stopPropagation(), V(e);
              var t,
                n = {
                  Tab: function () {
                    return he(e);
                  },
                  Escape: function () {
                    return he(e);
                  },
                };
              n[e.key] &&
                (null === (t = n[e.key]) || void 0 === t || t.call(n));
              var o = {
                ArrowUp: function () {
                  return ge(e, -1);
                },
                ArrowDown: function () {
                  return ge(e, 1);
                },
                ArrowLeft: function () {
                  return ge(e, -1);
                },
                ArrowRight: function () {
                  return ge(e, 1);
                },
              };
              o[e.key] && !ye && o[e.key]();
            },
            [J.current, Y],
          ),
          ge = function (e, t) {
            e.preventDefault(),
              0 !== J.current.length &&
                $(function (e) {
                  var n = e + t;
                  return (
                    n < 0
                      ? (n = J.current.length - 1)
                      : n >= J.current.length && (n = 0),
                    ve(J.current[n]),
                    n
                  );
                });
          },
          ve = function (e) {
            J.current.forEach(function (t) {
              t === e ? me(t) : pe(t);
            });
          };
        Object(a.useEffect)(
          function () {
            X.current && (J.current = Object(A.a)(X.current));
          },
          [v, ce, re],
        ),
          Object(a.useEffect)(
            function () {
              X.current && (Q.current = Object(A.a)(X.current));
            },
            [B, re],
          );
        var ye = B && re;
        return i.a.createElement(
          "button",
          {
            className: d()({ Thumbnail: !0, active: ce, selected: o && B }),
            onDragOver: function (e) {
              return h(e, n);
            },
            id: "Thumbnail-container",
            ref: X,
            onKeyDown: function (e) {
              return be(e);
            },
            onClick: function (e) {
              var t = e.target.type && "checkbox" === e.target.type;
              if (O && !S) {
                var o = e.ctrlKey || e.metaKey,
                  r = e.shiftKey,
                  a = M(C);
                if (r) {
                  j(P.setThumbnailSelectingPages(!0));
                  var i = l;
                  null === i &&
                    ((i = w - 1), j(P.setShiftKeyThumbnailsPivotIndex(i)));
                  var c = Math.min(i, n),
                    u = Math.max(i, n);
                  a = M(
                    new Set(
                      M(
                        Array.from({ length: u - c + 1 }, function (e, t) {
                          return t + c;
                        }),
                      ),
                    ),
                  );
                } else
                  o || B
                    ? (j(P.setThumbnailSelectingPages(!0)),
                      (o || t || F === L.a.THUMBNAIL) &&
                        (0 !== C.length || B
                          ? C.includes(n)
                            ? (a = C.filter(function (e) {
                                return n !== e;
                              }))
                            : a.push(n)
                          : a.push(w - 1)),
                      j(P.setShiftKeyThumbnailsPivotIndex(n)))
                    : (a = [n]);
                var s = a[a.length - 1];
                !B && !r && j(P.setShiftKeyThumbnailsPivotIndex(s)),
                  j(P.setSelectedPageThumbnails(a));
              } else k() && j(P.closeElement("leftPanel"));
              setTimeout(function () {
                (t && F !== L.a.THUMBNAIL) || b.a.setCurrentPage(n + 1);
              }, 0);
            },
            style: {
              width: K,
              cursor: "pointer",
              background: "none",
              border: "none",
            },
            tabIndex: -1,
          },
          i.a.createElement(
            "div",
            {
              className: "container",
              style: { height: K, width: K },
              onDragStart: function (e) {
                return p(e, n);
              },
              draggable: g,
              tabIndex: -1,
            },
            i.a.createElement("div", {
              id: "pageThumb".concat(n),
              className: "thumbnail",
            }),
            B &&
              re &&
              i.a.createElement(N.a, {
                className: "checkbox ".concat(se),
                checked: C.includes(n),
                "aria-label": ""
                  .concat(ne("action.page"), " ")
                  .concat(ue, " ")
                  .concat(ne("formField.types.checkbox")),
                tabIndex: -1,
              }),
          ),
          i.a.createElement("div", { className: "page-label" }, ue),
          !B && ce && v && i.a.createElement(I, { index: n }),
        );
      });
      (F.displayName = "Thumbnail"),
        (F.propTypes = {
          index: v.a.number,
          isSelected: v.a.bool,
          updateAnnotations: v.a.func,
          shiftKeyThumbnailPivotIndex: v.a.number,
          onFinishLoading: v.a.func,
          onLoad: v.a.func,
          onRemove: v.a.func,
          onDragStart: v.a.func,
          onDragOver: v.a.func,
          isDraggable: v.a.bool,
          shouldShowControls: v.a.bool,
          thumbnailSize: v.a.number,
          currentPage: v.a.number,
          pageLabels: v.a.array,
          selectedPageIndexes: v.a.array,
          isThumbnailMultiselectEnabled: v.a.bool,
          isReaderModeOrReadOnly: v.a.bool,
          dispatch: v.a.func,
          actions: v.a.object,
          isMobile: v.a.func,
          canLoad: v.a.bool,
          onCancel: v.a.func,
          isThumbnailSelectingPages: v.a.bool,
          thumbnailSelectionMode: v.a.string,
          activeDocumentViewerKey: v.a.number,
          panelSelector: v.a.string,
          parentKeyListener: v.a.func,
        });
      var G = F;
      function W() {
        return (W = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      function V(e, t) {
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
              var o,
                r,
                a,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return K(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return K(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var q = i.a.forwardRef(function (e, t) {
        var n = V(
            Object(l.e)(function (e) {
              return [
                p.a.getCurrentPage(e),
                p.a.getPageLabels(e),
                p.a.getSelectedThumbnailPageIndexes(e),
                p.a.isThumbnailMultiselectEnabled(e),
                p.a.isReaderMode(e),
                p.a.isDocumentReadOnly(e),
                p.a.getShiftKeyThumbnailPivotIndex(e),
                p.a.isThumbnailSelectingPages(e),
                p.a.getThumbnailSelectionMode(e),
                p.a.getActiveDocumentViewerKey(e),
              ];
            }, l.c),
            11,
          ),
          o = n[0],
          r = n[1],
          a = n[2],
          c = n[3],
          u = n[4],
          s = n[5],
          d = n[6],
          f = n[7],
          b = n[8],
          g = n[9],
          v = n[10],
          y = Object(l.d)();
        return i.a.createElement(
          G,
          W({}, e, {
            ref: t,
            currentPage: o,
            pageLabels: r,
            selectedPageIndexes: a,
            isThumbnailMultiselectEnabled: c,
            isReaderModeOrReadOnly: u || s,
            dispatch: y,
            actions: h.a,
            isMobile: m.k,
            shiftKeyThumbnailPivotIndex: d,
            isThumbnailSelectingPages: f,
            thumbnailSelectionMode: b,
            selectionModes: v,
            activeDocumentViewerKey: g,
          }),
        );
      });
      q.displayName = "ThumbnailRedux";
      var Y = q,
        $ = (n(132), n(110), n(343)),
        X = n(29);
      n(1443);
      function J(e) {
        var t = e.moveToTop,
          n = e.moveToBottom;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "moveToTop",
            img: "icon-page-move-up",
            onClick: t,
            title: "action.moveToTop",
          }),
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "moveToBottom",
            img: "icon-page-move-down",
            onClick: n,
            title: "action.moveToBottom",
          }),
        );
      }
      J.propTypes = { moveToTop: v.a.func, moveToBottom: v.a.func };
      var Q = J;
      function Z(e) {
        var t = e.onInsert,
          n = e.onReplace,
          o = e.onExtractPages,
          r = e.onDeletePages;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlInsert",
            img: "icon-page-insertion-insert",
            onClick: t,
            title: "action.insert",
          }),
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlReplace",
            img: "icon-page-replacement",
            onClick: n,
            title: "action.replace",
          }),
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlExtract",
            img: "icon-page-manipulation-extract",
            onClick: o,
            title: "action.extract",
          }),
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlDelete",
            img: "icon-delete-line",
            onClick: r,
            title: "action.delete",
          }),
        );
      }
      Z.propTypes = {
        onInsert: v.a.func,
        onReplace: v.a.func,
        onExtractPages: v.a.func,
        onDeletePages: v.a.func,
      };
      var ee = Z;
      function te(e) {
        var t = e.onRotateClockwise,
          n = e.onRotateCounterClockwise;
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlRotateCounterClockwise",
            img: "icon-header-page-manipulation-page-rotation-counterclockwise-line",
            onClick: n,
            title: "action.rotateCounterClockwise",
          }),
          i.a.createElement(w.a, {
            className: "button-hover",
            dataElement: "thumbnailsControlRotateClockwise",
            img: "icon-header-page-manipulation-page-rotation-clockwise-line",
            onClick: t,
            title: "action.rotateClockwise",
          }),
        );
      }
      te.propTypes = {
        onRotateClockwise: v.a.func,
        onRotateCounterClockwise: v.a.func,
      };
      var ne = te,
        oe = n(167);
      function re(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return le(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          ie(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ae(e, t) {
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
              var o,
                r,
                a,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          ie(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ie(e, t) {
        if (e) {
          if ("string" == typeof e) return le(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? le(e, t)
                : void 0
          );
        }
      }
      function le(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function ce(e) {
        var t,
          n = e.parentElement,
          o = Object(l.f)(),
          r = Object(l.d)(),
          c = Object(m.k)(),
          u = ae(
            Object(l.e)(function (e) {
              return [
                p.a.getSelectedThumbnailPageIndexes(e),
                n && "leftPanel" !== n
                  ? p.a.getPanelWidth(e, n)
                  : p.a.getLeftPanelWidth(e),
                p.a.pageDeletionConfirmationModalEnabled(e),
                p.a.isInDesktopOnlyMode(e),
              ];
            }),
            4,
          ),
          s = u[0],
          d = u[1],
          f = u[2],
          g = u[3],
          v = s.map(function (e) {
            return e + 1;
          }),
          w = function () {
            return !Object(y.k)(v, r) && Object(y.o)(v);
          },
          C = function () {
            return !Object(y.k)(v, r) && Object(y.p)(v);
          },
          T = b.a.getDocument(),
          A = null == T ? void 0 : T.type,
          S = A === O.a.XOD,
          j = A === O.a.OFFICE || A === O.a.LEGACY_OFFICE;
        if (!g && c)
          try {
            t =
              Object(D.a)().querySelector(".App").getBoundingClientRect()
                .width - 88;
          } catch (e) {
            t = (d || X.d) - 88;
          }
        else t = (d || X.d) - 88;
        var P = t < 190,
          k = t > 290;
        if (
          (Object(a.useEffect)(
            function () {
              var e = {
                dataElement: x.a.PAGE_MANIPULATION_FLYOUT_MULTI_SELECT,
                className: x.a.PAGE_MANIPULATION_FLYOUT_MULTI_SELECT,
                items: [].concat(
                  re(P ? Object(oe.a)(o, !0) : []),
                  re(k ? [] : Object(oe.b)(o, !0)),
                ),
              };
              k && r(h.a.closeElement(e.dataElement)),
                r(h.a.updateFlyout(e.dataElement, e));
            },
            [o, k, P],
          ),
          S || j || (null != T && T.isWebViewerServerDocument()))
        )
          return i.a.createElement(
            "div",
            { className: "PageControlContainer root small" },
            i.a.createElement(ne, {
              onRotateClockwise: w,
              onRotateCounterClockwise: C,
            }),
          );
        var I = {
          onReplace: function () {
            return !Object(y.k)(v, r) && Object(y.m)(r);
          },
          onExtractPages: function () {
            return !Object(y.k)(v, r) && Object(y.e)(v, r);
          },
          onDeletePages: function () {
            return !Object(y.k)(v, r) && Object(y.b)(v, r, f);
          },
          onRotateCounterClockwise: C,
          onRotateClockwise: w,
          onInsert: function () {
            return (
              !Object(y.k)(v, r) &&
              (r(h.a.closeElement(x.a.PAGE_MANIPULATION_OVERLAY)),
              void r(h.a.openElement("insertPageModal")))
            );
          },
          moveToTop: function () {
            return !Object(y.k)(v, r) && Object(y.j)(v);
          },
          moveToBottom: function () {
            return !Object(y.k)(v, r) && Object(y.i)(v);
          },
          pageNumbers: v,
        };
        return i.a.createElement(
          "div",
          { className: "PageControlContainer root" },
          i.a.createElement(ne, I),
          i.a.createElement("div", { className: "divider" }),
          !P && i.a.createElement(Q, I),
          !P && i.a.createElement("div", { className: "divider" }),
          k && i.a.createElement(ee, I),
          !k &&
            i.a.createElement(
              "div",
              { className: "dropdown-menu" },
              i.a.createElement(E.a, {
                dataElement: "".concat(
                  x.a.PAGE_MANIPULATION_FLYOUT_MULTI_SELECT,
                  "Button",
                ),
                toggleElement: x.a.PAGE_MANIPULATION_FLYOUT_MULTI_SELECT,
                title: "action.more",
                img: "icon-tool-more",
              }),
              i.a.createElement("div", { className: "indicator" }),
            ),
        );
      }
      ce.propTypes = { parentElement: v.a.string };
      var ue = ce;
      n(1569);
      function se(e, t) {
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
              var o,
                r,
                a,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return de(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return de(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function de(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function me(e, t) {
        for (
          var n = "",
            o = e.sort(function (e, t) {
              return e - t;
            }),
            r = null,
            a = 0;
          o.length > a;
          a++
        )
          o[a + 1] === o[a] + 1
            ? (r = null !== r ? r : o[a])
            : null !== r
              ? ((n = "".concat(n).concat(t[r], "-").concat(t[o[a]], ", ")),
                (r = null))
              : (n = "".concat(n).concat(t[o[a]], ", "));
        return n.slice(0, -2);
      }
      var pe = function (e) {
        var t = e.shouldShowControls,
          n = e.parentElement,
          o = se(Object(T.a)(), 1)[0],
          r = Object(l.d)(),
          c = se(
            Object(l.e)(function (e) {
              return [
                p.a.getSelectedThumbnailPageIndexes(e),
                p.a.isElementDisabled(e, "documentControl"),
                p.a.getPageLabels(e),
                p.a.isThumbnailSelectingPages(e),
                p.a.getFeatureFlags(e),
              ];
            }),
            5,
          ),
          u = c[0],
          s = c[1],
          d = c[2],
          m = c[3],
          f = c[4],
          g = me(u, d),
          v = se(Object(a.useState)(g), 2),
          y = v[0],
          x = v[1],
          E = se(Object(a.useState)(g), 2),
          C = E[0],
          O = E[1],
          A = f.customizableUI;
        Object(a.useEffect)(
          function () {
            x(me(u, d));
          },
          [x, u, t, d],
        );
        var S = function () {
          r(h.a.setThumbnailSelectingPages(!0));
        };
        return s
          ? null
          : i.a.createElement(
              "div",
              {
                className: "documentControlsContainer",
                "data-element": "documentControl",
              },
              t
                ? i.a.createElement(
                    "div",
                    { className: "documentControls" },
                    i.a.createElement("div", { className: "divider" }),
                    m && i.a.createElement(ue, { parentElement: n }),
                    A &&
                      i.a.createElement(
                        "label",
                        {
                          className: "documentControlsLabel",
                          htmlFor: "pageNumbersInput",
                        },
                        i.a.createElement(
                          "span",
                          null,
                          o("option.thumbnailPanel.multiSelectPages"),
                          " -",
                        ),
                        i.a.createElement(
                          "span",
                          { className: "multiSelectExampleLabel" },
                          o("option.thumbnailPanel.multiSelectPagesExample"),
                        ),
                      ),
                    i.a.createElement(
                      "div",
                      { className: "documentControlsInput" },
                      i.a.createElement("input", {
                        name: "pageNumbersInput",
                        onBlur: function (e) {
                          var t = e.target.value.replace(/ /g, ""),
                            n = t ? Object($.a)(t, d) : [],
                            o = n.map(function (e) {
                              return e - 1;
                            });
                          if (n.length || !t) {
                            r(h.a.setSelectedPageThumbnails(o));
                            var a = me(u, d);
                            x(a), O(a);
                          } else x(C);
                          u.length > 0 &&
                            !m &&
                            setTimeout(function () {
                              y !== C && S();
                            }, 100);
                        },
                        onChange: function (e) {
                          x(e.target.value);
                        },
                        value: y,
                        placeholder: A ? "" : "1, 3, 5-10",
                        "aria-label": o(
                          "option.thumbnailPanel.enterPageNumbers",
                        ),
                        className: "pagesInput",
                        type: "text",
                      }),
                      i.a.createElement(
                        "div",
                        { className: "documentControlsButton" },
                        m
                          ? i.a.createElement(w.a, {
                              img: "icon-close",
                              title: "option.documentControls.closeTooltip",
                              onClick: function () {
                                r(
                                  h.a.setSelectedPageThumbnails([
                                    b.a.getCurrentPage() - 1,
                                  ]),
                                ),
                                  r(h.a.setThumbnailSelectingPages(!1));
                              },
                              dataElement: "thumbCloseMultiSelect",
                            })
                          : i.a.createElement(w.a, {
                              img: "icon-tool-select-pages",
                              title: "option.documentControls.selectTooltip",
                              onClick: S,
                              dataElement: "thumbMultiSelect",
                            }),
                      ),
                    ),
                  )
                : null,
            );
      };
      pe.propTypes = {
        isDisabled: v.a.bool,
        pageLabels: v.a.arrayOf(v.a.string),
        toggleDocumentControl: v.a.func,
        shouldShowControls: v.a.bool,
      };
      var he = pe,
        fe = n(435),
        be = n(267),
        ge = n(58),
        ve = n(50),
        ye = function (e, t) {
          var n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          return function (o) {
            return (
              o(h.a.openElement(x.a.LOADING_MODAL)),
              new Promise(function (r, a) {
                b.a
                  .mergeDocument(e, t)
                  .then(function (e) {
                    o(h.a.closeElement(x.a.LOADING_MODAL)),
                      b.a.setCurrentPage(t),
                      n && Object(ge.a)(ve.a.DOCUMENT_MERGED, e),
                      r(e);
                  })
                  .catch(function (e) {
                    a(e), o(h.a.closeElement(x.a.LOADING_MODAL));
                  });
              })
            );
          };
        };
      n(1571);
      function we(e) {
        return (we =
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
      function xe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? xe(Object(n), !0).forEach(function (t) {
                Ce(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : xe(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function Ce(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" !== we(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" !== we(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === we(t) ? t : String(t);
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
      function Oe(e, t) {
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
              var o,
                r,
                a,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (o = a.call(n)).done) &&
                    (l.push(o.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (r = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw r;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Te(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Te(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Te(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      var Ae = function (e) {
        var t = e.panelSelector,
          n = e.parentDataElement,
          o = Oe(
            Object(l.e)(function (e) {
              return [
                p.a.isElementOpen(e, "leftPanel"),
                p.a.isElementDisabled(e, "thumbnailsPanel"),
                p.a.getTotalPages(e),
                p.a.getCurrentPage(e),
                p.a.getSelectedThumbnailPageIndexes(e),
                p.a.getIsThumbnailMergingEnabled(e),
                p.a.getIsThumbnailReorderingEnabled(e),
                p.a.getIsMultipleViewerMerging(e),
                p.a.isElementDisabled(e, "thumbnailControl"),
                p.a.isElementDisabled(e, "thumbnailsSizeSlider"),
                p.a.isReaderMode(e),
                p.a.isDocumentReadOnly(e),
                p.a.getTotalPages(e, 2),
                p.a.getActiveDocumentViewerKey(e),
                p.a.openingPageManipulationOverlayByRightClickEnabled(e),
                p.a.getFeatureFlags(e),
              ];
            }, l.c),
            16,
          ),
          s = o[0],
          f = o[1],
          g = o[2],
          v = o[3],
          y = o[4],
          E = o[5],
          C = o[6],
          O = o[7],
          A = o[8],
          S = o[9],
          j = o[10],
          P = o[11],
          k = o[12],
          I = o[13],
          L = o[14],
          N = o[15],
          R = Oe(Object(T.a)(), 1)[0],
          M = Object(a.useRef)(),
          _ = Object(a.useRef)([]),
          H = Object(a.useRef)([]),
          z = Object(a.useRef)(null),
          U = Oe(Object(a.useState)(!1), 2),
          B = U[0],
          F = U[1],
          G = Oe(Object(a.useState)(!0), 2),
          W = G[0],
          V = G[1],
          K = Oe(Object(a.useState)(0), 2),
          q = K[0],
          $ = K[1],
          X = Oe(Object(a.useState)(0), 2),
          J = X[0],
          Q = X[1],
          Z = Oe(Object(a.useState)(null), 2),
          ee = Z[0],
          te = Z[1],
          ne = Oe(Object(a.useState)(!1), 2),
          oe = ne[0],
          re = ne[1],
          ae = Oe(Object(a.useState)(1), 2),
          ie = ae[0],
          le = ae[1],
          ce = Oe(Object(a.useState)(!1), 2),
          ue = ce[0],
          se = ce[1],
          de = Oe(Object(a.useState)(0), 2),
          me = de[0],
          pe = de[1],
          we = Object(a.useRef)([]),
          xe = Object(a.useRef)([]),
          Ce = Object(a.useRef)(null),
          Te = Oe(Object(a.useState)(150), 2),
          Ae = Te[0],
          Se = Te[1],
          je = Oe(Object(a.useState)(0), 2),
          Pe = je[0],
          ke = je[1],
          Ie = Oe(Object(a.useState)(0), 2),
          Le = Ie[0],
          Ne = Ie[1],
          De = 2 === I ? k : g,
          Re = null == N ? void 0 : N.customizableUI,
          Me = Object(l.d)(),
          _e = {};
        Object(a.useEffect)(function () {
          var e = function (e) {
            Ce.current && !Ce.current.contains(e.target) && Be(Ce.current);
          };
          return (
            document.addEventListener("mousedown", e),
            function () {
              document.removeEventListener("mousedown", e);
            }
          );
        }, []);
        var He = Object(a.useCallback)(
            function (e, t, n) {
              var o;
              e.stopPropagation();
              var r = {
                  ArrowLeft: function () {
                    return Ge(e, t, -1);
                  },
                  ArrowRight: function () {
                    return Ge(e, t, 1);
                  },
                  ArrowUp: function () {
                    return Ge(e, t, -n);
                  },
                  ArrowDown: function () {
                    return Ge(e, t, n);
                  },
                },
                a = {
                  Enter: function () {
                    return We(e, t);
                  },
                  Tab: function () {
                    return Fe(t);
                  },
                };
              r[e.key] && (o = r[e.key]()),
                a[e.key] && a[e.key](),
                void 0 !== o &&
                  o !== t &&
                  (pe(o), ze(we.current[o]), Ue(we.current[t]));
            },
            [xe, we],
          ),
          ze = function (e) {
            (e.tabIndex = 0),
              (e.ariaCurrent = "page"),
              (e.style.outline = "var(--focus-visible-outline)"),
              e.focus(),
              (Ce.current = e);
          },
          Ue = function (e) {
            (e.tabIndex = -1), (e.ariaCurrent = void 0), Be(e);
          },
          Be = function (e) {
            e.style.outline = "none";
          },
          Fe = function (e) {
            Be(we.current[e]);
          },
          Ge = function (e, t, n) {
            var o = t + n;
            return o < 0 || o >= De ? t : o;
          },
          We = function (e, t) {
            e.preventDefault(),
              ze(we.current[t]),
              b.a.setCurrentPage(t + 1),
              xe.current[t].focusInput();
          },
          Ve = Object(a.useCallback)(
            function (e, t) {
              e.stopPropagation();
              var n,
                o = {
                  Tab: function () {
                    return qe(e, t);
                  },
                  Escape: function () {
                    return Ke(e, t);
                  },
                };
              o[e.key] &&
                (null === (n = o[e.key]) || void 0 === n || n.call(o));
            },
            [we],
          ),
          Ke = function (e, t) {
            e.preventDefault(), ze(we.current[t]);
          },
          qe = function (e, t) {
            var n = t + (e.shiftKey ? -1 : 1);
            (n < 0 || n >= De) && (n = t),
              pe(n),
              ze(we.current[n]),
              n !== t && Ue(we.current[t]);
          },
          Ye = function (e) {
            var t = H.current && H.current[e] && H.current[e].element;
            if (t) {
              var n = e + 1,
                o = b.a.getPageWidth(n),
                a = (function (e, t) {
                  var n, o, r;
                  return (
                    e > t
                      ? ((r = e / Ae), (n = Ae), (o = Math.round(t / r)))
                      : ((r = t / Ae), (n = Math.round(e / r)), (o = Ae)),
                    { width: n, height: o }
                  );
                })(o, b.a.getPageHeight(n)),
                i = a.width,
                l = a.height,
                c =
                  t.querySelector(".annotation-image") ||
                  document.createElement("canvas");
              (c.className = "annotation-image"),
                (c.role = "img"),
                (c.ariaLabel = "".concat(R("action.page"), " ").concat(n)),
                (c.style.maxWidth = "".concat(Ae, "px")),
                (c.style.maxHeight = "".concat(Ae, "px"));
              var u = c.getContext("2d"),
                s = 1,
                d = b.a.getCompleteRotation(n);
              d < 0 && (d += 4);
              var m = window.Core.getCanvasMultiplier();
              d % 2 == 0
                ? ((c.width = i), (c.height = l), (s = c.width / o), (s /= m))
                : ((c.width = l), (c.height = i), (s = c.height / o), (s /= m)),
                t.appendChild(c),
                b.a.setAnnotationCanvasTransform(u, s, d);
              var p = { pageNumber: n, overrideCanvas: c },
                h = t.querySelector(".page-image");
              if (h)
                (p = Ee(
                  Ee({}, p),
                  {},
                  { overridePageRotation: d, overridePageCanvas: h },
                )),
                  _e[n] || (_e[n] = r()(b.a.drawAnnotations, 112)),
                  (0, _e[n])(p);
            }
          };
        if (
          (Object(a.useEffect)(function () {
            var e = function () {
                V(!1);
              },
              t = function (e) {
                e || V(!0);
              },
              n = function () {
                var e;
                "officeEditor" ===
                (null === (e = b.a.getDocument()) || void 0 === e
                  ? void 0
                  : e.getType())
                  ? F(!0)
                  : F(!1),
                  (_e = {}),
                  Me(h.a.setSelectedPageThumbnails([]));
              },
              o = function () {
                z.current &&
                  (b.a.setCurrentPage(z.current), (z.current = null));
              };
            return (
              b.a.addEventListener("beginRendering", e),
              b.a.addEventListener("finishedRendering", t),
              b.a.addEventListener("documentLoaded", n),
              b.a.addEventListener("pageComplete", o),
              b.a.getDocument() && n(),
              function () {
                b.a.removeEventListener("beginRendering", e),
                  b.a.removeEventListener("finishedRendering", t),
                  b.a.removeEventListener("documentLoaded", n),
                  b.a.removeEventListener("pageComplete", o);
              }
            );
          }, []),
          Object(a.useEffect)(
            function () {
              var e = function (e) {
                if (e) {
                  var t = Array.from(y);
                  e.removed &&
                    (t = t.filter(function (t) {
                      return -1 === e.removed.indexOf(t + 1);
                    })),
                    e.moved &&
                      (t = t.map(function (t) {
                        return e.moved[t + 1] ? e.moved[t + 1] - 1 : t;
                      }));
                  var n = e.added && e.added[0] - 1 <= t[0];
                  1 === t.length &&
                    n &&
                    (t = e.added.map(function (e) {
                      return e - 1;
                    })),
                    Me(h.a.setSelectedPageThumbnails(t));
                }
              };
              return (
                b.a.addEventListener("pagesUpdated", e),
                function () {
                  return b.a.removeEventListener("pagesUpdated", e);
                }
              );
            },
            [y],
          ),
          Object(a.useEffect)(
            function () {
              var e;
              null === (e = M.current) ||
                void 0 === e ||
                e.scrollToRow(Math.floor((v - 1) / ie));
              var t = function (e) {
                  var t = [];
                  e.forEach(function (e) {
                    var n = e.PageNumber - 1;
                    !e.Listable || t.indexOf(n) > -1 || (t.push(n), Ye(n));
                  });
                },
                n = function (e) {
                  var t,
                    n = e - 1;
                  null === (t = M.current) ||
                    void 0 === t ||
                    t.scrollToRow(Math.floor(n / ie));
                };
              return (
                b.a.addEventListener("pageNumberUpdated", n),
                b.a.addEventListener("annotationChanged", t),
                b.a.addEventListener("annotationHidden", t),
                function () {
                  b.a.removeEventListener("pageNumberUpdated", n),
                    b.a.removeEventListener("annotationChanged", t),
                    b.a.removeEventListener("annotationHidden", t);
                }
              );
            },
            [Ae, ie],
          ),
          Object(a.useEffect)(
            function () {
              (j || P) &&
                (Me(h.a.setSelectedPageThumbnails([])),
                Me(h.a.setThumbnailSelectingPages(!1)));
            },
            [j, P],
          ),
          f || B || (!s && !t && !Re))
        )
          return null;
        var $e = function () {
            se(!1), te(null);
          },
          Xe = function (e, t, n) {
            var o,
              r = new Date().getTime();
            return e < De - 1 && e > 0 && r - Pe >= n
              ? (null === (o = M.current) ||
                  void 0 === o ||
                  o.scrollToRow(Math.floor((e + t) / ie)),
                ke(r),
                e + t)
              : e;
          },
          Je = function (e, t) {
            if ((e.preventDefault(), e.stopPropagation(), C || E)) {
              var n = e.target.getBoundingClientRect();
              re(
                ie > 1
                  ? !(e.pageX > n.x + n.width / 2)
                  : !(e.pageY > n.y + n.height / 2),
              ),
                te(t);
              var o = Object(D.a)()
                  .querySelector("#virtualized-thumbnails-container")
                  .getBoundingClientRect(),
                r = o.y,
                a = o.bottom;
              e.pageY < r + 100
                ? Ne(Xe(t, -1, 400))
                : e.pageY > a - 100 && Ne(Xe(t, 1, 400));
            }
          },
          Qe = function () {
            Ne(Xe(Le, 1, 200));
          },
          Ze = function () {
            Ne(Xe(Le, -1, 200));
          },
          et = function (e, t) {
            Ne(t), se(!0);
            var n,
              o = y.some(function (e) {
                return e === t;
              }),
              r = o
                ? y.map(function (e) {
                    return e + 1;
                  })
                : [t + 1];
            Object(ge.a)(ve.a.THUMBNAIL_DRAGGED),
              e.dataTransfer.setData("text", ""),
              r.length > 1 && e.dataTransfer.setDragImage(new Image(), 0, 0),
              E &&
                O &&
                ((e.dataTransfer.dropEffect = "move"),
                (e.dataTransfer.effectAllowed = "all"),
                e.dataTransfer.setData(
                  "dataTransferWebViewerFrame",
                  window.frameElement.id,
                ),
                (n = r),
                (window.extractedDataPromise = Object(be.a)(n)),
                (window.pagesExtracted = n)),
              o || Me(h.a.setSelectedPageThumbnails([t])),
              b.a.setCurrentPage(t + 1);
          },
          tt = function (e) {
            e.preventDefault();
            var t,
              n = e.dataTransfer.files,
              o = oe ? ee + 1 : ee + 2;
            m.f || (t = e.dataTransfer.getData("dataTransferWebViewerFrame"));
            var r,
              a,
              i = (t && window.frameElement.id !== t) || n.length,
              l = v - 1;
            if (E && i)
              t && window.frameElement.id !== t
                ? Me(
                    ((r = t),
                    (a = o),
                    function (e) {
                      return new Promise(function (t, n) {
                        var o = window.parent.document.querySelector(
                          "#".concat(r),
                        );
                        o ||
                          (console.warn(
                            "Could not find other instance of WebViewer",
                          ),
                          n());
                        var i = o.contentWindow.extractedDataPromise;
                        i ||
                          (console.warn(
                            "Could not retrieve data from other instance of WebViewer",
                          ),
                          n()),
                          e(h.a.openElement(x.a.LOADING_MODAL)),
                          i
                            .then(function (n) {
                              e(ye(n, a, !1)).then(function (n) {
                                var r = n.filename,
                                  a = n.pages;
                                Object(ge.a)(ve.a.DOCUMENT_MERGED, {
                                  filename: r,
                                  pages: o.contentWindow.pagesExtracted,
                                }),
                                  e(h.a.closeElement(x.a.LOADING_MODAL)),
                                  t({ filename: r, pages: a });
                              });
                            })
                            .catch(function (t) {
                              e(h.a.closeElement(x.a.LOADING_MODAL)), n(t);
                            });
                      });
                    }),
                  )
                : n.length &&
                  Array.from(n).forEach(function (e) {
                    Me(ye(e, o));
                  });
            else if (C && !i && null !== ee) {
              var c = oe ? ee + 1 : ee + 2,
                u = y.some(function (e) {
                  return e === l;
                })
                  ? y.map(function (e) {
                      return e + 1;
                    })
                  : [v];
              (z.current =
                c -
                u.filter(function (e) {
                  return e < c;
                }).length),
                b.a.movePages(u, c);
              for (var s = [], d = 0; d < u.length; d++) s.push(z.current + d);
              Object(ge.a)(ve.a.THUMBNAIL_DROPPED, {
                pageNumbersBeforeMove: u,
                pagesNumbersAfterMove: s,
                numberOfPagesMoved: s.length,
              });
            }
            te(null), se(!1);
          },
          nt = function (e, t, n) {
            rt(e) ||
              at(e) ||
              ((H.current[e] = { element: t, loaded: !1 }),
              _.current.push({ pageIndex: e, id: n }));
          },
          ot = function (e) {
            var t = lt(e);
            -1 !== t && _.current.splice(t, 1);
          },
          rt = function (e) {
            var t;
            return null === (t = H.current[e]) || void 0 === t
              ? void 0
              : t.loaded;
          },
          at = function (e) {
            return -1 !== lt(e);
          },
          it = function (e) {
            var t = lt(e);
            -1 !== t &&
              (b.a.cancelLoadThumbnail(_.current[t].id),
              _.current.splice(t, 1));
          },
          lt = function (e) {
            return _.current.findIndex(function (t) {
              return t.pageIndex === e;
            });
          },
          ct = function (e) {
            var t, n;
            it(e);
            var o =
              null === (t = H.current[e]) ||
              void 0 === t ||
              null === (n = t.element) ||
              void 0 === n
                ? void 0
                : n.querySelectorAll("canvas");
            null != o &&
              o.length &&
              o.forEach(function (e) {
                (e.height = 0), (e.width = 0);
              }),
              _e[e] && _e[e].cancel(),
              (H.current[e] = null);
          },
          ut = function (e) {
            var n = e.index,
              o = e.key,
              r = e.style,
              a = d()({ columnsOfThumbnails: ie > 1, row: !0 }),
              l = !(j || P);
            return i.a.createElement(
              "div",
              {
                role: "row",
                "aria-label": "row",
                className: a,
                key: o,
                style: r,
              },
              new Array(ie).fill().map(function (e, o) {
                var r = n * ie + o,
                  a = l && (E || C),
                  c = a && ee === r;
                return r < De
                  ? i.a.createElement(
                      i.a.Fragment,
                      { key: r },
                      (ie > 1 || 0 === r) &&
                        c &&
                        oe &&
                        i.a.createElement("div", {
                          key: "placeholder1-".concat(r),
                          className: "thumbnailPlaceholder",
                        }),
                      i.a.createElement(
                        "td",
                        {
                          ref: function (e) {
                            return (we.current[r] = e);
                          },
                          key: r,
                          role: "gridcell",
                          tabIndex: me === r ? 0 : -1,
                          "aria-current": me === r ? "page" : void 0,
                          onDragEnd: $e,
                          className: "cellThumbContainer",
                          onKeyDown: function (e) {
                            return He(e, r, ie);
                          },
                          onContextMenu: function (e) {
                            return (
                              L &&
                              ((n = r),
                              (t = e).preventDefault(),
                              b.a.setCurrentPage(n + 1),
                              y.includes(n) ||
                                Me(h.a.setSelectedPageThumbnails([n])),
                              void (
                                j ||
                                P ||
                                (Me(
                                  h.a.setFlyoutPosition({
                                    x: t.pageX,
                                    y: t.pageY,
                                  }),
                                ),
                                Me(h.a.openElements([x.a.PAGE_MANIPULATION])))
                              ))
                            );
                            var t, n;
                          },
                          onFocus: function (e) {
                            return (function (e, t) {
                              we.current &&
                                we.current.includes(e.target) &&
                                ze(we.current[t]);
                            })(e, r);
                          },
                        },
                        i.a.createElement(Y, {
                          ref: function (e) {
                            return (xe.current[r] = e);
                          },
                          isDraggable: a,
                          isSelected: y.includes(r),
                          index: r,
                          canLoad: W,
                          onLoad: nt,
                          onCancel: it,
                          onRemove: ct,
                          onDragStart: et,
                          onDragOver: Je,
                          onFinishLoading: ot,
                          updateAnnotations: Ye,
                          shouldShowControls: l,
                          thumbnailSize: Ae,
                          panelSelector: t,
                          parentKeyListener: function (e) {
                            return Ve(e, r);
                          },
                        }),
                      ),
                      c &&
                        !oe &&
                        i.a.createElement("div", {
                          key: "placeholder2-".concat(r),
                          className: "thumbnailPlaceholder",
                        }),
                    )
                  : null;
              }),
            );
          },
          st = function () {
            le(Math.min(16, Math.max(1, Math.floor(J / Ae))));
          },
          dt = A ? Number(Ae) + 50 : Number(Ae) + 80,
          mt = !(j || P),
          pt = { height: "".concat(25, "px") },
          ht = function (e, t) {
            var n = "1000" * Number(t);
            n < 100 && (n = 100), Se(n), st();
          };
        return i.a.createElement(
          i.a.Fragment,
          null,
          !S &&
            i.a.createElement(
              "div",
              {
                "data-element": "thumbnailsSizeSlider",
                className: "thumbnail-slider-container",
              },
              i.a.createElement(w.a, {
                img: "icon-zoom-thumb-out",
                title: "action.zoomOut",
                hideTooltipShortcut: !0,
                onClick: function () {
                  Ae - "50" > "50" && (Se(Ae - "50"), st());
                },
                dataElement: "zoomThumbOutButton",
              }),
              Re &&
                i.a.createElement(fe.a, {
                  dataElement: "thumbnailsSizeSlider",
                  property: "zoom",
                  displayProperty: "zoom",
                  min: 0,
                  max: 1,
                  step: 0.01,
                  value: Ae / 1e3,
                  getDisplayValue: function () {
                    return Ae;
                  },
                  onSliderChange: ht,
                  onStyleChange: ht,
                  shouldHideSliderTitle: !0,
                  shouldHideSliderValue: !0,
                }),
              !Re &&
                i.a.createElement("input", {
                  role: "slider",
                  type: "range",
                  "aria-label": "thumbnail size slider",
                  min: "100",
                  max: "1000",
                  value: Ae,
                  "aria-valuemin": "100",
                  "aria-valuemax": "1000",
                  "aria-valuenow": Ae,
                  onChange: function (e) {
                    Se(Number(e.target.value)), st();
                  },
                  step: "50",
                  className: "thumbnail-slider",
                  id: "thumbnailSize",
                }),
              i.a.createElement(w.a, {
                img: "icon-zoom-thumb-in",
                title: "action.zoomIn",
                hideTooltipShortcut: !0,
                onClick: function () {
                  Ae + Number("50") < 1001 && (Se(Ae + Number("50")), st());
                },
                dataElement: "zoomThumbInButton",
              }),
            ),
          i.a.createElement(
            u.a,
            {
              bounds: !0,
              onResize: function (e) {
                var t = e.bounds;
                $(t.height),
                  Q(t.width),
                  le(Math.min(16, Math.max(1, Math.floor(t.width / Ae))));
              },
              key: Ae,
            },
            function (e) {
              var n = e.measureRef;
              return i.a.createElement(
                "div",
                {
                  className: "Panel ThumbnailsPanel ".concat(t),
                  id: "virtualized-thumbnails-container",
                  "data-element": "thumbnailsPanel",
                  onDrop: tt,
                  ref: n,
                },
                i.a.createElement(
                  "div",
                  { className: "virtualized-thumbnails-container" },
                  ue
                    ? i.a.createElement("div", {
                        className: "thumbnailAutoScrollArea",
                        onDragOver: Ze,
                        style: pt,
                      })
                    : "",
                  i.a.createElement(c.c, {
                    ref: M,
                    height: q,
                    width: J,
                    rowHeight: dt,
                    rowCount: Math.ceil(De / ie),
                    rowRenderer: ut,
                    overscanRowCount: 3,
                    className: "thumbnailsList",
                    scrollToIndex: Math.floor((v - 1) / ie),
                    role: "grid",
                    "aria-label": R("component.thumbnailsPanel"),
                    tabIndex: -1,
                  }),
                  ue
                    ? i.a.createElement("div", {
                        className: "thumbnailAutoScrollArea",
                        onDragOver: Qe,
                        style: Ee(Ee({}, pt), {}, { bottom: "70px" }),
                      })
                    : "",
                ),
              );
            },
          ),
          i.a.createElement(he, {
            shouldShowControls: mt,
            parentElement: n || t,
          }),
        );
      };
      t.default = Ae;
    },
  },
]);
//# sourceMappingURL=chunk.39.js.map
