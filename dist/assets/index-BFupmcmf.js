(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ue={},Ps=[],Hn=()=>{},bf=()=>!1,oa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),aa=n=>n.startsWith("onUpdate:"),Ce=Object.assign,Nc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Wp=Object.prototype.hasOwnProperty,ie=(n,t)=>Wp.call(n,t),Ut=Array.isArray,Ls=n=>Ir(n)==="[object Map]",Tf=n=>Ir(n)==="[object Set]",Mu=n=>Ir(n)==="[object Date]",Gt=n=>typeof n=="function",ge=n=>typeof n=="string",yn=n=>typeof n=="symbol",te=n=>n!==null&&typeof n=="object",wf=n=>(te(n)||Gt(n))&&Gt(n.then)&&Gt(n.catch),Af=Object.prototype.toString,Ir=n=>Af.call(n),Xp=n=>Ir(n).slice(8,-1),Cf=n=>Ir(n)==="[object Object]",la=n=>ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,hr=Uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},$p=/-\w/g,An=ca(n=>n.replace($p,t=>t.slice(1).toUpperCase())),qp=/\B([A-Z])/g,Li=ca(n=>n.replace(qp,"-$1").toLowerCase()),Rf=ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ra=ca(n=>n?`on${Rf(n)}`:""),zn=(n,t)=>!Object.is(n,t),wo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Pf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Fc=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Yp=n=>{const t=ge(n)?Number(n):NaN;return isNaN(t)?n:t};let Eu;const ua=()=>Eu||(Eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ur(n){if(Ut(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ge(i)?Jp(i):Ur(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ge(n)||te(n))return n}const jp=/;(?![^(]*\))/g,Kp=/:([^]+)/,Zp=/\/\*[^]*?\*\//g;function Jp(n){const t={};return n.replace(Zp,"").split(jp).forEach(e=>{if(e){const i=e.split(Kp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function De(n){let t="";if(ge(n))t=n;else if(Ut(n))for(let e=0;e<n.length;e++){const i=De(n[e]);i&&(t+=i+" ")}else if(te(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Qp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tm=Uc(Qp);function Lf(n){return!!n||n===""}function em(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Oc(n[i],t[i]);return e}function Oc(n,t){if(n===t)return!0;let e=Mu(n),i=Mu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=yn(n),i=yn(t),e||i)return n===t;if(e=Ut(n),i=Ut(t),e||i)return e&&i?em(n,t):!1;if(e=te(n),i=te(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Oc(n[o],t[o]))return!1}}return String(n)===String(t)}const Df=n=>!!(n&&n.__v_isRef===!0),Ht=n=>ge(n)?n:n==null?"":Ut(n)||te(n)&&(n.toString===Af||!Gt(n.toString))?Df(n)?Ht(n.value):JSON.stringify(n,If,2):String(n),If=(n,t)=>Df(t)?If(n,t.value):Ls(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Pa(i,r)+" =>"]=s,e),{})}:Tf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Pa(e))}:yn(t)?Pa(t):te(t)&&!Ut(t)&&!Cf(t)?String(t):t,Pa=(n,t="")=>{var e;return yn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class Uf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&we&&(we.active?(this.parent=we,this.index=(we.scopes||(we.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=we;try{return we=this,t()}finally{we=e}}}on(){++this._on===1&&(this.prevScope=we,we=this)}off(){if(this._on>0&&--this._on===0){if(we===this)we=this.prevScope;else{let t=we;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Nf(n){return new Uf(n)}function Bc(){return we}function Ff(n,t=!1){we&&we.cleanups.push(n)}let fe;const La=new WeakSet;class Of{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&(we.active?we.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,La.has(this)&&(La.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bu(this),kf(this);const t=fe,e=Cn;fe=this,Cn=!0;try{return this.fn()}finally{Hf(this),fe=t,Cn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Hc(t);this.deps=this.depsTail=void 0,bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?La.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rl(this)&&this.run()}get dirty(){return Rl(this)}}let Bf=0,fr,dr;function zf(n,t=!1){if(n.flags|=8,t){n.next=dr,dr=n;return}n.next=fr,fr=n}function zc(){Bf++}function kc(){if(--Bf>0)return;if(dr){let t=dr;for(dr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;fr;){let t=fr;for(fr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function kf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Hf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Hc(i),nm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Rl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Vf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Sr)||(n.globalVersion=Sr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Rl(n))))return;n.flags|=2;const t=n.dep,e=fe,i=Cn;fe=n,Cn=!0;try{kf(n);const s=n.fn(n._value);(t.version===0||zn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{fe=e,Cn=i,Hf(n),n.flags&=-3}}function Hc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Hc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function nm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Cn=!0;const Gf=[];function Wn(){Gf.push(Cn),Cn=!1}function Xn(){const n=Gf.pop();Cn=n===void 0?!0:n}function bu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=fe;fe=void 0;try{t()}finally{fe=e}}}let Sr=0;class im{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!Cn||fe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==fe)e=this.activeLink=new im(fe,this),fe.deps?(e.prevDep=fe.depsTail,fe.depsTail.nextDep=e,fe.depsTail=e):fe.deps=fe.depsTail=e,Wf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=fe.depsTail,e.nextDep=void 0,fe.depsTail.nextDep=e,fe.depsTail=e,fe.deps===e&&(fe.deps=i)}return e}trigger(t){this.version++,Sr++,this.notify(t)}notify(t){zc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{kc()}}}function Wf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Wf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Bo=new WeakMap,Ji=Symbol(""),Pl=Symbol(""),Mr=Symbol("");function ke(n,t,e){if(Cn&&fe){let i=Bo.get(n);i||Bo.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Vc),s.map=i,s.key=e),s.track()}}function ii(n,t,e,i,s,r){const o=Bo.get(n);if(!o){Sr++;return}const a=l=>{l&&l.trigger()};if(zc(),t==="clear")o.forEach(a);else{const l=Ut(n),c=l&&la(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Mr||!yn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Mr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Ji)),Ls(n)&&a(o.get(Pl)));break;case"delete":l||(a(o.get(Ji)),Ls(n)&&a(o.get(Pl)));break;case"set":Ls(n)&&a(o.get(Ji));break}}kc()}function sm(n,t){const e=Bo.get(n);return e&&e.get(t)}function os(n){const t=Kt(n);return t===n?t:(ke(t,"iterate",Mr),cn(n)?t:t.map(Pn))}function ha(n){return ke(n=Kt(n),"iterate",Mr),n}function Fn(n,t){return ui(n)?Bs(Vn(n)?Pn(t):t):Pn(t)}const rm={__proto__:null,[Symbol.iterator](){return Da(this,Symbol.iterator,n=>Fn(this,n))},concat(...n){return os(this).concat(...n.map(t=>Ut(t)?os(t):t))},entries(){return Da(this,"entries",n=>(n[1]=Fn(this,n[1]),n))},every(n,t){return qn(this,"every",n,t,void 0,arguments)},filter(n,t){return qn(this,"filter",n,t,e=>e.map(i=>Fn(this,i)),arguments)},find(n,t){return qn(this,"find",n,t,e=>Fn(this,e),arguments)},findIndex(n,t){return qn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return qn(this,"findLast",n,t,e=>Fn(this,e),arguments)},findLastIndex(n,t){return qn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return qn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ia(this,"includes",n)},indexOf(...n){return Ia(this,"indexOf",n)},join(n){return os(this).join(n)},lastIndexOf(...n){return Ia(this,"lastIndexOf",n)},map(n,t){return qn(this,"map",n,t,void 0,arguments)},pop(){return js(this,"pop")},push(...n){return js(this,"push",n)},reduce(n,...t){return Tu(this,"reduce",n,t)},reduceRight(n,...t){return Tu(this,"reduceRight",n,t)},shift(){return js(this,"shift")},some(n,t){return qn(this,"some",n,t,void 0,arguments)},splice(...n){return js(this,"splice",n)},toReversed(){return os(this).toReversed()},toSorted(n){return os(this).toSorted(n)},toSpliced(...n){return os(this).toSpliced(...n)},unshift(...n){return js(this,"unshift",n)},values(){return Da(this,"values",n=>Fn(this,n))}};function Da(n,t,e){const i=ha(n),s=i[t]();return i!==n&&!cn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const om=Array.prototype;function qn(n,t,e,i,s,r){const o=ha(n),a=o!==n&&!cn(n),l=o[t];if(l!==om[t]){const h=l.apply(n,r);return a?Pn(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,Fn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Tu(n,t,e,i){const s=ha(n),r=s!==n&&!cn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Fn(n,c)),e.call(this,c,Fn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?Fn(n,l):l}function Ia(n,t,e){const i=Kt(n);ke(i,"iterate",Mr);const s=i[t](...e);return(s===-1||s===!1)&&fa(e[0])?(e[0]=Kt(e[0]),i[t](...e)):s}function js(n,t,e=[]){Wn(),zc();const i=Kt(n)[t].apply(n,e);return kc(),Xn(),i}const am=Uc("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yn));function lm(n){yn(n)||(n=String(n));const t=Kt(this);return ke(t,"has",n),t.hasOwnProperty(n)}class $f{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?vm:Kf:r?jf:Yf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ut(t);if(!s){let l;if(o&&(l=rm[e]))return l;if(e==="hasOwnProperty")return lm}const a=Reflect.get(t,e,me(t)?t:i);if((yn(e)?Xf.has(e):am(e))||(s||ke(t,"get",e),r))return a;if(me(a)){const l=o&&la(e)?a:a.value;return s&&te(l)?Dl(l):l}return te(a)?s?Dl(a):Os(a):a}}class qf extends $f{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Ut(t)&&la(e);if(!this._isShallow){const c=ui(r);if(!cn(i)&&!ui(i)&&(r=Kt(r),i=Kt(i)),!o&&me(r)&&!me(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ie(t,e),l=Reflect.set(t,e,i,me(t)?t:s);return t===Kt(s)&&l&&(a?zn(i,r)&&ii(t,"set",e,i):ii(t,"add",e,i)),l}deleteProperty(t,e){const i=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&ii(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!yn(e)||!Xf.has(e))&&ke(t,"has",e),i}ownKeys(t){return ke(t,"iterate",Ut(t)?"length":Ji),Reflect.ownKeys(t)}}class cm extends $f{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const um=new qf,hm=new cm,fm=new qf(!0);const Ll=n=>n,Xr=n=>Reflect.getPrototypeOf(n);function dm(n,t,e){return function(...i){const s=this.__v_raw,r=Kt(s),o=Ls(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Ll:t?Bs:Pn;return!t&&ke(r,"iterate",l?Pl:Ji),Ce(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function $r(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function pm(n,t){const e={get(s){const r=this.__v_raw,o=Kt(r),a=Kt(s);n||(zn(s,a)&&ke(o,"get",s),ke(o,"get",a));const{has:l}=Xr(o),c=t?Ll:n?Bs:Pn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&ke(Kt(s),"iterate",Ji),s.size},has(s){const r=this.__v_raw,o=Kt(r),a=Kt(s);return n||(zn(s,a)&&ke(o,"has",s),ke(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Kt(a),c=t?Ll:n?Bs:Pn;return!n&&ke(l,"iterate",Ji),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ce(e,n?{add:$r("add"),set:$r("set"),delete:$r("delete"),clear:$r("clear")}:{add(s){const r=Kt(this),o=Xr(r),a=Kt(s),l=!t&&!cn(s)&&!ui(s)?a:s;return o.has.call(r,l)||zn(s,l)&&o.has.call(r,s)||zn(a,l)&&o.has.call(r,a)||(r.add(l),ii(r,"add",l,l)),this},set(s,r){!t&&!cn(r)&&!ui(r)&&(r=Kt(r));const o=Kt(this),{has:a,get:l}=Xr(o);let c=a.call(o,s);c||(s=Kt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?zn(r,u)&&ii(o,"set",s,r):ii(o,"add",s,r),this},delete(s){const r=Kt(this),{has:o,get:a}=Xr(r);let l=o.call(r,s);l||(s=Kt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ii(r,"delete",s,void 0),c},clear(){const s=Kt(this),r=s.size!==0,o=s.clear();return r&&ii(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=dm(s,n,t)}),e}function Gc(n,t){const e=pm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ie(e,s)&&s in i?e:i,s,r)}const mm={get:Gc(!1,!1)},gm={get:Gc(!1,!0)},_m={get:Gc(!0,!1)};const Yf=new WeakMap,jf=new WeakMap,Kf=new WeakMap,vm=new WeakMap;function xm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Os(n){return ui(n)?n:Wc(n,!1,um,mm,Yf)}function ym(n){return Wc(n,!1,fm,gm,jf)}function Dl(n){return Wc(n,!0,hm,_m,Kf)}function Wc(n,t,e,i,s){if(!te(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=xm(Xp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Vn(n){return ui(n)?Vn(n.__v_raw):!!(n&&n.__v_isReactive)}function ui(n){return!!(n&&n.__v_isReadonly)}function cn(n){return!!(n&&n.__v_isShallow)}function fa(n){return n?!!n.__v_raw:!1}function Kt(n){const t=n&&n.__v_raw;return t?Kt(t):n}function Xc(n){return!ie(n,"__v_skip")&&Object.isExtensible(n)&&Pf(n,"__v_skip",!0),n}const Pn=n=>te(n)?Os(n):n,Bs=n=>te(n)?Dl(n):n;function me(n){return n?n.__v_isRef===!0:!1}function Gn(n){return Zf(n,!1)}function Sm(n){return Zf(n,!0)}function Zf(n,t){return me(n)?n:new Mm(n,t)}class Mm{constructor(t,e){this.dep=new Vc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Kt(t),this._value=e?t:Pn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||cn(t)||ui(t);t=i?t:Kt(t),zn(t,e)&&(this._rawValue=t,this._value=i?t:Pn(t),this.dep.trigger())}}function ft(n){return me(n)?n.value:n}function Ti(n){return Gt(n)?n():ft(n)}const Em={get:(n,t,e)=>t==="__v_raw"?n:ft(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return me(s)&&!me(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Jf(n){return Vn(n)?n:new Proxy(n,Em)}function bm(n){const t=Ut(n)?new Array(n.length):{};for(const e in n)t[e]=Qf(n,e);return t}class Tm{constructor(t,e,i){this._object=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=yn(e)?e:String(e),this._raw=Kt(t);let s=!0,r=t;if(!Ut(t)||yn(this._key)||!la(this._key))do s=!fa(r)||cn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=ft(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&me(this._raw[this._key])){const e=this._object[this._key];if(me(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return sm(this._raw,this._key)}}class wm{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Am(n,t,e){return me(n)?n:Gt(n)?new wm(n):te(n)&&arguments.length>1?Qf(n,t,e):Gn(n)}function Qf(n,t,e){return new Tm(n,t,e)}class Cm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Vc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return zf(this,!0),!0}get value(){const t=this.dep.track();return Vf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Rm(n,t,e=!1){let i,s;return Gt(n)?i=n:(i=n.get,s=n.set),new Cm(i,s,e)}const qr={},zo=new WeakMap;let Wi;function Pm(n,t=!1,e=Wi){if(e){let i=zo.get(e);i||zo.set(e,i=[]),i.push(n)}}function Lm(n,t,e=ue){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=S=>s?S:cn(S)||s===!1||s===0?si(S,1):si(S);let u,h,f,d,g=!1,v=!1;if(me(n)?(h=()=>n.value,g=cn(n)):Vn(n)?(h=()=>c(n),g=!0):Ut(n)?(v=!0,g=n.some(S=>Vn(S)||cn(S)),h=()=>n.map(S=>{if(me(S))return S.value;if(Vn(S))return c(S);if(Gt(S))return l?l(S,2):S()})):Gt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){Wn();try{f()}finally{Xn()}}const S=Wi;Wi=u;try{return l?l(n,3,[d]):n(d)}finally{Wi=S}}:h=Hn,t&&s){const S=h,A=s===!0?1/0:s;h=()=>si(S(),A)}const p=Bc(),m=()=>{u.stop(),p&&p.active&&Nc(p.effects,u)};if(r&&t){const S=t;t=(...A)=>{const R=S(...A);return m(),R}}let w=v?new Array(n.length).fill(qr):qr;const b=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const A=u.run();if(S||s||g||(v?A.some((R,P)=>zn(R,w[P])):zn(A,w))){f&&f();const R=Wi;Wi=u;try{const P=[A,w===qr?void 0:v&&w[0]===qr?[]:w,d];w=A,l?l(t,3,P):t(...P)}finally{Wi=R}}}else u.run()};return a&&a(b),u=new Of(h),u.scheduler=o?()=>o(b,!1):b,d=S=>Pm(S,!1,u),f=u.onStop=()=>{const S=zo.get(u);if(S){if(l)l(S,4);else for(const A of S)A();zo.delete(u)}},t?i?b(!0):w=u.run():o?o(b.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function si(n,t=1/0,e){if(t<=0||!te(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,me(n))si(n.value,t,e);else if(Ut(n))for(let i=0;i<n.length;i++)si(n[i],t,e);else if(Tf(n)||Ls(n))n.forEach(i=>{si(i,t,e)});else if(Cf(n)){for(const i in n)si(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&si(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nr(n,t,e,i){try{return i?n(...i):n()}catch(s){da(s,t,e)}}function Sn(n,t,e,i){if(Gt(n)){const s=Nr(n,t,e,i);return s&&wf(s)&&s.catch(r=>{da(r,t,e)}),s}if(Ut(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Sn(n[r],t,e,i));return s}}function da(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ue;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Wn(),Nr(r,null,10,[n,l,c]),Xn();return}}Dm(n,e,s,i,o)}function Dm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const We=[];let Nn=-1;const Ds=[];let Mi=null,ws=0;const td=Promise.resolve();let ko=null;function ed(n){const t=ko||td;return n?t.then(this?n.bind(this):n):t}function Im(n){let t=Nn+1,e=We.length;for(;t<e;){const i=t+e>>>1,s=We[i],r=Er(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function $c(n){if(!(n.flags&1)){const t=Er(n),e=We[We.length-1];!e||!(n.flags&2)&&t>=Er(e)?We.push(n):We.splice(Im(t),0,n),n.flags|=1,nd()}}function nd(){ko||(ko=td.then(sd))}function Um(n){Ut(n)?Ds.push(...n):Mi&&n.id===-1?Mi.splice(ws+1,0,n):n.flags&1||(Ds.push(n),n.flags|=1),nd()}function wu(n,t,e=Nn+1){for(;e<We.length;e++){const i=We[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;We.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function id(n){if(Ds.length){const t=[...new Set(Ds)].sort((e,i)=>Er(e)-Er(i));if(Ds.length=0,Mi){Mi.push(...t);return}for(Mi=t,ws=0;ws<Mi.length;ws++){const e=Mi[ws];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Mi=null,ws=0}}const Er=n=>n.id==null?n.flags&2?-1:1/0:n.id;function sd(n){try{for(Nn=0;Nn<We.length;Nn++){const t=We[Nn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Nr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Nn<We.length;Nn++){const t=We[Nn];t&&(t.flags&=-2)}Nn=-1,We.length=0,id(),ko=null,(We.length||Ds.length)&&sd()}}let gn=null,rd=null;function Ho(n){const t=gn;return gn=n,rd=n&&n.type.__scopeId||null,t}function od(n,t=gn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Wo(-1);const r=Ho(t);let o;try{o=n(...s)}finally{Ho(r),i._d&&Wo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Nm(n,t){if(gn===null)return n;const e=xa(gn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ue]=t[s];r&&(Gt(r)&&(r={mounted:r,updated:r}),r.deep&&si(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ui(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Wn(),Sn(l,e,8,[n.el,a,n,t]),Xn())}}function Fm(n,t){if($e){let e=$e.provides;const i=$e.parent&&$e.parent.provides;i===e&&(e=$e.provides=Object.create(i)),e[n]=t}}function pr(n,t,e=!1){const i=Kc();if(i||Qi){let s=Qi?Qi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Gt(t)?t.call(i&&i.proxy):t}}function Om(){return!!(Kc()||Qi)}const Bm=Symbol.for("v-scx"),zm=()=>pr(Bm);function an(n,t,e){return ad(n,t,e)}function ad(n,t,e=ue){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ce({},e),l=t&&i||!t&&r!=="post";let c;if(wr){if(r==="sync"){const d=zm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Hn,d.resume=Hn,d.pause=Hn,d}}const u=$e;a.call=(d,g,v)=>Sn(d,u,g,v);let h=!1;r==="post"?a.scheduler=d=>{Je(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():$c(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Lm(n,t,a);return wr&&(c?c.push(f):l&&f()),f}function km(n,t,e){const i=this.proxy,s=ge(n)?n.includes(".")?ld(i,n):()=>i[n]:n.bind(i,i);let r;Gt(t)?r=t:(r=t.handler,e=t);const o=Fr(this),a=ad(s,r.bind(i),e);return o(),a}function ld(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Hm=Symbol("_vte"),cd=n=>n.__isTeleport,dn=Symbol("_leaveCb"),Ks=Symbol("_enterCb");function Vm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ga(()=>{n.isMounted=!0}),qc(()=>{n.isUnmounting=!0}),n}const hn=[Function,Array],ud={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:hn,onEnter:hn,onAfterEnter:hn,onEnterCancelled:hn,onBeforeLeave:hn,onLeave:hn,onAfterLeave:hn,onLeaveCancelled:hn,onBeforeAppear:hn,onAppear:hn,onAfterAppear:hn,onAppearCancelled:hn},hd=n=>{const t=n.subTree;return t.component?hd(t.component):t},Gm={name:"BaseTransition",props:ud,setup(n,{slots:t}){const e=Kc(),i=Vm();return()=>{const s=t.default&&pd(t.default(),!0),r=s&&s.length?fd(s):e.subTree?rn():void 0;if(!r)return;const o=Kt(n),{mode:a}=o;if(i.isLeaving)return Ua(r);const l=Au(r);if(!l)return Ua(r);let c=Il(l,o,i,e,h=>c=h);l.type!==Xe&&br(l,c);let u=e.subTree&&Au(e.subTree);if(u&&u.type!==Xe&&!$i(u,l)&&hd(e).type!==Xe){let h=Il(u,o,i,e);if(br(u,h),a==="out-in"&&l.type!==Xe)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},Ua(r);a==="in-out"&&l.type!==Xe?h.delayLeave=(f,d,g)=>{const v=dd(i,u);v[String(u.key)]=u,f[dn]=()=>{d(),f[dn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function fd(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Xe){t=e;break}}return t}const Wm=Gm;function dd(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Il(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:p,onAppear:m,onAfterAppear:w,onAppearCancelled:b}=t,S=String(n.key),A=dd(e,n),R=(H,x)=>{H&&Sn(H,i,9,x)},P=(H,x)=>{const E=x[1];R(H,x),Ut(H)?H.every(I=>I.length<=1)&&E():H.length<=1&&E()},L={mode:o,persisted:a,beforeEnter(H){let x=l;if(!e.isMounted)if(r)x=p||l;else return;H[dn]&&H[dn](!0);const E=A[S];E&&$i(n,E)&&E.el[dn]&&E.el[dn](),R(x,[H])},enter(H){if(A[S]===n)return;let x=c,E=u,I=h;if(!e.isMounted)if(r)x=m||c,E=w||u,I=b||h;else return;let k=!1;H[Ks]=it=>{k||(k=!0,it?R(I,[H]):R(E,[H]),L.delayedLeave&&L.delayedLeave(),H[Ks]=void 0)};const J=H[Ks].bind(null,!1);x?P(x,[H,J]):J()},leave(H,x){const E=String(n.key);if(H[Ks]&&H[Ks](!0),e.isUnmounting)return x();R(f,[H]);let I=!1;H[dn]=J=>{I||(I=!0,x(),J?R(v,[H]):R(g,[H]),H[dn]=void 0,A[E]===n&&delete A[E])};const k=H[dn].bind(null,!1);A[E]=n,d?P(d,[H,k]):k()},clone(H){const x=Il(H,t,e,i,s);return s&&s(x),x}};return L}function Ua(n){if(pa(n))return n=Ri(n),n.children=null,n}function Au(n){if(!pa(n))return cd(n.type)&&n.children?fd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Gt(e.default))return e.default()}}function br(n,t){n.shapeFlag&6&&n.component?(n.transition=t,br(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function pd(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===Ee?(o.patchFlag&128&&s++,i=i.concat(pd(o.children,t,a))):(t||o.type!==Xe)&&i.push(a!=null?Ri(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Dn(n,t){return Gt(n)?Ce({name:n.name},t,{setup:n}):n}function md(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Cu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Vo=new WeakMap;function mr(n,t,e,i,s=!1){if(Ut(n)){n.forEach((v,p)=>mr(v,t&&(Ut(t)?t[p]:t),e,i,s));return}if(gr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&mr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?xa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ue?a.refs={}:a.refs,h=a.setupState,f=Kt(h),d=h===ue?bf:v=>Cu(u,v)?!1:ie(f,v),g=(v,p)=>!(p&&Cu(u,p));if(c!=null&&c!==l){if(Ru(t),ge(c))u[c]=null,d(c)&&(h[c]=null);else if(me(c)){const v=t;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Gt(l)){Wn();try{Nr(l,a,12,[o,u])}finally{Xn()}}else{const v=ge(l),p=me(l);if(v||p){const m=()=>{if(n.f){const w=v?d(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ut(w)&&Nc(w,r);else if(Ut(w))w.includes(r)||w.push(r);else if(v)u[l]=[r],d(l)&&(h[l]=u[l]);else{const b=[r];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else v?(u[l]=o,d(l)&&(h[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{m(),Vo.delete(n)};w.id=-1,Vo.set(n,w),Je(w,e)}else Ru(n),m()}}}function Ru(n){const t=Vo.get(n);t&&(t.flags|=8,Vo.delete(n))}ua().requestIdleCallback;ua().cancelIdleCallback;const gr=n=>!!n.type.__asyncLoader,pa=n=>n.type.__isKeepAlive;function Xm(n,t){gd(n,"a",t)}function $m(n,t){gd(n,"da",t)}function gd(n,t,e=$e){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ma(t,i,e),e){let s=e.parent;for(;s&&s.parent;)pa(s.parent.vnode)&&qm(i,t,e,s),s=s.parent}}function qm(n,t,e,i){const s=ma(t,n,i,!0);_d(()=>{Nc(i[t],s)},e)}function ma(n,t,e=$e,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Wn();const a=Fr(e),l=Sn(t,e,n,o);return a(),Xn(),l});return i?s.unshift(r):s.push(r),r}}const fi=n=>(t,e=$e)=>{(!wr||n==="sp")&&ma(n,(...i)=>t(...i),e)},Ym=fi("bm"),ga=fi("m"),jm=fi("bu"),Km=fi("u"),qc=fi("bum"),_d=fi("um"),Zm=fi("sp"),Jm=fi("rtg"),Qm=fi("rtc");function tg(n,t=$e){ma("ec",n,t)}const eg=Symbol.for("v-ndc");function Is(n,t,e,i){let s;const r=e,o=Ut(n);if(o||ge(n)){const a=o&&Vn(n);let l=!1,c=!1;a&&(l=!cn(n),c=ui(n),n=ha(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?Bs(Pn(n[u])):Pn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(te(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Ul=n=>n?Od(n)?xa(n):Ul(n.parent):null,_r=Ce(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ul(n.parent),$root:n=>Ul(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>xd(n),$forceUpdate:n=>n.f||(n.f=()=>{$c(n.update)}),$nextTick:n=>n.n||(n.n=ed.bind(n.proxy)),$watch:n=>km.bind(n)}),Na=(n,t)=>n!==ue&&!n.__isScriptSetup&&ie(n,t),ng={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Na(i,t))return o[t]=1,i[t];if(s!==ue&&ie(s,t))return o[t]=2,s[t];if(ie(r,t))return o[t]=3,r[t];if(e!==ue&&ie(e,t))return o[t]=4,e[t];Nl&&(o[t]=0)}}const c=_r[t];let u,h;if(c)return t==="$attrs"&&ke(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ue&&ie(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,ie(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Na(s,t)?(s[t]=e,!0):i!==ue&&ie(i,t)?(i[t]=e,!0):ie(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ue&&a[0]!=="$"&&ie(n,a)||Na(t,a)||ie(r,a)||ie(i,a)||ie(_r,a)||ie(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ie(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Pu(n){return Ut(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Nl=!0;function ig(n){const t=xd(n),e=n.proxy,i=n.ctx;Nl=!1,t.beforeCreate&&Lu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:p,beforeDestroy:m,beforeUnmount:w,destroyed:b,unmounted:S,render:A,renderTracked:R,renderTriggered:P,errorCaptured:L,serverPrefetch:H,expose:x,inheritAttrs:E,components:I,directives:k,filters:J}=t;if(c&&sg(c,i,null),o)for(const W in o){const B=o[W];Gt(B)&&(i[W]=B.bind(e))}if(s){const W=s.call(e,e);te(W)&&(n.data=Os(W))}if(Nl=!0,r)for(const W in r){const B=r[W],ut=Gt(B)?B.bind(e,e):Gt(B.get)?B.get.bind(e,e):Hn,pt=!Gt(B)&&Gt(B.set)?B.set.bind(e):Hn,_t=Ne({get:ut,set:pt});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>_t.value,set:Nt=>_t.value=Nt})}if(a)for(const W in a)vd(a[W],i,e,W);if(l){const W=Gt(l)?l.call(e):l;Reflect.ownKeys(W).forEach(B=>{Fm(B,W[B])})}u&&Lu(u,n,"c");function G(W,B){Ut(B)?B.forEach(ut=>W(ut.bind(e))):B&&W(B.bind(e))}if(G(Ym,h),G(ga,f),G(jm,d),G(Km,g),G(Xm,v),G($m,p),G(tg,L),G(Qm,R),G(Jm,P),G(qc,w),G(_d,S),G(Zm,H),Ut(x))if(x.length){const W=n.exposed||(n.exposed={});x.forEach(B=>{Object.defineProperty(W,B,{get:()=>e[B],set:ut=>e[B]=ut,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===Hn&&(n.render=A),E!=null&&(n.inheritAttrs=E),I&&(n.components=I),k&&(n.directives=k),H&&md(n)}function sg(n,t,e=Hn){Ut(n)&&(n=Fl(n));for(const i in n){const s=n[i];let r;te(s)?"default"in s?r=pr(s.from||i,s.default,!0):r=pr(s.from||i):r=pr(s),me(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Lu(n,t,e){Sn(Ut(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function vd(n,t,e,i){let s=i.includes(".")?ld(e,i):()=>e[i];if(ge(n)){const r=t[n];Gt(r)&&an(s,r)}else if(Gt(n))an(s,n.bind(e));else if(te(n))if(Ut(n))n.forEach(r=>vd(r,t,e,i));else{const r=Gt(n.handler)?n.handler.bind(e):t[n.handler];Gt(r)&&an(s,r,n)}}function xd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Go(l,c,o,!0)),Go(l,t,o)),te(t)&&r.set(t,l),l}function Go(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Go(n,r,e,!0),s&&s.forEach(o=>Go(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=rg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const rg={data:Du,props:Iu,emits:Iu,methods:lr,computed:lr,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:lr,directives:lr,watch:ag,provide:Du,inject:og};function Du(n,t){return t?n?function(){return Ce(Gt(n)?n.call(this,this):n,Gt(t)?t.call(this,this):t)}:t:n}function og(n,t){return lr(Fl(n),Fl(t))}function Fl(n){if(Ut(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ve(n,t){return n?[...new Set([].concat(n,t))]:t}function lr(n,t){return n?Ce(Object.create(null),n,t):t}function Iu(n,t){return n?Ut(n)&&Ut(t)?[...new Set([...n,...t])]:Ce(Object.create(null),Pu(n),Pu(t??{})):t}function ag(n,t){if(!n)return t;if(!t)return n;const e=Ce(Object.create(null),n);for(const i in t)e[i]=Ve(n[i],t[i]);return e}function yd(){return{app:null,config:{isNativeTag:bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lg=0;function cg(n,t){return function(i,s=null){Gt(i)||(i=Ce({},i)),s!=null&&!te(s)&&(s=null);const r=yd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:lg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Hg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Gt(u.install)?(o.add(u),u.install(c,...h)):Gt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||xe(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,xa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Sn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Qi;Qi=c;try{return u()}finally{Qi=h}}};return c}}let Qi=null;const ug=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${An(t)}Modifiers`]||n[`${Li(t)}Modifiers`];function hg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ue;let s=e;const r=t.startsWith("update:"),o=r&&ug(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>ge(u)?u.trim():u)),o.number&&(s=e.map(Fc)));let a,l=i[a=Ra(t)]||i[a=Ra(An(t))];!l&&r&&(l=i[a=Ra(Li(t))]),l&&Sn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Sn(c,n,6,s)}}const fg=new WeakMap;function Sd(n,t,e=!1){const i=e?fg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Gt(n)){const l=c=>{const u=Sd(c,t,!0);u&&(a=!0,Ce(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(te(n)&&i.set(n,null),null):(Ut(r)?r.forEach(l=>o[l]=null):Ce(o,r),te(n)&&i.set(n,o),o)}function _a(n,t){return!n||!oa(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(n,t[0].toLowerCase()+t.slice(1))||ie(n,Li(t))||ie(n,t))}function Uu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:v}=n,p=Ho(n);let m,w;try{if(e.shapeFlag&4){const S=s||i,A=S;m=On(c.call(A,S,u,h,d,f,g)),w=a}else{const S=t;m=On(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),w=t.props?a:dg(a)}}catch(S){vr.length=0,da(S,n,1),m=xe(Xe)}let b=m;if(w&&v!==!1){const S=Object.keys(w),{shapeFlag:A}=b;S.length&&A&7&&(r&&S.some(aa)&&(w=pg(w,r)),b=Ri(b,w,!1,!0))}return e.dirs&&(b=Ri(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&br(b,e.transition),m=b,Ho(p),m}const dg=n=>{let t;for(const e in n)(e==="class"||e==="style"||oa(e))&&((t||(t={}))[e]=n[e]);return t},pg=(n,t)=>{const e={};for(const i in n)(!aa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function mg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Nu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(Md(o,i,f)&&!_a(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nu(i,o,c):!0:!!o;return!1}function Nu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Md(t,n,r)&&!_a(e,r))return!0}return!1}function Md(n,t,e){const i=n[e],s=t[e];return e==="style"&&te(i)&&te(s)?!Oc(i,s):i!==s}function gg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Ed={},bd=()=>Object.create(Ed),Td=n=>Object.getPrototypeOf(n)===Ed;function _g(n,t,e,i=!1){const s={},r=bd();n.propsDefaults=Object.create(null),wd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:ym(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function vg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Kt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(_a(n.emitsOptions,f))continue;const d=t[f];if(l)if(ie(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=An(f);s[g]=Ol(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{wd(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!ie(t,h)&&((u=Li(h))===h||!ie(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Ol(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!ie(t,h))&&(delete r[h],c=!0)}c&&ii(n.attrs,"set","")}function wd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(hr(l))continue;const c=t[l];let u;s&&ie(s,u=An(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:_a(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Kt(e),c=a||ue;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Ol(s,l,h,c[h],n,!ie(c,h))}}return o}function Ol(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ie(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Gt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Fr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Li(e))&&(i=!0))}return i}const xg=new WeakMap;function Ad(n,t,e=!1){const i=e?xg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Gt(n)){const u=h=>{l=!0;const[f,d]=Ad(h,t,!0);Ce(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return te(n)&&i.set(n,Ps),Ps;if(Ut(r))for(let u=0;u<r.length;u++){const h=An(r[u]);Fu(h)&&(o[h]=ue)}else if(r)for(const u in r){const h=An(u);if(Fu(h)){const f=r[u],d=o[h]=Ut(f)||Gt(f)?{type:f}:Ce({},f),g=d.type;let v=!1,p=!0;if(Ut(g))for(let m=0;m<g.length;++m){const w=g[m],b=Gt(w)&&w.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(p=!1)}else v=Gt(g)&&g.name==="Boolean";d[0]=v,d[1]=p,(v||ie(d,"default"))&&a.push(h)}}const c=[o,a];return te(n)&&i.set(n,c),c}function Fu(n){return n[0]!=="$"&&!hr(n)}const Yc=n=>n==="_"||n==="_ctx"||n==="$stable",jc=n=>Ut(n)?n.map(On):[On(n)],yg=(n,t,e)=>{if(t._n)return t;const i=od((...s)=>jc(t(...s)),e);return i._c=!1,i},Cd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Yc(s))continue;const r=n[s];if(Gt(r))t[s]=yg(s,r,i);else if(r!=null){const o=jc(r);t[s]=()=>o}}},Rd=(n,t)=>{const e=jc(t);n.slots.default=()=>e},Pd=(n,t,e)=>{for(const i in t)(e||!Yc(i))&&(n[i]=t[i])},Sg=(n,t,e)=>{const i=n.slots=bd();if(n.vnode.shapeFlag&32){const s=t._;s?(Pd(i,t,e),e&&Pf(i,"_",s,!0)):Cd(t,i)}else t&&Rd(n,t)},Mg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ue;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Pd(s,t,e):(r=!t.$stable,Cd(t,s)),o=t}else t&&(Rd(n,t),o={default:1});if(r)for(const a in s)!Yc(a)&&o[a]==null&&delete s[a]},Je=Ag;function Eg(n){return bg(n)}function bg(n,t){const e=ua();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Hn,insertStaticContent:g}=n,v=(C,y,j,Q=null,K=null,X=null,ot=void 0,et=null,M=!!y.dynamicChildren)=>{if(C===y)return;C&&!$i(C,y)&&(Q=xt(C),Nt(C,K,X,!0),C=null),y.patchFlag===-2&&(M=!1,y.dynamicChildren=null);const{type:_,ref:D,shapeFlag:F}=y;switch(_){case va:p(C,y,j,Q);break;case Xe:m(C,y,j,Q);break;case Oa:C==null&&w(y,j,Q,ot);break;case Ee:I(C,y,j,Q,K,X,ot,et,M);break;default:F&1?A(C,y,j,Q,K,X,ot,et,M):F&6?k(C,y,j,Q,K,X,ot,et,M):(F&64||F&128)&&_.process(C,y,j,Q,K,X,ot,et,M,qt)}D!=null&&K?mr(D,C&&C.ref,X,y||C,!y):D==null&&C&&C.ref!=null&&mr(C.ref,null,X,C,!0)},p=(C,y,j,Q)=>{if(C==null)i(y.el=a(y.children),j,Q);else{const K=y.el=C.el;y.children!==C.children&&c(K,y.children)}},m=(C,y,j,Q)=>{C==null?i(y.el=l(y.children||""),j,Q):y.el=C.el},w=(C,y,j,Q)=>{[C.el,C.anchor]=g(C.children,y,j,Q,C.el,C.anchor)},b=({el:C,anchor:y},j,Q)=>{let K;for(;C&&C!==y;)K=f(C),i(C,j,Q),C=K;i(y,j,Q)},S=({el:C,anchor:y})=>{let j;for(;C&&C!==y;)j=f(C),s(C),C=j;s(y)},A=(C,y,j,Q,K,X,ot,et,M)=>{if(y.type==="svg"?ot="svg":y.type==="math"&&(ot="mathml"),C==null)R(y,j,Q,K,X,ot,et,M);else{const _=C.el&&C.el._isVueCE?C.el:null;try{_&&_._beginPatch(),H(C,y,K,X,ot,et,M)}finally{_&&_._endPatch()}}},R=(C,y,j,Q,K,X,ot,et)=>{let M,_;const{props:D,shapeFlag:F,transition:$,dirs:V}=C;if(M=C.el=o(C.type,X,D&&D.is,D),F&8?u(M,C.children):F&16&&L(C.children,M,null,Q,K,Fa(C,X),ot,et),V&&Ui(C,null,Q,"created"),P(M,C,C.scopeId,ot,Q),D){for(const at in D)at!=="value"&&!hr(at)&&r(M,at,null,D[at],X,Q);"value"in D&&r(M,"value",null,D.value,X),(_=D.onVnodeBeforeMount)&&Un(_,Q,C)}V&&Ui(C,null,Q,"beforeMount");const ht=Tg(K,$);ht&&$.beforeEnter(M),i(M,y,j),((_=D&&D.onVnodeMounted)||ht||V)&&Je(()=>{try{_&&Un(_,Q,C),ht&&$.enter(M),V&&Ui(C,null,Q,"mounted")}finally{}},K)},P=(C,y,j,Q,K)=>{if(j&&d(C,j),Q)for(let X=0;X<Q.length;X++)d(C,Q[X]);if(K){let X=K.subTree;if(y===X||Ud(X.type)&&(X.ssContent===y||X.ssFallback===y)){const ot=K.vnode;P(C,ot,ot.scopeId,ot.slotScopeIds,K.parent)}}},L=(C,y,j,Q,K,X,ot,et,M=0)=>{for(let _=M;_<C.length;_++){const D=C[_]=et?ni(C[_]):On(C[_]);v(null,D,y,j,Q,K,X,ot,et)}},H=(C,y,j,Q,K,X,ot)=>{const et=y.el=C.el;let{patchFlag:M,dynamicChildren:_,dirs:D}=y;M|=C.patchFlag&16;const F=C.props||ue,$=y.props||ue;let V;if(j&&Ni(j,!1),(V=$.onVnodeBeforeUpdate)&&Un(V,j,y,C),D&&Ui(y,C,j,"beforeUpdate"),j&&Ni(j,!0),_&&(!C.dynamicChildren||C.dynamicChildren.length!==_.length)&&(M=0,ot=!1,_=null),(F.innerHTML&&$.innerHTML==null||F.textContent&&$.textContent==null)&&u(et,""),_?x(C.dynamicChildren,_,et,j,Q,Fa(y,K),X):ot||B(C,y,et,null,j,Q,Fa(y,K),X,!1),M>0){if(M&16)E(et,F,$,j,K);else if(M&2&&F.class!==$.class&&r(et,"class",null,$.class,K),M&4&&r(et,"style",F.style,$.style,K),M&8){const ht=y.dynamicProps;for(let at=0;at<ht.length;at++){const ct=ht[at],Lt=F[ct],rt=$[ct];(rt!==Lt||ct==="value")&&r(et,ct,Lt,rt,K,j)}}M&1&&C.children!==y.children&&u(et,y.children)}else!ot&&_==null&&E(et,F,$,j,K);((V=$.onVnodeUpdated)||D)&&Je(()=>{V&&Un(V,j,y,C),D&&Ui(y,C,j,"updated")},Q)},x=(C,y,j,Q,K,X,ot)=>{for(let et=0;et<y.length;et++){const M=C[et],_=y[et],D=M.el&&(M.type===Ee||!$i(M,_)||M.shapeFlag&198)?h(M.el):j;v(M,_,D,null,Q,K,X,ot,!0)}},E=(C,y,j,Q,K)=>{if(y!==j){if(y!==ue)for(const X in y)!hr(X)&&!(X in j)&&r(C,X,y[X],null,K,Q);for(const X in j){if(hr(X))continue;const ot=j[X],et=y[X];ot!==et&&X!=="value"&&r(C,X,et,ot,K,Q)}"value"in j&&r(C,"value",y.value,j.value,K)}},I=(C,y,j,Q,K,X,ot,et,M)=>{const _=y.el=C?C.el:a(""),D=y.anchor=C?C.anchor:a("");let{patchFlag:F,dynamicChildren:$,slotScopeIds:V}=y;V&&(et=et?et.concat(V):V),C==null?(i(_,j,Q),i(D,j,Q),L(y.children||[],j,D,K,X,ot,et,M)):F>0&&F&64&&$&&C.dynamicChildren&&C.dynamicChildren.length===$.length?(x(C.dynamicChildren,$,j,K,X,ot,et),(y.key!=null||K&&y===K.subTree)&&Ld(C,y,!0)):B(C,y,j,D,K,X,ot,et,M)},k=(C,y,j,Q,K,X,ot,et,M)=>{y.slotScopeIds=et,C==null?y.shapeFlag&512?K.ctx.activate(y,j,Q,ot,M):J(y,j,Q,K,X,ot,M):it(C,y,M)},J=(C,y,j,Q,K,X,ot)=>{const et=C.component=Ug(C,Q,K);if(pa(C)&&(et.ctx.renderer=qt),Ng(et,!1,ot),et.asyncDep){if(K&&K.registerDep(et,G,ot),!C.el){const M=et.subTree=xe(Xe);m(null,M,y,j),C.placeholder=M.el}}else G(et,C,y,j,K,X,ot)},it=(C,y,j)=>{const Q=y.component=C.component;if(mg(C,y,j))if(Q.asyncDep&&!Q.asyncResolved){W(Q,y,j);return}else Q.next=y,Q.update();else y.el=C.el,Q.vnode=y},G=(C,y,j,Q,K,X,ot)=>{const et=()=>{if(C.isMounted){let{next:F,bu:$,u:V,parent:ht,vnode:at}=C;{const Ct=Dd(C);if(Ct){F&&(F.el=at.el,W(C,F,ot)),Ct.asyncDep.then(()=>{Je(()=>{C.isUnmounted||_()},K)});return}}let ct=F,Lt;Ni(C,!1),F?(F.el=at.el,W(C,F,ot)):F=at,$&&wo($),(Lt=F.props&&F.props.onVnodeBeforeUpdate)&&Un(Lt,ht,F,at),Ni(C,!0);const rt=Uu(C),gt=C.subTree;C.subTree=rt,v(gt,rt,h(gt.el),xt(gt),C,K,X),F.el=rt.el,ct===null&&gg(C,rt.el),V&&Je(V,K),(Lt=F.props&&F.props.onVnodeUpdated)&&Je(()=>Un(Lt,ht,F,at),K)}else{let F;const{el:$,props:V}=y,{bm:ht,m:at,parent:ct,root:Lt,type:rt}=C,gt=gr(y);Ni(C,!1),ht&&wo(ht),!gt&&(F=V&&V.onVnodeBeforeMount)&&Un(F,ct,y),Ni(C,!0);{Lt.ce&&Lt.ce._hasShadowRoot()&&Lt.ce._injectChildStyle(rt,C.parent?C.parent.type:void 0);const Ct=C.subTree=Uu(C);v(null,Ct,j,Q,C,K,X),y.el=Ct.el}if(at&&Je(at,K),!gt&&(F=V&&V.onVnodeMounted)){const Ct=y;Je(()=>Un(F,ct,Ct),K)}(y.shapeFlag&256||ct&&gr(ct.vnode)&&ct.vnode.shapeFlag&256)&&C.a&&Je(C.a,K),C.isMounted=!0,y=j=Q=null}};C.scope.on();const M=C.effect=new Of(et);C.scope.off();const _=C.update=M.run.bind(M),D=C.job=M.runIfDirty.bind(M);D.i=C,D.id=C.uid,M.scheduler=()=>$c(D),Ni(C,!0),_()},W=(C,y,j)=>{y.component=C;const Q=C.vnode.props;C.vnode=y,C.next=null,vg(C,y.props,Q,j),Mg(C,y.children,j),Wn(),wu(C),Xn()},B=(C,y,j,Q,K,X,ot,et,M=!1)=>{const _=C&&C.children,D=C?C.shapeFlag:0,F=y.children,{patchFlag:$,shapeFlag:V}=y;if($>0){if($&128){pt(_,F,j,Q,K,X,ot,et,M);return}else if($&256){ut(_,F,j,Q,K,X,ot,et,M);return}}V&8?(D&16&&vt(_,K,X),F!==_&&u(j,F)):D&16?V&16?pt(_,F,j,Q,K,X,ot,et,M):vt(_,K,X,!0):(D&8&&u(j,""),V&16&&L(F,j,Q,K,X,ot,et,M))},ut=(C,y,j,Q,K,X,ot,et,M)=>{C=C||Ps,y=y||Ps;const _=C.length,D=y.length,F=Math.min(_,D);let $;for($=0;$<F;$++){const V=y[$]=M?ni(y[$]):On(y[$]);v(C[$],V,j,null,K,X,ot,et,M)}_>D?vt(C,K,X,!0,!1,F):L(y,j,Q,K,X,ot,et,M,F)},pt=(C,y,j,Q,K,X,ot,et,M)=>{let _=0;const D=y.length;let F=C.length-1,$=D-1;for(;_<=F&&_<=$;){const V=C[_],ht=y[_]=M?ni(y[_]):On(y[_]);if($i(V,ht))v(V,ht,j,null,K,X,ot,et,M);else break;_++}for(;_<=F&&_<=$;){const V=C[F],ht=y[$]=M?ni(y[$]):On(y[$]);if($i(V,ht))v(V,ht,j,null,K,X,ot,et,M);else break;F--,$--}if(_>F){if(_<=$){const V=$+1,ht=V<D?y[V].el:Q;for(;_<=$;)v(null,y[_]=M?ni(y[_]):On(y[_]),j,ht,K,X,ot,et,M),_++}}else if(_>$)for(;_<=F;)Nt(C[_],K,X,!0),_++;else{const V=_,ht=_,at=new Map;for(_=ht;_<=$;_++){const Ot=y[_]=M?ni(y[_]):On(y[_]);Ot.key!=null&&at.set(Ot.key,_)}let ct,Lt=0;const rt=$-ht+1;let gt=!1,Ct=0;const It=new Array(rt);for(_=0;_<rt;_++)It[_]=0;for(_=V;_<=F;_++){const Ot=C[_];if(Lt>=rt){Nt(Ot,K,X,!0);continue}let Dt;if(Ot.key!=null)Dt=at.get(Ot.key);else for(ct=ht;ct<=$;ct++)if(It[ct-ht]===0&&$i(Ot,y[ct])){Dt=ct;break}Dt===void 0?Nt(Ot,K,X,!0):(It[Dt-ht]=_+1,Dt>=Ct?Ct=Dt:gt=!0,v(Ot,y[Dt],j,null,K,X,ot,et,M),Lt++)}const bt=gt?wg(It):Ps;for(ct=bt.length-1,_=rt-1;_>=0;_--){const Ot=ht+_,Dt=y[Ot],re=y[Ot+1],N=Ot+1<D?re.el||Id(re):Q;It[_]===0?v(null,Dt,j,N,K,X,ot,et,M):gt&&(ct<0||_!==bt[ct]?_t(Dt,j,N,2):ct--)}}},_t=(C,y,j,Q,K=null)=>{const{el:X,type:ot,transition:et,children:M,shapeFlag:_}=C;if(_&6){_t(C.component.subTree,y,j,Q);return}if(_&128){C.suspense.move(y,j,Q);return}if(_&64){ot.move(C,y,j,qt);return}if(ot===Ee){i(X,y,j);for(let F=0;F<M.length;F++)_t(M[F],y,j,Q);i(C.anchor,y,j);return}if(ot===Oa){b(C,y,j);return}if(Q!==2&&_&1&&et)if(Q===0)et.persisted&&!X[dn]?i(X,y,j):(et.beforeEnter(X),i(X,y,j),Je(()=>et.enter(X),K));else{const{leave:F,delayLeave:$,afterLeave:V}=et,ht=()=>{C.ctx.isUnmounted?s(X):i(X,y,j)},at=()=>{const ct=X._isLeaving||!!X[dn];X._isLeaving&&X[dn](!0),et.persisted&&!ct?ht():F(X,()=>{ht(),V&&V()})};$?$(X,ht,at):at()}else i(X,y,j)},Nt=(C,y,j,Q=!1,K=!1)=>{const{type:X,props:ot,ref:et,children:M,dynamicChildren:_,shapeFlag:D,patchFlag:F,dirs:$,cacheIndex:V,memo:ht}=C;if(F===-2&&(K=!1),et!=null&&(Wn(),mr(et,null,j,C,!0),Xn()),V!=null&&(y.renderCache[V]=void 0),D&256){y.ctx.deactivate(C);return}const at=D&1&&$,ct=!gr(C);let Lt;if(ct&&(Lt=ot&&ot.onVnodeBeforeUnmount)&&Un(Lt,y,C),D&6)lt(C.component,j,Q);else{if(D&128){C.suspense.unmount(j,Q);return}at&&Ui(C,null,y,"beforeUnmount"),D&64?C.type.remove(C,y,j,qt,Q):_&&!_.hasOnce&&(X!==Ee||F>0&&F&64)?vt(_,y,j,!1,!0):(X===Ee&&F&384||!K&&D&16)&&vt(M,y,j),Q&&jt(C)}const rt=ht!=null&&V==null;(ct&&(Lt=ot&&ot.onVnodeUnmounted)||at||rt)&&Je(()=>{Lt&&Un(Lt,y,C),at&&Ui(C,null,y,"unmounted"),rt&&(C.el=null)},j)},jt=C=>{const{type:y,el:j,anchor:Q,transition:K}=C;if(y===Ee){nt(j,Q);return}if(y===Oa){S(C);return}const X=()=>{s(j),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(C.shapeFlag&1&&K&&!K.persisted){const{leave:ot,delayLeave:et}=K,M=()=>ot(j,X);et?et(C.el,X,M):M()}else X()},nt=(C,y)=>{let j;for(;C!==y;)j=f(C),s(C),C=j;s(y)},lt=(C,y,j)=>{const{bum:Q,scope:K,job:X,subTree:ot,um:et,m:M,a:_}=C;Ou(M),Ou(_),Q&&wo(Q),K.stop(),X&&(X.flags|=8,Nt(ot,C,y,j)),et&&Je(et,y),Je(()=>{C.isUnmounted=!0},y)},vt=(C,y,j,Q=!1,K=!1,X=0)=>{for(let ot=X;ot<C.length;ot++)Nt(C[ot],y,j,Q,K)},xt=C=>{if(C.shapeFlag&6)return xt(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const y=f(C.anchor||C.el),j=y&&y[Hm];return j?f(j):y};let zt=!1;const Ft=(C,y,j)=>{let Q;C==null?y._vnode&&(Nt(y._vnode,null,null,!0),Q=y._vnode.component):v(y._vnode||null,C,y,null,null,null,j),y._vnode=C,zt||(zt=!0,wu(Q),id(),zt=!1)},qt={p:v,um:Nt,m:_t,r:jt,mt:J,mc:L,pc:B,pbc:x,n:xt,o:n};return{render:Ft,hydrate:void 0,createApp:cg(Ft)}}function Fa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ni({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Tg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Ld(n,t,e=!1){const i=n.children,s=t.children;if(Ut(i)&&Ut(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ni(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Ld(o,a)),a.type===va&&(a.patchFlag===-1&&(a=s[r]=ni(a)),a.el=o.el),a.type===Xe&&!a.el&&(a.el=o.el)}}function wg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Dd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Dd(t)}function Ou(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Id(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Id(t.subTree):null}const Ud=n=>n.__isSuspense;function Ag(n,t){t&&t.pendingBranch?Ut(n)?t.effects.push(...n):t.effects.push(n):Um(n)}const Ee=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Oa=Symbol.for("v-stc"),vr=[];let ln=null;function Wt(n=!1){vr.push(ln=n?null:[])}function Cg(){vr.pop(),ln=vr[vr.length-1]||null}let Tr=1;function Wo(n,t=!1){Tr+=n,n<0&&ln&&t&&(ln.hasOnce=!0)}function Nd(n){return n.dynamicChildren=Tr>0?ln||Ps:null,Cg(),Tr>0&&ln&&ln.push(n),n}function Yt(n,t,e,i,s,r){return Nd(Z(n,t,e,i,s,r,!0))}function Xo(n,t,e,i,s){return Nd(xe(n,t,e,i,s,!0))}function $o(n){return n?n.__v_isVNode===!0:!1}function $i(n,t){return n.type===t.type&&n.key===t.key}const Fd=({key:n})=>n??null,Ao=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ge(n)||me(n)||Gt(n)?{i:gn,r:n,k:t,f:!!e}:n:null);function Z(n,t=null,e=null,i=0,s=null,r=n===Ee?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Fd(t),ref:t&&Ao(t),scopeId:rd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gn};return a?(qo(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ge(e)?8:16),Tr>0&&!o&&ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ln.push(l),l}const xe=Rg;function Rg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===eg)&&(n=Xe),$o(n)){const a=Ri(n,t,!0);return e&&qo(a,e),Tr>0&&!r&&ln&&(a.shapeFlag&6?ln[ln.indexOf(n)]=a:ln.push(a)),a.patchFlag=-2,a}if(zg(n)&&(n=n.__vccOpts),t){t=Pg(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=De(a)),te(l)&&(fa(l)&&!Ut(l)&&(l=Ce({},l)),t.style=Ur(l))}const o=ge(n)?1:Ud(n)?128:cd(n)?64:te(n)?4:Gt(n)?2:0;return Z(n,t,e,i,s,o,r,!0)}function Pg(n){return n?fa(n)||Td(n)?Ce({},n):n:null}function Ri(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Lg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Fd(c),ref:t&&t.ref?e&&r?Ut(r)?r.concat(Ao(t)):[r,Ao(t)]:Ao(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ee?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ri(n.ssContent),ssFallback:n.ssFallback&&Ri(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&br(u,l.clone(u)),u}function wi(n=" ",t=0){return xe(va,null,n,t)}function rn(n="",t=!1){return t?(Wt(),Xo(Xe,null,n)):xe(Xe,null,n)}function On(n){return n==null||typeof n=="boolean"?xe(Xe):Ut(n)?xe(Ee,null,n.slice()):$o(n)?ni(n):xe(va,null,String(n))}function ni(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ri(n)}function qo(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ut(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),qo(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Td(t)?t._ctx=gn:s===3&&gn&&(gn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Gt(t)){if(i&65){qo(n,{default:t});return}t={default:t,_ctx:gn},e=32}else t=String(t),i&64?(e=16,t=[wi(t)]):e=8;n.children=t,n.shapeFlag|=e}function Lg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=De([t.class,i.class]));else if(s==="style")t.style=Ur([t.style,i.style]);else if(oa(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ut(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!aa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Un(n,t,e,i=null){Sn(n,t,7,[e,i])}const Dg=yd();let Ig=0;function Ug(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Dg,r={uid:Ig++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Uf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ad(i,s),emitsOptions:Sd(i,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:i.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=hg.bind(null,r),n.ce&&n.ce(r),r}let $e=null;const Kc=()=>$e||gn;let Yo,Bl;{const n=ua(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Yo=t("__VUE_INSTANCE_SETTERS__",e=>$e=e),Bl=t("__VUE_SSR_SETTERS__",e=>wr=e)}const Fr=n=>{const t=$e;return Yo(n),n.scope.on(),()=>{n.scope.off(),Yo(t)}},Bu=()=>{$e&&$e.scope.off(),Yo(null)};function Od(n){return n.vnode.shapeFlag&4}let wr=!1;function Ng(n,t=!1,e=!1){t&&Bl(t);const{props:i,children:s}=n.vnode,r=Od(n);_g(n,i,r,t),Sg(n,s,e||t);const o=r?Fg(n,t):void 0;return t&&Bl(!1),o}function Fg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ng);const{setup:i}=e;if(i){Wn();const s=n.setupContext=i.length>1?Bg(n):null,r=Fr(n),o=Nr(i,n,0,[n.props,s]),a=wf(o);if(Xn(),r(),(a||n.sp)&&!gr(n)&&md(n),a){if(o.then(Bu,Bu),t)return o.then(l=>{zu(n,l)}).catch(l=>{da(l,n,0)});n.asyncDep=o}else zu(n,o)}else Bd(n)}function zu(n,t,e){Gt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:te(t)&&(n.setupState=Jf(t)),Bd(n)}function Bd(n,t,e){const i=n.type;n.render||(n.render=i.render||Hn);{const s=Fr(n);Wn();try{ig(n)}finally{Xn(),s()}}}const Og={get(n,t){return ke(n,"get",""),n[t]}};function Bg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Og),slots:n.slots,emit:n.emit,expose:t}}function xa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Jf(Xc(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in _r)return _r[e](n)},has(t,e){return e in t||e in _r}})):n.proxy}function zg(n){return Gt(n)&&"__vccOpts"in n}const Ne=(n,t)=>Rm(n,t,wr);function kg(n,t,e){try{Wo(-1);const i=arguments.length;return i===2?te(t)&&!Ut(t)?$o(t)?xe(n,null,[t]):xe(n,t):xe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&$o(e)&&(e=[e]),xe(n,t,e))}finally{Wo(1)}}const Hg="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zl;const ku=typeof window<"u"&&window.trustedTypes;if(ku)try{zl=ku.createPolicy("vue",{createHTML:n=>n})}catch{}const zd=zl?n=>zl.createHTML(n):n=>n,Vg="http://www.w3.org/2000/svg",Gg="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,Hu=ei&&ei.createElement("template"),Wg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ei.createElementNS(Vg,n):t==="mathml"?ei.createElementNS(Gg,n):e?ei.createElement(n,{is:e}):ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Hu.innerHTML=zd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Hu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},pi="transition",Zs="animation",Ar=Symbol("_vtc"),kd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xg=Ce({},ud,kd),$g=n=>(n.displayName="Transition",n.props=Xg,n),qg=$g((n,{slots:t})=>kg(Wm,Yg(n),t)),Fi=(n,t=[])=>{Ut(n)?n.forEach(e=>e(...t)):n&&n(...t)},Vu=n=>n?Ut(n)?n.some(t=>t.length>1):n.length>1:!1;function Yg(n){const t={};for(const I in n)I in kd||(t[I]=n[I]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=jg(s),v=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:w,onEnterCancelled:b,onLeave:S,onLeaveCancelled:A,onBeforeAppear:R=m,onAppear:P=w,onAppearCancelled:L=b}=t,H=(I,k,J,it)=>{I._enterCancelled=it,Oi(I,k?u:a),Oi(I,k?c:o),J&&J()},x=(I,k)=>{I._isLeaving=!1,Oi(I,h),Oi(I,d),Oi(I,f),k&&k()},E=I=>(k,J)=>{const it=I?P:w,G=()=>H(k,I,J);Fi(it,[k,G]),Gu(()=>{Oi(k,I?l:r),Yn(k,I?u:a),Vu(it)||Wu(k,i,v,G)})};return Ce(t,{onBeforeEnter(I){Fi(m,[I]),Yn(I,r),Yn(I,o)},onBeforeAppear(I){Fi(R,[I]),Yn(I,l),Yn(I,c)},onEnter:E(!1),onAppear:E(!0),onLeave(I,k){I._isLeaving=!0;const J=()=>x(I,k);Yn(I,h),I._enterCancelled?(Yn(I,f),qu(I)):(qu(I),Yn(I,f)),Gu(()=>{I._isLeaving&&(Oi(I,h),Yn(I,d),Vu(S)||Wu(I,i,p,J))}),Fi(S,[I,J])},onEnterCancelled(I){H(I,!1,void 0,!0),Fi(b,[I])},onAppearCancelled(I){H(I,!0,void 0,!0),Fi(L,[I])},onLeaveCancelled(I){x(I),Fi(A,[I])}})}function jg(n){if(n==null)return null;if(te(n))return[Ba(n.enter),Ba(n.leave)];{const t=Ba(n);return[t,t]}}function Ba(n){return Yp(n)}function Yn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Ar]||(n[Ar]=new Set)).add(t)}function Oi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Ar];e&&(e.delete(t),e.size||(n[Ar]=void 0))}function Gu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Kg=0;function Wu(n,t,e,i){const s=n._endId=++Kg,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=Zg(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function Zg(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${pi}Delay`),r=i(`${pi}Duration`),o=Xu(s,r),a=i(`${Zs}Delay`),l=i(`${Zs}Duration`),c=Xu(a,l);let u=null,h=0,f=0;t===pi?o>0&&(u=pi,h=o,f=r.length):t===Zs?c>0&&(u=Zs,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?pi:Zs:null,f=u?u===pi?r.length:l.length:0);const d=u===pi&&/\b(?:transform|all)(?:,|$)/.test(i(`${pi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Xu(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>$u(e)+$u(n[i])))}function $u(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function qu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Jg(n,t,e){const i=n[Ar];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Yu=Symbol("_vod"),Qg=Symbol("_vsh"),t_=Symbol(""),e_=/(?:^|;)\s*display\s*:/;function n_(n,t,e){const i=n.style,s=ge(e);let r=!1;if(e&&!s){if(t)if(ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&cr(i,a,"")}else for(const o in t)e[o]==null&&cr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?s_(n,o,!ge(t)&&t?t[o]:void 0,a)||cr(i,o,a):cr(i,o,"")}}else if(s){if(t!==e){const o=i[t_];o&&(e+=";"+o),i.cssText=e,r=e_.test(e)}}else t&&n.removeAttribute("style");Yu in n&&(n[Yu]=r?i.display:"",n[Qg]&&(i.display="none"))}const ju=/\s*!important$/;function cr(n,t,e){if(Ut(e))e.forEach(i=>cr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=i_(n,t);ju.test(e)?n.setProperty(Li(i),e.replace(ju,""),"important"):n[i]=e}}const Ku=["Webkit","Moz","ms"],za={};function i_(n,t){const e=za[t];if(e)return e;let i=An(t);if(i!=="filter"&&i in n)return za[t]=i;i=Rf(i);for(let s=0;s<Ku.length;s++){const r=Ku[s]+i;if(r in n)return za[t]=r}return t}function s_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ge(i)&&e===i}const Zu="http://www.w3.org/1999/xlink";function Ju(n,t,e,i,s,r=tm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Zu,t.slice(6,t.length)):n.setAttributeNS(Zu,t,e):e==null||r&&!Lf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":yn(e)?String(e):e)}function Qu(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?zd(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Lf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function As(n,t,e,i){n.addEventListener(t,e,i)}function r_(n,t,e,i){n.removeEventListener(t,e,i)}const th=Symbol("_vei");function o_(n,t,e,i,s=null){const r=n[th]||(n[th]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=c_(t);if(i){const c=r[t]=f_(i,s);As(n,a,c,l)}else o&&(r_(n,a,o,l),r[t]=void 0)}}const a_=/(Once|Passive|Capture)$/,l_=/^on:?(?:Once|Passive|Capture)$/;function c_(n){let t,e;for(;(e=n.match(a_))&&!l_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Li(n.slice(2)),t]}let ka=0;const u_=Promise.resolve(),h_=()=>ka||(u_.then(()=>ka=0),ka=Date.now());function f_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ut(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Sn(c,t,5,a)}}else Sn(s,t,5,[i])};return e.value=n,e.attached=h_(),e}const eh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,d_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Jg(n,i,o):t==="style"?n_(n,e,i):oa(t)?aa(t)||o_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):p_(n,t,i,o))?(Qu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ju(n,t,i,o,r,t!=="value")):n._isVueCE&&(m_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!ge(i)))?Qu(n,An(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Ju(n,t,i,o))};function p_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&eh(t)&&Gt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return eh(t)&&ge(e)?!1:t in n}function m_(n,t){const e=n._def.props;if(!e)return!1;const i=An(t);return Array.isArray(e)?e.some(s=>An(s)===i):Object.keys(e).some(s=>An(s)===i)}const nh=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ut(t)?e=>wo(t,e):t};function g_(n){n.target.composing=!0}function ih(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ha=Symbol("_assign");function sh(n,t,e){return t&&(n=n.trim()),e&&(n=Fc(n)),n}const __={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[Ha]=nh(s);const r=i||s.props&&s.props.type==="number";As(n,t?"change":"input",o=>{o.target.composing||n[Ha](sh(n.value,e,r))}),(e||r)&&As(n,"change",()=>{n.value=sh(n.value,e,r)}),t||(As(n,"compositionstart",g_),As(n,"compositionend",ih),As(n,"change",ih))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ha]=nh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Fc(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},v_=["ctrl","shift","alt","meta"],x_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>v_.some(e=>n[`${e}Key`]&&!t.includes(e))},y_=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=x_[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},S_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},M_=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=(s=>{if(!("key"in s))return;const r=Li(s.key);if(t.some(o=>o===r||S_[o]===r))return n(s)}))},E_=Ce({patchProp:d_},Wg);let rh;function b_(){return rh||(rh=Eg(E_))}const T_=((...n)=>{const t=b_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=A_(i);if(!s)return;const r=t._component;!Gt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,w_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function w_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function A_(n){return ge(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Hd;const ya=n=>Hd=n,Vd=Symbol();function kl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var xr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(xr||(xr={}));function C_(){const n=Nf(!0),t=n.run(()=>Gn({}));let e=[],i=[];const s=Xc({install(r){ya(s),s._a=r,r.provide(Vd,s),r.config.globalProperties.$pinia=s,i.forEach(o=>e.push(o)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}const Gd=()=>{};function oh(n,t,e,i=Gd){n.push(t);const s=()=>{const r=n.indexOf(t);r>-1&&(n.splice(r,1),i())};return!e&&Bc()&&Ff(s),s}function as(n,...t){n.slice().forEach(e=>{e(...t)})}const R_=n=>n(),ah=Symbol(),Va=Symbol();function Hl(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,i)=>n.set(i,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const i=t[e],s=n[e];kl(s)&&kl(i)&&n.hasOwnProperty(e)&&!me(i)&&!Vn(i)?n[e]=Hl(s,i):n[e]=i}return n}const P_=Symbol();function L_(n){return!kl(n)||!n.hasOwnProperty(P_)}const{assign:Si}=Object;function D_(n){return!!(me(n)&&n.effect)}function I_(n,t,e,i){const{state:s,actions:r,getters:o}=t,a=e.state.value[n];let l;function c(){a||(e.state.value[n]=s?s():{});const u=bm(e.state.value[n]);return Si(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Xc(Ne(()=>{ya(e);const d=e._s.get(n);return o[f].call(d,d)})),h),{}))}return l=Wd(n,c,t,e,i,!0),l}function Wd(n,t,e={},i,s,r){let o;const a=Si({actions:{}},e),l={deep:!0};let c,u,h=[],f=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={});let v;function p(L){let H;c=u=!1,typeof L=="function"?(L(i.state.value[n]),H={type:xr.patchFunction,storeId:n,events:d}):(Hl(i.state.value[n],L),H={type:xr.patchObject,payload:L,storeId:n,events:d});const x=v=Symbol();ed().then(()=>{v===x&&(c=!0)}),u=!0,as(h,H,i.state.value[n])}const m=r?function(){const{state:H}=e,x=H?H():{};this.$patch(E=>{Si(E,x)})}:Gd;function w(){o.stop(),h=[],f=[],i._s.delete(n)}const b=(L,H="")=>{if(ah in L)return L[Va]=H,L;const x=function(){ya(i);const E=Array.from(arguments),I=[],k=[];function J(W){I.push(W)}function it(W){k.push(W)}as(f,{args:E,name:x[Va],store:A,after:J,onError:it});let G;try{G=L.apply(this&&this.$id===n?this:A,E)}catch(W){throw as(k,W),W}return G instanceof Promise?G.then(W=>(as(I,W),W)).catch(W=>(as(k,W),Promise.reject(W))):(as(I,G),G)};return x[ah]=!0,x[Va]=H,x},S={_p:i,$id:n,$onAction:oh.bind(null,f),$patch:p,$reset:m,$subscribe(L,H={}){const x=oh(h,L,H.detached,()=>E()),E=o.run(()=>an(()=>i.state.value[n],I=>{(H.flush==="sync"?u:c)&&L({storeId:n,type:xr.direct,events:d},I)},Si({},l,H)));return x},$dispose:w},A=Os(S);i._s.set(n,A);const P=(i._a&&i._a.runWithContext||R_)(()=>i._e.run(()=>(o=Nf()).run(()=>t({action:b}))));for(const L in P){const H=P[L];if(me(H)&&!D_(H)||Vn(H))r||(g&&L_(H)&&(me(H)?H.value=g[L]:Hl(H,g[L])),i.state.value[n][L]=H);else if(typeof H=="function"){const x=b(H,L);P[L]=x,a.actions[L]=H}}return Si(A,P),Si(Kt(A),P),Object.defineProperty(A,"$state",{get:()=>i.state.value[n],set:L=>{p(H=>{Si(H,L)})}}),i._p.forEach(L=>{Si(A,o.run(()=>L({store:A,app:i._a,pinia:i,options:a})))}),g&&r&&e.hydrate&&e.hydrate(A.$state,g),c=!0,u=!0,A}/*! #__NO_SIDE_EFFECTS__ */function U_(n,t,e){let i,s;const r=typeof t=="function";i=n,s=r?e:t;function o(a,l){const c=Om();return a=a||(c?pr(Vd,null):null),a&&ya(a),a=Hd,a._s.has(i)||(r?Wd(i,t,s,a):I_(i,s,a)),a._s.get(i)}return o.$id=i,o}function Xd(n){{const t=Kt(n),e={};for(const i in t){const s=t[i];s.effect?e[i]=Ne({get:()=>n[i],set(r){n[i]=r}}):(me(s)||Vn(s))&&(e[i]=Am(n,i))}return e}}const N_={slogan:"32,657 位诗人、933,857 首诗，把中国全历史的诗歌放进了一片三维星系。"},Zc={屈原:{weight:1.9,glow:"#61f0c8",aliases:["灵均"]},曹操:{weight:1.45,glow:"#ffb46d",aliases:["魏武帝","孟德"]},陶渊明:{weight:1.62,glow:"#c9f5c6",aliases:["陶潜","靖节先生"]},王维:{weight:1.58,glow:"#b8e8ff",aliases:["摩诘"]},李白:{weight:2.35,glow:"#fff0a8",aliases:["太白","青莲居士","谪仙"]},杜甫:{weight:2.35,glow:"#d8e9ff",aliases:["少陵","子美"]},白居易:{weight:1.9,glow:"#ffe1a6",aliases:["香山","乐天"]},李商隐:{weight:1.62,glow:"#d8bbff",aliases:["义山"]},杜牧:{weight:1.58,glow:"#ffd4a1",aliases:["牧之"]},苏轼:{weight:2.1,glow:"#ffd487",aliases:["东坡","子瞻"]},黄庭坚:{weight:1.52,glow:"#a7e6ff",aliases:["山谷","鲁直"]},李清照:{weight:1.86,glow:"#eadcff",aliases:["易安"]},辛弃疾:{weight:1.88,glow:"#b9dfff",aliases:["稼轩"]},陆游:{weight:1.72,glow:"#c8ddff",aliases:["放翁"]},纳兰性德:{weight:1.55,glow:"#d9e9ff",aliases:["容若"]},龚自珍:{weight:1.45,glow:"#d1f5ff",aliases:["定庵"]},徐志摩:{weight:1.35,glow:"#dbb8ff",aliases:[]},戴望舒:{weight:1.28,glow:"#c8b7ff",aliases:[]},海子:{weight:1.32,glow:"#ffe2a8",aliases:[]},北岛:{weight:1.26,glow:"#b5e4ff",aliases:[]},顾城:{weight:1.24,glow:"#d6c6ff",aliases:[]}};function Cr(n){return Zc[n]?.weight??1}function F_(n){return Zc[n]?.glow}function Jc(n){return Zc[n]?.aliases??[]}const jo=[{key:"先秦",canonical:["xianqin"],label:"先秦",color:"#38e6b7",glow:"#8fffe5",timeRank:0,radius:110,armOffset:.2},{key:"汉魏",canonical:["qinhan","hanwei"],label:"汉魏",color:"#ffb15f",glow:"#ffd89b",timeRank:1,radius:150,armOffset:.65},{key:"晋",canonical:["weijin","jin","nanbeichao","sui"],label:"魏晋南北朝",color:"#9de7ff",glow:"#c7f6ff",timeRank:2,radius:190,armOffset:1.05},{key:"唐",canonical:["tang"],label:"唐",color:"#fff1a8",glow:"#fff8d0",timeRank:3,radius:245,armOffset:1.55},{key:"宋",canonical:["song"],label:"宋",color:"#72c7ff",glow:"#b8e6ff",timeRank:4,radius:305,armOffset:2.15},{key:"元",canonical:["yuan"],label:"元",color:"#a998ff",glow:"#d1c8ff",timeRank:5,radius:365,armOffset:2.65},{key:"明",canonical:["ming"],label:"明",color:"#ff8c61",glow:"#ffc1a9",timeRank:6,radius:425,armOffset:3.15},{key:"清",canonical:["qing"],label:"清",color:"#b7d9ff",glow:"#e5f1ff",timeRank:7,radius:485,armOffset:3.75},{key:"近现代",canonical:["jinxiandai"],label:"近现代",color:"#c4a2ff",glow:"#eadcff",timeRank:8,radius:545,armOffset:4.25},{key:"当代",canonical:["dangdai"],label:"当代",color:"#6df4ff",glow:"#b7fbff",timeRank:9,radius:610,armOffset:4.75}],Rr=["全部",...jo.map(n=>n.key)];function $d(n){const t=Ko(n);return jo.find(e=>e.key===t||e.canonical.includes(n))??jo[3]}function Ko(n){if(!n)return"唐";const t=n.toLowerCase(),e=jo.find(i=>i.key===n||i.canonical.includes(t));return e?e.key:/先秦|诗经|楚辞/.test(n)?"先秦":/秦|汉|魏/.test(n)?"汉魏":/晋|南北|隋/.test(n)?"晋":/唐|五代/.test(n)?"唐":/宋|辽|金/.test(n)?"宋":/元/.test(n)?"元":/明/.test(n)?"明":/清/.test(n)?"清":/近|现代|民国/.test(n)?"近现代":/当代|现当代/.test(n)?"当代":"唐"}function O_(n){return $d(n).color}function B_(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Qc(n){let t=B_(n)||1;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function z_(n){const t=$d(n.dynasty),e=Qc(`poet:${n.id}:${n.dynasty}`),i=4,s=Math.floor(e()*i),r=(e()-.5)*72,o=t.radius+r+Math.log2(n.poemCount+1)*7.4,a=t.armOffset+s*(Math.PI*2/i)+o*.0145+(e()-.5)*.46,l=Math.max(0,1-o/720),c=(t.timeRank-4.3)*19+(e()-.5)*(34+78/Math.max(10,n.influence))*(.72+l*.45);return{x:Math.cos(a)*o,y:c,z:Math.sin(a)*o}}function k_(n,t,e){const i=Qc(`poem:${n.id}:${t}:${e}`),r=16+Math.min(160,Math.sqrt(n.poemCount+1)*3.2)*(.24+i()*.68),o=e*2.399963+i()*.62,a=(i()-.5)*Math.PI*.35,l=Math.sin(o*1.7+a)*r*(.16+i()*.55);return{x:n.position.x+Math.cos(o)*r,y:n.position.y+l,z:n.position.z+Math.sin(o)*r*(.72+i()*.55)}}function H_(n,t){const e={李白:100,杜甫:100,苏轼:96,白居易:92,屈原:95,陶渊明:88,李清照:90,辛弃疾:91,陆游:90,王维:89,李商隐:88,杜牧:86,曹操:82,纳兰性德:84,龚自珍:82,徐志摩:79,海子:78,北岛:78,顾城:76,戴望舒:76,元稹:82,刘禹锡:85,黄庭坚:84,苏辙:78};return e[n]?e[n]:Math.min(86,42+Math.log2(t+1)*7.2)}function V_(n){const t=H_(n.name,n.poemCount),e=z_({id:n.id,dynasty:n.dynasty,influence:t,poemCount:n.poemCount});return{id:n.id,name:n.name,dynasty:n.dynasty,dynastyRaw:n.dynastyRaw,birthYear:null,deathYear:null,description:`${n.name}，${n.dynastyRaw||n.dynasty}诗人。真实语料索引记录作品 ${n.poemCount.toLocaleString()} 首；点击后按分片懒加载作品正文。`,influence:t,poemCount:n.poemCount,clusterSize:n.clusterSize,tags:[n.dynastyRaw||n.dynasty,n.poemCount>100?"高产诗人":"诗人",...Jc(n.name)],position:e,color:F_(n.name)||O_(n.dynasty),source:"real-index"}}function G_(n,t,e){const i=`${n.id}:${e}`,s=t.p?.length?t.p:["此诗正文分片为空"];return{id:i,poetId:n.id,title:t.t||`未题 ${e+1}`,dynasty:n.dynasty,form:W_(t.f),content:s.join(`
`),lines:s,year:null,position:k_(n,i,e),catalogIndex:`${n.id}.${String(e).padStart(6,"0")}`,source:"real-shard"}}function W_(n){return{wujue:"五绝",qijue:"七绝",wulu:"五律",qilu:"七律",ci:"词",other:"古体",modern:"现代诗"}[n]||n||"古体"}const X_=void 0,qd=X_||"/data";let Ga=null,yr=null,Js=null,Wa=null;const lh=new Map,Vl=new Map,ch=new Map,Xa=new Map;let uh=!1,Pr=qd;async function $s(n,t=Pr){const e=`${t}${n.startsWith("/")?n:`/${n}`}`,i=await fetch(e);if(!i.ok)throw new Error(`${e} HTTP ${i.status}`);return await i.json()}function $_(){return Pr}async function q_(n=qd){try{return await $s("/manifest.json",n),Pr=n,!0}catch{return!1}}async function Yd(){return Ga||(Ga=await $s("/manifest.json")),Ga}async function jd(){return yr||(yr=await $s("/poets.index.json")),yr}async function Y_(n){return Js||(Js=(await jd()).map(V_)),n&&Js.length>n?Js.slice(0,n):Js}async function j_(){return Wa||(Wa=await $s("/gifts.json")),Wa.edges.map(([n,t,e],i)=>({id:`gift:${i}:${n}:${t}`,sourcePoetId:n,targetPoetId:t,type:"gift",weight:e,description:`真实赠答/题赠关系，权重 ${e}`}))}async function K_(n,t){const e=Number(n.headers.get("Content-Length"))||0,i=n.body?.getReader?.();if(!i){const l=await n.text();return t?.(l.length,e||l.length),l}const s=[];let r=0;for(;;){const{done:l,value:c}=await i.read();if(l)break;c&&(s.push(c),r+=c.byteLength,t?.(r,e))}const o=new Uint8Array(r);let a=0;for(const l of s)o.set(l,a),a+=l.byteLength;return new TextDecoder().decode(o)}async function Z_(n){const t=Vl.get(n);if(t)return t;const e=await $s(`/poems/${n}.json`);return Vl.set(n,e),e}async function J_(n,t){const e=lh.get(n.id);if(e)return e;const i=await Yd(),s=n.id.slice(0,2);let r=null;if(i.poemSidecar&&!uh){let a=ch.get(s);if(a===void 0){try{const c=await fetch(`${Pr}/poems/${s}.idx.json`);a=c.ok?await c.json():null}catch{a=null}ch.set(s,a)}const l=a?.[n.id];if(l){const[c,u]=l;try{const h=await fetch(`${Pr}/poems/${s}.json`,{headers:{Range:`bytes=${c}-${c+u-1}`}});if(h.status===206)r=JSON.parse(await K_(h,t));else if(h.ok){uh=!0;const f=JSON.parse(await h.text());Vl.set(s,f),r=f[n.id]||[]}}catch{r=null}}}r||(r=(await Z_(s))[n.id]||[]);const o=r.map((a,l)=>G_(n,a,l));return lh.set(n.id,o),o}function Q_(n,t=30){const e=n.trim();return!e||!yr?[]:yr.filter(i=>i.name.includes(e)||i.dynastyRaw?.includes(e)||i.dynasty.includes(e)||Jc(i.name).some(s=>s.includes(e)||e.includes(s))).sort((i,s)=>Cr(s.name)-Cr(i.name)||s.poemCount-i.poemCount).slice(0,t).map(i=>({id:i.id,type:"poet",title:i.name,subtitle:`${i.dynastyRaw||i.dynasty} · ${i.poemCount.toLocaleString()} 首`}))}function tv(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function ev(n){return(tv(n)&255).toString(16).padStart(2,"0")}async function nv(n){const t=Xa.get(n);if(t)return t;try{const e=await $s(`/lines/${n}.json`);return Xa.set(n,e),e}catch{return Xa.set(n,{}),{}}}async function iv(n,t=20){const e=[...n].filter(l=>/\p{Script=Han}/u.test(l)).join("");if(e.length<2)return[];const i=new Set([e]);for(const l of[7,6,5,4])e.length>l&&i.add([...e].slice(0,l).join(""));const s=await jd(),r=new Map(s.map(l=>[l.id,l])),o=new Set,a=[];for(const l of i){const c=await nv(ev(l));for(const u of c[l]||[]){const h=`${u.p}:${u.i}`;if(o.has(h))continue;o.add(h);const f=r.get(u.p);if(a.push({id:h,type:"line",title:u.t,subtitle:`${f?.name||"未知诗人"} · 命中「${l}」`,poetId:u.p,poemIndex:u.i}),a.length>=t)return a}}return a}function sv(n,t){const e=Rr[0];return t===e?!0:Ko(n.dynasty)===t||!!n.dynastyRaw&&Ko(n.dynastyRaw)===t}function $a(n,t){return t.length===0||t.some(e=>sv(n,e))}const In=U_("universe",{state:()=>({poets:[],poems:[],relations:[],selectedPoetId:null,selectedPoemId:null,selectedDynasties:[],hoveredObject:null,currentDynasty:"全部",currentPoemForm:"全部",activePanel:"poet",showRelations:!0,showPoems:!0,qualityMode:"high",uiHidden:!1,searchKeyword:"",fps:0,particleCount:0,loading:!0,loadingText:"正在展开三千年诗歌星图",dataMode:"real-index",dataBase:"/data",manifest:null,dataError:"",poemLoadingPoetId:null,poemLoadProgress:0,poemLoadTotal:0,poemLoadError:"",lastToast:""}),getters:{selectedPoet(n){return n.poets.find(t=>t.id===n.selectedPoetId)||null},selectedPoem(n){return n.poems.find(t=>t.id===n.selectedPoemId)||null},selectedAuthor(n){const t=n.poems.find(e=>e.id===n.selectedPoemId);return t&&n.poets.find(e=>e.id===t.poetId)||null},visiblePoets(n){return n.currentDynasty==="全部"?n.poets:n.poets.filter(t=>t.dynasty===n.currentDynasty||t.dynastyRaw===n.currentDynasty)},visiblePoems(n){let t=n.poems;return n.currentDynasty!=="全部"&&(t=t.filter(e=>e.dynasty===n.currentDynasty)),n.currentPoemForm!=="全部"&&(t=t.filter(e=>e.form===n.currentPoemForm)),t},filteredPoets(n){return n.poets.filter(t=>$a(t,n.selectedDynasties))},filteredPoems(n){const t=new Map(n.poets.map(i=>[i.id,i]));let e=n.poems.filter(i=>{const s=t.get(i.poetId);return s?$a(s,n.selectedDynasties):!0});return n.currentPoemForm!=="全部"&&(e=e.filter(i=>i.form===n.currentPoemForm)),e},dynastyCounts(n){const t={[Rr[0]]:n.poets.length};for(const e of n.poets){const i=Ko(e.dynastyRaw||e.dynasty);t[i]=(t[i]||0)+1}return t},corpusSlogan(n){return n.manifest?`${n.manifest.poetCount.toLocaleString()} 位诗人、${n.manifest.poemCount.toLocaleString()} 首诗，把中国全历史的诗歌放进了一片三维星系。`:N_.slogan},loadedPoemsOfSelected(n){return n.selectedPoetId?n.poems.filter(t=>t.poetId===n.selectedPoetId):[]},relatedPoetIds(n){if(!n.selectedPoetId)return[];const t=new Set;for(const e of n.relations)e.sourcePoetId===n.selectedPoetId&&t.add(e.targetPoetId),e.targetPoetId===n.selectedPoetId&&t.add(e.sourcePoetId);return[...t]}},actions:{async bootstrap(){if(this.loading=!0,this.loadingText="正在展开三千年诗歌星图",this.loadingText="正在连接真实诗歌语料索引",await q_())try{this.dataBase=$_(),this.manifest=await Yd(),this.loadingText=`正在装载 ${this.manifest.poetCount.toLocaleString()} 位诗人星图`;const t=this.qualityMode==="smooth"?18e3:void 0;this.poets=await Y_(t),this.loadingText="正在装载赠诗关系网络",this.relations=await j_(),this.poems=[],this.dataMode="real-index"}catch(t){this.dataError=t instanceof Error?t.message:String(t),this.dataMode="real-index"}else this.dataError="未检测到 /public/data 完整真实数据，已回退到内置演示数据。运行 npm run download:data 可落地真实语料分片。";this.particleCount=this.poets.length+this.poems.length,this.restoreFromHash(),setTimeout(()=>this.loading=!1,420)},setActivePanel(n){this.activePanel=n},async selectPoet(n){this.activePanel="poet",this.selectedPoetId=n,this.selectedPoemId=null,this.poemLoadError="";const t=this.poets.find(e=>e.id===n);if(t&&this.dataMode==="real-index"&&!this.poems.some(i=>i.poetId===t.id&&i.source==="real-shard")){this.poemLoadingPoetId=t.id,this.poemLoadProgress=0,this.poemLoadTotal=t.poemCount,this.loadingText=`正在加载 ${t.name} 的真实作品`;try{const i=await J_(t,(r,o)=>{this.poemLoadProgress=o?Math.min(99,Math.round(r/o*100)):0}),s=this.poems.filter(r=>r.poetId!==t.id||r.source!=="real-shard");this.poems=[...s,...i],this.poemLoadProgress=100,this.particleCount=this.poets.length+this.poems.length}catch(i){this.poemLoadError=`作品分片加载失败：${i instanceof Error?i.message:String(i)}`,this.dataError=this.poemLoadError}finally{this.poemLoadingPoetId=null}}this.updateHashForPoet(n)},selectPoem(n){const t=this.poems.find(e=>e.id===n);this.selectedPoemId=n,this.selectedPoetId=t?.poetId||this.selectedPoetId,this.updateHashForPoem(n)},clearSelection(){this.selectedPoetId=null,this.selectedPoemId=null,history.replaceState(null,"",location.pathname+location.search)},setDynastyFilter(n){const t=Rr[0];if(n===t)this.selectedDynasties=[],this.currentDynasty=t;else{const i=this.selectedDynasties.includes(n)?this.selectedDynasties.filter(s=>s!==n):[...this.selectedDynasties,n];this.selectedDynasties=i,this.currentDynasty=i[0]||t}const e=this.selectedPoetId?this.poets.find(i=>i.id===this.selectedPoetId):null;e&&!$a(e,this.selectedDynasties)&&(this.selectedPoetId=null,this.selectedPoemId=null)},setPoemFormFilter(n){this.currentPoemForm=n},toggleRelations(){this.showRelations=!this.showRelations},togglePoems(){this.showPoems=!this.showPoems},toggleQualityMode(){this.qualityMode=this.qualityMode==="high"?"smooth":"high"},toggleUI(){this.uiHidden=!this.uiHidden},setHoveredObject(n){this.hoveredObject=n},setFps(n){this.fps=n},setParticleCount(n){this.particleCount=n},toast(n){this.lastToast=n,window.setTimeout(()=>{this.lastToast===n&&(this.lastToast="")},1800)},async searchNodes(n){this.searchKeyword=n;const t=n.trim();if(!t)return[];const e=this.poets.filter(s=>s.name.includes(t)||s.tags.some(r=>r.includes(t))||Jc(s.name).some(r=>r.includes(t)||t.includes(r))).sort((s,r)=>Cr(r.name)-Cr(s.name)||r.poemCount-s.poemCount).slice(0,12).map(s=>({id:s.id,type:"poet",title:s.name,subtitle:`${s.dynastyRaw||s.dynasty} · ${s.poemCount.toLocaleString()} 首`})),i=this.poems.filter(s=>s.title.includes(t)||s.content.includes(t)).slice(0,12).map(s=>({id:s.id,type:"poem",title:s.title,subtitle:this.poets.find(r=>r.id===s.poetId)?.name||s.dynasty,poetId:s.poetId}));if(this.dataMode==="real-index"){const s=Q_(t,16),r=await iv(t,16),o=this.activePanel==="line"?[...r,...i,...s,...e]:[...s,...e,...r,...i],a=new Set;return o.filter(l=>a.has(`${l.type}:${l.id}`)?!1:(a.add(`${l.type}:${l.id}`),!0)).slice(0,30)}return[...e,...i]},async materializeSearchResult(n){if(n.type==="poet"){const t=this.poets.find(e=>e.id===n.id);return t&&await this.selectPoet(t.id),{poet:t}}if(n.type==="poem"){const t=this.poems.find(e=>e.id===n.id);return t&&this.selectPoem(t.id),{poem:t,poet:t?this.poets.find(e=>e.id===t.poetId):void 0}}if(n.type==="line"&&n.poetId!=null&&n.poemIndex!=null){const t=this.poets.find(i=>i.id===n.poetId);if(!t)return{};await this.selectPoet(t.id);const e=this.poems.find(i=>i.poetId===t.id&&i.catalogIndex.endsWith(String(n.poemIndex).padStart(6,"0")));return e&&this.selectPoem(e.id),{poet:t,poem:e}}return{}},updateHashForPoet(n){history.replaceState(null,"",`${location.pathname}${location.search}#a=${encodeURIComponent(n)}`)},updateHashForPoem(n){history.replaceState(null,"",`${location.pathname}${location.search}#poem=${encodeURIComponent(n)}`)},restoreFromHash(){const n=decodeURIComponent(location.hash||"");if(n.startsWith("#a=")){const t=n.slice(3);this.poets.some(e=>e.id===t)&&this.selectPoet(t)}}}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tu="169",Us={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rv=0,hh=1,ov=2,Kd=1,av=2,ti=3,Pi=0,Qe=1,ri=2,li=0,ts=1,_n=2,fh=3,dh=4,lv=5,qi=100,cv=101,uv=102,hv=103,fv=104,dv=200,pv=201,mv=202,gv=203,Gl=204,Wl=205,_v=206,vv=207,xv=208,yv=209,Sv=210,Mv=211,Ev=212,bv=213,Tv=214,Xl=0,$l=1,ql=2,zs=3,Yl=4,jl=5,Kl=6,Zl=7,Zd=0,wv=1,Av=2,Ai=0,Jd=1,Qd=2,tp=3,eu=4,Cv=5,ep=6,np=7,ip=300,ks=301,Hs=302,Jl=303,Ql=304,Sa=306,tc=1e3,ji=1001,ec=1002,vn=1003,Rv=1004,Yr=1005,qe=1006,qa=1007,Ki=1008,hi=1009,sp=1010,rp=1011,Lr=1012,nu=1013,es=1014,oi=1015,ci=1016,iu=1017,su=1018,Vs=1020,op=35902,ap=1021,lp=1022,wn=1023,cp=1024,up=1025,Ns=1026,Gs=1027,hp=1028,ru=1029,fp=1030,ou=1031,au=1033,Co=33776,Ro=33777,Po=33778,Lo=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37808,uc=37809,hc=37810,fc=37811,dc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,Sc=37820,Mc=37821,Do=36492,Ec=36494,bc=36495,dp=36283,Tc=36284,wc=36285,Ac=36286,Pv=3200,Lv=3201,Dv=0,Iv=1,bi="",on="srgb",Di="srgb-linear",lu="display-p3",Ma="display-p3-linear",Zo="linear",he="srgb",Jo="rec709",Qo="p3",ls=7680,ph=519,Uv=512,Nv=513,Fv=514,pp=515,Ov=516,Bv=517,zv=518,kv=519,Cc=35044,mh="300 es",ai=2e3,ta=2001;class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Io=Math.PI/180,Rc=180/Math.PI;function Ci(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function Hv(n,t){return(n%t+t)%t}function Ya(n,t,e){return(1-e)*n+e*t}function kn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Vv={DEG2RAD:Io};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,s,r,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],v=s[0],p=s[3],m=s[6],w=s[1],b=s[4],S=s[7],A=s[2],R=s[5],P=s[8];return r[0]=o*v+a*w+l*A,r[3]=o*p+a*b+l*R,r[6]=o*m+a*S+l*P,r[1]=c*v+u*w+h*A,r[4]=c*p+u*b+h*R,r[7]=c*m+u*S+h*P,r[2]=f*v+d*w+g*A,r[5]=f*p+d*b+g*R,r[8]=f*m+d*S+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ja.makeScale(t,e)),this}rotate(t){return this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new $t;function mp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gv(){const n=ea("canvas");return n.style.display="block",n}const gh={};function Uo(n){n in gh||(gh[n]=!0,console.warn(n))}function Wv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Xv(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $v(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _h=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vh=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[Di]:{transfer:Zo,primaries:Jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[on]:{transfer:he,primaries:Jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ma]:{transfer:Zo,primaries:Qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(vh),fromReference:n=>n.applyMatrix3(_h)},[lu]:{transfer:he,primaries:Qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(vh),fromReference:n=>n.applyMatrix3(_h).convertLinearToSRGB()}},qv=new Set([Di,Ma]),Qt={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!qv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Qs[t].toReference,s=Qs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Qs[n].primaries},getTransfer:function(n){return n===bi?Zo:Qs[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Qs[t].luminanceCoefficients)}};function Fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ka(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let cs;class Yv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=ea("canvas")),cs.width=t.width,cs.height=t.height;const i=cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fs(e[i]/255)*255):e[i]=Fs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jv=0;class gp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kv=0;class Ye extends is{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=ji,s=ji,r=qe,o=Ki,a=wn,l=hi,c=Ye.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Ci(),this.name="",this.source=new gp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ip)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tc:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tc:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=ip;Ye.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,S=(d+1)/2,A=(m+1)/2,R=(u+f)/4,P=(h+v)/4,L=(g+p)/4;return b>S&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=P/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=R/s,r=L/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=L/r),this.set(i,s,r,e),this}let w=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(h-v)/w,this.z=(f-u)/w,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zv extends is{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ye(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Zv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class _p extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jv extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*v,w=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const A=Math.sqrt(b),R=Math.atan2(A,m*w);p=Math.sin(p*R)/A,a=Math.sin(a*R)/A}const S=a*w;if(l=l*p+f*S,c=c*p+d*S,u=u*p+g*S,h=h*p+v*S,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new U,xh=new ns;class Or{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),Kr.subVectors(this.max,tr),us.subVectors(t.a,tr),hs.subVectors(t.b,tr),fs.subVectors(t.c,tr),mi.subVectors(hs,us),gi.subVectors(fs,hs),Bi.subVectors(us,fs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Bi.z,Bi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Bi.z,0,-Bi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Bi.y,Bi.x,0];return!Qa(e,us,hs,fs,Kr)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,us,hs,fs,Kr))?!1:(Zr.crossVectors(mi,gi),e=[Zr.x,Zr.y,Zr.z],Qa(e,us,hs,fs,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jn=[new U,new U,new U,new U,new U,new U,new U,new U],En=new U,jr=new Or,us=new U,hs=new U,fs=new U,mi=new U,gi=new U,Bi=new U,tr=new U,Kr=new U,Zr=new U,zi=new U;function Qa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zi.fromArray(n,r);const a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Qv=new Or,er=new U,tl=new U;class Br{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Qv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);const e=er.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(tl)),this.expandByPoint(er.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new U,el=new U,Jr=new U,_i=new U,nl=new U,Qr=new U,il=new U;class zr{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){el.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(el);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Jr),a=_i.dot(this.direction),l=-_i.dot(Jr),c=_i.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(el).addScaledVector(Jr,f),d}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,i,s,r){nl.subVectors(e,t),Qr.subVectors(i,t),il.crossVectors(nl,Qr);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,t);const l=a*this.direction.dot(Qr.crossVectors(_i,Qr));if(l<0)return null;const c=a*this.direction.dot(nl.cross(_i));if(c<0||l+c>o)return null;const u=-a*_i.dot(il);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,g,v,p){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,v,p)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(t0,t,e0)}lookAt(t,e,i){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),vi.crossVectors(i,nn),vi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),vi.crossVectors(i,nn)),vi.normalize(),to.crossVectors(nn,vi),s[0]=vi.x,s[4]=to.x,s[8]=nn.x,s[1]=vi.y,s[5]=to.y,s[9]=nn.y,s[2]=vi.z,s[6]=to.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],v=i[6],p=i[10],m=i[14],w=i[3],b=i[7],S=i[11],A=i[15],R=s[0],P=s[4],L=s[8],H=s[12],x=s[1],E=s[5],I=s[9],k=s[13],J=s[2],it=s[6],G=s[10],W=s[14],B=s[3],ut=s[7],pt=s[11],_t=s[15];return r[0]=o*R+a*x+l*J+c*B,r[4]=o*P+a*E+l*it+c*ut,r[8]=o*L+a*I+l*G+c*pt,r[12]=o*H+a*k+l*W+c*_t,r[1]=u*R+h*x+f*J+d*B,r[5]=u*P+h*E+f*it+d*ut,r[9]=u*L+h*I+f*G+d*pt,r[13]=u*H+h*k+f*W+d*_t,r[2]=g*R+v*x+p*J+m*B,r[6]=g*P+v*E+p*it+m*ut,r[10]=g*L+v*I+p*G+m*pt,r[14]=g*H+v*k+p*W+m*_t,r[3]=w*R+b*x+S*J+A*B,r[7]=w*P+b*E+S*it+A*ut,r[11]=w*L+b*I+S*G+A*pt,r[15]=w*H+b*k+S*W+A*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+p*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+m*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],w=h*p*c-v*f*c+v*l*d-a*p*d-h*l*m+a*f*m,b=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,S=u*v*c-g*h*c+g*a*d-o*v*d-u*a*m+o*h*m,A=g*h*l-u*v*l-g*a*f+o*v*f+u*a*p-o*h*p,R=e*w+i*b+s*S+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=w*P,t[1]=(v*f*r-h*p*r-v*s*d+i*p*d+h*s*m-i*f*m)*P,t[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*m+i*l*m)*P,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*P,t[4]=b*P,t[5]=(u*p*r-g*f*r+g*s*d-e*p*d-u*s*m+e*f*m)*P,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*P,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*P,t[8]=S*P,t[9]=(g*h*r-u*v*r-g*i*d+e*v*d+u*i*m-e*h*m)*P,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*m+e*a*m)*P,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*P,t[12]=A*P,t[13]=(u*v*s-g*h*s+g*i*f-e*v*f-u*i*p+e*h*p)*P,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*p-e*a*p)*P,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,v=o*u,p=o*h,m=a*h,w=l*c,b=l*u,S=l*h,A=i.x,R=i.y,P=i.z;return s[0]=(1-(v+m))*A,s[1]=(d+S)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(d-S)*R,s[5]=(1-(f+m))*R,s[6]=(p+w)*R,s[7]=0,s[8]=(g+b)*P,s[9]=(p-w)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ds.set(s[0],s[1],s[2]).length();const o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const c=1/r,u=1/o,h=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,e.setFromRotationMatrix(bn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ai){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===ai)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ta)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ai){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let g,v;if(a===ai)g=(o+r)*h,v=-2*h;else if(a===ta)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ds=new U,bn=new pe,t0=new U(0,0,0),e0=new U(1,1,1),vi=new U,to=new U,nn=new U,yh=new pe,Sh=new ns;class Ln{constructor(t=0,e=0,i=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let n0=0;const Mh=new U,ps=new ns,Zn=new pe,eo=new U,nr=new U,i0=new U,s0=new ns,Eh=new U(1,0,0),bh=new U(0,1,0),Th=new U(0,0,1),wh={type:"added"},r0={type:"removed"},ms={type:"childadded",child:null},sl={type:"childremoved",child:null};class Oe extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new U,e=new Ln,i=new ns,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new $t}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(bh,t)}rotateZ(t){return this.rotateOnAxis(Th,t)}translateOnAxis(t,e){return Mh.copy(t).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(bh,t)}translateZ(t){return this.translateOnAxis(Th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?eo.copy(t):eo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(nr,eo,this.up):Zn.lookAt(eo,nr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Zn),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(r0),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,i0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,s0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new U(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new U,Jn=new U,rl=new U,Qn=new U,gs=new U,_s=new U,Ah=new U,ol=new U,al=new U,ll=new U,cl=new ye,ul=new ye,hl=new ye;class mn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Tn.subVectors(s,e),Jn.subVectors(i,e),rl.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(Jn),l=Tn.dot(rl),c=Jn.dot(Jn),u=Jn.dot(rl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return cl.setScalar(0),ul.setScalar(0),hl.setScalar(0),cl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,i),hl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(t,e,i,s){return Tn.subVectors(i,e),Jn.subVectors(t,e),Tn.cross(Jn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,i),_s.subVectors(r,i),ol.subVectors(t,i);const l=gs.dot(ol),c=_s.dot(ol);if(l<=0&&c<=0)return e.copy(i);al.subVectors(t,s);const u=gs.dot(al),h=_s.dot(al);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(gs,o);ll.subVectors(t,r);const d=gs.dot(ll),g=_s.dot(ll);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(_s,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Ah.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Ah,a);const m=1/(p+v+f);return o=v*m,a=f*m,e.copy(i).addScaledVector(gs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},no={h:0,s:0,l:0};function fl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=Hv(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=on){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const i=vp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}copyLinearToSRGB(t){return this.r=Ka(t.r),this.g=Ka(t.g),this.b=Ka(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Qt.fromWorkingColorSpace(ze.copy(this),t),Math.round(Fe(ze.r*255,0,255))*65536+Math.round(Fe(ze.g*255,0,255))*256+Math.round(Fe(ze.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ze.copy(this),e);const i=ze.r,s=ze.g,r=ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=on){Qt.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,s=ze.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(no);const i=Ya(xi.h,no.h,e),s=Ya(xi.s,no.s,e),r=Ya(xi.l,no.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Vt;Vt.NAMES=vp;let o0=0;class ss extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=ts,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gl&&(i.blendSrc=this.blendSrc),this.blendDst!==Wl&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kr extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new U,io=new At;class ae{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Cc,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=kn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cc&&(t.usage=this.usage),t}}class xp extends ae{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yp extends ae{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends ae{constructor(t,e,i){super(new Float32Array(t),e,i)}}let a0=0;const fn=new pe,dl=new Oe,vs=new U,sn=new Or,ir=new Or,Le=new U;class Ie extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mp(t)?yp:xp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,i){return fn.makeTranslation(t,e,i),this.applyMatrix4(fn),this}scale(t,e,i){return fn.makeScale(t,e,i),this.applyMatrix4(fn),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(sn.min,ir.min),sn.expandByPoint(Le),Le.addVectors(sn.max,ir.max),sn.expandByPoint(Le)):(sn.expandByPoint(ir.min),sn.expandByPoint(ir.max))}sn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Le.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(t,c),Le.add(vs)),s=Math.max(s,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new U,l[L]=new U;const c=new U,u=new U,h=new U,f=new At,d=new At,g=new At,v=new U,p=new U;function m(L,H,x){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,H),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,H),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(E),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(E),a[L].add(v),a[H].add(v),a[x].add(v),l[L].add(p),l[H].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,H=w.length;L<H;++L){const x=w[L],E=x.start,I=x.count;for(let k=E,J=E+I;k<J;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const b=new U,S=new U,A=new U,R=new U;function P(L){A.fromBufferAttribute(s,L),R.copy(A);const H=a[L];b.copy(H),b.sub(A.multiplyScalar(A.dot(H))).normalize(),S.crossVectors(R,H);const E=S.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,E)}for(let L=0,H=w.length;L<H;++L){const x=w[L],E=x.start,I=x.count;for(let k=E,J=E+I;k<J;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new ae(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ch=new pe,ki=new zr,so=new Br,Rh=new U,ro=new U,oo=new U,ao=new U,pl=new U,lo=new U,Ph=new U,co=new U;class xn extends Oe{constructor(t=new Ie,e=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(pl.fromBufferAttribute(h,t),o?lo.addScaledVector(pl,u):lo.addScaledVector(pl.sub(e),u))}e.add(lo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(so.containsPoint(ki.origin)===!1&&(ki.intersectSphere(so,Rh)===null||ki.origin.distanceToSquared(Rh)>(t.far-t.near)**2))&&(Ch.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Ch),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],w=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=w,A=b;S<A;S+=3){const R=a.getX(S),P=a.getX(S+1),L=a.getX(S+2);s=uo(this,m,t,i,c,u,h,R,P,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const w=a.getX(p),b=a.getX(p+1),S=a.getX(p+2);s=uo(this,o,t,i,c,u,h,w,b,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],w=Math.max(p.start,d.start),b=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=w,A=b;S<A;S+=3){const R=S,P=S+1,L=S+2;s=uo(this,m,t,i,c,u,h,R,P,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const w=p,b=p+1,S=p+2;s=uo(this,o,t,i,c,u,h,w,b,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function l0(n,t,e,i,s,r,o,a){let l;if(t.side===Qe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Pi,a),l===null)return null;co.copy(a),co.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(co);return c<e.near||c>e.far?null:{distance:c,point:co.clone(),object:n}}function uo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ro),n.getVertexPosition(l,oo),n.getVertexPosition(c,ao);const u=l0(n,t,e,i,ro,oo,ao,Ph);if(u){const h=new U;mn.getBarycoord(Ph,ro,oo,ao,h),s&&(u.uv=mn.getInterpolatedAttribute(s,a,l,c,h,new At)),r&&(u.uv1=mn.getInterpolatedAttribute(r,a,l,c,h,new At)),o&&(u.normal=mn.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};mn.getNormal(ro,oo,ao,f.normal),u.face=f,u.barycoord=h}return u}class Hr extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(h,2));function g(v,p,m,w,b,S,A,R,P,L,H){const x=S/P,E=A/L,I=S/2,k=A/2,J=R/2,it=P+1,G=L+1;let W=0,B=0;const ut=new U;for(let pt=0;pt<G;pt++){const _t=pt*E-k;for(let Nt=0;Nt<it;Nt++){const jt=Nt*x-I;ut[v]=jt*w,ut[p]=_t*b,ut[m]=J,c.push(ut.x,ut.y,ut.z),ut[v]=0,ut[p]=0,ut[m]=R>0?1:-1,u.push(ut.x,ut.y,ut.z),h.push(Nt/P),h.push(1-pt/L),W+=1}}for(let pt=0;pt<L;pt++)for(let _t=0;_t<P;_t++){const Nt=f+_t+it*pt,jt=f+_t+it*(pt+1),nt=f+(_t+1)+it*(pt+1),lt=f+(_t+1)+it*pt;l.push(Nt,jt,lt),l.push(jt,nt,lt),B+=6}a.addGroup(d,B,H),d+=B,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ge(n){const t={};for(let e=0;e<n.length;e++){const i=Ws(n[e]);for(const s in i)t[s]=i[s]}return t}function c0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Sp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Dr={clone:Ws,merge:Ge};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class be extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=c0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Mp extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new U,Lh=new At,Dh=new At;class pn extends Mp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,Lh,Dh),e.subVectors(Dh,Lh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Io*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,ys=1;class f0 extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(xs,ys,t,e);s.layers=this.layers,this.add(s);const r=new pn(xs,ys,t,e);r.layers=this.layers,this.add(r);const o=new pn(xs,ys,t,e);o.layers=this.layers,this.add(o);const a=new pn(xs,ys,t,e);a.layers=this.layers,this.add(a);const l=new pn(xs,ys,t,e);l.layers=this.layers,this.add(l);const c=new pn(xs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ep extends Ye{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class d0 extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ep(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hr(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:li});r.uniforms.tEquirect.value=e;const o=new xn(s,r),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=qe),new f0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ml=new U,p0=new U,m0=new $t;class Ei{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ml.subVectors(i,e).cross(p0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||m0.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Br,ho=new U;class bp{constructor(t=new Ei,e=new Ei,i=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ai){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],v=s[10],p=s[11],m=s[12],w=s[13],b=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,p-d,S-m).normalize(),i[1].setComponents(l+r,f+c,p+d,S+m).normalize(),i[2].setComponents(l+o,f+u,p+g,S+w).normalize(),i[3].setComponents(l-o,f-u,p-g,S-w).normalize(),i[4].setComponents(l-a,f-h,p-v,S-b).normalize(),e===ai)i[5].setComponents(l+a,f+h,p+v,S+b).normalize();else if(e===ta)i[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ho.x=s.normal.x>0?t.max.x:t.min.x,ho.y=s.normal.y>0?t.max.y:t.min.y,ho.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function g0(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Vr extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const w=m*f-o;for(let b=0;b<c;b++){const S=b*h-r;g.push(S,-w,0),v.push(0,0,1),p.push(b/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const b=w+c*m,S=w+c*(m+1),A=w+1+c*(m+1),R=w+1+c*m;d.push(b,S,R),d.push(S,A,R)}this.setIndex(d),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.width,t.height,t.widthSegments,t.heightSegments)}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,L0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,k0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,px=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_x=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ry=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,my=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ey=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,by=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ty=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Py=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ly=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ny=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,By=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$y=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:_0,alphahash_pars_fragment:v0,alphamap_fragment:x0,alphamap_pars_fragment:y0,alphatest_fragment:S0,alphatest_pars_fragment:M0,aomap_fragment:E0,aomap_pars_fragment:b0,batching_pars_vertex:T0,batching_vertex:w0,begin_vertex:A0,beginnormal_vertex:C0,bsdfs:R0,iridescence_fragment:P0,bumpmap_pars_fragment:L0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:U0,clipping_planes_vertex:N0,color_fragment:F0,color_pars_fragment:O0,color_pars_vertex:B0,color_vertex:z0,common:k0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:V0,displacementmap_pars_vertex:G0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:$0,colorspace_fragment:q0,colorspace_pars_fragment:Y0,envmap_fragment:j0,envmap_common_pars_fragment:K0,envmap_pars_fragment:Z0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:cx,envmap_vertex:Q0,fog_vertex:tx,fog_pars_vertex:ex,fog_fragment:nx,fog_pars_fragment:ix,gradientmap_pars_fragment:sx,lightmap_pars_fragment:rx,lights_lambert_fragment:ox,lights_lambert_pars_fragment:ax,lights_pars_begin:lx,lights_toon_fragment:ux,lights_toon_pars_fragment:hx,lights_phong_fragment:fx,lights_phong_pars_fragment:dx,lights_physical_fragment:px,lights_physical_pars_fragment:mx,lights_fragment_begin:gx,lights_fragment_maps:_x,lights_fragment_end:vx,logdepthbuf_fragment:xx,logdepthbuf_pars_fragment:yx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:Mx,map_fragment:Ex,map_pars_fragment:bx,map_particle_fragment:Tx,map_particle_pars_fragment:wx,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Cx,morphinstance_vertex:Rx,morphcolor_vertex:Px,morphnormal_vertex:Lx,morphtarget_pars_vertex:Dx,morphtarget_vertex:Ix,normal_fragment_begin:Ux,normal_fragment_maps:Nx,normal_pars_fragment:Fx,normal_pars_vertex:Ox,normal_vertex:Bx,normalmap_pars_fragment:zx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Gx,opaque_fragment:Wx,packing:Xx,premultiplied_alpha_fragment:$x,project_vertex:qx,dithering_fragment:Yx,dithering_pars_fragment:jx,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:Zx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:Qx,shadowmap_vertex:ty,shadowmask_pars_fragment:ey,skinbase_vertex:ny,skinning_pars_vertex:iy,skinning_vertex:sy,skinnormal_vertex:ry,specularmap_fragment:oy,specularmap_pars_fragment:ay,tonemapping_fragment:ly,tonemapping_pars_fragment:cy,transmission_fragment:uy,transmission_pars_fragment:hy,uv_pars_fragment:fy,uv_pars_vertex:dy,uv_vertex:py,worldpos_vertex:my,background_vert:gy,background_frag:_y,backgroundCube_vert:vy,backgroundCube_frag:xy,cube_vert:yy,cube_frag:Sy,depth_vert:My,depth_frag:Ey,distanceRGBA_vert:by,distanceRGBA_frag:Ty,equirect_vert:wy,equirect_frag:Ay,linedashed_vert:Cy,linedashed_frag:Ry,meshbasic_vert:Py,meshbasic_frag:Ly,meshlambert_vert:Dy,meshlambert_frag:Iy,meshmatcap_vert:Uy,meshmatcap_frag:Ny,meshnormal_vert:Fy,meshnormal_frag:Oy,meshphong_vert:By,meshphong_frag:zy,meshphysical_vert:ky,meshphysical_frag:Hy,meshtoon_vert:Vy,meshtoon_frag:Gy,points_vert:Wy,points_frag:Xy,shadow_vert:$y,shadow_frag:qy,sprite_vert:Yy,sprite_frag:jy},mt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Bn={basic:{uniforms:Ge([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ge([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ge([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ge([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ge([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ge([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ge([mt.points,mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ge([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ge([mt.common,mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ge([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ge([mt.sprite,mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ge([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ge([mt.lights,mt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Bn.physical={uniforms:Ge([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const fo={r:0,b:0,g:0},Vi=new Ln,Ky=new pe;function Zy(n,t,e,i,s,r,o){const a=new Vt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?e:t).get(b)),b}function v(w){let b=!1;const S=g(w);S===null?m(a,l):S&&S.isColor&&(m(S,1),b=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===Sa)?(u===void 0&&(u=new xn(new Hr(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:Ws(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vi.copy(b.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ky.makeRotationFromEuler(Vi)),u.material.toneMapped=Qt.getTransfer(S.colorSpace)!==he,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xn(new Vr(2,2),new be({name:"BackgroundMaterial",uniforms:Ws(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,b){w.getRGB(fo,Sp(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:v,addToRenderList:p}}function Jy(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,E,I,k,J){let it=!1;const G=h(k,I,E);r!==G&&(r=G,c(r.object)),it=d(x,k,I,J),it&&g(x,k,I,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,S(x,E,I,k),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,E,I){const k=I.wireframe===!0;let J=i[x.id];J===void 0&&(J={},i[x.id]=J);let it=J[E.id];it===void 0&&(it={},J[E.id]=it);let G=it[k];return G===void 0&&(G=f(l()),it[k]=G),G}function f(x){const E=[],I=[],k=[];for(let J=0;J<e;J++)E[J]=0,I[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:k,object:x,attributes:{},index:null}}function d(x,E,I,k){const J=r.attributes,it=E.attributes;let G=0;const W=I.getAttributes();for(const B in W)if(W[B].location>=0){const pt=J[B];let _t=it[B];if(_t===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),pt===void 0||pt.attribute!==_t||_t&&pt.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(x,E,I,k){const J={},it=E.attributes;let G=0;const W=I.getAttributes();for(const B in W)if(W[B].location>=0){let pt=it[B];pt===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor));const _t={};_t.attribute=pt,pt&&pt.data&&(_t.data=pt.data),J[B]=_t,G++}r.attributes=J,r.attributesNum=G,r.index=k}function v(){const x=r.newAttributes;for(let E=0,I=x.length;E<I;E++)x[E]=0}function p(x){m(x,0)}function m(x,E){const I=r.newAttributes,k=r.enabledAttributes,J=r.attributeDivisors;I[x]=1,k[x]===0&&(n.enableVertexAttribArray(x),k[x]=1),J[x]!==E&&(n.vertexAttribDivisor(x,E),J[x]=E)}function w(){const x=r.newAttributes,E=r.enabledAttributes;for(let I=0,k=E.length;I<k;I++)E[I]!==x[I]&&(n.disableVertexAttribArray(I),E[I]=0)}function b(x,E,I,k,J,it,G){G===!0?n.vertexAttribIPointer(x,E,I,J,it):n.vertexAttribPointer(x,E,I,k,J,it)}function S(x,E,I,k){v();const J=k.attributes,it=I.getAttributes(),G=E.defaultAttributeValues;for(const W in it){const B=it[W];if(B.location>=0){let ut=J[W];if(ut===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),ut!==void 0){const pt=ut.normalized,_t=ut.itemSize,Nt=t.get(ut);if(Nt===void 0)continue;const jt=Nt.buffer,nt=Nt.type,lt=Nt.bytesPerElement,vt=nt===n.INT||nt===n.UNSIGNED_INT||ut.gpuType===nu;if(ut.isInterleavedBufferAttribute){const xt=ut.data,zt=xt.stride,Ft=ut.offset;if(xt.isInstancedInterleavedBuffer){for(let qt=0;qt<B.locationSize;qt++)m(B.location+qt,xt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let qt=0;qt<B.locationSize;qt++)p(B.location+qt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let qt=0;qt<B.locationSize;qt++)b(B.location+qt,_t/B.locationSize,nt,pt,zt*lt,(Ft+_t/B.locationSize*qt)*lt,vt)}else{if(ut.isInstancedBufferAttribute){for(let xt=0;xt<B.locationSize;xt++)m(B.location+xt,ut.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let xt=0;xt<B.locationSize;xt++)p(B.location+xt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let xt=0;xt<B.locationSize;xt++)b(B.location+xt,_t/B.locationSize,nt,pt,_t*lt,_t/B.locationSize*xt*lt,vt)}}else if(G!==void 0){const pt=G[W];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(B.location,pt);break;case 3:n.vertexAttrib3fv(B.location,pt);break;case 4:n.vertexAttrib4fv(B.location,pt);break;default:n.vertexAttrib1fv(B.location,pt)}}}}w()}function A(){L();for(const x in i){const E=i[x];for(const I in E){const k=E[I];for(const J in k)u(k[J].object),delete k[J];delete E[I]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const I in E){const k=E[I];for(const J in k)u(k[J].object),delete k[J];delete E[I]}delete i[x.id]}function P(x){for(const E in i){const I=i[E];if(I[x.id]===void 0)continue;const k=I[x.id];for(const J in k)u(k[J].object),delete k[J];delete I[x.id]}}function L(){H(),o=!0,r!==s&&(r=s,c(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function Qy(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<f.length;v++)e.update(g,i,f[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==wn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const L=P===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==hi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==oi&&!L)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:A,maxSamples:R}}function eS(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ei,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const w=r?0:i,b=w*4;let S=m.clippingState||null;l.value=S,S=u(g,f,b,d);for(let A=0;A!==b;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,S=d;b!==v;++b,S+=4)o.copy(h[b]).applyMatrix4(w,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function nS(n){let t=new WeakMap;function e(o,a){return a===Jl?o.mapping=ks:a===Ql&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jl||a===Ql)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new d0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class wp extends Mp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,Ih=[.125,.215,.35,.446,.526,.582],Yi=20,gl=new wp,Uh=new Vt;let _l=null,vl=0,xl=0,yl=!1;const Xi=(1+Math.sqrt(5))/2,Ss=1/Xi,Nh=[new U(-Xi,Ss,0),new U(Xi,Ss,0),new U(-Ss,0,Xi),new U(Ss,0,Xi),new U(0,Xi,-Ss),new U(0,Xi,Ss),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Fh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,vl,xl),this._renderer.xr.enabled=yl,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:ci,format:wn,colorSpace:Di,depthBuffer:!1},s=Oh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iS(r)),this._blurMaterial=sS(r,t,e)}return s}_compileMaterial(t){const e=new xn(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,i,s){const a=new pn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Uh),u.toneMapping=Ai,u.autoClear=!1;const d=new kr({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new xn(new Hr,d);let v=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy(Uh),v=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const b=this._cubeSize;po(s,w*b,m>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ks||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;po(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,gl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nh[(s-r-1)%Nh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xn(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Yi-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):Yi;p>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yi}`);const m=[];let w=0;for(let P=0;P<Yi;++P){const L=P/v,H=Math.exp(-L*L/2);m.push(H),P===0?w+=H:P<p&&(w+=2*H)}for(let P=0;P<m.length;P++)m[P]=m[P]/w;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const S=this._sizeLods[s],A=3*S*(s>b-Rs?s-b+Rs:0),R=4*(this._cubeSize-S);po(e,A,R,3*S,2*S),l.setRenderTarget(e),l.render(h,gl)}}function iS(n){const t=[],e=[],i=[];let s=n;const r=n-Rs+1+Ih.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Rs?l=Ih[o-n+Rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,p=2,m=1,w=new Float32Array(v*g*d),b=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let R=0;R<d;R++){const P=R%3*2/3-1,L=R>2?0:-1,H=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];w.set(H,v*g*R),b.set(f,p*g*R);const x=[R,R,R,R,R,R];S.set(x,m*g*R)}const A=new Ie;A.setAttribute("position",new ae(w,v)),A.setAttribute("uv",new ae(b,p)),A.setAttribute("faceIndex",new ae(S,m)),t.push(A),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Oh(n,t,e){const i=new Rn(n,t,e);return i.texture.mapping=Sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function sS(n,t,e){const i=new Float32Array(Yi),s=new U(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Bh(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function zh(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rS(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jl||l===Ql,u=l===ks||l===Hs;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Fh(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Fh(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function oS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Uo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function aS(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const w=d.array;v=d.version;for(let b=0,S=w.length;b<S;b+=3){const A=w[b+0],R=w[b+1],P=w[b+2];f.push(A,R,R,P,P,A)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,S=w.length/3-1;b<S;b+=3){const A=b+0,R=b+1,P=b+2;f.push(A,R,R,P,P,A)}}else return;const p=new(mp(f)?yp:xp)(f,1);p.version=v;const m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lS(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,i,1)}function h(f,d,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let m=0;for(let w=0;w<g;w++)m+=d[w];for(let w=0;w<v.length;w++)e.update(m,i,v[w])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function uS(n,t,e){const i=new WeakMap,s=new ye;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let A=a.attributes.position.count*S,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*R*4*h),L=new _p(P,A,R,h);L.type=oi,L.needsUpdate=!0;const H=S*4;for(let E=0;E<h;E++){const I=m[E],k=w[E],J=b[E],it=A*R*4*E;for(let G=0;G<I.count;G++){const W=G*H;g===!0&&(s.fromBufferAttribute(I,G),P[it+W+0]=s.x,P[it+W+1]=s.y,P[it+W+2]=s.z,P[it+W+3]=0),v===!0&&(s.fromBufferAttribute(k,G),P[it+W+4]=s.x,P[it+W+5]=s.y,P[it+W+6]=s.z,P[it+W+7]=0),p===!0&&(s.fromBufferAttribute(J,G),P[it+W+8]=s.x,P[it+W+9]=s.y,P[it+W+10]=s.z,P[it+W+11]=J.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new At(A,R)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function hS(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ap extends Ye{constructor(t,e,i,s,r,o,a,l,c,u=Ns){if(u!==Ns&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ns&&(i=es),i===void 0&&u===Gs&&(i=Vs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Cp=new Ye,kh=new Ap(1,1),Rp=new _p,Pp=new Jv,Lp=new Ep,Hh=[],Vh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function qs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Hh[s];if(r===void 0&&(r=new Float32Array(s),Hh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ea(n,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function dS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function pS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function mS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function gS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Xh.set(i),n.uniformMatrix2fv(this.addr,!1,Xh),Pe(e,i)}}function _S(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Wh.set(i),n.uniformMatrix3fv(this.addr,!1,Wh),Pe(e,i)}}function vS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Gh.set(i),n.uniformMatrix4fv(this.addr,!1,Gh),Pe(e,i)}}function xS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function SS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function MS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function ES(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function bS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function TS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function wS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function AS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(kh.compareFunction=pp,r=kh):r=Cp,e.setTexture2D(t||r,s)}function CS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pp,s)}function RS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Lp,s)}function PS(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Rp,s)}function LS(n){switch(n){case 5126:return fS;case 35664:return dS;case 35665:return pS;case 35666:return mS;case 35674:return gS;case 35675:return _S;case 35676:return vS;case 5124:case 35670:return xS;case 35667:case 35671:return yS;case 35668:case 35672:return SS;case 35669:case 35673:return MS;case 5125:return ES;case 36294:return bS;case 36295:return TS;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return PS}}function DS(n,t){n.uniform1fv(this.addr,t)}function IS(n,t){const e=qs(t,this.size,2);n.uniform2fv(this.addr,e)}function US(n,t){const e=qs(t,this.size,3);n.uniform3fv(this.addr,e)}function NS(n,t){const e=qs(t,this.size,4);n.uniform4fv(this.addr,e)}function FS(n,t){const e=qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function OS(n,t){const e=qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function BS(n,t){const e=qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zS(n,t){n.uniform1iv(this.addr,t)}function kS(n,t){n.uniform2iv(this.addr,t)}function HS(n,t){n.uniform3iv(this.addr,t)}function VS(n,t){n.uniform4iv(this.addr,t)}function GS(n,t){n.uniform1uiv(this.addr,t)}function WS(n,t){n.uniform2uiv(this.addr,t)}function XS(n,t){n.uniform3uiv(this.addr,t)}function $S(n,t){n.uniform4uiv(this.addr,t)}function qS(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Cp,r[o])}function YS(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Pp,r[o])}function jS(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lp,r[o])}function KS(n,t,e){const i=this.cache,s=t.length,r=Ea(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Rp,r[o])}function ZS(n){switch(n){case 5126:return DS;case 35664:return IS;case 35665:return US;case 35666:return NS;case 35674:return FS;case 35675:return OS;case 35676:return BS;case 5124:case 35670:return zS;case 35667:case 35671:return kS;case 35668:case 35672:return HS;case 35669:case 35673:return VS;case 5125:return GS;case 36294:return WS;case 36295:return XS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return qS;case 35679:case 36299:case 36307:return YS;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return KS}}class JS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=LS(e.type)}}class QS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ZS(e.type)}}class tM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function $h(n,t){n.seq.push(t),n.map[t.id]=t}function eM(n,t,e){const i=n.name,s=i.length;for(Sl.lastIndex=0;;){const r=Sl.exec(i),o=Sl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$h(e,c===void 0?new JS(a,n,t):new QS(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new tM(a),$h(e,h)),e=h}}}class No{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);eM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function qh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const nM=37297;let iM=0;function sM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function rM(n){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(n);let i;switch(t===e?i="":t===Qo&&e===Jo?i="LinearDisplayP3ToLinearSRGB":t===Jo&&e===Qo&&(i="LinearSRGBToLinearDisplayP3"),n){case Di:case Ma:return[i,"LinearTransferOETF"];case on:case lu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Yh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sM(n.getShaderSource(t),o)}else return s}function oM(n,t){const e=rM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function aM(n,t){let e;switch(t){case Jd:e="Linear";break;case Qd:e="Reinhard";break;case tp:e="Cineon";break;case eu:e="ACESFilmic";break;case ep:e="AgX";break;case np:e="Neutral";break;case Cv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mo=new U;function lM(){Qt.getLuminanceCoefficients(mo);const n=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function uM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ur(n){return n!==""}function jh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(fM,pM)}const dM=new Map;function pM(n,t){let e=Xt[t];if(e===void 0){const i=dM.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(n){return n.replace(mM,gM)}function gM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _M(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===av?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function vM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case Hs:t="ENVMAP_TYPE_CUBE";break;case Sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function yM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zd:t="ENVMAP_BLENDING_MULTIPLY";break;case wv:t="ENVMAP_BLENDING_MIX";break;case Av:t="ENVMAP_BLENDING_ADD";break}return t}function SM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function MM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=_M(e),c=vM(e),u=xM(e),h=yM(e),f=SM(e),d=cM(e),g=uM(r),v=s.createProgram();let p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`)):(p=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),m=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?aM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,oM("linearToOutputTexel",e.outputColorSpace),lM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),o=Pc(o),o=jh(o,e),o=Kh(o,e),a=Pc(a),a=jh(a,e),a=Kh(a,e),o=Zh(o),a=Zh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=w+p+o,S=w+m+a,A=qh(s,s.VERTEX_SHADER,b),R=qh(s,s.FRAGMENT_SHADER,S);s.attachShader(v,A),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(E){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(A).trim(),J=s.getShaderInfoLog(R).trim();let it=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,R);else{const W=Yh(s,A,"vertex"),B=Yh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+W+`
`+B)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(k===""||J==="")&&(G=!1);G&&(E.diagnostics={runnable:it,programLog:I,vertexShader:{log:k,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(A),s.deleteShader(R),L=new No(s,v),H=hM(s,v)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let H;this.getAttributes=function(){return H===void 0&&P(this),H};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,nM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}let EM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new TM(t),e.set(t,i)),i}}class TM{constructor(t){this.id=EM++,this.code=t,this.usedTimes=0}}function wM(n,t,e,i,s,r,o){const a=new cu,l=new bM,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,I,k,J){const it=k.fog,G=J.geometry,W=x.isMeshStandardMaterial?k.environment:null,B=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),ut=B&&B.mapping===Sa?B.image.height:null,pt=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Nt=_t!==void 0?_t.length:0;let jt=0;G.morphAttributes.position!==void 0&&(jt=1),G.morphAttributes.normal!==void 0&&(jt=2),G.morphAttributes.color!==void 0&&(jt=3);let nt,lt,vt,xt;if(pt){const Ke=Bn[pt];nt=Ke.vertexShader,lt=Ke.fragmentShader}else nt=x.vertexShader,lt=x.fragmentShader,l.update(x),vt=l.getVertexShaderID(x),xt=l.getFragmentShaderID(x);const zt=n.getRenderTarget(),Ft=J.isInstancedMesh===!0,qt=J.isBatchedMesh===!0,se=!!x.map,C=!!x.matcap,y=!!B,j=!!x.aoMap,Q=!!x.lightMap,K=!!x.bumpMap,X=!!x.normalMap,ot=!!x.displacementMap,et=!!x.emissiveMap,M=!!x.metalnessMap,_=!!x.roughnessMap,D=x.anisotropy>0,F=x.clearcoat>0,$=x.dispersion>0,V=x.iridescence>0,ht=x.sheen>0,at=x.transmission>0,ct=D&&!!x.anisotropyMap,Lt=F&&!!x.clearcoatMap,rt=F&&!!x.clearcoatNormalMap,gt=F&&!!x.clearcoatRoughnessMap,Ct=V&&!!x.iridescenceMap,It=V&&!!x.iridescenceThicknessMap,bt=ht&&!!x.sheenColorMap,Ot=ht&&!!x.sheenRoughnessMap,Dt=!!x.specularMap,re=!!x.specularColorMap,N=!!x.specularIntensityMap,Mt=at&&!!x.transmissionMap,tt=at&&!!x.thicknessMap,st=!!x.gradientMap,yt=!!x.alphaMap,Et=x.alphaTest>0,Zt=!!x.alphaHash,Se=!!x.extensions;let je=Ai;x.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(je=n.toneMapping);const Jt={shaderID:pt,shaderType:x.type,shaderName:x.name,vertexShader:nt,fragmentShader:lt,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:xt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:qt,batchingColor:qt&&J._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&J.instanceColor!==null,instancingMorph:Ft&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:zt===null?n.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:Di,alphaToCoverage:!!x.alphaToCoverage,map:se,matcap:C,envMap:y,envMapMode:y&&B.mapping,envMapCubeUVHeight:ut,aoMap:j,lightMap:Q,bumpMap:K,normalMap:X,displacementMap:d&&ot,emissiveMap:et,normalMapObjectSpace:X&&x.normalMapType===Iv,normalMapTangentSpace:X&&x.normalMapType===Dv,metalnessMap:M,roughnessMap:_,anisotropy:D,anisotropyMap:ct,clearcoat:F,clearcoatMap:Lt,clearcoatNormalMap:rt,clearcoatRoughnessMap:gt,dispersion:$,iridescence:V,iridescenceMap:Ct,iridescenceThicknessMap:It,sheen:ht,sheenColorMap:bt,sheenRoughnessMap:Ot,specularMap:Dt,specularColorMap:re,specularIntensityMap:N,transmission:at,transmissionMap:Mt,thicknessMap:tt,gradientMap:st,opaque:x.transparent===!1&&x.blending===ts&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:Et,alphaHash:Zt,combine:x.combine,mapUv:se&&p(x.map.channel),aoMapUv:j&&p(x.aoMap.channel),lightMapUv:Q&&p(x.lightMap.channel),bumpMapUv:K&&p(x.bumpMap.channel),normalMapUv:X&&p(x.normalMap.channel),displacementMapUv:ot&&p(x.displacementMap.channel),emissiveMapUv:et&&p(x.emissiveMap.channel),metalnessMapUv:M&&p(x.metalnessMap.channel),roughnessMapUv:_&&p(x.roughnessMap.channel),anisotropyMapUv:ct&&p(x.anisotropyMap.channel),clearcoatMapUv:Lt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:It&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&p(x.sheenRoughnessMap.channel),specularMapUv:Dt&&p(x.specularMap.channel),specularColorMapUv:re&&p(x.specularColorMap.channel),specularIntensityMapUv:N&&p(x.specularIntensityMap.channel),transmissionMapUv:Mt&&p(x.transmissionMap.channel),thicknessMapUv:tt&&p(x.thicknessMap.channel),alphaMapUv:yt&&p(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(X||D),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!G.attributes.uv&&(se||yt),fog:!!it,useFog:x.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:jt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,decodeVideoTexture:se&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===he,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===Qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function w(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(b(E,x),S(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function b(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function A(x){const E=v[x.type];let I;if(E){const k=Bn[E];I=Dr.clone(k.uniforms)}else I=x.uniforms;return I}function R(x,E){let I;for(let k=0,J=u.length;k<J;k++){const it=u[k];if(it.cacheKey===E){I=it,++I.usedTimes;break}}return I===void 0&&(I=new MM(n,E,x,r),u.push(I)),I}function P(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function L(x){l.remove(x)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:A,acquireProgram:R,releaseProgram:P,releaseShaderCache:L,programs:u,dispose:H}}function AM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function CM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Qh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function tf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,g,v,p){let m=n[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},n[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=p),t++,m}function a(h,f,d,g,v,p){const m=o(h,f,d,g,v,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(h,f,d,g,v,p){const m=o(h,f,d,g,v,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,f){e.length>1&&e.sort(h||CM),i.length>1&&i.sort(f||Qh),s.length>1&&s.sort(f||Qh)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function RM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new tf,n.set(i,[o])):s>=r.length?(o=new tf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function PM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Vt};break;case"SpotLight":e={position:new U,direction:new U,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function LM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let DM=0;function IM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function UM(n){const t=new PM,e=LM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new pe,o=new pe;function a(c){let u=0,h=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,w=0,b=0,S=0,A=0,R=0,P=0;c.sort(IM);for(let H=0,x=c.length;H<x;H++){const E=c[H],I=E.color,k=E.intensity,J=E.distance,it=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=I.r*k,h+=I.g*k,f+=I.b*k;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],k);P++}else if(E.isDirectionalLight){const G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const W=E.shadow,B=e.get(E);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=it,i.directionalShadowMatrix[d]=E.shadow.matrix,w++}i.directional[d]=G,d++}else if(E.isSpotLight){const G=t.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(I).multiplyScalar(k),G.distance=J,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[v]=G;const W=E.shadow;if(E.map&&(i.spotLightMap[A]=E.map,A++,W.updateMatrices(E),E.castShadow&&R++),i.spotLightMatrix[v]=W.matrix,E.castShadow){const B=e.get(E);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=it,S++}v++}else if(E.isRectAreaLight){const G=t.get(E);G.color.copy(I).multiplyScalar(k),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=G,p++}else if(E.isPointLight){const G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const W=E.shadow,B=e.get(E);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=it,i.pointShadowMatrix[g]=E.shadow.matrix,b++}i.point[g]=G,g++}else if(E.isHemisphereLight){const G=t.get(E);G.skyColor.copy(E.color).multiplyScalar(k),G.groundColor.copy(E.groundColor).multiplyScalar(k),i.hemi[m]=G,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==S||L.numSpotMaps!==A||L.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,L.directionalLength=d,L.pointLength=g,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=S,L.numSpotMaps=A,L.numLightProbes=P,i.version=DM++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const p=u.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const b=c[m];if(b.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(b.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(b.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function ef(n){const t=new UM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function NM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ef(n),t.set(s,[a])):r>=o.length?(a=new ef(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class FM extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OM extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kM(n,t,e){let i=new bp;const s=new At,r=new At,o=new ye,a=new FM({depthPacking:Lv}),l=new OM,c={},u=e.maxTextureSize,h={[Pi]:Qe,[Qe]:Pi,[ri]:ri},f=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:BM,fragmentShader:zM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd;let m=this.type;this.render=function(R,P,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const H=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),I=n.state;I.setBlending(li),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=m!==ti&&this.type===ti,J=m===ti&&this.type!==ti;for(let it=0,G=R.length;it<G;it++){const W=R[it],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ut=B.getFrameExtents();if(s.multiply(ut),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,B.mapSize.y=r.y)),B.map===null||k===!0||J===!0){const _t=this.type!==ti?{minFilter:vn,magFilter:vn}:{};B.map!==null&&B.map.dispose(),B.map=new Rn(s.x,s.y,_t),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const pt=B.getViewportCount();for(let _t=0;_t<pt;_t++){const Nt=B.getViewport(_t);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),I.viewport(o),B.updateMatrices(W,_t),i=B.getFrustum(),S(P,L,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===ti&&w(B,L),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(H,x,E)};function w(R,P){const L=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,L,f,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,L,d,v,null)}function b(R,P,L,H){let x=null;const E=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)x=E;else if(x=L.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const I=x.uuid,k=P.uuid;let J=c[I];J===void 0&&(J={},c[I]=J);let it=J[k];it===void 0&&(it=x.clone(),J[k]=it,P.addEventListener("dispose",A)),x=it}if(x.visible=P.visible,x.wireframe=P.wireframe,H===ti?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:h[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=n.properties.get(x);I.light=L}return x}function S(R,P,L,H,x){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===ti)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const k=t.update(R),J=R.material;if(Array.isArray(J)){const it=k.groups;for(let G=0,W=it.length;G<W;G++){const B=it[G],ut=J[B.materialIndex];if(ut&&ut.visible){const pt=b(R,ut,H,x);R.onBeforeShadow(n,R,P,L,k,pt,B),n.renderBufferDirect(L,null,k,pt,R,B),R.onAfterShadow(n,R,P,L,k,pt,B)}}}else if(J.visible){const it=b(R,J,H,x);R.onBeforeShadow(n,R,P,L,k,it,null),n.renderBufferDirect(L,null,k,it,R,null),R.onAfterShadow(n,R,P,L,k,it,null)}}const I=R.children;for(let k=0,J=I.length;k<J;k++)S(I[k],P,L,H,x)}function A(R){R.target.removeEventListener("dispose",A);for(const L in c){const H=c[L],x=R.target.uuid;x in H&&(H[x].dispose(),delete H[x])}}}const HM={[Xl]:$l,[ql]:Kl,[Yl]:Zl,[zs]:jl,[$l]:Xl,[Kl]:ql,[Zl]:Yl,[jl]:zs};function VM(n){function t(){let N=!1;const Mt=new ye;let tt=null;const st=new ye(0,0,0,0);return{setMask:function(yt){tt!==yt&&!N&&(n.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){N=yt},setClear:function(yt,Et,Zt,Se,je){je===!0&&(yt*=Se,Et*=Se,Zt*=Se),Mt.set(yt,Et,Zt,Se),st.equals(Mt)===!1&&(n.clearColor(yt,Et,Zt,Se),st.copy(Mt))},reset:function(){N=!1,tt=null,st.set(-1,0,0,0)}}}function e(){let N=!1,Mt=!1,tt=null,st=null,yt=null;return{setReversed:function(Et){Mt=Et},setTest:function(Et){Et?vt(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(Et){tt!==Et&&!N&&(n.depthMask(Et),tt=Et)},setFunc:function(Et){if(Mt&&(Et=HM[Et]),st!==Et){switch(Et){case Xl:n.depthFunc(n.NEVER);break;case $l:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case jl:n.depthFunc(n.GEQUAL);break;case Kl:n.depthFunc(n.GREATER);break;case Zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}st=Et}},setLocked:function(Et){N=Et},setClear:function(Et){yt!==Et&&(n.clearDepth(Et),yt=Et)},reset:function(){N=!1,tt=null,st=null,yt=null}}}function i(){let N=!1,Mt=null,tt=null,st=null,yt=null,Et=null,Zt=null,Se=null,je=null;return{setTest:function(Jt){N||(Jt?vt(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(Jt){Mt!==Jt&&!N&&(n.stencilMask(Jt),Mt=Jt)},setFunc:function(Jt,Ke,$n){(tt!==Jt||st!==Ke||yt!==$n)&&(n.stencilFunc(Jt,Ke,$n),tt=Jt,st=Ke,yt=$n)},setOp:function(Jt,Ke,$n){(Et!==Jt||Zt!==Ke||Se!==$n)&&(n.stencilOp(Jt,Ke,$n),Et=Jt,Zt=Ke,Se=$n)},setLocked:function(Jt){N=Jt},setClear:function(Jt){je!==Jt&&(n.clearStencil(Jt),je=Jt)},reset:function(){N=!1,Mt=null,tt=null,st=null,yt=null,Et=null,Zt=null,Se=null,je=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,w=null,b=null,S=null,A=null,R=new Vt(0,0,0),P=0,L=!1,H=null,x=null,E=null,I=null,k=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,G=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),it=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),it=G>=2);let B=null,ut={};const pt=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),Nt=new ye().fromArray(pt),jt=new ye().fromArray(_t);function nt(N,Mt,tt,st){const yt=new Uint8Array(4),Et=n.createTexture();n.bindTexture(N,Et),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<tt;Zt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(Mt+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return Et}const lt={};lt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(n.DEPTH_TEST),r.setFunc(zs),Q(!1),K(hh),vt(n.CULL_FACE),y(li);function vt(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function xt(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function zt(N,Mt){return u[N]!==Mt?(n.bindFramebuffer(N,Mt),u[N]=Mt,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Mt),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Ft(N,Mt){let tt=f,st=!1;if(N){tt=h.get(Mt),tt===void 0&&(tt=[],h.set(Mt,tt));const yt=N.textures;if(tt.length!==yt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,Zt=yt.length;Et<Zt;Et++)tt[Et]=n.COLOR_ATTACHMENT0+Et;tt.length=yt.length,st=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,st=!0);st&&n.drawBuffers(tt)}function qt(N){return d!==N?(n.useProgram(N),d=N,!0):!1}const se={[qi]:n.FUNC_ADD,[cv]:n.FUNC_SUBTRACT,[uv]:n.FUNC_REVERSE_SUBTRACT};se[hv]=n.MIN,se[fv]=n.MAX;const C={[dv]:n.ZERO,[pv]:n.ONE,[mv]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[Sv]:n.SRC_ALPHA_SATURATE,[xv]:n.DST_COLOR,[_v]:n.DST_ALPHA,[gv]:n.ONE_MINUS_SRC_COLOR,[Wl]:n.ONE_MINUS_SRC_ALPHA,[yv]:n.ONE_MINUS_DST_COLOR,[vv]:n.ONE_MINUS_DST_ALPHA,[Mv]:n.CONSTANT_COLOR,[Ev]:n.ONE_MINUS_CONSTANT_COLOR,[bv]:n.CONSTANT_ALPHA,[Tv]:n.ONE_MINUS_CONSTANT_ALPHA};function y(N,Mt,tt,st,yt,Et,Zt,Se,je,Jt){if(N===li){g===!0&&(xt(n.BLEND),g=!1);return}if(g===!1&&(vt(n.BLEND),g=!0),N!==lv){if(N!==v||Jt!==L){if((p!==qi||b!==qi)&&(n.blendEquation(n.FUNC_ADD),p=qi,b=qi),Jt)switch(N){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _n:n.blendFunc(n.ONE,n.ONE);break;case fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _n:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,w=null,S=null,A=null,R.set(0,0,0),P=0,v=N,L=Jt}return}yt=yt||Mt,Et=Et||tt,Zt=Zt||st,(Mt!==p||yt!==b)&&(n.blendEquationSeparate(se[Mt],se[yt]),p=Mt,b=yt),(tt!==m||st!==w||Et!==S||Zt!==A)&&(n.blendFuncSeparate(C[tt],C[st],C[Et],C[Zt]),m=tt,w=st,S=Et,A=Zt),(Se.equals(R)===!1||je!==P)&&(n.blendColor(Se.r,Se.g,Se.b,je),R.copy(Se),P=je),v=N,L=!1}function j(N,Mt){N.side===ri?xt(n.CULL_FACE):vt(n.CULL_FACE);let tt=N.side===Qe;Mt&&(tt=!tt),Q(tt),N.blending===ts&&N.transparent===!1?y(li):y(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const st=N.stencilWrite;o.setTest(st),st&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?vt(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(N){H!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),H=N)}function K(N){N!==rv?(vt(n.CULL_FACE),N!==x&&(N===hh?n.cullFace(n.BACK):N===ov?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),x=N}function X(N){N!==E&&(it&&n.lineWidth(N),E=N)}function ot(N,Mt,tt){N?(vt(n.POLYGON_OFFSET_FILL),(I!==Mt||k!==tt)&&(n.polygonOffset(Mt,tt),I=Mt,k=tt)):xt(n.POLYGON_OFFSET_FILL)}function et(N){N?vt(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function M(N){N===void 0&&(N=n.TEXTURE0+J-1),B!==N&&(n.activeTexture(N),B=N)}function _(N,Mt,tt){tt===void 0&&(B===null?tt=n.TEXTURE0+J-1:tt=B);let st=ut[tt];st===void 0&&(st={type:void 0,texture:void 0},ut[tt]=st),(st.type!==N||st.texture!==Mt)&&(B!==tt&&(n.activeTexture(tt),B=tt),n.bindTexture(N,Mt||lt[N]),st.type=N,st.texture=Mt)}function D(){const N=ut[B];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function F(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(N){Nt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Nt.copy(N))}function bt(N){jt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),jt.copy(N))}function Ot(N,Mt){let tt=l.get(Mt);tt===void 0&&(tt=new WeakMap,l.set(Mt,tt));let st=tt.get(N);st===void 0&&(st=n.getUniformBlockIndex(Mt,N.name),tt.set(N,st))}function Dt(N,Mt){const st=l.get(Mt).get(N);a.get(Mt)!==st&&(n.uniformBlockBinding(Mt,st,N.__bindingPointIndex),a.set(Mt,st))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},B=null,ut={},u={},h=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,w=null,b=null,S=null,A=null,R=new Vt(0,0,0),P=0,L=!1,H=null,x=null,E=null,I=null,k=null,Nt.set(0,0,n.canvas.width,n.canvas.height),jt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:vt,disable:xt,bindFramebuffer:zt,drawBuffers:Ft,useProgram:qt,setBlending:y,setMaterial:j,setFlipSided:Q,setCullFace:K,setLineWidth:X,setPolygonOffset:ot,setScissorTest:et,activeTexture:M,bindTexture:_,unbindTexture:D,compressedTexImage2D:F,compressedTexImage3D:$,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Ot,uniformBlockBinding:Dt,texStorage2D:Lt,texStorage3D:rt,texSubImage2D:V,texSubImage3D:ht,compressedTexSubImage2D:at,compressedTexSubImage3D:ct,scissor:It,viewport:bt,reset:re}}function nf(n,t,e,i){const s=GM(i);switch(e){case ap:return n*t;case cp:return n*t;case up:return n*t*2;case hp:return n*t/s.components*s.byteLength;case ru:return n*t/s.components*s.byteLength;case fp:return n*t*2/s.components*s.byteLength;case ou:return n*t*2/s.components*s.byteLength;case lp:return n*t*3/s.components*s.byteLength;case wn:return n*t*4/s.components*s.byteLength;case au:return n*t*4/s.components*s.byteLength;case Co:case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Po:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(n,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(n,8)*Math.max(t,8)/2;case oc:case ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Do:case Ec:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case dp:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wc:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function GM(n){switch(n){case hi:case sp:return{byteLength:1,components:1};case Lr:case rp:case ci:return{byteLength:2,components:1};case iu:case su:return{byteLength:2,components:4};case es:case nu:case oi:return{byteLength:4,components:1};case op:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function WM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return d?new OffscreenCanvas(M,_):ea("canvas")}function v(M,_,D){let F=1;const $=et(M);if(($.width>D||$.height>D)&&(F=D/Math.max($.width,$.height)),F<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const V=Math.floor(F*$.width),ht=Math.floor(F*$.height);h===void 0&&(h=g(V,ht));const at=_?g(V,ht):h;return at.width=V,at.height=ht,at.getContext("2d").drawImage(M,0,0,V,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+ht+")."),at}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),M;return M}function p(M){return M.generateMipmaps&&M.minFilter!==vn&&M.minFilter!==qe}function m(M){n.generateMipmap(M)}function w(M,_,D,F,$=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=_;if(_===n.RED&&(D===n.FLOAT&&(V=n.R32F),D===n.HALF_FLOAT&&(V=n.R16F),D===n.UNSIGNED_BYTE&&(V=n.R8)),_===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.R8UI),D===n.UNSIGNED_SHORT&&(V=n.R16UI),D===n.UNSIGNED_INT&&(V=n.R32UI),D===n.BYTE&&(V=n.R8I),D===n.SHORT&&(V=n.R16I),D===n.INT&&(V=n.R32I)),_===n.RG&&(D===n.FLOAT&&(V=n.RG32F),D===n.HALF_FLOAT&&(V=n.RG16F),D===n.UNSIGNED_BYTE&&(V=n.RG8)),_===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RG8UI),D===n.UNSIGNED_SHORT&&(V=n.RG16UI),D===n.UNSIGNED_INT&&(V=n.RG32UI),D===n.BYTE&&(V=n.RG8I),D===n.SHORT&&(V=n.RG16I),D===n.INT&&(V=n.RG32I)),_===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RGB8UI),D===n.UNSIGNED_SHORT&&(V=n.RGB16UI),D===n.UNSIGNED_INT&&(V=n.RGB32UI),D===n.BYTE&&(V=n.RGB8I),D===n.SHORT&&(V=n.RGB16I),D===n.INT&&(V=n.RGB32I)),_===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),D===n.UNSIGNED_INT&&(V=n.RGBA32UI),D===n.BYTE&&(V=n.RGBA8I),D===n.SHORT&&(V=n.RGBA16I),D===n.INT&&(V=n.RGBA32I)),_===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),_===n.RGBA){const ht=$?Zo:Qt.getTransfer(F);D===n.FLOAT&&(V=n.RGBA32F),D===n.HALF_FLOAT&&(V=n.RGBA16F),D===n.UNSIGNED_BYTE&&(V=ht===he?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function b(M,_){let D;return M?_===null||_===es||_===Vs?D=n.DEPTH24_STENCIL8:_===oi?D=n.DEPTH32F_STENCIL8:_===Lr&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===es||_===Vs?D=n.DEPTH_COMPONENT24:_===oi?D=n.DEPTH_COMPONENT32F:_===Lr&&(D=n.DEPTH_COMPONENT16),D}function S(M,_){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==vn&&M.minFilter!==qe?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function A(M){const _=M.target;_.removeEventListener("dispose",A),P(_),_.isVideoTexture&&u.delete(_)}function R(M){const _=M.target;_.removeEventListener("dispose",R),H(_)}function P(M){const _=i.get(M);if(_.__webglInit===void 0)return;const D=M.source,F=f.get(D);if(F){const $=F[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(M),Object.keys(F).length===0&&f.delete(D)}i.remove(M)}function L(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const D=M.source,F=f.get(D);delete F[_.__cacheKey],o.memory.textures--}function H(M){const _=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(_.__webglFramebuffer[F]))for(let $=0;$<_.__webglFramebuffer[F].length;$++)n.deleteFramebuffer(_.__webglFramebuffer[F][$]);else n.deleteFramebuffer(_.__webglFramebuffer[F]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[F])}else{if(Array.isArray(_.__webglFramebuffer))for(let F=0;F<_.__webglFramebuffer.length;F++)n.deleteFramebuffer(_.__webglFramebuffer[F]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let F=0;F<_.__webglColorRenderbuffer.length;F++)_.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[F]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=M.textures;for(let F=0,$=D.length;F<$;F++){const V=i.get(D[F]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(D[F])}i.remove(M)}let x=0;function E(){x=0}function I(){const M=x;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),x+=1,M}function k(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function J(M,_){const D=i.get(M);if(M.isVideoTexture&&X(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const F=M.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{jt(D,M,_);return}}e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+_)}function it(M,_){const D=i.get(M);if(M.version>0&&D.__version!==M.version){jt(D,M,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+_)}function G(M,_){const D=i.get(M);if(M.version>0&&D.__version!==M.version){jt(D,M,_);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+_)}function W(M,_){const D=i.get(M);if(M.version>0&&D.__version!==M.version){nt(D,M,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+_)}const B={[tc]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[ec]:n.MIRRORED_REPEAT},ut={[vn]:n.NEAREST,[Rv]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[qe]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},pt={[Uv]:n.NEVER,[kv]:n.ALWAYS,[Nv]:n.LESS,[pp]:n.LEQUAL,[Fv]:n.EQUAL,[zv]:n.GEQUAL,[Ov]:n.GREATER,[Bv]:n.NOTEQUAL};function _t(M,_){if(_.type===oi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===qe||_.magFilter===qa||_.magFilter===Yr||_.magFilter===Ki||_.minFilter===qe||_.minFilter===qa||_.minFilter===Yr||_.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,B[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,B[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,B[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ut[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vn||_.minFilter!==Yr&&_.minFilter!==Ki||_.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Nt(M,_){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",A));const F=_.source;let $=f.get(F);$===void 0&&($={},f.set(F,$));const V=k(_);if(V!==M.__cacheKey){$[V]===void 0&&($[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),$[V].usedTimes++;const ht=$[M.__cacheKey];ht!==void 0&&($[M.__cacheKey].usedTimes--,ht.usedTimes===0&&L(_)),M.__cacheKey=V,M.__webglTexture=$[V].texture}return D}function jt(M,_,D){let F=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(F=n.TEXTURE_3D);const $=Nt(M,_),V=_.source;e.bindTexture(F,M.__webglTexture,n.TEXTURE0+D);const ht=i.get(V);if(V.version!==ht.__version||$===!0){e.activeTexture(n.TEXTURE0+D);const at=Qt.getPrimaries(Qt.workingColorSpace),ct=_.colorSpace===bi?null:Qt.getPrimaries(_.colorSpace),Lt=_.colorSpace===bi||at===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let rt=v(_.image,!1,s.maxTextureSize);rt=ot(_,rt);const gt=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type);let It=w(_.internalFormat,gt,Ct,_.colorSpace,_.isVideoTexture);_t(F,_);let bt;const Ot=_.mipmaps,Dt=_.isVideoTexture!==!0,re=ht.__version===void 0||$===!0,N=V.dataReady,Mt=S(_,rt);if(_.isDepthTexture)It=b(_.format===Gs,_.type),re&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,It,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,It,rt.width,rt.height,0,gt,Ct,null));else if(_.isDataTexture)if(Ot.length>0){Dt&&re&&e.texStorage2D(n.TEXTURE_2D,Mt,It,Ot[0].width,Ot[0].height);for(let tt=0,st=Ot.length;tt<st;tt++)bt=Ot[tt],Dt?N&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,bt.width,bt.height,gt,Ct,bt.data):e.texImage2D(n.TEXTURE_2D,tt,It,bt.width,bt.height,0,gt,Ct,bt.data);_.generateMipmaps=!1}else Dt?(re&&e.texStorage2D(n.TEXTURE_2D,Mt,It,rt.width,rt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,gt,Ct,rt.data)):e.texImage2D(n.TEXTURE_2D,0,It,rt.width,rt.height,0,gt,Ct,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Dt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,It,Ot[0].width,Ot[0].height,rt.depth);for(let tt=0,st=Ot.length;tt<st;tt++)if(bt=Ot[tt],_.format!==wn)if(gt!==null)if(Dt){if(N)if(_.layerUpdates.size>0){const yt=nf(bt.width,bt.height,_.format,_.type);for(const Et of _.layerUpdates){const Zt=bt.data.subarray(Et*yt/bt.data.BYTES_PER_ELEMENT,(Et+1)*yt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,Et,bt.width,bt.height,1,gt,Zt,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,bt.width,bt.height,rt.depth,gt,bt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,It,bt.width,bt.height,rt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,bt.width,bt.height,rt.depth,gt,Ct,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,It,bt.width,bt.height,rt.depth,0,gt,Ct,bt.data)}else{Dt&&re&&e.texStorage2D(n.TEXTURE_2D,Mt,It,Ot[0].width,Ot[0].height);for(let tt=0,st=Ot.length;tt<st;tt++)bt=Ot[tt],_.format!==wn?gt!==null?Dt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,bt.width,bt.height,gt,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,It,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?N&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,bt.width,bt.height,gt,Ct,bt.data):e.texImage2D(n.TEXTURE_2D,tt,It,bt.width,bt.height,0,gt,Ct,bt.data)}else if(_.isDataArrayTexture)if(Dt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,It,rt.width,rt.height,rt.depth),N)if(_.layerUpdates.size>0){const tt=nf(rt.width,rt.height,_.format,_.type);for(const st of _.layerUpdates){const yt=rt.data.subarray(st*tt/rt.data.BYTES_PER_ELEMENT,(st+1)*tt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,rt.width,rt.height,1,gt,Ct,yt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,gt,Ct,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,rt.width,rt.height,rt.depth,0,gt,Ct,rt.data);else if(_.isData3DTexture)Dt?(re&&e.texStorage3D(n.TEXTURE_3D,Mt,It,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,gt,Ct,rt.data)):e.texImage3D(n.TEXTURE_3D,0,It,rt.width,rt.height,rt.depth,0,gt,Ct,rt.data);else if(_.isFramebufferTexture){if(re)if(Dt)e.texStorage2D(n.TEXTURE_2D,Mt,It,rt.width,rt.height);else{let tt=rt.width,st=rt.height;for(let yt=0;yt<Mt;yt++)e.texImage2D(n.TEXTURE_2D,yt,It,tt,st,0,gt,Ct,null),tt>>=1,st>>=1}}else if(Ot.length>0){if(Dt&&re){const tt=et(Ot[0]);e.texStorage2D(n.TEXTURE_2D,Mt,It,tt.width,tt.height)}for(let tt=0,st=Ot.length;tt<st;tt++)bt=Ot[tt],Dt?N&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,gt,Ct,bt):e.texImage2D(n.TEXTURE_2D,tt,It,gt,Ct,bt);_.generateMipmaps=!1}else if(Dt){if(re){const tt=et(rt);e.texStorage2D(n.TEXTURE_2D,Mt,It,tt.width,tt.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Ct,rt)}else e.texImage2D(n.TEXTURE_2D,0,It,gt,Ct,rt);p(_)&&m(F),ht.__version=V.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function nt(M,_,D){if(_.image.length!==6)return;const F=Nt(M,_),$=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+D);const V=i.get($);if($.version!==V.__version||F===!0){e.activeTexture(n.TEXTURE0+D);const ht=Qt.getPrimaries(Qt.workingColorSpace),at=_.colorSpace===bi?null:Qt.getPrimaries(_.colorSpace),ct=_.colorSpace===bi||ht===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Lt=_.isCompressedTexture||_.image[0].isCompressedTexture,rt=_.image[0]&&_.image[0].isDataTexture,gt=[];for(let st=0;st<6;st++)!Lt&&!rt?gt[st]=v(_.image[st],!0,s.maxCubemapSize):gt[st]=rt?_.image[st].image:_.image[st],gt[st]=ot(_,gt[st]);const Ct=gt[0],It=r.convert(_.format,_.colorSpace),bt=r.convert(_.type),Ot=w(_.internalFormat,It,bt,_.colorSpace),Dt=_.isVideoTexture!==!0,re=V.__version===void 0||F===!0,N=$.dataReady;let Mt=S(_,Ct);_t(n.TEXTURE_CUBE_MAP,_);let tt;if(Lt){Dt&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Ot,Ct.width,Ct.height);for(let st=0;st<6;st++){tt=gt[st].mipmaps;for(let yt=0;yt<tt.length;yt++){const Et=tt[yt];_.format!==wn?It!==null?Dt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,Et.width,Et.height,It,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Ot,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,Et.width,Et.height,It,bt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Ot,Et.width,Et.height,0,It,bt,Et.data)}}}else{if(tt=_.mipmaps,Dt&&re){tt.length>0&&Mt++;const st=et(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Ot,st.width,st.height)}for(let st=0;st<6;st++)if(rt){Dt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,gt[st].width,gt[st].height,It,bt,gt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,gt[st].width,gt[st].height,0,It,bt,gt[st].data);for(let yt=0;yt<tt.length;yt++){const Zt=tt[yt].image[st].image;Dt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Zt.width,Zt.height,It,bt,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Ot,Zt.width,Zt.height,0,It,bt,Zt.data)}}else{Dt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,It,bt,gt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,It,bt,gt[st]);for(let yt=0;yt<tt.length;yt++){const Et=tt[yt];Dt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,It,bt,Et.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Ot,It,bt,Et.image[st])}}}p(_)&&m(n.TEXTURE_CUBE_MAP),V.__version=$.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function lt(M,_,D,F,$,V){const ht=r.convert(D.format,D.colorSpace),at=r.convert(D.type),ct=w(D.internalFormat,ht,at,D.colorSpace);if(!i.get(_).__hasExternalTextures){const rt=Math.max(1,_.width>>V),gt=Math.max(1,_.height>>V);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,V,ct,rt,gt,_.depth,0,ht,at,null):e.texImage2D($,V,ct,rt,gt,0,ht,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,$,i.get(D).__webglTexture,0,Q(_)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,$,i.get(D).__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(M,_,D){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const F=_.depthTexture,$=F&&F.isDepthTexture?F.type:null,V=b(_.stencilBuffer,$),ht=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=Q(_);K(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,V,_.width,_.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,V,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,V,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,M)}else{const F=_.textures;for(let $=0;$<F.length;$++){const V=F[$],ht=r.convert(V.format,V.colorSpace),at=r.convert(V.type),ct=w(V.internalFormat,ht,at,V.colorSpace),Lt=Q(_);D&&K(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,ct,_.width,_.height):K(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,ct,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ct,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const F=i.get(_.depthTexture).__webglTexture,$=Q(_);if(_.depthTexture.format===Ns)K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(_.depthTexture.format===Gs)K(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function zt(M){const _=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const F=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),F){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,F.removeEventListener("dispose",$)};F.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=F}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");xt(_.__webglFramebuffer,M)}else if(D){_.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[F]),_.__webglDepthbuffer[F]===void 0)_.__webglDepthbuffer[F]=n.createRenderbuffer(),vt(_.__webglDepthbuffer[F],M,!1);else{const $=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,V)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),vt(_.__webglDepthbuffer,M,!1);else{const F=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,$)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(M,_,D){const F=i.get(M);_!==void 0&&lt(F.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&zt(M)}function qt(M){const _=M.texture,D=i.get(M),F=i.get(_);M.addEventListener("dispose",R);const $=M.textures,V=M.isWebGLCubeRenderTarget===!0,ht=$.length>1;if(ht||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=_.version,o.memory.textures++),V){D.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[at]=[];for(let ct=0;ct<_.mipmaps.length;ct++)D.__webglFramebuffer[at][ct]=n.createFramebuffer()}else D.__webglFramebuffer[at]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)D.__webglFramebuffer[at]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ht)for(let at=0,ct=$.length;at<ct;at++){const Lt=i.get($[at]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&K(M)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let at=0;at<$.length;at++){const ct=$[at];D.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[at]);const Lt=r.convert(ct.format,ct.colorSpace),rt=r.convert(ct.type),gt=w(ct.internalFormat,Lt,rt,ct.colorSpace,M.isXRRenderTarget===!0),Ct=Q(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,gt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,D.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(D.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),_t(n.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ct=0;ct<_.mipmaps.length;ct++)lt(D.__webglFramebuffer[at][ct],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else lt(D.__webglFramebuffer[at],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(_)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let at=0,ct=$.length;at<ct;at++){const Lt=$[at],rt=i.get(Lt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),_t(n.TEXTURE_2D,Lt),lt(D.__webglFramebuffer,M,Lt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),p(Lt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(at=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,F.__webglTexture),_t(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ct=0;ct<_.mipmaps.length;ct++)lt(D.__webglFramebuffer[ct],M,_,n.COLOR_ATTACHMENT0,at,ct);else lt(D.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,at,0);p(_)&&m(at),e.unbindTexture()}M.depthBuffer&&zt(M)}function se(M){const _=M.textures;for(let D=0,F=_.length;D<F;D++){const $=_[D];if(p($)){const V=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ht=i.get($).__webglTexture;e.bindTexture(V,ht),m(V),e.unbindTexture()}}}const C=[],y=[];function j(M){if(M.samples>0){if(K(M)===!1){const _=M.textures,D=M.width,F=M.height;let $=n.COLOR_BUFFER_BIT;const V=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(M),at=_.length>1;if(at)for(let ct=0;ct<_.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ct=0;ct<_.length;ct++){if(M.resolveDepthBuffer&&(M.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ct]);const Lt=i.get(_[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,D,F,0,0,D,F,$,n.NEAREST),l===!0&&(C.length=0,y.length=0,C.push(n.COLOR_ATTACHMENT0+ct),M.depthBuffer&&M.resolveDepthBuffer===!1&&(C.push(V),y.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ct=0;ct<_.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ct]);const Lt=i.get(_[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Q(M){return Math.min(s.maxSamples,M.samples)}function K(M){const _=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function X(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function ot(M,_){const D=M.colorSpace,F=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||D!==Di&&D!==bi&&(Qt.getTransfer(D)===he?(F!==wn||$!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function et(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=J,this.setTexture2DArray=it,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=Ft,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=K}function XM(n,t){function e(i,s=bi){let r;const o=Qt.getTransfer(s);if(i===hi)return n.UNSIGNED_BYTE;if(i===iu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===su)return n.UNSIGNED_SHORT_5_5_5_1;if(i===op)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sp)return n.BYTE;if(i===rp)return n.SHORT;if(i===Lr)return n.UNSIGNED_SHORT;if(i===nu)return n.INT;if(i===es)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===ap)return n.ALPHA;if(i===lp)return n.RGB;if(i===wn)return n.RGBA;if(i===cp)return n.LUMINANCE;if(i===up)return n.LUMINANCE_ALPHA;if(i===Ns)return n.DEPTH_COMPONENT;if(i===Gs)return n.DEPTH_STENCIL;if(i===hp)return n.RED;if(i===ru)return n.RED_INTEGER;if(i===fp)return n.RG;if(i===ou)return n.RG_INTEGER;if(i===au)return n.RGBA_INTEGER;if(i===Co||i===Ro||i===Po||i===Lo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===ac||i===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oc||i===ac)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cc||i===uc||i===hc||i===fc||i===dc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===Sc||i===Mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Do||i===Ec||i===bc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Do)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dp||i===Tc||i===wc||i===Ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class $M extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zi extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qM={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const YM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new be({vertexShader:YM,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xn(new Vr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZM extends is{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new KM,p=e.getContextAttributes();let m=null,w=null;const b=[],S=[],A=new At;let R=null;const P=new pn;P.layers.enable(1),P.viewport=new ye;const L=new pn;L.layers.enable(2),L.viewport=new ye;const H=[P,L],x=new $M;x.layers.enable(1),x.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let lt=b[nt];return lt===void 0&&(lt=new Ml,b[nt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(nt){let lt=b[nt];return lt===void 0&&(lt=new Ml,b[nt]=lt),lt.getGripSpace()},this.getHand=function(nt){let lt=b[nt];return lt===void 0&&(lt=new Ml,b[nt]=lt),lt.getHandSpace()};function k(nt){const lt=S.indexOf(nt.inputSource);if(lt===-1)return;const vt=b[lt];vt!==void 0&&(vt.update(nt.inputSource,nt.frame,c||o),vt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function J(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",it);for(let nt=0;nt<b.length;nt++){const lt=S[nt];lt!==null&&(S[nt]=null,b[nt].disconnect(lt))}E=null,I=null,v.reset(),t.setRenderTarget(m),d=null,f=null,h=null,s=null,w=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",J),s.addEventListener("inputsourceschange",it),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const lt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Rn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let lt=null,vt=null,xt=null;p.depth&&(xt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=p.stencil?Gs:Ns,vt=p.stencil?Vs:es);const zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Rn(f.textureWidth,f.textureHeight,{format:wn,type:hi,depthTexture:new Ap(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function it(nt){for(let lt=0;lt<nt.removed.length;lt++){const vt=nt.removed[lt],xt=S.indexOf(vt);xt>=0&&(S[xt]=null,b[xt].disconnect(vt))}for(let lt=0;lt<nt.added.length;lt++){const vt=nt.added[lt];let xt=S.indexOf(vt);if(xt===-1){for(let Ft=0;Ft<b.length;Ft++)if(Ft>=S.length){S.push(vt),xt=Ft;break}else if(S[Ft]===null){S[Ft]=vt,xt=Ft;break}if(xt===-1)break}const zt=b[xt];zt&&zt.connect(vt)}}const G=new U,W=new U;function B(nt,lt,vt){G.setFromMatrixPosition(lt.matrixWorld),W.setFromMatrixPosition(vt.matrixWorld);const xt=G.distanceTo(W),zt=lt.projectionMatrix.elements,Ft=vt.projectionMatrix.elements,qt=zt[14]/(zt[10]-1),se=zt[14]/(zt[10]+1),C=(zt[9]+1)/zt[5],y=(zt[9]-1)/zt[5],j=(zt[8]-1)/zt[0],Q=(Ft[8]+1)/Ft[0],K=qt*j,X=qt*Q,ot=xt/(-j+Q),et=ot*-j;if(lt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(et),nt.translateZ(ot),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),zt[10]===-1)nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const M=qt+ot,_=se+ot,D=K-et,F=X+(xt-et),$=C*se/_*M,V=y*se/_*M;nt.projectionMatrix.makePerspective(D,F,$,V,M,_),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ut(nt,lt){lt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(lt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let lt=nt.near,vt=nt.far;v.texture!==null&&(v.depthNear>0&&(lt=v.depthNear),v.depthFar>0&&(vt=v.depthFar)),x.near=L.near=P.near=lt,x.far=L.far=P.far=vt,(E!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,I=x.far);const xt=nt.parent,zt=x.cameras;ut(x,xt);for(let Ft=0;Ft<zt.length;Ft++)ut(zt[Ft],xt);zt.length===2?B(x,P,L):x.projectionMatrix.copy(P.projectionMatrix),pt(nt,x,xt)};function pt(nt,lt,vt){vt===null?nt.matrix.copy(lt.matrixWorld):(nt.matrix.copy(vt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(lt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Rc*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let _t=null;function Nt(nt,lt){if(u=lt.getViewerPose(c||o),g=lt,u!==null){const vt=u.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let xt=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,xt=!0);for(let Ft=0;Ft<vt.length;Ft++){const qt=vt[Ft];let se=null;if(d!==null)se=d.getViewport(qt);else{const y=h.getViewSubImage(f,qt);se=y.viewport,Ft===0&&(t.setRenderTargetTextures(w,y.colorTexture,f.ignoreDepthValues?void 0:y.depthStencilTexture),t.setRenderTarget(w))}let C=H[Ft];C===void 0&&(C=new pn,C.layers.enable(Ft),C.viewport=new ye,H[Ft]=C),C.matrix.fromArray(qt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(qt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(se.x,se.y,se.width,se.height),Ft===0&&(x.matrix.copy(C.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xt===!0&&x.cameras.push(C)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ft=h.getDepthInformation(vt[0]);Ft&&Ft.isValid&&Ft.texture&&v.init(t,Ft,s.renderState)}}for(let vt=0;vt<b.length;vt++){const xt=S[vt],zt=b[vt];xt!==null&&zt!==void 0&&zt.update(xt,lt,c||o)}_t&&_t(nt,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),g=null}const jt=new Tp;jt.setAnimationLoop(Nt),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}}const Gi=new Ln,JM=new pe;function QM(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Sp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,w,b,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,w,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=t.get(m),b=w.envMap,S=w.envMapRotation;b&&(p.envMap.value=b,Gi.copy(S),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),p.envMapRotation.value.setFromMatrix4(JM.makeRotationFromEuler(Gi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,w,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tE(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const S=b.program;i.uniformBlockBinding(w,S)}function c(w,b){let S=s[w.id];S===void 0&&(g(w),S=u(w),s[w.id]=S,w.addEventListener("dispose",p));const A=b.program;i.updateUBOMapping(w,A);const R=t.render.frame;r[w.id]!==R&&(f(w),r[w.id]=R)}function u(w){const b=h();w.__bindingPointIndex=b;const S=n.createBuffer(),A=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=s[w.id],S=w.uniforms,A=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,P=S.length;R<P;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let H=0,x=L.length;H<x;H++){const E=L[H];if(d(E,R,H,A)===!0){const I=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let J=0;for(let it=0;it<k.length;it++){const G=k[it],W=v(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,I+J,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,J),J+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,b,S,A){const R=w.value,P=b+"_"+S;if(A[P]===void 0)return typeof R=="number"||typeof R=="boolean"?A[P]=R:A[P]=R.clone(),!0;{const L=A[P];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return A[P]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(w){const b=w.uniforms;let S=0;const A=16;for(let P=0,L=b.length;P<L;P++){const H=Array.isArray(b[P])?b[P]:[b[P]];for(let x=0,E=H.length;x<E;x++){const I=H[x],k=Array.isArray(I.value)?I.value:[I.value];for(let J=0,it=k.length;J<it;J++){const G=k[J],W=v(G),B=S%A,ut=B%W.boundary,pt=B+ut;S+=ut,pt!==0&&A-pt<W.storage&&(S+=A-pt),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=W.storage}}}const R=S%A;return R>0&&(S+=A-R),w.__size=S,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){const b=w.target;b.removeEventListener("dispose",p);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class eE{constructor(t={}){const{canvas:e=Gv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=Ai,this.toneMappingExposure=1;const b=this;let S=!1,A=0,R=0,P=null,L=-1,H=null;const x=new ye,E=new ye;let I=null;const k=new Vt(0);let J=0,it=e.width,G=e.height,W=1,B=null,ut=null;const pt=new ye(0,0,it,G),_t=new ye(0,0,it,G);let Nt=!1;const jt=new bp;let nt=!1,lt=!1;const vt=new pe,xt=new pe,zt=new U,Ft=new ye,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function C(){return P===null?W:1}let y=i;function j(T,O){return e.getContext(T,O)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tu}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),y===null){const O="webgl2";if(y=j(O,T),y===null)throw j(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,K,X,ot,et,M,_,D,F,$,V,ht,at,ct,Lt,rt,gt,Ct,It,bt,Ot,Dt,re,N;function Mt(){Q=new oS(y),Q.init(),Dt=new XM(y,Q),K=new tS(y,Q,t,Dt),X=new VM(y),K.reverseDepthBuffer&&X.buffers.depth.setReversed(!0),ot=new cS(y),et=new AM,M=new WM(y,Q,X,et,K,Dt,ot),_=new nS(b),D=new rS(b),F=new g0(y),re=new Jy(y,F),$=new aS(y,F,ot,re),V=new hS(y,$,F,ot),It=new uS(y,K,M),rt=new eS(et),ht=new wM(b,_,D,Q,K,re,rt),at=new QM(b,et),ct=new RM,Lt=new NM(Q),Ct=new Zy(b,_,D,X,V,f,l),gt=new kM(b,V,K),N=new tE(y,ot,K,X),bt=new Qy(y,Q,ot),Ot=new lS(y,Q,ot),ot.programs=ht.programs,b.capabilities=K,b.extensions=Q,b.properties=et,b.renderLists=ct,b.shadowMap=gt,b.state=X,b.info=ot}Mt();const tt=new ZM(b,y);this.xr=tt,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(it,G,!1))},this.getSize=function(T){return T.set(it,G)},this.setSize=function(T,O,q=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}it=T,G=O,e.width=Math.floor(T*W),e.height=Math.floor(O*W),q===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(it*W,G*W).floor()},this.setDrawingBufferSize=function(T,O,q){it=T,G=O,W=q,e.width=Math.floor(T*q),e.height=Math.floor(O*q),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(pt)},this.setViewport=function(T,O,q,Y){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,O,q,Y),X.viewport(x.copy(pt).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(_t)},this.setScissor=function(T,O,q,Y){T.isVector4?_t.set(T.x,T.y,T.z,T.w):_t.set(T,O,q,Y),X.scissor(E.copy(_t).multiplyScalar(W).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){X.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){B=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(T=!0,O=!0,q=!0){let Y=0;if(T){let z=!1;if(P!==null){const dt=P.texture.format;z=dt===au||dt===ou||dt===ru}if(z){const dt=P.texture.type,St=dt===hi||dt===es||dt===Lr||dt===Vs||dt===iu||dt===su,Tt=Ct.getClearColor(),wt=Ct.getClearAlpha(),Bt=Tt.r,kt=Tt.g,Rt=Tt.b;St?(d[0]=Bt,d[1]=kt,d[2]=Rt,d[3]=wt,y.clearBufferuiv(y.COLOR,0,d)):(g[0]=Bt,g[1]=kt,g[2]=Rt,g[3]=wt,y.clearBufferiv(y.COLOR,0,g))}else Y|=y.COLOR_BUFFER_BIT}O&&(Y|=y.DEPTH_BUFFER_BIT,y.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),ct.dispose(),Lt.dispose(),et.dispose(),_.dispose(),D.dispose(),V.dispose(),re.dispose(),N.dispose(),ht.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",pu),tt.removeEventListener("sessionend",mu),Ii.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=ot.autoReset,O=gt.enabled,q=gt.autoUpdate,Y=gt.needsUpdate,z=gt.type;Mt(),ot.autoReset=T,gt.enabled=O,gt.autoUpdate=q,gt.needsUpdate=Y,gt.type=z}function Et(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Zt(T){const O=T.target;O.removeEventListener("dispose",Zt),Se(O)}function Se(T){je(T),et.remove(T)}function je(T){const O=et.get(T).programs;O!==void 0&&(O.forEach(function(q){ht.releaseProgram(q)}),T.isShaderMaterial&&ht.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,q,Y,z,dt){O===null&&(O=qt);const St=z.isMesh&&z.matrixWorld.determinant()<0,Tt=kp(T,O,q,Y,z);X.setMaterial(Y,St);let wt=q.index,Bt=1;if(Y.wireframe===!0){if(wt=$.getWireframeAttribute(q),wt===void 0)return;Bt=2}const kt=q.drawRange,Rt=q.attributes.position;let oe=kt.start*Bt,de=(kt.start+kt.count)*Bt;dt!==null&&(oe=Math.max(oe,dt.start*Bt),de=Math.min(de,(dt.start+dt.count)*Bt)),wt!==null?(oe=Math.max(oe,0),de=Math.min(de,wt.count)):Rt!=null&&(oe=Math.max(oe,0),de=Math.min(de,Rt.count));const _e=de-oe;if(_e<0||_e===1/0)return;re.setup(z,Y,Tt,q,wt);let tn,ee=bt;if(wt!==null&&(tn=F.get(wt),ee=Ot,ee.setIndex(tn)),z.isMesh)Y.wireframe===!0?(X.setLineWidth(Y.wireframeLinewidth*C()),ee.setMode(y.LINES)):ee.setMode(y.TRIANGLES);else if(z.isLine){let Pt=Y.linewidth;Pt===void 0&&(Pt=1),X.setLineWidth(Pt*C()),z.isLineSegments?ee.setMode(y.LINES):z.isLineLoop?ee.setMode(y.LINE_LOOP):ee.setMode(y.LINE_STRIP)}else z.isPoints?ee.setMode(y.POINTS):z.isSprite&&ee.setMode(y.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ee.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ee.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pt=z._multiDrawStarts,Ue=z._multiDrawCounts,ne=z._multiDrawCount,Mn=wt?F.get(wt).bytesPerElement:1,rs=et.get(Y).currentProgram.getUniforms();for(let en=0;en<ne;en++)rs.setValue(y,"_gl_DrawID",en),ee.render(Pt[en]/Mn,Ue[en])}else if(z.isInstancedMesh)ee.renderInstances(oe,_e,z.count);else if(q.isInstancedBufferGeometry){const Pt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ue=Math.min(q.instanceCount,Pt);ee.renderInstances(oe,_e,Ue)}else ee.render(oe,_e)};function Jt(T,O,q){T.transparent===!0&&T.side===ri&&T.forceSinglePass===!1?(T.side=Qe,T.needsUpdate=!0,Wr(T,O,q),T.side=Pi,T.needsUpdate=!0,Wr(T,O,q),T.side=ri):Wr(T,O,q)}this.compile=function(T,O,q=null){q===null&&(q=T),p=Lt.get(q),p.init(O),w.push(p),q.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==q&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Y=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const dt=z.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const Tt=dt[St];Jt(Tt,q,z),Y.add(Tt)}else Jt(dt,q,z),Y.add(dt)}),w.pop(),p=null,Y},this.compileAsync=function(T,O,q=null){const Y=this.compile(T,O,q);return new Promise(z=>{function dt(){if(Y.forEach(function(St){et.get(St).currentProgram.isReady()&&Y.delete(St)}),Y.size===0){z(T);return}setTimeout(dt,10)}Q.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ke=null;function $n(T){Ke&&Ke(T)}function pu(){Ii.stop()}function mu(){Ii.start()}const Ii=new Tp;Ii.setAnimationLoop($n),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(T){Ke=T,tt.setAnimationLoop(T),T===null?Ii.stop():Ii.start()},tt.addEventListener("sessionstart",pu),tt.addEventListener("sessionend",mu),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(O),O=tt.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,O,P),p=Lt.get(T,w.length),p.init(O),w.push(p),xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),jt.setFromProjectionMatrix(xt),lt=this.localClippingEnabled,nt=rt.init(this.clippingPlanes,lt),v=ct.get(T,m.length),v.init(),m.push(v),tt.enabled===!0&&tt.isPresenting===!0){const dt=b.xr.getDepthSensingMesh();dt!==null&&Ta(dt,O,-1/0,b.sortObjects)}Ta(T,O,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(B,ut),se=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,se&&Ct.addToRenderList(v,T),this.info.render.frame++,nt===!0&&rt.beginShadows();const q=p.state.shadowsArray;gt.render(q,T,O),nt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,z=v.transmissive;if(p.setupLights(),O.isArrayCamera){const dt=O.cameras;if(z.length>0)for(let St=0,Tt=dt.length;St<Tt;St++){const wt=dt[St];_u(Y,z,T,wt)}se&&Ct.render(T);for(let St=0,Tt=dt.length;St<Tt;St++){const wt=dt[St];gu(v,T,wt,wt.viewport)}}else z.length>0&&_u(Y,z,T,O),se&&Ct.render(T),gu(v,T,O);P!==null&&(M.updateMultisampleRenderTarget(P),M.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(b,T,O),re.resetDefaultState(),L=-1,H=null,w.pop(),w.length>0?(p=w[w.length-1],nt===!0&&rt.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Ta(T,O,q,Y){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||jt.intersectsSprite(T)){Y&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xt);const St=V.update(T),Tt=T.material;Tt.visible&&v.push(T,St,Tt,q,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||jt.intersectsObject(T))){const St=V.update(T),Tt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ft.copy(St.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(xt)),Array.isArray(Tt)){const wt=St.groups;for(let Bt=0,kt=wt.length;Bt<kt;Bt++){const Rt=wt[Bt],oe=Tt[Rt.materialIndex];oe&&oe.visible&&v.push(T,St,oe,q,Ft.z,Rt)}}else Tt.visible&&v.push(T,St,Tt,q,Ft.z,null)}}const dt=T.children;for(let St=0,Tt=dt.length;St<Tt;St++)Ta(dt[St],O,q,Y)}function gu(T,O,q,Y){const z=T.opaque,dt=T.transmissive,St=T.transparent;p.setupLightsView(q),nt===!0&&rt.setGlobalState(b.clippingPlanes,q),Y&&X.viewport(x.copy(Y)),z.length>0&&Gr(z,O,q),dt.length>0&&Gr(dt,O,q),St.length>0&&Gr(St,O,q),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function _u(T,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Rn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?ci:hi,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const dt=p.state.transmissionRenderTarget[Y.id],St=Y.viewport||x;dt.setSize(St.z,St.w);const Tt=b.getRenderTarget();b.setRenderTarget(dt),b.getClearColor(k),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),se&&Ct.render(q);const wt=b.toneMapping;b.toneMapping=Ai;const Bt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),nt===!0&&rt.setGlobalState(b.clippingPlanes,Y),Gr(T,q,Y),M.updateMultisampleRenderTarget(dt),M.updateRenderTargetMipmap(dt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Rt=0,oe=O.length;Rt<oe;Rt++){const de=O[Rt],_e=de.object,tn=de.geometry,ee=de.material,Pt=de.group;if(ee.side===ri&&_e.layers.test(Y.layers)){const Ue=ee.side;ee.side=Qe,ee.needsUpdate=!0,vu(_e,q,Y,tn,ee,Pt),ee.side=Ue,ee.needsUpdate=!0,kt=!0}}kt===!0&&(M.updateMultisampleRenderTarget(dt),M.updateRenderTargetMipmap(dt))}b.setRenderTarget(Tt),b.setClearColor(k,J),Bt!==void 0&&(Y.viewport=Bt),b.toneMapping=wt}function Gr(T,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let z=0,dt=T.length;z<dt;z++){const St=T[z],Tt=St.object,wt=St.geometry,Bt=Y===null?St.material:Y,kt=St.group;Tt.layers.test(q.layers)&&vu(Tt,O,q,wt,Bt,kt)}}function vu(T,O,q,Y,z,dt){T.onBeforeRender(b,O,q,Y,z,dt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(b,O,q,Y,T,dt),z.transparent===!0&&z.side===ri&&z.forceSinglePass===!1?(z.side=Qe,z.needsUpdate=!0,b.renderBufferDirect(q,O,Y,z,T,dt),z.side=Pi,z.needsUpdate=!0,b.renderBufferDirect(q,O,Y,z,T,dt),z.side=ri):b.renderBufferDirect(q,O,Y,z,T,dt),T.onAfterRender(b,O,q,Y,z,dt)}function Wr(T,O,q){O.isScene!==!0&&(O=qt);const Y=et.get(T),z=p.state.lights,dt=p.state.shadowsArray,St=z.state.version,Tt=ht.getParameters(T,z.state,dt,O,q),wt=ht.getProgramCacheKey(Tt);let Bt=Y.programs;Y.environment=T.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(T.isMeshStandardMaterial?D:_).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",Zt),Bt=new Map,Y.programs=Bt);let kt=Bt.get(wt);if(kt!==void 0){if(Y.currentProgram===kt&&Y.lightsStateVersion===St)return yu(T,Tt),kt}else Tt.uniforms=ht.getUniforms(T),T.onBeforeCompile(Tt,b),kt=ht.acquireProgram(Tt,wt),Bt.set(wt,kt),Y.uniforms=Tt.uniforms;const Rt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Rt.clippingPlanes=rt.uniform),yu(T,Tt),Y.needsLights=Vp(T),Y.lightsStateVersion=St,Y.needsLights&&(Rt.ambientLightColor.value=z.state.ambient,Rt.lightProbe.value=z.state.probe,Rt.directionalLights.value=z.state.directional,Rt.directionalLightShadows.value=z.state.directionalShadow,Rt.spotLights.value=z.state.spot,Rt.spotLightShadows.value=z.state.spotShadow,Rt.rectAreaLights.value=z.state.rectArea,Rt.ltc_1.value=z.state.rectAreaLTC1,Rt.ltc_2.value=z.state.rectAreaLTC2,Rt.pointLights.value=z.state.point,Rt.pointLightShadows.value=z.state.pointShadow,Rt.hemisphereLights.value=z.state.hemi,Rt.directionalShadowMap.value=z.state.directionalShadowMap,Rt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Rt.spotShadowMap.value=z.state.spotShadowMap,Rt.spotLightMatrix.value=z.state.spotLightMatrix,Rt.spotLightMap.value=z.state.spotLightMap,Rt.pointShadowMap.value=z.state.pointShadowMap,Rt.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=kt,Y.uniformsList=null,kt}function xu(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=No.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function yu(T,O){const q=et.get(T);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function kp(T,O,q,Y,z){O.isScene!==!0&&(O=qt),M.resetTextureUnits();const dt=O.fog,St=Y.isMeshStandardMaterial?O.environment:null,Tt=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Di,wt=(Y.isMeshStandardMaterial?D:_).get(Y.envMap||St),Bt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,kt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Rt=!!q.morphAttributes.position,oe=!!q.morphAttributes.normal,de=!!q.morphAttributes.color;let _e=Ai;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_e=b.toneMapping);const tn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ee=tn!==void 0?tn.length:0,Pt=et.get(Y),Ue=p.state.lights;if(nt===!0&&(lt===!0||T!==H)){const un=T===H&&Y.id===L;rt.setState(Y,T,un)}let ne=!1;Y.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ue.state.version||Pt.outputColorSpace!==Tt||z.isBatchedMesh&&Pt.batching===!1||!z.isBatchedMesh&&Pt.batching===!0||z.isBatchedMesh&&Pt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pt.instancing===!1||!z.isInstancedMesh&&Pt.instancing===!0||z.isSkinnedMesh&&Pt.skinning===!1||!z.isSkinnedMesh&&Pt.skinning===!0||z.isInstancedMesh&&Pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pt.instancingMorph===!1&&z.morphTexture!==null||Pt.envMap!==wt||Y.fog===!0&&Pt.fog!==dt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==Bt||Pt.vertexTangents!==kt||Pt.morphTargets!==Rt||Pt.morphNormals!==oe||Pt.morphColors!==de||Pt.toneMapping!==_e||Pt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Pt.__version=Y.version);let Mn=Pt.currentProgram;ne===!0&&(Mn=Wr(Y,O,z));let rs=!1,en=!1,wa=!1;const ve=Mn.getUniforms(),di=Pt.uniforms;if(X.useProgram(Mn.program)&&(rs=!0,en=!0,wa=!0),Y.id!==L&&(L=Y.id,en=!0),rs||H!==T){K.reverseDepthBuffer?(vt.copy(T.projectionMatrix),Xv(vt),$v(vt),ve.setValue(y,"projectionMatrix",vt)):ve.setValue(y,"projectionMatrix",T.projectionMatrix),ve.setValue(y,"viewMatrix",T.matrixWorldInverse);const un=ve.map.cameraPosition;un!==void 0&&un.setValue(y,zt.setFromMatrixPosition(T.matrixWorld)),K.logarithmicDepthBuffer&&ve.setValue(y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ve.setValue(y,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,en=!0,wa=!0)}if(z.isSkinnedMesh){ve.setOptional(y,z,"bindMatrix"),ve.setOptional(y,z,"bindMatrixInverse");const un=z.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),ve.setValue(y,"boneTexture",un.boneTexture,M))}z.isBatchedMesh&&(ve.setOptional(y,z,"batchingTexture"),ve.setValue(y,"batchingTexture",z._matricesTexture,M),ve.setOptional(y,z,"batchingIdTexture"),ve.setValue(y,"batchingIdTexture",z._indirectTexture,M),ve.setOptional(y,z,"batchingColorTexture"),z._colorsTexture!==null&&ve.setValue(y,"batchingColorTexture",z._colorsTexture,M));const Aa=q.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0)&&It.update(z,q,Mn),(en||Pt.receiveShadow!==z.receiveShadow)&&(Pt.receiveShadow=z.receiveShadow,ve.setValue(y,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(di.envMap.value=wt,di.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(di.envMapIntensity.value=O.environmentIntensity),en&&(ve.setValue(y,"toneMappingExposure",b.toneMappingExposure),Pt.needsLights&&Hp(di,wa),dt&&Y.fog===!0&&at.refreshFogUniforms(di,dt),at.refreshMaterialUniforms(di,Y,W,G,p.state.transmissionRenderTarget[T.id]),No.upload(y,xu(Pt),di,M)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(No.upload(y,xu(Pt),di,M),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ve.setValue(y,"center",z.center),ve.setValue(y,"modelViewMatrix",z.modelViewMatrix),ve.setValue(y,"normalMatrix",z.normalMatrix),ve.setValue(y,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const un=Y.uniformsGroups;for(let Ca=0,Gp=un.length;Ca<Gp;Ca++){const Su=un[Ca];N.update(Su,Mn),N.bind(Su,Mn)}}return Mn}function Hp(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Vp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,O,q){et.get(T.texture).__webglTexture=O,et.get(T.depthTexture).__webglTexture=q;const Y=et.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const q=et.get(T);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,q=0){P=T,A=O,R=q;let Y=!0,z=null,dt=!1,St=!1;if(T){const wt=et.get(T);if(wt.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(y.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(wt.__hasExternalTextures)M.rebindTextures(T,et.get(T.texture).__webglTexture,et.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Rt=T.depthTexture;if(wt.__boundDepthTexture!==Rt){if(Rt!==null&&et.has(Rt)&&(T.width!==Rt.image.width||T.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(St=!0);const kt=et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?z=kt[O][q]:z=kt[O],dt=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?z=et.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?z=kt[q]:z=kt,x.copy(T.viewport),E.copy(T.scissor),I=T.scissorTest}else x.copy(pt).multiplyScalar(W).floor(),E.copy(_t).multiplyScalar(W).floor(),I=Nt;if(X.bindFramebuffer(y.FRAMEBUFFER,z)&&Y&&X.drawBuffers(T,z),X.viewport(x),X.scissor(E),X.setScissorTest(I),dt){const wt=et.get(T.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,q)}else if(St){const wt=et.get(T.texture),Bt=O||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,wt.__webglTexture,q||0,Bt)}L=-1},this.readRenderTargetPixels=function(T,O,q,Y,z,dt,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){X.bindFramebuffer(y.FRAMEBUFFER,Tt);try{const wt=T.texture,Bt=wt.format,kt=wt.type;if(!K.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-Y&&q>=0&&q<=T.height-z&&y.readPixels(O,q,Y,z,Dt.convert(Bt),Dt.convert(kt),dt)}finally{const wt=P!==null?et.get(P).__webglFramebuffer:null;X.bindFramebuffer(y.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(T,O,q,Y,z,dt,St){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){const wt=T.texture,Bt=wt.format,kt=wt.type;if(!K.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-Y&&q>=0&&q<=T.height-z){X.bindFramebuffer(y.FRAMEBUFFER,Tt);const Rt=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Rt),y.bufferData(y.PIXEL_PACK_BUFFER,dt.byteLength,y.STREAM_READ),y.readPixels(O,q,Y,z,Dt.convert(Bt),Dt.convert(kt),0);const oe=P!==null?et.get(P).__webglFramebuffer:null;X.bindFramebuffer(y.FRAMEBUFFER,oe);const de=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Wv(y,de,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Rt),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,dt),y.deleteBuffer(Rt),y.deleteSync(de),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,q=0){T.isTexture!==!0&&(Uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-q),z=Math.floor(T.image.width*Y),dt=Math.floor(T.image.height*Y),St=O!==null?O.x:0,Tt=O!==null?O.y:0;M.setTexture2D(T,0),y.copyTexSubImage2D(y.TEXTURE_2D,q,0,0,St,Tt,z,dt),X.unbindTexture()},this.copyTextureToTexture=function(T,O,q=null,Y=null,z=0){T.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],O=arguments[2],z=arguments[3]||0,q=null);let dt,St,Tt,wt,Bt,kt;q!==null?(dt=q.max.x-q.min.x,St=q.max.y-q.min.y,Tt=q.min.x,wt=q.min.y):(dt=T.image.width,St=T.image.height,Tt=0,wt=0),Y!==null?(Bt=Y.x,kt=Y.y):(Bt=0,kt=0);const Rt=Dt.convert(O.format),oe=Dt.convert(O.type);M.setTexture2D(O,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,O.unpackAlignment);const de=y.getParameter(y.UNPACK_ROW_LENGTH),_e=y.getParameter(y.UNPACK_IMAGE_HEIGHT),tn=y.getParameter(y.UNPACK_SKIP_PIXELS),ee=y.getParameter(y.UNPACK_SKIP_ROWS),Pt=y.getParameter(y.UNPACK_SKIP_IMAGES),Ue=T.isCompressedTexture?T.mipmaps[z]:T.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,Ue.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Ue.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Tt),y.pixelStorei(y.UNPACK_SKIP_ROWS,wt),T.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,z,Bt,kt,dt,St,Rt,oe,Ue.data):T.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,z,Bt,kt,Ue.width,Ue.height,Rt,Ue.data):y.texSubImage2D(y.TEXTURE_2D,z,Bt,kt,dt,St,Rt,oe,Ue),y.pixelStorei(y.UNPACK_ROW_LENGTH,de),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,_e),y.pixelStorei(y.UNPACK_SKIP_PIXELS,tn),y.pixelStorei(y.UNPACK_SKIP_ROWS,ee),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Pt),z===0&&O.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(T,O,q=null,Y=null,z=0){T.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],O=arguments[3],z=arguments[4]||0);let dt,St,Tt,wt,Bt,kt,Rt,oe,de;const _e=T.isCompressedTexture?T.mipmaps[z]:T.image;q!==null?(dt=q.max.x-q.min.x,St=q.max.y-q.min.y,Tt=q.max.z-q.min.z,wt=q.min.x,Bt=q.min.y,kt=q.min.z):(dt=_e.width,St=_e.height,Tt=_e.depth,wt=0,Bt=0,kt=0),Y!==null?(Rt=Y.x,oe=Y.y,de=Y.z):(Rt=0,oe=0,de=0);const tn=Dt.convert(O.format),ee=Dt.convert(O.type);let Pt;if(O.isData3DTexture)M.setTexture3D(O,0),Pt=y.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)M.setTexture2DArray(O,0),Pt=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,O.unpackAlignment);const Ue=y.getParameter(y.UNPACK_ROW_LENGTH),ne=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Mn=y.getParameter(y.UNPACK_SKIP_PIXELS),rs=y.getParameter(y.UNPACK_SKIP_ROWS),en=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,_e.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,_e.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,wt),y.pixelStorei(y.UNPACK_SKIP_ROWS,Bt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,kt),T.isDataTexture||T.isData3DTexture?y.texSubImage3D(Pt,z,Rt,oe,de,dt,St,Tt,tn,ee,_e.data):O.isCompressedArrayTexture?y.compressedTexSubImage3D(Pt,z,Rt,oe,de,dt,St,Tt,tn,_e.data):y.texSubImage3D(Pt,z,Rt,oe,de,dt,St,Tt,tn,ee,_e),y.pixelStorei(y.UNPACK_ROW_LENGTH,Ue),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,ne),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Mn),y.pixelStorei(y.UNPACK_SKIP_ROWS,rs),y.pixelStorei(y.UNPACK_SKIP_IMAGES,en),z===0&&O.generateMipmaps&&y.generateMipmap(Pt),X.unbindTexture()},this.initRenderTarget=function(T){et.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),X.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,X.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===lu?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Ma?"display-p3":"srgb"}}class na{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new na(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nE extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class iE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cc,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new U;class ia{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=kn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ia(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dp extends ss{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ms;const sr=new U,Es=new U,bs=new U,Ts=new At,rr=new At,Ip=new pe,go=new U,or=new U,_o=new U,sf=new At,El=new At,rf=new At;class sE extends Oe{constructor(t=new Dp){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new iE(e,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new ia(i,3,0,!1)),Ms.setAttribute("uv",new ia(i,2,3,!1))}this.geometry=Ms,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Ip.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-bs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;vo(go.set(-.5,-.5,0),bs,o,Es,s,r),vo(or.set(.5,-.5,0),bs,o,Es,s,r),vo(_o.set(.5,.5,0),bs,o,Es,s,r),sf.set(0,0),El.set(1,0),rf.set(1,1);let a=t.ray.intersectTriangle(go,or,_o,!1,sr);if(a===null&&(vo(or.set(-.5,.5,0),bs,o,Es,s,r),El.set(0,1),a=t.ray.intersectTriangle(go,_o,or,!1,sr),a===null))return;const l=t.ray.origin.distanceTo(sr);l<t.near||l>t.far||e.push({distance:l,point:sr.clone(),uv:mn.getInterpolation(sr,go,or,_o,sf,El,rf,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function vo(n,t,e,i,s,r){Ts.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(rr.x=r*Ts.x-s*Ts.y,rr.y=s*Ts.x+r*Ts.y):rr.copy(Ts),n.copy(t),n.x+=rr.x,n.y+=rr.y,n.applyMatrix4(Ip)}class Fo extends ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const sa=new U,ra=new U,of=new pe,ar=new zr,xo=new Br,bl=new U,af=new U;class rE extends Oe{constructor(t=new Ie,e=new Fo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)sa.fromBufferAttribute(e,s-1),ra.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=sa.distanceTo(ra);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;of.copy(s).invert(),ar.copy(t.ray).applyMatrix4(of);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,p=g-1;v<p;v+=c){const m=u.getX(v),w=u.getX(v+1),b=yo(this,t,ar,l,m,w);b&&e.push(b)}if(this.isLineLoop){const v=u.getX(g-1),p=u.getX(d),m=yo(this,t,ar,l,v,p);m&&e.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,p=g-1;v<p;v+=c){const m=yo(this,t,ar,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=yo(this,t,ar,l,g-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(sa.fromBufferAttribute(o,s),ra.fromBufferAttribute(o,r),e.distanceSqToSegment(sa,ra,bl,af)>i)return;bl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(bl);if(!(l<t.near||l>t.far))return{distance:l,point:af.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const lf=new U,cf=new U;class Oo extends rE{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)lf.fromBufferAttribute(e,s),cf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lf.distanceTo(cf);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oE extends ss{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uf=new pe,Lc=new zr,So=new Br,Mo=new U;class ba extends Oe{constructor(t=new Ie,e=new oE){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;uf.copy(s).invert(),Lc.copy(t.ray).applyMatrix4(uf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const p=c.getX(g);Mo.fromBufferAttribute(h,p),hf(Mo,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)Mo.fromBufferAttribute(h,g),hf(Mo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hf(n,t,e,i,s,r,o){const a=Lc.distanceSqToPoint(n);if(a<e){const l=new U;Lc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Up extends Ye{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class aE{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new At:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new U,s=[],r=[],o=[],a=new U,l=new pe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function lE(n,t){const e=1-n;return e*e*e*t}function cE(n,t){const e=1-n;return 3*e*e*n*t}function uE(n,t){return 3*(1-n)*n*n*t}function hE(n,t){return n*n*n*t}function Tl(n,t,e,i,s){return lE(n,t)+cE(n,e)+uE(n,i)+hE(n,s)}class fE extends aE{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tl(t,s.x,r.x,o.x,a.x),Tl(t,s.y,r.y,o.y,a.y),Tl(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hu extends Ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,f=new U,d=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const w=[],b=m/i;let S=0;m===0&&o===0?S=.5/e:m===i&&l===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){const R=A/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(R+S,1-b),w.push(c++)}u.push(w)}for(let m=0;m<i;m++)for(let w=0;w<e;w++){const b=u[m][w+1],S=u[m][w],A=u[m+1][w],R=u[m+1][w+1];(m!==0||o>0)&&d.push(b,S,R),(m!==i-1||l<Math.PI)&&d.push(S,A,R)}this.setIndex(d),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dE extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pE extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class mE extends pE{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Np{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ff();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ff(){return performance.now()}const df=new pe;class gE{constructor(t,e,i=0,s=1/0){this.ray=new zr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return df.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(df),this}intersectObject(t,e=!0,i=[]){return Dc(t,this,i,e),i.sort(pf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Dc(t[s],this,i,e);return i.sort(pf),i}}function pf(n,t){return n.distance-t.distance}function Dc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Dc(r[o],t,e,!0)}}class mf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _E extends is{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);const gf={type:"change"},fu={type:"start"},Fp={type:"end"},Eo=new zr,_f=new Ei,vE=Math.cos(70*Vv.DEG2RAD),Te=new U,Ze=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wl=1e-6;class xE extends _E{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ns,this._lastTargetPosition=new U,this._quat=new ns().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mf,this._sphericalDelta=new mf,this._scale=1,this._panOffset=new U,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new U,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=SE.bind(this),this._onPointerDown=yE.bind(this),this._onPointerUp=ME.bind(this),this._onContextMenu=RE.bind(this),this._onMouseWheel=TE.bind(this),this._onKeyDown=wE.bind(this),this._onTouchStart=AE.bind(this),this._onTouchMove=CE.bind(this),this._onMouseDown=EE.bind(this),this._onMouseMove=bE.bind(this),this._interceptControlDown=PE.bind(this),this._interceptControlUp=LE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gf),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ze:i>Math.PI&&(i-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Te.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Eo.origin.copy(this.object.position),Eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eo.direction))<vE?this.object.lookAt(this.target):(_f.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eo.intersectPlane(_f,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wl||this._lastTargetPosition.distanceToSquared(this.target)>wl?(this.dispatchEvent(gf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function SE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ME(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fp),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function EE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ce.DOLLY;break;case Us.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}break;case Us.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(fu)}function bE(n){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function TE(n){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(n.preventDefault(),this.dispatchEvent(fu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fp))}function wE(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function AE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ce.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ce.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(fu)}function CE(n){switch(this._trackPointer(n),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ce.NONE}}function RE(n){this.enabled!==!1&&n.preventDefault()}function PE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Op={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const DE=new wp(-1,1,1,-1,0,1);class IE extends Ie{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}}const UE=new IE;class du{constructor(t){this._mesh=new xn(UE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,DE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class NE extends Ys{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Dr.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new du(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vf extends Ys{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class FE extends Ys{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class OE{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new At);this._width=i.width,this._height=i.height,e=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new NE(Op),this.copyPass.material.blending=li,this.clock=new Np}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vf!==void 0&&(o instanceof vf?i=!0:o instanceof FE&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class BE extends Ys{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Vt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const zE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xs extends Ys{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new Vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(r,o,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Rn(r,o,{type:ci});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Rn(r,o,{type:ci});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=zE;this.highPassUniforms=Dr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new At(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Op;this.copyUniforms=Dr.clone(u.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Vt,this.oldClearAlpha=1,this.basic=new kr,this.fsQuad=new du(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xs.BlurDirectionX=new At(1,0);Xs.BlurDirectionY=new At(0,1);const kE={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class HE extends Ys{constructor(){super();const t=kE;this.uniforms=Dr.clone(t.uniforms),this.material=new dE({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new du(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ep?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===np&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const xf=new Map;function VE(n){const t=document.createElement("canvas");t.width=n,t.height=n;const e=t.getContext("2d");if(!e)throw new Error("Canvas 2D context unavailable");return{canvas:t,ctx:e}}function GE(n=1,t=["#16234c","#2f1a55","#ffd77a"],e=512){const{canvas:i,ctx:s}=VE(e);s.clearRect(0,0,e,e);let r=n>>>0;const o=()=>(r=r*1664525+1013904223>>>0,r/4294967295);for(let c=0;c<44;c++){const u=e*(.18+o()*.64),h=e*(.18+o()*.64),f=e*(.08+o()*.24),d=t[Math.floor(o()*t.length)]??"#7bdfff",g=.035+o()*.08,v=s.createRadialGradient(u,h,0,u,h,f);v.addColorStop(0,`${d}${Math.round(g*255).toString(16).padStart(2,"0")}`),v.addColorStop(.45,`${d}${Math.round(g*96).toString(16).padStart(2,"0")}`),v.addColorStop(1,`${d}00`),s.fillStyle=v,s.fillRect(0,0,e,e)}const a=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e*.54);a.addColorStop(0,"rgba(255,255,255,.045)"),a.addColorStop(.6,"rgba(255,255,255,.018)"),a.addColorStop(1,"rgba(255,255,255,0)"),s.globalCompositeOperation="screen",s.fillStyle=a,s.fillRect(0,0,e,e),s.globalCompositeOperation="source-over";const l=new Up(i);return l.colorSpace=on,l.minFilter=qe,l.magFilter=qe,l.generateMipmaps=!1,l}function WE(){for(const n of xf.values())n.dispose();xf.clear()}function XE(n,t,e){const i=Math.sin(e*3+t*.018)*.5+.5,s=Math.sin(e*7-t*.011)*.5+.5;return i*.62+s*.28+n()*.1}function bo(n){const{count:t,radius:e,size:i,seed:s,kind:r}=n,o=Qc(s),a=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t),u=new Float32Array(t),h=new Float32Array(t);for(let p=0;p<t;p++){const m=Math.floor(o()*4),w=r==="far"?Math.pow(o(),.72)*e:Math.pow(o(),.58)*e,b=r==="core"?.025:.0145,S=r==="far"?1.65:r==="hii"?.38:.72,A=m*(Math.PI/2)+w*b+(o()-.5)*S,P=XE(o,w,A)<(r==="dust"?.22:.13)?.52:1,L=r==="far"?92:r==="hii"?12:34,H=r==="core"?.06:r==="far"?.17:.11,x=(o()-.5)*(12+w*H)+Math.sin(A*2)*(r==="core"?1.8:6),E=p*3;a[E]=Math.cos(A)*w+(o()-.5)*L,a[E+1]=x,a[E+2]=Math.sin(A)*w+(o()-.5)*L;const I=Math.max(0,1-w/e),k=r==="hii"?.34+o()*.35:0;l[E]=Math.min(1,.38+I*.55+k+o()*.08),l[E+1]=Math.min(1,.46+I*.33+o()*.08+(r==="hii"?.1:0)),l[E+2]=Math.min(1,.66+(1-I)*.24+o()*.1+(r==="far"?.18:0)),c[p]=i*(.58+o()*1.18)*(r==="core"?1.05+I*1.55:1)*P,u[p]=(r==="far"?.22+o()*.28:r==="core"?.36+o()*.34:.26+o()*.34)*P,h[p]=o()*Math.PI*2}const f=new Ie;f.setAttribute("position",new ae(a,3)),f.setAttribute("color",new ae(l,3)),f.setAttribute("aSize",new ae(c,1)),f.setAttribute("aAlpha",new ae(u,1)),f.setAttribute("aPhase",new ae(h,1)),f.computeBoundingSphere();const d=r==="far"?.34:r==="core"?.42:r==="hii"?.44:.46,g=new be({uniforms:{uGlobalOpacity:{value:d},uTime:{value:0}},vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!0,blending:_n,vertexShader:`
      precision highp float;
      attribute float aSize;
      attribute float aAlpha;
      attribute float aPhase;
      varying vec3 vColor;
      varying float vAlpha;
      uniform float uTime;
      void main(){
        vColor = color;
        float twinkle = 0.94 + sin(uTime * 0.72 + aPhase) * 0.06;
        vAlpha = aAlpha * twinkle;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(aSize * (470.0 / max(132.0, -mvPosition.z)), 0.65, 14.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      precision mediump float;
      uniform float uGlobalOpacity;
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        vec2 uv = gl_PointCoord - 0.5;
        float d2 = dot(uv, uv);
        if(d2 > 0.25) discard;
        float core = smoothstep(0.040, 0.0, d2);
        float halo = smoothstep(0.25, 0.012, d2);
        float alpha = (core * 0.82 + halo * 0.34) * vAlpha * uGlobalOpacity;
        if(alpha < 0.010) discard;
        gl_FragColor = vec4(vColor * (0.76 + core * 0.82 + halo * 0.18), alpha);
      }
    `}),v=new ba(f,g);return v.frustumCulled=!0,v.name=`galaxy-${r}`,{points:v,material:g,count:t,kind:r,baseOpacity:d}}function yf(n,t,e,i,s,r,o,a){const l=GE(n,r,a),c=new Vr(t,e,1,1),u=new kr({map:l,color:new Vt("#ffffff"),transparent:!0,opacity:o,depthWrite:!1,depthTest:!1,blending:ts,toneMapped:!1}),h=new xn(c,u);return h.name="soft-nebula-plane",h.position.copy(i),h.rotation.copy(s),h.renderOrder=-10,h.userData.generatedTexture=l,h.userData.baseOpacity=o,h}function Sf(n){const t=new Zi;t.name="诗云银河背景";const e=n==="high",i=[bo({count:e?3e4:12500,radius:760,size:e?1.02:1.18,seed:"galaxy-dust-v9",kind:"dust"}),bo({count:e?8200:3600,radius:1480,size:e?1.18:1.34,seed:"far-stars-v9",kind:"far"}),bo({count:e?4400:1900,radius:150,size:e?2.02:1.92,seed:"core-stars-v9",kind:"core"}),bo({count:e?760:280,radius:640,size:e?2.55:2.3,seed:"hii-knots-v9",kind:"hii"})];for(const h of i)t.add(h.points);i[2].points.scale.set(1.58,.3,1.58),i[1].points.rotation.x=.2;const r=[yf(12,1260,680,new U(60,-18,-70),new Ln(-Math.PI/2+.15,0,.1),["#17305c","#1b5b73","#7350a8","#ffd46b"],e?.17:.13,e?512:384)];e&&r.push(yf(37,980,560,new U(-410,36,185),new Ln(-Math.PI/2+.22,0,-.42),["#1b234f","#40216d","#70e6ff","#ff8d6d"],.1,384)),t.add(...r);const o=new xn(new hu(104,e?28:20,e?20:14),new kr({color:new Vt("#ffe6a3"),transparent:!0,opacity:e?.03:.022,blending:_n,depthWrite:!1}));o.scale.set(2,.31,2),o.name="galaxy-core-glow",o.userData.baseOpacity=o.material.opacity,t.add(o);const a=i.reduce((h,f)=>h+f.count,0);let l=a,c=n==="smooth"?1:0;const u=h=>{c=Math.max(0,Math.min(2,h));const f=c===0?[1,1,1,1]:c===1?[.76,.72,.82,.68]:[.48,.42,.58,.36],d=c===0?1:c===1?.88:.72;l=0,i.forEach((v,p)=>{const m=Math.max(1,Math.floor(v.count*f[p]));v.points.geometry.setDrawRange(0,m),v.material.uniforms.uGlobalOpacity.value=v.baseOpacity*d,l+=m}),r.forEach((v,p)=>{v.visible=c<2||p===0;const m=v.material,w=v.userData.baseOpacity;m.opacity=w*(c===0?1:c===1?.78:.54)});const g=o.material;g.opacity=o.userData.baseOpacity*(c===2?.72:1)};return u(c),{group:t,particleCount:a,get visibleParticleCount(){return l},update:h=>{if(!(c>=2&&Math.floor(h*30)%2===1)){for(const f of i)f.material.uniforms.uTime.value=h;r[0].rotation.z=.1+Math.sin(h*.035)*.012,r[1]&&(r[1].rotation.z=-.42-Math.sin(h*.028)*.01)}},setPerformanceLevel:u,dispose:()=>{t.traverse(h=>{const f=h;f.userData?.generatedTexture?.dispose?.(),f.geometry?.dispose?.();const g=f.material;Array.isArray(g)?g.forEach(v=>v.dispose()):g?.dispose?.()})}}}function Bp(n){const t=n.replace("#",""),e=t.length===3?t.split("").map(s=>s+s).join(""):t,i=Number.parseInt(e,16);return[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function $E(n,t){return 3.5+Math.pow(Math.max(1,t),.16)+Math.max(0,n-55)*.035}function Mf(n){return Math.min(1,.38+n/140)}const qE=`
precision highp float;
attribute float aSize;
attribute float aAlpha;
attribute float aSelected;
attribute float aRelated;
attribute float aLandmark;
varying vec3 vColor;
varying float vAlpha;
varying float vSelected;
varying float vRelated;
varying float vLandmark;
uniform float uTime;
void main(){
  vColor = color;
  vAlpha = aAlpha;
  vSelected = aSelected;
  vRelated = aRelated;
  vLandmark = aLandmark;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  float pulse = 1.0 + sin(uTime * 1.35 + position.x * 0.014 + position.z * 0.010) * (0.045 + aLandmark * 0.018);
  float selectedBoost = aSelected > 0.5 ? 1.16 : (aRelated > 0.5 ? 1.055 : 1.0);
  float rawSize = aSize * pulse * selectedBoost * (430.0 / max(108.0, -mvPosition.z));
  gl_PointSize = clamp(rawSize, 3.2, 54.0);
  gl_Position = projectionMatrix * mvPosition;
}
`,YE=`
precision highp float;
varying vec3 vColor;
varying float vAlpha;
varying float vSelected;
varying float vRelated;
varying float vLandmark;
void main(){
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  float core = smoothstep(0.135, 0.0, d);
  float body = smoothstep(0.36, 0.02, d) * 0.38;
  float halo = pow(max(0.0, 1.0 - d * 2.0), 2.35) * (0.22 + vLandmark * 0.13);
  float selectedRing = vSelected > 0.5 ? smoothstep(0.032, 0.0, abs(d - 0.335)) * 0.48 : 0.0;
  float relatedRing = vRelated > 0.5 ? smoothstep(0.022, 0.0, abs(d - 0.405)) * 0.18 : 0.0;
  float landmarkSpark = vLandmark > 0.01 ? smoothstep(0.010, 0.0, abs(uv.x)) * smoothstep(0.43, 0.08, abs(uv.y)) * 0.10 : 0.0;
  float alpha = (core * 0.76 + body + halo + selectedRing + relatedRing + landmarkSpark) * vAlpha;
  if(alpha < 0.018) discard;
  vec3 gilded = mix(vColor, vec3(1.0, 0.86, 0.48), vLandmark * 0.26);
  vec3 col = gilded * (0.82 + core * 0.82 + halo * 0.26 + selectedRing * 0.82 + relatedRing * 0.32);
  gl_FragColor = vec4(col, alpha);
}
`;function Ef(n){const t=new Ie,e=new Float32Array(n.length*3),i=new Float32Array(n.length*3),s=new Float32Array(n.length),r=new Float32Array(n.length),o=new Float32Array(n.length),a=new Float32Array(n.length),l=new Float32Array(n.length),c=[],u=new Map;n.forEach((d,g)=>{const v=g*3;e[v]=d.position.x,e[v+1]=d.position.y,e[v+2]=d.position.z;const[p,m,w]=Bp(d.color);i[v]=p,i[v+1]=m,i[v+2]=w;const b=Cr(d.name),S=Math.min(1.18,Math.log10(d.poemCount+10)/3.5);s[g]=$E(d.influence,d.poemCount)*(.92+(b-1)*.34)*S,r[g]=Math.min(.92,Mf(d.influence)*(b>1?.94:.8)),l[g]=Math.min(1,Math.max(0,(b-1)/1.35)),c[g]=d.id,u.set(d.id,g)}),t.setAttribute("position",new ae(e,3)),t.setAttribute("color",new ae(i,3)),t.setAttribute("aSize",new ae(s,1)),t.setAttribute("aAlpha",new ae(r,1)),t.setAttribute("aSelected",new ae(o,1)),t.setAttribute("aRelated",new ae(a,1)),t.setAttribute("aLandmark",new ae(l,1)),t.computeBoundingSphere();const h=new be({vertexShader:qE,fragmentShader:YE,uniforms:{uTime:{value:0}},vertexColors:!0,transparent:!0,depthWrite:!1,blending:_n}),f=new ba(t,h);return f.name="poet-stars",f.userData.kind="poets",{points:f,geometry:t,material:h,idByIndex:c,indexById:u,updateSelection:(d,g)=>{const v=t.getAttribute("aSelected"),p=t.getAttribute("aRelated"),m=t.getAttribute("aAlpha");n.forEach((w,b)=>{const S=w.id===d,A=g.has(w.id)&&!S;v.setX(b,S?1:0),p.setX(b,A?1:0),m.setX(b,d?S?.94:A?.62:.2:Mf(w.influence)*.82)}),v.needsUpdate=!0,p.needsUpdate=!0,m.needsUpdate=!0},dispose:()=>{t.dispose(),h.dispose()}}}function jE(n){const t=new Ie,e=new Float32Array(n.length*3),i=new Float32Array(n.length*3),s=new Float32Array(n.length),r=[];n.forEach((u,h)=>{const f=h*3;e[f]=u.position.x,e[f+1]=u.position.y,e[f+2]=u.position.z;const d=u.form==="现代诗";i[f]=d?.55:.86,i[f+1]=d?.78:.84,i[f+2]=d?1:.66,s[h]=1.55,r[h]=u.id}),t.setAttribute("position",new ae(e,3)),t.setAttribute("color",new ae(i,3)),t.setAttribute("aSize",new ae(s,1)),t.computeBoundingSphere();const o=new be({uniforms:{uTime:{value:0}},vertexColors:!0,transparent:!0,depthWrite:!1,blending:_n,vertexShader:`
      precision highp float;
      attribute float aSize;
      varying vec3 vColor;
      uniform float uTime;
      void main(){
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float rawSize = aSize * (1.0 + sin(uTime * 1.8 + position.x * 0.025) * 0.09) * (405.0 / max(100.0, -mvPosition.z));
        gl_PointSize = clamp(rawSize, 1.6, 16.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      precision mediump float;
      varying vec3 vColor;
      void main(){
        vec2 uv = gl_PointCoord - 0.5;
        float d2 = dot(uv, uv);
        if(d2 > 0.25) discard;
        float core = smoothstep(0.030, 0.0, d2);
        float halo = smoothstep(0.25, 0.018, d2) * 0.42;
        float a = core + halo;
        if(a < 0.025) discard;
        gl_FragColor = vec4(vColor * (0.88 + core * 0.82 + halo * 0.18), a * 0.54);
      }
    `}),a=new ba(t,o);a.name="poem-stars",a.userData.kind="poems",a.frustumCulled=!0;let l=n.length;return{points:a,idByIndex:r,totalCount:n.length,get visibleCount(){return l},setPerformanceLevel:u=>{const h=u<=0?1:u===1?.76:.48;l=Math.max(1,Math.floor(n.length*h)),t.setDrawRange(0,l)},dispose:()=>{t.dispose(),o.dispose()}}}function KE(n,t,e,i,s,r,o,a,l){let c=r.getPoint(0);for(let u=1;u<=l;u++){const h=u/l,f=r.getPoint(h);n.push(c.x,c.y,c.z,f.x,f.y,f.z),t.push(o.r,o.g,o.b,o.r,o.g,o.b),e.push(a,a),i.push(0,0),s.push((u-1)/l,h),c=f}}function ZE(n,t,e){const i=new Zi;i.name="gift-relation-bundles";const s=new Map(n.map(S=>[S.id,S])),r=[],o=[],a=[],l=[],c=[],u=[],h=[...t].sort((S,A)=>A.weight-S.weight),f=Math.min(h.length,e==="high"?3200:1200);for(let S=0;S<f;S++){const A=h[S],R=s.get(A.sourcePoetId),P=s.get(A.targetPoetId);if(!R||!P)continue;const L=new U(R.position.x,R.position.y,R.position.z),H=new U(P.position.x,P.position.y,P.position.z),x=L.distanceTo(H),E=new U(0,0,0),I=L.clone().lerp(H,.36).lerp(E,.3),k=L.clone().lerp(H,.64).lerp(E,.3),J=Math.min(165,x*.16+A.weight*7);I.y+=J*.78,k.y+=J;const it=new fE(L,I,k,H),G=new Vt(A.type==="gift"?"#ffd079":"#7ddcff").lerp(new Vt("#ffffff"),Math.min(.15,A.weight*.02)),W=Math.min(.075,.008+A.weight*.008),B=r.length/3,ut=e==="high"?x>700?22:16:x>700?14:10;KE(r,o,a,l,c,it,G,W,ut);const pt=r.length/3;u.push({source:A.sourcePoetId,target:A.targetPoetId,weight:A.weight,vertexOffset:B,vertexCount:pt-B,baseAlpha:W})}const d=new Ie;d.setAttribute("position",new Ae(r,3)),d.setAttribute("color",new Ae(o,3)),d.setAttribute("aAlpha",new Ae(a,1)),d.setAttribute("aSelected",new Ae(l,1)),d.setAttribute("aProgress",new Ae(c,1)),d.computeBoundingSphere();const g=new be({uniforms:{uTime:{value:0},uShow:{value:1}},vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!0,blending:_n,vertexShader:`
      precision highp float;
      attribute float aAlpha;
      attribute float aSelected;
      attribute float aProgress;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vSelected;
      varying float vProgress;
      void main(){
        vColor = color;
        vAlpha = aAlpha;
        vSelected = aSelected;
        vProgress = aProgress;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision mediump float;
      uniform float uTime;
      uniform float uShow;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vSelected;
      varying float vProgress;
      void main(){
        float flow = fract(vProgress - uTime * (0.055 + vSelected * 0.045));
        float pulse = smoothstep(0.945, 1.0, flow) * (0.08 + vSelected * 0.28);
        float endFade = smoothstep(0.0, 0.12, vProgress) * smoothstep(1.0, 0.86, vProgress);
        float sel = mix(0.32, 1.0, vSelected);
        float alpha = (vAlpha * sel + pulse) * endFade * uShow;
        if(alpha < 0.004) discard;
        vec3 col = mix(vColor, vec3(1.0, 0.91, 0.68), vSelected * 0.22 + pulse * 0.12);
        gl_FragColor = vec4(col, alpha);
      }
    `}),v=new Oo(d,g);v.name="gift-relation-lines",v.frustumCulled=!0,i.add(v);let p=e==="smooth"?1:0,m=r.length/3;function w(S){p=Math.max(0,Math.min(2,S));const A=p===0?1:p===1?.66:.36;m=Math.max(2,Math.floor(r.length/3*A/2)*2),d.setDrawRange(0,m)}function b(S,A){g.uniforms.uShow.value=A?1:0,i.visible=A;const R=d.getAttribute("aAlpha"),P=d.getAttribute("aSelected");for(const L of u){const H=!!S&&(L.source===S||L.target===S),x=!S&&L.weight>=3,E=A?H?Math.min(.18,L.baseAlpha*2.4+.04):x?L.baseAlpha:S?.0018:L.baseAlpha*.3:0,I=H?1:0;for(let k=L.vertexOffset;k<L.vertexOffset+L.vertexCount;k++)R.setX(k,E),P.setX(k,I)}R.needsUpdate=!0,P.needsUpdate=!0}return w(p),{group:i,get visibleVertexCount(){return m},updateVisibility:b,setPerformanceLevel:w,update:S=>{g.uniforms.uTime.value=S},dispose:()=>{d.dispose(),g.dispose()}}}function JE(n,t){if(n.length<=t)return n;const e=[],i=n.length/t;for(let s=0;s<t;s++)e.push(n[Math.floor(s*i)]);return e}function QE(n){return 1-Math.pow(1-Math.min(1,Math.max(0,n)),3)}function tb(n){const t=Math.min(1,Math.max(0,n));return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}function Al(n){const t=new Float32Array(n.length*2*3);n.forEach(([i,s],r)=>{const o=r*6;t[o]=i.x,t[o+1]=i.y,t[o+2]=i.z,t[o+3]=s.x,t[o+4]=s.y,t[o+5]=s.z});const e=new Ie;return e.setAttribute("position",new ae(t,3)),e.computeBoundingSphere(),e}function eb(n,t,e,i=6.2){if(!n||t.length===0)return null;const s=new Zi;s.name=`poem-constellation:${n.id}`,s.renderOrder=30;const r=new U(n.position.x,n.position.y,n.position.z),o=e==="high",l=JE(t,o?480:190),[c,u,h]=Bp(n.color||"#ffd06c"),f=new Vt(c,u,h).lerp(new Vt("#fff2bd"),.18),d=new Vt(c,u,h).lerp(new Vt("#8ee8ff"),.22),g=[],v=[],p=[],m=new Float32Array(l.length*3),w=new Float32Array(l.length),b=W=>{const B=Math.sin(W*9283.177+n.id.length*19.31)*43758.5453123;return B-Math.floor(B)};l.forEach((W,B)=>{const ut=new U(W.position.x,W.position.y,W.position.z),pt=r.clone().lerp(ut,.08);g.push([pt,ut]);const _t=r.distanceTo(ut),Nt=Math.min(260,Math.max(72,_t*.55+b(B)*90)),jt=(b(B+100)-.5)*2.4,nt=(b(B+200)-.5)*2.4;if(v.push([new U(ut.x+jt,ut.y-Nt*(.45+b(B+2)*.28),ut.z+nt),new U(ut.x-jt,ut.y+Nt*(.56+b(B+3)*.34),ut.z-nt)]),B%3===0){const vt=r.clone().lerp(ut,.92);vt.y=r.y+(b(B+5)-.5)*12,p.push([r.clone().add(new U((b(B+6)-.5)*28,0,(b(B+7)-.5)*28)),vt])}const lt=B*3;m[lt]=ut.x,m[lt+1]=ut.y,m[lt+2]=ut.z,w[B]=W.source==="real-shard"?2.2+b(B)*1.8:3.2+b(B)*2.1});const S=new Fo({color:f,transparent:!0,opacity:0,blending:_n,depthWrite:!1,depthTest:!0}),A=new Fo({color:d,transparent:!0,opacity:0,blending:_n,depthWrite:!1,depthTest:!0}),R=new Fo({color:f.clone().lerp(new Vt("#ffffff"),.32),transparent:!0,opacity:0,blending:_n,depthWrite:!1,depthTest:!0}),P=new Oo(Al(g),S),L=new Oo(Al(v),A),H=new Oo(Al(p),R);P.name="poem-constellation-radial",L.name="poem-constellation-shafts",H.name="poem-constellation-horizon",s.add(P,L,H);const x=new Ie;x.setAttribute("position",new ae(m,3)),x.setAttribute("aSize",new ae(w,1)),x.computeBoundingSphere();const E=new be({uniforms:{uTime:{value:0},uOpacity:{value:0},uColor:{value:f}},transparent:!0,depthWrite:!1,blending:_n,vertexShader:`
      precision highp float;
      attribute float aSize;
      uniform float uTime;
      void main(){
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float pulse = 1.0 + sin(uTime * 3.2 + position.x * 0.025 + position.z * 0.018) * 0.18;
        gl_PointSize = clamp(aSize * pulse * (390.0 / max(122.0, -mvPosition.z)), 1.6, 14.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        float core = smoothstep(0.16, 0.0, d);
        float halo = smoothstep(0.48, 0.02, d) * 0.46;
        float a = (core + halo) * uOpacity;
        if(a < 0.018) discard;
        gl_FragColor = vec4(uColor * (1.08 + core * 0.72), a);
      }
    `}),I=new ba(x,E);I.name="poem-constellation-points",s.add(I);const k=o?.064:.05,J=o?.07:.052,it=o?.04:.028;let G=null;return{group:s,duration:i,update:W=>{G==null&&(G=W);const B=W-G,ut=QE(B/.8),pt=B>i-1.55?1-tb((B-(i-1.55))/1.55):1,_t=.9+Math.sin(W*2.1)*.1,Nt=Math.max(0,ut*pt);return S.opacity=k*Nt*_t,A.opacity=J*Nt*(.86+Math.sin(W*1.55)*.14),R.opacity=it*Nt,E.uniforms.uOpacity.value=Math.min(.28,.2*Nt),E.uniforms.uTime.value=W,s.scale.setScalar(1+ut*.025),B<i},dispose:()=>{P.geometry.dispose(),L.geometry.dispose(),H.geometry.dispose(),S.dispose(),A.dispose(),R.dispose(),x.dispose(),E.dispose()}}}class nb{constructor(t,e){this.camera=t,this.controls=e}fromPos=new U;toPos=new U;fromTarget=new U;toTarget=new U;start=0;duration=1;active=!1;flyTo(t,e=180,i=1.35){const s=new U(t.x,t.y,t.z),r=this.camera.position.clone().sub(this.controls.target).normalize();(!Number.isFinite(r.length())||r.length()<.1)&&r.set(.4,.24,1).normalize();const o=s.clone().add(r.multiplyScalar(e));this.fromPos.copy(this.camera.position),this.toPos.copy(o),this.fromTarget.copy(this.controls.target),this.toTarget.copy(s),this.start=performance.now(),this.duration=i*1e3,this.active=!0,this.controls.enabled=!1}get isActive(){return this.active}update(t=performance.now()){if(!this.active)return;const e=Math.min(1,(t-this.start)/this.duration),i=1-Math.pow(1-e,3);this.camera.position.lerpVectors(this.fromPos,this.toPos,i),this.controls.target.lerpVectors(this.fromTarget,this.toTarget,i),e>=1&&(this.camera.position.copy(this.toPos),this.controls.target.copy(this.toTarget),this.active=!1,this.controls.enabled=!0,this.controls.update())}}class ib{constructor(t){this.camera=t,this.raycaster.params.Points={threshold:9}}raycaster=new gE;pointer=new At(99,99);setPointer(t,e,i){this.pointer.x=(t-i.left)/i.width*2-1,this.pointer.y=-((e-i.top)/i.height)*2+1}pick(t){this.raycaster.setFromCamera(this.pointer,this.camera);const i=this.raycaster.intersectObjects(t,!1).find(r=>typeof r.index=="number");return!i||typeof i.index!="number"?null:{kind:i.object.userData.kind==="poems"?"poem":"poet",index:i.index,point:i.point}}}class sb{mode;levelValue=0;lowSamples=0;highSamples=0;warmupSamples=0;constructor(t){this.mode=t,this.levelValue=t==="smooth"?1:0}get level(){return this.levelValue}get targetFps(){return this.levelValue>=2?40:this.levelValue===1?50:60}get pixelScale(){return[1,.84,.68][this.levelValue]??.68}get bloomAllowed(){return this.mode==="high"&&this.levelValue<2}reset(t){return this.mode=t,this.levelValue=t==="smooth"?1:0,this.lowSamples=0,this.highSamples=0,this.warmupSamples=0,this.levelValue}sample(t){if(this.warmupSamples+=1,this.warmupSamples<4)return null;const e=this.levelValue===0?43:35,i=this.levelValue===2?37:this.levelValue===1?47:56;if(t<e?(this.lowSamples+=1,this.highSamples=0):t>i?(this.highSamples+=1,this.lowSamples=0):(this.lowSamples=Math.max(0,this.lowSamples-1),this.highSamples=Math.max(0,this.highSamples-1)),this.lowSamples>=3&&this.levelValue<2)return this.levelValue+=1,this.lowSamples=0,this.highSamples=0,this.levelValue;const s=this.mode==="smooth"?1:0;return this.highSamples>=8&&this.levelValue>s?(this.levelValue-=1,this.lowSamples=0,this.highSamples=0,this.levelValue):null}}class rb{last=performance.now();frames=0;fps=0;tick(t=performance.now()){return this.frames+=1,t-this.last>=700?(this.fps=Math.round(this.frames*1e3/(t-this.last)),this.frames=0,this.last=t,this.fps):null}value(){return this.fps}}class ob{scene=new nE;camera;renderer;composer=null;bloomPass=null;controls;cameraController;raycaster;galaxy;poetLayer;poemLayer=null;relationLayer=null;constellationLayer=null;relationResetTimer=null;resizeTimer=null;raf=0;clock=new Np;fpsMeter=new rb;budget;keys=new Set;poets;poems;relations;poetById=new Map;poemById=new Map;opts;selectedPoetId=null;selectedPoemId=null;labelSprite=null;labelTexture=null;showRelations=!0;showPoems=!0;quality;pointerDirty=!1;pointerClientX=0;pointerClientY=0;pointerDownX=0;pointerDownY=0;pointerDragged=!1;lastHoverRaycastAt=0;lastRelationUpdateAt=0;lastRenderedAt=0;pageVisible=!document.hidden;forward=new U;right=new U;moveDelta=new U;constructor(t){this.opts=t,this.poets=t.poets,this.poems=t.poems,this.relations=t.relations,this.rebuildLookupMaps(),this.showRelations=t.showRelations,this.showPoems=t.showPoems,this.quality=t.quality,this.budget=new sb(this.quality);const e=t.container.getBoundingClientRect();this.camera=new pn(58,e.width/Math.max(1,e.height),.1,5e3),this.camera.position.set(0,210,820),this.renderer=new eE({antialias:!1,alpha:!1,powerPreference:"high-performance",precision:"highp",stencil:!1,depth:!0}),this.renderer.outputColorSpace=on,this.renderer.toneMapping=eu,this.renderer.toneMappingExposure=t.quality==="high"?.8:.76,this.renderer.domElement.style.imageRendering="auto",this.renderer.setClearColor("#02040d"),t.container.appendChild(this.renderer.domElement),this.controls=new xE(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.rotateSpeed=.36,this.controls.zoomSpeed=.62,this.controls.minDistance=78,this.controls.maxDistance=1900,this.controls.target.set(0,0,0),this.cameraController=new nb(this.camera,this.controls),this.raycaster=new ib(this.camera),this.scene.fog=new na("#030713",this.quality==="high"?86e-5:.00104),this.scene.add(new mE("#98b7ff",.38)),this.galaxy=Sf(this.quality),this.galaxy.setPerformanceLevel(this.budget.level),this.scene.add(this.galaxy.group),this.poetLayer=Ef(this.poets),this.scene.add(this.poetLayer.points),this.rebuildPoems(),this.rebuildRelations(),this.applyRenderDimensions(!0),this.reportParticleCount(),this.bind(),this.startLoop()}rebuildLookupMaps(){this.poetById=new Map(this.poets.map(t=>[t.id,t])),this.poemById=new Map(this.poems.map(t=>[t.id,t]))}basePixelRatio(){const t=window.devicePixelRatio||1,e=this.opts.container.getBoundingClientRect(),i=e.width*e.height;if(this.quality==="smooth")return Math.min(t,i>22e5?.92:1);const s=i>3e6?1.05:i>2e6?1.18:1.36;return Math.min(t,s)}composerResolutionScale(){const t=this.opts.container.getBoundingClientRect(),e=t.width*t.height,i=e>3e6?.56:e>2e6?.66:.8;return this.budget.level===1?i*.84:i}applyRenderDimensions(t){const e=this.opts.container.getBoundingClientRect(),i=Math.max(.62,this.basePixelRatio()*this.budget.pixelScale);if(this.renderer.setPixelRatio(i),this.renderer.setSize(Math.max(1,e.width),Math.max(1,e.height),!1),t)this.rebuildComposer();else if(this.composer){const s=this.composerResolutionScale();this.composer.setSize(Math.max(1,Math.floor(e.width*s)),Math.max(1,Math.floor(e.height*s)))}}rebuildComposer(){const t=this.opts.container.getBoundingClientRect();if(this.composer?.dispose(),this.composer=null,this.bloomPass=null,!this.budget.bloomAllowed)return;const e=this.composerResolutionScale(),i=Math.max(1,Math.floor(t.width*e)),s=Math.max(1,Math.floor(t.height*e)),r=new OE(this.renderer);r.setPixelRatio(1),r.setSize(i,s),r.addPass(new BE(this.scene,this.camera));const o=new Xs(new At(i,s),this.budget.level===0?.2:.13,.38,.26);o.enabled=!0,r.addPass(o),r.addPass(new HE),this.composer=r,this.bloomPass=o}applyPerformanceLevel(t){this.galaxy.setPerformanceLevel(t),this.poemLayer?.setPerformanceLevel(t),this.relationLayer?.setPerformanceLevel(t),this.applyRenderDimensions(!0),this.reportParticleCount()}reportParticleCount(){const t=this.poemLayer?.visibleCount||0;this.opts.onParticleCount?.(this.galaxy.visibleParticleCount+this.poets.length+t)}bind(){window.addEventListener("resize",this.onResize,{passive:!0}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),document.addEventListener("visibilitychange",this.onVisibilityChange),this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),this.renderer.domElement.addEventListener("pointermove",this.onPointerMove,{passive:!0}),this.renderer.domElement.addEventListener("pointerup",this.onPointerUp,{passive:!0}),this.renderer.domElement.addEventListener("pointerleave",this.onPointerLeave,{passive:!0}),this.renderer.domElement.addEventListener("click",this.onClick)}unbind(){window.removeEventListener("resize",this.onResize),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("visibilitychange",this.onVisibilityChange),this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),this.renderer.domElement.removeEventListener("pointermove",this.onPointerMove),this.renderer.domElement.removeEventListener("pointerup",this.onPointerUp),this.renderer.domElement.removeEventListener("pointerleave",this.onPointerLeave),this.renderer.domElement.removeEventListener("click",this.onClick)}onKeyDown=t=>this.keys.add(t.key.toLowerCase());onKeyUp=t=>this.keys.delete(t.key.toLowerCase());onPointerDown=t=>{this.pointerDownX=t.clientX,this.pointerDownY=t.clientY,this.pointerDragged=!1};onPointerUp=()=>{};onVisibilityChange=()=>{if(this.pageVisible=!document.hidden,!this.pageVisible){cancelAnimationFrame(this.raf),this.raf=0;return}this.lastRenderedAt=performance.now(),this.startLoop()};onResize=()=>{this.resizeTimer!=null&&window.clearTimeout(this.resizeTimer),this.resizeTimer=window.setTimeout(()=>{this.resizeTimer=null;const t=this.opts.container.getBoundingClientRect();this.camera.aspect=t.width/Math.max(1,t.height),this.camera.updateProjectionMatrix(),this.applyRenderDimensions(!0)},120)};onPointerMove=t=>{this.pointerClientX=t.clientX,this.pointerClientY=t.clientY,Math.hypot(t.clientX-this.pointerDownX,t.clientY-this.pointerDownY)>8&&(this.pointerDragged=!0),this.pointerDirty=!0};onPointerLeave=()=>{this.pointerDirty=!1,this.opts.onHover(null)};processHoverRaycast(t){if(!this.pointerDirty||t-this.lastHoverRaycastAt<48)return;this.pointerDirty=!1,this.lastHoverRaycastAt=t;const e=this.renderer.domElement.getBoundingClientRect();this.raycaster.setPointer(this.pointerClientX,this.pointerClientY,e);const i=this.raycaster.pick(this.pickables());if(!i){this.opts.onHover(null);return}if(i.kind==="poet"){const s=this.poetLayer.idByIndex[i.index],r=this.poetById.get(s);r&&this.opts.onHover({type:"poet",id:s,name:r.name,screenX:this.pointerClientX,screenY:this.pointerClientY});return}if(this.poemLayer){const s=this.poemLayer.idByIndex[i.index],r=this.poemById.get(s);r&&this.opts.onHover({type:"poem",id:s,name:r.title,screenX:this.pointerClientX,screenY:this.pointerClientY})}}onClick=t=>{if(this.pointerDragged){this.pointerDragged=!1;return}const e=this.renderer.domElement.getBoundingClientRect();this.raycaster.setPointer(t.clientX,t.clientY,e);const i=this.raycaster.pick(this.pickables());if(i?.kind==="poet"){const s=this.poetLayer.idByIndex[i.index];this.opts.onSelectPoet(s);return}if(i?.kind==="poem"&&this.poemLayer){const s=this.poemLayer.idByIndex[i.index];this.opts.onSelectPoem(s);return}};pickables(){const t=[this.poetLayer.points];return this.showPoems&&this.poemLayer&&t.push(this.poemLayer.points),t}startLoop(){!this.pageVisible||this.raf||(this.raf=requestAnimationFrame(this.animate))}animate=t=>{if(this.raf=0,!this.pageVisible)return;this.raf=requestAnimationFrame(this.animate);const e=1e3/this.budget.targetFps;if(t-this.lastRenderedAt<e-.8)return;const i=Math.min(.05,Math.max(.001,(t-this.lastRenderedAt)/1e3));this.lastRenderedAt=t;const s=this.clock.getElapsedTime();if(this.galaxy.group.rotation.y=s*.0092,this.galaxy.update(s),t-this.lastRelationUpdateAt>33&&(this.relationLayer?.update(s),this.lastRelationUpdateAt=t),this.poetLayer.material.uniforms.uTime.value=s,this.poemLayer){const o=this.poemLayer.points.material;o.uniforms.uTime.value=s}this.processHoverRaycast(t),this.updateKeyboardMove(i),this.cameraController.update(t),this.cameraController.isActive||this.controls.update(),this.updateConstellation(s),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera);const r=this.fpsMeter.tick(t);if(r!=null){this.opts.onFps(r);const o=this.budget.sample(r);o!=null&&this.applyPerformanceLevel(o)}};updateKeyboardMove(t){if(this.keys.size===0)return;const e=(this.keys.has("shift")?276:108)*t;this.camera.getWorldDirection(this.forward),this.forward.y=0,this.forward.normalize(),this.right.crossVectors(this.forward,this.camera.up).normalize().multiplyScalar(-1),this.moveDelta.set(0,0,0),(this.keys.has("w")||this.keys.has("arrowup"))&&this.moveDelta.add(this.forward),(this.keys.has("s")||this.keys.has("arrowdown"))&&this.moveDelta.sub(this.forward),(this.keys.has("a")||this.keys.has("arrowleft"))&&this.moveDelta.sub(this.right),(this.keys.has("d")||this.keys.has("arrowright"))&&this.moveDelta.add(this.right),this.keys.has("q")&&(this.moveDelta.y+=1),this.keys.has("e")&&(this.moveDelta.y-=1),this.moveDelta.lengthSq()>0&&(this.moveDelta.normalize().multiplyScalar(e),this.camera.position.add(this.moveDelta),this.controls.target.add(this.moveDelta))}relatedSet(t){const e=new Set;if(!t)return e;e.add(t);for(const i of this.relations)i.sourcePoetId===t&&e.add(i.targetPoetId),i.targetPoetId===t&&e.add(i.sourcePoetId);return e}rebuildPoems(){if(this.poemLayer&&(this.scene.remove(this.poemLayer.points),this.poemLayer.dispose(),this.poemLayer=null),this.showPoems&&this.poems.length){const t=this.quality==="smooth"?4500:16e3;this.poemLayer=jE(this.poems.slice(-t)),this.poemLayer.setPerformanceLevel(this.budget.level),this.scene.add(this.poemLayer.points)}}rebuildRelations(){this.relationLayer&&(this.scene.remove(this.relationLayer.group),this.relationLayer.dispose(),this.relationLayer=null),this.relationLayer=ZE(this.poets,this.relations,this.quality),this.relationLayer.setPerformanceLevel(this.budget.level),this.scene.add(this.relationLayer.group),this.relationLayer.updateVisibility(this.selectedPoetId,this.showRelations)}updateData(t,e,i){this.poets=t,this.poems=e,this.relations=i,this.rebuildLookupMaps(),this.scene.remove(this.poetLayer.points),this.poetLayer.dispose(),this.poetLayer=Ef(t),this.scene.add(this.poetLayer.points),this.rebuildPoems(),this.rebuildRelations(),this.reportParticleCount(),this.setSelectedPoet(this.selectedPoetId),this.setSelectedPoem(this.selectedPoemId)}updatePoems(t){if(this.poems=t,this.poemById=new Map(t.map(e=>[e.id,e])),this.rebuildPoems(),this.reportParticleCount(),this.selectedPoemId){const e=this.poemById.get(this.selectedPoemId);e&&this.showPoemConstellation(e.poetId,[e],4.8)}else this.selectedPoetId&&this.showPoemConstellation(this.selectedPoetId);this.updateSelectionLabel()}setSelectedPoet(t){this.selectedPoetId=t,t&&(this.selectedPoemId=null),this.poetLayer.updateSelection(t,this.relatedSet(t)),this.pulseRelations(t),t?this.showPoemConstellation(t):this.clearConstellation(),this.updateSelectionLabel()}setSelectedPoem(t){if(this.selectedPoemId=t,t){const e=this.poemById.get(t);e&&(this.selectedPoetId=e.poetId,this.poetLayer.updateSelection(e.poetId,this.relatedSet(e.poetId)),this.pulseRelations(e.poetId),this.showPoemConstellation(e.poetId,[e],4.8))}else this.selectedPoetId&&this.showPoemConstellation(this.selectedPoetId);this.updateSelectionLabel()}pulseRelations(t){this.relationResetTimer!=null&&(window.clearTimeout(this.relationResetTimer),this.relationResetTimer=null),t&&this.showRelations?(this.relationLayer?.updateVisibility(t,!0),this.relationResetTimer=window.setTimeout(()=>{this.relationLayer?.updateVisibility(null,this.showRelations),this.relationResetTimer=null},5200)):this.relationLayer?.updateVisibility(null,this.showRelations)}clearConstellation(){this.constellationLayer&&(this.scene.remove(this.constellationLayer.group),this.constellationLayer.dispose(),this.constellationLayer=null)}showPoemConstellation(t,e,i=5.4){const s=this.poetById.get(t);if(!s)return;const r=e||this.poems.filter(a=>a.poetId===t);this.clearConstellation();const o=eb(s,r,this.quality,i);o&&(this.constellationLayer=o,this.scene.add(o.group))}updateConstellation(t){if(!this.constellationLayer)return;this.constellationLayer.update(t)||this.clearConstellation()}makeLabelSprite(t,e="#ffd98a"){const i=document.createElement("canvas"),s=i.getContext("2d"),r=Math.min(1.5,window.devicePixelRatio||1);i.width=300*r,i.height=74*r,s.scale(r,r),s.clearRect(0,0,300,74);const o=t.length>9?`${t.slice(0,9)}…`:t,a=Math.min(260,56+o.length*30),l=(300-a)/2;s.beginPath(),s.roundRect(l,16,a,42,21),s.fillStyle="rgba(5, 9, 20, 0.64)",s.fill(),s.strokeStyle="rgba(255, 219, 139, 0.46)",s.lineWidth=1,s.stroke(),s.font='700 24px "Noto Serif SC", "Songti SC", serif',s.textAlign="center",s.textBaseline="middle",s.shadowColor=e,s.shadowBlur=6,s.fillStyle="#ffe9ad",s.fillText(o,150,37);const c=new Up(i);c.colorSpace=on,c.minFilter=qe,c.magFilter=qe,c.generateMipmaps=!1;const u=new Dp({map:c,transparent:!0,opacity:.92,depthWrite:!1,depthTest:!1,toneMapped:!1}),h=new sE(u);return h.scale.set(44,11,1),h.renderOrder=999,this.labelTexture=c,h}clearLabel(){this.labelSprite&&(this.scene.remove(this.labelSprite),this.labelSprite.material.dispose(),this.labelSprite=null),this.labelTexture?.dispose(),this.labelTexture=null}updateSelectionLabel(){this.clearLabel();const t=this.selectedPoemId?this.poemById.get(this.selectedPoemId):null;if(t){this.labelSprite=this.makeLabelSprite(t.title,"#9fd6ff"),this.labelSprite.position.set(t.position.x,t.position.y+16,t.position.z),this.scene.add(this.labelSprite);return}const e=this.selectedPoetId?this.poetById.get(this.selectedPoetId):null;e&&(this.labelSprite=this.makeLabelSprite(e.name,e.color),this.labelSprite.position.set(e.position.x,e.position.y+22,e.position.z),this.scene.add(this.labelSprite))}setVisibility(t,e){this.showRelations=t,this.showPoems=e,e&&!this.poemLayer&&this.poems.length&&this.rebuildPoems(),this.poemLayer&&(this.poemLayer.points.visible=e),this.pulseRelations(t?this.selectedPoetId:null),this.reportParticleCount()}flyTo(t,e){this.cameraController.flyTo(t,e)}setQuality(t){if(t===this.quality)return;this.quality=t;const e=this.budget.reset(t);this.renderer.toneMappingExposure=t==="high"?.8:.76,this.scene.fog=new na("#030713",t==="high"?86e-5:.00104),this.scene.remove(this.galaxy.group),this.galaxy.dispose(),this.galaxy=Sf(t),this.galaxy.setPerformanceLevel(e),this.scene.add(this.galaxy.group),this.rebuildPoems(),this.rebuildRelations(),this.applyRenderDimensions(!0),this.reportParticleCount()}dispose(){cancelAnimationFrame(this.raf),this.raf=0,this.unbind(),this.resizeTimer!=null&&window.clearTimeout(this.resizeTimer),this.controls.dispose(),this.galaxy.dispose(),this.poetLayer.dispose(),this.poemLayer?.dispose(),this.relationLayer?.dispose(),this.clearConstellation(),this.relationResetTimer!=null&&window.clearTimeout(this.relationResetTimer),this.clearLabel(),this.composer?.dispose(),this.composer=null,this.bloomPass=null,WE(),this.scene.traverse(t=>{const e=t;e.geometry?.dispose?.();const i=e.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i?.dispose?.()}),this.renderer.dispose(),this.renderer.domElement.remove()}}const ab=Dn({__name:"UniverseCanvas",setup(n){const t=Gn(null),e=In(),{relations:i,selectedPoetId:s,selectedPoemId:r,showRelations:o,showPoems:a,qualityMode:l}=Xd(e),c=Ne(()=>e.filteredPoets),u=Ne(()=>e.filteredPoems),h=Ne(()=>{const g=new Set(c.value.map(v=>v.id));return i.value.filter(v=>g.has(v.sourcePoetId)&&g.has(v.targetPoetId))});let f=null;ga(()=>{t.value&&(f=new ob({container:t.value,poets:c.value,poems:u.value,relations:h.value,quality:l.value,showRelations:o.value,showPoems:a.value,onHover:g=>e.setHoveredObject(g),onSelectPoet:async g=>{await e.selectPoet(g);const v=e.poets.find(p=>p.id===g);v&&f?.flyTo(v.position,220)},onSelectPoem:g=>{e.selectPoem(g)},onFps:g=>e.setFps(g),onParticleCount:g=>e.setParticleCount(g)}))}),an([c,u,h],()=>{f?.updateData(c.value,u.value,h.value)}),an(s,g=>{f?.setSelectedPoet(g)}),an(r,g=>{if(f?.setSelectedPoem(g),!g)return;const v=e.poems.find(p=>p.id===g);v&&f?.flyTo(v.position,140)}),an([o,a],()=>{f?.setVisibility(o.value,a.value)}),an(l,g=>{f?.setQuality(g)});const d=(g=>{f?.flyTo(g.detail.position,g.detail.distance)});return window.addEventListener("shiyun:fly-to",d),qc(()=>{window.removeEventListener("shiyun:fly-to",d),f?.dispose(),f=null}),(g,v)=>(Wt(),Yt("div",{ref_key:"root",ref:t,class:"universe-canvas"},null,512))}});function lb(n){return Bc()?(Ff(n),!0):!1}const cb=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ub=Object.prototype.toString,hb=n=>ub.call(n)==="[object Object]",Ic=()=>{};function fb(n,t){function e(...i){return new Promise((s,r)=>{Promise.resolve(n(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(s).catch(r)})}return e}function db(n,t={}){let e,i,s=Ic;const r=l=>{clearTimeout(l),s(),s=Ic};let o;return l=>{const c=Ti(n),u=Ti(t.maxWait);return e&&r(e),c<=0||u!==void 0&&u<=0?(i&&(r(i),i=null),Promise.resolve(l())):new Promise((h,f)=>{s=t.rejectOnCancel?f:h,o=l,u&&!i&&(i=setTimeout(()=>{e&&r(e),i=null,h(o())},u)),e=setTimeout(()=>{i&&r(i),i=null,h(l())},c)})}}function Cl(n){return Array.isArray(n)?n:[n]}function pb(n,t=200,e={}){return fb(db(t,e),n)}function mb(n,t,e){return an(n,t,{...e,immediate:!0})}const zp=cb?window:void 0;function gb(n){var t;const e=Ti(n);return(t=e?.$el)!=null?t:e}function To(...n){const t=[],e=()=>{t.forEach(a=>a()),t.length=0},i=(a,l,c,u)=>(a.addEventListener(l,c,u),()=>a.removeEventListener(l,c,u)),s=Ne(()=>{const a=Cl(Ti(n[0])).filter(l=>l!=null);return a.every(l=>typeof l!="string")?a:void 0}),r=mb(()=>{var a,l;return[(l=(a=s.value)==null?void 0:a.map(c=>gb(c)))!=null?l:[zp].filter(c=>c!=null),Cl(Ti(s.value?n[1]:n[0])),Cl(ft(s.value?n[2]:n[1])),Ti(s.value?n[3]:n[2])]},([a,l,c,u])=>{if(e(),!a?.length||!l?.length||!c?.length)return;const h=hb(u)?{...u}:u;t.push(...a.flatMap(f=>l.flatMap(d=>c.map(g=>i(f,d,g,h)))))},{flush:"post"}),o=()=>{r(),e()};return lb(e),o}const _b={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function vb(n={}){const{reactive:t=!1,target:e=zp,aliasMap:i=_b,passive:s=!0,onEventFired:r=Ic}=n,o=Os(new Set),a={toJSON(){return{}},current:o},l=t?Os(a):a,c=new Set,u=new Set;function h(v,p){v in l&&(t?l[v]=p:l[v].value=p)}function f(){o.clear();for(const v of u)h(v,!1)}function d(v,p){var m,w;const b=(m=v.key)==null?void 0:m.toLowerCase(),A=[(w=v.code)==null?void 0:w.toLowerCase(),b].filter(Boolean);b&&(p?o.add(b):o.delete(b));for(const R of A)u.add(R),h(R,p);b==="meta"&&!p?(c.forEach(R=>{o.delete(R),h(R,!1)}),c.clear()):typeof v.getModifierState=="function"&&v.getModifierState("Meta")&&p&&[...o,...A].forEach(R=>c.add(R))}To(e,"keydown",v=>(d(v,!0),r(v)),{passive:s}),To(e,"keyup",v=>(d(v,!1),r(v)),{passive:s}),To("blur",f,{passive:s}),To("focus",f,{passive:s});const g=new Proxy(l,{get(v,p,m){if(typeof p!="string")return Reflect.get(v,p,m);if(p=p.toLowerCase(),p in i&&(p=i[p]),!(p in l))if(/[+_-]/.test(p)){const b=p.split(/[+_-]/g).map(S=>S.trim());l[p]=Ne(()=>b.map(S=>Ti(g[S])).every(Boolean))}else l[p]=Sm(!1);const w=Reflect.get(v,p,m);return t?Ti(w):w}});return g}const xb={class:"search-panel"},yb={class:"search-box"},Sb=["placeholder","onKeydown"],Mb={key:0,class:"search-results"},Eb=["onClick"],bb={key:1,class:"search-empty"},Tb=Dn({__name:"SearchPanel",setup(n){const t=In(),e=Gn(""),i=Gn([]),s=Gn(!1),r=Ne(()=>t.activePanel==="line"?"搜索诗句……（回车飞到第一个）":t.activePanel==="explore"?"探诗：输入诗题、片段或编号占位":"搜索诗人……（回车飞到第一个）"),o=pb(async()=>{s.value=!0,i.value=await t.searchNodes(e.value)},180);function a(){o()}function l(h){return h==="poet"?"诗人":h==="line"?"诗句":"诗作"}async function c(h){const f=await t.materializeSearchResult(h),d=f.poem?.position||f.poet?.position;d&&window.dispatchEvent(new CustomEvent("shiyun:fly-to",{detail:{position:d,distance:f.poem?140:220}})),i.value=[],s.value=!1}function u(){i.value[0]&&c(i.value[0])}return(h,f)=>(Wt(),Yt("div",xb,[Z("div",yb,[Nm(Z("input",{"onUpdate:modelValue":f[0]||(f[0]=d=>e.value=d),type:"search",placeholder:r.value,onInput:a,onKeydown:M_(y_(u,["prevent"]),["enter"])},null,40,Sb),[[__,e.value]])]),i.value.length?(Wt(),Yt("div",Mb,[(Wt(!0),Yt(Ee,null,Is(i.value,d=>(Wt(),Yt("button",{key:`${d.type}:${d.id}`,onClick:g=>c(d)},[Z("strong",null,Ht(d.title),1),Z("span",null,Ht(l(d.type))+" · "+Ht(d.subtitle),1)],8,Eb))),128))])):e.value.trim()&&s.value?(Wt(),Yt("div",bb,"没有命中，试试作者名、诗名或一句诗。")):rn("",!0)]))}}),wb={class:"filter-group"},Ab=["onClick"],Cb=Dn({__name:"DynastyFilter",setup(n){const t=In();return(e,i)=>(Wt(),Yt("div",wb,[(Wt(!0),Yt(Ee,null,Is(ft(Rr),s=>(Wt(),Yt("button",{key:s,class:De(["filter-pill",{active:s===ft(Rr)[0]?ft(t).selectedDynasties.length===0:ft(t).selectedDynasties.includes(s)}]),onClick:r=>ft(t).setDynastyFilter(s)},[Z("span",null,Ht(s),1),Z("small",null,Ht(ft(t).dynastyCounts[s]||0),1)],10,Ab))),128))]))}}),Rb={class:"form-filter compact-filter"},Pb=["onClick"],Lb=Dn({__name:"PoemFormFilter",setup(n){const t=In(),e=["五绝","七绝","五律","七律","现代诗","全部"];function i(s){return s==="现代诗"?"自由":s==="全部"?"全部":s}return(s,r)=>(Wt(),Yt("div",Rb,[(Wt(),Yt(Ee,null,Is(e,o=>Z("button",{key:o,class:De(["toolbar-chip",{active:ft(t).currentPoemForm===o}]),onClick:a=>ft(t).setPoemFormFilter(o)},Ht(i(o)),11,Pb)),64))]))}}),Db=Dn({__name:"QualityToggle",setup(n){const t=In();return(e,i)=>(Wt(),Yt("button",{class:"toolbar-chip",onClick:i[0]||(i[0]=s=>ft(t).toggleQualityMode())},"画质·"+Ht(ft(t).qualityMode==="high"?"高":"低"),1))}}),Ib={key:0,class:"more-panel glass"},Ub={class:"more-head"},Nb={class:"segmented"},Fb={class:"check-row"},Ob=["checked"],Bb={class:"check-row"},zb=["checked"],kb={class:"segmented"},Hb={class:"about-actions"},Vb=Dn({__name:"MorePanel",props:{open:{type:Boolean}},emits:["close"],setup(n){const t=In();function e(o){t.showRelations!==o&&t.toggleRelations()}function i(){t.showRelations||t.toggleRelations(),t.toast(t.selectedPoetId?"已锁定当前诗人关系网":"先点击一位诗人，再锁定关系网")}function s(o){t.qualityMode!==o&&t.toggleQualityMode()}async function r(){await navigator.clipboard.writeText(`${location.origin}/data/manifest.json`),t.toast("已复制本地数据入口")}return(o,a)=>n.open&&!ft(t).uiHidden?(Wt(),Yt("div",Ib,[Z("div",Ub,[a[8]||(a[8]=Z("strong",null,"更多",-1)),Z("button",{onClick:a[0]||(a[0]=l=>o.$emit("close"))},"×")]),Z("section",null,[a[9]||(a[9]=Z("label",null,"赠诗指引线",-1)),Z("div",Nb,[Z("button",{class:De({active:!ft(t).showRelations}),onClick:a[1]||(a[1]=l=>e(!1))},"不显示",2),Z("button",{class:De({active:ft(t).showRelations}),onClick:a[2]||(a[2]=l=>e(!0))},"一次性",2),Z("button",{class:De({active:ft(t).showRelations&&ft(t).selectedPoetId}),onClick:i},"常驻",2)])]),Z("section",null,[a[12]||(a[12]=Z("label",null,"显示层",-1)),Z("label",Fb,[Z("input",{type:"checkbox",checked:ft(t).showRelations,onChange:a[3]||(a[3]=l=>ft(t).toggleRelations())},null,40,Ob),a[10]||(a[10]=wi(" 赠诗网络 · 开启后可显示诗人关系弧线",-1))]),Z("label",Bb,[Z("input",{type:"checkbox",checked:ft(t).showPoems,onChange:a[4]||(a[4]=l=>ft(t).togglePoems())},null,40,zb),a[11]||(a[11]=wi(" 诗歌小星 · 显示已加载作品星群",-1))]),a[13]||(a[13]=Z("label",{class:"check-row"},[Z("input",{type:"checkbox",checked:""}),wi(" 引力 · 摄像机随星系柔和靠近")],-1))]),Z("section",null,[a[14]||(a[14]=Z("label",null,"画质",-1)),Z("div",kb,[Z("button",{class:De({active:ft(t).qualityMode==="smooth"}),onClick:a[5]||(a[5]=l=>s("smooth"))},"流畅",2),Z("button",{class:De({active:ft(t).qualityMode==="high"}),onClick:a[6]||(a[6]=l=>s("high"))},"高画质",2)])]),a[16]||(a[16]=Z("section",null,[Z("label",null,"数据")],-1)),Z("section",null,[a[15]||(a[15]=Z("label",null,"关于 · 数据",-1)),Z("div",Hb,[Z("button",{onClick:r},"复制数据路径"),Z("button",{onClick:a[7]||(a[7]=l=>ft(t).toggleUI())},"截图模式")])])])):rn("",!0)}}),Gb={key:0,class:"hud-layer"},Wb={class:"top-toolbar"},Xb={class:"mode-panel"},$b={class:"mode-tabs"},qb={key:2,class:"data-warning slim"},Yb={class:"corner-stats"},jb={class:"status-panel compact"},Kb=Dn({__name:"HudPanel",setup(n){const t=In(),e=Gn(!1),i=Gn(!1),s=Gn(!1),r=Ne(()=>(t.selectedDynasties.length===0?t.manifest?.poetCount||t.poets.length:t.filteredPoets.length).toLocaleString()),o=Ne(()=>(t.selectedDynasties.length===0?t.manifest?.poemCount||t.poems.length:t.filteredPoems.length).toLocaleString()),a=vb();return an(a.h,l=>{const c=document.activeElement;l&&c?.tagName!=="INPUT"&&c?.tagName!=="TEXTAREA"&&t.toggleUI()}),(l,c)=>ft(t).uiHidden?(Wt(),Yt("button",{key:1,class:"show-ui",onClick:c[9]||(c[9]=u=>ft(t).toggleUI())},"显示界面 · H")):(Wt(),Yt("div",Gb,[c[10]||(c[10]=Z("header",{class:"brand-bar"},[Z("div",{class:"logo-mark"},"诗云"),Z("div",{class:"logo-sub"},"Poetry Cloud")],-1)),Z("div",Wb,[xe(Lb),Z("button",{class:De(["toolbar-chip",{active:i.value}]),onClick:c[0]||(c[0]=u=>i.value=!i.value)},"常用字",2),Z("button",{class:De(["toolbar-chip",{active:s.value}]),onClick:c[1]||(c[1]=u=>s.value=!s.value)},"格律",2),Z("button",{class:"toolbar-chip gold",onClick:c[2]||(c[2]=u=>e.value=!e.value)},"更多"),xe(Db)]),Z("div",Xb,[Z("div",$b,[Z("button",{class:De({active:ft(t).activePanel==="poet"}),onClick:c[3]||(c[3]=u=>ft(t).setActivePanel("poet"))},"诗人",2),Z("button",{class:De({active:ft(t).activePanel==="line"}),onClick:c[4]||(c[4]=u=>ft(t).setActivePanel("line"))},"寻诗",2),Z("button",{class:De({active:ft(t).activePanel==="explore"}),onClick:c[5]||(c[5]=u=>ft(t).setActivePanel("explore"))},"探诗",2),Z("button",{class:De({active:ft(t).activePanel==="dynasty"}),onClick:c[6]||(c[6]=u=>ft(t).setActivePanel("dynasty"))},"朝代",2)]),ft(t).activePanel!=="dynasty"?(Wt(),Xo(Tb,{key:0})):(Wt(),Xo(Cb,{key:1})),ft(t).dataError?(Wt(),Yt("div",qb,Ht(ft(t).dataError),1)):rn("",!0)]),xe(Vb,{open:e.value,onClose:c[7]||(c[7]=u=>e.value=!1)},null,8,["open"]),Z("div",Yb,[wi(Ht(r.value)+" 诗人 · "+Ht(o.value)+" 首 · ",1),Z("button",{onClick:c[8]||(c[8]=u=>ft(t).toggleUI())},"隐藏界面 · H")]),c[11]||(c[11]=Z("div",{class:"bottom-hint"},[wi(" WASD 飞行 · 拖拽转向 · 滚轮调速 · "),Z("b",null,"点击星君看其真作")],-1)),Z("div",jb,[Z("span",null,Ht(ft(t).qualityMode==="high"?"画质·高":"画质·流畅"),1),Z("span",null,"FPS "+Ht(ft(t).fps||"--"),1),Z("span",null,"粒子 "+Ht(ft(t).particleCount.toLocaleString()),1),Z("span",null,Ht(ft(t).dataMode==="real-index"?"真实语料":"演示语料"),1)])]))}}),Zb={class:"drawer-headline"},Jb={class:"meta-line"},Qb={class:"small-actions"},tT={class:"poem-body"},eT={class:"info-list compact"},nT={class:"drawer-actions"},iT={class:"drawer-headline"},sT={class:"meta-line"},rT={class:"info-list compact"},oT={class:"description"},aT={class:"poet-work-section"},lT={class:"section-title-row"},cT={key:0,class:"load-progress"},uT={class:"bar"},hT={key:1,class:"data-warning inline"},fT={key:2,class:"poem-title-list"},dT=["onClick"],pT={class:"poem-row-actions"},mT=["onClick"],gT=["onClick"],_T=["onClick"],vT={key:3,class:"muted poem-empty-note"},xT={class:"section-title-row"},yT={class:"relation-list"},ST=["onClick"],MT={key:0,class:"muted"},ET={class:"drawer-actions sticky-actions"},bT={class:"description big-copy"},TT={key:1,class:"toast glass"},wT=Dn({__name:"DetailDrawer",setup(n){const t=In(),e=Gn(80),i=Ne(()=>t.selectedPoem&&t.poets.find(S=>S.id===t.selectedPoem?.poetId)||null),s=Ne(()=>{const S=t.selectedPoet;if(!S)return[];const A=t.poems.filter(R=>R.poetId===S.id);return t.currentPoemForm!=="全部"?A.filter(R=>R.form===t.currentPoemForm):A}),r=Ne(()=>s.value.slice(0,e.value)),o=Ne(()=>t.selectedPoet&&t.poemLoadingPoetId===t.selectedPoet.id),a=Ne(()=>{const S=t.selectedPoet;return!S||!S.birthYear&&!S.deathYear?"未载":`${S.birthYear??"?"} — ${S.deathYear??"?"}`}),l=Ne(()=>[...new Set(t.relatedPoetIds)].map(A=>t.poets.find(R=>R.id===A)).filter(Boolean));an(()=>t.selectedPoetId,()=>{e.value=80}),an(()=>t.currentPoemForm,()=>{e.value=80});function c(S){return`${S.x.toFixed(1)}, ${S.y.toFixed(1)}, ${S.z.toFixed(1)}`}function u(S){return S==="real-shard"||S==="real-shard"?"真实作品分片":"真实诗文"}function h(S,A){window.dispatchEvent(new CustomEvent("shiyun:fly-to",{detail:{position:S,distance:A}}))}function f(S){t.selectPoem(S);const A=t.poems.find(R=>R.id===S);A&&h(A.position,140)}async function d(S){await t.selectPoet(S);const A=t.poets.find(R=>R.id===S);A&&h(A.position,95)}async function g(){!t.selectedPoem||!i.value||(await navigator.clipboard.writeText(`《${t.selectedPoem.title}》
${i.value.name}

${t.selectedPoem.lines.join(`
`)}`),t.toast("已复制诗文"))}async function v(S){const A=t.poems.find(R=>R.id===S);A&&(await navigator.clipboard.writeText(A.catalogIndex),t.toast("已复制目录编号"))}async function p(){if(!t.selectedPoet)return;const S=`${location.origin}${location.pathname}${location.search}#a=${encodeURIComponent(t.selectedPoet.id)}`;await navigator.clipboard.writeText(S),t.toast("已复制诗人分享链接")}async function m(){if(!t.selectedPoem)return;const S=`${location.origin}${location.pathname}${location.search}#poem=${encodeURIComponent(t.selectedPoem.id)}`;await navigator.clipboard.writeText(S),t.toast("已复制诗作分享链接")}function w(){const S=t.selectedPoet?.name||"诗人";t.toast(`已留影：${S} 的星系视角`)}function b(S){const A=t.poems.find(R=>R.id===S);t.toast(`已留影：《${A?.title||"诗"}》`)}return(S,A)=>(Wt(),Yt(Ee,null,[ft(t).uiHidden?rn("",!0):(Wt(),Yt("aside",{key:0,class:De(["detail-drawer glass",{empty:!ft(t).selectedPoet&&!ft(t).selectedPoem}])},[Z("button",{class:"drawer-close",title:"关闭",onClick:A[0]||(A[0]=R=>ft(t).clearSelection())},"×"),ft(t).selectedPoem&&i.value?(Wt(),Yt(Ee,{key:0},[Z("div",Zb,[Z("div",null,[A[6]||(A[6]=Z("div",{class:"drawer-kicker"},"Poem Star",-1)),Z("h2",null,"《"+Ht(ft(t).selectedPoem.title)+"》",1),Z("div",Jb,Ht(i.value.name)+" · "+Ht(ft(t).selectedPoem.dynasty)+" · "+Ht(ft(t).selectedPoem.form),1)]),Z("div",Qb,[Z("button",{onClick:m},"分享"),Z("button",{onClick:A[1]||(A[1]=R=>ft(t).selectPoet(i.value.id))},"作者")])]),Z("div",tT,[(Wt(!0),Yt(Ee,null,Is(ft(t).selectedPoem.lines,(R,P)=>(Wt(),Yt("p",{key:`${R}-${P}`},Ht(R),1))),128))]),Z("dl",eT,[Z("div",null,[A[7]||(A[7]=Z("dt",null,"目录编号",-1)),Z("dd",null,Ht(ft(t).selectedPoem.catalogIndex),1)]),Z("div",null,[A[8]||(A[8]=Z("dt",null,"数据来源",-1)),Z("dd",null,Ht(u(ft(t).selectedPoem.source)),1)])]),Z("div",nT,[Z("button",{onClick:A[2]||(A[2]=R=>h(i.value.position,220))},"定位作者"),Z("button",{onClick:g},"复制诗文")])],64)):ft(t).selectedPoet?(Wt(),Yt(Ee,{key:1},[Z("div",iT,[Z("div",null,[A[9]||(A[9]=Z("div",{class:"drawer-kicker"},"Poet Star",-1)),Z("h2",null,Ht(ft(t).selectedPoet.name),1),Z("div",sT,Ht(ft(t).selectedPoet.dynastyRaw||ft(t).selectedPoet.dynasty)+" · "+Ht(ft(t).selectedPoet.poemCount.toLocaleString())+" 首"+Ht(ft(t).selectedPoet.source==="real-index"?"真实作品":"演示作品"),1)]),Z("div",{class:"small-actions"},[Z("button",{onClick:p},"分享"),Z("button",{onClick:w},"留影")])]),Z("dl",rT,[Z("div",null,[A[10]||(A[10]=Z("dt",null,"影响力",-1)),Z("dd",null,Ht(Math.round(ft(t).selectedPoet.influence)),1)]),Z("div",null,[A[11]||(A[11]=Z("dt",null,"生卒年",-1)),Z("dd",null,Ht(a.value),1)]),Z("div",null,[A[12]||(A[12]=Z("dt",null,"坐标",-1)),Z("dd",null,Ht(c(ft(t).selectedPoet.position)),1)])]),Z("p",oT,Ht(ft(t).selectedPoet.description),1),Z("section",aT,[Z("div",lT,[A[13]||(A[13]=Z("h3",null,"全部诗词",-1)),Z("span",null," 已加载 "+Ht(s.value.length.toLocaleString())+" / "+Ht(ft(t).selectedPoet.poemCount.toLocaleString()),1)]),o.value?(Wt(),Yt("div",cT,[Z("div",uT,[Z("i",{style:Ur({width:`${ft(t).poemLoadProgress||18}%`})},null,4)]),Z("span",null,"正在按分片加载 "+Ht(ft(t).selectedPoet.name)+" 的作品……",1)])):rn("",!0),ft(t).poemLoadError?(Wt(),Yt("div",hT,Ht(ft(t).poemLoadError),1)):rn("",!0),s.value.length?(Wt(),Yt("div",fT,[(Wt(!0),Yt(Ee,null,Is(r.value,R=>(Wt(),Yt("article",{key:R.id,class:"poem-title-card"},[Z("button",{class:"poem-title-main",onClick:P=>f(R.id)},[A[14]||(A[14]=Z("span",{class:"caret"},"›",-1)),Z("strong",null,Ht(R.title),1),Z("em",null,Ht(R.form),1)],8,dT),Z("div",pT,[Z("button",{onClick:P=>f(R.id)},"定位",8,mT),Z("button",{onClick:P=>v(R.id)},"复制编号",8,gT),Z("button",{onClick:P=>b(R.id)},"留影",8,_T)])]))),128)),e.value<s.value.length?(Wt(),Yt("button",{key:0,class:"load-more",onClick:A[3]||(A[3]=R=>e.value+=80)}," 显示更多 "+Ht(Math.min(80,s.value.length-e.value))+" 首 ",1)):rn("",!0)])):o.value?rn("",!0):(Wt(),Yt("div",vT,[A[15]||(A[15]=wi(" 真实数据模式下，点击诗人会从 ",-1)),Z("code",null,"poems/"+Ht(ft(t).selectedPoet.id.slice(0,2))+".json",1),A[16]||(A[16]=wi(" 按 Range 读取该诗人的全部作品；没有真实分片时会显示演示作品。 ",-1))]))]),Z("section",null,[Z("div",xT,[A[17]||(A[17]=Z("h3",null,"相关诗人网络",-1)),Z("span",null,Ht(l.value.length)+" 条可见关系",1)]),Z("div",yT,[(Wt(!0),Yt(Ee,null,Is(l.value.slice(0,18),R=>(Wt(),Yt("button",{key:R.id,onClick:P=>d(R.id)},Ht(R.name),9,ST))),128)),l.value.length?rn("",!0):(Wt(),Yt("span",MT,"暂无已加载关系。"))])]),Z("div",ET,[Z("button",{onClick:A[4]||(A[4]=R=>h(ft(t).selectedPoet.position,220))},"飞向诗人"),Z("button",{onClick:A[5]||(A[5]=R=>ft(t).showRelations||ft(t).toggleRelations())},"临时高亮网络")])],64)):(Wt(),Yt(Ee,{key:2},[A[18]||(A[18]=Z("div",{class:"drawer-kicker"},"Welcome",-1)),A[19]||(A[19]=Z("h2",null,"进入诗歌星海",-1)),Z("p",bT,Ht(ft(t).corpusSlogan),1),A[20]||(A[20]=Z("p",{class:"description"},"点击作者星会打开他的完整作品抽屉；点击诗星即可阅读真实诗文。",-1))],64))],2)),ft(t).lastToast&&!ft(t).uiHidden?(Wt(),Yt("div",TT,Ht(ft(t).lastToast),1)):rn("",!0)],64))}}),AT=Dn({__name:"HoverTooltip",setup(n){const t=In();return(e,i)=>ft(t).hoveredObject&&!ft(t).uiHidden?(Wt(),Yt("div",{key:0,class:"hover-tooltip",style:Ur({left:`${ft(t).hoveredObject.screenX+14}px`,top:`${ft(t).hoveredObject.screenY+14}px`})},[Z("span",null,Ht(ft(t).hoveredObject.type==="poet"?"诗人":"诗作"),1),Z("strong",null,Ht(ft(t).hoveredObject.name),1)],4)):rn("",!0)}}),CT={key:0,class:"loading-screen"},RT={class:"loading-text"},PT={class:"loading-slogan"},LT=Dn({__name:"LoadingScreen",setup(n){const t=In();return(e,i)=>(Wt(),Xo(qg,{name:"fade"},{default:od(()=>[ft(t).loading?(Wt(),Yt("div",CT,[i[0]||(i[0]=Z("div",{class:"loading-orb"},null,-1)),i[1]||(i[1]=Z("div",{class:"loading-title"},"诗云 · 中国诗歌宇宙",-1)),Z("div",RT,Ht(ft(t).loadingText||"正在展开三千年诗歌星图"),1),Z("div",PT,Ht(ft(t).corpusSlogan),1)])):rn("",!0)]),_:1}))}}),DT=Dn({__name:"App",setup(n){const t=In(),{qualityMode:e,fps:i}=Xd(t);return ga(()=>t.bootstrap()),(s,r)=>(Wt(),Yt("main",{class:De(["app-shell",{"performance-lite":ft(e)==="smooth"||ft(i)>0&&ft(i)<42}])},[xe(ab),xe(Kb),xe(wT),xe(AT),xe(LT)],2))}});T_(DT).use(C_()).mount("#app");
