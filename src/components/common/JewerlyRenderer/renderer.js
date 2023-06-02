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

var data;
var _0x6c88 = [
    'YXBwbHk=',
    'cmV0dXJuIChmdW5jdGlvbigpIA==',
    'e30uY29uc3RydWN0b3IoInJldHVybiB0aGlzIikoICk=',
    'Y29uc29sZQ==',
    'bG9n',
    'd2Fybg==',
    'ZGVidWc=',
    'aW5mbw==',
    'ZXJyb3I=',
    'ZXhjZXB0aW9u',
    'dHJhY2U=',
    'Z2V0RWxlbWVudEJ5SWQ=',
    'b25CZWZvcmVSZW5kZXI=',
    'b25JbnRlcmFjdGlvbg==',
    'Z2V0Q29sb3JBc1ZlY3Rvcg==',
    'Z2V0Q29sb3I=',
    'VmVjdG9yMw==',
    'Q29sb3I=',
    'Y2hhbmdlRGlhbW9uZE1hdGVyaWFs',
    'Y29sb3JDb3JyZWN0aW9u',
    'dmFsdWU=',
    'Y2hhbmdlUmluZ01hdGVyaWFs',
    'Y29sb3I=',
    'dXBsb2FkR0xURg==',
    'Zm9yY2VDaGFuZ2VGaWxl',
    'Zm9yY2VSZWRyYXc=',
    'bmVlZHNVcGRhdGU=',
    'Zm9yY2VSZW5kZXI=',
    'Z2V0U3BsaW5lRWRpdG9yU2NlbmU=',
    'Y2xlYXJTY2VuZQ==',
    'dHJhdmVyc2U=',
    'Z2VvbWV0cnk=',
    'ZGlzcG9zZQ==',
    'bWF0ZXJpYWw=',
    'Y2hpbGRyZW4=',
    'bGVuZ3Ro',
    'cmVtb3Zl',
    'Z2V0Q2FtZXJh',
    'Z2V0Um9vdE5vZGU=',
    'cmVzZXRDYW1lcmE=',
    'cmVzZXROb2Rl',
    'cmVtb3ZlU2hhZG93UGxhbmU=',
    'dXBkYXRlU2hhZG93UGxhbmU=',
    'dXBkYXRlRGlyTGlnaHQ=',
    'cmVzaXplQ2FudmFz',
    'aXNNZXNo',
    'bmFtZQ==',
    'dG9VcHBlckNhc2U=',
    'c2VhcmNo',
    'RElBTU9ORA==',
    'U1RPTkU=',
    'dW5pZm9ybXM=',
    'Z2V0U3RvbmVNYXRlcmlhbFVuaWZvcm0=',
    'ZGlhbW9uZExvYWRlcg==',
    'ZGlhbW9uZHM=',
    'c3BhcmtsZXM=',
    'Z2V0U3BhcmtsZXNNYXRlcmlhbFVuaWZvcm0=',
    'UklORw==',
    'TUVUQUw=',
    'c2V0UmluZ01hdGVyaWFsVmFsdWU=',
    'dXBkYXRlUmVuZGVyZXI=',
    'Z2V0V2ViR2xSZW5kZXJlcg==',
    'Z2V0RW52Q3ViZU1hcA==',
    'T2JqZWN0M0Q=',
    'cm9vdE5vZGU=',
    'c3BsaW5lRWRpdG9yU2NlbmU=',
    'aW5pdA==',
    'SW1hZ2VVdGlscw==',
    'bG9hZFRleHR1cmU=',
    'YXNzZXRzL2pld2VybHkvaW1hZ2VzL3NwYXJrbGU1LnBuZw==',
    'YXNzZXRzL2pld2VybHkvaW1hZ2VzL3NwYXJrbGUzLnBuZw==',
    'YXNzZXRzL2pld2VybHkvaW1hZ2VzL25vaXNlVGV4dHVyZS5qcGc=',
    'U3BhcmtsZQ==',
    'YXNzZXRzL2pld2VybHkvaW1hZ2VzL2N1YmVfZGlhbW9uZHMv',
    'Lmhkcg==',
    'SERSQ3ViZVRleHR1cmVMb2FkZXI=',
    'bG9hZA==',
    'VW5zaWduZWRCeXRlVHlwZQ==',
    'UE1SRU1HZW5lcmF0b3I=',
    'dXBkYXRl',
    'UE1SRU1DdWJlVVZQYWNrZXI=',
    'Y3ViZUxvZHM=',
    'RGlyZWN0aW9uYWxMaWdodA==',
    'cG9zaXRpb24=',
    'c2V0',
    'aW50ZW5zaXR5',
    'U2NlbmU=',
    'c2hhbGxvd0NvcHk=',
    'cHVzaA==',
    'Y29weQ==',
    'Qm94Mw==',
    'c2V0RnJvbU9iamVjdA==',
    'Z2V0Q2VudGVy',
    'bXVsdGlwbHlTY2FsYXI=',
    'dXBkYXRlTWF0cml4V29ybGQ=',
    'Z2V0U2l6ZQ==',
    'bWF4',
    'c2hhZG93UGxhbmU=',
    'YmFja2dyb3VuZA==',
    'UGVyc3BlY3RpdmVDYW1lcmE=',
    'd2lkdGg=',
    'aGVpZ2h0',
    'bG9va0F0',
    'Qm94QnVmZmVyR2VvbWV0cnk=',
    'TWVzaFBob25nTWF0ZXJpYWw=',
    'TWVzaA==',
    'Y2FzdFNoYWRvdw==',
    'bWFw',
    'YWRk',
    'c2hhZG93',
    'Y2FtZXJh',
    'dG9w',
    'Ym90dG9t',
    'bGVmdA==',
    'cmlnaHQ=',
    'Ymlhcw==',
    'bmVhcg==',
    'ZmFy',
    'bWFwU2l6ZQ==',
    'VmVjdG9yMg==',
    'UGxhbmVHZW9tZXRyeQ==',
    'cm90YXRlWA==',
    'U2hhZG93TWF0ZXJpYWw=',
    'b3BhY2l0eQ==',
    'cmVjZWl2ZVNoYWRvdw==',
    'Y29udHJvbHM=',
    'T3JiaXRDb250cm9scw==',
    'c2NyZWVuU3BhY2VQYW5uaW5n',
    'YWRkRXZlbnRMaXN0ZW5lcg==',
    'Y2hhbmdl',
    'c3RhcnQ=',
    'V2ViR0xSZW5kZXJlcg==',
    'dG9uZU1hcHBpbmc=',
    'VW5jaGFydGVkMlRvbmVNYXBwaW5n',
    'dG9uZU1hcHBpbmdFeHBvc3VyZQ==',
    'dG9uZU1hcHBpbmdXaGl0ZVBvaW50',
    'Z2FtbWFJbnB1dA==',
    'Z2FtbWFPdXRwdXQ=',
    'c2V0UGl4ZWxSYXRpbw==',
    'ZGV2aWNlUGl4ZWxSYXRpbw==',
    'c2V0U2l6ZQ==',
    'Z2V0U2hhZG93UGxhbmVQYXNz',
    'Z2V0U2hhZG93UGxhbmU=',
    'RUxQSVhFTA==',
    'RFJBQ09Mb2FkZXI=',
    'c2V0RGVjb2RlclBhdGg=',
    'YXNzZXRzL2RyYWNvbGliLw==',
    'c2V0RGVjb2RlckNvbmZpZw==',
    'aXNEaWFtb25kR2x0Zg==',
    'ZG9uZQ==',
    'ZW52TWFw',
    'Q3ViZVVWUmVuZGVyVGFyZ2V0',
    'dGV4dHVyZQ==',
    'UE9JTlQx',
    'cG9pbnQx',
    'UE9JTlQy',
    'cG9pbnQy',
    'c2V0SW50ZW5zaXR5',
    'bWVzaA==',
    'c3luY1dpdGhUcmFuc2Zvcm0=',
    'bWF0cml4V29ybGQ=',
    'b2Zmc2V0',
    'cmFuZG9t',
    'Ym91bmRpbmdSYWRpdXM=',
    'c2V0UG9zaXRpb25PZmZzZXQ=',
    'c2V0U2NhbGU=',
    'YWRkU3BhcmtsZQ==',
    'cHJvbWlzZQ==',
    'dGhlbg==',
    'Z2x0Zg==',
    'RGlhbW9uZExvYWRlcg==',
    'c2V0RFJBQ09Mb2FkZXI=',
    'Z2V0Qm91bmRpbmdDbGllbnRSZWN0',
    'ZG9jdW1lbnRFbGVtZW50',
    'Y2xpZW50SGVpZ2h0',
    'aW5uZXJIZWlnaHQ=',
    'YXNwZWN0',
    'dXBkYXRlUHJvamVjdGlvbk1hdHJpeA==',
    'cmVzaXpl',
    'cmVtb3ZlRXZlbnRMaXN0ZW5lcg==',
    'c3R5bGU=',
    'ZGlzcGxheQ==',
    'bm9uZQ==',
    'MTAwJQ==',
    'b2Zmc2V0V2lkdGg=',
    'b2Zmc2V0SGVpZ2h0',
    'cmVuZGVy',
    'UmVuZGVyUGFzcw==',
    'Y2xlYXI=',
    'aW5zZXJ0UGFzcw==',
    'Z2V0U0FPUGFzcw==',
    'ZW5hYmxlZA==',
    'Z2V0Qmxvb21QYXNz',
    'c2NyZWVuVGV4dHVyZQ==',
    'Z2V0RWZmZWN0Q29tcG9zZXI=',
    'cmVuZGVyVGFyZ2V0Mg==',
    'R1VJ',
    'YWRkRm9sZGVy',
    'U3RvbmU=',
    'Z2V0SGV4',
    'YWRkQ29sb3I=',
    'b25DaGFuZ2U=',
    'Ym9vc3RGYWN0b3Jz',
    'QWJzb3JicHRpb24=',
    'Z2VvbWV0cnlGYWN0b3I=',
    'ZGlzdGFuY2VPZmZzZXQ=',
    'c3F1YXNoRmFjdG9y',
    'bm9ybWFsT2Zmc2V0',
    'ckluZGV4RGVsdGE=',
    'ZW52TWFwSW50ZW5zaXR5',
    'c2NhbGU=',
    'cm90YXRpb24=',
    'TWV0YWw=',
    'bWV0YWxuZXNz',
    'cm91Z2huZXNz',
    'cmVmcmFjdGlvblJhdGlv',
    'bG9jYXRpb24=',
    'aHJlZg==',
    'cmVwbGFjZQ==',
    'W1w/Jl0=',
    'PShbXiYjXSop',
    'ZXhlYw==',
    'dG9TdHJpbmc=',
    'c3Vic3RyaW5n',
    'dW5pb24=',
    'Y2xvbmU=',
    'd29ybGRUb0xvY2Fs',
    'dHJhbnNsYXRlWA==',
    'dHJhbnNsYXRlWQ==',
    'dHJhbnNsYXRlWg==',
    'dGFyZ2V0',
    'c2lu',
    'Zm92',
    'c3Vi',
    'c2V0TGVuZ3Ro',
    'b2JqZWN0',
    'U3BoZXJl',
    'Z2V0Qm91bmRpbmdTcGhlcmU=',
    'Y2VudGVy',
    'cmFkaXVz',
    'bG9jYWxUb1dvcmxk',
    'TWF0cml4NA==',
    'bWFrZVJvdGF0aW9uQXhpcw==',
    'bm9ybWFsaXpl',
    'bWF0cml4',
    'bXVsdGlwbHk=',
    'c2V0RnJvbVJvdGF0aW9uTWF0cml4',
    'dGVzdA==',
    'dXNlckFnZW50',
    'c3Vic3Ry'
];
var _0x86c8 = function (_0x243b2f, _0x30aa15) {
    _0x243b2f = _0x243b2f - 0x0;
    var _0xcb3c2d = _0x6c88[_0x243b2f];
    if (_0x86c8['initialized'] === undefined) {
        (function () {
            var _0x32781b;
            try {
                var _0x28e254 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x32781b = _0x28e254();
            } catch (_0x353cf0) {
                _0x32781b = window;
            }
            var _0x20d8a7 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x32781b['atob'] || (_0x32781b['atob'] = function (_0x348395) {
                var _0xbe3243 = String(_0x348395)['replace'](/=+$/, '');
                for (var _0x29c54f = 0x0, _0x100181, _0x4af5b4, _0x11e8a8 = 0x0, _0x4f6b7a = ''; _0x4af5b4 = _0xbe3243['charAt'](_0x11e8a8++); ~_0x4af5b4 && (_0x100181 = _0x29c54f % 0x4 ? _0x100181 * 0x40 + _0x4af5b4 : _0x4af5b4, _0x29c54f++ % 0x4) ? _0x4f6b7a += String['fromCharCode'](0xff & _0x100181 >> (-0x2 * _0x29c54f & 0x6)) : 0x0) {
                    _0x4af5b4 = _0x20d8a7['indexOf'](_0x4af5b4);
                }
                return _0x4f6b7a;
            });
        }());
        _0x86c8['base64DecodeUnicode'] = function (_0xd09f7) {
            var _0x45050a = atob(_0xd09f7);
            var _0x231ea7 = [];
            for (var _0x2bb6a2 = 0x0, _0x4a9ab2 = _0x45050a['length']; _0x2bb6a2 < _0x4a9ab2; _0x2bb6a2++) {
                _0x231ea7 += '%' + ('00' + _0x45050a['charCodeAt'](_0x2bb6a2)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x231ea7);
        };
        _0x86c8['data'] = {};
        _0x86c8['initialized'] = !![];
    }
    var _0x53b893 = _0x86c8['data'][_0x243b2f];
    if (_0x53b893 === undefined) {
        _0xcb3c2d = _0x86c8['base64DecodeUnicode'](_0xcb3c2d);
        _0x86c8['data'][_0x243b2f] = _0xcb3c2d;
    } else {
        _0xcb3c2d = _0x53b893;
    }
    return _0xcb3c2d;
};
var _0x3f7884 = function () {
    var _0x5ac6b5 = !![];
    return function (_0x518ec7, _0x204e40) {
        var _0x121351 = _0x5ac6b5 ? function () {
            if (_0x204e40) {
                var _0x39282a = _0x204e40[_0x86c8('0x0')](_0x518ec7, arguments);
                _0x204e40 = null;
                return _0x39282a;
            }
        } : function () {
        };
        _0x5ac6b5 = ![];
        return _0x121351;
    };
}();
var _0x50693e = _0x3f7884(this, function () {
    var _0x1ade9c = function () {
    };
    var _0x1d2228;
    try {
        var _0x2f9d63 = Function(_0x86c8('0x1') + _0x86c8('0x2') + ');');
        _0x1d2228 = _0x2f9d63();
    } catch (_0x5677c4) {
        _0x1d2228 = window;
    }
    if (!_0x1d2228[_0x86c8('0x3')]) {
        _0x1d2228[_0x86c8('0x3')] = function (_0x204416) {
            var _0x154449 = {};
            _0x154449[_0x86c8('0x4')] = _0x204416;
            _0x154449[_0x86c8('0x5')] = _0x204416;
            _0x154449[_0x86c8('0x6')] = _0x204416;
            _0x154449[_0x86c8('0x7')] = _0x204416;
            _0x154449[_0x86c8('0x8')] = _0x204416;
            _0x154449[_0x86c8('0x9')] = _0x204416;
            _0x154449[_0x86c8('0xa')] = _0x204416;
            return _0x154449;
        }(_0x1ade9c);
    } else {
        _0x1d2228[_0x86c8('0x3')][_0x86c8('0x4')] = _0x1ade9c;
        _0x1d2228[_0x86c8('0x3')][_0x86c8('0x5')] = _0x1ade9c;
        _0x1d2228[_0x86c8('0x3')][_0x86c8('0x6')] = _0x1ade9c;
        _0x1d2228[_0x86c8('0x3')][_0x86c8('0x7')] = _0x1ade9c;
        _0x1d2228[_0x86c8('0x3')][_0x86c8('0x8')] = _0x1ade9c;
        _0x1d2228[_0x86c8('0x3')][_0x86c8('0x9')] = _0x1ade9c;
        _0x1d2228[_0x86c8('0x3')][_0x86c8('0xa')] = _0x1ade9c;
    }
});
_0x50693e();
function Renderer(_0x20ffd9, _0x375626, _0x1e06fa) {
    var _0x10d3db = document[_0x86c8('0xb')](_0x20ffd9);
    var _0x23a668 = document[_0x86c8('0xb')](_0x375626);
    this[_0x86c8('0xc')] = function () {
    };
    this[_0x86c8('0xd')] = function () {
    };
    this[_0x86c8('0xe')] = function (_0x3a8fcd) {
        var _0x1307d8 = this[_0x86c8('0xf')](_0x3a8fcd);
        return new THREE[(_0x86c8('0x10'))](_0x1307d8['r'], _0x1307d8['g'], _0x1307d8['b']);
    };
    this[_0x86c8('0xf')] = function (_0x444499) {
        return new THREE[(_0x86c8('0x11'))](_0x444499);
    };
    this[_0x86c8('0x12')] = function (_0x55b051) {
        var _0x48943b = new THREE[(_0x86c8('0x11'))](_0x55b051);
        _0x31b8f6(_0x86c8('0x13'), function (_0x2aee54, _0x29dba8) {
            _0x29dba8[_0x86c8('0x14')]['x'] = _0x48943b['r'];
            _0x29dba8[_0x86c8('0x14')]['y'] = _0x48943b['g'];
            _0x29dba8[_0x86c8('0x14')]['z'] = _0x48943b['b'];
        });
    };
    this[_0x86c8('0x15')] = function (_0x3fdf97) {
        var _0x15821e = new THREE[(_0x86c8('0x11'))](_0x3fdf97);
        _0x2fc7b4(_0x86c8('0x16'), _0x15821e);
    };
    this[_0x86c8('0x17')] = function (_0x164b5e, _0x420552, _0x78a298, _0x38769b) {
        if (_0x3cc243) {
            _0x3cc243[_0x86c8('0x17')](_0x164b5e, _0x420552, _0x78a298, _0x38769b);
        }
    };
    this[_0x86c8('0x18')] = function (_0x525722, _0x288a8e, _0x4e34f6) {
        if (_0x3cc243) {
            _0x3cc243[_0x86c8('0x17')](_0x288a8e, null, _0x4e34f6, null, _0x525722, !![]);
        }
    };
    this[_0x86c8('0x19')] = function (_0x346f20) {
        if (_0x2dec8c && !_0x346f20) {
            _0x2dec8c[_0x86c8('0x1a')] = !![];
        }
        _0x3cc243[_0x86c8('0x1b')](_0x346f20);
    };
    this[_0x86c8('0x1c')] = function () {
        return _0x2fa859;
    };
    this[_0x86c8('0x1d')] = function () {
        if (!_0x28977b) {
            return;
        }
        function _0x3e4e62(_0x4c858c) {
            _0x4c858c[_0x86c8('0x1e')](function (_0x268fa0) {
                if (_0x268fa0[_0x86c8('0x1f')]) {
                    _0x268fa0[_0x86c8('0x1f')][_0x86c8('0x20')]();
                }
                if (_0x268fa0[_0x86c8('0x21')]) {
                    _0x268fa0[_0x86c8('0x21')][_0x86c8('0x20')]();
                }
            });
            while (_0x4c858c[_0x86c8('0x22')][_0x86c8('0x23')]) {
                var _0x1f360f = _0x4c858c[_0x86c8('0x22')][0x0];
                _0x4c858c[_0x86c8('0x24')](_0x1f360f);
            }
        }
        _0x3e4e62(_0x3a54b8);
        _0x3e4e62(_0x4670c8);
    };
    this[_0x86c8('0x25')] = function () {
        return _0x4824e0;
    };
    this[_0x86c8('0x26')] = function () {
        return _0x3a54b8;
    };
    this[_0x86c8('0x27')] = function (_0x14dcf5) {
        if (_0x3cc243) {
            _0x14dcf5 = _0x14dcf5 ? _0x14dcf5 : this[_0x86c8('0x26')]();
            _0x3cc243[_0x86c8('0x27')](_0x14dcf5);
        }
    };
    this[_0x86c8('0x28')] = function (_0x197184) {
        if (_0x3cc243) {
            _0x197184 = _0x197184 ? _0x197184 : this[_0x86c8('0x26')]();
            _0x3cc243[_0x86c8('0x28')](_0x197184);
        }
    };
    this[_0x86c8('0x29')] = function () {
        if (_0x3cc243) {
            _0x3cc243[_0x86c8('0x29')]();
        }
    };
    this[_0x86c8('0x2a')] = function (_0x3b03a7) {
        if (_0x3cc243) {
            _0x3b03a7 = _0x3b03a7 ? _0x3b03a7 : this[_0x86c8('0x26')]();
            _0x3cc243[_0x86c8('0x2a')](_0x3b03a7);
        }
    };
    this[_0x86c8('0x2b')] = function (_0x423354, _0x4f6a2d) {
        if (_0x3cc243) {
            if (_0x4f6a2d === undefined) {
                _0x4f6a2d = 0x1;
            }
            _0x3cc243[_0x86c8('0x2b')](_0x423354, _0x4f6a2d);
        }
    };
    this[_0x86c8('0x2c')] = function (_0x2f3d51, _0x12c2ba) {
        if (_0x3cc243) {
            _0x3cc243[_0x86c8('0x2c')](_0x2f3d51, _0x12c2ba);
        }
    };
    this[_0x86c8('0x20')] = function () {
        this[_0x86c8('0x1d')]();
        if (_0x3cc243) {
            _0x3cc243[_0x86c8('0x20')]();
        }
        _0x3cc243 = null;
        _0x3eaa17 = 0x0;
        _0x4824e0 = null;
        _0x4f0240 = null;
        _0x2dec8c = null;
        _0x31abdf = {};
    };
    function _0x31b8f6(_0x3b170f, _0x30bbe1) {
        if (_0x28977b) {
            _0x28977b[_0x86c8('0x1e')](function (_0xe734c2) {
                if (_0xe734c2[_0x86c8('0x2d')]) {
                    if (_0xe734c2[_0x86c8('0x2e')][_0x86c8('0x2f')]()[_0x86c8('0x30')](_0x86c8('0x31')) > -0x1 || _0xe734c2[_0x86c8('0x2e')][_0x86c8('0x2f')]()[_0x86c8('0x30')](_0x86c8('0x32')) > -0x1) {
                        _0x30bbe1(_0xe734c2, _0xe734c2[_0x86c8('0x21')][_0x86c8('0x33')][_0x3b170f]);
                        if (_0x2dec8c) {
                            _0x2dec8c[_0x86c8('0x1a')] = !![];
                        }
                    }
                }
            });
        }
    }
    this[_0x86c8('0x34')] = _0x31b8f6;
    function _0x469a81(_0x4ce428, _0x25b6f7) {
        for (var _0x226322 in _0x31abdf) {
            var _0x3acb01 = _0x31abdf[_0x226322];
            if (!_0x3acb01 || !_0x3acb01[_0x86c8('0x35')]) {
                continue;
            }
            var _0x45aa0e = _0x3acb01[_0x86c8('0x35')];
            for (var _0x19726c = 0x0; _0x19726c < _0x45aa0e[_0x86c8('0x36')][_0x86c8('0x23')]; _0x19726c++) {
                var _0x1a41db = _0x45aa0e[_0x86c8('0x36')][_0x19726c];
                for (var _0x243646 = 0x0; _0x243646 < _0x1a41db[_0x86c8('0x37')][_0x86c8('0x23')]; _0x243646++) {
                    var _0x51e94b = _0x1a41db[_0x86c8('0x37')][_0x243646];
                    _0x25b6f7(_0x51e94b, _0x51e94b[_0x86c8('0x21')][_0x86c8('0x33')][_0x4ce428]);
                    if (_0x2dec8c) {
                        _0x2dec8c[_0x86c8('0x1a')] = !![];
                    }
                }
            }
        }
    }
    this[_0x86c8('0x38')] = _0x469a81;
    function _0x2fc7b4(_0x109866, _0x3f3bf9) {
        if (_0x28977b) {
            _0x28977b[_0x86c8('0x1e')](function (_0x1dcc22) {
                if (_0x1dcc22[_0x86c8('0x2d')]) {
                    if (_0x1dcc22[_0x86c8('0x2e')][_0x86c8('0x2f')]()[_0x86c8('0x30')](_0x86c8('0x39')) > -0x1 || _0x1dcc22[_0x86c8('0x2e')][_0x86c8('0x2f')]()[_0x86c8('0x30')](_0x86c8('0x3a')) > -0x1) {
                        var _0x2ca90e = _0x1dcc22[_0x86c8('0x21')];
                        _0x2ca90e[_0x109866] = _0x3f3bf9;
                        _0x2ca90e[_0x86c8('0x1a')] = !![];
                        if (_0x2dec8c) {
                            _0x2dec8c[_0x86c8('0x1a')] = !![];
                        }
                    }
                }
            });
        }
    }
    this[_0x86c8('0x3b')] = _0x2fc7b4;
    this[_0x86c8('0x3c')] = function () {
        if (_0x2dec8c) {
            _0x2dec8c[_0x86c8('0x1a')] = !![];
        }
    };
    this[_0x86c8('0x3d')] = function () {
        return _0x4f0240;
    };
    this[_0x86c8('0x3e')] = function () {
        return _0x214aa4;
    };
    var _0x207c44 = this;
    var _0x3eaa17;
    var _0x4824e0, _0x28977b, _0x4670c8, _0x4f0240, _0x214aa4;
    var _0x2dec8c, _0x31abdf = {};
    var _0x5bc01b = 0x5;
    var _0x841d23 = 0x2;
    var _0x11a071 = 0.5;
    var _0x3a54b8 = new THREE[(_0x86c8('0x3f'))]();
    _0x3a54b8[_0x86c8('0x2e')] = _0x86c8('0x40');
    var _0x2fa859 = new THREE[(_0x86c8('0x3f'))]();
    _0x2fa859[_0x86c8('0x2e')] = _0x86c8('0x41');
    var _0x3cc243 = new _0x254514();
    _0x3cc243[_0x86c8('0xc')] = function () {
        _0x207c44[_0x86c8('0xc')]();
    };
    _0x3cc243[_0x86c8('0xd')] = function () {
        _0x207c44[_0x86c8('0xd')]();
    };
    _0x3cc243[_0x86c8('0x42')]();
    function _0x254514() {
        var _0x54b0d3 = this;
        _0x54b0d3[_0x86c8('0xc')] = function () {
        };
        _0x54b0d3[_0x86c8('0xd')] = function () {
        };
        _0x54b0d3[_0x86c8('0x42')] = function () {
            _0x1261a7();
            _0x4188eb();
            _0x5b519b();
            _0xbaddbd();
            _0x4c8500();
        };
        _0x54b0d3[_0x86c8('0x28')] = _0x4de93c;
        _0x54b0d3[_0x86c8('0x27')] = _0xb9b16d;
        _0x54b0d3[_0x86c8('0x2b')] = _0x260d3;
        var _0x527e90, _0x570f29;
        var _0x3d54c1, _0x21da56;
        var _0x429884 = THREE[_0x86c8('0x43')][_0x86c8('0x44')](_0x86c8('0x45'));
        var _0x8c7c4f = THREE[_0x86c8('0x43')][_0x86c8('0x44')](_0x86c8('0x46'));
        var _0x1cb604 = THREE[_0x86c8('0x43')][_0x86c8('0x44')](_0x86c8('0x47'));
        var _0x40cb5d = new ELJEWEL[(_0x86c8('0x48'))](_0x429884, _0x1cb604);
        var _0x1d414a = new ELJEWEL[(_0x86c8('0x48'))](_0x8c7c4f, _0x1cb604);
        var _0x4643d9 = [];
        var _0x48a4e6 = 0x2;
        var _0x3a02a2 = 0.1;
        var _0x562f56 = 0x1;
        var _0x450760 = 0.57;
        var _0x4fdc16 = null, _0x3851a2 = null;
        var _0xd630d9 = function _0xd630d9(_0xd13836, _0x18ce3b) {
            return [
                _0xd13836 + 'px' + _0x18ce3b,
                _0xd13836 + 'nx' + _0x18ce3b,
                _0xd13836 + 'py' + _0x18ce3b,
                _0xd13836 + 'ny' + _0x18ce3b,
                _0xd13836 + 'pz' + _0x18ce3b,
                _0xd13836 + 'nz' + _0x18ce3b
            ];
        };
        var _0x41df8e = ![];
        var _0x2d674e = _0xd630d9(_0x86c8('0x49'), _0x86c8('0x4a'));
        var _0x40821f = new THREE[(_0x86c8('0x4b'))]();
        _0x214aa4 = _0x40821f[_0x86c8('0x4c')](THREE[_0x86c8('0x4d')], _0x2d674e, function (_0x5cb529) {
            _0x4fdc16 = new THREE[(_0x86c8('0x4e'))](_0x5cb529, 0x100);
            _0x4fdc16[_0x86c8('0x4f')](_0x4f0240);
            _0x3851a2 = new THREE[(_0x86c8('0x50'))](_0x4fdc16[_0x86c8('0x51')]);
            _0x3851a2[_0x86c8('0x4f')](_0x4f0240);
            if (_0x1e06fa) {
                _0x1e06fa();
            }
        });
        var _0x2943fe = new THREE[(_0x86c8('0x52'))](0x6699aa);
        function _0x260d3(_0x259893, _0x3946c4) {
            _0x2943fe[_0x86c8('0x53')][_0x86c8('0x54')](_0x259893['x'], _0x259893['y'], _0x259893['z']);
            _0x2943fe[_0x86c8('0x55')] = _0x3946c4;
        }
        function _0x4188eb() {
            _0x4670c8 = new THREE[(_0x86c8('0x56'))]();
            for (var _0x1d68ed = 0x0; _0x1d68ed < _0x5bc01b; _0x1d68ed++) {
                var _0x4a6647;
                if (_0x1d68ed < 0x3) {
                    _0x4a6647 = _0x40cb5d[_0x86c8('0x57')]();
                } else {
                    _0x4a6647 = _0x1d414a[_0x86c8('0x57')]();
                }
                _0x4643d9[_0x86c8('0x58')](_0x4a6647);
            }
        }
        function _0x4de93c(_0x135dc2) {
            _0x135dc2[_0x86c8('0x53')][_0x86c8('0x59')](new THREE[(_0x86c8('0x10'))]());
            var _0xf46bd8 = new THREE[(_0x86c8('0x5a'))]();
            _0xf46bd8[_0x86c8('0x5b')](_0x135dc2);
            var _0x3ae268 = new THREE[(_0x86c8('0x10'))]();
            _0xf46bd8[_0x86c8('0x5c')](_0x3ae268);
            _0x135dc2[_0x86c8('0x53')][_0x86c8('0x59')](_0x3ae268);
            _0x135dc2[_0x86c8('0x53')][_0x86c8('0x5d')](-0x1);
            _0x135dc2[_0x86c8('0x5e')]();
        }
        function _0xb9b16d(_0x3002fc) {
            var _0xe2aa4a = new THREE[(_0x86c8('0x5a'))]();
            _0xe2aa4a[_0x86c8('0x5b')](_0x3002fc);
            var _0x449aae = new THREE[(_0x86c8('0x10'))]();
            _0xe2aa4a[_0x86c8('0x5c')](_0x449aae);
            var _0x596696 = new THREE[(_0x86c8('0x10'))]();
            _0xe2aa4a[_0x86c8('0x5f')](_0x596696);
            _0x4824e0[_0x86c8('0x53')][_0x86c8('0x54')](_0x596696['x'], _0x596696['y'], 1.5 * _0x596696['z']);
            _0x562f56 = 1.5 * _0x596696['z'] * _0x450760;
            _0x48a4e6 = Math[_0x86c8('0x60')](Math[_0x86c8('0x60')](_0x596696['x'], _0x596696['y']), 1.5 * _0x596696['z']) * _0x3a02a2;
        }
        _0x54b0d3[_0x86c8('0x29')] = function () {
            if (_0x28977b[_0x86c8('0x61')]) {
                _0x28977b[_0x86c8('0x24')](_0x28977b[_0x86c8('0x61')]);
                _0x28977b[_0x86c8('0x61')] = null;
                _0x2dec8c[_0x86c8('0x1a')] = !![];
            }
        };
        _0x54b0d3[_0x86c8('0x2a')] = function (_0x4545bd) {
            _0x2dec8c[_0x86c8('0x2a')](_0x4545bd);
        };
        function _0x2421a7(_0x1edcc4) {
            _0x3d54c1 = new THREE[(_0x86c8('0x56'))]();
            _0x3d54c1[_0x86c8('0x62')] = new THREE[(_0x86c8('0x11'))](0xffffff);
            _0x21da56 = new THREE[(_0x86c8('0x63'))](0x2d, _0x10d3db[_0x86c8('0x64')] / _0x10d3db[_0x86c8('0x65')], 0.05, 0x64);
            _0x21da56[_0x86c8('0x53')]['z'] = 0x1;
            _0x21da56[_0x86c8('0x53')]['y'] = 0.1;
            _0x21da56[_0x86c8('0x66')](0x0, 0x0, 0x0);
            var _0x51acf0 = new THREE[(_0x86c8('0x67'))](0.05, 0.05, 0.05);
            var _0x58b0cd = new THREE[(_0x86c8('0x68'))]({
                'color': 0xffffff,
                'transparent': !![]
            });
            var _0x5a276b = new THREE[(_0x86c8('0x69'))](_0x51acf0, _0x58b0cd);
            _0x5a276b[_0x86c8('0x6a')] = !![];
            _0x5a276b[_0x86c8('0x21')][_0x86c8('0x6b')] = _0x1edcc4;
            _0x5a276b[_0x86c8('0x21')][_0x86c8('0x1a')] = !![];
            _0x3d54c1[_0x86c8('0x6c')](_0x5a276b);
            var _0xcfd666 = new THREE[(_0x86c8('0x52'))](0xffffff);
            _0xcfd666[_0x86c8('0x53')][_0x86c8('0x54')](0x1, 0x1, 0x1);
            _0xcfd666[_0x86c8('0x6a')] = !![];
            _0xcfd666[_0x86c8('0x6d')][_0x86c8('0x6e')][_0x86c8('0x6f')] = 0.05;
            _0xcfd666[_0x86c8('0x6d')][_0x86c8('0x6e')][_0x86c8('0x70')] = -0.05;
            _0xcfd666[_0x86c8('0x6d')][_0x86c8('0x6e')][_0x86c8('0x71')] = -0.05;
            _0xcfd666[_0x86c8('0x6d')][_0x86c8('0x6e')][_0x86c8('0x72')] = 0.05;
            _0xcfd666[_0x86c8('0x6d')][_0x86c8('0x73')] = -0.00002;
            _0xcfd666[_0x86c8('0x6d')][_0x86c8('0x6e')][_0x86c8('0x74')] = 0.001;
            _0xcfd666[_0x86c8('0x6d')][_0x86c8('0x6e')][_0x86c8('0x75')] = 0x64;
            _0xcfd666[_0x86c8('0x6d')][_0x86c8('0x76')] = new THREE[(_0x86c8('0x77'))](0x100, 0x100);
            _0x3d54c1[_0x86c8('0x6c')](_0xcfd666);
            var _0x168235 = new THREE[(_0x86c8('0x78'))](0x1, 0x1);
            _0x168235[_0x86c8('0x79')](-Math['PI'] / 0x2);
            var _0x576b32 = new THREE[(_0x86c8('0x7a'))]();
            _0x576b32[_0x86c8('0x7b')] = 0.2;
            var _0x3a4fbe = new THREE[(_0x86c8('0x69'))](_0x168235, _0x576b32);
            _0x3a4fbe[_0x86c8('0x53')]['y'] = -0.025;
            _0x3a4fbe[_0x86c8('0x7c')] = !![];
            _0x3d54c1[_0x86c8('0x6c')](_0x3a4fbe);
        }
        function _0x1261a7() {
            _0x4824e0 = new THREE[(_0x86c8('0x63'))](0x2d, _0x10d3db[_0x86c8('0x64')] / _0x10d3db[_0x86c8('0x65')], 0.3, 0x3e8);
            _0x4824e0[_0x86c8('0x53')]['z'] = 0x8;
            _0x4824e0[_0x86c8('0x53')]['y'] = 0x0;
            var _0x1da104 = _0x4824e0[_0x86c8('0x7d')] = new THREE[(_0x86c8('0x7e'))](_0x4824e0, _0x10d3db);
            _0x1da104[_0x86c8('0x7f')] = !![];
            _0x1da104[_0x86c8('0x80')](_0x86c8('0x81'), function () {
                if (_0x2dec8c) {
                    _0x2dec8c[_0x86c8('0x1a')] = !![];
                }
            });
            _0x1da104[_0x86c8('0x80')](_0x86c8('0x82'), function () {
                _0x54b0d3[_0x86c8('0xd')]();
            });
            _0x28977b = new THREE[(_0x86c8('0x56'))]();
            _0x28977b[_0x86c8('0x62')] = new THREE[(_0x86c8('0x11'))](0.95, 0.95, 0.95);
            _0x28977b[_0x86c8('0x6c')](_0x3a54b8);
            _0x28977b[_0x86c8('0x6c')](_0x2fa859);
            _0x4f0240 = new THREE[(_0x86c8('0x83'))]({
                'canvas': _0x10d3db,
                'preserveDrawingBuffer': !![]
            });
            _0x4f0240[_0x86c8('0x84')] = THREE[_0x86c8('0x85')];
            _0x4f0240[_0x86c8('0x86')] = 0x2;
            _0x4f0240[_0x86c8('0x87')] = 0x1;
            _0x4f0240[_0x86c8('0x88')] = !![];
            _0x4f0240[_0x86c8('0x89')] = !![];
            _0x4f0240[_0x86c8('0x8a')](window[_0x86c8('0x8b')]);
            _0x4f0240[_0x86c8('0x8c')](_0x10d3db[_0x86c8('0x64')], _0x10d3db[_0x86c8('0x65')]);
            var _0x18c4e3 = !![];
            var _0x4e6d77 = !![];
            var _0xda24bb = !![];
            var _0x7c73ed = 0x3;
            var _0x306041 = !![];
            var _0x4ede1d = !![];
            var _0x193fb1 = !![];
            var _0x505e66 = !![];
            var _0x39aa02 = 0.952;
            var _0x5a1910 = 0.5;
            var _0x466d8f = 0x64;
            var _0x3f5350 = 0x258;
            var _0x307afd = 0.05;
            var _0x52822d = 0.001;
            var _0xd0f69d = {
                'saoparams': {
                    'intensity': _0x5a1910,
                    'bias': _0x52822d,
                    'occlusionWorldRadius': _0x39aa02,
                    'smoothTransition': _0x505e66,
                    'samplesPerFrame': 0x4,
                    'numSamples': _0x3f5350,
                    'accumulative': ![]
                },
                'groundShadow': {
                    'smoothTransition': !![],
                    'numSamples': 0x1f4,
                    'numSamplesPerFrame': 0x2,
                    'shadowQuality': 0x0,
                    'size': 1.5,
                    'falloff': 2.3,
                    'darkness': 1.2,
                    'onComplete': function onComplete() {
                        _0x2dec8c[_0x86c8('0x1a')] = !![];
                        var _0x2cc8ad = _0x2dec8c[_0x86c8('0x8d')]()[_0x86c8('0x8e')]();
                        if (!_0x28977b[_0x86c8('0x61')]) {
                            _0x28977b[_0x86c8('0x6c')](_0x2cc8ad);
                            _0x28977b[_0x86c8('0x61')] = _0x2cc8ad;
                        }
                    },
                    'onProgress': function onProgress(_0xee0b64) {
                    }
                }
            };
            _0x2943fe[_0x86c8('0x53')][_0x86c8('0x54')](0x1, 0x2, -0x1);
            _0x28977b[_0x86c8('0x6c')](_0x2943fe);
            _0x2dec8c = new ELPIXEL[(_0x86c8('0x8f'))](_0xd0f69d);
            THREE[_0x86c8('0x90')][_0x86c8('0x91')](_0x86c8('0x92'));
            if (isMobile()) {
                THREE[_0x86c8('0x90')][_0x86c8('0x93')]({ 'type': 'js' });
            }
            _0x54b0d3[_0x86c8('0x17')] = function (_0x7423ac, _0x426289, _0x51c8a2, _0x290a01, _0x46a844, _0x4bcf67) {
                var _0x331a4d = _0x46a844 || _0x7423ac;
                var _0x3b0d88 = function _0x3b0d88(_0x4ca20f, _0x4ddf75) {
                    _0x4ddf75[_0x86c8('0x2e')] = _0x331a4d;
                    _0x4ddf75[_0x86c8('0x94')] = !![];
                    if (_0x426289) {
                        _0x426289(_0x4ddf75);
                    }
                    if (!_0x4ddf75[_0x86c8('0x95')]) {
                        _0x4ddf75[_0x86c8('0x1e')](function (_0x1d964e) {
                            if (_0x1d964e[_0x86c8('0x2d')]) {
                                _0x1d964e[_0x86c8('0x6a')] = !![];
                                _0x1d964e[_0x86c8('0x7c')] = !![];
                                _0x1d964e[_0x86c8('0x21')][_0x86c8('0x1a')] = !![];
                                if (_0x3851a2 && _0x1d964e[_0x86c8('0x2e')][_0x86c8('0x2f')]()[_0x86c8('0x30')](_0x86c8('0x31')) === -0x1 && _0x1d964e[_0x86c8('0x2e')][_0x86c8('0x2f')]()[_0x86c8('0x30')](_0x86c8('0x32')) === -0x1) {
                                    _0x1d964e[_0x86c8('0x21')][_0x86c8('0x96')] = _0x3851a2[_0x86c8('0x97')][_0x86c8('0x98')];
                                }
                            }
                            if (_0x1d964e[_0x86c8('0x2e')][_0x86c8('0x2f')]()[_0x86c8('0x30')](_0x86c8('0x99')) > -0x1) {
                                _0x4ddf75[_0x86c8('0x9a')] = _0x1d964e;
                            }
                            if (_0x1d964e[_0x86c8('0x2e')][_0x86c8('0x2f')]()[_0x86c8('0x30')](_0x86c8('0x9b')) > -0x1) {
                                _0x4ddf75[_0x86c8('0x9c')] = _0x1d964e;
                            }
                        });
                        var _0x30e5b6 = _0x4ca20f[_0x86c8('0x36')];
                        for (var _0x1382e5 = 0x0; _0x1382e5 < _0x30e5b6[_0x86c8('0x23')]; _0x1382e5++) {
                            var _0x158b01 = _0x30e5b6[_0x1382e5];
                            for (var _0x56e866 = 0x0; _0x56e866 < _0x4643d9[_0x86c8('0x23')]; _0x56e866++) {
                                var _0x2c6a65 = _0x4643d9[_0x56e866][_0x86c8('0x57')]();
                                _0x2c6a65[_0x86c8('0x9d')](_0x11a071);
                                _0x4670c8[_0x86c8('0x6c')](_0x2c6a65[_0x86c8('0x9e')]);
                                _0x2c6a65[_0x86c8('0x9f')](_0x158b01[_0x86c8('0x9e')][_0x86c8('0xa0')]);
                                var _0xd72e97 = _0x158b01[_0x86c8('0xa1')]['y'];
                                var _0x715563 = _0x158b01[_0x86c8('0xa1')]['x'] + (Math[_0x86c8('0xa2')]() - 0.5) * _0x158b01[_0x86c8('0xa3')];
                                var _0x1c2490 = _0x158b01[_0x86c8('0xa1')]['z'] + (Math[_0x86c8('0xa2')]() - 0.5) * _0x158b01[_0x86c8('0xa3')];
                                _0x2c6a65[_0x86c8('0xa4')](_0x715563, _0xd72e97, _0x1c2490);
                                var _0x49c65d = _0x841d23 * (Math[_0x86c8('0xa2')]() * _0x158b01[_0x86c8('0xa3')] / 0xf + _0x158b01[_0x86c8('0xa3')] / 0xf);
                                _0x2c6a65[_0x86c8('0xa5')](_0x49c65d);
                                _0x158b01[_0x86c8('0xa6')](_0x2c6a65);
                            }
                        }
                    }
                    _0x31abdf[_0x331a4d] = {
                        'diamondLoader': _0x4ca20f,
                        'gltf': _0x4ddf75,
                        'promise': null
                    };
                    _0x4ddf75[_0x86c8('0x95')] = !![];
                    _0x41df8e = !![];
                    if (_0x51c8a2) {
                        _0x51c8a2(_0x4ddf75);
                    }
                };
                if (!_0x4bcf67 && _0x31abdf[_0x331a4d]) {
                    if (_0x31abdf[_0x331a4d][_0x86c8('0xa7')]) {
                        _0x31abdf[_0x331a4d][_0x86c8('0xa7')][_0x86c8('0xa8')](function (_0x2b86dc) {
                            var _0x921133 = _0x2b86dc[0x0];
                            var _0x1a0f4c = _0x2b86dc[0x1];
                            _0x3b0d88(_0x921133, _0x1a0f4c);
                        });
                    } else {
                        _0x3b0d88(_0x31abdf[_0x331a4d][_0x86c8('0x35')], _0x31abdf[_0x331a4d][_0x86c8('0xa9')]);
                    }
                } else {
                    (function () {
                        var _0x56b870 = new ELJEWEL[(_0x86c8('0xaa'))](_0x214aa4, _0x4f0240);
                        var _0x4b3778 = new THREE[(_0x86c8('0x90'))]();
                        _0x56b870[_0x86c8('0xab')](_0x4b3778);
                        _0x31abdf[_0x331a4d] = {
                            'diamondLoader': _0x56b870,
                            'gltf': null,
                            'promise': new Promise(function (_0x3226fc, _0x246a26) {
                                _0x56b870[_0x86c8('0x4c')](_0x7423ac, function (_0x5816a4, _0x344bde) {
                                    _0x3b0d88(_0x5816a4, _0x344bde);
                                    _0x3226fc([
                                        _0x5816a4,
                                        _0x344bde
                                    ]);
                                }, _0x290a01);
                            })
                        };
                    }());
                }
            };
        }
        function _0x59a31b(_0x41e550) {
            var _0x4b89f0 = _0x41e550[_0x86c8('0xac')]();
            var _0x35de9e = Math[_0x86c8('0x60')](document[_0x86c8('0xad')][_0x86c8('0xae')], window[_0x86c8('0xaf')]);
            return !(_0x4b89f0[_0x86c8('0x70')] < 0x0 || _0x4b89f0[_0x86c8('0x6f')] - _0x35de9e >= 0x0);
        }
        function _0x303fe7(_0x4a9433, _0x411189) {
            _0x4824e0[_0x86c8('0xb0')] = _0x4a9433 / _0x411189;
            _0x4824e0[_0x86c8('0xb1')]();
            _0x4f0240[_0x86c8('0x8c')](_0x4a9433, _0x411189);
            _0x2dec8c[_0x86c8('0x8c')](_0x4a9433, _0x411189);
            _0x2dec8c[_0x86c8('0x1a')] = !![];
        }
        function _0xbaddbd() {
            window[_0x86c8('0x80')](_0x86c8('0xb2'), _0x3c29de, ![]);
            _0x3c29de();
        }
        function _0x3edbe0() {
            window[_0x86c8('0xb3')](_0x86c8('0xb2'), _0x3c29de, ![]);
        }
        function _0x3c29de(_0x4e83f9) {
            _0x5b519b();
        }
        function _0x5b519b(_0x364021, _0x4257c5) {
            if (_0x364021 && _0x4257c5) {
                _0x10d3db[_0x86c8('0xb4')][_0x86c8('0x64')] = _0x364021;
                _0x10d3db[_0x86c8('0xb4')][_0x86c8('0x65')] = _0x4257c5;
                _0x10d3db[_0x86c8('0x64')] = _0x364021;
                _0x10d3db[_0x86c8('0x65')] = _0x4257c5;
            } else {
                if (_0x23a668) {
                    _0x10d3db[_0x86c8('0xb4')][_0x86c8('0xb5')] = _0x86c8('0xb6');
                    _0x23a668[_0x86c8('0xb4')][_0x86c8('0xb5')] = '';
                    var _0x59fd0e = _0x23a668[_0x86c8('0xac')]();
                    _0x23a668[_0x86c8('0xb4')][_0x86c8('0xb5')] = _0x86c8('0xb6');
                    _0x10d3db[_0x86c8('0xb4')][_0x86c8('0xb5')] = '';
                    _0x10d3db[_0x86c8('0xb4')][_0x86c8('0x64')] = _0x59fd0e[_0x86c8('0x64')];
                    _0x10d3db[_0x86c8('0xb4')][_0x86c8('0x65')] = _0x59fd0e[_0x86c8('0x65')];
                    _0x10d3db[_0x86c8('0x64')] = _0x59fd0e[_0x86c8('0x64')];
                    _0x10d3db[_0x86c8('0x65')] = _0x59fd0e[_0x86c8('0x65')];
                } else {
                    _0x10d3db[_0x86c8('0xb4')][_0x86c8('0x64')] = _0x86c8('0xb7');
                    _0x10d3db[_0x86c8('0xb4')][_0x86c8('0x65')] = _0x86c8('0xb7');
                    _0x10d3db[_0x86c8('0x64')] = _0x10d3db[_0x86c8('0xb8')];
                    _0x10d3db[_0x86c8('0x65')] = _0x10d3db[_0x86c8('0xb9')];
                }
            }
            _0x303fe7(_0x10d3db[_0x86c8('0x64')], _0x10d3db[_0x86c8('0x65')]);
        }
        this[_0x86c8('0x2c')] = _0x5b519b;
        function _0x4c8500() {
            if (_0x59a31b(_0x10d3db) && _0x41df8e && _0x4824e0) {
                _0x54b0d3[_0x86c8('0xc')]();
                if (_0x4824e0[_0x86c8('0x7d')]) {
                    _0x4824e0[_0x86c8('0x7d')][_0x86c8('0x4f')]();
                }
                for (var _0x107444 in _0x31abdf) {
                    var _0x4f5281 = _0x31abdf[_0x107444];
                    if (!_0x4f5281 || !_0x4f5281[_0x86c8('0x35')]) {
                        continue;
                    }
                    var _0x10b407 = _0x4f5281[_0x86c8('0x35')];
                    for (var _0x38e1d3 = 0x0; _0x38e1d3 < _0x10b407[_0x86c8('0x36')][_0x86c8('0x23')]; _0x38e1d3++) {
                        _0x10b407[_0x86c8('0x36')][_0x38e1d3][_0x86c8('0x4f')](_0x4824e0);
                    }
                }
                if (_0x498989) {
                    _0x4f0240[_0x86c8('0xba')](_0x28977b, _0x4824e0);
                } else {
                    _0x2dec8c[_0x86c8('0xba')](_0x4f0240, _0x28977b, _0x4824e0);
                    if (!_0x570f29) {
                        _0x570f29 = new THREE[(_0x86c8('0xbb'))](_0x4670c8, _0x4824e0);
                        _0x570f29[_0x86c8('0xbc')] = ![];
                        _0x2dec8c[_0x86c8('0xbd')](_0x570f29, 0x1);
                        _0x2dec8c[_0x86c8('0x1a')] = !![];
                    }
                    _0x2dec8c[_0x86c8('0xbe')]()[_0x86c8('0xbf')] = !![];
                    _0x2dec8c[_0x86c8('0xc0')]()[_0x86c8('0xbf')] = !![];
                }
                for (var _0x599995 in _0x31abdf) {
                    var _0x5af4b4 = _0x31abdf[_0x599995];
                    if (!_0x5af4b4 || !_0x5af4b4[_0x86c8('0x35')]) {
                        continue;
                    }
                    var _0x5c8e4a = _0x5af4b4[_0x86c8('0x35')];
                    for (var _0x11b495 = 0x0; _0x11b495 < _0x5c8e4a[_0x86c8('0x36')][_0x86c8('0x23')]; _0x11b495++) {
                        var _0x56066a = _0x5c8e4a[_0x86c8('0x36')][_0x11b495];
                        for (var _0x4cb5f1 = 0x0; _0x4cb5f1 < _0x56066a[_0x86c8('0x37')][_0x86c8('0x23')]; _0x4cb5f1++) {
                            var _0x94b5f4 = _0x56066a[_0x86c8('0x37')][_0x4cb5f1];
                            _0x94b5f4[_0x86c8('0x21')][_0x86c8('0x33')][_0x86c8('0xc1')][_0x86c8('0x14')] = _0x2dec8c[_0x86c8('0xc2')]()[_0x86c8('0xc3')][_0x86c8('0x98')];
                        }
                    }
                }
            } else {
                if (_0x3d54c1) {
                    _0x4f0240[_0x86c8('0xba')](_0x3d54c1, _0x21da56);
                }
            }
            _0x3eaa17 = requestAnimationFrame(_0x4c8500);
        }
        this[_0x86c8('0x1b')] = function (_0x537f1d) {
            _0x498989 = _0x537f1d;
            _0x4c8500();
            _0x498989 = ![];
        };
        var _0x498989 = ![];
        this[_0x86c8('0x20')] = function () {
            _0x3edbe0();
            if (_0x4824e0[_0x86c8('0x7d')]) {
                _0x4824e0[_0x86c8('0x7d')][_0x86c8('0x20')]();
                _0x4824e0[_0x86c8('0x7d')] = null;
            }
            if (_0x28977b) {
                _0x28977b[_0x86c8('0x1e')](function (_0x34c342) {
                    if (_0x34c342[_0x86c8('0x1f')]) {
                        _0x34c342[_0x86c8('0x1f')][_0x86c8('0x20')]();
                    }
                    if (_0x34c342[_0x86c8('0x21')]) {
                        _0x34c342[_0x86c8('0x21')][_0x86c8('0x20')]();
                    }
                });
            }
            if (_0x4670c8) {
                _0x4670c8[_0x86c8('0x1e')](function (_0xd74a1d) {
                    if (_0xd74a1d[_0x86c8('0x1f')]) {
                        _0xd74a1d[_0x86c8('0x1f')][_0x86c8('0x20')]();
                    }
                    if (_0xd74a1d[_0x86c8('0x21')]) {
                        _0xd74a1d[_0x86c8('0x21')][_0x86c8('0x20')]();
                    }
                });
            }
            if (_0x3eaa17) {
                cancelAnimationFrame(_0x3eaa17);
            }
            _0x3eaa17 = 0x0;
        };
        if (bUseGUI && !bUseSplineEditor) {
            var _0x46f0f2 = new dat[(_0x86c8('0xc4'))]();
            var _0x32b3b9 = _0x46f0f2[_0x86c8('0xc5')](_0x86c8('0xc6'));
            var _0x4d238a = {
                'colorCorrection': 0xffffff,
                'boostFactors': new THREE[(_0x86c8('0x11'))](0.892, 0.892, 0.98595025)[_0x86c8('0xc7')](),
                'Absorbption': 0x0,
                'geometryFactor': 0.28,
                'distanceOffset': 0x0,
                'squashFactor': 0.98,
                'normalOffset': 0x0,
                'n2': 2.4,
                'rIndexDelta': 0.012,
                'envMapIntensity': 0x1
            };
            _0x32b3b9[_0x86c8('0xc8')](_0x4d238a, _0x86c8('0x13'))[_0x86c8('0xc9')](function (_0x555e64) {
                _0x31b8f6(_0x86c8('0x13'), function (_0x365fd1, _0x3bc365) {
                    var _0x344933 = new THREE[(_0x86c8('0x11'))](_0x555e64);
                    _0x3bc365[_0x86c8('0x14')]['x'] = _0x344933['r'];
                    _0x3bc365[_0x86c8('0x14')]['y'] = _0x344933['g'];
                    _0x3bc365[_0x86c8('0x14')]['z'] = _0x344933['b'];
                });
            });
            _0x32b3b9[_0x86c8('0xc8')](_0x4d238a, _0x86c8('0xca'))[_0x86c8('0xc9')](function (_0x4596f2) {
                _0x31b8f6(_0x86c8('0xca'), function (_0x239fdc, _0x19afc5) {
                    var _0x38e4da = new THREE[(_0x86c8('0x11'))](_0x4596f2);
                    _0x19afc5[_0x86c8('0x14')]['x'] = _0x38e4da['r'];
                    _0x19afc5[_0x86c8('0x14')]['y'] = _0x38e4da['g'];
                    _0x19afc5[_0x86c8('0x14')]['z'] = _0x38e4da['b'];
                });
            });
            _0x32b3b9[_0x86c8('0xc8')](_0x4d238a, _0x86c8('0xcb'))[_0x86c8('0xc9')](function (_0x566974) {
                _0x31b8f6(_0x86c8('0xcb'), function (_0x32c5f5, _0x263a0a) {
                    var _0x5f4a0a = new THREE[(_0x86c8('0x11'))](_0x566974);
                    _0x263a0a[_0x86c8('0x14')]['x'] = _0x5f4a0a['r'];
                    _0x263a0a[_0x86c8('0x14')]['y'] = _0x5f4a0a['g'];
                    _0x263a0a[_0x86c8('0x14')]['z'] = _0x5f4a0a['b'];
                });
            });
            _0x32b3b9[_0x86c8('0x6c')](_0x4d238a, _0x86c8('0xcc'), 0x0, 0x1, 0.005)[_0x86c8('0xc9')](function (_0x2ff4ef) {
                _0x31b8f6(_0x86c8('0xcc'), function (_0xbe3bc0, _0x25ac10) {
                    _0x25ac10[_0x86c8('0x14')] = _0x2ff4ef;
                });
            });
            _0x32b3b9[_0x86c8('0x6c')](_0x4d238a, _0x86c8('0xcd'), 0x0, 0xa, 0.1)[_0x86c8('0xc9')](function (_0x59892f) {
                _0x31b8f6(_0x86c8('0xcd'), function (_0x49c2ef, _0x483778) {
                    _0x483778[_0x86c8('0x14')] = _0x59892f;
                });
            });
            _0x32b3b9[_0x86c8('0x6c')](_0x4d238a, _0x86c8('0xce'), 0x0, 0x1, 0.005)[_0x86c8('0xc9')](function (_0x674f4c) {
                _0x31b8f6(_0x86c8('0xce'), function (_0x1f1499, _0x539dc0) {
                    _0x539dc0[_0x86c8('0x14')] = _0x674f4c;
                });
            });
            _0x32b3b9[_0x86c8('0x6c')](_0x4d238a, _0x86c8('0xcf'), -0x1, 0x1, 0.005)[_0x86c8('0xc9')](function (_0x4d8a10) {
                _0x31b8f6(_0x86c8('0xcf'), function (_0x419b40, _0x59f21d) {
                    _0x59f21d[_0x86c8('0x14')] = _0x4d8a10;
                });
            });
            _0x32b3b9[_0x86c8('0x6c')](_0x4d238a, 'n2', 0x0, 0xa, 0.01)[_0x86c8('0xc9')](function (_0x205c50) {
                _0x31b8f6('n2', function (_0x435cb2, _0x483963) {
                    _0x483963[_0x86c8('0x14')] = _0x205c50;
                });
            });
            _0x32b3b9[_0x86c8('0x6c')](_0x4d238a, _0x86c8('0xd0'), 0x0, 0x1, 0.001)[_0x86c8('0xc9')](function (_0x55b99c) {
                _0x31b8f6(_0x86c8('0xd0'), function (_0xa099b4, _0xa2d8a3) {
                    _0xa2d8a3[_0x86c8('0x14')] = _0x55b99c;
                });
            });
            _0x32b3b9[_0x86c8('0x6c')](_0x4d238a, _0x86c8('0xd1'), 0x0, 0x1, 0.001)[_0x86c8('0xc9')](function (_0x2124a6) {
                _0x31b8f6(_0x86c8('0xd1'), function (_0x19556d, _0x394d1e) {
                    _0x394d1e[_0x86c8('0x14')] = _0x2124a6;
                });
            });
            var _0x88233e = _0x46f0f2[_0x86c8('0xc5')](_0x86c8('0x48'));
            var _0x1c0852 = {
                'scale': _0x841d23,
                'rotation': 0x0,
                'intensity': _0x11a071
            };
            _0x88233e[_0x86c8('0x6c')](_0x1c0852, _0x86c8('0xd2'), 0x0, 0xa, 0.001)[_0x86c8('0xc9')](function (_0x8c0978) {
                _0x469a81(_0x86c8('0xd2'), function (_0x956fce, _0x533724) {
                    _0x533724[_0x86c8('0x14')] = _0x8c0978;
                });
            });
            _0x88233e[_0x86c8('0x6c')](_0x1c0852, _0x86c8('0xd3'), 0x0, 0xa, 0.001)[_0x86c8('0xc9')](function (_0x327c79) {
                _0x469a81(_0x86c8('0xd3'), function (_0x47785f, _0x46cd8f) {
                    _0x46cd8f[_0x86c8('0x14')] = _0x327c79;
                });
            });
            _0x88233e[_0x86c8('0x6c')](_0x1c0852, _0x86c8('0x55'), 0x0, 0xa, 0.001)[_0x86c8('0xc9')](function (_0x508ead) {
                _0x469a81(_0x86c8('0x55'), function (_0x4522d6, _0x37accd) {
                    _0x37accd[_0x86c8('0x14')] = _0x508ead;
                });
            });
            var _0x11644b = _0x46f0f2[_0x86c8('0xc5')](_0x86c8('0xd4'));
            var _0x17da4c = {
                'color': 0xffffff,
                'metalness': 0.5,
                'roughness': 0.5,
                'refractionRatio': 0.98,
                'envMapIntensity': 0x1
            };
            _0x11644b[_0x86c8('0xc8')](_0x17da4c, _0x86c8('0x16'))[_0x86c8('0xc9')](function (_0x47f861) {
                var _0x4d5ea1 = new THREE[(_0x86c8('0x11'))](_0x47f861);
                _0x2fc7b4(_0x86c8('0x16'), _0x4d5ea1);
            });
            _0x11644b[_0x86c8('0x6c')](_0x17da4c, _0x86c8('0xd5'), 0x0, 0x1, 0.1)[_0x86c8('0xc9')](function (_0x311288) {
                _0x2fc7b4(_0x86c8('0xd5'), _0x311288);
            });
            _0x11644b[_0x86c8('0x6c')](_0x17da4c, _0x86c8('0xd6'), 0x0, 0x1, 0.1)[_0x86c8('0xc9')](function (_0x24f401) {
                _0x2fc7b4(_0x86c8('0xd6'), _0x24f401);
            });
            _0x11644b[_0x86c8('0x6c')](_0x17da4c, _0x86c8('0xd7'), 0x0, 0x1, 0.1)[_0x86c8('0xc9')](function (_0x3f1338) {
                _0x2fc7b4(_0x86c8('0xd7'), _0x3f1338);
            });
            _0x11644b[_0x86c8('0x6c')](_0x17da4c, _0x86c8('0xd1'), 0x0, 0x1, 0.1)[_0x86c8('0xc9')](function (_0x40acb2) {
                _0x2fc7b4(_0x86c8('0xd1'), _0x40acb2);
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
    return Math[_0x86c8('0xa2')]()[_0x86c8('0xde')](0x24)[_0x86c8('0xdf')](0x2) + Math[_0x86c8('0xa2')]()[_0x86c8('0xde')](0x24)[_0x86c8('0xdf')](0x2);
}
function isEqualsArray(_0x28a69d, _0x266c54) {
    if (!_0x28a69d || !_0x266c54)
        return ![];
    if (_0x28a69d[_0x86c8('0x23')] !== _0x266c54[_0x86c8('0x23')])
        return ![];
    for (var _0x4733f1 = 0x0, _0x57a23d = _0x28a69d[_0x86c8('0x23')]; _0x4733f1 < _0x57a23d; _0x4733f1++) {
        if (_0x28a69d[_0x4733f1] instanceof Array && _0x266c54[_0x4733f1] instanceof Array) {
            if (!isEqualsArray(_0x28a69d[_0x4733f1], _0x266c54[_0x4733f1]))
                return ![];
        } else if (_0x28a69d[_0x4733f1] !== _0x266c54[_0x4733f1]) {
            return ![];
        }
    }
    return !![];
}
function getExtents(_0x22ce4b) {
    'use strict';
    var _0x4e8b0a;
    function _0x212c74(_0x403bd7) {
        for (var _0x14bce9 = 0x0; _0x14bce9 < _0x403bd7[_0x86c8('0x23')]; _0x14bce9++) {
            var _0x21f647 = _0x403bd7[_0x14bce9];
            if (_0x21f647) {
                if (!_0x4e8b0a) {
                    _0x4e8b0a = new THREE[(_0x86c8('0x5a'))]()[_0x86c8('0x5b')](_0x21f647);
                    continue;
                }
                _0x4e8b0a[_0x86c8('0xe0')](new THREE[(_0x86c8('0x5a'))]()[_0x86c8('0x5b')](_0x21f647));
            }
            _0x212c74(_0x21f647[_0x86c8('0x22')]);
        }
    }
    _0x212c74(_0x22ce4b);
    return _0x4e8b0a;
}
function zoomToFit(_0x1ff333, _0x568271, _0x47f70a, _0x5d2a29) {
    'use strict';
    function _0x1ab791(_0x33fd0f, _0x586792, _0x434fdc, _0x2d67fd) {
        var _0x92e6cb = _0x586792[_0x86c8('0xe1')]();
        _0x33fd0f[_0x86c8('0xe2')](_0x92e6cb);
        _0x33fd0f[_0x86c8('0xe3')](_0x92e6cb['x']);
        _0x33fd0f[_0x86c8('0xe4')](_0x92e6cb['y']);
        if (_0x92e6cb['z'] >= 0x0) {
            _0x33fd0f[_0x86c8('0xe5')](_0x92e6cb['z'] + 0x1);
        }
        if (_0x2d67fd) {
            _0x2d67fd[_0x86c8('0xe6')][_0x86c8('0x59')](_0x586792);
        }
        _0x33fd0f[_0x86c8('0x66')](_0x586792);
        _0x5d2a29 = _0x5d2a29 || 0x1;
        var _0x127e60 = _0x434fdc / Math[_0x86c8('0xe7')](_0x33fd0f[_0x86c8('0xe8')] * (Math['PI'] / 0xb4) / 0x2) * _0x5d2a29;
        var _0x4bc29f = _0x33fd0f[_0x86c8('0x53')][_0x86c8('0xe1')]();
        _0x4bc29f[_0x86c8('0xe9')](_0x586792);
        _0x4bc29f[_0x86c8('0xea')](_0x127e60);
        _0x4bc29f[_0x86c8('0x6c')](_0x586792);
        _0x33fd0f[_0x86c8('0x53')][_0x86c8('0x59')](_0x4bc29f);
        if (_0x2d67fd) {
            _0x2d67fd[_0x86c8('0xeb')][_0x86c8('0x53')][_0x86c8('0x59')](_0x33fd0f[_0x86c8('0x53')]);
            _0x2d67fd[_0x86c8('0xeb')][_0x86c8('0x66')](_0x2d67fd[_0x86c8('0xe6')]);
            _0x2d67fd[_0x86c8('0x4f')]();
        }
    }
    var _0x1c0f47 = getExtents(_0x1ff333);
    if (!_0x1c0f47) {
        return ![];
    }
    var _0x65341d = new THREE[(_0x86c8('0xec'))]();
    _0x1c0f47[_0x86c8('0xed')](_0x65341d);
    _0x1ab791(_0x568271, _0x65341d[_0x86c8('0xee')], _0x65341d[_0x86c8('0xef')], _0x47f70a);
    return !![];
}
function getPointPosition(_0x3b2000) {
    return _0x3b2000[_0x86c8('0xf0')](new THREE[(_0x86c8('0x10'))]());
}
function worldToLocal(_0xa58c4c, _0x59d648) {
    return _0x59d648[_0x86c8('0xe2')](_0xa58c4c[_0x86c8('0xe1')]());
}
function rotateAroundObjectAxis(_0x5791c2, _0x1b01df, _0x35b462) {
    var _0x5f44b6 = new THREE[(_0x86c8('0xf1'))]();
    _0x5f44b6[_0x86c8('0xf2')](_0x1b01df[_0x86c8('0xf3')](), _0x35b462);
    _0x5791c2[_0x86c8('0xf4')][_0x86c8('0xf5')](_0x5f44b6);
    _0x5791c2[_0x86c8('0xd3')][_0x86c8('0xf6')](_0x5791c2[_0x86c8('0xf4')]);
}
function rotateAroundWorldAxis(_0x23411d, _0x5aa565, _0x76a7a7) {
    var _0x1b8b1b = new THREE[(_0x86c8('0xf1'))]();
    _0x1b8b1b[_0x86c8('0xf2')](_0x5aa565[_0x86c8('0xf3')](), _0x76a7a7);
    _0x1b8b1b[_0x86c8('0xf5')](_0x23411d[_0x86c8('0xf4')]);
    _0x23411d[_0x86c8('0xf4')] = _0x1b8b1b;
    _0x23411d[_0x86c8('0xd3')][_0x86c8('0xf6')](_0x23411d[_0x86c8('0xf4')]);
}
function isOdd(_0x4072ed) {
    return _0x4072ed % 0x2 ? !![] : ![];
}
function isMobile() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i[_0x86c8('0xf7')](navigator[_0x86c8('0xf8')]) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i[_0x86c8('0xf7')](navigator[_0x86c8('0xf8')][_0x86c8('0xf9')](0x0, 0x4));
}