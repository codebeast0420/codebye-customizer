//
//
//

// ?aquafiore=true&usesplineeditor=true // for editor
// ?aquafiore=true&usespline=true // only for splines

import * as THREE from './lib/three.diamond.drawer.extension.js'; 

const ComponentSetup = {
    bUseGUI : getURLQueryParams('usegui'),
    bUseSpline : getURLQueryParams('usespline'),
    bUseSplineEditor : getURLQueryParams('usesplineeditor')
};

const bUseGUI = ComponentSetup.bUseGUI;
// const bUseSpline = ComponentSetup.bUseSpline;
const bUseSplineEditor = ComponentSetup.bUseSplineEditor;

export { 
    getURLQueryParams, 
    Renderer, 
    ComponentSetup, 
    isEqualsArray,
    getrndstr,
    rotateAroundObjectAxis,
    rotateAroundWorldAxis,
    getPointPosition,
    worldToLocal,
    zoomToFit,
    isOdd,
    isMobile
}; 

require ('./lib/EffectComposer.js');
require ('./lib/RGBELoader.js');
require ('./lib/EffectComposer.js');
require ('./lib/PMREMGenerator.js');
require ('./lib/PMREMCubeUVPacker.js');
require ('./lib/HDRCubeTextureLoader.js');
require ('./lib/DRACOLoader');
require ('./lib/GLTFLoader.js');
require ('./lib/OrbitControls.js');
require ('./lib/RenderPass.js');
require ('./lib/ShaderPass.js');
require ('./lib/CopyShader.js');
require ('./lib/LuminosityHighPassShader.js');
require ('./lib/ConvolutionShader');

const ELPIXEL = require('./lib/ELPIXEL').ELPIXEL; 
const ELJEWEL = require('./lib/ELJEWEL').ELJEWEL;

let dat = null;

if (bUseGUI || bUseSplineEditor) {
    dat = require('dat.gui');
}

