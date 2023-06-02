//
//
//

import React from 'react';
import { TweenLite } from 'gsap';

import * as THREE from './lib/three.diamond.drawer.extension.js';

// use json-loader module
import Spline_Necklace_42 from './splines/Spline_Necklace_42cm';
import Spline_Necklace_45 from './splines/Spline_Necklace_45cm';
import Spline_Necklace_50 from './splines/Spline_Necklace_50cm';
import Spline_Necklace_60 from './splines/Spline_Necklace_60cm';
import Spline_Necklace_70 from './splines/Spline_Necklace_70cm';
import Spline_Necklace_75 from './splines/Spline_Necklace_75cm';
import Spline_Necklace_85 from './splines/Spline_Necklace_85cm';
import Spline_Necklace_95 from './splines/Spline_Necklace_95cm';
import Spline_Necklace_105 from './splines/Spline_Necklace_105cm';
import Spline_Necklace_115 from './splines/Spline_Necklace_115cm';
import Spline_Necklace_120 from './splines/Spline_Necklace_120cm';
import Spline_Bracelet_17cm from './splines/Spline_Bracelet_17cm';
import Spline_Bracelet_19cm from './splines/Spline_Bracelet_19cm';
import Spline_Bracelet_21cm from './splines/Spline_Bracelet_21cm';

const bUseGUI = false;
//const bUseSpline = getURLQueryParams('usespline');
const bUseSpline = true;
const bUseSplineEditor = false;

const Splines_Necklace = {
	42: Spline_Necklace_42,
	45: Spline_Necklace_45,
	50: Spline_Necklace_50,
	60: Spline_Necklace_60,
	70: Spline_Necklace_70,
	75: Spline_Necklace_75,
	85: Spline_Necklace_85,
	95: Spline_Necklace_95,
	105: Spline_Necklace_105,
	115: Spline_Necklace_115,
	120: Spline_Necklace_120
};

const Splines_Bracelete = {
	17: Spline_Bracelet_17cm,
	19: Spline_Bracelet_19cm,
	21: Spline_Bracelet_21cm
};

const Splines_Pendant = {};
const ComponentSetup = {
	bUseGUI: bUseGUI,
	bUseSpline: bUseSpline,
	bUseSplineEditor: bUseSplineEditor
}
export { JewerlyRingsRenderer, getURLQueryParams, Splines_Necklace, Splines_Bracelete, ComponentSetup };

require('./lib/EffectComposer.js');
require('./lib/RGBELoader.js');
require('./lib/EffectComposer.js');
require('./lib/PMREMGenerator.js');
require('./lib/PMREMCubeUVPacker.js');
require('./lib/HDRCubeTextureLoader.js');
require('./lib/DRACOLoader');
require('./lib/GLTFLoader.js');
require('./lib/OrbitControls.js');
require('./lib/RenderPass.js');
require('./lib/ShaderPass.js');
require('./lib/CopyShader.js');
require('./lib/LuminosityHighPassShader.js');
require('./lib/ConvolutionShader');

const ELPIXEL = require('./lib/ELPIXEL').ELPIXEL;
const ELJEWEL = require('./lib/ELJEWEL').ELJEWEL;

const SplineEditor = require('./splineEditor.js').SplineEditor;

let dat = null;
if (bUseGUI || bUseSplineEditor) {
	dat = require('dat.gui');
}

class JewerlyRingsRenderer extends React.Component {

	constructor(props) {

		super(props);

		this.THREE = THREE;

		this.renderer = null;

		this.splineEditor = null;

		const rndstr = getrndstr();
		this.webgldrawarea_id = rndstr + "-" + getrndstr();
		this.webgldrawarea_size_allocator_id = rndstr + "-" + getrndstr();

		this.cameraSnapshots = {};

		this.debugParameters = {
			bDoNotResetCamera: false,
			bDoNotTween: false
		}
	}

	getImage() {

		if (!this.renderer) {
			return null;
		}

		const base64 = this
			.renderer
			.getWebGlRenderer()
			.domElement.toDataURL('image/png', 1.0);

		return base64;
	}

	componentDidMount() {

		const self = this;

		self.renderer = new Renderer(
			self.webgldrawarea_id,
			self.webgldrawarea_size_allocator_id,
			function onReadyToUse() {

				if (self.props.onReadyToUse) {
					self.props.onReadyToUse(self);
				}

				self.update(null, null, true);

				self.renderer.onInteraction = function () {

					if (self.props.onInteraction) {
						self.props.onInteraction();
					}
				};
			}
		);
	}

	componentWillUnmount() {

		if (this.renderer) {

			this.renderer.dispose();
		}

		this.renderer = null;
	}

	componentDidUpdate(prevProps, prevState) {

		this.update(prevProps, prevState, false);
	}

	update(prevProps, prevState, bForce) {

		const self = this;

		if (self.renderer) {

			const bIsEqualsArray = prevProps && isEqualsArray(prevProps.ringsUrls, self.props.ringsUrls);

			if (prevProps &&
				(prevProps.chainLength !== self.props.chainLength ||
					prevProps.createChainType !== self.props.createChainType ||
					!bIsEqualsArray)
			) {
				const rootNode = self.renderer.getRootNode();

				if (rootNode.children.length && rootNode.createChainType === prevProps.createChainType) {

					self.saveCameraSnapshot(prevProps.createChainType);
				}
			}

			if (bForce ||
				prevProps.createBangle !== self.props.createBangle ||
				prevProps.chainLength !== self.props.chainLength ||
				prevProps.createChainType !== self.props.createChainType ||
				!bIsEqualsArray) {

				if (self.props.createChainType) {

					self.createChainByUrls(self.props.createChainType);
				}
				else if (self.props.createBangle) {

					self.createBangleByUrls(self.props.createBangle);
				}
				else {

					self.uploadRingsByUrls();
				}
			}

			if (bForce || prevProps.stoneColor !== self.props.stoneColor) {

				self.changeStoneColor();
			}

			if (bForce || prevProps.ringColor !== self.props.ringColor) {

				self.changeRingColor();
			}
		}
	}

	render() {

		const webgldrawarea_id = this.webgldrawarea_id;
		const webgldrawarea_size_allocator_id = this.webgldrawarea_size_allocator_id;

		return (
			<div style={{ width: "100%", height: "100%" }} className="canvas">
				<canvas
					id={webgldrawarea_size_allocator_id}
					style={{ width: "100%", height: "100%", opacity: 0 }}></canvas>
				<canvas
					id={webgldrawarea_id}
					style={{ display: "none", opacity: 0 }}></canvas>
			</div>
		);
	}

	resetCamera(chainType) {

		const renderer = this.renderer;
		const rootNode = renderer.getRootNode();
		const camera = renderer.getCamera();

		if (!camera || !rootNode) {
			return;
		}

		camera.controls.reset();

		camera.position.x = 0.1;
		camera.position.y = 1;
		camera.position.z = 0.0;
		camera.quaternion.x = 0;
		camera.quaternion.y = 0;		        // How far you can orbit horizontally, upper and lower limits.
		camera.quaternion.z = 0;
		camera.controls.minAzimuthAngle = -Infinity; // radians
		camera.quaternion.w = 1;
		camera.controls.maxAzimuthAngle = Infinity; // radians

		// How far you can orbit vertically, upper and lower limits.
		camera.controls.minPolarAngle = 0; // radians
		camera.controls.maxPolarAngle = Math.PI; // radians

		if (this.props.createBangle) {
			camera.position.x = 1.0;
			camera.position.y = 1.0;
			camera.position.z = 1.0;
		}

		if (chainType) {
			if (chainType === 'NECKLACE' ||
				chainType === 'BRACELET' ||
				chainType === 'PENDANT') {
				camera.position.x = 0.0;
				camera.position.y = 1.0;
				camera.position.z = 0.1;
				if (bUseSpline) {
					if (chainType === 'NECKLACE') {
						camera.position.y = 0.1;
						camera.position.z = 1.0;

						camera.controls.minAzimuthAngle = -Math.PI / 2 + Math.PI / 4; // radians
						camera.controls.maxAzimuthAngle = Math.PI / 2 - Math.PI / 4; // radians

						camera.controls.minPolarAngle = Math.PI / 3; // radians
						camera.controls.maxPolarAngle = 2 * Math.PI / 3; // radians
					}
					if (chainType === 'BRACELET') {
						camera.position.y = 1.0;
						camera.position.x = 0.0;
						camera.position.z = 0.1;
					}
				}

			}
			else if (chainType === 'EARRINGS') {
				camera.position.x = 0;
				camera.position.y = 0.1;
				camera.position.z = 1;
			}
		}

		camera.quaternion.x = 0;
		camera.quaternion.y = 0;
		camera.quaternion.z = 0;
		camera.quaternion.w = 1;

		camera.lookAt(new THREE.Vector3());

		camera.updateMatrixWorld(true);
		camera.updateProjectionMatrix();

		const clone_camera = camera.clone();

		clone_camera.lookAt(new THREE.Vector3());

		let zoomCoef = 1.5;

		if (!bUseSpline) {
			if (chainType === 'NECKLACE') {
				zoomCoef = 1.1;
			} else if (chainType === 'BRACELET') {
				zoomCoef = 1.1;
			}
		}

		zoomToFit([rootNode], clone_camera, null, zoomCoef);

		camera.position.copy(clone_camera.position);

		if (chainType === 'PENDANT') {
			rootNode.translateZ(-15);
		}

		camera.updateMatrixWorld(true);
		camera.updateProjectionMatrix();

		camera.controls.update();
	}

	restoreSnapshot(id) {

		const renderer = this.renderer;
		const camera = renderer.getCamera();
		const rootNode = renderer.getRootNode();

		if (id === 'PENDANT') {
			rootNode.translateZ(-15);
		}

		if (!camera) {
			return;
		}

		camera.controls.reset();

		const cameraSnapshot = this.cameraSnapshots[id];

		const loader = new THREE.ObjectLoader();
		const object = loader.parse(cameraSnapshot);

		object.updateMatrixWorld(true);
		object.updateProjectionMatrix();

		camera.copy(object);

		camera.updateMatrixWorld(true);
		camera.updateProjectionMatrix();

		camera.controls.target = cameraSnapshot.controls.target.clone();

		camera.controls.update();
	}

