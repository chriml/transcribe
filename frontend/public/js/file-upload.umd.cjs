(function(St){typeof define=="function"&&define.amd?define(St):St()})(function(){"use strict";/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function St(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const W={},At=[],ge=()=>{},So=()=>!1,hn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),hr=e=>e.startsWith("onUpdate:"),re=Object.assign,vr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ao=Object.prototype.hasOwnProperty,V=(e,t)=>Ao.call(e,t),R=Array.isArray,Ot=e=>vn(e)==="[object Map]",Ii=e=>vn(e)==="[object Set]",L=e=>typeof e=="function",ne=e=>typeof e=="string",lt=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",Ni=e=>(X(e)||L(e))&&L(e.then)&&L(e.catch),Ri=Object.prototype.toString,vn=e=>Ri.call(e),Oo=e=>vn(e).slice(8,-1),Mi=e=>vn(e)==="[object Object]",gr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ut=St(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ko=/-(\w)/g,Ue=gn(e=>e.replace(ko,(t,n)=>n?n.toUpperCase():"")),Co=/\B([A-Z])/g,Ee=gn(e=>e.replace(Co,"-$1").toLowerCase()),Di=gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),br=gn(e=>e?`on${Di(e)}`:""),Xe=(e,t)=>!Object.is(e,t),_r=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ui=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Po=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Li=e=>{const t=ne(e)?Number(e):NaN;return isNaN(t)?e:t};let Fi;const ji=()=>Fi||(Fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kt(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ne(r)?Ro(r):kt(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(ne(e)||X(e))return e}const To=/;(?![^(]*\))/g,Io=/:([^]+)/,No=/\/\*[^]*?\*\//g;function Ro(e){const t={};return e.replace(No,"").split(To).forEach(n=>{if(n){const r=n.split(Io);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function bn(e){let t="";if(ne(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=bn(e[n]);r&&(t+=r+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Mo=St("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function Hi(e){return!!e||e===""}const qe=e=>ne(e)?e:e==null?"":R(e)||X(e)&&(e.toString===Ri||!L(e.toString))?JSON.stringify(e,Vi,2):String(e),Vi=(e,t)=>t&&t.__v_isRef?Vi(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[yr(r,a)+" =>"]=i,n),{})}:Ii(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>yr(n))}:lt(t)?yr(t):X(t)&&!R(t)&&!Mi(t)?String(t):t,yr=(e,t="")=>{var n;return lt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Se;class Do{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Uo(e,t=Se){t&&t.active&&t.effects.push(e)}function Lo(){return Se}let ct;class xr{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Uo(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Le();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Fo(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Fe()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Je,n=ct;try{return Je=!0,ct=this,this._runnings++,zi(this),this.fn()}finally{$i(this),this._runnings--,ct=n,Je=t}}stop(){this.active&&(zi(this),$i(this),this.onStop&&this.onStop(),this.active=!1)}}function Fo(e){return e.value}function zi(e){e._trackId++,e._depsLength=0}function $i(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Bi(e.deps[t],e);e.deps.length=e._depsLength}}function Bi(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Je=!0,wr=0;const Ki=[];function Le(){Ki.push(Je),Je=!1}function Fe(){const e=Ki.pop();Je=e===void 0?!0:e}function Er(){wr++}function Sr(){for(wr--;!wr&&Ar.length;)Ar.shift()()}function Wi(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Bi(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Ar=[];function Gi(e,t,n){Er();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ar.push(r.scheduler)))}Sr()}const Yi=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Or=new WeakMap,ft=Symbol(""),kr=Symbol("");function pe(e,t,n){if(Je&&ct){let r=Or.get(e);r||Or.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Yi(()=>r.delete(n))),Wi(ct,i)}}function je(e,t,n,r,i,a){const s=Or.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&R(e)){const l=Number(r);s.forEach((f,u)=>{(u==="length"||!lt(u)&&u>=l)&&o.push(f)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":R(e)?gr(n)&&o.push(s.get("length")):(o.push(s.get(ft)),Ot(e)&&o.push(s.get(kr)));break;case"delete":R(e)||(o.push(s.get(ft)),Ot(e)&&o.push(s.get(kr)));break;case"set":Ot(e)&&o.push(s.get(ft));break}Er();for(const l of o)l&&Gi(l,4);Sr()}const jo=St("__proto__,__v_isRef,__isVue"),Xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(lt)),qi=Ho();function Ho(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=z(this);for(let a=0,s=this.length;a<s;a++)pe(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(z)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Le(),Er();const r=z(this)[t].apply(this,n);return Sr(),Fe(),r}}),e}function Vo(e){lt(e)||(e=String(e));const t=z(this);return pe(t,"has",e),t.hasOwnProperty(e)}class Ji{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?oa:sa:a?aa:ia).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const s=R(t);if(!i){if(s&&V(qi,n))return Reflect.get(qi,n,r);if(n==="hasOwnProperty")return Vo}const o=Reflect.get(t,n,r);return(lt(n)?Xi.has(n):jo(n))||(i||pe(t,"get",n),a)?o:fe(o)?s&&gr(n)?o:o.value:X(o)?i?la(o):Pr(o):o}}class Zi extends Ji{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];if(!this._isShallow){const l=Ft(a);if(!Cn(r)&&!Ft(r)&&(a=z(a),r=z(r)),!R(t)&&fe(a)&&!fe(r))return l?!1:(a.value=r,!0)}const s=R(t)&&gr(n)?Number(n)<t.length:V(t,n),o=Reflect.set(t,n,r,i);return t===z(i)&&(s?Xe(r,a)&&je(t,"set",n,r):je(t,"add",n,r)),o}deleteProperty(t,n){const r=V(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&je(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!lt(n)||!Xi.has(n))&&pe(t,"has",n),r}ownKeys(t){return pe(t,"iterate",R(t)?"length":ft),Reflect.ownKeys(t)}}class Qi extends Ji{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const zo=new Zi,$o=new Qi,Bo=new Zi(!0),Ko=new Qi(!0),Cr=e=>e,_n=e=>Reflect.getPrototypeOf(e);function yn(e,t,n=!1,r=!1){e=e.__v_raw;const i=z(e),a=z(t);n||(Xe(t,a)&&pe(i,"get",t),pe(i,"get",a));const{has:s}=_n(i),o=r?Cr:n?Tr:jt;if(s.call(i,t))return o(e.get(t));if(s.call(i,a))return o(e.get(a));e!==i&&e.get(t)}function xn(e,t=!1){const n=this.__v_raw,r=z(n),i=z(e);return t||(Xe(e,i)&&pe(r,"has",e),pe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function wn(e,t=!1){return e=e.__v_raw,!t&&pe(z(e),"iterate",ft),Reflect.get(e,"size",e)}function ea(e){e=z(e);const t=z(this);return _n(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function ta(e,t){t=z(t);const n=z(this),{has:r,get:i}=_n(n);let a=r.call(n,e);a||(e=z(e),a=r.call(n,e));const s=i.call(n,e);return n.set(e,t),a?Xe(t,s)&&je(n,"set",e,t):je(n,"add",e,t),this}function na(e){const t=z(this),{has:n,get:r}=_n(t);let i=n.call(t,e);i||(e=z(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&je(t,"delete",e,void 0),a}function ra(){const e=z(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function En(e,t){return function(r,i){const a=this,s=a.__v_raw,o=z(s),l=t?Cr:e?Tr:jt;return!e&&pe(o,"iterate",ft),s.forEach((f,u)=>r.call(i,l(f),l(u),a))}}function Sn(e,t,n){return function(...r){const i=this.__v_raw,a=z(i),s=Ot(a),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,f=i[e](...r),u=n?Cr:t?Tr:jt;return!t&&pe(a,"iterate",l?kr:ft),{next(){const{value:m,done:b}=f.next();return b?{value:m,done:b}:{value:o?[u(m[0]),u(m[1])]:u(m),done:b}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Wo(){const e={get(a){return yn(this,a)},get size(){return wn(this)},has:xn,add:ea,set:ta,delete:na,clear:ra,forEach:En(!1,!1)},t={get(a){return yn(this,a,!1,!0)},get size(){return wn(this)},has:xn,add:ea,set:ta,delete:na,clear:ra,forEach:En(!1,!0)},n={get(a){return yn(this,a,!0)},get size(){return wn(this,!0)},has(a){return xn.call(this,a,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:En(!0,!1)},r={get(a){return yn(this,a,!0,!0)},get size(){return wn(this,!0)},has(a){return xn.call(this,a,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:En(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Sn(a,!1,!1),n[a]=Sn(a,!0,!1),t[a]=Sn(a,!1,!0),r[a]=Sn(a,!0,!0)}),[e,n,t,r]}const[Go,Yo,Xo,qo]=Wo();function An(e,t){const n=t?e?qo:Xo:e?Yo:Go;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(V(n,i)&&i in r?n:r,i,a)}const Jo={get:An(!1,!1)},Zo={get:An(!1,!0)},Qo={get:An(!0,!1)},el={get:An(!0,!0)},ia=new WeakMap,aa=new WeakMap,sa=new WeakMap,oa=new WeakMap;function tl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nl(e){return e.__v_skip||!Object.isExtensible(e)?0:tl(Oo(e))}function Pr(e){return Ft(e)?e:kn(e,!1,zo,Jo,ia)}function rl(e){return kn(e,!1,Bo,Zo,aa)}function la(e){return kn(e,!0,$o,Qo,sa)}function On(e){return kn(e,!0,Ko,el,oa)}function kn(e,t,n,r,i){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const s=nl(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return i.set(e,o),o}function Lt(e){return Ft(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function Cn(e){return!!(e&&e.__v_isShallow)}function ca(e){return e?!!e.__v_raw:!1}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function il(e){return Object.isExtensible(e)&&Ui(e,"__v_skip",!0),e}const jt=e=>X(e)?Pr(e):e,Tr=e=>X(e)?la(e):e;class fa{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new xr(()=>t(this._value),()=>Pn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=z(this);return(!t._cacheable||t.effect.dirty)&&Xe(t._value,t._value=t.effect.run())&&Pn(t,4),ua(t),t.effect._dirtyLevel>=2&&Pn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function al(e,t,n=!1){let r,i;const a=L(e);return a?(r=e,i=ge):(r=e.get,i=e.set),new fa(r,i,a||!i,n)}function ua(e){var t;Je&&ct&&(e=z(e),Wi(ct,(t=e.dep)!=null?t:e.dep=Yi(()=>e.dep=void 0,e instanceof fa?e:void 0)))}function Pn(e,t=4,n){e=z(e);const r=e.dep;r&&Gi(r,t)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Ht(e){return sl(e,!1)}function sl(e,t){return fe(e)?e:new ol(e,t)}class ol{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:z(t),this._value=n?t:jt(t)}get value(){return ua(this),this._value}set value(t){const n=this.__v_isShallow||Cn(t)||Ft(t);t=n?t:z(t),Xe(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:jt(t),Pn(this,4))}}function Qe(e){return fe(e)?e.value:e}const ll={get:(e,t,n)=>Qe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function da(e){return Lt(e)?e:new Proxy(e,ll)}var et={NVM_INC:"/Users/cm/.nvm/versions/node/v22.0.0/include/node",MANPATH:"/Users/cm/.nvm/versions/node/v22.0.0/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/Users/cm/.nvm/versions/node/v22.0.0/bin/node",INIT_CWD:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_CD_FLAGS:"-q",TERM:"xterm-256color",SHELL:"/bin/zsh",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/",npm_config_global_prefix:"/Users/cm/.nvm/versions/node/v22.0.0",TERM_PROGRAM_VERSION:"1.88.1",ZDOTDIR:"/Users/cm",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_DIR:"/Users/cm/.nvm",USER:"cm",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/Users/cm/.nvm/versions/node/v22.0.0/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/bin/npm-cli.js",npm_config_fetch_retry_mintimeout:"20000",PATH:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v22.0.0/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin",npm_package_json:"/Users/cm/Documents/workspace/transcribe/frontend/package.json",npm_config_userconfig:"/Users/cm/.npmrc",npm_config_init_module:"/Users/cm/.npm-init.js",USER_ZDOTDIR:"/Users/cm",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/cm/Documents/workspace/transcribe/frontend",npm_lifecycle_event:"build:components",EDITOR:"vi",npm_package_name:"frontend",LANG:"en_US.UTF-8",npm_config_npm_version:"10.5.1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",XPC_FLAGS:"0x0",npm_config_node_gyp:"/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.1.0",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/cm",npm_config_fetch_retry_maxtimeout:"120000",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/cm/.npm",LOGNAME:"cm",npm_lifecycle_script:"vue-tsc --noEmit && vite build --config vite.comp.config.js",VSCODE_GIT_IPC_HANDLE:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock",NVM_BIN:"/Users/cm/.nvm/versions/node/v22.0.0/bin",npm_config_user_agent:"npm/10.5.1 node/v22.0.0 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/Users/cm/.nvm/versions/node/v22.0.0/bin/node",npm_config_prefix:"/Users/cm/.nvm/versions/node/v22.0.0",COLORTERM:"truecolor",_:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite",NODE_ENV:"production"};const Vt=[];function cl(e,...t){Le();const n=Vt.length?Vt[Vt.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=fl();if(r)He(r,n,11,[e+t.map(a=>{var s,o;return(o=(s=a.toString)==null?void 0:s.call(a))!=null?o:JSON.stringify(a)}).join(""),n&&n.proxy,i.map(({vnode:a})=>`at <${ns(n,a.type)}>`).join(`
`),i]);else{const a=[`[Vue warn]: ${e}`,...t];i.length&&a.push(`
`,...ul(i)),console.warn(...a)}Fe()}function fl(){let e=Vt[Vt.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function ul(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...dl(n))}),t}function dl({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,i=` at <${ns(e.component,e.type,r)}`,a=">"+n;return e.props?[i,...ml(e.props),a]:[i+a]}function ml(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...ma(r,e[r]))}),n.length>3&&t.push(" ..."),t}function ma(e,t,n){return ne(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:fe(t)?(t=ma(e,z(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):L(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=z(t),n?t:[`${e}=`,t])}function He(e,t,n,r){try{return r?e(...r):e()}catch(i){Tn(i,t,n)}}function Ae(e,t,n,r){if(L(e)){const i=He(e,t,n,r);return i&&Ni(i)&&i.catch(a=>{Tn(a,t,n)}),i}if(R(e)){const i=[];for(let a=0;a<e.length;a++)i.push(Ae(e[a],t,n,r));return i}}function Tn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const s=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,s,o)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){Le(),He(l,null,10,[e,s,o]),Fe();return}}pl(e,n,i,r)}function pl(e,t,n,r=!0){console.error(e)}let zt=!1,Ir=!1;const le=[];let Te=0;const Ct=[];let tt=null,ut=0;const pa=Promise.resolve();let Nr=null;function ha(e){const t=Nr||pa;return e?t.then(this?e.bind(this):e):t}function hl(e){let t=Te+1,n=le.length;for(;t<n;){const r=t+n>>>1,i=le[r],a=$t(i);a<e||a===e&&i.pre?t=r+1:n=r}return t}function Rr(e){(!le.length||!le.includes(e,zt&&e.allowRecurse?Te+1:Te))&&(e.id==null?le.push(e):le.splice(hl(e.id),0,e),va())}function va(){!zt&&!Ir&&(Ir=!0,Nr=pa.then(_a))}function vl(e){const t=le.indexOf(e);t>Te&&le.splice(t,1)}function gl(e){R(e)?Ct.push(...e):(!tt||!tt.includes(e,e.allowRecurse?ut+1:ut))&&Ct.push(e),va()}function ga(e,t,n=zt?Te+1:0){for(;n<le.length;n++){const r=le[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;le.splice(n,1),n--,r()}}}function ba(e){if(Ct.length){const t=[...new Set(Ct)].sort((n,r)=>$t(n)-$t(r));if(Ct.length=0,tt){tt.push(...t);return}for(tt=t,ut=0;ut<tt.length;ut++)tt[ut]();tt=null,ut=0}}const $t=e=>e.id==null?1/0:e.id,bl=(e,t)=>{const n=$t(e)-$t(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function _a(e){Ir=!1,zt=!0,le.sort(bl);const t=ge;try{for(Te=0;Te<le.length;Te++){const n=le[Te];n&&n.active!==!1&&(et.NODE_ENV!=="production"&&t(n),He(n,null,14))}}finally{Te=0,le.length=0,ba(),zt=!1,Nr=null,(le.length||Ct.length)&&_a()}}function _l(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let i=n;const a=t.startsWith("update:"),s=a&&t.slice(7);if(s&&s in r){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:b}=r[u]||W;b&&(i=n.map(h=>ne(h)?h.trim():h)),m&&(i=n.map(Po))}let o,l=r[o=br(t)]||r[o=br(Ue(t))];!l&&a&&(l=r[o=br(Ee(t))]),l&&Ae(l,e,6,i);const f=r[o+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ae(f,e,6,i)}}function ya(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let s={},o=!1;if(!L(e)){const l=f=>{const u=ya(f,t,!0);u&&(o=!0,re(s,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!o?(X(e)&&r.set(e,null),null):(R(a)?a.forEach(l=>s[l]=null):re(s,a),X(e)&&r.set(e,s),s)}function In(e,t){return!e||!hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Ee(t))||V(e,t))}let be=null,xa=null;function Nn(e){const t=be;return be=e,xa=e&&e.type.__scopeId||null,t}function yl(e,t=be,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Ya(-1);const a=Nn(t);let s;try{s=e(...i)}finally{Nn(a),r._d&&Ya(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Cd(){}function Mr(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:o,emit:l,render:f,renderCache:u,props:m,data:b,setupState:h,ctx:M,inheritAttrs:O}=e,j=Nn(e);let E,A;try{if(n.shapeFlag&4){const F=i||r,$=et.NODE_ENV!=="production"&&h.__isScriptSetup?new Proxy(F,{get(U,J,de){return cl(`Property '${String(J)}' was accessed via 'this'. Avoid using 'this' in templates.`),Reflect.get(U,J,de)}}):F;E=Ie(f.call($,F,u,et.NODE_ENV!=="production"?On(m):m,h,b,M)),A=o}else{const F=t;et.NODE_ENV,E=Ie(F.length>1?F(et.NODE_ENV!=="production"?On(m):m,et.NODE_ENV!=="production"?{get attrs(){return On(o)},slots:s,emit:l}:{attrs:o,slots:s,emit:l}):F(et.NODE_ENV!=="production"?On(m):m,null)),A=t.props?o:xl(o)}}catch(F){Gt.length=0,Tn(F,e,1),E=se(ht)}let T=E;if(A&&O!==!1){const F=Object.keys(A),{shapeFlag:$}=T;F.length&&$&7&&(a&&F.some(hr)&&(A=wl(A,a)),T=Pt(T,A,!1,!0))}return n.dirs&&(T=Pt(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),E=T,Nn(j),E}const xl=e=>{let t;for(const n in e)(n==="class"||n==="style"||hn(n))&&((t||(t={}))[n]=e[n]);return t},wl=(e,t)=>{const n={};for(const r in e)(!hr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function El(e,t,n){const{props:r,children:i,component:a}=e,{props:s,children:o,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wa(r,s,f):!!s;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const b=u[m];if(s[b]!==r[b]&&!In(f,b))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?wa(r,s,f):!0:!!s;return!1}function wa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!In(n,a))return!0}return!1}function Sl({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Al=Symbol.for("v-ndc"),Ol=e=>e.__isSuspense;function kl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):gl(e)}const Cl=Symbol.for("v-scx"),Pl=()=>Fn(Cl),Rn={};function Mn(e,t,n){return Ea(e,t,n)}function Ea(e,t,{immediate:n,deep:r,flush:i,once:a,onTrack:s,onTrigger:o}=W){if(t&&a){const U=t;t=(...J)=>{U(...J),$()}}const l=oe,f=U=>r===!0?U:dt(U,r===!1?1:void 0);let u,m=!1,b=!1;if(fe(e)?(u=()=>e.value,m=Cn(e)):Lt(e)?(u=()=>f(e),m=!0):R(e)?(b=!0,m=e.some(U=>Lt(U)||Cn(U)),u=()=>e.map(U=>{if(fe(U))return U.value;if(Lt(U))return f(U);if(L(U))return He(U,l,2)})):L(e)?t?u=()=>He(e,l,2):u=()=>(h&&h(),Ae(e,l,3,[M])):u=ge,t&&r){const U=u;u=()=>dt(U())}let h,M=U=>{h=T.onStop=()=>{He(U,l,4),h=T.onStop=void 0}},O;if(zn)if(M=ge,t?n&&Ae(t,l,3,[u(),b?[]:void 0,M]):u(),i==="sync"){const U=Pl();O=U.__watcherHandles||(U.__watcherHandles=[])}else return ge;let j=b?new Array(e.length).fill(Rn):Rn;const E=()=>{if(!(!T.active||!T.dirty))if(t){const U=T.run();(r||m||(b?U.some((J,de)=>Xe(J,j[de])):Xe(U,j)))&&(h&&h(),Ae(t,l,3,[U,j===Rn?void 0:b&&j[0]===Rn?[]:j,M]),j=U)}else T.run()};E.allowRecurse=!!t;let A;i==="sync"?A=E:i==="post"?A=()=>he(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),A=()=>Rr(E));const T=new xr(u,ge,A),F=Lo(),$=()=>{T.stop(),F&&vr(F.effects,T)};return t?n?E():j=T.run():i==="post"?he(T.run.bind(T),l&&l.suspense):T.run(),O&&O.push($),$}function Tl(e,t,n){const r=this.proxy,i=ne(e)?e.includes(".")?Sa(r,e):()=>r[e]:e.bind(r,r);let a;L(t)?a=t:(a=t.handler,n=t);const s=Zt(this),o=Ea(i,a.bind(r),n);return s(),o}function Sa(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function dt(e,t=1/0,n){if(t<=0||!X(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,fe(e))dt(e.value,t,n);else if(R(e))for(let r=0;r<e.length;r++)dt(e[r],t,n);else if(Ii(e)||Ot(e))e.forEach(r=>{dt(r,t,n)});else if(Mi(e))for(const r in e)dt(e[r],t,n);return e}function Il(e,t){if(be===null)return e;const n=$n(be)||be.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,s,o,l=W]=t[i];a&&(L(a)&&(a={mounted:a,updated:a}),a.deep&&dt(s),r.push({dir:a,instance:n,value:s,oldValue:void 0,arg:o,modifiers:l}))}return e}function mt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let s=0;s<i.length;s++){const o=i[s];a&&(o.oldValue=a[s].value);let l=o.dir[r];l&&(Le(),Ae(l,n,8,[e.el,o,e,t]),Fe())}}/*! #__NO_SIDE_EFFECTS__ */function Dr(e,t){return L(e)?re({name:e.name},t,{setup:e}):e}const Dn=e=>!!e.type.__asyncLoader,Aa=e=>e.type.__isKeepAlive;function Nl(e,t){Oa(e,"a",t)}function Rl(e,t){Oa(e,"da",t)}function Oa(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Un(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Aa(i.parent.vnode)&&Ml(r,t,n,i),i=i.parent}}function Ml(e,t,n,r){const i=Un(t,e,r,!0);ka(()=>{vr(r[t],i)},n)}function Un(e,t,n=oe,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Le();const o=Zt(n),l=Ae(t,n,e,s);return o(),Fe(),l});return r?i.unshift(a):i.push(a),a}}const Ve=e=>(t,n=oe)=>(!zn||e==="sp")&&Un(e,(...r)=>t(...r),n),Dl=Ve("bm"),Ul=Ve("m"),Ll=Ve("bu"),Fl=Ve("u"),jl=Ve("bum"),ka=Ve("um"),Hl=Ve("sp"),Vl=Ve("rtg"),zl=Ve("rtc");function $l(e,t=oe){Un("ec",e,t)}function Ur(e,t,n,r){let i;const a=n;if(R(e)||ne(e)){i=new Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=t(e[s],s,void 0,a)}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,a)}else if(X(e))if(e[Symbol.iterator])i=Array.from(e,(s,o)=>t(s,o,void 0,a));else{const s=Object.keys(e);i=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const f=s[o];i[o]=t(e[f],f,o,a)}}else i=[];return i}const Lr=e=>e?Za(e)?$n(e)||e.proxy:Lr(e.parent):null,Bt=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lr(e.parent),$root:e=>Lr(e.root),$emit:e=>e.emit,$options:e=>Hr(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Rr(e.update)}),$nextTick:e=>e.n||(e.n=ha.bind(e.proxy)),$watch:e=>Tl.bind(e)}),Fr=(e,t)=>e!==W&&!e.__isScriptSetup&&V(e,t),Bl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:a,accessCache:s,type:o,appContext:l}=e;let f;if(t[0]!=="$"){const h=s[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Fr(r,t))return s[t]=1,r[t];if(i!==W&&V(i,t))return s[t]=2,i[t];if((f=e.propsOptions[0])&&V(f,t))return s[t]=3,a[t];if(n!==W&&V(n,t))return s[t]=4,n[t];jr&&(s[t]=0)}}const u=Bt[t];let m,b;if(u)return t==="$attrs"&&pe(e.attrs,"get",""),u(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==W&&V(n,t))return s[t]=4,n[t];if(b=l.config.globalProperties,V(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Fr(i,t)?(i[t]=n,!0):r!==W&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},s){let o;return!!n[s]||e!==W&&V(e,s)||Fr(t,s)||(o=a[0])&&V(o,s)||V(r,s)||V(Bt,s)||V(i.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ca(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let jr=!0;function Kl(e){const t=Hr(e),n=e.proxy,r=e.ctx;jr=!1,t.beforeCreate&&Pa(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:s,watch:o,provide:l,inject:f,created:u,beforeMount:m,mounted:b,beforeUpdate:h,updated:M,activated:O,deactivated:j,beforeDestroy:E,beforeUnmount:A,destroyed:T,unmounted:F,render:$,renderTracked:U,renderTriggered:J,errorCaptured:de,serverPrefetch:we,expose:Ge,inheritAttrs:dn,components:ur,directives:dr,filters:Pi}=t;if(f&&Wl(f,r,null),s)for(const Z in s){const K=s[Z];L(K)&&(r[Z]=K.bind(n))}if(i){const Z=i.call(n,n);X(Z)&&(e.data=Pr(Z))}if(jr=!0,a)for(const Z in a){const K=a[Z],wt=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):ge,mr=!L(K)&&L(K.set)?K.set.bind(n):ge,Et=vt({get:wt,set:mr});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Me=>Et.value=Me})}if(o)for(const Z in o)Ta(o[Z],r,n,Z);if(l){const Z=L(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{Zl(K,Z[K])})}u&&Pa(u,e,"c");function me(Z,K){R(K)?K.forEach(wt=>Z(wt.bind(n))):K&&Z(K.bind(n))}if(me(Dl,m),me(Ul,b),me(Ll,h),me(Fl,M),me(Nl,O),me(Rl,j),me($l,de),me(zl,U),me(Vl,J),me(jl,A),me(ka,F),me(Hl,we),R(Ge))if(Ge.length){const Z=e.exposed||(e.exposed={});Ge.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:wt=>n[K]=wt})})}else e.exposed||(e.exposed={});$&&e.render===ge&&(e.render=$),dn!=null&&(e.inheritAttrs=dn),ur&&(e.components=ur),dr&&(e.directives=dr)}function Wl(e,t,n=ge){R(e)&&(e=Vr(e));for(const r in e){const i=e[r];let a;X(i)?"default"in i?a=Fn(i.from||r,i.default,!0):a=Fn(i.from||r):a=Fn(i),fe(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):t[r]=a}}function Pa(e,t,n){Ae(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ta(e,t,n,r){const i=r.includes(".")?Sa(n,r):()=>n[r];if(ne(e)){const a=t[e];L(a)&&Mn(i,a)}else if(L(e))Mn(i,e.bind(n));else if(X(e))if(R(e))e.forEach(a=>Ta(a,t,n,r));else{const a=L(e.handler)?e.handler.bind(n):t[e.handler];L(a)&&Mn(i,a,e)}}function Hr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,o=a.get(t);let l;return o?l=o:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>Ln(l,f,s,!0)),Ln(l,t,s)),X(t)&&a.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Ln(e,a,n,!0),i&&i.forEach(s=>Ln(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Gl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Gl={data:Ia,props:Na,emits:Na,methods:Kt,computed:Kt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:Kt,directives:Kt,watch:Xl,provide:Ia,inject:Yl};function Ia(e,t){return t?e?function(){return re(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Yl(e,t){return Kt(Vr(e),Vr(t))}function Vr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Kt(e,t){return e?re(Object.create(null),e,t):t}function Na(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:re(Object.create(null),Ca(e),Ca(t??{})):t}function Xl(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function Ra(){return{app:null,config:{isNativeTag:So,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ql=0;function Jl(e,t){return function(r,i=null){L(r)||(r=re({},r)),i!=null&&!X(i)&&(i=null);const a=Ra(),s=new WeakSet;let o=!1;const l=a.app={_uid:ql++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Ac,get config(){return a.config},set config(f){},use(f,...u){return s.has(f)||(f&&L(f.install)?(s.add(f),f.install(l,...u)):L(f)&&(s.add(f),f(l,...u))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,u){return u?(a.components[f]=u,l):a.components[f]},directive(f,u){return u?(a.directives[f]=u,l):a.directives[f]},mount(f,u,m){if(!o){const b=se(r,i);return b.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),u&&t?t(b,f):e(b,f,m),o=!0,l._container=f,f.__vue_app__=l,$n(b.component)||b.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return a.provides[f]=u,l},runWithContext(f){const u=Wt;Wt=l;try{return f()}finally{Wt=u}}};return l}}let Wt=null;function Zl(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function Fn(e,t,n=!1){const r=oe||be;if(r||Wt){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Wt._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}const Ma={},Da=()=>Object.create(Ma),Ua=e=>Object.getPrototypeOf(e)===Ma;function Ql(e,t,n,r=!1){const i={},a=Da();e.propsDefaults=Object.create(null),La(e,t,i,a);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=r?i:rl(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ec(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:s}}=e,o=z(i),[l]=e.propsOptions;let f=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let b=u[m];if(In(e.emitsOptions,b))continue;const h=t[b];if(l)if(V(a,b))h!==a[b]&&(a[b]=h,f=!0);else{const M=Ue(b);i[M]=zr(l,o,M,h,e,!1)}else h!==a[b]&&(a[b]=h,f=!0)}}}else{La(e,t,i,a)&&(f=!0);let u;for(const m in o)(!t||!V(t,m)&&((u=Ee(m))===m||!V(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=zr(l,o,m,void 0,e,!0)):delete i[m]);if(a!==o)for(const m in a)(!t||!V(t,m))&&(delete a[m],f=!0)}f&&je(e.attrs,"set","")}function La(e,t,n,r){const[i,a]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(Ut(l))continue;const f=t[l];let u;i&&V(i,u=Ue(l))?!a||!a.includes(u)?n[u]=f:(o||(o={}))[u]=f:In(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,s=!0)}if(a){const l=z(n),f=o||W;for(let u=0;u<a.length;u++){const m=a[u];n[m]=zr(i,l,m,f[m],e,!V(f,m))}}return s}function zr(e,t,n,r,i,a){const s=e[n];if(s!=null){const o=V(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&L(l)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const u=Zt(i);r=f[n]=l.call(null,t),u()}}else r=l}s[0]&&(a&&!o?r=!1:s[1]&&(r===""||r===Ee(n))&&(r=!0))}return r}function Fa(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,s={},o=[];let l=!1;if(!L(e)){const u=m=>{l=!0;const[b,h]=Fa(m,t,!0);re(s,b),h&&o.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return X(e)&&r.set(e,At),At;if(R(a))for(let u=0;u<a.length;u++){const m=Ue(a[u]);ja(m)&&(s[m]=W)}else if(a)for(const u in a){const m=Ue(u);if(ja(m)){const b=a[u],h=s[m]=R(b)||L(b)?{type:b}:re({},b);if(h){const M=za(Boolean,h.type),O=za(String,h.type);h[0]=M>-1,h[1]=O<0||M<O,(M>-1||V(h,"default"))&&o.push(m)}}}const f=[s,o];return X(e)&&r.set(e,f),f}function ja(e){return e[0]!=="$"&&!Ut(e)}function Ha(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Va(e,t){return Ha(e)===Ha(t)}function za(e,t){return R(t)?t.findIndex(n=>Va(n,e)):L(t)&&Va(t,e)?0:-1}const $a=e=>e[0]==="_"||e==="$stable",$r=e=>R(e)?e.map(Ie):[Ie(e)],tc=(e,t,n)=>{if(t._n)return t;const r=yl((...i)=>(et.NODE_ENV!=="production"&&oe&&(!n||(n.root,oe.root)),$r(t(...i))),n);return r._c=!1,r},Ba=(e,t,n)=>{const r=e._ctx;for(const i in e){if($a(i))continue;const a=e[i];if(L(a))t[i]=tc(i,a,r);else if(a!=null){const s=$r(a);t[i]=()=>s}}},Ka=(e,t)=>{const n=$r(t);e.slots.default=()=>n},nc=(e,t)=>{const n=e.slots=Da();if(e.vnode.shapeFlag&32){const r=t._;r?(re(n,t),Ui(n,"_",r,!0)):Ba(t,n)}else t&&Ka(e,t)},rc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,s=W;if(r.shapeFlag&32){const o=t._;o?n&&o===1?a=!1:(re(i,t),!n&&o===1&&delete i._):(a=!t.$stable,Ba(t,i)),s=t}else t&&(Ka(e,t),s={default:1});if(a)for(const o in i)!$a(o)&&s[o]==null&&delete i[o]};function Br(e,t,n,r,i=!1){if(R(e)){e.forEach((b,h)=>Br(b,t&&(R(t)?t[h]:t),n,r,i));return}if(Dn(r)&&!i)return;const a=r.shapeFlag&4?$n(r.component)||r.component.proxy:r.el,s=i?null:a,{i:o,r:l}=e,f=t&&t.r,u=o.refs===W?o.refs={}:o.refs,m=o.setupState;if(f!=null&&f!==l&&(ne(f)?(u[f]=null,V(m,f)&&(m[f]=null)):fe(f)&&(f.value=null)),L(l))He(l,o,12,[s,u]);else{const b=ne(l),h=fe(l);if(b||h){const M=()=>{if(e.f){const O=b?V(m,l)?m[l]:u[l]:l.value;i?R(O)&&vr(O,a):R(O)?O.includes(a)||O.push(a):b?(u[l]=[a],V(m,l)&&(m[l]=u[l])):(l.value=[a],e.k&&(u[e.k]=l.value))}else b?(u[l]=s,V(m,l)&&(m[l]=s)):h&&(l.value=s,e.k&&(u[e.k]=s))};s?(M.id=-1,he(M,n)):M()}}}const he=kl;function ic(e){return ac(e)}function ac(e,t){const n=ji();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:s,createText:o,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:b,setScopeId:h=ge,insertStaticContent:M}=e,O=(c,d,p,v=null,g=null,x=null,S=void 0,y=null,w=!!d.dynamicChildren)=>{if(c===d)return;c&&!qt(c,d)&&(v=pr(c),Me(c,g,x,!0),c=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:_,ref:C,shapeFlag:N}=d;switch(_){case jn:j(c,d,p,v);break;case ht:E(c,d,p,v);break;case Wr:c==null&&A(d,p,v,S);break;case xe:ur(c,d,p,v,g,x,S,y,w);break;default:N&1?$(c,d,p,v,g,x,S,y,w):N&6?dr(c,d,p,v,g,x,S,y,w):(N&64||N&128)&&_.process(c,d,p,v,g,x,S,y,w,mn)}C!=null&&g&&Br(C,c&&c.ref,x,d||c,!d)},j=(c,d,p,v)=>{if(c==null)r(d.el=o(d.children),p,v);else{const g=d.el=c.el;d.children!==c.children&&f(g,d.children)}},E=(c,d,p,v)=>{c==null?r(d.el=l(d.children||""),p,v):d.el=c.el},A=(c,d,p,v)=>{[c.el,c.anchor]=M(c.children,d,p,v,c.el,c.anchor)},T=({el:c,anchor:d},p,v)=>{let g;for(;c&&c!==d;)g=b(c),r(c,p,v),c=g;r(d,p,v)},F=({el:c,anchor:d})=>{let p;for(;c&&c!==d;)p=b(c),i(c),c=p;i(d)},$=(c,d,p,v,g,x,S,y,w)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),c==null?U(d,p,v,g,x,S,y,w):we(c,d,g,x,S,y,w)},U=(c,d,p,v,g,x,S,y)=>{let w,_;const{props:C,shapeFlag:N,transition:I,dirs:D}=c;if(w=c.el=s(c.type,x,C&&C.is,C),N&8?u(w,c.children):N&16&&de(c.children,w,null,v,g,Kr(c,x),S,y),D&&mt(c,null,v,"created"),J(w,c,c.scopeId,S,v),C){for(const B in C)B!=="value"&&!Ut(B)&&a(w,B,null,C[B],x,c.children,v,g,Ye);"value"in C&&a(w,"value",null,C.value,x),(_=C.onVnodeBeforeMount)&&Ne(_,v,c)}D&&mt(c,null,v,"beforeMount");const H=sc(g,I);H&&I.beforeEnter(w),r(w,d,p),((_=C&&C.onVnodeMounted)||H||D)&&he(()=>{_&&Ne(_,v,c),H&&I.enter(w),D&&mt(c,null,v,"mounted")},g)},J=(c,d,p,v,g)=>{if(p&&h(c,p),v)for(let x=0;x<v.length;x++)h(c,v[x]);if(g){let x=g.subTree;if(d===x){const S=g.vnode;J(c,S,S.scopeId,S.slotScopeIds,g.parent)}}},de=(c,d,p,v,g,x,S,y,w=0)=>{for(let _=w;_<c.length;_++){const C=c[_]=y?nt(c[_]):Ie(c[_]);O(null,C,d,p,v,g,x,S,y)}},we=(c,d,p,v,g,x,S)=>{const y=d.el=c.el;let{patchFlag:w,dynamicChildren:_,dirs:C}=d;w|=c.patchFlag&16;const N=c.props||W,I=d.props||W;let D;if(p&&pt(p,!1),(D=I.onVnodeBeforeUpdate)&&Ne(D,p,d,c),C&&mt(d,c,p,"beforeUpdate"),p&&pt(p,!0),_?Ge(c.dynamicChildren,_,y,p,v,Kr(d,g),x):S||K(c,d,y,null,p,v,Kr(d,g),x,!1),w>0){if(w&16)dn(y,d,N,I,p,v,g);else if(w&2&&N.class!==I.class&&a(y,"class",null,I.class,g),w&4&&a(y,"style",N.style,I.style,g),w&8){const H=d.dynamicProps;for(let B=0;B<H.length;B++){const q=H[B],ae=N[q],Pe=I[q];(Pe!==ae||q==="value")&&a(y,q,ae,Pe,g,c.children,p,v,Ye)}}w&1&&c.children!==d.children&&u(y,d.children)}else!S&&_==null&&dn(y,d,N,I,p,v,g);((D=I.onVnodeUpdated)||C)&&he(()=>{D&&Ne(D,p,d,c),C&&mt(d,c,p,"updated")},v)},Ge=(c,d,p,v,g,x,S)=>{for(let y=0;y<d.length;y++){const w=c[y],_=d[y],C=w.el&&(w.type===xe||!qt(w,_)||w.shapeFlag&70)?m(w.el):p;O(w,_,C,null,v,g,x,S,!0)}},dn=(c,d,p,v,g,x,S)=>{if(p!==v){if(p!==W)for(const y in p)!Ut(y)&&!(y in v)&&a(c,y,p[y],null,S,d.children,g,x,Ye);for(const y in v){if(Ut(y))continue;const w=v[y],_=p[y];w!==_&&y!=="value"&&a(c,y,_,w,S,d.children,g,x,Ye)}"value"in v&&a(c,"value",p.value,v.value,S)}},ur=(c,d,p,v,g,x,S,y,w)=>{const _=d.el=c?c.el:o(""),C=d.anchor=c?c.anchor:o("");let{patchFlag:N,dynamicChildren:I,slotScopeIds:D}=d;D&&(y=y?y.concat(D):D),c==null?(r(_,p,v),r(C,p,v),de(d.children||[],p,C,g,x,S,y,w)):N>0&&N&64&&I&&c.dynamicChildren?(Ge(c.dynamicChildren,I,p,g,x,S,y),(d.key!=null||g&&d===g.subTree)&&Wa(c,d,!0)):K(c,d,p,C,g,x,S,y,w)},dr=(c,d,p,v,g,x,S,y,w)=>{d.slotScopeIds=y,c==null?d.shapeFlag&512?g.ctx.activate(d,p,v,S,w):Pi(d,p,v,g,x,S,w):vo(c,d,w)},Pi=(c,d,p,v,g,x,S)=>{const y=c.component=hc(c,v,g);if(Aa(c)&&(y.ctx.renderer=mn),vc(y),y.asyncDep){if(g&&g.registerDep(y,me),!c.el){const w=y.subTree=se(ht);E(null,w,d,p)}}else me(y,c,d,p,g,x,S)},vo=(c,d,p)=>{const v=d.component=c.component;if(El(c,d,p))if(v.asyncDep&&!v.asyncResolved){Z(v,d,p);return}else v.next=d,vl(v.update),v.effect.dirty=!0,v.update();else d.el=c.el,v.vnode=d},me=(c,d,p,v,g,x,S)=>{const y=()=>{if(c.isMounted){let{next:C,bu:N,u:I,parent:D,vnode:H}=c;{const Dt=Ga(c);if(Dt){C&&(C.el=H.el,Z(c,C,S)),Dt.asyncDep.then(()=>{c.isUnmounted||y()});return}}let B=C,q;pt(c,!1),C?(C.el=H.el,Z(c,C,S)):C=H,N&&_r(N),(q=C.props&&C.props.onVnodeBeforeUpdate)&&Ne(q,D,C,H),pt(c,!0);const ae=Mr(c),Pe=c.subTree;c.subTree=ae,O(Pe,ae,m(Pe.el),pr(Pe),c,g,x),C.el=ae.el,B===null&&Sl(c,ae.el),I&&he(I,g),(q=C.props&&C.props.onVnodeUpdated)&&he(()=>Ne(q,D,C,H),g)}else{let C;const{el:N,props:I}=d,{bm:D,m:H,parent:B}=c,q=Dn(d);if(pt(c,!1),D&&_r(D),!q&&(C=I&&I.onVnodeBeforeMount)&&Ne(C,B,d),pt(c,!0),N&&yo){const ae=()=>{c.subTree=Mr(c),yo(N,c.subTree,c,g,null)};q?d.type.__asyncLoader().then(()=>!c.isUnmounted&&ae()):ae()}else{const ae=c.subTree=Mr(c);O(null,ae,p,v,c,g,x),d.el=ae.el}if(H&&he(H,g),!q&&(C=I&&I.onVnodeMounted)){const ae=d;he(()=>Ne(C,B,ae),g)}(d.shapeFlag&256||B&&Dn(B.vnode)&&B.vnode.shapeFlag&256)&&c.a&&he(c.a,g),c.isMounted=!0,d=p=v=null}},w=c.effect=new xr(y,ge,()=>Rr(_),c.scope),_=c.update=()=>{w.dirty&&w.run()};_.id=c.uid,pt(c,!0),_()},Z=(c,d,p)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,ec(c,d.props,v,p),rc(c,d.children,p),Le(),ga(c),Fe()},K=(c,d,p,v,g,x,S,y,w=!1)=>{const _=c&&c.children,C=c?c.shapeFlag:0,N=d.children,{patchFlag:I,shapeFlag:D}=d;if(I>0){if(I&128){mr(_,N,p,v,g,x,S,y,w);return}else if(I&256){wt(_,N,p,v,g,x,S,y,w);return}}D&8?(C&16&&Ye(_,g,x),N!==_&&u(p,N)):C&16?D&16?mr(_,N,p,v,g,x,S,y,w):Ye(_,g,x,!0):(C&8&&u(p,""),D&16&&de(N,p,v,g,x,S,y,w))},wt=(c,d,p,v,g,x,S,y,w)=>{c=c||At,d=d||At;const _=c.length,C=d.length,N=Math.min(_,C);let I;for(I=0;I<N;I++){const D=d[I]=w?nt(d[I]):Ie(d[I]);O(c[I],D,p,null,g,x,S,y,w)}_>C?Ye(c,g,x,!0,!1,N):de(d,p,v,g,x,S,y,w,N)},mr=(c,d,p,v,g,x,S,y,w)=>{let _=0;const C=d.length;let N=c.length-1,I=C-1;for(;_<=N&&_<=I;){const D=c[_],H=d[_]=w?nt(d[_]):Ie(d[_]);if(qt(D,H))O(D,H,p,null,g,x,S,y,w);else break;_++}for(;_<=N&&_<=I;){const D=c[N],H=d[I]=w?nt(d[I]):Ie(d[I]);if(qt(D,H))O(D,H,p,null,g,x,S,y,w);else break;N--,I--}if(_>N){if(_<=I){const D=I+1,H=D<C?d[D].el:v;for(;_<=I;)O(null,d[_]=w?nt(d[_]):Ie(d[_]),p,H,g,x,S,y,w),_++}}else if(_>I)for(;_<=N;)Me(c[_],g,x,!0),_++;else{const D=_,H=_,B=new Map;for(_=H;_<=I;_++){const ye=d[_]=w?nt(d[_]):Ie(d[_]);ye.key!=null&&B.set(ye.key,_)}let q,ae=0;const Pe=I-H+1;let Dt=!1,xo=0;const pn=new Array(Pe);for(_=0;_<Pe;_++)pn[_]=0;for(_=D;_<=N;_++){const ye=c[_];if(ae>=Pe){Me(ye,g,x,!0);continue}let De;if(ye.key!=null)De=B.get(ye.key);else for(q=H;q<=I;q++)if(pn[q-H]===0&&qt(ye,d[q])){De=q;break}De===void 0?Me(ye,g,x,!0):(pn[De-H]=_+1,De>=xo?xo=De:Dt=!0,O(ye,d[De],p,null,g,x,S,y,w),ae++)}const wo=Dt?oc(pn):At;for(q=wo.length-1,_=Pe-1;_>=0;_--){const ye=H+_,De=d[ye],Eo=ye+1<C?d[ye+1].el:v;pn[_]===0?O(null,De,p,Eo,g,x,S,y,w):Dt&&(q<0||_!==wo[q]?Et(De,p,Eo,2):q--)}}},Et=(c,d,p,v,g=null)=>{const{el:x,type:S,transition:y,children:w,shapeFlag:_}=c;if(_&6){Et(c.component.subTree,d,p,v);return}if(_&128){c.suspense.move(d,p,v);return}if(_&64){S.move(c,d,p,mn);return}if(S===xe){r(x,d,p);for(let N=0;N<w.length;N++)Et(w[N],d,p,v);r(c.anchor,d,p);return}if(S===Wr){T(c,d,p);return}if(v!==2&&_&1&&y)if(v===0)y.beforeEnter(x),r(x,d,p),he(()=>y.enter(x),g);else{const{leave:N,delayLeave:I,afterLeave:D}=y,H=()=>r(x,d,p),B=()=>{N(x,()=>{H(),D&&D()})};I?I(x,H,B):B()}else r(x,d,p)},Me=(c,d,p,v=!1,g=!1)=>{const{type:x,props:S,ref:y,children:w,dynamicChildren:_,shapeFlag:C,patchFlag:N,dirs:I}=c;if(y!=null&&Br(y,null,p,c,!0),C&256){d.ctx.deactivate(c);return}const D=C&1&&I,H=!Dn(c);let B;if(H&&(B=S&&S.onVnodeBeforeUnmount)&&Ne(B,d,c),C&6)Od(c.component,p,v);else{if(C&128){c.suspense.unmount(p,v);return}D&&mt(c,null,d,"beforeUnmount"),C&64?c.type.remove(c,d,p,g,mn,v):_&&(x!==xe||N>0&&N&64)?Ye(_,d,p,!1,!0):(x===xe&&N&384||!g&&C&16)&&Ye(w,d,p),v&&go(c)}(H&&(B=S&&S.onVnodeUnmounted)||D)&&he(()=>{B&&Ne(B,d,c),D&&mt(c,null,d,"unmounted")},p)},go=c=>{const{type:d,el:p,anchor:v,transition:g}=c;if(d===xe){Ad(p,v);return}if(d===Wr){F(c);return}const x=()=>{i(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:S,delayLeave:y}=g,w=()=>S(p,x);y?y(c.el,x,w):w()}else x()},Ad=(c,d)=>{let p;for(;c!==d;)p=b(c),i(c),c=p;i(d)},Od=(c,d,p)=>{const{bum:v,scope:g,update:x,subTree:S,um:y}=c;v&&_r(v),g.stop(),x&&(x.active=!1,Me(S,c,d,p)),y&&he(y,d),he(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ye=(c,d,p,v=!1,g=!1,x=0)=>{for(let S=x;S<c.length;S++)Me(c[S],d,p,v,g)},pr=c=>c.shapeFlag&6?pr(c.component.subTree):c.shapeFlag&128?c.suspense.next():b(c.anchor||c.el);let Ti=!1;const bo=(c,d,p)=>{c==null?d._vnode&&Me(d._vnode,null,null,!0):O(d._vnode||null,c,d,null,null,null,p),Ti||(Ti=!0,ga(),ba(),Ti=!1),d._vnode=c},mn={p:O,um:Me,m:Et,r:go,mt:Pi,mc:de,pc:K,pbc:Ge,n:pr,o:e};let _o,yo;return{render:bo,hydrate:_o,createApp:Jl(bo,_o)}}function Kr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wa(e,t,n=!1){const r=e.children,i=t.children;if(R(r)&&R(i))for(let a=0;a<r.length;a++){const s=r[a];let o=i[a];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[a]=nt(i[a]),o.el=s.el),n||Wa(s,o)),o.type===jn&&(o.el=s.el)}}function oc(e){const t=e.slice(),n=[0];let r,i,a,s,o;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,s=n.length-1;a<s;)o=a+s>>1,e[n[o]]<f?a=o+1:s=o;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,s=n[a-1];a-- >0;)n[a]=s,s=t[s];return n}function Ga(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ga(t)}const lc=e=>e.__isTeleport,xe=Symbol.for("v-fgt"),jn=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Wr=Symbol.for("v-stc"),Gt=[];let Oe=null;function te(e=!1){Gt.push(Oe=e?null:[])}function cc(){Gt.pop(),Oe=Gt[Gt.length-1]||null}let Yt=1;function Ya(e){Yt+=e}function Xa(e){return e.dynamicChildren=Yt>0?Oe||At:null,cc(),Yt>0&&Oe&&Oe.push(e),e}function ce(e,t,n,r,i,a){return Xa(Q(e,t,n,r,i,a,!0))}function Xt(e,t,n,r,i){return Xa(se(e,t,n,r,i,!0))}function Gr(e){return e?e.__v_isVNode===!0:!1}function qt(e,t){return e.type===t.type&&e.key===t.key}const qa=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ne(e)||fe(e)||L(e)?{i:be,r:e,k:t,f:!!n}:e:null);function Q(e,t=null,n=null,r=0,i=null,a=e===xe?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qa(t),ref:t&&Hn(t),scopeId:xa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:be};return o?(Yr(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Yt>0&&!s&&Oe&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Oe.push(l),l}const se=fc;function fc(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Al)&&(e=ht),Gr(e)){const o=Pt(e,t,!0);return n&&Yr(o,n),Yt>0&&!a&&Oe&&(o.shapeFlag&6?Oe[Oe.indexOf(e)]=o:Oe.push(o)),o.patchFlag|=-2,o}if(Ec(e)&&(e=e.__vccOpts),t){t=uc(t);let{class:o,style:l}=t;o&&!ne(o)&&(t.class=bn(o)),X(l)&&(ca(l)&&!R(l)&&(l=re({},l)),t.style=kt(l))}const s=ne(e)?1:Ol(e)?128:lc(e)?64:X(e)?4:L(e)?2:0;return Q(e,t,n,r,i,s,a,!0)}function uc(e){return e?ca(e)||Ua(e)?re({},e):e:null}function Pt(e,t,n=!1,r=!1){const{props:i,ref:a,patchFlag:s,children:o,transition:l}=e,f=t?dc(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&qa(f),ref:t&&t.ref?n&&a?R(a)?a.concat(Hn(t)):[a,Hn(t)]:Hn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(u.transition=l.clone(u)),u}function Jt(e=" ",t=0){return se(jn,null,e,t)}function ke(e="",t=!1){return t?(te(),Xt(ht,null,e)):se(ht,null,e)}function Ie(e){return e==null||typeof e=="boolean"?se(ht):R(e)?se(xe,null,e.slice()):typeof e=="object"?nt(e):se(jn,null,String(e))}function nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function Yr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Yr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ua(t)?t._ctx=be:i===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[Jt(t)]):n=8);e.children=t,e.shapeFlag|=n}function dc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=bn([t.class,r.class]));else if(i==="style")t.style=kt([t.style,r.style]);else if(hn(i)){const a=t[i],s=r[i];s&&a!==s&&!(R(a)&&a.includes(s))&&(t[i]=a?[].concat(a,s):s)}else i!==""&&(t[i]=r[i])}return t}function Ne(e,t,n,r=null){Ae(e,t,7,[n,r])}const mc=Ra();let pc=0;function hc(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||mc,a={uid:pc++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Do(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fa(r,i),emitsOptions:ya(r,i),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=_l.bind(null,a),e.ce&&e.ce(a),a}let oe=null,Vn,Xr;{const e=ji(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(s=>s(a)):i[0](a)}};Vn=t("__VUE_INSTANCE_SETTERS__",n=>oe=n),Xr=t("__VUE_SSR_SETTERS__",n=>zn=n)}const Zt=e=>{const t=oe;return Vn(e),e.scope.on(),()=>{e.scope.off(),Vn(t)}},Ja=()=>{oe&&oe.scope.off(),Vn(null)};function Za(e){return e.vnode.shapeFlag&4}let zn=!1;function vc(e,t=!1){t&&Xr(t);const{props:n,children:r}=e.vnode,i=Za(e);Ql(e,n,i,t),nc(e,r);const a=i?gc(e,t):void 0;return t&&Xr(!1),a}function gc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Bl);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?_c(e):null,a=Zt(e);Le();const s=He(r,e,0,[e.props,i]);if(Fe(),a(),Ni(s)){if(s.then(Ja,Ja),t)return s.then(o=>{Qa(e,o,t)}).catch(o=>{Tn(o,e,0)});e.asyncDep=s}else Qa(e,s,t)}else ts(e,t)}function Qa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=da(t)),ts(e,n)}let es;function ts(e,t,n){const r=e.type;if(!e.render){if(!t&&es&&!r.render){const i=r.template||Hr(e).template;if(i){const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,f=re(re({isCustomElement:a,delimiters:o},s),l);r.render=es(i,f)}}e.render=r.render||ge}{const i=Zt(e);Le();try{Kl(e)}finally{Fe(),i()}}}const bc={get(e,t){return pe(e,"get",""),e[t]}};function _c(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,bc),slots:e.slots,emit:e.emit,expose:t}}function $n(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(da(il(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bt)return Bt[n](e)},has(t,n){return n in t||n in Bt}}))}const yc=/(?:^|[-_])(\w)/g,xc=e=>e.replace(yc,t=>t.toUpperCase()).replace(/[-_]/g,"");function wc(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function ns(e,t,n=!1){let r=wc(t);if(!r&&t.__file){const i=t.__file.match(/([^/\\]+)\.\w+$/);i&&(r=i[1])}if(!r&&e&&e.parent){const i=a=>{for(const s in a)if(a[s]===t)return s};r=i(e.components||e.parent.type.components)||i(e.appContext.components)}return r?xc(r):n?"App":"Anonymous"}function Ec(e){return L(e)&&"__vccOpts"in e}const vt=(e,t)=>al(e,t,zn);function Sc(e,t,n){const r=arguments.length;return r===2?X(t)&&!R(t)?Gr(t)?se(e,null,[t]):se(e,t):se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gr(n)&&(n=[n]),se(e,t,n))}const Ac="3.4.26",Oc="http://www.w3.org/2000/svg",kc="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,rs=rt&&rt.createElement("template"),Cc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?rt.createElementNS(Oc,e):t==="mathml"?rt.createElementNS(kc,e):rt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const s=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{rs.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const o=rs.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pc=Symbol("_vtc");function Tc(e,t,n){const r=e[Pc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Bn=Symbol("_vod"),is=Symbol("_vsh"),Ic={beforeMount(e,{value:t},{transition:n}){e[Bn]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Qt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Qt(e,!0),r.enter(e)):r.leave(e,()=>{Qt(e,!1)}):Qt(e,t))},beforeUnmount(e,{value:t}){Qt(e,t)}};function Qt(e,t){e.style.display=t?e[Bn]:"none",e[is]=!t}const Nc=Symbol(""),Rc=/(^|;)\s*display\s*:/;function Mc(e,t,n){const r=e.style,i=ne(n);let a=!1;if(n&&!i){if(t)if(ne(t))for(const s of t.split(";")){const o=s.slice(0,s.indexOf(":")).trim();n[o]==null&&Kn(r,o,"")}else for(const s in t)n[s]==null&&Kn(r,s,"");for(const s in n)s==="display"&&(a=!0),Kn(r,s,n[s])}else if(i){if(t!==n){const s=r[Nc];s&&(n+=";"+s),r.cssText=n,a=Rc.test(n)}}else t&&e.removeAttribute("style");Bn in e&&(e[Bn]=a?r.display:"",e[is]&&(r.display="none"))}const as=/\s*!important$/;function Kn(e,t,n){if(R(n))n.forEach(r=>Kn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Dc(e,t);as.test(n)?e.setProperty(Ee(r),n.replace(as,""),"important"):e[r]=n}}const ss=["Webkit","Moz","ms"],qr={};function Dc(e,t){const n=qr[t];if(n)return n;let r=Ue(t);if(r!=="filter"&&r in e)return qr[t]=r;r=Di(r);for(let i=0;i<ss.length;i++){const a=ss[i]+r;if(a in e)return qr[t]=a}return t}const os="http://www.w3.org/1999/xlink";function Uc(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(os,t.slice(6,t.length)):e.setAttributeNS(os,t,n);else{const a=Mo(t);n==null||a&&!Hi(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Lc(e,t,n,r,i,a,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,i,a),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const f=o==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(f!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Hi(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Fc(e,t,n,r){e.addEventListener(t,n,r)}function jc(e,t,n,r){e.removeEventListener(t,n,r)}const ls=Symbol("_vei");function Hc(e,t,n,r,i=null){const a=e[ls]||(e[ls]={}),s=a[t];if(r&&s)s.value=r;else{const[o,l]=Vc(t);if(r){const f=a[t]=Bc(r,i);Fc(e,o,f,l)}else s&&(jc(e,o,s,l),a[t]=void 0)}}const cs=/(?:Once|Passive|Capture)$/;function Vc(e){let t;if(cs.test(e)){t={};let r;for(;r=e.match(cs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ee(e.slice(2)),t]}let Jr=0;const zc=Promise.resolve(),$c=()=>Jr||(zc.then(()=>Jr=0),Jr=Date.now());function Bc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ae(Kc(r,n.value),t,5,[r])};return n.value=e,n.attached=$c(),n}function Kc(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const fs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Wc=(e,t,n,r,i,a,s,o,l)=>{const f=i==="svg";t==="class"?Tc(e,r,f):t==="style"?Mc(e,n,r):hn(t)?hr(t)||Hc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gc(e,t,r,f))?Lc(e,t,r,a,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Uc(e,t,r,f))};function Gc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&fs(t)&&L(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return fs(t)&&ne(n)?!1:t in e}/*! #__NO_SIDE_EFFECTS__ */function Yc(e,t){const n=Dr(e);class r extends Zr{constructor(a){super(n,a,t)}}return r.def=n,r}const Xc=typeof HTMLElement<"u"?HTMLElement:class{};class Zr extends Xc{constructor(t,n={},r){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),ha(()=>{this._connected||(ds(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const i of r)this._setAttr(i.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(r,i=!1)=>{const{props:a,styles:s}=r;let o;if(a&&!R(a))for(const l in a){const f=a[l];(f===Number||f&&f.type===Number)&&(l in this._props&&(this._props[l]=Li(this._props[l])),(o||(o=Object.create(null)))[Ue(l)]=!0)}this._numberProps=o,i&&this._resolveProps(r),this._applyStyles(s),this._update()},n=this._def.__asyncLoader;n?n().then(r=>t(r,!0)):t(this._def)}_resolveProps(t){const{props:n}=t,r=R(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&r.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of r.map(Ue))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(a){this._setProp(i,a)}})}_setAttr(t){let n=this.hasAttribute(t)?this.getAttribute(t):void 0;const r=Ue(t);this._numberProps&&this._numberProps[r]&&(n=Li(n)),this._setProp(r,n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,r=!0,i=!0){n!==this._props[t]&&(this._props[t]=n,i&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Ee(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Ee(t),n+""):n||this.removeAttribute(Ee(t))))}_update(){ds(this._createVNode(),this.shadowRoot)}_createVNode(){const t=se(this._def,re({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0;const r=(a,s)=>{this.dispatchEvent(new CustomEvent(a,{detail:s}))};n.emit=(a,...s)=>{r(a,s),Ee(a)!==a&&r(Ee(a),s)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof Zr){n.parent=i._instance,n.provides=i._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}const qc=["ctrl","shift","alt","meta"],Jc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>qc.some(n=>e[`${n}Key`]&&!t.includes(n))},Zc=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...a)=>{for(let s=0;s<t.length;s++){const o=Jc[t[s]];if(o&&o(i,t))return}return e(i,...a)})},Qc=re({patchProp:Wc},Cc);let us;function ef(){return us||(us=ic(Qc))}const ds=(...e)=>{ef().render(...e)};var tf={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},nf=tf,rf={prefix:"fas",iconName:"microphone",icon:[384,512,[],"f130","M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]},af={prefix:"fas",iconName:"file-import",icon:[512,512,["arrow-right-to-file"],"f56f","M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"]},sf={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},of={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},lf={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]},cf={NVM_INC:"/Users/cm/.nvm/versions/node/v22.0.0/include/node",MANPATH:"/Users/cm/.nvm/versions/node/v22.0.0/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/Users/cm/.nvm/versions/node/v22.0.0/bin/node",INIT_CWD:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_CD_FLAGS:"-q",TERM:"xterm-256color",SHELL:"/bin/zsh",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/",npm_config_global_prefix:"/Users/cm/.nvm/versions/node/v22.0.0",TERM_PROGRAM_VERSION:"1.88.1",ZDOTDIR:"/Users/cm",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_DIR:"/Users/cm/.nvm",USER:"cm",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/Users/cm/.nvm/versions/node/v22.0.0/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/bin/npm-cli.js",npm_config_fetch_retry_mintimeout:"20000",PATH:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v22.0.0/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin",npm_package_json:"/Users/cm/Documents/workspace/transcribe/frontend/package.json",npm_config_userconfig:"/Users/cm/.npmrc",npm_config_init_module:"/Users/cm/.npm-init.js",USER_ZDOTDIR:"/Users/cm",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/cm/Documents/workspace/transcribe/frontend",npm_lifecycle_event:"build:components",EDITOR:"vi",npm_package_name:"frontend",LANG:"en_US.UTF-8",npm_config_npm_version:"10.5.1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",XPC_FLAGS:"0x0",npm_config_node_gyp:"/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.1.0",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/cm",npm_config_fetch_retry_maxtimeout:"120000",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/cm/.npm",LOGNAME:"cm",npm_lifecycle_script:"vue-tsc --noEmit && vite build --config vite.comp.config.js",VSCODE_GIT_IPC_HANDLE:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock",NVM_BIN:"/Users/cm/.nvm/versions/node/v22.0.0/bin",npm_config_user_agent:"npm/10.5.1 node/v22.0.0 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/Users/cm/.nvm/versions/node/v22.0.0/bin/node",npm_config_prefix:"/Users/cm/.nvm/versions/node/v22.0.0",COLORTERM:"truecolor",_:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite",NODE_ENV:"production"};function ms(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ms(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ms(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wn(e){"@babel/helpers - typeof";return Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wn(e)}function ff(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function uf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function df(e,t,n){return t&&uf(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qr(e,t){return pf(e)||vf(e,t)||ps(e,t)||bf()}function en(e){return mf(e)||hf(e)||ps(e)||gf()}function mf(e){if(Array.isArray(e))return ei(e)}function pf(e){if(Array.isArray(e))return e}function hf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,s,o;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw o}}return r}}function ps(e,t){if(e){if(typeof e=="string")return ei(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ei(e,t)}}function ei(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var hs=function(){},ti={},vs={},gs=null,bs={mark:hs,measure:hs};try{typeof window<"u"&&(ti=window),typeof document<"u"&&(vs=document),typeof MutationObserver<"u"&&(gs=MutationObserver),typeof performance<"u"&&(bs=performance)}catch{}var _f=ti.navigator||{},_s=_f.userAgent,ys=_s===void 0?"":_s,it=ti,G=vs,xs=gs,Gn=bs;it.document;var ze=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",ws=~ys.indexOf("MSIE")||~ys.indexOf("Trident/"),Yn,Xn,qn,Jn,Zn,$e="___FONT_AWESOME___",ni=16,Es="fa",Ss="svg-inline--fa",gt="data-fa-i2svg",ri="data-fa-pseudo-element",yf="data-fa-pseudo-element-pending",ii="data-prefix",ai="data-icon",As="fontawesome-i2svg",xf="async",wf=["HTML","HEAD","STYLE","SCRIPT"],Os=function(){try{return cf.NODE_ENV==="production"}catch{return!1}}(),Y="classic",ee="sharp",si=[Y,ee];function tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Y]}})}var nn=tn((Yn={},ie(Yn,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ie(Yn,ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Yn)),rn=tn((Xn={},ie(Xn,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(Xn,ee,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Xn)),an=tn((qn={},ie(qn,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(qn,ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),qn)),Ef=tn((Jn={},ie(Jn,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(Jn,ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Jn)),Sf=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ks="fa-layers-text",Af=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Of=tn((Zn={},ie(Zn,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(Zn,ee,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Zn)),Cs=[1,2,3,4,5,6,7,8,9,10],kf=Cs.concat([11,12,13,14,15,16,17,18,19,20]),Cf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sn=new Set;Object.keys(rn[Y]).map(sn.add.bind(sn)),Object.keys(rn[ee]).map(sn.add.bind(sn));var Pf=[].concat(si,en(sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",bt.GROUP,bt.SWAP_OPACITY,bt.PRIMARY,bt.SECONDARY]).concat(Cs.map(function(e){return"".concat(e,"x")})).concat(kf.map(function(e){return"w-".concat(e)})),on=it.FontAwesomeConfig||{};function Tf(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function If(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var Nf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Nf.forEach(function(e){var t=Qr(e,2),n=t[0],r=t[1],i=If(Tf(n));i!=null&&(on[r]=i)})}var Ps={styleDefault:"solid",familyDefault:"classic",cssPrefix:Es,replacementClass:Ss,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};on.familyPrefix&&(on.cssPrefix=on.familyPrefix);var Tt=k(k({},Ps),on);Tt.autoReplaceSvg||(Tt.observeMutations=!1);var P={};Object.keys(Ps).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Tt[e]=n,ln.forEach(function(r){return r(P)})},get:function(){return Tt[e]}})}),Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Tt.cssPrefix=t,ln.forEach(function(n){return n(P)})},get:function(){return Tt.cssPrefix}}),it.FontAwesomeConfig=P;var ln=[];function Rf(e){return ln.push(e),function(){ln.splice(ln.indexOf(e),1)}}var at=ni,Re={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mf(e){if(!(!e||!ze)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=a)}return G.head.insertBefore(t,r),e}}var Df="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function cn(){for(var e=12,t="";e-- >0;)t+=Df[Math.random()*62|0];return t}function It(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function oi(e){return e.classList?It(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ts(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Uf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ts(e[n]),'" ')},"").trim()}function Qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function li(e){return e.size!==Re.size||e.x!==Re.x||e.y!==Re.y||e.rotate!==Re.rotate||e.flipX||e.flipY}function Lf(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(s," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function Ff(e){var t=e.transform,n=e.width,r=n===void 0?ni:n,i=e.height,a=i===void 0?ni:i,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&ws?l+="translate(".concat(t.x/at-r/2,"em, ").concat(t.y/at-a/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/at,"em), calc(-50% + ").concat(t.y/at,"em)) "):l+="translate(".concat(t.x/at,"em, ").concat(t.y/at,"em) "),l+="scale(".concat(t.size/at*(t.flipX?-1:1),", ").concat(t.size/at*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var jf=`:root, :host {
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
}`;function Is(){var e=Es,t=Ss,n=P.cssPrefix,r=P.replacementClass,i=jf;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var Ns=!1;function ci(){P.autoAddCss&&!Ns&&(Mf(Is()),Ns=!0)}var Hf={mixout:function(){return{dom:{css:Is,insertCss:ci}}},hooks:function(){return{beforeDOMElementCreation:function(){ci()},beforeI2svg:function(){ci()}}}},Be=it||{};Be[$e]||(Be[$e]={}),Be[$e].styles||(Be[$e].styles={}),Be[$e].hooks||(Be[$e].hooks={}),Be[$e].shims||(Be[$e].shims=[]);var Ce=Be[$e],Rs=[],Vf=function e(){G.removeEventListener("DOMContentLoaded",e),er=1,Rs.map(function(t){return t()})},er=!1;ze&&(er=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),er||G.addEventListener("DOMContentLoaded",Vf));function zf(e){ze&&(er?setTimeout(e,0):Rs.push(e))}function fn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Ts(e):"<".concat(t," ").concat(Uf(r),">").concat(a.map(fn).join(""),"</").concat(t,">")}function Ms(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fi=function(t,n,r,i){var a=Object.keys(t),s=a.length,o=n,l,f,u;for(r===void 0?(l=1,u=t[a[0]]):(l=0,u=r);l<s;l++)f=a[l],u=o(u,t[f],f,t);return u};function $f(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ui(e){var t=$f(e);return t.length===1?t[0].toString(16):null}function Bf(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ds(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function di(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ds(t);typeof Ce.hooks.addPack=="function"&&!i?Ce.hooks.addPack(e,Ds(t)):Ce.styles[e]=k(k({},Ce.styles[e]||{}),a),e==="fas"&&di("fa",t)}var tr,nr,rr,Nt=Ce.styles,Kf=Ce.shims,Wf=(tr={},ie(tr,Y,Object.values(an[Y])),ie(tr,ee,Object.values(an[ee])),tr),mi=null,Us={},Ls={},Fs={},js={},Hs={},Gf=(nr={},ie(nr,Y,Object.keys(nn[Y])),ie(nr,ee,Object.keys(nn[ee])),nr);function Yf(e){return~Pf.indexOf(e)}function Xf(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Yf(i)?i:null}var Vs=function(){var t=function(a){return fi(Nt,function(s,o,l){return s[l]=fi(o,a,{}),s},{})};Us=t(function(i,a,s){if(a[3]&&(i[a[3]]=s),a[2]){var o=a[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){i[l.toString(16)]=s})}return i}),Ls=t(function(i,a,s){if(i[s]=s,a[2]){var o=a[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){i[l]=s})}return i}),Hs=t(function(i,a,s){var o=a[2];return i[s]=s,o.forEach(function(l){i[l]=s}),i});var n="far"in Nt||P.autoFetchSvg,r=fi(Kf,function(i,a){var s=a[0],o=a[1],l=a[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});Fs=r.names,js=r.unicodes,mi=ir(P.styleDefault,{family:P.familyDefault})};Rf(function(e){mi=ir(e.styleDefault,{family:P.familyDefault})}),Vs();function pi(e,t){return(Us[e]||{})[t]}function qf(e,t){return(Ls[e]||{})[t]}function _t(e,t){return(Hs[e]||{})[t]}function zs(e){return Fs[e]||{prefix:null,iconName:null}}function Jf(e){var t=js[e],n=pi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function st(){return mi}var hi=function(){return{prefix:null,iconName:null,rest:[]}};function ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Y:n,i=nn[r][e],a=rn[r][e]||rn[r][i],s=e in Ce.styles?e:null;return a||s||null}var $s=(rr={},ie(rr,Y,Object.keys(an[Y])),ie(rr,ee,Object.keys(an[ee])),rr);function ar(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ie(t,Y,"".concat(P.cssPrefix,"-").concat(Y)),ie(t,ee,"".concat(P.cssPrefix,"-").concat(ee)),t),s=null,o=Y;(e.includes(a[Y])||e.some(function(f){return $s[Y].includes(f)}))&&(o=Y),(e.includes(a[ee])||e.some(function(f){return $s[ee].includes(f)}))&&(o=ee);var l=e.reduce(function(f,u){var m=Xf(P.cssPrefix,u);if(Nt[u]?(u=Wf[o].includes(u)?Ef[o][u]:u,s=u,f.prefix=u):Gf[o].indexOf(u)>-1?(s=u,f.prefix=ir(u,{family:o})):m?f.iconName=m:u!==P.replacementClass&&u!==a[Y]&&u!==a[ee]&&f.rest.push(u),!i&&f.prefix&&f.iconName){var b=s==="fa"?zs(f.iconName):{},h=_t(f.prefix,f.iconName);b.prefix&&(s=null),f.iconName=b.iconName||h||f.iconName,f.prefix=b.prefix||f.prefix,f.prefix==="far"&&!Nt.far&&Nt.fas&&!P.autoFetchSvg&&(f.prefix="fas")}return f},hi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===ee&&(Nt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=_t(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=st()||"fas"),l}var Zf=function(){function e(){ff(this,e),this.definitions={}}return df(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=k(k({},n.definitions[o]||{}),s[o]),di(o,s[o]);var l=an[Y][o];l&&di(l,s[o]),Vs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var s=i[a],o=s.prefix,l=s.iconName,f=s.icon,u=f[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[o][m]=f)}),n[o][l]=f}),n}}]),e}(),Bs=[],Rt={},Mt={},Qf=Object.keys(Mt);function eu(e,t){var n=t.mixoutsTo;return Bs=e,Rt={},Object.keys(Mt).forEach(function(r){Qf.indexOf(r)===-1&&delete Mt[r]}),Bs.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Wn(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(s){Rt[s]||(Rt[s]=[]),Rt[s].push(a[s])})}r.provides&&r.provides(Mt)}),n}function vi(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Rt[e]||[];return a.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function yt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Rt[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Mt[e]?Mt[e].apply(null,t):void 0}function gi(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||st();if(t)return t=_t(n,t)||t,Ms(Ks.definitions,n,t)||Ms(Ce.styles,n,t)}var Ks=new Zf,tu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,yt("noAuto")},nu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ze?(yt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,zf(function(){iu({autoReplaceSvgRoot:n}),yt("watch",t)})}},ru={icon:function(t){if(t===null)return null;if(Wn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_t(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ir(t[0]);return{prefix:r,iconName:_t(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Sf))){var i=ar(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||st(),iconName:_t(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=st();return{prefix:a,iconName:_t(a,t)||t}}}},_e={noAuto:tu,config:P,dom:nu,parse:ru,library:Ks,findIconDefinition:gi,toHtml:fn},iu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(Ce.styles).length>0||P.autoFetchSvg)&&ze&&P.autoReplaceSvg&&_e.dom.i2svg({node:r})};function sr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return fn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ze){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function au(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,s=e.transform;if(li(s)&&n.found&&!r.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};i.style=Qn(k(k({},a),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function su(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,s=a===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},i),{},{id:s}),children:r}]}]}function bi(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,s=e.transform,o=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,b=e.watchable,h=b===void 0?!1:b,M=r.found?r:n,O=M.width,j=M.height,E=i==="fak",A=[P.replacementClass,a?"".concat(P.cssPrefix,"-").concat(a):""].filter(function(we){return m.classes.indexOf(we)===-1}).filter(function(we){return we!==""||!!we}).concat(m.classes).join(" "),T={children:[],attributes:k(k({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(j)})},F=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(O/j*16*.0625,"em")}:{};h&&(T.attributes[gt]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(u||cn())},children:[l]}),delete T.attributes.title);var $=k(k({},T),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:s,symbol:o,styles:k(k({},F),m.styles)}),U=r.found&&n.found?Ke("generateAbstractMask",$)||{children:[],attributes:{}}:Ke("generateAbstractIcon",$)||{children:[],attributes:{}},J=U.children,de=U.attributes;return $.children=J,$.attributes=de,o?su($):au($)}function Ws(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,f=k(k(k({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});l&&(f[gt]="");var u=k({},s.styles);li(i)&&(u.transform=Ff({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Qn(u);m.length>0&&(f.style=m);var b=[];return b.push({tag:"span",attributes:f,children:[t]}),a&&b.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),b}function ou(e){var t=e.content,n=e.title,r=e.extra,i=k(k(k({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Qn(r.styles);a.length>0&&(i.style=a);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var _i=Ce.styles;function yi(e){var t=e[0],n=e[1],r=e.slice(4),i=Qr(r,1),a=i[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(bt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(bt.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:s}}var lu={found:!1,width:512,height:512};function cu(e,t){!Os&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xi(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=st()),new Promise(function(r,i){if(Ke("missingIconAbstract"),n==="fa"){var a=zs(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&_i[t]&&_i[t][e]){var s=_i[t][e];return r(yi(s))}cu(e,t),r(k(k({},lu),{},{icon:P.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var Gs=function(){},wi=P.measurePerformance&&Gn&&Gn.mark&&Gn.measure?Gn:{mark:Gs,measure:Gs},un='FA "6.5.2"',fu=function(t){return wi.mark("".concat(un," ").concat(t," begins")),function(){return Ys(t)}},Ys=function(t){wi.mark("".concat(un," ").concat(t," ends")),wi.measure("".concat(un," ").concat(t),"".concat(un," ").concat(t," begins"),"".concat(un," ").concat(t," ends"))},Ei={begin:fu,end:Ys},or=function(){};function Xs(e){var t=e.getAttribute?e.getAttribute(gt):null;return typeof t=="string"}function uu(e){var t=e.getAttribute?e.getAttribute(ii):null,n=e.getAttribute?e.getAttribute(ai):null;return t&&n}function du(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function mu(){if(P.autoReplaceSvg===!0)return lr.replace;var e=lr[P.autoReplaceSvg];return e||lr.replace}function pu(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function hu(e){return G.createElement(e)}function qs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pu:hu:n;if(typeof e=="string")return G.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var a=e.children||[];return a.forEach(function(s){i.appendChild(qs(s,{ceFn:r}))}),i}function vu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var lr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(qs(i),n)}),n.getAttribute(gt)===null&&P.keepOriginalSource){var r=G.createComment(vu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~oi(n).indexOf(P.replacementClass))return lr.replace(t);var i=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(o,l){return l===P.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var s=r.map(function(o){return fn(o)}).join(`
`);n.setAttribute(gt,""),n.innerHTML=s}};function Js(e){e()}function Zs(e,t){var n=typeof t=="function"?t:or;if(e.length===0)n();else{var r=Js;P.mutateApproach===xf&&(r=it.requestAnimationFrame||Js),r(function(){var i=mu(),a=Ei.begin("mutate");e.map(i),a(),n()})}}var Si=!1;function Qs(){Si=!0}function Ai(){Si=!1}var cr=null;function eo(e){if(xs&&P.observeMutations){var t=e.treeCallback,n=t===void 0?or:t,r=e.nodeCallback,i=r===void 0?or:r,a=e.pseudoElementsCallback,s=a===void 0?or:a,o=e.observeMutationsRoot,l=o===void 0?G:o;cr=new xs(function(f){if(!Si){var u=st();It(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Xs(m.addedNodes[0])&&(P.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&Xs(m.target)&&~Cf.indexOf(m.attributeName))if(m.attributeName==="class"&&uu(m.target)){var b=ar(oi(m.target)),h=b.prefix,M=b.iconName;m.target.setAttribute(ii,h||u),M&&m.target.setAttribute(ai,M)}else du(m.target)&&i(m.target)})}}),ze&&cr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function gu(){cr&&cr.disconnect()}function bu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function _u(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=ar(oi(e));return i.prefix||(i.prefix=st()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=qf(i.prefix,e.innerText)||pi(i.prefix,ui(e.innerText))),!i.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function yu(e){var t=It(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||cn()):(t["aria-hidden"]="true",t.focusable="false")),t}function xu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Re,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function to(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_u(e),r=n.iconName,i=n.prefix,a=n.rest,s=yu(e),o=vi("parseNodeAttributes",{},e),l=t.styleParser?bu(e):[];return k({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Re,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:s}},o)}var wu=Ce.styles;function no(e){var t=P.autoReplaceSvg==="nest"?to(e,{styleParser:!1}):to(e);return~t.extra.classes.indexOf(ks)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}var ot=new Set;si.map(function(e){ot.add("fa-".concat(e))}),Object.keys(nn[Y]).map(ot.add.bind(ot)),Object.keys(nn[ee]).map(ot.add.bind(ot)),ot=en(ot);function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ze)return Promise.resolve();var n=G.documentElement.classList,r=function(m){return n.add("".concat(As,"-").concat(m))},i=function(m){return n.remove("".concat(As,"-").concat(m))},a=P.autoFetchSvg?ot:si.map(function(u){return"fa-".concat(u)}).concat(Object.keys(wu));a.includes("fa")||a.push("fa");var s=[".".concat(ks,":not([").concat(gt,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(gt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=It(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ei.begin("onTree"),f=o.reduce(function(u,m){try{var b=no(m);b&&u.push(b)}catch(h){Os||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(b){Zs(b,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(b){l(),m(b)})})}function Eu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;no(e).then(function(n){n&&Zs([n],t)})}function Su(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:gi(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:gi(i||{})),e(r,k(k({},n),{},{mask:i}))}}var Au=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Re:r,a=n.symbol,s=a===void 0?!1:a,o=n.mask,l=o===void 0?null:o,f=n.maskId,u=f===void 0?null:f,m=n.title,b=m===void 0?null:m,h=n.titleId,M=h===void 0?null:h,O=n.classes,j=O===void 0?[]:O,E=n.attributes,A=E===void 0?{}:E,T=n.styles,F=T===void 0?{}:T;if(t){var $=t.prefix,U=t.iconName,J=t.icon;return sr(k({type:"icon"},t),function(){return yt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(b?A["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(M||cn()):(A["aria-hidden"]="true",A.focusable="false")),bi({icons:{main:yi(J),mask:l?yi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:U,transform:k(k({},Re),i),symbol:s,title:b,maskId:u,titleId:M,extra:{attributes:A,styles:F,classes:j}})})}},Ou={mixout:function(){return{icon:Su(Au)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ro,n.nodeCallback=Eu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?G:r,a=n.callback,s=a===void 0?function(){}:a;return ro(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,s=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,b=r.extra;return new Promise(function(h,M){Promise.all([xi(i,o),u.iconName?xi(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var j=Qr(O,2),E=j[0],A=j[1];h([n,bi({icons:{main:E,mask:A},prefix:o,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:s,extra:b,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.transform,o=n.styles,l=Qn(o);l.length>0&&(i.style=l);var f;return li(s)&&(f=Ke("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},ku={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return sr({type:"layer"},function(){yt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(en(a)).join(" ")},children:s}]})}}}},Cu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,s=r.classes,o=s===void 0?[]:s,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return sr({type:"counter",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),ou({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(en(o))}})})}}}},Pu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Re:i,s=r.title,o=s===void 0?null:s,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,b=r.styles,h=b===void 0?{}:b;return sr({type:"text",content:n},function(){return yt("beforeDOMElementCreation",{content:n,params:r}),Ws({content:n,transform:k(k({},Re),a),title:o,extra:{attributes:m,styles:h,classes:["".concat(P.cssPrefix,"-layers-text")].concat(en(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,s=r.extra,o=null,l=null;if(ws){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/f,l=u.height/f}return P.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Ws({content:n.innerHTML,width:o,height:l,transform:a,title:i,extra:s,watchable:!0})])}}},Tu=new RegExp('"',"ug"),io=[1105920,1112319];function Iu(e){var t=e.replace(Tu,""),n=Bf(t,0),r=n>=io[0]&&n<=io[1],i=t.length===2?t[0]===t[1]:!1;return{value:ui(i?t[0]:t),isSecondary:r||i}}function ao(e,t){var n="".concat(yf).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=It(e.children),s=a.filter(function(J){return J.getAttribute(ri)===t})[0],o=it.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Af),f=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&u!=="none"&&u!==""){var m=o.getPropertyValue("content"),b=~["Sharp"].indexOf(l[2])?ee:Y,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?rn[b][l[2].toLowerCase()]:Of[b][f],M=Iu(m),O=M.value,j=M.isSecondary,E=l[0].startsWith("FontAwesome"),A=pi(h,O),T=A;if(E){var F=Jf(O);F.iconName&&F.prefix&&(A=F.iconName,h=F.prefix)}if(A&&!j&&(!s||s.getAttribute(ii)!==h||s.getAttribute(ai)!==T)){e.setAttribute(n,T),s&&e.removeChild(s);var $=xu(),U=$.extra;U.attributes[ri]=t,xi(A,h).then(function(J){var de=bi(k(k({},$),{},{icons:{main:J,mask:hi()},prefix:h,iconName:T,extra:U,watchable:!0})),we=G.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=de.map(function(Ge){return fn(Ge)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Nu(e){return Promise.all([ao(e,"::before"),ao(e,"::after")])}function Ru(e){return e.parentNode!==document.head&&!~wf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ri)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function so(e){if(ze)return new Promise(function(t,n){var r=It(e.querySelectorAll("*")).filter(Ru).map(Nu),i=Ei.begin("searchPseudoElements");Qs(),Promise.all(r).then(function(){i(),Ai(),t()}).catch(function(){i(),Ai(),n()})})}var Mu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=so,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?G:r;P.searchPseudoElements&&so(i)}}},oo=!1,Du={mixout:function(){return{dom:{unwatch:function(){Qs(),oo=!0}}}},hooks:function(){return{bootstrap:function(){eo(vi("mutationObserverCallbacks",{}))},noAuto:function(){gu()},watch:function(n){var r=n.observeMutationsRoot;oo?Ai():eo(vi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},lo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Uu={mixout:function(){return{parse:{transform:function(n){return lo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=lo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},b={transform:"translate(".concat(s/2*-1," -256)")},h={outer:o,inner:m,path:b};return{tag:"g",attributes:k({},h.outer),children:[{tag:"g",attributes:k({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:k(k({},r.icon.attributes),h.path)}]}]}}}},Oi={x:0,y:0,width:"100%",height:"100%"};function co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Lu(e){return e.tag==="g"?e.children:[e]}var Fu={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?ar(i.split(" ").map(function(s){return s.trim()})):hi();return a.prefix||(a.prefix=st()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.mask,o=n.maskId,l=n.transform,f=a.width,u=a.icon,m=s.width,b=s.icon,h=Lf({transform:l,containerWidth:m,iconWidth:f}),M={tag:"rect",attributes:k(k({},Oi),{},{fill:"white"})},O=u.children?{children:u.children.map(co)}:{},j={tag:"g",attributes:k({},h.inner),children:[co(k({tag:u.tag,attributes:k(k({},u.attributes),h.path)},O))]},E={tag:"g",attributes:k({},h.outer),children:[j]},A="mask-".concat(o||cn()),T="clip-".concat(o||cn()),F={tag:"mask",attributes:k(k({},Oi),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,E]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:Lu(b)},F]};return r.push($,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(A,")")},Oi)}),{children:r,attributes:i}}}},ju={provides:function(t){var n=!1;it.matchMedia&&(n=it.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:k(k({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=k(k({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:k(k({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:k(k({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:k(k({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:k(k({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Hu={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Vu=[Hf,Ou,ku,Cu,Pu,Mu,Du,Uu,Fu,ju,Hu];eu(Vu,{mixoutsTo:_e}),_e.noAuto,_e.config;var zu=_e.library;_e.dom;var ki=_e.parse;_e.findIconDefinition,_e.toHtml;var $u=_e.icon;_e.layer,_e.text,_e.counter;var Bu={NVM_INC:"/Users/cm/.nvm/versions/node/v22.0.0/include/node",MANPATH:"/Users/cm/.nvm/versions/node/v22.0.0/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::",TERM_PROGRAM:"vscode",NODE:"/Users/cm/.nvm/versions/node/v22.0.0/bin/node",INIT_CWD:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_CD_FLAGS:"-q",TERM:"xterm-256color",SHELL:"/bin/zsh",HOMEBREW_REPOSITORY:"/opt/homebrew",TMPDIR:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/",npm_config_global_prefix:"/Users/cm/.nvm/versions/node/v22.0.0",TERM_PROGRAM_VERSION:"1.88.1",ZDOTDIR:"/Users/cm",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/cm/Documents/workspace/transcribe/frontend",NVM_DIR:"/Users/cm/.nvm",USER:"cm",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/Users/cm/.nvm/versions/node/v22.0.0/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x0",npm_execpath:"/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/bin/npm-cli.js",npm_config_fetch_retry_mintimeout:"20000",PATH:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v22.0.0/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin",npm_package_json:"/Users/cm/Documents/workspace/transcribe/frontend/package.json",npm_config_userconfig:"/Users/cm/.npmrc",npm_config_init_module:"/Users/cm/.npm-init.js",USER_ZDOTDIR:"/Users/cm",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/cm/Documents/workspace/transcribe/frontend",npm_lifecycle_event:"build:components",EDITOR:"vi",npm_package_name:"frontend",LANG:"en_US.UTF-8",npm_config_npm_version:"10.5.1",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",XPC_FLAGS:"0x0",npm_config_node_gyp:"/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.1.0",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/cm",npm_config_fetch_retry_maxtimeout:"120000",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",HOMEBREW_PREFIX:"/opt/homebrew",npm_config_cache:"/Users/cm/.npm",LOGNAME:"cm",npm_lifecycle_script:"vue-tsc --noEmit && vite build --config vite.comp.config.js",VSCODE_GIT_IPC_HANDLE:"/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock",NVM_BIN:"/Users/cm/.nvm/versions/node/v22.0.0/bin",npm_config_user_agent:"npm/10.5.1 node/v22.0.0 darwin arm64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",INFOPATH:"/opt/homebrew/share/info:/opt/homebrew/share/info:",HOMEBREW_CELLAR:"/opt/homebrew/Cellar",npm_node_execpath:"/Users/cm/.nvm/versions/node/v22.0.0/bin/node",npm_config_prefix:"/Users/cm/.nvm/versions/node/v22.0.0",COLORTERM:"truecolor",_:"/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite",NODE_ENV:"production"};function fo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function We(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fo(Object(n),!0).forEach(function(r){ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function ve(e,t,n){return t=Yu(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ku(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Wu(e,t){if(e==null)return{};var n=Ku(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Gu(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Yu(e){var t=Gu(e,"string");return typeof t=="symbol"?t:String(t)}var Xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},uo={exports:{}};(function(e){(function(t){var n=function(E,A,T){if(!f(A)||m(A)||b(A)||h(A)||l(A))return A;var F,$=0,U=0;if(u(A))for(F=[],U=A.length;$<U;$++)F.push(n(E,A[$],T));else{F={};for(var J in A)Object.prototype.hasOwnProperty.call(A,J)&&(F[E(J,T)]=n(E,A[J],T))}return F},r=function(E,A){A=A||{};var T=A.separator||"_",F=A.split||/(?=[A-Z])/;return E.split(F).join(T)},i=function(E){return M(E)?E:(E=E.replace(/[\-_\s]+(.)?/g,function(A,T){return T?T.toUpperCase():""}),E.substr(0,1).toLowerCase()+E.substr(1))},a=function(E){var A=i(E);return A.substr(0,1).toUpperCase()+A.substr(1)},s=function(E,A){return r(E,A).toLowerCase()},o=Object.prototype.toString,l=function(E){return typeof E=="function"},f=function(E){return E===Object(E)},u=function(E){return o.call(E)=="[object Array]"},m=function(E){return o.call(E)=="[object Date]"},b=function(E){return o.call(E)=="[object RegExp]"},h=function(E){return o.call(E)=="[object Boolean]"},M=function(E){return E=E-0,E===E},O=function(E,A){var T=A&&"process"in A?A.process:A;return typeof T!="function"?E:function(F,$){return T(F,E,$)}},j={camelize:i,decamelize:s,pascalize:a,depascalize:s,camelizeKeys:function(E,A){return n(O(i,A),E)},decamelizeKeys:function(E,A){return n(O(s,A),E,A)},pascalizeKeys:function(E,A){return n(O(a,A),E)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=j:t.humps=j})(Xu)})(uo);var qu=uo.exports,Ju=["class","style"];function Zu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=qu.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function Qu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return mo(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=Qu(u);break;case"style":l.style=Zu(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,s=a===void 0?{}:a,o=Wu(n,Ju);return Sc(e.tag,We(We(We({},t),{},{class:i.class,style:We(We({},i.style),s)},i.attrs),o),r)}var po=!1;try{po=Bu.NODE_ENV==="production"}catch{}function ed(){if(!po&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ci(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ve({},e,t):{}}function td(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ve(t,"fa-".concat(e.size),e.size!==null),ve(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ve(t,"fa-pull-".concat(e.pull),e.pull!==null),ve(t,"fa-swap-opacity",e.swapOpacity),ve(t,"fa-bounce",e.bounce),ve(t,"fa-shake",e.shake),ve(t,"fa-beat",e.beat),ve(t,"fa-fade",e.fade),ve(t,"fa-beat-fade",e.beatFade),ve(t,"fa-flash",e.flash),ve(t,"fa-spin-pulse",e.spinPulse),ve(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ho(e){if(e&&fr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ki.icon)return ki.icon(e);if(e===null)return null;if(fr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var xt=Dr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=vt(function(){return ho(t.icon)}),a=vt(function(){return Ci("classes",td(t))}),s=vt(function(){return Ci("transform",typeof t.transform=="string"?ki.transform(t.transform):t.transform)}),o=vt(function(){return Ci("mask",ho(t.mask))}),l=vt(function(){return $u(i.value,We(We(We(We({},a.value),s.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Mn(l,function(u){if(!u)return ed("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var f=vt(function(){return l.value?mo(l.value.abstract[0],{},r):null});return function(){return f.value}}});const nd={class:"flex mt-4 h-full w-full justify-center"},rd=Q("h1",{class:"text-4xl"},[Q("b",null,"Transcribe your files")],-1),id={key:0},ad={key:1,class:"flex flex-col"},sd=Q("span",null,[Jt("Drop files here or "),Q("u",null,"click here"),Jt(" to upload.")],-1),od={class:"flex flex-row items-center gap-3"},ld={class:""},cd=["onClick"],fd=Q("span",null,"Delete",-1),ud={class:"flex flex-row gap-2"},dd=["disabled"],md={key:1,class:"shadow-md border rounded-3xl h-5/6 w-full pt-2 px-4 overflow-scroll mb-2"},pd={key:0,class:"m-4"},hd={class:"w-full items-center justify-between flex flex-row mb-2"},vd={class:"flex flex-row items-center gap-3"},gd={class:""},bd={class:"text-left p-4 w-full mb-6 border rounded-2xl"},_d={key:0,class:"flex w-full text-center justify-center"},yd=[Q("div",{style:{color:"var(--primary)"},class:"text-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status"},null,-1)],xd={key:1,class:"flex flex-row flex-wrap max-w-full h-auto items-center w-full gap-2 mb-lg mb-5"},wd={class:"tag rounded-lg p-1 px-2 w-auto text-nowrap"},Ed={key:2,class:""},Sd=Yc(((e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n})(Dr({__name:"FileUpload.ce",setup(e){zu.add(lf,rf,sf,of,nf,af);const t=Ht(!1),n=Ht(!1),r=Ht([]),i=Ht(),a=Ht([]);function s(){var M;let h=Array.from(((M=i.value)==null?void 0:M.files)||[]);h=h.filter(O=>O.type.includes("audio")||O.type.includes("video")),r.value.push(...h)}function o(h){h.preventDefault(),t.value=!0}function l(){t.value=!1}function f(h){h.preventDefault(),i.value&&(i.value.files=h.dataTransfer.files,s()),t.value=!1}function u(h){r.value.splice(h,1)}function m(h){return h.length>5&&window.innerWidth<300?h.substring(0,5)+"...":h.length>10&&window.innerWidth<400?h.substring(0,7)+"...":h.length>20&&window.innerWidth<500?h.substring(0,10)+"...":h}async function b(){if(n.value=!n.value,n.value)for(let h=0;h<r.value.length;h++){a.value.push({file:r.value[h],status:"transcribing...",text:"",duration:""});const M=new FormData;M.append("file",r.value[h]),fetch("https://transcribe-test.fly.dev/uploadFull",{method:"POST",body:M}).then(async O=>{let j=await O.json();a.value[h].text=j.text,a.value[h].keywords=j.keywords,a.value[h].status="Done ("+Math.round(j.time/1e3)+"sec)"})}else a.value=[]}return(h,M)=>(te(),ce("div",nd,[Q("div",{class:bn(["main flex flex-col grow gap-4 justify-items-stretch max-w-4xl",{"h-5/6":!n.value}])},[rd,n.value?ke("",!0):(te(),ce("div",{key:0,class:"flex flex-col justify-center items-center rounded-3xl dropzone-container shadow-inner h-5/6 w-full p-4",onDragover:o,onDragleave:Zc(l,["prevent","stop"]),onDrop:f},[Il(Q("input",{type:"file",multiple:"",name:"file",id:"fileInput",onChange:s,ref_key:"file",ref:i,accept:"audio/*, video/*",style:kt({"pointer-events":t.value?"none":"auto"})},null,36),[[Ic,!1]]),Q("label",{style:kt({"pointer-events":t.value?"none":"auto"}),for:"fileInput",class:"text-2xl my-4"},[t.value?(te(),ce("div",id,"Release to drop files here.")):(te(),ce("div",ad,[se(Qe(xt),{size:"2xl",icon:"file-import"}),sd]))],4),t.value?ke("",!0):(te(),ce("div",{key:0,style:kt({"pointer-events":t.value?"none":"auto"}),class:"w-full overflow-scroll"},[(te(!0),ce(xe,null,Ur(r.value,(O,j)=>(te(),ce("div",{key:j,class:"w-full p-2 items-center justify-between flex flex-row"},[Q("div",od,[O.type.includes("audio")?(te(),Xt(Qe(xt),{key:0,icon:"microphone"})):ke("",!0),O.type.includes("video")?(te(),Xt(Qe(xt),{key:1,icon:"video"})):ke("",!0),Q("div",ld,qe(m(O.name))+" ("+qe(Math.round(O.size/1024/1024))+" MB) ",1)]),Q("button",{class:"delete",onClick:E=>u(j)},[se(Qe(xt),{class:"mr-2",icon:"trash"}),fd],8,cd)]))),128))],4))],32)),Q("div",ud,[Q("button",{disabled:r.value.length==0,class:"button-39",style:{},onClick:b},[se(Qe(xt),{class:"mr-2",icon:n.value?"cancel":"upload"},null,8,["icon"]),Jt(" "+qe(n.value?"Cancel":"Transcribe"),1)],8,dd)]),n.value?(te(),ce("div",md,[t.value?ke("",!0):(te(),ce("div",pd,[(te(!0),ce(xe,null,Ur(a.value,(O,j)=>(te(),ce("div",{key:j,class:"w-full gap-1 items-center justify-between flex flex-col"},[Q("div",hd,[Q("div",vd,[O.file.type.includes("audio")?(te(),Xt(Qe(xt),{key:0,icon:"microphone"})):ke("",!0),O.file.type.includes("video")?(te(),Xt(Qe(xt),{key:1,icon:"video"})):ke("",!0),Q("div",gd,qe(O.file.name)+" ("+qe(Math.round(O.file.size/1024/1024))+" MB)",1)]),Q("span",null,qe(O.status),1)]),Q("div",bd,[!O.keywords||!O.text?(te(),ce("div",_d,yd)):ke("",!0),O.keywords?(te(),ce("div",xd,[Jt(" Keywords: "),(te(!0),ce(xe,null,Ur(O.keywords,E=>(te(),ce("div",{class:"my-1",key:j},[Q("span",wd,qe(E),1)]))),128))])):ke("",!0),O.text?(te(),ce("div",Ed,qe(O.text),1)):ke("",!0)])]))),128))]))])):ke("",!0)],2)]))}}),[["styles",[".main{--primary: rgb(255, 54, 165);align-items:center;justify-content:center;text-align:center}.tag{border:2px solid var(--primary)}.dropzone-container{border:2px solid #e2e8f0}.hidden-input{opacity:0;overflow:hidden;position:absolute;width:1px;height:1px}.file-label{font-size:20px;display:block;cursor:pointer}.preview-container{display:flex;margin-top:2rem}.preview-card{display:flex;border:1px solid #a2a2a2;padding:5px;margin-left:5px}.preview-img{width:50px;height:50px;border-radius:5px;border:1px solid #a2a2a2;background-color:#a2a2a2}.delete{background-color:#fd6868!important}button:hover{box-shadow:0 0 14px #00000080!important;filter:saturate(140%)}button{transition:box-shadow .2s,background-color .5s;filter:.2s;background-color:#ff36a5;border-radius:10px;color:#111827;line-height:1.25rem;padding:.75rem 1rem;text-align:center;cursor:pointer;-moz-user-select:none;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button-39:focus{outline:2px solid transparent;outline-offset:2px}.button-39:disabled{background-color:#c2c2c2}.button-39:disabled:hover{background-color:#c2c2c2;box-shadow:none!important}.button-39:focus-visible{box-shadow:none}"]]]));customElements.define("file-upload",Sd)});
