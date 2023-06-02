//
//
//

// you need 
// 1. blender 2.79 with gltf i/o installed; blender 2.79 should be added to path
// 2. npm install -g gltf-pipeline - https://github.com/AnalyticalGraphicsInc/gltf-pipeline

const filename = process.argv[2];

const fs = require("fs");
const path = require("path");

const exec = require("child_process").exec;

const deleteFolderRecursive = function(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file, index){
        const curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
            deleteFolderRecursive(curPath);
        } else { // delete file
            fs.unlinkSync(curPath);
        }
        });
        fs.rmdirSync(path);
    }
};

const createFolder = function(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, 744);
    }
};

const main = (filename) => {

    if (!filename) {

        console.error('no filename passed !');
    
        return;
    }

    const time = new Date().getTime();

    const logTime = () => {
        const str = "---> log time : " + (new Date().getTime() - time) + " ms";
        console.log(str); 
        return str;
    };

    const wExec = (str) => {
        return new Promise( (resolve, reject) => {
            exec(
                str,  
                (error, stdout, stderr) => {
                    console.log("<--- error  ---> "); 
                    console.log(error ? error : "no errors");
                    console.log("<--- stdout ---> ");
                    console.log(stdout);
                    console.log("<--- stderr ---> ");
                    console.log(stderr ? stderr : "no stderr");
                    resolve();                   
                }
            );
        });
    };

    console.log('Create directories');

    logTime();

    deleteFolderRecursive('./output/gltf');
    deleteFolderRecursive('./output/draco');

    createFolder('./output/gltf');
    createFolder('./output/draco');

    console.log('Start blender');

    wExec('blender ' + filename + ' --background -noaudio --python export_all_glb.py')
    .then( x => {

        logTime();

        console.log('Start draco');

        fs.readdir('./output/gltf/', (err, files) => {

            const promises = [];

            files.forEach(filepath => {

                if (filepath.indexOf('.gltf') > -1) {

                    console.log(filepath + " will be done by draco");

                    var extension = path.extname(filepath);
                    var filename = path.basename(filepath,extension);

                    const p = wExec('gltf-pipeline' + 
                    ' -i ./output/gltf/' + filepath +
                    ' -o ./output/draco/' + filename + ".glb" +
                    ' -d' + 
                    ' --draco.compressionLevel 10' +
                    // ' -s' +
                    ' -b');

                    promises.push(p);
                }
            });

            Promise.all(promises).then( x => {
                logTime();
                console.log('---> draco done');
            })
        });
    });

};

main(filename);