	uploadRingsByUrls() {

		const self = this;

		const canvas = document.getElementById(self.webgldrawarea_id);
		canvas.style.opacity = 0;

		if (self.props.onBeforeLoad) {
			self.props.onBeforeLoad(self);
		}

		const gltfs = this.props.ringsUrls ? this.props.ringsUrls.slice() : [];

		const promises = [];

		for (let i = 0; i < gltfs.length; i++) {

			const link = gltfs[i];

			promises.push(
				new Promise((res, rej) => {
					self.uploadGLTF(
						link,
						false,
						null,
						(_self, gltf) => { // onLoad

							const clone = gltf.clone(true);

							clone.isDiamondGltf = true;

							gltfs[i] = clone;

							res(clone);
						},
						null
					)
				})
			);
		}

		if (self.uploadRingsByUrls.uploadGLTF_promises) {

			self.uploadRingsByUrls.uploadGLTF_promises.ignore = true;
		}

		self.uploadRingsByUrls.uploadGLTF_promises = Promise.all(promises);

		self.uploadRingsByUrls.uploadGLTF_promises.ignore = false;

		function onPromisesDone(gltfs) {

			if (this.ignore) { // this is uploadRingsByUrls.promise
				return;
			}

			const renderer = self.renderer;

			let max_z_size = 0;

			renderer.clearScene();

			renderer.removeShadowPlane();

			const rootNode = renderer.getRootNode();

			for (let i = 0; i < gltfs.length; i++) {

				const clone = gltfs[i];

				rootNode.add(clone);

				const box = new THREE.Box3();

				const center = new THREE.Vector3();
				const size = new THREE.Vector3();

				box.setFromObject(clone); // could be simplified there
				box.getCenter(center);
				box.getSize(size);

				box.center = center;
				box.size = size;

				max_z_size = max_z_size < box.size.z ? box.size.z : max_z_size;
			}

			if (gltfs.length > 1) {

				const spacer = max_z_size * 1.4;

				let z_start = spacer * gltfs.length / 2;

				for (let i = 0; i < gltfs.length; i++) {

					const node = gltfs[i];

					node.position.z = z_start;

					z_start -= spacer;
				}
			}

			renderer.resetNode(rootNode);

			self.resetCamera();

			renderer.updateDirLight({ x: 1, y: 2, z: -1 }, 1.0);

			renderer.updateShadowPlane(rootNode);

			renderer.updateRenderer();

			self.changeStoneColor();

			self.changeRingColor();

			TweenLite.to(
				canvas, 1.2,
				{
					opacity: 1,
					ease: "Linear.easeNone"
				}
			);

			if (self.props.onLoad) {
				self.props.onLoad(self);
			}
		}

		self.uploadRingsByUrls.uploadGLTF_promises
			.then(onPromisesDone.bind(self.uploadRingsByUrls.uploadGLTF_promises));
	}

	/* ........................... */

	createBangleByUrls(bangleOptions) {

		// for bagles ringsUrls is
		// [
		//    [ bangle url, [dash, dot, dash], [dot, ... ] <- bangle then word
		//    [ bangle url, [dash, dot, dash], [dot, ... ] <- bangle then word
		//    ...
		// ]

		const self = this;

		const canvas = document.getElementById(self.webgldrawarea_id);
		canvas.style.opacity = 0;

		if (self.props.onBeforeLoad) {
			self.props.onBeforeLoad(self);
		}

		const promises = [];

		const gltfs = self.props.ringsUrls || [];

		gltfs.forEach((bangleArray, i, gltfs) => {

			const bangleUrl = bangleArray[0].url;

			promises.push(
				new Promise((res, rej) => {
					self.uploadGLTF(
						bangleUrl,
						false,
						null,
						(_self, gltf) => { // onLoad
							const clone = gltf.clone(true);
							clone.isDiamondGltf = true;
							gltfs[i][0].gltf = clone;
							res(clone);
						},
						null
					)
				})
			);

			bangleArray.forEach((wordArray, j) => {

				if (j === 0) { // first is always bangle
					return;
				}

				wordArray.forEach((dashDot, k) => {

					const dashDotUrl = dashDot.url;

					promises.push(
						new Promise((res, rej) => {
							self.uploadGLTF(
								dashDotUrl,
								false,
								null,
								(_self, gltf) => { // onLoad
									const clone = gltf.clone(true);
									clone.isDiamondGltf = true;
									gltfs[i][j][k].gltf = clone;
									res(clone);
								},
								null
							)
						})
					);
				});
			});
		});

		if (self.createBangleByUrls.uploadGLTF_promises) {

			self.createBangleByUrls.uploadGLTF_promises.ignore = true;
		}

		self.createBangleByUrls.uploadGLTF_promises = Promise.all(promises);

		self.createBangleByUrls.uploadGLTF_promises.ignore = false;

		function onPromisesDone(gltfs_flat_array) {

			if (this.ignore) { // this is uploadRingsByUrls.promise
				return;
			}

			const renderer = self.renderer;

			let max_z_size = 0;

			renderer.clearScene();

			renderer.removeShadowPlane();

			const rootNode = renderer.getRootNode();

			let length_dash_size = 0; // will found dynamically
			let length_dot_size = 0;

			for (let i = 0; i < gltfs.length; i++) {

				const bangle = gltfs[i][0];

				rootNode.add(bangle.gltf);

				const box = new THREE.Box3();
				const center = new THREE.Vector3();
				const size = new THREE.Vector3();

				box.setFromObject(bangle.gltf); // could be simplified there
				box.getCenter(center);
				box.getSize(size);

				box.center = center;
				box.size = size;

				max_z_size = max_z_size < box.size.z ? box.size.z : max_z_size;

				for (let j = 1; j < gltfs[i].length; j++) {

					const wordArray = gltfs[i][j];

					if (!wordArray) {
						continue;
					}

					for (let k = 0; k < wordArray.length; k++) {

						const dashDot = wordArray[k];

						rootNode.add(dashDot.gltf);

						if (!length_dash_size && dashDot.type === 'dash') {
							const box = new THREE.Box3();
							const center = new THREE.Vector3();
							const size = new THREE.Vector3();
							box.setFromObject(dashDot.gltf); // could be simplified there
							box.getCenter(center);
							box.getSize(size);

							length_dash_size = size;
						}

						if (!length_dot_size && dashDot.type === 'dot') {
							const box = new THREE.Box3();
							const center = new THREE.Vector3();
							const size = new THREE.Vector3();
							box.setFromObject(dashDot.gltf); // could be simplified there
							box.getCenter(center);
							box.getSize(size);

							length_dot_size = size;
						}
					}
				}
			}

			if (gltfs.length) {

				const spacer = max_z_size * 1.4;

				let z_start = spacer * gltfs.length / 2;

				gltfs.forEach(bangleArray => {

					const bangleGltf = bangleArray[0].gltf;

					bangleGltf.traverse(object => {
						if (!bangleGltf.radiusA &&
							object.name.toUpperCase().search('RADIUSA') > -1) //
						{
							bangleGltf.radiusA = object;
						}
						if (!bangleGltf.radiusB &&
							object.name.toUpperCase().search('RADIUSB') > -1) //
						{
							bangleGltf.radiusB = object;
						}
					});

					let radiusA = getPointPosition(bangleGltf.radiusA);
					radiusA = worldToLocal(radiusA, rootNode);

					let radiusB = getPointPosition(bangleGltf.radiusB);
					radiusB = worldToLocal(radiusB, rootNode);

					const dotDashArrays = bangleArray.slice(1, bangleArray.length);

					const curve = new THREE.EllipseCurve(
						0.0, // center
						0.0, // ax, aY
						Math.abs(radiusB.x),
						Math.abs(radiusA.y),
						-Math.PI / 2,       // start angel
						2 * Math.PI - Math.PI / 2, // end engle
						false,           // aClockwise
						0.0              // aRotation
					);

					const curve_length = curve.getLength();

					const length_dash = Math.max(length_dash_size.x || 0, length_dash_size.z || 0); // pass throught params
					const length_dot = Math.max(length_dot_size.x || 0, length_dot_size.z || 0);
					const length_between = Math.max(length_dash, length_dot * 2);

					function setElement(object, t) {

						const node = object.gltf;
						const curve_point = curve.getPoint(t);
						const curve_tangent = curve.getTangentAt(t);

						node.position.x = curve_point.x;
						node.position.y = curve_point.y;
						node.position.z = 0.0;

						node.updateMatrixWorld(true);

						node.lookAt(
							new THREE.Vector3(
								curve_point.x + 10.0 * curve_tangent.x,
								curve_point.y + 10.0 * curve_tangent.y,
								0)
						);

						if (t < 0.25 || t > 0.75) { // adhoc !!
							node.rotation.x = -node.rotation.x;
							node.rotation.y = -node.rotation.y;
							node.rotation.z = -node.rotation.z;
						}

						node.updateMatrixWorld(true);

						node.position.z = z_start;
					}

					function getNextT(initial_T, nextLength, coef) {
						if (!nextLength) {
							nextLength = 0;
						}
						if (!coef) {
							coef = 1;
						}
						let t = initial_T;
						let cp1, cp2, length = 0, step = 1 / 30000;
						while (nextLength > length) {
							cp1 = curve.getPoint(t);
							t = t + coef * step;
							cp2 = curve.getPoint(t);
							length += cp2.distanceTo(cp1);
						}
						return t;
					}

					function proc(
						initial_T,
						setElement
					) {
						let tLeft = initial_T;
						let tRight = initial_T;

						let fullLengthLeft = 0;
						let fullLengthRight = 0;

						let nextLengthLeft = 0;
						let nextLengthRight = 0;

						// dotDashArrays - letters arrays
						const bIs_DashArrays_Odd = isOdd(dotDashArrays.length);

						const dashArrays_Index = Math.ceil(dotDashArrays.length / 2) - 1;

						if (bIs_DashArrays_Odd) {

							const dotDashArray = dotDashArrays[dashArrays_Index];

							const bIs_DashArray_Odd = isOdd(dotDashArray.length);

							const dashArray_Index = Math.ceil(dotDashArray.length / 2) - 1;

							if (bIs_DashArray_Odd) {

								const object = dotDashArray[dashArray_Index]; // dash / dot

								let length = 0;

								setElement(object, initial_T);

								if (object.type === "dot") {
									length = length_dot / 2;
								}
								else if (object.type === "dash") {
									length = length_dash / 2;
								}

								tLeft = getNextT(initial_T, length, -1);
								tRight = getNextT(initial_T, length, 1);

								fullLengthLeft = length;
								fullLengthRight = length;
							}

							// RIGHT
							for (let k2 = dashArray_Index - (bIs_DashArray_Odd ? 1 : 0); k2 >= 0; k2--) {

								const object = dotDashArray[k2]; // dash / dot

								let length = 0;

								if (object.type === "dot") {
									length = length_dot / 2;
								}
								else if (object.type === "dash") {
									length = length_dash / 2;
								}

								tRight = getNextT(tRight, length, 1);

								setElement(object, tRight);

								if (object.type === "dot") {
									length = length_dot / 2;
									fullLengthRight += length_dot;
								}
								else if (object.type === "dash") {
									length = length_dash / 2;
									fullLengthRight += length_dash;
								}

								tRight = getNextT(tRight, length, 1);
							}

							// LEFT
							for (let k1 = dashArray_Index + 1; k1 < dotDashArray.length; k1++) {

								const object = dotDashArray[k1]; // dash / dot

								let length = 0;

								if (object.type === "dot") {
									length = length_dot / 2;
								}
								else if (object.type === "dash") {
									length = length_dash / 2;
								}

								tLeft = getNextT(tLeft, length, -1);

								setElement(object, tLeft);

								if (object.type === "dot") {
									length = length_dot / 2;
									fullLengthLeft += length_dot;
								}
								else if (object.type === "dash") {
									length = length_dash / 2;
									fullLengthLeft += length_dash;
								}

								tLeft = getNextT(tLeft, length, -1);
							}

							nextLengthRight = length_between;
							nextLengthLeft = length_between;

							if (dotDashArrays.length > 1) {

								fullLengthRight += length_between;
								fullLengthLeft += length_between;
							}
						}
						else {

							nextLengthRight = length_between / 2;
							nextLengthLeft = length_between / 2;

							if (dotDashArrays.length > 1) {

								fullLengthRight = length_between / 2;
								fullLengthLeft = length_between / 2;
							}
						}

						if (true) {

							// RIGHT
							// 1.a set letters for both sides
							// right - means we move to t++
							for (let k1 = dashArrays_Index + 1; k1 < dotDashArrays.length; k1++) { // letters array

								const arr = dotDashArrays[k1];

								let length = nextLengthRight;

								for (let k_i = arr.length - 1; k_i >= 0; k_i--) { // dashes and dots array

									const object = arr[k_i]; // dash / dot

									if (object.type === "dot") {
										length += length_dot / 2;
									}
									else if (object.type === "dash") {
										length += length_dash / 2;
									}

									tRight = getNextT(tRight, length, 1);

									setElement(object, tRight);

									if (object.type === "dot") {
										length = length_dot / 2;
										fullLengthRight += length_dot;
									}
									else if (object.type === "dash") {
										length = length_dash / 2;
										fullLengthRight += length_dash;
									}

									tRight = getNextT(tRight, length, 1);

									length = 0;
								}

								if (k1 !== dotDashArrays.length - 1) {
									nextLengthRight = length_between;
									fullLengthRight += length_between;
								}
							}

							// LEFT
							// 1.b set letters for both sides
							// right - means we move to t--
							for (let k2 = dashArrays_Index - (bIs_DashArrays_Odd ? 1 : 0); k2 >= 0; k2--) {

								const arr = dotDashArrays[k2];

								let length = nextLengthLeft;

								for (let k_i = 0; k_i < arr.length; k_i++) {

									const object = arr[k_i]; // dash / dot

									if (object.type === "dot") {
										length += length_dot / 2;
									}
									else if (object.type === "dash") {
										length += length_dash / 2;
									}

									tLeft = getNextT(tLeft, length, -1);

									setElement(object, tLeft);

									if (object.type === "dot") {
										length = length_dot / 2;
										fullLengthLeft += length_dot;

									}
									else if (object.type === "dash") {
										length = length_dash / 2;
										fullLengthLeft += length_dash;
									}

									tLeft = getNextT(tLeft, length, -1);

									length = 0;
								}

								if (k2 > 0) {
									nextLengthLeft = length_between;
									fullLengthLeft += length_between;
								}
							}
						}

						return {
							fullLengthLeft: fullLengthLeft,
							fullLengthRight: fullLengthRight,
							tLeft: tLeft,
							tRight: tRight
						}
					}

					const procResult = proc(
						0.5,
						() => { }
					);

					if (true) {

						const nextLength =
							curve_length / 2 -
							(procResult.fullLengthLeft + procResult.fullLengthRight) / 2 +
							procResult.fullLengthLeft;

						// console.log( ' curve_length : ' + curve_length + 
						//     "  full " + (procResult.fullLengthLeft + procResult.fullLengthRight));

						const t = getNextT(0, nextLength, 1);

						proc(
							t,
							setElement
						)
					}

					bangleGltf.position.z = z_start;

					z_start -= spacer;

				});
			}

			renderer.resetNode(rootNode);

			self.resetCamera();

			renderer.updateDirLight({ x: 1, y: 2, z: -1 }, 1.0);

			renderer.updateShadowPlane(rootNode);

			renderer.updateRenderer();

			self.changeStoneColor();

			self.changeRingColor();

			TweenLite.to(
				canvas, 1.2,
				{
					opacity: 1,
					ease: "Linear.easeNone"
				}
			);

			if (self.props.onLoad) {
				self.props.onLoad(self);
			}
		}

		self.createBangleByUrls.uploadGLTF_promises
			.then(onPromisesDone.bind(self.createBangleByUrls.uploadGLTF_promises));
	}

