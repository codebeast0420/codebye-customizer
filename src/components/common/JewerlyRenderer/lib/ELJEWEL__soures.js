
import * as THREE from './three.diamond.drawer.extension.js';

const ELJEWEL = {};

export { ELJEWEL }; 

ELJEWEL.DiamondLoader = class {

    constructor(envCubeMap, renderer) {
        const loadingManager = new THREE.LoadingManager();
        loadingManager.onProgress = function(e, t, o) {
            console.log(e, t, o)
        };
        this.envCubeMap = envCubeMap;
        this.renderer = renderer;
        this.loader = new THREE.GLTFLoader(loadingManager);
        this.prototypeMaterials = [];
        this.diamonds = [];
    }
    setDRACOLoader(dracoLoader){
        this.loader.setDRACOLoader(dracoLoader);
    }
    load(url, onLoad, onProgress) {
        this.onObjectLoad = onLoad;
        this.loader.load(url, this.process.bind(this), (e) => {
            if (onProgress) {
                onProgress(e.loaded / e.total * 100);
            }
        });
    }
    process(gltf) {
        this.gltf = gltf;
        this.findDiamondPrototypes();
        this.buildDiamondScene();
    }
    findDiamondPrototypes() {
        const self = this;
        this.gltf.scene.traverse(function(node) {

            if (node.isMesh && 
                (node.name.toUpperCase().search("DIAMOND") > -1  ||
                 node.name.toUpperCase().search("STONE") > -1)) {

                const material_name = node.name.substring(0, 8);
                
                if (!self.prototypeMaterials[material_name]) {
                    self.prototypeMaterials[material_name] = node;
                }
            }
        });
    }
    buildDiamondScene() {

        for (let material_name in this.prototypeMaterials) {

            const material = this.prototypeMaterials[material_name];
            const diamond_material = new ELJEWEL.DiamondMaterial(material, this.envCubeMap, this.renderer);
            this.prototypeMaterials[material_name] = diamond_material;
        }

        const self = this;

        this.gltf.scene.updateMatrixWorld();
        
        this.gltf.scene.traverse(function(node) {

            if (node.isMesh && node.material && self.envCubeMap) {

                node.material.envMap = self.envCubeMap;
            }

            if (node.isMesh && 
                (node.name.toUpperCase().search("DIAMOND") > -1  ||
                 node.name.toUpperCase().search("STONE") > -1)) {
                
                const material_name = node.name.substring(0, 8);
                
                if (self.prototypeMaterials[material_name]) {

                    const material = self.prototypeMaterials[material_name];

                    const diamond = new ELJEWEL.Diamond(node, material);

                    self.diamonds.push(diamond);
                }
            }
        });
        
        if (this.onObjectLoad) { 
            
            this.onObjectLoad(this, this.gltf.scene);
        }
    }
};

ELJEWEL.Diamond = class {

    constructor(mesh, material) {
        this.mesh = mesh;
        this.mesh.material = material.clone();
        this.sparkles = [];
        this.mesh.geometry.computeBoundingBox();
        this.offset = new THREE.Vector3();
        this.mesh.geometry.boundingBox.getCenter(this.offset);
        this.mesh.material.uniforms.centreOffset.value.copy(this.offset);
        this.mesh.geometry.computeBoundingSphere();
        this.boundingRadius = this.mesh.geometry.boundingSphere.radius;
        this.mesh.material.uniforms.radius.value = this.boundingRadius;
    }
    setPosition(x, y, z) {
        this.mesh.position.set(x, y, z);
    }
    setRotation(x, y, z) {
        this.mesh.rotation.set(x, y, z);
    }
    setQuaternion(x, y, z, w) {
        this.mesh.quaternion.set(x, y, z, w);
    }
    setScale(x, y, z) {

        this.mesh.scale.set(x, y, z);

        for (let i = 0; i < this.sparkles.length; i++) { 
            
            this.sparkles[i].setScale(x);
        }
    }
    setTransform(matrix) {
        this.mesh.matrix.copy(matrix);
    }
    update(camera) {

        let v = new THREE.Vector3();

        for (let i = 0; i < this.sparkles.length; i++) {

            this.sparkles[i].syncWithTransform(this.mesh.matrixWorld);

            v.copy(camera.position);
            v.sub(this.sparkles[i].mesh.position);
            v.normalize();

            const v_summ = v.x + v.y + v.z;

            this.sparkles[i].setRotation(v_summ * this.sparkles[i].rotationSpeedFactor);
            
            this.sparkles[i].alignWithCamera(camera);
        }
    }
    addSparkle(sparkle) {

        this.sparkles.push(sparkle);
    }
};

