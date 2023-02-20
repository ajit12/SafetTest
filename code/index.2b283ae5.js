const co=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}};co();const uo="modulepreload",Pe={},ho="/SafetTest/",Oe=function(t,r){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=`${ho}${o}`,o in Pe)return;Pe[o]=!0;const i=o.endsWith(".css"),n=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":uo,i||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),i)return new Promise((c,a)=>{s.addEventListener("load",c),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=window,be=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),Re=new WeakMap;class Er{constructor(t,r,o){if(this._$cssResult$=!0,o!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(be&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Re.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Re.set(r,t))}return t}toString(){return this.cssText}}const po=e=>new Er(typeof e=="string"?e:e+"",void 0,ge),Tt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new Er(r,e,ge)},fo=(e,t)=>{be?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),i=gt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)})},Te=be?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return po(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zt;const wt=window,Le=wt.trustedTypes,vo=Le?Le.emptyScript:"",Ue=wt.reactiveElementPolyfillSupport,ie={toAttribute(e,t){switch(t){case Boolean:e=e?vo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Cr=(e,t)=>t!==e&&(t==t||e==e),Dt={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:Cr};class N extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,o)=>{const i=this._$Ep(o,r);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,r=Dt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(i){const n=this[t];this[r]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Dt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of o)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)r.unshift(Te(i))}else t!==void 0&&r.push(Te(t));return r}static _$Ep(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return fo(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=Dt){var i;const n=this.constructor._$Ep(t,o);if(n!==void 0&&o.reflect===!0){const s=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:ie).toAttribute(r,o.type);this._$El=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,r){var o;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const s=i.getPropertyOptions(n),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:ie;this._$El=n,this[n]=c.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Cr)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(o)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}N.finalized=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},Ue==null||Ue({ReactiveElement:N}),((zt=wt.reactiveElementVersions)!==null&&zt!==void 0?zt:wt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jt;const At=window,j=At.trustedTypes,Me=j?j.createPolicy("lit-html",{createHTML:e=>e}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,Sr="?"+S,bo=`<${Sr}>`,V=document,it=(e="")=>V.createComment(e),nt=e=>e===null||typeof e!="object"&&typeof e!="function",xr=Array.isArray,go=e=>xr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Ie=/>/g,R=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Be=/'/g,He=/"/g,kr=/^(?:script|style|textarea|title)$/i,mo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),st=mo(1),F=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),ze=new WeakMap,z=V.createTreeWalker(V,129,null,!1),_o=(e,t)=>{const r=e.length-1,o=[];let i,n=t===2?"<svg>":"",s=X;for(let a=0;a<r;a++){const l=e[a];let h,d,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===X?d[1]==="!--"?s=Ne:d[1]!==void 0?s=Ie:d[2]!==void 0?(kr.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=R):d[3]!==void 0&&(s=R):s===R?d[0]===">"?(s=i!=null?i:X,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?R:d[3]==='"'?He:Be):s===He||s===Be?s=R:s===Ne||s===Ie?s=X:(s=R,i=void 0);const _=s===R&&e[a+1].startsWith("/>")?" ":"";n+=s===X?l+bo:u>=0?(o.push(h),l.slice(0,u)+"$lit$"+l.slice(u)+S+_):l+S+(u===-2?(o.push(void 0),a):_)}const c=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Me!==void 0?Me.createHTML(c):c,o]};class at{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const c=t.length-1,a=this.parts,[l,h]=_o(t,r);if(this.el=at.createElement(l,o),z.currentNode=this.el.content,r===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(i=z.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const u of i.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(S)){const p=h[s++];if(d.push(u),p!==void 0){const _=i.getAttribute(p.toLowerCase()+"$lit$").split(S),M=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:M[2],strings:_,ctor:M[1]==="."?$o:M[1]==="?"?Ao:M[1]==="@"?Eo:Lt})}else a.push({type:6,index:n})}for(const u of d)i.removeAttribute(u)}if(kr.test(i.tagName)){const d=i.textContent.split(S),u=d.length-1;if(u>0){i.textContent=j?j.emptyScript:"";for(let p=0;p<u;p++)i.append(d[p],it()),z.nextNode(),a.push({type:2,index:++n});i.append(d[u],it())}}}else if(i.nodeType===8)if(i.data===Sr)a.push({type:2,index:n});else{let d=-1;for(;(d=i.data.indexOf(S,d+1))!==-1;)a.push({type:7,index:n}),d+=S.length-1}n++}}static createElement(t,r){const o=V.createElement("template");return o.innerHTML=t,o}}function W(e,t,r=e,o){var i,n,s,c;if(t===F)return t;let a=o!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[o]:r._$Cl;const l=nt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,o)),o!==void 0?((s=(c=r)._$Co)!==null&&s!==void 0?s:c._$Co=[])[o]=a:r._$Cl=a),a!==void 0&&(t=W(e,a._$AS(e,t.values),a,o)),t}class yo{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:o},parts:i}=this._$AD,n=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:V).importNode(o,!0);z.currentNode=n;let s=z.nextNode(),c=0,a=0,l=i[0];for(;l!==void 0;){if(c===l.index){let h;l.type===2?h=new ut(s,s.nextSibling,this,t):l.type===1?h=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(h=new Co(s,this,t)),this.u.push(h),l=i[++a]}c!==(l==null?void 0:l.index)&&(s=z.nextNode(),c++)}return n}p(t){let r=0;for(const o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class ut{constructor(t,r,o,i){var n;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=i,this._$Cm=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=W(this,t,r),nt(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==F&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):go(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==m&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var r;const{values:o,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=at.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===n)this._$AH.p(o);else{const s=new yo(n,this),c=s.v(this.options);s.p(o),this.T(c),this._$AH=s}}_$AC(t){let r=ze.get(t.strings);return r===void 0&&ze.set(t.strings,r=new at(t)),r}k(t){xr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of t)i===r.length?r.push(o=new ut(this.O(it()),this.O(it()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Lt{constructor(t,r,o,i,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)t=W(this,t,r,0),s=!nt(t)||t!==this._$AH&&t!==F,s&&(this._$AH=t);else{const c=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=W(this,c[o+a],r,a),l===F&&(l=this._$AH[a]),s||(s=!nt(l)||l!==this._$AH[a]),l===m?t=m:t!==m&&(t+=(l!=null?l:"")+n[a+1]),this._$AH[a]=l}s&&!i&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class $o extends Lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}const wo=j?j.emptyScript:"";class Ao extends Lt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==m?this.element.setAttribute(this.name,wo):this.element.removeAttribute(this.name)}}class Eo extends Lt{constructor(t,r,o,i,n){super(t,r,o,i,n),this.type=5}_$AI(t,r=this){var o;if((t=(o=W(this,t,r,0))!==null&&o!==void 0?o:m)===F)return;const i=this._$AH,n=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==m&&(i===m||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class Co{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const De=At.litHtmlPolyfillSupport;De==null||De(at,ut),((jt=At.litHtmlVersions)!==null&&jt!==void 0?jt:At.litHtmlVersions=[]).push("2.6.1");const So=(e,t,r)=>{var o,i;const n=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=n._$litPart$;if(s===void 0){const c=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new ut(t.insertBefore(it(),c),c,void 0,r!=null?r:{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vt,Ft;class L extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=So(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return F}}L.finalized=!0,L._$litElement$=!0,(Vt=globalThis.litElementHydrateSupport)===null||Vt===void 0||Vt.call(globalThis,{LitElement:L});const je=globalThis.litElementPolyfillSupport;je==null||je({LitElement:L});((Ft=globalThis.litElementVersions)!==null&&Ft!==void 0?Ft:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=e=>t=>typeof t=="function"?((r,o)=>(customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:i,elements:n}=o;return{kind:i,elements:n,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function _e(e){return(t,r)=>r!==void 0?((o,i,n)=>{i.constructor.createProperty(n,o)})(e,t,r):xo(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wt;((Wt=window.HTMLSlotElement)===null||Wt===void 0?void 0:Wt.prototype.assignedElements)!=null;function Et(e){return e=e||[],Array.isArray(e)?e:[e]}function w(e){return`[Vaadin.Router] ${e}`}function ko(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Ct="module",St="nomodule",ne=[Ct,St];function Ve(e){if(!e.match(/.+\.[m]?js$/))throw new Error(w(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function Pr(e){if(!e||!$(e.path))throw new Error(w('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!U(e.action)&&!Array.isArray(e.children)&&!U(e.children)&&!xt(t)&&!r.some(o=>$(e[o])))throw new Error(w(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if($(t))Ve(t);else if(ne.some(o=>o in t))ne.forEach(o=>o in t&&Ve(t[o]));else throw new Error(w('Expected route bundle to include either "'+St+'" or "'+Ct+'" keys, or both'));e.redirect&&["bundle","component"].forEach(o=>{o in e&&console.warn(w(`Route config "${e.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function Fe(e){Et(e).forEach(t=>Pr(t))}function We(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===Ct?r.setAttribute("type",Ct):t===St&&r.setAttribute(St,""),r.async=!0),new Promise((o,i)=>{r.onreadystatechange=r.onload=n=>{r.__dynamicImportLoaded=!0,o(n)},r.onerror=n=>{r.parentNode&&r.parentNode.removeChild(r),i(n)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&o()})}function Po(e){return $(e)?We(e):Promise.race(ne.filter(t=>t in e).map(t=>We(e[t],t)))}function et(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function xt(e){return typeof e=="object"&&!!e}function U(e){return typeof e=="function"}function $(e){return typeof e=="string"}function Or(e){const t=new Error(w(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const B=new class{};function Oo(e){const t=e.port,r=e.protocol,n=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${n}`}function qe(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let c=0;c<r.length;c++){const a=r[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||Oo(t))!==window.location.origin)return;const{pathname:i,search:n,hash:s}=t;et("go",{pathname:i,search:n,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const Ro={activate(){window.document.addEventListener("click",qe)},inactivate(){window.document.removeEventListener("click",qe)}},To=/Trident/.test(navigator.userAgent);To&&!U(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function Ke(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:o}=window.location;et("go",{pathname:t,search:r,hash:o})}const Lo={activate(){window.addEventListener("popstate",Ke)},inactivate(){window.removeEventListener("popstate",Ke)}};var Z=Nr,Uo=ye,Mo=Ho,No=Lr,Io=Mr,Rr="/",Tr="./",Bo=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ye(e,t){for(var r=[],o=0,i=0,n="",s=t&&t.delimiter||Rr,c=t&&t.delimiters||Tr,a=!1,l;(l=Bo.exec(e))!==null;){var h=l[0],d=l[1],u=l.index;if(n+=e.slice(i,u),i=u+h.length,d){n+=d[1],a=!0;continue}var p="",_=e[i],M=l[2],io=l[3],no=l[4],ft=l[5];if(!a&&n.length){var Ht=n.length-1;c.indexOf(n[Ht])>-1&&(p=n[Ht],n=n.slice(0,Ht))}n&&(r.push(n),n="",a=!1);var so=p!==""&&_!==void 0&&_!==p,ao=ft==="+"||ft==="*",lo=ft==="?"||ft==="*",xe=p||s,ke=io||no;r.push({name:M||o++,prefix:p,delimiter:xe,optional:lo,repeat:ao,partial:so,pattern:ke?zo(ke):"[^"+C(xe)+"]+?"})}return(n||i<e.length)&&r.push(n+e.substr(i)),r}function Ho(e,t){return Lr(ye(e,t))}function Lr(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(o,i){for(var n="",s=i&&i.encode||encodeURIComponent,c=0;c<e.length;c++){var a=e[c];if(typeof a=="string"){n+=a;continue}var l=o?o[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=s(l[d],a),!t[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=s(String(l),a),!t[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');n+=a.prefix+h;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function C(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function zo(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Ur(e){return e&&e.sensitive?"":"i"}function Do(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)t.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function jo(e,t,r){for(var o=[],i=0;i<e.length;i++)o.push(Nr(e[i],t,r).source);return new RegExp("(?:"+o.join("|")+")",Ur(r))}function Vo(e,t,r){return Mr(ye(e,r),t,r)}function Mr(e,t,r){r=r||{};for(var o=r.strict,i=r.start!==!1,n=r.end!==!1,s=C(r.delimiter||Rr),c=r.delimiters||Tr,a=[].concat(r.endsWith||[]).map(C).concat("$").join("|"),l=i?"^":"",h=e.length===0,d=0;d<e.length;d++){var u=e[d];if(typeof u=="string")l+=C(u),h=d===e.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+C(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?l+=C(u.prefix)+"("+p+")?":l+="(?:"+C(u.prefix)+"("+p+"))?":l+=C(u.prefix)+"("+p+")"}}return n?(o||(l+="(?:"+s+")?"),l+=a==="$"?"$":"(?="+a+")"):(o||(l+="(?:"+s+"(?="+a+"))?"),h||(l+="(?="+s+"|"+a+")")),new RegExp(l,Ur(r))}function Nr(e,t,r){return e instanceof RegExp?Do(e,t):Array.isArray(e)?jo(e,t,r):Vo(e,t,r)}Z.parse=Uo;Z.compile=Mo;Z.tokensToFunction=No;Z.tokensToRegExp=Io;const{hasOwnProperty:Fo}=Object.prototype,se=new Map;se.set("|false",{keys:[],pattern:/(?:)/});function Ge(e){try{return decodeURIComponent(e)}catch{return e}}function Wo(e,t,r,o,i){r=!!r;const n=`${e}|${r}`;let s=se.get(n);if(!s){const l=[];s={keys:l,pattern:Z(e,l,{end:r,strict:e===""})},se.set(n,s)}const c=s.pattern.exec(t);if(!c)return null;const a=Object.assign({},i);for(let l=1;l<c.length;l++){const h=s.keys[l-1],d=h.name,u=c[l];(u!==void 0||!Fo.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(Ge):[]:a[d]=u&&Ge(u))}return{path:c[0],keys:(o||[]).concat(s.keys),params:a}}function Ir(e,t,r,o,i){let n,s,c=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!n&&(n=Wo(a,t,!h,o,i),n))return{done:!1,value:{route:e,keys:n.keys,params:n.params,path:n.path}};if(n&&h)for(;c<h.length;){if(!s){const u=h[c];u.parent=e;let p=n.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=Ir(u,t.substr(p),r,n.keys,n.params)}const d=s.next(l);if(!d.done)return{done:!1,value:d.value};s=null,c++}return{done:!0}}}}function qo(e){if(U(e.route.action))return e.route.action(e)}function Ko(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function Go(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function Zo(e,t){const{route:r,path:o}=t;if(r&&!r.__synthetic){const i={path:o,route:r};if(!e.chain)e.chain=[];else if(r.parent){let n=e.chain.length;for(;n--&&e.chain[n].route&&e.chain[n].route!==r.parent;)e.chain.pop()}e.chain.push(i)}}class lt{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||qo,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){Fe(t);const r=[...Et(t)];this.root.__children=r}addRoutes(t){return Fe(t),this.root.__children.push(...Et(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,$(t)?{pathname:t}:t),o=Ir(this.root,this.__normalizePathname(r.pathname),this.baseUrl),i=this.resolveRoute;let n=null,s=null,c=r;function a(l,h=n.value.route,d){const u=d===null&&n.value.route;return n=s||o.next(u),s=null,!l&&(n.done||!Ko(h,n.value.route))?(s=n,Promise.resolve(B)):n.done?Promise.reject(Or(r)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},r,n.value),Zo(c,n.value),Promise.resolve(i(c)).then(p=>p!=null&&p!==B?(c.result=p.result||p,c):a(l,h,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=Go(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,o=this.constructor.__createUrl(t,r).href;if(o.slice(0,r.length)===r)return o.slice(r.length)}}lt.pathToRegexp=Z;const{pathToRegexp:Ze}=lt,Je=new Map;function Br(e,t,r){const o=t.name||t.component;if(o&&(e.has(o)?e.get(o).push(t):e.set(o,[t])),Array.isArray(r))for(let i=0;i<r.length;i++){const n=r[i];n.parent=t,Br(e,n,n.__children||n.children)}}function Xe(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function Qe(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Jo(e,t={}){if(!(e instanceof lt))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(o,i)=>{let n=Xe(r,o);if(!n&&(r.clear(),Br(r,e.root,e.root.__children),n=Xe(r,o),!n))throw new Error(`Route "${o}" not found`);let s=Je.get(n.fullPath);if(!s){let a=Qe(n),l=n.parent;for(;l;){const p=Qe(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=Ze.parse(a),d=Ze.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)$(h[p])||(u[h[p].name]=!0);s={toPath:d,keys:u},Je.set(a,s),n.fullPath=a}let c=s.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const a={},l=Object.keys(i);for(let d=0;d<l.length;d++){const u=l[d];s.keys[u]||(a[u]=i[u])}const h=t.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let Ye=[];function Xo(e){Ye.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),Ye=e}const Qo=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Yo=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function tr(e,t){return e.classList.add(t),new Promise(r=>{if(Qo(e)){const o=e.getBoundingClientRect(),i=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;e.setAttribute("style",`position: absolute; ${i}`),Yo(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const ti=256;function qt(e){return e!=null}function ei(e){const t=Object.assign({},e);return delete t.next,t}function y({pathname:e="",search:t="",hash:r="",chain:o=[],params:i={},redirectFrom:n,resolver:s},c){const a=o.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:c||a.length&&a[a.length-1]||null,params:i,redirectFrom:n,getUrl:(l={})=>_t(k.pathToRegexp.compile(Hr(a))(Object.assign({},i,l)),s)}}function er(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function ri(e,t){t.location=y(e);const r=e.chain.map(o=>o.route).indexOf(e.route);return e.chain[r].element=t,t}function mt(e,t,r){if(U(e))return e.apply(r,t)}function rr(e,t,r){return o=>{if(o&&(o.cancel||o.redirect))return o;if(r)return mt(r[e],t,r)}}function oi(e,t){if(!Array.isArray(e)&&!xt(e))throw new Error(w(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=Et(e);for(let o=0;o<r.length;o++)Pr(r[o]),t.__children.push(r[o])}function vt(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function _t(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function Hr(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class k extends lt{constructor(t,r){const o=document.head.querySelector("base"),i=o&&o.getAttribute("href");super([],Object.assign({baseUrl:i&&lt.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},r)),this.resolveRoute=s=>this.__resolveRoute(s);const n=k.NavigationTrigger;k.setTriggers.apply(k,Object.keys(n).map(s=>n[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let o=Promise.resolve();U(r.children)&&(o=o.then(()=>r.children(ei(t))).then(n=>{!qt(n)&&!U(r.children)&&(n=r.children),oi(n,r)}));const i={redirect:n=>er(t,n),component:n=>{const s=document.createElement(n);return this.__createdByRouter.set(s,!0),s}};return o.then(()=>{if(this.__isLatestRender(t))return mt(r.action,[t,i],r)}).then(n=>{if(qt(n)&&(n instanceof HTMLElement||n.redirect||n===B))return n;if($(r.redirect))return i.redirect(r.redirect);if(r.bundle)return Po(r.bundle).then(()=>{},()=>{throw new Error(w(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(n=>{if(qt(n))return n;if($(r.component))return i.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const o=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},$(t)?{pathname:t}:t,{__renderId:o});return this.ready=this.resolve(i).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const s=this.__previousContext;if(n===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=y(n),r&&this.__updateBrowserHistory(n,o===1),et("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,s),this.__previousContext=n,this.location;this.__addAppearingContent(n,s);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,s),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(o===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(i),vt(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(i,{resolver:this})),et("error",Object.assign({router:this,error:n},i)),n}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(o=>{const n=o!==r?o:t,c=_t(Hr(o.chain),o.resolver)===o.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===B?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(o).then(l=>{if(l===null||l===B)throw Or(n);return l&&l!==B&&l!==o?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(ri(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(w(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${ko(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},o=r.chain||[],i=t.chain;let n=Promise.resolve();const s=()=>({cancel:!0}),c=a=>er(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,o.length){for(let a=0;a<Math.min(o.length,i.length)&&!(o[a].route!==i[a].route||o[a].path!==i[a].path&&o[a].element!==i[a].element||!this.__isReusableElement(o[a].element,i[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=i.length===o.length&&t.__divergedChainIndex==i.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=i.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:s},o[a]);for(let a=0;a<i.length;a++)n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:s,redirect:c},i[a]),o[a].element.location=y(t,o[a].route)}else for(let a=o.length-1;a>=t.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:s},o[a])}if(!t.__skipAttach)for(let a=0;a<i.length;a++)a<t.__divergedChainIndex?a<o.length&&o[a].element&&(o[a].element.location=y(t,o[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:s,redirect:c},i[a]),i[a].element&&(i[a].element.location=y(t,i[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,o,i){const n=y(r);return t.then(s=>{if(this.__isLatestRender(r))return rr("onBeforeLeave",[n,o,this],i.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,o,i){const n=y(r,i.route);return t.then(s=>{if(this.__isLatestRender(r))return rr("onBeforeEnter",[n,o,this],i.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,o){if(r>ti)throw new Error(w(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:o})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(w(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:o=""},i){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==o){const n=i?"replaceState":"pushState";window.history[n](null,document.title,t+r+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let o=this.__outlet;for(let i=0;i<t.__divergedChainIndex;i++){const n=r&&r.chain[i].element;if(n)if(n.parentNode===o)t.chain[i].element=n,o=n;else break}return o}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(n=>this.__addedByRouter.get(n)&&n!==t.result);let i=o;for(let n=t.__divergedChainIndex;n<t.chain.length;n++){const s=t.chain[n].element;s&&(i.appendChild(s),this.__addedByRouter.set(s,!0),i===o&&this.__appearingContent.push(s),i=s)}}__removeDisappearingContent(){this.__disappearingContent&&vt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(vt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let o=r.chain.length-1;o>=t.__divergedChainIndex&&this.__isLatestRender(t);o--){const i=r.chain[o].element;if(!!i)try{const n=y(t);mt(i.onAfterLeave,[n,{},r.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&vt(i.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const o=t.chain[r].element||{},i=y(t,t.chain[r].route);mt(o.onAfterEnter,[i,{},t.resolver],o)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],i=[],n=t.chain;let s;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){s=n[c-1].route.animate;break}if(r&&o&&s){const c=xt(s)&&s.leave||"leaving",a=xt(s)&&s.enter||"entering";i.push(tr(r,c)),i.push(tr(o,a))}return Promise.all(i).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:o,hash:i}=t?t.detail:window.location;$(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:o,hash:i},!0))}static setTriggers(...t){Xo(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=Jo(this)),_t(this.__urlForName(t,r),this)}urlForPath(t,r){return _t(k.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:o,hash:i}=$(t)?this.__createUrl(t,"http://a"):t;return et("go",{pathname:r,search:o,hash:i})}}const ii=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,yt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ni(){function e(){return!0}return zr(e)}function si(){try{return ai()?!0:li()?yt?!ci():!ni():!1}catch{return!1}}function ai(){return localStorage.getItem("vaadin.developmentmode.force")}function li(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ci(){return!!(yt&&Object.keys(yt).map(t=>yt[t]).filter(t=>t.productionMode).length>0)}function zr(e,t){if(typeof e!="function")return;const r=ii.exec(e.toString());if(r)try{e=new Function(r[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return e(t)}window.Vaadin=window.Vaadin||{};const or=function(e,t){if(window.Vaadin.developmentMode)return zr(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=si());function di(){}const ui=function(){if(typeof or=="function")return or(di)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});ui();k.NavigationTrigger={POPSTATE:Lo,CLICK:Ro};var $t=window,$e=$t.ShadowRoot&&($t.ShadyCSS===void 0||$t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),ir=new WeakMap,Dr=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($e&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ir.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ir.set(t,e))}return e}toString(){return this.cssText}},hi=e=>new Dr(typeof e=="string"?e:e+"",void 0,we),ht=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new Dr(r,e,we)},pi=(e,t)=>{$e?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),i=$t.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)})},nr=$e?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return hi(r)})(e):e,Kt,kt=window,sr=kt.trustedTypes,fi=sr?sr.emptyScript:"",ar=kt.reactiveElementPolyfillSupport,ae={toAttribute(e,t){switch(t){case Boolean:e=e?fi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},jr=(e,t)=>t!==e&&(t==t||e==e),Gt={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:jr},I=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const o=this._$Ep(r,t);o!==void 0&&(this._$Ev.set(o,r),e.push(o))}),e}static createProperty(e,t=Gt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Gt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of r)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(nr(o))}else e!==void 0&&t.push(nr(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return pi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Gt){var o;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const n=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:ae).toAttribute(t,r.type);this._$El=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(e,t){var r;const o=this.constructor,i=o._$Ev.get(e);if(i!==void 0&&this._$El!==i){const n=o.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:ae;this._$El=i,this[i]=s.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||jr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};I.finalized=!0,I.elementProperties=new Map,I.elementStyles=[],I.shadowRootOptions={mode:"open"},ar==null||ar({ReactiveElement:I}),((Kt=kt.reactiveElementVersions)!==null&&Kt!==void 0?Kt:kt.reactiveElementVersions=[]).push("1.6.1");var Zt,Pt=window,q=Pt.trustedTypes,lr=q?q.createPolicy("lit-html",{createHTML:e=>e}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,Vr="?"+x,vi=`<${Vr}>`,K=document,ct=(e="")=>K.createComment(e),dt=e=>e===null||typeof e!="object"&&typeof e!="function",Fr=Array.isArray,bi=e=>Fr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cr=/-->/g,dr=/>/g,T=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ur=/'/g,hr=/"/g,Wr=/^(?:script|style|textarea|title)$/i,gi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Ut=gi(1),P=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),pr=new WeakMap,D=K.createTreeWalker(K,129,null,!1),mi=(e,t)=>{const r=e.length-1,o=[];let i,n=t===2?"<svg>":"",s=Q;for(let a=0;a<r;a++){const l=e[a];let h,d,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===Q?d[1]==="!--"?s=cr:d[1]!==void 0?s=dr:d[2]!==void 0?(Wr.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=T):d[3]!==void 0&&(s=T):s===T?d[0]===">"?(s=i!=null?i:Q,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?T:d[3]==='"'?hr:ur):s===hr||s===ur?s=T:s===cr||s===dr?s=Q:(s=T,i=void 0);const _=s===T&&e[a+1].startsWith("/>")?" ":"";n+=s===Q?l+vi:u>=0?(o.push(h),l.slice(0,u)+"$lit$"+l.slice(u)+x+_):l+x+(u===-2?(o.push(void 0),a):_)}const c=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[lr!==void 0?lr.createHTML(c):c,o]},Ot=class{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,n=0;const s=e.length-1,c=this.parts,[a,l]=mi(e,t);if(this.el=Ot.createElement(a,r),D.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(o=D.nextNode())!==null&&c.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(x)){const u=l[n++];if(h.push(d),u!==void 0){const p=o.getAttribute(u.toLowerCase()+"$lit$").split(x),_=/([.?@])?(.*)/.exec(u);c.push({type:1,index:i,name:_[2],strings:p,ctor:_[1]==="."?yi:_[1]==="?"?wi:_[1]==="@"?Ai:Nt})}else c.push({type:6,index:i})}for(const d of h)o.removeAttribute(d)}if(Wr.test(o.tagName)){const h=o.textContent.split(x),d=h.length-1;if(d>0){o.textContent=q?q.emptyScript:"";for(let u=0;u<d;u++)o.append(h[u],ct()),D.nextNode(),c.push({type:2,index:++i});o.append(h[d],ct())}}}else if(o.nodeType===8)if(o.data===Vr)c.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(x,h+1))!==-1;)c.push({type:7,index:i}),h+=x.length-1}i++}}static createElement(e,t){const r=K.createElement("template");return r.innerHTML=e,r}};function G(e,t,r=e,o){var i,n,s,c;if(t===P)return t;let a=o!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[o]:r._$Cl;const l=dt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,o)),o!==void 0?((s=(c=r)._$Co)!==null&&s!==void 0?s:c._$Co=[])[o]=a:r._$Cl=a),a!==void 0&&(t=G(e,a._$AS(e,t.values),a,o)),t}var _i=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:r},parts:o}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:K).importNode(r,!0);D.currentNode=i;let n=D.nextNode(),s=0,c=0,a=o[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new Mt(n,n.nextSibling,this,e):a.type===1?l=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(l=new Ei(n,this,e)),this.u.push(l),a=o[++c]}s!==(a==null?void 0:a.index)&&(n=D.nextNode(),s++)}return i}p(e){let t=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Mt=class{constructor(e,t,r,o){var i;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cm=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),dt(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==P&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bi(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==g&&dt(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ot.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.p(r);else{const n=new _i(i,this),s=n.v(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let t=pr.get(e.strings);return t===void 0&&pr.set(e.strings,t=new Ot(e)),t}k(e){Fr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new Mt(this.O(ct()),this.O(ct()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Nt=class{constructor(e,t,r,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const i=this.strings;let n=!1;if(i===void 0)e=G(this,e,t,0),n=!dt(e)||e!==this._$AH&&e!==P,n&&(this._$AH=e);else{const s=e;let c,a;for(e=i[0],c=0;c<i.length-1;c++)a=G(this,s[r+c],t,c),a===P&&(a=this._$AH[c]),n||(n=!dt(a)||a!==this._$AH[c]),a===g?e=g:e!==g&&(e+=(a!=null?a:"")+i[c+1]),this._$AH[c]=a}n&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},yi=class extends Nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},$i=q?q.emptyScript:"",wi=class extends Nt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,$i):this.element.removeAttribute(this.name)}},Ai=class extends Nt{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=G(this,e,t,0))!==null&&r!==void 0?r:g)===P)return;const o=this._$AH,i=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==g&&(o===g||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Ei=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}},fr=Pt.litHtmlPolyfillSupport;fr==null||fr(Ot,Mt),((Zt=Pt.litHtmlVersions)!==null&&Zt!==void 0?Zt:Pt.litHtmlVersions=[]).push("2.6.1");var Ci=(e,t,r)=>{var o,i;const n=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=n._$litPart$;if(s===void 0){const c=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new Mt(t.insertBefore(ct(),c),c,void 0,r!=null?r:{})}return s._$AI(e),s},Jt,Xt,rt=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ci(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return P}};rt.finalized=!0,rt._$litElement$=!0,(Jt=globalThis.litElementHydrateSupport)===null||Jt===void 0||Jt.call(globalThis,{LitElement:rt});var vr=globalThis.litElementPolyfillSupport;vr==null||vr({LitElement:rt});((Xt=globalThis.litElementVersions)!==null&&Xt!==void 0?Xt:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var It=ht`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Si=ht`
  ${It}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,qr=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},Kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Gr=e=>(...t)=>({_$litDirective$:e,values:t}),Zr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Jr=Gr(class extends Zr{constructor(e){var t;if(super(e),e.type!==Kr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((r=this.st)===null||r===void 0)&&r.has(n))&&this.nt.add(n);return this.render(t)}const i=e.element.classList;this.nt.forEach(n=>{n in t||(i.remove(n),this.nt.delete(n))});for(const n in t){const s=!!t[n];s===this.nt.has(n)||((o=this.st)===null||o===void 0?void 0:o.has(n))||(s?(i.add(n),this.nt.add(n)):(i.remove(n),this.nt.delete(n)))}return P}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Xr=Object.defineProperty,xi=Object.defineProperties,ki=Object.getOwnPropertyDescriptor,Pi=Object.getOwnPropertyDescriptors,br=Object.getOwnPropertySymbols,Oi=Object.prototype.hasOwnProperty,Ri=Object.prototype.propertyIsEnumerable,gr=(e,t,r)=>t in e?Xr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))Oi.call(t,r)&&gr(e,r,t[r]);if(br)for(var r of br(t))Ri.call(t,r)&&gr(e,r,t[r]);return e},pt=(e,t)=>xi(e,Pi(t)),f=(e,t,r,o)=>{for(var i=o>1?void 0:o?ki(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&Xr(t,r,i),i},Bt=e=>t=>typeof t=="function"?((r,o)=>(customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:i,elements:n}=o;return{kind:i,elements:n,finisher(s){customElements.define(r,s)}}})(e,t),Ti=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?pt(O({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function b(e){return(t,r)=>r!==void 0?((o,i,n)=>{i.constructor.createProperty(n,o)})(e,t,r):Ti(e,t)}function Ae(e){return b(pt(O({},e),{state:!0}))}var Li=({finisher:e,descriptor:t})=>(r,o)=>{var i;if(o===void 0){const n=(i=r.originalKey)!==null&&i!==void 0?i:r.key,s=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(r.key)}:pt(O({},r),{key:n});return e!=null&&(s.finisher=function(c){e(c,n)}),s}{const n=r.constructor;t!==void 0&&Object.defineProperty(r,o,t(o)),e==null||e(n,o)}};function Ui(e,t){return Li({descriptor:r=>{const o={get(){var i,n;return(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;o.get=function(){var n,s;return this[i]===void 0&&(this[i]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&s!==void 0?s:null),this[i]}}return o}})}var Qt;((Qt=window.HTMLSlotElement)===null||Qt===void 0?void 0:Qt.prototype.assignedElements)!=null;var J=class extends rt{emit(e,t){const r=new CustomEvent(e,O({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};f([b()],J.prototype,"dir",2);f([b()],J.prototype,"lang",2);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var le=class extends J{constructor(){super(...arguments),this.hasSlotController=new qr(this,"footer","header","image")}render(){return Ut`
      <div
        part="base"
        class=${Jr({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};le.styles=Si;le=f([Bt("sl-card")],le);var Mi=ht`
  ${It}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Y=new WeakMap,tt=new WeakMap,Yt=new Set,bt=new WeakMap,Ni=class{constructor(e,t){(this.host=e).addController(this),this.options=O({form:r=>{if(r.hasAttribute("form")&&r.getAttribute("form")!==""){const o=r.getRootNode(),i=r.getAttribute("form");if(i)return o.getElementById(i)}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),bt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),bt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Y.has(this.form)?Y.get(this.form).add(this.host):Y.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),tt.has(this.form)||(tt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=Y.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),tt.has(this.form)&&(this.form.reportValidity=tt.get(this.form),tt.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),i=this.host.tagName.toLowerCase()==="sl-button";!t&&!i&&typeof r=="string"&&r.length>0&&typeof o!="undefined"&&(Array.isArray(o)?o.forEach(n=>{e.formData.append(r,n.toString())}):e.formData.append(r,o.toString()))}handleFormSubmit(e){var t;const r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Y.get(this.form))==null||t.forEach(i=>{this.setUserInteracted(i,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),bt.set(this.host,[])}handleInteraction(e){const t=bt.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){t?Yt.add(e):Yt.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=Boolean(Yt.has(t)),o=Boolean(t.required);t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Ee=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(pt(O({},Ee),{valid:!1,valueMissing:!0}));Object.freeze(pt(O({},Ee),{valid:!1,customError:!0}));var Qr=Symbol.for(""),Ii=e=>{if((e==null?void 0:e.r)===Qr)return e==null?void 0:e._$litStatic$},mr=(e,...t)=>({_$litStatic$:t.reduce((r,o,i)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]),r:Qr}),_r=new Map,Bi=e=>(t,...r)=>{const o=r.length;let i,n;const s=[],c=[];let a,l=0,h=!1;for(;l<o;){for(a=t[l];l<o&&(n=r[l],(i=Ii(n))!==void 0);)a+=i+t[++l],h=!0;c.push(n),s.push(a),l++}if(l===o&&s.push(t[o]),h){const d=s.join("$$lit$$");(t=_r.get(d))===void 0&&(s.raw=s,_r.set(d,t=s)),r=c}return e(t,...r)},te=Bi(Ut);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var ce=new Set,Hi=new MutationObserver(eo),H=new Map,Yr=document.documentElement.dir||"ltr",to=document.documentElement.lang||navigator.language,ot;Hi.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function zi(...e){e.map(t=>{const r=t.$code.toLowerCase();H.has(r)?H.set(r,Object.assign(Object.assign({},H.get(r)),t)):H.set(r,t),ot||(ot=t)}),eo()}function eo(){Yr=document.documentElement.dir||"ltr",to=document.documentElement.lang||navigator.language,[...ce.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Di=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ce.add(this.host)}hostDisconnected(){ce.delete(this.host)}dir(){return`${this.host.dir||Yr}`.toLowerCase()}lang(){return`${this.host.lang||to}`.toLowerCase()}term(e,...t){var r,o;const i=new Intl.Locale(this.lang()),n=i==null?void 0:i.language.toLowerCase(),s=(o=(r=i==null?void 0:i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",c=H.get(`${n}-${s}`),a=H.get(n);let l;if(c&&c[e])l=c[e];else if(a&&a[e])l=a[e];else if(ot&&ot[e])l=ot[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof l=="function"?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},ro=class extends Di{},ji={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};zi(ji);var E=e=>e!=null?e:g;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function Ce(e,t){const r=O({waitUntilFirstUpdate:!1},t);return(o,i)=>{const{update:n}=o,s=Array.isArray(e)?e:[e];o.update=function(c){s.forEach(a=>{const l=a;if(c.has(l)){const h=c.get(l),d=this[l];h!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,d)}}),n.call(this,c)}}}var v=class extends J{constructor(){super(...arguments),this.formControlController=new Ni(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new qr(this,"[default]","prefix","suffix"),this.localize=new ro(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ee}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleHostClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?mr`a`:mr`button`;return te`
      <${t}
        part="base"
        class=${Jr({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${E(e?void 0:this.disabled)}
        type=${E(e?void 0:this.type)}
        title=${this.title}
        name=${E(e?void 0:this.name)}
        value=${E(e?void 0:this.value)}
        href=${E(e?this.href:void 0)}
        target=${E(e?this.target:void 0)}
        download=${E(e?this.download:void 0)}
        rel=${E(e?this.rel:void 0)}
        role=${E(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?te` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?te`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};v.styles=Mi;f([Ui(".button")],v.prototype,"button",2);f([Ae()],v.prototype,"hasFocus",2);f([Ae()],v.prototype,"invalid",2);f([b()],v.prototype,"title",2);f([b({reflect:!0})],v.prototype,"variant",2);f([b({reflect:!0})],v.prototype,"size",2);f([b({type:Boolean,reflect:!0})],v.prototype,"caret",2);f([b({type:Boolean,reflect:!0})],v.prototype,"disabled",2);f([b({type:Boolean,reflect:!0})],v.prototype,"loading",2);f([b({type:Boolean,reflect:!0})],v.prototype,"outline",2);f([b({type:Boolean,reflect:!0})],v.prototype,"pill",2);f([b({type:Boolean,reflect:!0})],v.prototype,"circle",2);f([b()],v.prototype,"type",2);f([b()],v.prototype,"name",2);f([b()],v.prototype,"value",2);f([b()],v.prototype,"href",2);f([b()],v.prototype,"target",2);f([b()],v.prototype,"rel",2);f([b()],v.prototype,"download",2);f([b()],v.prototype,"form",2);f([b({attribute:"formaction"})],v.prototype,"formAction",2);f([b({attribute:"formenctype"})],v.prototype,"formEnctype",2);f([b({attribute:"formmethod"})],v.prototype,"formMethod",2);f([b({attribute:"formnovalidate",type:Boolean})],v.prototype,"formNoValidate",2);f([b({attribute:"formtarget"})],v.prototype,"formTarget",2);f([Ce("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1);v=f([Bt("sl-button")],v);var Vi=ht`
  ${It}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,de=class extends J{constructor(){super(...arguments),this.localize=new ro(this)}render(){return Ut`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};de.styles=Vi;de=f([Bt("sl-spinner")],de);var ue="";function yr(e){ue=e}function Fi(){if(!ue){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)yr(t.getAttribute("data-shoelace"));else{const r=e.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src));let o="";r&&(o=r.getAttribute("src")),yr(o.split("/").slice(0,-1).join("/"))}}return ue.replace(/\/$/,"")}var Wi={name:"default",resolver:e=>`${Fi()}/assets/icons/${e}.svg`},qi=Wi,$r={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ki={name:"system",resolver:e=>e in $r?`data:image/svg+xml,${encodeURIComponent($r[e])}`:""},Gi=Ki,Zi=[qi,Gi],he=[];function Ji(e){he.push(e)}function Xi(e){he=he.filter(t=>t!==e)}function wr(e){return Zi.find(t=>t.name===e)}var ee=new Map;function Qi(e,t="cors"){if(ee.has(e))return ee.get(e);const r=fetch(e,{mode:t}).then(async o=>({ok:o.ok,status:o.status,html:await o.text()}));return ee.set(e,r),r}var re=new Map;async function Yi(e){if(re.has(e))return re.get(e);const t=await Qi(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const o=document.createElement("div");o.innerHTML=t.html;const i=o.firstElementChild;r.svg=(i==null?void 0:i.tagName.toLowerCase())==="svg"?i.outerHTML:""}return re.set(e,r),r}var tn=ht`
  ${It}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,pe=class extends Zr{constructor(e){if(super(e),this.it=g,e.type!==Kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===P)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};pe.directiveName="unsafeHTML",pe.resultType=1;var fe=class extends pe{};fe.directiveName="unsafeSVG",fe.resultType=2;var en=Gr(fe),oe,A=class extends J{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Ji(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Xi(this)}getUrl(){const e=wr(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=wr(this.library),r=this.getUrl();if(oe||(oe=new DOMParser),r)try{const o=await Yi(r);if(r!==this.getUrl())return;if(o.ok){const n=oe.parseFromString(o.svg,"text/html").body.querySelector("svg");n!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,n),this.svg=n.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return Ut` ${en(this.svg)} `}};A.styles=tn;f([Ae()],A.prototype,"svg",2);f([b({reflect:!0})],A.prototype,"name",2);f([b()],A.prototype,"src",2);f([b()],A.prototype,"label",2);f([b({reflect:!0})],A.prototype,"library",2);f([Ce("label")],A.prototype,"handleLabelChange",1);f([Ce(["name","src","library"])],A.prototype,"setIcon",1);A=f([Bt("sl-icon")],A);/*! Bundled license information:

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/const rn=Tt`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var on=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,oo=(e,t,r,o)=>{for(var i=o>1?void 0:o?nn(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&on(t,r,i),i};let ve=class extends L{constructor(){super(),this.message="Welcome!"}static get styles(){return[rn,Tt`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `]}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return st`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://github.com/pwa-builder/pwa-starter/wiki/Getting-Started">
                Documentation on Github</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${"share"in navigator?st`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`:null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  >Vaadin Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${"/SafetTest/"}about" variant="primary">Navigate to About</sl-button>
          <sl-button href="${"/SafetTest/"}new-page" variant="primary">Navigate to New Page</sl-button>
        </div>
      </main>
    `}};oo([_e()],ve.prototype,"message",2);ve=oo([me("app-home")],ve);var sn=Object.defineProperty,an=Object.getOwnPropertyDescriptor,Se=(e,t,r,o)=>{for(var i=o>1?void 0:o?an(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&sn(t,r,i),i};let Rt=class extends L{constructor(){super(),this.title="PWA Starter",this.enableBack=!1}static get styles(){return Tt`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
        padding-left: 16px;
        padding-top: 12px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 50px);
        width: env(titlebar-area-width, 100%);
        -webkit-app-region: drag;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav a {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav a {
          color: initial;
        }
      }
    `}render(){return st`
      <header>

        <div id="back-button-block">
          ${this.enableBack?st`<sl-button href="${"/SafetTest/"}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};Se([_e({type:String})],Rt.prototype,"title",2);Se([_e({type:Boolean})],Rt.prototype,"enableBack",2);Rt=Se([me("app-header")],Rt);var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,dn=(e,t,r,o)=>{for(var i=o>1?void 0:o?cn(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(o?s(t,r,i):s(i))||i);return o&&i&&ln(t,r,i),i};let Ar=class extends L{static get styles(){return Tt`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var t;new k((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"/SafetTest/",animate:!0,children:[{path:"",component:"app-home"},{path:"about",component:"app-about",action:async()=>{await Oe(()=>import("./app-about.6ef076ab.js"),[])}},{path:"new-page",component:"new-page",action:async()=>{await Oe(()=>import("./new-page.037263fe.js"),[])}}]}])}render(){return st`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};Ar=dn([me("app-index")],Ar);export{rn as a,me as e,Tt as i,L as s,st as y};
//# sourceMappingURL=index.2b283ae5.js.map
