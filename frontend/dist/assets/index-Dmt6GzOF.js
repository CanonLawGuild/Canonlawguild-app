function mf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uu={exports:{}},ho={},du={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),gf=Symbol.for("react.portal"),yf=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),vf=Symbol.for("react.profiler"),wf=Symbol.for("react.provider"),jf=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),Nf=Symbol.for("react.memo"),kf=Symbol.for("react.lazy"),Cl=Symbol.iterator;function Cf(e){return e===null||typeof e!="object"?null:(e=Cl&&e[Cl]||e["@@iterator"],typeof e=="function"?e:null)}var pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fu=Object.assign,mu={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=mu,this.updater=n||pu}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hu(){}hu.prototype=Xn.prototype;function xs(e,t,n){this.props=e,this.context=t,this.refs=mu,this.updater=n||pu}var vs=xs.prototype=new hu;vs.constructor=xs;fu(vs,Xn.prototype);vs.isPureReactComponent=!0;var El=Array.isArray,gu=Object.prototype.hasOwnProperty,ws={current:null},yu={key:!0,ref:!0,__self:!0,__source:!0};function xu(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)gu.call(t,r)&&!yu.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:qr,type:e,key:o,ref:a,props:i,_owner:ws.current}}function Ef(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function js(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function Tf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tl=/\/+/g;function Io(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tf(""+e.key):t.toString(36)}function Ni(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case qr:case gf:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Io(a,0):r,El(i)?(n="",e!=null&&(n=e.replace(Tl,"$&/")+"/"),Ni(i,t,n,"",function(u){return u})):i!=null&&(js(i)&&(i=Ef(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Tl,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",El(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Io(o,l);a+=Ni(o,t,n,c,i)}else if(c=Cf(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Io(o,l++),a+=Ni(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return Ni(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Pf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},ki={transition:null},Rf={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ki,ReactCurrentOwner:ws};function vu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!js(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Xn;F.Fragment=yf;F.Profiler=vf;F.PureComponent=xs;F.StrictMode=xf;F.Suspense=bf;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rf;F.act=vu;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fu({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ws.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)gu.call(t,c)&&!yu.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:qr,type:e.type,key:i,ref:o,props:r,_owner:a}};F.createContext=function(e){return e={$$typeof:jf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wf,_context:e},e.Consumer=e};F.createElement=xu;F.createFactory=function(e){var t=xu.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Sf,render:e}};F.isValidElement=js;F.lazy=function(e){return{$$typeof:kf,_payload:{_status:-1,_result:e},_init:Pf}};F.memo=function(e,t){return{$$typeof:Nf,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=ki.transition;ki.transition={};try{e()}finally{ki.transition=t}};F.unstable_act=vu;F.useCallback=function(e,t){return ke.current.useCallback(e,t)};F.useContext=function(e){return ke.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};F.useEffect=function(e,t){return ke.current.useEffect(e,t)};F.useId=function(){return ke.current.useId()};F.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ke.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};F.useRef=function(e){return ke.current.useRef(e)};F.useState=function(e){return ke.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ke.current.useTransition()};F.version="18.3.1";du.exports=F;var b=du.exports;const yr=hf(b),_f=mf({__proto__:null,default:yr},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf=b,Of=Symbol.for("react.element"),Af=Symbol.for("react.fragment"),zf=Object.prototype.hasOwnProperty,Df=Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bf={key:!0,ref:!0,__self:!0,__source:!0};function wu(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)zf.call(t,r)&&!Bf.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Of,type:e,key:o,ref:a,props:i,_owner:Df.current}}ho.Fragment=Af;ho.jsx=wu;ho.jsxs=wu;uu.exports=ho;var s=uu.exports,ju={exports:{}},Me={},Su={exports:{}},bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var O=P.length;P.push(A);e:for(;0<O;){var D=O-1>>>1,W=P[D];if(0<i(W,A))P[D]=A,P[O]=W,O=D;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],O=P.pop();if(O!==A){P[0]=O;e:for(var D=0,W=P.length,Je=W>>>1;D<Je;){var Ae=2*(D+1)-1,wn=P[Ae],I=Ae+1,de=P[I];if(0>i(wn,O))I<W&&0>i(de,wn)?(P[D]=de,P[I]=O,D=I):(P[D]=wn,P[Ae]=O,D=Ae);else if(I<W&&0>i(de,O))P[D]=de,P[I]=O,D=I;else break e}}return A}function i(P,A){var O=P.sortIndex-A.sortIndex;return O!==0?O:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],m=1,p=null,h=3,x=!1,w=!1,j=!1,S=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(u)}}function v(P){if(j=!1,g(P),!w)if(n(c)!==null)w=!0,dt(k);else{var A=n(u);A!==null&&Jt(v,A.startTime-P)}}function k(P,A){w=!1,j&&(j=!1,d(_),_=-1),x=!0;var O=h;try{for(g(A),p=n(c);p!==null&&(!(p.expirationTime>A)||P&&!Y());){var D=p.callback;if(typeof D=="function"){p.callback=null,h=p.priorityLevel;var W=D(p.expirationTime<=A);A=e.unstable_now(),typeof W=="function"?p.callback=W:p===n(c)&&r(c),g(A)}else r(c);p=n(c)}if(p!==null)var Je=!0;else{var Ae=n(u);Ae!==null&&Jt(v,Ae.startTime-A),Je=!1}return Je}finally{p=null,h=O,x=!1}}var C=!1,T=null,_=-1,$=5,L=-1;function Y(){return!(e.unstable_now()-L<$)}function ot(){if(T!==null){var P=e.unstable_now();L=P;var A=!0;try{A=T(!0,P)}finally{A?Nt():(C=!1,T=null)}}else C=!1}var Nt;if(typeof f=="function")Nt=function(){f(ot)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,vn=Oe.port2;Oe.port1.onmessage=ot,Nt=function(){vn.postMessage(null)}}else Nt=function(){S(ot,0)};function dt(P){T=P,C||(C=!0,Nt())}function Jt(P,A){_=S(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,dt(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var O=h;h=A;try{return P()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=h;h=P;try{return A()}finally{h=O}},e.unstable_scheduleCallback=function(P,A,O){var D=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?D+O:D):O=D,P){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=O+W,P={id:m++,callback:A,priorityLevel:P,startTime:O,expirationTime:W,sortIndex:-1},O>D?(P.sortIndex=O,t(u,P),n(c)===null&&P===n(u)&&(j?(d(_),_=-1):j=!0,Jt(v,O-D))):(P.sortIndex=W,t(c,P),w||x||(w=!0,dt(k))),P},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(P){var A=h;return function(){var O=h;h=A;try{return P.apply(this,arguments)}finally{h=O}}}})(bu);Su.exports=bu;var Ff=Su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If=b,Ie=Ff;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nu=new Set,Er={};function gn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(Er[e]=t,e=0;e<t.length;e++)Nu.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xa=Object.prototype.hasOwnProperty,Mf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pl={},Rl={};function Uf(e){return xa.call(Rl,e)?!0:xa.call(Pl,e)?!1:Mf.test(e)?Rl[e]=!0:(Pl[e]=!0,!1)}function $f(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wf(e,t,n,r){if(t===null||typeof t>"u"||$f(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ss=/[\-:]([a-z])/g;function bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ss,bs);he[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ss,bs);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ss,bs);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ns(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wf(t,n,i,r)&&(n=null),r||i===null?Uf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),bn=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),ks=Symbol.for("react.strict_mode"),va=Symbol.for("react.profiler"),ku=Symbol.for("react.provider"),Cu=Symbol.for("react.context"),Cs=Symbol.for("react.forward_ref"),wa=Symbol.for("react.suspense"),ja=Symbol.for("react.suspense_list"),Es=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Eu=Symbol.for("react.offscreen"),_l=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=_l&&e[_l]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Mo;function fr(e){if(Mo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mo=t&&t[1]||""}return`
`+Mo+e}var Uo=!1;function $o(e,t){if(!e||Uo)return"";Uo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Uo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fr(e):""}function Hf(e){switch(e.tag){case 5:return fr(e.type);case 16:return fr("Lazy");case 13:return fr("Suspense");case 19:return fr("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function Sa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case bn:return"Portal";case va:return"Profiler";case ks:return"StrictMode";case wa:return"Suspense";case ja:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cu:return(e.displayName||"Context")+".Consumer";case ku:return(e._context.displayName||"Context")+".Provider";case Cs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Es:return t=e.displayName||null,t!==null?t:Sa(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return Sa(e(t))}catch{}}return null}function Vf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sa(t);case 8:return t===ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gf(e){var t=Tu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=Gf(e))}function Pu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ba(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ll(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ru(e,t){t=t.checked,t!=null&&Ns(e,"checked",t,!1)}function Na(e,t){Ru(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ka(e,t.type,n):t.hasOwnProperty("defaultValue")&&ka(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ol(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ka(e,t,n){(t!=="number"||Ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ca(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Al(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(mr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function _u(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ea(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,Ou=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qf=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){qf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});function Au(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function zu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Au(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Qf=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(Qf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=null;function Ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,Dn=null,Bn=null;function Dl(e){if(e=Jr(e)){if(typeof _a!="function")throw Error(N(280));var t=e.stateNode;t&&(t=wo(t),_a(e.stateNode,e.type,t))}}function Du(e){Dn?Bn?Bn.push(e):Bn=[e]:Dn=e}function Bu(){if(Dn){var e=Dn,t=Bn;if(Bn=Dn=null,Dl(e),t)for(e=0;e<t.length;e++)Dl(t[e])}}function Fu(e,t){return e(t)}function Iu(){}var Wo=!1;function Mu(e,t,n){if(Wo)return e(t,n);Wo=!0;try{return Fu(e,t,n)}finally{Wo=!1,(Dn!==null||Bn!==null)&&(Iu(),Bu())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var La=!1;if(vt)try{var or={};Object.defineProperty(or,"passive",{get:function(){La=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{La=!1}function Kf(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var vr=!1,Mi=null,Ui=!1,Oa=null,Jf={onError:function(e){vr=!0,Mi=e}};function Xf(e,t,n,r,i,o,a,l,c){vr=!1,Mi=null,Kf.apply(Jf,arguments)}function Yf(e,t,n,r,i,o,a,l,c){if(Xf.apply(this,arguments),vr){if(vr){var u=Mi;vr=!1,Mi=null}else throw Error(N(198));Ui||(Ui=!0,Oa=u)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bl(e){if(yn(e)!==e)throw Error(N(188))}function Zf(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Bl(i),e;if(o===r)return Bl(i),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function $u(e){return e=Zf(e),e!==null?Wu(e):null}function Wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wu(e);if(t!==null)return t;e=e.sibling}return null}var Hu=Ie.unstable_scheduleCallback,Fl=Ie.unstable_cancelCallback,em=Ie.unstable_shouldYield,tm=Ie.unstable_requestPaint,te=Ie.unstable_now,nm=Ie.unstable_getCurrentPriorityLevel,Ps=Ie.unstable_ImmediatePriority,Vu=Ie.unstable_UserBlockingPriority,$i=Ie.unstable_NormalPriority,rm=Ie.unstable_LowPriority,Gu=Ie.unstable_IdlePriority,go=null,ct=null;function im(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:sm,om=Math.log,am=Math.LN2;function sm(e){return e>>>=0,e===0?32:31-(om(e)/am|0)|0}var ci=64,ui=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=hr(l):(o&=a,o!==0&&(r=hr(o)))}else a=n&~i,a!==0?r=hr(a):o!==0&&(r=hr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),i=1<<n,r|=e[n],t&=~i;return r}function lm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-nt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=lm(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qu(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function Ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function um(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Rs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Qu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ku,_s,Ju,Xu,Yu,za=!1,di=[],At=null,zt=null,Dt=null,Rr=new Map,_r=new Map,Pt=[],dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Il(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function ar(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&_s(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pm(e,t,n,r,i){switch(t){case"focusin":return At=ar(At,e,t,n,r,i),!0;case"dragenter":return zt=ar(zt,e,t,n,r,i),!0;case"mouseover":return Dt=ar(Dt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rr.set(o,ar(Rr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_r.set(o,ar(_r.get(o)||null,e,t,n,r,i)),!0}return!1}function Zu(e){var t=en(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Uu(n),t!==null){e.blockedOn=t,Yu(e.priority,function(){Ju(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Da(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ra=r,n.target.dispatchEvent(r),Ra=null}else return t=Jr(n),t!==null&&_s(t),e.blockedOn=n,!1;t.shift()}return!0}function Ml(e,t,n){Ci(e)&&n.delete(t)}function fm(){za=!1,At!==null&&Ci(At)&&(At=null),zt!==null&&Ci(zt)&&(zt=null),Dt!==null&&Ci(Dt)&&(Dt=null),Rr.forEach(Ml),_r.forEach(Ml)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,za||(za=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,fm)))}function Lr(e){function t(i){return sr(i,e)}if(0<di.length){sr(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&sr(At,e),zt!==null&&sr(zt,e),Dt!==null&&sr(Dt,e),Rr.forEach(t),_r.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Zu(n),n.blockedOn===null&&Pt.shift()}var Fn=bt.ReactCurrentBatchConfig,Hi=!0;function mm(e,t,n,r){var i=U,o=Fn.transition;Fn.transition=null;try{U=1,Ls(e,t,n,r)}finally{U=i,Fn.transition=o}}function hm(e,t,n,r){var i=U,o=Fn.transition;Fn.transition=null;try{U=4,Ls(e,t,n,r)}finally{U=i,Fn.transition=o}}function Ls(e,t,n,r){if(Hi){var i=Da(e,t,n,r);if(i===null)ea(e,t,r,Vi,n),Il(e,r);else if(pm(i,e,t,n,r))r.stopPropagation();else if(Il(e,r),t&4&&-1<dm.indexOf(e)){for(;i!==null;){var o=Jr(i);if(o!==null&&Ku(o),o=Da(e,t,n,r),o===null&&ea(e,t,r,Vi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ea(e,t,r,null,n)}}var Vi=null;function Da(e,t,n,r){if(Vi=null,e=Ts(r),e=en(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vi=e,null}function ed(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nm()){case Ps:return 1;case Vu:return 4;case $i:case rm:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var _t=null,Os=null,Ei=null;function td(){if(Ei)return Ei;var e,t=Os,n=t.length,r,i="value"in _t?_t.value:_t.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ei=i.slice(e,1<r?1-r:void 0)}function Ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function Ul(){return!1}function Ue(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pi:Ul,this.isPropagationStopped=Ul,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=Ue(Yn),Kr=X({},Yn,{view:0,detail:0}),gm=Ue(Kr),Vo,Go,lr,yo=X({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(Vo=e.screenX-lr.screenX,Go=e.screenY-lr.screenY):Go=Vo=0,lr=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:Go}}),$l=Ue(yo),ym=X({},yo,{dataTransfer:0}),xm=Ue(ym),vm=X({},Kr,{relatedTarget:0}),qo=Ue(vm),wm=X({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),jm=Ue(wm),Sm=X({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bm=Ue(Sm),Nm=X({},Yn,{data:0}),Wl=Ue(Nm),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Em[e])?!!t[e]:!1}function zs(){return Tm}var Pm=X({},Kr,{key:function(e){if(e.key){var t=km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(e){return e.type==="keypress"?Ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rm=Ue(Pm),_m=X({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=Ue(_m),Lm=X({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),Om=Ue(Lm),Am=X({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zm=Ue(Am),Dm=X({},yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=Ue(Dm),Fm=[9,13,27,32],Ds=vt&&"CompositionEvent"in window,wr=null;vt&&"documentMode"in document&&(wr=document.documentMode);var Im=vt&&"TextEvent"in window&&!wr,nd=vt&&(!Ds||wr&&8<wr&&11>=wr),Vl=" ",Gl=!1;function rd(e,t){switch(e){case"keyup":return Fm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Mm(e,t){switch(e){case"compositionend":return id(t);case"keypress":return t.which!==32?null:(Gl=!0,Vl);case"textInput":return e=t.data,e===Vl&&Gl?null:e;default:return null}}function Um(e,t){if(kn)return e==="compositionend"||!Ds&&rd(e,t)?(e=td(),Ei=Os=_t=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nd&&t.locale!=="ko"?null:t.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$m[e.type]:t==="textarea"}function od(e,t,n,r){Du(r),t=Gi(t,"onChange"),0<t.length&&(n=new As("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jr=null,Or=null;function Wm(e){gd(e,0)}function xo(e){var t=Tn(e);if(Pu(t))return e}function Hm(e,t){if(e==="change")return t}var ad=!1;if(vt){var Qo;if(vt){var Ko="oninput"in document;if(!Ko){var Ql=document.createElement("div");Ql.setAttribute("oninput","return;"),Ko=typeof Ql.oninput=="function"}Qo=Ko}else Qo=!1;ad=Qo&&(!document.documentMode||9<document.documentMode)}function Kl(){jr&&(jr.detachEvent("onpropertychange",sd),Or=jr=null)}function sd(e){if(e.propertyName==="value"&&xo(Or)){var t=[];od(t,Or,e,Ts(e)),Mu(Wm,t)}}function Vm(e,t,n){e==="focusin"?(Kl(),jr=t,Or=n,jr.attachEvent("onpropertychange",sd)):e==="focusout"&&Kl()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(Or)}function qm(e,t){if(e==="click")return xo(t)}function Qm(e,t){if(e==="input"||e==="change")return xo(t)}function Km(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Km;function Ar(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xa.call(t,i)||!it(e[i],t[i]))return!1}return!0}function Jl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xl(e,t){var n=Jl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jl(n)}}function ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cd(){for(var e=window,t=Ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ii(e.document)}return t}function Bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jm(e){var t=cd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ld(n.ownerDocument.documentElement,n)){if(r!==null&&Bs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Xl(n,o);var a=Xl(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xm=vt&&"documentMode"in document&&11>=document.documentMode,Cn=null,Ba=null,Sr=null,Fa=!1;function Yl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fa||Cn==null||Cn!==Ii(r)||(r=Cn,"selectionStart"in r&&Bs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Ar(Sr,r)||(Sr=r,r=Gi(Ba,"onSelect"),0<r.length&&(t=new As("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},Jo={},ud={};vt&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function vo(e){if(Jo[e])return Jo[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ud)return Jo[e]=t[n];return e}var dd=vo("animationend"),pd=vo("animationiteration"),fd=vo("animationstart"),md=vo("transitionend"),hd=new Map,Zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){hd.set(e,t),gn(t,[e])}for(var Xo=0;Xo<Zl.length;Xo++){var Yo=Zl[Xo],Ym=Yo.toLowerCase(),Zm=Yo[0].toUpperCase()+Yo.slice(1);Vt(Ym,"on"+Zm)}Vt(dd,"onAnimationEnd");Vt(pd,"onAnimationIteration");Vt(fd,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(md,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eh=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function ec(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yf(r,t,void 0,e),e.currentTarget=null}function gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;ec(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;ec(i,l,u),o=c}}}if(Ui)throw e=Oa,Ui=!1,Oa=null,e}function G(e,t){var n=t[Wa];n===void 0&&(n=t[Wa]=new Set);var r=e+"__bubble";n.has(r)||(yd(t,e,2,!1),n.add(r))}function Zo(e,t,n){var r=0;t&&(r|=4),yd(n,e,r,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function zr(e){if(!e[mi]){e[mi]=!0,Nu.forEach(function(n){n!=="selectionchange"&&(eh.has(n)||Zo(n,!1,e),Zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,Zo("selectionchange",!1,t))}}function yd(e,t,n,r){switch(ed(t)){case 1:var i=mm;break;case 4:i=hm;break;default:i=Ls}n=i.bind(null,t,n,e),i=void 0,!La||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ea(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=en(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Mu(function(){var u=o,m=Ts(n),p=[];e:{var h=hd.get(e);if(h!==void 0){var x=As,w=e;switch(e){case"keypress":if(Ti(n)===0)break e;case"keydown":case"keyup":x=Rm;break;case"focusin":w="focus",x=qo;break;case"focusout":w="blur",x=qo;break;case"beforeblur":case"afterblur":x=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=$l;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Om;break;case dd:case pd:case fd:x=jm;break;case md:x=zm;break;case"scroll":x=gm;break;case"wheel":x=Bm;break;case"copy":case"cut":case"paste":x=bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Hl}var j=(t&4)!==0,S=!j&&e==="scroll",d=j?h!==null?h+"Capture":null:h;j=[];for(var f=u,g;f!==null;){g=f;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,d!==null&&(v=Pr(f,d),v!=null&&j.push(Dr(f,v,g)))),S)break;f=f.return}0<j.length&&(h=new x(h,w,null,n,m),p.push({event:h,listeners:j}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Ra&&(w=n.relatedTarget||n.fromElement)&&(en(w)||w[wt]))break e;if((x||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?en(w):null,w!==null&&(S=yn(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(j=$l,v="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(j=Hl,v="onPointerLeave",d="onPointerEnter",f="pointer"),S=x==null?h:Tn(x),g=w==null?h:Tn(w),h=new j(v,f+"leave",x,n,m),h.target=S,h.relatedTarget=g,v=null,en(m)===u&&(j=new j(d,f+"enter",w,n,m),j.target=g,j.relatedTarget=S,v=j),S=v,x&&w)t:{for(j=x,d=w,f=0,g=j;g;g=jn(g))f++;for(g=0,v=d;v;v=jn(v))g++;for(;0<f-g;)j=jn(j),f--;for(;0<g-f;)d=jn(d),g--;for(;f--;){if(j===d||d!==null&&j===d.alternate)break t;j=jn(j),d=jn(d)}j=null}else j=null;x!==null&&tc(p,h,x,j,!1),w!==null&&S!==null&&tc(p,S,w,j,!0)}}e:{if(h=u?Tn(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var k=Hm;else if(ql(h))if(ad)k=Qm;else{k=Gm;var C=Vm}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=qm);if(k&&(k=k(e,u))){od(p,k,n,m);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ka(h,"number",h.value)}switch(C=u?Tn(u):window,e){case"focusin":(ql(C)||C.contentEditable==="true")&&(Cn=C,Ba=u,Sr=null);break;case"focusout":Sr=Ba=Cn=null;break;case"mousedown":Fa=!0;break;case"contextmenu":case"mouseup":case"dragend":Fa=!1,Yl(p,n,m);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":Yl(p,n,m)}var T;if(Ds)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else kn?rd(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(nd&&n.locale!=="ko"&&(kn||_!=="onCompositionStart"?_==="onCompositionEnd"&&kn&&(T=td()):(_t=m,Os="value"in _t?_t.value:_t.textContent,kn=!0)),C=Gi(u,_),0<C.length&&(_=new Wl(_,e,null,n,m),p.push({event:_,listeners:C}),T?_.data=T:(T=id(n),T!==null&&(_.data=T)))),(T=Im?Mm(e,n):Um(e,n))&&(u=Gi(u,"onBeforeInput"),0<u.length&&(m=new Wl("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:u}),m.data=T))}gd(p,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,n),o!=null&&r.unshift(Dr(e,o,i)),o=Pr(e,t),o!=null&&r.push(Dr(e,o,i))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Pr(n,o),c!=null&&a.unshift(Dr(n,c,l))):i||(c=Pr(n,o),c!=null&&a.push(Dr(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var th=/\r\n?/g,nh=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(th,`
`).replace(nh,"")}function hi(e,t,n){if(t=nc(t),nc(e)!==t&&n)throw Error(N(425))}function qi(){}var Ia=null,Ma=null;function Ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,rh=typeof clearTimeout=="function"?clearTimeout:void 0,rc=typeof Promise=="function"?Promise:void 0,ih=typeof queueMicrotask=="function"?queueMicrotask:typeof rc<"u"?function(e){return rc.resolve(null).then(e).catch(oh)}:$a;function oh(e){setTimeout(function(){throw e})}function ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Zn,Br="__reactProps$"+Zn,wt="__reactContainer$"+Zn,Wa="__reactEvents$"+Zn,ah="__reactListeners$"+Zn,sh="__reactHandles$"+Zn;function en(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ic(e);e!==null;){if(n=e[lt])return n;e=ic(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[lt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function wo(e){return e[Br]||null}var Ha=[],Pn=-1;function Gt(e){return{current:e}}function q(e){0>Pn||(e.current=Ha[Pn],Ha[Pn]=null,Pn--)}function V(e,t){Pn++,Ha[Pn]=e.current,e.current=t}var Ht={},je=Gt(Ht),Pe=Gt(!1),ln=Ht;function $n(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function Qi(){q(Pe),q(je)}function oc(e,t,n){if(je.current!==Ht)throw Error(N(168));V(je,t),V(Pe,n)}function xd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,Vf(e)||"Unknown",i));return X({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,ln=je.current,V(je,e),V(Pe,Pe.current),!0}function ac(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=xd(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,q(Pe),q(je),V(je,e)):q(Pe),V(Pe,n)}var ht=null,jo=!1,na=!1;function vd(e){ht===null?ht=[e]:ht.push(e)}function lh(e){jo=!0,vd(e)}function qt(){if(!na&&ht!==null){na=!0;var e=0,t=U;try{var n=ht;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,jo=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),Hu(Ps,qt),i}finally{U=t,na=!1}}return null}var Rn=[],_n=0,Ji=null,Xi=0,We=[],He=0,cn=null,gt=1,yt="";function Yt(e,t){Rn[_n++]=Xi,Rn[_n++]=Ji,Ji=e,Xi=t}function wd(e,t,n){We[He++]=gt,We[He++]=yt,We[He++]=cn,cn=e;var r=gt;e=yt;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var o=32-nt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gt=1<<32-nt(t)+i|n<<i|r,yt=o+e}else gt=1<<o|n<<i|r,yt=e}function Fs(e){e.return!==null&&(Yt(e,1),wd(e,1,0))}function Is(e){for(;e===Ji;)Ji=Rn[--_n],Rn[_n]=null,Xi=Rn[--_n],Rn[_n]=null;for(;e===cn;)cn=We[--He],We[He]=null,yt=We[--He],We[He]=null,gt=We[--He],We[He]=null}var Fe=null,Be=null,Q=!1,tt=null;function jd(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Be=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Be=null,!0):!1;default:return!1}}function Va(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ga(e){if(Q){var t=Be;if(t){var n=t;if(!sc(e,t)){if(Va(e))throw Error(N(418));t=Bt(n.nextSibling);var r=Fe;t&&sc(e,t)?jd(r,n):(e.flags=e.flags&-4097|2,Q=!1,Fe=e)}}else{if(Va(e))throw Error(N(418));e.flags=e.flags&-4097|2,Q=!1,Fe=e}}}function lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function gi(e){if(e!==Fe)return!1;if(!Q)return lc(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ua(e.type,e.memoizedProps)),t&&(t=Be)){if(Va(e))throw Sd(),Error(N(418));for(;t;)jd(e,t),t=Bt(t.nextSibling)}if(lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=Fe?Bt(e.stateNode.nextSibling):null;return!0}function Sd(){for(var e=Be;e;)e=Bt(e.nextSibling)}function Wn(){Be=Fe=null,Q=!1}function Ms(e){tt===null?tt=[e]:tt.push(e)}var ch=bt.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cc(e){var t=e._init;return t(e._payload)}function bd(e){function t(d,f){if(e){var g=d.deletions;g===null?(d.deletions=[f],d.flags|=16):g.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=Ut(d,f),d.index=0,d.sibling=null,d}function o(d,f,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<f?(d.flags|=2,f):g):(d.flags|=2,f)):(d.flags|=1048576,f)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,f,g,v){return f===null||f.tag!==6?(f=ca(g,d.mode,v),f.return=d,f):(f=i(f,g),f.return=d,f)}function c(d,f,g,v){var k=g.type;return k===Nn?m(d,f,g.props.children,v,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&cc(k)===f.type)?(v=i(f,g.props),v.ref=cr(d,f,g),v.return=d,v):(v=zi(g.type,g.key,g.props,null,d.mode,v),v.ref=cr(d,f,g),v.return=d,v)}function u(d,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ua(g,d.mode,v),f.return=d,f):(f=i(f,g.children||[]),f.return=d,f)}function m(d,f,g,v,k){return f===null||f.tag!==7?(f=an(g,d.mode,v,k),f.return=d,f):(f=i(f,g),f.return=d,f)}function p(d,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ca(""+f,d.mode,g),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ai:return g=zi(f.type,f.key,f.props,null,d.mode,g),g.ref=cr(d,null,f),g.return=d,g;case bn:return f=ua(f,d.mode,g),f.return=d,f;case Et:var v=f._init;return p(d,v(f._payload),g)}if(mr(f)||ir(f))return f=an(f,d.mode,g,null),f.return=d,f;yi(d,f)}return null}function h(d,f,g,v){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(d,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ai:return g.key===k?c(d,f,g,v):null;case bn:return g.key===k?u(d,f,g,v):null;case Et:return k=g._init,h(d,f,k(g._payload),v)}if(mr(g)||ir(g))return k!==null?null:m(d,f,g,v,null);yi(d,g)}return null}function x(d,f,g,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(g)||null,l(f,d,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ai:return d=d.get(v.key===null?g:v.key)||null,c(f,d,v,k);case bn:return d=d.get(v.key===null?g:v.key)||null,u(f,d,v,k);case Et:var C=v._init;return x(d,f,g,C(v._payload),k)}if(mr(v)||ir(v))return d=d.get(g)||null,m(f,d,v,k,null);yi(f,v)}return null}function w(d,f,g,v){for(var k=null,C=null,T=f,_=f=0,$=null;T!==null&&_<g.length;_++){T.index>_?($=T,T=null):$=T.sibling;var L=h(d,T,g[_],v);if(L===null){T===null&&(T=$);break}e&&T&&L.alternate===null&&t(d,T),f=o(L,f,_),C===null?k=L:C.sibling=L,C=L,T=$}if(_===g.length)return n(d,T),Q&&Yt(d,_),k;if(T===null){for(;_<g.length;_++)T=p(d,g[_],v),T!==null&&(f=o(T,f,_),C===null?k=T:C.sibling=T,C=T);return Q&&Yt(d,_),k}for(T=r(d,T);_<g.length;_++)$=x(T,d,_,g[_],v),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?_:$.key),f=o($,f,_),C===null?k=$:C.sibling=$,C=$);return e&&T.forEach(function(Y){return t(d,Y)}),Q&&Yt(d,_),k}function j(d,f,g,v){var k=ir(g);if(typeof k!="function")throw Error(N(150));if(g=k.call(g),g==null)throw Error(N(151));for(var C=k=null,T=f,_=f=0,$=null,L=g.next();T!==null&&!L.done;_++,L=g.next()){T.index>_?($=T,T=null):$=T.sibling;var Y=h(d,T,L.value,v);if(Y===null){T===null&&(T=$);break}e&&T&&Y.alternate===null&&t(d,T),f=o(Y,f,_),C===null?k=Y:C.sibling=Y,C=Y,T=$}if(L.done)return n(d,T),Q&&Yt(d,_),k;if(T===null){for(;!L.done;_++,L=g.next())L=p(d,L.value,v),L!==null&&(f=o(L,f,_),C===null?k=L:C.sibling=L,C=L);return Q&&Yt(d,_),k}for(T=r(d,T);!L.done;_++,L=g.next())L=x(T,d,_,L.value,v),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?_:L.key),f=o(L,f,_),C===null?k=L:C.sibling=L,C=L);return e&&T.forEach(function(ot){return t(d,ot)}),Q&&Yt(d,_),k}function S(d,f,g,v){if(typeof g=="object"&&g!==null&&g.type===Nn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ai:e:{for(var k=g.key,C=f;C!==null;){if(C.key===k){if(k=g.type,k===Nn){if(C.tag===7){n(d,C.sibling),f=i(C,g.props.children),f.return=d,d=f;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&cc(k)===C.type){n(d,C.sibling),f=i(C,g.props),f.ref=cr(d,C,g),f.return=d,d=f;break e}n(d,C);break}else t(d,C);C=C.sibling}g.type===Nn?(f=an(g.props.children,d.mode,v,g.key),f.return=d,d=f):(v=zi(g.type,g.key,g.props,null,d.mode,v),v.ref=cr(d,f,g),v.return=d,d=v)}return a(d);case bn:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(d,f.sibling),f=i(f,g.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=ua(g,d.mode,v),f.return=d,d=f}return a(d);case Et:return C=g._init,S(d,f,C(g._payload),v)}if(mr(g))return w(d,f,g,v);if(ir(g))return j(d,f,g,v);yi(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,g),f.return=d,d=f):(n(d,f),f=ca(g,d.mode,v),f.return=d,d=f),a(d)):n(d,f)}return S}var Hn=bd(!0),Nd=bd(!1),Yi=Gt(null),Zi=null,Ln=null,Us=null;function $s(){Us=Ln=Zi=null}function Ws(e){var t=Yi.current;q(Yi),e._currentValue=t}function qa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function In(e,t){Zi=e,Us=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Us!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(Zi===null)throw Error(N(308));Ln=e,Zi.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var tn=null;function Hs(e){tn===null?tn=[e]:tn.push(e)}function kd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Hs(t)):(n.next=i.next,i.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function Vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jt(e,n)}return i=r.interleaved,i===null?(t.next=t,Hs(r)):(t.next=i.next,i.next=t),r.interleaved=t,jt(e,n)}function Pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rs(e,n)}}function uc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Tt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,m=u=c=null,l=o;do{var h=l.lane,x=l.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,j=l;switch(h=t,x=n,j.tag){case 1:if(w=j.payload,typeof w=="function"){p=w.call(x,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,h=typeof w=="function"?w.call(x,p,h):w,h==null)break e;p=X({},p,h);break e;case 2:Tt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=x,c=p):m=m.next=x,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);dn|=a,e.lanes=a,e.memoizedState=p}}function dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Xr={},ut=Gt(Xr),Fr=Gt(Xr),Ir=Gt(Xr);function nn(e){if(e===Xr)throw Error(N(174));return e}function Gs(e,t){switch(V(Ir,t),V(Fr,e),V(ut,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ea(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ea(t,e)}q(ut),V(ut,t)}function Vn(){q(ut),q(Fr),q(Ir)}function Ed(e){nn(Ir.current);var t=nn(ut.current),n=Ea(t,e.type);t!==n&&(V(Fr,e),V(ut,n))}function qs(e){Fr.current===e&&(q(ut),q(Fr))}var K=Gt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function Qs(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var Ri=bt.ReactCurrentDispatcher,ia=bt.ReactCurrentBatchConfig,un=0,J=null,se=null,ce=null,no=!1,br=!1,Mr=0,uh=0;function ge(){throw Error(N(321))}function Ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Js(e,t,n,r,i,o){if(un=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ri.current=e===null||e.memoizedState===null?mh:hh,e=n(r,i),br){o=0;do{if(br=!1,Mr=0,25<=o)throw Error(N(301));o+=1,ce=se=null,t.updateQueue=null,Ri.current=gh,e=n(r,i)}while(br)}if(Ri.current=ro,t=se!==null&&se.next!==null,un=0,ce=se=J=null,no=!1,t)throw Error(N(300));return e}function Xs(){var e=Mr!==0;return Mr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?J.memoizedState=ce=e:ce=ce.next=e,ce}function Qe(){if(se===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ce===null?J.memoizedState:ce.next;if(t!==null)ce=t,se=e;else{if(e===null)throw Error(N(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?J.memoizedState=ce=e:ce=ce.next=e}return ce}function Ur(e,t){return typeof t=="function"?t(e):t}function oa(e){var t=Qe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var m=u.lane;if((un&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,J.lanes|=m,dn|=m}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,it(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function aa(e){var t=Qe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);it(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Td(){}function Pd(e,t){var n=J,r=Qe(),i=t(),o=!it(r.memoizedState,i);if(o&&(r.memoizedState=i,Te=!0),r=r.queue,Ys(Ld.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,$r(9,_d.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(N(349));un&30||Rd(n,t,i)}return i}function Rd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,r){t.value=n,t.getSnapshot=r,Od(t)&&Ad(e)}function Ld(e,t,n){return n(function(){Od(t)&&Ad(e)})}function Od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function Ad(e){var t=jt(e,1);t!==null&&rt(t,e,1,-1)}function pc(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=fh.bind(null,J,e),[t.memoizedState,e]}function $r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zd(){return Qe().memoizedState}function _i(e,t,n,r){var i=st();J.flags|=e,i.memoizedState=$r(1|t,n,void 0,r===void 0?null:r)}function So(e,t,n,r){var i=Qe();r=r===void 0?null:r;var o=void 0;if(se!==null){var a=se.memoizedState;if(o=a.destroy,r!==null&&Ks(r,a.deps)){i.memoizedState=$r(t,n,o,r);return}}J.flags|=e,i.memoizedState=$r(1|t,n,o,r)}function fc(e,t){return _i(8390656,8,e,t)}function Ys(e,t){return So(2048,8,e,t)}function Dd(e,t){return So(4,2,e,t)}function Bd(e,t){return So(4,4,e,t)}function Fd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Id(e,t,n){return n=n!=null?n.concat([e]):null,So(4,4,Fd.bind(null,t,e),n)}function Zs(){}function Md(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ks(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ud(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ks(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $d(e,t,n){return un&21?(it(n,t)||(n=qu(),J.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function dh(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{U=n,ia.transition=r}}function Wd(){return Qe().memoizedState}function ph(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hd(e))Vd(t,n);else if(n=kd(e,t,n,r),n!==null){var i=Ne();rt(n,e,r,i),Gd(n,t,r)}}function fh(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hd(e))Vd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,it(l,a)){var c=t.interleaved;c===null?(i.next=i,Hs(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=kd(e,t,i,r),n!==null&&(i=Ne(),rt(n,e,r,i),Gd(n,t,r))}}function Hd(e){var t=e.alternate;return e===J||t!==null&&t===J}function Vd(e,t){br=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rs(e,n)}}var ro={readContext:qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},mh={readContext:qe,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:fc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,Fd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ph.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:pc,useDebugValue:Zs,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=pc(!1),t=e[0];return e=dh.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=st();if(Q){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ue===null)throw Error(N(349));un&30||Rd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,fc(Ld.bind(null,r,o,e),[e]),r.flags|=2048,$r(9,_d.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=ue.identifierPrefix;if(Q){var n=yt,r=gt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hh={readContext:qe,useCallback:Md,useContext:qe,useEffect:Ys,useImperativeHandle:Id,useInsertionEffect:Dd,useLayoutEffect:Bd,useMemo:Ud,useReducer:oa,useRef:zd,useState:function(){return oa(Ur)},useDebugValue:Zs,useDeferredValue:function(e){var t=Qe();return $d(t,se.memoizedState,e)},useTransition:function(){var e=oa(Ur)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Td,useSyncExternalStore:Pd,useId:Wd,unstable_isNewReconciler:!1},gh={readContext:qe,useCallback:Md,useContext:qe,useEffect:Ys,useImperativeHandle:Id,useInsertionEffect:Dd,useLayoutEffect:Bd,useMemo:Ud,useReducer:aa,useRef:zd,useState:function(){return aa(Ur)},useDebugValue:Zs,useDeferredValue:function(e){var t=Qe();return se===null?t.memoizedState=e:$d(t,se.memoizedState,e)},useTransition:function(){var e=aa(Ur)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Td,useSyncExternalStore:Pd,useId:Wd,unstable_isNewReconciler:!1};function Ze(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bo={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=Mt(e),o=xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(rt(t,e,i,r),Pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=Mt(e),o=xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(rt(t,e,i,r),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Mt(e),i=xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(rt(t,e,r,n),Pi(t,e,r))}};function mc(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,o):!0}function qd(e,t,n){var r=!1,i=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=qe(o):(i=Re(t)?ln:je.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):Ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function hc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bo.enqueueReplaceState(t,t.state,null)}function Ka(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=qe(o):(o=Re(t)?ln:je.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bo.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=Hf(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ja(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yh=typeof WeakMap=="function"?WeakMap:Map;function Qd(e,t,n){n=xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,as=r),Ja(e,t)},n}function Kd(e,t,n){n=xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ja(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ja(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function gc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_h.bind(null,e,t,n),t.then(e,e))}function yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var xh=bt.ReactCurrentOwner,Te=!1;function be(e,t,n,r){t.child=e===null?Nd(t,null,n,r):Hn(t,e.child,n,r)}function vc(e,t,n,r,i){n=n.render;var o=t.ref;return In(t,i),r=Js(e,t,n,r,o,i),n=Xs(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(Q&&n&&Fs(t),t.flags|=1,be(e,t,r,i),t.child)}function wc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!sl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Jd(e,t,o,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(a,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=Ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function Jd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ar(o,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,St(e,t,i)}return Xa(e,t,n,r,i)}function Xd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(An,De),De|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(An,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(An,De),De|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(An,De),De|=r;return be(e,t,i,n),t.child}function Yd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xa(e,t,n,r,i){var o=Re(n)?ln:je.current;return o=$n(t,o),In(t,i),n=Js(e,t,n,r,o,i),r=Xs(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):(Q&&r&&Fs(t),t.flags|=1,be(e,t,n,i),t.child)}function jc(e,t,n,r,i){if(Re(n)){var o=!0;Ki(t)}else o=!1;if(In(t,i),t.stateNode===null)Li(e,t),qd(t,n,r),Ka(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=qe(u):(u=Re(n)?ln:je.current,u=$n(t,u));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&hc(t,a,r,u),Tt=!1;var h=t.memoizedState;a.state=h,eo(t,r,a,i),c=t.memoizedState,l!==r||h!==c||Pe.current||Tt?(typeof m=="function"&&(Qa(t,n,m,r),c=t.memoizedState),(l=Tt||mc(t,n,l,r,h,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Cd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ze(t.type,l),a.props=u,p=t.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=qe(c):(c=Re(n)?ln:je.current,c=$n(t,c));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==c)&&hc(t,a,r,c),Tt=!1,h=t.memoizedState,a.state=h,eo(t,r,a,i);var w=t.memoizedState;l!==p||h!==w||Pe.current||Tt?(typeof x=="function"&&(Qa(t,n,x,r),w=t.memoizedState),(u=Tt||mc(t,n,u,r,h,w,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ya(e,t,n,r,o,i)}function Ya(e,t,n,r,i,o){Yd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ac(t,n,!1),St(e,t,o);r=t.stateNode,xh.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Hn(t,e.child,null,o),t.child=Hn(t,null,l,o)):be(e,t,l,o),t.memoizedState=r.state,i&&ac(t,n,!0),t.child}function Zd(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),Gs(e,t.containerInfo)}function Sc(e,t,n,r,i){return Wn(),Ms(i),t.flags|=256,be(e,t,n,r),t.child}var Za={dehydrated:null,treeContext:null,retryLane:0};function es(e){return{baseLanes:e,cachePool:null,transitions:null}}function ep(e,t,n){var r=t.pendingProps,i=K.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(K,i&1),e===null)return Ga(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Co(a,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=es(n),t.memoizedState=Za,e):el(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return vh(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ut(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Ut(l,o):(o=an(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?es(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Za,r}return o=e.child,e=o.sibling,r=Ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function el(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xi(e,t,n,r){return r!==null&&Ms(r),Hn(t,e.child,null,n),e=el(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vh(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=sa(Error(N(422))),xi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Co({mode:"visible",children:r.children},i,0,null),o=an(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hn(t,e.child,null,a),t.child.memoizedState=es(a),t.memoizedState=Za,o);if(!(t.mode&1))return xi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(N(419)),r=sa(o,r,void 0),xi(e,t,a,r)}if(l=(a&e.childLanes)!==0,Te||l){if(r=ue,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,jt(e,i),rt(r,e,i,-1))}return al(),r=sa(Error(N(421))),xi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Lh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Be=Bt(i.nextSibling),Fe=t,Q=!0,tt=null,e!==null&&(We[He++]=gt,We[He++]=yt,We[He++]=cn,gt=e.id,yt=e.overflow,cn=t),t=el(t,r.children),t.flags|=4096,t)}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qa(e.return,t,n)}function la(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function tp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),la(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}la(t,!0,n,null,o);break;case"together":la(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wh(e,t,n){switch(t.tag){case 3:Zd(t),Wn();break;case 5:Ed(t);break;case 1:Re(t.type)&&Ki(t);break;case 4:Gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Yi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?ep(e,t,n):(V(K,K.current&1),e=St(e,t,n),e!==null?e.sibling:null);V(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Xd(e,t,n)}return St(e,t,n)}var np,ts,rp,ip;np=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ts=function(){};rp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nn(ut.current);var o=null;switch(n){case"input":i=ba(e,i),r=ba(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=Ca(e,i),r=Ca(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qi)}Ta(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Er.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Er.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&G("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ip=function(e,t,n,r){n!==r&&(t.flags|=4)};function ur(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jh(e,t,n){var r=t.pendingProps;switch(Is(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Re(t.type)&&Qi(),ye(t),null;case 3:return r=t.stateNode,Vn(),q(Pe),q(je),Qs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(cs(tt),tt=null))),ts(e,t),ye(t),null;case 5:qs(t);var i=nn(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)rp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ye(t),null}if(e=nn(ut.current),gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[lt]=t,r[Br]=o,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<gr.length;i++)G(gr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Ll(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":Al(r,o),G("invalid",r)}Ta(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&hi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&hi(r.textContent,l,e),i=["children",""+l]):Er.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&G("scroll",r)}switch(n){case"input":si(r),Ol(r,o,!0);break;case"textarea":si(r),zl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[lt]=t,e[Br]=r,np(e,t,!1,!1),t.stateNode=e;e:{switch(a=Pa(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<gr.length;i++)G(gr[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":Ll(e,r),i=ba(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),G("invalid",e);break;case"textarea":Al(e,r),i=Ca(e,r),G("invalid",e);break;default:i=r}Ta(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?zu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ou(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Tr(e,c):typeof c=="number"&&Tr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Er.hasOwnProperty(o)?c!=null&&o==="onScroll"&&G("scroll",e):c!=null&&Ns(e,o,c,a))}switch(n){case"input":si(e),Ol(e,r,!1);break;case"textarea":si(e),zl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)ip(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=nn(Ir.current),nn(ut.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(o=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:hi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return ye(t),null;case 13:if(q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Be!==null&&t.mode&1&&!(t.flags&128))Sd(),Wn(),t.flags|=98560,o=!1;else if(o=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[lt]=t}else Wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),o=!1}else tt!==null&&(cs(tt),tt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?le===0&&(le=3):al())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Vn(),ts(e,t),e===null&&zr(t.stateNode.containerInfo),ye(t),null;case 10:return Ws(t.type._context),ye(t),null;case 17:return Re(t.type)&&Qi(),ye(t),null;case 19:if(q(K),o=t.memoizedState,o===null)return ye(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ur(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=to(e),a!==null){for(t.flags|=128,ur(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>qn&&(t.flags|=128,r=!0,ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Q)return ye(t),null}else 2*te()-o.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,ur(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=K.current,V(K,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return ol(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Sh(e,t){switch(Is(t),t.tag){case 1:return Re(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),q(Pe),q(je),Qs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qs(t),null;case 13:if(q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(K),null;case 4:return Vn(),null;case 10:return Ws(t.type._context),null;case 22:case 23:return ol(),null;case 24:return null;default:return null}}var vi=!1,ve=!1,bh=typeof WeakSet=="function"?WeakSet:Set,R=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function ns(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Nc=!1;function Nh(e,t){if(Ia=Hi,e=cd(),Bs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,m=0,p=e,h=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)h=p,p=x;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++m===r&&(c=a),(x=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ma={focusedElem:e,selectionRange:n},Hi=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,S=w.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?j:Ze(t.type,j),S);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(v){Z(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return w=Nc,Nc=!1,w}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ns(t,n,o)}i=i.next}while(i!==r)}}function No(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function op(e){var t=e.alternate;t!==null&&(e.alternate=null,op(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Br],delete t[Wa],delete t[ah],delete t[sh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ap(e){return e.tag===5||e.tag===3||e.tag===4}function kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(r!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}function os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(os(e,t,n),e=e.sibling;e!==null;)os(e,t,n),e=e.sibling}var pe=null,et=!1;function Ct(e,t,n){for(n=n.child;n!==null;)sp(e,t,n),n=n.sibling}function sp(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:ve||On(n,t);case 6:var r=pe,i=et;pe=null,Ct(e,t,n),pe=r,et=i,pe!==null&&(et?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(et?(e=pe,n=n.stateNode,e.nodeType===8?ta(e.parentNode,n):e.nodeType===1&&ta(e,n),Lr(e)):ta(pe,n.stateNode));break;case 4:r=pe,i=et,pe=n.stateNode.containerInfo,et=!0,Ct(e,t,n),pe=r,et=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ns(n,t,a),i=i.next}while(i!==r)}Ct(e,t,n);break;case 1:if(!ve&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Z(n,t,l)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Ct(e,t,n),ve=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function Cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new bh),t.forEach(function(r){var i=Oh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:pe=l.stateNode,et=!1;break e;case 3:pe=l.stateNode.containerInfo,et=!0;break e;case 4:pe=l.stateNode.containerInfo,et=!0;break e}l=l.return}if(pe===null)throw Error(N(160));sp(o,a,i),pe=null,et=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lp(t,e),t=t.sibling}function lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),at(e),r&4){try{Nr(3,e,e.return),No(3,e)}catch(j){Z(e,e.return,j)}try{Nr(5,e,e.return)}catch(j){Z(e,e.return,j)}}break;case 1:Xe(t,e),at(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(Xe(t,e),at(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var i=e.stateNode;try{Tr(i,"")}catch(j){Z(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ru(i,o),Pa(l,a);var u=Pa(l,o);for(a=0;a<c.length;a+=2){var m=c[a],p=c[a+1];m==="style"?zu(i,p):m==="dangerouslySetInnerHTML"?Ou(i,p):m==="children"?Tr(i,p):Ns(i,m,p,u)}switch(l){case"input":Na(i,o);break;case"textarea":_u(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?zn(i,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?zn(i,!!o.multiple,o.defaultValue,!0):zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Br]=o}catch(j){Z(e,e.return,j)}}break;case 6:if(Xe(t,e),at(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){Z(e,e.return,j)}}break;case 3:if(Xe(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(t.containerInfo)}catch(j){Z(e,e.return,j)}break;case 4:Xe(t,e),at(e);break;case 13:Xe(t,e),at(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(rl=te())),r&4&&Cc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||m,Xe(t,e),ve=u):Xe(t,e),at(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(R=e,m=e.child;m!==null;){for(p=R=m;R!==null;){switch(h=R,x=h.child,h.tag){case 0:case 11:case 14:case 15:Nr(4,h,h.return);break;case 1:On(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){Z(r,n,j)}}break;case 5:On(h,h.return);break;case 22:if(h.memoizedState!==null){Tc(p);continue}}x!==null?(x.return=h,R=x):Tc(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Au("display",a))}catch(j){Z(e,e.return,j)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){Z(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Xe(t,e),at(e),r&4&&Cc(e);break;case 21:break;default:Xe(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ap(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tr(i,""),r.flags&=-33);var o=kc(e);os(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=kc(e);is(e,l,a);break;default:throw Error(N(161))}}catch(c){Z(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kh(e,t,n){R=e,cp(e)}function cp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||vi;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ve;l=vi;var u=ve;if(vi=a,(ve=c)&&!u)for(R=i;R!==null;)a=R,c=a.child,a.tag===22&&a.memoizedState!==null?Pc(i):c!==null?(c.return=a,R=c):Pc(i);for(;o!==null;)R=o,cp(o),o=o.sibling;R=i,vi=l,ve=u}Ec(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Ec(e)}}function Ec(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||No(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&dc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Lr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ve||t.flags&512&&rs(t)}catch(h){Z(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Tc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Pc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{No(4,t)}catch(c){Z(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Z(t,i,c)}}var o=t.return;try{rs(t)}catch(c){Z(t,o,c)}break;case 5:var a=t.return;try{rs(t)}catch(c){Z(t,a,c)}}}catch(c){Z(t,t.return,c)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var Ch=Math.ceil,io=bt.ReactCurrentDispatcher,tl=bt.ReactCurrentOwner,Ge=bt.ReactCurrentBatchConfig,M=0,ue=null,ie=null,me=0,De=0,An=Gt(0),le=0,Wr=null,dn=0,ko=0,nl=0,kr=null,Ee=null,rl=0,qn=1/0,mt=null,oo=!1,as=null,It=null,wi=!1,Lt=null,ao=0,Cr=0,ss=null,Oi=-1,Ai=0;function Ne(){return M&6?te():Oi!==-1?Oi:Oi=te()}function Mt(e){return e.mode&1?M&2&&me!==0?me&-me:ch.transition!==null?(Ai===0&&(Ai=qu()),Ai):(e=U,e!==0||(e=window.event,e=e===void 0?16:ed(e.type)),e):1}function rt(e,t,n,r){if(50<Cr)throw Cr=0,ss=null,Error(N(185));Qr(e,n,r),(!(M&2)||e!==ue)&&(e===ue&&(!(M&2)&&(ko|=n),le===4&&Rt(e,me)),_e(e,r),n===1&&M===0&&!(t.mode&1)&&(qn=te()+500,jo&&qt()))}function _e(e,t){var n=e.callbackNode;cm(e,t);var r=Wi(e,e===ue?me:0);if(r===0)n!==null&&Fl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fl(n),t===1)e.tag===0?lh(Rc.bind(null,e)):vd(Rc.bind(null,e)),ih(function(){!(M&6)&&qt()}),n=null;else{switch(Qu(r)){case 1:n=Ps;break;case 4:n=Vu;break;case 16:n=$i;break;case 536870912:n=Gu;break;default:n=$i}n=yp(n,up.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function up(e,t){if(Oi=-1,Ai=0,M&6)throw Error(N(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Wi(e,e===ue?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=so(e,r);else{t=r;var i=M;M|=2;var o=pp();(ue!==e||me!==t)&&(mt=null,qn=te()+500,on(e,t));do try{Ph();break}catch(l){dp(e,l)}while(!0);$s(),io.current=o,M=i,ie!==null?t=0:(ue=null,me=0,t=le)}if(t!==0){if(t===2&&(i=Aa(e),i!==0&&(r=i,t=ls(e,i))),t===1)throw n=Wr,on(e,0),Rt(e,r),_e(e,te()),n;if(t===6)Rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Eh(i)&&(t=so(e,r),t===2&&(o=Aa(e),o!==0&&(r=o,t=ls(e,o))),t===1))throw n=Wr,on(e,0),Rt(e,r),_e(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Zt(e,Ee,mt);break;case 3:if(Rt(e,r),(r&130023424)===r&&(t=rl+500-te(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$a(Zt.bind(null,e,Ee,mt),t);break}Zt(e,Ee,mt);break;case 4:if(Rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-nt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ch(r/1960))-r,10<r){e.timeoutHandle=$a(Zt.bind(null,e,Ee,mt),r);break}Zt(e,Ee,mt);break;case 5:Zt(e,Ee,mt);break;default:throw Error(N(329))}}}return _e(e,te()),e.callbackNode===n?up.bind(null,e):null}function ls(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=so(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&cs(t)),e}function cs(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Eh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!it(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~nl,t&=~ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Rc(e){if(M&6)throw Error(N(327));Mn();var t=Wi(e,0);if(!(t&1))return _e(e,te()),null;var n=so(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=ls(e,r))}if(n===1)throw n=Wr,on(e,0),Rt(e,t),_e(e,te()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Ee,mt),_e(e,te()),null}function il(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(qn=te()+500,jo&&qt())}}function pn(e){Lt!==null&&Lt.tag===0&&!(M&6)&&Mn();var t=M;M|=1;var n=Ge.transition,r=U;try{if(Ge.transition=null,U=1,e)return e()}finally{U=r,Ge.transition=n,M=t,!(M&6)&&qt()}}function ol(){De=An.current,q(An)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rh(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Is(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:Vn(),q(Pe),q(je),Qs();break;case 5:qs(r);break;case 4:Vn();break;case 13:q(K);break;case 19:q(K);break;case 10:Ws(r.type._context);break;case 22:case 23:ol()}n=n.return}if(ue=e,ie=e=Ut(e.current,null),me=De=t,le=0,Wr=null,nl=ko=dn=0,Ee=kr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}tn=null}return e}function dp(e,t){do{var n=ie;try{if($s(),Ri.current=ro,no){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(un=0,ce=se=J=null,br=!1,Mr=0,tl.current=null,n===null||n.return===null){le=1,Wr=t,ie=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=me,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=yc(a);if(x!==null){x.flags&=-257,xc(x,a,l,o,t),x.mode&1&&gc(o,u,t),t=x,c=u;var w=t.updateQueue;if(w===null){var j=new Set;j.add(c),t.updateQueue=j}else w.add(c);break e}else{if(!(t&1)){gc(o,u,t),al();break e}c=Error(N(426))}}else if(Q&&l.mode&1){var S=yc(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),xc(S,a,l,o,t),Ms(Gn(c,l));break e}}o=c=Gn(c,l),le!==4&&(le=2),kr===null?kr=[o]:kr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Qd(o,c,t);uc(o,d);break e;case 1:l=c;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(It===null||!It.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Kd(o,l,t);uc(o,v);break e}}o=o.return}while(o!==null)}mp(n)}catch(k){t=k,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function pp(){var e=io.current;return io.current=ro,e===null?ro:e}function al(){(le===0||le===3||le===2)&&(le=4),ue===null||!(dn&268435455)&&!(ko&268435455)||Rt(ue,me)}function so(e,t){var n=M;M|=2;var r=pp();(ue!==e||me!==t)&&(mt=null,on(e,t));do try{Th();break}catch(i){dp(e,i)}while(!0);if($s(),M=n,io.current=r,ie!==null)throw Error(N(261));return ue=null,me=0,le}function Th(){for(;ie!==null;)fp(ie)}function Ph(){for(;ie!==null&&!em();)fp(ie)}function fp(e){var t=gp(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?mp(e):ie=t,tl.current=null}function mp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sh(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=jh(n,t,De),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function Zt(e,t,n){var r=U,i=Ge.transition;try{Ge.transition=null,U=1,Rh(e,t,n,r)}finally{Ge.transition=i,U=r}return null}function Rh(e,t,n,r){do Mn();while(Lt!==null);if(M&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(um(e,o),e===ue&&(ie=ue=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,yp($i,function(){return Mn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ge.transition,Ge.transition=null;var a=U;U=1;var l=M;M|=4,tl.current=null,Nh(e,n),lp(n,e),Jm(Ma),Hi=!!Ia,Ma=Ia=null,e.current=n,kh(n),tm(),M=l,U=a,Ge.transition=o}else e.current=n;if(wi&&(wi=!1,Lt=e,ao=i),o=e.pendingLanes,o===0&&(It=null),im(n.stateNode),_e(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=as,as=null,e;return ao&1&&e.tag!==0&&Mn(),o=e.pendingLanes,o&1?e===ss?Cr++:(Cr=0,ss=e):Cr=0,qt(),null}function Mn(){if(Lt!==null){var e=Qu(ao),t=Ge.transition,n=U;try{if(Ge.transition=null,U=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,ao=0,M&6)throw Error(N(331));var i=M;for(M|=4,R=e.current;R!==null;){var o=R,a=o.child;if(R.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(R=u;R!==null;){var m=R;switch(m.tag){case 0:case 11:case 15:Nr(8,m,o)}var p=m.child;if(p!==null)p.return=m,R=p;else for(;R!==null;){m=R;var h=m.sibling,x=m.return;if(op(m),m===u){R=null;break}if(h!==null){h.return=x,R=h;break}R=x}}}var w=o.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var S=j.sibling;j.sibling=null,j=S}while(j!==null)}}R=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,R=a;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Nr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,R=d;break e}R=o.return}}var f=e.current;for(R=f;R!==null;){a=R;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,R=g;else e:for(a=f;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:No(9,l)}}catch(k){Z(l,l.return,k)}if(l===a){R=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,R=v;break e}R=l.return}}if(M=i,qt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(go,e)}catch{}r=!0}return r}finally{U=n,Ge.transition=t}}return!1}function _c(e,t,n){t=Gn(n,t),t=Qd(e,t,1),e=Ft(e,t,1),t=Ne(),e!==null&&(Qr(e,1,t),_e(e,t))}function Z(e,t,n){if(e.tag===3)_c(e,e,n);else for(;t!==null;){if(t.tag===3){_c(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=Gn(n,e),e=Kd(t,e,1),t=Ft(t,e,1),e=Ne(),t!==null&&(Qr(t,1,e),_e(t,e));break}}t=t.return}}function _h(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>te()-rl?on(e,0):nl|=n),_e(e,t)}function hp(e,t){t===0&&(e.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var n=Ne();e=jt(e,t),e!==null&&(Qr(e,t,n),_e(e,n))}function Lh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hp(e,n)}function Oh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),hp(e,n)}var gp;gp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,wh(e,t,n);Te=!!(e.flags&131072)}else Te=!1,Q&&t.flags&1048576&&wd(t,Xi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var i=$n(t,je.current);In(t,n),i=Js(null,t,r,e,i,n);var o=Xs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(o=!0,Ki(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vs(t),i.updater=bo,t.stateNode=i,i._reactInternals=t,Ka(t,r,e,n),t=Ya(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&Fs(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zh(r),e=Ze(r,e),i){case 0:t=Xa(null,t,r,e,n);break e;case 1:t=jc(null,t,r,e,n);break e;case 11:t=vc(null,t,r,e,n);break e;case 14:t=wc(null,t,r,Ze(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Xa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),jc(e,t,r,i,n);case 3:e:{if(Zd(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Cd(e,t),eo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Gn(Error(N(423)),t),t=Sc(e,t,r,n,i);break e}else if(r!==i){i=Gn(Error(N(424)),t),t=Sc(e,t,r,n,i);break e}else for(Be=Bt(t.stateNode.containerInfo.firstChild),Fe=t,Q=!0,tt=null,n=Nd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===i){t=St(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Ed(t),e===null&&Ga(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ua(r,i)?a=null:o!==null&&Ua(r,o)&&(t.flags|=32),Yd(e,t),be(e,t,a,n),t.child;case 6:return e===null&&Ga(t),null;case 13:return ep(e,t,n);case 4:return Gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),vc(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,V(Yi,r._currentValue),r._currentValue=a,o!==null)if(it(o.value,a)){if(o.children===i.children&&!Pe.current){t=St(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=xt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),qa(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(N(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),qa(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,In(t,n),i=qe(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=Ze(r,t.pendingProps),i=Ze(r.type,i),wc(e,t,r,i,n);case 15:return Jd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Li(e,t),t.tag=1,Re(r)?(e=!0,Ki(t)):e=!1,In(t,n),qd(t,r,i),Ka(t,r,i,n),Ya(null,t,r,!0,e,n);case 19:return tp(e,t,n);case 22:return Xd(e,t,n)}throw Error(N(156,t.tag))};function yp(e,t){return Hu(e,t)}function Ah(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new Ah(e,t,n,r)}function sl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zh(e){if(typeof e=="function")return sl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cs)return 11;if(e===Es)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")sl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Nn:return an(n.children,i,o,t);case ks:a=8,i|=8;break;case va:return e=Ve(12,n,t,i|2),e.elementType=va,e.lanes=o,e;case wa:return e=Ve(13,n,t,i),e.elementType=wa,e.lanes=o,e;case ja:return e=Ve(19,n,t,i),e.elementType=ja,e.lanes=o,e;case Eu:return Co(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ku:a=10;break e;case Cu:a=9;break e;case Cs:a=11;break e;case Es:a=14;break e;case Et:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ve(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=Eu,e.lanes=n,e.stateNode={isHidden:!1},e}function ca(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function ua(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ll(e,t,n,r,i,o,a,l,c){return e=new Dh(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ve(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vs(o),e}function Bh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xp(e){if(!e)return Ht;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Re(n))return xd(e,n,t)}return t}function vp(e,t,n,r,i,o,a,l,c){return e=ll(n,r,!0,e,i,o,a,l,c),e.context=xp(null),n=e.current,r=Ne(),i=Mt(n),o=xt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,Qr(e,i,r),_e(e,r),e}function Eo(e,t,n,r){var i=t.current,o=Ne(),a=Mt(i);return n=xp(n),t.context===null?t.context=n:t.pendingContext=n,t=xt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,a),e!==null&&(rt(e,i,a,o),Pi(e,i,a)),a}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cl(e,t){Lc(e,t),(e=e.alternate)&&Lc(e,t)}function Fh(){return null}var wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ul(e){this._internalRoot=e}To.prototype.render=ul.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Eo(e,t,null,null)};To.prototype.unmount=ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Eo(null,e,null,null)}),t[wt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Zu(e)}};function dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oc(){}function Ih(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=lo(a);o.call(u)}}var a=vp(t,r,e,0,null,!1,!1,"",Oc);return e._reactRootContainer=a,e[wt]=a.current,zr(e.nodeType===8?e.parentNode:e),pn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=lo(c);l.call(u)}}var c=ll(e,0,!1,null,null,!1,!1,"",Oc);return e._reactRootContainer=c,e[wt]=c.current,zr(e.nodeType===8?e.parentNode:e),pn(function(){Eo(t,c,n,r)}),c}function Ro(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=lo(a);l.call(c)}}Eo(t,a,e,i)}else a=Ih(n,t,e,i,r);return lo(a)}Ku=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(Rs(t,n|1),_e(t,te()),!(M&6)&&(qn=te()+500,qt()))}break;case 13:pn(function(){var r=jt(e,1);if(r!==null){var i=Ne();rt(r,e,1,i)}}),cl(e,1)}};_s=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Ne();rt(t,e,134217728,n)}cl(e,134217728)}};Ju=function(e){if(e.tag===13){var t=Mt(e),n=jt(e,t);if(n!==null){var r=Ne();rt(n,e,t,r)}cl(e,t)}};Xu=function(){return U};Yu=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};_a=function(e,t,n){switch(t){case"input":if(Na(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wo(r);if(!i)throw Error(N(90));Pu(r),Na(r,i)}}}break;case"textarea":_u(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};Fu=il;Iu=pn;var Mh={usingClientEntryPoint:!1,Events:[Jr,Tn,wo,Du,Bu,il]},dr={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uh={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$u(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||Fh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{go=ji.inject(Uh),ct=ji}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mh;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dl(t))throw Error(N(200));return Bh(e,t,null,n)};Me.createRoot=function(e,t){if(!dl(e))throw Error(N(299));var n=!1,r="",i=wp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ll(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,zr(e.nodeType===8?e.parentNode:e),new ul(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=$u(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return pn(e)};Me.hydrate=function(e,t,n){if(!Po(t))throw Error(N(200));return Ro(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!dl(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=wp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=vp(t,null,e,1,n??null,i,!1,o,a),e[wt]=t.current,zr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new To(t)};Me.render=function(e,t,n){if(!Po(t))throw Error(N(200));return Ro(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Po(e))throw Error(N(40));return e._reactRootContainer?(pn(function(){Ro(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Me.unstable_batchedUpdates=il;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Po(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ro(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jp)}catch(e){console.error(e)}}jp(),ju.exports=Me;var $h=ju.exports,Sp,Ac=$h;Sp=Ac.createRoot,Ac.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(null,arguments)}var Ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ot||(Ot={}));const zc="popstate";function Wh(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return us("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:co(i)}return Vh(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function pl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hh(){return Math.random().toString(36).substr(2,8)}function Dc(e,t){return{usr:e.state,key:e.key,idx:t}}function us(e,t,n,r){return n===void 0&&(n=null),Hr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?er(t):t,{state:n,key:t&&t.key||r||Hh()})}function co(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function er(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Vh(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Ot.Pop,c=null,u=m();u==null&&(u=0,a.replaceState(Hr({},a.state,{idx:u}),""));function m(){return(a.state||{idx:null}).idx}function p(){l=Ot.Pop;let S=m(),d=S==null?null:S-u;u=S,c&&c({action:l,location:j.location,delta:d})}function h(S,d){l=Ot.Push;let f=us(j.location,S,d);u=m()+1;let g=Dc(f,u),v=j.createHref(f);try{a.pushState(g,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(v)}o&&c&&c({action:l,location:j.location,delta:1})}function x(S,d){l=Ot.Replace;let f=us(j.location,S,d);u=m();let g=Dc(f,u),v=j.createHref(f);a.replaceState(g,"",v),o&&c&&c({action:l,location:j.location,delta:0})}function w(S){let d=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:co(S);return f=f.replace(/ $/,"%20"),ee(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let j={get action(){return l},get location(){return e(i,a)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(zc,p),c=S,()=>{i.removeEventListener(zc,p),c=null}},createHref(S){return t(i,S)},createURL:w,encodeLocation(S){let d=w(S);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:x,go(S){return a.go(S)}};return j}var Bc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bc||(Bc={}));function Gh(e,t,n){return n===void 0&&(n="/"),qh(e,t,n)}function qh(e,t,n,r){let i=typeof t=="string"?er(t):t,o=Qn(i.pathname||"/",n);if(o==null)return null;let a=bp(e);Qh(a);let l=null,c=og(o);for(let u=0;l==null&&u<a.length;++u)l=rg(a[u],c);return l}function bp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(ee(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=$t([r,c.relativePath]),m=n.concat(c);o.children&&o.children.length>0&&(ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),bp(o.children,t,m,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:tg(u,o.index),routesMeta:m})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Np(o.path))i(o,a,c)}),t}function Np(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Np(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Qh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ng(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kh=/^:[\w-]+$/,Jh=3,Xh=2,Yh=1,Zh=10,eg=-2,Fc=e=>e==="*";function tg(e,t){let n=e.split("/"),r=n.length;return n.some(Fc)&&(r+=eg),t&&(r+=Xh),n.filter(i=>!Fc(i)).reduce((i,o)=>i+(Kh.test(o)?Jh:o===""?Yh:Zh),r)}function ng(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function rg(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",p=ds({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),h=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:$t([o,p.pathname]),pathnameBase:ug($t([o,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(o=$t([o,p.pathnameBase]))}return a}function ds(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ig(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,m,p)=>{let{paramName:h,isOptional:x}=m;if(h==="*"){let j=l[p]||"";a=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const w=l[p];return x&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function ig(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),pl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function og(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return pl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sg=e=>ag.test(e);function lg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?er(e):e,o;if(n)if(sg(n))o=n;else{if(n.includes("//")){let a=n;n=Ep(n),pl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Ic(n.substring(1),"/"):o=Ic(n,t)}else o=t;return{pathname:o,search:dg(r),hash:pg(i)}}function Ic(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function da(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kp(e,t){let n=cg(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=er(e):(i=Hr({},e),ee(!i.pathname||!i.pathname.includes("?"),da("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),da("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),da("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}l=p>=0?t[p]:"/"}let c=lg(i,l),u=a&&a!=="/"&&a.endsWith("/"),m=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}const Ep=e=>e.replace(/\/\/+/g,"/"),$t=e=>Ep(e.join("/")),ug=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Tp=["post","put","patch","delete"];new Set(Tp);const mg=["get",...Tp];new Set(mg);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(null,arguments)}const _o=b.createContext(null),Pp=b.createContext(null),Qt=b.createContext(null),Lo=b.createContext(null),Kt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Rp=b.createContext(null);function hg(e,t){let{relative:n}=t===void 0?{}:t;Yr()||ee(!1);let{basename:r,navigator:i}=b.useContext(Qt),{hash:o,pathname:a,search:l}=Oo(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:$t([r,a])),i.createHref({pathname:c,search:l,hash:o})}function Yr(){return b.useContext(Lo)!=null}function Zr(){return Yr()||ee(!1),b.useContext(Lo).location}function _p(e){b.useContext(Qt).static||b.useLayoutEffect(e)}function Lp(){let{isDataRoute:e}=b.useContext(Kt);return e?Pg():gg()}function gg(){Yr()||ee(!1);let e=b.useContext(_o),{basename:t,future:n,navigator:r}=b.useContext(Qt),{matches:i}=b.useContext(Kt),{pathname:o}=Zr(),a=JSON.stringify(kp(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return _p(()=>{l.current=!0}),b.useCallback(function(u,m){if(m===void 0&&(m={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Cp(u,JSON.parse(a),o,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:$t([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,a,o,e])}function yg(){let{matches:e}=b.useContext(Kt),t=e[e.length-1];return t?t.params:{}}function Oo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Qt),{matches:i}=b.useContext(Kt),{pathname:o}=Zr(),a=JSON.stringify(kp(i,r.v7_relativeSplatPath));return b.useMemo(()=>Cp(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function xg(e,t){return vg(e,t)}function vg(e,t,n,r){Yr()||ee(!1);let{navigator:i}=b.useContext(Qt),{matches:o}=b.useContext(Kt),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Zr(),m;if(t){var p;let S=typeof t=="string"?er(t):t;c==="/"||(p=S.pathname)!=null&&p.startsWith(c)||ee(!1),m=S}else m=u;let h=m.pathname||"/",x=h;if(c!=="/"){let S=c.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let w=Gh(e,{pathname:x}),j=Ng(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:$t([c,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:$t([c,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&j?b.createElement(Lo.Provider,{value:{location:Vr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Ot.Pop}},j):j}function wg(){let e=Tg(),t=fg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const jg=b.createElement(wg,null);class Sg extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Kt.Provider,{value:this.props.routeContext},b.createElement(Rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bg(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(_o);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Kt.Provider,{value:t},r)}function Ng(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let m=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);m>=0||ee(!1),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let p=a[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=m),p.route.id){let{loaderData:h,errors:x}=n,w=p.route.loader&&h[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||w){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((m,p,h)=>{let x,w=!1,j=null,S=null;n&&(x=l&&p.route.id?l[p.route.id]:void 0,j=p.route.errorElement||jg,c&&(u<0&&h===0?(Rg("route-fallback"),w=!0,S=null):u===h&&(w=!0,S=p.route.hydrateFallbackElement||null)));let d=t.concat(a.slice(0,h+1)),f=()=>{let g;return x?g=j:w?g=S:p.route.Component?g=b.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=m,b.createElement(bg,{match:p,routeContext:{outlet:m,matches:d,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?b.createElement(Sg,{location:n.location,revalidation:n.revalidation,component:j,error:x,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var Op=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Op||{}),Ap=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ap||{});function kg(e){let t=b.useContext(_o);return t||ee(!1),t}function Cg(e){let t=b.useContext(Pp);return t||ee(!1),t}function Eg(e){let t=b.useContext(Kt);return t||ee(!1),t}function zp(e){let t=Eg(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function Tg(){var e;let t=b.useContext(Rp),n=Cg(),r=zp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Pg(){let{router:e}=kg(Op.UseNavigateStable),t=zp(Ap.UseNavigateStable),n=b.useRef(!1);return _p(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Vr({fromRouteId:t},o)))},[e,t])}const Mc={};function Rg(e,t,n){Mc[e]||(Mc[e]=!0)}function _g(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function H(e){ee(!1)}function Lg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ot.Pop,navigator:o,static:a=!1,future:l}=e;Yr()&&ee(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:o,static:a,future:Vr({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=er(r));let{pathname:m="/",search:p="",hash:h="",state:x=null,key:w="default"}=r,j=b.useMemo(()=>{let S=Qn(m,c);return S==null?null:{location:{pathname:S,search:p,hash:h,state:x,key:w},navigationType:i}},[c,m,p,h,x,w,i]);return j==null?null:b.createElement(Qt.Provider,{value:u},b.createElement(Lo.Provider,{children:n,value:j}))}function Og(e){let{children:t,location:n}=e;return xg(ps(t),n)}new Promise(()=>{});function ps(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,ps(r.props.children,o));return}r.type!==H&&ee(!1),!r.props.index||!r.props.children||ee(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ps(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uo.apply(null,arguments)}function Dp(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ag(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zg(e,t){return e.button===0&&(!t||t==="_self")&&!Ag(e)}const Dg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Bg=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Fg="6";try{window.__reactRouterVersion=Fg}catch{}const Ig=b.createContext({isTransitioning:!1}),Mg="startTransition",Uc=_f[Mg];function Ug(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=Wh({window:i,v5Compat:!0}));let a=o.current,[l,c]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},m=b.useCallback(p=>{u&&Uc?Uc(()=>c(p)):c(p)},[c,u]);return b.useLayoutEffect(()=>a.listen(m),[a,m]),b.useEffect(()=>_g(r),[r]),b.createElement(Lg,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const $g=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,re=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:m,viewTransition:p}=t,h=Dp(t,Dg),{basename:x}=b.useContext(Qt),w,j=!1;if(typeof u=="string"&&Wg.test(u)&&(w=u,$g))try{let g=new URL(window.location.href),v=u.startsWith("//")?new URL(g.protocol+u):new URL(u),k=Qn(v.pathname,x);v.origin===g.origin&&k!=null?u=k+v.search+v.hash:j=!0}catch{}let S=hg(u,{relative:i}),d=Vg(u,{replace:a,state:l,target:c,preventScrollReset:m,relative:i,viewTransition:p});function f(g){r&&r(g),g.defaultPrevented||d(g)}return b.createElement("a",uo({},h,{href:w||S,onClick:j||o?r:f,ref:n,target:c}))}),oe=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:c,viewTransition:u,children:m}=t,p=Dp(t,Bg),h=Oo(c,{relative:p.relative}),x=Zr(),w=b.useContext(Pp),{navigator:j,basename:S}=b.useContext(Qt),d=w!=null&&Gg(h)&&u===!0,f=j.encodeLocation?j.encodeLocation(h).pathname:h.pathname,g=x.pathname,v=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(g=g.toLowerCase(),v=v?v.toLowerCase():null,f=f.toLowerCase()),v&&S&&(v=Qn(v,S)||v);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let C=g===f||!a&&g.startsWith(f)&&g.charAt(k)==="/",T=v!=null&&(v===f||!a&&v.startsWith(f)&&v.charAt(f.length)==="/"),_={isActive:C,isPending:T,isTransitioning:d},$=C?r:void 0,L;typeof o=="function"?L=o(_):L=[o,C?"active":null,T?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let Y=typeof l=="function"?l(_):l;return b.createElement(re,uo({},p,{"aria-current":$,className:L,ref:n,style:Y,to:c,viewTransition:u}),typeof m=="function"?m(_):m)});var fs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fs||(fs={}));var $c;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($c||($c={}));function Hg(e){let t=b.useContext(_o);return t||ee(!1),t}function Vg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:l}=t===void 0?{}:t,c=Lp(),u=Zr(),m=Oo(e,{relative:a});return b.useCallback(p=>{if(zg(p,n)){p.preventDefault();let h=r!==void 0?r:co(u)===co(m);c(e,{replace:h,state:i,preventScrollReset:o,relative:a,viewTransition:l})}},[u,c,m,r,i,n,e,o,a,l])}function Gg(e,t){t===void 0&&(t={});let n=b.useContext(Ig);n==null&&ee(!1);let{basename:r}=Hg(fs.useViewTransitionState),i=Oo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Qn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Qn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ds(i.pathname,a)!=null||ds(i.pathname,o)!=null}function qg(){const e=Lp(),t=localStorage.getItem("cl_token"),n=()=>{localStorage.removeItem("cl_token"),e("/login"),window.location.reload()};if(t)return s.jsx("button",{onClick:n,className:"btn btn-ghost logout-btn",children:"Logout"})}function Qg(){return s.jsxs("div",{className:"top-utility",children:[s.jsx("div",{className:"left",children:s.jsxs("div",{className:"social-links",children:[s.jsx("a",{href:"#",children:"𝕏"}),s.jsx("a",{href:"#",children:"TikTok"}),s.jsx("a",{href:"#",children:"Instagram"}),s.jsx("a",{href:"#",children:"Facebook"}),s.jsx("a",{href:"#",children:"YouTube"})]})}),s.jsxs("div",{className:"right",children:[s.jsx(re,{to:"/donate",className:"donate-pill",children:"DONATE"}),s.jsx(re,{to:"/membership",className:"nav-link",children:"MEMBERSHIP"}),s.jsx(qg,{}),s.jsx(re,{to:"/contact",children:"CONTACT"})]})]})}function Si({label:e,menuId:t,activeMenu:n,setActiveMenu:r,children:i}){const o=n===t;return s.jsxs("div",{className:"nav-item",onMouseEnter:()=>r(t),onMouseLeave:()=>r(null),children:[s.jsx("span",{className:"nav-item-label",children:e}),i&&o&&s.jsx("div",{className:"dropdown",children:yr.Children.map(i,a=>yr.isValidElement(a)?yr.cloneElement(a,{onClick:()=>r(null)}):a)})]})}function Kg(){const[e,t]=b.useState(null);return s.jsxs("nav",{className:"main-nav",children:[s.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"24px"},children:[s.jsx("div",{className:"brand brand-shell",children:s.jsxs(re,{to:"/",className:"brand-link",children:[s.jsx("img",{src:"/images/logo.png",alt:"Canon Law Guild logo",className:"brand-logo"}),s.jsxs("div",{className:"brand-title-stack",children:[s.jsx("div",{className:"brand-title",children:"Canon Law"}),s.jsx("div",{className:"brand-title",children:" Guild"})]})]})}),s.jsxs("div",{className:"nav-items",children:[s.jsx(oe,{to:"/",end:!0,className:({isActive:n})=>n?"nav-link active":"nav-link",children:"HOME"}),s.jsxs(Si,{label:"ABOUT ▾",menuId:"about",activeMenu:e,setActiveMenu:t,children:[s.jsx(oe,{to:"/about/background",children:"Background"}),s.jsx(oe,{to:"/about/Constitution",children:"Constitution"}),s.jsx(oe,{to:"/about/founder",children:"Founder"}),s.jsx(oe,{to:"/about/leadership-structure",children:"Leadership Structure"}),s.jsx(oe,{to:"/about/doctrinal-statement",children:"Doctrinal Statement"}),s.jsx(oe,{to:"/about/inspirational-scriptures",children:"Inspirational Scriptures"}),s.jsx(oe,{to:"/about/contact-founder",children:"Contact Founder"})]}),s.jsxs(Si,{label:"HISTORY & ORIGIN ▾",menuId:"history",activeMenu:e,setActiveMenu:t,children:[s.jsx(oe,{to:"/history/canon-law-theology",children:"Canon Law Theology"}),s.jsx(oe,{to:"/history/history-of-canon-law",children:"History of Canon Law"}),s.jsx(oe,{to:"/history/principles-of-canon-law",children:"Principles of Canon Law"})]}),s.jsxs(Si,{label:"WHAT WE DO ▾",menuId:"what-we-do",activeMenu:e,setActiveMenu:t,children:[s.jsx(oe,{to:"/what-we-do/areas-of-focus",children:"Areas of Focus"}),s.jsx(oe,{to:"/what-we-do/publications",children:"Publications"}),s.jsx(oe,{to:"/what-we-do/decided-cases",children:"Decided Cases"}),s.jsx(oe,{to:"/what-we-do/advisory-opinions",children:"Advisory Opinions"})]}),s.jsxs(Si,{label:"TRAININGS & CONFERENCES ▾",menuId:"trainings",activeMenu:e,setActiveMenu:t,children:[s.jsx(oe,{to:"/trainings/annual-agm",children:"Annual AGM"}),s.jsx(oe,{to:"/trainings/workshops",children:"Workshops"}),s.jsx(oe,{to:"/trainings/conferences",children:"Conferences"})]}),s.jsx(oe,{to:"/news-events",className:({isActive:n})=>n?"nav-link active":"nav-link",children:"NEWS & EVENTS"})]})]}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .main-nav {
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.08);
          padding: 12px 0;
          position: relative;
          z-index: 1000;
        }
        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #333;
        }
        .brand-logo {
          height: 40px;
          margin-right: 10px;
        }
        .brand-title {
          font-weight: bold;
          font-size: 0.9rem;
          line-height: 1.2;
        }
        
        .nav-items {
          display: flex;
          align-items: center;
          flex-direction: row;
          white-space: nowrap; 
          gap: 5px;
        }
        
        .nav-item {
          position: relative; /* CRITICAL: Ensures sub-menus reference their exact parent button position */
          display: inline-block;
        }
        
        .nav-link, .nav-item-label {
          color: #555555;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px 2px;
          display: inline-block;
          user-select: none;
          transition: color 0.2s ease;
        }
        .nav-link:hover, .nav-item-label:hover {
          color: #a3704c;
        }

        .nav-link.active, .nav-item:has(a.active) .nav-item-label {
          color: #a3704c !important;
          border-bottom: 2px solid #a3704c;
        }

        /* Fixed Popover Dropdown Styling */
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #ffffff;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
          border: 1px solid #eeeeee;
          border-radius: 4px;
          padding: 8px 0;
          min-width: 240px;
          display: flex;
          flex-direction: column;
        }

        .dropdown::before {
          content: '';
          position: absolute;
          top: -15px; /* Reaches upward to overlap the parent label */
          left: 0;
          right: 0;
          height: 15px; /* Gives the cursor a safe path to slide down */
          background: transparent; /* Remains completely invisible to the user */
        }
        
        .dropdown a {
          color: #444444;
          text-decoration: none;
          padding: 10px 16px;
          font-size: 0.85rem;
          font-weight: 500;
          text-align: left;
          transition: background-color 0.2s ease, color 0.2s ease;

        }

        
        .dropdown a:hover {
          background-color: #f8f5f0;
          color: #a3704c;
        }

        .dropdown a.active {
          background-color: #f0e6df !important;
          color: #a3704c !important;
          font-weight: 700;
        }
      `}})]})}function Jg(){return s.jsxs("div",{className:"homepage-wrapper",children:[s.jsx("header",{className:"hero",style:{position:"relative",background:'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url("/images/canon-law-image.jpeg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",padding:"100px 0",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:s.jsx("div",{className:"hero-inner container",style:{maxWidth:"800px",margin:"0 auto",zIndex:2},children:s.jsxs("div",{className:"hero-copy",children:[s.jsx("h1",{style:{fontSize:"3rem",fontWeight:"700",color:"#ffffff",marginBottom:"20px"},children:"Canon Law Guild"}),s.jsx("p",{style:{fontSize:"1.25rem",color:"#f7fafc",marginBottom:"30px",lineHeight:"1.6"},children:"Advancing canonical scholarship, decided cases, and advisory opinions."}),s.jsx("div",{className:"hero-cta",children:s.jsx(re,{className:"btn btn-primary",to:"/publications",style:{padding:"12px 30px",fontSize:"1rem"},children:"FIND OUT MORE"})})]})})}),s.jsxs("main",{className:"container mt-md",style:{paddingBottom:"60px"},children:[s.jsxs("section",{className:"mt-md",style:B.sectionBlock,children:[s.jsx("div",{className:"section__heading",style:B.headingLeft,children:s.jsx("h2",{children:"Jurisprudence & Publications"})}),s.jsx("p",{className:"text-muted mt-sm",children:"Access our collected legal archives, peer-reviewed commentary, and formal interpretations of ecclesiastical law."}),s.jsxs("div",{className:"grid mt-sm",style:B.threeColumnGrid,children:[s.jsxs("div",{className:"card",style:B.summaryCard,children:[s.jsx("h3",{style:B.cardTitle,children:"Decided Cases"}),s.jsx("p",{style:B.cardText,children:"In-depth analysis of definitive tribunal judgments, precedent structures, and decreetal applications."}),s.jsx(re,{to:"what-we-do/decided-cases",style:B.cardLink,children:"Browse Cases →"})]}),s.jsxs("div",{className:"card",style:B.summaryCard,children:[s.jsx("h3",{style:B.cardTitle,children:"Advisory Opinions"}),s.jsx("p",{style:B.cardText,children:"Formal reviews regarding practical applications of the Code of Canon Law within diocesan frameworks."}),s.jsx(re,{to:"what-we-do/advisory-opinions",style:B.cardLink,children:"View Opinions →"})]}),s.jsxs("div",{className:"card",style:B.summaryCard,children:[s.jsx("h3",{style:B.cardTitle,children:"Academic Papers"}),s.jsx("p",{style:B.cardText,children:"Scholarly treatises exploring the history, theology, and philosophy of contemporary church systems."}),s.jsx(re,{to:"/publications",style:B.cardLink,children:"Read Journals →"})]})]})]}),s.jsxs("section",{className:"mt-lg",style:B.sectionBlock,children:[s.jsx("div",{className:"section__heading",style:B.headingLeft,children:s.jsx("h2",{children:"Society Membership"})}),s.jsx("p",{className:"text-muted mt-sm",children:"Join a network dedicated to the rigor, integrity, and exploration of Catholic church law."}),s.jsxs("div",{className:"grid mt-sm",style:B.threeColumnGrid,children:[s.jsxs("div",{className:"card",style:B.summaryCard,children:[s.jsx("h3",{style:B.cardTitle,children:"Annual Tier"}),s.jsx("p",{style:B.cardText,children:"Standard access for practicing canonists, tribunal advocates, chancellors, and active consultants."}),s.jsx(re,{to:"/membership",style:B.cardLink,children:"View Benefits →"})]}),s.jsxs("div",{className:"card",style:B.summaryCard,children:[s.jsx("h3",{style:B.cardTitle,children:"Goodwill Tier"}),s.jsx("p",{style:B.cardText,children:"A supportive tier designed for civil attorneys, parish planners, students, and interested laity."}),s.jsx(re,{to:"/membership",style:B.cardLink,children:"Join as Supporter →"})]}),s.jsxs("div",{className:"card",style:B.summaryCard,children:[s.jsx("h3",{style:B.cardTitle,children:"Life Tier"}),s.jsx("p",{style:B.cardText,children:"The highest tier of commitment, ensuring a permanent place in our society registry without ongoing dues."}),s.jsx(re,{to:"/membership",style:B.cardLink,children:"Secure Life Access →"})]})]})]}),s.jsxs("section",{className:"mt-lg",style:B.twoColumnGrid,children:[s.jsxs("div",{className:"card",style:{...B.summaryCard,padding:"30px"},children:[s.jsx("h3",{style:B.cardTitle,children:"Support Our Mission"}),s.jsx("p",{style:{...B.cardText,marginBottom:"20px"},children:"Your financial contributions help fund research grants, publish canon law papers, and support continuing education seminars for tribunal staffs worldwide."}),s.jsx(re,{to:"/donate",className:"btn btn-primary",style:{display:"inline-block",textAlign:"center"},children:"Make a Donation"})]}),s.jsxs("div",{className:"card",style:{...B.summaryCard,padding:"30px"},children:[s.jsx("h3",{style:B.cardTitle,children:"Contact the Secretariat"}),s.jsx("p",{style:{...B.cardText,marginBottom:"20px"},children:"Have questions regarding membership, research submissions, or canonical consultations? Reach out to our leadership office directly for formal inquiries."}),s.jsx(re,{to:"/contact",className:"btn btn-secondary",style:{display:"inline-block",textAlign:"center"},children:"Get In Touch"})]})]})]})]})}const B={sectionBlock:{marginBottom:"4rem"},headingLeft:{textAlign:"left",borderBottom:"2px solid #e2e8f0",paddingBottom:"0.5rem",marginBottom:"1rem"},threeColumnGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px",marginTop:"1.5rem"},twoColumnGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"30px",marginTop:"3rem"},summaryCard:{backgroundColor:"#fff",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"24px",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardTitle:{fontSize:"1.25rem",fontWeight:"600",color:"#1a202c",margin:"0 0 10px 0"},cardText:{fontSize:"0.95rem",color:"#4a5568",lineHeight:"1.5",margin:"0 0 20px 0",flexGrow:1},cardLink:{color:"#3182ce",fontWeight:"600",textDecoration:"none",fontSize:"0.95rem"}};function Bp(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xg}=Object.prototype,{getPrototypeOf:Kn}=Object,{iterator:ei,toStringTag:Fp}=Symbol,po=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Gr=(e,t)=>{let n=e;const r=[];for(;n!=null&&n!==Object.prototype;){if(r.indexOf(n)!==-1)return!1;if(r.push(n),po(n,t))return!0;n=Kn(n)}return!1},Yg=(e,t)=>e!=null&&Gr(e,t)?e[t]:void 0,fl=(e=>t=>{const n=Xg.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ke=e=>(e=e.toLowerCase(),t=>fl(t)===e),Ao=e=>t=>typeof t===e,{isArray:fn}=Array,mn=Ao("undefined");function tr(e){return e!==null&&!mn(e)&&e.constructor!==null&&!mn(e.constructor)&&Le(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ip=Ke("ArrayBuffer");function Zg(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ip(e.buffer),t}const ey=Ao("string"),Le=Ao("function"),Mp=Ao("number"),nr=e=>e!==null&&typeof e=="object",ty=e=>e===!0||e===!1,Di=e=>{if(!nr(e))return!1;const t=Kn(e);return(t===null||t===Object.prototype||Kn(t)===null)&&!Gr(e,Fp)&&!Gr(e,ei)},ny=e=>{if(!nr(e)||tr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},ry=Ke("Date"),iy=Ke("File"),oy=e=>!!(e&&typeof e.uri<"u"),ay=e=>e&&typeof e.getParts<"u",sy=Ke("Blob"),ly=Ke("FileList"),cy=Ke("Set"),uy=e=>nr(e)&&Le(e.pipe);function dy(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Wc=dy(),Hc=typeof Wc.FormData<"u"?Wc.FormData:void 0,py=e=>{if(!e)return!1;if(Hc&&e instanceof Hc)return!0;const t=Kn(e);if(!t||t===Object.prototype||!Le(e.append))return!1;const n=fl(e);return n==="formdata"||n==="object"&&Le(e.toString)&&e.toString()==="[object FormData]"},fy=Ke("URLSearchParams"),[my,hy,gy,yy]=["ReadableStream","Request","Response","Headers"].map(Ke),xy=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ti(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),fn(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(tr(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function Up(e,t){if(tr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const rn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$p=e=>!mn(e)&&e!==rn;function ms(...e){const{caseless:t,skipUndefined:n}=$p(this)&&this||{},r={},i=(o,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const l=t&&typeof a=="string"&&Up(r,a)||a,c=po(r,l)?r[l]:void 0;Di(c)&&Di(o)?r[l]=ms(c,o):Di(o)?r[l]=ms({},o):fn(o)?r[l]=o.slice():(!n||!mn(o))&&(r[l]=o)};for(let o=0,a=e.length;o<a;o++){const l=e[o];if(!l||tr(l)||(ti(l,i),typeof l!="object"||fn(l)))continue;const c=Object.getOwnPropertySymbols(l);for(let u=0;u<c.length;u++){const m=c[u];Ry.call(l,m)&&i(l[m],m)}}return r}const vy=(e,t,n,{allOwnKeys:r}={})=>(ti(t,(i,o)=>{n&&Le(i)?Object.defineProperty(e,o,{__proto__:null,value:Bp(i,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{__proto__:null,value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),wy=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),jy=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},Sy=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Kn(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},by=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ny=e=>{if(!e)return null;if(fn(e))return e;let t=e.length;if(!Mp(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ky=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Kn(Uint8Array)),Cy=(e,t)=>{const r=(e&&e[ei]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Ey=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ty=Ke("HTMLFormElement"),Py=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),{propertyIsEnumerable:Ry}=Object.prototype,_y=Ke("RegExp"),Wp=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ti(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},Ly=e=>{Wp(e,(t,n)=>{if(Le(e)&&["arguments","caller","callee"].includes(n))return!1;const r=e[n];if(Le(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Oy=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return fn(e)?r(e):r(String(e).split(t)),n},Ay=()=>{},zy=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Dy(e){return!!(e&&Le(e.append)&&e[Fp]==="FormData"&&e[ei])}const By=e=>{const t=new WeakSet,n=r=>{if(nr(r)){if(t.has(r))return;if(tr(r))return r;if(!("toJSON"in r)){t.add(r);let i;if(cy(r)){i=[];for(const o of r){const a=n(o);!mn(a)&&i.push(a)}}else i=fn(r)?[]:{},ti(r,(o,a)=>{const l=n(o);!mn(l)&&(i[a]=l)});return t.delete(r),i}}return r};return n(e)},Fy=Ke("AsyncFunction"),Iy=e=>e&&(nr(e)||Le(e))&&Le(e.then)&&Le(e.catch),Hp=((e,t)=>e?setImmediate:t?((n,r)=>(rn.addEventListener("message",({source:i,data:o})=>{i===rn&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),rn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Le(rn.postMessage)),My=typeof queueMicrotask<"u"?queueMicrotask.bind(rn):typeof process<"u"&&process.nextTick||Hp,Vp=e=>e!=null&&Le(e[ei]),Uy=e=>e!=null&&Gr(e,ei)&&Vp(e),y={isArray:fn,isArrayBuffer:Ip,isBuffer:tr,isFormData:py,isArrayBufferView:Zg,isString:ey,isNumber:Mp,isBoolean:ty,isObject:nr,isPlainObject:Di,isEmptyObject:ny,isReadableStream:my,isRequest:hy,isResponse:gy,isHeaders:yy,isUndefined:mn,isDate:ry,isFile:iy,isReactNativeBlob:oy,isReactNative:ay,isBlob:sy,isRegExp:_y,isFunction:Le,isStream:uy,isURLSearchParams:fy,isTypedArray:ky,isFileList:ly,forEach:ti,merge:ms,extend:vy,trim:xy,stripBOM:wy,inherits:jy,toFlatObject:Sy,kindOf:fl,kindOfTest:Ke,endsWith:by,toArray:Ny,forEachEntry:Cy,matchAll:Ey,isHTMLForm:Ty,hasOwnProperty:po,hasOwnProp:po,hasOwnInPrototypeChain:Gr,getSafeProp:Yg,reduceDescriptors:Wp,freezeMethods:Ly,toObjectSet:Oy,toCamelCase:Py,noop:Ay,toFiniteNumber:zy,findKey:Up,global:rn,isContextDefined:$p,isSpecCompliantForm:Dy,toJSONObject:By,isAsyncFn:Fy,isThenable:Iy,setImmediate:Hp,asap:My,isIterable:Vp,isSafeIterable:Uy},$y=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wy=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim();const l=y.hasOwnProp(t,n);!n||l&&y.hasOwnProp($y,n)||(n==="set-cookie"?l?t[n].push(r):t[n]=[r]:t[n]=l?t[n]+", "+r:r)}),t};function Hy(e){let t=0,n=e.length;for(;t<n;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;n>t;){const r=e.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}const Vy=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Gy=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function ml(e,t){return y.isArray(e)?e.map(n=>ml(n,t)):Hy(String(e).replace(t,""))}const qy=e=>ml(e,Vy),Qy=e=>ml(e,Gy);function Gp(e){const t=Object.create(null);return y.forEach(e.toJSON(),(n,r)=>{t[r]=Qy(n)}),t}const Vc=Symbol("internals");function pr(e){return e&&String(e).trim().toLowerCase()}function Bi(e){return e===!1||e==null?e:y.isArray(e)?e.map(Bi):qy(String(e))}function Ky(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Jy=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function pa(e){let t=0,n=e.length;for(;t<n;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;n>t;){const r=e.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}function Xy(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n="";for(let r=1;r<t;r++){const i=e.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=t))return e;n+=e[r]}return n}function Yy(e){const t=Object.create(null),n=String(e);let r=0,i=!1,o=!1;function a(l){const c=pa(n.slice(r,l)),u=c.indexOf("=");if(u<1)return;const m=pa(c.slice(0,u));if(!Jy.test(m))return;const p=m.toLowerCase();if(p==="__proto__"||p==="constructor"||p==="prototype")return;const h=pa(c.slice(u+1));t[p]=Xy(h)}for(let l=0;l<n.length;l++){const c=n.charCodeAt(l);i?o?o=!1:c===92?o=!0:c===34&&(i=!1):c===34?i=!0:(c===44||c===59)&&(a(l),r=l+1)}return a(n.length),t}const Zy=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function fa(e,t,n,r,i){if(y.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!y.isString(t)){if(y.isString(r))return t.indexOf(r)!==-1;if(y.isRegExp(r))return r.test(t)}}function e0(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function t0(e,t){const n=y.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}let we=class{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,c,u){const m=pr(c);if(!m)return;const p=y.findKey(i,m);(!p||i[p]===void 0||u===!0||u===void 0&&i[p]!==!1)&&(i[p||c]=Bi(l))}const a=(l,c)=>y.forEach(l,(u,m)=>o(u,m,c));if(y.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(y.isString(t)&&(t=t.trim())&&!Zy(t))a(Wy(t),n);else if(y.isObject(t)&&y.isSafeIterable(t)){let l=Object.create(null),c,u;for(const m of t){if(!y.isArray(m))throw new TypeError("Object iterator must return a key-value pair");u=m[0],y.hasOwnProp(l,u)?(c=l[u],l[u]=y.isArray(c)?[...c,m[1]]:[c,m[1]]):l[u]=m[1]}a(l,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=pr(t),t){const r=y.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Ky(i);if(y.isFunction(n))return n.call(this,i,r);if(y.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=pr(t),t){const r=y.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||fa(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=pr(a),a){const l=y.findKey(r,a);l&&(!n||fa(r,r[l],l,n))&&(delete r[l],i=!0)}}return y.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||fa(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return y.forEach(this,(i,o)=>{const a=y.findKey(r,o);if(a){n[a]=Bi(i),delete n[o];return}const l=t?e0(o):String(o).trim();l!==o&&delete n[o],n[l]=Bi(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return y.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&y.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return y.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return Yy(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Vc]=this[Vc]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=pr(a);r[l]||(t0(i,a),r[l]=!0)}return y.isArray(t)?t.forEach(o):o(t),this}};we.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(we.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});y.freezeMethods(we);const fo="[REDACTED ****]";function n0(e){if(y.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(y.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function r0(e,t){const n=new Set(t.map(o=>String(o).toLowerCase())),r=[],i=o=>{if(o===null||typeof o!="object"||y.isBuffer(o))return o;if(r.indexOf(o)!==-1)return;o instanceof we&&(o=o.toJSON()),r.push(o);let a;if(y.isArray(o))a=[],o.forEach((l,c)=>{const u=i(l);y.isUndefined(u)||(a[c]=u)});else{if(!y.isPlainObject(o)&&n0(o))return r.pop(),o;a=Object.create(null);for(const[l,c]of Object.entries(o)){const u=n.has(l.toLowerCase())?fo:i(c);y.isUndefined(u)||(a[l]=u)}}return r.pop(),a};return i(e)}function Gc(e){try{return String(e)}catch{return""}}function i0(e){return e.errors.map(n=>{try{return n&&n.message?Gc(n.message):Gc(n)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let E=class qp extends Error{static from(t,n,r,i,o,a){let l=t.message;!l&&y.isArray(t.errors)&&t.errors.length&&(l=i0(t));const c=new qp(l,n||t.code,r,i,o);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),a&&Object.assign(c,a),c}constructor(t,n,r,i,o){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),i&&(this.request=i),o&&(this.response=o,this.status=o.status)}toJSON(){const t=this.config,n=t&&y.hasOwnProp(t,"redact")?t.redact:void 0,r=y.isArray(n)&&n.length>0?r0(t,n):y.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};E.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";E.ERR_BAD_OPTION="ERR_BAD_OPTION";E.ECONNABORTED="ECONNABORTED";E.ETIMEDOUT="ETIMEDOUT";E.ECONNREFUSED="ECONNREFUSED";E.ERR_NETWORK="ERR_NETWORK";E.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";E.ERR_DEPRECATED="ERR_DEPRECATED";E.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";E.ERR_BAD_REQUEST="ERR_BAD_REQUEST";E.ERR_CANCELED="ERR_CANCELED";E.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";E.ERR_INVALID_URL="ERR_INVALID_URL";E.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const o0=null,Qp=100;function hs(e){return y.isPlainObject(e)||y.isArray(e)}function Kp(e){return y.endsWith(e,"[]")?e.slice(0,-2):e}function ma(e,t,n){return e?e.concat(t).map(function(i,o){return i=Kp(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function a0(e){return y.isArray(e)&&!e.some(hs)}const s0=y.toFlatObject(y,{},null,function(t){return/^is[A-Z]/.test(t)});function zo(e,t,n){if(!y.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,g){return!y.isUndefined(g[f])});const r=n.metaTokens,i=n.visitor||w,o=n.dots,a=n.indexes,l=n.Blob||typeof Blob<"u"&&Blob,c=n.maxDepth===void 0?Qp:n.maxDepth,u=l&&y.isSpecCompliantForm(t),m=[];if(!y.isFunction(i))throw new TypeError("visitor must be a function");function p(d){if(d===null)return"";if(y.isDate(d))return d.toISOString();if(y.isBoolean(d))return d.toString();if(!u&&y.isBlob(d))throw new E("Blob is not supported. Use a Buffer instead.");if(y.isArrayBuffer(d)||y.isTypedArray(d)){if(u&&typeof l=="function")return new l([d]);throw new E("Blob is not supported. Use a Buffer instead.",E.ERR_NOT_SUPPORT)}return d}function h(d){if(d>c)throw new E("Object is too deeply nested ("+d+" levels). Max depth: "+c,E.ERR_FORM_DATA_DEPTH_EXCEEDED)}function x(d,f){if(c===1/0)return JSON.stringify(d);const g=[];return JSON.stringify(d,function(k,C){if(!y.isObject(C))return C;for(;g.length&&g[g.length-1]!==this;)g.pop();return g.push(C),h(f+g.length-1),C})}function w(d,f,g){let v=d;if(y.isReactNative(t)&&y.isReactNativeBlob(d))return t.append(ma(g,f,o),p(d)),!1;if(d&&!g&&typeof d=="object"){if(y.endsWith(f,"{}"))f=r?f:f.slice(0,-2),d=x(d,1);else if(y.isArray(d)&&a0(d)||(y.isFileList(d)||y.endsWith(f,"[]"))&&(v=y.toArray(d)))return f=Kp(f),v.forEach(function(C,T){!(y.isUndefined(C)||C===null)&&t.append(a===!0?ma([f],T,o):a===null?f:f+"[]",p(C))}),!1}return hs(d)?!0:(t.append(ma(g,f,o),p(d)),!1)}const j=Object.assign(s0,{defaultVisitor:w,convertValue:p,isVisitable:hs});function S(d,f,g=0){if(!y.isUndefined(d)){if(h(g),m.indexOf(d)!==-1)throw new Error("Circular reference detected in "+f.join("."));m.push(d),y.forEach(d,function(k,C){(!(y.isUndefined(k)||k===null)&&i.call(t,k,y.isString(C)?C.trim():C,f,j))===!0&&S(k,f?f.concat(C):[C],g+1)}),m.pop()}}if(!y.isObject(e))throw new TypeError("data must be an object");return S(e),t}function qc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(r){return t[r]})}function hl(e,t){this._pairs=[],e&&zo(e,this,t)}const Jp=hl.prototype;Jp.append=function(t,n){this._pairs.push([t,n])};Jp.toString=function(t){const n=t?r=>t.call(this,r,qc):qc;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function l0(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Xp(e,t,n){if(!t)return e;e=e||"";const r=y.isFunction(n)?{serialize:n}:n,i=y.getSafeProp(r,"encode")||l0,o=y.getSafeProp(r,"serialize");let a;if(o?a=o(t,r):a=y.isURLSearchParams(t)?t.toString():new hl(t,r).toString(i),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Qc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){y.forEach(this.handlers,function(r){r!==null&&t(r)})}}const gl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},c0=typeof URLSearchParams<"u"?URLSearchParams:hl,u0=typeof FormData<"u"?FormData:null,d0=typeof Blob<"u"?Blob:null,p0={isBrowser:!0,classes:{URLSearchParams:c0,FormData:u0,Blob:d0},protocols:["http","https","file","blob","url","data"]},yl=typeof window<"u"&&typeof document<"u",gs=typeof navigator=="object"&&navigator||void 0,f0=yl&&(!gs||["ReactNative","NativeScript","NS"].indexOf(gs.product)<0),m0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",h0=yl&&window.location.href||"http://localhost",g0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:yl,hasStandardBrowserEnv:f0,hasStandardBrowserWebWorkerEnv:m0,navigator:gs,origin:h0},Symbol.toStringTag,{value:"Module"})),fe={...g0,...p0};function y0(e,t){return zo(e,new fe.classes.URLSearchParams,{visitor:function(n,r,i,o){return fe.isNode&&y.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}const Kc=Qp;function Yp(e){if(e>Kc)throw new E("FormData field is too deeply nested ("+e+" levels). Max depth: "+Kc,E.ERR_FORM_DATA_DEPTH_EXCEEDED)}function x0(e){const t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=n.exec(e))!==null;)Yp(t.length),t.push(r[0]==="[]"?"":r[1]||r[0]);return t}function v0(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Zp(e){function t(n,r,i,o){Yp(o);let a=n[o++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=o>=n.length;return a=!a&&y.isArray(i)?i.length:a,c?(y.hasOwnProp(i,a)?i[a]=y.isArray(i[a])?i[a].concat(r):[i[a],r]:i[a]=r,!l):((!y.hasOwnProp(i,a)||!y.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&y.isArray(i[a])&&(i[a]=v0(i[a])),!l)}if(y.isFormData(e)&&y.isFunction(e.entries)){const n={};return y.forEachEntry(e,(r,i)=>{t(x0(r),i,n,0)}),n}return null}const Sn=(e,t)=>e!=null&&y.hasOwnProp(e,t)?e[t]:void 0;function w0(e,t,n){if(y.isString(e))try{return(t||JSON.parse)(e),y.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ni={transitional:gl,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=y.isObject(t);if(o&&y.isHTMLForm(t)&&(t=new FormData(t)),y.isFormData(t))return i?JSON.stringify(Zp(t)):t;if(y.isArrayBuffer(t)||y.isBuffer(t)||y.isStream(t)||y.isFile(t)||y.isBlob(t)||y.isReadableStream(t))return t;if(y.isArrayBufferView(t))return t.buffer;if(y.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){const c=Sn(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return y0(t,c).toString();if((l=y.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=Sn(this,"env"),m=u&&u.FormData;return zo(l?{"files[]":t}:t,m&&new m,c)}}return o||i?(n.setContentType("application/json",!1),w0(t)):t}],transformResponse:[function(t){const n=Sn(this,"transitional")||ni.transitional,r=n&&n.forcedJSONParsing,i=Sn(this,"responseType"),o=i==="json";if(y.isResponse(t)||y.isReadableStream(t))return t;if(t&&y.isString(t)&&(r&&!i||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,Sn(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?E.from(c,E.ERR_BAD_RESPONSE,this,null,Sn(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:fe.classes.FormData,Blob:fe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(["delete","get","head","post","put","patch","query"],e=>{ni.headers[e]={}});function ha(e,t){const n=this||ni,r=t||n,i=we.from(r.headers);let o=r.data;return y.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function ef(e){return!!(e&&e.__CANCEL__)}let ri=class extends E{constructor(t,n,r){super(t??"canceled",E.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function tf(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new E("Request failed with status code "+n.status,n.status>=400&&n.status<500?E.ERR_BAD_REQUEST:E.ERR_BAD_RESPONSE,n.config,n.request,n))}function j0(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function S0(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),m=r[o];a||(a=u),n[i]=c,r[i]=u;let p=o,h=0;for(;p!==i;)h+=n[p++],p=p%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const x=m&&u-m;return x?Math.round(h*1e3/x):void 0}}function b0(e,t){let n=0,r=1e3/t,i,o;const a=(u,m=Date.now())=>{n=m,i=null,o&&(clearTimeout(o),o=null),e(...u)};return[(...u)=>{const m=Date.now(),p=m-n;p>=r?a(u,m):(i=u,o||(o=setTimeout(()=>{o=null,a(i)},r-p)))},()=>i&&a(i)]}const mo=(e,t,n=3)=>{let r=0;const i=S0(50,250);return b0(o=>{if(!o||typeof o.loaded!="number")return;const a=o.loaded,l=o.lengthComputable?o.total:void 0,c=Math.max(0,l!=null?Math.min(a,l):a),u=Math.max(0,c-r),m=i(u);r=Math.max(r,c);const p={loaded:c,total:l,progress:l?c/l:void 0,bytes:u,rate:m||void 0,estimated:m&&l?(l-c)/m:void 0,event:o,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(p)},n)},Jc=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Xc=(e,t=y.asap)=>(...n)=>t(()=>e(...n)),N0=fe.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,fe.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(fe.origin),fe.navigator&&/(msie|trident)/i.test(fe.navigator.userAgent)):()=>!0,k0=fe.hasStandardBrowserEnv?{write(e,t,n,r,i,o,a){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];y.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),y.isString(r)&&l.push(`path=${r}`),y.isString(i)&&l.push(`domain=${i}`),o===!0&&l.push("secure"),y.isString(a)&&l.push(`SameSite=${a}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const r=t[n].replace(/^\s+/,""),i=r.indexOf("=");if(i!==-1&&r.slice(0,i)===e)try{return decodeURIComponent(r.slice(i+1))}catch{return r.slice(i+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function C0(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function E0(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+"/"+t.replace(/^\/+/,"")}const T0=/^https?:(?!\/\/)/i,P0=/[\t\n\r]/g;function R0(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function _0(e){return R0(e).replace(P0,"")}function L0(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,n,r="")=>`${n}${r}${fo}`)}function O0(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${fo}@`),n=t.indexOf("#"),i=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${fo}`);return n===-1?i:`${i}#${L0(t.slice(n+1))}`}function Yc(e,t){if(typeof e=="string"){const n=_0(e);if(T0.test(n))throw new E(`Invalid URL ${JSON.stringify(O0(n))}: missing "//" after protocol`,E.ERR_INVALID_URL,t)}}function nf(e,t,n,r){Yc(t,r);let i=!C0(t);return e&&(i||n===!1)?(Yc(e,r),E0(e,t)):t}const Zc=e=>e instanceof we?{...e}:e,A0=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function hn(e,t){e=e||{},t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(m,p,h,x){return y.isPlainObject(m)&&y.isPlainObject(p)?y.merge.call({caseless:x},m,p):y.isPlainObject(p)?y.merge({},p):y.isArray(p)?p.slice():p}function i(m,p,h,x){if(y.isUndefined(p)){if(!y.isUndefined(m))return r(void 0,m,h,x)}else return r(m,p,h,x)}function o(m,p){if(!y.isUndefined(p))return r(void 0,p)}function a(m,p){if(y.isUndefined(p)){if(!y.isUndefined(m))return r(void 0,m)}else return r(void 0,p)}function l(m){const p=y.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!y.isUndefined(p))if(y.isPlainObject(p)){if(y.hasOwnProp(p,m))return p[m]}else return;const h=y.hasOwnProp(e,"transitional")?e.transitional:void 0;if(y.isPlainObject(h)&&y.hasOwnProp(h,m))return h[m]}function c(m,p,h){if(y.hasOwnProp(t,h))return r(m,p);if(y.hasOwnProp(e,h))return r(void 0,m)}const u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:c,headers:(m,p,h)=>i(Zc(m),Zc(p),h,!0)};return y.forEach(A0({...e,...t}),function(p){if(p==="__proto__"||p==="constructor"||p==="prototype")return;const h=y.hasOwnProp(u,p)?u[p]:i,x=y.hasOwnProp(e,p)?e[p]:void 0,w=y.hasOwnProp(t,p)?t[p]:void 0,j=h(x,w,p);y.isUndefined(j)&&h!==c||(n[p]=j)}),y.hasOwnProp(t,"validateStatus")&&y.isUndefined(t.validateStatus)&&l("validateStatusUndefinedResolves")===!1&&(y.hasOwnProp(e,"validateStatus")?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}const z0=["content-type","content-length"];function D0(e,t,n){if(n!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([r,i])=>{z0.includes(r.toLowerCase())&&e.set(r,i)})}const B0=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16)));function rf(e){const t=hn({},e),n=h=>y.hasOwnProp(t,h)?t[h]:void 0,r=n("data");let i=n("withXSRFToken");const o=n("xsrfHeaderName"),a=n("xsrfCookieName");let l=n("headers");const c=n("auth"),u=n("baseURL"),m=n("allowAbsoluteUrls"),p=n("url");if(t.headers=l=we.from(l),t.url=Xp(nf(u,p,m,t),n("params"),n("paramsSerializer")),c){const h=y.getSafeProp(c,"username")||"",x=y.getSafeProp(c,"password")||"";try{l.set("Authorization","Basic "+btoa(h+":"+(x?B0(x):"")))}catch(w){throw E.from(w,E.ERR_BAD_OPTION_VALUE,e)}}if(y.isFormData(r)&&(fe.hasStandardBrowserEnv||fe.hasStandardBrowserWebWorkerEnv||y.isReactNative(r)?l.setContentType(void 0):y.isFunction(r.getHeaders)&&D0(l,r.getHeaders(),n("formDataHeaderPolicy"))),fe.hasStandardBrowserEnv&&(y.isFunction(i)&&(i=i(t)),i===!0||i==null&&N0(t.url))){const x=o&&a&&k0.read(a);x&&l.set(o,x)}return t}const F0=typeof XMLHttpRequest<"u",I0=F0&&function(e){return new Promise(function(n,r){const i=rf(e);let o=i.data;const a=we.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=i,m,p,h,x,w;function j(){x&&x(),w&&w(),i.cancelToken&&i.cancelToken.unsubscribe(m),i.signal&&i.signal.removeEventListener("abort",m)}let S=new XMLHttpRequest;S.open(i.method.toUpperCase(),i.url,!0),S.timeout=i.timeout;function d(){if(!S)return;const g=we.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:g,config:e,request:S};tf(function(T){n(T),j()},function(T){r(T),j()},k),S=null}"onloadend"in S?S.onloadend=d:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(d)},S.onabort=function(){S&&(r(new E("Request aborted",E.ECONNABORTED,e,S)),j(),S=null)},S.onerror=function(v){const k=v&&v.message?v.message:"Network Error",C=new E(k,E.ERR_NETWORK,e,S);C.event=v||null,r(C),j(),S=null},S.ontimeout=function(){let v=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const k=i.transitional||gl;i.timeoutErrorMessage&&(v=i.timeoutErrorMessage),r(new E(v,k.clarifyTimeoutError?E.ETIMEDOUT:E.ECONNABORTED,e,S)),j(),S=null},o===void 0&&a.setContentType(null),"setRequestHeader"in S&&y.forEach(Gp(a),function(v,k){S.setRequestHeader(k,v)}),y.isUndefined(i.withCredentials)||(S.withCredentials=!!i.withCredentials),l&&l!=="json"&&(S.responseType=i.responseType),u&&([h,w]=mo(u,!0),S.addEventListener("progress",h)),c&&S.upload&&([p,x]=mo(c),S.upload.addEventListener("progress",p),S.upload.addEventListener("loadend",x)),(i.cancelToken||i.signal)&&(m=g=>{S&&(r(!g||g.type?new ri(null,e,S):g),S.abort(),j(),S=null)},i.cancelToken&&i.cancelToken.subscribe(m),i.signal&&(i.signal.aborted?m():i.signal.addEventListener("abort",m)));const f=j0(i.url);if(f&&!fe.protocols.includes(f)){r(new E("Unsupported protocol "+f+":",E.ERR_BAD_REQUEST,e)),j();return}S.send(o||null)})},M0=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const n=new AbortController;let r=!1;const i=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;n.abort(u instanceof E?u:new ri(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new E(`timeout of ${t}ms exceeded`,E.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>{if(!r){if(c.aborted){i.call(c);return}c.addEventListener("abort",i,{once:!0})}});const{signal:l}=n;return l.unsubscribe=()=>y.asap(a),l},U0=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},$0=async function*(e,t){for await(const n of W0(e))yield*U0(n,t)},W0=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},eu=(e,t,n,r)=>{const i=$0(e,t);let o=0,a,l=c=>{a||(a=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:m}=await i.next();if(u){l(),c.close();return}let p=m.byteLength;if(n){let h=o+=p;n(h)}c.enqueue(new Uint8Array(m))}catch(u){throw l(u),u}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},tu=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,of=(e,t,n)=>t+2<n&&tu(e.charCodeAt(t+1))&&tu(e.charCodeAt(t+2)),nu=e=>e<=57?e-48:(e&223)-55,H0=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,V0=e=>e===9||e===10||e===12||e===13||e===32,G0=e=>{const t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},q0=e=>{const t=e.length;let n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},Q0=e=>{const t=e.length;let n=0,r=0,i=!1;for(let o=0;o<t;o++){let a=e.charCodeAt(o);if(a===37&&of(e,o,t)&&(a=nu(e.charCodeAt(o+1))*16+nu(e.charCodeAt(o+2)),o+=2),!V0(a)){if(a===61){r++;continue}if(!H0(a)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!==0||n%4===1?q0(e):G0(n)},K0=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const n=e.indexOf(",");if(n<0)return 0;const r=e.slice(5,n),i=e.slice(n+1);if(/;base64/i.test(r))return t(i);let a=0;for(let l=0,c=i.length;l<c;l++){const u=i.charCodeAt(l);if(u===37&&of(i,l,c))a+=1,l+=2;else if(u<128)a+=1;else if(u<2048)a+=2;else if(u>=55296&&u<=56319&&l+1<c){const m=i.charCodeAt(l+1);m>=56320&&m<=57343?(a+=4,l++):a+=3}else a+=3}return a};function J0(e){const t=typeof e=="string"?e.indexOf("#"):-1;return K0(t===-1?e:e.slice(0,t),Q0)}const xl="1.19.0",ru=64*1024,{isFunction:bi}=y,X0=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,n)=>String.fromCharCode(parseInt(n,16))),iu=e=>{if(!y.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},ou=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Y0=e=>{const t=e.indexOf("://");let n=e;return t!==-1&&(n=n.slice(t+3)),n.includes("@")||n.includes(":")},Z0=e=>{const t=y.global!==void 0&&y.global!==null?y.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=y.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:i,Request:o,Response:a}=e,l=i?bi(i):typeof fetch=="function",c=bi(o),u=bi(a);if(!l)return!1;const m=l&&bi(n),p=l&&(typeof r=="function"?(d=>f=>d.encode(f))(new r):async d=>new Uint8Array(await new o(d).arrayBuffer())),h=c&&m&&ou(()=>{let d=!1;const f=new o(fe.origin,{body:new n,method:"POST",get duplex(){return d=!0,"half"}}),g=f.headers.has("Content-Type");return f.body!=null&&f.body.cancel(),d&&!g}),x=u&&m&&ou(()=>y.isReadableStream(new a("").body)),w={stream:x&&(d=>d.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!w[d]&&(w[d]=(f,g)=>{let v=f&&f[d];if(v)return v.call(f);throw new E(`Response type '${d}' is not supported`,E.ERR_NOT_SUPPORT,g)})});const j=async d=>{if(d==null)return 0;if(y.isBlob(d))return d.size;if(y.isSpecCompliantForm(d))return(await new o(fe.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(y.isArrayBufferView(d)||y.isArrayBuffer(d))return d.byteLength;if(y.isURLSearchParams(d)&&(d=d+""),y.isString(d))return(await p(d)).byteLength},S=async(d,f)=>{const g=y.toFiniteNumber(d.getContentLength());return g??j(f)};return async d=>{let{url:f,method:g,data:v,signal:k,cancelToken:C,timeout:T,onDownloadProgress:_,onUploadProgress:$,responseType:L,headers:Y,withCredentials:ot="same-origin",fetchOptions:Nt,maxContentLength:Oe,maxBodyLength:vn}=rf(d);const dt=y.isNumber(Oe)&&Oe>-1,Jt=y.isNumber(vn)&&vn>-1,P=I=>y.hasOwnProp(d,I)?d[I]:void 0;let A=i||fetch;L=L?(L+"").toLowerCase():"text";let O=M0([k,C&&C.toAbortSignal()],T),D=null;const W=O&&O.unsubscribe&&(()=>{O.unsubscribe()});let Je,Ae=null;const wn=()=>new E("Request body larger than maxBodyLength limit",E.ERR_BAD_REQUEST,d,D);try{let I;const de=P("auth");if(de){const z=y.getSafeProp(de,"username")||"",ze=y.getSafeProp(de,"password")||"";I={username:z,password:ze}}if(Y0(f)){const z=new URL(f,fe.origin);if(!I&&(z.username||z.password)){const ze=iu(z.username),kt=iu(z.password);I={username:ze,password:kt}}(z.username||z.password)&&(z.username="",z.password="",f=z.href)}if(I&&(Y.delete("authorization"),Y.set("Authorization","Basic "+btoa(X0((I.username||"")+":"+(I.password||""))))),dt&&typeof f=="string"&&f.startsWith("data:")&&J0(f)>Oe)throw new E("maxContentLength size of "+Oe+" exceeded",E.ERR_BAD_RESPONSE,d,D);if(Jt&&g!=="get"&&g!=="head"){const z=await j(v);if(typeof z=="number"&&isFinite(z)&&(Je=z,z>vn))throw wn()}const ii=Jt&&(y.isReadableStream(v)||y.isStream(v)),Sl=(z,ze,kt)=>eu(z,ru,Xt=>{if(Jt&&Xt>vn)throw Ae=wn();ze&&ze(Xt)},kt);if(h&&g!=="get"&&g!=="head"&&($||ii)){if(Je=Je??await S(Y,v),Je!==0||ii){let z=new o(f,{method:"POST",body:v,duplex:"half"}),ze;if(y.isFormData(v)&&(ze=z.headers.get("content-type"))&&Y.setContentType(ze),z.body){const[kt,Xt]=$&&Jc(Je,mo(Xc($)))||[];v=Sl(z.body,kt,Xt)}}}else if(ii&&!c&&m&&g!=="get"&&g!=="head")v=Sl(v);else if(ii&&c&&!h&&g!=="get"&&g!=="head")throw new E("Stream request bodies are not supported by the current fetch implementation",E.ERR_NOT_SUPPORT,d,D);y.isString(ot)||(ot=ot?"include":"omit");const pf=c&&"credentials"in o.prototype;if(y.isFormData(v)){const z=Y.getContentType();z&&/^multipart\/form-data/i.test(z)&&!/boundary=/i.test(z)&&Y.delete("content-type")}Y.set("User-Agent","axios/"+xl,!1);const bl={...Nt,signal:O,method:g.toUpperCase(),headers:Gp(Y.normalize()),body:v,duplex:"half",credentials:pf?ot:void 0};D=c&&new o(f,bl);let pt=await(c?A(D,Nt):A(f,bl));const Nl=we.from(pt.headers);if(dt){const z=y.toFiniteNumber(Nl.getContentLength());if(z!=null&&z>Oe)throw new E("maxContentLength size of "+Oe+" exceeded",E.ERR_BAD_RESPONSE,d,D)}const Fo=x&&(L==="stream"||L==="response");if(x&&pt.body&&(_||dt||Fo&&W)){const z={};["status","statusText","headers"].forEach(rr=>{z[rr]=pt[rr]});const ze=y.toFiniteNumber(Nl.getContentLength()),[kt,Xt]=_&&Jc(ze,mo(Xc(_),!0))||[];let kl=0;const ff=rr=>{if(dt&&(kl=rr,kl>Oe))throw new E("maxContentLength size of "+Oe+" exceeded",E.ERR_BAD_RESPONSE,d,D);kt&&kt(rr)};pt=new a(eu(pt.body,ru,ff,()=>{Xt&&Xt(),W&&W()}),z)}L=L||"text";let ft=await w[y.findKey(w,L)||"text"](pt,d);if(dt&&!x&&!Fo){let z;if(ft!=null&&(typeof ft.byteLength=="number"?z=ft.byteLength:typeof ft.size=="number"?z=ft.size:typeof ft=="string"&&(z=typeof r=="function"?new r().encode(ft).byteLength:ft.length)),typeof z=="number"&&z>Oe)throw new E("maxContentLength size of "+Oe+" exceeded",E.ERR_BAD_RESPONSE,d,D)}return!Fo&&W&&W(),await new Promise((z,ze)=>{tf(z,ze,{data:ft,headers:we.from(pt.headers),status:pt.status,statusText:pt.statusText,config:d,request:D})})}catch(I){if(W&&W(),O&&O.aborted&&O.reason instanceof E){const de=O.reason;throw de.config=d,D&&(de.request=D),I!==de&&Object.defineProperty(de,"cause",{__proto__:null,value:I,writable:!0,enumerable:!1,configurable:!0}),de}if(Ae)throw D&&!Ae.request&&(Ae.request=D),Ae;if(I instanceof E)throw D&&!I.request&&(I.request=D),I;if(I&&I.name==="TypeError"&&/Load failed|fetch/i.test(I.message)){const de=new E("Network Error",E.ERR_NETWORK,d,D,I&&I.response);throw Object.defineProperty(de,"cause",{__proto__:null,value:I.cause||I,writable:!0,enumerable:!1,configurable:!0}),de}throw E.from(I,I&&I.code,d,D,I&&I.response)}}},ex=new Map,af=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:i}=t,o=[r,i,n];let a=o.length,l=a,c,u,m=ex;for(;l--;)c=o[l],u=m.get(c),u===void 0&&m.set(c,u=l?new Map:Z0(t)),m=u;return u};af();const vl={http:o0,xhr:I0,fetch:{get:af}};y.forEach(vl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const au=e=>`- ${e}`,tx=e=>y.isFunction(e)||e===null||e===!1;function nx(e,t){e=y.isArray(e)?e:[e];const{length:n}=e;let r,i;const o={};for(let a=0;a<n;a++){r=e[a];let l;if(i=r,!tx(r)&&(i=vl[(l=String(r)).toLowerCase()],i===void 0))throw new E(`Unknown adapter '${l}'`);if(i&&(y.isFunction(i)||(i=i.get(t))))break;o[l||"#"+a]=i}if(!i){const a=Object.entries(o).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=n?a.length>1?`since :
`+a.map(au).join(`
`):" "+au(a[0]):"as no adapter specified";throw new E("There is no suitable adapter to dispatch the request "+l,E.ERR_NOT_SUPPORT)}return i}const sf={getAdapter:nx,adapters:vl};function ga(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ri(null,e)}function ya(e){return ga(e),e.headers=we.from(e.headers),e.data=ha.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),sf.getAdapter(e.adapter||ni.adapter,e)(e).then(function(r){ga(e),e.response=r;try{r.data=ha.call(e,e.transformResponse,r)}finally{delete e.response}return r.headers=we.from(r.headers),r},function(r){if(!ef(r)&&(ga(e),r&&r.response)){e.response=r.response;try{r.response.data=ha.call(e,e.transformResponse,r.response)}finally{delete e.response}r.response.headers=we.from(r.response.headers)}return Promise.reject(r)})}const Do={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Do[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const su={};Do.transitional=function(t,n,r){function i(o,a){return"[Axios v"+xl+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new E(i(a," has been removed"+(n?" in "+n:"")),E.ERR_DEPRECATED);return n&&!su[a]&&(su[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};Do.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function rx(e,t,n){if(typeof e!="object"||e===null)throw new E("options must be an object",E.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=Object.prototype.hasOwnProperty.call(t,o)?t[o]:void 0;if(a){const l=e[o],c=l===void 0||a(l,o,e);if(c!==!0)throw new E("option "+o+" must be "+c,E.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new E("Unknown option "+o,E.ERR_BAD_OPTION)}}const Fi={assertOptions:rx,validators:Do},xe=Fi.validators;let sn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Qc,response:new Qc}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=(()=>{if(!i.stack)return"";const a=i.stack.indexOf(`
`);return a===-1?"":i.stack.slice(a+1)})();try{if(!r.stack)r.stack=o;else if(o){const a=o.indexOf(`
`),l=a===-1?-1:o.indexOf(`
`,a+1),c=l===-1?"":o.slice(l+1);String(r.stack).endsWith(c)||(r.stack+=`
`+o)}}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=hn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Fi.assertOptions(r,{silentJSONParsing:xe.transitional(xe.boolean),forcedJSONParsing:xe.transitional(xe.boolean),clarifyTimeoutError:xe.transitional(xe.boolean),legacyInterceptorReqResOrdering:xe.transitional(xe.boolean),advertiseZstdAcceptEncoding:xe.transitional(xe.boolean),validateStatusUndefinedResolves:xe.transitional(xe.boolean)},!1),i!=null&&(y.isFunction(i)?n.paramsSerializer={serialize:i}:Fi.assertOptions(i,{encode:xe.function,serialize:xe.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Fi.assertOptions(n,{baseUrl:xe.spelling("baseURL"),withXsrfToken:xe.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&y.merge(o.common,o[n.method]);o&&y.forEach(["delete","get","head","post","put","patch","query","common"],w=>{delete o[w]}),n.headers=we.concat(a,o);const l=[];let c=!0;this.interceptors.request.forEach(function(j){if(typeof j.runWhen=="function"&&j.runWhen(n)===!1)return;c=c&&j.synchronous;const S=n.transitional||gl;S&&S.legacyInterceptorReqResOrdering?l.unshift(j.fulfilled,j.rejected):l.push(j.fulfilled,j.rejected)});const u=[];this.interceptors.response.forEach(function(j){u.push(j.fulfilled,j.rejected)});let m,p=0,h;if(!c){const w=[ya.bind(this),void 0];for(w.unshift(...l),w.push(...u),h=w.length,m=Promise.resolve(n);p<h;)m=m.then(w[p++],w[p++]);return m}h=l.length;let x=n;for(;p<h;){const w=l[p++],j=l[p++];try{x=w?w(x):x}catch(S){if(!j){m=Promise.reject(S);break}try{const d=j.call(this,S);y.isThenable(d)&&(m=Promise.resolve(d).then(()=>ya.call(this,x)))}catch(d){m=Promise.reject(d)}break}}if(!m)try{m=ya.call(this,x)}catch(w){m=Promise.reject(w)}for(p=0,h=u.length;p<h;)m=m.then(u[p++],u[p++]);return m}getUri(t){t=hn(this.defaults,t);const n=nf(t.baseURL,t.url,t.allowAbsoluteUrls,t);return Xp(n,t.params,t.paramsSerializer)}};y.forEach(["delete","get","head","options"],function(t){sn.prototype[t]=function(n,r){return this.request(hn(r||{},{method:t,url:n,data:r&&y.hasOwnProp(r,"data")?r.data:void 0}))}});y.forEach(["post","put","patch","query"],function(t){function n(r){return function(o,a,l){return this.request(hn(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}sn.prototype[t]=n(),t!=="query"&&(sn.prototype[t+"Form"]=n(!0))});let ix=class lf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new ri(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new lf(function(i){t=i}),cancel:t}}};function ox(e){return function(n){return e.apply(null,n)}}function ax(e){return y.isObject(e)&&e.isAxiosError===!0}const ys={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ys).forEach(([e,t])=>{ys[t]=e});function cf(e){const t=new sn(e),n=Bp(sn.prototype.request,t);return y.extend(n,sn.prototype,t,{allOwnKeys:!0}),y.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return cf(hn(e,i))},n}const ne=cf(ni);ne.Axios=sn;ne.CanceledError=ri;ne.CancelToken=ix;ne.isCancel=ef;ne.VERSION=xl;ne.toFormData=zo;ne.AxiosError=E;ne.Cancel=ne.CanceledError;ne.all=function(t){return Promise.all(t)};ne.spread=ox;ne.isAxiosError=ax;ne.mergeConfig=hn;ne.AxiosHeaders=we;ne.formToJSON=e=>Zp(y.isHTMLForm(e)?new FormData(e):e);ne.getAdapter=sf.getAdapter;ne.HttpStatusCode=ys;ne.default=ne;const{Axios:Kx,AxiosError:Jx,CanceledError:Xx,isCancel:Yx,CancelToken:Zx,VERSION:ev,all:tv,Cancel:nv,isAxiosError:rv,spread:iv,toFormData:ov,AxiosHeaders:av,HttpStatusCode:sv,formToJSON:lv,getAdapter:cv,mergeConfig:uv,create:dv}=ne,sx="https://canonlawguild-backend.onrender.com/",Jn=ne.create({baseURL:sx,headers:{"Content-Type":"application/json",Accept:"application/json"},timeout:1e4});function Bo(e){e?Jn.defaults.headers.common.Authorization=`Token ${e}`:delete Jn.defaults.headers.common.Authorization}function lu(){const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,o]=b.useState(null),[a,l]=b.useState(""),[c,u]=b.useState("All");b.useEffect(()=>{const p=localStorage.getItem("cl_token");p&&Bo(p);async function h(){var x,w;try{r(!0),o(null);const j=await Jn.get("publications/");Array.isArray(j.data)?t(j.data):o("Received invalid structural response payload from the data repository.")}catch(j){console.error("Database collection transmission failure:",j),o(((w=(x=j.response)==null?void 0:x.data)==null?void 0:w.message)||"Unable to securely establish a connection with the database repository server.")}finally{r(!1)}}h()},[]);const m=e.filter(p=>{var d,f,g;const h=((d=p.title)==null?void 0:d.toLowerCase().includes(a.toLowerCase()))||!1,x=((f=p.author)==null?void 0:f.toLowerCase().includes(a.toLowerCase()))||!1,w=((g=p.abstract)==null?void 0:g.toLowerCase().includes(a.toLowerCase()))||!1,j=h||x||w,S=c==="All"||p.category===c;return j&&S});return s.jsxs("div",{className:"container mt-md",style:{fontFamily:"system-ui, sans-serif",paddingBottom:"60px"},children:[s.jsx("div",{className:"section__heading",style:{borderBottom:"2px solid #e2e8f0",paddingBottom:"12px",marginBottom:"24px"},children:s.jsx("h2",{children:"Research & Publications Archive"})}),s.jsx("p",{className:"text-muted",style:{fontSize:"1.05rem",marginBottom:"30px",maxWidth:"800px"},children:"Streaming institutional legal commentary, peer-reviewed dissertations, and official jurisprudence direct from the Canon Law repository database."}),i&&s.jsxs("div",{style:{backgroundColor:"#fff5f5",color:"#c53030",padding:"16px",borderRadius:"6px",border:"1px solid #fed7d7",marginBottom:"20px",fontWeight:"500"},children:["⚠️ Connection Alert: ",i]}),s.jsxs("div",{className:"filters-panel",style:Se.filterBar,children:[s.jsx("div",{className:"search-box-wrapper",style:{flexGrow:1},children:s.jsx("input",{type:"text",placeholder:"Query database items by title, author, keywords...",value:a,onChange:p=>l(p.target.value),style:Se.searchInput,disabled:!!i})}),s.jsx("div",{className:"tabs-group",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["All","Jurisprudence","Commentary","Dissertations"].map(p=>s.jsx("button",{type:"button",onClick:()=>u(p),disabled:!!i,style:{...Se.tabButton,backgroundColor:c===p?"#1a202c":"#edf2f7",color:c===p?"#ffffff":"#4a5568",opacity:i?.5:1},children:p},p))})]}),n?s.jsxs("div",{style:Se.loadingWrapper,children:[s.jsx("div",{style:Se.skeletonCard,children:s.jsx("p",{style:{padding:"20px",color:"#718096"},children:"Querying index directories from backend relational database..."})}),s.jsx("div",{style:Se.skeletonCard})]}):s.jsx(s.Fragment,{children:m.length===0&&!i?s.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#718096",border:"1px dashed #cbd5e0",borderRadius:"8px"},children:"No current document records reside inside this database partition collection index."}):s.jsx("div",{className:"grid mt-md",style:Se.stackGrid,children:m.map(p=>s.jsxs("div",{className:"card",style:Se.publicationCard,children:[s.jsxs("div",{style:Se.cardHeader,children:[s.jsx("span",{style:Se.categoryBadge,children:p.category||"General Document"}),s.jsxs("span",{className:"meta",style:{color:"#718096",fontSize:"0.85rem"},children:["Published Date: ",p.published_at?new Date(p.published_at).toLocaleDateString():"Draft Status"]})]}),s.jsx("h3",{className:"title",style:Se.documentTitle,children:p.title}),s.jsxs("div",{style:Se.authorLine,children:["Attributed Scholar: ",s.jsx("strong",{children:p.author||"Anonymous / Unassigned Registry"})]}),s.jsx("p",{style:Se.abstractText,children:p.abstract||"No structural abstract summary synopsis index column supplied inside this document record framework row cell."}),s.jsx("div",{style:Se.actionBlock,children:s.jsx("a",{href:`http://127.0.0.1:8000/api/publications/${p.id}/download/`,target:"_blank",rel:"noopener noreferrer",style:{...Se.downloadBtn,textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:"📥 Download PDF"})})]},p.id))})})]})}const Se={filterBar:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"16px",alignItems:"center",marginBottom:"24px",backgroundColor:"#f7fafc",padding:"16px",borderRadius:"8px",border:"1px solid #e2e8f0"},searchInput:{width:"100%",padding:"10px 16px",fontSize:"15px",border:"1px solid #cbd5e0",borderRadius:"6px",backgroundColor:"#ffffff",outline:"none"},tabButton:{padding:"8px 16px",fontSize:"14px",fontWeight:"500",border:"none",borderRadius:"6px",cursor:"pointer",transition:"all 0.2s ease"},loadingWrapper:{display:"flex",flexDirection:"column",gap:"16px"},skeletonCard:{minHeight:"100px",backgroundColor:"#edf2f7",borderRadius:"8px",border:"1px solid #e2e8f0"},stackGrid:{display:"flex",flexDirection:"column",gap:"20px"},publicationCard:{padding:"24px",border:"1px solid #e2e8f0",borderRadius:"8px",backgroundColor:"#ffffff",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},cardHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},categoryBadge:{fontSize:"12px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.05em",color:"#2b6cb0",backgroundColor:"#ebf8ff",padding:"4px 10px",borderRadius:"4px"},documentTitle:{fontSize:"22px",fontWeight:"700",color:"#1a202c",margin:"0 0 8px 0"},authorLine:{fontSize:"14px",color:"#4a5568",marginBottom:"12px"},abstractText:{fontSize:"15px",color:"#718096",lineHeight:"1.6",marginBottom:"20px"},actionBlock:{display:"flex",gap:"12px"},downloadBtn:{fontSize:"14px",fontWeight:"600",backgroundColor:"#edf2f7",color:"#2d3748",padding:"10px 20px",borderRadius:"6px",border:"1px solid #cbd5e0",cursor:"pointer",transition:"all 0.2s"}};function lx(){return s.jsxs("div",{className:"container mt-md join-page",children:[s.jsx("div",{className:"breadcrumbs"}),s.jsx("div",{className:"join-banner",children:s.jsxs("div",{className:"join-banner-copy",children:[s.jsx("p",{children:"Membership"}),s.jsx("h2",{children:"Join the Sodality"})]})}),s.jsxs("form",{className:"join-form card",children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{children:[s.jsx("h4",{children:"Your details"}),s.jsx("p",{children:"Please complete the following fields."})]})}),s.jsxs("div",{className:"row-two",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["First name ",s.jsx("span",{className:"text-muted",children:"*"})]}),s.jsx("input",{className:"input-field",name:"first_name",required:!0,placeholder:"First name"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["Last name ",s.jsx("span",{className:"text-muted",children:"*"})]}),s.jsx("input",{className:"input-field",name:"last_name",required:!0,placeholder:"Last name"})]})]}),s.jsxs("div",{className:"row-two",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["Date of birth ",s.jsx("span",{className:"text-muted",children:"*"})]}),s.jsx("input",{type:"date",className:"input-field",name:"dob",required:!0})]}),s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("label",{className:"form-label",children:["Email address ",s.jsx("span",{className:"text-muted",children:"*"})]}),s.jsx("input",{type:"email",className:"input-field",name:"email",required:!0,placeholder:"Email address"})]})]}),s.jsxs("div",{className:"row-two",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["Address line one ",s.jsx("span",{className:"text-muted",children:"*"})]}),s.jsx("input",{className:"input-field",name:"address1",required:!0,placeholder:"Address line one"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Address line two"}),s.jsx("input",{className:"input-field",name:"address2",placeholder:"Address line two"})]})]}),s.jsxs("div",{className:"row-two",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Address line three"}),s.jsx("input",{className:"input-field",name:"address3",placeholder:"Address line three"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["City ",s.jsx("span",{className:"text-muted",children:"*"})]}),s.jsx("input",{className:"input-field",name:"city",required:!0,placeholder:"City"})]})]}),s.jsxs("div",{className:"row-two",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Postcode"}),s.jsx("input",{className:"input-field",name:"postcode",placeholder:"Postcode"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:["Country ",s.jsx("span",{className:"text-muted",children:"*"})]}),s.jsxs("select",{className:"input-field",name:"country",required:!0,children:[s.jsx("option",{value:"",children:"Select a country"}),s.jsx("option",{children:"Uganda"}),s.jsx("option",{children:"Kenya"}),s.jsx("option",{children:"Tanzania"}),s.jsx("option",{children:"Rwanda"}),s.jsx("option",{children:"United Kingdom"}),s.jsx("option",{children:"United States of America"}),s.jsx("option",{children:"Australia"}),s.jsx("option",{children:"Canada"}),s.jsx("option",{children:"Germany"}),s.jsx("option",{children:"France"}),s.jsx("option",{children:"India"}),s.jsx("option",{children:"Italy"}),s.jsx("option",{children:"Spain"}),s.jsx("option",{children:"Netherlands"}),s.jsx("option",{children:"Sweden"}),s.jsx("option",{children:"Norway"}),s.jsx("option",{children:"Denmark"}),s.jsx("option",{children:"Finland"}),s.jsx("option",{children:"Japan"}),s.jsx("option",{children:"China"}),s.jsx("option",{children:"New Zealand"})]})]})]}),s.jsx("div",{className:"row-two",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{className:"form-label",children:"Job title"}),s.jsx("input",{className:"input-field",name:"job_title",placeholder:"Job title"}),s.jsx("label",{className:"password-set",children:"Set Password"}),s.jsx("input",{className:"password-input",name:"password",placeholder:"password"}),s.jsx("label",{className:"password-set",children:"Confirm Password"}),s.jsx("input",{className:"password-input",name:"confirm password",placeholder:"confirm password"})]})}),s.jsx("div",{className:"row-two",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{className:"form-label",children:"If you are a new member of the Society, what attracted you to join the Society?"}),s.jsx("textarea",{className:"input-field textarea-field",name:"join_reason",rows:5,placeholder:"Tell us what attracted you..."})]})}),s.jsxs("section",{className:"card consent-box",children:[s.jsx("h4",{children:"Contact consent"}),s.jsx("p",{children:"We would like to use your contact details to communicate with you with news and information about Canon Law Sodality and ways to support us."}),s.jsx("p",{children:"Please choose how you'd like us to contact you:"}),s.jsxs("div",{className:"consent-options",children:[s.jsxs("label",{className:"consent-item",children:[s.jsx("input",{type:"checkbox",name:"consent_email"})," Email"]}),s.jsxs("label",{className:"consent-item",children:[s.jsx("input",{type:"checkbox",name:"consent_post"})," Post"]})]})]}),s.jsx("div",{className:"join-actions",children:s.jsxs("button",{className:"submit-pink",type:"submit",children:[s.jsx("span",{className:"lock"}),s.jsx("span",{children:"SUBMIT"})]})}),s.jsxs("p",{className:"muted login-cta",children:["Already a member? ",s.jsx(re,{to:"/login",className:"login-redirect",children:"Login here."})]})]})]})}function cx(){const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,o]=b.useState(null),[a,l]=b.useState(""),[c,u]=b.useState("All");b.useEffect(()=>{const h=localStorage.getItem("cl_token");h&&Bo(h);async function x(){var w,j;try{r(!0),o(null);const S=await Jn.get("events/");Array.isArray(S.data)?t(S.data):o("Received invalid structural response payload from the data repository.")}catch(S){console.error("Database collection transmission failure:",S),o(((j=(w=S.response)==null?void 0:w.data)==null?void 0:j.message)||"Unable to securely establish a connection with the database repository server.")}finally{r(!1)}}x()},[]);const m=e.filter(h=>{var d,f;const x=((d=h.title)==null?void 0:d.toLowerCase().includes(a.toLowerCase()))||!1,w=((f=h.description)==null?void 0:f.toLowerCase().includes(a.toLowerCase()))||!1,j=x||w,S=c==="All"||h.category===c;return j&&S}),p=h=>h?new Date(h).toLocaleString([],{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"Not Specified";return s.jsxs("div",{className:"container mt-md",style:{fontFamily:"system-ui, sans-serif",paddingBottom:"60px"},children:[s.jsx("div",{className:"section__heading",style:{borderBottom:"2px solid #e2e8f0",paddingBottom:"12px",marginBottom:"24px"},children:s.jsx("h2",{children:"News & Events"})}),s.jsx("p",{className:"text-muted",style:{fontSize:"1.05rem",marginBottom:"30px",maxWidth:"800px"},children:"Streaming institutional legal commentary and announcements direct from the Canon Law repository database."}),i&&s.jsxs("div",{style:{backgroundColor:"#fff5f5",color:"#c53030",padding:"16px",borderRadius:"6px",border:"1px solid #fed7d7",marginBottom:"20px",fontWeight:"500"},children:["⚠️ Connection Alert: ",i]}),s.jsxs("div",{className:"filters-panel",style:$e.filterBar,children:[s.jsx("div",{className:"search-box-wrapper",style:{flexGrow:1},children:s.jsx("input",{type:"text",placeholder:"Search entries by title or description details...",value:a,onChange:h=>l(h.target.value),style:$e.searchInput,disabled:!!i})}),s.jsx("div",{className:"tabs-group",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["All","News","Event","Announcement"].map(h=>s.jsx("button",{type:"button",onClick:()=>u(h),disabled:!!i,style:{...$e.tabButton,backgroundColor:c===h?"#1a202c":"#edf2f7",color:c===h?"#ffffff":"#4a5568",opacity:i?.5:1},children:h},h))})]}),n?s.jsx("div",{style:$e.loadingWrapper,children:s.jsx("div",{style:$e.skeletonCard,children:s.jsx("p",{style:{padding:"20px",color:"#718096",margin:0},children:"Querying database index collections..."})})}):s.jsx(s.Fragment,{children:m.length===0&&!i?s.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#718096",border:"1px dashed #cbd5e0",borderRadius:"8px"},children:"No current news or event records."}):s.jsx("div",{className:"grid mt-md",style:$e.stackGrid,children:m.map(h=>s.jsxs("div",{className:"card",style:$e.eventCard,children:[s.jsxs("div",{style:$e.cardHeader,children:[s.jsx("span",{style:{...$e.categoryBadge,backgroundColor:h.category==="News"?"#ebf8ff":h.category==="Announcement"?"#e2e8f0":"#feebc8",color:h.category==="News"?"#2b6cb0":h.category==="Announcement"?"#4a5568":"#c05621"},children:h.category||"General"}),h.published_at&&s.jsxs("span",{className:"meta",style:{color:"#718096",fontSize:"0.85rem"},children:["📅 Posted: ",new Date(h.published_at).toLocaleDateString()]})]}),s.jsx("h3",{className:"title",style:$e.itemTitle,children:h.title}),s.jsxs("div",{style:$e.dateBlock,children:[s.jsxs("div",{children:["⏱️ ",s.jsx("strong",{children:"Starts:"})," ",p(h.start_date)]}),s.jsxs("div",{children:["🏁 ",s.jsx("strong",{children:"Ends:"})," ",p(h.end_date)]})]}),s.jsx("p",{style:$e.contentText,children:h.description||"No summary overview context index row field supplied inside this row cell."})]},h.id))})})]})}const $e={filterBar:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"16px",alignItems:"center",marginBottom:"24px",backgroundColor:"#f7fafc",padding:"16px",borderRadius:"8px",border:"1px solid #e2e8f0"},searchInput:{width:"100%",padding:"10px 14px",borderRadius:"6px",border:"1px solid #cbd5e0",fontSize:"1rem",outline:"none",boxSizing:"border-box"},tabButton:{padding:"8px 16px",borderRadius:"6px",border:"none",fontWeight:"500",cursor:"pointer",transition:"all 0.2s"},loadingWrapper:{display:"flex",flexDirection:"column",gap:"16px"},skeletonCard:{backgroundColor:"#f7fafc",border:"1px solid #e2e8f0",borderRadius:"8px",height:"80px",display:"flex",alignItems:"center"},stackGrid:{display:"flex",flexDirection:"column",gap:"20px"},eventCard:{backgroundColor:"#ffffff",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"24px",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",gap:"12px"},cardHeader:{display:"flex",justifyContent:"space-between",alignItems:"center"},categoryBadge:{padding:"4px 10px",borderRadius:"4px",fontSize:"0.75rem",fontWeight:"700",textTransform:"uppercase"},itemTitle:{fontSize:"1.4rem",color:"#1a202c",margin:0,fontWeight:"600"},dateBlock:{display:"flex",flexDirection:"column",gap:"4px",padding:"12px 16px",backgroundColor:"#f7fafc",borderRadius:"6px",border:"1px solid #edf2f7",fontSize:"0.9rem",color:"#2d3748"},contentText:{fontSize:"1rem",color:"#4a5568",lineHeight:"1.6",margin:"4px 0 12px 0"}};function xn({title:e,intro:t,sections:n}){return s.jsxs("div",{className:"container mt-md",children:[s.jsx("div",{className:"section__heading",children:s.jsx("h2",{children:e})}),s.jsx("p",{className:"text-muted mt-sm",children:t}),s.jsx("div",{className:"grid mt-md grid--single-column",children:n.map((r,i)=>s.jsxs("section",{className:"card card--accent",children:[s.jsx("h3",{className:"section-subheading",children:r.title}),Array.isArray(r.body)?s.jsx("div",{children:r.body.map((o,a)=>s.jsx("p",{children:o},`${r.title}-${a}`))}):s.jsx("p",{children:r.body}),r.bullets&&s.jsx("ul",{children:r.bullets.map((o,a)=>s.jsx("li",{children:o},`${r.title}-bullet-${a}`))})]},`${e}-${i}`))})]})}function ux(){const e=[{title:"Our Purpose",body:"We exist to promote the proper understanding of ecclesiastical law, support scholarly exchange, and encourage careful reflection on canonical practice in church life."},{title:"What We Stand For",body:["We bring together people who value discipline, justice, and fidelity to the Church’s teaching.","Our work is grounded in sound scholarship, practical guidance, and a shared commitment to service."],bullets:["Canonical study","Public education","Faithful service"]}],t=[{marker:"The Provincial Legacy",title:"Roots in Ugandan Church Order",narrative:"The context of canon law within Uganda evolved alongside the development of the Church of Uganda (Anglican). Following the establishment of native dioceses and the Provincial Constitution, a clear need emerged for local legal experts who could interpret provincial enactments, diocesan regulations, and customary practices in perfect harmony with global Anglican polity."},{marker:"Ecclesial Justice",title:"Bridging Church Canons and Ugandan Civil Law",narrative:"The Sodality was established to bridge the gap between ecclesiastical courts and the secular Ugandan legal system. It provides an elite platform where trained legal jurists, chancellors, and theologians come together to safely navigate matters of church land trusts, clerical discipline, and constitutional reviews under the laws of Uganda."},{marker:"Contemporary Mission",title:"Advancing Leadership and Scholarship across East Africa",narrative:"Today, the Sodality serves as a central hub for canonical development across Uganda and its surrounding regions. By organizing training sessions, workshops, and high-level legal consultations, the guild empowers clergy and lay leaders to make fair, transparent, and legally sound choices that protect diocesan assets and support community life."}];return s.jsxs(s.Fragment,{children:[s.jsx(xn,{title:"Background",intro:"The Canon Law Sodality is rooted in the study, teaching, and practical application of canon law for clergy, jurists, scholars, and lay members who seek clarity and service.",sections:e}),s.jsxs("div",{id:"background-isolated-theme",className:"container mt-lg bg-section",children:[s.jsxs("div",{className:"bg-header-divider",children:[s.jsx("span",{className:"bg-cross",children:"✠"}),s.jsx("h3",{className:"bg-heading",children:"The Ugandan Context & History"}),s.jsx("span",{className:"bg-cross",children:"✠"})]}),s.jsx("div",{className:"bg-grid",children:t.map((n,r)=>s.jsxs("div",{className:"bg-card",children:[s.jsxs("div",{className:"bg-card-header",children:[s.jsx("span",{className:"bg-tag",children:n.marker}),s.jsx("h4",{className:"bg-card-title",children:n.title})]}),s.jsx("p",{className:"bg-card-description",children:n.narrative}),s.jsxs("div",{className:"bg-card-footer",children:[s.jsx("span",{className:"bg-footer-cross",children:"✠"}),s.jsx("span",{className:"bg-footer-text",children:"Canon Law Guild of Uganda"})]})]},r))})]})]})}const dx=`
  #background-isolated-theme.bg-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #background-isolated-theme .bg-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #background-isolated-theme .bg-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #background-isolated-theme .bg-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #background-isolated-theme .bg-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    width: 100% !important;
  }

  #background-isolated-theme .bg-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-left: 4px solid #1a2e40 !important; /* Anglican Navy Accent Line */
    border-radius: 4px !important;
    padding: 1.75rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #background-isolated-theme .bg-card:hover {
    transform: translateX(4px) !important;
    box-shadow: 0 6px 12px rgba(26, 46, 64, 0.06) !important;
    border-left-color: #d4af37 !important; /* Gold highlight shifts accent line on hover */
  }

  #background-isolated-theme .bg-card-header {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.5rem !important;
    margin-bottom: 0.75rem !important;
  }

  #background-isolated-theme .bg-tag {
    align-self: flex-start !important;
    font-size: 0.75rem !important;
    font-weight: bold !important;
    color: #800020 !important; /* Liturgical Burgundy Accent */
    background: #f4eee1 !important; /* Secondary dark parchment shadow container */
    padding: 0.25rem 0.6rem !important;
    border-radius: 4px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #e2d9c8 !important;
  }

  #background-isolated-theme .bg-card-title {
    font-size: 1.3rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #background-isolated-theme .bg-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1.25rem 0 !important;
  }

  #background-isolated-theme .bg-card-footer {
    display: flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
    background: #f4eee1 !important;
    padding: 0.4rem 0.8rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold side tab accent */
    align-self: flex-start !important;
    display: inline-flex !important;
  }

  #background-isolated-theme .bg-footer-cross {
    color: #800020 !important;
    font-size: 0.85rem !important;
  }

  #background-isolated-theme .bg-footer-text {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(dx)),document.head.appendChild(e)}function px(){const e=[{title:"Foundational Vision",body:"The founder’s inspiration was to cultivate a community where canonical understanding could be studied seriously and applied with humility and care."},{title:"Legacy",body:"That vision continues through our programs, publications, and fellowship today."}],t=[{name:"The Rev. Canon Dr. Emmanuel Musoke",role:"Visionary & Primary Convener",contribution:"Conceived the initial blueprint for the Guild to anchor canonical scholarship within East Africa. He brought together legal experts and church leaders to create a formal guild dedicated to ecclesiastical rule of law.",imageText:"Portrait Placeholder"},{name:"Justice Justice Elizabeth Namboki",role:"Co-Founder & Canonical Jurist",contribution:"Drafted the collaborative operational constitution for the guild, meticulously bridging the complex relationship between internal Anglican Church canons and contemporary Ugandan civil law statutes.",imageText:"Portrait Placeholder"}];return s.jsxs(s.Fragment,{children:[s.jsx(xn,{title:"Founder",intro:"The Guild was shaped by a vision of scholarship and pastoral care, bringing canon law into conversation with the life of the Church.",sections:e}),s.jsxs("div",{id:"founder-profile-isolated-theme",className:"container mt-lg founder-profile-section",children:[s.jsxs("div",{className:"founder-profile-header-divider",children:[s.jsx("span",{className:"founder-profile-cross",children:"✠"}),s.jsx("h3",{className:"founder-profile-heading",children:"The Founding Council"}),s.jsx("span",{className:"founder-profile-cross",children:"✠"})]}),s.jsx("div",{className:"founder-profile-grid",children:t.map((n,r)=>s.jsxs("div",{className:"founder-profile-card",children:[s.jsx("div",{className:"founder-portrait-column",children:s.jsxs("div",{className:"founder-portrait-box",children:[s.jsx("span",{className:"founder-portrait-seal",children:"✠"}),s.jsx("p",{className:"founder-portrait-text",children:n.imageText})]})}),s.jsxs("div",{className:"founder-details-column",children:[s.jsx("span",{className:"founder-role-badge",children:n.role}),s.jsx("h4",{className:"founder-name-heading",children:n.name}),s.jsx("p",{className:"founder-contribution-text",children:n.contribution}),s.jsxs("div",{className:"founder-profile-footer",children:[s.jsx("span",{className:"founder-footer-cross",children:"✠"}),s.jsx("span",{className:"founder-footer-label",children:"Fidelity • Wisdom • Service"})]})]})]},r))})]})]})}const fx=`
  #founder-profile-isolated-theme.founder-profile-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #founder-profile-isolated-theme .founder-profile-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 3rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #founder-profile-isolated-theme .founder-profile-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #founder-profile-isolated-theme .founder-profile-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #founder-profile-isolated-theme .founder-profile-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2.5rem !important;
    max-width: 950px !important;
    margin: 0 auto !important;
  }

  #founder-profile-isolated-theme .founder-profile-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-top: 4px solid #800020 !important; /* Episcopal Burgundy Top Border Accent */
    border-radius: 4px !important;
    padding: 2rem !important;
    display: flex !important;
    flex-direction: row !important;
    gap: 2rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #founder-profile-isolated-theme .founder-profile-card:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 16px rgba(128, 0, 32, 0.06) !important;
    border-top-color: #d4af37 !important; /* Shifts toward liturgical gold on hover */
  }

  /* Responsive layout collapse for tablets and mobile devices */
  @media (max-width: 768px) {
    #founder-profile-isolated-theme .founder-profile-card {
      flex-direction: column !important;
      gap: 1.5rem !important;
      padding: 1.5rem !important;
    }
    #founder-profile-isolated-theme .founder-portrait-column {
      width: 100% !important;
      display: flex !important;
      justify-content: center !important;
    }
  }

  #founder-profile-isolated-theme .founder-portrait-column {
    width: 180px !important;
    flex-shrink: 0 !important;
  }

  #founder-profile-isolated-theme .founder-portrait-box {
    width: 180px !important;
    height: 220px !important;
    background: #f4eee1 !important; /* Darker parchment backdrop */
    border: 1px dashed #e2d9c8 !important;
    border-radius: 4px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
  }

  #founder-profile-isolated-theme .founder-portrait-seal {
    color: #e2d9c8 !important;
    font-size: 3rem !important;
    line-height: 1 !important;
    margin-bottom: 0.5rem !important;
  }

  #founder-profile-isolated-theme .founder-portrait-text {
    font-size: 0.8rem !important;
    color: #5c4033 !important;
    font-weight: 500 !important;
    margin: 0 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }

  #founder-profile-isolated-theme .founder-details-column {
    flex-grow: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  #founder-profile-isolated-theme .founder-role-badge {
    align-self: flex-start !important;
    font-size: 0.75rem !important;
    font-weight: bold !important;
    color: #800020 !important; /* Liturgical Burgundy text accent */
    background: #f4eee1 !important;
    padding: 0.25rem 0.6rem !important;
    border-radius: 12px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #b8cbd9 !important;
    margin-bottom: 0.5rem !important;
  }

  #founder-profile-isolated-theme .founder-name-heading {
    font-size: 1.4rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    margin: 0 0 0.75rem 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #founder-profile-isolated-theme .founder-contribution-text {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1.25rem 0 !important;
  }

  #founder-profile-isolated-theme .founder-profile-footer {
    display: flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
    border-top: 1px dashed #e2d9c8 !important;
    padding-top: 0.75rem !important;
    width: 100% !important;
  }

  #founder-profile-isolated-theme .founder-footer-cross {
    color: #800020 !important;
    font-size: 0.85rem !important;
  }

  #founder-profile-isolated-theme .founder-footer-label {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(fx)),document.head.appendChild(e)}function mx(){const e=[{title:"Structure",body:["Leadership includes elected officers, advisors, and committees that help guide the Guild’s work.","The structure is designed to balance continuity, accountability, and participation."]}],t=[{image:"",rank:"The Episcopal Protector",title:"Presidential Oversight & Spiritual Patronage",duties:"Typically held by a senior Bishop or Archbishop within the Province. The Episcopal Protector ensures that all canonical updates, resolutions, and theological publications remain in full alignment with the Provincial Constitution and historic Anglican doctrine."},{rank:"The Warden / Convener",title:"Executive Direction & Synodal Coordination",duties:"An appointed senior clergyman or canonical academic who manages the daily operations of the Sodality. The Convener sets administrative agendas, schedules workshops, and ensures that research tasks meet the pastoral needs of dioceses."},{image:"",rank:"The Chancellor / Legal Assessor",title:"Jurisprudence & Inter-Jurisdictional Relations",duties:"A qualified legal jurist who advises the guild on the complex relationship between internal church laws and civil court statutes. The Chancellor reviews administrative decisions and ensures complete transparent procedural justice."},{image:"",rank:"The Council of Canonical Consultors",title:"Scholarly Review & Research Committees",duties:"An elected body of clergy, chancellors, and lay scholars who draft advisory opinions on complicated church property, trust, or disciplinary matters. They form specialized committees to handle public education and constitutional reviews."}];return s.jsxs(s.Fragment,{children:[s.jsx(xn,{title:"Leadership Structure",intro:"The Guild is guided by a leadership structure that supports scholarship, communication, and coordinated ministry.",sections:e}),s.jsxs("div",{id:"governance-isolated-theme",className:"container mt-lg gov-section",children:[s.jsxs("div",{className:"gov-header-divider",children:[s.jsx("span",{className:"gov-cross",children:"✠"}),s.jsx("h3",{className:"gov-heading",children:"Ecclesiastical Governance"}),s.jsx("span",{className:"gov-cross",children:"✠"})]}),s.jsx("div",{className:"gov-grid",children:t.map((n,r)=>s.jsxs("div",{className:"gov-card",children:[s.jsxs("div",{className:"gov-card-header",children:[s.jsx("span",{className:"gov-rank-badge",children:n.rank}),s.jsx("h4",{className:"gov-card-title",children:n.title})]}),s.jsx("p",{className:"gov-card-description",children:n.duties}),s.jsxs("div",{className:"gov-card-footer",children:[s.jsx("span",{className:"gov-footer-cross",children:"✠"}),s.jsx("span",{className:"gov-footer-text",children:"Decently and in Order — 1 Cor 14:40"})]})]},r))})]})]})}const hx=`
  #governance-isolated-theme.gov-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #governance-isolated-theme .gov-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #governance-isolated-theme .gov-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #governance-isolated-theme .gov-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #governance-isolated-theme .gov-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    width: 100% !important;
  }

  #governance-isolated-theme .gov-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-left: 4px solid #800020 !important; /* Episcopal Burgundy Accent Line */
    border-radius: 4px !important;
    padding: 1.75rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #governance-isolated-theme .gov-card:hover {
    transform: translateX(4px) !important;
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.06) !important;
    border-left-color: #d4af37 !important; /* Shifts toward gold on mouse-over */
  }

  #governance-isolated-theme .gov-card-header {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.4rem !important;
    margin-bottom: 0.75rem !important;
  }

  #governance-isolated-theme .gov-rank-badge {
    align-self: flex-start !important;
    font-size: 0.75rem !important;
    font-weight: bold !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    background: #e6edf2 !important; /* Soft liturgical blue-white */
    padding: 0.25rem 0.6rem !important;
    border-radius: 4px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #b8cbd9 !important;
  }

  #governance-isolated-theme .gov-card-title {
    font-size: 1.3rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #governance-isolated-theme .gov-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1.25rem 0 !important;
  }

  #governance-isolated-theme .gov-card-footer {
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
    background: #f4eee1 !important; /* Darker parchment contrast space */
    padding: 0.4rem 0.8rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold side indicator line */
  }

  #governance-isolated-theme .gov-footer-cross {
    color: #800020 !important;
    font-size: 0.85rem !important;
  }

  #governance-isolated-theme .gov-footer-text {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(hx)),document.head.appendChild(e)}function gx(){const e=[{title:"Our Commitment",body:["We uphold the authority of Church law as a means of ordering ecclesial life in fidelity to the Gospel.","Our approach is scholarly, pastoral, and attentive to the needs of the faithful."]}],t=[{article:"Article I",title:"The Holy Scriptures",affirmation:"We affirm the Holy Scriptures of the Old and New Testaments as the Word of God, containing all things necessary to salvation, and as being the rule and ultimate standard of Christian faith and canonical discipline."},{article:"Article II",title:"The Historic Creeds",affirmation:"We uphold the Apostles' Creed as the Baptismal Symbol, and the Nicene Creed as the sufficient statement of the Christian faith. These historic formulations guide our theological boundaries and canonical interpretations."},{article:"Article III",title:"The Sacraments of the Church",affirmation:"We recognize the two Sacraments ordained by Christ Himself—Holy Baptism and the Holy Eucharist—celebrated with unfailing use of Christ's words of institution, and of the elements ordained by Him. Our canons serve to guard and rightly administer these sacred mysteries."},{article:"Article IV",title:"The Historic Episcopate",affirmation:"We maintain the Historic Episcopate, locally adapted in the methods of its administration to the varying needs of the nations and peoples called of God into the Unity of His Church, as a vital bond of order and ecclesial communion."}];return s.jsxs(s.Fragment,{children:[s.jsx(xn,{title:"Doctrinal Statement",intro:"The Canon Law Guild of Uganda is committed to the Church’s teaching and to the careful application of law in a manner that serves communion and charity.",sections:e}),s.jsxs("div",{id:"doctrinal-isolated-theme",className:"container mt-lg doctrine-section",children:[s.jsxs("div",{className:"doctrine-header-divider",children:[s.jsx("span",{className:"doctrine-cross",children:"✠"}),s.jsx("h3",{className:"doctrine-heading",children:"Articles of Affirmation"}),s.jsx("span",{className:"doctrine-cross",children:"✠"})]}),s.jsx("div",{className:"doctrine-grid",children:t.map((n,r)=>s.jsxs("div",{className:"doctrine-card",children:[s.jsxs("div",{className:"doctrine-card-header",children:[s.jsx("span",{className:"doctrine-article-badge",children:n.article}),s.jsx("h4",{className:"doctrine-card-title",children:n.title})]}),s.jsx("p",{className:"doctrine-card-description",children:n.affirmation}),s.jsxs("div",{className:"doctrine-card-footer",children:[s.jsx("span",{className:"doctrine-footer-cross",children:"✠"}),s.jsx("span",{className:"doctrine-footer-text",children:"In Essentials Unity, In Non-Essentials Liberty"})]})]},r))})]})]})}const yx=`
  #doctrinal-isolated-theme.doctrine-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #doctrinal-isolated-theme .doctrine-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #doctrinal-isolated-theme .doctrine-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #doctrinal-isolated-theme .doctrine-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #doctrinal-isolated-theme .doctrine-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    width: 100% !important;
  }

  #doctrinal-isolated-theme .doctrine-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-left: 4px solid #800020 !important; /* Episcopal Burgundy Accent Line */
    border-radius: 4px !important;
    padding: 1.75rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #doctrinal-isolated-theme .doctrine-card:hover {
    transform: translateX(4px) !important;
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.06) !important;
    border-left-color: #d4af37 !important; /* Shifts toward gold on mouse-over */
  }

  #doctrinal-isolated-theme .doctrine-card-header {
    display: flex !important;
    align-items: center !important;
    gap: 1rem !important;
    margin-bottom: 0.75rem !important;
  }

  #doctrinal-isolated-theme .doctrine-article-badge {
    font-size: 0.75rem !important;
    font-weight: bold !important;
    color: #800020 !important; /* Liturgical Burgundy */
    background: #f4eee1 !important; /* Soft parchment background */
    padding: 0.25rem 0.6rem !important;
    border-radius: 4px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #e2d9c8 !important;
  }

  #doctrinal-isolated-theme .doctrine-card-title {
    font-size: 1.3rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #doctrinal-isolated-theme .doctrine-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1.25rem 0 !important;
  }

  #doctrinal-isolated-theme .doctrine-card-footer {
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.4rem !important;
    background: #f4eee1 !important; /* Darker parchment contrast space */
    padding: 0.4rem 0.8rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold side indicator line */
  }

  #doctrinal-isolated-theme .doctrine-footer-cross {
    color: #800020 !important;
    font-size: 0.85rem !important;
  }

  #doctrinal-isolated-theme .doctrine-footer-text {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(yx)),document.head.appendChild(e)}function xx(){const e=[{title:"Why It Matters",body:"A strong theological grasp of canon law helps ministers and scholars interpret laws in a way that remains faithful and pastorally wise."}],t=[{numeral:"I",subtitle:"The Lex Christi and Ecclesial Order",content:"Canon law is not merely a collection of secular administrative rules, but a visible extension of the Law of Christ (Lex Christi). It translates eternal gospel imperatives into orderly community life, ensuring that institutional justice reflects divine truth."},{numeral:"II",subtitle:"The Sacramental Framework",content:"In the Anglican tradition, canonical provisions protect and structure the sacraments. Law establishes clear governance for holy baptism, the celebration of the Eucharist, and holy orders, guaranteeing that sacred rites are preserved with reverence."},{numeral:"III",subtitle:"The Principles of Pax and Concordia",content:"The theological goal of ecclesial discipline is to maintain peace (pax) and structural harmony (concordia) among the people of God. Law acts as a shield against division, creating safe spaces for communal growth, spiritual healing, and authentic Christian fellowship."},{numeral:"IV",subtitle:"Epikeia & Pastoral Wisdom",content:'Anglican jurisprudence values equity or "epikeia"—the understanding that strict legal texts must occasionally bow to pastoral necessity. This ensures that the application of canon law is always guided by the supreme command of pastoral care and the salvation of souls.'}];return s.jsxs(s.Fragment,{children:[s.jsx(xn,{title:"Canon Law Theology",intro:"Canon law theology explores the relationship between Church law, doctrine, and the life of the people of God.",sections:e}),s.jsxs("div",{id:"theology-isolated-theme",className:"container mt-lg theology-section",children:[s.jsxs("div",{className:"theology-header-divider",children:[s.jsx("span",{className:"theology-cross",children:"✠"}),s.jsx("h3",{className:"theology-heading",children:"Theological Foundations"}),s.jsx("span",{className:"theology-cross",children:"✠"})]}),s.jsx("div",{className:"theology-grid",children:t.map((n,r)=>s.jsxs("div",{className:"theology-card",children:[s.jsxs("div",{className:"theology-card-header",children:[s.jsx("span",{className:"theology-numeral",children:n.numeral}),s.jsx("h4",{className:"theology-card-title",children:n.subtitle})]}),s.jsx("p",{className:"theology-card-description",children:n.content}),s.jsxs("div",{className:"theology-card-footer",children:[s.jsx("span",{className:"theology-footer-decoration",children:"✠"}),s.jsx("span",{className:"theology-footer-text",children:"Lex Orandi, Lex Credendi, Lex Agendi"})]})]},r))})]})]})}const vx=`
  #theology-isolated-theme.theology-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #theology-isolated-theme .theology-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #theology-isolated-theme .theology-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #theology-isolated-theme .theology-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #theology-isolated-theme .theology-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important; /* Responsive Grid Layout */
    gap: 2rem !important;
    width: 100% !important;
  }

  #theology-isolated-theme .theology-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-top: 4px solid #800020 !important; /* Episcopal Burgundy Border Accent */
    border-radius: 4px !important;
    padding: 2rem !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #theology-isolated-theme .theology-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 8px 16px rgba(128, 0, 32, 0.08) !important;
    border-color: #d4af37 !important; /* Shifts toward liturgical gold on hover */
  }

  #theology-isolated-theme .theology-card-header {
    display: flex !important;
    align-items: center !important;
    gap: 1rem !important;
    margin-bottom: 1rem !important;
  }

  #theology-isolated-theme .theology-numeral {
    font-size: 1.3rem !important;
    font-weight: bold !important;
    color: #800020 !important; /* Liturgical Burgundy Roman Numeral */
    background: #f4eee1 !important;
    min-width: 2.5rem !important;
    height: 2.5rem !important;
    border-radius: 50% !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    border: 1px solid #e2d9c8 !important;
  }

  #theology-isolated-theme .theology-card-title {
    font-size: 1.25rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #theology-isolated-theme .theology-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin-bottom: 1.5rem !important;
    flex-grow: 1 !important;
  }

  #theology-isolated-theme .theology-card-footer {
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    background: #f4eee1 !important; /* Darker parchment contrast footer */
    padding: 0.5rem 1rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Gold accent line */
  }

  #theology-isolated-theme .theology-footer-decoration {
    color: #800020 !important;
    font-size: 0.9rem !important;
  }

  #theology-isolated-theme .theology-footer-text {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(vx)),document.head.appendChild(e)}function wx(){const e=[{title:"A Brief Overview",body:["From the early Church to the modern era, canon law has evolved as the Church has grown in complexity and mission.","Its history reveals both continuity in doctrine and development in practice."]}],t=[{era:"Early Church to First Millennium",title:"The Conciliar Foundations",description:"The roots of canon law trace back to the Apostolic age and the early Ecumenical Councils (such as Nicaea, Constantinople, and Chalcedon). Early discipline was shaped by local councils and regional epistles, establishing the foundational structures of the episcopate, liturgical order, and communal boundaries."},{era:"The 12th Century Medieval Golden Age",title:"The Decretum Gratiani and Codification",description:'In the 1140s, a monk named Gratian compiled the "Concordia Discordantium Canonum" (Agreement of Clashing Canons), famously known as the Decretum. This monumental text used scholastic philosophy to harmonize conflicting regional laws. It established canon law as an independent academic and judicial discipline throughout Western Europe.'},{era:"The 16th Century Reformation",title:"The English Reformation and Henrician Statutes",description:"With the Submission of the Clergy (1532) and the Act of Supremacy (1534), the Church of England broke with papal jurisdiction. King Henry VIII ordered that existing medieval canon laws remained valid only if they did not oppose the laws of the realm or the royal prerogative. This created a unique blend of ancient Catholic jurisprudence and English common law."},{era:"1603 to the Present Day",title:"The Canons of 1603 and the Global Communion",description:"The Canons of 1603 provided the primary legal framework for post-Reformation Anglicanism. As the British Empire expanded, local provinces created independent, self-governing national churches. Today, the global Anglican Communion is held together not by a single central legal authority, but by a shared constitutional tradition, mutual respect, and provincial canon laws."}];return s.jsxs(s.Fragment,{children:[s.jsx(xn,{title:"History of Canon Law",intro:"The history of canon law is a story of development, adaptation, and continuity across the life of the Church.",sections:e}),s.jsxs("div",{id:"history-isolated-theme",className:"container mt-lg history-section",children:[s.jsxs("div",{className:"history-header-divider",children:[s.jsx("span",{className:"history-cross",children:"✠"}),s.jsx("h3",{className:"history-heading",children:"Historical Timeline"}),s.jsx("span",{className:"history-cross",children:"✠"})]}),s.jsx("div",{className:"history-timeline",children:t.map((n,r)=>s.jsxs("div",{className:"history-timeline-item",children:[s.jsx("div",{className:"history-era-column",children:s.jsx("span",{className:"history-era-tag",children:n.era})}),s.jsx("div",{className:"history-content-column",children:s.jsxs("div",{className:"history-card",children:[s.jsxs("h4",{className:"history-card-title",children:[s.jsx("span",{className:"history-card-cross",children:"✠"})," ",n.title]}),s.jsx("p",{className:"history-card-description",children:n.description})]})})]},r))})]})]})}const jx=`
  #history-isolated-theme.history-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #history-isolated-theme .history-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 3rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #history-isolated-theme .history-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #history-isolated-theme .history-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #history-isolated-theme .history-timeline {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    position: relative !important;
    max-width: 900px !important;
    margin: 0 auto !important;
  }

  #history-isolated-theme .history-timeline-item {
    display: flex !important;
    flex-direction: row !important;
    gap: 2rem !important;
    width: 100% !important;
  }

  /* Responsive layout adjustment for smaller devices */
  @media (max-width: 768px) {
    #history-isolated-theme .history-timeline-item {
      flex-direction: column !important;
      gap: 0.5rem !important;
    }
    #history-isolated-theme .history-era-column {
      text-align: left !important;
      width: 100% !important;
    }
  }

  #history-isolated-theme .history-era-column {
    width: 25% !important;
    text-align: right !important;
    padding-top: 1rem !important;
    flex-shrink: 0 !important;
  }

  #history-isolated-theme .history-era-tag {
    font-size: 0.85rem !important;
    font-weight: bold !important;
    color: #800020 !important; /* Liturgical Burgundy text accent */
    background: #f4eee1 !important; /* Soft dark parchment background */
    padding: 0.4rem 0.8rem !important;
    border-radius: 4px !important;
    border-right: 3px solid #d4af37 !important; /* Gold side marker */
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    display: inline-block !important;
  }

  #history-isolated-theme .history-content-column {
    flex-grow: 1 !important;
  }

  #history-isolated-theme .history-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-left: 4px solid #1a2e40 !important; /* Majestic Anglican Navy Accent Line */
    border-radius: 4px !important;
    padding: 1.75rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #history-isolated-theme .history-card:hover {
    transform: translateX(4px) !important;
    box-shadow: 0 6px 12px rgba(26, 46, 64, 0.06) !important;
    border-left-color: #d4af37 !important; /* Shifts toward liturgical gold on hover */
  }

  #history-isolated-theme .history-card-cross {
    color: #800020 !important;
    margin-right: 0.25rem !important;
  }

  #history-isolated-theme .history-card-title {
    font-size: 1.25rem !important;
    color: #1a2e40 !important;
    margin-top: 0 !important;
    margin-bottom: 0.75rem !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #history-isolated-theme .history-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 !important;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(jx)),document.head.appendChild(e)}function Sx(){const[e,t]=b.useState([]),[n,r]=b.useState(!0);b.useEffect(()=>{fetch("decided-cases/").then(o=>o.json()).then(o=>{t(o),r(!1)}).catch(o=>{console.error("Error fetching decided cases:",o),r(!1)})},[]);const i=[{title:"Case Study Focus",body:"These resources are useful for scholars, clergy, and anyone wishing to understand the practical implications of canonical decision-making."}];return s.jsxs(s.Fragment,{children:[s.jsx(xn,{title:"Decided Cases",intro:"Our case discussions highlight how canonical principles are applied in real-world situations.",sections:i}),n&&s.jsx("p",{className:"text-muted church-loading text-center",children:"⌛ Reviewing historical decrees and case archives..."}),!n&&e.length>0&&s.jsxs("div",{className:"container mt-lg church-section",children:[s.jsxs("div",{className:"church-header-divider",children:[s.jsx("span",{className:"church-cross",children:"✠"}),s.jsx("h3",{className:"church-heading",children:"Official Decided Cases"}),s.jsx("span",{className:"church-cross",children:"✠"})]}),s.jsx("div",{className:"church-grid",children:e.map(o=>s.jsxs("div",{className:"church-card",children:[s.jsx("div",{className:"church-card-badge",children:"Decree"}),s.jsx("h4",{className:"church-card-title",children:o.title}),s.jsx("p",{className:"church-card-description",children:o.summary}),s.jsxs("div",{className:"church-card-footer",children:[s.jsx("span",{className:"church-icon",children:"📜"}),s.jsxs("div",{children:[s.jsx("span",{className:"church-label",children:"Decree Date:"}),s.jsx("span",{className:"church-date",children:new Date(o.case_date).toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"long",day:"numeric"})})]})]})]},o.id))})]})]})}const bx=`
  .church-section {
    margin-top: 3rem;
    margin-bottom: 4rem;
    font-family: 'Georgia', 'Times New Roman', serif;
  }

  .church-header-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #d4af37; /* Liturgical Gold */
    padding-bottom: 0.5rem;
  }

  .church-heading {
    font-size: 1.75rem;
    color: #1a2e40; /* Majestic Anglican Navy */
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }

  .church-cross {
    color: #800020; /* Liturgical Burgundy */
    font-size: 1.5rem;
  }

  .church-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .church-card {
    background: #fdfbf7; /* Soft Parchment White */
    border: 1px solid #e2d9c8;
    border-top: 4px solid #800020; /* Episcopal Burgundy Border Accent */
    border-radius: 4px;
    padding: 1.5rem;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .church-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.08);
  }

  .church-card-badge {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background-color: #e6edf2;
    color: #1a2e40;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.25rem 0.6rem;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid #b8cbd9;
  }

  .church-card-title {
    font-size: 1.35rem;
    color: #1a2e40;
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-weight: 600;
    padding-right: 6rem; /* Avoid text bumping into badge */
  }

  .church-card-description {
    color: #4a4a4a;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
    white-space: pre-wrap; /* Keeps paragraphs from your database readable */
  }

  .church-card-footer {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    background: #f4eee1; /* Darker parchment contrast */
    padding: 0.75rem 1rem;
    border-radius: 4px;
    border-left: 3px solid #d4af37; /* Gold accent */
  }

  .church-icon {
    font-size: 1.1rem;
    margin-top: 2px;
  }

  .church-label {
    font-weight: bold;
    color: #5c4033;
    font-size: 0.85rem;
    text-transform: uppercase;
    margin-right: 0.5rem;
    display: inline-block;
  }

  .church-date {
    font-size: 0.9rem;
    color: #1a2e40;
    font-weight: 500;
  }

  .church-arrow {
    color: #800020;
    font-weight: bold;
    padding: 0 0.25rem;
  }

  .church-loading {
    font-size: 1.1rem;
    font-style: italic;
    color: #800020;
    padding: 2rem;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(bx)),document.head.appendChild(e)}function uf({title:e,intro:t,content:n}){return s.jsxs("div",{className:"container mt-md",children:[s.jsx("div",{className:"section__heading",children:s.jsx("h2",{children:e})}),s.jsx("p",{className:"text-muted mt-sm",children:t}),s.jsx("div",{className:"grid mt-md grid--single-column",children:s.jsx("section",{className:"card card--accent",children:n.map((r,i)=>s.jsx("p",{children:r},`${e}-${i}`))})})]})}function Nx(){const e=["“The Lord will guide you always; he will satisfy your needs in a sun-scorched land...” (Isaiah 58:11).","“Let all that you do be done in love.” (1 Corinthians 16:14).","“Be strong and take heart, all you who hope in the Lord.” (Psalm 31:24).","These scriptures encourage wisdom, service, hope, and faithful stewardship in our shared vocation."],t=[{reference:"Micah 6:8",verse:"“He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.”",application:"The core foundational pillar of canon law: balancing strict structural justice with profound pastoral mercy."},{reference:"Ezra 7:10",verse:"“For Ezra had devoted himself to the study and observance of the Law of the Lord, and to teaching its decrees and laws in Israel.”",application:"The academic and structural vocation of the Sodality: dedication to rigorous legal research, personal fidelity, and public instruction."},{reference:"Colossians 3:17",verse:"“And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.”",application:"The ultimate objective of institutional law: keeping administrative processes focused purely on the glorification of Christ."}];return s.jsxs(s.Fragment,{children:[s.jsx(uf,{title:"Inspirational Scriptures",intro:"Selected scriptures that inspire the mission of the Canon Law Sodality.",content:e}),s.jsxs("div",{id:"scripture-isolated-theme",className:"container mt-lg scripture-section",children:[s.jsxs("div",{className:"scripture-header-divider",children:[s.jsx("span",{className:"scripture-cross",children:"✠"}),s.jsx("h3",{className:"scripture-heading",children:"Biblical Foundations of Justice & Order"}),s.jsx("span",{className:"scripture-cross",children:"✠"})]}),s.jsx("div",{className:"scripture-grid",children:t.map((n,r)=>s.jsxs("div",{className:"scripture-card",children:[s.jsxs("div",{className:"scripture-card-header",children:[s.jsx("span",{className:"scripture-seal",children:"✠"}),s.jsx("h4",{className:"scripture-card-title",children:n.reference})]}),s.jsx("blockquote",{className:"scripture-verse-text",children:n.verse}),s.jsxs("div",{className:"scripture-application-box",children:[s.jsx("span",{className:"scripture-label",children:"Canonical Focus:"}),s.jsx("p",{className:"scripture-description",children:n.application})]}),s.jsx("div",{className:"scripture-card-footer",children:s.jsx("span",{className:"scripture-footer-text",children:"Soli Deo Gloria"})})]},r))})]})]})}const kx=`
  #scripture-isolated-theme.scripture-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #scripture-isolated-theme .scripture-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #scripture-isolated-theme .scripture-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #scripture-isolated-theme .scripture-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #scripture-isolated-theme .scripture-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important; /* Responsive Grid System */
    gap: 2rem !important;
    width: 100% !important;
  }

  #scripture-isolated-theme .scripture-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-top: 4px solid #800020 !important; /* Episcopal Burgundy Border Accent */
    border-radius: 4px !important;
    padding: 2rem !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #scripture-isolated-theme .scripture-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 8px 16px rgba(128, 0, 32, 0.08) !important;
    border-color: #d4af37 !important; /* Transitions toward gold on hover */
  }

  #scripture-isolated-theme .scripture-card-header {
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    margin-bottom: 1rem !important;
    border-bottom: 1px dashed #e2d9c8 !important;
    padding-bottom: 0.5rem !important;
  }

  #scripture-isolated-theme .scripture-seal {
    color: #800020 !important;
    font-size: 1.1rem !important;
  }

  #scripture-isolated-theme .scripture-card-title {
    font-size: 1.3rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
  }

  #scripture-isolated-theme .scripture-verse-text {
    font-style: italic !important;
    color: #1a2e40 !important;
    font-size: 1.1rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1.5rem 0 !important;
    padding-left: 0.75rem !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold blockquote marker */
  }

  #scripture-isolated-theme .scripture-application-box {
    background: #f4eee1 !important; /* Darker parchment contrast space */
    padding: 0.75rem 1rem !important;
    border-radius: 4px !important;
    margin-bottom: 1.5rem !important;
    flex-grow: 1 !important;
  }

  #scripture-isolated-theme .scripture-label {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    display: block !important;
    margin-bottom: 0.25rem !important;
  }

  #scripture-isolated-theme .scripture-description {
    color: #4a4a4a !important;
    font-size: 0.9rem !important;
    line-height: 1.5 !important;
    margin: 0 !important;
  }

  #scripture-isolated-theme .scripture-card-footer {
    display: inline-flex !important;
    align-items: center !important;
    background: #e6edf2 !important; /* Soft liturgical white-blue */
    padding: 0.3rem 0.6rem !important;
    border-radius: 4px !important;
    border: 1px solid #b8cbd9 !important;
    align-self: flex-start !important;
  }

  #scripture-isolated-theme .scripture-footer-text {
    font-weight: bold !important;
    color: #1a2e40 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(kx)),document.head.appendChild(e)}function Cx(){const e=["For general enquiries, please use the contact details provided on the main website or reach out through the official contact page.","If you have a question about the Guild’s mission, membership, or publications, the leadership team will be glad to assist you."],t=[{name:"The Rev. Canon Dr. Emmanuel Musoke",position:"Primary Convener & Warden of the Guild",responsibility:"Responsible for setting the long-term scholarly and theological agenda of the Sodality. He oversees the drafting of canonical guides, coordinates provincial clerical training programs, and acts as the chief liaison to the House of Bishops.",email:"convener@canonlawsodality.org",imageText:"Warden Portrait Placeholder"},{name:"Justice Elizabeth Namboki",position:"Chancellor & Principal Legal Assessor",responsibility:"Responsible for judicial review, inter-jurisdictional research, and constitutional alignments. She manages the research desks that draft official advisory opinions regarding the intersection of internal church canons and civil statutes.",email:"chancellor@canonlawsodality.org",imageText:"Chancellor Portrait Placeholder"}];return s.jsxs(s.Fragment,{children:[s.jsx(uf,{title:"Contact Founder",intro:"A simple channel for reaching out to the founder or leadership desk for enquiries and support.",content:e}),s.jsxs("div",{id:"contact-leader-isolated-theme",className:"container mt-lg contact-leader-section",children:[s.jsxs("div",{className:"contact-leader-header-divider",children:[s.jsx("span",{className:"contact-leader-cross",children:"✠"}),s.jsx("h3",{className:"contact-leader-heading",children:"Official Leadership Desks"}),s.jsx("span",{className:"contact-leader-cross",children:"✠"})]}),s.jsx("div",{className:"contact-leader-grid mt-md",children:t.map((n,r)=>s.jsxs("div",{className:"contact-leader-card",children:[s.jsx("div",{className:"contact-leader-portrait-column",children:s.jsxs("div",{className:"contact-leader-portrait-box",children:[s.jsx("span",{className:"contact-leader-portrait-seal",children:"✠"}),s.jsx("p",{className:"contact-leader-portrait-text",children:n.imageText})]})}),s.jsxs("div",{className:"contact-leader-details-column",children:[s.jsx("span",{className:"contact-leader-rank-badge",children:n.position}),s.jsx("h4",{className:"contact-leader-name-heading",children:n.name}),s.jsxs("div",{className:"contact-leader-responsibility-box",children:[s.jsx("span",{className:"contact-leader-responsibility-label",children:"Core Responsibility:"}),s.jsx("p",{className:"contact-leader-responsibility-text",children:n.responsibility})]}),s.jsx("div",{className:"contact-leader-footer",children:s.jsxs("a",{href:`mailto:${n.email}`,className:"contact-leader-button",children:[s.jsx("span",{className:"contact-leader-icon",children:"✉"})," Direct Official Enquiry"]})})]})]},r))})]})]})}const Ex=`
  #contact-leader-isolated-theme.contact-leader-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #contact-leader-isolated-theme .contact-leader-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 3rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #contact-leader-isolated-theme .contact-leader-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #contact-leader-isolated-theme .contact-leader-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 2.5rem !important;
    max-width: 950px !important;
    margin: 0 auto !important;
  }

  #contact-leader-isolated-theme .contact-leader-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-top: 4px solid #800020 !important; /* Episcopal Burgundy Border Accent */
    border-radius: 4px !important;
    padding: 2rem !important;
    display: flex !important;
    flex-direction: row !important;
    gap: 2rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #contact-leader-isolated-theme .contact-leader-card:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 16px rgba(128, 0, 32, 0.06) !important;
    border-top-color: #d4af37 !important; /* Shifts toward liturgical gold on hover */
  }

  /* Responsive layout breakdown parameters for portable screens */
  @media (max-width: 768px) {
    #contact-leader-isolated-theme .contact-leader-card {
      flex-direction: column !important;
      gap: 1.5rem !important;
      padding: 1.5rem !important;
    }
    #contact-leader-isolated-theme .contact-leader-portrait-column {
      width: 100% !important;
      display: flex !important;
      justify-content: center !important;
    }
  }

  #contact-leader-isolated-theme .contact-leader-portrait-column {
    width: 180px !important;
    flex-shrink: 0 !important;
  }

  #contact-leader-isolated-theme .contact-leader-portrait-box {
    width: 180px !important;
    height: 220px !important;
    background: #f4eee1 !important; /* Secondary darker parchment tone */
    border: 1px dashed #e2d9c8 !important;
    border-radius: 4px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
  }

  #contact-leader-isolated-theme .contact-leader-portrait-seal {
    color: #e2d9c8 !important;
    font-size: 3rem !important;
    line-height: 1 !important;
    margin-bottom: 0.5rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-portrait-text {
    font-size: 0.8rem !important;
    color: #5c4033 !important;
    font-weight: 500 !important;
    margin: 0 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    text-align: center !important;
    padding: 0 0.5rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-details-column {
    flex-grow: 1 !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  #contact-leader-isolated-theme .contact-leader-rank-badge {
    align-self: flex-start !important;
    font-size: 0.75rem !important;
    font-weight: bold !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy text accent */
    background: #e6edf2 !important; /* Liturgical soft blue tint */
    padding: 0.25rem 0.6rem !important;
    border-radius: 12px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #b8cbd9 !important;
    margin-bottom: 0.5rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-name-heading {
    font-size: 1.4rem !important;
    color: #1a2e40 !important;
    margin: 0 0 1rem 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #contact-leader-isolated-theme .contact-leader-responsibility-box {
    background: #f4eee1 !important;
    padding: 1rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold identifier line */
    margin-bottom: 1.25rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-responsibility-label {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.8rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    display: block !important;
    margin-bottom: 0.25rem !important;
  }

  #contact-leader-isolated-theme .contact-leader-responsibility-text {
    color: #333333 !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 !important;
  }

  #contact-leader-isolated-theme .contact-leader-footer {
    display: flex !important;
    width: 100% !important;
  }

  #contact-leader-isolated-theme .contact-leader-button {
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    background: #800020 !important; /* Episcopal Burgundy Action Fill */
    color: #ffffff !important;
    text-decoration: none !important;
    font-size: 0.85rem !important;
    font-weight: bold !important;
    padding: 0.6rem 1.2rem !important;
    border-radius: 4px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    transition: background-color 0.2s ease !important;
  
  }

  #contact-leader-isolated-theme .contact-leader-button:hover {
    background: #1a2e40 !important; 
    /* Shifts toward Anglican Navy on click hover */
    color: #ffffff !important;
  }
  #contact-leader-isolated-theme .contact-leader-icon {
    font-size: 1rem !important;
  }
  `;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(Ex)),document.head.appendChild(e)}function Tx(){const e=[{title:"The Principle of Ecclesial Communion (Communio)",description:"Canon law is fundamentally at the service of communion. It regulates the relationships between the bishop, clergy, and laity, ensuring that everyone remains united in doctrine, sacraments, and governance while preventing arbitrary uses of power."},{title:"The Principle of Canonical Equity (Aequitas Canonica)",description:"Unlike rigid civil law, canonical equity introduces mercy and Christian charity into legal interpretation. It reminds church leaders that laws are tools for spiritual healing, allowing flexibility or dispensation when applying a rule too strictly would cause pastoral harm."},{title:"The Principle of Due Process and Ecclesial Justice",description:"Justice within the church guarantees that the rights of all members of the faithful are vigorously protected. This principle requires transparency, fair hearings, and unbiased tribunals whenever administrative decisions, discipline, or disputes arise."},{title:"The Subordination to Divine and Natural Law",description:"Human ecclesiastical laws are always subject to higher legal realities: Divine Law (Scripture) and Natural Law (moral truth). Any church canon or administrative regulation that directly contradicts these primary foundations is considered invalid."},{title:"Salus Animarum: The Salvation of Souls",description:"The absolute supreme rule of all canon law is stated in traditional jurisprudence as 'Salus animarum suprema lex'—the salvation of souls must be the ultimate law. Every administrative process, election, and disciplinary action exists solely to advance this spiritual mission."}];return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"container mt-md",children:[s.jsx("div",{className:"section__heading",children:s.jsx("h2",{children:"Principles of Canon Law"})}),s.jsx("p",{className:"text-muted mt-sm",children:"A concise introduction to the guiding principles that shape canonical discipline and ecclesial order."}),s.jsx("div",{className:"grid mt-md grid--single-column",children:s.jsxs("section",{className:"card card--accent",children:[s.jsx("h3",{className:"section-subheading",children:"Core Principles"}),s.jsx("p",{children:"Canon law rests on principles of communion, justice, charity, and the proper ordering of the Church’s life."}),s.jsxs("ul",{children:[s.jsx("li",{children:"Respect for the dignity of the faithful"}),s.jsx("li",{children:"Care for the common good of the Church"}),s.jsx("li",{children:"Faithfulness to divine and ecclesial law"}),s.jsx("li",{children:"Balanced pastoral application"})]})]})})]}),s.jsxs("div",{id:"principles-isolated-theme",className:"container mt-lg principles-section",children:[s.jsxs("div",{className:"principles-header-divider",children:[s.jsx("span",{className:"principles-cross",children:"✠"}),s.jsx("h3",{className:"principles-heading",children:"Theological & Legal Pillars"}),s.jsx("span",{className:"principles-cross",children:"✠"})]}),s.jsx("div",{className:"principles-grid",children:e.map((t,n)=>s.jsxs("div",{className:"principles-card",children:[s.jsxs("div",{className:"principles-card-header",children:[s.jsx("span",{className:"principles-seal",children:"✠"}),s.jsx("h4",{className:"principles-card-title",children:t.title})]}),s.jsx("p",{className:"principles-card-description",children:t.description}),s.jsx("div",{className:"principles-card-footer",children:s.jsx("span",{className:"principles-footer-text",children:"Ecclesial Order & Discipline"})})]},n))})]})]})}const Px=`
  #principles-isolated-theme.principles-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #principles-isolated-theme .principles-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #principles-isolated-theme .principles-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #principles-isolated-theme .principles-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #principles-isolated-theme .principles-grid {
    display: grid !important;
    grid-template-columns: 1fr !important; /* Clean linear reading flow to match original single column spirit */
    gap: 1.5rem !important;
    width: 100% !important;
  }

  #principles-isolated-theme .principles-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-left: 4px solid #800020 !important; /* Episcopal Burgundy Accent Line */
    border-radius: 4px !important;
    padding: 1.75rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #principles-isolated-theme .principles-card:hover {
    transform: translateX(4px) !important;
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.06) !important;
    border-left-color: #d4af37 !important; /* Shifts toward gold on mouse-over */
  }

  #principles-isolated-theme .principles-card-header {
    display: flex !important;
    align-items: center !important;
    gap: 0.75rem !important;
    margin-bottom: 0.75rem !important;
  }

  #principles-isolated-theme .principles-seal {
    color: #800020 !important;
    font-size: 1.2rem !important;
  }

  #principles-isolated-theme .principles-card-title {
    font-size: 1.3rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #principles-isolated-theme .principles-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin: 0 0 1rem 0 !important;
  }

  #principles-isolated-theme .principles-card-footer {
    display: inline-block !important;
    background: #f4eee1 !important; /* Darker parchment contrast container */
    padding: 0.3rem 0.7rem !important;
    border-radius: 4px !important;
    border-left: 2px solid #d4af37 !important; /* Gold accent ticker entry */
  }

  #principles-isolated-theme .principles-footer-text {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(Px)),document.head.appendChild(e)}function df({title:e,intro:t,bullets:n}){return s.jsxs("div",{className:"container mt-md",children:[s.jsx("div",{className:"section__heading",children:s.jsx("h2",{children:e})}),s.jsx("p",{className:"text-muted mt-sm",children:t}),s.jsx("div",{className:"grid mt-md grid--single-column",children:s.jsx("section",{className:"card card--accent",children:s.jsx("ul",{children:n.map((r,i)=>s.jsx("li",{children:r},`${e}-${i}`))})})})]})}function Rx(){const e=["Canonical interpretation and education","Support for clergy, scholars, and pastoral leaders","Promotion of sound practice in ecclesial governance","Encouragement of thoughtful public engagement with canon law"],t=[{icon:"🏛️",title:"Constitutional & Ecclesiastical Governance",description:"Analysis and application of provincial constitutions, diocesan canons, and synodical structures. This focus area ensures that institutional governance remains aligned with historic Anglican polity and legislative frameworks."},{icon:"✝️",title:"Sacramental and Ministry Jurisprudence",description:"Legal provisions governing holy orders, licensing of clergy, pastoral offices, and liturgical discipline. It provides critical boundaries for ministerial execution, safeguarding practices, and clerical responsibilities."},{icon:"📜",title:"Ecclesiastical Courts & Canonical Procedure",description:"Academic and practical guidance regarding judicial trials, faculty systems, and dispute resolution mechanisms. This discipline maintains justice, due process, and order within church tribunals and administrative actions."},{icon:"⛪",title:"Temporal Goods and Property Administration",description:"The management of church trusts, parish properties, historic cathedrals, and temporal resources. This framework navigates the intersection between historic ecclesial customs and contemporary civil property statutes."}];return s.jsxs(s.Fragment,{children:[s.jsx(df,{title:"Areas of Focus",intro:"The Sodality concentrates on key areas that strengthen both scholarship and practical ecclesial service.",bullets:e}),s.jsxs("div",{id:"focus-isolated-theme",className:"container mt-lg focus-section",children:[s.jsxs("div",{className:"focus-header-divider",children:[s.jsx("span",{className:"focus-cross",children:"✠"}),s.jsx("h3",{className:"focus-heading",children:"Core Canonical Disciplines"}),s.jsx("span",{className:"focus-cross",children:"✠"})]}),s.jsx("div",{className:"focus-grid",children:t.map((n,r)=>s.jsxs("div",{className:"focus-card",children:[s.jsxs("div",{className:"focus-card-header",children:[s.jsx("span",{className:"focus-icon-badge",children:n.icon}),s.jsx("h4",{className:"focus-card-title",children:n.title})]}),s.jsx("p",{className:"focus-card-description",children:n.description}),s.jsxs("div",{className:"focus-card-footer",children:[s.jsx("span",{className:"focus-footer-decoration",children:"✠"}),s.jsx("span",{className:"focus-footer-text",children:"Anglican Canonical Tradition"})]})]},r))})]})]})}const _x=`
  #focus-isolated-theme.focus-section {
    margin-top: 4rem !important;
    margin-bottom: 5rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #focus-isolated-theme .focus-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2.5rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #focus-isolated-theme .focus-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
  }

  #focus-isolated-theme .focus-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #focus-isolated-theme .focus-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important; /* Makes it a professional responsive grid */
    gap: 2rem !important;
    width: 100% !important;
  }

  #focus-isolated-theme .focus-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-top: 4px solid #800020 !important; /* Episcopal Burgundy Border Accent */
    border-radius: 4px !important;
    padding: 2rem !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #focus-isolated-theme .focus-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 8px 16px rgba(128, 0, 32, 0.08) !important;
    border-color: #d4af37 !important; /* Shifts outline towards gold on interaction */
  }

  #focus-isolated-theme .focus-card-header {
    display: flex !important;
    align-items: center !important;
    gap: 1rem !important;
    margin-bottom: 1rem !important;
  }

  #focus-isolated-theme .focus-icon-badge {
    font-size: 1.5rem !important;
    background: #f4eee1 !important;
    padding: 0.5rem !important;
    border-radius: 4px !important;
    border: 1px solid #e2d9c8 !important;
    display: inline-flex !important;
  }

  #focus-isolated-theme .focus-card-title {
    font-size: 1.25rem !important;
    color: #1a2e40 !important;
    margin: 0 !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
  }

  #focus-isolated-theme .focus-card-description {
    color: #4a4a4a !important;
    font-size: 0.95rem !important;
    line-height: 1.6 !important;
    margin-bottom: 1.5rem !important;
    flex-grow: 1 !important;
  }

  #focus-isolated-theme .focus-card-footer {
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    background: #f4eee1 !important; /* Darker parchment contrast */
    padding: 0.5rem 1rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Gold accent line */
  }

  #focus-isolated-theme .focus-footer-decoration {
    color: #800020 !important;
    font-size: 0.9rem !important;
  }

  #focus-isolated-theme .focus-footer-text {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.75rem !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(_x)),document.head.appendChild(e)}function Lx(){const[e,t]=b.useState([]),[n,r]=b.useState(!0);return b.useEffect(()=>{fetch("advisory-opinions/").then(i=>i.json()).then(i=>{const o=[...i].sort((a,l)=>new Date(l.issued_at).getTime()-new Date(a.issued_at).getTime());t(o),r(!1)}).catch(i=>{console.error("Error fetching advisory opinions:",i),r(!1)})},[]),s.jsxs(s.Fragment,{children:[s.jsx(df,{title:"Advisory Opinions",intro:"Advisory opinions provide helpful guidance on questions that arise in canonical practice and church administration.",bullets:["Clarification of procedural questions","Guidance on church governance matters","Support for responsible decision-making","Practical insight for leaders and communities"]}),n&&s.jsx("p",{className:"text-muted opinion-loading text-center",children:"Adil ⌛ Reviewing official canonical guidance records..."}),!n&&e.length>0&&s.jsxs("div",{id:"opinion-isolated-theme",className:"container mt-lg opinion-section",children:[s.jsxs("div",{className:"opinion-header-divider",children:[s.jsx("span",{className:"opinion-cross",children:"✠"}),s.jsx("h3",{className:"opinion-heading",children:"Official Guidance Archives"}),s.jsx("span",{className:"opinion-cross",children:"✠"})]}),s.jsx("div",{className:"opinion-grid",children:e.map(i=>s.jsxs("div",{className:"opinion-card",children:[s.jsx("div",{className:"opinion-card-badge",children:"Guidance"}),s.jsx("h4",{className:"opinion-card-title",children:i.title}),s.jsx("p",{className:"opinion-card-description",children:i.summary}),s.jsxs("div",{className:"opinion-card-footer",children:[s.jsx("span",{className:"opinion-icon",children:"✍️"}),s.jsxs("div",{children:[s.jsx("span",{className:"opinion-label",children:"Issued At:"}),s.jsx("span",{className:"opinion-date",children:new Date(i.issued_at).toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"long",day:"numeric"})})]})]})]},i.id))})]})]})}const Ox=`
  #opinion-isolated-theme.opinion-section {
    margin-top: 3rem !important;
    margin-bottom: 4rem !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
    display: block !important;
  }

  #opinion-isolated-theme .opinion-header-divider {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 1rem !important;
    margin-bottom: 2rem !important;
    border-bottom: 2px solid #d4af37 !important; /* Liturgical Gold */
    padding-bottom: 0.5rem !important;
  }

  #opinion-isolated-theme .opinion-heading {
    font-size: 1.75rem !important;
    color: #1a2e40 !important; /* Majestic Anglican Navy */
    font-weight: 700 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    margin: 0 !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
  }

  #opinion-isolated-theme .opinion-cross {
    color: #800020 !important; /* Liturgical Burgundy */
    font-size: 1.5rem !important;
    display: inline-block !important;
  }

  #opinion-isolated-theme .opinion-grid {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
    width: 100% !important;
  }

  #opinion-isolated-theme .opinion-card {
    background: #fdfbf7 !important; /* Soft Parchment White */
    border: 1px solid #e2d9c8 !important;
    border-top: 4px solid #800020 !important; /* Episcopal Burgundy Border Accent */
    border-radius: 4px !important;
    padding: 1.5rem !important;
    position: relative !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03) !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
    text-align: left !important;
  }

  #opinion-isolated-theme .opinion-card:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.08) !important;
  }

  #opinion-isolated-theme .opinion-card-badge {
    position: absolute !important;
    top: 1rem !important;
    right: 1.5rem !important;
    background-color: #f4eee1 !important; /* Dark Parchment */
    color: #800020 !important; /* Burgundy text accent */
    font-size: 0.75rem !important;
    font-weight: bold !important;
    padding: 0.25rem 0.6rem !important;
    border-radius: 12px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
    border: 1px solid #d4af37 !important; /* Liturgical Gold Border */
    display: inline-block !important;
  }

  #opinion-isolated-theme .opinion-card-title {
    font-size: 1.35rem !important;
    color: #1a2e40 !important;
    margin-top: 0 !important;
    margin-bottom: 0.75rem !important;
    font-weight: 600 !important;
    padding-right: 7rem !important; /* Protect header layout space */
    font-family: 'Georgia', 'Times New Roman', serif !important;
    line-height: 1.3 !important;
  }

  #opinion-isolated-theme .opinion-card-description {
    color: #4a4a4a !important;
    font-size: 1rem !important;
    line-height: 1.6 !important;
    margin-bottom: 1.25rem !important;
    white-space: pre-wrap !important;
    font-family: 'Georgia', 'Times New Roman', serif !important;
  }

  #opinion-isolated-theme .opinion-card-footer {
    display: flex !important;
    align-items: flex-start !important;
    gap: 0.5rem !important;
    background: #f4eee1 !important; /* Darker parchment contrast */
    padding: 0.75rem 1rem !important;
    border-radius: 4px !important;
    border-left: 3px solid #d4af37 !important; /* Liturgical Gold accent line */
    border-top: none !important;
    border-right: none !important;
    border-bottom: none !important;
  }

  #opinion-isolated-theme .opinion-icon {
    font-size: 1.1rem !important;
    margin-top: 2px !important;
    display: inline-block !important;
  }

  #opinion-isolated-theme .opinion-label {
    font-weight: bold !important;
    color: #5c4033 !important;
    font-size: 0.85rem !important;
    text-transform: uppercase !important;
    margin-right: 0.5rem !important;
    display: inline-block !important;
  }

  #opinion-isolated-theme .opinion-date {
    font-size: 0.9rem !important;
    color: #1a2e40 !important;
    font-weight: 500 !important;
    display: inline-block !important;
  }

  .opinion-loading {
    font-size: 1.1rem !important;
    font-style: italic !important;
    color: #800020 !important;
    padding: 2rem !important;
    font-family: 'Georgia', serif !important;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(Ox)),document.head.appendChild(e)}function wl({title:e,intro:t,bullets:n}){return s.jsxs("div",{className:"container mt-md",children:[s.jsx("div",{className:"section__heading",children:s.jsx("h2",{children:e})}),s.jsx("p",{className:"text-muted mt-sm",children:t}),s.jsx("div",{className:"grid mt-md grid--single-column",children:s.jsx("section",{className:"card card--accent",children:s.jsx("ul",{children:n.map((r,i)=>s.jsx("li",{children:r},`${e}-${i}`))})})})]})}function jl({categoryType:e}){const[t,n]=b.useState([]),[r,i]=b.useState(!0);return b.useEffect(()=>{fetch("trainings/").then(o=>o.json()).then(o=>{const a=o.filter(l=>l.category.toLowerCase()===e.toLowerCase());n(a),i(!1)}).catch(o=>{console.error("Error fetching live trainings:",o),i(!1)})},[e]),r?s.jsx("p",{className:"text-muted church-loading text-center",children:"⌛ Reading upcoming church records..."}):t.length===0?null:s.jsxs("div",{className:"container mt-lg church-section",children:[s.jsxs("div",{className:"church-header-divider",children:[s.jsx("span",{className:"church-cross",children:"✠"}),s.jsx("h3",{className:"church-heading",children:"Official Upcoming Sessions"}),s.jsx("span",{className:"church-cross",children:"✠"})]}),s.jsx("div",{className:"church-grid",children:t.map(o=>s.jsxs("div",{className:"church-card",children:[s.jsx("div",{className:"church-card-badge",children:o.category}),s.jsx("h4",{className:"church-card-title",children:o.title}),s.jsx("p",{className:"church-card-description",children:o.description}),s.jsxs("div",{className:"church-card-footer",children:[s.jsx("span",{className:"church-icon",children:"📅"}),s.jsxs("div",{children:[s.jsx("span",{className:"church-label",children:"Session Term:"}),s.jsxs("span",{className:"church-date",children:[new Date(o.start_date).toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"long",day:"numeric"}),s.jsx("span",{className:"church-arrow",children:" → "}),new Date(o.end_date).toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"long",day:"numeric"})]})]})]})]},o.id))})]})}function Ax(){return s.jsxs(s.Fragment,{children:[s.jsx(wl,{title:"Annual AGM Meetings",intro:"Our yearly general meetings gather organizational leaders to review canonical assessments, milestones, and vote on upcoming initiatives.",bullets:["Review of constitutional bylaws and amendments","Financial audits and updates","Election of executive board members"]}),s.jsx(jl,{categoryType:"agm"})]})}function zx(){return s.jsxs(s.Fragment,{children:[s.jsx(wl,{title:"Workshops",intro:"Intensive practical sessions built around operational case studies and applications of canonical provisions.",bullets:["Practical deep-dives into procedural law","Guided peer reviews and group exercises","Interactive question and answer panels"]}),s.jsx(jl,{categoryType:"Workshop"})]})}function Dx(){return s.jsxs(s.Fragment,{children:[s.jsx(wl,{title:"Conferences",intro:"Conferences bring together scholars, clergy, and members for shared learning and fellowship.",bullets:["Presentations from leading experts","Opportunities for networking and discussion","Focused sessions on current canonical issues","Spaces for reflection and practical application"]}),s.jsx(jl,{categoryType:"Conference"})]})}const Bx=`
  .church-section {
    margin-top: 3rem;
    margin-bottom: 4rem;
    font-family: 'Georgia', 'Times New Roman', serif;
  }

  .church-header-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #d4af37; /* Liturgical Gold */
    padding-bottom: 0.5rem;
  }

  .church-heading {
    font-size: 1.75rem;
    color: #1a2e40; /* Majestic Anglican Navy */
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }

  .church-cross {
    color: #800020; /* Liturgical Burgundy */
    font-size: 1.5rem;
  }

  .church-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .church-card {
    background: #fdfbf7; /* Soft Parchment White */
    border: 1px solid #e2d9c8;
    border-top: 4px solid #800020; /* Episcopal Burgundy Border Accent */
    border-radius: 4px;
    padding: 1.5rem;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .church-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(128, 0, 32, 0.08);
  }

  .church-card-badge {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background-color: #e6edf2;
    color: #1a2e40;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.25rem 0.6rem;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid #b8cbd9;
  }

  .church-card-title {
    font-size: 1.35rem;
    color: #1a2e40;
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-weight: 600;
    padding-right: 6rem; /* Avoid text bumping into badge */
  }

  .church-card-description {
    color: #4a4a4a;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  .church-card-footer {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    background: #f4eee1; /* Darker parchment contrast */
    padding: 0.75rem 1rem;
    border-radius: 4px;
    border-left: 3px solid #d4af37; /* Gold accent */
  }

  .church-icon {
    font-size: 1.1rem;
    margin-top: 2px;
  }

  .church-label {
    font-weight: bold;
    color: #5c4033;
    font-size: 0.85rem;
    text-transform: uppercase;
    margin-right: 0.5rem;
    display: inline-block;
  }

  .church-date {
    font-size: 0.9rem;
    color: #1a2e40;
    font-weight: 500;
  }

  .church-arrow {
    color: #800020;
    font-weight: bold;
    padding: 0 0.25rem;
  }

  .church-loading {
    font-size: 1.1rem;
    font-style: italic;
    color: #800020;
    padding: 2rem;
  }
`;if(typeof document<"u"){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(Bx)),document.head.appendChild(e)}function Fx(){const[e,t]=b.useState("50"),[n,r]=b.useState(""),[i,o]=b.useState(!1),[a,l]=b.useState("card"),c=["25","50","100","250","500"],u=x=>{t(x),r("")},m=x=>{r(x.target.value),t("")},p=()=>n||e,h=x=>{x.preventDefault();const w=p();if(!w||parseFloat(w)<=0){alert("Please select or enter a valid donation amount.");return}alert(`Redirecting to payment gateway...
Amount: $${w}
Type: ${i?"Monthly Recurring":"One-Time"}
Method: ${a}`)};return s.jsxs("div",{className:"container mt-md",style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[s.jsx("div",{className:"section__heading",children:s.jsx("h2",{children:"Donate"})}),s.jsx("p",{className:"text-muted mt-sm",style:{maxWidth:"600px"},children:"Support the Canon Law Guild in its work of scholarship, education, and service."}),s.jsx("div",{className:"grid mt-md",style:{display:"flex",justifyContent:"center",width:"100%"},children:s.jsxs("section",{className:"card",style:{borderLeft:"none",paddingLeft:"2rem",maxWidth:"500px",width:"100%",textAlign:"left"},children:[s.jsx("p",{children:"Your generosity directly funds academic publications, public education initiatives, annual conferences, and pastoral outreach that deepen the understanding of canon law."}),s.jsxs("form",{onSubmit:h,className:"mt-md",children:[s.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"1.5rem"},children:[s.jsx("button",{type:"button",className:`btn ${i?"btn-secondary":"btn-primary"}`,onClick:()=>o(!1),style:{flex:1},children:"One-Time"}),s.jsx("button",{type:"button",className:`btn ${i?"btn-primary":"btn-secondary"}`,onClick:()=>o(!0),style:{flex:1},children:"Monthly Gift"})]}),s.jsx("label",{style:{display:"block",fontWeight:"bold",marginBottom:"0.5rem"},children:"Select Amount"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"0.5rem",marginBottom:"1rem"},children:c.map(x=>s.jsxs("button",{type:"button",className:`btn ${e===x?"btn-primary":"btn-secondary"}`,onClick:()=>u(x),style:{padding:"0.5rem 0"},children:["$",x]},x))}),s.jsx("div",{style:{marginBottom:"1.5rem"},children:s.jsx("input",{type:"number",placeholder:"Other Amount ($)",value:n,onChange:m,style:{width:"100%",padding:"0.75rem",borderRadius:"4px",border:"1px solid #ccc",fontSize:"1rem",boxSizing:"border-box"},min:"1"})}),s.jsxs("div",{style:{marginBottom:"1.5rem"},children:[s.jsx("label",{style:{display:"block",fontWeight:"bold",marginBottom:"0.5rem"},children:"Payment Method"}),s.jsxs("select",{value:a,onChange:x=>l(x.target.value),style:{width:"100%",padding:"0.75rem",borderRadius:"4px",border:"1px solid #ccc",fontSize:"1rem",backgroundColor:"#fff",boxSizing:"border-box"},children:[s.jsx("option",{value:"card",children:"Credit / Debit Card"}),s.jsx("option",{value:"paypal",children:"PayPal"}),s.jsx("option",{value:"bank",children:"Direct Bank Transfer (ACH)"})]})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary",style:{width:"100%",padding:"0.75rem"},children:["Donate $",p()||"0"," ",i?"/ Month":""]})]}),s.jsx("div",{className:"mt-md",style:{borderTop:"1px solid #eee",paddingTop:"1.5rem"},children:s.jsxs("p",{className:"text-muted",style:{fontSize:"0.9rem"},children:["Prefer to contribute offline? Please reach out to the Guild leadership team through our"," ",s.jsx(re,{to:"/contact",style:{color:"inherit",textDecoration:"underline"},children:"contact page"})," or through official church channels."]})})]})})]})}function Ix(){return s.jsxs("div",{className:"container mt-md",children:[s.jsx("div",{className:"section__heading",children:s.jsx("h2",{children:"Contact"})}),s.jsx("p",{className:"text-muted mt-sm",children:"Reach out for enquiries, support, or to connect with the Canon Law Guild leadership."}),s.jsxs("div",{className:"grid mt-md grid--single-column",children:[s.jsxs("section",{className:"card card--accent",children:[s.jsx("p",{children:"If you have questions about membership, publications, conferences, or general support, please get in touch."}),s.jsxs("ul",{children:[s.jsx("li",{children:"General enquiries"}),s.jsx("li",{children:"Membership and participation"}),s.jsx("li",{children:"Donations and sponsorship"}),s.jsx("li",{children:"Publications and events"})]}),s.jsx(re,{to:"/",className:"btn btn-outline mt-sm",children:"Back to Home"})]}),s.jsxs("section",{className:"card contact-details-card",children:[s.jsx("h3",{children:"Get In Touch"}),s.jsx("p",{className:"text-muted",children:"Our leadership team is available to assist you with your questions."}),s.jsxs("ul",{className:"contact-list",children:[s.jsxs("li",{children:[s.jsx("span",{className:"contact-icon",children:"📧"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Email"}),s.jsx("p",{children:" jeremiahkeeya@gmail.com"})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"contact-icon",children:"📞"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Phone"}),s.jsx("p",{children:"+256 772 748739"})]})]}),s.jsxs("li",{children:[s.jsx("span",{className:"contact-icon",children:"🕒"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Office Hours"}),s.jsx("p",{children:"Monday – Friday, 9:00 AM – 5:00 PM EST"})]})]})]})]}),s.jsxs("section",{className:"card address-card",children:[s.jsx("h3",{children:"Our Address"}),s.jsxs("div",{className:"address-grid",children:[s.jsxs("div",{className:"address-block",children:[s.jsx("h4",{children:"📬 Mailing Address"}),s.jsxs("p",{className:"text-muted",children:["Canon Law Guild",s.jsx("br",{}),"P.O. Box 42XX",s.jsx("br",{}),"Kampala, UG."]})]}),s.jsxs("div",{className:"address-block",children:[s.jsx("h4",{children:"📍 Physical Location"}),s.jsxs("p",{className:"text-muted",children:["Catholic University Campus",s.jsx("br",{}),"Namirembe Road",s.jsx("br",{}),"Kampala, UG."]})]})]})]})]}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .contact-details-card, .address-card {
          margin-top: 24px;
        }
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 0 0;
        }
        .contact-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .contact-list li:last-child {
          margin-bottom: 0;
        }
        .contact-icon {
          font-size: 1.2rem;
          margin-right: 12px;
          margin-top: 2px;
        }
        .contact-list strong {
          display: block;
          color: #333;
        }
        .contact-list p {
          margin: 2px 0 0 0;
          color: #666;
        }
        .address-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 16px;
        }
        .address-block h4 {
          margin: 0 0 4px 0;
          font-size: 1rem;
          color: #333;
        }
        .address-block p {
          margin: 0;
          line-height: 1.5;
        }
        @media (min-width: 600px) {
          .address-grid {
            flex-direction: row;
            justify-content: space-between;
          }
          .address-block {
            flex: 1;
          }
        }
      `}})]})}function Mx(){const[e,t]=b.useState(null),n=[{id:"goodwill",title:"Goodwill Membership",price:"$25",period:"per year",description:"A supportive tier for non-practitioners who value the mission of the guild.",benefits:["Digital-only access to our newsletters and law review updates","General admission to public lectures and online webinars","Regular updates on contemporary canonical issues and societal projects"]},{id:"annual",title:"Annual Membership",price:"$120",period:"per year",description:"Our standard tier for active practitioners and professionals within church law.",benefits:["Full access to quarterly canon law journals and opinion archives","Direct invitations to our annual general assembly meetings","Full voting rights in the society assembly and legislative elections","Discounts on regional workshops and continuing education"]},{id:"life",title:"Life Membership",price:"$1,500",period:"one-time payment",description:"The ultimate professional commitment to the study and preservation of Church law.",isPremium:!0,benefits:["Permanent waiver of all future baseline annual society dues","Hardbound print editions of all society publication archives","VIP seating and exclusive invitations to formal dinners at annual conferences","Permanent custom inclusion inside the society registry database"]}];return s.jsxs("div",{className:"membership-container",style:ae.container,children:[s.jsxs("header",{style:ae.header,children:[s.jsx("h1",{style:ae.mainTitle,children:"Canon Law Guild Membership"}),s.jsx("p",{style:ae.subtitle,children:"Welcome to the professional community of canonists, tribunal practitioners, and supporters of ecclesiastical jurisprudence."})]}),s.jsx("div",{className:"tiers-grid",style:ae.grid,children:n.map(r=>s.jsxs("div",{style:{...ae.card,...r.isPremium?ae.premiumCard:{},...e===r.id?ae.selectedCard:{}},onClick:()=>t(r.id),children:[r.isPremium&&s.jsx("div",{style:ae.badge,children:"Highly Esteemed"}),s.jsx("h2",{style:ae.tierTitle,children:r.title}),s.jsx("p",{style:ae.tierDesc,children:r.description}),s.jsxs("div",{style:ae.priceContainer,children:[s.jsx("span",{style:ae.priceText,children:r.price}),s.jsxs("span",{style:ae.periodText,children:[" / ",r.period]})]}),s.jsx("ul",{style:ae.benefitsList,children:r.benefits.map((i,o)=>s.jsxs("li",{style:ae.benefitItem,children:[s.jsx("span",{style:ae.checkmark,children:"✓"})," ",i]},o))}),s.jsxs("button",{style:{...ae.button,...r.isPremium?ae.premiumButton:{}},onClick:i=>{i.stopPropagation(),alert(`Proceeding to checkout for: ${r.title}`)},children:["Select ",r.title.split(" ")[0]]})]},r.id))})]})}const ae={container:{maxWidth:"1200px",margin:"0 auto",padding:"40px 20px",fontFamily:"system-ui, -apple-system, sans-serif",color:"#333"},header:{textAlign:"center",marginBottom:"50px"},mainTitle:{fontSize:"2.5rem",fontWeight:"700",color:"#1a202c",marginBottom:"16px"},subtitle:{fontSize:"1.1rem",color:"#4a5568",maxWidth:"700px",margin:"0 auto",lineHeight:"1.6"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px",alignItems:"start"},card:{backgroundColor:"#ffffff",border:"1px solid #e2e8f0",borderRadius:"12px",padding:"30px",position:"relative",display:"flex",flexDirection:"column",cursor:"pointer",transition:"all 0.2s ease",boxShadow:"0 4px 6px -1px rgba(0,0,0,0.05)"},premiumCard:{borderColor:"#d69e2e",boxShadow:"0 10px 15px -3px rgba(214, 158, 46, 0.1), 0 4px 6px -2px rgba(214, 158, 46, 0.05)"},selectedCard:{borderColor:"#3182ce",borderWidth:"2px"},badge:{position:"absolute",top:"-12px",right:"20px",backgroundColor:"#d69e2e",color:"#fff",fontSize:"0.75rem",fontWeight:"bold",padding:"4px 12px",borderRadius:"9999px",textTransform:"uppercase"},tierTitle:{fontSize:"1.5rem",fontWeight:"600",color:"#2d3748",marginTop:"0",marginBottom:"10px"},tierDesc:{fontSize:"0.95rem",color:"#718096",lineHeight:"1.5",marginBottom:"20px",minHeight:"45px"},priceContainer:{marginBottom:"25px",borderBottom:"1px solid #edf2f7",paddingBottom:"20px"},priceText:{fontSize:"2.25rem",fontWeight:"700",color:"#1a202c"},periodText:{color:"#718096",fontSize:"1rem"},benefitsList:{listStyle:"none",padding:"0",margin:"0 0 30px 0",flexGrow:1},benefitItem:{fontSize:"0.95rem",color:"#4a5568",marginBottom:"12px",lineHeight:"1.4",display:"flex",alignItems:"flex-start"},checkmark:{color:"#38a169",fontWeight:"bold",marginRight:"8px"},button:{backgroundColor:"#3182ce",color:"#fff",border:"none",padding:"12px 24px",borderRadius:"6px",fontWeight:"600",fontSize:"1rem",cursor:"pointer",width:"100%",transition:"background-color 0.15s ease"},premiumButton:{backgroundColor:"#d69e2e"}};function Ux(){const{id:e}=yg(),[t,n]=b.useState(null),[r,i]=b.useState(!0),[o,a]=b.useState(null);return b.useEffect(()=>{async function l(){try{i(!0),a(null);const c=await Jn.get(`publications/${e}/`);n(c.data)}catch(c){console.error("Failed to load publication text rows:",c),a("The requested publication manuscript could not be found inside the active database registry index partition.")}finally{i(!1)}}e&&l()},[e]),r?s.jsx("div",{className:"container mt-md",style:Ye.loadingContainer,children:"Loading dynamic script files from database..."}):o||!t?s.jsxs("div",{className:"container mt-md",style:Ye.errorContainer,children:[s.jsxs("div",{style:Ye.errorText,children:["⚠️ Error: ",o]}),s.jsx(re,{to:"/what-we-do/publications",className:"btn btn-secondary",children:"← Return to Archive"})]}):s.jsxs("div",{className:"container mt-md",style:Ye.pageContainer,children:[s.jsx("div",{style:Ye.backLinkWrapper,children:s.jsx(re,{to:"/what-we-do/publications",style:Ye.backLink,children:"← Back to Publications Archive"})}),s.jsxs("header",{style:Ye.header,children:[s.jsx("span",{style:Ye.categoryBadge,children:t.category||"General Document"}),s.jsx("h1",{style:Ye.title,children:t.title}),s.jsxs("div",{style:Ye.metaLine,children:["Scholar: ",t.author||"Anonymous"," | Registered: ",t.published_at?new Date(t.published_at).toLocaleDateString():"Draft"]})]}),s.jsx("article",{style:Ye.contentBody,children:t.content||"No text content body body payload column exists inside the database index data framework for this record row."})]})}const Ye={loadingContainer:{textAlign:"center",padding:"50px"},errorContainer:{textAlign:"center",padding:"40px"},errorText:{color:"#c53030",marginBottom:"20px",fontWeight:"bold"},pageContainer:{maxWidth:"800px",margin:"0 auto",paddingBottom:"80px"},backLinkWrapper:{marginBottom:"24px"},backLink:{color:"#3182ce",textDecoration:"none",fontWeight:"600"},header:{borderBottom:"2px solid #e2e8f0",paddingBottom:"20px",marginBottom:"30px"},categoryBadge:{backgroundColor:"#ebf8ff",color:"#2b6cb0",fontSize:"0.75rem",fontWeight:"bold",padding:"4px 10px",borderRadius:"9999px",textTransform:"uppercase"},title:{fontSize:"2.5rem",color:"#1a202c",marginTop:"12px",marginBottom:"8px"},metaLine:{color:"#4a5568",fontStyle:"italic"},contentBody:{fontSize:"1.15rem",lineHeight:"1.8",color:"#2d3748",whiteSpace:"pre-line",textAlign:"justify"}};function $x({title:e,intro:t,sections:n}){return s.jsxs("div",{className:"container mt-md",style:{paddingBottom:"60px"},children:[s.jsx("div",{className:"section__heading",style:{borderBottom:"2px solid #e2e8f0",paddingBottom:"12px",marginBottom:"24px"},children:s.jsx("h2",{children:e})}),s.jsx("p",{className:"text-muted",style:{fontSize:"1.05rem",marginBottom:"30px",maxWidth:"800px"},children:t}),s.jsx("div",{className:"grid mt-md grid--single-column",style:{display:"flex",flexDirection:"column",gap:"20px"},children:n.map((r,i)=>s.jsxs("section",{className:"card card--accent",style:{padding:"24px",border:"1px solid #e2e8f0",borderRadius:"8px",backgroundColor:"#ffffff",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[s.jsx("h3",{className:"section-subheading",style:{fontSize:"20px",fontWeight:"700",color:"#2b6cb0",margin:"0 0 12px 0"},children:r.title}),Array.isArray(r.body)?s.jsx("div",{style:{color:"#4a5568",lineHeight:"1.6",fontSize:"15px"},children:r.body.map((o,a)=>s.jsx("p",{style:{marginBottom:"12px"},children:o},`${r.title}-${a}`))}):s.jsx("p",{style:{color:"#4a5568",lineHeight:"1.6",fontSize:"15px",margin:"0 0 12px 0"},children:r.body}),r.bullets&&s.jsx("ul",{style:{paddingLeft:"20px",color:"#4a5568",lineHeight:"1.6",fontSize:"15px",marginTop:"8px"},children:r.bullets.map((o,a)=>s.jsx("li",{style:{marginBottom:"6px"},children:o},`${r.title}-bullet-${a}`))}),r.pdf_file&&s.jsx("div",{style:{marginTop:"20px"},children:s.jsx("a",{href:r.pdf_file,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",fontSize:"13px",fontWeight:"600",backgroundColor:"#edf2f7",color:"#2d3748",padding:"8px 14px",borderRadius:"6px",border:"1px solid #cbd5e0",textDecoration:"none",cursor:"pointer"},children:"📥 Download Version Asset"})})]},`${e}-${i}`))})]})}function Wx(){const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,o]=b.useState(null);return b.useEffect(()=>{const a=localStorage.getItem("cl_token");a&&Bo(a);async function l(){try{r(!0),o(null);const c=await Jn.get("api/constitution-versions/");if(Array.isArray(c.data)){const u=c.data.map(m=>({id:m.id,title:m.title,body:typeof m.body=="string"?m.body.replace(/\\n/g,`
`):m.body,bullets:Array.isArray(m.bullets)?m.bullets:[],pdf_file:m.download_url||m.pdf_file||null}));t(u)}else o("Received invalid structural response payload from the data repository.")}catch{console.error("PDF download transfer alert:",Error),alert("Failed to download the document asset. Please ensure your backend endpoint supports the file action.")}finally{r(!1)}}l()},[]),n?s.jsx("div",{className:"container mt-md",style:{paddingBottom:"60px"},children:s.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#718096",border:"1px dashed #cbd5e0",borderRadius:"8px"},children:"Querying index directories from backend relational database..."})}):i?s.jsx("div",{className:"container mt-md",style:{paddingBottom:"60px"},children:s.jsxs("div",{style:{backgroundColor:"#fff5f5",color:"#c53030",padding:"16px",borderRadius:"6px",border:"1px solid #fed7d7",fontWeight:"500"},children:["⚠️ Connection Alert: ",i]})}):s.jsx(s.Fragment,{children:e.length===0?s.jsx("div",{className:"container mt-md",style:{paddingBottom:"60px"},children:s.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#718096",border:"1px dashed #cbd5e0",borderRadius:"8px"},children:"No current document records reside inside this database partition collection index."})}):s.jsx($x,{title:"Constitution & Bylaws",intro:"Reviewing institutional governance charters, administrative code laws, and operational compliance frameworks for the Canon Law Guild structure.",sections:e})})}function Hx(){return s.jsxs(Ug,{children:[s.jsx(Qg,{}),s.jsx(Kg,{}),s.jsx("div",{className:"app-shell",children:s.jsxs(Og,{children:[s.jsx(H,{path:"/",element:s.jsx(Jg,{})}),s.jsx(H,{path:"/donate",element:s.jsx(Fx,{})}),s.jsx(H,{path:"/contact",element:s.jsx(Ix,{})}),s.jsx(H,{path:"/publications",element:s.jsx(lu,{})}),s.jsx(H,{path:"/membership/join",element:s.jsx(lx,{})}),s.jsx(H,{path:"/news-events",element:s.jsx(cx,{})}),s.jsx(H,{path:"/about/background",element:s.jsx(ux,{})}),s.jsx(H,{path:"/about/Constitution",element:s.jsx(Wx,{})}),s.jsx(H,{path:"/about/founder",element:s.jsx(px,{})}),s.jsx(H,{path:"/about/leadership-structure",element:s.jsx(mx,{})}),s.jsx(H,{path:"/about/doctrinal-statement",element:s.jsx(gx,{})}),s.jsx(H,{path:"/about/inspirational-scriptures",element:s.jsx(Nx,{})}),s.jsx(H,{path:"/about/contact-founder",element:s.jsx(Cx,{})}),s.jsx(H,{path:"/history/canon-law-theology",element:s.jsx(xx,{})}),s.jsx(H,{path:"/history/history-of-canon-law",element:s.jsx(wx,{})}),s.jsx(H,{path:"/history/principles-of-canon-law",element:s.jsx(Tx,{})}),s.jsx(H,{path:"/what-we-do/areas-of-focus",element:s.jsx(Rx,{})}),s.jsx(H,{path:"/what-we-do/publications",element:s.jsx(lu,{})}),s.jsx(H,{path:"/what-we-do/decided-cases",element:s.jsx(Sx,{})}),s.jsx(H,{path:"/what-we-do/advisory-opinions",element:s.jsx(Lx,{})}),s.jsx(H,{path:"/trainings/annual-agm",element:s.jsx(Ax,{})}),s.jsx(H,{path:"/trainings/workshops",element:s.jsx(zx,{})}),s.jsx(H,{path:"/trainings/conferences",element:s.jsx(Dx,{})}),s.jsx(H,{path:"/membership",element:s.jsx(Mx,{})}),s.jsx(H,{path:"/what-we-do/publications/:id",element:s.jsx(Ux,{})})]})}),s.jsx("footer",{className:"footer",children:s.jsxs("div",{className:"container footer-content",children:[s.jsx("span",{children:"© Canon Law Guild"}),s.jsx(re,{to:"/news-events",className:"footer-link",children:"News & Events"})]})})]})}const cu=localStorage.getItem("cl_token");cu&&Bo(cu);const Vx=document.getElementById("root");Sp(Vx).render(s.jsx(yr.StrictMode,{children:s.jsx(Hx,{})}));
