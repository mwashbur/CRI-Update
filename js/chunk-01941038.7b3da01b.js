(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01941038"],{"04f0":function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return T})),r.d(e,"d",(function(){return C})),r.d(e,"e",(function(){return g})),r.d(e,"f",(function(){return d})),r.d(e,"g",(function(){return I})),r.d(e,"h",(function(){return y}));var n=r("dae5"),f=r("b139"),s=r("0b2d"),u=r("4212"),i=r("e431"),c=r("7577");function o(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function y(t,e,r){r*=.5;const n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function a(t,e){const r=2*Math.acos(e[3]),n=Math.sin(r/2);return n>u["a"]?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function d(t,e,r){const n=e[0],f=e[1],s=e[2],u=e[3],i=r[0],c=r[1],o=r[2],y=r[3];return t[0]=n*y+u*i+f*o-s*c,t[1]=f*y+u*c+s*i-n*o,t[2]=s*y+u*o+n*c-f*i,t[3]=u*y-n*i-f*c-s*o,t}function l(t,e,r){r*=.5;const n=e[0],f=e[1],s=e[2],u=e[3],i=Math.sin(r),c=Math.cos(r);return t[0]=n*c+u*i,t[1]=f*c+s*i,t[2]=s*c-f*i,t[3]=u*c-n*i,t}function p(t,e,r){r*=.5;const n=e[0],f=e[1],s=e[2],u=e[3],i=Math.sin(r),c=Math.cos(r);return t[0]=n*c-s*i,t[1]=f*c+u*i,t[2]=s*c+n*i,t[3]=u*c-f*i,t}function h(t,e,r){r*=.5;const n=e[0],f=e[1],s=e[2],u=e[3],i=Math.sin(r),c=Math.cos(r);return t[0]=n*c+f*i,t[1]=f*c-n*i,t[2]=s*c+u*i,t[3]=u*c-s*i,t}function b(t,e){const r=e[0],n=e[1],f=e[2];return t[0]=r,t[1]=n,t[2]=f,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-f*f)),t}function O(t,e,r,n){const f=e[0],s=e[1],i=e[2],c=e[3];let o,y,a,d,l,p=r[0],h=r[1],b=r[2],O=r[3];return y=f*p+s*h+i*b+c*O,y<0&&(y=-y,p=-p,h=-h,b=-b,O=-O),1-y>u["a"]?(o=Math.acos(y),a=Math.sin(o),d=Math.sin((1-n)*o)/a,l=Math.sin(n*o)/a):(d=1-n,l=n),t[0]=d*f+l*p,t[1]=d*s+l*h,t[2]=d*i+l*b,t[3]=d*c+l*O,t}function B(t){const e=Object(u["b"])(),r=Object(u["b"])(),n=Object(u["b"])(),f=Math.sqrt(1-e),s=Math.sqrt(e);return t[0]=f*Math.sin(2*Math.PI*r),t[1]=f*Math.cos(2*Math.PI*r),t[2]=s*Math.sin(2*Math.PI*n),t[3]=s*Math.cos(2*Math.PI*n),t}function T(t,e){const r=e[0],n=e[1],f=e[2],s=e[3],u=r*r+n*n+f*f+s*s,i=u?1/u:0;return t[0]=-r*i,t[1]=-n*i,t[2]=-f*i,t[3]=s*i,t}function m(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function E(t,e){const r=e[0]+e[4]+e[8];let n;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[3*r+r]&&(r=2);const f=(r+1)%3,s=(r+2)%3;n=Math.sqrt(e[3*r+r]-e[3*f+f]-e[3*s+s]+1),t[r]=.5*n,n=.5/n,t[3]=(e[3*f+s]-e[3*s+f])*n,t[f]=(e[3*f+r]+e[3*r+f])*n,t[s]=(e[3*s+r]+e[3*r+s])*n}return t}function g(t,e,r,n){const f=.5*Math.PI/180;e*=f,r*=f,n*=f;const s=Math.sin(e),u=Math.cos(e),i=Math.sin(r),c=Math.cos(r),o=Math.sin(n),y=Math.cos(n);return t[0]=s*c*y-u*i*o,t[1]=u*i*y+s*c*o,t[2]=u*c*o-s*i*y,t[3]=u*c*y+s*i*o,t}function j(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const A=c["c"],M=c["l"],S=c["a"],w=d,_=c["b"],L=c["d"],x=c["j"],v=c["e"],P=v,F=c["f"],R=F,N=c["k"],C=c["g"],Y=c["h"];function I(t,e,r){const n=Object(i["h"])(e,r);return n<-.999999?(Object(i["g"])(V,k,e),Object(i["y"])(V)<1e-6&&Object(i["g"])(V,z,e),Object(i["r"])(V,V),y(t,V,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(i["g"])(V,e,r),t[0]=V[0],t[1]=V[1],t[2]=V[2],t[3]=1+n,N(t,t))}const V=Object(s["f"])(),k=Object(s["h"])(1,0,0),z=Object(s["h"])(0,1,0);function q(t,e,r,n,f,s){return O(U,e,f,s),O(G,r,n,s),O(t,U,G,2*s*(1-s)),t}const U=Object(f["b"])(),G=Object(f["b"])();function W(t,e,r,n){const f=D;return f[0]=r[0],f[3]=r[1],f[6]=r[2],f[1]=n[0],f[4]=n[1],f[7]=n[2],f[2]=-e[0],f[5]=-e[1],f[8]=-e[2],N(t,E(t,f))}const D=Object(n["b"])();Object.freeze({__proto__:null,identity:o,setAxisAngle:y,getAxisAngle:a,multiply:d,rotateX:l,rotateY:p,rotateZ:h,calculateW:b,slerp:O,random:B,invert:T,conjugate:m,fromMat3:E,fromEuler:g,str:j,copy:A,set:M,add:S,mul:w,scale:_,dot:L,lerp:x,length:v,len:P,squaredLength:F,sqrLen:R,normalize:N,exactEquals:C,equals:Y,rotationTo:I,sqlerp:q,setAxes:W})},"33b0":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return y})),r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return i})),r.d(e,"f",(function(){return c}));var n=r("38a4"),f=r("04f0"),s=r("b139"),u=r("e431");function i(t=p){return[t[0],t[1],t[2],t[3]]}function c(t,e,r=i()){return Object(u["k"])(y(r),t),r[3]=e,r}function o(t,e,r=i()){return Object(f["h"])(h,y(t),d(t)),Object(f["h"])(b,y(e),d(e)),Object(f["f"])(h,b,h),l(r,Object(n["l"])(Object(f["b"])(y(r),h)))}function y(t){return t}function a(t){return t[3]}function d(t){return Object(n["f"])(t[3])}function l(t,e){return t[3]=e,t}const p=[0,0,1,0],h=Object(s["b"])(),b=Object(s["b"])();i()},"3ebc":function(t,e,r){"use strict";function n(t,e){var r;return t.isGeographic||t.isWebMercator&&(null==(r=null==e?void 0:e.geographic)||r)}r.d(e,"a",(function(){return n}))},4554:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return B})),r.d(e,"c",(function(){return O})),r.d(e,"d",(function(){return M})),r.d(e,"e",(function(){return A})),r.d(e,"f",(function(){return T})),r.d(e,"g",(function(){return g})),r.d(e,"h",(function(){return E})),r.d(e,"i",(function(){return j}));var n=r("e92d"),f=r("b2b2"),s=r("1c92"),u=r("dae5"),i=r("afe1"),c=r("e431"),o=r("0b2d"),y=r("8188"),a=r("f694"),d=r("7f83"),l=r("9786"),p=r("8190"),h=r("668b");const b=n["a"].getLogger("esri.geometry.support.meshUtils.normalProjection");function O(t,e,r,n,f){return w(n)?(S(0,p["u"].fromTypedArray(t),p["v"].fromTypedArray(e),p["v"].fromTypedArray(r),n,p["u"].fromTypedArray(f)),f):(b.error("Cannot convert spatial reference to PCPF"),f)}function B(t,e,r,n,f){return w(n)?(S(1,p["u"].fromTypedArray(t),p["v"].fromTypedArray(e),p["v"].fromTypedArray(r),n,p["u"].fromTypedArray(f)),f):(b.error("Cannot convert to spatial reference from PCPF"),f)}function T(t,e,r){return Object(y["k"])(t,e,0,r,Object(a["g"])(e),0,t.length/3),r}function m(t,e,r){return Object(y["k"])(t,Object(a["g"])(r),0,e,r,0,t.length/3),e}function E(t,e,r){if(Object(f["k"])(t))return e;const n=p["v"].fromTypedArray(t),s=p["v"].fromTypedArray(e);return Object(h["e"])(s,n,r),e}function g(t,e,r){if(Object(f["k"])(t))return e;Object(s["a"])(F,r);const n=p["u"].fromTypedArray(t),u=p["u"].fromTypedArray(e);return Object(h["a"])(u,n,F),Object(s["g"])(F)||Object(h["c"])(u,u),e}function j(t,e,r){if(Object(f["k"])(t))return e;Object(s["a"])(F,r);const n=p["u"].fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),u=p["u"].fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT);if(Object(h["a"])(u,n,F),Object(s["g"])(F)||Object(h["c"])(u,u),t!==e)for(let f=3;f<t.length;f+=4)e[f]=t[f];return e}function A(t,e,r,n,f){if(!w(n))return b.error("Cannot convert spatial reference to PCPF"),f;S(0,p["u"].fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),p["v"].fromTypedArray(e),p["v"].fromTypedArray(r),n,p["u"].fromTypedArray(f,4*Float32Array.BYTES_PER_ELEMENT));for(let s=3;s<t.length;s+=4)f[s]=t[s];return f}function M(t,e,r,n,f){if(!w(n))return b.error("Cannot convert to spatial reference from PCPF"),f;S(1,p["u"].fromTypedArray(t,16),p["v"].fromTypedArray(e),p["v"].fromTypedArray(r),n,p["u"].fromTypedArray(f,16));for(let s=3;s<t.length;s+=4)f[s]=t[s];return f}function S(t,e,r,n,f,u){if(!e)return;const i=r.count,o=Object(a["g"])(f);if(_(f))for(let a=0;a<i;a++)n.getVec(a,x),e.getVec(a,v),Object(y["c"])(o,x,P,o),Object(s["f"])(F,P),1===t&&Object(s["m"])(F,F),Object(c["x"])(v,v,F),u.setVec(a,v);else for(let a=0;a<i;a++){n.getVec(a,x),e.getVec(a,v),Object(y["c"])(o,x,P,o),Object(s["f"])(F,P);const f=Object(l["g"])(r.get(a,1));let i=Math.cos(f);0===t&&(i=1/i),F[0]*=i,F[1]*=i,F[2]*=i,F[3]*=i,F[4]*=i,F[5]*=i,1===t&&Object(s["m"])(F,F),Object(c["x"])(v,v,F),Object(c["r"])(v,v),u.setVec(a,v)}return u}function w(t){return _(t)||L(t)}function _(t){return t.isWGS84||Object(d["f"])(t)||Object(d["i"])(t)||Object(d["j"])(t)}function L(t){return t.isWebMercator}const x=Object(o["f"])(),v=Object(o["f"])(),P=Object(i["d"])(),F=Object(u["b"])()},"4c96":function(t,e,r){"use strict";function n(t,e,r){const n=t.typedBuffer,f=t.typedBufferStride,s=e.typedBuffer,u=e.typedBufferStride,i=r?r.count:e.count;let c=(r&&r.dstIndex?r.dstIndex:0)*f,o=(r&&r.srcIndex?r.srcIndex:0)*u;for(let y=0;y<i;++y)n[c]=s[o],n[c+1]=s[o+1],n[c+2]=s[o+2],c+=f,o+=u}function f(t,e,r,n,f){var s,u;const i=t.typedBuffer,c=t.typedBufferStride,o=null!=(s=null==f?void 0:f.count)?s:t.count;let y=(null!=(u=null==f?void 0:f.dstIndex)?u:0)*c;for(let a=0;a<o;++a)i[y]=e,i[y+1]=r,i[y+2]=n,y+=c}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return f}));Object.freeze({__proto__:null,copy:n,fill:f})},6415:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n=r("e92d");const f=n["a"].getLogger("esri.views.3d.support.buffer.math")},"64d5":function(t,e,r){"use strict";r.d(e,"a",(function(){return E}));var n,f=r("a4ee"),s=r("6a0e"),u=r("b2b2"),i=r("59b2"),c=(r("b50f"),r("c120"),r("cea0"),r("d386")),o=r("d791"),y=r("afe1"),a=r("e431"),d=r("0b2d"),l=r("4ae5"),p=r("8188"),h=r("f694"),b=r("33b0"),O=r("8190"),B=r("668b"),T=r("4c96");let m=n=class extends s["a"]{constructor(t){super(t),this.origin=Object(d["f"])(),this.translation=Object(d["f"])(),this.rotation=Object(b["e"])(),this.scale=Object(d["h"])(1,1,1),this.geographic=!0}get localMatrix(){const t=Object(y["d"])();return Object(o["g"])(t,t,this.scale),Object(o["f"])(t,t,Object(b["b"])(this.rotation),Object(b["c"])(this.rotation)),Object(o["b"])(t,t,this.translation),t}get localMatrixInverse(){return Object(o["c"])(Object(y["d"])(),this.localMatrix)}applyLocal(t,e){return Object(a["q"])(e,t,this.localMatrix)}applyLocalInverse(t,e){return Object(a["q"])(e,t,this.localMatrixInverse)}project(t,e){const r=new Float64Array(t.length),n=O["v"].fromTypedArray(r),f=O["v"].fromTypedArray(t);if(this.geographic){const t=Object(h["h"])(Object(h["e"])(e)),s=Object(y["d"])();return Object(p["c"])(e,this.origin,s,t),Object(o["n"])(s,s,this.localMatrix),Object(B["e"])(n,f,s),Object(p["k"])(r,t,0,r,e,0,r.length/3),r}const{localMatrix:s,origin:u}=this;Object(o["o"])(s,y["a"])?Object(T["a"])(n,f):Object(B["e"])(n,f,s);for(let i=0;i<r.length;i+=3)r[i+0]+=u[0],r[i+1]+=u[1],r[i+2]+=u[2];return r}getOriginPoint(t){const[e,r,n]=this.origin;return new l["a"]({x:e,y:r,z:n,spatialReference:t})}equals(t){return Object(u["l"])(t)&&this.geographic===t.geographic&&Object(a["o"])(this.origin,t.origin)&&Object(o["q"])(this.localMatrix,t.localMatrix)}clone(){const t={origin:Object(d["d"])(this.origin),translation:Object(d["d"])(this.translation),rotation:Object(b["e"])(this.rotation),scale:Object(d["d"])(this.scale),geographic:this.geographic};return new n(t)}};Object(f["a"])([Object(i["b"])({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"origin",void 0),Object(f["a"])([Object(i["b"])({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"translation",void 0),Object(f["a"])([Object(i["b"])({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"rotation",void 0),Object(f["a"])([Object(i["b"])({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"scale",void 0),Object(f["a"])([Object(i["b"])({type:Boolean,nonNullable:!0,json:{write:!0}})],m.prototype,"geographic",void 0),Object(f["a"])([Object(i["b"])()],m.prototype,"localMatrix",null),Object(f["a"])([Object(i["b"])()],m.prototype,"localMatrixInverse",null),m=n=Object(f["a"])([Object(c["a"])("esri.geometry.support.MeshTransform")],m);const E=m},"668b":function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return f}));var n=r("6415");function f(t,e,r){if(t.count!==e.count)return void n["a"].error("source and destination buffers need to have the same number of elements");const f=t.count,s=r[0],u=r[1],i=r[2],c=r[4],o=r[5],y=r[6],a=r[8],d=r[9],l=r[10],p=r[12],h=r[13],b=r[14],O=t.typedBuffer,B=t.typedBufferStride,T=e.typedBuffer,m=e.typedBufferStride;for(let n=0;n<f;n++){const t=n*B,e=n*m,r=T[e],f=T[e+1],E=T[e+2];O[t]=s*r+c*f+a*E+p,O[t+1]=u*r+o*f+d*E+h,O[t+2]=i*r+y*f+l*E+b}}function s(t,e,r){if(t.count!==e.count)return void n["a"].error("source and destination buffers need to have the same number of elements");const f=t.count,s=r[0],u=r[1],i=r[2],c=r[3],o=r[4],y=r[5],a=r[6],d=r[7],l=r[8],p=t.typedBuffer,h=t.typedBufferStride,b=e.typedBuffer,O=e.typedBufferStride;for(let n=0;n<f;n++){const t=n*h,e=n*O,r=b[e],f=b[e+1],B=b[e+2];p[t]=s*r+c*f+a*B,p[t+1]=u*r+o*f+d*B,p[t+2]=i*r+y*f+l*B}}function u(t,e,r){const n=Math.min(t.count,e.count),f=t.typedBuffer,s=t.typedBufferStride,u=e.typedBuffer,i=e.typedBufferStride;for(let c=0;c<n;c++){const t=c*s,e=c*i;f[t]=r*u[e],f[t+1]=r*u[e+1],f[t+2]=r*u[e+2]}}function i(t,e){const r=Math.min(t.count,e.count),n=t.typedBuffer,f=t.typedBufferStride,s=e.typedBuffer,u=e.typedBufferStride;for(let i=0;i<r;i++){const t=i*f,e=i*u,r=s[e],c=s[e+1],o=s[e+2],y=Math.sqrt(r*r+c*c+o*o);if(y>0){const e=1/y;n[t]=e*r,n[t+1]=e*c,n[t+2]=e*o}}}function c(t,e,r){const n=Math.min(t.count,e.count),f=t.typedBuffer,s=t.typedBufferStride,u=e.typedBuffer,i=e.typedBufferStride;for(let c=0;c<n;c++){const t=c*s,e=c*i;f[t]=u[e]>>r,f[t+1]=u[e+1]>>r,f[t+2]=u[e+2]>>r}}Object.freeze({__proto__:null,transformMat4:f,transformMat3:s,scale:u,normalize:i,shiftRight:c})},8190:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return k})),r.d(e,"d",(function(){return G})),r.d(e,"e",(function(){return C})),r.d(e,"f",(function(){return b})),r.d(e,"g",(function(){return O})),r.d(e,"h",(function(){return B})),r.d(e,"i",(function(){return T})),r.d(e,"j",(function(){return _})),r.d(e,"k",(function(){return P})),r.d(e,"l",(function(){return A})),r.d(e,"m",(function(){return l})),r.d(e,"n",(function(){return E})),r.d(e,"o",(function(){return z})),r.d(e,"p",(function(){return W})),r.d(e,"q",(function(){return Y})),r.d(e,"r",(function(){return L})),r.d(e,"s",(function(){return F})),r.d(e,"t",(function(){return M})),r.d(e,"u",(function(){return p})),r.d(e,"v",(function(){return g})),r.d(e,"w",(function(){return q})),r.d(e,"x",(function(){return D})),r.d(e,"y",(function(){return I})),r.d(e,"z",(function(){return x})),r.d(e,"A",(function(){return R})),r.d(e,"B",(function(){return S})),r.d(e,"C",(function(){return h})),r.d(e,"D",(function(){return j})),r.d(e,"E",(function(){return U})),r.d(e,"F",(function(){return J})),r.d(e,"G",(function(){return V})),r.d(e,"H",(function(){return v})),r.d(e,"I",(function(){return N})),r.d(e,"J",(function(){return w}));class n{constructor(t,e,r=0,n,f){this.TypedArrayConstructor=t,this.elementCount=9;const s=this.TypedArrayConstructor;void 0===n&&(n=9*s.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==f?new s(e,u):new s(e,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let n=0;n<9;n++)e[n]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let n=0;n<9;n++)this.typedBuffer[r++]=e[n]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const n=this.typedBuffer,f=e.typedBuffer;let s=t*this.typedBufferStride,u=r*e.typedBufferStride;for(let i=0;i<9;++i)n[s++]=f[u++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class f{constructor(t,e,r=0,n,f){this.TypedArrayConstructor=t,this.elementCount=16;const s=this.TypedArrayConstructor;void 0===n&&(n=16*s.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==f?new s(e,u):new s(e,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let n=0;n<16;n++)e[n]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let n=0;n<16;n++)this.typedBuffer[r++]=e[n]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const n=this.typedBuffer,f=e.typedBuffer;let s=t*this.typedBufferStride,u=r*e.typedBufferStride;for(let i=0;i<16;++i)n[s++]=f[u++]}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=16;class s{constructor(t,e,r=0,n,f){this.TypedArrayConstructor=t,this.elementCount=1;const s=this.TypedArrayConstructor;void 0===n&&(n=s.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==f?new s(e,u):new s(e,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=1;var u=r("3349");class i{constructor(t,e,r=0,n,f){this.TypedArrayConstructor=t,this.elementCount=2;const s=this.TypedArrayConstructor;void 0===n&&(n=2*s.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==f?new s(e,u):new s(e,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,Object(u["s"])(e,this.typedBuffer[t],this.typedBuffer[t+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const n=this.typedBuffer,f=e.typedBuffer;let s=t*this.typedBufferStride,u=r*e.typedBufferStride;n[s++]=f[u++],n[s]=f[u]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=2;var c=r("e431");class o{constructor(t,e,r=0,n,f){this.TypedArrayConstructor=t,this.elementCount=3;const s=this.TypedArrayConstructor;void 0===n&&(n=3*s.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==f?new s(e,u):new s(e,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,Object(c["w"])(e,this.typedBuffer[t],this.typedBuffer[t+1],this.typedBuffer[t+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,n){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=n}copyFrom(t,e,r){const n=this.typedBuffer,f=e.typedBuffer;let s=t*this.typedBufferStride,u=r*e.typedBufferStride;n[s++]=f[u++],n[s++]=f[u++],n[s]=f[u]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=3;var y=r("7577");class a{constructor(t,e,r=0,n,f){this.TypedArrayConstructor=t,this.elementCount=4;const s=this.TypedArrayConstructor;void 0===n&&(n=4*s.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==f?new s(e,u):new s(e,u,(f-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=n/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,Object(y["l"])(e,this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,n,f){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=n,this.typedBuffer[t]=f}copyFrom(t,e,r){const n=this.typedBuffer,f=e.typedBuffer;let s=t*this.typedBufferStride,u=r*e.typedBufferStride;n[s++]=f[u++],n[s++]=f[u++],n[s++]=f[u++],n[s]=f[u]}get buffer(){return this.typedBuffer.buffer}}a.ElementCount=4;class d extends s{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}static fromTypedArray(t,e){return new d(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}d.ElementType="f32";class l extends i{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(l,t,e)}static fromTypedArray(t,e){return new l(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}l.ElementType="f32";class p extends o{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(p,t,e)}static fromTypedArray(t,e){return new p(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}p.ElementType="f32";class h extends a{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(h,t,e)}static fromTypedArray(t,e){return new h(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}h.ElementType="f32";class b extends n{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(b,t,e)}static fromTypedArray(t,e){return new b(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}b.ElementType="f32";class O extends n{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(O,t,e)}static fromTypedArray(t,e){return new O(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}O.ElementType="f64";class B extends f{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(B,t,e)}static fromTypedArray(t,e){return new B(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}B.ElementType="f32";class T extends f{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(T,t,e)}static fromTypedArray(t,e){return new T(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}T.ElementType="f64";class m extends s{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(m,t,e)}static fromTypedArray(t,e){return new m(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}m.ElementType="f64";class E extends i{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(E,t,e)}static fromTypedArray(t,e){return new E(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}E.ElementType="f64";class g extends o{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(g,t,e)}static fromTypedArray(t,e){return new g(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}g.ElementType="f64";class j extends a{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(j,t,e)}static fromTypedArray(t,e){return new j(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}j.ElementType="f64";class A extends s{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(A,t,e)}static fromTypedArray(t,e){return new A(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}A.ElementType="u8";class M extends i{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(M,t,e)}static fromTypedArray(t,e){return new M(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}M.ElementType="u8";class S extends o{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(S,t,e)}static fromTypedArray(t,e){return new S(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}S.ElementType="u8";class w extends a{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(w,t,e)}static fromTypedArray(t,e){return new w(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}w.ElementType="u8";class _ extends s{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(_,t,e)}static fromTypedArray(t,e){return new _(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}_.ElementType="u16";class L extends i{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(L,t,e)}static fromTypedArray(t,e){return new L(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}L.ElementType="u16";class x extends o{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(x,t,e)}static fromTypedArray(t,e){return new x(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}x.ElementType="u16";class v extends a{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(v,t,e)}static fromTypedArray(t,e){return new v(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}v.ElementType="u16";class P extends s{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(P,t,e)}static fromTypedArray(t,e){return new P(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}P.ElementType="u32";class F extends i{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(F,t,e)}static fromTypedArray(t,e){return new F(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}F.ElementType="u32";class R extends o{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(R,t,e)}static fromTypedArray(t,e){return new R(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}R.ElementType="u32";class N extends a{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(N,t,e)}static fromTypedArray(t,e){return new N(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}N.ElementType="u32";class C extends s{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(C,t,e)}static fromTypedArray(t,e){return new C(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}C.ElementType="i8";class Y extends i{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(Y,t,e)}static fromTypedArray(t,e){return new Y(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}Y.ElementType="i8";class I extends o{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(I,t,e)}static fromTypedArray(t,e){return new I(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}I.ElementType="i8";class V extends a{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(V,t,e)}static fromTypedArray(t,e){return new V(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}V.ElementType="i8";class k extends s{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(k,t,e)}static fromTypedArray(t,e){return new k(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}k.ElementType="i16";class z extends i{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(z,t,e)}static fromTypedArray(t,e){return new z(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}z.ElementType="i16";class q extends o{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(q,t,e)}static fromTypedArray(t,e){return new q(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}q.ElementType="i16";class U extends a{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(U,t,e)}static fromTypedArray(t,e){return new U(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}U.ElementType="i16";class G extends s{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(G,t,e)}static fromTypedArray(t,e){return new G(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}G.ElementType="i32";class W extends i{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(W,t,e)}static fromTypedArray(t,e){return new W(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}W.ElementType="i32";class D extends o{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(D,t,e)}static fromTypedArray(t,e){return new D(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}D.ElementType="i32";class J extends a{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(J,t,e)}static fromTypedArray(t,e){return new J(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}J.ElementType="i32"},afe1:function(t,e,r){"use strict";function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function f(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function s(t,e,r,n,f,s,u,i,c,o,y,a,d,l,p,h){return[t,e,r,n,f,s,u,i,c,o,y,a,d,l,p,h]}function u(t,e){return new Float64Array(t,e,16)}r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return f})),r.d(e,"d",(function(){return n})),r.d(e,"e",(function(){return s}));const i=n();Object.freeze({__proto__:null,create:n,clone:f,fromValues:s,createView:u,IDENTITY:i})},b139:function(t,e,r){"use strict";function n(){return[0,0,0,1]}function f(t){return[t[0],t[1],t[2],t[3]]}function s(t,e,r,n){return[t,e,r,n]}function u(t,e){return new Float64Array(t,e,4)}r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return f})),r.d(e,"d",(function(){return u}));const i=n();Object.freeze({__proto__:null,create:n,clone:f,fromValues:s,createView:u,IDENTITY:i})},dae5:function(t,e,r){"use strict";function n(){return[1,0,0,0,1,0,0,0,1]}function f(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]}function s(t,e,r,n,f,s,u,i,c){return[t,e,r,n,f,s,u,i,c]}function u(t,e){return new Float64Array(t,e,9)}r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return n}));Object.freeze({__proto__:null,create:n,clone:f,fromValues:s,createView:u})},e9ba:function(t,e,r){"use strict";r.d(e,"a",(function(){return b})),r.d(e,"b",(function(){return O})),r.d(e,"c",(function(){return B})),r.d(e,"d",(function(){return T})),r.d(e,"e",(function(){return m}));var n=r("b2b2"),f=r("8048"),s=r("dae5"),u=r("d791"),i=r("afe1"),c=r("1c92"),o=r("8188"),y=r("f694"),a=r("64d5"),d=r("8190"),l=r("668b"),p=r("3ebc"),h=r("4554");function b(t,e,r){return Object(p["a"])(e.spatialReference,r)?g(t,e,r):E(t,e,r)}function O(t,e,r){const{position:f,normal:s,tangent:u}=t;if(Object(n["k"])(e))return{position:f,normal:s,tangent:u};const i=e.localMatrix;return b({position:Object(h["h"])(f,new Float64Array(f.length),i),normal:Object(n["l"])(s)?Object(h["g"])(s,new Float32Array(s.length),i):null,tangent:Object(n["l"])(u)?Object(h["i"])(u,new Float32Array(u.length),i):null},e.getOriginPoint(r),{geographic:e.geographic})}function B(t,e,r){if(null!=r&&r.useTransform){var n;const{position:f,normal:s,tangent:u}=t;return{vertexAttributes:{position:f,normal:s,tangent:u},transform:new a["a"]({origin:[e.x,e.y,null!=(n=e.z)?n:0],geographic:Object(p["a"])(e.spatialReference,r)})}}return{vertexAttributes:b(t,e,r),transform:null}}function T(t,e,r){return Object(p["a"])(e.spatialReference,r)?w(t,e,r):S(t,e,r)}function m(t,e,r,f){if(Object(n["k"])(e))return T(t,r,f);const s=O(t,e,r.spatialReference);return r.equals(e.getOriginPoint(r.spatialReference))?S(s,r,f):Object(p["a"])(r.spatialReference,f)?w(s,r,f):S(s,r,f)}function E(t,e,r){const n=new Float64Array(t.position.length),f=t.position,s=e.x,u=e.y,i=e.z||0,{horizontal:c,vertical:o}=P(r?r.unit:null,e.spatialReference);for(let y=0;y<f.length;y+=3)n[y+0]=f[y+0]*c+s,n[y+1]=f[y+1]*c+u,n[y+2]=f[y+2]*o+i;return{position:n,normal:t.normal,tangent:t.tangent}}function g(t,e,r){const n=e.spatialReference,f=_(e,r,F),s=new Float64Array(t.position.length),u=j(t.position,f,n,s),i=Object(c["a"])(N,f);return{position:u,normal:A(u,s,t.normal,i,n),tangent:M(u,s,t.tangent,i,n)}}function j(t,e,r,n){Object(l["e"])(d["v"].fromTypedArray(n),d["v"].fromTypedArray(t),e);const f=new Float64Array(t.length);return Object(h["a"])(n,f,r)}function A(t,e,r,f,s){if(Object(n["k"])(r))return null;const u=new Float32Array(r.length);return Object(l["a"])(d["u"].fromTypedArray(u),d["u"].fromTypedArray(r),f),Object(h["b"])(u,t,e,s,u),u}function M(t,e,r,f,s){if(Object(n["k"])(r))return null;const u=new Float32Array(r.length);Object(l["a"])(d["u"].fromTypedArray(u,4*Float32Array.BYTES_PER_ELEMENT),d["u"].fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),f);for(let n=3;n<u.length;n+=4)u[n]=r[n];return Object(h["d"])(u,t,e,s,u),u}function S(t,e,r){const n=new Float64Array(t.position.length),f=t.position,s=e.x,u=e.y,i=e.z||0,{horizontal:c,vertical:o}=P(r?r.unit:null,e.spatialReference);for(let y=0;y<f.length;y+=3)n[y+0]=(f[y+0]-s)/c,n[y+1]=(f[y+1]-u)/c,n[y+2]=(f[y+2]-i)/o;return{position:n,normal:t.normal,tangent:t.tangent}}function w(t,e,r){const n=e.spatialReference;_(e,r,F);const f=Object(u["c"])(R,F),s=new Float64Array(t.position.length),i=L(t.position,n,f,s),o=Object(c["a"])(N,f);return{position:i,normal:x(t.normal,t.position,s,n,o),tangent:v(t.tangent,t.position,s,n,o)}}function _(t,e,r){Object(o["c"])(t.spatialReference,[t.x,t.y,t.z||0],r,Object(y["g"])(t.spatialReference));const{horizontal:n,vertical:f}=P(e?e.unit:null,t.spatialReference);return Object(u["g"])(r,r,[n,n,f]),r}function L(t,e,r,n){const f=Object(h["f"])(t,e,n),s=d["v"].fromTypedArray(f),u=new Float64Array(f.length),i=d["v"].fromTypedArray(u);return Object(l["e"])(i,s,r),u}function x(t,e,r,f,s){if(Object(n["k"])(t))return null;const u=Object(h["c"])(t,e,r,f,new Float32Array(t.length)),i=d["u"].fromTypedArray(u);return Object(l["a"])(i,i,s),u}function v(t,e,r,f,s){if(Object(n["k"])(t))return null;const u=Object(h["e"])(t,e,r,f,new Float32Array(t.length)),i=d["u"].fromTypedArray(u,4*Float32Array.BYTES_PER_ELEMENT);return Object(l["a"])(i,i,s),u}function P(t,e){if(Object(n["k"])(t))return C;const r=e.isGeographic?1:Object(f["c"])(e),s=e.isGeographic?1:Object(f["e"])(e),u=Object(f["b"])(1,t,"meters");return{horizontal:u*r,vertical:u*s}}const F=Object(i["d"])(),R=Object(i["d"])(),N=Object(s["b"])(),C={horizontal:1,vertical:1}}}]);
//# sourceMappingURL=chunk-01941038.7b3da01b.js.map