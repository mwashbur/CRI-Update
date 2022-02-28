(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b6f695c"],{"02b4":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return R}));var s=i("a4ee"),r=i("ce50"),a=i("e92d"),n=i("f4cc"),l=i("59b2"),o=(i("b50f"),i("c120"),i("cea0"),i("d386")),c=i("164ae"),h=i("566d"),u=i("d81b"),d=i("018d"),p=i("ae54"),b=i("07cd"),f=i("d302"),y=i("365a"),g=i("6c7a"),m=i("b2b2"),v=i("536f");const w=e=>{let t=class extends e{async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return Promise.reject(new r["a"]("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));if("tile"!==i.type)return Promise.reject(new r["a"]("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type}));const s=this.get("view.scale"),a=i.allSublayers.toArray().filter(e=>{const t=0===e.minScale||s<=e.minScale,i=0===e.maxScale||s>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i});return Object(n["i"])(a.map(async i=>{const s=i.createQuery(),r=Object(m["l"])(t)?t.event:null,a=Object(v["a"])({renderer:i.renderer,event:r});return s.geometry=this.createFetchPopupFeaturesQueryGeometry(e,a),s.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(s)).features})).then(e=>[].concat(...e.map(e=>e.value).filter(Boolean)))}};return Object(s["a"])([Object(l["b"])()],t.prototype,"layer",void 0),t=Object(s["a"])([Object(o["a"])("esri.layers.mixins.TileLayerView")],t),t};var O=i("e94b");const j=a["a"].getLogger("esri.views.2d.layers.TileLayerView2D"),x=[0,0];let _=class extends(w(Object(g["a"])(Object(c["a"])(Object(h["a"])(y["a"]))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new r["a"]("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new r["a"]("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",()=>{this.doRefresh()}),i&&this.addResolvingPromise(Promise.reject(i))}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new d["a"](this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new b["a"]({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new f["a"]({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return Object(O["a"])(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._enqueueTileFetch(e)),this.notifyChange("updating"))}isUpdating(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(x,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:r=0}=t;if(!i)try{return await this._fetchImage(e,s)}catch(o){if(!Object(n["l"])(o)&&!this.resampling)return Object(u["a"])(this._tileInfoView.tileInfo.size);if(r<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new p["a"](i),a=await this.fetchTile(s,{...t,resamplingLevel:r+1});return Object(u["b"])(this._tileInfoView,a,s,e)}}throw o}const a=new p["a"](0,0,0,0);let l;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),a.level!==e.level&&!this.resampling)return Object(u["a"])(this._tileInfoView.tileInfo.size);l=await this._fetchImage(a,s)}catch(o){if(Object(n["l"])(o))throw o;l=await this._fetchImage(e,s)}return this.resampling?Object(u["b"])(this._tileInfoView,l,a,e):l}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){Object(n["l"])(t)||j.error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}};Object(s["a"])([Object(l["b"])()],_.prototype,"resampling",null),_=Object(s["a"])([Object(o["a"])("esri.views.2d.layers.TileLayerView2D")],_);const R=_},"164ae":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("a4ee"),r=(i("e92d"),i("cea0"),i("b50f"),i("c120"),i("2dd4"),i("d386")),a=i("e80c");const n=e=>{let t=class extends e{attach(){this.view.timeline.record(this.layer.title+" (BitmapTileLayer) Attach"),this._bitmapView=new a["a"](this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var e;this.container.removeChild(this._bitmapView),null==(e=this._bitmapView)||e.removeAllChildren()}};return t=Object(s["a"])([Object(r["a"])("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},"365a":function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var s=i("a4ee"),r=i("fc29"),a=i("ce6d"),n=i("9096"),l=i("a5d8"),o=i("e92d"),c=i("b2b2"),h=i("fab3"),u=i("59b2"),d=(i("b50f"),i("c120"),i("cea0"),i("d386"));let p=class extends(Object(n["b"])(Object(l["a"])(Object(h["b"])(a["a"].EventedMixin(r["a"]))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw o["a"].getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}})}get fullOpacity(){return Object(c["u"])(this.get("layer.opacity"),1)*Object(c["u"])(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};Object(s["a"])([Object(u["b"])()],p.prototype,"fullOpacity",null),Object(s["a"])([Object(u["b"])()],p.prototype,"layer",void 0),Object(s["a"])([Object(u["b"])()],p.prototype,"parent",void 0),Object(s["a"])([Object(u["b"])({readOnly:!0})],p.prototype,"suspended",null),Object(s["a"])([Object(u["b"])({readOnly:!0})],p.prototype,"suspendInfo",null),Object(s["a"])([Object(u["b"])({readOnly:!0})],p.prototype,"legendEnabled",null),Object(s["a"])([Object(u["b"])({type:Boolean,readOnly:!0})],p.prototype,"updating",null),Object(s["a"])([Object(u["b"])({readOnly:!0})],p.prototype,"updatingProgress",null),Object(s["a"])([Object(u["b"])()],p.prototype,"visible",null),p=Object(s["a"])([Object(d["a"])("esri.views.layers.LayerView")],p);const b=p},"536f":function(e,t,i){"use strict";function s(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e){let t=0,i=0;for(let s=0;s<e.length;s++){const r=e[s].size;"number"==typeof r&&(t+=r,i++)}return t/i}function a(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?r(e.stops):t}function n(e,t){if(!t)return e;const i=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:i,minSize:s}=t;return(a(i,e)+a(s,e))/2});let s=0;const r=i.length;if(0===r)return e;for(let a=0;a<r;a++)s+=i[a];const n=Math.floor(s/r);return Math.max(n,e)}function l(e){const t=e&&e.renderer,i="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return i;const r="visualVariables"in t?n(i,t.visualVariables):i;if("simple"===t.type)return s(r,t.symbol);if("unique-value"===t.type){let e=r;return t.uniqueValueInfos.forEach(t=>{e=s(e,t.symbol)}),e}if("class-breaks"===t.type){let e=r;return t.classBreakInfos.forEach(t=>{e=s(e,t.symbol)}),e}return t.type,r}i.d(t,"a",(function(){return l}))},"566d":function(e,t,i){"use strict";i.d(t,"a",(function(){return T}));var s=i("a4ee"),r=i("2c4f"),a=i("7d7d"),n=i("3795"),l=i("59b2"),o=(i("b50f"),i("c120"),i("cea0"),i("d386")),c=i("00c0"),h=i("6a0e");i("e92d"),i("2dd4");let u=class extends h["a"]{};u=Object(s["a"])([Object(o["a"])("esri.views.layers.support.ClipArea")],u);const d=u;var p;let b=p=class extends d{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new p({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};Object(s["a"])([Object(l["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"left",void 0),Object(s["a"])([Object(l["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"right",void 0),Object(s["a"])([Object(l["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"top",void 0),Object(s["a"])([Object(l["b"])({type:[Number,String],json:{write:!0}})],b.prototype,"bottom",void 0),Object(s["a"])([Object(l["b"])({readOnly:!0})],b.prototype,"version",null),b=p=Object(s["a"])([Object(o["a"])("esri.views.layers.support.ClipRect")],b);const f=b;i("e06a");var y,g=i("3760"),m=i("a9ab"),v=i("3af1"),w=i("1219");const O={base:g["a"],key:"type",typeMap:{extent:v["a"],polygon:w["a"]}};let j=y=class extends d{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};Object(s["a"])([Object(l["b"])({types:O,json:{read:m["a"],write:!0}})],j.prototype,"geometry",void 0),Object(s["a"])([Object(l["b"])({readOnly:!0})],j.prototype,"version",null),j=y=Object(s["a"])([Object(o["a"])("esri.views.layers.support.Geometry")],j);const x=j;let _=class extends d{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};Object(s["a"])([Object(l["b"])({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),Object(s["a"])([Object(l["b"])({readOnly:!0})],_.prototype,"version",null),_=Object(s["a"])([Object(o["a"])("esri.views.layers.support.Path")],_);const R=_,I=r["a"].ofType({key:"type",base:d,typeMap:{rect:f,path:R,geometry:x}}),T=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new I,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new c["a"]),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(n["a"])(this,"suspended",e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},!0),Object(n["a"])(this,["layer.opacity","container"],()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)},!0),Object(n["a"])(this,["layer.blendMode"],e=>{this.container&&(this.container.blendMode=e)},!0),Object(n["a"])(this,["layer.effect"],e=>{this.container&&(this.container.effect=e)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(!this.updatingHandles||!this.updatingHandles.updating)}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,a=!r;!i&&e<=s&&(i=!0),!a&&e>=r&&(a=!0),t=i&&a}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return Object(s["a"])([Object(l["b"])({type:I,set(e){const t=Object(a["b"])(e,this._get("clips"),I);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(s["a"])([Object(l["b"])()],t.prototype,"moving",void 0),Object(s["a"])([Object(l["b"])()],t.prototype,"attached",void 0),Object(s["a"])([Object(l["b"])()],t.prototype,"container",void 0),Object(s["a"])([Object(l["b"])()],t.prototype,"suspended",void 0),Object(s["a"])([Object(l["b"])({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(s["a"])([Object(l["b"])()],t.prototype,"updateRequested",void 0),Object(s["a"])([Object(l["b"])()],t.prototype,"updating",null),Object(s["a"])([Object(l["b"])()],t.prototype,"view",void 0),t=Object(s["a"])([Object(o["a"])("esri.views.2d.layers.LayerView2D")],t),t}},6722:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i("c120"),r=i("c84e"),a=i("9a02"),n=i("6f75"),l=i("ec5e");const o=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class c extends a["a"]{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(o),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[l["a"]],drawPhase:r["c"].DEBUG|r["c"].MAP|r["c"].HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(s["a"])("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[n["a"]],drawPhase:r["c"].DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}},"6c7a":function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i("a4ee"),r=i("e92d"),a=i("f4cc"),n=i("3795"),l=i("59b2"),o=(i("b50f"),i("c120"),i("cea0"),i("d386"));const c=e=>{let t=class extends e{initialize(){this.handles.add(Object(n["b"])(this,"layer","refresh",e=>{this.doRefresh(e.dataChanged).catch(e=>{Object(a["l"])(e)||r["a"].getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}};return Object(s["a"])([Object(l["b"])()],t.prototype,"layer",void 0),t=Object(s["a"])([Object(o["a"])("esri.layers.mixins.RefreshableLayerView")],t),t}},"894c":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i("b2b2");class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return Object(s["l"])(this.pixelBlock)?this.pixelBlock.width:0}get height(){return Object(s["l"])(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(Object(s["k"])(t))return;const i=this.filter({pixelBlock:t});if(Object(s["k"])(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(r),e.putImageData(a,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return Object(s["k"])(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},c73a:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var s=i("b2b2"),r=i("1c92"),a=i("8c71"),n=i("738e"),l=i("7c4b"),o=i("894c"),c=i("a1ff");function h(e){return e&&"render"in e}function u(e){return e&&!("render"in e)}function d(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function p(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new c["a"](e,s)}class b extends l["a"]{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:Object(a["b"])()}}setTransform(e){const t=Object(r["b"])(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/e.resolution,l=a*this.width,o=a*this.height,c=Math.PI*this.rotation/180;Object(r["c"])(t,t,Object(n["b"])(i,s)),Object(r["c"])(t,t,Object(n["b"])(l/2,o/2)),Object(r["k"])(t,t,-c),Object(r["c"])(t,t,Object(n["b"])(-l/2,-o/2)),Object(r["h"])(t,t,Object(n["b"])(l,o)),Object(r["i"])(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=p(e,this.sourceWidth,this.sourceHeight):this._texture=p(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),h(i))if(i instanceof o["a"]){const e=i.getRenderedRasterPixels();this._texture.setData(Object(s["l"])(e)?e.renderedRasterPixels:null)}else this._texture.setData(d(i));else u(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},d81b:function(e,t,i){"use strict";function s(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}function r(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}function a(e,t,i,a){if(i.level===a.level)return t;const l=e.tileInfo.size,o=e.getTileResolution(i.level),c=e.getTileResolution(a.level);let h=e.getLODInfoAt(a.level);const u=h.getXForColumn(a.col),d=h.getYForRow(a.row);h=e.getLODInfoAt(i.level);const p=h.getXForColumn(i.col),b=h.getYForRow(i.row),f=s(t)/l[0],y=r(t)/l[1],g=Math.round(f*((u-p)/o)),m=Math.round(y*(-(d-b)/o)),v=Math.round(f*l[0]*(c/o)),w=Math.round(y*l[1]*(c/o)),O=n(l);return O.getContext("2d").drawImage(t,g,m,v,w,0,0,l[0],l[1]),O}function n(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}))},e4b1:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("1c92"),r=i("7c4b"),a=i("ae54");class n extends r["a"]{constructor(e,t,i,s,r,n=s,l=r){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new a["a"](e),this.x=t,this.y=i,this.width=s,this.height=r,this.rangeX=n,this.rangeY=l}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[a,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),l=this.width/this.rangeX*i,o=this.height/this.rangeY*i;Object(s["l"])(r,l,0,0,0,o,0,a,n,1),Object(s["i"])(this.transforms.dvs,e.displayViewMat3,r)}}},e80c:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var s=i("9180"),r=i("8c71"),a=i("c73a"),n=i("e4b1");class l extends n["a"]{constructor(e,t,i,s,r,n=null){super(e,t,i,s,r),this.bitmap=new a["a"](n,"standard",!1),this.bitmap.coordScale=[s,r],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:Object(r["b"])(),tileMat3:Object(r["b"])()}}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var o=i("3b1a"),c=i("c84e"),h=i("6722");class u extends h["a"]{get requiresDedicatedFBO(){return this.children.some(e=>"additive"===e.bitmap.blendFunction)}createTile(e){const t=this._tileInfoView.getTileBounds(Object(s["l"])(),e),[i,r]=this._tileInfoView.tileInfo.size;return new l(e,t[0],t[3],i,r)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[o["a"].bitmap],target:()=>this.children.map(e=>e.bitmap),drawPhase:c["c"].MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===c["c"].MAP&&super.doRender(e)}}},e94b:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return o}));i("e06a");var s=i("b2b2"),r=i("8048"),a=i("536f"),n=i("3af1");function l(e,t,i,a=new n["a"]){let l;if("2d"===i.type)l=t*i.resolution;else if("3d"===i.type){const a=i.overlayPixelSizeInMapUnits(e),n=i.basemapSpatialReference;l=Object(s["l"])(n)&&!n.equals(i.spatialReference)?Object(r["d"])(n)/Object(r["d"])(i.spatialReference):t*a}const o=e.x-l,c=e.y-l,h=e.x+l,u=e.y+l,{spatialReference:d}=i;return a.xmin=Math.min(o,h),a.ymin=Math.min(c,u),a.xmax=Math.max(o,h),a.ymax=Math.max(c,u),a.spatialReference=d,a}function o(e,t,i){const r=i.toMap(e);return!Object(s["k"])(r)&&l(r,Object(a["a"])(),i,c).intersects(t)}const c=new n["a"]}}]);
//# sourceMappingURL=chunk-6b6f695c.63493a42.js.map