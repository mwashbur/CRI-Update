(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-528f064d"],{"04c4":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("c120"),s=n("ce76");const r=5e4,o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){o.minX=t[0],o.minY=t[1],o.maxX=t[2],o.maxY=t[3],e.search(o,n)}class u{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s["a"](9,Object(i["a"])("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach((n,i)=>{e[t++]=i}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(e=>this._idByBounds.has(e))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,e=>t(this._idByBounds.get(e)))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>r&&this._loadIndex()))}}},"054a":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var i=n("2eab"),s=n("ce50"),r=n("e92d"),o=n("b2b2"),a=n("f4cc"),u=n("a9ab"),c=n("7f83"),l=n("6655"),d=n("6517"),h=n("1ec3"),f=n("6411"),p=n("e3a3"),m=n("88d1"),y=n("21ca"),g=n("80b7"),b=n("6781"),_=n("c1da");const I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class x{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const n=[];await this._checkProjection(e.spatialReference);let i=null;e.url&&(i=await this._fetch(null==t?void 0:t.signal));const r=Object(p["c"])(i,{geometryType:e.geometryType}),o=e.fields||r.fields||[],a=null!=e.hasZ?e.hasZ:r.hasZ,u=r.geometryType,l=e.objectIdField||r.objectIdFieldName||"__OBJECTID",h=e.spatialReference||c["b"];let y=e.timeInfo;o===r.fields&&r.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});let x=o.find(e=>e.name===l);x?("esriFieldTypeString"!==x.type&&(x.type="esriFieldTypeOID"),x.editable=!1,x.nullable=!1):(x={alias:l,name:l,type:"string"===r.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(x));const j={};for(const c of o){if(null==c.name&&(c.name=c.alias),null==c.alias&&(c.alias=c.name),!c.name)throw new s["a"]("geojson-layer:invalid-field-name","field name is missing",{field:c});if(!b["a"].jsonValues.includes(c.type))throw new s["a"]("geojson-layer:invalid-field-type",`invalid type for field "${c.name}"`,{field:c});if(c.name!==x.name){const e=Object(_["o"])(c);void 0!==e&&(j[c.name]=e)}}this._fieldsIndex=new g["a"](o);const w=this._fieldsIndex.requiredFields.indexOf(x);if(w>-1&&this._fieldsIndex.requiredFields.splice(w,1),y){if(y.startTimeField){const e=this._fieldsIndex.get(y.startTimeField);e?(y.startTimeField=e.name,e.type="esriFieldTypeDate"):y.startTimeField=null}if(y.endTimeField){const e=this._fieldsIndex.get(y.endTimeField);e?(y.endTimeField=e.name,e.type="esriFieldTypeDate"):y.endTimeField=null}if(y.trackIdField){const e=this._fieldsIndex.get(y.trackIdField);e?y.trackIdField=e.name:(y.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))}y.startTimeField||y.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:y}}),y=null)}const O=u?Object(m["d"])(u):null,B={warnings:n,featureErrors:[],layerDefinition:{...I,drawingInfo:O,templates:Object(m["c"])(j),extent:null,geometryType:u,objectIdField:l,fields:o,hasZ:!!a,timeInfo:y}};this._queryEngine=new f["a"]({fields:o,geometryType:u,hasM:!1,hasZ:a,objectIdField:l,spatialReference:h,timeInfo:y,featureStore:new d["a"]({geometryType:u,hasM:!1,hasZ:a}),cacheSpatialQueries:!0}),this._createDefaultAttributes=Object(m["b"])(j,l);const F=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,F);const E=this._normalizeFeatures(F,B.warnings,B.featureErrors);if(this._queryEngine.featureStore.addMany(E),B.layerDefinition.extent=this._queryEngine.fullExtent,B.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;B.layerDefinition.timeInfo.timeExtent=[e,t]}return B}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([Object(y["c"])(t,n),Object(h["a"])(e.adds,t),Object(h["a"])(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this.loadOptions.customParameters=e,null==(t=this._snapshotTask)||t.abort(),this._snapshotTask=Object(a["g"])(this._snapshotFeatures),this._snapshotTask.promise.then(e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)},e=>{this._queryEngine.featureStore.clear(),Object(a["l"])(e)||r["a"].getLogger("esri.layers.GeoJSONLayer").error(new s["a"]("geojson-layer:refresh","An error occurred during refresh",{error:e}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:n,objectIdField:i}=this._queryEngine,s=Object(p["a"])(e,{geometryType:t,hasZ:n,objectIdField:i});if(!Object(c["d"])(this._queryEngine.spatialReference,c["b"]))for(const r of s)Object(o["l"])(r.geometry)&&(r.geometry=Object(l["d"])(Object(h["b"])(Object(l["k"])(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),c["b"],this._queryEngine.spatialReference)));return s}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this.loadOptions,s=(await Object(i["default"])(t,{responseType:"json",query:{...n},signal:e})).data;return await Object(p["d"])(s),s}_normalizeFeatures(e,t,n){const{objectIdField:i}=this._queryEngine,s=[];for(const r of e){const e=this._createDefaultAttributes(),o=Object(y["d"])(this._fieldsIndex,e,r.attributes,!0,t);o?null==n||n.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[i],s.push(r))}return s}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),n&&n.length&&this._applyUpdateEdits(s,n),i&&i.length){for(const e of i)s.deleteResults.push(Object(y["b"])(e));this._queryEngine.featureStore.removeManyById(i)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:r,objectIdField:a,spatialReference:c,featureStore:d}=this._queryEngine,f=[];for(const l of t){if(l.geometry&&i!==Object(u["c"])(l.geometry)){n.push(Object(y["a"])("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=Object(y["d"])(this._fieldsIndex,t,l.attributes);if(s)n.push(s);else{if(this._assignObjectId(t,l.attributes),l.attributes=t,null!=l.uid){const t=l.attributes[a];e.uidToObjectId[l.uid]=t}Object(o["l"])(l.geometry)&&(l.geometry=Object(h["b"])(Object(y["e"])(l.geometry,c),l.geometry.spatialReference,c)),f.push(l),n.push(Object(y["b"])(l.attributes[a]))}}d.addMany(Object(l["c"])([],f,i,r,s,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:s,objectIdField:r,spatialReference:a,featureStore:c}=this._queryEngine;for(const d of t){const{attributes:t,geometry:f}=d,p=t&&t[r];if(null==p){e.push(Object(y["a"])(`Identifier field ${r} missing`));continue}if(!c.has(p)){e.push(Object(y["a"])(`Feature with object id ${p} missing`));continue}const m=Object(l["i"])(c.getFeature(p),n,s,i);if(Object(o["l"])(f)){if(n!==Object(u["c"])(f)){e.push(Object(y["a"])("Incorrect geometry type."));continue}m.geometry=Object(h["b"])(Object(y["e"])(f,a),f.spatialReference,a)}if(t){const n=Object(y["d"])(this._fieldsIndex,m.attributes,t);if(n){e.push(n);continue}}c.add(Object(l["a"])(m,n,s,i,r)),e.push(Object(y["b"])(p))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const s of t)s.objectId&&(i=Math.max(i,s.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;e[i]=n&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await Object(h["a"])(c["b"],e)}catch{throw new s["a"]("geojson-layer","Projection not supported")}}}},"21ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return p}));var i=n("7f83"),s=n("c1da");class r{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function a(e){return new o(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new u(e)}const l=new Set;function d(e,t,n,i=!1,r){l.clear();for(const o in n){const u=e.get(o);if(!u)continue;const c=n[o],d=h(u,c);if(d!==c&&r&&r.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:u,originalValue:c,sanitizedValue:d}}),l.add(u.name),u&&(i||u.editable)){const e=Object(s["v"])(u,d);if(e)return a(Object(s["w"])(e,u,d));t[u.name]=d}}for(const s of e.requiredFields)if(!l.has(s.name))return a(`missing required field "${s.name}"`);return null}function h(e,t){let n=t;return"string"==typeof t&&Object(s["q"])(e)?n=parseFloat(t):null!=t&&Object(s["r"])(e)&&"string"!=typeof t&&(n=String(t)),Object(s["t"])(n)}let f;function p(e,t){if(!e||!Object(i["l"])(t))return e;if("rings"in e||"paths"in e){if(!f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function m(){return f||(f=await n.e("chunk-180660b2").then(n.bind(null,"00ac")),f)}async function y(e,t){!Object(i["l"])(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await m()}},"461f":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("d97e"),s=n("9392"),r=n("8152");const o={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new s["b"](t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(i["a"])(new r["a"],e.geometry,t.hasZ,t.hasM)),e.centroid)}},6517:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("ce50"),s=n("ce6d"),r=n("e92d"),o=n("b2b2"),a=n("4261"),u=n("9180"),c=n("6655"),l=n("04c4"),d=n("461f");class h{constructor(e){this.geometryInfo=e,this._boundsStore=new l["a"],this._featuresById=new Map,this._markedIds=new Set,this.events=new s["a"],this.featureAdapter=d["a"]}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(u["l"])(u["a"]);return this._featuresById.forEach(t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))}),e}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{Object(o["l"])(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t(Object(a["o"])(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,e=>{t(this._featuresById.get(e))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r["a"].getLogger("esri.layers.graphics.data.FeatureStore").error(new i["a"]("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let s;if(this._markedIds.add(t),n?(e.displayId=n.displayId,s=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(o["l"])(this.onFeatureAdd)&&this.onFeatureAdd(e),Object(o["k"])(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);s=Object(c["r"])(Object(o["l"])(s)?s:Object(u["l"])(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),Object(o["l"])(s)&&this._boundsStore.set(t,s),this._featuresById.set(t,e)}_remove(e){return Object(o["l"])(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},"88d1":function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return a}));var i=n("c120"),s=n("7ffa"),r=n("a94c"),o=n("8246");function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o["c"]:"esriGeometryPolyline"===e?o["e"]:o["d"]}}}function u(e,t){if(Object(i["a"])("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${t.includes(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const i=new Function(n);return()=>new i}catch(n){return()=>({[t]:null,...e})}}function c(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(s["a"])(e)}}]}function l(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r["a"],queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},ce76:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("b50f"),s=n("b2b2"),r=n("8a44"),o=n("4637");class a{constructor(e=9,t){this.compareMinX=d,this.compareMinY=h,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),I.prune(),x.prune(),j.prune(),w.prune()}all(e){this._all(this.data,e)}search(e,t){let n=this.data;const i=this.toBBox;if(b(e,n))for(I.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;b(e,o)&&(n.leaf?t(r):g(e,o)?this._all(r,t):I.push(r))}n=I.pop()}}collides(e){let t=this.data;const n=this.toBBox;if(!b(e,t))return!1;for(I.clear();t;){for(let i=0,s=t.children.length;i<s;i++){const s=t.children[i],r=t.leaf?n(s):s;if(b(e,r)){if(t.leaf||g(e,r))return!0;I.push(s)}}t=I.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new F([]),this}remove(e){if(!e)return this;let t,n=this.data,r=null,o=0,a=!1;const u=this.toBBox(e);for(j.clear(),w.clear();n||j.length>0;){var c;if(n||(n=Object(s["d"])(j.pop()),r=j.data[j.length-1],o=null!=(c=w.pop())?c:0,a=!0),n.leaf&&(t=Object(i["e"])(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),j.push(n),this._condense(j),this;a||n.leaf||!g(n,u)?r?(o++,n=r.children[o],a=!1):n=null:(j.push(n),w.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=e;for(x.clear();n;){var i;if(!0===n.leaf)for(const e of n.children)t(e);else x.pushArray(n.children);n=null!=(i=x.pop())?i:null}}_build(e,t,n,i){const s=n-t+1;let r=this._maxEntries;if(s<=r){const i=new F(e.slice(t,n+1));return u(i,this.toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new E([]);o.height=i;const a=Math.ceil(s/r),c=a*Math.ceil(Math.sqrt(r));_(e,t,n,c,this.compareMinX);for(let u=t;u<=n;u+=c){const t=Math.min(u+c-1,n);_(e,u,t,a,this.compareMinY);for(let n=u;n<=t;n+=a){const s=Math.min(n+a-1,t);o.children.push(this._build(e,n,s,i-1))}}return u(o,this.toBBox),o}_chooseSubtree(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=f(o),u=m(e,o)-a;u<s?(s=u,i=a<i?a:i,n=o):u===s&&a<i&&(i=a,n=o)}t=n||t.children[0]}return t}_insert(e,t,n){const i=this.toBBox,s=n?e:i(e);j.clear();const r=this._chooseSubtree(s,this.data,t,j);for(r.children.push(e),l(r,s);t>=0&&j.data[t].children.length>this._maxEntries;)this._split(j,t),t--;this._adjustParentBBoxes(s,j,t)}_split(e,t){const n=e.data[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),a=n.leaf?new F(o):new E(o);a.height=n.height,u(n,this.toBBox),u(a,this.toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this.data=new E([e,t]),this.data.height=e.height+1,u(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let i,s,r;i=s=1/0;for(let o=t;o<=n-t;o++){const t=c(e,0,o,this.toBBox),a=c(e,o,n,this.toBBox),u=y(t,a),l=f(t)+f(a);u<i?(i=u,r=o,s=l<s?l:s):u===i&&l<s&&(s=l,r=o)}return r}_chooseSplitAxis(e,t,n){const i=e.leaf?this.compareMinX:d,s=e.leaf?this.compareMinY:h;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const s=this.toBBox,r=c(e,0,t,s),o=c(e,n-t,n,s);let a=p(r)+p(o);for(let u=t;u<n-t;u++){const t=e.children[u];l(r,e.leaf?s(t):t),a+=p(r)}for(let u=n-t-1;u>=t;u--){const t=e.children[u];l(o,e.leaf?s(t):t),a+=p(o)}return a}_adjustParentBBoxes(e,t,n){for(let i=n;i>=0;i--)l(t.data[i],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice(Object(i["e"])(r,n,r.length,s.indexHint),1)}else this.clear();else u(n,this.toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function u(e,t){c(e,0,e.children.length,t,e)}function c(e,t,n,i,s){s||(s=new F([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],l(s,e.leaf?i(r):r);return s}function l(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function d(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function p(e){return e.maxX-e.minX+(e.maxY-e.minY)}function m(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function y(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function b(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function _(e,t,n,i,r){const a=[t,n];for(;a.length;){const t=Object(s["d"])(a.pop()),n=Object(s["d"])(a.pop());if(t-n<=i)continue;const u=n+Math.ceil((t-n)/i/2)*i;Object(o["a"])(e,u,n,t,r),a.push(n,u,u,t)}}const I=new r["a"],x=new r["a"],j=new r["a"],w=new r["a"]({deallocator:void 0});class O{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class B extends O{constructor(){super(...arguments),this.height=1,this.indexHint=new i["a"]}}class F extends B{constructor(e){super(),this.children=e,this.leaf=!0}}class E extends B{constructor(e){super(),this.children=e,this.leaf=!1}}},e3a3:function(e,t,n){"use strict";n.d(t,"a",(function(){return q})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return T}));var i=n("ce50"),s=n("9392"),r=n("8152"),o=n("c1da");const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return a[e]}function*c(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*l(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function*d(e,t={}){const{geometryType:n,objectIdField:i}=t;for(const a of e){var o;const{geometry:e,properties:c,id:l}=a;if(e&&u(e.type)!==n)continue;const d=c||{};let h=null!=(o=d[i])?o:null;i&&null!=l&&!d[i]&&(d[i]=h=l);const f=new s["b"](e?g(new r["a"],e,t):null,d,null,h);yield f}}function h(e){for(const t of e)if(t.length>2)return!0;return!1}function f(e){return!m(e)}function p(e){return m(e)}function m(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t+=i[0]*s[1]-s[0]*i[1]}return t<=0}function y(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":return b(e,t,n);case"MultiLineString":return _(e,t,n);case"MultiPoint":return I(e,t,n);case"MultiPolygon":return x(e,t,n);case"Point":return j(e,t,n);case"Polygon":return w(e,t,n)}}function b(e,t,n){return F(e,t.coordinates,n),e}function _(e,t,n){for(const i of t.coordinates)F(e,i,n);return e}function I(e,t,n){return F(e,t.coordinates,n),e}function x(e,t,n){for(const i of t.coordinates){O(e,i[0],n);for(let t=1;t<i.length;t++)B(e,i[t],n)}return e}function j(e,t,n){return M(e,t.coordinates,n),e}function w(e,t,n){const i=t.coordinates;O(e,i[0],n);for(let s=1;s<i.length;s++)B(e,i[s],n);return e}function O(e,t,n){const i=y(t);f(i)?E(e,i,n):F(e,i,n)}function B(e,t,n){const i=y(t);p(i)?E(e,i,n):F(e,i,n)}function F(e,t,n){for(const i of t)M(e,i,n);e.lengths.push(t.length)}function E(e,t,n){for(let i=t.length-1;i>=0;i--)M(e,t[i],n);e.lengths.push(t.length)}function M(e,t,n){const[i,s,r]=t;e.coords.push(i,s),n.hasZ&&e.coords.push(r||0)}function S(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function T(e){if(!e)throw new i["a"]("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i["a"]("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,s=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!s.test(n))throw new i["a"]("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function v(e,t={}){const n=[],i=new Set,s=new Set;let r,a=!1,d=null,f=!1,{geometryType:p=null}=t,m=!1;for(const o of c(e)){const{geometry:e,properties:t,id:c}=o;if((!e||(p||(p=u(e.type)),u(e.type)===p))&&(a||(a=h(l(e))),f||(f=null!=c,f&&(r=typeof c,d=Object.keys(t).filter(e=>t[e]===c))),f&&null!=c&&(d.length>1?d=d.filter(e=>t[e]===c):1===d.length&&(d=t[d[0]]===c?d:[])),!m&&t)){let e=!0;for(const r in t){if(i.has(r))continue;const o=t[r];if(null==o){e=!1,s.add(r);continue}const a=S(o);"unknown"!==a?(s.delete(r),i.add(r),n.push({name:r,alias:r,type:a})):s.add(r)}m=e}}const y=d&&1===d.length&&d[0]||null;if(y)for(const u of n)if(u.name===y&&Object(o["q"])(u)){u.type="esriFieldTypeOID";break}return{fields:n,geometryType:p,hasZ:a,objectIdFieldName:y,objectIdFieldType:r,unknownFields:Array.from(s)}}function q(e,t){return Array.from(d(c(e),t))}}}]);
//# sourceMappingURL=chunk-528f064d.7bafbde0.js.map