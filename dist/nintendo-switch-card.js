var NintendoSwitchCard=function(t){"use strict";function e(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,y=g?g.emptyScript:"",_=f.reactiveElementPolyfillSupport,m=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??v)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,_?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,S=w.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+N,P=`<${O}>`,k=document,U=()=>k.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,M="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,j=/>/g,B=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,D=/"/g,I=/^(?:script|style|textarea|title)$/i,V=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),G=V(1),W=V(2),q=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),J=new WeakMap,Q=k.createTreeWalker(k,129);function Z(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===H?"!--"===l[1]?o=L:void 0!==l[1]?o=j:void 0!==l[2]?(I.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=B):void 0!==l[3]&&(o=B):o===B?">"===l[0]?(o=r??H,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?B:'"'===l[3]?D:z):o===D||o===z?o=B:o===L||o===j?o=H:(o=B,r=void 0);const d=o===B&&t[e+1].startsWith("/>")?" ":"";n+=o===H?i+P:c>=0?(s.push(a),i.slice(0,c)+C+i.slice(c)+N+d):i+N+(-2===c?e:d)}return[Z(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=K.createElement(l,i),Q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Q.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[n++],i=s.getAttribute(t).split(N),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?st:"?"===o[1]?rt:"@"===o[1]?nt:it}),s.removeAttribute(t)}else t.startsWith(N)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(N),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),Q.nextNode(),a.push({type:2,index:++r});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(N,t+1));)a.push({type:7,index:r}),t+=N.length-1}r++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===q)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=T(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);Q.currentNode=s;let r=Q.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ot(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=Q.nextNode(),n++)}return Q.currentNode=k,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),T(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new K(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new et(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=X(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=X(this,s[i+o],e,o),a===q&&(a=this._$AH[o]),n||=!T(a)||a!==this._$AH[o],a===F?t=F:t!==F&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class rt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class nt extends it{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??F)===q)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at=w.litHtmlPolyfillSupport;at?.(K,et),(w.litHtmlVersions??=[]).push("3.3.2");const lt=globalThis;class ct extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new et(e.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},ut=(t=pt,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function ft(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const gt="nintendo-switch-card",yt=`${gt}-editor`,_t={battery_level:"battery_level",battery_health:"battery_health",battery_temperature:"battery_temperature",battery_voltage:"battery_voltage",is_charging:"is_charging",charger_type:"charger_type",screen_brightness:"screen_brightness",screen:"screen",volume:"volume",audio_output:"audio_output_target",game_running:"game_running",current_game:"current_game",current_game_id:"current_game_id",player_count:"player_count",telemetry_heartbeat:"telemetry_heartbeat"},mt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,r)})`
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
  .header-item.voltage { justify-self: center; }
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
`;let $t=class extends ct{render(){return G`<div style="padding:16px;color:#666">
      Visual editor not implemented yet — please use YAML mode.
    </div>`}};$t=e([dt(yt)],$t);const vt=W`
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
`,bt=["is_charging","game_running"];function xt(t){const e=t.entities??{},i=t.entity,s={};return Object.keys(_t).forEach(t=>{const r=e[t];if(r)s[t]=r;else if(i){const e=function(t){return bt.includes(t)?"binary_sensor":"sensor"}(t);s[t]=`${e}.${i}_${_t[t]}`}else s[t]=""}),s}const wt={en:{state:{standby:"Standby",home:"Home",awake:"Awake · no game",possible_sleep:"No telemetry · possibly asleep",running:"Running",charging:"Charging",not_charging:"Not charging",unavailable:"Unavailable"},stat:{brightness:"Brightness",volume:"Volume",voltage:"Voltage",players:"Players",health:"Health",temperature:"Temperature",telemetry:"Telemetry",charger:"Charger"},action:{reboot:"Reboot",shutdown:"Shutdown",notify:"Notify",notify_prompt:"Message to send to the Switch:"},error:{no_entity:"Missing required entity configuration",invalid_config:"Invalid configuration"}},"pt-BR":{state:{standby:"Em espera",home:"Início",awake:"Ligada · sem jogo",possible_sleep:"Sem telemetria · possivelmente em repouso",running:"Em execução",charging:"Carregando",not_charging:"Não carregando",unavailable:"Indisponível"},stat:{brightness:"Brilho",volume:"Volume",voltage:"Voltagem",players:"Jogadores",health:"Saúde",temperature:"Temperatura",telemetry:"Telemetria",charger:"Carregador"},action:{reboot:"Reiniciar",shutdown:"Desligar",notify:"Notificar",notify_prompt:"Mensagem para enviar ao Switch:"},error:{no_entity:"Configuração de entidade obrigatória ausente",invalid_config:"Configuração inválida"}},es:{state:{standby:"En reposo",home:"Inicio",awake:"Encendida · sin juego",possible_sleep:"Sin telemetría · posible reposo",running:"En ejecución",charging:"Cargando",not_charging:"Sin carga",unavailable:"Desconectada"},stat:{brightness:"Brillo",volume:"Volumen",voltage:"Voltaje",players:"Mandos",health:"Salud",temperature:"Temperatura",telemetry:"Telemetría",charger:"Cargador"},action:{reboot:"Reiniciar",shutdown:"Apagar",notify:"Notificar",notify_prompt:"Mensaje para enviar a la Switch:"},error:{no_entity:"Falta la configuración de entidad requerida",invalid_config:"Configuración no válida"}}};function At(t,e){let i=t;for(const t of e){if(!i||"object"!=typeof i||!(t in i))return;i=i[t]}return"string"==typeof i?i:void 0}function St(t,e="en"){const i=t.split("."),s=wt[e]??wt[e.split("-")[0]],r=s?At(s,i):void 0;if(void 0!==r)return r;const n=At(wt.en,i);return void 0!==n?n:t}const Et=new Set(["unavailable","unknown","none",""]);function Ct(t,e){if(void 0===t||Et.has(t))return"—";if(void 0!==e.multiply||void 0!==e.precision){const i=Number(t);if(!Number.isFinite(i))return"—";const s=void 0!==e.multiply?i*e.multiply:i;return Nt(void 0!==e.precision?s.toFixed(e.precision):String(s),e)}return Nt(t,e)}function Nt(t,e){return e.suffix?`${t}${e.suffix}`:e.unit?`${t} ${e.unit}`:t}console.info("%c NINTENDO-SWITCH-CARD %c v0.1.5 ","color: white; background: #E60012; font-weight: 700;","color: white; background: #0AB9E6; font-weight: 700;");const Ot=window;return Ot.customCards=Ot.customCards||[],Ot.customCards.push({type:gt,name:"Nintendo Switch Card",description:"Card for Nintendo Switch via switch-assistant MQTT integration",preview:!1}),t.NintendoSwitchCard=class extends ct{setConfig(t){if(!t)throw new Error("invalid_config: config is empty");const e="string"==typeof t.entity&&t.entity.length>0,i=t.entities??{},s=!!i.battery_level&&!!i.is_charging;if(!e&&!s)throw new Error("missing required entity: provide `entity:` prefix or `entities.battery_level` + `entities.is_charging`");if(t.stats&&t.stats.length>4)throw new Error("invalid_config: stats can have at most 4 items");if(t.image&&"switch-default"!==t.image)try{t.image.startsWith("/local/")||t.image.startsWith("/")||new URL(t.image)}catch{throw new Error("invalid_config: image must be `switch-default`, a `/local/...` path, or an absolute URL")}this._config=t}getCardSize(){return 5}static getConfigElement(){return document.createElement("nintendo-switch-card-editor")}static getStubConfig(){return{type:"custom:nintendo-switch-card",entity:"nintendo_switch"}}_stateOf(t){return this.hass&&t?this.hass.states[t]?.state??"unavailable":"unavailable"}_telemetryFresh(t){const e=this.hass?.states[t.telemetry_heartbeat];if(!e?.last_updated)return!1;const i=Date.now()-Date.parse(e.last_updated);return Number.isFinite(i)&&i>=0&&i<=18e4}_resolveLang(){return this._config?.language??this.hass?.locale.language??"en"}_isAnyEssentialUnavailable(t){return[t.battery_level,t.is_charging].some(t=>!t||!this.hass.states[t]||"unavailable"===this.hass.states[t].state)}_renderHeader(t){const e=this._stateOf(t.battery_level),i="on"===this._stateOf(t.is_charging),s=Ct(this._stateOf(t.battery_voltage),{unit:"V",multiply:.001,precision:2}),r=St(i?"state.charging":"state.not_charging",this._resolveLang()),n=Number(e),o=!i&&Number.isFinite(n)&&n>0&&n<15;return G`
      <div class="header">
        <div class="header-item charge">
          <ha-icon icon="${i?"mdi:power-plug":"mdi:power-plug-off"}"></ha-icon>
          <span>${r}</span>
        </div>
        <div class="header-item voltage">
          <ha-icon icon="mdi:flash-outline"></ha-icon>
          <span>${s}</span>
        </div>
        <div class="header-item battery ${i?"charging-pulse":""} ${o?"battery-low":""}">
          <ha-icon icon="${i?"mdi:flash":"mdi:battery"}"></ha-icon>
          <span>${"unavailable"===e?"—":`${e}%`}</span>
        </div>
      </div>
    `}_renderHero(t){const e=this._config.image;return G`
      <div class="hero ${t?"unavailable":""}">
        ${e&&"switch-default"!==e?G`<img src=${e} alt="Nintendo Switch" />`:vt}
      </div>
    `}_renderName(){const t=this._config?.name??"Nintendo Switch";return G`<div class="name">${t}</div>`}_renderStateLine(t,e){const i=function(t){if(t.anyUnavailable)return{text:St("state.unavailable",t.lang),color:"error"};const e="on"===t.isCharging,i="on"===t.gameRunning,s=t.currentGame&&"Unknown"!==t.currentGame?t.currentGame:St("state.running",t.lang);return t.telemetryFresh?e&&i?{text:`⚡ ${St("state.charging",t.lang)} · ▶ ${s}`,color:"charging"}:e?{text:`⚡ ${St("state.charging",t.lang)} · ${St("state.awake",t.lang)}`,color:"charging"}:i?{text:`▶ ${s}`,color:"default"}:{text:St("state.awake",t.lang),color:"default"}:{text:St("state.possible_sleep",t.lang),color:"muted"}}({isCharging:this._stateOf(t.is_charging),gameRunning:this._stateOf(t.game_running),currentGame:this._stateOf(t.current_game),chargerType:this._stateOf(t.charger_type),telemetryFresh:this._telemetryFresh(t),anyUnavailable:e,lang:this._resolveLang()});return G`<div class="state ${i.color}" aria-live="polite">${i.text}</div>`}_defaultStats(t){return[{entity:t.battery_voltage,unit:"V",multiply:.001,precision:2,subtitle:"stat.voltage"},{entity:t.battery_temperature,unit:"°C",precision:1,subtitle:"stat.temperature"},{entity:t.battery_health,unit:"%",precision:0,subtitle:"stat.health"},{entity:t.telemetry_heartbeat,precision:0,subtitle:"stat.telemetry"}]}_renderStats(t){const e=this._config.stats??this._defaultStats(t),i=this._resolveLang(),s=e.filter(t=>"unavailable"!==this._stateOf(t.entity));return G`
      <div class="stats">
        ${s.map(t=>{const e=Ct(this._stateOf(t.entity),{unit:t.unit,multiply:t.multiply,precision:t.precision,suffix:t.suffix}),s=t.subtitle.startsWith("stat.")?St(t.subtitle,i):t.subtitle;return G`
            <div class="stat">
              <div class="stat-value">${e}</div>
              <div class="stat-label">${s}</div>
            </div>
          `})}
      </div>
    `}_defaultActions(){return[]}_handleAction(t){if(!this.hass)return;const[e,i]=t.service.split(".");e&&i&&this.hass.callService(e,i,t.service_data,t.target)}_renderToolbar(t){const e=this._resolveLang(),i=this._config?.actions??this._defaultActions(),s=this._stateOf(t.audio_output),r="unavailable"!==s;return 0!==i.length||r?G`
      <div class="toolbar">
        <div class="tool-group">
          ${i.map(t=>{const i=t.name_key?St(t.name_key,e):t.name??t.service,s="action.reboot"===t.name_key?"reboot":"action.shutdown"===t.name_key?"shutdown":"";return G`
              <button
                class="tool ${s}"
                aria-label=${i}
                title=${i}
                @click=${()=>this._handleAction(t)}
              >
                <ha-icon icon=${t.icon??"mdi:flash"}></ha-icon>
              </button>
            `})}
        </div>
        <div class="tool-group">
          ${r?G`<span class="tool" aria-label="Audio ${s}" title="Audio: ${s}">
            <ha-icon icon="mdi:speaker"></ha-icon>
          </span>`:F}
        </div>
      </div>
    `:F}render(){if(!this._config||!this.hass)return F;const t=xt(this._config),e=this._isAnyEssentialUnavailable(t),i=this._config.compact?"compact":"";return G`
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
