(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b3eda79"],{"5afa":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var r=a("a4ee"),o=(a("e06a"),a("8d60")),i=(a("1fd7"),a("2c4f")),l=a("ce50"),n=a("7ffa"),s=a("b2b2"),y=a("e694"),p=a("9d1d"),c=a("0028"),b=a("59b2"),u=(a("cea0"),a("afcf")),d=a("d386"),O=a("09db"),f=a("8188"),m=a("a8d5"),j=a("7f83"),g=a("5bd5"),S=a("ce0b"),h=a("a6a3"),w=a("a745"),N=a("997b"),v=a("b911"),J=a("0db5"),L=a("5a62"),T=a("a1f3"),x=a("0d76"),C=a("db52"),M=a("4dc9"),I=a("21ba"),R=a("5996"),D=a("3af1");function E(e){return e.layers.some(e=>null!=e.layerDefinition.visibilityField)}const k=new T["a"]({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),_=new T["a"]({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let F=class extends S["a"]{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get sublayers(){return this.graphics}};Object(r["a"])([Object(b["b"])({readOnly:!0})],F.prototype,"sublayers",null),Object(r["a"])([Object(b["b"])()],F.prototype,"layer",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0})],F.prototype,"visibilityMode",void 0),F=Object(r["a"])([Object(d["a"])("esri.layers.MapNotesLayer.MapNotesSublayer")],F);const G=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new x["a"]).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new C["a"]).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new M["a"]).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new M["a"]).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new I["a"]).toJSON()}];let P=class extends(Object(N["a"])(Object(L["a"])(Object(v["a"])(Object(J["a"])(Object(y["a"])(h["a"])))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=R["a"].WGS84,this.sublayers=new i["a"](G.map(e=>new F({id:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,a){return{operations:{supportsMapNotesEditing:!E(t)&&"portal-item"!==(null==a?void 0:a.origin)}}}readFeatureCollections(e,t,a){if(!E(t))return null;const r=t.layers.map(e=>{const t=new g["default"];return t.read(e,a),t});return new i["a"]({items:r})}readLegacyfeatureCollectionJSON(e,t){return E(t)?Object(n["a"])(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every(e=>!e.layerDefinition.extent))return new D["a"]({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:R["a"].WGS84});const a=R["a"].fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((e,t)=>{const a=t.layerDefinition.extent;return a?D["a"].fromJSON(a).union(e):e},new D["a"]({spatialReference:a}))}readMinScale(e,t){for(const a of t.layers)if(null!=a.layerDefinition.minScale)return a.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const a of t.layers)if(null!=a.layerDefinition.maxScale)return a.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?R["a"].fromJSON(t.layers[0].layerDefinition.spatialReference):R["a"].WGS84}readSublayers(e,t,a){if(E(t))return null;const r=[];for(let i=0;i<t.layers.length;i++){var l;const{layerDefinition:e,featureSet:a}=t.layers[i],n=null!=(l=e.geometryType)?l:a.geometryType,s=G.find(t=>{var a,r,o;return n===t.geometryTypeJSON&&(null==(a=e.drawingInfo)||null==(r=a.renderer)||null==(o=r.symbol)?void 0:o.type)===t.identifyingSymbol.type});if(s){const t=new F({id:s.layerId,title:e.name,layer:this,graphics:a.features.map(({geometry:e,symbol:t,attributes:a,popupInfo:r})=>o["a"].fromJSON({attributes:a,geometry:e,symbol:t,popupTemplate:r}))});r.push(t)}}return new i["a"](r)}writeSublayers(e,t,a,r){const{minScale:o,maxScale:i}=this;if(Object(s["k"])(e))return;const n=e.some(e=>e.graphics.length>0);var y;if(!this.capabilities.operations.supportsMapNotesEditing)return void(n&&(null==r||null==(y=r.messages)||y.push(new l["a"]("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const c=[];let b=this.spatialReference.toJSON();e:for(const l of e)for(const e of l.graphics)if(Object(s["l"])(e.geometry)){b=e.geometry.spatialReference.toJSON();break e}for(const l of G){const t=e.find(e=>l.layerId===e.id);this._writeMapNoteSublayer(c,t,l,o,i,b,r)}Object(p["c"])("featureCollection.layers",c,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=Object(n["a"])(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(Object(s["k"])(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const a of r.graphics)if(Object(s["l"])(a.geometry)){const r=a.geometry;e?Object(j["d"])(r.spatialReference,e)||(Object(f["a"])(r.spatialReference,e)||Object(f["f"])()||await Object(f["g"])(),a.geometry=Object(f["i"])(r,e)):e=r.spatialReference,t.push(a)}const a=await Object(m["a"])(t.map(e=>e.geometry));t.forEach((e,t)=>e.geometry=a[t])}_findSublayer(e){var t,a;return Object(s["k"])(this.sublayers)?null:null!=(t=null==(a=this.sublayers)?void 0:a.find(t=>t.id===e))?t:null}_writeMapNoteSublayer(e,t,a,r,o,i,l){const y=[];if(!Object(s["k"])(t)){for(const e of t.graphics)this._writeMapNote(y,e,a.geometryType,l);this._normalizeObjectIds(y,k),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:Object(n["a"])(a.identifyingSymbol)}},geometryType:a.geometryTypeJSON,minScale:r,maxScale:o,objectIdField:"OBJECTID",fields:[k.toJSON(),_.toJSON()],spatialReference:i},featureSet:{features:y,geometryType:a.geometryTypeJSON}})}}_writeMapNote(e,t,a,r){if(Object(s["k"])(t))return;const{geometry:o,symbol:i,popupTemplate:l}=t;if(Object(s["k"])(o))return;var n,y;if(o.type!==a)return void(null==r||null==(n=r.messages)||n.push(new c["a"]("map-notes-layer:invalid-geometry-type",`Geometry "${o.type}" cannot be saved in "${a}" layer`,{graphic:t})));if(Object(s["k"])(i))return void(null==r||null==(y=r.messages)||y.push(new c["a"]("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:o.toJSON(),symbol:i.toJSON()};Object(s["l"])(l)&&(p.popupInfo=l.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const a=t.name;let r=Object(w["a"])(a,e)+1;const o=new Set;for(const i of e){i.attributes||(i.attributes={});const{attributes:e}=i;(null==e[a]||o.has(e[a]))&&(e[a]=r++),o.add(e[a])}}};Object(r["a"])([Object(b["b"])({readOnly:!0})],P.prototype,"capabilities",void 0),Object(r["a"])([Object(u["a"])(["portal-item","web-map"],"capabilities",["layers"])],P.prototype,"readCapabilities",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],P.prototype,"featureCollections",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"featureCollections",["layers"])],P.prototype,"readFeatureCollections",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],P.prototype,"featureCollectionJSON",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],P.prototype,"readLegacyfeatureCollectionJSON",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],P.prototype,"featureCollectionType",void 0),Object(r["a"])([Object(b["b"])({json:{write:!1}})],P.prototype,"fullExtent",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"fullExtent",["layers"])],P.prototype,"readFullExtent",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],P.prototype,"legendEnabled",void 0),Object(r["a"])([Object(b["b"])({type:["show","hide"]})],P.prototype,"listMode",void 0),Object(r["a"])([Object(b["b"])({type:Number,nonNullable:!0,json:{write:!1}})],P.prototype,"minScale",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"minScale",["layers"])],P.prototype,"readMinScale",null),Object(r["a"])([Object(b["b"])({type:Number,nonNullable:!0,json:{write:!1}})],P.prototype,"maxScale",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"maxScale",["layers"])],P.prototype,"readMaxScale",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],P.prototype,"multipointLayer",null),Object(r["a"])([Object(b["b"])({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],P.prototype,"operationalLayerType",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0})],P.prototype,"pointLayer",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],P.prototype,"polygonLayer",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],P.prototype,"polylineLayer",null),Object(r["a"])([Object(b["b"])({type:R["a"]})],P.prototype,"spatialReference",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"spatialReference",["layers"])],P.prototype,"readSpatialReference",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],P.prototype,"sublayers",void 0),Object(r["a"])([Object(u["a"])("web-map","sublayers",["layers"])],P.prototype,"readSublayers",null),Object(r["a"])([Object(O["a"])("web-map","sublayers")],P.prototype,"writeSublayers",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],P.prototype,"textLayer",null),Object(r["a"])([Object(b["b"])()],P.prototype,"title",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{read:!1}})],P.prototype,"type",void 0),P=Object(r["a"])([Object(d["a"])("esri.layers.MapNotesLayer")],P);const z=P},a745:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));const r=1;function o(e,t){let a=0;for(const o of t){var r;const t=null==(r=o.attributes)?void 0:r[e];"number"==typeof t&&isFinite(t)&&(a=Math.max(a,t))}return a}}}]);
//# sourceMappingURL=chunk-6b3eda79.b3d0afd7.js.map