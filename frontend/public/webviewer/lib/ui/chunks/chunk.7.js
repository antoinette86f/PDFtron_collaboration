(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    1445: function (e, t, n) {
      "use strict";
      var o = n(1);
      t.a = function (e) {
        var t = window.Core.Annotations.FreeTextAnnotation;
        if (e instanceof t && e.getAutoSizeType() !== t.AutoSizeTypes.NONE) {
          var n = o.a.getDocument(),
            a = e.PageNumber,
            i = n.getPageInfo(a),
            g = n.getPageMatrix(a),
            r = n.getPageRotation(a);
          e.fitText(i, g, r);
        }
      };
    },
  },
]);
//# sourceMappingURL=chunk.7.js.map
