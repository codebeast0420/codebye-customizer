//
//
//

// ?aquafiore=true&usesplineeditor=true

import * as THREE from './lib/three.diamond.drawer.extension.js'; 

export { SplineEditor }; 

const dat = require('dat.gui');
const GUI = dat.GUI;

// require ('./lib/OrbitControls.js');
require ('./lib/DragControls.js');
require ('./lib/TransformControls.js');

// const OrbitControls = THREE.OrbitControls
const DragControls = THREE.DragControls;
const TransformControls = THREE.TransformControls;

function SplineEditor (
    renderer,
    scene,
    camera,
    controls
) {
    const self = this;

    self.init = function(){
        init();
    }

    self.initCurves = function(){
        initCurves();
    };

    self.importSplineFromJson = function(json){
        importSplineFromJson(json);
    }

    self.getSplines = function(){
        return splines;        
    }

    self.onBeforeRender = function() {

        splineHelperObjects.curve1.visible = params.isRedVisible;
        splineHelperObjects.curve2.visible = params.isGreenVisible;
        splineHelperObjects.curve3.visible = params.isBlueVisible;

        splines.curve1.mesh.visible = params.isRedVisible;
        splines.curve2.mesh.visible = params.isGreenVisible;
        splines.curve3.mesh.visible = params.isBlueVisible;
    }

    self.load = function(new_positions1, new_positions2, new_positions3){
        load(new_positions1, new_positions2, new_positions3);
    };

    self.getSplineHelperObjects = function(curveName) {
        if (!curveName){
            curveName = 'curve1';
        }
        return splineHelperObjects[curveName].children;
    };

    self.onSplineChanged = function(){};

    self.needsRedraw = function(){};

    // --------------------------------

    const splineHelperObjects = { 
        curve1 : new THREE.Scene(),
        curve2 : new THREE.Scene(),
        curve3 : new THREE.Scene()
    };

    const boxBufferGeometry = new THREE.BoxBufferGeometry( 0.7, 0.7, 0.7 );
    var transformControl;

    var ARC_SEGMENTS = 200;

    var splines = {};

    var params = {
        transformControlMode: 'translate', // 'translate', 'rotate'
        isRedVisible : true,
        isGreenVisible : true,
        isBlueVisible : true,
        undo: undo,
        redo: redo,
        setInFirstRedPoint: function(){
            saveUndo();
            const position = splineHelperObjects.curve1.children[0].position;
            splineHelperObjects.curve2.children[0].position.copy(position);
            splineHelperObjects.curve3.children[0].position.copy(position);
            updateSplineOutline('curve2');
            updateSplineOutline('curve3');
            _onSplineChanged();
        },
        addPoint_Curve_Red: function(){ 
            saveUndo();
            addPoint(true, 'curve1');
            updateSplineOutline('curve1');
            _onSplineChanged();
        },
        removePoint_Curve_Red: function(){ 
            saveUndo();
            removePoint(true, 'curve1');
            updateSplineOutline('curve1');
            _onSplineChanged();
        },
        addPoint_Curve_Green: function(){ 
            saveUndo();
            addPoint(true, 'curve2');
            updateSplineOutline('curve2');
            _onSplineChanged();
        },
        removePoint_Curve_Green: function(){ 
            saveUndo();
            removePoint(true, 'curve2');
            updateSplineOutline('curve2');
            _onSplineChanged();
        },
        addPoint_Curve_Blue: function(){ 
            saveUndo();
            addPoint(true, 'curve3');
            updateSplineOutline('curve3');
            _onSplineChanged();
        },
        removePoint_Curve_Blue: function(){ 
            saveUndo();
            removePoint(true, 'curve3');
            updateSplineOutline('curve3');
            _onSplineChanged();
        },
        importSpline : importSpline,
        exportSpline: exportSpline
    };

    let hideTransform = null;

    const undoRedo = {
        undo : [],
        redo : []
    };

    function _onSplineChanged(){
        if (_onSplineChanged.timeout) {
            clearTimeout(_onSplineChanged.timeout);
        }
        _onSplineChanged.timeout = setTimeout( ()=> {
            _onSplineChanged.timeout = 0;
            self.onSplineChanged();
            self.needsRedraw();
        }, 5);
    }

    function init() {

        var helper = new THREE.GridHelper( 60, 20, 0x0, 0x0 );
        helper.position.y = 0; //-199;
        helper.material.opacity = 0.25;
        helper.material.transparent = true;
        scene.add( helper );

        //var axes = new AxesHelper( 1000 );
        //axes.position.set( - 500, - 500, - 500 );
        //scene.add( axes );

        const gui = new GUI();

        gui.width = 350;

        gui.add( 
            params, 
            'transformControlMode', 
            ['translate', 'rotate'] )
        .onChange( function () {
            transformControl.setMode( params.transformControlMode );
            self.needsRedraw();
        });

        gui.add( params, 'isRedVisible' ).onChange( () => {
            if (params.isRedVisible) {
                dragcontrols_curve1.activate();
            }
            else {
                dragcontrols_curve1.deactivate();
            } 
            self.needsRedraw();
        });
        gui.add( params, 'isGreenVisible' ).onChange( () => { 
            if (params.isGreenVisible) {
                dragcontrols_curve2.activate();
            }
            else {
                dragcontrols_curve2.deactivate();
            } 
            self.needsRedraw();
        });
        gui.add( params, 'isBlueVisible' ).onChange( () => { 
            if (params.isBlueVisible) {
                dragcontrols_curve3.activate();
            }
            else {
                dragcontrols_curve3.deactivate();
            } 
            self.needsRedraw();
        });

        gui.add( params, 'undo' );
        gui.add( params, 'redo' );

        gui.add( params, 'setInFirstRedPoint' );

        gui.add( params, 'addPoint_Curve_Red' );
        gui.add( params, 'removePoint_Curve_Red' );
        gui.add( params, 'addPoint_Curve_Green' );
        gui.add( params, 'removePoint_Curve_Green' );
        gui.add( params, 'addPoint_Curve_Blue' );
        gui.add( params, 'removePoint_Curve_Blue' );

        gui.add( params, 'importSpline' );
        gui.add( params, 'exportSpline' );

        gui.open();
        
        controls.addEventListener( 'change', self.needsRedraw );

        controls.addEventListener( 'start', function () {

            cancelHideTransform();
        });
        
        controls.addEventListener( 'end', function () {

            delayHideTransform();
        });

        transformControl = new TransformControls( camera, renderer.domElement );

        scene.add( transformControl );

        transformControl.setMode( params.transformControlMode );

        transformControl.addEventListener( 'change', self.needsRedraw );

        transformControl.addEventListener( 'dragging-changed', function ( event ) {

            controls.enabled = !event.value;
        });
        
        transformControl.addEventListener( 'change', function () { 
            // Hiding transform situation is a little in a mess :()

            cancelHideTransform();
        });

        transformControl.addEventListener( 'mouseDown', function () {

            saveUndo();

            cancelHideTransform();
        });

        transformControl.addEventListener( 'mouseUp', function () {

            delayHideTransform();

            _onSplineChanged();
        });

        transformControl.addEventListener( 'objectChange', function (event) {

            let curveName = event.target.object && event.target.object.curveName;

            updateSplineOutline(curveName);
        });

        function createDragControls(curveName) {
            const dragcontrols = new DragControls( 
                splineHelperObjects[curveName].children,
                camera,
                renderer.domElement 
            ); //
            dragcontrols.enabled = false;
            dragcontrols.addEventListener( 'hoveron', function ( event ) {
                transformControl.attach( event.object );
                cancelHideTransform();
            });
            dragcontrols.addEventListener( 'hoveroff', function () {
                delayHideTransform();
            });
            return dragcontrols;
        }

        const dragcontrols_curve1 = createDragControls('curve1');
        const dragcontrols_curve2 =createDragControls('curve2');
        const dragcontrols_curve3 =createDragControls('curve3');

        var hiding = 0;

        function delayHideTransform() {

            cancelHideTransform();
            _hideTransform();
        }

        function _hideTransform(bForce) {

            if ( hiding ) {
                clearTimeout( hiding );
            }
            hiding = 0;

            if (bForce){
                transformControl.detach( transformControl.object );
            }
            else {

                hiding = setTimeout( function () {
                    transformControl.detach( transformControl.object );
                }, 2500 );
            }
        }
        hideTransform = _hideTransform;

        function cancelHideTransform() {

            if ( hiding ) {
                clearTimeout( hiding );
            }
            hiding = 0;
        }

        scene.add( splineHelperObjects.curve1 );
        scene.add( splineHelperObjects.curve2 );
        scene.add( splineHelperObjects.curve3 );

        initCurves();
    }

    const curvePositions = {
        curve1 : [],
        curve2 : [],
        curve3 : []
    };

    function updateCurvePositions(curveName) {
        const array = curvePositions[curveName];
        array.splice( 0, array.length);
        for (let i = 0; i < splineHelperObjects[curveName].children.length; i++) {
            const object = splineHelperObjects[curveName].children[i];
            array.push(object.position);
        }
    }

    function initCurves(){   

        const geometry = new THREE.BufferGeometry();
        geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( ARC_SEGMENTS * 3 ), 3 ) );

        const curve1 = new THREE.CatmullRomCurve3(curvePositions.curve1);
        curve1.curveType = 'centripetal';
        curve1.mesh = new THREE.Line( geometry.clone(), new THREE.LineBasicMaterial( {
            color: 0xff0000,
            opacity: 0.6
        } ) );
        splines.curve1 = curve1;

        const curve2 = new THREE.CatmullRomCurve3(curvePositions.curve2);
        curve2.curveType = 'centripetal';
        curve2.mesh = new THREE.Line( geometry.clone(), new THREE.LineBasicMaterial( {
            color: 0x00ff00,
            opacity: 0.6
        } ) );
        splines.curve2 = curve2;

        const curve3 = new THREE.CatmullRomCurve3(curvePositions.curve3);
        curve3.curveType = 'centripetal';
        curve3.mesh = new THREE.Line( geometry.clone(), new THREE.LineBasicMaterial( {
            color: 0x0000ff,
            opacity: 0.6
        } ) );
        splines.curve3 = curve3;

        scene.add(splines.curve1.mesh);
        scene.add(splines.curve2.mesh);
        scene.add(splines.curve3.mesh);

        load( 
            [   new THREE.Vector3( -20, 10, 10 ), // curve1
                new THREE.Vector3( 0, 10, 10 ),
                new THREE.Vector3( 30, 10, 10 ),
                new THREE.Vector3( 65, 10, 10 ) 
            ],
            [ 
                new THREE.Vector3( -20, 10, 10 ), // curve2
                new THREE.Vector3( -30, 10, 20 ),
                new THREE.Vector3( -45, 10, 30 ),
                new THREE.Vector3( -70, 10, 35 ) 
            ],
            [ 
                new THREE.Vector3( -20, 10, 10 ), // curve3
                new THREE.Vector3( -30, 10, 0 ),
                new THREE.Vector3( -45, 10, -10 ),
                new THREE.Vector3( -70, 10, -15 ) 
            ] 
        );
    }

    function createSplineObject( position ) {

        const material = new THREE.MeshPhongMaterial( { 
            color : 0xee0000 , 
            transparent : true, 
            opacity : 0.4} 
        ); // { color: Math.random() * 0xffffff } );

        const object = new THREE.Mesh( boxBufferGeometry, material );

        if ( position ) {

            object.position.copy( position );

        } else {
            // const err = { msg : "error"};
            // throw err;
            object.position.x = 2; // Math.random() * 20 - 20;
            object.position.y = 2; // Math.random() * 20;
            object.position.z = 2; // Math.random() * 20 - 20;
        }

        object.castShadow = false;
        object.receiveShadow = false;

        return object;
    }

    function saveUndo(){
        undoRedo.undo.push(exportSplineToJson());
        undoRedo.redo = [];
    }
    function saveRedo(){
        undoRedo.redo.push(exportSplineToJson());
    }
    
    function undo(){
        if (undoRedo.undo.length) {
            saveRedo();
            const json = undoRedo.undo.pop();
            importSplineFromJson(json);
        }
    }

    function redo(){
        if (undoRedo.redo.length){
            undoRedo.undo.push(exportSplineToJson());
            const json = undoRedo.redo.pop();
            importSplineFromJson(json);
        }
    }

    function addPoint(bShowPromt, curveName, position) {

        const splineHelperScene = splineHelperObjects[curveName];

        const objectsArray = splineHelperScene.children;

        let text = "", index;

        if (bShowPromt) {

            for (let i = 0; i < objectsArray.length; i++) {
                if ( i === 0 ) {
                    text += "  " + (0) + " - before 1\n";
                    continue;
                }
                text += "  " + i + " - between " + i + " and " + ( i + 1 ) + "\n";
            }
            text += "  " + objectsArray.length + " - after " + objectsArray.length + "\n";

            index = parseInt(
                prompt("Select index for '" + curveName + "' :\n" + text, objectsArray.length)
            );

            if (isNaN(index)) {
                return;
            }
        }
        else {

            index = objectsArray.length;
        }

        let prev = objectsArray[index - 1];
        let next = objectsArray[index]

        if (prev && next) {

            const t = prev.t + (prev.t + next.t) / 2;

            if (!isNaN(t)) { 

                position = new THREE.Vector3();

                const curve = splines[curveName];

                curve.getPoint( t, position );
            }
        }

        const object = createSplineObject( position ); 

        object.curveName = curveName;

        objectsArray.splice(index, 0, object);

        object.parent = splineHelperScene;
    }

    function removePoint(bShowPromt, curveName) {

        if (hideTransform) {
            hideTransform(true);
        }

        const splineHelperScene = splineHelperObjects[curveName];

        const objectsArray = splineHelperScene.children;

        let text = "", index;

        if (bShowPromt) {

            for (let i = 0; i < objectsArray.length; i++) {
                text += "  " + i + " - delete " + ( i + 1 ) + "\n";
            }

            index = parseInt(
                prompt("Select index '" + curveName + "' :\n" + text, objectsArray.length)
            );

            if (isNaN(index)) {
                return;
            }
        }
        else{
            index = objectsArray.length - 1;
        }

        const object = objectsArray[index];

        splineHelperScene.remove( object );
    }

    function updateSplineOutline(curveName) {

        for ( var k in splines ) {

            if (k !== curveName) {
                continue;
            }

            updateCurvePositions(k)

            const spline = splines[ k ];

            const splineMesh = spline.mesh;

            const position = splineMesh.geometry.attributes.position;

            const curve_length = spline.getLength();

            const point = new THREE.Vector3();
            
            const splineHelperObjectsArray = splineHelperObjects[curveName].children;

            for ( let i = 0; i < ARC_SEGMENTS; i ++ ) {

                const t = i / ( ARC_SEGMENTS - 1 );

                spline.getPoint( t, point );
                
                position.setXYZ( i, point.x, point.y, point.z );

                for (let j = 0; j < splineHelperObjectsArray.length; j++){

                    const hpoint = splineHelperObjectsArray[j].position;

                    if (point.distanceTo(hpoint) < curve_length / ARC_SEGMENTS) {

                        splineHelperObjectsArray[j].t = t;

                        break;
                    }
                }          
            }

            position.needsUpdate = true;

            self.needsRedraw();
        }        
    }
    
    function importSpline() {

        const input=document.createElement('input');
        input.type="file";
        setTimeout(function(){
            input.click();
        },200);

       input.onchange = function(event){

        const loadFile = (file) => {

            const reader = new FileReader();

            reader.onload = () => {

                saveUndo();

                const json = JSON.parse(reader.result);

                importSplineFromJson(json);
            };
            reader.readAsText(file);
        };

        for ( let i = 0; i < event.currentTarget.files.length; i++ ) {
            const file = event.currentTarget.files[i];
            if (file) {
                loadFile(file);
                break;
            }
        }
       };
    }

    function importSplineFromJson(json){

        const position1 = [];
        const position2 = [];
        const position3 = [];

        const curve1Data = json.curve1 || json.data || [];
        const curve2Data = json.curve2 || [];
        const curve3Data = json.curve3 || [];

        const data = {
            curve1 : curve1Data,
            curve2 : curve2Data,
            curve3 : curve3Data
        }

        for (let i = 0; i < curve1Data.length; i++){
            const data = curve1Data[i];
            position1.push(new THREE.Vector3( data.px, data.py, data.pz ));
        }
        for (let i = 0; i < curve2Data.length; i++){
            const data = curve2Data[i];
            position2.push(new THREE.Vector3( data.px, data.py, data.pz ));
        }
        for (let i = 0; i < curve3Data.length; i++){
            const data = curve3Data[i];
            position3.push(new THREE.Vector3( data.px, data.py, data.pz ));
        }

        load(position1, position2, position3);

        function updateSplineHelperObjects(curveName) {

            const curveData = data[curveName];

            const splineHelperObjectsArray = splineHelperObjects[curveName].children;

            for (let i = 0; i < splineHelperObjectsArray.length; i++){
                const object = splineHelperObjectsArray[i];
                object.rotation.x = curveData[i] ? curveData[i].rx : 0;
                object.t = curveData[i] ? curveData[i].t : 0;
            }
        }   

        updateSplineHelperObjects('curve1');
        updateSplineHelperObjects('curve2');
        updateSplineHelperObjects('curve3');

        _onSplineChanged();
    }

    function exportSplineToJson(){
        const json = {
            curve1 : [], // previous version was json.data
            curve2 : [],
            curve3 : [],
        };

        function applyJson(curveName) {

            const splineHelperObjectsArray = splineHelperObjects[curveName].children;

            for ( let i = 0; i < splineHelperObjectsArray.length; i ++ ) {

                const p = splineHelperObjectsArray[i].position;
                const r = splineHelperObjectsArray[i].rotation;
                const t = splineHelperObjectsArray[i].t;

                if (!json[curveName]){
                    json[curveName] = [];
                }

                json[curveName].push({
                    px : p.x, py : p.y, pz : p.z,
                    rx : r.x, ry : r.y, rz : r.z,
                    t: t
                });
            }
        }

        applyJson('curve1');
        applyJson('curve2');
        applyJson('curve3');

        return json;
    }

    function exportSpline() {

        const json = exportSplineToJson();

        function download(content, fileName, contentType) {
            content = JSON.stringify(content);
            var a = document.createElement("a");
            var file = new Blob([content], {type: contentType});
            a.href = URL.createObjectURL(file);
            a.download = fileName;
            setTimeout(function(){
                a.click();
            },200);
        }

        download(json, 'spline.json', 'text/plain');

        self.needsRedraw()
    }

    function load( 
        new_positions_curve1,
        new_positions_curve2,
        new_positions_curve3 ) {

        function applyPositions(curveName, new_positions_array) {

            const objects = splineHelperObjects[curveName].children;

            while (objects.length ) {

                removePoint(false, curveName);
            }

            for (let i = 0; i < new_positions_array.length; i++) {

                const position = new_positions_array[i];

                addPoint(false, curveName, position)
            }
        }

        applyPositions('curve1', new_positions_curve1);
        updateSplineOutline('curve1');

        if (new_positions_curve2 && new_positions_curve2.length) {
            applyPositions('curve2', new_positions_curve2);
            updateSplineOutline('curve2');
        }
        if (new_positions_curve3 && new_positions_curve3.length) {
            applyPositions('curve3', new_positions_curve3);
            updateSplineOutline('curve3');
        }

        _onSplineChanged();
    }
}