ELJEWEL.DiamondMaterial = class {
    constructor(mesh, envMap, renderer) {
        this.renderer = renderer;
        this.geometry = null;
        this.mesh = null;
        this.normalBakeHelperMesh = null;
        this.envMap = envMap || mesh.material.envMap;
        this.cubeCamera = new THREE.CubeCamera(0.01, 100, 1024);
        this.localScene = new THREE.Scene();
        this.localScene.add(this.cubeCamera);
        this.material = new THREE.ShaderMaterial();
        this.material.extensions = ELJEWEL.diamondMaterial.extensions;
        this.material.defines = ELJEWEL.diamondMaterial.defines;
        this.material.uniforms = THREE.UniformsUtils.clone(ELJEWEL.diamondMaterial.uniforms);
        this.material.uniforms.envMap.value = this.envMap;
        this.material.vertexShader = ELJEWEL.diamondMaterial.vertexShader;
        this.material.fragmentShader = ELJEWEL.diamondMaterial.fragmentShader;
        this.cubeCamera.renderTarget.texture.generateMipmaps = false;
        this.cubeCamera.renderTarget.texture.magFilter = THREE.NearestFilter;
        this.cubeCamera.renderTarget.texture.minFilter = THREE.NearestFilter;
        this.cubeCamera.renderTarget.texture.format = THREE.RGBAFormat;
        this.needsNormalsUpdate = true;
        this.mesh = mesh;
        this.normalBakeHelperMesh = this.mesh.clone();
        this.normalBakeHelperMesh.material = ELJEWEL.normalMapCaptureMaterial;
        this.normalBakeHelperMesh.geometry = mesh.geometry.clone();
        this.normalBakeHelperMesh.geometry.center();
        this.geometry = mesh.geometry;
        this.geometry.computeBoundingBox();
        this.offset = new THREE.Vector3();
        this.geometry.boundingBox.getCenter(this.offset);
        this.geometry.computeBoundingSphere();
        this.normalBakeHelperMesh.position.set(0, 0, 0);
        this.normalBakeHelperMesh.rotation.set(0, 0, 0);
        this.normalBakeHelperMesh.quaternion.set(0, 0, 0, 1);
        this.normalBakeHelperMesh.scale.set(1, 1, 1);
        this.localScene.add(this.normalBakeHelperMesh);
        this.prepareNormalsCubeMap(renderer);
        this.sparkles = [];
        this.isDiamondMaterial = true;  
    }
    clone() {
        const material = new THREE.ShaderMaterial();      
        material.uniforms = THREE.UniformsUtils.clone(this.material.uniforms);
        material.extensions = this.material.extensions;
        material.defines = this.material.defines;
        material.uniforms.tCubeMapNormals.value = this.cubeCamera.renderTarget;
        material.uniforms.envMap.value = this.envMap;
        material.envMap = this.envMap;
        material.vertexShader = this.material.vertexShader;
        material.fragmentShader = this.material.fragmentShader;  
        material.isDiamondMaterial = true;   
        return material;
    }
    prepareNormalsCubeMap(renderer) {

        if (!this.needsNormalsUpdate) {
            return;
        }

        this.cubeCamera.updateCubeMap(renderer, this.localScene);
        this.material.uniforms.tCubeMapNormals.value = this.cubeCamera.renderTarget;
         
        this.needsNormalsUpdate = false;
    }
};