	/* ........................... */

	createChainByUrls(chainType) {

		const self = this;

		function getPointPosition(point_object) {
			return point_object.localToWorld(new THREE.Vector3());
		}

		function worldToLocal(vec3, object) {
			return object.worldToLocal(vec3.clone());
		}

		// Rotate an object around an arbitrary axis in object space
		function rotateAroundObjectAxis(object, axis, radians) {
			var rotObjectMatrix = new THREE.Matrix4();
			rotObjectMatrix.makeRotationAxis(axis.normalize(), radians);
			object.matrix.multiply(rotObjectMatrix);
			object.rotation.setFromRotationMatrix(object.matrix);
		}

		// Rotate an object around an arbitrary axis in world space       
		function rotateAroundWorldAxis(object, axis, radians) {
			var rotWorldMatrix = new THREE.Matrix4();
			rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
			rotWorldMatrix.multiply(object.matrix);
			object.matrix = rotWorldMatrix;
			object.rotation.setFromRotationMatrix(object.matrix);
		}

		function makeClone(gltf) {
			const chainElementsNames = self.props.chainElementsNames ? self.props.chainElementsNames : [];
			const clone = gltf.clone(true);
			clone.isDiamondGltf = true;
			//const loader = new ELJEWEL.DiamondLoader(
			//    self.renderer.getEnvCubeMap(), 
			//    self.renderer.getWebGlRenderer());
			//loader.process({scene : clone});
			clone.traverse(object => {
				if (!clone.point1 && object.name.toUpperCase().search('POINT1') > -1) {
					clone.point1 = object;
				}
				if (!clone.point2 && object.name.toUpperCase().search('POINT2') > -1) {
					clone.point2 = object;
				}
				if (object.material && object.material.isDiamondMaterial) {

					function applyDiamondUniformOverride(diamondUniformOverrides, object, name) {
						if (diamondUniformOverrides.hasOwnProperty(name) &&
							object.material.uniforms.hasOwnProperty(name)) {
							diamondUniformOverrides.__state[name] = object.material.uniforms[name].value;
							object.material.uniforms[name].value = diamondUniformOverrides[name];
							object.material.uniformsNeedUpdate = true;
						}
					}

					object.onBeforeRender = function (webglrenderer, scene, camera, geometry, material, group) {
						if (this.material !== material) {
							return;
						}

						const diamondUniformOverrides = clone.diamondUniformOverrides;

						applyDiamondUniformOverride(diamondUniformOverrides, object, 'colorCorrection');
						applyDiamondUniformOverride(diamondUniformOverrides, object, 'boostFactors');
						applyDiamondUniformOverride(diamondUniformOverrides, object, 'Absorbption');
						applyDiamondUniformOverride(diamondUniformOverrides, object, 'geometryFactor');
						applyDiamondUniformOverride(diamondUniformOverrides, object, 'distanceOffset');
						applyDiamondUniformOverride(diamondUniformOverrides, object, 'squashFactor');
						applyDiamondUniformOverride(diamondUniformOverrides, object, 'normalOffset');
						applyDiamondUniformOverride(diamondUniformOverrides, object, 'n2');
						applyDiamondUniformOverride(diamondUniformOverrides, object, 'normalOffset');
						applyDiamondUniformOverride(diamondUniformOverrides, object, 'envMapIntensity');
					}
					object.onAfterRender = function (webglrenderer, scene, camera, geometry, material, group) {
						if (this.material !== material) {
							return;
						}

						for (const name in clone.diamondUniformOverrides.__state) {
							const value = clone.diamondUniformOverrides.__state[name];
							material.uniforms[name].value = value;
							material.uniformsNeedUpdate = true;
						}
						clone.diamondUniformOverrides.__state = {};
					}
				}
			});
			clone.diamondUniformOverrides = {
				__state: {}
			};

			for (let i = 0; i < chainElementsNames.length; i++) {
				const chainElementsName = chainElementsNames[i];
				if (clone.name.indexOf(chainElementsName) > -1) {
					clone.isChainElement = true;
					break;
				}
			}
			return clone;
		}

		function applySettings(node, settings) {
			if (settings) {

				if (settings.hasOwnProperty('rotationByPoints')) {

					const angle = settings.rotationByPoints;

					node.updateMatrixWorld(true);

					const p1 = node.point1.position;
					const p2 = node.point2.position;
					const v = new THREE.Vector3().subVectors(p2, p1);

					rotateAroundObjectAxis(node, v, angle);

					node.updateMatrixWorld(true);
				}
				return true;
			}
			return false;
		}

		function create_BRACELET_NECKLACE() {

			const promises = [];

			if (Array.isArray(self.props.ringsUrls[0]) ||
				typeof self.props.ringsUrls[0] !== "object") {
				return null;
			}

			self.props.ringsUrls.forEach((item, i) => {

				const link = item.url;

				promises.push(
					new Promise((res, rej) => {
						self.uploadGLTF(
							link,
							false,
							null,
							(_self, gltf) => { // onLoad
								const clone = makeClone(gltf);
								item.gltf = clone;
								res(clone);
							},
							null
						)
					})
				);
			});

			self.createChainByUrls.uploadGLTF_promises = Promise.all(promises);

			self.createChainByUrls.uploadGLTF_promises.ignore = false;

			function onPromisesDone(gltfs_float_array) {

				if (this.ignore) { // this is createChainByUrls.promise
					return;
				}

				const renderer = self.renderer;

				renderer.clearScene();
				renderer.removeShadowPlane();

				const rootNode = renderer.getRootNode();
				rootNode.position.copy(new THREE.Vector3());
				rootNode.updateMatrixWorld(true);

				let total_lenght_in_space = 0;

				const gltfs = self.props.ringsUrls;

				const real_sizes = {};

				for (let i = 0; i < gltfs.length; i++) {

					const node = gltfs[i].gltf;

					if (!node) {
						continue;
					}

					rootNode.add(node);

					node.updateMatrixWorld(true);

					let point1 = getPointPosition(node.point1 || node.point2);
					point1 = worldToLocal(point1, rootNode);

					let point2 = getPointPosition(node.point2 || node.point1);
					point2 = worldToLocal(point2, rootNode);

					const d = point1.distanceTo(point2);
					real_sizes[node.name] = d;
					total_lenght_in_space += d;
				}

				if (gltfs.length > 1) {

					let current_lenght_in_space = 0;

					const chainLength = parseFloat(self.props.chainLength) || 42;
					const chainLengthCoef = chainLength / 75 - 0.5;

					const xRadius = 1.0 / (1.0 + chainLengthCoef) * total_lenght_in_space / Math.PI;
					const yRadius = (1.0 + chainLengthCoef) * total_lenght_in_space / Math.PI;

					const aStartAngle = -Math.PI;
					const aEndAngle = Math.PI + aStartAngle;

					let curve = new THREE.EllipseCurve(
						0.0, 0.0,       // ax, aY
						xRadius, yRadius,
						aStartAngle, aEndAngle,
						true,            // aClockwise
						0.0              // aRotation
					);

					let curve_length = curve.getLength();

					const d = curve_length - total_lenght_in_space;

					if (d > 0) {

						current_lenght_in_space += d / 2;
					}

					// const global_x_axis = new THREE.Vector3(1, 0, 0);
					const global_y_axis = new THREE.Vector3(0, 1, 0);
					// const global_z_axis = new THREE.Vector3(0, 0, 1);

					const chain_rotation_start_angle = -Math.PI / 2;
					let chain_rotation = chain_rotation_start_angle;

					let previous_node = null;

					let pT = 0;

					const step = 1 / 10000;
					let slineHelperObjects = [];

					let bApplyCustomSpline = false;

					if (bUseSpline && chainType !== 'BRACELET') {
						let json = null;
						if (chainType === 'NECKLACE') {
							json = Splines_Necklace[chainLength];
						}
						if (chainType === 'BRACELET') {
							json = Splines_Bracelete[chainLength];
						}
						if (json) {
							const scene = new THREE.Object3D();
							const splineEditor = new SplineEditor(
								null,
								scene,
								null,
								null
							);
							splineEditor.initCurves();
							splineEditor.importSplineFromJson(json);
							scene.updateMatrixWorld(true);
							curve = splineEditor.getSplines().curve1;
							curve_length = curve.getLength();

							current_lenght_in_space = 0;

							slineHelperObjects = splineEditor.getSplineHelperObjects();
							bApplyCustomSpline = true;
						}
					}

					for (let i = 0; i < gltfs.length; i++) {

						const node = gltfs[i].gltf;

						if (!node) {
							continue;
						}

						// 'NECKLACE' 'BRACELET')

						if (bApplyCustomSpline) { // if apply spline

							node.updateMatrixWorld(true);

							let point1 = getPointPosition(node.point1);
							point1 = worldToLocal(point1, rootNode);

							let point2 = getPointPosition(node.point2);
							point2 = worldToLocal(point2, rootNode);

							const spT = pT;

							let curve_point1 = curve.getPoint(pT);
							let curve_point2 = curve.getPoint(pT);

							const pD = point1.distanceTo(point2);

							let pD_curve = curve_point1.distanceTo(curve_point2);

							while (pD > pD_curve) {

								pT += step;

								curve_point2 = curve.getPoint(pT);

								pD_curve = curve_point1.distanceTo(curve_point2);
							}

							const mpT = (pT - spT) / 2 + spT;

							let additional_rotation = 0;

							for (let j = 1; j < slineHelperObjects.length; j++) {

								const helper = slineHelperObjects[j];

								let prev_rotation = 0;
								let prev_t = 0;

								if (j > 0) {

									prev_rotation = slineHelperObjects[j - 1].rotation.x;
									prev_t = slineHelperObjects[j - 1].t;

									if (prev_t <= mpT && helper.t >= mpT) {

										const c = (mpT - prev_t) / (helper.t - prev_t) - 0.5;

										additional_rotation =
											prev_rotation * Math.abs(-0.5 + c) + helper.rotation.x * (0.5 + c);
									}
								}
							}

							node.updateMatrixWorld(true);

							let sub = new THREE.Vector3().subVectors(curve_point1, point1);

							node.position.add(sub);

							node.updateMatrixWorld(true);

							point2 = getPointPosition(node.point2);
							point2 = worldToLocal(point2, rootNode);

							const vFrom =
								(new THREE.Vector3().subVectors(point2, node.position)).normalize();

							const vTo =
								(new THREE.Vector3().subVectors(curve_point2, curve_point1)).normalize();

							var quaternion = new THREE.Quaternion();
							quaternion.setFromUnitVectors(vFrom, vTo);

							node.setRotationFromQuaternion(quaternion);

							node.updateMatrixWorld(true);

							point1 = getPointPosition(node.point1);
							point1 = worldToLocal(point1, rootNode);

							sub = new THREE.Vector3().subVectors(curve_point1, point1);

							node.position.add(sub);

							node.updateMatrixWorld(true);

							if (additional_rotation > 0) {

								const p1 = node.point1.position;
								const p2 = node.point2.position;
								const v = new THREE.Vector3().subVectors(p2, p1);

								rotateAroundObjectAxis(node, v, additional_rotation);

								node.updateMatrixWorld(true);
							}

							if (!applySettings(node, gltfs[i].settings)) {

								if (node.isChainElement) {

									node.updateMatrixWorld(true);

									const p1 = node.point1.position;
									const p2 = node.point2.position;
									const v = new THREE.Vector3().subVectors(p2, p1);

									rotateAroundObjectAxis(node, v, chain_rotation);

									chain_rotation += Math.PI / 2;
								}
								else {

									chain_rotation = chain_rotation_start_angle;
								}
							} else { // settings applied

								chain_rotation = chain_rotation_start_angle;
							}

							continue;
						}

						// -----------------------------------

						// use generated

						if (chainType === 'NECKLACE') {

							node.updateMatrixWorld(true);

							let point1 = getPointPosition(node.point1);
							point1 = worldToLocal(point1, rootNode);

							let point2 = getPointPosition(node.point2);
							point2 = worldToLocal(point2, rootNode);

							let t = current_lenght_in_space / curve_length;

							const curve_point1 = curve.getPoint(t);

							const lenght_in_space = point1.distanceTo(point2);

							current_lenght_in_space += lenght_in_space;

							t = current_lenght_in_space / curve_length;

							if (t > 1.0) {
								t = 1.0;
							}

							const curve_point2 = curve.getPoint(t);

							let theta = Math.atan2((curve_point2.y - curve_point1.y), (curve_point2.x - curve_point1.x));

							if (!previous_node) {

								previous_node = node;

								rotateAroundWorldAxis(node, global_y_axis, -theta);
								node.position.x = (curve_point2.x + curve_point1.x) / 2;
								node.position.z = (curve_point2.y + curve_point1.y) / 2;

								continue;
							}

							previous_node.updateMatrixWorld(true);

							let prev_point_2 = getPointPosition(previous_node.point2);
							prev_point_2 = worldToLocal(prev_point_2, rootNode);

							rotateAroundWorldAxis(node, global_y_axis, -theta);

							node.updateMatrixWorld(true);

							point1 = getPointPosition(node.point1);
							point1 = worldToLocal(point1, rootNode);

							const sub = new THREE.Vector3().subVectors(prev_point_2, point1);

							node.position.add(sub);

							if (!applySettings(node, gltfs[i].settings)) {

								if (node.isChainElement) {

									node.updateMatrixWorld(true);

									const p1 = node.point1.position;
									const p2 = node.point2.position;
									const v = new THREE.Vector3().subVectors(p2, p1);

									rotateAroundObjectAxis(node, v, chain_rotation);

									chain_rotation += Math.PI / 2;
								}
								else {

									chain_rotation = chain_rotation_start_angle;
								}
							} else { // settings applied

								chain_rotation = chain_rotation_start_angle;
							}

							previous_node = node;
						}
						else if (chainType === 'BRACELET') {

							if (!previous_node) {
								previous_node = node;
								continue;
							}

							previous_node.updateMatrixWorld(true);

							let prev_point_2 = getPointPosition(previous_node.point2 || previous_node.point1);
							prev_point_2 = worldToLocal(prev_point_2, rootNode);

							let point1 = getPointPosition(node.point1 || node.point2);
							point1 = worldToLocal(point1, rootNode);

							const sub = new THREE.Vector3().subVectors(prev_point_2, point1);

							node.position.add(sub);

							if (!applySettings(node, gltfs[i].settings)) {

								if (node.isChainElement) {

									node.updateMatrixWorld(true);

									const p1 = node.point1.position;
									const p2 = node.point2.position;
									const v = new THREE.Vector3().subVectors(p2, p1);

									rotateAroundObjectAxis(node, v, chain_rotation);

									chain_rotation += Math.PI / 2;
								}
								else {

									chain_rotation = chain_rotation_start_angle;
								}
							} else { // settings applied

								chain_rotation = chain_rotation_start_angle;
							}

							previous_node = node;
						}
					}
				}
				return gltfs_float_array;
			}

			return onPromisesDone;
		}

		function create_PENDANT_EARRINGS() {

			const promises = [];

			if (!Array.isArray(self.props.ringsUrls[0])) {
				return null;
			}

			self.props.ringsUrls.forEach((items_array, i) => {

				items_array.forEach((item, j) => {

					const link = item.url;

					promises.push(
						new Promise((res, rej) => {
							self.uploadGLTF(
								link,
								false,
								null,
								(_self, gltf) => { // onLoad
									const clone = makeClone(gltf);
									item.gltf = clone;
									res(clone);
								},
								null
							)
						})
					);
				});
			});

			self.createChainByUrls.uploadGLTF_promises = Promise.all(promises);

			self.createChainByUrls.uploadGLTF_promises.ignore = false;

			function onPromisesDone(gltfs_float_array) {

				if (this.ignore) { // this is createChainByUrls.promise
					return;
				}

				const gltfs = self.props.ringsUrls;

				const renderer = self.renderer;

				renderer.clearScene();
				renderer.removeShadowPlane();

				const rootNode = renderer.getRootNode();
				rootNode.position.copy(new THREE.Vector3());
				rootNode.updateMatrixWorld(true);

				const global_x_axis = new THREE.Vector3(1, 0, 0);
				const global_y_axis = new THREE.Vector3(0, 1, 0);
				const global_z_axis = new THREE.Vector3(1, 0, 1);

				for (let i = 0; i < gltfs_float_array.length; i++) {

					const clone = gltfs_float_array[i];

					rootNode.add(clone);
				}

				const chain_rotation_start_angle = -Math.PI / 2;

				if (chainType === 'PENDANT') {

					for (let k = 0; k < 3; k++) { // gltfs.length === 3 for 'PENDANT'

						// k = 0 => left chain
						// k = 1 => right chain
						// k = 2 => center chain

						const chainLength = parseFloat(self.props.chainLength) || 42;

						let previous_node = null;

						let chain_rotation = chain_rotation_start_angle;

						let global_rotation = 0;

						const arr_gltfs = gltfs[k];

						let curveName = "";

						if (k === 0) {

							global_rotation = -7 * Math.PI / 8 - Math.PI / 2;

							curveName = 'curve2';

						} else if (k === 1) {

							global_rotation = 7 * Math.PI / 8 - Math.PI / 2;

							curveName = 'curve3';

						} else if (k === 2) {

							global_rotation = - Math.PI / 2;

							curveName = 'curve1';
						}

						let bApplyCustomSpline = false;
						let curve;
						let curve_length = 0, current_lenght_in_space = 0;
						let pT = 0;
						const step = 1 / 10000;
						let slineHelperObjects = [];
						if (self.splineEditor) {

							curve = self.splineEditor.getSplines()[curveName];

							slineHelperObjects = self.splineEditor.getSplineHelperObjects(curveName);

							bApplyCustomSpline = true;
						}

						if (bUseSpline) {

							let json = Splines_Pendant[chainLength];

							if (json) {

								const scene = new THREE.Object3D();

								const splineEditor = new SplineEditor(
									null,
									scene,
									null,
									null
								);

								splineEditor.initCurves();

								splineEditor.importSplineFromJson(json);

								scene.updateMatrixWorld(true);

								curve = splineEditor.getSplines().curve1;

								curve_length = curve.getLength();

								current_lenght_in_space = 0;

								slineHelperObjects = splineEditor.getSplineHelperObjects();
							}
						}

						for (let i = 0; i < arr_gltfs.length; i++) {

							const node = arr_gltfs[i].gltf;

							if (!node) {
								return;
							}

							if (bApplyCustomSpline) { // if apply spline
								node.updateMatrixWorld(true);

								let point1 = getPointPosition(node.point1);
								point1 = worldToLocal(point1, rootNode);

								let point2 = getPointPosition(node.point2);
								point2 = worldToLocal(point2, rootNode);

								const spT = pT;

								let curve_point1 = curve.getPoint(pT);
								let curve_point2 = curve.getPoint(pT);

								const pD = point1.distanceTo(point2);

								let pD_curve = curve_point1.distanceTo(curve_point2);

								while (pD > pD_curve) {

									pT += step;

									curve_point2 = curve.getPoint(pT);

									pD_curve = curve_point1.distanceTo(curve_point2);
								}

								const mpT = (pT - spT) / 2 + spT;

								let additional_rotation = 0;

								for (let j = 1; j < slineHelperObjects.length; j++) {

									const helper = slineHelperObjects[j];

									let prev_rotation = 0;
									let prev_t = 0;

									if (j > 0) {

										prev_rotation = slineHelperObjects[j - 1].rotation.x;
										prev_t = slineHelperObjects[j - 1].t;

										if (prev_t <= mpT && helper.t >= mpT) {

											const c = (mpT - prev_t) / (helper.t - prev_t) - 0.5;

											additional_rotation =
												prev_rotation * Math.abs(-0.5 + c) + helper.rotation.x * (0.5 + c);
										}
									}
								}
								node.updateMatrixWorld(true);

								let sub = new THREE.Vector3().subVectors(curve_point1, point1);

								node.position.add(sub);

								node.updateMatrixWorld(true);

								point2 = getPointPosition(node.point2);
								point2 = worldToLocal(point2, rootNode);

								const vFrom =
									(new THREE.Vector3().subVectors(point2, node.position)).normalize();

								const vTo =
									(new THREE.Vector3().subVectors(curve_point2, curve_point1)).normalize();

								var quaternion = new THREE.Quaternion();
								quaternion.setFromUnitVectors(vFrom, vTo);

								node.setRotationFromQuaternion(quaternion);

								node.updateMatrixWorld(true);

								point1 = getPointPosition(node.point1);
								point1 = worldToLocal(point1, rootNode);

								sub = new THREE.Vector3().subVectors(curve_point1, point1);

								node.position.add(sub);

								node.updateMatrixWorld(true);

								if (additional_rotation > 0) {

									const p1 = node.point1.position;
									const p2 = node.point2.position;
									const v = new THREE.Vector3().subVectors(p2, p1);

									rotateAroundObjectAxis(node, v, additional_rotation);

									node.updateMatrixWorld(true);
								}

								if (!applySettings(node, arr_gltfs[i].settings)) {

									if (node.isChainElement) {

										node.updateMatrixWorld(true);

										const p1 = node.point1.position;
										const p2 = node.point2.position;
										const v = new THREE.Vector3().subVectors(p2, p1);

										rotateAroundObjectAxis(node, v, chain_rotation);

										chain_rotation += Math.PI / 2;
									}
									else {

										chain_rotation = chain_rotation_start_angle;
									}
								} else { // settings applied

									chain_rotation = chain_rotation_start_angle;
								}
								continue;
							}
							// -----------------------------------
							// use generated

							if (!previous_node) {

								rotateAroundWorldAxis(node, global_y_axis, global_rotation);

								previous_node = node;

								continue;
							}

							previous_node.updateMatrixWorld(true);

							let prev_point_2 = getPointPosition(previous_node.point2 || previous_node.point1);

							prev_point_2 = worldToLocal(prev_point_2, rootNode);

							rotateAroundWorldAxis(node, global_y_axis, global_rotation);

							node.updateMatrixWorld(true);

							let point1 = getPointPosition(node.point1 || node.point2);

							point1 = worldToLocal(point1, rootNode);

							const sub = new THREE.Vector3().subVectors(prev_point_2, point1);

							node.position.add(sub);

							if (!applySettings(node, arr_gltfs[i].settings)) {

								if (node.isChainElement) {

									node.updateMatrixWorld(true);

									const p1 = node.point1.position;
									const p2 = node.point2.position;
									const v = new THREE.Vector3().subVectors(p2, p1);

									rotateAroundObjectAxis(node, v, chain_rotation);

									chain_rotation += Math.PI / 2;
								}
								else {

									chain_rotation = chain_rotation_start_angle;
								}
							} else { // settings applied

								chain_rotation = chain_rotation_start_angle;
							}

							previous_node = node;
						}
					}
				}
				else if (chainType === 'EARRINGS') {

					// k = 0 => left chain
					// k = 1 => right chain

					let chain_rotation = chain_rotation_start_angle;

					for (let k = 0; k < 2; k++) { // gltfs.length === 2 for 'EARRINGS'

						let previous_node = null;

						let global_transform = new THREE.Vector3();

						const arr_gltfs = gltfs[k];

						if (k === 0) {

							global_transform.x = -2;

						} else if (k === 1) {

							global_transform.x = 2;
						}

						for (let i = 0; i < arr_gltfs.length; i++) {

							const node = arr_gltfs[i].gltf;

							if (!node) {
								return;
							}

							rotateAroundWorldAxis(node, global_y_axis, -Math.PI / 2);

							rotateAroundWorldAxis(node, global_x_axis, Math.PI / 2);

							node.updateMatrixWorld(true);

							if (!previous_node) {

								previous_node = node;

								previous_node.position.add(global_transform);

								continue;
							}

							previous_node.updateMatrixWorld(true);

							let prev_point_2 = getPointPosition(previous_node.point2 || previous_node.point1);

							prev_point_2 = worldToLocal(prev_point_2, rootNode);

							node.updateMatrixWorld(true);

							let point1 = getPointPosition(node.point1 || node.point2);

							point1 = worldToLocal(point1, rootNode);

							const sub = new THREE.Vector3().subVectors(prev_point_2, point1);

							node.position.add(sub);

							if (!applySettings(node, arr_gltfs[i].settings)) {

								if (node.isChainElement) {

									node.updateMatrixWorld(true);

									const p1 = node.point1.position;
									const p2 = node.point2.position;
									const v = new THREE.Vector3().subVectors(p2, p1);

									rotateAroundObjectAxis(node, v, chain_rotation);

									chain_rotation += Math.PI / 2;
								}
								else {

									chain_rotation = chain_rotation_start_angle;
								}
							} else { // settings applied

								chain_rotation = chain_rotation_start_angle;
							}

							previous_node = node;
						}
					}
				}
				return gltfs_float_array;
			}

			return onPromisesDone;
		}

		function uploadBust(gltfs) {

			const fakePromise = new Promise(r => r(gltfs));

			if (this.ignore) { // this is createChainByUrls.promise
				return fakePromise;
			}

			return new Promise((resolve, reject) => {

				const chainType = self.props.createChainType;

				if (bUseSpline || bUseSplineEditor) {

					let url = null;

					/* if (chainType === 'NECKLACE') {

							url = "../assets/jewerly/display_bust.glb";

					} */
					/* else if (chainType === 'BRACELET') {

							url = "../assets/jewerly/display_wrist.glb";
					} */

					if (url) {

						self.uploadGLTF(
							url,
							false,
							null,
							(_self, gltf) => {
								const renderer = _self.renderer;
								const rootNode = renderer.getRootNode();
								const clone = gltf.clone(true);
								rootNode.add(clone);

								resolve(gltfs);
							},
							null
						);
					}
					else {

						resolve(gltfs);
					}
				}
				else {

					resolve(gltfs);
				}
			});
		}

		function adjustCamera(gltfs) {

			if (this.ignore) { // this is createChainByUrls.promise
				return;
			}

			const renderer = self.renderer;
			const rootNode = renderer.getRootNode();

			if (!bUseSplineEditor) {
				renderer.resetNode(rootNode);
				rootNode.rotation.x = 0;
				rootNode.rotation.y = 0;
				rootNode.rotation.x = 0;
			}

			rootNode.createChainType = self.props.createChainType;

			if (!self.cameraSnapshots[chainType]) {

				self.resetCamera(chainType);

				// update a snapshot
				self.saveCameraSnapshot(chainType);
			}
			else {

				if (!self.debugParameters.bDoNotResetCamera) {

					self.restoreSnapshot(chainType);
				}
			}

			if (bUseSpline && chainType === 'BRACELET') {
				renderer.removeShadowPlane();
			}
			else {
				renderer.updateShadowPlane(rootNode);
			}

			renderer.updateDirLight(
				{ x: 1, y: 2, z: -1 },
				1.0
			);

			if (bUseSpline) {

				const camera = renderer.getCamera();

				renderer.updateDirLight({
					x: camera.position.x,
					y: camera.position.y,
					z: camera.position.z
				},
					0.75
				);
			}

			renderer.updateRenderer();

			self.changeStoneColor();

			self.changeRingColor();

			if (!self.debugParameters.bDoNotTween) {

				TweenLite.to(
					canvas, 1.2,
					{
						opacity: 1,
						ease: "Linear.easeNone"
					}
				);
			}

			if (self.props.onLoad) {
				self.props.onLoad(self, gltfs);
			}
		}

		// ----------------------------------------------------------

		if (self.createChainByUrls.uploadGLTF_promises) {
			self.createChainByUrls.uploadGLTF_promises.ignore = true;
		}

		const canvas = document.getElementById(self.webgldrawarea_id);
		canvas.style.opacity = 1;
		if (!self.debugParameters.bDoNotTween) {
			canvas.style.opacity = 0;
		}

		if (self.props.onBeforeLoad) {
			self.props.onBeforeLoad(self);
		}

		let onPromisesDone = null;

		if (chainType === 'NECKLACE' || chainType === 'BRACELET') {

			onPromisesDone = create_BRACELET_NECKLACE();
		}
		else if (chainType === 'PENDANT' || chainType === 'EARRINGS') {

			onPromisesDone = create_PENDANT_EARRINGS();
		}

		if (!onPromisesDone ||
			!self.createChainByUrls.uploadGLTF_promises) {
			return;
		}

		self.createChainByUrls.uploadGLTF_promises
			.then(onPromisesDone.bind(self.createChainByUrls.uploadGLTF_promises))
			.then(uploadBust.bind(self.createChainByUrls.uploadGLTF_promises))
			.then(adjustCamera.bind(self.createChainByUrls.uploadGLTF_promises));
	}


