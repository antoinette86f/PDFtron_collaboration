/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [10],
    {
      591: function (ya, ua, n) {
        n.r(ua);
        var pa = n(601),
          na = n(148),
          oa = n(57),
          ka = n(98);
        ya = (function () {
          function ia() {
            this.cc = this.kg = this.Yc = this.sd = null;
            this.Eg = !1;
          }
          ia.prototype.clear = function () {
            Object(oa.b)(this.sd);
            this.Yc = "";
            Object(oa.b)(this.kg);
            Object(oa.b)(this.cc);
            this.Eg = !1;
          };
          ia.prototype.Be = function () {
            this.sd = [];
            this.kg = [];
            this.cc = [];
            this.Eg = !1;
          };
          ia.prototype.SH = function (fa) {
            for (var x = "", y = 0, r, h, f; y < fa.length; )
              (r = fa.charCodeAt(y)),
                9 === r
                  ? ((x += String.fromCharCode(10)), y++)
                  : 128 > r
                    ? ((x += String.fromCharCode(r)), y++)
                    : 191 < r && 224 > r
                      ? ((h = fa.charCodeAt(y + 1)),
                        (x += String.fromCharCode(((r & 31) << 6) | (h & 63))),
                        (y += 2))
                      : ((h = fa.charCodeAt(y + 1)),
                        (f = fa.charCodeAt(y + 2)),
                        (x += String.fromCharCode(
                          ((r & 15) << 12) | ((h & 63) << 6) | (f & 63),
                        )),
                        (y += 3));
            return x;
          };
          ia.prototype.initData = function (fa) {
            this.sd = [];
            this.kg = [];
            this.cc = [];
            this.Eg = !1;
            try {
              var x = new ka.a(fa);
              this.Yc = "";
              x.Ya();
              if (!x.advance()) return;
              var y = x.current.textContent;
              this.Yc = y = this.SH(y);
              Object(oa.b)(this.kg);
              x.advance();
              y = x.current.textContent;
              for (var r = y.split(","), h = Object(na.a)(r); h.gq(); ) {
                var f = h.current;
                try {
                  var e = parseInt(f.trim(), 10);
                  this.kg.push(e);
                } catch (ba) {}
              }
              Object(oa.b)(this.sd);
              x.advance();
              y = x.current.textContent;
              r = y.split(",");
              for (var b = Object(na.a)(r); b.gq(); ) {
                f = b.current;
                try {
                  (e = parseFloat(f.trim())), this.sd.push(e);
                } catch (ba) {}
              }
              Object(oa.b)(this.cc);
              x.advance();
              y = x.current.textContent;
              r = y.split(",");
              fa = [];
              x = [];
              y = 0;
              for (var a = Object(na.a)(r); a.gq(); ) {
                f = a.current;
                switch (f) {
                  case "Q":
                    y = 1;
                    break;
                  case "R":
                    y = 2;
                    break;
                  case "S":
                    y = 3;
                    break;
                  default:
                    y = 0;
                }
                if (y) fa.push(0), x.push(y);
                else
                  try {
                    (e = parseFloat(f.trim())), fa.push(e), x.push(y);
                  } catch (ba) {
                    return;
                  }
              }
              y = 0;
              var w = fa.length;
              h = a = f = r = void 0;
              for (var z = (b = 0), aa = 0; aa < w; ) {
                var ca = x[aa];
                if (0 < ca)
                  (y = ca),
                    ++aa,
                    3 === y && ((b = fa[aa]), (z = fa[aa + 1]), (aa += 2));
                else if (1 === y)
                  for (e = 0; 8 > e; ++e) this.cc.push(fa[aa++]);
                else
                  2 === y
                    ? ((r = fa[aa++]),
                      (f = fa[aa++]),
                      (a = fa[aa++]),
                      (h = fa[aa++]),
                      this.cc.push(r),
                      this.cc.push(f),
                      this.cc.push(a),
                      this.cc.push(f),
                      this.cc.push(a),
                      this.cc.push(h),
                      this.cc.push(r),
                      this.cc.push(h))
                    : 3 === y &&
                      ((r = fa[aa++]),
                      (f = b),
                      (a = fa[aa++]),
                      (h = z),
                      this.cc.push(r),
                      this.cc.push(f),
                      this.cc.push(a),
                      this.cc.push(f),
                      this.cc.push(a),
                      this.cc.push(h),
                      this.cc.push(r),
                      this.cc.push(h));
              }
            } catch (ba) {
              return;
            }
            this.Yc.length &&
              this.Yc.length === this.kg.length &&
              8 * this.Yc.length === this.cc.length &&
              (this.Eg = !0);
          };
          ia.prototype.ready = function () {
            return this.Eg;
          };
          ia.prototype.dD = function () {
            var fa = new pa.a();
            if (!this.sd.length)
              return fa.sj(this.sd, -1, this.Yc, this.cc, 0), fa;
            fa.sj(this.sd, 1, this.Yc, this.cc, 1);
            return fa;
          };
          ia.prototype.Uf = function () {
            return this.cc;
          };
          ia.prototype.getData = function () {
            return {
              m_Struct: this.sd,
              m_Str: this.Yc,
              m_Offsets: this.kg,
              m_Quads: this.cc,
              m_Ready: this.Eg,
            };
          };
          return ia;
        })();
        ua["default"] = ya;
      },
      601: function (ya, ua, n) {
        var pa = n(112),
          na = n(69),
          oa = n(613);
        ya = (function () {
          function ka() {
            this.Jf = 0;
            this.ac = this.Pa = this.Wg = null;
            this.be = 0;
            this.If = null;
          }
          ka.prototype.Be = function () {
            this.Jf = -1;
            this.be = 0;
            this.If = [];
          };
          ka.prototype.sj = function (ia, fa, x, y, r) {
            this.Jf = fa;
            this.be = r;
            this.If = [];
            this.Wg = ia;
            this.Pa = x;
            this.ac = y;
          };
          ka.prototype.Kd = function (ia) {
            return this.Jf === ia.Jf;
          };
          ka.prototype.Bn = function () {
            return Math.abs(this.Wg[this.Jf]);
          };
          ka.prototype.Zp = function () {
            return 0 < this.Wg[this.Jf];
          };
          ka.prototype.lj = function () {
            var ia = this.Zp() ? 6 : 10,
              fa = new oa.a();
            fa.sj(this.Wg, this.Jf + ia, this.Jf, this.Pa, this.ac, 1);
            return fa;
          };
          ka.prototype.g8 = function (ia) {
            if (0 > ia || ia >= this.Bn())
              return (
                (ia = new oa.a()),
                ia.sj(this.Wg, -1, -1, this.Pa, this.ac, 0),
                ia
              );
            var fa = this.Zp() ? 6 : 10,
              x = this.Zp() ? 5 : 11,
              y = new oa.a();
            y.sj(
              this.Wg,
              this.Jf + fa + x * ia,
              this.Jf,
              this.Pa,
              this.ac,
              1 + ia,
            );
            return y;
          };
          ka.prototype.lk = function () {
            var ia = this.Jf + parseInt(this.Wg[this.Jf + 1], 10);
            if (ia >= this.Wg.length)
              return (
                (ia = new ka()), ia.sj(this.Wg, -1, this.Pa, this.ac, 0), ia
              );
            var fa = new ka();
            fa.sj(this.Wg, ia, this.Pa, this.ac, this.be + 1);
            return fa;
          };
          ka.prototype.getBBox = function (ia) {
            if (this.Zp())
              (ia.x1 = this.Wg[this.Jf + 2 + 0]),
                (ia.y1 = this.Wg[this.Jf + 2 + 1]),
                (ia.x2 = this.Wg[this.Jf + 2 + 2]),
                (ia.y2 = this.Wg[this.Jf + 2 + 3]);
            else {
              for (
                var fa = 1.79769e308,
                  x = pa.a.MIN,
                  y = 1.79769e308,
                  r = pa.a.MIN,
                  h = 0;
                4 > h;
                ++h
              ) {
                var f = this.Wg[this.Jf + 2 + 2 * h],
                  e = this.Wg[this.Jf + 2 + 2 * h + 1];
                fa = Math.min(fa, f);
                x = Math.max(x, f);
                y = Math.min(y, e);
                r = Math.max(r, e);
              }
              ia.x1 = fa;
              ia.y1 = y;
              ia.x2 = x;
              ia.y2 = r;
            }
          };
          ka.prototype.zK = function () {
            if (this.If.length) return this.If[0];
            var ia = new na.a(),
              fa = new na.a(),
              x = new oa.a();
            x.Be();
            var y = this.lj(),
              r = new oa.a();
            r.Be();
            for (var h = this.lj(); !h.Kd(x); h = h.nj()) r = h;
            x = Array(8);
            h = Array(8);
            y.Cg(0, x);
            ia.x = (x[0] + x[2] + x[4] + x[6]) / 4;
            ia.y = (x[1] + x[3] + x[5] + x[7]) / 4;
            r.Cg(r.An() - 1, h);
            fa.x = (h[0] + h[2] + h[4] + h[6]) / 4;
            fa.y = (h[1] + h[3] + h[5] + h[7]) / 4;
            0.01 > Math.abs(ia.x - fa.x) &&
              0.01 > Math.abs(ia.y - fa.y) &&
              this.If.push(0);
            ia = Math.atan2(fa.y - ia.y, fa.x - ia.x);
            ia *= 180 / 3.1415926;
            0 > ia && (ia += 360);
            this.If.push(ia);
            return 0;
          };
          return ka;
        })();
        ua.a = ya;
      },
      613: function (ya, ua, n) {
        var pa = n(601),
          na = n(121),
          oa = n(112);
        ya = (function () {
          function ka() {
            this.Ro = this.$e = 0;
            this.ac = this.Pa = this.sd = null;
            this.be = 0;
          }
          ka.prototype.Be = function () {
            this.Ro = this.$e = -1;
            this.be = 0;
          };
          ka.prototype.sj = function (ia, fa, x, y, r, h) {
            this.$e = fa;
            this.Ro = x;
            this.sd = ia;
            this.Pa = y;
            this.ac = r;
            this.be = h;
          };
          ka.prototype.Kd = function (ia) {
            return this.$e === ia.$e;
          };
          ka.prototype.An = function () {
            return parseInt(this.sd[this.$e], 10);
          };
          ka.prototype.Pl = function () {
            return parseInt(this.sd[this.$e + 2], 10);
          };
          ka.prototype.qj = function () {
            return parseInt(this.sd[this.$e + 1], 10);
          };
          ka.prototype.Zp = function () {
            return 0 < this.sd[this.Ro];
          };
          ka.prototype.axa = function () {
            return Math.abs(this.sd[this.Ro]);
          };
          ka.prototype.nj = function () {
            var ia = this.Zp(),
              fa = ia ? 5 : 11;
            if (this.$e >= this.Ro + (ia ? 6 : 10) + (this.axa() - 1) * fa)
              return (
                (fa = new ka()), fa.sj(this.sd, -1, -1, this.Pa, this.ac, 0), fa
              );
            ia = new ka();
            ia.sj(
              this.sd,
              this.$e + fa,
              this.Ro,
              this.Pa,
              this.ac,
              this.be + 1,
            );
            return ia;
          };
          ka.prototype.dwa = function (ia) {
            var fa = this.An();
            return 0 > ia || ia >= fa
              ? -1
              : parseInt(this.sd[this.$e + 1], 10) + ia;
          };
          ka.prototype.Cg = function (ia, fa) {
            ia = this.dwa(ia);
            if (!(0 > ia)) {
              var x = new pa.a();
              x.sj(this.sd, this.Ro, this.Pa, this.ac, 0);
              if (x.Zp()) {
                var y = new na.a();
                x.getBBox(y);
                x = y.y1 < y.y2 ? y.y1 : y.y2;
                y = y.y1 > y.y2 ? y.y1 : y.y2;
                ia *= 8;
                fa[0] = this.ac[ia];
                fa[1] = x;
                fa[2] = this.ac[ia + 2];
                fa[3] = fa[1];
                fa[4] = this.ac[ia + 4];
                fa[5] = y;
                fa[6] = this.ac[ia + 6];
                fa[7] = fa[5];
              } else for (ia *= 8, x = 0; 8 > x; ++x) fa[x] = this.ac[ia + x];
            }
          };
          ka.prototype.Tf = function (ia) {
            var fa = new pa.a();
            fa.sj(this.sd, this.Ro, this.Pa, this.ac, 0);
            if (fa.Zp()) {
              var x = this.sd[this.$e + 3],
                y = this.sd[this.$e + 4];
              if (x > y) {
                var r = x;
                x = y;
                y = r;
              }
              r = new na.a();
              fa.getBBox(r);
              fa = r.y1 < r.y2 ? r.y1 : r.y2;
              r = r.y1 > r.y2 ? r.y1 : r.y2;
              ia[0] = x;
              ia[1] = fa;
              ia[2] = y;
              ia[3] = fa;
              ia[4] = y;
              ia[5] = r;
              ia[6] = x;
              ia[7] = r;
            } else
              for (x = this.$e + 3, y = 0; 8 > y; ++y) ia[y] = this.sd[x + y];
          };
          ka.prototype.getBBox = function (ia) {
            var fa = new pa.a();
            fa.sj(this.sd, this.Ro, this.Pa, this.ac, 0);
            if (fa.Zp()) {
              var x = this.sd[this.$e + 3],
                y = this.sd[this.$e + 4];
              if (x > y) {
                var r = x;
                x = y;
                y = r;
              }
              r = new na.a();
              fa.getBBox(r);
              fa = r.y1 < r.y2 ? r.y1 : r.y2;
              r = r.y1 > r.y2 ? r.y1 : r.y2;
              ia[0] = x;
              ia[1] = fa;
              ia[2] = y;
              ia[3] = r;
            } else {
              x = 1.79769e308;
              y = oa.a.MIN;
              fa = 1.79769e308;
              r = oa.a.MIN;
              for (var h = this.$e + 3, f = 0; 4 > f; ++f) {
                var e = this.sd[h + 2 * f],
                  b = this.sd[h + 2 * f + 1];
                x = Math.min(x, e);
                y = Math.max(y, e);
                fa = Math.min(fa, b);
                r = Math.max(r, b);
              }
              ia[0] = x;
              ia[1] = fa;
              ia[2] = y;
              ia[3] = r;
            }
          };
          return ka;
        })();
        ua.a = ya;
      },
    },
  ]);
}).call(this || window);
