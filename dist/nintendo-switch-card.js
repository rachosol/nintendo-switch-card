var NintendoSwitchCard=function(t){"use strict";function e(t,e,i,r){var s,n=arguments.length,o=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const i=globalThis,r=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const a=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,_=g?g.emptyScript:"",y=f.reactiveElementPolyfillSupport,m=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&l(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of e){const e=document.createElement("style"),s=i.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=r.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=r;const n=s.fromAttribute(e,t.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,i,r=!1,s){if(void 0!==t){const n=this.constructor;if(!1===r&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??v)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[m("elementProperties")]=new Map,w[m("finalized")]=new Map,y?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,S=x.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+P,O=`<${N}>`,k=document,U=()=>k.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,M="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,j=/>/g,B=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,V=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),G=V(1),W=V(2),q=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),F=new WeakMap,Q=k.createTreeWalker(k,129);function Z(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,r=[];let s,n=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(o.lastIndex=h,c=o.exec(i),null!==c);)h=o.lastIndex,o===H?"!--"===c[1]?o=L:void 0!==c[1]?o=j:void 0!==c[2]?(I.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=B):void 0!==c[3]&&(o=B):o===B?">"===c[0]?(o=s??H,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?B:'"'===c[3]?D:z):o===D||o===z?o=B:o===L||o===j?o=H:(o=B,s=void 0);const d=o===B&&t[e+1].startsWith("/>")?" ":"";n+=o===H?i+O:l>=0?(r.push(a),i.slice(0,l)+C+i.slice(l)+P+d):i+P+(-2===l?e:d)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class K{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const o=t.length-1,a=this.parts,[c,l]=Y(t,e);if(this.el=K.createElement(c,i),Q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Q.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(C)){const e=l[n++],i=r.getAttribute(t).split(P),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:o[2],strings:i,ctor:"."===o[1]?rt:"?"===o[1]?st:"@"===o[1]?nt:it}),r.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:s}),r.removeAttribute(t));if(I.test(r.tagName)){const t=r.textContent.split(P),e=t.length-1;if(e>0){r.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],U()),Q.nextNode(),a.push({type:2,index:++s});r.append(t[e],U())}}}else if(8===r.nodeType)if(r.data===N)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(P,t+1));)a.push({type:7,index:s}),t+=P.length-1}s++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,r){if(e===q)return e;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const n=T(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(e=X(t,s._$AS(t,e.values),s,r)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??k).importNode(e,!0);Q.currentNode=r;let s=Q.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new et(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new ot(s,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(s=Q.nextNode(),n++)}return Q.currentNode=k,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),T(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new tt(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new K(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new et(this.O(U()),this.O(U()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,r){const s=this.strings;let n=!1;if(void 0===s)t=X(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const r=t;let o,a;for(t=s[0],o=0;o<s.length-1;o++)a=X(this,r[i+o],e,o),a===q&&(a=this._$AH[o]),n||=!T(a)||a!==this._$AH[o],a===J?t=J:t!==J&&(t+=(a??"")+s[o+1]),this._$AH[o]=a}n&&!r&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class st extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class nt extends it{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??J)===q)return;const i=this._$AH,r=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==J&&(i===J||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at=x.litHtmlPolyfillSupport;at?.(K,et),(x.litHtmlVersions??=[]).push("3.3.2");const ct=globalThis;class lt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let s=r._$litPart$;if(void 0===s){const t=i?.renderBefore??null;r._$litPart$=s=new et(e.insertBefore(U(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}lt._$litElement$=!0,lt.finalized=!0,ct.litElementHydrateSupport?.({LitElement:lt});const ht=ct.litElementPolyfillSupport;ht?.({LitElement:lt}),(ct.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},ut=(t=pt,e,i)=>{const{kind:r,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,s,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const s=this[r];e.call(this,i),this.requestUpdate(r,s,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};function ft(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const gt="nintendo-switch-card",_t=`${gt}-editor`,yt={battery_level:"battery_level",battery_health:"battery_health",battery_temperature:"battery_temperature",battery_voltage:"battery_voltage",is_charging:"is_charging",charger_type:"charger_type",screen_brightness:"screen_brightness",screen:"screen",volume:"volume",audio_output:"audio_output_target",game_running:"game_running",current_game:"current_game",current_game_id:"current_game_id",player_count:"player_count",telemetry_heartbeat:"telemetry_heartbeat",telemetry_online:"telemetry_online"},mt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new o(i,t,s)})`
  :host {
    display: block;
  }
  ha-card {
    overflow: hidden;
    font-family: var(--primary-font-family, -apple-system, system-ui, sans-serif);
  }
  .header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 12px 16px 0;
    font-size: 14px;
    color: var(--secondary-text-color, #666);
  }
  .header-item {
    display: flex;
    gap: 4px;
    align-items: center;
  }
  .header-item ha-icon {
    --mdc-icon-size: 18px;
    opacity: 0.75;
  }
  .header-item.battery { justify-self: end; }
  .header-item.charging-pulse {
    color: #00a854;
    animation: pulse 1.5s ease-in-out infinite;
  }
  .header-item.battery-low {
    color: #d32f2f;
    animation: battery-low 1s ease-in-out infinite;
  }
  .hero {
    padding: 18px 12px 8px;
    display: flex;
    justify-content: center;
  }
  .hero svg, .hero img {
    width: 100%;
    max-width: 460px;
    height: auto;
  }
  .hero.unavailable { opacity: 0.5; }
  .name {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    margin: 4px 0 2px;
    color: var(--primary-text-color, #2c2c2c);
  }
  .state {
    text-align: center;
    font-size: 14px;
    margin-bottom: 14px;
    color: var(--secondary-text-color, #666);
  }
  .state.charging { color: #00a854; font-weight: 500; }
  .state.error { color: #d32f2f; font-weight: 500; }
  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--divider-color, #eee);
  }
  .stat {
    padding: 12px 6px;
    text-align: center;
    border-right: 1px solid var(--divider-color, #eee);
    transition: transform 150ms ease;
  }
  .stat:last-child { border-right: 0; }
  .stat:hover { transform: translateY(-1px); }
  .stat-value {
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-text-color, #2c2c2c);
  }
  .stat-label {
    font-size: 12px;
    color: var(--secondary-text-color, #888);
    margin-top: 2px;
  }
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    border-top: 1px solid var(--divider-color, #eee);
  }
  .tool-group { display: flex; gap: 14px; }
  .tool {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color, #666);
    cursor: pointer;
    border-radius: 6px;
    background: none;
    border: none;
    padding: 0;
    transition: transform 80ms ease;
  }
  .tool:hover { background: var(--secondary-background-color, #f0f0f0); color: var(--primary-text-color, #222); }
  .tool:active { transform: scale(0.92); }
  .tool:focus-visible { outline: 2px solid var(--primary-color, #03a9f4); }
  .tool.power {
    width: auto;
    gap: 6px;
    padding: 0 12px 0 8px;
    height: 32px;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid var(--divider-color, #ddd);
  }
  .tool.power ha-icon { --mdc-icon-size: 20px; }
  .tool.power.on {
    color: #00a854;
    border-color: #00a854;
    background: rgba(0, 168, 84, 0.1);
  }
  .tool.power:disabled { opacity: 0.45; cursor: default; }
  .compact .stats, .compact .toolbar { display: none; }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  @keyframes battery-low {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  @media (prefers-reduced-motion: reduce) {
    .header-item.charging-pulse,
    .header-item.battery-low { animation: none; }
    .stat, .tool { transition: none; }
  }
`;let $t=class extends lt{render(){return G`<div style="padding:16px;color:#666">
      Visual editor not implemented yet — please use YAML mode.
    </div>`}};$t=e([dt(_t)],$t);const vt=W`
<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="nscJcL" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#f2f4f5"/>
      <stop offset="100%" stop-color="#cbd0d3"/>
    </linearGradient>
    <linearGradient id="nscJcR" x1="1" y1="0" x2="0" y2="0">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#f2f4f5"/>
      <stop offset="100%" stop-color="#cbd0d3"/>
    </linearGradient>
    <linearGradient id="nscBody" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2e2e2e"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
    <radialGradient id="nscStick" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#5a5a5a"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </radialGradient>
    <radialGradient id="nscBtn" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#5e5e5e"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </radialGradient>
  </defs>
  <ellipse cx="300" cy="194" rx="270" ry="5" fill="#000" opacity="0.18"/>
  <!-- Joy-Con L -->
  <path d="M 22 14 Q 4 14 4 36 L 4 164 Q 4 186 22 186 L 60 186 L 60 14 Z" fill="url(#nscJcL)" stroke="#b9c0c4" stroke-width="1.2"/>
  <circle cx="22" cy="42" r="11" fill="url(#nscStick)"/>
  <circle cx="22" cy="42" r="8" fill="#0a0a0a"/>
  <circle cx="32" cy="86" r="5" fill="url(#nscBtn)"/>
  <circle cx="32" cy="116" r="5" fill="url(#nscBtn)"/>
  <circle cx="18" cy="101" r="5" fill="url(#nscBtn)"/>
  <circle cx="46" cy="101" r="5" fill="url(#nscBtn)"/>
  <rect x="44" y="38" width="9" height="2" rx="1" fill="#9aa2a6"/>
  <rect x="42" y="148" width="9" height="9" rx="1.5" fill="url(#nscBtn)"/>
  <!-- Tablet -->
  <rect x="60" y="14" width="3" height="172" fill="#000" opacity="0.55"/>
  <rect x="63" y="6" width="474" height="188" rx="10" fill="url(#nscBody)"/>
  <rect x="71" y="20" width="458" height="160" rx="4" fill="#040404"/>
  <rect x="79" y="26" width="442" height="148" rx="2" fill="#0c0c0c"/>
  <rect x="294" y="190" width="14" height="2" rx="1" fill="#000" opacity="0.7"/>
  <!-- Joy-Con R -->
  <rect x="537" y="14" width="3" height="172" fill="#000" opacity="0.55"/>
  <path d="M 540 14 L 540 186 L 578 186 Q 596 186 596 164 L 596 36 Q 596 14 578 14 Z" fill="url(#nscJcR)" stroke="#b9c0c4" stroke-width="1.2"/>
  <circle cx="572" cy="42" r="6" fill="url(#nscBtn)"/>
  <text x="572" y="45" font-size="7" fill="#aaa" text-anchor="middle" font-weight="bold">X</text>
  <circle cx="586" cy="56" r="6" fill="url(#nscBtn)"/>
  <text x="586" y="59" font-size="7" fill="#aaa" text-anchor="middle" font-weight="bold">A</text>
  <circle cx="558" cy="56" r="6" fill="url(#nscBtn)"/>
  <text x="558" y="59" font-size="7" fill="#aaa" text-anchor="middle" font-weight="bold">Y</text>
  <circle cx="572" cy="70" r="6" fill="url(#nscBtn)"/>
  <text x="572" y="73" font-size="7" fill="#aaa" text-anchor="middle" font-weight="bold">B</text>
  <circle cx="578" cy="138" r="11" fill="url(#nscStick)"/>
  <circle cx="578" cy="138" r="8" fill="#0a0a0a"/>
  <g stroke="#5d666b" stroke-width="2" stroke-linecap="round">
    <line x1="548" y1="38" x2="556" y2="38"/>
    <line x1="552" y1="34" x2="552" y2="42"/>
  </g>
  <circle cx="552" cy="158" r="5" fill="#0a0a0a"/>
  <circle cx="552" cy="158" r="4.5" fill="none" stroke="#aaa" stroke-width="0.6" opacity="0.4"/>
</svg>
`,bt=["is_charging","game_running","telemetry_online"];function wt(t){const e=t.entities??{},i=t.entity,r={};return Object.keys(yt).forEach(t=>{const s=e[t];if(s)r[t]=s;else if(i){const e=function(t){return bt.includes(t)?"binary_sensor":"sensor"}(t);r[t]=`${e}.${i}_${yt[t]}`}else r[t]=""}),r}const xt={en:{state:{standby:"Standby",home:"Home",awake:"No game running",activity_unconfirmed:"Activity not confirmed",last_session:"Last session",running:"Running",charging:"Charging",not_charging:"Not charging",unavailable:"Unavailable"},stat:{brightness:"Brightness",volume:"Volume",voltage:"Voltage",players:"Players",health:"Health",temperature:"Temperature",telemetry:"Telemetry",charger:"Charger"},action:{reboot:"Reboot",shutdown:"Shutdown",notify:"Notify",notify_prompt:"Message to send to the Switch:",charger:"Charger",charger_on:"Turn charger on",charger_off:"Turn charger off"},error:{no_entity:"Missing required entity configuration",invalid_config:"Invalid configuration"}},"pt-BR":{state:{standby:"Em espera",home:"Início",awake:"Nenhum jogo em execução",activity_unconfirmed:"Atividade não confirmada",last_session:"Última sessão",running:"Em execução",charging:"Carregando",not_charging:"Não carregando",unavailable:"Indisponível"},stat:{brightness:"Brilho",volume:"Volume",voltage:"Voltagem",players:"Jogadores",health:"Saúde",temperature:"Temperatura",telemetry:"Telemetria",charger:"Carregador"},action:{reboot:"Reiniciar",shutdown:"Desligar",notify:"Notificar",notify_prompt:"Mensagem para enviar ao Switch:",charger:"Carregador",charger_on:"Ligar carregador",charger_off:"Desligar carregador"},error:{no_entity:"Configuração de entidade obrigatória ausente",invalid_config:"Configuração inválida"}},es:{state:{standby:"En reposo",home:"Inicio",awake:"Sin juego en ejecución",activity_unconfirmed:"Actividad no confirmada",last_session:"Última sesión",running:"En ejecución",charging:"Cargando",not_charging:"Sin carga",unavailable:"Desconectada"},stat:{brightness:"Brillo",volume:"Volumen",voltage:"Voltaje",players:"Mandos",health:"Salud",temperature:"Temperatura",telemetry:"Telemetría",charger:"Cargador"},action:{reboot:"Reiniciar",shutdown:"Apagar",notify:"Notificar",notify_prompt:"Mensaje para enviar a la Switch:",charger:"Cargador",charger_on:"Encender cargador",charger_off:"Apagar cargador"},error:{no_entity:"Falta la configuración de entidad requerida",invalid_config:"Configuración no válida"}}};function At(t,e){let i=t;for(const t of e){if(!i||"object"!=typeof i||!(t in i))return;i=i[t]}return"string"==typeof i?i:void 0}function St(t,e="en"){const i=t.split("."),r=xt[e]??xt[e.split("-")[0]],s=r?At(r,i):void 0;if(void 0!==s)return s;const n=At(xt.en,i);return void 0!==n?n:t}const Et=new Set(["unavailable","unknown","none",""]);function Ct(t,e){return e.suffix?`${t}${e.suffix}`:e.unit?`${t} ${e.unit}`:t}console.info("%c NINTENDO-SWITCH-CARD %c v0.1.11 ","color: white; background: #E60012; font-weight: 700;","color: white; background: #0AB9E6; font-weight: 700;");const Pt=window;return Pt.customCards=Pt.customCards||[],Pt.customCards.push({type:gt,name:"Nintendo Switch Card",description:"Card for Nintendo Switch via switch-assistant MQTT integration",preview:!1}),t.NintendoSwitchCard=class extends lt{setConfig(t){if(!t)throw new Error("invalid_config: config is empty");const e="string"==typeof t.entity&&t.entity.length>0,i=t.entities??{},r=!!i.battery_level&&!!i.is_charging;if(!e&&!r)throw new Error("missing required entity: provide `entity:` prefix or `entities.battery_level` + `entities.is_charging`");if(t.stats&&t.stats.length>4)throw new Error("invalid_config: stats can have at most 4 items");if(void 0!==t.power_switch){const e=t.power_switch;if("string"!=typeof e||!/^[a-z_]+\.[a-z0-9_]+$/.test(e))throw new Error("invalid_config: power_switch must be an entity id such as `switch.charger`")}if(t.image&&"switch-default"!==t.image)try{t.image.startsWith("/local/")||t.image.startsWith("/")||new URL(t.image)}catch{throw new Error("invalid_config: image must be `switch-default`, a `/local/...` path, or an absolute URL")}this._config=t}getCardSize(){return 5}static getConfigElement(){return document.createElement("nintendo-switch-card-editor")}static getStubConfig(){return{type:"custom:nintendo-switch-card",entity:"nintendo_switch"}}_stateOf(t){return this.hass&&t?this.hass.states[t]?.state??"unavailable":"unavailable"}_resolveLang(){return this._config?.language??this.hass?.locale.language??"en"}_isAnyEssentialUnavailable(t){return[t.battery_level,t.is_charging].some(t=>!t||!this.hass.states[t]||"unavailable"===this.hass.states[t].state)}_renderHeader(t){const e=this._stateOf(t.battery_level),i="on"===this._stateOf(t.is_charging),r=St(i?"state.charging":"state.not_charging",this._resolveLang()),s=Number(e),n=!i&&Number.isFinite(s)&&s>0&&s<15;return G`
      <div class="header">
        <div class="header-item charge">
          <ha-icon icon="${i?"mdi:power-plug":"mdi:power-plug-off"}"></ha-icon>
          <span>${r}</span>
        </div>
        <div class="header-item battery ${i?"charging-pulse":""} ${n?"battery-low":""}">
          <ha-icon icon="${i?"mdi:flash":"mdi:battery"}"></ha-icon>
          <span>${"unavailable"===e?"—":`${e}%`}</span>
        </div>
      </div>
    `}_renderHero(t){const e=this._config.image;return G`
      <div class="hero ${t?"unavailable":""}">
        ${e&&"switch-default"!==e?G`<img src=${e} alt="Nintendo Switch" />`:vt}
      </div>
    `}_renderName(){const t=this._config?.name??"Nintendo Switch";return G`<div class="name">${t}</div>`}_renderStateLine(t,e){const i=function(t){if(t.anyUnavailable)return{text:St("state.unavailable",t.lang),color:"error"};const e="on"===t.isCharging,i="on"===t.gameRunning,r=t.currentGame&&"Unknown"!==t.currentGame?t.currentGame:St("state.running",t.lang);return i&&"off"===t.telemetryOnline?{text:`${St("state.activity_unconfirmed",t.lang)} · ${St("state.last_session",t.lang)}: ${r}`,color:"muted"}:e&&i?{text:`⚡ ${St("state.charging",t.lang)} · ▶ ${r}`,color:"charging"}:e?{text:`⚡ ${St("state.charging",t.lang)} · ${St("state.awake",t.lang)}`,color:"charging"}:i?{text:`▶ ${r}`,color:"default"}:{text:St("state.awake",t.lang),color:"default"}}({isCharging:this._stateOf(t.is_charging),gameRunning:this._stateOf(t.game_running),currentGame:this._stateOf(t.current_game),chargerType:this._stateOf(t.charger_type),telemetryOnline:this._config?.entities?.telemetry_online?this._stateOf(t.telemetry_online):"unknown",anyUnavailable:e,lang:this._resolveLang()});return G`<div class="state ${i.color}" aria-live="polite">${i.text}</div>`}_defaultStats(t){return[{entity:t.battery_voltage,unit:"V",multiply:.001,precision:2,subtitle:"stat.voltage"},{entity:t.battery_temperature,unit:"°C",precision:1,subtitle:"stat.temperature"},{entity:t.battery_health,unit:"%",precision:0,subtitle:"stat.health"},{entity:t.telemetry_heartbeat,precision:0,subtitle:"stat.telemetry"}]}_renderStats(t){const e=this._config.stats??this._defaultStats(t),i=this._resolveLang(),r=e.filter(t=>"unavailable"!==this._stateOf(t.entity));return G`
      <div class="stats">
        ${r.map(t=>{const e=function(t,e){if(void 0===t||Et.has(t))return"—";if(void 0!==e.multiply||void 0!==e.precision){const i=Number(t);if(!Number.isFinite(i))return"—";const r=void 0!==e.multiply?i*e.multiply:i;return Ct(void 0!==e.precision?r.toFixed(e.precision):String(r),e)}return Ct(t,e)}(this._stateOf(t.entity),{unit:t.unit,multiply:t.multiply,precision:t.precision,suffix:t.suffix}),r=t.subtitle.startsWith("stat.")?St(t.subtitle,i):t.subtitle;return G`
            <div class="stat">
              <div class="stat-value">${e}</div>
              <div class="stat-label">${r}</div>
            </div>
          `})}
      </div>
    `}_defaultActions(){return[]}_handleAction(t){if(!this.hass)return;const[e,i]=t.service.split(".");e&&i&&this.hass.callService(e,i,t.service_data,t.target)}_togglePower(t){if(!this.hass)return;const e=t.split(".")[0];this.hass.callService(e,"toggle",{entity_id:t})}_renderPower(t){const e=this._config?.power_switch;if(!e)return J;const i=this._stateOf(e),r="on"===i,s="unavailable"===i||"unknown"===i,n=St("action.charger",t),o=s?`${n}: ${St("state.unavailable",t)}`:St(r?"action.charger_off":"action.charger_on",t);return G`
      <button
        class="tool power ${r?"on":"off"}"
        aria-label=${o}
        aria-pressed=${r?"true":"false"}
        title=${o}
        ?disabled=${s}
        @click=${()=>this._togglePower(e)}
      >
        <ha-icon icon=${r?"mdi:power-plug":"mdi:power-plug-off-outline"}></ha-icon>
        <span>${n}</span>
      </button>
    `}_renderToolbar(t){const e=this._resolveLang(),i=this._config?.actions??this._defaultActions(),r=this._stateOf(t.audio_output),s="unavailable"!==r,n=!!this._config?.power_switch;return 0!==i.length||s||n?G`
      <div class="toolbar">
        <div class="tool-group">
          ${this._renderPower(e)}
          ${i.map(t=>{const i=t.name_key?St(t.name_key,e):t.name??t.service,r="action.reboot"===t.name_key?"reboot":"action.shutdown"===t.name_key?"shutdown":"";return G`
              <button
                class="tool ${r}"
                aria-label=${i}
                title=${i}
                @click=${()=>this._handleAction(t)}
              >
                <ha-icon icon=${t.icon??"mdi:flash"}></ha-icon>
              </button>
            `})}
        </div>
        <div class="tool-group">
          ${s?G`<span class="tool" aria-label="Audio ${r}" title="Audio: ${r}">
            <ha-icon icon="mdi:speaker"></ha-icon>
          </span>`:J}
        </div>
      </div>
    `:J}render(){if(!this._config||!this.hass)return J;const t=wt(this._config),e=this._isAnyEssentialUnavailable(t),i=this._config.compact?"compact":"";return G`
      <ha-card class=${i} role="article" aria-label=${this._config.name??"Nintendo Switch"}>
        ${this._renderHeader(t)}
        ${this._renderHero(e)}
        ${this._renderName()}
        ${this._renderStateLine(t,e)}
        ${this._renderStats(t)}
        ${this._renderToolbar(t)}
      </ha-card>
    `}},t.NintendoSwitchCard.styles=mt,e([ft({attribute:!1})],t.NintendoSwitchCard.prototype,"hass",void 0),e([function(t){return ft({...t,state:!0,attribute:!1})}()],t.NintendoSwitchCard.prototype,"_config",void 0),t.NintendoSwitchCard=e([dt(gt)],t.NintendoSwitchCard),t}({});
//# sourceMappingURL=nintendo-switch-card.js.map