	saveCameraSnapshot(chainType) {

		const self = this;

		const renderer = self.renderer;

		if (!chainType || !renderer) {
			return;
		}
		const camera = renderer.getCamera();

		if (!camera) {
			return;
		}

		camera.updateMatrixWorld(true);
		camera.updateProjectionMatrix();

		self.cameraSnapshots[chainType] = camera.toJSON();

		self.cameraSnapshots[chainType].controls = {};

		self.cameraSnapshots[chainType].controls.target = camera.controls.target.clone();
	}

	uploadGLTF(url, bClearScene, onBeforeLoad, onLoad, onProgress) {
		const self = this;
		if (!self.renderer) {
			return;
		}
		self.renderer.uploadGLTF(
			url,
			() => { // onBeforeLoad
				if (bClearScene) {
					self.renderer.clearScene();
				}
				if (onBeforeLoad) {
					onBeforeLoad(self);
				}
			},
			(gltf) => { // onLoad
				if (onLoad) {
					onLoad(self, gltf);
				}
			},
			(e) => { //onProgress            
				if (onProgress) {
					onProgress(self, e);
				}
			}
		);
	}

	changeStoneColor() {

		const self = this;

		const hexColor = self.props.stoneColor;

		const intColor = new THREE.Color(hexColor || "#ffffff").getHex();

		self.renderer.changeDiamondMaterial(intColor);
	};