ELJEWEL.NormalMapCaptureShader = {
    vertexShader: [
        "varying vec3 vNormal;",
        "void main() {", "vNormal = normal;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: [
        "varying vec3 vNormal;",
        "void main() {", "vec3 color = normalize(vNormal);",
        "color = color * 0.5 + 0.5;", "gl_FragColor = vec4( color.x, color.y, color.z, 1.0 );", "}"].join("\n"),
    side: THREE.DoubleSide
};

ELJEWEL.DiamondShader = {
    defines: {
        RAY_BOUNCES: 5
    },
    vertexShader: [
        "varying vec2 vUv;",
        "varying vec3 Normal;",
        "varying vec3 worldNormal;",
        "varying vec3 vecPos;",
        "varying vec3 viewPos;",
        "void main() {", "vUv = uv;",
        "Normal =  normal;",
        "worldNormal = (modelMatrix * vec4(normal,0.0)).xyz;",
        "vecPos = (modelMatrix * vec4(position, 1.0 )).xyz;",
        "viewPos = (modelViewMatrix * vec4(position, 1.0 )).xyz;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: [
        "varying vec2 vUv;",
        "varying vec3 Normal;",
        "varying vec3 worldNormal;",
        "varying vec3 vecPos;",
        "varying vec3 viewPos;",
        "uniform samplerCube tCubeMapNormals;",
        "uniform samplerCube envMap;",
        "uniform samplerCube envRefractionMap;",
        "uniform sampler2D sphereMap;",
        "uniform float envMapIntensity;",
        "uniform float tanAngleSqCone;",
        "uniform float coneHeight;",
        "uniform int maxBounces;",
        "uniform mat4 modelMatrix;",
        "uniform mat4 invModelMatrix;",
        "uniform float n2;",
        "uniform float radius;",
        "uniform bool bDebugBounces;",
        "uniform float rIndexDelta;",
        "uniform float normalOffset;",
        "uniform float squashFactor;",
        "uniform float distanceOffset;",
        "uniform float geometryFactor;",
        "uniform vec3 Absorbption;",
        "uniform vec3 colorCorrection;",
        "uniform vec3 boostFactors;",
        "uniform vec3 centreOffset;",
        "vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {",
        "float dotNV = abs( dot( normal, viewDir ) );",
        "const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );",
        "const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );",
        "vec4 r = roughness * c0 + c1;",
        "float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;",
        "vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;",
        "return specularColor * AB.x + AB.y;", "}",
        "vec4 SampleSpecularReflection(vec4 specularColor, vec3 direction ) {",
        "direction.x *= -1.0;", 
        "direction.z *= -1.0;", 
        "vec3 tempDir = normalize(vec3(0., 0., 1.) + direction);", 
        "vec4 sampleColorRGB = envMapIntensity * envMapTexelToLinear( textureCube( envMap, direction ) );", 
        "vec4 sampleColorRefraction = envMapIntensity * ( texture2D( sphereMap, tempDir.xy * 0.5 + 0.5 ) );", 
        "vec3 toneMappedColor = pow(toneMapping(sampleColorRGB.rgb),vec3(1./1.));", "return vec4(toneMappedColor, 1.0);", 
        "}", 
        "vec4 SampleSpecularContribution(vec4 specularColor, vec3 direction ) {", 
        "direction = normalize(direction);", 
        "direction.x *= -1.0;", 
        "direction.z *= -1.0;", 
        "vec4 sampleColorRGB = envMapIntensity * envMapTexelToLinear( textureCube( envMap, direction ) );", 
        "vec3 tempDir = normalize(vec3(0., 0., 1.) + direction);", 
        "float m = 2.8284271247461903 * sqrt( direction.z+1.0 );", 
        "vec4 sampleColorRefraction = envMapIntensity * texture2D( sphereMap, clamp(direction.xy / m + 0.45, vec2(0.), vec2(1.)) );", 
        "vec3 toneMappedColor = pow(toneMapping( sampleColorRGB.rgb ),vec3(1./1.));", 
        "return vec4(toneMappedColor, 1.0);", 
        "}", 
        "vec3 intersectSphere(vec3 origin, vec3 direction) {", 
        "origin -= centreOffset;", 
        "direction.y /= squashFactor;", 
        "float A = dot(direction, direction);", 
        "float B = 2.0*dot(origin, direction);", 
        "float C = dot(origin, origin) - radius * radius;", 
        "float disc = B*B - 4.0 * A * C;", "if(disc > 0.0)", 
        "{", "disc = sqrt(disc);", 
        "float t1 = (-B + disc)*geometryFactor/A;", 
        "float t2 = (-B - disc)*geometryFactor/A;", 
        "float t = (t1 > t2) ? t1 : t2;", 
        "direction.y *= squashFactor;", 
        "return vec3(origin + centreOffset + direction * t);",
        "}", 
        "return vec3(0.0);", 
        "}", 
        "vec3 debugBounces(int count) {", 
        "vec3 color = vec3(1.,1.,1.);", 
        "if(count == 1)", 
        "color = vec3(0.0,1.0,0.0);",
        "else if(count == 2)", 
        "color = vec3(0.0,0.0,1.0);", 
        "else if(count == 3)", 
        "color = vec3(1.0,1.0,0.0);", 
        "else if(count == 4)", 
        "color = vec3(0.0,1.0,1.0);", 
        "else", 
        "color = vec3(0.0,1.0,0.0);", 
        "if(count ==0)", 
        "color = vec3(1.0,0.0,0.0);", 
        "return color;", 
        "}", 
        "vec3 traceRay(vec3 origin, vec3 direction, vec3 normal) {", 
        "vec3 outColor = vec3(0.0);", 
        "// Reflect/Refract ray entering the diamond", 
        "const float n1 = 1.0;", 
        "const float epsilon = 1e-4;", 
        "float f0 = (2.4- n1)/(2.4 + n1);", 
        "f0 *= f0;", 
        "vec3 attenuationFactor = vec3(1.0);", 
        "vec3 newDirection = refract(direction, normal, n1/n2);", 
        "vec3 reflectedDirection = reflect(direction, normal);", 
        "vec3 brdfReflected = BRDF_Specular_GGX_Environment(reflectedDirection, normal, vec3(f0), 0.0);", 
        "vec3 brdfRefracted = BRDF_Specular_GGX_Environment(newDirection, -normal, vec3(f0), 0.0);", 
        "attenuationFactor *= ( vec3(1.0) - brdfRefracted);", 
        "outColor += SampleSpecularReflection(vec4(1.0), reflectedDirection ).rgb * brdfReflected;", 
        "int count = 0;", 
        "newDirection = (invModelMatrix * vec4(newDirection, 0.0)).xyz;", 
        "newDirection = normalize(newDirection);", 
        "origin = (invModelMatrix * vec4(origin, 1.0)).xyz;", 
        "// ray bounces ", 
        "for( int i=0; i<RAY_BOUNCES; i++) { ", 
        "vec3 intersectedPos;", 
        "intersectedPos = intersectSphere(origin + vec3(epsilon), newDirection);", 
        "vec3 dist = intersectedPos - origin;", 
        "vec3 d = normalize(intersectedPos - centreOffset);", 
        "vec3 mappedNormal = textureCube( tCubeMapNormals, d ).xyz;",
        "mappedNormal = 2. * mappedNormal - 1.;", 
        "mappedNormal.y += normalOffset;", 
        "mappedNormal = normalize(mappedNormal);", 
        "dist = (modelMatrix * vec4(dist, 1.)).xyz;", 
        "float r = sqrt(dot(dist, dist));", 
        "attenuationFactor *= exp(-r*Absorbption);", 
        "// refract the ray at first intersection ", 
        "vec3 oldOrigin = origin;", 
        "origin = intersectedPos - normalize(intersectedPos - centreOffset) * distanceOffset;", 
        "vec3 oldDir = newDirection;", "newDirection = refract(newDirection, mappedNormal, n2/n1);", 
        "if( dot(newDirection, newDirection) == 0.0) { // Total Internal Reflection. Continue inside the diamond ", 
        "newDirection = reflect(oldDir, mappedNormal);", 
        "if(i == RAY_BOUNCES-1 ) //If the ray got trapped even after max iterations, simply sample along the outgoing refraction! ", 
        "{", 
        "vec3 brdfReflected = BRDF_Specular_GGX_Environment(-oldDir, mappedNormal, vec3(f0), 0.0);", 
        "vec3 d1 = (modelMatrix * vec4(oldDir, 0.0)).xyz;", 
        "outColor += SampleSpecularContribution(vec4(1.0), d1 ).rgb * colorCorrection * attenuationFactor  * boostFactors * (vec3(1.0) - brdfReflected);", 
        "//outColor = vec3(1.,0.,0.);", 
        "//if(d1.y > 0.95) {", 
        "//outColor += d1.y * vec3(1.,0.,0) * attenuationFactor * (vec3(1.0) - brdfReflected) * boostFactors;", 
        "//}", 
        "}", 
        "} else { // Add the contribution from outgoing ray, and continue the reflected ray inside the diamond ", 
        "vec3 brdfRefracted = BRDF_Specular_GGX_Environment(newDirection, -mappedNormal, vec3(f0), 0.0);", 
        "// outgoing(refracted) ray's contribution ", 
        "vec3 d1 = (modelMatrix * vec4(newDirection, 0.0)).xyz;", 
        "vec3 colorG = SampleSpecularContribution(vec4(1.0), d1 ).rgb * ( vec3(1.0) - brdfRefracted);", 
        "vec3 dir1 = refract(oldDir, mappedNormal, (n2+rIndexDelta)/n1);", 
        "vec3 dir2 = refract(oldDir, mappedNormal, (n2-rIndexDelta)/n1);", 
        "vec3 d2 = (modelMatrix * vec4(dir1, 0.0)).xyz;", 
        "vec3 d3 = (modelMatrix * vec4(dir2, 0.0)).xyz;", 
        "vec3 colorR = SampleSpecularContribution(vec4(1.0), d2 ).rgb * ( vec3(1.0) - brdfRefracted);", 
        "vec3 colorB = SampleSpecularContribution(vec4(1.0), d3 ).rgb * ( vec3(1.0) - brdfRefracted);", 
        "outColor += vec3(colorR.r, colorG.g, colorB.b) * colorCorrection * attenuationFactor * boostFactors;", 
        "//outColor = oldDir;", 
        "//new reflected ray inside the diamond ", 
        "newDirection = reflect(oldDir, mappedNormal);", 
        "vec3 brdfReflected = BRDF_Specular_GGX_Environment(newDirection, mappedNormal, vec3(f0), 0.0);", 
        "attenuationFactor *= brdfReflected * boostFactors;", 
        "count++;", 
        "}", 
        "}", 
        "if(false)", 
        "outColor = debugBounces(count);", 
        "return outColor;", 
        "}", 
        "void main() {", 
        "vec3 normalizedNormal = normalize(worldNormal);", 
        "vec3 viewVector = normalize(vecPos - cameraPosition);", 
        "vec3 color = traceRay(vecPos, viewVector, normalizedNormal);", 
        "gl_FragColor = vec4(color.rgb,1.);", 
        "#include <tonemapping_fragment>", 
        "//#include <encodings_fragment>", 
        "//gl_FragColor = textureCube(tCubeMapNormals, normalize(Normal));", "}"].join("\n"),
    uniforms: {
        tCubeMapNormals: {
            type: "t",
            value: null
        },
        envMap: {
            type: "t",
            value: null
        },
        envRefractionMap: {
            type: "t",
            value: null
        },
        sphereMap: {
            type: "t",
            value: null
        },
        envMapIntensity: {
            type: "f",
            value: 1
        },
        maxBounces: { // unused
            type: "i",
            value: 1
        },
        tanAngleSqCone: { // unused
            type: "f",
            value: 0
        },
        coneHeight: { // unused
            type: "f",
            value: 0
        },
        bDebugBounces: { // unused
            type: "i",
            value: 0
        },
        rIndexDelta: { // used in direction
            type: "f",
            value: 0.012
        },
        n2: { // used in direction
            type: "f",
            value: 2.4
        },
        radius: {
            type: "f",
            value: 1
        },
        normalOffset: { // used in direction
            type: "f",
            value: 0
        },
        squashFactor: { // used in direction
            type: "f",
            value: 0.98
        },
        distanceOffset: { // used in direction
            type: "f",
            value: 0
        },
        geometryFactor: { // used in direction
            type: "f",
            value: 0.28
        },
        Absorbption: {
            type: "v3",
            value: new THREE.Vector3(0, 0, 0)
        },
        colorCorrection: {
            type: "v3",
            value: new THREE.Vector3(1, 1, 1)
        },
        boostFactors: {
            type: "v3",
            value: new THREE.Vector3(0.892, 0.892, .98595025)
        },
        centreOffset: {
            type: "v3",
            value: new THREE.Vector3(0, 0, 0)
        }
    },
    side: THREE.DoubleSide
};

