import{$ as Ns$1,$n as se$2,$t as be$1,A as Gh,An as lD,At as W$1,B as Kh,Bn as pD,Bt as Xi$1,Cn as hr$1,Cr as s,Ct as UI,D as FF,Dn as je$3,Dt as VF,E as Ep,En as jF,Et as Um,F as Ip,Ft as Wm,G as Lp,Gn as qg,Gt as _$1,H as Ld,Hn as po,Ht as Y$1,I as Ir,In as ns$1,It as Wt$2,Jn as ra$1,Jt as _p,K as M$1,Kn as qh,Kt as _E,L as Jh,Ln as nt$2,Lt as XE,M as Gt$2,Mn as ly,Mt as Wf,Nt as Wg,O as Fe$2,On as kn$1,Ot as Vh,P as Hn$1,Pn as na$1,Pt as Wh,Q as Np,Qn as sE,Qt as au$1,R as Ji$1,Rn as oe$1,Rt as Xa$1,Sn as hh,Sr as r,Tn as ir$1,Tt as Uh,U as Ll$1,Ut as YI,V as LF,Vn as pE,Vt as Xo$1,W as Lm,Wt as Zp,X as Nc$1,Xn as rn$1,Y as NE,Yn as rg,Yt as aD,Z as Nm,Zn as sD,Zt as ap,_ as Ce$1,_n as ge$1,_t as Sp,an as cu$1,ar as ut$2,at as PF,bn as hE,br as zi$1,bt as Tn,c as Ah,cn as dg,cr as wt$3,ct as QI,d as Bh,en as bi$1,er as sg,et as Nu$1,f as Bn$1,fn as ec$1,fr as xF,g as Cc$1,gn as fv,gr as xu$1,gt as Sh,h as CE,ht as Sc$1,i as $t$2,in as cg,ir as uE,it as P$1,j as Gm,jn as lm,jt as WI,k as Gg,kn as kp,kt as Vn$1,ln as di$2,lt as Qh,m as By,mn as er$1,mr as xh,mt as SE,n as $g$1,nr as sp,nt as Oa$1,o as AF,on as dD,or as v,p as Bp,pr as xc$1,pt as S$1,qn as qm,qt as _e$1,r as $h,sn as dE,sr as vp,st as Po,t as $E,tn as bn,tr as sn$1,u as BF,un as dp,ur as wy,ut as Qp,v as Ci$1,vn as go,vr as z$2,vt as Su$1,w as EE,wn as ig,wr as t,wt as Ue$2,x as Dp,xn as he$2,xr as zm,xt as To,y as Cr$1,yn as gp,yr as zh,yt as TE,z as Jo$1,zn as og,zt as Xh}from"./chunk-Cq8j8mwn.js";var Uo=null;function be(){return Uo}function Gr(t){Uo??=t}var Bt$1=class{};var st$1=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||t)};static ɵprov=oe$1({token:t,factory:()=>v(Bo),providedIn:`platform`})}return t})();var Bo=(()=>{class t extends st$1{_location;_history;_doc=v(ir$1);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return be().getBaseHref(this._doc)}onPopState(e){let n=be().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`popstate`,e,!1),()=>n.removeEventListener(`popstate`,e)}onHashChange(e){let n=be().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`hashchange`,e,!1),()=>n.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(n){return new(n||t)};static ɵprov=oe$1({token:t,factory:()=>new t,providedIn:`platform`})}return t})();function zo(t,r){return t?r?t.endsWith(`/`)?r.startsWith(`/`)?t+r.slice(1):t+r:r.startsWith(`/`)?t+r:`${t}/${r}`:t:r}function jo(t){let r=t.search(/#|\?|$/);return t[r-1]===`/`?t.slice(0,r-1)+t.slice(r):t}function Te$2(t){return t&&t[0]!==`?`?`?${t}`:t}var ct$2=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||t)};static ɵprov=oe$1({token:t,factory:()=>v(Vs),providedIn:`root`})}return t})();var Hs=new S$1(``);var Vs=(()=>{class t extends ct$2{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??v(ir$1).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return zo(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Te$2(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let a=this.prepareExternalUrl(i+Te$2(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,i,o){let a=this.prepareExternalUrl(i+Te$2(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(n){return new(n||t)(_e$1(st$1),_e$1(Hs,8))};static ɵprov=oe$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ut$1=(()=>{class t{_subject=new Y$1;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=qs(jo($o(n))),this._locationStrategy.onPopState(i=>{let o={url:this.path(!0),pop:!0,state:i.state,type:i.type};i.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=``){return this.path()==this.normalize(e+Te$2(n))}normalize(e){return t.stripTrailingSlash(Ws(this._basePath,$o(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n=``,i=null){this._locationStrategy.pushState(i,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Te$2(n)),i)}replaceState(e,n=``,i=null){this._locationStrategy.replaceState(i,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Te$2(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=Te$2;static joinWithSlash=zo;static stripTrailingSlash=jo;static ɵfac=function(n){return new(n||t)(_e$1(ct$2))};static ɵprov=oe$1({token:t,factory:()=>Gs(),providedIn:`root`})}return t})();function Gs(){return new ut$1(_e$1(ct$2))}function Ws(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:r}function $o(t){return t.replace(/\/index\.html$/,``)}function qs(t){if(new RegExp(`^(https?:)?//`).test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Ks=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=v(he$2);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static ɵfac=function(n){return new(n||t)(bi$1(Ci$1))};static ɵdir=QI({type:t,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[lm]})}return t})();function jt$1(t,r){r=encodeURIComponent(r);for(let e of t.split(`;`)){let n=e.indexOf(`=`),[i,o]=n==-1?[e,``]:[e.slice(0,n),e.slice(n+1)];if(i.trim()!==r)continue;let a=o;try{a=decodeURIComponent(o)}catch(c){}return a.length>1&&a[0]===`"`&&a[a.length-1]===`"`&&(a=a.slice(1,-1)),a}return null}var Wr=`browser`;function Ho(t){return t===Wr}var $t$1=class{_doc;constructor(r){this._doc=r}manager};var Mn=(()=>{class t extends $t$1{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,o){return e.addEventListener(n,i,o),()=>this.removeEventListener(e,n,i,o)}removeEventListener(e,n,i,o){return e.removeEventListener(n,i,o)}static ɵfac=function(n){return new(n||t)(_e$1(ir$1))};static ɵprov=oe$1({token:t,factory:t.ɵfac})}return t})();var Fn=new S$1(``);var Yr=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof Mn));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof Mn);o&&this._plugins.push(o)}addEventListener(e,n,i,o){return this._findPluginFor(n).addEventListener(e,n,i,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new M$1(-5101,!1);return this._eventNameToPlugin.set(e,n),n}static ɵfac=function(n){return new(n||t)(_e$1(Fn),_e$1(z$2))};static ɵprov=oe$1({token:t,factory:t.ɵfac})}return t})();var qr=`ng-app-id`;function Vo(t){for(let r of t)r.remove()}function Go(t,r){let e=r.createElement(`style`);return e.textContent=t,e}function Qs(t,r,e,n){let i=t.head?.querySelectorAll(`style[${qr}="${r}"],link[${qr}="${r}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute(qr),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Zr(t,r){let e=r.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,t),e}var Xr=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,o={}){this.doc=e,this.appId=n,this.nonce=i,Qs(e,n,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,Go);n?.forEach(i=>this.addUsage(i,this.external,Zr))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(Vo(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Vo(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,Go(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,Zr(n,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let n of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of n.elements)o.parentNode===e?o.remove():i.push(o);n.elements=i}}addElement(e,n){return this.nonce&&n.setAttribute(`nonce`,this.nonce),e.appendChild(n)}static ɵfac=function(n){return new(n||t)(_e$1(ir$1),_e$1(Nu$1),_e$1(Gg,8),_e$1(qg))};static ɵprov=oe$1({token:t,factory:t.ɵfac})}return t})();var Kr={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var Jr=/%COMP%/g;var qo=`%COMP%`;var ec=`_nghost-${qo}`;var tc=`_ngcontent-${qo}`;var nc=!0;var rc=new S$1(``,{factory:()=>nc});var ic=new S$1(``);function oc(t){return tc.replace(Jr,t)}function ac(t){return ec.replace(Jr,t)}function Ko(t,r){return r.map(e=>e.replace(Jr,t))}var Qr=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,n,i,o,a,c,s=null,l=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=c,this.nonce=s,this.tracingService=l,this.cssVarNamespace=d??``,this.defaultRenderer=new zt$1(e,a,c,this.tracingService,this.cssVarNamespace)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof On?i.applyToHost(e):i instanceof Ht$1&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,o=i.get(n.id);if(!o){let a=this.doc,c=this.ngZone,s=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case $t$2.Emulated:o=new On(s,l,n,this.appId,d,a,c,f,this.cssVarNamespace);break;case $t$2.ShadowDom:return new xn(s,e,n,a,c,this.nonce,f,this.cssVarNamespace,l);case $t$2.ExperimentalIsolatedShadowDom:return new xn(s,e,n,a,c,this.nonce,f,this.cssVarNamespace);default:o=new Ht$1(s,l,n,d,a,c,f,this.cssVarNamespace);break}i.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(n){return new(n||t)(_e$1(Yr),_e$1(Wf),_e$1(Nu$1),_e$1(rc),_e$1(ir$1),_e$1(z$2),_e$1(Gg),_e$1(Gt$2,8),_e$1(ic,8))};static ɵprov=oe$1({token:t,factory:t.ɵfac})}return t})();var zt$1=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,i,o=``){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=i,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(Kr[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Wo(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){if(r){let i=Wo(r)?r.content:r;if(n!=null&&n.parentNode!==i)throw new M$1(-5106,!1);i.insertBefore(e,n)}}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r==`string`?this.doc.querySelector(r):r;if(!n)throw new M$1(-5104,!1);return e||(n.textContent=``),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,i){if(i){e=i+`:`+e;let o=Kr[i];o?r.setAttributeNS(o,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let i=Kr[n];i?r.removeAttributeNS(i,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,i){let o=e.startsWith(`--`);o&&(e=e.replace(`%NS%`,this.cssVarNamespace)),o||i&(Xo$1.DashCase|Xo$1.Important)?r.style.setProperty(e,n,i&Xo$1.Important?`important`:``):r.style[e]=n}removeStyle(r,e,n){let i=e.startsWith(`--`);i&&(e=e.replace(`%NS%`,this.cssVarNamespace)),i||n&Xo$1.DashCase?r.style.removeProperty(e):r.style[e]=``}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,i){if(typeof r==`string`&&(r=be().getGlobalEventTarget(this.doc,r),!r))throw new M$1(-5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e===`__ngUnwrap__`)return r;r(e)===!1&&e.preventDefault()}}};function Wo(t){return t.tagName===`TEMPLATE`&&t.content!==void 0}var xn=class extends zt$1{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,i,o,a,c,s,l){super(r,i,o,c,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=Ko(n.id,d).map(m=>m.replace(/%NS%/g,s));for(let m of d){let S=document.createElement(`style`);a&&S.setAttribute(`nonce`,a),S.textContent=m,this.shadowRoot.appendChild(S)}let f=n.getExternalStyles?.();if(f)for(let m of f){let S=Zr(m,i);a&&S.setAttribute(`nonce`,a),this.shadowRoot.appendChild(S)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var Ht$1=class extends zt$1{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,i,o,a,c,s,l){super(r,o,a,c,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let d=n.styles,f=l?Ko(l,d):d;this.styles=f.map(m=>m.replace(/%NS%/g,s)),this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&bn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var On=class extends Ht$1{contentAttr;hostAttr;constructor(r,e,n,i,o,a,c,s,l){let d=i+`-`+n.id;super(r,e,n,o,a,c,s,l,d),this.contentAttr=oc(d),this.hostAttr=ac(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,``)}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,``),n}};var Pn=class t extends Bt$1{supportsDOMEvents=!0;static makeCurrent(){Gr(new t)}onAndCancel(r,e,n,i){return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e===`window`?window:e===`document`?r:e===`body`?r.body:null}getBaseHref(r){let e=cc();return e==null?null:uc(e)}resetBaseElement(){Vt$1=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return jt$1(document.cookie,r)}};var Vt$1=null;function cc(){return Vt$1=Vt$1||document.head.querySelector(`base`),Vt$1?Vt$1.getAttribute(`href`):null}function uc(t){return new URL(t,document.baseURI).pathname}var Zo=[`alt`,`control`,`meta`,`shift`];var lc={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var dc={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};var Yo=(()=>{class t extends $t$1{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,i,o){let a=t.parseEventName(n),c=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>be().onAndCancel(e,a.domEventName,c,o))}static parseEventName(e){let n=e.toLowerCase().split(`.`),i=n.shift();if(n.length===0||!(i===`keydown`||i===`keyup`))return null;let o=t._normalizeKey(n.pop()),a=``,c=n.indexOf(`code`);if(c>-1&&(n.splice(c,1),a=`code.`),Zo.forEach(l=>{let d=n.indexOf(l);d>-1&&(n.splice(d,1),a+=l+`.`)}),a+=o,n.length!=0||o.length===0)return null;let s={};return s.domEventName=i,s.fullKey=a,s}static matchEventFullKeyCode(e,n){let i=lc[e.key]||e.key,o=``;return n.indexOf(`code.`)>-1&&(i=e.code,o=`code.`),i==null||!i?!1:(i=i.toLowerCase(),i===` `?i=`space`:i===`.`&&(i=`dot`),Zo.forEach(a=>{if(a!==i){let c=dc[a];c(e)&&(o+=a+`.`)}}),o+=i,o===n)}static eventCallback(e,n,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>n(o))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(n){return new(n||t)(_e$1(ir$1))};static ɵprov=oe$1({token:t,factory:t.ɵfac})}return t})();function hc(t$1,r$5,e){return t(this,null,function*(){return FF(r({rootComponent:t$1},fc(r$5,e)))})}function fc(t,r){return{platformRef:r?.platformRef,appProviders:[...vc,...t?.providers??[]],platformProviders:bc}}function mc(){Pn.makeCurrent()}function pc(){return new nt$2}function gc(){return Lm(document),document}var bc=[{provide:qg,useValue:Wr},{provide:Su$1,useValue:mc,multi:!0},{provide:ir$1,useFactory:gc}];var vc=[{provide:Ns$1,useValue:`root`},{provide:nt$2,useFactory:pc},{provide:Fn,useClass:Mn,multi:!0},{provide:Fn,useClass:Yo,multi:!0},Qr,{provide:Wf,useClass:Xr},{provide:Xr,useExisting:Wf},Yr,{provide:hr$1,useExisting:Qr},[]];var ye$1=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r==`string`?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(`:`);if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<`u`&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:`a`})}set(r,e){return this.clone({name:r,value:e,op:`s`})}delete(r,e){return this.clone({name:r,value:e,op:`d`})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init();for(let[e,n]of r.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,r.normalizedNames.get(e))}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case`a`:case`s`:let n=r.value;if(typeof n==`string`&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=r.op===`a`?(this.headers.get(e)||[]).slice():[];i.push(...n),this.headers.set(e,i);break;case`d`:let o=r.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],c=this.headers.get(e);if(!c)return;c=c.filter(s=>a.indexOf(s)===-1),c.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var kn=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}};var Un=class{encodeKey(r){return Xo(r)}encodeValue(r){return Xo(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function yc(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,``).split(`&`).forEach(i=>{let o=i.indexOf(`=`),[a,c]=o==-1?[r.decodeKey(i),``]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],s=e.get(a)||[];s.push(c),e.set(a,s)}),e}var _c=/%(\d[a-f0-9])/gi;var Dc={40:`@`,"3A":`:`,24:`$`,"2C":`,`,"3B":`;`,"3D":`=`,"3F":`?`,"2F":`/`};function Xo(t){return encodeURIComponent(t).replace(_c,(r,e)=>Dc[e]??r)}function Ln(t){return`${t}`}var ve=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new Un,r.fromString){if(r.fromObject)throw new M$1(2805,!1);this.map=yc(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(Ln):[Ln(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:`a`})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:`a`})}):e.push({param:n,value:i,op:`a`})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:`s`})}delete(r,e){return this.clone({param:r,value:e,op:`d`})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+`=`+this.encoder.encodeValue(n)).join(`&`)}).filter(r=>r!==``).join(`&`)}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[r,e]of this.cloneFrom.map.entries())this.map.set(r,e);this.updates.forEach(r=>{switch(r.op){case`a`:case`s`:let e=r.op===`a`?(this.map.get(r.param)||[]).slice():[];e.push(Ln(r.value)),this.map.set(r.param,e);break;case`d`:if(r.value!==void 0){let n=(this.map.get(r.param)||[]).slice(),i=n.indexOf(Ln(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null}}};function Sc(t){switch(t){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function Jo(t){return typeof ArrayBuffer<`u`&&t instanceof ArrayBuffer}function Qo(t){return typeof Blob<`u`&&t instanceof Blob}function ea(t){return typeof FormData<`u`&&t instanceof FormData}function wc(t){return typeof URLSearchParams<`u`&&t instanceof URLSearchParams}var ei$1=`Content-Type`;var ta=`Accept`;var ia=`text/plain`;var oa=`application/json`;var Ec=`${oa}, ${ia}, */*`;var lt$2=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(Sc(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout==`number`){if(o.timeout<1||!Number.isInteger(o.timeout))throw new M$1(2822,``);this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new ye$1,this.context??=new kn,!this.params)this.params=new ve,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let c=e,s=``,l=e.indexOf(`#`);l!==-1&&(s=e.substring(l),c=e.substring(0,l));let d=c.indexOf(`?`),f=d===-1?`?`:d<c.length-1?`&`:``;this.urlWithParams=c+f+a+s}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||Jo(this.body)||Qo(this.body)||ea(this.body)||wc(this.body)?this.body:this.body instanceof ve?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ea(this.body)?null:Qo(this.body)?this.body.type||null:Jo(this.body)?null:typeof this.body==`string`?ia:this.body instanceof ve?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?oa:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,c=r.cache||this.cache,s=r.mode||this.mode,l=r.redirect||this.redirect,d=r.credentials||this.credentials,f=r.referrer??this.referrer,m=r.integrity||this.integrity,S=r.referrerPolicy||this.referrerPolicy,x=r.transferCache??this.transferCache,O=r.timeout??this.timeout,T=r.body!==void 0?r.body:this.body,ue=r.withCredentials??this.withCredentials,U=r.reportProgress??this.reportProgress,B=r.reportUploadProgress??this.reportUploadProgress,Nt=r.reportDownloadProgress??this.reportDownloadProgress,Ee=r.headers||this.headers,Rt=r.params||this.params,Tt=r.context??this.context;return r.setHeaders!==void 0&&(Ee=Object.keys(r.setHeaders).reduce((Ge,Ce)=>Ge.set(Ce,r.setHeaders[Ce]),Ee)),r.setParams&&(Rt=Object.keys(r.setParams).reduce((Ge,Ce)=>Ge.set(Ce,r.setParams[Ce]),Rt)),new t(e,n,T,{params:Rt,headers:Ee,context:Tt,reportProgress:U,reportUploadProgress:B,reportDownloadProgress:Nt,responseType:i,withCredentials:ue,transferCache:x,keepalive:o,cache:c,priority:a,timeout:O,mode:s,redirect:l,credentials:d,referrer:f,integrity:m,referrerPolicy:S})}};var Pe$2=(function(t){return t[t.Sent=0]=`Sent`,t[t.UploadProgress=1]=`UploadProgress`,t[t.ResponseHeader=2]=`ResponseHeader`,t[t.DownloadProgress=3]=`DownloadProgress`,t[t.Response=4]=`Response`,t[t.User=5]=`User`,t})(Pe$2||{});var dt$2=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n=`OK`){this.headers=r.headers||new ye$1,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}};var Bn=class t extends dt$2{constructor(r={}){super(r)}type=Pe$2.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}};var Gt$1=class t extends dt$2{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=Pe$2.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}};var Fe$1=class extends dt$2{name=`HttpErrorResponse`;message;error;ok=!1;constructor(r){super(r,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||`(unknown url)`}`:this.message=`Http failure response for ${r.url||`(unknown url)`}: ${r.status} ${r.statusText}`,this.error=r.error||null}};var Cc=200;var Ac=/^\)\]\}',?\n/;var aa=new S$1(``,{factory:()=>null});var jn=(()=>{class t$2{fetchImpl=v(ni$1,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=v(z$2);destroyRef=v(ge$1);maxResponseSize=v(aa);handle(e){return new _$1(n=>{let i=new AbortController,o=!1,a={next:s=>{s.type===Pe$2.Response&&(o=!0),n.next(s)},error:s=>{o=!0,n.error(s)},complete:()=>{o=!0,n.complete()}};this.doRequest(e,i.signal,a).then(ri$1,s=>a.error(new Fe$1({error:s})));let c;return e.timeout&&(c=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{c!==void 0&&clearTimeout(c),!o&&!i.signal.aborted&&i.abort()}})}doRequest(e,n,i){return t(this,null,function*(){let o=this.createRequestInit(e),a;try{let T=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,r({signal:n},o)));Nc(T),i.next({type:Pe$2.Sent}),a=yield T}catch(T){i.error(new Fe$1({error:T,status:T.status??0,statusText:T.statusText,url:e.urlWithParams,headers:T.headers}));return}let c=new ye$1(a.headers),s=a.statusText,l=a.url||e.urlWithParams,d=a.status,f=null,m=e.reportProgress||e.reportDownloadProgress;if(m&&i.next(new Bn({headers:c,status:d,statusText:s,url:l})),a.body){let T=a.headers.get(ei$1)??``,ue=a.headers.get(`content-length`),U=ue!==null?Number(ue):NaN;this.maxResponseSize!==null&&Number.isFinite(U)&&U>this.maxResponseSize&&(yield a.body.cancel(),na(this.maxResponseSize));let B=[],Nt=a.body.getReader(),Ee=0,Rt,Tt,Ge=typeof Zone<`u`&&Zone.current,Ce=!1;if(yield this.ngZone.runOutsideAngular(()=>t(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield Nt.cancel(),Ce=!0;break}let{done:Tr,value:Ir}=yield Nt.read();if(Tr)break;if(B.push(Ir),Ee+=Ir.length,this.maxResponseSize!==null&&Ee>this.maxResponseSize&&(yield Nt.cancel(),na(this.maxResponseSize)),m){Tt=e.responseType===`text`?(Tt??``)+(Rt??=ra(T)).decode(Ir,{stream:!0}):void 0;let eo=()=>i.next({type:Pe$2.DownloadProgress,total:Number.isFinite(U)?U:void 0,loaded:Ee,partialText:Tt});Ge?Ge.run(eo):eo()}}})),Ce){i.complete();return}let zs=this.concatChunks(B,Ee);try{f=this.parseBody(e,zs,T,d)}catch(Tr){i.error(new Fe$1({error:Tr,headers:new ye$1(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}d===0&&(d=f?Cc:0);let S=d>=200&&d<300,x=a.redirected,O=a.type;S?(i.next(new Gt$1({body:f,headers:c,status:d,statusText:s,url:l,redirected:x,responseType:O})),i.complete()):i.error(new Fe$1({error:f,headers:c,status:d,statusText:s,url:l,redirected:x,responseType:O}))})}parseBody(e,n,i,o){switch(e.responseType){case`json`:let a=new TextDecoder().decode(n).replace(Ac,``);if(a===``)return null;try{return JSON.parse(a)}catch(c){if(o<200||o>=300)return a;throw c}case`text`:return ra(i).decode(n);case`blob`:return new Blob([n],{type:i});case`arraybuffer`:return n.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new M$1(2824,!1);let n={},i;if(i=e.credentials,e.withCredentials&&(i=`include`),e.headers.forEach((o,a)=>n[o]=a.join(`,`)),e.headers.has(ta)||(n[ta]=Ec),!e.headers.has(ei$1)){let o=e.detectContentTypeHeader();o!==null&&(n[ei$1]=o)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:i,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let i=new Uint8Array(n),o=0;for(let a of e)i.set(a,o),o+=a.length;return i}static ɵfac=function(n){return new(n||t$2)};static ɵprov=Wt$2({token:t$2,factory:t$2.ɵfac})}return t$2})();var ni$1=class{};function ri$1(){}function Nc(t){t.then(ri$1,ri$1)}function na(t){throw new M$1(-2825,!1)}var Rc=/charset=\s*["']?([^;"'\s]+)["']?/i;function ra(t){let r=t.match(Rc);if(r!==null)try{return new TextDecoder(r[1])}catch(e){}return new TextDecoder}var Tc=new S$1(``,{factory:()=>!0});var Ic=`XSRF-TOKEN`;var Mc=new S$1(``,{factory:()=>Ic});var xc=`X-XSRF-TOKEN`;var Oc=new S$1(``,{factory:()=>xc});var Fc=(()=>{class t{cookieName=v(Mc);doc=v(ir$1);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=jt$1(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var sa=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=oe$1({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=_e$1(Fc),i},providedIn:`root`})}return t})();function ca(t,r){if(!v(Tc)||t.method===`GET`||t.method===`HEAD`)return r(t);try{let i=v(st$1).href,{origin:o}=new URL(i),{origin:a}=new URL(t.url,o);if(o!==a)return r(t)}catch(i){return r(t)}let e=v(sa).getToken(),n=v(Oc);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}function Pc(t,r){return r(t)}function Lc(t,r,e){return(n,i)=>To(e,()=>r(n,o=>t(o,i)))}var ii$1=new S$1(``,{factory:()=>[ca]});var ua=new S$1(``);var la=new S$1(``,{factory:()=>!0});var oi$1=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=oe$1({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=_e$1(jn),i},providedIn:`root`})}return t})();var $n=(()=>{class t{backend;injector;chain=null;pendingTasks=v(ra$1);contributeToStability=v(la);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let i=this.injector.get(zn,null,{skipSelf:!0}),o=i!==null&&this.backend===i,a=this.injector.get(ua,[],o?{self:!0}:void 0),c=Array.from(new Set([...this.injector.get(ii$1),...a]));this.chain=c.reduceRight((s,l)=>Lc(s,l,this.injector),Pc)}let n=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return Qp(()=>n(e,o=>this.backend.handle(o))).pipe(Kh(i))}else return Qp(()=>n(e,i=>this.backend.handle(i)))}static ɵfac=function(n){return new(n||t)(_e$1(oi$1),_e$1(se$2))};static ɵprov=oe$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var zn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=oe$1({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=_e$1($n),i},providedIn:`root`})}return t})();function ti$1(t,r$6){return r({body:r$6},t)}var da=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof lt$2)o=e;else{let s;i.headers instanceof ye$1?s=i.headers:s=new ye$1(i.headers);let l;i.params&&(i.params instanceof ve?l=i.params:l=new ve({fromObject:i.params})),o=new lt$2(e,n,i.body!==void 0?i.body:null,{headers:s,context:i.context,params:l,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||`json`,withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=Sh(o).pipe(Wh(s=>this.handler.handle(s)));if(e instanceof lt$2||i.observe===`events`)return a;let c=a.pipe(Bn$1(s=>s instanceof Gt$1));switch(i.observe||`body`){case`body`:switch(o.responseType){case`arraybuffer`:return c.pipe(Ce$1(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new M$1(2806,!1);return s.body}));case`blob`:return c.pipe(Ce$1(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new M$1(2807,!1);return s.body}));case`text`:return c.pipe(Ce$1(s=>{if(s.body!==null&&typeof s.body!=`string`)throw new M$1(2808,!1);return s.body}));default:return c.pipe(Ce$1(s=>s.body))}case`response`:return c;default:throw new M$1(2809,!1)}}delete(e,n={}){return this.request(`DELETE`,e,n)}get(e,n={}){return this.request(`GET`,e,n)}head(e,n={}){return this.request(`HEAD`,e,n)}jsonp(e,n){return this.request(`JSONP`,e,{params:new ve().append(n,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,n={}){return this.request(`OPTIONS`,e,n)}patch(e,n,i={}){return this.request(`PATCH`,e,ti$1(i,n))}post(e,n,i={}){return this.request(`POST`,e,ti$1(i,n))}put(e,n,i={}){return this.request(`PUT`,e,ti$1(i,n))}static ɵfac=function(n){return new(n||t)(_e$1(zn))};static ɵprov=oe$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ai$1=(function(t){return t[t.Interceptors=0]=`Interceptors`,t[t.LegacyInterceptors=1]=`LegacyInterceptors`,t[t.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,t[t.NoXsrfProtection=3]=`NoXsrfProtection`,t[t.JsonpSupport=4]=`JsonpSupport`,t[t.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,t[t.Fetch=6]=`Fetch`,t[t.Xhr=7]=`Xhr`,t})(ai$1||{});function kc(t,r){return{ɵkind:t,ɵproviders:r}}function Uc(...t){let r=[da,jn,$n,{provide:zn,useExisting:$n},{provide:oi$1,useFactory:()=>v(jn)},{provide:ii$1,useValue:ca,multi:!0}];for(let e of t)r.push(...e.ɵproviders);return er$1(r)}function Bc(t){return kc(ai$1.Interceptors,t.map(r=>({provide:ii$1,useValue:r,multi:!0})))}var ha=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(n){return new(n||t)(_e$1(ir$1))};static ɵprov=oe$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var si=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=oe$1({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=_e$1($c),i},providedIn:`root`})}return t})();var $c=(()=>{class t extends si{_doc=v(ir$1);sanitize(e,n){if(n==null)return null;switch(e){case W$1.NONE:return n;case W$1.HTML:return Xa$1(n,`HTML`)?Tn(n):ly(this._doc,String(n)).toString();case W$1.STYLE:return Xa$1(n,`Style`)?Tn(n):n;case W$1.SCRIPT:if(Xa$1(n,`Script`))return Tn(n);throw new M$1(5200,!1);case W$1.URL:return Xa$1(n,`URL`)?Tn(n):ec$1(String(n));case W$1.RESOURCE_URL:if(Xa$1(n,`ResourceURL`))return Tn(n);throw new M$1(-5201,!1);default:throw new M$1(5202,!1)}}bypassSecurityTrustHtml(e){return Um(e)}bypassSecurityTrustStyle(e){return qm(e)}bypassSecurityTrustScript(e){return Wm(e)}bypassSecurityTrustUrl(e){return Gm(e)}bypassSecurityTrustResourceUrl(e){return zm(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var b$1=`primary`;var an=Symbol(`RouteTitle`);var hi$1=class{params;constructor(r){this.params=r||{}}has(r){return Object.hasOwn(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ke$2(t){return new hi$1(t)}function ci$1(t,r,e){for(let n=0;n<t.length;n++){let i=t[n],o=r[n];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function ya(t,r,e){let n=e.path.split(`/`),i=n.indexOf(`**`);if(i===-1){if(n.length>t.length||e.pathMatch===`full`&&(r.hasChildren()||n.length<t.length))return null;let s={},l=t.slice(0,n.length);return ci$1(n,l,s)?{consumed:l,posParams:s}:null}if(i!==n.lastIndexOf(`**`))return null;let o=n.slice(0,i),a=n.slice(i+1);if(o.length+a.length>t.length||e.pathMatch===`full`&&r.hasChildren()&&e.path!==`**`)return null;let c={};return!ci$1(o,t.slice(0,o.length),c)||!ci$1(a,t.slice(t.length-a.length),c)?null:{consumed:t,posParams:c}}function Kn(t){return new Promise((r,e)=>{t.pipe(Jh()).subscribe({next:n=>r(n),error:n=>e(n)})})}function Gc(t,r){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!fe$1(t[e],r[e]))return!1;return!0}function fe$1(t,r){let e=t?fi(t):void 0,n=r?fi(r):void 0;if(!e||!n||e.length!=n.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!_a(t[i],r[i]))return!1;return!0}function fi(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function _a(t,r){if(Array.isArray(t)&&Array.isArray(r)){if(t.length!==r.length)return!1;let e=[...t].sort(),n=[...r].sort();return e.every((i,o)=>n[o]===i)}else return t===r}function Wc(t){return t.length>0?t[t.length-1]:null}function $e$2(t){return Ah(t)?t:Cc$1(t)?be$1(Promise.resolve(t)):Sh(t)}function Da(t){return Ah(t)?Kn(t):Promise.resolve(t)}var qc={exact:wa,subset:Ea};var Sa={exact:Kc,subset:Zc,ignored:()=>!0};var Ri={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var pt$2={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function Ti(t,r$7,e){let n=t instanceof z$1?t:r$7.parseUrl(t);return dD(()=>mi$1(r$7.lastSuccessfulNavigation()?.finalUrl??new z$1,n,r(r({},pt$2),e)))}function mi$1(t,r,e){return qc[e.paths](t.root,r.root,e.matrixParams)&&Sa[e.queryParams](t.queryParams,r.queryParams)&&!(e.fragment===`exact`&&t.fragment!==r.fragment)}function Kc(t,r){return fe$1(t,r)}function wa(t,r,e){if(!Le$2(t.segments,r.segments)||!Gn(t.segments,r.segments,e)||t.numberOfChildren!==r.numberOfChildren)return!1;for(let n in r.children)if(!t.children[n]||!wa(t.children[n],r.children[n],e))return!1;return!0}function Zc(t,r){return Object.keys(r).length<=Object.keys(t).length&&Object.keys(r).every(e=>_a(t[e],r[e]))}function Ea(t,r,e){return Ca(t,r,r.segments,e)}function Ca(t,r,e,n){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!Le$2(i,e)||r.hasChildren()||!Gn(i,e,n))}else if(t.segments.length===e.length){if(!Le$2(t.segments,e)||!Gn(t.segments,e,n))return!1;for(let i in r.children)if(!t.children[i]||!Ea(t.children[i],r.children[i],n))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Le$2(t.segments,i)||!Gn(t.segments,i,n)||!t.children[b$1]?!1:Ca(t.children[b$1],r,o,n)}}function Gn(t,r,e){return r.every((n,i)=>Sa[e](t[i].parameters,n.parameters))}var z$1=class{root;queryParams;fragment;_queryParamMap;constructor(r=new D$2([],{}),e={},n=null){this.root=r,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=ke$2(this.queryParams),this._queryParamMap}toString(){return Jc.serialize(this)}};var D$2=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Wn(this)}};var Ie$2=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=ke$2(this.parameters),this._parameterMap}toString(){return Na(this)}};function Yc(t,r){return Le$2(t,r)&&t.every((e,n)=>fe$1(e.parameters,r[n].parameters))}function Le$2(t,r){return t.length!==r.length?!1:t.every((e,n)=>e.path===r[n].path)}function Xc(t,r){let e=[];return Object.entries(t.children).forEach(([n,i])=>{n===b$1&&(e=e.concat(r(i,n)))}),Object.entries(t.children).forEach(([n,i])=>{n!==b$1&&(e=e.concat(r(i,n)))}),e}var Dt$2=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:()=>new Me$1})}return t})();var Me$1=class{parse(r){let e=new gi(r);return new z$1(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){return`${`/${Wt$1(r.root,!0)}`}${tu(r.queryParams)}${typeof r.fragment==`string`?`#${Qc(r.fragment)}`:``}`}};var Jc=new Me$1;function Wn(t){return t.segments.map(r=>Na(r)).join(`/`)}function Wt$1(t,r){if(!t.hasChildren())return Wn(t);if(r){let e=t.children[b$1]?Wt$1(t.children[b$1],!1):``,n=[];return Object.entries(t.children).forEach(([i,o])=>{i!==b$1&&n.push(`${i}:${Wt$1(o,!1)}`)}),n.length>0?`${e}(${n.join(`//`)})`:e}else{let e=Xc(t,(n,i)=>i===b$1?[Wt$1(t.children[b$1],!1)]:[`${i}:${Wt$1(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[b$1]!=null?`${Wn(t)}/${e[0]}`:`${Wn(t)}/(${e.join(`//`)})`}}function Aa(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function Hn(t){return Aa(t).replace(/%3B/gi,`;`)}function Qc(t){return encodeURI(t)}function pi(t){return Aa(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function qn(t){return decodeURIComponent(t)}function fa(t){return qn(t.replace(/\+/g,`%20`))}function Na(t){return`${pi(t.path)}${eu(t.parameters)}`}function eu(t){return Object.entries(t).map(([r,e])=>`;${pi(r)}=${pi(e)}`).join(``)}function tu(t){let r=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(i=>`${Hn(e)}=${Hn(i)}`).join(`&`):`${Hn(e)}=${Hn(n)}`).filter(e=>e);return r.length?`?${r.join(`&`)}`:``}var nu=/^[^\/()?;#]+/;function ui(t){let r=t.match(nu);return r?r[0]:``}var ru=/^[^\/()?;=#]+/;function iu(t){let r=t.match(ru);return r?r[0]:``}var ou=/^[^=?&#]+/;function au(t){let r=t.match(ou);return r?r[0]:``}var su=/^[^&#]+/;function cu(t){let r=t.match(su);return r?r[0]:``}var gi=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new D$2([],{}):new D$2([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional(`?`))do this.parseQueryParam(r);while(this.consumeOptional(`&`));return r}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new M$1(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let n={};this.peekStartsWith(`/(`)&&(this.capture(`/`),n=this.parseParens(!0,r));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,r)),(e.length>0||Object.keys(n).length>0)&&(i[b$1]=new D$2(e,n)),i}parseSegment(){let r=ui(this.remaining);if(r===``&&this.peekStartsWith(`;`))throw new M$1(4009,!1);return this.capture(r),new Ie$2(qn(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(`;`);)this.parseParam(r);return r}parseParam(r){let e=iu(this.remaining);if(!e)return;this.capture(e);let n=``;if(this.consumeOptional(`=`)){let i=ui(this.remaining);i&&(n=i,this.capture(n))}r[qn(e)]=qn(n)}parseQueryParam(r){let e=au(this.remaining);if(!e)return;this.capture(e);let n=``;if(this.consumeOptional(`=`)){let a=cu(this.remaining);a&&(n=a,this.capture(n))}let i=fa(e),o=fa(n);if(Object.hasOwn(r,i)){let a=r[i];Array.isArray(a)||(a=[a],r[i]=a),a.push(o)}else r[i]=o}parseParens(r,e){let n=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=ui(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new M$1(4010,!1);let a;i.indexOf(`:`)>-1?(a=i.slice(0,i.indexOf(`:`)),this.capture(a),this.capture(`:`)):r&&(a=b$1);let c=this.parseChildren(e+1);n[a??b$1]=Object.keys(c).length===1&&c[b$1]?c[b$1]:new D$2([],c),this.consumeOptional(`//`)}return n}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new M$1(4011,!1)}};function Ra(t){return t.segments.length>0?new D$2([],{[b$1]:t}):t}function Ta(t){let r=Object.create(null);for(let[n,i]of Object.entries(t.children)){let o=Ta(i);if(n===b$1&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))r[a]=c;else(o.segments.length>0||o.hasChildren())&&(r[n]=o)}return uu(new D$2(t.segments,r))}function uu(t){if(t.numberOfChildren===1&&t.children[b$1]){let r=t.children[b$1];return new D$2(t.segments.concat(r.segments),r.children)}return t}function xe$1(t){return t instanceof z$1}function Ia(t,r,e=null,n=null,i=new Me$1){return xa(Ma(t),r,e,n,i)}function Ma(t){let r;function e(o){let a={};for(let s of o.children){let l=e(s);a[s.outlet]=l}let c=new D$2(o.url,a);return o===t&&(r=c),c}let i=Ra(e(t.root));return r??i}function xa(t,r,e,n,i){let o=t;for(;o.parent;)o=o.parent;if(r.length===0)return li$1(o,o,o,e,n,i);let a=lu(r);if(a.toRoot())return li$1(o,o,new D$2([],{}),e,n,i);let c=du(a,o,t),s=c.processChildren?Kt(c.segmentGroup,c.index,a.commands):Fa(c.segmentGroup,c.index,a.commands);return li$1(o,c.segmentGroup,s,e,n,i)}function Zn(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function Xt(t){return typeof t==`object`&&t!=null&&t.outlets}function ma(t,r,e){t||=`ɵ`;let n=new z$1;return n.queryParams={[t]:r},e.parse(e.serialize(n)).queryParams[t]}function li$1(t,r,e,n,i,o){let a={};for(let[l,d]of Object.entries(n??{}))a[l]=Array.isArray(d)?d.map(f=>ma(l,f,o)):ma(l,d,o);let c;t===r?c=e:c=Oa(t,r,e);return new z$1(Ra(Ta(c)),a,i)}function Oa(t,r,e){let n=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===r?n[i]=e:n[i]=Oa(o,r,e)}),new D$2(t.segments,n)}var Yn=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,n){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=n,r&&n.length>0&&Zn(n[0]))throw new M$1(4003,!1);let i=n.find(Xt);if(i&&i!==Wc(n))throw new M$1(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function lu(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new Yn(!0,0,t);let r=0,e=!1,n=t.reduce((i,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,l])=>{c[s]=typeof l==`string`?l.split(`/`):l}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:a===0?(o.split(`/`).forEach((c,s)=>{s==0&&c===`.`||(s==0&&c===``?e=!0:c===`..`?r++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new Yn(e,r,n)}var ft$2=class{segmentGroup;processChildren;index;constructor(r,e,n){this.segmentGroup=r,this.processChildren=e,this.index=n}};function du(t,r,e){if(t.isAbsolute)return new ft$2(r,!0,0);if(!e)return new ft$2(r,!1,NaN);if(e.parent===null)return new ft$2(e,!0,0);let n=Zn(t.commands[0])?0:1;return hu(e,e.segments.length-1+n,t.numberOfDoubleDots)}function hu(t,r,e){let n=t,i=r,o=e;for(;o>i;){if(o-=i,n=n.parent,!n)throw new M$1(4005,!1);i=n.segments.length}return new ft$2(n,!1,i-o)}function fu(t){return Xt(t[0])?t[0].outlets:{[b$1]:t}}function Fa(t,r,e){if(t??=new D$2([],{}),t.segments.length===0&&t.hasChildren())return Kt(t,r,e);let n=mu(t,r,e),i=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new D$2(t.segments.slice(0,n.pathIndex),{});return o.children[b$1]=new D$2(t.segments.slice(n.pathIndex),t.children),Kt(o,0,i)}else return n.match&&i.length===0?new D$2(t.segments,{}):n.match&&!t.hasChildren()?bi(t,r,e):n.match?Kt(t,0,i):bi(t,r,e)}function Kt(t,r,e){if(e.length===0)return new D$2(t.segments,{});{let n=fu(e),i=Object.create(null);if(Object.keys(n).some(o=>o!==b$1)&&t.children[b$1]&&t.numberOfChildren===1&&t.children[b$1].segments.length===0){let o=Kt(t.children[b$1],r,e);return new D$2(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(i[o]=Fa(t.children[o],r,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(i[o]=a)}),new D$2(t.segments,i)}}function mu(t,r,e){let n=0,i=r,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(n>=e.length)return o;let a=t.segments[i],c=e[n];if(Xt(c))break;let s=`${c}`,l=n<e.length-1?e[n+1]:null;if(i>0&&s===void 0)break;if(s&&l&&typeof l==`object`&&l.outlets===void 0){if(!ga(s,l,a))return o;n+=2}else{if(!ga(s,{},a))return o;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function bi(t,r,e){let n=t.segments.slice(0,r),i=0;for(;i<e.length;){let o=e[i];if(Xt(o))return new D$2(n,pu(o.outlets));if(i===0&&Zn(e[0])){let s=t.segments[r];n.push(new Ie$2(s.path,pa(e[0]))),i++;continue}let a=Xt(o)?o.outlets[b$1]:`${o}`,c=i<e.length-1?e[i+1]:null;a&&c&&Zn(c)?(n.push(new Ie$2(a,pa(c))),i+=2):(n.push(new Ie$2(a,{})),i++)}return new D$2(n,{})}function pu(t){let r={};return Object.entries(t).forEach(([e,n])=>{typeof n==`string`&&(n=[n]),n!==null&&(r[e]=bi(new D$2([],{}),0,n))}),r}function pa(t){let r={};return Object.entries(t).forEach(([e,n])=>r[e]=`${n}`),r}function ga(t,r,e){return t==e.path&&fe$1(r,e.parameters)}var Zt=`imperative`;var P=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(P||{});var te$1=class{id;url;constructor(r,e){this.id=r,this.url=e}};var Ue$1=class extends te$1{type=P.NavigationStart;navigationTrigger;restoredState;constructor(r,e,n=`imperative`,i=null){super(r,e),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var de$1=class extends te$1{urlAfterRedirects;type=P.NavigationEnd;constructor(r,e,n){super(r,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var k=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(k||{});var Jt=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(Jt||{});var se$1=class extends te$1{reason;code;type=P.NavigationCancel;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Pa(t){return t instanceof se$1&&(t.code===k.Redirect||t.code===k.SupersededByNewNavigation)}var De$1=class extends te$1{reason;code;type=P.NavigationSkipped;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}};var Be$2=class extends te$1{error;target;type=P.NavigationError;constructor(r,e,n,i){super(r,e),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var Qt=class extends te$1{urlAfterRedirects;state;type=P.RoutesRecognized;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Xn=class extends te$1{urlAfterRedirects;state;type=P.GuardsCheckStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Jn=class extends te$1{urlAfterRedirects;state;shouldActivate;type=P.GuardsCheckEnd;constructor(r,e,n,i,o){super(r,e),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var Qn=class extends te$1{urlAfterRedirects;state;type=P.ResolveStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var er=class extends te$1{urlAfterRedirects;state;type=P.ResolveEnd;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var tr=class{route;type=P.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var nr=class{route;type=P.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var rr=class{snapshot;type=P.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ir=class{snapshot;type=P.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var or=class{snapshot;type=P.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ar=class{snapshot;type=P.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var gt$2=class{};var en=class{};var bt$1=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function gu(t){return!(t instanceof gt$2)&&!(t instanceof bt$1)&&!(t instanceof en)}var sr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new je$2(this.rootInjector)}resetChildren(){this.children=new je$2(this.rootInjector)}};var je$2=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let i=this.getOrCreateContext(e);i.outlet=n,this.contexts.set(e,i)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new sr(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(n){return new(n||t)(_e$1(se$2))};static ɵprov=oe$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var cr=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=vi(r,this._root);return e?e.children.map(n=>n.value):[]}firstChild(r){let e=vi(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=yi(r,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==r)}pathFromRoot(r){return yi(r,this._root).map(e=>e.value)}};function vi(t,r){if(t===r.value)return r;for(let e of r.children){let n=vi(t,e);if(n)return n}return null}function yi(t,r){if(t===r.value)return[r];for(let e of r.children){let n=yi(t,e);if(n.length)return n.unshift(r),n}return[]}var ee$1=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function ht$2(t){let r={};return t&&t.children.forEach(e=>r[e.value.outlet]=e),r}var tn=class extends cr{snapshot;constructor(r,e){super(r),this.snapshot=e,Mi(this,r)}toString(){return this.snapshot.toString()}};function La(t,r){let e=bu(t,r),n=new kn$1([new Ie$2(``,{})]),i=new kn$1({}),o=new kn$1({}),s=new Se$2(n,i,new kn$1({}),new kn$1(``),o,b$1,t,e.root);return s.snapshot=e.root,new tn(new ee$1(s,[]),e)}function bu(t,r){return new nn(``,new ee$1(new vt$1([],{},{},``,{},b$1,t,null,{},r),[]))}var Se$2=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(r,e,n,i,o,a,c,s){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(Ce$1(l=>l[an]))??Sh(void 0),this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ce$1(r=>ke$2(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ce$1(r=>ke$2(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(r){this._futureSnapshot=r,this.pending?.set(!0)}};var vu=`always`;function Ii(t,r$8,e){let n,{routeConfig:i}=t;return r$8!==null&&(e===`always`||i?.path===``||!r$8.component&&!r$8.routeConfig?.loadComponent)?n={params:r(r({},r$8.params),t.params),data:r(r({},r$8.data),t.data),resolve:r(r(r(r({},t.data),r$8.data),i?.data),t._resolvedData)}:n={params:r({},t.params),data:r({},t.data),resolve:r(r({},t.data),t._resolvedData??{})},i&&Ua(i)&&(n.resolve[an]=i.title),n}var vt$1=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[an]}constructor(r,e,n,i,o,a,c,s,l,d){this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ke$2(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ke$2(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(n=>n.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var nn=class extends cr{url;constructor(r,e){super(e),this.url=r,Mi(this,e)}toString(){return ka(this._root)}};function Mi(t,r){r.value._routerState=t,r.children.forEach(e=>Mi(t,e))}function ka(t){let r=t.children.length>0?` { ${t.children.map(ka).join(`, `)} } `:``;return`${t.value}${r}`}function di$1(t){if(t.snapshot){let r=t.snapshot,e=t._futureSnapshot;t.snapshot=e,fe$1(r.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),fe$1(r.params,e.params)||t.paramsSubject.next(e.params),Gc(r.url,e.url)||t.urlSubject.next(e.url),fe$1(r.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function _i(t,r){let e=fe$1(t.params,r.params)&&Yc(t.url,r.url),n=!t.parent!=!r.parent;return e&&!n&&(!t.parent||_i(t.parent,r.parent))}function Ua(t){return typeof t.title==`string`||t.title===null}var Ba=new S$1(``);var xi=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=b$1;activateEvents=new je$3;deactivateEvents=new je$3;attachEvents=new je$3;detachEvents=new je$3;routerOutletData=AF();parentContexts=v(je$2);location=v(Ci$1);changeDetector=v(LF);inputBinder=v(hr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:i}=e.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new M$1(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new M$1(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new M$1(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new M$1(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new Di(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:s,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(n){return new(n||t)};static ɵdir=QI({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[lm]})}return t})();var Di=class{route;childContexts;parent;outletData;constructor(r,e,n,i){this.route=r,this.childContexts=e,this.parent=n,this.outletData=i}get(r,e){return r===Se$2?this.route:r===je$2?this.childContexts:r===Ba?this.outletData:this.parent.get(r,e)}};var hr=new S$1(``);var Oi=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=UI({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(n,i){n&1&&Ep(0,`router-outlet`)},dependencies:[xi],encapsulation:2,changeDetection:1})}return t})();function Fi(t){let r$9=t.children&&t.children.map(Fi),e=r$9?s(r({},t),{children:r$9}):r({},t);return!e.component&&!e.loadComponent&&(r$9||e.loadChildren)&&e.outlet&&e.outlet!==b$1&&(e.component=Oi),e}function yu(t,r,e){let n=new Set;return{newlyCreatedRoutes:n,state:new tn(rn(t,r._root,e?e._root:void 0,n),r)}}function rn(t,r,e,n){if(e&&t.shouldReuseRoute(r.value,e.value.snapshot)){let i=e.value;i._setPending(r.value);return new ee$1(i,_u(t,r,e,n))}else{if(t.shouldAttach(r.value)){let a=t.retrieve(r.value);if(a!==null){let c=a.route;return c.value._setPending(r.value),c.children=r.children.map(s=>rn(t,s,void 0,n)),c}}let i=Du(r.value);i._setPending(r.value),n.add(i);return new ee$1(i,r.children.map(a=>rn(t,a,void 0,n)))}}function _u(t,r,e,n){return r.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return rn(t,i,o,n);return rn(t,i,void 0,n)})}function Du(t){return new Se$2(new kn$1(t.url),new kn$1(t.params),new kn$1(t.queryParams),new kn$1(t.fragment),new kn$1(t.data),t.outlet,t.component,t)}var yt$2=class{redirectTo;navigationBehaviorOptions;constructor(r,e){this.redirectTo=r,this.navigationBehaviorOptions=e}};var ja=`ngNavigationCancelingError`;function ur(t,r){let{redirectTo:e,navigationBehaviorOptions:n}=xe$1(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,i=$a(!1,k.Redirect);return i.url=e,i.navigationBehaviorOptions=n,i}function $a(t,r){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[ja]=!0,e.cancellationCode=r,e}function Su(t){return za(t)&&xe$1(t.url)}function za(t){return!!t&&t[ja]}var Si=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,n,i,o){this.routeReuseStrategy=r,this.futureState=e,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=o}activate(r){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,r),di$1(this.futureState.root),this.activateChildRoutes(e,n,r)}deactivateChildRoutes(r,e,n){let i=ht$2(e);r.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],n),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(r,e,n){let i=r.value,o=e?e.value:null;if(i===o)if(i.component){let a=n.getContext(i.outlet);a&&this.deactivateChildRoutes(r,e,a.children)}else this.deactivateChildRoutes(r,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,o=ht$2(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(n&&n.outlet){let a=n.outlet.detach(),c=n.children.contexts;n.resetChildren(),this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:c})}}deactivateRouteAndOutlet(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,o=ht$2(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null),r.value._localInjector?.destroy()}activateChildRoutes(r,e,n){let i=ht$2(e);r.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],n),this.forwardEvent(new ar(o.value.snapshot))}),r.children.length&&this.forwardEvent(new ir(r.value.snapshot))}activateRoutes(r,e,n){let i=r.value,o=e?e.value:null;if(di$1(i),i===o)if(i.component){let a=n.getOrCreateContext(i.outlet);this.activateChildRoutes(r,e,a.children)}else this.activateChildRoutes(r,e,n);else if(i.component){let a=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),di$1(c.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,n)}};var lr=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}};var mt$2=class{component;route;constructor(r,e){this.component=r,this.route=e}};function wu(t,r,e){let n=t._root;return qt$1(n,r?r._root:null,e,[n.value])}function Eu(t){let r=t.routeConfig?t.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:t,guards:r}}function St$1(t,r){let e=Symbol(),n=r.get(t,e);return n===e?typeof t==`function`&&!dg(t)?t:r.get(t):n}function qt$1(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=ht$2(r);return t.children.forEach(a=>{Cu(a,o[a.value.outlet],e,n.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>Yt(c,e.getContext(a),e,i)),i}function Cu(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=r?r.value:null,c=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=Au(a,o,o.routeConfig.runGuardsAndResolvers);s?i.canActivateChecks.push(new lr(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?qt$1(t,r,c?c.children:null,n,i):qt$1(t,r,e,n,i),s&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new mt$2(c.outlet.component,a))}else a&&Yt(r,c,e,i),i.canActivateChecks.push(new lr(n)),o.component?qt$1(t,null,c?c.children:null,n,i):qt$1(t,null,e,n,i);return i}function Au(t,r,e){if(typeof e==`function`)return To(r._environmentInjector,()=>e(t,r));switch(e){case`pathParamsChange`:return!Le$2(t.url,r.url);case`pathParamsOrQueryParamsChange`:return!Le$2(t.url,r.url)||!fe$1(t.queryParams,r.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!_i(t,r)||!fe$1(t.queryParams,r.queryParams);default:return!_i(t,r)}}function Yt(t,r,e,n){let i=ht$2(t),o=t.value;Object.entries(i).forEach(([a,c])=>{o.component?r?Yt(c,r.children.getContext(a),r.children,n):Yt(c,null,null,n):Yt(c,e?e.getContext(a):null,e,n)}),o.component?r&&r.outlet&&r.outlet.isActivated?n.canDeactivateChecks.push(new mt$2(r.outlet.component,o)):n.canDeactivateChecks.push(new mt$2(null,o)):n.canDeactivateChecks.push(new mt$2(null,o))}function sn(t){return typeof t==`function`}function Nu(t){return typeof t==`boolean`}function Ru(t){return t&&sn(t.canLoad)}function Tu(t){return t&&sn(t.canActivate)}function Iu(t){return t&&sn(t.canActivateChild)}function Mu(t){return t&&sn(t.canDeactivate)}function xu(t){return t&&sn(t.canMatch)}function Ha(t){return t instanceof Vn$1||t?.name===`EmptyError`}var Vn=Symbol(`INITIAL_VALUE`);function _t$3(){return ig(t=>Vh(t.map(r=>r.pipe(sn$1(1),og(Vn)))).pipe(Ce$1(r=>{for(let e of r)if(e!==!0){if(e===Vn)return Vn;if(e===!1||Ou(e))return e}return!0}),Bn$1(r=>r!==Vn),sn$1(1)))}function Ou(t){return xe$1(t)||t instanceof yt$2}function Va(t){return t.aborted?Sh(void 0).pipe(sn$1(1)):new _$1(r=>{let e=()=>{r.next(),r.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function Ga(t){return sg(Va(t))}function Fu(t){return Fe$2(r$10=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:o}}=r$10;return o.length===0&&i.length===0?Sh(s(r({},r$10),{guardsResult:!0})):Pu(o,e,n).pipe(Fe$2(a=>a&&Nu(a)?Lu(e,i,t):Sh(a)),Ce$1(a=>s(r({},r$10),{guardsResult:a})))})}function Pu(t,r,e){return be$1(t).pipe(Fe$2(n=>$u(n.component,n.route,e,r)),Jh(n=>n!==!0,!0))}function Lu(t,r,e){return be$1(r).pipe(Wh(n=>rn$1(Uu(n.route.parent,e),ku(n.route,e),ju(t,n.path),Bu(t,n.route))),Jh(n=>n!==!0,!0))}function ku(t,r){return t!==null&&r&&r(new or(t)),Sh(!0)}function Uu(t,r){return t!==null&&r&&r(new rr(t)),Sh(!0)}function Bu(t,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return Sh(!0);return Sh(e.map(i=>Bh(()=>{let o=r._environmentInjector,a=St$1(i,o);return $e$2(Tu(a)?a.canActivate(r,t):To(o,()=>a(r,t))).pipe(Jh())}))).pipe(_t$3())}function ju(t,r){let e=r[r.length-1];return Sh(r.slice(0,r.length-1).reverse().map(o=>Eu(o)).filter(o=>o!==null).map(o=>Bh(()=>{return Sh(o.guards.map(c=>{let s=o.node._environmentInjector,l=St$1(c,s);return $e$2(Iu(l)?l.canActivateChild(e,t):To(s,()=>l(e,t))).pipe(Jh())})).pipe(_t$3())}))).pipe(_t$3())}function $u(t,r,e,n){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return Sh(!0);return Sh(i.map(a=>{let c=r._environmentInjector,s=St$1(a,c);return $e$2(Mu(s)?s.canDeactivate(t,r,e,n):To(c,()=>s(t,r,e,n))).pipe(Jh())})).pipe(_t$3())}function zu(t,r,e,n,i){let o=r.canLoad;if(o===void 0||o.length===0)return Sh(!0);return Sh(o.map(c=>{let s=St$1(c,t),d=$e$2(Ru(s)?s.canLoad(r,e):To(t,()=>s(r,e)));return i?d.pipe(Ga(i)):d})).pipe(_t$3(),Wa(n))}function Wa(t){return hh(cg(r=>{if(typeof r!=`boolean`)throw ur(t,r)}),Ce$1(r=>r===!0))}function Hu(t,r,e,n,i,o){let a=r.canMatch;if(!a||a.length===0)return Sh(!0);return Sh(a.map(s=>{let l=St$1(s,t);return $e$2(xu(l)?l.canMatch(r,e,i):To(t,()=>l(r,e,i))).pipe(Ga(o))})).pipe(_t$3(),Wa(n))}var _e=class t extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,t.prototype)}};var on=class t extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,t.prototype)}};function Vu(t){throw new M$1(4e3,!1)}function Gu(t){throw $a(!1,k.GuardRejected)}var wi=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}lineralizeSegments(r,e){return t(this,null,function*(){let n=[],i=e.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return n;if(i.numberOfChildren>1||!i.children[b$1])throw Vu(`${r.redirectTo}`);i=i.children[b$1]}})}applyRedirectCommands(r,e,n,i,o){return t(this,null,function*(){let a=yield Wu(e,i,o);if(a instanceof z$1)throw new on(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),r,n);if(a[0]===`/`)throw new on(c);return c})}applyRedirectCreateUrlTree(r,e,n,i){return new z$1(this.createSegmentGroup(r,e.root,n,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let n={};return Object.entries(r).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);n[i]=e[c]}else n[i]=o}),n}createSegmentGroup(r,e,n,i){let o=this.createSegments(r,e.segments,n,i),a=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(r,s,n,i)}),new D$2(o,a)}createSegments(r,e,n,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(r,o,i):this.findOrReturn(o,n))}findPosParam(r,e,n){let i=n[e.path.substring(1)];if(!i)throw new M$1(4001,!1);return i}findOrReturn(r,e){let n=0;for(let i of e){if(i.path===r.path)return e.splice(n),i;n++}return r}};function Wu(t,r,e){if(typeof t==`string`)return Promise.resolve(t);let n=t;return Kn($e$2(To(e,()=>n(r))))}function qu(t,r){return t.providers&&!t._injector&&(t._injector=ap(t.providers,r,`Route: ${t.path}`)),t._injector??r}function le$1(t){return t.outlet||b$1}function Ku(t,r){let e=t.filter(n=>le$1(n)===r);return e.push(...t.filter(n=>le$1(n)!==r)),e}var Ei={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function qa(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Zu(t,r$11,e,n,i,o,a){let c=Ka(t,r$11,e);if(!c.matched)return Sh(c);let s=qa(o(c));return n=qu(r$11,n),Hu(n,r$11,e,i,s,a).pipe(Ce$1(l=>l===!0?c:r({},Ei)))}function Ka(t,r$12,e){if(r$12.path===``)return r$12.pathMatch===`full`&&(t.hasChildren()||e.length>0)?r({},Ei):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(r$12.matcher||ya)(e,t,r$12);if(!i)return r({},Ei);let o={};Object.entries(i.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=i.consumed.length>0?r(r({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function ba(t,r,e,n,i){return e.length>0&&Ju(t,e,n,i)?{segmentGroup:new D$2(r,Xu(n,new D$2(e,t.children))),slicedSegments:[]}:e.length===0&&Qu(t,e,n)?{segmentGroup:new D$2(t.segments,Yu(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new D$2(t.segments,t.children),slicedSegments:e}}function Yu(t,r$13,e,n){let i={};for(let o of e)if(fr(t,r$13,o)&&!n[le$1(o)]){let a=new D$2([],{});i[le$1(o)]=a}return r(r({},n),i)}function Xu(t,r){let e={};e[b$1]=r;for(let n of t)if(n.path===``&&le$1(n)!==b$1){let i=new D$2([],{});e[le$1(n)]=i}return e}function Ju(t,r,e,n){return e.some(i=>!fr(t,r,i)||!(le$1(i)!==b$1)?!1:!(n!==void 0&&le$1(i)===n))}function Qu(t,r,e){return e.some(n=>fr(t,r,n))}function fr(t,r,e){return(t.hasChildren()||r.length>0)&&e.pathMatch===`full`?!1:e.path===``}function el(t,r,e){return r.length===0&&!t.children[e]}var Ci=class{};function tl(t$3,r,e,n,i,o,a,c){return t(this,null,function*(){return new Ai(t$3,r,e,n,i,a,o,c).recognize()})}var nl=31;var Ai=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,e,n,i,o,a,c,s){this.injector=r,this.configLoader=e,this.rootComponentType=n,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new wi(this.urlSerializer,this.urlTree)}noMatchError(r){return new M$1(4002,`'${r.segmentGroup}'`)}recognize(){return t(this,null,function*(){let r=ba(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=yield this.match(r),o=new nn(``,new ee$1(n,e)),a=Ia(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}})}match(r$14){return t(this,null,function*(){let e=new vt$1([],Object.freeze({}),Object.freeze(r({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),b$1,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,r$14,b$1,e),rootSnapshot:e}}catch(n){if(n instanceof on)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof _e?this.noMatchError(n):n}})}processSegmentGroup(r,e,n,i,o){return t(this,null,function*(){if(n.segments.length===0&&n.hasChildren())return this.processChildren(r,e,n,o);let a=yield this.processSegment(r,e,n,n.segments,i,!0,o);return a instanceof ee$1?[a]:[]})}processChildren(r,e,n,i){return t(this,null,function*(){let o=[];for(let s of Object.keys(n.children))s===`primary`?o.unshift(s):o.push(s);let a=[];for(let s of o){let l=n.children[s],d=Ku(e,s),f=yield this.processSegmentGroup(r,d,l,s,i);a.push(...f)}let c=Za(a);return rl(c),c})}processSegment(r,e,n,i,o,a,c){return t(this,null,function*(){for(let s of e)try{return yield this.processSegmentAgainstRoute(s._injector??r,e,s,n,i,o,a,c)}catch(l){if(l instanceof _e||Ha(l))continue;throw l}if(el(n,i,o))return new Ci;throw new _e(n)})}processSegmentAgainstRoute(r,e,n,i,o,a,c,s){return t(this,null,function*(){if(le$1(n)!==a&&(a===b$1||!fr(i,o,n)))throw new _e(i);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,i,n,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(r,i,e,n,o,a,s);throw new _e(i)})}expandSegmentAgainstRouteUsingRedirect(r,e,n,i,o,a,c){return t(this,null,function*(){let{matched:s,parameters:l,consumedSegments:d,positionalParamSegments:f,remainingSegments:m}=Ka(e,i,o);if(!s)throw new _e(e);typeof i.redirectTo==`string`&&i.redirectTo[0]===`/`&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>nl&&(this.allowRedirects=!1));let S=this.createSnapshot(r,i,o,l,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let x=yield this.applyRedirects.applyRedirectCommands(d,i.redirectTo,f,qa(S),r),O=yield this.applyRedirects.lineralizeSegments(i,x);return this.processSegment(r,n,e,O.concat(m),a,!1,c)})}createSnapshot(r$15,e,n,i,o){let a=new vt$1(n,i,Object.freeze(r({},this.urlTree.queryParams)),this.urlTree.fragment,ol(e),le$1(e),e.component??e._loadedComponent??null,e,al(e),r$15),c=Ii(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(c.params),a.data=Object.freeze(c.data),a}matchSegmentAgainstRoute(r,e,n,i,o,a){return t(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=B=>this.createSnapshot(r,n,B.consumedSegments,B.parameters,a),s=yield Kn(Zu(e,n,i,r,this.urlSerializer,c,this.abortSignal));if(n.path===`**`&&(e.children={}),!s?.matched)throw new _e(e);r=n._injector??r;let{routes:l}=yield this.getChildConfig(r,n,i),d=n._loadedInjector??r,{parameters:f,consumedSegments:m,remainingSegments:S}=s,x=this.createSnapshot(r,n,m,f,a),{segmentGroup:O,slicedSegments:T}=ba(e,m,S,l,o);if(T.length===0&&O.hasChildren())return new ee$1(x,yield this.processChildren(d,l,O,x));if(l.length===0&&T.length===0)return new ee$1(x,[]);let ue=le$1(n)===o,U=yield this.processSegment(d,l,O,T,ue?b$1:o,!0,x);return new ee$1(x,U instanceof ee$1?[U]:[])})}getChildConfig(r,e,n){return t(this,null,function*(){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Kn(zu(r,e,n,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(r,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Gu(e)}return{routes:[],injector:r}})}};function rl(t){t.sort((r,e)=>r.value.outlet===b$1?-1:e.value.outlet===b$1?1:r.value.outlet.localeCompare(e.value.outlet))}function il(t){let r=t.value.routeConfig;return r&&r.path===``}function Za(t){let r=[],e=new Set;for(let n of t){if(!il(n)){r.push(n);continue}let i=r.find(o=>n.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...n.children),e.add(i)):r.push(n)}for(let n of e){let i=Za(n.children);r.push(new ee$1(n.value,i))}return r.filter(n=>!e.has(n))}function ol(t){return t.data||{}}function al(t){return t.resolve||{}}function sl(t$4,r$16,e,n,i,o,a){return Fe$2(c=>t(null,null,function*(){let{state:s$1,tree:l}=yield tl(t$4,r$16,e,n,c.extractedUrl,i,o,a);return s(r({},c),{targetSnapshot:s$1,urlAfterRedirects:l})}))}function cl(t){return Fe$2(r=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=r;if(!n.length)return Sh(r);let i=new Set(n.map(c=>c.route)),o=new Set;for(let c of i)if(!o.has(c))for(let s of Ya(c))o.add(s);let a=0;return be$1(o).pipe(Wh(c=>i.has(c)?ul(c,e,t):(c.data=Ii(c,c.parent,t).resolve,Sh(void 0))),cg(()=>a++),Xh(1),Fe$2(c=>a===o.size?Sh(r):wt$3))})}function Ya(t){return[t,...t.children.map(e=>Ya(e)).flat()]}function ul(t,r$17,e){let n=t.routeConfig,i=t._resolve;return n?.title!==void 0&&!Ua(n)&&(i[an]=n.title),Bh(()=>(t.data=Ii(t,t.parent,e).resolve,ll(i,t,r$17).pipe(Ce$1(o=>(t._resolvedData=o,t.data=r(r({},t.data),o),null)))))}function ll(t,r,e){let n=fi(t);if(n.length===0)return Sh({});let i={};return be$1(n).pipe(Fe$2(o=>dl(t[o],r,e).pipe(Jh(),cg(a=>{if(a instanceof yt$2)throw ur(new Me$1,a);i[o]=a}))),Xh(1),Ce$1(()=>i),Ji$1(o=>Ha(o)?wt$3:xh(o)))}function dl(t,r,e){let n=r._environmentInjector,i=St$1(t,n);return $e$2(i.resolve?i.resolve(r,e):To(n,()=>i(r,e)))}var Xa=new S$1(``);function Ni(t){return ig(r=>{let e=t(r);return e?be$1(e).pipe(Ce$1(()=>r)):Sh(r)})}var Pi=(()=>{class t{buildTitle(e){let n,i=e.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(o=>o.outlet===b$1);return n}getResolvedTitleForRoute(e){return e.data[an]}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:()=>v(Ja)})}return t})();var Ja=(()=>{class t extends Pi{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static ɵfac=function(n){return new(n||t)(_e$1(ha))};static ɵprov=oe$1({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var wt$2=new S$1(``,{factory:()=>({})});var cn=new S$1(``);var Qa=(()=>{class t$5{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=v(lD);loadComponent(e,n){return t(this,null,function*(){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=t(this,null,function*(){try{let a=yield ts(xF(yield Da(To(e,()=>n.loadComponent()))));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}});return this.componentLoaders.set(n,i),i})}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=t(this,null,function*(){try{let o=yield es(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}});return this.childrenLoaders.set(n,i),i}static ɵfac=function(n){return new(n||t$5)};static ɵprov=Wt$2({token:t$5,factory:t$5.ɵfac})}return t$5})();function es(t$6,r,e,n){return t(this,null,function*(){let o=yield ts(xF(yield Da(To(e,()=>t$6.loadChildren())))),a;o instanceof sp||Array.isArray(o)?a=o:a=yield r.compileModuleAsync(o),n&&n(t$6);let c,s,d;return Array.isArray(a)?s=a:(c=a.create(e).injector,d=a,s=c.get(cn,[],{optional:!0,self:!0}).flat()),{routes:s.map(Fi),injector:c,factory:d}})}function ts(t$7){return t(this,null,function*(){return t$7})}var mr=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:()=>v(hl)})}return t})();var hl=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var ns=new S$1(``);var fl=()=>{};var rs=new S$1(``);var is=(()=>{class t{currentNavigation=Po(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Po(null);events=new Y$1;transitionAbortWithErrorSubject=new Y$1;configLoader=v(Qa);environmentInjector=v(se$2);destroyRef=v(ge$1);urlSerializer=v(Dt$2);rootContexts=v(je$2);location=v(ut$1);inputBindingEnabled=v(hr,{optional:!0})!==null;titleStrategy=v(Pi);options=v(wt$2,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||vu;urlHandlingStrategy=v(mr);createViewTransition=v(ns,{optional:!0});navigationErrorHandler=v(rs,{optional:!0});routerResourcesFeature=v(Xa,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Sh(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new tr(i)),n=i=>this.events.next(new nr(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;Qp(()=>{this.transitions?.next(s(r({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new kn$1(null),this.transitions.pipe(Bn$1(n=>n!==null),ig(n=>{let i=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===n.id;return Sh(n).pipe(ig(s$2=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,``,k.SupersededByNewNavigation),wt$3;this.currentTransition=n;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s$2.id,initialUrl:s$2.rawUrl,extractedUrl:s$2.extractedUrl,targetBrowserUrl:typeof s$2.extras.browserUrl==`string`?this.urlSerializer.parse(s$2.extras.browserUrl):s$2.extras.browserUrl,trigger:s$2.source,extras:s$2.extras,previousNavigation:l?s(r({},l),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s$2.routesRecognizeHandler,beforeActivateHandler:s$2.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s$2.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&f!==`reload`)return this.events.next(new De$1(s$2.id,this.urlSerializer.serialize(s$2.rawUrl),``,Jt.IgnoredSameUrlNavigation)),s$2.resolve(!1),wt$3;if(this.urlHandlingStrategy.shouldProcessUrl(s$2.rawUrl))return Sh(s$2).pipe(ig(m=>(this.events.next(new Ue$1(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?wt$3:Promise.resolve(m))),sl(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),cg(m=>{n.targetSnapshot=m.targetSnapshot,n.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(S=>(S.finalUrl=m.urlAfterRedirects,S)),this.events.next(new en)}),ig(m=>be$1(n.routesRecognizeHandler.deferredHandle??Sh(void 0)).pipe(Ce$1(()=>m))),cg(()=>{let m=new Qt(s$2.id,this.urlSerializer.serialize(s$2.extractedUrl),this.urlSerializer.serialize(s$2.urlAfterRedirects),s$2.targetSnapshot);this.events.next(m)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s$2.currentRawUrl)){let{id:m,extractedUrl:S,source:x,restoredState:O,extras:T}=s$2,ue=new Ue$1(m,this.urlSerializer.serialize(S),x,O);this.events.next(ue);let U=La(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=s(r({},s$2),{targetSnapshot:U,urlAfterRedirects:S,extras:s(r({},T),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(B=>(B.finalUrl=S,B)),Sh(n)}else return this.events.next(new De$1(s$2.id,this.urlSerializer.serialize(s$2.extractedUrl),``,Jt.IgnoredByUrlHandlingStrategy)),s$2.resolve(!1),wt$3}),Ce$1(s$3=>{let l=new Xn(s$3.id,this.urlSerializer.serialize(s$3.extractedUrl),this.urlSerializer.serialize(s$3.urlAfterRedirects),s$3.targetSnapshot);return this.events.next(l),this.currentTransition=n=s(r({},s$3),{guards:wu(s$3.targetSnapshot,s$3.currentSnapshot,this.rootContexts)}),n}),Fu(s=>this.events.next(s)),ig(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw ur(this.urlSerializer,s.guardsResult);let l=new Jn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!c())return wt$3;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,k.GuardRejected),wt$3;if(s.guards.canActivateChecks.length===0)return Sh(s);let d=new Qn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!c())return wt$3;let f=!1;return Sh(s).pipe(cl(this.paramsInheritanceStrategy),cg({next:()=>{f=!0;let m=new er(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{f||this.cancelNavigationTransition(s,``,k.NoDataFromResolver)}}))}),Ni(s=>{let l=f=>{let m=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let S=f._environmentInjector;m.push(this.configLoader.loadComponent(S,f.routeConfig).then(x=>{f.component=x}))}for(let S of f.children)m.push(...l(S));return m},d=l(s.targetSnapshot.root);return d.length===0?Sh(s):be$1(Promise.all(d).then(()=>s))}),ig(s$4=>{let{newlyCreatedRoutes:l,state:d}=yu(e.routeReuseStrategy,s$4.targetSnapshot,s$4.currentRouterState);return this.currentTransition=n=s$4=s(r({},s$4),{targetRouterState:d,newlyCreatedRoutes:l}),this.currentNavigation.update(f=>(f.targetRouterState=d,f)),Sh(s$4)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(s=>s),Ni(()=>this.afterPreactivation()),ig(()=>{let{currentSnapshot:s,targetSnapshot:l}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root,n.hasUAVisualTransition);return d?be$1(d).pipe(Ce$1(()=>n)):Sh(n)}),sn$1(1),ig(s=>{i=!1,this.events.next(new gt$2);let l=n.beforeActivateHandler.deferredHandle;return l?be$1(l.then(()=>s)):Sh(s)}),cg(s=>{new Si(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(os(s.targetRouterState),o=!0,this.currentNavigation.update(l=>(l.abort=fl,l)),this.lastSuccessfulNavigation.set(Qp(this.currentNavigation)),this.events.next(new de$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),sg(Va(a.signal).pipe(Bn$1(()=>!o&&i),cg(()=>{this.cancelNavigationTransition(n,a.signal.reason+``,k.Aborted)}))),cg({complete:()=>{o=!0}}),sg(this.transitionAbortWithErrorSubject.pipe(cg(s=>{throw s}))),Kh(()=>{a.abort(),o||this.cancelNavigationTransition(n,``,k.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ji$1(s=>{if(o=!0,va(n),this.destroyed)return n.resolve(!1),wt$3;if(za(s))this.events.next(new se$1(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Su(s)?this.events.next(new bt$1(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let l=new Be$2(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=To(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof yt$2){let{message:f,cancellationCode:m}=ur(this.urlSerializer,d);this.events.next(new se$1(n.id,this.urlSerializer.serialize(n.extractedUrl),f,m)),this.events.next(new bt$1(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return wt$3}))}))}cancelNavigationTransition(e,n,i){va(e);let o=new se$1(e.id,this.urlSerializer.serialize(e.extractedUrl),n,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=Qp(this.currentNavigation),i=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==i?.toString()&&!n?.extras.skipLocationChange}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();function ml(t){return t!==Zt}function va(t){for(let r of t.newlyCreatedRoutes??[])r._localInjector?.destroy(),r._localInjector=void 0;os(t.targetRouterState)}function os(t){if(!t)return;let r=e=>{e.value.pending?.set(!1),e.children.forEach(r)};r(t._root)}var as=new S$1(``);var ss=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:()=>v(pl)})}return t})();var dr=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}};var pl=(()=>{class t extends dr{static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var pr=(()=>{class t{urlSerializer=v(Dt$2);options=v(wt$2,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=v(ut$1);urlHandlingStrategy=v(mr);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new z$1;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=i??o;return a instanceof z$1?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:i}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=e):this.rawUrlTree=i}routerState=La(null,v(se$2));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:()=>v(gl)})}return t})();var gl=(()=>{class t extends pr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type===`popstate`&&setTimeout(()=>{e(n.url,n.state,`popstate`,{replaceUrl:!0},n.hasUAVisualTransition)})})}handleRouterEvent(e,n){e instanceof Ue$1?this.updateStateMemento():e instanceof De$1?this.commitTransition(n):e instanceof Qt?this.urlUpdateStrategy===`eager`&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof gt$2?(this.commitTransition(n),this.urlUpdateStrategy===`deferred`&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof se$1&&!Pa(e)?this.restoreHistory(n):e instanceof Be$2?this.restoreHistory(n,!0):e instanceof de$1&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:i,id:o}=n,{replaceUrl:a,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,l=r(r({},c),this.generateNgRouterState(o,s,n));this.location.replaceState(e,``,l)}else{let s=r(r({},c),this.generateNgRouterState(o,this.browserPageId+1,n));this.location.go(e,``,s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,i){return this.canceledNavigationResolution===`computed`?r({navigationId:e,ɵrouterPageId:n},this.routerUrlState(i)):r({navigationId:e},this.routerUrlState(i))}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();function Li(t,r){t.events.pipe(Bn$1(e=>e instanceof de$1||e instanceof se$1||e instanceof Be$2||e instanceof De$1),Ce$1(e=>e instanceof de$1||e instanceof De$1?0:(e instanceof se$1?e.code===k.Redirect||e.code===k.SupersededByNewNavigation:!1)?2:1),Bn$1(e=>e!==2),sn$1(1)).subscribe(()=>{r()})}var ze$2=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=v(sE);stateManager=v(pr);options=v(wt$2,{optional:!0})||{};pendingTasks=v(ut$2);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=v(is);urlSerializer=v(Dt$2);location=v(ut$1);urlHandlingStrategy=v(mr);injector=v(se$2);_events=new Y$1;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=v(ss);injectorCleanup=v(as,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=v(cn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!v(hr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new P$1;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,o=Qp(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof se$1&&n.code!==k.Redirect&&n.code!==k.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof de$1)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof bt$1){let a=n.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),s=r({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||ml(i.source)},a);this.scheduleNavigation(c,Zt,null,s,i.hasUAVisualTransition,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}gu(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Zt,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,i,o,a)=>{this.navigateToSyncWithBrowser(e,i,n,o,a)})}navigateToSyncWithBrowser(e,n,i,o,a){let c=i?.navigationId?i:null,s$5=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=s(r({},o),{browserUrl:e})),i){let d=r({},i);delete d.navigationId,delete d.ɵrouterPageId,delete d.ɵrouterUrl,Object.keys(d).length!==0&&(o.state=d)}let l=this.parseUrl(s$5);this.scheduleNavigation(l,n,c,o,a).catch(d=>{this.disposed||this.injector.get(Ue$2)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Qp(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Fi),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=n,l=s?this.currentUrlTree.fragment:a,d=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:d=r(r({},this.currentUrlTree.queryParams),o);break;case`preserve`:d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{f=Ma(i?i.snapshot:this.routerState.snapshot.root)}catch(m){(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),f=this.currentUrlTree.root}return xa(f,e,d,l??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let i=xe$1(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Zt,null,n)}navigate(e,n={skipLocationChange:!1}){return bl(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(n){return this.console.warn(po(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,n){let i;if(n===!0?i=r({},Ri):n===!1?i=r({},pt$2):i=r(r({},pt$2),n),xe$1(e))return mi$1(this.currentUrlTree,e,i);let o=this.parseUrl(e);return mi$1(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((n,[i,o])=>(o!=null&&(n[i]=o),n),{})}scheduleNavigation(e,n,i,o,a,c){if(this.disposed)return Promise.resolve(!1);let s,l,d;c?(s=c.resolve,l=c.reject,d=c.promise):d=new Promise((m,S)=>{s=m,l=S});let f=this.pendingTasks.add();return Li(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:a,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();function bl(t){for(let r=0;r<t.length;r++)if(t[r]==null)throw new M$1(4008,!1)}var yl=(()=>{class t{router=v(ze$2);stateManager=v(pr);fragment=Po(``);queryParams=Po({});path=Po(``);serializer=v(Dt$2);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof de$1&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new z$1(n)))}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var gr=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=v(new Zp(`href`),{optional:!0});reactiveHref=pD(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Qp(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Qp(this._target)}_target=Po(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Qp(this._queryParams)}_queryParams=Po(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Qp(this._fragment)}_fragment=Po(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Qp(this._queryParamsHandling)}_queryParamsHandling=Po(void 0);set state(e){this._state.set(e)}get state(){return Qp(this._state)}_state=Po(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Qp(this._info)}_info=Po(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Qp(this._relativeTo)}_relativeTo=Po(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Qp(this._preserveFragment)}_preserveFragment=Po(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Qp(this._skipLocationChange)}_skipLocationChange=Po(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Qp(this._replaceUrl)}_replaceUrl=Po(!1);browserUrl=AF(void 0);isAnchorElement;onChanges=new Y$1;applicationErrorHandler=v(Ue$2);options=v(wt$2,{optional:!0});reactiveRouterState=v(yl);constructor(e,n,i,o,a,c){this.router=e,this.route=n,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=c;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Po(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(xe$1(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,n,i,o,a){let c=this._urlTree();if(c===null||this.isAnchorElement&&(e!==0||n||i||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),l=r({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let i=this.renderer,o=this.el.nativeElement;n!==null?i.setAttribute(o,e,n):i.removeAttribute(o,e)}_urlTree=dD(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i===`preserve`||i===`merge`;(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:xe$1(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return Qp(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(n){return new(n||t)(bi$1(ze$2),bi$1(Se$2),Ld(`tabindex`),bi$1(Oa$1),bi$1(Ir),bi$1(ct$2))};static ɵdir=QI({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(n,i){n&1&&_p(`click`,function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),n&2&&vp(`href`,i.reactiveHref(),wy)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,jF],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,jF],replaceUrl:[2,`replaceUrl`,`replaceUrl`,jF],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[lm]})}return t})();var _l=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new je$3;link=v(gr,{optional:!0});constructor(e,n,i,o){this.router=e,this.element=n,this.renderer=i,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof de$1&&this.update()})}ngAfterContentInit(){Sh(this.links.changes,Sh(null)).pipe(Hn$1()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=be$1(e).pipe(Hn$1()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let n=Array.isArray(e)?e:e.split(` `);this.classes=n.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=this.routerLinkActiveOptions;if(n===null)return()=>!1;let i;return n===void 0?i=r({},pt$2):Dl(n)?i=n:n.exact??!1?i=r({},Ri):i=r({},pt$2),o=>{let a=o.urlTree;return a?Qp(Ti(a,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(n){return new(n||t)(bi$1(ze$2),bi$1(Ir),bi$1(Oa$1),bi$1(LF))};static ɵdir=QI({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(n,i,o){if(n&1&&Np(o,gr,5),n&2){let a;NE(a=SE())&&(i.links=a)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[lm]})}return t})();function Dl(t){let r=t;return!!(r.paths||r.matrixParams||r.queryParams||r.fragment)}var Sl=new S$1(``);function wl(t,...r){return er$1([{provide:cn,multi:!0,useValue:t},{provide:Se$2,useFactory:El},{provide:gp,multi:!0,useFactory:Cl},r.map(e=>e.ɵproviders)])}function El(){return v(ze$2).routerState.root}function Cl(){let t=v(he$2);return r=>{let e=t.get(Cr$1);if(r!==e.components[0])return;let n=t.get(ze$2),i=t.get(Al);t.get(Nl)===1&&n.initialNavigation(),t.get(Rl,null,{optional:!0})?.setUpPreloading(),t.get(Sl,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Al=new S$1(``,{factory:()=>new Y$1});var Nl=new S$1(``,{factory:()=>1});var Rl=new S$1(``);function un(t){return t.buttons===0||t.detail===0}function ln(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var ki;function cs(){if(ki==null){let t=typeof document<`u`?document.head:null;ki=!!(t&&(t.createShadowRoot||t.attachShadow))}return ki}function Ui(t){if(cs()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function he$1(t){if(t.composedPath)try{return t.composedPath()[0]}catch(r){}return t.target}var Bi;try{Bi=typeof Intl<`u`&&Intl.v8BreakIterator}catch(t){Bi=!1}var G$4=(()=>{class t{_platformId=v(qg);isBrowser=this._platformId?Ho(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Bi)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var dn;function us(){if(dn==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>dn=!0}))}finally{dn=dn||!1}return dn}function Et$2(t){return us()?t:!!t.capture}function ji(t,r=0){return ls(t)?Number(t):arguments.length===2?r:0}function ls(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function me(t){return t instanceof Ir?t.nativeElement:t}var ds=new S$1(`cdk-input-modality-detector-options`);var hs={ignoreKeys:[18,17,224,91,16]};var fs=650;var $i={passive:!0,capture:!0};var ms=(()=>{class t{_platform=v(G$4);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new kn$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=he$1(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<fs||(this._modality.next(un(e)?`keyboard`:`mouse`),this._mostRecentTarget=he$1(e))};_onTouchstart=e=>{if(ln(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=he$1(e)};constructor(){let e=v(z$2),n=v(ir$1),i=v(ds,{optional:!0});if(this._options=r(r({},hs),i),this.modalityDetected=this._modality.pipe(rg(1)),this.modalityChanged=this.modalityDetected.pipe(Qh()),this._platform.isBrowser){let o=v(hr$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,`keydown`,this._onKeydown,$i),o.listen(n,`mousedown`,this._onMousedown,$i),o.listen(n,`touchstart`,this._onTouchstart,$i)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var hn=(function(t){return t[t.IMMEDIATE=0]=`IMMEDIATE`,t[t.EVENTUAL=1]=`EVENTUAL`,t})(hn||{});var ps=new S$1(`cdk-focus-monitor-default-options`);var br=Et$2({passive:!0,capture:!0});var zi=(()=>{class t{_ngZone=v(z$2);_platform=v(G$4);_inputModalityDetector=v(ms);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=v(ir$1);_stopInputModalityDetector=new Y$1;constructor(){let e=v(ps,{optional:!0});this._detectionMode=e?.detectionMode||hn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=he$1(e);for(let i=n;i;i=i.parentElement)e.type===`focus`?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=me(e);if(!this._platform.isBrowser||i.nodeType!==1)return Sh();let o=Ui(i)||this._document,a=this._elementInfo.get(i);if(a)return n&&(a.checkChildren=!0),a.subject;let c={checkChildren:n,subject:new Y$1,rootNode:o};return this._elementInfo.set(i,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let n=me(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let o=me(e);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([c,s])=>this._originChanged(c,n,s)):(this._setOrigin(n),typeof o.focus==`function`&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===hn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle(`cdk-focused`,!!n),e.classList.toggle(`cdk-touch-focused`,n===`touch`),e.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,n===`mouse`),e.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&n,this._detectionMode===hn.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?fs:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),o=he$1(e);!i||!i.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,br),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,br)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(sg(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,br),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,br),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&n.push([o,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!==`mouse`||!n||n===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var vr=new WeakMap;var we=(()=>{class t{_appRef;_injector=v(he$2);_environmentInjector=v(se$2);load(e){let n=this._appRef=this._appRef||this._injector.get(Cr$1),i=vr.get(n);i||(i={loaders:new Set,refs:[]},vr.set(n,i),n.onDestroy(()=>{vr.get(n)?.refs.forEach(o=>o.destroy()),vr.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(BF(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var _r=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=UI({type:t,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return t})();var yr;function Tl(){if(yr===void 0&&(yr=null,typeof window<`u`)){let t=window;if(t.trustedTypes!==void 0)try{yr=t.trustedTypes.createPolicy(`angular#components`,{createHTML:r=>r})}catch(r){console.error(r)}}return yr}function Il(t){return Tl()?.createHTML(t)||t}function gs(t,r,e){t.innerHTML=Il(e.sanitize(W$1.HTML,r)||``)}function $g(t){return Array.isArray(t)?t:[t]}var bs=new Set;var He$2;var Hi=(()=>{class t{_platform=v(G$4);_nonce=v(Gg,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):xl}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ml(e,this._nonce),this._matchMedia(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();function Ml(t,r){if(!bs.has(t))try{He$2||(He$2=document.createElement(`style`),r&&He$2.setAttribute(`nonce`,r),He$2.setAttribute(`type`,`text/css`),document.head.appendChild(He$2)),He$2.sheet&&(He$2.sheet.insertRule(`@media ${t.replace(/[{}]/g,``)} {body{ }}`,0),bs.add(t))}catch(e){console.error(e)}}function xl(t){return{matches:t===`all`||t===``,media:t,addListener:()=>{},removeListener:()=>{}}}function Ol(t){if(t.type===`characterData`&&t.target instanceof Comment)return!0;if(t.type===`childList`){for(let r=0;r<t.addedNodes.length;r++)if(!(t.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<t.removedNodes.length;r++)if(!(t.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var vs=(()=>{class t{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var Fl=(()=>{class t{_mutationObserverFactory=v(vs);_observedElements=new Map;_ngZone=v(z$2);ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=me(e);return new _$1(i=>{let a=this._observeElement(n).pipe(Ce$1(c=>c.filter(s=>!Ol(s))),Bn$1(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{i.next(c)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new Y$1,i=this._mutationObserverFactory.create(o=>n.next(o));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:i}=this._observedElements.get(e);n&&n.disconnect(),i.complete(),this._observedElements.delete(e)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var nb=(()=>{class t{_contentObserver=v(Fl);_elementRef=v(Ir);event=new je$3;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=ji(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Gh(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||t)};static ɵdir=QI({type:t,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,jF],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return t})();var rb=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WI({type:t});static ɵinj=Ll$1({providers:[vs]})}return t})();var _s=(()=>{class t{_platform=v(G$4);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return Ll(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=Pl(Vl(e));if(n&&(ys(n)===-1||!this.isVisible(n)))return!1;let i=e.nodeName.toLowerCase(),o=ys(e);return e.hasAttribute(`contenteditable`)?o!==-1:i===`iframe`||i===`object`||this._platform.WEBKIT&&this._platform.IOS&&!zl(e)?!1:i===`audio`?e.hasAttribute(`controls`)?o!==-1:!1:i===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,n){return Hl(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();function Pl(t){try{return t.frameElement}catch(r){return null}}function Ll(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects==`function`&&t.getClientRects().length)}function kl(t){let r=t.nodeName.toLowerCase();return r===`input`||r===`select`||r===`button`||r===`textarea`}function Ul(t){return jl(t)&&t.type==`hidden`}function Bl(t){return $l(t)&&t.hasAttribute(`href`)}function jl(t){return t.nodeName.toLowerCase()==`input`}function $l(t){return t.nodeName.toLowerCase()==`a`}function Ds(t){if(!t.hasAttribute(`tabindex`)||t.tabIndex===void 0)return!1;let r=t.getAttribute(`tabindex`);return!!(r&&!isNaN(parseInt(r,10)))}function ys(t){if(!Ds(t))return null;let r=parseInt(t.getAttribute(`tabindex`)||``,10);return isNaN(r)?-1:r}function zl(t){let r=t.nodeName.toLowerCase(),e=r===`input`&&t.type;return e===`text`||e===`password`||r===`select`||r===`textarea`}function Hl(t){return Ul(t)?!1:kl(t)||Bl(t)||t.hasAttribute(`contenteditable`)||Ds(t)}function Vl(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Dr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_enabled=!0;constructor(r,e,n,i,o=!1,a){this._element=r,this._checker=e,this._ngZone=n,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener(`focus`,this.startAnchorListener),r.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(r),!!n}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary(`start`);return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary(`end`);return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=0;n<e.length;n++){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(i)return i}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=e.length-1;n>=0;n--){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(i)return i}return null}_createAnchor(){let r=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add(`cdk-visually-hidden`),r.classList.add(`cdk-focus-trap-anchor`),r.setAttribute(`aria-hidden`,`true`),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){By(r,{injector:this._injector})}};var Gl=(()=>{class t{_checker=v(_s);_ngZone=v(z$2);_document=v(ir$1);_injector=v(he$2);constructor(){v(we).load(_r)}create(e,n=!1){return new Dr(e,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var Ss=new S$1(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var ws=new S$1(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Wl=0;var ql=(()=>{class t{_ngZone=v(z$2);_defaultOptions=v(ws,{optional:!0});_liveElement;_document=v(ir$1);_sanitizer=v(si);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=v(Ss,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let i=this._defaultOptions,o,a;return n.length===1&&typeof n[0]==`number`?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:`polite`),a==null&&i&&(a=i.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:gs(this._liveElement,e,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(e),i=this._document.createElement(`div`);for(let o=0;o<n.length;o++)n[o].remove();return i.classList.add(e),i.classList.add(`cdk-visually-hidden`),i.setAttribute(`aria-atomic`,`true`),i.setAttribute(`aria-live`,`polite`),i.id=`cdk-live-announcer-${Wl++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<n.length;i++){let o=n[i],a=o.getAttribute(`aria-owns`);a?a.indexOf(e)===-1&&o.setAttribute(`aria-owns`,a+` `+e):o.setAttribute(`aria-owns`,e)}}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var Kl=200;var Sr=class{_letterKeyStream=new Y$1;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Y$1;selectedItem=this._selectedItem;constructor(r,e){let n=typeof e?.debounceInterval==`number`?e.debounceInterval:Kl;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(cg(e=>this._pressedLetters.push(e)),Gh(r),Bn$1(()=>this._pressedLetters.length>0),Ce$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let i=(this._selectedItemIndex+n)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Es(t,...r){return r.length?r.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var wr=class{_items;_activeItemIndex=Po(-1);_activeItem=Po(null);_wrap=!1;_typeaheadSubscription=P$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof Jo$1?this._itemChangesSubscription=r.changes.subscribe(n=>this._itemsChanged(n.toArray())):na$1(r)&&(this._effectRef=xu$1(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new Y$1;change=new Y$1;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Sr(e,{debounceInterval:typeof r==`number`?r:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,i=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!r[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||Es(r,`shiftKey`))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),n=typeof r==`number`?r:e.indexOf(r),i=e[n];this._activeItem.set(i??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let i=(this._activeItemIndex()+r*n+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let n=this._getItemsArray();if(n[r]){for(;this._skipPredicateFn(n[r]);)if(r+=e,!n[r])return;this.setActiveItem(r)}}_getItemsArray(){return na$1(this._items)?this._items():this._items instanceof Jo$1?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let n=r.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Vi=class extends wr{setActiveItem(r){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(r),this.activeItem&&this.activeItem.setActiveStyles()}};var Cs=new Map;var Gi=class t{_appId=v(Nu$1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){this._appId!==`ng`&&(r+=this._appId);let n=Cs.get(r);return n===void 0?n=0:n++,Cs.set(r,n),`${r}${e?t._infix+`-`:``}${n}`}static ɵfac=function(e){return new(e||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})};var Ns=` `;function Zl(t,r,e){let n=Cr(t,r);e=e.trim(),!n.some(i=>i.trim()===e)&&(n.push(e),t.setAttribute(r,n.join(Ns)))}function Yl(t,r,e){let n=Cr(t,r);e=e.trim();let i=n.filter(o=>o!==e);i.length?t.setAttribute(r,i.join(Ns)):t.removeAttribute(r)}function Cr(t,r){return t.getAttribute(r)?.match(/\S+/g)??[]}var Rs=`cdk-describedby-message`;var Er=`cdk-describedby-host`;var qi=0;var tv=(()=>{class t{_platform=v(G$4);_document=v(ir$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${qi++}`;constructor(){v(we).load(_r),this._id=v(Nu$1)+`-`+qi++}describe(e,n,i){if(!this._canBeDescribed(e,n))return;let o=Wi(n,i);typeof n!=`string`?(As(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,i),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,i){if(!n||!this._isElementNode(e))return;let o=Wi(n,i);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n==`string`){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Er}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(Er);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let i=this._document.createElement(`div`);As(i,this._id),i.textContent=e,n&&i.setAttribute(`role`,n),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(Wi(e,n),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let i=this._document.createElement(`div`);i.style.visibility=`hidden`,i.classList.add(e),i.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let n=Cr(e,`aria-describedby`).filter(i=>i.indexOf(Rs)!=0);e.setAttribute(`aria-describedby`,n.join(` `))}_addMessageReference(e,n){let i=this._messageRegistry.get(n);Zl(e,`aria-describedby`,i.messageElement.id),e.setAttribute(Er,this._id),i.referenceCount++}_removeMessageReference(e,n){let i=this._messageRegistry.get(n);i.referenceCount--,Yl(e,`aria-describedby`,i.messageElement.id),e.removeAttribute(Er)}_isElementDescribedByMessage(e,n){let i=Cr(e,`aria-describedby`),o=this._messageRegistry.get(n),a=o&&o.messageElement.id;return!!a&&i.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n==`object`)return!0;let i=n==null?``:`${n}`.trim(),o=e.getAttribute(`aria-label`);return i?!o||o.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();function Wi(t,r){return typeof t==`string`?`${r||``}/${t}`:t}function As(t,r){t.id||(t.id=`${Rs}-${r}-${qi++}`)}var fn=(function(t){return t[t.NORMAL=0]=`NORMAL`,t[t.NEGATED=1]=`NEGATED`,t[t.INVERTED=2]=`INVERTED`,t})(fn||{});var Ar;var Ve$1;function cv(){if(Ve$1==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return Ve$1=!1,Ve$1;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)Ve$1=!0;else{let t=Element.prototype.scrollTo;t?Ve$1=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Ve$1=!1}}return Ve$1}function uv(){if(typeof document!=`object`||!document)return fn.NORMAL;if(Ar==null){let t=document.createElement(`div`),r=t.style;t.dir=`rtl`,r.width=`1px`,r.overflow=`auto`,r.visibility=`hidden`,r.pointerEvents=`none`,r.position=`absolute`;let e=document.createElement(`div`),n=e.style;n.width=`2px`,n.height=`1px`,t.appendChild(e),document.body.appendChild(t),Ar=fn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Ar=t.scrollLeft===0?fn.NEGATED:fn.INVERTED),t.remove()}return Ar}function dv(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var Ct$1;var Ts=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function mv(){if(Ct$1)return Ct$1;if(typeof document!=`object`||!document)return Ct$1=new Set(Ts),Ct$1;let t=document.createElement(`input`);return Ct$1=new Set(Ts.filter(r=>(t.setAttribute(`type`,r),t.type===r))),Ct$1}var Xl=new S$1(`MATERIAL_ANIMATIONS`);var Is=null;function Jl(){return v(Xl,{optional:!0})?.animationsDisabled||v(Wg,{optional:!0})===`NoopAnimations`?`di-disabled`:(Is??=v(Hi).matchMedia(`(prefers-reduced-motion)`).matches,Is?`reduced-motion`:`enabled`)}function At$2(){return Jl()!==`enabled`}function Cv(t){return t==null?``:typeof t==`string`?t:`${t}px`}function Nv(t){return t!=null&&`${t}`!=`false`}var ce$1=(function(t){return t[t.FADING_IN=0]=`FADING_IN`,t[t.VISIBLE=1]=`VISIBLE`,t[t.FADING_OUT=2]=`FADING_OUT`,t[t.HIDDEN=3]=`HIDDEN`,t})(ce$1||{});var Ki=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ce$1.HIDDEN;constructor(r,e,n,i=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}};var Ms=Et$2({passive:!0,capture:!0});var Zi=class{_events=new Map;addHandler(r,e,n,i){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(i):o.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ms)})}removeHandler(r,e,n){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(n),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,Ms)))}_delegateEventHandler=r=>{let e=he$1(r);e&&this._events.get(r.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(o=>o.handleEvent(r))})}};var mn$1={enterDuration:225,exitDuration:150};var Ql=800;var xs=Et$2({passive:!0,capture:!0});var Os=[`mousedown`,`touchstart`];var Fs=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var ed=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=UI({type:t,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})();var pn$1=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Zi;constructor(r,e,n,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=me(n)),o&&o.get(we).load(ed)}fadeInRipple(r$18,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=r(r({},mn$1),n.animation);n.centered&&(r$18=i.left+i.width/2,e=i.top+i.height/2);let a=n.radius||td(r$18,e,i),c=r$18-i.left,s=e-i.top,l=o.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${c-a}px`,d.style.top=`${s-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,n.color!=null&&(d.style.backgroundColor=n.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),m=f.transitionProperty,S=f.transitionDuration,x=m===`none`||S===`0s`||S===`0s, 0s`||i.width===0&&i.height===0,O=new Ki(this,d,n,x);d.style.transform=`scale3d(1, 1, 1)`,O.state=ce$1.FADING_IN,n.persistent||(this._mostRecentTransientRipple=O);let T=null;return!x&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ue=()=>{T&&(T.fallbackTimer=null),clearTimeout(B),this._finishRippleTransition(O)},U=()=>this._destroyRipple(O),B=setTimeout(U,l+100);d.addEventListener(`transitionend`,ue),d.addEventListener(`transitioncancel`,U),T={onTransitionEnd:ue,onTransitionCancel:U,fallbackTimer:B}}),this._activeRipples.set(O,T),(x||!l)&&this._finishRippleTransition(O),O}fadeOutRipple(r$19){if(r$19.state===ce$1.FADING_OUT||r$19.state===ce$1.HIDDEN)return;let e=r$19.element,n=r(r({},mn$1),r$19.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity=`0`,r$19.state=ce$1.FADING_OUT,(r$19._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r$19)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=me(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Os.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type===`mousedown`?this._onMousedown(r):r.type===`touchstart`?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Fs.forEach(e=>{this._triggerElement.addEventListener(e,this,xs)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===ce$1.FADING_IN?this._startFadeOutTransition(r):r.state===ce$1.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=ce$1.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=ce$1.HIDDEN,e!==null&&(r.element.removeEventListener(`transitionend`,e.onTransitionEnd),r.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=un(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Ql;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!ln(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===ce$1.VISIBLE||r.config.terminateOnPointerUp&&r.state===ce$1.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(Os.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(Fs.forEach(e=>r.removeEventListener(e,this,xs)),this._pointerUpEventsRegistered=!1))}};function td(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+i*i)}var Yi=new S$1(`mat-ripple-global-options`);var jv=(()=>{class t{_elementRef=v(Ir);_animationsDisabled=At$2();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=v(z$2),n=v(G$4),i=v(Yi,{optional:!0}),o=v(he$2);this._globalOptions=i||{},this._rippleRenderer=new pn$1(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:r(r(r({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,i){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,n,r(r({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,r(r({},this.rippleConfig),e))}static ɵfac=function(n){return new(n||t)};static ɵdir=QI({type:t,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,i){n&2&&Lp(`mat-ripple-unbounded`,i.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return t})();var nd={capture:!0};var rd=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Xi=`mat-ripple-loader-uninitialized`;var Ji=`mat-ripple-loader-class-name`;var Ps=`mat-ripple-loader-centered`;var Nr=`mat-ripple-loader-disabled`;var Ls=(()=>{class t{_document=v(ir$1);_animationsDisabled=At$2();_globalRippleOptions=v(Yi,{optional:!0});_platform=v(G$4);_ngZone=v(z$2);_injector=v(he$2);_eventCleanups;_hosts=new Map;constructor(){let e=v(hr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>rd.map(n=>e.listen(this._document,n,this._onInteraction,nd)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Xi,this._globalRippleOptions?.namespace??``),(n.className||!e.hasAttribute(Ji))&&e.setAttribute(Ji,n.className||``),n.centered&&e.setAttribute(Ps,``),n.disabled&&e.setAttribute(Nr,``)}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(Nr,``):e.removeAttribute(Nr)}_onInteraction=e=>{let n=he$1(e);if(n instanceof HTMLElement){let i=n.closest(`[${Xi}="${this._globalRippleOptions?.namespace??``}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,e.getAttribute(Ji)),e.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??mn$1.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??mn$1.exitDuration,c={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Nr),rippleConfig:{centered:e.hasAttribute(Ps),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},s=new pn$1(c,this._ngZone,n,this._platform,this._injector),l=!c.rippleDisabled;l&&s.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:s,hasSetUpEvents:l}),e.removeAttribute(Xi)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var ks=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=UI({type:t,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return t})();var id=[`*`,[[``,`progressIndicator`,``]]];var od=[`*`,`[progressIndicator]`];function ad(t,r){t&1&&(Sc$1(0,`div`,1),_E(1,1),xc$1())}var sd=new S$1(`MAT_BUTTON_CONFIG`);function Us(t){return t==null?void 0:VF(t)}var Qi=(()=>{class t{_elementRef=v(Ir);_ngZone=v(z$2);_animationsDisabled=At$2();_config=v(sd,{optional:!0});_focusMonitor=v(zi);_cleanupClick;_renderer=v(Oa$1);_rippleLoader=v(Ls);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=AF(!1,{transform:jF});constructor(){v(we).load(ks);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||t)};static ɵdir=QI({type:t,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,i){n&2&&(vp(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i._getAriaDisabled())(`tabindex`,i._getTabIndex()),$E(i.color?`mat-`+i.color:``),Lp(`mat-mdc-button-progress-indicator-shown`,i.showProgress())(`mat-mdc-button-disabled`,i.disabled)(`mat-mdc-button-disabled-interactive`,i.disabledInteractive)(`mat-unthemed`,!i.color)(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,jF],disabled:[2,`disabled`,`disabled`,jF],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,jF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,jF],tabIndex:[2,`tabIndex`,`tabIndex`,Us],_tabindex:[2,`tabindex`,`_tabindex`,Us],showProgress:[1,`showProgress`]}})}return t})();var cd=(()=>{class t extends Qi{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||t)};static ɵcmp=UI({type:t,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[dp],ngContentSelectors:od,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,i){n&1&&(CE(id),Dp(0,`span`,0),_E(1),uE(2,ad,2,0,`div`,1),Dp(3,`span`,2)(4,`span`,3)),n&2&&(fv(2),dE(i.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();var ud=new S$1(`cdk-dir-doc`,{providedIn:`root`,factory:()=>v(ir$1)});var ld=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Bs(t){let r=t?.toLowerCase()||``;return r===`auto`&&typeof navigator<`u`&&navigator?.language?ld.test(navigator.language)?`rtl`:`ltr`:r===`rtl`?`rtl`:`ltr`}var dd=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Po(`ltr`);change=new je$3;constructor(){let e=v(ud,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Bs(n||i||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(n){return new(n||t)};static ɵprov=Wt$2({token:t,factory:t.ɵfac})}return t})();var Rr=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WI({type:t});static ɵinj=Ll$1({})}return t})();var js=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WI({type:t});static ɵinj=Ll$1({imports:[Rr]})}return t})();var hd=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var fd=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function md(t,r){t&1&&(Sc$1(0,`div`,2),_E(1,3),xc$1())}var $s=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var vy=(()=>{class t extends Qi{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=pd(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?$s.get(this._appearance):null,o=$s.get(e);i&&n.remove(...i),n.add(...o),this._appearance=e}static ɵfac=function(n){return new(n||t)};static ɵcmp=UI({type:t,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[dp],ngContentSelectors:fd,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,i){n&1&&(CE(hd),Dp(0,`span`,0),_E(1),Sc$1(2,`span`,1),_E(3,1),xc$1(),_E(4,2),uE(5,md,2,0,`div`,2),Dp(6,`span`,3)(7,`span`,4)),n&2&&(Lp(`mdc-button__ripple`,!i._isFab)(`mdc-fab__ripple`,i._isFab),fv(5),dE(i.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();function pd(t){return t.hasAttribute(`mat-raised-button`)?`elevated`:t.hasAttribute(`mat-stroked-button`)?`outlined`:t.hasAttribute(`mat-flat-button`)?`filled`:t.hasAttribute(`mat-button`)?`text`:null}var yy=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=WI({type:t});static ɵinj=Ll$1({imports:[js,Rr]})}return t})();function V(i){return Error(`Unable to find icon with the name "${i}"`)}function X(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function q$2(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Y(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var a=class{url;svgText;options;svgElement=null;constructor(l,t,e){this.url=l,this.svgText=t,this.options=e}};var K=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace(``,t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace(``,t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new a(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let r=this._sanitizer.sanitize(W$1.HTML,n);if(!r)throw Y(n);let s=Il(r);return this._addSvgIconConfig(t,e,new a(``,s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new a(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(W$1.HTML,e);if(!o)throw Y(e);let r=Il(o);return this._addSvgIconSetConfig(t,new a(``,r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(W$1.RESOURCE_URL,t);if(!e)throw q$2(t);let n=this._cachedIconsByUrl.get(e);return n?Sh(C(n)):this._loadSvgIconFromConfig(new a(t,null)).pipe(cg(o=>this._cachedIconsByUrl.set(e,o)),Ce$1(o=>C(o)))}getNamedSvgIcon(t,e=``){let n=J$1(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):xh(V(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Sh(C(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Ce$1(e=>C(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return Sh(n);return $h(e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Ji$1(s=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(W$1.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(f)),Sh(null)})))).pipe(Ce$1(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw V(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(r,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(cg(e=>t.svgText=e),Ce$1(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Sh(null):this._fetchIcon(t).pipe(cg(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),n);let s=this._svgElementFromString(Il(`<svg></svg>`));return s.appendChild(r),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let n=e.querySelector(`svg`);if(!n)throw Error(`<svg> tag not found`);return n}_toSvgElement(t){let e=this._svgElementFromString(Il(`<svg></svg>`)),n=t.attributes;for(let o=0;o<n.length;o++){let{name:r,value:s}=n[o];r!==`id`&&e.setAttribute(r,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw X();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(W$1.RESOURCE_URL,e);if(!r)throw q$2(e);let s=this._inProgressUrlFetches.get(r);if(s)return s;let h=this._httpClient.get(r,{responseType:`text`,withCredentials:o}).pipe(Ce$1(f=>Il(f)),Kh(()=>this._inProgressUrlFetches.delete(r)),ns$1());return this._inProgressUrlFetches.set(r,h),h}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(J$1(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return Z$2(o)?new a(o.url,null,o.options):new a(o,null)}}static ɵfac=function(e){return new(e||i)(_e$1(da,8),_e$1(si),_e$1(ir$1,8),_e$1(nt$2))};static ɵprov=oe$1({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();function C(i){return i.cloneNode(!0)}function J$1(i,l){return i+`:`+l}function Z$2(i){return!!(i.url&&i.options)}var tt$2=[`*`];var et$2=new S$1(`MAT_ICON_DEFAULT_OPTIONS`);var nt$1=new S$1(`mat-icon-location`,{providedIn:`root`,factory:()=>{let i=v(ir$1),l=i?i.location:null;return{getPathname:()=>l?l.pathname+l.search:``}}});var G$3=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var ot$1=G$3.map(i=>`[${i}]`).join(`, `);var rt$2=/^url\(['"]?#(.*?)['"]?\)$/;var wt$1=(()=>{class i{_elementRef=v(Ir);_iconRegistry=v(K);_location=v(nt$1);_errorHandler=v(nt$2);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=P$1.EMPTY;constructor(){let t=v(new Zp(`aria-hidden`),{optional:!0}),e=v(et$2,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()===`svg`)&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(r=>{o.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ot$1),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)G$3.forEach(r=>{let s=e[o],h=s.getAttribute(r),f=h?h.match(rt$2):null;if(f){let p=n.get(s);p||(p=[],n.set(s,p)),p.push({name:r,value:f[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(sn$1(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=UI({type:i,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(e,n){e&2&&(vp(`data-mat-icon-type`,n._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,n._svgName||n.fontIcon)(`data-mat-icon-namespace`,n._svgNamespace||n.fontSet)(`fontIcon`,n._usingFontIcon()?n.fontIcon:null),$E(n.color?`mat-`+n.color:``),Lp(`mat-icon-inline`,n.inline)(`mat-icon-no-color`,n.color!==`primary`&&n.color!==`accent`&&n.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,jF],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:tt$2,decls:1,vars:0,template:function(e,n){e&1&&(CE(),_E(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return i})();var yt$1=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=WI({type:i});static ɵinj=Ll$1({imports:[Rr]})}return i})();var E$1=class{};function G$2(n){return n&&typeof n.connect==`function`&&!(n instanceof zi$1)}var h=(function(n){return n[n.REPLACED=0]=`REPLACED`,n[n.INSERTED=1]=`INSERTED`,n[n.MOVED=2]=`MOVED`,n[n.REMOVED=3]=`REMOVED`,n})(h||{});var j$1=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,o,r){i.forEachOperation((s,l,u)=>{let c,d;if(s.previousIndex==null){let _=()=>t(s,l,u);c=this._insertView(_,u,e,o(s)),d=c?h.INSERTED:h.REPLACED}else u==null?(this._detachAndCacheView(l,e),d=h.REMOVED):(c=this._moveView(l,u,e,o(s)),d=h.MOVED);r&&r({context:c?.context,operation:d,record:s})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,o){let r=this._insertViewFromCache(e,t);if(r){r.context.$implicit=o;return}let s=i();return t.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,o){let r=t.get(i);return t.move(r,e),r.context.$implicit=o,r}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var Q=20;var $$1=(()=>{class n{_ngZone=v(z$2);_platform=v(G$4);_renderer=v(hr$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Y$1;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Q){return this._platform.isBrowser?new _$1(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(qh(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Sh()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Bn$1(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,e)&&t.push(r)}),t}_targetContainsElement(e,t){let o=me(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static ɵfac=function(t){return new(t||n)};static ɵprov=Wt$2({token:n,factory:n.ɵfac})}return n})();var Je$2=(()=>{class n{elementRef=v(Ir);scrollDispatcher=v($$1);ngZone=v(z$2);dir=v(dd,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new Y$1;_renderer=v(Oa$1);_cleanupScroll;_elementScrolled=new Y$1;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,o=this.dir&&this.dir.value==`rtl`;e.left??=o?e.end:e.start,e.right??=o?e.start:e.end,e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),o&&uv()!=fn.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),uv()==fn.INVERTED?e.left=e.right:uv()==fn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;cv()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t=`left`,o=`right`,r=this.elementRef.nativeElement;if(e==`top`)return r.scrollTop;if(e==`bottom`)return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s?o:t:e==`end`&&(e=s?t:o),s&&uv()==fn.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&uv()==fn.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static ɵfac=function(t){return new(t||n)};static ɵdir=QI({type:n,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return n})();var q$1=20;var et$1=(()=>{class n{_platform=v(G$4);_listeners;_viewportSize=null;_change=new Y$1;_document=v(ir$1);constructor(){let e=v(z$2),t=v(hr$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen(`window`,`resize`,o),t.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,left:-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0}}change(e=q$1){return e>0?this._change.pipe(qh(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||n)};static ɵprov=Wt$2({token:n,factory:n.ɵfac})}return n})();var tt$1=new S$1(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var U$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WI({type:n});static ɵinj=Ll$1({})}return n})();var it$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WI({type:n});static ɵinj=Ll$1({imports:[Rr,U$1,Rr,U$1]})}return n})();var D$1=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Y$1;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,o){this._multiple=i,this._emitChanges=t,this.compareWith=o,e&&e.length&&(i?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var Z$1=class{applyChanges(i,e,t,o,r){i.forEachOperation((s,l,u)=>{let c,d;if(s.previousIndex==null){let _=t(s,l,u);c=e.createEmbeddedView(_.templateRef,_.context,_.index),d=h.INSERTED}else u==null?(e.remove(l),d=h.REMOVED):(c=e.get(l),e.move(c,u),d=h.MOVED);r&&r({context:c?.context,operation:d,record:s})})}detach(){}};var ft$1=(()=>{class n{_animationsDisabled=At$2();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||n)};static ɵcmp=UI({type:n,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,o){t&2&&Lp(`mat-pseudo-checkbox-indeterminate`,o.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,o.state===`checked`)(`mat-pseudo-checkbox-disabled`,o.disabled)(`mat-pseudo-checkbox-minimal`,o.appearance===`minimal`)(`mat-pseudo-checkbox-full`,o.appearance===`full`)(`_mat-animation-noopable`,o._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var _t$2=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=WI({type:n});static ɵinj=Ll$1({imports:[Rr]})}return n})();var je$1=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty(`disabled`,t)}static ɵfac=function(i){return new(i||n)(bi$1(Oa$1),bi$1(Ir))};static ɵdir=QI({type:n})}return n})();var at=(()=>{class n extends je$1{static ɵfac=(()=>{let t;return function(r){return(t||(t=Nm(n)))(r||n)}})();static ɵdir=QI({type:n,features:[dp]})}return n})();var Te$1=new S$1(``);var lt$1={provide:Te$1,useExisting:go(()=>Ge$1),multi:!0};function ut(){let n=be()?be().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var dt$1=new S$1(``);var Ge$1=(()=>{class n extends je$1{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode??=!ut()}writeValue(t){let i=t??``;this.setProperty(`value`,i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static ɵfac=function(i){return new(i||n)(bi$1(Oa$1),bi$1(Ir),bi$1(dt$1,8))};static ɵdir=QI({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&_p(`input`,function(a){return r._handleInput(a.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[sD([lt$1]),dp]})}return n})();function oe(n){return n==null||se(n)===0}function se(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var z=new S$1(``);var ae=new S$1(``);var ct$1=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var ee=class{static min(e){return ht$1(e)}static max(e){return ft(e)}static required(e){return Be$1(e)}static requiredTrue(e){return gt$1(e)}static email(e){return pt$1(e)}static minLength(e){return mt$1(e)}static maxLength(e){return vt(e)}static pattern(e){return _t$1(e)}static nullValidator(e){return G$1()}static compose(e){return qe$1(e)}static composeAsync(e){return ze$1(e)}};function ht$1(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function ft(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function Be$1(n){return oe(n.value)?{required:!0}:null}function gt$1(n){return n.value===!0?null:{required:!0}}function pt$1(n){return oe(n.value)||ct$1.test(n.value)?null:{email:!0}}function mt$1(n){return e=>{let t=e.value?.length??se(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function vt(n){return e=>{let t=e.value?.length??se(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function _t$1(n){if(!n)return G$1;let e,t;return typeof n==`string`?(t=``,n.charAt(0)!==`^`&&(t+=`^`),t+=n,n.charAt(n.length-1)!==`$`&&(t+=`$`),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(oe(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function G$1(n){return null}function Ue(n){return n!=null}function He$1(n){return Cc$1(n)?be$1(n):n}function Le$1(n){let e={};return n.forEach(t=>{e=t!=null?r(r({},e),t):e}),Object.keys(e).length===0?null:e}function We$1(n,e){return e.map(t=>t(n))}function yt(n){return!n.validate}function $e$1(n){return n.map(e=>yt(e)?e:t=>e.validate(t))}function qe$1(n){if(!n)return null;let e=n.filter(Ue);return e.length==0?null:function(t){return Le$1(We$1(t,e))}}function le(n){return n!=null?qe$1($e$1(n)):null}function ze$1(n){if(!n)return null;let e=n.filter(Ue);return e.length==0?null:function(t){return $h(We$1(t,e).map(He$1)).pipe(Ce$1(Le$1))}}function ue(n){return n!=null?ze$1($e$1(n)):null}function Ie$1(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Ze(n){return n._rawValidators}function Xe$1(n){return n._rawAsyncValidators}function te(n){return n?Array.isArray(n)?n:[n]:[]}function B(n,e){return Array.isArray(n)?n.includes(e):n===e}function Se$1(n,e){let t=te(e);return te(n).forEach(r=>{B(t,r)||t.push(r)}),t}function Oe$1(n,e){return te(e).filter(t=>!B(n,t))}var U=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=le(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var g=class extends U{name;get formDirective(){return null}get path(){return null}};var F=`VALID`;var j=`INVALID`;var D=`PENDING`;var w=`DISABLED`;var p=class{};var H=class extends p{value;source;constructor(e,t){super(),this.value=e,this.source=t}};var I=class extends p{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}};var S=class extends p{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}};var b=class extends p{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var L=class extends p{source;constructor(e){super(),this.source=e}};var _=class extends p{source;constructor(e){super(),this.source=e}};function de(n){return(Z(n)?n.validators:n)||null}function Ct(n){return Array.isArray(n)?le(n):n||null}function ce(n,e){return(Z(e)?e.asyncValidators:n)||null}function Vt(n){return Array.isArray(n)?ue(n):n||null}function Z(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function Ye$1(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new M$1(1e3,``);if(!Je$1(i,t))throw new M$1(1001,``)}function Ke$1(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new M$1(-1002,``)})}var A=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Po(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return Qp(this.statusReactive)}set status(e){Qp(()=>this.statusReactive.set(e))}_status=dD(()=>this.statusReactive());statusReactive=Po(void 0);get valid(){return this.status===F}get invalid(){return this.status===j}get pending(){return this.status===D}get disabled(){return this.status===w}get enabled(){return this.status!==w}errors;get pristine(){return Qp(this.pristineReactive)}set pristine(e){Qp(()=>this.pristineReactive.set(e))}_pristine=dD(()=>this.pristineReactive());pristineReactive=Po(!0);get dirty(){return!this.pristine}get touched(){return Qp(this.touchedReactive)}set touched(e){Qp(()=>this.touchedReactive.set(e))}_touched=dD(()=>this.touchedReactive());touchedReactive=Po(!1);get untouched(){return!this.touched}_events=new Y$1;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Se$1(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Se$1(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Oe$1(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Oe$1(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(s(r({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new S(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),e.onlySelf||this._parent?._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new S(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(s(r({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new I(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new I(!0,i))}markAsPending(e={}){this.status=D;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new b(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(s(r({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(r$1=>{r$1.disable(s(r({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H(this.value,i)),this._events.next(new b(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(s(r({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(i=>{i.enable(s(r({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(s(r({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===D)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H(this.value,t)),this._events.next(new b(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(s(r({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=He$1(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i?.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new b(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new je$3,this.statusChanges=new je$3}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(j)?j:F}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new I(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new S(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ct(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Vt(this._rawAsyncValidators)}_updateHasRequiredValidator(){Qp(()=>this._hasRequired.set(this.hasValidator(ee.required)))}};function Je$1(n,e){return Object.hasOwn(n,e)}function Dt$1(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function bt(n,e,t,i){switch(t){case`name`:n.setAttribute(e,t,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(e,t,``):n.removeAttribute(e,t);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(e,t,i.toString()):n.removeAttribute(e,t);break}}var ne=class{kind;context;control;message;constructor({kind:e,context:t,control:i}){this.kind=e,this.context=t,this.control=i}};var At$1=(()=>{class n{_validator=G$1;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):G$1,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=QI({type:n,features:[lm]})}return n})();var Mt={provide:z,useExisting:go(()=>Qe$1),multi:!0};var Qe$1=(()=>{class n extends At$1{required;inputName=`required`;normalizeInput=jF;createValidator=t=>Be$1;enabled(t){return t}static ɵfac=(()=>{let t;return function(r){return(t||(t=Nm(n)))(r||n)}})();static ɵdir=QI({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&vp(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[sD([Mt]),dp]})}return n})();var Et$1=new S$1(``);var he=new S$1(``,{factory:()=>fe});var fe=`always`;function Ft$1(n,e){return[...e.path,n]}function wt(n,e,t=fe){ge(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t===`always`)&&e.valueAccessor.setDisabledState?.(n.disabled),It(n,e),Ot$1(n,e),St(n,e),Nt(n,e)}function xe(n,e,t=!0){let i=()=>{};e?.valueAccessor?.registerOnChange(i),e?.valueAccessor?.registerOnTouched(i),$(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function W(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Nt(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ge(n,e){let t=Ze(n);e.validator!==null?n.setValidators(Ie$1(t,e.validator)):typeof t==`function`&&n.setValidators([t]);let i=Xe$1(n);e.asyncValidator!==null?n.setAsyncValidators(Ie$1(i,e.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();W(e._rawValidators,r),W(e._rawAsyncValidators,r)}function $(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=Ze(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=Xe$1(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return W(e._rawValidators,i),W(e._rawAsyncValidators,i),t}function It(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&et(n,e)})}function St(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&et(n,e),n.updateOn!==`submit`&&n.markAsTouched()})}function et(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ot$1(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function tt(n,e){ge(n,e)}function xt(n,e){return $(n,e)}function Pt(n,e){if(!Object.hasOwn(n,`model`))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Rt$1(n){return Object.getPrototypeOf(n.constructor)===at}function nt(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn===`submit`&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function kt(n,e){if(!e)return null;let t,i,r;return e.forEach(o=>{o.constructor===Ge$1?t=o:Rt$1(o)?i=o:r=o}),r||i||t||null}function jt(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var Tt$1={provide:Et$1,useFactory:()=>{let n=v(M,{self:!0});return{setParseErrors:e=>{n.setParseErrorSource(e)},set onReset(e){n.onReset=e}}}};var M=class extends U{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof _&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=kt(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,i){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=i,this.injector?.get(ge$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(LF);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new P$1,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof _&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(r=>{this.control?.markAsDirty(),this.control?.setValue(r,{emitModelToViewChange:!1}),this.viewToModelUpdate(r)}),e.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Dt$1(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Qe$1))}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,e.setCustomControlModelInput(i.value)),this.bindControlProperty(e,r,`touched`,i.touched),this.bindControlProperty(e,r,`dirty`,i.dirty),this.bindControlProperty(e,r,`valid`,i.valid),this.bindControlProperty(e,r,`invalid`,i.invalid),this.bindControlProperty(e,r,`pending`,i.pending),this.bindControlProperty(e,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(e,r,`required`,this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);e.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,t,i,r){if(t[i]===r)return;t[i]=r;let o=e.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i===`disabled`||i===`required`)&&this.renderer&&bt(this.renderer,e.nativeElement,i,r)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([i,r])=>new ne({context:r,kind:i,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,i=dD(()=>{let r=e();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>t).bind(this),xu$1(()=>{t=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var q=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var pn=(()=>{class n extends q{constructor(t){super(t)}static ɵfac=function(i){return new(i||n)(bi$1(M,2))};static ɵdir=QI({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&Lp(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[dp]})}return n})();var mn=(()=>{class n extends q{constructor(t){super(t)}static ɵfac=function(i){return new(i||n)(bi$1(g,10))};static ɵdir=QI({type:n,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(i,r){i&2&&Lp(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)(`ng-submitted`,r.isSubmitted)},standalone:!1,features:[dp]})}return n})();var E=class extends A{constructor(e,t,i){super(de(t),ce(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this._find(e)||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){let i=this._find(e);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){let r=this._find(e);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this._find(e)?.enabled===!0}setValue(e,t={}){Qp(()=>{Ke$1(this,!0,e),Object.keys(e).forEach(i=>{Ye$1(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this._find(i);r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r$2)=>{i.reset(e?e[r$2]:null,s(r({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new _(this))}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return Je$1(this.controls,e)?this.controls[e]:null}};var ie=class extends E{};var Gt={provide:g,useExisting:go(()=>Bt)};var N=Promise.resolve();var Bt=(()=>{class n extends g{callSetDisabledState;get submitted(){return Qp(this.submittedReactive)}_submitted=dD(()=>this.submittedReactive());submittedReactive=Po(!1);_directives=new Set;form;ngSubmit=new je$3;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new E({},le(t),ue(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){N.then(()=>{t.control=this._findContainer(t.path).registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){N.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){N.then(()=>{let i=this._findContainer(t.path),r=new E({});tt(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){N.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){N.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),nt(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new L(this.control)),t?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static ɵfac=function(i){return new(i||n)(bi$1(z,10),bi$1(ae,10),bi$1(he,8))};static ɵdir=QI({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,r){i&1&&_p(`submit`,function(a){return r.onSubmit(a)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[sD([Gt]),dp]})}return n})();function Pe$1(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Re(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var T=class extends A{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(de(t),ce(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Re(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){Qp(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new _(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Pe$1(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Pe$1(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Re(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ut=n=>n instanceof T;var Ht=(()=>{class n extends g{callSetDisabledState;get submitted(){return Qp(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=dD(()=>this._submittedReactive());_submittedReactive=Po(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),Object.hasOwn(t,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let i=this.form.get(t.path);return t._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){xe(t.control||null,t,!1),jt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,i){this.form.get(t.path).setValue(i)}onReset(){this.resetForm()}resetForm(t=void 0,i={}){this.form.reset(t,i),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,nt(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new L(this.control)),t?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(xe(i||null,t),Ut(r)&&t._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);tt(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let i=this.form?.get(t.path);i&&xt(i,t)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ge(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(i){return new(i||n)(bi$1(z,10),bi$1(ae,10),bi$1(he,8))};static ɵdir=QI({type:n,features:[dp,lm]})}return n})();var Lt$1={provide:g,useExisting:go(()=>Wt)};var Wt=(()=>{class n extends Ht{form=null;ngSubmit=new je$3;get control(){return this.form}static ɵfac=(()=>{let t;return function(r){return(t||(t=Nm(n)))(r||n)}})();static ɵdir=QI({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(i,r){i&1&&_p(`submit`,function(a){return r.onSubmit(a)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[sD([Lt$1]),dp]})}return n})();var _n=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=QI({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return n})();var re=class extends A{constructor(e,t,i){super(de(t),ce(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){Array.isArray(e)?e.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,i={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Qp(()=>{Ke$1(this,!1,e),e.forEach((i,r)=>{Ye$1(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((i,r$3)=>{i.reset(e[r$3],s(r({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new _(this))}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,i)=>{e(t,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var it=new S$1(``);var $t={provide:M,useExisting:go(()=>qt)};var qt=(()=>{class n extends M{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new je$3;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,a,ot,st){super(st,ot,o),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(t,i){this.control=t,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,wt(t,this,i))}ngOnChanges(t){this._added||this._setUpControl(),Pt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Ft$1(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(t){super.ngControlCreate(t)}ɵngControlUpdate(t){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(t,!0))}static ɵfac=function(i){return new(i||n)(bi$1(g,13),bi$1(z,10),bi$1(ae,10),bi$1(Te$1,10),bi$1(it,8),bi$1(Oa$1,8),bi$1(he$2,8))};static ɵdir=QI({type:n,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[sD([$t,Tt$1]),dp,lm,YI(null)]})}return n})();var zt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=WI({type:n});static ɵinj=Ll$1({})}return n})();function ke$1(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var yn=(()=>{class n{useNonNullable=!1;get nonNullable(){let t=new n;return t.useNonNullable=!0,t}group(t,i=null){let r=this._reduceControls(t),o={};return ke$1(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new E(r,o)}record(t,i=null){return new ie(this._reduceControls(t),i)}control(t,i,r$4){let o={};return this.useNonNullable?(ke$1(i)?o=i:(o.validators=i,o.asyncValidators=r$4),new T(t,s(r({},o),{nonNullable:!0}))):new T(t,i,r$4)}array(t,i,r){return new re(t.map(a=>this._createControl(a)),i,r)}_reduceControls(t){let i={};return Object.keys(t).forEach(r=>{i[r]=this._createControl(t[r])}),i}_createControl(t){if(t instanceof T)return t;if(t instanceof A)return t;if(Array.isArray(t)){let i=t[0],r=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(i,r,o)}else return this.control(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=Wt$2({token:n,factory:n.ɵfac})}return n})();var Cn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:it,useValue:t.warnOnNgModelWithFormControl??`always`},{provide:he,useValue:t.callSetDisabledState??fe}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=WI({type:n});static ɵinj=Ll$1({imports:[zt]})}return n})();var rt$1=class{};var An={production:!0,platformProviderApiBaseUrl:`https://fake-api-7arl.onrender.com/`,platformProviderCategoriesEndpointPath:`/categories`,platformProviderCoursesEndpointPath:`/courses`,platformProviderSignInEndpointPath:`/authentication/sign-in`,platformProviderSignUpEndpointPath:`/authentication/sign-up`,logoProviderApiBaseUrl:`https://img.logo.dev.com/`};var rt=class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=UI({type:i,selectors:[[`app-home`]],decls:5,vars:0,template:function(t,e){t&1&&(Sc$1(0,`section`)(1,`h1`),XE(2,` ACME Learning Center `),xc$1(),Sc$1(3,`p`),XE(4,`Welcome to the ACME Learning Center!`),xc$1()())},encapsulation:2})};var Fe=()=>import(`./chunk-C88qs-kL.js`).then(i=>i.About);var Oe=()=>import(`./chunk-mI3THEDd.js`).then(i=>i.PageNotFound);var ze=()=>import(`./chunk-DNEf-s5u.js`).then(i=>i.learningRoutes);var Dt=`ACME Learning Center`;var ke=[{path:`home`,component:rt,title:`${Dt} - Home`},{path:`about`,loadComponent:Fe,title:`${Dt} - About`},{path:`learning`,loadChildren:ze},{path:``,redirectTo:`/home`,pathMatch:`full`},{path:`**`,loadComponent:Oe,title:`${Dt} - Page Not Found`}];var G=class{handleError=a=>t=>{let e=a;return t.status===404?e=`${a}: Resource not found`:t.error instanceof ErrorEvent?e=`${a}: ${t.error.message}`:e=`${a}: ${t.status||`Unexpected error`}`,xh(()=>new Error(e))}};var Be=`${An.platformProviderApiBaseUrl}${An.platformProviderSignUpEndpointPath}`;var ot=class extends G{constructor(t,e){super();this.http=t;this.assembler=e}http;assembler;signUp=t=>{let e=this.assembler.toRequestFromCommand(t);return this.http.post(Be,e).pipe(Ce$1(n=>this.assembler.toResourceFromResponse(n)),Ji$1(this.handleError(`Failed to sign-up`)))}};var Pe=`${An.platformProviderApiBaseUrl}${An.platformProviderSignInEndpointPath}`;var st=class extends G{constructor(t,e){super();this.http=t;this.assembler=e}http;assembler;signIn=t=>{let e=this.assembler.toRequestFromCommand(t);return this.http.post(Pe,e).pipe(Ce$1(n=>this.assembler.toResourceFromResponse(n)),Ji$1(this.handleError(`Failed to sign-in`)))}};var ct=class{toResourceFromResponse=a=>({id:a.id,username:a.username});toRequestFromCommand=a=>({username:a.username,password:a.password})};var lt=class{toResourceFromResponse=a=>({id:a.id,username:a.username,token:a.token});toRequestFromCommand=a=>({username:a.username,password:a.password})};var dt=class i extends rt$1{http=v(da);signUpEndpoint=new ot(this.http,new ct);signInEndpoint=new st(this.http,new lt);signUp=a=>this.signUpEndpoint.signUp(a);signIn=a=>this.signInEndpoint.signIn(a);static ɵfac=function(t){return new(t||i)};static ɵprov=Wt$2({token:i,factory:i.ɵfac})};var mt=class i{iamApi=v(dt);isSignedInSignal=Po(!1);currentUsernameSignal=Po(null);currentUserIdSignal=Po(null);usersSignal=Po([]);isSignedIn=this.isSignedInSignal.asReadonly();loadingUsers=Po(!1);currentUsername=this.currentUsernameSignal.asReadonly();currentUserId=this.currentUserIdSignal.asReadonly();currentToken=dD(()=>this.isSignedIn()?localStorage.getItem(`token`):null);users=this.usersSignal.asReadonly();isLoadingUsers=this.loadingUsers.asReadonly();constructor(){this.isSignedInSignal.set(!1),this.currentUsernameSignal.set(null),this.currentUserIdSignal.set(null)}signIn(a,t){console.log(a),this.iamApi.signIn(a).subscribe({next:e=>{localStorage.setItem(`token`,e.token),this.isSignedInSignal.set(!0),this.currentUsernameSignal.set(e.username),this.currentUserIdSignal.set(e.id),t.navigate([`/home`]).then()},error:e=>{console.error(`Sign-in failed:`,e),this.isSignedInSignal.set(!1),this.currentUsernameSignal.set(null),this.currentUserIdSignal.set(null),t.navigate([`/iam/sign-in`]).then()}})}signUp(a,t){this.iamApi.signUp(a).subscribe({next:e=>{console.log(`Sign-up successful:`,e),t.navigate([`/iam/sign-in`]).then()},error:e=>{console.error(`Sign-up failed:`,e),this.isSignedInSignal.set(!1),this.currentUsernameSignal.set(null),this.currentUserIdSignal.set(null),t.navigate([`/iam/sign-up`]).then()}})}signOut(a){localStorage.removeItem(`token`),this.isSignedInSignal.set(!1),this.currentUsernameSignal.set(null),this.currentUserIdSignal.set(null),a.navigate([`/iam/sign-in`]).then()}loadUsers(){this.loadingUsers.set(!0)}static ɵfac=function(t){return new(t||i)};static ɵprov=Wt$2({token:i,factory:i.ɵfac})};var ye=(i,a)=>{let e=v(mt).currentToken(),n=e?i.clone({headers:i.headers.set(`Authorization`,`Bearer ${e}`)}):i;return console.log(e),a(n)};var Se={providers:[$g$1(),PF({eventCoalescing:!0}),Uc(Bc([ye])),wl(ke)]};var pt=[`*`];var je=[`content`];var Ne=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`];var Ce=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function Ve(i,a){if(i&1){let t=EE();di$2(0,`div`,1),_p(`click`,function(){au$1(t);return cu$1(TE()._onBackdropClicked())}),Nc$1()}if(i&2)Lp(`mat-drawer-shown`,TE()._isShowingBackdrop())}function Qe(i,a){i&1&&(di$2(0,`mat-drawer-content`),_E(1,2),Nc$1())}function He(i,a){if(i&1){let t=EE();di$2(0,`div`,1),_p(`click`,function(){au$1(t);return cu$1(TE()._onBackdropClicked())}),Nc$1()}if(i&2)Lp(`mat-drawer-shown`,TE()._isShowingBackdrop())}function qe(i,a){i&1&&(di$2(0,`mat-sidenav-content`),_E(1,2),Nc$1())}var Ge=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var We=new S$1(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var Lt=new S$1(`MAT_DRAWER_CONTAINER`);var J=(()=>{class i extends Je$2{_platform=v(G$4);_changeDetectorRef=v(LF);_element=v(Ir);_ngZone=v(z$2);_isInert=!1;_container=v(At);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(zh(50),sn$1(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute(`inert`,`true`):e.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!==`over`&&t.opened||e!=null&&e.mode!==`over`&&e.opened}static ɵfac=(()=>{let t;return function(n){return(t||(t=Nm(i)))(n||i)}})();static ɵcmp=UI({type:i,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(e,n){e&2&&(kp(`margin-left`,n._container._contentMargins.left,`px`)(`margin-right`,n._container._contentMargins.right,`px`),Lp(`mat-drawer-content-hidden`,n._shouldBeHidden()))},features:[sD([{provide:Je$2,useExisting:i}]),dp],ngContentSelectors:pt,decls:1,vars:0,template:function(e,n){e&1&&(CE(),_E(0))},encapsulation:2})}return i})();var Et=(()=>{class i{_elementRef=v(Ir);_focusTrapFactory=v(Gl);_focusMonitor=v(zi);_platform=v(G$4);_ngZone=v(z$2);_renderer=v(Oa$1);_interactivityChecker=v(_s);_doc=v(ir$1);_isAnimating=!1;_container=v(Lt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t===`end`?`end`:`start`,t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Nv(t)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(t){(t===`true`||t===`false`||t==null)&&(t=Nv(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(Nv(t))}_opened=Po(!1);_openedVia=null;_animationStarted=new Y$1;_animationEnd=new Y$1;openedChange=new je$3(!0);_openedStream=this.openedChange.pipe(Bn$1(t=>t),Ce$1(()=>{}));openedStart=this._animationStarted.pipe(Bn$1(()=>this.opened),Xi$1(void 0));_closedStream=this.openedChange.pipe(Bn$1(t=>!t),Ce$1(()=>{}));closedStart=this._animationStarted.pipe(Bn$1(()=>!this.opened),Xi$1(void 0));_destroyed=new Y$1;onPositionChanged=new je$3;_content;_modeChanged=new Y$1;_injector=v(he$2);_changeDetectorRef=v(LF);constructor(){this.openedChange.pipe(sg(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,`keydown`,n=>{n.keyCode===27&&!this.disableClose&&!Es(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(e,`transitionend`,this._handleTransitionEvent),t.listen(e,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{s(),Re(),n.removeAttribute(`tabindex`)},s=this._renderer.listen(n,`blur`,o),Re=this._renderer.listen(n,`mousedown`,o)})),n.focus(e))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:By(()=>{let e=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(e)&&typeof t.focus==`function`&&t.focus(e)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||`program`);return t||(this._openedVia=null),n}_setOpen(t,e,n){return t===this.opened?Promise.resolve(t?`open`:`close`):(this._opened.set(t),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,t),!t&&e&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(sn$1(1)).subscribe(s=>o(s?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(t){t!==this._isAnimating&&(this._isAnimating=t,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,t))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,n=e.parentNode;t===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),n.insertBefore(this._anchor,e)),n.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static ɵfac=function(e){return new(e||i)};static ɵcmp=UI({type:i,selectors:[[`mat-drawer`]],viewQuery:function(e,n){if(e&1&&Sp(je,5),e&2){let o;NE(o=SE())&&(n._content=o.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(e,n){e&2&&(vp(`align`,null)(`tabIndex`,n.mode!==`side`?`-1`:null),kp(`visibility`,!n._container&&!n.opened?`hidden`:null),Lp(`mat-drawer-end`,n.position===`end`)(`mat-drawer-over`,n.mode===`over`)(`mat-drawer-push`,n.mode===`push`)(`mat-drawer-side`,n.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:pt,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(e,n){e&1&&(CE(),di$2(0,`div`,1,0),_E(2),Nc$1())},dependencies:[Je$2],encapsulation:2})}return i})();var At=(()=>{class i{_dir=v(dd,{optional:!0});_element=v(Ir);_ngZone=v(z$2);_changeDetectorRef=v(LF);_animationDisabled=At$2();_transitionsEnabled=!1;_allDrawers;_drawers=new Jo$1;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Nv(t)}_autosize=v(We);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:Nv(t)}_backdropOverride=null;backdropClick=new je$3;_start=null;_end=null;_left=null;_right=null;_destroyed=new Y$1;_doCheckSubject=new Y$1;_contentMargins={left:null,right:null};_contentMarginChanges=new Y$1;get scrollable(){return this._userContent||this._content}_injector=v(he$2);constructor(){let t=v(G$4),e=v(et$1);this._dir?.change.pipe(sg(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(sg(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(og(this._allDrawers),sg(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(og(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Gh(10),sg(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)t+=this._left._getWidth();else if(this._left.mode==`push`){let n=this._left._getWidth();t+=n,e-=n}}if(this._right&&this._right.opened){if(this._right.mode==`side`)e+=this._right._getWidth();else if(this._right.mode==`push`){let n=this._right._getWidth();e+=n,t-=n}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(sg(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!==`side`&&t.openedChange.pipe(sg(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(sg(this._drawers.changes)).subscribe(()=>{By({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(sg(Uh(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,n=`mat-drawer-container-has-open`;t?e.add(n):e.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position==`end`?(this._end,this._end=t):(this._start,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!==`side`:this._backdropOverride}static ɵfac=function(e){return new(e||i)};static ɵcmp=UI({type:i,selectors:[[`mat-drawer-container`]],contentQueries:function(e,n,o){if(e&1&&Np(o,J,5)(o,Et,5),e&2){let s;NE(s=SE())&&(n._content=s.first),NE(s=SE())&&(n._allDrawers=s)}},viewQuery:function(e,n){if(e&1&&Sp(J,5),e&2){let o;NE(o=SE())&&(n._userContent=o.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(e,n){e&2&&Lp(`mat-drawer-container-explicit-backdrop`,n._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[sD([{provide:Lt,useExisting:i}])],ngContentSelectors:Ce,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(e,n){e&1&&(CE(Ne),uE(0,Ve,1,2,`div`,0),_E(1),_E(2,1),uE(3,Qe,2,0,`mat-drawer-content`)),e&2&&(dE(n.hasBackdrop?0:-1),fv(3),dE(n._content?-1:3))},dependencies:[J],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return i})();var ht=(()=>{class i extends J{static ɵfac=(()=>{let t;return function(n){return(t||(t=Nm(i)))(n||i)}})();static ɵcmp=UI({type:i,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[sD([{provide:Je$2,useExisting:i},{provide:J,useExisting:i}]),dp],ngContentSelectors:pt,decls:1,vars:0,template:function(e,n){e&1&&(CE(),_E(0))},encapsulation:2})}return i})();var Tt=(()=>{class i extends Et{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=Nv(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=ji(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=ji(t)}_fixedBottomGap=0;static ɵfac=(()=>{let t;return function(n){return(t||(t=Nm(i)))(n||i)}})();static ɵcmp=UI({type:i,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(e,n){e&2&&(vp(`tabIndex`,n.mode!==`side`?`-1`:null)(`align`,null),kp(`top`,n.fixedInViewport?n.fixedTopGap:null,`px`)(`bottom`,n.fixedInViewport?n.fixedBottomGap:null,`px`),Lp(`mat-drawer-end`,n.position===`end`)(`mat-drawer-over`,n.mode===`over`)(`mat-drawer-push`,n.mode===`push`)(`mat-drawer-side`,n.mode===`side`)(`mat-sidenav-fixed`,n.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[sD([{provide:Et,useExisting:i}]),dp],ngContentSelectors:pt,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(e,n){e&1&&(CE(),di$2(0,`div`,1,0),_E(2),Nc$1())},dependencies:[Je$2],encapsulation:2})}return i})();var Me=(()=>{class i extends At{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let t;return function(n){return(t||(t=Nm(i)))(n||i)}})();static ɵcmp=UI({type:i,selectors:[[`mat-sidenav-container`]],contentQueries:function(e,n,o){if(e&1&&Np(o,ht,5)(o,Tt,5),e&2){let s;NE(s=SE())&&(n._content=s.first),NE(s=SE())&&(n._allDrawers=s)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(e,n){e&2&&Lp(`mat-drawer-container-explicit-backdrop`,n._backdropOverride)},exportAs:[`matSidenavContainer`],features:[sD([{provide:Lt,useExisting:i},{provide:At,useExisting:i}]),dp],ngContentSelectors:Ce,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(e,n){e&1&&(CE(Ne),uE(0,He,1,2,`div`,0),_E(1),_E(2,1),uE(3,qe,2,0,`mat-sidenav-content`)),e&2&&(dE(n.hasBackdrop?0:-1),fv(3),dE(n._content?-1:3))},dependencies:[ht],styles:[Ge],encapsulation:2})}return i})();var Ie=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=WI({type:i});static ɵinj=Ll$1({imports:[U$1,Rr,U$1]})}return i})();var De=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=WI({type:i});static ɵinj=Ll$1({imports:[Rr]})}return i})();var $e=[`*`];var Ke=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`;var Xe=[`unscopedContent`];var Ye=[`text`];var Je=[[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]],[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[``,`matListItemMeta`,``]],[[`mat-divider`]]];var ti=[`[matListItemAvatar],[matListItemIcon]`,`[matListItemTitle]`,`[matListItemLine]`,`*`,`[matListItemMeta]`,`mat-divider`];var ei=new S$1(`ListOption`);var Ft=(()=>{class i{_elementRef=v(Ir);static ɵfac=function(e){return new(e||i)};static ɵdir=QI({type:i,selectors:[[``,`matListItemTitle`,``]],hostAttrs:[1,`mat-mdc-list-item-title`,`mdc-list-item__primary-text`]})}return i})();var ii=(()=>{class i{_elementRef=v(Ir);static ɵfac=function(e){return new(e||i)};static ɵdir=QI({type:i,selectors:[[``,`matListItemLine`,``]],hostAttrs:[1,`mat-mdc-list-item-line`,`mdc-list-item__secondary-text`]})}return i})();var ni=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵdir=QI({type:i,selectors:[[``,`matListItemMeta`,``]],hostAttrs:[1,`mat-mdc-list-item-meta`,`mdc-list-item__end`]})}return i})();var Ee=(()=>{class i{_listOption=v(ei,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()===`after`}static ɵfac=function(e){return new(e||i)};static ɵdir=QI({type:i,hostVars:4,hostBindings:function(e,n){e&2&&Lp(`mdc-list-item__start`,n._isAlignedAtStart())(`mdc-list-item__end`,!n._isAlignedAtStart())}})}return i})();var ai=(()=>{class i extends Ee{static ɵfac=(()=>{let t;return function(n){return(t||(t=Nm(i)))(n||i)}})();static ɵdir=QI({type:i,selectors:[[``,`matListItemAvatar`,``]],hostAttrs:[1,`mat-mdc-list-item-avatar`],features:[dp]})}return i})();var Ot=(()=>{class i extends Ee{static ɵfac=(()=>{let t;return function(n){return(t||(t=Nm(i)))(n||i)}})();static ɵdir=QI({type:i,selectors:[[``,`matListItemIcon`,``]],hostAttrs:[1,`mat-mdc-list-item-icon`],features:[dp]})}return i})();var ri=new S$1(`MAT_LIST_CONFIG`);var Rt=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Nv(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Nv(t))}_disabled=Po(!1);_defaultOptions=v(ri,{optional:!0});static ɵfac=function(e){return new(e||i)};static ɵdir=QI({type:i,hostVars:1,hostBindings:function(e,n){e&2&&vp(`aria-disabled`,n.disabled)},inputs:{disableRipple:`disableRipple`,disabled:`disabled`}})}return i})();var oi=(()=>{class i{_elementRef=v(Ir);_ngZone=v(z$2);_listBase=v(Rt,{optional:!0});_platform=v(G$4);_hostElement;_isButtonElement;_noopAnimations=At$2();_avatars;_icons;set lines(t){this._explicitLines=ji(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Nv(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Nv(t))}_disabled=Po(!1);_subscriptions=new P$1;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){v(we).load(ks);let t=v(Yi,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()===`button`,this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute(`type`)&&this._hostElement.setAttribute(`type`,`button`)}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add(`mat-mdc-list-item-interactive`),this._rippleRenderer=new pn$1(this,this._ngZone,this._hostElement,this._platform,v(he$2)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Uh(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle(`mat-mdc-list-item-single-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-one-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-two-lines`,e===2),this._hostElement.classList.toggle(`mdc-list-item--with-three-lines`,e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;n.classList.toggle(`mdc-list-item__primary-text`,o),n.classList.toggle(`mdc-list-item__secondary-text`,!o)}else n.classList.remove(`mdc-list-item__primary-text`),n.classList.remove(`mdc-list-item__secondary-text`)}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static ɵfac=function(e){return new(e||i)};static ɵdir=QI({type:i,contentQueries:function(e,n,o){if(e&1&&Np(o,ai,4)(o,Ot,4),e&2){let s;NE(s=SE())&&(n._avatars=s),NE(s=SE())&&(n._icons=s)}},hostVars:4,hostBindings:function(e,n){e&2&&(vp(`aria-disabled`,n.disabled)(`disabled`,n._isButtonElement&&n.disabled||null),Lp(`mdc-list-item--disabled`,n.disabled))},inputs:{lines:`lines`,disableRipple:`disableRipple`,disabled:`disabled`}})}return i})();var Ae=(()=>{class i extends oi{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Nv(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName===`A`&&this._activated?`page`:null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static ɵfac=(()=>{let t;return function(n){return(t||(t=Nm(i)))(n||i)}})();static ɵcmp=UI({type:i,selectors:[[`mat-list-item`],[`a`,`mat-list-item`,``],[`button`,`mat-list-item`,``]],contentQueries:function(e,n,o){if(e&1&&Np(o,ii,5)(o,Ft,5)(o,ni,5),e&2){let s;NE(s=SE())&&(n._lines=s),NE(s=SE())&&(n._titles=s),NE(s=SE())&&(n._meta=s)}},viewQuery:function(e,n){if(e&1&&Sp(Xe,5)(Ye,5),e&2){let o;NE(o=SE())&&(n._unscopedContent=o.first),NE(o=SE())&&(n._itemText=o.first)}},hostAttrs:[1,`mat-mdc-list-item`,`mdc-list-item`],hostVars:13,hostBindings:function(e,n){e&2&&(vp(`aria-current`,n._getAriaCurrent()),Lp(`mdc-list-item--activated`,n.activated)(`mdc-list-item--with-leading-avatar`,n._avatars.length!==0)(`mdc-list-item--with-leading-icon`,n._icons.length!==0)(`mdc-list-item--with-trailing-meta`,n._meta.length!==0)(`mat-mdc-list-item-both-leading-and-trailing`,n._hasBothLeadingAndTrailing())(`_mat-animation-noopable`,n._noopAnimations))},inputs:{activated:`activated`},exportAs:[`matListItem`],features:[dp],ngContentSelectors:ti,decls:10,vars:0,consts:[[`unscopedContent`,``],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mat-focus-indicator`]],template:function(e,n){e&1&&(CE(Je),_E(0),di$2(1,`span`,1),_E(2,1),_E(3,2),di$2(4,`span`,2,0),_p(`cdkObserveContent`,function(){return n._updateItemLines(!0)}),_E(6,3),Nc$1()(),_E(7,4),_E(8,5),Ep(9,`div`,3))},dependencies:[nb],encapsulation:2})}return i})();var Le=(()=>{class i extends Rt{_isNonInteractive=!1;static ɵfac=(()=>{let t;return function(n){return(t||(t=Nm(i)))(n||i)}})();static ɵcmp=UI({type:i,selectors:[[`mat-nav-list`]],hostAttrs:[`role`,`navigation`,1,`mat-mdc-nav-list`,`mat-mdc-list-base`,`mdc-list`],exportAs:[`matNavList`],features:[sD([{provide:Rt,useExisting:i}]),dp],ngContentSelectors:$e,decls:1,vars:0,template:function(e,n){e&1&&(CE(),_E(0))},styles:[Ke],encapsulation:2})}return i})();var Te=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=WI({type:i});static ɵinj=Ll$1({imports:[rb,js,_t$2,Rr,De]})}return i})();var _t=class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=UI({type:i,selectors:[[`app-footer-content`]],decls:5,vars:0,template:function(t,e){t&1&&(Sc$1(0,`footer`)(1,`p`),XE(2,`Copyright © 2026 ACME Studios.`),xc$1(),Sc$1(3,`p`),XE(4,`Powered by Angular 22 and Angular Material.`),xc$1()())},styles:[`.footer-content[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;height:80px;background-color:#708090;color:#fff;text-align:center;margin:0;padding:5px}`]})};var ci=()=>({exact:!0});var li=(i,a)=>a.link;function di(i,a){i&1&&(di$2(0,`span`),XE(1,`Learning Center`),Nc$1())}function mi(i,a){if(i&1&&(di$2(0,`span`,8),XE(1),Nc$1()),i&2){let t=TE().$implicit;fv(),Bp(t.label)}}function hi(i,a){if(i&1&&(di$2(0,`a`,4)(1,`mat-icon`,7),XE(2),Nc$1(),uE(3,mi,2,1,`span`,8),Nc$1()),i&2){let t=a.$implicit,e=TE();Ip(`routerLink`,t.link)(`routerLinkActiveOptions`,aD(4,ci)),fv(2),Bp(t.icon),fv(),dE(e.collapsed()?-1:3)}}var gt=class i{collapsed=Po(!1);options=[{link:`/home`,label:`Home`,icon:`home`},{link:`/about`,label:`About`,icon:`info`},{link:`/learning/categories`,label:`Categories`,icon:`category`},{link:`/learning/courses`,label:`Courses`,icon:`school`}];toggleMenu(){this.collapsed.update(a=>!a)}static ɵfac=function(t){return new(t||i)};static ɵcmp=UI({type:i,selectors:[[`app-layout`]],decls:14,vars:3,consts:[[`autosize`,``,1,`layout-container`],[`mode`,`side`,`opened`,``,1,`sidenav`],[1,`brand`],[`mat-icon-button`,``,`aria-label`,`Toggle navigation`,3,`click`],[`mat-list-item`,``,`routerLinkActive`,`active`,3,`routerLink`,`routerLinkActiveOptions`],[1,`content-shell`],[1,`page-content`],[`matListItemIcon`,``],[`matListItemTitle`,``]],template:function(t,e){t&1&&(di$2(0,`mat-sidenav-container`,0)(1,`mat-sidenav`,1)(2,`div`,2)(3,`button`,3),_p(`click`,function(){return e.toggleMenu()}),di$2(4,`mat-icon`),XE(5,`menu`),Nc$1()(),uE(6,di,2,0,`span`),Nc$1(),di$2(7,`mat-nav-list`),pE(8,hi,4,5,`a`,4,li),Nc$1()(),di$2(10,`mat-sidenav-content`,5)(11,`main`,6),Ep(12,`router-outlet`),Nc$1(),Ep(13,`app-footer-content`),Nc$1()()),t&2&&(fv(),Lp(`collapsed`,e.collapsed()),fv(5),dE(e.collapsed()?-1:6),fv(2),hE(e.options))},dependencies:[xi,gr,_l,Ie,Tt,Me,ht,yy,cd,yt$1,wt$1,Te,Le,Ae,Ot,Ft,_t],styles:[`.layout-container[_ngcontent-%COMP%]{min-height:100vh}.sidenav[_ngcontent-%COMP%]{width:230px;transition:width .18s ease}.sidenav.collapsed[_ngcontent-%COMP%]{width:72px}.brand[_ngcontent-%COMP%]{height:64px;display:flex;align-items:center;gap:12px;padding:0 12px;font-weight:600;white-space:nowrap}.active[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-secondary-container)}.content-shell[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.page-content[_ngcontent-%COMP%]{flex:1;padding:24px}`]})};hc(class i{title=Po(`learning-center`);static ɵfac=function(t){return new(t||i)};static ɵcmp=UI({type:i,selectors:[[`app-root`]],decls:1,vars:0,template:function(t,e){t&1&&Ep(0,`app-layout`)},dependencies:[gt],encapsulation:2})},Se).catch(i=>console.error(i));export{ls as $,At$2 as A,Se$2 as B,ft$1 as C,tt$1 as D,j$1 as E,Hi as F,da as G,_r as H,Jl as I,he$1 as J,dd as K,Ks as L,Es as M,G$4 as N,wt$1 as O,Gi as P,ks as Q,Nv as R,et$1 as S,it$1 as T,cd as U,Vi as V,cv as W,js as X,ji as Y,jv as Z,E$1 as _,M as a,ut$1 as at,Z$1 as b,_n as c,yy as ct,pn as d,me as et,qt as f,D$1 as g,$$1 as h,Ge$1 as i,tv as it,Cv as j,$g as k,ee as l,ze$2 as lt,yn as m,Bt as n,ql as nt,T as o,vy as ot,rt$1 as p,dv as q,Cn as r,rb as rt,Wt as s,we as st,An as t,mv as tt,mn as u,zi as ut,G$2 as v,h as w,_t$2 as x,U$1 as y,Rr as z};