(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7503b3e1"],{"01f2":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r}));var s=i("38a4");const r=(()=>{if(!("document"in globalThis))return()=>null;const e=document.createElement("canvas"),t=e.getContext("2d"),i=512;return e.height=i,e.width=1,i=>{t.clearRect(0,0,1,e.height);const s=t.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:t}of i.colorStops)s.addColorStop(Math.max(e,.001),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`);return t.fillStyle=s,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}})();function n(e,t,i,s){const{blurRadius:r,fieldOffset:n,field:a}=t,o=new Float64Array(i*s),l=h(r),u=Math.round(3*r);let d,f=Number.NEGATIVE_INFINITY;const p=c(a,n),b=new Set;for(const h of e){const e=h.getCursor();for(;e.next();){const t=e.getObjectId();if(b.has(t))continue;b.add(t);const r=e.readLegacyPointGeometry(),n=128;if(r.x<-n||r.x>=i+n||r.y<-n||r.y>s+n)continue;const a=+p(e),h=Math.round(r.x)-u,c=Math.round(r.y)-u,g=Math.max(0,h),x=Math.max(0,c),m=Math.min(s,Math.round(r.y)+u),y=Math.min(i,Math.round(r.x)+u);for(let e=x;e<m;e++){const t=l[e-c];for(let s=g;s<y;s++){const r=l[s-h];d=o[e*i+s]+=t*r*a,d>f&&(f=d)}}}}return{matrix:o.buffer,max:f}}function a(e,t,i,s,r,n){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);const a=e.getImageData(0,0,t,t);i&&s&&a.data.set(new Uint8ClampedArray(o(t,i,s,r,n))),e.putImageData(a,0,0)}function o(e,t,i,r,n){const a=new Uint32Array(e*e),o="buffer"in t?t:new Float64Array(t),h="buffer"in i?new Uint32Array(i.buffer):new Uint32Array(new Uint8Array(i).buffer),c=h.length/(n-r);for(let l=0;l<o.length;l++){const e=o[l],t=Math.floor((e-r)*c);a[l]=h[Object(s["d"])(t,0,h.length-1)]}return a.buffer}function h(e){const t=Math.round(3*e),i=2*e*e,s=new Float64Array(2*t+1);for(let r=0;r<=s.length;r++)s[r]=Math.exp(-((r-t)**2)/i)/Math.sqrt(2*Math.PI)*(e/2);return s}function c(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):i=>+i.readAttribute(e)+t:e=>1}},6722:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i("c120"),r=i("c84e"),n=i("9a02"),a=i("6f75"),o=i("ec5e");const h=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class c extends n["a"]{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(h),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o["a"]],drawPhase:r["c"].DEBUG|r["c"].MAP|r["c"].HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(s["a"])("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a["a"]],drawPhase:r["c"].DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}},"894c":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i("b2b2");class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return Object(s["l"])(this.pixelBlock)?this.pixelBlock.width:0}get height(){return Object(s["l"])(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(Object(s["k"])(t))return;const i=this.filter({pixelBlock:t});if(Object(s["k"])(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return Object(s["k"])(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},"8e77":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return l}));var s=i("a4ee"),r=(i("e92d"),i("cea0"),i("b50f"),i("c120"),i("2dd4"),i("d386")),n=i("01f2"),a=i("e80c"),o=i("e314");class h{constructor(){this.gradient=null,this.height=512,this.width=512}render(e){Object(n["b"])(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let c=class extends o["a"]{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new a["a"](e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:i}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=i,this._gradient=Object(n["c"])(e.toJSON()),this.tiles.forEach(e=>{const s=e.bitmap.source;s&&(s.minPixelIntensity=t,s.maxPixelIntensity=i,s.gradient=this._gradient,e.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:s,maxPixelIntensity:r}=this._intensityInfo,n=t.bitmap.source||new h;n.intensities=i&&i.matrix||null,n.minPixelIntensity=s,n.maxPixelIntensity=r,n.gradient=this._gradient,t.bitmap.source=n,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};c=Object(s["a"])([Object(r["a"])("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],c);const l=c},c73a:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var s=i("b2b2"),r=i("1c92"),n=i("8c71"),a=i("738e"),o=i("7c4b"),h=i("894c"),c=i("a1ff");function l(e){return e&&"render"in e}function u(e){return e&&!("render"in e)}function d(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function f(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new c["a"](e,s)}class p extends o["a"]{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:Object(n["b"])()}}setTransform(e){const t=Object(r["b"])(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,o=n*this.width,h=n*this.height,c=Math.PI*this.rotation/180;Object(r["c"])(t,t,Object(a["b"])(i,s)),Object(r["c"])(t,t,Object(a["b"])(o/2,h/2)),Object(r["k"])(t,t,-c),Object(r["c"])(t,t,Object(a["b"])(-o/2,-h/2)),Object(r["h"])(t,t,Object(a["b"])(o,h)),Object(r["i"])(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=f(e,this.sourceWidth,this.sourceHeight):this._texture=f(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),l(i))if(i instanceof h["a"]){const e=i.getRenderedRasterPixels();this._texture.setData(Object(s["l"])(e)?e.renderedRasterPixels:null)}else this._texture.setData(d(i));else u(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},e314:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var s=i("a4ee"),r=i("9096"),n=i("59b2"),a=(i("b50f"),i("c120"),i("cea0"),i("d386"));let o=class extends r["a"]{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",()=>this.notifyChange("updating")),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach(t=>{e=e&&t.isReady}),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};Object(s["a"])([Object(n["b"])()],o.prototype,"layer",void 0),Object(s["a"])([Object(n["b"])()],o.prototype,"layerView",void 0),Object(s["a"])([Object(n["b"])()],o.prototype,"tileInfoView",void 0),Object(s["a"])([Object(n["b"])()],o.prototype,"updating",null),o=Object(s["a"])([Object(a["a"])("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],o);const h=o},e4b1:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i("1c92"),r=i("7c4b"),n=i("ae54");class a extends r["a"]{constructor(e,t,i,s,r,a=s,o=r){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n["a"](e),this.x=t,this.y=i,this.width=s,this.height=r,this.rangeX=a,this.rangeY=o}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[n,a]=e.toScreenNoRotation([0,0],[this.x,this.y]),o=this.width/this.rangeX*i,h=this.height/this.rangeY*i;Object(s["l"])(r,o,0,0,0,h,0,n,a,1),Object(s["i"])(this.transforms.dvs,e.displayViewMat3,r)}}},e80c:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var s=i("9180"),r=i("8c71"),n=i("c73a"),a=i("e4b1");class o extends a["a"]{constructor(e,t,i,s,r,a=null){super(e,t,i,s,r),this.bitmap=new n["a"](a,"standard",!1),this.bitmap.coordScale=[s,r],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:Object(r["b"])(),tileMat3:Object(r["b"])()}}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var h=i("3b1a"),c=i("c84e"),l=i("6722");class u extends l["a"]{get requiresDedicatedFBO(){return this.children.some(e=>"additive"===e.bitmap.blendFunction)}createTile(e){const t=this._tileInfoView.getTileBounds(Object(s["l"])(),e),[i,r]=this._tileInfoView.tileInfo.size;return new o(e,t[0],t[3],i,r)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[h["a"].bitmap],target:()=>this.children.map(e=>e.bitmap),drawPhase:c["c"].MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===c["c"].MAP&&super.doRender(e)}}}}]);
//# sourceMappingURL=chunk-7503b3e1.2d196583.js.map