"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{125:(e,t,r)=>{var n=r(2115),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,o=n.useEffect,s=n.useLayoutEffect,l=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return s(function(){i.value=r,i.getSnapshot=t,u(i)&&c({inst:i})},[e,r,t]),o(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},258:(e,t,r)=>{r.d(t,{Hl:()=>f});var n=r(6595),i=r(2115),a=r(7548);function o(e,t){let r;return(...n)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...n),t)}}let s=["x","y","top","bottom","left","right","width","height"];var l=r(4735),u=r(5155);function c({ref:e,children:t,fallback:r,resize:l,style:c,gl:f,events:d=n.f,eventSource:h,eventPrefix:p,shadows:v,linear:m,flat:g,legacy:y,orthographic:w,frameloop:x,dpr:b,performance:S,raycaster:_,camera:M,scene:E,onPointerMissed:U,onCreated:T,...A}){i.useMemo(()=>(0,n.e)(a),[]);let D=(0,n.u)(),[C,R]=function({debounce:e,scroll:t,polyfill:r,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){var a,l,u;let c=r||("undefined"==typeof window?class{}:window.ResizeObserver);if(!c)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[f,d]=(0,i.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),h=(0,i.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:f,orientationHandler:null}),p=e?"number"==typeof e?e:e.scroll:null,v=e?"number"==typeof e?e:e.resize:null,m=(0,i.useRef)(!1);(0,i.useEffect)(()=>(m.current=!0,()=>void(m.current=!1)));let[g,y,w]=(0,i.useMemo)(()=>{let e=()=>{let e,t;if(!h.current.element)return;let{left:r,top:i,width:a,height:o,bottom:l,right:u,x:c,y:f}=h.current.element.getBoundingClientRect(),p={left:r,top:i,width:a,height:o,bottom:l,right:u,x:c,y:f};h.current.element instanceof HTMLElement&&n&&(p.height=h.current.element.offsetHeight,p.width=h.current.element.offsetWidth),Object.freeze(p),m.current&&(e=h.current.lastBounds,t=p,!s.every(r=>e[r]===t[r]))&&d(h.current.lastBounds=p)};return[e,v?o(e,v):e,p?o(e,p):e]},[d,n,p,v]);function x(){h.current.scrollContainers&&(h.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",w,!0)),h.current.scrollContainers=null),h.current.resizeObserver&&(h.current.resizeObserver.disconnect(),h.current.resizeObserver=null),h.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",h.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",h.current.orientationHandler))}function b(){h.current.element&&(h.current.resizeObserver=new c(w),h.current.resizeObserver.observe(h.current.element),t&&h.current.scrollContainers&&h.current.scrollContainers.forEach(e=>e.addEventListener("scroll",w,{capture:!0,passive:!0})),h.current.orientationHandler=()=>{w()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",h.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",h.current.orientationHandler))}return a=w,l=!!t,(0,i.useEffect)(()=>{if(l)return window.addEventListener("scroll",a,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",a,!0)},[a,l]),u=y,(0,i.useEffect)(()=>(window.addEventListener("resize",u),()=>void window.removeEventListener("resize",u)),[u]),(0,i.useEffect)(()=>{x(),b()},[t,w,y]),(0,i.useEffect)(()=>x,[]),[e=>{e&&e!==h.current.element&&(x(),h.current.element=e,h.current.scrollContainers=function e(t){let r=[];if(!t||t===document.body)return r;let{overflow:n,overflowX:i,overflowY:a}=window.getComputedStyle(t);return[n,i,a].some(e=>"auto"===e||"scroll"===e)&&r.push(t),[...r,...e(t.parentElement)]}(e),b())},f,g]}({scroll:!0,debounce:{scroll:50,resize:0},...l}),F=i.useRef(null),B=i.useRef(null);i.useImperativeHandle(e,()=>F.current);let P=(0,n.a)(U),z=i.useCallback(e=>null==P.current?void 0:P.current(e),[P]),[I,L]=i.useState(!1),[O,k]=i.useState(!1);if(I)throw I;if(O)throw O;let H=i.useRef(null),[j,V]=(0,n.b)(),N=i.useRef(null),W=()=>h?(0,n.i)(h)?h.current:h:B.current;i.useInsertionEffect(()=>()=>{let e=H.current;H.current=null,null==e||e.unmount()},[]),(0,n.c)(()=>{let e=F.current;R.width>0&&R.height>0&&e&&(H.current||(H.current=(0,n.d)(e)),H.current.configure({gl:f,scene:E,events:d,shadows:v,linear:m,flat:g,legacy:y,orthographic:w,frameloop:x,dpr:b,performance:S,raycaster:_,camera:M,size:R,onPointerMissed:z,onCreated:e=>{var t;N.current=e,null==e.events.connect||e.events.connect(null!=(t=W())?t:B.current),p&&e.setEvents({compute:(e,t)=>{let r=e[p+"X"],n=e[p+"Y"];t.pointer.set(r/t.size.width*2-1,-(2*(n/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==T||T(e)}}).catch(k),"fulfilled"===H.current.ready.status?H.current.render((0,u.jsx)(D,{children:(0,u.jsx)(n.E,{set:k,children:(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)(n.B,{set:L}),children:null!=t?t:null})})})):"pending"===H.current.ready.status&&V(H.current.ready))}),i.useEffect(()=>{var e;let t=null==(e=N.current)?void 0:e.get(),r=W();t&&r&&t.events.connected!==r&&(null==t.events.connect||t.events.connect(r))}),i.useEffect(()=>{let e=F.current;return()=>{var t;e.isConnected||null==(t=H.current)||t.unmount()}},[]);let G=h?"none":"auto";return(0,u.jsxs)("div",{ref:B,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:G,...c},...A,children:[(0,u.jsx)("div",{ref:C,style:{width:"100%",height:"100%"},children:(0,u.jsx)("canvas",{ref:F,style:{display:"block"},children:r})}),j]})}function f(e){return(0,u.jsx)(l.Af,{children:(0,u.jsx)(c,{...e})})}r(9914)},1039:(e,t,r)=>{r.d(t,{s:()=>h});var n=r(8945),i=r(2115),a=r(7548),o=r(6595),s=r(8587);class l extends a.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${s.r>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}}let u=e=>e&&e.constructor===Float32Array,c=e=>e instanceof a.Vector2||e instanceof a.Vector3||e instanceof a.Vector4,f=e=>Array.isArray(e)?e:c(e)?e.toArray():[e,e,e];function d(e,t,r){return i.useMemo(()=>{if(void 0!==t)if(u(t))return t;else{if(t instanceof a.Color){let r=Array.from({length:3*e},()=>[t.r,t.g,t.b]).flat();return Float32Array.from(r)}if(c(t)||Array.isArray(t)){let r=Array.from({length:3*e},()=>f(t)).flat();return Float32Array.from(r)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},r)},[t])}let h=i.forwardRef(({noise:e=1,count:t=100,speed:r=1,opacity:s=1,scale:c=1,size:h,color:p,children:v,...m},g)=>{i.useMemo(()=>(0,o.e)({SparklesImplMaterial:l}),[]);let y=i.useRef(null),w=(0,o.D)(e=>e.viewport.dpr),x=f(c),b=i.useMemo(()=>Float32Array.from(Array.from({length:t},()=>x.map(a.MathUtils.randFloatSpread)).flat()),[t,...x]),S=d(t,h,Math.random),_=d(t,s),M=d(t,r),E=d(3*t,e),U=d(void 0===p?3*t:t,u(p)?p:new a.Color(p),()=>1);return(0,o.F)(e=>{y.current&&y.current.material&&(y.current.material.time=e.clock.elapsedTime)}),i.useImperativeHandle(g,()=>y.current,[]),i.createElement("points",(0,n.A)({key:`particle-${t}-${JSON.stringify(c)}`},m,{ref:y}),i.createElement("bufferGeometry",null,i.createElement("bufferAttribute",{attach:"attributes-position",args:[b,3]}),i.createElement("bufferAttribute",{attach:"attributes-size",args:[S,1]}),i.createElement("bufferAttribute",{attach:"attributes-opacity",args:[_,1]}),i.createElement("bufferAttribute",{attach:"attributes-speed",args:[M,1]}),i.createElement("bufferAttribute",{attach:"attributes-color",args:[U,3]}),i.createElement("bufferAttribute",{attach:"attributes-noise",args:[E,3]})),v||i.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:w,depthWrite:!1}))})},1046:(e,t,r)=>{r.d(t,{n:()=>o});var n=r(2115),i=r(6595),a=r(7548);let o=n.forwardRef(({children:e,enabled:t=!0,speed:r=1,rotationIntensity:o=1,floatIntensity:s=1,floatingRange:l=[-.1,.1],autoInvalidate:u=!1,...c},f)=>{let d=n.useRef(null);n.useImperativeHandle(f,()=>d.current,[]);let h=n.useRef(1e4*Math.random());return(0,i.F)(e=>{var n,i;if(!t||0===r)return;u&&e.invalidate();let c=h.current+e.clock.elapsedTime;d.current.rotation.x=Math.cos(c/4*r)/8*o,d.current.rotation.y=Math.sin(c/4*r)/8*o,d.current.rotation.z=Math.sin(c/4*r)/20*o;let f=Math.sin(c/4*r)/10;f=a.MathUtils.mapLinear(f,-.1,.1,null!=(n=null==l?void 0:l[0])?n:-.1,null!=(i=null==l?void 0:l[1])?i:.1),d.current.position.y=f*s,d.current.updateMatrix()}),n.createElement("group",c,n.createElement("group",{ref:d,matrixAutoUpdate:!1},e))})},1288:(e,t,r)=>{let n,i;r.d(t,{N:()=>F});var a=r(8945),o=r(2115),s=r(7548),l=r(6595);let u=new s.Box3,c=new s.Vector3;class f extends s.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new s.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new s.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceEnd",new s.InterleavedBufferAttribute(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));let n=new s.InstancedInterleavedBuffer(r,2*t,1);return this.setAttribute("instanceColorStart",new s.InterleavedBufferAttribute(n,t,0)),this.setAttribute("instanceColorEnd",new s.InterleavedBufferAttribute(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),u.setFromBufferAttribute(t),this.boundingBox.union(u))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)c.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(c)),c.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(c));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var d=r(4814);class h extends s.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:s.UniformsUtils.clone(s.UniformsUtils.merge([s.UniformsLib.common,s.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${d.r>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let p=d.r>=125?"uv1":"uv2",v=new s.Vector4,m=new s.Vector3,g=new s.Vector3,y=new s.Vector4,w=new s.Vector4,x=new s.Vector4,b=new s.Vector3,S=new s.Matrix4,_=new s.Line3,M=new s.Vector3,E=new s.Box3,U=new s.Sphere,T=new s.Vector4;function A(e,t,r){return T.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),T.multiplyScalar(1/T.w),T.x=i/r.width,T.y=i/r.height,T.applyMatrix4(e.projectionMatrixInverse),T.multiplyScalar(1/T.w),Math.abs(Math.max(T.x,T.y))}class D extends s.Mesh{constructor(e=new f,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)m.fromBufferAttribute(t,e),g.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+m.distanceTo(g);let i=new s.InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new s.InterleavedBufferAttribute(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.InterleavedBufferAttribute(i,1,1)),this}raycast(e,t){let r,a,o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let u=void 0!==e.params.Line2&&e.params.Line2.threshold||0;n=e.ray;let c=this.matrixWorld,f=this.geometry,d=this.material;if(i=d.linewidth+u,null===f.boundingSphere&&f.computeBoundingSphere(),U.copy(f.boundingSphere).applyMatrix4(c),o)r=.5*i;else{let e=Math.max(l.near,U.distanceToPoint(n.origin));r=A(l,e,d.resolution)}if(U.radius+=r,!1!==n.intersectsSphere(U)){if(null===f.boundingBox&&f.computeBoundingBox(),E.copy(f.boundingBox).applyMatrix4(c),o)a=.5*i;else{let e=Math.max(l.near,E.distanceToPoint(n.origin));a=A(l,e,d.resolution)}E.expandByScalar(a),!1!==n.intersectsBox(E)&&(o?function(e,t){let r=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,o.count);for(let a=0;a<u;a++){_.start.fromBufferAttribute(o,a),_.end.fromBufferAttribute(l,a),_.applyMatrix4(r);let u=new s.Vector3,c=new s.Vector3;n.distanceSqToSegment(_.start,_.end,c,u),c.distanceTo(u)<.5*i&&t.push({point:c,pointOnLine:u,distance:n.origin.distanceTo(c),object:e,face:null,faceIndex:a,uv:null,[p]:null})}}(this,t):function(e,t,r){let a=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,u=e.geometry,c=u.attributes.instanceStart,f=u.attributes.instanceEnd,d=Math.min(u.instanceCount,c.count),h=-t.near;n.at(1,x),x.w=1,x.applyMatrix4(t.matrixWorldInverse),x.applyMatrix4(a),x.multiplyScalar(1/x.w),x.x*=o.x/2,x.y*=o.y/2,x.z=0,b.copy(x),S.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<d;t++){if(y.fromBufferAttribute(c,t),w.fromBufferAttribute(f,t),y.w=1,w.w=1,y.applyMatrix4(S),w.applyMatrix4(S),y.z>h&&w.z>h)continue;if(y.z>h){let e=y.z-w.z,t=(y.z-h)/e;y.lerp(w,t)}else if(w.z>h){let e=w.z-y.z,t=(w.z-h)/e;w.lerp(y,t)}y.applyMatrix4(a),w.applyMatrix4(a),y.multiplyScalar(1/y.w),w.multiplyScalar(1/w.w),y.x*=o.x/2,y.y*=o.y/2,w.x*=o.x/2,w.y*=o.y/2,_.start.copy(y),_.start.z=0,_.end.copy(w),_.end.z=0;let u=_.closestPointToPointParameter(b,!0);_.at(u,M);let d=s.MathUtils.lerp(y.z,w.z,u),v=d>=-1&&d<=1,m=b.distanceTo(M)<.5*i;if(v&&m){_.start.fromBufferAttribute(c,t),_.end.fromBufferAttribute(f,t),_.start.applyMatrix4(l),_.end.applyMatrix4(l);let i=new s.Vector3,a=new s.Vector3;n.distanceSqToSegment(_.start,_.end,a,i),r.push({point:a,pointOnLine:i,distance:n.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[p]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class C extends f{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){let r=e.length-t,n=new Float32Array(2*r);if(3===t)for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];else for(let i=0;i<r;i+=t)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5],n[2*i+6]=e[i+6],n[2*i+7]=e[i+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class R extends D{constructor(e=new C,t=new h({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let F=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:r,linewidth:n,lineWidth:i,segments:u,dashed:c,...d},p){var v,m;let g=(0,l.D)(e=>e.size),y=o.useMemo(()=>u?new D:new R,[u]),[w]=o.useState(()=>new h),x=(null==r||null==(v=r[0])?void 0:v.length)===4?4:3,b=o.useMemo(()=>{let n=u?new f:new C,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Vector3||e instanceof s.Vector4?[e.x,e.y,e.z]:e instanceof s.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(i.flat()),r){t=0xffffff;let e=r.map(e=>e instanceof s.Color?e.toArray():e);n.setColors(e.flat(),x)}return n},[e,u,r,x]);return o.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),o.useLayoutEffect(()=>{c?w.defines.USE_DASH="":delete w.defines.USE_DASH,w.needsUpdate=!0},[c,w]),o.useEffect(()=>()=>{b.dispose(),w.dispose()},[b]),o.createElement("primitive",(0,a.A)({object:y,ref:p},d),o.createElement("primitive",{object:b,attach:"geometry"}),o.createElement("primitive",(0,a.A)({object:w,attach:"material",color:t,vertexColors:!!r,resolution:[g.width,g.height],linewidth:null!=(m=null!=n?n:i)?m:1,dashed:c,transparent:4===x},d)))})},1673:(e,t,r)=>{r.d(t,{M:()=>o});var n=r(7548),i=r(2115),a=r(6595);function o({all:e,scene:t,camera:r}){let o=(0,a.D)(({gl:e})=>e),s=(0,a.D)(({camera:e})=>e),l=(0,a.D)(({scene:e})=>e);return i.useLayoutEffect(()=>{let i=[];e&&(t||l).traverse(e=>{!1===e.visible&&(i.push(e),e.visible=!0)}),o.compile(t||l,r||s);let a=new n.WebGLCubeRenderTarget(128);new n.CubeCamera(.01,1e5,a).update(o,t||l),a.dispose(),i.forEach(e=>e.visible=!1)},[]),null}},1816:(e,t,r)=>{let n;r.d(t,{OH:()=>eb});var i=r(8945),a=r(2115),o=r(6595),s=r(7548),l=r(4814);class u extends s.Mesh{constructor(e,t){var r,n;let i=(e=>e&&e.isCubeTexture)(e),a=Math.floor(Math.log2((null!=(n=i?null==(r=e.image[0])?void 0:r.width:e.image.width)?n:1024)/4)),o=Math.pow(2,a),u=3*Math.max(o,112),c=`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,f=[i?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/u}`,`#define CUBEUV_TEXEL_HEIGHT ${1/(4*o)}`,`#define CUBEUV_MAX_MIP ${a}.0`].join("\n")+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${l.r>=154?"colorspace_fragment":"encodings_fragment"}>
        }
        `,d={map:{value:e},height:{value:(null==t?void 0:t.height)||15},radius:{value:(null==t?void 0:t.radius)||100}};super(new s.IcosahedronGeometry(1,16),new s.ShaderMaterial({uniforms:d,fragmentShader:f,vertexShader:c,side:s.DoubleSide}))}set radius(e){this.material.uniforms.radius.value=e}get radius(){return this.material.uniforms.radius.value}set height(e){this.material.uniforms.height.value=e}get height(){return this.material.uniforms.height.value}}class c extends s.DataTextureLoader{constructor(e){super(e),this.type=s.HalfFloatType}parse(e){let t,r,n,i=function(e,t){switch(e){case 1:throw Error("THREE.RGBELoader: Read Error: "+(t||""));case 2:throw Error("THREE.RGBELoader: Write Error: "+(t||""));case 3:throw Error("THREE.RGBELoader: Bad File Format: "+(t||""));default:throw Error("THREE.RGBELoader: Memory Error: "+(t||""))}},a=function(e,t,r){t=t||1024;let n=e.pos,i=-1,a=0,o="",s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));for(;0>(i=s.indexOf("\n"))&&a<t&&n<e.byteLength;)o+=s,a+=s.length,n+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));return -1<i&&(!1!==r&&(e.pos+=a+i+1),o+s.slice(0,i))},o=new Uint8Array(e);o.pos=0;let l=function(e){let t,r,n=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,l=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,u={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};for(!(e.pos>=e.byteLength)&&(t=a(e))||i(1,"no header found"),(r=t.match(/^#\?(\S+)/))||i(3,"bad initial token"),u.valid|=1,u.programtype=r[1],u.string+=t+"\n";!1!==(t=a(e));){if(u.string+=t+"\n","#"===t.charAt(0)){u.comments+=t+"\n";continue}if((r=t.match(n))&&(u.gamma=parseFloat(r[1])),(r=t.match(o))&&(u.exposure=parseFloat(r[1])),(r=t.match(s))&&(u.valid|=2,u.format=r[1]),(r=t.match(l))&&(u.valid|=4,u.height=parseInt(r[1],10),u.width=parseInt(r[2],10)),2&u.valid&&4&u.valid)break}return 2&u.valid||i(3,"missing format specifier"),4&u.valid||i(3,"missing image size specifier"),u}(o),u=l.width,c=l.height,f=function(e,t,r){if(t<8||t>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);t!==(e[2]<<8|e[3])&&i(3,"wrong scanline width");let n=new Uint8Array(4*t*r);n.length||i(4,"unable to allocate buffer space");let a=0,o=0,s=4*t,l=new Uint8Array(4),u=new Uint8Array(s),c=r;for(;c>0&&o<e.byteLength;){o+4>e.byteLength&&i(1),l[0]=e[o++],l[1]=e[o++],l[2]=e[o++],l[3]=e[o++],(2!=l[0]||2!=l[1]||(l[2]<<8|l[3])!=t)&&i(3,"bad rgbe scanline format");let r=0,f;for(;r<s&&o<e.byteLength;){let t=(f=e[o++])>128;if(t&&(f-=128),(0===f||r+f>s)&&i(3,"bad scanline data"),t){let t=e[o++];for(let e=0;e<f;e++)u[r++]=t}else u.set(e.subarray(o,o+f),r),r+=f,o+=f}for(let e=0;e<t;e++){let r=0;n[a]=u[e+r],r+=t,n[a+1]=u[e+r],r+=t,n[a+2]=u[e+r],r+=t,n[a+3]=u[e+r],a+=4}c--}return n}(o.subarray(o.pos),u,c);switch(this.type){case s.FloatType:let d=new Float32Array(4*(n=f.length/4));for(let e=0;e<n;e++)!function(e,t,r,n){let i=Math.pow(2,e[t+3]-128)/255;r[n+0]=e[t+0]*i,r[n+1]=e[t+1]*i,r[n+2]=e[t+2]*i,r[n+3]=1}(f,4*e,d,4*e);t=d,r=s.FloatType;break;case s.HalfFloatType:let h=new Uint16Array(4*(n=f.length/4));for(let e=0;e<n;e++)!function(e,t,r,n){let i=Math.pow(2,e[t+3]-128)/255;r[n+0]=s.DataUtils.toHalfFloat(Math.min(e[t+0]*i,65504)),r[n+1]=s.DataUtils.toHalfFloat(Math.min(e[t+1]*i,65504)),r[n+2]=s.DataUtils.toHalfFloat(Math.min(e[t+2]*i,65504)),r[n+3]=s.DataUtils.toHalfFloat(1)}(f,4*e,h,4*e);t=h,r=s.HalfFloatType;break;default:throw Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:u,height:c,data:t,header:l.string,gamma:l.gamma,exposure:l.exposure,type:r}}setDataType(e){return this.type=e,this}load(e,t,r,n){return super.load(e,function(e,r){switch(e.type){case s.FloatType:case s.HalfFloatType:"colorSpace"in e?e.colorSpace="srgb-linear":e.encoding=3e3,e.minFilter=s.LinearFilter,e.magFilter=s.LinearFilter,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,r)},r,n)}}var f=Uint8Array,d=Uint16Array,h=Uint32Array,p=new f([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),v=new f([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),m=new f([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),g=function(e,t){for(var r=new d(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new h(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)i[a]=a-r[n]<<5|n;return[r,i]},y=g(p,2),w=y[0],x=y[1];w[28]=258,x[258]=28;var b=g(v,0),S=b[0];b[1];for(var _=new d(32768),M=0;M<32768;++M){var E=(43690&M)>>>1|(21845&M)<<1;E=(61680&(E=(52428&E)>>>2|(13107&E)<<2))>>>4|(3855&E)<<4,_[M]=((65280&E)>>>8|(255&E)<<8)>>>1}for(var U=function(e,t,r){for(var n,i=e.length,a=0,o=new d(t);a<i;++a)++o[e[a]-1];var s=new d(t);for(a=0;a<t;++a)s[a]=s[a-1]+o[a-1]<<1;if(r){n=new d(1<<t);var l=15-t;for(a=0;a<i;++a)if(e[a])for(var u=a<<4|e[a],c=t-e[a],f=s[e[a]-1]++<<c,h=f|(1<<c)-1;f<=h;++f)n[_[f]>>>l]=u}else for(a=0,n=new d(i);a<i;++a)e[a]&&(n[a]=_[s[e[a]-1]++]>>>15-e[a]);return n},T=new f(288),M=0;M<144;++M)T[M]=8;for(var M=144;M<256;++M)T[M]=9;for(var M=256;M<280;++M)T[M]=7;for(var M=280;M<288;++M)T[M]=8;for(var A=new f(32),M=0;M<32;++M)A[M]=5;var D=U(T,9,1),C=U(A,5,1),R=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},F=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(7&t)&r},B=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},P=function(e,t,r){(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length);var n=new(e instanceof d?d:e instanceof h?h:f)(r-t);return n.set(e.subarray(t,r)),n},z=function(e,t,r){var n=e.length;if(!n||r&&!r.l&&n<5)return t||new f(0);var i=!t||r,a=!r||r.i;r||(r={}),t||(t=new f(3*n));var o=function(e){var r=t.length;if(e>r){var n=new f(Math.max(2*r,e));n.set(t),t=n}},s=r.f||0,l=r.p||0,u=r.b||0,c=r.l,d=r.d,h=r.m,g=r.n,y=8*n;do{if(!c){r.f=s=F(e,l,1);var x=F(e,l+1,3);if(l+=3,x)if(1==x)c=D,d=C,h=9,g=5;else if(2==x){var b=F(e,l,31)+257,_=F(e,l+10,15)+4,M=b+F(e,l+5,31)+1;l+=14;for(var E=new f(M),T=new f(19),A=0;A<_;++A)T[m[A]]=F(e,l+3*A,7);l+=3*_;for(var z=R(T),I=(1<<z)-1,L=U(T,z,1),A=0;A<M;){var O=L[F(e,l,I)];l+=15&O;var k=O>>>4;if(k<16)E[A++]=k;else{var H=0,j=0;for(16==k?(j=3+F(e,l,3),l+=2,H=E[A-1]):17==k?(j=3+F(e,l,7),l+=3):18==k&&(j=11+F(e,l,127),l+=7);j--;)E[A++]=H}}var V=E.subarray(0,b),N=E.subarray(b);h=R(V),g=R(N),c=U(V,h,1),d=U(N,g,1)}else throw"invalid block type";else{var W,k=((W=l)/8|0)+(7&W&&1)+4,G=e[k-4]|e[k-3]<<8,q=k+G;if(q>n){if(a)throw"unexpected EOF";break}i&&o(u+G),t.set(e.subarray(k,q),u),r.b=u+=G,r.p=l=8*q;continue}if(l>y){if(a)throw"unexpected EOF";break}}i&&o(u+131072);for(var $=(1<<h)-1,X=(1<<g)-1,Y=l;;Y=l){var H=c[B(e,l)&$],Z=H>>>4;if((l+=15&H)>y){if(a)throw"unexpected EOF";break}if(!H)throw"invalid length/literal";if(Z<256)t[u++]=Z;else if(256==Z){Y=l,c=null;break}else{var Q=Z-254;if(Z>264){var A=Z-257,J=p[A];Q=F(e,l,(1<<J)-1)+w[A],l+=J}var K=d[B(e,l)&X],ee=K>>>4;if(!K)throw"invalid distance";l+=15&K;var N=S[ee];if(ee>3){var J=v[ee];N+=B(e,l)&(1<<J)-1,l+=J}if(l>y){if(a)throw"unexpected EOF";break}i&&o(u+131072);for(var et=u+Q;u<et;u+=4)t[u]=t[u-N],t[u+1]=t[u+1-N],t[u+2]=t[u+2-N],t[u+3]=t[u+3-N];u=et}}r.l=c,r.p=Y,r.b=u,c&&(s=1,r.m=h,r.d=d,r.n=g)}while(!s);return u==t.length?t:P(t,0,u)},I=new f(0),L=function(e){if((15&e[0])!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw"invalid zlib data";if(32&e[1])throw"invalid zlib data: preset dictionaries not supported"};function O(e,t){return z((L(e),e.subarray(2,-4)),t)}var k="undefined"!=typeof TextDecoder&&new TextDecoder;try{k.decode(I,{stream:!0})}catch(e){}let H=l.r>=152;class j extends s.DataTextureLoader{constructor(e){super(e),this.type=s.HalfFloatType}parse(e){let t={l:0,c:0,lc:0};function r(e,r,n,i,a){for(;n<e;)r=r<<8|U(i,a),n+=8;t.l=r>>(n-=e)&(1<<e)-1,t.c=r,t.lc=n}let n=Array(59),i={c:0,lc:0};function a(e,t,r,n){e=e<<8|U(r,n),t+=8,i.c=e,i.lc=t}let o={c:0,lc:0};function l(e,t,r,n,s,l,u,c,f,d){if(e==t){n<8&&(a(r,n,s,u),r=i.c,n=i.lc);var h=r>>(n-=8),h=new Uint8Array([h])[0];if(f.value+h>d)return!1;for(var p=c[f.value-1];h-- >0;)c[f.value++]=p}else{if(!(f.value<d))return!1;c[f.value++]=e}o.c=r,o.lc=n}function u(e){var t=65535&e;return t>32767?t-65536:t}let c={a:0,b:0};function f(e,t){var r=u(e),n=u(t),i=r+(1&n)+(n>>1),a=i-n;c.a=i,c.b=a}function d(e,t){var r=65535&t,n=(65535&e)-(r>>1)&65535;c.a=r+n-32768&65535,c.b=n}function h(e,s,u,c,f,d){var h=u.value,p=E(s,u),v=E(s,u);u.value+=4;var m=E(s,u);if(u.value+=4,p<0||p>=65537||v<0||v>=65537)throw"Something wrong with HUF_ENCSIZE";for(var g=Array(65537),y=Array(16384),w=0;w<16384;w++)y[w]={},y[w].len=0,y[w].lit=0,y[w].p=null;var x=c-(u.value-h);if(!function(e,i,a,o,s,l,u){for(var c=0,f=0;s<=l;s++){if(a.value-a.value>o)return!1;r(6,c,f,e,a);var d=t.l;if(c=t.c,f=t.lc,u[s]=d,63==d){if(a.value-a.value>o)throw"Something wrong with hufUnpackEncTable";r(8,c,f,e,a);var h=t.l+6;if(c=t.c,f=t.lc,s+h>l+1)throw"Something wrong with hufUnpackEncTable";for(;h--;)u[s++]=0;s--}else if(d>=59){var h=d-59+2;if(s+h>l+1)throw"Something wrong with hufUnpackEncTable";for(;h--;)u[s++]=0;s--}}!function(e){for(var t=0;t<=58;++t)n[t]=0;for(var t=0;t<65537;++t)n[e[t]]+=1;for(var r=0,t=58;t>0;--t){var i=r+n[t]>>1;n[t]=r,r=i}for(var t=0;t<65537;++t){var a=e[t];a>0&&(e[t]=a|n[a]++<<6)}}(u)}(e,0,u,x,p,v,g),m>8*(c-(u.value-h)))throw"Something wrong with hufUncompress";!function(e,t,r,n){for(;t<=r;t++){var i=e[t]>>6,a=63&e[t];if(i>>a)throw"Invalid table entry";if(a>14){var o=n[i>>a-14];if(o.len)throw"Invalid table entry";if(o.lit++,o.p){var s=o.p;o.p=Array(o.lit);for(var l=0;l<o.lit-1;++l)o.p[l]=s[l]}else o.p=[,];o.p[o.lit-1]=t}else if(a)for(var u=0,l=1<<14-a;l>0;l--){var o=n[(i<<14-a)+u];if(o.len||o.p)throw"Invalid table entry";o.len=a,o.lit=t,u++}}}(g,p,v,y),function(e,t,r,n,s,u,c,f,d,h){for(var p=0,v=0,m=Math.trunc(s.value+(u+7)/8);s.value<m;)for(a(p,v,r,s),p=i.c,v=i.lc;v>=14;){var g=t[p>>v-14&16383];if(g.len)v-=g.len,l(g.lit,c,p,v,r,n,s,d,h,f),p=o.c,v=o.lc;else{if(!g.p)throw"hufDecode issues";for(y=0;y<g.lit;y++){for(var y,w=63&e[g.p[y]];v<w&&s.value<m;)a(p,v,r,s),p=i.c,v=i.lc;if(v>=w&&e[g.p[y]]>>6==(p>>v-w&(1<<w)-1)){v-=w,l(g.p[y],c,p,v,r,n,s,d,h,f),p=o.c,v=o.lc;break}}if(y==g.lit)throw"hufDecode issues"}}var x=8-u&7;for(p>>=x,v-=x;v>0;){var g=t[p<<14-v&16383];if(g.len)v-=g.len,l(g.lit,c,p,v,r,n,s,d,h,f),p=o.c,v=o.lc;else throw"hufDecode issues"}}(g,y,e,s,u,m,v,d,f,{value:0})}function p(e){for(var t=1;t<e.length;t++){var r=e[t-1]+e[t]-128;e[t]=r}}function v(e,t){for(var r=0,n=Math.floor((e.length+1)/2),i=0,a=e.length-1;!(i>a)&&(t[i++]=e[r++],!(i>a));){;t[i++]=e[n++]}}function m(e){for(var t=e.byteLength,r=[],n=0,i=new DataView(e);t>0;){var a=i.getInt8(n++);if(a<0){var o=-a;t-=o+1;for(var s=0;s<o;s++)r.push(i.getUint8(n++))}else{var o=a;t-=2;for(var l=i.getUint8(n++),s=0;s<o+1;s++)r.push(l)}}return r}function g(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function y(e){var t=new Uint8Array(m(e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size))),r=new Uint8Array(t.length);return p(t),v(t,r),new DataView(r.buffer)}function w(e){var t=O(e.array.slice(e.offset.value,e.offset.value+e.size)),r=new Uint8Array(t.length);return p(t),v(t,r),new DataView(r.buffer)}function x(e){for(var t=e.viewer,r={value:e.offset.value},n=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),i=new Uint8Array(8192),a=0,o=Array(e.channels),s=0;s<e.channels;s++)o[s]={},o[s].start=a,o[s].end=o[s].start,o[s].nx=e.width,o[s].ny=e.lines,o[s].size=e.type,a+=o[s].nx*o[s].ny*o[s].size;var l=F(t,r),u=F(t,r);if(u>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(l<=u)for(var s=0;s<u-l+1;s++)i[s+l]=T(t,r);var p=new Uint16Array(65536),v=function(e,t){for(var r=0,n=0;n<65536;++n)(0==n||e[n>>3]&1<<(7&n))&&(t[r++]=n);for(var i=r-1;r<65536;)t[r++]=0;return i}(i,p),m=E(t,r);h(e.array,t,r,m,n,a);for(var s=0;s<e.channels;++s)for(var g=o[s],y=0;y<o[s].size;++y)!function(e,t,r,n,i,a,o){for(var s=o<16384,l=r>i?i:r,u=1;u<=l;)u<<=1;for(u>>=1,h=u,u>>=1;u>=1;){for(var h,p,v,m,g,y=0,w=0+a*(i-h),x=a*u,b=a*h,S=n*u,_=n*h;y<=w;y+=b){for(var M=y,E=y+n*(r-h);M<=E;M+=_){var U=M+S,T=M+x,A=T+S;s?(f(e[M+t],e[T+t]),p=c.a,m=c.b,f(e[U+t],e[A+t]),v=c.a,g=c.b,f(p,v),e[M+t]=c.a,e[U+t]=c.b,f(m,g)):(d(e[M+t],e[T+t]),p=c.a,m=c.b,d(e[U+t],e[A+t]),v=c.a,g=c.b,d(p,v),e[M+t]=c.a,e[U+t]=c.b,d(m,g)),e[T+t]=c.a,e[A+t]=c.b}if(r&u){var T=M+x;s?f(e[M+t],e[T+t]):d(e[M+t],e[T+t]),p=c.a,e[T+t]=c.b,e[M+t]=p}}if(i&u)for(var M=y,E=y+n*(r-h);M<=E;M+=_){var U=M+S;s?f(e[M+t],e[U+t]):d(e[M+t],e[U+t]),p=c.a,e[U+t]=c.b,e[M+t]=p}h=u,u>>=1}}(n,g.start+y,g.nx,g.size,g.ny,g.nx*g.size,v);for(var w=a,x=0;x<w;++x)n[x]=p[n[x]];for(var b=0,S=new Uint8Array(n.buffer.byteLength),_=0;_<e.lines;_++)for(var M=0;M<e.channels;M++){var g=o[M],U=g.nx*g.size,A=new Uint8Array(n.buffer,2*g.end,2*U);S.set(A,b),b+=2*U,g.end+=U}return new DataView(S.buffer)}function b(e){var t=O(e.array.slice(e.offset.value,e.offset.value+e.size));let r=e.lines*e.channels*e.width,n=1==e.type?new Uint16Array(r):new Uint32Array(r),i=0,a=0,o=[,,,,];for(let r=0;r<e.lines;r++)for(let r=0;r<e.channels;r++){let r=0;switch(e.type){case 1:o[0]=i,o[1]=o[0]+e.width,i=o[1]+e.width;for(let i=0;i<e.width;++i)r+=t[o[0]++]<<8|t[o[1]++],n[a]=r,a++;break;case 2:o[0]=i,o[1]=o[0]+e.width,o[2]=o[1]+e.width,i=o[2]+e.width;for(let i=0;i<e.width;++i)r+=t[o[0]++]<<24|t[o[1]++]<<16|t[o[2]++]<<8,n[a]=r,a++}}return new DataView(n.buffer)}function S(e){var t=e.viewer,r={value:e.offset.value},n=new Uint8Array(e.width*e.lines*(e.channels*e.type*2)),i={version:A(t,r),unknownUncompressedSize:A(t,r),unknownCompressedSize:A(t,r),acCompressedSize:A(t,r),dcCompressedSize:A(t,r),rleCompressedSize:A(t,r),rleUncompressedSize:A(t,r),rleRawSize:A(t,r),totalAcUncompressedCount:A(t,r),totalDcUncompressedCount:A(t,r),acCompression:A(t,r)};if(i.version<2)throw"EXRLoader.parse: "+L.compression+" version "+i.version+" is unsupported";for(var a=[],o=F(t,r)-2;o>0;){var l=_(t.buffer,r),u=T(t,r),c=u>>2&3,f=new Int8Array([(u>>4)-1])[0],d=T(t,r);a.push({name:l,index:f,type:d,compression:c}),o-=l.length+3}for(var p=L.channels,v=Array(e.channels),g=0;g<e.channels;++g){var y=v[g]={},x=p[g];y.name=x.name,y.compression=0,y.decoded=!1,y.type=x.pixelType,y.pLinear=x.pLinear,y.width=e.width,y.height=e.lines}for(var b={idx:[,,,]},S=0;S<e.channels;++S)for(var y=v[S],g=0;g<a.length;++g){var M=a[g];y.name==M.name&&(y.compression=M.compression,M.index>=0&&(b.idx[M.index]=S),y.offset=S)}if(i.acCompressedSize>0)switch(i.acCompression){case 0:var E=new Uint16Array(i.totalAcUncompressedCount);h(e.array,t,r,i.acCompressedSize,E,i.totalAcUncompressedCount);break;case 1:var U=e.array.slice(r.value,r.value+i.totalAcUncompressedCount),D=O(U),E=new Uint16Array(D.buffer);r.value+=i.totalAcUncompressedCount}if(i.dcCompressedSize>0){var C=new Uint16Array(w({array:e.array,offset:r,size:i.dcCompressedSize}).buffer);r.value+=i.dcCompressedSize}if(i.rleRawSize>0){var U=e.array.slice(r.value,r.value+i.rleCompressedSize),D=O(U),B=m(D.buffer);r.value+=i.rleCompressedSize}for(var P=0,z=Array(v.length),g=0;g<z.length;++g)z[g]=[];for(var I=0;I<e.lines;++I)for(var k=0;k<v.length;++k)z[k].push(P),P+=v[k].width*e.type*2;!function(e,t,r,n,i,a){var o=new DataView(a.buffer),l=r[e.idx[0]].width,u=r[e.idx[0]].height,c=Math.floor(l/8),f=Math.ceil(l/8),d=Math.ceil(u/8),h=l-(f-1)*8,p=u-(d-1)*8,v={value:0},m=[,,,],g=[,,,],y=[,,,],w=[,,,],x=[,,,];for(let r=0;r<3;++r)x[r]=t[e.idx[r]],m[r]=r<1?0:m[r-1]+f*d,g[r]=new Float32Array(64),y[r]=new Uint16Array(64),w[r]=new Uint16Array(64*f);for(let t=0;t<d;++t){var b,S,_=8;t==d-1&&(_=p);var M=8;for(let e=0;e<f;++e){e==f-1&&(M=h);for(let e=0;e<3;++e){y[e].fill(0),y[e][0]=i[m[e]++],function(e,t,r){for(var n,i=1;i<64;)65280==(n=t[e.value])?i=64:n>>8==255?i+=255&n:(r[i]=n,i++),e.value++}(v,n,y[e]),b=y[e],(S=g[e])[0]=R(b[0]),S[1]=R(b[1]),S[2]=R(b[5]),S[3]=R(b[6]),S[4]=R(b[14]),S[5]=R(b[15]),S[6]=R(b[27]),S[7]=R(b[28]),S[8]=R(b[2]),S[9]=R(b[4]),S[10]=R(b[7]),S[11]=R(b[13]),S[12]=R(b[16]),S[13]=R(b[26]),S[14]=R(b[29]),S[15]=R(b[42]),S[16]=R(b[3]),S[17]=R(b[8]),S[18]=R(b[12]),S[19]=R(b[17]),S[20]=R(b[25]),S[21]=R(b[30]),S[22]=R(b[41]),S[23]=R(b[43]),S[24]=R(b[9]),S[25]=R(b[11]),S[26]=R(b[18]),S[27]=R(b[24]),S[28]=R(b[31]),S[29]=R(b[40]),S[30]=R(b[44]),S[31]=R(b[53]),S[32]=R(b[10]),S[33]=R(b[19]),S[34]=R(b[23]),S[35]=R(b[32]),S[36]=R(b[39]),S[37]=R(b[45]),S[38]=R(b[52]),S[39]=R(b[54]),S[40]=R(b[20]),S[41]=R(b[22]),S[42]=R(b[33]),S[43]=R(b[38]),S[44]=R(b[46]),S[45]=R(b[51]),S[46]=R(b[55]),S[47]=R(b[60]),S[48]=R(b[21]),S[49]=R(b[34]),S[50]=R(b[37]),S[51]=R(b[47]),S[52]=R(b[50]),S[53]=R(b[56]),S[54]=R(b[59]),S[55]=R(b[61]),S[56]=R(b[35]),S[57]=R(b[36]),S[58]=R(b[48]),S[59]=R(b[49]),S[60]=R(b[57]),S[61]=R(b[58]),S[62]=R(b[62]),S[63]=R(b[63]),function(e){let t=.5*Math.cos(3.14159/16),r=.5*Math.cos(3.14159/8),n=.5*Math.cos(3*3.14159/16),i=.5*Math.cos(3*3.14159/8);for(var a=[,,,,],o=[,,,,],s=[,,,,],l=[,,,,],u=0;u<8;++u){var c=8*u;a[0]=r*e[c+2],a[1]=i*e[c+2],a[2]=r*e[c+6],a[3]=i*e[c+6],o[0]=t*e[c+1]+n*e[c+3]+.2777854612564676*e[c+5]+.09754573032714427*e[c+7],o[1]=n*e[c+1]-.09754573032714427*e[c+3]-t*e[c+5]-.2777854612564676*e[c+7],o[2]=.2777854612564676*e[c+1]-t*e[c+3]+.09754573032714427*e[c+5]+n*e[c+7],o[3]=.09754573032714427*e[c+1]-.2777854612564676*e[c+3]+n*e[c+5]-t*e[c+7],s[0]=.35355362513961314*(e[c+0]+e[c+4]),s[3]=.35355362513961314*(e[c+0]-e[c+4]),s[1]=a[0]+a[3],s[2]=a[1]-a[2],l[0]=s[0]+s[1],l[1]=s[3]+s[2],l[2]=s[3]-s[2],l[3]=s[0]-s[1],e[c+0]=l[0]+o[0],e[c+1]=l[1]+o[1],e[c+2]=l[2]+o[2],e[c+3]=l[3]+o[3],e[c+4]=l[3]-o[3],e[c+5]=l[2]-o[2],e[c+6]=l[1]-o[1],e[c+7]=l[0]-o[0]}for(var f=0;f<8;++f)a[0]=r*e[16+f],a[1]=i*e[16+f],a[2]=r*e[48+f],a[3]=i*e[48+f],o[0]=t*e[8+f]+n*e[24+f]+.2777854612564676*e[40+f]+.09754573032714427*e[56+f],o[1]=n*e[8+f]-.09754573032714427*e[24+f]-t*e[40+f]-.2777854612564676*e[56+f],o[2]=.2777854612564676*e[8+f]-t*e[24+f]+.09754573032714427*e[40+f]+n*e[56+f],o[3]=.09754573032714427*e[8+f]-.2777854612564676*e[24+f]+n*e[40+f]-t*e[56+f],s[0]=.35355362513961314*(e[f]+e[32+f]),s[3]=.35355362513961314*(e[f]-e[32+f]),s[1]=a[0]+a[3],s[2]=a[1]-a[2],l[0]=s[0]+s[1],l[1]=s[3]+s[2],l[2]=s[3]-s[2],l[3]=s[0]-s[1],e[0+f]=l[0]+o[0],e[8+f]=l[1]+o[1],e[16+f]=l[2]+o[2],e[24+f]=l[3]+o[3],e[32+f]=l[3]-o[3],e[40+f]=l[2]-o[2],e[48+f]=l[1]-o[1],e[56+f]=l[0]-o[0]}(g[e])}for(var E=g,U=0;U<64;++U){var T=E[0][U],A=E[1][U],D=E[2][U];E[0][U]=T+1.5747*D,E[1][U]=T-.1873*A-.4682*D,E[2][U]=T+1.8556*A}for(let t=0;t<3;++t)!function(e,t,r){for(var n,i=0;i<64;++i){t[r+i]=s.DataUtils.toHalfFloat((n=e[i])<=1?Math.sign(n)*Math.pow(Math.abs(n),2.2):Math.sign(n)*Math.pow(9.025013291561939,Math.abs(n)-1))}}(g[t],w[t],64*e)}let a=0;for(let n=0;n<3;++n){let i=r[e.idx[n]].type;for(let e=8*t;e<8*t+_;++e){a=x[n][e];for(let t=0;t<c;++t){let r=64*t+(7&e)*8;o.setUint16(a+0*i,w[n][r+0],!0),o.setUint16(a+2*i,w[n][r+1],!0),o.setUint16(a+4*i,w[n][r+2],!0),o.setUint16(a+6*i,w[n][r+3],!0),o.setUint16(a+8*i,w[n][r+4],!0),o.setUint16(a+10*i,w[n][r+5],!0),o.setUint16(a+12*i,w[n][r+6],!0),o.setUint16(a+14*i,w[n][r+7],!0),a+=16*i}}if(c!=f)for(let e=8*t;e<8*t+_;++e){let t=x[n][e]+8*c*2*i,r=64*c+(7&e)*8;for(let e=0;e<M;++e)o.setUint16(t+2*e*i,w[n][r+e],!0)}}}for(var C=new Uint16Array(l),o=new DataView(a.buffer),F=0;F<3;++F){r[e.idx[F]].decoded=!0;var B=r[e.idx[F]].type;if(2==r[F].type)for(var P=0;P<u;++P){let e=x[F][P];for(var z=0;z<l;++z)C[z]=o.getUint16(e+2*z*B,!0);for(var z=0;z<l;++z)o.setFloat32(e+2*z*B,R(C[z]),!0)}}}(b,z,v,E,C,n);for(var g=0;g<v.length;++g){var y=v[g];if(!y.decoded)if(2===y.compression)for(var H=0,j=0,I=0;I<e.lines;++I){for(var V=z[g][H],N=0;N<y.width;++N){for(var W=0;W<2*y.type;++W)n[V++]=B[j+W*y.width*y.height];j++}H++}else throw"EXRLoader.parse: unsupported channel compression"}return new DataView(n.buffer)}function _(e,t){for(var r=new Uint8Array(e),n=0;0!=r[t.value+n];)n+=1;var i=new TextDecoder().decode(r.slice(t.value,t.value+n));return t.value=t.value+n+1,i}function M(e,t){var r=e.getInt32(t.value,!0);return t.value=t.value+4,r}function E(e,t){var r=e.getUint32(t.value,!0);return t.value=t.value+4,r}function U(e,t){var r=e[t.value];return t.value=t.value+1,r}function T(e,t){var r=e.getUint8(t.value);return t.value=t.value+1,r}let A=function(e,t){let r;return r="getBigInt64"in DataView.prototype?Number(e.getBigInt64(t.value,!0)):e.getUint32(t.value+4,!0)+Number(e.getUint32(t.value,!0)<<32),t.value+=8,r};function D(e,t){var r=e.getFloat32(t.value,!0);return t.value+=4,r}function C(e,t){return s.DataUtils.toHalfFloat(D(e,t))}function R(e){var t=(31744&e)>>10,r=1023&e;return(e>>15?-1:1)*(t?31===t?r?NaN:1/0:Math.pow(2,t-15)*(1+r/1024):r/1024*6103515625e-14)}function F(e,t){var r=e.getUint16(t.value,!0);return t.value+=2,r}function B(e,t){return R(F(e,t))}let P=new DataView(e),z=new Uint8Array(e),I={value:0},L=function(e,t,r){let n={};if(0x1312f76!=e.getUint32(0,!0))throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";n.version=e.getUint8(4);let i=e.getUint8(5);n.spec={singleTile:!!(2&i),longName:!!(4&i),deepFormat:!!(8&i),multiPart:!!(16&i)},r.value=8;for(var a=!0;a;){var o=_(t,r);if(0==o)a=!1;else{var s=_(t,r),l=E(e,r),u=function(e,t,r,n,i){var a,o,s,l,u,c,f;if("string"===n||"stringvector"===n||"iccProfile"===n)return a=new TextDecoder().decode(new Uint8Array(t).slice(r.value,r.value+i)),r.value=r.value+i,a;if("chlist"===n)return function(e,t,r,n){for(var i=r.value,a=[];r.value<i+n-1;){var o=_(t,r),s=M(e,r),l=T(e,r);r.value+=3;var u=M(e,r),c=M(e,r);a.push({name:o,pixelType:s,pLinear:l,xSampling:u,ySampling:c})}return r.value+=1,a}(e,t,r,i);if("chromaticities"===n)return o=D(e,r),s=D(e,r),l=D(e,r),u=D(e,r),c=D(e,r),{redX:o,redY:s,greenX:l,greenY:u,blueX:c,blueY:D(e,r),whiteX:D(e,r),whiteY:D(e,r)};if("compression"===n)return["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"][T(e,r)];if("box2i"===n)return f=E(e,r),{xMin:f,yMin:E(e,r),xMax:E(e,r),yMax:E(e,r)};else if("lineOrder"===n)return["INCREASING_Y"][T(e,r)];else if("float"===n)return D(e,r);else if("v2f"===n)return[D(e,r),D(e,r)];else if("v3f"===n)return[D(e,r),D(e,r),D(e,r)];else if("int"===n)return M(e,r);else if("rational"===n)return[M(e,r),E(e,r)];else if("timecode"===n)return[E(e,r),E(e,r)];else return"preview"===n?(r.value+=i,"skipped"):(r.value+=i,void 0)}(e,t,r,s,l);void 0===u?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${s}'.`):n[o]=u}}if((-5&i)!=0)throw console.error("EXRHeader:",n),"THREE.EXRLoader: provided file is currently unsupported.";return n}(P,e,I),k=function(e,t,r,n,i){let a={size:0,viewer:t,array:r,offset:n,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,channels:e.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:e.channels[0].pixelType,uncompress:null,getter:null,format:null,[H?"colorSpace":"encoding"]:null};switch(e.compression){case"NO_COMPRESSION":a.lines=1,a.uncompress=g;break;case"RLE_COMPRESSION":a.lines=1,a.uncompress=y;break;case"ZIPS_COMPRESSION":a.lines=1,a.uncompress=w;break;case"ZIP_COMPRESSION":a.lines=16,a.uncompress=w;break;case"PIZ_COMPRESSION":a.lines=32,a.uncompress=x;break;case"PXR24_COMPRESSION":a.lines=16,a.uncompress=b;break;case"DWAA_COMPRESSION":a.lines=32,a.uncompress=S;break;case"DWAB_COMPRESSION":a.lines=256,a.uncompress=S;break;default:throw"EXRLoader.parse: "+e.compression+" is unsupported"}if(a.scanlineBlockSize=a.lines,1==a.type)switch(i){case s.FloatType:a.getter=B,a.inputSize=2;break;case s.HalfFloatType:a.getter=F,a.inputSize=2}else if(2==a.type)switch(i){case s.FloatType:a.getter=D,a.inputSize=4;break;case s.HalfFloatType:a.getter=C,a.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+a.type+" for "+e.compression+".";a.blockCount=(e.dataWindow.yMax+1)/a.scanlineBlockSize;for(var o=0;o<a.blockCount;o++)A(t,n);a.outputChannels=3==a.channels?4:a.channels;let l=a.width*a.height*a.outputChannels;switch(i){case s.FloatType:a.byteArray=new Float32Array(l),a.channels<a.outputChannels&&a.byteArray.fill(1,0,l);break;case s.HalfFloatType:a.byteArray=new Uint16Array(l),a.channels<a.outputChannels&&a.byteArray.fill(15360,0,l);break;default:console.error("THREE.EXRLoader: unsupported type: ",i)}return a.bytesPerLine=a.width*a.inputSize*a.channels,4==a.outputChannels?a.format=s.RGBAFormat:a.format=s.RedFormat,H?a.colorSpace="srgb-linear":a.encoding=3e3,a}(L,P,z,I,this.type),j={value:0},V={R:0,G:1,B:2,A:3,Y:0};for(let e=0;e<k.height/k.scanlineBlockSize;e++){let t=E(P,I);k.size=E(P,I),k.lines=t+k.scanlineBlockSize>k.height?k.height-t:k.scanlineBlockSize;let r=k.size<k.lines*k.bytesPerLine?k.uncompress(k):g(k);I.value+=k.size;for(let t=0;t<k.scanlineBlockSize;t++){let n=t+e*k.scanlineBlockSize;if(n>=k.height)break;for(let e=0;e<k.channels;e++){let i=V[L.channels[e].name];for(let a=0;a<k.width;a++){j.value=(t*(k.channels*k.width)+e*k.width+a)*k.inputSize;let o=(k.height-1-n)*(k.width*k.outputChannels)+a*k.outputChannels+i;k.byteArray[o]=k.getter(r,j)}}}}return{header:L,width:k.width,height:k.height,data:k.byteArray,format:k.format,[H?"colorSpace":"encoding"]:k[H?"colorSpace":"encoding"],type:this.type}}setDataType(e){return this.type=e,this}load(e,t,r,n){return super.load(e,function(e,r){H?e.colorSpace=r.colorSpace:e.encoding=r.encoding,e.minFilter=s.LinearFilter,e.magFilter=s.LinearFilter,e.generateMipmaps=!1,e.flipY=!1,t&&t(e,r)},r,n)}}let V=(e,t,r)=>{let n;switch(e){case s.UnsignedByteType:n=new Uint8ClampedArray(t*r*4);break;case s.HalfFloatType:n=new Uint16Array(t*r*4);break;case s.UnsignedIntType:n=new Uint32Array(t*r*4);break;case s.ByteType:n=new Int8Array(t*r*4);break;case s.ShortType:n=new Int16Array(t*r*4);break;case s.IntType:n=new Int32Array(t*r*4);break;case s.FloatType:n=new Float32Array(t*r*4);break;default:throw Error("Unsupported data type")}return n};class N{_renderer;_rendererIsDisposable=!1;_material;_scene;_camera;_quad;_renderTarget;_width;_height;_type;_colorSpace;_supportsReadPixels=!0;constructor(e){this._width=e.width,this._height=e.height,this._type=e.type,this._colorSpace=e.colorSpace;let t={format:s.RGBAFormat,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:e.renderTargetOptions?.anisotropy!==void 0?e.renderTargetOptions?.anisotropy:1,generateMipmaps:e.renderTargetOptions?.generateMipmaps!==void 0&&e.renderTargetOptions?.generateMipmaps,magFilter:e.renderTargetOptions?.magFilter!==void 0?e.renderTargetOptions?.magFilter:s.LinearFilter,minFilter:e.renderTargetOptions?.minFilter!==void 0?e.renderTargetOptions?.minFilter:s.LinearFilter,samples:e.renderTargetOptions?.samples!==void 0?e.renderTargetOptions?.samples:void 0,wrapS:e.renderTargetOptions?.wrapS!==void 0?e.renderTargetOptions?.wrapS:s.ClampToEdgeWrapping,wrapT:e.renderTargetOptions?.wrapT!==void 0?e.renderTargetOptions?.wrapT:s.ClampToEdgeWrapping};if(this._material=e.material,e.renderer?this._renderer=e.renderer:(this._renderer=N.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new s.Scene,this._camera=new s.OrthographicCamera,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!((e,t,r,i)=>{if(void 0!==n)return n;let a=new s.WebGLRenderTarget(1,1,i);t.setRenderTarget(a);let o=new s.Mesh(new s.PlaneGeometry,new s.MeshBasicMaterial({color:0xffffff}));t.render(o,r),t.setRenderTarget(null);let l=V(e,a.width,a.height);return t.readRenderTargetPixels(a,0,0,a.width,a.height,l),a.dispose(),o.geometry.dispose(),o.material.dispose(),n=0!==l[0]})(this._type,this._renderer,this._camera,t)){let e;this._type===s.HalfFloatType&&(e=this._renderer.extensions.has("EXT_color_buffer_float")?s.FloatType:void 0),void 0!==e?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${s.FloatType}`),this._type=e):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new s.Mesh(new s.PlaneGeometry,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new s.WebGLRenderTarget(this.width,this.height,t),this._renderTarget.texture.mapping=e.renderTargetOptions?.mapping!==void 0?e.renderTargetOptions?.mapping:s.UVMapping}static instantiateRenderer(){let e=new s.WebGLRenderer;return e.setSize(128,128),e}render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(e){throw this._renderer.setRenderTarget(null),e}this._renderer.setRenderTarget(null)};toArray(){if(!this._supportsReadPixels)throw Error("Can't read pixels in this browser");let e=V(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){let t=new s.DataTexture(this.toArray(),this.width,this.height,s.RGBAFormat,this._type,e?.mapping||s.UVMapping,e?.wrapS||s.ClampToEdgeWrapping,e?.wrapT||s.ClampToEdgeWrapping,e?.magFilter||s.LinearFilter,e?.minFilter||s.LinearFilter,e?.anisotropy||1,s.LinearSRGBColorSpace);return t.generateMipmaps=e?.generateMipmaps!==void 0&&e?.generateMipmaps,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof s.ShaderMaterial&&Object.values(this.material.uniforms).forEach(e=>{e.value instanceof s.Texture&&e.value.dispose()}),Object.values(this.material).forEach(e=>{e instanceof s.Texture&&e.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}new Uint8Array(4);let W=e=>{let t=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,n=()=>{let e=t.getUint16(r);return r+=2,e},i=()=>{let e=t.getUint32(r);return r+=4,e},a=n();if(0!==a)throw Error(`Unsupported ISO 21496-1 minimum_version ${a}`);n();let o=t.getUint8(r++);if(4&o)throw Error("ISO 21496-1 metadata with HDR base image is not supported");let s=128&o?3:1,l=8&o?i():void 0,u=e=>{let n=e?(()=>{let e=t.getInt32(r);return r+=4,e})():i(),a=l??i();if(0===a)throw Error("Invalid ISO 21496-1 fraction with zero denominator");return n/a},c=u(!1),f=u(!1);if(c>f)throw Error("ISO 21496-1 metadata with HDR base image is not supported");let d=[],h=[],p=[],v=[],m=[];for(let e=0;e<s;e++)d.push(u(!0)),h.push(u(!0)),p.push(u(!1)),v.push(u(!0)),m.push(u(!0));let g=e=>3===s?e:[e[0],e[0],e[0]];return{gainMapMin:g(d),gainMapMax:g(h),gamma:g(p),offsetSdr:g(v),offsetHdr:g(m),hdrCapacityMin:c,hdrCapacityMax:f}};class G extends Error{}class q extends Error{}let $=Array.from("urn:iso:std:iso:ts:21496:-1\0",e=>e.charCodeAt(0)),X=(e,t,r)=>{let n=RegExp(`${t}="([^"]*)"`,"i").exec(e);if(n)return n[1];let i=RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`,"i").exec(e);if(i){let e=i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return e&&3===e.length?e.map(e=>e.replace(/<\/?rdf:li>/g,"")):i[1].trim()}if(void 0!==r)return r;throw Error(`Can't find ${t} in gainmap metadata`)};class Y{options;constructor(e){this.options={debug:!!e&&void 0!==e.debug&&e.debug,extractFII:!e||void 0===e.extractFII||e.extractFII,extractNonFII:!e||void 0===e.extractNonFII||e.extractNonFII}}extract(e){return new Promise((t,r)=>{let n,i=this.options.debug,a=new DataView(e.buffer);if(65496!==a.getUint16(0))return void r(Error("Not a valid jpeg"));let o=a.byteLength,s=2,l=0;for(;s<o;){if(++l>250)return void r(Error(`Found no marker after ${l} loops 😵`));if(255!==a.getUint8(s))return void r(Error(`Not a valid marker at offset 0x${s.toString(16)}, found: 0x${a.getUint8(s).toString(16)}`));if(n=a.getUint8(s+1),i&&console.log(`Marker: ${n.toString(16)}`),226===n){i&&console.log("Found APP2 marker (0xffe2)");let e=s+4;if(0x4d504600===a.getUint32(e)){let n,i=e+4;if(18761===a.getUint16(i))n=!1;else{if(19789!==a.getUint16(i))return void r(Error("No valid endianness marker found in TIFF header"));n=!0}if(42!==a.getUint16(i+2,!n))return void r(Error("Not valid TIFF data! (no 0x002A marker)"));let o=a.getUint32(i+4,!n);if(o<8)return void r(Error("Not valid TIFF data! (First offset less than 8)"));let s=i+o,l=a.getUint16(s,!n),u=s+2,c=0;for(let e=u;e<u+12*l;e+=12)45057===a.getUint16(e,!n)&&(c=a.getUint32(e+8,!n));let f=s+2+12*l+4,d=[];for(let e=f;e<f+16*c;e+=16){let t={MPType:a.getUint32(e,!n),size:a.getUint32(e+4,!n),dataOffset:a.getUint32(e+8,!n),dependantImages:a.getUint32(e+12,!n),start:-1,end:-1,isFII:!1};t.dataOffset?(t.start=i+t.dataOffset,t.isFII=!1):(t.start=0,t.isFII=!0),t.end=t.start+t.size,d.push(t)}if(this.options.extractNonFII&&d.length){let e=new Blob([a]),r=[];for(let t of d){if(t.isFII&&!this.options.extractFII)continue;let n=e.slice(t.start,t.end+1,"image/jpeg");r.push(n)}t(r)}}}s+=2+a.getUint16(s+2)}})}}let Z=async e=>{let t=(e=>{let t=new DataView(e.buffer,e.byteOffset,e.byteLength),r=4+$.length;for(let n=0;n+r<e.length;n++){if(255!==e[n]||226!==e[n+1]||!$.every((t,r)=>e[n+4+r]===t))continue;let i=Math.min(e.length,n+2+t.getUint16(n+2));if(!(i-(n+r)<=4))try{return W(e.subarray(n+r,i))}catch(e){return}}})(e)??(e=>{let t,r=(t="undefined"!=typeof TextDecoder?new TextDecoder().decode(e):e.toString()).indexOf("<x:xmpmeta");for(;-1!==r;){let e=t.indexOf("x:xmpmeta>",r),n=t.slice(r,e+10);try{let e=X(n,"hdrgm:GainMapMin","0"),t=X(n,"hdrgm:GainMapMax"),r=X(n,"hdrgm:Gamma","1"),i=X(n,"hdrgm:OffsetSDR","0.015625"),a=X(n,"hdrgm:OffsetHDR","0.015625"),o=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(n),s=o?o[1]:"0",l=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(n);if(!l)throw Error("Incomplete gainmap metadata");let u=l[1];return{gainMapMin:Array.isArray(e)?e.map(e=>parseFloat(e)):[parseFloat(e),parseFloat(e),parseFloat(e)],gainMapMax:Array.isArray(t)?t.map(e=>parseFloat(e)):[parseFloat(t),parseFloat(t),parseFloat(t)],gamma:Array.isArray(r)?r.map(e=>parseFloat(e)):[parseFloat(r),parseFloat(r),parseFloat(r)],offsetSdr:Array.isArray(i)?i.map(e=>parseFloat(e)):[parseFloat(i),parseFloat(i),parseFloat(i)],offsetHdr:Array.isArray(a)?a.map(e=>parseFloat(e)):[parseFloat(a),parseFloat(a),parseFloat(a)],hdrCapacityMin:parseFloat(s),hdrCapacityMax:parseFloat(u)}}catch(e){}r=t.indexOf("<x:xmpmeta",e)}})(e);if(!t)throw new q("Gain map XMP metadata not found");let r=new Y({extractFII:!0,extractNonFII:!0}),n=await r.extract(e);if(2!==n.length)throw new G("Gain map recovery image not found");return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:t}},Q=e=>new Promise((t,r)=>{let n=document.createElement("img");n.onload=()=>{t(n)},n.onerror=e=>{r(e)},n.src=URL.createObjectURL(e)}),J=async(e,t,r)=>{let n,i,a=t?new Blob([t],{type:"image/jpeg"}):void 0,o=new Blob([e],{type:"image/jpeg"}),s=!1;if("undefined"==typeof createImageBitmap){let e=await Promise.all([a?Q(a):Promise.resolve(void 0),Q(o)]);i=e[0],n=e[1],s="flipY"===r}else{let e=await Promise.all([a?createImageBitmap(a,{imageOrientation:r||"flipY"}):Promise.resolve(void 0),createImageBitmap(o,{imageOrientation:r||"flipY"})]);i=e[0],n=e[1]}return{sdrImage:n,gainMapImage:i,needsFlip:s}};class K extends s.Loader{_renderer;_renderTargetOptions;_internalLoadingManager;_config;constructor(e,t){super(t),this._config=e,e.renderer&&(this._renderer=e.renderer),this._internalLoadingManager=new s.LoadingManager}setRenderer(e){return this._renderer=e,this}setRenderTargetOptions(e){return this._renderTargetOptions=e,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");let e=this._config.createMaterial({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new s.Texture,sdr:new s.Texture});return this._config.createQuadRenderer({width:16,height:16,type:s.HalfFloatType,colorSpace:s.LinearSRGBColorSpace,material:e,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}processImages(e,t,r){return J(e,t,r)}createTextures(e,t,r){let n=new s.Texture(t||new ImageData(2,2),s.UVMapping,s.ClampToEdgeWrapping,s.ClampToEdgeWrapping,s.LinearFilter,s.LinearMipMapLinearFilter,s.RGBAFormat,s.UnsignedByteType,1,s.LinearSRGBColorSpace);n.flipY=r,n.needsUpdate=!0;let i=new s.Texture(e,s.UVMapping,s.ClampToEdgeWrapping,s.ClampToEdgeWrapping,s.LinearFilter,s.LinearMipMapLinearFilter,s.RGBAFormat,s.UnsignedByteType,1,s.SRGBColorSpace);return i.flipY=r,i.needsUpdate=!0,{gainMap:n,sdr:i}}updateQuadRenderer(e,t,r,n,i){e.width=t.width,e.height=t.height,e.material.gainMap=r,e.material.sdr=n,e.material.gainMapMin=i.gainMapMin,e.material.gainMapMax=i.gainMapMax,e.material.offsetHdr=i.offsetHdr,e.material.offsetSdr=i.offsetSdr,e.material.gamma=i.gamma,e.material.hdrCapacityMin=i.hdrCapacityMin,e.material.hdrCapacityMax=i.hdrCapacityMax,e.material.maxDisplayBoost=Math.pow(2,i.hdrCapacityMax),e.material.needsUpdate=!0}}let ee=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,et=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;class er extends s.ShaderMaterial{_maxDisplayBoost;_hdrCapacityMin;_hdrCapacityMax;constructor({gamma:e,offsetHdr:t,offsetSdr:r,gainMapMin:n,gainMapMax:i,maxDisplayBoost:a,hdrCapacityMin:o,hdrCapacityMax:l,sdr:u,gainMap:c}){super({name:"GainMapDecoderMaterial",vertexShader:ee,fragmentShader:et,uniforms:{sdr:{value:u},gainMap:{value:c},gamma:{value:new s.Vector3(1/e[0],1/e[1],1/e[2])},offsetHdr:{value:new s.Vector3().fromArray(t)},offsetSdr:{value:new s.Vector3().fromArray(r)},gainMapMin:{value:new s.Vector3().fromArray(n)},gainMapMax:{value:new s.Vector3().fromArray(i)},weightFactor:{value:(Math.log2(a)-o)/(l-o)}},blending:s.NoBlending,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=o,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(e){this.uniforms.sdr.value=e}get gainMap(){return this.uniforms.gainMap.value}set gainMap(e){this.uniforms.gainMap.value=e}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(e){this.uniforms.offsetHdr.value.fromArray(e)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(e){this.uniforms.offsetSdr.value.fromArray(e)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(e){this.uniforms.gainMapMin.value.fromArray(e)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(e){this.uniforms.gainMapMax.value.fromArray(e)}get gamma(){let e=this.uniforms.gamma.value;return[1/e.x,1/e.y,1/e.z]}set gamma(e){let t=this.uniforms.gamma.value;t.x=1/e[0],t.y=1/e[1],t.z=1/e[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(e){this._hdrCapacityMin=e,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(e){this._hdrCapacityMax=e,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(e){this._maxDisplayBoost=Math.max(1,Math.min(65504,e)),this.calculateWeight()}calculateWeight(){let e=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,e))}}!s.WebGLRenderer;class en extends K{constructor(e,t){super({renderer:e,createMaterial:e=>new er(e),createQuadRenderer:e=>new N(e)},t)}async render(e,t,r,n){let{sdrImage:i,gainMapImage:a,needsFlip:o}=await this.processImages(r,n,"flipY"),{gainMap:s,sdr:l}=this.createTextures(i,a,o);this.updateQuadRenderer(e,i,s,l,t),e.render()}}class ei extends en{load([e,t,r],n,i,a){let o,l,u,c=this.prepareQuadRenderer(),f=async()=>{if(o&&l&&u){try{await this.render(c,u,o,l)}catch(n){this.manager.itemError(e),this.manager.itemError(t),this.manager.itemError(r),"function"==typeof a&&a(n),c.disposeOnDemandRenderer();return}"function"==typeof n&&n(c),this.manager.itemEnd(e),this.manager.itemEnd(t),this.manager.itemEnd(r),c.disposeOnDemandRenderer()}},d=!0,h=0,p=0,v=!0,m=0,g=0,y=!0,w=0,x=0,b=()=>{"function"==typeof i&&i(new ProgressEvent("progress",{lengthComputable:d&&v&&y,loaded:p+g+x,total:h+m+w}))};this.manager.itemStart(e),this.manager.itemStart(t),this.manager.itemStart(r);let S=new s.FileLoader(this._internalLoadingManager);S.setResponseType("arraybuffer"),S.setRequestHeader(this.requestHeader),S.setPath(this.path),S.setWithCredentials(this.withCredentials),S.load(e,async e=>{if("string"==typeof e)throw Error("Invalid sdr buffer");o=e,await f()},e=>{d=e.lengthComputable,p=e.loaded,h=e.total,b()},t=>{this.manager.itemError(e),"function"==typeof a&&a(t)});let _=new s.FileLoader(this._internalLoadingManager);_.setResponseType("arraybuffer"),_.setRequestHeader(this.requestHeader),_.setPath(this.path),_.setWithCredentials(this.withCredentials),_.load(t,async e=>{if("string"==typeof e)throw Error("Invalid gainmap buffer");l=e,await f()},e=>{v=e.lengthComputable,g=e.loaded,m=e.total,b()},e=>{this.manager.itemError(t),"function"==typeof a&&a(e)});let M=new s.FileLoader(this._internalLoadingManager);return M.setRequestHeader(this.requestHeader),M.setPath(this.path),M.setWithCredentials(this.withCredentials),M.load(r,async e=>{if("string"!=typeof e)throw Error("Invalid metadata string");u=JSON.parse(e),await f()},e=>{y=e.lengthComputable,x=e.loaded,w=e.total,b()},e=>{this.manager.itemError(r),"function"==typeof a&&a(e)}),c}}class ea extends en{load(e,t,r,n){let i=this.prepareQuadRenderer(),a=new s.FileLoader(this._internalLoadingManager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(e),a.load(e,async r=>{let a,o,s;if("string"==typeof r)throw Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");let l=new Uint8Array(r);try{let e=await Z(l);a=e.sdr,o=e.gainMap,s=e.metadata}catch(t){if(t instanceof q||t instanceof G)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),s={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},a=l;else throw t}try{await this.render(i,s,a.buffer,o?.buffer)}catch(t){this.manager.itemError(e),"function"==typeof n&&n(t),i.disposeOnDemandRenderer();return}"function"==typeof t&&t(i),this.manager.itemEnd(e),i.disposeOnDemandRenderer()},r,t=>{this.manager.itemError(e),"function"==typeof n&&n(t)}),i}}let eo={apartment:"lebombo_1k.hdr",city:"potsdamer_platz_1k.hdr",dawn:"kiara_1_dawn_1k.hdr",forest:"forest_slope_1k.hdr",lobby:"st_fagans_interior_1k.hdr",night:"dikhololo_night_1k.hdr",park:"rooitou_park_1k.hdr",studio:"studio_small_03_1k.hdr",sunset:"venice_sunset_1k.hdr",warehouse:"empty_warehouse_01_1k.hdr"},es="https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/",el=e=>Array.isArray(e),eu=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"];function ec({files:e=eu,path:t="",preset:r,colorSpace:n,extensions:i}={}){r&&(eh(r),e=eo[r],t=es);let l=el(e),{extension:u,isCubemap:c}=ep(e),f=ev(u);if(!f)throw Error("useEnvironment: Unrecognized file extension: "+e);let d=(0,o.D)(e=>e.gl);(0,a.useLayoutEffect)(()=>{("webp"===u||"jpg"===u||"jpeg"===u)&&d.domElement.addEventListener("webglcontextlost",function(){o.H.clear(f,l?[e]:e)},{once:!0})},[e,d.domElement]);let h=(0,o.H)(f,l?[e]:e,e=>{("webp"===u||"jpg"===u||"jpeg"===u)&&e.setRenderer(d),null==e.setPath||e.setPath(t),i&&i(e)}),p=l?h[0]:h;if("jpg"===u||"jpeg"===u||"webp"===u){var v;p=null==(v=p.renderTarget)?void 0:v.texture}return p.mapping=c?s.CubeReflectionMapping:s.EquirectangularReflectionMapping,p.colorSpace=null!=n?n:c?"srgb":"srgb-linear",p}let ef={files:eu,path:"",preset:void 0,extensions:void 0};ec.preload=e=>{let t={...ef,...e},{files:r,path:n=""}=t,{preset:i,extensions:a}=t;i&&(eh(i),r=eo[i],n=es);let{extension:s}=ep(r);if("webp"===s||"jpg"===s||"jpeg"===s)throw Error("useEnvironment: Preloading gainmaps is not supported");let l=ev(s);if(!l)throw Error("useEnvironment: Unrecognized file extension: "+r);o.H.preload(l,el(r)?[r]:r,e=>{null==e.setPath||e.setPath(n),a&&a(e)})};let ed={files:eu,preset:void 0};function eh(e){if(!(e in eo))throw Error("Preset must be one of: "+Object.keys(eo).join(", "))}function ep(e){var t;let r=el(e)&&6===e.length,n=el(e)&&3===e.length&&e.some(e=>e.endsWith("json")),i=el(e)?e[0]:e;return{extension:r?"cube":n?"webp":i.startsWith("data:application/exr")?"exr":i.startsWith("data:application/hdr")?"hdr":i.startsWith("data:image/jpeg")?"jpg":null==(t=i.split(".").pop())||null==(t=t.split("?"))||null==(t=t.shift())?void 0:t.toLowerCase(),isCubemap:r,isGainmap:n}}function ev(e){return"cube"===e?s.CubeTextureLoader:"hdr"===e?c:"exr"===e?j:"jpg"===e||"jpeg"===e?ea:"webp"===e?ei:null}function em(e,t,r,n,i={}){var a,s,l,u;let c,f;i={backgroundBlurriness:0,backgroundIntensity:1,backgroundRotation:[0,0,0],environmentIntensity:1,environmentRotation:[0,0,0],...i};let d=(f=c=t||r).current&&f.current.isScene?c.current:c,h=d.background,p=d.environment,v={backgroundBlurriness:d.backgroundBlurriness,backgroundIntensity:d.backgroundIntensity,backgroundRotation:null!=(a=null==(s=d.backgroundRotation)||null==s.clone?void 0:s.clone())?a:[0,0,0],environmentIntensity:d.environmentIntensity,environmentRotation:null!=(l=null==(u=d.environmentRotation)||null==u.clone?void 0:u.clone())?l:[0,0,0]};return"only"!==e&&(d.environment=n),e&&(d.background=n),(0,o.v)(d,i),()=>{"only"!==e&&(d.environment=p),e&&(d.background=h),(0,o.v)(d,v)}}function eg({scene:e,background:t=!1,map:r,...n}){let i=(0,o.D)(e=>e.scene);return a.useLayoutEffect(()=>{if(r)return em(t,e,i,r,n)}),null}function ey({background:e=!1,scene:t,blur:r,backgroundBlurriness:n,backgroundIntensity:i,backgroundRotation:s,environmentIntensity:l,environmentRotation:u,...c}){let f=ec(c),d=(0,o.D)(e=>e.scene);return a.useLayoutEffect(()=>em(e,t,d,f,{backgroundBlurriness:null!=r?r:n,backgroundIntensity:i,backgroundRotation:s,environmentIntensity:l,environmentRotation:u})),a.useEffect(()=>()=>{f.dispose()},[f]),null}function ew({children:e,near:t=.1,far:r=1e3,resolution:n=256,frames:i=1,map:l,background:u=!1,blur:c,backgroundBlurriness:f,backgroundIntensity:d,backgroundRotation:h,environmentIntensity:p,environmentRotation:v,scene:m,files:g,path:y,preset:w,extensions:x}){let b=(0,o.D)(e=>e.gl),S=(0,o.D)(e=>e.scene),_=a.useRef(null),[M]=a.useState(()=>new s.Scene),E=a.useMemo(()=>{let e=new s.WebGLCubeRenderTarget(n);return e.texture.type=s.HalfFloatType,e},[n]);a.useEffect(()=>()=>{E.dispose()},[E]),a.useLayoutEffect(()=>{if(1===i){let e=b.autoClear;b.autoClear=!0,_.current.update(b,M),b.autoClear=e}return em(u,m,S,E.texture,{backgroundBlurriness:null!=c?c:f,backgroundIntensity:d,backgroundRotation:h,environmentIntensity:p,environmentRotation:v})},[e,M,E.texture,m,S,u,i,b]);let U=1;return(0,o.F)(()=>{if(i===1/0||U<i){let e=b.autoClear;b.autoClear=!0,_.current.update(b,M),b.autoClear=e,U++}}),a.createElement(a.Fragment,null,(0,o.q)(a.createElement(a.Fragment,null,e,a.createElement("cubeCamera",{ref:_,args:[t,r,E]}),g||w?a.createElement(ey,{background:!0,files:g,preset:w,path:y,extensions:x}):l?a.createElement(eg,{background:!0,map:l,extensions:x}):null),M))}function ex(e){var t,r,n,s;let l=ec(e),c=e.map||l;a.useMemo(()=>(0,o.e)({GroundProjectedEnvImpl:u}),[]),a.useEffect(()=>()=>{l.dispose()},[l]);let f=a.useMemo(()=>[c],[c]),d=null==(t=e.ground)?void 0:t.height,h=null==(r=e.ground)?void 0:r.radius,p=null!=(n=null==(s=e.ground)?void 0:s.scale)?n:1e3;return a.createElement(a.Fragment,null,a.createElement(eg,(0,i.A)({},e,{map:c})),a.createElement("groundProjectedEnvImpl",{args:f,scale:p,height:d,radius:h}))}function eb(e){return e.ground?a.createElement(ex,e):e.map?a.createElement(eg,e):e.children?a.createElement(ew,e):a.createElement(ey,e)}ec.clear=e=>{let t={...ed,...e},{files:r}=t,{preset:n}=t;n&&(eh(n),r=eo[n]);let{extension:i}=ep(r),a=ev(i);if(!a)throw Error("useEnvironment: Unrecognized file extension: "+r);o.H.clear(a,el(r)?[r]:r)}},1841:(e,t,r)=>{r.d(t,{J:()=>i});var n=r(7548);class i extends n.Loader{load(e,t,r,i){let a=this,o=new n.FileLoader(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(e){let r=a.parse(JSON.parse(e));t&&t(r)},r,i)}parse(e){return new a(e)}constructor(e){super(e)}}class a{generateShapes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=[],i=function(e,t,r){let i=Array.from(e),a=t/r.resolution,o=(r.boundingBox.yMax-r.boundingBox.yMin+r.underlineThickness)*a,s=[],l=0,u=0;for(let e=0;e<i.length;e++){let t=i[e];if("\n"===t)l=0,u-=o;else{let e=function(e,t,r,i,a){let o,s,l,u,c,f,d,h,p=a.glyphs[e]||a.glyphs["?"];if(!p)return void console.error('THREE.Font: character "'+e+'" does not exists in font family '+a.familyName+".");let v=new n.ShapePath;if(p.o){let e=p._cachedOutline||(p._cachedOutline=p.o.split(" "));for(let n=0,a=e.length;n<a;)switch(e[n++]){case"m":o=e[n++]*t+r,s=e[n++]*t+i,v.moveTo(o,s);break;case"l":o=e[n++]*t+r,s=e[n++]*t+i,v.lineTo(o,s);break;case"q":l=e[n++]*t+r,u=e[n++]*t+i,c=e[n++]*t+r,f=e[n++]*t+i,v.quadraticCurveTo(c,f,l,u);break;case"b":l=e[n++]*t+r,u=e[n++]*t+i,c=e[n++]*t+r,f=e[n++]*t+i,d=e[n++]*t+r,h=e[n++]*t+i,v.bezierCurveTo(c,f,d,h,l,u)}}return{offsetX:p.ha*t,path:v}}(t,a,l,u,r);l+=e.offsetX,s.push(e.path)}}return s}(e,t,this.data);for(let e=0,t=i.length;e<t;e++)r.push(...i[e].toShapes());return r}constructor(e){this.isFont=!0,this.type="Font",this.data=e}}},2034:(e,t,r)=>{r.d(t,{_:()=>u});var n=r(8945),i=r(2115),a=r(7548),o=r(6595);let s={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},l={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},u=i.forwardRef(({scale:e=10,frames:t=1/0,opacity:r=1,width:u=1,height:c=1,blur:f=1,near:d=0,far:h=10,resolution:p=512,smooth:v=!0,color:m="#000000",depthWrite:g=!1,renderOrder:y,...w},x)=>{let b,S,_=i.useRef(null),M=(0,o.D)(e=>e.scene),E=(0,o.D)(e=>e.gl),U=i.useRef(null);u*=Array.isArray(e)?e[0]:e||1,c*=Array.isArray(e)?e[1]:e||1;let[T,A,D,C,R,F,B]=i.useMemo(()=>{let e=new a.WebGLRenderTarget(p,p),t=new a.WebGLRenderTarget(p,p);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let r=new a.PlaneGeometry(u,c).rotateX(Math.PI/2),n=new a.Mesh(r),i=new a.MeshDepthMaterial;i.depthTest=i.depthWrite=!1,i.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new a.Color(m)}},e.fragmentShader=e.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};let o=new a.ShaderMaterial(s),f=new a.ShaderMaterial(l);return f.depthTest=o.depthTest=!1,[e,r,i,n,o,f,t]},[p,u,c,e,m]),P=e=>{C.visible=!0,C.material=R,R.uniforms.tDiffuse.value=T.texture,R.uniforms.h.value=e/256,E.setRenderTarget(B),E.render(C,U.current),C.material=F,F.uniforms.tDiffuse.value=B.texture,F.uniforms.v.value=e/256,E.setRenderTarget(T),E.render(C,U.current),C.visible=!1},z=0;return(0,o.F)(()=>{U.current&&(t===1/0||z<t)&&(z++,b=M.background,S=M.overrideMaterial,_.current.visible=!1,M.background=null,M.overrideMaterial=D,E.setRenderTarget(T),E.render(M,U.current),P(f),v&&P(.4*f),E.setRenderTarget(null),_.current.visible=!0,M.overrideMaterial=S,M.background=b)}),i.useImperativeHandle(x,()=>_.current,[]),i.createElement("group",(0,n.A)({"rotation-x":Math.PI/2},w,{ref:_}),i.createElement("mesh",{renderOrder:y,geometry:A,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},i.createElement("meshBasicMaterial",{transparent:!0,map:T.texture,opacity:r,depthWrite:g})),i.createElement("orthographicCamera",{ref:U,args:[-u/2,u/2,c/2,-c/2,d,h]}))})},2071:(e,t,r)=>{r.d(t,{n:()=>c});var n=r(8945),i=r(2115),a=r(7548),o=r(6595),s=r(8587);class l extends a.ShaderMaterial{constructor(){super({uniforms:{depth:{value:null},opacity:{value:1},attenuation:{value:2.5},anglePower:{value:12},spotPosition:{value:new a.Vector3(0,0,0)},lightColor:{value:new a.Color("white")},cameraNear:{value:0},cameraFar:{value:1},resolution:{value:new a.Vector2(0,0)}},transparent:!0,depthWrite:!1,vertexShader:`
        varying vec3 vNormal;
        varying float vViewZ;
        varying float vIntensity;
        uniform vec3 spotPosition;
        uniform float attenuation;

        #include <common>
        #include <logdepthbuf_pars_vertex>

        void main() {
          // compute intensity
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1);
          vec4 viewPosition = viewMatrix * worldPosition;
          vViewZ = viewPosition.z;

          vIntensity = 1.0 - saturate(distance(worldPosition.xyz, spotPosition) / attenuation);

          gl_Position = projectionMatrix * viewPosition;

          #include <logdepthbuf_vertex>
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        varying float vViewZ;
        varying float vIntensity;

        uniform vec3 lightColor;
        uniform float anglePower;
        uniform sampler2D depth;
        uniform vec2 resolution;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float opacity;

        #include <packing>
        #include <logdepthbuf_pars_fragment>

        float readDepth(sampler2D depthSampler, vec2 uv) {
          float fragCoordZ = texture(depthSampler, uv).r;

          // https://github.com/mrdoob/three.js/issues/23072
          #ifdef USE_LOGDEPTHBUF
            float viewZ = 1.0 - exp2(fragCoordZ * log(cameraFar + 1.0) / log(2.0));
          #else
            float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
          #endif

          return viewZ;
        }

        void main() {
          #include <logdepthbuf_fragment>

          vec3 normal = vec3(vNormal.x, vNormal.y, abs(vNormal.z));
          float angleIntensity = pow(dot(normal, vec3(0, 0, 1)), anglePower);
          float intensity = vIntensity * angleIntensity;

          // fades when z is close to sampled depth, meaning the cone is intersecting existing geometry
          bool isSoft = resolution[0] > 0.0 && resolution[1] > 0.0;
          if (isSoft) {
            vec2 uv = gl_FragCoord.xy / resolution;
            intensity *= smoothstep(0.0, 1.0, vViewZ - readDepth(depth, uv));
          }

          gl_FragColor = vec4(lightColor, intensity * opacity);

          #include <tonemapping_fragment>
          #include <${s.r>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}}function u({opacity:e=1,radiusTop:t,radiusBottom:r,depthBuffer:n,color:s="white",distance:u=5,angle:c=.15,attenuation:f=5,anglePower:d=5}){let h=i.useRef(null),p=(0,o.D)(e=>e.size),v=(0,o.D)(e=>e.camera),m=(0,o.D)(e=>e.viewport.dpr),[g]=i.useState(()=>new l),[y]=i.useState(()=>new a.Vector3);t=void 0===t?.1:t,r=void 0===r?7*c:r,(0,o.F)(()=>{g.uniforms.spotPosition.value.copy(h.current.getWorldPosition(y)),h.current.lookAt(h.current.parent.target.getWorldPosition(y))});let w=i.useMemo(()=>{let e=new a.CylinderGeometry(t,r,u,128,64,!0);return e.applyMatrix4(new a.Matrix4().makeTranslation(0,-u/2,0)),e.applyMatrix4(new a.Matrix4().makeRotationX(-Math.PI/2)),e},[u,t,r]);return i.createElement(i.Fragment,null,i.createElement("mesh",{ref:h,geometry:w,raycast:()=>null},i.createElement("primitive",{object:g,attach:"material","uniforms-opacity-value":e,"uniforms-lightColor-value":s,"uniforms-attenuation-value":f,"uniforms-anglePower-value":d,"uniforms-depth-value":n,"uniforms-cameraNear-value":v.near,"uniforms-cameraFar-value":v.far,"uniforms-resolution-value":n?[p.width*m,p.height*m]:[0,0]})))}let c=i.forwardRef(({opacity:e=1,radiusTop:t,radiusBottom:r,depthBuffer:a,color:o="white",distance:s=5,angle:l=.15,attenuation:c=5,anglePower:f=5,volumetric:d=!0,debug:h=!1,children:p,...v},m)=>{let g=i.useRef(null);return i.useImperativeHandle(m,()=>g.current,[]),i.createElement("group",null,h&&g.current&&i.createElement("spotLightHelper",{args:[g.current]}),i.createElement("spotLight",(0,n.A)({ref:g,angle:l,color:o,distance:s,castShadow:!0},v),d&&i.createElement(u,{debug:h,opacity:e,radiusTop:t,radiusBottom:r,depthBuffer:a,color:o,distance:s,angle:l,attenuation:c,anglePower:f})),p&&i.cloneElement(p,{spotlightRef:g,debug:h}))})},2697:(e,t,r)=>{r.d(t,{d:()=>f});var n=r(8945),i=r(2115),a=r(7548),o=r(6595),s=r(8587);class l extends a.ShaderMaterial{constructor(e=new a.Vector2){super({uniforms:{inputBuffer:new a.Uniform(null),depthBuffer:new a.Uniform(null),resolution:new a.Uniform(new a.Vector2),texelSize:new a.Uniform(new a.Vector2),halfTexelSize:new a.Uniform(new a.Vector2),kernel:new a.Uniform(0),scale:new a.Uniform(1),cameraNear:new a.Uniform(0),cameraFar:new a.Uniform(1),minDepthThreshold:new a.Uniform(0),maxDepthThreshold:new a.Uniform(1),depthScale:new a.Uniform(0),depthToBlurRatioBias:new a.Uniform(.25)},fragmentShader:`#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${s.r>=154?"colorspace_fragment":"encodings_fragment"}>
        }`,vertexShader:`uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,blending:a.NoBlending,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class u{constructor({gl:e,resolution:t,width:r=500,height:n=500,minDepthThreshold:i=0,maxDepthThreshold:o=1,depthScale:s=0,depthToBlurRatioBias:u=.25}){this.renderToScreen=!1,this.renderTargetA=new a.WebGLRenderTarget(t,t,{minFilter:a.LinearFilter,magFilter:a.LinearFilter,stencilBuffer:!1,depthBuffer:!1,type:a.HalfFloatType}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new l,this.convolutionMaterial.setTexelSize(1/r,1/n),this.convolutionMaterial.setResolution(new a.Vector2(r,n)),this.scene=new a.Scene,this.camera=new a.Camera,this.convolutionMaterial.uniforms.minDepthThreshold.value=i,this.convolutionMaterial.uniforms.maxDepthThreshold.value=o,this.convolutionMaterial.uniforms.depthScale.value=s,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=u,this.convolutionMaterial.defines.USE_DEPTH=s>0;let c=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),f=new Float32Array([0,0,2,0,0,2]),d=new a.BufferGeometry;d.setAttribute("position",new a.BufferAttribute(c,3)),d.setAttribute("uv",new a.BufferAttribute(f,2)),this.screen=new a.Mesh(d,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){let n,i,a,o=this.scene,s=this.camera,l=this.renderTargetA,u=this.renderTargetB,c=this.convolutionMaterial,f=c.uniforms;f.depthBuffer.value=t.depthTexture;let d=c.kernel,h=t;for(i=0,a=d.length-1;i<a;++i)n=(1&i)==0?l:u,f.kernel.value=d[i],f.inputBuffer.value=h.texture,e.setRenderTarget(n),e.render(o,s),h=n;f.kernel.value=d[i],f.inputBuffer.value=h.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(o,s)}}class c extends a.MeshStandardMaterial{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;null!=(t=e.defines)&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),e.fragmentShader=`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}let f=i.forwardRef(({mixBlur:e=0,mixStrength:t=1,resolution:r=256,blur:s=[0,0],minDepthThreshold:l=.9,maxDepthThreshold:f=1,depthScale:d=0,depthToBlurRatioBias:h=.25,mirror:p=0,distortion:v=1,mixContrast:m=1,distortionMap:g,reflectorOffset:y=0,...w},x)=>{(0,o.e)({MeshReflectorMaterialImpl:c});let b=(0,o.D)(({gl:e})=>e),S=(0,o.D)(({camera:e})=>e),_=(0,o.D)(({scene:e})=>e),M=(s=Array.isArray(s)?s:[s,s])[0]+s[1]>0,E=s[0],U=s[1],T=i.useRef(null);i.useImperativeHandle(x,()=>T.current,[]);let[A]=i.useState(()=>new a.Plane),[D]=i.useState(()=>new a.Vector3),[C]=i.useState(()=>new a.Vector3),[R]=i.useState(()=>new a.Vector3),[F]=i.useState(()=>new a.Matrix4),[B]=i.useState(()=>new a.Vector3(0,0,-1)),[P]=i.useState(()=>new a.Vector4),[z]=i.useState(()=>new a.Vector3),[I]=i.useState(()=>new a.Vector3),[L]=i.useState(()=>new a.Vector4),[O]=i.useState(()=>new a.Matrix4),[k]=i.useState(()=>new a.PerspectiveCamera),H=i.useCallback(()=>{var e;let t=T.current.parent||(null==(e=T.current)||null==(e=e.__r3f.parent)?void 0:e.object);if(!t||(C.setFromMatrixPosition(t.matrixWorld),R.setFromMatrixPosition(S.matrixWorld),F.extractRotation(t.matrixWorld),D.set(0,0,1),D.applyMatrix4(F),C.addScaledVector(D,y),z.subVectors(C,R),z.dot(D)>0))return;z.reflect(D).negate(),z.add(C),F.extractRotation(S.matrixWorld),B.set(0,0,-1),B.applyMatrix4(F),B.add(R),I.subVectors(C,B),I.reflect(D).negate(),I.add(C),k.position.copy(z),k.up.set(0,1,0),k.up.applyMatrix4(F),k.up.reflect(D),k.lookAt(I),k.far=S.far,k.updateMatrixWorld(),k.projectionMatrix.copy(S.projectionMatrix),O.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),O.multiply(k.projectionMatrix),O.multiply(k.matrixWorldInverse),O.multiply(t.matrixWorld),A.setFromNormalAndCoplanarPoint(D,C),A.applyMatrix4(k.matrixWorldInverse),P.set(A.normal.x,A.normal.y,A.normal.z,A.constant);let r=k.projectionMatrix;L.x=(Math.sign(P.x)+r.elements[8])/r.elements[0],L.y=(Math.sign(P.y)+r.elements[9])/r.elements[5],L.z=-1,L.w=(1+r.elements[10])/r.elements[14],P.multiplyScalar(2/P.dot(L)),r.elements[2]=P.x,r.elements[6]=P.y,r.elements[10]=P.z+1,r.elements[14]=P.w},[S,y]),[j,V,N,W]=i.useMemo(()=>{let n={minFilter:a.LinearFilter,magFilter:a.LinearFilter,type:a.HalfFloatType},i=new a.WebGLRenderTarget(r,r,n);i.depthBuffer=!0,i.depthTexture=new a.DepthTexture(r,r),i.depthTexture.format=a.DepthFormat,i.depthTexture.type=a.UnsignedShortType;let o=new a.WebGLRenderTarget(r,r,n),s=new u({gl:b,resolution:r,width:E,height:U,minDepthThreshold:l,maxDepthThreshold:f,depthScale:d,depthToBlurRatioBias:h}),c={mirror:p,textureMatrix:O,mixBlur:e,tDiffuse:i.texture,tDepth:i.depthTexture,tDiffuseBlur:o.texture,hasBlur:M,mixStrength:t,minDepthThreshold:l,maxDepthThreshold:f,depthScale:d,depthToBlurRatioBias:h,distortion:v,distortionMap:g,mixContrast:m,"defines-USE_BLUR":M?"":void 0,"defines-USE_DEPTH":d>0?"":void 0,"defines-USE_DISTORTION":g?"":void 0};return[i,o,s,c]},[b,E,U,O,r,p,M,e,t,l,f,d,h,v,g,m]);return(0,o.F)(()=>{var e;let t=T.current.parent||(null==(e=T.current)||null==(e=e.__r3f.parent)?void 0:e.object);if(!t)return;t.visible=!1;let r=b.xr.enabled,n=b.shadowMap.autoUpdate;H(),b.xr.enabled=!1,b.shadowMap.autoUpdate=!1,b.setRenderTarget(j),b.state.buffers.depth.setMask(!0),b.autoClear||b.clear(),b.render(_,k),M&&N.render(b,j,V),b.xr.enabled=r,b.shadowMap.autoUpdate=n,t.visible=!0,b.setRenderTarget(null)}),i.createElement("meshReflectorMaterialImpl",(0,n.A)({attach:"material",key:"key"+W["defines-USE_BLUR"]+W["defines-USE_DEPTH"]+W["defines-USE_DISTORTION"],ref:T},W,w))})},3474:(e,t,r)=>{r.d(t,{I:()=>l});var n=r(8945),i=r(2115),a=r(7548),o=r(6595);class s extends a.MeshPhysicalMaterial{constructor(e={}){super(e),this.setValues(e),this._time={value:0},this._distort={value:.4},this._radius={value:1}}onBeforeCompile(e){e.uniforms.time=this._time,e.uniforms.radius=this._radius,e.uniforms.distort=this._distort,e.vertexShader=`
      uniform float time;
      uniform float radius;
      uniform float distort;
      #define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
      ${e.vertexShader}
    `,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `)}get time(){return this._time.value}set time(e){this._time.value=e}get distort(){return this._distort.value}set distort(e){this._distort.value=e}get radius(){return this._radius.value}set radius(e){this._radius.value=e}}let l=i.forwardRef(({speed:e=1,...t},r)=>{let[a]=i.useState(()=>new s);return(0,o.F)(t=>a&&(a.time=t.clock.elapsedTime*e)),i.createElement("primitive",(0,n.A)({object:a,ref:r,attach:"material"},t))})},3617:(e,t,r)=>{r.d(t,{o:()=>i});var n=r(7548);class i{setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}}new n.OrthographicCamera(-1,1,1,-1,0,1);class a extends n.BufferGeometry{constructor(){super(),this.setAttribute("position",new n.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new n.Float32BufferAttribute([0,2,0,0,2,0],2))}}new a},3654:(e,t,r)=>{var n=r(2115),i=r(4806),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,s=n.useRef,l=n.useEffect,u=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var f=s(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var h=o(e,(f=u(function(){function e(e){if(!l){if(l=!0,o=e,e=n(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return s=t}return s=e}if(t=s,a(o,e))return t;var r=n(e);return void 0!==i&&i(t,r)?(o=e,t):(o=e,s=r)}var o,s,l=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,i]))[0],f[1]);return l(function(){d.hasValue=!0,d.value=h},[h]),c(h),h}},3689:(e,t,r)=>{r.d(t,{DY:()=>o,IU:()=>l,uv:()=>s});let n=[];function i(e,t,r=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let n=e.length;if(t.length!==n)return!1;for(let i=0;i<n;i++)if(!r(e[i],t[i]))return!1;return!0}function a(e,t=null,r=!1,o={}){for(let a of(null===t&&(t=[e]),n))if(i(t,a.keys,a.equal)){if(r)return;if(Object.prototype.hasOwnProperty.call(a,"error"))throw a.error;if(Object.prototype.hasOwnProperty.call(a,"response"))return o.lifespan&&o.lifespan>0&&(a.timeout&&clearTimeout(a.timeout),a.timeout=setTimeout(a.remove,o.lifespan)),a.response;if(!r)throw a.promise}let s={keys:t,equal:o.equal,remove:()=>{let e=n.indexOf(s);-1!==e&&n.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{s.response=e,o.lifespan&&o.lifespan>0&&(s.timeout=setTimeout(s.remove,o.lifespan))}).catch(e=>s.error=e)};if(n.push(s),!r)throw s.promise}let o=(e,t,r)=>a(e,t,!1,r),s=(e,t,r)=>void a(e,t,!0,r),l=e=>{if(void 0===e||0===e.length)n.splice(0,n.length);else{let t=n.find(t=>i(e,t.keys,t.equal));t&&t.remove()}}},3718:(e,t,r)=>{r.d(t,{h:()=>l});var n=r(2115),i=r(8828);let a=e=>{let t,r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,a={setState:n,getState:i,getInitialState:()=>o,subscribe:e=>(r.add(e),()=>r.delete(e))},o=t=e(n,i,a);return a},{useSyncExternalStoreWithSelector:o}=i,s=(e,t)=>{let r=(e=>e?a(e):a)(e),i=(e,i=t)=>(function(e,t=e=>e,r){let i=o(e.subscribe,e.getState,e.getInitialState,t,r);return n.useDebugValue(i),i})(r,e,i);return Object.assign(i,r),i},l=(e,t)=>e?s(e,t):s},4735:(e,t,r)=>{r.d(t,{Af:()=>s,Go:()=>d,Nz:()=>i,u5:()=>l,y3:()=>f});var n=r(2115);function i(e,t,r){if(!e)return;if(!0===r(e))return e;let n=t?e.return:e.child;for(;n;){let e=i(n,t,r);if(e)return e;n=t?null:n.sibling}}function a(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}(()=>{var e,t;return"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative")})()?n.useLayoutEffect:n.useEffect;let o=a(n.createContext(null));class s extends n.Component{render(){return n.createElement(o.Provider,{value:this._reactInternals},this.props.children)}}function l(){let e=n.useContext(o);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=n.useId();return n.useMemo(()=>{for(let r of[e,null==e?void 0:e.alternate]){if(!r)continue;let e=i(r,!1,e=>{let r=e.memoizedState;for(;r;){if(r.memoizedState===t)return!0;r=r.next}});if(e)return e}},[e,t])}let u=Symbol.for("react.context"),c=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===u;function f(){let e=function(){let e=l(),[t]=n.useState(()=>new Map);t.clear();let r=e;for(;r;){let e=r.type;c(e)&&e!==o&&!t.has(e)&&t.set(e,n.use(a(e))),r=r.return}return t}();return n.useMemo(()=>Array.from(e.keys()).reduce((t,r)=>i=>n.createElement(t,null,n.createElement(r.Provider,{...i,value:e.get(r)})),e=>n.createElement(s,{...e})),[e])}function d(){if(!n.Activity)throw Error("its-fine: useActivityBridge requires React 19.2 or later!");let e=l(),[t]=n.useState(()=>{let t,r=[],a=!1;i(e,!0,e=>{var t,i;if(e.elementType===n.Activity){let n=(null==(t=e.child)?void 0:t.tag)===22?e.child.stateNode:null;if("number"!=typeof(null==n?void 0:n._visibility))throw Error("its-fine: unsupported React Activity internals!");r.push(n)}else 22===e.tag&&(null==(i=e.return)?void 0:i.elementType)!==n.Activity&&(a=!0)});let o="hidden",s=new Set,l={mounted:!1,connected:!1,subscribe:e=>(s.add(e),()=>{s.delete(e)}),sync(e){l.mounted&&!l.connected&&a&&r.length>0?t||(t=function(e){if("function"==typeof requestAnimationFrame){let t=requestAnimationFrame(e);return()=>cancelAnimationFrame(t)}let t=setTimeout(e,16);return()=>clearTimeout(t)}(()=>{t=void 0,l.sync(!0)})):(null==t||t(),t=void 0);let n=o;if(l.mounted?l.connected?n="visible":e&&(n=r.every(e=>(1&e._visibility)!=0)?"visible":"hidden"):n="hidden",o!==n)for(let e of(o=n,s))e()},Bridge:({children:e})=>n.createElement(n.Activity,{mode:n.useSyncExternalStore(l.subscribe,()=>o,()=>"hidden")},e)};return l});return n.useInsertionEffect(()=>(t.mounted=!0,queueMicrotask(()=>t.sync(!1)),()=>{t.mounted=!1,queueMicrotask(()=>t.sync(!1))}),[t]),n.useLayoutEffect(()=>(t.connected=!0,t.sync(!1),()=>{t.connected=!1,t.sync(!0)}),[t]),t.Bridge}},4806:(e,t,r)=>{e.exports=r(125)},4814:(e,t,r)=>{r.d(t,{r:()=>n});let n=parseInt(r(7548).REVISION.replace(/\D+/g,""))},5661:(e,t,r)=>{r.d(t,{O:()=>s});var n=r(8945),i=r(6595),a=r(2115),o=r(7548);let s=a.forwardRef(({light:e,args:t,map:r,toneMapped:s=!1,color:l="white",form:u="rect",intensity:c=1,scale:f=1,target:d=[0,0,0],children:h,...p},v)=>{let m=a.useRef(null);return a.useImperativeHandle(v,()=>m.current,[]),a.useLayoutEffect(()=>{h||p.material||((0,i.v)(m.current.material,{color:l}),m.current.material.color.multiplyScalar(c))},[l,c,h,p.material]),a.useLayoutEffect(()=>{p.rotation||m.current.quaternion.identity(),d&&!p.rotation&&("boolean"==typeof d?m.current.lookAt(0,0,0):m.current.lookAt(Array.isArray(d)?new o.Vector3(...d):d))},[d,p.rotation]),f=Array.isArray(f)&&2===f.length?[f[0],f[1],1]:f,a.createElement("mesh",(0,n.A)({ref:m,scale:f},p),"circle"===u?a.createElement("ringGeometry",{args:t||[0,.5,64]}):"ring"===u?a.createElement("ringGeometry",{args:t||[.25,.5,64]}):"rect"===u||"plane"===u?a.createElement("planeGeometry",{args:t||[1,1]}):"box"===u?a.createElement("boxGeometry",{args:t||[1,1,1]}):a.createElement(u,{args:t}),h||a.createElement("meshBasicMaterial",{toneMapped:s,map:r,side:o.DoubleSide}),e&&a.createElement("pointLight",(0,n.A)({castShadow:!0},e)))})},6451:(e,t)=>{function r(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,i=e[n];if(0<a(i,t))e[n]=t,e[r]=i,r=n;else break}}function n(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,i=e.length,o=i>>>1;n<o;){var s=2*(n+1)-1,l=e[s],u=s+1,c=e[u];if(0>a(l,r))u<i&&0>a(c,l)?(e[n]=c,e[u]=r,n=u):(e[n]=l,e[s]=r,n=s);else if(u<i&&0>a(c,r))e[n]=c,e[u]=r,n=u;else break}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var o,s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var c=[],f=[],d=1,h=null,p=3,v=!1,m=!1,g=!1,y=!1,w="function"==typeof setTimeout?setTimeout:null,x="function"==typeof clearTimeout?clearTimeout:null,b="undefined"!=typeof setImmediate?setImmediate:null;function S(e){for(var t=n(f);null!==t;){if(null===t.callback)i(f);else if(t.startTime<=e)i(f),t.sortIndex=t.expirationTime,r(c,t);else break;t=n(f)}}function _(e){if(g=!1,S(e),!m)if(null!==n(c))m=!0,M||(M=!0,o());else{var t=n(f);null!==t&&F(_,t.startTime-e)}}var M=!1,E=-1,U=5,T=-1;function A(){return!!y||!(t.unstable_now()-T<U)}function D(){if(y=!1,M){var e=t.unstable_now();T=e;var r=!0;try{e:{m=!1,g&&(g=!1,x(E),E=-1),v=!0;var a=p;try{t:{for(S(e),h=n(c);null!==h&&!(h.expirationTime>e&&A());){var s=h.callback;if("function"==typeof s){h.callback=null,p=h.priorityLevel;var l=s(h.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof l){h.callback=l,S(e),r=!0;break t}h===n(c)&&i(c),S(e)}else i(c);h=n(c)}if(null!==h)r=!0;else{var u=n(f);null!==u&&F(_,u.startTime-e),r=!1}}break e}finally{h=null,p=a,v=!1}}}finally{r?o():M=!1}}}if("function"==typeof b)o=function(){b(D)};else if("undefined"!=typeof MessageChannel){var C=new MessageChannel,R=C.port2;C.port1.onmessage=D,o=function(){R.postMessage(null)}}else o=function(){w(D,0)};function F(e,r){E=w(function(){e(t.unstable_now())},r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var r=p;p=t;try{return e()}finally{p=r}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=p;p=e;try{return t()}finally{p=r}},t.unstable_scheduleCallback=function(e,i,a){var s=t.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?s+a:s,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=a+l,e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:l,sortIndex:-1},a>s?(e.sortIndex=a,r(f,e),null===n(c)&&e===n(f)&&(g?(x(E),E=-1):g=!0,F(_,a-s))):(e.sortIndex=l,r(c,e),m||v||(m=!0,M||(M=!0,o()))),e},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(e){var t=p;return function(){var r=p;p=t;try{return e.apply(this,arguments)}finally{p=r}}}},6756:(e,t,r)=>{r.d(t,{r:()=>o});var n=r(2115),i=r(6595);let a=(0,n.createContext)(null);function o({iterations:e=10,ms:t=250,threshold:r=.75,step:o=.1,factor:s=.5,flipflops:l=1/0,bounds:u=e=>e>100?[60,100]:[40,60],onIncline:c,onDecline:f,onChange:d,onFallback:h,children:p}){let[v,m]=(0,n.useState)(()=>({fps:0,index:0,factor:s,flipped:0,refreshrate:0,fallback:!1,frames:[],averages:[],subscriptions:new Map,subscribe:e=>{let t=Symbol();return v.subscriptions.set(t,e.current),()=>void v.subscriptions.delete(t)}})),g=0;return(0,i.F)(()=>{let{frames:n,averages:i}=v;if(!v.fallback&&i.length<e){n.push(performance.now());let a=n[n.length-1]-n[0];if(a>=t){if(v.fps=Math.round(n.length/a*1e3)/1,v.refreshrate=Math.max(v.refreshrate,v.fps),i[v.index++%e]=v.fps,i.length===e){let[t,n]=u(v.refreshrate),a=i.filter(e=>e>=n),s=i.filter(e=>e<t);a.length>e*r&&(v.factor=Math.min(1,v.factor+o),v.flipped++,c&&c(v),v.subscriptions.forEach(e=>e.onIncline&&e.onIncline(v))),s.length>e*r&&(v.factor=Math.max(0,v.factor-o),v.flipped++,f&&f(v),v.subscriptions.forEach(e=>e.onDecline&&e.onDecline(v))),g!==v.factor&&(g=v.factor,d&&d(v),v.subscriptions.forEach(e=>e.onChange&&e.onChange(v))),v.flipped>l&&!v.fallback&&(v.fallback=!0,h&&h(v),v.subscriptions.forEach(e=>e.onFallback&&e.onFallback(v))),v.averages=[]}v.frames=[]}}}),n.createElement(a.Provider,{value:v},p)}},7696:(e,t,r)=>{r.d(t,{_:()=>i});var n=r(7548);class i extends n.ExtrudeGeometry{constructor(e,t={}){let r=t.font;if(void 0===r)super();else{let n=r.generateShapes(e,t.size);void 0===t.depth&&void 0!==t.height&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=void 0!==t.depth?t.depth:void 0!==t.height?t.height:50,void 0===t.bevelThickness&&(t.bevelThickness=10),void 0===t.bevelSize&&(t.bevelSize=8),void 0===t.bevelEnabled&&(t.bevelEnabled=!1),super(n,t)}this.type="TextGeometry"}}},8587:(e,t,r)=>{r.d(t,{r:()=>n});let n=parseInt(r(7548).REVISION.replace(/\D+/g,""))},8828:(e,t,r)=>{e.exports=r(3654)},8945:(e,t,r)=>{r.d(t,{A:()=>n});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}},8995:(e,t,r)=>{r.d(t,{mK:()=>H,E8:()=>j,b1:()=>O,s0:()=>P,fL:()=>N,fE:()=>W});var n=r(6595),i=r(2115),a=r(7548),o=r(5155),s=r(3303);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}new a.Vector2,new a.Vector2;function u(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}var c=function e(t,r,n){var i=this;u(this,e),l(this,"dot2",function(e,t){return i.x*e+i.y*t}),l(this,"dot3",function(e,t,r){return i.x*e+i.y*t+i.z*r}),this.x=t,this.y=r,this.z=n},f=[new c(1,1,0),new c(-1,1,0),new c(1,-1,0),new c(-1,-1,0),new c(1,0,1),new c(-1,0,1),new c(1,0,-1),new c(-1,0,-1),new c(0,1,1),new c(0,-1,1),new c(0,1,-1),new c(0,-1,-1)],d=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],h=Array(512),p=Array(512);!function(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(var t,r=0;r<256;r++)t=1&r?d[r]^255&e:d[r]^e>>8&255,h[r]=h[r+256]=t,p[r]=p[r+256]=f[t%12]}(0);function v(e){var t=function(e){if("number"==typeof e)e=Math.abs(e);else if("string"==typeof e){var t=e;e=0;for(var r=0;r<t.length;r++)e=(e+(r+1)*(t.charCodeAt(r)%96))%0x7fffffff}return 0===e&&(e=311),e}(e);return function(){var e=48271*t%0x7fffffff;return t=e,e/0x7fffffff}}new function e(t){var r=this;u(this,e),l(this,"seed",0),l(this,"init",function(e){r.seed=e,r.value=v(e)}),l(this,"value",v(this.seed)),this.init(t)}(Math.random());a.BufferGeometry;function m(e,t){let r=e;for(let e of t.split("-")){if(null==r)return;r=r[e]}return r}function g(e,t,r){let n=t.split("-"),i=e;for(let e=0;e<n.length-1;e++){if(null==i)return;i=i[n[e]]}null!=i&&(i[n[n.length-1]]=r)}function y(e,t,r,a=m,o=g){let s=(0,i.useRef)(null),l=(0,n.D)(e=>e.invalidate);(0,i.useLayoutEffect)(()=>{let n="object"==typeof e&&null!=e&&"current"in e?e.current:e;if(!n)return;s.current?.instance!==n&&(s.current={instance:n,defaults:new Map,applied:new Map});let{defaults:i,applied:u}=s.current,c=!1;for(let e of r){if(!i.has(e)){let t=a(n,e);i.set(e,t),u.set(e,t)}let r=void 0!==t[e]?t[e]:i.get(e);Object.is(u.get(e),r)||(o(n,e,r),u.set(e,r),c=!0)}c&&l()})}r(1948);var w=new WeakMap,x=0,b=["blendMode-blendFunction","blendMode-opacity-value"];function S(e){return function({blendFunction:t,opacity:r,ref:a,...s}){let l=w.get(e);if(!l){let t=`@react-three/postprocessing/${e.name}-${x++}`;(0,n.e)({[t]:e}),w.set(e,l=t)}let u=(0,n.D)(e=>e.camera),c=(0,i.useRef)(null),f=(0,i.useCallback)(e=>{if(c.current=e,"function"!=typeof a){a&&(a.current=e);return}let t=a(e);if("function"==typeof t)return()=>{c.current=null,t()}},[c,a]);return y(c,{"blendMode-blendFunction":t,"blendMode-opacity-value":r},b),(0,o.jsx)(l,{ref:f,camera:u,...s})}}var _=(0,i.createContext)(null),M=e=>(2&e.getAttributes())==2,E=e=>/mainUv/.test(e.getFragmentShader()??"");function U(e){let t=new WeakMap;return{acquire(r,n){let i=t.get(r);i?(i.count++,i.forcedValue=n):t.set(r,{count:1,original:r[e],forcedValue:n})},release(r){let n=t.get(r);n&&--n.count<=0&&(r[e]===n.forcedValue&&(r[e]=n.original),t.delete(r))}}}var T=U("autoClear"),A=U("toneMapping"),D=new a.Vector2,C=(e,t)=>new s.AH(e,t),R=new WeakSet,F=new WeakSet;function B(e){R.has(e)&&(e instanceof s.Vu&&e.setEffects([]),s.oF.prototype.dispose.call(e))}var P=(0,i.memo)(function({children:e,camera:t,scene:r,resolutionScale:l,enabled:u=!0,renderPriority:c=1,autoClear:f=!0,autoRenderToScreen:d=!0,depthBuffer:h,enableNormalPass:p,stencilBuffer:v,multisampling:m=4,frameBufferType:g=a.HalfFloatType,renderPass:y=C,mergeMode:w="auto",ref:x}){let{gl:b,scene:S,camera:U}=(0,n.D)(),P=r||S,z=t||U;b.getSize(D);let[I,L]=(0,i.useState)(null),[,O]=(0,i.useReducer)(e=>e+1,0);(0,i.useEffect)(()=>{T.acquire(b,!1);let e=new s.s0(b,{depthBuffer:h,stencilBuffer:v,multisampling:m,frameBufferType:g});e.autoRenderToScreen=d,e.addPass(y(P,z));let t=null,r=null;p&&((t=new s.Xe(P,z)).enabled=!1,e.addPass(t),void 0!==l&&((r=new s.SP({normalBuffer:t.texture,resolutionScale:l})).enabled=!1,e.addPass(r))),e.setSize(D.width,D.height);let n=new Set(e.passes);return L({composer:e,normalPass:t,downSamplingPass:r}),()=>{for(let t of[...e.passes])n.has(t)||(e.removePass(t),B(t));e.dispose(),T.release(b)}},[z,b,h,v,m,g,d,y,P,p,l]);let k=(0,i.useRef)({width:-1,height:-1,pixelRatio:-1});(0,n.F)((e,t)=>{if(!u||!I)return;let{composer:r}=I;b.getSize(D);let n=b.getPixelRatio(),i=k.current;(D.width!==i.width||D.height!==i.height||n!==i.pixelRatio)&&(r.setSize(D.width,D.height),i.width=D.width,i.height=D.height,i.pixelRatio=n);let a=b.autoClear;b.autoClear=f,v&&!f&&b.clearStencil(),r.render(t),b.autoClear=a},u?c:0);let H=(0,i.useRef)(null),j=(0,i.useRef)([]),[V,N]=(0,i.useState)(0);(0,i.useLayoutEffect)(()=>{I&&function(e,t){let r=e.current;return!(t.length===r.length&&t.every((e,t)=>e===r[t]))&&(e.current=t,!0)}(j,function(e,t){let r=e.__r3f;return r?r.children.map(e=>e.object).filter(t):[]}(H.current,e=>e instanceof s.Mj||e instanceof s.oF))&&N(e=>e+1)}),(0,i.useLayoutEffect)(()=>{if(!I)return;let{composer:e,normalPass:t,downSamplingPass:r}=I,n=function(e,t,r){let n=[];for(let i=0;i<e.length;i++){let a=e[i];if(a instanceof s.Mj){let o=[a],l=M(a),u=E(a);if("none"!==r){let t;for(;(t=e[i+1])instanceof s.Mj;){let e=M(t),n=E(t);if("auto"===r&&(l&&e||l&&n||u&&e))break;o.push(t),l||=e,u||=n,i++}}let c=new s.Vu(t,...o);R.add(c),n.push(c)}else a instanceof s.oF&&n.push(a)}return n}(j.current,z,w);if(n.some(e=>F.has(e))){let e=new s.nV;R.add(e),n.push(e)}for(let t of n)e.addPass(t);return n.length&&(t&&(t.enabled=!0),r&&(r.enabled=!0)),()=>{for(let t of n)e.removePass(t),B(t);t&&(t.enabled=!1),r&&(r.enabled=!1)}},[I,V,z,w]),(0,i.useEffect)(()=>(A.acquire(b,a.NoToneMapping),b.toneMapping=a.NoToneMapping,()=>{A.release(b)}),[b]);let W=(0,i.useMemo)(()=>I?{composer:I.composer,normalPass:I.normalPass,downSamplingPass:I.downSamplingPass,resolutionScale:l,camera:z,scene:P,requestRebuild:O,autoClear:f}:null,[I,l,z,P,O,f]);return((0,i.useImperativeHandle)(x,()=>I?.composer,[I]),W)?(0,o.jsx)(_.Provider,{value:W,children:(0,o.jsx)("group",{ref:H,children:e})}):null});s.Mj;var z=["blendMode-blendFunction","blendMode-opacity-value","bokehScale","cocMaterial-focusDistance","cocMaterial-focusRange","depthTexture"];function I(e,t){if("depthTexture"!==t)return m(e,t);let r=e.cocMaterial.uniforms.depthBuffer.value;return r?{texture:r}:void 0}function L(e,t,r){"depthTexture"===t?e.setDepthTexture(r?.texture,r?.packing):g(e,t,r)}function O({ref:e,blendFunction:t,opacity:r,worldFocusDistance:n,worldFocusRange:l,focusDistance:u,focusRange:c,focalLength:f,bokehScale:d,resolutionScale:h,resolutionX:p,resolutionY:v,width:m,height:g,target:w,depthTexture:x,...b}){let{camera:S}=(0,i.use)(_),M=null!=w,E=(0,i.useMemo)(()=>{let e=new s.kt(S,{worldFocusDistance:n,worldFocusRange:l,focalLength:f,resolutionScale:h,resolutionX:p,resolutionY:v,width:m,height:g});return M&&(e.target=new a.Vector3),e.maskFunction=s.qM.MULTIPLY_RGB_SET_ALPHA,e},[S,n,l,f,h,p,v,m,g,M]);return y(E,{"blendMode-blendFunction":t,"blendMode-opacity-value":r,bokehScale:d,"cocMaterial-focusDistance":u,"cocMaterial-focusRange":c,depthTexture:x},z,I,L),(0,i.useEffect)(()=>()=>{E?.dispose?.()},[E]),(0,o.jsx)("primitive",{...b,object:E,ref:e,target:w})}var k=S(s.bv);function H({blendFunction:e=0,luminanceThreshold:t,luminanceSmoothing:r,mipmapBlur:n,radius:a,levels:s,resolutionScale:l,resolutionX:u,resolutionY:c,...f}){let d=(0,i.useMemo)(()=>[{luminanceThreshold:t,luminanceSmoothing:r,mipmapBlur:n,radius:a,levels:s,resolutionScale:l,resolutionX:u,resolutionY:c}],[t,r,n,a,s,l,u,c]);return(0,o.jsx)(k,{blendFunction:e,args:d,...f})}var j=S(s.t$);s.Mj;s.Mj;s.Mj;s.Mj;var V=S(s.i);function N({blendFunction:e=5,...t}){return(0,o.jsx)(V,{blendFunction:e,...t})}s.Mj;s.Mj;s.Mj;var W=S(s.K1);s.Mj},9897:(e,t,r)=>{r.d(t,{b:()=>o});var n=r(8945),i=r(2115),a=r(7548);let o=i.forwardRef(function({args:[e=1,t=1,r=1]=[],radius:a=.05,steps:o=1,smoothness:l=4,bevelSegments:u=4,creaseAngle:c=.4,children:f,...d},h){return i.createElement("mesh",(0,n.A)({ref:h},d),i.createElement(s,{args:[e,t,r],radius:a,steps:o,smoothness:l,bevelSegments:u,creaseAngle:c}),f)}),s=i.forwardRef(function({args:[e=1,t=1,r=1]=[],radius:o=.05,steps:s=1,smoothness:l=4,bevelSegments:u=4,creaseAngle:c=.4,...f},d){let h=i.useMemo(()=>(function(e,t,r){let n=new a.Shape,i=r-1e-5;return n.absarc(1e-5,1e-5,1e-5,-Math.PI/2,-Math.PI,!0),n.absarc(1e-5,t-2*i,1e-5,Math.PI,Math.PI/2,!0),n.absarc(e-2*i,t-2*i,1e-5,Math.PI/2,0,!0),n.absarc(e-2*i,1e-5,1e-5,0,-Math.PI/2,!0),n})(e,t,o),[e,t,o]),p=i.useMemo(()=>({depth:r-2*o,bevelEnabled:!0,bevelSegments:2*u,steps:s,bevelSize:o-1e-5,bevelThickness:o,curveSegments:l}),[r,o,l,u,s]),v=i.useRef(null);return i.useLayoutEffect(()=>{v.current&&(v.current.center(),function(e,t=Math.PI/3){let r=Math.cos(t),n=(1+1e-10)*100,i=[new a.Vector3,new a.Vector3,new a.Vector3],o=new a.Vector3,s=new a.Vector3,l=new a.Vector3,u=new a.Vector3;function c(e){let t=~~(e.x*n),r=~~(e.y*n),i=~~(e.z*n);return`${t},${r},${i}`}let f=e.index?e.toNonIndexed():e,d=f.attributes.position,h={};for(let e=0,t=d.count/3;e<t;e++){let t=3*e,r=i[0].fromBufferAttribute(d,t+0),n=i[1].fromBufferAttribute(d,t+1),l=i[2].fromBufferAttribute(d,t+2);o.subVectors(l,n),s.subVectors(r,n);let u=new a.Vector3().crossVectors(o,s).normalize();for(let e=0;e<3;e++){let t=c(i[e]);t in h||(h[t]=[]),h[t].push(u)}}let p=new Float32Array(3*d.count),v=new a.BufferAttribute(p,3,!1);for(let e=0,t=d.count/3;e<t;e++){let t=3*e,n=i[0].fromBufferAttribute(d,t+0),a=i[1].fromBufferAttribute(d,t+1),f=i[2].fromBufferAttribute(d,t+2);o.subVectors(f,a),s.subVectors(n,a),l.crossVectors(o,s).normalize();for(let e=0;e<3;e++){let n=h[c(i[e])];u.set(0,0,0);for(let e=0,t=n.length;e<t;e++){let t=n[e];l.dot(t)>r&&u.add(t)}u.normalize(),v.setXYZ(t+e,u.x,u.y,u.z)}}f.setAttribute("normal",v)}(v.current,c))},[h,p,c]),i.useImperativeHandle(d,()=>v.current),i.createElement("extrudeGeometry",(0,n.A)({ref:v,args:[h,p]},f))})},9914:(e,t,r)=>{e.exports=r(6451)}}]);