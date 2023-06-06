import {
  It,
  Lt,
  xt
} from "./chunk-PAPDZW4B.js";
import {
  gt
} from "./chunk-L2SUHFD6.js";
import "./chunk-LB7JKI6R.js";
import "./chunk-Y4IJOOFO.js";
import "./chunk-UIMDGI6T.js";
import {
  A
} from "./chunk-YZYDP5X3.js";
import "./chunk-MEVAAECV.js";
import "./chunk-BJRH3XJY.js";
import "./chunk-ZUTOARWW.js";
import {
  At,
  Fn,
  Oi,
  S,
  Ut,
  b0,
  df,
  jg,
  p0
} from "./chunk-5KIEU262.js";

// node_modules/.pnpm/mermaid@10.2.2/node_modules/mermaid/dist/classDiagram-v2-60cd73ae.js
var S2 = (o) => Fn.sanitizeText(o, Ut());
var v = {
  dividerMargin: 10,
  padding: 5,
  textHeight: 10,
  curve: void 0
};
var q = function(o, t, p, n) {
  const e = Object.keys(o);
  S.info("keys:", e), S.info(o), e.forEach(function(s) {
    var y, d;
    const l = o[s], i = {
      shape: "rect",
      id: l.id,
      domId: l.domId,
      labelText: S2(l.id),
      labelStyle: "",
      style: "fill: none; stroke: black",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((y = Ut().flowchart) == null ? void 0 : y.padding) ?? ((d = Ut().class) == null ? void 0 : d.padding)
    };
    t.setNode(l.id, i), I(l.classes, t, p, n, l.id), S.info("setNode", i);
  });
};
var I = function(o, t, p, n, e) {
  const s = Object.keys(o);
  S.info("keys:", s), S.info(o), s.forEach(function(l) {
    var m, h;
    const a = o[l];
    let i = "";
    a.cssClasses.length > 0 && (i = i + " " + a.cssClasses.join(" "));
    const y = { labelStyle: "", style: "" }, d = a.label ?? a.id, f = 0, u = "class_box", b = {
      labelStyle: y.labelStyle,
      shape: u,
      labelText: S2(d),
      classData: a,
      rx: f,
      ry: f,
      class: i,
      style: y.style,
      id: a.id,
      domId: a.domId,
      tooltip: n.db.getTooltip(a.id, e) || "",
      haveCallback: a.haveCallback,
      link: a.link,
      width: a.type === "group" ? 500 : void 0,
      type: a.type,
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((m = Ut().flowchart) == null ? void 0 : m.padding) ?? ((h = Ut().class) == null ? void 0 : h.padding)
    };
    t.setNode(a.id, b), e && t.setParent(a.id, e), S.info("setNode", b);
  });
};
var F = function(o, t, p, n) {
  S.info(o), o.forEach(function(e, s) {
    var h, x;
    const l = e, a = "", i = { labelStyle: "", style: "" }, y = l.text, d = 0, f = "note", u = {
      labelStyle: i.labelStyle,
      shape: f,
      labelText: S2(y),
      noteData: l,
      rx: d,
      ry: d,
      class: a,
      style: i.style,
      id: l.id,
      domId: l.id,
      tooltip: "",
      type: "note",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((h = Ut().flowchart) == null ? void 0 : h.padding) ?? ((x = Ut().class) == null ? void 0 : x.padding)
    };
    if (t.setNode(l.id, u), S.info("setNode", u), !l.class || !(l.class in n))
      return;
    const b = p + s, m = {
      id: `edgeNote${b}`,
      //Set relationship style and line type
      classes: "relation",
      pattern: "dotted",
      // Set link type for rendering
      arrowhead: "none",
      //Set edge extra labels
      startLabelRight: "",
      endLabelLeft: "",
      //Set relation arrow types
      arrowTypeStart: "none",
      arrowTypeEnd: "none",
      style: "fill:none",
      labelStyle: "",
      curve: p0(v.curve, df)
    };
    t.setEdge(l.id, l.class, m, b);
  });
};
var H = function(o, t) {
  const p = Ut().flowchart;
  let n = 0;
  o.forEach(function(e) {
    var l;
    n++;
    const s = {
      //Set relationship style and line type
      classes: "relation",
      pattern: e.relation.lineType == 1 ? "dashed" : "solid",
      id: "id" + n,
      // Set link type for rendering
      arrowhead: e.type === "arrow_open" ? "none" : "normal",
      //Set edge extra labels
      startLabelRight: e.relationTitle1 === "none" ? "" : e.relationTitle1,
      endLabelLeft: e.relationTitle2 === "none" ? "" : e.relationTitle2,
      //Set relation arrow types
      arrowTypeStart: C(e.relation.type1),
      arrowTypeEnd: C(e.relation.type2),
      style: "fill:none",
      labelStyle: "",
      curve: p0(p == null ? void 0 : p.curve, df)
    };
    if (S.info(s, e), e.style !== void 0) {
      const a = b0(e.style);
      s.style = a.style, s.labelStyle = a.labelStyle;
    }
    e.text = e.title, e.text === void 0 ? e.style !== void 0 && (s.arrowheadStyle = "fill: #333") : (s.arrowheadStyle = "fill: #333", s.labelpos = "c", ((l = Ut().flowchart) == null ? void 0 : l.htmlLabels) ?? Ut().htmlLabels ? (s.labelType = "html", s.label = '<span class="edgeLabel">' + e.text + "</span>") : (s.labelType = "text", s.label = e.text.replace(Fn.lineBreakRegex, `
`), e.style === void 0 && (s.style = s.style || "stroke: #333; stroke-width: 1.5px;fill:none"), s.labelStyle = s.labelStyle.replace("color:", "fill:"))), t.setEdge(e.id1, e.id2, s, n);
  });
};
var V = function(o) {
  v = {
    ...v,
    ...o
  };
};
var W = async function(o, t, p, n) {
  S.info("Drawing class - ", t);
  const e = Ut().flowchart ?? Ut().class, s = Ut().securityLevel;
  S.info("config:", e);
  const l = (e == null ? void 0 : e.nodeSpacing) ?? 50, a = (e == null ? void 0 : e.rankSpacing) ?? 50, i = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: n.db.getDirection(),
    nodesep: l,
    ranksep: a,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), y = n.db.getNamespaces(), d = n.db.getClasses(), f = n.db.getRelations(), u = n.db.getNotes();
  S.info(f), q(y, i, t, n), I(d, i, t, n), H(f, i), F(u, i, f.length + 1, d);
  let b;
  s === "sandbox" && (b = At("#i" + t));
  const m = s === "sandbox" ? (
    // @ts-ignore Ignore type error for now
    At(b.nodes()[0].contentDocument.body)
  ) : At("body"), h = m.select(`[id="${t}"]`), x = m.select("#" + t + " g");
  if (await gt(
    x,
    i,
    ["aggregation", "extension", "composition", "dependency", "lollipop"],
    "classDiagram",
    t
  ), Oi.insertTitle(h, "classTitleText", (e == null ? void 0 : e.titleTopMargin) ?? 5, n.db.getDiagramTitle()), jg(i, h, e == null ? void 0 : e.diagramPadding, e == null ? void 0 : e.useMaxWidth), !(e != null && e.htmlLabels)) {
    const T = s === "sandbox" ? b.nodes()[0].contentDocument : document, M = T.querySelectorAll('[id="' + t + '"] .edgeLabel .label');
    for (const w of M) {
      const L = w.getBBox(), g = T.createElementNS("http://www.w3.org/2000/svg", "rect");
      g.setAttribute("rx", 0), g.setAttribute("ry", 0), g.setAttribute("width", L.width), g.setAttribute("height", L.height), w.insertBefore(g, w.firstChild);
    }
  }
};
function C(o) {
  let t;
  switch (o) {
    case 0:
      t = "aggregation";
      break;
    case 1:
      t = "extension";
      break;
    case 2:
      t = "composition";
      break;
    case 3:
      t = "dependency";
      break;
    case 4:
      t = "lollipop";
      break;
    default:
      t = "none";
  }
  return t;
}
var J = {
  setConf: V,
  draw: W
};
var se = {
  parser: Lt,
  db: It,
  renderer: J,
  styles: xt,
  init: (o) => {
    o.class || (o.class = {}), o.class.arrowMarkerAbsolute = o.arrowMarkerAbsolute, It.clear();
  }
};
export {
  se as diagram
};
//# sourceMappingURL=classDiagram-v2-60cd73ae-P4Q65B4T.js.map
