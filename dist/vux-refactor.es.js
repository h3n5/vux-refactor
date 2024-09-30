import B, { defineComponent as P, h as b, getCurrentInstance as X } from "vue";
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
process.env.NODE_ENV;
const y = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), H = (e) => typeof e == "number" && isFinite(e), A = Object.assign;
let g;
const R = () => g || (g = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), w = Array.isArray, d = (e) => typeof e == "string", h = (e) => e !== null && typeof e == "object";
function m(e) {
  let t = e;
  return () => ++t;
}
/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const K = /\{([0-9a-zA-Z]+)\}/g;
function j(e, ...t) {
  return t.length === 1 && x(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(K, (i, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const x = (e) => e !== null && typeof e == "object", W = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, _ = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, q = {
  // tokenizer error messages
  [_.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [_.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [_.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [_.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [_.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [_.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [_.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [_.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [_.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [_.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [_.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [_.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [_.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [_.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [_.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [_.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function z(e, t, i = {}) {
  const { domain: n, messages: o, args: u } = i, r = j((o || q)[e] || "", ...u || []), E = new SyntaxError(String(r));
  return E.code = e, E.domain = n, E;
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Q() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (R().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const V = W.__EXTEND_POINT__, O = m(V), Z = {
  NOT_FOUND_KEY: V,
  // 2
  FALLBACK_TO_TRANSLATE: O(),
  // 3
  CANNOT_FORMAT_NUMBER: O(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: O(),
  // 5
  CANNOT_FORMAT_DATE: O(),
  // 6
  FALLBACK_TO_DATE_FORMAT: O(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: O(),
  // 8
  __EXTEND_POINT__: O()
  // 9
}, k = _.__EXTEND_POINT__, T = m(k), J = {
  INVALID_ARGUMENT: k,
  // 17
  INVALID_DATE_ARGUMENT: T(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: T(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: T(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: T(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: T(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: T(),
  // 23
  __EXTEND_POINT__: T()
  // 24
}, ee = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
], te = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
Q();
B.util.warn;
/*!
  * vue-i18n-bridge v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function ne() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (R().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
function ie() {
  console.warn("vue-i18n-bridge v10 will not be released, since vue-i18n-bridge is for Vue 2, which is already past EOL.");
}
const F = Z.__EXTEND_POINT__, l = m(F);
l(), l(), l(), l(), l(), l(), l(), l(), l();
const $ = J.__EXTEND_POINT__, a = m($), s = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: $,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: a(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: a(),
  // 26
  NOT_INSTALLED: a(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: a(),
  // 28
  // directive module errors
  REQUIRED_VALUE: a(),
  // 29
  INVALID_VALUE: a(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: a(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: a(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: a(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: a(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: a(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: a(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: a(),
  // 37
  // for enhancement
  __EXTEND_POINT__: a()
  // 38
};
function M(e, ...t) {
  return z(e, null, process.env.NODE_ENV !== "production" ? { messages: oe, args: t } : void 0);
}
const oe = {
  [s.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [s.INVALID_ARGUMENT]: "Invalid argument",
  [s.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [s.NOT_INSTALLED]: "Need to install with `app.use` function",
  [s.UNEXPECTED_ERROR]: "Unexpected error",
  [s.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [s.REQUIRED_VALUE]: "Required in value: {0}",
  [s.INVALID_VALUE]: "Invalid value",
  [s.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [s.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [s.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [s.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [s.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [s.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, _e = /* @__PURE__ */ y("__translateVNode"), se = /* @__PURE__ */ y("__datetimeParts"), ae = /* @__PURE__ */ y("__numberParts"), U = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function re({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, o) => [
    ...n,
    // prettier-ignore
    ...o.children ? o.children : [o]
  ], []) : t.reduce((i, n) => {
    const o = e[n];
    return o && (i[n] = o()), i;
  }, {});
}
A({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => H(e) || !isNaN(e)
  }
}, U);
function ce(e) {
  return w(e) && !d(e[0]);
}
function Y(e, t, i, n) {
  const { slots: o, attrs: u } = t;
  return () => {
    const r = { part: !0 };
    let E = {};
    e.locale && (r.locale = e.locale), d(e.format) ? r.key = e.format : h(e.format) && (d(e.format.key) && (r.key = e.format.key), E = Object.keys(e.format).reduce((N, I) => i.includes(I) ? A({}, N, { [I]: e.format[I] }) : N, {}));
    const c = n(e.value, r, E);
    let L = [r.key];
    w(c) ? L = c.map((N, I) => {
      const p = o[N.type], S = p ? p({ [N.type]: N.value, index: I, parts: c }) : [N.value];
      return ce(S) && (S[0].key = `${N.type}-${I}`), S;
    }) : d(c) && (L = [c]);
    const D = A({}, u), C = d(e.tag) || h(e.tag) ? e.tag : "span";
    return b(C, D, L);
  };
}
A({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, U);
A({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, U);
function f(e = {}) {
  throw X() == null ? M(s.MUST_BE_CALL_SETUP_TOP) : M(s.NOT_INSTALLED);
}
ne();
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = R();
  e.__INTLIFY__ = !0, e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__;
}
process.env.NODE_ENV !== "production" && ie();
function v(e) {
  const t = e;
  t.__i18n = t.__i18n || [], t.__i18n.push({
    locale: "",
    resource: {
      "zh-CN": {
        cancel: (i) => {
          const { normalize: n } = i;
          return n(["取消"]);
        }
      },
      en: {
        cancel: (i) => {
          const { normalize: n } = i;
          return n(["cancel"]);
        }
      }
    }
  });
}
function Ee(e, t, i, n, o, u, r, E) {
  var c = typeof e == "function" ? e.options : e;
  return t && (c.render = t, c.staticRenderFns = i, c._compiled = !0), {
    exports: e,
    options: c
  };
}
const G = {
  name: "actionsheet",
  mounted() {
    this.hasHeaderSlot = !!this.$slots.header, this.$nextTick(() => {
      this.$tabbar = document.querySelector(".weui-tabbar"), this.$refs.iOSMenu && this.$refs.iOSMenu.addEventListener("transitionend", this.onTransitionEnd);
    });
  },
  setup() {
    const { t: e } = f();
    return {
      t: e
    };
  },
  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    theme: {
      type: String,
      default: "ios"
    },
    menus: {
      type: [Object, Array],
      default: () => ({})
    },
    closeOnClickingMask: {
      type: Boolean,
      default: !0
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return { hasHeaderSlot: !1, show: !1 };
  },
  methods: {
    onTransitionEnd() {
      this.$emit(this.show ? "on-after-show" : "on-after-hide");
    },
    onMenuClick(e, t) {
      typeof e == "string" ? this.emitEvent("on-click-menu", t, e) : e.type !== "disabled" && e.type !== "info" && (e.value || e.value === 0 ? this.emitEvent("on-click-menu", e.value, e) : (this.emitEvent("on-click-menu", "", e), this.show = !1));
    },
    onClickingMask() {
      this.$emit("on-click-mask"), this.closeOnClickingMask && (this.show = !1);
    },
    emitEvent(e, t, i) {
      if (e === "on-click-menu" && !/.noop/.test(t)) {
        let n = i;
        typeof n == "object" && (n = JSON.parse(JSON.stringify(n))), this.$emit(e, t, n), this.$emit(`${e}-${t}`), this.closeOnClickingMenu && (this.show = !1);
      }
    },
    fixIos(e) {
      this.$el.parentNode && this.$el.parentNode.className.indexOf("v-transfer-dom") !== -1 || this.$tabbar && /iphone/i.test(navigator.userAgent) && (this.$tabbar.style.zIndex = e);
    }
  },
  watch: {
    show(e) {
      this.$emit("input", e), e ? this.fixIos(-1) : setTimeout(() => {
        this.fixIos(100);
      }, 200);
    },
    value: {
      handler: function(e) {
        this.show = e;
      },
      immediate: !0
    }
  },
  beforeDestroy() {
    this.fixIos(100), this.$refs.iOSMenu && this.$refs.iOSMenu.removeEventListener("transitionend", this.onTransitionEnd);
  }
};
var le = function() {
  var t = this, i = t._self._c;
  return i("div", { staticClass: "vux-actionsheet" }, [i("transition", { attrs: { name: "vux-actionsheet-mask" } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: t.show, expression: "show" }], staticClass: "weui-mask weui-mask_transparent", on: { click: t.onClickingMask } })]), t.theme === "android" ? i("div", { staticClass: "weui-skin_android" }, [i("transition", { attrs: { name: "vux-android-actionsheet" }, on: { "after-enter": function(n) {
    return t.$emit("on-after-show");
  }, "after-leave": function(n) {
    return t.$emit("on-after-hide");
  } } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: t.show, expression: "show" }], staticClass: "weui-actionsheet" }, [i("div", { staticClass: "weui-actionsheet__menu" }, t._l(t.menus, function(n, o) {
    return i("div", { key: o, staticClass: "weui-actionsheet__cell", domProps: { innerHTML: t._s(n.label || n) }, on: { click: function(u) {
      return t.onMenuClick(n, o);
    } } });
  }), 0)])])], 1) : i("div", { ref: "iOSMenu", staticClass: "weui-actionsheet", class: { "weui-actionsheet_toggle": t.show } }, [i("div", { staticClass: "weui-actionsheet__menu" }, [t.hasHeaderSlot ? i("div", { staticClass: "weui-actionsheet__cell" }, [t._t("header")], 2) : t._e(), t._l(t.menus, function(n, o) {
    return i("div", { key: o, staticClass: "weui-actionsheet__cell", class: `vux-actionsheet-menu-${n.type || "default"}`, domProps: { innerHTML: t._s(n.label || n) }, on: { click: function(u) {
      return t.onMenuClick(n, o);
    } } });
  })], 2), t.showCancel ? i("div", { staticClass: "weui-actionsheet__action", on: { click: function(n) {
    return t.emitEvent("on-click-menu", "cancel");
  } } }, [i("div", { staticClass: "weui-actionsheet__cell" }, [t._v(t._s(t.cancelText || t.t("cancel")))])]) : t._e()])], 1);
}, ue = [];
typeof v == "function" && v(G);
var Ne = /* @__PURE__ */ Ee(
  G,
  le,
  ue
);
const Te = Ne.exports;
export {
  Te as Actionsheet
};
