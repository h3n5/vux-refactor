(function(O,E){typeof exports=="object"&&typeof module<"u"?E(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],E):(O=typeof globalThis<"u"?globalThis:O||self,E(O.VuxRefactor={},O.Vue))})(this,function(O,E){"use strict";/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */process.env.NODE_ENV;const h=(e,t=!1)=>t?Symbol.for(e):Symbol(e),B=e=>typeof e=="number"&&isFinite(e),m=Object.assign;let g;const S=()=>g||(g=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),M=Array.isArray,d=e=>typeof e=="string",P=e=>e!==null&&typeof e=="object";function D(e){let t=e;return()=>++t}/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const X=/\{([0-9a-zA-Z]+)\}/g;function H(e,...t){return t.length===1&&K(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(X,(i,n)=>t.hasOwnProperty(n)?t[n]:"")}const K=e=>e!==null&&typeof e=="object",j={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},_={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},x={[_.EXPECTED_TOKEN]:"Expected token: '{0}'",[_.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[_.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[_.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[_.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[_.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[_.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[_.EMPTY_PLACEHOLDER]:"Empty placeholder",[_.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[_.INVALID_LINKED_FORMAT]:"Invalid linked format",[_.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[_.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[_.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[_.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[_.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[_.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function W(e,t,i={}){const{domain:n,messages:o,args:N}=i,r=H((o||x)[e]||"",...N||[]),u=new SyntaxError(String(r));return u.code=e,u.domain=n,u}/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function q(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(S().__INTLIFY_PROD_DEVTOOLS__=!1)}function Ne(e){}const v=j.__EXTEND_POINT__,I=D(v),z={NOT_FOUND_KEY:v,FALLBACK_TO_TRANSLATE:I(),CANNOT_FORMAT_NUMBER:I(),FALLBACK_TO_NUMBER_FORMAT:I(),CANNOT_FORMAT_DATE:I(),FALLBACK_TO_DATE_FORMAT:I(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:I(),__EXTEND_POINT__:I()},b=_.__EXTEND_POINT__,f=D(b),Q={INVALID_ARGUMENT:b,INVALID_DATE_ARGUMENT:f(),INVALID_ISO_DATE_ARGUMENT:f(),NOT_SUPPORT_NON_STRING_MESSAGE:f(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:f(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:f(),NOT_SUPPORT_LOCALE_TYPE:f(),__EXTEND_POINT__:f()},Z=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"],J=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];q(),E.util.warn;/*!
  * vue-i18n-bridge v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function ee(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(S().__INTLIFY_PROD_DEVTOOLS__=!1)}function te(){console.warn("vue-i18n-bridge v10 will not be released, since vue-i18n-bridge is for Vue 2, which is already past EOL.")}const w=z.__EXTEND_POINT__,l=D(w);l(),l(),l(),l(),l(),l(),l(),l(),l();const k=Q.__EXTEND_POINT__,a=D(k),s={UNEXPECTED_RETURN_TYPE:k,INVALID_ARGUMENT:a(),MUST_BE_CALL_SETUP_TOP:a(),NOT_INSTALLED:a(),NOT_AVAILABLE_IN_LEGACY_MODE:a(),REQUIRED_VALUE:a(),INVALID_VALUE:a(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:a(),NOT_INSTALLED_WITH_PROVIDE:a(),UNEXPECTED_ERROR:a(),NOT_COMPATIBLE_LEGACY_VUE_I18N:a(),BRIDGE_SUPPORT_VUE_2_ONLY:a(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:a(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:a(),__EXTEND_POINT__:a()};function V(e,...t){return W(e,null,process.env.NODE_ENV!=="production"?{messages:ne,args:t}:void 0)}const ne={[s.UNEXPECTED_RETURN_TYPE]:"Unexpected return type in composer",[s.INVALID_ARGUMENT]:"Invalid argument",[s.MUST_BE_CALL_SETUP_TOP]:"Must be called at the top of a `setup` function",[s.NOT_INSTALLED]:"Need to install with `app.use` function",[s.UNEXPECTED_ERROR]:"Unexpected error",[s.NOT_AVAILABLE_IN_LEGACY_MODE]:"Not available in legacy mode",[s.REQUIRED_VALUE]:"Required in value: {0}",[s.INVALID_VALUE]:"Invalid value",[s.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]:"Cannot setup vue-devtools plugin",[s.NOT_INSTALLED_WITH_PROVIDE]:"Need to install with `provide` function",[s.NOT_COMPATIBLE_LEGACY_VUE_I18N]:"Not compatible legacy VueI18n.",[s.BRIDGE_SUPPORT_VUE_2_ONLY]:"vue-i18n-bridge support Vue 2.x only",[s.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]:"Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",[s.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]:"Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"},ie=h("__translateVNode"),oe=h("__datetimeParts"),_e=h("__numberParts"),y={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function se({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((n,o)=>[...n,...o.children?o.children:[o]],[]):t.reduce((i,n)=>{const o=e[n];return o&&(i[n]=o()),i},{})}function Te(e){return e}m({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>B(e)||!isNaN(e)}},y);function ae(e){return M(e)&&!d(e[0])}function F(e,t,i,n){const{slots:o,attrs:N}=t;return()=>{const r={part:!0};let u={};e.locale&&(r.locale=e.locale),d(e.format)?r.key=e.format:P(e.format)&&(d(e.format.key)&&(r.key=e.format.key),u=Object.keys(e.format).reduce((T,A)=>i.includes(A)?m({},T,{[A]:e.format[A]}):T,{}));const c=n(e.value,r,u);let L=[r.key];M(c)?L=c.map((T,A)=>{const G=o[T.type],U=G?G({[T.type]:T.value,index:A,parts:c}):[T.value];return ae(U)&&(U[0].key=`${T.type}-${A}`),U}):d(c)&&(L=[c]);const p=m({},N),R=d(e.tag)||P(e.tag)?e.tag:"span";return E.h(R,p,L)}}m({value:{type:Number,required:!0},format:{type:[String,Object]}},y),m({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},y);function C(e={}){throw E.getCurrentInstance()==null?V(s.MUST_BE_CALL_SETUP_TOP):V(s.NOT_INSTALLED)}if(ee(),process.env.NODE_ENV!=="production"||__INTLIFY_PROD_DEVTOOLS__){const e=S();e.__INTLIFY__=!0,e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__}process.env.NODE_ENV!=="production"&&te();function $(e){const t=e;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{"zh-CN":{cancel:i=>{const{normalize:n}=i;return n(["取消"])}},en:{cancel:i=>{const{normalize:n}=i;return n(["cancel"])}}}})}function re(e,t,i,n,o,N,r,u){var c=typeof e=="function"?e.options:e;return t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),{exports:e,options:c}}const Y={name:"actionsheet",mounted(){this.hasHeaderSlot=!!this.$slots.header,this.$nextTick(()=>{this.$tabbar=document.querySelector(".weui-tabbar"),this.$refs.iOSMenu&&this.$refs.iOSMenu.addEventListener("transitionend",this.onTransitionEnd)})},setup(){const{t:e}=C();return{t:e}},props:{value:Boolean,showCancel:Boolean,cancelText:String,theme:{type:String,default:"ios"},menus:{type:[Object,Array],default:()=>({})},closeOnClickingMask:{type:Boolean,default:!0},closeOnClickingMenu:{type:Boolean,default:!0}},data(){return{hasHeaderSlot:!1,show:!1}},methods:{onTransitionEnd(){this.$emit(this.show?"on-after-show":"on-after-hide")},onMenuClick(e,t){typeof e=="string"?this.emitEvent("on-click-menu",t,e):e.type!=="disabled"&&e.type!=="info"&&(e.value||e.value===0?this.emitEvent("on-click-menu",e.value,e):(this.emitEvent("on-click-menu","",e),this.show=!1))},onClickingMask(){this.$emit("on-click-mask"),this.closeOnClickingMask&&(this.show=!1)},emitEvent(e,t,i){if(e==="on-click-menu"&&!/.noop/.test(t)){let n=i;typeof n=="object"&&(n=JSON.parse(JSON.stringify(n))),this.$emit(e,t,n),this.$emit(`${e}-${t}`),this.closeOnClickingMenu&&(this.show=!1)}},fixIos(e){this.$el.parentNode&&this.$el.parentNode.className.indexOf("v-transfer-dom")!==-1||this.$tabbar&&/iphone/i.test(navigator.userAgent)&&(this.$tabbar.style.zIndex=e)}},watch:{show(e){this.$emit("input",e),e?this.fixIos(-1):setTimeout(()=>{this.fixIos(100)},200)},value:{handler:function(e){this.show=e},immediate:!0}},beforeDestroy(){this.fixIos(100),this.$refs.iOSMenu&&this.$refs.iOSMenu.removeEventListener("transitionend",this.onTransitionEnd)}};var ce=function(){var t=this,i=t._self._c;return i("div",{staticClass:"vux-actionsheet"},[i("transition",{attrs:{name:"vux-actionsheet-mask"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask weui-mask_transparent",on:{click:t.onClickingMask}})]),t.theme==="android"?i("div",{staticClass:"weui-skin_android"},[i("transition",{attrs:{name:"vux-android-actionsheet"},on:{"after-enter":function(n){return t.$emit("on-after-show")},"after-leave":function(n){return t.$emit("on-after-hide")}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-actionsheet"},[i("div",{staticClass:"weui-actionsheet__menu"},t._l(t.menus,function(n,o){return i("div",{key:o,staticClass:"weui-actionsheet__cell",domProps:{innerHTML:t._s(n.label||n)},on:{click:function(N){return t.onMenuClick(n,o)}}})}),0)])])],1):i("div",{ref:"iOSMenu",staticClass:"weui-actionsheet",class:{"weui-actionsheet_toggle":t.show}},[i("div",{staticClass:"weui-actionsheet__menu"},[t.hasHeaderSlot?i("div",{staticClass:"weui-actionsheet__cell"},[t._t("header")],2):t._e(),t._l(t.menus,function(n,o){return i("div",{key:o,staticClass:"weui-actionsheet__cell",class:`vux-actionsheet-menu-${n.type||"default"}`,domProps:{innerHTML:t._s(n.label||n)},on:{click:function(N){return t.onMenuClick(n,o)}}})})],2),t.showCancel?i("div",{staticClass:"weui-actionsheet__action",on:{click:function(n){return t.emitEvent("on-click-menu","cancel")}}},[i("div",{staticClass:"weui-actionsheet__cell"},[t._v(t._s(t.cancelText||t.t("cancel")))])]):t._e()])],1)},Ee=[];typeof $=="function"&&$(Y);var le=re(Y,ce,Ee);const ue=le.exports;O.Actionsheet=ue,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})});