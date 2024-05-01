(function(Et){typeof define=="function"&&define.amd?define(Et):Et()})(function(){"use strict";/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Et(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const W={},St=[],ge=()=>{},So=()=>!1,pn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),pr=e=>e.startsWith("onUpdate:"),re=Object.assign,hr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ao=Object.prototype.hasOwnProperty,H=(e,t)=>Ao.call(e,t),M=Array.isArray,At=e=>hn(e)==="[object Map]",Ii=e=>hn(e)==="[object Set]",U=e=>typeof e=="function",ee=e=>typeof e=="string",ot=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Ni=e=>(X(e)||U(e))&&U(e.then)&&U(e.catch),Ri=Object.prototype.toString,hn=e=>Ri.call(e),Oo=e=>hn(e).slice(8,-1),Mi=e=>hn(e)==="[object Object]",vr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dt=Et(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ko=/-(\w)/g,Le=vn(e=>e.replace(ko,(t,n)=>n?n.toUpperCase():"")),Co=/\B([A-Z])/g,Ee=vn(e=>e.replace(Co,"-$1").toLowerCase()),Di=vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),gr=vn(e=>e?`on${Di(e)}`:""),Xe=(e,t)=>!Object.is(e,t),br=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Li=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Po=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ui=e=>{const t=ee(e)?Number(e):NaN;return isNaN(t)?e:t};let Fi;const ji=()=>Fi||(Fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _r(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ee(r)?Ro(r):_r(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(ee(e)||X(e))return e}const To=/;(?![^(]*\))/g,Io=/:([^]+)/,No=/\/\*[^]*?\*\//g;function Ro(e){const t={};return e.replace(No,"").split(To).forEach(n=>{if(n){const r=n.split(Io);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function gn(e){let t="";if(ee(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=gn(e[n]);r&&(t+=r+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Mo=Et("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function Hi(e){return!!e||e===""}const qe=e=>ee(e)?e:e==null?"":M(e)||X(e)&&(e.toString===Ri||!U(e.toString))?JSON.stringify(e,Vi,2):String(e),Vi=(e,t)=>t&&t.__v_isRef?Vi(e,t.value):At(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[yr(r,a)+" =>"]=i,n),{})}:Ii(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>yr(n))}:ot(t)?yr(t):X(t)&&!M(t)&&!Mi(t)?String(t):t,yr=(e,t="")=>{var n;return ot(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Se;class Do{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Lo(e,t=Se){t&&t.active&&t.effects.push(e)}function Uo(){return Se}let lt;class xr{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Lo(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ue();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Fo(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Fe()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Je,n=lt;try{return Je=!0,lt=this,this._runnings++,zi(this),this.fn()}finally{$i(this),this._runnings--,lt=n,Je=t}}stop(){this.active&&(zi(this),$i(this),this.onStop&&this.onStop(),this.active=!1)}}function Fo(e){return e.value}function zi(e){e._trackId++,e._depsLength=0}function $i(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Bi(e.deps[t],e);e.deps.length=e._depsLength}}function Bi(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Je=!0,wr=0;const Ki=[];function Ue(){Ki.push(Je),Je=!1}function Fe(){const e=Ki.pop();Je=e===void 0?!0:e}function Er(){wr++}function Sr(){for(wr--;!wr&&Ar.length;)Ar.shift()()}function Wi(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Bi(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Ar=[];function Gi(e,t,n){Er();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ar.push(r.scheduler)))}Sr()}const Yi=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Or=new WeakMap,ft=Symbol(""),kr=Symbol("");function pe(e,t,n){if(Je&&lt){let r=Or.get(e);r||Or.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Yi(()=>r.delete(n))),Wi(lt,i)}}function je(e,t,n,r,i,a){const s=Or.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&M(e)){const l=Number(r);s.forEach((c,u)=>{(u==="length"||!ot(u)&&u>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":M(e)?vr(n)&&o.push(s.get("length")):(o.push(s.get(ft)),At(e)&&o.push(s.get(kr)));break;case"delete":M(e)||(o.push(s.get(ft)),At(e)&&o.push(s.get(kr)));break;case"set":At(e)&&o.push(s.get(ft));break}Er();for(const l of o)l&&Gi(l,4);Sr()}const jo=Et("__proto__,__v_isRef,__isVue"),Xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ot)),qi=Ho();function Ho(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let a=0,s=this.length;a<s;a++)pe(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ue(),Er();const r=V(this)[t].apply(this,n);return Sr(),Fe(),r}}),e}function Vo(e){ot(e)||(e=String(e));const t=V(this);return pe(t,"has",e),t.hasOwnProperty(e)}class Ji{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?oa:sa:a?aa:ia).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const s=M(t);if(!i){if(s&&H(qi,n))return Reflect.get(qi,n,r);if(n==="hasOwnProperty")return Vo}const o=Reflect.get(t,n,r);return(ot(n)?Xi.has(n):jo(n))||(i||pe(t,"get",n),a)?o:fe(o)?s&&vr(n)?o:o.value:X(o)?i?la(o):Pr(o):o}}class Zi extends Ji{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];if(!this._isShallow){const l=Ut(a);if(!kn(r)&&!Ut(r)&&(a=V(a),r=V(r)),!M(t)&&fe(a)&&!fe(r))return l?!1:(a.value=r,!0)}const s=M(t)&&vr(n)?Number(n)<t.length:H(t,n),o=Reflect.set(t,n,r,i);return t===V(i)&&(s?Xe(r,a)&&je(t,"set",n,r):je(t,"add",n,r)),o}deleteProperty(t,n){const r=H(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&je(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!ot(n)||!Xi.has(n))&&pe(t,"has",n),r}ownKeys(t){return pe(t,"iterate",M(t)?"length":ft),Reflect.ownKeys(t)}}class Qi extends Ji{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const zo=new Zi,$o=new Qi,Bo=new Zi(!0),Ko=new Qi(!0),Cr=e=>e,bn=e=>Reflect.getPrototypeOf(e);function _n(e,t,n=!1,r=!1){e=e.__v_raw;const i=V(e),a=V(t);n||(Xe(t,a)&&pe(i,"get",t),pe(i,"get",a));const{has:s}=bn(i),o=r?Cr:n?Tr:Ft;if(s.call(i,t))return o(e.get(t));if(s.call(i,a))return o(e.get(a));e!==i&&e.get(t)}function yn(e,t=!1){const n=this.__v_raw,r=V(n),i=V(e);return t||(Xe(e,i)&&pe(r,"has",e),pe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function xn(e,t=!1){return e=e.__v_raw,!t&&pe(V(e),"iterate",ft),Reflect.get(e,"size",e)}function ea(e){e=V(e);const t=V(this);return bn(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function ta(e,t){t=V(t);const n=V(this),{has:r,get:i}=bn(n);let a=r.call(n,e);a||(e=V(e),a=r.call(n,e));const s=i.call(n,e);return n.set(e,t),a?Xe(t,s)&&je(n,"set",e,t):je(n,"add",e,t),this}function na(e){const t=V(this),{has:n,get:r}=bn(t);let i=n.call(t,e);i||(e=V(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&je(t,"delete",e,void 0),a}function ra(){const e=V(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function wn(e,t){return function(r,i){const a=this,s=a.__v_raw,o=V(s),l=t?Cr:e?Tr:Ft;return!e&&pe(o,"iterate",ft),s.forEach((c,u)=>r.call(i,l(c),l(u),a))}}function En(e,t,n){return function(...r){const i=this.__v_raw,a=V(i),s=At(a),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=i[e](...r),u=n?Cr:t?Tr:Ft;return!t&&pe(a,"iterate",l?kr:ft),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:o?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Wo(){const e={get(a){return _n(this,a)},get size(){return xn(this)},has:yn,add:ea,set:ta,delete:na,clear:ra,forEach:wn(!1,!1)},t={get(a){return _n(this,a,!1,!0)},get size(){return xn(this)},has:yn,add:ea,set:ta,delete:na,clear:ra,forEach:wn(!1,!0)},n={get(a){return _n(this,a,!0)},get size(){return xn(this,!0)},has(a){return yn.call(this,a,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:wn(!0,!1)},r={get(a){return _n(this,a,!0,!0)},get size(){return xn(this,!0)},has(a){return yn.call(this,a,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:wn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=En(a,!1,!1),n[a]=En(a,!0,!1),t[a]=En(a,!1,!0),r[a]=En(a,!0,!0)}),[e,n,t,r]}const[Go,Yo,Xo,qo]=Wo();function Sn(e,t){const n=t?e?qo:Xo:e?Yo:Go;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(H(n,i)&&i in r?n:r,i,a)}const Jo={get:Sn(!1,!1)},Zo={get:Sn(!1,!0)},Qo={get:Sn(!0,!1)},el={get:Sn(!0,!0)},ia=new WeakMap,aa=new WeakMap,sa=new WeakMap,oa=new WeakMap;function tl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nl(e){return e.__v_skip||!Object.isExtensible(e)?0:tl(Oo(e))}function Pr(e){return Ut(e)?e:On(e,!1,zo,Jo,ia)}function rl(e){return On(e,!1,Bo,Zo,aa)}function la(e){return On(e,!0,$o,Qo,sa)}function An(e){return On(e,!0,Ko,el,oa)}function On(e,t,n,r,i){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const s=nl(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return i.set(e,o),o}function Lt(e){return Ut(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function kn(e){return!!(e&&e.__v_isShallow)}function fa(e){return e?!!e.__v_raw:!1}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function il(e){return Object.isExtensible(e)&&Li(e,"__v_skip",!0),e}const Ft=e=>X(e)?Pr(e):e,Tr=e=>X(e)?la(e):e;class ca{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new xr(()=>t(this._value),()=>Cn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=V(this);return(!t._cacheable||t.effect.dirty)&&Xe(t._value,t._value=t.effect.run())&&Cn(t,4),ua(t),t.effect._dirtyLevel>=2&&Cn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function al(e,t,n=!1){let r,i;const a=U(e);return a?(r=e,i=ge):(r=e.get,i=e.set),new ca(r,i,a||!i,n)}function ua(e){var t;Je&&lt&&(e=V(e),Wi(lt,(t=e.dep)!=null?t:e.dep=Yi(()=>e.dep=void 0,e instanceof ca?e:void 0)))}function Cn(e,t=4,n){e=V(e);const r=e.dep;r&&Gi(r,t)}function fe(e){return!!(e&&e.__v_isRef===!0)}function jt(e){return sl(e,!1)}function sl(e,t){return fe(e)?e:new ol(e,t)}class ol{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:Ft(t)}get value(){return ua(this),this._value}set value(t){const n=this.__v_isShallow||kn(t)||Ut(t);t=n?t:V(t),Xe(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ft(t),Cn(this,4))}}function ct(e){return fe(e)?e.value:e}const ll={get:(e,t,n)=>ct(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function da(e){return Lt(e)?e:new Proxy(e,ll)}var Qe={NVM_INC:"/Users/cm/.nvm/versions/node/v19.7.0/include/node",MANPATH:"/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/Users/cm/.nvm/versions/node/v19.7.0/bin/node",INIT_CWD:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_CD_FLAGS:"-q",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_config_metrics_registry:"https://registry.npmjs.org/",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/",npm_config_global_prefix:"/Users/cm/.nvm/versions/node/v19.7.0",TERM_PROGRAM_VERSION:"1.88.1",ZDOTDIR:"/Users/cm",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_DIR:"/Users/cm/.nvm",USER:"cm",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/Users/cm/.nvm/versions/node/v19.7.0/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/bin/npm-cli.js",npm_config_fetch_retry_mintimeout:"20000",PATH:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin",npm_package_json:"/Users/cm/Documents/workspace/transcribe/frontend/package.json",npm_config_userconfig:"/Users/cm/.npmrc",npm_config_init_module:"/Users/cm/.npm-init.js",USER_ZDOTDIR:"/Users/cm",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/cm/Documents/workspace/transcribe/frontend",npm_lifecycle_event:"build:components",EDITOR:"vi",npm_package_name:"frontend",LANG:"en_US.UTF-8",npm_config_npm_version:"9.8.1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",XPC_FLAGS:"0x0",npm_config_node_gyp:"/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.1.0",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/cm",npm_config_fetch_retry_maxtimeout:"120000",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/cm/.npm",LOGNAME:"cm",npm_lifecycle_script:"vue-tsc --noEmit && vite build --config vite.comp.config.js",VSCODE_GIT_IPC_HANDLE:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock",NVM_BIN:"/Users/cm/.nvm/versions/node/v19.7.0/bin",npm_config_user_agent:"npm/9.8.1 node/v19.7.0 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/Users/cm/.nvm/versions/node/v19.7.0/bin/node",npm_config_prefix:"/Users/cm/.nvm/versions/node/v19.7.0",COLORTERM:"truecolor",_:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite",NODE_ENV:"production"};const Ht=[];function fl(e,...t){Ue();const n=Ht.length?Ht[Ht.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=cl();if(r)He(r,n,11,[e+t.map(a=>{var s,o;return(o=(s=a.toString)==null?void 0:s.call(a))!=null?o:JSON.stringify(a)}).join(""),n&&n.proxy,i.map(({vnode:a})=>`at <${ns(n,a.type)}>`).join(`
`),i]);else{const a=[`[Vue warn]: ${e}`,...t];i.length&&a.push(`
`,...ul(i)),console.warn(...a)}Fe()}function cl(){let e=Ht[Ht.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function ul(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...dl(n))}),t}function dl({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,i=` at <${ns(e.component,e.type,r)}`,a=">"+n;return e.props?[i,...ml(e.props),a]:[i+a]}function ml(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...ma(r,e[r]))}),n.length>3&&t.push(" ..."),t}function ma(e,t,n){return ee(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:fe(t)?(t=ma(e,V(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):U(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=V(t),n?t:[`${e}=`,t])}function He(e,t,n,r){try{return r?e(...r):e()}catch(i){Pn(i,t,n)}}function Ae(e,t,n,r){if(U(e)){const i=He(e,t,n,r);return i&&Ni(i)&&i.catch(a=>{Pn(a,t,n)}),i}if(M(e)){const i=[];for(let a=0;a<e.length;a++)i.push(Ae(e[a],t,n,r));return i}}function Pn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const s=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,s,o)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){Ue(),He(l,null,10,[e,s,o]),Fe();return}}pl(e,n,i,r)}function pl(e,t,n,r=!0){console.error(e)}let Vt=!1,Ir=!1;const oe=[];let Pe=0;const Ot=[];let et=null,ut=0;const pa=Promise.resolve();let Nr=null;function ha(e){const t=Nr||pa;return e?t.then(this?e.bind(this):e):t}function hl(e){let t=Pe+1,n=oe.length;for(;t<n;){const r=t+n>>>1,i=oe[r],a=zt(i);a<e||a===e&&i.pre?t=r+1:n=r}return t}function Rr(e){(!oe.length||!oe.includes(e,Vt&&e.allowRecurse?Pe+1:Pe))&&(e.id==null?oe.push(e):oe.splice(hl(e.id),0,e),va())}function va(){!Vt&&!Ir&&(Ir=!0,Nr=pa.then(_a))}function vl(e){const t=oe.indexOf(e);t>Pe&&oe.splice(t,1)}function gl(e){M(e)?Ot.push(...e):(!et||!et.includes(e,e.allowRecurse?ut+1:ut))&&Ot.push(e),va()}function ga(e,t,n=Vt?Pe+1:0){for(;n<oe.length;n++){const r=oe[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;oe.splice(n,1),n--,r()}}}function ba(e){if(Ot.length){const t=[...new Set(Ot)].sort((n,r)=>zt(n)-zt(r));if(Ot.length=0,et){et.push(...t);return}for(et=t,ut=0;ut<et.length;ut++)et[ut]();et=null,ut=0}}const zt=e=>e.id==null?1/0:e.id,bl=(e,t)=>{const n=zt(e)-zt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function _a(e){Ir=!1,Vt=!0,oe.sort(bl);const t=ge;try{for(Pe=0;Pe<oe.length;Pe++){const n=oe[Pe];n&&n.active!==!1&&(Qe.NODE_ENV!=="production"&&t(n),He(n,null,14))}}finally{Pe=0,oe.length=0,ba(),Vt=!1,Nr=null,(oe.length||Ot.length)&&_a()}}function _l(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let i=n;const a=t.startsWith("update:"),s=a&&t.slice(7);if(s&&s in r){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:h}=r[u]||W;h&&(i=n.map(x=>ee(x)?x.trim():x)),m&&(i=n.map(Po))}let o,l=r[o=gr(t)]||r[o=gr(Le(t))];!l&&a&&(l=r[o=gr(Ee(t))]),l&&Ae(l,e,6,i);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ae(c,e,6,i)}}function ya(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let s={},o=!1;if(!U(e)){const l=c=>{const u=ya(c,t,!0);u&&(o=!0,re(s,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!o?(X(e)&&r.set(e,null),null):(M(a)?a.forEach(l=>s[l]=null):re(s,a),X(e)&&r.set(e,s),s)}function Tn(e,t){return!e||!pn(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,Ee(t))||H(e,t))}let be=null,xa=null;function In(e){const t=be;return be=e,xa=e&&e.type.__scopeId||null,t}function yl(e,t=be,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Ya(-1);const a=In(t);let s;try{s=e(...i)}finally{In(a),r._d&&Ya(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function xd(){}function Mr(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:o,emit:l,render:c,renderCache:u,props:m,data:h,setupState:x,ctx:P,inheritAttrs:T}=e,$=In(e);let E,A;try{if(n.shapeFlag&4){const F=i||r,z=Qe.NODE_ENV!=="production"&&x.__isScriptSetup?new Proxy(F,{get(L,J,de){return fl(`Property '${String(J)}' was accessed via 'this'. Avoid using 'this' in templates.`),Reflect.get(L,J,de)}}):F;E=Ie(c.call(z,F,u,Qe.NODE_ENV!=="production"?An(m):m,x,h,P)),A=o}else{const F=t;Qe.NODE_ENV,E=Ie(F.length>1?F(Qe.NODE_ENV!=="production"?An(m):m,Qe.NODE_ENV!=="production"?{get attrs(){return An(o)},slots:s,emit:l}:{attrs:o,slots:s,emit:l}):F(Qe.NODE_ENV!=="production"?An(m):m,null)),A=t.props?o:xl(o)}}catch(F){Wt.length=0,Pn(F,e,1),E=le(ht)}let I=E;if(A&&T!==!1){const F=Object.keys(A),{shapeFlag:z}=I;F.length&&z&7&&(a&&F.some(pr)&&(A=wl(A,a)),I=kt(I,A,!1,!0))}return n.dirs&&(I=kt(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),E=I,In($),E}const xl=e=>{let t;for(const n in e)(n==="class"||n==="style"||pn(n))&&((t||(t={}))[n]=e[n]);return t},wl=(e,t)=>{const n={};for(const r in e)(!pr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function El(e,t,n){const{props:r,children:i,component:a}=e,{props:s,children:o,patchFlag:l}=t,c=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wa(r,s,c):!!s;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(s[h]!==r[h]&&!Tn(c,h))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?wa(r,s,c):!0:!!s;return!1}function wa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!Tn(n,a))return!0}return!1}function Sl({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Al=Symbol.for("v-ndc"),Ol=e=>e.__isSuspense;function kl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):gl(e)}const Cl=Symbol.for("v-scx"),Pl=()=>Un(Cl),Nn={};function Rn(e,t,n){return Ea(e,t,n)}function Ea(e,t,{immediate:n,deep:r,flush:i,once:a,onTrack:s,onTrigger:o}=W){if(t&&a){const L=t;t=(...J)=>{L(...J),z()}}const l=se,c=L=>r===!0?L:dt(L,r===!1?1:void 0);let u,m=!1,h=!1;if(fe(e)?(u=()=>e.value,m=kn(e)):Lt(e)?(u=()=>c(e),m=!0):M(e)?(h=!0,m=e.some(L=>Lt(L)||kn(L)),u=()=>e.map(L=>{if(fe(L))return L.value;if(Lt(L))return c(L);if(U(L))return He(L,l,2)})):U(e)?t?u=()=>He(e,l,2):u=()=>(x&&x(),Ae(e,l,3,[P])):u=ge,t&&r){const L=u;u=()=>dt(L())}let x,P=L=>{x=I.onStop=()=>{He(L,l,4),x=I.onStop=void 0}},T;if(Vn)if(P=ge,t?n&&Ae(t,l,3,[u(),h?[]:void 0,P]):u(),i==="sync"){const L=Pl();T=L.__watcherHandles||(L.__watcherHandles=[])}else return ge;let $=h?new Array(e.length).fill(Nn):Nn;const E=()=>{if(!(!I.active||!I.dirty))if(t){const L=I.run();(r||m||(h?L.some((J,de)=>Xe(J,$[de])):Xe(L,$)))&&(x&&x(),Ae(t,l,3,[L,$===Nn?void 0:h&&$[0]===Nn?[]:$,P]),$=L)}else I.run()};E.allowRecurse=!!t;let A;i==="sync"?A=E:i==="post"?A=()=>he(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),A=()=>Rr(E));const I=new xr(u,ge,A),F=Uo(),z=()=>{I.stop(),F&&hr(F.effects,I)};return t?n?E():$=I.run():i==="post"?he(I.run.bind(I),l&&l.suspense):I.run(),T&&T.push(z),z}function Tl(e,t,n){const r=this.proxy,i=ee(e)?e.includes(".")?Sa(r,e):()=>r[e]:e.bind(r,r);let a;U(t)?a=t:(a=t.handler,n=t);const s=Jt(this),o=Ea(i,a.bind(r),n);return s(),o}function Sa(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function dt(e,t=1/0,n){if(t<=0||!X(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,fe(e))dt(e.value,t,n);else if(M(e))for(let r=0;r<e.length;r++)dt(e[r],t,n);else if(Ii(e)||At(e))e.forEach(r=>{dt(r,t,n)});else if(Mi(e))for(const r in e)dt(e[r],t,n);return e}function Il(e,t){if(be===null)return e;const n=zn(be)||be.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,s,o,l=W]=t[i];a&&(U(a)&&(a={mounted:a,updated:a}),a.deep&&dt(s),r.push({dir:a,instance:n,value:s,oldValue:void 0,arg:o,modifiers:l}))}return e}function mt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let s=0;s<i.length;s++){const o=i[s];a&&(o.oldValue=a[s].value);let l=o.dir[r];l&&(Ue(),Ae(l,n,8,[e.el,o,e,t]),Fe())}}/*! #__NO_SIDE_EFFECTS__ */function Dr(e,t){return U(e)?re({name:e.name},t,{setup:e}):e}const Mn=e=>!!e.type.__asyncLoader,Aa=e=>e.type.__isKeepAlive;function Nl(e,t){Oa(e,"a",t)}function Rl(e,t){Oa(e,"da",t)}function Oa(e,t,n=se){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Dn(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Aa(i.parent.vnode)&&Ml(r,t,n,i),i=i.parent}}function Ml(e,t,n,r){const i=Dn(t,e,r,!0);ka(()=>{hr(r[t],i)},n)}function Dn(e,t,n=se,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Ue();const o=Jt(n),l=Ae(t,n,e,s);return o(),Fe(),l});return r?i.unshift(a):i.push(a),a}}const Ve=e=>(t,n=se)=>(!Vn||e==="sp")&&Dn(e,(...r)=>t(...r),n),Dl=Ve("bm"),Ll=Ve("m"),Ul=Ve("bu"),Fl=Ve("u"),jl=Ve("bum"),ka=Ve("um"),Hl=Ve("sp"),Vl=Ve("rtg"),zl=Ve("rtc");function $l(e,t=se){Dn("ec",e,t)}function Lr(e,t,n,r){let i;const a=n;if(M(e)||ee(e)){i=new Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=t(e[s],s,void 0,a)}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,a)}else if(X(e))if(e[Symbol.iterator])i=Array.from(e,(s,o)=>t(s,o,void 0,a));else{const s=Object.keys(e);i=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];i[o]=t(e[c],c,o,a)}}else i=[];return i}const Ur=e=>e?Za(e)?zn(e)||e.proxy:Ur(e.parent):null,$t=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ur(e.parent),$root:e=>Ur(e.root),$emit:e=>e.emit,$options:e=>Hr(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Rr(e.update)}),$nextTick:e=>e.n||(e.n=ha.bind(e.proxy)),$watch:e=>Tl.bind(e)}),Fr=(e,t)=>e!==W&&!e.__isScriptSetup&&H(e,t),Bl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:a,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const x=s[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Fr(r,t))return s[t]=1,r[t];if(i!==W&&H(i,t))return s[t]=2,i[t];if((c=e.propsOptions[0])&&H(c,t))return s[t]=3,a[t];if(n!==W&&H(n,t))return s[t]=4,n[t];jr&&(s[t]=0)}}const u=$t[t];let m,h;if(u)return t==="$attrs"&&pe(e.attrs,"get",""),u(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==W&&H(n,t))return s[t]=4,n[t];if(h=l.config.globalProperties,H(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Fr(i,t)?(i[t]=n,!0):r!==W&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},s){let o;return!!n[s]||e!==W&&H(e,s)||Fr(t,s)||(o=a[0])&&H(o,s)||H(r,s)||H($t,s)||H(i.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ca(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let jr=!0;function Kl(e){const t=Hr(e),n=e.proxy,r=e.ctx;jr=!1,t.beforeCreate&&Pa(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:s,watch:o,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:x,updated:P,activated:T,deactivated:$,beforeDestroy:E,beforeUnmount:A,destroyed:I,unmounted:F,render:z,renderTracked:L,renderTriggered:J,errorCaptured:de,serverPrefetch:we,expose:Ge,inheritAttrs:un,components:cr,directives:ur,filters:Pi}=t;if(c&&Wl(c,r,null),s)for(const Z in s){const K=s[Z];U(K)&&(r[Z]=K.bind(n))}if(i){const Z=i.call(n,n);X(Z)&&(e.data=Pr(Z))}if(jr=!0,a)for(const Z in a){const K=a[Z],xt=U(K)?K.bind(n,n):U(K.get)?K.get.bind(n,n):ge,dr=!U(K)&&U(K.set)?K.set.bind(n):ge,wt=vt({get:xt,set:dr});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>wt.value,set:Me=>wt.value=Me})}if(o)for(const Z in o)Ta(o[Z],r,n,Z);if(l){const Z=U(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{Zl(K,Z[K])})}u&&Pa(u,e,"c");function me(Z,K){M(K)?K.forEach(xt=>Z(xt.bind(n))):K&&Z(K.bind(n))}if(me(Dl,m),me(Ll,h),me(Ul,x),me(Fl,P),me(Nl,T),me(Rl,$),me($l,de),me(zl,L),me(Vl,J),me(jl,A),me(ka,F),me(Hl,we),M(Ge))if(Ge.length){const Z=e.exposed||(e.exposed={});Ge.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:xt=>n[K]=xt})})}else e.exposed||(e.exposed={});z&&e.render===ge&&(e.render=z),un!=null&&(e.inheritAttrs=un),cr&&(e.components=cr),ur&&(e.directives=ur)}function Wl(e,t,n=ge){M(e)&&(e=Vr(e));for(const r in e){const i=e[r];let a;X(i)?"default"in i?a=Un(i.from||r,i.default,!0):a=Un(i.from||r):a=Un(i),fe(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):t[r]=a}}function Pa(e,t,n){Ae(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ta(e,t,n,r){const i=r.includes(".")?Sa(n,r):()=>n[r];if(ee(e)){const a=t[e];U(a)&&Rn(i,a)}else if(U(e))Rn(i,e.bind(n));else if(X(e))if(M(e))e.forEach(a=>Ta(a,t,n,r));else{const a=U(e.handler)?e.handler.bind(n):t[e.handler];U(a)&&Rn(i,a,e)}}function Hr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,o=a.get(t);let l;return o?l=o:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Ln(l,c,s,!0)),Ln(l,t,s)),X(t)&&a.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Ln(e,a,n,!0),i&&i.forEach(s=>Ln(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Gl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Gl={data:Ia,props:Na,emits:Na,methods:Bt,computed:Bt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:Bt,directives:Bt,watch:Xl,provide:Ia,inject:Yl};function Ia(e,t){return t?e?function(){return re(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Yl(e,t){return Bt(Vr(e),Vr(t))}function Vr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Bt(e,t){return e?re(Object.create(null),e,t):t}function Na(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:re(Object.create(null),Ca(e),Ca(t??{})):t}function Xl(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=ce(e[r],t[r]);return n}function Ra(){return{app:null,config:{isNativeTag:So,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ql=0;function Jl(e,t){return function(r,i=null){U(r)||(r=re({},r)),i!=null&&!X(i)&&(i=null);const a=Ra(),s=new WeakSet;let o=!1;const l=a.app={_uid:ql++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Of,get config(){return a.config},set config(c){},use(c,...u){return s.has(c)||(c&&U(c.install)?(s.add(c),c.install(l,...u)):U(c)&&(s.add(c),c(l,...u))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,u){return u?(a.components[c]=u,l):a.components[c]},directive(c,u){return u?(a.directives[c]=u,l):a.directives[c]},mount(c,u,m){if(!o){const h=le(r,i);return h.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),u&&t?t(h,c):e(h,c,m),o=!0,l._container=c,c.__vue_app__=l,zn(h.component)||h.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return a.provides[c]=u,l},runWithContext(c){const u=Kt;Kt=l;try{return c()}finally{Kt=u}}};return l}}let Kt=null;function Zl(e,t){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[e]=t}}function Un(e,t,n=!1){const r=se||be;if(r||Kt){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Kt._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&U(t)?t.call(r&&r.proxy):t}}const Ma={},Da=()=>Object.create(Ma),La=e=>Object.getPrototypeOf(e)===Ma;function Ql(e,t,n,r=!1){const i={},a=Da();e.propsDefaults=Object.create(null),Ua(e,t,i,a);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=r?i:rl(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ef(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:s}}=e,o=V(i),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(Tn(e.emitsOptions,h))continue;const x=t[h];if(l)if(H(a,h))x!==a[h]&&(a[h]=x,c=!0);else{const P=Le(h);i[P]=zr(l,o,P,x,e,!1)}else x!==a[h]&&(a[h]=x,c=!0)}}}else{Ua(e,t,i,a)&&(c=!0);let u;for(const m in o)(!t||!H(t,m)&&((u=Ee(m))===m||!H(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=zr(l,o,m,void 0,e,!0)):delete i[m]);if(a!==o)for(const m in a)(!t||!H(t,m))&&(delete a[m],c=!0)}c&&je(e.attrs,"set","")}function Ua(e,t,n,r){const[i,a]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(Dt(l))continue;const c=t[l];let u;i&&H(i,u=Le(l))?!a||!a.includes(u)?n[u]=c:(o||(o={}))[u]=c:Tn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(a){const l=V(n),c=o||W;for(let u=0;u<a.length;u++){const m=a[u];n[m]=zr(i,l,m,c[m],e,!H(c,m))}}return s}function zr(e,t,n,r,i,a){const s=e[n];if(s!=null){const o=H(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&U(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=Jt(i);r=c[n]=l.call(null,t),u()}}else r=l}s[0]&&(a&&!o?r=!1:s[1]&&(r===""||r===Ee(n))&&(r=!0))}return r}function Fa(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,s={},o=[];let l=!1;if(!U(e)){const u=m=>{l=!0;const[h,x]=Fa(m,t,!0);re(s,h),x&&o.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return X(e)&&r.set(e,St),St;if(M(a))for(let u=0;u<a.length;u++){const m=Le(a[u]);ja(m)&&(s[m]=W)}else if(a)for(const u in a){const m=Le(u);if(ja(m)){const h=a[u],x=s[m]=M(h)||U(h)?{type:h}:re({},h);if(x){const P=za(Boolean,x.type),T=za(String,x.type);x[0]=P>-1,x[1]=T<0||P<T,(P>-1||H(x,"default"))&&o.push(m)}}}const c=[s,o];return X(e)&&r.set(e,c),c}function ja(e){return e[0]!=="$"&&!Dt(e)}function Ha(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Va(e,t){return Ha(e)===Ha(t)}function za(e,t){return M(t)?t.findIndex(n=>Va(n,e)):U(t)&&Va(t,e)?0:-1}const $a=e=>e[0]==="_"||e==="$stable",$r=e=>M(e)?e.map(Ie):[Ie(e)],tf=(e,t,n)=>{if(t._n)return t;const r=yl((...i)=>(Qe.NODE_ENV!=="production"&&se&&(!n||(n.root,se.root)),$r(t(...i))),n);return r._c=!1,r},Ba=(e,t,n)=>{const r=e._ctx;for(const i in e){if($a(i))continue;const a=e[i];if(U(a))t[i]=tf(i,a,r);else if(a!=null){const s=$r(a);t[i]=()=>s}}},Ka=(e,t)=>{const n=$r(t);e.slots.default=()=>n},nf=(e,t)=>{const n=e.slots=Da();if(e.vnode.shapeFlag&32){const r=t._;r?(re(n,t),Li(n,"_",r,!0)):Ba(t,n)}else t&&Ka(e,t)},rf=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,s=W;if(r.shapeFlag&32){const o=t._;o?n&&o===1?a=!1:(re(i,t),!n&&o===1&&delete i._):(a=!t.$stable,Ba(t,i)),s=t}else t&&(Ka(e,t),s={default:1});if(a)for(const o in i)!$a(o)&&s[o]==null&&delete i[o]};function Br(e,t,n,r,i=!1){if(M(e)){e.forEach((h,x)=>Br(h,t&&(M(t)?t[x]:t),n,r,i));return}if(Mn(r)&&!i)return;const a=r.shapeFlag&4?zn(r.component)||r.component.proxy:r.el,s=i?null:a,{i:o,r:l}=e,c=t&&t.r,u=o.refs===W?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(ee(c)?(u[c]=null,H(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),U(l))He(l,o,12,[s,u]);else{const h=ee(l),x=fe(l);if(h||x){const P=()=>{if(e.f){const T=h?H(m,l)?m[l]:u[l]:l.value;i?M(T)&&hr(T,a):M(T)?T.includes(a)||T.push(a):h?(u[l]=[a],H(m,l)&&(m[l]=u[l])):(l.value=[a],e.k&&(u[e.k]=l.value))}else h?(u[l]=s,H(m,l)&&(m[l]=s)):x&&(l.value=s,e.k&&(u[e.k]=s))};s?(P.id=-1,he(P,n)):P()}}}const he=kl;function af(e){return sf(e)}function sf(e,t){const n=ji();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:s,createText:o,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:x=ge,insertStaticContent:P}=e,T=(f,d,p,v=null,g=null,y=null,S=void 0,_=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!Xt(f,d)&&(v=mr(f),Me(f,g,y,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:k,shapeFlag:R}=d;switch(b){case Fn:$(f,d,p,v);break;case ht:E(f,d,p,v);break;case Wr:f==null&&A(d,p,v,S);break;case xe:cr(f,d,p,v,g,y,S,_,w);break;default:R&1?z(f,d,p,v,g,y,S,_,w):R&6?ur(f,d,p,v,g,y,S,_,w):(R&64||R&128)&&b.process(f,d,p,v,g,y,S,_,w,dn)}k!=null&&g&&Br(k,f&&f.ref,y,d||f,!d)},$=(f,d,p,v)=>{if(f==null)r(d.el=o(d.children),p,v);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},E=(f,d,p,v)=>{f==null?r(d.el=l(d.children||""),p,v):d.el=f.el},A=(f,d,p,v)=>{[f.el,f.anchor]=P(f.children,d,p,v,f.el,f.anchor)},I=({el:f,anchor:d},p,v)=>{let g;for(;f&&f!==d;)g=h(f),r(f,p,v),f=g;r(d,p,v)},F=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),i(f),f=p;i(d)},z=(f,d,p,v,g,y,S,_,w)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),f==null?L(d,p,v,g,y,S,_,w):we(f,d,g,y,S,_,w)},L=(f,d,p,v,g,y,S,_)=>{let w,b;const{props:k,shapeFlag:R,transition:N,dirs:D}=f;if(w=f.el=s(f.type,y,k&&k.is,k),R&8?u(w,f.children):R&16&&de(f.children,w,null,v,g,Kr(f,y),S,_),D&&mt(f,null,v,"created"),J(w,f,f.scopeId,S,v),k){for(const B in k)B!=="value"&&!Dt(B)&&a(w,B,null,k[B],y,f.children,v,g,Ye);"value"in k&&a(w,"value",null,k.value,y),(b=k.onVnodeBeforeMount)&&Ne(b,v,f)}D&&mt(f,null,v,"beforeMount");const j=of(g,N);j&&N.beforeEnter(w),r(w,d,p),((b=k&&k.onVnodeMounted)||j||D)&&he(()=>{b&&Ne(b,v,f),j&&N.enter(w),D&&mt(f,null,v,"mounted")},g)},J=(f,d,p,v,g)=>{if(p&&x(f,p),v)for(let y=0;y<v.length;y++)x(f,v[y]);if(g){let y=g.subTree;if(d===y){const S=g.vnode;J(f,S,S.scopeId,S.slotScopeIds,g.parent)}}},de=(f,d,p,v,g,y,S,_,w=0)=>{for(let b=w;b<f.length;b++){const k=f[b]=_?tt(f[b]):Ie(f[b]);T(null,k,d,p,v,g,y,S,_)}},we=(f,d,p,v,g,y,S)=>{const _=d.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:k}=d;w|=f.patchFlag&16;const R=f.props||W,N=d.props||W;let D;if(p&&pt(p,!1),(D=N.onVnodeBeforeUpdate)&&Ne(D,p,d,f),k&&mt(d,f,p,"beforeUpdate"),p&&pt(p,!0),b?Ge(f.dynamicChildren,b,_,p,v,Kr(d,g),y):S||K(f,d,_,null,p,v,Kr(d,g),y,!1),w>0){if(w&16)un(_,d,R,N,p,v,g);else if(w&2&&R.class!==N.class&&a(_,"class",null,N.class,g),w&4&&a(_,"style",R.style,N.style,g),w&8){const j=d.dynamicProps;for(let B=0;B<j.length;B++){const q=j[B],ae=R[q],Ce=N[q];(Ce!==ae||q==="value")&&a(_,q,ae,Ce,g,f.children,p,v,Ye)}}w&1&&f.children!==d.children&&u(_,d.children)}else!S&&b==null&&un(_,d,R,N,p,v,g);((D=N.onVnodeUpdated)||k)&&he(()=>{D&&Ne(D,p,d,f),k&&mt(d,f,p,"updated")},v)},Ge=(f,d,p,v,g,y,S)=>{for(let _=0;_<d.length;_++){const w=f[_],b=d[_],k=w.el&&(w.type===xe||!Xt(w,b)||w.shapeFlag&70)?m(w.el):p;T(w,b,k,null,v,g,y,S,!0)}},un=(f,d,p,v,g,y,S)=>{if(p!==v){if(p!==W)for(const _ in p)!Dt(_)&&!(_ in v)&&a(f,_,p[_],null,S,d.children,g,y,Ye);for(const _ in v){if(Dt(_))continue;const w=v[_],b=p[_];w!==b&&_!=="value"&&a(f,_,b,w,S,d.children,g,y,Ye)}"value"in v&&a(f,"value",p.value,v.value,S)}},cr=(f,d,p,v,g,y,S,_,w)=>{const b=d.el=f?f.el:o(""),k=d.anchor=f?f.anchor:o("");let{patchFlag:R,dynamicChildren:N,slotScopeIds:D}=d;D&&(_=_?_.concat(D):D),f==null?(r(b,p,v),r(k,p,v),de(d.children||[],p,k,g,y,S,_,w)):R>0&&R&64&&N&&f.dynamicChildren?(Ge(f.dynamicChildren,N,p,g,y,S,_),(d.key!=null||g&&d===g.subTree)&&Wa(f,d,!0)):K(f,d,p,k,g,y,S,_,w)},ur=(f,d,p,v,g,y,S,_,w)=>{d.slotScopeIds=_,f==null?d.shapeFlag&512?g.ctx.activate(d,p,v,S,w):Pi(d,p,v,g,y,S,w):vo(f,d,w)},Pi=(f,d,p,v,g,y,S)=>{const _=f.component=vf(f,v,g);if(Aa(f)&&(_.ctx.renderer=dn),gf(_),_.asyncDep){if(g&&g.registerDep(_,me),!f.el){const w=_.subTree=le(ht);E(null,w,d,p)}}else me(_,f,d,p,g,y,S)},vo=(f,d,p)=>{const v=d.component=f.component;if(El(f,d,p))if(v.asyncDep&&!v.asyncResolved){Z(v,d,p);return}else v.next=d,vl(v.update),v.effect.dirty=!0,v.update();else d.el=f.el,v.vnode=d},me=(f,d,p,v,g,y,S)=>{const _=()=>{if(f.isMounted){let{next:k,bu:R,u:N,parent:D,vnode:j}=f;{const Mt=Ga(f);if(Mt){k&&(k.el=j.el,Z(f,k,S)),Mt.asyncDep.then(()=>{f.isUnmounted||_()});return}}let B=k,q;pt(f,!1),k?(k.el=j.el,Z(f,k,S)):k=j,R&&br(R),(q=k.props&&k.props.onVnodeBeforeUpdate)&&Ne(q,D,k,j),pt(f,!0);const ae=Mr(f),Ce=f.subTree;f.subTree=ae,T(Ce,ae,m(Ce.el),mr(Ce),f,g,y),k.el=ae.el,B===null&&Sl(f,ae.el),N&&he(N,g),(q=k.props&&k.props.onVnodeUpdated)&&he(()=>Ne(q,D,k,j),g)}else{let k;const{el:R,props:N}=d,{bm:D,m:j,parent:B}=f,q=Mn(d);if(pt(f,!1),D&&br(D),!q&&(k=N&&N.onVnodeBeforeMount)&&Ne(k,B,d),pt(f,!0),R&&yo){const ae=()=>{f.subTree=Mr(f),yo(R,f.subTree,f,g,null)};q?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ae()):ae()}else{const ae=f.subTree=Mr(f);T(null,ae,p,v,f,g,y),d.el=ae.el}if(j&&he(j,g),!q&&(k=N&&N.onVnodeMounted)){const ae=d;he(()=>Ne(k,B,ae),g)}(d.shapeFlag&256||B&&Mn(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&he(f.a,g),f.isMounted=!0,d=p=v=null}},w=f.effect=new xr(_,ge,()=>Rr(b),f.scope),b=f.update=()=>{w.dirty&&w.run()};b.id=f.uid,pt(f,!0),b()},Z=(f,d,p)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,ef(f,d.props,v,p),rf(f,d.children,p),Ue(),ga(f),Fe()},K=(f,d,p,v,g,y,S,_,w=!1)=>{const b=f&&f.children,k=f?f.shapeFlag:0,R=d.children,{patchFlag:N,shapeFlag:D}=d;if(N>0){if(N&128){dr(b,R,p,v,g,y,S,_,w);return}else if(N&256){xt(b,R,p,v,g,y,S,_,w);return}}D&8?(k&16&&Ye(b,g,y),R!==b&&u(p,R)):k&16?D&16?dr(b,R,p,v,g,y,S,_,w):Ye(b,g,y,!0):(k&8&&u(p,""),D&16&&de(R,p,v,g,y,S,_,w))},xt=(f,d,p,v,g,y,S,_,w)=>{f=f||St,d=d||St;const b=f.length,k=d.length,R=Math.min(b,k);let N;for(N=0;N<R;N++){const D=d[N]=w?tt(d[N]):Ie(d[N]);T(f[N],D,p,null,g,y,S,_,w)}b>k?Ye(f,g,y,!0,!1,R):de(d,p,v,g,y,S,_,w,R)},dr=(f,d,p,v,g,y,S,_,w)=>{let b=0;const k=d.length;let R=f.length-1,N=k-1;for(;b<=R&&b<=N;){const D=f[b],j=d[b]=w?tt(d[b]):Ie(d[b]);if(Xt(D,j))T(D,j,p,null,g,y,S,_,w);else break;b++}for(;b<=R&&b<=N;){const D=f[R],j=d[N]=w?tt(d[N]):Ie(d[N]);if(Xt(D,j))T(D,j,p,null,g,y,S,_,w);else break;R--,N--}if(b>R){if(b<=N){const D=N+1,j=D<k?d[D].el:v;for(;b<=N;)T(null,d[b]=w?tt(d[b]):Ie(d[b]),p,j,g,y,S,_,w),b++}}else if(b>N)for(;b<=R;)Me(f[b],g,y,!0),b++;else{const D=b,j=b,B=new Map;for(b=j;b<=N;b++){const ye=d[b]=w?tt(d[b]):Ie(d[b]);ye.key!=null&&B.set(ye.key,b)}let q,ae=0;const Ce=N-j+1;let Mt=!1,xo=0;const mn=new Array(Ce);for(b=0;b<Ce;b++)mn[b]=0;for(b=D;b<=R;b++){const ye=f[b];if(ae>=Ce){Me(ye,g,y,!0);continue}let De;if(ye.key!=null)De=B.get(ye.key);else for(q=j;q<=N;q++)if(mn[q-j]===0&&Xt(ye,d[q])){De=q;break}De===void 0?Me(ye,g,y,!0):(mn[De-j]=b+1,De>=xo?xo=De:Mt=!0,T(ye,d[De],p,null,g,y,S,_,w),ae++)}const wo=Mt?lf(mn):St;for(q=wo.length-1,b=Ce-1;b>=0;b--){const ye=j+b,De=d[ye],Eo=ye+1<k?d[ye+1].el:v;mn[b]===0?T(null,De,p,Eo,g,y,S,_,w):Mt&&(q<0||b!==wo[q]?wt(De,p,Eo,2):q--)}}},wt=(f,d,p,v,g=null)=>{const{el:y,type:S,transition:_,children:w,shapeFlag:b}=f;if(b&6){wt(f.component.subTree,d,p,v);return}if(b&128){f.suspense.move(d,p,v);return}if(b&64){S.move(f,d,p,dn);return}if(S===xe){r(y,d,p);for(let R=0;R<w.length;R++)wt(w[R],d,p,v);r(f.anchor,d,p);return}if(S===Wr){I(f,d,p);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(y),r(y,d,p),he(()=>_.enter(y),g);else{const{leave:R,delayLeave:N,afterLeave:D}=_,j=()=>r(y,d,p),B=()=>{R(y,()=>{j(),D&&D()})};N?N(y,j,B):B()}else r(y,d,p)},Me=(f,d,p,v=!1,g=!1)=>{const{type:y,props:S,ref:_,children:w,dynamicChildren:b,shapeFlag:k,patchFlag:R,dirs:N}=f;if(_!=null&&Br(_,null,p,f,!0),k&256){d.ctx.deactivate(f);return}const D=k&1&&N,j=!Mn(f);let B;if(j&&(B=S&&S.onVnodeBeforeUnmount)&&Ne(B,d,f),k&6)_d(f.component,p,v);else{if(k&128){f.suspense.unmount(p,v);return}D&&mt(f,null,d,"beforeUnmount"),k&64?f.type.remove(f,d,p,g,dn,v):b&&(y!==xe||R>0&&R&64)?Ye(b,d,p,!1,!0):(y===xe&&R&384||!g&&k&16)&&Ye(w,d,p),v&&go(f)}(j&&(B=S&&S.onVnodeUnmounted)||D)&&he(()=>{B&&Ne(B,d,f),D&&mt(f,null,d,"unmounted")},p)},go=f=>{const{type:d,el:p,anchor:v,transition:g}=f;if(d===xe){bd(p,v);return}if(d===Wr){F(f);return}const y=()=>{i(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:S,delayLeave:_}=g,w=()=>S(p,y);_?_(f.el,y,w):w()}else y()},bd=(f,d)=>{let p;for(;f!==d;)p=h(f),i(f),f=p;i(d)},_d=(f,d,p)=>{const{bum:v,scope:g,update:y,subTree:S,um:_}=f;v&&br(v),g.stop(),y&&(y.active=!1,Me(S,f,d,p)),_&&he(_,d),he(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ye=(f,d,p,v=!1,g=!1,y=0)=>{for(let S=y;S<f.length;S++)Me(f[S],d,p,v,g)},mr=f=>f.shapeFlag&6?mr(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el);let Ti=!1;const bo=(f,d,p)=>{f==null?d._vnode&&Me(d._vnode,null,null,!0):T(d._vnode||null,f,d,null,null,null,p),Ti||(Ti=!0,ga(),ba(),Ti=!1),d._vnode=f},dn={p:T,um:Me,m:wt,r:go,mt:Pi,mc:de,pc:K,pbc:Ge,n:mr,o:e};let _o,yo;return{render:bo,hydrate:_o,createApp:Jl(bo,_o)}}function Kr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function of(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wa(e,t,n=!1){const r=e.children,i=t.children;if(M(r)&&M(i))for(let a=0;a<r.length;a++){const s=r[a];let o=i[a];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[a]=tt(i[a]),o.el=s.el),n||Wa(s,o)),o.type===Fn&&(o.el=s.el)}}function lf(e){const t=e.slice(),n=[0];let r,i,a,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,s=n.length-1;a<s;)o=a+s>>1,e[n[o]]<c?a=o+1:s=o;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,s=n[a-1];a-- >0;)n[a]=s,s=t[s];return n}function Ga(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ga(t)}const ff=e=>e.__isTeleport,xe=Symbol.for("v-fgt"),Fn=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Wr=Symbol.for("v-stc"),Wt=[];let Oe=null;function te(e=!1){Wt.push(Oe=e?null:[])}function cf(){Wt.pop(),Oe=Wt[Wt.length-1]||null}let Gt=1;function Ya(e){Gt+=e}function Xa(e){return e.dynamicChildren=Gt>0?Oe||St:null,cf(),Gt>0&&Oe&&Oe.push(e),e}function ue(e,t,n,r,i,a){return Xa(ne(e,t,n,r,i,a,!0))}function Yt(e,t,n,r,i){return Xa(le(e,t,n,r,i,!0))}function Gr(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const qa=({key:e})=>e??null,jn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||fe(e)||U(e)?{i:be,r:e,k:t,f:!!n}:e:null);function ne(e,t=null,n=null,r=0,i=null,a=e===xe?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qa(t),ref:t&&jn(t),scopeId:xa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:be};return o?(Yr(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Gt>0&&!s&&Oe&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Oe.push(l),l}const le=uf;function uf(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Al)&&(e=ht),Gr(e)){const o=kt(e,t,!0);return n&&Yr(o,n),Gt>0&&!a&&Oe&&(o.shapeFlag&6?Oe[Oe.indexOf(e)]=o:Oe.push(o)),o.patchFlag|=-2,o}if(Sf(e)&&(e=e.__vccOpts),t){t=df(t);let{class:o,style:l}=t;o&&!ee(o)&&(t.class=gn(o)),X(l)&&(fa(l)&&!M(l)&&(l=re({},l)),t.style=_r(l))}const s=ee(e)?1:Ol(e)?128:ff(e)?64:X(e)?4:U(e)?2:0;return ne(e,t,n,r,i,s,a,!0)}function df(e){return e?fa(e)||La(e)?re({},e):e:null}function kt(e,t,n=!1,r=!1){const{props:i,ref:a,patchFlag:s,children:o,transition:l}=e,c=t?mf(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&qa(c),ref:t&&t.ref?n&&a?M(a)?a.concat(jn(t)):[a,jn(t)]:jn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(u.transition=l.clone(u)),u}function qt(e=" ",t=0){return le(Fn,null,e,t)}function Te(e="",t=!1){return t?(te(),Yt(ht,null,e)):le(ht,null,e)}function Ie(e){return e==null||typeof e=="boolean"?le(ht):M(e)?le(xe,null,e.slice()):typeof e=="object"?tt(e):le(Fn,null,String(e))}function tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kt(e)}function Yr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Yr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!La(t)?t._ctx=be:i===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[qt(t)]):n=8);e.children=t,e.shapeFlag|=n}function mf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=gn([t.class,r.class]));else if(i==="style")t.style=_r([t.style,r.style]);else if(pn(i)){const a=t[i],s=r[i];s&&a!==s&&!(M(a)&&a.includes(s))&&(t[i]=a?[].concat(a,s):s)}else i!==""&&(t[i]=r[i])}return t}function Ne(e,t,n,r=null){Ae(e,t,7,[n,r])}const pf=Ra();let hf=0;function vf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||pf,a={uid:hf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Do(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fa(r,i),emitsOptions:ya(r,i),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=_l.bind(null,a),e.ce&&e.ce(a),a}let se=null,Hn,Xr;{const e=ji(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(s=>s(a)):i[0](a)}};Hn=t("__VUE_INSTANCE_SETTERS__",n=>se=n),Xr=t("__VUE_SSR_SETTERS__",n=>Vn=n)}const Jt=e=>{const t=se;return Hn(e),e.scope.on(),()=>{e.scope.off(),Hn(t)}},Ja=()=>{se&&se.scope.off(),Hn(null)};function Za(e){return e.vnode.shapeFlag&4}let Vn=!1;function gf(e,t=!1){t&&Xr(t);const{props:n,children:r}=e.vnode,i=Za(e);Ql(e,n,i,t),nf(e,r);const a=i?bf(e,t):void 0;return t&&Xr(!1),a}function bf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Bl);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?yf(e):null,a=Jt(e);Ue();const s=He(r,e,0,[e.props,i]);if(Fe(),a(),Ni(s)){if(s.then(Ja,Ja),t)return s.then(o=>{Qa(e,o,t)}).catch(o=>{Pn(o,e,0)});e.asyncDep=s}else Qa(e,s,t)}else ts(e,t)}function Qa(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=da(t)),ts(e,n)}let es;function ts(e,t,n){const r=e.type;if(!e.render){if(!t&&es&&!r.render){const i=r.template||Hr(e).template;if(i){const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=re(re({isCustomElement:a,delimiters:o},s),l);r.render=es(i,c)}}e.render=r.render||ge}{const i=Jt(e);Ue();try{Kl(e)}finally{Fe(),i()}}}const _f={get(e,t){return pe(e,"get",""),e[t]}};function yf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,_f),slots:e.slots,emit:e.emit,expose:t}}function zn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(da(il(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}}))}const xf=/(?:^|[-_])(\w)/g,wf=e=>e.replace(xf,t=>t.toUpperCase()).replace(/[-_]/g,"");function Ef(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function ns(e,t,n=!1){let r=Ef(t);if(!r&&t.__file){const i=t.__file.match(/([^/\\]+)\.\w+$/);i&&(r=i[1])}if(!r&&e&&e.parent){const i=a=>{for(const s in a)if(a[s]===t)return s};r=i(e.components||e.parent.type.components)||i(e.appContext.components)}return r?wf(r):n?"App":"Anonymous"}function Sf(e){return U(e)&&"__vccOpts"in e}const vt=(e,t)=>al(e,t,Vn);function Af(e,t,n){const r=arguments.length;return r===2?X(t)&&!M(t)?Gr(t)?le(e,null,[t]):le(e,t):le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gr(n)&&(n=[n]),le(e,t,n))}const Of="3.4.26",kf="http://www.w3.org/2000/svg",Cf="http://www.w3.org/1998/Math/MathML",nt=typeof document<"u"?document:null,rs=nt&&nt.createElement("template"),Pf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?nt.createElementNS(kf,e):t==="mathml"?nt.createElementNS(Cf,e):nt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>nt.createTextNode(e),createComment:e=>nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const s=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{rs.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const o=rs.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Tf=Symbol("_vtc");function If(e,t,n){const r=e[Tf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const $n=Symbol("_vod"),is=Symbol("_vsh"),Nf={beforeMount(e,{value:t},{transition:n}){e[$n]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Zt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Zt(e,!0),r.enter(e)):r.leave(e,()=>{Zt(e,!1)}):Zt(e,t))},beforeUnmount(e,{value:t}){Zt(e,t)}};function Zt(e,t){e.style.display=t?e[$n]:"none",e[is]=!t}const Rf=Symbol(""),Mf=/(^|;)\s*display\s*:/;function Df(e,t,n){const r=e.style,i=ee(n);let a=!1;if(n&&!i){if(t)if(ee(t))for(const s of t.split(";")){const o=s.slice(0,s.indexOf(":")).trim();n[o]==null&&Bn(r,o,"")}else for(const s in t)n[s]==null&&Bn(r,s,"");for(const s in n)s==="display"&&(a=!0),Bn(r,s,n[s])}else if(i){if(t!==n){const s=r[Rf];s&&(n+=";"+s),r.cssText=n,a=Mf.test(n)}}else t&&e.removeAttribute("style");$n in e&&(e[$n]=a?r.display:"",e[is]&&(r.display="none"))}const as=/\s*!important$/;function Bn(e,t,n){if(M(n))n.forEach(r=>Bn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Lf(e,t);as.test(n)?e.setProperty(Ee(r),n.replace(as,""),"important"):e[r]=n}}const ss=["Webkit","Moz","ms"],qr={};function Lf(e,t){const n=qr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return qr[t]=r;r=Di(r);for(let i=0;i<ss.length;i++){const a=ss[i]+r;if(a in e)return qr[t]=a}return t}const os="http://www.w3.org/1999/xlink";function Uf(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(os,t.slice(6,t.length)):e.setAttributeNS(os,t,n);else{const a=Mo(t);n==null||a&&!Hi(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Ff(e,t,n,r,i,a,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,i,a),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(c!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Hi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function jf(e,t,n,r){e.addEventListener(t,n,r)}function Hf(e,t,n,r){e.removeEventListener(t,n,r)}const ls=Symbol("_vei");function Vf(e,t,n,r,i=null){const a=e[ls]||(e[ls]={}),s=a[t];if(r&&s)s.value=r;else{const[o,l]=zf(t);if(r){const c=a[t]=Kf(r,i);jf(e,o,c,l)}else s&&(Hf(e,o,s,l),a[t]=void 0)}}const fs=/(?:Once|Passive|Capture)$/;function zf(e){let t;if(fs.test(e)){t={};let r;for(;r=e.match(fs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ee(e.slice(2)),t]}let Jr=0;const $f=Promise.resolve(),Bf=()=>Jr||($f.then(()=>Jr=0),Jr=Date.now());function Kf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ae(Wf(r,n.value),t,5,[r])};return n.value=e,n.attached=Bf(),n}function Wf(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const cs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Gf=(e,t,n,r,i,a,s,o,l)=>{const c=i==="svg";t==="class"?If(e,r,c):t==="style"?Df(e,n,r):pn(t)?pr(t)||Vf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Yf(e,t,r,c))?Ff(e,t,r,a,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Uf(e,t,r,c))};function Yf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&cs(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return cs(t)&&ee(n)?!1:t in e}/*! #__NO_SIDE_EFFECTS__ */function Xf(e,t){const n=Dr(e);class r extends Zr{constructor(a){super(n,a,t)}}return r.def=n,r}const qf=typeof HTMLElement<"u"?HTMLElement:class{};class Zr extends qf{constructor(t,n={},r){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),ha(()=>{this._connected||(ds(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const i of r)this._setAttr(i.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(r,i=!1)=>{const{props:a,styles:s}=r;let o;if(a&&!M(a))for(const l in a){const c=a[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=Ui(this._props[l])),(o||(o=Object.create(null)))[Le(l)]=!0)}this._numberProps=o,i&&this._resolveProps(r),this._applyStyles(s),this._update()},n=this._def.__asyncLoader;n?n().then(r=>t(r,!0)):t(this._def)}_resolveProps(t){const{props:n}=t,r=M(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&r.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of r.map(Le))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(a){this._setProp(i,a)}})}_setAttr(t){let n=this.hasAttribute(t)?this.getAttribute(t):void 0;const r=Le(t);this._numberProps&&this._numberProps[r]&&(n=Ui(n)),this._setProp(r,n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,r=!0,i=!0){n!==this._props[t]&&(this._props[t]=n,i&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Ee(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Ee(t),n+""):n||this.removeAttribute(Ee(t))))}_update(){ds(this._createVNode(),this.shadowRoot)}_createVNode(){const t=le(this._def,re({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0;const r=(a,s)=>{this.dispatchEvent(new CustomEvent(a,{detail:s}))};n.emit=(a,...s)=>{r(a,s),Ee(a)!==a&&r(Ee(a),s)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof Zr){n.parent=i._instance,n.provides=i._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}const Jf=re({patchProp:Gf},Pf);let us;function Zf(){return us||(us=af(Jf))}const ds=(...e)=>{Zf().render(...e)};var Qf={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]},ec={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},tc={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},nc={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]},rc={NVM_INC:"/Users/cm/.nvm/versions/node/v19.7.0/include/node",MANPATH:"/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/Users/cm/.nvm/versions/node/v19.7.0/bin/node",INIT_CWD:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_CD_FLAGS:"-q",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_config_metrics_registry:"https://registry.npmjs.org/",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/",npm_config_global_prefix:"/Users/cm/.nvm/versions/node/v19.7.0",TERM_PROGRAM_VERSION:"1.88.1",ZDOTDIR:"/Users/cm",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_DIR:"/Users/cm/.nvm",USER:"cm",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/Users/cm/.nvm/versions/node/v19.7.0/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/bin/npm-cli.js",npm_config_fetch_retry_mintimeout:"20000",PATH:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin",npm_package_json:"/Users/cm/Documents/workspace/transcribe/frontend/package.json",npm_config_userconfig:"/Users/cm/.npmrc",npm_config_init_module:"/Users/cm/.npm-init.js",USER_ZDOTDIR:"/Users/cm",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/cm/Documents/workspace/transcribe/frontend",npm_lifecycle_event:"build:components",EDITOR:"vi",npm_package_name:"frontend",LANG:"en_US.UTF-8",npm_config_npm_version:"9.8.1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",XPC_FLAGS:"0x0",npm_config_node_gyp:"/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.1.0",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/cm",npm_config_fetch_retry_maxtimeout:"120000",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/cm/.npm",LOGNAME:"cm",npm_lifecycle_script:"vue-tsc --noEmit && vite build --config vite.comp.config.js",VSCODE_GIT_IPC_HANDLE:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock",NVM_BIN:"/Users/cm/.nvm/versions/node/v19.7.0/bin",npm_config_user_agent:"npm/9.8.1 node/v19.7.0 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/Users/cm/.nvm/versions/node/v19.7.0/bin/node",npm_config_prefix:"/Users/cm/.nvm/versions/node/v19.7.0",COLORTERM:"truecolor",_:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite",NODE_ENV:"production"};function ms(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ms(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ms(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kn(e){"@babel/helpers - typeof";return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kn(e)}function ic(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ac(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sc(e,t,n){return t&&ac(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qr(e,t){return lc(e)||cc(e,t)||ps(e,t)||dc()}function Qt(e){return oc(e)||fc(e)||ps(e)||uc()}function oc(e){if(Array.isArray(e))return ei(e)}function lc(e){if(Array.isArray(e))return e}function fc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,s,o;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw o}}return r}}function ps(e,t){if(e){if(typeof e=="string")return ei(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ei(e,t)}}function ei(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function uc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var hs=function(){},ti={},vs={},gs=null,bs={mark:hs,measure:hs};try{typeof window<"u"&&(ti=window),typeof document<"u"&&(vs=document),typeof MutationObserver<"u"&&(gs=MutationObserver),typeof performance<"u"&&(bs=performance)}catch{}var mc=ti.navigator||{},_s=mc.userAgent,ys=_s===void 0?"":_s,rt=ti,G=vs,xs=gs,Wn=bs;rt.document;var ze=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",ws=~ys.indexOf("MSIE")||~ys.indexOf("Trident/"),Gn,Yn,Xn,qn,Jn,$e="___FONT_AWESOME___",ni=16,Es="fa",Ss="svg-inline--fa",gt="data-fa-i2svg",ri="data-fa-pseudo-element",pc="data-fa-pseudo-element-pending",ii="data-prefix",ai="data-icon",As="fontawesome-i2svg",hc="async",vc=["HTML","HEAD","STYLE","SCRIPT"],Os=function(){try{return rc.NODE_ENV==="production"}catch{return!1}}(),Y="classic",Q="sharp",si=[Y,Q];function en(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Y]}})}var tn=en((Gn={},ie(Gn,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ie(Gn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Gn)),nn=en((Yn={},ie(Yn,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(Yn,Q,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Yn)),rn=en((Xn={},ie(Xn,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(Xn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Xn)),gc=en((qn={},ie(qn,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(qn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),qn)),bc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ks="fa-layers-text",_c=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,yc=en((Jn={},ie(Jn,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(Jn,Q,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Jn)),Cs=[1,2,3,4,5,6,7,8,9,10],xc=Cs.concat([11,12,13,14,15,16,17,18,19,20]),wc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},an=new Set;Object.keys(nn[Y]).map(an.add.bind(an)),Object.keys(nn[Q]).map(an.add.bind(an));var Ec=[].concat(si,Qt(an),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",bt.GROUP,bt.SWAP_OPACITY,bt.PRIMARY,bt.SECONDARY]).concat(Cs.map(function(e){return"".concat(e,"x")})).concat(xc.map(function(e){return"w-".concat(e)})),sn=rt.FontAwesomeConfig||{};function Sc(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ac(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var Oc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Oc.forEach(function(e){var t=Qr(e,2),n=t[0],r=t[1],i=Ac(Sc(n));i!=null&&(sn[r]=i)})}var Ps={styleDefault:"solid",familyDefault:"classic",cssPrefix:Es,replacementClass:Ss,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};sn.familyPrefix&&(sn.cssPrefix=sn.familyPrefix);var Ct=O(O({},Ps),sn);Ct.autoReplaceSvg||(Ct.observeMutations=!1);var C={};Object.keys(Ps).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Ct[e]=n,on.forEach(function(r){return r(C)})},get:function(){return Ct[e]}})}),Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Ct.cssPrefix=t,on.forEach(function(n){return n(C)})},get:function(){return Ct.cssPrefix}}),rt.FontAwesomeConfig=C;var on=[];function kc(e){return on.push(e),function(){on.splice(on.indexOf(e),1)}}var it=ni,Re={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Cc(e){if(!(!e||!ze)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=a)}return G.head.insertBefore(t,r),e}}var Pc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ln(){for(var e=12,t="";e-- >0;)t+=Pc[Math.random()*62|0];return t}function Pt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function oi(e){return e.classList?Pt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ts(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ts(e[n]),'" ')},"").trim()}function Zn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function li(e){return e.size!==Re.size||e.x!==Re.x||e.y!==Re.y||e.rotate!==Re.rotate||e.flipX||e.flipY}function Ic(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Nc(e){var t=e.transform,n=e.width,r=n===void 0?ni:n,i=e.height,a=i===void 0?ni:i,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&ws?l+="translate(".concat(t.x/it-r/2,"em, ").concat(t.y/it-a/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/it,"em), calc(-50% + ").concat(t.y/it,"em)) "):l+="translate(".concat(t.x/it,"em, ").concat(t.y/it,"em) "),l+="scale(".concat(t.size/it*(t.flipX?-1:1),", ").concat(t.size/it*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Rc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Is(){var e=Es,t=Ss,n=C.cssPrefix,r=C.replacementClass,i=Rc;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var Ns=!1;function fi(){C.autoAddCss&&!Ns&&(Cc(Is()),Ns=!0)}var Mc={mixout:function(){return{dom:{css:Is,insertCss:fi}}},hooks:function(){return{beforeDOMElementCreation:function(){fi()},beforeI2svg:function(){fi()}}}},Be=rt||{};Be[$e]||(Be[$e]={}),Be[$e].styles||(Be[$e].styles={}),Be[$e].hooks||(Be[$e].hooks={}),Be[$e].shims||(Be[$e].shims=[]);var ke=Be[$e],Rs=[],Dc=function e(){G.removeEventListener("DOMContentLoaded",e),Qn=1,Rs.map(function(t){return t()})},Qn=!1;ze&&(Qn=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Qn||G.addEventListener("DOMContentLoaded",Dc));function Lc(e){ze&&(Qn?setTimeout(e,0):Rs.push(e))}function fn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Ts(e):"<".concat(t," ").concat(Tc(r),">").concat(a.map(fn).join(""),"</").concat(t,">")}function Ms(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ci=function(t,n,r,i){var a=Object.keys(t),s=a.length,o=n,l,c,u;for(r===void 0?(l=1,u=t[a[0]]):(l=0,u=r);l<s;l++)c=a[l],u=o(u,t[c],c,t);return u};function Uc(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ui(e){var t=Uc(e);return t.length===1?t[0].toString(16):null}function Fc(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ds(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function di(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ds(t);typeof ke.hooks.addPack=="function"&&!i?ke.hooks.addPack(e,Ds(t)):ke.styles[e]=O(O({},ke.styles[e]||{}),a),e==="fas"&&di("fa",t)}var er,tr,nr,Tt=ke.styles,jc=ke.shims,Hc=(er={},ie(er,Y,Object.values(rn[Y])),ie(er,Q,Object.values(rn[Q])),er),mi=null,Ls={},Us={},Fs={},js={},Hs={},Vc=(tr={},ie(tr,Y,Object.keys(tn[Y])),ie(tr,Q,Object.keys(tn[Q])),tr);function zc(e){return~Ec.indexOf(e)}function $c(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!zc(i)?i:null}var Vs=function(){var t=function(a){return ci(Tt,function(s,o,l){return s[l]=ci(o,a,{}),s},{})};Ls=t(function(i,a,s){if(a[3]&&(i[a[3]]=s),a[2]){var o=a[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){i[l.toString(16)]=s})}return i}),Us=t(function(i,a,s){if(i[s]=s,a[2]){var o=a[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){i[l]=s})}return i}),Hs=t(function(i,a,s){var o=a[2];return i[s]=s,o.forEach(function(l){i[l]=s}),i});var n="far"in Tt||C.autoFetchSvg,r=ci(jc,function(i,a){var s=a[0],o=a[1],l=a[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});Fs=r.names,js=r.unicodes,mi=rr(C.styleDefault,{family:C.familyDefault})};kc(function(e){mi=rr(e.styleDefault,{family:C.familyDefault})}),Vs();function pi(e,t){return(Ls[e]||{})[t]}function Bc(e,t){return(Us[e]||{})[t]}function _t(e,t){return(Hs[e]||{})[t]}function zs(e){return Fs[e]||{prefix:null,iconName:null}}function Kc(e){var t=js[e],n=pi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function at(){return mi}var hi=function(){return{prefix:null,iconName:null,rest:[]}};function rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Y:n,i=tn[r][e],a=nn[r][e]||nn[r][i],s=e in ke.styles?e:null;return a||s||null}var $s=(nr={},ie(nr,Y,Object.keys(rn[Y])),ie(nr,Q,Object.keys(rn[Q])),nr);function ir(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ie(t,Y,"".concat(C.cssPrefix,"-").concat(Y)),ie(t,Q,"".concat(C.cssPrefix,"-").concat(Q)),t),s=null,o=Y;(e.includes(a[Y])||e.some(function(c){return $s[Y].includes(c)}))&&(o=Y),(e.includes(a[Q])||e.some(function(c){return $s[Q].includes(c)}))&&(o=Q);var l=e.reduce(function(c,u){var m=$c(C.cssPrefix,u);if(Tt[u]?(u=Hc[o].includes(u)?gc[o][u]:u,s=u,c.prefix=u):Vc[o].indexOf(u)>-1?(s=u,c.prefix=rr(u,{family:o})):m?c.iconName=m:u!==C.replacementClass&&u!==a[Y]&&u!==a[Q]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var h=s==="fa"?zs(c.iconName):{},x=_t(c.prefix,c.iconName);h.prefix&&(s=null),c.iconName=h.iconName||x||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Tt.far&&Tt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},hi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Q&&(Tt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=_t(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=at()||"fas"),l}var Wc=function(){function e(){ic(this,e),this.definitions={}}return sc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=O(O({},n.definitions[o]||{}),s[o]),di(o,s[o]);var l=rn[Y][o];l&&di(l,s[o]),Vs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var s=i[a],o=s.prefix,l=s.iconName,c=s.icon,u=c[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),Bs=[],It={},Nt={},Gc=Object.keys(Nt);function Yc(e,t){var n=t.mixoutsTo;return Bs=e,It={},Object.keys(Nt).forEach(function(r){Gc.indexOf(r)===-1&&delete Nt[r]}),Bs.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Kn(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(s){It[s]||(It[s]=[]),It[s].push(a[s])})}r.provides&&r.provides(Nt)}),n}function vi(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=It[e]||[];return a.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function yt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=It[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Nt[e]?Nt[e].apply(null,t):void 0}function gi(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||at();if(t)return t=_t(n,t)||t,Ms(Ks.definitions,n,t)||Ms(ke.styles,n,t)}var Ks=new Wc,Xc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,yt("noAuto")},qc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ze?(yt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Lc(function(){Zc({autoReplaceSvgRoot:n}),yt("watch",t)})}},Jc={icon:function(t){if(t===null)return null;if(Kn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_t(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=rr(t[0]);return{prefix:r,iconName:_t(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(bc))){var i=ir(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||at(),iconName:_t(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=at();return{prefix:a,iconName:_t(a,t)||t}}}},_e={noAuto:Xc,config:C,dom:qc,parse:Jc,library:Ks,findIconDefinition:gi,toHtml:fn},Zc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(ke.styles).length>0||C.autoFetchSvg)&&ze&&C.autoReplaceSvg&&_e.dom.i2svg({node:r})};function ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return fn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ze){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Qc(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,s=e.transform;if(li(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};i.style=Zn(O(O({},a),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function eu(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,s=a===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:s}),children:r}]}]}function bi(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,x=h===void 0?!1:h,P=r.found?r:n,T=P.width,$=P.height,E=i==="fak",A=[C.replacementClass,a?"".concat(C.cssPrefix,"-").concat(a):""].filter(function(we){return m.classes.indexOf(we)===-1}).filter(function(we){return we!==""||!!we}).concat(m.classes).join(" "),I={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat($)})},F=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/$*16*.0625,"em")}:{};x&&(I.attributes[gt]=""),l&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(u||ln())},children:[l]}),delete I.attributes.title);var z=O(O({},I),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:O(O({},F),m.styles)}),L=r.found&&n.found?Ke("generateAbstractMask",z)||{children:[],attributes:{}}:Ke("generateAbstractIcon",z)||{children:[],attributes:{}},J=L.children,de=L.attributes;return z.children=J,z.attributes=de,o?eu(z):Qc(z)}function Ws(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=O(O(O({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});l&&(c[gt]="");var u=O({},s.styles);li(i)&&(u.transform=Nc({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Zn(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function tu(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Zn(r.styles);a.length>0&&(i.style=a);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var _i=ke.styles;function yi(e){var t=e[0],n=e[1],r=e.slice(4),i=Qr(r,1),a=i[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(bt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(bt.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:s}}var nu={found:!1,width:512,height:512};function ru(e,t){!Os&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xi(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=at()),new Promise(function(r,i){if(Ke("missingIconAbstract"),n==="fa"){var a=zs(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&_i[t]&&_i[t][e]){var s=_i[t][e];return r(yi(s))}ru(e,t),r(O(O({},nu),{},{icon:C.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var Gs=function(){},wi=C.measurePerformance&&Wn&&Wn.mark&&Wn.measure?Wn:{mark:Gs,measure:Gs},cn='FA "6.5.2"',iu=function(t){return wi.mark("".concat(cn," ").concat(t," begins")),function(){return Ys(t)}},Ys=function(t){wi.mark("".concat(cn," ").concat(t," ends")),wi.measure("".concat(cn," ").concat(t),"".concat(cn," ").concat(t," begins"),"".concat(cn," ").concat(t," ends"))},Ei={begin:iu,end:Ys},sr=function(){};function Xs(e){var t=e.getAttribute?e.getAttribute(gt):null;return typeof t=="string"}function au(e){var t=e.getAttribute?e.getAttribute(ii):null,n=e.getAttribute?e.getAttribute(ai):null;return t&&n}function su(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function ou(){if(C.autoReplaceSvg===!0)return or.replace;var e=or[C.autoReplaceSvg];return e||or.replace}function lu(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function fu(e){return G.createElement(e)}function qs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?lu:fu:n;if(typeof e=="string")return G.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var a=e.children||[];return a.forEach(function(s){i.appendChild(qs(s,{ceFn:r}))}),i}function cu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var or={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(qs(i),n)}),n.getAttribute(gt)===null&&C.keepOriginalSource){var r=G.createComment(cu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~oi(n).indexOf(C.replacementClass))return or.replace(t);var i=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(o,l){return l===C.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var s=r.map(function(o){return fn(o)}).join(`
`);n.setAttribute(gt,""),n.innerHTML=s}};function Js(e){e()}function Zs(e,t){var n=typeof t=="function"?t:sr;if(e.length===0)n();else{var r=Js;C.mutateApproach===hc&&(r=rt.requestAnimationFrame||Js),r(function(){var i=ou(),a=Ei.begin("mutate");e.map(i),a(),n()})}}var Si=!1;function Qs(){Si=!0}function Ai(){Si=!1}var lr=null;function eo(e){if(xs&&C.observeMutations){var t=e.treeCallback,n=t===void 0?sr:t,r=e.nodeCallback,i=r===void 0?sr:r,a=e.pseudoElementsCallback,s=a===void 0?sr:a,o=e.observeMutationsRoot,l=o===void 0?G:o;lr=new xs(function(c){if(!Si){var u=at();Pt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Xs(m.addedNodes[0])&&(C.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&Xs(m.target)&&~wc.indexOf(m.attributeName))if(m.attributeName==="class"&&au(m.target)){var h=ir(oi(m.target)),x=h.prefix,P=h.iconName;m.target.setAttribute(ii,x||u),P&&m.target.setAttribute(ai,P)}else su(m.target)&&i(m.target)})}}),ze&&lr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uu(){lr&&lr.disconnect()}function du(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function mu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=ir(oi(e));return i.prefix||(i.prefix=at()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Bc(i.prefix,e.innerText)||pi(i.prefix,ui(e.innerText))),!i.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function pu(e){var t=Pt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||ln()):(t["aria-hidden"]="true",t.focusable="false")),t}function hu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Re,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function to(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mu(e),r=n.iconName,i=n.prefix,a=n.rest,s=pu(e),o=vi("parseNodeAttributes",{},e),l=t.styleParser?du(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Re,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:s}},o)}var vu=ke.styles;function no(e){var t=C.autoReplaceSvg==="nest"?to(e,{styleParser:!1}):to(e);return~t.extra.classes.indexOf(ks)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}var st=new Set;si.map(function(e){st.add("fa-".concat(e))}),Object.keys(tn[Y]).map(st.add.bind(st)),Object.keys(tn[Q]).map(st.add.bind(st)),st=Qt(st);function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ze)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(As,"-").concat(m))},i=function(m){return n.remove("".concat(As,"-").concat(m))},a=C.autoFetchSvg?st:si.map(function(u){return"fa-".concat(u)}).concat(Object.keys(vu));a.includes("fa")||a.push("fa");var s=[".".concat(ks,":not([").concat(gt,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(gt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Pt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ei.begin("onTree"),c=o.reduce(function(u,m){try{var h=no(m);h&&u.push(h)}catch(x){Os||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){Zs(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function gu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;no(e).then(function(n){n&&Zs([n],t)})}function bu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:gi(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:gi(i||{})),e(r,O(O({},n),{},{mask:i}))}}var _u=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Re:r,a=n.symbol,s=a===void 0?!1:a,o=n.mask,l=o===void 0?null:o,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,x=n.titleId,P=x===void 0?null:x,T=n.classes,$=T===void 0?[]:T,E=n.attributes,A=E===void 0?{}:E,I=n.styles,F=I===void 0?{}:I;if(t){var z=t.prefix,L=t.iconName,J=t.icon;return ar(O({type:"icon"},t),function(){return yt("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(h?A["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(P||ln()):(A["aria-hidden"]="true",A.focusable="false")),bi({icons:{main:yi(J),mask:l?yi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:L,transform:O(O({},Re),i),symbol:s,title:h,maskId:u,titleId:P,extra:{attributes:A,styles:F,classes:$}})})}},yu={mixout:function(){return{icon:bu(_u)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ro,n.nodeCallback=gu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?G:r,a=n.callback,s=a===void 0?function(){}:a;return ro(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(x,P){Promise.all([xi(i,o),u.iconName?xi(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var $=Qr(T,2),E=$[0],A=$[1];x([n,bi({icons:{main:E,mask:A},prefix:o,iconName:i,transform:l,symbol:c,maskId:m,title:a,titleId:s,extra:h,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.transform,o=n.styles,l=Zn(o);l.length>0&&(i.style=l);var c;return li(s)&&(c=Ke("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},xu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return ar({type:"layer"},function(){yt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(Qt(a)).join(" ")},children:s}]})}}}},wu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return ar({type:"counter",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),tu({content:n.toString(),title:a,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(Qt(o))}})})}}}},Eu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Re:i,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,x=h===void 0?{}:h;return ar({type:"text",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),Ws({content:n,transform:O(O({},Re),a),title:o,extra:{attributes:m,styles:x,classes:["".concat(C.cssPrefix,"-layers-text")].concat(Qt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,s=r.extra,o=null,l=null;if(ws){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return C.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Ws({content:n.innerHTML,width:o,height:l,transform:a,title:i,extra:s,watchable:!0})])}}},Su=new RegExp('"',"ug"),io=[1105920,1112319];function Au(e){var t=e.replace(Su,""),n=Fc(t,0),r=n>=io[0]&&n<=io[1],i=t.length===2?t[0]===t[1]:!1;return{value:ui(i?t[0]:t),isSecondary:r||i}}function ao(e,t){var n="".concat(pc).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Pt(e.children),s=a.filter(function(J){return J.getAttribute(ri)===t})[0],o=rt.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(_c),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&u!=="none"&&u!==""){var m=o.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Q:Y,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?nn[h][l[2].toLowerCase()]:yc[h][c],P=Au(m),T=P.value,$=P.isSecondary,E=l[0].startsWith("FontAwesome"),A=pi(x,T),I=A;if(E){var F=Kc(T);F.iconName&&F.prefix&&(A=F.iconName,x=F.prefix)}if(A&&!$&&(!s||s.getAttribute(ii)!==x||s.getAttribute(ai)!==I)){e.setAttribute(n,I),s&&e.removeChild(s);var z=hu(),L=z.extra;L.attributes[ri]=t,xi(A,x).then(function(J){var de=bi(O(O({},z),{},{icons:{main:J,mask:hi()},prefix:x,iconName:I,extra:L,watchable:!0})),we=G.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=de.map(function(Ge){return fn(Ge)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ou(e){return Promise.all([ao(e,"::before"),ao(e,"::after")])}function ku(e){return e.parentNode!==document.head&&!~vc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ri)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function so(e){if(ze)return new Promise(function(t,n){var r=Pt(e.querySelectorAll("*")).filter(ku).map(Ou),i=Ei.begin("searchPseudoElements");Qs(),Promise.all(r).then(function(){i(),Ai(),t()}).catch(function(){i(),Ai(),n()})})}var Cu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=so,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?G:r;C.searchPseudoElements&&so(i)}}},oo=!1,Pu={mixout:function(){return{dom:{unwatch:function(){Qs(),oo=!0}}}},hooks:function(){return{bootstrap:function(){eo(vi("mutationObserverCallbacks",{}))},noAuto:function(){uu()},watch:function(n){var r=n.observeMutationsRoot;oo?Ai():eo(vi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},lo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Tu={mixout:function(){return{parse:{transform:function(n){return lo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=lo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(s/2*-1," -256)")},x={outer:o,inner:m,path:h};return{tag:"g",attributes:O({},x.outer),children:[{tag:"g",attributes:O({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),x.path)}]}]}}}},Oi={x:0,y:0,width:"100%",height:"100%"};function fo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Iu(e){return e.tag==="g"?e.children:[e]}var Nu={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?ir(i.split(" ").map(function(s){return s.trim()})):hi();return a.prefix||(a.prefix=at()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.mask,o=n.maskId,l=n.transform,c=a.width,u=a.icon,m=s.width,h=s.icon,x=Ic({transform:l,containerWidth:m,iconWidth:c}),P={tag:"rect",attributes:O(O({},Oi),{},{fill:"white"})},T=u.children?{children:u.children.map(fo)}:{},$={tag:"g",attributes:O({},x.inner),children:[fo(O({tag:u.tag,attributes:O(O({},u.attributes),x.path)},T))]},E={tag:"g",attributes:O({},x.outer),children:[$]},A="mask-".concat(o||ln()),I="clip-".concat(o||ln()),F={tag:"mask",attributes:O(O({},Oi),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,E]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Iu(h)},F]};return r.push(z,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(A,")")},Oi)}),{children:r,attributes:i}}}},Ru={provides:function(t){var n=!1;rt.matchMedia&&(n=rt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=O(O({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:O(O({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Mu={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Du=[Mc,yu,xu,wu,Eu,Cu,Pu,Tu,Nu,Ru,Mu];Yc(Du,{mixoutsTo:_e}),_e.noAuto,_e.config;var Lu=_e.library;_e.dom;var ki=_e.parse;_e.findIconDefinition,_e.toHtml;var Uu=_e.icon;_e.layer,_e.text,_e.counter;var Fu={NVM_INC:"/Users/cm/.nvm/versions/node/v19.7.0/include/node",MANPATH:"/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/Users/cm/.nvm/versions/node/v19.7.0/bin/node",INIT_CWD:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_CD_FLAGS:"-q",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_config_metrics_registry:"https://registry.npmjs.org/",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/",npm_config_global_prefix:"/Users/cm/.nvm/versions/node/v19.7.0",TERM_PROGRAM_VERSION:"1.88.1",ZDOTDIR:"/Users/cm",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_DIR:"/Users/cm/.nvm",USER:"cm",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/Users/cm/.nvm/versions/node/v19.7.0/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/bin/npm-cli.js",npm_config_fetch_retry_mintimeout:"20000",PATH:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin",npm_package_json:"/Users/cm/Documents/workspace/transcribe/frontend/package.json",npm_config_userconfig:"/Users/cm/.npmrc",npm_config_init_module:"/Users/cm/.npm-init.js",USER_ZDOTDIR:"/Users/cm",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/cm/Documents/workspace/transcribe/frontend",npm_lifecycle_event:"build:components",EDITOR:"vi",npm_package_name:"frontend",LANG:"en_US.UTF-8",npm_config_npm_version:"9.8.1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",XPC_FLAGS:"0x0",npm_config_node_gyp:"/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.1.0",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/cm",npm_config_fetch_retry_maxtimeout:"120000",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/cm/.npm",LOGNAME:"cm",npm_lifecycle_script:"vue-tsc --noEmit && vite build --config vite.comp.config.js",VSCODE_GIT_IPC_HANDLE:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock",NVM_BIN:"/Users/cm/.nvm/versions/node/v19.7.0/bin",npm_config_user_agent:"npm/9.8.1 node/v19.7.0 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/Users/cm/.nvm/versions/node/v19.7.0/bin/node",npm_config_prefix:"/Users/cm/.nvm/versions/node/v19.7.0",COLORTERM:"truecolor",_:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite",NODE_ENV:"production"};function co(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function We(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?co(Object(n),!0).forEach(function(r){ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):co(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function ve(e,t,n){return t=zu(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ju(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Hu(e,t){if(e==null)return{};var n=ju(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Vu(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zu(e){var t=Vu(e,"string");return typeof t=="symbol"?t:String(t)}var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},uo={exports:{}};(function(e){(function(t){var n=function(E,A,I){if(!c(A)||m(A)||h(A)||x(A)||l(A))return A;var F,z=0,L=0;if(u(A))for(F=[],L=A.length;z<L;z++)F.push(n(E,A[z],I));else{F={};for(var J in A)Object.prototype.hasOwnProperty.call(A,J)&&(F[E(J,I)]=n(E,A[J],I))}return F},r=function(E,A){A=A||{};var I=A.separator||"_",F=A.split||/(?=[A-Z])/;return E.split(F).join(I)},i=function(E){return P(E)?E:(E=E.replace(/[\-_\s]+(.)?/g,function(A,I){return I?I.toUpperCase():""}),E.substr(0,1).toLowerCase()+E.substr(1))},a=function(E){var A=i(E);return A.substr(0,1).toUpperCase()+A.substr(1)},s=function(E,A){return r(E,A).toLowerCase()},o=Object.prototype.toString,l=function(E){return typeof E=="function"},c=function(E){return E===Object(E)},u=function(E){return o.call(E)=="[object Array]"},m=function(E){return o.call(E)=="[object Date]"},h=function(E){return o.call(E)=="[object RegExp]"},x=function(E){return o.call(E)=="[object Boolean]"},P=function(E){return E=E-0,E===E},T=function(E,A){var I=A&&"process"in A?A.process:A;return typeof I!="function"?E:function(F,z){return I(F,E,z)}},$={camelize:i,decamelize:s,pascalize:a,depascalize:s,camelizeKeys:function(E,A){return n(T(i,A),E)},decamelizeKeys:function(E,A){return n(T(s,A),E,A)},pascalizeKeys:function(E,A){return n(T(a,A),E)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})($u)})(uo);var Bu=uo.exports,Ku=["class","style"];function Wu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Bu.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function Gu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return mo(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Gu(u);break;case"style":l.style=Wu(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,s=a===void 0?{}:a,o=Hu(n,Ku);return Af(e.tag,We(We(We({},t),{},{class:i.class,style:We(We({},i.style),s)},i.attrs),o),r)}var po=!1;try{po=Fu.NODE_ENV==="production"}catch{}function Yu(){if(!po&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ci(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ve({},e,t):{}}function Xu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ve(t,"fa-".concat(e.size),e.size!==null),ve(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ve(t,"fa-pull-".concat(e.pull),e.pull!==null),ve(t,"fa-swap-opacity",e.swapOpacity),ve(t,"fa-bounce",e.bounce),ve(t,"fa-shake",e.shake),ve(t,"fa-beat",e.beat),ve(t,"fa-fade",e.fade),ve(t,"fa-beat-fade",e.beatFade),ve(t,"fa-flash",e.flash),ve(t,"fa-spin-pulse",e.spinPulse),ve(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ho(e){if(e&&fr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ki.icon)return ki.icon(e);if(e===null)return null;if(fr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Rt=Dr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=vt(function(){return ho(t.icon)}),a=vt(function(){return Ci("classes",Xu(t))}),s=vt(function(){return Ci("transform",typeof t.transform=="string"?ki.transform(t.transform):t.transform)}),o=vt(function(){return Ci("mask",ho(t.mask))}),l=vt(function(){return Uu(i.value,We(We(We(We({},a.value),s.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Rn(l,function(u){if(!u)return Yu("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var c=vt(function(){return l.value?mo(l.value.abstract[0],{},r):null});return function(){return c.value}}});const qu={class:"mt-4 h-full w-full items-center"},Ju=ne("h1",{class:"text-4xl"},[ne("b",null,"Transcribe your files")],-1),Zu={for:"fileInput",class:"text-2xl my-4"},Qu={key:0},ed={key:1,class:""},td=ne("u",null,"click here",-1),nd={key:0,class:"w-full"},rd={class:"flex flex-row items-center gap-3"},id={class:""},ad=["onClick"],sd=ne("span",null,"Delete",-1),od={class:"flex flex-row gap-2"},ld=["disabled"],fd={key:0,class:"m-4"},cd={class:"w-full items-center justify-between flex flex-row mb-2"},ud={class:"flex flex-row items-center gap-3"},dd={class:""},md={class:"text-left p-4 w-full mb-6 border rounded-2xl"},pd={key:0,class:"flex flex-row gap-2 mb-lg mb-5"},hd={class:"tag rounded-lg p-1 w-auto"},vd={key:1,class:""},gd=Xf(((e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n})(Dr({__name:"FileUpload.ce",setup(e){Lu.add(nc,Qf,ec,tc);const t=jt(!1),n=jt(!1),r=jt([]),i=jt(),a=jt([]);function s(){var x;const h=Array.from(((x=i.value)==null?void 0:x.files)||[]);r.value.push(...h)}function o(h){h.preventDefault(),t.value=!0}function l(){t.value=!1}function c(h){h.preventDefault(),i.value&&(i.value.files=h.dataTransfer.files),s(),t.value=!1}function u(h){r.value.splice(h,1)}async function m(){if(n.value=!n.value,n.value)for(let h=0;h<r.value.length;h++){a.value.push({file:r.value[h],status:"transcribing...",text:"",duration:""});const x=new FormData;x.append("file",r.value[h]),fetch("https://transcribe-test.fly.dev/uploadFull",{method:"POST",body:x}).then(async P=>{let T=await P.json();a.value[h].text=T.transcript,a.value[h].status="Done ("+Math.round(T.time/1e3)+"sec)"})}else a.value=[]}return(h,x)=>(te(),ue("div",qu,[ne("div",{class:gn(["main flex flex-col gap-4 justify-items-stretch",{"h-5/6":!n.value}])},[Ju,n.value?Te("",!0):(te(),ue("div",{key:0,class:"flex flex-col justify-center items-center rounded-3xl dropzone-container shadow-inner h-5/6 w-full p-4 overflow-scroll",onDragover:o,onDragleave:l,onDrop:c},[Il(ne("input",{type:"file",multiple:"",name:"file",id:"fileInput",onChange:s,ref_key:"file",ref:i,accept:"audio/*, video/*"},null,544),[[Nf,!1]]),ne("label",Zu,[t.value?(te(),ue("div",Qu,"Release to drop files here.")):(te(),ue("div",ed,[qt("Drop files here or "),td,qt(" to upload.")]))]),t.value?Te("",!0):(te(),ue("div",nd,[(te(!0),ue(xe,null,Lr(r.value,(P,T)=>(te(),ue("div",{key:T,class:"w-full p-2 items-center justify-evenly flex flex-row"},[ne("div",rd,[P.type.includes("audio")?(te(),Yt(ct(Rt),{key:0,icon:"microphone"})):Te("",!0),P.type.includes("video")?(te(),Yt(ct(Rt),{key:1,icon:"video"})):Te("",!0),ne("div",id,qe(P.name)+" ("+qe(Math.round(P.size/1024/1024))+" MB)",1)]),ne("button",{class:"delete",onClick:$=>u(T)},[le(ct(Rt),{class:"mr-2",icon:"trash"}),sd],8,ad)]))),128))]))],32)),ne("div",od,[ne("button",{disabled:r.value.length==0,class:"button-39",style:{},onClick:m},[le(ct(Rt),{class:"mr-2",icon:"upload"}),qt(" "+qe(n.value?"Cancel":"Transcribe"),1)],8,ld)]),n.value?(te(),ue("div",{key:1,class:"shadow-md border rounded-3xl h-5/6 w-full pt-2 px-4 overflow-scroll",onDragover:o,onDragleave:l,onDrop:c},[t.value?Te("",!0):(te(),ue("div",fd,[(te(!0),ue(xe,null,Lr(a.value,(P,T)=>(te(),ue("div",{key:T,class:"w-full gap-1 items-center justify-between flex flex-col"},[ne("div",cd,[ne("div",ud,[P.file.type.includes("audio")?(te(),Yt(ct(Rt),{key:0,icon:"microphone"})):Te("",!0),P.file.type.includes("video")?(te(),Yt(ct(Rt),{key:1,icon:"video"})):Te("",!0),ne("div",dd,qe(P.file.name)+" ("+qe(Math.round(P.file.size/1024/1024))+" MB)",1)]),ne("span",null,qe(P.status),1)]),ne("div",md,[P.keywords?(te(),ue("div",pd,[qt(" Keywords: "),(te(!0),ue(xe,null,Lr(P.keywords,$=>(te(),ue("div",{key:T},[ne("span",hd,qe($),1)]))),128))])):Te("",!0),P.text?(te(),ue("div",vd,qe(P.text),1)):Te("",!0)])]))),128))]))],32)):Te("",!0)],2)]))}}),[["styles",[".main{--primary: rgb(255, 54, 165);align-items:center;justify-content:center;text-align:center}.tag{border:2px solid var(--primary)}.dropzone-container{border:2px solid #e2e8f0}.hidden-input{opacity:0;overflow:hidden;position:absolute;width:1px;height:1px}.file-label{font-size:20px;display:block;cursor:pointer}.preview-container{display:flex;margin-top:2rem}.preview-card{display:flex;border:1px solid #a2a2a2;padding:5px;margin-left:5px}.preview-img{width:50px;height:50px;border-radius:5px;border:1px solid #a2a2a2;background-color:#a2a2a2}.delete{background-color:#fd6868!important}button:hover{box-shadow:0 0 14px #00000080!important;filter:saturate(140%)}button{transition:box-shadow .2s,background-color .5s;filter:.2s;background-color:#ff36a5;border-radius:10px;color:#111827;line-height:1.25rem;padding:.75rem 1rem;text-align:center;cursor:pointer;-moz-user-select:none;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button-39:focus{outline:2px solid transparent;outline-offset:2px}.button-39:focus-visible{box-shadow:none}"]]]));customElements.define("file-upload",gd)});
