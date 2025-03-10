/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [9],
    {
      587: function (ya, ua, n) {
        function pa(ha) {
          ha.Ya();
          ha.advance();
          var ea = ha.current.textContent;
          ha.Jb();
          return ea;
        }
        function na(ha) {
          var ea = [];
          for (ha.Ya(); ha.advance(); ) {
            var ma = ha.pb();
            "field" === ma
              ? ea.push(String(ha.ia("name")))
              : Object(e.i)("unrecognised field list element: ".concat(ma));
          }
          ha.Jb();
          return ea;
        }
        function oa(ha, ea) {
          return ea ? "false" !== ha : "true" === ha;
        }
        function ka(ha, ea) {
          var ma = ha.pb();
          switch (ma) {
            case "javascript":
              return { name: "JavaScript", javascript: ha.current.textContent };
            case "uri":
              return { name: "URI", uri: ha.ia("uri") };
            case "goto":
              ma = null;
              ha.Ya();
              if (ha.advance()) {
                var la = ha.ia("fit");
                ma = { page: ha.ia("page"), fit: la };
                if ("0" === ma.page)
                  Object(e.i)("null page encountered in dest");
                else
                  switch (((ea = ea(Number(ma.page))), la)) {
                    case "Fit":
                    case "FitB":
                      break;
                    case "FitH":
                    case "FitBH":
                      ma.top = ea.Aa({ x: 0, y: ha.ia("top") || 0 }).y;
                      break;
                    case "FitV":
                    case "FitBV":
                      ma.left = ea.Aa({ x: ha.ia("left") || 0, y: 0 }).x;
                      break;
                    case "FitR":
                      la = ea.Aa({
                        x: ha.ia("left") || 0,
                        y: ha.ia("top") || 0,
                      });
                      ea = ea.Aa({
                        x: ha.ia("right") || 0,
                        y: ha.ia("bottom") || 0,
                      });
                      ea = new w.d(la.x, la.y, ea.x, ea.y);
                      ma.top = ea.y1;
                      ma.left = ea.x1;
                      ma.bottom = ea.y2;
                      ma.right = ea.x2;
                      break;
                    case "XYZ":
                      la = ea.Aa({
                        x: ha.ia("left") || 0,
                        y: ha.ia("top") || 0,
                      });
                      ma.top = la.y;
                      ma.left = la.x;
                      ma.zoom = ha.ia("zoom") || 0;
                      break;
                    default:
                      Object(e.i)("unknown dest fit: ".concat(la));
                  }
                ma = { name: "GoTo", dest: ma };
              } else Object(e.i)("missing dest in GoTo action");
              ha.Jb();
              return ma;
            case "submit-form":
              ma = {
                name: "SubmitForm",
                url: ha.ia("url"),
                format: ha.ia("format"),
                method: ha.ia("method") || "POST",
                exclude: oa(ha.ia("exclude"), !1),
              };
              ea = ha.ia("flags");
              ma.flags = ea ? ea.split(" ") : [];
              for (ha.Ya(); ha.advance(); )
                switch (((ea = ha.pb()), ea)) {
                  case "fields":
                    ma.fields = na(ha);
                    break;
                  default:
                    Object(e.i)("unrecognised submit-form child: ".concat(ea));
                }
              ha.Jb();
              return ma;
            case "reset-form":
              ma = { name: "ResetForm", exclude: oa(ha.ia("exclude"), !1) };
              for (ha.Ya(); ha.advance(); )
                switch (((ea = ha.pb()), ea)) {
                  case "fields":
                    ma.fields = na(ha);
                    break;
                  default:
                    Object(e.i)("unrecognised reset-form child: ".concat(ea));
                }
              ha.Jb();
              return ma;
            case "hide":
              ma = { name: "Hide", hide: oa(ha.ia("hide"), !0) };
              for (ha.Ya(); ha.advance(); )
                switch (((ea = ha.pb()), ea)) {
                  case "fields":
                    ma.fields = na(ha);
                    break;
                  default:
                    Object(e.i)("unrecognised hide child: ".concat(ea));
                }
              ha.Jb();
              return ma;
            case "named":
              return { name: "Named", action: ha.ia("name") };
            default:
              Object(e.i)("Encountered unexpected action type: ".concat(ma));
          }
          return null;
        }
        function ia(ha, ea, ma) {
          var la = {};
          for (ha.Ya(); ha.advance(); ) {
            var ja = ha.pb();
            switch (ja) {
              case "action":
                ja = ha.ia("trigger");
                if (ea ? -1 !== ea.indexOf(ja) : 1) {
                  la[ja] = [];
                  for (ha.Ya(); ha.advance(); ) {
                    var sa = ka(ha, ma);
                    Object(b.isNull)(sa) || la[ja].push(sa);
                  }
                  ha.Jb();
                } else
                  Object(e.i)(
                    "encountered unexpected trigger on field: ".concat(ja),
                  );
                break;
              default:
                Object(e.i)("encountered unknown action child: ".concat(ja));
            }
          }
          ha.Jb();
          return la;
        }
        function fa(ha) {
          return new z.a(
            ha.ia("r") || 0,
            ha.ia("g") || 0,
            ha.ia("b") || 0,
            ha.ia("a") || 1,
          );
        }
        function x(ha, ea) {
          var ma = ha.ia("name"),
            la = ha.ia("type") || "Type1",
            ja = ha.ia("size"),
            sa = ea.Aa({ x: 0, y: 0 });
          ja = ea.Aa({ x: Number(ja), y: 0 });
          ea = sa.x - ja.x;
          sa = sa.y - ja.y;
          ma = {
            name: ma,
            type: la,
            size: Math.sqrt(ea * ea + sa * sa) || 0,
            strokeColor: [0, 0, 0],
            fillColor: [0, 0, 0],
          };
          for (ha.Ya(); ha.advance(); )
            switch (((la = ha.pb()), la)) {
              case "stroke-color":
                ma.strokeColor = fa(ha);
                break;
              case "fill-color":
                ma.fillColor = fa(ha);
                break;
              default:
                Object(e.i)("unrecognised font child: ".concat(la));
            }
          ha.Jb();
          return ma;
        }
        function y(ha) {
          var ea = [];
          for (ha.Ya(); ha.advance(); ) {
            var ma = ha.pb();
            switch (ma) {
              case "option":
                ma = ea;
                var la = ma.push;
                var ja = ha;
                ja = {
                  value: ja.ia("value"),
                  displayValue: ja.ia("display-value") || void 0,
                };
                la.call(ma, ja);
                break;
              default:
                Object(e.i)("unrecognised options child: ".concat(ma));
            }
          }
          ha.Jb();
          return ea;
        }
        function r(ha, ea) {
          var ma = ha.ia("name"),
            la = {
              type: ha.ia("type"),
              quadding: ha.ia("quadding") || "Left-justified",
              maxLen: ha.ia("max-len") || -1,
            },
            ja = ha.ia("flags");
          Object(b.isString)(ja) && (la.flags = ja.split(" "));
          for (ha.Ya(); ha.advance(); )
            switch (((ja = ha.pb()), ja)) {
              case "actions":
                la.actions = ia(ha, ["C", "F", "K", "V"], function () {
                  return ea;
                });
                break;
              case "default-value":
                la.defaultValue = pa(ha);
                break;
              case "font":
                la.font = x(ha, ea);
                break;
              case "options":
                la.options = y(ha);
                break;
              default:
                Object(e.i)("unknown field child: ".concat(ja));
            }
          ha.Jb();
          return new window.da.Annotations.la.wa(ma, la);
        }
        function h(ha, ea) {
          switch (ha.type) {
            case "Tx":
              try {
                if (Object(ca.c)(ha.actions))
                  return new a.a.DatePickerWidgetAnnotation(ha, ea);
              } catch (ma) {
                Object(e.i)(ma);
              }
              return new a.a.TextWidgetAnnotation(ha, ea);
            case "Ch":
              return ha.flags.get(ba.WidgetFlags.COMBO)
                ? new a.a.ChoiceWidgetAnnotation(ha, ea)
                : new a.a.ListWidgetAnnotation(ha, ea);
            case "Btn":
              return ha.flags.get(ba.WidgetFlags.PUSH_BUTTON)
                ? new a.a.PushButtonWidgetAnnotation(ha, ea)
                : ha.flags.get(ba.WidgetFlags.RADIO)
                  ? new a.a.RadioButtonWidgetAnnotation(ha, ea)
                  : new a.a.CheckButtonWidgetAnnotation(ha, ea);
            case "Sig":
              return new a.a.SignatureWidgetAnnotation(ha, ea);
            default:
              Object(e.i)("Unrecognised field type: ".concat(ha.type));
          }
          return null;
        }
        function f(ha, ea, ma, la) {
          var ja = [],
            sa = {};
          ha.Ya();
          var qa = [],
            ra = {},
            ta = [];
          Object(aa.a)(
            function () {
              if (ha.advance()) {
                var va = ha.pb();
                switch (va) {
                  case "calculation-order":
                    qa = "calculation-order" === ha.pb() ? na(ha) : [];
                    break;
                  case "document-actions":
                    ra = ia(ha, ["Init", "Open"], ea);
                    break;
                  case "pages":
                    va = [];
                    for (ha.Ya(); ha.advance(); ) {
                      var Ba = ha.pb();
                      switch (Ba) {
                        case "page":
                          Ba = va;
                          var Ca = Ba.push,
                            Aa = ha,
                            Ia = ea,
                            Ea = { number: Aa.ia("number") };
                          for (Aa.Ya(); Aa.advance(); ) {
                            var La = Aa.pb();
                            switch (La) {
                              case "actions":
                                Ea.actions = ia(Aa, ["O", "C"], Ia);
                                break;
                              default:
                                Object(e.i)(
                                  "unrecognised page child: ".concat(La),
                                );
                            }
                          }
                          Aa.Jb();
                          Ca.call(Ba, Ea);
                          break;
                        default:
                          Object(e.i)("unrecognised page child: ".concat(Ba));
                      }
                    }
                    ha.Jb();
                    ta = va;
                    break;
                  case "field":
                    Ba = r(ha, ea(1));
                    sa[Ba.name] = Ba;
                    break;
                  case "widget":
                    va = {
                      border: { style: "Solid", width: 1 },
                      backgroundColor: [],
                      fieldName: ha.ia("field"),
                      page: ha.ia("page"),
                      index: ha.ia("index") || 0,
                      rotation: ha.ia("rotation") || 0,
                      flags: [],
                      isImporting: !0,
                    };
                    (Ba = ha.ia("appearance")) && (va.appearance = Ba);
                    (Ba = ha.ia("flags")) && (va.flags = Ba.split(" "));
                    for (ha.Ya(); ha.advance(); )
                      switch (((Ba = ha.pb()), Ba)) {
                        case "rect":
                          Ca = ha;
                          Aa = ea(Number(va.page));
                          Ba = Aa.Aa({
                            x: Ca.ia("x1") || 0,
                            y: Ca.ia("y1") || 0,
                          });
                          Ca = Aa.Aa({
                            x: Ca.ia("x2") || 0,
                            y: Ca.ia("y2") || 0,
                          });
                          Ba = new w.d(Ba.x, Ba.y, Ca.x, Ca.y);
                          Ba.normalize();
                          va.rect = {
                            x1: Ba.x1,
                            y1: Ba.y1,
                            x2: Ba.x2,
                            y2: Ba.y2,
                          };
                          break;
                        case "border":
                          Ba = ha;
                          Ca = {
                            style: Ba.ia("style") || "Solid",
                            width: Ba.ia("width") || 1,
                            color: [0, 0, 0],
                          };
                          for (Ba.Ya(); Ba.advance(); )
                            switch (((Aa = Ba.pb()), Aa)) {
                              case "color":
                                Ca.color = fa(Ba);
                                break;
                              default:
                                Object(e.i)(
                                  "unrecognised border child: ".concat(Aa),
                                );
                            }
                          Ba.Jb();
                          va.border = Ca;
                          break;
                        case "background-color":
                          va.backgroundColor = fa(ha);
                          break;
                        case "actions":
                          va.actions = ia(
                            ha,
                            "E X D U Fo Bl PO PC PV PI".split(" "),
                            ea,
                          );
                          break;
                        case "appearances":
                          Ba = ha;
                          Ca = Object(ca.b)(va, "appearances");
                          for (Ba.Ya(); Ba.advance(); )
                            if (((Aa = Ba.pb()), "appearance" === Aa)) {
                              Aa = Ba.ia("name");
                              Ia = Object(ca.b)(Ca, Aa);
                              Aa = Ba;
                              for (Aa.Ya(); Aa.advance(); )
                                switch (((Ea = Aa.pb()), Ea)) {
                                  case "Normal":
                                    Object(ca.b)(Ia, "Normal").data =
                                      Aa.current.textContent;
                                    break;
                                  default:
                                    Object(e.i)(
                                      "unexpected appearance state: ",
                                      Ea,
                                    );
                                }
                              Aa.Jb();
                            } else
                              Object(e.i)(
                                "unexpected appearances child: ".concat(Aa),
                              );
                          Ba.Jb();
                          break;
                        case "extra":
                          Ba = ha;
                          Ca = ea;
                          Aa = {};
                          for (Ba.Ya(); Ba.advance(); )
                            switch (((Ia = Ba.pb()), Ia)) {
                              case "font":
                                Aa.font = x(Ba, Ca(1));
                                break;
                              default:
                                Object(e.i)(
                                  "unrecognised extra child: ".concat(Ia),
                                );
                            }
                          Ba.Jb();
                          Ba = Aa;
                          Ba.font && (va.font = Ba.font);
                          break;
                        case "captions":
                          Ca = ha;
                          Ba = {};
                          (Aa = Ca.ia("Normal")) && (Ba.Normal = Aa);
                          (Aa = Ca.ia("Rollover")) && (Ba.Rollover = Aa);
                          (Ca = Ca.ia("Down")) && (Ba.Down = Ca);
                          va.captions = Ba;
                          break;
                        default:
                          Object(e.i)("unrecognised widget child: ".concat(Ba));
                      }
                    ha.Jb();
                    (Ba = sa[va.fieldName])
                      ? ((va = h(Ba, va)), ja.push(va))
                      : Object(e.i)(
                          "ignoring widget with no corresponding field data: ".concat(
                            va.fieldName,
                          ),
                        );
                    break;
                  default:
                    Object(e.i)(
                      "Unknown element encountered in PDFInfo: ".concat(va),
                    );
                }
                return !0;
              }
              return !1;
            },
            function () {
              ha.Jb();
              ma({
                calculationOrder: qa,
                widgets: ja,
                fields: sa,
                documentActions: ra,
                pages: ta,
                custom: [],
              });
            },
            la,
          );
        }
        n.r(ua);
        n.d(ua, "parse", function () {
          return f;
        });
        var e = n(3),
          b = n(1);
        n.n(b);
        var a = n(151),
          w = n(4),
          z = n(10),
          aa = n(28),
          ca = n(131),
          ba = n(13);
      },
    },
  ]);
}).call(this || window);