ELJEWEL.SparkleShader = {
    vertexShader: [
        "varying vec2 vUv;", 
        "varying vec4 sparkleProjectedCentre;", 
        "uniform mat4 ModelViewMatrix;", 
        "uniform float scale;", 
        "uniform float rotation;", 
        "void main() { ", 
        "vUv = uv; ", 
        "vec4 finalPosition;", 
        "vec2 alignedPosition = position.xy * scale;", 
        "vec2 rotatedPosition;", 
        "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", 
        "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", 
        "finalPosition = ModelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", 
        "finalPosition.xy += rotatedPosition;", 
        "finalPosition = projectionMatrix * finalPosition;", 
        "sparkleProjectedCentre = projectionMatrix * ModelViewMatrix * vec4(0.0,0.0,0.0,1.0 );", 
        "gl_Position = finalPosition;", "}"].join("\n"),
    fragmentShader: [
        "varying vec2 vUv;", 
        "varying vec4 sparkleProjectedCentre;", 
        "uniform sampler2D sparkleTexture;", 
        "uniform sampler2D screenTexture;", 
        "uniform sampler2D noiseTexture;", 
        "uniform float intensity;", 
        "vec3 ClosestPrimaryColor(vec3 color) {", 
        "vec3 diffColor1 = vec3(1.0,0.0,0.0) - color;", 
        "vec3 diffColor2 = vec3(0.0,1.0,0.0) - color;", 
        "vec3 diffColor3 = vec3(0.0,0.0,1.0) - color;", 
        "const float margin = 0.5; ", 
        "if(dot(diffColor1, diffColor1) < margin)", 
        "return vec3(1.0, margin, margin); ", 
        "if(dot(diffColor2, diffColor2) < margin)", 
        "return vec3(margin, 1.0, margin);", 
        "if(dot(diffColor3, diffColor3) < margin)", 
        "return vec3(margin, margin, 1.0);", 
        "return color;", "}", 
        "void main() {", 
        "vec2 uv = (sparkleProjectedCentre.xy/sparkleProjectedCentre.w + 1.0)*0.5;",
        "vec4 screenColor = texture2D( screenTexture, uv );", 
        "//screenColor.rgb = ClosestPrimaryColor(screenColor.rgb);", 
        "float noise = texture2D( noiseTexture, uv ).r;", 
        "screenColor.xyz *= screenColor.xyz;", 
        "screenColor.xyz *= screenColor.xyz;", 
        "screenColor.xyz *= screenColor.xyz;", 
        "//float luminance = dot(vec3(0.3, 0.59, 0.11), screenColor.xyz);", 
        "//luminance = luminance > 0.0 ? luminance : 0.0;", 
        "vec4 spriteColor = vec4(1.) * texture2D( sparkleTexture, vUv ).a * screenColor * noise * intensity;", 
        "gl_FragColor = spriteColor;", "}"].join("\n"),
    uniforms: {
        ModelViewMatrix: {
            type: "m4",
            value: (new THREE.Matrix4()).identity()
        },
        sparkleTexture: {
            type: "t",
            value: null
        },
        screenTexture: {
            type: "t",
            value: null
        },
        noiseTexture: {
            type: "t",
            value: null
        },
        scale: {
            type: "f",
            value: 1
        },
        rotation: {
            type: "f",
            value: 0
        },
        intensity: {
            type: "f",
            value: 1
        }
    },
    side: THREE.DoubleSide
};