	changeRingColor() {

		const self = this;

		const hexColor = self.props.ringColor;

		const intColor = new THREE.Color(hexColor || "#ffffff").getHex();

		self.renderer.changeRingMaterial(intColor);
	};
}

const Renderer = function (
	canvas_id,
	canvas_size_allocator_id,
	onReadyToUse
) {
	"use strict";

	const canvas = document.getElementById(canvas_id);
	const canvas_size_allocator = document.getElementById(canvas_size_allocator_id);

	this.onBeforeRender = function () { };

	this.onInteraction = function () { };

	this.getColorAsVector = function (color) {
		const c = this.getColor(color);
		return new THREE.Vector3(c.r, c.g, c.b);
	};

	this.getColor = function (color) {
		return new THREE.Color(color);
	};

	this.changeDiamondMaterial = (value) => {

		const color = new THREE.Color(value);

		getStoneMaterialUniform('colorCorrection', (object, uniform) => {

			uniform.value.x = color.r;
			uniform.value.y = color.g;
			uniform.value.z = color.b;
		});
	};

	this.changeRingMaterial = (value) => {

		const color = new THREE.Color(value);

		setRingMaterialValue('color', color);
	};

	this.uploadGLTF = (url, onBeforeLoad, onLoad, onProgress) => {
		if (component3d) {
			component3d.uploadGLTF(url, onBeforeLoad, onLoad, onProgress);
		}
	};

	this.forceChangeFile = (name, url, onLoad) => {
		if (component3d) {
			component3d.uploadGLTF(url, null, onLoad, null, name, true);
		}
	};

	this.forceRedraw = (bIgnore_elPIXEL) => {
		if (elPIXEL && !bIgnore_elPIXEL) {
			elPIXEL.needsUpdate = true;
		}
		component3d.forceRender(bIgnore_elPIXEL);
	}

	this.getSplineEditorScene = function () {
		return splineEditorScene;
	}

	this.clearScene = () => {

		if (!scene) {
			return;
		}

		function _clear(_node) {

			_node.traverse((node) => {
				if (node.geometry) {
					node.geometry.dispose();
				}
				if (node.material) {
					node.material.dispose();
				}
			});
			while (_node.children.length) {
				const obj = _node.children[0];
				_node.remove(obj);
			}
		}

		_clear(rootNode);
		// _clear(splineEditorScene);
		_clear(sceneSparkles);
	};

	this.getCamera = function () {
		return camera;
	};

	this.getRootNode = function () {
		return rootNode;
	};

	this.resetCamera = function (node) {
		if (component3d) {
			node = node ? node : this.getRootNode();
			component3d.resetCamera(node);
		}
	};

	this.resetNode = function (node) {
		if (component3d) {
			node = node ? node : this.getRootNode();
			component3d.resetNode(node);
		}
	};

	this.removeShadowPlane = () => {
		if (component3d) {
			component3d.removeShadowPlane();
		}
	};

	this.updateShadowPlane = function (node) {
		if (component3d) {
			node = node ? node : this.getRootNode();
			component3d.updateShadowPlane(node);
		}
	};

	this.updateDirLight = (position, intensity) => {
		if (component3d) {
			if (intensity === undefined) {
				intensity = 1.0;
			}
			component3d.updateDirLight(position, intensity);
		}
	};

	this.resizeCanvas = function (width, height) {
		if (component3d) {
			component3d.resizeCanvas(width, height);
		}
	}

	this.dispose = function () {

		this.clearScene();

		if (component3d) {
			component3d.dispose();
		}

		component3d = null;

		requestId = 0;
		camera = null; renderer = null;

		elPIXEL = null; diamondLoaders = {};
	};

	function getStoneMaterialUniform(uniform, handle) {

		if (scene) {
			scene.traverse(function (object) {
				if (object.isMesh) {

					if (object.name.toUpperCase().search('DIAMOND') > -1 ||
						object.name.toUpperCase().search('STONE') > -1) {

						handle(object, object.material.uniforms[uniform]);

						if (elPIXEL) {
							elPIXEL.needsUpdate = true;
						}
					}
				}
			});
		}
	}
	this.getStoneMaterialUniform = getStoneMaterialUniform;

	function getSparklesMaterialUniform(uniform, handle) {

		for (let id in diamondLoaders) {

			const loader = diamondLoaders[id];

			if (!loader || !loader.diamondLoader) {

				continue;
			}

			const diamondLoader = loader.diamondLoader;

			for (let i = 0; i < diamondLoader.diamonds.length; i++) {

				const diamond = diamondLoader.diamonds[i];

				for (let j = 0; j < diamond.sparkles.length; j++) {

					const sparkle = diamond.sparkles[j];

					handle(sparkle, sparkle.material.uniforms[uniform]);

					if (elPIXEL) {
						elPIXEL.needsUpdate = true;
					}
				}
			}
		}
	}
	this.getSparklesMaterialUniform = getSparklesMaterialUniform;

	function setRingMaterialValue(valueName, value) {
		if (scene) {
			scene.traverse(function (object) {

				if (object.isMesh) {

					if (object.name.toUpperCase().search('RING') > -1 ||
						object.name.toUpperCase().search('METAL') > -1) {

						const material = object.material;
						material[valueName] = value;
						material.needsUpdate = true;

						if (elPIXEL) {
							elPIXEL.needsUpdate = true;
						}
					}
				}
			});
		}
	}
	this.setRingMaterialValue = setRingMaterialValue;

	this.updateRenderer = () => {
		if (elPIXEL) {
			elPIXEL.needsUpdate = true;
		}
	};

	this.getWebGlRenderer = () => {
		return renderer;
	};

	this.getEnvCubeMap = () => {
		return envCubeMap;
	};

	// -----------------------------------

	const self = this;

	var requestId;

	var camera, scene, sceneSparkles, renderer, envCubeMap;

	var elPIXEL, diamondLoaders = {}; // map of loaders

	const numSparkles = 5;
	const sparkleScaleFactor = 2;
	const sparkleIntensityFactor = 0.5;

	const rootNode = new THREE.Object3D();
	rootNode.name = 'rootNode';

	const splineEditorScene = new THREE.Object3D();
	splineEditorScene.name = 'splineEditorScene';

	let component3d = new Component3d();

	component3d.onBeforeRender = function () {

		self.onBeforeRender();
	};

	component3d.onInteraction = function () {

		self.onInteraction();
	};

	component3d.init();

	// -----------------------------------
	// ---------

	function Component3d() {

		const self = this;

		self.onBeforeRender = function () { };

		self.onInteraction = function () { };

		self.init = function () {
			init();
			initSparkles();
			resizeCanvas();
			bindEventListeners();
			render();
		}

		self.resetNode = resetNode;

		self.resetCamera = resetCamera;

		self.updateDirLight = updateDirLight;

		var renderScene, sparkleRenderPass;
		var loadingScene, loadingCamera;

		var sparkleTexture = THREE.ImageUtils.loadTexture('../assets/jewerly/images/sparkle5.png');
		var sparkleTexture1 = THREE.ImageUtils.loadTexture('../assets/jewerly/images/sparkle3.png');
		var noiseTexture = THREE.ImageUtils.loadTexture('../assets/jewerly/images/noiseTexture.jpg');
		var sparkle1 = new ELJEWEL.Sparkle(sparkleTexture, noiseTexture);
		var sparkle2 = new ELJEWEL.Sparkle(sparkleTexture1, noiseTexture);
		var sparkleArray = [];
		var orbitRadius = 2;
		var orbitRadiusFactor = 0.1;
		var cameraHeight = 1;
		var cameraHeightFactor = 0.57;

		var pmremGenerator = null, pmremCubeUVPacker = null;

		var genCubeUrls = function (prefix, postfix) {
			return [
				prefix + 'px' + postfix, prefix + 'nx' + postfix,
				prefix + 'py' + postfix, prefix + 'ny' + postfix,
				prefix + 'pz' + postfix, prefix + 'nz' + postfix
			];
		};

		var bMainSceneReady = false;

		var hdrUrls = genCubeUrls("../assets/jewerly/images/cube_diamonds/", ".hdr");
		var hdrTextureLoader = new THREE.HDRCubeTextureLoader();
		envCubeMap = hdrTextureLoader.load(THREE.UnsignedByteType, hdrUrls, function (hdrCubeMap) {
			pmremGenerator = new THREE.PMREMGenerator(hdrCubeMap, 256);
			pmremGenerator.update(renderer);
			pmremCubeUVPacker = new THREE.PMREMCubeUVPacker(pmremGenerator.cubeLods);
			pmremCubeUVPacker.update(renderer);

			if (onReadyToUse) {
				onReadyToUse();
			}
		});

		const dirLight = new THREE.DirectionalLight(0x6699aa);

		function updateDirLight(position, intensity) {

			dirLight.position.set(
				position.x,
				position.y,
				position.z
			);

			dirLight.intensity = intensity;
		}

		function initSparkles() {

			sceneSparkles = new THREE.Scene();

			for (var j = 0; j < numSparkles; j++) {

				var copySparkle;
				if (j < 3) {
					copySparkle = sparkle1.shallowCopy();
				}
				else {
					copySparkle = sparkle2.shallowCopy();
				}
				sparkleArray.push(copySparkle);
			}
		}

		function resetNode(node) {

			node.position.copy(new THREE.Vector3());

			const box = new THREE.Box3();
			box.setFromObject(node);

			const center = new THREE.Vector3();
			box.getCenter(center);
			node.position.copy(center);
			node.position.multiplyScalar(-1);

			node.updateMatrixWorld();
		}

		function resetCamera(node) {

			const box = new THREE.Box3();
			box.setFromObject(node);

			const center = new THREE.Vector3();
			box.getCenter(center);

			const size = new THREE.Vector3();
			box.getSize(size);

			camera.position.set(size.x, size.y, 1.5 * size.z);

			cameraHeight = 1.5 * size.z * cameraHeightFactor;

			orbitRadius = Math.max(Math.max(size.x, size.y), 1.5 * size.z) * orbitRadiusFactor;
		}

		self.removeShadowPlane = () => {

			if (scene.shadowPlane) {

				scene.remove(scene.shadowPlane);

				scene.shadowPlane = null;

				elPIXEL.needsUpdate = true;
			}
		};

		self.updateShadowPlane = (node) => {
			elPIXEL.updateShadowPlane(node);
		};

		function initLoadingScene(texture) {
			loadingScene = new THREE.Scene();
			loadingScene.background = new THREE.Color(0xffffff);
			loadingCamera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.05, 100);
			loadingCamera.position.z = 1;
			loadingCamera.position.y = 0.1;
			loadingCamera.lookAt(0, 0, 0);
			let geometry = new THREE.BoxBufferGeometry(0.05, 0.05, 0.05);
			let material = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true });
			let cube = new THREE.Mesh(geometry, material);
			cube.castShadow = true;
			cube.material.map = texture;
			cube.material.needsUpdate = true;
			loadingScene.add(cube);

			let dirLight = new THREE.DirectionalLight(0xffffff);
			dirLight.position.set(1, 1, 1);
			dirLight.castShadow = true;
			dirLight.shadow.camera.top = 0.05;
			dirLight.shadow.camera.bottom = -0.05;
			dirLight.shadow.camera.left = -0.05;
			dirLight.shadow.camera.right = 0.05;
			dirLight.shadow.bias = -0.00002;
			dirLight.shadow.camera.near = 0.001;
			dirLight.shadow.camera.far = 100;
			dirLight.shadow.mapSize = new THREE.Vector2(256, 256);
			loadingScene.add(dirLight);

			let planeGeometry = new THREE.PlaneGeometry(1, 1);
			planeGeometry.rotateX(- Math.PI / 2);

			let planeMaterial = new THREE.ShadowMaterial();
			planeMaterial.opacity = 0.2;

			let plane = new THREE.Mesh(planeGeometry, planeMaterial);
			plane.position.y = -0.025;
			plane.receiveShadow = true;
			loadingScene.add(plane);
		}

		function init() {

			camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.3, 1000);
			camera.position.z = 8;
			camera.position.y = 0;
			const controls = camera.controls = new THREE.OrbitControls(camera, canvas);
			controls.screenSpacePanning = true;
			controls.addEventListener('change', function () {
				if (elPIXEL) {
					elPIXEL.needsUpdate = true;
				}
			});
			controls.addEventListener('start', function () {
				self.onInteraction();
			});

			// controls.minDistance = 3;
			// controls.maxDistance = 15;
			// controls.minPolarAngle = Math.PI/10;
			// controls.maxPolarAngle = Math.PI/2;

			// scene
			scene = new THREE.Scene();
			// scene.background = envCubeMap;
			scene.background = new THREE.Color(1, 1, 1);
			scene.add(rootNode);
			scene.add(splineEditorScene);

			renderer = new THREE.WebGLRenderer({
				canvas: canvas,
				preserveDrawingBuffer: true
			});
			renderer.toneMapping = THREE.Uncharted2ToneMapping;
			renderer.toneMappingExposure = 2;
			renderer.toneMappingWhitePoint = 1;
			// renderer.toneMapping = THREE.ReinhardToneMapping;
			// renderer.toneMapping = THREE.CineonToneMapping;
			// renderer.setClearColor(0x999999);
			renderer.gammaInput = true;
			renderer.gammaOutput = true;
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(canvas.width, canvas.height);

			const needsUpdate = true;
			const shadowsSmoothTransition = true;
			const shadowsEnableAccumulation = true;
			const shadowRadius = 3;
			const autoSAOClear = true;
			const autoShadowsClear = true;
			const saoEnabled = true;
			const saoSmoothTransition = true;
			const saoWorldRadius = 0.952;
			const saoIntensity = 0.5;
			const numShadowSamples = 100;
			const numSAOSamples = 600;
			const shadowBiasMultiplier = 0.05;
			const saoBias = 0.001;

			const pix_params = {
				saoparams: {
					intensity: saoIntensity,
					bias: saoBias,
					occlusionWorldRadius: saoWorldRadius,
					smoothTransition: saoSmoothTransition,
					samplesPerFrame: 4,
					numSamples: numSAOSamples,
					accumulative: false
				},

				groundShadow: {
					smoothTransition: true,
					numSamples: 500,
					numSamplesPerFrame: 2,
					shadowQuality: 0,
					size: 1.5,
					falloff: 2.3,
					darkness: 1.2,
					onComplete: (function () {
						elPIXEL.needsUpdate = true;
						const shadowPlane = elPIXEL.getShadowPlanePass().getShadowPlane();
						if (!scene.shadowPlane) {
							scene.add(shadowPlane);
							scene.shadowPlane = shadowPlane;
						}
					}),
					onProgress: (function (value) {
						// if(value > 0.75) {
						//   const shadowPlane = elPIXEL.getShadowPlanePass().getShadowPlane();
						//   scene.add(shadowPlane);
						// }
						// elPIXEL.needsUpdate = true;
					})
				}
			};

			dirLight.position.set(1, 2, -1);
			scene.add(dirLight);

			elPIXEL = new ELPIXEL.ELPIXEL(pix_params);

			THREE.DRACOLoader.setDecoderPath('../assets/dracolib/');
			if (isMobile) {
				THREE.DRACOLoader.setDecoderConfig({ type: 'js' });
			}

			self.uploadGLTF = (
				url,
				onBeforeLoad,
				onLoad,
				onProgress,
				forceSetName,
				forceUpload) => {

				const diamondLoadersID = forceSetName || url;

				const onGLTFLoad = function (diamondLoader, gltf) {

					gltf.name = diamondLoadersID;
					gltf.isDiamondGltf = true;

					if (onBeforeLoad) {
						onBeforeLoad(gltf);
					}

					if (!gltf.done) {

						gltf.traverse(function (object) {

							if (object.isMesh) {
								object.castShadow = true;
								object.receiveShadow = true;
								object.material.needsUpdate = true;

								if (pmremCubeUVPacker &&
									object.name.toUpperCase().search('DIAMOND') === -1 &&
									object.name.toUpperCase().search('STONE') === -1) {

									object.material.envMap = pmremCubeUVPacker.CubeUVRenderTarget.texture;
								}
							}

							if (object.name.toUpperCase().search('POINT1') > -1) {

								gltf.point1 = object;
							}

							if (object.name.toUpperCase().search('POINT2') > -1) {

								gltf.point2 = object;
							}
						});

						const diamonds = diamondLoader.diamonds;

						for (let j = 0; j < diamonds.length; j++) {

							const diamond = diamonds[j];

							for (let i = 0; i < sparkleArray.length; i++) {

								const sparkle = sparkleArray[i].shallowCopy();

								// sparkle.material.uniforms["screenTexture"].value = elPIXEL.composer_.renderTarget2.texture;

								sparkle.setIntensity(sparkleIntensityFactor);
								sceneSparkles.add(sparkle.mesh);

								sparkle.syncWithTransform(diamond.mesh.matrixWorld);

								const y = diamond.offset.y;
								const x = diamond.offset.x + (Math.random() - 0.5) * diamond.boundingRadius;
								const z = diamond.offset.z + (Math.random() - 0.5) * diamond.boundingRadius;
								sparkle.setPositionOffset(x, y, z);

								const scale = sparkleScaleFactor * (Math.random() * diamond.boundingRadius / 15 + diamond.boundingRadius / 15);
								sparkle.setScale(scale);

								diamond.addSparkle(sparkle);
							}
						}
					}

					diamondLoaders[diamondLoadersID] = {
						diamondLoader: diamondLoader,
						gltf: gltf,
						promise: null
					};

					gltf.done = true;

					bMainSceneReady = true;

					if (onLoad) {
						onLoad(gltf);
					}
				};

				if (!forceUpload && diamondLoaders[diamondLoadersID]) {

					if (diamondLoaders[diamondLoadersID].promise) {

						diamondLoaders[diamondLoadersID].promise.then(x => {

							const diamondLoader = x[0];
							const gltf = x[1];

							onGLTFLoad(diamondLoader, gltf);
						});

					} else {

						onGLTFLoad(diamondLoaders[diamondLoadersID].diamondLoader, diamondLoaders[diamondLoadersID].gltf);
					}

				} else {

					const diamondLoader = new ELJEWEL.DiamondLoader(envCubeMap, renderer);

					const dracoLoader = new THREE.DRACOLoader();

					diamondLoader.setDRACOLoader(dracoLoader);

					diamondLoaders[diamondLoadersID] = {

						diamondLoader: diamondLoader,

						gltf: null,

						promise: new Promise((res, rej) => {

							diamondLoader.load(
								url,
								(diamondLoader, gltf) => {

									onGLTFLoad(diamondLoader, gltf);

									// delete diamondLoaders[diamondLoadersID].promise;

									res([diamondLoader, gltf]);
								},
								onProgress
							);
						})
					};
				}
			};
		}

		function checkVisible(elm) {
			var rect = elm.getBoundingClientRect();
			var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
			return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
		}

		function resize(width, height) {
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
			elPIXEL.setSize(width, height);
			elPIXEL.needsUpdate = true;
		}

		function bindEventListeners() {
			window.addEventListener('resize', resizeCanvasEventListiner, false);
			resizeCanvasEventListiner();
		}

		function unbindEventListeners() {
			window.removeEventListener('resize', resizeCanvasEventListiner, false);
		}

		function resizeCanvasEventListiner(event) {
			resizeCanvas();
		}

		function resizeCanvas(width, height) {

			if (width && height) {

				canvas.style.width = width;
				canvas.style.height = height;
				canvas.width = width;
				canvas.height = height;
			}
			else {

				if (canvas_size_allocator) {

					canvas.style.display = "none";
					canvas_size_allocator.style.display = "";

					const rect = canvas_size_allocator.getBoundingClientRect();

					canvas_size_allocator.style.display = "none";
					canvas.style.display = "";

					canvas.style.width = rect.width;
					canvas.style.height = rect.height;
					canvas.width = rect.width;
					canvas.height = rect.height;
				}
				else {

					canvas.style.width = '100%';
					canvas.style.height = '100%';
					canvas.width = canvas.offsetWidth;
					canvas.height = canvas.offsetHeight;
				}
			}

			resize(canvas.width, canvas.height);
		}
		this.resizeCanvas = resizeCanvas;

		function render() {

			if (checkVisible(canvas) && bMainSceneReady && camera) {

				self.onBeforeRender();

				if (camera.controls) {
					camera.controls.update();
				}

				for (let id in diamondLoaders) {

					const loader = diamondLoaders[id];

					if (!loader || !loader.diamondLoader) {

						continue;
					}

					const diamondLoader = loader.diamondLoader;

					for (var i = 0; i < diamondLoader.diamonds.length; i++) {

						diamondLoader.diamonds[i].update(camera);
					}
				}

				if (bForceRenderIgnoreElpixel) {

					renderer.render(scene, camera);
				}
				else {

					elPIXEL.render(renderer, scene, camera);

					if (!sparkleRenderPass) {
						sparkleRenderPass = new THREE.RenderPass(sceneSparkles, camera);
						sparkleRenderPass.clear = false;
						elPIXEL.insertPass(sparkleRenderPass, 1);
						elPIXEL.needsUpdate = true;
					}

					elPIXEL.getSAOPass().enabled = true;
					elPIXEL.getBloomPass().enabled = true;

				}

				for (let id in diamondLoaders) {

					const loader = diamondLoaders[id];

					if (!loader || !loader.diamondLoader) {

						continue;
					}

					const diamondLoader = loader.diamondLoader;

					for (let i = 0; i < diamondLoader.diamonds.length; i++) {

						const diamond = diamondLoader.diamonds[i];

						for (let j = 0; j < diamond.sparkles.length; j++) {

							const sparkle = diamond.sparkles[j];

							sparkle.material.uniforms.screenTexture.value =
								elPIXEL.getEffectComposer().renderTarget2.texture;
						}
					}
				}
			}
			else {

				if (loadingScene) {

					renderer.render(loadingScene, loadingCamera);
				}
			}

			requestId = requestAnimationFrame(render);
		}
		this.forceRender = function (bIgnore_elPIXEL) {
			bForceRenderIgnoreElpixel = bIgnore_elPIXEL;
			render();
			bForceRenderIgnoreElpixel = false;
		}
		var bForceRenderIgnoreElpixel = false;

		// end of componenet3d

		this.dispose = function () {

			unbindEventListeners();

			if (camera.controls) {
				camera.controls.dispose();
				camera.controls = null;
			}
			if (scene) {
				scene.traverse((node) => {
					if (node.geometry) {
						node.geometry.dispose();
					}
					if (node.material) {
						node.material.dispose();
					}
				});
			}
			if (sceneSparkles) {
				sceneSparkles.traverse((node) => {
					if (node.geometry) {
						node.geometry.dispose();
					}
					if (node.material) {
						node.material.dispose();
					}
				});
			}
			if (requestId) {
				cancelAnimationFrame(requestId);
			}
			requestId = 0;
		};
		if (bUseGUI && !bUseSplineEditor) {
			const gui = new dat.GUI();
			const stoneFolder = gui.addFolder('Stone');
			const stoneData = {
				'colorCorrection': 0xffffff,
				'boostFactors': new THREE.Color(0.892, 0.892, 0.98595025).getHex(),
				'Absorbption': 0x0,
				'geometryFactor': 0.28,
				'distanceOffset': 0,
				'squashFactor': 0.98,
				'normalOffset': 0,
				'n2': 2.4,
				'rIndexDelta': 0.012,
				'envMapIntensity': 1.0
			};
			stoneFolder.addColor(stoneData, 'colorCorrection').onChange(x => {
				getStoneMaterialUniform('colorCorrection', (object, uniform) => {
					const color = new THREE.Color(x);
					uniform.value.x = color.r;
					uniform.value.y = color.g;
					uniform.value.z = color.b;
				});
			});
			stoneFolder.addColor(stoneData, 'boostFactors').onChange(x => {
				getStoneMaterialUniform('boostFactors', (object, uniform) => {
					const color = new THREE.Color(x);
					uniform.value.x = color.r;
					uniform.value.y = color.g;
					uniform.value.z = color.b;
				});
			});
			stoneFolder.addColor(stoneData, 'Absorbption').onChange(x => {
				getStoneMaterialUniform('Absorbption', (object, uniform) => {
					const color = new THREE.Color(x);
					uniform.value.x = color.r;
					uniform.value.y = color.g;
					uniform.value.z = color.b;
				});
			});
			stoneFolder.add(stoneData, 'geometryFactor', 0, 1, 0.005).onChange(x => {
				getStoneMaterialUniform('geometryFactor', (object, uniform) => {
					uniform.value = x;
				});
			});
			stoneFolder.add(stoneData, 'distanceOffset', 0, 10, 0.1).onChange(x => {
				getStoneMaterialUniform('distanceOffset', (object, uniform) => {
					uniform.value = x;
				});
			});
			stoneFolder.add(stoneData, 'squashFactor', 0, 1, 0.005).onChange(x => {
				getStoneMaterialUniform('squashFactor', (object, uniform) => {
					uniform.value = x;
				});
			});
			stoneFolder.add(stoneData, 'normalOffset', -1, 1, 0.005).onChange(x => {
				getStoneMaterialUniform('normalOffset', (object, uniform) => {
					uniform.value = x;
				});
			});
			stoneFolder.add(stoneData, 'n2', 0, 10, 0.01).onChange(x => {
				getStoneMaterialUniform('n2', (object, uniform) => {
					uniform.value = x;
				});
			});
			stoneFolder.add(stoneData, 'rIndexDelta', 0, 1, 0.001).onChange(x => {
				getStoneMaterialUniform('rIndexDelta', (object, uniform) => {
					uniform.value = x;
				});
			});
			stoneFolder.add(stoneData, 'envMapIntensity', 0, 1, 0.001).onChange(x => {
				getStoneMaterialUniform('envMapIntensity', (object, uniform) => {
					uniform.value = x;
				});
			});
			// -----------------------------------------
			const sparkleFolder = gui.addFolder('Sparkle');
			const sparkleData = {
				'scale': sparkleScaleFactor,
				'rotation': 0,
				'intensity': sparkleIntensityFactor
			};
			sparkleFolder.add(sparkleData, 'scale', 0, 10, 0.001).onChange(x => {
				getSparklesMaterialUniform('scale', (object, uniform) => {
					uniform.value = x;
				});
			});
			sparkleFolder.add(sparkleData, 'rotation', 0, 10, 0.001).onChange(x => {
				getSparklesMaterialUniform('rotation', (object, uniform) => {
					uniform.value = x;
				});
			});
			sparkleFolder.add(sparkleData, 'intensity', 0, 10, 0.001).onChange(x => {
				getSparklesMaterialUniform('intensity', (object, uniform) => {
					uniform.value = x;
				});
			});
			// -----------------------------------------
			const metalFolder = gui.addFolder('Metal');
			const metalData = {
				'color': 0xffffff,
				'metalness': 0.5,
				'roughness': 0.5,
				'refractionRatio': 0.98,
				'envMapIntensity': 1
			};
			metalFolder.addColor(metalData, 'color').onChange(x => {
				const color = new THREE.Color(x);
				setRingMaterialValue('color', color);
			});
			metalFolder.add(metalData, 'metalness', 0, 1, 0.1).onChange(x => {
				setRingMaterialValue('metalness', x);
			});
			metalFolder.add(metalData, 'roughness', 0, 1, 0.1).onChange(x => {
				setRingMaterialValue('roughness', x);
			});
			metalFolder.add(metalData, 'refractionRatio', 0, 1, 0.1).onChange(x => {
				setRingMaterialValue('refractionRatio', x);
			});
			metalFolder.add(metalData, 'envMapIntensity', 0, 1, 0.1).onChange(x => {
				setRingMaterialValue('envMapIntensity', x);
			});
		}
	}
};

