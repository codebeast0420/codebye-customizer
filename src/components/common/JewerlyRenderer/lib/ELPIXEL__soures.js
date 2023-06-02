
import * as THREE from './three.diamond.drawer.extension.js'; 

const ELPIXEL = {};

export { ELPIXEL };

const _Module = function(t) {
    var e = {};

    function i(o) {
        if (e[o]) return e[o].exports;
        var s = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
    }
    i.m = t;
    i.c = e;
    i.d = function(t, e, o) {
        i.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    };
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e;
    };
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    };
    i.p = "";
    i(i.s = 3);
};

const _args = [function(t, e, i) {

    function o(t) {
        const e = Math.floor(Math.random() * t.length),
            i = t[e];
        return t.splice(e, 1), i
    }

    function s(t, e, i) {
        this.width = t;
        this.height = e;
        this.cellSize = i;
        this.array = new Array(t);
        for (let i = 0; i < t; i++){
            this.array[i] = new Array(e)
        }
    }

    function a(t, e) {
        const i = e * (Math.random() + 1),
            o = 6.283185307178 * Math.random(),
            s = t.x + i * Math.cos(o),
            a = t.y + i * Math.sin(o);
        return new THREE.Vector2(s, a)
    }

    i(2);
    
    s.prototype = {
        constructor: s,
        t: function(t) {
            const e = Math.floor(t.x / this.cellSize),
                i = Math.floor(t.y / this.cellSize);
            this.array[e][i] = t
        },
        h: function(t, e) {
            const i = Math.floor(t.x / this.cellSize),
                o = Math.floor(t.y / this.cellSize);
            for (let s = i - 5; s < i + 5; s++)
                for (let i = o - 5; i < o + 5; i++)
                    if (s >= 0 && s < this.width && i >= 0 && i < this.height) {
                        const o = this.array[s][i];
                        let a = 1e10;
                        if (void 0 !== o && (a = o.distanceTo(t)), a < e) return !0
                    }
            return !1
        }
    };
    
    t.exports = ( ELPIXEL.lerpDistribution = function(t, e, i) {
        return (e = e || .47) * (1 - t) + (i = i || 7) * t
    }, ELPIXEL.uniformDistribution = function() {
        return 1
    }, ELPIXEL.cosineDistribution = function(t) {
        const e = t * Math.PI / 2,
            i = Math.cos(e);
        return .47 * (1 - i) + 7 * i
    }, ELPIXEL.generateQuasiRandomPoints = function(t, e, i, r) {
        i = i || ELPIXEL.uniformDistribution;
        r = r || ELPIXEL.insideCircle;
        
        if (e < 0) 
            e = Math.sqrt(t) / t;

        const n = [],
            h = [],
            l = e / Math.sqrt(2),
            c = new s(Math.ceil(1 / l), Math.ceil(1 / l), l),
            u = new THREE.Vector2(.5, .5);
        let d = !1;
        do {
            u.x = Math.random();
            u.y = Math.random();
            d = r(u.x, u.y);
        } while (!d);
        for (h.push(u), n.push(u), c.t(u); 0 !== h.length && n.length < t;) {
            const t = o(h);
            for (let o = 0; o < 30; o++) {
                const o = t.x - .5,
                    s = t.y - .5,
                    l = i(Math.sqrt(o * o + s * s)),
                    u = a(t, l * e);

                if (!r(u.x, u.y) || c.h(u, l * e) || (h.push(u), n.push(u), c.t(u))){};
            }
        }
        return n
    });

}, function(t, e) {

    t.exports = ELPIXEL.SmoothTransitionAOShader = {
        uniforms: {
            saoAccumulationBuffer: {
                value: null
            },
            transition: {
                value: 0
            }
        },
        vertexShader: "varying vec2 vUv;        void main() {          vUv = uv;          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }",
        fragmentShader: ["varying vec2 vUv;", "uniform float transition;", "uniform sampler2D saoAccumulationBuffer;", "void main() {", "float aoValue = texture2D( saoAccumulationBuffer, vUv).r;", "gl_FragColor = vec4(mix(0., aoValue, transition));", "}"].join("\n")
    };
    
    t.exports = ELPIXEL.SmoothTransitionShadowShader = {
        uniforms: {
            shadowAccumulationBuffer: {
                value: null
            },
            firstFrameShadowBuffer: {
                value: null
            },
            transition: {
                value: 0
            }
        },
        vertexShader: "varying vec2 vUv;        void main() {          vUv = uv;          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }",
        fragmentShader: ["#include <packing>", "varying vec2 vUv;", "uniform float transition;", "uniform sampler2D shadowAccumulationBuffer;", "uniform sampler2D firstFrameShadowBuffer;", "void main() {", "float shadowValueFirstFrame = unpackRGBAToDepth(texture2D( firstFrameShadowBuffer, vUv));", "float shadowValue = unpackRGBAToDepth(texture2D( shadowAccumulationBuffer, vUv));", "gl_FragColor = vec4(mix(shadowValueFirstFrame, shadowValue, pow(transition, 4.)));", "}"].join("\n")
    };
    
    t.exports = ELPIXEL.SmoothTransitionSoftShadowShadowShader = {
        uniforms: {
            shadowAccumulationBuffer: {
                value: null
            },
            transition: {
                value: 0
            },
            shadowData: {
                value: new THREE.Vector3(1, 2, 1)
            }
        },
        vertexShader: "varying vec2 vUv;        void main() {          vUv = uv;          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }",
        fragmentShader: ["#include <packing>", "varying vec2 vUv;", "uniform float transition;", "uniform vec3 shadowData;", "uniform sampler2D shadowAccumulationBuffer;", "void main() {", "float shadowValue = unpackRGBAToDepth(texture2D( shadowAccumulationBuffer, vUv));", "float mask = (1. - shadowValue) * shadowData.x;", "mask = pow(mask, shadowData.y);", "gl_FragColor =  vec4(mix(vec4(0.), vec4(vec3(0.), mask), pow(transition, 4.)));", "}"].join("\n")
    }
}, function(t, e) {

    function i(t) {
        return 0 == (t & t - 1) && 0 !== t
    }
    THREE.ShaderChunk.utilshader = [
        "vec2 pack16(float value){",
         "float sMax = 65535.0;",
        "int v = int(clamp(value, 0.0, 1.0)*sMax+0.5);",
        "int digit0 = v/256;",
        "int digit1 = v-digit0*256;", 
        "return vec2(float(digit0)/255.0, float(digit1)/255.0);", 
        "}", 
        "vec2 packNormal(vec3 n){", 
        "float p = sqrt(n.z*8.0+8.0);", 
        "return vec2(n.xy/p + 0.5);", "}", 
        "vec3 unpackNormal(vec2 enc){", 
        "vec2 fenc = enc*4.0-2.0;", "float f = dot(fenc,fenc);", "float g = sqrt(1.0-f/4.0);", "return vec3(fenc*g, 1.0-f/2.0);", "}", "float unpack16(vec2 value){", "return (", "value.x*0.996108949416342426275150501169264316558837890625 +", "value.y*0.00389105058365758760263730664519243873655796051025390625", ");", "}", "vec3 getViewNormal(const in vec2 uv ) {", "#if DEPTH_NORMAL_TEXTURE == 1", "return unpackNormal( texture2D( tNormalDepth, uv ).zw );", "#else", "return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );", "#endif", "}", "float linstep(float edge0, float edge1, float value){", "return clamp((value-edge0)/(edge1-edge0), 0.0, 1.0);", "}", "vec3 packFloatToRGB(const in float x) {", "const vec3 code = vec3(1.0, 255.0, 65025.0);", "vec3 pack = vec3(code * x);", "pack.gb = fract(pack.gb);", "pack.rg -= pack.gb * (1.0 / 256.0);", "return pack;", "}", "float decodeDepth( const in vec2 uv ) {", "vec4 uncodedDepth;", "#if DEPTH_PACKING_MODE == 2", "uncodedDepth = texture2D( tNormalDepth, uv );", "#else", "uncodedDepth = texture2D( tDepth, uv );", "#endif", "#if DEPTH_PACKING_MODE == 0", "return uncodedDepth.x;", "#elif DEPTH_PACKING_MODE == 1", "#if LINEAR_DEPTH == 1", "return pow2(unpackRGBAToDepth(uncodedDepth));", "#else", "return unpackRGBAToDepth( uncodedDepth );", "#endif", "#else", "return pow2(unpack16(uncodedDepth.xy));", "#endif", "}"].join("\n");

        (function() {
            const t = THREE.CopyShader;
            ELPIXEL.u = THREE.UniformsUtils.clone(t.uniforms);
            ELPIXEL.v = new THREE.ShaderMaterial({
                uniforms: ELPIXEL.u,
                vertexShader: t.vertexShader,
                fragmentShader: t.fragmentShader
            });
            ELPIXEL.R = new THREE.Scene();
            ELPIXEL.T = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            ELPIXEL.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), ELPIXEL.v);
            ELPIXEL.quad.frustumCulled = false;
            ELPIXEL.R.add(ELPIXEL.quad);
        })();
        
        t.exports = ELPIXEL.randomizeArray = function(t) {
            let e, i, o = t.length;
            for (; 0 !== o;) { 
                i = Math.floor(Math.random() * o);
                e = t[o -= 1];
                t[o] = t[i];
                t[i] = e;
            }
            return t
        };
        
        t.exports = ELPIXEL.createTextureFromRawData = function(t, e) {
            
            (e = e || {}).type = e.type || THREE.FloatType;
            e.format = e.format || THREE.LuminanceAlphaFormat;
            e.minFilter = e.minFilter || THREE.NearestFilter;
            e.magFilter = e.magFilter || THREE.NearestFilter;

            const i = new Float32Array(2 * t.length);
            for (let e = 0; e < 2 * t.length; e += 2) { 
                i[e] = t[e / 2].x - .5;
                i[e + 1] = t[e / 2].y - .5;
            }
            const o = new THREE.DataTexture(i, t.length, 1);

            o.format = e.format;
            o.type = e.type;
            o.minFilter = e.minFilter;
            o.magFilter = e.magFilter;
            o.generateMipmaps = false;
            o.needsUpdate = true;
            
            return o;
        };
        
        t.exports = ELPIXEL.jitterCamera = function(t, e, i, o, s) {
            s = void 0 !== s ? s : .5;
            const a = (2 * e.x - 1) * s,
                r = (2 * e.y - 1) * s;
            t.setViewOffset(i, o, a, r, i, o)
        };
        
        t.exports = ELPIXEL.insideCircle = function(t, e, i) {
            const o = t - .5,
                s = e - .5;
            return o * o + s * s <= (i = void 0 !== i ? i : .5) * i
        };
        
        t.exports = ELPIXEL.insideRectangle = function(t, e, i, o) {
            return i = void 0 !== i ? i : 1, o = void 0 !== o ? o : 1, t >= 0 && e >= 0 && t <= i && e <= o
        };
        
        t.exports = ELPIXEL.blit = function(t, e, i, o) {
            o = void 0 !== o && o;
            ELPIXEL.u.tDiffuse.value = e;
            ELPIXEL.quad.material = ELPIXEL.v;
            t.render(ELPIXEL.R, ELPIXEL.T, i, o);
        };
        
        t.exports = ELPIXEL.renderPass = function(t, e, i, o) {
            o = void 0 !== o && o;
            ELPIXEL.quad.material = e;
            t.render(ELPIXEL.R, ELPIXEL.T, i, o);
        };
        
        t.exports = ELPIXEL.calculateFOV = function(t, e, i) {
            let o;
            t.isBox3 ? o = t : (o = new THREE.Box3).setFromObject(t);
            const s = new THREE.Vector3;
            o.getCenter(s);
            const a = new THREE.Vector3;
            o.getSize(a);
            const r = new THREE.Vector3;
            r.set(a.x / 2, a.y / 2, a.z / 2);
            r.add(s);
            r.sub(e);
            r.normalize();
            let n = i.dot(r);
            r.set(-a.x / 2, a.y / 2, a.z / 2);
            r.add(s);
            r.sub(e);
            r.normalize();
            n = Math.min(i.dot(r), n);
            r.set(a.x / 2, -a.y / 2, a.z / 2);
            r.add(s);
            r.sub(e);
            r.normalize();
            n = Math.min(i.dot(r), n);
            r.set(a.x / 2, a.y / 2, -a.z / 2);
            r.add(s);
            r.sub(e);
            r.normalize();
            n = Math.min(i.dot(r), n);
            r.set(-a.x / 2, -a.y / 2, -a.z / 2);
            r.add(s);
            r.sub(e);
            r.normalize();
            n = Math.min(i.dot(r), n);
            r.set(-a.x / 2, a.y / 2, -a.z / 2);
            r.add(s);
            r.sub(e);
            r.normalize();
            n = Math.min(i.dot(r), n);
            r.set(a.x / 2, -a.y / 2, -a.z / 2);
            r.add(s);
            r.sub(e);
            r.normalize();
            n = Math.min(i.dot(r), n);
            r.set(-a.x / 2, -a.y / 2, a.z / 2);
            r.add(s);
            r.sub(e);
            r.normalize();
            n = Math.min(i.dot(r), n);
            return 2 * (180 * Math.acos(n) / Math.PI);
        };
        
        t.exports = ELPIXEL.isPowerOfTwo = function(t) {
            return i(t.width) && i(t.height)
        };
        
        t.exports = ELPIXEL.makePowerOfTwo = function(t) {
            function e(t) {
                return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
            }
            if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap) {
                const i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                return i.width = e(t.width), i.height = e(t.height), i.getContext("2d").drawImage(t, 0, 0, i.width, i.height), i
            }
            return t;
        };
        
        t.exports = ELPIXEL.getDataFromImage = function(t, e) {
            const i = document.createElement("canvas"),
                o = e,
                s = e / (t.width / t.height);
            i.width = o;
            i.height = s;
            const a = i.getContext("2d");
            return a.drawImage(t, 0, 0, o, s), a.getImageData(0, 0, o, s)
        }; 
        
        t.exports = ELPIXEL.getPixelFromImageData = function(t, e, i) {
            const o = 4 * (e + t.width * i),
                s = t.data;
            return {
                r: s[o],
                g: s[o + 1],
                b: s[o + 2],
                a: s[o + 3]
            }
        };
        
        t.exports = ELPIXEL.squareToUniformDiskConcentric = function() {
            const t = new THREE.Vector2();
            return function(e) {
                const i = 2 * e.x - 1,
                    o = 2 * e.y - 1;
                let s, a;
                if(0 === i && 0 === o ? a = s = 0 : i * i > o * o ? (a = i, s = Math.PI / 4 * (o / i)) : (a = o, s = Math.PI / 2 - i / o * (Math.PI / 4))){};
                const r = Math.sin(s),
                    n = Math.cos(s);
                return t.x = a * n, t.y = a * r, t
            }
        }();
        
        t.exports = ELPIXEL.squareToCosineHemisphere = function() {
            const t = new THREE.Vector3();
            return function(e) {
                const i = ELPIXEL.squareToUniformDiskConcentric(e),
                    o = Math.sqrt(1 - i.x * i.x - i.y * i.y);
                return t.set(i.x, i.y, o), t
            }
        }();

}, function(t, e, i) {
    //t.exports = ELPIXEL = {};
    i(2);
    i(4);
    i(6);
    i(0);
    i(7);
    i(9);
    i(11);
    i(13);
    i(15);
    i(18);
    i(20);
    i(22);
    i(24);
    i(26);
    i(27);
    t.exports = ELPIXEL.ELPIXEL = class {
        constructor(t) {
            (t = t || {}).saoparams = t.saoparams || {};
            t.shadowparams = t.shadowparams || {};
            t.gbufferparams = t.gbufferparams || {};
            this.needsUpdate = !0;
            this.autoSAOClear = !0;
            this.autoShadowsClear = !0;
            this.enableAA = !0;
            this.D = new ELPIXEL.BilateralFilterPass(3, 1);
            this.N = new ELPIXEL.GBufferPass(t.gbufferparams);
            const e = t.giParams || {};
            this.enableGI = !!e.enable;
            if (this.enableGI && this.initializeGI(e)){};
            this.P = new ELPIXEL.BVHManager();
            const i = void 0 === t.saoparams.accumulative || t.saoparams.accumulative;
            this.O = i ? new ELPIXEL.AccumulativeSAOPass(t.saoparams) : new ELPIXEL.SAOPass(t.saoparams);
            this.M = new ELPIXEL.ShadowPass(t.shadowparams);
            t.groundShadow && (this.C = new ELPIXEL.PlaneShadowBakePass(t.groundShadow));
            this.S = new ELPIXEL.SuperSampleAAPass();
            this.H = ELPIXEL.generateQuasiRandomPoints(30, -1, ELPIXEL.uniformDistribution, ELPIXEL.insideRectangle);
            const o = {
                format: THREE.RGBAFormat,
                minFilter: THREE.NearestFilter,
                magFilter: THREE.NearestFilter
            };
            this._ = new THREE.WebGLRenderTarget(1, 1, o);
            this.I = new THREE.WebGLRenderTarget(1, 1, o);
            this.A = 0;
            this.V = null;
            this.F = null;
        }
        addNodeToAccelerationStructure(t, e) {
            e ? this.P.add(t) : t.traverse(t => {
                if (t.isMesh && t.castShadow) { 
                    t.updateMatrixWorld();
                    this.P.add(t);
                }
            })
        }
        addRenderCompleteCallback(t) {
            this.renderCompleteCallback = t
        }
        removeRenderCompleteCallback() {
            this.renderCompleteCallback = null
        }
        blit(t) {
            this.U && ELPIXEL.blit(this.renderer, this.U, t, !1)
        }
        enableVPLGeneration() {
            this.X && (this.X.L = !0)
        }
        getBloomPass() {
            return this.B
        }
        getHighLightPass() {
            return this.k
        }
        getRenderPass() {
            return this.W
        }
        getSAOPass() {
            return this.O
        }
        getShadowPass() {
            return this.M
        }
        getVPLGenerationPass() {
            return this.X
        }
        getShadowPlanePass() {
            return this.C
        }
        highlightObjects(t) {
            this.k && (this.k.selectedObjects = t)
        }
        initializeGI(t) {
            this.X = new ELPIXEL.VPLGenerationPass(500);
            this.Z = new ELPIXEL.InstantRadiosityPass();
        }
        getEffectComposer(){
            return this.j;
        }
        insertPass(t, e) {
            this.j.insertPass(t, e)
        }
        isAccumulationConverged() {
            const t = this.M.enableAccumulation,
                e = this.O.convergenceMetric() >= 1,
                i = !t || this.M.convergenceMetric() >= 1,
                o = !this.enableGI || this.Z.convergenceMetric() >= 1;
            return i && e && o
        }
        isSuperSamplingConverged() {
            return this.A / this.H.length >= 1
        }
        render(t, e, i, o) {
            if (this.needsUpdate && 
                (this.G(), this.A = 0, this.jitterIndex = 0, this.needsUpdate = !1, this.autoSAOClear = !0, this.autoShadowsClear = !0), !this.V || this.V.uuid === i.uuid && this.F.uuid === e.uuid || (this.V = i, this.F = e, this.W.camera = this.V, this.W.scene = this.F, this.K.V = this.V, this.K.J.copy(this.V.projectionMatrix)), this.bInitialized || this.Y(t, e, i, o), this.q(e), this.enableGI && this.X.generateVPLs(e, this.areaLights[0], 10, this.P), this.C && this.C.render(this.renderer, e, i), this.isSuperSamplingConverged()) return void this.$();
            this.tt(t, e, i);
            this.et();
            const s = this.isAccumulationConverged();
            this.S.enabled = s;
            this.K.enabled = !s && this.enableAA;
            this.it(i);
            this.j.writeBuffer = this.j.renderTarget2;
            this.j.readBuffer = this.j.renderTarget1;
            this.j.render();
            i.clearViewOffset(); 
            this.jitterIndex++;
            
            if (this.S.enabled && this.A++){}
        }
        setSize(t, e) {
            if (this.renderer) { 
                t *= this.renderer.getPixelRatio();
                e *= this.renderer.getPixelRatio();
                this.renderer.screenBufferSize = new THREE.Vector2(t, e);
            }
            
            this.N.setSize(t, e);
            this.O.setSize(t, e);
            this.M.setSize(t, e);
            
            this.j && this.j.setSize(t, e);
            
            this.needsUpdate = !0;
        }
        setAntiAliasingFeedBackParams(t, e) {
            if (this.K) { 
                this.K.feedBack.x = t;
                this.K.feedBack.y = e;
            }
        }
        updateShadowPlane(t) {
            this.C && this.C.update(t)
        }
        it(t) {
            if (this.enableAA || this.isAccumulationConverged()) {
                const e = this.renderer.getDrawingBufferSize().width,
                    i = this.renderer.getDrawingBufferSize().height,
                    o = this.H[this.jitterIndex % this.H.length];
                ELPIXEL.jitterCamera(t, o, e, i)
            }
            if (this.isAccumulationConverged()) {
                const t = this.H[this.jitterIndex % this.H.length];
                this.ot(t)
            }
        }
        et() {
            this.O.enabled || (this.renderer.saoBuffer = this.I.texture);
            const t = this;
            const e = !this.M.enabled,
                i = ! function() {
                    let e = !0;
                    return t.areaLights.forEach(t => {
                        t.castShadow || (e = !1)
                    }), e
                }(),
                o = 0 === this.areaLights.length;
            (e || i || o) && this.M.lights.forEach(t => {
                t.shadow.map = this._
            })
        }
        $() {
            if (this.renderCompleteCallback && !this.renderCompleteCallbackCalled) { 
                this.renderCompleteCallback();
                this.renderCompleteCallbackCalled = !0;
            }
        }
        q(t) {
            const e = this;
            this.punctualLights = [];
            this.areaLights = [];
            t.traverseVisible(function(t) {
                if ((t instanceof THREE.DirectionalLight || t instanceof THREE.SpotLight) && t.castShadow && e.punctualLights.push(t), t instanceof THREE.RectAreaLight && t.castShadow && (t.shadow = t.shadow ? t.shadow : {}, e.areaLights.push(t))){}
            });
            this.M.lights = this.areaLights;
        }
        ot(t) {
            this.punctualLights.forEach(e => {
                ELPIXEL.jitterCamera(e.shadow.camera, t, e.shadow.mapSize.x, e.shadow.mapSize.y)
            })
        }
        Y(t, e, i, o) {
            this.renderer = t;
            this.V = i;
            this.F = e;
            this.U = o;
            this.W = new THREE.RenderPass(e, i);
            this.j = new THREE.EffectComposer(this.renderer, o);
            const s = t.getDrawingBufferSize();
            this.S.setSize(s.width, s.height);
            this.renderer.screenBufferSize = new THREE.Vector2(s.width, s.height);
            this.K = new ELPIXEL.TemporalAAPass(i, this.N);
            this.st = new THREE.ShaderPass(THREE.CopyShader);
            this.st.needsSwap = !1;
            this.st.renderToScreen = !o;
            this.j.addPass(this.W);
            if (THREE.OutlinePass && (this.k = new THREE.OutlinePass(new THREE.Vector2(s.width, s.height), e, i), this.j.addPass(this.k)), this.B = new ELPIXEL.UnrealBloomPass(this.N, new THREE.Vector2(s.width, s.height), .86, 1, .98), this.j.addPass(this.B), this.j.addPass(this.S), this.j.addPass(this.K), this.B.enabled = !1, this.j.addPass(this.st), this.bInitialized = !0){};
            const a = new THREE.MeshBasicMaterial({
                    color: 16777215
                }),
                r = new THREE.MeshBasicMaterial({
                    color: 0
                });
            ELPIXEL.renderPass(t, a, this._);
            ELPIXEL.renderPass(t, r, this.I);
            this.punctualLights = [];
            this.areaLights = [];
            this.jitterIndex = 0;
        }
        tt(t, e, i) {
            const o = t.getDrawingBufferSize().width,
                s = t.getDrawingBufferSize().height,
                a = this.H[this.jitterIndex % this.H.length];

            ELPIXEL.jitterCamera(i, a, o, s);
            this.N.render(t, e, i);
            this.O.render(t, i, this.N, this.D);
            this.M.render(t, e, i);
            
            this.enableGI && this.Z.render(t, e, i, this.X, this.areaLights[0]);
            
            i.clearViewOffset();
            
            if (!this.j.renderTarget1.depthTexture && this.N.at) { 
                this.j.renderTarget1.depthTexture = this.N.at;
                this.j.renderTarget2.depthTexture = this.N.at;
            }
        }
        G() {
            this.O.needsUpdate = !!this.autoSAOClear;
            this.M.needsUpdate = !!this.autoShadowsClear;
            this.S.needsUpdate = !0;
            this.enableGI && (this.Z.needsUpdate = !0);
            this.renderCompleteCallbackCalled = !1;
        }
    }
}, function(t, e, i) {
    i(5);
    
    t.exports = ELPIXEL.TextureAreaLightFilter = class {
        constructor(t) {
            this.rt = t;
            ELPIXEL.isPowerOfTwo(this.rt.image) || (this.rt.image = ELPIXEL.makePowerOfTwo(this.rt.image));
            const e = {
                    format: THREE.RGBAFormat,
                    magFilter: THREE.LinearFilter,
                    minFilter: THREE.LinearFilter,
                    type: this.rt.type,
                    generateMipmaps: !1,
                    anisotropy: this.rt.anisotropy,
                    encoding: this.rt.encoding
                },
                i = {
                    x: t.image.width,
                    y: t.image.height
                },
                o = Math.max(i.x, i.y);
            this.nt = Math.log(o) / Math.log(2) + 1;
            this.ht = [];
            this.lt = [];
            this.ct = [];
            this.ct.push(.1);
            for (let t = 0; t < this.nt; t++) {
                let o = new THREE.WebGLRenderTarget(i.x, i.y, e);
                this.ht.push(o);
                o = new THREE.WebGLRenderTarget(i.x, i.y, e);
                this.lt.push(o);
                i.x = Math.ceil(i.x / 2);
                i.y = Math.ceil(i.y / 2);
                t < 2 && this.ct.push(1);
                t < 5 && this.ct.push(2);
                t > 5 && this.ct.push(3);
            }
            const s = ELPIXEL.AreaLightTextureFilterShader;
            this.ut = new THREE.ShaderMaterial({
                uniforms: THREE.UniformsUtils.clone(s.uniforms),
                vertexShader: s.vertexShader,
                fragmentShader: s.fragmentShader,
                defines: {
                    NUM_SAMPLES: 16
                }
            })
        }
        update(t) {
            let e = this.rt;
            const i = new THREE.DataTexture(null, this.rt.image.width, this.rt.image.height);
            i.minFilter = THREE.LinearMipMapLinearFilter;
            for (let o = 0; o < this.nt; o++) {
                this.ut.uniforms.filterRadius.value = this.ct[o];
                this.ut.uniforms.texSize.value.set(this.ht[o].width, this.ht[o].height);
                this.ut.uniforms.direction.value.set(1, 0);
                this.ut.uniforms.colorTexture.value = e;
                ELPIXEL.renderPass(t, this.ut, this.ht[o], !0);
                this.ut.uniforms.direction.value.set(0, 1);
                this.ut.uniforms.colorTexture.value = this.ht[o].texture;
                ELPIXEL.renderPass(t, this.ut, this.lt[o], !0);
                e = this.lt[o];
                const s = new Uint8Array(4 * e.width * e.height);
                t.setRenderTarget(e);
                t.readRenderTargetPixels(e, 0, 0, e.width, e.height, s);
                i.mipmaps[o] = {
                    data: s,
                    width: e.width,
                    height: e.height
                };
            }
            return i.generateMipmaps = !1, i.needsUpdate = !0, this.dt(), i
        }
        dt() {
            for (let t = 0; t < this.nt; t++) { 
                this.ht[t].dispose();
                this.ht[t] = null;
                this.lt[t].dispose();
                this.lt[t] = null
            }
        }
    }
}, function(t, e) {
    t.exports = ELPIXEL.AreaLightTextureFilterShader = {
        uniforms: {
            colorTexture: {
                value: null
            },
            texSize: {
                value: new THREE.Vector2(.5, .5)
            },
            direction: {
                value: new THREE.Vector2(.5, .5)
            },
            filterRadius: {
                value: 1
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["varying vec2 vUv;", "uniform sampler2D colorTexture;", "uniform float filterRadius;", "uniform vec2 texSize;", "uniform vec2 direction;", "void main() {", "float INV_NUM_SAMPLES = 1.0/float(NUM_SAMPLES - 1);", "vec2 delta = direction * filterRadius * INV_NUM_SAMPLES/ texSize;", "float fSigma = filterRadius;", "float weightSum = 1.;", "vec4 colorSum = texture2D( colorTexture, vUv) * weightSum;", "for( int i = 1; i < NUM_SAMPLES; i ++ ) {", "float x = float(i);", "vec2 uvOffset = delta * x;", "vec2 vUv1 = vUv + uvOffset;", "float w = 1.;", "if( vUv1.x < 0.0 || vUv1.x > 1.0 || vUv1.y < 0.0 || vUv1.y > 1.0 ) {", "w = 0.0;", "}", "colorSum += texture2D( colorTexture, vUv1) * w;", "weightSum += w;", "vec2 vUv2 = vUv - uvOffset;", "w = 1.;", "if( vUv2.x < 0.0 || vUv2.x > 1.0 || vUv2.y < 0.0 || vUv2.y > 1.0 ) {", "w = 0.0;", "}", "colorSum += texture2D( colorTexture, vUv2) * w;", "weightSum += w;", "}", "gl_FragColor = vec4(colorSum/weightSum);", "}"].join("\n")
    }
}, function(t, e) {
    t.exports = ELPIXEL.BVHManager = class {
        constructor() {
            this.meshes = []
        }
        buildBVHTree(t) {

            let e = null;
            t.geometry.index && (e = t.geometry.index.array);
            let o = t.geometry.attributes.position.array,
                u = t.geometry.attributes.uv ? t.geometry.attributes.uv.array : void 0;
            if (e) {
                const t = new Float32Array(3 * e.length);
                for (let i = 0; i < e.length; i++) {
                    const s = 3 * e[i];
                    t[3 * i] = o[s];
                    t[3 * i + 1] = o[s + 1];
                    t[3 * i + 2] = o[s + 2];
                }
                if (o = t, u) {
                    const t = new Float32Array(2 * e.length);
                    for (let i = 0; i < e.length; i++) {
                        const o = 2 * e[i];
                        t[2 * i] = u[o];
                        t[2 * i + 1] = u[o + 1];
                    }
                    u = t
                }
            }

            return new class {

                constructor(t, e, o) {

                    this.positions = t;
                    this.uvs = e;
                    this._maxTrianglesPerNode = o || 10;
                    
                    this._bboxArray = (function(t) {
                        let e, i, o, s, a, r, n, h, c, u, d, v, m, f, p;
                        const w = t.length / 9;
                        const E = new Float32Array(7 * w);

                        for (let R = 0; R < w; R++) { 
                            e = t[9 * R];
                            i = t[9 * R + 1];
                            o = t[9 * R + 2];
                            s = t[9 * R + 3];
                            a = t[9 * R + 4];
                            r = t[9 * R + 5];
                            n = t[9 * R + 6];
                            h = t[9 * R + 7];
                            c = t[9 * R + 8];
                            u = Math.min(Math.min(e, s), n);
                            d = Math.min(Math.min(i, a), h);
                            v = Math.min(Math.min(o, r), c);
                            m = Math.max(Math.max(e, s), n);
                            f = Math.max(Math.max(i, a), h);
                            p = Math.max(Math.max(o, r), c);
                            l(E, R, R, u, d, v, m, f, p);
                        }
                        return E;
                    })(t);
                    
                    this._bboxHelper = new Float32Array(this._bboxArray.length);
                    this._bboxHelper.set(this._bboxArray);
                    
                    const s = t.length / 9;
                    const a = this.calcExtents(0, s, i);

                    for (this._rootNode = new c(a[0], a[1], 0, s, 0), this._nodesToSplit = [this._rootNode]; this._nodesToSplit.length > 0;) {
                        const t = this._nodesToSplit.pop();
                        this.splitNode(t)
                    }
                }

                calcExtents(t, e, i) {
                    if (i = i || 0, t >= e) return [{
                        x: 0,
                        y: 0,
                        z: 0
                    }, {
                        x: 0,
                        y: 0,
                        z: 0
                    }];
                    let o = Number.MAX_VALUE,
                        s = Number.MAX_VALUE,
                        a = Number.MAX_VALUE,
                        r = -Number.MAX_VALUE,
                        n = -Number.MAX_VALUE,
                        h = -Number.MAX_VALUE;
                    for (let i = t; i < e; i++) {
                        o = Math.min(this._bboxArray[7 * i + 1], o);
                        s = Math.min(this._bboxArray[7 * i + 2], s);
                        a = Math.min(this._bboxArray[7 * i + 3], a);
                        r = Math.max(this._bboxArray[7 * i + 4], r);
                        n = Math.max(this._bboxArray[7 * i + 5], n);
                        h = Math.max(this._bboxArray[7 * i + 6], h);
                    }
                    return [{
                        x: o - i,
                        y: s - i,
                        z: a - i
                    }, {
                        x: r + i,
                        y: n + i,
                        z: h + i
                    }];
                }
                splitNode(t) {
                    if (t.elementCount() <= this._maxTrianglesPerNode || 0 === t.elementCount()) return;
                    const e = t._startIndex,
                        o = t._endIndex,
                        s = [
                            [],
                            [],
                            []
                        ],
                        a = [
                            [],
                            [],
                            []
                        ],
                        r = [t.centerX(), t.centerY(), t.centerZ()],
                        n = [t._extentsMax.x - t._extentsMin.x, t._extentsMax.y - t._extentsMin.y, t._extentsMax.z - t._extentsMin.z],
                        l = [];
                    l.length = 3;
                    for (let t = e; t < o; t++) {
                        l[0] = .5 * (this._bboxArray[7 * t + 1] + this._bboxArray[7 * t + 4]);
                        l[1] = .5 * (this._bboxArray[7 * t + 2] + this._bboxArray[7 * t + 5]);
                        l[2] = .5 * (this._bboxArray[7 * t + 3] + this._bboxArray[7 * t + 6]);
                        for (let e = 0; e < 3; e++) l[e] < r[e] ? s[e].push(t) : a[e].push(t)
                    }
                    const u = [];
                    if (u.length = 3, u[0] = 0 === s[0].length || 0 === a[0].length, u[1] = 0 === s[1].length || 0 === a[1].length, u[2] = 0 === s[2].length || 0 === a[2].length, u[0] && u[1] && u[2]) return;
                    const d = [0, 1, 2];
                    let v, m;
                    d.sort(function(t, e) {
                        return n[e] - n[t]
                    });
                    for (let t = 0; t < 3; t++) {
                        const e = d[t];
                        if (!u[e]) {
                            v = s[e];
                            m = a[e];
                            break
                        }
                    }
                    const f = e,
                        p = f + v.length,
                        w = p,
                        E = o;
                    let R, T = t._startIndex;
                    const x = v.concat(m);
                    for (let t = 0; t < x.length; t++) { 
                        R = x[t]; 
                        h(this._bboxArray, R, this._bboxHelper, T);
                         T++; 
                    }
                    const D = this._bboxHelper.subarray(7 * t._startIndex, 7 * t._endIndex);
                    this._bboxArray.set(D, 7 * t._startIndex);
                    const N = this.calcExtents(f, p, i),
                        g = this.calcExtents(w, E, i),
                        P = new c(N[0], N[1], f, p, t._level + 1),
                        O = new c(g[0], g[1], w, E, t._level + 1);
                    t._node0 = P;
                    t._node1 = O;
                    t.clearShapes();
                    this._nodesToSplit.push(P);
                    this._nodesToSplit.push(O);
                }
                intersectRay(t, e, i) {
                    const o = [this._rootNode],
                        h = [],
                        l = [];
                    let c;
                    const u = new THREE.Vector3(1 / e.x, 1 / e.y, 1 / e.z);
                    for (; o.length > 0;) {
                        const e = o.pop();
                        if (a(t, u, e))
                            for (e._node0 && o.push(e._node0), e._node1 && o.push(e._node1), c = e._startIndex; c < e._endIndex; c++) h.push(this._bboxArray[7 * c])
                    }
                    const d = new THREE.Vector3(),
                        v = new THREE.Vector3(),
                        m = new THREE.Vector3(),
                        f = new THREE.Vector2(),
                        p = new THREE.Vector2(),
                        w = new THREE.Vector2(),
                        E = new THREE.Vector3(),
                        R = new THREE.Vector3(),
                        T = new THREE.Vector2(),
                        x = new THREE.Vector3(t.x, t.y, t.z),
                        D = new THREE.Vector3(e.x, e.y, e.z);
                    for (c = 0; c < h.length; c++) {
                        const t = h[c];
                        d.fromArray(this.positions, 9 * t);
                        v.fromArray(this.positions, 9 * t + 3);
                        m.fromArray(this.positions, 9 * t + 6);
                        const e = s(d, v, m, x, D, i);
                        if(e && (this.uvs && (f.fromArray(this.uvs, 6 * t), p.fromArray(this.uvs, 6 * t + 2), w.fromArray(this.uvs, 6 * t + 4), r(e, d, v, m, f, p, w, E, T)), n(d, v, m, R), l.push({
                            point: e,
                            uv: T,
                            face: {
                                index: t,
                                a: d.clone(),
                                b: v.clone(),
                                c: m.clone(),
                                normal: R
                            }
                        }))){}
                    }
                    return l
                }
            }(o, u, 7)
        };

        add(t) {
            if (this.meshes[t.uuid] || (this.meshes.push({
                id: t.uuid,
                val: t
            }), t.bvh = this.buildBVHTree(t))){}
        }
        intersectRay(t) {
            const e = new THREE.Ray,
                i = new THREE.Matrix4;
            let o = [];
            for (let s = 0; s < this.meshes.length; s++) {
                const a = this.meshes[s].val;
                e.origin.copy(t.origin);
                e.direction.copy(t.direction);
                i.getInverse(a.matrixWorld);
                e.origin.applyMatrix4(i);
                e.direction.transformDirection(i);
                const r = a.bvh.intersectRay(e.origin, e.direction, !0);
                r.length > 0 && r.forEach(function(e) {
                    e.object = a;
                    e.point.applyMatrix4(a.matrixWorld);
                    e.distance = t.origin.distanceToSquared(e.point);
                });
                o = o.concat(r);
            }
            return o.sort(function(t, e) {
                return t.distance > e.distance
            }), o
        }
    };
    const i = 1e-6;

    function o(t, e, i, o) {
        const s = {
            min: 0,
            max: 0
        };
        return o >= 0 ? (s.min = (t - i) * o, s.max = (e - i) * o) : (s.min = (e - i) * o, s.max = (t - i) * o), s
    }
    const s = function() {
        const t = new THREE.Vector3(),
            e = new THREE.Vector3(),
            i = new THREE.Vector3(),
            o = new THREE.Vector3();
        return function(s, a, r, n, h, l) {
            e.subVectors(a, s);
            i.subVectors(r, s);
            o.crossVectors(e, i);
            let c, u = h.dot(o);
            if (u > 0) {
                if (l) return null;
                c = 1
            } else {
                if (!(u < 0)) return null;
                c = -1;
                u = -u;
            }
            t.subVectors(n, s);
            const d = c * h.dot(i.crossVectors(t, i));
            if (d < 0) return null;
            const v = c * h.dot(e.cross(t));
            if (v < 0) return null;
            if (d + v > u) return null;
            const m = -c * t.dot(o);
            if (m < 0) return null;
            const f = m / u;
            return (new THREE.Vector3()).copy(h).multiplyScalar(f).add(n)
        }
    }();

    function a(t, e, i) {
        const s = o(i._extentsMin.x, i._extentsMax.x, t.x, e.x),
            a = o(i._extentsMin.y, i._extentsMax.y, t.y, e.y);
        if (s.min > a.max || a.min > s.max) return !1;
        (a.min > s.min || s.min != s.min) && (s.min = a.min);
        (a.max < s.max || s.max != s.max) && (s.max = a.max);
        const r = o(i._extentsMin.z, i._extentsMax.z, t.z, e.z);
        return !(s.min > r.max || r.min > s.max) && ((r.min > s.min || s.min != s.min) && (s.min = r.min), (r.max < s.max || s.max != s.max) && (s.max = r.max), !(s.max < 0))
    }

    function r(t, e, i, o, s, a, r, n, h) {
        return THREE.Triangle.getBarycoord(t, e, i, o, n), s.multiplyScalar(n.x), a.multiplyScalar(n.y), r.multiplyScalar(n.z), s.add(a).add(r), h.copy(s), h
    }

    function n(t, e, i, o) {
        const s = o || new THREE.Vector3(),
            a = new THREE.Vector3();
        s.subVectors(i, e);
        a.subVectors(t, e);
        s.cross(a);
        const r = s.lengthSq();
        return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0)
    }

    function h(t, e, i, o) {
        i[7 * o] = t[7 * e];
        i[7 * o + 1] = t[7 * e + 1];
        i[7 * o + 2] = t[7 * e + 2]; 
        i[7 * o + 3] = t[7 * e + 3];
        i[7 * o + 4] = t[7 * e + 4]; 
        i[7 * o + 5] = t[7 * e + 5];
        i[7 * o + 6] = t[7 * e + 6];
    }

    function l(t, e, i, o, s, a, r, n, h) {
        t[7 * e] = i;
        t[7 * e + 1] = o;
        t[7 * e + 2] = s;
        t[7 * e + 3] = a;
        t[7 * e + 4] = r;
        t[7 * e + 5] = n;
        t[7 * e + 6] = h;
    }
    class c {
        constructor(t, e, i, o, s) {
            this._extentsMin = t;
            this._extentsMax = e;
            this._startIndex = i;
            this._endIndex = o;
            this._level = s;
            this._node0 = null;
            this._node1 = null;
        }
        elementCount() {
            return this._endIndex - this._startIndex
        }
        centerX() {
            return .5 * (this._extentsMin.x + this._extentsMax.x)
        }
        centerY() {
            return .5 * (this._extentsMin.y + this._extentsMax.y)
        }
        centerZ() {
            return .5 * (this._extentsMin.z + this._extentsMax.z)
        }
        clearShapes() {
            this._startIndex = -1;
            this._endIndex = -1;
        }
    }
}, function(t, e, i) {
    i(8);
    
    t.exports = ELPIXEL.GBufferPass = class {
        constructor(t) {
            t = t || {}; 
            this.forceDepthAndNormalPass = void 0 === t.forceDepthAndNormalPass || t.forceDepthAndNormalPass;
            this.packingMode = void 0 !== t.packingMode ? t.packingMode : ELPIXEL.GBufferPass.DEPTH_NORMAL_16;
            this.vt = new THREE.MeshNormalMaterial();
            this.ft = new THREE.ShaderMaterial(ELPIXEL.PackingShader_DepthNormal16);
            this.pt = void 0 === t.linearDepth || t.linearDepth;

            if (this.pt ? (this.wt = new THREE.ShaderMaterial(ELPIXEL.PackingShader_Depth32), this.forceDepthAndNormalPass = !0) : (this.wt = new THREE.MeshDepthMaterial, this.wt.depthPacking = THREE.RGBADepthPacking)){}
        }
        dispose() {
            this.Et && this.Et.dispose();
            this.Rt && this.Rt.dispose();
            this.Tt && this.Tt.dispose();
        }
        setSize(t, e) {
            this.Et && this.Et.setSize(t, e);
            this.Rt && this.Rt.setSize(t, e);
            this.Tt && this.Tt.setSize(t, e);
        }
        render(t, e, i) {
            this.xt || this.Y(t);
            const o = t.getClearColor(),
                s = t.getClearAlpha(),
                a = t.autoClear,
                r = t.shadowMap.enabled;
            t.shadowMap.enabled = !1;
            t.autoClear = !1;
            t.setClearColor(new THREE.Color(0, 0, 0), 0);
            this.Dt(t, e, i);
            t.autoClear = a;
            t.shadowMap.enabled = r;
            t.setClearColor(o, s);
        }
        Y(t) {
            const e = t.extensions.get("WEBGL_depth_texture"),
                i = t.getDrawingBufferSize().width,
                o = t.getDrawingBufferSize().height;
            if (!this.forceDepthAndNormalPass && e && !this.Tt) {
                const t = {
                    minFilter: THREE.NearestFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBAFormat
                };
                this.Tt = new THREE.WebGLRenderTarget(i, o, t);
                if (this.at || (this.at = new THREE.DepthTexture(), this.at.type = THREE.UnsignedShortType)){};
                this.Tt.depthTexture = this.at;
            }
            if (!e || this.forceDepthAndNormalPass) {
                const t = {
                    minFilter: THREE.NearestFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBAFormat
                };

                if (this.packingMode === ELPIXEL.GBufferPass.NONE && (this.Rt || (this.Rt = new THREE.WebGLRenderTarget(i, o, t), this.Rt.depthTexture = this.at), this.Tt || (this.Tt = new THREE.WebGLRenderTarget(i, o, t), this.Tt.depthTexture = this.at)), this.packingMode === ELPIXEL.GBufferPass.DEPTH_NORMAL_16 && (this.Et || (this.Et = new THREE.WebGLRenderTarget(i, o, t), this.Et.depthTexture = this.at))){}
            }
            this.xt = !0
        }
        Dt(t, e, i) {
            (function(t) {
                t.traverse(function(t) {
                    if (t.isMesh || t.isLineSegments || t.isLine || t.isLineLoop || t.isPoints) {
                        let e = t.material && t.material.transparent || t.castAO;
                        if ((e = (e = t.material && t.material.transparent && !t.material.isShadowMaterial || !!t.castAO) || t.material.alphaTest > 0) && (t.aoVisibility = t.visible, t.visible = !1)
                        ){}
                    }
                })
            })(e);
            const o = t.extensions.get("WEBGL_depth_texture");
            if (o && !this.forceDepthAndNormalPass && (e.overrideMaterial = this.vt, t.render(e, i, this.Tt, !0), e.overrideMaterial = null), o && !this.forceDepthAndNormalPass || (this.packingMode === ELPIXEL.GBufferPass.NONE && (e.overrideMaterial = this.vt, t.render(e, i, this.Tt, !0), e.overrideMaterial = null, e.overrideMaterial = this.wt, this.wt.isMeshDepthMaterial || (this.wt.uniforms.cameraNearFar.value.x = i.near, this.wt.uniforms.cameraNearFar.value.y = i.far), t.render(e, i, this.Rt, !0), e.overrideMaterial = null), this.packingMode === ELPIXEL.GBufferPass.DEPTH_NORMAL_16 && (e.overrideMaterial = this.ft, this.ft.uniforms.cameraNearFar.value.x = i.near, this.ft.uniforms.cameraNearFar.value.y = i.far, t.render(e, i, this.Et, !0), e.overrideMaterial = null)),
                function(t) {
                    t.traverse(function(t) {
                        if (t.aoVisibility && (t.visible = t.aoVisibility, t.aoVisibility = void 0)){}
                    })
                }(e)){}
        }
    }
    
    ELPIXEL.GBufferPass.NONE = 0;
    ELPIXEL.GBufferPass.DEPTH_NORMAL_16 = 1;

}, function(t, e) {
    t.exports = ELPIXEL.PackingShader_DepthNormal16 = {
        uniforms: {
            cameraNearFar: {
                type: "v2",
                value: new THREE.Vector2()
            }
        },
        vertexShader: "varying vec3 viewNormal;      varying vec3 viewPosition;      void main() {        viewNormal = normalMatrix * normal;        viewPosition = (modelViewMatrix * vec4( position, 1.0 )).xyz;        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );      }",
        fragmentShader: "varying vec3 viewNormal;    uniform vec2 cameraNearFar;    varying vec3 viewPosition;      vec2 pack16(float value){          float sMax = 65535.0;          int v = int(clamp(value, 0.0, 1.0)*sMax+0.5);          int digit0 = v/256;          int digit1 = v-digit0*256;          return vec2(float(digit0)/255.0, float(digit1)/255.0);      }            vec2 packNormal(vec3 n){          float p = sqrt(n.z*8.0+8.0);          return vec2(n.xy/p + 0.5);      }            float linstep(float edge0, float edge1, float value){        return clamp((value-edge0)/(edge1-edge0), 0.0, 1.0);      }            void main() {        float linearZ = linstep(-cameraNearFar.x, -cameraNearFar.y, viewPosition.z);        vec2 packedZ = pack16(pow(linearZ, 0.5));        vec2 packedNormal = packNormal(normalize(viewNormal));        gl_FragColor = vec4(packedZ.x, packedZ.y, packedNormal.x, packedNormal.y);      }"
    };
    
    t.exports = ELPIXEL.PackingShader_Depth32 = {
        uniforms: {
            cameraNearFar: {
                type: "v2",
                value: new THREE.Vector2()
            }
        },
        vertexShader: "varying vec3 viewPosition;    void main() {      viewPosition = (modelViewMatrix * vec4( position, 1.0 )).xyz;      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );    }",
        fragmentShader: "#include <packing>  uniform vec2 cameraNearFar;  varying vec3 viewPosition;    float linstep(float edge0, float edge1, float value){      return clamp((value-edge0)/(edge1-edge0), 0.0, 1.0);    }        void main() {      float linearZ = linstep(-cameraNearFar.x, -cameraNearFar.y, viewPosition.z);      vec4 packedZ = packDepthToRGBA(pow(linearZ, 0.5));      gl_FragColor = packedZ;    }"
    }
}, function(t, e, i) {
    i(0);
    i(10);
    i(1);
    
    t.exports = ELPIXEL.AccumulativeSAOPass = class {
        constructor(t) {
            if (t = t || {}, this.intensity = void 0 !== t.intensity ? t.intensity : .25, this.occlusionWorldRadius = void 0 !== t.occlusionWorldRadius ? t.occlusionWorldRadius : .8, this.smoothTransition = void 0 === t.smoothTransition || t.smoothTransition, this.bias = void 0 !== t.bias ? t.bias : .001, this.numSamples = void 0 !== t.numSamples ? t.numSamples : 600, this.Nt = void 0 !== t.samplesPerFrame ? t.samplesPerFrame : 4, this.blurEnabled = !0, this.edgeSharpness = 10, this.enabled = !0, this.needsUpdate = !0, this.gt = 0, this.Pt(this.numSamples), this.Ot = new THREE.ShaderMaterial(ELPIXEL.AccumulativeSAOShader), this.Ot.uniforms = THREE.UniformsUtils.clone(this.Ot.uniforms), this.Ot.defines.SAMPLES_PER_FRAME = this.Nt, this.Mt = new THREE.ShaderMaterial(ELPIXEL.SmoothTransitionAOShader), this.A = 0
            ){}
        }
        convergenceMetric() {
            return this.enabled ? this.A * this.Nt / (this.Ct - 1) : 1
        }
        dispose() {
            if (this.St && (this.St.dispose(), this.Ht.dispose())){}
        }
        render(t, e, i, o) {
            if (this.needsUpdate && (this.A = 0, this.needsUpdate = !1), this.convergenceMetric() >= 1) return;
            if (this.A++, this.A = Math.min(this.A, this.Ct - 1), this.St || this.Y(t), this.Pt(this.numSamples)){};
            const s = t.getClearColor(),
                a = t.getClearAlpha(),
                r = t.autoClear;
            t.autoClear = !1;
            const n = t.getDrawingBufferSize().width,
                h = t.getDrawingBufferSize().height;
                if (this.Ot.uniforms.size.value.set(n, h), this.yt(e, i)){};
            const l = this.A % 2 == 0 ? this.Ht : this.St,
                c = this.A % 2 == 0 ? this.St : this.Ht;
            
            if (this._t(t, l, c), this.blurEnabled && this.convergenceMetric() > 0 && (o.edgeSharpness = this.edgeSharpness, o.render(t, c, e, i)), this.zt(t, l, c), t.autoClear = r, t.setClearColor(s), t.setClearAlpha(a), t.saoBuffer = this.smoothTransition ? l : c
            ){}
        }
        setSize(t, e) {
            if (this.Ht && this.Ht.setSize(t, e), this.St && this.St.setSize(t, e), this.Ot.uniforms.size.value.set(t, e)){}
        }
        Y(t) {
            const e = t.getDrawingBufferSize().width,
                i = t.getDrawingBufferSize().height;
            if (!this.St) {
                const t = {
                    minFilter: THREE.NearestFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBAFormat
                };
                if (this.St = new THREE.WebGLRenderTarget(e, i, t), this.Ht = new THREE.WebGLRenderTarget(e, i, t)){}
            }
        }
        _t(t, e, i) {
            if (this.Ot.uniforms.tAOSumPrevious.value = e, ELPIXEL.renderPass(t, this.Ot, i)){}
        }
        zt(t, e, i) {
            if (this.smoothTransition && (this.Mt.uniforms.saoAccumulationBuffer.value = i, this.Mt.uniforms.transition.value = this.convergenceMetric(), ELPIXEL.renderPass(t, this.Mt, e))
            ){}
        }
        yt(t, e) {
            const i = 1 / (2 * Math.tan(THREE.Math.DEG2RAD * t.fov / 2)),
                o = this.Ot.uniforms.saoData.value;
                if (o.x = i, o.y = this.intensity, o.z = this.occlusionWorldRadius, o.w = this.A){}
            const s = this.Ot.uniforms.saoBiasEpsilon.value;
            s.x = this.bias;
            s.y = .001;
            const a = this.Ot.uniforms.cameraNearFar.value;
            let r;
            a.x = t.near;
            a.y = t.far;
            this.Ot.uniforms.ProjectionMatrix.value = t.projectionMatrix;
            r = e.at ? e.at : e.Rt ? e.Rt.texture : null;
            const n = e.Tt ? e.Tt.texture : null;
            let h;
            e.Rt || (h = e.Et ? e.Et.texture : null);
            let l = e.at ? 0 : 1;
            
            if (e.forceDepthAndNormalPass && e.packingMode === ELPIXEL.GBufferPass.DEPTH_NORMAL_16 && (l = 2), this.Ot.defines.DEPTH_PACKING_MODE = l, this.Ot.defines.DEPTH_NORMAL_TEXTURE = h ? 1 : 0, this.Ot.defines.LINEAR_DEPTH = e.pt ? 1 : 0, h ? this.Ot.uniforms.tNormalDepth.value = h : (this.Ot.uniforms.tNormal.value = n, this.Ot.uniforms.tDepth.value = r), this.Ot.uniforms.tQuasiRandomSamples.value = this.It, this.Ot.uniforms.numQuasiSamples.value = this.It.image.width
            ){}
        }
        Pt(t) {
            if (t !== this.gt && (this.gt = t, this.At = ELPIXEL.generateQuasiRandomPoints(t, -1, ELPIXEL.lerpDistribution, ELPIXEL.insideCircle), this.It = ELPIXEL.createTextureFromRawData(ELPIXEL.randomizeArray(this.At)), this.Ct = this.At.length)
            ){}
        }
    }
}, function(t, e) {
    t.exports = ELPIXEL.AccumulativeSAOShader = {
        blending: THREE.NoBlending,
        defines: {
            SAMPLES_PER_FRAME: 4,
            DEPTH_PACKING_MODE: 1,
            PERSPECTIVE_CAMERA: 1,
            LINEAR_DEPTH: 1
        },
        uniforms: {
            tQuasiRandomSamples: {
                type: "t",
                value: null
            },
            tAOSumPrevious: {
                type: "t",
                value: null
            },
            tDepth: {
                type: "t",
                value: null
            },
            tNormal: {
                type: "t",
                value: null
            },
            tNormalDepth: {
                type: "t",
                value: null
            },
            cameraNearFar: {
                type: "v2",
                value: new THREE.Vector2()
            },
            saoData: {
                type: "v4",
                value: new THREE.Vector4()
            },
            ProjectionMatrix: {
                type: "m4",
                value: new THREE.Matrix4()
            },
            numQuasiSamples: {
                type: "f",
                value: 0
            },
            saoBiasEpsilon: {
                type: "v2",
                value: new THREE.Vector2()
            },
            size: {
                type: "v2",
                value: new THREE.Vector2(512, 512)
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["#include <common>", "#include <packing>", "varying vec2 vUv;", "uniform sampler2D tAOSumPrevious;", "uniform sampler2D tQuasiRandomSamples;", "uniform sampler2D tDepth;", "#if DEPTH_NORMAL_TEXTURE == 1", "uniform sampler2D tNormalDepth;", "#else", "uniform sampler2D tNormal;", "#endif", "uniform mat4 ProjectionMatrix;", "uniform vec4 saoData;", "uniform vec4 saoBiasEpsilon;", "uniform vec2 size;", "uniform vec2 cameraNearFar;", "uniform float numQuasiSamples;", "const float f_sampleCount = float( SAMPLES_PER_FRAME );", "#include <utilshader>", "float getViewDepth( const in float ndcDepth ) {", "#if PERSPECTIVE_CAMERA == 1", "return perspectiveDepthToViewZ( ndcDepth, cameraNearFar.x, cameraNearFar.y );", "#else", "return orthographicDepthToViewZ( ndcDepth, cameraNearFar.x, cameraNearFar.y );", "#endif", "}", "vec3 getViewPositionFromViewZ(const in vec2 uv, const in float viewDepth) {", "vec2 uv_ = 2. * uv - 1.;", "float xe = -(uv_.x + ProjectionMatrix[2][0]) * viewDepth/ProjectionMatrix[0][0];", "float ye = -(uv_.y + ProjectionMatrix[2][1]) * viewDepth/ProjectionMatrix[1][1];", "return vec3(xe, ye, viewDepth);", "}", "float getOcclusionFromPositionNormal( const in vec3 centerPosition, const in vec3 centerNormal, const in vec3 samplePosition ) {", "vec3 direction = samplePosition - centerPosition;", "float d2 = dot( direction, direction );", "return max( ( dot( centerNormal, direction ) + centerPosition.z * saoBiasEpsilon.x ) / ( d2 + saoBiasEpsilon.y ), 0.0 );", "}", "vec4 getOcclusion( const in vec3 centerPosition ) {", "vec3 centerNormal = getViewNormal( vUv );", "float screenOcclusionRadius = 200. * saoData.z * saoData.x / -centerPosition.z;", "if( screenOcclusionRadius < 1. ) {", "discard;", "}", "float random = rand( vUv );", "float randomAngle = random * PI2 + 2. * PI2 * (saoData.w - 1.0);", "float cosAngle = cos(randomAngle); float sinAngle = sin(randomAngle);", "mat2 randomRotationMatrix = mat2(cosAngle, sinAngle, -sinAngle, cosAngle);", "float texelSize = 1.0/numQuasiSamples;", "float occlusionSum = 0.0;", "for( int i = 0; i < SAMPLES_PER_FRAME; i ++ ) {", "float offset = (mod((float(i) + (saoData.w - 1.) * f_sampleCount), numQuasiSamples) + 0.5 ) * texelSize;", "vec2 randomSample = randomRotationMatrix * texture2D( tQuasiRandomSamples, vec2(offset, 0.5)).xw * screenOcclusionRadius/size;", "vec2 sampleUv = vUv + randomSample;", "float sampleDepthNDC = decodeDepth( sampleUv );", "if( sampleDepthNDC >= ( 1.0 - EPSILON ) ) {", "continue;", "}", "#if LINEAR_DEPTH == 0", "float sampleViewDepth = getViewDepth( sampleDepthNDC );", "vec3 samplePosition = getViewPositionFromViewZ( sampleUv, sampleViewDepth );", "#else", "sampleDepthNDC = mix(-cameraNearFar.x, -cameraNearFar.y, sampleDepthNDC);", "vec3 samplePosition = getViewPositionFromViewZ(sampleUv, sampleDepthNDC);", "#endif", "float occlusion = getOcclusionFromPositionNormal( centerPosition, centerNormal, samplePosition );", "occlusionSum += occlusion;", "}", "float occlusion = occlusionSum * saoData.y * 2.0 / f_sampleCount;", "return vec4(clamp(occlusion,0., 1.));", "}", "void main() {", "float centerDepth = decodeDepth( vUv );", "if( centerDepth >= ( 1.0 - EPSILON ) ) {", "discard;", "}", "#if LINEAR_DEPTH == 0", "float centerViewDepth = getViewDepth( centerDepth );", "#else", "float centerViewDepth = mix(-cameraNearFar.x, -cameraNearFar.y, centerDepth);", "#endif", "vec3 viewPosition = getViewPositionFromViewZ(vUv, centerViewDepth);", "float occlusion = getOcclusion( viewPosition ).r;", "float prevOcclusionSum = texture2D(tAOSumPrevious, vUv).r;", "float finalOcclusion = mix(prevOcclusionSum, occlusion, 1./saoData.w);", "gl_FragColor.gba = packFloatToRGB( centerDepth );", "gl_FragColor.r = clamp(finalOcclusion, 0., 1.);", "}"].join("\n")
    }
}, function(t, e, i) {
    i(0);
    i(12);
    
    t.exports = ELPIXEL.SAOPass = class {
        constructor(t) {
            if (t = t || {}, this.intensity = void 0 !== t.intensity ? t.intensity : .25, this.occlusionWorldRadius = void 0 !== t.occlusionWorldRadius ? t.occlusionWorldRadius : .8, this.bias = void 0 !== t.bias ? t.bias : .001, this.blurEnabled = !0, this.edgeSharpness = 1, this.needsUpdate = !0, this.Vt = new THREE.ShaderMaterial(ELPIXEL.SAOShader), this.Vt.uniforms = THREE.UniformsUtils.clone(this.Vt.uniforms), this.Vt.defines = Object.assign({}, this.Vt.defines), this.A = 0
            ){}
        }
        dispose() {
            if (this.St && (this.St.dispose(), this.St = null)){}
        }
        setSize(t, e) {
            if (this.St && this.St.setSize(t, e), this.Vt.uniforms.size.value.set(t, e)){}
        }
        yt(t, e) {
            const i = 1 / (2 * Math.tan(THREE.Math.DEG2RAD * t.fov / 2)),
                o = this.Vt.uniforms.saoData.value;
            if (o.x = i, o.y = this.intensity, o.z = this.occlusionWorldRadius, o.w = this.A++){}
            const s = this.Vt.uniforms.saoBiasEpsilon.value;
            s.x = this.bias;
            s.y = .001;
            const a = this.Vt.uniforms.cameraNearFar.value;
            let r;
            if (a.x = t.near, a.y = t.far, this.Vt.uniforms.ProjectionMatrix.value = t.projectionMatrix, r = e.at ? e.at : e.Rt ? e.Rt.texture : null){}
                const n = e.Tt ? e.Tt.texture : null;
            let h;
            e.Rt || (h = e.Et ? e.Et.texture : null);
            let l = e.at ? 0 : 1;
            
            if (e.forceDepthAndNormalPass && e.packingMode === ELPIXEL.GBufferPass.DEPTH_NORMAL_16 && (l = 2), this.Vt.defines.DEPTH_PACKING_MODE = l, this.Vt.defines.DEPTH_NORMAL_TEXTURE = h ? 1 : 0, this.Vt.defines.LINEAR_DEPTH = e.pt ? 1 : 0, h ? this.Vt.uniforms.tNormalDepth.value = h : (this.Vt.uniforms.tNormal.value = n, this.Vt.uniforms.tDepth.value = r)
            ){}
        }
        convergenceMetric() {
            return this.A > 1 ? 1 : 0
        }
        render(t, e, i, o) {
            if (this.needsUpdate && (this.A = 0, this.needsUpdate = !1)){}
            this.convergenceMetric();
             this.St || this.Y(t);
            const s = t.getDrawingBufferSize().width,
                a = t.getDrawingBufferSize().height;
                if (this.Vt.uniforms.size.value.set(s, a), this.yt(e, i)){}
            const r = t.getClearColor(),
                n = t.getClearAlpha(),
                h = t.autoClear;
                if (t.autoClear = !1, ELPIXEL.renderPass(t, this.Vt, this.St), this.blurEnabled && (o.edgeSharpness = this.edgeSharpness, o.render(t, this.St, e, i)), t.autoClear = h, t.setClearColor(r), t.setClearAlpha(n), t.saoBuffer = this.St
                ){}
        }
        Y(t) {
            const e = t.getDrawingBufferSize().width,
                i = t.getDrawingBufferSize().height;
            if (!this.St) {
                const t = {
                    minFilter: THREE.NearestFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBAFormat
                };
                this.St = new THREE.WebGLRenderTarget(e, i, t)
            }
        }
    }
}, function(t, e) {
    t.exports = ELPIXEL.SAOShader = {
        defines: {
            NUM_SAMPLES: 11,
            NUM_SPIRAL_TURNS: 3,
            DEPTH_NORMAL_TEXTURE: 0,
            DEPTH_PACKING_MODE: 1,
            PERSPECTIVE_CAMERA: 1
        },
        uniforms: {
            tDepth: {
                type: "t",
                value: null
            },
            tNormal: {
                type: "t",
                value: null
            },
            tNormalDepth: {
                type: "t",
                value: null
            },
            cameraNearFar: {
                type: "v2",
                value: new THREE.Vector2()
            },
            saoData: {
                type: "v4",
                value: new THREE.Vector4()
            },
            size: {
                type: "v2",
                value: new THREE.Vector2(512, 512)
            },
            ProjectionMatrix: {
                type: "m4",
                value: new THREE.Matrix4()
            },
            saoBiasEpsilon: {
                type: "v2",
                value: new THREE.Vector2()
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["#include <common>", "#include <packing>", "varying vec2 vUv;", "uniform sampler2D tDepth;", "#if DEPTH_NORMAL_TEXTURE == 1", "uniform sampler2D tNormalDepth;", "#else", "uniform sampler2D tNormal;", "#endif", "uniform vec2 cameraNearFar;", "uniform mat4 ProjectionMatrix;", "uniform vec4 saoData;", "uniform vec2 saoBiasEpsilon;", "uniform vec2 size;", "#include <utilshader>", "const float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );", "float getViewZFromNDCZ( const in float depth ) {", "#if PERSPECTIVE_CAMERA == 1", "return perspectiveDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );", "#else", "return orthographicDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );", "#endif", "}", "vec3 getViewPositionFromViewZ(const in vec2 uv, const in float viewDepth) {", "vec2 uv_ = 2. * uv - 1.;", "float xe = -(uv_.x + ProjectionMatrix[2][0]) * viewDepth/ProjectionMatrix[0][0];", "float ye = -(uv_.y + ProjectionMatrix[2][1]) * viewDepth/ProjectionMatrix[1][1];", "return vec3(xe, ye, viewDepth);", "}", "float random3(vec3 v) { ", "v  = fract(v * 443.8975);", "v += dot(v, v.yzx + 19.19);", "return fract((v.x + v.y) * v.z);", "}", "vec3 getPositionFromOffset(const in vec2 uv, const in vec2 offset, const in float screenSpaceRadius) {", "vec2 uvOffset = uv + floor(screenSpaceRadius * offset)/size;", "float d = decodeDepth(uvOffset);", "#if LINEAR_DEPTH == 0", "float centerViewZ = getViewZFromNDCZ( d );", "return getViewPositionFromViewZ( uvOffset, centerViewZ );", "#else", "d = mix(-cameraNearFar.x, -cameraNearFar.y, d);", "return getViewPositionFromViewZ(uvOffset, d);", "#endif", "}", "float getOcclusion(const in vec2 uv, const in int id, const in float randomAngle, const in float occlusionSphereRadius, const in vec3 centerPosition, const in vec3 centerNormal) {", "float screenSpaceRadius = (float(id) + mod(randomAngle, 1.) + 0.5) * INV_NUM_SAMPLES; ", "float angle = screenSpaceRadius * (float(NUM_SPIRAL_TURNS) * 6.28) + randomAngle; ", "screenSpaceRadius = (screenSpaceRadius * occlusionSphereRadius);", "vec2 offset = vec2(cos(angle), sin(angle));", "vec3 samplePosition = getPositionFromOffset(uv, offset, screenSpaceRadius);", "vec3 direction = samplePosition - centerPosition;", "float d2 = dot( direction, direction );", "float ao = max( ( dot( centerNormal, direction ) + centerPosition.z * saoBiasEpsilon.x ) / ( d2 + saoBiasEpsilon.y ), 0.0 );", "return ao;", "}", "void main() {", "float centerDepth = decodeDepth( vUv );", "if( centerDepth >= ( 1.0 - EPSILON ) ) {", "discard;", "}", "#if LINEAR_DEPTH == 0", "float centerViewZ = getViewZFromNDCZ( centerDepth );", "#else", "float centerViewZ = mix(-cameraNearFar.x, -cameraNearFar.y, centerDepth);", "#endif", "vec3 centerPosition = getViewPositionFromViewZ( vUv, centerViewZ );", "vec3 centerNormal = getViewNormal(vUv);", "float occlusionSphereScreenRadius = 200. * saoData.z/ (-centerPosition.z);", "if( occlusionSphereScreenRadius < 1. ) {", "discard;", "}", "float randomAngle = 6.2 * random3( vec3( vUv, saoData.w * 0.1 ) );", "float sum = 0.0;", "sum += getOcclusion(vUv, 0, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "sum += getOcclusion(vUv, 1, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "sum += getOcclusion(vUv, 2, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "sum += getOcclusion(vUv, 3, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "sum += getOcclusion(vUv, 4, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "sum += getOcclusion(vUv, 5, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "sum += getOcclusion(vUv, 6, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "sum += getOcclusion(vUv, 7, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "sum += getOcclusion(vUv, 8, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "sum += getOcclusion(vUv, 9, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "sum += getOcclusion(vUv, 10, randomAngle, occlusionSphereScreenRadius, centerPosition, centerNormal);", "float aoValue = sum * saoData.y * INV_NUM_SAMPLES;", "gl_FragColor.gba = packFloatToRGB( centerDepth );", "gl_FragColor.r = max( aoValue, 0.0 );", "}"].join("\n")
    }
}, function(t, e, i) {
    function o(t, e) {
        t.traverse(function(t) {
            if (t.isMesh || t.isLineSegments || t.isLine || t.isLineLoop || t.isPoints) {
                if ((e ? t.castShadow : t.receiveShadow) || (t.oldVisibility = t.visible, t.visible = !1)){}
            }
        })
    }

    function s(t) {
        t.traverse(function(t) {
            if (t.oldVisibility && (t.visible = t.oldVisibility, t.oldVisibility = void 0)){}
        })
    }
    i(0);
    i(1);
    i(14);
    
    t.exports = ELPIXEL.ShadowPass = class {
        constructor(t) {
            if (t = t || {}, this.linearDepth = void 0 !== t.linearDepth ? t.linearDepth : 1, this.shadowMapResolution = void 0 !== t.shadowMapResolution ? t.shadowMapResolution : 1024, this.shadowRadius = void 0 !== t.shadowRadius ? t.shadowRadius : 1, this.shadowQuality = void 0 !== t.shadowQuality ? t.shadowQuality : 1, this.smoothTransition = void 0 === t.smoothTransition || t.smoothTransition, this.shadowBiasMultiplier = void 0 !== t.shadowBiasMultiplier ? t.shadowBiasMultiplier : 1, this.numSamples = void 0 !== t.numSamples ? t.numSamples : 100, this.side = void 0 !== t.side ? t.side : THREE.FrontSide){}
            
                const e = void 0 !== t.nearPlane ? t.nearPlane : .1,
                i = void 0 !== t.farPlane ? t.farPlane : 10,
                o = void 0 !== t.fov ? t.fov : 110;
            
                if (this.Ft = new THREE.PerspectiveCamera(o, 1, e, i), this.gt = 0, this.Ut(this.numSamples), this.A = 0, this.Xt = 0, this.bt = new THREE.Vector3, this.Lt = new THREE.Vector3(0, -1, 0), this.Bt = new THREE.Vector3, this.kt = new THREE.Matrix4, this.lights = [], this.enabled = !0, this.enableAccumulation = !0, this.needsUpdate = !0, this.shadowRecieverBBox = null){}
        }
        convergenceMetric() {
            if (!this.enabled) return 1;
            let t = 0;
            return this.lights.forEach(e => {
                e.castShadow && t++
            }), 0 !== t ? this.A / (t * this.Wt.length) : 1
        }
        render(t, e, i) {
            if (this.needsUpdate && (this.A = 0, this.Xt = 0, this.needsUpdate = !1, this.lights.forEach(t => {
                    t.A = 0
                })), !this.enableAccumulation && this.A > 0) return;
            if (this.convergenceMetric() >= 1) return;
            const o = t.getDrawingBufferSize().width,
                s = t.getDrawingBufferSize().height;
                if (this.Zt || (this.Ft.layers.mask = i.layers.mask, this.jt(o, s)), this.Ut(this.numSamples)){}
            const a = t.getClearColor(),
                r = t.getClearAlpha(),
                n = t.autoClear;
            let h, l;
            
            this.lights.forEach(o => {
                this.A = Math.min(this.A, this.lights.length * this.Wt.length);
                this.A++;
                o.A++;
                this.Xt += o.intensity;
                this.Gt(o);
                this.Qt(t, e, this.bt, this.Zt);
                h = this.A % 2 == 0 ? this.Kt : this.Jt;
                l = this.A % 2 == 0 ? this.Jt : this.Kt;
                this.Yt(t, e, i, h, l, o);
                
                if (this.smoothTransition && this.A === this.lights.length && ELPIXEL.blit(t, l, this.qt)){}
            });
            
            if (this.smoothTransition && (this.Mt.uniforms.shadowAccumulationBuffer.value = l, this.Mt.uniforms.firstFrameShadowBuffer.value = this.qt, this.Mt.uniforms.transition.value = this.convergenceMetric(), ELPIXEL.renderPass(t, this.Mt, h)), t.autoClear = n, t.setClearColor(a), t.setClearAlpha(r), this.lights.forEach(t => {
                t.shadow.map = this.smoothTransition ? h : l
            })){}
        }
        setSize(t, e) {
            if (this.Kt && this.Kt.setSize(t, e), this.Jt && this.Jt.setSize(t, e), this.Zt && this.Zt.setSize(t, e), this.qt && this.qt.setSize(t, e), this.$t && this.$t.uniforms.shadowBufferSize.value.set(t, e)
            ){}
        }
        jt(t, e) {
            const i = {
                format: THREE.RGBAFormat,
                minFilter: THREE.NearestFilter,
                magFilter: THREE.NearestFilter
            };
            this.Zt = new THREE.WebGLRenderTarget(this.shadowMapResolution, this.shadowMapResolution, i);
            this.Kt = new THREE.WebGLRenderTarget(t, e, i);
            this.Jt = new THREE.WebGLRenderTarget(t, e, i);
            this.qt = new THREE.WebGLRenderTarget(t, e, i);
            this.Zt.texture.generateMipmaps = !1;
            this.Kt.texture.generateMipmaps = !1;
            this.Jt.texture.generateMipmaps = !1;
            this.qt.texture.generateMipmaps = !1;
            
            if (this.linearDepth ? (this.wt = new THREE.ShaderMaterial(ELPIXEL.PackingShader_Depth32), this.wt.uniforms = THREE.UniformsUtils.clone(this.wt.uniforms), this.wt.side = this.side) : this.wt = new THREE.MeshDepthMaterial({
                depthPacking: THREE.RGBADepthPacking,
                side: this.side
            })){}
            
            if (this.$t = new THREE.ShaderMaterial(ELPIXEL.AccumulativeShadowsShader), this.$t.uniforms = THREE.UniformsUtils.clone(this.$t.uniforms), this.$t.uniforms.shadowBufferSize.value = new THREE.Vector2(t, e), this.$t.uniforms.shadowMap.value = this.Zt, this.$t.uniforms.shadowData.value = new THREE.Vector4(0, 1, 1, 1), this.$t.uniforms.shadowMapResolution.value = new THREE.Vector2(this.shadowMapResolution, this.shadowMapResolution), this.$t.defines.SHADOW_QUALITY = this.shadowQuality, this.$t.defines.LINEAR_DEPTH = this.linearDepth, this.Mt = new THREE.ShaderMaterial(ELPIXEL.SmoothTransitionShadowShader), this.Mt.uniforms = THREE.UniformsUtils.clone(this.Mt.uniforms)
            ){}
        }
        Yt(t, e, i, a, r, n) {
            this.Ft.matrixWorldInverse.getInverse(this.Ft.matrixWorld);
            this.kt.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
            this.kt.multiply(this.Ft.projectionMatrix);
            this.kt.multiply(this.Ft.matrixWorldInverse);
            this.$t.uniforms.shadowMatrix.value.copy(this.kt);
            this.$t.uniforms.shadowData.value.x = this.Xt;
            this.$t.uniforms.shadowData.value.y = this.shadowRadius;
            this.$t.uniforms.shadowData.value.z = this.shadowBiasMultiplier;
            this.$t.uniforms.shadowData.value.w = n.intensity;
            this.$t.uniforms.shadowAccumulationBuffer.value = a;
            this.$t.uniforms.vplPosition.value = this.Ft.position;
            this.$t.uniforms.cameraNearFar.value.x = this.Ft.near;
            this.$t.uniforms.cameraNearFar.value.y = this.Ft.far;
            t.setClearColor(0);
            o(e, !1);
            const h = t.shadowMap.enabled;
            t.shadowMap.enabled = !1;
            e.overrideMaterial = this.$t;
            t.render(e, i, r, !0);
            e.overrideMaterial = null;
            s(e);
            t.shadowMap.enabled = h;
        }
        Qt(t, e, i, a) {
            o(e, !0);
            this.Ft.position.copy(i);
            this.Bt.copy(i); 
            this.Bt.addScaledVector(this.Lt, 10);
            this.Ft.lookAt(this.Bt);
            this.Ft.updateMatrixWorld();
            e.overrideMaterial = this.wt;
            
            if (this.linearDepth && (this.wt.uniforms.cameraNearFar.value.x = this.Ft.near, this.wt.uniforms.cameraNearFar.value.y = this.Ft.far), t.setClearColor(0), t.render(e, this.Ft, a, !0), e.overrideMaterial = null, s(e)
            ){}
        }
        Gt(t) {
            let e = t.A - 1;
            const i = t.matrixWorld;
            e %= this.Wt.length - 1;
            const o = this.Wt[e];
            if (this.bt.x = (o.x - .5) * t.width, this.bt.z = 0, this.bt.y = (o.y - .5) * t.height, this.bt.applyMatrix4(i), this.Lt.set(0, 0, 1), this.Lt.transformDirection(i), this.shadowRecieverBBox) {
                const t = ELPIXEL.calculateFOV(this.shadowRecieverBBox, this.bt, this.Lt);
                this.setFOV(t)
            }
        }
        setShadowRecieverBBox(t) {
            this.shadowRecieverBBox = t
        }
        setFOV(t) {
            this.Ft.fov = t;
            this.Ft.updateProjectionMatrix();
        }
        Ut(t) {
            if (t !== this.gt && (this.gt = t, this.Wt = ELPIXEL.generateQuasiRandomPoints(t, -1, ELPIXEL.uniformDistribution, ELPIXEL.insideRectangle), this.Wt = ELPIXEL.randomizeArray(this.Wt), this.Wt.splice(0, 0, new THREE.Vector2(.5, .5)))
            ){}
        }
    }
}, function(t, e) {
    t.exports = ELPIXEL.AccumulativeShadowsShader = {
        defines: {
            SHADOW_QUALITY: 1,
            LINEAR_DEPTH: 1
        },
        uniforms: {
            shadowMap: {
                value: null
            },
            shadowAccumulationBuffer: {
                value: null
            },
            shadowBufferSize: {
                value: null
            },
            shadowMatrix: {
                value: new THREE.Matrix4()
            },
            vplPosition: {
                value: new THREE.Vector3()
            },
            shadowData: {
                value: new THREE.Vector4()
            },
            cameraNearFar: {
                value: new THREE.Vector2()
            },
            shadowMapResolution: {
                value: null
            },
            normalBias: {
                value: 1
            }
        },
        vertexShader: ["varying vec3 viewNormal;", "varying vec3 lightVector;", "varying vec4 shadowCoord;", "uniform vec3 vplPosition;", "uniform mat4 shadowMatrix;", "uniform float normalBias;", "void main() {", "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "viewNormal = normalize(normalMatrix * normal);", "vec3 vplPositionEyeSpace = (viewMatrix * vec4(vplPosition, 1.0)).xyz;", "lightVector = vplPositionEyeSpace - (modelViewMatrix * vec4( position, 1.0 )).xyz;", "lightVector = normalize(lightVector);", "shadowCoord = shadowMatrix * worldPosition;", "float nDotL = clamp( dot(lightVector, viewNormal), 0.0, 1.0);", "worldPosition.xyz += normalize((modelMatrix * vec4( normal, 0.0 )).xyz) * 0.02 * normalBias * pow( 1.0 -  nDotL * nDotL, 4.);", "shadowCoord.xy = (shadowMatrix * worldPosition).xy;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["#include <common>", "#include <packing>", "varying vec3 viewNormal;", "varying vec3 lightVector;", "varying vec4 shadowCoord;", "uniform vec2 shadowBufferSize;", "uniform vec2 shadowMapResolution;", "uniform sampler2D shadowMap;", "uniform sampler2D shadowAccumulationBuffer;", "uniform vec4 shadowData;", "uniform vec2 cameraNearFar;", "float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {", "#if LINEAR_DEPTH == 0", "float shadowDepth = unpackRGBAToDepth( texture2D( depths, uv ) );", "#else", "float nDotL = clamp( dot(normalize(lightVector), normalize(viewNormal)), 0.0, 1.0);", "float shadowDepth = pow2(unpackRGBAToDepth(texture2D( depths, uv ))) + 0.01 * shadowData.z;", "shadowDepth = shadowDepth * ( cameraNearFar.y - cameraNearFar.x ) + cameraNearFar.x;", "#endif", "return step( compare, shadowDepth );", "}", "float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {", "const vec2 offset = vec2( 0.0, 1.0 );", "vec2 texelSize = vec2( 1.0 ) / size;", "vec2 centroidUV = floor( uv * size + 0.5 ) / size;", "float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );", "float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );", "float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );", "float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );", "vec2 f = fract( uv * size + 0.5 );", "float a = mix( lb, lt, f.y );", "float b = mix( rb, rt, f.y );", "float c = mix( a, b, f.x );", "return c;", "}", "void main() {", "float shadowValue = 1.0;", "float shadowRadius = shadowData.y;", "float shadowBiasMultiplier = shadowData.z;", "float nDotL = clamp( dot(lightVector, normalize(viewNormal)), 0.0, 1.0);", "float shadowBias = 0.02 *  sqrt( 1.0 -  nDotL * nDotL) / clamp(nDotL, 0.0006,  1.0);", "shadowBias = clamp(shadowBias, 0.0001,  0.0003) * shadowBiasMultiplier;", "vec3 shadowCoordNDC = shadowCoord.xyz/shadowCoord.w;", "shadowCoordNDC.z -= shadowBias;", "#if LINEAR_DEPTH == 1", "float linearDepth = shadowCoord.z + 2.0*cameraNearFar.y*cameraNearFar.x/(cameraNearFar.y - cameraNearFar.x);", "linearDepth *= -((cameraNearFar.y - cameraNearFar.x)/(cameraNearFar.y + cameraNearFar.x));", "linearDepth = -linearDepth;", "#endif", "bvec4 inFrustumVec = bvec4 ( shadowCoordNDC.x >= 0.0, shadowCoordNDC.x <= 1.0, shadowCoordNDC.y >= 0.0, shadowCoordNDC.y <= 1.0 );", "bool inFrustum = all( inFrustumVec );", "bvec2 frustumTestVec = bvec2( inFrustum, shadowCoordNDC.z <= 1.0 );", "bool frustumTest = all( frustumTestVec );", "#if LINEAR_DEPTH == 1", "shadowCoordNDC.z = linearDepth;", "#endif", "if(frustumTest) {", "#if SHADOW_QUALITY == 0", "shadowValue = texture2DCompare(shadowMap, shadowCoordNDC.xy, shadowCoordNDC.z);", "#elif SHADOW_QUALITY == 1", "vec2 texelSize = vec2( 1.0 ) / shadowMapResolution;", "float dx0 = - texelSize.x * shadowRadius;", "float dy0 = - texelSize.y * shadowRadius;", "float dx1 = + texelSize.x * shadowRadius;", "float dy1 = + texelSize.y * shadowRadius;", "float theta = rand( shadowCoord.xy ) * PI2;", "float snTheta = sin(theta);", "float csTheta = cos(theta);", "mat2 randomRotationMatrix = mat2(csTheta, snTheta, -snTheta, csTheta);", "shadowValue = (", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, dy0 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( 0.0, dy0 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, dy0 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, 0.0 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy, shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, 0.0 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, dy1 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( 0.0, dy1 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, dy1 ), shadowCoordNDC.z )", ") * ( 1.0 / 9.0 );", "#elif SHADOW_QUALITY == 2", "vec2 texelSize = vec2( 1.0 ) / shadowMapResolution;", "float dx0 = - texelSize.x * shadowRadius;", "float dy0 = - texelSize.y * shadowRadius;", "float dx1 = + texelSize.x * shadowRadius;", "float dy1 = + texelSize.y * shadowRadius;", "float theta = rand( shadowCoord.xy ) * PI2;", "float snTheta = sin(theta);", "float csTheta = cos(theta);", "mat2 randomRotationMatrix = mat2(csTheta, snTheta, -snTheta, csTheta);", "shadowValue = ( ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, dy0 ), shadowCoordNDC.z ) + ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( 0.0, dy0 ), shadowCoordNDC.z ) + ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, dy0 ), shadowCoordNDC.z ) + ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, 0.0 ), shadowCoordNDC.z ) + ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy, shadowCoordNDC.z ) + ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, 0.0 ), shadowCoordNDC.z ) +", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, dy1 ), shadowCoordNDC.z ) +", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( 0.0, dy1 ), shadowCoordNDC.z ) +", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, dy1 ), shadowCoordNDC.z )", ") * ( 1.0 / 9.0 );", "#endif", "}", "float previousAccumulation = unpackRGBAToDepth(texture2D( shadowAccumulationBuffer, gl_FragCoord.xy/shadowBufferSize ));", "float t = shadowData.w/shadowData.x;", "float shadowAccumulation = mix(previousAccumulation, shadowValue, t);", "gl_FragColor = packDepthToRGBA(shadowAccumulation);", "}"].join("\n")
    }
}, function(t, e, i) {
    if (i(0), i(1), i(16), i(17)){}
    
    t.exports = ELPIXEL.PlaneShadowBakePass = class {
        constructor(t) {
            if (t = t || {}, this.linearDepth = void 0 !== t.linearDepth ? t.linearDepth : 1, this.shadowMapResolution = void 0 !== t.shadowMapResolution ? t.shadowMapResolution : 1024, this.shadowRadius = void 0 !== t.shadowRadius ? t.shadowRadius : 1, this.shadowQuality = void 0 !== t.shadowQuality ? t.shadowQuality : 1, this.smoothTransition = void 0 === t.smoothTransition || t.smoothTransition, this.shadowBiasMultiplier = void 0 !== t.shadowBiasMultiplier ? t.shadowBiasMultiplier : 1, this.numSamples = void 0 !== t.numSamples ? t.numSamples : 2e3, this.numSamplesPerFrame = void 0 !== t.numSamplesPerFrame ? t.numSamplesPerFrame : 2, this.darkness = void 0 !== t.darkness ? t.darkness : 1, this.falloff = void 0 !== t.falloff ? t.falloff : 2, this.size = void 0 !== t.size ? t.size : 1, this.onComplete = t.onComplete, this.onProgress = t.onProgress, this.enable = void 0 === t.enable || t.enable
            ){}
            const e = void 0 !== t.nearPlane ? t.nearPlane : .1,
                i = void 0 !== t.farPlane ? t.farPlane : 10;
            this.Ft = new THREE.OrthographicCamera(-3, 3, 3, -3, e, i);
            this.boundingRadius = 10;
            this.gt = 0;
            this.Ut(this.numSamples);
            this.A = 0;
            this.bt = new THREE.Vector3();
            this.Lt = new THREE.Vector3(0, -1, 0);
            this.Bt = new THREE.Vector3();
            this.kt = new THREE.Matrix4();
            this.needsUpdate = !0;
            this.te = new THREE.Mesh(
                new THREE.PlaneBufferGeometry(1, 1),
             new THREE.MeshBasicMaterial({
                color: 16777215
            }));
            this.te.rotation.x = -Math.PI / 2;
            this.te.receiveShadow = !0;
            this.ee = new THREE.Scene();
            this.ee.add(this.te);
            this.ie = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), new THREE.MeshBasicMaterial({
                color: 16777215,
                transparent: !0
            }));
            this.ie.rotation.x = -Math.PI / 2;
            this.ie.receiveShadow = !0;
            this.oe = !0;
            this.se = !1
        }
        convergenceMetric() {
            return this.A / this.Wt.length
        }
        getShadowPlane() {
            return this.ie
        }
        update(t) {
            this.ae = new THREE.Box3();
            t.traverse(t => {
                t.isMesh && t.castShadow && this.ae.expandByObject(t);
            });
            const e = new THREE.Sphere();
            this.ae.getBoundingSphere(e);
            const i = 2.5 * e.radius * this.size;
            if (0 === i) return;
            this.te.scale.set(i, i, i);
            const o = new THREE.Vector3();

            this.ae.getCenter(o);
            this.te.position.set(o.x, this.ae.min.y, o.z);
            this.ie.position.set(o.x, this.ae.min.y, o.z);
            this.ie.scale.copy(this.te.scale);
            this.boundingRadius = 2 * e.radius;
            this.Ft.left = -e.radius;
            this.Ft.right = e.radius;
            this.Ft.bottom = -e.radius;
            this.Ft.top = e.radius;
            this.Ft.far = this.boundingRadius + 10;
            this.Ft.updateProjectionMatrix();
            this.needsUpdate = !0;
            this.se = !1;
        }
        render(t, e, i) {
            if (!this.enable) return;
            if (this.ae || this.update(e), this.needsUpdate && (this.A = 0, this.needsUpdate = !1)){}
            const o = this.convergenceMetric();
            if (o >= 1) return void(this.onComplete && !this.se && (this.onComplete(), this.se = !0));
            
            this.onProgress && this.onProgress(o);
            
            if (this.Zt || (this.Ft.layers.mask = i.layers.mask, this.jt()), this.Ut(this.numSamples)){}
            
            const s = t.getClearColor(),
                a = t.getClearAlpha(),
                r = t.autoClear;
            let n, h;

            for (let o = 0; o < this.numSamplesPerFrame; o++) { 
                this.A = Math.min(this.A, this.Wt.length - 1);
                this.A++;
                this.re();
                this.Qt(t, e, this.bt, this.Zt);

                if (n = this.A % 2 == 0 ? this.Kt : this.Jt, h = this.A % 2 == 0 ? this.Jt : this.Kt, this.Yt(t, e, i, n, h)){}
            }

            this.oe && this.ne(t, h, n);
            
            this.Mt.uniforms.shadowAccumulationBuffer.value = h;
            this.Mt.uniforms.transition.value = this.smoothTransition ? this.convergenceMetric() : 1;

            const l = this.Mt.uniforms.shadowData.value;
            
            l.x = this.darkness;
            l.y = this.falloff;
            
            ELPIXEL.renderPass(t, this.Mt, n);
            
            t.autoClear = r;
            t.setClearColor(s);
            t.setClearAlpha(a);
            
            this.ie.material.map = n.texture;
        }
        setSize(t, e) {
            if (this.Kt && this.Kt.setSize(t, e), 
            this.Jt && this.Jt.setSize(t, e), 
            this.Zt && this.Zt.setSize(t, e), 
            this.$t.uniforms.shadowBufferSize.value.set(t, e)){}
        }
        ne(t, e, i) {
            if (this.he || (this.he = new THREE.ShaderMaterial(ELPIXEL.BlurShader)),
                this.he.uniforms.tDiffuse.value = e,
                this.he.uniforms.direction.value = new THREE.Vector3(1, 0),
                this.he.uniforms.size.value.x = i.width,
                this.he.uniforms.size.value.y = i.height,
                ELPIXEL.renderPass(t, this.he, i), 
                this.he.uniforms.tDiffuse.value = i, 
                this.he.uniforms.direction.value = new THREE.Vector3(0, 1), 
                this.he.uniforms.size.value.x = i.width, 
                this.he.uniforms.size.value.y = i.height, 
                ELPIXEL.renderPass(t, this.he, e)){}
        }
        jt() {
            const t = {
                format: THREE.RGBAFormat,
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter
            };
            this.Zt = new THREE.WebGLRenderTarget(this.shadowMapResolution, this.shadowMapResolution, t);
            this.Kt = new THREE.WebGLRenderTarget(this.shadowMapResolution, this.shadowMapResolution, t);
            this.Jt = new THREE.WebGLRenderTarget(this.shadowMapResolution, this.shadowMapResolution, t);
            this.Zt.texture.generateMipmaps = !1;
            this.Kt.texture.generateMipmaps = !1;
            this.Jt.texture.generateMipmaps = !1;
            
            if (this.linearDepth ? (this.wt = new THREE.ShaderMaterial(ELPIXEL.PackingShader_Depth32), this.wt.uniforms = THREE.UniformsUtils.clone(this.wt.uniforms)) : this.wt = new THREE.MeshDepthMaterial({
                depthPacking: THREE.RGBADepthPacking
            })){}
            
            this.$t = new THREE.ShaderMaterial(ELPIXEL.SoftShadowPlaneShader);
            this.$t.uniforms = THREE.UniformsUtils.clone(this.$t.uniforms);
            this.$t.uniforms.shadowBufferSize.value = new THREE.Vector2(this.shadowMapResolution, this.shadowMapResolution);
            this.$t.uniforms.shadowMap.value = this.Zt;
            this.$t.uniforms.shadowData.value = new THREE.Vector4(0, 1, 1, 1);
            this.$t.uniforms.shadowMapResolution.value = new THREE.Vector2(this.shadowMapResolution, this.shadowMapResolution);
            this.$t.defines.SHADOW_QUALITY = this.shadowQuality;
            this.$t.defines.LINEAR_DEPTH = this.linearDepth;
            this.Mt = new THREE.ShaderMaterial(ELPIXEL.SmoothTransitionSoftShadowShadowShader);
            this.Mt.uniforms = THREE.UniformsUtils.clone(this.Mt.uniforms);
        }
        Yt(t, e, i, o, s) {
            this.Ft.matrixWorldInverse.getInverse(this.Ft.matrixWorld);
            this.kt.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
            this.kt.multiply(this.Ft.projectionMatrix);
            this.kt.multiply(this.Ft.matrixWorldInverse);
            this.$t.uniforms.shadowMatrix.value.copy(this.kt);
            this.$t.uniforms.shadowData.value.x = this.A;
            this.$t.uniforms.shadowData.value.y = this.shadowRadius;
            this.$t.uniforms.shadowData.value.z = this.shadowBiasMultiplier;
            this.$t.uniforms.shadowAccumulationBuffer.value = o;
            this.$t.uniforms.vplPosition.value = this.Ft.position;
            this.$t.uniforms.cameraNearFar.value.x = this.Ft.near;
            this.$t.uniforms.cameraNearFar.value.y = this.Ft.far;
            this.$t.uniforms.lightVector.value.x = -this.Lt.x;
            this.$t.uniforms.lightVector.value.y = -this.Lt.y;
            this.$t.uniforms.lightVector.value.z = -this.Lt.z;
            this.$t.uniforms.weightSum.value = 1 / this.Wt.length;
            t.setClearColor(0);
            const a = t.shadowMap.enabled;
            t.shadowMap.enabled = !1;
            this.ee.overrideMaterial = this.$t;
            t.render(this.ee, i, s, !0);
            this.ee.overrideMaterial = null;
            t.shadowMap.enabled = a;
        }
        Qt(t, e, i, o) {
            (function(t, e) {
                t.traverse(function(t) {
                    if ((t.isMesh || t.isLineSegments || t.isLine || t.isLineLoop || t.isPoints) && ((e ? t.castShadow : t.receiveShadow) || (t.oldVisibility = t.visible, t.visible = !1))
                    ){}
                })
            })(e, !0);
            
            this.Ft.position.copy(i);
            this.Bt.copy(i);
            this.Bt.addScaledVector(this.Lt, 10);
            this.Ft.lookAt(this.Bt);
            this.Ft.updateMatrixWorld();
            e.overrideMaterial = this.wt;
            if (this.linearDepth && (this.wt.uniforms.cameraNearFar.value.x = this.Ft.near, this.wt.uniforms.cameraNearFar.value.y = this.Ft.far), t.setClearColor(0), t.render(e, this.Ft, o, !0), e.overrideMaterial = null,
                function(t) {
                    t.traverse(function(t) {
                        if (t.oldVisibility && (t.visible = t.oldVisibility, t.oldVisibility = void 0)){}
                    })
                }(e)){}
        }
        re() {
            const t = this.boundingRadius,
                e = this.Wt[this.A - 1],
                i = 2 * e.x - 1,
                o = 2 * e.y - 1,
                s = Math.sqrt(1 - i * i - o * o),
                a = new THREE.Vector3(t * i, t * s, t * o);

            if (this.bt.copy(a), this.Lt.copy(a), this.Lt.multiplyScalar(-1), this.Lt.normalize(), this.bt.add(this.te.position)){}
        }
        Ut(t) {
            if (t !== this.gt && (this.gt = t, this.Wt = ELPIXEL.generateQuasiRandomPoints(t, -1, ELPIXEL.uniformDistribution, ELPIXEL.insideCircle), this.Wt = ELPIXEL.randomizeArray(this.Wt))
            ){}
        }
    }
}, function(t, e) {
    t.exports = ELPIXEL.SoftShadowPlaneShader = {
        defines: {
            SHADOW_QUALITY: 0,
            LINEAR_DEPTH: 1
        },
        uniforms: {
            shadowMap: {
                value: null
            },
            shadowAccumulationBuffer: {
                value: null
            },
            shadowBufferSize: {
                value: null
            },
            shadowMatrix: {
                value: new THREE.Matrix4()
            },
            vplPosition: {
                value: new THREE.Vector3()
            },
            lightVector: {
                value: new THREE.Vector3()
            },
            shadowData: {
                value: new THREE.Vector4()
            },
            cameraNearFar: {
                value: new THREE.Vector2()
            },
            shadowMapResolution: {
                value: null
            },
            normalBias: {
                value: 1
            },
            weightSum: {
                value: 0
            }
        },
        vertexShader: ["varying vec3 viewNormal;", "varying vec4 shadowCoord;", "uniform vec3 vplPosition;", "uniform mat4 shadowMatrix;", "uniform float normalBias;", "void main() {", "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "viewNormal = normalize(normalMatrix * normal);", "vec3 vplPositionEyeSpace = (viewMatrix * vec4(vplPosition, 1.0)).xyz;", "//lightVector = vplPositionEyeSpace - (modelViewMatrix * vec4( position, 1.0 )).xyz;", "//lightVector = normalize(lightVector);", "shadowCoord = shadowMatrix * worldPosition;", "// nDotL = clamp( dot(lightVector, viewNormal), 0.0, 1.0);", "//worldPosition.xyz += normalize((modelMatrix * vec4( normal, 0.0 )).xyz) * 0.02 * normalBias * pow( 1.0 -  nDotL * nDotL, 4.);", "//shadowCoord.xy = (shadowMatrix * worldPosition).xy;", "//gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "gl_Position = vec4( 2. * uv.x - 1., 2. * uv.y - 1., 0., 1.0 );", "}"].join("\n"),
        fragmentShader: ["#include <common>", "#include <packing>", "varying vec3 viewNormal;", "uniform vec3 lightVector;", "varying vec4 shadowCoord;", "uniform vec2 shadowBufferSize;", "uniform vec2 shadowMapResolution;", "uniform sampler2D shadowMap;", "uniform sampler2D shadowAccumulationBuffer;", "uniform vec4 shadowData;", "uniform vec2 cameraNearFar;", "uniform float weightSum;", "float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {", "#if LINEAR_DEPTH == 0", "float shadowDepth = unpackRGBAToDepth( texture2D( depths, uv ) );", "#else", "float shadowDepth = pow2(unpackRGBAToDepth(texture2D( depths, uv ))) + 0.01 * shadowData.z;", "shadowDepth = shadowDepth * ( cameraNearFar.y - cameraNearFar.x ) + cameraNearFar.x;", "#endif", "return step( compare, shadowDepth );", "}", "float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {", "const vec2 offset = vec2( 0.0, 1.0 );", "vec2 texelSize = vec2( 1.0 ) / size;", "vec2 centroidUV = floor( uv * size + 0.5 ) / size;", "float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );", "float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );", "float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );", "float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );", "vec2 f = fract( uv * size + 0.5 );", "float a = mix( lb, lt, f.y );", "float b = mix( rb, rt, f.y );", "float c = mix( a, b, f.x );", "return c;", "}", "void main() {", "float shadowValue = 1.0;", "float shadowRadius = shadowData.y;", "float shadowBiasMultiplier = shadowData.z;", "float nDotL = clamp( dot(lightVector, normalize(viewNormal)), 0.0, 1.0);", "float shadowBias = 0.02 *  sqrt( 1.0 -  nDotL * nDotL) / clamp(nDotL, 0.0006,  1.0);", "shadowBias = clamp(shadowBias, 0.0001,  0.0003) * shadowBiasMultiplier;", "vec3 shadowCoordNDC = shadowCoord.xyz;///shadowCoord.w;", "shadowCoordNDC.z -= shadowBias;", "#if LINEAR_DEPTH == 1", "float linearDepth = shadowCoord.z + (cameraNearFar.y + cameraNearFar.x)/(cameraNearFar.y - cameraNearFar.x);", "linearDepth *= -(cameraNearFar.y - cameraNearFar.x) * 0.5;", "linearDepth = -linearDepth;", "#endif", "bvec4 inFrustumVec = bvec4 ( shadowCoordNDC.x >= 0.0, shadowCoordNDC.x <= 1.0, shadowCoordNDC.y >= 0.0, shadowCoordNDC.y <= 1.0 );", "bool inFrustum = all( inFrustumVec );", "bvec2 frustumTestVec = bvec2( inFrustum, shadowCoordNDC.z <= 1.0 );", "bool frustumTest = all( frustumTestVec );", "#if LINEAR_DEPTH == 1", "shadowCoordNDC.z = linearDepth;", "#endif", "if(frustumTest) {", "#if SHADOW_QUALITY == 0", "shadowValue = texture2DCompare(shadowMap, shadowCoordNDC.xy, shadowCoordNDC.z);", "#elif SHADOW_QUALITY == 1", "vec2 texelSize = vec2( 1.0 ) / shadowMapResolution;", "float dx0 = - texelSize.x * shadowRadius;", "float dy0 = - texelSize.y * shadowRadius;", "float dx1 = + texelSize.x * shadowRadius;", "float dy1 = + texelSize.y * shadowRadius;", "float theta = rand( shadowCoord.xy ) * PI2;", "float snTheta = sin(theta);", "float csTheta = cos(theta);", "mat2 randomRotationMatrix = mat2(csTheta, snTheta, -snTheta, csTheta);", "shadowValue = (", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, dy0 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( 0.0, dy0 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, dy0 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, 0.0 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy, shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, 0.0 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, dy1 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( 0.0, dy1 ), shadowCoordNDC.z ) + ", "texture2DCompare( shadowMap, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, dy1 ), shadowCoordNDC.z )", ") * ( 1.0 / 9.0 );", "#elif SHADOW_QUALITY == 2", "vec2 texelSize = vec2( 1.0 ) / shadowMapResolution;", "float dx0 = - texelSize.x * shadowRadius;", "float dy0 = - texelSize.y * shadowRadius;", "float dx1 = + texelSize.x * shadowRadius;", "float dy1 = + texelSize.y * shadowRadius;", "float theta = rand( shadowCoord.xy ) * PI2;", "float snTheta = sin(theta);", "float csTheta = cos(theta);", "mat2 randomRotationMatrix = mat2(csTheta, snTheta, -snTheta, csTheta);", "shadowValue = ( ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, dy0 ), shadowCoordNDC.z ) + ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( 0.0, dy0 ), shadowCoordNDC.z ) + ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, dy0 ), shadowCoordNDC.z ) + ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, 0.0 ), shadowCoordNDC.z ) + ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy, shadowCoordNDC.z ) + ", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, 0.0 ), shadowCoordNDC.z ) +", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx0, dy1 ), shadowCoordNDC.z ) +", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( 0.0, dy1 ), shadowCoordNDC.z ) +", "texture2DShadowLerp( shadowMap, shadowMapResolution, shadowCoordNDC.xy + randomRotationMatrix * vec2( dx1, dy1 ), shadowCoordNDC.z )", ") * ( 1.0 / 9.0 );", "#endif", "}", "float previousAccumulation = unpackRGBAToDepth(texture2D( shadowAccumulationBuffer, gl_FragCoord.xy/shadowBufferSize ));", "if(shadowData.x == 1.) {", "previousAccumulation = 0.;", "}", "float shadowAccumulation = previousAccumulation + shadowValue * weightSum;//mix(previousAccumulation, shadowValue, 1./shadowData.x);", "gl_FragColor = packDepthToRGBA(shadowAccumulation);", "}"].join("\n")
    }
}, function(t, e) {
    t.exports = ELPIXEL.BlurShader = {
        uniforms: {
            tDiffuse: {
                value: null
            },
            size: {
                value: new THREE.Vector3()
            },
            direction: {
                value: new THREE.Vector3(1, 0)
            },
            step: {
                value: 1
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["#include <packing>", "uniform sampler2D tDiffuse;", "uniform vec2 size;", "uniform vec2 direction;", "uniform float step;", "varying vec2 vUv;", "void main() {", "float sum = 0.0;", "vec2 uvDelta = step * direction / size;", "//sum += texture2D( tDiffuse, vUv - 3. * uvDelta ) * 0.0918;", "//sum += texture2D( tDiffuse, vUv - 2. * uvDelta ) * 0.2;", "sum += unpackRGBAToDepth(texture2D( tDiffuse, vUv - 1. * uvDelta )) * 0.3333;", "sum += unpackRGBAToDepth(texture2D( tDiffuse, vec2( vUv.x, vUv.y ) )) * 0.3333;", "sum += unpackRGBAToDepth(texture2D( tDiffuse, vUv + 1. * uvDelta )) * 0.3333;", "//sum += texture2D( tDiffuse, vUv + 2. * uvDelta ) * 0.2;", "//sum += texture2D( tDiffuse, vUv + 3. * uvDelta ) * 0.0918;", "gl_FragColor = packDepthToRGBA(sum);//texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );", "}"].join("\n")
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    i(19);
    e.default = ELPIXEL.SuperSampleAAPass = class extends THREE.Pass {
        constructor() {
            super();
            this.needsSwap = !0;
            this.needsUpdate = !0;
            this.A = 0;
            this.le = new THREE.ShaderMaterial(ELPIXEL.SuperSampleAAShader);
        }
        dispose() {
            this.pingpongRT && this.pingpongRT.dispose()
        }
        render(t, e, i) {
            const o = t.getClearColor(),
                s = t.getClearAlpha(),
                a = t.autoClear;
            t.autoClear = !1;
            t.setClearColor(new THREE.Color(0, 0, 0), 0);
            
            if (this.needsUpdate && (this.A = 0, this.needsUpdate = !1), this.ce || this.Y(t), this.A++, this.le.uniforms.tCurrent.value = i.texture, this.le.uniforms.tSumPrevious.value = this.ce.texture, this.le.uniforms.accIndex.value = this.A, ELPIXEL.renderPass(t, this.le, e), ELPIXEL.blit(t, e, this.ce), t.autoClear = a, t.setClearColor(o, s)
            ){}
        }
        setSize(t, e) {
            this.ce && this.ce.setSize(t, e)
        }
        Y(t) {
            const e = {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    format: THREE.RGBAFormat
                },
                i = t.getDrawingBufferSize().width,
                o = t.getDrawingBufferSize().height;
            this.ce = new THREE.WebGLRenderTarget(i, o, e)
        }
    }
}, function(t, e, i) {
    "use strict";
    ELPIXEL.SuperSampleAAShader = {
        uniforms: {
            tCurrent: {
                type: "t",
                value: null
            },
            tSumPrevious: {
                type: "t",
                value: null
            },
            accIndex: {
                type: "f",
                value: 0
            }
        },
        vertexShader: "varying vec2 vUv;    void main() {      vUv = uv;      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );    }",
        fragmentShader: "varying vec2 vUv;    uniform sampler2D tCurrent;    uniform sampler2D tSumPrevious;    uniform float accIndex;    void main() {      vec4 currentColor = texture2D(tCurrent, vUv);      vec4 previousSum = texture2D(tSumPrevious, vUv);      gl_FragColor = mix(previousSum, currentColor, 1./accIndex);    }    "
    }
}, function(t, e, i) {
    i(21);
    
    t.exports = ELPIXEL.TemporalAAPass = class extends THREE.Pass {
        constructor(t, e) {
            if (super(), this.feedBack = new THREE.Vector2(.8, .9), this.V = t, this.N = e, this.ue = new THREE.ShaderMaterial(ELPIXEL.TemporalAAShader), this.de = new THREE.Matrix4, this.ve = new THREE.Matrix4, this.J = new THREE.Matrix4, this.J.copy(this.V.projectionMatrix)
            ){}
        }
        dispose() {
            this.me && this.me.dispose()
        }
        setSize(t, e) {
            if (this.me && this.me.setSize(t, e), this.J.copy(this.V.projectionMatrix)){}
        }
        render(t, e, i) {
            this.Y(t);
            const o = t.getClearColor(),
                s = t.getClearAlpha(),
                a = t.autoClear;
                if (t.autoClear = !1, t.setClearColor(new THREE.Color(0, 0, 0), 0), this.ve.multiplyMatrices(this.J, this.V.matrixWorldInverse), this.fe(t, i), ELPIXEL.renderPass(t, this.ue, e), ELPIXEL.blit(t, e, this.me), t.setClearColor(o, s), t.autoClear = a, this.de.copy(this.ve)
                ){}
        } 
        Y(t) {
            const e = t.getDrawingBufferSize().width,
                i = t.getDrawingBufferSize().height;
            if (!this.me) {
                const t = {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    format: THREE.RGBAFormat
                };
                this.me = new THREE.WebGLRenderTarget(e, i, t)
            }
        }
        fe(t, e) {
            let i, o;
            if (i = this.N.at ? this.N.at : this.N.Rt ? this.N.Rt.texture : null, this.N.Rt || (o = this.N.Et ? this.N.Et.texture : null), this.ue.uniforms.currentRT.value = e.texture, this.ue.uniforms.previousRT.value = this.me.texture, this.ue.uniforms.tDepth.value = i || o
            ){}
            let s = this.N.at ? 0 : 1;
            if (this.N.forceDepthAndNormalPass && this.N.packingMode === ELPIXEL.GBufferPass.DEPTH_NORMAL_16 && (s = 2), this.ue.defines.DEPTH_PACKING_MODE = s, this.ue.uniforms.currentProjectionViewMatrix.value.copy(this.ve), this.ue.uniforms.lastProjectionViewMatrix.value.copy(this.de), this.ue.uniforms.ProjectionMatrix.value.copy(this.J), this.ue.uniforms.InverseViewMatrix.value.copy(this.V.matrixWorld), this.ue.uniforms.feedBack.value.x = this.feedBack.x, this.ue.uniforms.feedBack.value.y = this.feedBack.y
            ){}
            const a = this.ue.uniforms.cameraNearFar.value;
            a.x = this.V.near;
            a.y = this.V.far;
            const r = t.getDrawingBufferSize().width,
                n = t.getDrawingBufferSize().height,
                h = this.ue.uniforms.textureSize.value;
            h.x = r;
            h.y = n;
            this.ue.defines.LINEAR_DEPTH = this.N.pt ? 1 : 0
        }
    }
}, function(t, e) {
    t.exports = ELPIXEL.TemporalAAShader = {
        defines: {
            DEPTH_PACKING_MODE: 1,
            PERSPECTIVE_CAMERA: 1,
            LINEAR_DEPTH: 1,
            QUALITY: 1,
            UNJITTER: 0
        },
        uniforms: {
            currentRT: {
                value: null
            },
            previousRT: {
                value: null
            },
            tDepth: {
                value: null
            },
            cameraNearFar: {
                value: new THREE.Vector2()
            },
            textureSize: {
                value: new THREE.Vector2()
            },
            lastProjectionViewMatrix: {
                value: new THREE.Matrix4()
            },
            currentProjectionViewMatrix: {
                value: new THREE.Matrix4()
            },
            ProjectionMatrix: {
                value: new THREE.Matrix4()
            },
            InverseViewMatrix: {
                value: new THREE.Matrix4()
            },
            jitterSample: {
                value: new THREE.Vector2()
            },
            feedBack: {
                value: new THREE.Vector2(.88, .97)
            }
        },
        vertexShader: "varying vec2 vUv;        void main() {          vUv = uv;          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );        }",
        fragmentShader: ["#include <common>", "varying vec2 vUv;", "uniform sampler2D currentRT;", "uniform sampler2D previousRT;", "uniform sampler2D tDepth;", "uniform vec2 textureSize;", "uniform mat4 lastProjectionViewMatrix;", "uniform mat4 currentProjectionViewMatrix;", "uniform mat4 ProjectionMatrix;", "uniform mat4 InverseViewMatrix;", "uniform vec2 cameraNearFar;", "uniform vec2 jitterSample;", "uniform vec2 feedBack;", "#include <packing>", "float unpack16(vec2 value) {", "return (", "value.x*0.996108949416342426275150501169264316558837890625 +", "value.y*0.00389105058365758760263730664519243873655796051025390625", ");", "}", "float decodeDepth( const in vec2 uv ) {", "#if DEPTH_PACKING_MODE == 1", "#if LINEAR_DEPTH == 0", "return unpackRGBAToDepth( texture2D( tDepth, uv ) );", "#else", "return pow2(unpackRGBAToDepth(texture2D( tDepth, uv )));", "#endif", "#elif DEPTH_PACKING_MODE == 2", "#if LINEAR_DEPTH == 1", "return pow2(unpack16(texture2D( tDepth, uv ).xy));", "#else", "return pow2(unpack16( texture2D( tDepth, uv ).xy ));", "#endif", "#else", "return texture2D( tDepth, uv ).x;", "#endif", "}", "float getViewZ( const in float depth ) {", "\t#if PERSPECTIVE_CAMERA == 1", "\treturn perspectiveDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );", "\t#else", "\treturn orthoDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );", "\t#endif", "}", "vec3 find_closest_fragment_3x3(const in vec2 uv) { ", "const vec3 offset = vec3(-1.0, 1.0, 0.0);", "vec2 texelSize = 1.0/textureSize; ", "vec3 dtr = vec3(-1, 1, decodeDepth( uv + offset.yx * texelSize) ); ", "vec3 dtc = vec3( 0, 1, decodeDepth( uv + offset.zx * texelSize) );", "vec3 dtl = vec3( 1, 1, decodeDepth( uv + offset.xx * texelSize) );", "vec3 dml = vec3(-1, 0, decodeDepth( uv + offset.yz * texelSize) );", "vec3 dmc = vec3( 0, 0, decodeDepth( uv ) );", "vec3 dmr = vec3( 1, 0, decodeDepth( uv + offset.xz * texelSize) );", "vec3 dbl = vec3(-1, -1, decodeDepth( uv + offset.yy * texelSize) );", "vec3 dbc = vec3( 0, -1, decodeDepth( uv + offset.zy * texelSize) );", "vec3 dbr = vec3( 1, -1, decodeDepth( uv + offset.xy * texelSize) );", "vec3 dmin = dtl;", "if ( dmin.z > dtc.z ) dmin = dtc;", "if ( dmin.z > dtr.z ) dmin = dtr;", "if ( dmin.z > dml.z ) dmin = dml;", "if ( dmin.z > dmc.z ) dmin = dmc;", "if ( dmin.z > dmr.z ) dmin = dmr;", "if ( dmin.z > dbl.z ) dmin = dbl;", "if ( dmin.z > dbc.z ) dmin = dbc;", "if ( dmin.z > dbr.z ) dmin = dbr;", "return vec3(uv + texelSize.xy * dmin.xy, dmin.z);", "}", "vec3 find_closest_fragment_5tap(const in vec2 uv) ", "{ ", "vec2 texelSize = 1.0/textureSize; ", "vec2 offset = vec2(1.0, -1.0);", "vec3 dtl = vec3(-1, 1, decodeDepth( uv + offset.yx * texelSize) ); ", "vec3 dtr = vec3( 1, 1, decodeDepth( uv + offset.xx * texelSize) );", "vec3 dmc = vec3( 0, 0, decodeDepth( uv) );", "vec3 dbl = vec3(-1, -1, decodeDepth( uv + offset.yy * texelSize) );", "vec3 dbr = vec3( 1, -1, decodeDepth( uv + offset.xy * texelSize) );", "vec3 dmin = dtl;", "if ( dmin.z > dtr.z ) dmin = dtr;", "if ( dmin.z > dmc.z ) dmin = dmc;", "if ( dmin.z > dbl.z ) dmin = dbl;", "if ( dmin.z > dbr.z ) dmin = dbr;", "return vec3(uv + dmin.xy * texelSize, dmin.z);", "}", "vec4 clip_aabb(const in vec4 aabb_min, const in vec4 aabb_max, vec4 p )", "{ ", "const float FLT_EPS = 1e-8;", "vec4 p_clip = 0.5 * (aabb_max + aabb_min); ", "vec4 e_clip = 0.5 * (aabb_max - aabb_min) + FLT_EPS; ", "vec4 v_clip = p - p_clip;", "vec4 v_unit = abs(v_clip / e_clip);", "float ma_unit = max(v_unit.x, max(v_unit.y, v_unit.z));", "if (ma_unit > 1.0) ", "return p_clip + v_clip / ma_unit;", "else ", "return p;", "}", "vec2 computeScreenSpaceVelocity(const in vec3 worldPosition) {", "vec4 currentPositionClip = currentProjectionViewMatrix * vec4(worldPosition, 1.0);", "vec4 prevPositionClip = lastProjectionViewMatrix * vec4(worldPosition, 1.0);", "vec2 currentPositionNDC = currentPositionClip.xy / currentPositionClip.w;", "vec2 prevPositionNDC = prevPositionClip.xy / prevPositionClip.w;", "if(prevPositionNDC.x >= 1.0 || prevPositionNDC.x <= -1.0 || prevPositionNDC.x >= 1.0 || prevPositionNDC.y <= -1.0) {", "return vec2(0.0);", "}", "return 0.5 * (currentPositionNDC - prevPositionNDC);", "}", "vec4 computeTAA(const in vec2 uv, const in vec2 screenSpaceVelocity) {", "vec2 jitterOffset = jitterSample/textureSize;", "vec2 uvUnJitter = uv;", "vec4 currentColor = texture2D(currentRT, uvUnJitter);", "vec4 previousColor = texture2D(previousRT, uv - screenSpaceVelocity);", "const vec3 offset = vec3(1., -1., 0.);", "vec2 texelSize = 1./textureSize;", "float texelSpeed = length( screenSpaceVelocity );", "vec4 tl = texture2D(currentRT, uvUnJitter + offset.yx * texelSize);", "vec4 tc = texture2D(currentRT, uvUnJitter + offset.zx * texelSize);", "vec4 tr = texture2D(currentRT, uvUnJitter + offset.xx * texelSize);", "vec4 ml = texture2D(currentRT, uvUnJitter + offset.yz * texelSize);", "vec4 mc = currentColor;", "vec4 mr = texture2D(currentRT, uvUnJitter + offset.xz * texelSize);", "vec4 bl = texture2D(currentRT, uvUnJitter + offset.yy * texelSize);", "vec4 bc = texture2D(currentRT, uvUnJitter + offset.zy * texelSize);", "vec4 br = texture2D(currentRT, uvUnJitter + offset.xy * texelSize);", "vec4 corners = 2.0 * (tr + bl + br + tl) - 2.0 * mc;", "mc += (mc - (corners * 0.166667)) * 2.718282 * 0.3;", "mc = max(vec4(0.0), mc);", "vec4 min5 = min(tc, min(ml, min(mc, min(mr, bc))));", "vec4 max5 = max(tc, max(ml, max(mc, max(mr, bc))));", "vec4 cmin = min(min5, min(tl, min(tr, min(bl, br))));", "vec4 cmax = max(min5, max(tl, max(tr, max(bl, br))));;", "cmin = 0.5 * (cmin + min5);", "cmax = 0.5 * (cmax + max5);", "previousColor = clip_aabb(cmin, cmax, previousColor);", "float lum0 = linearToRelativeLuminance(currentColor.rgb);", "float lum1 = linearToRelativeLuminance(previousColor.rgb);", "float unbiased_diff = abs(lum0 - lum1) / max(lum0, max(lum1, 0.2));", "float unbiased_weight = 1.0 - unbiased_diff;", "float unbiased_weight_sqr = unbiased_weight * unbiased_weight;", "float k_feedback = mix(feedBack.x, feedBack.y, unbiased_weight_sqr);", "return mix(currentColor, previousColor, k_feedback);", "}", "vec3 getWorldPositionFromViewZ(const in vec2 uv, const in float viewDepth) {", "vec2 uv_ = 2. * uv - 1.;", "float xe = -(uv_.x + ProjectionMatrix[2][0]) * viewDepth/ProjectionMatrix[0][0];", "float ye = -(uv_.y + ProjectionMatrix[2][1]) * viewDepth/ProjectionMatrix[1][1];", "return (InverseViewMatrix * vec4(xe, ye, viewDepth, 1.)).xyz;", "}", "void main() {", "vec2 jitterOffset = jitterSample/textureSize;", "#if QUALITY == 1", "vec3 c_frag = find_closest_fragment_3x3(vUv);", "#else", "vec3 c_frag = find_closest_fragment_5tap(vUv);", "#endif", "if( c_frag.z >= 0.999 ) {", "gl_FragColor = texture2D(currentRT, vUv - jitterOffset);", "}", "else {", "#if LINEAR_DEPTH == 0", "float sampleViewZ = getViewZ( c_frag.z );", "#else", "float sampleViewZ = mix(-cameraNearFar.x, -cameraNearFar.y, c_frag.z);", "#endif", "vec3 worldPosition = getWorldPositionFromViewZ(c_frag.xy, sampleViewZ);", "vec2 screenSpaceVelocity = computeScreenSpaceVelocity(worldPosition);", "gl_FragColor = computeTAA(vUv, screenSpaceVelocity);", "//gl_FragColor = vec4(10. * length(screenSpaceVelocity));", "}", "}"].join("\n")
    }
}, function(t, e, i) {
    i(23);
    
    t.exports = ELPIXEL.BilateralFilterPass = class {
        constructor() {
            if (this.blurKernelSize = 3, this.edgeSharpness = 1, this.bilateralFilterMaterial = new THREE.ShaderMaterial(ELPIXEL.SAOBilateralFilterShader), this.bilateralFilterMaterial.uniforms = THREE.UniformsUtils.clone(this.bilateralFilterMaterial.uniforms), this.bilateralFilterMaterial.defines = Object.assign({}, this.bilateralFilterMaterial.defines)
            ){}
        }
        render(t, e, i, o) {
            this.Y(t);
            this.pe(t, e, i, o);
        }
        setSize(t, e) {
            if (this.we && this.we.setSize(t, e), this.bilateralFilterMaterial.uniforms.size.value.set(t, e)){}
        }
        dispose() {
            if (this.we && (this.we.dispose(), this.we = null)){}
        }
        Y(t) {
            if (!this.we) {
                const e = t.getDrawingBufferSize().width,
                    i = t.getDrawingBufferSize().height,
                    o = {
                        minFilter: THREE.NearestFilter,
                        magFilter: THREE.NearestFilter,
                        format: THREE.RGBAFormat
                    };
                this.we = new THREE.WebGLRenderTarget(e, i, o)
            }
        }
        pe(t, e, i, o) {
            const s = t.getDrawingBufferSize().width,
                a = t.getDrawingBufferSize().height;
            this.bilateralFilterMaterial.uniforms.size.value.set(s, a);
            const r = o.Tt ? o.Tt.texture : null;
            let n;
            if (o.Rt || (n = o.Et ? o.Et.texture : null), n ? (this.bilateralFilterMaterial.defines.DEPTH_NORMAL_TEXTURE = 1, this.bilateralFilterMaterial.uniforms.tNormal.value = n) : this.bilateralFilterMaterial.uniforms.tNormal.value = r, this.bilateralFilterMaterial.defines.KERNEL_SAMPLE_RADIUS = this.blurKernelSize, this.bilateralFilterMaterial.defines.LINEAR_DEPTH = o.pt ? 1 : 0, this.bilateralFilterMaterial.uniforms.tOcclusionDepth.value = e.texture, this.bilateralFilterMaterial.uniforms.kernelDirection.value = new THREE.Vector2(1, 0), this.bilateralFilterMaterial.uniforms.edgeSharpness.value = this.edgeSharpness
            ){}
            const h = this.bilateralFilterMaterial.uniforms.cameraNearFar.value;
            
            if (h.x = i.near, h.y = i.far, ELPIXEL.renderPass(t, this.bilateralFilterMaterial, this.we), this.bilateralFilterMaterial.uniforms.tOcclusionDepth.value = this.we.texture, this.bilateralFilterMaterial.uniforms.kernelDirection.value = new THREE.Vector2(0, 1), ELPIXEL.renderPass(t, this.bilateralFilterMaterial, e)
            ){}
        }
    }
}, function(t, e) {
    t.exports = ELPIXEL.SAOBilateralFilterShader = {
        defines: {
            PERSPECTIVE_CAMERA: 1,
            KERNEL_SAMPLE_RADIUS: 4,
            LINEAR_DEPTH: 1,
            DEPTH_NORMAL_TEXTURE: 0
        },
        uniforms: {
            tOcclusionDepth: {
                type: "t",
                value: null
            },
            tNormal: {
                type: "t",
                value: null
            },
            size: {
                type: "v2",
                value: new THREE.Vector2(256, 256)
            },
            kernelDirection: {
                type: "v2",
                value: new THREE.Vector2(1, 0)
            },
            cameraNearFar: {
                type: "v2",
                value: new THREE.Vector2(1, 0)
            },
            edgeSharpness: {
                type: "f",
                value: 1
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["#include <common>", "varying vec2 vUv;", "uniform sampler2D tOcclusionDepth;", "uniform sampler2D tNormal;", "uniform vec2 size;", "uniform vec2 cameraNearFar;", "uniform float edgeSharpness;", "uniform vec2 kernelDirection;", "#include <packing>", "float getViewZ( const in float depth ) {", "#if PERSPECTIVE_CAMERA == 1", "return perspectiveDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );", "#else", "return orthographicDepthToViewZ( depth, cameraNearFar.x, cameraNearFar.y );", "#endif", "}", "vec3 unpackNormal(vec2 enc) {", "vec2 fenc = enc*4.0-2.0;", "float f = dot(fenc,fenc);", "float g = sqrt(1.0-f/4.0);", "return vec3(fenc*g, 1.0-f/2.0);", "}", "vec3 getViewNormal( const in vec2 uv ) {", "#if DEPTH_NORMAL_TEXTURE == 1", "return unpackNormal( texture2D( tNormal, uv ).zw );", "#else", "return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );", "#endif", "}", "float linearStep(float edge0, float edge1, float value){", "return clamp((value-edge0)/(edge1-edge0), 0.0, 1.0);", "}", "float unpackRGBToFloat(const in vec3 x) {", "const vec3 decode = 1.0 / vec3(1.0, 255.0, 65025.0);", "return dot(x, decode);", "}", "void calculateBilateralWeight( const in vec2 uv, const in vec3 centreNormal, const in float centerDepth,", "const in float kernelWeight, inout float totalOcclusion, inout float totalBilateralWeight ) {", "vec4 aoDepth = texture2D( tOcclusionDepth, uv );", "float occlusion = aoDepth.r;", "float depth = unpackRGBToFloat( aoDepth.gba );", "if( depth >= ( 1.0 - EPSILON ) ) {", "return;", "}", "vec3 normal = getViewNormal(uv);", "#if LINEAR_DEPTH == 0", "depth = -getViewZ( depth );", "depth = linearStep(cameraNearFar.x, cameraNearFar.y, depth);", "#endif", "float normalCloseness = dot(normal, centreNormal);", "normalCloseness *= normalCloseness;", "float normalError = (1.0 - normalCloseness) * 8.;", "float normalWeight = max((1.0 - normalError * edgeSharpness), 0.00);", "float depthWeight = max(0.0, 1.0 - edgeSharpness * 4000. * abs(depth - centerDepth)) * kernelWeight;", "float bilateralWeight = depthWeight * normalWeight;", "totalOcclusion += occlusion * bilateralWeight;", "totalBilateralWeight += bilateralWeight;", "}", "void main() {", "vec4 aoDepth = texture2D( tOcclusionDepth, vUv );", "float occlusion = aoDepth.r;", "float depth = unpackRGBToFloat( aoDepth.gba );", "if( depth >= ( 1.0 - EPSILON ) ) {", "discard;", "}", "vec3 centreNormal = getViewNormal(vUv);", "#if LINEAR_DEPTH == 0", "float centerViewZ = -getViewZ( depth );", "centerViewZ = linearStep(cameraNearFar.x, cameraNearFar.y, centerViewZ);", "#else", "float centerViewZ = depth;", "#endif", "float gaussianWeights[4];", "gaussianWeights[0] = 0.153170;", "gaussianWeights[1] = 0.144893;", "gaussianWeights[2] = 0.122649;", "gaussianWeights[3] = 0.092902;", "float totalBilateralWeight = gaussianWeights[0] + 0.03;", "float totalOcclusion = occlusion * totalBilateralWeight;", "vec2 uvDelta = 2.0 * kernelDirection / size;", "float kernelWeight = gaussianWeights[1] + 0.03;", "calculateBilateralWeight( vUv + uvDelta, centreNormal, centerViewZ, kernelWeight, totalOcclusion, totalBilateralWeight );", "calculateBilateralWeight( vUv - uvDelta, centreNormal, centerViewZ, kernelWeight, totalOcclusion, totalBilateralWeight );", "kernelWeight = gaussianWeights[2] + 0.03;", "calculateBilateralWeight( vUv + 2. * uvDelta, centreNormal, centerViewZ, kernelWeight, totalOcclusion, totalBilateralWeight );", "calculateBilateralWeight( vUv - 2. * uvDelta, centreNormal, centerViewZ, kernelWeight, totalOcclusion, totalBilateralWeight );", "kernelWeight = gaussianWeights[3] + 0.03;", "calculateBilateralWeight( vUv + 3. * uvDelta, centreNormal, centerViewZ, kernelWeight, totalOcclusion, totalBilateralWeight );", "calculateBilateralWeight( vUv - 3. * uvDelta, centreNormal, centerViewZ, kernelWeight, totalOcclusion, totalBilateralWeight );", "occlusion = totalOcclusion / totalBilateralWeight;", "gl_FragColor = vec4( occlusion, aoDepth.gba );", "}"].join("\n")
    }
}, function(t, e, i) {
    i(25);
    
    t.exports = ELPIXEL.UnrealBloomPass = class extends THREE.Pass {
        constructor(t, e, i, o, s) {
            if (super(), this.N = t, this.strength = void 0 !== i ? i : 1, this.radius = o, this.threshold = s, this.resolution = void 0 !== e ? new THREE.Vector2(e.x, e.y) : new THREE.Vector2(256, 256)
            ){}
            const a = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat
            };
            this.renderTargetsHorizontal = [];
            this.renderTargetsVertical = [];
            this.nMips = 5;
            let r = Math.round(this.resolution.x / 2),
                n = Math.round(this.resolution.y / 2);
            this.renderTargetBright = new THREE.WebGLRenderTarget(r, n, a);
            this.renderTargetBright.texture.name = "UnrealBloomPass.bright";
            this.renderTargetBright.texture.generateMipmaps = !1;
            for (let t = 0; t < this.nMips; t++) {
                let e = new THREE.WebGLRenderTarget(r, n, a);
                e.texture.name = "UnrealBloomPass.h" + t;
                e.texture.generateMipmaps = !1;
                
                this.renderTargetsHorizontal.push(e);
                
                (e = new THREE.WebGLRenderTarget(r, n, a)).texture.name = "UnrealBloomPass.v" + t;
                 
                e.texture.generateMipmaps = !1;
                
                this.renderTargetsVertical.push(e);
                
                r = Math.round(r / 2);
                n = Math.round(n / 2)
            }
            const h = ELPIXEL.BloomExtractShader;

            this.bloomExtractUniforms = THREE.UniformsUtils.clone(h.uniforms);
            
            this.bloomExtractUniforms.bloomThreshold.value = s;
            
            this.materialBloomExtract = new THREE.ShaderMaterial({
                uniforms: this.bloomExtractUniforms,
                vertexShader: h.vertexShader,
                fragmentShader: h.fragmentShader,
                defines: {
                    DEPTH_PACKING_MODE: 0,
                    LINEAR_DEPTH: 1
                }
            });
            
            this.separableBlurMaterials = [];
            const l = [3, 5, 7, 9, 11];

            r = Math.round(this.resolution.x / 2);
            n = Math.round(this.resolution.y / 2);

            for (let t = 0; t < this.nMips; t++) { 
                this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[t]));
                this.separableBlurMaterials[t].uniforms.texSize.value = new THREE.Vector2(r, n);
                r = Math.round(r / 2);
                n = Math.round(n / 2);
            }

            this.compositeMaterial = this.getCompositeMaterial(this.nMips);
            this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture;
            this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture;
            this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture;
            this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture;
            this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture;
            this.compositeMaterial.uniforms.bloomStrength.value = i;
            this.compositeMaterial.uniforms.bloomRadius.value = .1;
            this.compositeMaterial.needsUpdate = !0;
            this.compositeMaterial.uniforms.bloomFactors.value = [1, .8, .6, .4, .2];
            this.bloomTintColors = [new THREE.Vector3(1, 1, 1), 
                new THREE.Vector3(1, 1, 1), 
                new THREE.Vector3(1, 1, 1), 
                new THREE.Vector3(1, 1, 1), 
                new THREE.Vector3(1, 1, 1)];
            this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
            const c = THREE.CopyShader;
            this.copyUniforms = THREE.UniformsUtils.clone(c.uniforms);
            this.copyUniforms.opacity.value = 1;
            this.materialCopy = new THREE.ShaderMaterial({
                uniforms: this.copyUniforms,
                vertexShader: c.vertexShader,
                fragmentShader: c.fragmentShader,
                blending: THREE.AdditiveBlending,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            });
            this.enabled = !0;
            this.needsSwap = !1;
            this.oldClearColor = new THREE.Color();
            this.oldClearAlpha = 1;
            this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
            this.scene = new THREE.Scene();
            this.basic = new THREE.MeshBasicMaterial();
            this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null);
            this.quad.frustumCulled = !1;
            this.scene.add(this.quad);
        }
        dispose() {
            for (let t = 0; t < this.renderTargetsHorizontal.length; t++) this.renderTargetsHorizontal[t].dispose();
            for (let t = 0; t < this.renderTargetsVertical.length; t++) this.renderTargetsVertical[t].dispose();
            this.renderTargetBright.dispose()
        }
        setSize(t, e) {
            let i = Math.round(t / 2),
                o = Math.round(e / 2);
            this.renderTargetBright.setSize(i, o);
            for (let t = 0; t < this.nMips; t++) { 
                this.renderTargetsHorizontal[t].setSize(i, o);
                this.renderTargetsVertical[t].setSize(i, o);
                this.separableBlurMaterials[t].uniforms.texSize.value = new THREE.Vector2(i, o);
                i = Math.round(i / 2);
                o = Math.round(o / 2);
            }
        }
        render(t, e, i, o, s) {
            this.oldClearColor.copy(t.getClearColor());
            this.oldClearAlpha = t.getClearAlpha();
            const a = t.autoClear;
            let r, n;
            if (t.autoClear = !1, t.setClearColor(new THREE.Color(0, 0, 0), 0), s && t.context.disable(t.context.STENCIL_TEST), this.renderToScreen && (this.quad.material = this.basic, this.basic.map = i.texture, t.render(this.scene, this.camera, void 0, !0)), r = this.N.at ? this.N.at : this.N.Rt ? this.N.Rt.texture : null, this.N.Rt || (n = this.N.Et ? this.N.Et.texture : null), this.materialBloomExtract.uniforms.tDepth.value = r || n
            ){}
            let h = this.N.at ? 0 : 1;
            if (this.N.forceDepthAndNormalPass && this.N.packingMode === ELPIXEL.GBufferPass.DEPTH_NORMAL_16 && (h = 2), this.materialBloomExtract.defines.DEPTH_PACKING_MODE = h, this.materialBloomExtract.defines.LINEAR_DEPTH = this.N.pt ? 1 : 0, this.bloomExtractUniforms.tColor.value = i.texture, this.bloomExtractUniforms.bloomThreshold.value = this.threshold, this.quad.material = this.materialBloomExtract, t.render(this.scene, this.camera, this.renderTargetBright, !0)
            ){}
            let l = this.renderTargetBright;
            for (let e = 0; e < this.nMips; e++) { 
                this.quad.material = this.separableBlurMaterials[e];
                this.separableBlurMaterials[e].uniforms.colorTexture.value = l.texture;
                this.separableBlurMaterials[e].uniforms.direction.value = ELPIXEL.UnrealBloomPass.BlurDirectionX;
                t.render(this.scene, this.camera, this.renderTargetsHorizontal[e], !0);
                this.separableBlurMaterials[e].uniforms.colorTexture.value = this.renderTargetsHorizontal[e].texture;
                this.separableBlurMaterials[e].uniforms.direction.value = ELPIXEL.UnrealBloomPass.BlurDirectionY;
                t.render(this.scene, this.camera, this.renderTargetsVertical[e], !0);
                l = this.renderTargetsVertical[e];
            }
            this.quad.material = this.compositeMaterial;
            this.compositeMaterial.uniforms.bloomStrength.value = this.strength;
            this.compositeMaterial.uniforms.bloomRadius.value = this.radius;
            this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
            t.render(this.scene, this.camera, this.renderTargetsHorizontal[0], !0);
            this.quad.material = this.materialCopy;
            this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture;
            
            s && t.context.enable(t.context.STENCIL_TEST);
            
            if (this.renderToScreen ? t.render(this.scene, this.camera, void 0, !1) : t.render(this.scene, this.camera, i, !1), t.setClearColor(this.oldClearColor, this.oldClearAlpha), t.autoClear = a
            ){}
        }
        getSeperableBlurMaterial(t) {
            return new THREE.ShaderMaterial({
                defines: {
                    KERNEL_RADIUS: t,
                    SIGMA: t
                },
                uniforms: {
                    colorTexture: {
                        value: null
                    },
                    texSize: {
                        value: new THREE.Vector2(.5, .5)
                    },
                    direction: {
                        value: new THREE.Vector2(.5, .5)
                    }
                },
                vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                fragmentShader: "#include <common>\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat fSigma = float(SIGMA);\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\t\t\t\t\tvec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\t\t\t\t\t\tfloat x = float(i);\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\t\t\t\t\t\tvec4 sample1 = texture2D( colorTexture, vUv + uvOffset);\t\t\t\t\t\tvec4 sample2 = texture2D( colorTexture, vUv - uvOffset);\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\t\t\t\t\t\tweightSum += 2.0 * w;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum);\n\t\t\t\t}"
            })
        }
        getCompositeMaterial(t) {
            return new THREE.ShaderMaterial({
                defines: {
                    NUM_MIPS: t
                },
                uniforms: {
                    blurTexture1: {
                        value: null
                    },
                    blurTexture2: {
                        value: null
                    },
                    blurTexture3: {
                        value: null
                    },
                    blurTexture4: {
                        value: null
                    },
                    blurTexture5: {
                        value: null
                    },
                    dirtTexture: {
                        value: null
                    },
                    bloomStrength: {
                        value: 1
                    },
                    bloomFactors: {
                        value: null
                    },
                    bloomTintColors: {
                        value: null
                    },
                    bloomRadius: {
                        value: 0
                    }
                },
                vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                fragmentShader: "varying vec2 vUv;\t\t\t\tuniform sampler2D blurTexture1;\t\t\t\tuniform sampler2D blurTexture2;\t\t\t\tuniform sampler2D blurTexture3;\t\t\t\tuniform sampler2D blurTexture4;\t\t\t\tuniform sampler2D blurTexture5;\t\t\t\tuniform sampler2D dirtTexture;\t\t\t\tuniform float bloomStrength;\t\t\t\tuniform float bloomRadius;\t\t\t\tuniform float bloomFactors[NUM_MIPS];\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\t\t\t\t\t\t\t\tfloat lerpBloomFactor(const in float factor) { \t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\t\t\t\t}\t\t\t\t\t\t\t\tvoid main() {\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\t\t\t\t}"
            })
        }
    };

    ELPIXEL.UnrealBloomPass.BlurDirectionX = new THREE.Vector2(1, 0);
    ELPIXEL.UnrealBloomPass.BlurDirectionY = new THREE.Vector2(0, 1);

}, function(t, e) {
    t.exports = ELPIXEL.BloomExtractShader = {
        uniforms: {
            tColor: {
                type: "t",
                value: null
            },
            tDepth: {
                type: "t",
                value: null
            },
            bloomThreshold: {
                type: "f",
                value: 1
            }
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["#include <packing>", "uniform sampler2D tColor;", "uniform sampler2D tDepth;", "uniform float bloomThreshold;", "varying vec2 vUv;", "float unpack16(vec2 value){", "return (", "value.x*0.996108949416342426275150501169264316558837890625 +", "value.y*0.00389105058365758760263730664519243873655796051025390625", ");", "}", "float decodeDepth( const in vec2 uv ) {", "vec4 uncodedDepth = texture2D( tDepth, uv );", "#if DEPTH_PACKING_MODE == 0", "return uncodedDepth.x;", "#elif DEPTH_PACKING_MODE == 1", "#if LINEAR_DEPTH == 1", "return pow(unpackRGBAToDepth(uncodedDepth), 2.);", "#else", "return unpackRGBAToDepth(uncodedDepth );", "#endif", "#else", "return pow(unpack16(uncodedDepth.xy), 2.);", "#endif", "}", "void main() {", "vec4 color = texture2D( tColor, vUv );", "float depth = decodeDepth(vUv);", "const vec3 c = vec3( 0.299, 0.587, 0.114 );", "float luminance = dot( color.xyz, c );", "float alpha = smoothstep( bloomThreshold, bloomThreshold + 0.01, luminance );", "alpha = depth > 1. - 0.001 ? 0. : alpha;", "gl_FragColor = color * alpha;", "}"].join("\n")
    }
}, function(t, e) {
    t.exports = ELPIXEL.VPLGenerationPass = class {
        constructor(t) {
            if (this.maxVPL = t, this.Ee = 0, this.Re = ELPIXEL.generateQuasiRandomPoints(t, -1, ELPIXEL.uniformDistribution, ELPIXEL.insideRectangle), this.Te = []
            ){}
            for (let t = 0; t < this.Re.length; t++) {
                const e = this.Re[t];
                this.Te.push(new THREE.Vector2(e.x, e.y))
            }
            if (this.xe = new THREE.Ray(), this.De = new THREE.Raycaster(), this.A = 0, this.Ne = !1, this.ge = [], this.Pe = new THREE.SphereBufferGeometry(.05, 5, 5), this.Oe = [], this.L = !1, this.needsUpdate = !0
            ){}
        }
        getVPLBuffer() {
            return this.Oe
        }
        getNumVPL() {
            return this.Re.length
        }
        generateVPLs(t, e, i, o) {
            if (!this.L) return;
            if (this.needsUpdate && (this.G(), this.needsUpdate = !1), this.Ee >= this.getNumVPL()) return this.needsUpdate = !1, void(this.Me.visible = !0);
            if (this.Me || (this.Me = new THREE.Object3D(), this.Me.visible = !1, t.add(this.Me))){}
            const s = performance.now();
            let a = 0;
            for (let s = 0; s < i; s++) {
                const r = this.xe.origin,
                    n = this.xe.direction;
                if (this.De.set(this.xe.origin, this.xe.direction), !this.Ce(e, r, n, this.A * i + s)) break;
                const h = o ? o.intersectRay(this.xe, t) : this.De.intersectObject(t, !0);
                if (h.length > 0) {
                    const t = h[0];
                    if (t.object instanceof THREE.Mesh) {
                        const e = new THREE.Color(),
                            i = new THREE.Vector3(),
                            o = new THREE.Vector3();
                        i.copy(t.point);
                        o.copy(t.face.normal);
                        o.transformDirection(t.object.matrixWorld);
                        const s = this.Se(t.object.material.map, t.uv, 64);
                        
                        e.copy(t.object.material.color);
                        
                        e.multiply(s);
                        
                        this.Oe.push({
                            position: i,
                            normal: o,
                            intensity: new THREE.Vector3(e.r, e.g, e.b)
                        });
                        
                        this.Ne && this.He(i, e);
                        
                        a++;
                    }
                }
            }
            if (this.A++, this.Ee += a, this.Ne && a > 0) {
                const t = performance.now();
                console.log("Processed VPL " + a + ", took " + (t - s) + " ms. Total VPLs Generated = " + this.Ee)
            }
        }
        He(t, e) {
            const i = new THREE.MeshBasicMaterial;
            i.color.copy(e);
            const o = new THREE.Mesh(this.Pe, i);
            o.position.copy(t);
            this.Me.add(o);
        }
        G() {
            this.A = 0;
            this.Ee = 0;
            this.Oe = [];
        }
        Se(t, e, i) {
            if (!t || !t.image) return new THREE.Color(16777215);
            let o = this.ge[t.uuid];
            if (o || (i = i || 32, o = ELPIXEL.getDataFromImage(t.image, i), this.ge[t.uuid] = o)){}
            let s = e.x,
                a = e.y;
            if (void 0 !== t.repeat && (s *= t.repeat.x, a *= t.repeat.y), s *= o.width, a *= o.height, t.wrapS === THREE.RepeatWrapping && (s %= o.width), t.wrapS === THREE.ClampToEdgeWrapping && (s = Math.min(s, o.width - 1)), t.wrapT === THREE.RepeatWrapping && (a %= o.height), t.wrapT === THREE.ClampToEdgeWrapping && (a = Math.min(a, o.height - 1))
            ){}
                const r = Math.floor(s),
                n = Math.floor(a),
                h = ELPIXEL.getPixelFromImageData(o, r, n);
            return h.r = Math.pow(h.r / 255, 1), h.g = Math.pow(h.g / 255, 1), h.b = Math.pow(h.b / 255, 1), new THREE.Color(h.r, h.g, h.b)
        }
        Ce(t, e, i, o) {
            if (o < this.Re.length) {
                const s = this.Re[o];
                if ( e.x = (2 * s.x - 1) * t.width * .5, e.z = 0, e.y = (2 * s.y - 1) * t.height * .5, e.applyMatrix4(t.matrixWorld)
                ){}
                const a = this.Te[o],
                    r = ELPIXEL.squareToCosineHemisphere(a);
                return i.copy(r), i.transformDirection(t.matrixWorld), !0
            }
            return !1
        }
    }
}, function(t, e, i) {
    i(28);
    
    t.exports = ELPIXEL.InstantRadiosityPass = class {
        constructor() {
            this.ye = 10;
            this._e = 0;
            this.A = 0;
            this.ze = !1;
            this.needsUpdate = !0;
            this.enabled = !0;
        }
        convergenceMetric() {
            const t = this.Ie.getNumVPL();
            return this.enabled ? this.A * this.ye / t : 1
        }
        render(t, e, i, o, s) {
            if (this.needsUpdate && (this.G(), this.A = 0, this.needsUpdate = !1), this.Ie = o){};
            const a = o.getNumVPL(),
                r = o.getVPLBuffer();
            if (0 === r.length) return;
            if (this.convergenceMetric() >= 1) return;
            if (!this.bbox) {
                this.bbox = new THREE.Box3();
                this.bbox.setFromObject(e);
                const t = new THREE.Vector3();
                this.bbox.getSize(t);
                this.minDistance = Math.max(Math.max(t.x, t.y), t.z) / 9;
            }
            if (this.Ae || this.Y(t), this.A++, e.overrideMaterial = this.Ve){};
            const n = this.A % 2 == 0 ? this.Ae : this.Fe,
                h = this.A % 2 == 0 ? this.Fe : this.Ae;
            
            if (this.Ve.uniforms.accumulationBuffer.value = n.texture, this.Ve.uniforms.currentFrameCount.value = this.A, this.Ue(r, a, s), t.render(e, i, h, !0), e.overrideMaterial = null, t.indirectDiffuseBuffer = h.texture){}
        }
        Y(t) {
            const e = t.getDrawingBufferSize(),
                i = e.width,
                o = e.height;
            let s = THREE.UnsignedByteType;
            if (!this.ze) {
                const e = t.extensions,
                    i = e.get("OES_texture_half_float");
                if (s = i ? THREE.HalfFloatType : s, i || (s = e.get("OES_texture_float") ? THREE.FloatType : s)){}
            }
            const a = {
                type: s,
                format: THREE.RGBFormat,
                magFilter: THREE.LinearFilter,
                minFilter: THREE.LinearFilter
            };

            if (this.Ae = new THREE.WebGLRenderTarget(i, o, a), this.Ae.texture.generateMipmaps = !1, this.Fe = new THREE.WebGLRenderTarget(i, o, a), this.Fe.texture.generateMipmaps = !1, this.Ve = new THREE.ShaderMaterial(ELPIXEL.VPLAccumulationShader), this.Ve.defines.VPL_COUNT = this.ye, this.Ve.uniforms.viewPort.value = new THREE.Vector2(i, o), this.Ve.uniforms.currentFrameCount.value = this.A, this.Ve.uniforms.minDistance.value = this.minDistance, (s === THREE.UnsignedByteType || this.ze) && (this.Ve.dithering = !0)
            ){}
        }
        G() {
            this.A = 0;
            this._e = 0;
        }
        Ue(t, e, i) {
            let o = t.length - this._e;
            o = Math.min(o, this.ye);
            const s = new THREE.Vector3(0, 0, 0),
                a = [];
            for (let r = 0; r < o; r++) {
                const o = t[r + this._e];
                if (r >= t.length) a.push({
                    position: s,
                    direction: s,
                    intensity: s
                });
                else {
                    const t = new THREE.Vector3();
                    t.copy(o.intensity);
                    t.multiplyScalar(i.intensity / e);
                    a.push({
                        position: o.position,
                        direction: o.normal,
                        intensity: t
                    });
                }
            }
            for (let t = 0; t < this.ye - o; t++) a.push({
                position: s,
                direction: s,
                intensity: s
            });
            this._e += o;
            this.Ve.uniforms.vplLights.value = a
        }
    }
}, function(t, e) {
    t.exports = ELPIXEL.VPLAccumulationShader = {
        vertexShader: ["varying vec3 worldPosition;", "varying vec3 worldNormal;", "void main() {", "   worldPosition = (modelMatrix * vec4( position.xyz, 1.0)).xyz;", "   worldNormal = (modelMatrix * vec4(normal, 0.0)).xyz;", "   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["#include <common>", "#include <dithering_pars_fragment>", "varying vec3 worldPosition;", "varying vec3 worldNormal;", "uniform vec2 viewPort;", "uniform sampler2D accumulationBuffer;", "uniform float currentFrameCount;", "uniform float minDistance;", "struct VPL {", "   vec3 position;", "   vec3 direction;", "   vec3 intensity;", "};", "uniform VPL vplLights[VPL_COUNT];", "float getLightIrradiance(const in vec3 lightPos, const in vec3 lightDir) {", "vec3 lightVector = lightPos - worldPosition;", "vec3 direction = normalize( lightVector );", "float lightDistance = length( lightVector );", "float distanceFalloff = 1.0 /max( lightDistance * lightDistance, minDistance * minDistance );", "float csTheta_i = dot( direction, -lightDir );", "float csTheta_o = dot( normalize(worldNormal), direction );", "return max(csTheta_i, 0.) * max( csTheta_o, 0.0 ) * distanceFalloff / PI;", "}", "void main() {", "vec3 colorSum = vec3(0.0);", "for( int i = 0; i < VPL_COUNT; i++) {", "VPL vpl = vplLights[i];", "vec3 lightPosition = vpl.position;", "vec3 lightDirection = vpl.direction;", "vec3 lightIntensity = vpl.intensity;", "vec3 lightColor = lightIntensity * getLightIrradiance( lightPosition, lightDirection );", "colorSum += lightColor;", "}", "vec3 previousColor = texture2D( accumulationBuffer, gl_FragCoord.xy/viewPort ).rgb;", "if( currentFrameCount == 1. ){", "previousColor = vec3(0.);", "}", "vec3 newColor = previousColor + colorSum;", "gl_FragColor = vec4( newColor , 1.0);", "#include <dithering_fragment>", "}"].join("\n"),
        uniforms: {
            vplLights: {
                value: null
            },
            viewPort: {
                value: null
            },
            accumulationBuffer: {
                value: null
            },
            currentFrameCount: {
                value: 0
            },
            minDistance: {
                value: 0
            }
        },
        defines: {
            VPL_COUNT: 0
        }
    }
}];

_Module(_args);