function Renderer (
    canvas_id,
    canvas_size_allocator_id,
    onReadyToUse
) {
    "use strict";

    const canvas = document.getElementById(canvas_id);
    const canvas_size_allocator = document.getElementById(canvas_size_allocator_id);

    this.onBeforeRender = function(){};

    this.onInteraction = function(){};

    this.getColorAsVector = function(color) {
        const c = this.getColor(color);
        return new THREE.Vector3(c.r, c.g, c.b);
    };

    this.getColor = function(color) {
        return new THREE.Color(color);
    };

    this.changeDiamondMaterial = (value) => {

        const color = new THREE.Color(value);

        getStoneMaterialUniform( 'colorCorrection', (object, uniform)=> {

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
        if(component3d) {
            component3d.uploadGLTF(url, onBeforeLoad, onLoad, onProgress);
        }
    };

    this.forceChangeFile = (name, url, onLoad) => {
        if(component3d) {
            component3d.uploadGLTF(url, null, onLoad, null, name, true);
        }
    };

    this.forceRedraw = (bIgnore_elPIXEL) => {
        if(elPIXEL && !bIgnore_elPIXEL){
            elPIXEL.needsUpdate = true;
        }
        component3d.forceRender(bIgnore_elPIXEL);
    }

    this.getSplineEditorScene = function(){
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
            while(_node.children.length) {
                const obj = _node.children[0];
                _node.remove(obj);
            }
        }

        _clear(rootNode);
        // _clear(splineEditorScene);
        _clear(sceneSparkles);
    };

    this.getCamera = function(){
        return camera;
    };

    this.getRootNode = function(){
        return rootNode;
    };

    this.resetCamera = function(node){
        if(component3d) {
            node = node ? node : this.getRootNode();
            component3d.resetCamera(node);
        }
    };

    this.resetNode = function(node){
        if(component3d) {
            node = node ? node : this.getRootNode();
            component3d.resetNode(node);
        }
    };

    this.removeShadowPlane = () => {
        if(component3d) {
            component3d.removeShadowPlane();    
        }
    };

    this.updateShadowPlane = function(node){
        if(component3d) {
            node = node ? node : this.getRootNode();
            component3d.updateShadowPlane(node);    
        }
    };

    this.updateDirLight = (position, intensity) => {
        if(component3d) {
            if (intensity === undefined) {
                intensity = 1.0;
            }
            component3d.updateDirLight(position, intensity);    
        }
    };

    this.resizeCanvas = function(width, height) {
        if(component3d) {
            component3d.resizeCanvas(width, height);    
        }
    }

    this.dispose = function() {

        this.clearScene();
      
        if(component3d) {
            component3d.dispose();
        }

        component3d = null;

        requestId = 0;
        camera = null; renderer = null;

        elPIXEL = null; diamondLoaders = {};
    };

    function getStoneMaterialUniform( uniform, handle ) {

        if (scene) {
            scene.traverse( function(object) {
                if(object.isMesh) {

                    if (object.name.toUpperCase().search('DIAMOND') > -1 ||
                        object.name.toUpperCase().search('STONE') > -1) {
     
                        handle(object, object.material.uniforms[uniform]);

                        if(elPIXEL){
                            elPIXEL.needsUpdate = true;
                        }
                    }
                }
            });
        }
    }
    this.getStoneMaterialUniform = getStoneMaterialUniform;

    function getSparklesMaterialUniform( uniform, handle ) {
        
        for (let id in diamondLoaders) {

            const loader = diamondLoaders[id];

            if (!loader || !loader.diamondLoader) {

                continue;
            }

            const diamondLoader = loader.diamondLoader;
             
            for(let i = 0; i < diamondLoader.diamonds.length; i++) {

                const diamond = diamondLoader.diamonds[i];

                for (let j = 0; j < diamond.sparkles.length; j++) {

                    const sparkle = diamond.sparkles[j];

                    handle(sparkle, sparkle.material.uniforms[uniform]);

                    if(elPIXEL){
                        elPIXEL.needsUpdate = true;
                    }
                }
            }
        }
    }
    this.getSparklesMaterialUniform = getSparklesMaterialUniform;

    function setRingMaterialValue( valueName, value ) {
        if (scene) {
            scene.traverse( function(object) {

                if(object.isMesh) {

                    if (object.name.toUpperCase().search('RING') > -1 || 
                        object.name.toUpperCase().search('METAL') > -1) {

                        const material = object.material;
                        material[valueName] = value;
                        material.needsUpdate = true;

                        if(elPIXEL){
                            elPIXEL.needsUpdate = true;
                        }
                    }
                }
            });
        }
    }
    this.setRingMaterialValue = setRingMaterialValue;

    this.updateRenderer = () => {
        if(elPIXEL){
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

    component3d.onBeforeRender = function(){

        self.onBeforeRender();
    };

    component3d.onInteraction = function(){

        self.onInteraction();
    };

    component3d.init();

    // -----------------------------------
    // ---------

    function Component3d() {

        const self = this;

        self.onBeforeRender = function(){};

        self.onInteraction = function(){};

        self.init = function(){            
            init();
            initSparkles();
            resizeCanvas();
            bindEventListeners();
            render();
        };

        self.resetNode = resetNode;

        self.resetCamera = resetCamera;

        self.updateDirLight = updateDirLight;

        var renderScene, sparkleRenderPass;
        var loadingScene, loadingCamera;

        var sparkleTexture = THREE.ImageUtils.loadTexture( '../assets/jewerly/images/sparkle5.png' );
        var sparkleTexture1 = THREE.ImageUtils.loadTexture( '../assets/jewerly/images/sparkle3.png' );
        var noiseTexture = THREE.ImageUtils.loadTexture( '../assets/jewerly/images/noiseTexture.jpg' );
        var sparkle1 = new ELJEWEL.Sparkle(sparkleTexture, noiseTexture);
        var sparkle2 = new ELJEWEL.Sparkle(sparkleTexture1, noiseTexture);
        var sparkleArray = [];
        var orbitRadius = 2;
        var orbitRadiusFactor = 0.1;
        var cameraHeight = 1;
        var cameraHeightFactor = 0.57;

        var pmremGenerator = null, pmremCubeUVPacker = null;

        var genCubeUrls = function( prefix, postfix ) {
            return [
                prefix + 'px' + postfix, prefix + 'nx' + postfix,
                prefix + 'py' + postfix, prefix + 'ny' + postfix,
                prefix + 'pz' + postfix, prefix + 'nz' + postfix
            ];
        };
        
        var bMainSceneReady = false;

        var hdrUrls = genCubeUrls( "../assets/jewerly/images/cube_diamonds/", ".hdr" );
        var hdrTextureLoader = new THREE.HDRCubeTextureLoader();
        envCubeMap = hdrTextureLoader.load( THREE.UnsignedByteType, hdrUrls, function ( hdrCubeMap ) {
            pmremGenerator = new THREE.PMREMGenerator( hdrCubeMap, 256 );
            pmremGenerator.update( renderer );
            pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
            pmremCubeUVPacker.update( renderer );

            if (onReadyToUse) {
                onReadyToUse();
            }
        });

        const dirLight = new THREE.DirectionalLight(0x6699aa);

        function updateDirLight(position, intensity){

            dirLight.position.set(
                position.x,
                position.y,
                position.z
            );

            dirLight.intensity = intensity;
        }

        function initSparkles() {

            sceneSparkles = new THREE.Scene();

            for(var j=0; j < numSparkles; j++) {
                
                var copySparkle;
                if(j < 3) {
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
            let geometry = new THREE.BoxBufferGeometry( 0.05, 0.05, 0.05 );
            let material = new THREE.MeshPhongMaterial( {color: 0xffffff, transparent: true} );
            let cube = new THREE.Mesh( geometry, material );
            cube.castShadow = true;
            cube.material.map = texture;
            cube.material.needsUpdate = true;
            loadingScene.add( cube );

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

            let planeGeometry = new THREE.PlaneGeometry( 1, 1 );
            planeGeometry.rotateX( - Math.PI / 2 );

            let planeMaterial = new THREE.ShadowMaterial();
            planeMaterial.opacity = 0.2;

            let plane = new THREE.Mesh( planeGeometry, planeMaterial );
            plane.position.y = -0.025;
            plane.receiveShadow = true;
            loadingScene.add( plane );
        }

        function init() {

            camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.3, 1000);
            camera.position.z = 8;
            camera.position.y = 0;
            const controls = camera.controls = new THREE.OrbitControls(camera, canvas);
            controls.screenSpacePanning = true;
            controls.addEventListener('change', function(){
                if(elPIXEL){
                    elPIXEL.needsUpdate = true;
                }
            });
            controls.addEventListener('start', function(){
                self.onInteraction();
            });

            // controls.minDistance = 6;
            // controls.maxDistance = 10;
            // controls.minPolarAngle = Math.PI/10;
            // controls.maxPolarAngle = Math.PI/2;

            // scene
            scene = new THREE.Scene();
            // scene.background = envCubeMap;
            scene.background = new THREE.Color(0.95, 0.95, 0.95);
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
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( canvas.width, canvas.height );

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
                    shadowQuality:0,
                    size: 1.5,
                    falloff: 2.3,
                    darkness: 1.2,
                    onComplete: (function() {
                        elPIXEL.needsUpdate = true;
                        const shadowPlane = elPIXEL.getShadowPlanePass().getShadowPlane();
                        if (!scene.shadowPlane) {
                            scene.add(shadowPlane);
                            scene.shadowPlane = shadowPlane;
                        }
                    }),
                    onProgress: (function(value) {
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

            THREE.DRACOLoader.setDecoderPath( '../assets/dracolib/' );
            if (isMobile()) {
                THREE.DRACOLoader.setDecoderConfig( { type: 'js' } );
            }

            self.uploadGLTF = (
                url, 
                onBeforeLoad, 
                onLoad, 
                onProgress,
                forceSetName,
                forceUpload) => {
                    
                const diamondLoadersID = forceSetName || url;
                
                const onGLTFLoad = function(diamondLoader, gltf) {

                    gltf.name = diamondLoadersID;
                    gltf.isDiamondGltf = true;

                    if (onBeforeLoad) {
                        onBeforeLoad(gltf);
                    }

                    if (!gltf.done) {

                        gltf.traverse( function(object) {

                            if(object.isMesh) {
                                object.castShadow = true;
                                object.receiveShadow = true;
                                object.material.needsUpdate = true;

                                if (pmremCubeUVPacker && 
                                    object.name.toUpperCase().search('DIAMOND') === -1 && 
                                    object.name.toUpperCase().search('STONE') === -1 ) {

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

                        for(let j = 0; j < diamonds.length; j++) {

                            const diamond = diamonds[j];

                            for(let i = 0; i < sparkleArray.length; i++) {

                                const sparkle = sparkleArray[i].shallowCopy();

                                // sparkle.material.uniforms["screenTexture"].value = elPIXEL.composer_.renderTarget2.texture;

                                sparkle.setIntensity(sparkleIntensityFactor);
                                sceneSparkles.add(sparkle.mesh);

                                sparkle.syncWithTransform(diamond.mesh.matrixWorld);

                                const y = diamond.offset.y;
                                const x = diamond.offset.x + (Math.random() - 0.5) * diamond.boundingRadius;
                                const z = diamond.offset.z + (Math.random() - 0.5) * diamond.boundingRadius;
                                sparkle.setPositionOffset(x, y, z);

                                const scale = sparkleScaleFactor * (Math.random()*diamond.boundingRadius/15 + diamond.boundingRadius/15);
                                sparkle.setScale(scale);
                                
                                diamond.addSparkle(sparkle);
                            }
                        }
                    }

                    diamondLoaders[diamondLoadersID] = {
                        diamondLoader : diamondLoader,
                        gltf : gltf,
                        promise : null
                    };

                    gltf.done = true;

                    bMainSceneReady = true;
                    
                    if (onLoad) {
                        onLoad(gltf);
                    }
                };

                if (!forceUpload && diamondLoaders[diamondLoadersID]) {

                    if (diamondLoaders[diamondLoadersID].promise) {

                        diamondLoaders[diamondLoadersID].promise.then( x => {

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

                    diamondLoader.setDRACOLoader( dracoLoader );

                    diamondLoaders[diamondLoadersID] = {

                        diamondLoader : diamondLoader,

                        gltf : null,

                        promise : new Promise( (res, rej) => {

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

        function resizeCanvasEventListiner(event){
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
                    canvas.style.height= '100%';
                    canvas.width = canvas.offsetWidth;
                    canvas.height = canvas.offsetHeight;
                }
            }

            resize(canvas.width,canvas.height);
        }
        this.resizeCanvas = resizeCanvas;

        function render() {

            if(checkVisible(canvas) && bMainSceneReady && camera) {

                self.onBeforeRender();

                if (camera.controls){
                    camera.controls.update();
                }

                for (let id in diamondLoaders) {

                    const loader = diamondLoaders[id];

                    if (!loader || !loader.diamondLoader) {

                        continue;
                    }

                    const diamondLoader = loader.diamondLoader;

                    for(var i = 0; i < diamondLoader.diamonds.length; i++) {

                        diamondLoader.diamonds[i].update(camera);
                    }
                }

                if (bForceRenderIgnoreElpixel) {

                    renderer.render(scene, camera);
                }
                else {

                    elPIXEL.render(renderer, scene, camera);

                    if(!sparkleRenderPass) {
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

                    for(let i = 0; i < diamondLoader.diamonds.length; i++) {

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

                if(loadingScene) {

                    renderer.render(loadingScene, loadingCamera);
                }
            }

            requestId = requestAnimationFrame(render);
        }
        this.forceRender = function(bIgnore_elPIXEL) {
            bForceRenderIgnoreElpixel = bIgnore_elPIXEL;
            render();
            bForceRenderIgnoreElpixel = false;
        }
        var bForceRenderIgnoreElpixel = false;

        // end of componenet3d

        this.dispose = function() {
            
            unbindEventListeners();

            if (camera.controls){
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
            if (requestId){
                cancelAnimationFrame(requestId);
            }
            requestId = 0;
        };

        if (bUseGUI && !bUseSplineEditor)
        {
            const gui = new dat.GUI();

            const stoneFolder = gui.addFolder( 'Stone' );

            const stoneData = {
                'colorCorrection': 0xffffff,
                'boostFactors' :  new THREE.Color(0.892, 0.892, 0.98595025).getHex(),
                'Absorbption' :  0x0,
                'geometryFactor' : 0.28,
                'distanceOffset' : 0,
                'squashFactor' : 0.98,
                'normalOffset' : 0,
                'n2' : 2.4,
                'rIndexDelta' : 0.012,
                'envMapIntensity' : 1.0
            };

            stoneFolder.addColor( stoneData, 'colorCorrection' ).onChange( x => {

                getStoneMaterialUniform('colorCorrection', (object, uniform) => {
                    const color = new THREE.Color(x);
                    uniform.value.x = color.r;
                    uniform.value.y = color.g;
                    uniform.value.z = color.b;
                });
            });

            stoneFolder.addColor( stoneData, 'boostFactors' ).onChange( x => {

                getStoneMaterialUniform('boostFactors', (object, uniform) => {
                    const color = new THREE.Color(x);
                    uniform.value.x = color.r;
                    uniform.value.y = color.g;
                    uniform.value.z = color.b;
                });
            });

            stoneFolder.addColor( stoneData, 'Absorbption' ).onChange( x => {

                getStoneMaterialUniform('Absorbption', (object, uniform) => {
                    const color = new THREE.Color(x);
                    uniform.value.x = color.r;
                    uniform.value.y = color.g;
                    uniform.value.z = color.b;
                });
            });

            stoneFolder.add( stoneData, 'geometryFactor', 0, 1, 0.005 ).onChange( x => {

                getStoneMaterialUniform('geometryFactor', (object, uniform) => {
                    uniform.value = x;
                });
            });

            stoneFolder.add( stoneData, 'distanceOffset', 0, 10, 0.1 ).onChange( x => {

                getStoneMaterialUniform('distanceOffset', (object, uniform) => {
                    uniform.value = x;
                });
            });

            stoneFolder.add( stoneData, 'squashFactor', 0, 1, 0.005 ).onChange( x => {

                getStoneMaterialUniform('squashFactor', (object, uniform) => {
                    uniform.value = x;
                });
            });

            stoneFolder.add( stoneData, 'normalOffset', -1, 1, 0.005 ).onChange( x => {

                getStoneMaterialUniform('normalOffset', (object, uniform) => {
                    uniform.value = x;
                });
            });

            stoneFolder.add( stoneData, 'n2', 0, 10, 0.01 ).onChange( x => {

                getStoneMaterialUniform('n2', (object, uniform) => {
                    uniform.value = x;
                });
            });

            stoneFolder.add( stoneData, 'rIndexDelta', 0, 1, 0.001 ).onChange( x => {

                getStoneMaterialUniform('rIndexDelta', (object, uniform) => {
                    uniform.value = x;
                });
            });

            stoneFolder.add( stoneData, 'envMapIntensity', 0, 1, 0.001 ).onChange( x => {

                getStoneMaterialUniform('envMapIntensity', (object, uniform) => {
                    uniform.value = x;
                });
            });

            // -----------------------------------------

            const sparkleFolder = gui.addFolder( 'Sparkle' );

            const sparkleData = {
                'scale': sparkleScaleFactor,
                'rotation': 0,
                'intensity': sparkleIntensityFactor
            };

            sparkleFolder.add( sparkleData, 'scale', 0, 10, 0.001 ).onChange( x => {

                getSparklesMaterialUniform('scale', (object, uniform) => {
                    uniform.value = x;
                });
            });

            sparkleFolder.add( sparkleData, 'rotation', 0, 10, 0.001 ).onChange( x => {

                getSparklesMaterialUniform('rotation', (object, uniform) => {
                    uniform.value = x;
                });
            });

            sparkleFolder.add( sparkleData, 'intensity', 0, 10, 0.001 ).onChange( x => {

                getSparklesMaterialUniform('intensity', (object, uniform) => {
                    uniform.value = x;
                });
            });

            // -----------------------------------------

            const metalFolder = gui.addFolder( 'Metal' );

            const metalData = {
                'color': 0xffffff,
                'metalness' : 0.5,
                'roughness' : 0.5,
                'refractionRatio' : 0.98,
                'envMapIntensity' : 1
            };

            metalFolder.addColor( metalData, 'color' ).onChange( x => {

                const color = new THREE.Color(x);

                setRingMaterialValue('color', color);
            });

            metalFolder.add( metalData, 'metalness', 0, 1, 0.1 ).onChange( x => {

                setRingMaterialValue('metalness', x);
            });

            metalFolder.add( metalData, 'roughness', 0, 1, 0.1 ).onChange( x => {

                setRingMaterialValue('roughness', x);
            });

            metalFolder.add( metalData, 'refractionRatio', 0, 1, 0.1 ).onChange( x => {

                setRingMaterialValue('refractionRatio', x);
            });

            metalFolder.add( metalData, 'envMapIntensity', 0, 1, 0.1 ).onChange( x => {

                setRingMaterialValue('envMapIntensity', x);
            });
        }
    }
}

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

    for (var i = 0, l=array1.length; i < l; i++) {
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

    function getBoundingBoxRecursevly(objects){

        for ( let i = 0; i < objects.length; i++) {

            const object = objects[i];

            if ( object) {
                if (!bounding_box) {
                    bounding_box = new THREE.Box3().setFromObject( object );
                    continue;
                }

                bounding_box.union( new THREE.Box3().setFromObject( object ) );
            }

            getBoundingBoxRecursevly(object.children);
        }
    }

    getBoundingBoxRecursevly(objects);

    return bounding_box;
}

function zoomToFit( objects, camera, controls, scale ) {

    "use strict";

    function fitCameraToObject (camera, center, radius, controls) {

        const tmp = center.clone();
        camera.worldToLocal(tmp);

        camera.translateX(tmp.x);
        camera.translateY(tmp.y);

        if (tmp.z >= 0) 
        {
            camera.translateZ(tmp.z + 1.0);
        }

        if (controls)
        {
            controls.target.copy(center);
        }
        
        camera.lookAt(center);

        scale = scale || 1.0; // 0.618;

        const newDist = radius / Math.sin( (camera.fov * (Math.PI / 180)) / 2 ) * scale;
        const axis = camera.position.clone();
        axis.sub(center);
        axis.setLength(newDist);
        axis.add(center);
        camera.position.copy(axis);

        if (controls)
        {
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

    fitCameraToObject(camera, target.center, target.radius, controls );

    return true;
}

function getPointPosition(point_object){
    return point_object.localToWorld(new THREE.Vector3());
}

function worldToLocal(vec3, object){
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

function isOdd(num) { return (num % 2 ? true : false);}

function isMobile(){
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));
}