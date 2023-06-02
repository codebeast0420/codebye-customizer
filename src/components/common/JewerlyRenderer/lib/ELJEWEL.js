
import * as THREE from './three.diamond.drawer.extension.js';

const ELJEWEL = {};

export { ELJEWEL }; 

var data;
var _0x81ef = [
    'bGVuZ3Ro',
    'ZW51bWVyYWJsZQ==',
    'Y29uZmlndXJhYmxl',
    'dmFsdWU=',
    'd3JpdGFibGU=',
    'ZGVmaW5lUHJvcGVydHk=',
    'a2V5',
    'cHJvdG90eXBl',
    'Q2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9u',
    'RGlhbW9uZExvYWRlcg==',
    'TG9hZGluZ01hbmFnZXI=',
    'b25Qcm9ncmVzcw==',
    'bG9n',
    'ZW52Q3ViZU1hcA==',
    'cmVuZGVyZXI=',
    'bG9hZGVy',
    'R0xURkxvYWRlcg==',
    'cHJvdG90eXBlTWF0ZXJpYWxz',
    'ZGlhbW9uZHM=',
    'c2V0RFJBQ09Mb2FkZXI=',
    'bG9hZA==',
    'b25PYmplY3RMb2Fk',
    'cHJvY2Vzcw==',
    'YmluZA==',
    'bG9hZGVk',
    'dG90YWw=',
    'Z2x0Zg==',
    'ZmluZERpYW1vbmRQcm90b3R5cGVz',
    'YnVpbGREaWFtb25kU2NlbmU=',
    'c2NlbmU=',
    'dHJhdmVyc2U=',
    'aXNNZXNo',
    'bmFtZQ==',
    'dG9VcHBlckNhc2U=',
    'c2VhcmNo',
    'RElBTU9ORA==',
    'U1RPTkU=',
    'c3Vic3RyaW5n',
    'RGlhbW9uZE1hdGVyaWFs',
    'dXBkYXRlTWF0cml4V29ybGQ=',
    'bWF0ZXJpYWw=',
    'ZW52TWFw',
    'RGlhbW9uZA==',
    'cHVzaA==',
    'YXBwbHk=',
    'cmV0dXJuIChmdW5jdGlvbigpIA==',
    'e30uY29uc3RydWN0b3IoInJldHVybiB0aGlzIikoICk=',
    'Y29uc29sZQ==',
    'd2Fybg==',
    'ZGVidWc=',
    'aW5mbw==',
    'ZXJyb3I=',
    'ZXhjZXB0aW9u',
    'dHJhY2U=',
    'bWVzaA==',
    'Y2xvbmU=',
    'c3BhcmtsZXM=',
    'Z2VvbWV0cnk=',
    'Y29tcHV0ZUJvdW5kaW5nQm94',
    'b2Zmc2V0',
    'VmVjdG9yMw==',
    'Ym91bmRpbmdCb3g=',
    'Z2V0Q2VudGVy',
    'dW5pZm9ybXM=',
    'Y2VudHJlT2Zmc2V0',
    'Y29weQ==',
    'Y29tcHV0ZUJvdW5kaW5nU3BoZXJl',
    'Ym91bmRpbmdSYWRpdXM=',
    'Ym91bmRpbmdTcGhlcmU=',
    'cmFkaXVz',
    'c2V0UG9zaXRpb24=',
    'cG9zaXRpb24=',
    'c2V0',
    'c2V0Um90YXRpb24=',
    'cm90YXRpb24=',
    'c2V0UXVhdGVybmlvbg==',
    'cXVhdGVybmlvbg==',
    'c2V0U2NhbGU=',
    'c2NhbGU=',
    'c2V0VHJhbnNmb3Jt',
    'bWF0cml4',
    'dXBkYXRl',
    'c3luY1dpdGhUcmFuc2Zvcm0=',
    'bWF0cml4V29ybGQ=',
    'c3Vi',
    'bm9ybWFsaXpl',
    'cm90YXRpb25TcGVlZEZhY3Rvcg==',
    'YWxpZ25XaXRoQ2FtZXJh',
    'YWRkU3BhcmtsZQ==',
    'bm9ybWFsQmFrZUhlbHBlck1lc2g=',
    'Y3ViZUNhbWVyYQ==',
    'Q3ViZUNhbWVyYQ==',
    'bG9jYWxTY2VuZQ==',
    'U2NlbmU=',
    'YWRk',
    'U2hhZGVyTWF0ZXJpYWw=',
    'ZXh0ZW5zaW9ucw==',
    'ZGlhbW9uZE1hdGVyaWFs',
    'ZGVmaW5lcw==',
    'VW5pZm9ybXNVdGlscw==',
    'dmVydGV4U2hhZGVy',
    'ZnJhZ21lbnRTaGFkZXI=',
    'cmVuZGVyVGFyZ2V0',
    'dGV4dHVyZQ==',
    'Z2VuZXJhdGVNaXBtYXBz',
    'bWFnRmlsdGVy',
    'TmVhcmVzdEZpbHRlcg==',
    'bWluRmlsdGVy',
    'Zm9ybWF0',
    'UkdCQUZvcm1hdA==',
    'bmVlZHNOb3JtYWxzVXBkYXRl',
    'bm9ybWFsTWFwQ2FwdHVyZU1hdGVyaWFs',
    'Y2VudGVy',
    'cHJlcGFyZU5vcm1hbHNDdWJlTWFw',
    'aXNEaWFtb25kTWF0ZXJpYWw=',
    'dEN1YmVNYXBOb3JtYWxz',
    'dXBkYXRlQ3ViZU1hcA==',
    'Tm9ybWFsTWFwQ2FwdHVyZVNoYWRlcg==',
    'dmFyeWluZyB2ZWMzIHZOb3JtYWw7',
    'dm9pZCBtYWluKCkgew==',
    'dk5vcm1hbCA9IG5vcm1hbDs=',
    'Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApOw==',
    'am9pbg==',
    'dmVjMyBjb2xvciA9IG5vcm1hbGl6ZSh2Tm9ybWFsKTs=',
    'Y29sb3IgPSBjb2xvciAqIDAuNSArIDAuNTs=',
    'Z2xfRnJhZ0NvbG9yID0gdmVjNCggY29sb3IueCwgY29sb3IueSwgY29sb3IueiwgMS4wICk7',
    'RG91YmxlU2lkZQ==',
    'RGlhbW9uZFNoYWRlcg==',
    'dmFyeWluZyB2ZWMyIHZVdjs=',
    'dmFyeWluZyB2ZWMzIE5vcm1hbDs=',
    'dmFyeWluZyB2ZWMzIHdvcmxkTm9ybWFsOw==',
    'dmFyeWluZyB2ZWMzIHZlY1Bvczs=',
    'dmFyeWluZyB2ZWMzIHZpZXdQb3M7',
    'dlV2ID0gdXY7',
    'Tm9ybWFsID0gIG5vcm1hbDs=',
    'd29ybGROb3JtYWwgPSAobW9kZWxNYXRyaXggKiB2ZWM0KG5vcm1hbCwwLjApKS54eXo7',
    'dmVjUG9zID0gKG1vZGVsTWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wICkpLnh5ejs=',
    'dmlld1BvcyA9IChtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjAgKSkueHl6Ow==',
    'dW5pZm9ybSBzYW1wbGVyQ3ViZSB0Q3ViZU1hcE5vcm1hbHM7',
    'dW5pZm9ybSBzYW1wbGVyQ3ViZSBlbnZNYXA7',
    'dW5pZm9ybSBzYW1wbGVyQ3ViZSBlbnZSZWZyYWN0aW9uTWFwOw==',
    'dW5pZm9ybSBzYW1wbGVyMkQgc3BoZXJlTWFwOw==',
    'dW5pZm9ybSBmbG9hdCBlbnZNYXBJbnRlbnNpdHk7',
    'dW5pZm9ybSBmbG9hdCB0YW5BbmdsZVNxQ29uZTs=',
    'dW5pZm9ybSBmbG9hdCBjb25lSGVpZ2h0Ow==',
    'dW5pZm9ybSBpbnQgbWF4Qm91bmNlczs=',
    'dW5pZm9ybSBtYXQ0IG1vZGVsTWF0cml4Ow==',
    'dW5pZm9ybSBtYXQ0IGludk1vZGVsTWF0cml4Ow==',
    'dW5pZm9ybSBmbG9hdCBuMjs=',
    'dW5pZm9ybSBmbG9hdCByYWRpdXM7',
    'dW5pZm9ybSBib29sIGJEZWJ1Z0JvdW5jZXM7',
    'dW5pZm9ybSBmbG9hdCBySW5kZXhEZWx0YTs=',
    'dW5pZm9ybSBmbG9hdCBub3JtYWxPZmZzZXQ7',
    'dW5pZm9ybSBmbG9hdCBzcXVhc2hGYWN0b3I7',
    'dW5pZm9ybSBmbG9hdCBkaXN0YW5jZU9mZnNldDs=',
    'dW5pZm9ybSBmbG9hdCBnZW9tZXRyeUZhY3Rvcjs=',
    'dW5pZm9ybSB2ZWMzIEFic29yYnB0aW9uOw==',
    'dW5pZm9ybSB2ZWMzIGNvbG9yQ29ycmVjdGlvbjs=',
    'dW5pZm9ybSB2ZWMzIGJvb3N0RmFjdG9yczs=',
    'dW5pZm9ybSB2ZWMzIGNlbnRyZU9mZnNldDs=',
    'dmVjMyBCUkRGX1NwZWN1bGFyX0dHWF9FbnZpcm9ubWVudCggY29uc3QgaW4gdmVjMyB2aWV3RGlyLCBjb25zdCBpbiB2ZWMzIG5vcm1hbCwgY29uc3QgaW4gdmVjMyBzcGVjdWxhckNvbG9yLCBjb25zdCBpbiBmbG9hdCByb3VnaG5lc3MgKSB7',
    'ZmxvYXQgZG90TlYgPSBhYnMoIGRvdCggbm9ybWFsLCB2aWV3RGlyICkgKTs=',
    'Y29uc3QgdmVjNCBjMCA9IHZlYzQoIC0gMSwgLSAwLjAyNzUsIC0gMC41NzIsIDAuMDIyICk7',
    'Y29uc3QgdmVjNCBjMSA9IHZlYzQoIDEsIDAuMDQyNSwgMS4wNCwgLSAwLjA0ICk7',
    'dmVjNCByID0gcm91Z2huZXNzICogYzAgKyBjMTs=',
    'ZmxvYXQgYTAwNCA9IG1pbiggci54ICogci54LCBleHAyKCAtIDkuMjggKiBkb3ROViApICkgKiByLnggKyByLnk7',
    'dmVjMiBBQiA9IHZlYzIoIC0xLjA0LCAxLjA0ICkgKiBhMDA0ICsgci56dzs=',
    'cmV0dXJuIHNwZWN1bGFyQ29sb3IgKiBBQi54ICsgQUIueTs=',
    'dmVjNCBTYW1wbGVTcGVjdWxhclJlZmxlY3Rpb24odmVjNCBzcGVjdWxhckNvbG9yLCB2ZWMzIGRpcmVjdGlvbiApIHs=',
    'ZGlyZWN0aW9uLnggKj0gLTEuMDs=',
    'ZGlyZWN0aW9uLnogKj0gLTEuMDs=',
    'dmVjMyB0ZW1wRGlyID0gbm9ybWFsaXplKHZlYzMoMC4sIDAuLCAxLikgKyBkaXJlY3Rpb24pOw==',
    'dmVjNCBzYW1wbGVDb2xvclJHQiA9IGVudk1hcEludGVuc2l0eSAqIGVudk1hcFRleGVsVG9MaW5lYXIoIHRleHR1cmVDdWJlKCBlbnZNYXAsIGRpcmVjdGlvbiApICk7',
    'dmVjNCBzYW1wbGVDb2xvclJlZnJhY3Rpb24gPSBlbnZNYXBJbnRlbnNpdHkgKiAoIHRleHR1cmUyRCggc3BoZXJlTWFwLCB0ZW1wRGlyLnh5ICogMC41ICsgMC41ICkgKTs=',
    'dmVjMyB0b25lTWFwcGVkQ29sb3IgPSBwb3codG9uZU1hcHBpbmcoc2FtcGxlQ29sb3JSR0IucmdiKSx2ZWMzKDEuLzEuKSk7',
    'cmV0dXJuIHZlYzQodG9uZU1hcHBlZENvbG9yLCAxLjApOw==',
    'dmVjNCBTYW1wbGVTcGVjdWxhckNvbnRyaWJ1dGlvbih2ZWM0IHNwZWN1bGFyQ29sb3IsIHZlYzMgZGlyZWN0aW9uICkgew==',
    'ZGlyZWN0aW9uID0gbm9ybWFsaXplKGRpcmVjdGlvbik7',
    'ZmxvYXQgbSA9IDIuODI4NDI3MTI0NzQ2MTkwMyAqIHNxcnQoIGRpcmVjdGlvbi56KzEuMCApOw==',
    'dmVjNCBzYW1wbGVDb2xvclJlZnJhY3Rpb24gPSBlbnZNYXBJbnRlbnNpdHkgKiB0ZXh0dXJlMkQoIHNwaGVyZU1hcCwgY2xhbXAoZGlyZWN0aW9uLnh5IC8gbSArIDAuNDUsIHZlYzIoMC4pLCB2ZWMyKDEuKSkgKTs=',
    'dmVjMyB0b25lTWFwcGVkQ29sb3IgPSBwb3codG9uZU1hcHBpbmcoIHNhbXBsZUNvbG9yUkdCLnJnYiApLHZlYzMoMS4vMS4pKTs=',
    'dmVjMyBpbnRlcnNlY3RTcGhlcmUodmVjMyBvcmlnaW4sIHZlYzMgZGlyZWN0aW9uKSB7',
    'b3JpZ2luIC09IGNlbnRyZU9mZnNldDs=',
    'ZGlyZWN0aW9uLnkgLz0gc3F1YXNoRmFjdG9yOw==',
    'ZmxvYXQgQSA9IGRvdChkaXJlY3Rpb24sIGRpcmVjdGlvbik7',
    'ZmxvYXQgQiA9IDIuMCpkb3Qob3JpZ2luLCBkaXJlY3Rpb24pOw==',
    'ZmxvYXQgQyA9IGRvdChvcmlnaW4sIG9yaWdpbikgLSByYWRpdXMgKiByYWRpdXM7',
    'ZmxvYXQgZGlzYyA9IEIqQiAtIDQuMCAqIEEgKiBDOw==',
    'aWYoZGlzYyA+IDAuMCk=',
    'ZGlzYyA9IHNxcnQoZGlzYyk7',
    'ZmxvYXQgdDEgPSAoLUIgKyBkaXNjKSpnZW9tZXRyeUZhY3Rvci9BOw==',
    'ZmxvYXQgdDIgPSAoLUIgLSBkaXNjKSpnZW9tZXRyeUZhY3Rvci9BOw==',
    'ZmxvYXQgdCA9ICh0MSA+IHQyKSA/IHQxIDogdDI7',
    'ZGlyZWN0aW9uLnkgKj0gc3F1YXNoRmFjdG9yOw==',
    'cmV0dXJuIHZlYzMob3JpZ2luICsgY2VudHJlT2Zmc2V0ICsgZGlyZWN0aW9uICogdCk7',
    'cmV0dXJuIHZlYzMoMC4wKTs=',
    'dmVjMyBkZWJ1Z0JvdW5jZXMoaW50IGNvdW50KSB7',
    'dmVjMyBjb2xvciA9IHZlYzMoMS4sMS4sMS4pOw==',
    'aWYoY291bnQgPT0gMSk=',
    'Y29sb3IgPSB2ZWMzKDAuMCwxLjAsMC4wKTs=',
    'ZWxzZSBpZihjb3VudCA9PSAyKQ==',
    'Y29sb3IgPSB2ZWMzKDAuMCwwLjAsMS4wKTs=',
    'ZWxzZSBpZihjb3VudCA9PSAzKQ==',
    'Y29sb3IgPSB2ZWMzKDEuMCwxLjAsMC4wKTs=',
    'ZWxzZSBpZihjb3VudCA9PSA0KQ==',
    'Y29sb3IgPSB2ZWMzKDAuMCwxLjAsMS4wKTs=',
    'ZWxzZQ==',
    'aWYoY291bnQgPT0wKQ==',
    'Y29sb3IgPSB2ZWMzKDEuMCwwLjAsMC4wKTs=',
    'cmV0dXJuIGNvbG9yOw==',
    'dmVjMyB0cmFjZVJheSh2ZWMzIG9yaWdpbiwgdmVjMyBkaXJlY3Rpb24sIHZlYzMgbm9ybWFsKSB7',
    'dmVjMyBvdXRDb2xvciA9IHZlYzMoMC4wKTs=',
    'Ly8gUmVmbGVjdC9SZWZyYWN0IHJheSBlbnRlcmluZyB0aGUgZGlhbW9uZA==',
    'Y29uc3QgZmxvYXQgbjEgPSAxLjA7',
    'Y29uc3QgZmxvYXQgZXBzaWxvbiA9IDFlLTQ7',
    'ZmxvYXQgZjAgPSAoMi40LSBuMSkvKDIuNCArIG4xKTs=',
    'ZjAgKj0gZjA7',
    'dmVjMyBhdHRlbnVhdGlvbkZhY3RvciA9IHZlYzMoMS4wKTs=',
    'dmVjMyBuZXdEaXJlY3Rpb24gPSByZWZyYWN0KGRpcmVjdGlvbiwgbm9ybWFsLCBuMS9uMik7',
    'dmVjMyByZWZsZWN0ZWREaXJlY3Rpb24gPSByZWZsZWN0KGRpcmVjdGlvbiwgbm9ybWFsKTs=',
    'dmVjMyBicmRmUmVmbGVjdGVkID0gQlJERl9TcGVjdWxhcl9HR1hfRW52aXJvbm1lbnQocmVmbGVjdGVkRGlyZWN0aW9uLCBub3JtYWwsIHZlYzMoZjApLCAwLjApOw==',
    'dmVjMyBicmRmUmVmcmFjdGVkID0gQlJERl9TcGVjdWxhcl9HR1hfRW52aXJvbm1lbnQobmV3RGlyZWN0aW9uLCAtbm9ybWFsLCB2ZWMzKGYwKSwgMC4wKTs=',
    'YXR0ZW51YXRpb25GYWN0b3IgKj0gKCB2ZWMzKDEuMCkgLSBicmRmUmVmcmFjdGVkKTs=',
    'b3V0Q29sb3IgKz0gU2FtcGxlU3BlY3VsYXJSZWZsZWN0aW9uKHZlYzQoMS4wKSwgcmVmbGVjdGVkRGlyZWN0aW9uICkucmdiICogYnJkZlJlZmxlY3RlZDs=',
    'aW50IGNvdW50ID0gMDs=',
    'bmV3RGlyZWN0aW9uID0gKGludk1vZGVsTWF0cml4ICogdmVjNChuZXdEaXJlY3Rpb24sIDAuMCkpLnh5ejs=',
    'bmV3RGlyZWN0aW9uID0gbm9ybWFsaXplKG5ld0RpcmVjdGlvbik7',
    'b3JpZ2luID0gKGludk1vZGVsTWF0cml4ICogdmVjNChvcmlnaW4sIDEuMCkpLnh5ejs=',
    'Ly8gcmF5IGJvdW5jZXMg',
    'Zm9yKCBpbnQgaT0wOyBpPFJBWV9CT1VOQ0VTOyBpKyspIHsg',
    'dmVjMyBpbnRlcnNlY3RlZFBvczs=',
    'aW50ZXJzZWN0ZWRQb3MgPSBpbnRlcnNlY3RTcGhlcmUob3JpZ2luICsgdmVjMyhlcHNpbG9uKSwgbmV3RGlyZWN0aW9uKTs=',
    'dmVjMyBkaXN0ID0gaW50ZXJzZWN0ZWRQb3MgLSBvcmlnaW47',
    'dmVjMyBkID0gbm9ybWFsaXplKGludGVyc2VjdGVkUG9zIC0gY2VudHJlT2Zmc2V0KTs=',
    'dmVjMyBtYXBwZWROb3JtYWwgPSB0ZXh0dXJlQ3ViZSggdEN1YmVNYXBOb3JtYWxzLCBkICkueHl6Ow==',
    'bWFwcGVkTm9ybWFsID0gMi4gKiBtYXBwZWROb3JtYWwgLSAxLjs=',
    'bWFwcGVkTm9ybWFsLnkgKz0gbm9ybWFsT2Zmc2V0Ow==',
    'bWFwcGVkTm9ybWFsID0gbm9ybWFsaXplKG1hcHBlZE5vcm1hbCk7',
    'ZGlzdCA9IChtb2RlbE1hdHJpeCAqIHZlYzQoZGlzdCwgMS4pKS54eXo7',
    'ZmxvYXQgciA9IHNxcnQoZG90KGRpc3QsIGRpc3QpKTs=',
    'YXR0ZW51YXRpb25GYWN0b3IgKj0gZXhwKC1yKkFic29yYnB0aW9uKTs=',
    'Ly8gcmVmcmFjdCB0aGUgcmF5IGF0IGZpcnN0IGludGVyc2VjdGlvbiA=',
    'dmVjMyBvbGRPcmlnaW4gPSBvcmlnaW47',
    'b3JpZ2luID0gaW50ZXJzZWN0ZWRQb3MgLSBub3JtYWxpemUoaW50ZXJzZWN0ZWRQb3MgLSBjZW50cmVPZmZzZXQpICogZGlzdGFuY2VPZmZzZXQ7',
    'dmVjMyBvbGREaXIgPSBuZXdEaXJlY3Rpb247',
    'bmV3RGlyZWN0aW9uID0gcmVmcmFjdChuZXdEaXJlY3Rpb24sIG1hcHBlZE5vcm1hbCwgbjIvbjEpOw==',
    'aWYoIGRvdChuZXdEaXJlY3Rpb24sIG5ld0RpcmVjdGlvbikgPT0gMC4wKSB7IC8vIFRvdGFsIEludGVybmFsIFJlZmxlY3Rpb24uIENvbnRpbnVlIGluc2lkZSB0aGUgZGlhbW9uZCA=',
    'bmV3RGlyZWN0aW9uID0gcmVmbGVjdChvbGREaXIsIG1hcHBlZE5vcm1hbCk7',
    'aWYoaSA9PSBSQVlfQk9VTkNFUy0xICkgLy9JZiB0aGUgcmF5IGdvdCB0cmFwcGVkIGV2ZW4gYWZ0ZXIgbWF4IGl0ZXJhdGlvbnMsIHNpbXBseSBzYW1wbGUgYWxvbmcgdGhlIG91dGdvaW5nIHJlZnJhY3Rpb24hIA==',
    'dmVjMyBicmRmUmVmbGVjdGVkID0gQlJERl9TcGVjdWxhcl9HR1hfRW52aXJvbm1lbnQoLW9sZERpciwgbWFwcGVkTm9ybWFsLCB2ZWMzKGYwKSwgMC4wKTs=',
    'dmVjMyBkMSA9IChtb2RlbE1hdHJpeCAqIHZlYzQob2xkRGlyLCAwLjApKS54eXo7',
    'b3V0Q29sb3IgKz0gU2FtcGxlU3BlY3VsYXJDb250cmlidXRpb24odmVjNCgxLjApLCBkMSApLnJnYiAqIGNvbG9yQ29ycmVjdGlvbiAqIGF0dGVudWF0aW9uRmFjdG9yICAqIGJvb3N0RmFjdG9ycyAqICh2ZWMzKDEuMCkgLSBicmRmUmVmbGVjdGVkKTs=',
    'Ly9vdXRDb2xvciA9IHZlYzMoMS4sMC4sMC4pOw==',
    'Ly9pZihkMS55ID4gMC45NSkgew==',
    'Ly9vdXRDb2xvciArPSBkMS55ICogdmVjMygxLiwwLiwwKSAqIGF0dGVudWF0aW9uRmFjdG9yICogKHZlYzMoMS4wKSAtIGJyZGZSZWZsZWN0ZWQpICogYm9vc3RGYWN0b3JzOw==',
    'Ly99',
    'fSBlbHNlIHsgLy8gQWRkIHRoZSBjb250cmlidXRpb24gZnJvbSBvdXRnb2luZyByYXksIGFuZCBjb250aW51ZSB0aGUgcmVmbGVjdGVkIHJheSBpbnNpZGUgdGhlIGRpYW1vbmQg',
    'dmVjMyBicmRmUmVmcmFjdGVkID0gQlJERl9TcGVjdWxhcl9HR1hfRW52aXJvbm1lbnQobmV3RGlyZWN0aW9uLCAtbWFwcGVkTm9ybWFsLCB2ZWMzKGYwKSwgMC4wKTs=',
    'Ly8gb3V0Z29pbmcocmVmcmFjdGVkKSByYXkncyBjb250cmlidXRpb24g',
    'dmVjMyBkMSA9IChtb2RlbE1hdHJpeCAqIHZlYzQobmV3RGlyZWN0aW9uLCAwLjApKS54eXo7',
    'dmVjMyBjb2xvckcgPSBTYW1wbGVTcGVjdWxhckNvbnRyaWJ1dGlvbih2ZWM0KDEuMCksIGQxICkucmdiICogKCB2ZWMzKDEuMCkgLSBicmRmUmVmcmFjdGVkKTs=',
    'dmVjMyBkaXIxID0gcmVmcmFjdChvbGREaXIsIG1hcHBlZE5vcm1hbCwgKG4yK3JJbmRleERlbHRhKS9uMSk7',
    'dmVjMyBkaXIyID0gcmVmcmFjdChvbGREaXIsIG1hcHBlZE5vcm1hbCwgKG4yLXJJbmRleERlbHRhKS9uMSk7',
    'dmVjMyBkMiA9IChtb2RlbE1hdHJpeCAqIHZlYzQoZGlyMSwgMC4wKSkueHl6Ow==',
    'dmVjMyBkMyA9IChtb2RlbE1hdHJpeCAqIHZlYzQoZGlyMiwgMC4wKSkueHl6Ow==',
    'dmVjMyBjb2xvclIgPSBTYW1wbGVTcGVjdWxhckNvbnRyaWJ1dGlvbih2ZWM0KDEuMCksIGQyICkucmdiICogKCB2ZWMzKDEuMCkgLSBicmRmUmVmcmFjdGVkKTs=',
    'dmVjMyBjb2xvckIgPSBTYW1wbGVTcGVjdWxhckNvbnRyaWJ1dGlvbih2ZWM0KDEuMCksIGQzICkucmdiICogKCB2ZWMzKDEuMCkgLSBicmRmUmVmcmFjdGVkKTs=',
    'b3V0Q29sb3IgKz0gdmVjMyhjb2xvclIuciwgY29sb3JHLmcsIGNvbG9yQi5iKSAqIGNvbG9yQ29ycmVjdGlvbiAqIGF0dGVudWF0aW9uRmFjdG9yICogYm9vc3RGYWN0b3JzOw==',
    'Ly9vdXRDb2xvciA9IG9sZERpcjs=',
    'Ly9uZXcgcmVmbGVjdGVkIHJheSBpbnNpZGUgdGhlIGRpYW1vbmQg',
    'dmVjMyBicmRmUmVmbGVjdGVkID0gQlJERl9TcGVjdWxhcl9HR1hfRW52aXJvbm1lbnQobmV3RGlyZWN0aW9uLCBtYXBwZWROb3JtYWwsIHZlYzMoZjApLCAwLjApOw==',
    'YXR0ZW51YXRpb25GYWN0b3IgKj0gYnJkZlJlZmxlY3RlZCAqIGJvb3N0RmFjdG9yczs=',
    'Y291bnQrKzs=',
    'aWYoZmFsc2Up',
    'b3V0Q29sb3IgPSBkZWJ1Z0JvdW5jZXMoY291bnQpOw==',
    'cmV0dXJuIG91dENvbG9yOw==',
    'dmVjMyBub3JtYWxpemVkTm9ybWFsID0gbm9ybWFsaXplKHdvcmxkTm9ybWFsKTs=',
    'dmVjMyB2aWV3VmVjdG9yID0gbm9ybWFsaXplKHZlY1BvcyAtIGNhbWVyYVBvc2l0aW9uKTs=',
    'dmVjMyBjb2xvciA9IHRyYWNlUmF5KHZlY1Bvcywgdmlld1ZlY3Rvciwgbm9ybWFsaXplZE5vcm1hbCk7',
    'Z2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvci5yZ2IsMS4pOw==',
    'I2luY2x1ZGUgPHRvbmVtYXBwaW5nX2ZyYWdtZW50Pg==',
    'Ly8jaW5jbHVkZSA8ZW5jb2RpbmdzX2ZyYWdtZW50Pg==',
    'Ly9nbF9GcmFnQ29sb3IgPSB0ZXh0dXJlQ3ViZSh0Q3ViZU1hcE5vcm1hbHMsIG5vcm1hbGl6ZShOb3JtYWwpKTs=',
    'U3BhcmtsZVNoYWRlcg==',
    'dmFyeWluZyB2ZWM0IHNwYXJrbGVQcm9qZWN0ZWRDZW50cmU7',
    'dW5pZm9ybSBtYXQ0IE1vZGVsVmlld01hdHJpeDs=',
    'dW5pZm9ybSBmbG9hdCBzY2FsZTs=',
    'dW5pZm9ybSBmbG9hdCByb3RhdGlvbjs=',
    'dm9pZCBtYWluKCkgeyA=',
    'dlV2ID0gdXY7IA==',
    'dmVjNCBmaW5hbFBvc2l0aW9uOw==',
    'dmVjMiBhbGlnbmVkUG9zaXRpb24gPSBwb3NpdGlvbi54eSAqIHNjYWxlOw==',
    'dmVjMiByb3RhdGVkUG9zaXRpb247',
    'cm90YXRlZFBvc2l0aW9uLnggPSBjb3MoIHJvdGF0aW9uICkgKiBhbGlnbmVkUG9zaXRpb24ueCAtIHNpbiggcm90YXRpb24gKSAqIGFsaWduZWRQb3NpdGlvbi55Ow==',
    'cm90YXRlZFBvc2l0aW9uLnkgPSBzaW4oIHJvdGF0aW9uICkgKiBhbGlnbmVkUG9zaXRpb24ueCArIGNvcyggcm90YXRpb24gKSAqIGFsaWduZWRQb3NpdGlvbi55Ow==',
    'ZmluYWxQb3NpdGlvbiA9IE1vZGVsVmlld01hdHJpeCAqIHZlYzQoIDAuMCwgMC4wLCAwLjAsIDEuMCApOw==',
    'ZmluYWxQb3NpdGlvbi54eSArPSByb3RhdGVkUG9zaXRpb247',
    'ZmluYWxQb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBmaW5hbFBvc2l0aW9uOw==',
    'c3BhcmtsZVByb2plY3RlZENlbnRyZSA9IHByb2plY3Rpb25NYXRyaXggKiBNb2RlbFZpZXdNYXRyaXggKiB2ZWM0KDAuMCwwLjAsMC4wLDEuMCApOw==',
    'Z2xfUG9zaXRpb24gPSBmaW5hbFBvc2l0aW9uOw==',
    'dW5pZm9ybSBzYW1wbGVyMkQgc3BhcmtsZVRleHR1cmU7',
    'dW5pZm9ybSBzYW1wbGVyMkQgc2NyZWVuVGV4dHVyZTs=',
    'dW5pZm9ybSBzYW1wbGVyMkQgbm9pc2VUZXh0dXJlOw==',
    'dW5pZm9ybSBmbG9hdCBpbnRlbnNpdHk7',
    'dmVjMyBDbG9zZXN0UHJpbWFyeUNvbG9yKHZlYzMgY29sb3IpIHs=',
    'dmVjMyBkaWZmQ29sb3IxID0gdmVjMygxLjAsMC4wLDAuMCkgLSBjb2xvcjs=',
    'dmVjMyBkaWZmQ29sb3IyID0gdmVjMygwLjAsMS4wLDAuMCkgLSBjb2xvcjs=',
    'dmVjMyBkaWZmQ29sb3IzID0gdmVjMygwLjAsMC4wLDEuMCkgLSBjb2xvcjs=',
    'Y29uc3QgZmxvYXQgbWFyZ2luID0gMC41OyA=',
    'aWYoZG90KGRpZmZDb2xvcjEsIGRpZmZDb2xvcjEpIDwgbWFyZ2luKQ==',
    'cmV0dXJuIHZlYzMoMS4wLCBtYXJnaW4sIG1hcmdpbik7IA==',
    'aWYoZG90KGRpZmZDb2xvcjIsIGRpZmZDb2xvcjIpIDwgbWFyZ2luKQ==',
    'cmV0dXJuIHZlYzMobWFyZ2luLCAxLjAsIG1hcmdpbik7',
    'aWYoZG90KGRpZmZDb2xvcjMsIGRpZmZDb2xvcjMpIDwgbWFyZ2luKQ==',
    'cmV0dXJuIHZlYzMobWFyZ2luLCBtYXJnaW4sIDEuMCk7',
    'dmVjMiB1diA9IChzcGFya2xlUHJvamVjdGVkQ2VudHJlLnh5L3NwYXJrbGVQcm9qZWN0ZWRDZW50cmUudyArIDEuMCkqMC41Ow==',
    'dmVjNCBzY3JlZW5Db2xvciA9IHRleHR1cmUyRCggc2NyZWVuVGV4dHVyZSwgdXYgKTs=',
    'Ly9zY3JlZW5Db2xvci5yZ2IgPSBDbG9zZXN0UHJpbWFyeUNvbG9yKHNjcmVlbkNvbG9yLnJnYik7',
    'ZmxvYXQgbm9pc2UgPSB0ZXh0dXJlMkQoIG5vaXNlVGV4dHVyZSwgdXYgKS5yOw==',
    'c2NyZWVuQ29sb3IueHl6ICo9IHNjcmVlbkNvbG9yLnh5ejs=',
    'Ly9mbG9hdCBsdW1pbmFuY2UgPSBkb3QodmVjMygwLjMsIDAuNTksIDAuMTEpLCBzY3JlZW5Db2xvci54eXopOw==',
    'Ly9sdW1pbmFuY2UgPSBsdW1pbmFuY2UgPiAwLjAgPyBsdW1pbmFuY2UgOiAwLjA7',
    'dmVjNCBzcHJpdGVDb2xvciA9IHZlYzQoMS4pICogdGV4dHVyZTJEKCBzcGFya2xlVGV4dHVyZSwgdlV2ICkuYSAqIHNjcmVlbkNvbG9yICogbm9pc2UgKiBpbnRlbnNpdHk7',
    'Z2xfRnJhZ0NvbG9yID0gc3ByaXRlQ29sb3I7',
    'TWF0cml4NA==',
    'aWRlbnRpdHk=',
    'U3BhcmtsZQ==',
    'bm9pc2VUZXh0dXJl',
    'UGxhbmVHZW9tZXRyeQ==',
    'ZGVwdGhUZXN0',
    'ZGVwdGhXcml0ZQ==',
    'dHJhbnNwYXJlbnQ=',
    'c2lkZQ==',
    'YmxlbmRpbmc=',
    'QWRkaXRpdmVCbGVuZGluZw==',
    'c3BhcmtsZVRleHR1cmU=',
    'TWVzaA==',
    'cG9zaXRpb25PZmZzZXQ=',
    'c2hhbGxvd0NvcHk=',
    'aW50ZW5zaXR5',
    'c2NyZWVuVGV4dHVyZQ==',
    'TW9kZWxWaWV3TWF0cml4',
    'c2V0SW50ZW5zaXR5',
    'c2V0Um90YXRpb25TcGVlZEZhY3Rvcg==',
    'c2V0UG9zaXRpb25PZmZzZXQ=',
    'dXBkYXRlTWF0cml4',
    'bW9kZWxWaWV3TWF0cml4',
    'bXVsdGlwbHlNYXRyaWNlcw==',
    'bWF0cml4V29ybGRJbnZlcnNl',
    'YXBwbHlNYXRyaXg0'
];
var _0xf81e = function (_0x1e6a45, _0x2c8087) {
    _0x1e6a45 = _0x1e6a45 - 0x0;
    var _0x314992 = _0x81ef[_0x1e6a45];
    if (_0xf81e['initialized'] === undefined) {
        (function () {
            var _0x222498;
            try {
                var _0x597583 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x222498 = _0x597583();
            } catch (_0x2da1f2) {
                _0x222498 = window;
            }
            var _0x3e0e3a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x222498['atob'] || (_0x222498['atob'] = function (_0x21391b) {
                var _0x200c78 = String(_0x21391b)['replace'](/=+$/, '');
                for (var _0x3262da = 0x0, _0x4f807d, _0x152595, _0x4d058e = 0x0, _0x22894d = ''; _0x152595 = _0x200c78['charAt'](_0x4d058e++); ~_0x152595 && (_0x4f807d = _0x3262da % 0x4 ? _0x4f807d * 0x40 + _0x152595 : _0x152595, _0x3262da++ % 0x4) ? _0x22894d += String['fromCharCode'](0xff & _0x4f807d >> (-0x2 * _0x3262da & 0x6)) : 0x0) {
                    _0x152595 = _0x3e0e3a['indexOf'](_0x152595);
                }
                return _0x22894d;
            });
        }());
        _0xf81e['base64DecodeUnicode'] = function (_0x5ddc66) {
            var _0x1a5c88 = atob(_0x5ddc66);
            var _0x1a9e2d = [];
            for (var _0x445189 = 0x0, _0x318811 = _0x1a5c88['length']; _0x445189 < _0x318811; _0x445189++) {
                _0x1a9e2d += '%' + ('00' + _0x1a5c88['charCodeAt'](_0x445189)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x1a9e2d);
        };
        _0xf81e['data'] = {};
        _0xf81e['initialized'] = !![];
    }
    var _0x2df1a3 = _0xf81e['data'][_0x1e6a45];
    if (_0x2df1a3 === undefined) {
        _0x314992 = _0xf81e['base64DecodeUnicode'](_0x314992);
        _0xf81e['data'][_0x1e6a45] = _0x314992;
    } else {
        _0x314992 = _0x2df1a3;
    }
    return _0x314992;
};
var _createClass = function () {
    function _0x2ac465(_0x3971e5, _0x5b86da) {
        for (var _0x5f59c6 = 0x0; _0x5f59c6 < _0x5b86da[_0xf81e('0x0')]; _0x5f59c6++) {
            var _0x4c03f1 = _0x5b86da[_0x5f59c6];
            _0x4c03f1[_0xf81e('0x1')] = _0x4c03f1[_0xf81e('0x1')] || ![];
            _0x4c03f1[_0xf81e('0x2')] = !![];
            if (_0xf81e('0x3') in _0x4c03f1)
                _0x4c03f1[_0xf81e('0x4')] = !![];
            Object[_0xf81e('0x5')](_0x3971e5, _0x4c03f1[_0xf81e('0x6')], _0x4c03f1);
        }
    }
    return function (_0x1c592f, _0xf9b5ed, _0x2c7059) {
        if (_0xf9b5ed)
            _0x2ac465(_0x1c592f[_0xf81e('0x7')], _0xf9b5ed);
        if (_0x2c7059)
            _0x2ac465(_0x1c592f, _0x2c7059);
        return _0x1c592f;
    };
}();
function _classCallCheck(_0xbe8b9c, _0x2b5351) {
    if (!(_0xbe8b9c instanceof _0x2b5351)) {
        throw new TypeError(_0xf81e('0x8'));
    }
}
ELJEWEL[_0xf81e('0x9')] = function () {
    function _0x561bd2(_0x517d0b, _0x425c05) {
        _classCallCheck(this, _0x561bd2);
        var _0x563a06 = new THREE[(_0xf81e('0xa'))]();
        _0x563a06[_0xf81e('0xb')] = function (_0x111d72, _0x4415bf, _0x4d66fb) {
            console[_0xf81e('0xc')](_0x111d72, _0x4415bf, _0x4d66fb);
        };
        this[_0xf81e('0xd')] = _0x517d0b;
        this[_0xf81e('0xe')] = _0x425c05;
        this[_0xf81e('0xf')] = new THREE[(_0xf81e('0x10'))](_0x563a06);
        this[_0xf81e('0x11')] = [];
        this[_0xf81e('0x12')] = [];
    }
    _createClass(_0x561bd2, [
        {
            'key': _0xf81e('0x13'),
            'value': function setDRACOLoader(_0x34df2b) {
                this[_0xf81e('0xf')][_0xf81e('0x13')](_0x34df2b);
            }
        },
        {
            'key': _0xf81e('0x14'),
            'value': function load(_0x302855, _0x40ca34, _0x179d25) {
                this[_0xf81e('0x15')] = _0x40ca34;
                this[_0xf81e('0xf')][_0xf81e('0x14')](_0x302855, this[_0xf81e('0x16')][_0xf81e('0x17')](this), function (_0x3a1703) {
                    if (_0x179d25) {
                        _0x179d25(_0x3a1703[_0xf81e('0x18')] / _0x3a1703[_0xf81e('0x19')] * 0x64);
                    }
                });
            }
        },
        {
            'key': _0xf81e('0x16'),
            'value': function process(_0x53d420) {
                this[_0xf81e('0x1a')] = _0x53d420;
                this[_0xf81e('0x1b')]();
                this[_0xf81e('0x1c')]();
            }
        },
        {
            'key': _0xf81e('0x1b'),
            'value': function findDiamondPrototypes() {
                var _0x111fcd = this;
                this[_0xf81e('0x1a')][_0xf81e('0x1d')][_0xf81e('0x1e')](function (_0x336ab6) {
                    if (_0x336ab6[_0xf81e('0x1f')] && (_0x336ab6[_0xf81e('0x20')][_0xf81e('0x21')]()[_0xf81e('0x22')](_0xf81e('0x23')) > -0x1 || _0x336ab6[_0xf81e('0x20')][_0xf81e('0x21')]()[_0xf81e('0x22')](_0xf81e('0x24')) > -0x1)) {
                        var _0x5248a8 = _0x336ab6[_0xf81e('0x20')][_0xf81e('0x25')](0x0, 0x8);
                        if (!_0x111fcd[_0xf81e('0x11')][_0x5248a8]) {
                            _0x111fcd[_0xf81e('0x11')][_0x5248a8] = _0x336ab6;
                        }
                    }
                });
            }
        },
        {
            'key': _0xf81e('0x1c'),
            'value': function buildDiamondScene() {
                for (var _0x373bc4 in this[_0xf81e('0x11')]) {
                    var _0x5d914f = this[_0xf81e('0x11')][_0x373bc4];
                    var _0x5cc235 = new ELJEWEL[(_0xf81e('0x26'))](_0x5d914f, this[_0xf81e('0xd')], this[_0xf81e('0xe')]);
                    this[_0xf81e('0x11')][_0x373bc4] = _0x5cc235;
                }
                var _0x2b9fb5 = this;
                this[_0xf81e('0x1a')][_0xf81e('0x1d')][_0xf81e('0x27')]();
                this[_0xf81e('0x1a')][_0xf81e('0x1d')][_0xf81e('0x1e')](function (_0x46eb6a) {
                    if (_0x46eb6a[_0xf81e('0x1f')] && _0x46eb6a[_0xf81e('0x28')] && _0x2b9fb5[_0xf81e('0xd')]) {
                        _0x46eb6a[_0xf81e('0x28')][_0xf81e('0x29')] = _0x2b9fb5[_0xf81e('0xd')];
                    }
                    if (_0x46eb6a[_0xf81e('0x1f')] && (_0x46eb6a[_0xf81e('0x20')][_0xf81e('0x21')]()[_0xf81e('0x22')](_0xf81e('0x23')) > -0x1 || _0x46eb6a[_0xf81e('0x20')][_0xf81e('0x21')]()[_0xf81e('0x22')](_0xf81e('0x24')) > -0x1)) {
                        var _0x1dfba4 = _0x46eb6a[_0xf81e('0x20')][_0xf81e('0x25')](0x0, 0x8);
                        if (_0x2b9fb5[_0xf81e('0x11')][_0x1dfba4]) {
                            var _0xa3cc32 = _0x2b9fb5[_0xf81e('0x11')][_0x1dfba4];
                            var _0x39b371 = new ELJEWEL[(_0xf81e('0x2a'))](_0x46eb6a, _0xa3cc32);
                            _0x2b9fb5[_0xf81e('0x12')][_0xf81e('0x2b')](_0x39b371);
                        }
                    }
                });
                if (this[_0xf81e('0x15')]) {
                    this[_0xf81e('0x15')](this, this[_0xf81e('0x1a')][_0xf81e('0x1d')]);
                }
            }
        }
    ]);
    return _0x561bd2;
}();
ELJEWEL[_0xf81e('0x2a')] = function () {
    var _0x244b6c = function () {
        var _0x5cb189 = !![];
        return function (_0x10e649, _0x1988b7) {
            var _0x2727e7 = _0x5cb189 ? function () {
                if (_0x1988b7) {
                    var _0x151812 = _0x1988b7[_0xf81e('0x2c')](_0x10e649, arguments);
                    _0x1988b7 = null;
                    return _0x151812;
                }
            } : function () {
            };
            _0x5cb189 = ![];
            return _0x2727e7;
        };
    }();
    var _0x415c71 = _0x244b6c(this, function () {
        var _0x270923 = function () {
        };
        var _0x16dd92;
        try {
            var _0x23ae27 = Function(_0xf81e('0x2d') + _0xf81e('0x2e') + ');');
            _0x16dd92 = _0x23ae27();
        } catch (_0x2fc3ec) {
            _0x16dd92 = window;
        }
        if (!_0x16dd92[_0xf81e('0x2f')]) {
            _0x16dd92[_0xf81e('0x2f')] = function (_0x2e9531) {
                var _0x18bd8f = {};
                _0x18bd8f[_0xf81e('0xc')] = _0x2e9531;
                _0x18bd8f[_0xf81e('0x30')] = _0x2e9531;
                _0x18bd8f[_0xf81e('0x31')] = _0x2e9531;
                _0x18bd8f[_0xf81e('0x32')] = _0x2e9531;
                _0x18bd8f[_0xf81e('0x33')] = _0x2e9531;
                _0x18bd8f[_0xf81e('0x34')] = _0x2e9531;
                _0x18bd8f[_0xf81e('0x35')] = _0x2e9531;
                return _0x18bd8f;
            }(_0x270923);
        } else {
            _0x16dd92[_0xf81e('0x2f')][_0xf81e('0xc')] = _0x270923;
            _0x16dd92[_0xf81e('0x2f')][_0xf81e('0x30')] = _0x270923;
            _0x16dd92[_0xf81e('0x2f')][_0xf81e('0x31')] = _0x270923;
            _0x16dd92[_0xf81e('0x2f')][_0xf81e('0x32')] = _0x270923;
            _0x16dd92[_0xf81e('0x2f')][_0xf81e('0x33')] = _0x270923;
            _0x16dd92[_0xf81e('0x2f')][_0xf81e('0x34')] = _0x270923;
            _0x16dd92[_0xf81e('0x2f')][_0xf81e('0x35')] = _0x270923;
        }
    });
    _0x415c71();
    function _0x12b7e8(_0x43e764, _0x323231) {
        _classCallCheck(this, _0x12b7e8);
        this[_0xf81e('0x36')] = _0x43e764;
        this[_0xf81e('0x36')][_0xf81e('0x28')] = _0x323231[_0xf81e('0x37')]();
        this[_0xf81e('0x38')] = [];
        this[_0xf81e('0x36')][_0xf81e('0x39')][_0xf81e('0x3a')]();
        this[_0xf81e('0x3b')] = new THREE[(_0xf81e('0x3c'))]();
        this[_0xf81e('0x36')][_0xf81e('0x39')][_0xf81e('0x3d')][_0xf81e('0x3e')](this[_0xf81e('0x3b')]);
        this[_0xf81e('0x36')][_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x40')][_0xf81e('0x3')][_0xf81e('0x41')](this[_0xf81e('0x3b')]);
        this[_0xf81e('0x36')][_0xf81e('0x39')][_0xf81e('0x42')]();
        this[_0xf81e('0x43')] = this[_0xf81e('0x36')][_0xf81e('0x39')][_0xf81e('0x44')][_0xf81e('0x45')];
        this[_0xf81e('0x36')][_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x45')][_0xf81e('0x3')] = this[_0xf81e('0x43')];
    }
    _createClass(_0x12b7e8, [
        {
            'key': _0xf81e('0x46'),
            'value': function setPosition(_0x2e573c, _0x2b4256, _0x3f3c4a) {
                this[_0xf81e('0x36')][_0xf81e('0x47')][_0xf81e('0x48')](_0x2e573c, _0x2b4256, _0x3f3c4a);
            }
        },
        {
            'key': _0xf81e('0x49'),
            'value': function setRotation(_0x246879, _0x646e62, _0x511eb0) {
                this[_0xf81e('0x36')][_0xf81e('0x4a')][_0xf81e('0x48')](_0x246879, _0x646e62, _0x511eb0);
            }
        },
        {
            'key': _0xf81e('0x4b'),
            'value': function setQuaternion(_0x1f549b, _0x49b73e, _0x4d609e, _0x2f1094) {
                this[_0xf81e('0x36')][_0xf81e('0x4c')][_0xf81e('0x48')](_0x1f549b, _0x49b73e, _0x4d609e, _0x2f1094);
            }
        },
        {
            'key': _0xf81e('0x4d'),
            'value': function setScale(_0x4bc2f8, _0x4970ba, _0x447645) {
                this[_0xf81e('0x36')][_0xf81e('0x4e')][_0xf81e('0x48')](_0x4bc2f8, _0x4970ba, _0x447645);
                for (var _0x497acc = 0x0; _0x497acc < this[_0xf81e('0x38')][_0xf81e('0x0')]; _0x497acc++) {
                    this[_0xf81e('0x38')][_0x497acc][_0xf81e('0x4d')](_0x4bc2f8);
                }
            }
        },
        {
            'key': _0xf81e('0x4f'),
            'value': function setTransform(_0x2db56b) {
                this[_0xf81e('0x36')][_0xf81e('0x50')][_0xf81e('0x41')](_0x2db56b);
            }
        },
        {
            'key': _0xf81e('0x51'),
            'value': function update(_0x54d5d4) {
                var _0x42a4d9 = new THREE[(_0xf81e('0x3c'))]();
                for (var _0xe6e6ad = 0x0; _0xe6e6ad < this[_0xf81e('0x38')][_0xf81e('0x0')]; _0xe6e6ad++) {
                    this[_0xf81e('0x38')][_0xe6e6ad][_0xf81e('0x52')](this[_0xf81e('0x36')][_0xf81e('0x53')]);
                    _0x42a4d9[_0xf81e('0x41')](_0x54d5d4[_0xf81e('0x47')]);
                    _0x42a4d9[_0xf81e('0x54')](this[_0xf81e('0x38')][_0xe6e6ad][_0xf81e('0x36')][_0xf81e('0x47')]);
                    _0x42a4d9[_0xf81e('0x55')]();
                    var _0x207d64 = _0x42a4d9['x'] + _0x42a4d9['y'] + _0x42a4d9['z'];
                    this[_0xf81e('0x38')][_0xe6e6ad][_0xf81e('0x49')](_0x207d64 * this[_0xf81e('0x38')][_0xe6e6ad][_0xf81e('0x56')]);
                    this[_0xf81e('0x38')][_0xe6e6ad][_0xf81e('0x57')](_0x54d5d4);
                }
            }
        },
        {
            'key': _0xf81e('0x58'),
            'value': function addSparkle(_0x3295bd) {
                this[_0xf81e('0x38')][_0xf81e('0x2b')](_0x3295bd);
            }
        }
    ]);
    return _0x12b7e8;
}();
ELJEWEL[_0xf81e('0x26')] = function () {
    function _0x3cca51(_0x57d070, _0x2c4f00, _0x7d772) {
        _classCallCheck(this, _0x3cca51);
        this[_0xf81e('0xe')] = _0x7d772;
        this[_0xf81e('0x39')] = null;
        this[_0xf81e('0x36')] = null;
        this[_0xf81e('0x59')] = null;
        this[_0xf81e('0x29')] = _0x2c4f00 || _0x57d070[_0xf81e('0x28')][_0xf81e('0x29')];
        this[_0xf81e('0x5a')] = new THREE[(_0xf81e('0x5b'))](0.01, 0x64, 0x400);
        this[_0xf81e('0x5c')] = new THREE[(_0xf81e('0x5d'))]();
        this[_0xf81e('0x5c')][_0xf81e('0x5e')](this[_0xf81e('0x5a')]);
        this[_0xf81e('0x28')] = new THREE[(_0xf81e('0x5f'))]();
        this[_0xf81e('0x28')][_0xf81e('0x60')] = ELJEWEL[_0xf81e('0x61')][_0xf81e('0x60')];
        this[_0xf81e('0x28')][_0xf81e('0x62')] = ELJEWEL[_0xf81e('0x61')][_0xf81e('0x62')];
        this[_0xf81e('0x28')][_0xf81e('0x3f')] = THREE[_0xf81e('0x63')][_0xf81e('0x37')](ELJEWEL[_0xf81e('0x61')][_0xf81e('0x3f')]);
        this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x29')][_0xf81e('0x3')] = this[_0xf81e('0x29')];
        this[_0xf81e('0x28')][_0xf81e('0x64')] = ELJEWEL[_0xf81e('0x61')][_0xf81e('0x64')];
        this[_0xf81e('0x28')][_0xf81e('0x65')] = ELJEWEL[_0xf81e('0x61')][_0xf81e('0x65')];
        this[_0xf81e('0x5a')][_0xf81e('0x66')][_0xf81e('0x67')][_0xf81e('0x68')] = ![];
        this[_0xf81e('0x5a')][_0xf81e('0x66')][_0xf81e('0x67')][_0xf81e('0x69')] = THREE[_0xf81e('0x6a')];
        this[_0xf81e('0x5a')][_0xf81e('0x66')][_0xf81e('0x67')][_0xf81e('0x6b')] = THREE[_0xf81e('0x6a')];
        this[_0xf81e('0x5a')][_0xf81e('0x66')][_0xf81e('0x67')][_0xf81e('0x6c')] = THREE[_0xf81e('0x6d')];
        this[_0xf81e('0x6e')] = !![];
        this[_0xf81e('0x36')] = _0x57d070;
        this[_0xf81e('0x59')] = this[_0xf81e('0x36')][_0xf81e('0x37')]();
        this[_0xf81e('0x59')][_0xf81e('0x28')] = ELJEWEL[_0xf81e('0x6f')];
        this[_0xf81e('0x59')][_0xf81e('0x39')] = _0x57d070[_0xf81e('0x39')][_0xf81e('0x37')]();
        this[_0xf81e('0x59')][_0xf81e('0x39')][_0xf81e('0x70')]();
        this[_0xf81e('0x39')] = _0x57d070[_0xf81e('0x39')];
        this[_0xf81e('0x39')][_0xf81e('0x3a')]();
        this[_0xf81e('0x3b')] = new THREE[(_0xf81e('0x3c'))]();
        this[_0xf81e('0x39')][_0xf81e('0x3d')][_0xf81e('0x3e')](this[_0xf81e('0x3b')]);
        this[_0xf81e('0x39')][_0xf81e('0x42')]();
        this[_0xf81e('0x59')][_0xf81e('0x47')][_0xf81e('0x48')](0x0, 0x0, 0x0);
        this[_0xf81e('0x59')][_0xf81e('0x4a')][_0xf81e('0x48')](0x0, 0x0, 0x0);
        this[_0xf81e('0x59')][_0xf81e('0x4c')][_0xf81e('0x48')](0x0, 0x0, 0x0, 0x1);
        this[_0xf81e('0x59')][_0xf81e('0x4e')][_0xf81e('0x48')](0x1, 0x1, 0x1);
        this[_0xf81e('0x5c')][_0xf81e('0x5e')](this[_0xf81e('0x59')]);
        this[_0xf81e('0x71')](_0x7d772);
        this[_0xf81e('0x38')] = [];
        this[_0xf81e('0x72')] = !![];
    }
    _createClass(_0x3cca51, [
        {
            'key': _0xf81e('0x37'),
            'value': function clone() {
                var _0x1f8b2c = new THREE[(_0xf81e('0x5f'))]();
                _0x1f8b2c[_0xf81e('0x3f')] = THREE[_0xf81e('0x63')][_0xf81e('0x37')](this[_0xf81e('0x28')][_0xf81e('0x3f')]);
                _0x1f8b2c[_0xf81e('0x60')] = this[_0xf81e('0x28')][_0xf81e('0x60')];
                _0x1f8b2c[_0xf81e('0x62')] = this[_0xf81e('0x28')][_0xf81e('0x62')];
                _0x1f8b2c[_0xf81e('0x3f')][_0xf81e('0x73')][_0xf81e('0x3')] = this[_0xf81e('0x5a')][_0xf81e('0x66')];
                _0x1f8b2c[_0xf81e('0x3f')][_0xf81e('0x29')][_0xf81e('0x3')] = this[_0xf81e('0x29')];
                _0x1f8b2c[_0xf81e('0x29')] = this[_0xf81e('0x29')];
                _0x1f8b2c[_0xf81e('0x64')] = this[_0xf81e('0x28')][_0xf81e('0x64')];
                _0x1f8b2c[_0xf81e('0x65')] = this[_0xf81e('0x28')][_0xf81e('0x65')];
                _0x1f8b2c[_0xf81e('0x72')] = !![];
                return _0x1f8b2c;
            }
        },
        {
            'key': _0xf81e('0x71'),
            'value': function prepareNormalsCubeMap(_0x20d408) {
                if (!this[_0xf81e('0x6e')]) {
                    return;
                }
                this[_0xf81e('0x5a')][_0xf81e('0x74')](_0x20d408, this[_0xf81e('0x5c')]);
                this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x73')][_0xf81e('0x3')] = this[_0xf81e('0x5a')][_0xf81e('0x66')];
                this[_0xf81e('0x6e')] = ![];
            }
        }
    ]);
    return _0x3cca51;
}();
ELJEWEL[_0xf81e('0x75')] = {
    'vertexShader': [
        _0xf81e('0x76'),
        _0xf81e('0x77'),
        _0xf81e('0x78'),
        _0xf81e('0x79'),
        '}'
    ][_0xf81e('0x7a')]('\x0a'),
    'fragmentShader': [
        _0xf81e('0x76'),
        _0xf81e('0x77'),
        _0xf81e('0x7b'),
        _0xf81e('0x7c'),
        _0xf81e('0x7d'),
        '}'
    ][_0xf81e('0x7a')]('\x0a'),
    'side': THREE[_0xf81e('0x7e')]
};
ELJEWEL[_0xf81e('0x7f')] = {
    'defines': { 'RAY_BOUNCES': 0x5 },
    'vertexShader': [
        _0xf81e('0x80'),
        _0xf81e('0x81'),
        _0xf81e('0x82'),
        _0xf81e('0x83'),
        _0xf81e('0x84'),
        _0xf81e('0x77'),
        _0xf81e('0x85'),
        _0xf81e('0x86'),
        _0xf81e('0x87'),
        _0xf81e('0x88'),
        _0xf81e('0x89'),
        _0xf81e('0x79'),
        '}'
    ][_0xf81e('0x7a')]('\x0a'),
    'fragmentShader': [
        _0xf81e('0x80'),
        _0xf81e('0x81'),
        _0xf81e('0x82'),
        _0xf81e('0x83'),
        _0xf81e('0x84'),
        _0xf81e('0x8a'),
        _0xf81e('0x8b'),
        _0xf81e('0x8c'),
        _0xf81e('0x8d'),
        _0xf81e('0x8e'),
        _0xf81e('0x8f'),
        _0xf81e('0x90'),
        _0xf81e('0x91'),
        _0xf81e('0x92'),
        _0xf81e('0x93'),
        _0xf81e('0x94'),
        _0xf81e('0x95'),
        _0xf81e('0x96'),
        _0xf81e('0x97'),
        _0xf81e('0x98'),
        _0xf81e('0x99'),
        _0xf81e('0x9a'),
        _0xf81e('0x9b'),
        _0xf81e('0x9c'),
        _0xf81e('0x9d'),
        _0xf81e('0x9e'),
        _0xf81e('0x9f'),
        _0xf81e('0xa0'),
        _0xf81e('0xa1'),
        _0xf81e('0xa2'),
        _0xf81e('0xa3'),
        _0xf81e('0xa4'),
        _0xf81e('0xa5'),
        _0xf81e('0xa6'),
        _0xf81e('0xa7'),
        '}',
        _0xf81e('0xa8'),
        _0xf81e('0xa9'),
        _0xf81e('0xaa'),
        _0xf81e('0xab'),
        _0xf81e('0xac'),
        _0xf81e('0xad'),
        _0xf81e('0xae'),
        _0xf81e('0xaf'),
        '}',
        _0xf81e('0xb0'),
        _0xf81e('0xb1'),
        _0xf81e('0xa9'),
        _0xf81e('0xaa'),
        _0xf81e('0xac'),
        _0xf81e('0xab'),
        _0xf81e('0xb2'),
        _0xf81e('0xb3'),
        _0xf81e('0xb4'),
        _0xf81e('0xaf'),
        '}',
        _0xf81e('0xb5'),
        _0xf81e('0xb6'),
        _0xf81e('0xb7'),
        _0xf81e('0xb8'),
        _0xf81e('0xb9'),
        _0xf81e('0xba'),
        _0xf81e('0xbb'),
        _0xf81e('0xbc'),
        '{',
        _0xf81e('0xbd'),
        _0xf81e('0xbe'),
        _0xf81e('0xbf'),
        _0xf81e('0xc0'),
        _0xf81e('0xc1'),
        _0xf81e('0xc2'),
        '}',
        _0xf81e('0xc3'),
        '}',
        _0xf81e('0xc4'),
        _0xf81e('0xc5'),
        _0xf81e('0xc6'),
        _0xf81e('0xc7'),
        _0xf81e('0xc8'),
        _0xf81e('0xc9'),
        _0xf81e('0xca'),
        _0xf81e('0xcb'),
        _0xf81e('0xcc'),
        _0xf81e('0xcd'),
        _0xf81e('0xce'),
        _0xf81e('0xc7'),
        _0xf81e('0xcf'),
        _0xf81e('0xd0'),
        _0xf81e('0xd1'),
        '}',
        _0xf81e('0xd2'),
        _0xf81e('0xd3'),
        _0xf81e('0xd4'),
        _0xf81e('0xd5'),
        _0xf81e('0xd6'),
        _0xf81e('0xd7'),
        _0xf81e('0xd8'),
        _0xf81e('0xd9'),
        _0xf81e('0xda'),
        _0xf81e('0xdb'),
        _0xf81e('0xdc'),
        _0xf81e('0xdd'),
        _0xf81e('0xde'),
        _0xf81e('0xdf'),
        _0xf81e('0xe0'),
        _0xf81e('0xe1'),
        _0xf81e('0xe2'),
        _0xf81e('0xe3'),
        _0xf81e('0xe4'),
        _0xf81e('0xe5'),
        _0xf81e('0xe6'),
        _0xf81e('0xe7'),
        _0xf81e('0xe8'),
        _0xf81e('0xe9'),
        _0xf81e('0xea'),
        _0xf81e('0xeb'),
        _0xf81e('0xec'),
        _0xf81e('0xed'),
        _0xf81e('0xee'),
        _0xf81e('0xef'),
        _0xf81e('0xf0'),
        _0xf81e('0xf1'),
        _0xf81e('0xf2'),
        _0xf81e('0xf3'),
        _0xf81e('0xf4'),
        _0xf81e('0xf5'),
        _0xf81e('0xf6'),
        _0xf81e('0xf7'),
        _0xf81e('0xf8'),
        '{',
        _0xf81e('0xf9'),
        _0xf81e('0xfa'),
        _0xf81e('0xfb'),
        _0xf81e('0xfc'),
        _0xf81e('0xfd'),
        _0xf81e('0xfe'),
        _0xf81e('0xff'),
        '}',
        _0xf81e('0x100'),
        _0xf81e('0x101'),
        _0xf81e('0x102'),
        _0xf81e('0x103'),
        _0xf81e('0x104'),
        _0xf81e('0x105'),
        _0xf81e('0x106'),
        _0xf81e('0x107'),
        _0xf81e('0x108'),
        _0xf81e('0x109'),
        _0xf81e('0x10a'),
        _0xf81e('0x10b'),
        _0xf81e('0x10c'),
        _0xf81e('0x10d'),
        _0xf81e('0xf7'),
        _0xf81e('0x10e'),
        _0xf81e('0x10f'),
        _0xf81e('0x110'),
        '}',
        '}',
        _0xf81e('0x111'),
        _0xf81e('0x112'),
        _0xf81e('0x113'),
        '}',
        _0xf81e('0x77'),
        _0xf81e('0x114'),
        _0xf81e('0x115'),
        _0xf81e('0x116'),
        _0xf81e('0x117'),
        _0xf81e('0x118'),
        _0xf81e('0x119'),
        _0xf81e('0x11a'),
        '}'
    ][_0xf81e('0x7a')]('\x0a'),
    'uniforms': {
        'tCubeMapNormals': {
            'type': 't',
            'value': null
        },
        'envMap': {
            'type': 't',
            'value': null
        },
        'envRefractionMap': {
            'type': 't',
            'value': null
        },
        'sphereMap': {
            'type': 't',
            'value': null
        },
        'envMapIntensity': {
            'type': 'f',
            'value': 0x1
        },
        'maxBounces': {
            'type': 'i',
            'value': 0x1
        },
        'tanAngleSqCone': {
            'type': 'f',
            'value': 0x0
        },
        'coneHeight': {
            'type': 'f',
            'value': 0x0
        },
        'bDebugBounces': {
            'type': 'i',
            'value': 0x0
        },
        'rIndexDelta': {
            'type': 'f',
            'value': 0.012
        },
        'n2': {
            'type': 'f',
            'value': 2.4
        },
        'radius': {
            'type': 'f',
            'value': 0x1
        },
        'normalOffset': {
            'type': 'f',
            'value': 0x0
        },
        'squashFactor': {
            'type': 'f',
            'value': 0.98
        },
        'distanceOffset': {
            'type': 'f',
            'value': 0x0
        },
        'geometryFactor': {
            'type': 'f',
            'value': 0.28
        },
        'Absorbption': {
            'type': 'v3',
            'value': new THREE[(_0xf81e('0x3c'))](0x0, 0x0, 0x0)
        },
        'colorCorrection': {
            'type': 'v3',
            'value': new THREE[(_0xf81e('0x3c'))](0x1, 0x1, 0x1)
        },
        'boostFactors': {
            'type': 'v3',
            'value': new THREE[(_0xf81e('0x3c'))](0.892, 0.892, 0.98595025)
        },
        'centreOffset': {
            'type': 'v3',
            'value': new THREE[(_0xf81e('0x3c'))](0x0, 0x0, 0x0)
        }
    },
    'side': THREE[_0xf81e('0x7e')]
};
ELJEWEL[_0xf81e('0x11b')] = {
    'vertexShader': [
        _0xf81e('0x80'),
        _0xf81e('0x11c'),
        _0xf81e('0x11d'),
        _0xf81e('0x11e'),
        _0xf81e('0x11f'),
        _0xf81e('0x120'),
        _0xf81e('0x121'),
        _0xf81e('0x122'),
        _0xf81e('0x123'),
        _0xf81e('0x124'),
        _0xf81e('0x125'),
        _0xf81e('0x126'),
        _0xf81e('0x127'),
        _0xf81e('0x128'),
        _0xf81e('0x129'),
        _0xf81e('0x12a'),
        _0xf81e('0x12b'),
        '}'
    ][_0xf81e('0x7a')]('\x0a'),
    'fragmentShader': [
        _0xf81e('0x80'),
        _0xf81e('0x11c'),
        _0xf81e('0x12c'),
        _0xf81e('0x12d'),
        _0xf81e('0x12e'),
        _0xf81e('0x12f'),
        _0xf81e('0x130'),
        _0xf81e('0x131'),
        _0xf81e('0x132'),
        _0xf81e('0x133'),
        _0xf81e('0x134'),
        _0xf81e('0x135'),
        _0xf81e('0x136'),
        _0xf81e('0x137'),
        _0xf81e('0x138'),
        _0xf81e('0x139'),
        _0xf81e('0x13a'),
        _0xf81e('0xd1'),
        '}',
        _0xf81e('0x77'),
        _0xf81e('0x13b'),
        _0xf81e('0x13c'),
        _0xf81e('0x13d'),
        _0xf81e('0x13e'),
        _0xf81e('0x13f'),
        _0xf81e('0x13f'),
        _0xf81e('0x13f'),
        _0xf81e('0x140'),
        _0xf81e('0x141'),
        _0xf81e('0x142'),
        _0xf81e('0x143'),
        '}'
    ][_0xf81e('0x7a')]('\x0a'),
    'uniforms': {
        'ModelViewMatrix': {
            'type': 'm4',
            'value': new THREE[(_0xf81e('0x144'))]()[_0xf81e('0x145')]()
        },
        'sparkleTexture': {
            'type': 't',
            'value': null
        },
        'screenTexture': {
            'type': 't',
            'value': null
        },
        'noiseTexture': {
            'type': 't',
            'value': null
        },
        'scale': {
            'type': 'f',
            'value': 0x1
        },
        'rotation': {
            'type': 'f',
            'value': 0x0
        },
        'intensity': {
            'type': 'f',
            'value': 0x1
        }
    },
    'side': THREE[_0xf81e('0x7e')]
};
ELJEWEL[_0xf81e('0x6f')] = new THREE[(_0xf81e('0x5f'))](ELJEWEL[_0xf81e('0x75')]);
ELJEWEL[_0xf81e('0x61')] = new THREE[(_0xf81e('0x5f'))](ELJEWEL[_0xf81e('0x7f')]);
ELJEWEL[_0xf81e('0x146')] = function () {
    function _0x63c023(_0x25ce5b, _0x385684) {
        _classCallCheck(this, _0x63c023);
        this[_0xf81e('0x67')] = _0x25ce5b;
        this[_0xf81e('0x147')] = _0x385684;
        this[_0xf81e('0x39')] = new THREE[(_0xf81e('0x148'))](0x1, 0x1, 0x0);
        this[_0xf81e('0x28')] = new THREE[(_0xf81e('0x5f'))]();
        this[_0xf81e('0x28')][_0xf81e('0x149')] = ![];
        this[_0xf81e('0x28')][_0xf81e('0x14a')] = ![];
        this[_0xf81e('0x28')][_0xf81e('0x14b')] = !![];
        this[_0xf81e('0x28')][_0xf81e('0x14c')] = THREE[_0xf81e('0x7e')];
        this[_0xf81e('0x28')][_0xf81e('0x14d')] = THREE[_0xf81e('0x14e')];
        this[_0xf81e('0x28')][_0xf81e('0x64')] = ELJEWEL[_0xf81e('0x11b')][_0xf81e('0x64')];
        this[_0xf81e('0x28')][_0xf81e('0x65')] = ELJEWEL[_0xf81e('0x11b')][_0xf81e('0x65')];
        this[_0xf81e('0x28')][_0xf81e('0x3f')] = THREE[_0xf81e('0x63')][_0xf81e('0x37')](ELJEWEL[_0xf81e('0x11b')][_0xf81e('0x3f')]);
        if (this[_0xf81e('0x67')]) {
            this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x14f')][_0xf81e('0x3')] = _0x25ce5b;
        }
        if (this[_0xf81e('0x147')]) {
            this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x147')][_0xf81e('0x3')] = _0x385684;
        }
        if (this[_0xf81e('0x67')] && this[_0xf81e('0x147')]) {
            this[_0xf81e('0x36')] = new THREE[(_0xf81e('0x150'))](this[_0xf81e('0x39')], this[_0xf81e('0x28')]);
            this[_0xf81e('0x36')][_0xf81e('0x151')] = new THREE[(_0xf81e('0x3c'))]();
            this[_0xf81e('0x56')] = 0x5;
        }
    }
    _createClass(_0x63c023, [
        {
            'key': _0xf81e('0x152'),
            'value': function shallowCopy() {
                var _0x1bb44a = new ELJEWEL[(_0xf81e('0x146'))](this[_0xf81e('0x67')], this[_0xf81e('0x147')]);
                _0x1bb44a[_0xf81e('0x36')][_0xf81e('0x151')] = new THREE[(_0xf81e('0x3c'))]();
                _0x1bb44a[_0xf81e('0x36')][_0xf81e('0x151')][_0xf81e('0x41')](this[_0xf81e('0x36')][_0xf81e('0x151')]);
                _0x1bb44a[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x4e')][_0xf81e('0x3')] = this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x4e')][_0xf81e('0x3')];
                _0x1bb44a[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x4a')][_0xf81e('0x3')] = this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x4a')][_0xf81e('0x3')];
                _0x1bb44a[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x153')][_0xf81e('0x3')] = this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x153')][_0xf81e('0x3')];
                _0x1bb44a[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x154')][_0xf81e('0x3')] = this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x154')][_0xf81e('0x3')];
                _0x1bb44a[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x147')][_0xf81e('0x3')] = this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x147')][_0xf81e('0x3')];
                _0x1bb44a[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x155')][_0xf81e('0x3')][_0xf81e('0x41')](this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x155')][_0xf81e('0x3')]);
                _0x1bb44a[_0xf81e('0x56')] = this[_0xf81e('0x56')];
                return _0x1bb44a;
            }
        },
        {
            'key': _0xf81e('0x4d'),
            'value': function setScale(_0x34b353) {
                this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x4e')][_0xf81e('0x3')] = _0x34b353;
            }
        },
        {
            'key': _0xf81e('0x156'),
            'value': function setIntensity(_0x171134) {
                this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x153')][_0xf81e('0x3')] = _0x171134;
            }
        },
        {
            'key': _0xf81e('0x49'),
            'value': function setRotation(_0x71157e) {
                this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x4a')][_0xf81e('0x3')] = _0x71157e;
            }
        },
        {
            'key': _0xf81e('0x157'),
            'value': function setRotationSpeedFactor(_0x4d60c6) {
                this[_0xf81e('0x56')] = _0x4d60c6;
            }
        },
        {
            'key': _0xf81e('0x158'),
            'value': function setPositionOffset(_0x20bd1c, _0x40259e, _0x502b46) {
                this[_0xf81e('0x36')][_0xf81e('0x151')]['x'] = _0x20bd1c;
                this[_0xf81e('0x36')][_0xf81e('0x151')]['y'] = _0x40259e;
                this[_0xf81e('0x36')][_0xf81e('0x151')]['z'] = _0x502b46;
                this[_0xf81e('0x36')][_0xf81e('0x47')][_0xf81e('0x41')](this[_0xf81e('0x36')][_0xf81e('0x151')]);
                this[_0xf81e('0x36')][_0xf81e('0x159')]();
            }
        },
        {
            'key': _0xf81e('0x57'),
            'value': function alignWithCamera(_0x23c906) {
                this[_0xf81e('0x36')][_0xf81e('0x15a')][_0xf81e('0x15b')](_0x23c906[_0xf81e('0x15c')], this[_0xf81e('0x36')][_0xf81e('0x50')]);
                this[_0xf81e('0x28')][_0xf81e('0x3f')][_0xf81e('0x155')][_0xf81e('0x3')][_0xf81e('0x41')](this[_0xf81e('0x36')][_0xf81e('0x15a')]);
            }
        },
        {
            'key': _0xf81e('0x52'),
            'value': function syncWithTransform(_0x3f4473, _0x19c16c) {
                this[_0xf81e('0x36')][_0xf81e('0x47')][_0xf81e('0x41')](this[_0xf81e('0x36')][_0xf81e('0x151')]);
                if (_0x19c16c) {
                    this[_0xf81e('0x36')][_0xf81e('0x47')][_0xf81e('0x5e')](_0x19c16c);
                }
                this[_0xf81e('0x36')][_0xf81e('0x47')][_0xf81e('0x15d')](_0x3f4473);
                this[_0xf81e('0x36')][_0xf81e('0x159')]();
            }
        }
    ]);
    return _0x63c023;
}();