function getURLQueryParams(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(url);
	return results == null ? null : results[1];
}

function getrndstr() {
	return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
}

function isEqualsArray(array1, array2) {
	// if the other array is a falsy value, return
	if (!array1 || !array2)
		return false;

	// compare lengths - can save a lot of time 
	if (array1.length !== array2.length)
		return false;

	for (var i = 0, l = array1.length; i < l; i++) {
		// Check if we have nested arrays
		if (array1[i] instanceof Array && array2[i] instanceof Array) {
			// recurse into the nested arrays
			if (!isEqualsArray(array1[i], array2[i]))
				return false;
		}
		else if (array1[i] !== array2[i]) {
			// Warning - two different object instances will never be equal: {x:20} != {x:20}
			return false;
		}
	}
	return true;
}

function getExtents(objects) {
	"use strict";

	var bounding_box;

	function getBoundingBoxRecursevly(objects) {

		for (let i = 0; i < objects.length; i++) {

			const object = objects[i];

			if (object) {
				if (!bounding_box) {
					bounding_box = new THREE.Box3().setFromObject(object);
					continue;
				}

				bounding_box.union(new THREE.Box3().setFromObject(object));
			}

			getBoundingBoxRecursevly(object.children);
		}
	}

	getBoundingBoxRecursevly(objects);

	return bounding_box;
}

