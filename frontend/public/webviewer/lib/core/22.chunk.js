/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [22],
    {
      489: function (ja, ea, e) {
        function z(e) {
          return Object(Pa.b)(void 0, void 0, void 0, function () {
            var f, h, n, r, w, x, y, z, aa, ba, ca;
            return Object(Pa.d)(this, function (ea) {
              switch (ea.label) {
                case 0:
                  return (
                    (f = e.xb),
                    (h = e.Dn),
                    (n = xb.getDocument()),
                    (r = [1]),
                    [4, Object(Za.c)(h, { extension: "pdf" })]
                  );
                case 1:
                  return (
                    (w = ea.ba()),
                    (x = xb.pa()),
                    (aa = (z = $a.a).N1),
                    [4, w.iy()]
                  );
                case 2:
                  return (
                    (y = aa.apply(z, [ea.ba().xfdfString, f])),
                    (ba = !0),
                    [4, n.Zf(w, r, f, ba)]
                  );
                case 3:
                  return ea.ba(), [4, n.zg([f + 1], ba)];
                case 4:
                  return (
                    ea.ba(),
                    (ca = x.mb().filter(function (e) {
                      return e.HF() && e.PageNumber === f;
                    })),
                    x.Ye(ca, { force: !0, source: "contentEditTool" }),
                    [4, x.tF(y)]
                  );
                case 5:
                  return (
                    ea.ba(),
                    mb || (xb.getDocument().SG(), xb.pA(f), xb.Yd()),
                    [2]
                  );
              }
            });
          });
        }
        function fa(e) {
          if (e) return ia(e.contents);
          Object(Wa.g)("Unable to extract document content");
        }
        function ia(e) {
          e = new DOMParser()
            .parseFromString(e, "text/html")
            .documentElement.querySelector("body");
          e.querySelectorAll("p").forEach(function (e) {
            e.querySelectorAll("span").forEach(function (e) {
              var f = e.getAttribute("style");
              f = ha(f, e.innerHTML);
              e.innerHTML = f;
            });
            var f = e.getAttribute("style"),
              h = e.innerHTML.Uh("<br>", "");
            e.innerHTML = ha(f, h);
          });
          return e.innerHTML.trim();
        }
        function ha(e, f) {
          if (null === e || void 0 === e ? 0 : e.includes("bold"))
            f = "<strong>" + f + "</strong>";
          if (null === e || void 0 === e ? 0 : e.includes("italic"))
            f = "<em>" + f + "</em>";
          if (
            (null === e || void 0 === e ? 0 : e.includes("underline:1;")) ||
            (null === e || void 0 === e
              ? 0
              : e.includes("text-decoration: underline"))
          )
            f = "<u>" + f + "</u>";
          return f;
        }
        function ca(e) {
          if (
            ["STRONG", "EM", "U"].includes(e.tagName) &&
            null !== e.getAttribute("style")
          ) {
            var f = document.createElement("span"),
              h = e.style.color;
            h = sa(h);
            f.setAttribute("style", "color:" + h);
            e.removeAttribute("style");
            f.innerHTML = e.innerHTML;
            e.innerHTML = "";
            e.appendChild(f);
          } else
            "SPAN" === e.tagName && null !== e.getAttribute("style")
              ? ((h = e.style.color),
                (h = sa(h)),
                e.setAttribute("style", "color:" + h))
              : "A" === e.tagName && e.removeAttribute("style");
        }
        function ba(e) {
          var f = xb.pa(),
            h = f.mb().filter(function (f) {
              return f.Ld() && f.PageNumber === e;
            });
          f.Ye(h, { force: !0, source: "contentEditTool" });
        }
        function y(e, f) {
          f.forEach(function (f) {
            Zb[e] || (Zb[e] = []);
            Zb[e].find(function (e) {
              return e.id === f.id;
            }) || Zb[e].push(f);
          });
        }
        function x(e, f) {
          f.forEach(function (f) {
            vb[e] || (vb[e] = []);
            vb[e].find(function (e) {
              return e.id === f.id;
            }) || vb[e].push(f);
          });
        }
        function w(e, f, n, w) {
          return Object(Pa.b)(void 0, void 0, void 0, function () {
            var x, y, z, aa, ba, ca, ea, ha, fa, ja, la, ka, oa, ma, pa, qa, Aa;
            return Object(Pa.d)(this, function (za) {
              switch (za.label) {
                case 0:
                  if (!e) return [2];
                  x = f.Uh("<p><br></p>", "");
                  y = r(x);
                  y = y.replace(
                    /<span style="color: var\(--text-color\);">(.*?)<\/span>/g,
                    "$1",
                  );
                  y = y.replace(/<span class="ql-cursor">(.*?)<\/span>/g, "");
                  z = e.Mc.id;
                  aa = e.PageNumber;
                  ba = Jb[aa];
                  ca = ba.galleys.find(function (e) {
                    return e.id === z;
                  });
                  ea = ia(ca.contents);
                  ha = na(aa, ba, ea, y, z);
                  if ("" === ha) return [3, 2];
                  fa = new TextEncoder();
                  ja = fa.encode(ha);
                  la = ja.buffer;
                  ka = Object(nb.c)() || "https://www.pdftron.com/webfonts/v2/";
                  oa = xb.getDocument();
                  return [4, oa.bd([aa], void 0, !0)];
                case 1:
                  return (
                    (ma = za.ba()),
                    (pa = h()),
                    Va.postMessage(
                      {
                        cmd: "importText",
                        pdfFile: ma,
                        pageNumber: aa,
                        webFontURL: ka,
                        galleyId: z,
                        importData: la,
                        tableData: pa,
                        isSearchReplace: n,
                        callbackMapId: w,
                      },
                      [la, pa],
                    ),
                    (qa = {}),
                    ca &&
                      ((Aa = ca.galleyBox),
                      (qa = {
                        top: Aa.top,
                        left: Aa.left,
                        bottom: Aa.bottom,
                        right: Aa.right,
                      })),
                    Object(Ya.C)(ea, y, qa),
                    [3, 3]
                  );
                case 2:
                  Object(Wa.g)("Unable to generate import XML"), (za.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        }
        function r(e) {
          var f = new DOMParser(),
            h = f.parseFromString(e, "text/xml");
          h.querySelector("parsererror") &&
            (h = f.parseFromString("<Root>" + e + "</Root>", "text/xml"));
          h.querySelectorAll("a").forEach(function (e) {
            var f = e.childNodes[0];
            Array.from(e.querySelectorAll("*")).find(function (e) {
              return "u" === e.tagName.toLowerCase();
            }) ||
              ((e = document.createElement("u")), f.after(e), e.appendChild(f));
          });
          return new XMLSerializer().serializeToString(h);
        }
        function h() {
          return new TextEncoder().encode("").buffer;
        }
        function f(e, f, n) {
          return Object(Pa.b)(void 0, void 0, void 0, function () {
            var r;
            return Object(Pa.d)(this, function () {
              r = h();
              Va.postMessage(
                {
                  cmd: "exportFile",
                  pageNumber: f,
                  performExport: n,
                  pdfFile: e,
                  tableData: r,
                },
                [e, r],
              );
              return [2];
            });
          });
        }
        function n(e, h, n) {
          return Object(Pa.b)(void 0, void 0, void 0, function () {
            var r;
            return Object(Pa.d)(this, function (w) {
              switch (w.label) {
                case 0:
                  return [4, e.bd([h], void 0, !0)];
                case 1:
                  return (r = w.ba()), f(r, h, n), [2];
              }
            });
          });
        }
        function aa(e, f, h) {
          return Object(Pa.b)(void 0, void 0, void 0, function () {
            return Object(Pa.d)(this, function () {
              ba(f);
              vb[f] = [];
              Zb[f] = [];
              n(e, f, h);
              return [2];
            });
          });
        }
        function ka(e) {
          return Object(Pa.b)(void 0, void 0, void 0, function () {
            return Object(Pa.d)(this, function () {
              Ob ||
                ((xb = e.Da),
                (Ob = new Promise(function (f, h) {
                  var n = window.Core.ContentEdit.getWorkerPath(),
                    r = window.Core.ContentEdit.getResourcePath();
                  Va = new Worker(n + "InfixServerModule.js");
                  Va.onmessage = function (n) {
                    la(n, f, h, e);
                  };
                  Va.postMessage({ cmd: "isReady", resourcePath: r });
                })));
              return [2, Ob];
            });
          });
        }
        function la(e, f, h, n) {
          return Object(Pa.b)(this, void 0, void 0, function () {
            var r, w, x, y, aa, ba, ca, ea, ha, fa, ia, ja, la;
            return Object(Pa.d)(this, function (ka) {
              switch (ka.label) {
                case 0:
                  r = e.data;
                  w = r.pageNumber;
                  x = r.cmd;
                  y = r.subCmd;
                  ba = x;
                  switch (ba) {
                    case "runCommand":
                      return [3, 1];
                    case "isReady":
                      return [3, 2];
                    case "initialiseInfixServer":
                      return [3, 4];
                    case "loadAvailableFonts":
                      return [3, 5];
                    case "exportFile":
                      return [3, 6];
                    case "insertNewTextBox":
                      return [3, 7];
                    case "importText":
                      return [3, 8];
                    case "transformObject":
                      return [3, 8];
                    case "alignParagraph":
                      return [3, 8];
                    case "deleteObject":
                      return [3, 9];
                    case "insertImage":
                      return [3, 10];
                    case "dumpTextBox":
                      return [3, 11];
                    case "renderGalleyArea":
                      return [3, 12];
                    case "renderEditGalley":
                      return [3, 13];
                  }
                  return [3, 14];
                case 1:
                  switch (y) {
                    case "Edit Page":
                      return Ka(r.resultsXML), [2, !1];
                    case "loadAvailableFonts":
                      return Ma(r.resultsXML), [2, !0];
                  }
                  return [3, 14];
                case 2:
                  return [4, Object(fb.b)()];
                case 3:
                  return (
                    (ca = ka.ba()),
                    Va.postMessage({ cmd: "initialiseInfixServer", l: ca }),
                    [3, 14]
                  );
                case 4:
                  return (
                    (ea = pa(r.resultsXML))
                      ? (f(),
                        (ha =
                          Object(nb.c)() ||
                          "https://www.pdftron.com/webfonts/v2/"),
                        Va.postMessage({
                          cmd: "loadAvailableFonts",
                          webFontURL: ha,
                        }))
                      : h("License key does not have content edit permission"),
                    [3, 14]
                  );
                case 5:
                  return Fa(r.resultsXML), [3, 14];
                case 6:
                  return (
                    r.exportPerformed
                      ? oa(w, r.exportXML, r.objectXML, r.resultsXML)
                      : ((aa = Jb[w]), ta(w, aa)),
                    wc.resolve(),
                    gb && gb[w] && gb[w].resolve(),
                    [3, 14]
                  );
                case 7:
                  return (
                    Ca(w, r.exportXML, r.contentHTML),
                    (aa = Jb[w]),
                    z({ xb: w, Dn: r.pdfBuffer, Kp: aa, Ru: r.id }),
                    [3, 14]
                  );
                case 8:
                  aa = Jb[w];
                  Ga(w, r.resultsXML);
                  z({
                    xb: w,
                    Dn: r.pdfBuffer,
                    Kp: aa,
                    Ru: r.id,
                    x_: r.isSearchReplace,
                  });
                  fa = r.isSearchReplace;
                  ia = r.callbackMapId;
                  if (fa && ia && Gc[ia]) Gc[ia]();
                  return [3, 14];
                case 9:
                  return (
                    (aa = Jb[w]),
                    Ga(w, r.resultsXML),
                    (aa.galleys = aa.galleys.filter(function (e) {
                      return e.id !== r.id;
                    })),
                    (aa.objects = aa.objects.filter(function (e) {
                      return e.id !== r.id;
                    })),
                    (ja = { xb: r.pageNumber, Dn: r.pdfBuffer, Kp: aa }),
                    z(ja),
                    [3, 14]
                  );
                case 10:
                  return (
                    (aa = Jb[w]),
                    Ga(w, r.resultsXML),
                    (la = {
                      xb: w,
                      Dn: r.pdfBuffer,
                      Kp: aa,
                      Ru: r.isText,
                      n_: !0,
                    }),
                    z(la),
                    [3, 14]
                  );
                case 11:
                  n.Bba(r.galleyId, r.resultsXML), (ka.label = 12);
                case 12:
                  return Qa(r), [2, !0];
                case 13:
                  Sa(r.galleyId, r.imageData), (ka.label = 14);
                case 14:
                  return [2];
              }
            });
          });
        }
        function ma(e, f, h, n, r) {
          this.id = e;
          this.pagecount = f;
          this.pageBBox = h;
          this.galleys = n;
          this.objects = r;
        }
        function wa(e, f) {
          this.family = e;
          this.variations = f;
        }
        function na(e, f, h, n, r) {
          var w = [],
            x = [];
          new DOMParser()
            .parseFromString(n, "text/html")
            .documentElement.querySelectorAll("p")
            .forEach(function (e, f) {
              w[f] = e.innerHTML;
              x[f] = {
                fontSize: e.style.fontSize,
                fontFamily: e.style.fontFamily,
                color: sa(e.style.color),
              };
            });
          h = new DOMParser().parseFromString(h, "text/html");
          var y = null;
          h.documentElement.querySelectorAll("p").forEach(function (e, f) {
            if (f < w.length) {
              var h = new DOMParser()
                .parseFromString(w[f], "text/html")
                .documentElement.querySelector("body");
              h.childNodes.forEach(function (e) {
                ca(e);
              });
              e.innerHTML = h.innerHTML;
              y = e.getAttribute("style");
              h = x[f].fontSize ? x[f].fontSize : e.style.fontSize;
              var n = x[f].fontFamily
                ? x[f].fontFamily.replace(/\s+/g, "").replace(/['"]+/g, "")
                : e.style.fontFamily;
              f = x[f].color ? x[f].color : null;
              y = y.replace(
                /(font:.*?;)/i,
                "font:normal normal " + h + " " + n + ";",
              );
              y = y.replace("Italic", "");
              y = y.replace("underline:1;", "underline:0;");
              y = y.replace(
                "text-decoration: underline;",
                "text-decoration: none;",
              );
              f && (y = y.replace(/(color:.*?;)/i, "color:" + f + ";"));
              e.setAttribute("style", y);
            } else e.remove();
          });
          for (
            n = h.documentElement.querySelectorAll("p").length;
            n < w.length;
            n++
          ) {
            var z = document.createElement("p");
            z.setAttribute("id", "0");
            var aa = new DOMParser()
              .parseFromString(w[n], "text/html")
              .documentElement.querySelector("body");
            aa.childNodes.forEach(function (e) {
              ca(e);
            });
            z.innerHTML = aa.innerHTML;
            null !== y && z.setAttribute("style", y);
            h.documentElement.querySelector("body").appendChild(z);
          }
          h = h.documentElement.querySelector("body").innerHTML;
          var ba = "";
          vb[e].forEach(function (e) {
            e.id === r && (ba = e);
          });
          if ("" === ba) return "";
          f = "<DOC id='" + f.id + "' pagecount='" + f.pagecount + "'>";
          f =
            f +
            ("<STORY galley_ids='" + r + "' pagenum='" + e + "'>") +
            ("<galleys>" + ba.galleysContents + "</galleys>");
          ba.contents = h;
          f = f + h + "\n</STORY>";
          return (f += "</DOC>");
        }
        function sa(e) {
          return e.startsWith("rgb(")
            ? "#" +
                e
                  .replace(/^[^\d]+/, "")
                  .replace(/[^\d]+$/, "")
                  .split(",")
                  .map(function (e) {
                    return ("00" + parseInt(e, 10).toString(16)).slice(-2);
                  })
                  .join("")
            : e;
        }
        function pa(e) {
          e = new Uint8Array(e);
          var f = new TextDecoder("utf-8").decode(e);
          e = !1;
          f = new DOMParser()
            .parseFromString(f, "text/xml")
            .getElementsByTagName("LicenseCheck");
          null !== f &&
            0 < f.length &&
            ((f = f[0].getElementsByTagName("Status")[0].innerHTML),
            "error" !== f && "ok" === f && (e = !0));
          return e;
        }
        function Ca(e, f) {
          f = new TextDecoder("utf-8").decode(f);
          f = new DOMParser()
            .parseFromString(f, "text/xml")
            .getElementsByTagName("STORY");
          var h = Array.prototype.slice.call(f)[0];
          f = h.getAttribute("galley_ids");
          var n = h.getAttribute("galley_oids"),
            r = Array.prototype.slice.call(h.getElementsByTagName("g"))[0],
            w = r.getAttribute("bbox").split(" ");
          w = new bb.c(
            parseFloat(w[0]),
            parseFloat(w[1]),
            parseFloat(w[2]),
            parseFloat(w[3]),
          );
          r = r.innerHTML;
          var x = Array.prototype.slice.call(
            h.getElementsByTagName("galleys"),
          )[0];
          x.parentNode.removeChild(x);
          h = ra(h.innerHTML).trim();
          f = new bb.a({
            id: f,
            pagenum: e,
            galleysContents: r,
            contents: h,
            galleyBox: w,
            oid: n,
          });
          n = Jb[e];
          n.galleys.push(f);
          Jb[e] = n;
          ta(e, n);
        }
        function ta(e, f) {
          x(e, f.galleys);
          y(e, f.objects);
        }
        function oa(e, f, h, n) {
          f = qa(f, h, n);
          Jb[e] = ua(e, f.aha, f.Kna, f.results);
          ta(e, Jb[e]);
        }
        function Aa(e) {
          var f = new TextDecoder("utf-8");
          e = new Uint8Array(e);
          return f.decode(e);
        }
        function qa(e, f, h) {
          e = Aa(e);
          f = Aa(f);
          h = Aa(h);
          return { aha: e, Kna: f, results: h };
        }
        function za(e, f) {
          e = parseFloat(e);
          return isNaN(f) || f < e ? e : f;
        }
        function ua(e, f, h, n) {
          var r;
          var w = new DOMParser();
          n = w.parseFromString(n, "text/xml");
          Array.prototype.slice
            .call(n.getElementsByTagName("BBox"))
            .forEach(function (e) {
              if ("CropBox" === e.getAttribute("Name")) {
                var f = parseFloat(
                    e.getElementsByTagName("Top").item(0).innerHTML,
                  ),
                  h = parseFloat(
                    e.getElementsByTagName("Bottom").item(0).innerHTML,
                  ),
                  n = parseFloat(
                    e.getElementsByTagName("Left").item(0).innerHTML,
                  );
                e = parseFloat(
                  e.getElementsByTagName("Right").item(0).innerHTML,
                );
                r = new bb.c(f, n, h, e);
              }
            });
          w = new DOMParser();
          n = w.parseFromString(f, "text/xml");
          var x = [];
          Array.prototype.slice
            .call(n.getElementsByTagName("STORY"))
            .forEach(function (f) {
              var h = f.getAttribute("galley_ids"),
                n = f.getAttribute("galley_oids"),
                r = Array.prototype.slice.call(f.getElementsByTagName("g"))[0],
                w = r.getAttribute("bbox").split(" ");
              w = new bb.c(
                parseFloat(w[0]),
                parseFloat(w[1]),
                parseFloat(w[2]),
                parseFloat(w[3]),
              );
              r = r.innerHTML;
              var y = Array.prototype.slice.call(
                f.getElementsByTagName("galleys"),
              )[0];
              y.parentNode.removeChild(y);
              f = ra(f.innerHTML).trim();
              h = new bb.a({
                id: h,
                pagenum: e,
                galleysContents: r,
                contents: f,
                galleyBox: w,
                oid: n,
              });
              x.push(h);
            });
          w = new DOMParser();
          var y = [];
          f = w.parseFromString(h, "text/xml").getElementsByTagName("Object");
          Array.prototype.slice.call(f).forEach(function (f) {
            var h = f.getAttribute("Type"),
              n = f.getAttribute("OID");
            f = Array.prototype.slice.call(f.getElementsByTagName("Point"));
            var r = Number.NaN,
              w = Number.NaN,
              x = Number.NaN,
              z = Number.NaN;
            f.forEach(function (e) {
              var f = e.getAttribute("Name");
              "TL" === f
                ? ((r = za(e.getAttribute("Y"), r)),
                  (x = za(e.getAttribute("X"), x)))
                : "TR" === f
                  ? ((r = za(e.getAttribute("Y"), r)),
                    (z = za(e.getAttribute("X"), z)))
                  : "BR" === f
                    ? ((w = za(e.getAttribute("Y"), w)),
                      (z = za(e.getAttribute("X"), z)))
                    : "BL" === f &&
                      ((w = za(e.getAttribute("Y"), w)),
                      (x = za(e.getAttribute("X"), x)));
            });
            f = new bb.c(r, x, w, z);
            h = new bb.b({ type: h, oid: n, objectBox: f, pagenum: e });
            y.push(h);
          });
          f = Array.prototype.slice
            .call(n.getElementsByTagName("DOC"))[0]
            .getAttribute("id");
          return new ma(f, 1, r, x, y);
        }
        function ra(e) {
          return new DOMParser()
            .parseFromString(e, "text/html")
            .documentElement.querySelector("body").innerHTML;
        }
        function Ga(e, f) {
          var h;
          f = new TextDecoder("utf-8").decode(f);
          var n = new DOMParser().parseFromString(f, "text/xml");
          f = n.getElementsByTagName("Galley").item(0);
          if (null !== f) {
            var r = f.getAttribute("id");
            f = n.getElementsByTagName("BBox");
            f = Array.prototype.slice.call(f);
            f.forEach(function (e) {
              var f = e.getElementsByTagName("Top"),
                n = parseFloat(f.item(0).innerHTML);
              f = e.getElementsByTagName("Left");
              var r = parseFloat(f.item(0).innerHTML);
              f = e.getElementsByTagName("Bottom");
              var w = parseFloat(f.item(0).innerHTML);
              f = e.getElementsByTagName("Right");
              e = parseFloat(f.item(0).innerHTML);
              h = new bb.c(n, r, w, e);
            });
            vb[e].forEach(function (e) {
              e.id === r && !0 === h.zx(e.galleyBox) && (e.galleyBox = h);
            });
          }
          f = n.getElementsByTagName("Object").item(0);
          if (null !== f) {
            var w = f.getAttribute("OID");
            f = n.getElementsByTagName("BBox");
            f = Array.prototype.slice.call(f);
            f.forEach(function (e) {
              var f = e.getElementsByTagName("Top"),
                n = parseFloat(f.item(0).innerHTML);
              f = e.getElementsByTagName("Left");
              var r = parseFloat(f.item(0).innerHTML);
              f = e.getElementsByTagName("Bottom");
              var w = parseFloat(f.item(0).innerHTML);
              f = e.getElementsByTagName("Right");
              e = parseFloat(f.item(0).innerHTML);
              h = new bb.c(n, r, w, e);
            });
            Zb[e].forEach(function (e) {
              e.oid === w && !0 === h.zx(e.objectBox) && (e.objectBox = h);
            });
          }
          f = n.getElementsByTagName("NewParas").item(0);
          if (null !== f) {
            var x = f.getAttribute("id");
            vb[e].forEach(function (e) {
              if (e.id === x) {
                var f = "<Contents>" + e.contents;
                f += "</Contents>";
                var h = Array.prototype.slice.call(
                  n.getElementsByTagName("NewPara"),
                );
                f = new DOMParser().parseFromString(f, "text/xml");
                var r = Array.prototype.slice.call(f.getElementsByTagName("p"));
                h.forEach(function (e) {
                  var f = parseFloat(e.innerHTML),
                    h = !1;
                  r.forEach(function (e) {
                    var n = e.getAttribute("id");
                    !1 === h &&
                      "0" === n &&
                      (e.setAttribute("id", f), (h = !0));
                  });
                });
                e.contents = f
                  .getElementsByTagName("Contents")
                  .item(0).innerHTML;
              }
            });
          }
        }
        function Da(e) {
          return {
            regex: 0 !== (e & ab.f.Zs),
            wildcard: 0 !== (e & ab.f.pq),
            wholeWord: 0 !== (e & ab.f.ct),
            caseSensitive: 0 !== (e & ab.f.kq),
          };
        }
        function Fa(e) {
          e = new Uint8Array(e);
          e = new TextDecoder("utf-8").decode(e);
          e = new DOMParser()
            .parseFromString(e, "text/xml")
            .getElementsByTagName("Font");
          var f = {};
          Array.prototype.slice.call(e).forEach(function (e) {
            var h = e.getAttribute("Family");
            h in f || (f[h] = {});
            var n = [];
            Array.prototype.slice
              .call(e.getElementsByTagName("Variation"))
              .forEach(function (e) {
                e = e.innerHTML;
                n.push(e);
                if (e.includes("Regular") || e === h.replace(/\s+/g, ""))
                  f[h].hasRegular = !0;
                e.includes("Bold") && (f[h].hasBold = !0);
                e.includes("Italic") && (f[h].hasItalic = !0);
              });
            Ec.push(new wa(h, n));
          });
          Fc = Object.keys(f).filter(function (e) {
            return f[e].hasRegular && f[e].hasBold && f[e].hasItalic;
          });
        }
        function Ea(e) {
          var f = null;
          kb.forEach(function (h) {
            h.Nz === e && (f = h);
          });
          return f;
        }
        function Ha(e, f, h, n, r) {
          void 0 === n && (n = 0);
          void 0 === r && (r = 0);
          var w = e.querySelector("._iceni_galleyInput");
          null !== w
            ? ((e = w.r$),
              0 < e.length &&
                (w.dispatchEvent(new Event("input")),
                (n = e[e.length - 1].tza),
                0 === Hb && (Hb = setTimeout(function () {}, 75))),
              (w.s$ = -1))
            : ((w = document.createElement("div")),
              (w.style.color = "transparent"),
              (w.style.caretColor = "black"),
              (w.className = "_iceni_galleyInput"),
              (w.style.display = "block"),
              (w.style.left = "0%"),
              (w.style.top = "0%"),
              (w.style.width = "110%"),
              (w.style.height = "100%"),
              (w.style.padding = "0"),
              (w.style.margin = "0"),
              (w.style.position = "absolute"),
              (w.style.overflow = "clip"),
              (w.contentEditable = !0),
              (w.spellcheck = !1),
              (w.r$ = []),
              (w.s$ = -1),
              w.addEventListener("keydown", ya),
              w.addEventListener("focusin", Ia),
              w.addEventListener("focusout", La),
              w.focus(),
              e.appendChild(w));
          w.oxa = !1;
          n = Ba(w, f, h.clientWidth, h.clientHeight, n, r);
          f = n.kca;
          h = n.lca;
          n = n.aoa;
          r = n.length;
          for (e = 0; e < r; e++) {
            for (var x = n[e], y = x.childNodes.length, z = 0; z < y; z++) {
              var aa = x.childNodes[z],
                ba = Number(aa.dataset.Z5);
              -1 !== ba &&
                (aa.style["margin-left"] =
                  (100 *
                    (ba -
                      aa.offsetLeft -
                      (aa.offsetWidth - Number(aa.dataset.width)) / 2)) /
                    w.clientWidth +
                  "%");
            }
            x.style["margin-top"] =
              (100 * (Number(x.dataset.hwa) - x.offsetTop)) / w.clientWidth +
              "%";
          }
          if (window.getSelection && null !== f) {
            w = window.getSelection();
            w.removeAllRanges();
            n = new Range();
            n.setStart(f, 0);
            null !== h && f !== h && n.setEnd(h, 0);
            try {
              w.addRange(n);
            } catch (hc) {
              console.error(hc);
            }
          }
        }
        function Ia() {
          if (this.hasOwnProperty("_iceni_range")) {
            var e = window.getSelection();
            e.removeAllRanges();
            e.addRange(this.t$);
          }
        }
        function La() {
          var e = Ja(this);
          null != e && (this.t$ = e);
        }
        function ya() {}
        function Ja(e) {
          if (!e) return null;
          var f = window.getSelection();
          if (!f) return null;
          try {
            var h = f.getRangeAt(0);
          } catch (Oc) {
            return null;
          }
          if (!h && e.contains(h.startContainer) && e.contains(h.endContainer))
            return h;
        }
        function Ba(e, f, h, n, r, w) {
          for (
            var x = null,
              y = [],
              z = f.pd,
              aa = null,
              ba = null,
              ca = 0,
              ea = document.getElementsByClassName("_iceni_text-padding");
            ea[0];

          )
            ea[0].parentNode.removeChild(ea[0]);
          ea = f.Ls;
          f = ea.length;
          var ha = window
            .getComputedStyle(e, null)
            .getPropertyValue("font-size");
          ha = parseFloat(ha) / 100;
          for (var fa = 0; fa < f; fa++) {
            var ia = 0;
            var ja = ea[fa],
              la = ja.Kx,
              ka = la.length,
              oa = e.children.length,
              ma = ca + ka;
            if (
              fa >= oa ||
              (r >= ca && r < ma) ||
              (w >= ca && w < ma) ||
              ja.refresh
            ) {
              ja.refresh = !1;
              x = document.createElement("p");
              x.className = "para-sel";
              x.style.content = "";
              x.style.margin = "0";
              x.style.padding = "0";
              for (ja = 0; ja < ka; ja++) {
                var na = la[ja],
                  pa = na.pd;
                ma = Math.round(((pa.left - z.left) * h) / z.width);
                var qa = Math.round(((pa.right - pa.left) * h) / z.width),
                  Aa = n / z.height,
                  za = Math.round((z.top - pa.top) * Aa);
                pa = Math.round((pa.height * Aa * 100) / ha) / 100;
                if (0 === ia || za < ia) ia = za;
                za = Number(na.c);
                32 === za
                  ? (za = 160)
                  : 45 === za
                    ? (za = 8209)
                    : 9 === za
                      ? (za = 160)
                      : 1 !== ka || (10 !== za && 12 !== za) || (za = 65279);
                na = document.createElement("span");
                na.className = "_iceni_text-sel";
                na.style.content = "";
                na.style.margin = "0";
                na.style.padding = "0";
                na.style["font-size"] = pa + "%";
                na.dataset.Z5 = ma;
                na.dataset.width = qa;
                na.appendChild(
                  document.createTextNode(String.fromCharCode(za)),
                );
                x.appendChild(na);
                r === ca && (aa = na);
                w === ca && (ba = na);
                ca++;
              }
              x.dataset.hwa = ia;
              y.push(x);
            } else ca += ka;
            x &&
              (fa < oa
                ? e.replaceChild(x, e.childNodes[fa])
                : e.appendChild(x));
          }
          for (; ca <= r; )
            (x = e.lastChild),
              (aa = x.lastChild),
              (na = document.createElement("span")),
              (na.className = "_iceni_text-sel _iceni_text-padding"),
              (na.style.content = ""),
              (na.style.margin = "0"),
              (na.style.padding = "0"),
              (na.style["font-size"] = aa.style["font-size"]),
              (na.dataset.Z5 = "-1"),
              na.appendChild(document.createTextNode("\ufeff")),
              x.appendChild(na),
              (ba = aa = na),
              ca++;
          e.pxa = ca--;
          r = e.children.length;
          if (r > f) for (fa = r - 1; fa >= f; fa--) e.removeChild(e.lastChild);
          return { kca: aa, lca: ba, aoa: y };
        }
        function va(e, f, h) {
          f = new Uint8Array(h);
          f = new TextDecoder("utf-8").decode(f);
          h = new DOMParser().parseFromString(f, "text/xml");
          var n = h.getElementsByTagName("TextBox");
          f = -1;
          0 !== n.length &&
            (f = parseInt(n[n.length - 1].getAttribute("Lines"), 10));
          Array.prototype.slice
            .call(h.getElementsByTagName("Line"))
            .forEach(function (f) {
              var h = null,
                n = new bb.d(0, 0),
                r = Array.prototype.slice.call(f.getElementsByTagName("UC"));
              f = parseInt(f.getAttribute("Num"), 10);
              var w = new bb.h();
              r.forEach(function (e) {
                var f = e.innerHTML.split(" ");
                e = f[0];
                null !== h && (n = h.pd.Tt);
                var r = Object(bb.i)(f[1], f[2], n);
                null !== h && (n = h.pd.Qq);
                var x = Object(bb.i)(f[3], f[4], n);
                null !== h && (n = h.pd.ow);
                var y = Object(bb.i)(f[5], f[6], n);
                null !== h && (n = h.pd.Ol);
                f = Object(bb.i)(f[7], f[8], n);
                r = new bb.e(f, y, r, x);
                h = e = new bb.f(e, r);
                w.Kx.push(e);
                w.refresh = !0;
              });
              f + 1 > e.Ls.length ? e.Ls.push(w) : (e.Ls[f] = w);
            });
          h = h.getElementsByTagName("Overset");
          null !== h &&
            ((h = Array.prototype.slice.call(h)),
            0 < h.length &&
              ("1" === h[0].innerHTML.split(":")[1]
                ? (e.c1 = !0)
                : (e.c1 = !1)));
          h = e.Ls.length;
          if (-1 !== f && h > f) for (--h; h >= f; h--) e.Ls.pop();
        }
        function Ka(e) {
          e = new Uint8Array(e);
          e = new TextDecoder("utf-8").decode(e);
          kb = [];
          e = new DOMParser()
            .parseFromString(e, "text/xml")
            .getElementsByTagName("Object");
          Array.prototype.slice.call(e).forEach(function (e) {
            if ("Text" === e.getAttribute("Subtype")) {
              var f = void 0,
                h = e.getAttribute("OID");
              e = e.getElementsByTagName("Quad");
              if (null !== e && 0 < e.length) {
                var n, r, w, x;
                Array.prototype.slice
                  .call(e[0].getElementsByTagName("Point"))
                  .forEach(function (e) {
                    var f = parseFloat(e.getAttribute("X")),
                      h = parseFloat(e.getAttribute("Y"));
                    e = e.getAttribute("Name");
                    "TL" === e
                      ? (n = new bb.d(f, h))
                      : "TR" === e
                        ? (r = new bb.d(f, h))
                        : "BR" === e
                          ? (w = new bb.d(f, h))
                          : (x = new bb.d(f, h));
                  });
                f = new bb.e(n, r, x, w);
              }
              f = new bb.g(h, f);
              kb.push(f);
            }
          });
        }
        function Ma(e) {
          e = new Uint8Array(e);
          e = new TextDecoder("utf-8").decode(e);
          e = new DOMParser()
            .parseFromString(e, "text/xml")
            .getElementsByTagName("Variation");
          Array.prototype.slice.call(e).forEach(function (e) {
            var f = e.getAttribute("StrippedName");
            bc.push(new Ra(e.innerHTML, f));
          });
        }
        function Ra() {}
        function Qa(e) {
          var f = Ea(e.galleyId);
          f = xa(f.Nz);
          if (null !== f) {
            var h = f.getContext("2d"),
              n = new Image();
            n.onload = function () {
              h.drawImage(n, e.xOffset, e.yOffset, e.width, e.height);
            };
            f = new Uint8Array(e.imageData);
            n.src = "data:image/png;base64," + Na(f);
          }
        }
        function xa(e) {
          return (e = document.getElementById("_iceni_galleyEdit_" + e))
            ? e.querySelector("._iceni_galleyCanvas")
            : null;
        }
        function Na(e) {
          var f = "",
            h,
            n = e.length;
          for (h = 2; h < n; h += 3)
            (f += cc[e[h - 2] >> 2]),
              (f += cc[((e[h - 2] & 3) << 4) | (e[h - 1] >> 4)]),
              (f += cc[((e[h - 1] & 15) << 2) | (e[h] >> 6)]),
              (f += cc[e[h] & 63]);
          h === n + 1 &&
            ((f += cc[e[h - 2] >> 2]),
            (f += cc[(e[h - 2] & 3) << 4]),
            (f += "=="));
          h === n &&
            ((f += cc[e[h - 2] >> 2]),
            (f += cc[((e[h - 2] & 3) << 4) | (e[h - 1] >> 4)]),
            (f += cc[(e[h - 1] & 15) << 2]),
            (f += "="));
          return f;
        }
        function Sa(e, f) {
          var h = xa(e),
            n = new Image();
          n.onload = function () {
            h.getContext("2d").drawImage(n, 0, 0, h.width, h.height);
          };
          e = new Uint8Array(f);
          n.src = "data:image/png;base64," + Na(e);
        }
        function Ta() {
          document
            .querySelectorAll("._iceni_galleyCanvas")
            .forEach(function (e) {
              if (e.width !== e.clientWidth || e.height !== e.clientHeight) {
                e.width = e.clientWidth;
                e.height = e.clientHeight;
                var f = e.parentElement,
                  h = Ea(f.dataset.gid);
                f.u$ = f.clientWidth / h.pd.width;
                f = f.u$;
                var n = "imageFile" + (h.Nz + f) + ".png";
                var r =
                  '<Commands>\n\t<Command Name="Render" FileFormat="png">\n' +
                  ("\t\t<BBox>\n\t\t\t<Left>" + h.pd.Ol.x + "</Left>\n");
                r += "\t\t\t<Top>" + h.pd.Ol.y + "</Top>\n";
                r += "\t\t\t<Right>" + h.pd.Qq.x + "</Right>\n";
                r += "\t\t\t<Bottom>" + h.pd.Qq.y + "</Bottom>\n\t\t</BBox>\n";
                r =
                  r +
                  ("\t\t<Width>" + e.width + "</Width>\n") +
                  ("\t\t<Height>" + e.height + "</Height>\n");
                r =
                  r +
                  "\t\t<StartPage>1</StartPage>\n\t\t<EndPage>1</EndPage>\n" +
                  ("\t\t<File>" + n + "</File>\n") +
                  "\t\t<ShowInvisibles/>\n";
                r += "\t</Command>\n";
                r += "</Commands>";
                Va.postMessage({
                  cmd: "renderEditGalley",
                  resultsFile: "results" + (h.Nz + f) + ".xml",
                  commandXML: r,
                  commandFile: "commands0.xml",
                  imageFName: n,
                  galleyId: h.Nz,
                });
              }
            });
          setTimeout(Ta, 100);
        }
        e.r(ea);
        var Pa = e(0),
          Za = e(37),
          nb = e(40),
          fb = e(69),
          Wa = e(3),
          Ya = e(38),
          $a = e(6),
          jb = e(144),
          ab = e(27),
          Gb = e(9),
          Cb = e(25),
          bb = e(259),
          Hb = 0,
          kb = [],
          Va,
          Ob,
          mb = !1,
          bc = [],
          vb = {},
          Zb = {},
          Jb = {},
          xb,
          wc = window.createPromiseCapability(),
          gb = [],
          Ec = [],
          Fc = [],
          cc =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
              "",
            ),
          Gc = {};
        ea["default"] = {
          VU: function (e) {
            return Object(Pa.b)(void 0, void 0, void 0, function () {
              var f, h, n, r, w, x, y, z, aa, ba;
              return Object(Pa.d)(this, function (ca) {
                switch (ca.label) {
                  case 0:
                    return (
                      (f = e.pageNumber),
                      (h = e.newImage),
                      (n = e.scaleType),
                      (r = e.position),
                      (w = r.top),
                      (x = r.left),
                      (y = r.bottom),
                      (z = r.right),
                      (aa = xb.getDocument()),
                      [4, aa.bd([f], void 0, !0)]
                    );
                  case 1:
                    return (
                      (ba = ca.ba()),
                      Va.postMessage(
                        {
                          cmd: "insertImage",
                          pdfFile: ba,
                          pageNumber: f,
                          newImage: h,
                          scaleType: n,
                          topVal: w,
                          leftVal: x,
                          bottomVal: y,
                          rightVal: z,
                        },
                        [],
                      ),
                      [2]
                    );
                }
              });
            });
          },
          WU: function (e, f) {
            return Object(Pa.b)(void 0, void 0, void 0, function () {
              var h, n, r, w, x, y, z, aa, ba, ea, ha, fa, ia, ja, la;
              return Object(Pa.d)(this, function (ka) {
                switch (ka.label) {
                  case 0:
                    return (
                      (h = "<DOC><STORY><galleys></galleys>"),
                      (n = []),
                      (r = new DOMParser().parseFromString(f, "text/html")),
                      r.documentElement
                        .querySelectorAll("p")
                        .forEach(function (e, f) {
                          n[f] = e.innerHTML;
                        }),
                      n.forEach(function (e, f) {
                        e = new DOMParser()
                          .parseFromString(n[f], "text/html")
                          .documentElement.querySelector("body");
                        e.childNodes.forEach(function (e) {
                          ca(e);
                        });
                        h += "<p>" + e.innerHTML + "</p>";
                      }),
                      (h += "</STORY></DOC>"),
                      (w = e.pageNumber),
                      (x = xb.getDocument()),
                      (y = e.position),
                      (z = y.top),
                      (aa = y.left),
                      (ba = y.bottom),
                      (ea = y.right),
                      (ha = e.defaultText),
                      (fa = e.font),
                      (ia = e.fontSize),
                      (ja = e.textColor),
                      [4, x.bd([w], void 0, !0)]
                    );
                  case 1:
                    return (
                      (la = ka.ba()),
                      Va.postMessage({
                        cmd: "insertNewTextBox",
                        pdfFile: la,
                        pageNumber: w,
                        topVal: z,
                        leftVal: aa,
                        bottomVal: ba,
                        rightVal: ea,
                        defaultText: ha,
                        font: fa,
                        fontSize: ia,
                        textColor: ja,
                        importData: h,
                        content: f,
                      }),
                      [2]
                    );
                }
              });
            });
          },
          dV: function (e, f) {
            return Object(Pa.b)(void 0, void 0, void 0, function () {
              var n, r, w, x, y;
              return Object(Pa.d)(this, function (z) {
                switch (z.label) {
                  case 0:
                    return (
                      (n = e.Mc.id),
                      (r = e.PageNumber),
                      (w = xb.getDocument()),
                      [4, w.bd([r], void 0, !0)]
                    );
                  case 1:
                    return (
                      (x = z.ba()),
                      (y = h()),
                      Va.postMessage(
                        {
                          cmd: "AlignParaText",
                          pdfFile: x,
                          pageNumber: r,
                          galleyID: n,
                          alignment: f,
                          topVal1: "",
                          leftVal1: "",
                          bottomVal1: "",
                          rightVal1: "",
                          topVal2: "",
                          leftVal2: "",
                          bottomVal2: "",
                          rightVal2: "",
                          tableData: y,
                        },
                        [y],
                      ),
                      [2]
                    );
                }
              });
            });
          },
          Aba: function (e) {
            Va.postMessage({
              cmd: "runCommand",
              subCmd: "Edit Page",
              resultsFile: "results0.xml",
              commandXML:
                '<Commands><Command Name="Edit Page"><ImagesAndText/>' +
                ("<WebFontURL>" + e + "</WebFontURL></Command></Commands>"),
              commandFile: "commands0.xml",
            });
          },
          DV: function (e) {
            var f = ia(e.Mc.contents);
            f = new DOMParser()
              .parseFromString(f, "text/html")
              .documentElement.querySelector("body");
            var h = f.querySelectorAll("p"),
              n = new XMLSerializer(),
              r = "bold" === h[0].style.fontWeight,
              x = n.serializeToString(h[0]).includes("<strong>");
            h.forEach(function (e) {
              if (r || x) {
                e.style.fontWeight = "normal";
                var f = n.serializeToString(e).replace(/<strong>/g, "");
                f = f.replace(/<\/strong>/g, "");
                f = new DOMParser()
                  .parseFromString(f, "text/html")
                  .documentElement.querySelector("p");
                e.parentElement.replaceChild(f, e);
              } else
                (e.style.fontWeight = "bold"),
                  (e.innerHTML = "<strong>" + e.innerHTML.trim() + "</strong>");
            });
            f = n.serializeToString(f);
            w(e, f);
          },
          HW: function (e) {
            return Object(Pa.b)(void 0, void 0, void 0, function () {
              var f, n, r, w, x, y;
              return Object(Pa.d)(this, function (z) {
                switch (z.label) {
                  case 0:
                    return (
                      (f = e.id),
                      (n = e.isText),
                      (r = e.pageNumber),
                      (w = xb.getDocument()),
                      [4, w.bd([r], void 0, !0)]
                    );
                  case 1:
                    return (
                      (x = z.ba()),
                      (y = h()),
                      Va.postMessage(
                        {
                          cmd: "deleteObject",
                          pdfFile: x,
                          pageNumber: r,
                          objectID: f,
                          isText: n,
                          tableData: y,
                        },
                        [y],
                      ),
                      [2]
                    );
                }
              });
            });
          },
          xfa: Ta,
          qY: fa,
          I_: function (e) {
            var f = ia(e.Mc.contents);
            f = new DOMParser()
              .parseFromString(f, "text/html")
              .documentElement.querySelector("body");
            var h = f.querySelectorAll("p"),
              n = new XMLSerializer(),
              r = "italic" === h[0].style.fontStyle,
              x = n.serializeToString(h[0]).includes("<em>");
            h.forEach(function (e) {
              if (r || x) {
                e.style.fontStyle = "normal";
                e.style.font.includes("Italic") &&
                  (e.style.font = e.style.font.replace("Italic", ""));
                var f = n.serializeToString(e).replace(/<em>/g, "");
                f = f.replace(/<\/em>/g, "");
                f = new DOMParser()
                  .parseFromString(f, "text/html")
                  .documentElement.querySelector("p");
                e.parentElement.replaceChild(f, e);
              } else
                (e.style.fontStyle = "italic"),
                  (e.innerHTML = "<em>" + e.innerHTML.trim() + "</em>");
            });
            f = n.serializeToString(f);
            w(e, f);
          },
          fY: function () {
            return Fc;
          },
          L1: ka,
          M1: aa,
          Pma: function (e, f) {
            void 0 === f && (f = 1);
            var h =
              '<Commands>\n\t<Command Name="ShowInvisibles" OID="' +
              e.oid +
              '">true</Command>\n\t<Command Name="Dump Text Box" OID="' +
              e.oid +
              '">\n\t</Command>\n</Commands>';
            Va.postMessage({
              cmd: "dumpTextBox",
              galleyId: e.oid,
              resultsFile: "results" + (e.oid + f) + ".xml",
              commandXML: h,
              commandFile: "commands0.xml",
            });
            return h;
          },
          n3: function (e) {
            return Object(Pa.b)(this, void 0, void 0, function () {
              var f,
                h,
                n,
                r,
                x,
                y,
                z,
                ba,
                ca,
                ea,
                ha,
                ia,
                ja,
                la,
                oa,
                ma,
                na,
                pa,
                qa,
                Aa,
                za,
                sa,
                ua = this;
              return Object(Pa.d)(this, function (wa) {
                switch (wa.label) {
                  case 0:
                    f = e.replaceWith;
                    h = e.documentViewer;
                    n = e.search;
                    r = e.searchResults;
                    if (h) {
                      if (!r && !n)
                        throw Error(
                          'The "searchResults" parameter is missing in the options',
                        );
                      if (void 0 === f)
                        throw Error(
                          'The "replaceWith" parameter should not be undefined',
                        );
                    } else
                      throw Error(
                        'The "documentViewer" parameter is missing in the options',
                      );
                    x = 1 === r.length;
                    n
                      ? ((y = n.HK), (z = n.nR))
                      : ((ba = Da(h.wy())), (y = ba.HK), (z = ba.nR));
                    ca = null;
                    ea = [];
                    if (x) (ca = r[0]), (ea = [ca.pageNum]);
                    else
                      try {
                        ea = Object.keys(
                          r.reduce(function (e, f) {
                            e[f.pageNum] = f.pageNum;
                            return e;
                          }, {}),
                        ).map(function (e) {
                          return Number(e);
                        });
                      } catch (pb) {
                        Object(Wa.i)(pb);
                      }
                    ha = 0;
                    if (ca)
                      for (
                        ia = h.Bj(), ja = -1, la = 0, oa = ia.length;
                        la < oa &&
                        ((ma = ia[la]),
                        ma.pageNum === ja
                          ? ha++
                          : ((ja = ma.pageNum), (ha = 0)),
                        !Object(jb.a)(ma, ca));
                        la++
                      );
                    na = r[0].resultStr;
                    pa = y ? "mg" : "mgi";
                    qa = z ? "\\b(" + na + ")\\b" : "(" + na + ")";
                    Aa = new RegExp("(?<!</?[^>]*|&[^;]*)" + qa, pa);
                    wc = window.createPromiseCapability();
                    return Ob ? [3, 2] : [4, ka(h.fp())];
                  case 1:
                    wa.ba(), (wa.label = 2);
                  case 2:
                    return (
                      Ya.a.trigger(Gb.e.SEARCH_AND_REPLACE_STARTED),
                      (za = 0),
                      (sa = ea.map(function (e) {
                        return Object(Pa.b)(ua, void 0, void 0, function () {
                          var n,
                            y = this;
                          return Object(Pa.d)(this, function () {
                            n = new Promise(function (n, z) {
                              return Object(Pa.b)(
                                y,
                                void 0,
                                void 0,
                                function () {
                                  var y = this;
                                  return Object(Pa.d)(this, function (ba) {
                                    switch (ba.label) {
                                      case 0:
                                        return (
                                          (gb[e] =
                                            window.createPromiseCapability()),
                                          [4, aa(h.getDocument(), e, !0)]
                                        );
                                      case 1:
                                        return (
                                          ba.ba(),
                                          gb[e].promise
                                            .then(function () {
                                              return Object(Pa.b)(
                                                y,
                                                void 0,
                                                void 0,
                                                function () {
                                                  function h(e, f) {
                                                    return Object(Pa.b)(
                                                      this,
                                                      void 0,
                                                      void 0,
                                                      function () {
                                                        var h, r;
                                                        return Object(Pa.d)(
                                                          this,
                                                          function (x) {
                                                            switch (x.label) {
                                                              case 0:
                                                                (h = Object(
                                                                  Cb.f,
                                                                )()),
                                                                  (Gc[h] =
                                                                    function () {
                                                                      delete Gc[
                                                                        h
                                                                      ];
                                                                      n(!0);
                                                                      Ya.a.trigger(
                                                                        Gb.e
                                                                          .SEARCH_AND_REPLACE_TEXT_REPLACED,
                                                                      );
                                                                    }),
                                                                  (x.label = 1);
                                                              case 1:
                                                                return (
                                                                  x.Qe.push([
                                                                    1,
                                                                    3,
                                                                    ,
                                                                    4,
                                                                  ]),
                                                                  [
                                                                    4,
                                                                    w(
                                                                      e,
                                                                      f,
                                                                      !0,
                                                                      h,
                                                                    ),
                                                                  ]
                                                                );
                                                              case 2:
                                                                return (
                                                                  x.ba(), [3, 4]
                                                                );
                                                              case 3:
                                                                return (
                                                                  (r = x.ba()),
                                                                  Object(Wa.i)(
                                                                    r,
                                                                  ),
                                                                  z(r),
                                                                  [3, 4]
                                                                );
                                                              case 4:
                                                                return [2];
                                                            }
                                                          },
                                                        );
                                                      },
                                                    );
                                                  }
                                                  var y,
                                                    aa,
                                                    ba,
                                                    ea,
                                                    ia,
                                                    ja,
                                                    la,
                                                    ka,
                                                    oa,
                                                    ma,
                                                    pa,
                                                    qa,
                                                    sa,
                                                    ua,
                                                    wa,
                                                    ra,
                                                    Ha;
                                                  return Object(Pa.d)(
                                                    this,
                                                    function () {
                                                      y = xb.pa();
                                                      aa = y
                                                        .mb()
                                                        .filter(function (f) {
                                                          return (
                                                            f.PageNumber === e
                                                          );
                                                        })
                                                        .filter(function (e) {
                                                          return e.Ld();
                                                        })
                                                        .concat();
                                                      ba = [];
                                                      ia = ea = 0;
                                                      for (
                                                        ja = aa.length;
                                                        ia < ja;
                                                        ia++
                                                      ) {
                                                        la = aa[ia];
                                                        ka = la.Mc;
                                                        oa = fa(ka);
                                                        ma = [];
                                                        try {
                                                          for (
                                                            pa = void 0;
                                                            null !==
                                                            (pa = Aa.exec(oa));

                                                          )
                                                            ma.push(pa),
                                                              ba.push(r[za]),
                                                              za++;
                                                        } catch (Qb) {
                                                          Object(Wa.i)(Qb);
                                                        }
                                                        if (ma.length)
                                                          if (
                                                            ((ea += ma.length),
                                                            x && ea > ha)
                                                          ) {
                                                            qa = Math.abs(
                                                              ea -
                                                                ma.length -
                                                                ha,
                                                            );
                                                            sa = ma[qa].index;
                                                            ua = oa.substr(
                                                              0,
                                                              sa,
                                                            );
                                                            wa = f;
                                                            ra = oa.substr(
                                                              sa + na.length,
                                                              oa.length,
                                                            );
                                                            Ha =
                                                              "" + ua + wa + ra;
                                                            Ya.a.trigger(
                                                              Gb.e
                                                                .SEARCH_AND_REPLACE_TEXT_FOUND,
                                                              [[ca]],
                                                            );
                                                            h(la, Ha);
                                                            break;
                                                          } else
                                                            x ||
                                                              ((mb = !0),
                                                              (Ha = oa.replace(
                                                                Aa,
                                                                f,
                                                              )),
                                                              Ya.a.trigger(
                                                                Gb.e
                                                                  .SEARCH_AND_REPLACE_TEXT_FOUND,
                                                                [ba],
                                                              ),
                                                              h(la, Ha));
                                                      }
                                                      return [2];
                                                    },
                                                  );
                                                },
                                              );
                                            })
                                            .catch(z),
                                          [2]
                                        );
                                    }
                                  });
                                },
                              );
                            });
                            return [2, n];
                          });
                        });
                      })),
                      [
                        2,
                        Promise.all(sa).then(function () {
                          x && ca
                            ? setTimeout(function () {
                                var e = [];
                                h.lw(r[0].resultStr, h.wy(), {
                                  startPage: ea[0],
                                  endPage: ea[0],
                                  fullSearch: !0,
                                  onDocumentEnd: function () {
                                    mb = !1;
                                    Ya.a.trigger(Gb.e.SEARCH_AND_REPLACE_ENDED);
                                    h.YH(ea[0] - 1, e);
                                  },
                                  onResult: function (f) {
                                    f.resultCode === ab.e.am && e.push(f);
                                  },
                                });
                              }, 200)
                            : (h.OK(),
                              h.Dl(),
                              h.Yd(),
                              (mb = !1),
                              Ya.a.trigger(Gb.e.SEARCH_AND_REPLACE_ENDED));
                          var e = xb.pa(),
                            f = e.mb().filter(function (e) {
                              return e.Ld();
                            });
                          e.Ye(f, { force: !0, source: "contentEditTool" });
                        }),
                      ]
                    );
                }
              });
            });
          },
          G3: function (e, f) {
            var h = ia(e.Mc.contents);
            h = new DOMParser()
              .parseFromString(h, "text/html")
              .documentElement.querySelector("body");
            var n = h.querySelectorAll("p"),
              r = new XMLSerializer();
            n.forEach(function (e) {
              e.style.fontFamily = f;
            });
            h = r.serializeToString(h);
            w(e, h);
          },
          H3: function (e, f) {
            var h = ia(e.Mc.contents);
            h = new DOMParser()
              .parseFromString(h, "text/html")
              .documentElement.querySelector("body");
            var n = h.querySelectorAll("p"),
              r = new XMLSerializer();
            n.forEach(function (e) {
              e.style.fontSize = f;
            });
            h = r.serializeToString(h);
            w(e, h);
          },
          f4: function (e, f) {
            var h = ia(e.Mc.contents);
            h = new DOMParser()
              .parseFromString(h, "text/html")
              .documentElement.querySelector("body");
            var n = h.querySelectorAll("p"),
              r = new XMLSerializer();
            n.forEach(function (e) {
              e.style.color = f;
            });
            h.querySelectorAll("span").forEach(function (e) {
              e.setAttribute("style", "color:" + f);
            });
            h = r.serializeToString(h);
            w(e, h);
          },
          Qma: function (e, f, h) {
            e = Ea(e);
            e.Ls = [];
            va(e, "Export Page", f);
            f = document.createElement("canvas");
            f.className = "_iceni_galleyCanvas";
            f.style.display = "block";
            f.style.left = "0%";
            f.style.top = "0%";
            f.style.width = "100%";
            f.style.height = "100%";
            f.style.padding = "0";
            f.style.margin = "0";
            f.style.position = "absolute";
            h.appendChild(f);
            Ha(h, e, f);
          },
          q5: function (e) {
            return Object(Pa.b)(void 0, void 0, void 0, function () {
              var f, n, r, w, x, y, z, aa, ba, ca, ea, ha;
              return Object(Pa.d)(this, function (fa) {
                switch (fa.label) {
                  case 0:
                    return (
                      (f = e.id),
                      (n = e.position),
                      (r = n.top),
                      (w = n.left),
                      (x = n.bottom),
                      (y = n.right),
                      (z = e.isText),
                      (aa = e.pageNumber),
                      (ba = xb.getDocument()),
                      [4, ba.bd([aa], void 0, !0)]
                    );
                  case 1:
                    return (
                      (ca = fa.ba()),
                      (ea = h()),
                      (ha = {
                        cmd: "transformObject",
                        pdfFile: ca,
                        pageNumber: aa,
                        objectID: f,
                        isText: z,
                        topVal: r,
                        leftVal: w,
                        bottomVal: x,
                        rightVal: y,
                        tableData: ea,
                      }),
                      Va.postMessage(ha, [ea]),
                      [2]
                    );
                }
              });
            });
          },
          z5: w,
          s5: function (e) {
            var f = ia(e.Mc.contents);
            f = new DOMParser()
              .parseFromString(f, "text/html")
              .documentElement.querySelector("body");
            var h = f.querySelectorAll("p"),
              n = new XMLSerializer(),
              r =
                h[0].style.textDecoration.includes("underline") ||
                h[0].style.textDecoration.includes("word"),
              x = n.serializeToString(h[0]).includes("<u>");
            h.forEach(function (e) {
              if (r || x) {
                e.style.textDecoration = e.style.textDecoration.replace(
                  "underline",
                  "",
                );
                var f = n.serializeToString(e).replace(/<u>/g, "");
                f = f.replace(/<\/u>/g, "");
                f = new DOMParser()
                  .parseFromString(f, "text/html")
                  .documentElement.querySelector("p");
                e.parentElement.replaceChild(f, e);
              } else
                e.style.textDecoration.includes("none")
                  ? (e.style.textDecoration = e.style.textDecoration.replace(
                      "none",
                      "underline",
                    ))
                  : (e.style.textDecoration += " underline"),
                  (e.innerHTML = "<u>" + e.innerHTML.trim() + "</u>");
            });
            f = n.serializeToString(f);
            w(e, f);
          },
          Yga: n,
          Lya: function () {
            return Va;
          },
          zya: f,
          lAa: function () {
            Va && (Va.terminate(), (Ob = Va = null));
          },
          Sza: la,
          Rza: oa,
          Nxa: qa,
          Gza: ua,
        };
      },
    },
  ]);
}).call(this || window);