ELJEWEL.normalMapCaptureMaterial = new THREE.ShaderMaterial(ELJEWEL.NormalMapCaptureShader);
ELJEWEL.diamondMaterial = new THREE.ShaderMaterial(ELJEWEL.DiamondShader);

ELJEWEL.Sparkle = class {

    constructor(texture, noiseTexture) {
        this.texture = texture;
        this.noiseTexture = noiseTexture;
        this.geometry = new THREE.PlaneGeometry(1, 1, 0); 
        this.material = new THREE.ShaderMaterial();
        this.material.depthTest = false;
        this.material.depthWrite = false;
        this.material.transparent = true; 
        this.material.side = THREE.DoubleSide;
        this.material.blending = THREE.AdditiveBlending;
        this.material.vertexShader = ELJEWEL.SparkleShader.vertexShader;
        this.material.fragmentShader = ELJEWEL.SparkleShader.fragmentShader;
        this.material.uniforms = THREE.UniformsUtils.clone(ELJEWEL.SparkleShader.uniforms);

        if (this.texture) {
            this.material.uniforms.sparkleTexture.value = texture;
        }

        if (this.noiseTexture) {
            this.material.uniforms.noiseTexture.value = noiseTexture;
        } 
        
        if (this.texture && this.noiseTexture) { 
                
            this.mesh = new THREE.Mesh(this.geometry, this.material);
            this.mesh.positionOffset = new THREE.Vector3();
            this.rotationSpeedFactor = 5;
        }
    }
    shallowCopy() {
        const clone = new ELJEWEL.Sparkle(this.texture, this.noiseTexture); 
        clone.mesh.positionOffset = new THREE.Vector3();
        clone.mesh.positionOffset.copy(this.mesh.positionOffset);
        clone.material.uniforms.scale.value = this.material.uniforms.scale.value;
        clone.material.uniforms.rotation.value = this.material.uniforms.rotation.value;
        clone.material.uniforms.intensity.value = this.material.uniforms.intensity.value;
        clone.material.uniforms.screenTexture.value = this.material.uniforms.screenTexture.value;
        clone.material.uniforms.noiseTexture.value = this.material.uniforms.noiseTexture.value; 
        clone.material.uniforms.ModelViewMatrix.value.copy(this.material.uniforms.ModelViewMatrix.value);
        clone.rotationSpeedFactor = this.rotationSpeedFactor;       
        return clone;
    }
    setScale(value) {
        this.material.uniforms.scale.value = value;
    }
    setIntensity(value) {
        this.material.uniforms.intensity.value = value;
    }
    setRotation(value) {
        this.material.uniforms.rotation.value = value;
    }
    setRotationSpeedFactor(value) {
        this.rotationSpeedFactor = value;
    }
    setPositionOffset(x, y, z) {
        this.mesh.positionOffset.x = x;
        this.mesh.positionOffset.y = y;
        this.mesh.positionOffset.z = z;
        this.mesh.position.copy(this.mesh.positionOffset);
        this.mesh.updateMatrix();
    }
    alignWithCamera(camera) {
        this.mesh.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, this.mesh.matrix);
        this.material.uniforms.ModelViewMatrix.value.copy(this.mesh.modelViewMatrix);
    }
    syncWithTransform(matrix, offset) {
        this.mesh.position.copy(this.mesh.positionOffset);
        if (offset) {
            this.mesh.position.add(offset);
        }
        this.mesh.position.applyMatrix4(matrix);
        this.mesh.updateMatrix();
    }
};