(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbb0e4bc"],{"3e35":function(e,t,a){"use strict";a.r(t),a.d(t,"fetchSymbolFromStyle",(function(){return f})),a.d(t,"resolveWebStyleSymbol",(function(){return y}));var n=a("1fd7"),c=a("49b8"),l=a("ce50"),r=a("e041"),o=a("0224"),s=a("fcf2"),i=a("6174"),m=a("b724"),b=a("343a"),u=a("505a");function y(e,t,a,n){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?p(e,t,n):Object(b["b"])(e,t,n).then(c=>f(c,e.name,t,a,n)):Promise.reject(new l["a"]("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function f(e,t,a,y,f){const p=e.data,h={portal:a&&a.portal||o["a"].getDefault(),url:Object(r["K"])(e.baseUrl),origin:"portal-item"},d=p.items.find(e=>e.name===t);if(!d){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new l["a"]("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let g=Object(s["a"])(Object(b["e"])(d,y),h),j=d.thumbnail&&d.thumbnail.href;const O=d.thumbnail&&d.thumbnail.imageData;Object(c["b"])()&&(g=Object(c["a"])(g),j=Object(c["a"])(j));const w={portal:a.portal,url:Object(r["K"])(Object(r["G"])(g)),origin:"portal-item"};return Object(b["d"])(g,f).then(c=>{const l="cimRef"===y?Object(b["c"])(c.data):c.data,r=Object(i["a"])(l,w);if(r&&Object(n["c"])(r)){if(j){const e=Object(s["a"])(j,h);r.thumbnail=new u["a"]({url:e})}else O&&(r.thumbnail=new u["a"]({url:"data:image/png;base64,"+O}));e.styleUrl?r.styleOrigin=new m["a"]({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new m["a"]({portal:a.portal,styleName:e.styleName,name:t}))}return r})}function p(e,t,a){const n=b["a"].replace(/\{SymbolName\}/gi,e.name);return Object(b["d"])(n,a).then(e=>{const a=Object(b["c"])(e.data);return Object(i["a"])(a,{portal:t.portal,url:Object(r["K"])(Object(r["G"])(n)),origin:"portal-item"})})}},"49b8":function(e,t,a){"use strict";function n(e){return e=e||globalThis.location.hostname,i.some(t=>{var a;return null!=(null==(a=e)?void 0:a.match(t))})}function c(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(l)||null!=t.match(o)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)||null!=t.match(s)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return n}));const l=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,o=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,i=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,r,/^jsapps.esri.com$/,o,s]}}]);
//# sourceMappingURL=chunk-fbb0e4bc.bbfb4ed7.js.map