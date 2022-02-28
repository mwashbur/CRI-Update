(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb72276e"],{"157c":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));class n{constructor(t,e,i,n){this.helper=t,this.dx=e,this.dy=i,this.dz=n}move(t,e,i,n){this.helper.addDelta(t.pos,e,i,n)}apply(t){this.move(t,this.dx,this.dy,this.dz)}undo(t){this.move(t,-this.dx,-this.dy,-this.dz)}canAccumulate(t){return t instanceof n}accumulate(t,e){this.move(t,e.dx,e.dy,e.dz)}accumulateParams(t){this.dx+=t.dx,this.dy+=t.dy,this.dz+=t.dz}}},"1f1c":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));class n{constructor(t){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.editGeometryOperations=t.editGeometryOperations,this.elevationInfo=t.elevationInfo,this.pointer=t.pointer,this.vertexHandle=t.vertexHandle,this.excludeFeature=t.excludeFeature,this.visualizer=t.visualizer}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}}},"2c8f":function(t,e,i){"use strict";i.d(e,"a",(function(){return x}));var n=i("ce6d"),r=i("b2b2"),s=i("6ae9");class o{constructor(t,e,i){this.editGeometry=t,this.component=e,this.pos=i,this.addedVertex=null,this.originalEdge=null,this.left=null,this.right=null}apply(){let t="redo";Object(r["k"])(this.addedVertex)&&(t="apply",this.addedVertex=new s["d"](this.component));const e=this.component.getLastVertex();if(Object(r["k"])(e))this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,this.addedVertex.index=0;else{let t=null;e.rightEdge&&(this.originalEdge=e.rightEdge,t=this.originalEdge.rightVertex,this.component.edges.splice(this.component.edges.indexOf(this.originalEdge),1)),this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,Object(r["k"])(this.left)&&(this.left=new s["b"](this.component,e,this.addedVertex)),this.component.edges.push(this.left),e.rightEdge=this.left,Object(r["l"])(this.originalEdge)&&Object(r["l"])(t)&&(Object(r["k"])(this.right)&&(this.right=new s["b"](this.component,this.addedVertex,t)),this.component.edges.push(this.right),t.leftEdge=this.right),this.component.updateVertexIndex(this.addedVertex,e.index+1)}this.editGeometry.notifyChanges({operation:t,addedVertices:[this.addedVertex]})}undo(){if(Object(r["k"])(this.addedVertex))return null;this.component.vertices.splice(this.component.vertices.indexOf(this.addedVertex),1),Object(r["l"])(this.left)&&(this.component.edges.splice(this.component.edges.indexOf(this.left),1),this.left.leftVertex.rightEdge=null),Object(r["l"])(this.right)&&(this.component.edges.splice(this.component.edges.indexOf(this.right),1),this.right.rightVertex.leftEdge=null),Object(r["l"])(this.originalEdge)&&(this.component.edges.push(this.originalEdge),this.originalEdge.leftVertex.rightEdge=this.originalEdge,this.originalEdge.rightVertex.leftEdge=this.originalEdge),Object(r["l"])(this.left)?this.component.updateVertexIndex(this.left.leftVertex,this.left.leftVertex.index):this.component.updateVertexIndex(this.addedVertex,0),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.addedVertex]})}accumulate(){return!1}}var c=i("34f2");class a{constructor(t,e,i=0){this.editGeometry=t,this.vertices=e,this.minNumberOfVertices=i,this.removedVertices=null}apply(){let t="redo";null==this.removedVertices?(this.removedVertices=[],this.vertices.forEach(t=>{const e=this._removeVertex(t);Object(r["l"])(e)&&this.removedVertices.push(e)}),t="apply"):this.removedVertices.forEach(t=>{this._removeVertex(t.removedVertex)}),this.editGeometry.notifyChanges({operation:t,removedVertices:this.vertices})}undo(){this.removedVertices.forEach(t=>{this._undoRemoveVertex(t)}),this.editGeometry.notifyChanges({operation:"undo",addedVertices:this.vertices})}accumulate(){return!1}_removeVertex(t){const e=t.component;if(e.vertices.length<=this.minNumberOfVertices)return null;const i={removedVertex:t,createdEdge:null},n=t.leftEdge,r=t.rightEdge;return e.vertices.splice(e.vertices.indexOf(t),1),n&&(e.edges.splice(e.edges.indexOf(n),1),n.leftVertex.rightEdge=null),r&&(e.edges.splice(e.edges.indexOf(r),1),r.rightVertex.leftEdge=null),0===t.index&&r&&this.vertices.length>0&&e.swapVertices(e.vertices.indexOf(r.rightVertex),0),n&&r&&(i.createdEdge=new s["b"](e,n.leftVertex,r.rightVertex),e.edges.push(i.createdEdge)),r&&e.updateVertexIndex(r.rightVertex,r.rightVertex.index-1),i}_undoRemoveVertex(t){const e=t.removedVertex,i=t.removedVertex.component,n=e.leftEdge,r=e.rightEdge;t.createdEdge&&i.edges.splice(i.edges.indexOf(t.createdEdge),1),i.vertices.push(e),n&&(i.edges.push(n),n.leftVertex.rightEdge=n),r&&(i.edges.push(r),r.rightVertex.leftEdge=r),i.updateVertexIndex(e,e.index)}}class h{constructor(t,e,i){this.editGeometry=t,this.edge=e,this.t=i,this.createdVertex=null,this.left=null,this.right=null}apply(){let t="redo";const e=this.edge,i=e.component,n=e.leftVertex,o=e.rightVertex;i.edges.splice(i.edges.indexOf(e),1),Object(r["k"])(this.createdVertex)&&(t="apply",this.createdVertex=new s["d"](e.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this.editGeometry.coordinateHelper.lerp(e.leftVertex.pos,e.rightVertex.pos,this.t,this.editGeometry.coordinateHelper.createVector()),Object(r["k"])(this.left)&&(this.left=new s["b"](i,n,this.createdVertex)),this.left.leftVertex.leftEdge?i.edges.push(this.left):i.edges.unshift(this.left),n.rightEdge=this.left,Object(r["k"])(this.right)&&(this.right=new s["b"](i,this.createdVertex,o)),i.edges.push(this.right),o.leftEdge=this.right,i.updateVertexIndex(this.createdVertex,n.index+1),this.editGeometry.notifyChanges({operation:t,addedVertices:[this.createdVertex]})}undo(){if(Object(r["k"])(this.createdVertex)||Object(r["k"])(this.left)||Object(r["k"])(this.right))return null;const t=this.edge,e=t.component,i=this.createdVertex.leftEdge,n=this.createdVertex.rightEdge,s=i.leftVertex,o=n.rightVertex;e.vertices.splice(e.vertices.indexOf(this.createdVertex),1),e.edges.splice(e.edges.indexOf(this.left),1),e.edges.splice(e.edges.indexOf(this.right),1),this.edge.leftVertex.leftEdge?e.edges.push(this.edge):e.edges.unshift(this.edge),s.rightEdge=t,o.leftEdge=t,e.updateVertexIndex(s,s.index),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}class d{constructor(t,e,i){this.editGeometry=t,this.vertex=e,this.pos=i}apply(){const t=Object(r["k"])(this.originalPosition);t&&(this.originalPosition=this.vertex.pos),this._apply(t?"apply":"redo")}undo(){this.vertex.pos=Object(r["t"])(this.originalPosition),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:[this.vertex]})}accumulate(t){return t instanceof d&&t.vertex===this.vertex&&(this.pos=t.pos,this._apply("apply"),!0)}_apply(t){this.vertex.pos=this.pos,this.editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this.editGeometry.notifyChanges({operation:t,updatedVertices:[this.vertex]})}}var u=i("b50f");class l{constructor(t,e){this.editGeometry=t,this.component=e,this.createdEdge=null}apply(){let t="redo";if(Object(r["k"])(this.createdEdge)){t="apply";const e=this.component.getFirstVertex(),i=this.component.getLastVertex();if(this.component.isClosed()||this.component.vertices.length<3||Object(r["k"])(e)||Object(r["k"])(i))return;this.createdEdge=new s["b"](this.component,i,e)}this.createdEdge.leftVertex.rightEdge=this.createdEdge,this.createdEdge.rightVertex.leftEdge=this.createdEdge,this.component.edges.push(this.createdEdge),this.editGeometry.notifyChanges({operation:t})}undo(){Object(r["k"])(this.createdEdge)||(Object(u["h"])(this.component.edges,this.createdEdge),this.createdEdge.leftVertex.rightEdge=null,this.createdEdge.rightVertex.leftEdge=null,this.editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}var p=i("157c"),f=i("5414"),g=i("e1e0"),m=i("fbd0");class b{constructor(){this.operations=[],this.closed=!1}close(){this.closed=!0}apply(){for(const t of this.operations)t.apply()}undo(){for(let t=this.operations.length-1;t>=0;t--)this.operations[t].undo()}accumulate(t){if(this.closed)return!1;const e=this.operations.length?this.operations[this.operations.length-1]:null;return e&&e.accumulate(t)||(this.operations.push(t),t.apply()),!0}}class x extends n["a"]{constructor(t){super(),this.data=t,this.undoStack=[],this.redoStack=[],this.listener=this.data.on("change",t=>{t.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:t.addedVertices,operation:t.operation}),t.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:t.removedVertices,operation:t.operation}),t.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:t.updatedVertices,operation:t.operation})})}destroy(){this.listener.remove()}splitEdge(t,e){return this.apply(new h(this.data,t,e))}updateVertices(t,e,i=1){return this.apply(new c["a"](this.data,t,e),i)}moveVertices(t,e,i,n,r=1){return this.updateVertices(t,new p["a"](this.data.coordinateHelper,e,i,n),r)}scaleVertices(t,e,i,n,r,s=1,o=0){return this.updateVertices(t,new m["a"](e,i,n,r,o),s)}rotateVertices(t,e,i,n=1,r=0){return this.updateVertices(t,new g["a"](e,i,r),n)}removeVertices(t){return this.apply(new a(this.data,t,this._minNumVerticesPerType))}appendVertex(t){return 0===this.data.components.length?null:this.apply(new o(this.data,this.data.components[0],t))}setVertexPosition(t,e){return this.apply(new d(this.data,t,e))}offsetEdge(t,e,i,n=1){return this.updateVertices([e.leftVertex,e.rightVertex],new f["a"](this.data.coordinateHelper,t,e,i),n)}closeComponent(t){return this.data.components.includes(t)?this.apply(new l(this.data,t)):null}canRemoveVertex(){return this.data.components[0].vertices.length>this._minNumVerticesPerType}createUndoGroup(){const t=new b;return this.apply(t),{remove:()=>t.close()}}undo(){if(this.undoStack.length>0){const t=this.undoStack.pop();return t.undo(),this.redoStack.push(t),t}return null}redo(){if(this.redoStack.length>0){const t=this.redoStack.pop();return t.apply(),this.undoStack.push(t),t}return null}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}get lastOperation(){return this.undoStack.length>0?this.undoStack[this.undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}apply(t,e=1){return 0!==e&&!Object(r["k"])(this.lastOperation)&&this.lastOperation.accumulate(t)||(t.apply(),this.undoStack.push(t),this.redoStack=[]),t}static fromGeometry(t,e){return new x(s["c"].fromGeometry(t,e))}}},"34f2":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));class n{constructor(t,e,i){this.editGeometry=t,this.vertices=e,this.operation=i,this.undone=!1}apply(){this.vertices.forEach(t=>this.operation.apply(t)),this.editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this.editGeometry.notifyChanges({operation:this.undone?"redo":"apply",updatedVertices:this.vertices})}undo(){this.vertices.forEach(t=>this.operation.undo(t)),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:this.vertices}),this.undone=!0}canAccumulate(t){if(this.undone||t.vertices.length!==this.vertices.length)return!1;for(let e=0;e<t.vertices.length;++e)if(t.vertices[e]!==this.vertices[e])return!1;return this.operation.canAccumulate(t.operation)}accumulate(t){return!!(t instanceof n&&this.canAccumulate(t))&&(this.vertices.forEach(e=>this.operation.accumulate(e,t.operation)),this.operation.accumulateParams(t.operation),this.editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this.editGeometry.notifyChanges({operation:"apply",updatedVertices:this.vertices}),!0)}}},5414:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("38a4"),r=i("b2b2"),s=i("3349"),o=i("02f1"),c=i("e431"),a=i("0b2d"),h=i("7289"),d=i("a1b1"),u=i("0f94");class l{constructor(t,e,i,n=0,r=0){this.helper=t,this.planeType=e,this.edge=i,this.distance=n,this._plane=Object(h["d"])(),this._offsetPlane=Object(h["d"])(),this._minDistance=-1/0,this._maxDistance=1/0,0===r&&this._initialize()}get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){var t,e,i,n;const r=this._toXYZ(this.edge.leftVertex.pos),s=this._toXYZ(null==(t=this.edge.leftVertex.leftEdge)||null==(e=t.leftVertex)?void 0:e.pos),o=this._toXYZ(this.edge.rightVertex.pos),h=this._toXYZ(null==(i=this.edge.rightVertex.rightEdge)||null==(n=i.rightVertex)?void 0:n.pos);this._edgeDirection=Object(c["v"])(Object(a["f"])(),r,o),this._left=this._computeNeighbor(r,s,this._edgeDirection),this._right=this._computeNeighbor(o,h,this._edgeDirection)}_toXYZ(t){return Object(r["l"])(t)?this.helper.toXYZ(t):null}_computeNeighbor(t,e,i){if(Object(r["k"])(e))return{start:t,end:e,direction:Object(a["h"])(-i[1],i[0],0),isOriginalDirection:!0};const n=Object(c["v"])(Object(a["f"])(),t,e),s=!this._passesBisectingAngleThreshold(n,i);return{start:t,end:e,direction:s?this._bisectVectorsPerpendicular(i,n):n,isOriginalDirection:!s}}_passesBisectingAngleThreshold(t,e){const i=Math.abs(Object(d["a"])(e,t));return i>=p&&i<=Math.PI-p}_bisectVectorsPerpendicular(t,e){const i=Object(c["h"])(t,e)<0?t:Object(c["s"])(Object(a["f"])(),t),n=Math.abs(Object(c["h"])(i,e));if(!(n<.001||n>.999))return this._bisectDirection(i,e);const r=Object(c["g"])(Object(a["f"])(),i,[0,0,1]);return Object(c["r"])(r,r)}_bisectDirection(t,e){const i=Object(c["f"])(Object(a["f"])(),t,e);return Object(c["r"])(i,i)}_initializePlane(){const t=this._computeNormalDirection(this._left),e=this._computeNormalDirection(this._right);Object(c["h"])(t,e)<0&&Object(c["s"])(e,e),Object(h["g"])(this._left.start,this._bisectDirection(t,e),this._plane)}_computeNormalDirection(t){const e=Object(c["g"])(Object(a["f"])(),t.direction,this._edgeDirection);Object(c["r"])(e,e);const i=Object(c["g"])(Object(a["f"])(),this._edgeDirection,e);return 1===this.planeType&&(i[2]=0),Object(c["r"])(i,i)}_initializeDistanceConstraints(){Object(r["l"])(this._left.end)&&!this.requiresSplitEdgeLeft&&this._updateDistanceConstraint(Object(h["t"])(this._plane,this._left.end)),Object(r["l"])(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint(Object(h["t"])(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(t){t<=0&&(this._minDistance=Math.max(this._minDistance,t)),t>=0&&(this._maxDistance=Math.min(this._maxDistance,t))}_updateIntersectDistanceConstraint(t){const e=Object(h["q"])(t),i=this._edgeDirection,n=Object(c["f"])(Object(a["f"])(),this._left.start,this._left.direction),r=Object(c["f"])(Object(a["f"])(),this._right.start,this._right.direction),d=this._pointInBasis2D(Object(o["a"])(),e,i,this._left.start),l=this._pointInBasis2D(Object(o["a"])(),e,i,n),p=this._pointInBasis2D(Object(o["a"])(),e,i,this._right.start),f=this._pointInBasis2D(Object(o["a"])(),e,i,r),[g]=Object(u["c"])({start:l,end:d,type:1},{start:f,end:p,type:1});if(!g)return;const m=Object(s["f"])(Object(o["a"])(),d,l);Object(s["i"])(m,m);const b=Object(s["f"])(Object(o["a"])(),g,l),x=Object(s["k"])(m,b),y=Object(c["f"])(Object(a["f"])(),n,Object(c["e"])(Object(a["f"])(),this._left.direction,-x)),v=Object(h["t"])(t,y);this._updateDistanceConstraint(v)}_pointInBasis2D(t,e,i,n){return t[0]=Object(d["d"])(e,n),t[1]=Object(d["d"])(i,n),t}_offset(t,e){Number.isFinite(this._minDistance)&&(e=Math.max(this._minDistance,e)),Number.isFinite(this._maxDistance)&&(e=Math.min(this._maxDistance,e)),Object(h["c"])(this._plane,this._offsetPlane),this._offsetPlane[3]-=e;const i=(t,e,i)=>Object(r["l"])(e)&&Object(h["j"])(this._offsetPlane,t,Object(c["f"])(Object(a["f"])(),t,e),i),n=Object(a["f"])();(t===this.edge.leftVertex?i(this._left.start,this._left.direction,n):i(this._right.start,this._right.direction,n))&&this.helper.copy(this.helper.fromXYZ(n,void 0,this.helper.getM(t.pos)),t.pos)}signedDistanceToPoint(t){return Object(h["t"])(this.plane,this.helper.toXYZ(this.helper.pointToVector(t)))}apply(t){this._offset(t,this.distance)}undo(t){this._offset(t,0)}canAccumulate(t){return t instanceof l&&this.edge.leftVertex.index===t.edge.leftVertex.index&&this.edge.rightVertex.index===t.edge.rightVertex.index&&this.edge.component===t.edge.component&&this._maybeEqualsVec3(this._left.direction,t._left.direction)&&this._maybeEqualsVec3(this._right.direction,t._right.direction)&&Object(c["D"])(Object(h["q"])(this._plane),Object(h["q"])(t._plane))}accumulate(t,e){const i=this._plane[3]-e._plane[3]+e.distance;this._offset(t,i)}accumulateParams(t){const e=t.distance-t._plane[3];this.distance=e+this._plane[3]}clone(){const t=new l(this.helper,this.planeType,this.edge,this.distance,1);return Object(h["c"])(this._plane,t._plane),Object(h["c"])(this._offsetPlane,t._offsetPlane),t._maxDistance=this._maxDistance,t._minDistance=this._minDistance,t._left=this._cloneNeighbor(this._left),t._right=this._cloneNeighbor(this._right),t._edgeDirection=Object(c["k"])(Object(a["f"])(),this._edgeDirection),t}_maybeEqualsVec3(t,e){return Object(r["k"])(t)&&Object(r["k"])(e)||Object(r["l"])(t)&&Object(r["l"])(e)&&Object(c["D"])(t,e)}_cloneNeighbor({start:t,end:e,direction:i,isOriginalDirection:n}){return{start:Object(c["k"])(Object(a["f"])(),t),end:Object(r["l"])(e)?Object(c["k"])(Object(a["f"])(),e):null,direction:Object(c["k"])(Object(a["f"])(),i),isOriginalDirection:n}}}const p=Object(n["f"])(15)},"65a7":function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));var n=i("c649"),r=i("e753"),s=i("e6b5"),o=i("d232"),c=i("b63c"),a=i("5715");class h{draw(t,e){const i=this.getUniqueHints(t),h=[];for(const n of i)n instanceof r["a"]&&h.push(this.visualizeIntersectionPoint(n,e)),n instanceof s["a"]&&h.push(this.visualizeLine(n,e)),n instanceof o["a"]&&h.push(this.visualizeParallelSign(n,e)),n instanceof a["a"]&&h.push(this.visualizeRightAngleQuad(n,e)),n instanceof c["a"]&&h.push(this.visualizePoint(n,e));return Object(n["b"])(h)}getUniqueHints(t){const e=[];for(const i of t){let t=!0;for(const n of e)if(i.equals(n)){t=!1;break}t&&e.push(i)}return e}}},"6ae9":function(t,e,i){"use strict";i.d(e,"a",(function(){return f})),i.d(e,"b",(function(){return p})),i.d(e,"c",(function(){return g})),i.d(e,"d",(function(){return l}));var n=i("b50f"),r=i("ce6d"),s=i("b2b2"),o=i("1219"),c=i("521c"),a=i("8b1a"),h=i("7f83");function d(t,e){if(!e.supported)return;let i=1/0,n=-1/0;const r=e.upperBoundX-e.lowerBoundX;t.forEach(t=>{let s=t.pos[0];for(;s<e.lowerBoundX;)s+=r;for(;s>e.upperBoundX;)s-=r;i=Math.min(i,s),n=Math.max(n,s),t.pos[0]=s});const s=n-i;r-s<s&&t.forEach(t=>{t.pos[0]<0&&(t.pos[0]+=r)})}function u(t,e){const i=Object(h["e"])(t);return 1===e&&i?{supported:!0,lowerBoundX:i.valid[0],upperBoundX:i.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}class l{constructor(t){this.component=t,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(t){this._pos=t,this.component.unnormalizeVertexPositions()}}class p{constructor(t,e,i){this.component=t,this.leftVertex=e,this.rightVertex=i,this.type="edge",e.rightEdge=this,i.leftEdge=this}}class f{constructor(t,e){this.spatialReference=t,this.viewingMode=e,this.vertices=[],this.edges=[]}unnormalizeVertexPositions(){this.vertices.length<=1||d(this.vertices,u(this.spatialReference,this.viewingMode))}updateVertexIndex(t,e){if(0===this.vertices.length)return;const i=this.vertices[0];let n=null,r=t,s=e;do{n=r,n.index=s++,r=n.rightEdge?n.rightEdge.rightVertex:null}while(null!=r&&r!==i);n.leftEdge&&n!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(n),this.vertices.length-1)}getFirstVertex(){return 0===this.vertices.length?null:this.vertices[0]}getLastVertex(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]}isClosed(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge}swapVertices(t,e){const i=this.vertices[t];this.vertices[t]=this.vertices[e],this.vertices[e]=i}iterateVertices(t){if(0===this.vertices.length)return;const e=this.vertices[0];let i=e;do{t(i,i.index),i=Object(s["l"])(i.rightEdge)?i.rightEdge.rightVertex:null}while(i!==e&&null!=i)}}class g extends r["a"]{constructor(t,e,i){super(),this.type=t,this.coordinateHelper=e,this.viewingMode=i,this._geometry=null,this.dirty=!0,this.components=[]}get geometry(){if(this.dirty){switch(this.type){case"point":this._geometry=this.toPoint();break;case"polyline":this._geometry=this.toPolyline();break;case"polygon":this._geometry=this.toPolygon()}this.dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(t){this.dirty=!0,this.emit("change",t)}toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}toPolyline(){const t=[],e=this.coordinateHelper.vectorToArray;return this.components.forEach((i,n)=>{const r=[];let s=i.vertices.find(t=>null==t.leftEdge);const o=s;do{r.push(e(s.pos)),s=s.rightEdge?s.rightEdge.rightVertex:null}while(s&&s!==o);t.push(r)}),new c["a"]({paths:t,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}toPolygon(){const t=[],e=this.coordinateHelper.vectorToArray;return this.components.forEach((i,n)=>{const r=[],o=i.vertices[0];let c=o;const a=c;do{r.push(e(c.pos)),c=Object(s["l"])(c.rightEdge)?c.rightEdge.rightVertex:null}while(c&&c!==a);i.isClosed()&&r.push(e(o.pos)),t.push(r)}),new o["a"]({rings:t,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(t,e){const i=t.spatialReference,r=Object(a["a"])(t.hasZ,t.hasM,i),s=new g(t.type,r,e);switch(t.type){case"polygon":{const o=t.rings;for(let t=0;t<o.length;++t){const c=o[t],a=new f(i,e),h=c.length>2&&Object(n["c"])(c[0],c[c.length-1]),d=h?c.length-1:c.length;for(let t=0;t<d;++t){const e=r.arrayToVector(c[t]),i=new l(a);a.vertices.push(i),i.pos=e,i.index=t}const u=a.vertices.length-1;for(let t=0;t<u;++t){const e=a.vertices[t],i=a.vertices[t+1],n=new p(a,e,i);a.edges.push(n)}if(h){const t=new p(a,a.vertices[a.vertices.length-1],a.vertices[0]);a.edges.push(t)}s.components.push(a)}break}case"polyline":for(const n of t.paths){const t=new f(i,e),o=n.length;for(let e=0;e<o;++e){const i=r.arrayToVector(n[e]),s=new l(t);t.vertices.push(s),s.pos=i,s.index=e}const c=t.vertices.length-1;for(let e=0;e<c;++e){const i=t.vertices[e],n=t.vertices[e+1],r=new p(t,i,n);t.edges.push(r)}s.components.push(t)}break;case"point":{const n=new f(i,e),o=new l(n);o.index=0,o.pos=r.pointToVector(t),n.vertices.push(o),s.components.push(n);break}}return s}}},7289:function(t,e,i){"use strict";i.d(e,"a",(function(){return P})),i.d(e,"b",(function(){return z})),i.d(e,"c",(function(){return d})),i.d(e,"d",(function(){return a})),i.d(e,"e",(function(){return f})),i.d(e,"f",(function(){return p})),i.d(e,"g",(function(){return l})),i.d(e,"h",(function(){return u})),i.d(e,"i",(function(){return V})),i.d(e,"j",(function(){return _})),i.d(e,"k",(function(){return w})),i.d(e,"l",(function(){return T})),i.d(e,"m",(function(){return E})),i.d(e,"n",(function(){return k})),i.d(e,"o",(function(){return D})),i.d(e,"p",(function(){return j})),i.d(e,"q",(function(){return C})),i.d(e,"r",(function(){return M})),i.d(e,"s",(function(){return O})),i.d(e,"t",(function(){return Z})),i.d(e,"u",(function(){return h}));var n=i("38a4"),r=i("b2b2"),s=i("e431"),o=i("0b2d"),c=(i("f895"),i("7361"));function a(t=X){return[t[0],t[1],t[2],t[3]]}function h(t,e,i,n){return u(t,e,i,n,c["e"].get())}function d(t,e=a()){return u(t[0],t[1],t[2],t[3],e)}function u(t,e,i,n,r=a()){return r[0]=t,r[1]=e,r[2]=i,r[3]=n,r}function l(t,e,i){const n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=Math.abs(n-1)>1e-5&&n>1e-12?1/Math.sqrt(n):1;return i[0]=e[0]*r,i[1]=e[1]*r,i[2]=e[2]*r,i[3]=-(i[0]*t[0]+i[1]*t[1]+i[2]*t[2]),i}function p(t,e,i,n=a()){const r=i[0]-e[0],s=i[1]-e[1],o=i[2]-e[2],c=t[0]-e[0],h=t[1]-e[1],d=t[2]-e[2],u=s*d-o*h,l=o*c-r*d,p=r*h-s*c,f=u*u+l*l+p*p,g=Math.abs(f-1)>1e-5&&f>1e-12?1/Math.sqrt(f):1;n[0]=u*g,n[1]=l*g,n[2]=p*g,n[3]=-(n[0]*t[0]+n[1]*t[1]+n[2]*t[2])}function f(t,e,i,n,r){if(t.count<3)return!1;t.getVec(i,m);let o=n,c=!1;for(;o<t.count-1&&!c;)t.getVec(o,b),o++,c=!Object(s["o"])(m,b);if(!c)return!1;for(o=Math.max(o,r),c=!1;o<t.count&&!c;)t.getVec(o,x),o++,Object(s["j"])(y,m,b),Object(s["r"])(y,y),Object(s["j"])(v,b,x),Object(s["r"])(v,v),c=!Object(s["o"])(m,x)&&!Object(s["o"])(b,x)&&Math.abs(Object(s["h"])(y,v))<g;return c?(p(m,b,x,e),!0):(0!==i||1!==n||2!==r)&&f(t,e,0,1,2)}const g=.99619469809,m=Object(o["f"])(),b=Object(o["f"])(),x=Object(o["f"])(),y=Object(o["f"])(),v=Object(o["f"])();function O(t,e,i){return t!==i&&d(t,i),i[3]=-Object(s["h"])(C(i),e),i}function j(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function V(t,e,i,n){return Object(s["g"])(x,e,t),l(i,x,n)}function _(t,e,i,n){return G(t,e,Object(s["j"])(c["d"].get(),i,e),q,n)}function E(t,e,i){return!!Object(r["l"])(e)&&G(t,e.origin,e.direction,H,i)}function w(t,e,i){return G(t,e.origin,e.vector,0,i)}function T(t,e,i){return G(t,e.origin,e.vector,1,i)}function D(t,e){return Z(t,e)>=0}function k(t,e){const i=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5];return t[0]*(t[0]>0?i:s)+t[1]*(t[1]>0?n:o)+t[2]*(t[2]>0?r:c)+t[3]>=0}function P(t,e){const i=Object(s["h"])(C(t),e.ray.direction),n=-Z(t,e.ray.origin);if(n<0&&i>=0)return!1;if(i>-1e-6&&i<1e-6)return n>0;if((n<0||i<0)&&!(n<0&&i<0))return!0;const r=n/i;return i>0?r<e.c1&&(e.c1=r):r>e.c0&&(e.c0=r),e.c0<=e.c1}function z(t,e){const i=Object(s["h"])(C(t),e.ray.direction),n=-Z(t,e.ray.origin);if(i>-1e-6&&i<1e-6)return n>0;const r=n/i;return i>0?r<e.c1&&(e.c1=r):r>e.c0&&(e.c0=r),e.c0<=e.c1}function M(t,e,i){const n=Object(s["e"])(c["d"].get(),C(t),-t[3]),r=R(t,Object(s["j"])(c["d"].get(),e,n),c["d"].get());return Object(s["f"])(i,r,n),i}function R(t,e,i){const n=Object(s["e"])(c["d"].get(),C(t),Object(s["h"])(C(t),e));return Object(s["j"])(i,e,n),i}function Z(t,e){return Object(s["h"])(C(t),e)+t[3]}function G(t,e,i,r,o){const c=Object(s["h"])(C(t),i);if(0===c)return!1;let a=-(Object(s["h"])(C(t),e)+t[3])/c;return 1&r&&(a=Object(n["d"])(a,0,1)),!(!(4&r)&&a<0||!(8&r)&&a>1)&&(Object(s["f"])(o,e,Object(s["e"])(o,i,a)),!0)}function C(t){return t}const X=[0,0,1,0],q=12,H=8},"8b1a":function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var n=i("3349"),r=i("02f1"),s=i("e431"),o=i("0b2d"),c=i("7577"),a=i("0fc4"),h=i("4ae5");class d{constructor(t){this.spatialReference=t}createVector(){return this.tag(Object(r["a"])())}pointToVector(t){return this.tag(Object(r["e"])(t.x,t.y))}arrayToVector(t){return this.tag(Object(r["e"])(t[0],t[1]))}vectorToArray(t){return[t[0],t[1]]}pointToArray(t){return[t.x,t.y]}vectorToPoint(t,e=new h["a"]){return e.x=t[0],e.y=t[1],e.z=void 0,e.m=void 0,e.spatialReference=this.spatialReference,e}arrayToPoint(t,e=new h["a"]){return e.x=t[0],e.y=t[1],e.z=void 0,e.m=void 0,e.spatialReference=this.spatialReference,e}vectorToDehydratedPoint(t,e={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return e.x=t[0],e.y=t[1],e.z=void 0,e.m=void 0,e.hasZ=!1,e.hasM=!1,e.spatialReference=this.spatialReference,e}lerp(t,e,i,r){return Object(n["o"])(r,t,e,i)}addDelta(t,e,i){t[0]+=e,t[1]+=i}distance(t,e){return Object(n["b"])(t,e)}getZ(t,e){return e}hasZ(){return!1}getM(t,e){return e}hasM(){return!1}clone(t){return this.tag(Object(r["d"])(t))}copy(t,e){return Object(n["c"])(e,t)}fromXYZ(t){return this.tag(Object(r["e"])(t[0],t[1]))}toXYZ(t,e=0){return Object(o["h"])(t[0],t[1],e)}tag(t){return t}}class u{constructor(t,e){this.valueType=t,this.spatialReference=e}createVector(){return this.tag(Object(o["f"])())}pointToVector(t){return this.tag(Object(o["h"])(t.x,t.y,0===this.valueType?t.z:t.m))}arrayToVector(t){return this.tag(Object(o["h"])(t[0],t[1],t[2]||0))}vectorToArray(t){return[t[0],t[1],t[2]]}pointToArray(t){return 0===this.valueType?[t.x,t.y,t.z]:[t.x,t.y,t.m]}vectorToPoint(t,e=new h["a"]){return e.x=t[0],e.y=t[1],e.z=0===this.valueType?t[2]:void 0,e.m=1===this.valueType?t[2]:void 0,e.spatialReference=this.spatialReference,e}arrayToPoint(t,e=new h["a"]){return e.x=t[0],e.y=t[1],e.z=0===this.valueType?t[2]:void 0,e.m=1===this.valueType?t[2]:void 0,e.spatialReference=this.spatialReference,e}vectorToDehydratedPoint(t,e={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){const i=0===this.valueType,n=1===this.valueType;return e.x=t[0],e.y=t[1],e.z=i?t[2]:void 0,e.m=n?t[2]:void 0,e.hasZ=i,e.hasM=n,e.spatialReference=this.spatialReference,e}lerp(t,e,i,n){return Object(s["i"])(n,t,e,i)}addDelta(t,e,i,n){t[0]+=e,t[1]+=i,0===this.valueType&&(t[2]+=n)}distance(t,e){return 0===this.valueType?Object(s["m"])(t,e):Object(n["b"])(t,e)}getZ(t,e){return 0===this.valueType?t[2]:e}hasZ(){return 0===this.valueType}getM(t,e){return 1===this.valueType?t[2]:e}hasM(){return 1===this.valueType}clone(t){return this.tag(Object(o["g"])(t))}copy(t,e){return Object(s["k"])(e,t)}fromXYZ(t,e=0,i=0){return this.tag(Object(o["h"])(t[0],t[1],0===this.valueType?t.length>2?t[2]:e:i))}toXYZ(t,e=0){return this.tag(Object(o["h"])(t[0],t[1],0===this.valueType?t[2]:e))}tag(t){return t}}class l{constructor(t){this.spatialReference=t}createVector(){return this.tag(Object(a["e"])())}pointToVector(t){return this.tag(Object(a["g"])(t.x,t.y,t.z,t.m))}arrayToVector(t){return this.tag(Object(a["g"])(t[0],t[1],t[2]||0,t[3]||0))}vectorToArray(t){return[t[0],t[1],t[2],t[3]]}pointToArray(t){return[t.x,t.y,t.z,t.m]}vectorToPoint(t,e=new h["a"]){return e.x=t[0],e.y=t[1],e.z=t[2],e.m=t[3],e.spatialReference=this.spatialReference,e}arrayToPoint(t,e=new h["a"]){return e.x=t[0],e.y=t[1],e.z=t[2],e.m=t[3],e.spatialReference=this.spatialReference,e}vectorToDehydratedPoint(t,e={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return e.x=t[0],e.y=t[1],e.z=t[2],e.m=t[3],e.hasZ=!0,e.hasM=!0,e.spatialReference=this.spatialReference,e}lerp(t,e,i,n){return Object(c["j"])(n,t,e,i)}addDelta(t,e,i,n){t[0]+=e,t[1]+=i,t[2]+=n}distance(t,e){return Object(s["m"])(t,e)}getZ(t){return t[2]}hasZ(){return!0}getM(t){return t[3]}hasM(){return!0}clone(t){return this.tag(Object(a["f"])(t))}copy(t,e){return Object(c["c"])(e,t)}fromXYZ(t,e=0,i=0){return this.tag(Object(a["g"])(t[0],t[1],t.length>2?t[2]:e,i))}toXYZ(t){return Object(o["h"])(t[0],t[1],t[2])}tag(t){return t}}function p(t,e,i){return t&&e?new l(i):e?new u(1,i):t?new u(0,i):new d(i)}},b63c:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("6706"),r=i("7dcb");class s extends r["a"]{constructor(t){super(),this.point=t}equals(t){return t instanceof s&&Object(n["d"])(this.point,t.point)}}},cdc1:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return u})),i.d(e,"c",(function(){return d})),i.d(e,"d",(function(){return c})),i.d(e,"e",(function(){return h}));var n=i("38a4"),r=i("9180"),s=i("28b1"),o=i("32ed");function c(t,e,i,n){if(null==n||t.hasZ||(n=void 0),"point"===t.type)return t.x+=e,t.y+=i,t.hasZ&&null!=n&&(t.z+=n),t;if("multipoint"===t.type){const r=t.points;for(let t=0;t<r.length;t++)r[t]=l(r[t],e,i,n);return t}if("extent"===t.type)return t.xmin+=e,t.xmax+=e,t.ymin+=i,t.ymax+=i,null!=n&&(t.zmin+=n,t.zmax+=n),t;const r=Object(o["b"])(t),s="polyline"===t.type?t.paths:t.rings;for(let o=0;o<r.length;o++){const t=r[o];for(let r=0;r<t.length;r++)t[r]=l(t[r],e,i,n)}return"paths"in t?t.paths=s:t.rings=s,t}function a(t,e,i,n,r){const s=t.clone(),a=n.resolution;if("point"===s.type){if(r)c(s,e*a,-i*a);else{const t=n.state.transform,r=n.state.inverseTransform,o=t[0]*s.x+t[2]*s.y+t[4],c=t[1]*s.x+t[3]*s.y+t[5];s.x=r[0]*(o+e)+r[2]*(c+i)+r[4],s.y=r[1]*(o+e)+r[3]*(c+i)+r[5]}return s}if("multipoint"===s.type){if(r)c(s,e*a,-i*a);else{const t=s.points,r=n.state.transform,o=n.state.inverseTransform;for(let n=0;n<t.length;n++){const s=t[n],c=r[0]*s[0]+r[2]*s[1]+r[4],a=r[1]*s[0]+r[3]*s[1]+r[5],h=o[0]*(c+e)+o[2]*(a+i)+o[4],d=o[1]*(c+e)+o[3]*(a+i)+o[5];t[n]=p(s,h,d,void 0)}}return s}if("extent"===s.type){if(r)c(s,e*a,-i*a);else{const t=n.state.transform,r=n.state.inverseTransform,o=t[0]*s.xmin+t[2]*s.ymin+t[4],c=t[1]*s.xmin+t[3]*s.ymin+t[5],a=t[0]*s.xmax+t[2]*s.ymax+t[4],h=t[1]*s.xmax+t[3]*s.ymax+t[5];s.xmin=r[0]*(o+e)+r[2]*(c+i)+r[4],s.ymin=r[1]*(o+e)+r[3]*(c+i)+r[5],s.xmax=r[0]*(a+e)+r[2]*(h+i)+r[4],s.ymax=r[1]*(a+e)+r[3]*(h+i)+r[5]}return s}if(r)c(s,e*a,-i*a);else{const t=Object(o["b"])(s),r="polyline"===s.type?s.paths:s.rings,c=n.state.transform,a=n.state.inverseTransform;for(let n=0;n<t.length;n++){const r=t[n];for(let t=0;t<r.length;t++){const n=r[t],s=c[0]*n[0]+c[2]*n[1]+c[4],o=c[1]*n[0]+c[3]*n[1]+c[5],h=a[0]*(s+e)+a[2]*(o+i)+a[4],d=a[1]*(s+e)+a[3]*(o+i)+a[5];r[t]=p(n,h,d,void 0)}}"paths"in s?s.paths=r:s.rings=r}return s}function h(t,e,i,n){if("point"===t.type){const{x:r,y:s}=t,o=n?n[0]:r,c=n?n[1]:s,a=t.clone(),h=(r-o)*e+o,d=(s-c)*i+c;return a.x=h,a.y=d,a}if("multipoint"===t.type){const c=Object(o["b"])(t),a=Object(r["l"])(),[h,d,u,l]=Object(s["d"])(a,[c]),f=n?n[0]:(h+u)/2,g=n?n[1]:(l+d)/2,m=t.clone(),b=m.points;for(let t=0;t<b.length;t++){const n=b[t],[r,s]=n,o=(r-f)*e+f,c=(s-g)*i+g;b[t]=p(n,o,c,void 0)}return m}if("extent"===t.type){const{xmin:r,xmax:s,ymin:o,ymax:c}=t,a=n?n[0]:(r+s)/2,h=n?n[1]:(c+o)/2,d=t.clone();if(d.xmin=(r-a)*e+a,d.ymax=(c-h)*i+h,d.xmax=(s-a)*e+a,d.ymin=(o-h)*i+h,d.xmin>d.xmax){const t=d.xmin,e=d.xmax;d.xmin=e,d.xmax=t}if(d.ymin>d.ymax){const t=d.ymin,e=d.ymax;d.ymin=e,d.ymax=t}return d}const c=Object(o["b"])(t),a=Object(r["l"])(),[h,d,u,l]=Object(s["d"])(a,c),f=n?n[0]:(h+u)/2,g=n?n[1]:(l+d)/2,m=t.clone(),b="polyline"===m.type?m.paths:m.rings;for(let r=0;r<c.length;r++){const t=c[r];for(let n=0;n<t.length;n++){const s=t[n],[o,c]=s,a=(o-f)*e+f,h=(c-g)*i+g;b[r][n]=p(s,a,h,void 0)}}return"paths"in m?m.paths=b:m.rings=b,m}function d(t,e,i,n,r,s){const o=Math.sqrt((i-t)*(i-t)+(n-e)*(n-e));return Math.sqrt((r-t)*(r-t)+(s-e)*(s-e))/o}function u(t,e,i){const r=Math.atan2(e.y-i.y,e.x-i.x)-Math.atan2(t.y-i.y,t.x-i.x),s=Math.atan2(Math.sin(r),Math.cos(r));return Object(n["l"])(s)}function l(t,e,i,n){return p(t,t[0]+e,t[1]+i,null!=t[2]&&null!=n?t[2]+n:void 0)}function p(t,e,i,n){const r=[e,i];return t.length>2&&r.push(null!=n?n:t[2]),t.length>3&&r.push(t[3]),r}},e1e0:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("b50f"),r=i("3349");class s{constructor(t,e,i=0){this.origin=t,this.angle=e,this.accumulationType=i}rotate(t,e){Object(r["r"])(t.pos,t.pos,this.origin,e)}apply(t){this.rotate(t,this.angle)}undo(t){this.rotate(t,-this.angle)}canAccumulate(t){return t instanceof s&&Object(n["c"])(this.origin,t.origin)}accumulate(t,e){const i=1===e.accumulationType;this.rotate(t,i?e.angle-this.angle:e.angle)}accumulateParams(t){const e=1===t.accumulationType;this.angle=e?t.angle:this.angle+t.angle}}},fbd0:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("b50f"),r=i("02f1"),s=i("3349");class o{constructor(t,e,i,n,s=0){this.origin=t,this.axis1=e,this.factor1=i,this.factor2=n,this.accumulationType=s,this.axis2=Object(r["e"])(e[1],-e[0])}scale(t,e,i){Object(s["q"])(t.pos,t.pos,this.origin,this.axis1,e),Object(s["q"])(t.pos,t.pos,this.origin,this.axis2,i)}apply(t){this.scale(t,this.factor1,this.factor2)}undo(t){this.scale(t,1/this.factor1,1/this.factor2)}canAccumulate(t){return t instanceof o&&Object(n["c"])(this.origin,t.origin)&&Object(n["c"])(this.axis1,t.axis1)}accumulate(t,e){1===e.accumulationType?this.scale(t,e.factor1/this.factor1,e.factor2/this.factor2):this.scale(t,e.factor1,e.factor2)}accumulateParams(t){const e=1===t.accumulationType;this.factor1=e?t.factor1:this.factor1*t.factor1,this.factor2=e?t.factor2:this.factor2*t.factor2}}}}]);
//# sourceMappingURL=chunk-eb72276e.6d711238.js.map