function zoomToFit(objects, camera, controls, scale) {

	"use strict";

	function fitCameraToObject(camera, center, radius, controls) {

		const tmp = center.clone();
		camera.worldToLocal(tmp);

		camera.translateX(tmp.x);
		camera.translateY(tmp.y);

		if (tmp.z >= 0) {
			camera.translateZ(tmp.z + 1.0);
		}

		if (controls) {
			controls.target.copy(center);
		}

		camera.lookAt(center);

		scale = scale || 1.0; // 0.618;

		const newDist = radius / Math.sin((camera.fov * (Math.PI / 180)) / 2) * scale;
		const axis = camera.position.clone();
		axis.sub(center);
		axis.setLength(newDist);
		axis.add(center);
		camera.position.copy(axis);

		if (controls) {
			controls.object.position.copy(camera.position);
			controls.object.lookAt(controls.target);
			controls.update();
		}
	}

	var bounding_box = getExtents(objects);

	if (!bounding_box) {
		return false;
	}

	const target = new THREE.Sphere();

	bounding_box.getBoundingSphere(target);

	fitCameraToObject(camera, target.center, target.radius, controls);

	return true;
}

function getPointPosition(point_object) {
	return point_object.localToWorld(new THREE.Vector3());
}

function worldToLocal(vec3, object) {
	return object.worldToLocal(vec3.clone());
}

// Rotate an object around an arbitrary axis in object space
function rotateAroundObjectAxis(object, axis, radians) {
	var rotObjectMatrix = new THREE.Matrix4();
	rotObjectMatrix.makeRotationAxis(axis.normalize(), radians);
	object.matrix.multiply(rotObjectMatrix);
	object.rotation.setFromRotationMatrix(object.matrix);
}

// Rotate an object around an arbitrary axis in world space       
function rotateAroundWorldAxis(object, axis, radians) {
	var rotWorldMatrix = new THREE.Matrix4();
	rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
	rotWorldMatrix.multiply(object.matrix);
	object.matrix = rotWorldMatrix;
	object.rotation.setFromRotationMatrix(object.matrix);
}

function isOdd(num) { return (num % 2 ? true : false); }

const isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
	/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4));