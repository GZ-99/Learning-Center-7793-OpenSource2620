import{$n as se$1,Cn as hr,Cr as s,Ct as UI,Dn as je,Dt as VF,E as Ep,En as jF,F as Ip,G as Lp,Ht as Y,I as Ir,It as Wt,Jt as _p,Kt as _E,Lt as XE,Nt as Wg,Pn as na,Q as Np,Qt as au,S as Du,Sr as r,Tn as ir,Tt as Uh,U as Ll,Un as pp,V as LF,Wn as pr,Wt as Zp,X as Nc,Xt as ag,Y as NE,Zn as sD,_ as Ce,_t as Sp,a as AE,an as cu,ct as QI,d as Bh,er as sg,f as Bn,ft as Rc,gn as fv,h as CE,ir as uE,it as P,jn as lm,jt as WI,ln as di$1,m as By,mt as SE,nn as bp,nt as Oa,or as v,p as Bp,pt as S,q as Mn,sn as dE,sr as vp,st as Po,t as $E,tr as sn,u as BF,v as Ci,vr as z,w as EE,wn as ig,xn as he,y as Cr,yt as TE,zn as og}from"./chunk-Cq8j8mwn.js";import{A as At,C as ft,H as _r,J as he$1,K as dd,M as Es,N as G,P as Gi$1,Q as ks,S as et$1,T as it$1,V as Vi$1,W as cv,X as js,Z as jv,a as M,at as ut,g as D,h as $,j as Cv,k as $g,l as ee,n as Bt,nt as ql,q as dv,s as Wt$1,st as we,x as _t,y as U,z as Rr}from"./main-PVZ6X3SS.js";import{a as ci$1,c as jt,i as Vt,n as Mi$1,r as Ti,s as it$2}from"./chunk-BIAVIv35.js";var Si=[`text`];var Oi=[[[`mat-icon`]],`*`];var ki=[`mat-icon`,`*`];function xi(o,t){if(o&1&&Ep(0,`mat-pseudo-checkbox`,1),o&2){let e=TE();Ip(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function Ri(o,t){if(o&1&&Ep(0,`mat-pseudo-checkbox`,3),o&2)Ip(`disabled`,TE().disabled)}function Ei(o,t){if(o&1&&(di$1(0,`span`,4),XE(1),Nc()),o&2){let e=TE();fv(),Rc(`(`,e.group.label,`)`)}}var Ue=new S(`MAT_OPTION_PARENT_COMPONENT`);var Ze=new S(`MatOptgroup`);var qe=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}};var ke=(()=>{class o{_element=v(Ir);_changeDetectorRef=v(LF);_parent=v(Ue,{optional:!0});group=v(Ze,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=v(Gi$1).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Po(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new je;_text;_stateChanges=new Y;constructor(){let e=v(we);e.load(ks),e.load(_r),this._signalDisableRipple=!!this._parent&&na(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let n=this._getHostElement();typeof n.focus==`function`&&n.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Es(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new qe(this,e))}static ɵfac=function(i){return new(i||o)};static ɵcmp=UI({type:o,selectors:[[`mat-option`]],viewQuery:function(i,n){if(i&1&&Sp(Si,7),i&2){let s;NE(s=SE())&&(n._text=s.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(i,n){i&1&&_p(`click`,function(){return n._selectViaInteraction()})(`keydown`,function(r){return n._handleKeydown(r)}),i&2&&(bp(`id`,n.id),vp(`aria-selected`,n.selected)(`aria-disabled`,n.disabled.toString()),Lp(`mdc-list-item--selected`,n.selected)(`mat-mdc-option-multiple`,n.multiple)(`mat-mdc-option-active`,n.active)(`mdc-list-item--disabled`,n.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,jF]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:ki,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(i,n){i&1&&(CE(Oi),uE(0,xi,1,2,`mat-pseudo-checkbox`,1),_E(1),di$1(2,`span`,2,0),_E(4,1),Nc(),uE(5,Ri,1,1,`mat-pseudo-checkbox`,3),uE(6,Ei,2,1,`span`,4),Ep(7,`div`,5)),i&2&&(dE(n.multiple?0:-1),fv(5),dE(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),fv(),dE(n.group&&n.group._inert?6:-1),fv(),Ip(`matRippleTrigger`,n._getHostElement())(`matRippleDisabled`,n.disabled||n.disableRipple))},dependencies:[ft,jv],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return o})();function $t(o,t,e){if(e.length){let i=t.toArray(),n=e.toArray(),s=0;for(let r=0;r<o+1;r++)i[r].group&&i[r].group===n[s]&&s++;return s}return 0}function Jt(o,t,e,i){return o<e?o:o+t>e+i?Math.max(0,o-i+t):e}var oe=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}};var Qe=class extends oe{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(t,e,i,n,s,r){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.projectableNodes=n,this.bindings=s||null,this.directives=r||null}};var se=class extends oe{templateRef;viewContainerRef;context;injector;constructor(t,e,i,n){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i,this.injector=n}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}};var $e=class extends oe{element;constructor(t){super(),this.element=t instanceof Ir?t.nativeElement:t}};var Je=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof Qe)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof se)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof $e)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var xe=class extends Je{outletElement;_appRef;_defaultInjector;constructor(t,e,i){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=i}attachComponentPortal(t){let e;if(t.viewContainerRef){let i=t.injector||t.viewContainerRef.injector,n=i.get(Mn,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:i,ngModuleRef:n,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,n=t.injector||this._defaultInjector||he.NULL,s=n.get(se$1,i.injector);e=BF(t.component,{elementInjector:n,environmentInjector:s,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(n=>this.outletElement.appendChild(n)),i.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(i);n!==-1&&e.remove(n)}),this._attachedPortal=t,i}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var ei=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=WI({type:o});static ɵinj=Ll({})}return o})();var ti=cv();function ci(o){return new Re(o.get(et$1),o.get(ir))}var Re=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||``,this._previousHTMLStyles.top=t.style.top||``,t.style.left=Cv(-this._previousScrollPosition.left),t.style.top=Cv(-this._previousScrollPosition.top),t.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,n=e.style,s=i.scrollBehavior||``,r=n.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove(`cdk-global-scrollblock`),ti&&(i.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ti&&(i.scrollBehavior=s,n.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function hi(o,t){return new Ee(o.get($),o.get(z),o.get(et$1),t)}var Ee=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,n){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=n}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(Bn(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var re=class{enable(){}disable(){}attach(){}};function tt(o,t){return t.some(e=>{let i=o.bottom<e.top,n=o.top>e.bottom,s=o.right<e.left,r=o.left>e.right;return i||n||s||r})}function ii(o,t){return t.some(e=>{let i=o.top<e.top,n=o.bottom>e.bottom,s=o.left<e.left,r=o.right>e.right;return i||n||s||r})}function le(o,t){return new Pe(o.get($),o.get(et$1),o.get(z),t)}var Pe=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,n){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=n}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:n}=this._viewportRuler.getViewportSize();tt(e,[{width:i,height:n,bottom:n,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var di=(()=>{class o{_injector=v(he);noop=()=>new re;close=e=>hi(this._injector,e);block=()=>ci(this._injector);reposition=e=>le(this._injector,e);static ɵfac=function(i){return new(i||o)};static ɵprov=Wt({token:o,factory:o.ɵfac})}return o})();var ae=class{positionStrategy;scrollStrategy=new re;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var Me=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var pi=(()=>{class o{_attachedOverlays=[];_document=v(ir);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static ɵfac=function(i){return new(i||o)};static ɵprov=Wt({token:o,factory:o.ɵfac})}return o})();var ui=(()=>{class o extends pi{_ngZone=v(z);_renderer=v(hr).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let n=i.length-1;n>-1;n--){let s=i[n];if(this.canReceiveEvent(s,e,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(e));break}}};static ɵfac=function(i){return new(i||o)};static ɵprov=Wt({token:o,factory:o.ɵfac})}return o})();var fi=(()=>{class o extends pi{_platform=v(G);_ngZone=v(z);_renderer=v(hr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,n={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(i,`pointerdown`,this._pointerDownListener,n),s.listen(i,`click`,this._clickListener,n),s.listen(i,`auxclick`,this._clickListener,n),s.listen(i,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=he$1(e)};_clickListener=e=>{let i=he$1(e),n=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let r=s.length-1;r>-1;r--){let a=s[r],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(ni(a.overlayElement,i)||ni(a.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static ɵfac=function(i){return new(i||o)};static ɵprov=Wt({token:o,factory:o.ɵfac})}return o})();function ni(o,t){let e=typeof ShadowRoot<`u`&&ShadowRoot,i=t;for(;i;){if(i===o)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var mi=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=UI({type:o,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return o})();var _i=(()=>{class o{_platform=v(G);_containerElement;_document=v(ir);_styleLoader=v(we);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||dv()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let s=0;s<n.length;s++)n[s].remove()}let i=this._document.createElement(`div`);i.classList.add(e),dv()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(mi)}static ɵfac=function(i){return new(i||o)};static ɵprov=Wt({token:o,factory:o.ɵfac})}return o})();var it=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,n){this._renderer=e,this._ngZone=i,this.element=t.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents=`none`,t.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function nt(o){return o&&o.nodeType===1}var et=new Set;var De=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Y;_attachments=new Y;_detachments=new Y;_positionStrategy;_scrollStrategy;_locationChanges=P.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Y;_outsidePointerEvents=new Y;_afterNextRenderRef;constructor(t,e,i,n,s,r,a,c,p,h=!1,d,m){this._portalOutlet=t,this._host=e,this._pane=i,this._config=n,this._ngZone=s,this._keyboardDispatcher=r,this._document=a,this._location=c,this._outsideClickDispatcher=p,this._animationsDisabled=h,this._injector=d,this._renderer=m,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),et.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=By(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),et.delete(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,et.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=r(r({},this._config),t),this._updateElementSize()}setDirection(t){this._config=s(r({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t==`string`?t:t.value:`ltr`}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=Cv(this._config.width),t.height=Cv(this._config.height),t.minWidth=Cv(this._config.minWidth),t.minHeight=Cv(this._config.minHeight),t.maxWidth=Cv(this._config.maxWidth),t.maxHeight=Cv(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?``:`none`}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;nt(t)?t.after(this._host):t?.type===`parent`?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(t){}}_attachBackdrop(){let t=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new it(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let n=$g(e||[]).filter(s=>!!s);n.length&&(i?t.classList.add(...n):t.classList.remove(...n))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=By(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}};var oi=`cdk-overlay-connected-position-bounding-box`;var Pi=/([A-Za-z%]+)$/;function ot(o,t){return new Ae(t,o.get(et$1),o.get(ir),o.get(G),o.get(_i))}var Ae=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Y;_resizeSubscription=P.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,n,s){this._viewportRuler=e,this._document=i,this._platform=n,this._overlayContainer=s,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(oi),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,n=this._containerRect,s=[],r;for(let a of this._preferredPositions){let c=this._getOriginPoint(t,n,a),p=this._getOverlayPoint(c,e,a),h=this._getOverlayFit(p,e,i,a);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(h,p,i)){s.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!r||r.overlayFit.visibleArea<h.visibleArea)&&(r={overlayFit:h,overlayPoint:p,originPoint:c,position:a,overlayRect:e})}if(s.length){let a=null,c=-1;for(let p of s){let h=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);h>c&&(c=h,a=p)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&H(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(oi),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Ir?this._origin.nativeElement:nt(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let n;if(i.originX==`center`)n=t.left+t.width/2;else{let r=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;n=i.originX==`start`?r:a}e.left<0&&(n-=e.left);let s;return i.originY==`center`?s=t.top+t.height/2:s=i.originY==`top`?t.top:t.bottom,e.top<0&&(s-=e.top),{x:n,y:s}}_getOverlayPoint(t,e,i){let n;i.overlayX==`center`?n=-e.width/2:i.overlayX===`start`?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let s;return i.overlayY==`center`?s=-e.height/2:s=i.overlayY==`top`?0:-e.height,{x:t.x+n,y:t.y+s}}_getOverlayFit(t,e,i,n){let s=ri(e),{x:r,y:a}=t,c=this._getOffset(n,`x`),p=this._getOffset(n,`y`);c&&(r+=c),p&&(a+=p);let h=0-r,d=r+s.width-i.width,m=0-a,v=a+s.height-i.height,g=this._subtractOverflows(s.width,h,d),O=this._subtractOverflows(s.height,m,v),ct=g*O;return{visibleArea:ct,isCompletelyWithinViewport:s.width*s.height===ct,fitsInViewportVertically:O===s.height,fitsInViewportHorizontally:g==s.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let n=i.bottom-e.y,s=i.right-e.x,r=si(this._overlayRef.getConfig().minHeight),a=si(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||r!=null&&r<=n,p=t.fitsInViewportHorizontally||a!=null&&a<=s;return c&&p}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let n=ri(e),s=this._viewportRect,r=Math.max(t.x+n.width-s.width,0),a=Math.max(t.y+n.height-s.height,0),c=Math.max(s.top-i.top-t.y,0),p=Math.max(s.left-i.left-t.x,0),h=0,d=0;return n.width<=s.width?h=p||-r:h=t.x<this._getViewportMarginStart()?s.left-i.left-t.x:0,n.height<=s.height?d=c||-a:d=t.y<this._getViewportMarginTop()?s.top-i.top-t.y:0,this._previousPushAmount={x:h,y:d},{x:t.x+h,y:t.y+d}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!Mi(this._lastScrollVisibility,i)){let n=new Me(t,i);this._positionChanges.next(n)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,n=t.overlayY;t.overlayX===`center`?i=`center`:this._isRtl()?i=t.overlayX===`start`?`right`:`left`:i=t.overlayX===`start`?`left`:`right`;for(let s=0;s<e.length;s++)e[s].style.transformOrigin=`${i} ${n}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,n=this._isRtl(),s,r,a;if(e.overlayY===`top`)r=t.y,s=i.height-r+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)a=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),s=i.height-a+this._getViewportMarginTop();else{let v=Math.min(i.bottom-t.y+i.top,t.y),g=this._lastBoundingBoxSize.height;s=v*2,r=t.y-v,s>g&&!this._isInitialRender&&!this._growAfterOpen&&(r=t.y-g/2)}let c=e.overlayX===`start`&&!n||e.overlayX===`end`&&n,p=e.overlayX===`end`&&!n||e.overlayX===`start`&&n,h,d,m;if(p)m=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=t.x-this._getViewportMarginStart();else if(c)d=t.x,h=i.right-t.x-this._getViewportMarginEnd();else{let v=Math.min(i.right-t.x+i.left,t.x),g=this._lastBoundingBoxSize.width;h=v*2,d=t.x-v,h>g&&!this._isInitialRender&&!this._growAfterOpen&&(d=t.x-g/2)}return{top:r,left:d,bottom:a,right:m,width:h,height:s}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let s=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;n.width=Cv(i.width),n.height=Cv(i.height),n.top=Cv(i.top)||`auto`,n.bottom=Cv(i.bottom)||`auto`,n.left=Cv(i.left)||`auto`,n.right=Cv(i.right)||`auto`,e.overlayX===`center`?n.alignItems=`center`:n.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,s&&(n.maxHeight=Cv(s)),r&&(n.maxWidth=Cv(r))}this._lastBoundingBoxSize=i,H(this._boundingBox.style,n)}_resetBoundingBoxStyles(){H(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){H(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(t,e){let i={},n=this._hasExactPosition(),s=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(n){let h=this._viewportRuler.getViewportScrollPosition();H(i,this._getExactOverlayY(e,t,h)),H(i,this._getExactOverlayX(e,t,h))}else i.position=`static`;let a=``,c=this._getOffset(e,`x`),p=this._getOffset(e,`y`);c&&(a+=`translateX(${c}px) `),p&&(a+=`translateY(${p}px)`),i.transform=a.trim(),r.maxHeight&&(n?i.maxHeight=Cv(r.maxHeight):s&&(i.maxHeight=``)),r.maxWidth&&(n?i.maxWidth=Cv(r.maxWidth):s&&(i.maxWidth=``)),H(this._pane.style,i)}_getExactOverlayY(t,e,i){let n={top:``,bottom:``},s=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,i)),t.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(s.y+this._overlayRect.height)}px`;else n.top=Cv(s.y);return n}_getExactOverlayX(t,e,i){let n={left:``,right:``},s=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,i));let r;if(this._isRtl()?r=t.overlayX===`end`?`left`:`right`:r=t.overlayX===`end`?`right`:`left`,r===`right`)n.right=`${this._document.documentElement.clientWidth-(s.x+this._overlayRect.width)}px`;else n.left=Cv(s.x);return n}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ii(t,i),isOriginOutsideView:tt(t,i),isOverlayClipped:ii(e,i),isOverlayOutsideView:tt(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,n)=>i-Math.max(n,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e===`x`?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&$g(t).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof Ir)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();t&&(e.style.display=`block`);let i=e.getBoundingClientRect();return t&&(e.style.display=``),i}};function H(o,t){for(let e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);return o}function si(o){if(typeof o!=`number`&&o!=null){let[t,e]=o.split(Pi);return!e||e===`px`?parseFloat(t):null}return o||null}function ri(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function Mi(o,t){return o===t?!0:o.isOriginClipped===t.isOriginClipped&&o.isOriginOutsideView===t.isOriginOutsideView&&o.isOverlayClipped===t.isOverlayClipped&&o.isOverlayOutsideView===t.isOverlayOutsideView}var ai=`cdk-global-overlay-wrapper`;function gi(o){return new Ne}var Ne=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(ai),this._isDisposed=!1}top(t=``){return this._bottomOffset=``,this._topOffset=t,this._alignItems=`flex-start`,this}left(t=``){return this._xOffset=t,this._xPosition=`left`,this}bottom(t=``){return this._topOffset=``,this._bottomOffset=t,this._alignItems=`flex-end`,this}right(t=``){return this._xOffset=t,this._xPosition=`right`,this}start(t=``){return this._xOffset=t,this._xPosition=`start`,this}end(t=``){return this._xOffset=t,this._xPosition=`end`,this}width(t=``){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=``){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=``){return this.left(t),this._xPosition=`center`,this}centerVertically(t=``){return this.top(t),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:n,height:s,maxWidth:r,maxHeight:a}=this._overlayRef.getConfig(),c=(n===`100%`||n===`100vw`)&&(!r||r===`100%`||r===`100vw`),p=(s===`100%`||s===`100vh`)&&(!a||a===`100%`||a===`100vh`),h=this._xPosition,d=this._xOffset,m=this._overlayRef.getConfig().direction===`rtl`,v=``,g=``,O=``;c?O=`flex-start`:h===`center`?(O=`center`,m?g=d:v=d):m?h===`left`||h===`end`?(O=`flex-end`,v=d):(h===`right`||h===`start`)&&(O=`flex-start`,g=d):h===`left`||h===`start`?(O=`flex-start`,v=d):(h===`right`||h===`end`)&&(O=`flex-end`,g=d),t.position=this._cssPosition,t.marginLeft=c?`0`:v,t.marginTop=p?`0`:this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?`0`:g,e.justifyContent=O,e.alignItems=p?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(ai),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position=``,this._overlayRef=null,this._isDisposed=!0}};var yi=(()=>{class o{_injector=v(he);global(){return gi()}flexibleConnectedTo(e){return ot(this._injector,e)}static ɵfac=function(i){return new(i||o)};static ɵprov=Wt({token:o,factory:o.ɵfac})}return o})();var ce=new S(`OVERLAY_DEFAULT_CONFIG`);function st(o,t){o.get(we).load(mi);let e=o.get(_i),i=o.get(ir),n=o.get(Gi$1),s=o.get(Cr),r=o.get(dd),a=o.get(Oa,null,{optional:!0})||o.get(hr).createRenderer(null,null),c=new ae(t),p=o.get(ce,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,!i.body||!(`showPopover`in i.body)?c.usePopover=!1:c.usePopover=t?.usePopover??p;let h=i.createElement(`div`),d=i.createElement(`div`);h.id=n.getId(`cdk-overlay-`),h.classList.add(`cdk-overlay-pane`),d.appendChild(h),c.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let m=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return nt(m)?m.after(d):m?.type===`parent`?m.element.appendChild(d):e.getContainerElement().appendChild(d),new De(new xe(h,s,o),d,h,c,o.get(z),o.get(ui),i,o.get(ut),o.get(fi),t?.disableAnimations??o.get(Wg,null,{optional:!0})===`NoopAnimations`,o.get(se$1),a)}var vi=(()=>{class o{scrollStrategies=v(di);_positionBuilder=v(yi);_injector=v(he);create(e){return st(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||o)};static ɵprov=Wt({token:o,factory:o.ɵfac})}return o})();var Di=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var Ai=new S(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=v(he);return()=>le(o)}});var Q=(()=>{class o{elementRef=v(Ir);static ɵfac=function(i){return new(i||o)};static ɵdir=QI({type:o,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return o})();var bi=new S(`cdk-connected-overlay-default-config`);var Ie=(()=>{class o{_dir=v(dd,{optional:!0});_injector=v(he);_overlayRef;_templatePortal;_backdropSubscription=P.EMPTY;_attachSubscription=P.EMPTY;_detachSubscription=P.EMPTY;_positionSubscription=P.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=v(Ai);_ngZone=v(z);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new je;positionChange=new je;attach=new je;detach=new je;overlayKeydown=new je;overlayOutsideClick=new je;constructor(){let e=v(pr),i=v(Ci),n=v(bi,{optional:!0}),s=v(ce,{optional:!0});this.usePopover=s?.usePopover===!1?null:`global`,this._templatePortal=new se(e,i),this.scrollStrategy=this._scrollStrategyFactory(),n&&this._assignConfig(n)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Di);let e=this._overlayRef=st(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!Es(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let n=this._getOriginElement(),s=he$1(i);(!n||n!==s&&!n.contains(s))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new ae({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(n=>({originX:n.originX,originY:n.originY,overlayX:n.overlayX,overlayY:n.overlayY,offsetX:n.offsetX||this.offsetX,offsetY:n.offsetY||this.offsetY,panelClass:n.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=ot(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Q?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Q?this.origin.elementRef.nativeElement:this.origin instanceof Ir?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(ag(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(i){return new(i||o)};static ɵdir=QI({type:o,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,jF],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,jF],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,jF],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,jF],push:[2,`cdkConnectedOverlayPush`,`push`,jF],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,jF],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,jF],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[lm]})}return o})();var rt=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=WI({type:o});static ɵinj=Ll({providers:[vi],imports:[Rr,ei,it$1,it$1]})}return o})();var at=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=WI({type:o});static ɵinj=Ll({imports:[js,_t,ke,Rr]})}return o})();var Fi=[`trigger`];var Vi=[`panel`];var Bi=[[[`mat-select-trigger`]],`*`];var Li=[`mat-select-trigger`,`*`];function Yi(o,t){if(o&1&&(di$1(0,`span`,4),XE(1),Nc()),o&2){let e=TE();fv(),Bp(e.placeholder)}}function Hi(o,t){o&1&&_E(0)}function Wi(o,t){if(o&1&&(di$1(0,`span`,11),XE(1),Nc()),o&2){let e=TE(2);fv(),Bp(e.triggerValue)}}function Xi(o,t){if(o&1&&(di$1(0,`span`,5),uE(1,Hi,1,0)(2,Wi,2,1,`span`,11),Nc()),o&2){let e=TE();fv(),dE(e.customTrigger?1:2)}}function zi(o,t){if(o&1){let e=EE();di$1(0,`div`,12,1),_p(`keydown`,function(n){au(e);return cu(TE()._handleKeydown(n))}),_E(2,1),Nc()}if(o&2){let e=TE();$E(e.panelClass),Lp(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),vp(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var ji=new S(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=v(he);return()=>le(o)}});var Ki=new S(`MAT_SELECT_CONFIG`);var Gi=new S(`MatSelectTrigger`);var lt=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Xo=(()=>{class o{_viewportRuler=v(et$1);_changeDetectorRef=v(LF);_elementRef=v(Ir);_dir=v(dd,{optional:!0});_idGenerator=v(Gi$1);_renderer=v(Oa);_parentFormField=v(Vt,{optional:!0});ngControl=v(M,{self:!0,optional:!0});_liveAnnouncer=v(ql);_defaultOptions=v(Ki,{optional:!0});_animationsDisabled=At();_popoverLocation;_initialized=new Y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let n=this.panel.nativeElement,s=$t(e,this.options,this.optionGroups),r=i._getHostElement();e===0&&s===1?n.scrollTop=0:n.scrollTop=Jt(r.offsetTop,r.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new lt(this,e)}_scrollStrategyFactory=v(ji);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Y;_errorStateTracker;stateChanges=new Y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Po(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ee.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Bh(()=>{let e=this.options;return e?e.changes.pipe(og(e),ig(()=>Uh(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(ig(()=>this.optionSelectionChanges))});openedChange=new je;_openedStream=this.openedChange.pipe(Bn(e=>e),Ce(()=>{}));_closedStream=this.openedChange.pipe(Bn(e=>!e),Ce(()=>{}));selectionChange=new je;valueChange=new je;constructor(){let e=v(Ti),i=v(Bt,{optional:!0}),n=v(Wt$1,{optional:!0}),s=v(new Zp(`tabindex`),{optional:!0}),r=v(ce,{optional:!0}),a=v(Mi$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new it$2(e,a||this.ngControl,n,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=s==null?0:parseInt(s)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new D(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(sg(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(sg(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(og(null),sg(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute(`aria-labelledby`,e):n.removeAttribute(`aria-labelledby`)}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(sn(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,`animationend`,s=>{s.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,n=i===40||i===38||i===37||i===39,s=i===13||i===32,r=this._keyManager;if(!r.isTyping()&&s&&!Es(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;r.onKeydown(e);let c=this.selected;c&&a!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,n=e.keyCode,s=n===40||n===38,r=i.isTyping();if(s&&e.altKey)e.preventDefault(),this.close();else if(!r&&(n===13||n===32)&&i.activeItem&&!Es(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!r&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(a?c.select():c.deselect())})}else{let a=i.activeItemIndex;i.onKeydown(e),this._multiple&&s&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==a&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Es(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch(s){return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Q?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Vi$1(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Uh(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(sg(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Uh(...this.options.map(i=>i._stateChanges)).pipe(sg(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,n)=>this.sortComparator?this.sortComparator(i,n,e):e.indexOf(i)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(n=>n.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(e){let i=he$1(e);i&&(i.tagName===`MAT-OPTION`||i.classList.contains(`cdk-overlay-backdrop`)||i.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(i){return new(i||o)};static ɵcmp=UI({type:o,selectors:[[`mat-select`]],contentQueries:function(i,n,s){if(i&1&&Np(s,Gi,5)(s,ke,5)(s,Ze,5),i&2){let r;NE(r=SE())&&(n.customTrigger=r.first),NE(r=SE())&&(n.options=r),NE(r=SE())&&(n.optionGroups=r)}},viewQuery:function(i,n){if(i&1&&Sp(Fi,5)(Vi,5)(Ie,5),i&2){let s;NE(s=SE())&&(n.trigger=s.first),NE(s=SE())&&(n.panel=s.first),NE(s=SE())&&(n._overlayDir=s.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(i,n){i&1&&_p(`keydown`,function(r){return n._handleKeydown(r)})(`focus`,function(){return n._onFocus()})(`blur`,function(){return n._onBlur()}),i&2&&(vp(`id`,n.id)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n.panelOpen?n.id+`-panel`:null)(`aria-expanded`,n.panelOpen)(`aria-label`,n.ariaLabel||null)(`aria-required`,n.required.toString())(`aria-disabled`,n.disabled.toString())(`aria-invalid`,n.errorState)(`aria-activedescendant`,n._getAriaActiveDescendant()),Lp(`mat-mdc-select-disabled`,n.disabled)(`mat-mdc-select-invalid`,n.errorState)(`mat-mdc-select-required`,n.required)(`mat-mdc-select-empty`,n.empty)(`mat-mdc-select-multiple`,n.multiple)(`mat-select-open`,n.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,jF],disableRipple:[2,`disableRipple`,`disableRipple`,jF],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:VF(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,jF],placeholder:`placeholder`,required:[2,`required`,`required`,jF],multiple:[2,`multiple`,`multiple`,jF],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,jF],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,VF],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,jF]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[sD([{provide:jt,useExisting:o},{provide:Ue,useExisting:o}]),lm],ngContentSelectors:Li,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(i,n){if(i&1&&(CE(Bi),di$1(0,`div`,2,0),_p(`click`,function(){return n.open()}),di$1(3,`div`,3),uE(4,Yi,2,1,`span`,4)(5,Xi,3,1,`span`,5),Nc(),di$1(6,`div`,6)(7,`div`,7),Du(),di$1(8,`svg`,8),Ep(9,`path`,9),Nc()()()(),pp(10,zi,3,16,`ng-template`,10),_p(`detach`,function(){return n.close()})(`backdropClick`,function(){return n.close()})(`overlayKeydown`,function(r){return n._handleOverlayKeydown(r)})),i&2){let s=AE(1);fv(3),vp(`id`,n._valueId),fv(),dE(n.empty?4:5),fv(6),Ip(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,n._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,n._scrollStrategy)(`cdkConnectedOverlayOrigin`,n._preferredOverlayOrigin||s)(`cdkConnectedOverlayPositions`,n._positions)(`cdkConnectedOverlayWidth`,n._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,n._popoverLocation)}},dependencies:[Q,Ie],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return o})();var zo=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=WI({type:o});static ɵinj=Ll({imports:[rt,at,Rr,U,ci$1,at]})}return o})();export{ot as a,le as i,Xo as n,st as o,ke as r,zo as s,Qe as t};