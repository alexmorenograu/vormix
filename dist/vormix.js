import { reactive as gt, ref as Y, readonly as ll, getCurrentInstance as fs, onMounted as tt, nextTick as Ce, watch as q, mergeProps as D, openBlock as Z, createElementBlock as oe, renderSlot as Be, createTextVNode as at, toDisplayString as $e, createElementVNode as we, resolveComponent as Mt, resolveDirective as it, withDirectives as ge, normalizeClass as At, createBlock as je, createCommentVNode as Ie, Teleport as vs, withCtx as $t, resolveDynamicComponent as ut, createVNode as c, Transition as Ht, Fragment as re, renderList as Qt, vShow as xt, normalizeProps as Rl, guardReactiveProps as Nl, withKeys as Le, mergeModels as Ki, useModel as Gi, computed as b, onScopeDispose as ct, effectScope as qi, watchEffect as Ze, toRefs as il, capitalize as jn, isVNode as Bd, Comment as Ed, unref as mt, warn as rl, inject as ke, shallowRef as G, provide as Ee, defineComponent as Od, camelize as ms, h as Cn, toRaw as en, onBeforeUnmount as dt, onDeactivated as $d, onActivated as _d, TransitionGroup as Ld, isRef as xa, toRef as _, onBeforeMount as Xi, Text as Fd, cloneVNode as Rd, onUnmounted as Nd, onBeforeUpdate as Hd, withModifiers as Wr, vModelText as jd } from "vue";
function Hl(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Zi(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var a = 0, l = function() {
      };
      return { s: l, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: l };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, r = !1, o;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var u = n.next();
    return i = u.done, u;
  }, e: function(u) {
    r = !0, o = u;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (r)
        throw o;
    }
  } };
}
function zd(e) {
  return Ud(e) || Wd(e) || Zi(e) || Yd();
}
function Yd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wd(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ud(e) {
  if (Array.isArray(e))
    return li(e);
}
function ea(e) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e);
}
function jl(e, t) {
  return qd(e) || Gd(e, t) || Zi(e, t) || Kd();
}
function Kd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zi(e, t) {
  if (e) {
    if (typeof e == "string")
      return li(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return li(e, t);
  }
}
function li(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Gd(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a, l, i, r, o = [], s = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        s = !1;
      } else
        for (; !(s = (a = i.call(n)).done) && (o.push(a.value), o.length !== t); s = !0)
          ;
    } catch (d) {
      u = !0, l = d;
    } finally {
      try {
        if (!s && n.return != null && (r = n.return(), Object(r) !== r))
          return;
      } finally {
        if (u)
          throw l;
      }
    }
    return o;
  }
}
function qd(e) {
  if (Array.isArray(e))
    return e;
}
var se = {
  innerWidth: function(t) {
    if (t) {
      var n = t.offsetWidth, a = getComputedStyle(t);
      return n += parseFloat(a.paddingLeft) + parseFloat(a.paddingRight), n;
    }
    return 0;
  },
  width: function(t) {
    if (t) {
      var n = t.offsetWidth, a = getComputedStyle(t);
      return n -= parseFloat(a.paddingLeft) + parseFloat(a.paddingRight), n;
    }
    return 0;
  },
  getWindowScrollTop: function() {
    var t = document.documentElement;
    return (window.pageYOffset || t.scrollTop) - (t.clientTop || 0);
  },
  getWindowScrollLeft: function() {
    var t = document.documentElement;
    return (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0);
  },
  getOuterWidth: function(t, n) {
    if (t) {
      var a = t.offsetWidth;
      if (n) {
        var l = getComputedStyle(t);
        a += parseFloat(l.marginLeft) + parseFloat(l.marginRight);
      }
      return a;
    }
    return 0;
  },
  getOuterHeight: function(t, n) {
    if (t) {
      var a = t.offsetHeight;
      if (n) {
        var l = getComputedStyle(t);
        a += parseFloat(l.marginTop) + parseFloat(l.marginBottom);
      }
      return a;
    }
    return 0;
  },
  getClientHeight: function(t, n) {
    if (t) {
      var a = t.clientHeight;
      if (n) {
        var l = getComputedStyle(t);
        a += parseFloat(l.marginTop) + parseFloat(l.marginBottom);
      }
      return a;
    }
    return 0;
  },
  getViewport: function() {
    var t = window, n = document, a = n.documentElement, l = n.getElementsByTagName("body")[0], i = t.innerWidth || a.clientWidth || l.clientWidth, r = t.innerHeight || a.clientHeight || l.clientHeight;
    return {
      width: i,
      height: r
    };
  },
  getOffset: function(t) {
    if (t) {
      var n = t.getBoundingClientRect();
      return {
        top: n.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: n.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
    return {
      top: "auto",
      left: "auto"
    };
  },
  index: function(t) {
    if (t)
      for (var n, a = (n = this.getParentNode(t)) === null || n === void 0 ? void 0 : n.childNodes, l = 0, i = 0; i < a.length; i++) {
        if (a[i] === t)
          return l;
        a[i].nodeType === 1 && l++;
      }
    return -1;
  },
  addMultipleClasses: function(t, n) {
    var a = this;
    t && n && [n].flat().filter(Boolean).forEach(function(l) {
      return l.split(" ").forEach(function(i) {
        return a.addClass(t, i);
      });
    });
  },
  removeMultipleClasses: function(t, n) {
    var a = this;
    t && n && [n].flat().filter(Boolean).forEach(function(l) {
      return l.split(" ").forEach(function(i) {
        return a.removeClass(t, i);
      });
    });
  },
  addClass: function(t, n) {
    t && n && !this.hasClass(t, n) && (t.classList ? t.classList.add(n) : t.className += " " + n);
  },
  removeClass: function(t, n) {
    t && n && (t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " "));
  },
  hasClass: function(t, n) {
    return t ? t.classList ? t.classList.contains(n) : new RegExp("(^| )" + n + "( |$)", "gi").test(t.className) : !1;
  },
  addStyles: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    t && Object.entries(n).forEach(function(a) {
      var l = jl(a, 2), i = l[0], r = l[1];
      return t.style[i] = r;
    });
  },
  find: function(t, n) {
    return this.isElement(t) ? t.querySelectorAll(n) : [];
  },
  findSingle: function(t, n) {
    return this.isElement(t) ? t.querySelector(n) : null;
  },
  createElement: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t) {
      var a = document.createElement(t);
      this.setAttributes(a, n);
      for (var l = arguments.length, i = new Array(l > 2 ? l - 2 : 0), r = 2; r < l; r++)
        i[r - 2] = arguments[r];
      return a.append.apply(a, i), a;
    }
  },
  setAttribute: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 ? arguments[2] : void 0;
    this.isElement(t) && a !== null && a !== void 0 && t.setAttribute(n, a);
  },
  setAttributes: function(t) {
    var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.isElement(t)) {
      var l = function i(r, o) {
        var s, u, d = t != null && (s = t.$attrs) !== null && s !== void 0 && s[r] ? [t == null || (u = t.$attrs) === null || u === void 0 ? void 0 : u[r]] : [];
        return [o].flat().reduce(function(v, f) {
          if (f != null) {
            var m = ea(f);
            if (m === "string" || m === "number")
              v.push(f);
            else if (m === "object") {
              var g = Array.isArray(f) ? i(r, f) : Object.entries(f).map(function(h) {
                var y = jl(h, 2), p = y[0], S = y[1];
                return r === "style" && (S || S === 0) ? "".concat(p.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(S) : S ? p : void 0;
              });
              v = g.length ? v.concat(g.filter(function(h) {
                return !!h;
              })) : v;
            }
          }
          return v;
        }, d);
      };
      Object.entries(a).forEach(function(i) {
        var r = jl(i, 2), o = r[0], s = r[1];
        if (s != null) {
          var u = o.match(/^on(.+)/);
          u ? t.addEventListener(u[1].toLowerCase(), s) : o === "p-bind" ? n.setAttributes(t, s) : (s = o === "class" ? zd(new Set(l("class", s))).join(" ").trim() : o === "style" ? l("style", s).join(";").trim() : s, (t.$attrs = t.$attrs || {}) && (t.$attrs[o] = s), t.setAttribute(o, s));
        }
      });
    }
  },
  getAttribute: function(t, n) {
    if (this.isElement(t)) {
      var a = t.getAttribute(n);
      return isNaN(a) ? a === "true" || a === "false" ? a === "true" : a : +a;
    }
  },
  isAttributeEquals: function(t, n, a) {
    return this.isElement(t) ? this.getAttribute(t, n) === a : !1;
  },
  isAttributeNotEquals: function(t, n, a) {
    return !this.isAttributeEquals(t, n, a);
  },
  getHeight: function(t) {
    if (t) {
      var n = t.offsetHeight, a = getComputedStyle(t);
      return n -= parseFloat(a.paddingTop) + parseFloat(a.paddingBottom) + parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), n;
    }
    return 0;
  },
  getWidth: function(t) {
    if (t) {
      var n = t.offsetWidth, a = getComputedStyle(t);
      return n -= parseFloat(a.paddingLeft) + parseFloat(a.paddingRight) + parseFloat(a.borderLeftWidth) + parseFloat(a.borderRightWidth), n;
    }
    return 0;
  },
  absolutePosition: function(t, n) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (t) {
      var l = t.offsetParent ? {
        width: t.offsetWidth,
        height: t.offsetHeight
      } : this.getHiddenElementDimensions(t), i = l.height, r = l.width, o = n.offsetHeight, s = n.offsetWidth, u = n.getBoundingClientRect(), d = this.getWindowScrollTop(), v = this.getWindowScrollLeft(), f = this.getViewport(), m, g, h = "top";
      u.top + o + i > f.height ? (m = u.top + d - i, h = "bottom", m < 0 && (m = d)) : m = o + u.top + d, u.left + r > f.width ? g = Math.max(0, u.left + v + s - r) : g = u.left + v, t.style.top = m + "px", t.style.left = g + "px", t.style.transformOrigin = h, a && (t.style.marginTop = h === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
    }
  },
  relativePosition: function(t, n) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (t) {
      var l = t.offsetParent ? {
        width: t.offsetWidth,
        height: t.offsetHeight
      } : this.getHiddenElementDimensions(t), i = n.offsetHeight, r = n.getBoundingClientRect(), o = this.getViewport(), s, u, d = "top";
      r.top + i + l.height > o.height ? (s = -1 * l.height, d = "bottom", r.top + s < 0 && (s = -1 * r.top)) : s = i, l.width > o.width ? u = r.left * -1 : r.left + l.width > o.width ? u = (r.left + l.width - o.width) * -1 : u = 0, t.style.top = s + "px", t.style.left = u + "px", t.style.transformOrigin = d, a && (t.style.marginTop = d === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
    }
  },
  nestedPosition: function(t, n) {
    if (t) {
      var a = t.parentElement, l = this.getOffset(a), i = this.getViewport(), r = t.offsetParent ? t.offsetWidth : this.getHiddenElementOuterWidth(t), o = this.getOuterWidth(a.children[0]), s;
      parseInt(l.left, 10) + o + r > i.width - this.calculateScrollbarWidth() ? parseInt(l.left, 10) < r ? n % 2 === 1 ? s = parseInt(l.left, 10) ? "-" + parseInt(l.left, 10) + "px" : "100%" : n % 2 === 0 && (s = i.width - r - this.calculateScrollbarWidth() + "px") : s = "-100%" : s = "100%", t.style.top = "0px", t.style.left = s;
    }
  },
  getParentNode: function(t) {
    var n = t == null ? void 0 : t.parentNode;
    return n && n instanceof ShadowRoot && n.host && (n = n.host), n;
  },
  getParents: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = this.getParentNode(t);
    return a === null ? n : this.getParents(a, n.concat([a]));
  },
  getScrollableParents: function(t) {
    var n = [];
    if (t) {
      var a = this.getParents(t), l = /(auto|scroll)/, i = function(y) {
        try {
          var p = window.getComputedStyle(y, null);
          return l.test(p.getPropertyValue("overflow")) || l.test(p.getPropertyValue("overflowX")) || l.test(p.getPropertyValue("overflowY"));
        } catch {
          return !1;
        }
      }, r = Hl(a), o;
      try {
        for (r.s(); !(o = r.n()).done; ) {
          var s = o.value, u = s.nodeType === 1 && s.dataset.scrollselectors;
          if (u) {
            var d = u.split(","), v = Hl(d), f;
            try {
              for (v.s(); !(f = v.n()).done; ) {
                var m = f.value, g = this.findSingle(s, m);
                g && i(g) && n.push(g);
              }
            } catch (h) {
              v.e(h);
            } finally {
              v.f();
            }
          }
          s.nodeType !== 9 && i(s) && n.push(s);
        }
      } catch (h) {
        r.e(h);
      } finally {
        r.f();
      }
    }
    return n;
  },
  getHiddenElementOuterHeight: function(t) {
    if (t) {
      t.style.visibility = "hidden", t.style.display = "block";
      var n = t.offsetHeight;
      return t.style.display = "none", t.style.visibility = "visible", n;
    }
    return 0;
  },
  getHiddenElementOuterWidth: function(t) {
    if (t) {
      t.style.visibility = "hidden", t.style.display = "block";
      var n = t.offsetWidth;
      return t.style.display = "none", t.style.visibility = "visible", n;
    }
    return 0;
  },
  getHiddenElementDimensions: function(t) {
    if (t) {
      var n = {};
      return t.style.visibility = "hidden", t.style.display = "block", n.width = t.offsetWidth, n.height = t.offsetHeight, t.style.display = "none", t.style.visibility = "visible", n;
    }
    return 0;
  },
  fadeIn: function(t, n) {
    if (t) {
      t.style.opacity = 0;
      var a = +/* @__PURE__ */ new Date(), l = 0, i = function r() {
        l = +t.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - a) / n, t.style.opacity = l, a = +/* @__PURE__ */ new Date(), +l < 1 && (window.requestAnimationFrame && requestAnimationFrame(r) || setTimeout(r, 16));
      };
      i();
    }
  },
  fadeOut: function(t, n) {
    if (t)
      var a = 1, l = 50, i = n, r = l / i, o = setInterval(function() {
        a -= r, a <= 0 && (a = 0, clearInterval(o)), t.style.opacity = a;
      }, l);
  },
  getUserAgent: function() {
    return navigator.userAgent;
  },
  appendChild: function(t, n) {
    if (this.isElement(n))
      n.appendChild(t);
    else if (n.el && n.elElement)
      n.elElement.appendChild(t);
    else
      throw new Error("Cannot append " + n + " to " + t);
  },
  isElement: function(t) {
    return (typeof HTMLElement > "u" ? "undefined" : ea(HTMLElement)) === "object" ? t instanceof HTMLElement : t && ea(t) === "object" && t !== null && t.nodeType === 1 && typeof t.nodeName == "string";
  },
  scrollInView: function(t, n) {
    var a = getComputedStyle(t).getPropertyValue("borderTopWidth"), l = a ? parseFloat(a) : 0, i = getComputedStyle(t).getPropertyValue("paddingTop"), r = i ? parseFloat(i) : 0, o = t.getBoundingClientRect(), s = n.getBoundingClientRect(), u = s.top + document.body.scrollTop - (o.top + document.body.scrollTop) - l - r, d = t.scrollTop, v = t.clientHeight, f = this.getOuterHeight(n);
    u < 0 ? t.scrollTop = d + u : u + f > v && (t.scrollTop = d + u - v + f);
  },
  clearSelection: function() {
    if (window.getSelection)
      window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0 && window.getSelection().removeAllRanges();
    else if (document.selection && document.selection.empty)
      try {
        document.selection.empty();
      } catch {
      }
  },
  getSelection: function() {
    return window.getSelection ? window.getSelection().toString() : document.getSelection ? document.getSelection().toString() : document.selection ? document.selection.createRange().text : null;
  },
  calculateScrollbarWidth: function() {
    if (this.calculatedScrollbarWidth != null)
      return this.calculatedScrollbarWidth;
    var t = document.createElement("div");
    this.addStyles(t, {
      width: "100px",
      height: "100px",
      overflow: "scroll",
      position: "absolute",
      top: "-9999px"
    }), document.body.appendChild(t);
    var n = t.offsetWidth - t.clientWidth;
    return document.body.removeChild(t), this.calculatedScrollbarWidth = n, n;
  },
  calculateBodyScrollbarWidth: function() {
    return window.innerWidth - document.documentElement.offsetWidth;
  },
  getBrowser: function() {
    if (!this.browser) {
      var t = this.resolveUserAgent();
      this.browser = {}, t.browser && (this.browser[t.browser] = !0, this.browser.version = t.version), this.browser.chrome ? this.browser.webkit = !0 : this.browser.webkit && (this.browser.safari = !0);
    }
    return this.browser;
  },
  resolveUserAgent: function() {
    var t = navigator.userAgent.toLowerCase(), n = /(chrome)[ ]([\w.]+)/.exec(t) || /(webkit)[ ]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
    return {
      browser: n[1] || "",
      version: n[2] || "0"
    };
  },
  isVisible: function(t) {
    return t && t.offsetParent != null;
  },
  invokeElementMethod: function(t, n, a) {
    t[n].apply(t, a);
  },
  isExist: function(t) {
    return !!(t !== null && typeof t < "u" && t.nodeName && this.getParentNode(t));
  },
  isClient: function() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  },
  focus: function(t, n) {
    t && document.activeElement !== t && t.focus(n);
  },
  isFocusableElement: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.isElement(t) ? t.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n, `,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)) : !1;
  },
  getFocusableElements: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = this.find(t, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n, `,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n, `,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)), l = [], i = Hl(a), r;
    try {
      for (i.s(); !(r = i.n()).done; ) {
        var o = r.value;
        getComputedStyle(o).display != "none" && getComputedStyle(o).visibility != "hidden" && l.push(o);
      }
    } catch (s) {
      i.e(s);
    } finally {
      i.f();
    }
    return l;
  },
  getFirstFocusableElement: function(t, n) {
    var a = this.getFocusableElements(t, n);
    return a.length > 0 ? a[0] : null;
  },
  getLastFocusableElement: function(t, n) {
    var a = this.getFocusableElements(t, n);
    return a.length > 0 ? a[a.length - 1] : null;
  },
  getNextFocusableElement: function(t, n, a) {
    var l = this.getFocusableElements(t, a), i = l.length > 0 ? l.findIndex(function(o) {
      return o === n;
    }) : -1, r = i > -1 && l.length >= i + 1 ? i + 1 : -1;
    return r > -1 ? l[r] : null;
  },
  getPreviousElementSibling: function(t, n) {
    for (var a = t.previousElementSibling; a; ) {
      if (a.matches(n))
        return a;
      a = a.previousElementSibling;
    }
    return null;
  },
  getNextElementSibling: function(t, n) {
    for (var a = t.nextElementSibling; a; ) {
      if (a.matches(n))
        return a;
      a = a.nextElementSibling;
    }
    return null;
  },
  isClickable: function(t) {
    if (t) {
      var n = t.nodeName, a = t.parentElement && t.parentElement.nodeName;
      return n === "INPUT" || n === "TEXTAREA" || n === "BUTTON" || n === "A" || a === "INPUT" || a === "TEXTAREA" || a === "BUTTON" || a === "A" || !!t.closest(".p-button, .p-checkbox, .p-radiobutton");
    }
    return !1;
  },
  applyStyle: function(t, n) {
    if (typeof n == "string")
      t.style.cssText = n;
    else
      for (var a in n)
        t.style[a] = n[a];
  },
  isIOS: function() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  },
  isAndroid: function() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice: function() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  },
  hasCSSAnimation: function(t) {
    if (t) {
      var n = getComputedStyle(t), a = parseFloat(n.getPropertyValue("animation-duration") || "0");
      return a > 0;
    }
    return !1;
  },
  hasCSSTransition: function(t) {
    if (t) {
      var n = getComputedStyle(t), a = parseFloat(n.getPropertyValue("transition-duration") || "0");
      return a > 0;
    }
    return !1;
  },
  exportCSV: function(t, n) {
    var a = new Blob([t], {
      type: "application/csv;charset=utf-8;"
    });
    if (window.navigator.msSaveOrOpenBlob)
      navigator.msSaveOrOpenBlob(a, n + ".csv");
    else {
      var l = document.createElement("a");
      l.download !== void 0 ? (l.setAttribute("href", URL.createObjectURL(a)), l.setAttribute("download", n + ".csv"), l.style.display = "none", document.body.appendChild(l), l.click(), document.body.removeChild(l)) : (t = "data:text/csv;charset=utf-8," + t, window.open(encodeURI(t)));
    }
  },
  blockBodyScroll: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden";
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px"), this.addClass(document.body, t);
  },
  unblockBodyScroll: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "p-overflow-hidden";
    document.body.style.removeProperty("--scrollbar-width"), this.removeClass(document.body, t);
  }
};
function aa(e) {
  "@babel/helpers - typeof";
  return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, aa(e);
}
function Xd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ur(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Jd(a.key), a);
  }
}
function Zd(e, t, n) {
  return t && Ur(e.prototype, t), n && Ur(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Jd(e) {
  var t = Qd(e, "string");
  return aa(t) == "symbol" ? t : String(t);
}
function Qd(e, t) {
  if (aa(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (aa(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ef = /* @__PURE__ */ function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    Xd(this, e), this.element = t, this.listener = n;
  }
  return Zd(e, [{
    key: "bindScrollListener",
    value: function() {
      this.scrollableParents = se.getScrollableParents(this.element);
      for (var n = 0; n < this.scrollableParents.length; n++)
        this.scrollableParents[n].addEventListener("scroll", this.listener);
    }
  }, {
    key: "unbindScrollListener",
    value: function() {
      if (this.scrollableParents)
        for (var n = 0; n < this.scrollableParents.length; n++)
          this.scrollableParents[n].removeEventListener("scroll", this.listener);
    }
  }, {
    key: "destroy",
    value: function() {
      this.unbindScrollListener(), this.element = null, this.listener = null, this.scrollableParents = null;
    }
  }]), e;
}();
function tf() {
  var e = /* @__PURE__ */ new Map();
  return {
    on: function(n, a) {
      var l = e.get(n);
      l ? l.push(a) : l = [a], e.set(n, l);
    },
    off: function(n, a) {
      var l = e.get(n);
      l && l.splice(l.indexOf(a) >>> 0, 1);
    },
    emit: function(n, a) {
      var l = e.get(n);
      l && l.slice().map(function(i) {
        i(a);
      });
    }
  };
}
function Kr(e, t) {
  return lf(e) || af(e, t) || Ji(e, t) || nf();
}
function nf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function af(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a, l, i, r, o = [], s = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        s = !1;
      } else
        for (; !(s = (a = i.call(n)).done) && (o.push(a.value), o.length !== t); s = !0)
          ;
    } catch (d) {
      u = !0, l = d;
    } finally {
      try {
        if (!s && n.return != null && (r = n.return(), Object(r) !== r))
          return;
      } finally {
        if (u)
          throw l;
      }
    }
    return o;
  }
}
function lf(e) {
  if (Array.isArray(e))
    return e;
}
function Gr(e) {
  return sf(e) || of(e) || Ji(e) || rf();
}
function rf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function of(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function sf(e) {
  if (Array.isArray(e))
    return ii(e);
}
function zl(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Ji(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var a = 0, l = function() {
      };
      return { s: l, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: l };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, r = !1, o;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var u = n.next();
    return i = u.done, u;
  }, e: function(u) {
    r = !0, o = u;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (r)
        throw o;
    }
  } };
}
function Ji(e, t) {
  if (e) {
    if (typeof e == "string")
      return ii(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ii(e, t);
  }
}
function ii(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
}
var be = {
  equals: function(t, n, a) {
    return a ? this.resolveFieldData(t, a) === this.resolveFieldData(n, a) : this.deepEquals(t, n);
  },
  deepEquals: function(t, n) {
    if (t === n)
      return !0;
    if (t && n && ta(t) == "object" && ta(n) == "object") {
      var a = Array.isArray(t), l = Array.isArray(n), i, r, o;
      if (a && l) {
        if (r = t.length, r != n.length)
          return !1;
        for (i = r; i-- !== 0; )
          if (!this.deepEquals(t[i], n[i]))
            return !1;
        return !0;
      }
      if (a != l)
        return !1;
      var s = t instanceof Date, u = n instanceof Date;
      if (s != u)
        return !1;
      if (s && u)
        return t.getTime() == n.getTime();
      var d = t instanceof RegExp, v = n instanceof RegExp;
      if (d != v)
        return !1;
      if (d && v)
        return t.toString() == n.toString();
      var f = Object.keys(t);
      if (r = f.length, r !== Object.keys(n).length)
        return !1;
      for (i = r; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, f[i]))
          return !1;
      for (i = r; i-- !== 0; )
        if (o = f[i], !this.deepEquals(t[o], n[o]))
          return !1;
      return !0;
    }
    return t !== t && n !== n;
  },
  resolveFieldData: function(t, n) {
    if (!t || !n)
      return null;
    try {
      var a = t[n];
      if (this.isNotEmpty(a))
        return a;
    } catch {
    }
    if (Object.keys(t).length) {
      if (this.isFunction(n))
        return n(t);
      if (n.indexOf(".") === -1)
        return t[n];
      for (var l = n.split("."), i = t, r = 0, o = l.length; r < o; ++r) {
        if (i == null)
          return null;
        i = i[l[r]];
      }
      return i;
    }
    return null;
  },
  getItemValue: function(t) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      a[l - 1] = arguments[l];
    return this.isFunction(t) ? t.apply(void 0, a) : t;
  },
  filter: function(t, n, a) {
    var l = [];
    if (t) {
      var i = zl(t), r;
      try {
        for (i.s(); !(r = i.n()).done; ) {
          var o = r.value, s = zl(n), u;
          try {
            for (s.s(); !(u = s.n()).done; ) {
              var d = u.value;
              if (String(this.resolveFieldData(o, d)).toLowerCase().indexOf(a.toLowerCase()) > -1) {
                l.push(o);
                break;
              }
            }
          } catch (v) {
            s.e(v);
          } finally {
            s.f();
          }
        }
      } catch (v) {
        i.e(v);
      } finally {
        i.f();
      }
    }
    return l;
  },
  reorderArray: function(t, n, a) {
    t && n !== a && (a >= t.length && (a %= t.length, n %= t.length), t.splice(a, 0, t.splice(n, 1)[0]));
  },
  findIndexInList: function(t, n) {
    var a = -1;
    if (n) {
      for (var l = 0; l < n.length; l++)
        if (n[l] === t) {
          a = l;
          break;
        }
    }
    return a;
  },
  contains: function(t, n) {
    if (t != null && n && n.length) {
      var a = zl(n), l;
      try {
        for (a.s(); !(l = a.n()).done; ) {
          var i = l.value;
          if (this.equals(t, i))
            return !0;
        }
      } catch (r) {
        a.e(r);
      } finally {
        a.f();
      }
    }
    return !1;
  },
  insertIntoOrderedArray: function(t, n, a, l) {
    if (a.length > 0) {
      for (var i = !1, r = 0; r < a.length; r++) {
        var o = this.findIndexInList(a[r], l);
        if (o > n) {
          a.splice(r, 0, t), i = !0;
          break;
        }
      }
      i || a.push(t);
    } else
      a.push(t);
  },
  removeAccents: function(t) {
    return t && t.search(/[\xC0-\xFF]/g) > -1 && (t = t.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y")), t;
  },
  getVNodeProp: function(t, n) {
    if (t) {
      var a = t.props;
      if (a) {
        var l = n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), i = Object.prototype.hasOwnProperty.call(a, l) ? l : n;
        return t.type.extends.props[n].type === Boolean && a[i] === "" ? !0 : a[i];
      }
    }
    return null;
  },
  toFlatCase: function(t) {
    return this.isString(t) ? t.replace(/(-|_)/g, "").toLowerCase() : t;
  },
  toKebabCase: function(t) {
    return this.isString(t) ? t.replace(/(_)/g, "-").replace(/[A-Z]/g, function(n, a) {
      return a === 0 ? n : "-" + n.toLowerCase();
    }).toLowerCase() : t;
  },
  toCapitalCase: function(t) {
    return this.isString(t, {
      empty: !1
    }) ? t[0].toUpperCase() + t.slice(1) : t;
  },
  isEmpty: function(t) {
    return t == null || t === "" || Array.isArray(t) && t.length === 0 || !(t instanceof Date) && ta(t) === "object" && Object.keys(t).length === 0;
  },
  isNotEmpty: function(t) {
    return !this.isEmpty(t);
  },
  isFunction: function(t) {
    return !!(t && t.constructor && t.call && t.apply);
  },
  isObject: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return t instanceof Object && t.constructor === Object && (n || Object.keys(t).length !== 0);
  },
  isDate: function(t) {
    return t instanceof Date && t.constructor === Date;
  },
  isArray: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return Array.isArray(t) && (n || t.length !== 0);
  },
  isString: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return typeof t == "string" && (n || t !== "");
  },
  isPrintableCharacter: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return this.isNotEmpty(t) && t.length === 1 && t.match(/\S| /);
  },
  /**
   * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlast
   */
  findLast: function(t, n) {
    var a;
    if (this.isNotEmpty(t))
      try {
        a = t.findLast(n);
      } catch {
        a = Gr(t).reverse().find(n);
      }
    return a;
  },
  /**
   * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
   */
  findLastIndex: function(t, n) {
    var a = -1;
    if (this.isNotEmpty(t))
      try {
        a = t.findLastIndex(n);
      } catch {
        a = t.lastIndexOf(Gr(t).reverse().find(n));
      }
    return a;
  },
  sort: function(t, n) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, r = this.compare(t, n, l, a), o = a;
    return (this.isEmpty(t) || this.isEmpty(n)) && (o = i === 1 ? a : i), o * r;
  },
  compare: function(t, n, a) {
    var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, i = -1, r = this.isEmpty(t), o = this.isEmpty(n);
    return r && o ? i = 0 : r ? i = l : o ? i = -l : typeof t == "string" && typeof n == "string" ? i = a(t, n) : i = t < n ? -1 : t > n ? 1 : 0, i;
  },
  localeComparator: function() {
    return new Intl.Collator(void 0, {
      numeric: !0
    }).compare;
  },
  nestedKeys: function() {
    var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return Object.entries(n).reduce(function(l, i) {
      var r = Kr(i, 2), o = r[0], s = r[1], u = a ? "".concat(a, ".").concat(o) : o;
      return t.isObject(s) ? l = l.concat(t.nestedKeys(s, u)) : l.push(u), l;
    }, []);
  },
  stringify: function(t) {
    var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = " ".repeat(l), r = " ".repeat(l + a);
    return this.isArray(t) ? "[" + t.map(function(o) {
      return n.stringify(o, a, l + a);
    }).join(", ") + "]" : this.isDate(t) ? t.toISOString() : this.isFunction(t) ? t.toString() : this.isObject(t) ? `{
` + Object.entries(t).map(function(o) {
      var s = Kr(o, 2), u = s[0], d = s[1];
      return "".concat(r).concat(u, ": ").concat(n.stringify(d, a, l + a));
    }).join(`,
`) + `
`.concat(i) + "}" : JSON.stringify(t);
  }
}, qr = 0;
function ri() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return qr++, "".concat(e).concat(qr);
}
function uf(e) {
  return vf(e) || ff(e) || df(e) || cf();
}
function cf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function df(e, t) {
  if (e) {
    if (typeof e == "string")
      return oi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return oi(e, t);
  }
}
function ff(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function vf(e) {
  if (Array.isArray(e))
    return oi(e);
}
function oi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function mf() {
  var e = [], t = function(o, s) {
    var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 999, d = l(o, s, u), v = d.value + (d.key === o ? 0 : u) + 1;
    return e.push({
      key: o,
      value: v
    }), v;
  }, n = function(o) {
    e = e.filter(function(s) {
      return s.value !== o;
    });
  }, a = function(o, s) {
    return l(o, s).value;
  }, l = function(o, s) {
    var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    return uf(e).reverse().find(function(d) {
      return s ? !0 : d.key === o;
    }) || {
      key: o,
      value: u
    };
  }, i = function(o) {
    return o && parseInt(o.style.zIndex, 10) || 0;
  };
  return {
    get: i,
    set: function(o, s, u) {
      s && (s.style.zIndex = String(t(o, !0, u)));
    },
    clear: function(o) {
      o && (n(i(o)), o.style.zIndex = "");
    },
    getCurrent: function(o) {
      return a(o, !0);
    }
  };
}
var Ra = mf(), nt = {
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
function la(e) {
  "@babel/helpers - typeof";
  return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, la(e);
}
function Xr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Yl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xr(Object(n), !0).forEach(function(a) {
      hf(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xr(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function hf(e, t, n) {
  return t = gf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gf(e) {
  var t = yf(e, "string");
  return la(t) == "symbol" ? t : String(t);
}
function yf(e, t) {
  if (la(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (la(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zr = {
  ripple: !1,
  inputStyle: "outlined",
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
    // @deprecated Use 'emptySearchMessage' option instead.
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
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
      rotateLeft: "Rotate Left"
    }
  },
  filterMatchModeOptions: {
    text: [nt.STARTS_WITH, nt.CONTAINS, nt.NOT_CONTAINS, nt.ENDS_WITH, nt.EQUALS, nt.NOT_EQUALS],
    numeric: [nt.EQUALS, nt.NOT_EQUALS, nt.LESS_THAN, nt.LESS_THAN_OR_EQUAL_TO, nt.GREATER_THAN, nt.GREATER_THAN_OR_EQUAL_TO],
    date: [nt.DATE_IS, nt.DATE_IS_NOT, nt.DATE_BEFORE, nt.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  unstyled: !1,
  csp: {
    nonce: void 0
  }
}, bf = Symbol();
function pf(e, t, n, a) {
  if (e !== t) {
    var l = document.getElementById(n), i = l.cloneNode(!0), r = l.getAttribute("href").replace(e, t);
    i.setAttribute("id", n + "-clone"), i.setAttribute("href", r), i.addEventListener("load", function() {
      l.remove(), i.setAttribute("id", n), a && a();
    }), l.parentNode && l.parentNode.insertBefore(i, l.nextSibling);
  }
}
var Sf = {
  install: function(t, n) {
    var a = n ? Yl(Yl({}, Zr), n) : Yl({}, Zr), l = {
      config: gt(a),
      changeTheme: pf
    };
    t.config.globalProperties.$primevue = l, t.provide(bf, l);
  }
};
function ia(e) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e);
}
function Jr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jr(Object(n), !0).forEach(function(a) {
      kf(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jr(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function kf(e, t, n) {
  return t = wf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wf(e) {
  var t = Cf(e, "string");
  return ia(t) == "symbol" ? t : String(t);
}
function Cf(e, t) {
  if (ia(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (ia(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  fs() ? tt(e) : t ? e() : Ce(e);
}
var xf = 0;
function hs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Y(!1), a = Y(e), l = Y(null), i = se.isClient() ? window.document : void 0, r = t.document, o = r === void 0 ? i : r, s = t.immediate, u = s === void 0 ? !0 : s, d = t.manual, v = d === void 0 ? !1 : d, f = t.name, m = f === void 0 ? "style_".concat(++xf) : f, g = t.id, h = g === void 0 ? void 0 : g, y = t.media, p = y === void 0 ? void 0 : y, S = t.nonce, I = S === void 0 ? void 0 : S, w = t.props, P = w === void 0 ? {} : w, C = function() {
  }, k = function(T) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (o) {
      var A = Qr(Qr({}, P), M), B = A.name || m, O = A.id || h, H = A.nonce || I;
      l.value = o.querySelector('style[data-primevue-style-id="'.concat(B, '"]')) || o.getElementById(O) || o.createElement("style"), l.value.isConnected || (a.value = T || e, se.setAttributes(l.value, {
        type: "text/css",
        id: O,
        media: p,
        nonce: H
      }), o.head.appendChild(l.value), se.setAttribute(l.value, "data-primevue-style-id", m), se.setAttributes(l.value, A)), !n.value && (C = q(a, function(U) {
        l.value.textContent = U;
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, V = function() {
    !o || !n.value || (C(), se.isExist(l.value) && o.head.removeChild(l.value), n.value = !1);
  };
  return u && !v && Vf(k), {
    id: h,
    name: m,
    css: a,
    unload: V,
    load: k,
    isLoaded: ll(n)
  };
}
function ra(e) {
  "@babel/helpers - typeof";
  return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e);
}
function Pf(e, t) {
  return Af(e) || Df(e, t) || Tf(e, t) || If();
}
function If() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tf(e, t) {
  if (e) {
    if (typeof e == "string")
      return eo(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return eo(e, t);
  }
}
function eo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Df(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a, l, i, r, o = [], s = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        s = !1;
      } else
        for (; !(s = (a = i.call(n)).done) && (o.push(a.value), o.length !== t); s = !0)
          ;
    } catch (d) {
      u = !0, l = d;
    } finally {
      try {
        if (!s && n.return != null && (r = n.return(), Object(r) !== r))
          return;
      } finally {
        if (u)
          throw l;
      }
    }
    return o;
  }
}
function Af(e) {
  if (Array.isArray(e))
    return e;
}
function to(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Wl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? to(Object(n), !0).forEach(function(a) {
      Mf(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : to(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Mf(e, t, n) {
  return t = Bf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Bf(e) {
  var t = Ef(e, "string");
  return ra(t) == "symbol" ? t : String(t);
}
function Ef(e, t) {
  if (ra(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (ra(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Of = `
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
    padding-right: var(--scrollbar-width);
}
`, $f = {}, _f = {}, jt = {
  name: "base",
  css: Of,
  classes: $f,
  inlineStyles: _f,
  loadStyle: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.css ? hs(this.css, Wl({
      name: this.name
    }, t)) : {};
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var a = Object.entries(n).reduce(function(l, i) {
        var r = Pf(i, 2), o = r[0], s = r[1];
        return l.push("".concat(o, '="').concat(s, '"')) && l;
      }, []).join(" ");
      return '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(a, ">").concat(this.css).concat(t, "</style>");
    }
    return "";
  },
  extend: function(t) {
    return Wl(Wl({}, this), {}, {
      css: void 0
    }, t);
  }
}, Lf = `
@layer primevue {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }

    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }

    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`, Ff = {
  root: function(t) {
    var n = t.props, a = t.instance;
    return ["p-badge p-component", {
      "p-badge-no-gutter": be.isNotEmpty(n.value) && String(n.value).length === 1,
      "p-badge-dot": be.isEmpty(n.value) && !a.$slots.default,
      "p-badge-lg": n.size === "large",
      "p-badge-xl": n.size === "xlarge",
      "p-badge-info": n.severity === "info",
      "p-badge-success": n.severity === "success",
      "p-badge-warning": n.severity === "warning",
      "p-badge-danger": n.severity === "danger"
    }];
  }
}, Rf = jt.extend({
  name: "badge",
  css: Lf,
  classes: Ff
});
function oa(e) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e);
}
function no(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? no(Object(n), !0).forEach(function(a) {
      Hf(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : no(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Hf(e, t, n) {
  return t = jf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function jf(e) {
  var t = zf(e, "string");
  return oa(t) == "symbol" ? t : String(t);
}
function zf(e, t) {
  if (oa(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (oa(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yf = `
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-buttonset .p-button {
    margin: 0;
}

.p-buttonset .p-button:not(:last-child), .p-buttonset .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
`, Wf = `
.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label {
    top: -.75rem;
    font-size: 12px;
}


.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-left > svg,
.p-input-icon-right > i,
.p-input-icon-right > svg {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`, Uf = `
@layer primevue {
.p-component, .p-component * {
    box-sizing: border-box;
}

.p-hidden-space {
    visibility: hidden;
}

.p-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.p-disabled, .p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-component-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-unselectable-text {
    user-select: none;
}

.p-sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal;
}

.p-link {
	text-align: left;
	background-color: transparent;
	margin: 0;
	padding: 0;
	border: none;
    cursor: pointer;
    user-select: none;
}

.p-link:disabled {
	cursor: default;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity .1s linear;
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
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity .1s linear;
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
`.concat(Yf, `
`).concat(Wf, `
}
`), Ul = jt.extend({
  name: "common",
  css: Uf,
  loadGlobalStyle: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return hs(t, Nf({
      name: "global"
    }, n));
  }
});
function sa(e) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e);
}
function ao(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ao(Object(n), !0).forEach(function(a) {
      si(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ao(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function si(e, t, n) {
  return t = Kf(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Kf(e) {
  var t = Gf(e, "string");
  return sa(t) == "symbol" ? t : String(t);
}
function Gf(e, t) {
  if (sa(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (sa(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ol = {
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
      handler: function(t) {
        if (!t) {
          var n, a;
          Ul.loadStyle({
            nonce: (n = this.$config) === null || n === void 0 || (n = n.csp) === null || n === void 0 ? void 0 : n.nonce
          }), this.$options.style && this.$style.loadStyle({
            nonce: (a = this.$config) === null || a === void 0 || (a = a.csp) === null || a === void 0 ? void 0 : a.nonce
          });
        }
      }
    }
  },
  beforeCreate: function() {
    var t, n, a, l, i, r, o, s, u, d, v, f = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, m = f ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, g = f ? (a = this.pt) === null || a === void 0 || (a = a.value) === null || a === void 0 ? void 0 : a[this.$.type.name] : this.pt;
    (l = g || m) === null || l === void 0 || (l = l.hooks) === null || l === void 0 || (i = l.onBeforeCreate) === null || i === void 0 || i.call(l);
    var h = (r = this.$config) === null || r === void 0 || (r = r.pt) === null || r === void 0 ? void 0 : r._usept, y = h ? (o = this.$primevue) === null || o === void 0 || (o = o.config) === null || o === void 0 || (o = o.pt) === null || o === void 0 ? void 0 : o.originalValue : void 0, p = h ? (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s.value : (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 ? void 0 : u.pt;
    (d = p || y) === null || d === void 0 || (d = d[this.$.type.name]) === null || d === void 0 || (d = d.hooks) === null || d === void 0 || (v = d.onBeforeCreate) === null || v === void 0 || v.call(d);
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var t;
    jt.loadStyle({
      nonce: (t = this.$config) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce
    }), this._loadGlobalStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
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
    this._hook("onUnmounted");
  },
  methods: {
    _hook: function(t) {
      if (!this.$options.hostName) {
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), a = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        n == null || n(), a == null || a();
      }
    },
    _loadGlobalStyles: function() {
      var t, n = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      be.isNotEmpty(n) && Ul.loadGlobalStyle(n, {
        nonce: (t = this.$config) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce
      });
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var n;
      return this[t] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[t]);
    },
    _getOptionValue: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = be.toFlatCase(n).split("."), i = l.shift();
      return i ? be.isObject(t) ? this._getOptionValue(be.getItemValue(t[Object.keys(t).find(function(r) {
        return be.toFlatCase(r) === i;
      }) || ""], a), l.join("."), a) : void 0 : be.getItemValue(t, a);
    },
    _getPTValue: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, r = "data-pc-", o = /./g.test(a) && !!l[a.split(".")[0]], s = this._getPropValue("ptOptions") || ((t = this.$config) === null || t === void 0 ? void 0 : t.ptOptions) || {}, u = s.mergeSections, d = u === void 0 ? !0 : u, v = s.mergeProps, f = v === void 0 ? !1 : v, m = i ? o ? this._useGlobalPT(this._getPTClassValue, a, l) : this._useDefaultPT(this._getPTClassValue, a, l) : void 0, g = o ? void 0 : this._usePT(this._getPT(n, this.$name), this._getPTClassValue, a, Fe(Fe({}, l), {}, {
        global: m || {}
      })), h = a !== "transition" && Fe(Fe({}, a === "root" && si({}, "".concat(r, "name"), be.toFlatCase(this.$.type.name))), {}, si({}, "".concat(r, "section"), be.toFlatCase(a)));
      return d || !d && g ? f ? D(m, g, h) : Fe(Fe(Fe({}, m), g), h) : Fe(Fe({}, g), h);
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return be.isString(t) || be.isArray(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", l = arguments.length > 2 ? arguments[2] : void 0, i = function(o) {
        var s, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, d = l ? l(o) : o, v = be.toFlatCase(a), f = be.toFlatCase(n.$name);
        return (s = u ? v !== f ? d == null ? void 0 : d[v] : void 0 : d == null ? void 0 : d[v]) !== null && s !== void 0 ? s : d;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: i(t.originalValue),
        value: i(t.value)
      } : i(t, !0);
    },
    _usePT: function(t, n, a, l) {
      var i = function(h) {
        return n(h, a, l);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var r, o = t._usept || ((r = this.$config) === null || r === void 0 ? void 0 : r.ptOptions) || {}, s = o.mergeSections, u = s === void 0 ? !0 : s, d = o.mergeProps, v = d === void 0 ? !1 : d, f = i(t.originalValue), m = i(t.value);
        return f === void 0 && m === void 0 ? void 0 : be.isString(m) ? m : be.isString(f) ? f : u || !u && m ? v ? D(f, m) : Fe(Fe({}, f), m) : m;
      }
      return i(t);
    },
    _useGlobalPT: function(t, n, a) {
      return this._usePT(this.globalPT, t, n, a);
    },
    _useDefaultPT: function(t, n, a) {
      return this._usePT(this.defaultPT, t, n, a);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, Fe(Fe({}, this.$params), n));
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, n, Fe({
        instance: this
      }, a), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, Fe(Fe({}, this.$params), n));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var l = this._getOptionValue(this.$style.inlineStyles, t, Fe(Fe({}, this.$params), a)), i = this._getOptionValue(Ul.inlineStyles, t, Fe(Fe({}, this.$params), a));
        return [i, l];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, n = this;
      return this._getPT((t = this.$config) === null || t === void 0 ? void 0 : t.pt, void 0, function(a) {
        return be.getItemValue(a, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var t, n = this;
      return this._getPT((t = this.$config) === null || t === void 0 ? void 0 : t.pt, void 0, function(a) {
        return n._getOptionValue(a, n.$name, Fe({}, n.$params)) || be.getItemValue(a, Fe({}, n.$params));
      });
    },
    isUnstyled: function() {
      var t;
      return this.unstyled !== void 0 ? this.unstyled : (t = this.$config) === null || t === void 0 ? void 0 : t.unstyled;
    },
    $params: function() {
      var t = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: t,
          props: t == null ? void 0 : t.$props,
          state: t == null ? void 0 : t.$data,
          attrs: t == null ? void 0 : t.$attrs
        },
        /* @deprecated since v3.43.0. Use the `parent.instance` instead of the `parentInstance`.*/
        parentInstance: t
      };
    },
    $style: function() {
      return Fe(Fe({
        classes: void 0,
        inlineStyles: void 0,
        loadStyle: function() {
        },
        loadCustomStyle: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $config: function() {
      var t;
      return (t = this.$primevue) === null || t === void 0 ? void 0 : t.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    }
  }
}, qf = {
  name: "BaseBadge",
  extends: ol,
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
  style: Rf,
  provide: function() {
    return {
      $parentInstance: this
    };
  }
}, gs = {
  name: "Badge",
  extends: qf
};
function Xf(e, t, n, a, l, i) {
  return Z(), oe("span", D({
    class: e.cx("root")
  }, e.ptm("root"), {
    "data-pc-name": "badge"
  }), [Be(e.$slots, "default", {}, function() {
    return [at($e(e.value), 1)];
  })], 16);
}
gs.render = Xf;
var Zf = `
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
`, Jf = jt.extend({
  name: "baseicon",
  css: Zf
});
function ua(e) {
  "@babel/helpers - typeof";
  return ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ua(e);
}
function lo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function io(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lo(Object(n), !0).forEach(function(a) {
      Qf(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lo(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Qf(e, t, n) {
  return t = ev(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ev(e) {
  var t = tv(e, "string");
  return ua(t) == "symbol" ? t : String(t);
}
function tv(e, t) {
  if (ua(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (ua(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zn = {
  name: "BaseIcon",
  extends: ol,
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
  style: Jf,
  methods: {
    pti: function() {
      var t = be.isEmpty(this.label);
      return io(io({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: t ? void 0 : "img",
        "aria-label": t ? void 0 : this.label,
        "aria-hidden": t
      });
    }
  },
  computed: {
    pathId: function() {
      return ri("pv_icon_clip_pv_id_");
    }
  }
}, ys = {
  name: "SpinnerIcon",
  extends: zn
}, nv = ["clip-path"], av = /* @__PURE__ */ we("path", {
  d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
  fill: "currentColor"
}, null, -1), lv = [av], iv = ["id"], rv = /* @__PURE__ */ we("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1), ov = [rv];
function sv(e, t, n, a, l, i) {
  return Z(), oe("svg", D({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), [we("g", {
    "clip-path": "url(#".concat(e.pathId, ")")
  }, lv, 8, nv), we("defs", null, [we("clipPath", {
    id: "".concat(e.pathId)
  }, ov, 8, iv)])], 16);
}
ys.render = sv;
function ca(e) {
  "@babel/helpers - typeof";
  return ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ca(e);
}
function ro(e, t) {
  return fv(e) || dv(e, t) || cv(e, t) || uv();
}
function uv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cv(e, t) {
  if (e) {
    if (typeof e == "string")
      return oo(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return oo(e, t);
  }
}
function oo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function dv(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a, l, i, r, o = [], s = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        s = !1;
      } else
        for (; !(s = (a = i.call(n)).done) && (o.push(a.value), o.length !== t); s = !0)
          ;
    } catch (d) {
      u = !0, l = d;
    } finally {
      try {
        if (!s && n.return != null && (r = n.return(), Object(r) !== r))
          return;
      } finally {
        if (u)
          throw l;
      }
    }
    return o;
  }
}
function fv(e) {
  if (Array.isArray(e))
    return e;
}
function so(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? so(Object(n), !0).forEach(function(a) {
      ui(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : so(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function ui(e, t, n) {
  return t = vv(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function vv(e) {
  var t = mv(e, "string");
  return ca(t) == "symbol" ? t : String(t);
}
function mv(e, t) {
  if (ca(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (ca(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pe = {
  _getMeta: function() {
    return [be.isObject(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], be.getItemValue(be.isObject(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, n) {
    var a, l, i;
    return (a = (t == null || (l = t.instance) === null || l === void 0 ? void 0 : l.$primevue) || (n == null || (i = n.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || a === void 0 ? void 0 : a.config;
  },
  _getOptionValue: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = be.toFlatCase(n).split("."), i = l.shift();
    return i ? be.isObject(t) ? Pe._getOptionValue(be.getItemValue(t[Object.keys(t).find(function(r) {
      return be.toFlatCase(r) === i;
    }) || ""], a), l.join("."), a) : void 0 : be.getItemValue(t, a);
  },
  _getPTValue: function() {
    var t, n, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = function() {
      var I = Pe._getOptionValue.apply(Pe, arguments);
      return be.isString(I) || be.isArray(I) ? {
        class: I
      } : I;
    }, u = "data-pc-", d = ((t = a.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((n = a.$config) === null || n === void 0 ? void 0 : n.ptOptions) || {}, v = d.mergeSections, f = v === void 0 ? !0 : v, m = d.mergeProps, g = m === void 0 ? !1 : m, h = o ? Pe._useDefaultPT(a, a.defaultPT(), s, i, r) : void 0, y = Pe._usePT(a, Pe._getPT(l, a.$name), s, i, Ne(Ne({}, r), {}, {
      global: h || {}
    })), p = Ne(Ne({}, i === "root" && ui({}, "".concat(u, "name"), be.toFlatCase(a.$name))), {}, ui({}, "".concat(u, "section"), be.toFlatCase(i)));
    return f || !f && y ? g ? D(h, y, p) : Ne(Ne(Ne({}, h), y), p) : Ne(Ne({}, y), p);
  },
  _getPT: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 ? arguments[2] : void 0, l = function(r) {
      var o, s = a ? a(r) : r, u = be.toFlatCase(n);
      return (o = s == null ? void 0 : s[u]) !== null && o !== void 0 ? o : s;
    };
    return t != null && t.hasOwnProperty("_usept") ? {
      _usept: t._usept,
      originalValue: l(t.originalValue),
      value: l(t.value)
    } : l(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, a = arguments.length > 2 ? arguments[2] : void 0, l = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, r = function(y) {
      return a(y, l, i);
    };
    if (n != null && n.hasOwnProperty("_usept")) {
      var o, s = n._usept || ((o = t.$config) === null || o === void 0 ? void 0 : o.ptOptions) || {}, u = s.mergeSections, d = u === void 0 ? !0 : u, v = s.mergeProps, f = v === void 0 ? !1 : v, m = r(n.originalValue), g = r(n.value);
      return m === void 0 && g === void 0 ? void 0 : be.isString(g) ? g : be.isString(m) ? m : d || !d && g ? f ? D(m, g) : Ne(Ne({}, m), g) : g;
    }
    return r(n);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0, l = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return Pe._usePT(t, n, a, l, i);
  },
  _hook: function(t, n, a, l, i, r) {
    var o, s, u = "on".concat(be.toCapitalCase(n)), d = Pe._getConfig(l, i), v = a == null ? void 0 : a.$instance, f = Pe._usePT(v, Pe._getPT(l == null || (o = l.value) === null || o === void 0 ? void 0 : o.pt, t), Pe._getOptionValue, "hooks.".concat(u)), m = Pe._useDefaultPT(v, d == null || (s = d.pt) === null || s === void 0 || (s = s.directives) === null || s === void 0 ? void 0 : s[t], Pe._getOptionValue, "hooks.".concat(u)), g = {
      el: a,
      binding: l,
      vnode: i,
      prevVnode: r
    };
    f == null || f(v, g), m == null || m(v, g);
  },
  _extend: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = function(i, r, o, s, u) {
      var d, v;
      r._$instances = r._$instances || {};
      var f = Pe._getConfig(o, s), m = r._$instances[t] || {}, g = be.isEmpty(m) ? Ne(Ne({}, n), n == null ? void 0 : n.methods) : {};
      r._$instances[t] = Ne(Ne({}, m), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: r,
        $binding: o,
        $modifiers: o == null ? void 0 : o.modifiers,
        $value: o == null ? void 0 : o.value,
        $el: m.$el || r || void 0,
        $style: Ne({
          classes: void 0,
          inlineStyles: void 0,
          loadStyle: function() {
          }
        }, n == null ? void 0 : n.style),
        $config: f,
        /* computed instance variables */
        defaultPT: function() {
          return Pe._getPT(f == null ? void 0 : f.pt, void 0, function(y) {
            var p;
            return y == null || (p = y.directives) === null || p === void 0 ? void 0 : p[t];
          });
        },
        isUnstyled: function() {
          var y, p;
          return ((y = r.$instance) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.unstyled) !== void 0 ? (p = r.$instance) === null || p === void 0 || (p = p.$binding) === null || p === void 0 || (p = p.value) === null || p === void 0 ? void 0 : p.unstyled : f == null ? void 0 : f.unstyled;
        },
        /* instance's methods */
        ptm: function() {
          var y, p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return Pe._getPTValue(r.$instance, (y = r.$instance) === null || y === void 0 || (y = y.$binding) === null || y === void 0 || (y = y.value) === null || y === void 0 ? void 0 : y.pt, p, Ne({}, S));
        },
        ptmo: function() {
          var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Pe._getPTValue(r.$instance, y, p, S, !1);
        },
        cx: function() {
          var y, p, S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (y = r.$instance) !== null && y !== void 0 && y.isUnstyled() ? void 0 : Pe._getOptionValue((p = r.$instance) === null || p === void 0 || (p = p.$style) === null || p === void 0 ? void 0 : p.classes, S, Ne({}, I));
        },
        sx: function() {
          var y, p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return S ? Pe._getOptionValue((y = r.$instance) === null || y === void 0 || (y = y.$style) === null || y === void 0 ? void 0 : y.inlineStyles, p, Ne({}, I)) : void 0;
        }
      }, g), r.$instance = r._$instances[t], (d = (v = r.$instance)[i]) === null || d === void 0 || d.call(v, r, o, s, u), r["$".concat(t)] = r.$instance, Pe._hook(t, i, r, o, s, u);
    };
    return {
      created: function(i, r, o, s) {
        a("created", i, r, o, s);
      },
      beforeMount: function(i, r, o, s) {
        var u, d, v, f, m = Pe._getConfig(r, o);
        jt.loadStyle({
          nonce: m == null || (u = m.csp) === null || u === void 0 ? void 0 : u.nonce
        }), !((d = i.$instance) !== null && d !== void 0 && d.isUnstyled()) && ((v = i.$instance) === null || v === void 0 || (v = v.$style) === null || v === void 0 || v.loadStyle({
          nonce: m == null || (f = m.csp) === null || f === void 0 ? void 0 : f.nonce
        })), a("beforeMount", i, r, o, s);
      },
      mounted: function(i, r, o, s) {
        var u, d, v, f, m = Pe._getConfig(r, o);
        jt.loadStyle({
          nonce: m == null || (u = m.csp) === null || u === void 0 ? void 0 : u.nonce
        }), !((d = i.$instance) !== null && d !== void 0 && d.isUnstyled()) && ((v = i.$instance) === null || v === void 0 || (v = v.$style) === null || v === void 0 || v.loadStyle({
          nonce: m == null || (f = m.csp) === null || f === void 0 ? void 0 : f.nonce
        })), a("mounted", i, r, o, s);
      },
      beforeUpdate: function(i, r, o, s) {
        a("beforeUpdate", i, r, o, s);
      },
      updated: function(i, r, o, s) {
        a("updated", i, r, o, s);
      },
      beforeUnmount: function(i, r, o, s) {
        a("beforeUnmount", i, r, o, s);
      },
      unmounted: function(i, r, o, s) {
        a("unmounted", i, r, o, s);
      }
    };
  },
  extend: function() {
    var t = Pe._getMeta.apply(Pe, arguments), n = ro(t, 2), a = n[0], l = n[1];
    return Ne({
      extend: function() {
        var r = Pe._getMeta.apply(Pe, arguments), o = ro(r, 2), s = o[0], u = o[1];
        return Pe.extend(s, Ne(Ne(Ne({}, l), l == null ? void 0 : l.methods), u));
      }
    }, Pe._extend(a, l));
  }
}, hv = `
@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

@layer primevue {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    .p-ripple-disabled .p-ink {
        display: none;
    }
}
`, gv = {
  root: "p-ink"
}, yv = jt.extend({
  name: "ripple",
  css: hv,
  classes: gv
}), bv = Pe.extend({
  style: yv
});
function pv(e) {
  return Cv(e) || wv(e) || kv(e) || Sv();
}
function Sv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kv(e, t) {
  if (e) {
    if (typeof e == "string")
      return ci(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ci(e, t);
  }
}
function wv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Cv(e) {
  if (Array.isArray(e))
    return ci(e);
}
function ci(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
var bs = bv.extend("ripple", {
  mounted: function(t) {
    var n, a = t == null || (n = t.$instance) === null || n === void 0 ? void 0 : n.$config;
    a && a.ripple && (this.create(t), this.bindEvents(t), t.setAttribute("data-pd-ripple", !0));
  },
  unmounted: function(t) {
    this.remove(t);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(t) {
      t.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(t) {
      t.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    create: function(t) {
      var n = se.createElement("span", {
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this),
        "p-bind": this.ptm("root")
      });
      t.appendChild(n), this.$el = n;
    },
    remove: function(t) {
      var n = this.getInk(t);
      n && (this.unbindEvents(t), n.removeEventListener("animationend", this.onAnimationEnd), n.remove());
    },
    onMouseDown: function(t) {
      var n = this, a = t.currentTarget, l = this.getInk(a);
      if (!(!l || getComputedStyle(l, null).display === "none")) {
        if (!this.isUnstyled() && se.removeClass(l, "p-ink-active"), l.setAttribute("data-p-ink-active", "false"), !se.getHeight(l) && !se.getWidth(l)) {
          var i = Math.max(se.getOuterWidth(a), se.getOuterHeight(a));
          l.style.height = i + "px", l.style.width = i + "px";
        }
        var r = se.getOffset(a), o = t.pageX - r.left + document.body.scrollTop - se.getWidth(l) / 2, s = t.pageY - r.top + document.body.scrollLeft - se.getHeight(l) / 2;
        l.style.top = s + "px", l.style.left = o + "px", !this.isUnstyled() && se.addClass(l, "p-ink-active"), l.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          l && (!n.isUnstyled() && se.removeClass(l, "p-ink-active"), l.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && se.removeClass(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? pv(t.children).find(function(n) {
        return se.getAttribute(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
});
function da(e) {
  "@babel/helpers - typeof";
  return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, da(e);
}
function Jt(e, t, n) {
  return t = Vv(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Vv(e) {
  var t = xv(e, "string");
  return da(t) == "symbol" ? t : String(t);
}
function xv(e, t) {
  if (da(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (da(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pv = {
  root: function(t) {
    var n = t.instance, a = t.props;
    return ["p-button p-component", Jt(Jt(Jt(Jt(Jt(Jt(Jt(Jt({
      "p-button-icon-only": n.hasIcon && !a.label && !a.badge,
      "p-button-vertical": (a.iconPos === "top" || a.iconPos === "bottom") && a.label,
      "p-disabled": n.$attrs.disabled || n.$attrs.disabled === "" || a.loading,
      "p-button-loading": a.loading,
      "p-button-loading-label-only": a.loading && !n.hasIcon && a.label,
      "p-button-link": a.link
    }, "p-button-".concat(a.severity), a.severity), "p-button-raised", a.raised), "p-button-rounded", a.rounded), "p-button-text", a.text), "p-button-outlined", a.outlined), "p-button-sm", a.size === "small"), "p-button-lg", a.size === "large"), "p-button-plain", a.plain)];
  },
  loadingIcon: "p-button-loading-icon pi-spin",
  icon: function(t) {
    var n = t.props;
    return ["p-button-icon", {
      "p-button-icon-left": n.iconPos === "left" && n.label,
      "p-button-icon-right": n.iconPos === "right" && n.label,
      "p-button-icon-top": n.iconPos === "top" && n.label,
      "p-button-icon-bottom": n.iconPos === "bottom" && n.label
    }];
  },
  label: "p-button-label"
}, Iv = jt.extend({
  name: "button",
  classes: Pv
}), Tv = {
  name: "BaseButton",
  extends: ol,
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
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
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
    }
  },
  style: Iv,
  provide: function() {
    return {
      $parentInstance: this
    };
  }
}, ps = {
  name: "Button",
  extends: Tv,
  methods: {
    getPTOptions: function(t) {
      return this.ptm(t, {
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
    }
  },
  components: {
    SpinnerIcon: ys,
    Badge: gs
  },
  directives: {
    ripple: bs
  }
}, Dv = ["aria-label", "disabled", "data-pc-severity"];
function Av(e, t, n, a, l, i) {
  var r = Mt("SpinnerIcon"), o = Mt("Badge"), s = it("ripple");
  return ge((Z(), oe("button", D({
    class: e.cx("root"),
    type: "button",
    "aria-label": i.defaultAriaLabel,
    disabled: i.disabled
  }, i.getPTOptions("root"), {
    "data-pc-name": "button",
    "data-pc-severity": e.severity
  }), [Be(e.$slots, "default", {}, function() {
    return [e.loading ? Be(e.$slots, "loadingicon", {
      key: 0,
      class: At([e.cx("loadingIcon"), e.cx("icon")])
    }, function() {
      return [e.loadingIcon ? (Z(), oe("span", D({
        key: 0,
        class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
      }, e.ptm("loadingIcon")), null, 16)) : (Z(), je(r, D({
        key: 1,
        class: [e.cx("loadingIcon"), e.cx("icon")],
        spin: ""
      }, e.ptm("loadingIcon")), null, 16, ["class"]))];
    }) : Be(e.$slots, "icon", {
      key: 1,
      class: At([e.cx("icon")])
    }, function() {
      return [e.icon ? (Z(), oe("span", D({
        key: 0,
        class: [e.cx("icon"), e.icon, e.iconClass]
      }, e.ptm("icon")), null, 16)) : Ie("", !0)];
    }), we("span", D({
      class: e.cx("label")
    }, e.ptm("label")), $e(e.label || " "), 17), e.badge ? (Z(), je(o, D({
      key: 2,
      value: e.badge,
      class: e.badgeClass,
      severity: e.badgeSeverity,
      unstyled: e.unstyled
    }, e.ptm("badge")), null, 16, ["value", "class", "severity", "unstyled"])) : Ie("", !0)];
  })], 16, Dv)), [[s]]);
}
ps.render = Av;
var Ss = {
  name: "CalendarIcon",
  extends: zn
}, Mv = /* @__PURE__ */ we("path", {
  d: "M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z",
  fill: "currentColor"
}, null, -1), Bv = [Mv];
function Ev(e, t, n, a, l, i) {
  return Z(), oe("svg", D({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Bv, 16);
}
Ss.render = Ev;
var ks = {
  name: "ChevronDownIcon",
  extends: zn
}, Ov = /* @__PURE__ */ we("path", {
  d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
  fill: "currentColor"
}, null, -1), $v = [Ov];
function _v(e, t, n, a, l, i) {
  return Z(), oe("svg", D({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), $v, 16);
}
ks.render = _v;
var ws = {
  name: "ChevronLeftIcon",
  extends: zn
}, Lv = /* @__PURE__ */ we("path", {
  d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
  fill: "currentColor"
}, null, -1), Fv = [Lv];
function Rv(e, t, n, a, l, i) {
  return Z(), oe("svg", D({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Fv, 16);
}
ws.render = Rv;
var Cs = {
  name: "ChevronRightIcon",
  extends: zn
}, Nv = /* @__PURE__ */ we("path", {
  d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
  fill: "currentColor"
}, null, -1), Hv = [Nv];
function jv(e, t, n, a, l, i) {
  return Z(), oe("svg", D({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Hv, 16);
}
Cs.render = jv;
var Vs = {
  name: "ChevronUpIcon",
  extends: zn
}, zv = /* @__PURE__ */ we("path", {
  d: "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",
  fill: "currentColor"
}, null, -1), Yv = [zv];
function Wv(e, t, n, a, l, i) {
  return Z(), oe("svg", D({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Yv, 16);
}
Vs.render = Wv;
var Uv = tf(), xs = {
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
    this.mounted = se.isClient();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function Kv(e, t, n, a, l, i) {
  return i.inline ? Be(e.$slots, "default", {
    key: 0
  }) : l.mounted ? (Z(), je(vs, {
    key: 1,
    to: n.appendTo
  }, [Be(e.$slots, "default")], 8, ["to"])) : Ie("", !0);
}
xs.render = Kv;
var Gv = `
@layer primevue {
    .p-calendar {
        display: inline-flex;
        max-width: 100%;
    }

    .p-calendar .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-calendar-w-btn .p-inputtext {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-calendar-w-btn .p-datepicker-trigger {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-calendar .p-datepicker-trigger-icon {
        cursor: pointer;
    }

    /* Fluid */
    .p-fluid .p-calendar {
        display: flex;
    }

    .p-fluid .p-calendar .p-inputtext {
        width: 1%;
    }

    /* Datepicker */
    .p-calendar .p-datepicker {
        min-width: 100%;
    }

    .p-datepicker {
        width: auto;
    }

    .p-datepicker-inline {
        display: inline-block;
        overflow-x: auto;
    }

    /* Header */
    .p-datepicker-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-datepicker-header .p-datepicker-title {
        margin: 0 auto;
    }

    .p-datepicker-prev,
    .p-datepicker-next {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    /* Multiple Month DatePicker */
    .p-datepicker-multiple-month .p-datepicker-group-container {
        display: flex;
    }

    .p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group {
        flex: 1 1 auto;
    }

    /* DatePicker Table */
    .p-datepicker table {
        width: 100%;
        border-collapse: collapse;
    }

    .p-datepicker td > span {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }

    /* Month Picker */
    .p-monthpicker-month {
        width: 33.3%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    /* Year Picker */
    .p-yearpicker-year {
        width: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    /*  Button Bar */
    .p-datepicker-buttonbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Time Picker */
    .p-timepicker {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-timepicker button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-timepicker > div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    /* Touch UI */
    .p-datepicker-touch-ui,
    .p-calendar .p-datepicker-touch-ui {
        min-width: 80vw;
    }
}
`, qv = {
  root: function(t) {
    var n = t.props;
    return {
      position: n.appendTo === "self" ? "relative" : void 0
    };
  }
}, Xv = {
  root: function(t) {
    var n = t.props, a = t.state;
    return ["p-calendar p-component p-inputwrapper", {
      "p-calendar-w-btn": n.showIcon && n.iconDisplay === "button",
      "p-input-icon-right": n.showIcon && n.iconDisplay === "input",
      "p-calendar-timeonly": n.timeOnly,
      "p-calendar-disabled": n.disabled,
      "p-inputwrapper-filled": n.modelValue,
      "p-inputwrapper-focus": a.focused,
      "p-focus": a.focused || a.overlayVisible
    }];
  },
  input: "p-inputtext p-component",
  dropdownButton: "p-datepicker-trigger",
  inputIcon: "p-datepicker-trigger-icon",
  panel: function(t) {
    var n = t.instance, a = t.props, l = t.state;
    return ["p-datepicker p-component", {
      "p-datepicker-mobile": n.queryMatches,
      "p-datepicker-inline": a.inline,
      "p-disabled": a.disabled,
      "p-datepicker-timeonly": a.timeOnly,
      "p-datepicker-multiple-month": a.numberOfMonths > 1,
      "p-datepicker-monthpicker": l.currentView === "month",
      "p-datepicker-yearpicker": l.currentView === "year",
      "p-datepicker-touch-ui": a.touchUI,
      "p-input-filled": n.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": n.$primevue.config.ripple === !1
    }];
  },
  groupContainer: "p-datepicker-group-container",
  group: "p-datepicker-group",
  header: "p-datepicker-header",
  previousButton: "p-datepicker-prev p-link",
  previousIcon: "p-datepicker-prev-icon",
  title: "p-datepicker-title",
  monthTitle: "p-datepicker-month p-link",
  yearTitle: "p-datepicker-year p-link",
  decadeTitle: "p-datepicker-decade",
  nextButton: "p-datepicker-next p-link",
  nextIcon: "p-datepicker-next-icon",
  container: "p-datepicker-calendar-container",
  table: "p-datepicker-calendar",
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-disabled",
  day: function(t) {
    var n = t.date;
    return [{
      "p-datepicker-other-month": n.otherMonth,
      "p-datepicker-today": n.today
    }];
  },
  dayLabel: function(t) {
    var n = t.instance, a = t.date;
    return [{
      "p-highlight": n.isSelected(a) && a.selectable,
      "p-disabled": !a.selectable
    }];
  },
  monthPicker: "p-monthpicker",
  month: function(t) {
    var n = t.instance, a = t.month, l = t.index;
    return ["p-monthpicker-month", {
      "p-highlight": n.isMonthSelected(l),
      "p-disabled": !a.selectable
    }];
  },
  yearPicker: "p-yearpicker",
  year: function(t) {
    var n = t.instance, a = t.year;
    return ["p-yearpicker-year", {
      "p-highlight": n.isYearSelected(a.value),
      "p-disabled": !a.selectable
    }];
  },
  timePicker: "p-timepicker",
  hourPicker: "p-hour-picker",
  incrementButton: "p-link",
  decrementButton: "p-link",
  separatorContainer: "p-separator",
  minutePicker: "p-minute-picker",
  secondPicker: "p-second-picker",
  ampmPicker: "p-ampm-picker",
  buttonbar: "p-datepicker-buttonbar",
  todayButton: "p-button-text",
  clearButton: "p-button-text"
}, Zv = jt.extend({
  name: "calendar",
  css: Gv,
  classes: Xv,
  inlineStyles: qv
}), Jv = {
  name: "BaseCalendar",
  extends: ol,
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
    previousIcon: {
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
    touchUI: {
      type: Boolean,
      default: !1
    },
    monthNavigator: {
      type: Boolean,
      default: !1
    },
    yearNavigator: {
      type: Boolean,
      default: !1
    },
    yearRange: {
      type: String,
      default: null
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
    inputProps: {
      type: null,
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
    panelProps: {
      type: null,
      default: null
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
  style: Zv,
  provide: function() {
    return {
      $parentInstance: this
    };
  }
};
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function Kl(e) {
  return tm(e) || em(e) || Ps(e) || Qv();
}
function Qv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function em(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function tm(e) {
  if (Array.isArray(e))
    return fi(e);
}
function Gl(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Ps(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var a = 0, l = function() {
      };
      return { s: l, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: l };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, r = !1, o;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var u = n.next();
    return i = u.done, u;
  }, e: function(u) {
    r = !0, o = u;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (r)
        throw o;
    }
  } };
}
function Ps(e, t) {
  if (e) {
    if (typeof e == "string")
      return fi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fi(e, t);
  }
}
function fi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
var Is = {
  name: "Calendar",
  extends: Jv,
  emits: ["show", "hide", "input", "month-change", "year-change", "date-select", "update:modelValue", "today-click", "clear-click", "focus", "blur", "keydown"],
  navigationState: null,
  timePickerChange: !1,
  scrollHandler: null,
  outsideClickListener: null,
  maskClickListener: null,
  resizeListener: null,
  matchMediaListener: null,
  overlay: null,
  input: null,
  mask: null,
  previousButton: null,
  nextButton: null,
  timePickerTimer: null,
  preventFocus: !1,
  typeUpdate: !1,
  data: function() {
    return {
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
    modelValue: function(t) {
      this.updateCurrentMetaData(), !this.typeUpdate && !this.inline && this.input && (this.input.value = this.formatValue(t)), this.typeUpdate = !1;
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
      var t = this;
      Promise.resolve(null).then(function() {
        return t.alignOverlay();
      });
    }
  },
  created: function() {
    this.updateCurrentMetaData();
  },
  mounted: function() {
    this.createResponsiveStyle(), this.bindMatchMediaListener(), this.inline ? (this.overlay && this.overlay.setAttribute(this.attributeSelector, ""), this.disabled || (this.preventFocus = !0, this.initFocusableCell(), this.numberOfMonths === 1 && (this.overlay.style.width = se.getOuterWidth(this.$el) + "px"))) : this.input.value = this.formatValue(this.modelValue);
  },
  updated: function() {
    this.overlay && (this.preventFocus = !0, setTimeout(this.updateFocus, 0)), this.input && this.selectionStart != null && this.selectionEnd != null && (this.input.selectionStart = this.selectionStart, this.input.selectionEnd = this.selectionEnd, this.selectionStart = null, this.selectionEnd = null);
  },
  beforeUnmount: function() {
    this.timePickerTimer && clearTimeout(this.timePickerTimer), this.mask && this.destroyMask(), this.destroyResponsiveStyleElement(), this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && this.autoZIndex && Ra.clear(this.overlay), this.overlay = null;
  },
  methods: {
    isComparable: function() {
      return this.modelValue != null && typeof this.modelValue != "string";
    },
    isSelected: function(t) {
      if (!this.isComparable())
        return !1;
      if (this.modelValue) {
        if (this.isSingleSelection())
          return this.isDateEquals(this.modelValue, t);
        if (this.isMultipleSelection()) {
          var n = !1, a = Gl(this.modelValue), l;
          try {
            for (a.s(); !(l = a.n()).done; ) {
              var i = l.value;
              if (n = this.isDateEquals(i, t), n)
                break;
            }
          } catch (r) {
            a.e(r);
          } finally {
            a.f();
          }
          return n;
        } else if (this.isRangeSelection())
          return this.modelValue[1] ? this.isDateEquals(this.modelValue[0], t) || this.isDateEquals(this.modelValue[1], t) || this.isDateBetween(this.modelValue[0], this.modelValue[1], t) : this.isDateEquals(this.modelValue[0], t);
      }
      return !1;
    },
    isMonthSelected: function(t) {
      var n = this;
      if (this.isComparable()) {
        var a = this.isRangeSelection() ? this.modelValue[0] : this.modelValue;
        return this.isMultipleSelection() ? a.some(function(l) {
          return l.getMonth() === t && l.getFullYear() === n.currentYear;
        }) : a.getMonth() === t && a.getFullYear() === this.currentYear;
      }
      return !1;
    },
    isYearSelected: function(t) {
      if (this.isComparable()) {
        var n = this.isRangeSelection() ? this.modelValue[0] : this.modelValue;
        return this.isMultipleSelection() ? n.some(function(a) {
          return a.getFullYear() === t;
        }) : n.getFullYear() === t;
      }
      return !1;
    },
    isDateEquals: function(t, n) {
      return t ? t.getDate() === n.day && t.getMonth() === n.month && t.getFullYear() === n.year : !1;
    },
    isDateBetween: function(t, n, a) {
      var l = !1;
      if (t && n) {
        var i = new Date(a.year, a.month, a.day);
        return t.getTime() <= i.getTime() && n.getTime() >= i.getTime();
      }
      return l;
    },
    getFirstDayOfMonthIndex: function(t, n) {
      var a = /* @__PURE__ */ new Date();
      a.setDate(1), a.setMonth(t), a.setFullYear(n);
      var l = a.getDay() + this.sundayIndex;
      return l >= 7 ? l - 7 : l;
    },
    getDaysCountInMonth: function(t, n) {
      return 32 - this.daylightSavingAdjust(new Date(n, t, 32)).getDate();
    },
    getDaysCountInPrevMonth: function(t, n) {
      var a = this.getPreviousMonthAndYear(t, n);
      return this.getDaysCountInMonth(a.month, a.year);
    },
    getPreviousMonthAndYear: function(t, n) {
      var a, l;
      return t === 0 ? (a = 11, l = n - 1) : (a = t - 1, l = n), {
        month: a,
        year: l
      };
    },
    getNextMonthAndYear: function(t, n) {
      var a, l;
      return t === 11 ? (a = 0, l = n + 1) : (a = t + 1, l = n), {
        month: a,
        year: l
      };
    },
    daylightSavingAdjust: function(t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
    },
    isToday: function(t, n, a, l) {
      return t.getDate() === n && t.getMonth() === a && t.getFullYear() === l;
    },
    isSelectable: function(t, n, a, l) {
      var i = !0, r = !0, o = !0, s = !0;
      return l && !this.selectOtherMonths ? !1 : (this.minDate && (this.minDate.getFullYear() > a || this.minDate.getFullYear() === a && (this.minDate.getMonth() > n || this.minDate.getMonth() === n && this.minDate.getDate() > t)) && (i = !1), this.maxDate && (this.maxDate.getFullYear() < a || this.maxDate.getFullYear() === a && (this.maxDate.getMonth() < n || this.maxDate.getMonth() === n && this.maxDate.getDate() < t)) && (r = !1), this.disabledDates && (o = !this.isDateDisabled(t, n, a)), this.disabledDays && (s = !this.isDayDisabled(t, n, a)), i && r && o && s);
    },
    onOverlayEnter: function(t) {
      t.setAttribute(this.attributeSelector, "");
      var n = this.touchUI ? {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      } : this.inline ? void 0 : {
        position: "absolute",
        top: "0",
        left: "0"
      };
      se.addStyles(t, n), this.autoZIndex && (this.touchUI ? Ra.set("modal", t, this.baseZIndex || this.$primevue.config.zIndex.modal) : Ra.set("overlay", t, this.baseZIndex || this.$primevue.config.zIndex.overlay)), this.alignOverlay(), this.$emit("show");
    },
    onOverlayEnterComplete: function() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener();
    },
    onOverlayAfterLeave: function(t) {
      this.autoZIndex && Ra.clear(t);
    },
    onOverlayLeave: function() {
      this.currentView = this.view, this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.mask && this.disableModality(), this.overlay = null;
    },
    onPrevButtonClick: function(t) {
      this.showOtherMonths && (this.navigationState = {
        backward: !0,
        button: !0
      }, this.navBackward(t));
    },
    onNextButtonClick: function(t) {
      this.showOtherMonths && (this.navigationState = {
        backward: !1,
        button: !0
      }, this.navForward(t));
    },
    navBackward: function(t) {
      t.preventDefault(), this.isEnabled() && (this.currentView === "month" ? (this.decrementYear(), this.$emit("year-change", {
        month: this.currentMonth,
        year: this.currentYear
      })) : this.currentView === "year" ? this.decrementDecade() : t.shiftKey ? this.decrementYear() : (this.currentMonth === 0 ? (this.currentMonth = 11, this.decrementYear()) : this.currentMonth--, this.$emit("month-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      })));
    },
    navForward: function(t) {
      t.preventDefault(), this.isEnabled() && (this.currentView === "month" ? (this.incrementYear(), this.$emit("year-change", {
        month: this.currentMonth,
        year: this.currentYear
      })) : this.currentView === "year" ? this.incrementDecade() : t.shiftKey ? this.incrementYear() : (this.currentMonth === 11 ? (this.currentMonth = 0, this.incrementYear()) : this.currentMonth++, this.$emit("month-change", {
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
    switchToMonthView: function(t) {
      this.currentView = "month", setTimeout(this.updateFocus, 0), t.preventDefault();
    },
    switchToYearView: function(t) {
      this.currentView = "year", setTimeout(this.updateFocus, 0), t.preventDefault();
    },
    isEnabled: function() {
      return !this.disabled && !this.readonly;
    },
    updateCurrentTimeMeta: function(t) {
      var n = t.getHours();
      this.hourFormat === "12" && (this.pm = n > 11, n >= 12 ? n = n == 12 ? 12 : n - 12 : n = n == 0 ? 12 : n), this.currentHour = Math.floor(n / this.stepHour) * this.stepHour, this.currentMinute = Math.floor(t.getMinutes() / this.stepMinute) * this.stepMinute, this.currentSecond = Math.floor(t.getSeconds() / this.stepSecond) * this.stepSecond;
    },
    bindOutsideClickListener: function() {
      var t = this;
      this.outsideClickListener || (this.outsideClickListener = function(n) {
        t.overlayVisible && t.isOutsideClicked(n) && (t.overlayVisible = !1);
      }, document.addEventListener("mousedown", this.outsideClickListener));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("mousedown", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindScrollListener: function() {
      var t = this;
      this.scrollHandler || (this.scrollHandler = new ef(this.$refs.container, function() {
        t.overlayVisible && (t.overlayVisible = !1);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener: function() {
      var t = this;
      this.resizeListener || (this.resizeListener = function() {
        t.overlayVisible && !se.isTouchDevice() && (t.overlayVisible = !1);
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindMatchMediaListener: function() {
      var t = this;
      if (!this.matchMediaListener) {
        var n = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = n, this.queryMatches = n.matches, this.matchMediaListener = function() {
          t.queryMatches = n.matches, t.mobileActive = !1;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isOutsideClicked: function(t) {
      return !(this.$el.isSameNode(t.target) || this.isNavIconClicked(t) || this.$el.contains(t.target) || this.overlay && this.overlay.contains(t.target));
    },
    isNavIconClicked: function(t) {
      return this.previousButton && (this.previousButton.isSameNode(t.target) || this.previousButton.contains(t.target)) || this.nextButton && (this.nextButton.isSameNode(t.target) || this.nextButton.contains(t.target));
    },
    alignOverlay: function() {
      this.touchUI ? this.enableModality() : this.overlay && (this.appendTo === "self" || this.inline ? se.relativePosition(this.overlay, this.$el) : (this.view === "date" ? (this.overlay.style.width = se.getOuterWidth(this.overlay) + "px", this.overlay.style.minWidth = se.getOuterWidth(this.$el) + "px") : this.overlay.style.width = se.getOuterWidth(this.$el) + "px", se.absolutePosition(this.overlay, this.$el)));
    },
    onButtonClick: function() {
      this.isEnabled() && (this.overlayVisible ? this.overlayVisible = !1 : (this.input.focus(), this.overlayVisible = !0));
    },
    isDateDisabled: function(t, n, a) {
      if (this.disabledDates) {
        var l = Gl(this.disabledDates), i;
        try {
          for (l.s(); !(i = l.n()).done; ) {
            var r = i.value;
            if (r.getFullYear() === a && r.getMonth() === n && r.getDate() === t)
              return !0;
          }
        } catch (o) {
          l.e(o);
        } finally {
          l.f();
        }
      }
      return !1;
    },
    isDayDisabled: function(t, n, a) {
      if (this.disabledDays) {
        var l = new Date(a, n, t), i = l.getDay();
        return this.disabledDays.indexOf(i) !== -1;
      }
      return !1;
    },
    onMonthDropdownChange: function(t) {
      this.currentMonth = parseInt(t), this.$emit("month-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    },
    onYearDropdownChange: function(t) {
      this.currentYear = parseInt(t), this.$emit("year-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    },
    onDateSelect: function(t, n) {
      var a = this;
      if (!(this.disabled || !n.selectable)) {
        if (se.find(this.overlay, 'table td span:not([data-p-disabled="true"])').forEach(function(i) {
          return i.tabIndex = -1;
        }), t && t.currentTarget.focus(), this.isMultipleSelection() && this.isSelected(n)) {
          var l = this.modelValue.filter(function(i) {
            return !a.isDateEquals(i, n);
          });
          this.updateModel(l);
        } else
          this.shouldSelectDate(n) && (n.otherMonth ? (this.currentMonth = n.month, this.currentYear = n.year, this.selectDate(n)) : this.selectDate(n));
        this.isSingleSelection() && (!this.showTime || this.hideOnDateTimeSelect) && setTimeout(function() {
          a.input && a.input.focus(), a.overlayVisible = !1;
        }, 150);
      }
    },
    selectDate: function(t) {
      var n = this, a = new Date(t.year, t.month, t.day);
      this.showTime && (this.hourFormat === "12" && this.pm && this.currentHour != 12 ? a.setHours(this.currentHour + 12) : a.setHours(this.currentHour), a.setMinutes(this.currentMinute), a.setSeconds(this.currentSecond)), this.minDate && this.minDate > a && (a = this.minDate, this.currentHour = a.getHours(), this.currentMinute = a.getMinutes(), this.currentSecond = a.getSeconds()), this.maxDate && this.maxDate < a && (a = this.maxDate, this.currentHour = a.getHours(), this.currentMinute = a.getMinutes(), this.currentSecond = a.getSeconds());
      var l = null;
      if (this.isSingleSelection())
        l = a;
      else if (this.isMultipleSelection())
        l = this.modelValue ? [].concat(Kl(this.modelValue), [a]) : [a];
      else if (this.isRangeSelection())
        if (this.modelValue && this.modelValue.length) {
          var i = this.modelValue[0], r = this.modelValue[1];
          !r && a.getTime() >= i.getTime() ? r = a : (i = a, r = null), l = [i, r];
        } else
          l = [a, null];
      l !== null && this.updateModel(l), this.isRangeSelection() && this.hideOnRangeSelection && l[1] !== null && setTimeout(function() {
        n.overlayVisible = !1;
      }, 150), this.$emit("date-select", a);
    },
    updateModel: function(t) {
      this.$emit("update:modelValue", t);
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
    formatValue: function(t) {
      if (typeof t == "string")
        return t;
      var n = "";
      if (t)
        try {
          if (this.isSingleSelection())
            n = this.formatDateTime(t);
          else if (this.isMultipleSelection())
            for (var a = 0; a < t.length; a++) {
              var l = this.formatDateTime(t[a]);
              n += l, a !== t.length - 1 && (n += ", ");
            }
          else if (this.isRangeSelection() && t && t.length) {
            var i = t[0], r = t[1];
            n = this.formatDateTime(i), r && (n += " - " + this.formatDateTime(r));
          }
        } catch {
          n = t;
        }
      return n;
    },
    formatDateTime: function(t) {
      var n = null;
      return t && (this.timeOnly ? n = this.formatTime(t) : (n = this.formatDate(t, this.datePattern), this.showTime && (n += " " + this.formatTime(t)))), n;
    },
    formatDate: function(t, n) {
      if (!t)
        return "";
      var a, l = function(d) {
        var v = a + 1 < n.length && n.charAt(a + 1) === d;
        return v && a++, v;
      }, i = function(d, v, f) {
        var m = "" + v;
        if (l(d))
          for (; m.length < f; )
            m = "0" + m;
        return m;
      }, r = function(d, v, f, m) {
        return l(d) ? m[v] : f[v];
      }, o = "", s = !1;
      if (t)
        for (a = 0; a < n.length; a++)
          if (s)
            n.charAt(a) === "'" && !l("'") ? s = !1 : o += n.charAt(a);
          else
            switch (n.charAt(a)) {
              case "d":
                o += i("d", t.getDate(), 2);
                break;
              case "D":
                o += r("D", t.getDay(), this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
                break;
              case "o":
                o += i("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
              case "m":
                o += i("m", t.getMonth() + 1, 2);
                break;
              case "M":
                o += r("M", t.getMonth(), this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
                break;
              case "y":
                o += l("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                break;
              case "@":
                o += t.getTime();
                break;
              case "!":
                o += t.getTime() * 1e4 + this.ticksTo1970;
                break;
              case "'":
                l("'") ? o += "'" : s = !0;
                break;
              default:
                o += n.charAt(a);
            }
      return o;
    },
    formatTime: function(t) {
      if (!t)
        return "";
      var n = "", a = t.getHours(), l = t.getMinutes(), i = t.getSeconds();
      return this.hourFormat === "12" && a > 11 && a !== 12 && (a -= 12), this.hourFormat === "12" ? n += a === 0 ? 12 : a < 10 ? "0" + a : a : n += a < 10 ? "0" + a : a, n += ":", n += l < 10 ? "0" + l : l, this.showSeconds && (n += ":", n += i < 10 ? "0" + i : i), this.hourFormat === "12" && (n += t.getHours() > 11 ? " ".concat(this.$primevue.config.locale.pm) : " ".concat(this.$primevue.config.locale.am)), n;
    },
    onTodayButtonClick: function(t) {
      var n = /* @__PURE__ */ new Date(), a = {
        day: n.getDate(),
        month: n.getMonth(),
        year: n.getFullYear(),
        otherMonth: n.getMonth() !== this.currentMonth || n.getFullYear() !== this.currentYear,
        today: !0,
        selectable: !0
      };
      this.onDateSelect(null, a), this.$emit("today-click", n), t.preventDefault();
    },
    onClearButtonClick: function(t) {
      this.updateModel(null), this.overlayVisible = !1, this.$emit("clear-click", t), t.preventDefault();
    },
    onTimePickerElementMouseDown: function(t, n, a) {
      this.isEnabled() && (this.repeat(t, null, n, a), t.preventDefault());
    },
    onTimePickerElementMouseUp: function(t) {
      this.isEnabled() && (this.clearTimePickerTimer(), this.updateModelTime(), t.preventDefault());
    },
    onTimePickerElementMouseLeave: function() {
      this.clearTimePickerTimer();
    },
    repeat: function(t, n, a, l) {
      var i = this, r = n || 500;
      switch (this.clearTimePickerTimer(), this.timePickerTimer = setTimeout(function() {
        i.repeat(t, 100, a, l);
      }, r), a) {
        case 0:
          l === 1 ? this.incrementHour(t) : this.decrementHour(t);
          break;
        case 1:
          l === 1 ? this.incrementMinute(t) : this.decrementMinute(t);
          break;
        case 2:
          l === 1 ? this.incrementSecond(t) : this.decrementSecond(t);
          break;
      }
    },
    convertTo24Hour: function(t, n) {
      return this.hourFormat == "12" ? t === 12 ? n ? 12 : 0 : n ? t + 12 : t : t;
    },
    validateTime: function(t, n, a, l) {
      var i = this.isComparable() ? this.modelValue : this.viewDate, r = this.convertTo24Hour(t, l);
      this.isRangeSelection() && (i = this.modelValue[1] || this.modelValue[0]), this.isMultipleSelection() && (i = this.modelValue[this.modelValue.length - 1]);
      var o = i ? i.toDateString() : null;
      return !(this.minDate && o && this.minDate.toDateString() === o && (this.minDate.getHours() > r || this.minDate.getHours() === r && (this.minDate.getMinutes() > n || this.minDate.getMinutes() === n && this.minDate.getSeconds() > a)) || this.maxDate && o && this.maxDate.toDateString() === o && (this.maxDate.getHours() < r || this.maxDate.getHours() === r && (this.maxDate.getMinutes() < n || this.maxDate.getMinutes() === n && this.maxDate.getSeconds() < a)));
    },
    incrementHour: function(t) {
      var n = this.currentHour, a = this.currentHour + Number(this.stepHour), l = this.pm;
      this.hourFormat == "24" ? a = a >= 24 ? a - 24 : a : this.hourFormat == "12" && (n < 12 && a > 11 && (l = !this.pm), a = a >= 13 ? a - 12 : a), this.validateTime(a, this.currentMinute, this.currentSecond, l) && (this.currentHour = a, this.pm = l), t.preventDefault();
    },
    decrementHour: function(t) {
      var n = this.currentHour - this.stepHour, a = this.pm;
      this.hourFormat == "24" ? n = n < 0 ? 24 + n : n : this.hourFormat == "12" && (this.currentHour === 12 && (a = !this.pm), n = n <= 0 ? 12 + n : n), this.validateTime(n, this.currentMinute, this.currentSecond, a) && (this.currentHour = n, this.pm = a), t.preventDefault();
    },
    incrementMinute: function(t) {
      var n = this.currentMinute + Number(this.stepMinute);
      this.validateTime(this.currentHour, n, this.currentSecond, this.pm) && (this.currentMinute = n > 59 ? n - 60 : n), t.preventDefault();
    },
    decrementMinute: function(t) {
      var n = this.currentMinute - this.stepMinute;
      n = n < 0 ? 60 + n : n, this.validateTime(this.currentHour, n, this.currentSecond, this.pm) && (this.currentMinute = n), t.preventDefault();
    },
    incrementSecond: function(t) {
      var n = this.currentSecond + Number(this.stepSecond);
      this.validateTime(this.currentHour, this.currentMinute, n, this.pm) && (this.currentSecond = n > 59 ? n - 60 : n), t.preventDefault();
    },
    decrementSecond: function(t) {
      var n = this.currentSecond - this.stepSecond;
      n = n < 0 ? 60 + n : n, this.validateTime(this.currentHour, this.currentMinute, n, this.pm) && (this.currentSecond = n), t.preventDefault();
    },
    updateModelTime: function() {
      var t = this;
      this.timePickerChange = !0;
      var n = this.isComparable() ? this.modelValue : this.viewDate;
      this.isRangeSelection() && (n = this.modelValue[1] || this.modelValue[0]), this.isMultipleSelection() && (n = this.modelValue[this.modelValue.length - 1]), n = n ? new Date(n.getTime()) : /* @__PURE__ */ new Date(), this.hourFormat == "12" ? this.currentHour === 12 ? n.setHours(this.pm ? 12 : 0) : n.setHours(this.pm ? this.currentHour + 12 : this.currentHour) : n.setHours(this.currentHour), n.setMinutes(this.currentMinute), n.setSeconds(this.currentSecond), this.isRangeSelection() && (this.modelValue[1] ? n = [this.modelValue[0], n] : n = [n, null]), this.isMultipleSelection() && (n = [].concat(Kl(this.modelValue.slice(0, -1)), [n])), this.updateModel(n), this.$emit("date-select", n), setTimeout(function() {
        return t.timePickerChange = !1;
      }, 0);
    },
    toggleAMPM: function(t) {
      var n = this.validateTime(this.currentHour, this.currentMinute, this.currentSecond, !this.pm);
      !n && (this.maxDate || this.minDate) || (this.pm = !this.pm, this.updateModelTime(), t.preventDefault());
    },
    clearTimePickerTimer: function() {
      this.timePickerTimer && clearInterval(this.timePickerTimer);
    },
    onMonthSelect: function(t, n) {
      n.month;
      var a = n.index;
      this.view === "month" ? this.onDateSelect(t, {
        year: this.currentYear,
        month: a,
        day: 1,
        selectable: !0
      }) : (this.currentMonth = a, this.currentView = "date", this.$emit("month-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      })), setTimeout(this.updateFocus, 0);
    },
    onYearSelect: function(t, n) {
      this.view === "year" ? this.onDateSelect(t, {
        year: n.value,
        month: 0,
        day: 1,
        selectable: !0
      }) : (this.currentYear = n.value, this.currentView = "month", this.$emit("year-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      })), setTimeout(this.updateFocus, 0);
    },
    enableModality: function() {
      var t = this;
      if (!this.mask) {
        var n = "p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay p-component-overlay-enter";
        this.mask = se.createElement("div", {
          "data-pc-section": "datepickermask",
          class: !this.isUnstyled && n,
          "p-bind": this.ptm("datepickermask")
        }), this.mask.style.zIndex = String(parseInt(this.overlay.style.zIndex, 10) - 1), this.maskClickListener = function() {
          t.overlayVisible = !1;
        }, this.mask.addEventListener("click", this.maskClickListener), document.body.appendChild(this.mask), se.blockBodyScroll();
      }
    },
    disableModality: function() {
      var t = this;
      this.mask && (this.isUnstyled ? this.destroyMask() : (se.addClass(this.mask, "p-component-overlay-leave"), this.mask.addEventListener("animationend", function() {
        t.destroyMask();
      })));
    },
    destroyMask: function() {
      this.mask.removeEventListener("click", this.maskClickListener), this.maskClickListener = null, document.body.removeChild(this.mask), this.mask = null;
      for (var t = document.body.children, n, a = 0; a < t.length; a++) {
        var l = t[a];
        if (se.isAttributeEquals(l, "data-pc-section", "datepickermask")) {
          n = !0;
          break;
        }
      }
      n || se.unblockBodyScroll();
    },
    updateCurrentMetaData: function() {
      var t = this.viewDate;
      this.currentMonth = t.getMonth(), this.currentYear = t.getFullYear(), (this.showTime || this.timeOnly) && this.updateCurrentTimeMeta(t);
    },
    isValidSelection: function(t) {
      var n = this;
      if (t == null)
        return !0;
      var a = !0;
      return this.isSingleSelection() ? this.isSelectable(t.getDate(), t.getMonth(), t.getFullYear(), !1) || (a = !1) : t.every(function(l) {
        return n.isSelectable(l.getDate(), l.getMonth(), l.getFullYear(), !1);
      }) && this.isRangeSelection() && (a = t.length > 1 && t[1] > t[0]), a;
    },
    parseValue: function(t) {
      if (!t || t.trim().length === 0)
        return null;
      var n;
      if (this.isSingleSelection())
        n = this.parseDateTime(t);
      else if (this.isMultipleSelection()) {
        var a = t.split(",");
        n = [];
        var l = Gl(a), i;
        try {
          for (l.s(); !(i = l.n()).done; ) {
            var r = i.value;
            n.push(this.parseDateTime(r.trim()));
          }
        } catch (u) {
          l.e(u);
        } finally {
          l.f();
        }
      } else if (this.isRangeSelection()) {
        var o = t.split(" - ");
        n = [];
        for (var s = 0; s < o.length; s++)
          n[s] = this.parseDateTime(o[s].trim());
      }
      return n;
    },
    parseDateTime: function(t) {
      var n, a = t.split(" ");
      if (this.timeOnly)
        n = new Date(this.modelValue), this.populateTime(n, a[0], a[1]);
      else {
        var l = this.datePattern;
        this.showTime ? (n = this.parseDate(a[0], l), this.populateTime(n, a[1], a[2])) : n = this.parseDate(t, l);
      }
      return n;
    },
    populateTime: function(t, n, a) {
      if (this.hourFormat == "12" && !a)
        throw "Invalid Time";
      this.pm = a === this.$primevue.config.locale.pm || a === this.$primevue.config.locale.pm.toLowerCase();
      var l = this.parseTime(n);
      t.setHours(l.hour), t.setMinutes(l.minute), t.setSeconds(l.second);
    },
    parseTime: function(t) {
      var n = t.split(":"), a = this.showSeconds ? 3 : 2, l = /^[0-9][0-9]$/;
      if (n.length !== a || !n[0].match(l) || !n[1].match(l) || this.showSeconds && !n[2].match(l))
        throw "Invalid time";
      var i = parseInt(n[0]), r = parseInt(n[1]), o = this.showSeconds ? parseInt(n[2]) : null;
      if (isNaN(i) || isNaN(r) || i > 23 || r > 59 || this.hourFormat == "12" && i > 12 || this.showSeconds && (isNaN(o) || o > 59))
        throw "Invalid time";
      return this.hourFormat == "12" && i !== 12 && this.pm ? i += 12 : this.hourFormat == "12" && i == 12 && !this.pm && (i = 0), {
        hour: i,
        minute: r,
        second: o
      };
    },
    parseDate: function(t, n) {
      if (n == null || t == null)
        throw "Invalid arguments";
      if (t = di(t) === "object" ? t.toString() : t + "", t === "")
        return null;
      var a, l, i, r = 0, o = typeof this.shortYearCutoff != "string" ? this.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(this.shortYearCutoff, 10), s = -1, u = -1, d = -1, v = -1, f = !1, m, g = function(I) {
        var w = a + 1 < n.length && n.charAt(a + 1) === I;
        return w && a++, w;
      }, h = function(I) {
        var w = g(I), P = I === "@" ? 14 : I === "!" ? 20 : I === "y" && w ? 4 : I === "o" ? 3 : 2, C = I === "y" ? P : 1, k = new RegExp("^\\d{" + C + "," + P + "}"), V = t.substring(r).match(k);
        if (!V)
          throw "Missing number at position " + r;
        return r += V[0].length, parseInt(V[0], 10);
      }, y = function(I, w, P) {
        for (var C = -1, k = g(I) ? P : w, V = [], x = 0; x < k.length; x++)
          V.push([x, k[x]]);
        V.sort(function(A, B) {
          return -(A[1].length - B[1].length);
        });
        for (var T = 0; T < V.length; T++) {
          var M = V[T][1];
          if (t.substr(r, M.length).toLowerCase() === M.toLowerCase()) {
            C = V[T][0], r += M.length;
            break;
          }
        }
        if (C !== -1)
          return C + 1;
        throw "Unknown name at position " + r;
      }, p = function() {
        if (t.charAt(r) !== n.charAt(a))
          throw "Unexpected literal at position " + r;
        r++;
      };
      for (this.currentView === "month" && (d = 1), a = 0; a < n.length; a++)
        if (f)
          n.charAt(a) === "'" && !g("'") ? f = !1 : p();
        else
          switch (n.charAt(a)) {
            case "d":
              d = h("d");
              break;
            case "D":
              y("D", this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
              break;
            case "o":
              v = h("o");
              break;
            case "m":
              u = h("m");
              break;
            case "M":
              u = y("M", this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
              break;
            case "y":
              s = h("y");
              break;
            case "@":
              m = new Date(h("@")), s = m.getFullYear(), u = m.getMonth() + 1, d = m.getDate();
              break;
            case "!":
              m = new Date((h("!") - this.ticksTo1970) / 1e4), s = m.getFullYear(), u = m.getMonth() + 1, d = m.getDate();
              break;
            case "'":
              g("'") ? p() : f = !0;
              break;
            default:
              p();
          }
      if (r < t.length && (i = t.substr(r), !/^\s+/.test(i)))
        throw "Extra/unparsed characters found in date: " + i;
      if (s === -1 ? s = (/* @__PURE__ */ new Date()).getFullYear() : s < 100 && (s += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (s <= o ? 0 : -100)), v > -1) {
        u = 1, d = v;
        do {
          if (l = this.getDaysCountInMonth(s, u - 1), d <= l)
            break;
          u++, d -= l;
        } while (!0);
      }
      if (m = this.daylightSavingAdjust(new Date(s, u - 1, d)), m.getFullYear() !== s || m.getMonth() + 1 !== u || m.getDate() !== d)
        throw "Invalid date";
      return m;
    },
    getWeekNumber: function(t) {
      var n = new Date(t.getTime());
      n.setDate(n.getDate() + 4 - (n.getDay() || 7));
      var a = n.getTime();
      return n.setMonth(0), n.setDate(1), Math.floor(Math.round((a - n.getTime()) / 864e5) / 7) + 1;
    },
    onDateCellKeydown: function(t, n, a) {
      var l = t.currentTarget, i = l.parentElement, r = se.index(i);
      switch (t.code) {
        case "ArrowDown": {
          l.tabIndex = "-1";
          var o = i.parentElement.nextElementSibling;
          if (o) {
            var s = se.index(i.parentElement), u = Array.from(i.parentElement.parentElement.children), d = u.slice(s + 1), v = d.find(function(ee) {
              var $ = ee.children[r].children[0];
              return !se.getAttribute($, "data-p-disabled");
            });
            if (v) {
              var f = v.children[r].children[0];
              f.tabIndex = "0", f.focus();
            } else
              this.navigationState = {
                backward: !1
              }, this.navForward(t);
          } else
            this.navigationState = {
              backward: !1
            }, this.navForward(t);
          t.preventDefault();
          break;
        }
        case "ArrowUp": {
          if (l.tabIndex = "-1", t.altKey)
            this.overlayVisible = !1, this.focused = !0;
          else {
            var m = i.parentElement.previousElementSibling;
            if (m) {
              var g = se.index(i.parentElement), h = Array.from(i.parentElement.parentElement.children), y = h.slice(0, g).reverse(), p = y.find(function(ee) {
                var $ = ee.children[r].children[0];
                return !se.getAttribute($, "data-p-disabled");
              });
              if (p) {
                var S = p.children[r].children[0];
                S.tabIndex = "0", S.focus();
              } else
                this.navigationState = {
                  backward: !0
                }, this.navBackward(t);
            } else
              this.navigationState = {
                backward: !0
              }, this.navBackward(t);
          }
          t.preventDefault();
          break;
        }
        case "ArrowLeft": {
          l.tabIndex = "-1";
          var I = i.previousElementSibling;
          if (I) {
            var w = Array.from(i.parentElement.children), P = w.slice(0, r).reverse(), C = P.find(function(ee) {
              var $ = ee.children[0];
              return !se.getAttribute($, "data-p-disabled");
            });
            if (C) {
              var k = C.children[0];
              k.tabIndex = "0", k.focus();
            } else
              this.navigateToMonth(t, !0, a);
          } else
            this.navigateToMonth(t, !0, a);
          t.preventDefault();
          break;
        }
        case "ArrowRight": {
          l.tabIndex = "-1";
          var V = i.nextElementSibling;
          if (V) {
            var x = Array.from(i.parentElement.children), T = x.slice(r + 1), M = T.find(function(ee) {
              var $ = ee.children[0];
              return !se.getAttribute($, "data-p-disabled");
            });
            if (M) {
              var A = M.children[0];
              A.tabIndex = "0", A.focus();
            } else
              this.navigateToMonth(t, !1, a);
          } else
            this.navigateToMonth(t, !1, a);
          t.preventDefault();
          break;
        }
        case "Enter":
        case "NumpadEnter":
        case "Space": {
          this.onDateSelect(t, n), t.preventDefault();
          break;
        }
        case "Escape": {
          this.overlayVisible = !1, t.preventDefault();
          break;
        }
        case "Tab": {
          this.inline || this.trapFocus(t);
          break;
        }
        case "Home": {
          l.tabIndex = "-1";
          var B = i.parentElement, O = B.children[0].children[0];
          se.getAttribute(O, "data-p-disabled") ? this.navigateToMonth(t, !0, a) : (O.tabIndex = "0", O.focus()), t.preventDefault();
          break;
        }
        case "End": {
          l.tabIndex = "-1";
          var H = i.parentElement, U = H.children[H.children.length - 1].children[0];
          se.getAttribute(U, "data-p-disabled") ? this.navigateToMonth(t, !1, a) : (U.tabIndex = "0", U.focus()), t.preventDefault();
          break;
        }
        case "PageUp": {
          l.tabIndex = "-1", t.shiftKey ? (this.navigationState = {
            backward: !0
          }, this.navBackward(t)) : this.navigateToMonth(t, !0, a), t.preventDefault();
          break;
        }
        case "PageDown": {
          l.tabIndex = "-1", t.shiftKey ? (this.navigationState = {
            backward: !1
          }, this.navForward(t)) : this.navigateToMonth(t, !1, a), t.preventDefault();
          break;
        }
      }
    },
    navigateToMonth: function(t, n, a) {
      if (n)
        if (this.numberOfMonths === 1 || a === 0)
          this.navigationState = {
            backward: !0
          }, this.navBackward(t);
        else {
          var l = this.overlay.children[a - 1], i = se.find(l, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])'), r = i[i.length - 1];
          r.tabIndex = "0", r.focus();
        }
      else if (this.numberOfMonths === 1 || a === this.numberOfMonths - 1)
        this.navigationState = {
          backward: !1
        }, this.navForward(t);
      else {
        var o = this.overlay.children[a + 1], s = se.findSingle(o, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
        s.tabIndex = "0", s.focus();
      }
    },
    onMonthCellKeydown: function(t, n) {
      var a = t.currentTarget;
      switch (t.code) {
        case "ArrowUp":
        case "ArrowDown": {
          a.tabIndex = "-1";
          var l = a.parentElement.children, i = se.index(a), r = l[t.code === "ArrowDown" ? i + 3 : i - 3];
          r && (r.tabIndex = "0", r.focus()), t.preventDefault();
          break;
        }
        case "ArrowLeft": {
          a.tabIndex = "-1";
          var o = a.previousElementSibling;
          o ? (o.tabIndex = "0", o.focus()) : (this.navigationState = {
            backward: !0
          }, this.navBackward(t)), t.preventDefault();
          break;
        }
        case "ArrowRight": {
          a.tabIndex = "-1";
          var s = a.nextElementSibling;
          s ? (s.tabIndex = "0", s.focus()) : (this.navigationState = {
            backward: !1
          }, this.navForward(t)), t.preventDefault();
          break;
        }
        case "PageUp": {
          if (t.shiftKey)
            return;
          this.navigationState = {
            backward: !0
          }, this.navBackward(t);
          break;
        }
        case "PageDown": {
          if (t.shiftKey)
            return;
          this.navigationState = {
            backward: !1
          }, this.navForward(t);
          break;
        }
        case "Enter":
        case "NumpadEnter":
        case "Space": {
          this.onMonthSelect(t, n), t.preventDefault();
          break;
        }
        case "Escape": {
          this.overlayVisible = !1, t.preventDefault();
          break;
        }
        case "Tab": {
          this.trapFocus(t);
          break;
        }
      }
    },
    onYearCellKeydown: function(t, n) {
      var a = t.currentTarget;
      switch (t.code) {
        case "ArrowUp":
        case "ArrowDown": {
          a.tabIndex = "-1";
          var l = a.parentElement.children, i = se.index(a), r = l[t.code === "ArrowDown" ? i + 2 : i - 2];
          r && (r.tabIndex = "0", r.focus()), t.preventDefault();
          break;
        }
        case "ArrowLeft": {
          a.tabIndex = "-1";
          var o = a.previousElementSibling;
          o ? (o.tabIndex = "0", o.focus()) : (this.navigationState = {
            backward: !0
          }, this.navBackward(t)), t.preventDefault();
          break;
        }
        case "ArrowRight": {
          a.tabIndex = "-1";
          var s = a.nextElementSibling;
          s ? (s.tabIndex = "0", s.focus()) : (this.navigationState = {
            backward: !1
          }, this.navForward(t)), t.preventDefault();
          break;
        }
        case "PageUp": {
          if (t.shiftKey)
            return;
          this.navigationState = {
            backward: !0
          }, this.navBackward(t);
          break;
        }
        case "PageDown": {
          if (t.shiftKey)
            return;
          this.navigationState = {
            backward: !1
          }, this.navForward(t);
          break;
        }
        case "Enter":
        case "NumpadEnter":
        case "Space": {
          this.onYearSelect(t, n), t.preventDefault();
          break;
        }
        case "Escape": {
          this.overlayVisible = !1, t.preventDefault();
          break;
        }
        case "Tab": {
          this.trapFocus(t);
          break;
        }
      }
    },
    updateFocus: function() {
      var t;
      if (this.navigationState) {
        if (this.navigationState.button)
          this.initFocusableCell(), this.navigationState.backward ? this.previousButton.focus() : this.nextButton.focus();
        else {
          if (this.navigationState.backward) {
            var n;
            this.currentView === "month" ? n = se.find(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"]:not([data-p-disabled="true"])') : this.currentView === "year" ? n = se.find(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"]:not([data-p-disabled="true"])') : n = se.find(this.overlay, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])'), n && n.length > 0 && (t = n[n.length - 1]);
          } else
            this.currentView === "month" ? t = se.findSingle(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"]:not([data-p-disabled="true"])') : this.currentView === "year" ? t = se.findSingle(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"]:not([data-p-disabled="true"])') : t = se.findSingle(this.overlay, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
          t && (t.tabIndex = "0", t.focus());
        }
        this.navigationState = null;
      } else
        this.initFocusableCell();
    },
    initFocusableCell: function() {
      var t;
      if (this.currentView === "month") {
        var n = se.find(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"]'), a = se.findSingle(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"][data-p-highlight="true"]');
        n.forEach(function(o) {
          return o.tabIndex = -1;
        }), t = a || n[0];
      } else if (this.currentView === "year") {
        var l = se.find(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"]'), i = se.findSingle(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"][data-p-highlight="true"]');
        l.forEach(function(o) {
          return o.tabIndex = -1;
        }), t = i || l[0];
      } else if (t = se.findSingle(this.overlay, 'span[data-p-highlight="true"]'), !t) {
        var r = se.findSingle(this.overlay, 'td.p-datepicker-today span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
        r ? t = r : t = se.findSingle(this.overlay, '.p-datepicker-calendar td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
      }
      t && (t.tabIndex = "0", !this.inline && (!this.navigationState || !this.navigationState.button) && !this.timePickerChange && (this.manualInput || t.focus()), this.preventFocus = !1);
    },
    trapFocus: function(t) {
      t.preventDefault();
      var n = se.getFocusableElements(this.overlay);
      if (n && n.length > 0)
        if (!document.activeElement)
          n[0].focus();
        else {
          var a = n.indexOf(document.activeElement);
          if (t.shiftKey)
            a === -1 || a === 0 ? n[n.length - 1].focus() : n[a - 1].focus();
          else if (a === -1)
            if (this.timeOnly)
              n[0].focus();
            else {
              for (var l = null, i = 0; i < n.length; i++)
                n[i].tagName === "SPAN" && (l = i);
              n[l].focus();
            }
          else
            a === n.length - 1 ? n[0].focus() : n[a + 1].focus();
        }
    },
    onContainerButtonKeydown: function(t) {
      switch (t.code) {
        case "Tab":
          this.trapFocus(t);
          break;
        case "Escape":
          this.overlayVisible = !1, t.preventDefault();
          break;
      }
      this.$emit("keydown", t);
    },
    onInput: function(t) {
      try {
        this.selectionStart = this.input.selectionStart, this.selectionEnd = this.input.selectionEnd;
        var n = this.parseValue(t.target.value);
        this.isValidSelection(n) && (this.typeUpdate = !0, this.updateModel(n));
      } catch {
      }
      this.$emit("input", t);
    },
    onInputClick: function() {
      this.showOnFocus && this.isEnabled() && !this.overlayVisible && (this.overlayVisible = !0);
    },
    onFocus: function(t) {
      this.showOnFocus && this.isEnabled() && (this.overlayVisible = !0), this.focused = !0, this.$emit("focus", t);
    },
    onBlur: function(t) {
      this.$emit("blur", {
        originalEvent: t,
        value: t.target.value
      }), this.focused = !1, t.target.value = this.formatValue(this.modelValue);
    },
    onKeyDown: function(t) {
      if (t.code === "ArrowDown" && this.overlay)
        this.trapFocus(t);
      else if (t.code === "ArrowDown" && !this.overlay)
        this.overlayVisible = !0;
      else if (t.code === "Escape")
        this.overlayVisible && (this.overlayVisible = !1, t.preventDefault());
      else if (t.code === "Tab")
        this.overlay && se.getFocusableElements(this.overlay).forEach(function(l) {
          return l.tabIndex = "-1";
        }), this.overlayVisible && (this.overlayVisible = !1);
      else if (t.code === "Enter") {
        var n;
        if (this.manualInput && t.target.value !== null && ((n = t.target.value) === null || n === void 0 ? void 0 : n.trim()) !== "")
          try {
            var a = this.parseValue(t.target.value);
            this.isValidSelection(a) && (this.overlayVisible = !1);
          } catch {
          }
      }
    },
    overlayRef: function(t) {
      this.overlay = t;
    },
    inputRef: function(t) {
      this.input = t;
    },
    previousButtonRef: function(t) {
      this.previousButton = t;
    },
    nextButtonRef: function(t) {
      this.nextButton = t;
    },
    getMonthName: function(t) {
      return this.$primevue.config.locale.monthNames[t];
    },
    getYear: function(t) {
      return this.currentView === "month" ? this.currentYear : t.year;
    },
    onOverlayClick: function(t) {
      this.inline || Uv.emit("overlay-click", {
        originalEvent: t,
        target: this.$el
      });
    },
    onOverlayKeyDown: function(t) {
      switch (t.code) {
        case "Escape":
          this.inline || (this.input.focus(), this.overlayVisible = !1);
          break;
      }
    },
    onOverlayMouseUp: function(t) {
      this.onOverlayClick(t);
    },
    createResponsiveStyle: function() {
      if (this.numberOfMonths > 1 && this.responsiveOptions && !this.isUnstyled) {
        if (!this.responsiveStyleElement) {
          var t;
          this.responsiveStyleElement = document.createElement("style"), this.responsiveStyleElement.type = "text/css", se.setAttribute(this.responsiveStyleElement, "nonce", (t = this.$primevue) === null || t === void 0 || (t = t.config) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce), document.body.appendChild(this.responsiveStyleElement);
        }
        var n = "";
        if (this.responsiveOptions)
          for (var a = ObjectUtils.localeComparator(), l = Kl(this.responsiveOptions).filter(function(v) {
            return !!(v.breakpoint && v.numMonths);
          }).sort(function(v, f) {
            return -1 * a(v.breakpoint, f.breakpoint);
          }), i = 0; i < l.length; i++) {
            for (var r = l[i], o = r.breakpoint, s = r.numMonths, u = `
                            .p-datepicker[`.concat(this.attributeSelector, "] .p-datepicker-group:nth-child(").concat(s, `) .p-datepicker-next {
                                display: inline-flex;
                            }
                        `), d = s; d < this.numberOfMonths; d++)
              u += `
                                .p-datepicker[`.concat(this.attributeSelector, "] .p-datepicker-group:nth-child(").concat(d + 1, `) {
                                    display: none;
                                }
                            `);
            n += `
                            @media screen and (max-width: `.concat(o, `) {
                                `).concat(u, `
                            }
                        `);
          }
        this.responsiveStyleElement.innerHTML = n;
      }
    },
    destroyResponsiveStyleElement: function() {
      this.responsiveStyleElement && (this.responsiveStyleElement.remove(), this.responsiveStyleElement = null);
    }
  },
  computed: {
    viewDate: function() {
      var t = this.modelValue;
      if (t && Array.isArray(t) && (this.isRangeSelection() ? t = this.inline ? t[0] : t[1] || t[0] : this.isMultipleSelection() && (t = t[t.length - 1])), t && typeof t != "string")
        return t;
      var n = /* @__PURE__ */ new Date();
      return this.maxDate && this.maxDate < n ? this.maxDate : this.minDate && this.minDate > n ? this.minDate : n;
    },
    inputFieldValue: function() {
      return this.formatValue(this.modelValue);
    },
    months: function() {
      for (var t = [], n = 0; n < this.numberOfMonths; n++) {
        var a = this.currentMonth + n, l = this.currentYear;
        a > 11 && (a = a % 11 - 1, l = l + 1);
        for (var i = [], r = this.getFirstDayOfMonthIndex(a, l), o = this.getDaysCountInMonth(a, l), s = this.getDaysCountInPrevMonth(a, l), u = 1, d = /* @__PURE__ */ new Date(), v = [], f = Math.ceil((o + r) / 7), m = 0; m < f; m++) {
          var g = [];
          if (m == 0) {
            for (var h = s - r + 1; h <= s; h++) {
              var y = this.getPreviousMonthAndYear(a, l);
              g.push({
                day: h,
                month: y.month,
                year: y.year,
                otherMonth: !0,
                today: this.isToday(d, h, y.month, y.year),
                selectable: this.isSelectable(h, y.month, y.year, !0)
              });
            }
            for (var p = 7 - g.length, S = 0; S < p; S++)
              g.push({
                day: u,
                month: a,
                year: l,
                today: this.isToday(d, u, a, l),
                selectable: this.isSelectable(u, a, l, !1)
              }), u++;
          } else
            for (var I = 0; I < 7; I++) {
              if (u > o) {
                var w = this.getNextMonthAndYear(a, l);
                g.push({
                  day: u - o,
                  month: w.month,
                  year: w.year,
                  otherMonth: !0,
                  today: this.isToday(d, u - o, w.month, w.year),
                  selectable: this.isSelectable(u - o, w.month, w.year, !0)
                });
              } else
                g.push({
                  day: u,
                  month: a,
                  year: l,
                  today: this.isToday(d, u, a, l),
                  selectable: this.isSelectable(u, a, l, !1)
                });
              u++;
            }
          this.showWeek && v.push(this.getWeekNumber(new Date(g[0].year, g[0].month, g[0].day))), i.push(g);
        }
        t.push({
          month: a,
          year: l,
          dates: i,
          weekNumbers: v
        });
      }
      return t;
    },
    weekDays: function() {
      for (var t = [], n = this.$primevue.config.locale.firstDayOfWeek, a = 0; a < 7; a++)
        t.push(this.$primevue.config.locale.dayNamesMin[n]), n = n == 6 ? 0 : ++n;
      return t;
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
    yearOptions: function() {
      if (this.yearRange) {
        var t = this, n = this.yearRange.split(":"), a = parseInt(n[0]), l = parseInt(n[1]), i = [];
        this.currentYear < a ? t.currentYear = l : this.currentYear > l && (t.currentYear = a);
        for (var r = a; r <= l; r++)
          i.push(r);
        return i;
      } else
        return null;
    },
    monthPickerValues: function() {
      for (var t = this, n = [], a = function(r) {
        if (t.minDate) {
          var o = t.minDate.getMonth(), s = t.minDate.getFullYear();
          if (t.currentYear < s || t.currentYear === s && r < o)
            return !1;
        }
        if (t.maxDate) {
          var u = t.maxDate.getMonth(), d = t.maxDate.getFullYear();
          if (t.currentYear > d || t.currentYear === d && r > u)
            return !1;
        }
        return !0;
      }, l = 0; l <= 11; l++)
        n.push({
          value: this.$primevue.config.locale.monthNamesShort[l],
          selectable: a(l)
        });
      return n;
    },
    yearPickerValues: function() {
      for (var t = this, n = [], a = this.currentYear - this.currentYear % 10, l = function(o) {
        return !(t.minDate && t.minDate.getFullYear() > o || t.maxDate && t.maxDate.getFullYear() < o);
      }, i = 0; i < 10; i++)
        n.push({
          value: a + i,
          selectable: l(a + i)
        });
      return n;
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
      return ri();
    },
    switchViewButtonDisabled: function() {
      return this.numberOfMonths > 1 || this.disabled;
    },
    panelId: function() {
      return ri() + "_panel";
    }
  },
  components: {
    CalendarButton: ps,
    Portal: xs,
    CalendarIcon: Ss,
    ChevronLeftIcon: ws,
    ChevronRightIcon: Cs,
    ChevronUpIcon: Vs,
    ChevronDownIcon: ks
  },
  directives: {
    ripple: bs
  }
};
function fa(e) {
  "@babel/helpers - typeof";
  return fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fa(e);
}
function uo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Na(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uo(Object(n), !0).forEach(function(a) {
      nm(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uo(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function nm(e, t, n) {
  return t = am(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function am(e) {
  var t = lm(e, "string");
  return fa(t) == "symbol" ? t : String(t);
}
function lm(e, t) {
  if (fa(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (fa(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var im = ["id"], rm = ["id", "placeholder", "aria-expanded", "aria-controls", "aria-labelledby", "aria-label", "disabled", "readonly"], om = ["id", "role", "aria-modal", "aria-label"], sm = ["disabled", "aria-label"], um = ["disabled", "aria-label"], cm = ["disabled", "aria-label"], dm = ["disabled", "aria-label"], fm = ["disabled", "aria-label"], vm = ["disabled", "aria-label"], mm = ["data-p-disabled"], hm = ["abbr"], gm = ["data-p-disabled"], ym = ["aria-label", "data-p-today", "data-p-other-month"], bm = ["onClick", "onKeydown", "aria-selected", "aria-disabled", "data-p-disabled", "data-p-highlight"], pm = ["onClick", "onKeydown", "data-p-disabled", "data-p-highlight"], Sm = ["onClick", "onKeydown", "data-p-disabled", "data-p-highlight"], km = ["aria-label"], wm = ["aria-label"], Cm = ["aria-label", "disabled"], Vm = ["aria-label", "disabled"], xm = ["aria-label", "disabled"], Pm = ["aria-label", "disabled"], Im = ["aria-label", "disabled"], Tm = ["aria-label", "disabled"];
function Dm(e, t, n, a, l, i) {
  var r = Mt("CalendarButton"), o = Mt("Portal"), s = it("ripple");
  return Z(), oe("span", D({
    ref: "container",
    id: e.id,
    class: e.cx("root"),
    style: e.sx("root")
  }, e.ptm("root"), {
    "data-pc-name": "calendar"
  }), [e.inline ? Ie("", !0) : (Z(), oe("input", D({
    key: 0,
    ref: i.inputRef,
    id: e.inputId,
    type: "text",
    role: "combobox",
    class: [e.cx("input"), e.inputClass],
    style: e.inputStyle,
    placeholder: e.placeholder,
    autocomplete: "off",
    "aria-autocomplete": "none",
    "aria-haspopup": "dialog",
    "aria-expanded": l.overlayVisible,
    "aria-controls": i.panelId,
    "aria-labelledby": e.ariaLabelledby,
    "aria-label": e.ariaLabel,
    inputmode: "none",
    disabled: e.disabled,
    readonly: !e.manualInput || e.readonly,
    tabindex: 0,
    onInput: t[0] || (t[0] = function() {
      return i.onInput && i.onInput.apply(i, arguments);
    }),
    onClick: t[1] || (t[1] = function() {
      return i.onInputClick && i.onInputClick.apply(i, arguments);
    }),
    onFocus: t[2] || (t[2] = function() {
      return i.onFocus && i.onFocus.apply(i, arguments);
    }),
    onBlur: t[3] || (t[3] = function() {
      return i.onBlur && i.onBlur.apply(i, arguments);
    }),
    onKeydown: t[4] || (t[4] = function() {
      return i.onKeyDown && i.onKeyDown.apply(i, arguments);
    })
  }, Na(Na({}, e.inputProps), e.ptm("input"))), null, 16, rm)), e.showIcon && e.iconDisplay === "button" ? (Z(), je(r, {
    key: 1,
    class: At(e.cx("dropdownButton")),
    disabled: e.disabled,
    onClick: i.onButtonClick,
    type: "button",
    "aria-label": e.$primevue.config.locale.chooseDate,
    "aria-haspopup": "dialog",
    "aria-expanded": l.overlayVisible,
    "aria-controls": i.panelId,
    unstyled: e.unstyled,
    pt: e.ptm("dropdownButton"),
    "data-pc-section": "dropdownbutton"
  }, {
    icon: $t(function() {
      return [Be(e.$slots, "dropdownicon", {
        class: At(e.icon)
      }, function() {
        return [(Z(), je(ut(e.icon ? "span" : "CalendarIcon"), D({
          class: e.icon
        }, e.ptm("dropdownButton").icon, {
          "data-pc-section": "dropdownicon"
        }), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 8, ["class", "disabled", "onClick", "aria-label", "aria-expanded", "aria-controls", "unstyled", "pt"])) : e.showIcon && e.iconDisplay === "input" ? Be(e.$slots, "inputicon", {
    key: 2,
    class: At(e.cx("inputIcon")),
    clickCallback: i.onButtonClick
  }, function() {
    return [(Z(), je(ut(e.icon ? "i" : "CalendarIcon"), D({
      class: [e.icon, e.cx("inputIcon")],
      onClick: i.onButtonClick
    }, e.ptm("inputicon")), null, 16, ["class", "onClick"]))];
  }) : Ie("", !0), c(o, {
    appendTo: e.appendTo,
    disabled: e.inline
  }, {
    default: $t(function() {
      return [c(Ht, D({
        name: "p-connected-overlay",
        onEnter: t[74] || (t[74] = function(u) {
          return i.onOverlayEnter(u);
        }),
        onAfterEnter: i.onOverlayEnterComplete,
        onAfterLeave: i.onOverlayAfterLeave,
        onLeave: i.onOverlayLeave
      }, e.ptm("transition")), {
        default: $t(function() {
          return [e.inline || l.overlayVisible ? (Z(), oe("div", D({
            key: 0,
            ref: i.overlayRef,
            id: i.panelId,
            class: [e.cx("panel"), e.panelClass],
            style: e.panelStyle,
            role: e.inline ? null : "dialog",
            "aria-modal": e.inline ? null : "true",
            "aria-label": e.$primevue.config.locale.chooseDate,
            onClick: t[71] || (t[71] = function() {
              return i.onOverlayClick && i.onOverlayClick.apply(i, arguments);
            }),
            onKeydown: t[72] || (t[72] = function() {
              return i.onOverlayKeyDown && i.onOverlayKeyDown.apply(i, arguments);
            }),
            onMouseup: t[73] || (t[73] = function() {
              return i.onOverlayMouseUp && i.onOverlayMouseUp.apply(i, arguments);
            })
          }, Na(Na({}, e.panelProps), e.ptm("panel"))), [e.timeOnly ? Ie("", !0) : (Z(), oe(re, {
            key: 0
          }, [we("div", D({
            class: e.cx("groupContainer")
          }, e.ptm("groupContainer")), [(Z(!0), oe(re, null, Qt(i.months, function(u, d) {
            return Z(), oe("div", D({
              key: u.month + u.year,
              class: e.cx("group")
            }, e.ptm("group")), [we("div", D({
              class: e.cx("header")
            }, e.ptm("header")), [Be(e.$slots, "header"), ge((Z(), oe("button", D({
              ref_for: !0,
              ref: i.previousButtonRef,
              class: e.cx("previousButton"),
              onClick: t[5] || (t[5] = function() {
                return i.onPrevButtonClick && i.onPrevButtonClick.apply(i, arguments);
              }),
              type: "button",
              onKeydown: t[6] || (t[6] = function() {
                return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
              }),
              disabled: e.disabled,
              "aria-label": l.currentView === "year" ? e.$primevue.config.locale.prevDecade : l.currentView === "month" ? e.$primevue.config.locale.prevYear : e.$primevue.config.locale.prevMonth
            }, e.ptm("previousButton"), {
              "data-pc-group-section": "navigator"
            }), [Be(e.$slots, "previousicon", {
              class: At(e.cx("previousIcon"))
            }, function() {
              return [(Z(), je(ut(e.previousIcon ? "span" : "ChevronLeftIcon"), D({
                class: [e.cx("previousIcon"), e.previousIcon]
              }, e.ptm("previousIcon")), null, 16, ["class"]))];
            })], 16, sm)), [[xt, e.showOtherMonths ? d === 0 : !1], [s]]), we("div", D({
              class: e.cx("title")
            }, e.ptm("title")), [e.$primevue.config.locale.showMonthAfterYear ? (Z(), oe(re, {
              key: 0
            }, [l.currentView !== "year" ? (Z(), oe("button", D({
              key: 0,
              type: "button",
              onClick: t[7] || (t[7] = function() {
                return i.switchToYearView && i.switchToYearView.apply(i, arguments);
              }),
              onKeydown: t[8] || (t[8] = function() {
                return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
              }),
              class: e.cx("yearTitle"),
              disabled: i.switchViewButtonDisabled,
              "aria-label": e.$primevue.config.locale.chooseYear
            }, e.ptm("yearTitle"), {
              "data-pc-group-section": "view"
            }), $e(i.getYear(u)), 17, um)) : Ie("", !0), l.currentView === "date" ? (Z(), oe("button", D({
              key: 1,
              type: "button",
              onClick: t[9] || (t[9] = function() {
                return i.switchToMonthView && i.switchToMonthView.apply(i, arguments);
              }),
              onKeydown: t[10] || (t[10] = function() {
                return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
              }),
              class: e.cx("monthTitle"),
              disabled: i.switchViewButtonDisabled,
              "aria-label": e.$primevue.config.locale.chooseMonth
            }, e.ptm("monthTitle"), {
              "data-pc-group-section": "view"
            }), $e(i.getMonthName(u.month)), 17, cm)) : Ie("", !0)], 64)) : (Z(), oe(re, {
              key: 1
            }, [l.currentView === "date" ? (Z(), oe("button", D({
              key: 0,
              type: "button",
              onClick: t[11] || (t[11] = function() {
                return i.switchToMonthView && i.switchToMonthView.apply(i, arguments);
              }),
              onKeydown: t[12] || (t[12] = function() {
                return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
              }),
              class: e.cx("monthTitle"),
              disabled: i.switchViewButtonDisabled,
              "aria-label": e.$primevue.config.locale.chooseMonth
            }, e.ptm("monthTitle"), {
              "data-pc-group-section": "view"
            }), $e(i.getMonthName(u.month)), 17, dm)) : Ie("", !0), l.currentView !== "year" ? (Z(), oe("button", D({
              key: 1,
              type: "button",
              onClick: t[13] || (t[13] = function() {
                return i.switchToYearView && i.switchToYearView.apply(i, arguments);
              }),
              onKeydown: t[14] || (t[14] = function() {
                return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
              }),
              class: e.cx("yearTitle"),
              disabled: i.switchViewButtonDisabled,
              "aria-label": e.$primevue.config.locale.chooseYear
            }, e.ptm("yearTitle"), {
              "data-pc-group-section": "view"
            }), $e(i.getYear(u)), 17, fm)) : Ie("", !0)], 64)), l.currentView === "year" ? (Z(), oe("span", D({
              key: 2,
              class: e.cx("decadeTitle")
            }, e.ptm("decadeTitle")), [Be(e.$slots, "decade", {
              years: i.yearPickerValues
            }, function() {
              return [at($e(i.yearPickerValues[0].value) + " - " + $e(i.yearPickerValues[i.yearPickerValues.length - 1].value), 1)];
            })], 16)) : Ie("", !0)], 16), ge((Z(), oe("button", D({
              ref_for: !0,
              ref: i.nextButtonRef,
              class: e.cx("nextButton"),
              onClick: t[15] || (t[15] = function() {
                return i.onNextButtonClick && i.onNextButtonClick.apply(i, arguments);
              }),
              type: "button",
              onKeydown: t[16] || (t[16] = function() {
                return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
              }),
              disabled: e.disabled,
              "aria-label": l.currentView === "year" ? e.$primevue.config.locale.nextDecade : l.currentView === "month" ? e.$primevue.config.locale.nextYear : e.$primevue.config.locale.nextMonth
            }, e.ptm("nextButton"), {
              "data-pc-group-section": "navigator"
            }), [Be(e.$slots, "nexticon", {
              class: At(e.cx("nextIcon"))
            }, function() {
              return [(Z(), je(ut(e.nextIcon ? "span" : "ChevronRightIcon"), D({
                class: [e.cx("nextIcon"), e.nextIcon]
              }, e.ptm("nextIcon")), null, 16, ["class"]))];
            })], 16, vm)), [[xt, e.showOtherMonths ? e.numberOfMonths === 1 ? !0 : d === e.numberOfMonths - 1 : !1], [s]])], 16), l.currentView === "date" ? (Z(), oe("div", D({
              key: 0,
              class: e.cx("container")
            }, e.ptm("container")), [we("table", D({
              class: e.cx("table"),
              role: "grid"
            }, e.ptm("table")), [we("thead", Rl(Nl(e.ptm("tableHeader"))), [we("tr", Rl(Nl(e.ptm("tableHeaderRow"))), [e.showWeek ? (Z(), oe("th", D({
              key: 0,
              scope: "col",
              class: e.cx("weekHeader")
            }, e.ptm("weekHeader", {
              context: {
                disabled: e.showWeek
              }
            }), {
              "data-p-disabled": e.showWeek,
              "data-pc-group-section": "tableheadercell"
            }), [Be(e.$slots, "weekheaderlabel", {}, function() {
              return [we("span", D(e.ptm("weekHeaderLabel", {
                context: {
                  disabled: e.showWeek
                }
              }), {
                "data-pc-group-section": "tableheadercelllabel"
              }), $e(i.weekHeaderLabel), 17)];
            })], 16, mm)) : Ie("", !0), (Z(!0), oe(re, null, Qt(i.weekDays, function(v) {
              return Z(), oe("th", D({
                key: v,
                scope: "col",
                abbr: v
              }, e.ptm("tableHeaderCell"), {
                "data-pc-group-section": "tableheadercell"
              }), [we("span", D(e.ptm("weekDay"), {
                "data-pc-group-section": "tableheadercelllabel"
              }), $e(v), 17)], 16, hm);
            }), 128))], 16)], 16), we("tbody", Rl(Nl(e.ptm("tableBody"))), [(Z(!0), oe(re, null, Qt(u.dates, function(v, f) {
              return Z(), oe("tr", D({
                key: v[0].day + "" + v[0].month
              }, e.ptm("tableBodyRow")), [e.showWeek ? (Z(), oe("td", D({
                key: 0,
                class: e.cx("weekNumber")
              }, e.ptm("weekNumber"), {
                "data-pc-group-section": "tablebodycell"
              }), [we("span", D({
                class: e.cx("weekLabelContainer")
              }, e.ptm("weekLabelContainer", {
                context: {
                  disabled: e.showWeek
                }
              }), {
                "data-p-disabled": e.showWeek,
                "data-pc-group-section": "tablebodycelllabel"
              }), [Be(e.$slots, "weeklabel", {
                weekNumber: u.weekNumbers[f]
              }, function() {
                return [u.weekNumbers[f] < 10 ? (Z(), oe("span", D({
                  key: 0,
                  style: {
                    visibility: "hidden"
                  }
                }, e.ptm("weekLabel")), "0", 16)) : Ie("", !0), at(" " + $e(u.weekNumbers[f]), 1)];
              })], 16, gm)], 16)) : Ie("", !0), (Z(!0), oe(re, null, Qt(v, function(m) {
                return Z(), oe("td", D({
                  key: m.day + "" + m.month,
                  "aria-label": m.day,
                  class: e.cx("day", {
                    date: m
                  })
                }, e.ptm("day", {
                  context: {
                    date: m,
                    today: m.today,
                    otherMonth: m.otherMonth
                  }
                }), {
                  "data-p-today": m.today,
                  "data-p-other-month": m.otherMonth,
                  "data-pc-group-section": "tablebodycell"
                }), [ge((Z(), oe("span", D({
                  class: e.cx("dayLabel", {
                    date: m
                  }),
                  onClick: function(h) {
                    return i.onDateSelect(h, m);
                  },
                  draggable: "false",
                  onKeydown: function(h) {
                    return i.onDateCellKeydown(h, m, d);
                  },
                  "aria-selected": i.isSelected(m),
                  "aria-disabled": !m.selectable
                }, e.ptm("dayLabel", {
                  context: {
                    date: m,
                    selected: i.isSelected(m),
                    disabled: !m.selectable
                  }
                }), {
                  "data-p-disabled": !m.selectable,
                  "data-p-highlight": i.isSelected(m),
                  "data-pc-group-section": "tablebodycelllabel"
                }), [Be(e.$slots, "date", {
                  date: m
                }, function() {
                  return [at($e(m.day), 1)];
                })], 16, bm)), [[s]]), i.isSelected(m) ? (Z(), oe("div", D({
                  key: 0,
                  class: "p-hidden-accessible",
                  "aria-live": "polite"
                }, e.ptm("hiddenSelectedDay"), {
                  "data-p-hidden-accessible": !0
                }), $e(m.day), 17)) : Ie("", !0)], 16, ym);
              }), 128))], 16);
            }), 128))], 16)], 16)], 16)) : Ie("", !0)], 16);
          }), 128))], 16), l.currentView === "month" ? (Z(), oe("div", D({
            key: 0,
            class: e.cx("monthPicker")
          }, e.ptm("monthPicker")), [(Z(!0), oe(re, null, Qt(i.monthPickerValues, function(u, d) {
            return ge((Z(), oe("span", D({
              key: u,
              onClick: function(f) {
                return i.onMonthSelect(f, {
                  month: u,
                  index: d
                });
              },
              onKeydown: function(f) {
                return i.onMonthCellKeydown(f, {
                  month: u,
                  index: d
                });
              },
              class: e.cx("month", {
                month: u,
                index: d
              })
            }, e.ptm("month", {
              context: {
                month: u,
                monthIndex: d,
                selected: i.isMonthSelected(d),
                disabled: !u.selectable
              }
            }), {
              "data-p-disabled": !u.selectable,
              "data-p-highlight": i.isMonthSelected(d)
            }), [at($e(u.value) + " ", 1), i.isMonthSelected(d) ? (Z(), oe("div", D({
              key: 0,
              class: "p-hidden-accessible",
              "aria-live": "polite"
            }, e.ptm("hiddenMonth"), {
              "data-p-hidden-accessible": !0
            }), $e(u.value), 17)) : Ie("", !0)], 16, pm)), [[s]]);
          }), 128))], 16)) : Ie("", !0), l.currentView === "year" ? (Z(), oe("div", D({
            key: 1,
            class: e.cx("yearPicker")
          }, e.ptm("yearPicker")), [(Z(!0), oe(re, null, Qt(i.yearPickerValues, function(u) {
            return ge((Z(), oe("span", D({
              key: u.value,
              onClick: function(v) {
                return i.onYearSelect(v, u);
              },
              onKeydown: function(v) {
                return i.onYearCellKeydown(v, u);
              },
              class: e.cx("year", {
                year: u
              })
            }, e.ptm("year", {
              context: {
                year: u,
                selected: i.isYearSelected(u.value),
                disabled: !u.selectable
              }
            }), {
              "data-p-disabled": !u.selectable,
              "data-p-highlight": i.isYearSelected(u.value)
            }), [at($e(u.value) + " ", 1), i.isYearSelected(u.value) ? (Z(), oe("div", D({
              key: 0,
              class: "p-hidden-accessible",
              "aria-live": "polite"
            }, e.ptm("hiddenYear"), {
              "data-p-hidden-accessible": !0
            }), $e(u.value), 17)) : Ie("", !0)], 16, Sm)), [[s]]);
          }), 128))], 16)) : Ie("", !0)], 64)), (e.showTime || e.timeOnly) && l.currentView === "date" ? (Z(), oe("div", D({
            key: 1,
            class: e.cx("timePicker")
          }, e.ptm("timePicker")), [we("div", D({
            class: e.cx("hourPicker")
          }, e.ptm("hourPicker"), {
            "data-pc-group-section": "timepickerContainer"
          }), [ge((Z(), oe("button", D({
            class: e.cx("incrementButton"),
            "aria-label": e.$primevue.config.locale.nextHour,
            onMousedown: t[17] || (t[17] = function(u) {
              return i.onTimePickerElementMouseDown(u, 0, 1);
            }),
            onMouseup: t[18] || (t[18] = function(u) {
              return i.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [t[19] || (t[19] = function() {
              return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
            }), t[21] || (t[21] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 0, 1);
            }, ["enter"])), t[22] || (t[22] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 0, 1);
            }, ["space"]))],
            onMouseleave: t[20] || (t[20] = function(u) {
              return i.onTimePickerElementMouseLeave();
            }),
            onKeyup: [t[23] || (t[23] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["enter"])), t[24] || (t[24] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["space"]))],
            type: "button"
          }, e.ptm("incrementButton"), {
            "data-pc-group-section": "timepickerbutton"
          }), [Be(e.$slots, "incrementicon", {}, function() {
            return [(Z(), je(ut(e.incrementIcon ? "span" : "ChevronUpIcon"), D({
              class: e.incrementIcon
            }, e.ptm("incrementIcon"), {
              "data-pc-group-section": "timepickerlabel"
            }), null, 16, ["class"]))];
          })], 16, km)), [[s]]), we("span", D(e.ptm("hour"), {
            "data-pc-group-section": "timepickerlabel"
          }), $e(i.formattedCurrentHour), 17), ge((Z(), oe("button", D({
            class: e.cx("decrementButton"),
            "aria-label": e.$primevue.config.locale.prevHour,
            onMousedown: t[25] || (t[25] = function(u) {
              return i.onTimePickerElementMouseDown(u, 0, -1);
            }),
            onMouseup: t[26] || (t[26] = function(u) {
              return i.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [t[27] || (t[27] = function() {
              return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
            }), t[29] || (t[29] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 0, -1);
            }, ["enter"])), t[30] || (t[30] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 0, -1);
            }, ["space"]))],
            onMouseleave: t[28] || (t[28] = function(u) {
              return i.onTimePickerElementMouseLeave();
            }),
            onKeyup: [t[31] || (t[31] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["enter"])), t[32] || (t[32] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["space"]))],
            type: "button"
          }, e.ptm("decrementButton"), {
            "data-pc-group-section": "timepickerbutton"
          }), [Be(e.$slots, "decrementicon", {}, function() {
            return [(Z(), je(ut(e.decrementIcon ? "span" : "ChevronDownIcon"), D({
              class: e.decrementIcon
            }, e.ptm("decrementIcon"), {
              "data-pc-group-section": "timepickerlabel"
            }), null, 16, ["class"]))];
          })], 16, wm)), [[s]])], 16), we("div", D({
            class: e.cx("separatorContainer")
          }, e.ptm("separatorContainer"), {
            "data-pc-group-section": "timepickerContainer"
          }), [we("span", D(e.ptm("separator"), {
            "data-pc-group-section": "timepickerlabel"
          }), $e(e.timeSeparator), 17)], 16), we("div", D({
            class: e.cx("minutePicker")
          }, e.ptm("minutePicker"), {
            "data-pc-group-section": "timepickerContainer"
          }), [ge((Z(), oe("button", D({
            class: e.cx("incrementButton"),
            "aria-label": e.$primevue.config.locale.nextMinute,
            onMousedown: t[33] || (t[33] = function(u) {
              return i.onTimePickerElementMouseDown(u, 1, 1);
            }),
            onMouseup: t[34] || (t[34] = function(u) {
              return i.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [t[35] || (t[35] = function() {
              return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
            }), t[37] || (t[37] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 1, 1);
            }, ["enter"])), t[38] || (t[38] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 1, 1);
            }, ["space"]))],
            disabled: e.disabled,
            onMouseleave: t[36] || (t[36] = function(u) {
              return i.onTimePickerElementMouseLeave();
            }),
            onKeyup: [t[39] || (t[39] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["enter"])), t[40] || (t[40] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["space"]))],
            type: "button"
          }, e.ptm("incrementButton"), {
            "data-pc-group-section": "timepickerbutton"
          }), [Be(e.$slots, "incrementicon", {}, function() {
            return [(Z(), je(ut(e.incrementIcon ? "span" : "ChevronUpIcon"), D({
              class: e.incrementIcon
            }, e.ptm("incrementIcon"), {
              "data-pc-group-section": "timepickerlabel"
            }), null, 16, ["class"]))];
          })], 16, Cm)), [[s]]), we("span", D(e.ptm("minute"), {
            "data-pc-group-section": "timepickerlabel"
          }), $e(i.formattedCurrentMinute), 17), ge((Z(), oe("button", D({
            class: e.cx("decrementButton"),
            "aria-label": e.$primevue.config.locale.prevMinute,
            onMousedown: t[41] || (t[41] = function(u) {
              return i.onTimePickerElementMouseDown(u, 1, -1);
            }),
            onMouseup: t[42] || (t[42] = function(u) {
              return i.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [t[43] || (t[43] = function() {
              return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
            }), t[45] || (t[45] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 1, -1);
            }, ["enter"])), t[46] || (t[46] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 1, -1);
            }, ["space"]))],
            disabled: e.disabled,
            onMouseleave: t[44] || (t[44] = function(u) {
              return i.onTimePickerElementMouseLeave();
            }),
            onKeyup: [t[47] || (t[47] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["enter"])), t[48] || (t[48] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["space"]))],
            type: "button"
          }, e.ptm("decrementButton"), {
            "data-pc-group-section": "timepickerbutton"
          }), [Be(e.$slots, "decrementicon", {}, function() {
            return [(Z(), je(ut(e.decrementIcon ? "span" : "ChevronDownIcon"), D({
              class: e.decrementIcon
            }, e.ptm("decrementIcon"), {
              "data-pc-group-section": "timepickerlabel"
            }), null, 16, ["class"]))];
          })], 16, Vm)), [[s]])], 16), e.showSeconds ? (Z(), oe("div", D({
            key: 0,
            class: e.cx("separatorContainer")
          }, e.ptm("separatorContainer"), {
            "data-pc-group-section": "timepickerContainer"
          }), [we("span", D(e.ptm("separator"), {
            "data-pc-group-section": "timepickerlabel"
          }), $e(e.timeSeparator), 17)], 16)) : Ie("", !0), e.showSeconds ? (Z(), oe("div", D({
            key: 1,
            class: e.cx("secondPicker")
          }, e.ptm("secondPicker"), {
            "data-pc-group-section": "timepickerContainer"
          }), [ge((Z(), oe("button", D({
            class: e.cx("incrementButton"),
            "aria-label": e.$primevue.config.locale.nextSecond,
            onMousedown: t[49] || (t[49] = function(u) {
              return i.onTimePickerElementMouseDown(u, 2, 1);
            }),
            onMouseup: t[50] || (t[50] = function(u) {
              return i.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [t[51] || (t[51] = function() {
              return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
            }), t[53] || (t[53] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 2, 1);
            }, ["enter"])), t[54] || (t[54] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 2, 1);
            }, ["space"]))],
            disabled: e.disabled,
            onMouseleave: t[52] || (t[52] = function(u) {
              return i.onTimePickerElementMouseLeave();
            }),
            onKeyup: [t[55] || (t[55] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["enter"])), t[56] || (t[56] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["space"]))],
            type: "button"
          }, e.ptm("incrementButton"), {
            "data-pc-group-section": "timepickerbutton"
          }), [Be(e.$slots, "incrementicon", {}, function() {
            return [(Z(), je(ut(e.incrementIcon ? "span" : "ChevronUpIcon"), D({
              class: e.incrementIcon
            }, e.ptm("incrementIcon"), {
              "data-pc-group-section": "timepickerlabel"
            }), null, 16, ["class"]))];
          })], 16, xm)), [[s]]), we("span", D(e.ptm("second"), {
            "data-pc-group-section": "timepickerlabel"
          }), $e(i.formattedCurrentSecond), 17), ge((Z(), oe("button", D({
            class: e.cx("decrementButton"),
            "aria-label": e.$primevue.config.locale.prevSecond,
            onMousedown: t[57] || (t[57] = function(u) {
              return i.onTimePickerElementMouseDown(u, 2, -1);
            }),
            onMouseup: t[58] || (t[58] = function(u) {
              return i.onTimePickerElementMouseUp(u);
            }),
            onKeydown: [t[59] || (t[59] = function() {
              return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
            }), t[61] || (t[61] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 2, -1);
            }, ["enter"])), t[62] || (t[62] = Le(function(u) {
              return i.onTimePickerElementMouseDown(u, 2, -1);
            }, ["space"]))],
            disabled: e.disabled,
            onMouseleave: t[60] || (t[60] = function(u) {
              return i.onTimePickerElementMouseLeave();
            }),
            onKeyup: [t[63] || (t[63] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["enter"])), t[64] || (t[64] = Le(function(u) {
              return i.onTimePickerElementMouseUp(u);
            }, ["space"]))],
            type: "button"
          }, e.ptm("decrementButton"), {
            "data-pc-group-section": "timepickerbutton"
          }), [Be(e.$slots, "decrementicon", {}, function() {
            return [(Z(), je(ut(e.decrementIcon ? "span" : "ChevronDownIcon"), D({
              class: e.decrementIcon
            }, e.ptm("decrementIcon"), {
              "data-pc-group-section": "timepickerlabel"
            }), null, 16, ["class"]))];
          })], 16, Pm)), [[s]])], 16)) : Ie("", !0), e.hourFormat == "12" ? (Z(), oe("div", D({
            key: 2,
            class: e.cx("separatorContainer")
          }, e.ptm("separatorContainer"), {
            "data-pc-group-section": "timepickerContainer"
          }), [we("span", D(e.ptm("separator"), {
            "data-pc-group-section": "timepickerlabel"
          }), $e(e.timeSeparator), 17)], 16)) : Ie("", !0), e.hourFormat == "12" ? (Z(), oe("div", D({
            key: 3,
            class: e.cx("ampmPicker")
          }, e.ptm("ampmPicker")), [ge((Z(), oe("button", D({
            class: e.cx("incrementButton"),
            "aria-label": e.$primevue.config.locale.am,
            onClick: t[65] || (t[65] = function(u) {
              return i.toggleAMPM(u);
            }),
            onKeydown: t[66] || (t[66] = function() {
              return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
            }),
            type: "button",
            disabled: e.disabled
          }, e.ptm("incrementButton"), {
            "data-pc-group-section": "timepickerbutton"
          }), [Be(e.$slots, "incrementicon", {
            class: At(e.cx("incrementIcon"))
          }, function() {
            return [(Z(), je(ut(e.incrementIcon ? "span" : "ChevronUpIcon"), D({
              class: e.cx("incrementIcon")
            }, e.ptm("incrementIcon"), {
              "data-pc-group-section": "timepickerlabel"
            }), null, 16, ["class"]))];
          })], 16, Im)), [[s]]), we("span", D(e.ptm("ampm"), {
            "data-pc-group-section": "timepickerlabel"
          }), $e(l.pm ? e.$primevue.config.locale.pm : e.$primevue.config.locale.am), 17), ge((Z(), oe("button", D({
            class: e.cx("decrementButton"),
            "aria-label": e.$primevue.config.locale.pm,
            onClick: t[67] || (t[67] = function(u) {
              return i.toggleAMPM(u);
            }),
            onKeydown: t[68] || (t[68] = function() {
              return i.onContainerButtonKeydown && i.onContainerButtonKeydown.apply(i, arguments);
            }),
            type: "button",
            disabled: e.disabled
          }, e.ptm("decrementButton"), {
            "data-pc-group-section": "timepickerbutton"
          }), [Be(e.$slots, "decrementicon", {
            class: At(e.cx("decrementIcon"))
          }, function() {
            return [(Z(), je(ut(e.decrementIcon ? "span" : "ChevronDownIcon"), D({
              class: e.cx("decrementIcon")
            }, e.ptm("decrementIcon"), {
              "data-pc-group-section": "timepickerlabel"
            }), null, 16, ["class"]))];
          })], 16, Tm)), [[s]])], 16)) : Ie("", !0)], 16)) : Ie("", !0), e.showButtonBar ? (Z(), oe("div", D({
            key: 2,
            class: e.cx("buttonbar")
          }, e.ptm("buttonbar")), [c(r, {
            type: "button",
            label: i.todayLabel,
            onClick: t[69] || (t[69] = function(u) {
              return i.onTodayButtonClick(u);
            }),
            class: At(e.cx("todayButton")),
            onKeydown: i.onContainerButtonKeydown,
            unstyled: e.unstyled,
            pt: e.ptm("todayButton"),
            "data-pc-section": "todaybutton",
            "data-pc-group-section": "button"
          }, null, 8, ["label", "class", "onKeydown", "unstyled", "pt"]), c(r, {
            type: "button",
            label: i.clearLabel,
            onClick: t[70] || (t[70] = function(u) {
              return i.onClearButtonClick(u);
            }),
            class: At(e.cx("clearButton")),
            onKeydown: i.onContainerButtonKeydown,
            unstyled: e.unstyled,
            pt: e.ptm("clearButton"),
            "data-pc-section": "clearbutton",
            "data-pc-group-section": "button"
          }, null, 8, ["label", "class", "onKeydown", "unstyled", "pt"])], 16)) : Ie("", !0), Be(e.$slots, "footer")], 16, om)) : Ie("", !0)];
        }),
        _: 3
      }, 16, ["onAfterEnter", "onAfterLeave", "onLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"])], 16, im);
}
Is.render = Dm;
const Am = {
  __name: "VXCalendar",
  props: /* @__PURE__ */ Ki({
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
    },
    timeOnly: {
      type: Boolean,
      default: !1
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Gi(e, "modelValue"), n = b(() => t.value && new Date(t.value).toLocaleString()), a = Y(!1);
    q(t, (i, r) => {
      (!i || !r || i.toLocaleDateString() != r.toLocaleDateString()) && (a.value = !1);
    });
    const l = e;
    return (i, r) => {
      const o = Mt("v-text-field"), s = Mt("PVCalendar"), u = Mt("v-list-item"), d = Mt("v-list"), v = Mt("v-menu");
      return Z(), je(v, {
        modelValue: a.value,
        "onUpdate:modelValue": r[4] || (r[4] = (f) => a.value = f),
        "close-on-content-click": !1
      }, {
        activator: $t(({ props: f }) => [
          c(o, D({
            modelValue: n.value,
            "onUpdate:modelValue": r[0] || (r[0] = (m) => n.value = m),
            label: l.label,
            variant: l.variant,
            clearable: l.clearable,
            rules: l.rules,
            onClick: r[1] || (r[1] = () => a.value = !a.value)
          }, f, {
            class: "mb-2",
            "onClick:clear": r[2] || (r[2] = (m) => t.value = null)
          }), null, 16, ["modelValue", "label", "variant", "clearable", "rules"])
        ]),
        default: $t(() => [
          c(d, { class: "flexCenter" }, {
            default: $t(() => [
              c(u, { class: "flexCenter" }, {
                default: $t(() => [
                  c(s, {
                    modelValue: t.value,
                    "onUpdate:modelValue": r[3] || (r[3] = (f) => t.value = f),
                    inline: "",
                    "show-time": l.showTime
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
}, Ts = ({ fields: e }) => {
  for (const t of e)
    t.variant = "outlined", t.label || (t.label = t.name);
  return e;
}, Ds = (e, t) => {
  for (const n of e.fields) {
    if (!n.fieldType)
      continue;
    switch (t && n.default && (e.data[n.name] = n.default), n.isRequired && (n.rules = [(l) => !!l || "Field is required"]), n.fieldType.toLowerCase()) {
      case "string":
        n.component = "VTextField", n.clearable = !0;
        break;
      case "int":
        n.component = "VTextField", n.type = "number", n.clearable = !0;
        break;
      case "boolean":
        n.component = "VCheckbox", n.isRequired || (n.indeterminate = !0);
        break;
      case "datetime":
        n.component = "VXCalendar", n.clearable = !0;
        break;
      case "relation":
        n.component = "VAutocomplete", n.clearable = !0, n.items = n.values ? n.values.map((l) => Object.values(l).join(" - ")) : [];
        break;
      default:
        console.warn(n.fieldType, "type is not implemented yet");
    }
  }
  return e.parsed = !0, e;
}, Mm = { class: "mt-6 grid grid-cols-2 md:grid-cols-1 gap-2" }, Bm = { class: "grid grid-flow-col gap-2 auto-cols-min justify-end" }, Em = {
  __name: "Vormix",
  props: /* @__PURE__ */ Ki({
    isNew: {
      type: Boolean,
      default: !0
    },
    saveFn: {
      type: Function
      // default: (v) => console.log(v)
    },
    saveBtn: {
      type: Boolean,
      default: !0
    },
    resetBtn: {
      type: Boolean,
      default: !0
    },
    defaultBtn: {
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
  setup(e) {
    const t = Gi(e, "modelValue"), n = Y({}), a = e;
    q(
      () => t,
      (r) => {
        r.value && !r.value.parsed && l(r.value);
      },
      { immediate: !0, deep: !0 }
    );
    function l(r) {
      let o = a.parser ? a.parser(r, a.isNew) : Ds(r, a.isNew);
      return o.fields = Ts(o), n.value = JSON.parse(JSON.stringify(o.data)), t.value = o;
    }
    function i() {
      t.value.data = JSON.parse(JSON.stringify(n.value));
    }
    return (r, o) => {
      var d;
      const s = Mt("v-btn"), u = Mt("v-card");
      return Z(), je(u, {
        style: { padding: "10px" },
        title: (d = t.value) == null ? void 0 : d.name
      }, {
        default: $t(() => {
          var v;
          return [
            we("div", Mm, [
              (Z(!0), oe(re, null, Qt((v = t.value) == null ? void 0 : v.fields, (f) => (Z(), oe("div", {
                key: f.name
              }, [
                (Z(), je(ut(f.component), D(f, {
                  modelValue: t.value.data[f.name],
                  "onUpdate:modelValue": (m) => t.value.data[f.name] = m,
                  clearable: ""
                }), null, 16, ["modelValue", "onUpdate:modelValue"]))
              ]))), 128))
            ]),
            Be(r.$slots, "more"),
            Be(r.$slots, "actions", {}, () => [
              we("div", Bm, [
                e.resetBtn && e.defaultBtn ? (Z(), je(s, {
                  key: 0,
                  "prepend-icon": "mdi-reload",
                  class: "p-2",
                  onClick: o[0] || (o[0] = (f) => i())
                }, {
                  default: $t(() => [
                    at(" Reset ")
                  ]),
                  _: 1
                })) : Ie("", !0),
                e.saveBtn && e.defaultBtn ? (Z(), je(s, {
                  key: 1,
                  "prepend-icon": "mdi-content-save",
                  class: "p-2",
                  onClick: o[1] || (o[1] = (f) => e.saveFn && e.saveFn(t.value.data))
                }, {
                  default: $t(() => [
                    at(" Save ")
                  ]),
                  _: 1
                })) : Ie("", !0),
                Be(r.$slots, "moreActions")
              ])
            ])
          ];
        }),
        _: 3
      }, 8, ["title"]);
    };
  }
}, Om = {
  __name: "VormixSK",
  props: /* @__PURE__ */ Ki({
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
  setup(e) {
    const t = Gi(e, "modelValue"), n = e;
    q(
      () => t,
      (l) => {
        l.value && !l.value.parsed && a(l.value);
      },
      { immediate: !0, deep: !0 }
    );
    function a(l) {
      let i = n.parser ? n.parser(l, n.isNew) : Ds(l, n.isNew);
      return i.fields = Ts(i), t.value = i;
    }
    return (l, i) => {
      var r;
      return Z(!0), oe(re, null, Qt((r = t.value) == null ? void 0 : r.fields, (o) => (Z(), oe("div", {
        key: o.name
      }, [
        (Z(), je(ut(o.component), D(o, {
          modelValue: t.value.data[o.name],
          "onUpdate:modelValue": (s) => t.value.data[o.name] = s,
          clearable: ""
        }), null, 16, ["modelValue", "onUpdate:modelValue"]))
      ]))), 128);
    };
  }
};
function Bt(e, t) {
  let n;
  function a() {
    n = qi(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), a();
    }) : t());
  }
  q(e, (l) => {
    l && !n ? a() : l || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), ct(() => {
    n == null || n.stop();
  });
}
const De = typeof window < "u", Qi = De && "IntersectionObserver" in window, $m = De && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), co = De && "EyeDropper" in window;
function fo(e, t, n) {
  _m(e, t), t.set(e, n);
}
function _m(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Lm(e, t, n) {
  var a = As(e, t, "set");
  return Fm(e, a, n), n;
}
function Fm(e, t, n) {
  if (t.set)
    t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function sn(e, t) {
  var n = As(e, t, "get");
  return Rm(e, n);
}
function As(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function Rm(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Ms(e, t, n) {
  const a = t.length - 1;
  if (a < 0)
    return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function Ut(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((a) => Ut(e[a], t[a]));
}
function gn(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Ms(e, t.split("."), n));
}
function Xe(e, t, n) {
  if (t === !0)
    return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean")
    return n;
  if (e !== Object(e)) {
    if (typeof t != "function")
      return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string")
    return gn(e, t, n);
  if (Array.isArray(t))
    return Ms(e, t, n);
  if (typeof t != "function")
    return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function _t(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function J(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function qa(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function va(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const vo = Object.freeze({
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
}), vi = Object.freeze({
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
function Bs(e) {
  return Object.keys(e);
}
function cn(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Es(e, t) {
  const n = {}, a = new Set(Object.keys(e));
  for (const l of t)
    a.has(l) && (n[l] = e[l]);
  return n;
}
function mi(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((r) => r instanceof RegExp ? r.test(i) : r === i) && !(n != null && n.some((r) => r === i)) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Ge(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
function Os(e, t) {
  const n = {};
  return t.forEach((a) => n[a] = e[a]), n;
}
const $s = /^on[^a-z]/, sl = (e) => $s.test(e), Nm = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], Hm = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function jm(e) {
  return e.isComposing && Hm.includes(e.key);
}
function tn(e) {
  const [t, n] = mi(e, [$s]), a = Ge(t, Nm), [l, i] = mi(n, ["class", "style", "id", /^data-/]);
  return Object.assign(l, t), Object.assign(i, a), [l, i];
}
function ze(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function zm(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), r = 0; r < l; r++)
      i[r] = arguments[r];
    clearTimeout(n), n = setTimeout(() => e(...i), mt(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function Ue(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function mo(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function ho(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function go(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function Ym(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function yo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < t)
    return `${e} B`;
  const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= t && a < n.length - 1; )
    e /= t, ++a;
  return `${e.toFixed(1)} ${n[a]}B`;
}
function bt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in t) {
    const i = e[l], r = t[l];
    if (qa(i) && qa(r)) {
      a[l] = bt(i, r, n);
      continue;
    }
    if (Array.isArray(i) && Array.isArray(r) && n) {
      a[l] = n(i, r);
      continue;
    }
    a[l] = r;
  }
  return a;
}
function _s(e) {
  return e.map((t) => t.type === re ? _s(t.children) : t).flat();
}
function vn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (vn.cache.has(e))
    return vn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return vn.cache.set(e, t), t;
}
vn.cache = /* @__PURE__ */ new Map();
function na(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => na(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => na(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return na(e, t.component.subTree).flat(1);
  }
  return [];
}
var Ha = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap();
class Wm {
  constructor(t) {
    fo(this, Ha, {
      writable: !0,
      value: []
    }), fo(this, Mn, {
      writable: !0,
      value: 0
    }), this.size = t;
  }
  push(t) {
    sn(this, Ha)[sn(this, Mn)] = t, Lm(this, Mn, (sn(this, Mn) + 1) % this.size);
  }
  values() {
    return sn(this, Ha).slice(sn(this, Mn)).concat(sn(this, Ha).slice(0, sn(this, Mn)));
  }
}
function Um(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function er(e) {
  const t = gt({}), n = b(e);
  return Ze(() => {
    for (const a in n.value)
      t[a] = n.value[a];
  }, {
    flush: "sync"
  }), il(t);
}
function Xa(e, t) {
  return e.includes(t);
}
function Ls(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const ht = () => [Function, Array];
function bo(e, t) {
  return t = "on" + jn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function tr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...n);
  else
    typeof e == "function" && e(...n);
}
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function Fs(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function _n(e, t) {
  var a, l, i, r;
  const n = ma(e);
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = n[0]) == null || a.focus());
  else if (t === "first")
    (l = n[0]) == null || l.focus();
  else if (t === "last")
    (i = n.at(-1)) == null || i.focus();
  else if (typeof t == "number")
    (r = n[t]) == null || r.focus();
  else {
    const o = Fs(n, t);
    o ? o.focus() : _n(e, t === "next" ? "first" : "last");
  }
}
function ja(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Rs() {
}
function Ln(e, t) {
  if (!(De && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`)))
    return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function ul(e) {
  return e.some((t) => Bd(t) ? t.type === Ed ? !1 : t.type !== re || ul(t.children) : !0) ? e : null;
}
function Km(e, t) {
  if (!De || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
const Ns = ["top", "bottom"], Gm = ["start", "end", "left", "right"];
function hi(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Xa(Ns, n) ? "start" : Xa(Gm, n) ? "top" : "center"), {
    side: gi(n, t),
    align: gi(a, t)
  };
}
function gi(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function ql(e) {
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
function Xl(e) {
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
function po(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function So(e) {
  return Xa(Ns, e.side) ? "y" : "x";
}
class mn {
  constructor(t) {
    let {
      x: n,
      y: a,
      width: l,
      height: i
    } = t;
    this.x = n, this.y = a, this.width = l, this.height = i;
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
function ko(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function Hs(e) {
  return Array.isArray(e) ? new mn({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function nr(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, i, r, o, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = +l[0], r = +l[5], o = +l[12], s = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = +l[0], r = +l[3], o = +l[4], s = +l[5];
    else
      return new mn(t);
    const u = n.transformOrigin, d = t.x - o - (1 - i) * parseFloat(u), v = t.y - s - (1 - r) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = i ? t.width / i : e.offsetWidth + 1, m = r ? t.height / r : e.offsetHeight + 1;
    return new mn({
      x: d,
      y: v,
      width: f,
      height: m
    });
  } else
    return new mn(t);
}
function dn(e, t, n) {
  if (typeof e.animate > "u")
    return {
      finished: Promise.resolve()
    };
  let a;
  try {
    a = e.animate(t, n);
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
const Ua = /* @__PURE__ */ new WeakMap();
function qm(e, t) {
  Object.keys(t).forEach((n) => {
    if (sl(n)) {
      const a = Ls(n), l = Ua.get(e);
      if (t[n] == null)
        l == null || l.forEach((i) => {
          const [r, o] = i;
          r === a && (e.removeEventListener(a, o), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, t[n]]), Ua.has(e) || Ua.set(e, i);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Xm(e, t) {
  Object.keys(t).forEach((n) => {
    if (sl(n)) {
      const a = Ls(n), l = Ua.get(e);
      l == null || l.forEach((i) => {
        const [r, o] = i;
        r === a && (e.removeEventListener(a, o), l.delete(i));
      });
    } else
      e.removeAttribute(n);
  });
}
const Bn = 2.4, wo = 0.2126729, Co = 0.7151522, Vo = 0.072175, Zm = 0.55, Jm = 0.58, Qm = 0.57, eh = 0.62, za = 0.03, xo = 1.45, th = 5e-4, nh = 1.25, ah = 1.25, Po = 0.078, Io = 12.82051282051282, Ya = 0.06, To = 1e-3;
function Do(e, t) {
  const n = (e.r / 255) ** Bn, a = (e.g / 255) ** Bn, l = (e.b / 255) ** Bn, i = (t.r / 255) ** Bn, r = (t.g / 255) ** Bn, o = (t.b / 255) ** Bn;
  let s = n * wo + a * Co + l * Vo, u = i * wo + r * Co + o * Vo;
  if (s <= za && (s += (za - s) ** xo), u <= za && (u += (za - u) ** xo), Math.abs(u - s) < th)
    return 0;
  let d;
  if (u > s) {
    const v = (u ** Zm - s ** Jm) * nh;
    d = v < To ? 0 : v < Po ? v - v * Io * Ya : v - Ya;
  } else {
    const v = (u ** eh - s ** Qm) * ah;
    d = v > -To ? 0 : v > -Po ? v - v * Io * Ya : v + Ya;
  }
  return d * 100;
}
function Nt(e) {
  rl(`Vuetify: ${e}`);
}
function Za(e) {
  rl(`Vuetify error: ${e}`);
}
function lh(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, rl(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
const Ja = 0.20689655172413793, ih = (e) => e > Ja ** 3 ? Math.cbrt(e) : e / (3 * Ja ** 2) + 4 / 29, rh = (e) => e > Ja ? e ** 3 : 3 * Ja ** 2 * (e - 4 / 29);
function js(e) {
  const t = ih, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function zs(e) {
  const t = rh, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const oh = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], sh = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, uh = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], ch = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Ys(e) {
  const t = Array(3), n = sh, a = oh;
  for (let l = 0; l < 3; ++l)
    t[l] = Math.round(Ue(n(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function ar(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const l = [0, 0, 0], i = ch, r = uh;
  t = i(t / 255), n = i(n / 255), a = i(a / 255);
  for (let o = 0; o < 3; ++o)
    l[o] = r[o][0] * t + r[o][1] * n + r[o][2] * a;
  return l;
}
function yi(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function dh(e) {
  return yi(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Ao = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, fh = {
  rgb: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  rgba: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  hsl: (e, t, n, a) => Mo({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsla: (e, t, n, a) => Mo({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsv: (e, t, n, a) => zt({
    h: e,
    s: t,
    v: n,
    a
  }),
  hsva: (e, t, n, a) => zt({
    h: e,
    s: t,
    v: n,
    a
  })
};
function Ct(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Nt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Ao.test(e)) {
    const {
      groups: t
    } = e.match(Ao), {
      fn: n,
      values: a
    } = t, l = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return fh[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || Nt(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Nt(`'${e}' is not a valid hex(a) color`), qs(t);
  } else if (typeof e == "object") {
    if (cn(e, ["r", "g", "b"]))
      return e;
    if (cn(e, ["h", "s", "l"]))
      return zt(lr(e));
    if (cn(e, ["h", "s", "v"]))
      return zt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function zt(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, i = (o) => {
    const s = (o + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, r = [i(5), i(3), i(1)].map((o) => Math.round(o * 255));
  return {
    r: r[0],
    g: r[1],
    b: r[2],
    a: l
  };
}
function Mo(e) {
  return zt(lr(e));
}
function cl(e) {
  if (!e)
    return {
      h: 0,
      s: 1,
      v: 1,
      a: 1
    };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), i = Math.min(t, n, a);
  let r = 0;
  l !== i && (l === t ? r = 60 * (0 + (n - a) / (l - i)) : l === n ? r = 60 * (2 + (a - t) / (l - i)) : l === a && (r = 60 * (4 + (t - n) / (l - i)))), r < 0 && (r = r + 360);
  const o = l === 0 ? 0 : (l - i) / l, s = [r, o, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function Ws(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, i = a - a * n / 2, r = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return {
    h: t,
    s: r,
    l: i,
    a: l
  };
}
function lr(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: l
  } = e, i = a + n * Math.min(a, 1 - a), r = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: t,
    s: r,
    v: i,
    a: l
  };
}
function Us(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Ks(e) {
  return Us(zt(e));
}
function Wa(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Gs(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return `#${[Wa(t), Wa(n), Wa(a), l !== void 0 ? Wa(Math.round(l * 255)) : ""].join("")}`;
}
function qs(e) {
  e = vh(e);
  let [t, n, a, l] = Ym(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: t,
    g: n,
    b: a,
    a: l
  };
}
function Xs(e) {
  const t = qs(e);
  return cl(t);
}
function Zs(e) {
  return Gs(zt(e));
}
function vh(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = ho(ho(e, 6), 8, "F")), e;
}
function mh(e, t) {
  const n = js(ar(e));
  return n[0] = n[0] + t * 10, Ys(zs(n));
}
function hh(e, t) {
  const n = js(ar(e));
  return n[0] = n[0] - t * 10, Ys(zs(n));
}
function bi(e) {
  const t = Ct(e);
  return ar(t)[1];
}
function gh(e, t) {
  const n = bi(e), a = bi(t), l = Math.max(n, a), i = Math.min(n, a);
  return (l + 0.05) / (i + 0.05);
}
function Js(e) {
  const t = Math.abs(Do(Ct(0), Ct(e)));
  return Math.abs(Do(Ct(16777215), Ct(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function E(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const r = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return n && l in n ? a[l] = {
      ...r,
      default: n[l]
    } : a[l] = r, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const Q = E({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Fn = Symbol.for("vuetify:defaults");
function yh(e) {
  return Y(e);
}
function ir() {
  const e = ke(Fn);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function _e(e, t) {
  const n = ir(), a = Y(e), l = b(() => {
    if (mt(t == null ? void 0 : t.disabled))
      return n.value;
    const r = mt(t == null ? void 0 : t.scoped), o = mt(t == null ? void 0 : t.reset), s = mt(t == null ? void 0 : t.root);
    if (a.value == null && !(r || o || s))
      return n.value;
    let u = bt(a.value, {
      prev: n.value
    });
    if (r)
      return u;
    if (o || s) {
      const d = Number(o || 1 / 0);
      for (let v = 0; v <= d && !(!u || !("prev" in u)); v++)
        u = u.prev;
      return u && typeof s == "string" && s in u && (u = bt(bt(u, {
        prev: u
      }), u[s])), u;
    }
    return u.prev ? bt(u.prev, u) : u;
  });
  return Ee(Fn, l), l;
}
function bh(e, t) {
  var n, a;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((a = e.props) == null ? void 0 : a[vn(t)]) < "u";
}
function ph() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ir();
  const a = Ye("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const l = b(() => {
    var s;
    return (s = n.value) == null ? void 0 : s[e._as ?? t];
  }), i = new Proxy(e, {
    get(s, u) {
      var v, f, m, g;
      const d = Reflect.get(s, u);
      return u === "class" || u === "style" ? [(v = l.value) == null ? void 0 : v[u], d].filter((h) => h != null) : typeof u == "string" && !bh(a.vnode, u) ? ((f = l.value) == null ? void 0 : f[u]) ?? ((g = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : g[u]) ?? d : d;
    }
  }), r = G();
  Ze(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((u) => {
        let [d] = u;
        return d.startsWith(d[0].toUpperCase());
      });
      r.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      r.value = void 0;
  });
  function o() {
    const s = Vh(Fn, a);
    Ee(Fn, b(() => r.value ? bt((s == null ? void 0 : s.value) ?? {}, r.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: o
  };
}
function pt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Nt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = E(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return Es(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = ir();
      if (!i.value)
        return e._setup(a, l);
      const {
        props: r,
        provideSubDefaults: o
      } = ph(a, a._as ?? e.name, i), s = e._setup(r, l);
      return o(), s;
    };
  }
  return e;
}
function L() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? pt : Od)(t);
}
function Sh(e, t) {
  return t.props = e, t;
}
function St(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return L()({
    name: n ?? jn(ms(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...Q()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var r;
        return Cn(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (r = i.default) == null ? void 0 : r.call(i));
      };
    }
  });
}
function Qs(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const ha = "cubic-bezier(0.4, 0, 0.2, 1)", kh = "cubic-bezier(0.0, 0, 0.2, 1)", wh = "cubic-bezier(0.4, 0, 1, 1)";
function Bo(e, t, n) {
  return Object.keys(e).filter((a) => sl(a) && a.endsWith(t)).reduce((a, l) => (a[l.slice(0, -t.length)] = (i) => e[l](i, n(i)), a), {});
}
function Ye(e, t) {
  const n = fs();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function Rt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ye(e).type;
  return vn((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
let eu = 0, Ka = /* @__PURE__ */ new WeakMap();
function rt() {
  const e = Ye("getUid");
  if (Ka.has(e))
    return Ka.get(e);
  {
    const t = eu++;
    return Ka.set(e, t), t;
  }
}
rt.reset = () => {
  eu = 0, Ka = /* @__PURE__ */ new WeakMap();
};
function rr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? Ch(e) : or(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Qa(e, t) {
  const n = [];
  if (t && e && !t.contains(e))
    return n;
  for (; e && (or(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function or(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Ch(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Vh(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ye("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
function xh(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function F(e) {
  const t = Ye("useRender");
  t.render = e;
}
function ue(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const i = Ye("useProxiedModel"), r = Y(e[t] !== void 0 ? e[t] : n), o = vn(t), u = o !== t ? b(() => {
    var v, f, m, g;
    return e[t], !!(((v = i.vnode.props) != null && v.hasOwnProperty(t) || (f = i.vnode.props) != null && f.hasOwnProperty(o)) && ((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`) || (g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${o}`)));
  }) : b(() => {
    var v, f;
    return e[t], !!((v = i.vnode.props) != null && v.hasOwnProperty(t) && ((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)));
  });
  Bt(() => !u.value, () => {
    q(() => e[t], (v) => {
      r.value = v;
    });
  });
  const d = b({
    get() {
      const v = e[t];
      return a(u.value ? v : r.value);
    },
    set(v) {
      const f = l(v), m = en(u.value ? e[t] : r.value);
      m === f || a(m) === v || (r.value = f, i == null || i.emit(`update:${t}`, f));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => u.value ? e[t] : r.value
  }), d;
}
const Ph = {
  badge: "Badge",
  open: "Open",
  close: "Close",
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
    pm: "PM"
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
}, Eo = "$vuetify.", Oo = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[+a])), tu = (e, t, n) => function(a) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), r = 1; r < l; r++)
    i[r - 1] = arguments[r];
  if (!a.startsWith(Eo))
    return Oo(a, i);
  const o = a.replace(Eo, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let d = gn(s, o, null);
  return d || (Nt(`Translation key "${a}" not found in "${e.value}", trying fallback locale`), d = gn(u, o, null)), d || (Za(`Translation key "${a}" not found in fallback`), d = a), typeof d != "string" && (Za(`Translation key "${a}" has a non-string value`), d = a), Oo(d, i);
};
function nu(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function Zl(e, t, n) {
  const a = ue(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, q(n, (l) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function au(e) {
  return (t) => {
    const n = Zl(t, "locale", e.current), a = Zl(t, "fallback", e.fallback), l = Zl(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: a,
      messages: l,
      t: tu(n, a, l),
      n: nu(n, a),
      provide: au({
        current: n,
        fallback: a,
        messages: l
      })
    };
  };
}
function Ih(e) {
  const t = G((e == null ? void 0 : e.locale) ?? "en"), n = G((e == null ? void 0 : e.fallback) ?? "en"), a = Y({
    en: Ph,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: a,
    t: tu(t, n, a),
    n: nu(t, n),
    provide: au({
      current: t,
      fallback: n,
      messages: a
    })
  };
}
const Rn = Symbol.for("vuetify:locale");
function Th(e) {
  return e.name != null;
}
function Dh(e) {
  const t = e != null && e.adapter && Th(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : Ih(e), n = Bh(t, e);
  return {
    ...t,
    ...n
  };
}
function We() {
  const e = ke(Rn);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Ah(e) {
  const t = ke(Rn);
  if (!t)
    throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = Eh(n, t.rtl, e), l = {
    ...n,
    ...a
  };
  return Ee(Rn, l), l;
}
function Mh() {
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
function Bh(e, t) {
  const n = Y((t == null ? void 0 : t.rtl) ?? Mh()), a = b(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: b(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Eh(e, t, n) {
  const a = b(() => n.rtl ?? t.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: b(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Je() {
  const e = ke(Rn);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const pi = {
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
function Oh(e, t) {
  const n = [];
  let a = [];
  const l = lu(e), i = iu(e), r = (l.getDay() - pi[t.slice(-2).toUpperCase()] + 7) % 7, o = (i.getDay() - pi[t.slice(-2).toUpperCase()] + 7) % 7;
  for (let s = 0; s < r; s++) {
    const u = new Date(l);
    u.setDate(u.getDate() - (r - s)), a.push(u);
  }
  for (let s = 1; s <= i.getDate(); s++) {
    const u = new Date(e.getFullYear(), e.getMonth(), s);
    a.push(u), a.length === 7 && (n.push(a), a = []);
  }
  for (let s = 1; s < 7 - o; s++) {
    const u = new Date(i);
    u.setDate(u.getDate() + s), a.push(u);
  }
  return a.length > 0 && n.push(a), n;
}
function $h(e) {
  const t = new Date(e);
  for (; t.getDay() !== 0; )
    t.setDate(t.getDate() - 1);
  return t;
}
function _h(e) {
  const t = new Date(e);
  for (; t.getDay() !== 6; )
    t.setDate(t.getDate() + 1);
  return t;
}
function lu(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function iu(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Lh(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const Fh = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function ru(e) {
  if (e == null)
    return /* @__PURE__ */ new Date();
  if (e instanceof Date)
    return e;
  if (typeof e == "string") {
    let t;
    if (Fh.test(e))
      return Lh(e);
    if (t = Date.parse(e), !isNaN(t))
      return new Date(t);
  }
  return null;
}
const $o = new Date(2e3, 0, 2);
function Rh(e) {
  const t = pi[e.slice(-2).toUpperCase()];
  return _t(7).map((n) => {
    const a = new Date($o);
    return a.setDate($o.getDate() + t + n), new Intl.DateTimeFormat(e, {
      weekday: "short"
    }).format(a);
  });
}
function Nh(e, t, n, a) {
  const l = ru(e) ?? /* @__PURE__ */ new Date(), i = a == null ? void 0 : a[t];
  if (typeof i == "function")
    return i(l, t, n);
  let r = {};
  switch (t) {
    case "fullDateWithWeekday":
      r = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      };
      break;
    case "hours12h":
      r = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "normalDateWithWeekday":
      r = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "keyboardDate":
      r = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      r = {
        month: "long",
        day: "numeric"
      };
      break;
    case "monthAndYear":
      r = {
        month: "long",
        year: "numeric"
      };
      break;
    case "month":
      r = {
        month: "long"
      };
      break;
    case "monthShort":
      r = {
        month: "short"
      };
      break;
    case "dayOfMonth":
      r = {
        day: "numeric"
      };
      break;
    case "shortDate":
      r = {
        year: "2-digit",
        month: "numeric",
        day: "numeric"
      };
      break;
    case "weekdayShort":
      r = {
        weekday: "short"
      };
      break;
    case "year":
      r = {
        year: "numeric"
      };
      break;
    default:
      r = i ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(n, r).format(l);
}
function Hh(e, t) {
  const n = e.toJsDate(t), a = n.getFullYear(), l = go(String(n.getMonth() + 1), 2, "0"), i = go(String(n.getDate()), 2, "0");
  return `${a}-${l}-${i}`;
}
function jh(e) {
  const [t, n, a] = e.split("-").map(Number);
  return new Date(t, n - 1, a);
}
function zh(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function Yh(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Wh(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function Uh(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function Kh(e, t) {
  const n = new Date(e);
  return n.setMonth(n.getMonth() + t), n;
}
function Gh(e) {
  return e.getFullYear();
}
function qh(e) {
  return e.getMonth();
}
function Xh(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function Zh(e) {
  return e.getHours();
}
function Jh(e) {
  return e.getMinutes();
}
function Qh(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function eg(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function tg(e, t) {
  return Si(e, t[0]) && ag(e, t[1]);
}
function ng(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Si(e, t) {
  return e.getTime() > t.getTime();
}
function ag(e, t) {
  return e.getTime() < t.getTime();
}
function _o(e, t) {
  return e.getTime() === t.getTime();
}
function lg(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function ig(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function rg(e, t, n) {
  const a = new Date(e), l = new Date(t);
  return n === "month" ? a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12 : Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
}
function og(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function sg(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function ug(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function cg(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function dg(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function fg(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class vg {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return ru(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return Hh(this, t);
  }
  parseISO(t) {
    return jh(t);
  }
  addMinutes(t, n) {
    return zh(t, n);
  }
  addHours(t, n) {
    return Yh(t, n);
  }
  addDays(t, n) {
    return Wh(t, n);
  }
  addWeeks(t, n) {
    return Uh(t, n);
  }
  addMonths(t, n) {
    return Kh(t, n);
  }
  getWeekArray(t) {
    return Oh(t, this.locale);
  }
  startOfWeek(t) {
    return $h(t);
  }
  endOfWeek(t) {
    return _h(t);
  }
  startOfMonth(t) {
    return lu(t);
  }
  endOfMonth(t) {
    return iu(t);
  }
  format(t, n) {
    return Nh(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return _o(t, n);
  }
  isValid(t) {
    return ng(t);
  }
  isWithinRange(t, n) {
    return tg(t, n);
  }
  isAfter(t, n) {
    return Si(t, n);
  }
  isBefore(t, n) {
    return !Si(t, n) && !_o(t, n);
  }
  isSameDay(t, n) {
    return lg(t, n);
  }
  isSameMonth(t, n) {
    return ig(t, n);
  }
  setMinutes(t, n) {
    return sg(t, n);
  }
  setHours(t, n) {
    return og(t, n);
  }
  setMonth(t, n) {
    return ug(t, n);
  }
  setYear(t, n) {
    return cg(t, n);
  }
  getDiff(t, n, a) {
    return rg(t, n, a);
  }
  getWeekdays() {
    return Rh(this.locale);
  }
  getYear(t) {
    return Gh(t);
  }
  getMonth(t) {
    return qh(t);
  }
  getNextMonth(t) {
    return Xh(t);
  }
  getHours(t) {
    return Zh(t);
  }
  getMinutes(t) {
    return Jh(t);
  }
  startOfDay(t) {
    return dg(t);
  }
  endOfDay(t) {
    return fg(t);
  }
  startOfYear(t) {
    return Qh(t);
  }
  endOfYear(t) {
    return eg(t);
  }
}
const ou = Symbol.for("vuetify:date-options"), Lo = Symbol.for("vuetify:date-adapter");
function mg(e, t) {
  const n = bt({
    adapter: vg,
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
    options: n,
    instance: su(n, t)
  };
}
function su(e, t) {
  const n = gt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return q(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function Pa() {
  const e = ke(ou);
  if (!e)
    throw new Error("[Vuetify] Could not find injected date options");
  const t = We();
  return su(e, t);
}
function hg(e, t) {
  const n = e.toJsDate(t);
  let a = n.getFullYear(), l = new Date(a, 0, 1);
  if (n < l)
    a = a - 1, l = new Date(a, 0, 1);
  else {
    const o = new Date(a + 1, 0, 1);
    n >= o && (a = a + 1, l = o);
  }
  const i = Math.abs(n.getTime() - l.getTime()), r = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(r / 7) + 1;
}
const dl = ["sm", "md", "lg", "xl", "xxl"], ki = Symbol.for("vuetify:display"), Fo = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, gg = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fo;
  return bt(Fo, e);
};
function Ro(e) {
  return De && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function No(e) {
  return De && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Ho(e) {
  const t = De && !e ? window.navigator.userAgent : "ssr";
  function n(g) {
    return !!t.match(g);
  }
  const a = n(/android/i), l = n(/iphone|ipad|ipod/i), i = n(/cordova/i), r = n(/electron/i), o = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), d = n(/opera/i), v = n(/win/i), f = n(/mac/i), m = n(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: i,
    electron: r,
    chrome: o,
    edge: s,
    firefox: u,
    opera: d,
    win: v,
    mac: f,
    linux: m,
    touch: $m,
    ssr: t === "ssr"
  };
}
function yg(e, t) {
  const {
    thresholds: n,
    mobileBreakpoint: a
  } = gg(e), l = G(No(t)), i = G(Ho(t)), r = gt({}), o = G(Ro(t));
  function s() {
    l.value = No(), o.value = Ro();
  }
  function u() {
    s(), i.value = Ho();
  }
  return Ze(() => {
    const d = o.value < n.sm, v = o.value < n.md && !d, f = o.value < n.lg && !(v || d), m = o.value < n.xl && !(f || v || d), g = o.value < n.xxl && !(m || f || v || d), h = o.value >= n.xxl, y = d ? "xs" : v ? "sm" : f ? "md" : m ? "lg" : g ? "xl" : "xxl", p = typeof a == "number" ? a : n[a], S = o.value < p;
    r.xs = d, r.sm = v, r.md = f, r.lg = m, r.xl = g, r.xxl = h, r.smAndUp = !d, r.mdAndUp = !(d || v), r.lgAndUp = !(d || v || f), r.xlAndUp = !(d || v || f || m), r.smAndDown = !(f || m || g || h), r.mdAndDown = !(m || g || h), r.lgAndDown = !(g || h), r.xlAndDown = !h, r.name = y, r.height = l.value, r.width = o.value, r.mobile = S, r.mobileBreakpoint = a, r.platform = i.value, r.thresholds = n;
  }), De && window.addEventListener("resize", s, {
    passive: !0
  }), {
    ...il(r),
    update: u,
    ssr: !!t
  };
}
const sr = E({
  mobileBreakpoint: [Number, String]
}, "display");
function Vn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt();
  const n = ke(ki);
  if (!n)
    throw new Error("Could not find Vuetify display injection");
  const a = b(() => {
    if (!e.mobileBreakpoint)
      return n.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
    return n.width.value < i;
  }), l = b(() => t ? {
    [`${t}--mobile`]: a.value
  } : {});
  return {
    ...n,
    displayClasses: l,
    mobile: a
  };
}
const bg = Symbol.for("vuetify:goto");
function pg() {
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
function Sg(e, t) {
  return {
    rtl: t.isRtl,
    options: bt(pg(), e)
  };
}
const kg = {
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
  eyeDropper: "mdi-eyedropper"
}, wg = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => Cn(cr, {
    ...e,
    class: "mdi"
  })
}, fe = [String, Function, Object, Array], wi = Symbol.for("vuetify:icons"), fl = E({
  icon: {
    type: fe
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Ci = L()({
  name: "VComponentIcon",
  props: fl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const a = e.icon;
      return c(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? c(a, null, null) : (l = n.default) == null ? void 0 : l.call(n)];
        }
      });
    };
  }
}), ur = pt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: fl(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => c(e.tag, D(n, {
      style: null
    }), {
      default: () => [c("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? c("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : c("path", {
        d: a
      }, null)) : c("path", {
        d: e.icon
      }, null)])]
    });
  }
}), Cg = pt({
  name: "VLigatureIcon",
  props: fl(),
  setup(e) {
    return () => c(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), cr = pt({
  name: "VClassIcon",
  props: fl(),
  setup(e) {
    return () => c(e.tag, {
      class: e.icon
    }, null);
  }
}), Vg = {
  svg: {
    component: ur
  },
  class: {
    component: cr
  }
};
function xg(e) {
  return bt({
    defaultSet: "mdi",
    sets: {
      ...Vg,
      mdi: wg
    },
    aliases: {
      ...kg,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"
      /* eslint-enable max-len */
    }
  }, e);
}
const Pg = (e) => {
  const t = ke(wi);
  if (!t)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: b(() => {
      var s;
      const a = mt(e);
      if (!a)
        return {
          component: Ci
        };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = t.aliases) == null ? void 0 : s[l.slice(1)])), !l)
        throw new Error(`Could not find aliased icon "${a}"`);
      if (Array.isArray(l))
        return {
          component: ur,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Ci,
          icon: l
        };
      const i = Object.keys(t.sets).find((u) => typeof l == "string" && l.startsWith(`${u}:`)), r = i ? l.slice(i.length + 1) : l;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: r
      };
    })
  };
}, ga = Symbol.for("vuetify:theme"), Se = E({
  theme: String
}, "theme");
function jo() {
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
function Ig() {
  var a, l;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : jo();
  const t = jo();
  if (!e)
    return {
      ...t,
      isDisabled: !0
    };
  const n = {};
  for (const [i, r] of Object.entries(e.themes ?? {})) {
    const o = r.dark || i === "dark" ? (a = t.themes) == null ? void 0 : a.dark : (l = t.themes) == null ? void 0 : l.light;
    n[i] = bt(o, r);
  }
  return bt(t, {
    ...e,
    themes: n
  });
}
function Tg(e) {
  const t = Ig(e), n = Y(t.defaultTheme), a = Y(t.themes), l = b(() => {
    const d = {};
    for (const [v, f] of Object.entries(a.value)) {
      const m = d[v] = {
        ...f,
        colors: {
          ...f.colors
        }
      };
      if (t.variations)
        for (const g of t.variations.colors) {
          const h = m.colors[g];
          if (h)
            for (const y of ["lighten", "darken"]) {
              const p = y === "lighten" ? mh : hh;
              for (const S of _t(t.variations[y], 1))
                m.colors[`${g}-${y}-${S}`] = Gs(p(Ct(h), S));
            }
        }
      for (const g of Object.keys(m.colors)) {
        if (/^on-[a-z]/.test(g) || m.colors[`on-${g}`])
          continue;
        const h = `on-${g}`, y = Ct(m.colors[g]);
        m.colors[h] = Js(y);
      }
    }
    return d;
  }), i = b(() => l.value[n.value]), r = b(() => {
    const d = [];
    i.value.dark && un(d, ":root", ["color-scheme: dark"]), un(d, ":root", zo(i.value));
    for (const [g, h] of Object.entries(l.value))
      un(d, `.v-theme--${g}`, [`color-scheme: ${h.dark ? "dark" : "normal"}`, ...zo(h)]);
    const v = [], f = [], m = new Set(Object.values(l.value).flatMap((g) => Object.keys(g.colors)));
    for (const g of m)
      /^on-[a-z]/.test(g) ? un(f, `.${g}`, [`color: rgb(var(--v-theme-${g})) !important`]) : (un(v, `.bg-${g}`, [`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${g})) !important`, `color: rgb(var(--v-theme-on-${g})) !important`]), un(f, `.text-${g}`, [`color: rgb(var(--v-theme-${g})) !important`]), un(f, `.border-${g}`, [`--v-border-color: var(--v-theme-${g})`]));
    return d.push(...v, ...f), d.map((g, h) => h === 0 ? g : `    ${g}`).join("");
  });
  function o() {
    return {
      style: [{
        children: r.value,
        id: "vuetify-theme-stylesheet",
        nonce: t.cspNonce || !1
      }]
    };
  }
  function s(d) {
    if (t.isDisabled)
      return;
    const v = d._context.provides.usehead;
    if (v)
      if (v.push) {
        const f = v.push(o);
        De && q(r, () => {
          f.patch(o);
        });
      } else
        De ? (v.addHeadObjs(b(o)), Ze(() => v.updateDOM())) : v.addHeadObjs(o());
    else {
      let m = function() {
        if (typeof document < "u" && !f) {
          const g = document.createElement("style");
          g.type = "text/css", g.id = "vuetify-theme-stylesheet", t.cspNonce && g.setAttribute("nonce", t.cspNonce), f = g, document.head.appendChild(f);
        }
        f && (f.innerHTML = r.value);
      }, f = De ? document.getElementById("vuetify-theme-stylesheet") : null;
      De ? q(r, m, {
        immediate: !0
      }) : m();
    }
  }
  const u = b(() => t.isDisabled ? void 0 : `v-theme--${n.value}`);
  return {
    install: s,
    isDisabled: t.isDisabled,
    name: n,
    themes: a,
    current: i,
    computedThemes: l,
    themeClasses: u,
    styles: r,
    global: {
      name: n,
      current: i
    }
  };
}
function xe(e) {
  Ye("provideTheme");
  const t = ke(ga, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = b(() => e.theme ?? t.name.value), a = b(() => t.themes.value[n.value]), l = b(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...t,
    name: n,
    current: a,
    themeClasses: l
  };
  return Ee(ga, i), i;
}
function uu() {
  Ye("useTheme");
  const e = ke(ga, null);
  if (!e)
    throw new Error("Could not find Vuetify theme injection");
  return e;
}
function un(e, t, n) {
  e.push(`${t} {
`, ...n.map((a) => `  ${a};
`), `}
`);
}
function zo(e) {
  const t = e.dark ? 2 : 1, n = e.dark ? 1 : 2, a = [];
  for (const [l, i] of Object.entries(e.colors)) {
    const r = Ct(i);
    a.push(`--v-theme-${l}: ${r.r},${r.g},${r.b}`), l.startsWith("on-") || a.push(`--v-theme-${l}-overlay-multiplier: ${bi(i) > 0.18 ? t : n}`);
  }
  for (const [l, i] of Object.entries(e.variables)) {
    const r = typeof i == "string" && i.startsWith("#") ? Ct(i) : void 0, o = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    a.push(`--v-${l}: ${o ?? i}`);
  }
  return a;
}
function Lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = Y(), a = Y();
  if (De) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (t === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    dt(() => {
      l.disconnect();
    }), q(n, (i, r) => {
      r && (l.unobserve(va(r)), a.value = void 0), i && l.observe(va(i));
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: ll(a)
  };
}
const el = Symbol.for("vuetify:layout"), cu = Symbol.for("vuetify:layout-item"), Yo = 1e3, du = E({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), Yn = E({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function Dg() {
  const e = ke(el);
  if (!e)
    throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function Wn(e) {
  const t = ke(el);
  if (!t)
    throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${rt()}`, a = Ye("useLayoutItem");
  Ee(cu, {
    id: n
  });
  const l = G(!1);
  $d(() => l.value = !0), _d(() => l.value = !1);
  const {
    layoutItemStyles: i,
    layoutItemScrimStyles: r
  } = t.register(a, {
    ...e,
    active: b(() => l.value ? !1 : e.active.value),
    id: n
  });
  return dt(() => t.unregister(n)), {
    layoutItemStyles: i,
    layoutRect: t.layoutRect,
    layoutItemScrimStyles: r
  };
}
const Ag = (e, t, n, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const i = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const r of e) {
    const o = t.get(r), s = n.get(r), u = a.get(r);
    if (!o || !s || !u)
      continue;
    const d = {
      ...l,
      [o.value]: parseInt(l[o.value], 10) + (u.value ? parseInt(s.value, 10) : 0)
    };
    i.push({
      id: r,
      layer: d
    }), l = d;
  }
  return i;
};
function fu(e) {
  const t = ke(el, null), n = b(() => t ? t.rootZIndex.value - 100 : Yo), a = Y([]), l = gt(/* @__PURE__ */ new Map()), i = gt(/* @__PURE__ */ new Map()), r = gt(/* @__PURE__ */ new Map()), o = gt(/* @__PURE__ */ new Map()), s = gt(/* @__PURE__ */ new Map()), {
    resizeRef: u,
    contentRect: d
  } = Lt(), v = b(() => {
    const C = /* @__PURE__ */ new Map(), k = e.overlaps ?? [];
    for (const V of k.filter((x) => x.includes(":"))) {
      const [x, T] = V.split(":");
      if (!a.value.includes(x) || !a.value.includes(T))
        continue;
      const M = l.get(x), A = l.get(T), B = i.get(x), O = i.get(T);
      !M || !A || !B || !O || (C.set(T, {
        position: M.value,
        amount: parseInt(B.value, 10)
      }), C.set(x, {
        position: A.value,
        amount: -parseInt(O.value, 10)
      }));
    }
    return C;
  }), f = b(() => {
    const C = [...new Set([...r.values()].map((V) => V.value))].sort((V, x) => V - x), k = [];
    for (const V of C) {
      const x = a.value.filter((T) => {
        var M;
        return ((M = r.get(T)) == null ? void 0 : M.value) === V;
      });
      k.push(...x);
    }
    return Ag(k, l, i, o);
  }), m = b(() => !Array.from(s.values()).some((C) => C.value)), g = b(() => f.value[f.value.length - 1].layer), h = b(() => ({
    "--v-layout-left": J(g.value.left),
    "--v-layout-right": J(g.value.right),
    "--v-layout-top": J(g.value.top),
    "--v-layout-bottom": J(g.value.bottom),
    ...m.value ? void 0 : {
      transition: "none"
    }
  })), y = b(() => f.value.slice(1).map((C, k) => {
    let {
      id: V
    } = C;
    const {
      layer: x
    } = f.value[k], T = i.get(V), M = l.get(V);
    return {
      id: V,
      ...x,
      size: Number(T.value),
      position: M.value
    };
  })), p = (C) => y.value.find((k) => k.id === C), S = Ye("createLayout"), I = G(!1);
  tt(() => {
    I.value = !0;
  }), Ee(el, {
    register: (C, k) => {
      let {
        id: V,
        order: x,
        position: T,
        layoutSize: M,
        elementSize: A,
        active: B,
        disableTransitions: O,
        absolute: H
      } = k;
      r.set(V, x), l.set(V, T), i.set(V, M), o.set(V, B), O && s.set(V, O);
      const ee = na(cu, S == null ? void 0 : S.vnode).indexOf(C);
      ee > -1 ? a.value.splice(ee, 0, V) : a.value.push(V);
      const $ = b(() => y.value.findIndex((X) => X.id === V)), R = b(() => n.value + f.value.length * 2 - $.value * 2), j = b(() => {
        const X = T.value === "left" || T.value === "right", K = T.value === "right", ie = T.value === "bottom", ne = {
          [T.value]: 0,
          zIndex: R.value,
          transform: `translate${X ? "X" : "Y"}(${(B.value ? 0 : -110) * (K || ie ? -1 : 1)}%)`,
          position: H.value || n.value !== Yo ? "absolute" : "fixed",
          ...m.value ? void 0 : {
            transition: "none"
          }
        };
        if (!I.value)
          return ne;
        const z = y.value[$.value];
        if (!z)
          throw new Error(`[Vuetify] Could not find layout item "${V}"`);
        const ae = v.value.get(V);
        return ae && (z[ae.position] += ae.amount), {
          ...ne,
          height: X ? `calc(100% - ${z.top}px - ${z.bottom}px)` : A.value ? `${A.value}px` : void 0,
          left: K ? void 0 : `${z.left}px`,
          right: K ? `${z.right}px` : void 0,
          top: T.value !== "bottom" ? `${z.top}px` : void 0,
          bottom: T.value !== "top" ? `${z.bottom}px` : void 0,
          width: X ? A.value ? `${A.value}px` : void 0 : `calc(100% - ${z.left}px - ${z.right}px)`
        };
      }), N = b(() => ({
        zIndex: R.value - 1
      }));
      return {
        layoutItemStyles: j,
        layoutItemScrimStyles: N,
        zIndex: R
      };
    },
    unregister: (C) => {
      r.delete(C), l.delete(C), i.delete(C), o.delete(C), s.delete(C), a.value = a.value.filter((k) => k !== C);
    },
    mainRect: g,
    mainStyles: h,
    getLayoutItem: p,
    items: y,
    layoutRect: d,
    rootZIndex: n
  });
  const w = b(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), P = b(() => ({
    zIndex: t ? n.value : void 0,
    position: t ? "relative" : void 0,
    overflow: t ? "hidden" : void 0
  }));
  return {
    layoutClasses: w,
    layoutStyles: P,
    getLayoutItem: p,
    items: y,
    layoutRect: d,
    layoutRef: u
  };
}
function vu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...n
  } = e, a = bt(t, n), {
    aliases: l = {},
    components: i = {},
    directives: r = {}
  } = a, o = yh(a.defaults), s = yg(a.display, a.ssr), u = Tg(a.theme), d = xg(a.icons), v = Dh(a.locale), f = mg(a.date, v), m = Sg(a.goTo, v);
  return {
    install: (h) => {
      for (const y in r)
        h.directive(y, r[y]);
      for (const y in i)
        h.component(y, i[y]);
      for (const y in l)
        h.component(y, pt({
          ...l[y],
          name: y,
          aliasName: l[y].name
        }));
      if (u.install(h), h.provide(Fn, o), h.provide(ki, s), h.provide(ga, u), h.provide(wi, d), h.provide(Rn, v), h.provide(ou, f.options), h.provide(Lo, f.instance), h.provide(bg, m), De && a.ssr)
        if (h.$nuxt)
          h.$nuxt.hook("app:suspense:resolve", () => {
            s.update();
          });
        else {
          const {
            mount: y
          } = h;
          h.mount = function() {
            const p = y(...arguments);
            return Ce(() => s.update()), h.mount = y, p;
          };
        }
      rt.reset(), h.mixin({
        computed: {
          $vuetify() {
            return gt({
              defaults: En.call(this, Fn),
              display: En.call(this, ki),
              theme: En.call(this, ga),
              icons: En.call(this, wi),
              locale: En.call(this, Rn),
              date: En.call(this, Lo)
            });
          }
        }
      });
    },
    defaults: o,
    display: s,
    theme: u,
    icons: d,
    locale: v,
    date: f,
    goTo: m
  };
}
const Mg = "3.5.1";
vu.version = Mg;
function En(e) {
  var a, l;
  const t = this.$, n = ((a = t.parent) == null ? void 0 : a.provides) ?? ((l = t.vnode.appContext) == null ? void 0 : l.provides);
  if (n && e in n)
    return n[e];
}
const Bg = E({
  ...Q(),
  ...du({
    fullHeight: !0
  }),
  ...Se()
}, "VApp"), Eg = L()({
  name: "VApp",
  props: Bg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = xe(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: r,
      layoutRef: o
    } = fu(e), {
      rtlClasses: s
    } = Je();
    return F(() => {
      var u;
      return c("div", {
        ref: o,
        class: ["v-application", a.themeClasses.value, l.value, s.value, e.class],
        style: [e.style]
      }, [c("div", {
        class: "v-application__wrap"
      }, [(u = n.default) == null ? void 0 : u.call(n)])]);
    }), {
      getLayoutItem: i,
      items: r,
      theme: a
    };
  }
}), me = E({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), mu = E({
  text: String,
  ...Q(),
  ...me()
}, "VToolbarTitle"), dr = L()({
  name: "VToolbarTitle",
  props: mu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => {
      const a = !!(n.default || n.text || e.text);
      return c(e.tag, {
        class: ["v-toolbar-title", e.class],
        style: e.style
      }, {
        default: () => {
          var l;
          return [a && c("div", {
            class: "v-toolbar-title__placeholder"
          }, [n.text ? n.text() : e.text, (l = n.default) == null ? void 0 : l.call(n)])];
        }
      });
    }), {};
  }
}), Og = E({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function kt(e, t, n) {
  return L()({
    name: e,
    props: Og({
      mode: n,
      origin: t
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const r = {
        onBeforeEnter(o) {
          a.origin && (o.style.transformOrigin = a.origin);
        },
        onLeave(o) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: u,
              offsetWidth: d,
              offsetHeight: v
            } = o;
            o._transitionInitialStyles = {
              position: o.style.position,
              top: o.style.top,
              left: o.style.left,
              width: o.style.width,
              height: o.style.height
            }, o.style.position = "absolute", o.style.top = `${s}px`, o.style.left = `${u}px`, o.style.width = `${d}px`, o.style.height = `${v}px`;
          }
          a.hideOnLeave && o.style.setProperty("display", "none", "important");
        },
        onAfterLeave(o) {
          if (a.leaveAbsolute && (o != null && o._transitionInitialStyles)) {
            const {
              position: s,
              top: u,
              left: d,
              width: v,
              height: f
            } = o._transitionInitialStyles;
            delete o._transitionInitialStyles, o.style.position = s || "", o.style.top = u || "", o.style.left = d || "", o.style.width = v || "", o.style.height = f || "";
          }
        }
      };
      return () => {
        const o = a.group ? Ld : Ht;
        return Cn(o, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : r
        }, i.default);
      };
    }
  });
}
function hu(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return L()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => Cn(Ht, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, i.default);
    }
  });
}
function gu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = ms(`offset-${n}`);
  return {
    onBeforeEnter(r) {
      r._parent = r.parentNode, r._initialStyle = {
        transition: r.style.transition,
        overflow: r.style.overflow,
        [n]: r.style[n]
      };
    },
    onEnter(r) {
      const o = r._initialStyle;
      r.style.setProperty("transition", "none", "important"), r.style.overflow = "hidden";
      const s = `${r[a]}px`;
      r.style[n] = "0", r.offsetHeight, r.style.transition = o.transition, e && r._parent && r._parent.classList.add(e), requestAnimationFrame(() => {
        r.style[n] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(r) {
      r._initialStyle = {
        transition: "",
        overflow: r.style.overflow,
        [n]: r.style[n]
      }, r.style.overflow = "hidden", r.style[n] = `${r[a]}px`, r.offsetHeight, requestAnimationFrame(() => r.style[n] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(r) {
    e && r._parent && r._parent.classList.remove(e), i(r);
  }
  function i(r) {
    const o = r._initialStyle[n];
    r.style.overflow = r._initialStyle.overflow, o != null && (r.style[n] = o), delete r._initialStyle;
  }
}
const $g = E({
  target: [Object, Array]
}, "v-dialog-transition"), vl = L()({
  name: "VDialogTransition",
  props: $g(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var f;
        await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), l.style.visibility = "";
        const {
          x: r,
          y: o,
          sx: s,
          sy: u,
          speed: d
        } = Uo(e.target, l), v = dn(l, [{
          transform: `translate(${r}px, ${o}px) scale(${s}, ${u})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: kh
        });
        (f = Wo(l)) == null || f.forEach((m) => {
          dn(m, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: ha
          });
        }), v.finished.then(() => i());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var f;
        await new Promise((m) => requestAnimationFrame(m));
        const {
          x: r,
          y: o,
          sx: s,
          sy: u,
          speed: d
        } = Uo(e.target, l);
        dn(l, [{}, {
          transform: `translate(${r}px, ${o}px) scale(${s}, ${u})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: wh
        }).finished.then(() => i()), (f = Wo(l)) == null || f.forEach((m) => {
          dn(m, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: ha
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? c(Ht, D({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : c(Ht, {
      name: "dialog-transition"
    }, n);
  }
});
function Wo(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Uo(e, t) {
  const n = Hs(e), a = nr(t), [l, i] = getComputedStyle(t).transformOrigin.split(" ").map((p) => parseFloat(p)), [r, o] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  r === "left" || o === "left" ? s -= n.width / 2 : (r === "right" || o === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  r === "top" || o === "top" ? u -= n.height / 2 : (r === "bottom" || o === "bottom") && (u += n.height / 2);
  const d = n.width / a.width, v = n.height / a.height, f = Math.max(1, d, v), m = d / f || 0, g = v / f || 0, h = a.width * a.height / (window.innerWidth * window.innerHeight), y = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: u - (i + a.top),
    sx: m,
    sy: g,
    speed: y
  };
}
const _g = kt("fab-transition", "center center", "out-in"), Lg = kt("dialog-bottom-transition"), Fg = kt("dialog-top-transition"), tl = kt("fade-transition"), fr = kt("scale-transition"), Rg = kt("scroll-x-transition"), Ng = kt("scroll-x-reverse-transition"), Hg = kt("scroll-y-transition"), jg = kt("scroll-y-reverse-transition"), zg = kt("slide-x-transition"), Yg = kt("slide-x-reverse-transition"), vr = kt("slide-y-transition"), Wg = kt("slide-y-reverse-transition"), ml = hu("expand-transition", gu()), mr = hu("expand-x-transition", gu("", !0)), Ug = E({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), pe = L(!1)({
  name: "VDefaultsProvider",
  props: Ug(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: r,
      scoped: o
    } = il(e);
    return _e(a, {
      reset: i,
      root: r,
      scoped: o,
      disabled: l
    }), () => {
      var s;
      return (s = n.default) == null ? void 0 : s.call(n);
    };
  }
}), ft = E({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function vt(e) {
  return {
    dimensionStyles: b(() => ({
      height: J(e.height),
      maxHeight: J(e.maxHeight),
      maxWidth: J(e.maxWidth),
      minHeight: J(e.minHeight),
      minWidth: J(e.minWidth),
      width: J(e.width)
    }))
  };
}
function Kg(e) {
  return {
    aspectStyles: b(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const yu = E({
  aspectRatio: [String, Number],
  contentClass: String,
  inline: Boolean,
  ...Q(),
  ...ft()
}, "VResponsive"), Vi = L()({
  name: "VResponsive",
  props: yu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = Kg(e), {
      dimensionStyles: l
    } = vt(e);
    return F(() => {
      var i;
      return c("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [c("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && c("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [n.default()])]);
    }), {};
  }
});
function hr(e) {
  return er(() => {
    const t = [], n = {};
    if (e.value.background)
      if (yi(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && dh(e.value.background)) {
          const a = Ct(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = Js(a);
            n.color = l, n.caretColor = l;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (yi(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function lt(e, t) {
  const n = b(() => ({
    text: xa(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = hr(n);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function Ae(e, t) {
  const n = b(() => ({
    background: xa(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = hr(n);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const Oe = E({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  }
}, "rounded");
function Re(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt();
  return {
    roundedClasses: b(() => {
      const a = xa(e) ? e.value : e.rounded, l = [];
      if (a === !0 || a === "")
        l.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`rounded-${i}`);
      return l;
    })
  };
}
const Kt = E({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Vt = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    disabled: l,
    ...i
  } = e, {
    component: r = Ht,
    ...o
  } = typeof a == "object" ? a : {};
  return Cn(r, D(typeof a == "string" ? {
    name: l ? "" : a
  } : o, i, {
    disabled: l
  }), n);
};
function Gg(e, t) {
  if (!Qi)
    return;
  const n = t.modifiers || {}, a = t.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, r = new IntersectionObserver(function() {
    var v;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (v = e._observe) == null ? void 0 : v[t.instance.$.uid];
    if (!u)
      return;
    const d = o.some((f) => f.isIntersecting);
    l && (!n.quiet || u.init) && (!n.once || d || u.init) && l(d, o, s), d && n.once ? bu(e, t) : u.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: r
  }, r.observe(e);
}
function bu(e, t) {
  var a;
  const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Ia = {
  mounted: Gg,
  unmounted: bu
}, pu = E({
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
  ...yu(),
  ...Q(),
  ...Oe(),
  ...Kt()
}, "VImg"), yn = L()({
  name: "VImg",
  directives: {
    intersect: Ia
  },
  props: pu(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ae(_(e, "color")), {
      roundedClasses: r
    } = Re(e), o = Ye("VImg"), s = G(""), u = Y(), d = G(e.eager ? "loading" : "idle"), v = G(), f = G(), m = b(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), g = b(() => m.value.aspect || v.value / f.value || 0);
    q(() => e.src, () => {
      h(d.value !== "idle");
    }), q(g, (A, B) => {
      !A && B && u.value && w(u.value);
    }), Xi(() => h());
    function h(A) {
      if (!(e.eager && A) && !(Qi && !A && !e.eager)) {
        if (d.value = "loading", m.value.lazySrc) {
          const B = new Image();
          B.src = m.value.lazySrc, w(B, null);
        }
        m.value.src && Ce(() => {
          var B;
          n("loadstart", ((B = u.value) == null ? void 0 : B.currentSrc) || m.value.src), setTimeout(() => {
            var O;
            if (!o.isUnmounted)
              if ((O = u.value) != null && O.complete) {
                if (u.value.naturalWidth || p(), d.value === "error")
                  return;
                g.value || w(u.value, null), d.value === "loading" && y();
              } else
                g.value || w(u.value), S();
          });
        });
      }
    }
    function y() {
      var A;
      o.isUnmounted || (S(), w(u.value), d.value = "loaded", n("load", ((A = u.value) == null ? void 0 : A.currentSrc) || m.value.src));
    }
    function p() {
      var A;
      o.isUnmounted || (d.value = "error", n("error", ((A = u.value) == null ? void 0 : A.currentSrc) || m.value.src));
    }
    function S() {
      const A = u.value;
      A && (s.value = A.currentSrc || A.src);
    }
    let I = -1;
    dt(() => {
      clearTimeout(I);
    });
    function w(A) {
      let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const O = () => {
        if (clearTimeout(I), o.isUnmounted)
          return;
        const {
          naturalHeight: H,
          naturalWidth: U
        } = A;
        H || U ? (v.value = U, f.value = H) : !A.complete && d.value === "loading" && B != null ? I = window.setTimeout(O, B) : (A.currentSrc.endsWith(".svg") || A.currentSrc.startsWith("data:image/svg+xml")) && (v.value = 1, f.value = 1);
      };
      O();
    }
    const P = b(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), C = () => {
      var O;
      if (!m.value.src || d.value === "idle")
        return null;
      const A = c("img", {
        class: ["v-img__img", P.value],
        style: {
          objectPosition: e.position
        },
        src: m.value.src,
        srcset: m.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: u,
        onLoad: y,
        onError: p
      }, null), B = (O = a.sources) == null ? void 0 : O.call(a);
      return c(Vt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [ge(B ? c("picture", {
          class: "v-img__picture"
        }, [B, A]) : A, [[xt, d.value === "loaded"]])]
      });
    }, k = () => c(Vt, {
      transition: e.transition
    }, {
      default: () => [m.value.lazySrc && d.value !== "loaded" && c("img", {
        class: ["v-img__img", "v-img__img--preload", P.value],
        style: {
          objectPosition: e.position
        },
        src: m.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), V = () => a.placeholder ? c(Vt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !a.error) && c("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, x = () => a.error ? c(Vt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && c("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, T = () => e.gradient ? c("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, M = G(!1);
    {
      const A = q(g, (B) => {
        B && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            M.value = !0;
          });
        }), A());
      });
    }
    return F(() => {
      const A = Vi.filterProps(e);
      return ge(c(Vi, D({
        class: ["v-img", {
          "v-img--booting": !M.value
        }, l.value, r.value, e.class],
        style: [{
          width: J(e.width === "auto" ? v.value : e.width)
        }, i.value, e.style]
      }, A, {
        aspectRatio: g.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => c(re, null, [c(C, null, null), c(k, null, null), c(T, null, null), c(V, null, null), c(x, null, null)]),
        default: a.default
      }), [[it("intersect"), {
        handler: h,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: u,
      state: d,
      naturalWidth: v,
      naturalHeight: f
    };
  }
}), wt = E({
  border: [Boolean, Number, String]
}, "border");
function It(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt();
  return {
    borderClasses: b(() => {
      const a = xa(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${t}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
const Ke = E({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function Qe(e) {
  return {
    elevationClasses: b(() => {
      const n = xa(e) ? e.value : e.elevation, a = [];
      return n == null || a.push(`elevation-${n}`), a;
    })
  };
}
const qg = [null, "prominent", "default", "comfortable", "compact"], Su = E({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => qg.includes(e)
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
  ...wt(),
  ...Q(),
  ...Ke(),
  ...Oe(),
  ...me({
    tag: "header"
  }),
  ...Se()
}, "VToolbar"), xi = L()({
  name: "VToolbar",
  props: Su(),
  setup(e, t) {
    var m;
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ae(_(e, "color")), {
      borderClasses: i
    } = It(e), {
      elevationClasses: r
    } = Qe(e), {
      roundedClasses: o
    } = Re(e), {
      themeClasses: s
    } = xe(e), {
      rtlClasses: u
    } = Je(), d = G(!!(e.extended || (m = n.extension) != null && m.call(n))), v = b(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), f = b(() => d.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return _e({
      VBtn: {
        variant: "text"
      }
    }), F(() => {
      var p;
      const g = !!(e.title || n.title), h = !!(n.image || e.image), y = (p = n.extension) == null ? void 0 : p.call(n);
      return d.value = !!(e.extended || y), c(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, i.value, r.value, o.value, s.value, u.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => [h && c("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [n.image ? c(pe, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, n.image) : c(yn, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), c(pe, {
          defaults: {
            VTabs: {
              height: J(v.value)
            }
          }
        }, {
          default: () => {
            var S, I, w;
            return [c("div", {
              class: "v-toolbar__content",
              style: {
                height: J(v.value)
              }
            }, [n.prepend && c("div", {
              class: "v-toolbar__prepend"
            }, [(S = n.prepend) == null ? void 0 : S.call(n)]), g && c(dr, {
              key: "title",
              text: e.title
            }, {
              text: n.title
            }), (I = n.default) == null ? void 0 : I.call(n), n.append && c("div", {
              class: "v-toolbar__append"
            }, [(w = n.append) == null ? void 0 : w.call(n)])])];
          }
        }), c(pe, {
          defaults: {
            VTabs: {
              height: J(f.value)
            }
          }
        }, {
          default: () => [c(ml, null, {
            default: () => [d.value && c("div", {
              class: "v-toolbar__extension",
              style: {
                height: J(f.value)
              }
            }, [y])]
          })]
        })]
      });
    }), {
      contentHeight: v,
      extensionHeight: f
    };
  }
}), Xg = E({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function Zg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: n
  } = t;
  let a = 0;
  const l = Y(null), i = G(0), r = G(0), o = G(0), s = G(!1), u = G(!1), d = b(() => Number(e.scrollThreshold)), v = b(() => Ue((d.value - i.value) / d.value || 0)), f = () => {
    const m = l.value;
    !m || n && !n.value || (a = i.value, i.value = "window" in m ? m.pageYOffset : m.scrollTop, u.value = i.value < a, o.value = Math.abs(i.value - d.value));
  };
  return q(u, () => {
    r.value = r.value || i.value;
  }), q(s, () => {
    r.value = 0;
  }), tt(() => {
    q(() => e.scrollTarget, (m) => {
      var h;
      const g = m ? document.querySelector(m) : window;
      if (!g) {
        Nt(`Unable to locate element with identifier ${m}`);
        return;
      }
      g !== l.value && ((h = l.value) == null || h.removeEventListener("scroll", f), l.value = g, l.value.addEventListener("scroll", f, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), dt(() => {
    var m;
    (m = l.value) == null || m.removeEventListener("scroll", f);
  }), n && q(n, f, {
    immediate: !0
  }), {
    scrollThreshold: d,
    currentScroll: i,
    currentThreshold: o,
    isScrollActive: s,
    scrollRatio: v,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: u,
    savedScroll: r
  };
}
function xn() {
  const e = G(!1);
  return tt(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: b(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: ll(e)
  };
}
const Jg = E({
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
  ...Su(),
  ...Yn(),
  ...Xg(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), Qg = L()({
  name: "VAppBar",
  props: Jg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Y(), l = ue(e, "modelValue"), i = b(() => {
      var S;
      const p = new Set(((S = e.scrollBehavior) == null ? void 0 : S.split(" ")) ?? []);
      return {
        hide: p.has("hide"),
        // fullyHide: behavior.has('fully-hide'),
        inverted: p.has("inverted"),
        collapse: p.has("collapse"),
        elevate: p.has("elevate"),
        fadeImage: p.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), r = b(() => {
      const p = i.value;
      return p.hide || // behavior.fullyHide ||
      p.inverted || p.collapse || p.elevate || p.fadeImage || // behavior.shrink ||
      !l.value;
    }), {
      currentScroll: o,
      scrollThreshold: s,
      isScrollingUp: u,
      scrollRatio: d
    } = Zg(e, {
      canScroll: r
    }), v = b(() => e.collapse || i.value.collapse && (i.value.inverted ? d.value > 0 : d.value === 0)), f = b(() => e.flat || i.value.elevate && (i.value.inverted ? o.value > 0 : o.value === 0)), m = b(() => i.value.fadeImage ? i.value.inverted ? 1 - d.value : d.value : void 0), g = b(() => {
      var I, w;
      if (i.value.hide && i.value.inverted)
        return 0;
      const p = ((I = a.value) == null ? void 0 : I.contentHeight) ?? 0, S = ((w = a.value) == null ? void 0 : w.extensionHeight) ?? 0;
      return p + S;
    });
    Bt(b(() => !!e.scrollBehavior), () => {
      Ze(() => {
        i.value.hide ? i.value.inverted ? l.value = o.value > s.value : l.value = u.value || o.value < s.value : l.value = !0;
      });
    });
    const {
      ssrBootStyles: h
    } = xn(), {
      layoutItemStyles: y
    } = Wn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: _(e, "location"),
      layoutSize: g,
      elementSize: G(void 0),
      active: l,
      absolute: _(e, "absolute")
    });
    return F(() => {
      const p = xi.filterProps(e);
      return c(xi, D({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...y.value,
          "--v-toolbar-image-opacity": m.value,
          height: void 0,
          ...h.value
        }, e.style]
      }, p, {
        collapse: v.value,
        flat: f.value
      }), n);
    }), {};
  }
}), ey = [null, "default", "comfortable", "compact"], qe = E({
  density: {
    type: String,
    default: "default",
    validator: (e) => ey.includes(e)
  }
}, "density");
function ot(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt();
  return {
    densityClasses: b(() => `${t}--density-${e.density}`)
  };
}
const ty = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Pn(e, t) {
  return c(re, null, [e && c("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), c("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const Tt = E({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => ty.includes(e)
  }
}, "variant");
function In(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt();
  const n = b(() => {
    const {
      variant: i
    } = mt(e);
    return `${t}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = hr(b(() => {
    const {
      variant: i,
      color: r
    } = mt(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: r
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: n
  };
}
const ku = E({
  divided: Boolean,
  ...wt(),
  ...Q(),
  ...qe(),
  ...Ke(),
  ...Oe(),
  ...me(),
  ...Se(),
  ...Tt()
}, "VBtnGroup"), Pi = L()({
  name: "VBtnGroup",
  props: ku(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = xe(e), {
      densityClasses: l
    } = ot(e), {
      borderClasses: i
    } = It(e), {
      elevationClasses: r
    } = Qe(e), {
      roundedClasses: o
    } = Re(e);
    _e({
      VBtn: {
        height: "auto",
        color: _(e, "color"),
        density: _(e, "density"),
        flat: !0,
        variant: _(e, "variant")
      }
    }), F(() => c(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, r.value, o.value, e.class],
      style: e.style
    }, n));
  }
}), Tn = E({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Dn = E({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function An(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Ye("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = rt();
  Ee(Symbol.for(`${t.description}:id`), l);
  const i = ke(t, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const r = _(e, "value"), o = b(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: r,
    disabled: o
  }, a), dt(() => {
    i.unregister(l);
  });
  const s = b(() => i.isSelected(l)), u = b(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return q(s, (d) => {
    a.emit("group:selected", {
      value: d
    });
  }), {
    id: l,
    isSelected: s,
    toggle: () => i.select(l, !s.value),
    select: (d) => i.select(l, d),
    selectedClass: u,
    value: r,
    disabled: o,
    group: i
  };
}
function nn(e, t) {
  let n = !1;
  const a = gt([]), l = ue(e, "modelValue", [], (f) => f == null ? [] : wu(a, ze(f)), (f) => {
    const m = ay(a, f);
    return e.multiple ? m : m[0];
  }), i = Ye("useGroup");
  function r(f, m) {
    const g = f, h = Symbol.for(`${t.description}:id`), p = na(h, i == null ? void 0 : i.vnode).indexOf(m);
    p > -1 ? a.splice(p, 0, g) : a.push(g);
  }
  function o(f) {
    if (n)
      return;
    s();
    const m = a.findIndex((g) => g.id === f);
    a.splice(m, 1);
  }
  function s() {
    const f = a.find((m) => !m.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  tt(() => {
    s();
  }), dt(() => {
    n = !0;
  });
  function u(f, m) {
    const g = a.find((h) => h.id === f);
    if (!(m && (g != null && g.disabled)))
      if (e.multiple) {
        const h = l.value.slice(), y = h.findIndex((S) => S === f), p = ~y;
        if (m = m ?? !p, p && e.mandatory && h.length <= 1 || !p && e.max != null && h.length + 1 > e.max)
          return;
        y < 0 && m ? h.push(f) : y >= 0 && !m && h.splice(y, 1), l.value = h;
      } else {
        const h = l.value.includes(f);
        if (e.mandatory && h)
          return;
        l.value = m ?? !h ? [f] : [];
      }
  }
  function d(f) {
    if (e.multiple && Nt('This method is not supported when using "multiple" prop'), l.value.length) {
      const m = l.value[0], g = a.findIndex((p) => p.id === m);
      let h = (g + f) % a.length, y = a[h];
      for (; y.disabled && h !== g; )
        h = (h + f) % a.length, y = a[h];
      if (y.disabled)
        return;
      l.value = [a[h].id];
    } else {
      const m = a.find((g) => !g.disabled);
      m && (l.value = [m.id]);
    }
  }
  const v = {
    register: r,
    unregister: o,
    selected: l,
    select: u,
    disabled: _(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (f) => l.value.includes(f),
    selectedClass: b(() => e.selectedClass),
    items: b(() => a),
    getItemIndex: (f) => ny(a, f)
  };
  return Ee(t, v), v;
}
function ny(e, t) {
  const n = wu(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function wu(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((r) => Ut(a, r.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? n.push(l.id) : i != null && n.push(i.id);
  }), n;
}
function ay(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      n.push(i.value != null ? i.value : l);
    }
  }), n;
}
const gr = Symbol.for("vuetify:v-btn-toggle"), ly = E({
  ...ku(),
  ...Tn()
}, "VBtnToggle"), iy = L()({
  name: "VBtnToggle",
  props: ly(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: r,
      selected: o
    } = nn(e, gr);
    return F(() => {
      const s = Pi.filterProps(e);
      return c(Pi, D({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var u;
          return [(u = n.default) == null ? void 0 : u.call(n, {
            isSelected: a,
            next: l,
            prev: i,
            select: r,
            selected: o
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: r
    };
  }
}), ry = ["x-small", "small", "default", "large", "x-large"], Gt = E({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Un(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt();
  return er(() => {
    let n, a;
    return Xa(ry, e.size) ? n = `${t}--size-${e.size}` : e.size && (a = {
      width: J(e.size),
      height: J(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: a
    };
  });
}
const oy = E({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: fe,
  ...Q(),
  ...Gt(),
  ...me({
    tag: "i"
  }),
  ...Se()
}, "VIcon"), Ve = L()({
  name: "VIcon",
  props: oy(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = Y(), {
      themeClasses: i
    } = xe(e), {
      iconData: r
    } = Pg(b(() => l.value || e.icon)), {
      sizeClasses: o
    } = Un(e), {
      textColorClasses: s,
      textColorStyles: u
    } = lt(_(e, "color"));
    return F(() => {
      var v, f;
      const d = (v = a.default) == null ? void 0 : v.call(a);
      return d && (l.value = (f = _s(d).filter((m) => m.type === Fd && m.children && typeof m.children == "string")[0]) == null ? void 0 : f.children), c(r.value.component, {
        tag: e.tag,
        icon: r.value.icon,
        class: ["v-icon", "notranslate", i.value, o.value, s.value, {
          "v-icon--clickable": !!n.onClick,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [o.value ? void 0 : {
          fontSize: J(e.size),
          height: J(e.size),
          width: J(e.size)
        }, u.value, e.style],
        role: n.onClick ? "button" : void 0,
        "aria-hidden": !n.onClick
      }, {
        default: () => [d]
      });
    }), {};
  }
});
function hl(e, t) {
  const n = Y(), a = G(!1);
  if (Qi) {
    const l = new IntersectionObserver((i) => {
      e == null || e(i, l), a.value = !!i.find((r) => r.isIntersecting);
    }, t);
    dt(() => {
      l.disconnect();
    }), q(n, (i, r) => {
      r && (l.unobserve(r), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: a
  };
}
const sy = E({
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
  ...Gt(),
  ...me({
    tag: "div"
  }),
  ...Se()
}, "VProgressCircular"), Nn = L()({
  name: "VProgressCircular",
  props: sy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, l = 2 * Math.PI * a, i = Y(), {
      themeClasses: r
    } = xe(e), {
      sizeClasses: o,
      sizeStyles: s
    } = Un(e), {
      textColorClasses: u,
      textColorStyles: d
    } = lt(_(e, "color")), {
      textColorClasses: v,
      textColorStyles: f
    } = lt(_(e, "bgColor")), {
      intersectionRef: m,
      isIntersecting: g
    } = hl(), {
      resizeRef: h,
      contentRect: y
    } = Lt(), p = b(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = b(() => Number(e.width)), I = b(() => s.value ? Number(e.size) : y.value ? y.value.width : Math.max(S.value, 32)), w = b(() => a / (1 - S.value / I.value) * 2), P = b(() => S.value / I.value * w.value), C = b(() => J((100 - p.value) / 100 * l));
    return Ze(() => {
      m.value = i.value, h.value = i.value;
    }), F(() => c(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": g.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, r.value, o.value, u.value, e.class],
      style: [s.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : p.value
    }, {
      default: () => [c("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${w.value} ${w.value}`
      }, [c("circle", {
        class: ["v-progress-circular__underlay", v.value],
        style: f.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": P.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), c("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": P.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": C.value
      }, null)]), n.default && c("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: p.value
      })])]
    })), {};
  }
}), Ko = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, an = E({
  location: String
}, "location");
function ln(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = Je();
  return {
    locationStyles: b(() => {
      if (!e.location)
        return {};
      const {
        side: i,
        align: r
      } = hi(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function o(u) {
        return n ? n(u) : 0;
      }
      const s = {};
      return i !== "center" && (t ? s[Ko[i]] = `calc(100% - ${o(i)}px)` : s[i] = 0), r !== "center" ? t ? s[Ko[r]] = `calc(100% - ${o(r)}px)` : s[r] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const uy = E({
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
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...Q(),
  ...an({
    location: "top"
  }),
  ...Oe(),
  ...me(),
  ...Se()
}, "VProgressLinear"), gl = L()({
  name: "VProgressLinear",
  props: uy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = Je(), {
      themeClasses: r
    } = xe(e), {
      locationStyles: o
    } = ln(e), {
      textColorClasses: s,
      textColorStyles: u
    } = lt(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: v
    } = Ae(b(() => e.bgColor || e.color)), {
      backgroundColorClasses: f,
      backgroundColorStyles: m
    } = Ae(e, "color"), {
      roundedClasses: g
    } = Re(e), {
      intersectionRef: h,
      isIntersecting: y
    } = hl(), p = b(() => parseInt(e.max, 10)), S = b(() => parseInt(e.height, 10)), I = b(() => parseFloat(e.bufferValue) / p.value * 100), w = b(() => parseFloat(a.value) / p.value * 100), P = b(() => l.value !== e.reverse), C = b(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), k = b(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
    function V(x) {
      if (!h.value)
        return;
      const {
        left: T,
        right: M,
        width: A
      } = h.value.getBoundingClientRect(), B = P.value ? A - x.clientX + (M - A) : x.clientX - T;
      a.value = Math.round(B / A * p.value);
    }
    return F(() => c(e.tag, {
      ref: h,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && y.value,
        "v-progress-linear--reverse": P.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, g.value, r.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? J(S.value) : 0,
        "--v-progress-linear-height": J(S.value),
        ...o.value
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : w.value,
      onClick: e.clickable && V
    }, {
      default: () => [e.stream && c("div", {
        key: "stream",
        class: ["v-progress-linear__stream", s.value],
        style: {
          ...u.value,
          [P.value ? "left" : "right"]: J(-S.value),
          borderTop: `${J(S.value / 2)} dotted`,
          opacity: k.value,
          top: `calc(50% - ${J(S.value / 4)})`,
          width: J(100 - I.value, "%"),
          "--v-progress-linear-stream-to": J(S.value * (P.value ? 1 : -1))
        }
      }, null), c("div", {
        class: ["v-progress-linear__background", d.value],
        style: [v.value, {
          opacity: k.value,
          width: J(e.stream ? I.value : 100, "%")
        }]
      }, null), c(Ht, {
        name: C.value
      }, {
        default: () => [e.indeterminate ? c("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((x) => c("div", {
          key: x,
          class: ["v-progress-linear__indeterminate", x, f.value],
          style: m.value
        }, null))]) : c("div", {
          class: ["v-progress-linear__determinate", f.value],
          style: [m.value, {
            width: J(w.value, "%")
          }]
        }, null)]
      }), n.default && c("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: w.value,
        buffer: I.value
      })])]
    })), {};
  }
}), yl = E({
  loading: [Boolean, String]
}, "loader");
function Ta(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt();
  return {
    loaderClasses: b(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function bl(e, t) {
  var a;
  let {
    slots: n
  } = t;
  return c("div", {
    class: `${e.name}__loader`
  }, [((a = n.default) == null ? void 0 : a.call(n, {
    color: e.color,
    isActive: e.active
  })) || c(gl, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const cy = ["static", "relative", "fixed", "absolute", "sticky"], Kn = E({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => cy.includes(e)
    )
  }
}, "position");
function Gn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt();
  return {
    positionClasses: b(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function dy() {
  const e = Ye("useRoute");
  return b(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function Cu() {
  var e, t;
  return (t = (e = Ye("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function Da(e, t) {
  const n = ut("RouterLink"), a = b(() => !!(e.href || e.to)), l = b(() => (a == null ? void 0 : a.value) || bo(t, "click") || bo(e, "click"));
  if (typeof n == "string")
    return {
      isLink: a,
      isClickable: l,
      href: _(e, "href")
    };
  const i = e.to ? n.useLink(e) : void 0, r = dy();
  return {
    isLink: a,
    isClickable: l,
    route: i == null ? void 0 : i.route,
    navigate: i == null ? void 0 : i.navigate,
    isActive: i && b(() => {
      var o, s, u;
      return e.exact ? r.value ? ((u = i.isExactActive) == null ? void 0 : u.value) && Ut(i.route.value.query, r.value.query) : (s = i.isExactActive) == null ? void 0 : s.value : (o = i.isActive) == null ? void 0 : o.value;
    }),
    href: b(() => e.to ? i == null ? void 0 : i.route.value.href : e.href)
  };
}
const Aa = E({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Jl = !1;
function fy(e, t) {
  let n = !1, a, l;
  De && (Ce(() => {
    window.addEventListener("popstate", i), a = e == null ? void 0 : e.beforeEach((r, o, s) => {
      Jl ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), Jl = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Jl = !1;
    });
  }), ct(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(r) {
    var o;
    (o = r.state) != null && o.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function vy(e, t) {
  q(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && t && Ce(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const Ii = Symbol("rippleStop"), my = 80;
function Go(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Ti(e) {
  return e.constructor.name === "TouchEvent";
}
function Vu(e) {
  return e.constructor.name === "KeyboardEvent";
}
const hy = function(e, t) {
  var v;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Vu(e)) {
    const f = t.getBoundingClientRect(), m = Ti(e) ? e.touches[e.touches.length - 1] : e;
    a = m.clientX - f.left, l = m.clientY - f.top;
  }
  let i = 0, r = 0.3;
  (v = t._ripple) != null && v.circle ? (r = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const o = `${(t.clientWidth - i * 2) / 2}px`, s = `${(t.clientHeight - i * 2) / 2}px`, u = n.center ? o : `${a - i}px`, d = n.center ? s : `${l - i}px`;
  return {
    radius: i,
    scale: r,
    x: u,
    y: d,
    centerX: o,
    centerY: s
  };
}, nl = {
  /* eslint-disable max-statements */
  show(e, t) {
    var m;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((m = t == null ? void 0 : t._ripple) != null && m.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: i,
      scale: r,
      x: o,
      y: s,
      centerX: u,
      centerY: d
    } = hy(e, t, n), v = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = v, l.style.height = v, t.appendChild(a);
    const f = window.getComputedStyle(t);
    f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Go(l, `translate(${o}, ${s}) scale3d(${r},${r},${r})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Go(l, `translate(${u}, ${d}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled))
      return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0)
      return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding)
      return;
    n.dataset.isHiding = "true";
    const a = performance.now() - Number(n.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var o;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((o = n.parentNode) == null ? void 0 : o.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, l);
  }
};
function xu(e) {
  return typeof e > "u" || !!e;
}
function ya(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Ii])) {
    if (e[Ii] = !0, Ti(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || Vu(e), n._ripple.class && (t.class = n._ripple.class), Ti(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        nl.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = n == null ? void 0 : n._ripple) != null && a.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, my);
    } else
      nl.show(e, n, t);
  }
}
function qo(e) {
  e[Ii] = !0;
}
function yt(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        yt(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), nl.hide(t);
  }
}
function Pu(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let ba = !1;
function Iu(e) {
  !ba && (e.keyCode === vo.enter || e.keyCode === vo.space) && (ba = !0, ya(e));
}
function Tu(e) {
  ba = !1, yt(e);
}
function Du(e) {
  ba && (ba = !1, yt(e));
}
function Au(e, t, n) {
  const {
    value: a,
    modifiers: l
  } = t, i = xu(a);
  if (i || nl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, qa(a) && a.class && (e._ripple.class = a.class), i && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", qo, {
        passive: !0
      }), e.addEventListener("mousedown", qo);
      return;
    }
    e.addEventListener("touchstart", ya, {
      passive: !0
    }), e.addEventListener("touchend", yt, {
      passive: !0
    }), e.addEventListener("touchmove", Pu, {
      passive: !0
    }), e.addEventListener("touchcancel", yt), e.addEventListener("mousedown", ya), e.addEventListener("mouseup", yt), e.addEventListener("mouseleave", yt), e.addEventListener("keydown", Iu), e.addEventListener("keyup", Tu), e.addEventListener("blur", Du), e.addEventListener("dragstart", yt, {
      passive: !0
    });
  } else
    !i && n && Mu(e);
}
function Mu(e) {
  e.removeEventListener("mousedown", ya), e.removeEventListener("touchstart", ya), e.removeEventListener("touchend", yt), e.removeEventListener("touchmove", Pu), e.removeEventListener("touchcancel", yt), e.removeEventListener("mouseup", yt), e.removeEventListener("mouseleave", yt), e.removeEventListener("keydown", Iu), e.removeEventListener("keyup", Tu), e.removeEventListener("dragstart", yt), e.removeEventListener("blur", Du);
}
function gy(e, t) {
  Au(e, t, !1);
}
function yy(e) {
  delete e._ripple, Mu(e);
}
function by(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = xu(t.oldValue);
  Au(e, t, n);
}
const qt = {
  mounted: gy,
  unmounted: yy,
  updated: by
}, yr = E({
  active: {
    type: Boolean,
    default: void 0
  },
  symbol: {
    type: null,
    default: gr
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: fe,
  appendIcon: fe,
  block: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...wt(),
  ...Q(),
  ...qe(),
  ...ft(),
  ...Ke(),
  ...Dn(),
  ...yl(),
  ...an(),
  ...Kn(),
  ...Oe(),
  ...Aa(),
  ...Gt(),
  ...me({
    tag: "button"
  }),
  ...Se(),
  ...Tt({
    variant: "elevated"
  })
}, "VBtn"), Te = L()({
  name: "VBtn",
  directives: {
    Ripple: qt
  },
  props: yr(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = xe(e), {
      borderClasses: i
    } = It(e), {
      colorClasses: r,
      colorStyles: o,
      variantClasses: s
    } = In(e), {
      densityClasses: u
    } = ot(e), {
      dimensionStyles: d
    } = vt(e), {
      elevationClasses: v
    } = Qe(e), {
      loaderClasses: f
    } = Ta(e), {
      locationStyles: m
    } = ln(e), {
      positionClasses: g
    } = Gn(e), {
      roundedClasses: h
    } = Re(e), {
      sizeClasses: y,
      sizeStyles: p
    } = Un(e), S = An(e, e.symbol, !1), I = Da(e, n), w = b(() => {
      var x;
      return e.active !== void 0 ? e.active : I.isLink.value ? (x = I.isActive) == null ? void 0 : x.value : S == null ? void 0 : S.isSelected.value;
    }), P = b(() => (S == null ? void 0 : S.disabled.value) || e.disabled), C = b(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), k = b(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function V(x) {
      var T;
      P.value || I.isLink.value && (x.metaKey || x.ctrlKey || x.shiftKey || x.button !== 0 || n.target === "_blank") || ((T = I.navigate) == null || T.call(I, x), S == null || S.toggle());
    }
    return vy(I, S == null ? void 0 : S.select), F(() => {
      var O, H;
      const x = I.isLink.value ? "a" : e.tag, T = !!(e.prependIcon || a.prepend), M = !!(e.appendIcon || a.append), A = !!(e.icon && e.icon !== !0), B = (S == null ? void 0 : S.isSelected.value) && (!I.isLink.value || ((O = I.isActive) == null ? void 0 : O.value)) || !S || ((H = I.isActive) == null ? void 0 : H.value);
      return ge(c(x, {
        type: x === "a" ? void 0 : "button",
        class: ["v-btn", S == null ? void 0 : S.selectedClass.value, {
          "v-btn--active": w.value,
          "v-btn--block": e.block,
          "v-btn--disabled": P.value,
          "v-btn--elevated": C.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, B ? r.value : void 0, u.value, v.value, f.value, g.value, h.value, y.value, s.value, e.class],
        style: [B ? o.value : void 0, d.value, m.value, p.value, e.style],
        disabled: P.value || void 0,
        href: I.href.value,
        onClick: V,
        value: k.value
      }, {
        default: () => {
          var U;
          return [Pn(!0, "v-btn"), !e.icon && T && c("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? c(pe, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : c(Ve, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), c("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && A ? c(Ve, {
            key: "content-icon",
            icon: e.icon
          }, null) : c(pe, {
            key: "content-defaults",
            disabled: !A,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var ee;
              return [((ee = a.default) == null ? void 0 : ee.call(a)) ?? e.text];
            }
          })]), !e.icon && M && c("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? c(pe, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : c(Ve, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && c("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((U = a.loader) == null ? void 0 : U.call(a)) ?? c(Nn, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "23",
            width: "2"
          }, null)])];
        }
      }), [[it("ripple"), !P.value && e.ripple, null]]);
    }), {
      group: S
    };
  }
}), py = E({
  ...yr({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon"), Sy = L()({
  name: "VAppBarNavIcon",
  props: py(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => c(Te, D(e, {
      class: ["v-app-bar-nav-icon"]
    }), n)), {};
  }
}), ky = L()({
  name: "VAppBarTitle",
  props: mu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => c(dr, D(e, {
      class: "v-app-bar-title"
    }), n)), {};
  }
}), Bu = St("v-alert-title"), wy = ["success", "info", "warning", "error"], Cy = E({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: fe,
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
    validator: (e) => wy.includes(e)
  },
  ...Q(),
  ...qe(),
  ...ft(),
  ...Ke(),
  ...an(),
  ...Kn(),
  ...Oe(),
  ...me(),
  ...Se(),
  ...Tt({
    variant: "flat"
  })
}, "VAlert"), Vy = L()({
  name: "VAlert",
  props: Cy(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = ue(e, "modelValue"), i = b(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), r = b(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: o
    } = xe(e), {
      colorClasses: s,
      colorStyles: u,
      variantClasses: d
    } = In(r), {
      densityClasses: v
    } = ot(e), {
      dimensionStyles: f
    } = vt(e), {
      elevationClasses: m
    } = Qe(e), {
      locationStyles: g
    } = ln(e), {
      positionClasses: h
    } = Gn(e), {
      roundedClasses: y
    } = Re(e), {
      textColorClasses: p,
      textColorStyles: S
    } = lt(_(e, "borderColor")), {
      t: I
    } = We(), w = b(() => ({
      "aria-label": I(e.closeLabel),
      onClick(P) {
        l.value = !1, n("click:close", P);
      }
    }));
    return () => {
      const P = !!(a.prepend || i.value), C = !!(a.title || e.title), k = !!(a.close || e.closable);
      return l.value && c(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, o.value, s.value, v.value, m.value, h.value, y.value, d.value, e.class],
        style: [u.value, f.value, g.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var V, x;
          return [Pn(!1, "v-alert"), e.border && c("div", {
            key: "border",
            class: ["v-alert__border", p.value],
            style: S.value
          }, null), P && c("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? c(pe, {
            key: "prepend-defaults",
            disabled: !i.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: i.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, a.prepend) : c(Ve, {
            key: "prepend-icon",
            density: e.density,
            icon: i.value,
            size: e.prominent ? 44 : 28
          }, null)]), c("div", {
            class: "v-alert__content"
          }, [C && c(Bu, {
            key: "title"
          }, {
            default: () => {
              var T;
              return [((T = a.title) == null ? void 0 : T.call(a)) ?? e.title];
            }
          }), ((V = a.text) == null ? void 0 : V.call(a)) ?? e.text, (x = a.default) == null ? void 0 : x.call(a)]), a.append && c("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), k && c("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? c(pe, {
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
              var T;
              return [(T = a.close) == null ? void 0 : T.call(a, {
                props: w.value
              })];
            }
          }) : c(Te, D({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, w.value), null)])];
        }
      });
    };
  }
}), xy = E({
  start: Boolean,
  end: Boolean,
  icon: fe,
  image: String,
  text: String,
  ...Q(),
  ...qe(),
  ...Oe(),
  ...Gt(),
  ...me(),
  ...Se(),
  ...Tt({
    variant: "flat"
  })
}, "VAvatar"), Pt = L()({
  name: "VAvatar",
  props: xy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = xe(e), {
      colorClasses: l,
      colorStyles: i,
      variantClasses: r
    } = In(e), {
      densityClasses: o
    } = ot(e), {
      roundedClasses: s
    } = Re(e), {
      sizeClasses: u,
      sizeStyles: d
    } = Un(e);
    return F(() => c(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, o.value, s.value, u.value, r.value, e.class],
      style: [i.value, d.value, e.style]
    }, {
      default: () => {
        var v;
        return [e.image ? c(yn, {
          key: "image",
          src: e.image,
          alt: "",
          cover: !0
        }, null) : e.icon ? c(Ve, {
          key: "icon",
          icon: e.icon
        }, null) : ((v = n.default) == null ? void 0 : v.call(n)) ?? e.text, Pn(!1, "v-avatar")];
      }
    })), {};
  }
}), Py = E({
  text: String,
  clickable: Boolean,
  ...Q(),
  ...Se()
}, "VLabel"), qn = L()({
  name: "VLabel",
  props: Py(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => {
      var a;
      return c("label", {
        class: ["v-label", {
          "v-label--clickable": e.clickable
        }, e.class],
        style: e.style
      }, [e.text, (a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), Eu = Symbol.for("vuetify:selection-control-group"), br = E({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: fe,
  trueIcon: fe,
  ripple: {
    type: Boolean,
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
    default: Ut
  },
  ...Q(),
  ...qe(),
  ...Se()
}, "SelectionControlGroup"), Iy = E({
  ...br({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup"), Ou = L()({
  name: "VSelectionControlGroup",
  props: Iy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "modelValue"), l = rt(), i = b(() => e.id || `v-selection-control-group-${l}`), r = b(() => e.name || i.value), o = /* @__PURE__ */ new Set();
    return Ee(Eu, {
      modelValue: a,
      forceUpdate: () => {
        o.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        o.add(s), ct(() => {
          o.delete(s);
        });
      }
    }), _e({
      [e.defaultsTarget]: {
        color: _(e, "color"),
        disabled: _(e, "disabled"),
        density: _(e, "density"),
        error: _(e, "error"),
        inline: _(e, "inline"),
        modelValue: a,
        multiple: b(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: r,
        falseIcon: _(e, "falseIcon"),
        trueIcon: _(e, "trueIcon"),
        readonly: _(e, "readonly"),
        ripple: _(e, "ripple"),
        type: _(e, "type"),
        valueComparator: _(e, "valueComparator")
      }
    }), F(() => {
      var s;
      return c("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = n.default) == null ? void 0 : s.call(n)]);
    }), {};
  }
}), pl = E({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...Q(),
  ...br()
}, "VSelectionControl");
function Ty(e) {
  const t = ke(Eu, void 0), {
    densityClasses: n
  } = ot(e), a = ue(e, "modelValue"), l = b(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = b(() => e.falseValue !== void 0 ? e.falseValue : !1), r = b(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), o = b({
    get() {
      const m = t ? t.modelValue.value : a.value;
      return r.value ? ze(m).some((g) => e.valueComparator(g, l.value)) : e.valueComparator(m, l.value);
    },
    set(m) {
      if (e.readonly)
        return;
      const g = m ? l.value : i.value;
      let h = g;
      r.value && (h = m ? [...ze(a.value), g] : ze(a.value).filter((y) => !e.valueComparator(y, l.value))), t ? t.modelValue.value = h : a.value = h;
    }
  }), {
    textColorClasses: s,
    textColorStyles: u
  } = lt(b(() => {
    if (!(e.error || e.disabled))
      return o.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: v
  } = Ae(b(() => o.value && !e.error && !e.disabled ? e.color : void 0)), f = b(() => o.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: l,
    falseValue: i,
    model: o,
    textColorClasses: s,
    textColorStyles: u,
    backgroundColorClasses: d,
    backgroundColorStyles: v,
    icon: f
  };
}
const bn = L()({
  name: "VSelectionControl",
  directives: {
    Ripple: qt
  },
  inheritAttrs: !1,
  props: pl(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      group: l,
      densityClasses: i,
      icon: r,
      model: o,
      textColorClasses: s,
      textColorStyles: u,
      backgroundColorClasses: d,
      backgroundColorStyles: v,
      trueValue: f
    } = Ty(e), m = rt(), g = G(!1), h = G(!1), y = Y(), p = b(() => e.id || `input-${m}`), S = b(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      y.value && (y.value.checked = o.value);
    });
    function I(C) {
      S.value && (g.value = !0, Ln(C.target, ":focus-visible") !== !1 && (h.value = !0));
    }
    function w() {
      g.value = !1, h.value = !1;
    }
    function P(C) {
      S.value && (e.readonly && l && Ce(() => l.forceUpdate()), o.value = C.target.checked);
    }
    return F(() => {
      var T, M;
      const C = a.label ? a.label({
        label: e.label,
        props: {
          for: p.value
        }
      }) : e.label, [k, V] = tn(n), x = c("input", D({
        ref: y,
        checked: o.value,
        disabled: !!e.disabled,
        id: p.value,
        onBlur: w,
        onFocus: I,
        onInput: P,
        "aria-disabled": !!e.disabled,
        type: e.type,
        value: f.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? o.value : void 0
      }, V), null);
      return c("div", D({
        class: ["v-selection-control", {
          "v-selection-control--dirty": o.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": g.value,
          "v-selection-control--focus-visible": h.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, k, {
        style: e.style
      }), [c("div", {
        class: ["v-selection-control__wrapper", s.value],
        style: u.value
      }, [(T = a.default) == null ? void 0 : T.call(a, {
        backgroundColorClasses: d,
        backgroundColorStyles: v
      }), ge(c("div", {
        class: ["v-selection-control__input"]
      }, [((M = a.input) == null ? void 0 : M.call(a, {
        model: o,
        textColorClasses: s,
        textColorStyles: u,
        backgroundColorClasses: d,
        backgroundColorStyles: v,
        inputNode: x,
        icon: r.value,
        props: {
          onFocus: I,
          onBlur: w,
          id: p.value
        }
      })) ?? c(re, null, [r.value && c(Ve, {
        key: "icon",
        icon: r.value
      }, null), x])]), [[it("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), C && c(qn, {
        for: p.value,
        clickable: !0,
        onClick: (A) => A.stopPropagation()
      }, {
        default: () => [C]
      })]);
    }), {
      isFocused: g,
      input: y
    };
  }
}), $u = E({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: fe,
    default: "$checkboxIndeterminate"
  },
  ...pl({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Yt = L()({
  name: "VCheckboxBtn",
  props: $u(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "indeterminate"), l = ue(e, "modelValue");
    function i(s) {
      a.value && (a.value = !1);
    }
    const r = b(() => a.value ? e.indeterminateIcon : e.falseIcon), o = b(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return F(() => {
      const s = Ge(bn.filterProps(e), ["modelValue"]);
      return c(bn, D(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(u) => l.value = u, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: r.value,
        trueIcon: o.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function _u(e) {
  const {
    t
  } = We();
  function n(a) {
    let {
      name: l
    } = a;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], r = e[`onClick:${l}`], o = r && i ? t(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return c(Ve, {
      icon: e[`${l}Icon`],
      "aria-label": o,
      onClick: r
    }, null);
  }
  return {
    InputIcon: n
  };
}
const Dy = E({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...Q(),
  ...Kt({
    transition: {
      component: vr,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Lu = L()({
  name: "VMessages",
  props: Dy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = b(() => ze(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = lt(b(() => e.color));
    return F(() => c(Vt, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [i.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && a.value.map((r, o) => c("div", {
        class: "v-messages__message",
        key: `${o}-${a.value}`
      }, [n.message ? n.message({
        message: r
      }) : r]))]
    })), {};
  }
}), Ma = E({
  focused: Boolean,
  "onUpdate:focused": ht()
}, "focus");
function Xt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt();
  const n = ue(e, "focused"), a = b(() => ({
    [`${t}--focused`]: n.value
  }));
  function l() {
    n.value = !0;
  }
  function i() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: l,
    blur: i
  };
}
const Fu = Symbol.for("vuetify:form"), Ay = E({
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
function My(e) {
  const t = ue(e, "modelValue"), n = b(() => e.disabled), a = b(() => e.readonly), l = G(!1), i = Y([]), r = Y([]);
  async function o() {
    const d = [];
    let v = !0;
    r.value = [], l.value = !0;
    for (const f of i.value) {
      const m = await f.validate();
      if (m.length > 0 && (v = !1, d.push({
        id: f.id,
        errorMessages: m
      })), !v && e.fastFail)
        break;
    }
    return r.value = d, l.value = !1, {
      valid: v,
      errors: r.value
    };
  }
  function s() {
    i.value.forEach((d) => d.reset());
  }
  function u() {
    i.value.forEach((d) => d.resetValidation());
  }
  return q(i, () => {
    let d = 0, v = 0;
    const f = [];
    for (const m of i.value)
      m.isValid === !1 ? (v++, f.push({
        id: m.id,
        errorMessages: m.errorMessages
      })) : m.isValid === !0 && d++;
    r.value = f, t.value = v > 0 ? !1 : d === i.value.length ? !0 : null;
  }, {
    deep: !0
  }), Ee(Fu, {
    register: (d) => {
      let {
        id: v,
        validate: f,
        reset: m,
        resetValidation: g
      } = d;
      i.value.some((h) => h.id === v) && Nt(`Duplicate input name "${v}"`), i.value.push({
        id: v,
        validate: f,
        reset: m,
        resetValidation: g,
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (d) => {
      i.value = i.value.filter((v) => v.id !== d);
    },
    update: (d, v, f) => {
      const m = i.value.find((g) => g.id === d);
      m && (m.isValid = v, m.errorMessages = f);
    },
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validateOn: _(e, "validateOn")
  }), {
    errors: r,
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validate: o,
    reset: s,
    resetValidation: u
  };
}
function Sl() {
  return ke(Fu, null);
}
const Ru = E({
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
  ...Ma()
}, "validation");
function Nu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rt();
  const a = ue(e, "modelValue"), l = b(() => e.validationValue === void 0 ? a.value : e.validationValue), i = Sl(), r = Y([]), o = G(!0), s = b(() => !!(ze(a.value === "" ? null : a.value).length || ze(l.value === "" ? null : l.value).length)), u = b(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), d = b(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), v = b(() => {
    var w;
    return (w = e.errorMessages) != null && w.length ? ze(e.errorMessages).concat(r.value).slice(0, Math.max(0, +e.maxErrors)) : r.value;
  }), f = b(() => {
    let w = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
    w === "lazy" && (w = "input lazy");
    const P = new Set((w == null ? void 0 : w.split(" ")) ?? []);
    return {
      blur: P.has("blur") || P.has("input"),
      input: P.has("input"),
      submit: P.has("submit"),
      lazy: P.has("lazy")
    };
  }), m = b(() => {
    var w;
    return e.error || (w = e.errorMessages) != null && w.length ? !1 : e.rules.length ? o.value ? r.value.length || f.value.lazy ? null : !0 : !r.value.length : !0;
  }), g = G(!1), h = b(() => ({
    [`${t}--error`]: m.value === !1,
    [`${t}--dirty`]: s.value,
    [`${t}--disabled`]: u.value,
    [`${t}--readonly`]: d.value
  })), y = b(() => e.name ?? mt(n));
  Xi(() => {
    i == null || i.register({
      id: y.value,
      validate: I,
      reset: p,
      resetValidation: S
    });
  }), dt(() => {
    i == null || i.unregister(y.value);
  }), tt(async () => {
    f.value.lazy || await I(!0), i == null || i.update(y.value, m.value, v.value);
  }), Bt(() => f.value.input, () => {
    q(l, () => {
      if (l.value != null)
        I();
      else if (e.focused) {
        const w = q(() => e.focused, (P) => {
          P || I(), w();
        });
      }
    });
  }), Bt(() => f.value.blur, () => {
    q(() => e.focused, (w) => {
      w || I();
    });
  }), q(m, () => {
    i == null || i.update(y.value, m.value, v.value);
  });
  function p() {
    a.value = null, Ce(S);
  }
  function S() {
    o.value = !0, f.value.lazy ? r.value = [] : I(!0);
  }
  async function I() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const P = [];
    g.value = !0;
    for (const C of e.rules) {
      if (P.length >= +(e.maxErrors ?? 1))
        break;
      const V = await (typeof C == "function" ? C : () => C)(l.value);
      if (V !== !0) {
        if (V !== !1 && typeof V != "string") {
          console.warn(`${V} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        P.push(V || "");
      }
    }
    return r.value = P, g.value = !1, o.value = w, r.value;
  }
  return {
    errorMessages: v,
    isDirty: s,
    isDisabled: u,
    isReadonly: d,
    isPristine: o,
    isValid: m,
    isValidating: g,
    reset: p,
    resetValidation: S,
    validate: I,
    validationClasses: h
  };
}
const Zt = E({
  id: String,
  appendIcon: fe,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: fe,
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
  "onClick:prepend": ht(),
  "onClick:append": ht(),
  ...Q(),
  ...qe(),
  ...Ru()
}, "VInput"), et = L()({
  name: "VInput",
  props: {
    ...Zt()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const {
      densityClasses: i
    } = ot(e), {
      rtlClasses: r
    } = Je(), {
      InputIcon: o
    } = _u(e), s = rt(), u = b(() => e.id || `input-${s}`), d = b(() => `${u.value}-messages`), {
      errorMessages: v,
      isDirty: f,
      isDisabled: m,
      isReadonly: g,
      isPristine: h,
      isValid: y,
      isValidating: p,
      reset: S,
      resetValidation: I,
      validate: w,
      validationClasses: P
    } = Nu(e, "v-input", u), C = b(() => ({
      id: u,
      messagesId: d,
      isDirty: f,
      isDisabled: m,
      isReadonly: g,
      isPristine: h,
      isValid: y,
      isValidating: p,
      reset: S,
      resetValidation: I,
      validate: w
    })), k = b(() => {
      var V;
      return (V = e.errorMessages) != null && V.length || !h.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return F(() => {
      var A, B, O, H;
      const V = !!(a.prepend || e.prependIcon), x = !!(a.append || e.appendIcon), T = k.value.length > 0, M = !e.hideDetails || e.hideDetails === "auto" && (T || !!a.details);
      return c("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, P.value, e.class],
        style: e.style
      }, [V && c("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(A = a.prepend) == null ? void 0 : A.call(a, C.value), e.prependIcon && c(o, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && c("div", {
        class: "v-input__control"
      }, [(B = a.default) == null ? void 0 : B.call(a, C.value)]), x && c("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && c(o, {
        key: "append-icon",
        name: "append"
      }, null), (O = a.append) == null ? void 0 : O.call(a, C.value)]), M && c("div", {
        class: "v-input__details"
      }, [c(Lu, {
        id: d.value,
        active: T,
        messages: k.value
      }, {
        message: a.message
      }), (H = a.details) == null ? void 0 : H.call(a, C.value)])]);
    }), {
      reset: S,
      resetValidation: I,
      validate: w,
      isValid: y,
      errorMessages: v
    };
  }
}), By = E({
  ...Zt(),
  ...Ge($u(), ["inline"])
}, "VCheckbox"), Ey = L()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: By(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = ue(e, "modelValue"), {
      isFocused: i,
      focus: r,
      blur: o
    } = Xt(e), s = rt(), u = b(() => e.id || `checkbox-${s}`);
    return F(() => {
      const [d, v] = tn(n), f = et.filterProps(e), m = Yt.filterProps(e);
      return c(et, D({
        class: ["v-checkbox", e.class]
      }, d, f, {
        modelValue: l.value,
        "onUpdate:modelValue": (g) => l.value = g,
        id: u.value,
        focused: i.value,
        style: e.style
      }), {
        ...a,
        default: (g) => {
          let {
            id: h,
            messagesId: y,
            isDisabled: p,
            isReadonly: S
          } = g;
          return c(Yt, D(m, {
            id: h.value,
            "aria-describedby": y.value,
            disabled: p.value,
            readonly: S.value
          }, v, {
            modelValue: l.value,
            "onUpdate:modelValue": (I) => l.value = I,
            onFocus: r,
            onBlur: o
          }), a);
        }
      });
    }), {};
  }
});
function Xo(e) {
  const n = Math.abs(e);
  return Math.sign(e) * (n / ((1 / 0.501 - 2) * (1 - n) + 1));
}
function Zo(e) {
  let {
    selectedElement: t,
    containerSize: n,
    contentSize: a,
    isRtl: l,
    currentScrollOffset: i,
    isHorizontal: r
  } = e;
  const o = r ? t.clientWidth : t.clientHeight, s = r ? t.offsetLeft : t.offsetTop, u = l && r ? a - s - o : s, d = n + i, v = o + u, f = o * 0.4;
  return u <= i ? i = Math.max(u - f, 0) : d <= v && (i = Math.min(i - (d - v - f), a - n)), i;
}
function Oy(e) {
  let {
    selectedElement: t,
    containerSize: n,
    contentSize: a,
    isRtl: l,
    isHorizontal: i
  } = e;
  const r = i ? t.clientWidth : t.clientHeight, o = i ? t.offsetLeft : t.offsetTop, s = l && i ? a - o - r / 2 - n / 2 : o + r / 2 - n / 2;
  return Math.min(a - n, Math.max(0, s));
}
const Hu = Symbol.for("vuetify:v-slide-group"), pr = E({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Hu
  },
  nextIcon: {
    type: fe,
    default: "$next"
  },
  prevIcon: {
    type: fe,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...Q(),
  ...sr(),
  ...me(),
  ...Tn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), pa = L()({
  name: "VSlideGroup",
  props: pr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isRtl: a
    } = Je(), {
      displayClasses: l,
      mobile: i
    } = Vn(e), r = nn(e, e.symbol), o = G(!1), s = G(0), u = G(0), d = G(0), v = b(() => e.direction === "horizontal"), {
      resizeRef: f,
      contentRect: m
    } = Lt(), {
      resizeRef: g,
      contentRect: h
    } = Lt(), y = b(() => r.selected.value.length ? r.items.value.findIndex((N) => N.id === r.selected.value[0]) : -1), p = b(() => r.selected.value.length ? r.items.value.findIndex((N) => N.id === r.selected.value[r.selected.value.length - 1]) : -1);
    if (De) {
      let N = -1;
      q(() => [r.selected.value, m.value, h.value, v.value], () => {
        cancelAnimationFrame(N), N = requestAnimationFrame(() => {
          if (m.value && h.value) {
            const X = v.value ? "width" : "height";
            u.value = m.value[X], d.value = h.value[X], o.value = u.value + 1 < d.value;
          }
          if (y.value >= 0 && g.value) {
            const X = g.value.children[p.value];
            y.value === 0 || !o.value ? s.value = 0 : e.centerActive ? s.value = Oy({
              selectedElement: X,
              containerSize: u.value,
              contentSize: d.value,
              isRtl: a.value,
              isHorizontal: v.value
            }) : o.value && (s.value = Zo({
              selectedElement: X,
              containerSize: u.value,
              contentSize: d.value,
              isRtl: a.value,
              currentScrollOffset: s.value,
              isHorizontal: v.value
            }));
          }
        });
      });
    }
    const S = G(!1);
    let I = 0, w = 0;
    function P(N) {
      const X = v.value ? "clientX" : "clientY";
      w = (a.value && v.value ? -1 : 1) * s.value, I = N.touches[0][X], S.value = !0;
    }
    function C(N) {
      if (!o.value)
        return;
      const X = v.value ? "clientX" : "clientY", K = a.value && v.value ? -1 : 1;
      s.value = K * (w + I - N.touches[0][X]);
    }
    function k(N) {
      const X = d.value - u.value;
      s.value < 0 || !o.value ? s.value = 0 : s.value >= X && (s.value = X), S.value = !1;
    }
    function V() {
      f.value && (f.value[v.value ? "scrollLeft" : "scrollTop"] = 0);
    }
    const x = G(!1);
    function T(N) {
      if (x.value = !0, !(!o.value || !g.value)) {
        for (const X of N.composedPath())
          for (const K of g.value.children)
            if (K === X) {
              s.value = Zo({
                selectedElement: K,
                containerSize: u.value,
                contentSize: d.value,
                isRtl: a.value,
                currentScrollOffset: s.value,
                isHorizontal: v.value
              });
              return;
            }
      }
    }
    function M(N) {
      x.value = !1;
    }
    function A(N) {
      var X;
      !x.value && !(N.relatedTarget && ((X = g.value) != null && X.contains(N.relatedTarget))) && O();
    }
    function B(N) {
      g.value && (v.value ? N.key === "ArrowRight" ? O(a.value ? "prev" : "next") : N.key === "ArrowLeft" && O(a.value ? "next" : "prev") : N.key === "ArrowDown" ? O("next") : N.key === "ArrowUp" && O("prev"), N.key === "Home" ? O("first") : N.key === "End" && O("last"));
    }
    function O(N) {
      var X, K, ie, ne, z;
      if (g.value)
        if (!N)
          (X = ma(g.value)[0]) == null || X.focus();
        else if (N === "next") {
          const ae = (K = g.value.querySelector(":focus")) == null ? void 0 : K.nextElementSibling;
          ae ? ae.focus() : O("first");
        } else if (N === "prev") {
          const ae = (ie = g.value.querySelector(":focus")) == null ? void 0 : ie.previousElementSibling;
          ae ? ae.focus() : O("last");
        } else
          N === "first" ? (ne = g.value.firstElementChild) == null || ne.focus() : N === "last" && ((z = g.value.lastElementChild) == null || z.focus());
    }
    function H(N) {
      const X = s.value + (N === "prev" ? -1 : 1) * u.value;
      s.value = Ue(X, 0, d.value - u.value);
    }
    const U = b(() => {
      let N = s.value > d.value - u.value ? -(d.value - u.value) + Xo(d.value - u.value - s.value) : -s.value;
      s.value <= 0 && (N = Xo(-s.value));
      const X = a.value && v.value ? -1 : 1;
      return {
        transform: `translate${v.value ? "X" : "Y"}(${X * N}px)`,
        transition: S.value ? "none" : "",
        willChange: S.value ? "transform" : ""
      };
    }), ee = b(() => ({
      next: r.next,
      prev: r.prev,
      select: r.select,
      isSelected: r.isSelected
    })), $ = b(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !i.value;
        case !0:
          return o.value || Math.abs(s.value) > 0;
        case "mobile":
          return i.value || o.value || Math.abs(s.value) > 0;
        default:
          return !i.value && (o.value || Math.abs(s.value) > 0);
      }
    }), R = b(() => Math.abs(s.value) > 0), j = b(() => d.value > Math.abs(s.value) + u.value);
    return F(() => c(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !v.value,
        "v-slide-group--has-affixes": $.value,
        "v-slide-group--is-overflowing": o.value
      }, l.value, e.class],
      style: e.style,
      tabindex: x.value || r.selected.value.length ? -1 : 0,
      onFocus: A
    }, {
      default: () => {
        var N, X, K;
        return [$.value && c("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !R.value
          }],
          onClick: () => R.value && H("prev")
        }, [((N = n.prev) == null ? void 0 : N.call(n, ee.value)) ?? c(tl, null, {
          default: () => [c(Ve, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), c("div", {
          key: "container",
          ref: f,
          class: "v-slide-group__container",
          onScroll: V
        }, [c("div", {
          ref: g,
          class: "v-slide-group__content",
          style: U.value,
          onTouchstartPassive: P,
          onTouchmovePassive: C,
          onTouchendPassive: k,
          onFocusin: T,
          onFocusout: M,
          onKeydown: B
        }, [(X = n.default) == null ? void 0 : X.call(n, ee.value)])]), $.value && c("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !j.value
          }],
          onClick: () => j.value && H("next")
        }, [((K = n.next) == null ? void 0 : K.call(n, ee.value)) ?? c(tl, null, {
          default: () => [c(Ve, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: r.selected,
      scrollTo: H,
      scrollOffset: s,
      focus: O
    };
  }
}), ju = Symbol.for("vuetify:v-chip-group"), $y = E({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: Ut
  },
  ...pr(),
  ...Q(),
  ...Tn({
    selectedClass: "v-chip--selected"
  }),
  ...me(),
  ...Se(),
  ...Tt({
    variant: "tonal"
  })
}, "VChipGroup"), _y = L()({
  name: "VChipGroup",
  props: $y(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = xe(e), {
      isSelected: l,
      select: i,
      next: r,
      prev: o,
      selected: s
    } = nn(e, ju);
    return _e({
      VChip: {
        color: _(e, "color"),
        disabled: _(e, "disabled"),
        filter: _(e, "filter"),
        variant: _(e, "variant")
      }
    }), F(() => {
      const u = pa.filterProps(e);
      return c(pa, D(u, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var d;
          return [(d = n.default) == null ? void 0 : d.call(n, {
            isSelected: l,
            select: i,
            next: r,
            prev: o,
            selected: s.value
          })];
        }
      });
    }), {};
  }
}), Ly = E({
  activeClass: String,
  appendAvatar: String,
  appendIcon: fe,
  closable: Boolean,
  closeIcon: {
    type: fe,
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
  prependIcon: fe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: ht(),
  onClickOnce: ht(),
  ...wt(),
  ...Q(),
  ...qe(),
  ...Ke(),
  ...Dn(),
  ...Oe(),
  ...Aa(),
  ...Gt(),
  ...me({
    tag: "span"
  }),
  ...Se(),
  ...Tt({
    variant: "tonal"
  })
}, "VChip"), Ba = L()({
  name: "VChip",
  directives: {
    Ripple: qt
  },
  props: Ly(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      t: i
    } = We(), {
      borderClasses: r
    } = It(e), {
      colorClasses: o,
      colorStyles: s,
      variantClasses: u
    } = In(e), {
      densityClasses: d
    } = ot(e), {
      elevationClasses: v
    } = Qe(e), {
      roundedClasses: f
    } = Re(e), {
      sizeClasses: m
    } = Un(e), {
      themeClasses: g
    } = xe(e), h = ue(e, "modelValue"), y = An(e, ju, !1), p = Da(e, n), S = b(() => e.link !== !1 && p.isLink.value), I = b(() => !e.disabled && e.link !== !1 && (!!y || e.link || p.isClickable.value)), w = b(() => ({
      "aria-label": i(e.closeLabel),
      onClick(k) {
        k.stopPropagation(), h.value = !1, a("click:close", k);
      }
    }));
    function P(k) {
      var V;
      a("click", k), I.value && ((V = p.navigate) == null || V.call(p, k), y == null || y.toggle());
    }
    function C(k) {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), P(k));
    }
    return () => {
      const k = p.isLink.value ? "a" : e.tag, V = !!(e.appendIcon || e.appendAvatar), x = !!(V || l.append), T = !!(l.close || e.closable), M = !!(l.filter || e.filter) && y, A = !!(e.prependIcon || e.prependAvatar), B = !!(A || l.prepend), O = !y || y.isSelected.value;
      return h.value && ge(c(k, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": I.value,
          "v-chip--filter": M,
          "v-chip--pill": e.pill
        }, g.value, r.value, O ? o.value : void 0, d.value, v.value, f.value, m.value, u.value, y == null ? void 0 : y.selectedClass.value, e.class],
        style: [O ? s.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: p.href.value,
        tabindex: I.value ? 0 : void 0,
        onClick: P,
        onKeydown: I.value && !S.value && C
      }, {
        default: () => {
          var H;
          return [Pn(I.value, "v-chip"), M && c(mr, {
            key: "filter"
          }, {
            default: () => [ge(c("div", {
              class: "v-chip__filter"
            }, [l.filter ? c(pe, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : c(Ve, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[xt, y.isSelected.value]])]
          }), B && c("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? c(pe, {
            key: "prepend-defaults",
            disabled: !A,
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
          }, l.prepend) : c(re, null, [e.prependIcon && c(Ve, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && c(Pt, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), c("div", {
            class: "v-chip__content"
          }, [((H = l.default) == null ? void 0 : H.call(l, {
            isSelected: y == null ? void 0 : y.isSelected.value,
            selectedClass: y == null ? void 0 : y.selectedClass.value,
            select: y == null ? void 0 : y.select,
            toggle: y == null ? void 0 : y.toggle,
            value: y == null ? void 0 : y.value.value,
            disabled: e.disabled
          })) ?? e.text]), x && c("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? c(pe, {
            key: "append-defaults",
            disabled: !V,
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
          }, l.append) : c(re, null, [e.appendIcon && c(Ve, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && c(Pt, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), T && c("button", D({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, w.value), [l.close ? c(pe, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : c(Ve, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[it("ripple"), I.value && e.ripple, null]]);
    };
  }
}), Di = Symbol.for("vuetify:list");
function zu() {
  const e = ke(Di, {
    hasPrepend: G(!1),
    updateHasPrepend: () => null
  }), t = {
    hasPrepend: G(!1),
    updateHasPrepend: (n) => {
      n && (t.hasPrepend.value = n);
    }
  };
  return Ee(Di, t), e;
}
function Yu() {
  return ke(Di, null);
}
const Fy = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (n) {
      const i = /* @__PURE__ */ new Set();
      i.add(t);
      let r = l.get(t);
      for (; r != null; )
        i.add(r), r = l.get(r);
      return i;
    } else
      return a.delete(t), a;
  },
  select: () => null
}, Wu = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (n) {
      let i = l.get(t);
      for (a.add(t); i != null && i !== t; )
        a.add(i), i = l.get(i);
      return a;
    } else
      a.delete(t);
    return a;
  },
  select: () => null
}, Ry = {
  open: Wu.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (!n)
      return a;
    const i = [];
    let r = l.get(t);
    for (; r != null; )
      i.push(r), r = l.get(r);
    return new Set(i);
  }
}, Sr = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: i
      } = n;
      if (a = en(a), e && !l) {
        const r = Array.from(i.entries()).reduce((o, s) => {
          let [u, d] = s;
          return d === "on" ? [...o, u] : o;
        }, []);
        if (r.length === 1 && r[0] === a)
          return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (n, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const r of n || [])
        i = t.select({
          id: r,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (n) => {
      const a = [];
      for (const [l, i] of n.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return t;
}, Uu = (e) => {
  const t = Sr(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...r
      } = a;
      i = en(i);
      const o = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...r,
        id: i,
        selected: o
      });
    },
    in: (a, l, i) => {
      let r = /* @__PURE__ */ new Map();
      return a != null && a.length && (r = t.in(a.slice(0, 1), l, i)), r;
    },
    out: (a, l, i) => t.out(a, l, i)
  };
}, Ny = (e) => {
  const t = Sr(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: r,
        ...o
      } = a;
      return l = en(l), r.has(l) ? i : t.select({
        id: l,
        selected: i,
        children: r,
        ...o
      });
    },
    in: t.in,
    out: t.out
  };
}, Hy = (e) => {
  const t = Uu(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: r,
        ...o
      } = a;
      return l = en(l), r.has(l) ? i : t.select({
        id: l,
        selected: i,
        children: r,
        ...o
      });
    },
    in: t.in,
    out: t.out
  };
}, jy = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: r,
        parents: o
      } = n;
      a = en(a);
      const s = new Map(i), u = [a];
      for (; u.length; ) {
        const v = u.shift();
        i.set(v, l ? "on" : "off"), r.has(v) && u.push(...r.get(v));
      }
      let d = o.get(a);
      for (; d; ) {
        const v = r.get(d), f = v.every((g) => i.get(g) === "on"), m = v.every((g) => !i.has(g) || i.get(g) === "off");
        i.set(d, f ? "on" : m ? "off" : "indeterminate"), d = o.get(d);
      }
      return e && !l && Array.from(i.entries()).reduce((f, m) => {
        let [g, h] = m;
        return h === "on" ? [...f, g] : f;
      }, []).length === 0 ? s : i;
    },
    in: (n, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const r of n || [])
        i = t.select({
          id: r,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (n, a) => {
      const l = [];
      for (const [i, r] of n.entries())
        r === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return t;
}, Sa = Symbol.for("vuetify:nested"), Ku = {
  id: G(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: Y(/* @__PURE__ */ new Map()),
    children: Y(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    select: () => null,
    opened: Y(/* @__PURE__ */ new Set()),
    selected: Y(/* @__PURE__ */ new Map()),
    selectedValues: Y([])
  }
}, zy = E({
  selectStrategy: [String, Function],
  openStrategy: [String, Object],
  opened: Array,
  selected: Array,
  mandatory: Boolean
}, "nested"), Yy = (e) => {
  let t = !1;
  const n = Y(/* @__PURE__ */ new Map()), a = Y(/* @__PURE__ */ new Map()), l = ue(e, "opened", e.opened, (v) => new Set(v), (v) => [...v.values()]), i = b(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return Hy(e.mandatory);
      case "leaf":
        return Ny(e.mandatory);
      case "independent":
        return Sr(e.mandatory);
      case "single-independent":
        return Uu(e.mandatory);
      case "classic":
      default:
        return jy(e.mandatory);
    }
  }), r = b(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Ry;
      case "single":
        return Fy;
      case "multiple":
      default:
        return Wu;
    }
  }), o = ue(e, "selected", e.selected, (v) => i.value.in(v, n.value, a.value), (v) => i.value.out(v, n.value, a.value));
  dt(() => {
    t = !0;
  });
  function s(v) {
    const f = [];
    let m = v;
    for (; m != null; )
      f.unshift(m), m = a.value.get(m);
    return f;
  }
  const u = Ye("nested"), d = {
    id: G(),
    root: {
      opened: l,
      selected: o,
      selectedValues: b(() => {
        const v = [];
        for (const [f, m] of o.value.entries())
          m === "on" && v.push(f);
        return v;
      }),
      register: (v, f, m) => {
        f && v !== f && a.value.set(v, f), m && n.value.set(v, []), f != null && n.value.set(f, [...n.value.get(f) || [], v]);
      },
      unregister: (v) => {
        if (t)
          return;
        n.value.delete(v);
        const f = a.value.get(v);
        if (f) {
          const m = n.value.get(f) ?? [];
          n.value.set(f, m.filter((g) => g !== v));
        }
        a.value.delete(v), l.value.delete(v);
      },
      open: (v, f, m) => {
        u.emit("click:open", {
          id: v,
          value: f,
          path: s(v),
          event: m
        });
        const g = r.value.open({
          id: v,
          value: f,
          opened: new Set(l.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        g && (l.value = g);
      },
      openOnSelect: (v, f, m) => {
        const g = r.value.select({
          id: v,
          value: f,
          selected: new Map(o.value),
          opened: new Set(l.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        g && (l.value = g);
      },
      select: (v, f, m) => {
        u.emit("click:select", {
          id: v,
          value: f,
          path: s(v),
          event: m
        });
        const g = i.value.select({
          id: v,
          value: f,
          selected: new Map(o.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        g && (o.value = g), d.root.openOnSelect(v, f, m);
      },
      children: n,
      parents: a
    }
  };
  return Ee(Sa, d), d.root;
}, Gu = (e, t) => {
  const n = ke(Sa, Ku), a = Symbol(rt()), l = b(() => e.value !== void 0 ? e.value : a), i = {
    ...n,
    id: l,
    open: (r, o) => n.root.open(l.value, r, o),
    openOnSelect: (r, o) => n.root.openOnSelect(l.value, r, o),
    isOpen: b(() => n.root.opened.value.has(l.value)),
    parent: b(() => n.root.parents.value.get(l.value)),
    select: (r, o) => n.root.select(l.value, r, o),
    isSelected: b(() => n.root.selected.value.get(en(l.value)) === "on"),
    isIndeterminate: b(() => n.root.selected.value.get(l.value) === "indeterminate"),
    isLeaf: b(() => !n.root.children.value.get(l.value)),
    isGroupActivator: n.isGroupActivator
  };
  return !n.isGroupActivator && n.root.register(l.value, n.id.value, t), dt(() => {
    !n.isGroupActivator && n.root.unregister(l.value);
  }), t && Ee(Sa, i), i;
}, Wy = () => {
  const e = ke(Sa, Ku);
  Ee(Sa, {
    ...e,
    isGroupActivator: !0
  });
}, Uy = pt({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Wy(), () => {
      var a;
      return (a = n.default) == null ? void 0 : a.call(n);
    };
  }
}), Ky = E({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: fe,
    default: "$collapse"
  },
  expandIcon: {
    type: fe,
    default: "$expand"
  },
  prependIcon: fe,
  appendIcon: fe,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...Q(),
  ...me()
}, "VListGroup"), Ai = L()({
  name: "VListGroup",
  props: Ky(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: a,
      open: l,
      id: i
    } = Gu(_(e, "value"), !0), r = b(() => `v-list-group--id-${String(i.value)}`), o = Yu(), {
      isBooted: s
    } = xn();
    function u(m) {
      l(!a.value, m);
    }
    const d = b(() => ({
      onClick: u,
      class: "v-list-group__header",
      id: r.value
    })), v = b(() => a.value ? e.collapseIcon : e.expandIcon), f = b(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && v.value,
        appendIcon: e.appendIcon || !e.subgroup && v.value,
        title: e.title,
        value: e.value
      }
    }));
    return F(() => c(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": o == null ? void 0 : o.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [n.activator && c(pe, {
        defaults: f.value
      }, {
        default: () => [c(Uy, null, {
          default: () => [n.activator({
            props: d.value,
            isOpen: a.value
          })]
        })]
      }), c(Vt, {
        transition: {
          component: ml
        },
        disabled: !s.value
      }, {
        default: () => {
          var m;
          return [ge(c("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": r.value
          }, [(m = n.default) == null ? void 0 : m.call(n)]), [[xt, a.value]])];
        }
      })]
    })), {};
  }
}), qu = St("v-list-item-subtitle"), Xu = St("v-list-item-title"), Gy = E({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: fe,
  baseColor: String,
  disabled: Boolean,
  lines: String,
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: fe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: ht(),
  onClickOnce: ht(),
  ...wt(),
  ...Q(),
  ...qe(),
  ...ft(),
  ...Ke(),
  ...Oe(),
  ...Aa(),
  ...me(),
  ...Se(),
  ...Tt({
    variant: "text"
  })
}, "VListItem"), Wt = L()({
  name: "VListItem",
  directives: {
    Ripple: qt
  },
  props: Gy(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const i = Da(e, n), r = b(() => e.value === void 0 ? i.href.value : e.value), {
      select: o,
      isSelected: s,
      isIndeterminate: u,
      isGroupActivator: d,
      root: v,
      parent: f,
      openOnSelect: m
    } = Gu(r, !1), g = Yu(), h = b(() => {
      var $;
      return e.active !== !1 && (e.active || (($ = i.isActive) == null ? void 0 : $.value) || s.value);
    }), y = b(() => e.link !== !1 && i.isLink.value), p = b(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!g)), S = b(() => e.rounded || e.nav), I = b(() => e.color ?? e.activeColor), w = b(() => ({
      color: h.value ? I.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    q(() => {
      var $;
      return ($ = i.isActive) == null ? void 0 : $.value;
    }, ($) => {
      $ && f.value != null && v.open(f.value, !0), $ && m($);
    }, {
      immediate: !0
    });
    const {
      themeClasses: P
    } = xe(e), {
      borderClasses: C
    } = It(e), {
      colorClasses: k,
      colorStyles: V,
      variantClasses: x
    } = In(w), {
      densityClasses: T
    } = ot(e), {
      dimensionStyles: M
    } = vt(e), {
      elevationClasses: A
    } = Qe(e), {
      roundedClasses: B
    } = Re(S), O = b(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), H = b(() => ({
      isActive: h.value,
      select: o,
      isSelected: s.value,
      isIndeterminate: u.value
    }));
    function U($) {
      var R;
      l("click", $), !(d || !p.value) && ((R = i.navigate) == null || R.call(i, $), e.value != null && o(!s.value, $));
    }
    function ee($) {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), U($));
    }
    return F(() => {
      const $ = y.value ? "a" : e.tag, R = a.title || e.title != null, j = a.subtitle || e.subtitle != null, N = !!(e.appendAvatar || e.appendIcon), X = !!(N || a.append), K = !!(e.prependAvatar || e.prependIcon), ie = !!(K || a.prepend);
      return g == null || g.updateHasPrepend(ie), e.activeColor && lh("active-color", ["color", "base-color"]), ge(c($, {
        class: ["v-list-item", {
          "v-list-item--active": h.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": p.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !ie && (g == null ? void 0 : g.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && h.value
        }, P.value, C.value, k.value, T.value, A.value, O.value, B.value, x.value, e.class],
        style: [V.value, M.value, e.style],
        href: i.href.value,
        tabindex: p.value ? g ? -2 : 0 : void 0,
        onClick: U,
        onKeydown: p.value && !y.value && ee
      }, {
        default: () => {
          var ne;
          return [Pn(p.value || h.value, "v-list-item"), ie && c("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? c(pe, {
            key: "prepend-defaults",
            disabled: !K,
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
              var z;
              return [(z = a.prepend) == null ? void 0 : z.call(a, H.value)];
            }
          }) : c(re, null, [e.prependAvatar && c(Pt, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && c(Ve, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), c("div", {
            class: "v-list-item__spacer"
          }, null)]), c("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [R && c(Xu, {
            key: "title"
          }, {
            default: () => {
              var z;
              return [((z = a.title) == null ? void 0 : z.call(a, {
                title: e.title
              })) ?? e.title];
            }
          }), j && c(qu, {
            key: "subtitle"
          }, {
            default: () => {
              var z;
              return [((z = a.subtitle) == null ? void 0 : z.call(a, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (ne = a.default) == null ? void 0 : ne.call(a, H.value)]), X && c("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? c(pe, {
            key: "append-defaults",
            disabled: !N,
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
              var z;
              return [(z = a.append) == null ? void 0 : z.call(a, H.value)];
            }
          }) : c(re, null, [e.appendIcon && c(Ve, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && c(Pt, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), c("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[it("ripple"), p.value && e.ripple]]);
    }), {};
  }
}), qy = E({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...Q(),
  ...me()
}, "VListSubheader"), Zu = L()({
  name: "VListSubheader",
  props: qy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = lt(_(e, "color"));
    return F(() => {
      const i = !!(n.default || e.title);
      return c(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: l
        }, e.style]
      }, {
        default: () => {
          var r;
          return [i && c("div", {
            class: "v-list-subheader__text"
          }, [((r = n.default) == null ? void 0 : r.call(n)) ?? e.title])];
        }
      });
    }), {};
  }
}), Xy = E({
  color: String,
  inset: Boolean,
  length: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...Q(),
  ...Se()
}, "VDivider"), kl = L()({
  name: "VDivider",
  props: Xy(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const {
      themeClasses: a
    } = xe(e), {
      textColorClasses: l,
      textColorStyles: i
    } = lt(_(e, "color")), r = b(() => {
      const o = {};
      return e.length && (o[e.vertical ? "maxHeight" : "maxWidth"] = J(e.length)), e.thickness && (o[e.vertical ? "borderRightWidth" : "borderTopWidth"] = J(e.thickness)), o;
    });
    return F(() => c("hr", {
      class: [{
        "v-divider": !0,
        "v-divider--inset": e.inset,
        "v-divider--vertical": e.vertical
      }, a.value, l.value, e.class],
      style: [r.value, i.value, e.style],
      "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
      role: `${n.role || "separator"}`
    }, null)), {};
  }
}), Zy = E({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Ju = L()({
  name: "VListChildren",
  props: Zy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return zu(), () => {
      var a, l;
      return ((a = n.default) == null ? void 0 : a.call(n)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var f, m;
        let {
          children: r,
          props: o,
          type: s,
          raw: u
        } = i;
        if (s === "divider")
          return ((f = n.divider) == null ? void 0 : f.call(n, {
            props: o
          })) ?? c(kl, o, null);
        if (s === "subheader")
          return ((m = n.subheader) == null ? void 0 : m.call(n, {
            props: o
          })) ?? c(Zu, o, null);
        const d = {
          subtitle: n.subtitle ? (g) => {
            var h;
            return (h = n.subtitle) == null ? void 0 : h.call(n, {
              ...g,
              item: u
            });
          } : void 0,
          prepend: n.prepend ? (g) => {
            var h;
            return (h = n.prepend) == null ? void 0 : h.call(n, {
              ...g,
              item: u
            });
          } : void 0,
          append: n.append ? (g) => {
            var h;
            return (h = n.append) == null ? void 0 : h.call(n, {
              ...g,
              item: u
            });
          } : void 0,
          title: n.title ? (g) => {
            var h;
            return (h = n.title) == null ? void 0 : h.call(n, {
              ...g,
              item: u
            });
          } : void 0
        }, v = Ai.filterProps(o);
        return r ? c(Ai, D({
          value: o == null ? void 0 : o.value
        }, v), {
          activator: (g) => {
            let {
              props: h
            } = g;
            const y = {
              ...o,
              ...h,
              value: e.returnObject ? u : o.value
            };
            return n.header ? n.header({
              props: y
            }) : c(Wt, y, d);
          },
          default: () => c(Ju, {
            items: r
          }, n)
        }) : n.item ? n.item({
          props: o
        }) : c(Wt, D(o, {
          value: e.returnObject ? u : o.value
        }), d);
      }));
    };
  }
}), Qu = E({
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
    default: Ut
  }
}, "list-items");
function fn(e, t) {
  const n = Xe(t, e.itemTitle, t), a = Xe(t, e.itemValue, n), l = Xe(t, e.itemChildren), i = e.itemProps === !0 ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Ge(t, ["children"]) : t : void 0 : Xe(t, e.itemProps), r = {
    title: n,
    value: a,
    ...i
  };
  return {
    title: String(r.title ?? ""),
    value: r.value,
    props: r,
    children: Array.isArray(l) ? ec(e, l) : void 0,
    raw: t
  };
}
function ec(e, t) {
  const n = [];
  for (const a of t)
    n.push(fn(e, a));
  return n;
}
function kr(e) {
  const t = b(() => ec(e, e.items)), n = b(() => t.value.some((i) => i.value === null));
  function a(i) {
    return n.value || (i = i.filter((r) => r !== null)), i.map((r) => e.returnObject && typeof r == "string" ? fn(e, r) : t.value.find((o) => e.valueComparator(r, o.value)) || fn(e, r));
  }
  function l(i) {
    return e.returnObject ? i.map((r) => {
      let {
        raw: o
      } = r;
      return o;
    }) : i.map((r) => {
      let {
        value: o
      } = r;
      return o;
    });
  }
  return {
    items: t,
    transformIn: a,
    transformOut: l
  };
}
function Jy(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Qy(e, t) {
  const n = Xe(t, e.itemType, "item"), a = Jy(t) ? t : Xe(t, e.itemTitle), l = Xe(t, e.itemValue, void 0), i = Xe(t, e.itemChildren), r = e.itemProps === !0 ? Ge(t, ["children"]) : Xe(t, e.itemProps), o = {
    title: a,
    value: l,
    ...r
  };
  return {
    type: n,
    title: o.title,
    value: o.value,
    props: o,
    children: n === "item" && i ? tc(e, i) : void 0,
    raw: t
  };
}
function tc(e, t) {
  const n = [];
  for (const a of t)
    n.push(Qy(e, a));
  return n;
}
function eb(e) {
  return {
    items: b(() => tc(e, e.items))
  };
}
const tb = E({
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
  ...zy({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...wt(),
  ...Q(),
  ...qe(),
  ...ft(),
  ...Ke(),
  itemType: {
    type: String,
    default: "type"
  },
  ...Qu(),
  ...Oe(),
  ...me(),
  ...Se(),
  ...Tt({
    variant: "text"
  })
}, "VList"), wl = L()({
  name: "VList",
  props: tb(),
  emits: {
    "update:selected": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: a
    } = eb(e), {
      themeClasses: l
    } = xe(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: r
    } = Ae(_(e, "bgColor")), {
      borderClasses: o
    } = It(e), {
      densityClasses: s
    } = ot(e), {
      dimensionStyles: u
    } = vt(e), {
      elevationClasses: d
    } = Qe(e), {
      roundedClasses: v
    } = Re(e), {
      open: f,
      select: m
    } = Yy(e), g = b(() => e.lines ? `v-list--${e.lines}-line` : void 0), h = _(e, "activeColor"), y = _(e, "baseColor"), p = _(e, "color");
    zu(), _e({
      VListGroup: {
        activeColor: h,
        baseColor: y,
        color: p,
        expandIcon: _(e, "expandIcon"),
        collapseIcon: _(e, "collapseIcon")
      },
      VListItem: {
        activeClass: _(e, "activeClass"),
        activeColor: h,
        baseColor: y,
        color: p,
        density: _(e, "density"),
        disabled: _(e, "disabled"),
        lines: _(e, "lines"),
        nav: _(e, "nav"),
        slim: _(e, "slim"),
        variant: _(e, "variant")
      }
    });
    const S = G(!1), I = Y();
    function w(T) {
      S.value = !0;
    }
    function P(T) {
      S.value = !1;
    }
    function C(T) {
      var M;
      !S.value && !(T.relatedTarget && ((M = I.value) != null && M.contains(T.relatedTarget))) && x();
    }
    function k(T) {
      if (I.value) {
        if (T.key === "ArrowDown")
          x("next");
        else if (T.key === "ArrowUp")
          x("prev");
        else if (T.key === "Home")
          x("first");
        else if (T.key === "End")
          x("last");
        else
          return;
        T.preventDefault();
      }
    }
    function V(T) {
      S.value = !0;
    }
    function x(T) {
      if (I.value)
        return _n(I.value, T);
    }
    return F(() => c(e.tag, {
      ref: I,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, o.value, s.value, d.value, g.value, v.value, e.class],
      style: [r.value, u.value, e.style],
      tabindex: e.disabled || S.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: w,
      onFocusout: P,
      onFocus: C,
      onKeydown: k,
      onMousedown: V
    }, {
      default: () => [c(Ju, {
        items: a.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: f,
      select: m,
      focus: x
    };
  }
}), nb = St("v-list-img"), ab = E({
  start: Boolean,
  end: Boolean,
  ...Q(),
  ...me()
}, "VListItemAction"), lb = L()({
  name: "VListItemAction",
  props: ab(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => c(e.tag, {
      class: ["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class],
      style: e.style
    }, n)), {};
  }
}), ib = E({
  start: Boolean,
  end: Boolean,
  ...Q(),
  ...me()
}, "VListItemMedia"), rb = L()({
  name: "VListItemMedia",
  props: ib(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => c(e.tag, {
      class: ["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }, e.class],
      style: e.style
    }, n)), {};
  }
});
function Ql(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function ob(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Jo(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Ql({
      x: l,
      y: i
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, i = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return Ql({
      x: l,
      y: i
    }, t);
  }
  return Ql({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const nc = {
  static: cb,
  // specific viewport position, usually centered
  connected: fb
  // connected to a certain element
}, sb = E({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in nc
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
function ub(e, t) {
  const n = Y({}), a = Y();
  De && Bt(() => !!(t.isActive.value && e.locationStrategy), (i) => {
    var r, o;
    q(() => e.locationStrategy, i), ct(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (r = e.locationStrategy(t, e, n)) == null ? void 0 : r.updateLocation : a.value = (o = nc[e.locationStrategy](t, e, n)) == null ? void 0 : o.updateLocation;
  });
  function l(i) {
    var r;
    (r = a.value) == null || r.call(a, i);
  }
  return {
    contentStyles: n,
    updateLocation: a
  };
}
function cb() {
}
function db(e, t) {
  t ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const n = nr(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function fb(e, t, n) {
  (Array.isArray(e.target.value) || xh(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = er(() => {
    const g = hi(t.location, e.isRtl.value), h = t.origin === "overlap" ? g : t.origin === "auto" ? ql(g) : hi(t.origin, e.isRtl.value);
    return g.side === h.side && g.align === Xl(h).align ? {
      preferredAnchor: po(g),
      preferredOrigin: po(h)
    } : {
      preferredAnchor: g,
      preferredOrigin: h
    };
  }), [r, o, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((g) => b(() => {
    const h = parseFloat(t[g]);
    return isNaN(h) ? 1 / 0 : h;
  })), d = b(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const g = t.offset.split(" ").map(parseFloat);
      return g.length < 2 && g.push(0), g;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let v = !1;
  const f = new ResizeObserver(() => {
    v && m();
  });
  q([e.target, e.contentEl], (g, h) => {
    let [y, p] = g, [S, I] = h;
    S && !Array.isArray(S) && f.unobserve(S), y && !Array.isArray(y) && f.observe(y), I && f.unobserve(I), p && f.observe(p);
  }, {
    immediate: !0
  }), ct(() => {
    f.disconnect();
  });
  function m() {
    if (v = !1, requestAnimationFrame(() => v = !0), !e.target.value || !e.contentEl.value)
      return;
    const g = Hs(e.target.value), h = db(e.contentEl.value, e.isRtl.value), y = Qa(e.contentEl.value), p = 12;
    y.length || (y.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const S = y.reduce((M, A) => {
      const B = A.getBoundingClientRect(), O = new mn({
        x: A === document.documentElement ? 0 : B.x,
        y: A === document.documentElement ? 0 : B.y,
        width: A.clientWidth,
        height: A.clientHeight
      });
      return M ? new mn({
        x: Math.max(M.left, O.left),
        y: Math.max(M.top, O.top),
        width: Math.min(M.right, O.right) - Math.max(M.left, O.left),
        height: Math.min(M.bottom, O.bottom) - Math.max(M.top, O.top)
      }) : O;
    }, void 0);
    S.x += p, S.y += p, S.width -= p * 2, S.height -= p * 2;
    let I = {
      anchor: l.value,
      origin: i.value
    };
    function w(M) {
      const A = new mn(h), B = Jo(M.anchor, g), O = Jo(M.origin, A);
      let {
        x: H,
        y: U
      } = ob(B, O);
      switch (M.anchor.side) {
        case "top":
          U -= d.value[0];
          break;
        case "bottom":
          U += d.value[0];
          break;
        case "left":
          H -= d.value[0];
          break;
        case "right":
          H += d.value[0];
          break;
      }
      switch (M.anchor.align) {
        case "top":
          U -= d.value[1];
          break;
        case "bottom":
          U += d.value[1];
          break;
        case "left":
          H -= d.value[1];
          break;
        case "right":
          H += d.value[1];
          break;
      }
      return A.x += H, A.y += U, A.width = Math.min(A.width, s.value), A.height = Math.min(A.height, u.value), {
        overflows: ko(A, S),
        x: H,
        y: U
      };
    }
    let P = 0, C = 0;
    const k = {
      x: 0,
      y: 0
    }, V = {
      x: !1,
      y: !1
    };
    let x = -1;
    for (; ; ) {
      if (x++ > 10) {
        Za("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: M,
        y: A,
        overflows: B
      } = w(I);
      P += M, C += A, h.x += M, h.y += A;
      {
        const O = So(I.anchor), H = B.x.before || B.x.after, U = B.y.before || B.y.after;
        let ee = !1;
        if (["x", "y"].forEach(($) => {
          if ($ === "x" && H && !V.x || $ === "y" && U && !V.y) {
            const R = {
              anchor: {
                ...I.anchor
              },
              origin: {
                ...I.origin
              }
            }, j = $ === "x" ? O === "y" ? Xl : ql : O === "y" ? ql : Xl;
            R.anchor = j(R.anchor), R.origin = j(R.origin);
            const {
              overflows: N
            } = w(R);
            (N[$].before <= B[$].before && N[$].after <= B[$].after || N[$].before + N[$].after < (B[$].before + B[$].after) / 2) && (I = R, ee = V[$] = !0);
          }
        }), ee)
          continue;
      }
      B.x.before && (P += B.x.before, h.x += B.x.before), B.x.after && (P -= B.x.after, h.x -= B.x.after), B.y.before && (C += B.y.before, h.y += B.y.before), B.y.after && (C -= B.y.after, h.y -= B.y.after);
      {
        const O = ko(h, S);
        k.x = S.width - O.x.before - O.x.after, k.y = S.height - O.y.before - O.y.after, P += O.x.before, h.x += O.x.before, C += O.y.before, h.y += O.y.before;
      }
      break;
    }
    const T = So(I.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${I.anchor.side} ${I.anchor.align}`,
      transformOrigin: `${I.origin.side} ${I.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: J(ei(C)),
      left: e.isRtl.value ? void 0 : J(ei(P)),
      right: e.isRtl.value ? J(ei(-P)) : void 0,
      minWidth: J(T === "y" ? Math.min(r.value, g.width) : r.value),
      maxWidth: J(Qo(Ue(k.x, r.value === 1 / 0 ? 0 : r.value, s.value))),
      maxHeight: J(Qo(Ue(k.y, o.value === 1 / 0 ? 0 : o.value, u.value)))
    }), {
      available: k,
      contentBox: h
    };
  }
  return q(() => [l.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => m()), Ce(() => {
    const g = m();
    if (!g)
      return;
    const {
      available: h,
      contentBox: y
    } = g;
    y.height > h.y && requestAnimationFrame(() => {
      m(), requestAnimationFrame(() => {
        m();
      });
    });
  }), {
    updateLocation: m
  };
}
function ei(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Qo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Mi = !0;
const al = [];
function vb(e) {
  !Mi || al.length ? (al.push(e), Bi()) : (Mi = !1, e(), Bi());
}
let es = -1;
function Bi() {
  cancelAnimationFrame(es), es = requestAnimationFrame(() => {
    const e = al.shift();
    e && e(), al.length ? Bi() : Mi = !0;
  });
}
const Ga = {
  none: null,
  close: gb,
  block: yb,
  reposition: bb
}, mb = E({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ga
  }
}, "VOverlay-scroll-strategies");
function hb(e, t) {
  if (!De)
    return;
  let n;
  Ze(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = qi(), await Ce(), n.active && n.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (a = Ga[e.scrollStrategy]) == null || a.call(Ga, t, e, n);
    }));
  }), ct(() => {
    n == null || n.stop();
  });
}
function gb(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  ac(e.targetEl.value ?? e.contentEl.value, t);
}
function yb(e, t) {
  var r;
  const n = (r = e.root.value) == null ? void 0 : r.offsetParent, a = [.../* @__PURE__ */ new Set([...Qa(e.targetEl.value, t.contained ? n : void 0), ...Qa(e.contentEl.value, t.contained ? n : void 0)])].filter((o) => !o.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((o) => or(o) && o)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((o, s) => {
    o.style.setProperty("--v-body-scroll-x", J(-o.scrollLeft)), o.style.setProperty("--v-body-scroll-y", J(-o.scrollTop)), o !== document.documentElement && o.style.setProperty("--v-scrollbar-offset", J(l)), o.classList.add("v-overlay-scroll-blocked");
  }), ct(() => {
    a.forEach((o, s) => {
      const u = parseFloat(o.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(o.style.getPropertyValue("--v-body-scroll-y"));
      o.style.removeProperty("--v-body-scroll-x"), o.style.removeProperty("--v-body-scroll-y"), o.style.removeProperty("--v-scrollbar-offset"), o.classList.remove("v-overlay-scroll-blocked"), o.scrollLeft = -u, o.scrollTop = -d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function bb(e, t, n) {
  let a = !1, l = -1, i = -1;
  function r(o) {
    vb(() => {
      var d, v;
      const s = performance.now();
      (v = (d = e.updateLocation).value) == null || v.call(d, o), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (o) => o() : requestIdleCallback)(() => {
    n.run(() => {
      ac(e.targetEl.value ?? e.contentEl.value, (o) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            r(o);
          });
        })) : r(o);
      });
    });
  }), ct(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function ac(e, t) {
  const n = [document, ...Qa(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), ct(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const Ei = Symbol.for("vuetify:v-menu"), lc = E({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function ic(e, t) {
  let n = () => {
  };
  function a(r) {
    n == null || n();
    const o = Number(r ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      n = Km(o, () => {
        t == null || t(r), s(r);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const pb = E({
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
  ...lc()
}, "VOverlay-activator");
function Sb(e, t) {
  let {
    isActive: n,
    isTop: a
  } = t;
  const l = Ye("useActivator"), i = Y();
  let r = !1, o = !1, s = !0;
  const u = b(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = b(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !u.value), {
    runOpenDelay: v,
    runCloseDelay: f
  } = ic(e, (k) => {
    k === (e.openOnHover && r || u.value && o) && !(e.openOnHover && n.value && !a.value) && (n.value !== k && (s = !0), n.value = k);
  }), m = Y(), g = {
    onClick: (k) => {
      k.stopPropagation(), i.value = k.currentTarget || k.target, n.value || (m.value = [k.clientX, k.clientY]), n.value = !n.value;
    },
    onMouseenter: (k) => {
      var V;
      (V = k.sourceCapabilities) != null && V.firesTouchEvents || (r = !0, i.value = k.currentTarget || k.target, v());
    },
    onMouseleave: (k) => {
      r = !1, f();
    },
    onFocus: (k) => {
      Ln(k.target, ":focus-visible") !== !1 && (o = !0, k.stopPropagation(), i.value = k.currentTarget || k.target, v());
    },
    onBlur: (k) => {
      o = !1, k.stopPropagation(), f();
    }
  }, h = b(() => {
    const k = {};
    return d.value && (k.onClick = g.onClick), e.openOnHover && (k.onMouseenter = g.onMouseenter, k.onMouseleave = g.onMouseleave), u.value && (k.onFocus = g.onFocus, k.onBlur = g.onBlur), k;
  }), y = b(() => {
    const k = {};
    if (e.openOnHover && (k.onMouseenter = () => {
      r = !0, v();
    }, k.onMouseleave = () => {
      r = !1, f();
    }), u.value && (k.onFocusin = () => {
      o = !0, v();
    }, k.onFocusout = () => {
      o = !1, f();
    }), e.closeOnContentClick) {
      const V = ke(Ei, null);
      k.onClick = () => {
        n.value = !1, V == null || V.closeParents();
      };
    }
    return k;
  }), p = b(() => {
    const k = {};
    return e.openOnHover && (k.onMouseenter = () => {
      s && (r = !0, s = !1, v());
    }, k.onMouseleave = () => {
      r = !1, f();
    }), k;
  });
  q(a, (k) => {
    k && (e.openOnHover && !r && (!u.value || !o) || u.value && !o && (!e.openOnHover || !r)) && (n.value = !1);
  }), q(n, (k) => {
    k || setTimeout(() => {
      m.value = void 0;
    });
  }, {
    flush: "post"
  });
  const S = Y();
  Ze(() => {
    S.value && Ce(() => {
      i.value = va(S.value);
    });
  });
  const I = Y(), w = b(() => e.target === "cursor" && m.value ? m.value : I.value ? va(I.value) : rc(e.target, l) || i.value), P = b(() => Array.isArray(w.value) ? void 0 : w.value);
  let C;
  return q(() => !!e.activator, (k) => {
    k && De ? (C = qi(), C.run(() => {
      kb(e, l, {
        activatorEl: i,
        activatorEvents: h
      });
    })) : C && C.stop();
  }, {
    flush: "post",
    immediate: !0
  }), ct(() => {
    C == null || C.stop();
  }), {
    activatorEl: i,
    activatorRef: S,
    target: w,
    targetEl: P,
    targetRef: I,
    activatorEvents: h,
    contentEvents: y,
    scrimEvents: p
  };
}
function kb(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = n;
  q(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const d = o(u);
      d && r(d);
    }
    s && Ce(() => i());
  }, {
    immediate: !0
  }), q(() => e.activatorProps, () => {
    i();
  }), ct(() => {
    r();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && qm(s, D(l.value, u));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : o(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Xm(s, D(l.value, u));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = rc(s, t);
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : void 0, a.value;
  }
}
function rc(e, t) {
  var a, l;
  if (!e)
    return;
  let n;
  if (e === "parent") {
    let i = (l = (a = t == null ? void 0 : t.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    n = i;
  } else
    typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function oc() {
  if (!De)
    return G(!1);
  const {
    ssr: e
  } = Vn();
  if (e) {
    const t = G(!1);
    return tt(() => {
      t.value = !0;
    }), t;
  } else
    return G(!0);
}
const Cl = E({
  eager: Boolean
}, "lazy");
function wr(e, t) {
  const n = G(!1), a = b(() => n.value || e.eager || t.value);
  q(t, () => n.value = !0);
  function l() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: a,
    onAfterLeave: l
  };
}
function Xn() {
  const t = Ye("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const ts = Symbol.for("vuetify:stack"), Jn = gt([]);
function wb(e, t, n) {
  const a = Ye("useStack"), l = !n, i = ke(ts, void 0), r = gt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ee(ts, r);
  const o = G(+t.value);
  Bt(e, () => {
    var v;
    const d = (v = Jn.at(-1)) == null ? void 0 : v[1];
    o.value = d ? d + 10 : +t.value, l && Jn.push([a.uid, o.value]), i == null || i.activeChildren.add(a.uid), ct(() => {
      if (l) {
        const f = en(Jn).findIndex((m) => m[0] === a.uid);
        Jn.splice(f, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const s = G(!0);
  l && Ze(() => {
    var v;
    const d = ((v = Jn.at(-1)) == null ? void 0 : v[0]) === a.uid;
    setTimeout(() => s.value = d);
  });
  const u = b(() => !r.activeChildren.size);
  return {
    globalTop: ll(s),
    localTop: u,
    stackStyles: b(() => ({
      zIndex: o.value
    }))
  };
}
function Cb(e) {
  return {
    teleportTarget: b(() => {
      const n = e.value;
      if (n === !0 || !De)
        return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null) {
        rl(`Unable to locate target ${n}`);
        return;
      }
      let l = a.querySelector(":scope > .v-overlay-container");
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Vb() {
  return !0;
}
function sc(e, t, n) {
  if (!e || uc(e, n) === !1)
    return !1;
  const a = Qs(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target)
    return !1;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function uc(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Vb)(e);
}
function xb(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  t._clickOutside.lastMousedownWasOutside && sc(e, t, n) && setTimeout(() => {
    uc(e, n) && a && a(e);
  }, 0);
}
function ns(e, t) {
  const n = Qs(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const cc = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (l) => xb(l, e, t), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = sc(l, e, t);
    };
    ns(e, (l) => {
      l.addEventListener("click", n, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  unmounted(e, t) {
    e._clickOutside && (ns(e, (n) => {
      var i;
      if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid]))
        return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function Pb(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return c(Ht, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && c("div", D({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const Ea = E({
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
  ...pb(),
  ...Q(),
  ...ft(),
  ...Cl(),
  ...sb(),
  ...mb(),
  ...Se(),
  ...Kt()
}, "VOverlay"), Ft = L()({
  name: "VOverlay",
  directives: {
    ClickOutside: cc
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Ea()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: l
    } = t;
    const i = ue(e, "modelValue"), r = b({
      get: () => i.value,
      set: (K) => {
        K && e.disabled || (i.value = K);
      }
    }), {
      teleportTarget: o
    } = Cb(b(() => e.attach || e.contained)), {
      themeClasses: s
    } = xe(e), {
      rtlClasses: u,
      isRtl: d
    } = Je(), {
      hasContent: v,
      onAfterLeave: f
    } = wr(e, r), m = Ae(b(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: g,
      localTop: h,
      stackStyles: y
    } = wb(r, _(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: p,
      activatorRef: S,
      target: I,
      targetEl: w,
      targetRef: P,
      activatorEvents: C,
      contentEvents: k,
      scrimEvents: V
    } = Sb(e, {
      isActive: r,
      isTop: h
    }), {
      dimensionStyles: x
    } = vt(e), T = oc(), {
      scopeId: M
    } = Xn();
    q(() => e.disabled, (K) => {
      K && (r.value = !1);
    });
    const A = Y(), B = Y(), {
      contentStyles: O,
      updateLocation: H
    } = ub(e, {
      isRtl: d,
      contentEl: B,
      target: I,
      isActive: r
    });
    hb(e, {
      root: A,
      contentEl: B,
      targetEl: w,
      isActive: r,
      updateLocation: H
    });
    function U(K) {
      l("click:outside", K), e.persistent ? N() : r.value = !1;
    }
    function ee() {
      return r.value && g.value;
    }
    De && q(r, (K) => {
      K ? window.addEventListener("keydown", $) : window.removeEventListener("keydown", $);
    }, {
      immediate: !0
    }), dt(() => {
      De && window.removeEventListener("keydown", $);
    });
    function $(K) {
      var ie, ne;
      K.key === "Escape" && g.value && (e.persistent ? N() : (r.value = !1, (ie = B.value) != null && ie.contains(document.activeElement) && ((ne = p.value) == null || ne.focus())));
    }
    const R = Cu();
    Bt(() => e.closeOnBack, () => {
      fy(R, (K) => {
        g.value && r.value ? (K(!1), e.persistent ? N() : r.value = !1) : K();
      });
    });
    const j = Y();
    q(() => r.value && (e.absolute || e.contained) && o.value == null, (K) => {
      if (K) {
        const ie = rr(A.value);
        ie && ie !== document.scrollingElement && (j.value = ie.scrollTop);
      }
    });
    function N() {
      e.noClickAnimation || B.value && dn(B.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: ha
      });
    }
    function X() {
      f(), l("afterLeave");
    }
    return F(() => {
      var K;
      return c(re, null, [(K = n.activator) == null ? void 0 : K.call(n, {
        isActive: r.value,
        props: D({
          ref: S,
          targetRef: P
        }, C.value, e.activatorProps)
      }), !e.disabled && T.value && v.value && c(vs, {
        disabled: !o.value,
        to: o.value
      }, {
        default: () => [c("div", D({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": r.value,
            "v-overlay--contained": e.contained
          }, s.value, u.value, e.class],
          style: [y.value, {
            top: J(j.value)
          }, e.style],
          ref: A
        }, M, a), [c(Pb, D({
          color: m,
          modelValue: !!e.scrim && r.value
        }, V.value), null), c(Vt, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: I.value,
          onAfterLeave: X
        }, {
          default: () => {
            var ie;
            return [ge(c("div", D({
              ref: B,
              class: ["v-overlay__content", e.contentClass],
              style: [x.value, O.value]
            }, k.value, e.contentProps), [(ie = n.default) == null ? void 0 : ie.call(n, {
              isActive: r
            })]), [[xt, r.value], [it("click-outside"), {
              handler: U,
              closeConditional: ee,
              include: () => [p.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: p,
      target: I,
      animateClick: N,
      contentEl: B,
      globalTop: g,
      localTop: h,
      updateLocation: H
    };
  }
}), ti = Symbol("Forwarded refs");
function ni(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a)
      return a;
    n = Object.getPrototypeOf(n);
  }
}
function Dt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[ti] = n, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const r of n)
          if (r.value && Reflect.has(r.value, i)) {
            const o = Reflect.get(r.value, i);
            return typeof o == "function" ? o.bind(r.value) : o;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
        return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, i))
          return !0;
      return !1;
    },
    set(l, i, r) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, r);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
        return !1;
      for (const o of n)
        if (o.value && Reflect.has(o.value, i))
          return Reflect.set(o.value, i, r);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var o;
      const r = Reflect.getOwnPropertyDescriptor(l, i);
      if (r)
        return r;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of n) {
          if (!s.value)
            continue;
          const u = ni(s.value, i) ?? ("_" in s.value ? ni((o = s.value._) == null ? void 0 : o.setupState, i) : void 0);
          if (u)
            return u;
        }
        for (const s of n) {
          const u = s.value && s.value[ti];
          if (!u)
            continue;
          const d = u.slice();
          for (; d.length; ) {
            const v = d.shift(), f = ni(v.value, i);
            if (f)
              return f;
            const m = v.value && v.value[ti];
            m && d.push(...m);
          }
        }
      }
    }
  });
}
const Ib = E({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...Ge(Ea({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: vl
    }
  }), ["absolute"])
}, "VMenu"), Vl = L()({
  name: "VMenu",
  props: Ib(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "modelValue"), {
      scopeId: l
    } = Xn(), i = rt(), r = b(() => e.id || `v-menu-${i}`), o = Y(), s = ke(Ei, null), u = G(0);
    Ee(Ei, {
      register() {
        ++u.value;
      },
      unregister() {
        --u.value;
      },
      closeParents() {
        setTimeout(() => {
          u.value || (a.value = !1, s == null || s.closeParents());
        }, 40);
      }
    });
    async function d(h) {
      var S, I, w;
      const y = h.relatedTarget, p = h.target;
      await Ce(), a.value && y !== p && ((S = o.value) != null && S.contentEl) && // We're the topmost menu
      ((I = o.value) != null && I.globalTop) && // It isn't the document or the menu body
      ![document, o.value.contentEl].includes(p) && // It isn't inside the menu body
      !o.value.contentEl.contains(p) && ((w = ma(o.value.contentEl)[0]) == null || w.focus());
    }
    q(a, (h) => {
      h ? (s == null || s.register(), document.addEventListener("focusin", d, {
        once: !0
      })) : (s == null || s.unregister(), document.removeEventListener("focusin", d));
    });
    function v() {
      s == null || s.closeParents();
    }
    function f(h) {
      var y, p, S;
      e.disabled || h.key === "Tab" && (Fs(ma((y = o.value) == null ? void 0 : y.contentEl, !1), h.shiftKey ? "prev" : "next", (w) => w.tabIndex >= 0) || (a.value = !1, (S = (p = o.value) == null ? void 0 : p.activatorEl) == null || S.focus()));
    }
    function m(h) {
      var p;
      if (e.disabled)
        return;
      const y = (p = o.value) == null ? void 0 : p.contentEl;
      y && a.value ? h.key === "ArrowDown" ? (h.preventDefault(), _n(y, "next")) : h.key === "ArrowUp" && (h.preventDefault(), _n(y, "prev")) : ["ArrowDown", "ArrowUp"].includes(h.key) && (a.value = !0, h.preventDefault(), setTimeout(() => setTimeout(() => m(h))));
    }
    const g = b(() => D({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": r.value,
      onKeydown: m
    }, e.activatorProps));
    return F(() => {
      const h = Ft.filterProps(e);
      return c(Ft, D({
        ref: o,
        class: ["v-menu", e.class],
        style: e.style
      }, h, {
        modelValue: a.value,
        "onUpdate:modelValue": (y) => a.value = y,
        absolute: !0,
        activatorProps: g.value,
        "onClick:outside": v,
        onKeydown: f
      }, l), {
        activator: n.activator,
        default: function() {
          for (var y = arguments.length, p = new Array(y), S = 0; S < y; S++)
            p[S] = arguments[S];
          return c(pe, {
            root: "VMenu"
          }, {
            default: () => {
              var I;
              return [(I = n.default) == null ? void 0 : I.call(n, ...p)];
            }
          });
        }
      });
    }), Dt({
      id: r,
      ΨopenChildren: u
    }, o);
  }
}), Tb = E({
  active: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...Q(),
  ...Kt({
    transition: {
      component: vr
    }
  })
}, "VCounter"), xl = L()({
  name: "VCounter",
  functional: !0,
  props: Tb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = b(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return F(() => c(Vt, {
      transition: e.transition
    }, {
      default: () => [ge(c("div", {
        class: ["v-counter", e.class],
        style: e.style
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[xt, e.active]])]
    })), {};
  }
}), Db = E({
  floating: Boolean,
  ...Q()
}, "VFieldLabel"), Qn = L()({
  name: "VFieldLabel",
  props: Db(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => c(qn, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), Ab = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Oa = E({
  appendInnerIcon: fe,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: fe,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
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
  prependInnerIcon: fe,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Ab.includes(e)
  },
  "onClick:clear": ht(),
  "onClick:appendInner": ht(),
  "onClick:prependInner": ht(),
  ...Q(),
  ...yl(),
  ...Oe(),
  ...Se()
}, "VField"), Zn = L()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Ma(),
    ...Oa()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      themeClasses: i
    } = xe(e), {
      loaderClasses: r
    } = Ta(e), {
      focusClasses: o,
      isFocused: s,
      focus: u,
      blur: d
    } = Xt(e), {
      InputIcon: v
    } = _u(e), {
      roundedClasses: f
    } = Re(e), {
      rtlClasses: m
    } = Je(), g = b(() => e.dirty || e.active), h = b(() => !e.singleLine && !!(e.label || l.label)), y = rt(), p = b(() => e.id || `input-${y}`), S = b(() => `${p.value}-messages`), I = Y(), w = Y(), P = Y(), C = b(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: k,
      backgroundColorStyles: V
    } = Ae(_(e, "bgColor")), {
      textColorClasses: x,
      textColorStyles: T
    } = lt(b(() => e.error || e.disabled ? void 0 : g.value && s.value ? e.color : e.baseColor));
    q(g, (B) => {
      if (h.value) {
        const O = I.value.$el, H = w.value.$el;
        requestAnimationFrame(() => {
          const U = nr(O), ee = H.getBoundingClientRect(), $ = ee.x - U.x, R = ee.y - U.y - (U.height / 2 - ee.height / 2), j = ee.width / 0.75, N = Math.abs(j - U.width) > 1 ? {
            maxWidth: J(j)
          } : void 0, X = getComputedStyle(O), K = getComputedStyle(H), ie = parseFloat(X.transitionDuration) * 1e3 || 150, ne = parseFloat(K.getPropertyValue("--v-field-label-scale")), z = K.getPropertyValue("color");
          O.style.visibility = "visible", H.style.visibility = "hidden", dn(O, {
            transform: `translate(${$}px, ${R}px) scale(${ne})`,
            color: z,
            ...N
          }, {
            duration: ie,
            easing: ha,
            direction: B ? "normal" : "reverse"
          }).finished.then(() => {
            O.style.removeProperty("visibility"), H.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const M = b(() => ({
      isActive: g,
      isFocused: s,
      controlRef: P,
      blur: d,
      focus: u
    }));
    function A(B) {
      B.target !== document.activeElement && B.preventDefault();
    }
    return F(() => {
      var $, R, j;
      const B = e.variant === "outlined", O = l["prepend-inner"] || e.prependInnerIcon, H = !!(e.clearable || l.clear), U = !!(l["append-inner"] || e.appendInnerIcon || H), ee = () => l.label ? l.label({
        ...M.value,
        label: e.label,
        props: {
          for: p.value
        }
      }) : e.label;
      return c("div", D({
        class: ["v-field", {
          "v-field--active": g.value,
          "v-field--appended": U,
          "v-field--center-affix": e.centerAffix ?? !C.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": O,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !ee(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, k.value, o.value, r.value, f.value, m.value, e.class],
        style: [V.value, e.style],
        onClick: A
      }, n), [c("div", {
        class: "v-field__overlay"
      }, null), c(bl, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), O && c("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && c(v, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), ($ = l["prepend-inner"]) == null ? void 0 : $.call(l, M.value)]), c("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && h.value && c(Qn, {
        key: "floating-label",
        ref: w,
        class: [x.value],
        floating: !0,
        for: p.value,
        style: T.value
      }, {
        default: () => [ee()]
      }), c(Qn, {
        ref: I,
        for: p.value
      }, {
        default: () => [ee()]
      }), (R = l.default) == null ? void 0 : R.call(l, {
        ...M.value,
        props: {
          id: p.value,
          class: "v-field__input",
          "aria-describedby": S.value
        },
        focus: u,
        blur: d
      })]), H && c(mr, {
        key: "clear"
      }, {
        default: () => [ge(c("div", {
          class: "v-field__clearable",
          onMousedown: (N) => {
            N.preventDefault(), N.stopPropagation();
          }
        }, [l.clear ? l.clear() : c(v, {
          name: "clear"
        }, null)]), [[xt, e.dirty]])]
      }), U && c("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(j = l["append-inner"]) == null ? void 0 : j.call(l, M.value), e.appendInnerIcon && c(v, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), c("div", {
        class: ["v-field__outline", x.value],
        style: T.value
      }, [B && c(re, null, [c("div", {
        class: "v-field__outline__start"
      }, null), h.value && c("div", {
        class: "v-field__outline__notch"
      }, [c(Qn, {
        ref: w,
        floating: !0,
        for: p.value
      }, {
        default: () => [ee()]
      })]), c("div", {
        class: "v-field__outline__end"
      }, null)]), C.value && h.value && c(Qn, {
        ref: w,
        floating: !0,
        for: p.value
      }, {
        default: () => [ee()]
      })])]);
    }), {
      controlRef: P
    };
  }
});
function Cr(e) {
  const t = Object.keys(Zn.props).filter((n) => !sl(n) && n !== "class" && n !== "style");
  return Es(e, t);
}
const Mb = ["color", "file", "time", "date", "datetime-local", "week", "month"], Pl = E({
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
  ...Zt(),
  ...Oa()
}, "VTextField"), pn = L()({
  name: "VTextField",
  directives: {
    Intersect: Ia
  },
  inheritAttrs: !1,
  props: Pl(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const i = ue(e, "modelValue"), {
      isFocused: r,
      focus: o,
      blur: s
    } = Xt(e), u = b(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = b(() => {
      if (n.maxlength)
        return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), v = b(() => ["plain", "underlined"].includes(e.variant));
    function f(C, k) {
      var V, x;
      !e.autofocus || !C || (x = (V = k[0].target) == null ? void 0 : V.focus) == null || x.call(V);
    }
    const m = Y(), g = Y(), h = Y(), y = b(() => Mb.includes(e.type) || e.persistentPlaceholder || r.value || e.active);
    function p() {
      var C;
      h.value !== document.activeElement && ((C = h.value) == null || C.focus()), r.value || o();
    }
    function S(C) {
      a("mousedown:control", C), C.target !== h.value && (p(), C.preventDefault());
    }
    function I(C) {
      p(), a("click:control", C);
    }
    function w(C) {
      C.stopPropagation(), p(), Ce(() => {
        i.value = null, tr(e["onClick:clear"], C);
      });
    }
    function P(C) {
      var V;
      const k = C.target;
      if (i.value = k.value, (V = e.modelModifiers) != null && V.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const x = [k.selectionStart, k.selectionEnd];
        Ce(() => {
          k.selectionStart = x[0], k.selectionEnd = x[1];
        });
      }
    }
    return F(() => {
      const C = !!(l.counter || e.counter !== !1 && e.counter != null), k = !!(C || l.details), [V, x] = tn(n), {
        modelValue: T,
        ...M
      } = et.filterProps(e), A = Cr(e);
      return c(et, D({
        ref: m,
        modelValue: i.value,
        "onUpdate:modelValue": (B) => i.value = B,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": v.value
        }, e.class],
        style: e.style
      }, V, M, {
        centerAffix: !v.value,
        focused: r.value
      }), {
        ...l,
        default: (B) => {
          let {
            id: O,
            isDisabled: H,
            isDirty: U,
            isReadonly: ee,
            isValid: $
          } = B;
          return c(Zn, D({
            ref: g,
            onMousedown: S,
            onClick: I,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, A, {
            id: O.value,
            active: y.value || U.value,
            dirty: U.value || e.dirty,
            disabled: H.value,
            focused: r.value,
            error: $.value === !1
          }), {
            ...l,
            default: (R) => {
              let {
                props: {
                  class: j,
                  ...N
                }
              } = R;
              const X = ge(c("input", D({
                ref: h,
                value: i.value,
                onInput: P,
                autofocus: e.autofocus,
                readonly: ee.value,
                disabled: H.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: p,
                onBlur: s
              }, N, x), null), [[it("intersect"), {
                handler: f
              }, null, {
                once: !0
              }]]);
              return c(re, null, [e.prefix && c("span", {
                class: "v-text-field__prefix"
              }, [c("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? c("div", {
                class: j,
                "data-no-activator": ""
              }, [l.default(), X]) : Rd(X, {
                class: j
              }), e.suffix && c("span", {
                class: "v-text-field__suffix"
              }, [c("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: k ? (B) => {
          var O;
          return c(re, null, [(O = l.details) == null ? void 0 : O.call(l, B), C && c(re, null, [c("span", null, null), c(xl, {
            active: e.persistentCounter || r.value,
            value: u.value,
            max: d.value
          }, l.counter)])]);
        } : void 0
      });
    }), Dt({}, m, g, h);
  }
}), Bb = E({
  renderless: Boolean,
  ...Q()
}, "VVirtualScrollItem"), dc = L()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Bb(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      resizeRef: i,
      contentRect: r
    } = Lt(void 0, "border");
    q(() => {
      var o;
      return (o = r.value) == null ? void 0 : o.height;
    }, (o) => {
      o != null && a("update:height", o);
    }), F(() => {
      var o, s;
      return e.renderless ? c(re, null, [(o = l.default) == null ? void 0 : o.call(l, {
        itemRef: i
      })]) : c("div", D({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, n), [(s = l.default) == null ? void 0 : s.call(l)]);
    });
  }
}), Eb = -1, Ob = 1, ai = 100, fc = E({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function vc(e, t) {
  const n = Vn(), a = G(0);
  Ze(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = G(0), i = G(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || n.height.value) / (a.value || 16)
  ) || 1), r = G(0), o = G(0), s = Y(), u = Y();
  let d = 0;
  const {
    resizeRef: v,
    contentRect: f
  } = Lt();
  Ze(() => {
    v.value = s.value;
  });
  const m = b(() => {
    var R;
    return s.value === document.documentElement ? n.height.value : ((R = f.value) == null ? void 0 : R.height) || parseInt(e.height) || 0;
  }), g = b(() => !!(s.value && u.value && m.value && a.value));
  let h = Array.from({
    length: t.value.length
  }), y = Array.from({
    length: t.value.length
  });
  const p = G(0);
  let S = -1;
  function I(R) {
    return h[R] || a.value;
  }
  const w = zm(() => {
    const R = performance.now();
    y[0] = 0;
    const j = t.value.length;
    for (let N = 1; N <= j - 1; N++)
      y[N] = (y[N - 1] || 0) + I(N - 1);
    p.value = Math.max(p.value, performance.now() - R);
  }, p), P = q(g, (R) => {
    R && (P(), d = u.value.offsetTop, w.immediate(), H(), ~S && Ce(() => {
      De && window.requestAnimationFrame(() => {
        ee(S), S = -1;
      });
    }));
  });
  q(m, (R, j) => {
    j && H();
  }), ct(() => {
    w.clear();
  });
  function C(R, j) {
    const N = h[R], X = a.value;
    a.value = X ? Math.min(a.value, j) : j, (N !== j || X !== a.value) && (h[R] = j, w());
  }
  function k(R) {
    return R = Ue(R, 0, t.value.length - 1), y[R] || 0;
  }
  function V(R) {
    return $b(y, R);
  }
  let x = 0, T = 0, M = 0;
  function A() {
    if (!s.value || !u.value)
      return;
    const R = s.value.scrollTop, j = performance.now();
    j - M > 500 ? (T = Math.sign(R - x), d = u.value.offsetTop) : T = R - x, x = R, M = j, H();
  }
  function B() {
    !s.value || !u.value || (T = 0, M = 0, H());
  }
  let O = -1;
  function H() {
    cancelAnimationFrame(O), O = requestAnimationFrame(U);
  }
  function U() {
    if (!s.value || !m.value)
      return;
    const R = x - d, j = Math.sign(T), N = Math.max(0, R - ai), X = Ue(V(N), 0, t.value.length), K = R + m.value + ai, ie = Ue(V(K) + 1, X + 1, t.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (j !== Eb || X < l.value) && (j !== Ob || ie > i.value)
    ) {
      const ne = k(l.value) - k(X), z = k(ie) - k(i.value);
      Math.max(ne, z) > ai ? (l.value = X, i.value = ie) : (X <= 0 && (l.value = X), ie >= t.value.length && (i.value = ie));
    }
    r.value = k(l.value), o.value = k(t.value.length) - k(i.value);
  }
  function ee(R) {
    const j = k(R);
    !s.value || R && !j ? S = R : s.value.scrollTop = j;
  }
  const $ = b(() => t.value.slice(l.value, i.value).map((R, j) => ({
    raw: R,
    index: j + l.value
  })));
  return q(t, () => {
    h = Array.from({
      length: t.value.length
    }), y = Array.from({
      length: t.value.length
    }), w.immediate(), H();
  }, {
    deep: !0
  }), {
    containerRef: s,
    markerRef: u,
    computedItems: $,
    paddingTop: r,
    paddingBottom: o,
    scrollToIndex: ee,
    handleScroll: A,
    handleScrollend: B,
    handleItemResize: C
  };
}
function $b(e, t) {
  let n = e.length - 1, a = 0, l = 0, i = null, r = -1;
  if (e[n] < t)
    return n;
  for (; a <= n; )
    if (l = a + n >> 1, i = e[l], i > t)
      n = l - 1;
    else if (i < t)
      r = l, a = l + 1;
    else
      return i === t ? l : a;
  return r;
}
const _b = E({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...fc(),
  ...Q(),
  ...ft()
}, "VVirtualScroll"), Il = L()({
  name: "VVirtualScroll",
  props: _b(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Ye("VVirtualScroll"), {
      dimensionStyles: l
    } = vt(e), {
      containerRef: i,
      markerRef: r,
      handleScroll: o,
      handleScrollend: s,
      handleItemResize: u,
      scrollToIndex: d,
      paddingTop: v,
      paddingBottom: f,
      computedItems: m
    } = vc(e, _(e, "items"));
    return Bt(() => e.renderless, () => {
      function g() {
        var p, S;
        const y = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[y]("scroll", o, {
          passive: !0
        }), document[y]("scrollend", s)) : ((p = i.value) == null || p[y]("scroll", o, {
          passive: !0
        }), (S = i.value) == null || S[y]("scrollend", s));
      }
      tt(() => {
        i.value = rr(a.vnode.el, !0), g(!0);
      }), ct(g);
    }), F(() => {
      const g = m.value.map((h) => c(dc, {
        key: h.index,
        renderless: e.renderless,
        "onUpdate:height": (y) => u(h.index, y)
      }, {
        default: (y) => {
          var p;
          return (p = n.default) == null ? void 0 : p.call(n, {
            item: h.raw,
            index: h.index,
            ...y
          });
        }
      }));
      return e.renderless ? c(re, null, [c("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: J(v.value)
        }
      }, null), g, c("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: J(f.value)
        }
      }, null)]) : c("div", {
        ref: i,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: o,
        onScrollend: s,
        style: [l.value, e.style]
      }, [c("div", {
        ref: r,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: J(v.value),
          paddingBottom: J(f.value)
        }
      }, [g])]);
    }), {
      scrollToIndex: d
    };
  }
});
function Vr(e, t) {
  const n = G(!1);
  let a;
  function l(o) {
    cancelAnimationFrame(a), n.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => {
      if (n.value) {
        const s = q(n, () => {
          s(), o();
        });
      } else
        o();
    });
  }
  async function r(o) {
    var d, v;
    if (o.key === "Tab" && ((d = t.value) == null || d.focus()), !["PageDown", "PageUp", "Home", "End"].includes(o.key))
      return;
    const s = (v = e.value) == null ? void 0 : v.$el;
    if (!s)
      return;
    (o.key === "Home" || o.key === "End") && s.scrollTo({
      top: o.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
    const u = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (o.key === "PageDown" || o.key === "Home") {
      const f = s.getBoundingClientRect().top;
      for (const m of u)
        if (m.getBoundingClientRect().top >= f) {
          m.focus();
          break;
        }
    } else {
      const f = s.getBoundingClientRect().bottom;
      for (const m of [...u].reverse())
        if (m.getBoundingClientRect().bottom <= f) {
          m.focus();
          break;
        }
    }
  }
  return {
    onListScroll: l,
    onListKeydown: r
  };
}
const xr = E({
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
    type: fe,
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
  ...Qu({
    itemChildren: !1
  })
}, "Select"), Lb = E({
  ...xr(),
  ...Ge(Pl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Kt({
    transition: {
      component: vl
    }
  })
}, "VSelect"), mc = L()({
  name: "VSelect",
  props: Lb(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = We(), l = Y(), i = Y(), r = Y(), o = ue(e, "menu"), s = b({
      get: () => o.value,
      set: ($) => {
        var R;
        o.value && !$ && ((R = i.value) != null && R.ΨopenChildren) || (o.value = $);
      }
    }), {
      items: u,
      transformIn: d,
      transformOut: v
    } = kr(e), f = ue(e, "modelValue", [], ($) => d($ === null ? [null] : ze($)), ($) => {
      const R = v($);
      return e.multiple ? R : R[0] ?? null;
    }), m = b(() => typeof e.counterValue == "function" ? e.counterValue(f.value) : typeof e.counterValue == "number" ? e.counterValue : f.value.length), g = Sl(), h = b(() => f.value.map(($) => $.value)), y = G(!1), p = b(() => s.value ? e.closeText : e.openText);
    let S = "", I;
    const w = b(() => e.hideSelected ? u.value.filter(($) => !f.value.some((R) => R === $)) : u.value), P = b(() => e.hideNoData && !w.value.length || e.readonly || (g == null ? void 0 : g.isReadonly.value)), C = b(() => {
      var $;
      return {
        ...e.menuProps,
        activatorProps: {
          ...(($ = e.menuProps) == null ? void 0 : $.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), k = Y(), {
      onListScroll: V,
      onListKeydown: x
    } = Vr(k, l);
    function T($) {
      e.openOnClear && (s.value = !0);
    }
    function M() {
      P.value || (s.value = !s.value);
    }
    function A($) {
      var K, ie;
      if (!$.key || e.readonly || g != null && g.isReadonly.value)
        return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes($.key) && $.preventDefault(), ["Enter", "ArrowDown", " "].includes($.key) && (s.value = !0), ["Escape", "Tab"].includes($.key) && (s.value = !1), $.key === "Home" ? (K = k.value) == null || K.focus("first") : $.key === "End" && ((ie = k.value) == null || ie.focus("last"));
      const R = 1e3;
      function j(ne) {
        const z = ne.key.length === 1, ae = !ne.ctrlKey && !ne.metaKey && !ne.altKey;
        return z && ae;
      }
      if (e.multiple || !j($))
        return;
      const N = performance.now();
      N - I > R && (S = ""), S += $.key.toLowerCase(), I = N;
      const X = u.value.find((ne) => ne.title.toLowerCase().startsWith(S));
      X !== void 0 && (f.value = [X]);
    }
    function B($) {
      if (e.multiple) {
        const R = f.value.findIndex((j) => e.valueComparator(j.value, $.value));
        if (R === -1)
          f.value = [...f.value, $];
        else {
          const j = [...f.value];
          j.splice(R, 1), f.value = j;
        }
      } else
        f.value = [$], s.value = !1;
    }
    function O($) {
      var R;
      (R = k.value) != null && R.$el.contains($.relatedTarget) || (s.value = !1);
    }
    function H() {
      var $;
      y.value && (($ = l.value) == null || $.focus());
    }
    function U($) {
      y.value = !0;
    }
    function ee($) {
      if ($ == null)
        f.value = [];
      else if (Ln(l.value, ":autofill") || Ln(l.value, ":-webkit-autofill")) {
        const R = u.value.find((j) => j.title === $);
        R && B(R);
      } else
        l.value && (l.value.value = "");
    }
    return q(s, () => {
      if (!e.hideSelected && s.value && f.value.length) {
        const $ = w.value.findIndex((R) => f.value.some((j) => e.valueComparator(j.value, R.value)));
        De && window.requestAnimationFrame(() => {
          var R;
          $ >= 0 && ((R = r.value) == null || R.scrollToIndex($));
        });
      }
    }), q(w, ($, R) => {
      y.value && (!$.length && e.hideNoData && (s.value = !1), !R.length && $.length && (s.value = !0));
    }), F(() => {
      const $ = !!(e.chips || n.chip), R = !!(!e.hideNoData || w.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), j = f.value.length > 0, N = pn.filterProps(e), X = j || !y.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return c(pn, D({
        ref: l
      }, N, {
        modelValue: f.value.map((K) => K.props.value).join(", "),
        "onUpdate:modelValue": ee,
        focused: y.value,
        "onUpdate:focused": (K) => y.value = K,
        validationValue: f.externalValue,
        counterValue: m.value,
        dirty: j,
        class: ["v-select", {
          "v-select--active-menu": s.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": f.value.length,
          "v-select--selection-slot": !!n.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: X,
        "onClick:clear": T,
        "onMousedown:control": M,
        onBlur: O,
        onKeydown: A,
        "aria-label": a(p.value),
        title: a(p.value)
      }), {
        ...n,
        default: () => c(re, null, [c(Vl, D({
          ref: i,
          modelValue: s.value,
          "onUpdate:modelValue": (K) => s.value = K,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: P.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: H
        }, C.value), {
          default: () => [R && c(wl, D({
            ref: k,
            selected: h.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (K) => K.preventDefault(),
            onKeydown: x,
            onFocusin: U,
            onScrollPassive: V,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var K, ie, ne;
              return [(K = n["prepend-item"]) == null ? void 0 : K.call(n), !w.value.length && !e.hideNoData && (((ie = n["no-data"]) == null ? void 0 : ie.call(n)) ?? c(Wt, {
                title: a(e.noDataText)
              }, null)), c(Il, {
                ref: r,
                renderless: !0,
                items: w.value
              }, {
                default: (z) => {
                  var de;
                  let {
                    item: ae,
                    index: te,
                    itemRef: ve
                  } = z;
                  const W = D(ae.props, {
                    ref: ve,
                    key: te,
                    onClick: () => B(ae)
                  });
                  return ((de = n.item) == null ? void 0 : de.call(n, {
                    item: ae,
                    index: te,
                    props: W
                  })) ?? c(Wt, D(W, {
                    role: "option"
                  }), {
                    prepend: (ce) => {
                      let {
                        isSelected: he
                      } = ce;
                      return c(re, null, [e.multiple && !e.hideSelected ? c(Yt, {
                        key: ae.value,
                        modelValue: he,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, ae.props.prependAvatar && c(Pt, {
                        image: ae.props.prependAvatar
                      }, null), ae.props.prependIcon && c(Ve, {
                        icon: ae.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (ne = n["append-item"]) == null ? void 0 : ne.call(n)];
            }
          })]
        }), f.value.map((K, ie) => {
          function ne(ve) {
            ve.stopPropagation(), ve.preventDefault(), B(K);
          }
          const z = {
            "onClick:close": ne,
            onMousedown(ve) {
              ve.preventDefault(), ve.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, ae = $ ? !!n.chip : !!n.selection, te = ae ? ul($ ? n.chip({
            item: K,
            index: ie,
            props: z
          }) : n.selection({
            item: K,
            index: ie
          })) : void 0;
          if (!(ae && !te))
            return c("div", {
              key: K.value,
              class: "v-select__selection"
            }, [$ ? n.chip ? c(pe, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: K.title
                }
              }
            }, {
              default: () => [te]
            }) : c(Ba, D({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: K.title,
              disabled: K.props.disabled
            }, z), null) : te ?? c("span", {
              class: "v-select__selection-text"
            }, [K.title, e.multiple && ie < f.value.length - 1 && c("span", {
              class: "v-select__selection-comma"
            }, [at(",")])])]);
        })]),
        "append-inner": function() {
          var z;
          for (var K = arguments.length, ie = new Array(K), ne = 0; ne < K; ne++)
            ie[ne] = arguments[ne];
          return c(re, null, [(z = n["append-inner"]) == null ? void 0 : z.call(n, ...ie), e.menuIcon ? c(Ve, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), Dt({
      isFocused: y,
      menu: s,
      select: B
    }, l);
  }
}), Fb = (e, t, n) => e == null || t == null ? -1 : e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()), $a = E({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function Rb(e, t, n) {
  var o;
  const a = [], l = (n == null ? void 0 : n.default) ?? Fb, i = n != null && n.filterKeys ? ze(n.filterKeys) : !1, r = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length))
    return a;
  e:
    for (let s = 0; s < e.length; s++) {
      const [u, d = u] = ze(e[s]), v = {}, f = {};
      let m = -1;
      if (t && !(n != null && n.noFilter)) {
        if (typeof u == "object") {
          const y = i || Object.keys(d);
          for (const p of y) {
            const S = Xe(d, p, d), I = (o = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : o[p];
            if (m = I ? I(S, t, u) : l(S, t, u), m !== -1 && m !== !1)
              I ? v[p] = m : f[p] = m;
            else if ((n == null ? void 0 : n.filterMode) === "every")
              continue e;
          }
        } else
          m = l(u, t, u), m !== -1 && m !== !1 && (f.title = m);
        const g = Object.keys(f).length, h = Object.keys(v).length;
        if (!g && !h || (n == null ? void 0 : n.filterMode) === "union" && h !== r && !g || (n == null ? void 0 : n.filterMode) === "intersection" && (h !== r || !g))
          continue;
      }
      a.push({
        index: s,
        matches: {
          ...f,
          ...v
        }
      });
    }
  return a;
}
function _a(e, t, n, a) {
  const l = Y([]), i = Y(/* @__PURE__ */ new Map()), r = b(() => a != null && a.transform ? mt(t).map((s) => [s, a.transform(s)]) : mt(t));
  Ze(() => {
    const s = typeof n == "function" ? n() : mt(n), u = typeof s != "string" && typeof s != "number" ? "" : String(s), d = Rb(r.value, u, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...mt(a == null ? void 0 : a.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), v = mt(t), f = [], m = /* @__PURE__ */ new Map();
    d.forEach((g) => {
      let {
        index: h,
        matches: y
      } = g;
      const p = v[h];
      f.push(p), m.set(p.value, y);
    }), l.value = f, i.value = m;
  });
  function o(s) {
    return i.value.get(s.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: o
  };
}
function Nb(e, t, n) {
  if (t == null)
    return e;
  if (Array.isArray(t))
    throw new Error("Multiple matches is not implemented");
  return typeof t == "number" && ~t ? c(re, null, [c("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(0, t)]), c("span", {
    class: "v-autocomplete__mask"
  }, [e.substr(t, n)]), c("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(t + n)])]) : e;
}
const Hb = E({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...$a({
    filterKeys: ["title"]
  }),
  ...xr(),
  ...Ge(Pl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Kt({
    transition: !1
  })
}, "VAutocomplete"), jb = L()({
  name: "VAutocomplete",
  props: Hb(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = We(), l = Y(), i = G(!1), r = G(!0), o = G(!1), s = Y(), u = Y(), d = ue(e, "menu"), v = b({
      get: () => d.value,
      set: (te) => {
        var ve;
        d.value && !te && ((ve = s.value) != null && ve.ΨopenChildren) || (d.value = te);
      }
    }), f = G(-1), m = b(() => {
      var te;
      return (te = l.value) == null ? void 0 : te.color;
    }), g = b(() => v.value ? e.closeText : e.openText), {
      items: h,
      transformIn: y,
      transformOut: p
    } = kr(e), {
      textColorClasses: S,
      textColorStyles: I
    } = lt(m), w = ue(e, "search", ""), P = ue(e, "modelValue", [], (te) => y(te === null ? [null] : ze(te)), (te) => {
      const ve = p(te);
      return e.multiple ? ve : ve[0] ?? null;
    }), C = b(() => typeof e.counterValue == "function" ? e.counterValue(P.value) : typeof e.counterValue == "number" ? e.counterValue : P.value.length), k = Sl(), {
      filteredItems: V,
      getMatches: x
    } = _a(e, h, () => r.value ? "" : w.value), T = b(() => e.hideSelected ? V.value.filter((te) => !P.value.some((ve) => ve.value === te.value)) : V.value), M = b(() => P.value.map((te) => te.props.value)), A = b(() => {
      var ve;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && w.value === ((ve = T.value[0]) == null ? void 0 : ve.title)) && T.value.length > 0 && !r.value && !o.value;
    }), B = b(() => e.hideNoData && !T.value.length || e.readonly || (k == null ? void 0 : k.isReadonly.value)), O = Y(), {
      onListScroll: H,
      onListKeydown: U
    } = Vr(O, l);
    function ee(te) {
      e.openOnClear && (v.value = !0), w.value = "";
    }
    function $() {
      B.value || (v.value = !0);
    }
    function R(te) {
      B.value || (i.value && (te.preventDefault(), te.stopPropagation()), v.value = !v.value);
    }
    function j(te) {
      var de, ce, he;
      if (e.readonly || k != null && k.isReadonly.value)
        return;
      const ve = l.value.selectionStart, W = P.value.length;
      if ((f.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(te.key)) && te.preventDefault(), ["Enter", "ArrowDown"].includes(te.key) && (v.value = !0), ["Escape"].includes(te.key) && (v.value = !1), A.value && ["Enter", "Tab"].includes(te.key) && ae(T.value[0]), te.key === "ArrowDown" && A.value && ((de = O.value) == null || de.focus("next")), !!e.multiple) {
        if (["Backspace", "Delete"].includes(te.key)) {
          if (f.value < 0) {
            te.key === "Backspace" && !w.value && (f.value = W - 1);
            return;
          }
          const le = f.value, ye = P.value[f.value];
          ye && !ye.props.disabled && ae(ye), f.value = le >= W - 1 ? W - 2 : le;
        }
        if (te.key === "ArrowLeft") {
          if (f.value < 0 && ve > 0)
            return;
          const le = f.value > -1 ? f.value - 1 : W - 1;
          P.value[le] ? f.value = le : (f.value = -1, l.value.setSelectionRange((ce = w.value) == null ? void 0 : ce.length, (he = w.value) == null ? void 0 : he.length));
        }
        if (te.key === "ArrowRight") {
          if (f.value < 0)
            return;
          const le = f.value + 1;
          P.value[le] ? f.value = le : (f.value = -1, l.value.setSelectionRange(0, 0));
        }
      }
    }
    function N(te) {
      if (Ln(l.value, ":autofill") || Ln(l.value, ":-webkit-autofill")) {
        const ve = h.value.find((W) => W.title === te.target.value);
        ve && ae(ve);
      }
    }
    function X() {
      var te;
      i.value && (r.value = !0, (te = l.value) == null || te.focus());
    }
    function K(te) {
      i.value = !0, setTimeout(() => {
        o.value = !0;
      });
    }
    function ie(te) {
      o.value = !1;
    }
    function ne(te) {
      (te == null || te === "" && !e.multiple) && (P.value = []);
    }
    const z = G(!1);
    function ae(te) {
      let ve = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!te.props.disabled)
        if (e.multiple) {
          const W = P.value.findIndex((de) => e.valueComparator(de.value, te.value));
          if (W === -1)
            P.value = [...P.value, te];
          else {
            const de = [...P.value];
            de.splice(W, 1), P.value = de;
          }
          e.clearOnSelect && (w.value = "");
        } else
          P.value = ve ? [te] : [], z.value = !0, w.value = ve ? te.title : "", v.value = !1, r.value = !0, Ce(() => z.value = !1);
    }
    return q(i, (te, ve) => {
      var W;
      te !== ve && (te ? (z.value = !0, w.value = e.multiple ? "" : String(((W = P.value.at(-1)) == null ? void 0 : W.props.title) ?? ""), r.value = !0, Ce(() => z.value = !1)) : (!e.multiple && w.value == null ? P.value = [] : A.value && !o.value && !P.value.some((de) => {
        let {
          value: ce
        } = de;
        return ce === T.value[0].value;
      }) && ae(T.value[0]), v.value = !1, w.value = "", f.value = -1));
    }), q(w, (te) => {
      !i.value || z.value || (te && (v.value = !0), r.value = !te);
    }), q(v, () => {
      if (!e.hideSelected && v.value && P.value.length) {
        const te = T.value.findIndex((ve) => P.value.some((W) => ve.value === W.value));
        De && window.requestAnimationFrame(() => {
          var ve;
          te >= 0 && ((ve = u.value) == null || ve.scrollToIndex(te));
        });
      }
    }), q(T, (te, ve) => {
      i.value && (!te.length && e.hideNoData && (v.value = !1), !ve.length && te.length && (v.value = !0));
    }), F(() => {
      const te = !!(e.chips || n.chip), ve = !!(!e.hideNoData || T.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), W = P.value.length > 0, de = pn.filterProps(e);
      return c(pn, D({
        ref: l
      }, de, {
        modelValue: w.value,
        "onUpdate:modelValue": [(ce) => w.value = ce, ne],
        focused: i.value,
        "onUpdate:focused": (ce) => i.value = ce,
        validationValue: P.externalValue,
        counterValue: C.value,
        dirty: W,
        onChange: N,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": v.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!n.selection,
          "v-autocomplete--selecting-index": f.value > -1
        }, e.class],
        style: e.style,
        readonly: e.readonly,
        placeholder: W ? void 0 : e.placeholder,
        "onClick:clear": ee,
        "onMousedown:control": $,
        onKeydown: j
      }), {
        ...n,
        default: () => c(re, null, [c(Vl, D({
          ref: s,
          modelValue: v.value,
          "onUpdate:modelValue": (ce) => v.value = ce,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          disabled: B.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: X
        }, e.menuProps), {
          default: () => [ve && c(wl, D({
            ref: O,
            selected: M.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ce) => ce.preventDefault(),
            onKeydown: U,
            onFocusin: K,
            onFocusout: ie,
            onScrollPassive: H,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var ce, he, le;
              return [(ce = n["prepend-item"]) == null ? void 0 : ce.call(n), !T.value.length && !e.hideNoData && (((he = n["no-data"]) == null ? void 0 : he.call(n)) ?? c(Wt, {
                title: a(e.noDataText)
              }, null)), c(Il, {
                ref: u,
                renderless: !0,
                items: T.value
              }, {
                default: (ye) => {
                  var Ot;
                  let {
                    item: Me,
                    index: st,
                    itemRef: He
                  } = ye;
                  const Et = D(Me.props, {
                    ref: He,
                    key: st,
                    active: A.value && st === 0 ? !0 : void 0,
                    onClick: () => ae(Me)
                  });
                  return ((Ot = n.item) == null ? void 0 : Ot.call(n, {
                    item: Me,
                    index: st,
                    props: Et
                  })) ?? c(Wt, Et, {
                    prepend: (rn) => {
                      let {
                        isSelected: on
                      } = rn;
                      return c(re, null, [e.multiple && !e.hideSelected ? c(Yt, {
                        key: Me.value,
                        modelValue: on,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, Me.props.prependAvatar && c(Pt, {
                        image: Me.props.prependAvatar
                      }, null), Me.props.prependIcon && c(Ve, {
                        icon: Me.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var rn, on;
                      return r.value ? Me.title : Nb(Me.title, (rn = x(Me)) == null ? void 0 : rn.title, ((on = w.value) == null ? void 0 : on.length) ?? 0);
                    }
                  });
                }
              }), (le = n["append-item"]) == null ? void 0 : le.call(n)];
            }
          })]
        }), P.value.map((ce, he) => {
          function le(He) {
            He.stopPropagation(), He.preventDefault(), ae(ce, !1);
          }
          const ye = {
            "onClick:close": le,
            onMousedown(He) {
              He.preventDefault(), He.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Me = te ? !!n.chip : !!n.selection, st = Me ? ul(te ? n.chip({
            item: ce,
            index: he,
            props: ye
          }) : n.selection({
            item: ce,
            index: he
          })) : void 0;
          if (!(Me && !st))
            return c("div", {
              key: ce.value,
              class: ["v-autocomplete__selection", he === f.value && ["v-autocomplete__selection--selected", S.value]],
              style: he === f.value ? I.value : {}
            }, [te ? n.chip ? c(pe, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ce.title
                }
              }
            }, {
              default: () => [st]
            }) : c(Ba, D({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ce.title,
              disabled: ce.props.disabled
            }, ye), null) : st ?? c("span", {
              class: "v-autocomplete__selection-text"
            }, [ce.title, e.multiple && he < P.value.length - 1 && c("span", {
              class: "v-autocomplete__selection-comma"
            }, [at(",")])])]);
        })]),
        "append-inner": function() {
          var ye;
          for (var ce = arguments.length, he = new Array(ce), le = 0; le < ce; le++)
            he[le] = arguments[le];
          return c(re, null, [(ye = n["append-inner"]) == null ? void 0 : ye.call(n, ...he), e.menuIcon ? c(Ve, {
            class: "v-autocomplete__menu-icon",
            icon: e.menuIcon,
            onMousedown: R,
            onClick: Rs,
            "aria-label": a(g.value),
            title: a(g.value)
          }, null) : void 0]);
        }
      });
    }), Dt({
      isFocused: i,
      isPristine: r,
      menu: v,
      search: w,
      filteredItems: V,
      select: ae
    }, l);
  }
}), zb = E({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: fe,
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
  ...an({
    location: "top end"
  }),
  ...Oe(),
  ...me(),
  ...Se(),
  ...Kt({
    transition: "scale-rotate-transition"
  })
}, "VBadge"), Yb = L()({
  name: "VBadge",
  inheritAttrs: !1,
  props: zb(),
  setup(e, t) {
    const {
      backgroundColorClasses: n,
      backgroundColorStyles: a
    } = Ae(_(e, "color")), {
      roundedClasses: l
    } = Re(e), {
      t: i
    } = We(), {
      textColorClasses: r,
      textColorStyles: o
    } = lt(_(e, "textColor")), {
      themeClasses: s
    } = uu(), {
      locationStyles: u
    } = ln(e, !0, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? +(e.offsetY ?? 0) : ["left", "right"].includes(d) ? +(e.offsetX ?? 0) : 0));
    return F(() => {
      const d = Number(e.content), v = !e.max || isNaN(d) ? e.content : d <= +e.max ? d : `${e.max}+`, [f, m] = mi(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return c(e.tag, D({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, m, {
        style: e.style
      }), {
        default: () => {
          var g, h;
          return [c("div", {
            class: "v-badge__wrapper"
          }, [(h = (g = t.slots).default) == null ? void 0 : h.call(g), c(Vt, {
            transition: e.transition
          }, {
            default: () => {
              var y, p;
              return [ge(c("span", D({
                class: ["v-badge__badge", s.value, n.value, l.value, r.value],
                style: [a.value, o.value, e.inline ? {} : u.value],
                "aria-atomic": "true",
                "aria-label": i(e.label, d),
                "aria-live": "polite",
                role: "status"
              }, f), [e.dot ? void 0 : t.slots.badge ? (p = (y = t.slots).badge) == null ? void 0 : p.call(y) : e.icon ? c(Ve, {
                icon: e.icon
              }, null) : v]), [[xt, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), Wb = E({
  color: String,
  density: String,
  ...Q()
}, "VBannerActions"), hc = L()({
  name: "VBannerActions",
  props: Wb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return _e({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), F(() => {
      var a;
      return c("div", {
        class: ["v-banner-actions", e.class],
        style: e.style
      }, [(a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), gc = St("v-banner-text"), Ub = E({
  avatar: String,
  bgColor: String,
  color: String,
  icon: fe,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...wt(),
  ...Q(),
  ...qe(),
  ...ft(),
  ...sr(),
  ...Ke(),
  ...an(),
  ...Kn(),
  ...Oe(),
  ...me(),
  ...Se()
}, "VBanner"), Kb = L()({
  name: "VBanner",
  props: Ub(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ae(e, "bgColor"), {
      borderClasses: i
    } = It(e), {
      densityClasses: r
    } = ot(e), {
      displayClasses: o,
      mobile: s
    } = Vn(e), {
      dimensionStyles: u
    } = vt(e), {
      elevationClasses: d
    } = Qe(e), {
      locationStyles: v
    } = ln(e), {
      positionClasses: f
    } = Gn(e), {
      roundedClasses: m
    } = Re(e), {
      themeClasses: g
    } = xe(e), h = _(e, "color"), y = _(e, "density");
    _e({
      VBannerActions: {
        color: h,
        density: y
      }
    }), F(() => {
      const p = !!(e.text || n.text), S = !!(e.avatar || e.icon), I = !!(S || n.prepend);
      return c(e.tag, {
        class: ["v-banner", {
          "v-banner--stacked": e.stacked || s.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, g.value, a.value, i.value, r.value, o.value, d.value, f.value, m.value, e.class],
        style: [l.value, u.value, v.value, e.style],
        role: "banner"
      }, {
        default: () => {
          var w;
          return [I && c("div", {
            key: "prepend",
            class: "v-banner__prepend"
          }, [n.prepend ? c(pe, {
            key: "prepend-defaults",
            disabled: !S,
            defaults: {
              VAvatar: {
                color: h.value,
                density: y.value,
                icon: e.icon,
                image: e.avatar
              }
            }
          }, n.prepend) : c(Pt, {
            key: "prepend-avatar",
            color: h.value,
            density: y.value,
            icon: e.icon,
            image: e.avatar
          }, null)]), c("div", {
            class: "v-banner__content"
          }, [p && c(gc, {
            key: "text"
          }, {
            default: () => {
              var P;
              return [((P = n.text) == null ? void 0 : P.call(n)) ?? e.text];
            }
          }), (w = n.default) == null ? void 0 : w.call(n)]), n.actions && c(hc, {
            key: "actions"
          }, n.actions)];
        }
      });
    });
  }
}), Gb = E({
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
  ...wt(),
  ...Q(),
  ...qe(),
  ...Ke(),
  ...Oe(),
  ...Yn({
    name: "bottom-navigation"
  }),
  ...me({
    tag: "header"
  }),
  ...Tn({
    modelValue: !0,
    selectedClass: "v-btn--selected"
  }),
  ...Se()
}, "VBottomNavigation"), qb = L()({
  name: "VBottomNavigation",
  props: Gb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = uu(), {
      borderClasses: l
    } = It(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: r
    } = Ae(_(e, "bgColor")), {
      densityClasses: o
    } = ot(e), {
      elevationClasses: s
    } = Qe(e), {
      roundedClasses: u
    } = Re(e), {
      ssrBootStyles: d
    } = xn(), v = b(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = _(e, "active"), {
      layoutItemStyles: m
    } = Wn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: b(() => "bottom"),
      layoutSize: b(() => f.value ? v.value : 0),
      elementSize: v,
      active: f,
      absolute: _(e, "absolute")
    });
    return nn(e, gr), _e({
      VBtn: {
        color: _(e, "color"),
        density: _(e, "density"),
        stacked: b(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), F(() => c(e.tag, {
      class: ["v-bottom-navigation", {
        "v-bottom-navigation--active": f.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, a.value, i.value, l.value, o.value, s.value, u.value, e.class],
      style: [r.value, m.value, {
        height: J(v.value),
        transform: `translateY(${J(f.value ? 0 : 100, "%")})`
      }, d.value, e.style]
    }, {
      default: () => [n.default && c("div", {
        class: "v-bottom-navigation__content"
      }, [n.default()])]
    })), {};
  }
}), yc = E({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...Ea({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: vl
    },
    zIndex: 2400
  })
}, "VDialog"), Oi = L()({
  name: "VDialog",
  props: yc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "modelValue"), {
      scopeId: l
    } = Xn(), i = Y();
    function r(s) {
      var v, f;
      const u = s.relatedTarget, d = s.target;
      if (u !== d && ((v = i.value) != null && v.contentEl) && // We're the topmost dialog
      ((f = i.value) != null && f.globalTop) && // It isn't the document or the dialog body
      ![document, i.value.contentEl].includes(d) && // It isn't inside the dialog body
      !i.value.contentEl.contains(d)) {
        const m = ma(i.value.contentEl);
        if (!m.length)
          return;
        const g = m[0], h = m[m.length - 1];
        u === g ? h.focus() : g.focus();
      }
    }
    De && q(() => a.value && e.retainFocus, (s) => {
      s ? document.addEventListener("focusin", r) : document.removeEventListener("focusin", r);
    }, {
      immediate: !0
    }), q(a, async (s) => {
      var u, d;
      await Ce(), s ? (u = i.value.contentEl) == null || u.focus({
        preventScroll: !0
      }) : (d = i.value.activatorEl) == null || d.focus({
        preventScroll: !0
      });
    });
    const o = b(() => D({
      "aria-haspopup": "dialog",
      "aria-expanded": String(a.value)
    }, e.activatorProps));
    return F(() => {
      const s = Ft.filterProps(e);
      return c(Ft, D({
        ref: i,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, s, {
        modelValue: a.value,
        "onUpdate:modelValue": (u) => a.value = u,
        "aria-modal": "true",
        activatorProps: o.value,
        role: "dialog"
      }, l), {
        activator: n.activator,
        default: function() {
          for (var u = arguments.length, d = new Array(u), v = 0; v < u; v++)
            d[v] = arguments[v];
          return c(pe, {
            root: "VDialog"
          }, {
            default: () => {
              var f;
              return [(f = n.default) == null ? void 0 : f.call(n, ...d)];
            }
          });
        }
      });
    }), Dt({}, i);
  }
}), Xb = E({
  inset: Boolean,
  ...yc({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), Zb = L()({
  name: "VBottomSheet",
  props: Xb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "modelValue");
    return F(() => {
      const l = Oi.filterProps(e);
      return c(Oi, D(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: a.value,
        "onUpdate:modelValue": (i) => a.value = i,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), n);
    }), {};
  }
}), Jb = E({
  divider: [Number, String],
  ...Q()
}, "VBreadcrumbsDivider"), bc = L()({
  name: "VBreadcrumbsDivider",
  props: Jb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => {
      var a;
      return c("li", {
        class: ["v-breadcrumbs-divider", e.class],
        style: e.style
      }, [((a = n == null ? void 0 : n.default) == null ? void 0 : a.call(n)) ?? e.divider]);
    }), {};
  }
}), Qb = E({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...Q(),
  ...Aa(),
  ...me({
    tag: "li"
  })
}, "VBreadcrumbsItem"), pc = L()({
  name: "VBreadcrumbsItem",
  props: Qb(),
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const l = Da(e, a), i = b(() => {
      var u;
      return e.active || ((u = l.isActive) == null ? void 0 : u.value);
    }), r = b(() => i.value ? e.activeColor : e.color), {
      textColorClasses: o,
      textColorStyles: s
    } = lt(r);
    return F(() => c(e.tag, {
      class: ["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": i.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: i.value && e.activeClass
      }, o.value, e.class],
      style: [s.value, e.style],
      "aria-current": i.value ? "page" : void 0
    }, {
      default: () => {
        var u, d;
        return [l.isLink.value ? c("a", {
          class: "v-breadcrumbs-item--link",
          href: l.href.value,
          "aria-current": i.value ? "page" : void 0,
          onClick: l.navigate
        }, [((d = n.default) == null ? void 0 : d.call(n)) ?? e.title]) : ((u = n.default) == null ? void 0 : u.call(n)) ?? e.title];
      }
    })), {};
  }
}), ep = E({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: fe,
  items: {
    type: Array,
    default: () => []
  },
  ...Q(),
  ...qe(),
  ...Oe(),
  ...me({
    tag: "ul"
  })
}, "VBreadcrumbs"), tp = L()({
  name: "VBreadcrumbs",
  props: ep(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ae(_(e, "bgColor")), {
      densityClasses: i
    } = ot(e), {
      roundedClasses: r
    } = Re(e);
    _e({
      VBreadcrumbsDivider: {
        divider: _(e, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: _(e, "activeClass"),
        activeColor: _(e, "activeColor"),
        color: _(e, "color"),
        disabled: _(e, "disabled")
      }
    });
    const o = b(() => e.items.map((s) => typeof s == "string" ? {
      item: {
        title: s
      },
      raw: s
    } : {
      item: s,
      raw: s
    }));
    return F(() => {
      const s = !!(n.prepend || e.icon);
      return c(e.tag, {
        class: ["v-breadcrumbs", a.value, i.value, r.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => {
          var u;
          return [s && c("li", {
            key: "prepend",
            class: "v-breadcrumbs__prepend"
          }, [n.prepend ? c(pe, {
            key: "prepend-defaults",
            disabled: !e.icon,
            defaults: {
              VIcon: {
                icon: e.icon,
                start: !0
              }
            }
          }, n.prepend) : c(Ve, {
            key: "prepend-icon",
            start: !0,
            icon: e.icon
          }, null)]), o.value.map((d, v, f) => {
            var h;
            let {
              item: m,
              raw: g
            } = d;
            return c(re, null, [((h = n.item) == null ? void 0 : h.call(n, {
              item: m,
              index: v
            })) ?? c(pc, D({
              key: v,
              disabled: v >= f.length - 1
            }, typeof m == "string" ? {
              title: m
            } : m), {
              default: n.title ? () => {
                var y;
                return (y = n.title) == null ? void 0 : y.call(n, {
                  item: m,
                  index: v
                });
              } : void 0
            }), v < f.length - 1 && c(bc, null, {
              default: n.divider ? () => {
                var y;
                return (y = n.divider) == null ? void 0 : y.call(n, {
                  item: g,
                  index: v
                });
              } : void 0
            })]);
          }), (u = n.default) == null ? void 0 : u.call(n)];
        }
      });
    }), {};
  }
}), Sc = L()({
  name: "VCardActions",
  props: Q(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return _e({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), F(() => {
      var a;
      return c("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), kc = St("v-card-subtitle"), wc = St("v-card-title"), np = E({
  appendAvatar: String,
  appendIcon: fe,
  prependAvatar: String,
  prependIcon: fe,
  subtitle: [String, Number],
  title: [String, Number],
  ...Q(),
  ...qe()
}, "VCardItem"), Cc = L()({
  name: "VCardItem",
  props: np(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => {
      var u;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), i = !!(e.appendAvatar || e.appendIcon), r = !!(i || n.append), o = !!(e.title != null || n.title), s = !!(e.subtitle != null || n.subtitle);
      return c("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && c("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [n.prepend ? c(pe, {
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
      }, n.prepend) : c(re, null, [e.prependAvatar && c(Pt, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && c(Ve, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), c("div", {
        class: "v-card-item__content"
      }, [o && c(wc, {
        key: "title"
      }, {
        default: () => {
          var d;
          return [((d = n.title) == null ? void 0 : d.call(n)) ?? e.title];
        }
      }), s && c(kc, {
        key: "subtitle"
      }, {
        default: () => {
          var d;
          return [((d = n.subtitle) == null ? void 0 : d.call(n)) ?? e.subtitle];
        }
      }), (u = n.default) == null ? void 0 : u.call(n)]), r && c("div", {
        key: "append",
        class: "v-card-item__append"
      }, [n.append ? c(pe, {
        key: "append-defaults",
        disabled: !i,
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
      }, n.append) : c(re, null, [e.appendIcon && c(Ve, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && c(Pt, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Vc = St("v-card-text"), ap = E({
  appendAvatar: String,
  appendIcon: fe,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: fe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...wt(),
  ...Q(),
  ...qe(),
  ...ft(),
  ...Ke(),
  ...yl(),
  ...an(),
  ...Kn(),
  ...Oe(),
  ...Aa(),
  ...me(),
  ...Se(),
  ...Tt({
    variant: "elevated"
  })
}, "VCard"), lp = L()({
  name: "VCard",
  directives: {
    Ripple: qt
  },
  props: ap(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = xe(e), {
      borderClasses: i
    } = It(e), {
      colorClasses: r,
      colorStyles: o,
      variantClasses: s
    } = In(e), {
      densityClasses: u
    } = ot(e), {
      dimensionStyles: d
    } = vt(e), {
      elevationClasses: v
    } = Qe(e), {
      loaderClasses: f
    } = Ta(e), {
      locationStyles: m
    } = ln(e), {
      positionClasses: g
    } = Gn(e), {
      roundedClasses: h
    } = Re(e), y = Da(e, n), p = b(() => e.link !== !1 && y.isLink.value), S = b(() => !e.disabled && e.link !== !1 && (e.link || y.isClickable.value));
    return F(() => {
      const I = p.value ? "a" : e.tag, w = !!(a.title || e.title != null), P = !!(a.subtitle || e.subtitle != null), C = w || P, k = !!(a.append || e.appendAvatar || e.appendIcon), V = !!(a.prepend || e.prependAvatar || e.prependIcon), x = !!(a.image || e.image), T = C || V || k, M = !!(a.text || e.text != null);
      return ge(c(I, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": S.value
        }, l.value, i.value, r.value, u.value, v.value, f.value, g.value, h.value, s.value, e.class],
        style: [o.value, d.value, m.value, e.style],
        href: y.href.value,
        onClick: S.value && y.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var A;
          return [x && c("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? c(pe, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : c(yn, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), c(bl, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), T && c(Cc, {
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
          }), M && c(Vc, {
            key: "text"
          }, {
            default: () => {
              var B;
              return [((B = a.text) == null ? void 0 : B.call(a)) ?? e.text];
            }
          }), (A = a.default) == null ? void 0 : A.call(a), a.actions && c(Sc, null, {
            default: a.actions
          }), Pn(S.value, "v-card")];
        }
      }), [[it("ripple"), S.value && e.ripple]]);
    }), {};
  }
}), ip = (e) => {
  const {
    touchstartX: t,
    touchendX: n,
    touchstartY: a,
    touchendY: l
  } = e, i = 0.5, r = 16;
  e.offsetX = n - t, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && n < t - r && e.left(e), e.right && n > t + r && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - r && e.up(e), e.down && l > a + r && e.down(e));
};
function rp(e, t) {
  var a;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (a = t.start) == null || a.call(t, {
    originalEvent: e,
    ...t
  });
}
function op(e, t) {
  var a;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (a = t.end) == null || a.call(t, {
    originalEvent: e,
    ...t
  }), ip(t);
}
function sp(e, t) {
  var a;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (a = t.move) == null || a.call(t, {
    originalEvent: e,
    ...t
  });
}
function up() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = {
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
    touchstart: (n) => rp(n, t),
    touchend: (n) => op(n, t),
    touchmove: (n) => sp(n, t)
  };
}
function cp(e, t) {
  var o;
  const n = t.value, a = n != null && n.parent ? e.parentElement : e, l = (n == null ? void 0 : n.options) ?? {
    passive: !0
  }, i = (o = t.instance) == null ? void 0 : o.$.uid;
  if (!a || !i)
    return;
  const r = up(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = r, Bs(r).forEach((s) => {
    a.addEventListener(s, r[s], l);
  });
}
function dp(e, t) {
  var i, r;
  const n = (i = t.value) != null && i.parent ? e.parentElement : e, a = (r = t.instance) == null ? void 0 : r.$.uid;
  if (!(n != null && n._touchHandlers) || !a)
    return;
  const l = n._touchHandlers[a];
  Bs(l).forEach((o) => {
    n.removeEventListener(o, l[o]);
  }), delete n._touchHandlers[a];
}
const Pr = {
  mounted: cp,
  unmounted: dp
}, xc = Symbol.for("vuetify:v-window"), Pc = Symbol.for("vuetify:v-window-group"), Ir = E({
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
  ...me(),
  ...Se()
}, "VWindow"), ka = L()({
  name: "VWindow",
  directives: {
    Touch: Pr
  },
  props: Ir(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = xe(e), {
      isRtl: l
    } = Je(), {
      t: i
    } = We(), r = nn(e, Pc), o = Y(), s = b(() => l.value ? !e.reverse : e.reverse), u = G(!1), d = b(() => {
      const w = e.direction === "vertical" ? "y" : "x", C = (s.value ? !u.value : u.value) ? "-reverse" : "";
      return `v-window-${w}${C}-transition`;
    }), v = G(0), f = Y(void 0), m = b(() => r.items.value.findIndex((w) => r.selected.value.includes(w.id)));
    q(m, (w, P) => {
      const C = r.items.value.length, k = C - 1;
      C <= 2 ? u.value = w < P : w === k && P === 0 ? u.value = !0 : w === 0 && P === k ? u.value = !1 : u.value = w < P;
    }), Ee(xc, {
      transition: d,
      isReversed: u,
      transitionCount: v,
      transitionHeight: f,
      rootRef: o
    });
    const g = b(() => e.continuous || m.value !== 0), h = b(() => e.continuous || m.value !== r.items.value.length - 1);
    function y() {
      g.value && r.prev();
    }
    function p() {
      h.value && r.next();
    }
    const S = b(() => {
      const w = [], P = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: r.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      w.push(g.value ? n.prev ? n.prev({
        props: P
      }) : c(Te, P, null) : c("div", null, null));
      const C = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: r.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return w.push(h.value ? n.next ? n.next({
        props: C
      }) : c(Te, C, null) : c("div", null, null)), w;
    }), I = b(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          s.value ? y() : p();
        },
        right: () => {
          s.value ? p() : y();
        },
        start: (P) => {
          let {
            originalEvent: C
          } = P;
          C.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return F(() => ge(c(e.tag, {
      ref: o,
      class: ["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover"
      }, a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var w, P;
        return [c("div", {
          class: "v-window__container",
          style: {
            height: f.value
          }
        }, [(w = n.default) == null ? void 0 : w.call(n, {
          group: r
        }), e.showArrows !== !1 && c("div", {
          class: "v-window__controls"
        }, [S.value])]), (P = n.additional) == null ? void 0 : P.call(n, {
          group: r
        })];
      }
    }), [[it("touch"), I.value]])), {
      group: r
    };
  }
}), fp = E({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: fe,
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
  ...Ir({
    continuous: !0,
    mandatory: "force",
    showArrows: !0
  })
}, "VCarousel"), vp = L()({
  name: "VCarousel",
  props: fp(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "modelValue"), {
      t: l
    } = We(), i = Y();
    let r = -1;
    q(a, s), q(() => e.interval, s), q(() => e.cycle, (u) => {
      u ? s() : window.clearTimeout(r);
    }), tt(o);
    function o() {
      !e.cycle || !i.value || (r = window.setTimeout(i.value.group.next, +e.interval > 0 ? +e.interval : 6e3));
    }
    function s() {
      window.clearTimeout(r), window.requestAnimationFrame(o);
    }
    return F(() => {
      const u = ka.filterProps(e);
      return c(ka, D({
        ref: i
      }, u, {
        modelValue: a.value,
        "onUpdate:modelValue": (d) => a.value = d,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: J(e.height)
        }, e.style]
      }), {
        default: n.default,
        additional: (d) => {
          let {
            group: v
          } = d;
          return c(re, null, [!e.hideDelimiters && c("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [v.items.value.length > 0 && c(pe, {
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
            default: () => [v.items.value.map((f, m) => {
              const g = {
                id: `carousel-item-${f.id}`,
                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", m + 1, v.items.value.length),
                class: ["v-carousel__controls__item", v.isSelected(f.id) && "v-btn--active"],
                onClick: () => v.select(f.id, !0)
              };
              return n.item ? n.item({
                props: g,
                item: f
              }) : c(Te, D(f, g), null);
            })]
          })]), e.progress && c(gl, {
            class: "v-carousel__progress",
            color: typeof e.progress == "string" ? e.progress : void 0,
            modelValue: (v.getItemIndex(a.value) + 1) / v.items.value.length * 100
          }, null)]);
        },
        prev: n.prev,
        next: n.next
      });
    }), {};
  }
}), Tr = E({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...Q(),
  ...Dn(),
  ...Cl()
}, "VWindowItem"), wa = L()({
  name: "VWindowItem",
  directives: {
    Touch: Pr
  },
  props: Tr(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(xc), l = An(e, Pc), {
      isBooted: i
    } = xn();
    if (!a || !l)
      throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const r = G(!1), o = b(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function s() {
      !r.value || !a || (r.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function u() {
      var g;
      r.value || !a || (r.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = J((g = a.rootRef.value) == null ? void 0 : g.clientHeight)), a.transitionCount.value += 1);
    }
    function d() {
      s();
    }
    function v(g) {
      r.value && Ce(() => {
        !o.value || !r.value || !a || (a.transitionHeight.value = J(g.clientHeight));
      });
    }
    const f = b(() => {
      const g = a.isReversed.value ? e.reverseTransition : e.transition;
      return o.value ? {
        name: typeof g != "string" ? a.transition.value : g,
        onBeforeEnter: u,
        onAfterEnter: s,
        onEnterCancelled: d,
        onBeforeLeave: u,
        onAfterLeave: s,
        onLeaveCancelled: d,
        onEnter: v
      } : !1;
    }), {
      hasContent: m
    } = wr(e, l.isSelected);
    return F(() => c(Vt, {
      transition: f.value,
      disabled: !i.value
    }, {
      default: () => {
        var g;
        return [ge(c("div", {
          class: ["v-window-item", l.selectedClass.value, e.class],
          style: e.style
        }, [m.value && ((g = n.default) == null ? void 0 : g.call(n))]), [[xt, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), mp = E({
  ...pu(),
  ...Tr()
}, "VCarouselItem"), hp = L()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: mp(),
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    F(() => {
      const l = yn.filterProps(e), i = wa.filterProps(e);
      return c(wa, D({
        class: "v-carousel-item"
      }, i), {
        default: () => [c(yn, D(a, l), n)]
      });
    });
  }
}), gp = St("v-code"), yp = E({
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
}, "VColorPickerCanvas"), bp = pt({
  name: "VColorPickerCanvas",
  props: yp(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = G(!1), l = Y(), i = G(parseFloat(e.width)), r = G(parseFloat(e.height)), o = Y({
      x: 0,
      y: 0
    }), s = b({
      get: () => o.value,
      set(y) {
        var I, w;
        if (!l.value)
          return;
        const {
          x: p,
          y: S
        } = y;
        o.value = y, n("update:color", {
          h: ((I = e.color) == null ? void 0 : I.h) ?? 0,
          s: Ue(p, 0, i.value) / i.value,
          v: 1 - Ue(S, 0, r.value) / r.value,
          a: ((w = e.color) == null ? void 0 : w.a) ?? 1
        });
      }
    }), u = b(() => {
      const {
        x: y,
        y: p
      } = s.value, S = parseInt(e.dotSize, 10) / 2;
      return {
        width: J(e.dotSize),
        height: J(e.dotSize),
        transform: `translate(${J(y - S)}, ${J(p - S)})`
      };
    }), {
      resizeRef: d
    } = Lt((y) => {
      var I;
      if (!((I = d.value) != null && I.offsetParent))
        return;
      const {
        width: p,
        height: S
      } = y[0].contentRect;
      i.value = p, r.value = S;
    });
    function v(y, p, S) {
      const {
        left: I,
        top: w,
        width: P,
        height: C
      } = S;
      s.value = {
        x: Ue(y - I, 0, P),
        y: Ue(p - w, 0, C)
      };
    }
    function f(y) {
      y.type === "mousedown" && y.preventDefault(), !e.disabled && (m(y), window.addEventListener("mousemove", m), window.addEventListener("mouseup", g), window.addEventListener("touchmove", m), window.addEventListener("touchend", g));
    }
    function m(y) {
      if (e.disabled || !l.value)
        return;
      a.value = !0;
      const p = Um(y);
      v(p.clientX, p.clientY, l.value.getBoundingClientRect());
    }
    function g() {
      window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", g), window.removeEventListener("touchmove", m), window.removeEventListener("touchend", g);
    }
    function h() {
      var w;
      if (!l.value)
        return;
      const y = l.value, p = y.getContext("2d");
      if (!p)
        return;
      const S = p.createLinearGradient(0, 0, y.width, 0);
      S.addColorStop(0, "hsla(0, 0%, 100%, 1)"), S.addColorStop(1, `hsla(${((w = e.color) == null ? void 0 : w.h) ?? 0}, 100%, 50%, 1)`), p.fillStyle = S, p.fillRect(0, 0, y.width, y.height);
      const I = p.createLinearGradient(0, 0, 0, y.height);
      I.addColorStop(0, "hsla(0, 0%, 100%, 0)"), I.addColorStop(1, "hsla(0, 0%, 0%, 1)"), p.fillStyle = I, p.fillRect(0, 0, y.width, y.height);
    }
    return q(() => {
      var y;
      return (y = e.color) == null ? void 0 : y.h;
    }, h, {
      immediate: !0
    }), q(() => [i.value, r.value], (y, p) => {
      h(), o.value = {
        x: s.value.x * y[0] / p[0],
        y: s.value.y * y[1] / p[1]
      };
    }, {
      flush: "post"
    }), q(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      o.value = e.color ? {
        x: e.color.s * i.value,
        y: (1 - e.color.v) * r.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), tt(() => h()), F(() => c("div", {
      ref: d,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: f,
      onTouchstartPassive: f
    }, [c("canvas", {
      ref: l,
      width: i.value,
      height: r.value
    }, null), e.color && c("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: u.value
    }, null)])), {};
  }
});
function pp(e, t) {
  if (t) {
    const {
      a: n,
      ...a
    } = e;
    return a;
  }
  return e;
}
function Sp(e, t) {
  if (t == null || typeof t == "string") {
    const n = Zs(e);
    return e.a === 1 ? n.slice(0, 7) : n;
  }
  if (typeof t == "object") {
    let n;
    return cn(t, ["r", "g", "b"]) ? n = zt(e) : cn(t, ["h", "s", "l"]) ? n = Ws(e) : cn(t, ["h", "s", "v"]) && (n = e), pp(n, !cn(t, ["a"]) && e.a === 1);
  }
  return e;
}
const $n = {
  h: 0,
  s: 0,
  v: 1,
  a: 1
}, $i = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, t) => ({
      ...e,
      r: Number(t)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, t) => ({
      ...e,
      g: Number(t)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, t) => ({
      ...e,
      b: Number(t)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: t
      } = e;
      return t != null ? Math.round(t * 100) / 100 : 1;
    },
    getColor: (e, t) => ({
      ...e,
      a: Number(t)
    })
  }],
  to: zt,
  from: cl
};
var ds;
const kp = {
  ...$i,
  inputs: (ds = $i.inputs) == null ? void 0 : ds.slice(0, 3)
}, _i = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, t) => ({
      ...e,
      h: Number(t)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, t) => ({
      ...e,
      s: Number(t)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, t) => ({
      ...e,
      l: Number(t)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: t
      } = e;
      return t != null ? Math.round(t * 100) / 100 : 1;
    },
    getColor: (e, t) => ({
      ...e,
      a: Number(t)
    })
  }],
  to: Ws,
  from: lr
}, wp = {
  ..._i,
  inputs: _i.inputs.slice(0, 3)
}, Ic = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, t) => t
  }],
  to: Zs,
  from: Xs
}, Cp = {
  ...Ic,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, t) => t
  }]
}, hn = {
  rgb: kp,
  rgba: $i,
  hsl: wp,
  hsla: _i,
  hex: Cp,
  hexa: Ic
}, Vp = (e) => {
  let {
    label: t,
    ...n
  } = e;
  return c("div", {
    class: "v-color-picker-edit__input"
  }, [c("input", n, null), c("span", null, [t])]);
}, xp = E({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(hn).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(hn),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(hn).includes(t))
  },
  ...Q()
}, "VColorPickerEdit"), Pp = pt({
  name: "VColorPickerEdit",
  props: xp(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = b(() => e.modes.map((i) => ({
      ...hn[i],
      name: i
    }))), l = b(() => {
      var o;
      const i = a.value.find((s) => s.name === e.mode);
      if (!i)
        return [];
      const r = e.color ? i.to(e.color) : null;
      return (o = i.inputs) == null ? void 0 : o.map((s) => {
        let {
          getValue: u,
          getColor: d,
          ...v
        } = s;
        return {
          ...i.inputProps,
          ...v,
          disabled: e.disabled,
          value: r && u(r),
          onChange: (f) => {
            const m = f.target;
            m && n("update:color", i.from(d(r ?? $n, m.value)));
          }
        };
      });
    });
    return F(() => {
      var i;
      return c("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(i = l.value) == null ? void 0 : i.map((r) => c(Vp, r, null)), a.value.length > 1 && c(Te, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const r = a.value.findIndex((o) => o.name === e.mode);
          n("update:mode", a.value[(r + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), Dr = Symbol.for("vuetify:v-slider");
function Li(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function Ip(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const Tc = E({
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
  ...Oe(),
  ...Ke({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), Dc = (e) => {
  const t = b(() => parseFloat(e.min)), n = b(() => parseFloat(e.max)), a = b(() => +e.step > 0 ? parseFloat(e.step) : 0), l = b(() => Math.max(mo(a.value), mo(t.value)));
  function i(r) {
    if (r = parseFloat(r), a.value <= 0)
      return r;
    const o = Ue(r, t.value, n.value), s = t.value % a.value, u = Math.round((o - s) / a.value) * a.value + s;
    return parseFloat(Math.min(u, n.value).toFixed(l.value));
  }
  return {
    min: t,
    max: n,
    step: a,
    decimals: l,
    roundValue: i
  };
}, Ac = (e) => {
  let {
    props: t,
    steps: n,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: r
  } = e;
  const {
    isRtl: o
  } = Je(), s = _(t, "reverse"), u = b(() => t.direction === "vertical"), d = b(() => u.value !== s.value), {
    min: v,
    max: f,
    step: m,
    decimals: g,
    roundValue: h
  } = n, y = b(() => parseInt(t.thumbSize, 10)), p = b(() => parseInt(t.tickSize, 10)), S = b(() => parseInt(t.trackSize, 10)), I = b(() => (f.value - v.value) / m.value), w = _(t, "disabled"), P = b(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), C = b(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), k = b(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), V = G(!1), x = G(0), T = Y(), M = Y();
  function A(z) {
    var ye;
    const ae = t.direction === "vertical", te = ae ? "top" : "left", ve = ae ? "height" : "width", W = ae ? "clientY" : "clientX", {
      [te]: de,
      [ve]: ce
    } = (ye = T.value) == null ? void 0 : ye.$el.getBoundingClientRect(), he = Ip(z, W);
    let le = Math.min(Math.max((he - de - x.value) / ce, 0), 1) || 0;
    return (ae ? d.value : d.value !== o.value) && (le = 1 - le), h(v.value + le * (f.value - v.value));
  }
  const B = (z) => {
    i({
      value: A(z)
    }), V.value = !1, x.value = 0;
  }, O = (z) => {
    M.value = r(z), M.value && (M.value.focus(), V.value = !0, M.value.contains(z.target) ? x.value = Li(z, M.value, t.direction) : (x.value = 0, l({
      value: A(z)
    })), a({
      value: A(z)
    }));
  }, H = {
    passive: !0,
    capture: !0
  };
  function U(z) {
    l({
      value: A(z)
    });
  }
  function ee(z) {
    z.stopPropagation(), z.preventDefault(), B(z), window.removeEventListener("mousemove", U, H), window.removeEventListener("mouseup", ee);
  }
  function $(z) {
    var ae;
    B(z), window.removeEventListener("touchmove", U, H), (ae = z.target) == null || ae.removeEventListener("touchend", $);
  }
  function R(z) {
    var ae;
    O(z), window.addEventListener("touchmove", U, H), (ae = z.target) == null || ae.addEventListener("touchend", $, {
      passive: !1
    });
  }
  function j(z) {
    z.preventDefault(), O(z), window.addEventListener("mousemove", U, H), window.addEventListener("mouseup", ee, {
      passive: !1
    });
  }
  const N = (z) => {
    const ae = (z - v.value) / (f.value - v.value) * 100;
    return Ue(isNaN(ae) ? 0 : ae, 0, 100);
  }, X = _(t, "showTicks"), K = b(() => X.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((z) => ({
    value: z,
    position: N(z),
    label: z.toString()
  })) : Object.keys(t.ticks).map((z) => ({
    value: parseFloat(z),
    position: N(parseFloat(z)),
    label: t.ticks[z]
  })) : I.value !== 1 / 0 ? _t(I.value + 1).map((z) => {
    const ae = v.value + z * m.value;
    return {
      value: ae,
      position: N(ae)
    };
  }) : [] : []), ie = b(() => K.value.some((z) => {
    let {
      label: ae
    } = z;
    return !!ae;
  })), ne = {
    activeThumbRef: M,
    color: _(t, "color"),
    decimals: g,
    disabled: w,
    direction: _(t, "direction"),
    elevation: _(t, "elevation"),
    hasLabels: ie,
    isReversed: s,
    indexFromEnd: d,
    min: v,
    max: f,
    mousePressed: V,
    numTicks: I,
    onSliderMousedown: j,
    onSliderTouchstart: R,
    parsedTicks: K,
    parseMouseMove: A,
    position: N,
    readonly: _(t, "readonly"),
    rounded: _(t, "rounded"),
    roundValue: h,
    showTicks: X,
    startOffset: x,
    step: m,
    thumbSize: y,
    thumbColor: P,
    thumbLabel: _(t, "thumbLabel"),
    ticks: _(t, "ticks"),
    tickSize: p,
    trackColor: C,
    trackContainerRef: T,
    trackFillColor: k,
    trackSize: S,
    vertical: u
  };
  return Ee(Dr, ne), ne;
}, Tp = E({
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
  ...Q()
}, "VSliderThumb"), Fi = L()({
  name: "VSliderThumb",
  directives: {
    Ripple: qt
  },
  props: Tp(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = ke(Dr), {
      isRtl: i,
      rtlClasses: r
    } = Je();
    if (!l)
      throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: o,
      step: s,
      disabled: u,
      thumbSize: d,
      thumbLabel: v,
      direction: f,
      isReversed: m,
      vertical: g,
      readonly: h,
      elevation: y,
      mousePressed: p,
      decimals: S,
      indexFromEnd: I
    } = l, w = b(() => u.value ? void 0 : y.value), {
      elevationClasses: P
    } = Qe(w), {
      textColorClasses: C,
      textColorStyles: k
    } = lt(o), {
      pageup: V,
      pagedown: x,
      end: T,
      home: M,
      left: A,
      right: B,
      down: O,
      up: H
    } = vi, U = [V, x, T, M, A, B, O, H], ee = b(() => s.value ? [1, 2, 3] : [1, 5, 10]);
    function $(j, N) {
      if (!U.includes(j.key))
        return;
      j.preventDefault();
      const X = s.value || 0.1, K = (e.max - e.min) / X;
      if ([A, B, O, H].includes(j.key)) {
        const ne = (g.value ? [i.value ? A : B, m.value ? O : H] : I.value !== i.value ? [A, H] : [B, H]).includes(j.key) ? 1 : -1, z = j.shiftKey ? 2 : j.ctrlKey ? 1 : 0;
        N = N + ne * X * ee.value[z];
      } else if (j.key === M)
        N = e.min;
      else if (j.key === T)
        N = e.max;
      else {
        const ie = j.key === x ? 1 : -1;
        N = N - ie * X * (K > 100 ? K / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, N));
    }
    function R(j) {
      const N = $(j, e.modelValue);
      N != null && a("update:modelValue", N);
    }
    return F(() => {
      const j = J(I.value ? 100 - e.position : e.position, "%");
      return c("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && p.value
        }, e.class, r.value],
        style: [{
          "--v-slider-thumb-position": j,
          "--v-slider-thumb-size": J(d.value)
        }, e.style],
        role: "slider",
        tabindex: u.value ? -1 : 0,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!h.value,
        "aria-orientation": f.value,
        onKeydown: h.value ? void 0 : R
      }, [c("div", {
        class: ["v-slider-thumb__surface", C.value, P.value],
        style: {
          ...k.value
        }
      }, null), ge(c("div", {
        class: ["v-slider-thumb__ripple", C.value],
        style: k.value
      }, null), [[it("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), c(fr, {
        origin: "bottom center"
      }, {
        default: () => {
          var N;
          return [ge(c("div", {
            class: "v-slider-thumb__label-container"
          }, [c("div", {
            class: ["v-slider-thumb__label"]
          }, [c("div", null, [((N = n["thumb-label"]) == null ? void 0 : N.call(n, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(s.value ? S.value : 1)])])]), [[xt, v.value && e.focused || v.value === "always"]])];
        }
      })]);
    }), {};
  }
}), Dp = E({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...Q()
}, "VSliderTrack"), Mc = L()({
  name: "VSliderTrack",
  props: Dp(),
  emits: {},
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(Dr);
    if (!a)
      throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: r,
      showTicks: o,
      tickSize: s,
      trackColor: u,
      trackFillColor: d,
      trackSize: v,
      vertical: f,
      min: m,
      max: g,
      indexFromEnd: h
    } = a, {
      roundedClasses: y
    } = Re(r), {
      backgroundColorClasses: p,
      backgroundColorStyles: S
    } = Ae(d), {
      backgroundColorClasses: I,
      backgroundColorStyles: w
    } = Ae(u), P = b(() => `inset-${f.value ? "block" : "inline"}-${h.value ? "end" : "start"}`), C = b(() => f.value ? "height" : "width"), k = b(() => ({
      [P.value]: "0%",
      [C.value]: "100%"
    })), V = b(() => e.stop - e.start), x = b(() => ({
      [P.value]: J(e.start, "%"),
      [C.value]: J(V.value, "%")
    })), T = b(() => o.value ? (f.value ? i.value.slice().reverse() : i.value).map((A, B) => {
      var H;
      const O = A.value !== m.value && A.value !== g.value ? J(A.position, "%") : void 0;
      return c("div", {
        key: A.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": A.position >= e.start && A.position <= e.stop,
          "v-slider-track__tick--first": A.value === m.value,
          "v-slider-track__tick--last": A.value === g.value
        }],
        style: {
          [P.value]: O
        }
      }, [(A.label || n["tick-label"]) && c("div", {
        class: "v-slider-track__tick-label"
      }, [((H = n["tick-label"]) == null ? void 0 : H.call(n, {
        tick: A,
        index: B
      })) ?? A.label])]);
    }) : []);
    return F(() => c("div", {
      class: ["v-slider-track", y.value, e.class],
      style: [{
        "--v-slider-track-size": J(v.value),
        "--v-slider-tick-size": J(s.value)
      }, e.style]
    }, [c("div", {
      class: ["v-slider-track__background", I.value, {
        "v-slider-track__background--opacity": !!l.value || !d.value
      }],
      style: {
        ...k.value,
        ...w.value
      }
    }, null), c("div", {
      class: ["v-slider-track__fill", p.value],
      style: {
        ...x.value,
        ...S.value
      }
    }, null), o.value && c("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": o.value === "always"
      }]
    }, [T.value])])), {};
  }
}), Ap = E({
  ...Ma(),
  ...Tc(),
  ...Zt(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), Ri = L()({
  name: "VSlider",
  props: Ap(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Y(), {
      rtlClasses: i
    } = Je(), r = Dc(e), o = ue(e, "modelValue", void 0, (C) => r.roundValue(C ?? r.min.value)), {
      min: s,
      max: u,
      mousePressed: d,
      roundValue: v,
      onSliderMousedown: f,
      onSliderTouchstart: m,
      trackContainerRef: g,
      position: h,
      hasLabels: y,
      readonly: p
    } = Ac({
      props: e,
      steps: r,
      onSliderStart: () => {
        a("start", o.value);
      },
      onSliderEnd: (C) => {
        let {
          value: k
        } = C;
        const V = v(k);
        o.value = V, a("end", V);
      },
      onSliderMove: (C) => {
        let {
          value: k
        } = C;
        return o.value = v(k);
      },
      getActiveThumb: () => {
        var C;
        return (C = l.value) == null ? void 0 : C.$el;
      }
    }), {
      isFocused: S,
      focus: I,
      blur: w
    } = Xt(e), P = b(() => h(o.value));
    return F(() => {
      const C = et.filterProps(e), k = !!(e.label || n.label || n.prepend);
      return c(et, D({
        class: ["v-slider", {
          "v-slider--has-labels": !!n["tick-label"] || y.value,
          "v-slider--focused": S.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, C, {
        focused: S.value
      }), {
        ...n,
        prepend: k ? (V) => {
          var x, T;
          return c(re, null, [((x = n.label) == null ? void 0 : x.call(n, V)) ?? (e.label ? c(qn, {
            id: V.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (T = n.prepend) == null ? void 0 : T.call(n, V)]);
        } : void 0,
        default: (V) => {
          let {
            id: x,
            messagesId: T
          } = V;
          return c("div", {
            class: "v-slider__container",
            onMousedown: p.value ? void 0 : f,
            onTouchstartPassive: p.value ? void 0 : m
          }, [c("input", {
            id: x.value,
            name: e.name || x.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: o.value
          }, null), c(Mc, {
            ref: g,
            start: 0,
            stop: P.value
          }, {
            "tick-label": n["tick-label"]
          }), c(Fi, {
            ref: l,
            "aria-describedby": T.value,
            focused: S.value,
            min: s.value,
            max: u.value,
            modelValue: o.value,
            "onUpdate:modelValue": (M) => o.value = M,
            position: P.value,
            elevation: e.elevation,
            onFocus: I,
            onBlur: w,
            ripple: e.ripple
          }, {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), Mp = E({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...Q()
}, "VColorPickerPreview"), Bp = pt({
  name: "VColorPickerPreview",
  props: Mp(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = new AbortController();
    Nd(() => a.abort());
    async function l() {
      if (!co)
        return;
      const i = new window.EyeDropper();
      try {
        const r = await i.open({
          signal: a.signal
        }), o = Xs(r.sRGBHex);
        n("update:color", {
          ...e.color ?? $n,
          ...o
        });
      } catch {
      }
    }
    return F(() => {
      var i, r;
      return c("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [co && c("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [c(Te, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), c("div", {
        class: "v-color-picker-preview__dot"
      }, [c("div", {
        style: {
          background: Ks(e.color ?? $n)
        }
      }, null)]), c("div", {
        class: "v-color-picker-preview__sliders"
      }, [c(Ri, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (i = e.color) == null ? void 0 : i.h,
        "onUpdate:modelValue": (o) => n("update:color", {
          ...e.color ?? $n,
          h: o
        }),
        step: 0,
        min: 0,
        max: 360,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null), !e.hideAlpha && c(Ri, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((r = e.color) == null ? void 0 : r.a) ?? 1,
        "onUpdate:modelValue": (o) => n("update:color", {
          ...e.color ?? $n,
          a: o
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
}), Ep = {
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
}, Op = {
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
}, $p = {
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
}, _p = {
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
}, Lp = {
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
}, Fp = {
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
}, Rp = {
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
}, Np = {
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
}, Hp = {
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
}, jp = {
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
}, zp = {
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
}, Yp = {
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
}, Wp = {
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
}, Up = {
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
}, Kp = {
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
}, Gp = {
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
}, qp = {
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
}, Xp = {
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
}, Zp = {
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
}, Jp = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Qp = {
  red: Ep,
  pink: Op,
  purple: $p,
  deepPurple: _p,
  indigo: Lp,
  blue: Fp,
  lightBlue: Rp,
  cyan: Np,
  teal: Hp,
  green: jp,
  lightGreen: zp,
  lime: Yp,
  yellow: Wp,
  amber: Up,
  orange: Kp,
  deepOrange: Gp,
  brown: qp,
  blueGrey: Xp,
  grey: Zp,
  shades: Jp
}, e1 = E({
  swatches: {
    type: Array,
    default: () => t1(Qp)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...Q()
}, "VColorPickerSwatches");
function t1(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const n1 = pt({
  name: "VColorPickerSwatches",
  props: e1(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    return F(() => c("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: J(e.maxHeight)
      }, e.style]
    }, [c("div", null, [e.swatches.map((a) => c("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const i = Ct(l), r = cl(i), o = Us(i);
      return c("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => r && n("update:color", r)
      }, [c("div", {
        style: {
          background: o
        }
      }, [e.color && Ut(e.color, r) ? c(Ve, {
        size: "x-small",
        icon: "$success",
        color: gh(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), Tl = E({
  color: String,
  ...wt(),
  ...Q(),
  ...ft(),
  ...Ke(),
  ...an(),
  ...Kn(),
  ...Oe(),
  ...me(),
  ...Se()
}, "VSheet"), Sn = L()({
  name: "VSheet",
  props: Tl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = xe(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ae(_(e, "color")), {
      borderClasses: r
    } = It(e), {
      dimensionStyles: o
    } = vt(e), {
      elevationClasses: s
    } = Qe(e), {
      locationStyles: u
    } = ln(e), {
      positionClasses: d
    } = Gn(e), {
      roundedClasses: v
    } = Re(e);
    return F(() => c(e.tag, {
      class: ["v-sheet", a.value, l.value, r.value, s.value, d.value, v.value, e.class],
      style: [i.value, o.value, u.value, e.style]
    }, n)), {};
  }
}), a1 = E({
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
    validator: (e) => Object.keys(hn).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(hn),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(hn).includes(t))
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
  ...Ge(Tl({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker"), l1 = pt({
  name: "VColorPicker",
  props: a1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const t = ue(e, "mode"), n = Y(null), a = ue(e, "modelValue", void 0, (r) => {
      if (r == null || r === "")
        return null;
      let o;
      try {
        o = cl(Ct(r));
      } catch (s) {
        return Nt(s), null;
      }
      return n.value && (o = {
        ...o,
        h: n.value.h
      }, n.value = null), o;
    }, (r) => r ? Sp(r, e.modelValue) : null), {
      rtlClasses: l
    } = Je(), i = (r) => {
      a.value = r, n.value = r;
    };
    return tt(() => {
      e.modes.includes(t.value) || (t.value = e.modes[0]);
    }), _e({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), F(() => {
      const r = Sn.filterProps(e);
      return c(Sn, D({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", l.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Ks({
            ...a.value ?? $n,
            a: 1
          })
        }, e.style]
      }, r, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && c(bp, {
          key: "canvas",
          color: a.value,
          "onUpdate:color": i,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && c("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && c(Bp, {
          key: "preview",
          color: a.value,
          "onUpdate:color": i,
          hideAlpha: !t.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && c(Pp, {
          key: "edit",
          modes: e.modes,
          mode: t.value,
          "onUpdate:mode": (o) => t.value = o,
          color: a.value,
          "onUpdate:color": i,
          disabled: e.disabled
        }, null)]), e.showSwatches && c(n1, {
          key: "swatches",
          color: a.value,
          "onUpdate:color": i,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)]
      });
    }), {};
  }
});
function i1(e, t, n) {
  if (t == null)
    return e;
  if (Array.isArray(t))
    throw new Error("Multiple matches is not implemented");
  return typeof t == "number" && ~t ? c(re, null, [c("span", {
    class: "v-combobox__unmask"
  }, [e.substr(0, t)]), c("span", {
    class: "v-combobox__mask"
  }, [e.substr(t, n)]), c("span", {
    class: "v-combobox__unmask"
  }, [e.substr(t + n)])]) : e;
}
const r1 = E({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: !0
  },
  delimiters: Array,
  ...$a({
    filterKeys: ["title"]
  }),
  ...xr({
    hideNoData: !0,
    returnObject: !0
  }),
  ...Ge(Pl({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Kt({
    transition: !1
  })
}, "VCombobox"), o1 = L()({
  name: "VCombobox",
  props: r1(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    var ve;
    let {
      emit: n,
      slots: a
    } = t;
    const {
      t: l
    } = We(), i = Y(), r = G(!1), o = G(!0), s = G(!1), u = Y(), d = Y(), v = ue(e, "menu"), f = b({
      get: () => v.value,
      set: (W) => {
        var de;
        v.value && !W && ((de = u.value) != null && de.ΨopenChildren) || (v.value = W);
      }
    }), m = G(-1);
    let g = !1;
    const h = b(() => {
      var W;
      return (W = i.value) == null ? void 0 : W.color;
    }), y = b(() => f.value ? e.closeText : e.openText), {
      items: p,
      transformIn: S,
      transformOut: I
    } = kr(e), {
      textColorClasses: w,
      textColorStyles: P
    } = lt(h), C = ue(e, "modelValue", [], (W) => S(ze(W)), (W) => {
      const de = I(W);
      return e.multiple ? de : de[0] ?? null;
    }), k = Sl(), V = G(e.multiple ? "" : ((ve = C.value[0]) == null ? void 0 : ve.title) ?? ""), x = b({
      get: () => V.value,
      set: (W) => {
        var de;
        if (V.value = W ?? "", e.multiple || (C.value = [fn(e, W)]), W && e.multiple && ((de = e.delimiters) != null && de.length)) {
          const ce = W.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
          ce.length > 1 && (ce.forEach((he) => {
            he = he.trim(), he && ne(fn(e, he));
          }), V.value = "");
        }
        W || (m.value = -1), o.value = !W;
      }
    }), T = b(() => typeof e.counterValue == "function" ? e.counterValue(C.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? C.value.length : x.value.length);
    q(V, (W) => {
      g ? Ce(() => g = !1) : r.value && !f.value && (f.value = !0), n("update:search", W);
    }), q(C, (W) => {
      var de;
      e.multiple || (V.value = ((de = W[0]) == null ? void 0 : de.title) ?? "");
    });
    const {
      filteredItems: M,
      getMatches: A
    } = _a(e, p, () => o.value ? "" : x.value), B = b(() => e.hideSelected ? M.value.filter((W) => !C.value.some((de) => de.value === W.value)) : M.value), O = b(() => C.value.map((W) => W.value)), H = b(() => {
      var de;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && x.value === ((de = B.value[0]) == null ? void 0 : de.title)) && B.value.length > 0 && !o.value && !s.value;
    }), U = b(() => e.hideNoData && !B.value.length || e.readonly || (k == null ? void 0 : k.isReadonly.value)), ee = Y(), {
      onListScroll: $,
      onListKeydown: R
    } = Vr(ee, i);
    function j(W) {
      g = !0, e.openOnClear && (f.value = !0);
    }
    function N() {
      U.value || (f.value = !0);
    }
    function X(W) {
      U.value || (r.value && (W.preventDefault(), W.stopPropagation()), f.value = !f.value);
    }
    function K(W) {
      var he;
      if (jm(W) || e.readonly || k != null && k.isReadonly.value)
        return;
      const de = i.value.selectionStart, ce = C.value.length;
      if ((m.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(W.key)) && W.preventDefault(), ["Enter", "ArrowDown"].includes(W.key) && (f.value = !0), ["Escape"].includes(W.key) && (f.value = !1), ["Enter", "Escape", "Tab"].includes(W.key) && (H.value && ["Enter", "Tab"].includes(W.key) && ne(M.value[0]), o.value = !0), W.key === "ArrowDown" && H.value && ((he = ee.value) == null || he.focus("next")), !!e.multiple) {
        if (["Backspace", "Delete"].includes(W.key)) {
          if (m.value < 0) {
            W.key === "Backspace" && !x.value && (m.value = ce - 1);
            return;
          }
          const le = m.value, ye = C.value[m.value];
          ye && !ye.props.disabled && ne(ye, !1), m.value = le >= ce - 1 ? ce - 2 : le;
        }
        if (W.key === "ArrowLeft") {
          if (m.value < 0 && de > 0)
            return;
          const le = m.value > -1 ? m.value - 1 : ce - 1;
          C.value[le] ? m.value = le : (m.value = -1, i.value.setSelectionRange(x.value.length, x.value.length));
        }
        if (W.key === "ArrowRight") {
          if (m.value < 0)
            return;
          const le = m.value + 1;
          C.value[le] ? m.value = le : (m.value = -1, i.value.setSelectionRange(0, 0));
        }
        W.key === "Enter" && x.value && (ne(fn(e, x.value)), x.value = "");
      }
    }
    function ie() {
      var W;
      r.value && (o.value = !0, (W = i.value) == null || W.focus());
    }
    function ne(W) {
      let de = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (e.multiple) {
        const ce = C.value.findIndex((le) => e.valueComparator(le.value, W.value)), he = de ?? !~ce;
        if (~ce) {
          const le = he ? [...C.value, W] : [...C.value];
          le.splice(ce, 1), C.value = le;
        } else
          he && (C.value = [...C.value, W]);
        e.clearOnSelect && (x.value = "");
      } else {
        const ce = de !== !1;
        C.value = ce ? [W] : [], V.value = ce ? W.title : "", Ce(() => {
          f.value = !1, o.value = !0;
        });
      }
    }
    function z(W) {
      r.value = !0, setTimeout(() => {
        s.value = !0;
      });
    }
    function ae(W) {
      s.value = !1;
    }
    function te(W) {
      (W == null || W === "" && !e.multiple) && (C.value = []);
    }
    return q(r, (W, de) => {
      W || W === de || (m.value = -1, f.value = !1, H.value && !s.value && !C.value.some((ce) => {
        let {
          value: he
        } = ce;
        return he === B.value[0].value;
      }) ? ne(B.value[0]) : e.multiple && x.value && ne(fn(e, x.value)));
    }), q(f, () => {
      if (!e.hideSelected && f.value && C.value.length) {
        const W = B.value.findIndex((de) => C.value.some((ce) => e.valueComparator(ce.value, de.value)));
        De && window.requestAnimationFrame(() => {
          var de;
          W >= 0 && ((de = d.value) == null || de.scrollToIndex(W));
        });
      }
    }), q(B, (W, de) => {
      r.value && (!W.length && e.hideNoData && (f.value = !1), !de.length && W.length && (f.value = !0));
    }), F(() => {
      const W = !!(e.chips || a.chip), de = !!(!e.hideNoData || B.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), ce = C.value.length > 0, he = pn.filterProps(e);
      return c(pn, D({
        ref: i
      }, he, {
        modelValue: x.value,
        "onUpdate:modelValue": [(le) => x.value = le, te],
        focused: r.value,
        "onUpdate:focused": (le) => r.value = le,
        validationValue: C.externalValue,
        counterValue: T.value,
        dirty: ce,
        class: ["v-combobox", {
          "v-combobox--active-menu": f.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selection-slot": !!a.selection,
          "v-combobox--selecting-index": m.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }, e.class],
        style: e.style,
        readonly: e.readonly,
        placeholder: ce ? void 0 : e.placeholder,
        "onClick:clear": j,
        "onMousedown:control": N,
        onKeydown: K
      }), {
        ...a,
        default: () => c(re, null, [c(Vl, D({
          ref: u,
          modelValue: f.value,
          "onUpdate:modelValue": (le) => f.value = le,
          activator: "parent",
          contentClass: "v-combobox__content",
          disabled: U.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: ie
        }, e.menuProps), {
          default: () => [de && c(wl, D({
            ref: ee,
            selected: O.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (le) => le.preventDefault(),
            onKeydown: R,
            onFocusin: z,
            onFocusout: ae,
            onScrollPassive: $,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var le, ye, Me;
              return [(le = a["prepend-item"]) == null ? void 0 : le.call(a), !B.value.length && !e.hideNoData && (((ye = a["no-data"]) == null ? void 0 : ye.call(a)) ?? c(Wt, {
                title: l(e.noDataText)
              }, null)), c(Il, {
                ref: d,
                renderless: !0,
                items: B.value
              }, {
                default: (st) => {
                  var on;
                  let {
                    item: He,
                    index: Et,
                    itemRef: Ot
                  } = st;
                  const rn = D(He.props, {
                    ref: Ot,
                    key: Et,
                    active: H.value && Et === 0 ? !0 : void 0,
                    onClick: () => ne(He, null)
                  });
                  return ((on = a.item) == null ? void 0 : on.call(a, {
                    item: He,
                    index: Et,
                    props: rn
                  })) ?? c(Wt, rn, {
                    prepend: (La) => {
                      let {
                        isSelected: Fa
                      } = La;
                      return c(re, null, [e.multiple && !e.hideSelected ? c(Yt, {
                        key: He.value,
                        modelValue: Fa,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, He.props.prependAvatar && c(Pt, {
                        image: He.props.prependAvatar
                      }, null), He.props.prependIcon && c(Ve, {
                        icon: He.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var La, Fa;
                      return o.value ? He.title : i1(He.title, (La = A(He)) == null ? void 0 : La.title, ((Fa = x.value) == null ? void 0 : Fa.length) ?? 0);
                    }
                  });
                }
              }), (Me = a["append-item"]) == null ? void 0 : Me.call(a)];
            }
          })]
        }), C.value.map((le, ye) => {
          function Me(Ot) {
            Ot.stopPropagation(), Ot.preventDefault(), ne(le, !1);
          }
          const st = {
            "onClick:close": Me,
            onMousedown(Ot) {
              Ot.preventDefault(), Ot.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, He = W ? !!a.chip : !!a.selection, Et = He ? ul(W ? a.chip({
            item: le,
            index: ye,
            props: st
          }) : a.selection({
            item: le,
            index: ye
          })) : void 0;
          if (!(He && !Et))
            return c("div", {
              key: le.value,
              class: ["v-combobox__selection", ye === m.value && ["v-combobox__selection--selected", w.value]],
              style: ye === m.value ? P.value : {}
            }, [W ? a.chip ? c(pe, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: le.title
                }
              }
            }, {
              default: () => [Et]
            }) : c(Ba, D({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: le.title,
              disabled: le.props.disabled
            }, st), null) : Et ?? c("span", {
              class: "v-combobox__selection-text"
            }, [le.title, e.multiple && ye < C.value.length - 1 && c("span", {
              class: "v-combobox__selection-comma"
            }, [at(",")])])]);
        })]),
        "append-inner": function() {
          var st;
          for (var le = arguments.length, ye = new Array(le), Me = 0; Me < le; Me++)
            ye[Me] = arguments[Me];
          return c(re, null, [(st = a["append-inner"]) == null ? void 0 : st.call(a, ...ye), (!e.hideNoData || e.items.length) && e.menuIcon ? c(Ve, {
            class: "v-combobox__menu-icon",
            icon: e.menuIcon,
            onMousedown: X,
            onClick: Rs,
            "aria-label": l(y.value),
            title: l(y.value)
          }, null) : void 0]);
        }
      });
    }), Dt({
      isFocused: r,
      isPristine: o,
      menu: f,
      search: x,
      selectionIndex: m,
      filteredItems: M,
      select: ne
    }, i);
  }
}), Bc = E({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Ec = Symbol.for("vuetify:datatable:expanded");
function Dl(e) {
  const t = _(e, "expandOnClick"), n = ue(e, "expanded", e.expanded, (o) => new Set(o), (o) => [...o.values()]);
  function a(o, s) {
    const u = new Set(n.value);
    s ? u.add(o.value) : u.delete(o.value), n.value = u;
  }
  function l(o) {
    return n.value.has(o.value);
  }
  function i(o) {
    a(o, !l(o));
  }
  const r = {
    expand: a,
    expanded: n,
    expandOnClick: t,
    isExpanded: l,
    toggleExpand: i
  };
  return Ee(Ec, r), r;
}
function Oc() {
  const e = ke(Ec);
  if (!e)
    throw new Error("foo");
  return e;
}
const Ar = E({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), $c = Symbol.for("vuetify:data-table-group");
function Mr(e) {
  return {
    groupBy: ue(e, "groupBy")
  };
}
function Al(e) {
  const {
    groupBy: t,
    sortBy: n
  } = e, a = Y(/* @__PURE__ */ new Set()), l = b(() => t.value.map((u) => ({
    ...u,
    order: u.order ?? !1
  })).concat(n.value));
  function i(u) {
    return a.value.has(u.id);
  }
  function r(u) {
    const d = new Set(a.value);
    i(u) ? d.delete(u.id) : d.add(u.id), a.value = d;
  }
  function o(u) {
    function d(v) {
      const f = [];
      for (const m of v.items)
        "type" in m && m.type === "group" ? f.push(...d(m)) : f.push(m);
      return f;
    }
    return d({
      type: "group",
      items: u,
      id: "dummy",
      key: "dummy",
      value: "dummy",
      depth: 0
    });
  }
  const s = {
    sortByWithGroups: l,
    toggleGroup: r,
    opened: a,
    groupBy: t,
    extractRows: o,
    isGroupOpen: i
  };
  return Ee($c, s), s;
}
function _c() {
  const e = ke($c);
  if (!e)
    throw new Error("Missing group!");
  return e;
}
function s1(e, t) {
  if (!e.length)
    return [];
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = gn(a.raw, t);
    n.has(l) || n.set(l, []), n.get(l).push(a);
  }
  return n;
}
function Lc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!t.length)
    return [];
  const l = s1(e, t[0]), i = [], r = t.slice(1);
  return l.forEach((o, s) => {
    const u = t[0], d = `${a}_${u}_${s}`;
    i.push({
      depth: n,
      id: d,
      key: u,
      value: s,
      items: r.length ? Lc(o, r, n + 1, d) : o,
      type: "group"
    });
  }), i;
}
function Fc(e, t) {
  const n = [];
  for (const a of e)
    "type" in a && a.type === "group" ? (a.value != null && n.push(a), (t.has(a.id) || a.value == null) && n.push(...Fc(a.items, t))) : n.push(a);
  return n;
}
function Ml(e, t, n) {
  return {
    flatItems: b(() => {
      if (!t.value.length)
        return e.value;
      const l = Lc(e.value, t.value.map((i) => i.key));
      return Fc(l, n.value);
    })
  };
}
function Bl(e) {
  let {
    page: t,
    itemsPerPage: n,
    sortBy: a,
    groupBy: l,
    search: i
  } = e;
  const r = Ye("VDataTable"), o = b(() => ({
    page: t.value,
    itemsPerPage: n.value,
    sortBy: a.value,
    groupBy: l.value,
    search: i.value
  }));
  let s = null;
  q(o, () => {
    Ut(s, o.value) || ((s == null ? void 0 : s.search) !== o.value.search && (t.value = 1), r.emit("update:options", o.value), s = o.value);
  }, {
    deep: !0,
    immediate: !0
  });
}
const Br = E({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), Rc = Symbol.for("vuetify:data-table-pagination");
function Er(e) {
  const t = ue(e, "page", void 0, (a) => +(a ?? 1)), n = ue(e, "itemsPerPage", void 0, (a) => +(a ?? 10));
  return {
    page: t,
    itemsPerPage: n
  };
}
function Or(e) {
  const {
    page: t,
    itemsPerPage: n,
    itemsLength: a
  } = e, l = b(() => n.value === -1 ? 0 : n.value * (t.value - 1)), i = b(() => n.value === -1 ? a.value : Math.min(a.value, l.value + n.value)), r = b(() => n.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / n.value));
  Ze(() => {
    t.value > r.value && (t.value = r.value);
  });
  function o(f) {
    n.value = f, t.value = 1;
  }
  function s() {
    t.value = Ue(t.value + 1, 1, r.value);
  }
  function u() {
    t.value = Ue(t.value - 1, 1, r.value);
  }
  function d(f) {
    t.value = Ue(f, 1, r.value);
  }
  const v = {
    page: t,
    itemsPerPage: n,
    startIndex: l,
    stopIndex: i,
    pageCount: r,
    itemsLength: a,
    nextPage: s,
    prevPage: u,
    setPage: d,
    setItemsPerPage: o
  };
  return Ee(Rc, v), v;
}
function u1() {
  const e = ke(Rc);
  if (!e)
    throw new Error("Missing pagination!");
  return e;
}
function Nc(e) {
  const t = Ye("usePaginatedItems"), {
    items: n,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: i
  } = e, r = b(() => i.value <= 0 ? n.value : n.value.slice(a.value, l.value));
  return q(r, (o) => {
    t.emit("update:currentItems", o);
  }), {
    paginatedItems: r
  };
}
const c1 = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var a;
    let {
      items: t,
      value: n
    } = e;
    return new Set(n ? [(a = t[0]) == null ? void 0 : a.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: t
    } = e;
    return t;
  }
}, Hc = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: t
    } = e;
    return t;
  },
  select: (e) => {
    let {
      items: t,
      value: n,
      selected: a
    } = e;
    for (const l of t)
      n ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: t,
      currentPage: n,
      selected: a
    } = e;
    return Hc.select({
      items: n,
      value: t,
      selected: a
    });
  }
}, jc = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: t
    } = e;
    return t;
  },
  select: (e) => {
    let {
      items: t,
      value: n,
      selected: a
    } = e;
    for (const l of t)
      n ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: t,
      allItems: n,
      selected: a
    } = e;
    return jc.select({
      items: n,
      value: t,
      selected: a
    });
  }
}, zc = E({
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
    default: Ut
  }
}, "DataTable-select"), Yc = Symbol.for("vuetify:data-table-selection");
function El(e, t) {
  let {
    allItems: n,
    currentPage: a
  } = t;
  const l = ue(e, "modelValue", e.modelValue, (y) => new Set(ze(y).map((p) => {
    var S;
    return ((S = n.value.find((I) => e.valueComparator(p, I.value))) == null ? void 0 : S.value) ?? p;
  })), (y) => [...y.values()]), i = b(() => n.value.filter((y) => y.selectable)), r = b(() => a.value.filter((y) => y.selectable)), o = b(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return c1;
      case "all":
        return jc;
      case "page":
      default:
        return Hc;
    }
  });
  function s(y) {
    return ze(y).every((p) => l.value.has(p.value));
  }
  function u(y) {
    return ze(y).some((p) => l.value.has(p.value));
  }
  function d(y, p) {
    const S = o.value.select({
      items: y,
      value: p,
      selected: new Set(l.value)
    });
    l.value = S;
  }
  function v(y) {
    d([y], !s([y]));
  }
  function f(y) {
    const p = o.value.selectAll({
      value: y,
      allItems: i.value,
      currentPage: r.value,
      selected: new Set(l.value)
    });
    l.value = p;
  }
  const m = b(() => l.value.size > 0), g = b(() => {
    const y = o.value.allSelected({
      allItems: i.value,
      currentPage: r.value
    });
    return !!y.length && s(y);
  }), h = {
    toggleSelect: v,
    select: d,
    selectAll: f,
    isSelected: s,
    isSomeSelected: u,
    someSelected: m,
    allSelected: g,
    showSelectAll: o.value.showSelectAll
  };
  return Ee(Yc, h), h;
}
function Ol() {
  const e = ke(Yc);
  if (!e)
    throw new Error("Missing selection!");
  return e;
}
const Wc = E({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), Uc = Symbol.for("vuetify:data-table-sort");
function $l(e) {
  const t = ue(e, "sortBy"), n = _(e, "mustSort"), a = _(e, "multiSort");
  return {
    sortBy: t,
    mustSort: n,
    multiSort: a
  };
}
function _l(e) {
  const {
    sortBy: t,
    mustSort: n,
    multiSort: a,
    page: l
  } = e, i = (s) => {
    if (s.key == null)
      return;
    let u = t.value.map((v) => ({
      ...v
    })) ?? [];
    const d = u.find((v) => v.key === s.key);
    d ? d.order === "desc" ? n.value ? d.order = "asc" : u = u.filter((v) => v.key !== s.key) : d.order = "desc" : a.value ? u = [...u, {
      key: s.key,
      order: "asc"
    }] : u = [{
      key: s.key,
      order: "asc"
    }], t.value = u, l && (l.value = 1);
  };
  function r(s) {
    return !!t.value.find((u) => u.key === s.key);
  }
  const o = {
    sortBy: t,
    toggleSort: i,
    isSorted: r
  };
  return Ee(Uc, o), o;
}
function d1() {
  const e = ke(Uc);
  if (!e)
    throw new Error("Missing sort!");
  return e;
}
function $r(e, t, n, a, l) {
  const i = We();
  return {
    sortedItems: b(() => n.value.length ? f1(t.value, n.value, i.current.value, {
      ...e.customKeySort,
      ...a == null ? void 0 : a.value
    }, l == null ? void 0 : l.value) : t.value)
  };
}
function f1(e, t, n, a, l) {
  const i = new Intl.Collator(n, {
    sensitivity: "accent",
    usage: "sort"
  });
  return [...e].sort((r, o) => {
    for (let s = 0; s < t.length; s++) {
      const u = t[s].key, d = t[s].order ?? "asc";
      if (d === !1)
        continue;
      let v = gn(r.raw, u), f = gn(o.raw, u), m = r.raw, g = o.raw;
      if (d === "desc" && ([v, f] = [f, v], [m, g] = [g, m]), l != null && l[u]) {
        const h = l[u](m, g);
        if (!h)
          continue;
        return h;
      }
      if (a != null && a[u]) {
        const h = a[u](v, f);
        if (!h)
          continue;
        return h;
      }
      if (v instanceof Date && f instanceof Date)
        return v.getTime() - f.getTime();
      if ([v, f] = [v, f].map((h) => h != null ? h.toString().toLocaleLowerCase() : h), v !== f)
        return ja(v) && ja(f) ? 0 : ja(v) ? -1 : ja(f) ? 1 : !isNaN(v) && !isNaN(f) ? Number(v) - Number(f) : i.compare(v, f);
    }
    return 0;
  });
}
const v1 = E({
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
function m1(e, t) {
  const n = e.returnObject ? t : Xe(t, e.itemValue), a = Xe(t, e.itemSelectable, !0);
  return {
    type: "item",
    value: n,
    selectable: a,
    raw: t
  };
}
function h1(e, t) {
  const n = [];
  for (const a of t)
    n.push(m1(e, a));
  return n;
}
function g1(e) {
  return {
    items: b(() => h1(e, e.items))
  };
}
const y1 = E({
  search: String,
  loading: Boolean,
  ...Q(),
  ...v1(),
  ...zc(),
  ...Wc(),
  ...Br({
    itemsPerPage: 5
  }),
  ...Bc(),
  ...Ar(),
  ...$a(),
  ...me()
}, "VDataIterator"), b1 = L()({
  name: "VDataIterator",
  props: y1(),
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
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "groupBy"), l = _(e, "search"), {
      items: i
    } = g1(e), {
      filteredItems: r
    } = _a(e, i, l, {
      transform: (N) => N.raw
    }), {
      sortBy: o,
      multiSort: s,
      mustSort: u
    } = $l(e), {
      page: d,
      itemsPerPage: v
    } = Er(e), {
      toggleSort: f
    } = _l({
      sortBy: o,
      multiSort: s,
      mustSort: u,
      page: d
    }), {
      sortByWithGroups: m,
      opened: g,
      extractRows: h,
      isGroupOpen: y,
      toggleGroup: p
    } = Al({
      groupBy: a,
      sortBy: o
    }), {
      sortedItems: S
    } = $r(e, r, m), {
      flatItems: I
    } = Ml(S, a, g), w = b(() => I.value.length), {
      startIndex: P,
      stopIndex: C,
      pageCount: k,
      prevPage: V,
      nextPage: x,
      setItemsPerPage: T,
      setPage: M
    } = Or({
      page: d,
      itemsPerPage: v,
      itemsLength: w
    }), {
      paginatedItems: A
    } = Nc({
      items: I,
      startIndex: P,
      stopIndex: C,
      itemsPerPage: v
    }), B = b(() => h(A.value)), {
      isSelected: O,
      select: H,
      selectAll: U,
      toggleSelect: ee
    } = El(e, {
      allItems: i,
      currentPage: B
    }), {
      isExpanded: $,
      toggleExpand: R
    } = Dl(e);
    Bl({
      page: d,
      itemsPerPage: v,
      sortBy: o,
      groupBy: a,
      search: l
    });
    const j = b(() => ({
      page: d.value,
      itemsPerPage: v.value,
      sortBy: o.value,
      pageCount: k.value,
      toggleSort: f,
      prevPage: V,
      nextPage: x,
      setPage: M,
      setItemsPerPage: T,
      isSelected: O,
      select: H,
      selectAll: U,
      toggleSelect: ee,
      isExpanded: $,
      toggleExpand: R,
      isGroupOpen: y,
      toggleGroup: p,
      items: B.value,
      groupedItems: A.value
    }));
    return F(() => c(e.tag, {
      class: ["v-data-iterator", e.class],
      style: e.style
    }, {
      default: () => {
        var N, X, K, ie;
        return [(N = n.header) == null ? void 0 : N.call(n, j.value), A.value.length ? (K = n.default) == null ? void 0 : K.call(n, j.value) : (X = n["no-data"]) == null ? void 0 : X.call(n), (ie = n.footer) == null ? void 0 : ie.call(n, j.value)];
      }
    })), {};
  }
});
function p1() {
  const e = Y([]);
  Hd(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return {
    refs: e,
    updateRef: t
  };
}
const S1 = E({
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
    type: fe,
    default: "$first"
  },
  prevIcon: {
    type: fe,
    default: "$prev"
  },
  nextIcon: {
    type: fe,
    default: "$next"
  },
  lastIcon: {
    type: fe,
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
  ...wt(),
  ...Q(),
  ...qe(),
  ...Ke(),
  ...Oe(),
  ...Gt(),
  ...me({
    tag: "nav"
  }),
  ...Se(),
  ...Tt({
    variant: "text"
  })
}, "VPagination"), Ni = L()({
  name: "VPagination",
  props: S1(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = ue(e, "modelValue"), {
      t: i,
      n: r
    } = We(), {
      isRtl: o
    } = Je(), {
      themeClasses: s
    } = xe(e), {
      width: u
    } = Vn(), d = G(-1);
    _e(void 0, {
      scoped: !0
    });
    const {
      resizeRef: v
    } = Lt((V) => {
      if (!V.length)
        return;
      const {
        target: x,
        contentRect: T
      } = V[0], M = x.querySelector(".v-pagination__list > *");
      if (!M)
        return;
      const A = T.width, B = M.offsetWidth + parseFloat(getComputedStyle(M).marginRight) * 2;
      d.value = h(A, B);
    }), f = b(() => parseInt(e.length, 10)), m = b(() => parseInt(e.start, 10)), g = b(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : d.value >= 0 ? d.value : h(u.value, 58));
    function h(V, x) {
      const T = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        +((V - x * T) / x).toFixed(2)
      ));
    }
    const y = b(() => {
      if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER)
        return [];
      if (g.value <= 0)
        return [];
      if (g.value === 1)
        return [l.value];
      if (f.value <= g.value)
        return _t(f.value, m.value);
      const V = g.value % 2 === 0, x = V ? g.value / 2 : Math.floor(g.value / 2), T = V ? x : x + 1, M = f.value - x;
      if (T - l.value >= 0)
        return [..._t(Math.max(1, g.value - 1), m.value), e.ellipsis, f.value];
      if (l.value - M >= (V ? 1 : 0)) {
        const A = g.value - 1, B = f.value - A + m.value;
        return [m.value, e.ellipsis, ..._t(A, B)];
      } else {
        const A = Math.max(1, g.value - 3), B = A === 1 ? l.value : l.value - Math.ceil(A / 2) + m.value;
        return [m.value, e.ellipsis, ..._t(A, B), e.ellipsis, f.value];
      }
    });
    function p(V, x, T) {
      V.preventDefault(), l.value = x, T && a(T, x);
    }
    const {
      refs: S,
      updateRef: I
    } = p1();
    _e({
      VPaginationBtn: {
        color: _(e, "color"),
        border: _(e, "border"),
        density: _(e, "density"),
        size: _(e, "size"),
        variant: _(e, "variant"),
        rounded: _(e, "rounded"),
        elevation: _(e, "elevation")
      }
    });
    const w = b(() => y.value.map((V, x) => {
      const T = (M) => I(M, x);
      if (typeof V == "string")
        return {
          isActive: !1,
          key: `ellipsis-${x}`,
          page: V,
          props: {
            ref: T,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const M = V === l.value;
        return {
          isActive: M,
          key: V,
          page: r(V),
          props: {
            ref: T,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || +e.length < 2,
            color: M ? e.activeColor : e.color,
            "aria-current": M,
            "aria-label": i(M ? e.currentPageAriaLabel : e.pageAriaLabel, V),
            onClick: (A) => p(A, V)
          }
        };
      }
    })), P = b(() => {
      const V = !!e.disabled || l.value <= m.value, x = !!e.disabled || l.value >= m.value + f.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: o.value ? e.lastIcon : e.firstIcon,
          onClick: (T) => p(T, m.value, "first"),
          disabled: V,
          "aria-label": i(e.firstAriaLabel),
          "aria-disabled": V
        } : void 0,
        prev: {
          icon: o.value ? e.nextIcon : e.prevIcon,
          onClick: (T) => p(T, l.value - 1, "prev"),
          disabled: V,
          "aria-label": i(e.previousAriaLabel),
          "aria-disabled": V
        },
        next: {
          icon: o.value ? e.prevIcon : e.nextIcon,
          onClick: (T) => p(T, l.value + 1, "next"),
          disabled: x,
          "aria-label": i(e.nextAriaLabel),
          "aria-disabled": x
        },
        last: e.showFirstLastPage ? {
          icon: o.value ? e.firstIcon : e.lastIcon,
          onClick: (T) => p(T, m.value + f.value - 1, "last"),
          disabled: x,
          "aria-label": i(e.lastAriaLabel),
          "aria-disabled": x
        } : void 0
      };
    });
    function C() {
      var x;
      const V = l.value - m.value;
      (x = S.value[V]) == null || x.$el.focus();
    }
    function k(V) {
      V.key === vi.left && !e.disabled && l.value > +e.start ? (l.value = l.value - 1, Ce(C)) : V.key === vi.right && !e.disabled && l.value < m.value + f.value - 1 && (l.value = l.value + 1, Ce(C));
    }
    return F(() => c(e.tag, {
      ref: v,
      class: ["v-pagination", s.value, e.class],
      style: e.style,
      role: "navigation",
      "aria-label": i(e.ariaLabel),
      onKeydown: k,
      "data-test": "v-pagination-root"
    }, {
      default: () => [c("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && c("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [n.first ? n.first(P.value.first) : c(Te, D({
        _as: "VPaginationBtn"
      }, P.value.first), null)]), c("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [n.prev ? n.prev(P.value.prev) : c(Te, D({
        _as: "VPaginationBtn"
      }, P.value.prev), null)]), w.value.map((V, x) => c("li", {
        key: V.key,
        class: ["v-pagination__item", {
          "v-pagination__item--is-active": V.isActive
        }],
        "data-test": "v-pagination-item"
      }, [n.item ? n.item(V) : c(Te, D({
        _as: "VPaginationBtn"
      }, V.props), {
        default: () => [V.page]
      })])), c("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [n.next ? n.next(P.value.next) : c(Te, D({
        _as: "VPaginationBtn"
      }, P.value.next), null)]), e.showFirstLastPage && c("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [n.last ? n.last(P.value.last) : c(Te, D({
        _as: "VPaginationBtn"
      }, P.value.last), null)])])]
    })), {};
  }
}), _r = E({
  prevIcon: {
    type: String,
    default: "$prev"
  },
  nextIcon: {
    type: String,
    default: "$next"
  },
  firstIcon: {
    type: String,
    default: "$first"
  },
  lastIcon: {
    type: String,
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
}, "VDataTableFooter"), Ca = L()({
  name: "VDataTableFooter",
  props: _r(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = We(), {
      page: l,
      pageCount: i,
      startIndex: r,
      stopIndex: o,
      itemsLength: s,
      itemsPerPage: u,
      setItemsPerPage: d
    } = u1(), v = b(() => e.itemsPerPageOptions.map((f) => typeof f == "number" ? {
      value: f,
      title: f === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(f)
    } : {
      ...f,
      title: a(f.title)
    }));
    return F(() => {
      var m;
      const f = Ni.filterProps(e);
      return c("div", {
        class: "v-data-table-footer"
      }, [(m = n.prepend) == null ? void 0 : m.call(n), c("div", {
        class: "v-data-table-footer__items-per-page"
      }, [c("span", null, [a(e.itemsPerPageText)]), c(mc, {
        items: v.value,
        modelValue: u.value,
        "onUpdate:modelValue": (g) => d(Number(g)),
        density: "compact",
        variant: "outlined",
        "hide-details": !0
      }, null)]), c("div", {
        class: "v-data-table-footer__info"
      }, [c("div", null, [a(e.pageText, s.value ? r.value + 1 : 0, o.value, s.value)])]), c("div", {
        class: "v-data-table-footer__pagination"
      }, [c(Ni, D({
        modelValue: l.value,
        "onUpdate:modelValue": (g) => l.value = g,
        density: "comfortable",
        "first-aria-label": e.firstPageLabel,
        "last-aria-label": e.lastPageLabel,
        length: i.value,
        "next-aria-label": e.nextPageLabel,
        "previous-aria-label": e.prevPageLabel,
        rounded: !0,
        "show-first-last-page": !0,
        "total-visible": e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, f), null)])]);
    }), {};
  }
}), Lr = Sh({
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
  width: [Number, String]
}, (e, t) => {
  let {
    slots: n
  } = t;
  const a = e.tag ?? "td";
  return c(a, {
    class: ["v-data-table__td", {
      "v-data-table-column--fixed": e.fixed,
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--no-padding": e.noPadding
    }, `v-data-table-column--align-${e.align}`],
    style: {
      height: J(e.height),
      width: J(e.width),
      left: J(e.fixedOffset || null)
    }
  }, {
    default: () => {
      var l;
      return [(l = n.default) == null ? void 0 : l.call(n)];
    }
  });
}), k1 = E({
  headers: Array
}, "DataTable-header"), Kc = Symbol.for("vuetify:data-table-headers"), Gc = {
  title: "",
  sortable: !1
}, w1 = {
  ...Gc,
  width: 48
};
function C1() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((n) => ({
    element: n,
    priority: 0
  }));
  return {
    enqueue: (n, a) => {
      let l = !1;
      for (let i = 0; i < t.length; i++)
        if (t[i].priority > a) {
          t.splice(i, 0, {
            element: n,
            priority: a
          }), l = !0;
          break;
        }
      l || t.push({
        element: n,
        priority: a
      });
    },
    size: () => t.length,
    count: () => {
      let n = 0;
      if (!t.length)
        return 0;
      const a = Math.floor(t[0].priority);
      for (let l = 0; l < t.length; l++)
        Math.floor(t[l].priority) === a && (n += 1);
      return n;
    },
    dequeue: () => t.shift()
  };
}
function Hi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    t.push(e);
  else
    for (const n of e.children)
      Hi(n, t);
  return t;
}
function qc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const n of e)
    n.key && t.add(n.key), n.children && qc(n.children, t);
  return t;
}
function V1(e) {
  if (e.key) {
    if (e.key === "data-table-group")
      return Gc;
    if (["data-table-expand", "data-table-select"].includes(e.key))
      return w1;
  }
}
function Fr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(t, ...e.children.map((n) => Fr(n, t + 1))) : t;
}
function x1(e) {
  let t = !1;
  function n(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (i)
      if (r && (i.fixed = !0), i.fixed)
        if (i.children)
          for (let o = i.children.length - 1; o >= 0; o--)
            n(i.children[o], !0);
        else
          t ? isNaN(+i.width) && Za(`Multiple fixed columns should have a static width (key: ${i.key})`) : i.lastFixed = !0, t = !0;
      else if (i.children)
        for (let o = i.children.length - 1; o >= 0; o--)
          n(i.children[o]);
      else
        t = !1;
  }
  for (let i = e.length - 1; i >= 0; i--)
    n(e[i]);
  function a(i) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!i)
      return r;
    if (i.children) {
      i.fixedOffset = r;
      for (const o of i.children)
        r = a(o, r);
    } else
      i.fixed && (i.fixedOffset = r, r += parseFloat(i.width || "0") || 0);
    return r;
  }
  let l = 0;
  for (const i of e)
    l = a(i, l);
}
function P1(e, t) {
  const n = [];
  let a = 0;
  const l = C1(e);
  for (; l.size() > 0; ) {
    let r = l.count();
    const o = [];
    let s = 1;
    for (; r > 0; ) {
      const {
        element: u,
        priority: d
      } = l.dequeue(), v = t - a - Fr(u);
      if (o.push({
        ...u,
        rowspan: v ?? 1,
        colspan: u.children ? Hi(u).length : 1
      }), u.children)
        for (const f of u.children) {
          const m = d % 1 + s / Math.pow(10, a + 2);
          l.enqueue(f, a + v + m);
        }
      s += 1, r -= 1;
    }
    a += 1, n.push(o);
  }
  return {
    columns: e.map((r) => Hi(r)).flat(),
    headers: n
  };
}
function Xc(e) {
  const t = [];
  for (const n of e) {
    const a = {
      ...V1(n),
      ...n
    }, l = a.key ?? (typeof a.value == "string" ? a.value : null), i = a.value ?? l ?? null, r = {
      ...a,
      key: l,
      value: i,
      sortable: a.sortable ?? (a.key != null || !!a.sort),
      children: a.children ? Xc(a.children) : void 0
    };
    t.push(r);
  }
  return t;
}
function Rr(e, t) {
  const n = Y([]), a = Y([]), l = Y({}), i = Y({}), r = Y({});
  Ze(() => {
    var h, y, p;
    const u = (e.headers || Object.keys(e.items[0] ?? {}).map((S) => ({
      key: S,
      title: jn(S)
    }))).slice(), d = qc(u);
    (h = t == null ? void 0 : t.groupBy) != null && h.value.length && !d.has("data-table-group") && u.unshift({
      key: "data-table-group",
      title: "Group"
    }), (y = t == null ? void 0 : t.showSelect) != null && y.value && !d.has("data-table-select") && u.unshift({
      key: "data-table-select"
    }), (p = t == null ? void 0 : t.showExpand) != null && p.value && !d.has("data-table-expand") && u.push({
      key: "data-table-expand"
    });
    const v = Xc(u);
    x1(v);
    const f = Math.max(...v.map((S) => Fr(S))) + 1, m = P1(v, f);
    n.value = m.headers, a.value = m.columns;
    const g = m.headers.flat(1);
    for (const S of g)
      S.key && (S.sortable && (S.sort && (l.value[S.key] = S.sort), S.sortRaw && (i.value[S.key] = S.sortRaw)), S.filter && (r.value[S.key] = S.filter));
  });
  const o = {
    headers: n,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: i,
    filterFunctions: r
  };
  return Ee(Kc, o), o;
}
function Ll() {
  const e = ke(Kc);
  if (!e)
    throw new Error("Missing headers!");
  return e;
}
const Zc = E({
  color: String,
  sticky: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: fe,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: fe,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  ...yl()
}, "VDataTableHeaders"), Hn = L()({
  name: "VDataTableHeaders",
  props: Zc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      toggleSort: a,
      sortBy: l,
      isSorted: i
    } = d1(), {
      someSelected: r,
      allSelected: o,
      selectAll: s,
      showSelectAll: u
    } = Ol(), {
      columns: d,
      headers: v
    } = Ll(), {
      loaderClasses: f
    } = Ta(e);
    function m(I, w) {
      if (!(!e.sticky && !I.fixed))
        return {
          position: "sticky",
          left: I.fixed ? J(I.fixedOffset) : void 0,
          top: e.sticky ? `calc(var(--v-table-header-height) * ${w})` : void 0
        };
    }
    function g(I) {
      const w = l.value.find((P) => P.key === I.key);
      return w ? w.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: h,
      backgroundColorStyles: y
    } = Ae(e, "color"), p = b(() => ({
      headers: v.value,
      columns: d.value,
      toggleSort: a,
      isSorted: i,
      sortBy: l.value,
      someSelected: r.value,
      allSelected: o.value,
      selectAll: s,
      getSortIcon: g
    })), S = (I) => {
      let {
        column: w,
        x: P,
        y: C
      } = I;
      const k = w.key === "data-table-select" || w.key === "data-table-expand", V = D(e.headerProps ?? {}, w.headerProps ?? {});
      return c(Lr, D({
        tag: "th",
        align: w.align,
        class: ["v-data-table__th", {
          "v-data-table__th--sortable": w.sortable,
          "v-data-table__th--sorted": i(w),
          "v-data-table__th--fixed": w.fixed,
          "v-data-table__th--sticky": e.sticky
        }, f.value],
        style: {
          width: J(w.width),
          minWidth: J(w.minWidth),
          ...m(w, C)
        },
        colspan: w.colspan,
        rowspan: w.rowspan,
        onClick: w.sortable ? () => a(w) : void 0,
        fixed: w.fixed,
        lastFixed: w.lastFixed,
        noPadding: k
      }, V), {
        default: () => {
          var M;
          const x = `header.${w.key}`, T = {
            column: w,
            selectAll: s,
            isSorted: i,
            toggleSort: a,
            sortBy: l.value,
            someSelected: r.value,
            allSelected: o.value,
            getSortIcon: g
          };
          return n[x] ? n[x](T) : w.key === "data-table-select" ? ((M = n["header.data-table-select"]) == null ? void 0 : M.call(n, T)) ?? (u && c(Yt, {
            modelValue: o.value,
            indeterminate: r.value && !o.value,
            "onUpdate:modelValue": s
          }, null)) : c("div", {
            class: "v-data-table-header__content"
          }, [c("span", null, [w.title]), w.sortable && c(Ve, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: g(w)
          }, null), e.multiSort && i(w) && c("div", {
            key: "badge",
            class: ["v-data-table-header__sort-badge", ...h.value],
            style: y.value
          }, [l.value.findIndex((A) => A.key === w.key) + 1])]);
        }
      });
    };
    F(() => c(re, null, [n.headers ? n.headers(p.value) : v.value.map((I, w) => c("tr", null, [I.map((P, C) => c(S, {
      column: P,
      x: C,
      y: w
    }, null))])), e.loading && c("tr", {
      class: "v-data-table-progress"
    }, [c("th", {
      colspan: d.value.length
    }, [c(bl, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: n.loader
    })])])]));
  }
}), I1 = E({
  item: {
    type: Object,
    required: !0
  }
}, "VDataTableGroupHeaderRow"), T1 = L()({
  name: "VDataTableGroupHeaderRow",
  props: I1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: i
    } = _c(), {
      isSelected: r,
      isSomeSelected: o,
      select: s
    } = Ol(), {
      columns: u
    } = Ll(), d = b(() => i([e.item]));
    return () => c("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [u.value.map((v) => {
      var f, m;
      if (v.key === "data-table-group") {
        const g = a(e.item) ? "$expand" : "$next", h = () => l(e.item);
        return ((f = n["data-table-group"]) == null ? void 0 : f.call(n, {
          item: e.item,
          count: d.value.length,
          props: {
            icon: g,
            onClick: h
          }
        })) ?? c(Lr, {
          class: "v-data-table-group-header-row__column"
        }, {
          default: () => [c(Te, {
            size: "small",
            variant: "text",
            icon: g,
            onClick: h
          }, null), c("span", null, [e.item.value]), c("span", null, [at("("), d.value.length, at(")")])]
        });
      }
      if (v.key === "data-table-select") {
        const g = r(d.value), h = o(d.value) && !g, y = (p) => s(d.value, p);
        return ((m = n["data-table-select"]) == null ? void 0 : m.call(n, {
          props: {
            modelValue: g,
            indeterminate: h,
            "onUpdate:modelValue": y
          }
        })) ?? c("td", null, [c(Yt, {
          modelValue: g,
          indeterminate: h,
          "onUpdate:modelValue": y
        }, null)]);
      }
      return c("td", null, null);
    })]);
  }
}), D1 = E({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: ht(),
  onContextmenu: ht(),
  onDblclick: ht()
}, "VDataTableRow"), Nr = L()({
  name: "VDataTableRow",
  props: D1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      toggleSelect: l
    } = Ol(), {
      isExpanded: i,
      toggleExpand: r
    } = Oc(), {
      columns: o
    } = Ll();
    F(() => c("tr", {
      class: ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }],
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && o.value.map((s, u) => {
      const d = e.item, v = `item.${s.key}`, f = {
        index: e.index,
        item: d.raw,
        internalItem: d,
        value: gn(d.columns, s.key),
        column: s,
        isSelected: a,
        toggleSelect: l,
        isExpanded: i,
        toggleExpand: r
      }, m = typeof e.cellProps == "function" ? e.cellProps({
        index: f.index,
        item: f.item,
        internalItem: f.internalItem,
        value: f.value,
        column: s
      }) : e.cellProps, g = typeof s.cellProps == "function" ? s.cellProps({
        index: f.index,
        item: f.item,
        internalItem: f.internalItem,
        value: f.value
      }) : s.cellProps;
      return c(Lr, D({
        align: s.align,
        fixed: s.fixed,
        fixedOffset: s.fixedOffset,
        lastFixed: s.lastFixed,
        noPadding: s.key === "data-table-select" || s.key === "data-table-expand",
        width: s.width
      }, m, g), {
        default: () => {
          var h, y;
          return n[v] ? n[v](f) : s.key === "data-table-select" ? ((h = n["item.data-table-select"]) == null ? void 0 : h.call(n, f)) ?? c(Yt, {
            disabled: !d.selectable,
            modelValue: a([d]),
            onClick: Wr(() => l(d), ["stop"])
          }, null) : s.key === "data-table-expand" ? ((y = n["item.data-table-expand"]) == null ? void 0 : y.call(n, f)) ?? c(Te, {
            icon: i(d) ? "$collapse" : "$expand",
            size: "small",
            variant: "text",
            onClick: Wr(() => r(d), ["stop"])
          }, null) : $e(f.value);
        }
      });
    })]));
  }
}), Jc = E({
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
  cellProps: [Object, Function]
}, "VDataTableRows"), kn = L()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: Jc(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      columns: l
    } = Ll(), {
      expandOnClick: i,
      toggleExpand: r,
      isExpanded: o
    } = Oc(), {
      isSelected: s,
      toggleSelect: u
    } = Ol(), {
      toggleGroup: d,
      isGroupOpen: v
    } = _c(), {
      t: f
    } = We();
    return F(() => {
      var m, g;
      return e.loading && (!e.items.length || a.loading) ? c("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [c("td", {
        colspan: l.value.length
      }, [((m = a.loading) == null ? void 0 : m.call(a)) ?? f(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? c("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [c("td", {
        colspan: l.value.length
      }, [((g = a["no-data"]) == null ? void 0 : g.call(a)) ?? f(e.noDataText)])]) : c(re, null, [e.items.map((h, y) => {
        var I;
        if (h.type === "group") {
          const w = {
            index: y,
            item: h,
            columns: l.value,
            isExpanded: o,
            toggleExpand: r,
            isSelected: s,
            toggleSelect: u,
            toggleGroup: d,
            isGroupOpen: v
          };
          return a["group-header"] ? a["group-header"](w) : c(T1, D({
            key: `group-header_${h.id}`,
            item: h
          }, Bo(n, ":group-header", () => w)), a);
        }
        const p = {
          index: y,
          item: h.raw,
          internalItem: h,
          columns: l.value,
          isExpanded: o,
          toggleExpand: r,
          isSelected: s,
          toggleSelect: u
        }, S = {
          ...p,
          props: D({
            key: `item_${h.key ?? h.index}`,
            onClick: i.value ? () => {
              r(h);
            } : void 0,
            index: y,
            item: h,
            cellProps: e.cellProps
          }, Bo(n, ":row", () => p), typeof e.rowProps == "function" ? e.rowProps({
            item: p.item,
            index: p.index,
            internalItem: p.internalItem
          }) : e.rowProps)
        };
        return c(re, {
          key: S.props.key
        }, [a.item ? a.item(S) : c(Nr, S.props, a), o(h) && ((I = a["expanded-row"]) == null ? void 0 : I.call(a, p))]);
      })]);
    }), {};
  }
}), Qc = E({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...Q(),
  ...qe(),
  ...me(),
  ...Se()
}, "VTable"), wn = L()({
  name: "VTable",
  props: Qc(),
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const {
      themeClasses: l
    } = xe(e), {
      densityClasses: i
    } = ot(e);
    return F(() => c(e.tag, {
      class: ["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!n.top,
        "v-table--has-bottom": !!n.bottom,
        "v-table--hover": e.hover
      }, l.value, i.value, e.class],
      style: e.style
    }, {
      default: () => {
        var r, o, s;
        return [(r = n.top) == null ? void 0 : r.call(n), n.default ? c("div", {
          class: "v-table__wrapper",
          style: {
            height: J(e.height)
          }
        }, [c("table", null, [n.default()])]) : (o = n.wrapper) == null ? void 0 : o.call(n), (s = n.bottom) == null ? void 0 : s.call(n)];
      }
    })), {};
  }
}), A1 = E({
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
function M1(e, t, n, a) {
  const l = e.returnObject ? t : Xe(t, e.itemValue), i = Xe(t, e.itemSelectable, !0), r = a.reduce((o, s) => (s.key != null && (o[s.key] = Xe(t, s.value)), o), {});
  return {
    type: "item",
    key: e.returnObject ? Xe(t, e.itemValue) : l,
    index: n,
    value: l,
    selectable: i,
    columns: r,
    raw: t
  };
}
function B1(e, t, n) {
  return t.map((a, l) => M1(e, a, l, n));
}
function Hr(e, t) {
  return {
    items: b(() => B1(e, e.items, t.value))
  };
}
const jr = E({
  ...Jc(),
  width: [String, Number],
  search: String,
  ...Bc(),
  ...Ar(),
  ...k1(),
  ...A1(),
  ...zc(),
  ...Wc(),
  ...Zc(),
  ...Qc()
}, "DataTable"), E1 = E({
  ...Br(),
  ...jr(),
  ...$a(),
  ..._r()
}, "VDataTable"), O1 = L()({
  name: "VDataTable",
  props: E1(),
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
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      groupBy: l
    } = Mr(e), {
      sortBy: i,
      multiSort: r,
      mustSort: o
    } = $l(e), {
      page: s,
      itemsPerPage: u
    } = Er(e), {
      columns: d,
      headers: v,
      sortFunctions: f,
      sortRawFunctions: m,
      filterFunctions: g
    } = Rr(e, {
      groupBy: l,
      showSelect: _(e, "showSelect"),
      showExpand: _(e, "showExpand")
    }), {
      items: h
    } = Hr(e, d), y = _(e, "search"), {
      filteredItems: p
    } = _a(e, h, y, {
      transform: (z) => z.columns,
      customKeyFilter: g
    }), {
      toggleSort: S
    } = _l({
      sortBy: i,
      multiSort: r,
      mustSort: o,
      page: s
    }), {
      sortByWithGroups: I,
      opened: w,
      extractRows: P,
      isGroupOpen: C,
      toggleGroup: k
    } = Al({
      groupBy: l,
      sortBy: i
    }), {
      sortedItems: V
    } = $r(e, p, I, f, m), {
      flatItems: x
    } = Ml(V, l, w), T = b(() => x.value.length), {
      startIndex: M,
      stopIndex: A,
      pageCount: B,
      setItemsPerPage: O
    } = Or({
      page: s,
      itemsPerPage: u,
      itemsLength: T
    }), {
      paginatedItems: H
    } = Nc({
      items: x,
      startIndex: M,
      stopIndex: A,
      itemsPerPage: u
    }), U = b(() => P(H.value)), {
      isSelected: ee,
      select: $,
      selectAll: R,
      toggleSelect: j,
      someSelected: N,
      allSelected: X
    } = El(e, {
      allItems: h,
      currentPage: U
    }), {
      isExpanded: K,
      toggleExpand: ie
    } = Dl(e);
    Bl({
      page: s,
      itemsPerPage: u,
      sortBy: i,
      groupBy: l,
      search: y
    }), _e({
      VDataTableRows: {
        hideNoData: _(e, "hideNoData"),
        noDataText: _(e, "noDataText"),
        loading: _(e, "loading"),
        loadingText: _(e, "loadingText")
      }
    });
    const ne = b(() => ({
      page: s.value,
      itemsPerPage: u.value,
      sortBy: i.value,
      pageCount: B.value,
      toggleSort: S,
      setItemsPerPage: O,
      someSelected: N.value,
      allSelected: X.value,
      isSelected: ee,
      select: $,
      selectAll: R,
      toggleSelect: j,
      isExpanded: K,
      toggleExpand: ie,
      isGroupOpen: C,
      toggleGroup: k,
      items: U.value.map((z) => z.raw),
      internalItems: U.value,
      groupedItems: H.value,
      columns: d.value,
      headers: v.value
    }));
    return F(() => {
      const z = Ca.filterProps(e), ae = Hn.filterProps(e), te = kn.filterProps(e), ve = wn.filterProps(e);
      return c(wn, D({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ve), {
        top: () => {
          var W;
          return (W = a.top) == null ? void 0 : W.call(a, ne.value);
        },
        default: () => {
          var W, de, ce, he, le, ye;
          return a.default ? a.default(ne.value) : c(re, null, [(W = a.colgroup) == null ? void 0 : W.call(a, ne.value), c("thead", null, [c(Hn, ae, a)]), (de = a.thead) == null ? void 0 : de.call(a, ne.value), c("tbody", null, [(ce = a["body.prepend"]) == null ? void 0 : ce.call(a, ne.value), a.body ? a.body(ne.value) : c(kn, D(n, te, {
            items: H.value
          }), a), (he = a["body.append"]) == null ? void 0 : he.call(a, ne.value)]), (le = a.tbody) == null ? void 0 : le.call(a, ne.value), (ye = a.tfoot) == null ? void 0 : ye.call(a, ne.value)]);
        },
        bottom: () => a.bottom ? a.bottom(ne.value) : c(re, null, [c(kl, null, null), c(Ca, z, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
}), $1 = E({
  ...jr(),
  ...Ar(),
  ...fc(),
  ...$a()
}, "VDataTableVirtual"), _1 = L()({
  name: "VDataTableVirtual",
  props: $1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      groupBy: l
    } = Mr(e), {
      sortBy: i,
      multiSort: r,
      mustSort: o
    } = $l(e), {
      columns: s,
      headers: u,
      filterFunctions: d,
      sortFunctions: v,
      sortRawFunctions: f
    } = Rr(e, {
      groupBy: l,
      showSelect: _(e, "showSelect"),
      showExpand: _(e, "showExpand")
    }), {
      items: m
    } = Hr(e, s), g = _(e, "search"), {
      filteredItems: h
    } = _a(e, m, g, {
      transform: (ae) => ae.columns,
      customKeyFilter: d
    }), {
      toggleSort: y
    } = _l({
      sortBy: i,
      multiSort: r,
      mustSort: o
    }), {
      sortByWithGroups: p,
      opened: S,
      extractRows: I,
      isGroupOpen: w,
      toggleGroup: P
    } = Al({
      groupBy: l,
      sortBy: i
    }), {
      sortedItems: C
    } = $r(e, h, p, v, f), {
      flatItems: k
    } = Ml(C, l, S), V = b(() => I(k.value)), {
      isSelected: x,
      select: T,
      selectAll: M,
      toggleSelect: A,
      someSelected: B,
      allSelected: O
    } = El(e, {
      allItems: V,
      currentPage: V
    }), {
      isExpanded: H,
      toggleExpand: U
    } = Dl(e), {
      containerRef: ee,
      markerRef: $,
      paddingTop: R,
      paddingBottom: j,
      computedItems: N,
      handleItemResize: X,
      handleScroll: K,
      handleScrollend: ie
    } = vc(e, k), ne = b(() => N.value.map((ae) => ae.raw));
    Bl({
      sortBy: i,
      page: G(1),
      itemsPerPage: G(-1),
      groupBy: l,
      search: g
    }), _e({
      VDataTableRows: {
        hideNoData: _(e, "hideNoData"),
        noDataText: _(e, "noDataText"),
        loading: _(e, "loading"),
        loadingText: _(e, "loadingText")
      }
    });
    const z = b(() => ({
      sortBy: i.value,
      toggleSort: y,
      someSelected: B.value,
      allSelected: O.value,
      isSelected: x,
      select: T,
      selectAll: M,
      toggleSelect: A,
      isExpanded: H,
      toggleExpand: U,
      isGroupOpen: w,
      toggleGroup: P,
      items: V.value.map((ae) => ae.raw),
      internalItems: V.value,
      groupedItems: k.value,
      columns: s.value,
      headers: u.value
    }));
    F(() => {
      const ae = Hn.filterProps(e), te = kn.filterProps(e), ve = wn.filterProps(e);
      return c(wn, D({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ve), {
        top: () => {
          var W;
          return (W = a.top) == null ? void 0 : W.call(a, z.value);
        },
        wrapper: () => {
          var W, de, ce;
          return c("div", {
            ref: ee,
            onScrollPassive: K,
            onScrollend: ie,
            class: "v-table__wrapper",
            style: {
              height: J(e.height)
            }
          }, [c("table", null, [(W = a.colgroup) == null ? void 0 : W.call(a, z.value), c("thead", null, [c(Hn, D(ae, {
            sticky: e.fixedHeader
          }), a)]), c("tbody", null, [c("tr", {
            ref: $,
            style: {
              height: J(R.value),
              border: 0
            }
          }, [c("td", {
            colspan: s.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)]), (de = a["body.prepend"]) == null ? void 0 : de.call(a, z.value), c(kn, D(n, te, {
            items: ne.value
          }), {
            ...a,
            item: (he) => c(dc, {
              key: he.internalItem.index,
              renderless: !0,
              "onUpdate:height": (le) => X(he.internalItem.index, le)
            }, {
              default: (le) => {
                var Me;
                let {
                  itemRef: ye
                } = le;
                return ((Me = a.item) == null ? void 0 : Me.call(a, {
                  ...he,
                  itemRef: ye
                })) ?? c(Nr, D(he.props, {
                  ref: ye,
                  key: he.internalItem.index,
                  index: he.internalItem.index
                }), a);
              }
            })
          }), (ce = a["body.append"]) == null ? void 0 : ce.call(a, z.value), c("tr", {
            style: {
              height: J(j.value),
              border: 0
            }
          }, [c("td", {
            colspan: s.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var W;
          return (W = a.bottom) == null ? void 0 : W.call(a, z.value);
        }
      });
    });
  }
}), L1 = E({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...Br(),
  ...jr(),
  ..._r()
}, "VDataTableServer"), F1 = L()({
  name: "VDataTableServer",
  props: L1(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      groupBy: l
    } = Mr(e), {
      sortBy: i,
      multiSort: r,
      mustSort: o
    } = $l(e), {
      page: s,
      itemsPerPage: u
    } = Er(e), d = b(() => parseInt(e.itemsLength, 10)), {
      columns: v,
      headers: f
    } = Rr(e, {
      groupBy: l,
      showSelect: _(e, "showSelect"),
      showExpand: _(e, "showExpand")
    }), {
      items: m
    } = Hr(e, v), {
      toggleSort: g
    } = _l({
      sortBy: i,
      multiSort: r,
      mustSort: o,
      page: s
    }), {
      opened: h,
      isGroupOpen: y,
      toggleGroup: p,
      extractRows: S
    } = Al({
      groupBy: l,
      sortBy: i
    }), {
      pageCount: I,
      setItemsPerPage: w
    } = Or({
      page: s,
      itemsPerPage: u,
      itemsLength: d
    }), {
      flatItems: P
    } = Ml(m, l, h), {
      isSelected: C,
      select: k,
      selectAll: V,
      toggleSelect: x,
      someSelected: T,
      allSelected: M
    } = El(e, {
      allItems: m,
      currentPage: m
    }), {
      isExpanded: A,
      toggleExpand: B
    } = Dl(e), O = b(() => S(m.value));
    Bl({
      page: s,
      itemsPerPage: u,
      sortBy: i,
      groupBy: l,
      search: _(e, "search")
    }), Ee("v-data-table", {
      toggleSort: g,
      sortBy: i
    }), _e({
      VDataTableRows: {
        hideNoData: _(e, "hideNoData"),
        noDataText: _(e, "noDataText"),
        loading: _(e, "loading"),
        loadingText: _(e, "loadingText")
      }
    });
    const H = b(() => ({
      page: s.value,
      itemsPerPage: u.value,
      sortBy: i.value,
      pageCount: I.value,
      toggleSort: g,
      setItemsPerPage: w,
      someSelected: T.value,
      allSelected: M.value,
      isSelected: C,
      select: k,
      selectAll: V,
      toggleSelect: x,
      isExpanded: A,
      toggleExpand: B,
      isGroupOpen: y,
      toggleGroup: p,
      items: O.value.map((U) => U.raw),
      internalItems: O.value,
      groupedItems: P.value,
      columns: v.value,
      headers: f.value
    }));
    F(() => {
      const U = Ca.filterProps(e), ee = Hn.filterProps(e), $ = kn.filterProps(e), R = wn.filterProps(e);
      return c(wn, D({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, R), {
        top: () => {
          var j;
          return (j = a.top) == null ? void 0 : j.call(a, H.value);
        },
        default: () => {
          var j, N, X, K, ie, ne;
          return a.default ? a.default(H.value) : c(re, null, [(j = a.colgroup) == null ? void 0 : j.call(a, H.value), c("thead", {
            class: "v-data-table__thead",
            role: "rowgroup"
          }, [c(Hn, D(ee, {
            sticky: e.fixedHeader
          }), a)]), (N = a.thead) == null ? void 0 : N.call(a, H.value), c("tbody", {
            class: "v-data-table__tbody",
            role: "rowgroup"
          }, [(X = a["body.prepend"]) == null ? void 0 : X.call(a, H.value), a.body ? a.body(H.value) : c(kn, D(n, $, {
            items: P.value
          }), a), (K = a["body.append"]) == null ? void 0 : K.call(a, H.value)]), (ie = a.tbody) == null ? void 0 : ie.call(a, H.value), (ne = a.tfoot) == null ? void 0 : ne.call(a, H.value)]);
        },
        bottom: () => a.bottom ? a.bottom(H.value) : c(Ca, U, {
          prepend: a["footer.prepend"]
        })
      });
    });
  }
}), R1 = E({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...Q(),
  ...me()
}, "VContainer"), N1 = L()({
  name: "VContainer",
  props: R1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: a
    } = Je();
    return F(() => c(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class],
      style: e.style
    }, n)), {};
  }
}), ed = dl.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), td = dl.reduce((e, t) => {
  const n = "offset" + jn(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), nd = dl.reduce((e, t) => {
  const n = "order" + jn(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), as = {
  col: Object.keys(ed),
  offset: Object.keys(td),
  order: Object.keys(nd)
};
function H1(e, t, n) {
  let a = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === !0) || (a += `-${n}`), a.toLowerCase();
  }
}
const j1 = ["auto", "start", "end", "center", "baseline", "stretch"], z1 = E({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...ed,
  offset: {
    type: [String, Number],
    default: null
  },
  ...td,
  order: {
    type: [String, Number],
    default: null
  },
  ...nd,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => j1.includes(e)
  },
  ...Q(),
  ...me()
}, "VCol"), Y1 = L()({
  name: "VCol",
  props: z1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = b(() => {
      const l = [];
      let i;
      for (i in as)
        as[i].forEach((o) => {
          const s = e[o], u = H1(i, o, s);
          u && l.push(u);
        });
      const r = l.some((o) => o.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !r || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => {
      var l;
      return Cn(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), zr = ["start", "end", "center"], ad = ["space-between", "space-around", "space-evenly"];
function Yr(e, t) {
  return dl.reduce((n, a) => {
    const l = e + jn(a);
    return n[l] = t(), n;
  }, {});
}
const W1 = [...zr, "baseline", "stretch"], ld = (e) => W1.includes(e), id = Yr("align", () => ({
  type: String,
  default: null,
  validator: ld
})), U1 = [...zr, ...ad], rd = (e) => U1.includes(e), od = Yr("justify", () => ({
  type: String,
  default: null,
  validator: rd
})), K1 = [...zr, ...ad, "stretch"], sd = (e) => K1.includes(e), ud = Yr("alignContent", () => ({
  type: String,
  default: null,
  validator: sd
})), ls = {
  align: Object.keys(id),
  justify: Object.keys(od),
  alignContent: Object.keys(ud)
}, G1 = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function q1(e, t, n) {
  let a = G1[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const X1 = E({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: ld
  },
  ...id,
  justify: {
    type: String,
    default: null,
    validator: rd
  },
  ...od,
  alignContent: {
    type: String,
    default: null,
    validator: sd
  },
  ...ud,
  ...Q(),
  ...me()
}, "VRow"), Z1 = L()({
  name: "VRow",
  props: X1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = b(() => {
      const l = [];
      let i;
      for (i in ls)
        ls[i].forEach((r) => {
          const o = e[r], s = q1(i, r, o);
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
      return Cn(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), cd = St("v-spacer", "div", "VSpacer"), dd = E({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: !1
  },
  nextIcon: {
    type: [String],
    default: "$next"
  },
  prevIcon: {
    type: [String],
    default: "$prev"
  },
  modeIcon: {
    type: [String],
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), ji = L()({
  name: "VDatePickerControls",
  props: dd(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = b(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = b(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = b(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), r = b(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function o() {
      n("click:prev");
    }
    function s() {
      n("click:next");
    }
    function u() {
      n("click:year");
    }
    function d() {
      n("click:month");
    }
    return F(() => c("div", {
      class: ["v-date-picker-controls"]
    }, [c(Te, {
      class: "v-date-picker-controls__month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: d
    }, null), c(Te, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: u
    }, null), c(cd, {
      key: "mode-spacer"
    }, null), c("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [c(Te, {
      disabled: i.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: o
    }, null), c(Te, {
      disabled: r.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: s
    }, null)])])), {};
  }
}), J1 = E({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: ht()
}, "VDatePickerHeader"), zi = L()({
  name: "VDatePickerHeader",
  props: J1(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ae(e, "color");
    function r() {
      n("click");
    }
    function o() {
      n("click:append");
    }
    return F(() => {
      const s = !!(a.default || e.header), u = !!(a.append || e.appendIcon);
      return c("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value],
        style: i.value,
        onClick: r
      }, [a.prepend && c("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), s && c(Vt, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var d;
          return [c("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [((d = a.default) == null ? void 0 : d.call(a)) ?? e.header])];
        }
      }), u && c("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? c(pe, {
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
          var d;
          return [(d = a.append) == null ? void 0 : d.call(a)];
        }
      }) : c(Te, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: o
      }, null)])]);
    }), {};
  }
}), Q1 = E({
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
  }
}, "calendar");
function e0(e) {
  const t = Pa(), n = ue(e, "modelValue", [], (f) => ze(f)), a = b(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = ue(e, "year", void 0, (f) => {
    const m = f != null ? Number(f) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), m));
  }, (f) => t.getYear(f)), i = ue(e, "month", void 0, (f) => {
    const m = f != null ? Number(f) : t.getMonth(a.value), g = t.setYear(t.date(), t.getYear(l.value));
    return t.setMonth(g, m);
  }, (f) => t.getMonth(f)), r = b(() => {
    const f = t.getWeekArray(i.value), m = f.flat(), g = 6 * 7;
    if (m.length < g) {
      const h = m[m.length - 1];
      let y = [];
      for (let p = 1; p <= g - m.length; p++)
        y.push(t.addDays(h, p)), p % 7 === 0 && (f.push(y), y = []);
    }
    return f;
  });
  function o(f, m) {
    return f.filter((g) => e.weekdays.includes(t.toJsDate(g).getDay())).map((g, h) => {
      const y = t.toISO(g), p = !t.isSameMonth(g, i.value), S = t.isSameDay(g, t.startOfMonth(i.value)), I = t.isSameDay(g, t.endOfMonth(i.value)), w = t.isSameDay(g, i.value);
      return {
        date: g,
        isoDate: y,
        formatted: t.format(g, "keyboardDate"),
        year: t.getYear(g),
        month: t.getMonth(g),
        isDisabled: v(g),
        isWeekStart: h % 7 === 0,
        isWeekEnd: h % 7 === 6,
        isToday: t.isSameDay(g, m),
        isAdjacent: p,
        isHidden: p && !e.showAdjacentMonths,
        isStart: S,
        isSelected: n.value.some((P) => t.isSameDay(g, P)),
        isEnd: I,
        isSame: w,
        localized: t.format(g, "dayOfMonth")
      };
    });
  }
  const s = b(() => {
    const f = t.startOfWeek(n.value), m = [];
    for (let y = 0; y <= 6; y++)
      m.push(t.addDays(f, y));
    const g = m, h = t.date();
    return o(g, h);
  }), u = b(() => {
    const f = r.value.flat(), m = t.date();
    return o(f, m);
  }), d = b(() => r.value.map((f) => f.length ? hg(t, f[0]) : null));
  function v(f) {
    if (e.disabled)
      return !0;
    const m = t.date(f);
    return e.min && t.isAfter(t.date(e.min), m) || e.max && t.isAfter(m, t.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((g) => t.isSameDay(t.date(g), m)) : typeof e.allowedDates == "function" ? !e.allowedDates(m) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: u,
    daysInWeek: s,
    genDays: o,
    model: n,
    weeksInMonth: r,
    weekNumbers: d
  };
}
const fd = E({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  range: Boolean,
  showWeek: Boolean,
  ...Q1()
}, "VDatePickerMonth"), Yi = L()({
  name: "VDatePickerMonth",
  props: fd(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = Y(), {
      daysInMonth: i,
      model: r,
      weekNumbers: o
    } = e0(e), s = Pa(), u = G(), d = G(), v = b(() => {
      const h = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return r.value.length >= h;
    });
    function f(h) {
      const y = s.startOfDay(h);
      if (!u.value)
        u.value = y, r.value = [u.value];
      else if (d.value)
        u.value = h, d.value = void 0, r.value = [u.value];
      else {
        if (s.isSameDay(h, u.value)) {
          u.value = void 0, r.value = [];
          return;
        } else
          s.isBefore(h, u.value) ? (d.value = u.value, u.value = y) : d.value = y;
        const p = s.getDiff(d.value, u.value), S = [u.value];
        for (let I = 1; I < p; I++) {
          const w = s.addDays(u.value, I);
          S.push(w);
        }
        S.push(d.value), r.value = S;
      }
    }
    function m(h) {
      const y = r.value.findIndex((p) => s.isSameDay(p, h));
      if (y === -1)
        r.value = [...r.value, h];
      else {
        const p = [...r.value];
        p.splice(y, 1), r.value = p;
      }
    }
    function g(h) {
      e.multiple === "range" ? f(h) : e.multiple ? m(h) : r.value = [h];
    }
    return () => c("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && c("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && c("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [at(" ")]), o.value.map((h) => c("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [h]))]), c("div", {
      ref: l,
      class: "v-date-picker-month__days"
    }, [!e.hideWeekdays && s.getWeekdays().map((h) => c("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
    }, [h[0]])), i.value.map((h, y) => {
      const p = {
        props: {
          onClick: () => g(h.date)
        },
        item: h,
        i: y
      };
      return v.value && !h.isSelected && (h.isDisabled = !0), c("div", {
        class: ["v-date-picker-month__day", {
          "v-date-picker-month__day--adjacent": h.isAdjacent,
          "v-date-picker-month__day--hide-adjacent": h.isHidden,
          "v-date-picker-month__day--selected": h.isSelected,
          "v-date-picker-month__day--week-end": h.isWeekEnd,
          "v-date-picker-month__day--week-start": h.isWeekStart
        }],
        "data-v-date": h.isDisabled ? void 0 : h.isoDate
      }, [(e.showAdjacentMonths || !h.isAdjacent) && c(pe, {
        defaults: {
          VBtn: {
            color: (h.isSelected || h.isToday) && !h.isDisabled ? e.color : void 0,
            disabled: h.isDisabled,
            icon: !0,
            ripple: !1,
            text: h.localized,
            variant: h.isDisabled ? "text" : h.isToday && !h.isSelected ? "outlined" : "flat",
            onClick: () => g(h.date)
          }
        }
      }, {
        default: () => {
          var S;
          return [((S = a.day) == null ? void 0 : S.call(a, p)) ?? c(Te, p.props, null)];
        }
      })]);
    })])]);
  }
}), vd = E({
  color: String,
  height: [String, Number],
  modelValue: Number
}, "VDatePickerMonths"), Wi = L()({
  name: "VDatePickerMonths",
  props: vd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Pa(), l = ue(e, "modelValue"), i = b(() => {
      let r = a.startOfYear(a.date());
      return _t(12).map((o) => {
        const s = a.format(r, "monthShort");
        return r = a.getNextMonth(r), {
          text: s,
          value: o
        };
      });
    });
    return Ze(() => {
      l.value = l.value ?? a.getMonth(a.date());
    }), F(() => c("div", {
      class: "v-date-picker-months",
      style: {
        height: J(e.height)
      }
    }, [c("div", {
      class: "v-date-picker-months__content"
    }, [i.value.map((r, o) => {
      var d;
      const s = {
        active: l.value === o,
        color: l.value === o ? e.color : void 0,
        rounded: !0,
        text: r.text,
        variant: l.value === r.value ? "flat" : "text",
        onClick: () => u(o)
      };
      function u(v) {
        l.value = v;
      }
      return ((d = n.month) == null ? void 0 : d.call(n, {
        month: r,
        i: o,
        props: s
      })) ?? c(Te, D({
        key: "month"
      }, s, {
        onClick: () => u(o)
      }), null);
    })])])), {};
  }
}), md = E({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), Ui = L()({
  name: "VDatePickerYears",
  props: md(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Pa(), l = ue(e, "modelValue"), i = b(() => {
      const o = a.getYear(a.date());
      let s = o - 100, u = o + 52;
      e.min && (s = a.getYear(a.date(e.min))), e.max && (u = a.getYear(a.date(e.max)));
      let d = a.startOfYear(a.date());
      return d = a.setYear(d, s), _t(u - s + 1, s).map((v) => {
        const f = a.format(d, "year");
        return d = a.setYear(d, a.getYear(d) + 1), {
          text: f,
          value: v
        };
      });
    });
    Ze(() => {
      l.value = l.value ?? a.getYear(a.date());
    });
    const r = Y();
    return tt(async () => {
      var o;
      await Ce(), (o = r.value) == null || o.$el.scrollIntoView({
        block: "center"
      });
    }), F(() => c("div", {
      class: "v-date-picker-years",
      style: {
        height: J(e.height)
      }
    }, [c("div", {
      class: "v-date-picker-years__content"
    }, [i.value.map((o, s) => {
      var d;
      const u = {
        ref: l.value === o.value ? r : void 0,
        active: l.value === o.value,
        color: l.value === o.value ? e.color : void 0,
        rounded: !0,
        text: o.text,
        variant: l.value === o.value ? "flat" : "text",
        onClick: () => l.value = o.value
      };
      return ((d = n.year) == null ? void 0 : d.call(n, {
        year: o,
        i: s,
        props: u
      })) ?? c(Te, D({
        key: "month"
      }, u), null);
    })])])), {};
  }
}), t0 = St("v-picker-title"), hd = E({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...Tl()
}, "VPicker"), is = L()({
  name: "VPicker",
  props: hd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ae(_(e, "color"));
    return F(() => {
      const i = Sn.filterProps(e), r = !!(e.title || n.title);
      return c(Sn, D(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!n.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var o;
          return [!e.hideHeader && c("div", {
            key: "header",
            class: [a.value],
            style: [l.value]
          }, [r && c(t0, {
            key: "picker-title"
          }, {
            default: () => {
              var s;
              return [((s = n.title) == null ? void 0 : s.call(n)) ?? e.title];
            }
          }), n.header && c("div", {
            class: "v-picker__header"
          }, [n.header()])]), c("div", {
            class: "v-picker__body"
          }, [(o = n.default) == null ? void 0 : o.call(n)]), n.actions && c(pe, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [c("div", {
              class: "v-picker__actions"
            }, [n.actions()])]
          })];
        }
      });
    }), {};
  }
}), n0 = E({
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
  ...dd(),
  ...fd(),
  ...Ge(vd(), ["modelValue"]),
  ...Ge(md(), ["modelValue"]),
  ...hd({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), a0 = L()({
  name: "VDatePicker",
  props: n0(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = Pa(), {
      t: i
    } = We(), r = ue(e, "modelValue", void 0, (k) => ze(k), (k) => e.multiple ? k : k[0]), o = ue(e, "viewMode"), s = b(() => {
      var V;
      const k = l.date((V = r.value) == null ? void 0 : V[0]);
      return k && l.isValid(k) ? k : l.date();
    }), u = Y(Number(e.month ?? l.getMonth(l.startOfMonth(s.value)))), d = Y(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(s.value, u.value))))), v = G(!1), f = b(() => e.multiple && r.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", r.value.length) : r.value[0] && l.isValid(r.value[0]) ? l.format(r.value[0], "normalDateWithWeekday") : i(e.header)), m = b(() => l.format(l.setYear(l.setMonth(l.startOfMonth(l.date()), u.value), d.value), "monthAndYear")), g = b(() => `date-picker-header${v.value ? "-reverse" : ""}-transition`), h = b(() => {
      const k = l.date(e.min);
      return e.min && l.isValid(k) ? k : null;
    }), y = b(() => {
      const k = l.date(e.max);
      return e.max && l.isValid(k) ? k : null;
    }), p = b(() => {
      if (e.disabled)
        return !0;
      const k = [];
      if (o.value !== "month")
        k.push("prev", "next");
      else {
        let V = l.date();
        if (V = l.setYear(V, d.value), V = l.setMonth(V, u.value), h.value) {
          const x = l.addDays(l.startOfMonth(V), -1);
          l.isAfter(h.value, x) && k.push("prev");
        }
        if (y.value) {
          const x = l.addDays(l.endOfMonth(V), 1);
          l.isAfter(x, y.value) && k.push("next");
        }
      }
      return k;
    });
    function S() {
      u.value < 11 ? u.value++ : (d.value++, u.value = 0);
    }
    function I() {
      u.value > 0 ? u.value-- : (d.value--, u.value = 11);
    }
    function w() {
      o.value = "month";
    }
    function P() {
      o.value = o.value === "months" ? "month" : "months";
    }
    function C() {
      o.value = o.value === "year" ? "month" : "year";
    }
    return q(u, () => {
      o.value === "months" && P(), n("update:month", u.value);
    }), q(d, () => {
      o.value === "year" && C(), n("update:year", d.value);
    }), q(r, (k, V) => {
      const x = l.date(ze(k)[0]), T = l.date(ze(V)[0]);
      v.value = l.isBefore(x, T);
    }), F(() => {
      const k = is.filterProps(e), V = ji.filterProps(e), x = zi.filterProps(e), T = Yi.filterProps(e), M = Ge(Wi.filterProps(e), ["modelValue"]), A = Ge(Ui.filterProps(e), ["modelValue"]), B = {
        header: f.value,
        transition: g.value
      };
      return c(is, D(k, {
        class: ["v-date-picker", `v-date-picker--${o.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var O;
          return ((O = a.title) == null ? void 0 : O.call(a)) ?? c("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? c(pe, {
          defaults: {
            VDatePickerHeader: {
              ...B
            }
          }
        }, {
          default: () => {
            var O;
            return [(O = a.header) == null ? void 0 : O.call(a, B)];
          }
        }) : c(zi, D({
          key: "header"
        }, x, B, {
          onClick: o.value !== "month" ? w : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => c(re, null, [c(ji, D(V, {
          disabled: p.value,
          text: m.value,
          "onClick:next": S,
          "onClick:prev": I,
          "onClick:month": P,
          "onClick:year": C
        }), null), c(tl, {
          hideOnLeave: !0
        }, {
          default: () => [o.value === "months" ? c(Wi, D({
            key: "date-picker-months"
          }, M, {
            modelValue: u.value,
            "onUpdate:modelValue": (O) => u.value = O,
            min: h.value,
            max: y.value
          }), null) : o.value === "year" ? c(Ui, D({
            key: "date-picker-years"
          }, A, {
            modelValue: d.value,
            "onUpdate:modelValue": (O) => d.value = O,
            min: h.value,
            max: y.value
          }), null) : c(Yi, D({
            key: "date-picker-month"
          }, T, {
            modelValue: r.value,
            "onUpdate:modelValue": (O) => r.value = O,
            month: u.value,
            "onUpdate:month": (O) => u.value = O,
            year: d.value,
            "onUpdate:year": (O) => d.value = O,
            min: h.value,
            max: y.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), Va = Symbol.for("vuetify:v-expansion-panel"), l0 = ["default", "accordion", "inset", "popout"], i0 = E({
  color: String,
  static: Boolean,
  variant: {
    type: String,
    default: "default",
    validator: (e) => l0.includes(e)
  },
  readonly: Boolean,
  ...Q(),
  ...Tn(),
  ...me(),
  ...Se()
}, "VExpansionPanels"), r0 = L()({
  name: "VExpansionPanels",
  props: i0(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    nn(e, Va);
    const {
      themeClasses: a
    } = xe(e), l = b(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return _e({
      VExpansionPanel: {
        color: _(e, "color"),
        readonly: _(e, "readonly"),
        static: _(e, "static")
      }
    }), F(() => c(e.tag, {
      class: ["v-expansion-panels", a.value, l.value, e.class],
      style: e.style
    }, n)), {};
  }
}), o0 = E({
  ...Q(),
  ...Cl()
}, "VExpansionPanelText"), gd = L()({
  name: "VExpansionPanelText",
  props: o0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(Va);
    if (!a)
      throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: i
    } = wr(e, a.isSelected);
    return F(() => c(ml, {
      onAfterLeave: i
    }, {
      default: () => {
        var r;
        return [ge(c("div", {
          class: ["v-expansion-panel-text", e.class],
          style: e.style
        }, [n.default && l.value && c("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(r = n.default) == null ? void 0 : r.call(n)])]), [[xt, a.isSelected.value]])];
      }
    })), {};
  }
}), yd = E({
  color: String,
  expandIcon: {
    type: fe,
    default: "$expand"
  },
  collapseIcon: {
    type: fe,
    default: "$collapse"
  },
  hideActions: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean,
  ...Q()
}, "VExpansionPanelTitle"), bd = L()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: qt
  },
  props: yd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(Va);
    if (!a)
      throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ae(e, "color"), r = b(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    }));
    return F(() => {
      var o;
      return ge(c("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": a.isSelected.value,
          "v-expansion-panel-title--static": e.static
        }, l.value, e.class],
        style: [i.value, e.style],
        type: "button",
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        "aria-expanded": a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle
      }, [c("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (o = n.default) == null ? void 0 : o.call(n, r.value), !e.hideActions && c("span", {
        class: "v-expansion-panel-title__icon"
      }, [n.actions ? n.actions(r.value) : c(Ve, {
        icon: a.isSelected.value ? e.collapseIcon : e.expandIcon
      }, null)])]), [[it("ripple"), e.ripple]]);
    }), {};
  }
}), s0 = E({
  title: String,
  text: String,
  bgColor: String,
  ...Q(),
  ...Ke(),
  ...Dn(),
  ...Cl(),
  ...Oe(),
  ...me(),
  ...yd()
}, "VExpansionPanel"), u0 = L()({
  name: "VExpansionPanel",
  props: s0(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = An(e, Va), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ae(e, "bgColor"), {
      elevationClasses: r
    } = Qe(e), {
      roundedClasses: o
    } = Re(e), s = b(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = b(() => a.group.items.value.reduce((f, m, g) => (a.group.selected.value.includes(m.id) && f.push(g), f), [])), d = b(() => {
      const f = a.group.items.value.findIndex((m) => m.id === a.id);
      return !a.isSelected.value && u.value.some((m) => m - f === 1);
    }), v = b(() => {
      const f = a.group.items.value.findIndex((m) => m.id === a.id);
      return !a.isSelected.value && u.value.some((m) => m - f === -1);
    });
    return Ee(Va, a), _e({
      VExpansionPanelText: {
        eager: _(e, "eager")
      },
      VExpansionPanelTitle: {
        readonly: _(e, "readonly")
      }
    }), F(() => {
      const f = !!(n.text || e.text), m = !!(n.title || e.title);
      return c(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": d.value,
          "v-expansion-panel--after-active": v.value,
          "v-expansion-panel--disabled": s.value
        }, o.value, l.value, e.class],
        style: [i.value, e.style]
      }, {
        default: () => {
          var g;
          return [c("div", {
            class: ["v-expansion-panel__shadow", ...r.value]
          }, null), m && c(bd, {
            key: "title",
            collapseIcon: e.collapseIcon,
            color: e.color,
            expandIcon: e.expandIcon,
            hideActions: e.hideActions,
            ripple: e.ripple
          }, {
            default: () => [n.title ? n.title() : e.title]
          }), f && c(gd, {
            key: "text"
          }, {
            default: () => [n.text ? n.text() : e.text]
          }), (g = n.default) == null ? void 0 : g.call(n)];
        }
      });
    }), {};
  }
}), c0 = E({
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
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e))
  },
  ...Zt({
    prependIcon: "$file"
  }),
  modelValue: {
    type: Array,
    default: () => [],
    validator: (e) => ze(e).every((t) => t != null && typeof t == "object")
  },
  ...Oa({
    clearable: !0
  })
}, "VFileInput"), d0 = L()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: c0(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      t: i
    } = We(), r = ue(e, "modelValue"), {
      isFocused: o,
      focus: s,
      blur: u
    } = Xt(e), d = b(() => typeof e.showSize != "boolean" ? e.showSize : void 0), v = b(() => (r.value ?? []).reduce((x, T) => {
      let {
        size: M = 0
      } = T;
      return x + M;
    }, 0)), f = b(() => yo(v.value, d.value)), m = b(() => (r.value ?? []).map((x) => {
      const {
        name: T = "",
        size: M = 0
      } = x;
      return e.showSize ? `${T} (${yo(M, d.value)})` : T;
    })), g = b(() => {
      var T;
      const x = ((T = r.value) == null ? void 0 : T.length) ?? 0;
      return e.showSize ? i(e.counterSizeString, x, f.value) : i(e.counterString, x);
    }), h = Y(), y = Y(), p = Y(), S = b(() => o.value || e.active), I = b(() => ["plain", "underlined"].includes(e.variant));
    function w() {
      var x;
      p.value !== document.activeElement && ((x = p.value) == null || x.focus()), o.value || s();
    }
    function P(x) {
      k(x);
    }
    function C(x) {
      a("mousedown:control", x);
    }
    function k(x) {
      var T;
      (T = p.value) == null || T.click(), a("click:control", x);
    }
    function V(x) {
      x.stopPropagation(), w(), Ce(() => {
        r.value = [], tr(e["onClick:clear"], x);
      });
    }
    return q(r, (x) => {
      (!Array.isArray(x) || !x.length) && p.value && (p.value.value = "");
    }), F(() => {
      const x = !!(l.counter || e.counter), T = !!(x || l.details), [M, A] = tn(n), {
        modelValue: B,
        ...O
      } = et.filterProps(e), H = Cr(e);
      return c(et, D({
        ref: h,
        modelValue: r.value,
        "onUpdate:modelValue": (U) => r.value = U,
        class: ["v-file-input", {
          "v-file-input--chips": !!e.chips,
          "v-input--plain-underlined": I.value
        }, e.class],
        style: e.style,
        "onClick:prepend": P
      }, M, O, {
        centerAffix: !I.value,
        focused: o.value
      }), {
        ...l,
        default: (U) => {
          let {
            id: ee,
            isDisabled: $,
            isDirty: R,
            isReadonly: j,
            isValid: N
          } = U;
          return c(Zn, D({
            ref: y,
            "prepend-icon": e.prependIcon,
            onMousedown: C,
            onClick: k,
            "onClick:clear": V,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, H, {
            id: ee.value,
            active: S.value || R.value,
            dirty: R.value,
            disabled: $.value,
            focused: o.value,
            error: N.value === !1
          }), {
            ...l,
            default: (X) => {
              var ne;
              let {
                props: {
                  class: K,
                  ...ie
                }
              } = X;
              return c(re, null, [c("input", D({
                ref: p,
                type: "file",
                readonly: j.value,
                disabled: $.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (z) => {
                  z.stopPropagation(), j.value && z.preventDefault(), w();
                },
                onChange: (z) => {
                  if (!z.target)
                    return;
                  const ae = z.target;
                  r.value = [...ae.files ?? []];
                },
                onFocus: w,
                onBlur: u
              }, ie, A), null), c("div", {
                class: K
              }, [!!((ne = r.value) != null && ne.length) && (l.selection ? l.selection({
                fileNames: m.value,
                totalBytes: v.value,
                totalBytesReadable: f.value
              }) : e.chips ? m.value.map((z) => c(Ba, {
                key: z,
                size: "small",
                color: e.color
              }, {
                default: () => [z]
              })) : m.value.join(", "))])]);
            }
          });
        },
        details: T ? (U) => {
          var ee, $;
          return c(re, null, [(ee = l.details) == null ? void 0 : ee.call(l, U), x && c(re, null, [c("span", null, null), c(xl, {
            active: !!(($ = r.value) != null && $.length),
            value: g.value
          }, l.counter)])]);
        } : void 0
      });
    }), Dt({}, h, y, p);
  }
}), f0 = E({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...wt(),
  ...Q(),
  ...Ke(),
  ...Yn(),
  ...Oe(),
  ...me({
    tag: "footer"
  }),
  ...Se()
}, "VFooter"), v0 = L()({
  name: "VFooter",
  props: f0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = xe(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ae(_(e, "color")), {
      borderClasses: r
    } = It(e), {
      elevationClasses: o
    } = Qe(e), {
      roundedClasses: s
    } = Re(e), u = G(32), {
      resizeRef: d
    } = Lt((m) => {
      m.length && (u.value = m[0].target.clientHeight);
    }), v = b(() => e.height === "auto" ? u.value : parseInt(e.height, 10)), {
      layoutItemStyles: f
    } = Wn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: b(() => "bottom"),
      layoutSize: v,
      elementSize: b(() => e.height === "auto" ? void 0 : v.value),
      active: b(() => e.app),
      absolute: _(e, "absolute")
    });
    return F(() => c(e.tag, {
      ref: d,
      class: ["v-footer", a.value, l.value, r.value, o.value, s.value, e.class],
      style: [i.value, e.app ? f.value : {
        height: J(e.height)
      }, e.style]
    }, n)), {};
  }
}), m0 = E({
  ...Q(),
  ...Ay()
}, "VForm"), h0 = L()({
  name: "VForm",
  props: m0(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = My(e), i = Y();
    function r(s) {
      s.preventDefault(), l.reset();
    }
    function o(s) {
      const u = s, d = l.validate();
      u.then = d.then.bind(d), u.catch = d.catch.bind(d), u.finally = d.finally.bind(d), a("submit", u), u.defaultPrevented || d.then((v) => {
        var m;
        let {
          valid: f
        } = v;
        f && ((m = i.value) == null || m.submit());
      }), u.preventDefault();
    }
    return F(() => {
      var s;
      return c("form", {
        ref: i,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: r,
        onSubmit: o
      }, [(s = n.default) == null ? void 0 : s.call(n, l)]);
    }), Dt(l, i);
  }
}), g0 = E({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: void 0
  },
  ...lc()
}, "VHover"), y0 = L()({
  name: "VHover",
  props: g0(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: i
    } = ic(e, (r) => !e.disabled && (a.value = r));
    return () => {
      var r;
      return (r = n.default) == null ? void 0 : r.call(n, {
        isHovering: a.value,
        props: {
          onMouseenter: l,
          onMouseleave: i
        }
      });
    };
  }
}), b0 = E({
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
  ...ft(),
  ...me()
}, "VInfiniteScroll"), rs = pt({
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
    intersect: (e, t) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = hl((i) => {
    }, e.rootMargin ? {
      rootMargin: e.rootMargin
    } : void 0);
    return q(l, async (i) => {
      n("intersect", e.side, i);
    }), F(() => c("div", {
      class: "v-infinite-scroll-intersect",
      ref: a
    }, [at(" ")])), {};
  }
}), p0 = L()({
  name: "VInfiniteScroll",
  props: b0(),
  emits: {
    load: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Y(), i = G("ok"), r = G("ok"), o = b(() => J(e.margin)), s = G(!1);
    function u(P) {
      if (!l.value)
        return;
      const C = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      l.value[C] = P;
    }
    function d() {
      if (!l.value)
        return 0;
      const P = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      return l.value[P];
    }
    function v() {
      if (!l.value)
        return 0;
      const P = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
      return l.value[P];
    }
    function f() {
      if (!l.value)
        return 0;
      const P = e.direction === "vertical" ? "clientHeight" : "clientWidth";
      return l.value[P];
    }
    tt(() => {
      l.value && (e.side === "start" ? u(v()) : e.side === "both" && u(v() / 2 - f() / 2));
    });
    function m(P, C) {
      P === "start" ? i.value = C : P === "end" && (r.value = C);
    }
    function g(P) {
      return P === "start" ? i.value : r.value;
    }
    let h = 0;
    function y(P, C) {
      s.value = C, s.value && p(P);
    }
    function p(P) {
      if (e.mode !== "manual" && !s.value)
        return;
      const C = g(P);
      if (!l.value || C === "loading")
        return;
      h = v(), m(P, "loading");
      function k(V) {
        m(P, V), Ce(() => {
          V === "empty" || V === "error" || (V === "ok" && P === "start" && u(v() - h + d()), e.mode !== "manual" && Ce(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  p(P);
                });
              });
            });
          }));
        });
      }
      a("load", {
        side: P,
        done: k
      });
    }
    const {
      t: S
    } = We();
    function I(P, C) {
      var x, T, M, A, B;
      if (e.side !== P && e.side !== "both")
        return;
      const k = () => p(P), V = {
        side: P,
        props: {
          onClick: k,
          color: e.color
        }
      };
      return C === "error" ? (x = n.error) == null ? void 0 : x.call(n, V) : C === "empty" ? ((T = n.empty) == null ? void 0 : T.call(n, V)) ?? c("div", null, [S(e.emptyText)]) : e.mode === "manual" ? C === "loading" ? ((M = n.loading) == null ? void 0 : M.call(n, V)) ?? c(Nn, {
        indeterminate: !0,
        color: e.color
      }, null) : ((A = n["load-more"]) == null ? void 0 : A.call(n, V)) ?? c(Te, {
        variant: "outlined",
        color: e.color,
        onClick: k
      }, {
        default: () => [S(e.loadMoreText)]
      }) : ((B = n.loading) == null ? void 0 : B.call(n, V)) ?? c(Nn, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: w
    } = vt(e);
    F(() => {
      const P = e.tag, C = e.side === "start" || e.side === "both", k = e.side === "end" || e.side === "both", V = e.mode === "intersect";
      return c(P, {
        ref: l,
        class: ["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": C,
          "v-infinite-scroll--end": k
        }],
        style: w.value
      }, {
        default: () => {
          var x;
          return [c("div", {
            class: "v-infinite-scroll__side"
          }, [I("start", i.value)]), l.value && C && V && c(rs, {
            key: "start",
            side: "start",
            onIntersect: y,
            rootRef: l.value,
            rootMargin: o.value
          }, null), (x = n.default) == null ? void 0 : x.call(n), l.value && k && V && c(rs, {
            key: "end",
            side: "end",
            onIntersect: y,
            rootRef: l.value,
            rootMargin: o.value
          }, null), c("div", {
            class: "v-infinite-scroll__side"
          }, [I("end", r.value)])];
        }
      });
    });
  }
}), pd = Symbol.for("vuetify:v-item-group"), S0 = E({
  ...Q(),
  ...Tn({
    selectedClass: "v-item--selected"
  }),
  ...me(),
  ...Se()
}, "VItemGroup"), k0 = L()({
  name: "VItemGroup",
  props: S0(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = xe(e), {
      isSelected: l,
      select: i,
      next: r,
      prev: o,
      selected: s
    } = nn(e, pd);
    return () => c(e.tag, {
      class: ["v-item-group", a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var u;
        return [(u = n.default) == null ? void 0 : u.call(n, {
          isSelected: l,
          select: i,
          next: r,
          prev: o,
          selected: s.value
        })];
      }
    });
  }
}), w0 = L()({
  name: "VItem",
  props: Dn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      select: l,
      toggle: i,
      selectedClass: r,
      value: o,
      disabled: s
    } = An(e, pd);
    return () => {
      var u;
      return (u = n.default) == null ? void 0 : u.call(n, {
        isSelected: a.value,
        selectedClass: r.value,
        select: l,
        toggle: i,
        value: o.value,
        disabled: s.value
      });
    };
  }
}), C0 = St("v-kbd"), V0 = E({
  ...Q(),
  ...du()
}, "VLayout"), x0 = L()({
  name: "VLayout",
  props: V0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: i,
      items: r,
      layoutRef: o
    } = fu(e);
    return F(() => {
      var s;
      return c("div", {
        ref: o,
        class: [a.value, e.class],
        style: [l.value, e.style]
      }, [(s = n.default) == null ? void 0 : s.call(n)]);
    }), {
      getLayoutItem: i,
      items: r
    };
  }
}), P0 = E({
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
  ...Yn()
}, "VLayoutItem"), I0 = L()({
  name: "VLayoutItem",
  props: P0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      layoutItemStyles: a
    } = Wn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: _(e, "position"),
      elementSize: _(e, "size"),
      layoutSize: _(e, "size"),
      active: _(e, "modelValue"),
      absolute: _(e, "absolute")
    });
    return () => {
      var l;
      return c("div", {
        class: ["v-layout-item", e.class],
        style: [a.value, e.style]
      }, [(l = n.default) == null ? void 0 : l.call(n)]);
    };
  }
}), T0 = E({
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
  ...ft(),
  ...me(),
  ...Kt({
    transition: "fade-transition"
  })
}, "VLazy"), D0 = L()({
  name: "VLazy",
  directives: {
    intersect: Ia
  },
  props: T0(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: a
    } = vt(e), l = ue(e, "modelValue");
    function i(r) {
      l.value || (l.value = r);
    }
    return F(() => ge(c(e.tag, {
      class: ["v-lazy", e.class],
      style: [a.value, e.style]
    }, {
      default: () => [l.value && c(Vt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => {
          var r;
          return [(r = n.default) == null ? void 0 : r.call(n)];
        }
      })]
    }), [[it("intersect"), {
      handler: i,
      options: e.options
    }, null]])), {};
  }
}), A0 = E({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...Q()
}, "VLocaleProvider"), M0 = L()({
  name: "VLocaleProvider",
  props: A0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: a
    } = Ah(e);
    return F(() => {
      var l;
      return c("div", {
        class: ["v-locale-provider", a.value, e.class],
        style: e.style
      }, [(l = n.default) == null ? void 0 : l.call(n)]);
    }), {};
  }
}), B0 = E({
  scrollable: Boolean,
  ...Q(),
  ...me({
    tag: "main"
  })
}, "VMain"), E0 = L()({
  name: "VMain",
  props: B0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      mainStyles: a
    } = Dg(), {
      ssrBootStyles: l
    } = xn();
    return F(() => c(e.tag, {
      class: ["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class],
      style: [a.value, l.value, e.style]
    }, {
      default: () => {
        var i, r;
        return [e.scrollable ? c("div", {
          class: "v-main__scroller"
        }, [(i = n.default) == null ? void 0 : i.call(n)]) : (r = n.default) == null ? void 0 : r.call(n)];
      }
    })), {};
  }
});
function O0(e) {
  let {
    rootEl: t,
    isSticky: n,
    layoutItemStyles: a
  } = e;
  const l = G(!1), i = G(0), r = b(() => {
    const u = typeof l.value == "boolean" ? "top" : l.value;
    return [n.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [u]: J(i.value)
    } : {
      top: a.value.top
    }];
  });
  tt(() => {
    q(n, (u) => {
      u ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), dt(() => {
    window.removeEventListener("scroll", s);
  });
  let o = 0;
  function s() {
    const u = o > window.scrollY ? "up" : "down", d = t.value.getBoundingClientRect(), v = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, i.value - v), m = d.height + Math.max(i.value, v) - window.scrollY - window.innerHeight, g = parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y")) || 0;
    d.height < window.innerHeight - v ? (l.value = "top", i.value = v) : u === "up" && l.value === "bottom" || u === "down" && l.value === "top" ? (i.value = window.scrollY + d.top - g, l.value = !0) : u === "down" && m <= 0 ? (i.value = 0, l.value = "bottom") : u === "up" && f <= 0 && (g ? l.value !== "top" && (i.value = -f + g + v, l.value = "top") : (i.value = d.top + f, l.value = "top")), o = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: r
  };
}
const $0 = 100, _0 = 20;
function os(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function ss(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t)
      continue;
    const a = os(t), l = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (l - a) * Math.abs(l), n === e.length - 1 && (t *= 0.5);
  }
  return os(t) * 1e3;
}
function L0() {
  const e = {};
  function t(l) {
    Array.from(l.changedTouches).forEach((i) => {
      (e[i.identifier] ?? (e[i.identifier] = new Wm(_0))).push([l.timeStamp, i]);
    });
  }
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function a(l) {
    var u;
    const i = (u = e[l]) == null ? void 0 : u.values().reverse();
    if (!i)
      throw new Error(`No samples for touch id ${l}`);
    const r = i[0], o = [], s = [];
    for (const d of i) {
      if (r[0] - d[0] > $0)
        break;
      o.push({
        t: d[0],
        d: d[1].clientX
      }), s.push({
        t: d[0],
        d: d[1].clientY
      });
    }
    return {
      x: ss(o),
      y: ss(s),
      get direction() {
        const {
          x: d,
          y: v
        } = this, [f, m] = [Math.abs(d), Math.abs(v)];
        return f > m && d >= 0 ? "right" : f > m && d <= 0 ? "left" : m > f && v >= 0 ? "down" : m > f && v <= 0 ? "up" : F0();
      }
    };
  }
  return {
    addMovement: t,
    endTouch: n,
    getVelocity: a
  };
}
function F0() {
  throw new Error();
}
function R0(e) {
  let {
    isActive: t,
    isTemporary: n,
    width: a,
    touchless: l,
    position: i
  } = e;
  tt(() => {
    window.addEventListener("touchstart", p, {
      passive: !0
    }), window.addEventListener("touchmove", S, {
      passive: !1
    }), window.addEventListener("touchend", I, {
      passive: !0
    });
  }), dt(() => {
    window.removeEventListener("touchstart", p), window.removeEventListener("touchmove", S), window.removeEventListener("touchend", I);
  });
  const r = b(() => ["left", "right"].includes(i.value)), {
    addMovement: o,
    endTouch: s,
    getVelocity: u
  } = L0();
  let d = !1;
  const v = G(!1), f = G(0), m = G(0);
  let g;
  function h(P, C) {
    return (i.value === "left" ? P : i.value === "right" ? document.documentElement.clientWidth - P : i.value === "top" ? P : i.value === "bottom" ? document.documentElement.clientHeight - P : On()) - (C ? a.value : 0);
  }
  function y(P) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const k = i.value === "left" ? (P - m.value) / a.value : i.value === "right" ? (document.documentElement.clientWidth - P - m.value) / a.value : i.value === "top" ? (P - m.value) / a.value : i.value === "bottom" ? (document.documentElement.clientHeight - P - m.value) / a.value : On();
    return C ? Math.max(0, Math.min(1, k)) : k;
  }
  function p(P) {
    if (l.value)
      return;
    const C = P.changedTouches[0].clientX, k = P.changedTouches[0].clientY, V = 25, x = i.value === "left" ? C < V : i.value === "right" ? C > document.documentElement.clientWidth - V : i.value === "top" ? k < V : i.value === "bottom" ? k > document.documentElement.clientHeight - V : On(), T = t.value && (i.value === "left" ? C < a.value : i.value === "right" ? C > document.documentElement.clientWidth - a.value : i.value === "top" ? k < a.value : i.value === "bottom" ? k > document.documentElement.clientHeight - a.value : On());
    (x || T || t.value && n.value) && (d = !0, g = [C, k], m.value = h(r.value ? C : k, t.value), f.value = y(r.value ? C : k), s(P), o(P));
  }
  function S(P) {
    const C = P.changedTouches[0].clientX, k = P.changedTouches[0].clientY;
    if (d) {
      if (!P.cancelable) {
        d = !1;
        return;
      }
      const x = Math.abs(C - g[0]), T = Math.abs(k - g[1]);
      (r.value ? x > T && x > 3 : T > x && T > 3) ? (v.value = !0, d = !1) : (r.value ? T : x) > 3 && (d = !1);
    }
    if (!v.value)
      return;
    P.preventDefault(), o(P);
    const V = y(r.value ? C : k, !1);
    f.value = Math.max(0, Math.min(1, V)), V > 1 ? m.value = h(r.value ? C : k, !0) : V < 0 && (m.value = h(r.value ? C : k, !1));
  }
  function I(P) {
    if (d = !1, !v.value)
      return;
    o(P), v.value = !1;
    const C = u(P.changedTouches[0].identifier), k = Math.abs(C.x), V = Math.abs(C.y);
    (r.value ? k > V && k > 400 : V > k && V > 3) ? t.value = C.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[i.value] || On()) : t.value = f.value > 0.5;
  }
  const w = b(() => v.value ? {
    transform: i.value === "left" ? `translateX(calc(-100% + ${f.value * a.value}px))` : i.value === "right" ? `translateX(calc(100% - ${f.value * a.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${f.value * a.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${f.value * a.value}px))` : On(),
    transition: "none"
  } : void 0);
  return {
    isDragging: v,
    dragProgress: f,
    dragStyles: w
  };
}
function On() {
  throw new Error();
}
const N0 = ["start", "end", "left", "right", "top", "bottom"], H0 = E({
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
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (e) => N0.includes(e)
  },
  sticky: Boolean,
  ...wt(),
  ...Q(),
  ...sr(),
  ...Ke(),
  ...Yn(),
  ...Oe(),
  ...me({
    tag: "nav"
  }),
  ...Se()
}, "VNavigationDrawer"), j0 = L()({
  name: "VNavigationDrawer",
  props: H0(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      isRtl: i
    } = Je(), {
      themeClasses: r
    } = xe(e), {
      borderClasses: o
    } = It(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: u
    } = Ae(_(e, "color")), {
      elevationClasses: d
    } = Qe(e), {
      displayClasses: v,
      mobile: f
    } = Vn(e), {
      roundedClasses: m
    } = Re(e), g = Cu(), h = ue(e, "modelValue", null, (j) => !!j), {
      ssrBootStyles: y
    } = xn(), {
      scopeId: p
    } = Xn(), S = Y(), I = G(!1), w = b(() => e.rail && e.expandOnHover && I.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), P = b(() => gi(e.location, i.value)), C = b(() => !e.permanent && (f.value || e.temporary)), k = b(() => e.sticky && !C.value && P.value !== "bottom");
    Bt(() => e.expandOnHover && e.rail != null, () => {
      q(I, (j) => a("update:rail", !j));
    }), Bt(() => !e.disableResizeWatcher, () => {
      q(C, (j) => !e.permanent && Ce(() => h.value = !j));
    }), Bt(() => !e.disableRouteWatcher && !!g, () => {
      q(g.currentRoute, () => C.value && (h.value = !1));
    }), q(() => e.permanent, (j) => {
      j && (h.value = !0);
    }), Xi(() => {
      e.modelValue != null || C.value || (h.value = e.permanent || !f.value);
    });
    const {
      isDragging: V,
      dragProgress: x,
      dragStyles: T
    } = R0({
      isActive: h,
      isTemporary: C,
      width: w,
      touchless: _(e, "touchless"),
      position: P
    }), M = b(() => {
      const j = C.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : w.value;
      return V.value ? j * x.value : j;
    }), {
      layoutItemStyles: A,
      layoutItemScrimStyles: B
    } = Wn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: P,
      layoutSize: M,
      elementSize: w,
      active: b(() => h.value || V.value),
      disableTransitions: b(() => V.value),
      absolute: b(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || k.value && typeof O.value != "string"
      ))
    }), {
      isStuck: O,
      stickyStyles: H
    } = O0({
      rootEl: S,
      isSticky: k,
      layoutItemStyles: A
    }), U = Ae(b(() => typeof e.scrim == "string" ? e.scrim : null)), ee = b(() => ({
      ...V.value ? {
        opacity: x.value * 0.2,
        transition: "none"
      } : void 0,
      ...B.value
    }));
    _e({
      VList: {
        bgColor: "transparent"
      }
    });
    function $() {
      I.value = !0;
    }
    function R() {
      I.value = !1;
    }
    return F(() => {
      const j = l.image || e.image;
      return c(re, null, [c(e.tag, D({
        ref: S,
        onMouseenter: $,
        onMouseleave: R,
        class: ["v-navigation-drawer", `v-navigation-drawer--${P.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": I.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": C.value,
          "v-navigation-drawer--active": h.value,
          "v-navigation-drawer--sticky": k.value
        }, r.value, s.value, o.value, v.value, d.value, m.value, e.class],
        style: [u.value, A.value, T.value, y.value, H.value, e.style]
      }, p, n), {
        default: () => {
          var N, X, K, ie;
          return [j && c("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [l.image ? (N = l.image) == null ? void 0 : N.call(l, {
            image: e.image
          }) : c("img", {
            src: e.image,
            alt: ""
          }, null)]), l.prepend && c("div", {
            class: "v-navigation-drawer__prepend"
          }, [(X = l.prepend) == null ? void 0 : X.call(l)]), c("div", {
            class: "v-navigation-drawer__content"
          }, [(K = l.default) == null ? void 0 : K.call(l)]), l.append && c("div", {
            class: "v-navigation-drawer__append"
          }, [(ie = l.append) == null ? void 0 : ie.call(l)])];
        }
      }), c(Ht, {
        name: "fade-transition"
      }, {
        default: () => [C.value && (V.value || h.value) && !!e.scrim && c("div", D({
          class: ["v-navigation-drawer__scrim", U.backgroundColorClasses.value],
          style: [ee.value, U.backgroundColorStyles.value],
          onClick: () => h.value = !1
        }, p), null)]
      })]);
    }), {
      isStuck: O
    };
  }
}), z0 = pt({
  name: "VNoSsr",
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = oc();
    return () => {
      var l;
      return a.value && ((l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), Y0 = E({
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
  ...ft(),
  ...Ma(),
  ...Os(Oa({
    variant: "outlined"
  }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])
}, "VOtpInput"), W0 = L()({
  name: "VOtpInput",
  props: Y0(),
  emits: {
    finish: (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      dimensionStyles: i
    } = vt(e), {
      isFocused: r,
      focus: o,
      blur: s
    } = Xt(e), u = ue(e, "modelValue", "", (k) => String(k).split(""), (k) => k.join("")), {
      t: d
    } = We(), v = b(() => Number(e.length)), f = b(() => Array(v.value).fill(0)), m = Y(-1), g = Y(), h = Y([]), y = b(() => h.value[m.value]);
    function p() {
      if (e.type === "number" && /[^0-9]/g.test(y.value.value)) {
        y.value.value = "";
        return;
      }
      const k = u.value.slice(), V = y.value.value;
      k[m.value] = V;
      let x = null;
      m.value > u.value.length ? x = u.value.length + 1 : m.value + 1 !== v.value && (x = "next"), u.value = k, x && _n(g.value, x);
    }
    function S(k) {
      const V = u.value.slice(), x = m.value;
      let T = null;
      ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(k.key) && (k.preventDefault(), k.key === "ArrowLeft" ? T = "prev" : k.key === "ArrowRight" ? T = "next" : ["Backspace", "Delete"].includes(k.key) && (V[m.value] = "", u.value = V, m.value > 0 && k.key === "Backspace" ? T = "prev" : requestAnimationFrame(() => {
        var M;
        (M = h.value[x]) == null || M.select();
      })), requestAnimationFrame(() => {
        T != null && _n(g.value, T);
      }));
    }
    function I(k, V) {
      var x, T;
      V.preventDefault(), V.stopPropagation(), u.value = (((x = V == null ? void 0 : V.clipboardData) == null ? void 0 : x.getData("Text")) ?? "").split(""), (T = h.value) == null || T[k].blur();
    }
    function w() {
      u.value = [];
    }
    function P(k, V) {
      o(), m.value = V;
    }
    function C() {
      s(), m.value = -1;
    }
    return _e({
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
    }), q(u, (k) => {
      k.length === v.value && a("finish", k.join(""));
    }, {
      deep: !0
    }), q(m, (k) => {
      k < 0 || Ce(() => {
        var V;
        (V = h.value[k]) == null || V.select();
      });
    }), F(() => {
      var x;
      const [k, V] = tn(n);
      return c("div", D({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, k), [c("div", {
        ref: g,
        class: "v-otp-input__content",
        style: [i.value]
      }, [f.value.map((T, M) => c(re, null, [e.divider && M !== 0 && c("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), c(Zn, {
        focused: r.value && e.focusAll || m.value === M,
        key: M
      }, {
        ...l,
        loader: void 0,
        default: () => c("input", {
          ref: (A) => h.value[M] = A,
          "aria-label": d(e.label, M + 1),
          autofocus: M === 0 && e.autofocus,
          autocomplete: "one-time-code",
          class: ["v-otp-input__field"],
          disabled: e.disabled,
          inputmode: e.type === "number" ? "numeric" : "text",
          min: e.type === "number" ? 0 : void 0,
          maxlength: "1",
          placeholder: e.placeholder,
          type: e.type === "number" ? "text" : e.type,
          value: u.value[M],
          onInput: p,
          onFocus: (A) => P(A, M),
          onBlur: C,
          onKeydown: S,
          onPaste: (A) => I(M, A)
        }, null)
      })])), c("input", D({
        class: "v-otp-input-input",
        type: "hidden"
      }, V, {
        value: u.value.join("")
      }), null), c(Ft, {
        contained: !0,
        "content-class": "v-otp-input__loader",
        "model-value": !!e.loading,
        persistent: !0
      }, {
        default: () => {
          var T;
          return [((T = l.loader) == null ? void 0 : T.call(l)) ?? c(Nn, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "24",
            width: "2"
          }, null)];
        }
      }), (x = l.default) == null ? void 0 : x.call(l)])]);
    }), {
      blur: () => {
        var k;
        (k = h.value) == null || k.some((V) => V.blur());
      },
      focus: () => {
        var k;
        (k = h.value) == null || k[0].focus();
      },
      reset: w,
      isFocused: r
    };
  }
});
function U0(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const K0 = E({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...Q()
}, "VParallax"), G0 = L()({
  name: "VParallax",
  props: K0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = hl(), {
      resizeRef: i,
      contentRect: r
    } = Lt(), {
      height: o
    } = Vn(), s = Y();
    Ze(() => {
      var m;
      a.value = i.value = (m = s.value) == null ? void 0 : m.$el;
    });
    let u;
    q(l, (m) => {
      m ? (u = rr(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, {
        passive: !0
      }), f()) : u.removeEventListener("scroll", f);
    }), dt(() => {
      u == null || u.removeEventListener("scroll", f);
    }), q(o, f), q(() => {
      var m;
      return (m = r.value) == null ? void 0 : m.height;
    }, f);
    const d = b(() => 1 - Ue(+e.scale));
    let v = -1;
    function f() {
      l.value && (cancelAnimationFrame(v), v = requestAnimationFrame(() => {
        var P;
        const m = ((P = s.value) == null ? void 0 : P.$el).querySelector(".v-img__img");
        if (!m)
          return;
        const g = u instanceof Document ? document.documentElement.clientHeight : u.clientHeight, h = u instanceof Document ? window.scrollY : u.scrollTop, y = a.value.getBoundingClientRect().top + h, p = r.value.height, S = y + (p - g) / 2, I = U0((h - S) * d.value), w = Math.max(1, (d.value * (g - p) + p) / p);
        m.style.setProperty("transform", `translateY(${I}px) scale(${w})`);
      }));
    }
    return F(() => c(yn, {
      class: ["v-parallax", {
        "v-parallax--active": l.value
      }, e.class],
      style: e.style,
      ref: s,
      cover: !0,
      onLoadstart: f,
      onLoad: f
    }, n)), {};
  }
}), q0 = E({
  ...pl({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), X0 = L()({
  name: "VRadio",
  props: q0(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => c(bn, D(e, {
      class: ["v-radio", e.class],
      style: e.style,
      type: "radio"
    }), n)), {};
  }
}), Z0 = E({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Zt(),
  ...Ge(br(), ["multiple"]),
  trueIcon: {
    type: fe,
    default: "$radioOn"
  },
  falseIcon: {
    type: fe,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup"), J0 = L()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: Z0(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = rt(), i = b(() => e.id || `radio-group-${l}`), r = ue(e, "modelValue");
    return F(() => {
      const [o, s] = tn(n), u = et.filterProps(e), d = bn.filterProps(e), v = a.label ? a.label({
        label: e.label,
        props: {
          for: i.value
        }
      }) : e.label;
      return c(et, D({
        class: ["v-radio-group", e.class],
        style: e.style
      }, o, u, {
        modelValue: r.value,
        "onUpdate:modelValue": (f) => r.value = f,
        id: i.value
      }), {
        ...a,
        default: (f) => {
          let {
            id: m,
            messagesId: g,
            isDisabled: h,
            isReadonly: y
          } = f;
          return c(re, null, [v && c(qn, {
            id: m.value
          }, {
            default: () => [v]
          }), c(Ou, D(d, {
            id: m.value,
            "aria-describedby": g.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: h.value,
            readonly: y.value,
            "aria-labelledby": v ? m.value : void 0,
            multiple: !1
          }, s, {
            modelValue: r.value,
            "onUpdate:modelValue": (p) => r.value = p
          }), a)]);
        }
      });
    }), {};
  }
}), Q0 = E({
  ...Ma(),
  ...Zt(),
  ...Tc(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider"), eS = L()({
  name: "VRangeSlider",
  props: Q0(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    end: (e) => !0,
    start: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Y(), i = Y(), r = Y(), {
      rtlClasses: o
    } = Je();
    function s(x) {
      if (!l.value || !i.value)
        return;
      const T = Li(x, l.value.$el, e.direction), M = Li(x, i.value.$el, e.direction), A = Math.abs(T), B = Math.abs(M);
      return A < B || A === B && T < 0 ? l.value.$el : i.value.$el;
    }
    const u = Dc(e), d = ue(e, "modelValue", void 0, (x) => x != null && x.length ? x.map((T) => u.roundValue(T)) : [0, 0]), {
      activeThumbRef: v,
      hasLabels: f,
      max: m,
      min: g,
      mousePressed: h,
      onSliderMousedown: y,
      onSliderTouchstart: p,
      position: S,
      trackContainerRef: I
    } = Ac({
      props: e,
      steps: u,
      onSliderStart: () => {
        a("start", d.value);
      },
      onSliderEnd: (x) => {
        var A;
        let {
          value: T
        } = x;
        const M = v.value === ((A = l.value) == null ? void 0 : A.$el) ? [T, d.value[1]] : [d.value[0], T];
        !e.strict && M[0] < M[1] && (d.value = M), a("end", d.value);
      },
      onSliderMove: (x) => {
        var B, O, H, U;
        let {
          value: T
        } = x;
        const [M, A] = d.value;
        !e.strict && M === A && M !== g.value && (v.value = T > M ? (B = i.value) == null ? void 0 : B.$el : (O = l.value) == null ? void 0 : O.$el, (H = v.value) == null || H.focus()), v.value === ((U = l.value) == null ? void 0 : U.$el) ? d.value = [Math.min(T, A), A] : d.value = [M, Math.max(M, T)];
      },
      getActiveThumb: s
    }), {
      isFocused: w,
      focus: P,
      blur: C
    } = Xt(e), k = b(() => S(d.value[0])), V = b(() => S(d.value[1]));
    return F(() => {
      const x = et.filterProps(e), T = !!(e.label || n.label || n.prepend);
      return c(et, D({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!n["tick-label"] || f.value,
          "v-slider--focused": w.value,
          "v-slider--pressed": h.value,
          "v-slider--disabled": e.disabled
        }, o.value, e.class],
        style: e.style,
        ref: r
      }, x, {
        focused: w.value
      }), {
        ...n,
        prepend: T ? (M) => {
          var A, B;
          return c(re, null, [((A = n.label) == null ? void 0 : A.call(n, M)) ?? (e.label ? c(qn, {
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (B = n.prepend) == null ? void 0 : B.call(n, M)]);
        } : void 0,
        default: (M) => {
          var O, H;
          let {
            id: A,
            messagesId: B
          } = M;
          return c("div", {
            class: "v-slider__container",
            onMousedown: y,
            onTouchstartPassive: p
          }, [c("input", {
            id: `${A.value}_start`,
            name: e.name || A.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[0]
          }, null), c("input", {
            id: `${A.value}_stop`,
            name: e.name || A.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: d.value[1]
          }, null), c(Mc, {
            ref: I,
            start: k.value,
            stop: V.value
          }, {
            "tick-label": n["tick-label"]
          }), c(Fi, {
            ref: l,
            "aria-describedby": B.value,
            focused: w && v.value === ((O = l.value) == null ? void 0 : O.$el),
            modelValue: d.value[0],
            "onUpdate:modelValue": (U) => d.value = [U, d.value[1]],
            onFocus: (U) => {
              var ee, $, R, j;
              P(), v.value = (ee = l.value) == null ? void 0 : ee.$el, d.value[0] === d.value[1] && d.value[1] === g.value && U.relatedTarget !== (($ = i.value) == null ? void 0 : $.$el) && ((R = l.value) == null || R.$el.blur(), (j = i.value) == null || j.$el.focus());
            },
            onBlur: () => {
              C(), v.value = void 0;
            },
            min: g.value,
            max: d.value[1],
            position: k.value,
            ripple: e.ripple
          }, {
            "thumb-label": n["thumb-label"]
          }), c(Fi, {
            ref: i,
            "aria-describedby": B.value,
            focused: w && v.value === ((H = i.value) == null ? void 0 : H.$el),
            modelValue: d.value[1],
            "onUpdate:modelValue": (U) => d.value = [d.value[0], U],
            onFocus: (U) => {
              var ee, $, R, j;
              P(), v.value = (ee = i.value) == null ? void 0 : ee.$el, d.value[0] === d.value[1] && d.value[0] === m.value && U.relatedTarget !== (($ = l.value) == null ? void 0 : $.$el) && ((R = i.value) == null || R.$el.blur(), (j = l.value) == null || j.$el.focus());
            },
            onBlur: () => {
              C(), v.value = void 0;
            },
            min: d.value[0],
            max: m.value,
            position: V.value,
            ripple: e.ripple
          }, {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), tS = E({
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
    type: fe,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: fe,
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
  ...qe(),
  ...Gt(),
  ...me(),
  ...Se()
}, "VRating"), nS = L()({
  name: "VRating",
  props: tS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = We(), {
      themeClasses: l
    } = xe(e), i = ue(e, "modelValue"), r = b(() => Ue(parseFloat(i.value), 0, +e.length)), o = b(() => _t(Number(e.length), 1)), s = b(() => o.value.flatMap((h) => e.halfIncrements ? [h - 0.5, h] : [h])), u = G(-1), d = b(() => s.value.map((h) => {
      const y = e.hover && u.value > -1, p = r.value >= h, S = u.value >= h, w = (y ? S : p) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, C = p || S ? P : e.color;
      return {
        isFilled: p,
        isHovered: S,
        icon: w,
        color: C
      };
    })), v = b(() => [0, ...s.value].map((h) => {
      function y() {
        u.value = h;
      }
      function p() {
        u.value = -1;
      }
      function S() {
        e.disabled || e.readonly || (i.value = r.value === h && e.clearable ? 0 : h);
      }
      return {
        onMouseenter: e.hover ? y : void 0,
        onMouseleave: e.hover ? p : void 0,
        onClick: S
      };
    })), f = b(() => e.name ?? `v-rating-${rt()}`);
    function m(h) {
      var V, x;
      let {
        value: y,
        index: p,
        showStar: S = !0
      } = h;
      const {
        onMouseenter: I,
        onMouseleave: w,
        onClick: P
      } = v.value[p + 1], C = `${f.value}-${String(y).replace(".", "-")}`, k = {
        color: (V = d.value[p]) == null ? void 0 : V.color,
        density: e.density,
        disabled: e.disabled,
        icon: (x = d.value[p]) == null ? void 0 : x.icon,
        ripple: e.ripple,
        size: e.size,
        variant: "plain"
      };
      return c(re, null, [c("label", {
        for: C,
        class: {
          "v-rating__item--half": e.halfIncrements && y % 1 > 0,
          "v-rating__item--full": e.halfIncrements && y % 1 === 0
        },
        onMouseenter: I,
        onMouseleave: w,
        onClick: P
      }, [c("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, y, e.length)]), S ? n.item ? n.item({
        ...d.value[p],
        props: k,
        value: y,
        index: p,
        rating: r.value
      }) : c(Te, D({
        "aria-label": a(e.itemAriaLabel, y, e.length)
      }, k), null) : void 0]), c("input", {
        class: "v-rating__hidden",
        name: f.value,
        id: C,
        type: "radio",
        value: y,
        checked: r.value === y,
        tabindex: -1,
        readonly: e.readonly,
        disabled: e.disabled
      }, null)]);
    }
    function g(h) {
      return n["item-label"] ? n["item-label"](h) : h.label ? c("span", null, [h.label]) : c("span", null, [at(" ")]);
    }
    return F(() => {
      var y;
      const h = !!((y = e.itemLabels) != null && y.length) || n["item-label"];
      return c(e.tag, {
        class: ["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class],
        style: e.style
      }, {
        default: () => [c(m, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), o.value.map((p, S) => {
          var I, w;
          return c("div", {
            class: "v-rating__wrapper"
          }, [h && e.itemLabelPosition === "top" ? g({
            value: p,
            index: S,
            label: (I = e.itemLabels) == null ? void 0 : I[S]
          }) : void 0, c("div", {
            class: "v-rating__item"
          }, [e.halfIncrements ? c(re, null, [c(m, {
            value: p - 0.5,
            index: S * 2
          }, null), c(m, {
            value: p,
            index: S * 2 + 1
          }, null)]) : c(m, {
            value: p,
            index: S
          }, null)]), h && e.itemLabelPosition === "bottom" ? g({
            value: p,
            index: S,
            label: (w = e.itemLabels) == null ? void 0 : w[S]
          }) : void 0]);
        })]
      });
    }), {};
  }
}), aS = {
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
function lS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return c("div", {
    class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]
  }, [t]);
}
function us(e) {
  const [t, n] = e.split("@");
  return Array.from({
    length: n
  }).map(() => Fl(t));
}
function Fl(e) {
  let t = [];
  if (!e)
    return t;
  const n = aS[e];
  if (e !== n) {
    if (e.includes(","))
      return cs(e);
    if (e.includes("@"))
      return us(e);
    n.includes(",") ? t = cs(n) : n.includes("@") ? t = us(n) : n && t.push(Fl(n));
  }
  return [lS(e, t)];
}
function cs(e) {
  return e.replace(/\s/g, "").split(",").map(Fl);
}
const iS = E({
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
  ...ft(),
  ...Ke(),
  ...Se()
}, "VSkeletonLoader"), rS = L()({
  name: "VSkeletonLoader",
  props: iS(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Ae(_(e, "color")), {
      dimensionStyles: i
    } = vt(e), {
      elevationClasses: r
    } = Qe(e), {
      themeClasses: o
    } = xe(e), {
      t: s
    } = We(), u = b(() => Fl(ze(e.type).join(",")));
    return F(() => {
      var v;
      const d = !n.default || e.loading;
      return c("div", {
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, o.value, a.value, r.value],
        style: [l.value, d ? i.value : {}],
        "aria-busy": e.boilerplate ? void 0 : d,
        "aria-live": e.boilerplate ? void 0 : "polite",
        "aria-label": e.boilerplate ? void 0 : s(e.loadingText),
        role: e.boilerplate ? void 0 : "alert"
      }, [d ? u.value : (v = n.default) == null ? void 0 : v.call(n)]);
    }), {};
  }
}), oS = L()({
  name: "VSlideGroupItem",
  props: Dn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = An(e, Hu);
    return () => {
      var l;
      return (l = n.default) == null ? void 0 : l.call(n, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value
      });
    };
  }
});
function sS(e) {
  const t = G(e);
  let n = -1;
  function a() {
    clearInterval(n);
  }
  function l() {
    a(), Ce(() => t.value = e);
  }
  function i(r) {
    const o = r ? getComputedStyle(r) : {
      transitionDuration: 0.2
    }, s = parseFloat(o.transitionDuration) * 1e3 || 200;
    if (a(), t.value <= 0)
      return;
    const u = performance.now();
    n = window.setInterval(() => {
      const d = performance.now() - u + s;
      t.value = Math.max(e - d, 0), t.value <= 0 && a();
    }, s);
  }
  return ct(a), {
    clear: a,
    time: t,
    start: i,
    reset: l
  };
}
const uS = E({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...an({
    location: "bottom"
  }),
  ...Kn(),
  ...Oe(),
  ...Tt(),
  ...Se(),
  ...Ge(Ea({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), cS = L()({
  name: "VSnackbar",
  props: uS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "modelValue"), {
      locationStyles: l
    } = ln(e), {
      positionClasses: i
    } = Gn(e), {
      scopeId: r
    } = Xn(), {
      themeClasses: o
    } = xe(e), {
      colorClasses: s,
      colorStyles: u,
      variantClasses: d
    } = In(e), {
      roundedClasses: v
    } = Re(e), f = sS(Number(e.timeout)), m = Y(), g = Y(), h = G(!1);
    q(a, p), q(() => e.timeout, p), tt(() => {
      a.value && p();
    });
    let y = -1;
    function p() {
      f.reset(), window.clearTimeout(y);
      const P = Number(e.timeout);
      if (!a.value || P === -1)
        return;
      const C = va(g.value);
      f.start(C), y = window.setTimeout(() => {
        a.value = !1;
      }, P);
    }
    function S() {
      f.reset(), window.clearTimeout(y);
    }
    function I() {
      h.value = !0, S();
    }
    function w() {
      h.value = !1, p();
    }
    return F(() => {
      const P = Ft.filterProps(e), C = !!(n.default || n.text || e.text);
      return c(Ft, D({
        ref: m,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, i.value, e.class],
        style: e.style
      }, P, {
        modelValue: a.value,
        "onUpdate:modelValue": (k) => a.value = k,
        contentProps: D({
          class: ["v-snackbar__wrapper", o.value, s.value, v.value, d.value],
          style: [l.value, u.value],
          onPointerenter: I,
          onPointerleave: w
        }, P.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0
      }, r), {
        default: () => {
          var k, V;
          return [Pn(!1, "v-snackbar"), e.timer && c("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [c(gl, {
            ref: g,
            active: !h.value,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            "model-value": f.time.value
          }, null)]), C && c("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((k = n.text) == null ? void 0 : k.call(n)) ?? e.text, (V = n.default) == null ? void 0 : V.call(n)]), n.actions && c(pe, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [c("div", {
              class: "v-snackbar__actions"
            }, [n.actions()])]
          })];
        },
        activator: n.activator
      });
    }), Dt({}, m);
  }
}), Sd = E({
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
}, "VStepperActions"), kd = L()({
  name: "VStepperActions",
  props: Sd(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      t: l
    } = We();
    function i() {
      n("click:prev");
    }
    function r() {
      n("click:next");
    }
    return F(() => {
      const o = {
        onClick: i
      }, s = {
        onClick: r
      };
      return c("div", {
        class: "v-stepper-actions"
      }, [c(pe, {
        defaults: {
          VBtn: {
            disabled: ["prev", !0].includes(e.disabled),
            text: l(e.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => {
          var u;
          return [((u = a.prev) == null ? void 0 : u.call(a, {
            props: o
          })) ?? c(Te, o, null)];
        }
      }), c(pe, {
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
          var u;
          return [((u = a.next) == null ? void 0 : u.call(a, {
            props: s
          })) ?? c(Te, s, null)];
        }
      })]);
    }), {};
  }
}), wd = St("v-stepper-header"), dS = E({
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
  },
  ...Dn()
}, "VStepperItem"), Cd = L()({
  name: "VStepperItem",
  directives: {
    Ripple: qt
  },
  props: dS(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = An(e, Pd, !0), l = b(() => (a == null ? void 0 : a.value.value) ?? e.value), i = b(() => e.rules.every((v) => v() === !0)), r = b(() => !e.disabled && e.editable), o = b(() => e.error || !i.value), s = b(() => e.complete || e.rules.length > 0 && i.value), u = b(() => o.value ? e.errorIcon : s.value ? e.completeIcon : e.editable ? e.editIcon : e.icon), d = b(() => ({
      canEdit: r.value,
      hasError: o.value,
      hasCompleted: s.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return F(() => {
      var h, y, p;
      const v = (!a || a.isSelected.value || s.value || r.value) && !o.value && !e.disabled, f = !!(e.title != null || n.title), m = !!(e.subtitle != null || n.subtitle);
      function g() {
        a == null || a.toggle();
      }
      return ge(c("button", {
        class: ["v-stepper-item", {
          "v-stepper-item--complete": s.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": o.value
        }, a == null ? void 0 : a.selectedClass.value],
        disabled: !e.editable,
        onClick: g
      }, [c(Pt, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: v ? e.color : void 0,
        size: 24
      }, {
        default: () => {
          var S;
          return [((S = n.icon) == null ? void 0 : S.call(n, d.value)) ?? (u.value ? c(Ve, {
            icon: u.value
          }, null) : l.value)];
        }
      }), c("div", {
        class: "v-stepper-item__content"
      }, [f && c("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [((h = n.title) == null ? void 0 : h.call(n, d.value)) ?? e.title]), m && c("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [((y = n.subtitle) == null ? void 0 : y.call(n, d.value)) ?? e.subtitle]), (p = n.default) == null ? void 0 : p.call(n, d.value)])]), [[it("ripple"), e.ripple && e.editable, null]]);
    }), {};
  }
}), fS = Symbol.for("vuetify:v-stepper"), vS = E({
  ...Ge(Ir(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), Vd = L()({
  name: "VStepperWindow",
  props: vS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ke(fS, null), l = ue(e, "modelValue"), i = b({
      get() {
        var r;
        return l.value != null || !a ? l.value : (r = a.items.value.find((o) => a.selected.value.includes(o.id))) == null ? void 0 : r.value;
      },
      set(r) {
        l.value = r;
      }
    });
    return F(() => {
      const r = ka.filterProps(e);
      return c(ka, D({
        _as: "VStepperWindow"
      }, r, {
        modelValue: i.value,
        "onUpdate:modelValue": (o) => i.value = o,
        class: "v-stepper-window",
        mandatory: !1,
        touch: !1
      }), n);
    }), {};
  }
}), mS = E({
  ...Tr()
}, "VStepperWindowItem"), xd = L()({
  name: "VStepperWindowItem",
  props: mS(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return F(() => {
      const a = wa.filterProps(e);
      return c(wa, D({
        _as: "VStepperWindowItem"
      }, a, {
        class: "v-stepper-window-item"
      }), n);
    }), {};
  }
}), Pd = Symbol.for("vuetify:v-stepper"), hS = E({
  altLabels: Boolean,
  bgColor: String,
  editable: Boolean,
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
  mobile: Boolean,
  nonLinear: Boolean,
  flat: Boolean,
  ...Tn({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...Tl(),
  ...Os(Sd(), ["prevText", "nextText"])
}, "VStepper"), gS = L()({
  name: "VStepper",
  props: hS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: a,
      next: l,
      prev: i,
      selected: r
    } = nn(e, Pd), {
      color: o,
      editable: s,
      prevText: u,
      nextText: d
    } = il(e), v = b(() => e.items.map((g, h) => {
      const y = Xe(g, e.itemTitle, g), p = Xe(g, e.itemValue, h + 1);
      return {
        title: y,
        value: p,
        raw: g
      };
    })), f = b(() => a.value.findIndex((g) => r.value.includes(g.id))), m = b(() => e.disabled ? e.disabled : f.value === 0 ? "prev" : f.value === a.value.length - 1 ? "next" : !1);
    return _e({
      VStepperItem: {
        editable: s,
        prevText: u,
        nextText: d
      },
      VStepperActions: {
        color: o,
        disabled: m,
        prevText: u,
        nextText: d
      }
    }), F(() => {
      const g = Sn.filterProps(e), h = !!(n.header || e.items.length), y = e.items.length > 0, p = !e.hideActions && !!(y || n.actions);
      return c(Sn, D(g, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": e.mobile
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var S, I;
          return [h && c(wd, {
            key: "stepper-header"
          }, {
            default: () => [v.value.map((w, P) => c(re, null, [!!P && c(kl, null, null), c(Cd, w, {
              default: n[`header-item.${w.value}`] ?? n.header,
              icon: n.icon,
              title: n.title,
              subtitle: n.subtitle
            })]))]
          }), y && c(Vd, {
            key: "stepper-window"
          }, {
            default: () => [v.value.map((w) => c(xd, {
              value: w.value
            }, {
              default: () => {
                var P, C;
                return ((P = n[`item.${w.value}`]) == null ? void 0 : P.call(n, w)) ?? ((C = n.item) == null ? void 0 : C.call(n, w));
              }
            }))]
          }), (S = n.default) == null ? void 0 : S.call(n, {
            prev: i,
            next: l
          }), p && (((I = n.actions) == null ? void 0 : I.call(n, {
            next: l,
            prev: i
          })) ?? c(kd, {
            key: "stepper-actions",
            "onClick:prev": i,
            "onClick:next": l
          }, n))];
        }
      });
    }), {
      prev: i,
      next: l
    };
  }
}), yS = E({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...Zt(),
  ...pl()
}, "VSwitch"), bS = L()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: yS(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = ue(e, "indeterminate"), i = ue(e, "modelValue"), {
      loaderClasses: r
    } = Ta(e), {
      isFocused: o,
      focus: s,
      blur: u
    } = Xt(e), d = Y(), v = b(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), f = rt(), m = b(() => e.id || `switch-${f}`);
    function g() {
      l.value && (l.value = !1);
    }
    function h(y) {
      var p, S;
      y.stopPropagation(), y.preventDefault(), (S = (p = d.value) == null ? void 0 : p.input) == null || S.click();
    }
    return F(() => {
      const [y, p] = tn(n), S = et.filterProps(e), I = bn.filterProps(e);
      return c(et, D({
        class: ["v-switch", {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, r.value, e.class]
      }, y, S, {
        modelValue: i.value,
        "onUpdate:modelValue": (w) => i.value = w,
        id: m.value,
        focused: o.value,
        style: e.style
      }), {
        ...a,
        default: (w) => {
          let {
            id: P,
            messagesId: C,
            isDisabled: k,
            isReadonly: V,
            isValid: x
          } = w;
          const T = {
            model: i,
            isValid: x
          };
          return c(bn, D({
            ref: d
          }, I, {
            modelValue: i.value,
            "onUpdate:modelValue": [(M) => i.value = M, g],
            id: P.value,
            "aria-describedby": C.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: k.value,
            readonly: V.value,
            onFocus: s,
            onBlur: u
          }, p), {
            ...a,
            default: (M) => {
              let {
                backgroundColorClasses: A,
                backgroundColorStyles: B
              } = M;
              return c("div", {
                class: ["v-switch__track", ...A.value],
                style: B.value,
                onClick: h
              }, [a["track-true"] && c("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](T)]), a["track-false"] && c("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](T)])]);
            },
            input: (M) => {
              let {
                inputNode: A,
                icon: B,
                backgroundColorClasses: O,
                backgroundColorStyles: H
              } = M;
              return c(re, null, [A, c("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": B || e.loading
                }, e.inset ? void 0 : O.value],
                style: e.inset ? void 0 : H.value
              }, [a.thumb ? c(pe, {
                defaults: {
                  VIcon: {
                    icon: B,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb({
                  ...T,
                  icon: B
                })]
              }) : c(fr, null, {
                default: () => [e.loading ? c(bl, {
                  name: "v-switch",
                  active: !0,
                  color: x.value === !1 ? void 0 : v.value
                }, {
                  default: (U) => a.loader ? a.loader(U) : c(Nn, {
                    active: U.isActive,
                    color: U.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : B && c(Ve, {
                  key: String(B),
                  icon: B,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
}), pS = E({
  color: String,
  height: [Number, String],
  window: Boolean,
  ...Q(),
  ...Ke(),
  ...Yn(),
  ...Oe(),
  ...me(),
  ...Se()
}, "VSystemBar"), SS = L()({
  name: "VSystemBar",
  props: pS(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = xe(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Ae(_(e, "color")), {
      elevationClasses: r
    } = Qe(e), {
      roundedClasses: o
    } = Re(e), {
      ssrBootStyles: s
    } = xn(), u = b(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: d
    } = Wn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: G("top"),
      layoutSize: u,
      elementSize: u,
      active: b(() => !0),
      absolute: _(e, "absolute")
    });
    return F(() => c(e.tag, {
      class: ["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, l.value, r.value, o.value, e.class],
      style: [i.value, d.value, s.value, e.style]
    }, n)), {};
  }
}), Id = Symbol.for("vuetify:v-tabs"), kS = E({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Ge(yr({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), Td = L()({
  name: "VTab",
  props: kS(),
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = lt(e, "sliderColor"), r = Y(), o = Y(), s = b(() => e.direction === "horizontal"), u = b(() => {
      var v, f;
      return ((f = (v = r.value) == null ? void 0 : v.group) == null ? void 0 : f.isSelected.value) ?? !1;
    });
    function d(v) {
      var m, g;
      let {
        value: f
      } = v;
      if (f) {
        const h = (g = (m = r.value) == null ? void 0 : m.$el.parentElement) == null ? void 0 : g.querySelector(".v-tab--selected .v-tab__slider"), y = o.value;
        if (!h || !y)
          return;
        const p = getComputedStyle(h).color, S = h.getBoundingClientRect(), I = y.getBoundingClientRect(), w = s.value ? "x" : "y", P = s.value ? "X" : "Y", C = s.value ? "right" : "bottom", k = s.value ? "width" : "height", V = S[w], x = I[w], T = V > x ? S[C] - I[C] : S[w] - I[w], M = Math.sign(T) > 0 ? s.value ? "right" : "bottom" : Math.sign(T) < 0 ? s.value ? "left" : "top" : "center", B = (Math.abs(T) + (Math.sign(T) < 0 ? S[k] : I[k])) / Math.max(S[k], I[k]) || 0, O = S[k] / I[k] || 0, H = 1.5;
        dn(y, {
          backgroundColor: [p, "currentcolor"],
          transform: [`translate${P}(${T}px) scale${P}(${O})`, `translate${P}(${T / H}px) scale${P}(${(B - 1) / H + 1})`, "none"],
          transformOrigin: Array(3).fill(M)
        }, {
          duration: 225,
          easing: ha
        });
      }
    }
    return F(() => {
      const v = Te.filterProps(e);
      return c(Te, D({
        symbol: Id,
        ref: r,
        class: ["v-tab", e.class],
        style: e.style,
        tabindex: u.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(u.value),
        active: !1
      }, v, a, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": d
      }), {
        ...n,
        default: () => {
          var f;
          return c(re, null, [((f = n.default) == null ? void 0 : f.call(n)) ?? e.text, !e.hideSlider && c("div", {
            ref: o,
            class: ["v-tab__slider", l.value],
            style: i.value
          }, null)]);
        }
      });
    }), Dt({}, r);
  }
});
function wS(e) {
  return e ? e.map((t) => qa(t) ? t : {
    text: t,
    value: t
  }) : [];
}
const CS = E({
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
  ...pr({
    mandatory: "force"
  }),
  ...qe(),
  ...me()
}, "VTabs"), VS = L()({
  name: "VTabs",
  props: CS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "modelValue"), l = b(() => wS(e.items)), {
      densityClasses: i
    } = ot(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: o
    } = Ae(_(e, "bgColor"));
    return _e({
      VTab: {
        color: _(e, "color"),
        direction: _(e, "direction"),
        stacked: _(e, "stacked"),
        fixed: _(e, "fixedTabs"),
        sliderColor: _(e, "sliderColor"),
        hideSlider: _(e, "hideSlider")
      }
    }), F(() => {
      const s = pa.filterProps(e);
      return c(pa, D(s, {
        modelValue: a.value,
        "onUpdate:modelValue": (u) => a.value = u,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--stacked": e.stacked
        }, i.value, r.value, e.class],
        style: [{
          "--v-tabs-height": J(e.height)
        }, o.value, e.style],
        role: "tablist",
        symbol: Id
      }), {
        default: () => [n.default ? n.default() : l.value.map((u) => c(Td, D(u, {
          key: u.text
        }), null))]
      });
    }), {};
  }
}), xS = E({
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
  ...Zt(),
  ...Oa()
}, "VTextarea"), PS = L()({
  name: "VTextarea",
  directives: {
    Intersect: Ia
  },
  inheritAttrs: !1,
  props: xS(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const i = ue(e, "modelValue"), {
      isFocused: r,
      focus: o,
      blur: s
    } = Xt(e), u = b(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), d = b(() => {
      if (n.maxlength)
        return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function v(M, A) {
      var B, O;
      !e.autofocus || !M || (O = (B = A[0].target) == null ? void 0 : B.focus) == null || O.call(B);
    }
    const f = Y(), m = Y(), g = G(""), h = Y(), y = b(() => e.persistentPlaceholder || r.value || e.active);
    function p() {
      var M;
      h.value !== document.activeElement && ((M = h.value) == null || M.focus()), r.value || o();
    }
    function S(M) {
      p(), a("click:control", M);
    }
    function I(M) {
      a("mousedown:control", M);
    }
    function w(M) {
      M.stopPropagation(), p(), Ce(() => {
        i.value = "", tr(e["onClick:clear"], M);
      });
    }
    function P(M) {
      var B;
      const A = M.target;
      if (i.value = A.value, (B = e.modelModifiers) != null && B.trim) {
        const O = [A.selectionStart, A.selectionEnd];
        Ce(() => {
          A.selectionStart = O[0], A.selectionEnd = O[1];
        });
      }
    }
    const C = Y(), k = Y(+e.rows), V = b(() => ["plain", "underlined"].includes(e.variant));
    Ze(() => {
      e.autoGrow || (k.value = +e.rows);
    });
    function x() {
      e.autoGrow && Ce(() => {
        if (!C.value || !m.value)
          return;
        const M = getComputedStyle(C.value), A = getComputedStyle(m.value.$el), B = parseFloat(M.getPropertyValue("--v-field-padding-top")) + parseFloat(M.getPropertyValue("--v-input-padding-top")) + parseFloat(M.getPropertyValue("--v-field-padding-bottom")), O = C.value.scrollHeight, H = parseFloat(M.lineHeight), U = Math.max(parseFloat(e.rows) * H + B, parseFloat(A.getPropertyValue("--v-input-control-height"))), ee = parseFloat(e.maxRows) * H + B || 1 / 0, $ = Ue(O ?? 0, U, ee);
        k.value = Math.floor(($ - B) / H), g.value = J($);
      });
    }
    tt(x), q(i, x), q(() => e.rows, x), q(() => e.maxRows, x), q(() => e.density, x);
    let T;
    return q(C, (M) => {
      M ? (T = new ResizeObserver(x), T.observe(C.value)) : T == null || T.disconnect();
    }), dt(() => {
      T == null || T.disconnect();
    }), F(() => {
      const M = !!(l.counter || e.counter || e.counterValue), A = !!(M || l.details), [B, O] = tn(n), {
        modelValue: H,
        ...U
      } = et.filterProps(e), ee = Cr(e);
      return c(et, D({
        ref: f,
        modelValue: i.value,
        "onUpdate:modelValue": ($) => i.value = $,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": V.value
        }, e.class],
        style: e.style
      }, B, U, {
        centerAffix: k.value === 1 && !V.value,
        focused: r.value
      }), {
        ...l,
        default: ($) => {
          let {
            id: R,
            isDisabled: j,
            isDirty: N,
            isReadonly: X,
            isValid: K
          } = $;
          return c(Zn, D({
            ref: m,
            style: {
              "--v-textarea-control-height": g.value
            },
            onClick: S,
            onMousedown: I,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, ee, {
            id: R.value,
            active: y.value || N.value,
            centerAffix: k.value === 1 && !V.value,
            dirty: N.value || e.dirty,
            disabled: j.value,
            focused: r.value,
            error: K.value === !1
          }), {
            ...l,
            default: (ie) => {
              let {
                props: {
                  class: ne,
                  ...z
                }
              } = ie;
              return c(re, null, [e.prefix && c("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), ge(c("textarea", D({
                ref: h,
                class: ne,
                value: i.value,
                onInput: P,
                autofocus: e.autofocus,
                readonly: X.value,
                disabled: j.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: p,
                onBlur: s
              }, z, O), null), [[it("intersect"), {
                handler: v
              }, null, {
                once: !0
              }]]), e.autoGrow && ge(c("textarea", {
                class: [ne, "v-textarea__sizer"],
                id: `${z.id}-sizer`,
                "onUpdate:modelValue": (ae) => i.value = ae,
                ref: C,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[jd, i.value]]), e.suffix && c("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: A ? ($) => {
          var R;
          return c(re, null, [(R = l.details) == null ? void 0 : R.call(l, $), M && c(re, null, [c("span", null, null), c(xl, {
            active: e.persistentCounter || r.value,
            value: u.value,
            max: d.value
          }, l.counter)])]);
        } : void 0
      });
    }), Dt({}, f, m, h);
  }
}), IS = E({
  withBackground: Boolean,
  ...Q(),
  ...Se(),
  ...me()
}, "VThemeProvider"), TS = L()({
  name: "VThemeProvider",
  props: IS(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = xe(e);
    return () => {
      var l;
      return e.withBackground ? c(e.tag, {
        class: ["v-theme-provider", a.value, e.class],
        style: e.style
      }, {
        default: () => {
          var i;
          return [(i = n.default) == null ? void 0 : i.call(n)];
        }
      }) : (l = n.default) == null ? void 0 : l.call(n);
    };
  }
}), DS = E({
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
  lineInset: {
    type: [String, Number],
    default: 0
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
  ...Q(),
  ...qe(),
  ...me(),
  ...Se()
}, "VTimeline"), AS = L()({
  name: "VTimeline",
  props: DS(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = xe(e), {
      densityClasses: l
    } = ot(e), {
      rtlClasses: i
    } = Je();
    _e({
      VTimelineDivider: {
        lineColor: _(e, "lineColor")
      },
      VTimelineItem: {
        density: _(e, "density"),
        lineInset: _(e, "lineInset")
      }
    });
    const r = b(() => {
      const s = e.side ? e.side : e.density !== "default" ? "end" : null;
      return s && `v-timeline--side-${s}`;
    }), o = b(() => {
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
    return F(() => c(e.tag, {
      class: ["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, o.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, a.value, l.value, r.value, i.value, e.class],
      style: [{
        "--v-timeline-line-thickness": J(e.lineThickness)
      }, e.style]
    }, n)), {};
  }
}), MS = E({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: fe,
  iconColor: String,
  lineColor: String,
  ...Q(),
  ...Oe(),
  ...Gt(),
  ...Ke()
}, "VTimelineDivider"), BS = L()({
  name: "VTimelineDivider",
  props: MS(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      sizeClasses: a,
      sizeStyles: l
    } = Un(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: i,
      backgroundColorClasses: r
    } = Ae(_(e, "dotColor")), {
      roundedClasses: o
    } = Re(e, "v-timeline-divider__dot"), {
      elevationClasses: s
    } = Qe(e), {
      backgroundColorClasses: u,
      backgroundColorStyles: d
    } = Ae(_(e, "lineColor"));
    return F(() => c("div", {
      class: ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class],
      style: e.style
    }, [c("div", {
      class: ["v-timeline-divider__before", u.value],
      style: d.value
    }, null), !e.hideDot && c("div", {
      key: "dot",
      class: ["v-timeline-divider__dot", s.value, o.value, a.value],
      style: l.value
    }, [c("div", {
      class: ["v-timeline-divider__inner-dot", r.value, o.value],
      style: i.value
    }, [n.default ? c(pe, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, n.default) : c(Ve, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), c("div", {
      class: ["v-timeline-divider__after", u.value],
      style: d.value
    }, null)])), {};
  }
}), ES = E({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: fe,
  iconColor: String,
  lineInset: [Number, String],
  ...Q(),
  ...ft(),
  ...Ke(),
  ...Oe(),
  ...Gt(),
  ...me()
}, "VTimelineItem"), OS = L()({
  name: "VTimelineItem",
  props: ES(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: a
    } = vt(e), l = G(0), i = Y();
    return q(i, (r) => {
      var o;
      r && (l.value = ((o = r.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : o.getBoundingClientRect().width) ?? 0);
    }, {
      flush: "post"
    }), F(() => {
      var r, o;
      return c("div", {
        class: ["v-timeline-item", {
          "v-timeline-item--fill-dot": e.fillDot
        }, e.class],
        style: [{
          "--v-timeline-dot-size": J(l.value),
          "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${J(e.lineInset)})` : J(0)
        }, e.style]
      }, [c("div", {
        class: "v-timeline-item__body",
        style: a.value
      }, [(r = n.default) == null ? void 0 : r.call(n)]), c(BS, {
        ref: i,
        hideDot: e.hideDot,
        icon: e.icon,
        iconColor: e.iconColor,
        size: e.size,
        elevation: e.elevation,
        dotColor: e.dotColor,
        fillDot: e.fillDot,
        rounded: e.rounded
      }, {
        default: n.icon
      }), e.density !== "compact" && c("div", {
        class: "v-timeline-item__opposite"
      }, [!e.hideOpposite && ((o = n.opposite) == null ? void 0 : o.call(n))])]);
    }), {};
  }
}), $S = E({
  ...Q(),
  ...Tt({
    variant: "text"
  })
}, "VToolbarItems"), _S = L()({
  name: "VToolbarItems",
  props: $S(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return _e({
      VBtn: {
        color: _(e, "color"),
        height: "inherit",
        variant: _(e, "variant")
      }
    }), F(() => {
      var a;
      return c("div", {
        class: ["v-toolbar-items", e.class],
        style: e.style
      }, [(a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), LS = E({
  id: String,
  text: String,
  ...Ge(Ea({
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
}, "VTooltip"), FS = L()({
  name: "VTooltip",
  props: LS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = ue(e, "modelValue"), {
      scopeId: l
    } = Xn(), i = rt(), r = b(() => e.id || `v-tooltip-${i}`), o = Y(), s = b(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = b(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), d = b(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), v = b(() => D({
      "aria-describedby": r.value
    }, e.activatorProps));
    return F(() => {
      const f = Ft.filterProps(e);
      return c(Ft, D({
        ref: o,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: r.value
      }, f, {
        modelValue: a.value,
        "onUpdate:modelValue": (m) => a.value = m,
        transition: d.value,
        absolute: !0,
        location: s.value,
        origin: u.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: v.value,
        _disableGlobalStack: !0
      }, l), {
        activator: n.activator,
        default: function() {
          var y;
          for (var m = arguments.length, g = new Array(m), h = 0; h < m; h++)
            g[h] = arguments[h];
          return ((y = n.default) == null ? void 0 : y.call(n, ...g)) ?? e.text;
        }
      });
    }), Dt({}, o);
  }
}), RS = L()({
  name: "VValidation",
  props: Ru(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Nu(e, "validation");
    return () => {
      var l;
      return (l = n.default) == null ? void 0 : l.call(n, a);
    };
  }
}), NS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VAlert: Vy,
  VAlertTitle: Bu,
  VApp: Eg,
  VAppBar: Qg,
  VAppBarNavIcon: Sy,
  VAppBarTitle: ky,
  VAutocomplete: jb,
  VAvatar: Pt,
  VBadge: Yb,
  VBanner: Kb,
  VBannerActions: hc,
  VBannerText: gc,
  VBottomNavigation: qb,
  VBottomSheet: Zb,
  VBreadcrumbs: tp,
  VBreadcrumbsDivider: bc,
  VBreadcrumbsItem: pc,
  VBtn: Te,
  VBtnGroup: Pi,
  VBtnToggle: iy,
  VCard: lp,
  VCardActions: Sc,
  VCardItem: Cc,
  VCardSubtitle: kc,
  VCardText: Vc,
  VCardTitle: wc,
  VCarousel: vp,
  VCarouselItem: hp,
  VCheckbox: Ey,
  VCheckboxBtn: Yt,
  VChip: Ba,
  VChipGroup: _y,
  VClassIcon: cr,
  VCode: gp,
  VCol: Y1,
  VColorPicker: l1,
  VCombobox: o1,
  VComponentIcon: Ci,
  VContainer: N1,
  VCounter: xl,
  VDataIterator: b1,
  VDataTable: O1,
  VDataTableFooter: Ca,
  VDataTableRow: Nr,
  VDataTableRows: kn,
  VDataTableServer: F1,
  VDataTableVirtual: _1,
  VDatePicker: a0,
  VDatePickerControls: ji,
  VDatePickerHeader: zi,
  VDatePickerMonth: Yi,
  VDatePickerMonths: Wi,
  VDatePickerYears: Ui,
  VDefaultsProvider: pe,
  VDialog: Oi,
  VDialogBottomTransition: Lg,
  VDialogTopTransition: Fg,
  VDialogTransition: vl,
  VDivider: kl,
  VExpandTransition: ml,
  VExpandXTransition: mr,
  VExpansionPanel: u0,
  VExpansionPanelText: gd,
  VExpansionPanelTitle: bd,
  VExpansionPanels: r0,
  VFabTransition: _g,
  VFadeTransition: tl,
  VField: Zn,
  VFieldLabel: Qn,
  VFileInput: d0,
  VFooter: v0,
  VForm: h0,
  VHover: y0,
  VIcon: Ve,
  VImg: yn,
  VInfiniteScroll: p0,
  VInput: et,
  VItem: w0,
  VItemGroup: k0,
  VKbd: C0,
  VLabel: qn,
  VLayout: x0,
  VLayoutItem: I0,
  VLazy: D0,
  VLigatureIcon: Cg,
  VList: wl,
  VListGroup: Ai,
  VListImg: nb,
  VListItem: Wt,
  VListItemAction: lb,
  VListItemMedia: rb,
  VListItemSubtitle: qu,
  VListItemTitle: Xu,
  VListSubheader: Zu,
  VLocaleProvider: M0,
  VMain: E0,
  VMenu: Vl,
  VMessages: Lu,
  VNavigationDrawer: j0,
  VNoSsr: z0,
  VOtpInput: W0,
  VOverlay: Ft,
  VPagination: Ni,
  VParallax: G0,
  VProgressCircular: Nn,
  VProgressLinear: gl,
  VRadio: X0,
  VRadioGroup: J0,
  VRangeSlider: eS,
  VRating: nS,
  VResponsive: Vi,
  VRow: Z1,
  VScaleTransition: fr,
  VScrollXReverseTransition: Ng,
  VScrollXTransition: Rg,
  VScrollYReverseTransition: jg,
  VScrollYTransition: Hg,
  VSelect: mc,
  VSelectionControl: bn,
  VSelectionControlGroup: Ou,
  VSheet: Sn,
  VSkeletonLoader: rS,
  VSlideGroup: pa,
  VSlideGroupItem: oS,
  VSlideXReverseTransition: Yg,
  VSlideXTransition: zg,
  VSlideYReverseTransition: Wg,
  VSlideYTransition: vr,
  VSlider: Ri,
  VSnackbar: cS,
  VSpacer: cd,
  VStepper: gS,
  VStepperActions: kd,
  VStepperHeader: wd,
  VStepperItem: Cd,
  VStepperWindow: Vd,
  VStepperWindowItem: xd,
  VSvgIcon: ur,
  VSwitch: bS,
  VSystemBar: SS,
  VTab: Td,
  VTable: wn,
  VTabs: VS,
  VTextField: pn,
  VTextarea: PS,
  VThemeProvider: TS,
  VTimeline: AS,
  VTimelineItem: OS,
  VToolbar: xi,
  VToolbarItems: _S,
  VToolbarTitle: dr,
  VTooltip: FS,
  VValidation: RS,
  VVirtualScroll: Il,
  VWindow: ka,
  VWindowItem: wa
}, Symbol.toStringTag, { value: "Module" }));
function HS(e, t) {
  const n = t.modifiers || {}, a = t.value, {
    once: l,
    immediate: i,
    ...r
  } = n, o = !Object.keys(r).length, {
    handler: s,
    options: u
  } = typeof a == "object" ? a : {
    handler: a,
    options: {
      attributes: (r == null ? void 0 : r.attr) ?? o,
      characterData: (r == null ? void 0 : r.char) ?? o,
      childList: (r == null ? void 0 : r.child) ?? o,
      subtree: (r == null ? void 0 : r.sub) ?? o
    }
  }, d = new MutationObserver(function() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], f = arguments.length > 1 ? arguments[1] : void 0;
    s == null || s(v, f), l && Dd(e, t);
  });
  i && (s == null || s([], d)), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = {
    observer: d
  }, d.observe(e, u);
}
function Dd(e, t) {
  var n;
  (n = e._mutate) != null && n[t.instance.$.uid] && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const jS = {
  mounted: HS,
  unmounted: Dd
};
function zS(e, t) {
  var l, i;
  const n = t.value, a = {
    passive: !((l = t.modifiers) != null && l.active)
  };
  window.addEventListener("resize", n, a), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = {
    handler: n,
    options: a
  }, (i = t.modifiers) != null && i.quiet || n();
}
function YS(e, t) {
  var l;
  if (!((l = e._onResize) != null && l[t.instance.$.uid]))
    return;
  const {
    handler: n,
    options: a
  } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", n, a), delete e._onResize[t.instance.$.uid];
}
const WS = {
  mounted: zS,
  unmounted: YS
};
function Ad(e, t) {
  const {
    self: n = !1
  } = t.modifiers ?? {}, a = t.value, l = typeof a == "object" && a.options || {
    passive: !0
  }, i = typeof a == "function" || "handleEvent" in a ? a : a.handler, r = n ? e : t.arg ? document.querySelector(t.arg) : window;
  r && (r.addEventListener("scroll", i, l), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = {
    handler: i,
    options: l,
    // Don't reference self
    target: n ? void 0 : r
  });
}
function Md(e, t) {
  var i;
  if (!((i = e._onScroll) != null && i[t.instance.$.uid]))
    return;
  const {
    handler: n,
    options: a,
    target: l = e
  } = e._onScroll[t.instance.$.uid];
  l.removeEventListener("scroll", n, a), delete e._onScroll[t.instance.$.uid];
}
function US(e, t) {
  t.value !== t.oldValue && (Md(e, t), Ad(e, t));
}
const KS = {
  mounted: Ad,
  unmounted: Md,
  updated: US
}, GS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: cc,
  Intersect: Ia,
  Mutate: jS,
  Resize: WS,
  Ripple: qt,
  Scroll: KS,
  Touch: Pr
}, Symbol.toStringTag, { value: "Module" })), qS = vu({
  components: NS,
  directives: GS,
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
}), ZS = {
  install: (e, t) => {
    e.use(qS), e.use(Sf), e.component("PVCalendar", Is), e.component("VXCalendar", Am), e.component("Vormix", Em), e.component("VormixSK", Om);
  }
};
export {
  Am as VXCalendar,
  Em as Vormix,
  Om as VormixSK,
  ZS as default
};
