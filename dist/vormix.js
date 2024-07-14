import { ref as Y, readonly as Xa, getCurrentInstance as au, onMounted as mt, nextTick as be, watch as q, reactive as Vt, mergeProps as B, openBlock as le, createElementBlock as de, createElementVNode as $e, renderSlot as Te, createTextVNode as dt, toDisplayString as Ee, resolveComponent as Pt, resolveDirective as St, withDirectives as Ie, createBlock as Ge, resolveDynamicComponent as bt, withCtx as Xe, normalizeClass as vn, createCommentVNode as Ae, Teleport as lu, normalizeStyle as qf, Fragment as oe, createVNode as d, Transition as tn, renderList as fn, vShow as It, withKeys as Re, mergeModels as Ci, useModel as xi, computed as b, onScopeDispose as ht, effectScope as Vi, shallowRef as G, watchEffect as Ye, toRefs as Nl, capitalize as ca, isVNode as Xf, Comment as Zf, unref as pt, warn as Rl, inject as pe, provide as Le, defineComponent as Jf, camelize as ou, h as bn, toRaw as kt, onBeforeUnmount as wt, onDeactivated as Qf, onActivated as ev, Suspense as iu, TransitionGroup as Pi, isRef as aa, toRef as O, onBeforeMount as ru, onUpdated as tv, Text as nv, markRaw as av, cloneVNode as lv, onUnmounted as ov, onBeforeUpdate as iv, withModifiers as Ir, vModelText as rv, render as su } from "vue";
function Za(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function uu(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function ct(e) {
  return !Za(e);
}
function gn(e, n = !0) {
  return e instanceof Object && e.constructor === Object && (n || Object.keys(e).length !== 0);
}
function Gt(e, ...n) {
  return uu(e) ? e(...n) : e;
}
function Ct(e, n = !0) {
  return typeof e == "string" && (n || e !== "");
}
function Ht(e) {
  return Ct(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function Ti(e, n = "", t = {}) {
  const a = Ht(n).split("."), l = a.shift();
  return l ? gn(e) ? Ti(Gt(e[Object.keys(e).find((o) => Ht(o) === l) || ""], t), a.join("."), t) : void 0 : Gt(e, t);
}
function Ii(e, n = !0) {
  return Array.isArray(e) && (n || e.length !== 0);
}
function cu(e) {
  return ct(e) && !isNaN(e);
}
function sv() {
  return new Intl.Collator(void 0, { numeric: !0 }).compare;
}
function en(e, n) {
  if (n) {
    const t = n.test(e);
    return n.lastIndex = 0, t;
  }
  return !1;
}
function xa(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function uv(e) {
  return Ct(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function du(e) {
  return Ct(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (n, t) => t === 0 ? n : "-" + n.toLowerCase()).toLowerCase() : e;
}
function Dr(e) {
  return Ct(e) ? e.replace(/[A-Z]/g, (n, t) => t === 0 ? n : "." + n.toLowerCase()).toLowerCase() : e;
}
function Di() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(n, t) {
      let a = e.get(n);
      return a ? a.push(t) : a = [t], e.set(n, a), this;
    },
    off(n, t) {
      let a = e.get(n);
      return a && a.splice(a.indexOf(t) >>> 0, 1), this;
    },
    emit(n, t) {
      let a = e.get(n);
      a && a.slice().map((l) => {
        l(t);
      });
    },
    clear() {
      e.clear();
    }
  };
}
var cv = Object.defineProperty, dv = Object.defineProperties, fv = Object.getOwnPropertyDescriptors, Tl = Object.getOwnPropertySymbols, fu = Object.prototype.hasOwnProperty, vu = Object.prototype.propertyIsEnumerable, Mr = (e, n, t) => n in e ? cv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ba = (e, n) => {
  for (var t in n || (n = {}))
    fu.call(n, t) && Mr(e, t, n[t]);
  if (Tl)
    for (var t of Tl(n))
      vu.call(n, t) && Mr(e, t, n[t]);
  return e;
}, ko = (e, n) => dv(e, fv(n)), pa = (e, n) => {
  var t = {};
  for (var a in e)
    fu.call(e, a) && n.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && Tl)
    for (var a of Tl(e))
      n.indexOf(a) < 0 && vu.call(e, a) && (t[a] = e[a]);
  return t;
}, vv = Di(), Rt = vv;
function Br(e, n) {
  Ii(e) ? e.push(...n || []) : gn(e) && Object.assign(e, n);
}
function mv(e) {
  return gn(e) && e.hasOwnProperty("value") && e.hasOwnProperty("type") ? e.value : e;
}
function Ar(e, n = "") {
  return ["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"].some((a) => n.endsWith(a)) ? e : `${e}`.trim().split(" ").map((o) => cu(o) ? `${o}px` : o).join(" ");
}
function hv(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Lo(e = "", n = "") {
  return hv(`${Ct(e, !1) && Ct(n, !1) ? `${e}-` : e}${n}`);
}
function mu(e = "", n = "") {
  return `--${Lo(e, n)}`;
}
function hu(e, n = "", t = "", a = [], l) {
  if (Ct(e)) {
    const o = /{([^}]*)}/g, i = e.trim();
    if (en(i, o)) {
      const r = i.replaceAll(o, (u) => {
        const m = u.replace(/{|}/g, "").split(".").filter((v) => !a.some((g) => en(v, g)));
        return `var(${mu(t, du(m.join("-")))}${ct(l) ? `, ${l}` : ""})`;
      }), s = /(\d+\s+[\+\-\*\/]\s+\d+)/g, c = /var\([^)]+\)/g;
      return en(r.replace(c, "0"), s) ? `calc(${r})` : r;
    }
    return Ar(i, n);
  } else if (cu(e))
    return Ar(e, n);
}
function gv(e, n, t) {
  Ct(n, !1) && e.push(`${n}:${t};`);
}
function wa(e, n) {
  return e ? `${e}{${n}}` : "";
}
var So = (...e) => yv(Oe.getTheme(), ...e), yv = (e = {}, n, t, a = "variable") => {
  if (n) {
    const { variable: l, options: o } = Oe.defaults || {}, { prefix: i, transform: r } = (e == null ? void 0 : e.options) || o || {}, c = en(n, /{([^}]*)}/g) ? n : `{${n}}`;
    return a === "value" || r === "strict" ? Oe.getTokenValue(n) : hu(c, void 0, i, [l.excludedKeyRegex], t);
  }
  return "";
};
function bv(e, n = {}) {
  const t = Oe.defaults.variable, { prefix: a = t.prefix, selector: l = t.selector, excludedKeyRegex: o = t.excludedKeyRegex } = n, i = (c, u = "") => Object.entries(c).reduce(
    (f, [m, v]) => {
      const g = en(m, o) ? Lo(u) : Lo(u, du(m)), h = mv(v);
      if (gn(h)) {
        const { variables: y, tokens: k } = i(h, g);
        Br(f.tokens, k), Br(f.variables, y);
      } else
        f.tokens.push((a ? g.replace(`${a}-`, "") : g).replaceAll("-", ".")), gv(f.variables, mu(g), hu(h, g, a, [o]));
      return f;
    },
    { variables: [], tokens: [] }
  ), { variables: r, tokens: s } = i(e, a);
  return {
    value: r,
    tokens: s,
    declarations: r.join(""),
    css: wa(l, r.join(""))
  };
}
var Ft = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(e) {
          return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(e) {
          return { type: "attr", selector: `:root${e}`, matched: this.pattern.test(e.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(e) {
          return { type: "media", selector: `${e}{:root{[CSS]}}`, matched: this.pattern.test(e.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(e) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(e.trim()) };
        }
      },
      custom: {
        resolve(e) {
          return { type: "custom", selector: e, matched: !0 };
        }
      }
    },
    resolve(e) {
      const n = Object.keys(this.rules).filter((t) => t !== "custom").map((t) => this.rules[t]);
      return [e].flat().map((t) => {
        var a;
        return (a = n.map((l) => l.resolve(t)).find((l) => l.matched)) != null ? a : this.rules.custom.resolve(t);
      });
    }
  },
  _toVariables(e, n) {
    return bv(e, { prefix: n == null ? void 0 : n.prefix });
  },
  getCommon({ name: e = "", theme: n = {}, params: t, set: a, defaults: l }) {
    var o, i, r, s;
    const { preset: c, options: u } = n;
    let f, m, v, g;
    if (ct(c)) {
      const { primitive: h, semantic: y } = c, k = y || {}, { colorScheme: p } = k, w = pa(k, ["colorScheme"]), T = p || {}, { dark: C } = T, V = pa(T, ["dark"]), x = ct(h) ? this._toVariables({ primitive: h }, u) : {}, P = ct(w) ? this._toVariables({ semantic: w }, u) : {}, S = ct(V) ? this._toVariables({ light: V }, u) : {}, I = ct(C) ? this._toVariables({ dark: C }, u) : {}, [D, M] = [(o = x.declarations) != null ? o : "", x.tokens], [A, E] = [(i = P.declarations) != null ? i : "", P.tokens || []], [F, j] = [(r = S.declarations) != null ? r : "", S.tokens || []], [X, N] = [(s = I.declarations) != null ? s : "", I.tokens || []];
      f = this.transformCSS(e, D, "light", "variable", u, a, l), m = M;
      const z = this.transformCSS(e, `${A}${F}color-scheme:light`, "light", "variable", u, a, l), _ = this.transformCSS(e, `${X}color-scheme:dark`, "dark", "variable", u, a, l);
      v = `${z}${_}`, g = [.../* @__PURE__ */ new Set([...E, ...j, ...N])];
    }
    return {
      primitive: {
        css: f,
        tokens: m
      },
      semantic: {
        css: v,
        tokens: g
      }
    };
  },
  getPreset({ name: e = "", preset: n = {}, options: t, params: a, set: l, defaults: o, selector: i }) {
    var r, s, c;
    const u = e.replace("-directive", ""), f = n, { colorScheme: m } = f, v = pa(f, ["colorScheme"]), g = m || {}, { dark: h } = g, y = pa(g, ["dark"]), k = ct(v) ? this._toVariables({ [u]: v }, t) : {}, p = ct(y) ? this._toVariables({ [u]: y }, t) : {}, w = ct(h) ? this._toVariables({ [u]: h }, t) : {}, [T, C] = [(r = k.declarations) != null ? r : "", k.tokens || []], [V, x] = [(s = p.declarations) != null ? s : "", p.tokens || []], [P, S] = [(c = w.declarations) != null ? c : "", w.tokens || []], I = [.../* @__PURE__ */ new Set([...C, ...x, ...S])], D = this.transformCSS(u, `${T}${V}`, "light", "variable", t, l, o, i), M = this.transformCSS(u, P, "dark", "variable", t, l, o, i);
    return {
      css: `${D}${M}`,
      tokens: I
    };
  },
  getPresetC({ name: e = "", theme: n = {}, params: t, set: a, defaults: l }) {
    var o;
    const { preset: i, options: r } = n, s = (o = i == null ? void 0 : i.components) == null ? void 0 : o[e];
    return this.getPreset({ name: e, preset: s, options: r, params: t, set: a, defaults: l });
  },
  getPresetD({ name: e = "", theme: n = {}, params: t, set: a, defaults: l }) {
    var o;
    const i = e.replace("-directive", ""), { preset: r, options: s } = n, c = (o = r == null ? void 0 : r.directives) == null ? void 0 : o[i];
    return this.getPreset({ name: i, preset: c, options: s, params: t, set: a, defaults: l });
  },
  getColorSchemeOption(e, n) {
    var t;
    return this.regex.resolve((t = e.darkModeSelector) != null ? t : n.options.darkModeSelector);
  },
  getLayerOrder(e, n = {}, t, a) {
    const { cssLayer: l } = n;
    return l ? `@layer ${Gt(l.order || "primeui", t)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: n = {}, params: t, props: a = {}, set: l, defaults: o }) {
    const i = this.getCommon({ name: e, theme: n, params: t, set: l, defaults: o }), r = Object.entries(a).reduce((s, [c, u]) => s.push(`${c}="${u}"`) && s, []).join(" ");
    return Object.entries(i || {}).reduce((s, [c, u]) => {
      if (u != null && u.css) {
        const f = xa(u == null ? void 0 : u.css), m = `${c}-variables`;
        s.push(`<style type="text/css" data-primevue-style-id="${m}" ${r}>${f}</style>`);
      }
      return s;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: n = {}, params: t, props: a = {}, set: l, defaults: o }) {
    var i;
    const r = { name: e, theme: n, params: t, set: l, defaults: o }, s = (i = e.includes("-directive") ? this.getPresetD(r) : this.getPresetC(r)) == null ? void 0 : i.css, c = Object.entries(a).reduce((u, [f, m]) => u.push(`${f}="${m}"`) && u, []).join(" ");
    return s ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${xa(s)}</style>` : "";
  },
  createTokens(e = {}, n, t = "", a = "", l = {}) {
    return Object.entries(e).forEach(([o, i]) => {
      const r = en(o, n.variable.excludedKeyRegex) ? t : t ? `${t}.${Dr(o)}` : Dr(o), s = a ? `${a}.${o}` : o;
      gn(i) ? this.createTokens(i, n, r, s, l) : (l[r] || (l[r] = {
        paths: [],
        computed(c, u = {}) {
          if (c) {
            const f = this.paths.find((m) => m.scheme === c) || this.paths.find((m) => m.scheme === "none");
            return f == null ? void 0 : f.computed(c, u.binding);
          }
          return this.paths.map((f) => f.computed(f.scheme, u[f.scheme]));
        }
      }), l[r].paths.push({
        path: s,
        value: i,
        scheme: s.includes("colorScheme.light") ? "light" : s.includes("colorScheme.dark") ? "dark" : "none",
        computed(c, u = {}) {
          const f = /{([^}]*)}/g;
          let m = i;
          if (u.name = this.path, u.binding || (u.binding = {}), en(i, f)) {
            const g = i.trim().replaceAll(f, (k) => {
              var p, w;
              const T = k.replace(/{|}/g, "");
              return (w = (p = l[T]) == null ? void 0 : p.computed(c, u)) == null ? void 0 : w.value;
            }), h = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, y = /var\([^)]+\)/g;
            m = en(g.replace(y, "0"), h) ? `calc(${g})` : g;
          }
          return Za(u.binding) && delete u.binding, {
            colorScheme: c,
            path: this.path,
            paths: u,
            value: m.includes("undefined") ? void 0 : m
          };
        }
      }));
    }), l;
  },
  getTokenValue(e, n, t) {
    var a;
    const o = ((s) => s.split(".").filter((u) => !en(u.toLowerCase(), t.variable.excludedKeyRegex)).join("."))(n), i = n.includes("colorScheme.light") ? "light" : n.includes("colorScheme.dark") ? "dark" : void 0, r = [(a = e[o]) == null ? void 0 : a.computed(i)].flat().filter((s) => s);
    return r.length === 1 ? r[0].value : r.reduce((s = {}, c) => {
      const u = c, { colorScheme: f } = u, m = pa(u, ["colorScheme"]);
      return s[f] = m, s;
    }, void 0);
  },
  transformCSS(e, n, t, a, l = {}, o, i, r) {
    if (ct(n)) {
      const { cssLayer: s } = l;
      if (a !== "style") {
        const c = this.getColorSchemeOption(l, i), u = r ? wa(r, n) : n;
        n = t === "dark" ? c.reduce((f, { selector: m }) => (ct(m) && (f += m.includes("[CSS]") ? m.replace("[CSS]", u) : wa(m, u)), f), "") : wa(r ?? ":root", n);
      }
      if (s) {
        const c = {
          name: "primeui",
          order: "primeui"
        };
        gn(s) && (c.name = Gt(s.name, { name: e, type: a })), ct(c.name) && (n = wa(`@layer ${c.name}`, n), o == null || o.layerNames(c.name));
      }
      return n;
    }
    return "";
  }
}, Oe = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(e = {}) {
    const { theme: n } = e;
    n && (this._theme = ko(ba({}, n), {
      options: ba(ba({}, this.defaults.options), n.options)
    }), this._tokens = Ft.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.preset) || {};
  },
  get options() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(e) {
    this.update({ theme: e }), Rt.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = ko(ba({}, this.theme), { preset: e }), this._tokens = Ft.createTokens(e, this.defaults), this.clearLoadedStyleNames(), Rt.emit("preset:change", e), Rt.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = ko(ba({}, this.theme), { options: e }), this.clearLoadedStyleNames(), Rt.emit("options:change", e), Rt.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(e) {
    this._layerNames.add(e);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(e) {
    return Ft.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", n) {
    return Ft.getCommon({ name: e, theme: this.theme, params: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", n) {
    const t = { name: e, theme: this.theme, params: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ft.getPresetC(t);
  },
  getDirective(e = "", n) {
    const t = { name: e, theme: this.theme, params: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ft.getPresetD(t);
  },
  getCustomPreset(e = "", n, t, a) {
    const l = { name: e, preset: n, options: this.options, selector: t, params: a, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ft.getPreset(l);
  },
  getLayerOrderCSS(e = "") {
    return Ft.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", n, t = "style", a) {
    return Ft.transformCSS(e, n, a, t, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", n, t = {}) {
    return Ft.getCommonStyleSheet({ name: e, theme: this.theme, params: n, props: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, n, t = {}) {
    return Ft.getStyleSheet({ name: e, theme: this.theme, params: n, props: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: n }) {
    this._loadingStyles.size && (this._loadingStyles.delete(n), Rt.emit(`theme:${n}:load`, e), !this._loadingStyles.size && Rt.emit("theme:load"));
  }
}, ut = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
function pv(e, n) {
  return e ? e.classList ? e.classList.contains(n) : new RegExp("(^| )" + n + "( |$)", "gi").test(e.className) : !1;
}
function kv(e, n) {
  if (e && n) {
    const t = (a) => {
      pv(e, a) || (e.classList ? e.classList.add(a) : e.className += " " + a);
    };
    [n].flat().filter(Boolean).forEach((a) => a.split(" ").forEach(t));
  }
}
function Il(e) {
  for (const n of document == null ? void 0 : document.styleSheets)
    try {
      for (const t of n == null ? void 0 : n.cssRules)
        for (const a of t == null ? void 0 : t.style)
          if (e.test(a))
            return { name: a, value: t.style.getPropertyValue(a).trim() };
    } catch {
    }
  return null;
}
function wo(e, n) {
  if (e && n) {
    const t = (a) => {
      e.classList ? e.classList.remove(a) : e.className = e.className.replace(new RegExp("(^|\\b)" + a.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [n].flat().filter(Boolean).forEach((a) => a.split(" ").forEach(t));
  }
}
function gu(e) {
  let n = { width: 0, height: 0 };
  return e && (e.style.visibility = "hidden", e.style.display = "block", n.width = e.offsetWidth, n.height = e.offsetHeight, e.style.display = "none", e.style.visibility = "visible"), n;
}
function yu() {
  let e = window, n = document, t = n.documentElement, a = n.getElementsByTagName("body")[0], l = e.innerWidth || t.clientWidth || a.clientWidth, o = e.innerHeight || t.clientHeight || a.clientHeight;
  return { width: l, height: o };
}
function Sv() {
  let e = document.documentElement;
  return (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0);
}
function wv() {
  let e = document.documentElement;
  return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
}
function Cv(e, n, t = !0) {
  var a, l, o, i;
  if (e) {
    const r = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : gu(e), s = r.height, c = r.width, u = n.offsetHeight, f = n.offsetWidth, m = n.getBoundingClientRect(), v = wv(), g = Sv(), h = yu();
    let y, k, p = "top";
    m.top + u + s > h.height ? (y = m.top + v - s, p = "bottom", y < 0 && (y = v)) : y = u + m.top + v, m.left + c > h.width ? k = Math.max(0, m.left + g + f - c) : k = m.left + g, e.style.top = y + "px", e.style.left = k + "px", e.style.transformOrigin = p, t && (e.style.marginTop = p === "bottom" ? `calc(${(l = (a = Il(/-anchor-gutter$/)) == null ? void 0 : a.value) != null ? l : "2px"} * -1)` : (i = (o = Il(/-anchor-gutter$/)) == null ? void 0 : o.value) != null ? i : "");
  }
}
function xv(e, n) {
  e && (typeof n == "string" ? e.style.cssText = n : Object.entries(n || {}).forEach(([t, a]) => e.style[t] = a));
}
function wl(e, n) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function Vv(e, n, t = !0) {
  var a, l, o, i;
  if (e) {
    const r = e.offsetParent ? { width: e.offsetWidth, height: e.offsetHeight } : gu(e), s = n.offsetHeight, c = n.getBoundingClientRect(), u = yu();
    let f, m, v = "top";
    c.top + s + r.height > u.height ? (f = -1 * r.height, v = "bottom", c.top + f < 0 && (f = -1 * c.top)) : f = s, r.width > u.width ? m = c.left * -1 : c.left + r.width > u.width ? m = (c.left + r.width - u.width) * -1 : m = 0, e.style.top = f + "px", e.style.left = m + "px", e.style.transformOrigin = v, t && (e.style.marginTop = v === "bottom" ? `calc(${(l = (a = Il(/-anchor-gutter$/)) == null ? void 0 : a.value) != null ? l : "2px"} * -1)` : (i = (o = Il(/-anchor-gutter$/)) == null ? void 0 : o.value) != null ? i : "");
  }
}
function Ja(e) {
  return typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
}
function Dl(e, n = {}) {
  if (Ja(e)) {
    const t = (a, l) => {
      var o, i;
      const r = (o = e == null ? void 0 : e.$attrs) != null && o[a] ? [(i = e == null ? void 0 : e.$attrs) == null ? void 0 : i[a]] : [];
      return [l].flat().reduce((s, c) => {
        if (c != null) {
          const u = typeof c;
          if (u === "string" || u === "number")
            s.push(c);
          else if (u === "object") {
            const f = Array.isArray(c) ? t(a, c) : Object.entries(c).map(([m, v]) => a === "style" && (v || v === 0) ? `${m.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${v}` : v ? m : void 0);
            s = f.length ? s.concat(f.filter((m) => !!m)) : s;
          }
        }
        return s;
      }, r);
    };
    Object.entries(n).forEach(([a, l]) => {
      if (l != null) {
        const o = a.match(/^on(.+)/);
        o ? e.addEventListener(o[1].toLowerCase(), l) : a === "p-bind" ? Dl(e, l) : (l = a === "class" ? [...new Set(t("class", l))].join(" ").trim() : a === "style" ? t("style", l).join(";").trim() : l, (e.$attrs = e.$attrs || {}) && (e.$attrs[a] = l), e.setAttribute(a, l));
      }
    });
  }
}
function Pv(e, n = {}, ...t) {
  {
    const a = document.createElement(e);
    return Dl(a, n), a.append(...t), a;
  }
}
function dn(e, n) {
  return Ja(e) ? Array.from(e.querySelectorAll(n)) : [];
}
function Nt(e, n) {
  return Ja(e) ? e.matches(n) ? e : e.querySelector(n) : null;
}
function Pn(e, n) {
  if (Ja(e)) {
    const t = e.getAttribute(n);
    return isNaN(t) ? t === "true" || t === "false" ? t === "true" : t : +t;
  }
}
function $r(e, n = "") {
  let t = dn(
    e,
    `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`
  ), a = [];
  for (let l of t)
    getComputedStyle(l).display != "none" && getComputedStyle(l).visibility != "hidden" && a.push(l);
  return a;
}
function _r(e) {
  if (e) {
    let n = e.offsetHeight, t = getComputedStyle(e);
    return n -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom) + parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), n;
  }
  return 0;
}
function Mi(e) {
  if (e) {
    let n = e.parentNode;
    return n && n instanceof ShadowRoot && n.host && (n = n.host), n;
  }
  return null;
}
function ka(e) {
  var n;
  if (e) {
    let t = (n = Mi(e)) == null ? void 0 : n.childNodes, a = 0;
    if (t)
      for (let l = 0; l < t.length; l++) {
        if (t[l] === e) return a;
        t[l].nodeType === 1 && a++;
      }
  }
  return -1;
}
function Tv(e) {
  if (e) {
    let n = e.getBoundingClientRect();
    return {
      top: n.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: n.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Iv(e, n) {
  return e ? e.offsetHeight : 0;
}
function bu(e, n = []) {
  const t = Mi(e);
  return t === null ? n : bu(t, n.concat([t]));
}
function Dv(e) {
  let n = [];
  if (e) {
    let t = bu(e);
    const a = /(auto|scroll)/, l = (o) => {
      try {
        let i = window.getComputedStyle(o, null);
        return a.test(i.getPropertyValue("overflow")) || a.test(i.getPropertyValue("overflowX")) || a.test(i.getPropertyValue("overflowY"));
      } catch {
        return !1;
      }
    };
    for (let o of t) {
      let i = o.nodeType === 1 && o.dataset.scrollselectors;
      if (i) {
        let r = i.split(",");
        for (let s of r) {
          let c = Nt(o, s);
          c && l(c) && n.push(c);
        }
      }
      o.nodeType !== 9 && l(o) && n.push(o);
    }
  }
  return n;
}
function Mv(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Mi(e));
}
function Or(e) {
  if (e) {
    let n = e.offsetWidth, t = getComputedStyle(e);
    return n -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight) + parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth), n;
  }
  return 0;
}
function pu() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Bv() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function ku(e, n = "", t) {
  Ja(e) && t !== null && t !== void 0 && e.setAttribute(n, t);
}
function Ta(e) {
  "@babel/helpers - typeof";
  return Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ta(e);
}
function Er(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Lr(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Er(Object(t), !0).forEach(function(a) {
      Av(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Er(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function Av(e, n, t) {
  return (n = $v(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function $v(e) {
  var n = _v(e, "string");
  return Ta(n) == "symbol" ? n : n + "";
}
function _v(e, n) {
  if (Ta(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n || "default");
    if (Ta(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Ov(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  au() ? mt(e) : n ? e() : be(e);
}
var Ev = 0;
function Lv(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Y(!1), a = Y(e), l = Y(null), o = pu() ? window.document : void 0, i = n.document, r = i === void 0 ? o : i, s = n.immediate, c = s === void 0 ? !0 : s, u = n.manual, f = u === void 0 ? !1 : u, m = n.name, v = m === void 0 ? "style_".concat(++Ev) : m, g = n.id, h = g === void 0 ? void 0 : g, y = n.media, k = y === void 0 ? void 0 : y, p = n.nonce, w = p === void 0 ? void 0 : p, T = n.first, C = T === void 0 ? !1 : T, V = n.onMounted, x = V === void 0 ? void 0 : V, P = n.onUpdated, S = P === void 0 ? void 0 : P, I = n.onLoad, D = I === void 0 ? void 0 : I, M = n.props, A = M === void 0 ? {} : M, E = function() {
  }, F = function(N) {
    var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (r) {
      var _ = Lr(Lr({}, A), z), R = _.name || v, U = _.id || h, ae = _.nonce || w;
      l.value = r.querySelector('style[data-primevue-style-id="'.concat(R, '"]')) || r.getElementById(U) || r.createElement("style"), l.value.isConnected || (a.value = N || e, Dl(l.value, {
        type: "text/css",
        id: U,
        media: k,
        nonce: ae
      }), C ? r.head.prepend(l.value) : r.head.appendChild(l.value), ku(l.value, "data-primevue-style-id", R), Dl(l.value, _), l.value.onload = function(re) {
        return D == null ? void 0 : D(re, {
          name: R
        });
      }, x == null || x(R)), !t.value && (E = q(a, function(re) {
        l.value.textContent = re, S == null || S(R);
      }, {
        immediate: !0
      }), t.value = !0);
    }
  }, j = function() {
    !r || !t.value || (E(), Mv(l.value) && r.head.removeChild(l.value), t.value = !1);
  };
  return c && !f && Ov(F), {
    id: h,
    name: v,
    el: l,
    css: a,
    unload: j,
    load: F,
    isLoaded: Xa(t)
  };
}
function Ia(e) {
  "@babel/helpers - typeof";
  return Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ia(e);
}
function Fr(e, n) {
  return Hv(e) || Rv(e, n) || Nv(e, n) || Fv();
}
function Fv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nv(e, n) {
  if (e) {
    if (typeof e == "string") return Nr(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Nr(e, n) : void 0;
  }
}
function Nr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
  return a;
}
function Rv(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var a, l, o, i, r = [], s = !0, c = !1;
    try {
      if (o = (t = t.call(e)).next, n !== 0) for (; !(s = (a = o.call(t)).done) && (r.push(a.value), r.length !== n); s = !0) ;
    } catch (u) {
      c = !0, l = u;
    } finally {
      try {
        if (!s && t.return != null && (i = t.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw l;
      }
    }
    return r;
  }
}
function Hv(e) {
  if (Array.isArray(e)) return e;
}
function Rr(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Co(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Rr(Object(t), !0).forEach(function(a) {
      zv(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Rr(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function zv(e, n, t) {
  return (n = jv(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function jv(e) {
  var n = Yv(e, "string");
  return Ia(n) == "symbol" ? n : n + "";
}
function Yv(e, n) {
  if (Ia(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n || "default");
    if (Ia(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
var Wv = function(n) {
  var t = n.dt;
  return `
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(t("disabled.opacity"), `;
}

.pi {
    font-size: `).concat(t("icon.size"), `;
}

.p-icon {
    width: `).concat(t("icon.size"), `;
    height: `).concat(t("icon.size"), `;
}

.p-overlay-mask {
    background: `).concat(t("mask.background"), `;
    color: `).concat(t("mask.color"), `;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(t("mask.transition.duration"), ` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(t("mask.transition.duration"), ` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(t("mask.background"), `;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(t("mask.background"), `;
    }
    to {
        background: transparent;
    }
}
`);
}, Uv = function(n) {
  var t = n.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(t("scrollbar.width"), `;
}
`);
}, Kv = {}, Gv = {}, je = {
  name: "base",
  css: Uv,
  theme: Wv,
  classes: Kv,
  inlineStyles: Gv,
  load: function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(o) {
      return o;
    }, l = a(Gt(n, {
      dt: So
    }));
    return l ? Lv(xa(l), Co({
      name: this.name
    }, t)) : {};
  },
  loadCSS: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, n);
  },
  loadTheme: function() {
    var n = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.theme, t, function(a) {
      return Oe.transformCSS(t.name || n.name, a);
    });
  },
  getCommonTheme: function(n) {
    return Oe.getCommon(this.name, n);
  },
  getComponentTheme: function(n) {
    return Oe.getComponent(this.name, n);
  },
  getDirectiveTheme: function(n) {
    return Oe.getDirective(this.name, n);
  },
  getPresetTheme: function(n, t, a) {
    return Oe.getCustomPreset(this.name, n, t, a);
  },
  getLayerOrderThemeCSS: function() {
    return Oe.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var a = Gt(this.css, {
        dt: So
      }), l = xa("".concat(a).concat(n)), o = Object.entries(t).reduce(function(i, r) {
        var s = Fr(r, 2), c = s[0], u = s[1];
        return i.push("".concat(c, '="').concat(u, '"')) && i;
      }, []).join(" ");
      return '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(o, ">").concat(l, "</style>");
    }
    return "";
  },
  getCommonThemeStyleSheet: function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Oe.getCommonStyleSheet(this.name, n, t);
  },
  getThemeStyleSheet: function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = [Oe.getStyleSheet(this.name, n, t)];
    if (this.theme) {
      var l = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), o = Gt(this.theme, {
        dt: So
      }), i = xa(Oe.transformCSS(l, o)), r = Object.entries(t).reduce(function(s, c) {
        var u = Fr(c, 2), f = u[0], m = u[1];
        return s.push("".concat(f, '="').concat(m, '"')) && s;
      }, []).join(" ");
      a.push('<style type="text/css" data-primevue-style-id="'.concat(l, '" ').concat(r, ">").concat(i, "</style>"));
    }
    return a.join("");
  },
  extend: function(n) {
    return Co(Co({}, this), {}, {
      css: void 0,
      theme: void 0
    }, n);
  }
}, Qn = Di();
function Da(e) {
  "@babel/helpers - typeof";
  return Da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Da(e);
}
function Hr(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Va(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Hr(Object(t), !0).forEach(function(a) {
      qv(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Hr(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function qv(e, n, t) {
  return (n = Xv(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Xv(e) {
  var n = Zv(e, "string");
  return Da(n) == "symbol" ? n : n + "";
}
function Zv(e, n) {
  if (Da(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n || "default");
    if (Da(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
var Jv = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [ut.STARTS_WITH, ut.CONTAINS, ut.NOT_CONTAINS, ut.ENDS_WITH, ut.EQUALS, ut.NOT_EQUALS],
    numeric: [ut.EQUALS, ut.NOT_EQUALS, ut.LESS_THAN, ut.LESS_THAN_OR_EQUAL_TO, ut.GREATER_THAN, ut.GREATER_THAN_OR_EQUAL_TO],
    date: [ut.DATE_IS, ut.DATE_IS_NOT, ut.DATE_BEFORE, ut.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, Qv = Symbol();
function em(e, n) {
  var t = {
    config: Vt(n)
  };
  return e.config.globalProperties.$primevue = t, e.provide(Qv, t), tm(), nm(e, t), t;
}
var ea = [];
function tm() {
  Rt.clear(), ea.forEach(function(e) {
    return e == null ? void 0 : e();
  }), ea = [];
}
function nm(e, n) {
  var t = Y(!1), a = function() {
    if (!Oe.isStyleNameLoaded("common")) {
      var c, u, f = ((c = je.getCommonTheme) === null || c === void 0 ? void 0 : c.call(je)) || {}, m = f.primitive, v = f.semantic, g = {
        nonce: (u = n.config) === null || u === void 0 || (u = u.csp) === null || u === void 0 ? void 0 : u.nonce
      };
      je.load(m == null ? void 0 : m.css, Va({
        name: "primitive-variables"
      }, g)), je.load(v == null ? void 0 : v.css, Va({
        name: "semantic-variables"
      }, g)), je.loadTheme(Va({
        name: "global-style"
      }, g)), Oe.setLoadedStyleName("common");
    }
  };
  Rt.on("theme:change", function(s) {
    t.value || (e.config.globalProperties.$primevue.config.theme = s, t.value = !0);
  });
  var l = q(n.config, function(s, c) {
    Qn.emit("config:change", {
      newValue: s,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), o = q(function() {
    return n.config.ripple;
  }, function(s, c) {
    Qn.emit("config:ripple:change", {
      newValue: s,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = q(function() {
    return n.config.theme;
  }, function(s, c) {
    t.value || Oe.setTheme(s), n.config.unstyled || a(), t.value = !1, Qn.emit("config:theme:change", {
      newValue: s,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), r = q(function() {
    return n.config.unstyled;
  }, function(s, c) {
    !s && n.config.theme && a(), Qn.emit("config:unstyled:change", {
      newValue: s,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  });
  ea.push(l), ea.push(o), ea.push(i), ea.push(r);
}
var am = {
  install: function(n, t) {
    var a = Va(Va({}, Jv), t);
    em(n, a);
  }
};
function lm() {
  let e = [];
  const n = (i, r, s = 999) => {
    const c = l(i, r, s), u = c.value + (c.key === i ? 0 : s) + 1;
    return e.push({ key: i, value: u }), u;
  }, t = (i) => {
    e = e.filter((r) => r.value !== i);
  }, a = (i, r) => l(i).value, l = (i, r, s = 0) => [...e].reverse().find((c) => !0) || { key: i, value: s }, o = (i) => i && parseInt(i.style.zIndex, 10) || 0;
  return {
    get: o,
    set: (i, r, s) => {
      r && (r.style.zIndex = String(n(i, !0, s)));
    },
    clear: (i) => {
      i && (t(o(i)), i.style.zIndex = "");
    },
    getCurrent: (i) => a(i)
  };
}
var xo = lm(), ml = {};
function om(e = "pui_id_") {
  return ml.hasOwnProperty(e) || (ml[e] = 0), ml[e]++, `${e}${ml[e]}`;
}
function Ma(e) {
  "@babel/helpers - typeof";
  return Ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ma(e);
}
function im(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function rm(e, n) {
  for (var t = 0; t < n.length; t++) {
    var a = n[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, um(a.key), a);
  }
}
function sm(e, n, t) {
  return n && rm(e.prototype, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function um(e) {
  var n = cm(e, "string");
  return Ma(n) == "symbol" ? n : n + "";
}
function cm(e, n) {
  if (Ma(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n);
    if (Ma(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var dm = /* @__PURE__ */ function() {
  function e(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    im(this, e), this.element = n, this.listener = t;
  }
  return sm(e, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = Dv(this.element);
      for (var t = 0; t < this.scrollableParents.length; t++)
        this.scrollableParents[t].addEventListener("scroll", this.listener);
    }
  }, {
    key: "unbindScrollListener",
    value: function() {
      if (this.scrollableParents)
        for (var t = 0; t < this.scrollableParents.length; t++)
          this.scrollableParents[t].removeEventListener("scroll", this.listener);
    }
  }, {
    key: "destroy",
    value: function() {
      this.unbindScrollListener(), this.element = null, this.listener = null, this.scrollableParents = null;
    }
  }]);
}();
function Pa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return om(e);
}
var mn = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(n) {
    return this._loadedStyleNames.has(n);
  },
  setLoadedStyleName: function(n) {
    this._loadedStyleNames.add(n);
  },
  deleteLoadedStyleName: function(n) {
    this._loadedStyleNames.delete(n);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
}, zr = je.extend({
  name: "common"
});
function Ba(e) {
  "@babel/helpers - typeof";
  return Ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ba(e);
}
function fm(e) {
  return Cu(e) || vm(e) || wu(e) || Su();
}
function vm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function hl(e, n) {
  return Cu(e) || mm(e, n) || wu(e, n) || Su();
}
function Su() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wu(e, n) {
  if (e) {
    if (typeof e == "string") return jr(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? jr(e, n) : void 0;
  }
}
function jr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
  return a;
}
function mm(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var a, l, o, i, r = [], s = !0, c = !1;
    try {
      if (o = (t = t.call(e)).next, n === 0) {
        if (Object(t) !== t) return;
        s = !1;
      } else for (; !(s = (a = o.call(t)).done) && (r.push(a.value), r.length !== n); s = !0) ;
    } catch (u) {
      c = !0, l = u;
    } finally {
      try {
        if (!s && t.return != null && (i = t.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw l;
      }
    }
    return r;
  }
}
function Cu(e) {
  if (Array.isArray(e)) return e;
}
function Yr(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function ke(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Yr(Object(t), !0).forEach(function(a) {
      Cl(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Yr(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function Cl(e, n, t) {
  return (n = hm(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function hm(e) {
  var n = gm(e, "string");
  return Ba(n) == "symbol" ? n : n + "";
}
function gm(e, n) {
  if (Ba(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n || "default");
    if (Ba(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
var Qa = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(n) {
        n || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(n) {
        var t = this;
        n ? (this._loadScopedThemeStyles(n), this._themeChangeListener(function() {
          return t._loadScopedThemeStyles(n);
        })) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  beforeCreate: function() {
    var n, t, a, l, o, i, r, s, c, u, f, m = (n = this.pt) === null || n === void 0 ? void 0 : n._usept, v = m ? (t = this.pt) === null || t === void 0 || (t = t.originalValue) === null || t === void 0 ? void 0 : t[this.$.type.name] : void 0, g = m ? (a = this.pt) === null || a === void 0 || (a = a.value) === null || a === void 0 ? void 0 : a[this.$.type.name] : this.pt;
    (l = g || v) === null || l === void 0 || (l = l.hooks) === null || l === void 0 || (o = l.onBeforeCreate) === null || o === void 0 || o.call(l);
    var h = (i = this.$primevueConfig) === null || i === void 0 || (i = i.pt) === null || i === void 0 ? void 0 : i._usept, y = h ? (r = this.$primevue) === null || r === void 0 || (r = r.config) === null || r === void 0 || (r = r.pt) === null || r === void 0 ? void 0 : r.originalValue : void 0, k = h ? (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s.value : (c = this.$primevue) === null || c === void 0 || (c = c.config) === null || c === void 0 ? void 0 : c.pt;
    (u = k || y) === null || u === void 0 || (u = u[this.$.type.name]) === null || u === void 0 || (u = u.hooks) === null || u === void 0 || (f = u.onBeforeCreate) === null || f === void 0 || f.call(u);
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this.rootEl = Nt(this.$el, '[data-pc-name="'.concat(Ht(this.$.type.name), '"]')), this.rootEl && (this.rootEl.setAttribute(this.$attrSelector, ""), this.rootEl.$pc = ke({
      name: this.$.type.name
    }, this.$params)), this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(n) {
      if (!this.$options.hostName) {
        var t = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(n)), a = this._useDefaultPT(this._getOptionValue, "hooks.".concat(n));
        t == null || t(), a == null || a();
      }
    },
    _mergeProps: function(n) {
      for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
        a[l - 1] = arguments[l];
      return isFunction(n) ? n.apply(void 0, a) : B.apply(void 0, a);
    },
    _loadStyles: function() {
      var n = this, t = function() {
        mn.isStyleNameLoaded("base") || (je.loadCSS(n.$styleOptions), n._loadGlobalStyles(), mn.setLoadedStyleName("base")), n._loadThemeStyles();
      };
      t(), this._themeChangeListener(t);
    },
    _loadCoreStyles: function() {
      var n, t;
      !mn.isStyleNameLoaded((n = this.$style) === null || n === void 0 ? void 0 : n.name) && (t = this.$style) !== null && t !== void 0 && t.name && (zr.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), mn.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var n = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      ct(n) && je.load(n, ke({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var n, t;
      if (!this.isUnstyled) {
        if (!Oe.isStyleNameLoaded("common")) {
          var a, l, o = ((a = this.$style) === null || a === void 0 || (l = a.getCommonTheme) === null || l === void 0 ? void 0 : l.call(a)) || {}, i = o.primitive, r = o.semantic;
          je.load(i == null ? void 0 : i.css, ke({
            name: "primitive-variables"
          }, this.$styleOptions)), je.load(r == null ? void 0 : r.css, ke({
            name: "semantic-variables"
          }, this.$styleOptions)), je.loadTheme(ke({
            name: "global-style"
          }, this.$styleOptions)), Oe.setLoadedStyleName("common");
        }
        if (!Oe.isStyleNameLoaded((n = this.$style) === null || n === void 0 ? void 0 : n.name) && (t = this.$style) !== null && t !== void 0 && t.name) {
          var s, c, u, f, m = ((s = this.$style) === null || s === void 0 || (c = s.getComponentTheme) === null || c === void 0 ? void 0 : c.call(s)) || {}, v = m.css;
          (u = this.$style) === null || u === void 0 || u.load(v, ke({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (f = this.$style) === null || f === void 0 || f.loadTheme(ke({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions)), Oe.setLoadedStyleName(this.$style.name);
        }
        if (!Oe.isStyleNameLoaded("layer-order")) {
          var g, h, y = (g = this.$style) === null || g === void 0 || (h = g.getLayerOrderThemeCSS) === null || h === void 0 ? void 0 : h.call(g);
          je.load(y, ke({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), Oe.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(n) {
      var t, a, l, o = ((t = this.$style) === null || t === void 0 || (a = t.getPresetTheme) === null || a === void 0 ? void 0 : a.call(t, n, "[".concat(this.$attrSelector, "]"))) || {}, i = o.css, r = (l = this.$style) === null || l === void 0 ? void 0 : l.load(i, ke({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = r.el;
    },
    _unloadScopedThemeStyles: function() {
      var n;
      (n = this.scopedStyleEl) === null || n === void 0 || (n = n.value) === null || n === void 0 || n.remove();
    },
    _themeChangeListener: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      mn.clearLoadedStyleNames(), Rt.on("theme:change", n);
    },
    _getHostInstance: function(n) {
      return n ? this.$options.hostName ? n.$.type.name === this.$options.hostName ? n : this._getHostInstance(n.$parentInstance) : n.$parentInstance : void 0;
    },
    _getPropValue: function(n) {
      var t;
      return this[n] || ((t = this._getHostInstance(this)) === null || t === void 0 ? void 0 : t[n]);
    },
    _getOptionValue: function(n) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Ti(n, t, a);
    },
    _getPTValue: function() {
      var n, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = /./g.test(a) && !!l[a.split(".")[0]], r = this._getPropValue("ptOptions") || ((n = this.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, s = r.mergeSections, c = s === void 0 ? !0 : s, u = r.mergeProps, f = u === void 0 ? !1 : u, m = o ? i ? this._useGlobalPT(this._getPTClassValue, a, l) : this._useDefaultPT(this._getPTClassValue, a, l) : void 0, v = i ? void 0 : this._getPTSelf(t, this._getPTClassValue, a, ke(ke({}, l), {}, {
        global: m || {}
      })), g = this._getPTDatasets(a);
      return c || !c && v ? f ? this._mergeProps(f, m, v, g) : ke(ke(ke({}, m), v), g) : ke(ke({}, v), g);
    },
    _getPTSelf: function() {
      for (var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
        a[l - 1] = arguments[l];
      return B(
        this._usePT.apply(this, [this._getPT(n, this.$name)].concat(a)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(a))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var n, t, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", l = "data-pc-", o = a === "root" && ct((n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"]);
      return a !== "transition" && ke(ke({}, a === "root" && ke(Cl({}, "".concat(l, "name"), Ht(o ? (t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"] : this.$.type.name)), o && Cl({}, "".concat(l, "extend"), Ht(this.$.type.name)))), {}, Cl({}, "".concat(l, "section"), Ht(a)));
    },
    _getPTClassValue: function() {
      var n = this._getOptionValue.apply(this, arguments);
      return Ct(n) || Ii(n) ? {
        class: n
      } : n;
    },
    _getPT: function(n) {
      var t = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", l = arguments.length > 2 ? arguments[2] : void 0, o = function(r) {
        var s, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = l ? l(r) : r, f = Ht(a), m = Ht(t.$name);
        return (s = c ? f !== m ? u == null ? void 0 : u[f] : void 0 : u == null ? void 0 : u[f]) !== null && s !== void 0 ? s : u;
      };
      return n != null && n.hasOwnProperty("_usept") ? {
        _usept: n._usept,
        originalValue: o(n.originalValue),
        value: o(n.value)
      } : o(n, !0);
    },
    _usePT: function(n, t, a, l) {
      var o = function(h) {
        return t(h, a, l);
      };
      if (n != null && n.hasOwnProperty("_usept")) {
        var i, r = n._usept || ((i = this.$primevueConfig) === null || i === void 0 ? void 0 : i.ptOptions) || {}, s = r.mergeSections, c = s === void 0 ? !0 : s, u = r.mergeProps, f = u === void 0 ? !1 : u, m = o(n.originalValue), v = o(n.value);
        return m === void 0 && v === void 0 ? void 0 : Ct(v) ? v : Ct(m) ? m : c || !c && v ? f ? this._mergeProps(f, m, v) : ke(ke({}, m), v) : v;
      }
      return o(n);
    },
    _useGlobalPT: function(n, t, a) {
      return this._usePT(this.globalPT, n, t, a);
    },
    _useDefaultPT: function(n, t, a) {
      return this._usePT(this.defaultPT, n, t, a);
    },
    ptm: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, n, ke(ke({}, this.$params), t));
    },
    ptmi: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return B(this.$_attrsWithoutPT, this.ptm(n, t));
    },
    ptmo: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(n, t, ke({
        instance: this
      }, a), !1);
    },
    cx: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, n, ke(ke({}, this.$params), t));
    },
    sx: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (t) {
        var l = this._getOptionValue(this.$style.inlineStyles, n, ke(ke({}, this.$params), a)), o = this._getOptionValue(zr.inlineStyles, n, ke(ke({}, this.$params), a));
        return [o, l];
      }
    }
  },
  computed: {
    globalPT: function() {
      var n, t = this;
      return this._getPT((n = this.$primevueConfig) === null || n === void 0 ? void 0 : n.pt, void 0, function(a) {
        return Gt(a, {
          instance: t
        });
      });
    },
    defaultPT: function() {
      var n, t = this;
      return this._getPT((n = this.$primevueConfig) === null || n === void 0 ? void 0 : n.pt, void 0, function(a) {
        return t._getOptionValue(a, t.$name, ke({}, t.$params)) || Gt(a, ke({}, t.$params));
      });
    },
    isUnstyled: function() {
      var n;
      return this.unstyled !== void 0 ? this.unstyled : (n = this.$primevueConfig) === null || n === void 0 ? void 0 : n.unstyled;
    },
    $theme: function() {
      var n;
      return (n = this.$primevueConfig) === null || n === void 0 ? void 0 : n.theme;
    },
    $style: function() {
      return ke(ke({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadTheme: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var n;
      return {
        nonce: (n = this.$primevueConfig) === null || n === void 0 || (n = n.csp) === null || n === void 0 ? void 0 : n.nonce
      };
    },
    $primevueConfig: function() {
      var n;
      return (n = this.$primevue) === null || n === void 0 ? void 0 : n.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var n = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: n,
          props: n == null ? void 0 : n.$props,
          state: n == null ? void 0 : n.$data,
          attrs: n == null ? void 0 : n.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(n) {
        var t = hl(n, 1), a = t[0];
        return a == null ? void 0 : a.startsWith("pt:");
      }).reduce(function(n, t) {
        var a = hl(t, 2), l = a[0], o = a[1], i = l.split(":"), r = fm(i), s = r.slice(1);
        return s == null || s.reduce(function(c, u, f, m) {
          return !c[u] && (c[u] = f === m.length - 1 ? o : {}), c[u];
        }, n), n;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(n) {
        var t = hl(n, 1), a = t[0];
        return !(a != null && a.startsWith("pt:"));
      }).reduce(function(n, t) {
        var a = hl(t, 2), l = a[0], o = a[1];
        return n[l] = o, n;
      }, {});
    },
    $attrSelector: function() {
      return Pa("pc");
    }
  }
}, ym = `
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, bm = je.extend({
  name: "baseicon",
  css: ym
});
function Aa(e) {
  "@babel/helpers - typeof";
  return Aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Aa(e);
}
function Wr(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Ur(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Wr(Object(t), !0).forEach(function(a) {
      pm(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wr(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function pm(e, n, t) {
  return (n = km(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function km(e) {
  var n = Sm(e, "string");
  return Aa(n) == "symbol" ? n : n + "";
}
function Sm(e, n) {
  if (Aa(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n || "default");
    if (Aa(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
var da = {
  name: "BaseIcon",
  extends: Qa,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: bm,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var n = Za(this.label);
      return Ur(Ur({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: n ? void 0 : "img",
        "aria-label": n ? void 0 : this.label,
        "aria-hidden": n
      });
    }
  }
}, xu = {
  name: "CalendarIcon",
  extends: da
}, wm = /* @__PURE__ */ $e("path", {
  d: "M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z",
  fill: "currentColor"
}, null, -1), Cm = [wm];
function xm(e, n, t, a, l, o) {
  return le(), de("svg", B({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Cm, 16);
}
xu.render = xm;
var Vu = {
  name: "ChevronDownIcon",
  extends: da
}, Vm = /* @__PURE__ */ $e("path", {
  d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
  fill: "currentColor"
}, null, -1), Pm = [Vm];
function Tm(e, n, t, a, l, o) {
  return le(), de("svg", B({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Pm, 16);
}
Vu.render = Tm;
var Pu = {
  name: "ChevronLeftIcon",
  extends: da
}, Im = /* @__PURE__ */ $e("path", {
  d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
  fill: "currentColor"
}, null, -1), Dm = [Im];
function Mm(e, n, t, a, l, o) {
  return le(), de("svg", B({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Dm, 16);
}
Pu.render = Mm;
var Tu = {
  name: "ChevronRightIcon",
  extends: da
}, Bm = /* @__PURE__ */ $e("path", {
  d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
  fill: "currentColor"
}, null, -1), Am = [Bm];
function $m(e, n, t, a, l, o) {
  return le(), de("svg", B({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Am, 16);
}
Tu.render = $m;
var Iu = {
  name: "ChevronUpIcon",
  extends: da
}, _m = /* @__PURE__ */ $e("path", {
  d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
  fill: "currentColor"
}, null, -1), Om = [_m];
function Em(e, n, t, a, l, o) {
  return le(), de("svg", B({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Om, 16);
}
Iu.render = Em;
var Du = {
  name: "SpinnerIcon",
  extends: da
}, Lm = /* @__PURE__ */ $e("path", {
  d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
  fill: "currentColor"
}, null, -1), Fm = [Lm];
function Nm(e, n, t, a, l, o) {
  return le(), de("svg", B({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Fm, 16);
}
Du.render = Nm;
var Rm = function(n) {
  var t = n.dt;
  return `
.p-badge {
    display: inline-flex;
    border-radius: `.concat(t("badge.border.radius"), `;
    align-items: center;
    justify-content: center;
    padding: `).concat(t("badge.padding"), `;
    background: `).concat(t("badge.primary.background"), `;
    color: `).concat(t("badge.primary.color"), `;
    font-size: `).concat(t("badge.font.size"), `;
    font-weight: `).concat(t("badge.font.weight"), `;
    min-width: `).concat(t("badge.min.width"), `;
    height: `).concat(t("badge.height"), `;
}

.p-badge-dot {
    width: `).concat(t("badge.dot.size"), `;
    min-width: `).concat(t("badge.dot.size"), `;
    height: `).concat(t("badge.dot.size"), `;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(t("badge.secondary.background"), `;
    color: `).concat(t("badge.secondary.color"), `;
}

.p-badge-success {
    background: `).concat(t("badge.success.background"), `;
    color: `).concat(t("badge.success.color"), `;
}

.p-badge-info {
    background: `).concat(t("badge.info.background"), `;
    color: `).concat(t("badge.info.color"), `;
}

.p-badge-warn {
    background: `).concat(t("badge.warn.background"), `;
    color: `).concat(t("badge.warn.color"), `;
}

.p-badge-danger {
    background: `).concat(t("badge.danger.background"), `;
    color: `).concat(t("badge.danger.color"), `;
}

.p-badge-contrast {
    background: `).concat(t("badge.contrast.background"), `;
    color: `).concat(t("badge.contrast.color"), `;
}

.p-badge-sm {
    font-size: `).concat(t("badge.sm.font.size"), `;
    min-width: `).concat(t("badge.sm.min.width"), `;
    height: `).concat(t("badge.sm.height"), `;
}

.p-badge-lg {
    font-size: `).concat(t("badge.lg.font.size"), `;
    min-width: `).concat(t("badge.lg.min.width"), `;
    height: `).concat(t("badge.lg.height"), `;
}

.p-badge-xl {
    font-size: `).concat(t("badge.xl.font.size"), `;
    min-width: `).concat(t("badge.xl.min.width"), `;
    height: `).concat(t("badge.xl.height"), `;
}
`);
}, Hm = {
  root: function(n) {
    var t = n.props, a = n.instance;
    return ["p-badge p-component", {
      "p-badge-circle": ct(t.value) && String(t.value).length === 1,
      "p-badge-dot": Za(t.value) && !a.$slots.default,
      "p-badge-sm": t.size === "small",
      "p-badge-lg": t.size === "large",
      "p-badge-xl": t.size === "xlarge",
      "p-badge-info": t.severity === "info",
      "p-badge-success": t.severity === "success",
      "p-badge-warn": t.severity === "warn",
      "p-badge-danger": t.severity === "danger",
      "p-badge-secondary": t.severity === "secondary",
      "p-badge-contrast": t.severity === "contrast"
    }];
  }
}, zm = je.extend({
  name: "badge",
  theme: Rm,
  classes: Hm
}), jm = {
  name: "BaseBadge",
  extends: Qa,
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    severity: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  style: zm,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
}, Mu = {
  name: "Badge",
  extends: jm,
  inheritAttrs: !1
};
function Ym(e, n, t, a, l, o) {
  return le(), de("span", B({
    class: e.cx("root")
  }, e.ptmi("root")), [Te(e.$slots, "default", {}, function() {
    return [dt(Ee(e.value), 1)];
  })], 16);
}
Mu.render = Ym;
function $a(e) {
  "@babel/helpers - typeof";
  return $a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $a(e);
}
function Kr(e, n) {
  return Gm(e) || Km(e, n) || Um(e, n) || Wm();
}
function Wm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Um(e, n) {
  if (e) {
    if (typeof e == "string") return Gr(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Gr(e, n) : void 0;
  }
}
function Gr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
  return a;
}
function Km(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var a, l, o, i, r = [], s = !0, c = !1;
    try {
      if (o = (t = t.call(e)).next, n !== 0) for (; !(s = (a = o.call(t)).done) && (r.push(a.value), r.length !== n); s = !0) ;
    } catch (u) {
      c = !0, l = u;
    } finally {
      try {
        if (!s && t.return != null && (i = t.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw l;
      }
    }
    return r;
  }
}
function Gm(e) {
  if (Array.isArray(e)) return e;
}
function qr(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function Pe(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? qr(Object(t), !0).forEach(function(a) {
      Fo(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qr(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function Fo(e, n, t) {
  return (n = qm(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function qm(e) {
  var n = Xm(e, "string");
  return $a(n) == "symbol" ? n : n + "";
}
function Xm(e, n) {
  if ($a(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n || "default");
    if ($a(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
var ge = {
  _getMeta: function() {
    return [gn(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], Gt(gn(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(n, t) {
    var a, l, o;
    return (a = (n == null || (l = n.instance) === null || l === void 0 ? void 0 : l.$primevue) || (t == null || (o = t.ctx) === null || o === void 0 || (o = o.appContext) === null || o === void 0 || (o = o.config) === null || o === void 0 || (o = o.globalProperties) === null || o === void 0 ? void 0 : o.$primevue)) === null || a === void 0 ? void 0 : a.config;
  },
  _getOptionValue: Ti,
  _getPTValue: function() {
    var n, t, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = function() {
      var p = ge._getOptionValue.apply(ge, arguments);
      return Ct(p) || Ii(p) ? {
        class: p
      } : p;
    }, c = ((n = a.binding) === null || n === void 0 || (n = n.value) === null || n === void 0 ? void 0 : n.ptOptions) || ((t = a.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, u = c.mergeSections, f = u === void 0 ? !0 : u, m = c.mergeProps, v = m === void 0 ? !1 : m, g = r ? ge._useDefaultPT(a, a.defaultPT(), s, o, i) : void 0, h = ge._usePT(a, ge._getPT(l, a.$name), s, o, Pe(Pe({}, i), {}, {
      global: g || {}
    })), y = ge._getPTDatasets(a, o);
    return f || !f && h ? v ? ge._mergeProps(a, v, g, h, y) : Pe(Pe(Pe({}, g), h), y) : Pe(Pe({}, h), y);
  },
  _getPTDatasets: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = "data-pc-";
    return Pe(Pe({}, t === "root" && Fo({}, "".concat(a, "name"), Ht(n.$name))), {}, Fo({}, "".concat(a, "section"), Ht(t)));
  },
  _getPT: function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 ? arguments[2] : void 0, l = function(i) {
      var r, s = a ? a(i) : i, c = Ht(t);
      return (r = s == null ? void 0 : s[c]) !== null && r !== void 0 ? r : s;
    };
    return n != null && n.hasOwnProperty("_usept") ? {
      _usept: n._usept,
      originalValue: l(n.originalValue),
      value: l(n.value)
    } : l(n);
  },
  _usePT: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, a = arguments.length > 2 ? arguments[2] : void 0, l = arguments.length > 3 ? arguments[3] : void 0, o = arguments.length > 4 ? arguments[4] : void 0, i = function(y) {
      return a(y, l, o);
    };
    if (t != null && t.hasOwnProperty("_usept")) {
      var r, s = t._usept || ((r = n.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, c = s.mergeSections, u = c === void 0 ? !0 : c, f = s.mergeProps, m = f === void 0 ? !1 : f, v = i(t.originalValue), g = i(t.value);
      return v === void 0 && g === void 0 ? void 0 : Ct(g) ? g : Ct(v) ? v : u || !u && g ? m ? ge._mergeProps(n, m, v, g) : Pe(Pe({}, v), g) : g;
    }
    return i(t);
  },
  _useDefaultPT: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0, l = arguments.length > 3 ? arguments[3] : void 0, o = arguments.length > 4 ? arguments[4] : void 0;
    return ge._usePT(n, t, a, l, o);
  },
  _loadStyles: function(n, t, a) {
    var l, o = ge._getConfig(t, a), i = {
      nonce: o == null || (l = o.csp) === null || l === void 0 ? void 0 : l.nonce
    };
    ge._loadCoreStyles(n.$instance, i), ge._loadThemeStyles(n.$instance, i), ge._loadScopedThemeStyles(n.$instance, i), ge._themeChangeListener(function() {
      return ge._loadThemeStyles(n.$instance, i);
    });
  },
  _loadCoreStyles: function() {
    var n, t, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    if (!mn.isStyleNameLoaded((n = a.$style) === null || n === void 0 ? void 0 : n.name) && (t = a.$style) !== null && t !== void 0 && t.name) {
      var o;
      je.loadCSS(l), a.isUnstyled() && ((o = a.$style) === null || o === void 0 || o.loadCSS(l)), mn.setLoadedStyleName(a.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var n, t, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0;
    if (!(a != null && a.isUnstyled())) {
      if (!Oe.isStyleNameLoaded("common")) {
        var o, i, r = ((o = a.$style) === null || o === void 0 || (i = o.getCommonTheme) === null || i === void 0 ? void 0 : i.call(o)) || {}, s = r.primitive, c = r.semantic;
        je.load(s == null ? void 0 : s.css, Pe({
          name: "primitive-variables"
        }, l)), je.load(c == null ? void 0 : c.css, Pe({
          name: "semantic-variables"
        }, l)), je.loadTheme(Pe({
          name: "global-style"
        }, l)), Oe.setLoadedStyleName("common");
      }
      if (!Oe.isStyleNameLoaded((n = a.$style) === null || n === void 0 ? void 0 : n.name) && (t = a.$style) !== null && t !== void 0 && t.name) {
        var u, f, m, v, g = ((u = a.$style) === null || u === void 0 || (f = u.getDirectiveTheme) === null || f === void 0 ? void 0 : f.call(u)) || {}, h = g.css;
        (m = a.$style) === null || m === void 0 || m.load(h, Pe({
          name: "".concat(a.$style.name, "-variables")
        }, l)), (v = a.$style) === null || v === void 0 || v.loadTheme(Pe({
          name: "".concat(a.$style.name, "-style")
        }, l)), Oe.setLoadedStyleName(a.$style.name);
      }
      if (!Oe.isStyleNameLoaded("layer-order")) {
        var y, k, p = (y = a.$style) === null || y === void 0 || (k = y.getLayerOrderThemeCSS) === null || k === void 0 ? void 0 : k.call(y);
        je.load(p, Pe({
          name: "layer-order",
          first: !0
        }, l)), Oe.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, a = n.preset();
    if (a && n.$attrSelector) {
      var l, o, i, r = ((l = n.$style) === null || l === void 0 || (o = l.getPresetTheme) === null || o === void 0 ? void 0 : o.call(l, a, "[".concat(n.$attrSelector, "]"))) || {}, s = r.css, c = (i = n.$style) === null || i === void 0 ? void 0 : i.load(s, Pe({
        name: "".concat(n.$attrSelector, "-").concat(n.$style.name)
      }, t));
      n.scopedStyleEl = c.el;
    }
  },
  _themeChangeListener: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    mn.clearLoadedStyleNames(), Rt.on("theme:change", n);
  },
  _hook: function(n, t, a, l, o, i) {
    var r, s, c = "on".concat(uv(t)), u = ge._getConfig(l, o), f = a == null ? void 0 : a.$instance, m = ge._usePT(f, ge._getPT(l == null || (r = l.value) === null || r === void 0 ? void 0 : r.pt, n), ge._getOptionValue, "hooks.".concat(c)), v = ge._useDefaultPT(f, u == null || (s = u.pt) === null || s === void 0 || (s = s.directives) === null || s === void 0 ? void 0 : s[n], ge._getOptionValue, "hooks.".concat(c)), g = {
      el: a,
      binding: l,
      vnode: o,
      prevVnode: i
    };
    m == null || m(f, g), v == null || v(f, g);
  },
  _mergeProps: function() {
    for (var n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length, a = new Array(t > 2 ? t - 2 : 0), l = 2; l < t; l++)
      a[l - 2] = arguments[l];
    return uu(n) ? n.apply(void 0, a) : B.apply(void 0, a);
  },
  _extend: function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = function(i, r, s, c, u) {
      var f, m, v;
      r._$instances = r._$instances || {};
      var g = ge._getConfig(s, c), h = r._$instances[n] || {}, y = Za(h) ? Pe(Pe({}, t), t == null ? void 0 : t.methods) : {};
      r._$instances[n] = Pe(Pe({}, h), {}, {
        /* new instance variables to pass in directive methods */
        $name: n,
        $host: r,
        $binding: s,
        $modifiers: s == null ? void 0 : s.modifiers,
        $value: s == null ? void 0 : s.value,
        $el: h.$el || r || void 0,
        $style: Pe({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadTheme: function() {
          }
        }, t == null ? void 0 : t.style),
        $primevueConfig: g,
        $attrSelector: r.$attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return ge._getPT(g == null ? void 0 : g.pt, void 0, function(p) {
            var w;
            return p == null || (w = p.directives) === null || w === void 0 ? void 0 : w[n];
          });
        },
        isUnstyled: function() {
          var p, w;
          return ((p = r.$instance) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.unstyled) !== void 0 ? (w = r.$instance) === null || w === void 0 || (w = w.$binding) === null || w === void 0 || (w = w.value) === null || w === void 0 ? void 0 : w.unstyled : g == null ? void 0 : g.unstyled;
        },
        theme: function() {
          var p;
          return (p = r.$instance) === null || p === void 0 || (p = p.$primevueConfig) === null || p === void 0 ? void 0 : p.theme;
        },
        preset: function() {
          var p;
          return (p = r.$instance) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.dt;
        },
        /* instance's methods */
        ptm: function() {
          var p, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return ge._getPTValue(r.$instance, (p = r.$instance) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.pt, w, Pe({}, T));
        },
        ptmo: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return ge._getPTValue(r.$instance, p, w, T, !1);
        },
        cx: function() {
          var p, w, T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (p = r.$instance) !== null && p !== void 0 && p.isUnstyled() ? void 0 : ge._getOptionValue((w = r.$instance) === null || w === void 0 || (w = w.$style) === null || w === void 0 ? void 0 : w.classes, T, Pe({}, C));
        },
        sx: function() {
          var p, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return T ? ge._getOptionValue((p = r.$instance) === null || p === void 0 || (p = p.$style) === null || p === void 0 ? void 0 : p.inlineStyles, w, Pe({}, C)) : void 0;
        }
      }, y), r.$instance = r._$instances[n], (f = (m = r.$instance)[i]) === null || f === void 0 || f.call(m, r, s, c, u), r["$".concat(n)] = r.$instance, ge._hook(n, i, r, s, c, u), r.$pd || (r.$pd = {}), r.$pd[n] = Pe(Pe({}, (v = r.$pd) === null || v === void 0 ? void 0 : v[n]), {}, {
        name: n,
        instance: r.$instance
      });
    }, l = function(i) {
      var r, s, c, u, f, m = (r = i.$instance) === null || r === void 0 ? void 0 : r.watch;
      m == null || (s = m.config) === null || s === void 0 || s.call(i.$instance, (c = i.$instance) === null || c === void 0 ? void 0 : c.$primevueConfig), Qn.on("config:change", function(v) {
        var g, h = v.newValue, y = v.oldValue;
        return m == null || (g = m.config) === null || g === void 0 ? void 0 : g.call(i.$instance, h, y);
      }), m == null || (u = m["config.ripple"]) === null || u === void 0 || u.call(i.$instance, (f = i.$instance) === null || f === void 0 || (f = f.$primevueConfig) === null || f === void 0 ? void 0 : f.ripple), Qn.on("config:ripple:change", function(v) {
        var g, h = v.newValue, y = v.oldValue;
        return m == null || (g = m["config.ripple"]) === null || g === void 0 ? void 0 : g.call(i.$instance, h, y);
      });
    };
    return {
      created: function(i, r, s, c) {
        a("created", i, r, s, c);
      },
      beforeMount: function(i, r, s, c) {
        i.$attrSelector = Pa("pd"), ge._loadStyles(i, r, s), a("beforeMount", i, r, s, c), l(i);
      },
      mounted: function(i, r, s, c) {
        ge._loadStyles(i, r, s), a("mounted", i, r, s, c);
      },
      beforeUpdate: function(i, r, s, c) {
        a("beforeUpdate", i, r, s, c);
      },
      updated: function(i, r, s, c) {
        ge._loadStyles(i, r, s), a("updated", i, r, s, c);
      },
      beforeUnmount: function(i, r, s, c) {
        a("beforeUnmount", i, r, s, c);
      },
      unmounted: function(i, r, s, c) {
        var u;
        (u = i.$instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), a("unmounted", i, r, s, c);
      }
    };
  },
  extend: function() {
    var n = ge._getMeta.apply(ge, arguments), t = Kr(n, 2), a = t[0], l = t[1];
    return Pe({
      extend: function() {
        var i = ge._getMeta.apply(ge, arguments), r = Kr(i, 2), s = r[0], c = r[1];
        return ge.extend(s, Pe(Pe(Pe({}, l), l == null ? void 0 : l.methods), c));
      }
    }, ge._extend(a, l));
  }
}, Zm = function(n) {
  var t = n.dt;
  return `
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(t("ripple.background"), `;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`);
}, Jm = {
  root: "p-ink"
}, Qm = je.extend({
  name: "ripple-directive",
  theme: Zm,
  classes: Jm
}), eh = ge.extend({
  style: Qm
});
function _a(e) {
  "@babel/helpers - typeof";
  return _a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _a(e);
}
function th(e) {
  return oh(e) || lh(e) || ah(e) || nh();
}
function nh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ah(e, n) {
  if (e) {
    if (typeof e == "string") return No(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? No(e, n) : void 0;
  }
}
function lh(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function oh(e) {
  if (Array.isArray(e)) return No(e);
}
function No(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
  return a;
}
function Xr(e, n, t) {
  return (n = ih(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function ih(e) {
  var n = rh(e, "string");
  return _a(n) == "symbol" ? n : n + "";
}
function rh(e, n) {
  if (_a(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n || "default");
    if (_a(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
var Bu = eh.extend("ripple", {
  watch: {
    "config.ripple": function(n) {
      n ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(n) {
    this.remove(n);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(n) {
      n.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(n) {
      n.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(n) {
      var t = Pv("span", Xr(Xr({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root")));
      n.appendChild(t), this.$el = t;
    },
    remove: function(n) {
      var t = this.getInk(n);
      t && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(n), t.removeEventListener("animationend", this.onAnimationEnd), t.remove());
    },
    onMouseDown: function(n) {
      var t = this, a = n.currentTarget, l = this.getInk(a);
      if (!(!l || getComputedStyle(l, null).display === "none")) {
        if (!this.isUnstyled() && wo(l, "p-ink-active"), l.setAttribute("data-p-ink-active", "false"), !_r(l) && !Or(l)) {
          var o = Math.max(wl(a), Iv(a));
          l.style.height = o + "px", l.style.width = o + "px";
        }
        var i = Tv(a), r = n.pageX - i.left + document.body.scrollTop - Or(l) / 2, s = n.pageY - i.top + document.body.scrollLeft - _r(l) / 2;
        l.style.top = s + "px", l.style.left = r + "px", !this.isUnstyled() && kv(l, "p-ink-active"), l.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          l && (!t.isUnstyled() && wo(l, "p-ink-active"), l.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(n) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && wo(n.currentTarget, "p-ink-active"), n.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(n) {
      return n && n.children ? th(n.children).find(function(t) {
        return Pn(t, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
});
function Oa(e) {
  "@babel/helpers - typeof";
  return Oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Oa(e);
}
function Ut(e, n, t) {
  return (n = sh(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function sh(e) {
  var n = uh(e, "string");
  return Oa(n) == "symbol" ? n : n + "";
}
function uh(e, n) {
  if (Oa(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(e, n || "default");
    if (Oa(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
var ch = function(n) {
  var t = n.dt;
  return `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("button.primary.color"), `;
    background: `).concat(t("button.primary.background"), `;
    border: 1px solid `).concat(t("button.primary.border.color"), `;
    padding: `).concat(t("button.padding.y"), " ").concat(t("button.padding.x"), `;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("button.transition.duration"), ", color ").concat(t("button.transition.duration"), ", border-color ").concat(t("button.transition.duration"), `,
            outline-color `).concat(t("button.transition.duration"), ", box-shadow ").concat(t("button.transition.duration"), `;
    border-radius: `).concat(t("button.border.radius"), `;
    outline-color: transparent;
    gap: `).concat(t("button.gap"), `;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(t("button.icon.only.width"), `;
    padding-left: 0;
    padding-right: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(t("button.icon.only.width"), `;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(t("button.sm.font.size"), `;
    padding: `).concat(t("button.sm.padding.y"), " ").concat(t("button.sm.padding.x"), `;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(t("button.sm.font.size"), `;
}

.p-button-lg {
    font-size: `).concat(t("button.lg.font.size"), `;
    padding: `).concat(t("button.lg.padding.y"), " ").concat(t("button.lg.padding.x"), `;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(t("button.lg.font.size"), `;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(t("button.label.font.weight"), `;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(t("button.icon.only.width"), `;
}

.p-button:not(:disabled):hover {
    background: `).concat(t("button.primary.hover.background"), `;
    border: 1px solid `).concat(t("button.primary.hover.border.color"), `;
    color: `).concat(t("button.primary.hover.color"), `;
}

.p-button:not(:disabled):active {
    background: `).concat(t("button.primary.active.background"), `;
    border: 1px solid `).concat(t("button.primary.active.border.color"), `;
    color: `).concat(t("button.primary.active.color"), `;
}

.p-button:focus-visible {
    box-shadow: `).concat(t("button.primary.focus.ring.shadow"), `;
    outline: `).concat(t("button.focus.ring.width"), " ").concat(t("button.focus.ring.style"), " ").concat(t("button.primary.focus.ring.color"), `;
    outline-offset: `).concat(t("button.focus.ring.offset"), `;
}

.p-button .p-badge {
    min-width: `).concat(t("button.badge.size"), `;
    height: `).concat(t("button.badge.size"), `;
    line-height: `).concat(t("button.badge.size"), `;
}

.p-button-raised {
    box-shadow: `).concat(t("button.raised.shadow"), `;
}

.p-button-rounded {
    border-radius: `).concat(t("button.rounded.border.radius"), `;
}

.p-button-secondary {
    background: `).concat(t("button.secondary.background"), `;
    border: 1px solid `).concat(t("button.secondary.border.color"), `;
    color: `).concat(t("button.secondary.color"), `;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.secondary.hover.background"), `;
    border: 1px solid `).concat(t("button.secondary.hover.border.color"), `;
    color: `).concat(t("button.secondary.hover.color"), `;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.secondary.active.background"), `;
    border: 1px solid `).concat(t("button.secondary.active.border.color"), `;
    color: `).concat(t("button.secondary.active.color"), `;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(t("button.secondary.focus.ring.color"), `;
    box-shadow: `).concat(t("button.secondary.focus.ring.shadow"), `;
}

.p-button-success {
    background: `).concat(t("button.success.background"), `;
    border: 1px solid `).concat(t("button.success.border.color"), `;
    color: `).concat(t("button.success.color"), `;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.success.hover.background"), `;
    border: 1px solid `).concat(t("button.success.hover.border.color"), `;
    color: `).concat(t("button.success.hover.color"), `;
}

.p-button-success:not(:disabled):active {
    background: `).concat(t("button.success.active.background"), `;
    border: 1px solid `).concat(t("button.success.active.border.color"), `;
    color: `).concat(t("button.success.active.color"), `;
}

.p-button-success:focus-visible {
    outline-color: `).concat(t("button.success.focus.ring.color"), `;
    box-shadow: `).concat(t("button.success.focus.ring.shadow"), `;
}

.p-button-info {
    background: `).concat(t("button.info.background"), `;
    border: 1px solid `).concat(t("button.info.border.color"), `;
    color: `).concat(t("button.info.color"), `;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.info.hover.background"), `;
    border: 1px solid `).concat(t("button.info.hover.border.color"), `;
    color: `).concat(t("button.info.hover.color"), `;
}

.p-button-info:not(:disabled):active {
    background: `).concat(t("button.info.active.background"), `;
    border: 1px solid `).concat(t("button.info.active.border.color"), `;
    color: `).concat(t("button.info.active.color"), `;
}

.p-button-info:focus-visible {
    outline-color: `).concat(t("button.info.focus.ring.color"), `;
    box-shadow: `).concat(t("button.info.focus.ring.shadow"), `;
}

.p-button-warn {
    background: `).concat(t("button.warn.background"), `;
    border: 1px solid `).concat(t("button.warn.border.color"), `;
    color: `).concat(t("button.warn.color"), `;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.warn.hover.background"), `;
    border: 1px solid `).concat(t("button.warn.hover.border.color"), `;
    color: `).concat(t("button.warn.hover.color"), `;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.warn.active.background"), `;
    border: 1px solid `).concat(t("button.warn.active.border.color"), `;
    color: `).concat(t("button.warn.active.color"), `;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(t("button.warn.focus.ring.color"), `;
    box-shadow: `).concat(t("button.warn.focus.ring.shadow"), `;
}

.p-button-help {
    background: `).concat(t("button.help.background"), `;
    border: 1px solid `).concat(t("button.help.border.color"), `;
    color: `).concat(t("button.help.color"), `;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.help.hover.background"), `;
    border: 1px solid `).concat(t("button.help.hover.border.color"), `;
    color: `).concat(t("button.help.hover.color"), `;
}

.p-button-help:not(:disabled):active {
    background: `).concat(t("button.help.active.background"), `;
    border: 1px solid `).concat(t("button.help.active.border.color"), `;
    color: `).concat(t("button.help.active.color"), `;
}

.p-button-help:focus-visible {
    outline-color: `).concat(t("button.help.focus.ring.color"), `;
    box-shadow: `).concat(t("button.help.focus.ring.shadow"), `;
}

.p-button-danger {
    background: `).concat(t("button.danger.background"), `;
    border: 1px solid `).concat(t("button.danger.border.color"), `;
    color: `).concat(t("button.danger.color"), `;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.danger.hover.background"), `;
    border: 1px solid `).concat(t("button.danger.hover.border.color"), `;
    color: `).concat(t("button.danger.hover.color"), `;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.danger.active.background"), `;
    border: 1px solid `).concat(t("button.danger.active.border.color"), `;
    color: `).concat(t("button.danger.active.color"), `;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(t("button.danger.focus.ring.color"), `;
    box-shadow: `).concat(t("button.danger.focus.ring.shadow"), `;
}

.p-button-contrast {
    background: `).concat(t("button.contrast.background"), `;
    border: 1px solid `).concat(t("button.contrast.border.color"), `;
    color: `).concat(t("button.contrast.color"), `;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.contrast.hover.background"), `;
    border: 1px solid `).concat(t("button.contrast.hover.border.color"), `;
    color: `).concat(t("button.contrast.hover.color"), `;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.contrast.active.background"), `;
    border: 1px solid `).concat(t("button.contrast.active.border.color"), `;
    color: `).concat(t("button.contrast.active.color"), `;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(t("button.contrast.focus.ring.color"), `;
    box-shadow: `).concat(t("button.contrast.focus.ring.shadow"), `;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(t("button.outlined.primary.border.color"), `;
    color: `).concat(t("button.outlined.primary.color"), `;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(t("button.outlined.primary.hover.background"), `;
    border-color: `).concat(t("button.outlined.primary.border.color"), `;
    color: `).concat(t("button.outlined.primary.color"), `;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(t("button.outlined.primary.active.background"), `;
    border-color: `).concat(t("button.outlined.primary.border.color"), `;
    color: `).concat(t("button.outlined.primary.color"), `;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(t("button.outlined.secondary.border.color"), `;
    color: `).concat(t("button.outlined.secondary.color"), `;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.outlined.secondary.hover.background"), `;
    border-color: `).concat(t("button.outlined.secondary.border.color"), `;
    color: `).concat(t("button.outlined.secondary.color"), `;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.outlined.secondary.active.background"), `;
    border-color: `).concat(t("button.outlined.secondary.border.color"), `;
    color: `).concat(t("button.outlined.secondary.color"), `;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(t("button.outlined.success.border.color"), `;
    color: `).concat(t("button.outlined.success.color"), `;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.outlined.success.hover.background"), `;
    border-color: `).concat(t("button.outlined.success.border.color"), `;
    color: `).concat(t("button.outlined.success.color"), `;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(t("button.outlined.success.active.background"), `;
    border-color: `).concat(t("button.outlined.success.border.color"), `;
    color: `).concat(t("button.outlined.success.color"), `;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(t("button.outlined.info.border.color"), `;
    color: `).concat(t("button.outlined.info.color"), `;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.outlined.info.hover.background"), `;
    border-color: `).concat(t("button.outlined.info.border.color"), `;
    color: `).concat(t("button.outlined.info.color"), `;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(t("button.outlined.info.active.background"), `;
    border-color: `).concat(t("button.outlined.info.border.color"), `;
    color: `).concat(t("button.outlined.info.color"), `;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(t("button.outlined.warn.border.color"), `;
    color: `).concat(t("button.outlined.warn.color"), `;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.outlined.warn.hover.background"), `;
    border-color: `).concat(t("button.outlined.warn.border.color"), `;
    color: `).concat(t("button.outlined.warn.color"), `;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.outlined.warn.active.background"), `;
    border-color: `).concat(t("button.outlined.warn.border.color"), `;
    color: `).concat(t("button.outlined.warn.color"), `;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(t("button.outlined.help.border.color"), `;
    color: `).concat(t("button.outlined.help.color"), `;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.outlined.help.hover.background"), `;
    border-color: `).concat(t("button.outlined.help.border.color"), `;
    color: `).concat(t("button.outlined.help.color"), `;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(t("button.outlined.help.active.background"), `;
    border-color: `).concat(t("button.outlined.help.border.color"), `;
    color: `).concat(t("button.outlined.help.color"), `;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(t("button.outlined.danger.border.color"), `;
    color: `).concat(t("button.outlined.danger.color"), `;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.outlined.danger.hover.background"), `;
    border-color: `).concat(t("button.outlined.danger.border.color"), `;
    color: `).concat(t("button.outlined.danger.color"), `;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.outlined.danger.active.background"), `;
    border-color: `).concat(t("button.outlined.danger.border.color"), `;
    color: `).concat(t("button.outlined.danger.color"), `;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(t("button.outlined.contrast.border.color"), `;
    color: `).concat(t("button.outlined.contrast.color"), `;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(t("button.outlined.contrast.hover.background"), `;
    border-color: `).concat(t("button.outlined.contrast.border.color"), `;
    color: `).concat(t("button.outlined.contrast.color"), `;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(t("button.outlined.contrast.active.background"), `;
    border-color: `).concat(t("button.outlined.contrast.border.color"), `;
    color: `).concat(t("button.outlined.contrast.color"), `;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(t("button.outlined.plain.border.color"), `;
    color: `).concat(t("button.outlined.plain.color"), `;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(t("button.outlined.plain.hover.background"), `;
    border-color: `).concat(t("button.outlined.plain.border.color"), `;
    color: `).concat(t("button.outlined.plain.color"), `;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(t("button.outlined.plain.active.background"), `;
    border-color: `).concat(t("button.outlined.plain.border.color"), `;
    color: `).concat(t("button.outlined.plain.color"), `;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"), `;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(t("button.text.primary.hover.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"), `;
}

.p-button-text:not(:disabled):active {
    background: `).concat(t("button.text.primary.active.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.primary.color"), `;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"), `;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(t("button.text.secondary.hover.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"), `;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(t("button.text.secondary.active.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.secondary.color"), `;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"), `;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(t("button.text.success.hover.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"), `;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(t("button.text.success.active.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.success.color"), `;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"), `;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(t("button.text.info.hover.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"), `;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(t("button.text.info.active.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.info.color"), `;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"), `;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(t("button.text.warn.hover.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"), `;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(t("button.text.warn.active.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.warn.color"), `;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"), `;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(t("button.text.help.hover.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"), `;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(t("button.text.help.active.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.help.color"), `;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"), `;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(t("button.text.danger.hover.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"), `;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(t("button.text.danger.active.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.danger.color"), `;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"), `;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(t("button.text.plain.hover.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"), `;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(t("button.text.plain.active.background"), `;
    border-color: transparent;
    color: `).concat(t("button.text.plain.color"), `;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.color"), `;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.hover.color"), `;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(t("button.link.active.color"), `;
}
`);
}, dh = {
  root: function(n) {
    var t = n.instance, a = n.props;
    return ["p-button p-component", Ut(Ut(Ut(Ut(Ut(Ut(Ut(Ut(Ut({
      "p-button-icon-only": t.hasIcon && !a.label && !a.badge,
      "p-button-vertical": (a.iconPos === "top" || a.iconPos === "bottom") && a.label,
      "p-button-loading": a.loading,
      "p-button-link": a.link
    }, "p-button-".concat(a.severity), a.severity), "p-button-raised", a.raised), "p-button-rounded", a.rounded), "p-button-text", a.text), "p-button-outlined", a.outlined), "p-button-sm", a.size === "small"), "p-button-lg", a.size === "large"), "p-button-plain", a.plain), "p-button-fluid", a.fluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(n) {
    var t = n.props;
    return ["p-button-icon", Ut({}, "p-button-icon-".concat(t.iconPos), t.label)];
  },
  label: "p-button-label"
}, fh = je.extend({
  name: "button",
  theme: ch,
  classes: dh
}), vh = {
  name: "BaseButton",
  extends: Qa,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: String,
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: String,
      default: null
    },
    badgeSeverity: {
      type: String,
      default: "secondary"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    as: {
      type: String,
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: !1
    }
  },
  style: fh,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
}, Au = {
  name: "Button",
  extends: vh,
  inheritAttrs: !1,
  methods: {
    getPTOptions: function(n) {
      var t = n === "root" ? this.ptmi : this.ptm;
      return t(n, {
        context: {
          disabled: this.disabled
        }
      });
    }
  },
  computed: {
    disabled: function() {
      return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
    },
    defaultAriaLabel: function() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs.ariaLabel;
    },
    hasIcon: function() {
      return this.icon || this.$slots.icon;
    },
    attrs: function() {
      return B(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        "aria-label": this.defaultAriaLabel,
        "data-pc-name": "button",
        "data-p-disabled": this.disabled,
        "data-p-severity": this.severity
      };
    }
  },
  components: {
    SpinnerIcon: Du,
    Badge: Mu
  },
  directives: {
    ripple: Bu
  }
};
function mh(e, n, t, a, l, o) {
  var i = Pt("SpinnerIcon"), r = Pt("Badge"), s = St("ripple");
  return e.asChild ? Te(e.$slots, "default", {
    key: 1,
    class: vn(e.cx("root")),
    a11yAttrs: o.a11yAttrs
  }) : Ie((le(), Ge(bt(e.as), B({
    key: 0,
    class: e.cx("root")
  }, o.attrs), {
    default: Xe(function() {
      return [Te(e.$slots, "default", {}, function() {
        return [e.loading ? Te(e.$slots, "loadingicon", {
          key: 0,
          class: vn([e.cx("loadingIcon"), e.cx("icon")])
        }, function() {
          return [e.loadingIcon ? (le(), de("span", B({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (le(), Ge(i, B({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : Te(e.$slots, "icon", {
          key: 1,
          class: vn([e.cx("icon")])
        }, function() {
          return [e.icon ? (le(), de("span", B({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass]
          }, e.ptm("icon")), null, 16)) : Ae("", !0)];
        }), $e("span", B({
          class: e.cx("label")
        }, e.ptm("label")), Ee(e.label || " "), 17), e.badge ? (le(), Ge(r, B({
          key: 2,
          value: e.badge,
          class: e.badgeClass,
          severity: e.badgeSeverity,
          unstyled: e.unstyled
        }, e.ptm("pcBadge")), null, 16, ["value", "class", "severity", "unstyled"])) : Ae("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class"])), [[s]]);
}
Au.render = mh;
var hh = function(n) {
  var t = n.dt;
  return `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("inputtext.color"), `;
    background: `).concat(t("inputtext.background"), `;
    padding: `).concat(t("inputtext.padding.y"), " ").concat(t("inputtext.padding.x"), `;
    border: 1px solid `).concat(t("inputtext.border.color"), `;
    transition: background `).concat(t("inputtext.transition.duration"), ", color ").concat(t("inputtext.transition.duration"), ", border-color ").concat(t("inputtext.transition.duration"), ", outline-color ").concat(t("inputtext.transition.duration"), ", box-shadow ").concat(t("inputtext.transition.duration"), `;
    appearance: none;
    border-radius: `).concat(t("inputtext.border.radius"), `;
    outline-color: transparent;
    box-shadow: `).concat(t("inputtext.shadow"), `;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(t("inputtext.hover.border.color"), `;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(t("inputtext.focus.border.color"), `;
    box-shadow: `).concat(t("inputtext.focus.ring.shadow"), `;
    outline: `).concat(t("inputtext.focus.ring.width"), " ").concat(t("inputtext.focus.ring.style"), " ").concat(t("inputtext.focus.ring.color"), `;
    outline-offset: `).concat(t("inputtext.focus.ring.offset"), `;
}

.p-inputtext.p-invalid {
    border-color: `).concat(t("inputtext.invalid.border.color"), `;
}

.p-inputtext.p-variant-filled {
    background: `).concat(t("inputtext.filled.background"), `;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: `).concat(t("inputtext.filled.focus.background"), `;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(t("inputtext.disabled.background"), `;
    color: `).concat(t("inputtext.disabled.color"), `;
}

.p-inputtext::placeholder {
    color: `).concat(t("inputtext.placeholder.color"), `;
}

.p-inputtext-sm {
    font-size: `).concat(t("inputtext.sm.font.size"), `;
    padding: `).concat(t("inputtext.sm.padding.y"), " ").concat(t("inputtext.sm.padding.x"), `;
}

.p-inputtext-lg {
    font-size: `).concat(t("inputtext.lg.font.size"), `;
    padding: `).concat(t("inputtext.lg.padding.y"), " ").concat(t("inputtext.lg.padding.x"), `;
}

.p-inputtext-fluid {
    width: 100%;
}
`);
}, gh = {
  root: function(n) {
    var t = n.instance, a = n.props;
    return ["p-inputtext p-component", {
      "p-filled": t.filled,
      "p-inputtext-sm": a.size === "small",
      "p-inputtext-lg": a.size === "large",
      "p-invalid": a.invalid,
      "p-variant-filled": a.variant ? a.variant === "filled" : t.$primevue.config.inputStyle === "filled" || t.$primevue.config.inputVariant === "filled",
      "p-inputtext-fluid": a.fluid
    }];
  }
}, yh = je.extend({
  name: "inputtext",
  theme: hh,
  classes: gh
}), bh = {
  name: "BaseInputText",
  extends: Qa,
  props: {
    modelValue: null,
    size: {
      type: String,
      default: null
    },
    invalid: {
      type: Boolean,
      default: !1
    },
    variant: {
      type: String,
      default: null
    },
    fluid: {
      type: Boolean,
      default: !1
    }
  },
  style: yh,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
}, $u = {
  name: "InputText",
  extends: bh,
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  methods: {
    getPTOptions: function(n) {
      var t = n === "root" ? this.ptmi : this.ptm;
      return t(n, {
        context: {
          filled: this.filled,
          disabled: this.$attrs.disabled || this.$attrs.disabled === ""
        }
      });
    },
    onInput: function(n) {
      this.$emit("update:modelValue", n.target.value);
    }
  },
  computed: {
    filled: function() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    }
  }
}, ph = ["value", "aria-invalid"];
function kh(e, n, t, a, l, o) {
  return le(), de("input", B({
    type: "text",
    class: e.cx("root"),
    value: e.modelValue,
    "aria-invalid": e.invalid || void 0,
    onInput: n[0] || (n[0] = function() {
      return o.onInput && o.onInput.apply(o, arguments);
    })
  }, o.getPTOptions("root")), null, 16, ph);
}
$u.render = kh;
var Sh = Di(), _u = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      mounted: !1
    };
  },
  mounted: function() {
    this.mounted = pu();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function wh(e, n, t, a, l, o) {
  return o.inline ? Te(e.$slots, "default", {
    key: 0
  }) : l.mounted ? (le(), Ge(lu, {
    key: 1,
    to: t.appendTo
  }, [Te(e.$slots, "default")], 8, ["to"])) : Ae("", !0);
}
_u.render = wh;
var Ch = function(n) {
  var t = n.dt;
  return `
.p-datepicker {
    display: inline-flex;
    max-width: 100%;
}

.p-datepicker-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-datepicker-dropdown {
    cursor: pointer;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `.concat(t("datepicker.dropdown.width"), `;
    border-top-right-radius: `).concat(t("datepicker.dropdown.border.radius"), `;
    border-bottom-right-radius: `).concat(t("datepicker.dropdown.border.radius"), `;
    background: `).concat(t("datepicker.dropdown.background"), `;
    border: 1px solid `).concat(t("datepicker.dropdown.border.color"), `;
    border-left: 0 none;
    color: `).concat(t("datepicker.dropdown.color"), `;
    transition: background `).concat(t("datepicker.transition.duration"), ", color ").concat(t("datepicker.transition.duration"), ", border-color ").concat(t("datepicker.transition.duration"), ", outline-color ").concat(t("datepicker.transition.duration"), `;
    outline-color: transparent;
}

.p-datepicker-dropdown:not(:disabled):hover {
    background: `).concat(t("datepicker.dropdown.hover.background"), `;
    border-color: `).concat(t("datepicker.dropdown.hover.border.color"), `;
    color: `).concat(t("datepicker.dropdown.hover.color"), `;
}

.p-datepicker-dropdown:not(:disabled):active {
    background: `).concat(t("datepicker.dropdown.active.background"), `;
    border-color: `).concat(t("datepicker.dropdown.active.border.color"), `;
    color: `).concat(t("datepicker.dropdown.active.color"), `;
}

.p-datepicker-dropdown:focus-visible {
    box-shadow: `).concat(t("datepicker.dropdown.focus.ring.shadow"), `;
    outline: `).concat(t("datepicker.dropdown.focus.ring.width"), " ").concat(t("datepicker.dropdown.focus.ring.style"), " ").concat(t("datepicker.dropdown.focus.ring.color"), `;
    outline-offset: `).concat(t("datepicker.dropdown.focus.ring.offset"), `;
}

.p-datepicker:has(.p-datepicker-input-icon-container) {
    position: relative;
}

.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
    padding-right: calc((`).concat(t("form.field.padding.x"), " * 2) + ").concat(t("icon.size"), `);
}

.p-datepicker-input-icon-container {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: `).concat(t("form.field.padding.x"), `;
    margin-top: calc(-1 * (`).concat(t("icon.size"), ` / 2));
    color: `).concat(t("datepicker.input.icon.color"), `;
}

.p-datepicker-fluid {
    display: flex;
}

.p-datepicker-fluid .p-datepicker-input {
    width: 1%;
}

.p-datepicker .p-datepicker-panel {
    min-width: 100%;
}

.p-datepicker-panel {
    width: auto;
    padding: `).concat(t("datepicker.panel.padding"), `;
    background: `).concat(t("datepicker.panel.background"), `;
    color: `).concat(t("datepicker.panel.color"), `;
    border: 1px solid `).concat(t("datepicker.panel.border.color"), `;
    border-radius: `).concat(t("datepicker.panel.border.radius"), `;
    box-shadow: `).concat(t("datepicker.panel.shadow"), `;
}

.p-datepicker-panel-inline {
    display: inline-block;
    overflow-x: auto;
    box-shadow: none;
}

.p-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: `).concat(t("datepicker.header.padding"), `;
    font-weight: `).concat(t("datepicker.header.font.weight"), `;
    background: `).concat(t("datepicker.header.background"), `;
    color: `).concat(t("datepicker.header.color"), `;
    border-bottom: 1px solid `).concat(t("datepicker.header.border.color"), `;
}

.p-datepicker-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: `).concat(t("datepicker.title.gap"), `;
    font-weight: `).concat(t("datepicker.title.font.weight"), `;
}

.p-datepicker-select-year,
.p-datepicker-select-month {
    border: none;
    background: transparent;
    margin: 0;
    cursor: pointer;
    font-weight: inherit;
    transition: background `).concat(t("datepicker.transition.duration"), ", color ").concat(t("datepicker.transition.duration"), ", border-color ").concat(t("datepicker.transition.duration"), ", outline-color ").concat(t("datepicker.transition.duration"), ", box-shadow ").concat(t("datepicker.transition.duration"), `;
}

.p-datepicker-select-month {
    padding: `).concat(t("datepicker.select.month.padding"), `;
    color: `).concat(t("datepicker.select.month.color"), `;
    border-radius: `).concat(t("datepicker.select.month.border.radius"), `;
}

.p-datepicker-select-year {
    padding: `).concat(t("datepicker.select.year.padding"), `;
    color: `).concat(t("datepicker.select.year.color"), `;
    border-radius: `).concat(t("datepicker.select.year.border.radius"), `;
}

.p-datepicker-select-month:enabled:hover {
    background: `).concat(t("datepicker.select.month.hover.background"), `;
    color: `).concat(t("datepicker.select.month.hover.color"), `;
}

.p-datepicker-select-year:enabled:hover {
    background: `).concat(t("datepicker.select.year.hover.background"), `;
    color: `).concat(t("datepicker.select.year.hover.color"), `;
}

.p-datepicker-calendar-container {
    display: flex;
}

.p-datepicker-calendar-container .p-datepicker-calendar {
    flex: 1 1 auto;
    border-left: 1px solid `).concat(t("datepicker.group.border.color"), `;
    padding-right: `).concat(t("datepicker.group.gap"), `;
    padding-left: `).concat(t("datepicker.group.gap"), `;
}

.p-datepicker-calendar-container .p-datepicker-calendar:first-child {
    padding-left: 0;
    border-left: 0 none;
}

.p-datepicker-calendar-container .p-datepicker-calendar:last-child {
    padding-right: 0;
}

.p-datepicker-day-view {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: `).concat(t("datepicker.day.view.margin"), `;
}

.p-datepicker-weekday-cell {
    padding: `).concat(t("datepicker.week.day.padding"), `;
}

.p-datepicker-weekday {
    font-weight: `).concat(t("datepicker.week.day.font.weight"), `;
    color: `).concat(t("datepicker.week.day.color"), `;
}

.p-datepicker-day-cell {
    padding: `).concat(t("datepicker.date.padding"), `;
}

.p-datepicker-day {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: `).concat(t("datepicker.date.width"), `;
    height: `).concat(t("datepicker.date.height"), `;
    border-radius: `).concat(t("datepicker.date.border.radius"), `;
    transition: background `).concat(t("datepicker.transition.duration"), ", color ").concat(t("datepicker.transition.duration"), ", border-color ").concat(t("datepicker.transition.duration"), `,
        box-shadow `).concat(t("datepicker.transition.duration"), ", outline-color ").concat(t("datepicker.transition.duration"), `;
    border: 1px solid transparent;
    outline-color: transparent;
    color: `).concat(t("datepicker.date.color"), `;
}

.p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
    background: `).concat(t("datepicker.date.hover.background"), `;
    color: `).concat(t("datepicker.date.hover.color"), `;
}

.p-datepicker-day:focus-visible {
    box-shadow: `).concat(t("datepicker.date.focus.ring.shadow"), `;
    outline: `).concat(t("datepicker.date.focus.ring.width"), " ").concat(t("datepicker.date.focus.ring.style"), " ").concat(t("datepicker.date.focus.ring.color"), `;
    outline-offset: `).concat(t("datepicker.date.focus.ring.offset"), `;
}

.p-datepicker-day-selected {
    background: `).concat(t("datepicker.date.selected.background"), `;
    color: `).concat(t("datepicker.date.selected.color"), `;
}

.p-datepicker-day-selected-range {
    background: `).concat(t("datepicker.date.range.selected.background"), `;
    color: `).concat(t("datepicker.date.range.selected.color"), `;
}

.p-datepicker-today > .p-datepicker-day {
    background: `).concat(t("datepicker.today.background"), `;
    color: `).concat(t("datepicker.today.color"), `;
}

.p-datepicker-today > .p-datepicker-day-selected {
    background: `).concat(t("datepicker.date.selected.background"), `;
    color: `).concat(t("datepicker.date.selected.color"), `;
}

.p-datepicker-today > .p-datepicker-day-selected-range {
    background: `).concat(t("datepicker.date.range.selected.background"), `;
    color: `).concat(t("datepicker.date.range.selected.color"), `;
}

.p-datepicker-weeknumber {
    text-align: center
}

.p-datepicker-month-view {
    margin: `).concat(t("datepicker.month.view.margin"), `;
}

.p-datepicker-month {
    width: 33.3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: `).concat(t("datepicker.date.padding"), `;
    transition: background `).concat(t("datepicker.transition.duration"), ", color ").concat(t("datepicker.transition.duration"), ", border-color ").concat(t("datepicker.transition.duration"), ", box-shadow ").concat(t("datepicker.transition.duration"), ", outline-color ").concat(t("datepicker.transition.duration"), `;
    border-radius: `).concat(t("datepicker.month.border.radius"), `;
    outline-color: transparent;
    color: `).concat(t("datepicker.date.color"), `;
}

.p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
    color:  `).concat(t("datepicker.date.hover.color"), `;
    background: `).concat(t("datepicker.date.hover.background"), `;
}

.p-datepicker-month-selected {
    color: `).concat(t("datepicker.date.selected.color"), `;
    background: `).concat(t("datepicker.date.selected.background"), `;
}

.p-datepicker-month:not(.p-disabled):focus-visible {
    box-shadow: `).concat(t("datepicker.date.focus.ring.shadow"), `;
    outline: `).concat(t("datepicker.date.focus.ring.width"), " ").concat(t("datepicker.date.focus.ring.style"), " ").concat(t("datepicker.date.focus.ring.color"), `;
    outline-offset: `).concat(t("datepicker.date.focus.ring.offset"), `;
}

.p-datepicker-year-view {
    margin: `).concat(t("datepicker.year.view.margin"), `;
}

.p-datepicker-year {
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: `).concat(t("datepicker.date.padding"), `;
    transition: background `).concat(t("datepicker.transition.duration"), ", color ").concat(t("datepicker.transition.duration"), ", border-color ").concat(t("datepicker.transition.duration"), ", box-shadow ").concat(t("datepicker.transition.duration"), ", outline-color ").concat(t("datepicker.transition.duration"), `;
    border-radius: `).concat(t("datepicker.year.border.radius"), `;
    outline-color: transparent;
    color: `).concat(t("datepicker.date.color"), `;
}

.p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
    color: `).concat(t("datepicker.date.hover.color"), `;
    background: `).concat(t("datepicker.date.hover.background"), `;
}

.p-datepicker-year-selected {
    color: `).concat(t("datepicker.date.selected.color"), `;
    background: `).concat(t("datepicker.date.selected.background"), `;
}

.p-datepicker-year:not(.p-disabled):focus-visible {
    box-shadow: `).concat(t("datepicker.date.focus.ring.shadow"), `;
    outline: `).concat(t("datepicker.date.focus.ring.width"), " ").concat(t("datepicker.date.focus.ring.style"), " ").concat(t("datepicker.date.focus.ring.color"), `;
    outline-offset: `).concat(t("datepicker.date.focus.ring.offset"), `;
}

.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  `).concat(t("datepicker.buttonbar.padding"), `;
    border-top: 1px solid `).concat(t("datepicker.buttonbar.border.color"), `;
}

.p-datepicker-buttonbar .p-button {
    width: auto;
}

.p-datepicker-time-picker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid `).concat(t("datepicker.time.picker.border.color"), `;
    padding: 0;
    gap: `).concat(t("datepicker.time.picker.gap"), `;
}

.p-datepicker-calendar-container + .p-datepicker-time-picker {
    padding: `).concat(t("datepicker.time.picker.padding"), `;
}

.p-datepicker-time-picker > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: `).concat(t("datepicker.time.picker.button.gap"), `;
}

.p-datepicker-time-picker span {
    font-size: 1rem;
}

.p-datepicker-timeonly .p-datepicker-time-picker {
    border-top: 0 none;
}
`);
}, xh = {
  root: function(n) {
    var t = n.props;
    return {
      position: t.appendTo === "self" ? "relative" : void 0
    };
  }
}, Vh = {
  root: function(n) {
    var t = n.props, a = n.state;
    return ["p-datepicker p-component p-inputwrapper", {
      "p-invalid": t.invalid,
      "p-datepicker-fluid": t.fluid,
      "p-inputwrapper-filled": t.modelValue,
      "p-inputwrapper-focus": a.focused,
      "p-focus": a.focused || a.overlayVisible
    }];
  },
  pcInput: "p-datepicker-input",
  dropdown: "p-datepicker-dropdown",
  inputIconContainer: "p-datepicker-input-icon-container",
  inputIcon: "p-datepicker-input-icon",
  panel: function(n) {
    var t = n.props;
    return ["p-datepicker-panel p-component", {
      "p-datepicker-panel-inline": t.inline,
      "p-disabled": t.disabled,
      "p-datepicker-timeonly": t.timeOnly
    }];
  },
  calendarContainer: "p-datepicker-calendar-container",
  calendar: "p-datepicker-calendar",
  header: "p-datepicker-header",
  pcPrevButton: "p-datepicker-prev-button",
  title: "p-datepicker-title",
  selectMonth: "p-datepicker-select-month",
  selectYear: "p-datepicker-select-year",
  decade: "p-datepicker-decade",
  pcNextButton: "p-datepicker-next-button",
  dayView: "p-datepicker-day-view",
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-datepicker-weeklabel-container p-disabled",
  weekDayCell: "p-datepicker-weekday-cell",
  weekDay: "p-datepicker-weekday",
  dayCell: function(n) {
    var t = n.date;
    return ["p-datepicker-day-cell", {
      "p-datepicker-other-month": t.otherMonth,
      "p-datepicker-today": t.today
    }];
  },
  day: function(n) {
    var t = n.instance, a = n.props, l = n.date, o = "";
    return t.isRangeSelection() && t.isSelected(l) && l.selectable && (o = l.day === a.modelValue[0].getDate() || l.day === a.modelValue[1].getDate() ? "p-datepicker-day-selected" : "p-datepicker-day-selected-range"), ["p-datepicker-day", {
      "p-datepicker-day-selected": !t.isRangeSelection() && t.isSelected(l) && l.selectable,
      "p-disabled": a.disabled || !l.selectable
    }, o];
  },
  monthView: "p-datepicker-month-view",
  month: function(n) {
    var t = n.instance, a = n.props, l = n.month, o = n.index;
    return ["p-datepicker-month", {
      "p-datepicker-month-selected": t.isMonthSelected(o),
      "p-disabled": a.disabled || !l.selectable
    }];
  },
  yearView: "p-datepicker-year-view",
  year: function(n) {
    var t = n.instance, a = n.props, l = n.year;
    return ["p-datepicker-year", {
      "p-datepicker-year-selected": t.isYearSelected(l.value),
      "p-disabled": a.disabled || !l.selectable
    }];
  },
  timePicker: "p-datepicker-time-picker",
  hourPicker: "p-datepicker-hour-picker",
  pcIncrementButton: "p-datepicker-increment-button",
  pcDecrementButton: "p-datepicker-decrement-button",
  separator: "p-datepicker-separator",
  minutePicker: "p-datepicker-minute-picker",
  secondPicker: "p-datepicker-second-picker",
  ampmPicker: "p-datepicker-ampm-picker",
  buttonbar: "p-datepicker-buttonbar",
  pcTodayButton: "p-datepicker-today-button",
  pcClearButton: "p-datepicker-clear-button"
}, Ph = je.extend({
  name: "datepicker",
  theme: Ch,
  classes: Vh,
  inlineStyles: xh
}), Th = {
  name: "BaseDatePicker",
  extends: Qa,
  props: {
    modelValue: null,
    selectionMode: {
      type: String,
      default: "single"
    },
    dateFormat: {
      type: String,
      default: null
    },
    inline: {
      type: Boolean,
      default: !1
    },
    showOtherMonths: {
      type: Boolean,
      default: !0
    },
    selectOtherMonths: {
      type: Boolean,
      default: !1
    },
    showIcon: {
      type: Boolean,
      default: !1
    },
    iconDisplay: {
      type: String,
      default: "button"
    },
    icon: {
      type: String,
      default: void 0
    },
    prevIcon: {
      type: String,
      default: void 0
    },
    nextIcon: {
      type: String,
      default: void 0
    },
    incrementIcon: {
      type: String,
      default: void 0
    },
    decrementIcon: {
      type: String,
      default: void 0
    },
    numberOfMonths: {
      type: Number,
      default: 1
    },
    responsiveOptions: Array,
    breakpoint: {
      type: String,
      default: "769px"
    },
    view: {
      type: String,
      default: "date"
    },
    minDate: {
      type: Date,
      value: null
    },
    maxDate: {
      type: Date,
      value: null
    },
    disabledDates: {
      type: Array,
      value: null
    },
    disabledDays: {
      type: Array,
      value: null
    },
    maxDateCount: {
      type: Number,
      value: null
    },
    showOnFocus: {
      type: Boolean,
      default: !0
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    showButtonBar: {
      type: Boolean,
      default: !1
    },
    shortYearCutoff: {
      type: String,
      default: "+10"
    },
    showTime: {
      type: Boolean,
      default: !1
    },
    timeOnly: {
      type: Boolean,
      default: !1
    },
    hourFormat: {
      type: String,
      default: "24"
    },
    stepHour: {
      type: Number,
      default: 1
    },
    stepMinute: {
      type: Number,
      default: 1
    },
    stepSecond: {
      type: Number,
      default: 1
    },
    showSeconds: {
      type: Boolean,
      default: !1
    },
    hideOnDateTimeSelect: {
      type: Boolean,
      default: !1
    },
    hideOnRangeSelection: {
      type: Boolean,
      default: !1
    },
    timeSeparator: {
      type: String,
      default: ":"
    },
    showWeek: {
      type: Boolean,
      default: !1
    },
    manualInput: {
      type: Boolean,
      default: !0
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    variant: {
      type: String,
      default: null
    },
    invalid: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    inputId: {
      type: String,
      default: null
    },
    inputClass: {
      type: [String, Object],
      default: null
    },
    inputStyle: {
      type: Object,
      default: null
    },
    panelClass: {
      type: [String, Object],
      default: null
    },
    panelStyle: {
      type: Object,
      default: null
    },
    todayButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          size: "small"
        };
      }
    },
    clearButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          size: "small"
        };
      }
    },
    navigatorButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          rounded: !0
        };
      }
    },
    timepickerButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          rounded: !0
        };
      }
    },
    fluid: {
      type: Boolean,
      default: !1
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: Ph,
  provide: function() {
    return {
      $pcDatePicker: this,
      $parentInstance: this
    };
  }
};
function Ro(e) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ro(e);
}
function Vo(e) {
  return Mh(e) || Dh(e) || Ou(e) || Ih();
}
function Ih() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dh(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Mh(e) {
  if (Array.isArray(e)) return Ho(e);
}
function Po(e, n) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!t) {
    if (Array.isArray(e) || (t = Ou(e)) || n) {
      t && (e = t);
      var a = 0, l = function() {
      };
      return { s: l, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(c) {
        throw c;
      }, f: l };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, i = !0, r = !1;
  return { s: function() {
    t = t.call(e);
  }, n: function() {
    var c = t.next();
    return i = c.done, c;
  }, e: function(c) {
    r = !0, o = c;
  }, f: function() {
    try {
      i || t.return == null || t.return();
    } finally {
      if (r) throw o;
    }
  } };
}
function Ou(e, n) {
  if (e) {
    if (typeof e == "string") return Ho(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ho(e, n) : void 0;
  }
}
function Ho(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
  return a;
}
var Eu = {
  name: "DatePicker",
  extends: Th,
  inheritAttrs: !1,
  emits: ["show", "hide", "input", "month-change", "year-change", "date-select", "update:modelValue", "today-click", "clear-click", "focus", "blur", "keydown"],
  navigationState: null,
  timePickerChange: !1,
  scrollHandler: null,
  outsideClickListener: null,
  resizeListener: null,
  matchMediaListener: null,
  overlay: null,
  input: null,
  previousButton: null,
  nextButton: null,
  timePickerTimer: null,
  preventFocus: !1,
  typeUpdate: !1,
  data: function() {
    return {
      d_id: this.id,
      currentMonth: null,
      currentYear: null,
      currentHour: null,
      currentMinute: null,
      currentSecond: null,
      pm: null,
      focused: !1,
      overlayVisible: !1,
      currentView: this.view,
      query: null,
      queryMatches: !1
    };
  },
  watch: {
    id: function(n) {
      this.d_id = n || Pa();
    },
    modelValue: function(n) {
      this.updateCurrentMetaData(), !this.typeUpdate && !this.inline && this.input && (this.input.value = this.inputFieldValue), this.typeUpdate = !1;
    },
    showTime: function() {
      this.updateCurrentMetaData();
    },
    minDate: function() {
      this.updateCurrentMetaData();
    },
    maxDate: function() {
      this.updateCurrentMetaData();
    },
    months: function() {
      this.overlay && (this.focused || (this.inline && (this.preventFocus = !0), setTimeout(this.updateFocus, 0)));
    },
    numberOfMonths: function() {
      this.destroyResponsiveStyleElement(), this.createResponsiveStyle();
    },
    responsiveOptions: function() {
      this.destroyResponsiveStyleElement(), this.createResponsiveStyle();
    },
    currentView: function() {
      var n = this;
      Promise.resolve(null).then(function() {
        return n.alignOverlay();
      });
    },
    view: function(n) {
      this.currentView = n;
    }
  },
  created: function() {
    this.updateCurrentMetaData();
  },
  mounted: function() {
    this.d_id = this.d_id || Pa(), this.createResponsiveStyle(), this.bindMatchMediaListener(), this.inline ? (this.overlay && this.overlay.setAttribute(this.attributeSelector, ""), this.disabled || (this.preventFocus = !0, this.initFocusableCell())) : this.input.value = this.inputFieldValue;
  },
  updated: function() {
    this.overlay && (this.preventFocus = !0, setTimeout(this.updateFocus, 0)), this.input && this.selectionStart != null && this.selectionEnd != null && (this.input.selectionStart = this.selectionStart, this.input.selectionEnd = this.selectionEnd, this.selectionStart = null, this.selectionEnd = null);
  },
  beforeUnmount: function() {
    this.timePickerTimer && clearTimeout(this.timePickerTimer), this.destroyResponsiveStyleElement(), this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && this.autoZIndex && xo.clear(this.overlay), this.overlay = null;
  },
  methods: {
    isComparable: function() {
      return this.modelValue != null && typeof this.modelValue != "string";
    },
    isSelected: function(n) {
      if (!this.isComparable())
        return !1;
      if (this.modelValue) {
        if (this.isSingleSelection())
          return this.isDateEquals(this.modelValue, n);
        if (this.isMultipleSelection()) {
          var t = !1, a = Po(this.modelValue), l;
          try {
            for (a.s(); !(l = a.n()).done; ) {
              var o = l.value;
              if (t = this.isDateEquals(o, n), t)
                break;
            }
          } catch (i) {
            a.e(i);
          } finally {
            a.f();
          }
          return t;
        } else if (this.isRangeSelection())
          return this.modelValue[1] ? this.isDateEquals(this.modelValue[0], n) || this.isDateEquals(this.modelValue[1], n) || this.isDateBetween(this.modelValue[0], this.modelValue[1], n) : this.isDateEquals(this.modelValue[0], n);
      }
      return !1;
    },
    isMonthSelected: function(n) {
      var t = this;
      if (!this.isComparable()) return !1;
      if (this.isMultipleSelection())
        return this.modelValue.some(function(i) {
          return i.getMonth() === n && i.getFullYear() === t.currentYear;
        });
      if (this.isRangeSelection())
        if (this.modelValue[1]) {
          var a = new Date(this.currentYear, n, 1), l = new Date(this.modelValue[0].getFullYear(), this.modelValue[0].getMonth(), 1), o = new Date(this.modelValue[1].getFullYear(), this.modelValue[1].getMonth(), 1);
          return a >= l && a <= o;
        } else
          return this.modelValue[0].getFullYear() === this.currentYear && this.modelValue[0].getMonth() === n;
      else
        return this.modelValue.getMonth() === n && this.modelValue.getFullYear() === this.currentYear;
    },
    isYearSelected: function(n) {
      if (!this.isComparable()) return !1;
      if (this.isMultipleSelection())
        return this.modelValue.some(function(l) {
          return l.getFullYear() === n;
        });
      if (this.isRangeSelection()) {
        var t = this.modelValue[0] ? this.modelValue[0].getFullYear() : null, a = this.modelValue[1] ? this.modelValue[1].getFullYear() : null;
        return t === n || a === n || t < n && a > n;
      } else
        return value.getFullYear() === n;
    },
    isDateEquals: function(n, t) {
      return n ? n.getDate() === t.day && n.getMonth() === t.month && n.getFullYear() === t.year : !1;
    },
    isDateBetween: function(n, t, a) {
      var l = !1;
      if (n && t) {
        var o = new Date(a.year, a.month, a.day);
        return n.getTime() <= o.getTime() && t.getTime() >= o.getTime();
      }
      return l;
    },
    getFirstDayOfMonthIndex: function(n, t) {
      var a = /* @__PURE__ */ new Date();
      a.setDate(1), a.setMonth(n), a.setFullYear(t);
      var l = a.getDay() + this.sundayIndex;
      return l >= 7 ? l - 7 : l;
    },
    getDaysCountInMonth: function(n, t) {
      return 32 - this.daylightSavingAdjust(new Date(t, n, 32)).getDate();
    },
    getDaysCountInPrevMonth: function(n, t) {
      var a = this.getPreviousMonthAndYear(n, t);
      return this.getDaysCountInMonth(a.month, a.year);
    },
    getPreviousMonthAndYear: function(n, t) {
      var a, l;
      return n === 0 ? (a = 11, l = t - 1) : (a = n - 1, l = t), {
        month: a,
        year: l
      };
    },
    getNextMonthAndYear: function(n, t) {
      var a, l;
      return n === 11 ? (a = 0, l = t + 1) : (a = n + 1, l = t), {
        month: a,
        year: l
      };
    },
    daylightSavingAdjust: function(n) {
      return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null;
    },
    isToday: function(n, t, a, l) {
      return n.getDate() === t && n.getMonth() === a && n.getFullYear() === l;
    },
    isSelectable: function(n, t, a, l) {
      var o = !0, i = !0, r = !0, s = !0;
      return l && !this.selectOtherMonths ? !1 : (this.minDate && (this.minDate.getFullYear() > a || this.minDate.getFullYear() === a && (this.minDate.getMonth() > t || this.minDate.getMonth() === t && this.minDate.getDate() > n)) && (o = !1), this.maxDate && (this.maxDate.getFullYear() < a || this.maxDate.getFullYear() === a && (this.maxDate.getMonth() < t || this.maxDate.getMonth() === t && this.maxDate.getDate() < n)) && (i = !1), this.disabledDates && (r = !this.isDateDisabled(n, t, a)), this.disabledDays && (s = !this.isDayDisabled(n, t, a)), o && i && r && s);
    },
    onOverlayEnter: function(n) {
      n.setAttribute(this.attributeSelector, "");
      var t = this.inline ? void 0 : {
        position: "absolute",
        top: "0",
        left: "0"
      };
      xv(n, t), this.autoZIndex && xo.set("overlay", n, this.baseZIndex || this.$primevue.config.zIndex.overlay), this.alignOverlay(), this.$emit("show");
    },
    onOverlayEnterComplete: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener();
    },
    onOverlayAfterLeave: function(n) {
      this.autoZIndex && xo.clear(n);
    },
    onOverlayLeave: function() {
      this.currentView = this.view, this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.overlay = null;
    },
    onPrevButtonClick: function(n) {
      this.showOtherMonths && (this.navigationState = {
        backward: !0,
        button: !0
      }, this.navBackward(n));
    },
    onNextButtonClick: function(n) {
      this.showOtherMonths && (this.navigationState = {
        backward: !1,
        button: !0
      }, this.navForward(n));
    },
    navBackward: function(n) {
      n.preventDefault(), this.isEnabled() && (this.currentView === "month" ? (this.decrementYear(), this.$emit("year-change", {
        month: this.currentMonth,
        year: this.currentYear
      })) : this.currentView === "year" ? this.decrementDecade() : n.shiftKey ? this.decrementYear() : (this.currentMonth === 0 ? (this.currentMonth = 11, this.decrementYear()) : this.currentMonth--, this.$emit("month-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      })));
    },
    navForward: function(n) {
      n.preventDefault(), this.isEnabled() && (this.currentView === "month" ? (this.incrementYear(), this.$emit("year-change", {
        month: this.currentMonth,
        year: this.currentYear
      })) : this.currentView === "year" ? this.incrementDecade() : n.shiftKey ? this.incrementYear() : (this.currentMonth === 11 ? (this.currentMonth = 0, this.incrementYear()) : this.currentMonth++, this.$emit("month-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      })));
    },
    decrementYear: function() {
      this.currentYear--;
    },
    decrementDecade: function() {
      this.currentYear = this.currentYear - 10;
    },
    incrementYear: function() {
      this.currentYear++;
    },
    incrementDecade: function() {
      this.currentYear = this.currentYear + 10;
    },
    switchToMonthView: function(n) {
      this.currentView = "month", setTimeout(this.updateFocus, 0), n.preventDefault();
    },
    switchToYearView: function(n) {
      this.currentView = "year", setTimeout(this.updateFocus, 0), n.preventDefault();
    },
    isEnabled: function() {
      return !this.disabled && !this.readonly;
    },
    updateCurrentTimeMeta: function(n) {
      var t = n.getHours();
      this.hourFormat === "12" && (this.pm = t > 11, t >= 12 ? t = t == 12 ? 12 : t - 12 : t = t == 0 ? 12 : t), this.currentHour = Math.floor(t / this.stepHour) * this.stepHour, this.currentMinute = Math.floor(n.getMinutes() / this.stepMinute) * this.stepMinute, this.currentSecond = Math.floor(n.getSeconds() / this.stepSecond) * this.stepSecond;
    },
    bindOutsideClickListener: function() {
      var n = this;
      this.outsideClickListener || (this.outsideClickListener = function(t) {
        n.overlayVisible && n.isOutsideClicked(t) && (n.overlayVisible = !1);
      }, document.addEventListener("mousedown", this.outsideClickListener));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("mousedown", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var n = this;
      this.scrollHandler || (this.scrollHandler = new dm(this.$refs.container, function() {
        n.overlayVisible && (n.overlayVisible = !1);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var n = this;
      this.resizeListener || (this.resizeListener = function() {
        n.overlayVisible && !Bv() && (n.overlayVisible = !1);
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindMatchMediaListener: function() {
      var n = this;
      if (!this.matchMediaListener) {
        var t = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = t, this.queryMatches = t.matches, this.matchMediaListener = function() {
          n.queryMatches = t.matches, n.mobileActive = !1;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isOutsideClicked: function(n) {
      return !(this.$el.isSameNode(n.target) || this.isNavIconClicked(n) || this.$el.contains(n.target) || this.overlay && this.overlay.contains(n.target));
    },
    isNavIconClicked: function(n) {
      return this.previousButton && (this.previousButton.isSameNode(n.target) || this.previousButton.contains(n.target)) || this.nextButton && (this.nextButton.isSameNode(n.target) || this.nextButton.contains(n.target));
    },
    alignOverlay: function() {
      this.overlay && (this.appendTo === "self" || this.inline ? Vv(this.overlay, this.$el) : (this.view === "date" ? (this.overlay.style.width = wl(this.overlay) + "px", this.overlay.style.minWidth = wl(this.$el) + "px") : this.overlay.style.width = wl(this.$el) + "px", Cv(this.overlay, this.$el)));
    },
    onButtonClick: function() {
      this.isEnabled() && (this.overlayVisible ? this.overlayVisible = !1 : (this.input.focus(), this.overlayVisible = !0));
    },
    isDateDisabled: function(n, t, a) {
      if (this.disabledDates) {
        var l = Po(this.disabledDates), o;
        try {
          for (l.s(); !(o = l.n()).done; ) {
            var i = o.value;
            if (i.getFullYear() === a && i.getMonth() === t && i.getDate() === n)
              return !0;
          }
        } catch (r) {
          l.e(r);
        } finally {
          l.f();
        }
      }
      return !1;
    },
    isDayDisabled: function(n, t, a) {
      if (this.disabledDays) {
        var l = new Date(a, t, n), o = l.getDay();
        return this.disabledDays.indexOf(o) !== -1;
      }
      return !1;
    },
    onMonthDropdownChange: function(n) {
      this.currentMonth = parseInt(n), this.$emit("month-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    },
    onYearDropdownChange: function(n) {
      this.currentYear = parseInt(n), this.$emit("year-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    },
    onDateSelect: function(n, t) {
      var a = this;
      if (!(this.disabled || !t.selectable)) {
        if (dn(this.overlay, 'table td span:not([data-p-disabled="true"])').forEach(function(o) {
          return o.tabIndex = -1;
        }), n && n.currentTarget.focus(), this.isMultipleSelection() && this.isSelected(t)) {
          var l = this.modelValue.filter(function(o) {
            return !a.isDateEquals(o, t);
          });
          this.updateModel(l);
        } else
          this.shouldSelectDate(t) && (t.otherMonth ? (this.currentMonth = t.month, this.currentYear = t.year, this.selectDate(t)) : this.selectDate(t));
        this.isSingleSelection() && (!this.showTime || this.hideOnDateTimeSelect) && (this.input && this.input.focus(), setTimeout(function() {
          a.overlayVisible = !1;
        }, 150));
      }
    },
    selectDate: function(n) {
      var t = this, a = new Date(n.year, n.month, n.day);
      this.showTime && (this.hourFormat === "12" && this.currentHour !== 12 && this.pm ? a.setHours(this.currentHour + 12) : a.setHours(this.currentHour), a.setMinutes(this.currentMinute), a.setSeconds(this.currentSecond)), this.minDate && this.minDate > a && (a = this.minDate, this.currentHour = a.getHours(), this.currentMinute = a.getMinutes(), this.currentSecond = a.getSeconds()), this.maxDate && this.maxDate < a && (a = this.maxDate, this.currentHour = a.getHours(), this.currentMinute = a.getMinutes(), this.currentSecond = a.getSeconds());
      var l = null;
      if (this.isSingleSelection())
        l = a;
      else if (this.isMultipleSelection())
        l = this.modelValue ? [].concat(Vo(this.modelValue), [a]) : [a];
      else if (this.isRangeSelection())
        if (this.modelValue && this.modelValue.length) {
          var o = this.modelValue[0], i = this.modelValue[1];
          !i && a.getTime() >= o.getTime() ? i = a : (o = a, i = null), l = [o, i];
        } else
          l = [a, null];
      l !== null && this.updateModel(l), this.isRangeSelection() && this.hideOnRangeSelection && l[1] !== null && setTimeout(function() {
        t.overlayVisible = !1;
      }, 150), this.$emit("date-select", a);
    },
    updateModel: function(n) {
      this.$emit("update:modelValue", n);
    },
    shouldSelectDate: function() {
      return this.isMultipleSelection() && this.maxDateCount != null ? this.maxDateCount > (this.modelValue ? this.modelValue.length : 0) : !0;
    },
    isSingleSelection: function() {
      return this.selectionMode === "single";
    },
    isRangeSelection: function() {
      return this.selectionMode === "range";
    },
    isMultipleSelection: function() {
      return this.selectionMode === "multiple";
    },
    formatValue: function(n) {
      if (typeof n == "string")
        return n;
      var t = "";
      if (n)
        try {
          if (this.isSingleSelection())
            t = this.formatDateTime(n);
          else if (this.isMultipleSelection())
            for (var a = 0; a < n.length; a++) {
              var l = this.formatDateTime(n[a]);
              t += l, a !== n.length - 1 && (t += ", ");
            }
          else if (this.isRangeSelection() && n && n.length) {
            var o = n[0], i = n[1];
            t = this.formatDateTime(o), i && (t += " - " + this.formatDateTime(i));
          }
        } catch {
          t = n;
        }
      return t;
    },
    formatDateTime: function(n) {
      var t = null;
      return n && (this.timeOnly ? t = this.formatTime(n) : (t = this.formatDate(n, this.datePattern), this.showTime && (t += " " + this.formatTime(n)))), t;
    },
    formatDate: function(n, t) {
      if (!n)
        return "";
      var a, l = function(u) {
        var f = a + 1 < t.length && t.charAt(a + 1) === u;
        return f && a++, f;
      }, o = function(u, f, m) {
        var v = "" + f;
        if (l(u))
          for (; v.length < m; )
            v = "0" + v;
        return v;
      }, i = function(u, f, m, v) {
        return l(u) ? v[f] : m[f];
      }, r = "", s = !1;
      if (n)
        for (a = 0; a < t.length; a++)
          if (s)
            t.charAt(a) === "'" && !l("'") ? s = !1 : r += t.charAt(a);
          else
            switch (t.charAt(a)) {
              case "d":
                r += o("d", n.getDate(), 2);
                break;
              case "D":
                r += i("D", n.getDay(), this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
                break;
              case "o":
                r += o("o", Math.round((new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime() - new Date(n.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
              case "m":
                r += o("m", n.getMonth() + 1, 2);
                break;
              case "M":
                r += i("M", n.getMonth(), this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
                break;
              case "y":
                r += l("y") ? n.getFullYear() : (n.getFullYear() % 100 < 10 ? "0" : "") + n.getFullYear() % 100;
                break;
              case "@":
                r += n.getTime();
                break;
              case "!":
                r += n.getTime() * 1e4 + this.ticksTo1970;
                break;
              case "'":
                l("'") ? r += "'" : s = !0;
                break;
              default:
                r += t.charAt(a);
            }
      return r;
    },
    formatTime: function(n) {
      if (!n)
        return "";
      var t = "", a = n.getHours(), l = n.getMinutes(), o = n.getSeconds();
      return this.hourFormat === "12" && a > 11 && a !== 12 && (a -= 12), this.hourFormat === "12" ? t += a === 0 ? 12 : a < 10 ? "0" + a : a : t += a < 10 ? "0" + a : a, t += ":", t += l < 10 ? "0" + l : l, this.showSeconds && (t += ":", t += o < 10 ? "0" + o : o), this.hourFormat === "12" && (t += n.getHours() > 11 ? " ".concat(this.$primevue.config.locale.pm) : " ".concat(this.$primevue.config.locale.am)), t;
    },
    onTodayButtonClick: function(n) {
      var t = /* @__PURE__ */ new Date(), a = {
        day: t.getDate(),
        month: t.getMonth(),
        year: t.getFullYear(),
        otherMonth: t.getMonth() !== this.currentMonth || t.getFullYear() !== this.currentYear,
        today: !0,
        selectable: !0
      };
      this.onDateSelect(null, a), this.$emit("today-click", t), n.preventDefault();
    },
    onClearButtonClick: function(n) {
      this.updateModel(null), this.overlayVisible = !1, this.$emit("clear-click", n), n.preventDefault();
    },
    onTimePickerElementMouseDown: function(n, t, a) {
      this.isEnabled() && (this.repeat(n, null, t, a), n.preventDefault());
    },
    onTimePickerElementMouseUp: function(n) {
      this.isEnabled() && (this.clearTimePickerTimer(), this.updateModelTime(), n.preventDefault());
    },
    onTimePickerElementMouseLeave: function() {
      this.clearTimePickerTimer();
    },
    repeat: function(n, t, a, l) {
      var o = this, i = t || 500;
      switch (this.clearTimePickerTimer(), this.timePickerTimer = setTimeout(function() {
        o.repeat(n, 100, a, l);
      }, i), a) {
        case 0:
          l === 1 ? this.incrementHour(n) : this.decrementHour(n);
          break;
        case 1:
          l === 1 ? this.incrementMinute(n) : this.decrementMinute(n);
          break;
        case 2:
          l === 1 ? this.incrementSecond(n) : this.decrementSecond(n);
          break;
      }
    },
    convertTo24Hour: function(n, t) {
      return this.hourFormat == "12" ? n === 12 ? t ? 12 : 0 : t ? n + 12 : n : n;
    },
    validateTime: function(n, t, a, l) {
      var o = this.isComparable() ? this.modelValue : this.viewDate, i = this.convertTo24Hour(n, l);
      this.isRangeSelection() && (o = this.modelValue[1] || this.modelValue[0]), this.isMultipleSelection() && (o = this.modelValue[this.modelValue.length - 1]);
      var r = o ? o.toDateString() : null;
      return !(this.minDate && r && this.minDate.toDateString() === r && (this.minDate.getHours() > i || this.minDate.getHours() === i && (this.minDate.getMinutes() > t || this.minDate.getMinutes() === t && this.minDate.getSeconds() > a)) || this.maxDate && r && this.maxDate.toDateString() === r && (this.maxDate.getHours() < i || this.maxDate.getHours() === i && (this.maxDate.getMinutes() < t || this.maxDate.getMinutes() === t && this.maxDate.getSeconds() < a)));
    },
    incrementHour: function(n) {
      var t = this.currentHour, a = this.currentHour + Number(this.stepHour), l = this.pm;
      this.hourFormat == "24" ? a = a >= 24 ? a - 24 : a : this.hourFormat == "12" && (t < 12 && a > 11 && (l = !this.pm), a = a >= 13 ? a - 12 : a), this.validateTime(a, this.currentMinute, this.currentSecond, l) && (this.currentHour = a, this.pm = l), n.preventDefault();
    },
    decrementHour: function(n) {
      var t = this.currentHour - this.stepHour, a = this.pm;
      this.hourFormat == "24" ? t = t < 0 ? 24 + t : t : this.hourFormat == "12" && (this.currentHour === 12 && (a = !this.pm), t = t <= 0 ? 12 + t : t), this.validateTime(t, this.currentMinute, this.currentSecond, a) && (this.currentHour = t, this.pm = a), n.preventDefault();
    },
    incrementMinute: function(n) {
      var t = this.currentMinute + Number(this.stepMinute);
      this.validateTime(this.currentHour, t, this.currentSecond, this.pm) && (this.currentMinute = t > 59 ? t - 60 : t), n.preventDefault();
    },
    decrementMinute: function(n) {
      var t = this.currentMinute - this.stepMinute;
      t = t < 0 ? 60 + t : t, this.validateTime(this.currentHour, t, this.currentSecond, this.pm) && (this.currentMinute = t), n.preventDefault();
    },
    incrementSecond: function(n) {
      var t = this.currentSecond + Number(this.stepSecond);
      this.validateTime(this.currentHour, this.currentMinute, t, this.pm) && (this.currentSecond = t > 59 ? t - 60 : t), n.preventDefault();
    },
    decrementSecond: function(n) {
      var t = this.currentSecond - this.stepSecond;
      t = t < 0 ? 60 + t : t, this.validateTime(this.currentHour, this.currentMinute, t, this.pm) && (this.currentSecond = t), n.preventDefault();
    },
    updateModelTime: function() {
      var n = this;
      this.timePickerChange = !0;
      var t = this.isComparable() ? this.modelValue : this.viewDate;
      this.isRangeSelection() && (t = this.modelValue[1] || this.modelValue[0]), this.isMultipleSelection() && (t = this.modelValue[this.modelValue.length - 1]), t = t ? new Date(t.getTime()) : /* @__PURE__ */ new Date(), this.hourFormat == "12" ? this.currentHour === 12 ? t.setHours(this.pm ? 12 : 0) : t.setHours(this.pm ? this.currentHour + 12 : this.currentHour) : t.setHours(this.currentHour), t.setMinutes(this.currentMinute), t.setSeconds(this.currentSecond), this.isRangeSelection() && (this.modelValue[1] ? t = [this.modelValue[0], t] : t = [t, null]), this.isMultipleSelection() && (t = [].concat(Vo(this.modelValue.slice(0, -1)), [t])), this.updateModel(t), this.$emit("date-select", t), setTimeout(function() {
        return n.timePickerChange = !1;
      }, 0);
    },
    toggleAMPM: function(n) {
      var t = this.validateTime(this.currentHour, this.currentMinute, this.currentSecond, !this.pm);
      !t && (this.maxDate || this.minDate) || (this.pm = !this.pm, this.updateModelTime(), n.preventDefault());
    },
    clearTimePickerTimer: function() {
      this.timePickerTimer && clearInterval(this.timePickerTimer);
    },
    onMonthSelect: function(n, t) {
      t.month;
      var a = t.index;
      this.view === "month" ? this.onDateSelect(n, {
        year: this.currentYear,
        month: a,
        day: 1,
        selectable: !0
      }) : (this.currentMonth = a, this.currentView = "date", this.$emit("month-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      })), setTimeout(this.updateFocus, 0);
    },
    onYearSelect: function(n, t) {
      this.view === "year" ? this.onDateSelect(n, {
        year: t.value,
        month: 0,
        day: 1,
        selectable: !0
      }) : (this.currentYear = t.value, this.currentView = "month", this.$emit("year-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      })), setTimeout(this.updateFocus, 0);
    },
    updateCurrentMetaData: function() {
      var n = this.viewDate;
      this.currentMonth = n.getMonth(), this.currentYear = n.getFullYear(), (this.showTime || this.timeOnly) && this.updateCurrentTimeMeta(n);
    },
    isValidSelection: function(n) {
      var t = this;
      if (n == null)
        return !0;
      var a = !0;
      return this.isSingleSelection() ? this.isSelectable(n.getDate(), n.getMonth(), n.getFullYear(), !1) || (a = !1) : n.every(function(l) {
        return t.isSelectable(l.getDate(), l.getMonth(), l.getFullYear(), !1);
      }) && this.isRangeSelection() && (a = n.length > 1 && n[1] > n[0]), a;
    },
    parseValue: function(n) {
      if (!n || n.trim().length === 0)
        return null;
      var t;
      if (this.isSingleSelection())
        t = this.parseDateTime(n);
      else if (this.isMultipleSelection()) {
        var a = n.split(",");
        t = [];
        var l = Po(a), o;
        try {
          for (l.s(); !(o = l.n()).done; ) {
            var i = o.value;
            t.push(this.parseDateTime(i.trim()));
          }
        } catch (c) {
          l.e(c);
        } finally {
          l.f();
        }
      } else if (this.isRangeSelection()) {
        var r = n.split(" - ");
        t = [];
        for (var s = 0; s < r.length; s++)
          t[s] = this.parseDateTime(r[s].trim());
      }
      return t;
    },
    parseDateTime: function(n) {
      var t, a = n.split(" ");
      if (this.timeOnly)
        t = /* @__PURE__ */ new Date(), this.populateTime(t, a[0], a[1]);
      else {
        var l = this.datePattern;
        this.showTime ? (t = this.parseDate(a[0], l), this.populateTime(t, a[1], a[2])) : t = this.parseDate(n, l);
      }
      return t;
    },
    populateTime: function(n, t, a) {
      if (this.hourFormat == "12" && !a)
        throw "Invalid Time";
      this.pm = a === this.$primevue.config.locale.pm || a === this.$primevue.config.locale.pm.toLowerCase();
      var l = this.parseTime(t);
      n.setHours(l.hour), n.setMinutes(l.minute), n.setSeconds(l.second);
    },
    parseTime: function(n) {
      var t = n.split(":"), a = this.showSeconds ? 3 : 2, l = /^[0-9][0-9]$/;
      if (t.length !== a || !t[0].match(l) || !t[1].match(l) || this.showSeconds && !t[2].match(l))
        throw "Invalid time";
      var o = parseInt(t[0]), i = parseInt(t[1]), r = this.showSeconds ? parseInt(t[2]) : null;
      if (isNaN(o) || isNaN(i) || o > 23 || i > 59 || this.hourFormat == "12" && o > 12 || this.showSeconds && (isNaN(r) || r > 59))
        throw "Invalid time";
      return this.hourFormat == "12" && o !== 12 && this.pm ? o += 12 : this.hourFormat == "12" && o == 12 && !this.pm && (o = 0), {
        hour: o,
        minute: i,
        second: r
      };
    },
    parseDate: function(n, t) {
      if (t == null || n == null)
        throw "Invalid arguments";
      if (n = Ro(n) === "object" ? n.toString() : n + "", n === "")
        return null;
      var a, l, o, i = 0, r = typeof this.shortYearCutoff != "string" ? this.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(this.shortYearCutoff, 10), s = -1, c = -1, u = -1, f = -1, m = !1, v, g = function(w) {
        var T = a + 1 < t.length && t.charAt(a + 1) === w;
        return T && a++, T;
      }, h = function(w) {
        var T = g(w), C = w === "@" ? 14 : w === "!" ? 20 : w === "y" && T ? 4 : w === "o" ? 3 : 2, V = w === "y" ? C : 1, x = new RegExp("^\\d{" + V + "," + C + "}"), P = n.substring(i).match(x);
        if (!P)
          throw "Missing number at position " + i;
        return i += P[0].length, parseInt(P[0], 10);
      }, y = function(w, T, C) {
        for (var V = -1, x = g(w) ? C : T, P = [], S = 0; S < x.length; S++)
          P.push([S, x[S]]);
        P.sort(function(M, A) {
          return -(M[1].length - A[1].length);
        });
        for (var I = 0; I < P.length; I++) {
          var D = P[I][1];
          if (n.substr(i, D.length).toLowerCase() === D.toLowerCase()) {
            V = P[I][0], i += D.length;
            break;
          }
        }
        if (V !== -1)
          return V + 1;
        throw "Unknown name at position " + i;
      }, k = function() {
        if (n.charAt(i) !== t.charAt(a))
          throw "Unexpected literal at position " + i;
        i++;
      };
      for (this.currentView === "month" && (u = 1), a = 0; a < t.length; a++)
        if (m)
          t.charAt(a) === "'" && !g("'") ? m = !1 : k();
        else
          switch (t.charAt(a)) {
            case "d":
              u = h("d");
              break;
            case "D":
              y("D", this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
              break;
            case "o":
              f = h("o");
              break;
            case "m":
              c = h("m");
              break;
            case "M":
              c = y("M", this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
              break;
            case "y":
              s = h("y");
              break;
            case "@":
              v = new Date(h("@")), s = v.getFullYear(), c = v.getMonth() + 1, u = v.getDate();
              break;
            case "!":
              v = new Date((h("!") - this.ticksTo1970) / 1e4), s = v.getFullYear(), c = v.getMonth() + 1, u = v.getDate();
              break;
            case "'":
              g("'") ? k() : m = !0;
              break;
            default:
              k();
          }
      if (i < n.length && (o = n.substr(i), !/^\s+/.test(o)))
        throw "Extra/unparsed characters found in date: " + o;
      if (s === -1 ? s = (/* @__PURE__ */ new Date()).getFullYear() : s < 100 && (s += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (s <= r ? 0 : -100)), f > -1) {
        c = 1, u = f;
        do {
          if (l = this.getDaysCountInMonth(s, c - 1), u <= l)
            break;
          c++, u -= l;
        } while (!0);
      }
      if (v = this.daylightSavingAdjust(new Date(s, c - 1, u)), v.getFullYear() !== s || v.getMonth() + 1 !== c || v.getDate() !== u)
        throw "Invalid date";
      return v;
    },
    getWeekNumber: function(n) {
      var t = new Date(n.getTime());
      t.setDate(t.getDate() + 4 - (t.getDay() || 7));
      var a = t.getTime();
      return t.setMonth(0), t.setDate(1), Math.floor(Math.round((a - t.getTime()) / 864e5) / 7) + 1;
    },
    onDateCellKeydown: function(n, t, a) {
      var l = n.currentTarget, o = l.parentElement, i = ka(o);
      switch (n.code) {
        case "ArrowDown": {
          l.tabIndex = "-1";
          var r = o.parentElement.nextElementSibling;
          if (r) {
            var s = ka(o.parentElement), c = Array.from(o.parentElement.parentElement.children), u = c.slice(s + 1), f = u.find(function(X) {
              var N = X.children[i].children[0];
              return !Pn(N, "data-p-disabled");
            });
            if (f) {
              var m = f.children[i].children[0];
              m.tabIndex = "0", m.focus();
            } else
              this.navigationState = {
                backward: !1
              }, this.navForward(n);
          } else
            this.navigationState = {
              backward: !1
            }, this.navForward(n);
          n.preventDefault();
          break;
        }
        case "ArrowUp": {
          if (l.tabIndex = "-1", n.altKey)
            this.overlayVisible = !1, this.focused = !0;
          else {
            var v = o.parentElement.previousElementSibling;
            if (v) {
              var g = ka(o.parentElement), h = Array.from(o.parentElement.parentElement.children), y = h.slice(0, g).reverse(), k = y.find(function(X) {
                var N = X.children[i].children[0];
                return !Pn(N, "data-p-disabled");
              });
              if (k) {
                var p = k.children[i].children[0];
                p.tabIndex = "0", p.focus();
              } else
                this.navigationState = {
                  backward: !0
                }, this.navBackward(n);
            } else
              this.navigationState = {
                backward: !0
              }, this.navBackward(n);
          }
          n.preventDefault();
          break;
        }
        case "ArrowLeft": {
          l.tabIndex = "-1";
          var w = o.previousElementSibling;
          if (w) {
            var T = Array.from(o.parentElement.children), C = T.slice(0, i).reverse(), V = C.find(function(X) {
              var N = X.children[0];
              return !Pn(N, "data-p-disabled");
            });
            if (V) {
              var x = V.children[0];
              x.tabIndex = "0", x.focus();
            } else
              this.navigateToMonth(n, !0, a);
          } else
            this.navigateToMonth(n, !0, a);
          n.preventDefault();
          break;
        }
        case "ArrowRight": {
          l.tabIndex = "-1";
          var P = o.nextElementSibling;
          if (P) {
            var S = Array.from(o.parentElement.children), I = S.slice(i + 1), D = I.find(function(X) {
              var N = X.children[0];
              return !Pn(N, "data-p-disabled");
            });
            if (D) {
              var M = D.children[0];
              M.tabIndex = "0", M.focus();
            } else
              this.navigateToMonth(n, !1, a);
          } else
            this.navigateToMonth(n, !1, a);
          n.preventDefault();
          break;
        }
        case "Enter":
        case "NumpadEnter":
        case "Space": {
          this.onDateSelect(n, t), n.preventDefault();
          break;
        }
        case "Escape": {
          this.overlayVisible = !1, n.preventDefault();
          break;
        }
        case "Tab": {
          this.inline || this.trapFocus(n);
          break;
        }
        case "Home": {
          l.tabIndex = "-1";
          var A = o.parentElement, E = A.children[0].children[0];
          Pn(E, "data-p-disabled") ? this.navigateToMonth(n, !0, a) : (E.tabIndex = "0", E.focus()), n.preventDefault();
          break;
        }
        case "End": {
          l.tabIndex = "-1";
          var F = o.parentElement, j = F.children[F.children.length - 1].children[0];
          Pn(j, "data-p-disabled") ? this.navigateToMonth(n, !1, a) : (j.tabIndex = "0", j.focus()), n.preventDefault();
          break;
        }
        case "PageUp": {
          l.tabIndex = "-1", n.shiftKey ? (this.navigationState = {
            backward: !0
          }, this.navBackward(n)) : this.navigateToMonth(n, !0, a), n.preventDefault();
          break;
        }
        case "PageDown": {
          l.tabIndex = "-1", n.shiftKey ? (this.navigationState = {
            backward: !1
          }, this.navForward(n)) : this.navigateToMonth(n, !1, a), n.preventDefault();
          break;
        }
      }
    },
    navigateToMonth: function(n, t, a) {
      if (t)
        if (this.numberOfMonths === 1 || a === 0)
          this.navigationState = {
            backward: !0
          }, this.navBackward(n);
        else {
          var l = this.overlay.children[a - 1], o = dn(l, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])'), i = o[o.length - 1];
          i.tabIndex = "0", i.focus();
        }
      else if (this.numberOfMonths === 1 || a === this.numberOfMonths - 1)
        this.navigationState = {
          backward: !1
        }, this.navForward(n);
      else {
        var r = this.overlay.children[a + 1], s = Nt(r, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
        s.tabIndex = "0", s.focus();
      }
    },
    onMonthCellKeydown: function(n, t) {
      var a = n.currentTarget;
      switch (n.code) {
        case "ArrowUp":
        case "ArrowDown": {
          a.tabIndex = "-1";
          var l = a.parentElement.children, o = ka(a), i = l[n.code === "ArrowDown" ? o + 3 : o - 3];
          i && (i.tabIndex = "0", i.focus()), n.preventDefault();
          break;
        }
        case "ArrowLeft": {
          a.tabIndex = "-1";
          var r = a.previousElementSibling;
          r ? (r.tabIndex = "0", r.focus()) : (this.navigationState = {
            backward: !0
          }, this.navBackward(n)), n.preventDefault();
          break;
        }
        case "ArrowRight": {
          a.tabIndex = "-1";
          var s = a.nextElementSibling;
          s ? (s.tabIndex = "0", s.focus()) : (this.navigationState = {
            backward: !1
          }, this.navForward(n)), n.preventDefault();
          break;
        }
        case "PageUp": {
          if (n.shiftKey) return;
          this.navigationState = {
            backward: !0
          }, this.navBackward(n);
          break;
        }
        case "PageDown": {
          if (n.shiftKey) return;
          this.navigationState = {
            backward: !1
          }, this.navForward(n);
          break;
        }
        case "Enter":
        case "NumpadEnter":
        case "Space": {
          this.onMonthSelect(n, t), n.preventDefault();
          break;
        }
        case "Escape": {
          this.overlayVisible = !1, n.preventDefault();
          break;
        }
        case "Tab": {
          this.trapFocus(n);
          break;
        }
      }
    },
    onYearCellKeydown: function(n, t) {
      var a = n.currentTarget;
      switch (n.code) {
        case "ArrowUp":
        case "ArrowDown": {
          a.tabIndex = "-1";
          var l = a.parentElement.children, o = ka(a), i = l[n.code === "ArrowDown" ? o + 2 : o - 2];
          i && (i.tabIndex = "0", i.focus()), n.preventDefault();
          break;
        }
        case "ArrowLeft": {
          a.tabIndex = "-1";
          var r = a.previousElementSibling;
          r ? (r.tabIndex = "0", r.focus()) : (this.navigationState = {
            backward: !0
          }, this.navBackward(n)), n.preventDefault();
          break;
        }
        case "ArrowRight": {
          a.tabIndex = "-1";
          var s = a.nextElementSibling;
          s ? (s.tabIndex = "0", s.focus()) : (this.navigationState = {
            backward: !1
          }, this.navForward(n)), n.preventDefault();
          break;
        }
        case "PageUp": {
          if (n.shiftKey) return;
          this.navigationState = {
            backward: !0
          }, this.navBackward(n);
          break;
        }
        case "PageDown": {
          if (n.shiftKey) return;
          this.navigationState = {
            backward: !1
          }, this.navForward(n);
          break;
        }
        case "Enter":
        case "NumpadEnter":
        case "Space": {
          this.onYearSelect(n, t), n.preventDefault();
          break;
        }
        case "Escape": {
          this.overlayVisible = !1, n.preventDefault();
          break;
        }
        case "Tab": {
          this.trapFocus(n);
          break;
        }
      }
    },
    updateFocus: function() {
      var n;
      if (this.navigationState) {
        if (this.navigationState.button)
          this.initFocusableCell(), this.navigationState.backward ? this.previousButton.focus() : this.nextButton.focus();
        else {
          if (this.navigationState.backward) {
            var t;
            this.currentView === "month" ? t = dn(this.overlay, '[data-pc-section="monthview"] [data-pc-section="month"]:not([data-p-disabled="true"])') : this.currentView === "year" ? t = dn(this.overlay, '[data-pc-section="yearview"] [data-pc-section="year"]:not([data-p-disabled="true"])') : t = dn(this.overlay, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])'), t && t.length > 0 && (n = t[t.length - 1]);
          } else
            this.currentView === "month" ? n = Nt(this.overlay, '[data-pc-section="monthview"] [data-pc-section="month"]:not([data-p-disabled="true"])') : this.currentView === "year" ? n = Nt(this.overlay, '[data-pc-section="yearview"] [data-pc-section="year"]:not([data-p-disabled="true"])') : n = Nt(this.overlay, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
          n && (n.tabIndex = "0", n.focus());
        }
        this.navigationState = null;
      } else
        this.initFocusableCell();
    },
    initFocusableCell: function() {
      var n;
      if (this.currentView === "month") {
        var t = dn(this.overlay, '[data-pc-section="monthview"] [data-pc-section="month"]'), a = Nt(this.overlay, '[data-pc-section="monthview"] [data-pc-section="month"][data-p-selected="true"]');
        t.forEach(function(r) {
          return r.tabIndex = -1;
        }), n = a || t[0];
      } else if (this.currentView === "year") {
        var l = dn(this.overlay, '[data-pc-section="yearview"] [data-pc-section="year"]'), o = Nt(this.overlay, '[data-pc-section="yearview"] [data-pc-section="year"][data-p-selected="true"]');
        l.forEach(function(r) {
          return r.tabIndex = -1;
        }), n = o || l[0];
      } else if (n = Nt(this.overlay, 'span[data-p-selected="true"]'), !n) {
        var i = Nt(this.overlay, 'td.p-datepicker-today span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
        i ? n = i : n = Nt(this.overlay, '.p-datepicker-calendar td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
      }
      n && (n.tabIndex = "0", this.preventFocus = !1);
    },
    trapFocus: function(n) {
      n.preventDefault();
      var t = $r(this.overlay);
      if (t && t.length > 0)
        if (!document.activeElement)
          t[0].focus();
        else {
          var a = t.indexOf(document.activeElement);
          if (n.shiftKey)
            a === -1 || a === 0 ? t[t.length - 1].focus() : t[a - 1].focus();
          else if (a === -1)
            if (this.timeOnly)
              t[0].focus();
            else {
              for (var l = null, o = 0; o < t.length; o++)
                t[o].tagName === "SPAN" && (l = o);
              t[l].focus();
            }
          else a === t.length - 1 ? t[0].focus() : t[a + 1].focus();
        }
    },
    onContainerButtonKeydown: function(n) {
      switch (n.code) {
        case "Tab":
          this.trapFocus(n);
          break;
        case "Escape":
          this.overlayVisible = !1, n.preventDefault();
          break;
      }
      this.$emit("keydown", n);
    },
    onInput: function(n) {
      try {
        this.selectionStart = this.input.selectionStart, this.selectionEnd = this.input.selectionEnd;
        var t = this.parseValue(n.target.value);
        this.isValidSelection(t) && (this.typeUpdate = !0, this.updateModel(t));
      } catch {
      }
      this.$emit("input", n);
    },
    onInputClick: function() {
      this.showOnFocus && this.isEnabled() && !this.overlayVisible && (this.overlayVisible = !0);
    },
    onFocus: function(n) {
      this.showOnFocus && this.isEnabled() && (this.overlayVisible = !0), this.focused = !0, this.$emit("focus", n);
    },
    onBlur: function(n) {
      this.$emit("blur", {
        originalEvent: n,
        value: n.target.value
      }), this.focused = !1, n.target.value = this.formatValue(this.modelValue);
    },
    onKeyDown: function(n) {
      if (n.code === "ArrowDown" && this.overlay)
        this.trapFocus(n);
      else if (n.code === "ArrowDown" && !this.overlay)
        this.overlayVisible = !0;
      else if (n.code === "Escape")
        this.overlayVisible && (this.overlayVisible = !1, n.preventDefault());
      else if (n.code === "Tab")
        this.overlay && $r(this.overlay).forEach(function(l) {
          return l.tabIndex = "-1";
        }), this.overlayVisible && (this.overlayVisible = !1);
      else if (n.code === "Enter") {
        var t;
        if (this.manualInput && n.target.value !== null && ((t = n.target.value) === null || t === void 0 ? void 0 : t.trim()) !== "")
          try {
            var a = this.parseValue(n.target.value);
            this.isValidSelection(a) && (this.overlayVisible = !1);
          } catch {
          }
      }
    },
    overlayRef: function(n) {
      this.overlay = n;
    },
    inputRef: function(n) {
      this.input = n ? n.$el : void 0;
    },
    previousButtonRef: function(n) {
      this.previousButton = n ? n.$el : void 0;
    },
    nextButtonRef: function(n) {
      this.nextButton = n ? n.$el : void 0;
    },
    getMonthName: function(n) {
      return this.$primevue.config.locale.monthNames[n];
    },
    getYear: function(n) {
      return this.currentView === "month" ? this.currentYear : n.year;
    },
    onOverlayClick: function(n) {
      this.inline || Sh.emit("overlay-click", {
        originalEvent: n,
        target: this.$el
      });
    },
    onOverlayKeyDown: function(n) {
      switch (n.code) {
        case "Escape":
          this.inline || (this.input.focus(), this.overlayVisible = !1);
          break;
      }
    },
    onOverlayMouseUp: function(n) {
      this.onOverlayClick(n);
    },
    createResponsiveStyle: function() {
      if (this.numberOfMonths > 1 && this.responsiveOptions && !this.isUnstyled) {
        if (!this.responsiveStyleElement) {
          var n;
          this.responsiveStyleElement = document.createElement("style"), this.responsiveStyleElement.type = "text/css", ku(this.responsiveStyleElement, "nonce", (n = this.$primevue) === null || n === void 0 || (n = n.config) === null || n === void 0 || (n = n.csp) === null || n === void 0 ? void 0 : n.nonce), document.body.appendChild(this.responsiveStyleElement);
        }
        var t = "";
        if (this.responsiveOptions)
          for (var a = sv(), l = Vo(this.responsiveOptions).filter(function(f) {
            return !!(f.breakpoint && f.numMonths);
          }).sort(function(f, m) {
            return -1 * a(f.breakpoint, m.breakpoint);
          }), o = 0; o < l.length; o++) {
            for (var i = l[o], r = i.breakpoint, s = i.numMonths, c = `
                            .p-datepicker[`.concat(this.attributeSelector, "] .p-datepicker-group:nth-child(").concat(s, `) .p-datepicker-next {
                                display: inline-flex;
                            }
                        `), u = s; u < this.numberOfMonths; u++)
              c += `
                                .p-datepicker[`.concat(this.attributeSelector, "] .p-datepicker-group:nth-child(").concat(u + 1, `) {
                                    display: none;
                                }
                            `);
            t += `
                            @media screen and (max-width: `.concat(r, `) {
                                `).concat(c, `
                            }
                        `);
          }
        this.responsiveStyleElement.innerHTML = t;
      }
    },
    destroyResponsiveStyleElement: function() {
      this.responsiveStyleElement && (this.responsiveStyleElement.remove(), this.responsiveStyleElement = null);
    }
  },
  computed: {
    viewDate: function() {
      var n = this.modelValue;
      if (n && Array.isArray(n) && (this.isRangeSelection() ? n = this.inline ? n[0] : n[1] || n[0] : this.isMultipleSelection() && (n = n[n.length - 1])), n && typeof n != "string")
        return n;
      var t = /* @__PURE__ */ new Date();
      return this.maxDate && this.maxDate < t ? this.maxDate : this.minDate && this.minDate > t ? this.minDate : t;
    },
    inputFieldValue: function() {
      return this.formatValue(this.modelValue);
    },
    months: function() {
      for (var n = [], t = 0; t < this.numberOfMonths; t++) {
        var a = this.currentMonth + t, l = this.currentYear;
        a > 11 && (a = a % 11 - 1, l = l + 1);
        for (var o = [], i = this.getFirstDayOfMonthIndex(a, l), r = this.getDaysCountInMonth(a, l), s = this.getDaysCountInPrevMonth(a, l), c = 1, u = /* @__PURE__ */ new Date(), f = [], m = Math.ceil((r + i) / 7), v = 0; v < m; v++) {
          var g = [];
          if (v == 0) {
            for (var h = s - i + 1; h <= s; h++) {
              var y = this.getPreviousMonthAndYear(a, l);
              g.push({
                day: h,
                month: y.month,
                year: y.year,
                otherMonth: !0,
                today: this.isToday(u, h, y.month, y.year),
                selectable: this.isSelectable(h, y.month, y.year, !0)
              });
            }
            for (var k = 7 - g.length, p = 0; p < k; p++)
              g.push({
                day: c,
                month: a,
                year: l,
                today: this.isToday(u, c, a, l),
                selectable: this.isSelectable(c, a, l, !1)
              }), c++;
          } else
            for (var w = 0; w < 7; w++) {
              if (c > r) {
                var T = this.getNextMonthAndYear(a, l);
                g.push({
                  day: c - r,
                  month: T.month,
                  year: T.year,
                  otherMonth: !0,
                  today: this.isToday(u, c - r, T.month, T.year),
                  selectable: this.isSelectable(c - r, T.month, T.year, !0)
                });
              } else
                g.push({
                  day: c,
                  month: a,
                  year: l,
                  today: this.isToday(u, c, a, l),
                  selectable: this.isSelectable(c, a, l, !1)
                });
              c++;
            }
          this.showWeek && f.push(this.getWeekNumber(new Date(g[0].year, g[0].month, g[0].day))), o.push(g);
        }
        n.push({
          month: a,
          year: l,
          dates: o,
          weekNumbers: f
        });
      }
      return n;
    },
    weekDays: function() {
      for (var n = [], t = this.$primevue.config.locale.firstDayOfWeek, a = 0; a < 7; a++)
        n.push(this.$primevue.config.locale.dayNamesMin[t]), t = t == 6 ? 0 : ++t;
      return n;
    },
    ticksTo1970: function() {
      return (1969 * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7;
    },
    sundayIndex: function() {
      return this.$primevue.config.locale.firstDayOfWeek > 0 ? 7 - this.$primevue.config.locale.firstDayOfWeek : 0;
    },
    datePattern: function() {
      return this.dateFormat || this.$primevue.config.locale.dateFormat;
    },
    monthPickerValues: function() {
      for (var n = this, t = [], a = function(i) {
        if (n.minDate) {
          var r = n.minDate.getMonth(), s = n.minDate.getFullYear();
          if (n.currentYear < s || n.currentYear === s && i < r)
            return !1;
        }
        if (n.maxDate) {
          var c = n.maxDate.getMonth(), u = n.maxDate.getFullYear();
          if (n.currentYear > u || n.currentYear === u && i > c)
            return !1;
        }
        return !0;
      }, l = 0; l <= 11; l++)
        t.push({
          value: this.$primevue.config.locale.monthNamesShort[l],
          selectable: a(l)
        });
      return t;
    },
    yearPickerValues: function() {
      for (var n = this, t = [], a = this.currentYear - this.currentYear % 10, l = function(r) {
        return !(n.minDate && n.minDate.getFullYear() > r || n.maxDate && n.maxDate.getFullYear() < r);
      }, o = 0; o < 10; o++)
        t.push({
          value: a + o,
          selectable: l(a + o)
        });
      return t;
    },
    formattedCurrentHour: function() {
      return this.currentHour < 10 ? "0" + this.currentHour : this.currentHour;
    },
    formattedCurrentMinute: function() {
      return this.currentMinute < 10 ? "0" + this.currentMinute : this.currentMinute;
    },
    formattedCurrentSecond: function() {
      return this.currentSecond < 10 ? "0" + this.currentSecond : this.currentSecond;
    },
    todayLabel: function() {
      return this.$primevue.config.locale.today;
    },
    clearLabel: function() {
      return this.$primevue.config.locale.clear;
    },
    weekHeaderLabel: function() {
      return this.$primevue.config.locale.weekHeader;
    },
    monthNames: function() {
      return this.$primevue.config.locale.monthNames;
    },
    attributeSelector: function() {
      return Pa();
    },
    switchViewButtonDisabled: function() {
      return this.numberOfMonths > 1 || this.disabled;
    },
    panelId: function() {
      return this.d_id + "_panel";
    }
  },
  components: {
    InputText: $u,
    Button: Au,
    Portal: _u,
    CalendarIcon: xu,
    ChevronLeftIcon: Pu,
    ChevronRightIcon: Tu,
    ChevronUpIcon: Iu,
    ChevronDownIcon: Vu
  },
  directives: {
    ripple: Bu
  }
}, Bh = ["id"], Ah = ["disabled", "aria-label", "aria-expanded", "aria-controls"], $h = ["id", "role", "aria-modal", "aria-label"], _h = ["disabled", "aria-label"], Oh = ["disabled", "aria-label"], Eh = ["disabled", "aria-label"], Lh = ["disabled", "aria-label"], Fh = ["data-p-disabled"], Nh = ["abbr"], Rh = ["data-p-disabled"], Hh = ["aria-label", "data-p-today", "data-p-other-month"], zh = ["onClick", "onKeydown", "aria-selected", "aria-disabled", "data-p-disabled", "data-p-selected"], jh = ["onClick", "onKeydown", "data-p-disabled", "data-p-selected"], Yh = ["onClick", "onKeydown", "data-p-disabled", "data-p-selected"];
function Wh(e, n, t, a, l, o) {
  var i = Pt("InputText"), r = Pt("Button"), s = Pt("Portal"), c = St("ripple");
  return le(), de("span", B({
    ref: "container",
    id: l.d_id,
    class: e.cx("root"),
    style: e.sx("root")
  }, e.ptmi("root")), [e.inline ? Ae("", !0) : (le(), Ge(i, {
    key: 0,
    ref: o.inputRef,
    id: e.inputId,
    role: "combobox",
    class: vn([e.inputClass, e.cx("pcInput")]),
    style: qf(e.inputStyle),
    value: o.inputFieldValue,
    placeholder: e.placeholder,
    name: e.name,
    invalid: e.invalid,
    variant: e.variant,
    unstyled: e.unstyled,
    autocomplete: "off",
    "aria-autocomplete": "none",
    "aria-haspopup": "dialog",
    "aria-expanded": l.overlayVisible,
    "aria-controls": o.panelId,
    "aria-labelledby": e.ariaLabelledby,
    "aria-label": e.ariaLabel,
    inputmode: "none",
    disabled: e.disabled,
    readonly: !e.manualInput || e.readonly,
    tabindex: 0,
    onInput: o.onInput,
    onClick: o.onInputClick,
    onFocus: o.onFocus,
    onBlur: o.onBlur,
    onKeydown: o.onKeyDown,
    pt: e.ptm("pcInput")
  }, null, 8, ["id", "class", "style", "value", "placeholder", "name", "invalid", "variant", "unstyled", "aria-expanded", "aria-controls", "aria-labelledby", "aria-label", "disabled", "readonly", "onInput", "onClick", "onFocus", "onBlur", "onKeydown", "pt"])), e.showIcon && e.iconDisplay === "button" ? Te(e.$slots, "dropdownbutton", {
    key: 1
  }, function() {
    return [$e("button", B({
      class: e.cx("dropdown"),
      disabled: e.disabled,
      onClick: n[0] || (n[0] = function() {
        return o.onButtonClick && o.onButtonClick.apply(o, arguments);
      }),
      type: "button",
      "aria-label": e.$primevue.config.locale.chooseDate,
      "aria-haspopup": "dialog",
      "aria-expanded": l.overlayVisible,
      "aria-controls": o.panelId
    }, e.ptm("dropdown")), [Te(e.$slots, "dropdownicon", {
      class: vn(e.icon)
    }, function() {
      return [(le(), Ge(bt(e.icon ? "span" : "CalendarIcon"), B({
        class: e.icon
      }, e.ptm("dropdownIcon")), null, 16, ["class"]))];
    })], 16, Ah)];
  }) : e.showIcon && e.iconDisplay === "input" ? (le(), de(oe, {
    key: 2
  }, [e.$slots.inputicon || e.showIcon ? (le(), de("span", B({
    key: 0,
    class: e.cx("inputIconContainer")
  }, e.ptm("inputIconContainer")), [Te(e.$slots, "inputicon", {
    class: vn(e.cx("inputIcon")),
    clickCallback: o.onButtonClick
  }, function() {
    return [(le(), Ge(bt(e.icon ? "i" : "CalendarIcon"), B({
      class: [e.icon, e.cx("inputIcon")],
      onClick: o.onButtonClick
    }, e.ptm("inputicon")), null, 16, ["class", "onClick"]))];
  })], 16)) : Ae("", !0)], 64)) : Ae("", !0), d(s, {
    appendTo: e.appendTo,
    disabled: e.inline
  }, {
    default: Xe(function() {
      return [d(tn, B({
        name: "p-connected-overlay",
        onEnter: n[58] || (n[58] = function(u) {
          return o.onOverlayEnter(u);
        }),
        onAfterEnter: o.onOverlayEnterComplete,
        onAfterLeave: o.onOverlayAfterLeave,
        onLeave: o.onOverlayLeave
      }, e.ptm("transition")), {
        default: Xe(function() {
          return [e.inline || l.overlayVisible ? (le(), de("div", B({
            key: 0,
            ref: o.overlayRef,
            id: o.panelId,
            class: [e.cx("panel"), e.panelClass],
            style: e.panelStyle,
            role: e.inline ? null : "dialog",
            "aria-modal": e.inline ? null : "true",
            "aria-label": e.$primevue.config.locale.chooseDate,
            onClick: n[55] || (n[55] = function() {
              return o.onOverlayClick && o.onOverlayClick.apply(o, arguments);
            }),
            onKeydown: n[56] || (n[56] = function() {
              return o.onOverlayKeyDown && o.onOverlayKeyDown.apply(o, arguments);
            }),
            onMouseup: n[57] || (n[57] = function() {
              return o.onOverlayMouseUp && o.onOverlayMouseUp.apply(o, arguments);
            })
          }, e.ptm("panel")), [e.timeOnly ? Ae("", !0) : (le(), de(oe, {
            key: 0
          }, [$e("div", B({
            class: e.cx("calendarContainer")
          }, e.ptm("calendarContainer")), [(le(!0), de(oe, null, fn(o.months, function(u, f) {
            return le(), de("div", B({
              key: u.month + u.year,
              class: e.cx("calendar"),
              ref_for: !0
            }, e.ptm("calendar")), [$e("div", B({
              class: e.cx("header"),
              ref_for: !0
            }, e.ptm("header")), [Te(e.$slots, "header"), Ie(d(r, B({
              ref_for: !0,
              ref: o.previousButtonRef,
              class: e.cx("pcPrevButton"),
              disabled: e.disabled,
              "aria-label": l.currentView === "year" ? e.$primevue.config.locale.prevDecade : l.currentView === "month" ? e.$primevue.config.locale.prevYear : e.$primevue.config.locale.prevMonth,
              unstyled: e.unstyled,
              onClick: o.onPrevButtonClick,
              onKeydown: o.onContainerButtonKeydown
            }, e.navigatorButtonProps, {
              pt: e.ptm("pcPrevButton"),
              "data-pc-group-section": "navigator"
            }), {
              icon: Xe(function(m) {
                return [Te(e.$slots, "previcon", {}, function() {
                  return [(le(), Ge(bt(e.prevIcon ? "span" : "ChevronLeftIcon"), B({
                    class: [e.prevIcon, m.class],
                    ref_for: !0
                  }, e.ptm("pcPrevButton").icon), null, 16, ["class"]))];
                })];
              }),
              _: 2
            }, 1040, ["class", "disabled", "aria-label", "unstyled", "onClick", "onKeydown", "pt"]), [[It, e.showOtherMonths ? f === 0 : !1]]), $e("div", B({
              class: e.cx("title"),
              ref_for: !0
            }, e.ptm("title")), [e.$primevue.config.locale.showMonthAfterYear ? (le(), de(oe, {
              key: 0
            }, [l.currentView !== "year" ? (le(), de("button", B({
              key: 0,
              type: "button",
              onClick: n[1] || (n[1] = function() {
                return o.switchToYearView && o.switchToYearView.apply(o, arguments);
              }),
              onKeydown: n[2] || (n[2] = function() {
                return o.onContainerButtonKeydown && o.onContainerButtonKeydown.apply(o, arguments);
              }),
              class: e.cx("selectYear"),
              disabled: o.switchViewButtonDisabled,
              "aria-label": e.$primevue.config.locale.chooseYear,
              ref_for: !0
            }, e.ptm("selectYear"), {
              "data-pc-group-section": "view"
            }), Ee(o.getYear(u)), 17, _h)) : Ae("", !0), l.currentView === "date" ? (le(), de("button", B({
              key: 1,
              type: "button",
              onClick: n[3] || (n[3] = function() {
                return o.switchToMonthView && o.switchToMonthView.apply(o, arguments);
              }),
              onKeydown: n[4] || (n[4] = function() {
                return o.onContainerButtonKeydown && o.onContainerButtonKeydown.apply(o, arguments);
              }),
              class: e.cx("selectMonth"),
              disabled: o.switchViewButtonDisabled,
              "aria-label": e.$primevue.config.locale.chooseMonth,
              ref_for: !0
            }, e.ptm("selectMonth"), {
              "data-pc-group-section": "view"
            }), Ee(o.getMonthName(u.month)), 17, Oh)) : Ae("", !0)], 64)) : (le(), de(oe, {
              key: 1
            }, [l.currentView === "date" ? (le(), de("button", B({
              key: 0,
              type: "button",
              onClick: n[5] || (n[5] = function() {
                return o.switchToMonthView && o.switchToMonthView.apply(o, arguments);
              }),
              onKeydown: n[6] || (n[6] = function() {
                return o.onContainerButtonKeydown && o.onContainerButtonKeydown.apply(o, arguments);
              }),
              class: e.cx("selectMonth"),
              disabled: o.switchViewButtonDisabled,
              "aria-label": e.$primevue.config.locale.chooseMonth,
              ref_for: !0
            }, e.ptm("selectMonth"), {
              "data-pc-group-section": "view"
            }), Ee(o.getMonthName(u.month)), 17, Eh)) : Ae("", !0), l.currentView !== "year" ? (le(), de("button", B({
              key: 1,
              type: "button",
              onClick: n[7] || (n[7] = function() {
                return o.switchToYearView && o.switchToYearView.apply(o, arguments);
              }),
              onKeydown: n[8] || (n[8] = function() {
                return o.onContainerButtonKeydown && o.onContainerButtonKeydown.apply(o, arguments);
              }),
              class: e.cx("selectYear"),
              disabled: o.switchViewButtonDisabled,
              "aria-label": e.$primevue.config.locale.chooseYear,
              ref_for: !0
            }, e.ptm("selectYear"), {
              "data-pc-group-section": "view"
            }), Ee(o.getYear(u)), 17, Lh)) : Ae("", !0)], 64)), l.currentView === "year" ? (le(), de("span", B({
              key: 2,
              class: e.cx("decade"),
              ref_for: !0
            }, e.ptm("decade")), [Te(e.$slots, "decade", {
              years: o.yearPickerValues
            }, function() {
              return [dt(Ee(o.yearPickerValues[0].value) + " - " + Ee(o.yearPickerValues[o.yearPickerValues.length - 1].value), 1)];
            })], 16)) : Ae("", !0)], 16), Ie(d(r, B({
              ref_for: !0,
              ref: o.nextButtonRef,
              class: e.cx("pcNextButton"),
              disabled: e.disabled,
              "aria-label": l.currentView === "year" ? e.$primevue.config.locale.nextDecade : l.currentView === "month" ? e.$primevue.config.locale.nextYear : e.$primevue.config.locale.nextMonth,
              unstyled: e.unstyled,
              onClick: o.onNextButtonClick,
              onKeydown: o.onContainerButtonKeydown
            }, e.navigatorButtonProps, {
              pt: e.ptm("pcNextButton"),
              "data-pc-group-section": "navigator"
            }), {
              icon: Xe(function(m) {
                return [Te(e.$slots, "nexticon", {}, function() {
                  return [(le(), Ge(bt(e.nextIcon ? "span" : "ChevronRightIcon"), B({
                    class: [e.nextIcon, m.class],
                    ref_for: !0
                  }, e.ptm("pcNextButton").icon), null, 16, ["class"]))];
                })];
              }),
              _: 2
            }, 1040, ["class", "disabled", "aria-label", "unstyled", "onClick", "onKeydown", "pt"]), [[It, e.showOtherMonths ? e.numberOfMonths === 1 ? !0 : f === e.numberOfMonths - 1 : !1]])], 16), l.currentView === "date" ? (le(), de("table", B({
              key: 0,
              class: e.cx("dayView"),
              role: "grid",
              ref_for: !0
            }, e.ptm("dayView")), [$e("thead", B({
              ref_for: !0
            }, e.ptm("tableHeader")), [$e("tr", B({
              ref_for: !0
            }, e.ptm("tableHeaderRow")), [e.showWeek ? (le(), de("th", B({
              key: 0,
              scope: "col",
              class: e.cx("weekHeader"),
              ref_for: !0
            }, e.ptm("weekHeader", {
              context: {
                disabled: e.showWeek
              }
            }), {
              "data-p-disabled": e.showWeek,
              "data-pc-group-section": "tableheadercell"
            }), [Te(e.$slots, "weekheaderlabel", {}, function() {
              return [$e("span", B({
                ref_for: !0
              }, e.ptm("weekHeaderLabel", {
                context: {
                  disabled: e.showWeek
                }
              }), {
                "data-pc-group-section": "tableheadercelllabel"
              }), Ee(o.weekHeaderLabel), 17)];
            })], 16, Fh)) : Ae("", !0), (le(!0), de(oe, null, fn(o.weekDays, function(m) {
              return le(), de("th", B({
                key: m,
                scope: "col",
                abbr: m,
                ref_for: !0
              }, e.ptm("tableHeaderCell"), {
                "data-pc-group-section": "tableheadercell",
                class: e.cx("weekDayCell")
              }), [$e("span", B({
                class: e.cx("weekDay"),
                ref_for: !0
              }, e.ptm("weekDay"), {
                "data-pc-group-section": "tableheadercelllabel"
              }), Ee(m), 17)], 16, Nh);
            }), 128))], 16)], 16), $e("tbody", B({
              ref_for: !0
            }, e.ptm("tableBody")), [(le(!0), de(oe, null, fn(u.dates, function(m, v) {
              return le(), de("tr", B({
                key: m[0].day + "" + m[0].month,
                ref_for: !0
              }, e.ptm("tableBodyRow")), [e.showWeek ? (le(), de("td", B({
                key: 0,
                class: e.cx("weekNumber"),
                ref_for: !0
              }, e.ptm("weekNumber"), {
                "data-pc-group-section": "tablebodycell"
              }), [$e("span", B({
                class: e.cx("weekLabelContainer"),
                ref_for: !0
              }, e.ptm("weekLabelContainer", {
                context: {
                  disabled: e.showWeek
                }
              }), {
                "data-p-disabled": e.showWeek,
                "data-pc-group-section": "tablebodycelllabel"
              }), [Te(e.$slots, "weeklabel", {
                weekNumber: u.weekNumbers[v]
              }, function() {
                return [u.weekNumbers[v] < 10 ? (le(), de("span", B({
                  key: 0,
                  style: {
                    visibility: "hidden"
                  },
                  ref_for: !0
                }, e.ptm("weekLabel")), "0", 16)) : Ae("", !0), dt(" " + Ee(u.weekNumbers[v]), 1)];
              })], 16, Rh)], 16)) : Ae("", !0), (le(!0), de(oe, null, fn(m, function(g) {
                return le(), de("td", B({
                  key: g.day + "" + g.month,
                  "aria-label": g.day,
                  class: e.cx("dayCell", {
                    date: g
                  }),
                  ref_for: !0
                }, e.ptm("dayCell", {
                  context: {
                    date: g,
                    today: g.today,
                    otherMonth: g.otherMonth,
                    selected: o.isSelected(g),
                    disabled: !g.selectable
                  }
                }), {
                  "data-p-today": g.today,
                  "data-p-other-month": g.otherMonth,
                  "data-pc-group-section": "tablebodycell"
                }), [Ie((le(), de("span", B({
                  class: e.cx("day", {
                    date: g
                  }),
                  onClick: function(y) {
                    return o.onDateSelect(y, g);
                  },
                  draggable: "false",
                  onKeydown: function(y) {
                    return o.onDateCellKeydown(y, g, f);
                  },
                  "aria-selected": o.isSelected(g),
                  "aria-disabled": !g.selectable,
                  ref_for: !0
                }, e.ptm("day", {
                  context: {
                    date: g,
                    today: g.today,
                    otherMonth: g.otherMonth,
                    selected: o.isSelected(g),
                    disabled: !g.selectable
                  }
                }), {
                  "data-p-disabled": !g.selectable,
                  "data-p-selected": o.isSelected(g),
                  "data-pc-group-section": "tablebodycelllabel"
                }), [Te(e.$slots, "date", {
                  date: g
                }, function() {
                  return [dt(Ee(g.day), 1)];
                })], 16, zh)), [[c]]), o.isSelected(g) ? (le(), de("div", B({
                  key: 0,
                  class: "p-hidden-accessible",
                  "aria-live": "polite",
                  ref_for: !0
                }, e.ptm("hiddenSelectedDay"), {
                  "data-p-hidden-accessible": !0
                }), Ee(g.day), 17)) : Ae("", !0)], 16, Hh);
              }), 128))], 16);
            }), 128))], 16)], 16)) : Ae("", !0)], 16);
          }), 128))], 16), l.currentView === "month" ? (le(), de("div", B({
            key: 0,
            class: e.cx("monthView")
          }, e.ptm("monthView")), [(le(!0), de(oe, null, fn(o.monthPickerValues, function(u, f) {
            return Ie((le(), de("span", B({
              key: u,
              onClick: function(v) {
                return o.onMonthSelect(v, {
                  month: u,
                  index: f
                });
              },
              onKeydown: function(v) {
                return o.onMonthCellKeydown(v, {
                  month: u,
                  index: f
                });
              },
              class: e.cx("month", {
                month: u,
                index: f
              }),
              ref_for: !0
            }, e.ptm("month", {
              context: {
                month: u,
                monthIndex: f,
                selected: o.isMonthSelected(f),
                disabled: !u.selectable
              }
            }), {
              "data-p-disabled": !u.selectable,
              "data-p-selected": o.isMonthSelected(f)
            }), [dt(Ee(u.value) + " ", 1), o.isMonthSelected(f) ? (le(), de("div", B({
              key: 0,
              class: "p-hidden-accessible",
              "aria-live": "polite",
              ref_for: !0
            }, e.ptm("hiddenMonth"), {
              "data-p-hidden-accessible": !0
            }), Ee(u.value), 17)) : Ae("", !0)], 16, jh)), [[c]]);
          }), 128))], 16)) : Ae("", !0), l.currentView === "year" ? (le(), de("div", B({
            key: 1,
            class: e.cx("yearView")
          }, e.ptm("yearView")), [(le(!0), de(oe, null, fn(o.yearPickerValues, function(u) {
            return Ie((le(), de("span", B({
              key: u.value,
              onClick: function(m) {
                return o.onYearSelect(m, u);
              },
              onKeydown: function(m) {
                return o.onYearCellKeydown(m, u);
              },
              class: e.cx("year", {
                year: u
              }),
              ref_for: !0
            }, e.ptm("year", {
              context: {
                year: u,
                selected: o.isYearSelected(u.value),
                disabled: !u.selectable
              }
            }), {
              "data-p-disabled": !u.selectable,
              "data-p-selected": o.isYearSelected(u.value)
            }), [dt(Ee(u.value) + " ", 1), o.isYearSelected(u.value) ? (le(), de("div", B({
              key: 0,
              class: "p-hidden-accessible",
              "aria-live": "polite",
              ref_for: !0
            }, e.ptm("hiddenYear"), {
              "data-p-hidden-accessible": !0
            }), Ee(u.value), 17)) : Ae("", !0)], 16, Yh)), [[c]]);
          }), 128))], 16)) : Ae("", !0)], 64)), (e.showTime || e.timeOnly) && l.currentView === "date" ? (le(), de("div", B({
            key: 1,
            class: e.cx("timePicker")
          }, e.ptm("timePicker")), [$e("div", B({
            class: e.cx("hourPicker")
          }, e.ptm("hourPicker"), {
            "data-pc-group-section": "timepickerContainer"
          }), [d(r, B({
            class: e.cx("pcIncrementButton"),
            "aria-label": e.$primevue.config.locale.nextHour,
            unstyled: e.unstyled,
            onMousedown: n[9] || (n[9] = function(u) {
              return o.onTimePickerElementMouseDown(u, 0, 1);
            }),
            onMouseup: n[10] || (n[10] = function(u) {
              return o.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [o.onContainerButtonKeydown, n[12] || (n[12] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 0, 1);
            }, ["enter"])), n[13] || (n[13] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 0, 1);
            }, ["space"]))],
            onMouseleave: n[11] || (n[11] = function(u) {
              return o.onTimePickerElementMouseLeave();
            }),
            onKeyup: [n[14] || (n[14] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["enter"])), n[15] || (n[15] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["space"]))]
          }, e.timepickerButtonProps, {
            pt: e.ptm("pcIncrementButton"),
            "data-pc-group-section": "timepickerbutton"
          }), {
            icon: Xe(function(u) {
              return [Te(e.$slots, "incrementicon", {}, function() {
                return [(le(), Ge(bt(e.incrementIcon ? "span" : "ChevronUpIcon"), B({
                  class: [e.incrementIcon, u.class]
                }, e.ptm("pcIncrementButton").icon, {
                  "data-pc-group-section": "timepickerlabel"
                }), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["class", "aria-label", "unstyled", "onKeydown", "pt"]), $e("span", B(e.ptm("hour"), {
            "data-pc-group-section": "timepickerlabel"
          }), Ee(o.formattedCurrentHour), 17), d(r, B({
            class: e.cx("pcDecrementButton"),
            "aria-label": e.$primevue.config.locale.prevHour,
            unstyled: e.unstyled,
            onMousedown: n[16] || (n[16] = function(u) {
              return o.onTimePickerElementMouseDown(u, 0, -1);
            }),
            onMouseup: n[17] || (n[17] = function(u) {
              return o.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [o.onContainerButtonKeydown, n[19] || (n[19] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 0, -1);
            }, ["enter"])), n[20] || (n[20] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 0, -1);
            }, ["space"]))],
            onMouseleave: n[18] || (n[18] = function(u) {
              return o.onTimePickerElementMouseLeave();
            }),
            onKeyup: [n[21] || (n[21] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["enter"])), n[22] || (n[22] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["space"]))]
          }, e.timepickerButtonProps, {
            pt: e.ptm("pcDecrementButton"),
            "data-pc-group-section": "timepickerbutton"
          }), {
            icon: Xe(function(u) {
              return [Te(e.$slots, "decrementicon", {}, function() {
                return [(le(), Ge(bt(e.decrementIcon ? "span" : "ChevronDownIcon"), B({
                  class: [e.decrementIcon, u.class]
                }, e.ptm("pcDecrementButton").icon, {
                  "data-pc-group-section": "timepickerlabel"
                }), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["class", "aria-label", "unstyled", "onKeydown", "pt"])], 16), $e("div", B(e.ptm("separatorContainer"), {
            "data-pc-group-section": "timepickerContainer"
          }), [$e("span", B(e.ptm("separator"), {
            "data-pc-group-section": "timepickerlabel"
          }), Ee(e.timeSeparator), 17)], 16), $e("div", B({
            class: e.cx("minutePicker")
          }, e.ptm("minutePicker"), {
            "data-pc-group-section": "timepickerContainer"
          }), [d(r, B({
            class: e.cx("pcIncrementButton"),
            "aria-label": e.$primevue.config.locale.nextMinute,
            disabled: e.disabled,
            unstyled: e.unstyled,
            onMousedown: n[23] || (n[23] = function(u) {
              return o.onTimePickerElementMouseDown(u, 1, 1);
            }),
            onMouseup: n[24] || (n[24] = function(u) {
              return o.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [o.onContainerButtonKeydown, n[26] || (n[26] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 1, 1);
            }, ["enter"])), n[27] || (n[27] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 1, 1);
            }, ["space"]))],
            onMouseleave: n[25] || (n[25] = function(u) {
              return o.onTimePickerElementMouseLeave();
            }),
            onKeyup: [n[28] || (n[28] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["enter"])), n[29] || (n[29] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["space"]))]
          }, e.timepickerButtonProps, {
            pt: e.ptm("pcIncrementButton"),
            "data-pc-group-section": "timepickerbutton"
          }), {
            icon: Xe(function(u) {
              return [Te(e.$slots, "incrementicon", {}, function() {
                return [(le(), Ge(bt(e.incrementIcon ? "span" : "ChevronUpIcon"), B({
                  class: [e.incrementIcon, u.class]
                }, e.ptm("pcIncrementButton").icon, {
                  "data-pc-group-section": "timepickerlabel"
                }), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["class", "aria-label", "disabled", "unstyled", "onKeydown", "pt"]), $e("span", B(e.ptm("minute"), {
            "data-pc-group-section": "timepickerlabel"
          }), Ee(o.formattedCurrentMinute), 17), d(r, B({
            class: e.cx("pcDecrementButton"),
            "aria-label": e.$primevue.config.locale.prevMinute,
            disabled: e.disabled,
            onMousedown: n[30] || (n[30] = function(u) {
              return o.onTimePickerElementMouseDown(u, 1, -1);
            }),
            onMouseup: n[31] || (n[31] = function(u) {
              return o.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [o.onContainerButtonKeydown, n[33] || (n[33] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 1, -1);
            }, ["enter"])), n[34] || (n[34] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 1, -1);
            }, ["space"]))],
            onMouseleave: n[32] || (n[32] = function(u) {
              return o.onTimePickerElementMouseLeave();
            }),
            onKeyup: [n[35] || (n[35] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["enter"])), n[36] || (n[36] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["space"]))]
          }, e.timepickerButtonProps, {
            pt: e.ptm("pcDecrementButton"),
            "data-pc-group-section": "timepickerbutton"
          }), {
            icon: Xe(function(u) {
              return [Te(e.$slots, "decrementicon", {}, function() {
                return [(le(), Ge(bt(e.decrementIcon ? "span" : "ChevronDownIcon"), B({
                  class: [e.decrementIcon, u.class]
                }, e.ptm("pcDecrementButton").icon, {
                  "data-pc-group-section": "timepickerlabel"
                }), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["class", "aria-label", "disabled", "onKeydown", "pt"])], 16), e.showSeconds ? (le(), de("div", B({
            key: 0,
            class: e.cx("separatorContainer")
          }, e.ptm("separatorContainer"), {
            "data-pc-group-section": "timepickerContainer"
          }), [$e("span", B(e.ptm("separator"), {
            "data-pc-group-section": "timepickerlabel"
          }), Ee(e.timeSeparator), 17)], 16)) : Ae("", !0), e.showSeconds ? (le(), de("div", B({
            key: 1,
            class: e.cx("secondPicker")
          }, e.ptm("secondPicker"), {
            "data-pc-group-section": "timepickerContainer"
          }), [d(r, B({
            class: e.cx("pcIncrementButton"),
            "aria-label": e.$primevue.config.locale.nextSecond,
            disabled: e.disabled,
            unstyled: e.unstyled,
            onMousedown: n[37] || (n[37] = function(u) {
              return o.onTimePickerElementMouseDown(u, 2, 1);
            }),
            onMouseup: n[38] || (n[38] = function(u) {
              return o.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [o.onContainerButtonKeydown, n[40] || (n[40] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 2, 1);
            }, ["enter"])), n[41] || (n[41] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 2, 1);
            }, ["space"]))],
            onMouseleave: n[39] || (n[39] = function(u) {
              return o.onTimePickerElementMouseLeave();
            }),
            onKeyup: [n[42] || (n[42] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["enter"])), n[43] || (n[43] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["space"]))]
          }, e.timepickerButtonProps, {
            pt: e.ptm("pcIncrementButton"),
            "data-pc-group-section": "timepickerbutton"
          }), {
            icon: Xe(function(u) {
              return [Te(e.$slots, "incrementicon", {}, function() {
                return [(le(), Ge(bt(e.incrementIcon ? "span" : "ChevronUpIcon"), B({
                  class: [e.incrementIcon, u.class]
                }, e.ptm("pcIncrementButton").icon, {
                  "data-pc-group-section": "timepickerlabel"
                }), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["class", "aria-label", "disabled", "unstyled", "onKeydown", "pt"]), $e("span", B(e.ptm("second"), {
            "data-pc-group-section": "timepickerlabel"
          }), Ee(o.formattedCurrentSecond), 17), d(r, B({
            class: e.cx("pcDecrementButton"),
            "aria-label": e.$primevue.config.locale.prevSecond,
            disabled: e.disabled,
            unstyled: e.unstyled,
            onMousedown: n[44] || (n[44] = function(u) {
              return o.onTimePickerElementMouseDown(u, 2, -1);
            }),
            onMouseup: n[45] || (n[45] = function(u) {
              return o.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [o.onContainerButtonKeydown, n[47] || (n[47] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 2, -1);
            }, ["enter"])), n[48] || (n[48] = Re(function(u) {
              return o.onTimePickerElementMouseDown(u, 2, -1);
            }, ["space"]))],
            onMouseleave: n[46] || (n[46] = function(u) {
              return o.onTimePickerElementMouseLeave();
            }),
            onKeyup: [n[49] || (n[49] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["enter"])), n[50] || (n[50] = Re(function(u) {
              return o.onTimePickerElementMouseUp(u);
            }, ["space"]))]
          }, e.timepickerButtonProps, {
            pt: e.ptm("pcDecrementButton"),
            "data-pc-group-section": "timepickerbutton"
          }), {
            icon: Xe(function(u) {
              return [Te(e.$slots, "decrementicon", {}, function() {
                return [(le(), Ge(bt(e.decrementIcon ? "span" : "ChevronDownIcon"), B({
                  class: [e.decrementIcon, u.class]
                }, e.ptm("pcDecrementButton").icon, {
                  "data-pc-group-section": "timepickerlabel"
                }), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["class", "aria-label", "disabled", "unstyled", "onKeydown", "pt"])], 16)) : Ae("", !0), e.hourFormat == "12" ? (le(), de("div", B({
            key: 2,
            class: e.cx("separatorContainer")
          }, e.ptm("separatorContainer"), {
            "data-pc-group-section": "timepickerContainer"
          }), [$e("span", B(e.ptm("separator"), {
            "data-pc-group-section": "timepickerlabel"
          }), Ee(e.timeSeparator), 17)], 16)) : Ae("", !0), e.hourFormat == "12" ? (le(), de("div", B({
            key: 3,
            class: e.cx("ampmPicker")
          }, e.ptm("ampmPicker")), [d(r, B({
            class: e.cx("pcIncrementButton"),
            "aria-label": e.$primevue.config.locale.am,
            disabled: e.disabled,
            unstyled: e.unstyled,
            onClick: n[51] || (n[51] = function(u) {
              return o.toggleAMPM(u);
            }),
            onKeydown: o.onContainerButtonKeydown
          }, e.timepickerButtonProps, {
            pt: e.ptm("pcIncrementButton"),
            "data-pc-group-section": "timepickerbutton"
          }), {
            icon: Xe(function(u) {
              return [Te(e.$slots, "incrementicon", {
                class: vn(e.cx("incrementIcon"))
              }, function() {
                return [(le(), Ge(bt(e.incrementIcon ? "span" : "ChevronUpIcon"), B({
                  class: [e.cx("incrementIcon"), u.class]
                }, e.ptm("pcIncrementButton").icon, {
                  "data-pc-group-section": "timepickerlabel"
                }), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["class", "aria-label", "disabled", "unstyled", "onKeydown", "pt"]), $e("span", B(e.ptm("ampm"), {
            "data-pc-group-section": "timepickerlabel"
          }), Ee(l.pm ? e.$primevue.config.locale.pm : e.$primevue.config.locale.am), 17), d(r, B({
            class: e.cx("pcDecrementButton"),
            "aria-label": e.$primevue.config.locale.pm,
            disabled: e.disabled,
            onClick: n[52] || (n[52] = function(u) {
              return o.toggleAMPM(u);
            }),
            onKeydown: o.onContainerButtonKeydown
          }, e.timepickerButtonProps, {
            pt: e.ptm("pcDecrementButton"),
            "data-pc-group-section": "timepickerbutton"
          }), {
            icon: Xe(function(u) {
              return [Te(e.$slots, "decrementicon", {
                class: vn(e.cx("decrementIcon"))
              }, function() {
                return [(le(), Ge(bt(e.decrementIcon ? "span" : "ChevronDownIcon"), B({
                  class: [e.cx("decrementIcon"), u.class]
                }, e.ptm("pcDecrementButton").icon, {
                  "data-pc-group-section": "timepickerlabel"
                }), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["class", "aria-label", "disabled", "onKeydown", "pt"])], 16)) : Ae("", !0)], 16)) : Ae("", !0), e.showButtonBar ? (le(), de("div", B({
            key: 2,
            class: e.cx("buttonbar")
          }, e.ptm("buttonbar")), [d(r, B({
            label: o.todayLabel,
            onClick: n[53] || (n[53] = function(u) {
              return o.onTodayButtonClick(u);
            }),
            class: e.cx("pcTodayButton"),
            unstyled: e.unstyled,
            onKeydown: o.onContainerButtonKeydown
          }, e.todayButtonProps, {
            pt: e.ptm("pcTodayButton"),
            "data-pc-group-section": "button"
          }), null, 16, ["label", "class", "unstyled", "onKeydown", "pt"]), d(r, B({
            label: o.clearLabel,
            onClick: n[54] || (n[54] = function(u) {
              return o.onClearButtonClick(u);
            }),
            class: e.cx("pcClearButton"),
            unstyled: e.unstyled,
            onKeydown: o.onContainerButtonKeydown
          }, e.clearButtonProps, {
            pt: e.ptm("pcClearButton"),
            "data-pc-group-section": "button"
          }), null, 16, ["label", "class", "unstyled", "onKeydown", "pt"])], 16)) : Ae("", !0), Te(e.$slots, "footer")], 16, $h)) : Ae("", !0)];
        }),
        _: 3
      }, 16, ["onAfterEnter", "onAfterLeave", "onLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"])], 16, Bh);
}
Eu.render = Wh;
var Uh = {
  name: "Calendar",
  extends: Eu,
  mounted: function() {
    console.warn("Deprecated since v4. Use DatePicker component instead.");
  }
};
const Kh = {
  __name: "VXCalendar",
  props: /* @__PURE__ */ Ci({
    label: {
      type: String
    },
    variant: {
      type: String
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    rules: {
      type: Array
    },
    showTime: {
      type: Boolean,
      default: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const n = xi(e, "modelValue"), t = b(() => n.value && new Date(n.value).toLocaleString()), a = Y(!1);
    return q(n, (l, o) => {
      (!l || !o || l.toLocaleDateString() != o.toLocaleDateString()) && (a.value = !1);
    }), (l, o) => {
      const i = Pt("v-text-field"), r = Pt("PVCalendar"), s = Pt("v-list-item"), c = Pt("v-list"), u = Pt("v-menu");
      return le(), Ge(u, {
        modelValue: a.value,
        "onUpdate:modelValue": o[4] || (o[4] = (f) => a.value = f),
        "close-on-content-click": !1
      }, {
        activator: Xe(({ props: f }) => [
          d(i, B({
            modelValue: t.value,
            "onUpdate:modelValue": o[0] || (o[0] = (m) => t.value = m),
            label: e.label,
            variant: e.variant,
            clearable: e.clearable,
            rules: e.rules,
            onClick: o[1] || (o[1] = () => a.value = !a.value)
          }, f, {
            class: "mb-2",
            "onClick:clear": o[2] || (o[2] = (m) => n.value = null)
          }), null, 16, ["modelValue", "label", "variant", "clearable", "rules"])
        ]),
        default: Xe(() => [
          d(c, { class: "flexCenter" }, {
            default: Xe(() => [
              d(s, { class: "flexCenter" }, {
                default: Xe(() => [
                  d(r, {
                    modelValue: n.value,
                    "onUpdate:modelValue": o[3] || (o[3] = (f) => n.value = f),
                    inline: "",
                    "show-time": e.showTime
                  }, null, 8, ["modelValue", "show-time"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}, Gh = ({ fields: e }) => {
  for (const n of e)
    n.variant = "outlined", n.label || (n.label = n.name);
  return e;
}, qh = (e, n) => {
  for (const t of e.fields) {
    if (!t.fieldType) continue;
    switch (n && t.default && (e.data[t.name] = t.default), t.isRequired && (t.rules = [(l) => !!l || "Field is required"]), t.fieldType.toLowerCase()) {
      case "string":
        t.component = "VTextField", t.clearable = !0;
        break;
      case "int":
        t.component = "VTextField", t.type = "number", t.clearable = !0;
        break;
      case "boolean":
        t.component = "VCheckbox", t.isRequired || (t.indeterminate = !0);
        break;
      case "datetime":
        t.component = "VXCalendar", t.clearable = !0;
        break;
      case "relation":
        t.component = "VAutocomplete", t.clearable = !0, t.items = t.values ? t.values.map((l) => Object.values(l).join(" - ")) : [];
        break;
      default:
        console.warn(t.fieldType, "type is not implemented yet");
    }
  }
  return e.parsed = !0, e;
}, Lu = {
  __name: "VormixSK",
  props: /* @__PURE__ */ Ci({
    isNew: {
      type: Boolean,
      default: !0
    },
    parser: {
      type: Function,
      default: null
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e, { expose: n }) {
    n({ reset: i });
    const t = xi(e, "modelValue"), a = e, l = Y({});
    q(
      () => t,
      (r) => {
        r.value && !r.value.parsed && o(r.value);
      },
      { immediate: !0, deep: !0 }
    );
    function o(r) {
      let s = a.parser ? a.parser(r, a.isNew) : qh(r, a.isNew);
      return s.fields = Gh(s), l.value = JSON.parse(JSON.stringify(s.data)), t.value = s;
    }
    function i() {
      t.value.data = { ...l.value };
    }
    return (r, s) => {
      var c;
      return le(!0), de(oe, null, fn((c = t.value) == null ? void 0 : c.fields, (u) => (le(), de("div", {
        key: u.name
      }, [
        (le(), Ge(bt(u.component), B(u, {
          modelValue: t.value.data[u.name],
          "onUpdate:modelValue": (f) => t.value.data[u.name] = f,
          clearable: ""
        }), null, 16, ["modelValue", "onUpdate:modelValue"]))
      ]))), 128);
    };
  }
}, Xh = { class: "mt-6 grid grid-cols-2 md:grid-cols-1 gap-2" }, Zh = { class: "grid grid-flow-col gap-2 auto-cols-min justify-end" }, Jh = {
  __name: "Vormix",
  props: /* @__PURE__ */ Ci({
    resetBtn: {
      type: Boolean,
      default: !0
    },
    buttons: {
      type: Array,
      default: () => [
        // {
        //     title: 'Save',
        //     icon: 'mdi-content-save',
        //     attrs: {},
        //     fn: () => save,
        // },
        // {
        //     title: 'Reset',
        //     icon: 'mdi-reload',
        //     attrs: {},
        //     fn: () => reset,
        // },
      ]
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const n = xi(e, "modelValue"), t = Y();
    return (a, l) => {
      var r;
      const o = Pt("v-btn"), i = Pt("v-card");
      return le(), Ge(i, {
        style: { padding: "10px" },
        title: (r = n.value) == null ? void 0 : r.name
      }, {
        default: Xe(() => [
          $e("div", Xh, [
            d(Lu, B({
              ref_key: "vormixSkRef",
              ref: t,
              modelValue: n.value,
              "onUpdate:modelValue": l[0] || (l[0] = (s) => n.value = s)
            }, a.$attrs), null, 16, ["modelValue"])
          ]),
          Te(a.$slots, "more"),
          Te(a.$slots, "actions", {}, () => [
            $e("div", Zh, [
              Te(a.$slots, "beforeActions"),
              (le(!0), de(oe, null, fn(e.buttons, (s) => (le(), Ge(o, B({ key: a.index }, s.attrs, {
                "prepend-icon": s.icon
              }), {
                default: Xe(() => [
                  dt(Ee(s.title), 1)
                ]),
                _: 2
              }, 1040, ["prepend-icon"]))), 128)),
              Te(a.$slots, "actions", {}, () => [
                e.resetBtn ? (le(), Ge(o, {
                  key: 0,
                  "prepend-icon": "mdi-reload",
                  onClick: l[1] || (l[1] = (s) => t.value.reset())
                }, {
                  default: Xe(() => [
                    dt(" Reset ")
                  ]),
                  _: 1
                })) : Ae("", !0)
              ]),
              Te(a.$slots, "afterActions")
            ])
          ])
        ]),
        _: 3
      }, 8, ["title"]);
    };
  }
};
function xt(e, n) {
  let t;
  function a() {
    t = Vi(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), a();
    }) : n());
  }
  q(e, (l) => {
    l && !t ? a() : l || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), ht(() => {
    t == null || t.stop();
  });
}
const xe = typeof window < "u", Bi = xe && "IntersectionObserver" in window, Qh = xe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Zr = xe && "EyeDropper" in window;
function Jr(e, n, t) {
  eg(e, n), n.set(e, t);
}
function eg(e, n) {
  if (n.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function tg(e, n, t) {
  return e.set(Fu(e, n), t), t;
}
function xn(e, n) {
  return e.get(Fu(e, n));
}
function Fu(e, n, t) {
  if (typeof e == "function" ? e === n : e.has(n)) return arguments.length < 3 ? n : t;
  throw new TypeError("Private element is not present on this object");
}
function Nu(e, n, t) {
  const a = n.length - 1;
  if (a < 0) return e === void 0 ? t : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return t;
    e = e[n[l]];
  }
  return e == null || e[n[a]] === void 0 ? t : e[n[a]];
}
function Xt(e, n) {
  if (e === n) return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((a) => Xt(e[a], n[a]));
}
function Ea(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), Nu(e, n.split("."), t));
}
function Ze(e, n, t) {
  if (n === !0) return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean") return t;
  if (e !== Object(e)) {
    if (typeof n != "function") return t;
    const l = n(e, t);
    return typeof l > "u" ? t : l;
  }
  if (typeof n == "string") return Ea(e, n, t);
  if (Array.isArray(n)) return Nu(e, n, t);
  if (typeof n != "function") return t;
  const a = n(e, t);
  return typeof a > "u" ? t : a;
}
function Kt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (t, a) => n + a);
}
function J(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function La(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ai(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const Qr = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
}), zo = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function Ru(e) {
  return Object.keys(e);
}
function Tn(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function $i(e, n) {
  const t = {}, a = new Set(Object.keys(e));
  for (const l of n)
    a.has(l) && (t[l] = e[l]);
  return t;
}
function jo(e, n, t) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const o in e)
    n.some((i) => i instanceof RegExp ? i.test(o) : i === o) && !(t != null && t.some((i) => i === o)) ? a[o] = e[o] : l[o] = e[o];
  return [a, l];
}
function We(e, n) {
  const t = {
    ...e
  };
  return n.forEach((a) => delete t[a]), t;
}
function Hl(e, n) {
  const t = {};
  return n.forEach((a) => t[a] = e[a]), t;
}
const Hu = /^on[^a-z]/, zl = (e) => Hu.test(e), ng = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], ag = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function lg(e) {
  return e.isComposing && ag.includes(e.key);
}
function pn(e) {
  const [n, t] = jo(e, [Hu]), a = We(n, ng), [l, o] = jo(t, ["class", "style", "id", /^data-/]);
  return Object.assign(l, n), Object.assign(o, a), [l, o];
}
function Ne(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function og(e, n) {
  let t = 0;
  const a = function() {
    for (var l = arguments.length, o = new Array(l), i = 0; i < l; i++)
      o[i] = arguments[i];
    clearTimeout(t), t = setTimeout(() => e(...o), pt(n));
  };
  return a.clear = () => {
    clearTimeout(t);
  }, a.immediate = e, a;
}
function qe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function es(e) {
  const n = e.toString().trim();
  return n.includes(".") ? n.length - n.indexOf(".") - 1 : 0;
}
function ts(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function ns(e, n) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length)) + e;
}
function ig(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let a = 0;
  for (; a < e.length; )
    t.push(e.substr(a, n)), a += n;
  return t;
}
function as(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < n)
    return `${e} B`;
  const t = n === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= n && a < t.length - 1; )
    e /= n, ++a;
  return `${e.toFixed(1)} ${t[a]}B`;
}
function ft() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in n) {
    const o = e[l], i = n[l];
    if (La(o) && La(i)) {
      a[l] = ft(o, i, t);
      continue;
    }
    if (Array.isArray(o) && Array.isArray(i) && t) {
      a[l] = t(o, i);
      continue;
    }
    a[l] = i;
  }
  return a;
}
function zu(e) {
  return e.map((n) => n.type === oe ? zu(n.children) : n).flat();
}
function Dn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Dn.cache.has(e)) return Dn.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Dn.cache.set(e, n), n;
}
Dn.cache = /* @__PURE__ */ new Map();
function ta(e, n) {
  if (!n || typeof n != "object") return [];
  if (Array.isArray(n))
    return n.map((t) => ta(e, t)).flat(1);
  if (n.suspense)
    return ta(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => ta(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return ta(e, n.component.subTree).flat(1);
  }
  return [];
}
var gl = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap();
class rg {
  constructor(n) {
    Jr(this, gl, []), Jr(this, qn, 0), this.size = n;
  }
  push(n) {
    xn(gl, this)[xn(qn, this)] = n, tg(qn, this, (xn(qn, this) + 1) % this.size);
  }
  values() {
    return xn(gl, this).slice(xn(qn, this)).concat(xn(gl, this).slice(0, xn(qn, this)));
  }
}
function sg(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function _i(e) {
  const n = Vt({}), t = b(e);
  return Ye(() => {
    for (const a in t.value)
      n[a] = t.value[a];
  }, {
    flush: "sync"
  }), Nl(n);
}
function Ml(e, n) {
  return e.includes(n);
}
function ju(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const at = () => [Function, Array];
function ls(e, n) {
  return n = "on" + ca(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function Oi(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...t);
  else typeof e == "function" && e(...t);
}
function Fa(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function Yu(e, n, t) {
  let a, l = e.indexOf(document.activeElement);
  const o = n === "next" ? 1 : -1;
  do
    l += o, a = e[l];
  while ((!a || a.offsetParent == null || !((t == null ? void 0 : t(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function la(e, n) {
  var a, l, o, i;
  const t = Fa(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = t[0]) == null || a.focus());
  else if (n === "first")
    (l = t[0]) == null || l.focus();
  else if (n === "last")
    (o = t.at(-1)) == null || o.focus();
  else if (typeof n == "number")
    (i = t[n]) == null || i.focus();
  else {
    const r = Yu(t, n);
    r ? r.focus() : la(e, n === "next" ? "first" : "last");
  }
}
function yl(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Wu() {
}
function oa(e, n) {
  if (!(xe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`))) return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function jl(e) {
  return e.some((n) => Xf(n) ? n.type === Zf ? !1 : n.type !== oe || jl(n.children) : !0) ? e : null;
}
function ug(e, n) {
  if (!xe || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function os(e, n) {
  const t = G();
  return Ye(() => {
    t.value = e();
  }, {
    flush: "sync",
    ...n
  }), Xa(t);
}
function cg(e, n) {
  const t = e.clientX, a = e.clientY, l = n.getBoundingClientRect(), o = l.left, i = l.top, r = l.right, s = l.bottom;
  return t >= o && t <= r && a >= i && a <= s;
}
function Bl() {
  const e = G(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => Ai(e.value)
  }), n;
}
const Uu = ["top", "bottom"], dg = ["start", "end", "left", "right"];
function Yo(e, n) {
  let [t, a] = e.split(" ");
  return a || (a = Ml(Uu, t) ? "start" : Ml(dg, t) ? "top" : "center"), {
    side: Wo(t, n),
    align: Wo(a, n)
  };
}
function Wo(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function To(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Io(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function is(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function rs(e) {
  return Ml(Uu, e.side) ? "y" : "x";
}
class Mn {
  constructor(n) {
    let {
      x: t,
      y: a,
      width: l,
      height: o
    } = n;
    this.x = t, this.y = a, this.width = l, this.height = o;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function ss(e, n) {
  return {
    x: {
      before: Math.max(0, n.left - e.left),
      after: Math.max(0, e.right - n.right)
    },
    y: {
      before: Math.max(0, n.top - e.top),
      after: Math.max(0, e.bottom - n.bottom)
    }
  };
}
function Ku(e) {
  return Array.isArray(e) ? new Mn({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function Ei(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), a = t.transform;
  if (a) {
    let l, o, i, r, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), o = +l[0], i = +l[5], r = +l[12], s = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), o = +l[0], i = +l[3], r = +l[4], s = +l[5];
    else
      return new Mn(n);
    const c = t.transformOrigin, u = n.x - r - (1 - o) * parseFloat(c), f = n.y - s - (1 - i) * parseFloat(c.slice(c.indexOf(" ") + 1)), m = o ? n.width / o : e.offsetWidth + 1, v = i ? n.height / i : e.offsetHeight + 1;
    return new Mn({
      x: u,
      y: f,
      width: m,
      height: v
    });
  } else
    return new Mn(n);
}
function In(e, n, t) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(n, t);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const xl = /* @__PURE__ */ new WeakMap();
function fg(e, n) {
  Object.keys(n).forEach((t) => {
    if (zl(t)) {
      const a = ju(t), l = xl.get(e);
      if (n[t] == null)
        l == null || l.forEach((o) => {
          const [i, r] = o;
          i === a && (e.removeEventListener(a, r), l.delete(o));
        });
      else if (!l || ![...l].some((o) => o[0] === a && o[1] === n[t])) {
        e.addEventListener(a, n[t]);
        const o = l || /* @__PURE__ */ new Set();
        o.add([a, n[t]]), xl.has(e) || xl.set(e, o);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function vg(e, n) {
  Object.keys(n).forEach((t) => {
    if (zl(t)) {
      const a = ju(t), l = xl.get(e);
      l == null || l.forEach((o) => {
        const [i, r] = o;
        i === a && (e.removeEventListener(a, r), l.delete(o));
      });
    } else
      e.removeAttribute(t);
  });
}
const Xn = 2.4, us = 0.2126729, cs = 0.7151522, ds = 0.072175, mg = 0.55, hg = 0.58, gg = 0.57, yg = 0.62, bl = 0.03, fs = 1.45, bg = 5e-4, pg = 1.25, kg = 1.25, vs = 0.078, ms = 12.82051282051282, pl = 0.06, hs = 1e-3;
function gs(e, n) {
  const t = (e.r / 255) ** Xn, a = (e.g / 255) ** Xn, l = (e.b / 255) ** Xn, o = (n.r / 255) ** Xn, i = (n.g / 255) ** Xn, r = (n.b / 255) ** Xn;
  let s = t * us + a * cs + l * ds, c = o * us + i * cs + r * ds;
  if (s <= bl && (s += (bl - s) ** fs), c <= bl && (c += (bl - c) ** fs), Math.abs(c - s) < bg) return 0;
  let u;
  if (c > s) {
    const f = (c ** mg - s ** hg) * pg;
    u = f < hs ? 0 : f < vs ? f - f * ms * pl : f - pl;
  } else {
    const f = (c ** yg - s ** gg) * kg;
    u = f > -hs ? 0 : f > -vs ? f - f * ms * pl : f + pl;
  }
  return u * 100;
}
function zt(e) {
  Rl(`Vuetify: ${e}`);
}
function Al(e) {
  Rl(`Vuetify error: ${e}`);
}
function Sg(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, Rl(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
const $l = 0.20689655172413793, wg = (e) => e > $l ** 3 ? Math.cbrt(e) : e / (3 * $l ** 2) + 4 / 29, Cg = (e) => e > $l ? e ** 3 : 3 * $l ** 2 * (e - 4 / 29);
function Gu(e) {
  const n = wg, t = n(e[1]);
  return [116 * t - 16, 500 * (n(e[0] / 0.95047) - t), 200 * (t - n(e[2] / 1.08883))];
}
function qu(e) {
  const n = Cg, t = (e[0] + 16) / 116;
  return [n(t + e[1] / 500) * 0.95047, n(t), n(t - e[2] / 200) * 1.08883];
}
const xg = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Vg = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Pg = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Tg = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Xu(e) {
  const n = Array(3), t = Vg, a = xg;
  for (let l = 0; l < 3; ++l)
    n[l] = Math.round(qe(t(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: n[0],
    g: n[1],
    b: n[2]
  };
}
function Li(e) {
  let {
    r: n,
    g: t,
    b: a
  } = e;
  const l = [0, 0, 0], o = Tg, i = Pg;
  n = o(n / 255), t = o(t / 255), a = o(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = i[r][0] * n + i[r][1] * t + i[r][2] * a;
  return l;
}
function Uo(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Ig(e) {
  return Uo(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const ys = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Dg = {
  rgb: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  rgba: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  hsl: (e, n, t, a) => bs({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsla: (e, n, t, a) => bs({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsv: (e, n, t, a) => nn({
    h: e,
    s: n,
    v: t,
    a
  }),
  hsva: (e, n, t, a) => nn({
    h: e,
    s: n,
    v: t,
    a
  })
};
function At(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && zt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && ys.test(e)) {
    const {
      groups: n
    } = e.match(ys), {
      fn: t,
      values: a
    } = n, l = a.split(/,\s*/).map((o) => o.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(o) / 100 : parseFloat(o));
    return Dg[t](...l);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((a) => a + a).join("") : [6, 8].includes(n.length) || zt(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && zt(`'${e}' is not a valid hex(a) color`), tc(n);
  } else if (typeof e == "object") {
    if (Tn(e, ["r", "g", "b"]))
      return e;
    if (Tn(e, ["h", "s", "l"]))
      return nn(Fi(e));
    if (Tn(e, ["h", "s", "v"]))
      return nn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function nn(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, o = (r) => {
    const s = (r + n / 60) % 6;
    return a - a * t * Math.max(Math.min(s, 4 - s, 1), 0);
  }, i = [o(5), o(3), o(1)].map((r) => Math.round(r * 255));
  return {
    r: i[0],
    g: i[1],
    b: i[2],
    a: l
  };
}
function bs(e) {
  return nn(Fi(e));
}
function Yl(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const n = e.r / 255, t = e.g / 255, a = e.b / 255, l = Math.max(n, t, a), o = Math.min(n, t, a);
  let i = 0;
  l !== o && (l === n ? i = 60 * (0 + (t - a) / (l - o)) : l === t ? i = 60 * (2 + (a - n) / (l - o)) : l === a && (i = 60 * (4 + (n - t) / (l - o)))), i < 0 && (i = i + 360);
  const r = l === 0 ? 0 : (l - o) / l, s = [i, r, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function Zu(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, o = a - a * t / 2, i = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return {
    h: n,
    s: i,
    l: o,
    a: l
  };
}
function Fi(e) {
  const {
    h: n,
    s: t,
    l: a,
    a: l
  } = e, o = a + t * Math.min(a, 1 - a), i = o === 0 ? 0 : 2 - 2 * a / o;
  return {
    h: n,
    s: i,
    v: o,
    a: l
  };
}
function Ju(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${n}, ${t}, ${a})` : `rgba(${n}, ${t}, ${a}, ${l})`;
}
function Qu(e) {
  return Ju(nn(e));
}
function kl(e) {
  const n = Math.round(e).toString(16);
  return ("00".substr(0, 2 - n.length) + n).toUpperCase();
}
function ec(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return `#${[kl(n), kl(t), kl(a), l !== void 0 ? kl(Math.round(l * 255)) : ""].join("")}`;
}
function tc(e) {
  e = Mg(e);
  let [n, t, a, l] = ig(e, 2).map((o) => parseInt(o, 16));
  return l = l === void 0 ? l : l / 255, {
    r: n,
    g: t,
    b: a,
    a: l
  };
}
function nc(e) {
  const n = tc(e);
  return Yl(n);
}
function ac(e) {
  return ec(nn(e));
}
function Mg(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = ts(ts(e, 6), 8, "F")), e;
}
function Bg(e, n) {
  const t = Gu(Li(e));
  return t[0] = t[0] + n * 10, Xu(qu(t));
}
function Ag(e, n) {
  const t = Gu(Li(e));
  return t[0] = t[0] - n * 10, Xu(qu(t));
}
function Ko(e) {
  const n = At(e);
  return Li(n)[1];
}
function $g(e, n) {
  const t = Ko(e), a = Ko(n), l = Math.max(t, a), o = Math.min(t, a);
  return (l + 0.05) / (o + 0.05);
}
function lc(e) {
  const n = Math.abs(gs(At(0), At(e)));
  return Math.abs(gs(At(16777215), At(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function $(e, n) {
  return (t) => Object.keys(e).reduce((a, l) => {
    const i = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return t && l in t ? a[l] = {
      ...i,
      default: t[l]
    } : a[l] = i, n && !a[l].source && (a[l].source = n), a;
  }, {});
}
const Q = $({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Ue(e, n) {
  const t = au();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Zt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = Ue(e).type;
  return Dn((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let oc = 0, Vl = /* @__PURE__ */ new WeakMap();
function lt() {
  const e = Ue("getUid");
  if (Vl.has(e)) return Vl.get(e);
  {
    const n = oc++;
    return Vl.set(e, n), n;
  }
}
lt.reset = () => {
  oc = 0, Vl = /* @__PURE__ */ new WeakMap();
};
function _g(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ue("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const ia = Symbol.for("vuetify:defaults");
function Og(e) {
  return Y(e);
}
function Ni() {
  const e = pe(ia);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function He(e, n) {
  const t = Ni(), a = Y(e), l = b(() => {
    if (pt(n == null ? void 0 : n.disabled)) return t.value;
    const i = pt(n == null ? void 0 : n.scoped), r = pt(n == null ? void 0 : n.reset), s = pt(n == null ? void 0 : n.root);
    if (a.value == null && !(i || r || s)) return t.value;
    let c = ft(a.value, {
      prev: t.value
    });
    if (i) return c;
    if (r || s) {
      const u = Number(r || 1 / 0);
      for (let f = 0; f <= u && !(!c || !("prev" in c)); f++)
        c = c.prev;
      return c && typeof s == "string" && s in c && (c = ft(ft(c, {
        prev: c
      }), c[s])), c;
    }
    return c.prev ? ft(c.prev, c) : c;
  });
  return Le(ia, l), l;
}
function Eg(e, n) {
  var t, a;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((a = e.props) == null ? void 0 : a[Dn(n)]) < "u";
}
function Lg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ni();
  const a = Ue("useDefaults");
  if (n = n ?? a.type.name ?? a.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const l = b(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), o = new Proxy(e, {
    get(s, c) {
      var f, m, v, g, h, y, k;
      const u = Reflect.get(s, c);
      return c === "class" || c === "style" ? [(f = l.value) == null ? void 0 : f[c], u].filter((p) => p != null) : typeof c == "string" && !Eg(a.vnode, c) ? ((m = l.value) == null ? void 0 : m[c]) !== void 0 ? (v = l.value) == null ? void 0 : v[c] : ((h = (g = t.value) == null ? void 0 : g.global) == null ? void 0 : h[c]) !== void 0 ? (k = (y = t.value) == null ? void 0 : y.global) == null ? void 0 : k[c] : u : u;
    }
  }), i = G();
  Ye(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((c) => {
        let [u] = c;
        return u.startsWith(u[0].toUpperCase());
      });
      i.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      i.value = void 0;
  });
  function r() {
    const s = _g(ia, a);
    Le(ia, b(() => i.value ? ft((s == null ? void 0 : s.value) ?? {}, i.value) : s == null ? void 0 : s.value));
  }
  return {
    props: o,
    provideSubDefaults: r
  };
}
function Dt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return zt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = $(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(a) {
      return $i(a, n);
    }, e.props._as = String, e.setup = function(a, l) {
      const o = Ni();
      if (!o.value) return e._setup(a, l);
      const {
        props: i,
        provideSubDefaults: r
      } = Lg(a, a._as ?? e.name, o), s = e._setup(i, l);
      return r(), s;
    };
  }
  return e;
}
function L() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? Dt : Jf)(n);
}
function Fg(e, n) {
  return n.props = e, n;
}
function Jt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return L()({
    name: t ?? ca(ou(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: n
      },
      ...Q()
    },
    setup(a, l) {
      let {
        slots: o
      } = l;
      return () => {
        var i;
        return bn(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (i = o.default) == null ? void 0 : i.call(o));
      };
    }
  });
}
function ic(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({
    composed: !0
  }) !== document ? null : n;
}
const Na = "cubic-bezier(0.4, 0, 0.2, 1)", Ng = "cubic-bezier(0.0, 0, 0.2, 1)", Rg = "cubic-bezier(0.4, 0, 1, 1)";
function ps(e, n, t) {
  return Object.keys(e).filter((a) => zl(a) && a.endsWith(n)).reduce((a, l) => (a[l.slice(0, -n.length)] = (o) => e[l](o, t(o)), a), {});
}
function Ri(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? Hg(e) : Hi(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function _l(e, n) {
  const t = [];
  if (n && e && !n.contains(e)) return t;
  for (; e && (Hi(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function Hi(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Hg(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function zg(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function H(e) {
  const n = Ue("useRender");
  n.render = e;
}
function ie(e, n, t) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const o = Ue("useProxiedModel"), i = Y(e[n] !== void 0 ? e[n] : t), r = Dn(n), c = r !== n ? b(() => {
    var f, m, v, g;
    return e[n], !!(((f = o.vnode.props) != null && f.hasOwnProperty(n) || (m = o.vnode.props) != null && m.hasOwnProperty(r)) && ((v = o.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`) || (g = o.vnode.props) != null && g.hasOwnProperty(`onUpdate:${r}`)));
  }) : b(() => {
    var f, m;
    return e[n], !!((f = o.vnode.props) != null && f.hasOwnProperty(n) && ((m = o.vnode.props) != null && m.hasOwnProperty(`onUpdate:${n}`)));
  });
  xt(() => !c.value, () => {
    q(() => e[n], (f) => {
      i.value = f;
    });
  });
  const u = b({
    get() {
      const f = e[n];
      return a(c.value ? f : i.value);
    },
    set(f) {
      const m = l(f), v = kt(c.value ? e[n] : i.value);
      v === m || a(v) === f || (i.value = m, o == null || o.emit(`update:${n}`, m));
    }
  });
  return Object.defineProperty(u, "externalValue", {
    get: () => c.value ? e[n] : i.value
  }), u;
}
const jg = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  }
}, ks = "$vuetify.", Ss = (e, n) => e.replace(/\{(\d+)\}/g, (t, a) => String(n[+a])), rc = (e, n, t) => function(a) {
  for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++)
    o[i - 1] = arguments[i];
  if (!a.startsWith(ks))
    return Ss(a, o);
  const r = a.replace(ks, ""), s = e.value && t.value[e.value], c = n.value && t.value[n.value];
  let u = Ea(s, r, null);
  return u || (zt(`Translation key "${a}" not found in "${e.value}", trying fallback locale`), u = Ea(c, r, null)), u || (Al(`Translation key "${a}" not found in fallback`), u = a), typeof u != "string" && (Al(`Translation key "${a}" has a non-string value`), u = a), Ss(u, o);
};
function sc(e, n) {
  return (t, a) => new Intl.NumberFormat([e.value, n.value], a).format(t);
}
function Do(e, n, t) {
  const a = ie(e, n, e[n] ?? t.value);
  return a.value = e[n] ?? t.value, q(t, (l) => {
    e[n] == null && (a.value = t.value);
  }), a;
}
function uc(e) {
  return (n) => {
    const t = Do(n, "locale", e.current), a = Do(n, "fallback", e.fallback), l = Do(n, "messages", e.messages);
    return {
      name: "vuetify",
      current: t,
      fallback: a,
      messages: l,
      t: rc(t, a, l),
      n: sc(t, a),
      provide: uc({
        current: t,
        fallback: a,
        messages: l
      })
    };
  };
}
function Yg(e) {
  const n = G((e == null ? void 0 : e.locale) ?? "en"), t = G((e == null ? void 0 : e.fallback) ?? "en"), a = Y({
    en: jg,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: n,
    fallback: t,
    messages: a,
    t: rc(n, t, a),
    n: sc(n, t),
    provide: uc({
      current: n,
      fallback: t,
      messages: a
    })
  };
}
const ra = Symbol.for("vuetify:locale");
function Wg(e) {
  return e.name != null;
}
function Ug(e) {
  const n = e != null && e.adapter && Wg(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Yg(e), t = qg(n, e);
  return {
    ...n,
    ...t
  };
}
function Ke() {
  const e = pe(ra);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Kg(e) {
  const n = pe(ra);
  if (!n) throw new Error("[Vuetify] Could not find injected locale instance");
  const t = n.provide(e), a = Xg(t, n.rtl, e), l = {
    ...t,
    ...a
  };
  return Le(ra, l), l;
}
function Gg() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function qg(e, n) {
  const t = Y((n == null ? void 0 : n.rtl) ?? Gg()), a = b(() => t.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: b(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Xg(e, n, t) {
  const a = b(() => t.rtl ?? n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: b(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Qe() {
  const e = pe(ra);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Wl = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0
};
function Zg(e, n, t) {
  const a = [];
  let l = [];
  const o = cc(e), i = dc(e), r = t ?? Wl[n.slice(-2).toUpperCase()] ?? 0, s = (o.getDay() - r + 7) % 7, c = (i.getDay() - r + 7) % 7;
  for (let u = 0; u < s; u++) {
    const f = new Date(o);
    f.setDate(f.getDate() - (s - u)), l.push(f);
  }
  for (let u = 1; u <= i.getDate(); u++) {
    const f = new Date(e.getFullYear(), e.getMonth(), u);
    l.push(f), l.length === 7 && (a.push(l), l = []);
  }
  for (let u = 1; u < 7 - c; u++) {
    const f = new Date(i);
    f.setDate(f.getDate() + u), l.push(f);
  }
  return l.length > 0 && a.push(l), a;
}
function Jg(e, n, t) {
  const a = t ?? Wl[n.slice(-2).toUpperCase()] ?? 0, l = new Date(e);
  for (; l.getDay() !== a; )
    l.setDate(l.getDate() - 1);
  return l;
}
function Qg(e, n) {
  const t = new Date(e), a = ((Wl[n.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
  for (; t.getDay() !== a; )
    t.setDate(t.getDate() + 1);
  return t;
}
function cc(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function dc(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function ey(e) {
  const n = e.split("-").map(Number);
  return new Date(n[0], n[1] - 1, n[2]);
}
const ty = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function fc(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let n;
    if (ty.test(e))
      return ey(e);
    if (n = Date.parse(e), !isNaN(n)) return new Date(n);
  }
  return null;
}
const ws = new Date(2e3, 0, 2);
function ny(e, n) {
  const t = n ?? Wl[e.slice(-2).toUpperCase()] ?? 0;
  return Kt(7).map((a) => {
    const l = new Date(ws);
    return l.setDate(ws.getDate() + t + a), new Intl.DateTimeFormat(e, {
      weekday: "narrow"
    }).format(l);
  });
}
function ay(e, n, t, a) {
  const l = fc(e) ?? /* @__PURE__ */ new Date(), o = a == null ? void 0 : a[n];
  if (typeof o == "function")
    return o(l, n, t);
  let i = {};
  switch (n) {
    case "fullDate":
      i = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      i = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const r = l.getDate(), s = new Intl.DateTimeFormat(t, {
        month: "long"
      }).format(l);
      return `${r} ${s}`;
    case "normalDateWithWeekday":
      i = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      i = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      i = {
        year: "numeric"
      };
      break;
    case "month":
      i = {
        month: "long"
      };
      break;
    case "monthShort":
      i = {
        month: "short"
      };
      break;
    case "monthAndYear":
      i = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      i = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      i = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      i = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(t).format(l.getDate());
    case "hours12h":
      i = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      i = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      i = {
        minute: "numeric"
      };
      break;
    case "seconds":
      i = {
        second: "numeric"
      };
      break;
    case "fullTime":
      i = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullTime12h":
      i = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      i = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      i = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime12h":
      i = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      i = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      i = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      i = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDateTime12h":
      i = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !0
      };
      break;
    case "keyboardDateTime24h":
      i = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1
      };
      break;
    default:
      i = o ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(t, i).format(l);
}
function ly(e, n) {
  const t = e.toJsDate(n), a = t.getFullYear(), l = ns(String(t.getMonth() + 1), 2, "0"), o = ns(String(t.getDate()), 2, "0");
  return `${a}-${l}-${o}`;
}
function oy(e) {
  const [n, t, a] = e.split("-").map(Number);
  return new Date(n, t - 1, a);
}
function iy(e, n) {
  const t = new Date(e);
  return t.setMinutes(t.getMinutes() + n), t;
}
function ry(e, n) {
  const t = new Date(e);
  return t.setHours(t.getHours() + n), t;
}
function sy(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n), t;
}
function uy(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n * 7), t;
}
function cy(e, n) {
  const t = new Date(e);
  return t.setDate(1), t.setMonth(t.getMonth() + n), t;
}
function dy(e) {
  return e.getFullYear();
}
function fy(e) {
  return e.getMonth();
}
function vy(e) {
  return e.getDate();
}
function my(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function hy(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function gy(e) {
  return e.getHours();
}
function yy(e) {
  return e.getMinutes();
}
function by(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function py(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function ky(e, n) {
  return Ol(e, n[0]) && Cy(e, n[1]);
}
function Sy(e) {
  const n = new Date(e);
  return n instanceof Date && !isNaN(n.getTime());
}
function Ol(e, n) {
  return e.getTime() > n.getTime();
}
function wy(e, n) {
  return Ol(Go(e), Go(n));
}
function Cy(e, n) {
  return e.getTime() < n.getTime();
}
function Cs(e, n) {
  return e.getTime() === n.getTime();
}
function xy(e, n) {
  return e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function Vy(e, n) {
  return e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function Py(e, n) {
  return e.getFullYear() === n.getFullYear();
}
function Ty(e, n, t) {
  const a = new Date(e), l = new Date(n);
  switch (t) {
    case "years":
      return a.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - l.getTime()) / 1e3);
    default:
      return a.getTime() - l.getTime();
  }
}
function Iy(e, n) {
  const t = new Date(e);
  return t.setHours(n), t;
}
function Dy(e, n) {
  const t = new Date(e);
  return t.setMinutes(n), t;
}
function My(e, n) {
  const t = new Date(e);
  return t.setMonth(n), t;
}
function By(e, n) {
  const t = new Date(e);
  return t.setDate(n), t;
}
function Ay(e, n) {
  const t = new Date(e);
  return t.setFullYear(n), t;
}
function Go(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function $y(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class _y {
  constructor(n) {
    this.locale = n.locale, this.formats = n.formats;
  }
  date(n) {
    return fc(n);
  }
  toJsDate(n) {
    return n;
  }
  toISO(n) {
    return ly(this, n);
  }
  parseISO(n) {
    return oy(n);
  }
  addMinutes(n, t) {
    return iy(n, t);
  }
  addHours(n, t) {
    return ry(n, t);
  }
  addDays(n, t) {
    return sy(n, t);
  }
  addWeeks(n, t) {
    return uy(n, t);
  }
  addMonths(n, t) {
    return cy(n, t);
  }
  getWeekArray(n, t) {
    return Zg(n, this.locale, t ? Number(t) : void 0);
  }
  startOfWeek(n, t) {
    return Jg(n, this.locale, t ? Number(t) : void 0);
  }
  endOfWeek(n) {
    return Qg(n, this.locale);
  }
  startOfMonth(n) {
    return cc(n);
  }
  endOfMonth(n) {
    return dc(n);
  }
  format(n, t) {
    return ay(n, t, this.locale, this.formats);
  }
  isEqual(n, t) {
    return Cs(n, t);
  }
  isValid(n) {
    return Sy(n);
  }
  isWithinRange(n, t) {
    return ky(n, t);
  }
  isAfter(n, t) {
    return Ol(n, t);
  }
  isAfterDay(n, t) {
    return wy(n, t);
  }
  isBefore(n, t) {
    return !Ol(n, t) && !Cs(n, t);
  }
  isSameDay(n, t) {
    return xy(n, t);
  }
  isSameMonth(n, t) {
    return Vy(n, t);
  }
  isSameYear(n, t) {
    return Py(n, t);
  }
  setMinutes(n, t) {
    return Dy(n, t);
  }
  setHours(n, t) {
    return Iy(n, t);
  }
  setMonth(n, t) {
    return My(n, t);
  }
  setDate(n, t) {
    return By(n, t);
  }
  setYear(n, t) {
    return Ay(n, t);
  }
  getDiff(n, t, a) {
    return Ty(n, t, a);
  }
  getWeekdays(n) {
    return ny(this.locale, n ? Number(n) : void 0);
  }
  getYear(n) {
    return dy(n);
  }
  getMonth(n) {
    return fy(n);
  }
  getDate(n) {
    return vy(n);
  }
  getNextMonth(n) {
    return my(n);
  }
  getPreviousMonth(n) {
    return hy(n);
  }
  getHours(n) {
    return gy(n);
  }
  getMinutes(n) {
    return yy(n);
  }
  startOfDay(n) {
    return Go(n);
  }
  endOfDay(n) {
    return $y(n);
  }
  startOfYear(n) {
    return by(n);
  }
  endOfYear(n) {
    return py(n);
  }
}
const vc = Symbol.for("vuetify:date-options"), xs = Symbol.for("vuetify:date-adapter");
function Oy(e, n) {
  const t = ft({
    adapter: _y,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: t,
    instance: mc(t, n)
  };
}
function mc(e, n) {
  const t = Vt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[n.current.value] ?? n.current.value,
    formats: e.formats
  }) : e.adapter);
  return q(n.current, (a) => {
    t.locale = e.locale[a] ?? a ?? t.locale;
  }), t;
}
function el() {
  const e = pe(vc);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const n = Ke();
  return mc(e, n);
}
function Ey(e, n) {
  const t = e.toJsDate(n);
  let a = t.getFullYear(), l = new Date(a, 0, 1);
  if (t < l)
    a = a - 1, l = new Date(a, 0, 1);
  else {
    const r = new Date(a + 1, 0, 1);
    t >= r && (a = a + 1, l = r);
  }
  const o = Math.abs(t.getTime() - l.getTime()), i = Math.ceil(o / (1e3 * 60 * 60 * 24));
  return Math.floor(i / 7) + 1;
}
const Ul = ["sm", "md", "lg", "xl", "xxl"], qo = Symbol.for("vuetify:display"), Vs = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, Ly = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vs;
  return ft(Vs, e);
};
function Ps(e) {
  return xe && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Ts(e) {
  return xe && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Is(e) {
  const n = xe && !e ? window.navigator.userAgent : "ssr";
  function t(g) {
    return !!n.match(g);
  }
  const a = t(/android/i), l = t(/iphone|ipad|ipod/i), o = t(/cordova/i), i = t(/electron/i), r = t(/chrome/i), s = t(/edge/i), c = t(/firefox/i), u = t(/opera/i), f = t(/win/i), m = t(/mac/i), v = t(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: o,
    electron: i,
    chrome: r,
    edge: s,
    firefox: c,
    opera: u,
    win: f,
    mac: m,
    linux: v,
    touch: Qh,
    ssr: n === "ssr"
  };
}
function Fy(e, n) {
  const {
    thresholds: t,
    mobileBreakpoint: a
  } = Ly(e), l = G(Ts(n)), o = G(Is(n)), i = Vt({}), r = G(Ps(n));
  function s() {
    l.value = Ts(), r.value = Ps();
  }
  function c() {
    s(), o.value = Is();
  }
  return Ye(() => {
    const u = r.value < t.sm, f = r.value < t.md && !u, m = r.value < t.lg && !(f || u), v = r.value < t.xl && !(m || f || u), g = r.value < t.xxl && !(v || m || f || u), h = r.value >= t.xxl, y = u ? "xs" : f ? "sm" : m ? "md" : v ? "lg" : g ? "xl" : "xxl", k = typeof a == "number" ? a : t[a], p = r.value < k;
    i.xs = u, i.sm = f, i.md = m, i.lg = v, i.xl = g, i.xxl = h, i.smAndUp = !u, i.mdAndUp = !(u || f), i.lgAndUp = !(u || f || m), i.xlAndUp = !(u || f || m || v), i.smAndDown = !(m || v || g || h), i.mdAndDown = !(v || g || h), i.lgAndDown = !(g || h), i.xlAndDown = !h, i.name = y, i.height = l.value, i.width = r.value, i.mobile = p, i.mobileBreakpoint = a, i.platform = o.value, i.thresholds = t;
  }), xe && window.addEventListener("resize", s, {
    passive: !0
  }), {
    ...Nl(i),
    update: c,
    ssr: !!n
  };
}
const Nn = $({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function _t() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zt();
  const t = pe(qo);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const a = b(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return t.mobile.value;
    const o = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < o;
  }), l = b(() => n ? {
    [`${n}--mobile`]: a.value
  } : {});
  return {
    ...t,
    displayClasses: l,
    mobile: a
  };
}
const hc = Symbol.for("vuetify:goto");
function gc() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function Ny(e) {
  return zi(e) ?? (document.scrollingElement || document.body);
}
function zi(e) {
  return typeof e == "string" ? document.querySelector(e) : Ai(e);
}
function Mo(e, n, t) {
  if (typeof e == "number") return n && t ? -e : e;
  let a = zi(e), l = 0;
  for (; a; )
    l += n ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function Ry(e, n) {
  return {
    rtl: n.isRtl,
    options: ft(gc(), e)
  };
}
async function Ds(e, n, t, a) {
  const l = t ? "scrollLeft" : "scrollTop", o = ft((a == null ? void 0 : a.options) ?? gc(), n), i = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : zi(e)) ?? 0, s = o.container === "parent" && r instanceof HTMLElement ? r.parentElement : Ny(o.container), c = typeof o.easing == "function" ? o.easing : o.patterns[o.easing];
  if (!c) throw new TypeError(`Easing function "${o.easing}" not found.`);
  let u;
  if (typeof r == "number")
    u = Mo(r, t, i);
  else if (u = Mo(r, t, i) - Mo(s, t, i), o.layout) {
    const g = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    g && (u -= parseInt(g, 10));
  }
  u += o.offset, u = zy(s, u, !!i, !!t);
  const f = s[l] ?? 0;
  if (u === f) return Promise.resolve(u);
  const m = performance.now();
  return new Promise((v) => requestAnimationFrame(function g(h) {
    const k = (h - m) / o.duration, p = Math.floor(f + (u - f) * c(qe(k, 0, 1)));
    if (s[l] = p, k >= 1 && Math.abs(p - s[l]) < 10)
      return v(u);
    if (k > 2)
      return zt("Scroll target is not reachable"), v(s[l]);
    requestAnimationFrame(g);
  }));
}
function Hy() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = pe(hc), {
    isRtl: t
  } = Qe();
  if (!n) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...n,
    // can be set via VLocaleProvider
    rtl: b(() => n.rtl.value || t.value)
  };
  async function l(o, i) {
    return Ds(o, ft(e, i), !1, a);
  }
  return l.horizontal = async (o, i) => Ds(o, ft(e, i), !0, a), l;
}
function zy(e, n, t, a) {
  const {
    scrollWidth: l,
    scrollHeight: o
  } = e, [i, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, c;
  return a ? t ? (s = -(l - i), c = 0) : (s = 0, c = l - i) : (s = 0, c = o + -r), Math.max(Math.min(n, c), s);
}
const jy = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper"
}, Yy = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => bn(Yi, {
    ...e,
    class: "mdi"
  })
}, ue = [String, Function, Object, Array], Xo = Symbol.for("vuetify:icons"), Kl = $({
  icon: {
    type: ue
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Zo = L()({
  name: "VComponentIcon",
  props: Kl(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return () => {
      const a = e.icon;
      return d(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? d(a, null, null) : (l = t.default) == null ? void 0 : l.call(t)];
        }
      });
    };
  }
}), ji = Dt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Kl(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => d(e.tag, B(t, {
      style: null
    }), {
      default: () => [d("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? d("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : d("path", {
        d: a
      }, null)) : d("path", {
        d: e.icon
      }, null)])]
    });
  }
}), Wy = Dt({
  name: "VLigatureIcon",
  props: Kl(),
  setup(e) {
    return () => d(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), Yi = Dt({
  name: "VClassIcon",
  props: Kl(),
  setup(e) {
    return () => d(e.tag, {
      class: e.icon
    }, null);
  }
});
function Uy() {
  return {
    svg: {
      component: ji
    },
    class: {
      component: Yi
    }
  };
}
function Ky(e) {
  const n = Uy(), t = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return t === "mdi" && !n.mdi && (n.mdi = Yy), ft({
    defaultSet: t,
    sets: n,
    aliases: {
      ...jy,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const Gy = (e) => {
  const n = pe(Xo);
  if (!n) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: b(() => {
      var s;
      const a = pt(e);
      if (!a) return {
        component: Zo
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = n.aliases) == null ? void 0 : s[l.slice(1)])), l || zt(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: ji,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Zo,
          icon: l
        };
      const o = Object.keys(n.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), i = o ? l.slice(o.length + 1) : l;
      return {
        component: n.sets[o ?? n.defaultSet].component,
        icon: i
      };
    })
  };
}, Ra = Symbol.for("vuetify:theme"), ye = $({
  theme: String
}, "theme");
function Ms() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#a3a3a3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    }
  };
}
function qy() {
  var a, l;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ms();
  const n = Ms();
  if (!e) return {
    ...n,
    isDisabled: !0
  };
  const t = {};
  for (const [o, i] of Object.entries(e.themes ?? {})) {
    const r = i.dark || o === "dark" ? (a = n.themes) == null ? void 0 : a.dark : (l = n.themes) == null ? void 0 : l.light;
    t[o] = ft(r, i);
  }
  return ft(n, {
    ...e,
    themes: t
  });
}
function Xy(e) {
  const n = qy(e), t = Y(n.defaultTheme), a = Y(n.themes), l = b(() => {
    const u = {};
    for (const [f, m] of Object.entries(a.value)) {
      const v = u[f] = {
        ...m,
        colors: {
          ...m.colors
        }
      };
      if (n.variations)
        for (const g of n.variations.colors) {
          const h = v.colors[g];
          if (h)
            for (const y of ["lighten", "darken"]) {
              const k = y === "lighten" ? Bg : Ag;
              for (const p of Kt(n.variations[y], 1))
                v.colors[`${g}-${y}-${p}`] = ec(k(At(h), p));
            }
        }
      for (const g of Object.keys(v.colors)) {
        if (/^on-[a-z]/.test(g) || v.colors[`on-${g}`]) continue;
        const h = `on-${g}`, y = At(v.colors[g]);
        v.colors[h] = lc(y);
      }
    }
    return u;
  }), o = b(() => l.value[t.value]), i = b(() => {
    var g;
    const u = [];
    (g = o.value) != null && g.dark && Vn(u, ":root", ["color-scheme: dark"]), Vn(u, ":root", Bs(o.value));
    for (const [h, y] of Object.entries(l.value))
      Vn(u, `.v-theme--${h}`, [`color-scheme: ${y.dark ? "dark" : "normal"}`, ...Bs(y)]);
    const f = [], m = [], v = new Set(Object.values(l.value).flatMap((h) => Object.keys(h.colors)));
    for (const h of v)
      /^on-[a-z]/.test(h) ? Vn(m, `.${h}`, [`color: rgb(var(--v-theme-${h})) !important`]) : (Vn(f, `.bg-${h}`, [`--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${h})) !important`, `color: rgb(var(--v-theme-on-${h})) !important`]), Vn(m, `.text-${h}`, [`color: rgb(var(--v-theme-${h})) !important`]), Vn(m, `.border-${h}`, [`--v-border-color: var(--v-theme-${h})`]));
    return u.push(...f, ...m), u.map((h, y) => y === 0 ? h : `    ${h}`).join("");
  });
  function r() {
    return {
      style: [{
        children: i.value,
        id: "vuetify-theme-stylesheet",
        nonce: n.cspNonce || !1
      }]
    };
  }
  function s(u) {
    if (n.isDisabled) return;
    const f = u._context.provides.usehead;
    if (f)
      if (f.push) {
        const m = f.push(r);
        xe && q(i, () => {
          m.patch(r);
        });
      } else
        xe ? (f.addHeadObjs(b(r)), Ye(() => f.updateDOM())) : f.addHeadObjs(r());
    else {
      let v = function() {
        if (typeof document < "u" && !m) {
          const g = document.createElement("style");
          g.type = "text/css", g.id = "vuetify-theme-stylesheet", n.cspNonce && g.setAttribute("nonce", n.cspNonce), m = g, document.head.appendChild(m);
        }
        m && (m.innerHTML = i.value);
      }, m = xe ? document.getElementById("vuetify-theme-stylesheet") : null;
      xe ? q(i, v, {
        immediate: !0
      }) : v();
    }
  }
  const c = b(() => n.isDisabled ? void 0 : `v-theme--${t.value}`);
  return {
    install: s,
    isDisabled: n.isDisabled,
    name: t,
    themes: a,
    current: o,
    computedThemes: l,
    themeClasses: c,
    styles: i,
    global: {
      name: t,
      current: o
    }
  };
}
function Ce(e) {
  Ue("provideTheme");
  const n = pe(Ra, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  const t = b(() => e.theme ?? n.name.value), a = b(() => n.themes.value[t.value]), l = b(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), o = {
    ...n,
    name: t,
    current: a,
    themeClasses: l
  };
  return Le(Ra, o), o;
}
function yc() {
  Ue("useTheme");
  const e = pe(Ra, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Vn(e, n, t) {
  e.push(`${n} {
`, ...t.map((a) => `  ${a};
`), `}
`);
}
function Bs(e) {
  const n = e.dark ? 2 : 1, t = e.dark ? 1 : 2, a = [];
  for (const [l, o] of Object.entries(e.colors)) {
    const i = At(o);
    a.push(`--v-theme-${l}: ${i.r},${i.g},${i.b}`), l.startsWith("on-") || a.push(`--v-theme-${l}-overlay-multiplier: ${Ko(o) > 0.18 ? n : t}`);
  }
  for (const [l, o] of Object.entries(e.variables)) {
    const i = typeof o == "string" && o.startsWith("#") ? At(o) : void 0, r = i ? `${i.r}, ${i.g}, ${i.b}` : void 0;
    a.push(`--v-${l}: ${r ?? o}`);
  }
  return a;
}
function jt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = Bl(), a = Y();
  if (xe) {
    const l = new ResizeObserver((o) => {
      e == null || e(o, l), o.length && (n === "content" ? a.value = o[0].contentRect : a.value = o[0].target.getBoundingClientRect());
    });
    wt(() => {
      l.disconnect();
    }), q(() => t.el, (o, i) => {
      i && (l.unobserve(i), a.value = void 0), o && l.observe(o);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: Xa(a)
  };
}
const Ha = Symbol.for("vuetify:layout"), bc = Symbol.for("vuetify:layout-item"), As = 1e3, pc = $({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), Rn = $({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function kc() {
  const e = pe(Ha);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    layoutIsReady: be(),
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function Hn(e) {
  const n = pe(Ha);
  if (!n) throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${lt()}`, a = Ue("useLayoutItem");
  Le(bc, {
    id: t
  });
  const l = G(!1);
  Qf(() => l.value = !0), ev(() => l.value = !1);
  const o = be(), {
    layoutItemStyles: i,
    layoutItemScrimStyles: r
  } = n.register(a, {
    ...e,
    active: b(() => l.value ? !1 : e.active.value),
    id: t
  });
  return wt(() => n.unregister(t)), {
    layoutItemStyles: i,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: r,
    layoutIsReady: o
  };
}
const Zy = (e, n, t, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const o = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const i of e) {
    const r = n.get(i), s = t.get(i), c = a.get(i);
    if (!r || !s || !c) continue;
    const u = {
      ...l,
      [r.value]: parseInt(l[r.value], 10) + (c.value ? parseInt(s.value, 10) : 0)
    };
    o.push({
      id: i,
      layer: u
    }), l = u;
  }
  return o;
};
function Sc(e) {
  const n = pe(Ha, null), t = b(() => n ? n.rootZIndex.value - 100 : As), a = Y([]), l = Vt(/* @__PURE__ */ new Map()), o = Vt(/* @__PURE__ */ new Map()), i = Vt(/* @__PURE__ */ new Map()), r = Vt(/* @__PURE__ */ new Map()), s = Vt(/* @__PURE__ */ new Map()), {
    resizeRef: c,
    contentRect: u
  } = jt(), f = os(() => {
    const C = [...new Set([...i.values()].map((x) => x.value))].sort((x, P) => x - P), V = [];
    for (const x of C) {
      const P = a.value.filter((S) => {
        var I;
        return ((I = i.get(S)) == null ? void 0 : I.value) === x;
      });
      V.push(...P);
    }
    return Zy(V, l, o, r);
  }), m = b(() => !Array.from(s.values()).some((C) => C.value)), v = b(() => f.value[f.value.length - 1].layer), g = b(() => ({
    "--v-layout-left": J(v.value.left),
    "--v-layout-right": J(v.value.right),
    "--v-layout-top": J(v.value.top),
    "--v-layout-bottom": J(v.value.bottom),
    ...m.value ? void 0 : {
      transition: "none"
    }
  })), h = os(() => f.value.slice(1).map((C, V) => {
    let {
      id: x
    } = C;
    const {
      layer: P
    } = f.value[V], S = o.get(x), I = l.get(x);
    return {
      id: x,
      ...P,
      size: Number(S.value),
      position: I.value
    };
  })), y = (C) => h.value.find((V) => V.id === C), k = Ue("createLayout"), p = be();
  Le(Ha, {
    register: (C, V) => {
      let {
        id: x,
        order: P,
        position: S,
        layoutSize: I,
        elementSize: D,
        active: M,
        disableTransitions: A,
        absolute: E
      } = V;
      i.set(x, P), l.set(x, S), o.set(x, I), r.set(x, M), A && s.set(x, A);
      const j = ta(bc, k == null ? void 0 : k.vnode).indexOf(C);
      j > -1 ? a.value.splice(j, 0, x) : a.value.push(x);
      const X = b(() => h.value.findIndex((R) => R.id === x)), N = b(() => t.value + f.value.length * 2 - X.value * 2), z = b(() => {
        const R = S.value === "left" || S.value === "right", U = S.value === "right", ae = S.value === "bottom", re = D.value ?? I.value, Z = re === 0 ? "%" : "px", W = {
          [S.value]: 0,
          zIndex: N.value,
          transform: `translate${R ? "X" : "Y"}(${(M.value ? 0 : -(re === 0 ? 100 : re)) * (U || ae ? -1 : 1)}${Z})`,
          position: E.value || t.value !== As ? "absolute" : "fixed",
          ...m.value ? void 0 : {
            transition: "none"
          }
        };
        if (X.value < 0) throw new Error(`Layout item "${x}" is missing`);
        const ee = h.value[X.value];
        if (!ee) throw new Error(`[Vuetify] Could not find layout item "${x}"`);
        return {
          ...W,
          height: R ? `calc(100% - ${ee.top}px - ${ee.bottom}px)` : D.value ? `${D.value}px` : void 0,
          left: U ? void 0 : `${ee.left}px`,
          right: U ? `${ee.right}px` : void 0,
          top: S.value !== "bottom" ? `${ee.top}px` : void 0,
          bottom: S.value !== "top" ? `${ee.bottom}px` : void 0,
          width: R ? D.value ? `${D.value}px` : void 0 : `calc(100% - ${ee.left}px - ${ee.right}px)`
        };
      }), _ = b(() => ({
        zIndex: N.value - 1
      }));
      return {
        layoutItemStyles: z,
        layoutItemScrimStyles: _,
        zIndex: N
      };
    },
    unregister: (C) => {
      i.delete(C), l.delete(C), o.delete(C), r.delete(C), s.delete(C), a.value = a.value.filter((V) => V !== C);
    },
    mainRect: v,
    mainStyles: g,
    getLayoutItem: y,
    items: h,
    layoutRect: u,
    rootZIndex: t,
    layoutIsReady: p
  });
  const w = b(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), T = b(() => ({
    zIndex: n ? t.value : void 0,
    position: n ? "relative" : void 0,
    overflow: n ? "hidden" : void 0
  }));
  return {
    layoutClasses: w,
    layoutStyles: T,
    getLayoutItem: y,
    items: h,
    layoutRect: u,
    layoutIsReady: p,
    layoutRef: c
  };
}
function wc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: n,
    ...t
  } = e, a = ft(n, t), {
    aliases: l = {},
    components: o = {},
    directives: i = {}
  } = a, r = Og(a.defaults), s = Fy(a.display, a.ssr), c = Xy(a.theme), u = Ky(a.icons), f = Ug(a.locale), m = Oy(a.date, f), v = Ry(a.goTo, f);
  return {
    install: (h) => {
      for (const y in i)
        h.directive(y, i[y]);
      for (const y in o)
        h.component(y, o[y]);
      for (const y in l)
        h.component(y, Dt({
          ...l[y],
          name: y,
          aliasName: l[y].name
        }));
      if (c.install(h), h.provide(ia, r), h.provide(qo, s), h.provide(Ra, c), h.provide(Xo, u), h.provide(ra, f), h.provide(vc, m.options), h.provide(xs, m.instance), h.provide(hc, v), xe && a.ssr)
        if (h.$nuxt)
          h.$nuxt.hook("app:suspense:resolve", () => {
            s.update();
          });
        else {
          const {
            mount: y
          } = h;
          h.mount = function() {
            const k = y(...arguments);
            return be(() => s.update()), h.mount = y, k;
          };
        }
      lt.reset(), h.mixin({
        computed: {
          $vuetify() {
            return Vt({
              defaults: Zn.call(this, ia),
              display: Zn.call(this, qo),
              theme: Zn.call(this, Ra),
              icons: Zn.call(this, Xo),
              locale: Zn.call(this, ra),
              date: Zn.call(this, xs)
            });
          }
        }
      });
    },
    defaults: r,
    display: s,
    theme: c,
    icons: u,
    locale: f,
    date: m,
    goTo: v
  };
}
const Jy = "3.6.12";
wc.version = Jy;
function Zn(e) {
  var a, l;
  const n = this.$, t = ((a = n.parent) == null ? void 0 : a.provides) ?? ((l = n.vnode.appContext) == null ? void 0 : l.provides);
  if (t && e in t)
    return t[e];
}
const Qy = $({
  ...Q(),
  ...pc({
    fullHeight: !0
  }),
  ...ye()
}, "VApp"), eb = L()({
  name: "VApp",
  props: Qy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ce(e), {
      layoutClasses: l,
      getLayoutItem: o,
      items: i,
      layoutRef: r
    } = Sc(e), {
      rtlClasses: s
    } = Qe();
    return H(() => d("div", {
      ref: r,
      class: ["v-application", a.themeClasses.value, l.value, s.value, e.class],
      style: [e.style]
    }, [d("div", {
      class: "v-application__wrap"
    }, [d(iu, null, {
      default: () => {
        var c;
        return [d(oe, null, [(c = t.default) == null ? void 0 : c.call(t)])];
      }
    })])])), {
      getLayoutItem: o,
      items: i,
      theme: a
    };
  }
}), ve = $({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), Cc = $({
  text: String,
  ...Q(),
  ...ve()
}, "VToolbarTitle"), Wi = L()({
  name: "VToolbarTitle",
  props: Cc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => {
      const a = !!(t.default || t.text || e.text);
      return d(e.tag, {
        class: ["v-toolbar-title", e.class],
        style: e.style
      }, {
        default: () => {
          var l;
          return [a && d("div", {
            class: "v-toolbar-title__placeholder"
          }, [t.text ? t.text() : e.text, (l = t.default) == null ? void 0 : l.call(t)])];
        }
      });
    }), {};
  }
}), tb = $({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Mt(e, n, t) {
  return L()({
    name: e,
    props: tb({
      mode: t,
      origin: n
    }),
    setup(a, l) {
      let {
        slots: o
      } = l;
      const i = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin);
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: c,
              offsetWidth: u,
              offsetHeight: f
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${c}px`, r.style.width = `${u}px`, r.style.height = `${f}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: s,
              top: c,
              left: u,
              width: f,
              height: m
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = c || "", r.style.left = u || "", r.style.width = f || "", r.style.height = m || "";
          }
        }
      };
      return () => {
        const r = a.group ? Pi : tn;
        return bn(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : i
        }, o.default);
      };
    }
  });
}
function xc(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return L()({
    name: e,
    props: {
      mode: {
        type: String,
        default: t
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: o
      } = l;
      const i = a.group ? Pi : tn;
      return () => bn(i, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : n
      }, o.default);
    }
  });
}
function Vc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = ou(`offset-${t}`);
  return {
    onBeforeEnter(i) {
      i._parent = i.parentNode, i._initialStyle = {
        transition: i.style.transition,
        overflow: i.style.overflow,
        [t]: i.style[t]
      };
    },
    onEnter(i) {
      const r = i._initialStyle;
      i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
      const s = `${i[a]}px`;
      i.style[t] = "0", i.offsetHeight, i.style.transition = r.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
        i.style[t] = s;
      });
    },
    onAfterEnter: o,
    onEnterCancelled: o,
    onLeave(i) {
      i._initialStyle = {
        transition: "",
        overflow: i.style.overflow,
        [t]: i.style[t]
      }, i.style.overflow = "hidden", i.style[t] = `${i[a]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[t] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(i) {
    e && i._parent && i._parent.classList.remove(e), o(i);
  }
  function o(i) {
    const r = i._initialStyle[t];
    i.style.overflow = i._initialStyle.overflow, r != null && (i.style[t] = r), delete i._initialStyle;
  }
}
const nb = $({
  target: [Object, Array]
}, "v-dialog-transition"), Gl = L()({
  name: "VDialogTransition",
  props: nb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, o) {
        var m;
        await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => requestAnimationFrame(v)), l.style.visibility = "";
        const {
          x: i,
          y: r,
          sx: s,
          sy: c,
          speed: u
        } = _s(e.target, l), f = In(l, [{
          transform: `translate(${i}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * u,
          easing: Ng
        });
        (m = $s(l)) == null || m.forEach((v) => {
          In(v, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * u,
            easing: Na
          });
        }), f.finished.then(() => o());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, o) {
        var m;
        await new Promise((v) => requestAnimationFrame(v));
        const {
          x: i,
          y: r,
          sx: s,
          sy: c,
          speed: u
        } = _s(e.target, l);
        In(l, [{}, {
          transform: `translate(${i}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * u,
          easing: Rg
        }).finished.then(() => o()), (m = $s(l)) == null || m.forEach((v) => {
          In(v, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * u,
            easing: Na
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? d(tn, B({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), t) : d(tn, {
      name: "dialog-transition"
    }, t);
  }
});
function $s(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function _s(e, n) {
  const t = Ku(e), a = Ei(n), [l, o] = getComputedStyle(n).transformOrigin.split(" ").map((k) => parseFloat(k)), [i, r] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = t.left + t.width / 2;
  i === "left" || r === "left" ? s -= t.width / 2 : (i === "right" || r === "right") && (s += t.width / 2);
  let c = t.top + t.height / 2;
  i === "top" || r === "top" ? c -= t.height / 2 : (i === "bottom" || r === "bottom") && (c += t.height / 2);
  const u = t.width / a.width, f = t.height / a.height, m = Math.max(1, u, f), v = u / m || 0, g = f / m || 0, h = a.width * a.height / (window.innerWidth * window.innerHeight), y = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: c - (o + a.top),
    sx: v,
    sy: g,
    speed: y
  };
}
const ab = Mt("fab-transition", "center center", "out-in"), lb = Mt("dialog-bottom-transition"), ob = Mt("dialog-top-transition"), za = Mt("fade-transition"), Ui = Mt("scale-transition"), ib = Mt("scroll-x-transition"), rb = Mt("scroll-x-reverse-transition"), sb = Mt("scroll-y-transition"), ub = Mt("scroll-y-reverse-transition"), cb = Mt("slide-x-transition"), db = Mt("slide-x-reverse-transition"), Ki = Mt("slide-y-transition"), fb = Mt("slide-y-reverse-transition"), ql = xc("expand-transition", Vc()), Gi = xc("expand-x-transition", Vc("", !0)), vb = $({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), he = L(!1)({
  name: "VDefaultsProvider",
  props: vb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: a,
      disabled: l,
      reset: o,
      root: i,
      scoped: r
    } = Nl(e);
    return He(a, {
      reset: o,
      root: i,
      scoped: r,
      disabled: l
    }), () => {
      var s;
      return (s = t.default) == null ? void 0 : s.call(t);
    };
  }
}), et = $({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function tt(e) {
  return {
    dimensionStyles: b(() => {
      const t = {}, a = J(e.height), l = J(e.maxHeight), o = J(e.maxWidth), i = J(e.minHeight), r = J(e.minWidth), s = J(e.width);
      return a != null && (t.height = a), l != null && (t.maxHeight = l), o != null && (t.maxWidth = o), i != null && (t.minHeight = i), r != null && (t.minWidth = r), s != null && (t.width = s), t;
    })
  };
}
function mb(e) {
  return {
    aspectStyles: b(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const Pc = $({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...Q(),
  ...et()
}, "VResponsive"), Jo = L()({
  name: "VResponsive",
  props: Pc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: a
    } = mb(e), {
      dimensionStyles: l
    } = tt(e);
    return H(() => {
      var o;
      return d("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [d("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (o = t.additional) == null ? void 0 : o.call(t), t.default && d("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [t.default()])]);
    }), {};
  }
});
function qi(e) {
  return _i(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Uo(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Ig(e.value.background)) {
          const a = At(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = lc(a);
            t.color = l, t.caretColor = l;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (Uo(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function it(e, n) {
  const t = b(() => ({
    text: aa(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = qi(t);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function De(e, n) {
  const t = b(() => ({
    background: aa(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = qi(t);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const Fe = $({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function ze(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zt();
  return {
    roundedClasses: b(() => {
      const a = aa(e) ? e.value : e.rounded, l = aa(e) ? e.value : e.tile, o = [];
      if (a === !0 || a === "")
        o.push(`${n}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          o.push(`rounded-${i}`);
      else (l || a === !1) && o.push("rounded-0");
      return o;
    })
  };
}
const Yt = $({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), vt = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: a,
    disabled: l,
    group: o,
    ...i
  } = e, {
    component: r = o ? Pi : tn,
    ...s
  } = typeof a == "object" ? a : {};
  return bn(r, B(typeof a == "string" ? {
    name: l ? "" : a
  } : s, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: l,
    group: o
  }).filter((c) => {
    let [u, f] = c;
    return f !== void 0;
  })), i), t);
};
function hb(e, n) {
  if (!Bi) return;
  const t = n.modifiers || {}, a = n.value, {
    handler: l,
    options: o
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, i = new IntersectionObserver(function() {
    var f;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (f = e._observe) == null ? void 0 : f[n.instance.$.uid];
    if (!c) return;
    const u = r.some((m) => m.isIntersecting);
    l && (!t.quiet || c.init) && (!t.once || u || c.init) && l(u, r, s), u && t.once ? Tc(e, n) : c.init = !0;
  }, o);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: i
  }, i.observe(e);
}
function Tc(e, n) {
  var a;
  const t = (a = e._observe) == null ? void 0 : a[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const tl = {
  mounted: hb,
  unmounted: Tc
}, Ic = $({
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Pc(),
  ...Q(),
  ...Fe(),
  ...Yt()
}, "VImg"), an = L()({
  name: "VImg",
  directives: {
    intersect: tl
  },
  props: Ic(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = De(O(e, "color")), {
      roundedClasses: i
    } = ze(e), r = Ue("VImg"), s = G(""), c = Y(), u = G(e.eager ? "loading" : "idle"), f = G(), m = G(), v = b(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), g = b(() => v.value.aspect || f.value / m.value || 0);
    q(() => e.src, () => {
      h(u.value !== "idle");
    }), q(g, (M, A) => {
      !M && A && c.value && T(c.value);
    }), ru(() => h());
    function h(M) {
      if (!(e.eager && M) && !(Bi && !M && !e.eager)) {
        if (u.value = "loading", v.value.lazySrc) {
          const A = new Image();
          A.src = v.value.lazySrc, T(A, null);
        }
        v.value.src && be(() => {
          var A;
          t("loadstart", ((A = c.value) == null ? void 0 : A.currentSrc) || v.value.src), setTimeout(() => {
            var E;
            if (!r.isUnmounted)
              if ((E = c.value) != null && E.complete) {
                if (c.value.naturalWidth || k(), u.value === "error") return;
                g.value || T(c.value, null), u.value === "loading" && y();
              } else
                g.value || T(c.value), p();
          });
        });
      }
    }
    function y() {
      var M;
      r.isUnmounted || (p(), T(c.value), u.value = "loaded", t("load", ((M = c.value) == null ? void 0 : M.currentSrc) || v.value.src));
    }
    function k() {
      var M;
      r.isUnmounted || (u.value = "error", t("error", ((M = c.value) == null ? void 0 : M.currentSrc) || v.value.src));
    }
    function p() {
      const M = c.value;
      M && (s.value = M.currentSrc || M.src);
    }
    let w = -1;
    wt(() => {
      clearTimeout(w);
    });
    function T(M) {
      let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const E = () => {
        if (clearTimeout(w), r.isUnmounted) return;
        const {
          naturalHeight: F,
          naturalWidth: j
        } = M;
        F || j ? (f.value = j, m.value = F) : !M.complete && u.value === "loading" && A != null ? w = window.setTimeout(E, A) : (M.currentSrc.endsWith(".svg") || M.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, m.value = 1);
      };
      E();
    }
    const C = b(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), V = () => {
      var E;
      if (!v.value.src || u.value === "idle") return null;
      const M = d("img", {
        class: ["v-img__img", C.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.src,
        srcset: v.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: y,
        onError: k
      }, null), A = (E = a.sources) == null ? void 0 : E.call(a);
      return d(vt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Ie(A ? d("picture", {
          class: "v-img__picture"
        }, [A, M]) : M, [[It, u.value === "loaded"]])]
      });
    }, x = () => d(vt, {
      transition: e.transition
    }, {
      default: () => [v.value.lazySrc && u.value !== "loaded" && d("img", {
        class: ["v-img__img", "v-img__img--preload", C.value],
        style: {
          objectPosition: e.position
        },
        src: v.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), P = () => a.placeholder ? d(vt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(u.value === "loading" || u.value === "error" && !a.error) && d("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, S = () => a.error ? d(vt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [u.value === "error" && d("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, I = () => e.gradient ? d("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, D = G(!1);
    {
      const M = q(g, (A) => {
        A && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            D.value = !0;
          });
        }), M());
      });
    }
    return H(() => {
      const M = Jo.filterProps(e);
      return Ie(d(Jo, B({
        class: ["v-img", {
          "v-img--booting": !D.value
        }, l.value, i.value, e.class],
        style: [{
          width: J(e.width === "auto" ? f.value : e.width)
        }, o.value, e.style]
      }, M, {
        aspectRatio: g.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => d(oe, null, [d(V, null, null), d(x, null, null), d(I, null, null), d(P, null, null), d(S, null, null)]),
        default: a.default
      }), [[St("intersect"), {
        handler: h,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: c,
      state: u,
      naturalWidth: f,
      naturalHeight: m
    };
  }
}), Bt = $({
  border: [Boolean, Number, String]
}, "border");
function Ot(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zt();
  return {
    borderClasses: b(() => {
      const a = aa(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${n}--border`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          l.push(`border-${o}`);
      return l;
    })
  };
}
const Je = $({
  elevation: {
    type: [Number, String],
    validator(e) {
      const n = parseInt(e);
      return !isNaN(n) && n >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      n <= 24;
    }
  }
}, "elevation");
function ot(e) {
  return {
    elevationClasses: b(() => {
      const t = aa(e) ? e.value : e.elevation, a = [];
      return t == null || a.push(`elevation-${t}`), a;
    })
  };
}
const gb = [null, "prominent", "default", "comfortable", "compact"], Dc = $({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => gb.includes(e)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...Bt(),
  ...Q(),
  ...Je(),
  ...Fe(),
  ...ve({
    tag: "header"
  }),
  ...ye()
}, "VToolbar"), Qo = L()({
  name: "VToolbar",
  props: Dc(),
  setup(e, n) {
    var v;
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = De(O(e, "color")), {
      borderClasses: o
    } = Ot(e), {
      elevationClasses: i
    } = ot(e), {
      roundedClasses: r
    } = ze(e), {
      themeClasses: s
    } = Ce(e), {
      rtlClasses: c
    } = Qe(), u = G(!!(e.extended || (v = t.extension) != null && v.call(t))), f = b(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), m = b(() => u.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return He({
      VBtn: {
        variant: "text"
      }
    }), H(() => {
      var k;
      const g = !!(e.title || t.title), h = !!(t.image || e.image), y = (k = t.extension) == null ? void 0 : k.call(t);
      return u.value = !!(e.extended || y), d(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, o.value, i.value, r.value, s.value, c.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => [h && d("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [t.image ? d(he, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, t.image) : d(an, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), d(he, {
          defaults: {
            VTabs: {
              height: J(f.value)
            }
          }
        }, {
          default: () => {
            var p, w, T;
            return [d("div", {
              class: "v-toolbar__content",
              style: {
                height: J(f.value)
              }
            }, [t.prepend && d("div", {
              class: "v-toolbar__prepend"
            }, [(p = t.prepend) == null ? void 0 : p.call(t)]), g && d(Wi, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (w = t.default) == null ? void 0 : w.call(t), t.append && d("div", {
              class: "v-toolbar__append"
            }, [(T = t.append) == null ? void 0 : T.call(t)])])];
          }
        }), d(he, {
          defaults: {
            VTabs: {
              height: J(m.value)
            }
          }
        }, {
          default: () => [d(ql, null, {
            default: () => [u.value && d("div", {
              class: "v-toolbar__extension",
              style: {
                height: J(m.value)
              }
            }, [y])]
          })]
        })]
      });
    }), {
      contentHeight: f,
      extensionHeight: m
    };
  }
}), yb = $({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function bb(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let a = 0, l = 0;
  const o = Y(null), i = G(0), r = G(0), s = G(0), c = G(!1), u = G(!1), f = b(() => Number(e.scrollThreshold)), m = b(() => qe((f.value - i.value) / f.value || 0)), v = () => {
    const g = o.value;
    if (!g || t && !t.value) return;
    a = i.value, i.value = "window" in g ? g.pageYOffset : g.scrollTop;
    const h = g instanceof Window ? document.documentElement.scrollHeight : g.scrollHeight;
    if (l !== h) {
      l = h;
      return;
    }
    u.value = i.value < a, s.value = Math.abs(i.value - f.value);
  };
  return q(u, () => {
    r.value = r.value || i.value;
  }), q(c, () => {
    r.value = 0;
  }), mt(() => {
    q(() => e.scrollTarget, (g) => {
      var y;
      const h = g ? document.querySelector(g) : window;
      if (!h) {
        zt(`Unable to locate element with identifier ${g}`);
        return;
      }
      h !== o.value && ((y = o.value) == null || y.removeEventListener("scroll", v), o.value = h, o.value.addEventListener("scroll", v, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), wt(() => {
    var g;
    (g = o.value) == null || g.removeEventListener("scroll", v);
  }), t && q(t, v, {
    immediate: !0
  }), {
    scrollThreshold: f,
    currentScroll: i,
    currentThreshold: s,
    isScrollActive: c,
    scrollRatio: m,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: u,
    savedScroll: r
  };
}
function zn() {
  const e = G(!1);
  return mt(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: b(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Xa(e)
  };
}
const pb = $({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ...Dc(),
  ...Rn(),
  ...yb(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), kb = L()({
  name: "VAppBar",
  props: pb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Y(), l = ie(e, "modelValue"), o = b(() => {
      var T;
      const w = new Set(((T = e.scrollBehavior) == null ? void 0 : T.split(" ")) ?? []);
      return {
        hide: w.has("hide"),
        fullyHide: w.has("fully-hide"),
        inverted: w.has("inverted"),
        collapse: w.has("collapse"),
        elevate: w.has("elevate"),
        fadeImage: w.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), i = b(() => {
      const w = o.value;
      return w.hide || w.fullyHide || w.inverted || w.collapse || w.elevate || w.fadeImage || // behavior.shrink ||
      !l.value;
    }), {
      currentScroll: r,
      scrollThreshold: s,
      isScrollingUp: c,
      scrollRatio: u
    } = bb(e, {
      canScroll: i
    }), f = b(() => o.value.hide || o.value.fullyHide), m = b(() => e.collapse || o.value.collapse && (o.value.inverted ? u.value > 0 : u.value === 0)), v = b(() => e.flat || o.value.fullyHide && !l.value || o.value.elevate && (o.value.inverted ? r.value > 0 : r.value === 0)), g = b(() => o.value.fadeImage ? o.value.inverted ? 1 - u.value : u.value : void 0), h = b(() => {
      var C, V;
      const w = Number(((C = a.value) == null ? void 0 : C.contentHeight) ?? e.height), T = Number(((V = a.value) == null ? void 0 : V.extensionHeight) ?? 0);
      return f.value ? r.value < s.value || o.value.fullyHide ? w + T : w : w + T;
    });
    xt(b(() => !!e.scrollBehavior), () => {
      Ye(() => {
        f.value ? o.value.inverted ? l.value = r.value > s.value : l.value = c.value || r.value < s.value : l.value = !0;
      });
    });
    const {
      ssrBootStyles: y
    } = zn(), {
      layoutItemStyles: k,
      layoutIsReady: p
    } = Hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: O(e, "location"),
      layoutSize: h,
      elementSize: G(void 0),
      active: l,
      absolute: O(e, "absolute")
    });
    return H(() => {
      const w = Qo.filterProps(e);
      return d(Qo, B({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...k.value,
          "--v-toolbar-image-opacity": g.value,
          height: void 0,
          ...y.value
        }, e.style]
      }, w, {
        collapse: m.value,
        flat: v.value
      }), t);
    }), p;
  }
}), Sb = [null, "default", "comfortable", "compact"], nt = $({
  density: {
    type: String,
    default: "default",
    validator: (e) => Sb.includes(e)
  }
}, "density");
function gt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zt();
  return {
    densityClasses: b(() => `${n}--density-${e.density}`)
  };
}
const wb = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function kn(e, n) {
  return d(oe, null, [e && d("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), d("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const Et = $({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => wb.includes(e)
  }
}, "variant");
function jn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zt();
  const t = b(() => {
    const {
      variant: o
    } = pt(e);
    return `${n}--variant-${o}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = qi(b(() => {
    const {
      variant: o,
      color: i
    } = pt(e);
    return {
      [["elevated", "flat"].includes(o) ? "background" : "text"]: i
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: t
  };
}
const Mc = $({
  baseColor: String,
  divided: Boolean,
  ...Bt(),
  ...Q(),
  ...nt(),
  ...Je(),
  ...Fe(),
  ...ve(),
  ...ye(),
  ...Et()
}, "VBtnGroup"), ei = L()({
  name: "VBtnGroup",
  props: Mc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ce(e), {
      densityClasses: l
    } = gt(e), {
      borderClasses: o
    } = Ot(e), {
      elevationClasses: i
    } = ot(e), {
      roundedClasses: r
    } = ze(e);
    He({
      VBtn: {
        height: "auto",
        baseColor: O(e, "baseColor"),
        color: O(e, "color"),
        density: O(e, "density"),
        flat: !0,
        variant: O(e, "variant")
      }
    }), H(() => d(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, o.value, l.value, i.value, r.value, e.class],
      style: e.style
    }, t));
  }
}), Yn = $({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Wn = $({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Un(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Ue("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = lt();
  Le(Symbol.for(`${n.description}:id`), l);
  const o = pe(n, null);
  if (!o) {
    if (!t) return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const i = O(e, "value"), r = b(() => !!(o.disabled.value || e.disabled));
  o.register({
    id: l,
    value: i,
    disabled: r
  }, a), wt(() => {
    o.unregister(l);
  });
  const s = b(() => o.isSelected(l)), c = b(() => o.items.value[0].id === l), u = b(() => o.items.value[o.items.value.length - 1].id === l), f = b(() => s.value && [o.selectedClass.value, e.selectedClass]);
  return q(s, (m) => {
    a.emit("group:selected", {
      value: m
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: s,
    isFirst: c,
    isLast: u,
    toggle: () => o.select(l, !s.value),
    select: (m) => o.select(l, m),
    selectedClass: f,
    value: i,
    disabled: r,
    group: o
  };
}
function Sn(e, n) {
  let t = !1;
  const a = Vt([]), l = ie(e, "modelValue", [], (m) => m == null ? [] : Bc(a, Ne(m)), (m) => {
    const v = xb(a, m);
    return e.multiple ? v : v[0];
  }), o = Ue("useGroup");
  function i(m, v) {
    const g = m, h = Symbol.for(`${n.description}:id`), k = ta(h, o == null ? void 0 : o.vnode).indexOf(v);
    pt(g.value) == null && (g.value = k, g.useIndexAsValue = !0), k > -1 ? a.splice(k, 0, g) : a.push(g);
  }
  function r(m) {
    if (t) return;
    s();
    const v = a.findIndex((g) => g.id === m);
    a.splice(v, 1);
  }
  function s() {
    const m = a.find((v) => !v.disabled);
    m && e.mandatory === "force" && !l.value.length && (l.value = [m.id]);
  }
  mt(() => {
    s();
  }), wt(() => {
    t = !0;
  }), tv(() => {
    for (let m = 0; m < a.length; m++)
      a[m].useIndexAsValue && (a[m].value = m);
  });
  function c(m, v) {
    const g = a.find((h) => h.id === m);
    if (!(v && (g != null && g.disabled)))
      if (e.multiple) {
        const h = l.value.slice(), y = h.findIndex((p) => p === m), k = ~y;
        if (v = v ?? !k, k && e.mandatory && h.length <= 1 || !k && e.max != null && h.length + 1 > e.max) return;
        y < 0 && v ? h.push(m) : y >= 0 && !v && h.splice(y, 1), l.value = h;
      } else {
        const h = l.value.includes(m);
        if (e.mandatory && h) return;
        l.value = v ?? !h ? [m] : [];
      }
  }
  function u(m) {
    if (e.multiple && zt('This method is not supported when using "multiple" prop'), l.value.length) {
      const v = l.value[0], g = a.findIndex((k) => k.id === v);
      let h = (g + m) % a.length, y = a[h];
      for (; y.disabled && h !== g; )
        h = (h + m) % a.length, y = a[h];
      if (y.disabled) return;
      l.value = [a[h].id];
    } else {
      const v = a.find((g) => !g.disabled);
      v && (l.value = [v.id]);
    }
  }
  const f = {
    register: i,
    unregister: r,
    selected: l,
    select: c,
    disabled: O(e, "disabled"),
    prev: () => u(a.length - 1),
    next: () => u(1),
    isSelected: (m) => l.value.includes(m),
    selectedClass: b(() => e.selectedClass),
    items: b(() => a),
    getItemIndex: (m) => Cb(a, m)
  };
  return Le(n, f), f;
}
function Cb(e, n) {
  const t = Bc(e, [n]);
  return t.length ? e.findIndex((a) => a.id === t[0]) : -1;
}
function Bc(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.find((i) => Xt(a, i.value)), o = e[a];
    (l == null ? void 0 : l.value) != null ? t.push(l.id) : o != null && t.push(o.id);
  }), t;
}
function xb(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.findIndex((o) => o.id === a);
    if (~l) {
      const o = e[l];
      t.push(o.value != null ? o.value : l);
    }
  }), t;
}
const Xi = Symbol.for("vuetify:v-btn-toggle"), Vb = $({
  ...Mc(),
  ...Yn()
}, "VBtnToggle"), Pb = L()({
  name: "VBtnToggle",
  props: Vb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      next: l,
      prev: o,
      select: i,
      selected: r
    } = Sn(e, Xi);
    return H(() => {
      const s = ei.filterProps(e);
      return d(ei, B({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t, {
            isSelected: a,
            next: l,
            prev: o,
            select: i,
            selected: r
          })];
        }
      });
    }), {
      next: l,
      prev: o,
      select: i
    };
  }
}), Tb = ["x-small", "small", "default", "large", "x-large"], Qt = $({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function fa(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zt();
  return _i(() => {
    let t, a;
    return Ml(Tb, e.size) ? t = `${n}--size-${e.size}` : e.size && (a = {
      width: J(e.size),
      height: J(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: a
    };
  });
}
const Ib = $({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ue,
  ...Q(),
  ...Qt(),
  ...ve({
    tag: "i"
  }),
  ...ye()
}, "VIcon"), we = L()({
  name: "VIcon",
  props: Ib(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = Y(), {
      themeClasses: o
    } = Ce(e), {
      iconData: i
    } = Gy(b(() => l.value || e.icon)), {
      sizeClasses: r
    } = fa(e), {
      textColorClasses: s,
      textColorStyles: c
    } = it(O(e, "color"));
    return H(() => {
      var m, v;
      const u = (m = a.default) == null ? void 0 : m.call(a);
      u && (l.value = (v = zu(u).filter((g) => g.type === nv && g.children && typeof g.children == "string")[0]) == null ? void 0 : v.children);
      const f = !!(t.onClick || t.onClickOnce);
      return d(i.value.component, {
        tag: e.tag,
        icon: i.value.icon,
        class: ["v-icon", "notranslate", o.value, r.value, s.value, {
          "v-icon--clickable": f,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: J(e.size),
          height: J(e.size),
          width: J(e.size)
        }, c.value, e.style],
        role: f ? "button" : void 0,
        "aria-hidden": !f,
        tabindex: f ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [u]
      });
    }), {};
  }
});
function Xl(e, n) {
  const t = Y(), a = G(!1);
  if (Bi) {
    const l = new IntersectionObserver((o) => {
      e == null || e(o, l), a.value = !!o.find((i) => i.isIntersecting);
    }, n);
    wt(() => {
      l.disconnect();
    }), q(t, (o, i) => {
      i && (l.unobserve(i), a.value = !1), o && l.observe(o);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: a
  };
}
const Db = $({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...Q(),
  ...Qt(),
  ...ve({
    tag: "div"
  }),
  ...ye()
}, "VProgressCircular"), sa = L()({
  name: "VProgressCircular",
  props: Db(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = 20, l = 2 * Math.PI * a, o = Y(), {
      themeClasses: i
    } = Ce(e), {
      sizeClasses: r,
      sizeStyles: s
    } = fa(e), {
      textColorClasses: c,
      textColorStyles: u
    } = it(O(e, "color")), {
      textColorClasses: f,
      textColorStyles: m
    } = it(O(e, "bgColor")), {
      intersectionRef: v,
      isIntersecting: g
    } = Xl(), {
      resizeRef: h,
      contentRect: y
    } = jt(), k = b(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), p = b(() => Number(e.width)), w = b(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(p.value, 32)), T = b(() => a / (1 - p.value / w.value) * 2), C = b(() => p.value / w.value * T.value), V = b(() => J((100 - k.value) / 100 * l));
    return Ye(() => {
      v.value = o.value, h.value = o.value;
    }), H(() => d(e.tag, {
      ref: o,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": g.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, i.value, r.value, c.value, e.class],
      style: [s.value, u.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : k.value
    }, {
      default: () => [d("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${T.value} ${T.value}`
      }, [d("circle", {
        class: ["v-progress-circular__underlay", f.value],
        style: m.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": C.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), d("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": C.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": V.value
      }, null)]), t.default && d("div", {
        class: "v-progress-circular__content"
      }, [t.default({
        value: k.value
      })])]
    })), {};
  }
}), Os = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, rn = $({
  location: String
}, "location");
function Kn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = Qe();
  return {
    locationStyles: b(() => {
      if (!e.location) return {};
      const {
        side: o,
        align: i
      } = Yo(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return t ? t(c) : 0;
      }
      const s = {};
      return o !== "center" && (n ? s[Os[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0), i !== "center" ? n ? s[Os[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[o]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[o]), s;
    })
  };
}
const Mb = $({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...Q(),
  ...rn({
    location: "top"
  }),
  ...Fe(),
  ...ve(),
  ...ye()
}, "VProgressLinear"), Zl = L()({
  name: "VProgressLinear",
  props: Mb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    var D;
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      isRtl: l,
      rtlClasses: o
    } = Qe(), {
      themeClasses: i
    } = Ce(e), {
      locationStyles: r
    } = Kn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = it(e, "color"), {
      backgroundColorClasses: u,
      backgroundColorStyles: f
    } = De(b(() => e.bgColor || e.color)), {
      backgroundColorClasses: m,
      backgroundColorStyles: v
    } = De(b(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: g,
      backgroundColorStyles: h
    } = De(e, "color"), {
      roundedClasses: y
    } = ze(e), {
      intersectionRef: k,
      isIntersecting: p
    } = Xl(), w = b(() => parseFloat(e.max)), T = b(() => parseFloat(e.height)), C = b(() => qe(parseFloat(e.bufferValue) / w.value * 100, 0, 100)), V = b(() => qe(parseFloat(a.value) / w.value * 100, 0, 100)), x = b(() => l.value !== e.reverse), P = b(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), S = xe && ((D = window.matchMedia) == null ? void 0 : D.call(window, "(forced-colors: active)").matches);
    function I(M) {
      if (!k.value) return;
      const {
        left: A,
        right: E,
        width: F
      } = k.value.getBoundingClientRect(), j = x.value ? F - M.clientX + (E - F) : M.clientX - A;
      a.value = Math.round(j / F * w.value);
    }
    return H(() => d(e.tag, {
      ref: k,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && p.value,
        "v-progress-linear--reverse": x.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, y.value, i.value, o.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? J(T.value) : 0,
        "--v-progress-linear-height": J(T.value),
        ...e.absolute ? r.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : V.value,
      onClick: e.clickable && I
    }, {
      default: () => [e.stream && d("div", {
        key: "stream",
        class: ["v-progress-linear__stream", s.value],
        style: {
          ...c.value,
          [x.value ? "left" : "right"]: J(-T.value),
          borderTop: `${J(T.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${J(T.value / 4)})`,
          width: J(100 - C.value, "%"),
          "--v-progress-linear-stream-to": J(T.value * (x.value ? 1 : -1))
        }
      }, null), d("div", {
        class: ["v-progress-linear__background", S ? void 0 : u.value],
        style: [f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), d("div", {
        class: ["v-progress-linear__buffer", S ? void 0 : m.value],
        style: [v.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: J(C.value, "%")
        }]
      }, null), d(tn, {
        name: P.value
      }, {
        default: () => [e.indeterminate ? d("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((M) => d("div", {
          key: M,
          class: ["v-progress-linear__indeterminate", M, S ? void 0 : g.value],
          style: h.value
        }, null))]) : d("div", {
          class: ["v-progress-linear__determinate", S ? void 0 : g.value],
          style: [h.value, {
            width: J(V.value, "%")
          }]
        }, null)]
      }), t.default && d("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: V.value,
        buffer: C.value
      })])]
    })), {};
  }
}), Jl = $({
  loading: [Boolean, String]
}, "loader");
function nl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zt();
  return {
    loaderClasses: b(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function al(e, n) {
  var a;
  let {
    slots: t
  } = n;
  return d("div", {
    class: `${e.name}__loader`
  }, [((a = t.default) == null ? void 0 : a.call(t, {
    color: e.color,
    isActive: e.active
  })) || d(Zl, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Bb = ["static", "relative", "fixed", "absolute", "sticky"], va = $({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Bb.includes(e)
    )
  }
}, "position");
function ma(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zt();
  return {
    positionClasses: b(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function Ab() {
  const e = Ue("useRoute");
  return b(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function Ac() {
  var e, n;
  return (n = (e = Ue("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function ll(e, n) {
  var c, u;
  const t = bt("RouterLink"), a = b(() => !!(e.href || e.to)), l = b(() => (a == null ? void 0 : a.value) || ls(n, "click") || ls(e, "click"));
  if (typeof t == "string" || !("useLink" in t))
    return {
      isLink: a,
      isClickable: l,
      href: O(e, "href")
    };
  const o = b(() => ({
    ...e,
    to: O(() => e.to || "")
  })), i = t.useLink(o.value), r = b(() => e.to ? i : void 0), s = Ab();
  return {
    isLink: a,
    isClickable: l,
    route: (c = r.value) == null ? void 0 : c.route,
    navigate: (u = r.value) == null ? void 0 : u.navigate,
    isActive: b(() => {
      var f, m, v;
      return r.value ? e.exact ? s.value ? ((v = r.value.isExactActive) == null ? void 0 : v.value) && Xt(r.value.route.value.query, s.value.query) : ((m = r.value.isExactActive) == null ? void 0 : m.value) ?? !1 : ((f = r.value.isActive) == null ? void 0 : f.value) ?? !1 : !1;
    }),
    href: b(() => {
      var f;
      return e.to ? (f = r.value) == null ? void 0 : f.route.value.href : e.href;
    })
  };
}
const ol = $({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Bo = !1;
function $b(e, n) {
  let t = !1, a, l;
  xe && (be(() => {
    window.addEventListener("popstate", o), a = e == null ? void 0 : e.beforeEach((i, r, s) => {
      Bo ? t ? n(s) : s() : setTimeout(() => t ? n(s) : s()), Bo = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Bo = !1;
    });
  }), ht(() => {
    window.removeEventListener("popstate", o), a == null || a(), l == null || l();
  }));
  function o(i) {
    var r;
    (r = i.state) != null && r.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function _b(e, n) {
  q(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t && n && be(() => {
      n(!0);
    });
  }, {
    immediate: !0
  });
}
const ti = Symbol("rippleStop"), Ob = 80;
function Es(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function ni(e) {
  return e.constructor.name === "TouchEvent";
}
function $c(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Eb = function(e, n) {
  var f;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!$c(e)) {
    const m = n.getBoundingClientRect(), v = ni(e) ? e.touches[e.touches.length - 1] : e;
    a = v.clientX - m.left, l = v.clientY - m.top;
  }
  let o = 0, i = 0.3;
  (f = n._ripple) != null && f.circle ? (i = 0.15, o = n.clientWidth / 2, o = t.center ? o : o + Math.sqrt((a - o) ** 2 + (l - o) ** 2) / 4) : o = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const r = `${(n.clientWidth - o * 2) / 2}px`, s = `${(n.clientHeight - o * 2) / 2}px`, c = t.center ? r : `${a - o}px`, u = t.center ? s : `${l - o}px`;
  return {
    radius: o,
    scale: i,
    x: c,
    y: u,
    centerX: r,
    centerY: s
  };
}, El = {
  /* eslint-disable max-statements */
  show(e, n) {
    var v;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((v = n == null ? void 0 : n._ripple) != null && v.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", t.class && (a.className += ` ${t.class}`);
    const {
      radius: o,
      scale: i,
      x: r,
      y: s,
      centerX: c,
      centerY: u
    } = Eb(e, n, t), f = `${o * 2}px`;
    l.className = "v-ripple__animation", l.style.width = f, l.style.height = f, n.appendChild(a);
    const m = window.getComputedStyle(n);
    m && m.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Es(l, `translate(${r}, ${s}) scale3d(${i},${i},${i})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Es(l, `translate(${c}, ${u}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var o;
    if (!((o = e == null ? void 0 : e._ripple) != null && o.enabled)) return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0) return;
    const t = n[n.length - 1];
    if (t.dataset.isHiding) return;
    t.dataset.isHiding = "true";
    const a = performance.now() - Number(t.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, l);
  }
};
function _c(e) {
  return typeof e > "u" || !!e;
}
function ja(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[ti])) {
    if (e[ti] = !0, ni(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch) return;
    if (n.center = t._ripple.centered || $c(e), t._ripple.class && (n.class = t._ripple.class), ni(e)) {
      if (t._ripple.showTimerCommit) return;
      t._ripple.showTimerCommit = () => {
        El.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = t == null ? void 0 : t._ripple) != null && a.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Ob);
    } else
      El.show(e, t, n);
  }
}
function Ls(e) {
  e[ti] = !0;
}
function Tt(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        Tt(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), El.hide(n);
  }
}
function Oc(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let Ya = !1;
function Ec(e) {
  !Ya && (e.keyCode === Qr.enter || e.keyCode === Qr.space) && (Ya = !0, ja(e));
}
function Lc(e) {
  Ya = !1, Tt(e);
}
function Fc(e) {
  Ya && (Ya = !1, Tt(e));
}
function Nc(e, n, t) {
  const {
    value: a,
    modifiers: l
  } = n, o = _c(a);
  if (o || El.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = l.center, e._ripple.circle = l.circle, La(a) && a.class && (e._ripple.class = a.class), o && !t) {
    if (l.stop) {
      e.addEventListener("touchstart", Ls, {
        passive: !0
      }), e.addEventListener("mousedown", Ls);
      return;
    }
    e.addEventListener("touchstart", ja, {
      passive: !0
    }), e.addEventListener("touchend", Tt, {
      passive: !0
    }), e.addEventListener("touchmove", Oc, {
      passive: !0
    }), e.addEventListener("touchcancel", Tt), e.addEventListener("mousedown", ja), e.addEventListener("mouseup", Tt), e.addEventListener("mouseleave", Tt), e.addEventListener("keydown", Ec), e.addEventListener("keyup", Lc), e.addEventListener("blur", Fc), e.addEventListener("dragstart", Tt, {
      passive: !0
    });
  } else !o && t && Rc(e);
}
function Rc(e) {
  e.removeEventListener("mousedown", ja), e.removeEventListener("touchstart", ja), e.removeEventListener("touchend", Tt), e.removeEventListener("touchmove", Oc), e.removeEventListener("touchcancel", Tt), e.removeEventListener("mouseup", Tt), e.removeEventListener("mouseleave", Tt), e.removeEventListener("keydown", Ec), e.removeEventListener("keyup", Lc), e.removeEventListener("dragstart", Tt), e.removeEventListener("blur", Fc);
}
function Lb(e, n) {
  Nc(e, n, !1);
}
function Fb(e) {
  delete e._ripple, Rc(e);
}
function Nb(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = _c(n.oldValue);
  Nc(e, n, t);
}
const sn = {
  mounted: Lb,
  unmounted: Fb,
  updated: Nb
}, Ql = $({
  active: {
    type: Boolean,
    default: void 0
  },
  baseColor: String,
  symbol: {
    type: null,
    default: Xi
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ue,
  appendIcon: ue,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...Bt(),
  ...Q(),
  ...nt(),
  ...et(),
  ...Je(),
  ...Wn(),
  ...Jl(),
  ...rn(),
  ...va(),
  ...Fe(),
  ...ol(),
  ...Qt(),
  ...ve({
    tag: "button"
  }),
  ...ye(),
  ...Et({
    variant: "elevated"
  })
}, "VBtn"), Se = L()({
  name: "VBtn",
  props: Ql(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ce(e), {
      borderClasses: o
    } = Ot(e), {
      densityClasses: i
    } = gt(e), {
      dimensionStyles: r
    } = tt(e), {
      elevationClasses: s
    } = ot(e), {
      loaderClasses: c
    } = nl(e), {
      locationStyles: u
    } = Kn(e), {
      positionClasses: f
    } = ma(e), {
      roundedClasses: m
    } = ze(e), {
      sizeClasses: v,
      sizeStyles: g
    } = fa(e), h = Un(e, e.symbol, !1), y = ll(e, t), k = b(() => {
      var I;
      return e.active !== void 0 ? e.active : y.isLink.value ? (I = y.isActive) == null ? void 0 : I.value : h == null ? void 0 : h.isSelected.value;
    }), p = b(() => {
      var D, M;
      return {
        color: (h == null ? void 0 : h.isSelected.value) && (!y.isLink.value || ((D = y.isActive) == null ? void 0 : D.value)) || !h || ((M = y.isActive) == null ? void 0 : M.value) ? e.color ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: w,
      colorStyles: T,
      variantClasses: C
    } = jn(p), V = b(() => (h == null ? void 0 : h.disabled.value) || e.disabled), x = b(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), P = b(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function S(I) {
      var D;
      V.value || y.isLink.value && (I.metaKey || I.ctrlKey || I.shiftKey || I.button !== 0 || t.target === "_blank") || ((D = y.navigate) == null || D.call(y, I), h == null || h.toggle());
    }
    return _b(y, h == null ? void 0 : h.select), H(() => {
      const I = y.isLink.value ? "a" : e.tag, D = !!(e.prependIcon || a.prepend), M = !!(e.appendIcon || a.append), A = !!(e.icon && e.icon !== !0);
      return Ie(d(I, {
        type: I === "a" ? void 0 : "button",
        class: ["v-btn", h == null ? void 0 : h.selectedClass.value, {
          "v-btn--active": k.value,
          "v-btn--block": e.block,
          "v-btn--disabled": V.value,
          "v-btn--elevated": x.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, o.value, w.value, i.value, s.value, c.value, f.value, m.value, v.value, C.value, e.class],
        style: [T.value, r.value, u.value, g.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: V.value || void 0,
        href: y.href.value,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: S,
        value: P.value
      }, {
        default: () => {
          var E;
          return [kn(!0, "v-btn"), !e.icon && D && d("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? d(he, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : d(we, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), d("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && A ? d(we, {
            key: "content-icon",
            icon: e.icon
          }, null) : d(he, {
            key: "content-defaults",
            disabled: !A,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var F;
              return [((F = a.default) == null ? void 0 : F.call(a)) ?? e.text];
            }
          })]), !e.icon && M && d("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? d(he, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : d(we, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && d("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((E = a.loader) == null ? void 0 : E.call(a)) ?? d(sa, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[sn, !V.value && !!e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: h
    };
  }
}), Rb = $({
  ...Ql({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon"), Hb = L()({
  name: "VAppBarNavIcon",
  props: Rb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => d(Se, B(e, {
      class: ["v-app-bar-nav-icon"]
    }), t)), {};
  }
}), zb = L()({
  name: "VAppBarTitle",
  props: Cc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => d(Wi, B(e, {
      class: "v-app-bar-title"
    }), t)), {};
  }
}), Hc = Jt("v-alert-title"), jb = ["success", "info", "warning", "error"], Yb = $({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: ue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => jb.includes(e)
  },
  ...Q(),
  ...nt(),
  ...et(),
  ...Je(),
  ...rn(),
  ...va(),
  ...Fe(),
  ...ve(),
  ...ye(),
  ...Et({
    variant: "flat"
  })
}, "VAlert"), Wb = L()({
  name: "VAlert",
  props: Yb(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), o = b(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), i = b(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: r
    } = Ce(e), {
      colorClasses: s,
      colorStyles: c,
      variantClasses: u
    } = jn(i), {
      densityClasses: f
    } = gt(e), {
      dimensionStyles: m
    } = tt(e), {
      elevationClasses: v
    } = ot(e), {
      locationStyles: g
    } = Kn(e), {
      positionClasses: h
    } = ma(e), {
      roundedClasses: y
    } = ze(e), {
      textColorClasses: k,
      textColorStyles: p
    } = it(O(e, "borderColor")), {
      t: w
    } = Ke(), T = b(() => ({
      "aria-label": w(e.closeLabel),
      onClick(C) {
        l.value = !1, t("click:close", C);
      }
    }));
    return () => {
      const C = !!(a.prepend || o.value), V = !!(a.title || e.title), x = !!(a.close || e.closable);
      return l.value && d(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, s.value, f.value, v.value, h.value, y.value, u.value, e.class],
        style: [c.value, m.value, g.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var P, S;
          return [kn(!1, "v-alert"), e.border && d("div", {
            key: "border",
            class: ["v-alert__border", k.value],
            style: p.value
          }, null), C && d("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? d(he, {
            key: "prepend-defaults",
            disabled: !o.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: o.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, a.prepend) : d(we, {
            key: "prepend-icon",
            density: e.density,
            icon: o.value,
            size: e.prominent ? 44 : 28
          }, null)]), d("div", {
            class: "v-alert__content"
          }, [V && d(Hc, {
            key: "title"
          }, {
            default: () => {
              var I;
              return [((I = a.title) == null ? void 0 : I.call(a)) ?? e.title];
            }
          }), ((P = a.text) == null ? void 0 : P.call(a)) ?? e.text, (S = a.default) == null ? void 0 : S.call(a)]), a.append && d("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), x && d("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? d(he, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var I;
              return [(I = a.close) == null ? void 0 : I.call(a, {
                props: T.value
              })];
            }
          }) : d(Se, B({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, T.value), null)])];
        }
      });
    };
  }
}), Ub = $({
  start: Boolean,
  end: Boolean,
  icon: ue,
  image: String,
  text: String,
  ...Q(),
  ...nt(),
  ...Fe(),
  ...Qt(),
  ...ve(),
  ...ye(),
  ...Et({
    variant: "flat"
  })
}, "VAvatar"), $t = L()({
  name: "VAvatar",
  props: Ub(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ce(e), {
      colorClasses: l,
      colorStyles: o,
      variantClasses: i
    } = jn(e), {
      densityClasses: r
    } = gt(e), {
      roundedClasses: s
    } = ze(e), {
      sizeClasses: c,
      sizeStyles: u
    } = fa(e);
    return H(() => d(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, r.value, s.value, c.value, i.value, e.class],
      style: [o.value, u.value, e.style]
    }, {
      default: () => [t.default ? d(he, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            image: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [t.default()]
      }) : e.image ? d(an, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? d(we, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, kn(!1, "v-avatar")]
    })), {};
  }
}), Kb = $({
  text: String,
  onClick: at(),
  ...Q(),
  ...ye()
}, "VLabel"), ha = L()({
  name: "VLabel",
  props: Kb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => {
      var a;
      return d("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), zc = Symbol.for("vuetify:selection-control-group"), Zi = $({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: ue,
  trueIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: Xt
  },
  ...Q(),
  ...nt(),
  ...ye()
}, "SelectionControlGroup"), Gb = $({
  ...Zi({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup"), jc = L()({
  name: "VSelectionControlGroup",
  props: Gb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), l = lt(), o = b(() => e.id || `v-selection-control-group-${l}`), i = b(() => e.name || o.value), r = /* @__PURE__ */ new Set();
    return Le(zc, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), ht(() => {
          r.delete(s);
        });
      }
    }), He({
      [e.defaultsTarget]: {
        color: O(e, "color"),
        disabled: O(e, "disabled"),
        density: O(e, "density"),
        error: O(e, "error"),
        inline: O(e, "inline"),
        modelValue: a,
        multiple: b(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: i,
        falseIcon: O(e, "falseIcon"),
        trueIcon: O(e, "trueIcon"),
        readonly: O(e, "readonly"),
        ripple: O(e, "ripple"),
        type: O(e, "type"),
        valueComparator: O(e, "valueComparator")
      }
    }), H(() => {
      var s;
      return d("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = t.default) == null ? void 0 : s.call(t)]);
    }), {};
  }
}), eo = $({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...Q(),
  ...Zi()
}, "VSelectionControl");
function qb(e) {
  const n = pe(zc, void 0), {
    densityClasses: t
  } = gt(e), a = ie(e, "modelValue"), l = b(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), o = b(() => e.falseValue !== void 0 ? e.falseValue : !1), i = b(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = b({
    get() {
      const v = n ? n.modelValue.value : a.value;
      return i.value ? Ne(v).some((g) => e.valueComparator(g, l.value)) : e.valueComparator(v, l.value);
    },
    set(v) {
      if (e.readonly) return;
      const g = v ? l.value : o.value;
      let h = g;
      i.value && (h = v ? [...Ne(a.value), g] : Ne(a.value).filter((y) => !e.valueComparator(y, l.value))), n ? n.modelValue.value = h : a.value = h;
    }
  }), {
    textColorClasses: s,
    textColorStyles: c
  } = it(b(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: u,
    backgroundColorStyles: f
  } = De(b(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor)), m = b(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: l,
    falseValue: o,
    model: r,
    textColorClasses: s,
    textColorStyles: c,
    backgroundColorClasses: u,
    backgroundColorStyles: f,
    icon: m
  };
}
const yn = L()({
  name: "VSelectionControl",
  directives: {
    Ripple: sn
  },
  inheritAttrs: !1,
  props: eo(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      group: l,
      densityClasses: o,
      icon: i,
      model: r,
      textColorClasses: s,
      textColorStyles: c,
      backgroundColorClasses: u,
      backgroundColorStyles: f,
      trueValue: m
    } = qb(e), v = lt(), g = G(!1), h = G(!1), y = Y(), k = b(() => e.id || `input-${v}`), p = b(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      y.value && (y.value.checked = r.value);
    });
    function w(x) {
      p.value && (g.value = !0, oa(x.target, ":focus-visible") !== !1 && (h.value = !0));
    }
    function T() {
      g.value = !1, h.value = !1;
    }
    function C(x) {
      x.stopPropagation();
    }
    function V(x) {
      if (!p.value) {
        y.value && (y.value.checked = r.value);
        return;
      }
      e.readonly && l && be(() => l.forceUpdate()), r.value = x.target.checked;
    }
    return H(() => {
      var D, M;
      const x = a.label ? a.label({
        label: e.label,
        props: {
          for: k.value
        }
      }) : e.label, [P, S] = pn(t), I = d("input", B({
        ref: y,
        checked: r.value,
        disabled: !!e.disabled,
        id: k.value,
        onBlur: T,
        onFocus: w,
        onInput: V,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: m.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, S), null);
      return d("div", B({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": g.value,
          "v-selection-control--focus-visible": h.value,
          "v-selection-control--inline": e.inline
        }, o.value, e.class]
      }, P, {
        style: e.style
      }), [d("div", {
        class: ["v-selection-control__wrapper", s.value],
        style: c.value
      }, [(D = a.default) == null ? void 0 : D.call(a, {
        backgroundColorClasses: u,
        backgroundColorStyles: f
      }), Ie(d("div", {
        class: ["v-selection-control__input"]
      }, [((M = a.input) == null ? void 0 : M.call(a, {
        model: r,
        textColorClasses: s,
        textColorStyles: c,
        backgroundColorClasses: u,
        backgroundColorStyles: f,
        inputNode: I,
        icon: i.value,
        props: {
          onFocus: w,
          onBlur: T,
          id: k.value
        }
      })) ?? d(oe, null, [i.value && d(we, {
        key: "icon",
        icon: i.value
      }, null), I])]), [[St("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), x && d(ha, {
        for: k.value,
        onClick: C
      }, {
        default: () => [x]
      })]);
    }), {
      isFocused: g,
      input: y
    };
  }
}), Yc = $({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ue,
    default: "$checkboxIndeterminate"
  },
  ...eo({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), ln = L()({
  name: "VCheckboxBtn",
  props: Yc(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "indeterminate"), l = ie(e, "modelValue");
    function o(s) {
      a.value && (a.value = !1);
    }
    const i = b(() => a.value ? e.indeterminateIcon : e.falseIcon), r = b(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return H(() => {
      const s = We(yn.filterProps(e), ["modelValue"]);
      return d(yn, B(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, o],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: i.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), t);
    }), {};
  }
});
function Wc(e) {
  const {
    t: n
  } = Ke();
  function t(a) {
    let {
      name: l
    } = a;
    const o = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], i = e[`onClick:${l}`], r = i && o ? n(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return d(we, {
      icon: e[`${l}Icon`],
      "aria-label": r,
      onClick: i
    }, null);
  }
  return {
    InputIcon: t
  };
}
const Xb = $({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...Q(),
  ...Yt({
    transition: {
      component: Ki,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Uc = L()({
  name: "VMessages",
  props: Xb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => Ne(e.messages)), {
      textColorClasses: l,
      textColorStyles: o
    } = it(b(() => e.color));
    return H(() => d(vt, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [o.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && a.value.map((i, r) => d("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [t.message ? t.message({
        message: i
      }) : i]))]
    })), {};
  }
}), il = $({
  focused: Boolean,
  "onUpdate:focused": at()
}, "focus");
function un(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zt();
  const t = ie(e, "focused"), a = b(() => ({
    [`${n}--focused`]: t.value
  }));
  function l() {
    t.value = !0;
  }
  function o() {
    t.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: t,
    focus: l,
    blur: o
  };
}
const Kc = Symbol.for("vuetify:form"), Zb = $({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function Jb(e) {
  const n = ie(e, "modelValue"), t = b(() => e.disabled), a = b(() => e.readonly), l = G(!1), o = Y([]), i = Y([]);
  async function r() {
    const u = [];
    let f = !0;
    i.value = [], l.value = !0;
    for (const m of o.value) {
      const v = await m.validate();
      if (v.length > 0 && (f = !1, u.push({
        id: m.id,
        errorMessages: v
      })), !f && e.fastFail) break;
    }
    return i.value = u, l.value = !1, {
      valid: f,
      errors: i.value
    };
  }
  function s() {
    o.value.forEach((u) => u.reset());
  }
  function c() {
    o.value.forEach((u) => u.resetValidation());
  }
  return q(o, () => {
    let u = 0, f = 0;
    const m = [];
    for (const v of o.value)
      v.isValid === !1 ? (f++, m.push({
        id: v.id,
        errorMessages: v.errorMessages
      })) : v.isValid === !0 && u++;
    i.value = m, n.value = f > 0 ? !1 : u === o.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), Le(Kc, {
    register: (u) => {
      let {
        id: f,
        vm: m,
        validate: v,
        reset: g,
        resetValidation: h
      } = u;
      o.value.some((y) => y.id === f) && zt(`Duplicate input name "${f}"`), o.value.push({
        id: f,
        validate: v,
        reset: g,
        resetValidation: h,
        vm: av(m),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (u) => {
      o.value = o.value.filter((f) => f.id !== u);
    },
    update: (u, f, m) => {
      const v = o.value.find((g) => g.id === u);
      v && (v.isValid = f, v.errorMessages = m);
    },
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: o,
    validateOn: O(e, "validateOn")
  }), {
    errors: i,
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: o,
    validate: r,
    reset: s,
    resetValidation: c
  };
}
function to() {
  return pe(Kc, null);
}
const Gc = $({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...il()
}, "validation");
function qc(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zt(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : lt();
  const a = ie(e, "modelValue"), l = b(() => e.validationValue === void 0 ? a.value : e.validationValue), o = to(), i = Y([]), r = G(!0), s = b(() => !!(Ne(a.value === "" ? null : a.value).length || Ne(l.value === "" ? null : l.value).length)), c = b(() => !!(e.disabled ?? (o == null ? void 0 : o.isDisabled.value))), u = b(() => !!(e.readonly ?? (o == null ? void 0 : o.isReadonly.value))), f = b(() => {
    var C;
    return (C = e.errorMessages) != null && C.length ? Ne(e.errorMessages).concat(i.value).slice(0, Math.max(0, +e.maxErrors)) : i.value;
  }), m = b(() => {
    let C = (e.validateOn ?? (o == null ? void 0 : o.validateOn.value)) || "input";
    C === "lazy" && (C = "input lazy");
    const V = new Set((C == null ? void 0 : C.split(" ")) ?? []);
    return {
      blur: V.has("blur") || V.has("input"),
      input: V.has("input"),
      submit: V.has("submit"),
      lazy: V.has("lazy")
    };
  }), v = b(() => {
    var C;
    return e.error || (C = e.errorMessages) != null && C.length ? !1 : e.rules.length ? r.value ? i.value.length || m.value.lazy ? null : !0 : !i.value.length : !0;
  }), g = G(!1), h = b(() => ({
    [`${n}--error`]: v.value === !1,
    [`${n}--dirty`]: s.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: u.value
  })), y = Ue("validation"), k = b(() => e.name ?? pt(t));
  ru(() => {
    o == null || o.register({
      id: k.value,
      vm: y,
      validate: T,
      reset: p,
      resetValidation: w
    });
  }), wt(() => {
    o == null || o.unregister(k.value);
  }), mt(async () => {
    m.value.lazy || await T(!0), o == null || o.update(k.value, v.value, f.value);
  }), xt(() => m.value.input, () => {
    q(l, () => {
      if (l.value != null)
        T();
      else if (e.focused) {
        const C = q(() => e.focused, (V) => {
          V || T(), C();
        });
      }
    });
  }), xt(() => m.value.blur, () => {
    q(() => e.focused, (C) => {
      C || T();
    });
  }), q([v, f], () => {
    o == null || o.update(k.value, v.value, f.value);
  });
  async function p() {
    a.value = null, await be(), await w();
  }
  async function w() {
    r.value = !0, m.value.lazy ? i.value = [] : await T(!0);
  }
  async function T() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const V = [];
    g.value = !0;
    for (const x of e.rules) {
      if (V.length >= +(e.maxErrors ?? 1))
        break;
      const S = await (typeof x == "function" ? x : () => x)(l.value);
      if (S !== !0) {
        if (S !== !1 && typeof S != "string") {
          console.warn(`${S} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        V.push(S || "");
      }
    }
    return i.value = V, g.value = !1, r.value = C, i.value;
  }
  return {
    errorMessages: f,
    isDirty: s,
    isDisabled: c,
    isReadonly: u,
    isPristine: r,
    isValid: v,
    isValidating: g,
    reset: p,
    resetValidation: w,
    validate: T,
    validationClasses: h
  };
}
const cn = $({
  id: String,
  appendIcon: ue,
  centerAffix: Boolean,
  prependIcon: ue,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": at(),
  "onClick:append": at(),
  ...Q(),
  ...nt(),
  ...Hl(et(), ["maxWidth", "minWidth", "width"]),
  ...ye(),
  ...Gc()
}, "VInput"), rt = L()({
  name: "VInput",
  props: {
    ...cn()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const {
      densityClasses: o
    } = gt(e), {
      dimensionStyles: i
    } = tt(e), {
      themeClasses: r
    } = Ce(e), {
      rtlClasses: s
    } = Qe(), {
      InputIcon: c
    } = Wc(e), u = lt(), f = b(() => e.id || `input-${u}`), m = b(() => `${f.value}-messages`), {
      errorMessages: v,
      isDirty: g,
      isDisabled: h,
      isReadonly: y,
      isPristine: k,
      isValid: p,
      isValidating: w,
      reset: T,
      resetValidation: C,
      validate: V,
      validationClasses: x
    } = qc(e, "v-input", f), P = b(() => ({
      id: f,
      messagesId: m,
      isDirty: g,
      isDisabled: h,
      isReadonly: y,
      isPristine: k,
      isValid: p,
      isValidating: w,
      reset: T,
      resetValidation: C,
      validate: V
    })), S = b(() => {
      var I;
      return (I = e.errorMessages) != null && I.length || !k.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return H(() => {
      var E, F, j, X;
      const I = !!(a.prepend || e.prependIcon), D = !!(a.append || e.appendIcon), M = S.value.length > 0, A = !e.hideDetails || e.hideDetails === "auto" && (M || !!a.details);
      return d("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, o.value, r.value, s.value, x.value, e.class],
        style: [i.value, e.style]
      }, [I && d("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(E = a.prepend) == null ? void 0 : E.call(a, P.value), e.prependIcon && d(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && d("div", {
        class: "v-input__control"
      }, [(F = a.default) == null ? void 0 : F.call(a, P.value)]), D && d("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && d(c, {
        key: "append-icon",
        name: "append"
      }, null), (j = a.append) == null ? void 0 : j.call(a, P.value)]), A && d("div", {
        class: "v-input__details"
      }, [d(Uc, {
        id: m.value,
        active: M,
        messages: S.value
      }, {
        message: a.message
      }), (X = a.details) == null ? void 0 : X.call(a, P.value)])]);
    }), {
      reset: T,
      resetValidation: C,
      validate: V,
      isValid: p,
      errorMessages: v
    };
  }
}), Qb = $({
  ...cn(),
  ...We(Yc(), ["inline"])
}, "VCheckbox"), ep = L()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: Qb(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), {
      isFocused: o,
      focus: i,
      blur: r
    } = un(e), s = lt(), c = b(() => e.id || `checkbox-${s}`);
    return H(() => {
      const [u, f] = pn(t), m = rt.filterProps(e), v = ln.filterProps(e);
      return d(rt, B({
        class: ["v-checkbox", e.class]
      }, u, m, {
        modelValue: l.value,
        "onUpdate:modelValue": (g) => l.value = g,
        id: c.value,
        focused: o.value,
        style: e.style
      }), {
        ...a,
        default: (g) => {
          let {
            id: h,
            messagesId: y,
            isDisabled: k,
            isReadonly: p,
            isValid: w
          } = g;
          return d(ln, B(v, {
            id: h.value,
            "aria-describedby": y.value,
            disabled: k.value,
            readonly: p.value
          }, f, {
            error: w.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (T) => l.value = T,
            onFocus: i,
            onBlur: r
          }), a);
        }
      });
    }), {};
  }
});
function tp(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: a,
    isHorizontal: l
  } = e;
  const o = Wa(l, t), i = Xc(l, a, t), r = Wa(l, n), s = Zc(l, n), c = r * 0.4;
  return i > s ? s - c : i + o < s + r ? s - o + r + c : i;
}
function np(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: a
  } = e;
  const l = Wa(a, t), o = Zc(a, n), i = Wa(a, n);
  return o - l / 2 + i / 2;
}
function Fs(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function ap(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Xc(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: o
  } = t;
  return e ? n ? o - l + a : a : t.scrollTop;
}
function Wa(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Zc(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const Jc = Symbol.for("vuetify:v-slide-group"), Ji = $({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Jc
  },
  nextIcon: {
    type: ue,
    default: "$next"
  },
  prevIcon: {
    type: ue,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...Q(),
  ...Nn({
    mobile: null
  }),
  ...ve(),
  ...Yn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), Ua = L()({
  name: "VSlideGroup",
  props: Ji(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: a
    } = Qe(), {
      displayClasses: l,
      mobile: o
    } = _t(e), i = Sn(e, e.symbol), r = G(!1), s = G(0), c = G(0), u = G(0), f = b(() => e.direction === "horizontal"), {
      resizeRef: m,
      contentRect: v
    } = jt(), {
      resizeRef: g,
      contentRect: h
    } = jt(), y = Hy(), k = b(() => ({
      container: m.el,
      duration: 200,
      easing: "easeOutQuart"
    })), p = b(() => i.selected.value.length ? i.items.value.findIndex((_) => _.id === i.selected.value[0]) : -1), w = b(() => i.selected.value.length ? i.items.value.findIndex((_) => _.id === i.selected.value[i.selected.value.length - 1]) : -1);
    if (xe) {
      let _ = -1;
      q(() => [i.selected.value, v.value, h.value, f.value], () => {
        cancelAnimationFrame(_), _ = requestAnimationFrame(() => {
          if (v.value && h.value) {
            const R = f.value ? "width" : "height";
            c.value = v.value[R], u.value = h.value[R], r.value = c.value + 1 < u.value;
          }
          if (p.value >= 0 && g.el) {
            const R = g.el.children[w.value];
            C(R, e.centerActive);
          }
        });
      });
    }
    const T = G(!1);
    function C(_, R) {
      let U = 0;
      R ? U = np({
        containerElement: m.el,
        isHorizontal: f.value,
        selectedElement: _
      }) : U = tp({
        containerElement: m.el,
        isHorizontal: f.value,
        isRtl: a.value,
        selectedElement: _
      }), V(U);
    }
    function V(_) {
      if (!xe || !m.el) return;
      const R = Wa(f.value, m.el), U = Xc(f.value, a.value, m.el);
      if (!(Fs(f.value, m.el) <= R || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(_ - U) < 16)) {
        if (f.value && a.value && m.el) {
          const {
            scrollWidth: re,
            offsetWidth: Z
          } = m.el;
          _ = re - Z - _;
        }
        f.value ? y.horizontal(_, k.value) : y(_, k.value);
      }
    }
    function x(_) {
      const {
        scrollTop: R,
        scrollLeft: U
      } = _.target;
      s.value = f.value ? U : R;
    }
    function P(_) {
      if (T.value = !0, !(!r.value || !g.el)) {
        for (const R of _.composedPath())
          for (const U of g.el.children)
            if (U === R) {
              C(U);
              return;
            }
      }
    }
    function S(_) {
      T.value = !1;
    }
    let I = !1;
    function D(_) {
      var R;
      !I && !T.value && !(_.relatedTarget && ((R = g.el) != null && R.contains(_.relatedTarget))) && E(), I = !1;
    }
    function M() {
      I = !0;
    }
    function A(_) {
      if (!g.el) return;
      function R(U) {
        _.preventDefault(), E(U);
      }
      f.value ? _.key === "ArrowRight" ? R(a.value ? "prev" : "next") : _.key === "ArrowLeft" && R(a.value ? "next" : "prev") : _.key === "ArrowDown" ? R("next") : _.key === "ArrowUp" && R("prev"), _.key === "Home" ? R("first") : _.key === "End" && R("last");
    }
    function E(_) {
      var U, ae;
      if (!g.el) return;
      let R;
      if (!_)
        R = Fa(g.el)[0];
      else if (_ === "next") {
        if (R = (U = g.el.querySelector(":focus")) == null ? void 0 : U.nextElementSibling, !R) return E("first");
      } else if (_ === "prev") {
        if (R = (ae = g.el.querySelector(":focus")) == null ? void 0 : ae.previousElementSibling, !R) return E("last");
      } else _ === "first" ? R = g.el.firstElementChild : _ === "last" && (R = g.el.lastElementChild);
      R && R.focus({
        preventScroll: !0
      });
    }
    function F(_) {
      const R = f.value && a.value ? -1 : 1, U = (_ === "prev" ? -R : R) * c.value;
      let ae = s.value + U;
      if (f.value && a.value && m.el) {
        const {
          scrollWidth: re,
          offsetWidth: Z
        } = m.el;
        ae += re - Z;
      }
      V(ae);
    }
    const j = b(() => ({
      next: i.next,
      prev: i.prev,
      select: i.select,
      isSelected: i.isSelected
    })), X = b(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !o.value;
        case !0:
          return r.value || Math.abs(s.value) > 0;
        case "mobile":
          return o.value || r.value || Math.abs(s.value) > 0;
        default:
          return !o.value && (r.value || Math.abs(s.value) > 0);
      }
    }), N = b(() => Math.abs(s.value) > 1), z = b(() => {
      if (!m.value) return !1;
      const _ = Fs(f.value, m.el), R = ap(f.value, m.el);
      return _ - R - Math.abs(s.value) > 1;
    });
    return H(() => d(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !f.value,
        "v-slide-group--has-affixes": X.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class],
      style: e.style,
      tabindex: T.value || i.selected.value.length ? -1 : 0,
      onFocus: D
    }, {
      default: () => {
        var _, R, U;
        return [X.value && d("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !N.value
          }],
          onMousedown: M,
          onClick: () => N.value && F("prev")
        }, [((_ = t.prev) == null ? void 0 : _.call(t, j.value)) ?? d(za, null, {
          default: () => [d(we, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), d("div", {
          key: "container",
          ref: m,
          class: "v-slide-group__container",
          onScroll: x
        }, [d("div", {
          ref: g,
          class: "v-slide-group__content",
          onFocusin: P,
          onFocusout: S,
          onKeydown: A
        }, [(R = t.default) == null ? void 0 : R.call(t, j.value)])]), X.value && d("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !z.value
          }],
          onMousedown: M,
          onClick: () => z.value && F("next")
        }, [((U = t.next) == null ? void 0 : U.call(t, j.value)) ?? d(za, null, {
          default: () => [d(we, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: i.selected,
      scrollTo: F,
      scrollOffset: s,
      focus: E
    };
  }
}), Qc = Symbol.for("vuetify:v-chip-group"), lp = $({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: Xt
  },
  ...Ji(),
  ...Q(),
  ...Yn({
    selectedClass: "v-chip--selected"
  }),
  ...ve(),
  ...ye(),
  ...Et({
    variant: "tonal"
  })
}, "VChipGroup"), op = L()({
  name: "VChipGroup",
  props: lp(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ce(e), {
      isSelected: l,
      select: o,
      next: i,
      prev: r,
      selected: s
    } = Sn(e, Qc);
    return He({
      VChip: {
        color: O(e, "color"),
        disabled: O(e, "disabled"),
        filter: O(e, "filter"),
        variant: O(e, "variant")
      }
    }), H(() => {
      const c = Ua.filterProps(e);
      return d(Ua, B(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var u;
          return [(u = t.default) == null ? void 0 : u.call(t, {
            isSelected: l,
            select: o,
            next: i,
            prev: r,
            selected: s.value
          })];
        }
      });
    }), {};
  }
}), ip = $({
  activeClass: String,
  appendAvatar: String,
  appendIcon: ue,
  closable: Boolean,
  closeIcon: {
    type: ue,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: at(),
  onClickOnce: at(),
  ...Bt(),
  ...Q(),
  ...nt(),
  ...Je(),
  ...Wn(),
  ...Fe(),
  ...ol(),
  ...Qt(),
  ...ve({
    tag: "span"
  }),
  ...ye(),
  ...Et({
    variant: "tonal"
  })
}, "VChip"), ga = L()({
  name: "VChip",
  directives: {
    Ripple: sn
  },
  props: ip(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: o
    } = Ke(), {
      borderClasses: i
    } = Ot(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = jn(e), {
      densityClasses: u
    } = gt(e), {
      elevationClasses: f
    } = ot(e), {
      roundedClasses: m
    } = ze(e), {
      sizeClasses: v
    } = fa(e), {
      themeClasses: g
    } = Ce(e), h = ie(e, "modelValue"), y = Un(e, Qc, !1), k = ll(e, t), p = b(() => e.link !== !1 && k.isLink.value), w = b(() => !e.disabled && e.link !== !1 && (!!y || e.link || k.isClickable.value)), T = b(() => ({
      "aria-label": o(e.closeLabel),
      onClick(x) {
        x.preventDefault(), x.stopPropagation(), h.value = !1, a("click:close", x);
      }
    }));
    function C(x) {
      var P;
      a("click", x), w.value && ((P = k.navigate) == null || P.call(k, x), y == null || y.toggle());
    }
    function V(x) {
      (x.key === "Enter" || x.key === " ") && (x.preventDefault(), C(x));
    }
    return () => {
      const x = k.isLink.value ? "a" : e.tag, P = !!(e.appendIcon || e.appendAvatar), S = !!(P || l.append), I = !!(l.close || e.closable), D = !!(l.filter || e.filter) && y, M = !!(e.prependIcon || e.prependAvatar), A = !!(M || l.prepend), E = !y || y.isSelected.value;
      return h.value && Ie(d(x, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": w.value,
          "v-chip--filter": D,
          "v-chip--pill": e.pill
        }, g.value, i.value, E ? r.value : void 0, u.value, f.value, m.value, v.value, c.value, y == null ? void 0 : y.selectedClass.value, e.class],
        style: [E ? s.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: k.href.value,
        tabindex: w.value ? 0 : void 0,
        onClick: C,
        onKeydown: w.value && !p.value && V
      }, {
        default: () => {
          var F;
          return [kn(w.value, "v-chip"), D && d(Gi, {
            key: "filter"
          }, {
            default: () => [Ie(d("div", {
              class: "v-chip__filter"
            }, [l.filter ? d(he, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : d(we, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[It, y.isSelected.value]])]
          }), A && d("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? d(he, {
            key: "prepend-defaults",
            disabled: !M,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : d(oe, null, [e.prependIcon && d(we, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && d($t, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), d("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((F = l.default) == null ? void 0 : F.call(l, {
            isSelected: y == null ? void 0 : y.isSelected.value,
            selectedClass: y == null ? void 0 : y.selectedClass.value,
            select: y == null ? void 0 : y.select,
            toggle: y == null ? void 0 : y.toggle,
            value: y == null ? void 0 : y.value.value,
            disabled: e.disabled
          })) ?? e.text]), S && d("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? d(he, {
            key: "append-defaults",
            disabled: !P,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : d(oe, null, [e.appendIcon && d(we, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && d($t, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), I && d("button", B({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, T.value), [l.close ? d(he, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : d(we, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[St("ripple"), w.value && e.ripple, null]]);
    };
  }
}), ai = Symbol.for("vuetify:list");
function ed() {
  const e = pe(ai, {
    hasPrepend: G(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: G(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return Le(ai, n), e;
}
function td() {
  return pe(ai, null);
}
const Qi = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: a,
        value: l,
        activated: o
      } = t;
      return a = kt(a), e && !l && o.size === 1 && o.has(a) || (l ? o.add(a) : o.delete(a)), o;
    },
    in: (t, a, l) => {
      let o = /* @__PURE__ */ new Set();
      if (t != null)
        for (const i of Ne(t))
          o = n.activate({
            id: i,
            value: !0,
            activated: new Set(o),
            children: a,
            parents: l
          });
      return o;
    },
    out: (t) => Array.from(t)
  };
  return n;
}, nd = (e) => {
  const n = Qi(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: o,
        ...i
      } = a;
      o = kt(o);
      const r = l.has(o) ? /* @__PURE__ */ new Set([o]) : /* @__PURE__ */ new Set();
      return n.activate({
        ...i,
        id: o,
        activated: r
      });
    },
    in: (a, l, o) => {
      let i = /* @__PURE__ */ new Set();
      if (a != null) {
        const r = Ne(a);
        r.length && (i = n.in(r.slice(0, 1), l, o));
      }
      return i;
    },
    out: (a, l, o) => n.out(a, l, o)
  };
}, rp = (e) => {
  const n = Qi(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: o,
        children: i,
        ...r
      } = a;
      return l = kt(l), i.has(l) ? o : n.activate({
        id: l,
        activated: o,
        children: i,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, sp = (e) => {
  const n = nd(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: o,
        children: i,
        ...r
      } = a;
      return l = kt(l), i.has(l) ? o : n.activate({
        id: l,
        activated: o,
        children: i,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, up = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      const o = /* @__PURE__ */ new Set();
      o.add(n);
      let i = l.get(n);
      for (; i != null; )
        o.add(i), i = l.get(i);
      return o;
    } else
      return a.delete(n), a;
  },
  select: () => null
}, ad = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      let o = l.get(n);
      for (a.add(n); o != null && o !== n; )
        a.add(o), o = l.get(o);
      return a;
    } else
      a.delete(n);
    return a;
  },
  select: () => null
}, cp = {
  open: ad.open,
  select: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (!t) return a;
    const o = [];
    let i = l.get(n);
    for (; i != null; )
      o.push(i), i = l.get(i);
    return new Set(o);
  }
}, er = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: o
      } = t;
      if (a = kt(a), e && !l) {
        const i = Array.from(o.entries()).reduce((r, s) => {
          let [c, u] = s;
          return u === "on" && r.push(c), r;
        }, []);
        if (i.length === 1 && i[0] === a) return o;
      }
      return o.set(a, l ? "on" : "off"), o;
    },
    in: (t, a, l) => {
      let o = /* @__PURE__ */ new Map();
      for (const i of t || [])
        o = n.select({
          id: i,
          value: !0,
          selected: new Map(o),
          children: a,
          parents: l
        });
      return o;
    },
    out: (t) => {
      const a = [];
      for (const [l, o] of t.entries())
        o === "on" && a.push(l);
      return a;
    }
  };
  return n;
}, ld = (e) => {
  const n = er(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: o,
        ...i
      } = a;
      o = kt(o);
      const r = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
      return n.select({
        ...i,
        id: o,
        selected: r
      });
    },
    in: (a, l, o) => {
      let i = /* @__PURE__ */ new Map();
      return a != null && a.length && (i = n.in(a.slice(0, 1), l, o)), i;
    },
    out: (a, l, o) => n.out(a, l, o)
  };
}, dp = (e) => {
  const n = er(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: o,
        children: i,
        ...r
      } = a;
      return l = kt(l), i.has(l) ? o : n.select({
        id: l,
        selected: o,
        children: i,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, fp = (e) => {
  const n = ld(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: o,
        children: i,
        ...r
      } = a;
      return l = kt(l), i.has(l) ? o : n.select({
        id: l,
        selected: o,
        children: i,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, vp = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: o,
        children: i,
        parents: r
      } = t;
      a = kt(a);
      const s = new Map(o), c = [a];
      for (; c.length; ) {
        const f = c.shift();
        o.set(f, l ? "on" : "off"), i.has(f) && c.push(...i.get(f));
      }
      let u = r.get(a);
      for (; u; ) {
        const f = i.get(u), m = f.every((g) => o.get(g) === "on"), v = f.every((g) => !o.has(g) || o.get(g) === "off");
        o.set(u, m ? "on" : v ? "off" : "indeterminate"), u = r.get(u);
      }
      return e && !l && Array.from(o.entries()).reduce((m, v) => {
        let [g, h] = v;
        return h === "on" && m.push(g), m;
      }, []).length === 0 ? s : o;
    },
    in: (t, a, l) => {
      let o = /* @__PURE__ */ new Map();
      for (const i of t || [])
        o = n.select({
          id: i,
          value: !0,
          selected: new Map(o),
          children: a,
          parents: l
        });
      return o;
    },
    out: (t, a) => {
      const l = [];
      for (const [o, i] of t.entries())
        i === "on" && !a.has(o) && l.push(o);
      return l;
    }
  };
  return n;
}, Ka = Symbol.for("vuetify:nested"), od = {
  id: G(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: Y(/* @__PURE__ */ new Map()),
    children: Y(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: Y(!1),
    selectable: Y(!1),
    opened: Y(/* @__PURE__ */ new Set()),
    activated: Y(/* @__PURE__ */ new Set()),
    selected: Y(/* @__PURE__ */ new Map()),
    selectedValues: Y([])
  }
}, mp = $({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), hp = (e) => {
  let n = !1;
  const t = Y(/* @__PURE__ */ new Map()), a = Y(/* @__PURE__ */ new Map()), l = ie(e, "opened", e.opened, (v) => new Set(v), (v) => [...v.values()]), o = b(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return rp(e.mandatory);
      case "single-leaf":
        return sp(e.mandatory);
      case "independent":
        return Qi(e.mandatory);
      case "single-independent":
      default:
        return nd(e.mandatory);
    }
  }), i = b(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return fp(e.mandatory);
      case "leaf":
        return dp(e.mandatory);
      case "independent":
        return er(e.mandatory);
      case "single-independent":
        return ld(e.mandatory);
      case "classic":
      default:
        return vp(e.mandatory);
    }
  }), r = b(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return cp;
      case "single":
        return up;
      case "multiple":
      default:
        return ad;
    }
  }), s = ie(e, "activated", e.activated, (v) => o.value.in(v, t.value, a.value), (v) => o.value.out(v, t.value, a.value)), c = ie(e, "selected", e.selected, (v) => i.value.in(v, t.value, a.value), (v) => i.value.out(v, t.value, a.value));
  wt(() => {
    n = !0;
  });
  function u(v) {
    const g = [];
    let h = v;
    for (; h != null; )
      g.unshift(h), h = a.value.get(h);
    return g;
  }
  const f = Ue("nested"), m = {
    id: G(),
    root: {
      opened: l,
      activatable: O(e, "activatable"),
      selectable: O(e, "selectable"),
      activated: s,
      selected: c,
      selectedValues: b(() => {
        const v = [];
        for (const [g, h] of c.value.entries())
          h === "on" && v.push(g);
        return v;
      }),
      register: (v, g, h) => {
        g && v !== g && a.value.set(v, g), h && t.value.set(v, []), g != null && t.value.set(g, [...t.value.get(g) || [], v]);
      },
      unregister: (v) => {
        if (n) return;
        t.value.delete(v);
        const g = a.value.get(v);
        if (g) {
          const h = t.value.get(g) ?? [];
          t.value.set(g, h.filter((y) => y !== v));
        }
        a.value.delete(v), l.value.delete(v);
      },
      open: (v, g, h) => {
        f.emit("click:open", {
          id: v,
          value: g,
          path: u(v),
          event: h
        });
        const y = r.value.open({
          id: v,
          value: g,
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        y && (l.value = y);
      },
      openOnSelect: (v, g, h) => {
        const y = r.value.select({
          id: v,
          value: g,
          selected: new Map(c.value),
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        y && (l.value = y);
      },
      select: (v, g, h) => {
        f.emit("click:select", {
          id: v,
          value: g,
          path: u(v),
          event: h
        });
        const y = i.value.select({
          id: v,
          value: g,
          selected: new Map(c.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        y && (c.value = y), m.root.openOnSelect(v, g, h);
      },
      activate: (v, g, h) => {
        if (!e.activatable)
          return m.root.select(v, !0, h);
        f.emit("click:activate", {
          id: v,
          value: g,
          path: u(v),
          event: h
        });
        const y = o.value.activate({
          id: v,
          value: g,
          activated: new Set(s.value),
          children: t.value,
          parents: a.value,
          event: h
        });
        y && (s.value = y);
      },
      children: t,
      parents: a
    }
  };
  return Le(Ka, m), m.root;
}, id = (e, n) => {
  const t = pe(Ka, od), a = Symbol(lt()), l = b(() => e.value !== void 0 ? e.value : a), o = {
    ...t,
    id: l,
    open: (i, r) => t.root.open(l.value, i, r),
    openOnSelect: (i, r) => t.root.openOnSelect(l.value, i, r),
    isOpen: b(() => t.root.opened.value.has(l.value)),
    parent: b(() => t.root.parents.value.get(l.value)),
    activate: (i, r) => t.root.activate(l.value, i, r),
    isActivated: b(() => t.root.activated.value.has(kt(l.value))),
    select: (i, r) => t.root.select(l.value, i, r),
    isSelected: b(() => t.root.selected.value.get(kt(l.value)) === "on"),
    isIndeterminate: b(() => t.root.selected.value.get(l.value) === "indeterminate"),
    isLeaf: b(() => !t.root.children.value.get(l.value)),
    isGroupActivator: t.isGroupActivator
  };
  return !t.isGroupActivator && t.root.register(l.value, t.id.value, n), wt(() => {
    !t.isGroupActivator && t.root.unregister(l.value);
  }), n && Le(Ka, o), o;
}, gp = () => {
  const e = pe(Ka, od);
  Le(Ka, {
    ...e,
    isGroupActivator: !0
  });
}, yp = Dt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return gp(), () => {
      var a;
      return (a = t.default) == null ? void 0 : a.call(t);
    };
  }
}), bp = $({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: ue,
    default: "$collapse"
  },
  expandIcon: {
    type: ue,
    default: "$expand"
  },
  prependIcon: ue,
  appendIcon: ue,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...Q(),
  ...ve()
}, "VListGroup"), li = L()({
  name: "VListGroup",
  props: bp(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: a,
      open: l,
      id: o
    } = id(O(e, "value"), !0), i = b(() => `v-list-group--id-${String(o.value)}`), r = td(), {
      isBooted: s
    } = zn();
    function c(v) {
      v.stopPropagation(), l(!a.value, v);
    }
    const u = b(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: i.value
    })), f = b(() => a.value ? e.collapseIcon : e.expandIcon), m = b(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && f.value,
        appendIcon: e.appendIcon || !e.subgroup && f.value,
        title: e.title,
        value: e.value
      }
    }));
    return H(() => d(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && d(he, {
        defaults: m.value
      }, {
        default: () => [d(yp, null, {
          default: () => [t.activator({
            props: u.value,
            isOpen: a.value
          })]
        })]
      }), d(vt, {
        transition: {
          component: ql
        },
        disabled: !s.value
      }, {
        default: () => {
          var v;
          return [Ie(d("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": i.value
          }, [(v = t.default) == null ? void 0 : v.call(t)]), [[It, a.value]])];
        }
      })]
    })), {
      isOpen: a
    };
  }
}), pp = $({
  opacity: [Number, String],
  ...Q(),
  ...ve()
}, "VListItemSubtitle"), rd = L()({
  name: "VListItemSubtitle",
  props: pp(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => d(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), sd = Jt("v-list-item-title"), kp = $({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: ue,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: at(),
  onClickOnce: at(),
  ...Bt(),
  ...Q(),
  ...nt(),
  ...et(),
  ...Je(),
  ...Fe(),
  ...ol(),
  ...ve(),
  ...ye(),
  ...Et({
    variant: "text"
  })
}, "VListItem"), on = L()({
  name: "VListItem",
  directives: {
    Ripple: sn
  },
  props: kp(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const o = ll(e, t), i = b(() => e.value === void 0 ? o.href.value : e.value), {
      activate: r,
      isActivated: s,
      select: c,
      isSelected: u,
      isIndeterminate: f,
      isGroupActivator: m,
      root: v,
      parent: g,
      openOnSelect: h
    } = id(i, !1), y = td(), k = b(() => {
      var _;
      return e.active !== !1 && (e.active || ((_ = o.isActive) == null ? void 0 : _.value) || (v.activatable.value ? s.value : u.value));
    }), p = b(() => e.link !== !1 && o.isLink.value), w = b(() => !e.disabled && e.link !== !1 && (e.link || o.isClickable.value || !!y && (v.selectable.value || v.activatable.value || e.value != null))), T = b(() => e.rounded || e.nav), C = b(() => e.color ?? e.activeColor), V = b(() => ({
      color: k.value ? C.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    q(() => {
      var _;
      return (_ = o.isActive) == null ? void 0 : _.value;
    }, (_) => {
      _ && g.value != null && v.open(g.value, !0), _ && h(_);
    }, {
      immediate: !0
    });
    const {
      themeClasses: x
    } = Ce(e), {
      borderClasses: P
    } = Ot(e), {
      colorClasses: S,
      colorStyles: I,
      variantClasses: D
    } = jn(V), {
      densityClasses: M
    } = gt(e), {
      dimensionStyles: A
    } = tt(e), {
      elevationClasses: E
    } = ot(e), {
      roundedClasses: F
    } = ze(T), j = b(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), X = b(() => ({
      isActive: k.value,
      select: c,
      isSelected: u.value,
      isIndeterminate: f.value
    }));
    function N(_) {
      var R;
      l("click", _), w.value && ((R = o.navigate) == null || R.call(o, _), !m && (v.activatable.value ? r(!s.value, _) : (v.selectable.value || e.value != null) && c(!u.value, _)));
    }
    function z(_) {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), N(_));
    }
    return H(() => {
      const _ = p.value ? "a" : e.tag, R = a.title || e.title != null, U = a.subtitle || e.subtitle != null, ae = !!(e.appendAvatar || e.appendIcon), re = !!(ae || a.append), Z = !!(e.prependAvatar || e.prependIcon), W = !!(Z || a.prepend);
      return y == null || y.updateHasPrepend(W), e.activeColor && Sg("active-color", ["color", "base-color"]), Ie(d(_, {
        class: ["v-list-item", {
          "v-list-item--active": k.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": w.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !W && (y == null ? void 0 : y.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && k.value
        }, x.value, P.value, S.value, M.value, E.value, j.value, F.value, D.value, e.class],
        style: [I.value, A.value, e.style],
        href: o.href.value,
        tabindex: w.value ? y ? -2 : 0 : void 0,
        onClick: N,
        onKeydown: w.value && !p.value && z
      }, {
        default: () => {
          var ee;
          return [kn(w.value || k.value, "v-list-item"), W && d("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? d(he, {
            key: "prepend-defaults",
            disabled: !Z,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var Ve;
              return [(Ve = a.prepend) == null ? void 0 : Ve.call(a, X.value)];
            }
          }) : d(oe, null, [e.prependAvatar && d($t, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && d(we, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), d("div", {
            class: "v-list-item__spacer"
          }, null)]), d("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [R && d(sd, {
            key: "title"
          }, {
            default: () => {
              var Ve;
              return [((Ve = a.title) == null ? void 0 : Ve.call(a, {
                title: e.title
              })) ?? e.title];
            }
          }), U && d(rd, {
            key: "subtitle"
          }, {
            default: () => {
              var Ve;
              return [((Ve = a.subtitle) == null ? void 0 : Ve.call(a, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (ee = a.default) == null ? void 0 : ee.call(a, X.value)]), re && d("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? d(he, {
            key: "append-defaults",
            disabled: !ae,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var Ve;
              return [(Ve = a.append) == null ? void 0 : Ve.call(a, X.value)];
            }
          }) : d(oe, null, [e.appendIcon && d(we, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && d($t, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), d("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[St("ripple"), w.value && e.ripple]]);
    }), {
      activate: r,
      isActivated: s,
      isGroupActivator: m,
      isSelected: u,
      list: y,
      select: c
    };
  }
}), Sp = $({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...Q(),
  ...ve()
}, "VListSubheader"), ud = L()({
  name: "VListSubheader",
  props: Sp(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = it(O(e, "color"));
    return H(() => {
      const o = !!(t.default || e.title);
      return d(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: l
        }, e.style]
      }, {
        default: () => {
          var i;
          return [o && d("div", {
            class: "v-list-subheader__text"
          }, [((i = t.default) == null ? void 0 : i.call(t)) ?? e.title])];
        }
      });
    }), {};
  }
}), wp = $({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...Q(),
  ...ye()
}, "VDivider"), rl = L()({
  name: "VDivider",
  props: wp(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ce(e), {
      textColorClasses: o,
      textColorStyles: i
    } = it(O(e, "color")), r = b(() => {
      const s = {};
      return e.length && (s[e.vertical ? "height" : "width"] = J(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = J(e.thickness)), s;
    });
    return H(() => {
      const s = d("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, o.value, e.class],
        style: [r.value, i.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${t.role || "separator"}`
      }, null);
      return a.default ? d("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [s, d("div", {
        class: "v-divider__content"
      }, [a.default()]), s]) : s;
    }), {};
  }
}), Cp = $({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), cd = L()({
  name: "VListChildren",
  props: Cp(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return ed(), () => {
      var a, l;
      return ((a = t.default) == null ? void 0 : a.call(t)) ?? ((l = e.items) == null ? void 0 : l.map((o) => {
        var m, v;
        let {
          children: i,
          props: r,
          type: s,
          raw: c
        } = o;
        if (s === "divider")
          return ((m = t.divider) == null ? void 0 : m.call(t, {
            props: r
          })) ?? d(rl, r, null);
        if (s === "subheader")
          return ((v = t.subheader) == null ? void 0 : v.call(t, {
            props: r
          })) ?? d(ud, r, null);
        const u = {
          subtitle: t.subtitle ? (g) => {
            var h;
            return (h = t.subtitle) == null ? void 0 : h.call(t, {
              ...g,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (g) => {
            var h;
            return (h = t.prepend) == null ? void 0 : h.call(t, {
              ...g,
              item: c
            });
          } : void 0,
          append: t.append ? (g) => {
            var h;
            return (h = t.append) == null ? void 0 : h.call(t, {
              ...g,
              item: c
            });
          } : void 0,
          title: t.title ? (g) => {
            var h;
            return (h = t.title) == null ? void 0 : h.call(t, {
              ...g,
              item: c
            });
          } : void 0
        }, f = li.filterProps(r);
        return i ? d(li, B({
          value: r == null ? void 0 : r.value
        }, f), {
          activator: (g) => {
            let {
              props: h
            } = g;
            const y = {
              ...r,
              ...h,
              value: e.returnObject ? c : r.value
            };
            return t.header ? t.header({
              props: y
            }) : d(on, y, u);
          },
          default: () => d(cd, {
            items: i,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: r
        }) : d(on, B(r, {
          value: e.returnObject ? c : r.value
        }), u);
      }));
    };
  }
}), dd = $({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: Xt
  }
}, "list-items");
function hn(e, n) {
  const t = Ze(n, e.itemTitle, n), a = Ze(n, e.itemValue, t), l = Ze(n, e.itemChildren), o = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? We(n, ["children"]) : n : void 0 : Ze(n, e.itemProps), i = {
    title: t,
    value: a,
    ...o
  };
  return {
    title: String(i.title ?? ""),
    value: i.value,
    props: i,
    children: Array.isArray(l) ? fd(e, l) : void 0,
    raw: n
  };
}
function fd(e, n) {
  const t = [];
  for (const a of n)
    t.push(hn(e, a));
  return t;
}
function tr(e) {
  const n = b(() => fd(e, e.items)), t = b(() => n.value.some((o) => o.value === null));
  function a(o) {
    return t.value || (o = o.filter((i) => i !== null)), o.map((i) => e.returnObject && typeof i == "string" ? hn(e, i) : n.value.find((r) => e.valueComparator(i, r.value)) || hn(e, i));
  }
  function l(o) {
    return e.returnObject ? o.map((i) => {
      let {
        raw: r
      } = i;
      return r;
    }) : o.map((i) => {
      let {
        value: r
      } = i;
      return r;
    });
  }
  return {
    items: n,
    transformIn: a,
    transformOut: l
  };
}
function xp(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Vp(e, n) {
  const t = Ze(n, e.itemType, "item"), a = xp(n) ? n : Ze(n, e.itemTitle), l = Ze(n, e.itemValue, void 0), o = Ze(n, e.itemChildren), i = e.itemProps === !0 ? We(n, ["children"]) : Ze(n, e.itemProps), r = {
    title: a,
    value: l,
    ...i
  };
  return {
    type: t,
    title: r.title,
    value: r.value,
    props: r,
    children: t === "item" && o ? vd(e, o) : void 0,
    raw: n
  };
}
function vd(e, n) {
  const t = [];
  for (const a of n)
    t.push(Vp(e, a));
  return t;
}
function Pp(e) {
  return {
    items: b(() => vd(e, e.items))
  };
}
const Tp = $({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": at(),
  "onClick:select": at(),
  "onUpdate:opened": at(),
  ...mp({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...Bt(),
  ...Q(),
  ...nt(),
  ...et(),
  ...Je(),
  itemType: {
    type: String,
    default: "type"
  },
  ...dd(),
  ...Fe(),
  ...ve(),
  ...ye(),
  ...Et({
    variant: "text"
  })
}, "VList"), no = L()({
  name: "VList",
  props: Tp(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a
    } = Pp(e), {
      themeClasses: l
    } = Ce(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: i
    } = De(O(e, "bgColor")), {
      borderClasses: r
    } = Ot(e), {
      densityClasses: s
    } = gt(e), {
      dimensionStyles: c
    } = tt(e), {
      elevationClasses: u
    } = ot(e), {
      roundedClasses: f
    } = ze(e), {
      children: m,
      open: v,
      parents: g,
      select: h
    } = hp(e), y = b(() => e.lines ? `v-list--${e.lines}-line` : void 0), k = O(e, "activeColor"), p = O(e, "baseColor"), w = O(e, "color");
    ed(), He({
      VListGroup: {
        activeColor: k,
        baseColor: p,
        color: w,
        expandIcon: O(e, "expandIcon"),
        collapseIcon: O(e, "collapseIcon")
      },
      VListItem: {
        activeClass: O(e, "activeClass"),
        activeColor: k,
        baseColor: p,
        color: w,
        density: O(e, "density"),
        disabled: O(e, "disabled"),
        lines: O(e, "lines"),
        nav: O(e, "nav"),
        slim: O(e, "slim"),
        variant: O(e, "variant")
      }
    });
    const T = G(!1), C = Y();
    function V(M) {
      T.value = !0;
    }
    function x(M) {
      T.value = !1;
    }
    function P(M) {
      var A;
      !T.value && !(M.relatedTarget && ((A = C.value) != null && A.contains(M.relatedTarget))) && D();
    }
    function S(M) {
      const A = M.target;
      if (!(!C.value || ["INPUT", "TEXTAREA"].includes(A.tagName))) {
        if (M.key === "ArrowDown")
          D("next");
        else if (M.key === "ArrowUp")
          D("prev");
        else if (M.key === "Home")
          D("first");
        else if (M.key === "End")
          D("last");
        else
          return;
        M.preventDefault();
      }
    }
    function I(M) {
      T.value = !0;
    }
    function D(M) {
      if (C.value)
        return la(C.value, M);
    }
    return H(() => d(e.tag, {
      ref: C,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, o.value, r.value, s.value, u.value, y.value, f.value, e.class],
      style: [i.value, c.value, e.style],
      tabindex: e.disabled || T.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: V,
      onFocusout: x,
      onFocus: P,
      onKeydown: S,
      onMousedown: I
    }, {
      default: () => [d(cd, {
        items: a.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: v,
      select: h,
      focus: D,
      children: m,
      parents: g
    };
  }
}), Ip = Jt("v-list-img"), Dp = $({
  start: Boolean,
  end: Boolean,
  ...Q(),
  ...ve()
}, "VListItemAction"), Mp = L()({
  name: "VListItemAction",
  props: Dp(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => d(e.tag, {
      class: ["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
}), Bp = $({
  start: Boolean,
  end: Boolean,
  ...Q(),
  ...ve()
}, "VListItemMedia"), Ap = L()({
  name: "VListItemMedia",
  props: Bp(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => d(e.tag, {
      class: ["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
});
function Ao(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function $p(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function Ns(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? n.width / 2 : a === "right" ? n.width : a, o = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return Ao({
      x: l,
      y: o
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: a
    } = e, l = t === "left" ? 0 : t === "right" ? n.width : t, o = a === "top" ? 0 : a === "center" ? n.height / 2 : a === "bottom" ? n.height : a;
    return Ao({
      x: l,
      y: o
    }, n);
  }
  return Ao({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const md = {
  static: Ep,
  // specific viewport position, usually centered
  connected: Fp
  // connected to a certain element
}, _p = $({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in md
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function Op(e, n) {
  const t = Y({}), a = Y();
  xe && xt(() => !!(n.isActive.value && e.locationStrategy), (o) => {
    var i, r;
    q(() => e.locationStrategy, o), ht(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (i = e.locationStrategy(n, e, t)) == null ? void 0 : i.updateLocation : a.value = (r = md[e.locationStrategy](n, e, t)) == null ? void 0 : r.updateLocation;
  });
  function l(o) {
    var i;
    (i = a.value) == null || i.call(a, o);
  }
  return {
    contentStyles: t,
    updateLocation: a
  };
}
function Ep() {
}
function Lp(e, n) {
  n ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const t = Ei(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function Fp(e, n, t) {
  (Array.isArray(e.target.value) || zg(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: o
  } = _i(() => {
    const g = Yo(n.location, e.isRtl.value), h = n.origin === "overlap" ? g : n.origin === "auto" ? To(g) : Yo(n.origin, e.isRtl.value);
    return g.side === h.side && g.align === Io(h).align ? {
      preferredAnchor: is(g),
      preferredOrigin: is(h)
    } : {
      preferredAnchor: g,
      preferredOrigin: h
    };
  }), [i, r, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((g) => b(() => {
    const h = parseFloat(n[g]);
    return isNaN(h) ? 1 / 0 : h;
  })), u = b(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const g = n.offset.split(" ").map(parseFloat);
      return g.length < 2 && g.push(0), g;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let f = !1;
  const m = new ResizeObserver(() => {
    f && v();
  });
  q([e.target, e.contentEl], (g, h) => {
    let [y, k] = g, [p, w] = h;
    p && !Array.isArray(p) && m.unobserve(p), y && !Array.isArray(y) && m.observe(y), w && m.unobserve(w), k && m.observe(k);
  }, {
    immediate: !0
  }), ht(() => {
    m.disconnect();
  });
  function v() {
    if (f = !1, requestAnimationFrame(() => f = !0), !e.target.value || !e.contentEl.value) return;
    const g = Ku(e.target.value), h = Lp(e.contentEl.value, e.isRtl.value), y = _l(e.contentEl.value), k = 12;
    y.length || (y.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const p = y.reduce((D, M) => {
      const A = M.getBoundingClientRect(), E = new Mn({
        x: M === document.documentElement ? 0 : A.x,
        y: M === document.documentElement ? 0 : A.y,
        width: M.clientWidth,
        height: M.clientHeight
      });
      return D ? new Mn({
        x: Math.max(D.left, E.left),
        y: Math.max(D.top, E.top),
        width: Math.min(D.right, E.right) - Math.max(D.left, E.left),
        height: Math.min(D.bottom, E.bottom) - Math.max(D.top, E.top)
      }) : E;
    }, void 0);
    p.x += k, p.y += k, p.width -= k * 2, p.height -= k * 2;
    let w = {
      anchor: l.value,
      origin: o.value
    };
    function T(D) {
      const M = new Mn(h), A = Ns(D.anchor, g), E = Ns(D.origin, M);
      let {
        x: F,
        y: j
      } = $p(A, E);
      switch (D.anchor.side) {
        case "top":
          j -= u.value[0];
          break;
        case "bottom":
          j += u.value[0];
          break;
        case "left":
          F -= u.value[0];
          break;
        case "right":
          F += u.value[0];
          break;
      }
      switch (D.anchor.align) {
        case "top":
          j -= u.value[1];
          break;
        case "bottom":
          j += u.value[1];
          break;
        case "left":
          F -= u.value[1];
          break;
        case "right":
          F += u.value[1];
          break;
      }
      return M.x += F, M.y += j, M.width = Math.min(M.width, s.value), M.height = Math.min(M.height, c.value), {
        overflows: ss(M, p),
        x: F,
        y: j
      };
    }
    let C = 0, V = 0;
    const x = {
      x: 0,
      y: 0
    }, P = {
      x: !1,
      y: !1
    };
    let S = -1;
    for (; ; ) {
      if (S++ > 10) {
        Al("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: D,
        y: M,
        overflows: A
      } = T(w);
      C += D, V += M, h.x += D, h.y += M;
      {
        const E = rs(w.anchor), F = A.x.before || A.x.after, j = A.y.before || A.y.after;
        let X = !1;
        if (["x", "y"].forEach((N) => {
          if (N === "x" && F && !P.x || N === "y" && j && !P.y) {
            const z = {
              anchor: {
                ...w.anchor
              },
              origin: {
                ...w.origin
              }
            }, _ = N === "x" ? E === "y" ? Io : To : E === "y" ? To : Io;
            z.anchor = _(z.anchor), z.origin = _(z.origin);
            const {
              overflows: R
            } = T(z);
            (R[N].before <= A[N].before && R[N].after <= A[N].after || R[N].before + R[N].after < (A[N].before + A[N].after) / 2) && (w = z, X = P[N] = !0);
          }
        }), X) continue;
      }
      A.x.before && (C += A.x.before, h.x += A.x.before), A.x.after && (C -= A.x.after, h.x -= A.x.after), A.y.before && (V += A.y.before, h.y += A.y.before), A.y.after && (V -= A.y.after, h.y -= A.y.after);
      {
        const E = ss(h, p);
        x.x = p.width - E.x.before - E.x.after, x.y = p.height - E.y.before - E.y.after, C += E.x.before, h.x += E.x.before, V += E.y.before, h.y += E.y.before;
      }
      break;
    }
    const I = rs(w.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`,
      transformOrigin: `${w.origin.side} ${w.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: J($o(V)),
      left: e.isRtl.value ? void 0 : J($o(C)),
      right: e.isRtl.value ? J($o(-C)) : void 0,
      minWidth: J(I === "y" ? Math.min(i.value, g.width) : i.value),
      maxWidth: J(Rs(qe(x.x, i.value === 1 / 0 ? 0 : i.value, s.value))),
      maxHeight: J(Rs(qe(x.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: x,
      contentBox: h
    };
  }
  return q(() => [l.value, o.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => v()), be(() => {
    const g = v();
    if (!g) return;
    const {
      available: h,
      contentBox: y
    } = g;
    y.height > h.y && requestAnimationFrame(() => {
      v(), requestAnimationFrame(() => {
        v();
      });
    });
  }), {
    updateLocation: v
  };
}
function $o(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Rs(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let oi = !0;
const Ll = [];
function Np(e) {
  !oi || Ll.length ? (Ll.push(e), ii()) : (oi = !1, e(), ii());
}
let Hs = -1;
function ii() {
  cancelAnimationFrame(Hs), Hs = requestAnimationFrame(() => {
    const e = Ll.shift();
    e && e(), Ll.length ? ii() : oi = !0;
  });
}
const Pl = {
  none: null,
  close: zp,
  block: jp,
  reposition: Yp
}, Rp = $({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Pl
  }
}, "VOverlay-scroll-strategies");
function Hp(e, n) {
  if (!xe) return;
  let t;
  Ye(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = Vi(), await new Promise((a) => setTimeout(a)), t.active && t.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (a = Pl[e.scrollStrategy]) == null || a.call(Pl, n, e, t);
    }));
  }), ht(() => {
    t == null || t.stop();
  });
}
function zp(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  hd(e.targetEl.value ?? e.contentEl.value, n);
}
function jp(e, n) {
  var i;
  const t = (i = e.root.value) == null ? void 0 : i.offsetParent, a = [.../* @__PURE__ */ new Set([..._l(e.targetEl.value, n.contained ? t : void 0), ..._l(e.contentEl.value, n.contained ? t : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, o = ((r) => Hi(r) && r)(t || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", J(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", J(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", J(l)), r.classList.add("v-overlay-scroll-blocked");
  }), ht(() => {
    a.forEach((r, s) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), u = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), f = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -u, r.style.scrollBehavior = f;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Yp(e, n, t) {
  let a = !1, l = -1, o = -1;
  function i(r) {
    Np(() => {
      var u, f;
      const s = performance.now();
      (f = (u = e.updateLocation).value) == null || f.call(u, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    t.run(() => {
      hd(e.targetEl.value ?? e.contentEl.value, (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            i(r);
          });
        })) : i(r);
      });
    });
  }), ht(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(l);
  });
}
function hd(e, n) {
  const t = [document, ..._l(e)];
  t.forEach((a) => {
    a.addEventListener("scroll", n, {
      passive: !0
    });
  }), ht(() => {
    t.forEach((a) => {
      a.removeEventListener("scroll", n);
    });
  });
}
const ri = Symbol.for("vuetify:v-menu"), nr = $({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function ar(e, n) {
  let t = () => {
  };
  function a(i) {
    t == null || t();
    const r = Number(i ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      t = ug(r, () => {
        n == null || n(i), s(i);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function o() {
    return a(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: l,
    runCloseDelay: o
  };
}
const Wp = $({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...nr()
}, "VOverlay-activator");
function Up(e, n) {
  let {
    isActive: t,
    isTop: a
  } = n;
  const l = Ue("useActivator"), o = Y();
  let i = !1, r = !1, s = !0;
  const c = b(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), u = b(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: f,
    runCloseDelay: m
  } = ar(e, (x) => {
    x === (e.openOnHover && i || c.value && r) && !(e.openOnHover && t.value && !a.value) && (t.value !== x && (s = !0), t.value = x);
  }), v = Y(), g = {
    onClick: (x) => {
      x.stopPropagation(), o.value = x.currentTarget || x.target, t.value || (v.value = [x.clientX, x.clientY]), t.value = !t.value;
    },
    onMouseenter: (x) => {
      var P;
      (P = x.sourceCapabilities) != null && P.firesTouchEvents || (i = !0, o.value = x.currentTarget || x.target, f());
    },
    onMouseleave: (x) => {
      i = !1, m();
    },
    onFocus: (x) => {
      oa(x.target, ":focus-visible") !== !1 && (r = !0, x.stopPropagation(), o.value = x.currentTarget || x.target, f());
    },
    onBlur: (x) => {
      r = !1, x.stopPropagation(), m();
    }
  }, h = b(() => {
    const x = {};
    return u.value && (x.onClick = g.onClick), e.openOnHover && (x.onMouseenter = g.onMouseenter, x.onMouseleave = g.onMouseleave), c.value && (x.onFocus = g.onFocus, x.onBlur = g.onBlur), x;
  }), y = b(() => {
    const x = {};
    if (e.openOnHover && (x.onMouseenter = () => {
      i = !0, f();
    }, x.onMouseleave = () => {
      i = !1, m();
    }), c.value && (x.onFocusin = () => {
      r = !0, f();
    }, x.onFocusout = () => {
      r = !1, m();
    }), e.closeOnContentClick) {
      const P = pe(ri, null);
      x.onClick = () => {
        t.value = !1, P == null || P.closeParents();
      };
    }
    return x;
  }), k = b(() => {
    const x = {};
    return e.openOnHover && (x.onMouseenter = () => {
      s && (i = !0, s = !1, f());
    }, x.onMouseleave = () => {
      i = !1, m();
    }), x;
  });
  q(a, (x) => {
    x && (e.openOnHover && !i && (!c.value || !r) || c.value && !r && (!e.openOnHover || !i)) && (t.value = !1);
  }), q(t, (x) => {
    x || setTimeout(() => {
      v.value = void 0;
    });
  }, {
    flush: "post"
  });
  const p = Bl();
  Ye(() => {
    p.value && be(() => {
      o.value = p.el;
    });
  });
  const w = Bl(), T = b(() => e.target === "cursor" && v.value ? v.value : w.value ? w.el : gd(e.target, l) || o.value), C = b(() => Array.isArray(T.value) ? void 0 : T.value);
  let V;
  return q(() => !!e.activator, (x) => {
    x && xe ? (V = Vi(), V.run(() => {
      Kp(e, l, {
        activatorEl: o,
        activatorEvents: h
      });
    })) : V && V.stop();
  }, {
    flush: "post",
    immediate: !0
  }), ht(() => {
    V == null || V.stop();
  }), {
    activatorEl: o,
    activatorRef: p,
    target: T,
    targetEl: C,
    targetRef: w,
    activatorEvents: h,
    contentEvents: y,
    scrimEvents: k
  };
}
function Kp(e, n, t) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = t;
  q(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const u = r(c);
      u && i(u);
    }
    s && be(() => o());
  }, {
    immediate: !0
  }), q(() => e.activatorProps, () => {
    o();
  }), ht(() => {
    i();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && fg(s, B(l.value, c));
  }
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && vg(s, B(l.value, c));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = gd(s, n);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function gd(e, n) {
  var a, l;
  if (!e) return;
  let t;
  if (e === "parent") {
    let o = (l = (a = n == null ? void 0 : n.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; o != null && o.hasAttribute("data-no-activator"); )
      o = o.parentNode;
    t = o;
  } else typeof e == "string" ? t = document.querySelector(e) : "$el" in e ? t = e.$el : t = e;
  return t;
}
function yd() {
  if (!xe) return G(!1);
  const {
    ssr: e
  } = _t();
  if (e) {
    const n = G(!1);
    return mt(() => {
      n.value = !0;
    }), n;
  } else
    return G(!0);
}
const lr = $({
  eager: Boolean
}, "lazy");
function or(e, n) {
  const t = G(!1), a = b(() => t.value || e.eager || n.value);
  q(n, () => t.value = !0);
  function l() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: a,
    onAfterLeave: l
  };
}
function Gn() {
  const n = Ue("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const zs = Symbol.for("vuetify:stack"), Sa = Vt([]);
function Gp(e, n, t) {
  const a = Ue("useStack"), l = !t, o = pe(zs, void 0), i = Vt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Le(zs, i);
  const r = G(+n.value);
  xt(e, () => {
    var f;
    const u = (f = Sa.at(-1)) == null ? void 0 : f[1];
    r.value = u ? u + 10 : +n.value, l && Sa.push([a.uid, r.value]), o == null || o.activeChildren.add(a.uid), ht(() => {
      if (l) {
        const m = kt(Sa).findIndex((v) => v[0] === a.uid);
        Sa.splice(m, 1);
      }
      o == null || o.activeChildren.delete(a.uid);
    });
  });
  const s = G(!0);
  l && Ye(() => {
    var f;
    const u = ((f = Sa.at(-1)) == null ? void 0 : f[0]) === a.uid;
    setTimeout(() => s.value = u);
  });
  const c = b(() => !i.activeChildren.size);
  return {
    globalTop: Xa(s),
    localTop: c,
    stackStyles: b(() => ({
      zIndex: r.value
    }))
  };
}
function qp(e) {
  return {
    teleportTarget: b(() => {
      const t = e();
      if (t === !0 || !xe) return;
      const a = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (a == null) {
        Rl(`Unable to locate target ${t}`);
        return;
      }
      let l = a.querySelector(":scope > .v-overlay-container");
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Xp() {
  return !0;
}
function bd(e, n, t) {
  if (!e || pd(e, t) === !1) return !1;
  const a = ic(n);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof t.value == "object" && t.value.include || (() => []))();
  return l.push(n), !l.some((o) => o == null ? void 0 : o.contains(e.target));
}
function pd(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Xp)(e);
}
function Zp(e, n, t) {
  const a = typeof t.value == "function" ? t.value : t.value.handler;
  n._clickOutside.lastMousedownWasOutside && bd(e, n, t) && setTimeout(() => {
    pd(e, t) && a && a(e);
  }, 0);
}
function js(e, n) {
  const t = ic(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const kd = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (l) => Zp(l, e, n), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = bd(l, e, n);
    };
    js(e, (l) => {
      l.addEventListener("click", t, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: a
    };
  },
  unmounted(e, n) {
    e._clickOutside && (js(e, (t) => {
      var o;
      if (!t || !((o = e._clickOutside) != null && o[n.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[n.instance.$.uid];
      t.removeEventListener("click", a, !0), t.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[n.instance.$.uid]);
  }
};
function Jp(e) {
  const {
    modelValue: n,
    color: t,
    ...a
  } = e;
  return d(tn, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && d("div", B({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const sl = $({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...Wp(),
  ...Q(),
  ...et(),
  ...lr(),
  ..._p(),
  ...Rp(),
  ...ye(),
  ...Yt()
}, "VOverlay"), qt = L()({
  name: "VOverlay",
  directives: {
    ClickOutside: kd
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...sl()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      slots: t,
      attrs: a,
      emit: l
    } = n;
    const o = ie(e, "modelValue"), i = b({
      get: () => o.value,
      set: (Z) => {
        Z && e.disabled || (o.value = Z);
      }
    }), {
      themeClasses: r
    } = Ce(e), {
      rtlClasses: s,
      isRtl: c
    } = Qe(), {
      hasContent: u,
      onAfterLeave: f
    } = or(e, i), m = De(b(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: v,
      localTop: g,
      stackStyles: h
    } = Gp(i, O(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: y,
      activatorRef: k,
      target: p,
      targetEl: w,
      targetRef: T,
      activatorEvents: C,
      contentEvents: V,
      scrimEvents: x
    } = Up(e, {
      isActive: i,
      isTop: g
    }), {
      teleportTarget: P
    } = qp(() => {
      var ee;
      const Z = e.attach || e.contained;
      if (Z) return Z;
      const W = (ee = y == null ? void 0 : y.value) == null ? void 0 : ee.getRootNode();
      return W instanceof ShadowRoot ? W : !1;
    }), {
      dimensionStyles: S
    } = tt(e), I = yd(), {
      scopeId: D
    } = Gn();
    q(() => e.disabled, (Z) => {
      Z && (i.value = !1);
    });
    const M = Y(), A = Y(), E = Y(), {
      contentStyles: F,
      updateLocation: j
    } = Op(e, {
      isRtl: c,
      contentEl: E,
      target: p,
      isActive: i
    });
    Hp(e, {
      root: M,
      contentEl: E,
      targetEl: w,
      isActive: i,
      updateLocation: j
    });
    function X(Z) {
      l("click:outside", Z), e.persistent ? U() : i.value = !1;
    }
    function N(Z) {
      return i.value && v.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || Z.target === A.value);
    }
    xe && q(i, (Z) => {
      Z ? window.addEventListener("keydown", z) : window.removeEventListener("keydown", z);
    }, {
      immediate: !0
    }), wt(() => {
      xe && window.removeEventListener("keydown", z);
    });
    function z(Z) {
      var W, ee;
      Z.key === "Escape" && v.value && (e.persistent ? U() : (i.value = !1, (W = E.value) != null && W.contains(document.activeElement) && ((ee = y.value) == null || ee.focus())));
    }
    const _ = Ac();
    xt(() => e.closeOnBack, () => {
      $b(_, (Z) => {
        v.value && i.value ? (Z(!1), e.persistent ? U() : i.value = !1) : Z();
      });
    });
    const R = Y();
    q(() => i.value && (e.absolute || e.contained) && P.value == null, (Z) => {
      if (Z) {
        const W = Ri(M.value);
        W && W !== document.scrollingElement && (R.value = W.scrollTop);
      }
    });
    function U() {
      e.noClickAnimation || E.value && In(E.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Na
      });
    }
    function ae() {
      l("afterEnter");
    }
    function re() {
      f(), l("afterLeave");
    }
    return H(() => {
      var Z;
      return d(oe, null, [(Z = t.activator) == null ? void 0 : Z.call(t, {
        isActive: i.value,
        targetRef: T,
        props: B({
          ref: k
        }, C.value, e.activatorProps)
      }), I.value && u.value && d(lu, {
        disabled: !P.value,
        to: P.value
      }, {
        default: () => [d("div", B({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": i.value,
            "v-overlay--contained": e.contained
          }, r.value, s.value, e.class],
          style: [h.value, {
            "--v-overlay-opacity": e.opacity,
            top: J(R.value)
          }, e.style],
          ref: M
        }, D, a), [d(Jp, B({
          color: m,
          modelValue: i.value && !!e.scrim,
          ref: A
        }, x.value), null), d(vt, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: p.value,
          onAfterEnter: ae,
          onAfterLeave: re
        }, {
          default: () => {
            var W;
            return [Ie(d("div", B({
              ref: E,
              class: ["v-overlay__content", e.contentClass],
              style: [S.value, F.value]
            }, V.value, e.contentProps), [(W = t.default) == null ? void 0 : W.call(t, {
              isActive: i
            })]), [[It, i.value], [St("click-outside"), {
              handler: X,
              closeConditional: N,
              include: () => [y.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: y,
      scrimEl: A,
      target: p,
      animateClick: U,
      contentEl: E,
      globalTop: v,
      localTop: g,
      updateLocation: j
    };
  }
}), _o = Symbol("Forwarded refs");
function Oo(e, n) {
  let t = e;
  for (; t; ) {
    const a = Reflect.getOwnPropertyDescriptor(t, n);
    if (a) return a;
    t = Object.getPrototypeOf(t);
  }
}
function Lt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  return e[_o] = t, new Proxy(e, {
    get(l, o) {
      if (Reflect.has(l, o))
        return Reflect.get(l, o);
      if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
        for (const i of t)
          if (i.value && Reflect.has(i.value, o)) {
            const r = Reflect.get(i.value, o);
            return typeof r == "function" ? r.bind(i.value) : r;
          }
      }
    },
    has(l, o) {
      if (Reflect.has(l, o))
        return !0;
      if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return !1;
      for (const i of t)
        if (i.value && Reflect.has(i.value, o))
          return !0;
      return !1;
    },
    set(l, o, i) {
      if (Reflect.has(l, o))
        return Reflect.set(l, o, i);
      if (typeof o == "symbol" || o.startsWith("$") || o.startsWith("__")) return !1;
      for (const r of t)
        if (r.value && Reflect.has(r.value, o))
          return Reflect.set(r.value, o, i);
      return !1;
    },
    getOwnPropertyDescriptor(l, o) {
      var r;
      const i = Reflect.getOwnPropertyDescriptor(l, o);
      if (i) return i;
      if (!(typeof o == "symbol" || o.startsWith("$") || o.startsWith("__"))) {
        for (const s of t) {
          if (!s.value) continue;
          const c = Oo(s.value, o) ?? ("_" in s.value ? Oo((r = s.value._) == null ? void 0 : r.setupState, o) : void 0);
          if (c) return c;
        }
        for (const s of t) {
          const c = s.value && s.value[_o];
          if (!c) continue;
          const u = c.slice();
          for (; u.length; ) {
            const f = u.shift(), m = Oo(f.value, o);
            if (m) return m;
            const v = f.value && f.value[_o];
            v && u.push(...v);
          }
        }
      }
    }
  });
}
const Sd = $({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...We(sl({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Gl
    }
  }), ["absolute"])
}, "VMenu"), ua = L()({
  name: "VMenu",
  props: Sd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      scopeId: l
    } = Gn(), o = lt(), i = b(() => e.id || `v-menu-${o}`), r = Y(), s = pe(ri, null), c = G(0);
    Le(ri, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents(h) {
        setTimeout(() => {
          !c.value && !e.persistent && (h == null || h && !cg(h, r.value.contentEl)) && (a.value = !1, s == null || s.closeParents());
        }, 40);
      }
    });
    async function u(h) {
      var p, w, T;
      const y = h.relatedTarget, k = h.target;
      await be(), a.value && y !== k && ((p = r.value) != null && p.contentEl) && // We're the topmost menu
      ((w = r.value) != null && w.globalTop) && // It isn't the document or the menu body
      ![document, r.value.contentEl].includes(k) && // It isn't inside the menu body
      !r.value.contentEl.contains(k) && ((T = Fa(r.value.contentEl)[0]) == null || T.focus());
    }
    q(a, (h) => {
      h ? (s == null || s.register(), document.addEventListener("focusin", u, {
        once: !0
      })) : (s == null || s.unregister(), document.removeEventListener("focusin", u));
    });
    function f(h) {
      s == null || s.closeParents(h);
    }
    function m(h) {
      var y, k, p;
      if (!e.disabled)
        if (h.key === "Tab" || h.key === "Enter" && !e.closeOnContentClick) {
          if (h.key === "Enter" && (h.target instanceof HTMLTextAreaElement || h.target instanceof HTMLInputElement && h.target.closest("form"))) return;
          h.key === "Enter" && h.preventDefault(), Yu(Fa((y = r.value) == null ? void 0 : y.contentEl, !1), h.shiftKey ? "prev" : "next", (T) => T.tabIndex >= 0) || (a.value = !1, (p = (k = r.value) == null ? void 0 : k.activatorEl) == null || p.focus());
        } else ["Enter", " "].includes(h.key) && e.closeOnContentClick && (a.value = !1, s == null || s.closeParents());
    }
    function v(h) {
      var k;
      if (e.disabled) return;
      const y = (k = r.value) == null ? void 0 : k.contentEl;
      y && a.value ? h.key === "ArrowDown" ? (h.preventDefault(), la(y, "next")) : h.key === "ArrowUp" && (h.preventDefault(), la(y, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (a.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => v(h))));
    }
    const g = b(() => B({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": i.value,
      onKeydown: v
    }, e.activatorProps));
    return H(() => {
      const h = qt.filterProps(e);
      return d(qt, B({
        ref: r,
        id: i.value,
        class: ["v-menu", e.class],
        style: e.style
      }, h, {
        modelValue: a.value,
        "onUpdate:modelValue": (y) => a.value = y,
        absolute: !0,
        activatorProps: g.value,
        "onClick:outside": f,
        onKeydown: m
      }, l), {
        activator: t.activator,
        default: function() {
          for (var y = arguments.length, k = new Array(y), p = 0; p < y; p++)
            k[p] = arguments[p];
          return d(he, {
            root: "VMenu"
          }, {
            default: () => {
              var w;
              return [(w = t.default) == null ? void 0 : w.call(t, ...k)];
            }
          });
        }
      });
    }), Lt({
      id: i,
      ΨopenChildren: c
    }, r);
  }
}), Qp = $({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...Q(),
  ...Yt({
    transition: {
      component: Ki
    }
  })
}, "VCounter"), ao = L()({
  name: "VCounter",
  functional: !0,
  props: Qp(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return H(() => d(vt, {
      transition: e.transition
    }, {
      default: () => [Ie(d("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[It, e.active]])]
    })), {};
  }
}), e0 = $({
  floating: Boolean,
  ...Q()
}, "VFieldLabel"), Ca = L()({
  name: "VFieldLabel",
  props: e0(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => d(ha, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), t0 = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ul = $({
  appendInnerIcon: ue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: ue,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: Boolean,
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: ue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => t0.includes(e)
  },
  "onClick:clear": at(),
  "onClick:appendInner": at(),
  "onClick:prependInner": at(),
  ...Q(),
  ...Jl(),
  ...Fe(),
  ...ye()
}, "VField"), ya = L()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...il(),
    ...ul()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      themeClasses: o
    } = Ce(e), {
      loaderClasses: i
    } = nl(e), {
      focusClasses: r,
      isFocused: s,
      focus: c,
      blur: u
    } = un(e), {
      InputIcon: f
    } = Wc(e), {
      roundedClasses: m
    } = ze(e), {
      rtlClasses: v
    } = Qe(), g = b(() => e.singleLine || e.centerAffix), h = b(() => e.dirty || e.active), y = b(() => !g.value && !!(e.label || l.label)), k = lt(), p = b(() => e.id || `input-${k}`), w = b(() => `${p.value}-messages`), T = Y(), C = Y(), V = Y(), x = b(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: P,
      backgroundColorStyles: S
    } = De(O(e, "bgColor")), {
      textColorClasses: I,
      textColorStyles: D
    } = it(b(() => e.error || e.disabled ? void 0 : h.value && s.value ? e.color : e.baseColor));
    q(h, (F) => {
      if (y.value) {
        const j = T.value.$el, X = C.value.$el;
        requestAnimationFrame(() => {
          const N = Ei(j), z = X.getBoundingClientRect(), _ = z.x - N.x, R = z.y - N.y - (N.height / 2 - z.height / 2), U = z.width / 0.75, ae = Math.abs(U - N.width) > 1 ? {
            maxWidth: J(U)
          } : void 0, re = getComputedStyle(j), Z = getComputedStyle(X), W = parseFloat(re.transitionDuration) * 1e3 || 150, ee = parseFloat(Z.getPropertyValue("--v-field-label-scale")), Ve = Z.getPropertyValue("color");
          j.style.visibility = "visible", X.style.visibility = "hidden", In(j, {
            transform: `translate(${_}px, ${R}px) scale(${ee})`,
            color: Ve,
            ...ae
          }, {
            duration: W,
            easing: Na,
            direction: F ? "normal" : "reverse"
          }).finished.then(() => {
            j.style.removeProperty("visibility"), X.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const M = b(() => ({
      isActive: h,
      isFocused: s,
      controlRef: V,
      blur: u,
      focus: c
    }));
    function A(F) {
      F.target !== document.activeElement && F.preventDefault();
    }
    function E(F) {
      var j;
      F.key !== "Enter" && F.key !== " " || (F.preventDefault(), F.stopPropagation(), (j = e["onClick:clear"]) == null || j.call(e, new MouseEvent("click")));
    }
    return H(() => {
      var _, R, U;
      const F = e.variant === "outlined", j = !!(l["prepend-inner"] || e.prependInnerIcon), X = !!(e.clearable || l.clear), N = !!(l["append-inner"] || e.appendInnerIcon || X), z = () => l.label ? l.label({
        ...M.value,
        label: e.label,
        props: {
          for: p.value
        }
      }) : e.label;
      return d("div", B({
        class: ["v-field", {
          "v-field--active": h.value,
          "v-field--appended": N,
          "v-field--center-affix": e.centerAffix,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": j,
          "v-field--reverse": e.reverse,
          "v-field--single-line": g.value,
          "v-field--no-label": !z(),
          [`v-field--variant-${e.variant}`]: !0
        }, o.value, P.value, r.value, i.value, m.value, v.value, e.class],
        style: [S.value, e.style],
        onClick: A
      }, t), [d("div", {
        class: "v-field__overlay"
      }, null), d(al, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), j && d("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && d(f, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (_ = l["prepend-inner"]) == null ? void 0 : _.call(l, M.value)]), d("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && d(Ca, {
        key: "floating-label",
        ref: C,
        class: [I.value],
        floating: !0,
        for: p.value,
        style: D.value
      }, {
        default: () => [z()]
      }), d(Ca, {
        ref: T,
        for: p.value
      }, {
        default: () => [z()]
      }), (R = l.default) == null ? void 0 : R.call(l, {
        ...M.value,
        props: {
          id: p.value,
          class: "v-field__input",
          "aria-describedby": w.value
        },
        focus: c,
        blur: u
      })]), X && d(Gi, {
        key: "clear"
      }, {
        default: () => [Ie(d("div", {
          class: "v-field__clearable",
          onMousedown: (ae) => {
            ae.preventDefault(), ae.stopPropagation();
          }
        }, [d(he, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...M.value,
            props: {
              onKeydown: E,
              onFocus: c,
              onBlur: u,
              onClick: e["onClick:clear"]
            }
          }) : d(f, {
            name: "clear",
            onKeydown: E,
            onFocus: c,
            onBlur: u
          }, null)]
        })]), [[It, e.dirty]])]
      }), N && d("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(U = l["append-inner"]) == null ? void 0 : U.call(l, M.value), e.appendInnerIcon && d(f, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), d("div", {
        class: ["v-field__outline", I.value],
        style: D.value
      }, [F && d(oe, null, [d("div", {
        class: "v-field__outline__start"
      }, null), y.value && d("div", {
        class: "v-field__outline__notch"
      }, [d(Ca, {
        ref: C,
        floating: !0,
        for: p.value
      }, {
        default: () => [z()]
      })]), d("div", {
        class: "v-field__outline__end"
      }, null)]), x.value && y.value && d(Ca, {
        ref: C,
        floating: !0,
        for: p.value
      }, {
        default: () => [z()]
      })])]);
    }), {
      controlRef: V
    };
  }
});
function ir(e) {
  const n = Object.keys(ya.props).filter((t) => !zl(t) && t !== "class" && t !== "style");
  return $i(e, n);
}
const n0 = ["color", "file", "time", "date", "datetime-local", "week", "month"], lo = $({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...cn(),
  ...ul()
}, "VTextField"), An = L()({
  name: "VTextField",
  directives: {
    Intersect: tl
  },
  inheritAttrs: !1,
  props: lo(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const o = ie(e, "modelValue"), {
      isFocused: i,
      focus: r,
      blur: s
    } = un(e), c = b(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : typeof e.counterValue == "number" ? e.counterValue : (o.value ?? "").toString().length), u = b(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = b(() => ["plain", "underlined"].includes(e.variant));
    function m(V, x) {
      var P, S;
      !e.autofocus || !V || (S = (P = x[0].target) == null ? void 0 : P.focus) == null || S.call(P);
    }
    const v = Y(), g = Y(), h = Y(), y = b(() => n0.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
    function k() {
      var V;
      h.value !== document.activeElement && ((V = h.value) == null || V.focus()), i.value || r();
    }
    function p(V) {
      a("mousedown:control", V), V.target !== h.value && (k(), V.preventDefault());
    }
    function w(V) {
      k(), a("click:control", V);
    }
    function T(V) {
      V.stopPropagation(), k(), be(() => {
        o.value = null, Oi(e["onClick:clear"], V);
      });
    }
    function C(V) {
      var P;
      const x = V.target;
      if (o.value = x.value, (P = e.modelModifiers) != null && P.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const S = [x.selectionStart, x.selectionEnd];
        be(() => {
          x.selectionStart = S[0], x.selectionEnd = S[1];
        });
      }
    }
    return H(() => {
      const V = !!(l.counter || e.counter !== !1 && e.counter != null), x = !!(V || l.details), [P, S] = pn(t), {
        modelValue: I,
        ...D
      } = rt.filterProps(e), M = ir(e);
      return d(rt, B({
        ref: v,
        modelValue: o.value,
        "onUpdate:modelValue": (A) => o.value = A,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, P, D, {
        focused: i.value
      }), {
        ...l,
        default: (A) => {
          let {
            id: E,
            isDisabled: F,
            isDirty: j,
            isReadonly: X,
            isValid: N
          } = A;
          return d(ya, B({
            ref: g,
            onMousedown: p,
            onClick: w,
            "onClick:clear": T,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, M, {
            id: E.value,
            active: y.value || j.value,
            dirty: j.value || e.dirty,
            disabled: F.value,
            focused: i.value,
            centerAffix: e.centerAffix,
            error: N.value === !1
          }), {
            ...l,
            default: (z) => {
              let {
                props: {
                  class: _,
                  ...R
                }
              } = z;
              const U = Ie(d("input", B({
                ref: h,
                value: o.value,
                onInput: C,
                autofocus: e.autofocus,
                readonly: X.value,
                disabled: F.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: k,
                onBlur: s
              }, R, S), null), [[St("intersect"), {
                handler: m
              }, null, {
                once: !0
              }]]);
              return d(oe, null, [e.prefix && d("span", {
                class: "v-text-field__prefix"
              }, [d("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? d("div", {
                class: _,
                "data-no-activator": ""
              }, [l.default(), U]) : lv(U, {
                class: _
              }), e.suffix && d("span", {
                class: "v-text-field__suffix"
              }, [d("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: x ? (A) => {
          var E;
          return d(oe, null, [(E = l.details) == null ? void 0 : E.call(l, A), V && d(oe, null, [d("span", null, null), d(ao, {
            active: e.persistentCounter || i.value,
            value: c.value,
            max: u.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), Lt({}, v, g, h);
  }
}), a0 = $({
  renderless: Boolean,
  ...Q()
}, "VVirtualScrollItem"), wd = L()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: a0(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      resizeRef: o,
      contentRect: i
    } = jt(void 0, "border");
    q(() => {
      var r;
      return (r = i.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && a("update:height", r);
    }), H(() => {
      var r, s;
      return e.renderless ? d(oe, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: o
      })]) : d("div", B({
        ref: o,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(s = l.default) == null ? void 0 : s.call(l)]);
    });
  }
}), l0 = -1, o0 = 1, Eo = 100, Cd = $({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function xd(e, n) {
  const t = _t(), a = G(0);
  Ye(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = G(0), o = G(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (a.value || 16)
  ) || 1), i = G(0), r = G(0), s = Y(), c = Y();
  let u = 0;
  const {
    resizeRef: f,
    contentRect: m
  } = jt();
  Ye(() => {
    f.value = s.value;
  });
  const v = b(() => {
    var z;
    return s.value === document.documentElement ? t.height.value : ((z = m.value) == null ? void 0 : z.height) || parseInt(e.height) || 0;
  }), g = b(() => !!(s.value && c.value && v.value && a.value));
  let h = Array.from({
    length: n.value.length
  }), y = Array.from({
    length: n.value.length
  });
  const k = G(0);
  let p = -1;
  function w(z) {
    return h[z] || a.value;
  }
  const T = og(() => {
    const z = performance.now();
    y[0] = 0;
    const _ = n.value.length;
    for (let R = 1; R <= _ - 1; R++)
      y[R] = (y[R - 1] || 0) + w(R - 1);
    k.value = Math.max(k.value, performance.now() - z);
  }, k), C = q(g, (z) => {
    z && (C(), u = c.value.offsetTop, T.immediate(), F(), ~p && be(() => {
      xe && window.requestAnimationFrame(() => {
        X(p), p = -1;
      });
    }));
  });
  ht(() => {
    T.clear();
  });
  function V(z, _) {
    const R = h[z], U = a.value;
    a.value = U ? Math.min(a.value, _) : _, (R !== _ || U !== a.value) && (h[z] = _, T());
  }
  function x(z) {
    return z = qe(z, 0, n.value.length - 1), y[z] || 0;
  }
  function P(z) {
    return i0(y, z);
  }
  let S = 0, I = 0, D = 0;
  q(v, (z, _) => {
    _ && (F(), z < _ && requestAnimationFrame(() => {
      I = 0, F();
    }));
  });
  function M() {
    if (!s.value || !c.value) return;
    const z = s.value.scrollTop, _ = performance.now();
    _ - D > 500 ? (I = Math.sign(z - S), u = c.value.offsetTop) : I = z - S, S = z, D = _, F();
  }
  function A() {
    !s.value || !c.value || (I = 0, D = 0, F());
  }
  let E = -1;
  function F() {
    cancelAnimationFrame(E), E = requestAnimationFrame(j);
  }
  function j() {
    if (!s.value || !v.value) return;
    const z = S - u, _ = Math.sign(I), R = Math.max(0, z - Eo), U = qe(P(R), 0, n.value.length), ae = z + v.value + Eo, re = qe(P(ae) + 1, U + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (_ !== l0 || U < l.value) && (_ !== o0 || re > o.value)
    ) {
      const Z = x(l.value) - x(U), W = x(re) - x(o.value);
      Math.max(Z, W) > Eo ? (l.value = U, o.value = re) : (U <= 0 && (l.value = U), re >= n.value.length && (o.value = re));
    }
    i.value = x(l.value), r.value = x(n.value.length) - x(o.value);
  }
  function X(z) {
    const _ = x(z);
    !s.value || z && !_ ? p = z : s.value.scrollTop = _;
  }
  const N = b(() => n.value.slice(l.value, o.value).map((z, _) => ({
    raw: z,
    index: _ + l.value
  })));
  return q(n, () => {
    h = Array.from({
      length: n.value.length
    }), y = Array.from({
      length: n.value.length
    }), T.immediate(), F();
  }, {
    deep: !0
  }), {
    containerRef: s,
    markerRef: c,
    computedItems: N,
    paddingTop: i,
    paddingBottom: r,
    scrollToIndex: X,
    handleScroll: M,
    handleScrollend: A,
    handleItemResize: V
  };
}
function i0(e, n) {
  let t = e.length - 1, a = 0, l = 0, o = null, i = -1;
  if (e[t] < n)
    return t;
  for (; a <= t; )
    if (l = a + t >> 1, o = e[l], o > n)
      t = l - 1;
    else if (o < n)
      i = l, a = l + 1;
    else return o === n ? l : a;
  return i;
}
const r0 = $({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...Cd(),
  ...Q(),
  ...et()
}, "VVirtualScroll"), oo = L()({
  name: "VVirtualScroll",
  props: r0(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ue("VVirtualScroll"), {
      dimensionStyles: l
    } = tt(e), {
      containerRef: o,
      markerRef: i,
      handleScroll: r,
      handleScrollend: s,
      handleItemResize: c,
      scrollToIndex: u,
      paddingTop: f,
      paddingBottom: m,
      computedItems: v
    } = xd(e, O(e, "items"));
    return xt(() => e.renderless, () => {
      function g() {
        var k, p;
        const y = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[y]("scroll", r, {
          passive: !0
        }), document[y]("scrollend", s)) : ((k = o.value) == null || k[y]("scroll", r, {
          passive: !0
        }), (p = o.value) == null || p[y]("scrollend", s));
      }
      mt(() => {
        o.value = Ri(a.vnode.el, !0), g(!0);
      }), ht(g);
    }), H(() => {
      const g = v.value.map((h) => d(wd, {
        key: h.index,
        renderless: e.renderless,
        "onUpdate:height": (y) => c(h.index, y)
      }, {
        default: (y) => {
          var k;
          return (k = t.default) == null ? void 0 : k.call(t, {
            item: h.raw,
            index: h.index,
            ...y
          });
        }
      }));
      return e.renderless ? d(oe, null, [d("div", {
        ref: i,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: J(f.value)
        }
      }, null), g, d("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: J(m.value)
        }
      }, null)]) : d("div", {
        ref: o,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: r,
        onScrollend: s,
        style: [l.value, e.style]
      }, [d("div", {
        ref: i,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: J(f.value),
          paddingBottom: J(m.value)
        }
      }, [g])]);
    }), {
      scrollToIndex: u
    };
  }
});
function rr(e, n) {
  const t = G(!1);
  let a;
  function l(r) {
    cancelAnimationFrame(a), t.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  async function o() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (t.value) {
        const s = q(t, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function i(r) {
    var u, f;
    if (r.key === "Tab" && ((u = n.value) == null || u.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = (f = e.value) == null ? void 0 : f.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({
      top: r.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await o();
    const c = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const m = s.getBoundingClientRect().top;
      for (const v of c)
        if (v.getBoundingClientRect().top >= m) {
          v.focus();
          break;
        }
    } else {
      const m = s.getBoundingClientRect().bottom;
      for (const v of [...c].reverse())
        if (v.getBoundingClientRect().bottom <= m) {
          v.focus();
          break;
        }
    }
  }
  return {
    onListScroll: l,
    onListKeydown: i
  };
}
const sr = $({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: ue,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...dd({
    itemChildren: !1
  })
}, "Select"), s0 = $({
  ...sr(),
  ...We(lo({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Yt({
    transition: {
      component: Gl
    }
  })
}, "VSelect"), ur = L()({
  name: "VSelect",
  props: s0(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ke(), l = Y(), o = Y(), i = Y(), r = ie(e, "menu"), s = b({
      get: () => r.value,
      set: (N) => {
        var z;
        r.value && !N && ((z = o.value) != null && z.ΨopenChildren) || (r.value = N);
      }
    }), {
      items: c,
      transformIn: u,
      transformOut: f
    } = tr(e), m = ie(e, "modelValue", [], (N) => u(N === null ? [null] : Ne(N)), (N) => {
      const z = f(N);
      return e.multiple ? z : z[0] ?? null;
    }), v = b(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), g = to(), h = b(() => m.value.map((N) => N.value)), y = G(!1), k = b(() => s.value ? e.closeText : e.openText);
    let p = "", w;
    const T = b(() => e.hideSelected ? c.value.filter((N) => !m.value.some((z) => e.valueComparator(z, N))) : c.value), C = b(() => e.hideNoData && !T.value.length || e.readonly || (g == null ? void 0 : g.isReadonly.value)), V = b(() => {
      var N;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((N = e.menuProps) == null ? void 0 : N.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), x = Y(), {
      onListScroll: P,
      onListKeydown: S
    } = rr(x, l);
    function I(N) {
      e.openOnClear && (s.value = !0);
    }
    function D() {
      C.value || (s.value = !s.value);
    }
    function M(N) {
      var ae, re;
      if (!N.key || e.readonly || g != null && g.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(N.key) && N.preventDefault(), ["Enter", "ArrowDown", " "].includes(N.key) && (s.value = !0), ["Escape", "Tab"].includes(N.key) && (s.value = !1), N.key === "Home" ? (ae = x.value) == null || ae.focus("first") : N.key === "End" && ((re = x.value) == null || re.focus("last"));
      const z = 1e3;
      function _(Z) {
        const W = Z.key.length === 1, ee = !Z.ctrlKey && !Z.metaKey && !Z.altKey;
        return W && ee;
      }
      if (e.multiple || !_(N)) return;
      const R = performance.now();
      R - w > z && (p = ""), p += N.key.toLowerCase(), w = R;
      const U = c.value.find((Z) => Z.title.toLowerCase().startsWith(p));
      if (U !== void 0) {
        m.value = [U];
        const Z = T.value.indexOf(U);
        xe && window.requestAnimationFrame(() => {
          var W;
          Z >= 0 && ((W = i.value) == null || W.scrollToIndex(Z));
        });
      }
    }
    function A(N) {
      let z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!N.props.disabled)
        if (e.multiple) {
          const _ = m.value.findIndex((U) => e.valueComparator(U.value, N.value)), R = z ?? !~_;
          if (~_) {
            const U = R ? [...m.value, N] : [...m.value];
            U.splice(_, 1), m.value = U;
          } else R && (m.value = [...m.value, N]);
        } else {
          const _ = z !== !1;
          m.value = _ ? [N] : [], be(() => {
            s.value = !1;
          });
        }
    }
    function E(N) {
      var z;
      (z = x.value) != null && z.$el.contains(N.relatedTarget) || (s.value = !1);
    }
    function F() {
      var N;
      y.value && ((N = l.value) == null || N.focus());
    }
    function j(N) {
      y.value = !0;
    }
    function X(N) {
      if (N == null) m.value = [];
      else if (oa(l.value, ":autofill") || oa(l.value, ":-webkit-autofill")) {
        const z = c.value.find((_) => _.title === N);
        z && A(z);
      } else l.value && (l.value.value = "");
    }
    return q(s, () => {
      if (!e.hideSelected && s.value && m.value.length) {
        const N = T.value.findIndex((z) => m.value.some((_) => e.valueComparator(_.value, z.value)));
        xe && window.requestAnimationFrame(() => {
          var z;
          N >= 0 && ((z = i.value) == null || z.scrollToIndex(N));
        });
      }
    }), q(() => e.items, (N, z) => {
      s.value || y.value && !z.length && N.length && (s.value = !0);
    }), H(() => {
      const N = !!(e.chips || t.chip), z = !!(!e.hideNoData || T.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), _ = m.value.length > 0, R = An.filterProps(e), U = _ || !y.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return d(An, B({
        ref: l
      }, R, {
        modelValue: m.value.map((ae) => ae.props.value).join(", "),
        "onUpdate:modelValue": X,
        focused: y.value,
        "onUpdate:focused": (ae) => y.value = ae,
        validationValue: m.externalValue,
        counterValue: v.value,
        dirty: _,
        class: ["v-select", {
          "v-select--active-menu": s.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": m.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: U,
        "onClick:clear": I,
        "onMousedown:control": D,
        onBlur: E,
        onKeydown: M,
        "aria-label": a(k.value),
        title: a(k.value)
      }), {
        ...t,
        default: () => d(oe, null, [d(ua, B({
          ref: o,
          modelValue: s.value,
          "onUpdate:modelValue": (ae) => s.value = ae,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: C.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: F
        }, V.value), {
          default: () => [z && d(no, B({
            ref: x,
            selected: h.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ae) => ae.preventDefault(),
            onKeydown: S,
            onFocusin: j,
            onScrollPassive: P,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var ae, re, Z;
              return [(ae = t["prepend-item"]) == null ? void 0 : ae.call(t), !T.value.length && !e.hideNoData && (((re = t["no-data"]) == null ? void 0 : re.call(t)) ?? d(on, {
                title: a(e.noDataText)
              }, null)), d(oo, {
                ref: i,
                renderless: !0,
                items: T.value
              }, {
                default: (W) => {
                  var me;
                  let {
                    item: ee,
                    index: Ve,
                    itemRef: Me
                  } = W;
                  const te = B(ee.props, {
                    ref: Me,
                    key: Ve,
                    onClick: () => A(ee, null)
                  });
                  return ((me = t.item) == null ? void 0 : me.call(t, {
                    item: ee,
                    index: Ve,
                    props: te
                  })) ?? d(on, B(te, {
                    role: "option"
                  }), {
                    prepend: (K) => {
                      let {
                        isSelected: ne
                      } = K;
                      return d(oe, null, [e.multiple && !e.hideSelected ? d(ln, {
                        key: ee.value,
                        modelValue: ne,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, ee.props.prependAvatar && d($t, {
                        image: ee.props.prependAvatar
                      }, null), ee.props.prependIcon && d(we, {
                        icon: ee.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (Z = t["append-item"]) == null ? void 0 : Z.call(t)];
            }
          })]
        }), m.value.map((ae, re) => {
          function Z(Me) {
            Me.stopPropagation(), Me.preventDefault(), A(ae, !1);
          }
          const W = {
            "onClick:close": Z,
            onKeydown(Me) {
              Me.key !== "Enter" && Me.key !== " " || (Me.preventDefault(), Me.stopPropagation(), Z(Me));
            },
            onMousedown(Me) {
              Me.preventDefault(), Me.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, ee = N ? !!t.chip : !!t.selection, Ve = ee ? jl(N ? t.chip({
            item: ae,
            index: re,
            props: W
          }) : t.selection({
            item: ae,
            index: re
          })) : void 0;
          if (!(ee && !Ve))
            return d("div", {
              key: ae.value,
              class: "v-select__selection"
            }, [N ? t.chip ? d(he, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ae.title
                }
              }
            }, {
              default: () => [Ve]
            }) : d(ga, B({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ae.title,
              disabled: ae.props.disabled
            }, W), null) : Ve ?? d("span", {
              class: "v-select__selection-text"
            }, [ae.title, e.multiple && re < m.value.length - 1 && d("span", {
              class: "v-select__selection-comma"
            }, [dt(",")])])]);
        })]),
        "append-inner": function() {
          var W;
          for (var ae = arguments.length, re = new Array(ae), Z = 0; Z < ae; Z++)
            re[Z] = arguments[Z];
          return d(oe, null, [(W = t["append-inner"]) == null ? void 0 : W.call(t, ...re), e.menuIcon ? d(we, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), Lt({
      isFocused: y,
      menu: s,
      select: A
    }, l);
  }
}), u0 = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), cl = $({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function c0(e, n, t) {
  var r;
  const a = [], l = (t == null ? void 0 : t.default) ?? u0, o = t != null && t.filterKeys ? Ne(t.filterKeys) : !1, i = Object.keys((t == null ? void 0 : t.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length)) return a;
  e: for (let s = 0; s < e.length; s++) {
    const [c, u = c] = Ne(e[s]), f = {}, m = {};
    let v = -1;
    if ((n || i > 0) && !(t != null && t.noFilter)) {
      if (typeof c == "object") {
        const y = o || Object.keys(u);
        for (const k of y) {
          const p = Ze(u, k), w = (r = t == null ? void 0 : t.customKeyFilter) == null ? void 0 : r[k];
          if (v = w ? w(p, n, c) : l(p, n, c), v !== -1 && v !== !1)
            w ? f[k] = v : m[k] = v;
          else if ((t == null ? void 0 : t.filterMode) === "every")
            continue e;
        }
      } else
        v = l(c, n, c), v !== -1 && v !== !1 && (m.title = v);
      const g = Object.keys(m).length, h = Object.keys(f).length;
      if (!g && !h || (t == null ? void 0 : t.filterMode) === "union" && h !== i && !g || (t == null ? void 0 : t.filterMode) === "intersection" && (h !== i || !g)) continue;
    }
    a.push({
      index: s,
      matches: {
        ...m,
        ...f
      }
    });
  }
  return a;
}
function dl(e, n, t, a) {
  const l = Y([]), o = Y(/* @__PURE__ */ new Map()), i = b(() => a != null && a.transform ? pt(n).map((s) => [s, a.transform(s)]) : pt(n));
  Ye(() => {
    const s = typeof t == "function" ? t() : pt(t), c = typeof s != "string" && typeof s != "number" ? "" : String(s), u = c0(i.value, c, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...pt(a == null ? void 0 : a.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), f = pt(n), m = [], v = /* @__PURE__ */ new Map();
    u.forEach((g) => {
      let {
        index: h,
        matches: y
      } = g;
      const k = f[h];
      m.push(k), v.set(k.value, y);
    }), l.value = m, o.value = v;
  });
  function r(s) {
    return o.value.get(s.value);
  }
  return {
    filteredItems: l,
    filteredMatches: o,
    getMatches: r
  };
}
function d0(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? d(oe, null, [d("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(0, n)]), d("span", {
    class: "v-autocomplete__mask"
  }, [e.substr(n, t)]), d("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(n + t)])]) : e;
}
const f0 = $({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...cl({
    filterKeys: ["title"]
  }),
  ...sr(),
  ...We(lo({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Yt({
    transition: !1
  })
}, "VAutocomplete"), v0 = L()({
  name: "VAutocomplete",
  props: f0(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ke(), l = Y(), o = G(!1), i = G(!0), r = G(!1), s = Y(), c = Y(), u = ie(e, "menu"), f = b({
      get: () => u.value,
      set: (te) => {
        var me;
        u.value && !te && ((me = s.value) != null && me.ΨopenChildren) || (u.value = te);
      }
    }), m = G(-1), v = b(() => {
      var te;
      return (te = l.value) == null ? void 0 : te.color;
    }), g = b(() => f.value ? e.closeText : e.openText), {
      items: h,
      transformIn: y,
      transformOut: k
    } = tr(e), {
      textColorClasses: p,
      textColorStyles: w
    } = it(v), T = ie(e, "search", ""), C = ie(e, "modelValue", [], (te) => y(te === null ? [null] : Ne(te)), (te) => {
      const me = k(te);
      return e.multiple ? me : me[0] ?? null;
    }), V = b(() => typeof e.counterValue == "function" ? e.counterValue(C.value) : typeof e.counterValue == "number" ? e.counterValue : C.value.length), x = to(), {
      filteredItems: P,
      getMatches: S
    } = dl(e, h, () => i.value ? "" : T.value), I = b(() => e.hideSelected ? P.value.filter((te) => !C.value.some((me) => me.value === te.value)) : P.value), D = b(() => !!(e.chips || t.chip)), M = b(() => D.value || !!t.selection), A = b(() => C.value.map((te) => te.props.value)), E = b(() => {
      var me;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && T.value === ((me = I.value[0]) == null ? void 0 : me.title)) && I.value.length > 0 && !i.value && !r.value;
    }), F = b(() => e.hideNoData && !I.value.length || e.readonly || (x == null ? void 0 : x.isReadonly.value)), j = Y(), {
      onListScroll: X,
      onListKeydown: N
    } = rr(j, l);
    function z(te) {
      e.openOnClear && (f.value = !0), T.value = "";
    }
    function _() {
      F.value || (f.value = !0);
    }
    function R(te) {
      F.value || (o.value && (te.preventDefault(), te.stopPropagation()), f.value = !f.value);
    }
    function U(te) {
      var ne, ce, se;
      if (e.readonly || x != null && x.isReadonly.value) return;
      const me = l.value.selectionStart, K = C.value.length;
      if ((m.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(te.key)) && te.preventDefault(), ["Enter", "ArrowDown"].includes(te.key) && (f.value = !0), ["Escape"].includes(te.key) && (f.value = !1), E.value && ["Enter", "Tab"].includes(te.key) && !C.value.some((fe) => {
        let {
          value: Be
        } = fe;
        return Be === I.value[0].value;
      }) && Me(I.value[0]), te.key === "ArrowDown" && E.value && ((ne = j.value) == null || ne.focus("next")), ["Backspace", "Delete"].includes(te.key)) {
        if (!e.multiple && M.value && C.value.length > 0 && !T.value) return Me(C.value[0], !1);
        if (~m.value) {
          const fe = m.value;
          Me(C.value[m.value], !1), m.value = fe >= K - 1 ? K - 2 : fe;
        } else te.key === "Backspace" && !T.value && (m.value = K - 1);
      }
      if (e.multiple) {
        if (te.key === "ArrowLeft") {
          if (m.value < 0 && me > 0) return;
          const fe = m.value > -1 ? m.value - 1 : K - 1;
          C.value[fe] ? m.value = fe : (m.value = -1, l.value.setSelectionRange((ce = T.value) == null ? void 0 : ce.length, (se = T.value) == null ? void 0 : se.length));
        }
        if (te.key === "ArrowRight") {
          if (m.value < 0) return;
          const fe = m.value + 1;
          C.value[fe] ? m.value = fe : (m.value = -1, l.value.setSelectionRange(0, 0));
        }
      }
    }
    function ae(te) {
      if (oa(l.value, ":autofill") || oa(l.value, ":-webkit-autofill")) {
        const me = h.value.find((K) => K.title === te.target.value);
        me && Me(me);
      }
    }
    function re() {
      var te;
      o.value && (i.value = !0, (te = l.value) == null || te.focus());
    }
    function Z(te) {
      o.value = !0, setTimeout(() => {
        r.value = !0;
      });
    }
    function W(te) {
      r.value = !1;
    }
    function ee(te) {
      (te == null || te === "" && !e.multiple && !M.value) && (C.value = []);
    }
    const Ve = G(!1);
    function Me(te) {
      let me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!te || te.props.disabled))
        if (e.multiple) {
          const K = C.value.findIndex((ce) => e.valueComparator(ce.value, te.value)), ne = me ?? !~K;
          if (~K) {
            const ce = ne ? [...C.value, te] : [...C.value];
            ce.splice(K, 1), C.value = ce;
          } else ne && (C.value = [...C.value, te]);
          e.clearOnSelect && (T.value = "");
        } else {
          const K = me !== !1;
          C.value = K ? [te] : [], T.value = K && !M.value ? te.title : "", be(() => {
            f.value = !1, i.value = !0;
          });
        }
    }
    return q(o, (te, me) => {
      var K;
      te !== me && (te ? (Ve.value = !0, T.value = e.multiple || M.value ? "" : String(((K = C.value.at(-1)) == null ? void 0 : K.props.title) ?? ""), i.value = !0, be(() => Ve.value = !1)) : (!e.multiple && T.value == null && (C.value = []), f.value = !1, C.value.some((ne) => {
        let {
          title: ce
        } = ne;
        return ce === T.value;
      }) || (T.value = ""), m.value = -1));
    }), q(T, (te) => {
      !o.value || Ve.value || (te && (f.value = !0), i.value = !te);
    }), q(f, () => {
      if (!e.hideSelected && f.value && C.value.length) {
        const te = I.value.findIndex((me) => C.value.some((K) => me.value === K.value));
        xe && window.requestAnimationFrame(() => {
          var me;
          te >= 0 && ((me = c.value) == null || me.scrollToIndex(te));
        });
      }
    }), q(() => e.items, (te, me) => {
      f.value || o.value && !me.length && te.length && (f.value = !0);
    }), H(() => {
      const te = !!(!e.hideNoData || I.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), me = C.value.length > 0, K = An.filterProps(e);
      return d(An, B({
        ref: l
      }, K, {
        modelValue: T.value,
        "onUpdate:modelValue": [(ne) => T.value = ne, ee],
        focused: o.value,
        "onUpdate:focused": (ne) => o.value = ne,
        validationValue: C.externalValue,
        counterValue: V.value,
        dirty: me,
        onChange: ae,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": f.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!M.value,
          "v-autocomplete--selecting-index": m.value > -1
        }, e.class],
        style: e.style,
        readonly: e.readonly,
        placeholder: me ? void 0 : e.placeholder,
        "onClick:clear": z,
        "onMousedown:control": _,
        onKeydown: U
      }), {
        ...t,
        default: () => d(oe, null, [d(ua, B({
          ref: s,
          modelValue: f.value,
          "onUpdate:modelValue": (ne) => f.value = ne,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          disabled: F.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: re
        }, e.menuProps), {
          default: () => [te && d(no, B({
            ref: j,
            selected: A.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ne) => ne.preventDefault(),
            onKeydown: N,
            onFocusin: Z,
            onFocusout: W,
            onScrollPassive: X,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var ne, ce, se;
              return [(ne = t["prepend-item"]) == null ? void 0 : ne.call(t), !I.value.length && !e.hideNoData && (((ce = t["no-data"]) == null ? void 0 : ce.call(t)) ?? d(on, {
                title: a(e.noDataText)
              }, null)), d(oo, {
                ref: c,
                renderless: !0,
                items: I.value
              }, {
                default: (fe) => {
                  var st;
                  let {
                    item: Be,
                    index: yt,
                    itemRef: _e
                  } = fe;
                  const Wt = B(Be.props, {
                    ref: _e,
                    key: yt,
                    active: E.value && yt === 0 ? !0 : void 0,
                    onClick: () => Me(Be, null)
                  });
                  return ((st = t.item) == null ? void 0 : st.call(t, {
                    item: Be,
                    index: yt,
                    props: Wt
                  })) ?? d(on, B(Wt, {
                    role: "option"
                  }), {
                    prepend: (wn) => {
                      let {
                        isSelected: Cn
                      } = wn;
                      return d(oe, null, [e.multiple && !e.hideSelected ? d(ln, {
                        key: Be.value,
                        modelValue: Cn,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, Be.props.prependAvatar && d($t, {
                        image: Be.props.prependAvatar
                      }, null), Be.props.prependIcon && d(we, {
                        icon: Be.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var wn, Cn;
                      return i.value ? Be.title : d0(Be.title, (wn = S(Be)) == null ? void 0 : wn.title, ((Cn = T.value) == null ? void 0 : Cn.length) ?? 0);
                    }
                  });
                }
              }), (se = t["append-item"]) == null ? void 0 : se.call(t)];
            }
          })]
        }), C.value.map((ne, ce) => {
          function se(_e) {
            _e.stopPropagation(), _e.preventDefault(), Me(ne, !1);
          }
          const fe = {
            "onClick:close": se,
            onKeydown(_e) {
              _e.key !== "Enter" && _e.key !== " " || (_e.preventDefault(), _e.stopPropagation(), se(_e));
            },
            onMousedown(_e) {
              _e.preventDefault(), _e.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Be = D.value ? !!t.chip : !!t.selection, yt = Be ? jl(D.value ? t.chip({
            item: ne,
            index: ce,
            props: fe
          }) : t.selection({
            item: ne,
            index: ce
          })) : void 0;
          if (!(Be && !yt))
            return d("div", {
              key: ne.value,
              class: ["v-autocomplete__selection", ce === m.value && ["v-autocomplete__selection--selected", p.value]],
              style: ce === m.value ? w.value : {}
            }, [D.value ? t.chip ? d(he, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ne.title
                }
              }
            }, {
              default: () => [yt]
            }) : d(ga, B({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ne.title,
              disabled: ne.props.disabled
            }, fe), null) : yt ?? d("span", {
              class: "v-autocomplete__selection-text"
            }, [ne.title, e.multiple && ce < C.value.length - 1 && d("span", {
              class: "v-autocomplete__selection-comma"
            }, [dt(",")])])]);
        })]),
        "append-inner": function() {
          var fe;
          for (var ne = arguments.length, ce = new Array(ne), se = 0; se < ne; se++)
            ce[se] = arguments[se];
          return d(oe, null, [(fe = t["append-inner"]) == null ? void 0 : fe.call(t, ...ce), e.menuIcon ? d(we, {
            class: "v-autocomplete__menu-icon",
            icon: e.menuIcon,
            onMousedown: R,
            onClick: Wu,
            "aria-label": a(g.value),
            title: a(g.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), Lt({
      isFocused: o,
      isPristine: i,
      menu: f,
      search: T,
      filteredItems: P,
      select: Me
    }, l);
  }
}), m0 = $({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: ue,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...Q(),
  ...rn({
    location: "top end"
  }),
  ...Fe(),
  ...ve(),
  ...ye(),
  ...Yt({
    transition: "scale-rotate-transition"
  })
}, "VBadge"), h0 = L()({
  name: "VBadge",
  inheritAttrs: !1,
  props: m0(),
  setup(e, n) {
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: a
    } = De(O(e, "color")), {
      roundedClasses: l
    } = ze(e), {
      t: o
    } = Ke(), {
      textColorClasses: i,
      textColorStyles: r
    } = it(O(e, "textColor")), {
      themeClasses: s
    } = yc(), {
      locationStyles: c
    } = Kn(e, !0, (u) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(u) ? +(e.offsetY ?? 0) : ["left", "right"].includes(u) ? +(e.offsetX ?? 0) : 0));
    return H(() => {
      const u = Number(e.content), f = !e.max || isNaN(u) ? e.content : u <= +e.max ? u : `${e.max}+`, [m, v] = jo(n.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return d(e.tag, B({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, v, {
        style: e.style
      }), {
        default: () => {
          var g, h;
          return [d("div", {
            class: "v-badge__wrapper"
          }, [(h = (g = n.slots).default) == null ? void 0 : h.call(g), d(vt, {
            transition: e.transition
          }, {
            default: () => {
              var y, k;
              return [Ie(d("span", B({
                class: ["v-badge__badge", s.value, t.value, l.value, i.value],
                style: [a.value, r.value, e.inline ? {} : c.value],
                "aria-atomic": "true",
                "aria-label": o(e.label, u),
                "aria-live": "polite",
                role: "status"
              }, m), [e.dot ? void 0 : n.slots.badge ? (k = (y = n.slots).badge) == null ? void 0 : k.call(y) : e.icon ? d(we, {
                icon: e.icon
              }, null) : f]), [[It, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), g0 = $({
  color: String,
  density: String,
  ...Q()
}, "VBannerActions"), Vd = L()({
  name: "VBannerActions",
  props: g0(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return He({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), H(() => {
      var a;
      return d("div", {
        class: ["v-banner-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Pd = Jt("v-banner-text"), y0 = $({
  avatar: String,
  bgColor: String,
  color: String,
  icon: ue,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...Bt(),
  ...Q(),
  ...nt(),
  ...et(),
  ...Nn({
    mobile: null
  }),
  ...Je(),
  ...rn(),
  ...va(),
  ...Fe(),
  ...ve(),
  ...ye()
}, "VBanner"), b0 = L()({
  name: "VBanner",
  props: y0(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = De(e, "bgColor"), {
      borderClasses: o
    } = Ot(e), {
      densityClasses: i
    } = gt(e), {
      displayClasses: r,
      mobile: s
    } = _t(e), {
      dimensionStyles: c
    } = tt(e), {
      elevationClasses: u
    } = ot(e), {
      locationStyles: f
    } = Kn(e), {
      positionClasses: m
    } = ma(e), {
      roundedClasses: v
    } = ze(e), {
      themeClasses: g
    } = Ce(e), h = O(e, "color"), y = O(e, "density");
    He({
      VBannerActions: {
        color: h,
        density: y
      }
    }), H(() => {
      const k = !!(e.text || t.text), p = !!(e.avatar || e.icon), w = !!(p || t.prepend);
      return d(e.tag, {
        class: ["v-banner", {
          "v-banner--stacked": e.stacked || s.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, g.value, a.value, o.value, i.value, r.value, u.value, m.value, v.value, e.class],
        style: [l.value, c.value, f.value, e.style],
        role: "banner"
      }, {
        default: () => {
          var T;
          return [w && d("div", {
            key: "prepend",
            class: "v-banner__prepend"
          }, [t.prepend ? d(he, {
            key: "prepend-defaults",
            disabled: !p,
            defaults: {
              VAvatar: {
                color: h.value,
                density: y.value,
                icon: e.icon,
                image: e.avatar
              }
            }
          }, t.prepend) : d($t, {
            key: "prepend-avatar",
            color: h.value,
            density: y.value,
            icon: e.icon,
            image: e.avatar
          }, null)]), d("div", {
            class: "v-banner__content"
          }, [k && d(Pd, {
            key: "text"
          }, {
            default: () => {
              var C;
              return [((C = t.text) == null ? void 0 : C.call(t)) ?? e.text];
            }
          }), (T = t.default) == null ? void 0 : T.call(t)]), t.actions && d(Vd, {
            key: "actions"
          }, t.actions)];
        }
      });
    });
  }
}), p0 = $({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (e) => !e || ["horizontal", "shift"].includes(e)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: !0
  },
  ...Bt(),
  ...Q(),
  ...nt(),
  ...Je(),
  ...Fe(),
  ...Rn({
    name: "bottom-navigation"
  }),
  ...ve({
    tag: "header"
  }),
  ...Yn({
    selectedClass: "v-btn--selected"
  }),
  ...ye()
}, "VBottomNavigation"), k0 = L()({
  name: "VBottomNavigation",
  props: p0(),
  emits: {
    "update:active": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = yc(), {
      borderClasses: l
    } = Ot(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: i
    } = De(O(e, "bgColor")), {
      densityClasses: r
    } = gt(e), {
      elevationClasses: s
    } = ot(e), {
      roundedClasses: c
    } = ze(e), {
      ssrBootStyles: u
    } = zn(), f = b(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), m = ie(e, "active", e.active), {
      layoutItemStyles: v,
      layoutIsReady: g
    } = Hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: b(() => "bottom"),
      layoutSize: b(() => m.value ? f.value : 0),
      elementSize: f,
      active: m,
      absolute: O(e, "absolute")
    });
    return Sn(e, Xi), He({
      VBtn: {
        baseColor: O(e, "baseColor"),
        color: O(e, "color"),
        density: O(e, "density"),
        stacked: b(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), H(() => d(e.tag, {
      class: ["v-bottom-navigation", {
        "v-bottom-navigation--active": m.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, a.value, o.value, l.value, r.value, s.value, c.value, e.class],
      style: [i.value, v.value, {
        height: J(f.value)
      }, u.value, e.style]
    }, {
      default: () => [t.default && d("div", {
        class: "v-bottom-navigation__content"
      }, [t.default()])]
    })), g;
  }
}), Td = $({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...sl({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Gl
    },
    zIndex: 2400
  })
}, "VDialog"), si = L()({
  name: "VDialog",
  props: Td(),
  emits: {
    "update:modelValue": (e) => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), {
      scopeId: o
    } = Gn(), i = Y();
    function r(u) {
      var v, g;
      const f = u.relatedTarget, m = u.target;
      if (f !== m && ((v = i.value) != null && v.contentEl) && // We're the topmost dialog
      ((g = i.value) != null && g.globalTop) && // It isn't the document or the dialog body
      ![document, i.value.contentEl].includes(m) && // It isn't inside the dialog body
      !i.value.contentEl.contains(m)) {
        const h = Fa(i.value.contentEl);
        if (!h.length) return;
        const y = h[0], k = h[h.length - 1];
        f === y ? k.focus() : y.focus();
      }
    }
    xe && q(() => l.value && e.retainFocus, (u) => {
      u ? document.addEventListener("focusin", r) : document.removeEventListener("focusin", r);
    }, {
      immediate: !0
    });
    function s() {
      var u;
      (u = i.value) != null && u.contentEl && !i.value.contentEl.contains(document.activeElement) && i.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      t("afterLeave");
    }
    return q(l, async (u) => {
      var f;
      u || (await be(), (f = i.value.activatorEl) == null || f.focus({
        preventScroll: !0
      }));
    }), H(() => {
      const u = qt.filterProps(e), f = B({
        "aria-haspopup": "dialog",
        "aria-expanded": String(l.value)
      }, e.activatorProps), m = B({
        tabindex: -1
      }, e.contentProps);
      return d(qt, B({
        ref: i,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, u, {
        modelValue: l.value,
        "onUpdate:modelValue": (v) => l.value = v,
        "aria-modal": "true",
        activatorProps: f,
        contentProps: m,
        role: "dialog",
        onAfterEnter: s,
        onAfterLeave: c
      }, o), {
        activator: a.activator,
        default: function() {
          for (var v = arguments.length, g = new Array(v), h = 0; h < v; h++)
            g[h] = arguments[h];
          return d(he, {
            root: "VDialog"
          }, {
            default: () => {
              var y;
              return [(y = a.default) == null ? void 0 : y.call(a, ...g)];
            }
          });
        }
      });
    }), Lt({}, i);
  }
}), S0 = $({
  inset: Boolean,
  ...Td({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), w0 = L()({
  name: "VBottomSheet",
  props: S0(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue");
    return H(() => {
      const l = si.filterProps(e);
      return d(si, B(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: a.value,
        "onUpdate:modelValue": (o) => a.value = o,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), t);
    }), {};
  }
}), C0 = $({
  divider: [Number, String],
  ...Q()
}, "VBreadcrumbsDivider"), Id = L()({
  name: "VBreadcrumbsDivider",
  props: C0(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => {
      var a;
      return d("li", {
        class: ["v-breadcrumbs-divider", e.class],
        style: e.style
      }, [((a = t == null ? void 0 : t.default) == null ? void 0 : a.call(t)) ?? e.divider]);
    }), {};
  }
}), x0 = $({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...Q(),
  ...ol(),
  ...ve({
    tag: "li"
  })
}, "VBreadcrumbsItem"), Dd = L()({
  name: "VBreadcrumbsItem",
  props: x0(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const l = ll(e, a), o = b(() => {
      var c;
      return e.active || ((c = l.isActive) == null ? void 0 : c.value);
    }), i = b(() => o.value ? e.activeColor : e.color), {
      textColorClasses: r,
      textColorStyles: s
    } = it(i);
    return H(() => d(e.tag, {
      class: ["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": o.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: o.value && e.activeClass
      }, r.value, e.class],
      style: [s.value, e.style],
      "aria-current": o.value ? "page" : void 0
    }, {
      default: () => {
        var c, u;
        return [l.isLink.value ? d("a", {
          class: "v-breadcrumbs-item--link",
          href: l.href.value,
          "aria-current": o.value ? "page" : void 0,
          onClick: l.navigate
        }, [((u = t.default) == null ? void 0 : u.call(t)) ?? e.title]) : ((c = t.default) == null ? void 0 : c.call(t)) ?? e.title];
      }
    })), {};
  }
}), V0 = $({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: ue,
  items: {
    type: Array,
    default: () => []
  },
  ...Q(),
  ...nt(),
  ...Fe(),
  ...ve({
    tag: "ul"
  })
}, "VBreadcrumbs"), P0 = L()({
  name: "VBreadcrumbs",
  props: V0(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = De(O(e, "bgColor")), {
      densityClasses: o
    } = gt(e), {
      roundedClasses: i
    } = ze(e);
    He({
      VBreadcrumbsDivider: {
        divider: O(e, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: O(e, "activeClass"),
        activeColor: O(e, "activeColor"),
        color: O(e, "color"),
        disabled: O(e, "disabled")
      }
    });
    const r = b(() => e.items.map((s) => typeof s == "string" ? {
      item: {
        title: s
      },
      raw: s
    } : {
      item: s,
      raw: s
    }));
    return H(() => {
      const s = !!(t.prepend || e.icon);
      return d(e.tag, {
        class: ["v-breadcrumbs", a.value, o.value, i.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => {
          var c;
          return [s && d("li", {
            key: "prepend",
            class: "v-breadcrumbs__prepend"
          }, [t.prepend ? d(he, {
            key: "prepend-defaults",
            disabled: !e.icon,
            defaults: {
              VIcon: {
                icon: e.icon,
                start: !0
              }
            }
          }, t.prepend) : d(we, {
            key: "prepend-icon",
            start: !0,
            icon: e.icon
          }, null)]), r.value.map((u, f, m) => {
            var h;
            let {
              item: v,
              raw: g
            } = u;
            return d(oe, null, [((h = t.item) == null ? void 0 : h.call(t, {
              item: v,
              index: f
            })) ?? d(Dd, B({
              key: f,
              disabled: f >= m.length - 1
            }, typeof v == "string" ? {
              title: v
            } : v), {
              default: t.title ? () => {
                var y;
                return (y = t.title) == null ? void 0 : y.call(t, {
                  item: v,
                  index: f
                });
              } : void 0
            }), f < m.length - 1 && d(Id, null, {
              default: t.divider ? () => {
                var y;
                return (y = t.divider) == null ? void 0 : y.call(t, {
                  item: g,
                  index: f
                });
              } : void 0
            })]);
          }), (c = t.default) == null ? void 0 : c.call(t)];
        }
      });
    }), {};
  }
}), Md = L()({
  name: "VCardActions",
  props: Q(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return He({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), H(() => {
      var a;
      return d("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), T0 = $({
  opacity: [Number, String],
  ...Q(),
  ...ve()
}, "VCardSubtitle"), Bd = L()({
  name: "VCardSubtitle",
  props: T0(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => d(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), Ad = Jt("v-card-title"), I0 = $({
  appendAvatar: String,
  appendIcon: ue,
  prependAvatar: String,
  prependIcon: ue,
  subtitle: [String, Number],
  title: [String, Number],
  ...Q(),
  ...nt()
}, "VCardItem"), $d = L()({
  name: "VCardItem",
  props: I0(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => {
      var c;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || t.prepend), o = !!(e.appendAvatar || e.appendIcon), i = !!(o || t.append), r = !!(e.title != null || t.title), s = !!(e.subtitle != null || t.subtitle);
      return d("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && d("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [t.prepend ? d(he, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, t.prepend) : d(oe, null, [e.prependAvatar && d($t, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && d(we, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), d("div", {
        class: "v-card-item__content"
      }, [r && d(Ad, {
        key: "title"
      }, {
        default: () => {
          var u;
          return [((u = t.title) == null ? void 0 : u.call(t)) ?? e.title];
        }
      }), s && d(Bd, {
        key: "subtitle"
      }, {
        default: () => {
          var u;
          return [((u = t.subtitle) == null ? void 0 : u.call(t)) ?? e.subtitle];
        }
      }), (c = t.default) == null ? void 0 : c.call(t)]), i && d("div", {
        key: "append",
        class: "v-card-item__append"
      }, [t.append ? d(he, {
        key: "append-defaults",
        disabled: !o,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, t.append) : d(oe, null, [e.appendIcon && d(we, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && d($t, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), D0 = $({
  opacity: [Number, String],
  ...Q(),
  ...ve()
}, "VCardText"), _d = L()({
  name: "VCardText",
  props: D0(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => d(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), M0 = $({
  appendAvatar: String,
  appendIcon: ue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...Bt(),
  ...Q(),
  ...nt(),
  ...et(),
  ...Je(),
  ...Jl(),
  ...rn(),
  ...va(),
  ...Fe(),
  ...ol(),
  ...ve(),
  ...ye(),
  ...Et({
    variant: "elevated"
  })
}, "VCard"), B0 = L()({
  name: "VCard",
  directives: {
    Ripple: sn
  },
  props: M0(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ce(e), {
      borderClasses: o
    } = Ot(e), {
      colorClasses: i,
      colorStyles: r,
      variantClasses: s
    } = jn(e), {
      densityClasses: c
    } = gt(e), {
      dimensionStyles: u
    } = tt(e), {
      elevationClasses: f
    } = ot(e), {
      loaderClasses: m
    } = nl(e), {
      locationStyles: v
    } = Kn(e), {
      positionClasses: g
    } = ma(e), {
      roundedClasses: h
    } = ze(e), y = ll(e, t), k = b(() => e.link !== !1 && y.isLink.value), p = b(() => !e.disabled && e.link !== !1 && (e.link || y.isClickable.value));
    return H(() => {
      const w = k.value ? "a" : e.tag, T = !!(a.title || e.title != null), C = !!(a.subtitle || e.subtitle != null), V = T || C, x = !!(a.append || e.appendAvatar || e.appendIcon), P = !!(a.prepend || e.prependAvatar || e.prependIcon), S = !!(a.image || e.image), I = V || P || x, D = !!(a.text || e.text != null);
      return Ie(d(w, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": p.value
        }, l.value, o.value, i.value, c.value, f.value, m.value, g.value, h.value, s.value, e.class],
        style: [r.value, u.value, v.value, e.style],
        href: y.href.value,
        onClick: p.value && y.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var M;
          return [S && d("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? d(he, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : d(an, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), d(al, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), I && d($d, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), D && d(_d, {
            key: "text"
          }, {
            default: () => {
              var A;
              return [((A = a.text) == null ? void 0 : A.call(a)) ?? e.text];
            }
          }), (M = a.default) == null ? void 0 : M.call(a), a.actions && d(Md, null, {
            default: a.actions
          }), kn(p.value, "v-card")];
        }
      }), [[St("ripple"), p.value && e.ripple]]);
    }), {};
  }
}), A0 = (e) => {
  const {
    touchstartX: n,
    touchendX: t,
    touchstartY: a,
    touchendY: l
  } = e, o = 0.5, i = 16;
  e.offsetX = t - n, e.offsetY = l - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && t < n - i && e.left(e), e.right && t > n + i && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && l < a - i && e.up(e), e.down && l > a + i && e.down(e));
};
function $0(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchstartX = t.clientX, n.touchstartY = t.clientY, (a = n.start) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function _0(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchendX = t.clientX, n.touchendY = t.clientY, (a = n.end) == null || a.call(n, {
    originalEvent: e,
    ...n
  }), A0(n);
}
function O0(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchmoveX = t.clientX, n.touchmoveY = t.clientY, (a = n.move) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function E0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (t) => $0(t, n),
    touchend: (t) => _0(t, n),
    touchmove: (t) => O0(t, n)
  };
}
function L0(e, n) {
  var r;
  const t = n.value, a = t != null && t.parent ? e.parentElement : e, l = (t == null ? void 0 : t.options) ?? {
    passive: !0
  }, o = (r = n.instance) == null ? void 0 : r.$.uid;
  if (!a || !o) return;
  const i = E0(n.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = i, Ru(i).forEach((s) => {
    a.addEventListener(s, i[s], l);
  });
}
function F0(e, n) {
  var o, i;
  const t = (o = n.value) != null && o.parent ? e.parentElement : e, a = (i = n.instance) == null ? void 0 : i.$.uid;
  if (!(t != null && t._touchHandlers) || !a) return;
  const l = t._touchHandlers[a];
  Ru(l).forEach((r) => {
    t.removeEventListener(r, l[r]);
  }), delete t._touchHandlers[a];
}
const cr = {
  mounted: L0,
  unmounted: F0
}, Od = Symbol.for("vuetify:v-window"), Ed = Symbol.for("vuetify:v-window-group"), io = $({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || e === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...Q(),
  ...ve(),
  ...ye()
}, "VWindow"), $n = L()({
  name: "VWindow",
  directives: {
    Touch: cr
  },
  props: io(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ce(e), {
      isRtl: l
    } = Qe(), {
      t: o
    } = Ke(), i = Sn(e, Ed), r = Y(), s = b(() => l.value ? !e.reverse : e.reverse), c = G(!1), u = b(() => {
      const T = e.direction === "vertical" ? "y" : "x", V = (s.value ? !c.value : c.value) ? "-reverse" : "";
      return `v-window-${T}${V}-transition`;
    }), f = G(0), m = Y(void 0), v = b(() => i.items.value.findIndex((T) => i.selected.value.includes(T.id)));
    q(v, (T, C) => {
      const V = i.items.value.length, x = V - 1;
      V <= 2 ? c.value = T < C : T === x && C === 0 ? c.value = !0 : T === 0 && C === x ? c.value = !1 : c.value = T < C;
    }), Le(Od, {
      transition: u,
      isReversed: c,
      transitionCount: f,
      transitionHeight: m,
      rootRef: r
    });
    const g = b(() => e.continuous || v.value !== 0), h = b(() => e.continuous || v.value !== i.items.value.length - 1);
    function y() {
      g.value && i.prev();
    }
    function k() {
      h.value && i.next();
    }
    const p = b(() => {
      const T = [], C = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: i.prev,
        "aria-label": o("$vuetify.carousel.prev")
      };
      T.push(g.value ? t.prev ? t.prev({
        props: C
      }) : d(Se, C, null) : d("div", null, null));
      const V = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: i.next,
        "aria-label": o("$vuetify.carousel.next")
      };
      return T.push(h.value ? t.next ? t.next({
        props: V
      }) : d(Se, V, null) : d("div", null, null)), T;
    }), w = b(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          s.value ? y() : k();
        },
        right: () => {
          s.value ? k() : y();
        },
        start: (C) => {
          let {
            originalEvent: V
          } = C;
          V.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return H(() => Ie(d(e.tag, {
      ref: r,
      class: ["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover"
      }, a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var T, C;
        return [d("div", {
          class: "v-window__container",
          style: {
            height: m.value
          }
        }, [(T = t.default) == null ? void 0 : T.call(t, {
          group: i
        }), e.showArrows !== !1 && d("div", {
          class: "v-window__controls"
        }, [p.value])]), (C = t.additional) == null ? void 0 : C.call(t, {
          group: i
        })];
      }
    }), [[St("touch"), w.value]])), {
      group: i
    };
  }
}), N0 = $({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: ue,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (e) => Number(e) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...io({
    continuous: !0,
    mandatory: "force",
    showArrows: !0
  })
}, "VCarousel"), R0 = L()({
  name: "VCarousel",
  props: N0(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      t: l
    } = Ke(), o = Y();
    let i = -1;
    q(a, s), q(() => e.interval, s), q(() => e.cycle, (c) => {
      c ? s() : window.clearTimeout(i);
    }), mt(r);
    function r() {
      !e.cycle || !o.value || (i = window.setTimeout(o.value.group.next, +e.interval > 0 ? +e.interval : 6e3));
    }
    function s() {
      window.clearTimeout(i), window.requestAnimationFrame(r);
    }
    return H(() => {
      const c = $n.filterProps(e);
      return d($n, B({
        ref: o
      }, c, {
        modelValue: a.value,
        "onUpdate:modelValue": (u) => a.value = u,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: J(e.height)
        }, e.style]
      }), {
        default: t.default,
        additional: (u) => {
          let {
            group: f
          } = u;
          return d(oe, null, [!e.hideDelimiters && d("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [f.items.value.length > 0 && d(he, {
            defaults: {
              VBtn: {
                color: e.color,
                icon: e.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            scoped: !0
          }, {
            default: () => [f.items.value.map((m, v) => {
              const g = {
                id: `carousel-item-${m.id}`,
                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", v + 1, f.items.value.length),
                class: ["v-carousel__controls__item", f.isSelected(m.id) && "v-btn--active"],
                onClick: () => f.select(m.id, !0)
              };
              return t.item ? t.item({
                props: g,
                item: m
              }) : d(Se, B(m, g), null);
            })]
          })]), e.progress && d(Zl, {
            class: "v-carousel__progress",
            color: typeof e.progress == "string" ? e.progress : void 0,
            modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100
          }, null)]);
        },
        prev: t.prev,
        next: t.next
      });
    }), {};
  }
}), ro = $({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...Q(),
  ...Wn(),
  ...lr()
}, "VWindowItem"), _n = L()({
  name: "VWindowItem",
  directives: {
    Touch: cr
  },
  props: ro(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = pe(Od), l = Un(e, Ed), {
      isBooted: o
    } = zn();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const i = G(!1), r = b(() => o.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function s() {
      !i.value || !a || (i.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function c() {
      var g;
      i.value || !a || (i.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = J((g = a.rootRef.value) == null ? void 0 : g.clientHeight)), a.transitionCount.value += 1);
    }
    function u() {
      s();
    }
    function f(g) {
      i.value && be(() => {
        !r.value || !i.value || !a || (a.transitionHeight.value = J(g.clientHeight));
      });
    }
    const m = b(() => {
      const g = a.isReversed.value ? e.reverseTransition : e.transition;
      return r.value ? {
        name: typeof g != "string" ? a.transition.value : g,
        onBeforeEnter: c,
        onAfterEnter: s,
        onEnterCancelled: u,
        onBeforeLeave: c,
        onAfterLeave: s,
        onLeaveCancelled: u,
        onEnter: f
      } : !1;
    }), {
      hasContent: v
    } = or(e, l.isSelected);
    return H(() => d(vt, {
      transition: m.value,
      disabled: !o.value
    }, {
      default: () => {
        var g;
        return [Ie(d("div", {
          class: ["v-window-item", l.selectedClass.value, e.class],
          style: e.style
        }, [v.value && ((g = t.default) == null ? void 0 : g.call(t))]), [[It, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), H0 = $({
  ...Ic(),
  ...ro()
}, "VCarouselItem"), z0 = L()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: H0(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    H(() => {
      const l = an.filterProps(e), o = _n.filterProps(e);
      return d(_n, B({
        class: ["v-carousel-item", e.class]
      }, o), {
        default: () => [d(an, B(a, l), t)]
      });
    });
  }
}), j0 = Jt("v-code"), Y0 = $({
  color: {
    type: Object
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  height: {
    type: [Number, String],
    default: 150
  },
  width: {
    type: [Number, String],
    default: 300
  },
  ...Q()
}, "VColorPickerCanvas"), W0 = Dt({
  name: "VColorPickerCanvas",
  props: Y0(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = G(!1), l = Y(), o = G(parseFloat(e.width)), i = G(parseFloat(e.height)), r = Y({
      x: 0,
      y: 0
    }), s = b({
      get: () => r.value,
      set(y) {
        var w, T;
        if (!l.value) return;
        const {
          x: k,
          y: p
        } = y;
        r.value = y, t("update:color", {
          h: ((w = e.color) == null ? void 0 : w.h) ?? 0,
          s: qe(k, 0, o.value) / o.value,
          v: 1 - qe(p, 0, i.value) / i.value,
          a: ((T = e.color) == null ? void 0 : T.a) ?? 1
        });
      }
    }), c = b(() => {
      const {
        x: y,
        y: k
      } = s.value, p = parseInt(e.dotSize, 10) / 2;
      return {
        width: J(e.dotSize),
        height: J(e.dotSize),
        transform: `translate(${J(y - p)}, ${J(k - p)})`
      };
    }), {
      resizeRef: u
    } = jt((y) => {
      var w;
      if (!((w = u.el) != null && w.offsetParent)) return;
      const {
        width: k,
        height: p
      } = y[0].contentRect;
      o.value = k, i.value = p;
    });
    function f(y, k, p) {
      const {
        left: w,
        top: T,
        width: C,
        height: V
      } = p;
      s.value = {
        x: qe(y - w, 0, C),
        y: qe(k - T, 0, V)
      };
    }
    function m(y) {
      y.type === "mousedown" && y.preventDefault(), !e.disabled && (v(y), window.addEventListener("mousemove", v), window.addEventListener("mouseup", g), window.addEventListener("touchmove", v), window.addEventListener("touchend", g));
    }
    function v(y) {
      if (e.disabled || !l.value) return;
      a.value = !0;
      const k = sg(y);
      f(k.clientX, k.clientY, l.value.getBoundingClientRect());
    }
    function g() {
      window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", g), window.removeEventListener("touchmove", v), window.removeEventListener("touchend", g);
    }
    function h() {
      var T;
      if (!l.value) return;
      const y = l.value, k = y.getContext("2d");
      if (!k) return;
      const p = k.createLinearGradient(0, 0, y.width, 0);
      p.addColorStop(0, "hsla(0, 0%, 100%, 1)"), p.addColorStop(1, `hsla(${((T = e.color) == null ? void 0 : T.h) ?? 0}, 100%, 50%, 1)`), k.fillStyle = p, k.fillRect(0, 0, y.width, y.height);
      const w = k.createLinearGradient(0, 0, 0, y.height);
      w.addColorStop(0, "hsla(0, 0%, 0%, 0)"), w.addColorStop(1, "hsla(0, 0%, 0%, 1)"), k.fillStyle = w, k.fillRect(0, 0, y.width, y.height);
    }
    return q(() => {
      var y;
      return (y = e.color) == null ? void 0 : y.h;
    }, h, {
      immediate: !0
    }), q(() => [o.value, i.value], (y, k) => {
      h(), r.value = {
        x: s.value.x * y[0] / k[0],
        y: s.value.y * y[1] / k[1]
      };
    }, {
      flush: "post"
    }), q(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      r.value = e.color ? {
        x: e.color.s * o.value,
        y: (1 - e.color.v) * i.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), mt(() => h()), H(() => d("div", {
      ref: u,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: m,
      onTouchstartPassive: m
    }, [d("canvas", {
      ref: l,
      width: o.value,
      height: i.value
    }, null), e.color && d("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: c.value
    }, null)])), {};
  }
});
function U0(e, n) {
  if (n) {
    const {
      a: t,
      ...a
    } = e;
    return a;
  }
  return e;
}
function K0(e, n) {
  if (n == null || typeof n == "string") {
    const t = ac(e);
    return e.a === 1 ? t.slice(0, 7) : t;
  }
  if (typeof n == "object") {
    let t;
    return Tn(n, ["r", "g", "b"]) ? t = nn(e) : Tn(n, ["h", "s", "l"]) ? t = Zu(e) : Tn(n, ["h", "s", "v"]) && (t = e), U0(t, !Tn(n, ["a"]) && e.a === 1);
  }
  return e;
}
const na = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, ui = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, n) => ({
      ...e,
      r: Number(n)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, n) => ({
      ...e,
      g: Number(n)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, n) => ({
      ...e,
      b: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: nn,
  from: Yl
};
var nu;
const G0 = {
  ...ui,
  inputs: (nu = ui.inputs) == null ? void 0 : nu.slice(0, 3)
}, ci = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, n) => ({
      ...e,
      h: Number(n)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      s: Number(n)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      l: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: Zu,
  from: Fi
}, q0 = {
  ...ci,
  inputs: ci.inputs.slice(0, 3)
}, Ld = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, n) => n
  }],
  to: ac,
  from: nc
}, X0 = {
  ...Ld,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, n) => n
  }]
}, Bn = {
  rgb: G0,
  rgba: ui,
  hsl: q0,
  hsla: ci,
  hex: X0,
  hexa: Ld
}, Z0 = (e) => {
  let {
    label: n,
    ...t
  } = e;
  return d("div", {
    class: "v-color-picker-edit__input"
  }, [d("input", t, null), d("span", null, [n])]);
}, J0 = $({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(Bn).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(Bn),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(Bn).includes(n))
  },
  ...Q()
}, "VColorPickerEdit"), Q0 = Dt({
  name: "VColorPickerEdit",
  props: J0(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = b(() => e.modes.map((o) => ({
      ...Bn[o],
      name: o
    }))), l = b(() => {
      var r;
      const o = a.value.find((s) => s.name === e.mode);
      if (!o) return [];
      const i = e.color ? o.to(e.color) : null;
      return (r = o.inputs) == null ? void 0 : r.map((s) => {
        let {
          getValue: c,
          getColor: u,
          ...f
        } = s;
        return {
          ...o.inputProps,
          ...f,
          disabled: e.disabled,
          value: i && c(i),
          onChange: (m) => {
            const v = m.target;
            v && t("update:color", o.from(u(i ?? o.to(na), v.value)));
          }
        };
      });
    });
    return H(() => {
      var o;
      return d("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(o = l.value) == null ? void 0 : o.map((i) => d(Z0, i, null)), a.value.length > 1 && d(Se, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const i = a.value.findIndex((r) => r.name === e.mode);
          t("update:mode", a.value[(i + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), dr = Symbol.for("vuetify:v-slider");
function di(e, n, t) {
  const a = t === "vertical", l = n.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (l.top + l.height / 2) : o.clientX - (l.left + l.width / 2);
}
function ek(e, n) {
  return "touches" in e && e.touches.length ? e.touches[0][n] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][n] : e[n];
}
const Fd = $({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean,
  ...Fe(),
  ...Je({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), Nd = (e) => {
  const n = b(() => parseFloat(e.min)), t = b(() => parseFloat(e.max)), a = b(() => +e.step > 0 ? parseFloat(e.step) : 0), l = b(() => Math.max(es(a.value), es(n.value)));
  function o(i) {
    if (i = parseFloat(i), a.value <= 0) return i;
    const r = qe(i, n.value, t.value), s = n.value % a.value, c = Math.round((r - s) / a.value) * a.value + s;
    return parseFloat(Math.min(c, t.value).toFixed(l.value));
  }
  return {
    min: n,
    max: t,
    step: a,
    decimals: l,
    roundValue: o
  };
}, Rd = (e) => {
  let {
    props: n,
    steps: t,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: o,
    getActiveThumb: i
  } = e;
  const {
    isRtl: r
  } = Qe(), s = O(n, "reverse"), c = b(() => n.direction === "vertical"), u = b(() => c.value !== s.value), {
    min: f,
    max: m,
    step: v,
    decimals: g,
    roundValue: h
  } = t, y = b(() => parseInt(n.thumbSize, 10)), k = b(() => parseInt(n.tickSize, 10)), p = b(() => parseInt(n.trackSize, 10)), w = b(() => (m.value - f.value) / v.value), T = O(n, "disabled"), C = b(() => n.error || n.disabled ? void 0 : n.thumbColor ?? n.color), V = b(() => n.error || n.disabled ? void 0 : n.trackColor ?? n.color), x = b(() => n.error || n.disabled ? void 0 : n.trackFillColor ?? n.color), P = G(!1), S = G(0), I = Y(), D = Y();
  function M(W) {
    var se;
    const ee = n.direction === "vertical", Ve = ee ? "top" : "left", Me = ee ? "height" : "width", te = ee ? "clientY" : "clientX", {
      [Ve]: me,
      [Me]: K
    } = (se = I.value) == null ? void 0 : se.$el.getBoundingClientRect(), ne = ek(W, te);
    let ce = Math.min(Math.max((ne - me - S.value) / K, 0), 1) || 0;
    return (ee ? u.value : u.value !== r.value) && (ce = 1 - ce), h(f.value + ce * (m.value - f.value));
  }
  const A = (W) => {
    o({
      value: M(W)
    }), P.value = !1, S.value = 0;
  }, E = (W) => {
    D.value = i(W), D.value && (D.value.focus(), P.value = !0, D.value.contains(W.target) ? S.value = di(W, D.value, n.direction) : (S.value = 0, l({
      value: M(W)
    })), a({
      value: M(W)
    }));
  }, F = {
    passive: !0,
    capture: !0
  };
  function j(W) {
    l({
      value: M(W)
    });
  }
  function X(W) {
    W.stopPropagation(), W.preventDefault(), A(W), window.removeEventListener("mousemove", j, F), window.removeEventListener("mouseup", X);
  }
  function N(W) {
    var ee;
    A(W), window.removeEventListener("touchmove", j, F), (ee = W.target) == null || ee.removeEventListener("touchend", N);
  }
  function z(W) {
    var ee;
    E(W), window.addEventListener("touchmove", j, F), (ee = W.target) == null || ee.addEventListener("touchend", N, {
      passive: !1
    });
  }
  function _(W) {
    W.preventDefault(), E(W), window.addEventListener("mousemove", j, F), window.addEventListener("mouseup", X, {
      passive: !1
    });
  }
  const R = (W) => {
    const ee = (W - f.value) / (m.value - f.value) * 100;
    return qe(isNaN(ee) ? 0 : ee, 0, 100);
  }, U = O(n, "showTicks"), ae = b(() => U.value ? n.ticks ? Array.isArray(n.ticks) ? n.ticks.map((W) => ({
    value: W,
    position: R(W),
    label: W.toString()
  })) : Object.keys(n.ticks).map((W) => ({
    value: parseFloat(W),
    position: R(parseFloat(W)),
    label: n.ticks[W]
  })) : w.value !== 1 / 0 ? Kt(w.value + 1).map((W) => {
    const ee = f.value + W * v.value;
    return {
      value: ee,
      position: R(ee)
    };
  }) : [] : []), re = b(() => ae.value.some((W) => {
    let {
      label: ee
    } = W;
    return !!ee;
  })), Z = {
    activeThumbRef: D,
    color: O(n, "color"),
    decimals: g,
    disabled: T,
    direction: O(n, "direction"),
    elevation: O(n, "elevation"),
    hasLabels: re,
    isReversed: s,
    indexFromEnd: u,
    min: f,
    max: m,
    mousePressed: P,
    numTicks: w,
    onSliderMousedown: _,
    onSliderTouchstart: z,
    parsedTicks: ae,
    parseMouseMove: M,
    position: R,
    readonly: O(n, "readonly"),
    rounded: O(n, "rounded"),
    roundValue: h,
    showTicks: U,
    startOffset: S,
    step: v,
    thumbSize: y,
    thumbColor: C,
    thumbLabel: O(n, "thumbLabel"),
    ticks: O(n, "ticks"),
    tickSize: k,
    trackColor: V,
    trackContainerRef: I,
    trackFillColor: x,
    trackSize: p,
    vertical: c
  };
  return Le(dr, Z), Z;
}, tk = $({
  focused: Boolean,
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  modelValue: {
    type: Number,
    required: !0
  },
  position: {
    type: Number,
    required: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  name: String,
  ...Q()
}, "VSliderThumb"), fi = L()({
  name: "VSliderThumb",
  directives: {
    Ripple: sn
  },
  props: tk(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = pe(dr), {
      isRtl: o,
      rtlClasses: i
    } = Qe();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: r,
      step: s,
      disabled: c,
      thumbSize: u,
      thumbLabel: f,
      direction: m,
      isReversed: v,
      vertical: g,
      readonly: h,
      elevation: y,
      mousePressed: k,
      decimals: p,
      indexFromEnd: w
    } = l, T = b(() => c.value ? void 0 : y.value), {
      elevationClasses: C
    } = ot(T), {
      textColorClasses: V,
      textColorStyles: x
    } = it(r), {
      pageup: P,
      pagedown: S,
      end: I,
      home: D,
      left: M,
      right: A,
      down: E,
      up: F
    } = zo, j = [P, S, I, D, M, A, E, F], X = b(() => s.value ? [1, 2, 3] : [1, 5, 10]);
    function N(_, R) {
      if (!j.includes(_.key)) return;
      _.preventDefault();
      const U = s.value || 0.1, ae = (e.max - e.min) / U;
      if ([M, A, E, F].includes(_.key)) {
        const Z = (g.value ? [o.value ? M : A, v.value ? E : F] : w.value !== o.value ? [M, F] : [A, F]).includes(_.key) ? 1 : -1, W = _.shiftKey ? 2 : _.ctrlKey ? 1 : 0;
        R = R + Z * U * X.value[W];
      } else if (_.key === D)
        R = e.min;
      else if (_.key === I)
        R = e.max;
      else {
        const re = _.key === S ? 1 : -1;
        R = R - re * U * (ae > 100 ? ae / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, R));
    }
    function z(_) {
      const R = N(_, e.modelValue);
      R != null && a("update:modelValue", R);
    }
    return H(() => {
      const _ = J(w.value ? 100 - e.position : e.position, "%");
      return d("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && k.value
        }, e.class, i.value],
        style: [{
          "--v-slider-thumb-position": _,
          "--v-slider-thumb-size": J(u.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!h.value,
        "aria-orientation": m.value,
        onKeydown: h.value ? void 0 : z
      }, [d("div", {
        class: ["v-slider-thumb__surface", V.value, C.value],
        style: {
          ...x.value
        }
      }, null), Ie(d("div", {
        class: ["v-slider-thumb__ripple", V.value],
        style: x.value
      }, null), [[St("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), d(Ui, {
        origin: "bottom center"
      }, {
        default: () => {
          var R;
          return [Ie(d("div", {
            class: "v-slider-thumb__label-container"
          }, [d("div", {
            class: ["v-slider-thumb__label"]
          }, [d("div", null, [((R = t["thumb-label"]) == null ? void 0 : R.call(t, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(s.value ? p.value : 1)])])]), [[It, f.value && e.focused || f.value === "always"]])];
        }
      })]);
    }), {};
  }
}), nk = $({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...Q()
}, "VSliderTrack"), Hd = L()({
  name: "VSliderTrack",
  props: nk(),
  emits: {},
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = pe(dr);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: o,
      rounded: i,
      showTicks: r,
      tickSize: s,
      trackColor: c,
      trackFillColor: u,
      trackSize: f,
      vertical: m,
      min: v,
      max: g,
      indexFromEnd: h
    } = a, {
      roundedClasses: y
    } = ze(i), {
      backgroundColorClasses: k,
      backgroundColorStyles: p
    } = De(u), {
      backgroundColorClasses: w,
      backgroundColorStyles: T
    } = De(c), C = b(() => `inset-${m.value ? "block" : "inline"}-${h.value ? "end" : "start"}`), V = b(() => m.value ? "height" : "width"), x = b(() => ({
      [C.value]: "0%",
      [V.value]: "100%"
    })), P = b(() => e.stop - e.start), S = b(() => ({
      [C.value]: J(e.start, "%"),
      [V.value]: J(P.value, "%")
    })), I = b(() => r.value ? (m.value ? o.value.slice().reverse() : o.value).map((M, A) => {
      var F;
      const E = M.value !== v.value && M.value !== g.value ? J(M.position, "%") : void 0;
      return d("div", {
        key: M.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": M.position >= e.start && M.position <= e.stop,
          "v-slider-track__tick--first": M.value === v.value,
          "v-slider-track__tick--last": M.value === g.value
        }],
        style: {
          [C.value]: E
        }
      }, [(M.label || t["tick-label"]) && d("div", {
        class: "v-slider-track__tick-label"
      }, [((F = t["tick-label"]) == null ? void 0 : F.call(t, {
        tick: M,
        index: A
      })) ?? M.label])]);
    }) : []);
    return H(() => d("div", {
      class: ["v-slider-track", y.value, e.class],
      style: [{
        "--v-slider-track-size": J(f.value),
        "--v-slider-tick-size": J(s.value)
      }, e.style]
    }, [d("div", {
      class: ["v-slider-track__background", w.value, {
        "v-slider-track__background--opacity": !!l.value || !u.value
      }],
      style: {
        ...x.value,
        ...T.value
      }
    }, null), d("div", {
      class: ["v-slider-track__fill", k.value],
      style: {
        ...S.value,
        ...p.value
      }
    }, null), r.value && d("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [I.value])])), {};
  }
}), ak = $({
  ...il(),
  ...Fd(),
  ...cn(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), vi = L()({
  name: "VSlider",
  props: ak(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = Y(), {
      rtlClasses: o
    } = Qe(), i = Nd(e), r = ie(e, "modelValue", void 0, (V) => i.roundValue(V ?? i.min.value)), {
      min: s,
      max: c,
      mousePressed: u,
      roundValue: f,
      onSliderMousedown: m,
      onSliderTouchstart: v,
      trackContainerRef: g,
      position: h,
      hasLabels: y,
      readonly: k
    } = Rd({
      props: e,
      steps: i,
      onSliderStart: () => {
        a("start", r.value);
      },
      onSliderEnd: (V) => {
        let {
          value: x
        } = V;
        const P = f(x);
        r.value = P, a("end", P);
      },
      onSliderMove: (V) => {
        let {
          value: x
        } = V;
        return r.value = f(x);
      },
      getActiveThumb: () => {
        var V;
        return (V = l.value) == null ? void 0 : V.$el;
      }
    }), {
      isFocused: p,
      focus: w,
      blur: T
    } = un(e), C = b(() => h(r.value));
    return H(() => {
      const V = rt.filterProps(e), x = !!(e.label || t.label || t.prepend);
      return d(rt, B({
        class: ["v-slider", {
          "v-slider--has-labels": !!t["tick-label"] || y.value,
          "v-slider--focused": p.value,
          "v-slider--pressed": u.value,
          "v-slider--disabled": e.disabled
        }, o.value, e.class],
        style: e.style
      }, V, {
        focused: p.value
      }), {
        ...t,
        prepend: x ? (P) => {
          var S, I;
          return d(oe, null, [((S = t.label) == null ? void 0 : S.call(t, P)) ?? (e.label ? d(ha, {
            id: P.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (I = t.prepend) == null ? void 0 : I.call(t, P)]);
        } : void 0,
        default: (P) => {
          let {
            id: S,
            messagesId: I
          } = P;
          return d("div", {
            class: "v-slider__container",
            onMousedown: k.value ? void 0 : m,
            onTouchstartPassive: k.value ? void 0 : v
          }, [d("input", {
            id: S.value,
            name: e.name || S.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), d(Hd, {
            ref: g,
            start: 0,
            stop: C.value
          }, {
            "tick-label": t["tick-label"]
          }), d(fi, {
            ref: l,
            "aria-describedby": I.value,
            focused: p.value,
            min: s.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": (D) => r.value = D,
            position: C.value,
            elevation: e.elevation,
            onFocus: w,
            onBlur: T,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), lk = $({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...Q()
}, "VColorPickerPreview"), ok = Dt({
  name: "VColorPickerPreview",
  props: lk(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = new AbortController();
    ov(() => a.abort());
    async function l() {
      if (!Zr) return;
      const o = new window.EyeDropper();
      try {
        const i = await o.open({
          signal: a.signal
        }), r = nc(i.sRGBHex);
        t("update:color", {
          ...e.color ?? na,
          ...r
        });
      } catch {
      }
    }
    return H(() => {
      var o, i;
      return d("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [Zr && d("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [d(Se, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), d("div", {
        class: "v-color-picker-preview__dot"
      }, [d("div", {
        style: {
          background: Qu(e.color ?? na)
        }
      }, null)]), d("div", {
        class: "v-color-picker-preview__sliders"
      }, [d(vi, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (o = e.color) == null ? void 0 : o.h,
        "onUpdate:modelValue": (r) => t("update:color", {
          ...e.color ?? na,
          h: r
        }),
        step: 0,
        min: 0,
        max: 360,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null), !e.hideAlpha && d(vi, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((i = e.color) == null ? void 0 : i.a) ?? 1,
        "onUpdate:modelValue": (r) => t("update:color", {
          ...e.color ?? na,
          a: r
        }),
        step: 1 / 256,
        min: 0,
        max: 1,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null)])]);
    }), {};
  }
}), ik = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
}, rk = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
}, sk = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
}, uk = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
}, ck = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
}, dk = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
}, fk = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
}, vk = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
}, mk = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
}, hk = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
}, gk = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
}, yk = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
}, bk = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
}, pk = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
}, kk = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
}, Sk = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
}, wk = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
}, Ck = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
}, xk = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
}, Vk = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Pk = {
  red: ik,
  pink: rk,
  purple: sk,
  deepPurple: uk,
  indigo: ck,
  blue: dk,
  lightBlue: fk,
  cyan: vk,
  teal: mk,
  green: hk,
  lightGreen: gk,
  lime: yk,
  yellow: bk,
  amber: pk,
  orange: kk,
  deepOrange: Sk,
  brown: wk,
  blueGrey: Ck,
  grey: xk,
  shades: Vk
}, Tk = $({
  swatches: {
    type: Array,
    default: () => Ik(Pk)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...Q()
}, "VColorPickerSwatches");
function Ik(e) {
  return Object.keys(e).map((n) => {
    const t = e[n];
    return t.base ? [t.base, t.darken4, t.darken3, t.darken2, t.darken1, t.lighten1, t.lighten2, t.lighten3, t.lighten4, t.lighten5] : [t.black, t.white, t.transparent];
  });
}
const Dk = Dt({
  name: "VColorPickerSwatches",
  props: Tk(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    return H(() => d("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: J(e.maxHeight)
      }, e.style]
    }, [d("div", null, [e.swatches.map((a) => d("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const o = At(l), i = Yl(o), r = Ju(o);
      return d("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => i && t("update:color", i)
      }, [d("div", {
        style: {
          background: r
        }
      }, [e.color && Xt(e.color, i) ? d(we, {
        size: "x-small",
        icon: "$success",
        color: $g(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), so = $({
  color: String,
  ...Bt(),
  ...Q(),
  ...et(),
  ...Je(),
  ...rn(),
  ...va(),
  ...Fe(),
  ...ve(),
  ...ye()
}, "VSheet"), On = L()({
  name: "VSheet",
  props: so(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ce(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = De(O(e, "color")), {
      borderClasses: i
    } = Ot(e), {
      dimensionStyles: r
    } = tt(e), {
      elevationClasses: s
    } = ot(e), {
      locationStyles: c
    } = Kn(e), {
      positionClasses: u
    } = ma(e), {
      roundedClasses: f
    } = ze(e);
    return H(() => d(e.tag, {
      class: ["v-sheet", a.value, l.value, i.value, s.value, u.value, f.value, e.class],
      style: [o.value, r.value, c.value, e.style]
    }, t)), {};
  }
}), Mk = $({
  canvasHeight: {
    type: [String, Number],
    default: 150
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(Bn).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(Bn),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(Bn).includes(n))
  },
  showSwatches: Boolean,
  swatches: Array,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150
  },
  modelValue: {
    type: [Object, String]
  },
  ...We(so({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker"), Bk = Dt({
  name: "VColorPicker",
  props: Mk(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const n = ie(e, "mode"), t = Y(null), a = ie(e, "modelValue", void 0, (s) => {
      if (s == null || s === "") return null;
      let c;
      try {
        c = Yl(At(s));
      } catch (u) {
        return zt(u), null;
      }
      return c;
    }, (s) => s ? K0(s, e.modelValue) : null), l = b(() => a.value ? {
      ...a.value,
      h: t.value ?? a.value.h
    } : null), {
      rtlClasses: o
    } = Qe();
    let i = !0;
    q(a, (s) => {
      if (!i) {
        i = !0;
        return;
      }
      s && (t.value = s.h);
    }, {
      immediate: !0
    });
    const r = (s) => {
      i = !1, t.value = s.h, a.value = s;
    };
    return mt(() => {
      e.modes.includes(n.value) || (n.value = e.modes[0]);
    }), He({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), H(() => {
      const s = On.filterProps(e);
      return d(On, B({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", o.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Qu({
            ...l.value ?? na,
            a: 1
          })
        }, e.style]
      }, s, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && d(W0, {
          key: "canvas",
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && d("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && d(ok, {
          key: "preview",
          color: l.value,
          "onUpdate:color": r,
          hideAlpha: !n.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && d(Q0, {
          key: "edit",
          modes: e.modes,
          mode: n.value,
          "onUpdate:mode": (c) => n.value = c,
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled
        }, null)]), e.showSwatches && d(Dk, {
          key: "swatches",
          color: l.value,
          "onUpdate:color": r,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)]
      });
    }), {};
  }
});
function Ak(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? d(oe, null, [d("span", {
    class: "v-combobox__unmask"
  }, [e.substr(0, n)]), d("span", {
    class: "v-combobox__mask"
  }, [e.substr(n, t)]), d("span", {
    class: "v-combobox__unmask"
  }, [e.substr(n + t)])]) : e;
}
const $k = $({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: !0
  },
  delimiters: Array,
  ...cl({
    filterKeys: ["title"]
  }),
  ...sr({
    hideNoData: !0,
    returnObject: !0
  }),
  ...We(lo({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Yt({
    transition: !1
  })
}, "VCombobox"), _k = L()({
  name: "VCombobox",
  props: $k(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    var me;
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ke(), o = Y(), i = G(!1), r = G(!0), s = G(!1), c = Y(), u = Y(), f = ie(e, "menu"), m = b({
      get: () => f.value,
      set: (K) => {
        var ne;
        f.value && !K && ((ne = c.value) != null && ne.ΨopenChildren) || (f.value = K);
      }
    }), v = G(-1);
    let g = !1;
    const h = b(() => {
      var K;
      return (K = o.value) == null ? void 0 : K.color;
    }), y = b(() => m.value ? e.closeText : e.openText), {
      items: k,
      transformIn: p,
      transformOut: w
    } = tr(e), {
      textColorClasses: T,
      textColorStyles: C
    } = it(h), V = ie(e, "modelValue", [], (K) => p(Ne(K)), (K) => {
      const ne = w(K);
      return e.multiple ? ne : ne[0] ?? null;
    }), x = to(), P = b(() => !!(e.chips || a.chip)), S = b(() => P.value || !!a.selection), I = G(!e.multiple && !S.value ? ((me = V.value[0]) == null ? void 0 : me.title) ?? "" : ""), D = b({
      get: () => I.value,
      set: (K) => {
        var ne;
        if (I.value = K ?? "", !e.multiple && !S.value && (V.value = [hn(e, K)]), K && e.multiple && ((ne = e.delimiters) != null && ne.length)) {
          const ce = K.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
          ce.length > 1 && (ce.forEach((se) => {
            se = se.trim(), se && ee(hn(e, se));
          }), I.value = "");
        }
        K || (v.value = -1), r.value = !K;
      }
    }), M = b(() => typeof e.counterValue == "function" ? e.counterValue(V.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? V.value.length : D.value.length);
    q(I, (K) => {
      g ? be(() => g = !1) : i.value && !m.value && (m.value = !0), t("update:search", K);
    }), q(V, (K) => {
      var ne;
      !e.multiple && !S.value && (I.value = ((ne = K[0]) == null ? void 0 : ne.title) ?? "");
    });
    const {
      filteredItems: A,
      getMatches: E
    } = dl(e, k, () => r.value ? "" : D.value), F = b(() => e.hideSelected ? A.value.filter((K) => !V.value.some((ne) => ne.value === K.value)) : A.value), j = b(() => V.value.map((K) => K.value)), X = b(() => {
      var ne;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && D.value === ((ne = F.value[0]) == null ? void 0 : ne.title)) && F.value.length > 0 && !r.value && !s.value;
    }), N = b(() => e.hideNoData && !F.value.length || e.readonly || (x == null ? void 0 : x.isReadonly.value)), z = Y(), {
      onListScroll: _,
      onListKeydown: R
    } = rr(z, o);
    function U(K) {
      g = !0, e.openOnClear && (m.value = !0);
    }
    function ae() {
      N.value || (m.value = !0);
    }
    function re(K) {
      N.value || (i.value && (K.preventDefault(), K.stopPropagation()), m.value = !m.value);
    }
    function Z(K) {
      var se;
      if (lg(K) || e.readonly || x != null && x.isReadonly.value) return;
      const ne = o.value.selectionStart, ce = V.value.length;
      if ((v.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(K.key)) && K.preventDefault(), ["Enter", "ArrowDown"].includes(K.key) && (m.value = !0), ["Escape"].includes(K.key) && (m.value = !1), ["Enter", "Escape", "Tab"].includes(K.key) && (X.value && ["Enter", "Tab"].includes(K.key) && !V.value.some((fe) => {
        let {
          value: Be
        } = fe;
        return Be === F.value[0].value;
      }) && ee(A.value[0]), r.value = !0), K.key === "ArrowDown" && X.value && ((se = z.value) == null || se.focus("next")), K.key === "Enter" && D.value && (ee(hn(e, D.value)), S.value && (I.value = "")), ["Backspace", "Delete"].includes(K.key)) {
        if (!e.multiple && S.value && V.value.length > 0 && !D.value) return ee(V.value[0], !1);
        if (~v.value) {
          const fe = v.value;
          ee(V.value[v.value], !1), v.value = fe >= ce - 1 ? ce - 2 : fe;
        } else K.key === "Backspace" && !D.value && (v.value = ce - 1);
      }
      if (e.multiple) {
        if (K.key === "ArrowLeft") {
          if (v.value < 0 && ne > 0) return;
          const fe = v.value > -1 ? v.value - 1 : ce - 1;
          V.value[fe] ? v.value = fe : (v.value = -1, o.value.setSelectionRange(D.value.length, D.value.length));
        }
        if (K.key === "ArrowRight") {
          if (v.value < 0) return;
          const fe = v.value + 1;
          V.value[fe] ? v.value = fe : (v.value = -1, o.value.setSelectionRange(0, 0));
        }
      }
    }
    function W() {
      var K;
      i.value && (r.value = !0, (K = o.value) == null || K.focus());
    }
    function ee(K) {
      let ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!K || K.props.disabled))
        if (e.multiple) {
          const ce = V.value.findIndex((fe) => e.valueComparator(fe.value, K.value)), se = ne ?? !~ce;
          if (~ce) {
            const fe = se ? [...V.value, K] : [...V.value];
            fe.splice(ce, 1), V.value = fe;
          } else se && (V.value = [...V.value, K]);
          e.clearOnSelect && (D.value = "");
        } else {
          const ce = ne !== !1;
          V.value = ce ? [K] : [], I.value = ce && !S.value ? K.title : "", be(() => {
            m.value = !1, r.value = !0;
          });
        }
    }
    function Ve(K) {
      i.value = !0, setTimeout(() => {
        s.value = !0;
      });
    }
    function Me(K) {
      s.value = !1;
    }
    function te(K) {
      (K == null || K === "" && !e.multiple && !S.value) && (V.value = []);
    }
    return q(i, (K, ne) => {
      if (!(K || K === ne) && (v.value = -1, m.value = !1, D.value)) {
        if (e.multiple) {
          ee(hn(e, D.value));
          return;
        }
        if (!S.value) return;
        V.value.some((ce) => {
          let {
            title: se
          } = ce;
          return se === D.value;
        }) ? I.value = "" : ee(hn(e, D.value));
      }
    }), q(m, () => {
      if (!e.hideSelected && m.value && V.value.length) {
        const K = F.value.findIndex((ne) => V.value.some((ce) => e.valueComparator(ce.value, ne.value)));
        xe && window.requestAnimationFrame(() => {
          var ne;
          K >= 0 && ((ne = u.value) == null || ne.scrollToIndex(K));
        });
      }
    }), q(() => e.items, (K, ne) => {
      m.value || i.value && !ne.length && K.length && (m.value = !0);
    }), H(() => {
      const K = !!(!e.hideNoData || F.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), ne = V.value.length > 0, ce = An.filterProps(e);
      return d(An, B({
        ref: o
      }, ce, {
        modelValue: D.value,
        "onUpdate:modelValue": [(se) => D.value = se, te],
        focused: i.value,
        "onUpdate:focused": (se) => i.value = se,
        validationValue: V.externalValue,
        counterValue: M.value,
        dirty: ne,
        class: ["v-combobox", {
          "v-combobox--active-menu": m.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selection-slot": !!S.value,
          "v-combobox--selecting-index": v.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }, e.class],
        style: e.style,
        readonly: e.readonly,
        placeholder: ne ? void 0 : e.placeholder,
        "onClick:clear": U,
        "onMousedown:control": ae,
        onKeydown: Z
      }), {
        ...a,
        default: () => d(oe, null, [d(ua, B({
          ref: c,
          modelValue: m.value,
          "onUpdate:modelValue": (se) => m.value = se,
          activator: "parent",
          contentClass: "v-combobox__content",
          disabled: N.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: W
        }, e.menuProps), {
          default: () => [K && d(no, B({
            ref: z,
            selected: j.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (se) => se.preventDefault(),
            onKeydown: R,
            onFocusin: Ve,
            onFocusout: Me,
            onScrollPassive: _,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var se, fe, Be;
              return [(se = a["prepend-item"]) == null ? void 0 : se.call(a), !F.value.length && !e.hideNoData && (((fe = a["no-data"]) == null ? void 0 : fe.call(a)) ?? d(on, {
                title: l(e.noDataText)
              }, null)), d(oo, {
                ref: u,
                renderless: !0,
                items: F.value
              }, {
                default: (yt) => {
                  var Cn;
                  let {
                    item: _e,
                    index: Wt,
                    itemRef: st
                  } = yt;
                  const wn = B(_e.props, {
                    ref: st,
                    key: Wt,
                    active: X.value && Wt === 0 ? !0 : void 0,
                    onClick: () => ee(_e, null)
                  });
                  return ((Cn = a.item) == null ? void 0 : Cn.call(a, {
                    item: _e,
                    index: Wt,
                    props: wn
                  })) ?? d(on, B(wn, {
                    role: "option"
                  }), {
                    prepend: (fl) => {
                      let {
                        isSelected: vl
                      } = fl;
                      return d(oe, null, [e.multiple && !e.hideSelected ? d(ln, {
                        key: _e.value,
                        modelValue: vl,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, _e.props.prependAvatar && d($t, {
                        image: _e.props.prependAvatar
                      }, null), _e.props.prependIcon && d(we, {
                        icon: _e.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var fl, vl;
                      return r.value ? _e.title : Ak(_e.title, (fl = E(_e)) == null ? void 0 : fl.title, ((vl = D.value) == null ? void 0 : vl.length) ?? 0);
                    }
                  });
                }
              }), (Be = a["append-item"]) == null ? void 0 : Be.call(a)];
            }
          })]
        }), V.value.map((se, fe) => {
          function Be(st) {
            st.stopPropagation(), st.preventDefault(), ee(se, !1);
          }
          const yt = {
            "onClick:close": Be,
            onKeydown(st) {
              st.key !== "Enter" && st.key !== " " || (st.preventDefault(), st.stopPropagation(), Be(st));
            },
            onMousedown(st) {
              st.preventDefault(), st.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, _e = P.value ? !!a.chip : !!a.selection, Wt = _e ? jl(P.value ? a.chip({
            item: se,
            index: fe,
            props: yt
          }) : a.selection({
            item: se,
            index: fe
          })) : void 0;
          if (!(_e && !Wt))
            return d("div", {
              key: se.value,
              class: ["v-combobox__selection", fe === v.value && ["v-combobox__selection--selected", T.value]],
              style: fe === v.value ? C.value : {}
            }, [P.value ? a.chip ? d(he, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: se.title
                }
              }
            }, {
              default: () => [Wt]
            }) : d(ga, B({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: se.title,
              disabled: se.props.disabled
            }, yt), null) : Wt ?? d("span", {
              class: "v-combobox__selection-text"
            }, [se.title, e.multiple && fe < V.value.length - 1 && d("span", {
              class: "v-combobox__selection-comma"
            }, [dt(",")])])]);
        })]),
        "append-inner": function() {
          var yt;
          for (var se = arguments.length, fe = new Array(se), Be = 0; Be < se; Be++)
            fe[Be] = arguments[Be];
          return d(oe, null, [(yt = a["append-inner"]) == null ? void 0 : yt.call(a, ...fe), (!e.hideNoData || e.items.length) && e.menuIcon ? d(we, {
            class: "v-combobox__menu-icon",
            icon: e.menuIcon,
            onMousedown: re,
            onClick: Wu,
            "aria-label": l(y.value),
            title: l(y.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), Lt({
      isFocused: i,
      isPristine: r,
      menu: m,
      search: D,
      selectionIndex: v,
      filteredItems: A,
      select: ee
    }, o);
  }
}), Ok = $({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: "$vuetify.confirmEdit.cancel"
  },
  okText: {
    type: String,
    default: "$vuetify.confirmEdit.ok"
  }
}, "VConfirmEdit"), Ek = L()({
  name: "VConfirmEdit",
  props: Ok(),
  emits: {
    cancel: () => !0,
    save: (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), o = Y();
    Ye(() => {
      o.value = structuredClone(kt(l.value));
    });
    const {
      t: i
    } = Ke(), r = b(() => Xt(l.value, o.value));
    function s() {
      l.value = o.value, t("save", o.value);
    }
    function c() {
      o.value = structuredClone(kt(l.value)), t("cancel");
    }
    let u = !1;
    return H(() => {
      var m;
      const f = d(oe, null, [d(Se, {
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: c,
        text: i(e.cancelText)
      }, null), d(Se, {
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: s,
        text: i(e.okText)
      }, null)]);
      return d(oe, null, [(m = a.default) == null ? void 0 : m.call(a, {
        model: o,
        save: s,
        cancel: c,
        isPristine: r.value,
        get actions() {
          return u = !0, f;
        }
      }), !u && f]);
    }), {
      save: s,
      cancel: c,
      isPristine: r
    };
  }
}), zd = $({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), jd = Symbol.for("vuetify:datatable:expanded");
function uo(e) {
  const n = O(e, "expandOnClick"), t = ie(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const c = new Set(t.value);
    s ? c.add(r.value) : c.delete(r.value), t.value = c;
  }
  function l(r) {
    return t.value.has(r.value);
  }
  function o(r) {
    a(r, !l(r));
  }
  const i = {
    expand: a,
    expanded: t,
    expandOnClick: n,
    isExpanded: l,
    toggleExpand: o
  };
  return Le(jd, i), i;
}
function Yd() {
  const e = pe(jd);
  if (!e) throw new Error("foo");
  return e;
}
const fr = $({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), Wd = Symbol.for("vuetify:data-table-group");
function vr(e) {
  return {
    groupBy: ie(e, "groupBy")
  };
}
function co(e) {
  const {
    groupBy: n,
    sortBy: t
  } = e, a = Y(/* @__PURE__ */ new Set()), l = b(() => n.value.map((c) => ({
    ...c,
    order: c.order ?? !1
  })).concat(t.value));
  function o(c) {
    return a.value.has(c.id);
  }
  function i(c) {
    const u = new Set(a.value);
    o(c) ? u.delete(c.id) : u.add(c.id), a.value = u;
  }
  function r(c) {
    function u(f) {
      const m = [];
      for (const v of f.items)
        "type" in v && v.type === "group" ? m.push(...u(v)) : m.push(v);
      return m;
    }
    return u({
      type: "group",
      items: c,
      id: "dummy",
      key: "dummy",
      value: "dummy",
      depth: 0
    });
  }
  const s = {
    sortByWithGroups: l,
    toggleGroup: i,
    opened: a,
    groupBy: n,
    extractRows: r,
    isGroupOpen: o
  };
  return Le(Wd, s), s;
}
function Ud() {
  const e = pe(Wd);
  if (!e) throw new Error("Missing group!");
  return e;
}
function Lk(e, n) {
  if (!e.length) return [];
  const t = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = Ea(a.raw, n);
    t.has(l) || t.set(l, []), t.get(l).push(a);
  }
  return t;
}
function Kd(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!n.length) return [];
  const l = Lk(e, n[0]), o = [], i = n.slice(1);
  return l.forEach((r, s) => {
    const c = n[0], u = `${a}_${c}_${s}`;
    o.push({
      depth: t,
      id: u,
      key: c,
      value: s,
      items: i.length ? Kd(r, i, t + 1, u) : r,
      type: "group"
    });
  }), o;
}
function Gd(e, n) {
  const t = [];
  for (const a of e)
    "type" in a && a.type === "group" ? (a.value != null && t.push(a), (n.has(a.id) || a.value == null) && t.push(...Gd(a.items, n))) : t.push(a);
  return t;
}
function fo(e, n, t) {
  return {
    flatItems: b(() => {
      if (!n.value.length) return e.value;
      const l = Kd(e.value, n.value.map((o) => o.key));
      return Gd(l, t.value);
    })
  };
}
function vo(e) {
  let {
    page: n,
    itemsPerPage: t,
    sortBy: a,
    groupBy: l,
    search: o
  } = e;
  const i = Ue("VDataTable"), r = b(() => ({
    page: n.value,
    itemsPerPage: t.value,
    sortBy: a.value,
    groupBy: l.value,
    search: o.value
  }));
  let s = null;
  q(r, () => {
    Xt(s, r.value) || (s && s.search !== r.value.search && (n.value = 1), i.emit("update:options", r.value), s = r.value);
  }, {
    deep: !0,
    immediate: !0
  });
}
const mr = $({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), qd = Symbol.for("vuetify:data-table-pagination");
function hr(e) {
  const n = ie(e, "page", void 0, (a) => +(a ?? 1)), t = ie(e, "itemsPerPage", void 0, (a) => +(a ?? 10));
  return {
    page: n,
    itemsPerPage: t
  };
}
function gr(e) {
  const {
    page: n,
    itemsPerPage: t,
    itemsLength: a
  } = e, l = b(() => t.value === -1 ? 0 : t.value * (n.value - 1)), o = b(() => t.value === -1 ? a.value : Math.min(a.value, l.value + t.value)), i = b(() => t.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / t.value));
  Ye(() => {
    n.value > i.value && (n.value = i.value);
  });
  function r(m) {
    t.value = m, n.value = 1;
  }
  function s() {
    n.value = qe(n.value + 1, 1, i.value);
  }
  function c() {
    n.value = qe(n.value - 1, 1, i.value);
  }
  function u(m) {
    n.value = qe(m, 1, i.value);
  }
  const f = {
    page: n,
    itemsPerPage: t,
    startIndex: l,
    stopIndex: o,
    pageCount: i,
    itemsLength: a,
    nextPage: s,
    prevPage: c,
    setPage: u,
    setItemsPerPage: r
  };
  return Le(qd, f), f;
}
function Fk() {
  const e = pe(qd);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Xd(e) {
  const n = Ue("usePaginatedItems"), {
    items: t,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: o
  } = e, i = b(() => o.value <= 0 ? t.value : t.value.slice(a.value, l.value));
  return q(i, (r) => {
    n.emit("update:currentItems", r);
  }), {
    paginatedItems: i
  };
}
const Nk = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var a;
    let {
      items: n,
      value: t
    } = e;
    return new Set(t ? [(a = n[0]) == null ? void 0 : a.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: n
    } = e;
    return n;
  }
}, Zd = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      currentPage: t,
      selected: a
    } = e;
    return Zd.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, Jd = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      allItems: t,
      selected: a
    } = e;
    return Jd.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, Qd = $({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: Xt
  }
}, "DataTable-select"), ef = Symbol.for("vuetify:data-table-selection");
function mo(e, n) {
  let {
    allItems: t,
    currentPage: a
  } = n;
  const l = ie(e, "modelValue", e.modelValue, (k) => new Set(Ne(k).map((p) => {
    var w;
    return ((w = t.value.find((T) => e.valueComparator(p, T.value))) == null ? void 0 : w.value) ?? p;
  })), (k) => [...k.values()]), o = b(() => t.value.filter((k) => k.selectable)), i = b(() => a.value.filter((k) => k.selectable)), r = b(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return Nk;
      case "all":
        return Jd;
      case "page":
      default:
        return Zd;
    }
  });
  function s(k) {
    return Ne(k).every((p) => l.value.has(p.value));
  }
  function c(k) {
    return Ne(k).some((p) => l.value.has(p.value));
  }
  function u(k, p) {
    const w = r.value.select({
      items: k,
      value: p,
      selected: new Set(l.value)
    });
    l.value = w;
  }
  function f(k) {
    u([k], !s([k]));
  }
  function m(k) {
    const p = r.value.selectAll({
      value: k,
      allItems: o.value,
      currentPage: i.value,
      selected: new Set(l.value)
    });
    l.value = p;
  }
  const v = b(() => l.value.size > 0), g = b(() => {
    const k = r.value.allSelected({
      allItems: o.value,
      currentPage: i.value
    });
    return !!k.length && s(k);
  }), h = b(() => r.value.showSelectAll), y = {
    toggleSelect: f,
    select: u,
    selectAll: m,
    isSelected: s,
    isSomeSelected: c,
    someSelected: v,
    allSelected: g,
    showSelectAll: h
  };
  return Le(ef, y), y;
}
function ho() {
  const e = pe(ef);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const tf = $({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), nf = Symbol.for("vuetify:data-table-sort");
function go(e) {
  const n = ie(e, "sortBy"), t = O(e, "mustSort"), a = O(e, "multiSort");
  return {
    sortBy: n,
    mustSort: t,
    multiSort: a
  };
}
function yo(e) {
  const {
    sortBy: n,
    mustSort: t,
    multiSort: a,
    page: l
  } = e, o = (s) => {
    if (s.key == null) return;
    let c = n.value.map((f) => ({
      ...f
    })) ?? [];
    const u = c.find((f) => f.key === s.key);
    u ? u.order === "desc" ? t.value ? u.order = "asc" : c = c.filter((f) => f.key !== s.key) : u.order = "desc" : a.value ? c = [...c, {
      key: s.key,
      order: "asc"
    }] : c = [{
      key: s.key,
      order: "asc"
    }], n.value = c, l && (l.value = 1);
  };
  function i(s) {
    return !!n.value.find((c) => c.key === s.key);
  }
  const r = {
    sortBy: n,
    toggleSort: o,
    isSorted: i
  };
  return Le(nf, r), r;
}
function af() {
  const e = pe(nf);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function yr(e, n, t, a) {
  const l = Ke();
  return {
    sortedItems: b(() => {
      var i, r;
      return !t.value.length || e.disableSort ? n.value : Rk(n.value, t.value, l.current.value, {
        transform: a == null ? void 0 : a.transform,
        sortFunctions: {
          ...e.customKeySort,
          ...(i = a == null ? void 0 : a.sortFunctions) == null ? void 0 : i.value
        },
        sortRawFunctions: (r = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : r.value
      });
    })
  };
}
function Rk(e, n, t, a) {
  const l = new Intl.Collator(t, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((i) => [i, a != null && a.transform ? a.transform(i) : i]).sort((i, r) => {
    var s, c;
    for (let u = 0; u < n.length; u++) {
      let f = !1;
      const m = n[u].key, v = n[u].order ?? "asc";
      if (v === !1) continue;
      let g = i[1][m], h = r[1][m], y = i[0].raw, k = r[0].raw;
      if (v === "desc" && ([g, h] = [h, g], [y, k] = [k, y]), (s = a == null ? void 0 : a.sortRawFunctions) != null && s[m]) {
        const p = a.sortRawFunctions[m](y, k);
        if (p == null) continue;
        if (f = !0, p) return p;
      }
      if ((c = a == null ? void 0 : a.sortFunctions) != null && c[m]) {
        const p = a.sortFunctions[m](g, h);
        if (p == null) continue;
        if (f = !0, p) return p;
      }
      if (!f) {
        if (g instanceof Date && h instanceof Date)
          return g.getTime() - h.getTime();
        if ([g, h] = [g, h].map((p) => p != null ? p.toString().toLocaleLowerCase() : p), g !== h)
          return yl(g) && yl(h) ? 0 : yl(g) ? -1 : yl(h) ? 1 : !isNaN(g) && !isNaN(h) ? Number(g) - Number(h) : l.compare(g, h);
      }
    }
    return 0;
  }).map((i) => {
    let [r] = i;
    return r;
  });
}
const Hk = $({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataIterator-items");
function zk(e, n) {
  const t = e.returnObject ? n : Ze(n, e.itemValue), a = Ze(n, e.itemSelectable, !0);
  return {
    type: "item",
    value: t,
    selectable: a,
    raw: n
  };
}
function jk(e, n) {
  const t = [];
  for (const a of n)
    t.push(zk(e, a));
  return t;
}
function Yk(e) {
  return {
    items: b(() => jk(e, e.items))
  };
}
const Wk = $({
  search: String,
  loading: Boolean,
  ...Q(),
  ...Hk(),
  ...Qd(),
  ...tf(),
  ...mr({
    itemsPerPage: 5
  }),
  ...zd(),
  ...fr(),
  ...cl(),
  ...ve(),
  ...Yt({
    transition: {
      component: za,
      hideOnLeave: !0
    }
  })
}, "VDataIterator"), Uk = L()({
  name: "VDataIterator",
  props: Wk(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "groupBy"), l = O(e, "search"), {
      items: o
    } = Yk(e), {
      filteredItems: i
    } = dl(e, o, l, {
      transform: (R) => R.raw
    }), {
      sortBy: r,
      multiSort: s,
      mustSort: c
    } = go(e), {
      page: u,
      itemsPerPage: f
    } = hr(e), {
      toggleSort: m
    } = yo({
      sortBy: r,
      multiSort: s,
      mustSort: c,
      page: u
    }), {
      sortByWithGroups: v,
      opened: g,
      extractRows: h,
      isGroupOpen: y,
      toggleGroup: k
    } = co({
      groupBy: a,
      sortBy: r
    }), {
      sortedItems: p
    } = yr(e, i, v, {
      transform: (R) => R.raw
    }), {
      flatItems: w
    } = fo(p, a, g), T = b(() => w.value.length), {
      startIndex: C,
      stopIndex: V,
      pageCount: x,
      prevPage: P,
      nextPage: S,
      setItemsPerPage: I,
      setPage: D
    } = gr({
      page: u,
      itemsPerPage: f,
      itemsLength: T
    }), {
      paginatedItems: M
    } = Xd({
      items: w,
      startIndex: C,
      stopIndex: V,
      itemsPerPage: f
    }), A = b(() => h(M.value)), {
      isSelected: E,
      select: F,
      selectAll: j,
      toggleSelect: X
    } = mo(e, {
      allItems: o,
      currentPage: A
    }), {
      isExpanded: N,
      toggleExpand: z
    } = uo(e);
    vo({
      page: u,
      itemsPerPage: f,
      sortBy: r,
      groupBy: a,
      search: l
    });
    const _ = b(() => ({
      page: u.value,
      itemsPerPage: f.value,
      sortBy: r.value,
      pageCount: x.value,
      toggleSort: m,
      prevPage: P,
      nextPage: S,
      setPage: D,
      setItemsPerPage: I,
      isSelected: E,
      select: F,
      selectAll: j,
      toggleSelect: X,
      isExpanded: N,
      toggleExpand: z,
      isGroupOpen: y,
      toggleGroup: k,
      items: A.value,
      groupedItems: M.value
    }));
    return H(() => d(e.tag, {
      class: ["v-data-iterator", {
        "v-data-iterator--loading": e.loading
      }, e.class],
      style: e.style
    }, {
      default: () => {
        var R, U;
        return [(R = t.header) == null ? void 0 : R.call(t, _.value), d(vt, {
          transition: e.transition
        }, {
          default: () => {
            var ae, re;
            return [e.loading ? d(al, {
              key: "loader",
              name: "v-data-iterator",
              active: !0
            }, {
              default: (Z) => {
                var W;
                return (W = t.loader) == null ? void 0 : W.call(t, Z);
              }
            }) : d("div", {
              key: "items"
            }, [M.value.length ? (re = t.default) == null ? void 0 : re.call(t, _.value) : (ae = t["no-data"]) == null ? void 0 : ae.call(t)])];
          }
        }), (U = t.footer) == null ? void 0 : U.call(t, _.value)];
      }
    })), {};
  }
});
function Kk() {
  const e = Y([]);
  iv(() => e.value = []);
  function n(t, a) {
    e.value[a] = t;
  }
  return {
    refs: e,
    updateRef: n
  };
}
const Gk = $({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (e) => e.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (e) => e % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: ue,
    default: "$first"
  },
  prevIcon: {
    type: ue,
    default: "$prev"
  },
  nextIcon: {
    type: ue,
    default: "$next"
  },
  lastIcon: {
    type: ue,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...Bt(),
  ...Q(),
  ...nt(),
  ...Je(),
  ...Fe(),
  ...Qt(),
  ...ve({
    tag: "nav"
  }),
  ...ye(),
  ...Et({
    variant: "text"
  })
}, "VPagination"), mi = L()({
  name: "VPagination",
  props: Gk(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = ie(e, "modelValue"), {
      t: o,
      n: i
    } = Ke(), {
      isRtl: r
    } = Qe(), {
      themeClasses: s
    } = Ce(e), {
      width: c
    } = _t(), u = G(-1);
    He(void 0, {
      scoped: !0
    });
    const {
      resizeRef: f
    } = jt((P) => {
      if (!P.length) return;
      const {
        target: S,
        contentRect: I
      } = P[0], D = S.querySelector(".v-pagination__list > *");
      if (!D) return;
      const M = I.width, A = D.offsetWidth + parseFloat(getComputedStyle(D).marginRight) * 2;
      u.value = h(M, A);
    }), m = b(() => parseInt(e.length, 10)), v = b(() => parseInt(e.start, 10)), g = b(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : u.value >= 0 ? u.value : h(c.value, 58));
    function h(P, S) {
      const I = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        +((P - S * I) / S).toFixed(2)
      ));
    }
    const y = b(() => {
      if (m.value <= 0 || isNaN(m.value) || m.value > Number.MAX_SAFE_INTEGER) return [];
      if (g.value <= 0) return [];
      if (g.value === 1) return [l.value];
      if (m.value <= g.value)
        return Kt(m.value, v.value);
      const P = g.value % 2 === 0, S = P ? g.value / 2 : Math.floor(g.value / 2), I = P ? S : S + 1, D = m.value - S;
      if (I - l.value >= 0)
        return [...Kt(Math.max(1, g.value - 1), v.value), e.ellipsis, m.value];
      if (l.value - D >= (P ? 1 : 0)) {
        const M = g.value - 1, A = m.value - M + v.value;
        return [v.value, e.ellipsis, ...Kt(M, A)];
      } else {
        const M = Math.max(1, g.value - 3), A = M === 1 ? l.value : l.value - Math.ceil(M / 2) + v.value;
        return [v.value, e.ellipsis, ...Kt(M, A), e.ellipsis, m.value];
      }
    });
    function k(P, S, I) {
      P.preventDefault(), l.value = S, I && a(I, S);
    }
    const {
      refs: p,
      updateRef: w
    } = Kk();
    He({
      VPaginationBtn: {
        color: O(e, "color"),
        border: O(e, "border"),
        density: O(e, "density"),
        size: O(e, "size"),
        variant: O(e, "variant"),
        rounded: O(e, "rounded"),
        elevation: O(e, "elevation")
      }
    });
    const T = b(() => y.value.map((P, S) => {
      const I = (D) => w(D, S);
      if (typeof P == "string")
        return {
          isActive: !1,
          key: `ellipsis-${S}`,
          page: P,
          props: {
            ref: I,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const D = P === l.value;
        return {
          isActive: D,
          key: P,
          page: i(P),
          props: {
            ref: I,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || +e.length < 2,
            color: D ? e.activeColor : e.color,
            "aria-current": D,
            "aria-label": o(D ? e.currentPageAriaLabel : e.pageAriaLabel, P),
            onClick: (M) => k(M, P)
          }
        };
      }
    })), C = b(() => {
      const P = !!e.disabled || l.value <= v.value, S = !!e.disabled || l.value >= v.value + m.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (I) => k(I, v.value, "first"),
          disabled: P,
          "aria-label": o(e.firstAriaLabel),
          "aria-disabled": P
        } : void 0,
        prev: {
          icon: r.value ? e.nextIcon : e.prevIcon,
          onClick: (I) => k(I, l.value - 1, "prev"),
          disabled: P,
          "aria-label": o(e.previousAriaLabel),
          "aria-disabled": P
        },
        next: {
          icon: r.value ? e.prevIcon : e.nextIcon,
          onClick: (I) => k(I, l.value + 1, "next"),
          disabled: S,
          "aria-label": o(e.nextAriaLabel),
          "aria-disabled": S
        },
        last: e.showFirstLastPage ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (I) => k(I, v.value + m.value - 1, "last"),
          disabled: S,
          "aria-label": o(e.lastAriaLabel),
          "aria-disabled": S
        } : void 0
      };
    });
    function V() {
      var S;
      const P = l.value - v.value;
      (S = p.value[P]) == null || S.$el.focus();
    }
    function x(P) {
      P.key === zo.left && !e.disabled && l.value > +e.start ? (l.value = l.value - 1, be(V)) : P.key === zo.right && !e.disabled && l.value < v.value + m.value - 1 && (l.value = l.value + 1, be(V));
    }
    return H(() => d(e.tag, {
      ref: f,
      class: ["v-pagination", s.value, e.class],
      style: e.style,
      role: "navigation",
      "aria-label": o(e.ariaLabel),
      onKeydown: x,
      "data-test": "v-pagination-root"
    }, {
      default: () => [d("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && d("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [t.first ? t.first(C.value.first) : d(Se, B({
        _as: "VPaginationBtn"
      }, C.value.first), null)]), d("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [t.prev ? t.prev(C.value.prev) : d(Se, B({
        _as: "VPaginationBtn"
      }, C.value.prev), null)]), T.value.map((P, S) => d("li", {
        key: P.key,
        class: ["v-pagination__item", {
          "v-pagination__item--is-active": P.isActive
        }],
        "data-test": "v-pagination-item"
      }, [t.item ? t.item(P) : d(Se, B({
        _as: "VPaginationBtn"
      }, P.props), {
        default: () => [P.page]
      })])), d("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [t.next ? t.next(C.value.next) : d(Se, B({
        _as: "VPaginationBtn"
      }, C.value.next), null)]), e.showFirstLastPage && d("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [t.last ? t.last(C.value.last) : d(Se, B({
        _as: "VPaginationBtn"
      }, C.value.last), null)])])]
    })), {};
  }
}), br = $({
  prevIcon: {
    type: ue,
    default: "$prev"
  },
  nextIcon: {
    type: ue,
    default: "$next"
  },
  firstIcon: {
    type: ue,
    default: "$first"
  },
  lastIcon: {
    type: ue,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter"), Ga = L()({
  name: "VDataTableFooter",
  props: br(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ke(), {
      page: l,
      pageCount: o,
      startIndex: i,
      stopIndex: r,
      itemsLength: s,
      itemsPerPage: c,
      setItemsPerPage: u
    } = Fk(), f = b(() => e.itemsPerPageOptions.map((m) => typeof m == "number" ? {
      value: m,
      title: m === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(m)
    } : {
      ...m,
      title: isNaN(Number(m.title)) ? a(m.title) : m.title
    }));
    return H(() => {
      var v;
      const m = mi.filterProps(e);
      return d("div", {
        class: "v-data-table-footer"
      }, [(v = t.prepend) == null ? void 0 : v.call(t), d("div", {
        class: "v-data-table-footer__items-per-page"
      }, [d("span", null, [a(e.itemsPerPageText)]), d(ur, {
        items: f.value,
        modelValue: c.value,
        "onUpdate:modelValue": (g) => u(Number(g)),
        density: "compact",
        variant: "outlined",
        "hide-details": !0
      }, null)]), d("div", {
        class: "v-data-table-footer__info"
      }, [d("div", null, [a(e.pageText, s.value ? i.value + 1 : 0, r.value, s.value)])]), d("div", {
        class: "v-data-table-footer__pagination"
      }, [d(mi, B({
        modelValue: l.value,
        "onUpdate:modelValue": (g) => l.value = g,
        density: "comfortable",
        "first-aria-label": e.firstPageLabel,
        "last-aria-label": e.lastPageLabel,
        length: o.value,
        "next-aria-label": e.nextPageLabel,
        "previous-aria-label": e.prevPageLabel,
        rounded: !0,
        "show-first-last-page": !0,
        "total-visible": e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, m), null)])]);
    }), {};
  }
}), Fl = Fg({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (e, n) => {
  let {
    slots: t
  } = n;
  const a = e.tag ?? "td";
  return d(a, {
    class: ["v-data-table__td", {
      "v-data-table-column--fixed": e.fixed,
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--no-padding": e.noPadding,
      "v-data-table-column--nowrap": e.nowrap
    }, `v-data-table-column--align-${e.align}`],
    style: {
      height: J(e.height),
      width: J(e.width),
      maxWidth: J(e.maxWidth),
      left: J(e.fixedOffset || null)
    }
  }, {
    default: () => {
      var l;
      return [(l = t.default) == null ? void 0 : l.call(t)];
    }
  });
}), qk = $({
  headers: Array
}, "DataTable-header"), lf = Symbol.for("vuetify:data-table-headers"), of = {
  title: "",
  sortable: !1
}, Xk = {
  ...of,
  width: 48
};
function Zk() {
  const n = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((t) => ({
    element: t,
    priority: 0
  }));
  return {
    enqueue: (t, a) => {
      let l = !1;
      for (let o = 0; o < n.length; o++)
        if (n[o].priority > a) {
          n.splice(o, 0, {
            element: t,
            priority: a
          }), l = !0;
          break;
        }
      l || n.push({
        element: t,
        priority: a
      });
    },
    size: () => n.length,
    count: () => {
      let t = 0;
      if (!n.length) return 0;
      const a = Math.floor(n[0].priority);
      for (let l = 0; l < n.length; l++)
        Math.floor(n[l].priority) === a && (t += 1);
      return t;
    },
    dequeue: () => n.shift()
  };
}
function hi(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    n.push(e);
  else
    for (const t of e.children)
      hi(t, n);
  return n;
}
function rf(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const t of e)
    t.key && n.add(t.key), t.children && rf(t.children, n);
  return n;
}
function Jk(e) {
  if (e.key) {
    if (e.key === "data-table-group") return of;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return Xk;
  }
}
function pr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(n, ...e.children.map((t) => pr(t, n + 1))) : n;
}
function Qk(e) {
  let n = !1;
  function t(o) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (o)
      if (i && (o.fixed = !0), o.fixed)
        if (o.children)
          for (let r = o.children.length - 1; r >= 0; r--)
            t(o.children[r], !0);
        else
          n ? isNaN(+o.width) && Al(`Multiple fixed columns should have a static width (key: ${o.key})`) : o.lastFixed = !0, n = !0;
      else if (o.children)
        for (let r = o.children.length - 1; r >= 0; r--)
          t(o.children[r]);
      else
        n = !1;
  }
  for (let o = e.length - 1; o >= 0; o--)
    t(e[o]);
  function a(o) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!o) return i;
    if (o.children) {
      o.fixedOffset = i;
      for (const r of o.children)
        i = a(r, i);
    } else o.fixed && (o.fixedOffset = i, i += parseFloat(o.width || "0") || 0);
    return i;
  }
  let l = 0;
  for (const o of e)
    l = a(o, l);
}
function e1(e, n) {
  const t = [];
  let a = 0;
  const l = Zk(e);
  for (; l.size() > 0; ) {
    let i = l.count();
    const r = [];
    let s = 1;
    for (; i > 0; ) {
      const {
        element: c,
        priority: u
      } = l.dequeue(), f = n - a - pr(c);
      if (r.push({
        ...c,
        rowspan: f ?? 1,
        colspan: c.children ? hi(c).length : 1
      }), c.children)
        for (const m of c.children) {
          const v = u % 1 + s / Math.pow(10, a + 2);
          l.enqueue(m, a + f + v);
        }
      s += 1, i -= 1;
    }
    a += 1, t.push(r);
  }
  return {
    columns: e.map((i) => hi(i)).flat(),
    headers: t
  };
}
function sf(e) {
  const n = [];
  for (const t of e) {
    const a = {
      ...Jk(t),
      ...t
    }, l = a.key ?? (typeof a.value == "string" ? a.value : null), o = a.value ?? l ?? null, i = {
      ...a,
      key: l,
      value: o,
      sortable: a.sortable ?? (a.key != null || !!a.sort),
      children: a.children ? sf(a.children) : void 0
    };
    n.push(i);
  }
  return n;
}
function kr(e, n) {
  const t = Y([]), a = Y([]), l = Y({}), o = Y({}), i = Y({});
  Ye(() => {
    var h, y, k;
    const c = (e.headers || Object.keys(e.items[0] ?? {}).map((p) => ({
      key: p,
      title: ca(p)
    }))).slice(), u = rf(c);
    (h = n == null ? void 0 : n.groupBy) != null && h.value.length && !u.has("data-table-group") && c.unshift({
      key: "data-table-group",
      title: "Group"
    }), (y = n == null ? void 0 : n.showSelect) != null && y.value && !u.has("data-table-select") && c.unshift({
      key: "data-table-select"
    }), (k = n == null ? void 0 : n.showExpand) != null && k.value && !u.has("data-table-expand") && c.push({
      key: "data-table-expand"
    });
    const f = sf(c);
    Qk(f);
    const m = Math.max(...f.map((p) => pr(p))) + 1, v = e1(f, m);
    t.value = v.headers, a.value = v.columns;
    const g = v.headers.flat(1);
    for (const p of g)
      p.key && (p.sortable && (p.sort && (l.value[p.key] = p.sort), p.sortRaw && (o.value[p.key] = p.sortRaw)), p.filter && (i.value[p.key] = p.filter));
  });
  const r = {
    headers: t,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: o,
    filterFunctions: i
  };
  return Le(lf, r), r;
}
function bo() {
  const e = pe(lf);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const uf = $({
  color: String,
  sticky: Boolean,
  disableSort: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: ue,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: ue,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  ...Nn(),
  ...Jl()
}, "VDataTableHeaders"), En = L()({
  name: "VDataTableHeaders",
  props: uf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ke(), {
      toggleSort: l,
      sortBy: o,
      isSorted: i
    } = af(), {
      someSelected: r,
      allSelected: s,
      selectAll: c,
      showSelectAll: u
    } = ho(), {
      columns: f,
      headers: m
    } = bo(), {
      loaderClasses: v
    } = nl(e);
    function g(P, S) {
      if (!(!e.sticky && !P.fixed))
        return {
          position: "sticky",
          left: P.fixed ? J(P.fixedOffset) : void 0,
          top: e.sticky ? `calc(var(--v-table-header-height) * ${S})` : void 0
        };
    }
    function h(P) {
      const S = o.value.find((I) => I.key === P.key);
      return S ? S.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: y,
      backgroundColorStyles: k
    } = De(e, "color"), {
      displayClasses: p,
      mobile: w
    } = _t(e), T = b(() => ({
      headers: m.value,
      columns: f.value,
      toggleSort: l,
      isSorted: i,
      sortBy: o.value,
      someSelected: r.value,
      allSelected: s.value,
      selectAll: c,
      getSortIcon: h
    })), C = b(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky
    }, p.value, v.value]), V = (P) => {
      let {
        column: S,
        x: I,
        y: D
      } = P;
      const M = S.key === "data-table-select" || S.key === "data-table-expand", A = B(e.headerProps ?? {}, S.headerProps ?? {});
      return d(Fl, B({
        tag: "th",
        align: S.align,
        class: [{
          "v-data-table__th--sortable": S.sortable && !e.disableSort,
          "v-data-table__th--sorted": i(S),
          "v-data-table__th--fixed": S.fixed
        }, ...C.value],
        style: {
          width: J(S.width),
          minWidth: J(S.minWidth),
          maxWidth: J(S.maxWidth),
          ...g(S, D)
        },
        colspan: S.colspan,
        rowspan: S.rowspan,
        onClick: S.sortable ? () => l(S) : void 0,
        fixed: S.fixed,
        nowrap: S.nowrap,
        lastFixed: S.lastFixed,
        noPadding: M
      }, A), {
        default: () => {
          var j;
          const E = `header.${S.key}`, F = {
            column: S,
            selectAll: c,
            isSorted: i,
            toggleSort: l,
            sortBy: o.value,
            someSelected: r.value,
            allSelected: s.value,
            getSortIcon: h
          };
          return t[E] ? t[E](F) : S.key === "data-table-select" ? ((j = t["header.data-table-select"]) == null ? void 0 : j.call(t, F)) ?? (u.value && d(ln, {
            modelValue: s.value,
            indeterminate: r.value && !s.value,
            "onUpdate:modelValue": c
          }, null)) : d("div", {
            class: "v-data-table-header__content"
          }, [d("span", null, [S.title]), S.sortable && !e.disableSort && d(we, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: h(S)
          }, null), e.multiSort && i(S) && d("div", {
            key: "badge",
            class: ["v-data-table-header__sort-badge", ...y.value],
            style: k.value
          }, [o.value.findIndex((X) => X.key === S.key) + 1])]);
        }
      });
    }, x = () => {
      const P = B(e.headerProps ?? {} ?? {}), S = b(() => f.value.filter((D) => (D == null ? void 0 : D.sortable) && !e.disableSort)), I = b(() => {
        if (f.value.find((M) => M.key === "data-table-select") != null)
          return s.value ? "$checkboxOn" : r.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return d(Fl, B({
        tag: "th",
        class: [...C.value],
        colspan: m.value.length + 1
      }, P), {
        default: () => [d("div", {
          class: "v-data-table-header__content"
        }, [d(ur, {
          chips: !0,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: S.value,
          label: a("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => o.value = [],
          appendIcon: I.value,
          "onClick:append": () => c(!s.value)
        }, {
          ...t,
          chip: (D) => {
            var M;
            return d(ga, {
              onClick: (M = D.item.raw) != null && M.sortable ? () => l(D.item.raw) : void 0,
              onMousedown: (A) => {
                A.preventDefault(), A.stopPropagation();
              }
            }, {
              default: () => [D.item.title, d(we, {
                class: ["v-data-table__td-sort-icon", i(D.item.raw) && "v-data-table__td-sort-icon-active"],
                icon: h(D.item.raw),
                size: "small"
              }, null)]
            });
          }
        })])]
      });
    };
    H(() => w.value ? d("tr", null, [d(x, null, null)]) : d(oe, null, [t.headers ? t.headers(T.value) : m.value.map((P, S) => d("tr", null, [P.map((I, D) => d(V, {
      column: I,
      x: D,
      y: S
    }, null))])), e.loading && d("tr", {
      class: "v-data-table-progress"
    }, [d("th", {
      colspan: f.value.length
    }, [d(al, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: t.loader
    })])])]));
  }
}), t1 = $({
  item: {
    type: Object,
    required: !0
  }
}, "VDataTableGroupHeaderRow"), n1 = L()({
  name: "VDataTableGroupHeaderRow",
  props: t1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: o
    } = Ud(), {
      isSelected: i,
      isSomeSelected: r,
      select: s
    } = ho(), {
      columns: c
    } = bo(), u = b(() => o([e.item]));
    return () => d("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [c.value.map((f) => {
      var m, v;
      if (f.key === "data-table-group") {
        const g = a(e.item) ? "$expand" : "$next", h = () => l(e.item);
        return ((m = t["data-table-group"]) == null ? void 0 : m.call(t, {
          item: e.item,
          count: u.value.length,
          props: {
            icon: g,
            onClick: h
          }
        })) ?? d(Fl, {
          class: "v-data-table-group-header-row__column"
        }, {
          default: () => [d(Se, {
            size: "small",
            variant: "text",
            icon: g,
            onClick: h
          }, null), d("span", null, [e.item.value]), d("span", null, [dt("("), u.value.length, dt(")")])]
        });
      }
      if (f.key === "data-table-select") {
        const g = i(u.value), h = r(u.value) && !g, y = (k) => s(u.value, k);
        return ((v = t["data-table-select"]) == null ? void 0 : v.call(t, {
          props: {
            modelValue: g,
            indeterminate: h,
            "onUpdate:modelValue": y
          }
        })) ?? d("td", null, [d(ln, {
          modelValue: g,
          indeterminate: h,
          "onUpdate:modelValue": y
        }, null)]);
      }
      return d("td", null, null);
    })]);
  }
}), a1 = $({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: at(),
  onContextmenu: at(),
  onDblclick: at(),
  ...Nn()
}, "VDataTableRow"), Sr = L()({
  name: "VDataTableRow",
  props: a1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      displayClasses: a,
      mobile: l
    } = _t(e, "v-data-table__tr"), {
      isSelected: o,
      toggleSelect: i,
      someSelected: r,
      allSelected: s,
      selectAll: c
    } = ho(), {
      isExpanded: u,
      toggleExpand: f
    } = Yd(), {
      toggleSort: m,
      sortBy: v,
      isSorted: g
    } = af(), {
      columns: h
    } = bo();
    H(() => d("tr", {
      class: ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, a.value],
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && h.value.map((y, k) => {
      const p = e.item, w = `item.${y.key}`, T = `header.${y.key}`, C = {
        index: e.index,
        item: p.raw,
        internalItem: p,
        value: Ea(p.columns, y.key),
        column: y,
        isSelected: o,
        toggleSelect: i,
        isExpanded: u,
        toggleExpand: f
      }, V = {
        column: y,
        selectAll: c,
        isSorted: g,
        toggleSort: m,
        sortBy: v.value,
        someSelected: r.value,
        allSelected: s.value,
        getSortIcon: () => ""
      }, x = typeof e.cellProps == "function" ? e.cellProps({
        index: C.index,
        item: C.item,
        internalItem: C.internalItem,
        value: C.value,
        column: y
      }) : e.cellProps, P = typeof y.cellProps == "function" ? y.cellProps({
        index: C.index,
        item: C.item,
        internalItem: C.internalItem,
        value: C.value
      }) : y.cellProps;
      return d(Fl, B({
        align: y.align,
        class: {
          "v-data-table__td--expanded-row": y.key === "data-table-expand",
          "v-data-table__td--select-row": y.key === "data-table-select"
        },
        fixed: y.fixed,
        fixedOffset: y.fixedOffset,
        lastFixed: y.lastFixed,
        maxWidth: l.value ? void 0 : y.maxWidth,
        noPadding: y.key === "data-table-select" || y.key === "data-table-expand",
        nowrap: y.nowrap,
        width: l.value ? void 0 : y.width
      }, x, P), {
        default: () => {
          var I, D, M, A, E;
          if (t[w] && !l.value) return (I = t[w]) == null ? void 0 : I.call(t, C);
          if (y.key === "data-table-select")
            return ((D = t["item.data-table-select"]) == null ? void 0 : D.call(t, C)) ?? d(ln, {
              disabled: !p.selectable,
              modelValue: o([p]),
              onClick: Ir(() => i(p), ["stop"])
            }, null);
          if (y.key === "data-table-expand")
            return ((M = t["item.data-table-expand"]) == null ? void 0 : M.call(t, C)) ?? d(Se, {
              icon: u(p) ? "$collapse" : "$expand",
              size: "small",
              variant: "text",
              onClick: Ir(() => f(p), ["stop"])
            }, null);
          const S = Ee(C.value);
          return l.value ? d(oe, null, [d("div", {
            class: "v-data-table__td-title"
          }, [((A = t[T]) == null ? void 0 : A.call(t, V)) ?? y.title]), d("div", {
            class: "v-data-table__td-value"
          }, [((E = t[w]) == null ? void 0 : E.call(t, C)) ?? S])]) : S;
        }
      });
    })]));
  }
}), cf = $({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...Nn()
}, "VDataTableRows"), Ln = L()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: cf(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      columns: l
    } = bo(), {
      expandOnClick: o,
      toggleExpand: i,
      isExpanded: r
    } = Yd(), {
      isSelected: s,
      toggleSelect: c
    } = ho(), {
      toggleGroup: u,
      isGroupOpen: f
    } = Ud(), {
      t: m
    } = Ke(), {
      mobile: v
    } = _t(e);
    return H(() => {
      var g, h;
      return e.loading && (!e.items.length || a.loading) ? d("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [d("td", {
        colspan: l.value.length
      }, [((g = a.loading) == null ? void 0 : g.call(a)) ?? m(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? d("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [d("td", {
        colspan: l.value.length
      }, [((h = a["no-data"]) == null ? void 0 : h.call(a)) ?? m(e.noDataText)])]) : d(oe, null, [e.items.map((y, k) => {
        var T;
        if (y.type === "group") {
          const C = {
            index: k,
            item: y,
            columns: l.value,
            isExpanded: r,
            toggleExpand: i,
            isSelected: s,
            toggleSelect: c,
            toggleGroup: u,
            isGroupOpen: f
          };
          return a["group-header"] ? a["group-header"](C) : d(n1, B({
            key: `group-header_${y.id}`,
            item: y
          }, ps(t, ":group-header", () => C)), a);
        }
        const p = {
          index: k,
          item: y.raw,
          internalItem: y,
          columns: l.value,
          isExpanded: r,
          toggleExpand: i,
          isSelected: s,
          toggleSelect: c
        }, w = {
          ...p,
          props: B({
            key: `item_${y.key ?? y.index}`,
            onClick: o.value ? () => {
              i(y);
            } : void 0,
            index: k,
            item: y,
            cellProps: e.cellProps,
            mobile: v.value
          }, ps(t, ":row", () => p), typeof e.rowProps == "function" ? e.rowProps({
            item: p.item,
            index: p.index,
            internalItem: p.internalItem
          }) : e.rowProps)
        };
        return d(oe, {
          key: w.props.key
        }, [a.item ? a.item(w) : d(Sr, w.props, a), r(y) && ((T = a["expanded-row"]) == null ? void 0 : T.call(a, p))]);
      })]);
    }), {};
  }
}), df = $({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...Q(),
  ...nt(),
  ...ve(),
  ...ye()
}, "VTable"), Fn = L()({
  name: "VTable",
  props: df(),
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const {
      themeClasses: l
    } = Ce(e), {
      densityClasses: o
    } = gt(e);
    return H(() => d(e.tag, {
      class: ["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!t.top,
        "v-table--has-bottom": !!t.bottom,
        "v-table--hover": e.hover
      }, l.value, o.value, e.class],
      style: e.style
    }, {
      default: () => {
        var i, r, s;
        return [(i = t.top) == null ? void 0 : i.call(t), t.default ? d("div", {
          class: "v-table__wrapper",
          style: {
            height: J(e.height)
          }
        }, [d("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
      }
    })), {};
  }
}), l1 = $({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function o1(e, n, t, a) {
  const l = e.returnObject ? n : Ze(n, e.itemValue), o = Ze(n, e.itemSelectable, !0), i = a.reduce((r, s) => (s.key != null && (r[s.key] = Ze(n, s.value)), r), {});
  return {
    type: "item",
    key: e.returnObject ? Ze(n, e.itemValue) : l,
    index: t,
    value: l,
    selectable: o,
    columns: i,
    raw: n
  };
}
function i1(e, n, t) {
  return n.map((a, l) => o1(e, a, l, t));
}
function wr(e, n) {
  return {
    items: b(() => i1(e, e.items, n.value))
  };
}
const Cr = $({
  ...cf(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...zd(),
  ...fr(),
  ...qk(),
  ...l1(),
  ...Qd(),
  ...tf(),
  ...uf(),
  ...df()
}, "DataTable"), r1 = $({
  ...mr(),
  ...Cr(),
  ...cl(),
  ...br()
}, "VDataTable"), s1 = L()({
  name: "VDataTable",
  props: r1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = vr(e), {
      sortBy: o,
      multiSort: i,
      mustSort: r
    } = go(e), {
      page: s,
      itemsPerPage: c
    } = hr(e), {
      columns: u,
      headers: f,
      sortFunctions: m,
      sortRawFunctions: v,
      filterFunctions: g
    } = kr(e, {
      groupBy: l,
      showSelect: O(e, "showSelect"),
      showExpand: O(e, "showExpand")
    }), {
      items: h
    } = wr(e, u), y = O(e, "search"), {
      filteredItems: k
    } = dl(e, h, y, {
      transform: (W) => W.columns,
      customKeyFilter: g
    }), {
      toggleSort: p
    } = yo({
      sortBy: o,
      multiSort: i,
      mustSort: r,
      page: s
    }), {
      sortByWithGroups: w,
      opened: T,
      extractRows: C,
      isGroupOpen: V,
      toggleGroup: x
    } = co({
      groupBy: l,
      sortBy: o
    }), {
      sortedItems: P
    } = yr(e, k, w, {
      transform: (W) => W.columns,
      sortFunctions: m,
      sortRawFunctions: v
    }), {
      flatItems: S
    } = fo(P, l, T), I = b(() => S.value.length), {
      startIndex: D,
      stopIndex: M,
      pageCount: A,
      setItemsPerPage: E
    } = gr({
      page: s,
      itemsPerPage: c,
      itemsLength: I
    }), {
      paginatedItems: F
    } = Xd({
      items: S,
      startIndex: D,
      stopIndex: M,
      itemsPerPage: c
    }), j = b(() => C(F.value)), {
      isSelected: X,
      select: N,
      selectAll: z,
      toggleSelect: _,
      someSelected: R,
      allSelected: U
    } = mo(e, {
      allItems: h,
      currentPage: j
    }), {
      isExpanded: ae,
      toggleExpand: re
    } = uo(e);
    vo({
      page: s,
      itemsPerPage: c,
      sortBy: o,
      groupBy: l,
      search: y
    }), He({
      VDataTableRows: {
        hideNoData: O(e, "hideNoData"),
        noDataText: O(e, "noDataText"),
        loading: O(e, "loading"),
        loadingText: O(e, "loadingText")
      }
    });
    const Z = b(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: o.value,
      pageCount: A.value,
      toggleSort: p,
      setItemsPerPage: E,
      someSelected: R.value,
      allSelected: U.value,
      isSelected: X,
      select: N,
      selectAll: z,
      toggleSelect: _,
      isExpanded: ae,
      toggleExpand: re,
      isGroupOpen: V,
      toggleGroup: x,
      items: j.value.map((W) => W.raw),
      internalItems: j.value,
      groupedItems: F.value,
      columns: u.value,
      headers: f.value
    }));
    return H(() => {
      const W = Ga.filterProps(e), ee = En.filterProps(e), Ve = Ln.filterProps(e), Me = Fn.filterProps(e);
      return d(Fn, B({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, Me), {
        top: () => {
          var te;
          return (te = a.top) == null ? void 0 : te.call(a, Z.value);
        },
        default: () => {
          var te, me, K, ne, ce, se;
          return a.default ? a.default(Z.value) : d(oe, null, [(te = a.colgroup) == null ? void 0 : te.call(a, Z.value), !e.hideDefaultHeader && d("thead", {
            key: "thead"
          }, [d(En, ee, a)]), (me = a.thead) == null ? void 0 : me.call(a, Z.value), !e.hideDefaultBody && d("tbody", null, [(K = a["body.prepend"]) == null ? void 0 : K.call(a, Z.value), a.body ? a.body(Z.value) : d(Ln, B(t, Ve, {
            items: F.value
          }), a), (ne = a["body.append"]) == null ? void 0 : ne.call(a, Z.value)]), (ce = a.tbody) == null ? void 0 : ce.call(a, Z.value), (se = a.tfoot) == null ? void 0 : se.call(a, Z.value)]);
        },
        bottom: () => a.bottom ? a.bottom(Z.value) : !e.hideDefaultFooter && d(oe, null, [d(rl, null, null), d(Ga, W, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
}), u1 = $({
  ...Cr(),
  ...fr(),
  ...Cd(),
  ...cl()
}, "VDataTableVirtual"), c1 = L()({
  name: "VDataTableVirtual",
  props: u1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = vr(e), {
      sortBy: o,
      multiSort: i,
      mustSort: r
    } = go(e), {
      columns: s,
      headers: c,
      filterFunctions: u,
      sortFunctions: f,
      sortRawFunctions: m
    } = kr(e, {
      groupBy: l,
      showSelect: O(e, "showSelect"),
      showExpand: O(e, "showExpand")
    }), {
      items: v
    } = wr(e, s), g = O(e, "search"), {
      filteredItems: h
    } = dl(e, v, g, {
      transform: (ee) => ee.columns,
      customKeyFilter: u
    }), {
      toggleSort: y
    } = yo({
      sortBy: o,
      multiSort: i,
      mustSort: r
    }), {
      sortByWithGroups: k,
      opened: p,
      extractRows: w,
      isGroupOpen: T,
      toggleGroup: C
    } = co({
      groupBy: l,
      sortBy: o
    }), {
      sortedItems: V
    } = yr(e, h, k, {
      transform: (ee) => ee.columns,
      sortFunctions: f,
      sortRawFunctions: m
    }), {
      flatItems: x
    } = fo(V, l, p), P = b(() => w(x.value)), {
      isSelected: S,
      select: I,
      selectAll: D,
      toggleSelect: M,
      someSelected: A,
      allSelected: E
    } = mo(e, {
      allItems: P,
      currentPage: P
    }), {
      isExpanded: F,
      toggleExpand: j
    } = uo(e), {
      containerRef: X,
      markerRef: N,
      paddingTop: z,
      paddingBottom: _,
      computedItems: R,
      handleItemResize: U,
      handleScroll: ae,
      handleScrollend: re
    } = xd(e, x), Z = b(() => R.value.map((ee) => ee.raw));
    vo({
      sortBy: o,
      page: G(1),
      itemsPerPage: G(-1),
      groupBy: l,
      search: g
    }), He({
      VDataTableRows: {
        hideNoData: O(e, "hideNoData"),
        noDataText: O(e, "noDataText"),
        loading: O(e, "loading"),
        loadingText: O(e, "loadingText")
      }
    });
    const W = b(() => ({
      sortBy: o.value,
      toggleSort: y,
      someSelected: A.value,
      allSelected: E.value,
      isSelected: S,
      select: I,
      selectAll: D,
      toggleSelect: M,
      isExpanded: F,
      toggleExpand: j,
      isGroupOpen: T,
      toggleGroup: C,
      items: P.value.map((ee) => ee.raw),
      internalItems: P.value,
      groupedItems: x.value,
      columns: s.value,
      headers: c.value
    }));
    H(() => {
      const ee = En.filterProps(e), Ve = Ln.filterProps(e), Me = Fn.filterProps(e);
      return d(Fn, B({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, Me), {
        top: () => {
          var te;
          return (te = a.top) == null ? void 0 : te.call(a, W.value);
        },
        wrapper: () => {
          var te, me, K;
          return d("div", {
            ref: X,
            onScrollPassive: ae,
            onScrollend: re,
            class: "v-table__wrapper",
            style: {
              height: J(e.height)
            }
          }, [d("table", null, [(te = a.colgroup) == null ? void 0 : te.call(a, W.value), !e.hideDefaultHeader && d("thead", {
            key: "thead"
          }, [d(En, B(ee, {
            sticky: e.fixedHeader
          }), a)]), !e.hideDefaultBody && d("tbody", null, [d("tr", {
            ref: N,
            style: {
              height: J(z.value),
              border: 0
            }
          }, [d("td", {
            colspan: s.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)]), (me = a["body.prepend"]) == null ? void 0 : me.call(a, W.value), d(Ln, B(t, Ve, {
            items: Z.value
          }), {
            ...a,
            item: (ne) => d(wd, {
              key: ne.internalItem.index,
              renderless: !0,
              "onUpdate:height": (ce) => U(ne.internalItem.index, ce)
            }, {
              default: (ce) => {
                var fe;
                let {
                  itemRef: se
                } = ce;
                return ((fe = a.item) == null ? void 0 : fe.call(a, {
                  ...ne,
                  itemRef: se
                })) ?? d(Sr, B(ne.props, {
                  ref: se,
                  key: ne.internalItem.index,
                  index: ne.internalItem.index
                }), a);
              }
            })
          }), (K = a["body.append"]) == null ? void 0 : K.call(a, W.value), d("tr", {
            style: {
              height: J(_.value),
              border: 0
            }
          }, [d("td", {
            colspan: s.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var te;
          return (te = a.bottom) == null ? void 0 : te.call(a, W.value);
        }
      });
    });
  }
}), d1 = $({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...mr(),
  ...Cr(),
  ...br()
}, "VDataTableServer"), f1 = L()({
  name: "VDataTableServer",
  props: d1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = vr(e), {
      sortBy: o,
      multiSort: i,
      mustSort: r
    } = go(e), {
      page: s,
      itemsPerPage: c
    } = hr(e), u = b(() => parseInt(e.itemsLength, 10)), {
      columns: f,
      headers: m
    } = kr(e, {
      groupBy: l,
      showSelect: O(e, "showSelect"),
      showExpand: O(e, "showExpand")
    }), {
      items: v
    } = wr(e, f), {
      toggleSort: g
    } = yo({
      sortBy: o,
      multiSort: i,
      mustSort: r,
      page: s
    }), {
      opened: h,
      isGroupOpen: y,
      toggleGroup: k,
      extractRows: p
    } = co({
      groupBy: l,
      sortBy: o
    }), {
      pageCount: w,
      setItemsPerPage: T
    } = gr({
      page: s,
      itemsPerPage: c,
      itemsLength: u
    }), {
      flatItems: C
    } = fo(v, l, h), {
      isSelected: V,
      select: x,
      selectAll: P,
      toggleSelect: S,
      someSelected: I,
      allSelected: D
    } = mo(e, {
      allItems: v,
      currentPage: v
    }), {
      isExpanded: M,
      toggleExpand: A
    } = uo(e), E = b(() => p(v.value));
    vo({
      page: s,
      itemsPerPage: c,
      sortBy: o,
      groupBy: l,
      search: O(e, "search")
    }), Le("v-data-table", {
      toggleSort: g,
      sortBy: o
    }), He({
      VDataTableRows: {
        hideNoData: O(e, "hideNoData"),
        noDataText: O(e, "noDataText"),
        loading: O(e, "loading"),
        loadingText: O(e, "loadingText")
      }
    });
    const F = b(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: o.value,
      pageCount: w.value,
      toggleSort: g,
      setItemsPerPage: T,
      someSelected: I.value,
      allSelected: D.value,
      isSelected: V,
      select: x,
      selectAll: P,
      toggleSelect: S,
      isExpanded: M,
      toggleExpand: A,
      isGroupOpen: y,
      toggleGroup: k,
      items: E.value.map((j) => j.raw),
      internalItems: E.value,
      groupedItems: C.value,
      columns: f.value,
      headers: m.value
    }));
    H(() => {
      const j = Ga.filterProps(e), X = En.filterProps(e), N = Ln.filterProps(e), z = Fn.filterProps(e);
      return d(Fn, B({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, z), {
        top: () => {
          var _;
          return (_ = a.top) == null ? void 0 : _.call(a, F.value);
        },
        default: () => {
          var _, R, U, ae, re, Z;
          return a.default ? a.default(F.value) : d(oe, null, [(_ = a.colgroup) == null ? void 0 : _.call(a, F.value), !e.hideDefaultHeader && d("thead", {
            key: "thead",
            class: "v-data-table__thead",
            role: "rowgroup"
          }, [d(En, B(X, {
            sticky: e.fixedHeader
          }), a)]), (R = a.thead) == null ? void 0 : R.call(a, F.value), !e.hideDefaultBody && d("tbody", {
            class: "v-data-table__tbody",
            role: "rowgroup"
          }, [(U = a["body.prepend"]) == null ? void 0 : U.call(a, F.value), a.body ? a.body(F.value) : d(Ln, B(t, N, {
            items: C.value
          }), a), (ae = a["body.append"]) == null ? void 0 : ae.call(a, F.value)]), (re = a.tbody) == null ? void 0 : re.call(a, F.value), (Z = a.tfoot) == null ? void 0 : Z.call(a, F.value)]);
        },
        bottom: () => a.bottom ? a.bottom(F.value) : !e.hideDefaultFooter && d(oe, null, [d(rl, null, null), d(Ga, j, {
          prepend: a["footer.prepend"]
        })])
      });
    });
  }
}), v1 = $({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...Q(),
  ...ve()
}, "VContainer"), m1 = L()({
  name: "VContainer",
  props: v1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = Qe();
    return H(() => d(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class],
      style: e.style
    }, t)), {};
  }
}), ff = Ul.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), vf = Ul.reduce((e, n) => {
  const t = "offset" + ca(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), mf = Ul.reduce((e, n) => {
  const t = "order" + ca(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Ys = {
  col: Object.keys(ff),
  offset: Object.keys(vf),
  order: Object.keys(mf)
};
function h1(e, n, t) {
  let a = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (t === "" || t === !0) || (a += `-${t}`), a.toLowerCase();
  }
}
const g1 = ["auto", "start", "end", "center", "baseline", "stretch"], y1 = $({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...ff,
  offset: {
    type: [String, Number],
    default: null
  },
  ...vf,
  order: {
    type: [String, Number],
    default: null
  },
  ...mf,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => g1.includes(e)
  },
  ...Q(),
  ...ve()
}, "VCol"), b1 = L()({
  name: "VCol",
  props: y1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => {
      const l = [];
      let o;
      for (o in Ys)
        Ys[o].forEach((r) => {
          const s = e[r], c = h1(o, r, s);
          c && l.push(c);
        });
      const i = l.some((r) => r.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !i || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => {
      var l;
      return bn(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), xr = ["start", "end", "center"], hf = ["space-between", "space-around", "space-evenly"];
function Vr(e, n) {
  return Ul.reduce((t, a) => {
    const l = e + ca(a);
    return t[l] = n(), t;
  }, {});
}
const p1 = [...xr, "baseline", "stretch"], gf = (e) => p1.includes(e), yf = Vr("align", () => ({
  type: String,
  default: null,
  validator: gf
})), k1 = [...xr, ...hf], bf = (e) => k1.includes(e), pf = Vr("justify", () => ({
  type: String,
  default: null,
  validator: bf
})), S1 = [...xr, ...hf, "stretch"], kf = (e) => S1.includes(e), Sf = Vr("alignContent", () => ({
  type: String,
  default: null,
  validator: kf
})), Ws = {
  align: Object.keys(yf),
  justify: Object.keys(pf),
  alignContent: Object.keys(Sf)
}, w1 = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function C1(e, n, t) {
  let a = w1[e];
  if (t != null) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${t}`, a.toLowerCase();
  }
}
const x1 = $({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: gf
  },
  ...yf,
  justify: {
    type: String,
    default: null,
    validator: bf
  },
  ...pf,
  alignContent: {
    type: String,
    default: null,
    validator: kf
  },
  ...Sf,
  ...Q(),
  ...ve()
}, "VRow"), V1 = L()({
  name: "VRow",
  props: x1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => {
      const l = [];
      let o;
      for (o in Ws)
        Ws[o].forEach((i) => {
          const r = e[i], s = C1(o, i, r);
          s && l.push(s);
        });
      return l.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), l;
    });
    return () => {
      var l;
      return bn(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), wf = Jt("v-spacer", "div", "VSpacer"), Cf = $({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: !1
  },
  nextIcon: {
    type: ue,
    default: "$next"
  },
  prevIcon: {
    type: ue,
    default: "$prev"
  },
  modeIcon: {
    type: ue,
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), gi = L()({
  name: "VDatePickerControls",
  props: Cf(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = b(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = b(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), o = b(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), i = b(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function r() {
      t("click:prev");
    }
    function s() {
      t("click:next");
    }
    function c() {
      t("click:year");
    }
    function u() {
      t("click:month");
    }
    return H(() => d("div", {
      class: ["v-date-picker-controls"]
    }, [d(Se, {
      class: "v-date-picker-controls__month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: u
    }, null), d(Se, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), d(wf, {
      key: "mode-spacer"
    }, null), d("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [d(Se, {
      disabled: o.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: r
    }, null), d(Se, {
      disabled: i.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: s
    }, null)])])), {};
  }
}), P1 = $({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: at()
}, "VDatePickerHeader"), yi = L()({
  name: "VDatePickerHeader",
  props: P1(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = De(e, "color");
    function i() {
      t("click");
    }
    function r() {
      t("click:append");
    }
    return H(() => {
      const s = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return d("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value],
        style: o.value,
        onClick: i
      }, [a.prepend && d("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), s && d(vt, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var u;
          return [d("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [((u = a.default) == null ? void 0 : u.call(a)) ?? e.header])];
        }
      }), c && d("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? d(he, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => {
          var u;
          return [(u = a.append) == null ? void 0 : u.call(a)];
        }
      }) : d(Se, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
}), T1 = $({
  allowedDates: [Array, Function],
  disabled: Boolean,
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  },
  firstDayOfWeek: [Number, String]
}, "calendar");
function I1(e) {
  const n = el(), t = ie(e, "modelValue", [], (v) => Ne(v)), a = b(() => e.displayValue ? n.date(e.displayValue) : t.value.length > 0 ? n.date(t.value[0]) : e.min ? n.date(e.min) : Array.isArray(e.allowedDates) ? n.date(e.allowedDates[0]) : n.date()), l = ie(e, "year", void 0, (v) => {
    const g = v != null ? Number(v) : n.getYear(a.value);
    return n.startOfYear(n.setYear(n.date(), g));
  }, (v) => n.getYear(v)), o = ie(e, "month", void 0, (v) => {
    const g = v != null ? Number(v) : n.getMonth(a.value), h = n.setYear(n.startOfMonth(n.date()), n.getYear(l.value));
    return n.setMonth(h, g);
  }, (v) => n.getMonth(v)), i = b(() => {
    const v = Number(e.firstDayOfWeek ?? 0);
    return e.weekdays.map((g) => (g + v) % 7);
  }), r = b(() => {
    const v = n.getWeekArray(o.value, e.firstDayOfWeek), g = v.flat(), h = 6 * 7;
    if (e.weeksInMonth === "static" && g.length < h) {
      const y = g[g.length - 1];
      let k = [];
      for (let p = 1; p <= h - g.length; p++)
        k.push(n.addDays(y, p)), p % 7 === 0 && (v.push(k), k = []);
    }
    return v;
  });
  function s(v, g) {
    return v.filter((h) => i.value.includes(n.toJsDate(h).getDay())).map((h, y) => {
      const k = n.toISO(h), p = !n.isSameMonth(h, o.value), w = n.isSameDay(h, n.startOfMonth(o.value)), T = n.isSameDay(h, n.endOfMonth(o.value)), C = n.isSameDay(h, o.value);
      return {
        date: h,
        isoDate: k,
        formatted: n.format(h, "keyboardDate"),
        year: n.getYear(h),
        month: n.getMonth(h),
        isDisabled: m(h),
        isWeekStart: y % 7 === 0,
        isWeekEnd: y % 7 === 6,
        isToday: n.isSameDay(h, g),
        isAdjacent: p,
        isHidden: p && !e.showAdjacentMonths,
        isStart: w,
        isSelected: t.value.some((V) => n.isSameDay(h, V)),
        isEnd: T,
        isSame: C,
        localized: n.format(h, "dayOfMonth")
      };
    });
  }
  const c = b(() => {
    const v = n.startOfWeek(a.value, e.firstDayOfWeek), g = [];
    for (let y = 0; y <= 6; y++)
      g.push(n.addDays(v, y));
    const h = n.date();
    return s(g, h);
  }), u = b(() => {
    const v = r.value.flat(), g = n.date();
    return s(v, g);
  }), f = b(() => r.value.map((v) => v.length ? Ey(n, v[0]) : null));
  function m(v) {
    if (e.disabled) return !0;
    const g = n.date(v);
    return e.min && n.isAfter(n.date(e.min), g) || e.max && n.isAfter(g, n.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((h) => n.isSameDay(n.date(h), g)) : typeof e.allowedDates == "function" ? !e.allowedDates(g) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: u,
    daysInWeek: c,
    genDays: s,
    model: t,
    weeksInMonth: r,
    weekDays: i,
    weekNumbers: f
  };
}
const xf = $({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  ...T1()
}, "VDatePickerMonth"), bi = L()({
  name: "VDatePickerMonth",
  props: xf(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Y(), {
      daysInMonth: o,
      model: i,
      weekNumbers: r
    } = I1(e), s = el(), c = G(), u = G(), f = G(!1), m = b(() => f.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && i.value.length > 0 && (c.value = i.value[0], i.value.length > 1 && (u.value = i.value[i.value.length - 1]));
    const v = b(() => {
      const k = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return i.value.length >= k;
    });
    q(o, (k, p) => {
      p && (f.value = s.isBefore(k[0].date, p[0].date));
    });
    function g(k) {
      const p = s.startOfDay(k);
      if (i.value.length === 0 && (c.value = void 0), !c.value)
        c.value = p, i.value = [c.value];
      else if (u.value)
        c.value = k, u.value = void 0, i.value = [c.value];
      else {
        if (s.isSameDay(p, c.value)) {
          c.value = void 0, i.value = [];
          return;
        } else s.isBefore(p, c.value) ? (u.value = s.endOfDay(c.value), c.value = p) : u.value = s.endOfDay(p);
        const w = s.getDiff(u.value, c.value, "days"), T = [c.value];
        for (let C = 1; C < w; C++) {
          const V = s.addDays(c.value, C);
          T.push(V);
        }
        T.push(u.value), i.value = T;
      }
    }
    function h(k) {
      const p = i.value.findIndex((w) => s.isSameDay(w, k));
      if (p === -1)
        i.value = [...i.value, k];
      else {
        const w = [...i.value];
        w.splice(p, 1), i.value = w;
      }
    }
    function y(k) {
      e.multiple === "range" ? g(k) : e.multiple ? h(k) : i.value = [k];
    }
    return () => d("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && d("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && d("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [dt(" ")]), r.value.map((k) => d("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [k]))]), d(vt, {
      name: m.value
    }, {
      default: () => {
        var k;
        return [d("div", {
          ref: l,
          key: (k = o.value[0].date) == null ? void 0 : k.toString(),
          class: "v-date-picker-month__days"
        }, [!e.hideWeekdays && s.getWeekdays(e.firstDayOfWeek).map((p) => d("div", {
          class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
        }, [p])), o.value.map((p, w) => {
          const T = {
            props: {
              onClick: () => y(p.date)
            },
            item: p,
            i: w
          };
          return v.value && !p.isSelected && (p.isDisabled = !0), d("div", {
            class: ["v-date-picker-month__day", {
              "v-date-picker-month__day--adjacent": p.isAdjacent,
              "v-date-picker-month__day--hide-adjacent": p.isHidden,
              "v-date-picker-month__day--selected": p.isSelected,
              "v-date-picker-month__day--week-end": p.isWeekEnd,
              "v-date-picker-month__day--week-start": p.isWeekStart
            }],
            "data-v-date": p.isDisabled ? void 0 : p.isoDate
          }, [(e.showAdjacentMonths || !p.isAdjacent) && d(he, {
            defaults: {
              VBtn: {
                class: "v-date-picker-month__day-btn",
                color: (p.isSelected || p.isToday) && !p.isDisabled ? e.color : void 0,
                disabled: p.isDisabled,
                icon: !0,
                ripple: !1,
                text: p.localized,
                variant: p.isDisabled ? p.isToday ? "outlined" : "text" : p.isToday && !p.isSelected ? "outlined" : "flat",
                onClick: () => y(p.date)
              }
            }
          }, {
            default: () => {
              var C;
              return [((C = a.day) == null ? void 0 : C.call(a, T)) ?? d(Se, T.props, null)];
            }
          })]);
        })])];
      }
    })]);
  }
}), Vf = $({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths"), pi = L()({
  name: "VDatePickerMonths",
  props: Vf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = el(), o = ie(e, "modelValue"), i = b(() => {
      let r = l.startOfYear(l.date());
      return e.year && (r = l.setYear(r, e.year)), Kt(12).map((s) => {
        const c = l.format(r, "monthShort"), u = !!(e.min && l.isAfter(l.startOfMonth(l.date(e.min)), r) || e.max && l.isAfter(r, l.startOfMonth(l.date(e.max))));
        return r = l.getNextMonth(r), {
          isDisabled: u,
          text: c,
          value: s
        };
      });
    });
    return Ye(() => {
      o.value = o.value ?? l.getMonth(l.date());
    }), H(() => d("div", {
      class: "v-date-picker-months",
      style: {
        height: J(e.height)
      }
    }, [d("div", {
      class: "v-date-picker-months__content"
    }, [i.value.map((r, s) => {
      var f;
      const c = {
        active: o.value === s,
        color: o.value === s ? e.color : void 0,
        disabled: r.isDisabled,
        rounded: !0,
        text: r.text,
        variant: o.value === r.value ? "flat" : "text",
        onClick: () => u(s)
      };
      function u(m) {
        if (o.value === m) {
          t("update:modelValue", o.value);
          return;
        }
        o.value = m;
      }
      return ((f = a.month) == null ? void 0 : f.call(a, {
        month: r,
        i: s,
        props: c
      })) ?? d(Se, B({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), Pf = $({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), ki = L()({
  name: "VDatePickerYears",
  props: Pf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = el(), o = ie(e, "modelValue"), i = b(() => {
      const s = l.getYear(l.date());
      let c = s - 100, u = s + 52;
      e.min && (c = l.getYear(l.date(e.min))), e.max && (u = l.getYear(l.date(e.max)));
      let f = l.startOfYear(l.date());
      return f = l.setYear(f, c), Kt(u - c + 1, c).map((m) => {
        const v = l.format(f, "year");
        return f = l.setYear(f, l.getYear(f) + 1), {
          text: v,
          value: m
        };
      });
    });
    Ye(() => {
      o.value = o.value ?? l.getYear(l.date());
    });
    const r = Bl();
    return mt(async () => {
      var s;
      await be(), (s = r.el) == null || s.scrollIntoView({
        block: "center"
      });
    }), H(() => d("div", {
      class: "v-date-picker-years",
      style: {
        height: J(e.height)
      }
    }, [d("div", {
      class: "v-date-picker-years__content"
    }, [i.value.map((s, c) => {
      var f;
      const u = {
        ref: o.value === s.value ? r : void 0,
        active: o.value === s.value,
        color: o.value === s.value ? e.color : void 0,
        rounded: !0,
        text: s.text,
        variant: o.value === s.value ? "flat" : "text",
        onClick: () => {
          if (o.value === s.value) {
            t("update:modelValue", o.value);
            return;
          }
          o.value = s.value;
        }
      };
      return ((f = a.year) == null ? void 0 : f.call(a, {
        year: s,
        i: c,
        props: u
      })) ?? d(Se, B({
        key: "month"
      }, u), null);
    })])])), {};
  }
}), D1 = Jt("v-picker-title"), Tf = $({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...so()
}, "VPicker"), Us = L()({
  name: "VPicker",
  props: Tf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = De(O(e, "color"));
    return H(() => {
      const o = On.filterProps(e), i = !!(e.title || t.title);
      return d(On, B(o, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!t.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var r;
          return [!e.hideHeader && d("div", {
            key: "header",
            class: [a.value],
            style: [l.value]
          }, [i && d(D1, {
            key: "picker-title"
          }, {
            default: () => {
              var s;
              return [((s = t.title) == null ? void 0 : s.call(t)) ?? e.title];
            }
          }), t.header && d("div", {
            class: "v-picker__header"
          }, [t.header()])]), d("div", {
            class: "v-picker__body"
          }, [(r = t.default) == null ? void 0 : r.call(t)]), t.actions && d(he, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [d("div", {
              class: "v-picker__actions"
            }, [t.actions()])]
          })];
        }
      });
    }), {};
  }
}), M1 = $({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  ...Cf(),
  ...xf({
    weeksInMonth: "static"
  }),
  ...We(Vf(), ["modelValue"]),
  ...We(Pf(), ["modelValue"]),
  ...Tf({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), B1 = L()({
  name: "VDatePicker",
  props: M1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = el(), {
      t: o
    } = Ke(), i = ie(e, "modelValue", void 0, (S) => Ne(S), (S) => e.multiple ? S : S[0]), r = ie(e, "viewMode"), s = b(() => {
      var I;
      const S = l.date((I = i.value) == null ? void 0 : I[0]);
      return S && l.isValid(S) ? S : l.date();
    }), c = Y(Number(e.month ?? l.getMonth(l.startOfMonth(s.value)))), u = Y(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(s.value, c.value))))), f = G(!1), m = b(() => e.multiple && i.value.length > 1 ? o("$vuetify.datePicker.itemsSelected", i.value.length) : i.value[0] && l.isValid(i.value[0]) ? l.format(l.date(i.value[0]), "normalDateWithWeekday") : o(e.header)), v = b(() => {
      let S = l.date();
      return S = l.setDate(S, 1), S = l.setMonth(S, c.value), S = l.setYear(S, u.value), l.format(S, "monthAndYear");
    }), g = b(() => `date-picker-header${f.value ? "-reverse" : ""}-transition`), h = b(() => {
      const S = l.date(e.min);
      return e.min && l.isValid(S) ? S : null;
    }), y = b(() => {
      const S = l.date(e.max);
      return e.max && l.isValid(S) ? S : null;
    }), k = b(() => {
      if (e.disabled) return !0;
      const S = [];
      if (r.value !== "month")
        S.push("prev", "next");
      else {
        let I = l.date();
        if (I = l.setYear(I, u.value), I = l.setMonth(I, c.value), h.value) {
          const D = l.addDays(l.startOfMonth(I), -1);
          l.isAfter(h.value, D) && S.push("prev");
        }
        if (y.value) {
          const D = l.addDays(l.endOfMonth(I), 1);
          l.isAfter(D, y.value) && S.push("next");
        }
      }
      return S;
    });
    function p() {
      c.value < 11 ? c.value++ : (u.value++, c.value = 0, P(u.value)), x(c.value);
    }
    function w() {
      c.value > 0 ? c.value-- : (u.value--, c.value = 11, P(u.value)), x(c.value);
    }
    function T() {
      r.value = "month";
    }
    function C() {
      r.value = r.value === "months" ? "month" : "months";
    }
    function V() {
      r.value = r.value === "year" ? "month" : "year";
    }
    function x(S) {
      r.value === "months" && C(), t("update:month", S);
    }
    function P(S) {
      r.value === "year" && V(), t("update:year", S);
    }
    return q(i, (S, I) => {
      const D = Ne(I), M = Ne(S);
      if (!M.length) return;
      const A = l.date(D[D.length - 1]), E = l.date(M[M.length - 1]), F = l.getMonth(E), j = l.getYear(E);
      F !== c.value && (c.value = F, x(c.value)), j !== u.value && (u.value = j, P(u.value)), f.value = l.isBefore(A, E);
    }), H(() => {
      const S = Us.filterProps(e), I = gi.filterProps(e), D = yi.filterProps(e), M = bi.filterProps(e), A = We(pi.filterProps(e), ["modelValue"]), E = We(ki.filterProps(e), ["modelValue"]), F = {
        header: m.value,
        transition: g.value
      };
      return d(Us, B(S, {
        class: ["v-date-picker", `v-date-picker--${r.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var j;
          return ((j = a.title) == null ? void 0 : j.call(a)) ?? d("div", {
            class: "v-date-picker__title"
          }, [o(e.title)]);
        },
        header: () => a.header ? d(he, {
          defaults: {
            VDatePickerHeader: {
              ...F
            }
          }
        }, {
          default: () => {
            var j;
            return [(j = a.header) == null ? void 0 : j.call(a, F)];
          }
        }) : d(yi, B({
          key: "header"
        }, D, F, {
          onClick: r.value !== "month" ? T : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => d(oe, null, [d(gi, B(I, {
          disabled: k.value,
          text: v.value,
          "onClick:next": p,
          "onClick:prev": w,
          "onClick:month": C,
          "onClick:year": V
        }), null), d(za, {
          hideOnLeave: !0
        }, {
          default: () => [r.value === "months" ? d(pi, B({
            key: "date-picker-months"
          }, A, {
            modelValue: c.value,
            "onUpdate:modelValue": [(j) => c.value = j, x],
            min: h.value,
            max: y.value,
            year: u.value
          }), null) : r.value === "year" ? d(ki, B({
            key: "date-picker-years"
          }, E, {
            modelValue: u.value,
            "onUpdate:modelValue": [(j) => u.value = j, P],
            min: h.value,
            max: y.value
          }), null) : d(bi, B({
            key: "date-picker-month"
          }, M, {
            modelValue: i.value,
            "onUpdate:modelValue": (j) => i.value = j,
            month: c.value,
            "onUpdate:month": [(j) => c.value = j, x],
            year: u.value,
            "onUpdate:year": [(j) => u.value = j, P],
            min: h.value,
            max: y.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), A1 = $({
  actionText: String,
  bgColor: String,
  color: String,
  icon: ue,
  image: String,
  justify: {
    type: String,
    default: "center"
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500
  },
  href: String,
  to: String,
  ...Q(),
  ...et(),
  ...Qt({
    size: void 0
  }),
  ...ye()
}, "VEmptyState"), $1 = L()({
  name: "VEmptyState",
  props: A1(),
  emits: {
    "click:action": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ce(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: i
    } = De(O(e, "bgColor")), {
      dimensionStyles: r
    } = tt(e), {
      displayClasses: s
    } = _t();
    function c(u) {
      t("click:action", u);
    }
    return H(() => {
      var y, k, p;
      const u = !!(a.actions || e.actionText), f = !!(a.headline || e.headline), m = !!(a.title || e.title), v = !!(a.text || e.text), g = !!(a.media || e.image || e.icon), h = e.size || (e.image ? 200 : 96);
      return d("div", {
        class: ["v-empty-state", {
          [`v-empty-state--${e.justify}`]: !0
        }, l.value, o.value, s.value, e.class],
        style: [i.value, r.value, e.style]
      }, [g && d("div", {
        key: "media",
        class: "v-empty-state__media"
      }, [a.media ? d(he, {
        key: "media-defaults",
        defaults: {
          VImg: {
            src: e.image,
            height: h
          },
          VIcon: {
            size: h,
            icon: e.icon
          }
        }
      }, {
        default: () => [a.media()]
      }) : d(oe, null, [e.image ? d(an, {
        key: "image",
        src: e.image,
        height: h
      }, null) : e.icon ? d(we, {
        key: "icon",
        color: e.color,
        size: h,
        icon: e.icon
      }, null) : void 0])]), f && d("div", {
        key: "headline",
        class: "v-empty-state__headline"
      }, [((y = a.headline) == null ? void 0 : y.call(a)) ?? e.headline]), m && d("div", {
        key: "title",
        class: "v-empty-state__title"
      }, [((k = a.title) == null ? void 0 : k.call(a)) ?? e.title]), v && d("div", {
        key: "text",
        class: "v-empty-state__text",
        style: {
          maxWidth: J(e.textWidth)
        }
      }, [((p = a.text) == null ? void 0 : p.call(a)) ?? e.text]), a.default && d("div", {
        key: "content",
        class: "v-empty-state__content"
      }, [a.default()]), u && d("div", {
        key: "actions",
        class: "v-empty-state__actions"
      }, [d(he, {
        defaults: {
          VBtn: {
            class: "v-empty-state__action-btn",
            color: e.color ?? "surface-variant",
            text: e.actionText
          }
        }
      }, {
        default: () => {
          var w;
          return [((w = a.actions) == null ? void 0 : w.call(a, {
            props: {
              onClick: c
            }
          })) ?? d(Se, {
            onClick: c
          }, null)];
        }
      })])]);
    }), {};
  }
}), qa = Symbol.for("vuetify:v-expansion-panel"), If = $({
  ...Q(),
  ...lr()
}, "VExpansionPanelText"), Si = L()({
  name: "VExpansionPanelText",
  props: If(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = pe(qa);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: o
    } = or(e, a.isSelected);
    return H(() => d(ql, {
      onAfterLeave: o
    }, {
      default: () => {
        var i;
        return [Ie(d("div", {
          class: ["v-expansion-panel-text", e.class],
          style: e.style
        }, [t.default && l.value && d("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(i = t.default) == null ? void 0 : i.call(t)])]), [[It, a.isSelected.value]])];
      }
    })), {};
  }
}), Df = $({
  color: String,
  expandIcon: {
    type: ue,
    default: "$expand"
  },
  collapseIcon: {
    type: ue,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean,
  ...Q()
}, "VExpansionPanelTitle"), wi = L()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: sn
  },
  props: Df(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = pe(qa);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = De(e, "color"), i = b(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), r = b(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
    return H(() => {
      var s;
      return Ie(d("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": a.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, l.value, e.class],
        style: [o.value, e.style],
        type: "button",
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        "aria-expanded": a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle
      }, [d("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (s = t.default) == null ? void 0 : s.call(t, i.value), !e.hideActions && d(he, {
        defaults: {
          VIcon: {
            icon: r.value
          }
        }
      }, {
        default: () => {
          var c;
          return [d("span", {
            class: "v-expansion-panel-title__icon"
          }, [((c = t.actions) == null ? void 0 : c.call(t, i.value)) ?? d(we, null, null)])];
        }
      })]), [[St("ripple"), e.ripple]]);
    }), {};
  }
}), Mf = $({
  title: String,
  text: String,
  bgColor: String,
  ...Je(),
  ...Wn(),
  ...Fe(),
  ...ve(),
  ...Df(),
  ...If()
}, "VExpansionPanel"), _1 = L()({
  name: "VExpansionPanel",
  props: Mf(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Un(e, qa), {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = De(e, "bgColor"), {
      elevationClasses: i
    } = ot(e), {
      roundedClasses: r
    } = ze(e), s = b(() => (a == null ? void 0 : a.disabled.value) || e.disabled), c = b(() => a.group.items.value.reduce((m, v, g) => (a.group.selected.value.includes(v.id) && m.push(g), m), [])), u = b(() => {
      const m = a.group.items.value.findIndex((v) => v.id === a.id);
      return !a.isSelected.value && c.value.some((v) => v - m === 1);
    }), f = b(() => {
      const m = a.group.items.value.findIndex((v) => v.id === a.id);
      return !a.isSelected.value && c.value.some((v) => v - m === -1);
    });
    return Le(qa, a), H(() => {
      const m = !!(t.text || e.text), v = !!(t.title || e.title), g = wi.filterProps(e), h = Si.filterProps(e);
      return d(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": u.value,
          "v-expansion-panel--after-active": f.value,
          "v-expansion-panel--disabled": s.value
        }, r.value, l.value, e.class],
        style: [o.value, e.style]
      }, {
        default: () => [d("div", {
          class: ["v-expansion-panel__shadow", ...i.value]
        }, null), d(he, {
          defaults: {
            VExpansionPanelTitle: {
              ...g
            },
            VExpansionPanelText: {
              ...h
            }
          }
        }, {
          default: () => {
            var y;
            return [v && d(wi, {
              key: "title"
            }, {
              default: () => [t.title ? t.title() : e.title]
            }), m && d(Si, {
              key: "text"
            }, {
              default: () => [t.text ? t.text() : e.text]
            }), (y = t.default) == null ? void 0 : y.call(t)];
          }
        })]
      });
    }), {
      groupItem: a
    };
  }
}), O1 = ["default", "accordion", "inset", "popout"], E1 = $({
  flat: Boolean,
  ...Yn(),
  ...$i(Mf(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...ye(),
  ...Q(),
  ...ve(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => O1.includes(e)
  }
}, "VExpansionPanels"), L1 = L()({
  name: "VExpansionPanels",
  props: E1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      next: a,
      prev: l
    } = Sn(e, qa), {
      themeClasses: o
    } = Ce(e), i = b(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return He({
      VExpansionPanel: {
        bgColor: O(e, "bgColor"),
        collapseIcon: O(e, "collapseIcon"),
        color: O(e, "color"),
        eager: O(e, "eager"),
        elevation: O(e, "elevation"),
        expandIcon: O(e, "expandIcon"),
        focusable: O(e, "focusable"),
        hideActions: O(e, "hideActions"),
        readonly: O(e, "readonly"),
        ripple: O(e, "ripple"),
        rounded: O(e, "rounded"),
        static: O(e, "static")
      }
    }), H(() => d(e.tag, {
      class: ["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, o.value, i.value, e.class],
      style: e.style
    }, {
      default: () => {
        var r;
        return [(r = t.default) == null ? void 0 : r.call(t, {
          prev: l,
          next: a
        })];
      }
    })), {
      next: a,
      prev: l
    };
  }
}), F1 = $({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: !0
  },
  ...We(Ql({
    active: !0
  }), ["location"]),
  ...Rn(),
  ...rn(),
  ...Yt({
    transition: "fab-transition"
  })
}, "VFab"), N1 = L()({
  name: "VFab",
  props: F1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), l = G(56), o = Y(), {
      resizeRef: i
    } = jt((f) => {
      f.length && (l.value = f[0].target.clientHeight);
    }), r = b(() => e.app || e.absolute), s = b(() => {
      var f;
      return r.value ? ((f = e.location) == null ? void 0 : f.split(" ").shift()) ?? "bottom" : !1;
    }), c = b(() => {
      var f;
      return r.value ? ((f = e.location) == null ? void 0 : f.split(" ")[1]) ?? "end" : !1;
    });
    xt(() => e.app, () => {
      const f = Hn({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: s,
        layoutSize: b(() => e.layout ? l.value + 24 : 0),
        elementSize: b(() => l.value + 24),
        active: b(() => e.app && a.value),
        absolute: O(e, "absolute")
      });
      Ye(() => {
        o.value = f.layoutItemStyles.value;
      });
    });
    const u = Y();
    return H(() => {
      const f = Se.filterProps(e);
      return d("div", {
        ref: u,
        class: ["v-fab", {
          "v-fab--absolute": e.absolute,
          "v-fab--app": !!e.app,
          "v-fab--extended": e.extended,
          "v-fab--offset": e.offset,
          [`v-fab--${s.value}`]: r.value,
          [`v-fab--${c.value}`]: r.value
        }, e.class],
        style: [e.app ? {
          ...o.value
        } : {
          height: "inherit",
          width: void 0
        }, e.style]
      }, [d("div", {
        class: "v-fab__container"
      }, [d(vt, {
        appear: e.appear,
        transition: e.transition
      }, {
        default: () => [Ie(d(Se, B({
          ref: i
        }, f, {
          active: void 0,
          location: void 0
        }), t), [[It, e.active]])]
      })])]);
    }), {};
  }
}), R1 = $({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e))
  },
  ...cn({
    prependIcon: "$file"
  }),
  modelValue: {
    type: [Array, Object],
    default: (e) => e.multiple ? [] : null,
    validator: (e) => Ne(e).every((n) => n != null && typeof n == "object")
  },
  ...ul({
    clearable: !0
  })
}, "VFileInput"), H1 = L()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: R1(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: o
    } = Ke(), i = ie(e, "modelValue", e.modelValue, (S) => Ne(S), (S) => e.multiple || Array.isArray(e.modelValue) ? S : S[0] ?? null), {
      isFocused: r,
      focus: s,
      blur: c
    } = un(e), u = b(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = b(() => (i.value ?? []).reduce((S, I) => {
      let {
        size: D = 0
      } = I;
      return S + D;
    }, 0)), m = b(() => as(f.value, u.value)), v = b(() => (i.value ?? []).map((S) => {
      const {
        name: I = "",
        size: D = 0
      } = S;
      return e.showSize ? `${I} (${as(D, u.value)})` : I;
    })), g = b(() => {
      var I;
      const S = ((I = i.value) == null ? void 0 : I.length) ?? 0;
      return e.showSize ? o(e.counterSizeString, S, m.value) : o(e.counterString, S);
    }), h = Y(), y = Y(), k = Y(), p = b(() => r.value || e.active), w = b(() => ["plain", "underlined"].includes(e.variant));
    function T() {
      var S;
      k.value !== document.activeElement && ((S = k.value) == null || S.focus()), r.value || s();
    }
    function C(S) {
      var I;
      (I = k.value) == null || I.click();
    }
    function V(S) {
      a("mousedown:control", S);
    }
    function x(S) {
      var I;
      (I = k.value) == null || I.click(), a("click:control", S);
    }
    function P(S) {
      S.stopPropagation(), T(), be(() => {
        i.value = [], Oi(e["onClick:clear"], S);
      });
    }
    return q(i, (S) => {
      (!Array.isArray(S) || !S.length) && k.value && (k.value.value = "");
    }), H(() => {
      const S = !!(l.counter || e.counter), I = !!(S || l.details), [D, M] = pn(t), {
        modelValue: A,
        ...E
      } = rt.filterProps(e), F = ir(e);
      return d(rt, B({
        ref: h,
        modelValue: i.value,
        "onUpdate:modelValue": (j) => i.value = j,
        class: ["v-file-input", {
          "v-file-input--chips": !!e.chips,
          "v-file-input--hide": e.hideInput,
          "v-input--plain-underlined": w.value
        }, e.class],
        style: e.style,
        "onClick:prepend": C
      }, D, E, {
        centerAffix: !w.value,
        focused: r.value
      }), {
        ...l,
        default: (j) => {
          let {
            id: X,
            isDisabled: N,
            isDirty: z,
            isReadonly: _,
            isValid: R
          } = j;
          return d(ya, B({
            ref: y,
            "prepend-icon": e.prependIcon,
            onMousedown: V,
            onClick: x,
            "onClick:clear": P,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, F, {
            id: X.value,
            active: p.value || z.value,
            dirty: z.value || e.dirty,
            disabled: N.value,
            focused: r.value,
            error: R.value === !1
          }), {
            ...l,
            default: (U) => {
              var Z;
              let {
                props: {
                  class: ae,
                  ...re
                }
              } = U;
              return d(oe, null, [d("input", B({
                ref: k,
                type: "file",
                readonly: _.value,
                disabled: N.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (W) => {
                  W.stopPropagation(), _.value && W.preventDefault(), T();
                },
                onChange: (W) => {
                  if (!W.target) return;
                  const ee = W.target;
                  i.value = [...ee.files ?? []];
                },
                onFocus: T,
                onBlur: c
              }, re, M), null), d("div", {
                class: ae
              }, [!!((Z = i.value) != null && Z.length) && !e.hideInput && (l.selection ? l.selection({
                fileNames: v.value,
                totalBytes: f.value,
                totalBytesReadable: m.value
              }) : e.chips ? v.value.map((W) => d(ga, {
                key: W,
                size: "small",
                text: W
              }, null)) : v.value.join(", "))])]);
            }
          });
        },
        details: I ? (j) => {
          var X, N;
          return d(oe, null, [(X = l.details) == null ? void 0 : X.call(l, j), S && d(oe, null, [d("span", null, null), d(ao, {
            active: !!((N = i.value) != null && N.length),
            value: g.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), Lt({}, h, y, k);
  }
}), z1 = $({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Bt(),
  ...Q(),
  ...Je(),
  ...Rn(),
  ...Fe(),
  ...ve({
    tag: "footer"
  }),
  ...ye()
}, "VFooter"), j1 = L()({
  name: "VFooter",
  props: z1(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ce(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = De(O(e, "color")), {
      borderClasses: i
    } = Ot(e), {
      elevationClasses: r
    } = ot(e), {
      roundedClasses: s
    } = ze(e), c = G(32), {
      resizeRef: u
    } = jt((g) => {
      g.length && (c.value = g[0].target.clientHeight);
    }), f = b(() => e.height === "auto" ? c.value : parseInt(e.height, 10)), {
      layoutItemStyles: m,
      layoutIsReady: v
    } = Hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: b(() => "bottom"),
      layoutSize: f,
      elementSize: b(() => e.height === "auto" ? void 0 : f.value),
      active: b(() => e.app),
      absolute: O(e, "absolute")
    });
    return H(() => d(e.tag, {
      ref: u,
      class: ["v-footer", a.value, l.value, i.value, r.value, s.value, e.class],
      style: [o.value, e.app ? m.value : {
        height: J(e.height)
      }, e.style]
    }, t)), e.app ? v : {};
  }
}), Y1 = $({
  ...Q(),
  ...Zb()
}, "VForm"), W1 = L()({
  name: "VForm",
  props: Y1(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = Jb(e), o = Y();
    function i(s) {
      s.preventDefault(), l.reset();
    }
    function r(s) {
      const c = s, u = l.validate();
      c.then = u.then.bind(u), c.catch = u.catch.bind(u), c.finally = u.finally.bind(u), a("submit", c), c.defaultPrevented || u.then((f) => {
        var v;
        let {
          valid: m
        } = f;
        m && ((v = o.value) == null || v.submit());
      }), c.preventDefault();
    }
    return H(() => {
      var s;
      return d("form", {
        ref: o,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: i,
        onSubmit: r
      }, [(s = t.default) == null ? void 0 : s.call(t, l)]);
    }), Lt(l, o);
  }
}), U1 = $({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...nr()
}, "VHover"), K1 = L()({
  name: "VHover",
  props: U1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: o
    } = ar(e, (i) => !e.disabled && (a.value = i));
    return () => {
      var i;
      return (i = t.default) == null ? void 0 : i.call(t, {
        isHovering: a.value,
        props: {
          onMouseenter: l,
          onMouseleave: o
        }
      });
    };
  }
}), G1 = $({
  color: String,
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  side: {
    type: String,
    default: "end",
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  mode: {
    type: String,
    default: "intersect",
    validator: (e) => ["intersect", "manual"].includes(e)
  },
  margin: [Number, String],
  loadMoreText: {
    type: String,
    default: "$vuetify.infiniteScroll.loadMore"
  },
  emptyText: {
    type: String,
    default: "$vuetify.infiniteScroll.empty"
  },
  ...et(),
  ...ve()
}, "VInfiniteScroll"), Ks = Dt({
  name: "VInfiniteScrollIntersect",
  props: {
    side: {
      type: String,
      required: !0
    },
    rootRef: null,
    rootMargin: String
  },
  emits: {
    intersect: (e, n) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Xl((o) => {
    }, e.rootMargin ? {
      rootMargin: e.rootMargin
    } : void 0);
    return q(l, async (o) => {
      t("intersect", e.side, o);
    }), H(() => d("div", {
      class: "v-infinite-scroll-intersect",
      ref: a
    }, [dt(" ")])), {};
  }
}), q1 = L()({
  name: "VInfiniteScroll",
  props: G1(),
  emits: {
    load: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = Y(), o = G("ok"), i = G("ok"), r = b(() => J(e.margin)), s = G(!1);
    function c(C) {
      if (!l.value) return;
      const V = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      l.value[V] = C;
    }
    function u() {
      if (!l.value) return 0;
      const C = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      return l.value[C];
    }
    function f() {
      if (!l.value) return 0;
      const C = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
      return l.value[C];
    }
    function m() {
      if (!l.value) return 0;
      const C = e.direction === "vertical" ? "clientHeight" : "clientWidth";
      return l.value[C];
    }
    mt(() => {
      l.value && (e.side === "start" ? c(f()) : e.side === "both" && c(f() / 2 - m() / 2));
    });
    function v(C, V) {
      C === "start" ? o.value = V : C === "end" && (i.value = V);
    }
    function g(C) {
      return C === "start" ? o.value : i.value;
    }
    let h = 0;
    function y(C, V) {
      s.value = V, s.value && k(C);
    }
    function k(C) {
      if (e.mode !== "manual" && !s.value) return;
      const V = g(C);
      if (!l.value || ["empty", "loading"].includes(V)) return;
      h = f(), v(C, "loading");
      function x(P) {
        v(C, P), be(() => {
          P === "empty" || P === "error" || (P === "ok" && C === "start" && c(f() - h + u()), e.mode !== "manual" && be(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  k(C);
                });
              });
            });
          }));
        });
      }
      a("load", {
        side: C,
        done: x
      });
    }
    const {
      t: p
    } = Ke();
    function w(C, V) {
      var S, I, D, M, A;
      if (e.side !== C && e.side !== "both") return;
      const x = () => k(C), P = {
        side: C,
        props: {
          onClick: x,
          color: e.color
        }
      };
      return V === "error" ? (S = t.error) == null ? void 0 : S.call(t, P) : V === "empty" ? ((I = t.empty) == null ? void 0 : I.call(t, P)) ?? d("div", null, [p(e.emptyText)]) : e.mode === "manual" ? V === "loading" ? ((D = t.loading) == null ? void 0 : D.call(t, P)) ?? d(sa, {
        indeterminate: !0,
        color: e.color
      }, null) : ((M = t["load-more"]) == null ? void 0 : M.call(t, P)) ?? d(Se, {
        variant: "outlined",
        color: e.color,
        onClick: x
      }, {
        default: () => [p(e.loadMoreText)]
      }) : ((A = t.loading) == null ? void 0 : A.call(t, P)) ?? d(sa, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: T
    } = tt(e);
    H(() => {
      const C = e.tag, V = e.side === "start" || e.side === "both", x = e.side === "end" || e.side === "both", P = e.mode === "intersect";
      return d(C, {
        ref: l,
        class: ["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": V,
          "v-infinite-scroll--end": x
        }],
        style: T.value
      }, {
        default: () => {
          var S;
          return [d("div", {
            class: "v-infinite-scroll__side"
          }, [w("start", o.value)]), l.value && V && P && d(Ks, {
            key: "start",
            side: "start",
            onIntersect: y,
            rootRef: l.value,
            rootMargin: r.value
          }, null), (S = t.default) == null ? void 0 : S.call(t), l.value && x && P && d(Ks, {
            key: "end",
            side: "end",
            onIntersect: y,
            rootRef: l.value,
            rootMargin: r.value
          }, null), d("div", {
            class: "v-infinite-scroll__side"
          }, [w("end", i.value)])];
        }
      });
    });
  }
}), Bf = Symbol.for("vuetify:v-item-group"), X1 = $({
  ...Q(),
  ...Yn({
    selectedClass: "v-item--selected"
  }),
  ...ve(),
  ...ye()
}, "VItemGroup"), Z1 = L()({
  name: "VItemGroup",
  props: X1(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ce(e), {
      isSelected: l,
      select: o,
      next: i,
      prev: r,
      selected: s
    } = Sn(e, Bf);
    return () => d(e.tag, {
      class: ["v-item-group", a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var c;
        return [(c = t.default) == null ? void 0 : c.call(t, {
          isSelected: l,
          select: o,
          next: i,
          prev: r,
          selected: s.value
        })];
      }
    });
  }
}), J1 = L()({
  name: "VItem",
  props: Wn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      select: l,
      toggle: o,
      selectedClass: i,
      value: r,
      disabled: s
    } = Un(e, Bf);
    return () => {
      var c;
      return (c = t.default) == null ? void 0 : c.call(t, {
        isSelected: a.value,
        selectedClass: i.value,
        select: l,
        toggle: o,
        value: r.value,
        disabled: s.value
      });
    };
  }
}), Q1 = Jt("v-kbd"), eS = $({
  ...Q(),
  ...et(),
  ...pc()
}, "VLayout"), tS = L()({
  name: "VLayout",
  props: eS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: o,
      items: i,
      layoutRef: r
    } = Sc(e), {
      dimensionStyles: s
    } = tt(e);
    return H(() => d("div", {
      ref: r,
      class: [a.value, e.class],
      style: [s.value, l.value, e.style]
    }, [d(iu, null, {
      default: () => {
        var c;
        return [d(oe, null, [(c = t.default) == null ? void 0 : c.call(t)])];
      }
    })])), {
      getLayoutItem: o,
      items: i
    };
  }
}), nS = $({
  position: {
    type: String,
    required: !0
  },
  size: {
    type: [Number, String],
    default: 300
  },
  modelValue: Boolean,
  ...Q(),
  ...Rn()
}, "VLayoutItem"), aS = L()({
  name: "VLayoutItem",
  props: nS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutItemStyles: a,
      layoutIsReady: l
    } = Hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: O(e, "position"),
      elementSize: O(e, "size"),
      layoutSize: O(e, "size"),
      active: O(e, "modelValue"),
      absolute: O(e, "absolute")
    });
    return H(() => {
      var o;
      return d("div", {
        class: ["v-layout-item", e.class],
        style: [a.value, e.style]
      }, [(o = t.default) == null ? void 0 : o.call(t)]);
    }), l;
  }
}), lS = $({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  ...Q(),
  ...et(),
  ...ve(),
  ...Yt({
    transition: "fade-transition"
  })
}, "VLazy"), oS = L()({
  name: "VLazy",
  directives: {
    intersect: tl
  },
  props: lS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = tt(e), l = ie(e, "modelValue");
    function o(i) {
      l.value || (l.value = i);
    }
    return H(() => Ie(d(e.tag, {
      class: ["v-lazy", e.class],
      style: [a.value, e.style]
    }, {
      default: () => [l.value && d(vt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => {
          var i;
          return [(i = t.default) == null ? void 0 : i.call(t)];
        }
      })]
    }), [[St("intersect"), {
      handler: o,
      options: e.options
    }, null]])), {};
  }
}), iS = $({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...Q()
}, "VLocaleProvider"), rS = L()({
  name: "VLocaleProvider",
  props: iS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = Kg(e);
    return H(() => {
      var l;
      return d("div", {
        class: ["v-locale-provider", a.value, e.class],
        style: e.style
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), sS = $({
  scrollable: Boolean,
  ...Q(),
  ...et(),
  ...ve({
    tag: "main"
  })
}, "VMain"), uS = L()({
  name: "VMain",
  props: sS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = tt(e), {
      mainStyles: l,
      layoutIsReady: o
    } = kc(), {
      ssrBootStyles: i
    } = zn();
    return H(() => d(e.tag, {
      class: ["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class],
      style: [l.value, i.value, a.value, e.style]
    }, {
      default: () => {
        var r, s;
        return [e.scrollable ? d("div", {
          class: "v-main__scroller"
        }, [(r = t.default) == null ? void 0 : r.call(t)]) : (s = t.default) == null ? void 0 : s.call(t)];
      }
    })), o;
  }
});
function cS(e) {
  let {
    rootEl: n,
    isSticky: t,
    layoutItemStyles: a
  } = e;
  const l = G(!1), o = G(0), i = b(() => {
    const c = typeof l.value == "boolean" ? "top" : l.value;
    return [t.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [c]: J(o.value)
    } : {
      top: a.value.top
    }];
  });
  mt(() => {
    q(t, (c) => {
      c ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), wt(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const c = r > window.scrollY ? "up" : "down", u = n.value.getBoundingClientRect(), f = parseFloat(a.value.top ?? 0), m = window.scrollY - Math.max(0, o.value - f), v = u.height + Math.max(o.value, f) - window.scrollY - window.innerHeight, g = parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y")) || 0;
    u.height < window.innerHeight - f ? (l.value = "top", o.value = f) : c === "up" && l.value === "bottom" || c === "down" && l.value === "top" ? (o.value = window.scrollY + u.top - g, l.value = !0) : c === "down" && v <= 0 ? (o.value = 0, l.value = "bottom") : c === "up" && m <= 0 && (g ? l.value !== "top" && (o.value = -m + g + f, l.value = "top") : (o.value = u.top + m, l.value = "top")), r = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: i
  };
}
const dS = 100, fS = 20;
function Gs(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function qs(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const a = Gs(n), l = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (l - a) * Math.abs(l), t === e.length - 1 && (n *= 0.5);
  }
  return Gs(n) * 1e3;
}
function vS() {
  const e = {};
  function n(l) {
    Array.from(l.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new rg(fS))).push([l.timeStamp, o]);
    });
  }
  function t(l) {
    Array.from(l.changedTouches).forEach((o) => {
      delete e[o.identifier];
    });
  }
  function a(l) {
    var c;
    const o = (c = e[l]) == null ? void 0 : c.values().reverse();
    if (!o)
      throw new Error(`No samples for touch id ${l}`);
    const i = o[0], r = [], s = [];
    for (const u of o) {
      if (i[0] - u[0] > dS) break;
      r.push({
        t: u[0],
        d: u[1].clientX
      }), s.push({
        t: u[0],
        d: u[1].clientY
      });
    }
    return {
      x: qs(r),
      y: qs(s),
      get direction() {
        const {
          x: u,
          y: f
        } = this, [m, v] = [Math.abs(u), Math.abs(f)];
        return m > v && u >= 0 ? "right" : m > v && u <= 0 ? "left" : v > m && f >= 0 ? "down" : v > m && f <= 0 ? "up" : mS();
      }
    };
  }
  return {
    addMovement: n,
    endTouch: t,
    getVelocity: a
  };
}
function mS() {
  throw new Error();
}
function hS(e) {
  let {
    el: n,
    isActive: t,
    isTemporary: a,
    width: l,
    touchless: o,
    position: i
  } = e;
  mt(() => {
    window.addEventListener("touchstart", p, {
      passive: !0
    }), window.addEventListener("touchmove", w, {
      passive: !1
    }), window.addEventListener("touchend", T, {
      passive: !0
    });
  }), wt(() => {
    window.removeEventListener("touchstart", p), window.removeEventListener("touchmove", w), window.removeEventListener("touchend", T);
  });
  const r = b(() => ["left", "right"].includes(i.value)), {
    addMovement: s,
    endTouch: c,
    getVelocity: u
  } = vS();
  let f = !1;
  const m = G(!1), v = G(0), g = G(0);
  let h;
  function y(V, x) {
    return (i.value === "left" ? V : i.value === "right" ? document.documentElement.clientWidth - V : i.value === "top" ? V : i.value === "bottom" ? document.documentElement.clientHeight - V : Jn()) - (x ? l.value : 0);
  }
  function k(V) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const P = i.value === "left" ? (V - g.value) / l.value : i.value === "right" ? (document.documentElement.clientWidth - V - g.value) / l.value : i.value === "top" ? (V - g.value) / l.value : i.value === "bottom" ? (document.documentElement.clientHeight - V - g.value) / l.value : Jn();
    return x ? Math.max(0, Math.min(1, P)) : P;
  }
  function p(V) {
    if (o.value) return;
    const x = V.changedTouches[0].clientX, P = V.changedTouches[0].clientY, S = 25, I = i.value === "left" ? x < S : i.value === "right" ? x > document.documentElement.clientWidth - S : i.value === "top" ? P < S : i.value === "bottom" ? P > document.documentElement.clientHeight - S : Jn(), D = t.value && (i.value === "left" ? x < l.value : i.value === "right" ? x > document.documentElement.clientWidth - l.value : i.value === "top" ? P < l.value : i.value === "bottom" ? P > document.documentElement.clientHeight - l.value : Jn());
    (I || D || t.value && a.value) && (h = [x, P], g.value = y(r.value ? x : P, t.value), v.value = k(r.value ? x : P), f = g.value > -20 && g.value < 80, c(V), s(V));
  }
  function w(V) {
    const x = V.changedTouches[0].clientX, P = V.changedTouches[0].clientY;
    if (f) {
      if (!V.cancelable) {
        f = !1;
        return;
      }
      const I = Math.abs(x - h[0]), D = Math.abs(P - h[1]);
      (r.value ? I > D && I > 3 : D > I && D > 3) ? (m.value = !0, f = !1) : (r.value ? D : I) > 3 && (f = !1);
    }
    if (!m.value) return;
    V.preventDefault(), s(V);
    const S = k(r.value ? x : P, !1);
    v.value = Math.max(0, Math.min(1, S)), S > 1 ? g.value = y(r.value ? x : P, !0) : S < 0 && (g.value = y(r.value ? x : P, !1));
  }
  function T(V) {
    if (f = !1, !m.value) return;
    s(V), m.value = !1;
    const x = u(V.changedTouches[0].identifier), P = Math.abs(x.x), S = Math.abs(x.y);
    (r.value ? P > S && P > 400 : S > P && S > 3) ? t.value = x.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[i.value] || Jn()) : t.value = v.value > 0.5;
  }
  const C = b(() => m.value ? {
    transform: i.value === "left" ? `translateX(calc(-100% + ${v.value * l.value}px))` : i.value === "right" ? `translateX(calc(100% - ${v.value * l.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${v.value * l.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${v.value * l.value}px))` : Jn(),
    transition: "none"
  } : void 0);
  return xt(m, () => {
    var P, S;
    const V = ((P = n.value) == null ? void 0 : P.style.transform) ?? null, x = ((S = n.value) == null ? void 0 : S.style.transition) ?? null;
    Ye(() => {
      var I, D, M, A;
      (D = n.value) == null || D.style.setProperty("transform", ((I = C.value) == null ? void 0 : I.transform) || "none"), (A = n.value) == null || A.style.setProperty("transition", ((M = C.value) == null ? void 0 : M.transition) || null);
    }), ht(() => {
      var I, D;
      (I = n.value) == null || I.style.setProperty("transform", V), (D = n.value) == null || D.style.setProperty("transition", x);
    });
  }), {
    isDragging: m,
    dragProgress: v,
    dragStyles: C
  };
}
function Jn() {
  throw new Error();
}
const gS = ["start", "end", "left", "right", "top", "bottom"], yS = $({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (e) => gS.includes(e)
  },
  sticky: Boolean,
  ...Bt(),
  ...Q(),
  ...nr(),
  ...Nn({
    mobile: null
  }),
  ...Je(),
  ...Rn(),
  ...Fe(),
  ...ve({
    tag: "nav"
  }),
  ...ye()
}, "VNavigationDrawer"), bS = L()({
  name: "VNavigationDrawer",
  props: yS(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      isRtl: o
    } = Qe(), {
      themeClasses: i
    } = Ce(e), {
      borderClasses: r
    } = Ot(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: c
    } = De(O(e, "color")), {
      elevationClasses: u
    } = ot(e), {
      displayClasses: f,
      mobile: m
    } = _t(e), {
      roundedClasses: v
    } = ze(e), g = Ac(), h = ie(e, "modelValue", null, (U) => !!U), {
      ssrBootStyles: y
    } = zn(), {
      scopeId: k
    } = Gn(), p = Y(), w = G(!1), {
      runOpenDelay: T,
      runCloseDelay: C
    } = ar(e, (U) => {
      w.value = U;
    }), V = b(() => e.rail && e.expandOnHover && w.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), x = b(() => Wo(e.location, o.value)), P = b(() => e.persistent), S = b(() => !e.permanent && (m.value || e.temporary)), I = b(() => e.sticky && !S.value && x.value !== "bottom");
    xt(() => e.expandOnHover && e.rail != null, () => {
      q(w, (U) => a("update:rail", !U));
    }), xt(() => !e.disableResizeWatcher, () => {
      q(S, (U) => !e.permanent && be(() => h.value = !U));
    }), xt(() => !e.disableRouteWatcher && !!g, () => {
      q(g.currentRoute, () => S.value && (h.value = !1));
    }), q(() => e.permanent, (U) => {
      U && (h.value = !0);
    }), e.modelValue == null && !S.value && (h.value = e.permanent || !m.value);
    const {
      isDragging: D,
      dragProgress: M
    } = hS({
      el: p,
      isActive: h,
      isTemporary: S,
      width: V,
      touchless: O(e, "touchless"),
      position: x
    }), A = b(() => {
      const U = S.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : V.value;
      return D.value ? U * M.value : U;
    }), E = b(() => ["top", "bottom"].includes(e.location) ? 0 : V.value), {
      layoutItemStyles: F,
      layoutItemScrimStyles: j,
      layoutIsReady: X
    } = Hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: x,
      layoutSize: A,
      elementSize: E,
      active: b(() => h.value || D.value),
      disableTransitions: b(() => D.value),
      absolute: b(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || I.value && typeof N.value != "string"
      ))
    }), {
      isStuck: N,
      stickyStyles: z
    } = cS({
      rootEl: p,
      isSticky: I,
      layoutItemStyles: F
    }), _ = De(b(() => typeof e.scrim == "string" ? e.scrim : null)), R = b(() => ({
      ...D.value ? {
        opacity: M.value * 0.2,
        transition: "none"
      } : void 0,
      ...j.value
    }));
    return He({
      VList: {
        bgColor: "transparent"
      }
    }), H(() => {
      const U = l.image || e.image;
      return d(oe, null, [d(e.tag, B({
        ref: p,
        onMouseenter: T,
        onMouseleave: C,
        class: ["v-navigation-drawer", `v-navigation-drawer--${x.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": w.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": S.value,
          "v-navigation-drawer--persistent": P.value,
          "v-navigation-drawer--active": h.value,
          "v-navigation-drawer--sticky": I.value
        }, i.value, s.value, r.value, f.value, u.value, v.value, e.class],
        style: [c.value, F.value, y.value, z.value, e.style, ["top", "bottom"].includes(x.value) ? {
          height: "auto"
        } : {}]
      }, k, t), {
        default: () => {
          var ae, re, Z;
          return [U && d("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [l.image ? d(he, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                alt: "",
                cover: !0,
                height: "inherit",
                src: e.image
              }
            }
          }, l.image) : d(an, {
            key: "image-img",
            alt: "",
            cover: !0,
            height: "inherit",
            src: e.image
          }, null)]), l.prepend && d("div", {
            class: "v-navigation-drawer__prepend"
          }, [(ae = l.prepend) == null ? void 0 : ae.call(l)]), d("div", {
            class: "v-navigation-drawer__content"
          }, [(re = l.default) == null ? void 0 : re.call(l)]), l.append && d("div", {
            class: "v-navigation-drawer__append"
          }, [(Z = l.append) == null ? void 0 : Z.call(l)])];
        }
      }), d(tn, {
        name: "fade-transition"
      }, {
        default: () => [S.value && (D.value || h.value) && !!e.scrim && d("div", B({
          class: ["v-navigation-drawer__scrim", _.backgroundColorClasses.value],
          style: [R.value, _.backgroundColorStyles.value],
          onClick: () => {
            P.value || (h.value = !1);
          }
        }, k), null)]
      })]);
    }), X.then(() => ({
      isStuck: N
    }));
  }
}), pS = Dt({
  name: "VNoSsr",
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = yd();
    return () => {
      var l;
      return a.value && ((l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), kS = $({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: "$vuetify.input.otp"
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: void 0
  },
  placeholder: String,
  type: {
    type: String,
    default: "number"
  },
  ...et(),
  ...il(),
  ...Hl(ul({
    variant: "outlined"
  }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])
}, "VOtpInput"), SS = L()({
  name: "VOtpInput",
  props: kS(),
  emits: {
    finish: (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      dimensionStyles: o
    } = tt(e), {
      isFocused: i,
      focus: r,
      blur: s
    } = un(e), c = ie(e, "modelValue", "", (P) => P == null ? [] : String(P).split(""), (P) => P.join("")), {
      t: u
    } = Ke(), f = b(() => Number(e.length)), m = b(() => Array(f.value).fill(0)), v = Y(-1), g = Y(), h = Y([]), y = b(() => h.value[v.value]);
    function k() {
      if (x(y.value.value)) {
        y.value.value = "";
        return;
      }
      const P = c.value.slice(), S = y.value.value;
      P[v.value] = S;
      let I = null;
      v.value > c.value.length ? I = c.value.length + 1 : v.value + 1 !== f.value && (I = "next"), c.value = P, I && la(g.value, I);
    }
    function p(P) {
      const S = c.value.slice(), I = v.value;
      let D = null;
      ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(P.key) && (P.preventDefault(), P.key === "ArrowLeft" ? D = "prev" : P.key === "ArrowRight" ? D = "next" : ["Backspace", "Delete"].includes(P.key) && (S[v.value] = "", c.value = S, v.value > 0 && P.key === "Backspace" ? D = "prev" : requestAnimationFrame(() => {
        var M;
        (M = h.value[I]) == null || M.select();
      })), requestAnimationFrame(() => {
        D != null && la(g.value, D);
      }));
    }
    function w(P, S) {
      var D, M;
      S.preventDefault(), S.stopPropagation();
      const I = ((D = S == null ? void 0 : S.clipboardData) == null ? void 0 : D.getData("Text")) ?? "";
      x(I) || (c.value = I.split(""), (M = h.value) == null || M[P].blur());
    }
    function T() {
      c.value = [];
    }
    function C(P, S) {
      r(), v.value = S;
    }
    function V() {
      s(), v.value = -1;
    }
    function x(P) {
      return e.type === "number" && /[^0-9]/g.test(P);
    }
    return He({
      VField: {
        color: b(() => e.color),
        bgColor: b(() => e.color),
        baseColor: b(() => e.baseColor),
        disabled: b(() => e.disabled),
        error: b(() => e.error),
        variant: b(() => e.variant)
      }
    }, {
      scoped: !0
    }), q(c, (P) => {
      P.length === f.value && a("finish", P.join(""));
    }, {
      deep: !0
    }), q(v, (P) => {
      P < 0 || be(() => {
        var S;
        (S = h.value[P]) == null || S.select();
      });
    }), H(() => {
      var I;
      const [P, S] = pn(t);
      return d("div", B({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, P), [d("div", {
        ref: g,
        class: "v-otp-input__content",
        style: [o.value]
      }, [m.value.map((D, M) => d(oe, null, [e.divider && M !== 0 && d("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), d(ya, {
        focused: i.value && e.focusAll || v.value === M,
        key: M
      }, {
        ...l,
        loader: void 0,
        default: () => d("input", {
          ref: (A) => h.value[M] = A,
          "aria-label": u(e.label, M + 1),
          autofocus: M === 0 && e.autofocus,
          autocomplete: "one-time-code",
          class: ["v-otp-input__field"],
          disabled: e.disabled,
          inputmode: e.type === "number" ? "numeric" : "text",
          min: e.type === "number" ? 0 : void 0,
          maxlength: "1",
          placeholder: e.placeholder,
          type: e.type === "number" ? "text" : e.type,
          value: c.value[M],
          onInput: k,
          onFocus: (A) => C(A, M),
          onBlur: V,
          onKeydown: p,
          onPaste: (A) => w(M, A)
        }, null)
      })])), d("input", B({
        class: "v-otp-input-input",
        type: "hidden"
      }, S, {
        value: c.value.join("")
      }), null), d(qt, {
        contained: !0,
        "content-class": "v-otp-input__loader",
        "model-value": !!e.loading,
        persistent: !0
      }, {
        default: () => {
          var D;
          return [((D = l.loader) == null ? void 0 : D.call(l)) ?? d(sa, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "24",
            width: "2"
          }, null)];
        }
      }), (I = l.default) == null ? void 0 : I.call(l)])]);
    }), {
      blur: () => {
        var P;
        (P = h.value) == null || P.some((S) => S.blur());
      },
      focus: () => {
        var P;
        (P = h.value) == null || P[0].focus();
      },
      reset: T,
      isFocused: i
    };
  }
});
function wS(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const CS = $({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...Q()
}, "VParallax"), xS = L()({
  name: "VParallax",
  props: CS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Xl(), {
      resizeRef: o,
      contentRect: i
    } = jt(), {
      height: r
    } = _t(), s = Y();
    Ye(() => {
      var v;
      a.value = o.value = (v = s.value) == null ? void 0 : v.$el;
    });
    let c;
    q(l, (v) => {
      v ? (c = Ri(a.value), c = c === document.scrollingElement ? document : c, c.addEventListener("scroll", m, {
        passive: !0
      }), m()) : c.removeEventListener("scroll", m);
    }), wt(() => {
      c == null || c.removeEventListener("scroll", m);
    }), q(r, m), q(() => {
      var v;
      return (v = i.value) == null ? void 0 : v.height;
    }, m);
    const u = b(() => 1 - qe(+e.scale));
    let f = -1;
    function m() {
      l.value && (cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        var C;
        const v = ((C = s.value) == null ? void 0 : C.$el).querySelector(".v-img__img");
        if (!v) return;
        const g = c instanceof Document ? document.documentElement.clientHeight : c.clientHeight, h = c instanceof Document ? window.scrollY : c.scrollTop, y = a.value.getBoundingClientRect().top + h, k = i.value.height, p = y + (k - g) / 2, w = wS((h - p) * u.value), T = Math.max(1, (u.value * (g - k) + k) / k);
        v.style.setProperty("transform", `translateY(${w}px) scale(${T})`);
      }));
    }
    return H(() => d(an, {
      class: ["v-parallax", {
        "v-parallax--active": l.value
      }, e.class],
      style: e.style,
      ref: s,
      cover: !0,
      onLoadstart: m,
      onLoad: m
    }, t)), {};
  }
}), VS = $({
  ...eo({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), PS = L()({
  name: "VRadio",
  props: VS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => {
      const a = yn.filterProps(e);
      return d(yn, B(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), t);
    }), {};
  }
}), TS = $({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...cn(),
  ...We(Zi(), ["multiple"]),
  trueIcon: {
    type: ue,
    default: "$radioOn"
  },
  falseIcon: {
    type: ue,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup"), IS = L()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: TS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = lt(), o = b(() => e.id || `radio-group-${l}`), i = ie(e, "modelValue");
    return H(() => {
      const [r, s] = pn(t), c = rt.filterProps(e), u = yn.filterProps(e), f = a.label ? a.label({
        label: e.label,
        props: {
          for: o.value
        }
      }) : e.label;
      return d(rt, B({
        class: ["v-radio-group", e.class],
        style: e.style
      }, r, c, {
        modelValue: i.value,
        "onUpdate:modelValue": (m) => i.value = m,
        id: o.value
      }), {
        ...a,
        default: (m) => {
          let {
            id: v,
            messagesId: g,
            isDisabled: h,
            isReadonly: y
          } = m;
          return d(oe, null, [f && d(ha, {
            id: v.value
          }, {
            default: () => [f]
          }), d(jc, B(u, {
            id: v.value,
            "aria-describedby": g.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: h.value,
            readonly: y.value,
            "aria-labelledby": f ? v.value : void 0,
            multiple: !1
          }, s, {
            modelValue: i.value,
            "onUpdate:modelValue": (k) => i.value = k
          }), a)]);
        }
      });
    }), {};
  }
}), DS = $({
  ...il(),
  ...cn(),
  ...Fd(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider"), MS = L()({
  name: "VRangeSlider",
  props: DS(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    end: (e) => !0,
    start: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = Y(), o = Y(), i = Y(), {
      rtlClasses: r
    } = Qe();
    function s(I) {
      if (!l.value || !o.value) return;
      const D = di(I, l.value.$el, e.direction), M = di(I, o.value.$el, e.direction), A = Math.abs(D), E = Math.abs(M);
      return A < E || A === E && D < 0 ? l.value.$el : o.value.$el;
    }
    const c = Nd(e), u = ie(e, "modelValue", void 0, (I) => I != null && I.length ? I.map((D) => c.roundValue(D)) : [0, 0]), {
      activeThumbRef: f,
      hasLabels: m,
      max: v,
      min: g,
      mousePressed: h,
      onSliderMousedown: y,
      onSliderTouchstart: k,
      position: p,
      trackContainerRef: w,
      readonly: T
    } = Rd({
      props: e,
      steps: c,
      onSliderStart: () => {
        a("start", u.value);
      },
      onSliderEnd: (I) => {
        var A;
        let {
          value: D
        } = I;
        const M = f.value === ((A = l.value) == null ? void 0 : A.$el) ? [D, u.value[1]] : [u.value[0], D];
        !e.strict && M[0] < M[1] && (u.value = M), a("end", u.value);
      },
      onSliderMove: (I) => {
        var E, F, j, X;
        let {
          value: D
        } = I;
        const [M, A] = u.value;
        !e.strict && M === A && M !== g.value && (f.value = D > M ? (E = o.value) == null ? void 0 : E.$el : (F = l.value) == null ? void 0 : F.$el, (j = f.value) == null || j.focus()), f.value === ((X = l.value) == null ? void 0 : X.$el) ? u.value = [Math.min(D, A), A] : u.value = [M, Math.max(M, D)];
      },
      getActiveThumb: s
    }), {
      isFocused: C,
      focus: V,
      blur: x
    } = un(e), P = b(() => p(u.value[0])), S = b(() => p(u.value[1]));
    return H(() => {
      const I = rt.filterProps(e), D = !!(e.label || t.label || t.prepend);
      return d(rt, B({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!t["tick-label"] || m.value,
          "v-slider--focused": C.value,
          "v-slider--pressed": h.value,
          "v-slider--disabled": e.disabled
        }, r.value, e.class],
        style: e.style,
        ref: i
      }, I, {
        focused: C.value
      }), {
        ...t,
        prepend: D ? (M) => {
          var A, E;
          return d(oe, null, [((A = t.label) == null ? void 0 : A.call(t, M)) ?? (e.label ? d(ha, {
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (E = t.prepend) == null ? void 0 : E.call(t, M)]);
        } : void 0,
        default: (M) => {
          var F, j;
          let {
            id: A,
            messagesId: E
          } = M;
          return d("div", {
            class: "v-slider__container",
            onMousedown: T.value ? void 0 : y,
            onTouchstartPassive: T.value ? void 0 : k
          }, [d("input", {
            id: `${A.value}_start`,
            name: e.name || A.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: u.value[0]
          }, null), d("input", {
            id: `${A.value}_stop`,
            name: e.name || A.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: u.value[1]
          }, null), d(Hd, {
            ref: w,
            start: P.value,
            stop: S.value
          }, {
            "tick-label": t["tick-label"]
          }), d(fi, {
            ref: l,
            "aria-describedby": E.value,
            focused: C && f.value === ((F = l.value) == null ? void 0 : F.$el),
            modelValue: u.value[0],
            "onUpdate:modelValue": (X) => u.value = [X, u.value[1]],
            onFocus: (X) => {
              var N, z, _, R;
              V(), f.value = (N = l.value) == null ? void 0 : N.$el, u.value[0] === u.value[1] && u.value[1] === g.value && X.relatedTarget !== ((z = o.value) == null ? void 0 : z.$el) && ((_ = l.value) == null || _.$el.blur(), (R = o.value) == null || R.$el.focus());
            },
            onBlur: () => {
              x(), f.value = void 0;
            },
            min: g.value,
            max: u.value[1],
            position: P.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          }), d(fi, {
            ref: o,
            "aria-describedby": E.value,
            focused: C && f.value === ((j = o.value) == null ? void 0 : j.$el),
            modelValue: u.value[1],
            "onUpdate:modelValue": (X) => u.value = [u.value[0], X],
            onFocus: (X) => {
              var N, z, _, R;
              V(), f.value = (N = o.value) == null ? void 0 : N.$el, u.value[0] === u.value[1] && u.value[0] === v.value && X.relatedTarget !== ((z = l.value) == null ? void 0 : z.$el) && ((_ = o.value) == null || _.$el.blur(), (R = l.value) == null || R.$el.focus());
            },
            onBlur: () => {
              x(), f.value = void 0;
            },
            min: u.value[0],
            max: v.value,
            position: S.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), BS = $({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: ue,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: ue,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ripple: Boolean,
  ...Q(),
  ...nt(),
  ...Qt(),
  ...ve(),
  ...ye()
}, "VRating"), AS = L()({
  name: "VRating",
  props: BS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ke(), {
      themeClasses: l
    } = Ce(e), o = ie(e, "modelValue"), i = b(() => qe(parseFloat(o.value), 0, +e.length)), r = b(() => Kt(Number(e.length), 1)), s = b(() => r.value.flatMap((h) => e.halfIncrements ? [h - 0.5, h] : [h])), c = G(-1), u = b(() => s.value.map((h) => {
      const y = e.hover && c.value > -1, k = i.value >= h, p = c.value >= h, T = (y ? p : k) ? e.fullIcon : e.emptyIcon, C = e.activeColor ?? e.color, V = k || p ? C : e.color;
      return {
        isFilled: k,
        isHovered: p,
        icon: T,
        color: V
      };
    })), f = b(() => [0, ...s.value].map((h) => {
      function y() {
        c.value = h;
      }
      function k() {
        c.value = -1;
      }
      function p() {
        e.disabled || e.readonly || (o.value = i.value === h && e.clearable ? 0 : h);
      }
      return {
        onMouseenter: e.hover ? y : void 0,
        onMouseleave: e.hover ? k : void 0,
        onClick: p
      };
    })), m = b(() => e.name ?? `v-rating-${lt()}`);
    function v(h) {
      var P, S;
      let {
        value: y,
        index: k,
        showStar: p = !0
      } = h;
      const {
        onMouseenter: w,
        onMouseleave: T,
        onClick: C
      } = f.value[k + 1], V = `${m.value}-${String(y).replace(".", "-")}`, x = {
        color: (P = u.value[k]) == null ? void 0 : P.color,
        density: e.density,
        disabled: e.disabled,
        icon: (S = u.value[k]) == null ? void 0 : S.icon,
        ripple: e.ripple,
        size: e.size,
        variant: "plain"
      };
      return d(oe, null, [d("label", {
        for: V,
        class: {
          "v-rating__item--half": e.halfIncrements && y % 1 > 0,
          "v-rating__item--full": e.halfIncrements && y % 1 === 0
        },
        onMouseenter: w,
        onMouseleave: T,
        onClick: C
      }, [d("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, y, e.length)]), p ? t.item ? t.item({
        ...u.value[k],
        props: x,
        value: y,
        index: k,
        rating: i.value
      }) : d(Se, B({
        "aria-label": a(e.itemAriaLabel, y, e.length)
      }, x), null) : void 0]), d("input", {
        class: "v-rating__hidden",
        name: m.value,
        id: V,
        type: "radio",
        value: y,
        checked: i.value === y,
        tabindex: -1,
        readonly: e.readonly,
        disabled: e.disabled
      }, null)]);
    }
    function g(h) {
      return t["item-label"] ? t["item-label"](h) : h.label ? d("span", null, [h.label]) : d("span", null, [dt(" ")]);
    }
    return H(() => {
      var y;
      const h = !!((y = e.itemLabels) != null && y.length) || t["item-label"];
      return d(e.tag, {
        class: ["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class],
        style: e.style
      }, {
        default: () => [d(v, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), r.value.map((k, p) => {
          var w, T;
          return d("div", {
            class: "v-rating__wrapper"
          }, [h && e.itemLabelPosition === "top" ? g({
            value: k,
            index: p,
            label: (w = e.itemLabels) == null ? void 0 : w[p]
          }) : void 0, d("div", {
            class: "v-rating__item"
          }, [e.halfIncrements ? d(oe, null, [d(v, {
            value: k - 0.5,
            index: p * 2
          }, null), d(v, {
            value: k,
            index: p * 2 + 1
          }, null)]) : d(v, {
            value: k,
            index: p
          }, null)]), h && e.itemLabelPosition === "bottom" ? g({
            value: k,
            index: p,
            label: (T = e.itemLabels) == null ? void 0 : T[p]
          }) : void 0]);
        })]
      });
    }), {};
  }
}), $S = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function _S(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return d("div", {
    class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]
  }, [n]);
}
function Xs(e) {
  const [n, t] = e.split("@");
  return Array.from({
    length: t
  }).map(() => po(n));
}
function po(e) {
  let n = [];
  if (!e) return n;
  const t = $S[e];
  if (e !== t) {
    if (e.includes(",")) return Zs(e);
    if (e.includes("@")) return Xs(e);
    t.includes(",") ? n = Zs(t) : t.includes("@") ? n = Xs(t) : t && n.push(po(t));
  }
  return [_S(e, n)];
}
function Zs(e) {
  return e.replace(/\s/g, "").split(",").map(po);
}
const OS = $({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  },
  ...et(),
  ...Je(),
  ...ye()
}, "VSkeletonLoader"), ES = L()({
  name: "VSkeletonLoader",
  props: OS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = De(O(e, "color")), {
      dimensionStyles: o
    } = tt(e), {
      elevationClasses: i
    } = ot(e), {
      themeClasses: r
    } = Ce(e), {
      t: s
    } = Ke(), c = b(() => po(Ne(e.type).join(",")));
    return H(() => {
      var f;
      const u = !t.default || e.loading;
      return d("div", {
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, r.value, a.value, i.value],
        style: [l.value, u ? o.value : {}],
        "aria-busy": e.boilerplate ? void 0 : u,
        "aria-live": e.boilerplate ? void 0 : "polite",
        "aria-label": e.boilerplate ? void 0 : s(e.loadingText),
        role: e.boilerplate ? void 0 : "alert"
      }, [u ? c.value : (f = t.default) == null ? void 0 : f.call(t)]);
    }), {};
  }
}), LS = L()({
  name: "VSlideGroupItem",
  props: Wn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Un(e, Jc);
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value
      });
    };
  }
});
function FS(e) {
  const n = G(e);
  let t = -1;
  function a() {
    clearInterval(t);
  }
  function l() {
    a(), be(() => n.value = e);
  }
  function o(i) {
    const r = i ? getComputedStyle(i) : {
      transitionDuration: 0.2
    }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), n.value <= 0) return;
    const c = performance.now();
    t = window.setInterval(() => {
      const u = performance.now() - c + s;
      n.value = Math.max(e - u, 0), n.value <= 0 && a();
    }, s);
  }
  return ht(a), {
    clear: a,
    time: n,
    start: o,
    reset: l
  };
}
const NS = $({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...rn({
    location: "bottom"
  }),
  ...va(),
  ...Fe(),
  ...Et(),
  ...ye(),
  ...We(sl({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), RS = L()({
  name: "VSnackbar",
  props: NS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      positionClasses: l
    } = ma(e), {
      scopeId: o
    } = Gn(), {
      themeClasses: i
    } = Ce(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = jn(e), {
      roundedClasses: u
    } = ze(e), f = FS(Number(e.timeout)), m = Y(), v = Y(), g = G(!1), h = G(0), y = Y(), k = pe(Ha, void 0);
    xt(() => !!k, () => {
      const I = kc();
      Ye(() => {
        y.value = I.mainStyles.value;
      });
    }), q(a, w), q(() => e.timeout, w), mt(() => {
      a.value && w();
    });
    let p = -1;
    function w() {
      f.reset(), window.clearTimeout(p);
      const I = Number(e.timeout);
      if (!a.value || I === -1) return;
      const D = Ai(v.value);
      f.start(D), p = window.setTimeout(() => {
        a.value = !1;
      }, I);
    }
    function T() {
      f.reset(), window.clearTimeout(p);
    }
    function C() {
      g.value = !0, T();
    }
    function V() {
      g.value = !1, w();
    }
    function x(I) {
      h.value = I.touches[0].clientY;
    }
    function P(I) {
      Math.abs(h.value - I.changedTouches[0].clientY) > 50 && (a.value = !1);
    }
    const S = b(() => e.location.split(" ").reduce((I, D) => (I[`v-snackbar--${D}`] = !0, I), {}));
    return H(() => {
      const I = qt.filterProps(e), D = !!(t.default || t.text || e.text);
      return d(qt, B({
        ref: m,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, S.value, l.value, e.class],
        style: [y.value, e.style]
      }, I, {
        modelValue: a.value,
        "onUpdate:modelValue": (M) => a.value = M,
        contentProps: B({
          class: ["v-snackbar__wrapper", i.value, r.value, u.value, c.value],
          style: [s.value],
          onPointerenter: C,
          onPointerleave: V
        }, I.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: x,
        onTouchend: P
      }, o), {
        default: () => {
          var M, A;
          return [kn(!1, "v-snackbar"), e.timer && !g.value && d("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [d(Zl, {
            ref: v,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            "model-value": f.time.value
          }, null)]), D && d("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((M = t.text) == null ? void 0 : M.call(t)) ?? e.text, (A = t.default) == null ? void 0 : A.call(t)]), t.actions && d(he, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [d("div", {
              class: "v-snackbar__actions"
            }, [t.actions({
              isActive: a
            })])]
          })];
        },
        activator: t.activator
      });
    }), Lt({}, m);
  }
}), Af = $({
  autoDraw: Boolean,
  autoDrawDuration: [Number, String],
  autoDrawEasing: {
    type: String,
    default: "ease"
  },
  color: String,
  gradient: {
    type: Array,
    default: () => []
  },
  gradientDirection: {
    type: String,
    validator: (e) => ["top", "bottom", "left", "right"].includes(e),
    default: "top"
  },
  height: {
    type: [String, Number],
    default: 75
  },
  labels: {
    type: Array,
    default: () => []
  },
  labelSize: {
    type: [Number, String],
    default: 7
  },
  lineWidth: {
    type: [String, Number],
    default: 4
  },
  id: String,
  itemValue: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  min: [String, Number],
  max: [String, Number],
  padding: {
    type: [String, Number],
    default: 8
  },
  showLabels: Boolean,
  smooth: Boolean,
  width: {
    type: [Number, String],
    default: 300
  }
}, "Line"), $f = $({
  autoLineWidth: Boolean,
  ...Af()
}, "VBarline"), Js = L()({
  name: "VBarline",
  props: $f(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = lt(), l = b(() => e.id || `barline-${a}`), o = b(() => Number(e.autoDrawDuration) || 500), i = b(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), r = b(() => parseFloat(e.lineWidth) || 4), s = b(() => Math.max(e.modelValue.length * r.value, Number(e.width))), c = b(() => ({
      minX: 0,
      maxX: s.value,
      minY: 0,
      maxY: parseInt(e.height, 10)
    })), u = b(() => e.modelValue.map((h) => Ze(h, e.itemValue, h)));
    function f(h, y) {
      const {
        minX: k,
        maxX: p,
        minY: w,
        maxY: T
      } = y, C = h.length;
      let V = e.max != null ? Number(e.max) : Math.max(...h), x = e.min != null ? Number(e.min) : Math.min(...h);
      x > 0 && e.min == null && (x = 0), V < 0 && e.max == null && (V = 0);
      const P = p / C, S = (T - w) / (V - x || 1), I = T - Math.abs(x * S);
      return h.map((D, M) => {
        const A = Math.abs(S * D);
        return {
          x: k + M * P,
          y: I - A + +(D < 0) * A,
          height: A,
          value: D
        };
      });
    }
    const m = b(() => {
      const h = [], y = f(u.value, c.value), k = y.length;
      for (let p = 0; h.length < k; p++) {
        const w = y[p];
        let T = e.labels[p];
        T || (T = typeof w == "object" ? w.value : w), h.push({
          x: w.x,
          value: String(T)
        });
      }
      return h;
    }), v = b(() => f(u.value, c.value)), g = b(() => (Math.abs(v.value[0].x - v.value[1].x) - r.value) / 2);
    H(() => {
      const h = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return d("svg", {
        display: "block"
      }, [d("defs", null, [d("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [h.map((y, k) => d("stop", {
        offset: k / Math.max(h.length - 1, 1),
        "stop-color": y || "currentColor"
      }, null))])]), d("clipPath", {
        id: `${l.value}-clip`
      }, [v.value.map((y) => d("rect", {
        x: y.x + g.value,
        y: y.y,
        width: r.value,
        height: y.height,
        rx: typeof e.smooth == "number" ? e.smooth : e.smooth ? 2 : 0,
        ry: typeof e.smooth == "number" ? e.smooth : e.smooth ? 2 : 0
      }, [e.autoDraw && d(oe, null, [d("animate", {
        attributeName: "y",
        from: y.y + y.height,
        to: y.y,
        dur: `${o.value}ms`,
        fill: "freeze"
      }, null), d("animate", {
        attributeName: "height",
        from: "0",
        to: y.height,
        dur: `${o.value}ms`,
        fill: "freeze"
      }, null)])]))]), i.value && d("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [m.value.map((y, k) => {
        var p;
        return d("text", {
          x: y.x + g.value + r.value / 2,
          y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((p = t.label) == null ? void 0 : p.call(t, {
          index: k,
          value: y.value
        })) ?? y.value]);
      })]), d("g", {
        "clip-path": `url(#${l.value}-clip)`,
        fill: `url(#${l.value})`
      }, [d("rect", {
        x: 0,
        y: 0,
        width: Math.max(e.modelValue.length * r.value, Number(e.width)),
        height: e.height
      }, null)])]);
    });
  }
});
function HS(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), o = e[e.length - 1];
  return (t ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((i, r) => {
    const s = e[r + 1], c = e[r - 1] || l, u = s && zS(s, i, c);
    if (!s || u)
      return `L${i.x} ${i.y}`;
    const f = Math.min(Qs(c, i), Qs(s, i)), v = f / 2 < n ? f / 2 : n, g = eu(c, i, v), h = eu(s, i, v);
    return `L${g.x} ${g.y}S${i.x} ${i.y} ${h.x} ${h.y}`;
  }).join("") + (t ? `L${o.x} ${a - l.x + 2} Z` : "");
}
function Sl(e) {
  return parseInt(e, 10);
}
function zS(e, n, t) {
  return Sl(e.x + t.x) === Sl(2 * n.x) && Sl(e.y + t.y) === Sl(2 * n.y);
}
function Qs(e, n) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function eu(e, n, t) {
  const a = {
    x: e.x - n.x,
    y: e.y - n.y
  }, l = Math.sqrt(a.x * a.x + a.y * a.y), o = {
    x: a.x / l,
    y: a.y / l
  };
  return {
    x: n.x + o.x * t,
    y: n.y + o.y * t
  };
}
const _f = $({
  fill: Boolean,
  ...Af()
}, "VTrendline"), tu = L()({
  name: "VTrendline",
  props: _f(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = lt(), l = b(() => e.id || `trendline-${a}`), o = b(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), i = Y(0), r = Y(null);
    function s(y, k) {
      const {
        minX: p,
        maxX: w,
        minY: T,
        maxY: C
      } = k, V = y.length, x = e.max != null ? Number(e.max) : Math.max(...y), P = e.min != null ? Number(e.min) : Math.min(...y), S = (w - p) / (V - 1), I = (C - T) / (x - P || 1);
      return y.map((D, M) => ({
        x: p + M * S,
        y: C - (D - P) * I,
        value: D
      }));
    }
    const c = b(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), u = b(() => parseFloat(e.lineWidth) || 4), f = b(() => Number(e.width)), m = b(() => {
      const y = Number(e.padding);
      return {
        minX: y,
        maxX: f.value - y,
        minY: y,
        maxY: parseInt(e.height, 10) - y
      };
    }), v = b(() => e.modelValue.map((y) => Ze(y, e.itemValue, y))), g = b(() => {
      const y = [], k = s(v.value, m.value), p = k.length;
      for (let w = 0; y.length < p; w++) {
        const T = k[w];
        let C = e.labels[w];
        C || (C = typeof T == "object" ? T.value : T), y.push({
          x: T.x,
          value: String(C)
        });
      }
      return y;
    });
    q(() => e.modelValue, async () => {
      if (await be(), !e.autoDraw || !r.value) return;
      const y = r.value, k = y.getTotalLength();
      e.fill ? (y.style.transformOrigin = "bottom center", y.style.transition = "none", y.style.transform = "scaleY(0)", y.getBoundingClientRect(), y.style.transition = `transform ${o.value}ms ${e.autoDrawEasing}`, y.style.transform = "scaleY(1)") : (y.style.strokeDasharray = `${k}`, y.style.strokeDashoffset = `${k}`, y.getBoundingClientRect(), y.style.transition = `stroke-dashoffset ${o.value}ms ${e.autoDrawEasing}`, y.style.strokeDashoffset = "0"), i.value = k;
    }, {
      immediate: !0
    });
    function h(y) {
      return HS(s(v.value, m.value), e.smooth ? 8 : Number(e.smooth), y, parseInt(e.height, 10));
    }
    H(() => {
      var k;
      const y = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return d("svg", {
        display: "block",
        "stroke-width": parseFloat(e.lineWidth) ?? 4
      }, [d("defs", null, [d("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [y.map((p, w) => d("stop", {
        offset: w / Math.max(y.length - 1, 1),
        "stop-color": p || "currentColor"
      }, null))])]), c.value && d("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [g.value.map((p, w) => {
        var T;
        return d("text", {
          x: p.x + u.value / 2 + u.value / 2,
          y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((T = t.label) == null ? void 0 : T.call(t, {
          index: w,
          value: p.value
        })) ?? p.value]);
      })]), d("path", {
        ref: r,
        d: h(e.fill),
        fill: e.fill ? `url(#${l.value})` : "none",
        stroke: e.fill ? "none" : `url(#${l.value})`
      }, null), e.fill && d("path", {
        d: h(!1),
        fill: "none",
        stroke: e.color ?? ((k = e.gradient) == null ? void 0 : k[0])
      }, null)]);
    });
  }
}), jS = $({
  type: {
    type: String,
    default: "trend"
  },
  ...$f(),
  ..._f()
}, "VSparkline"), YS = L()({
  name: "VSparkline",
  props: jS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = it(O(e, "color")), o = b(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), i = b(() => {
      let r = parseInt(e.height, 10);
      return o.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
    });
    H(() => {
      const r = e.type === "trend" ? tu : Js, s = e.type === "trend" ? tu.filterProps(e) : Js.filterProps(e);
      return d(r, B({
        key: e.type,
        class: a.value,
        style: l.value,
        viewBox: `0 0 ${e.width} ${parseInt(i.value, 10)}`
      }, s), t);
    });
  }
}), WS = $({
  ...Q(),
  ...Sd({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: "top center",
    transition: "scale-transition"
  })
}, "VSpeedDial"), US = L()({
  name: "VSpeedDial",
  props: WS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), l = Y(), o = b(() => {
      const [r, s = "center"] = e.location.split(" ");
      return `${r} ${s}`;
    }), i = b(() => ({
      [`v-speed-dial__content--${o.value.replace(" ", "-")}`]: !0
    }));
    return H(() => {
      const r = ua.filterProps(e);
      return d(ua, B(r, {
        modelValue: a.value,
        "onUpdate:modelValue": (s) => a.value = s,
        class: e.class,
        style: e.style,
        contentClass: ["v-speed-dial__content", i.value],
        location: o.value,
        ref: l,
        transition: "fade-transition"
      }), {
        ...t,
        default: (s) => d(he, {
          defaults: {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [d(vt, {
            appear: !0,
            group: !0,
            transition: e.transition
          }, {
            default: () => {
              var c;
              return [(c = t.default) == null ? void 0 : c.call(t, s)];
            }
          })]
        })
      });
    }), {};
  }
}), Pr = Symbol.for("vuetify:v-stepper"), Of = $({
  color: String,
  disabled: {
    type: [Boolean, String],
    default: !1
  },
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  }
}, "VStepperActions"), Ef = L()({
  name: "VStepperActions",
  props: Of(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ke();
    function o() {
      t("click:prev");
    }
    function i() {
      t("click:next");
    }
    return H(() => {
      const r = {
        onClick: o
      }, s = {
        onClick: i
      };
      return d("div", {
        class: "v-stepper-actions"
      }, [d(he, {
        defaults: {
          VBtn: {
            disabled: ["prev", !0].includes(e.disabled),
            text: l(e.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.prev) == null ? void 0 : c.call(a, {
            props: r
          })) ?? d(Se, r, null)];
        }
      }), d(he, {
        defaults: {
          VBtn: {
            color: e.color,
            disabled: ["next", !0].includes(e.disabled),
            text: l(e.nextText),
            variant: "tonal"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.next) == null ? void 0 : c.call(a, {
            props: s
          })) ?? d(Se, s, null)];
        }
      })]);
    }), {};
  }
}), Lf = Jt("v-stepper-header"), KS = $({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: String,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: String,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: String,
    default: "$error"
  },
  icon: String,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem"), GS = $({
  ...KS(),
  ...Wn()
}, "VStepperItem"), Ff = L()({
  name: "VStepperItem",
  directives: {
    Ripple: sn
  },
  props: GS(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Un(e, Pr, !0), l = b(() => (a == null ? void 0 : a.value.value) ?? e.value), o = b(() => e.rules.every((m) => m() === !0)), i = b(() => !e.disabled && e.editable), r = b(() => !e.disabled && e.editable), s = b(() => e.error || !o.value), c = b(() => e.complete || e.rules.length > 0 && o.value), u = b(() => s.value ? e.errorIcon : c.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), f = b(() => ({
      canEdit: r.value,
      hasError: s.value,
      hasCompleted: c.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return H(() => {
      var y, k, p;
      const m = (!a || a.isSelected.value || c.value || r.value) && !s.value && !e.disabled, v = !!(e.title != null || t.title), g = !!(e.subtitle != null || t.subtitle);
      function h() {
        a == null || a.toggle();
      }
      return Ie(d("button", {
        class: ["v-stepper-item", {
          "v-stepper-item--complete": c.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": s.value
        }, a == null ? void 0 : a.selectedClass.value],
        disabled: !e.editable,
        onClick: h
      }, [i.value && kn(!0, "v-stepper-item"), d($t, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: m ? e.color : void 0,
        size: 24
      }, {
        default: () => {
          var w;
          return [((w = t.icon) == null ? void 0 : w.call(t, f.value)) ?? (u.value ? d(we, {
            icon: u.value
          }, null) : l.value)];
        }
      }), d("div", {
        class: "v-stepper-item__content"
      }, [v && d("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [((y = t.title) == null ? void 0 : y.call(t, f.value)) ?? e.title]), g && d("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [((k = t.subtitle) == null ? void 0 : k.call(t, f.value)) ?? e.subtitle]), (p = t.default) == null ? void 0 : p.call(t, f.value)])]), [[St("ripple"), e.ripple && e.editable, null]]);
    }), {};
  }
}), qS = $({
  ...We(io(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), Nf = L()({
  name: "VStepperWindow",
  props: qS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = pe(Pr, null), l = ie(e, "modelValue"), o = b({
      get() {
        var i;
        return l.value != null || !a ? l.value : (i = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : i.value;
      },
      set(i) {
        l.value = i;
      }
    });
    return H(() => {
      const i = $n.filterProps(e);
      return d($n, B({
        _as: "VStepperWindow"
      }, i, {
        modelValue: o.value,
        "onUpdate:modelValue": (r) => o.value = r,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), XS = $({
  ...ro()
}, "VStepperWindowItem"), Rf = L()({
  name: "VStepperWindowItem",
  props: XS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => {
      const a = _n.filterProps(e);
      return d(_n, B({
        _as: "VStepperWindowItem"
      }, a, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
}), ZS = $({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: String,
  editIcon: String,
  editable: Boolean,
  errorIcon: String,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: String,
    default: "title"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  nonLinear: Boolean,
  flat: Boolean,
  ...Nn()
}, "Stepper"), JS = $({
  ...ZS(),
  ...Yn({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...so(),
  ...Hl(Of(), ["prevText", "nextText"])
}, "VStepper"), QS = L()({
  name: "VStepper",
  props: JS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a,
      next: l,
      prev: o,
      selected: i
    } = Sn(e, Pr), {
      displayClasses: r,
      mobile: s
    } = _t(e), {
      completeIcon: c,
      editIcon: u,
      errorIcon: f,
      color: m,
      editable: v,
      prevText: g,
      nextText: h
    } = Nl(e), y = b(() => e.items.map((w, T) => {
      const C = Ze(w, e.itemTitle, w), V = Ze(w, e.itemValue, T + 1);
      return {
        title: C,
        value: V,
        raw: w
      };
    })), k = b(() => a.value.findIndex((w) => i.value.includes(w.id))), p = b(() => e.disabled ? e.disabled : k.value === 0 ? "prev" : k.value === a.value.length - 1 ? "next" : !1);
    return He({
      VStepperItem: {
        editable: v,
        errorIcon: f,
        completeIcon: c,
        editIcon: u,
        prevText: g,
        nextText: h
      },
      VStepperActions: {
        color: m,
        disabled: p,
        prevText: g,
        nextText: h
      }
    }), H(() => {
      const w = On.filterProps(e), T = !!(t.header || e.items.length), C = e.items.length > 0, V = !e.hideActions && !!(C || t.actions);
      return d(On, B(w, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": s.value
        }, r.value, e.class],
        style: e.style
      }), {
        default: () => {
          var x, P;
          return [T && d(Lf, {
            key: "stepper-header"
          }, {
            default: () => [y.value.map((S, I) => {
              let {
                raw: D,
                ...M
              } = S;
              return d(oe, null, [!!I && d(rl, null, null), d(Ff, M, {
                default: t[`header-item.${M.value}`] ?? t.header,
                icon: t.icon,
                title: t.title,
                subtitle: t.subtitle
              })]);
            })]
          }), C && d(Nf, {
            key: "stepper-window"
          }, {
            default: () => [y.value.map((S) => d(Rf, {
              value: S.value
            }, {
              default: () => {
                var I, D;
                return ((I = t[`item.${S.value}`]) == null ? void 0 : I.call(t, S)) ?? ((D = t.item) == null ? void 0 : D.call(t, S));
              }
            }))]
          }), (x = t.default) == null ? void 0 : x.call(t, {
            prev: o,
            next: l
          }), V && (((P = t.actions) == null ? void 0 : P.call(t, {
            next: l,
            prev: o
          })) ?? d(Ef, {
            key: "stepper-actions",
            "onClick:prev": o,
            "onClick:next": l
          }, t))];
        }
      });
    }), {
      prev: o,
      next: l
    };
  }
}), ew = $({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...cn(),
  ...eo()
}, "VSwitch"), tw = L()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: ew(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ie(e, "indeterminate"), o = ie(e, "modelValue"), {
      loaderClasses: i
    } = nl(e), {
      isFocused: r,
      focus: s,
      blur: c
    } = un(e), u = Y(), f = xe && window.matchMedia("(forced-colors: active)").matches, m = b(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), v = lt(), g = b(() => e.id || `switch-${v}`);
    function h() {
      l.value && (l.value = !1);
    }
    function y(k) {
      var p, w;
      k.stopPropagation(), k.preventDefault(), (w = (p = u.value) == null ? void 0 : p.input) == null || w.click();
    }
    return H(() => {
      const [k, p] = pn(t), w = rt.filterProps(e), T = yn.filterProps(e);
      return d(rt, B({
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, i.value, e.class]
      }, k, w, {
        modelValue: o.value,
        "onUpdate:modelValue": (C) => o.value = C,
        id: g.value,
        focused: r.value,
        style: e.style
      }), {
        ...a,
        default: (C) => {
          let {
            id: V,
            messagesId: x,
            isDisabled: P,
            isReadonly: S,
            isValid: I
          } = C;
          const D = {
            model: o,
            isValid: I
          };
          return d(yn, B({
            ref: u
          }, T, {
            modelValue: o.value,
            "onUpdate:modelValue": [(M) => o.value = M, h],
            id: V.value,
            "aria-describedby": x.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: P.value,
            readonly: S.value,
            onFocus: s,
            onBlur: c
          }, p), {
            ...a,
            default: (M) => {
              let {
                backgroundColorClasses: A,
                backgroundColorStyles: E
              } = M;
              return d("div", {
                class: ["v-switch__track", f ? void 0 : A.value],
                style: E.value,
                onClick: y
              }, [a["track-true"] && d("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](D)]), a["track-false"] && d("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](D)])]);
            },
            input: (M) => {
              let {
                inputNode: A,
                icon: E,
                backgroundColorClasses: F,
                backgroundColorStyles: j
              } = M;
              return d(oe, null, [A, d("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": E || e.loading
                }, e.inset || f ? void 0 : F.value],
                style: e.inset ? void 0 : j.value
              }, [a.thumb ? d(he, {
                defaults: {
                  VIcon: {
                    icon: E,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb({
                  ...D,
                  icon: E
                })]
              }) : d(Ui, null, {
                default: () => [e.loading ? d(al, {
                  name: "v-switch",
                  active: !0,
                  color: I.value === !1 ? void 0 : m.value
                }, {
                  default: (X) => a.loader ? a.loader(X) : d(sa, {
                    active: X.isActive,
                    color: X.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : E && d(we, {
                  key: String(E),
                  icon: E,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
}), nw = $({
  color: String,
  height: [Number, String],
  window: Boolean,
  ...Q(),
  ...Je(),
  ...Rn(),
  ...Fe(),
  ...ve(),
  ...ye()
}, "VSystemBar"), aw = L()({
  name: "VSystemBar",
  props: nw(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ce(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: o
    } = De(O(e, "color")), {
      elevationClasses: i
    } = ot(e), {
      roundedClasses: r
    } = ze(e), {
      ssrBootStyles: s
    } = zn(), c = b(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: u
    } = Hn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: G("top"),
      layoutSize: c,
      elementSize: c,
      active: b(() => !0),
      absolute: O(e, "absolute")
    });
    return H(() => d(e.tag, {
      class: ["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, l.value, i.value, r.value, e.class],
      style: [o.value, u.value, s.value, e.style]
    }, t)), {};
  }
}), Tr = Symbol.for("vuetify:v-tabs"), lw = $({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...We(Ql({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), Hf = L()({
  name: "VTab",
  props: lw(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: o
    } = it(e, "sliderColor"), i = Y(), r = Y(), s = b(() => e.direction === "horizontal"), c = b(() => {
      var f, m;
      return ((m = (f = i.value) == null ? void 0 : f.group) == null ? void 0 : m.isSelected.value) ?? !1;
    });
    function u(f) {
      var v, g;
      let {
        value: m
      } = f;
      if (m) {
        const h = (g = (v = i.value) == null ? void 0 : v.$el.parentElement) == null ? void 0 : g.querySelector(".v-tab--selected .v-tab__slider"), y = r.value;
        if (!h || !y) return;
        const k = getComputedStyle(h).color, p = h.getBoundingClientRect(), w = y.getBoundingClientRect(), T = s.value ? "x" : "y", C = s.value ? "X" : "Y", V = s.value ? "right" : "bottom", x = s.value ? "width" : "height", P = p[T], S = w[T], I = P > S ? p[V] - w[V] : p[T] - w[T], D = Math.sign(I) > 0 ? s.value ? "right" : "bottom" : Math.sign(I) < 0 ? s.value ? "left" : "top" : "center", A = (Math.abs(I) + (Math.sign(I) < 0 ? p[x] : w[x])) / Math.max(p[x], w[x]) || 0, E = p[x] / w[x] || 0, F = 1.5;
        In(y, {
          backgroundColor: [k, "currentcolor"],
          transform: [`translate${C}(${I}px) scale${C}(${E})`, `translate${C}(${I / F}px) scale${C}(${(A - 1) / F + 1})`, "none"],
          transformOrigin: Array(3).fill(D)
        }, {
          duration: 225,
          easing: Na
        });
      }
    }
    return H(() => {
      const f = Se.filterProps(e);
      return d(Se, B({
        symbol: Tr,
        ref: i,
        class: ["v-tab", e.class],
        style: e.style,
        tabindex: c.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(c.value),
        active: !1
      }, f, a, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": u
      }), {
        ...t,
        default: () => {
          var m;
          return d(oe, null, [((m = t.default) == null ? void 0 : m.call(t)) ?? e.text, !e.hideSlider && d("div", {
            ref: r,
            class: ["v-tab__slider", l.value],
            style: o.value
          }, null)]);
        }
      });
    }), Lt({}, i);
  }
}), ow = $({
  ...We(io(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), zf = L()({
  name: "VTabsWindow",
  props: ow(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = pe(Tr, null), l = ie(e, "modelValue"), o = b({
      get() {
        var i;
        return l.value != null || !a ? l.value : (i = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : i.value;
      },
      set(i) {
        l.value = i;
      }
    });
    return H(() => {
      const i = $n.filterProps(e);
      return d($n, B({
        _as: "VTabsWindow"
      }, i, {
        modelValue: o.value,
        "onUpdate:modelValue": (r) => o.value = r,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), iw = $({
  ...ro()
}, "VTabsWindowItem"), jf = L()({
  name: "VTabsWindowItem",
  props: iw(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return H(() => {
      const a = _n.filterProps(e);
      return d(_n, B({
        _as: "VTabsWindowItem"
      }, a, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
});
function rw(e) {
  return e ? e.map((n) => La(n) ? n : {
    text: n,
    value: n
  }) : [];
}
const sw = $({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...Ji({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...nt(),
  ...ve()
}, "VTabs"), uw = L()({
  name: "VTabs",
  props: sw(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ie(e, "modelValue"), o = b(() => rw(e.items)), {
      densityClasses: i
    } = gt(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = De(O(e, "bgColor")), {
      scopeId: c
    } = Gn();
    return He({
      VTab: {
        color: O(e, "color"),
        direction: O(e, "direction"),
        stacked: O(e, "stacked"),
        fixed: O(e, "fixedTabs"),
        sliderColor: O(e, "sliderColor"),
        hideSlider: O(e, "hideSlider")
      }
    }), H(() => {
      const u = Ua.filterProps(e), f = !!(a.window || e.items.length > 0);
      return d(oe, null, [d(Ua, B(u, {
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--stacked": e.stacked
        }, i.value, r.value, e.class],
        style: [{
          "--v-tabs-height": J(e.height)
        }, s.value, e.style],
        role: "tablist",
        symbol: Tr
      }, c, t), {
        default: () => {
          var m;
          return [((m = a.default) == null ? void 0 : m.call(a)) ?? o.value.map((v) => {
            var g;
            return ((g = a.tab) == null ? void 0 : g.call(a, {
              item: v
            })) ?? d(Hf, B(v, {
              key: v.text,
              value: v.value
            }), {
              default: a[`tab.${v.value}`] ? () => {
                var h;
                return (h = a[`tab.${v.value}`]) == null ? void 0 : h.call(a, {
                  item: v
                });
              } : void 0
            });
          })];
        }
      }), f && d(zf, B({
        modelValue: l.value,
        "onUpdate:modelValue": (m) => l.value = m,
        key: "tabs-window"
      }, c), {
        default: () => {
          var m;
          return [o.value.map((v) => {
            var g;
            return ((g = a.item) == null ? void 0 : g.call(a, {
              item: v
            })) ?? d(jf, {
              value: v.value
            }, {
              default: () => {
                var h;
                return (h = a[`item.${v.value}`]) == null ? void 0 : h.call(a, {
                  item: v
                });
              }
            });
          }), (m = a.window) == null ? void 0 : m.call(a)];
        }
      })]);
    }), {};
  }
}), cw = $({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object,
  ...We(cn(), ["centerAffix"]),
  ...We(ul(), ["centerAffix"])
}, "VTextarea"), dw = L()({
  name: "VTextarea",
  directives: {
    Intersect: tl
  },
  inheritAttrs: !1,
  props: cw(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const o = ie(e, "modelValue"), {
      isFocused: i,
      focus: r,
      blur: s
    } = un(e), c = b(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), u = b(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function f(D, M) {
      var A, E;
      !e.autofocus || !D || (E = (A = M[0].target) == null ? void 0 : A.focus) == null || E.call(A);
    }
    const m = Y(), v = Y(), g = G(""), h = Y(), y = b(() => e.persistentPlaceholder || i.value || e.active);
    function k() {
      var D;
      h.value !== document.activeElement && ((D = h.value) == null || D.focus()), i.value || r();
    }
    function p(D) {
      k(), a("click:control", D);
    }
    function w(D) {
      a("mousedown:control", D);
    }
    function T(D) {
      D.stopPropagation(), k(), be(() => {
        o.value = "", Oi(e["onClick:clear"], D);
      });
    }
    function C(D) {
      var A;
      const M = D.target;
      if (o.value = M.value, (A = e.modelModifiers) != null && A.trim) {
        const E = [M.selectionStart, M.selectionEnd];
        be(() => {
          M.selectionStart = E[0], M.selectionEnd = E[1];
        });
      }
    }
    const V = Y(), x = Y(+e.rows), P = b(() => ["plain", "underlined"].includes(e.variant));
    Ye(() => {
      e.autoGrow || (x.value = +e.rows);
    });
    function S() {
      e.autoGrow && be(() => {
        if (!V.value || !v.value) return;
        const D = getComputedStyle(V.value), M = getComputedStyle(v.value.$el), A = parseFloat(D.getPropertyValue("--v-field-padding-top")) + parseFloat(D.getPropertyValue("--v-input-padding-top")) + parseFloat(D.getPropertyValue("--v-field-padding-bottom")), E = V.value.scrollHeight, F = parseFloat(D.lineHeight), j = Math.max(parseFloat(e.rows) * F + A, parseFloat(M.getPropertyValue("--v-input-control-height"))), X = parseFloat(e.maxRows) * F + A || 1 / 0, N = qe(E ?? 0, j, X);
        x.value = Math.floor((N - A) / F), g.value = J(N);
      });
    }
    mt(S), q(o, S), q(() => e.rows, S), q(() => e.maxRows, S), q(() => e.density, S);
    let I;
    return q(V, (D) => {
      D ? (I = new ResizeObserver(S), I.observe(V.value)) : I == null || I.disconnect();
    }), wt(() => {
      I == null || I.disconnect();
    }), H(() => {
      const D = !!(l.counter || e.counter || e.counterValue), M = !!(D || l.details), [A, E] = pn(t), {
        modelValue: F,
        ...j
      } = rt.filterProps(e), X = ir(e);
      return d(rt, B({
        ref: m,
        modelValue: o.value,
        "onUpdate:modelValue": (N) => o.value = N,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": P.value
        }, e.class],
        style: e.style
      }, A, j, {
        centerAffix: !1,
        focused: i.value
      }), {
        ...l,
        default: (N) => {
          let {
            id: z,
            isDisabled: _,
            isDirty: R,
            isReadonly: U,
            isValid: ae
          } = N;
          return d(ya, B({
            ref: v,
            style: {
              "--v-textarea-control-height": g.value
            },
            onClick: p,
            onMousedown: w,
            "onClick:clear": T,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, X, {
            id: z.value,
            active: y.value || R.value,
            centerAffix: !1,
            dirty: R.value || e.dirty,
            disabled: _.value,
            focused: i.value,
            error: ae.value === !1
          }), {
            ...l,
            default: (re) => {
              let {
                props: {
                  class: Z,
                  ...W
                }
              } = re;
              return d(oe, null, [e.prefix && d("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), Ie(d("textarea", B({
                ref: h,
                class: Z,
                value: o.value,
                onInput: C,
                autofocus: e.autofocus,
                readonly: U.value,
                disabled: _.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: k,
                onBlur: s
              }, W, E), null), [[St("intersect"), {
                handler: f
              }, null, {
                once: !0
              }]]), e.autoGrow && Ie(d("textarea", {
                class: [Z, "v-textarea__sizer"],
                id: `${W.id}-sizer`,
                "onUpdate:modelValue": (ee) => o.value = ee,
                ref: V,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[rv, o.value]]), e.suffix && d("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: M ? (N) => {
          var z;
          return d(oe, null, [(z = l.details) == null ? void 0 : z.call(l, N), D && d(oe, null, [d("span", null, null), d(ao, {
            active: e.persistentCounter || i.value,
            value: c.value,
            max: u.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), Lt({}, m, v, h);
  }
}), fw = $({
  withBackground: Boolean,
  ...Q(),
  ...ye(),
  ...ve()
}, "VThemeProvider"), vw = L()({
  name: "VThemeProvider",
  props: fw(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ce(e);
    return () => {
      var l;
      return e.withBackground ? d(e.tag, {
        class: ["v-theme-provider", a.value, e.class],
        style: e.style
      }, {
        default: () => {
          var o;
          return [(o = t.default) == null ? void 0 : o.call(t)];
        }
      }) : (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), mw = $({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: ue,
  iconColor: String,
  lineColor: String,
  ...Q(),
  ...Fe(),
  ...Qt(),
  ...Je()
}, "VTimelineDivider"), hw = L()({
  name: "VTimelineDivider",
  props: mw(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      sizeClasses: a,
      sizeStyles: l
    } = fa(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: o,
      backgroundColorClasses: i
    } = De(O(e, "dotColor")), {
      roundedClasses: r
    } = ze(e, "v-timeline-divider__dot"), {
      elevationClasses: s
    } = ot(e), {
      backgroundColorClasses: c,
      backgroundColorStyles: u
    } = De(O(e, "lineColor"));
    return H(() => d("div", {
      class: ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class],
      style: e.style
    }, [d("div", {
      class: ["v-timeline-divider__before", c.value],
      style: u.value
    }, null), !e.hideDot && d("div", {
      key: "dot",
      class: ["v-timeline-divider__dot", s.value, r.value, a.value],
      style: l.value
    }, [d("div", {
      class: ["v-timeline-divider__inner-dot", i.value, r.value],
      style: o.value
    }, [t.default ? d(he, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, t.default) : d(we, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), d("div", {
      class: ["v-timeline-divider__after", c.value],
      style: u.value
    }, null)])), {};
  }
}), Yf = $({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: ue,
  iconColor: String,
  lineInset: [Number, String],
  ...Q(),
  ...et(),
  ...Je(),
  ...Fe(),
  ...Qt(),
  ...ve()
}, "VTimelineItem"), gw = L()({
  name: "VTimelineItem",
  props: Yf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = tt(e), l = G(0), o = Y();
    return q(o, (i) => {
      var r;
      i && (l.value = ((r = i.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : r.getBoundingClientRect().width) ?? 0);
    }, {
      flush: "post"
    }), H(() => {
      var i, r;
      return d("div", {
        class: ["v-timeline-item", {
          "v-timeline-item--fill-dot": e.fillDot
        }, e.class],
        style: [{
          "--v-timeline-dot-size": J(l.value),
          "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${J(e.lineInset)})` : J(0)
        }, e.style]
      }, [d("div", {
        class: "v-timeline-item__body",
        style: a.value
      }, [(i = t.default) == null ? void 0 : i.call(t)]), d(hw, {
        ref: o,
        hideDot: e.hideDot,
        icon: e.icon,
        iconColor: e.iconColor,
        size: e.size,
        elevation: e.elevation,
        dotColor: e.dotColor,
        fillDot: e.fillDot,
        rounded: e.rounded
      }, {
        default: t.icon
      }), e.density !== "compact" && d("div", {
        class: "v-timeline-item__opposite"
      }, [!e.hideOpposite && ((r = t.opposite) == null ? void 0 : r.call(t))])]);
    }), {};
  }
}), yw = $({
  align: {
    type: String,
    default: "center",
    validator: (e) => ["center", "start"].includes(e)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (e) => ["auto", "center"].includes(e)
  },
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  ...Hl(Yf({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...Q(),
  ...nt(),
  ...ve(),
  ...ye()
}, "VTimeline"), bw = L()({
  name: "VTimeline",
  props: yw(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ce(e), {
      densityClasses: l
    } = gt(e), {
      rtlClasses: o
    } = Qe();
    He({
      VTimelineDivider: {
        lineColor: O(e, "lineColor")
      },
      VTimelineItem: {
        density: O(e, "density"),
        dotColor: O(e, "dotColor"),
        fillDot: O(e, "fillDot"),
        hideOpposite: O(e, "hideOpposite"),
        iconColor: O(e, "iconColor"),
        lineColor: O(e, "lineColor"),
        lineInset: O(e, "lineInset"),
        size: O(e, "size")
      }
    });
    const i = b(() => {
      const s = e.side ? e.side : e.density !== "default" ? "end" : null;
      return s && `v-timeline--side-${s}`;
    }), r = b(() => {
      const s = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (e.truncateLine) {
        case "both":
          return s;
        case "start":
          return s[0];
        case "end":
          return s[1];
        default:
          return null;
      }
    });
    return H(() => d(e.tag, {
      class: ["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, a.value, l.value, i.value, o.value, e.class],
      style: [{
        "--v-timeline-line-thickness": J(e.lineThickness)
      }, e.style]
    }, t)), {};
  }
}), pw = $({
  ...Q(),
  ...Et({
    variant: "text"
  })
}, "VToolbarItems"), kw = L()({
  name: "VToolbarItems",
  props: pw(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return He({
      VBtn: {
        color: O(e, "color"),
        height: "inherit",
        variant: O(e, "variant")
      }
    }), H(() => {
      var a;
      return d("div", {
        class: ["v-toolbar-items", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Sw = $({
  id: String,
  text: String,
  ...We(sl({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: !1
  }), ["absolute", "persistent"])
}, "VTooltip"), Wf = L()({
  name: "VTooltip",
  props: Sw(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ie(e, "modelValue"), {
      scopeId: l
    } = Gn(), o = lt(), i = b(() => e.id || `v-tooltip-${o}`), r = Y(), s = b(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = b(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), u = b(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), f = b(() => B({
      "aria-describedby": i.value
    }, e.activatorProps));
    return H(() => {
      const m = qt.filterProps(e);
      return d(qt, B({
        ref: r,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: i.value
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (v) => a.value = v,
        transition: u.value,
        absolute: !0,
        location: s.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: f.value,
        _disableGlobalStack: !0
      }, l), {
        activator: t.activator,
        default: function() {
          var y;
          for (var v = arguments.length, g = new Array(v), h = 0; h < v; h++)
            g[h] = arguments[h];
          return ((y = t.default) == null ? void 0 : y.call(t, ...g)) ?? e.text;
        }
      });
    }), Lt({}, r);
  }
}), ww = L()({
  name: "VValidation",
  props: Gc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = qc(e, "validation");
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, a);
    };
  }
}), Cw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VAlert: Wb,
  VAlertTitle: Hc,
  VApp: eb,
  VAppBar: kb,
  VAppBarNavIcon: Hb,
  VAppBarTitle: zb,
  VAutocomplete: v0,
  VAvatar: $t,
  VBadge: h0,
  VBanner: b0,
  VBannerActions: Vd,
  VBannerText: Pd,
  VBottomNavigation: k0,
  VBottomSheet: w0,
  VBreadcrumbs: P0,
  VBreadcrumbsDivider: Id,
  VBreadcrumbsItem: Dd,
  VBtn: Se,
  VBtnGroup: ei,
  VBtnToggle: Pb,
  VCard: B0,
  VCardActions: Md,
  VCardItem: $d,
  VCardSubtitle: Bd,
  VCardText: _d,
  VCardTitle: Ad,
  VCarousel: R0,
  VCarouselItem: z0,
  VCheckbox: ep,
  VCheckboxBtn: ln,
  VChip: ga,
  VChipGroup: op,
  VClassIcon: Yi,
  VCode: j0,
  VCol: b1,
  VColorPicker: Bk,
  VCombobox: _k,
  VComponentIcon: Zo,
  VConfirmEdit: Ek,
  VContainer: m1,
  VCounter: ao,
  VDataIterator: Uk,
  VDataTable: s1,
  VDataTableFooter: Ga,
  VDataTableHeaders: En,
  VDataTableRow: Sr,
  VDataTableRows: Ln,
  VDataTableServer: f1,
  VDataTableVirtual: c1,
  VDatePicker: B1,
  VDatePickerControls: gi,
  VDatePickerHeader: yi,
  VDatePickerMonth: bi,
  VDatePickerMonths: pi,
  VDatePickerYears: ki,
  VDefaultsProvider: he,
  VDialog: si,
  VDialogBottomTransition: lb,
  VDialogTopTransition: ob,
  VDialogTransition: Gl,
  VDivider: rl,
  VEmptyState: $1,
  VExpandTransition: ql,
  VExpandXTransition: Gi,
  VExpansionPanel: _1,
  VExpansionPanelText: Si,
  VExpansionPanelTitle: wi,
  VExpansionPanels: L1,
  VFab: N1,
  VFabTransition: ab,
  VFadeTransition: za,
  VField: ya,
  VFieldLabel: Ca,
  VFileInput: H1,
  VFooter: j1,
  VForm: W1,
  VHover: K1,
  VIcon: we,
  VImg: an,
  VInfiniteScroll: q1,
  VInput: rt,
  VItem: J1,
  VItemGroup: Z1,
  VKbd: Q1,
  VLabel: ha,
  VLayout: tS,
  VLayoutItem: aS,
  VLazy: oS,
  VLigatureIcon: Wy,
  VList: no,
  VListGroup: li,
  VListImg: Ip,
  VListItem: on,
  VListItemAction: Mp,
  VListItemMedia: Ap,
  VListItemSubtitle: rd,
  VListItemTitle: sd,
  VListSubheader: ud,
  VLocaleProvider: rS,
  VMain: uS,
  VMenu: ua,
  VMessages: Uc,
  VNavigationDrawer: bS,
  VNoSsr: pS,
  VOtpInput: SS,
  VOverlay: qt,
  VPagination: mi,
  VParallax: xS,
  VProgressCircular: sa,
  VProgressLinear: Zl,
  VRadio: PS,
  VRadioGroup: IS,
  VRangeSlider: MS,
  VRating: AS,
  VResponsive: Jo,
  VRow: V1,
  VScaleTransition: Ui,
  VScrollXReverseTransition: rb,
  VScrollXTransition: ib,
  VScrollYReverseTransition: ub,
  VScrollYTransition: sb,
  VSelect: ur,
  VSelectionControl: yn,
  VSelectionControlGroup: jc,
  VSheet: On,
  VSkeletonLoader: ES,
  VSlideGroup: Ua,
  VSlideGroupItem: LS,
  VSlideXReverseTransition: db,
  VSlideXTransition: cb,
  VSlideYReverseTransition: fb,
  VSlideYTransition: Ki,
  VSlider: vi,
  VSnackbar: RS,
  VSpacer: wf,
  VSparkline: YS,
  VSpeedDial: US,
  VStepper: QS,
  VStepperActions: Ef,
  VStepperHeader: Lf,
  VStepperItem: Ff,
  VStepperWindow: Nf,
  VStepperWindowItem: Rf,
  VSvgIcon: ji,
  VSwitch: tw,
  VSystemBar: aw,
  VTab: Hf,
  VTable: Fn,
  VTabs: uw,
  VTabsWindow: zf,
  VTabsWindowItem: jf,
  VTextField: An,
  VTextarea: dw,
  VThemeProvider: vw,
  VTimeline: bw,
  VTimelineItem: gw,
  VToolbar: Qo,
  VToolbarItems: kw,
  VToolbarTitle: Wi,
  VTooltip: Wf,
  VValidation: ww,
  VVirtualScroll: oo,
  VWindow: $n,
  VWindowItem: _n
}, Symbol.toStringTag, { value: "Module" }));
function xw(e, n) {
  const t = n.modifiers || {}, a = n.value, {
    once: l,
    immediate: o,
    ...i
  } = t, r = !Object.keys(i).length, {
    handler: s,
    options: c
  } = typeof a == "object" ? a : {
    handler: a,
    options: {
      attributes: (i == null ? void 0 : i.attr) ?? r,
      characterData: (i == null ? void 0 : i.char) ?? r,
      childList: (i == null ? void 0 : i.child) ?? r,
      subtree: (i == null ? void 0 : i.sub) ?? r
    }
  }, u = new MutationObserver(function() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], m = arguments.length > 1 ? arguments[1] : void 0;
    s == null || s(f, m), l && Uf(e, n);
  });
  o && (s == null || s([], u)), e._mutate = Object(e._mutate), e._mutate[n.instance.$.uid] = {
    observer: u
  }, u.observe(e, c);
}
function Uf(e, n) {
  var t;
  (t = e._mutate) != null && t[n.instance.$.uid] && (e._mutate[n.instance.$.uid].observer.disconnect(), delete e._mutate[n.instance.$.uid]);
}
const Vw = {
  mounted: xw,
  unmounted: Uf
};
function Pw(e, n) {
  var l, o;
  const t = n.value, a = {
    passive: !((l = n.modifiers) != null && l.active)
  };
  window.addEventListener("resize", t, a), e._onResize = Object(e._onResize), e._onResize[n.instance.$.uid] = {
    handler: t,
    options: a
  }, (o = n.modifiers) != null && o.quiet || t();
}
function Tw(e, n) {
  var l;
  if (!((l = e._onResize) != null && l[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a
  } = e._onResize[n.instance.$.uid];
  window.removeEventListener("resize", t, a), delete e._onResize[n.instance.$.uid];
}
const Iw = {
  mounted: Pw,
  unmounted: Tw
};
function Kf(e, n) {
  const {
    self: t = !1
  } = n.modifiers ?? {}, a = n.value, l = typeof a == "object" && a.options || {
    passive: !0
  }, o = typeof a == "function" || "handleEvent" in a ? a : a.handler, i = t ? e : n.arg ? document.querySelector(n.arg) : window;
  i && (i.addEventListener("scroll", o, l), e._onScroll = Object(e._onScroll), e._onScroll[n.instance.$.uid] = {
    handler: o,
    options: l,
    // Don't reference self
    target: t ? void 0 : i
  });
}
function Gf(e, n) {
  var o;
  if (!((o = e._onScroll) != null && o[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a,
    target: l = e
  } = e._onScroll[n.instance.$.uid];
  l.removeEventListener("scroll", t, a), delete e._onScroll[n.instance.$.uid];
}
function Dw(e, n) {
  n.value !== n.oldValue && (Gf(e, n), Kf(e, n));
}
const Mw = {
  mounted: Kf,
  unmounted: Gf,
  updated: Dw
};
function Bw(e, n) {
  const t = typeof e == "string" ? Pt(e) : e, a = Aw(t, n);
  return {
    mounted: a,
    updated: a,
    unmounted(l) {
      su(null, l);
    }
  };
}
function Aw(e, n) {
  return function(t, a, l) {
    var f, m, v;
    const o = typeof n == "function" ? n(a) : n, i = ((f = a.value) == null ? void 0 : f.text) ?? a.value ?? (o == null ? void 0 : o.text), r = La(a.value) ? a.value : {}, s = () => i ?? t.innerHTML, c = (l.ctx === a.instance.$ ? (m = $w(l, a.instance.$)) == null ? void 0 : m.provides : (v = l.ctx) == null ? void 0 : v.provides) ?? a.instance.$.provides, u = bn(e, B(o, r), s);
    u.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, {
      provides: c
    }), su(u, t);
  };
}
function $w(e, n) {
  const t = /* @__PURE__ */ new Set(), a = (o) => {
    var i, r;
    for (const s of o) {
      if (!s) continue;
      if (s === e)
        return !0;
      t.add(s);
      let c;
      if (s.suspense ? c = a([s.ssContent]) : Array.isArray(s.children) ? c = a(s.children) : (i = s.component) != null && i.vnode && (c = a([(r = s.component) == null ? void 0 : r.subTree])), c)
        return c;
      t.delete(s);
    }
    return !1;
  };
  if (!a([n.subTree]))
    throw new Error("Could not find original vnode");
  const l = Array.from(t).reverse();
  for (const o of l)
    if (o.component)
      return o.component;
  return n;
}
const _w = Bw(Wf, (e) => {
  var n;
  return {
    activator: "parent",
    location: ((n = e.arg) == null ? void 0 : n.replace("-", " ")) ?? "top",
    text: typeof e.value == "boolean" ? void 0 : e.value
  };
}), Ow = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: kd,
  Intersect: tl,
  Mutate: Vw,
  Resize: Iw,
  Ripple: sn,
  Scroll: Mw,
  Tooltip: _w,
  Touch: cr
}, Symbol.toStringTag, { value: "Module" })), Ew = wc({
  components: Cw,
  directives: Ow,
  theme: {
    defaultTheme: "dark",
    dark: {
      colors: {
        primary: "#00FF80"
      }
    }
  },
  defaults: {
    VBtn: { variant: "outlined" }
    //not working
  }
}), Fw = {
  install: (e, n) => {
    e.use(Ew), e.use(am), e.component("PVCalendar", Uh), e.component("VXCalendar", Kh), e.component("Vormix", Jh), e.component("VormixSK", Lu);
  }
};
export {
  Kh as VXCalendar,
  Jh as Vormix,
  Lu as VormixSK,
  Fw as default
};
