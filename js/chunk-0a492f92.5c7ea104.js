(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a492f92"],{4362:function(n,r,t){r.nextTick=function(n){var r=Array.prototype.slice.call(arguments);r.shift(),setTimeout((function(){n.apply(null,r)}),0)},r.platform=r.arch=r.execPath=r.title="browser",r.pid=1,r.browser=!0,r.env={},r.argv=[],r.binding=function(n){throw new Error("No such module. (Possibly not yet loaded)")},function(){var n,e="/";r.cwd=function(){return e},r.chdir=function(r){n||(n=t("df7c")),e=n.resolve(r,e)}}(),r.exit=r.kill=r.umask=r.dlopen=r.uptime=r.memoryUsage=r.uvCounters=function(){},r.features={}},"8a55":function(n,r,t){"use strict";t.r(r),function(n){function e(n,r){for(var t=0;t<r.length;t++){const e=r[t];if("string"!=typeof e&&!Array.isArray(e))for(const r in e)if("default"!==r&&!(r in n)){const t=Object.getOwnPropertyDescriptor(e,r);t&&Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:()=>e[r]})}}return Object.freeze(n)}t.d(r,"i",(function(){return f}));var o,i,a,u={exports:{}};o=u,i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,a=function(r){var t,e,o=void 0!==(r=r||{})?r:{};o.ready=new Promise((function(n,r){t=n,e=r}));var a,u={};for(a in o)o.hasOwnProperty(a)&&(u[a]=o[a]);var c="object"==typeof window,f="function"==typeof importScripts;"object"==typeof n&&"object"==typeof n.versions&&n.versions.node;var s,l="";function p(n){return o.locateFile?o.locateFile(n,l):l+n}(c||f)&&(f?l=self.location.href:"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),i&&(l=i),l=0!==l.indexOf("blob:")?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):"",f&&(s=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var d,h,v=o.print||console.log.bind(console),m=o.printErr||console.warn.bind(console);for(a in u)u.hasOwnProperty(a)&&(o[a]=u[a]);u=null,o.arguments,o.thisProgram,o.quit,o.wasmBinary&&(d=o.wasmBinary),o.noExitRuntime,"object"!=typeof WebAssembly&&tn("no native wasm support detected");var g=!1,y="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function _(n,r,t){for(var e=r+t,o=r;n[o]&&!(o>=e);)++o;if(o-r>16&&n.subarray&&y)return y.decode(n.subarray(r,o));for(var i="";r<o;){var a=n[r++];if(128&a){var u=63&n[r++];if(192!=(224&a)){var c=63&n[r++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&n[r++])<65536)i+=String.fromCharCode(a);else{var f=a-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function b(n,r){return n?_(P,n,r):""}function w(n,r,t,e){if(!(e>0))return 0;for(var o=t,i=t+e-1,a=0;a<n.length;++a){var u=n.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++a)),u<=127){if(t>=i)break;r[t++]=u}else if(u<=2047){if(t+1>=i)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=i)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=i)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-o}function A(n,r,t){return w(n,P,r,t)}function T(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++t)),e<=127?++r:r+=e<=2047?2:e<=65535?3:4}return r}var C,k,P,E,W,R,S,j,x,F,I="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function U(n,r){for(var t=n,e=t>>1,o=e+r/2;!(e>=o)&&W[e];)++e;if((t=e<<1)-n>32&&I)return I.decode(P.subarray(n,t));for(var i="",a=0;!(a>=r/2);++a){var u=E[n+2*a>>1];if(0==u)break;i+=String.fromCharCode(u)}return i}function O(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,o=(t-=2)<2*n.length?t/2:n.length,i=0;i<o;++i){var a=n.charCodeAt(i);E[r>>1]=a,r+=2}return E[r>>1]=0,r-e}function D(n){return 2*n.length}function H(n,r){for(var t=0,e="";!(t>=r/4);){var o=R[n+4*t>>2];if(0==o)break;if(++t,o>=65536){var i=o-65536;e+=String.fromCharCode(55296|i>>10,56320|1023&i)}else e+=String.fromCharCode(o)}return e}function z(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,o=e+t-4,i=0;i<n.length;++i){var a=n.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),R[r>>2]=a,(r+=4)+4>o)break}return R[r>>2]=0,r-e}function V(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function M(n,r){return n%r>0&&(n+=r-n%r),n}function B(n){C=n,o.HEAP8=k=new Int8Array(n),o.HEAP16=E=new Int16Array(n),o.HEAP32=R=new Int32Array(n),o.HEAPU8=P=new Uint8Array(n),o.HEAPU16=W=new Uint16Array(n),o.HEAPU32=S=new Uint32Array(n),o.HEAPF32=j=new Float32Array(n),o.HEAPF64=x=new Float64Array(n)}o.INITIAL_MEMORY;var N=[],q=[],J=[];function L(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)Y(o.preRun.shift());sn(N)}function G(){sn(q)}function X(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)$(o.postRun.shift());sn(J)}function Y(n){N.unshift(n)}function Z(n){q.unshift(n)}function $(n){J.unshift(n)}var K=0,Q=null;function nn(n){K++,o.monitorRunDependencies&&o.monitorRunDependencies(K)}function rn(n){if(K--,o.monitorRunDependencies&&o.monitorRunDependencies(K),0==K&&Q){var r=Q;Q=null,r()}}function tn(n){o.onAbort&&o.onAbort(n),m(n="Aborted("+n+")"),g=!0,n+=". Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(n);throw e(r),r}o.preloadedImages={},o.preloadedAudios={};var en,on="data:application/octet-stream;base64,";function an(n){return n.startsWith(on)}function un(n){try{if(n==en&&d)return new Uint8Array(d);if(s)return s(n);throw"both async and sync fetching of the wasm failed"}catch(m){tn(m)}}function cn(){return d||!c&&!f||"function"!=typeof fetch?Promise.resolve().then((function(){return un(en)})):fetch(en,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+en+"'";return n.arrayBuffer()})).catch((function(){return un(en)}))}function fn(){var n={env:Or,wasi_snapshot_preview1:Or};function r(n,r){var t=n.exports;o.asm=t,B((h=o.asm.memory).buffer),F=o.asm.__indirect_function_table,Z(o.asm.__wasm_call_ctors),rn()}function t(n){r(n.instance)}function i(r){return cn().then((function(r){return WebAssembly.instantiate(r,n)})).then((function(n){return n})).then(r,(function(n){m("failed to asynchronously prepare wasm: "+n),tn(n)}))}function a(){return d||"function"!=typeof WebAssembly.instantiateStreaming||an(en)||"function"!=typeof fetch?i(t):fetch(en,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,n).then(t,(function(n){return m("wasm streaming compile failed: "+n),m("falling back to ArrayBuffer instantiation"),i(t)}))}))}if(nn(),o.instantiateWasm)try{return o.instantiateWasm(n,r)}catch(c){return m("Module.instantiateWasm callback failed with error: "+c),!1}return a().catch(e),{}}function sn(n){for(;n.length>0;){var r=n.shift();if("function"!=typeof r){var t=r.func;"number"==typeof t?void 0===r.arg?pn(t)():pn(t)(r.arg):t(void 0===r.arg?null:r.arg)}else r(o)}}an(en="i3s.wasm")||(en=p(en));var ln=[];function pn(n){var r=ln[n];return r||(n>=ln.length&&(ln.length=n+1),ln[n]=r=F.get(n)),r}function dn(n,r){pn(n)(r)}function hn(n){return Hr(n+16)+16}function vn(n,r){}function mn(n,r){return vn()}function gn(n){this.excPtr=n,this.ptr=n-16,this.set_type=function(n){R[this.ptr+4>>2]=n},this.get_type=function(){return R[this.ptr+4>>2]},this.set_destructor=function(n){R[this.ptr+8>>2]=n},this.get_destructor=function(){return R[this.ptr+8>>2]},this.set_refcount=function(n){R[this.ptr>>2]=n},this.set_caught=function(n){n=n?1:0,k[this.ptr+12>>0]=n},this.get_caught=function(){return 0!=k[this.ptr+12>>0]},this.set_rethrown=function(n){n=n?1:0,k[this.ptr+13>>0]=n},this.get_rethrown=function(){return 0!=k[this.ptr+13>>0]},this.init=function(n,r){this.set_type(n),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=R[this.ptr>>2];R[this.ptr>>2]=n+1},this.release_ref=function(){var n=R[this.ptr>>2];return R[this.ptr>>2]=n-1,1===n}}function yn(n,r,t){throw new gn(n).init(r,t),n}var _n={};function bn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function wn(n){return this.fromWireType(S[n>>2])}var An={},Tn={},Cn={},kn=48,Pn=57;function En(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=kn&&r<=Pn?"_"+n:n}function Wn(n,r){return n=En(n),function(){return r.apply(this,arguments)}}function Rn(n,r){var t=Wn(r,(function(n){this.name=r,this.message=n;var t=new Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var Sn=void 0;function jn(n){throw new Sn(n)}function xn(n,r,t){function e(r){var e=t(r);e.length!==n.length&&jn("Mismatched type converter count");for(var o=0;o<n.length;++o)Mn(n[o],e[o])}n.forEach((function(n){Cn[n]=r}));var o=new Array(r.length),i=[],a=0;r.forEach((function(n,r){Tn.hasOwnProperty(n)?o[r]=Tn[n]:(i.push(n),An.hasOwnProperty(n)||(An[n]=[]),An[n].push((function(){o[r]=Tn[n],++a===i.length&&e(o)})))})),0===i.length&&e(o)}function Fn(n){var r=_n[n];delete _n[n];var t=r.rawConstructor,e=r.rawDestructor,o=r.fields;xn([n],o.map((function(n){return n.getterReturnType})).concat(o.map((function(n){return n.setterArgumentType}))),(function(n){var i={};return o.forEach((function(r,t){var e=r.fieldName,a=n[t],u=r.getter,c=r.getterContext,f=n[t+o.length],s=r.setter,l=r.setterContext;i[e]={read:function(n){return a.fromWireType(u(c,n))},write:function(n,r){var t=[];s(l,n,f.toWireType(t,r)),bn(t)}}})),[{name:r.name,fromWireType:function(n){var r={};for(var t in i)r[t]=i[t].read(n);return e(n),r},toWireType:function(n,r){for(var o in i)if(!(o in r))throw new TypeError('Missing field:  "'+o+'"');var a=t();for(o in i)i[o].write(a,r[o]);return null!==n&&n.push(e,a),a},argPackAdvance:8,readValueFromPointer:wn,destructorFunction:e}]}))}function In(n,r,t,e,o){}function Un(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function On(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);Dn=n}var Dn=void 0;function Hn(n){for(var r="",t=n;P[t];)r+=Dn[P[t++]];return r}var zn=void 0;function Vn(n){throw new zn(n)}function Mn(n,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||Vn('type "'+e+'" must have a positive integer typeid pointer'),Tn.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;Vn("Cannot register type '"+e+"' twice")}if(Tn[n]=r,delete Cn[n],An.hasOwnProperty(n)){var o=An[n];delete An[n],o.forEach((function(n){n()}))}}function Bn(n,r,t,e,o){var i=Un(t);Mn(n,{name:r=Hn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:o},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=k;else if(2===t)e=E;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);e=R}return this.fromWireType(e[n>>i])},destructorFunction:null})}var Nn=[],qn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Jn(n){n>4&&0==--qn[n].refcount&&(qn[n]=void 0,Nn.push(n))}function Ln(){for(var n=0,r=5;r<qn.length;++r)void 0!==qn[r]&&++n;return n}function Gn(){for(var n=5;n<qn.length;++n)if(void 0!==qn[n])return qn[n];return null}function Xn(){o.count_emval_handles=Ln,o.get_first_emval=Gn}var Yn={toValue:function(n){return n||Vn("Cannot use deleted val. handle = "+n),qn[n].value},toHandle:function(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=Nn.length?Nn.pop():qn.length;return qn[r]={refcount:1,value:n},r}}};function Zn(n,r){Mn(n,{name:r=Hn(r),fromWireType:function(n){var r=Yn.toValue(n);return Jn(n),r},toWireType:function(n,r){return Yn.toHandle(r)},argPackAdvance:8,readValueFromPointer:wn,destructorFunction:null})}function $n(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function Kn(n,r){switch(r){case 2:return function(n){return this.fromWireType(j[n>>2])};case 3:return function(n){return this.fromWireType(x[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Qn(n,r,t){var e=Un(t);Mn(n,{name:r=Hn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+$n(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:Kn(r,e),destructorFunction:null})}function nr(n,r,t,e,o){var i=r.length;i<2&&Vn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==r[1]&&null!==t,u=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){u=!0;break}var f="void"!==r[0].name,s=i-2,l=new Array(s),p=[],d=[];return function(){var t;arguments.length!==s&&Vn("function "+n+" called with "+arguments.length+" arguments, expected "+s+" args!"),d.length=0,p.length=a?2:1,p[0]=o,a&&(t=r[1].toWireType(d,this),p[1]=t);for(var i=0;i<s;++i)l[i]=r[i+2].toWireType(d,arguments[i]),p.push(l[i]);function c(n){if(u)bn(d);else for(var e=a?1:2;e<r.length;e++){var o=1===e?t:l[e-2];null!==r[e].destructorFunction&&r[e].destructorFunction(o)}if(f)return r[0].fromWireType(n)}return c(e.apply(null,p))}}function rr(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||Vn("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}function tr(n,r,t){o.hasOwnProperty(n)?((void 0===t||void 0!==o[n].overloadTable&&void 0!==o[n].overloadTable[t])&&Vn("Cannot register public name '"+n+"' twice"),rr(o,n,n),o.hasOwnProperty(t)&&Vn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),o[n].overloadTable[t]=r):(o[n]=r,void 0!==t&&(o[n].numArguments=t))}function er(n,r){for(var t=[],e=0;e<n;e++)t.push(R[(r>>2)+e]);return t}function or(n,r,t){o.hasOwnProperty(n)||jn("Replacing nonexistant public symbol"),void 0!==o[n].overloadTable&&void 0!==t?o[n].overloadTable[t]=r:(o[n]=r,o[n].argCount=t)}function ir(n,r,t){var e=o["dynCall_"+n];return t&&t.length?e.apply(null,[r].concat(t)):e.call(null,r)}function ar(n,r,t){return n.includes("j")?ir(n,r,t):pn(r).apply(null,t)}function ur(n,r){var t=[];return function(){t.length=arguments.length;for(var e=0;e<arguments.length;e++)t[e]=arguments[e];return ar(n,r,t)}}function cr(n,r){function t(){return n.includes("j")?ur(n,r):pn(r)}n=Hn(n);var e=t();return"function"!=typeof e&&Vn("unknown function pointer with signature "+n+": "+r),e}var fr=void 0;function sr(n){var r=Vr(n),t=Hn(r);return zr(r),t}function lr(n,r){var t=[],e={};function o(n){e[n]||Tn[n]||(Cn[n]?Cn[n].forEach(o):(t.push(n),e[n]=!0))}throw r.forEach(o),new fr(n+": "+t.map(sr).join([", "]))}function pr(n,r,t,e,o,i){var a=er(r,t);n=Hn(n),o=cr(e,o),tr(n,(function(){lr("Cannot call "+n+" due to unbound types",a)}),r-1),xn([],a,(function(t){var e=[t[0],null].concat(t.slice(1));return or(n,nr(n,e,null,o,i),r-1),[]}))}function dr(n,r,t){switch(r){case 0:return t?function(n){return k[n]}:function(n){return P[n]};case 1:return t?function(n){return E[n>>1]}:function(n){return W[n>>1]};case 2:return t?function(n){return R[n>>2]}:function(n){return S[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function hr(n,r,t,e,o){r=Hn(r),-1===o&&(o=4294967295);var i=Un(t),a=function(n){return n};if(0===e){var u=32-8*t;a=function(n){return n<<u>>>u}}var c=r.includes("unsigned");Mn(n,{name:r,fromWireType:a,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+$n(t)+'" to '+this.name);if(t<e||t>o)throw new TypeError('Passing a number "'+$n(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+e+", "+o+"]!");return c?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:dr(r,i,0!==e),destructorFunction:null})}function vr(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=S,t=r[n>>=2],o=r[n+1];return new e(C,o,t)}Mn(n,{name:t=Hn(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function mr(n,r){var t="std::string"===(r=Hn(r));Mn(n,{name:r,fromWireType:function(n){var r,e=S[n>>2];if(t)for(var o=n+4,i=0;i<=e;++i){var a=n+4+i;if(i==e||0==P[a]){var u=b(o,a-o);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),o=a+1}}else{var c=new Array(e);for(i=0;i<e;++i)c[i]=String.fromCharCode(P[n+4+i]);r=c.join("")}return zr(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var e="string"==typeof r;e||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||Vn("Cannot pass non-string to std::string");var o=(t&&e?function(){return T(r)}:function(){return r.length})(),i=Hr(4+o+1);if(S[i>>2]=o,t&&e)A(r,i+4,o+1);else if(e)for(var a=0;a<o;++a){var u=r.charCodeAt(a);u>255&&(zr(i),Vn("String has UTF-16 code units that do not fit in 8 bits")),P[i+4+a]=u}else for(a=0;a<o;++a)P[i+4+a]=r[a];return null!==n&&n.push(zr,i),i},argPackAdvance:8,readValueFromPointer:wn,destructorFunction:function(n){zr(n)}})}function gr(n,r,t){var e,o,i,a,u;t=Hn(t),2===r?(e=U,o=O,a=D,i=function(){return W},u=1):4===r&&(e=H,o=z,a=V,i=function(){return S},u=2),Mn(n,{name:t,fromWireType:function(n){for(var t,o=S[n>>2],a=i(),c=n+4,f=0;f<=o;++f){var s=n+4+f*r;if(f==o||0==a[s>>u]){var l=e(c,s-c);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),c=s+r}}return zr(n),t},toWireType:function(n,e){"string"!=typeof e&&Vn("Cannot pass non-string to C++ string type "+t);var i=a(e),c=Hr(4+i+r);return S[c>>2]=i>>u,o(e,c+4,i+r),null!==n&&n.push(zr,c),c},argPackAdvance:8,readValueFromPointer:wn,destructorFunction:function(n){zr(n)}})}function yr(n,r,t,e,o,i){_n[n]={name:Hn(r),rawConstructor:cr(t,e),rawDestructor:cr(o,i),fields:[]}}function _r(n,r,t,e,o,i,a,u,c,f){_n[n].fields.push({fieldName:Hn(r),getterReturnType:t,getter:cr(e,o),getterContext:i,setterArgumentType:a,setter:cr(u,c),setterContext:f})}function br(n,r){Mn(n,{isVoid:!0,name:r=Hn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})}function wr(n){n>4&&(qn[n].refcount+=1)}var Ar={};function Tr(n){var r=Ar[n];return void 0===r?Hn(n):r}function Cr(n){return Yn.toHandle(Tr(n))}function kr(n,r){var t=Tn[n];return void 0===t&&Vn(r+" has unknown type "+sr(n)),t}function Pr(n,r){var t=(n=kr(n,"_emval_take_value")).readValueFromPointer(r);return Yn.toHandle(t)}function Er(){tn("")}function Wr(n,r,t){P.copyWithin(n,r,r+t)}function Rr(n){try{return h.grow(n-C.byteLength+65535>>>16),B(h.buffer),1}catch(t){}}function Sr(n){var r=P.length,t=2147483648;if((n>>>=0)>t)return!1;for(var e=1;e<=4;e*=2){var o=r*(1+.2/e);if(o=Math.min(o,n+100663296),Rr(Math.min(t,M(Math.max(n,o),65536))))return!0}return!1}var jr={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var t=jr.buffers[n];0===r||10===r?((1===n?v:m)(_(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return jr.varargs+=4,R[jr.varargs-4>>2]},getStr:function(n){return b(n)},get64:function(n,r){return n}};function xr(n){return 0}function Fr(n,r,t,e,o){}function Ir(n,r,t,e){for(var o=0,i=0;i<t;i++){var a=R[r>>2],u=R[r+4>>2];r+=8;for(var c=0;c<u;c++)jr.printChar(n,P[a+c]);o+=u}return R[e>>2]=o,0}function Ur(n){}Sn=o.InternalError=Rn(Error,"InternalError"),On(),zn=o.BindingError=Rn(Error,"BindingError"),Xn(),fr=o.UnboundTypeError=Rn(Error,"UnboundTypeError");var Or={__call_sighandler:dn,__cxa_allocate_exception:hn,__cxa_atexit:mn,__cxa_throw:yn,_embind_finalize_value_object:Fn,_embind_register_bigint:In,_embind_register_bool:Bn,_embind_register_emval:Zn,_embind_register_float:Qn,_embind_register_function:pr,_embind_register_integer:hr,_embind_register_memory_view:vr,_embind_register_std_string:mr,_embind_register_std_wstring:gr,_embind_register_value_object:yr,_embind_register_value_object_field:_r,_embind_register_void:br,_emval_decref:Jn,_emval_incref:wr,_emval_new_cstring:Cr,_emval_take_value:Pr,abort:Er,emscripten_memcpy_big:Wr,emscripten_resize_heap:Sr,fd_close:xr,fd_seek:Fr,fd_write:Ir,setTempRet0:Ur};fn(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.__wasm_call_ctors).apply(null,arguments)};var Dr,Hr=o._malloc=function(){return(Hr=o._malloc=o.asm.malloc).apply(null,arguments)},zr=o._free=function(){return(zr=o._free=o.asm.free).apply(null,arguments)},Vr=o.___getTypeName=function(){return(Vr=o.___getTypeName=o.asm.__getTypeName).apply(null,arguments)};function Mr(n){function r(){Dr||(Dr=!0,o.calledRun=!0,g||(G(),t(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),X()))}K>0||(L(),K>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),r()}),1)):r()))}if(o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.__embind_register_native_and_builtin_types).apply(null,arguments)},o.___errno_location=function(){return(o.___errno_location=o.asm.__errno_location).apply(null,arguments)},o.stackSave=function(){return(o.stackSave=o.asm.stackSave).apply(null,arguments)},o.stackRestore=function(){return(o.stackRestore=o.asm.stackRestore).apply(null,arguments)},o.stackAlloc=function(){return(o.stackAlloc=o.asm.stackAlloc).apply(null,arguments)},o.dynCall_vij=function(){return(o.dynCall_vij=o.asm.dynCall_vij).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.dynCall_jiji).apply(null,arguments)},Q=function n(){Dr||Mr(),Dr||(Q=n)},o.run=Mr,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return Mr(),r.ready},o.exports=a;const c=u.exports,f=Object.freeze(e({__proto__:null,default:c},[u.exports]))}.call(this,t("4362"))},df7c:function(n,r,t){(function(n){function t(n,r){for(var t=0,e=n.length-1;e>=0;e--){var o=n[e];"."===o?n.splice(e,1):".."===o?(n.splice(e,1),t++):t&&(n.splice(e,1),t--)}if(r)for(;t--;t)n.unshift("..");return n}function e(n){"string"!==typeof n&&(n+="");var r,t=0,e=-1,o=!0;for(r=n.length-1;r>=0;--r)if(47===n.charCodeAt(r)){if(!o){t=r+1;break}}else-1===e&&(o=!1,e=r+1);return-1===e?"":n.slice(t,e)}function o(n,r){if(n.filter)return n.filter(r);for(var t=[],e=0;e<n.length;e++)r(n[e],e,n)&&t.push(n[e]);return t}r.resolve=function(){for(var r="",e=!1,i=arguments.length-1;i>=-1&&!e;i--){var a=i>=0?arguments[i]:n.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(r=a+"/"+r,e="/"===a.charAt(0))}return r=t(o(r.split("/"),(function(n){return!!n})),!e).join("/"),(e?"/":"")+r||"."},r.normalize=function(n){var e=r.isAbsolute(n),a="/"===i(n,-1);return n=t(o(n.split("/"),(function(n){return!!n})),!e).join("/"),n||e||(n="."),n&&a&&(n+="/"),(e?"/":"")+n},r.isAbsolute=function(n){return"/"===n.charAt(0)},r.join=function(){var n=Array.prototype.slice.call(arguments,0);return r.normalize(o(n,(function(n,r){if("string"!==typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},r.relative=function(n,t){function e(n){for(var r=0;r<n.length;r++)if(""!==n[r])break;for(var t=n.length-1;t>=0;t--)if(""!==n[t])break;return r>t?[]:n.slice(r,t-r+1)}n=r.resolve(n).substr(1),t=r.resolve(t).substr(1);for(var o=e(n.split("/")),i=e(t.split("/")),a=Math.min(o.length,i.length),u=a,c=0;c<a;c++)if(o[c]!==i[c]){u=c;break}var f=[];for(c=u;c<o.length;c++)f.push("..");return f=f.concat(i.slice(u)),f.join("/")},r.sep="/",r.delimiter=":",r.dirname=function(n){if("string"!==typeof n&&(n+=""),0===n.length)return".";for(var r=n.charCodeAt(0),t=47===r,e=-1,o=!0,i=n.length-1;i>=1;--i)if(r=n.charCodeAt(i),47===r){if(!o){e=i;break}}else o=!1;return-1===e?t?"/":".":t&&1===e?"/":n.slice(0,e)},r.basename=function(n,r){var t=e(n);return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t},r.extname=function(n){"string"!==typeof n&&(n+="");for(var r=-1,t=0,e=-1,o=!0,i=0,a=n.length-1;a>=0;--a){var u=n.charCodeAt(a);if(47!==u)-1===e&&(o=!1,e=a+1),46===u?-1===r?r=a:1!==i&&(i=1):-1!==r&&(i=-1);else if(!o){t=a+1;break}}return-1===r||-1===e||0===i||1===i&&r===e-1&&r===t+1?"":n.slice(r,e)};var i="b"==="ab".substr(-1)?function(n,r,t){return n.substr(r,t)}:function(n,r,t){return r<0&&(r=n.length+r),n.substr(r,t)}}).call(this,t("4362"))}}]);
//# sourceMappingURL=chunk-0a492f92.5c7ea104.js.map