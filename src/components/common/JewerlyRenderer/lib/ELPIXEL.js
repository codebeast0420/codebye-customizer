
import * as THREE from './three.diamond.drawer.extension.js'; 

const ELPIXEL = {};

export { ELPIXEL };

var data;
var _0xc111 = [
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
    'bGVuZ3Ro',
    'ZW51bWVyYWJsZQ==',
    'Y29uZmlndXJhYmxl',
    'dmFsdWU=',
    'd3JpdGFibGU=',
    'ZGVmaW5lUHJvcGVydHk=',
    'a2V5',
    'cHJvdG90eXBl',
    'dGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVk',
    'b2JqZWN0',
    'ZnVuY3Rpb24=',
    'U3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCA=',
    'Y3JlYXRl',
    'c2V0UHJvdG90eXBlT2Y=',
    'X19wcm90b19f',
    'Q2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9u',
    'ZXhwb3J0cw==',
    'Y2FsbA==',
    'X19lc01vZHVsZQ==',
    'ZGVmYXVsdA==',
    'aGFzT3duUHJvcGVydHk=',
    'Zmxvb3I=',
    'cmFuZG9t',
    'c3BsaWNl',
    'd2lkdGg=',
    'aGVpZ2h0',
    'Y2VsbFNpemU=',
    'YXJyYXk=',
    'Y29z',
    'c2lu',
    'VmVjdG9yMg==',
    'ZGlzdGFuY2VUbw==',
    'bGVycERpc3RyaWJ1dGlvbg==',
    'dW5pZm9ybURpc3RyaWJ1dGlvbg==',
    'Y29zaW5lRGlzdHJpYnV0aW9u',
    'Z2VuZXJhdGVRdWFzaVJhbmRvbVBvaW50cw==',
    'aW5zaWRlQ2lyY2xl',
    'c3FydA==',
    'Y2VpbA==',
    'cHVzaA==',
    'U21vb3RoVHJhbnNpdGlvbkFPU2hhZGVy',
    'dmFyeWluZyB2ZWMyIHZVdjsgICAgICAgIHZvaWQgbWFpbigpIHsgICAgICAgICAgdlV2ID0gdXY7ICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTsKICAgICAgICB9',
    'dmFyeWluZyB2ZWMyIHZVdjs=',
    'dW5pZm9ybSBmbG9hdCB0cmFuc2l0aW9uOw==',
    'dW5pZm9ybSBzYW1wbGVyMkQgc2FvQWNjdW11bGF0aW9uQnVmZmVyOw==',
    'dm9pZCBtYWluKCkgew==',
    'ZmxvYXQgYW9WYWx1ZSA9IHRleHR1cmUyRCggc2FvQWNjdW11bGF0aW9uQnVmZmVyLCB2VXYpLnI7',
    'Z2xfRnJhZ0NvbG9yID0gdmVjNChtaXgoMC4sIGFvVmFsdWUsIHRyYW5zaXRpb24pKTs=',
    'am9pbg==',
    'U21vb3RoVHJhbnNpdGlvblNoYWRvd1NoYWRlcg==',
    'I2luY2x1ZGUgPHBhY2tpbmc+',
    'dW5pZm9ybSBzYW1wbGVyMkQgc2hhZG93QWNjdW11bGF0aW9uQnVmZmVyOw==',
    'dW5pZm9ybSBzYW1wbGVyMkQgZmlyc3RGcmFtZVNoYWRvd0J1ZmZlcjs=',
    'ZmxvYXQgc2hhZG93VmFsdWVGaXJzdEZyYW1lID0gdW5wYWNrUkdCQVRvRGVwdGgodGV4dHVyZTJEKCBmaXJzdEZyYW1lU2hhZG93QnVmZmVyLCB2VXYpKTs=',
    'ZmxvYXQgc2hhZG93VmFsdWUgPSB1bnBhY2tSR0JBVG9EZXB0aCh0ZXh0dXJlMkQoIHNoYWRvd0FjY3VtdWxhdGlvbkJ1ZmZlciwgdlV2KSk7',
    'Z2xfRnJhZ0NvbG9yID0gdmVjNChtaXgoc2hhZG93VmFsdWVGaXJzdEZyYW1lLCBzaGFkb3dWYWx1ZSwgcG93KHRyYW5zaXRpb24sIDQuKSkpOw==',
    'U21vb3RoVHJhbnNpdGlvblNvZnRTaGFkb3dTaGFkb3dTaGFkZXI=',
    'VmVjdG9yMw==',
    'dW5pZm9ybSB2ZWMzIHNoYWRvd0RhdGE7',
    'ZmxvYXQgbWFzayA9ICgxLiAtIHNoYWRvd1ZhbHVlKSAqIHNoYWRvd0RhdGEueDs=',
    'bWFzayA9IHBvdyhtYXNrLCBzaGFkb3dEYXRhLnkpOw==',
    'Z2xfRnJhZ0NvbG9yID0gIHZlYzQobWl4KHZlYzQoMC4pLCB2ZWM0KHZlYzMoMC4pLCBtYXNrKSwgcG93KHRyYW5zaXRpb24sIDQuKSkpOw==',
    'U2hhZGVyQ2h1bms=',
    'dXRpbHNoYWRlcg==',
    'dmVjMiBwYWNrMTYoZmxvYXQgdmFsdWUpew==',
    'ZmxvYXQgc01heCA9IDY1NTM1LjA7',
    'aW50IHYgPSBpbnQoY2xhbXAodmFsdWUsIDAuMCwgMS4wKSpzTWF4KzAuNSk7',
    'aW50IGRpZ2l0MCA9IHYvMjU2Ow==',
    'aW50IGRpZ2l0MSA9IHYtZGlnaXQwKjI1Njs=',
    'cmV0dXJuIHZlYzIoZmxvYXQoZGlnaXQwKS8yNTUuMCwgZmxvYXQoZGlnaXQxKS8yNTUuMCk7',
    'dmVjMiBwYWNrTm9ybWFsKHZlYzMgbil7',
    'ZmxvYXQgcCA9IHNxcnQobi56KjguMCs4LjApOw==',
    'cmV0dXJuIHZlYzIobi54eS9wICsgMC41KTs=',
    'dmVjMyB1bnBhY2tOb3JtYWwodmVjMiBlbmMpew==',
    'dmVjMiBmZW5jID0gZW5jKjQuMC0yLjA7',
    'ZmxvYXQgZiA9IGRvdChmZW5jLGZlbmMpOw==',
    'ZmxvYXQgZyA9IHNxcnQoMS4wLWYvNC4wKTs=',
    'cmV0dXJuIHZlYzMoZmVuYypnLCAxLjAtZi8yLjApOw==',
    'ZmxvYXQgdW5wYWNrMTYodmVjMiB2YWx1ZSl7',
    'cmV0dXJuICg=',
    'dmFsdWUueCowLjk5NjEwODk0OTQxNjM0MjQyNjI3NTE1MDUwMTE2OTI2NDMxNjU1ODgzNzg5MDYyNSAr',
    'dmFsdWUueSowLjAwMzg5MTA1MDU4MzY1NzU4NzYwMjYzNzMwNjY0NTE5MjQzODczNjU1Nzk2MDUxMDI1MzkwNjI1',
    'dmVjMyBnZXRWaWV3Tm9ybWFsKGNvbnN0IGluIHZlYzIgdXYgKSB7',
    'I2lmIERFUFRIX05PUk1BTF9URVhUVVJFID09IDE=',
    'cmV0dXJuIHVucGFja05vcm1hbCggdGV4dHVyZTJEKCB0Tm9ybWFsRGVwdGgsIHV2ICkuencgKTs=',
    'I2Vsc2U=',
    'cmV0dXJuIHVucGFja1JHQlRvTm9ybWFsKCB0ZXh0dXJlMkQoIHROb3JtYWwsIHV2ICkueHl6ICk7',
    'I2VuZGlm',
    'ZmxvYXQgbGluc3RlcChmbG9hdCBlZGdlMCwgZmxvYXQgZWRnZTEsIGZsb2F0IHZhbHVlKXs=',
    'cmV0dXJuIGNsYW1wKCh2YWx1ZS1lZGdlMCkvKGVkZ2UxLWVkZ2UwKSwgMC4wLCAxLjApOw==',
    'dmVjMyBwYWNrRmxvYXRUb1JHQihjb25zdCBpbiBmbG9hdCB4KSB7',
    'Y29uc3QgdmVjMyBjb2RlID0gdmVjMygxLjAsIDI1NS4wLCA2NTAyNS4wKTs=',
    'dmVjMyBwYWNrID0gdmVjMyhjb2RlICogeCk7',
    'cGFjay5nYiA9IGZyYWN0KHBhY2suZ2IpOw==',
    'cGFjay5yZyAtPSBwYWNrLmdiICogKDEuMCAvIDI1Ni4wKTs=',
    'cmV0dXJuIHBhY2s7',
    'ZmxvYXQgZGVjb2RlRGVwdGgoIGNvbnN0IGluIHZlYzIgdXYgKSB7',
    'dmVjNCB1bmNvZGVkRGVwdGg7',
    'I2lmIERFUFRIX1BBQ0tJTkdfTU9ERSA9PSAy',
    'dW5jb2RlZERlcHRoID0gdGV4dHVyZTJEKCB0Tm9ybWFsRGVwdGgsIHV2ICk7',
    'dW5jb2RlZERlcHRoID0gdGV4dHVyZTJEKCB0RGVwdGgsIHV2ICk7',
    'I2lmIERFUFRIX1BBQ0tJTkdfTU9ERSA9PSAw',
    'cmV0dXJuIHVuY29kZWREZXB0aC54Ow==',
    'I2VsaWYgREVQVEhfUEFDS0lOR19NT0RFID09IDE=',
    'I2lmIExJTkVBUl9ERVBUSCA9PSAx',
    'cmV0dXJuIHBvdzIodW5wYWNrUkdCQVRvRGVwdGgodW5jb2RlZERlcHRoKSk7',
    'cmV0dXJuIHVucGFja1JHQkFUb0RlcHRoKCB1bmNvZGVkRGVwdGggKTs=',
    'cmV0dXJuIHBvdzIodW5wYWNrMTYodW5jb2RlZERlcHRoLnh5KSk7',
    'Q29weVNoYWRlcg==',
    'VW5pZm9ybXNVdGlscw==',
    'Y2xvbmU=',
    'dW5pZm9ybXM=',
    'U2hhZGVyTWF0ZXJpYWw=',
    'dmVydGV4U2hhZGVy',
    'ZnJhZ21lbnRTaGFkZXI=',
    'U2NlbmU=',
    'T3J0aG9ncmFwaGljQ2FtZXJh',
    'cXVhZA==',
    'TWVzaA==',
    'UGxhbmVHZW9tZXRyeQ==',
    'ZnJ1c3R1bUN1bGxlZA==',
    'YWRk',
    'cmFuZG9taXplQXJyYXk=',
    'Y3JlYXRlVGV4dHVyZUZyb21SYXdEYXRh',
    'dHlwZQ==',
    'RmxvYXRUeXBl',
    'Zm9ybWF0',
    'THVtaW5hbmNlQWxwaGFGb3JtYXQ=',
    'bWluRmlsdGVy',
    'TmVhcmVzdEZpbHRlcg==',
    'bWFnRmlsdGVy',
    'RGF0YVRleHR1cmU=',
    'Z2VuZXJhdGVNaXBtYXBz',
    'bmVlZHNVcGRhdGU=',
    'aml0dGVyQ2FtZXJh',
    'c2V0Vmlld09mZnNldA==',
    'aW5zaWRlUmVjdGFuZ2xl',
    'YmxpdA==',
    'dERpZmZ1c2U=',
    'bWF0ZXJpYWw=',
    'cmVuZGVy',
    'cmVuZGVyUGFzcw==',
    'Y2FsY3VsYXRlRk9W',
    'aXNCb3gz',
    'Qm94Mw==',
    'c2V0RnJvbU9iamVjdA==',
    'Z2V0Q2VudGVy',
    'Z2V0U2l6ZQ==',
    'c2V0',
    'c3Vi',
    'bm9ybWFsaXpl',
    'ZG90',
    'bWlu',
    'YWNvcw==',
    'aXNQb3dlck9mVHdv',
    'bWFrZVBvd2VyT2ZUd28=',
    'cG93',
    'TE4y',
    'Y3JlYXRlRWxlbWVudE5T',
    'aHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbA==',
    'Y2FudmFz',
    'Z2V0Q29udGV4dA==',
    'ZHJhd0ltYWdl',
    'Z2V0RGF0YUZyb21JbWFnZQ==',
    'Y3JlYXRlRWxlbWVudA==',
    'Z2V0SW1hZ2VEYXRh',
    'Z2V0UGl4ZWxGcm9tSW1hZ2VEYXRh',
    'ZGF0YQ==',
    'c3F1YXJlVG9Vbmlmb3JtRGlza0NvbmNlbnRyaWM=',
    'c3F1YXJlVG9Db3NpbmVIZW1pc3BoZXJl',
    'RUxQSVhFTA==',
    'c2FvcGFyYW1z',
    'c2hhZG93cGFyYW1z',
    'Z2J1ZmZlcnBhcmFtcw==',
    'YXV0b1NBT0NsZWFy',
    'YXV0b1NoYWRvd3NDbGVhcg==',
    'ZW5hYmxlQUE=',
    'QmlsYXRlcmFsRmlsdGVyUGFzcw==',
    'R0J1ZmZlclBhc3M=',
    'Z2lQYXJhbXM=',
    'ZW5hYmxlR0k=',
    'ZW5hYmxl',
    'aW5pdGlhbGl6ZUdJ',
    'QlZITWFuYWdlcg==',
    'YWNjdW11bGF0aXZl',
    'QWNjdW11bGF0aXZlU0FPUGFzcw==',
    'U0FPUGFzcw==',
    'U2hhZG93UGFzcw==',
    'Z3JvdW5kU2hhZG93',
    'UGxhbmVTaGFkb3dCYWtlUGFzcw==',
    'U3VwZXJTYW1wbGVBQVBhc3M=',
    'UkdCQUZvcm1hdA==',
    'V2ViR0xSZW5kZXJUYXJnZXQ=',
    'YWRkTm9kZVRvQWNjZWxlcmF0aW9uU3RydWN0dXJl',
    'dHJhdmVyc2U=',
    'aXNNZXNo',
    'Y2FzdFNoYWRvdw==',
    'dXBkYXRlTWF0cml4V29ybGQ=',
    'YWRkUmVuZGVyQ29tcGxldGVDYWxsYmFjaw==',
    'cmVuZGVyQ29tcGxldGVDYWxsYmFjaw==',
    'cmVtb3ZlUmVuZGVyQ29tcGxldGVDYWxsYmFjaw==',
    'cmVuZGVyZXI=',
    'ZW5hYmxlVlBMR2VuZXJhdGlvbg==',
    'Z2V0Qmxvb21QYXNz',
    'Z2V0SGlnaExpZ2h0UGFzcw==',
    'Z2V0UmVuZGVyUGFzcw==',
    'Z2V0U0FPUGFzcw==',
    'Z2V0U2hhZG93UGFzcw==',
    'Z2V0VlBMR2VuZXJhdGlvblBhc3M=',
    'Z2V0U2hhZG93UGxhbmVQYXNz',
    'aGlnaGxpZ2h0T2JqZWN0cw==',
    'c2VsZWN0ZWRPYmplY3Rz',
    'VlBMR2VuZXJhdGlvblBhc3M=',
    'SW5zdGFudFJhZGlvc2l0eVBhc3M=',
    'Z2V0RWZmZWN0Q29tcG9zZXI=',
    'aW5zZXJ0UGFzcw==',
    'aXNBY2N1bXVsYXRpb25Db252ZXJnZWQ=',
    'ZW5hYmxlQWNjdW11bGF0aW9u',
    'Y29udmVyZ2VuY2VNZXRyaWM=',
    'aXNTdXBlclNhbXBsaW5nQ29udmVyZ2Vk',
    'aml0dGVySW5kZXg=',
    'dXVpZA==',
    'Y2FtZXJh',
    'c2NlbmU=',
    'Y29weQ==',
    'cHJvamVjdGlvbk1hdHJpeA==',
    'YkluaXRpYWxpemVk',
    'Z2VuZXJhdGVWUExz',
    'YXJlYUxpZ2h0cw==',
    'ZW5hYmxlZA==',
    'd3JpdGVCdWZmZXI=',
    'cmVuZGVyVGFyZ2V0Mg==',
    'cmVhZEJ1ZmZlcg==',
    'cmVuZGVyVGFyZ2V0MQ==',
    'Y2xlYXJWaWV3T2Zmc2V0',
    'c2V0U2l6ZQ==',
    'Z2V0UGl4ZWxSYXRpbw==',
    'c2NyZWVuQnVmZmVyU2l6ZQ==',
    'c2V0QW50aUFsaWFzaW5nRmVlZEJhY2tQYXJhbXM=',
    'ZmVlZEJhY2s=',
    'dXBkYXRlU2hhZG93UGxhbmU=',
    'dXBkYXRl',
    'Z2V0RHJhd2luZ0J1ZmZlclNpemU=',
    'c2FvQnVmZmVy',
    'dGV4dHVyZQ==',
    'Zm9yRWFjaA==',
    'bGlnaHRz',
    'c2hhZG93',
    'bWFw',
    'cmVuZGVyQ29tcGxldGVDYWxsYmFja0NhbGxlZA==',
    'cHVuY3R1YWxMaWdodHM=',
    'dHJhdmVyc2VWaXNpYmxl',
    'RGlyZWN0aW9uYWxMaWdodA==',
    'U3BvdExpZ2h0',
    'UmVjdEFyZWFMaWdodA==',
    'bWFwU2l6ZQ==',
    'UmVuZGVyUGFzcw==',
    'RWZmZWN0Q29tcG9zZXI=',
    'VGVtcG9yYWxBQVBhc3M=',
    'U2hhZGVyUGFzcw==',
    'bmVlZHNTd2Fw',
    'cmVuZGVyVG9TY3JlZW4=',
    'YWRkUGFzcw==',
    'T3V0bGluZVBhc3M=',
    'VW5yZWFsQmxvb21QYXNz',
    'TWVzaEJhc2ljTWF0ZXJpYWw=',
    'ZGVwdGhUZXh0dXJl',
    'VGV4dHVyZUFyZWFMaWdodEZpbHRlcg==',
    'aW1hZ2U=',
    'TGluZWFyRmlsdGVy',
    'YW5pc290cm9weQ==',
    'ZW5jb2Rpbmc=',
    'bWF4',
    'QXJlYUxpZ2h0VGV4dHVyZUZpbHRlclNoYWRlcg==',
    'TGluZWFyTWlwTWFwTGluZWFyRmlsdGVy',
    'ZmlsdGVyUmFkaXVz',
    'dGV4U2l6ZQ==',
    'ZGlyZWN0aW9u',
    'Y29sb3JUZXh0dXJl',
    'c2V0UmVuZGVyVGFyZ2V0',
    'cmVhZFJlbmRlclRhcmdldFBpeGVscw==',
    'bWlwbWFwcw==',
    'ZGlzcG9zZQ==',
    'dlV2ID0gdXY7',
    'Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApOw==',
    'dW5pZm9ybSBzYW1wbGVyMkQgY29sb3JUZXh0dXJlOw==',
    'dW5pZm9ybSBmbG9hdCBmaWx0ZXJSYWRpdXM7',
    'dW5pZm9ybSB2ZWMyIHRleFNpemU7',
    'dW5pZm9ybSB2ZWMyIGRpcmVjdGlvbjs=',
    'ZmxvYXQgSU5WX05VTV9TQU1QTEVTID0gMS4wL2Zsb2F0KE5VTV9TQU1QTEVTIC0gMSk7',
    'dmVjMiBkZWx0YSA9IGRpcmVjdGlvbiAqIGZpbHRlclJhZGl1cyAqIElOVl9OVU1fU0FNUExFUy8gdGV4U2l6ZTs=',
    'ZmxvYXQgZlNpZ21hID0gZmlsdGVyUmFkaXVzOw==',
    'ZmxvYXQgd2VpZ2h0U3VtID0gMS47',
    'dmVjNCBjb2xvclN1bSA9IHRleHR1cmUyRCggY29sb3JUZXh0dXJlLCB2VXYpICogd2VpZ2h0U3VtOw==',
    'Zm9yKCBpbnQgaSA9IDE7IGkgPCBOVU1fU0FNUExFUzsgaSArKyApIHs=',
    'ZmxvYXQgeCA9IGZsb2F0KGkpOw==',
    'dmVjMiB1dk9mZnNldCA9IGRlbHRhICogeDs=',
    'dmVjMiB2VXYxID0gdlV2ICsgdXZPZmZzZXQ7',
    'ZmxvYXQgdyA9IDEuOw==',
    'aWYoIHZVdjEueCA8IDAuMCB8fCB2VXYxLnggPiAxLjAgfHwgdlV2MS55IDwgMC4wIHx8IHZVdjEueSA+IDEuMCApIHs=',
    'dyA9IDAuMDs=',
    'Y29sb3JTdW0gKz0gdGV4dHVyZTJEKCBjb2xvclRleHR1cmUsIHZVdjEpICogdzs=',
    'd2VpZ2h0U3VtICs9IHc7',
    'dmVjMiB2VXYyID0gdlV2IC0gdXZPZmZzZXQ7',
    'dyA9IDEuOw==',
    'aWYoIHZVdjIueCA8IDAuMCB8fCB2VXYyLnggPiAxLjAgfHwgdlV2Mi55IDwgMC4wIHx8IHZVdjIueSA+IDEuMCApIHs=',
    'Y29sb3JTdW0gKz0gdGV4dHVyZTJEKCBjb2xvclRleHR1cmUsIHZVdjIpICogdzs=',
    'Z2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvclN1bS93ZWlnaHRTdW0pOw==',
    'bWVzaGVz',
    'YnVpbGRCVkhUcmVl',
    'Z2VvbWV0cnk=',
    'aW5kZXg=',
    'YXR0cmlidXRlcw==',
    'cG9zaXRpb24=',
    'cG9zaXRpb25z',
    'dXZz',
    'X21heFRyaWFuZ2xlc1Blck5vZGU=',
    'X2Jib3hBcnJheQ==',
    'X2Jib3hIZWxwZXI=',
    'Y2FsY0V4dGVudHM=',
    'X3Jvb3ROb2Rl',
    'X25vZGVzVG9TcGxpdA==',
    'cG9w',
    'c3BsaXROb2Rl',
    'TUFYX1ZBTFVF',
    'ZWxlbWVudENvdW50',
    'X3N0YXJ0SW5kZXg=',
    'X2VuZEluZGV4',
    'Y2VudGVyWA==',
    'Y2VudGVyWQ==',
    'Y2VudGVyWg==',
    'X2V4dGVudHNNYXg=',
    'X2V4dGVudHNNaW4=',
    'c29ydA==',
    'Y29uY2F0',
    'c3ViYXJyYXk=',
    'X2xldmVs',
    'X25vZGUw',
    'X25vZGUx',
    'Y2xlYXJTaGFwZXM=',
    'aW50ZXJzZWN0UmF5',
    'ZnJvbUFycmF5',
    'YnZo',
    'UmF5',
    'TWF0cml4NA==',
    'dmFs',
    'b3JpZ2lu',
    'Z2V0SW52ZXJzZQ==',
    'bWF0cml4V29ybGQ=',
    'YXBwbHlNYXRyaXg0',
    'dHJhbnNmb3JtRGlyZWN0aW9u',
    'cG9pbnQ=',
    'ZGlzdGFuY2U=',
    'ZGlzdGFuY2VUb1NxdWFyZWQ=',
    'c3ViVmVjdG9ycw==',
    'Y3Jvc3NWZWN0b3Jz',
    'Y3Jvc3M=',
    'bXVsdGlwbHlTY2FsYXI=',
    'VHJpYW5nbGU=',
    'Z2V0QmFyeWNvb3Jk',
    'bGVuZ3RoU3E=',
    'Zm9yY2VEZXB0aEFuZE5vcm1hbFBhc3M=',
    'cGFja2luZ01vZGU=',
    'REVQVEhfTk9STUFMXzE2',
    'TWVzaE5vcm1hbE1hdGVyaWFs',
    'UGFja2luZ1NoYWRlcl9EZXB0aE5vcm1hbDE2',
    'bGluZWFyRGVwdGg=',
    'UGFja2luZ1NoYWRlcl9EZXB0aDMy',
    'TWVzaERlcHRoTWF0ZXJpYWw=',
    'ZGVwdGhQYWNraW5n',
    'UkdCQURlcHRoUGFja2luZw==',
    'Z2V0Q2xlYXJDb2xvcg==',
    'Z2V0Q2xlYXJBbHBoYQ==',
    'YXV0b0NsZWFy',
    'c2hhZG93TWFw',
    'c2V0Q2xlYXJDb2xvcg==',
    'Q29sb3I=',
    'ZXh0ZW5zaW9ucw==',
    'Z2V0',
    'V0VCR0xfZGVwdGhfdGV4dHVyZQ==',
    'RGVwdGhUZXh0dXJl',
    'VW5zaWduZWRTaG9ydFR5cGU=',
    'Tk9ORQ==',
    'aXNMaW5lU2VnbWVudHM=',
    'aXNMaW5l',
    'aXNMaW5lTG9vcA==',
    'aXNQb2ludHM=',
    'dHJhbnNwYXJlbnQ=',
    'Y2FzdEFP',
    'aXNTaGFkb3dNYXRlcmlhbA==',
    'YWxwaGFUZXN0',
    'YW9WaXNpYmlsaXR5',
    'dmlzaWJsZQ==',
    'b3ZlcnJpZGVNYXRlcmlhbA==',
    'aXNNZXNoRGVwdGhNYXRlcmlhbA==',
    'Y2FtZXJhTmVhckZhcg==',
    'bmVhcg==',
    'ZmFy',
    'dmFyeWluZyB2ZWMzIHZpZXdOb3JtYWw7ICAgICAgdmFyeWluZyB2ZWMzIHZpZXdQb3NpdGlvbjsgICAgICB2b2lkIG1haW4oKSB7ICAgICAgICB2aWV3Tm9ybWFsID0gbm9ybWFsTWF0cml4ICogbm9ybWFsOyAgICAgICAgdmlld1Bvc2l0aW9uID0gKG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKSkueHl6OyAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApOyAgICAgIH0=',
    'dmFyeWluZyB2ZWMzIHZpZXdOb3JtYWw7ICAgIHVuaWZvcm0gdmVjMiBjYW1lcmFOZWFyRmFyOyAgICB2YXJ5aW5nIHZlYzMgdmlld1Bvc2l0aW9uOyAgICAgIHZlYzIgcGFjazE2KGZsb2F0IHZhbHVlKXsgICAgICAgICAgZmxvYXQgc01heCA9IDY1NTM1LjA7ICAgICAgICAgIGludCB2ID0gaW50KGNsYW1wKHZhbHVlLCAwLjAsIDEuMCkqc01heCswLjUpOyAgICAgICAgICBpbnQgZGlnaXQwID0gdi8yNTY7ICAgICAgICAgIGludCBkaWdpdDEgPSB2LWRpZ2l0MCoyNTY7ICAgICAgICAgIHJldHVybiB2ZWMyKGZsb2F0KGRpZ2l0MCkvMjU1LjAsIGZsb2F0KGRpZ2l0MSkvMjU1LjApOyAgICAgIH0gICAgICAgICAgICB2ZWMyIHBhY2tOb3JtYWwodmVjMyBuKXsgICAgICAgICAgZmxvYXQgcCA9IHNxcnQobi56KjguMCs4LjApOyAgICAgICAgICByZXR1cm4gdmVjMihuLnh5L3AgKyAwLjUpOyAgICAgIH0gICAgICAgICAgICBmbG9hdCBsaW5zdGVwKGZsb2F0IGVkZ2UwLCBmbG9hdCBlZGdlMSwgZmxvYXQgdmFsdWUpeyAgICAgICAgcmV0dXJuIGNsYW1wKCh2YWx1ZS1lZGdlMCkvKGVkZ2UxLWVkZ2UwKSwgMC4wLCAxLjApOyAgICAgIH0gICAgICAgICAgICB2b2lkIG1haW4oKSB7ICAgICAgICBmbG9hdCBsaW5lYXJaID0gbGluc3RlcCgtY2FtZXJhTmVhckZhci54LCAtY2FtZXJhTmVhckZhci55LCB2aWV3UG9zaXRpb24ueik7ICAgICAgICB2ZWMyIHBhY2tlZFogPSBwYWNrMTYocG93KGxpbmVhclosIDAuNSkpOyAgICAgICAgdmVjMiBwYWNrZWROb3JtYWwgPSBwYWNrTm9ybWFsKG5vcm1hbGl6ZSh2aWV3Tm9ybWFsKSk7ICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHBhY2tlZFoueCwgcGFja2VkWi55LCBwYWNrZWROb3JtYWwueCwgcGFja2VkTm9ybWFsLnkpOyAgICAgIH0=',
    'dmFyeWluZyB2ZWMzIHZpZXdQb3NpdGlvbjsgICAgdm9pZCBtYWluKCkgeyAgICAgIHZpZXdQb3NpdGlvbiA9IChtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICkpLnh5ejsgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7ICAgIH0=',
    'I2luY2x1ZGUgPHBhY2tpbmc+ICB1bmlmb3JtIHZlYzIgY2FtZXJhTmVhckZhcjsgIHZhcnlpbmcgdmVjMyB2aWV3UG9zaXRpb247ICAgIGZsb2F0IGxpbnN0ZXAoZmxvYXQgZWRnZTAsIGZsb2F0IGVkZ2UxLCBmbG9hdCB2YWx1ZSl7ICAgICAgcmV0dXJuIGNsYW1wKCh2YWx1ZS1lZGdlMCkvKGVkZ2UxLWVkZ2UwKSwgMC4wLCAxLjApOyAgICB9ICAgICAgICB2b2lkIG1haW4oKSB7ICAgICAgZmxvYXQgbGluZWFyWiA9IGxpbnN0ZXAoLWNhbWVyYU5lYXJGYXIueCwgLWNhbWVyYU5lYXJGYXIueSwgdmlld1Bvc2l0aW9uLnopOyAgICAgIHZlYzQgcGFja2VkWiA9IHBhY2tEZXB0aFRvUkdCQShwb3cobGluZWFyWiwgMC41KSk7ICAgICAgZ2xfRnJhZ0NvbG9yID0gcGFja2VkWjsgICAgfQ==',
    'aW50ZW5zaXR5',
    'b2NjbHVzaW9uV29ybGRSYWRpdXM=',
    'c21vb3RoVHJhbnNpdGlvbg==',
    'Ymlhcw==',
    'bnVtU2FtcGxlcw==',
    'c2FtcGxlc1BlckZyYW1l',
    'Ymx1ckVuYWJsZWQ=',
    'ZWRnZVNoYXJwbmVzcw==',
    'QWNjdW11bGF0aXZlU0FPU2hhZGVy',
    'ZGVmaW5lcw==',
    'U0FNUExFU19QRVJfRlJBTUU=',
    'c2l6ZQ==',
    'c2V0Q2xlYXJBbHBoYQ==',
    'dEFPU3VtUHJldmlvdXM=',
    'c2FvQWNjdW11bGF0aW9uQnVmZmVy',
    'dHJhbnNpdGlvbg==',
    'dGFu',
    'TWF0aA==',
    'REVHMlJBRA==',
    'Zm92',
    'c2FvRGF0YQ==',
    'c2FvQmlhc0Vwc2lsb24=',
    'UHJvamVjdGlvbk1hdHJpeA==',
    'REVQVEhfUEFDS0lOR19NT0RF',
    'REVQVEhfTk9STUFMX1RFWFRVUkU=',
    'TElORUFSX0RFUFRI',
    'dE5vcm1hbERlcHRo',
    'dE5vcm1hbA==',
    'dERlcHRo',
    'dFF1YXNpUmFuZG9tU2FtcGxlcw==',
    'bnVtUXVhc2lTYW1wbGVz',
    'Tm9CbGVuZGluZw==',
    'VmVjdG9yNA==',
    'I2luY2x1ZGUgPGNvbW1vbj4=',
    'dW5pZm9ybSBzYW1wbGVyMkQgdEFPU3VtUHJldmlvdXM7',
    'dW5pZm9ybSBzYW1wbGVyMkQgdFF1YXNpUmFuZG9tU2FtcGxlczs=',
    'dW5pZm9ybSBzYW1wbGVyMkQgdERlcHRoOw==',
    'dW5pZm9ybSBzYW1wbGVyMkQgdE5vcm1hbERlcHRoOw==',
    'dW5pZm9ybSBzYW1wbGVyMkQgdE5vcm1hbDs=',
    'dW5pZm9ybSBtYXQ0IFByb2plY3Rpb25NYXRyaXg7',
    'dW5pZm9ybSB2ZWM0IHNhb0RhdGE7',
    'dW5pZm9ybSB2ZWM0IHNhb0JpYXNFcHNpbG9uOw==',
    'dW5pZm9ybSB2ZWMyIHNpemU7',
    'dW5pZm9ybSB2ZWMyIGNhbWVyYU5lYXJGYXI7',
    'dW5pZm9ybSBmbG9hdCBudW1RdWFzaVNhbXBsZXM7',
    'Y29uc3QgZmxvYXQgZl9zYW1wbGVDb3VudCA9IGZsb2F0KCBTQU1QTEVTX1BFUl9GUkFNRSApOw==',
    'I2luY2x1ZGUgPHV0aWxzaGFkZXI+',
    'ZmxvYXQgZ2V0Vmlld0RlcHRoKCBjb25zdCBpbiBmbG9hdCBuZGNEZXB0aCApIHs=',
    'I2lmIFBFUlNQRUNUSVZFX0NBTUVSQSA9PSAx',
    'cmV0dXJuIHBlcnNwZWN0aXZlRGVwdGhUb1ZpZXdaKCBuZGNEZXB0aCwgY2FtZXJhTmVhckZhci54LCBjYW1lcmFOZWFyRmFyLnkgKTs=',
    'cmV0dXJuIG9ydGhvZ3JhcGhpY0RlcHRoVG9WaWV3WiggbmRjRGVwdGgsIGNhbWVyYU5lYXJGYXIueCwgY2FtZXJhTmVhckZhci55ICk7',
    'dmVjMyBnZXRWaWV3UG9zaXRpb25Gcm9tVmlld1ooY29uc3QgaW4gdmVjMiB1diwgY29uc3QgaW4gZmxvYXQgdmlld0RlcHRoKSB7',
    'dmVjMiB1dl8gPSAyLiAqIHV2IC0gMS47',
    'ZmxvYXQgeGUgPSAtKHV2Xy54ICsgUHJvamVjdGlvbk1hdHJpeFsyXVswXSkgKiB2aWV3RGVwdGgvUHJvamVjdGlvbk1hdHJpeFswXVswXTs=',
    'ZmxvYXQgeWUgPSAtKHV2Xy55ICsgUHJvamVjdGlvbk1hdHJpeFsyXVsxXSkgKiB2aWV3RGVwdGgvUHJvamVjdGlvbk1hdHJpeFsxXVsxXTs=',
    'cmV0dXJuIHZlYzMoeGUsIHllLCB2aWV3RGVwdGgpOw==',
    'ZmxvYXQgZ2V0T2NjbHVzaW9uRnJvbVBvc2l0aW9uTm9ybWFsKCBjb25zdCBpbiB2ZWMzIGNlbnRlclBvc2l0aW9uLCBjb25zdCBpbiB2ZWMzIGNlbnRlck5vcm1hbCwgY29uc3QgaW4gdmVjMyBzYW1wbGVQb3NpdGlvbiApIHs=',
    'dmVjMyBkaXJlY3Rpb24gPSBzYW1wbGVQb3NpdGlvbiAtIGNlbnRlclBvc2l0aW9uOw==',
    'ZmxvYXQgZDIgPSBkb3QoIGRpcmVjdGlvbiwgZGlyZWN0aW9uICk7',
    'cmV0dXJuIG1heCggKCBkb3QoIGNlbnRlck5vcm1hbCwgZGlyZWN0aW9uICkgKyBjZW50ZXJQb3NpdGlvbi56ICogc2FvQmlhc0Vwc2lsb24ueCApIC8gKCBkMiArIHNhb0JpYXNFcHNpbG9uLnkgKSwgMC4wICk7',
    'dmVjNCBnZXRPY2NsdXNpb24oIGNvbnN0IGluIHZlYzMgY2VudGVyUG9zaXRpb24gKSB7',
    'dmVjMyBjZW50ZXJOb3JtYWwgPSBnZXRWaWV3Tm9ybWFsKCB2VXYgKTs=',
    'ZmxvYXQgc2NyZWVuT2NjbHVzaW9uUmFkaXVzID0gMjAwLiAqIHNhb0RhdGEueiAqIHNhb0RhdGEueCAvIC1jZW50ZXJQb3NpdGlvbi56Ow==',
    'aWYoIHNjcmVlbk9jY2x1c2lvblJhZGl1cyA8IDEuICkgew==',
    'ZGlzY2FyZDs=',
    'ZmxvYXQgcmFuZG9tID0gcmFuZCggdlV2ICk7',
    'ZmxvYXQgcmFuZG9tQW5nbGUgPSByYW5kb20gKiBQSTIgKyAyLiAqIFBJMiAqIChzYW9EYXRhLncgLSAxLjApOw==',
    'ZmxvYXQgY29zQW5nbGUgPSBjb3MocmFuZG9tQW5nbGUpOyBmbG9hdCBzaW5BbmdsZSA9IHNpbihyYW5kb21BbmdsZSk7',
    'bWF0MiByYW5kb21Sb3RhdGlvbk1hdHJpeCA9IG1hdDIoY29zQW5nbGUsIHNpbkFuZ2xlLCAtc2luQW5nbGUsIGNvc0FuZ2xlKTs=',
    'ZmxvYXQgdGV4ZWxTaXplID0gMS4wL251bVF1YXNpU2FtcGxlczs=',
    'ZmxvYXQgb2NjbHVzaW9uU3VtID0gMC4wOw==',
    'Zm9yKCBpbnQgaSA9IDA7IGkgPCBTQU1QTEVTX1BFUl9GUkFNRTsgaSArKyApIHs=',
    'ZmxvYXQgb2Zmc2V0ID0gKG1vZCgoZmxvYXQoaSkgKyAoc2FvRGF0YS53IC0gMS4pICogZl9zYW1wbGVDb3VudCksIG51bVF1YXNpU2FtcGxlcykgKyAwLjUgKSAqIHRleGVsU2l6ZTs=',
    'dmVjMiByYW5kb21TYW1wbGUgPSByYW5kb21Sb3RhdGlvbk1hdHJpeCAqIHRleHR1cmUyRCggdFF1YXNpUmFuZG9tU2FtcGxlcywgdmVjMihvZmZzZXQsIDAuNSkpLnh3ICogc2NyZWVuT2NjbHVzaW9uUmFkaXVzL3NpemU7',
    'dmVjMiBzYW1wbGVVdiA9IHZVdiArIHJhbmRvbVNhbXBsZTs=',
    'ZmxvYXQgc2FtcGxlRGVwdGhOREMgPSBkZWNvZGVEZXB0aCggc2FtcGxlVXYgKTs=',
    'aWYoIHNhbXBsZURlcHRoTkRDID49ICggMS4wIC0gRVBTSUxPTiApICkgew==',
    'Y29udGludWU7',
    'I2lmIExJTkVBUl9ERVBUSCA9PSAw',
    'ZmxvYXQgc2FtcGxlVmlld0RlcHRoID0gZ2V0Vmlld0RlcHRoKCBzYW1wbGVEZXB0aE5EQyApOw==',
    'dmVjMyBzYW1wbGVQb3NpdGlvbiA9IGdldFZpZXdQb3NpdGlvbkZyb21WaWV3Wiggc2FtcGxlVXYsIHNhbXBsZVZpZXdEZXB0aCApOw==',
    'c2FtcGxlRGVwdGhOREMgPSBtaXgoLWNhbWVyYU5lYXJGYXIueCwgLWNhbWVyYU5lYXJGYXIueSwgc2FtcGxlRGVwdGhOREMpOw==',
    'dmVjMyBzYW1wbGVQb3NpdGlvbiA9IGdldFZpZXdQb3NpdGlvbkZyb21WaWV3WihzYW1wbGVVdiwgc2FtcGxlRGVwdGhOREMpOw==',
    'ZmxvYXQgb2NjbHVzaW9uID0gZ2V0T2NjbHVzaW9uRnJvbVBvc2l0aW9uTm9ybWFsKCBjZW50ZXJQb3NpdGlvbiwgY2VudGVyTm9ybWFsLCBzYW1wbGVQb3NpdGlvbiApOw==',
    'b2NjbHVzaW9uU3VtICs9IG9jY2x1c2lvbjs=',
    'ZmxvYXQgb2NjbHVzaW9uID0gb2NjbHVzaW9uU3VtICogc2FvRGF0YS55ICogMi4wIC8gZl9zYW1wbGVDb3VudDs=',
    'cmV0dXJuIHZlYzQoY2xhbXAob2NjbHVzaW9uLDAuLCAxLikpOw==',
    'ZmxvYXQgY2VudGVyRGVwdGggPSBkZWNvZGVEZXB0aCggdlV2ICk7',
    'aWYoIGNlbnRlckRlcHRoID49ICggMS4wIC0gRVBTSUxPTiApICkgew==',
    'ZmxvYXQgY2VudGVyVmlld0RlcHRoID0gZ2V0Vmlld0RlcHRoKCBjZW50ZXJEZXB0aCApOw==',
    'ZmxvYXQgY2VudGVyVmlld0RlcHRoID0gbWl4KC1jYW1lcmFOZWFyRmFyLngsIC1jYW1lcmFOZWFyRmFyLnksIGNlbnRlckRlcHRoKTs=',
    'dmVjMyB2aWV3UG9zaXRpb24gPSBnZXRWaWV3UG9zaXRpb25Gcm9tVmlld1oodlV2LCBjZW50ZXJWaWV3RGVwdGgpOw==',
    'ZmxvYXQgb2NjbHVzaW9uID0gZ2V0T2NjbHVzaW9uKCB2aWV3UG9zaXRpb24gKS5yOw==',
    'ZmxvYXQgcHJldk9jY2x1c2lvblN1bSA9IHRleHR1cmUyRCh0QU9TdW1QcmV2aW91cywgdlV2KS5yOw==',
    'ZmxvYXQgZmluYWxPY2NsdXNpb24gPSBtaXgocHJldk9jY2x1c2lvblN1bSwgb2NjbHVzaW9uLCAxLi9zYW9EYXRhLncpOw==',
    'Z2xfRnJhZ0NvbG9yLmdiYSA9IHBhY2tGbG9hdFRvUkdCKCBjZW50ZXJEZXB0aCApOw==',
    'Z2xfRnJhZ0NvbG9yLnIgPSBjbGFtcChmaW5hbE9jY2x1c2lvbiwgMC4sIDEuKTs=',
    'U0FPU2hhZGVy',
    'YXNzaWdu',
    'dW5pZm9ybSB2ZWMyIHNhb0JpYXNFcHNpbG9uOw==',
    'Y29uc3QgZmxvYXQgSU5WX05VTV9TQU1QTEVTID0gMS4wIC8gZmxvYXQoIE5VTV9TQU1QTEVTICk7',
    'ZmxvYXQgZ2V0Vmlld1pGcm9tTkRDWiggY29uc3QgaW4gZmxvYXQgZGVwdGggKSB7',
    'cmV0dXJuIHBlcnNwZWN0aXZlRGVwdGhUb1ZpZXdaKCBkZXB0aCwgY2FtZXJhTmVhckZhci54LCBjYW1lcmFOZWFyRmFyLnkgKTs=',
    'cmV0dXJuIG9ydGhvZ3JhcGhpY0RlcHRoVG9WaWV3WiggZGVwdGgsIGNhbWVyYU5lYXJGYXIueCwgY2FtZXJhTmVhckZhci55ICk7',
    'ZmxvYXQgcmFuZG9tMyh2ZWMzIHYpIHsg',
    'diAgPSBmcmFjdCh2ICogNDQzLjg5NzUpOw==',
    'diArPSBkb3Qodiwgdi55enggKyAxOS4xOSk7',
    'cmV0dXJuIGZyYWN0KCh2LnggKyB2LnkpICogdi56KTs=',
    'dmVjMyBnZXRQb3NpdGlvbkZyb21PZmZzZXQoY29uc3QgaW4gdmVjMiB1diwgY29uc3QgaW4gdmVjMiBvZmZzZXQsIGNvbnN0IGluIGZsb2F0IHNjcmVlblNwYWNlUmFkaXVzKSB7',
    'dmVjMiB1dk9mZnNldCA9IHV2ICsgZmxvb3Ioc2NyZWVuU3BhY2VSYWRpdXMgKiBvZmZzZXQpL3NpemU7',
    'ZmxvYXQgZCA9IGRlY29kZURlcHRoKHV2T2Zmc2V0KTs=',
    'ZmxvYXQgY2VudGVyVmlld1ogPSBnZXRWaWV3WkZyb21ORENaKCBkICk7',
    'cmV0dXJuIGdldFZpZXdQb3NpdGlvbkZyb21WaWV3WiggdXZPZmZzZXQsIGNlbnRlclZpZXdaICk7',
    'ZCA9IG1peCgtY2FtZXJhTmVhckZhci54LCAtY2FtZXJhTmVhckZhci55LCBkKTs=',
    'cmV0dXJuIGdldFZpZXdQb3NpdGlvbkZyb21WaWV3Wih1dk9mZnNldCwgZCk7',
    'ZmxvYXQgZ2V0T2NjbHVzaW9uKGNvbnN0IGluIHZlYzIgdXYsIGNvbnN0IGluIGludCBpZCwgY29uc3QgaW4gZmxvYXQgcmFuZG9tQW5nbGUsIGNvbnN0IGluIGZsb2F0IG9jY2x1c2lvblNwaGVyZVJhZGl1cywgY29uc3QgaW4gdmVjMyBjZW50ZXJQb3NpdGlvbiwgY29uc3QgaW4gdmVjMyBjZW50ZXJOb3JtYWwpIHs=',
    'ZmxvYXQgc2NyZWVuU3BhY2VSYWRpdXMgPSAoZmxvYXQoaWQpICsgbW9kKHJhbmRvbUFuZ2xlLCAxLikgKyAwLjUpICogSU5WX05VTV9TQU1QTEVTOyA=',
    'ZmxvYXQgYW5nbGUgPSBzY3JlZW5TcGFjZVJhZGl1cyAqIChmbG9hdChOVU1fU1BJUkFMX1RVUk5TKSAqIDYuMjgpICsgcmFuZG9tQW5nbGU7IA==',
    'c2NyZWVuU3BhY2VSYWRpdXMgPSAoc2NyZWVuU3BhY2VSYWRpdXMgKiBvY2NsdXNpb25TcGhlcmVSYWRpdXMpOw==',
    'dmVjMiBvZmZzZXQgPSB2ZWMyKGNvcyhhbmdsZSksIHNpbihhbmdsZSkpOw==',
    'dmVjMyBzYW1wbGVQb3NpdGlvbiA9IGdldFBvc2l0aW9uRnJvbU9mZnNldCh1diwgb2Zmc2V0LCBzY3JlZW5TcGFjZVJhZGl1cyk7',
    'ZmxvYXQgYW8gPSBtYXgoICggZG90KCBjZW50ZXJOb3JtYWwsIGRpcmVjdGlvbiApICsgY2VudGVyUG9zaXRpb24ueiAqIHNhb0JpYXNFcHNpbG9uLnggKSAvICggZDIgKyBzYW9CaWFzRXBzaWxvbi55ICksIDAuMCApOw==',
    'cmV0dXJuIGFvOw==',
    'ZmxvYXQgY2VudGVyVmlld1ogPSBnZXRWaWV3WkZyb21ORENaKCBjZW50ZXJEZXB0aCApOw==',
    'ZmxvYXQgY2VudGVyVmlld1ogPSBtaXgoLWNhbWVyYU5lYXJGYXIueCwgLWNhbWVyYU5lYXJGYXIueSwgY2VudGVyRGVwdGgpOw==',
    'dmVjMyBjZW50ZXJQb3NpdGlvbiA9IGdldFZpZXdQb3NpdGlvbkZyb21WaWV3WiggdlV2LCBjZW50ZXJWaWV3WiApOw==',
    'dmVjMyBjZW50ZXJOb3JtYWwgPSBnZXRWaWV3Tm9ybWFsKHZVdik7',
    'ZmxvYXQgb2NjbHVzaW9uU3BoZXJlU2NyZWVuUmFkaXVzID0gMjAwLiAqIHNhb0RhdGEuei8gKC1jZW50ZXJQb3NpdGlvbi56KTs=',
    'aWYoIG9jY2x1c2lvblNwaGVyZVNjcmVlblJhZGl1cyA8IDEuICkgew==',
    'ZmxvYXQgcmFuZG9tQW5nbGUgPSA2LjIgKiByYW5kb20zKCB2ZWMzKCB2VXYsIHNhb0RhdGEudyAqIDAuMSApICk7',
    'ZmxvYXQgc3VtID0gMC4wOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDAsIHJhbmRvbUFuZ2xlLCBvY2NsdXNpb25TcGhlcmVTY3JlZW5SYWRpdXMsIGNlbnRlclBvc2l0aW9uLCBjZW50ZXJOb3JtYWwpOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDEsIHJhbmRvbUFuZ2xlLCBvY2NsdXNpb25TcGhlcmVTY3JlZW5SYWRpdXMsIGNlbnRlclBvc2l0aW9uLCBjZW50ZXJOb3JtYWwpOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDIsIHJhbmRvbUFuZ2xlLCBvY2NsdXNpb25TcGhlcmVTY3JlZW5SYWRpdXMsIGNlbnRlclBvc2l0aW9uLCBjZW50ZXJOb3JtYWwpOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDMsIHJhbmRvbUFuZ2xlLCBvY2NsdXNpb25TcGhlcmVTY3JlZW5SYWRpdXMsIGNlbnRlclBvc2l0aW9uLCBjZW50ZXJOb3JtYWwpOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDQsIHJhbmRvbUFuZ2xlLCBvY2NsdXNpb25TcGhlcmVTY3JlZW5SYWRpdXMsIGNlbnRlclBvc2l0aW9uLCBjZW50ZXJOb3JtYWwpOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDUsIHJhbmRvbUFuZ2xlLCBvY2NsdXNpb25TcGhlcmVTY3JlZW5SYWRpdXMsIGNlbnRlclBvc2l0aW9uLCBjZW50ZXJOb3JtYWwpOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDYsIHJhbmRvbUFuZ2xlLCBvY2NsdXNpb25TcGhlcmVTY3JlZW5SYWRpdXMsIGNlbnRlclBvc2l0aW9uLCBjZW50ZXJOb3JtYWwpOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDcsIHJhbmRvbUFuZ2xlLCBvY2NsdXNpb25TcGhlcmVTY3JlZW5SYWRpdXMsIGNlbnRlclBvc2l0aW9uLCBjZW50ZXJOb3JtYWwpOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDgsIHJhbmRvbUFuZ2xlLCBvY2NsdXNpb25TcGhlcmVTY3JlZW5SYWRpdXMsIGNlbnRlclBvc2l0aW9uLCBjZW50ZXJOb3JtYWwpOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDksIHJhbmRvbUFuZ2xlLCBvY2NsdXNpb25TcGhlcmVTY3JlZW5SYWRpdXMsIGNlbnRlclBvc2l0aW9uLCBjZW50ZXJOb3JtYWwpOw==',
    'c3VtICs9IGdldE9jY2x1c2lvbih2VXYsIDEwLCByYW5kb21BbmdsZSwgb2NjbHVzaW9uU3BoZXJlU2NyZWVuUmFkaXVzLCBjZW50ZXJQb3NpdGlvbiwgY2VudGVyTm9ybWFsKTs=',
    'ZmxvYXQgYW9WYWx1ZSA9IHN1bSAqIHNhb0RhdGEueSAqIElOVl9OVU1fU0FNUExFUzs=',
    'Z2xfRnJhZ0NvbG9yLnIgPSBtYXgoIGFvVmFsdWUsIDAuMCApOw==',
    'cmVjZWl2ZVNoYWRvdw==',
    'b2xkVmlzaWJpbGl0eQ==',
    'c2hhZG93TWFwUmVzb2x1dGlvbg==',
    'c2hhZG93UmFkaXVz',
    'c2hhZG93UXVhbGl0eQ==',
    'c2hhZG93Qmlhc011bHRpcGxpZXI=',
    'c2lkZQ==',
    'RnJvbnRTaWRl',
    'bmVhclBsYW5l',
    'ZmFyUGxhbmU=',
    'UGVyc3BlY3RpdmVDYW1lcmE=',
    'c2hhZG93UmVjaWV2ZXJCQm94',
    'bGF5ZXJz',
    'bWFzaw==',
    'c2hhZG93QWNjdW11bGF0aW9uQnVmZmVy',
    'Zmlyc3RGcmFtZVNoYWRvd0J1ZmZlcg==',
    'c2hhZG93QnVmZmVyU2l6ZQ==',
    'QWNjdW11bGF0aXZlU2hhZG93c1NoYWRlcg==',
    'c2hhZG93RGF0YQ==',
    'U0hBRE9XX1FVQUxJVFk=',
    'bWF0cml4V29ybGRJbnZlcnNl',
    'bXVsdGlwbHk=',
    'c2hhZG93TWF0cml4',
    'dnBsUG9zaXRpb24=',
    'YWRkU2NhbGVkVmVjdG9y',
    'bG9va0F0',
    'c2V0Rk9W',
    'c2V0U2hhZG93UmVjaWV2ZXJCQm94',
    'dXBkYXRlUHJvamVjdGlvbk1hdHJpeA==',
    'dmFyeWluZyB2ZWMzIHZpZXdOb3JtYWw7',
    'dmFyeWluZyB2ZWMzIGxpZ2h0VmVjdG9yOw==',
    'dmFyeWluZyB2ZWM0IHNoYWRvd0Nvb3JkOw==',
    'dW5pZm9ybSB2ZWMzIHZwbFBvc2l0aW9uOw==',
    'dW5pZm9ybSBtYXQ0IHNoYWRvd01hdHJpeDs=',
    'dW5pZm9ybSBmbG9hdCBub3JtYWxCaWFzOw==',
    'dmVjNCB3b3JsZFBvc2l0aW9uID0gbW9kZWxNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7',
    'dmlld05vcm1hbCA9IG5vcm1hbGl6ZShub3JtYWxNYXRyaXggKiBub3JtYWwpOw==',
    'dmVjMyB2cGxQb3NpdGlvbkV5ZVNwYWNlID0gKHZpZXdNYXRyaXggKiB2ZWM0KHZwbFBvc2l0aW9uLCAxLjApKS54eXo7',
    'bGlnaHRWZWN0b3IgPSB2cGxQb3NpdGlvbkV5ZVNwYWNlIC0gKG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKSkueHl6Ow==',
    'bGlnaHRWZWN0b3IgPSBub3JtYWxpemUobGlnaHRWZWN0b3IpOw==',
    'c2hhZG93Q29vcmQgPSBzaGFkb3dNYXRyaXggKiB3b3JsZFBvc2l0aW9uOw==',
    'ZmxvYXQgbkRvdEwgPSBjbGFtcCggZG90KGxpZ2h0VmVjdG9yLCB2aWV3Tm9ybWFsKSwgMC4wLCAxLjApOw==',
    'd29ybGRQb3NpdGlvbi54eXogKz0gbm9ybWFsaXplKChtb2RlbE1hdHJpeCAqIHZlYzQoIG5vcm1hbCwgMC4wICkpLnh5eikgKiAwLjAyICogbm9ybWFsQmlhcyAqIHBvdyggMS4wIC0gIG5Eb3RMICogbkRvdEwsIDQuKTs=',
    'c2hhZG93Q29vcmQueHkgPSAoc2hhZG93TWF0cml4ICogd29ybGRQb3NpdGlvbikueHk7',
    'dW5pZm9ybSB2ZWMyIHNoYWRvd0J1ZmZlclNpemU7',
    'dW5pZm9ybSB2ZWMyIHNoYWRvd01hcFJlc29sdXRpb247',
    'dW5pZm9ybSBzYW1wbGVyMkQgc2hhZG93TWFwOw==',
    'dW5pZm9ybSB2ZWM0IHNoYWRvd0RhdGE7',
    'ZmxvYXQgdGV4dHVyZTJEQ29tcGFyZSggc2FtcGxlcjJEIGRlcHRocywgdmVjMiB1diwgZmxvYXQgY29tcGFyZSApIHs=',
    'ZmxvYXQgc2hhZG93RGVwdGggPSB1bnBhY2tSR0JBVG9EZXB0aCggdGV4dHVyZTJEKCBkZXB0aHMsIHV2ICkgKTs=',
    'ZmxvYXQgbkRvdEwgPSBjbGFtcCggZG90KG5vcm1hbGl6ZShsaWdodFZlY3RvciksIG5vcm1hbGl6ZSh2aWV3Tm9ybWFsKSksIDAuMCwgMS4wKTs=',
    'ZmxvYXQgc2hhZG93RGVwdGggPSBwb3cyKHVucGFja1JHQkFUb0RlcHRoKHRleHR1cmUyRCggZGVwdGhzLCB1diApKSkgKyAwLjAxICogc2hhZG93RGF0YS56Ow==',
    'c2hhZG93RGVwdGggPSBzaGFkb3dEZXB0aCAqICggY2FtZXJhTmVhckZhci55IC0gY2FtZXJhTmVhckZhci54ICkgKyBjYW1lcmFOZWFyRmFyLng7',
    'cmV0dXJuIHN0ZXAoIGNvbXBhcmUsIHNoYWRvd0RlcHRoICk7',
    'ZmxvYXQgdGV4dHVyZTJEU2hhZG93TGVycCggc2FtcGxlcjJEIGRlcHRocywgdmVjMiBzaXplLCB2ZWMyIHV2LCBmbG9hdCBjb21wYXJlICkgew==',
    'Y29uc3QgdmVjMiBvZmZzZXQgPSB2ZWMyKCAwLjAsIDEuMCApOw==',
    'dmVjMiB0ZXhlbFNpemUgPSB2ZWMyKCAxLjAgKSAvIHNpemU7',
    'dmVjMiBjZW50cm9pZFVWID0gZmxvb3IoIHV2ICogc2l6ZSArIDAuNSApIC8gc2l6ZTs=',
    'ZmxvYXQgbGIgPSB0ZXh0dXJlMkRDb21wYXJlKCBkZXB0aHMsIGNlbnRyb2lkVVYgKyB0ZXhlbFNpemUgKiBvZmZzZXQueHgsIGNvbXBhcmUgKTs=',
    'ZmxvYXQgbHQgPSB0ZXh0dXJlMkRDb21wYXJlKCBkZXB0aHMsIGNlbnRyb2lkVVYgKyB0ZXhlbFNpemUgKiBvZmZzZXQueHksIGNvbXBhcmUgKTs=',
    'ZmxvYXQgcmIgPSB0ZXh0dXJlMkRDb21wYXJlKCBkZXB0aHMsIGNlbnRyb2lkVVYgKyB0ZXhlbFNpemUgKiBvZmZzZXQueXgsIGNvbXBhcmUgKTs=',
    'ZmxvYXQgcnQgPSB0ZXh0dXJlMkRDb21wYXJlKCBkZXB0aHMsIGNlbnRyb2lkVVYgKyB0ZXhlbFNpemUgKiBvZmZzZXQueXksIGNvbXBhcmUgKTs=',
    'dmVjMiBmID0gZnJhY3QoIHV2ICogc2l6ZSArIDAuNSApOw==',
    'ZmxvYXQgYSA9IG1peCggbGIsIGx0LCBmLnkgKTs=',
    'ZmxvYXQgYiA9IG1peCggcmIsIHJ0LCBmLnkgKTs=',
    'ZmxvYXQgYyA9IG1peCggYSwgYiwgZi54ICk7',
    'cmV0dXJuIGM7',
    'ZmxvYXQgc2hhZG93VmFsdWUgPSAxLjA7',
    'ZmxvYXQgc2hhZG93UmFkaXVzID0gc2hhZG93RGF0YS55Ow==',
    'ZmxvYXQgc2hhZG93Qmlhc011bHRpcGxpZXIgPSBzaGFkb3dEYXRhLno7',
    'ZmxvYXQgbkRvdEwgPSBjbGFtcCggZG90KGxpZ2h0VmVjdG9yLCBub3JtYWxpemUodmlld05vcm1hbCkpLCAwLjAsIDEuMCk7',
    'ZmxvYXQgc2hhZG93QmlhcyA9IDAuMDIgKiAgc3FydCggMS4wIC0gIG5Eb3RMICogbkRvdEwpIC8gY2xhbXAobkRvdEwsIDAuMDAwNiwgIDEuMCk7',
    'c2hhZG93QmlhcyA9IGNsYW1wKHNoYWRvd0JpYXMsIDAuMDAwMSwgIDAuMDAwMykgKiBzaGFkb3dCaWFzTXVsdGlwbGllcjs=',
    'dmVjMyBzaGFkb3dDb29yZE5EQyA9IHNoYWRvd0Nvb3JkLnh5ei9zaGFkb3dDb29yZC53Ow==',
    'c2hhZG93Q29vcmROREMueiAtPSBzaGFkb3dCaWFzOw==',
    'ZmxvYXQgbGluZWFyRGVwdGggPSBzaGFkb3dDb29yZC56ICsgMi4wKmNhbWVyYU5lYXJGYXIueSpjYW1lcmFOZWFyRmFyLngvKGNhbWVyYU5lYXJGYXIueSAtIGNhbWVyYU5lYXJGYXIueCk7',
    'bGluZWFyRGVwdGggKj0gLSgoY2FtZXJhTmVhckZhci55IC0gY2FtZXJhTmVhckZhci54KS8oY2FtZXJhTmVhckZhci55ICsgY2FtZXJhTmVhckZhci54KSk7',
    'bGluZWFyRGVwdGggPSAtbGluZWFyRGVwdGg7',
    'YnZlYzQgaW5GcnVzdHVtVmVjID0gYnZlYzQgKCBzaGFkb3dDb29yZE5EQy54ID49IDAuMCwgc2hhZG93Q29vcmROREMueCA8PSAxLjAsIHNoYWRvd0Nvb3JkTkRDLnkgPj0gMC4wLCBzaGFkb3dDb29yZE5EQy55IDw9IDEuMCApOw==',
    'Ym9vbCBpbkZydXN0dW0gPSBhbGwoIGluRnJ1c3R1bVZlYyApOw==',
    'YnZlYzIgZnJ1c3R1bVRlc3RWZWMgPSBidmVjMiggaW5GcnVzdHVtLCBzaGFkb3dDb29yZE5EQy56IDw9IDEuMCApOw==',
    'Ym9vbCBmcnVzdHVtVGVzdCA9IGFsbCggZnJ1c3R1bVRlc3RWZWMgKTs=',
    'c2hhZG93Q29vcmROREMueiA9IGxpbmVhckRlcHRoOw==',
    'aWYoZnJ1c3R1bVRlc3QpIHs=',
    'I2lmIFNIQURPV19RVUFMSVRZID09IDA=',
    'c2hhZG93VmFsdWUgPSB0ZXh0dXJlMkRDb21wYXJlKHNoYWRvd01hcCwgc2hhZG93Q29vcmROREMueHksIHNoYWRvd0Nvb3JkTkRDLnopOw==',
    'I2VsaWYgU0hBRE9XX1FVQUxJVFkgPT0gMQ==',
    'dmVjMiB0ZXhlbFNpemUgPSB2ZWMyKCAxLjAgKSAvIHNoYWRvd01hcFJlc29sdXRpb247',
    'ZmxvYXQgZHgwID0gLSB0ZXhlbFNpemUueCAqIHNoYWRvd1JhZGl1czs=',
    'ZmxvYXQgZHkwID0gLSB0ZXhlbFNpemUueSAqIHNoYWRvd1JhZGl1czs=',
    'ZmxvYXQgZHgxID0gKyB0ZXhlbFNpemUueCAqIHNoYWRvd1JhZGl1czs=',
    'ZmxvYXQgZHkxID0gKyB0ZXhlbFNpemUueSAqIHNoYWRvd1JhZGl1czs=',
    'ZmxvYXQgdGhldGEgPSByYW5kKCBzaGFkb3dDb29yZC54eSApICogUEkyOw==',
    'ZmxvYXQgc25UaGV0YSA9IHNpbih0aGV0YSk7',
    'ZmxvYXQgY3NUaGV0YSA9IGNvcyh0aGV0YSk7',
    'bWF0MiByYW5kb21Sb3RhdGlvbk1hdHJpeCA9IG1hdDIoY3NUaGV0YSwgc25UaGV0YSwgLXNuVGhldGEsIGNzVGhldGEpOw==',
    'c2hhZG93VmFsdWUgPSAo',
    'dGV4dHVyZTJEQ29tcGFyZSggc2hhZG93TWFwLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgwLCBkeTAgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEQ29tcGFyZSggc2hhZG93TWFwLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggMC4wLCBkeTAgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEQ29tcGFyZSggc2hhZG93TWFwLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgxLCBkeTAgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEQ29tcGFyZSggc2hhZG93TWFwLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgwLCAwLjAgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEQ29tcGFyZSggc2hhZG93TWFwLCBzaGFkb3dDb29yZE5EQy54eSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEQ29tcGFyZSggc2hhZG93TWFwLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgxLCAwLjAgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEQ29tcGFyZSggc2hhZG93TWFwLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgwLCBkeTEgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEQ29tcGFyZSggc2hhZG93TWFwLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggMC4wLCBkeTEgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEQ29tcGFyZSggc2hhZG93TWFwLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgxLCBkeTEgKSwgc2hhZG93Q29vcmROREMueiAp',
    'KSAqICggMS4wIC8gOS4wICk7',
    'I2VsaWYgU0hBRE9XX1FVQUxJVFkgPT0gMg==',
    'c2hhZG93VmFsdWUgPSAoIA==',
    'dGV4dHVyZTJEU2hhZG93TGVycCggc2hhZG93TWFwLCBzaGFkb3dNYXBSZXNvbHV0aW9uLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgwLCBkeTAgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEU2hhZG93TGVycCggc2hhZG93TWFwLCBzaGFkb3dNYXBSZXNvbHV0aW9uLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggMC4wLCBkeTAgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEU2hhZG93TGVycCggc2hhZG93TWFwLCBzaGFkb3dNYXBSZXNvbHV0aW9uLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgxLCBkeTAgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEU2hhZG93TGVycCggc2hhZG93TWFwLCBzaGFkb3dNYXBSZXNvbHV0aW9uLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgwLCAwLjAgKSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEU2hhZG93TGVycCggc2hhZG93TWFwLCBzaGFkb3dNYXBSZXNvbHV0aW9uLCBzaGFkb3dDb29yZE5EQy54eSwgc2hhZG93Q29vcmROREMueiApICsg',
    'dGV4dHVyZTJEU2hhZG93TGVycCggc2hhZG93TWFwLCBzaGFkb3dNYXBSZXNvbHV0aW9uLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgxLCAwLjAgKSwgc2hhZG93Q29vcmROREMueiApICs=',
    'dGV4dHVyZTJEU2hhZG93TGVycCggc2hhZG93TWFwLCBzaGFkb3dNYXBSZXNvbHV0aW9uLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgwLCBkeTEgKSwgc2hhZG93Q29vcmROREMueiApICs=',
    'dGV4dHVyZTJEU2hhZG93TGVycCggc2hhZG93TWFwLCBzaGFkb3dNYXBSZXNvbHV0aW9uLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggMC4wLCBkeTEgKSwgc2hhZG93Q29vcmROREMueiApICs=',
    'dGV4dHVyZTJEU2hhZG93TGVycCggc2hhZG93TWFwLCBzaGFkb3dNYXBSZXNvbHV0aW9uLCBzaGFkb3dDb29yZE5EQy54eSArIHJhbmRvbVJvdGF0aW9uTWF0cml4ICogdmVjMiggZHgxLCBkeTEgKSwgc2hhZG93Q29vcmROREMueiAp',
    'ZmxvYXQgcHJldmlvdXNBY2N1bXVsYXRpb24gPSB1bnBhY2tSR0JBVG9EZXB0aCh0ZXh0dXJlMkQoIHNoYWRvd0FjY3VtdWxhdGlvbkJ1ZmZlciwgZ2xfRnJhZ0Nvb3JkLnh5L3NoYWRvd0J1ZmZlclNpemUgKSk7',
    'ZmxvYXQgdCA9IHNoYWRvd0RhdGEudy9zaGFkb3dEYXRhLng7',
    'ZmxvYXQgc2hhZG93QWNjdW11bGF0aW9uID0gbWl4KHByZXZpb3VzQWNjdW11bGF0aW9uLCBzaGFkb3dWYWx1ZSwgdCk7',
    'Z2xfRnJhZ0NvbG9yID0gcGFja0RlcHRoVG9SR0JBKHNoYWRvd0FjY3VtdWxhdGlvbik7',
    'bnVtU2FtcGxlc1BlckZyYW1l',
    'ZGFya25lc3M=',
    'ZmFsbG9mZg==',
    'b25Db21wbGV0ZQ==',
    'b25Qcm9ncmVzcw==',
    'Ym91bmRpbmdSYWRpdXM=',
    'UGxhbmVCdWZmZXJHZW9tZXRyeQ==',
    'cm90YXRpb24=',
    'Z2V0U2hhZG93UGxhbmU=',
    'ZXhwYW5kQnlPYmplY3Q=',
    'U3BoZXJl',
    'Z2V0Qm91bmRpbmdTcGhlcmU=',
    'cmFkaXVz',
    'c2NhbGU=',
    'bGVmdA==',
    'cmlnaHQ=',
    'Ym90dG9t',
    'dG9w',
    'Qmx1clNoYWRlcg==',
    'U29mdFNoYWRvd1BsYW5lU2hhZGVy',
    'bGlnaHRWZWN0b3I=',
    'd2VpZ2h0U3Vt',
    'Ly9saWdodFZlY3RvciA9IHZwbFBvc2l0aW9uRXllU3BhY2UgLSAobW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApKS54eXo7',
    'Ly9saWdodFZlY3RvciA9IG5vcm1hbGl6ZShsaWdodFZlY3Rvcik7',
    'Ly8gbkRvdEwgPSBjbGFtcCggZG90KGxpZ2h0VmVjdG9yLCB2aWV3Tm9ybWFsKSwgMC4wLCAxLjApOw==',
    'Ly93b3JsZFBvc2l0aW9uLnh5eiArPSBub3JtYWxpemUoKG1vZGVsTWF0cml4ICogdmVjNCggbm9ybWFsLCAwLjAgKSkueHl6KSAqIDAuMDIgKiBub3JtYWxCaWFzICogcG93KCAxLjAgLSAgbkRvdEwgKiBuRG90TCwgNC4pOw==',
    'Ly9zaGFkb3dDb29yZC54eSA9IChzaGFkb3dNYXRyaXggKiB3b3JsZFBvc2l0aW9uKS54eTs=',
    'Ly9nbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7',
    'Z2xfUG9zaXRpb24gPSB2ZWM0KCAyLiAqIHV2LnggLSAxLiwgMi4gKiB1di55IC0gMS4sIDAuLCAxLjAgKTs=',
    'dW5pZm9ybSB2ZWMzIGxpZ2h0VmVjdG9yOw==',
    'dW5pZm9ybSBmbG9hdCB3ZWlnaHRTdW07',
    'dmVjMyBzaGFkb3dDb29yZE5EQyA9IHNoYWRvd0Nvb3JkLnh5ejsvLy9zaGFkb3dDb29yZC53Ow==',
    'ZmxvYXQgbGluZWFyRGVwdGggPSBzaGFkb3dDb29yZC56ICsgKGNhbWVyYU5lYXJGYXIueSArIGNhbWVyYU5lYXJGYXIueCkvKGNhbWVyYU5lYXJGYXIueSAtIGNhbWVyYU5lYXJGYXIueCk7',
    'bGluZWFyRGVwdGggKj0gLShjYW1lcmFOZWFyRmFyLnkgLSBjYW1lcmFOZWFyRmFyLngpICogMC41Ow==',
    'aWYoc2hhZG93RGF0YS54ID09IDEuKSB7',
    'cHJldmlvdXNBY2N1bXVsYXRpb24gPSAwLjs=',
    'ZmxvYXQgc2hhZG93QWNjdW11bGF0aW9uID0gcHJldmlvdXNBY2N1bXVsYXRpb24gKyBzaGFkb3dWYWx1ZSAqIHdlaWdodFN1bTsvL21peChwcmV2aW91c0FjY3VtdWxhdGlvbiwgc2hhZG93VmFsdWUsIDEuL3NoYWRvd0RhdGEueCk7',
    'dW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7',
    'dW5pZm9ybSBmbG9hdCBzdGVwOw==',
    'dmVjMiB1dkRlbHRhID0gc3RlcCAqIGRpcmVjdGlvbiAvIHNpemU7',
    'Ly9zdW0gKz0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgdlV2IC0gMy4gKiB1dkRlbHRhICkgKiAwLjA5MTg7',
    'Ly9zdW0gKz0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgdlV2IC0gMi4gKiB1dkRlbHRhICkgKiAwLjI7',
    'c3VtICs9IHVucGFja1JHQkFUb0RlcHRoKHRleHR1cmUyRCggdERpZmZ1c2UsIHZVdiAtIDEuICogdXZEZWx0YSApKSAqIDAuMzMzMzs=',
    'c3VtICs9IHVucGFja1JHQkFUb0RlcHRoKHRleHR1cmUyRCggdERpZmZ1c2UsIHZlYzIoIHZVdi54LCB2VXYueSApICkpICogMC4zMzMzOw==',
    'c3VtICs9IHVucGFja1JHQkFUb0RlcHRoKHRleHR1cmUyRCggdERpZmZ1c2UsIHZVdiArIDEuICogdXZEZWx0YSApKSAqIDAuMzMzMzs=',
    'Ly9zdW0gKz0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgdlV2ICsgMi4gKiB1dkRlbHRhICkgKiAwLjI7',
    'Ly9zdW0gKz0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgdlV2ICsgMy4gKiB1dkRlbHRhICkgKiAwLjA5MTg7',
    'Z2xfRnJhZ0NvbG9yID0gcGFja0RlcHRoVG9SR0JBKHN1bSk7Ly90ZXh0dXJlMkQoIHREaWZmdXNlLCB2ZWMyKCB2VXYueCwgdlV2LnkgKSApOw==',
    'Z2V0UHJvdG90eXBlT2Y=',
    'U3VwZXJTYW1wbGVBQVNoYWRlcg==',
    'cGluZ3BvbmdSVA==',
    'dEN1cnJlbnQ=',
    'dFN1bVByZXZpb3Vz',
    'YWNjSW5kZXg=',
    'UGFzcw==',
    'dmFyeWluZyB2ZWMyIHZVdjsgICAgdm9pZCBtYWluKCkgeyAgICAgIHZVdiA9IHV2OyAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTsgICAgfQ==',
    'dmFyeWluZyB2ZWMyIHZVdjsgICAgdW5pZm9ybSBzYW1wbGVyMkQgdEN1cnJlbnQ7ICAgIHVuaWZvcm0gc2FtcGxlcjJEIHRTdW1QcmV2aW91czsgICAgdW5pZm9ybSBmbG9hdCBhY2NJbmRleDsgICAgdm9pZCBtYWluKCkgeyAgICAgIHZlYzQgY3VycmVudENvbG9yID0gdGV4dHVyZTJEKHRDdXJyZW50LCB2VXYpOyAgICAgIHZlYzQgcHJldmlvdXNTdW0gPSB0ZXh0dXJlMkQodFN1bVByZXZpb3VzLCB2VXYpOyAgICAgIGdsX0ZyYWdDb2xvciA9IG1peChwcmV2aW91c1N1bSwgY3VycmVudENvbG9yLCAxLi9hY2NJbmRleCk7ICAgIH0gICAg',
    'VGVtcG9yYWxBQVNoYWRlcg==',
    'bXVsdGlwbHlNYXRyaWNlcw==',
    'Y3VycmVudFJU',
    'cHJldmlvdXNSVA==',
    'Y3VycmVudFByb2plY3Rpb25WaWV3TWF0cml4',
    'bGFzdFByb2plY3Rpb25WaWV3TWF0cml4',
    'SW52ZXJzZVZpZXdNYXRyaXg=',
    'dGV4dHVyZVNpemU=',
    'dmFyeWluZyB2ZWMyIHZVdjsgICAgICAgIHZvaWQgbWFpbigpIHsgICAgICAgICAgdlV2ID0gdXY7ICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTsgICAgICAgIH0=',
    'dW5pZm9ybSBzYW1wbGVyMkQgY3VycmVudFJUOw==',
    'dW5pZm9ybSBzYW1wbGVyMkQgcHJldmlvdXNSVDs=',
    'dW5pZm9ybSB2ZWMyIHRleHR1cmVTaXplOw==',
    'dW5pZm9ybSBtYXQ0IGxhc3RQcm9qZWN0aW9uVmlld01hdHJpeDs=',
    'dW5pZm9ybSBtYXQ0IGN1cnJlbnRQcm9qZWN0aW9uVmlld01hdHJpeDs=',
    'dW5pZm9ybSBtYXQ0IEludmVyc2VWaWV3TWF0cml4Ow==',
    'dW5pZm9ybSB2ZWMyIGppdHRlclNhbXBsZTs=',
    'dW5pZm9ybSB2ZWMyIGZlZWRCYWNrOw==',
    'ZmxvYXQgdW5wYWNrMTYodmVjMiB2YWx1ZSkgew==',
    'I2lmIERFUFRIX1BBQ0tJTkdfTU9ERSA9PSAx',
    'cmV0dXJuIHVucGFja1JHQkFUb0RlcHRoKCB0ZXh0dXJlMkQoIHREZXB0aCwgdXYgKSApOw==',
    'cmV0dXJuIHBvdzIodW5wYWNrUkdCQVRvRGVwdGgodGV4dHVyZTJEKCB0RGVwdGgsIHV2ICkpKTs=',
    'I2VsaWYgREVQVEhfUEFDS0lOR19NT0RFID09IDI=',
    'cmV0dXJuIHBvdzIodW5wYWNrMTYodGV4dHVyZTJEKCB0RGVwdGgsIHV2ICkueHkpKTs=',
    'cmV0dXJuIHBvdzIodW5wYWNrMTYoIHRleHR1cmUyRCggdERlcHRoLCB1diApLnh5ICkpOw==',
    'cmV0dXJuIHRleHR1cmUyRCggdERlcHRoLCB1diApLng7',
    'ZmxvYXQgZ2V0Vmlld1ooIGNvbnN0IGluIGZsb2F0IGRlcHRoICkgew==',
    'CSNpZiBQRVJTUEVDVElWRV9DQU1FUkEgPT0gMQ==',
    'CXJldHVybiBwZXJzcGVjdGl2ZURlcHRoVG9WaWV3WiggZGVwdGgsIGNhbWVyYU5lYXJGYXIueCwgY2FtZXJhTmVhckZhci55ICk7',
    'CSNlbHNl',
    'CXJldHVybiBvcnRob0RlcHRoVG9WaWV3WiggZGVwdGgsIGNhbWVyYU5lYXJGYXIueCwgY2FtZXJhTmVhckZhci55ICk7',
    'CSNlbmRpZg==',
    'dmVjMyBmaW5kX2Nsb3Nlc3RfZnJhZ21lbnRfM3gzKGNvbnN0IGluIHZlYzIgdXYpIHsg',
    'Y29uc3QgdmVjMyBvZmZzZXQgPSB2ZWMzKC0xLjAsIDEuMCwgMC4wKTs=',
    'dmVjMiB0ZXhlbFNpemUgPSAxLjAvdGV4dHVyZVNpemU7IA==',
    'dmVjMyBkdHIgPSB2ZWMzKC0xLCAxLCBkZWNvZGVEZXB0aCggdXYgKyBvZmZzZXQueXggKiB0ZXhlbFNpemUpICk7IA==',
    'dmVjMyBkdGMgPSB2ZWMzKCAwLCAxLCBkZWNvZGVEZXB0aCggdXYgKyBvZmZzZXQuenggKiB0ZXhlbFNpemUpICk7',
    'dmVjMyBkdGwgPSB2ZWMzKCAxLCAxLCBkZWNvZGVEZXB0aCggdXYgKyBvZmZzZXQueHggKiB0ZXhlbFNpemUpICk7',
    'dmVjMyBkbWwgPSB2ZWMzKC0xLCAwLCBkZWNvZGVEZXB0aCggdXYgKyBvZmZzZXQueXogKiB0ZXhlbFNpemUpICk7',
    'dmVjMyBkbWMgPSB2ZWMzKCAwLCAwLCBkZWNvZGVEZXB0aCggdXYgKSApOw==',
    'dmVjMyBkbXIgPSB2ZWMzKCAxLCAwLCBkZWNvZGVEZXB0aCggdXYgKyBvZmZzZXQueHogKiB0ZXhlbFNpemUpICk7',
    'dmVjMyBkYmwgPSB2ZWMzKC0xLCAtMSwgZGVjb2RlRGVwdGgoIHV2ICsgb2Zmc2V0Lnl5ICogdGV4ZWxTaXplKSApOw==',
    'dmVjMyBkYmMgPSB2ZWMzKCAwLCAtMSwgZGVjb2RlRGVwdGgoIHV2ICsgb2Zmc2V0Lnp5ICogdGV4ZWxTaXplKSApOw==',
    'dmVjMyBkYnIgPSB2ZWMzKCAxLCAtMSwgZGVjb2RlRGVwdGgoIHV2ICsgb2Zmc2V0Lnh5ICogdGV4ZWxTaXplKSApOw==',
    'dmVjMyBkbWluID0gZHRsOw==',
    'aWYgKCBkbWluLnogPiBkdGMueiApIGRtaW4gPSBkdGM7',
    'aWYgKCBkbWluLnogPiBkdHIueiApIGRtaW4gPSBkdHI7',
    'aWYgKCBkbWluLnogPiBkbWwueiApIGRtaW4gPSBkbWw7',
    'aWYgKCBkbWluLnogPiBkbWMueiApIGRtaW4gPSBkbWM7',
    'aWYgKCBkbWluLnogPiBkbXIueiApIGRtaW4gPSBkbXI7',
    'aWYgKCBkbWluLnogPiBkYmwueiApIGRtaW4gPSBkYmw7',
    'aWYgKCBkbWluLnogPiBkYmMueiApIGRtaW4gPSBkYmM7',
    'aWYgKCBkbWluLnogPiBkYnIueiApIGRtaW4gPSBkYnI7',
    'cmV0dXJuIHZlYzModXYgKyB0ZXhlbFNpemUueHkgKiBkbWluLnh5LCBkbWluLnopOw==',
    'dmVjMyBmaW5kX2Nsb3Nlc3RfZnJhZ21lbnRfNXRhcChjb25zdCBpbiB2ZWMyIHV2KSA=',
    'dmVjMiBvZmZzZXQgPSB2ZWMyKDEuMCwgLTEuMCk7',
    'dmVjMyBkdGwgPSB2ZWMzKC0xLCAxLCBkZWNvZGVEZXB0aCggdXYgKyBvZmZzZXQueXggKiB0ZXhlbFNpemUpICk7IA==',
    'dmVjMyBkdHIgPSB2ZWMzKCAxLCAxLCBkZWNvZGVEZXB0aCggdXYgKyBvZmZzZXQueHggKiB0ZXhlbFNpemUpICk7',
    'dmVjMyBkbWMgPSB2ZWMzKCAwLCAwLCBkZWNvZGVEZXB0aCggdXYpICk7',
    'cmV0dXJuIHZlYzModXYgKyBkbWluLnh5ICogdGV4ZWxTaXplLCBkbWluLnopOw==',
    'dmVjNCBjbGlwX2FhYmIoY29uc3QgaW4gdmVjNCBhYWJiX21pbiwgY29uc3QgaW4gdmVjNCBhYWJiX21heCwgdmVjNCBwICk=',
    'Y29uc3QgZmxvYXQgRkxUX0VQUyA9IDFlLTg7',
    'dmVjNCBwX2NsaXAgPSAwLjUgKiAoYWFiYl9tYXggKyBhYWJiX21pbik7IA==',
    'dmVjNCBlX2NsaXAgPSAwLjUgKiAoYWFiYl9tYXggLSBhYWJiX21pbikgKyBGTFRfRVBTOyA=',
    'dmVjNCB2X2NsaXAgPSBwIC0gcF9jbGlwOw==',
    'dmVjNCB2X3VuaXQgPSBhYnModl9jbGlwIC8gZV9jbGlwKTs=',
    'ZmxvYXQgbWFfdW5pdCA9IG1heCh2X3VuaXQueCwgbWF4KHZfdW5pdC55LCB2X3VuaXQueikpOw==',
    'aWYgKG1hX3VuaXQgPiAxLjApIA==',
    'cmV0dXJuIHBfY2xpcCArIHZfY2xpcCAvIG1hX3VuaXQ7',
    'ZWxzZSA=',
    'cmV0dXJuIHA7',
    'dmVjMiBjb21wdXRlU2NyZWVuU3BhY2VWZWxvY2l0eShjb25zdCBpbiB2ZWMzIHdvcmxkUG9zaXRpb24pIHs=',
    'dmVjNCBjdXJyZW50UG9zaXRpb25DbGlwID0gY3VycmVudFByb2plY3Rpb25WaWV3TWF0cml4ICogdmVjNCh3b3JsZFBvc2l0aW9uLCAxLjApOw==',
    'dmVjNCBwcmV2UG9zaXRpb25DbGlwID0gbGFzdFByb2plY3Rpb25WaWV3TWF0cml4ICogdmVjNCh3b3JsZFBvc2l0aW9uLCAxLjApOw==',
    'dmVjMiBjdXJyZW50UG9zaXRpb25OREMgPSBjdXJyZW50UG9zaXRpb25DbGlwLnh5IC8gY3VycmVudFBvc2l0aW9uQ2xpcC53Ow==',
    'dmVjMiBwcmV2UG9zaXRpb25OREMgPSBwcmV2UG9zaXRpb25DbGlwLnh5IC8gcHJldlBvc2l0aW9uQ2xpcC53Ow==',
    'aWYocHJldlBvc2l0aW9uTkRDLnggPj0gMS4wIHx8IHByZXZQb3NpdGlvbk5EQy54IDw9IC0xLjAgfHwgcHJldlBvc2l0aW9uTkRDLnggPj0gMS4wIHx8IHByZXZQb3NpdGlvbk5EQy55IDw9IC0xLjApIHs=',
    'cmV0dXJuIHZlYzIoMC4wKTs=',
    'cmV0dXJuIDAuNSAqIChjdXJyZW50UG9zaXRpb25OREMgLSBwcmV2UG9zaXRpb25OREMpOw==',
    'dmVjNCBjb21wdXRlVEFBKGNvbnN0IGluIHZlYzIgdXYsIGNvbnN0IGluIHZlYzIgc2NyZWVuU3BhY2VWZWxvY2l0eSkgew==',
    'dmVjMiBqaXR0ZXJPZmZzZXQgPSBqaXR0ZXJTYW1wbGUvdGV4dHVyZVNpemU7',
    'dmVjMiB1dlVuSml0dGVyID0gdXY7',
    'dmVjNCBjdXJyZW50Q29sb3IgPSB0ZXh0dXJlMkQoY3VycmVudFJULCB1dlVuSml0dGVyKTs=',
    'dmVjNCBwcmV2aW91c0NvbG9yID0gdGV4dHVyZTJEKHByZXZpb3VzUlQsIHV2IC0gc2NyZWVuU3BhY2VWZWxvY2l0eSk7',
    'Y29uc3QgdmVjMyBvZmZzZXQgPSB2ZWMzKDEuLCAtMS4sIDAuKTs=',
    'dmVjMiB0ZXhlbFNpemUgPSAxLi90ZXh0dXJlU2l6ZTs=',
    'ZmxvYXQgdGV4ZWxTcGVlZCA9IGxlbmd0aCggc2NyZWVuU3BhY2VWZWxvY2l0eSApOw==',
    'dmVjNCB0bCA9IHRleHR1cmUyRChjdXJyZW50UlQsIHV2VW5KaXR0ZXIgKyBvZmZzZXQueXggKiB0ZXhlbFNpemUpOw==',
    'dmVjNCB0YyA9IHRleHR1cmUyRChjdXJyZW50UlQsIHV2VW5KaXR0ZXIgKyBvZmZzZXQuenggKiB0ZXhlbFNpemUpOw==',
    'dmVjNCB0ciA9IHRleHR1cmUyRChjdXJyZW50UlQsIHV2VW5KaXR0ZXIgKyBvZmZzZXQueHggKiB0ZXhlbFNpemUpOw==',
    'dmVjNCBtbCA9IHRleHR1cmUyRChjdXJyZW50UlQsIHV2VW5KaXR0ZXIgKyBvZmZzZXQueXogKiB0ZXhlbFNpemUpOw==',
    'dmVjNCBtYyA9IGN1cnJlbnRDb2xvcjs=',
    'dmVjNCBtciA9IHRleHR1cmUyRChjdXJyZW50UlQsIHV2VW5KaXR0ZXIgKyBvZmZzZXQueHogKiB0ZXhlbFNpemUpOw==',
    'dmVjNCBibCA9IHRleHR1cmUyRChjdXJyZW50UlQsIHV2VW5KaXR0ZXIgKyBvZmZzZXQueXkgKiB0ZXhlbFNpemUpOw==',
    'dmVjNCBiYyA9IHRleHR1cmUyRChjdXJyZW50UlQsIHV2VW5KaXR0ZXIgKyBvZmZzZXQuenkgKiB0ZXhlbFNpemUpOw==',
    'dmVjNCBiciA9IHRleHR1cmUyRChjdXJyZW50UlQsIHV2VW5KaXR0ZXIgKyBvZmZzZXQueHkgKiB0ZXhlbFNpemUpOw==',
    'dmVjNCBjb3JuZXJzID0gMi4wICogKHRyICsgYmwgKyBiciArIHRsKSAtIDIuMCAqIG1jOw==',
    'bWMgKz0gKG1jIC0gKGNvcm5lcnMgKiAwLjE2NjY2NykpICogMi43MTgyODIgKiAwLjM7',
    'bWMgPSBtYXgodmVjNCgwLjApLCBtYyk7',
    'dmVjNCBtaW41ID0gbWluKHRjLCBtaW4obWwsIG1pbihtYywgbWluKG1yLCBiYykpKSk7',
    'dmVjNCBtYXg1ID0gbWF4KHRjLCBtYXgobWwsIG1heChtYywgbWF4KG1yLCBiYykpKSk7',
    'dmVjNCBjbWluID0gbWluKG1pbjUsIG1pbih0bCwgbWluKHRyLCBtaW4oYmwsIGJyKSkpKTs=',
    'dmVjNCBjbWF4ID0gbWF4KG1pbjUsIG1heCh0bCwgbWF4KHRyLCBtYXgoYmwsIGJyKSkpKTs7',
    'Y21pbiA9IDAuNSAqIChjbWluICsgbWluNSk7',
    'Y21heCA9IDAuNSAqIChjbWF4ICsgbWF4NSk7',
    'cHJldmlvdXNDb2xvciA9IGNsaXBfYWFiYihjbWluLCBjbWF4LCBwcmV2aW91c0NvbG9yKTs=',
    'ZmxvYXQgbHVtMCA9IGxpbmVhclRvUmVsYXRpdmVMdW1pbmFuY2UoY3VycmVudENvbG9yLnJnYik7',
    'ZmxvYXQgbHVtMSA9IGxpbmVhclRvUmVsYXRpdmVMdW1pbmFuY2UocHJldmlvdXNDb2xvci5yZ2IpOw==',
    'ZmxvYXQgdW5iaWFzZWRfZGlmZiA9IGFicyhsdW0wIC0gbHVtMSkgLyBtYXgobHVtMCwgbWF4KGx1bTEsIDAuMikpOw==',
    'ZmxvYXQgdW5iaWFzZWRfd2VpZ2h0ID0gMS4wIC0gdW5iaWFzZWRfZGlmZjs=',
    'ZmxvYXQgdW5iaWFzZWRfd2VpZ2h0X3NxciA9IHVuYmlhc2VkX3dlaWdodCAqIHVuYmlhc2VkX3dlaWdodDs=',
    'ZmxvYXQga19mZWVkYmFjayA9IG1peChmZWVkQmFjay54LCBmZWVkQmFjay55LCB1bmJpYXNlZF93ZWlnaHRfc3FyKTs=',
    'cmV0dXJuIG1peChjdXJyZW50Q29sb3IsIHByZXZpb3VzQ29sb3IsIGtfZmVlZGJhY2spOw==',
    'dmVjMyBnZXRXb3JsZFBvc2l0aW9uRnJvbVZpZXdaKGNvbnN0IGluIHZlYzIgdXYsIGNvbnN0IGluIGZsb2F0IHZpZXdEZXB0aCkgew==',
    'cmV0dXJuIChJbnZlcnNlVmlld01hdHJpeCAqIHZlYzQoeGUsIHllLCB2aWV3RGVwdGgsIDEuKSkueHl6Ow==',
    'I2lmIFFVQUxJVFkgPT0gMQ==',
    'dmVjMyBjX2ZyYWcgPSBmaW5kX2Nsb3Nlc3RfZnJhZ21lbnRfM3gzKHZVdik7',
    'dmVjMyBjX2ZyYWcgPSBmaW5kX2Nsb3Nlc3RfZnJhZ21lbnRfNXRhcCh2VXYpOw==',
    'aWYoIGNfZnJhZy56ID49IDAuOTk5ICkgew==',
    'Z2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKGN1cnJlbnRSVCwgdlV2IC0gaml0dGVyT2Zmc2V0KTs=',
    'ZWxzZSB7',
    'ZmxvYXQgc2FtcGxlVmlld1ogPSBnZXRWaWV3WiggY19mcmFnLnogKTs=',
    'ZmxvYXQgc2FtcGxlVmlld1ogPSBtaXgoLWNhbWVyYU5lYXJGYXIueCwgLWNhbWVyYU5lYXJGYXIueSwgY19mcmFnLnopOw==',
    'dmVjMyB3b3JsZFBvc2l0aW9uID0gZ2V0V29ybGRQb3NpdGlvbkZyb21WaWV3WihjX2ZyYWcueHksIHNhbXBsZVZpZXdaKTs=',
    'dmVjMiBzY3JlZW5TcGFjZVZlbG9jaXR5ID0gY29tcHV0ZVNjcmVlblNwYWNlVmVsb2NpdHkod29ybGRQb3NpdGlvbik7',
    'Z2xfRnJhZ0NvbG9yID0gY29tcHV0ZVRBQSh2VXYsIHNjcmVlblNwYWNlVmVsb2NpdHkpOw==',
    'Ly9nbF9GcmFnQ29sb3IgPSB2ZWM0KDEwLiAqIGxlbmd0aChzY3JlZW5TcGFjZVZlbG9jaXR5KSk7',
    'Ymx1cktlcm5lbFNpemU=',
    'YmlsYXRlcmFsRmlsdGVyTWF0ZXJpYWw=',
    'U0FPQmlsYXRlcmFsRmlsdGVyU2hhZGVy',
    'S0VSTkVMX1NBTVBMRV9SQURJVVM=',
    'dE9jY2x1c2lvbkRlcHRo',
    'a2VybmVsRGlyZWN0aW9u',
    'dW5pZm9ybSBzYW1wbGVyMkQgdE9jY2x1c2lvbkRlcHRoOw==',
    'dW5pZm9ybSBmbG9hdCBlZGdlU2hhcnBuZXNzOw==',
    'dW5pZm9ybSB2ZWMyIGtlcm5lbERpcmVjdGlvbjs=',
    'dmVjMyB1bnBhY2tOb3JtYWwodmVjMiBlbmMpIHs=',
    'dmVjMyBnZXRWaWV3Tm9ybWFsKCBjb25zdCBpbiB2ZWMyIHV2ICkgew==',
    'cmV0dXJuIHVucGFja05vcm1hbCggdGV4dHVyZTJEKCB0Tm9ybWFsLCB1diApLnp3ICk7',
    'ZmxvYXQgbGluZWFyU3RlcChmbG9hdCBlZGdlMCwgZmxvYXQgZWRnZTEsIGZsb2F0IHZhbHVlKXs=',
    'ZmxvYXQgdW5wYWNrUkdCVG9GbG9hdChjb25zdCBpbiB2ZWMzIHgpIHs=',
    'Y29uc3QgdmVjMyBkZWNvZGUgPSAxLjAgLyB2ZWMzKDEuMCwgMjU1LjAsIDY1MDI1LjApOw==',
    'cmV0dXJuIGRvdCh4LCBkZWNvZGUpOw==',
    'dm9pZCBjYWxjdWxhdGVCaWxhdGVyYWxXZWlnaHQoIGNvbnN0IGluIHZlYzIgdXYsIGNvbnN0IGluIHZlYzMgY2VudHJlTm9ybWFsLCBjb25zdCBpbiBmbG9hdCBjZW50ZXJEZXB0aCw=',
    'Y29uc3QgaW4gZmxvYXQga2VybmVsV2VpZ2h0LCBpbm91dCBmbG9hdCB0b3RhbE9jY2x1c2lvbiwgaW5vdXQgZmxvYXQgdG90YWxCaWxhdGVyYWxXZWlnaHQgKSB7',
    'dmVjNCBhb0RlcHRoID0gdGV4dHVyZTJEKCB0T2NjbHVzaW9uRGVwdGgsIHV2ICk7',
    'ZmxvYXQgb2NjbHVzaW9uID0gYW9EZXB0aC5yOw==',
    'ZmxvYXQgZGVwdGggPSB1bnBhY2tSR0JUb0Zsb2F0KCBhb0RlcHRoLmdiYSApOw==',
    'aWYoIGRlcHRoID49ICggMS4wIC0gRVBTSUxPTiApICkgew==',
    'cmV0dXJuOw==',
    'dmVjMyBub3JtYWwgPSBnZXRWaWV3Tm9ybWFsKHV2KTs=',
    'ZGVwdGggPSAtZ2V0Vmlld1ooIGRlcHRoICk7',
    'ZGVwdGggPSBsaW5lYXJTdGVwKGNhbWVyYU5lYXJGYXIueCwgY2FtZXJhTmVhckZhci55LCBkZXB0aCk7',
    'ZmxvYXQgbm9ybWFsQ2xvc2VuZXNzID0gZG90KG5vcm1hbCwgY2VudHJlTm9ybWFsKTs=',
    'bm9ybWFsQ2xvc2VuZXNzICo9IG5vcm1hbENsb3NlbmVzczs=',
    'ZmxvYXQgbm9ybWFsRXJyb3IgPSAoMS4wIC0gbm9ybWFsQ2xvc2VuZXNzKSAqIDguOw==',
    'ZmxvYXQgbm9ybWFsV2VpZ2h0ID0gbWF4KCgxLjAgLSBub3JtYWxFcnJvciAqIGVkZ2VTaGFycG5lc3MpLCAwLjAwKTs=',
    'ZmxvYXQgZGVwdGhXZWlnaHQgPSBtYXgoMC4wLCAxLjAgLSBlZGdlU2hhcnBuZXNzICogNDAwMC4gKiBhYnMoZGVwdGggLSBjZW50ZXJEZXB0aCkpICoga2VybmVsV2VpZ2h0Ow==',
    'ZmxvYXQgYmlsYXRlcmFsV2VpZ2h0ID0gZGVwdGhXZWlnaHQgKiBub3JtYWxXZWlnaHQ7',
    'dG90YWxPY2NsdXNpb24gKz0gb2NjbHVzaW9uICogYmlsYXRlcmFsV2VpZ2h0Ow==',
    'dG90YWxCaWxhdGVyYWxXZWlnaHQgKz0gYmlsYXRlcmFsV2VpZ2h0Ow==',
    'dmVjNCBhb0RlcHRoID0gdGV4dHVyZTJEKCB0T2NjbHVzaW9uRGVwdGgsIHZVdiApOw==',
    'dmVjMyBjZW50cmVOb3JtYWwgPSBnZXRWaWV3Tm9ybWFsKHZVdik7',
    'ZmxvYXQgY2VudGVyVmlld1ogPSAtZ2V0Vmlld1ooIGRlcHRoICk7',
    'Y2VudGVyVmlld1ogPSBsaW5lYXJTdGVwKGNhbWVyYU5lYXJGYXIueCwgY2FtZXJhTmVhckZhci55LCBjZW50ZXJWaWV3Wik7',
    'ZmxvYXQgY2VudGVyVmlld1ogPSBkZXB0aDs=',
    'ZmxvYXQgZ2F1c3NpYW5XZWlnaHRzWzRdOw==',
    'Z2F1c3NpYW5XZWlnaHRzWzBdID0gMC4xNTMxNzA7',
    'Z2F1c3NpYW5XZWlnaHRzWzFdID0gMC4xNDQ4OTM7',
    'Z2F1c3NpYW5XZWlnaHRzWzJdID0gMC4xMjI2NDk7',
    'Z2F1c3NpYW5XZWlnaHRzWzNdID0gMC4wOTI5MDI7',
    'ZmxvYXQgdG90YWxCaWxhdGVyYWxXZWlnaHQgPSBnYXVzc2lhbldlaWdodHNbMF0gKyAwLjAzOw==',
    'ZmxvYXQgdG90YWxPY2NsdXNpb24gPSBvY2NsdXNpb24gKiB0b3RhbEJpbGF0ZXJhbFdlaWdodDs=',
    'dmVjMiB1dkRlbHRhID0gMi4wICoga2VybmVsRGlyZWN0aW9uIC8gc2l6ZTs=',
    'ZmxvYXQga2VybmVsV2VpZ2h0ID0gZ2F1c3NpYW5XZWlnaHRzWzFdICsgMC4wMzs=',
    'Y2FsY3VsYXRlQmlsYXRlcmFsV2VpZ2h0KCB2VXYgKyB1dkRlbHRhLCBjZW50cmVOb3JtYWwsIGNlbnRlclZpZXdaLCBrZXJuZWxXZWlnaHQsIHRvdGFsT2NjbHVzaW9uLCB0b3RhbEJpbGF0ZXJhbFdlaWdodCApOw==',
    'Y2FsY3VsYXRlQmlsYXRlcmFsV2VpZ2h0KCB2VXYgLSB1dkRlbHRhLCBjZW50cmVOb3JtYWwsIGNlbnRlclZpZXdaLCBrZXJuZWxXZWlnaHQsIHRvdGFsT2NjbHVzaW9uLCB0b3RhbEJpbGF0ZXJhbFdlaWdodCApOw==',
    'a2VybmVsV2VpZ2h0ID0gZ2F1c3NpYW5XZWlnaHRzWzJdICsgMC4wMzs=',
    'Y2FsY3VsYXRlQmlsYXRlcmFsV2VpZ2h0KCB2VXYgKyAyLiAqIHV2RGVsdGEsIGNlbnRyZU5vcm1hbCwgY2VudGVyVmlld1osIGtlcm5lbFdlaWdodCwgdG90YWxPY2NsdXNpb24sIHRvdGFsQmlsYXRlcmFsV2VpZ2h0ICk7',
    'Y2FsY3VsYXRlQmlsYXRlcmFsV2VpZ2h0KCB2VXYgLSAyLiAqIHV2RGVsdGEsIGNlbnRyZU5vcm1hbCwgY2VudGVyVmlld1osIGtlcm5lbFdlaWdodCwgdG90YWxPY2NsdXNpb24sIHRvdGFsQmlsYXRlcmFsV2VpZ2h0ICk7',
    'a2VybmVsV2VpZ2h0ID0gZ2F1c3NpYW5XZWlnaHRzWzNdICsgMC4wMzs=',
    'Y2FsY3VsYXRlQmlsYXRlcmFsV2VpZ2h0KCB2VXYgKyAzLiAqIHV2RGVsdGEsIGNlbnRyZU5vcm1hbCwgY2VudGVyVmlld1osIGtlcm5lbFdlaWdodCwgdG90YWxPY2NsdXNpb24sIHRvdGFsQmlsYXRlcmFsV2VpZ2h0ICk7',
    'Y2FsY3VsYXRlQmlsYXRlcmFsV2VpZ2h0KCB2VXYgLSAzLiAqIHV2RGVsdGEsIGNlbnRyZU5vcm1hbCwgY2VudGVyVmlld1osIGtlcm5lbFdlaWdodCwgdG90YWxPY2NsdXNpb24sIHRvdGFsQmlsYXRlcmFsV2VpZ2h0ICk7',
    'b2NjbHVzaW9uID0gdG90YWxPY2NsdXNpb24gLyB0b3RhbEJpbGF0ZXJhbFdlaWdodDs=',
    'Z2xfRnJhZ0NvbG9yID0gdmVjNCggb2NjbHVzaW9uLCBhb0RlcHRoLmdiYSApOw==',
    'c3RyZW5ndGg=',
    'dGhyZXNob2xk',
    'cmVzb2x1dGlvbg==',
    'cmVuZGVyVGFyZ2V0c0hvcml6b250YWw=',
    'cmVuZGVyVGFyZ2V0c1ZlcnRpY2Fs',
    'bk1pcHM=',
    'cm91bmQ=',
    'cmVuZGVyVGFyZ2V0QnJpZ2h0',
    'bmFtZQ==',
    'VW5yZWFsQmxvb21QYXNzLmJyaWdodA==',
    'VW5yZWFsQmxvb21QYXNzLmg=',
    'VW5yZWFsQmxvb21QYXNzLnY=',
    'Qmxvb21FeHRyYWN0U2hhZGVy',
    'Ymxvb21FeHRyYWN0VW5pZm9ybXM=',
    'Ymxvb21UaHJlc2hvbGQ=',
    'bWF0ZXJpYWxCbG9vbUV4dHJhY3Q=',
    'c2VwYXJhYmxlQmx1ck1hdGVyaWFscw==',
    'Z2V0U2VwZXJhYmxlQmx1ck1hdGVyaWFs',
    'Y29tcG9zaXRlTWF0ZXJpYWw=',
    'Z2V0Q29tcG9zaXRlTWF0ZXJpYWw=',
    'Ymx1clRleHR1cmUx',
    'Ymx1clRleHR1cmUy',
    'Ymx1clRleHR1cmUz',
    'Ymx1clRleHR1cmU0',
    'Ymx1clRleHR1cmU1',
    'Ymxvb21TdHJlbmd0aA==',
    'Ymxvb21SYWRpdXM=',
    'Ymxvb21GYWN0b3Jz',
    'Ymxvb21UaW50Q29sb3Jz',
    'Y29weVVuaWZvcm1z',
    'b3BhY2l0eQ==',
    'bWF0ZXJpYWxDb3B5',
    'QWRkaXRpdmVCbGVuZGluZw==',
    'b2xkQ2xlYXJDb2xvcg==',
    'b2xkQ2xlYXJBbHBoYQ==',
    'YmFzaWM=',
    'Y29udGV4dA==',
    'ZGlzYWJsZQ==',
    'U1RFTkNJTF9URVNU',
    'dENvbG9y',
    'Qmx1ckRpcmVjdGlvblg=',
    'Qmx1ckRpcmVjdGlvblk=',
    'dmFyeWluZyB2ZWMyIHZVdjsKCQkJCXZvaWQgbWFpbigpIHsKCQkJCQl2VXYgPSB1djsKCQkJCQlnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7CgkJCQl9',
    'I2luY2x1ZGUgPGNvbW1vbj4JCQkJdmFyeWluZyB2ZWMyIHZVdjsKCQkJCXVuaWZvcm0gc2FtcGxlcjJEIGNvbG9yVGV4dHVyZTsKCQkJCXVuaWZvcm0gdmVjMiB0ZXhTaXplOwkJCQl1bmlmb3JtIHZlYzIgZGlyZWN0aW9uOwkJCQkJCQkJZmxvYXQgZ2F1c3NpYW5QZGYoaW4gZmxvYXQgeCwgaW4gZmxvYXQgc2lnbWEpIHsJCQkJCXJldHVybiAwLjM5ODk0ICogZXhwKCAtMC41ICogeCAqIHgvKCBzaWdtYSAqIHNpZ21hKSkvc2lnbWE7CQkJCX0JCQkJdm9pZCBtYWluKCkgewoJCQkJCXZlYzIgaW52U2l6ZSA9IDEuMCAvIHRleFNpemU7CQkJCQlmbG9hdCBmU2lnbWEgPSBmbG9hdChTSUdNQSk7CQkJCQlmbG9hdCB3ZWlnaHRTdW0gPSBnYXVzc2lhblBkZigwLjAsIGZTaWdtYSk7CQkJCQl2ZWM0IGRpZmZ1c2VTdW0gPSB0ZXh0dXJlMkQoIGNvbG9yVGV4dHVyZSwgdlV2KSAqIHdlaWdodFN1bTsJCQkJCWZvciggaW50IGkgPSAxOyBpIDwgS0VSTkVMX1JBRElVUzsgaSArKyApIHsJCQkJCQlmbG9hdCB4ID0gZmxvYXQoaSk7CQkJCQkJZmxvYXQgdyA9IGdhdXNzaWFuUGRmKHgsIGZTaWdtYSk7CQkJCQkJdmVjMiB1dk9mZnNldCA9IGRpcmVjdGlvbiAqIGludlNpemUgKiB4OwkJCQkJCXZlYzQgc2FtcGxlMSA9IHRleHR1cmUyRCggY29sb3JUZXh0dXJlLCB2VXYgKyB1dk9mZnNldCk7CQkJCQkJdmVjNCBzYW1wbGUyID0gdGV4dHVyZTJEKCBjb2xvclRleHR1cmUsIHZVdiAtIHV2T2Zmc2V0KTsJCQkJCQlkaWZmdXNlU3VtICs9IChzYW1wbGUxICsgc2FtcGxlMikgKiB3OwkJCQkJCXdlaWdodFN1bSArPSAyLjAgKiB3OwkJCQkJfQkJCQkJZ2xfRnJhZ0NvbG9yID0gdmVjNChkaWZmdXNlU3VtL3dlaWdodFN1bSk7CgkJCQl9',
    'dmFyeWluZyB2ZWMyIHZVdjsJCQkJdW5pZm9ybSBzYW1wbGVyMkQgYmx1clRleHR1cmUxOwkJCQl1bmlmb3JtIHNhbXBsZXIyRCBibHVyVGV4dHVyZTI7CQkJCXVuaWZvcm0gc2FtcGxlcjJEIGJsdXJUZXh0dXJlMzsJCQkJdW5pZm9ybSBzYW1wbGVyMkQgYmx1clRleHR1cmU0OwkJCQl1bmlmb3JtIHNhbXBsZXIyRCBibHVyVGV4dHVyZTU7CQkJCXVuaWZvcm0gc2FtcGxlcjJEIGRpcnRUZXh0dXJlOwkJCQl1bmlmb3JtIGZsb2F0IGJsb29tU3RyZW5ndGg7CQkJCXVuaWZvcm0gZmxvYXQgYmxvb21SYWRpdXM7CQkJCXVuaWZvcm0gZmxvYXQgYmxvb21GYWN0b3JzW05VTV9NSVBTXTsJCQkJdW5pZm9ybSB2ZWMzIGJsb29tVGludENvbG9yc1tOVU1fTUlQU107CQkJCQkJCQlmbG9hdCBsZXJwQmxvb21GYWN0b3IoY29uc3QgaW4gZmxvYXQgZmFjdG9yKSB7IAkJCQkJZmxvYXQgbWlycm9yRmFjdG9yID0gMS4yIC0gZmFjdG9yOwkJCQkJcmV0dXJuIG1peChmYWN0b3IsIG1pcnJvckZhY3RvciwgYmxvb21SYWRpdXMpOwkJCQl9CQkJCQkJCQl2b2lkIG1haW4oKSB7CQkJCQlnbF9GcmFnQ29sb3IgPSBibG9vbVN0cmVuZ3RoICogKCBsZXJwQmxvb21GYWN0b3IoYmxvb21GYWN0b3JzWzBdKSAqIHZlYzQoYmxvb21UaW50Q29sb3JzWzBdLCAxLjApICogdGV4dHVyZTJEKGJsdXJUZXh0dXJlMSwgdlV2KSArIAkJCQkJCQkJCQkJCQkgbGVycEJsb29tRmFjdG9yKGJsb29tRmFjdG9yc1sxXSkgKiB2ZWM0KGJsb29tVGludENvbG9yc1sxXSwgMS4wKSAqIHRleHR1cmUyRChibHVyVGV4dHVyZTIsIHZVdikgKyAJCQkJCQkJCQkJCQkJIGxlcnBCbG9vbUZhY3RvcihibG9vbUZhY3RvcnNbMl0pICogdmVjNChibG9vbVRpbnRDb2xvcnNbMl0sIDEuMCkgKiB0ZXh0dXJlMkQoYmx1clRleHR1cmUzLCB2VXYpICsgCQkJCQkJCQkJCQkJCSBsZXJwQmxvb21GYWN0b3IoYmxvb21GYWN0b3JzWzNdKSAqIHZlYzQoYmxvb21UaW50Q29sb3JzWzNdLCAxLjApICogdGV4dHVyZTJEKGJsdXJUZXh0dXJlNCwgdlV2KSArIAkJCQkJCQkJCQkJCQkgbGVycEJsb29tRmFjdG9yKGJsb29tRmFjdG9yc1s0XSkgKiB2ZWM0KGJsb29tVGludENvbG9yc1s0XSwgMS4wKSAqIHRleHR1cmUyRChibHVyVGV4dHVyZTUsIHZVdikgKTsJCQkJfQ==',
    'dW5pZm9ybSBzYW1wbGVyMkQgdENvbG9yOw==',
    'dW5pZm9ybSBmbG9hdCBibG9vbVRocmVzaG9sZDs=',
    'dmVjNCB1bmNvZGVkRGVwdGggPSB0ZXh0dXJlMkQoIHREZXB0aCwgdXYgKTs=',
    'cmV0dXJuIHBvdyh1bnBhY2tSR0JBVG9EZXB0aCh1bmNvZGVkRGVwdGgpLCAyLik7',
    'cmV0dXJuIHVucGFja1JHQkFUb0RlcHRoKHVuY29kZWREZXB0aCApOw==',
    'cmV0dXJuIHBvdyh1bnBhY2sxNih1bmNvZGVkRGVwdGgueHkpLCAyLik7',
    'dmVjNCBjb2xvciA9IHRleHR1cmUyRCggdENvbG9yLCB2VXYgKTs=',
    'ZmxvYXQgZGVwdGggPSBkZWNvZGVEZXB0aCh2VXYpOw==',
    'Y29uc3QgdmVjMyBjID0gdmVjMyggMC4yOTksIDAuNTg3LCAwLjExNCApOw==',
    'ZmxvYXQgbHVtaW5hbmNlID0gZG90KCBjb2xvci54eXosIGMgKTs=',
    'ZmxvYXQgYWxwaGEgPSBzbW9vdGhzdGVwKCBibG9vbVRocmVzaG9sZCwgYmxvb21UaHJlc2hvbGQgKyAwLjAxLCBsdW1pbmFuY2UgKTs=',
    'YWxwaGEgPSBkZXB0aCA+IDEuIC0gMC4wMDEgPyAwLiA6IGFscGhhOw==',
    'Z2xfRnJhZ0NvbG9yID0gY29sb3IgKiBhbHBoYTs=',
    'bWF4VlBM',
    'UmF5Y2FzdGVy',
    'U3BoZXJlQnVmZmVyR2VvbWV0cnk=',
    'Z2V0VlBMQnVmZmVy',
    'Z2V0TnVtVlBM',
    'T2JqZWN0M0Q=',
    'bm93',
    'aW50ZXJzZWN0T2JqZWN0',
    'ZmFjZQ==',
    'bm9ybWFs',
    'Y29sb3I=',
    'UHJvY2Vzc2VkIFZQTCA=',
    'LCB0b29rIA==',
    'IG1zLiBUb3RhbCBWUExzIEdlbmVyYXRlZCA9IA==',
    'cmVwZWF0',
    'd3JhcFM=',
    'UmVwZWF0V3JhcHBpbmc=',
    'Q2xhbXBUb0VkZ2VXcmFwcGluZw==',
    'd3JhcFQ=',
    'YmJveA==',
    'bWluRGlzdGFuY2U=',
    'YWNjdW11bGF0aW9uQnVmZmVy',
    'Y3VycmVudEZyYW1lQ291bnQ=',
    'aW5kaXJlY3REaWZmdXNlQnVmZmVy',
    'VW5zaWduZWRCeXRlVHlwZQ==',
    'T0VTX3RleHR1cmVfaGFsZl9mbG9hdA==',
    'SGFsZkZsb2F0VHlwZQ==',
    'T0VTX3RleHR1cmVfZmxvYXQ=',
    'UkdCRm9ybWF0',
    'VlBMQWNjdW11bGF0aW9uU2hhZGVy',
    'VlBMX0NPVU5U',
    'dmlld1BvcnQ=',
    'ZGl0aGVyaW5n',
    'dnBsTGlnaHRz',
    'dmFyeWluZyB2ZWMzIHdvcmxkUG9zaXRpb247',
    'dmFyeWluZyB2ZWMzIHdvcmxkTm9ybWFsOw==',
    'ICAgd29ybGRQb3NpdGlvbiA9IChtb2RlbE1hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLnh5eiwgMS4wKSkueHl6Ow==',
    'ICAgd29ybGROb3JtYWwgPSAobW9kZWxNYXRyaXggKiB2ZWM0KG5vcm1hbCwgMC4wKSkueHl6Ow==',
    'ICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApOw==',
    'I2luY2x1ZGUgPGRpdGhlcmluZ19wYXJzX2ZyYWdtZW50Pg==',
    'dW5pZm9ybSB2ZWMyIHZpZXdQb3J0Ow==',
    'dW5pZm9ybSBzYW1wbGVyMkQgYWNjdW11bGF0aW9uQnVmZmVyOw==',
    'dW5pZm9ybSBmbG9hdCBjdXJyZW50RnJhbWVDb3VudDs=',
    'dW5pZm9ybSBmbG9hdCBtaW5EaXN0YW5jZTs=',
    'c3RydWN0IFZQTCB7',
    'ICAgdmVjMyBwb3NpdGlvbjs=',
    'ICAgdmVjMyBkaXJlY3Rpb247',
    'ICAgdmVjMyBpbnRlbnNpdHk7',
    'dW5pZm9ybSBWUEwgdnBsTGlnaHRzW1ZQTF9DT1VOVF07',
    'ZmxvYXQgZ2V0TGlnaHRJcnJhZGlhbmNlKGNvbnN0IGluIHZlYzMgbGlnaHRQb3MsIGNvbnN0IGluIHZlYzMgbGlnaHREaXIpIHs=',
    'dmVjMyBsaWdodFZlY3RvciA9IGxpZ2h0UG9zIC0gd29ybGRQb3NpdGlvbjs=',
    'dmVjMyBkaXJlY3Rpb24gPSBub3JtYWxpemUoIGxpZ2h0VmVjdG9yICk7',
    'ZmxvYXQgbGlnaHREaXN0YW5jZSA9IGxlbmd0aCggbGlnaHRWZWN0b3IgKTs=',
    'ZmxvYXQgZGlzdGFuY2VGYWxsb2ZmID0gMS4wIC9tYXgoIGxpZ2h0RGlzdGFuY2UgKiBsaWdodERpc3RhbmNlLCBtaW5EaXN0YW5jZSAqIG1pbkRpc3RhbmNlICk7',
    'ZmxvYXQgY3NUaGV0YV9pID0gZG90KCBkaXJlY3Rpb24sIC1saWdodERpciApOw==',
    'ZmxvYXQgY3NUaGV0YV9vID0gZG90KCBub3JtYWxpemUod29ybGROb3JtYWwpLCBkaXJlY3Rpb24gKTs=',
    'cmV0dXJuIG1heChjc1RoZXRhX2ksIDAuKSAqIG1heCggY3NUaGV0YV9vLCAwLjAgKSAqIGRpc3RhbmNlRmFsbG9mZiAvIFBJOw==',
    'dmVjMyBjb2xvclN1bSA9IHZlYzMoMC4wKTs=',
    'Zm9yKCBpbnQgaSA9IDA7IGkgPCBWUExfQ09VTlQ7IGkrKykgew==',
    'VlBMIHZwbCA9IHZwbExpZ2h0c1tpXTs=',
    'dmVjMyBsaWdodFBvc2l0aW9uID0gdnBsLnBvc2l0aW9uOw==',
    'dmVjMyBsaWdodERpcmVjdGlvbiA9IHZwbC5kaXJlY3Rpb247',
    'dmVjMyBsaWdodEludGVuc2l0eSA9IHZwbC5pbnRlbnNpdHk7',
    'dmVjMyBsaWdodENvbG9yID0gbGlnaHRJbnRlbnNpdHkgKiBnZXRMaWdodElycmFkaWFuY2UoIGxpZ2h0UG9zaXRpb24sIGxpZ2h0RGlyZWN0aW9uICk7',
    'Y29sb3JTdW0gKz0gbGlnaHRDb2xvcjs=',
    'dmVjMyBwcmV2aW91c0NvbG9yID0gdGV4dHVyZTJEKCBhY2N1bXVsYXRpb25CdWZmZXIsIGdsX0ZyYWdDb29yZC54eS92aWV3UG9ydCApLnJnYjs=',
    'aWYoIGN1cnJlbnRGcmFtZUNvdW50ID09IDEuICl7',
    'cHJldmlvdXNDb2xvciA9IHZlYzMoMC4pOw==',
    'dmVjMyBuZXdDb2xvciA9IHByZXZpb3VzQ29sb3IgKyBjb2xvclN1bTs=',
    'Z2xfRnJhZ0NvbG9yID0gdmVjNCggbmV3Q29sb3IgLCAxLjApOw==',
    'I2luY2x1ZGUgPGRpdGhlcmluZ19mcmFnbWVudD4='
];
var _0x1c11 = function (_0x420746, _0x26dd66) {
    _0x420746 = _0x420746 - 0x0;
    var _0x1c6de2 = _0xc111[_0x420746];
    if (_0x1c11['initialized'] === undefined) {
        (function () {
            var _0x20c171;
            try {
                var _0x420a95 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x20c171 = _0x420a95();
            } catch (_0x3357f0) {
                _0x20c171 = window;
            }
            var _0x4d6eed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x20c171['atob'] || (_0x20c171['atob'] = function (_0x42a718) {
                var _0x285720 = String(_0x42a718)['replace'](/=+$/, '');
                for (var _0x39bb90 = 0x0, _0x57a851, _0x3acf3c, _0xd9e2c0 = 0x0, _0x2e0d59 = ''; _0x3acf3c = _0x285720['charAt'](_0xd9e2c0++); ~_0x3acf3c && (_0x57a851 = _0x39bb90 % 0x4 ? _0x57a851 * 0x40 + _0x3acf3c : _0x3acf3c, _0x39bb90++ % 0x4) ? _0x2e0d59 += String['fromCharCode'](0xff & _0x57a851 >> (-0x2 * _0x39bb90 & 0x6)) : 0x0) {
                    _0x3acf3c = _0x4d6eed['indexOf'](_0x3acf3c);
                }
                return _0x2e0d59;
            });
        }());
        _0x1c11['base64DecodeUnicode'] = function (_0x1728ea) {
            var _0x37aeb7 = atob(_0x1728ea);
            var _0x1fc60c = [];
            for (var _0x4315c0 = 0x0, _0x3a5810 = _0x37aeb7['length']; _0x4315c0 < _0x3a5810; _0x4315c0++) {
                _0x1fc60c += '%' + ('00' + _0x37aeb7['charCodeAt'](_0x4315c0)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x1fc60c);
        };
        _0x1c11['data'] = {};
        _0x1c11['initialized'] = !![];
    }
    var _0x12e06f = _0x1c11['data'][_0x420746];
    if (_0x12e06f === undefined) {
        _0x1c6de2 = _0x1c11['base64DecodeUnicode'](_0x1c6de2);
        _0x1c11['data'][_0x420746] = _0x1c6de2;
    } else {
        _0x1c6de2 = _0x12e06f;
    }
    return _0x1c6de2;
};
var _createClass = function () {
    var _0x145fcb = function () {
        var _0x39a82c = !![];
        return function (_0x40ac22, _0x286cad) {
            var _0x457dbf = _0x39a82c ? function () {
                if (_0x286cad) {
                    var _0x4347ce = _0x286cad[_0x1c11('0x0')](_0x40ac22, arguments);
                    _0x286cad = null;
                    return _0x4347ce;
                }
            } : function () {
            };
            _0x39a82c = ![];
            return _0x457dbf;
        };
    }();
    var _0x47cf70 = _0x145fcb(this, function () {
        var _0x559f1f = function () {
        };
        var _0x38b04c;
        try {
            var _0xd01b6c = Function(_0x1c11('0x1') + _0x1c11('0x2') + ');');
            _0x38b04c = _0xd01b6c();
        } catch (_0x493ac8) {
            _0x38b04c = window;
        }
        if (!_0x38b04c[_0x1c11('0x3')]) {
            _0x38b04c[_0x1c11('0x3')] = function (_0x148da8) {
                var _0x197abd = {};
                _0x197abd[_0x1c11('0x4')] = _0x148da8;
                _0x197abd[_0x1c11('0x5')] = _0x148da8;
                _0x197abd[_0x1c11('0x6')] = _0x148da8;
                _0x197abd[_0x1c11('0x7')] = _0x148da8;
                _0x197abd[_0x1c11('0x8')] = _0x148da8;
                _0x197abd[_0x1c11('0x9')] = _0x148da8;
                _0x197abd[_0x1c11('0xa')] = _0x148da8;
                return _0x197abd;
            }(_0x559f1f);
        } else {
            _0x38b04c[_0x1c11('0x3')][_0x1c11('0x4')] = _0x559f1f;
            _0x38b04c[_0x1c11('0x3')][_0x1c11('0x5')] = _0x559f1f;
            _0x38b04c[_0x1c11('0x3')][_0x1c11('0x6')] = _0x559f1f;
            _0x38b04c[_0x1c11('0x3')][_0x1c11('0x7')] = _0x559f1f;
            _0x38b04c[_0x1c11('0x3')][_0x1c11('0x8')] = _0x559f1f;
            _0x38b04c[_0x1c11('0x3')][_0x1c11('0x9')] = _0x559f1f;
            _0x38b04c[_0x1c11('0x3')][_0x1c11('0xa')] = _0x559f1f;
        }
    });
    _0x47cf70();
    function _0x54b4ea(_0x31e2ea, _0x36d5e1) {
        for (var _0x5e4e96 = 0x0; _0x5e4e96 < _0x36d5e1[_0x1c11('0xb')]; _0x5e4e96++) {
            var _0x1bb187 = _0x36d5e1[_0x5e4e96];
            _0x1bb187[_0x1c11('0xc')] = _0x1bb187[_0x1c11('0xc')] || ![];
            _0x1bb187[_0x1c11('0xd')] = !![];
            if (_0x1c11('0xe') in _0x1bb187)
                _0x1bb187[_0x1c11('0xf')] = !![];
            Object[_0x1c11('0x10')](_0x31e2ea, _0x1bb187[_0x1c11('0x11')], _0x1bb187);
        }
    }
    return function (_0x28ac2c, _0x4b37cd, _0x151215) {
        if (_0x4b37cd)
            _0x54b4ea(_0x28ac2c[_0x1c11('0x12')], _0x4b37cd);
        if (_0x151215)
            _0x54b4ea(_0x28ac2c, _0x151215);
        return _0x28ac2c;
    };
}();
function _possibleConstructorReturn(_0x21e072, _0x26cbbf) {
    if (!_0x21e072) {
        throw new ReferenceError(_0x1c11('0x13'));
    }
    return _0x26cbbf && (typeof _0x26cbbf === _0x1c11('0x14') || typeof _0x26cbbf === _0x1c11('0x15')) ? _0x26cbbf : _0x21e072;
}
function _inherits(_0x438fd0, _0xd0cd2b) {
    if (typeof _0xd0cd2b !== _0x1c11('0x15') && _0xd0cd2b !== null) {
        throw new TypeError(_0x1c11('0x16') + typeof _0xd0cd2b);
    }
    _0x438fd0[_0x1c11('0x12')] = Object[_0x1c11('0x17')](_0xd0cd2b && _0xd0cd2b[_0x1c11('0x12')], {
        'constructor': {
            'value': _0x438fd0,
            'enumerable': ![],
            'writable': !![],
            'configurable': !![]
        }
    });
    if (_0xd0cd2b)
        Object[_0x1c11('0x18')] ? Object[_0x1c11('0x18')](_0x438fd0, _0xd0cd2b) : _0x438fd0[_0x1c11('0x19')] = _0xd0cd2b;
}
function _classCallCheck(_0x9e5fe4, _0x4b910f) {
    if (!(_0x9e5fe4 instanceof _0x4b910f)) {
        throw new TypeError(_0x1c11('0x1a'));
    }
}
var _Module = function _Module(_0x6bd57b) {
    var _0x2b93f6 = {};
    function _0x4adbe9(_0xf3e42d) {
        if (_0x2b93f6[_0xf3e42d])
            return _0x2b93f6[_0xf3e42d][_0x1c11('0x1b')];
        var _0x451b6e = _0x2b93f6[_0xf3e42d] = {
            'i': _0xf3e42d,
            'l': !0x1,
            'exports': {}
        };
        return _0x6bd57b[_0xf3e42d][_0x1c11('0x1c')](_0x451b6e[_0x1c11('0x1b')], _0x451b6e, _0x451b6e[_0x1c11('0x1b')], _0x4adbe9), _0x451b6e['l'] = !0x0, _0x451b6e[_0x1c11('0x1b')];
    }
    _0x4adbe9['m'] = _0x6bd57b;
    _0x4adbe9['c'] = _0x2b93f6;
    _0x4adbe9['d'] = function (_0x5775a7, _0x5cbce8, _0x363363) {
        _0x4adbe9['o'](_0x5775a7, _0x5cbce8) || Object[_0x1c11('0x10')](_0x5775a7, _0x5cbce8, {
            'configurable': !0x1,
            'enumerable': !0x0,
            'get': _0x363363
        });
    };
    _0x4adbe9['n'] = function (_0x52e73c) {
        var _0x413d4a = _0x52e73c && _0x52e73c[_0x1c11('0x1d')] ? function () {
            return _0x52e73c[_0x1c11('0x1e')];
        } : function () {
            return _0x52e73c;
        };
        return _0x4adbe9['d'](_0x413d4a, 'a', _0x413d4a), _0x413d4a;
    };
    _0x4adbe9['o'] = function (_0x1abf82, _0x3cfb8a) {
        return Object[_0x1c11('0x12')][_0x1c11('0x1f')][_0x1c11('0x1c')](_0x1abf82, _0x3cfb8a);
    };
    _0x4adbe9['p'] = '';
    _0x4adbe9(_0x4adbe9['s'] = 0x3);
};
var _args = [
    function (_0x1299aa, _0x54f56c, _0x530892) {
        function _0x109e29(_0x462cf4) {
            var _0x54f56c = Math[_0x1c11('0x20')](Math[_0x1c11('0x21')]() * _0x462cf4[_0x1c11('0xb')]), _0x530892 = _0x462cf4[_0x54f56c];
            return _0x462cf4[_0x1c11('0x22')](_0x54f56c, 0x1), _0x530892;
        }
        function _0x1fd769(_0x3573b5, _0x45be22, _0x22d991) {
            this[_0x1c11('0x23')] = _0x3573b5;
            this[_0x1c11('0x24')] = _0x45be22;
            this[_0x1c11('0x25')] = _0x22d991;
            this[_0x1c11('0x26')] = new Array(_0x3573b5);
            for (var _0x5a718f = 0x0; _0x5a718f < _0x3573b5; _0x5a718f++) {
                this[_0x1c11('0x26')][_0x5a718f] = new Array(_0x45be22);
            }
        }
        function _0x4b377e(_0xd3f010, _0x49f851) {
            var _0x530892 = _0x49f851 * (Math[_0x1c11('0x21')]() + 0x1), _0x130159 = 6.283185307178 * Math[_0x1c11('0x21')](), _0x71e59a = _0xd3f010['x'] + _0x530892 * Math[_0x1c11('0x27')](_0x130159), _0x3924dd = _0xd3f010['y'] + _0x530892 * Math[_0x1c11('0x28')](_0x130159);
            return new THREE[(_0x1c11('0x29'))](_0x71e59a, _0x3924dd);
        }
        _0x530892(0x2);
        _0x1fd769[_0x1c11('0x12')] = {
            'constructor': _0x1fd769,
            't': function _0x1299aa(_0xcb535f) {
                var _0x54f56c = Math[_0x1c11('0x20')](_0xcb535f['x'] / this[_0x1c11('0x25')]), _0x530892 = Math[_0x1c11('0x20')](_0xcb535f['y'] / this[_0x1c11('0x25')]);
                this[_0x1c11('0x26')][_0x54f56c][_0x530892] = _0xcb535f;
            },
            'h': function h(_0x34c574, _0x410315) {
                var _0x530892 = Math[_0x1c11('0x20')](_0x34c574['x'] / this[_0x1c11('0x25')]), _0x191f66 = Math[_0x1c11('0x20')](_0x34c574['y'] / this[_0x1c11('0x25')]);
                for (var _0x1a5069 = _0x530892 - 0x5; _0x1a5069 < _0x530892 + 0x5; _0x1a5069++) {
                    for (var _0x14b6a2 = _0x191f66 - 0x5; _0x14b6a2 < _0x191f66 + 0x5; _0x14b6a2++) {
                        if (_0x1a5069 >= 0x0 && _0x1a5069 < this[_0x1c11('0x23')] && _0x14b6a2 >= 0x0 && _0x14b6a2 < this[_0x1c11('0x24')]) {
                            var _0x5a9174 = this[_0x1c11('0x26')][_0x1a5069][_0x14b6a2];
                            var _0x2c1552 = 0x2540be400;
                            if (void 0x0 !== _0x5a9174 && (_0x2c1552 = _0x5a9174[_0x1c11('0x2a')](_0x34c574)), _0x2c1552 < _0x410315)
                                return !0x0;
                        }
                    }
                }
                return !0x1;
            }
        };
        _0x1299aa[_0x1c11('0x1b')] = (ELPIXEL[_0x1c11('0x2b')] = function (_0xf1e30e, _0x4cf597, _0x3e5539) {
            return (_0x4cf597 = _0x4cf597 || 0.47) * (0x1 - _0xf1e30e) + (_0x3e5539 = _0x3e5539 || 0x7) * _0xf1e30e;
        }, ELPIXEL[_0x1c11('0x2c')] = function () {
            return 0x1;
        }, ELPIXEL[_0x1c11('0x2d')] = function (_0x4cffe0) {
            var _0x54f56c = _0x4cffe0 * Math['PI'] / 0x2, _0x530892 = Math[_0x1c11('0x27')](_0x54f56c);
            return 0.47 * (0x1 - _0x530892) + 0x7 * _0x530892;
        }, ELPIXEL[_0x1c11('0x2e')] = function (_0x57b10a, _0x220d56, _0x18f90e, _0x24a59f) {
            _0x18f90e = _0x18f90e || ELPIXEL[_0x1c11('0x2c')];
            _0x24a59f = _0x24a59f || ELPIXEL[_0x1c11('0x2f')];
            if (_0x220d56 < 0x0)
                _0x220d56 = Math[_0x1c11('0x30')](_0x57b10a) / _0x57b10a;
            var _0x4325e3 = [], _0x2f4b81 = [], _0x2d0910 = _0x220d56 / Math[_0x1c11('0x30')](0x2), _0x3bf034 = new _0x1fd769(Math[_0x1c11('0x31')](0x1 / _0x2d0910), Math[_0x1c11('0x31')](0x1 / _0x2d0910), _0x2d0910), _0x1fc762 = new THREE[(_0x1c11('0x29'))](0.5, 0.5);
            var _0xc983a3 = !0x1;
            do {
                _0x1fc762['x'] = Math[_0x1c11('0x21')]();
                _0x1fc762['y'] = Math[_0x1c11('0x21')]();
                _0xc983a3 = _0x24a59f(_0x1fc762['x'], _0x1fc762['y']);
            } while (!_0xc983a3);
            for (_0x2f4b81[_0x1c11('0x32')](_0x1fc762), _0x4325e3[_0x1c11('0x32')](_0x1fc762), _0x3bf034['t'](_0x1fc762); 0x0 !== _0x2f4b81[_0x1c11('0xb')] && _0x4325e3[_0x1c11('0xb')] < _0x57b10a;) {
                var _0x262690 = _0x109e29(_0x2f4b81);
                for (var _0x46ee0e = 0x0; _0x46ee0e < 0x1e; _0x46ee0e++) {
                    var _0x2c3147 = _0x262690['x'] - 0.5, _0x487dd0 = _0x262690['y'] - 0.5, _0x4377b7 = _0x18f90e(Math[_0x1c11('0x30')](_0x2c3147 * _0x2c3147 + _0x487dd0 * _0x487dd0)), _0x3ca541 = _0x4b377e(_0x262690, _0x4377b7 * _0x220d56);
                    if (!_0x24a59f(_0x3ca541['x'], _0x3ca541['y']) || _0x3bf034['h'](_0x3ca541, _0x4377b7 * _0x220d56) || (_0x2f4b81[_0x1c11('0x32')](_0x3ca541), _0x4325e3[_0x1c11('0x32')](_0x3ca541), _0x3bf034['t'](_0x3ca541))) {
                    }
                    ;
                }
            }
            return _0x4325e3;
        });
    },
    function (_0x1b9f70, _0x3a78b1) {
        _0x1b9f70[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x33')] = {
            'uniforms': {
                'saoAccumulationBuffer': { 'value': null },
                'transition': { 'value': 0x0 }
            },
            'vertexShader': _0x1c11('0x34'),
            'fragmentShader': [
                _0x1c11('0x35'),
                _0x1c11('0x36'),
                _0x1c11('0x37'),
                _0x1c11('0x38'),
                _0x1c11('0x39'),
                _0x1c11('0x3a'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
        _0x1b9f70[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x3c')] = {
            'uniforms': {
                'shadowAccumulationBuffer': { 'value': null },
                'firstFrameShadowBuffer': { 'value': null },
                'transition': { 'value': 0x0 }
            },
            'vertexShader': _0x1c11('0x34'),
            'fragmentShader': [
                _0x1c11('0x3d'),
                _0x1c11('0x35'),
                _0x1c11('0x36'),
                _0x1c11('0x3e'),
                _0x1c11('0x3f'),
                _0x1c11('0x38'),
                _0x1c11('0x40'),
                _0x1c11('0x41'),
                _0x1c11('0x42'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
        _0x1b9f70[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x43')] = {
            'uniforms': {
                'shadowAccumulationBuffer': { 'value': null },
                'transition': { 'value': 0x0 },
                'shadowData': { 'value': new THREE[(_0x1c11('0x44'))](0x1, 0x2, 0x1) }
            },
            'vertexShader': _0x1c11('0x34'),
            'fragmentShader': [
                _0x1c11('0x3d'),
                _0x1c11('0x35'),
                _0x1c11('0x36'),
                _0x1c11('0x45'),
                _0x1c11('0x3e'),
                _0x1c11('0x38'),
                _0x1c11('0x41'),
                _0x1c11('0x46'),
                _0x1c11('0x47'),
                _0x1c11('0x48'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
    },
    function (_0x14d565, _0x4c7161) {
        function _0x5f3f05(_0xae8831) {
            return 0x0 == (_0xae8831 & _0xae8831 - 0x1) && 0x0 !== _0xae8831;
        }
        THREE[_0x1c11('0x49')][_0x1c11('0x4a')] = [
            _0x1c11('0x4b'),
            _0x1c11('0x4c'),
            _0x1c11('0x4d'),
            _0x1c11('0x4e'),
            _0x1c11('0x4f'),
            _0x1c11('0x50'),
            '}',
            _0x1c11('0x51'),
            _0x1c11('0x52'),
            _0x1c11('0x53'),
            '}',
            _0x1c11('0x54'),
            _0x1c11('0x55'),
            _0x1c11('0x56'),
            _0x1c11('0x57'),
            _0x1c11('0x58'),
            '}',
            _0x1c11('0x59'),
            _0x1c11('0x5a'),
            _0x1c11('0x5b'),
            _0x1c11('0x5c'),
            ');',
            '}',
            _0x1c11('0x5d'),
            _0x1c11('0x5e'),
            _0x1c11('0x5f'),
            _0x1c11('0x60'),
            _0x1c11('0x61'),
            _0x1c11('0x62'),
            '}',
            _0x1c11('0x63'),
            _0x1c11('0x64'),
            '}',
            _0x1c11('0x65'),
            _0x1c11('0x66'),
            _0x1c11('0x67'),
            _0x1c11('0x68'),
            _0x1c11('0x69'),
            _0x1c11('0x6a'),
            '}',
            _0x1c11('0x6b'),
            _0x1c11('0x6c'),
            _0x1c11('0x6d'),
            _0x1c11('0x6e'),
            _0x1c11('0x60'),
            _0x1c11('0x6f'),
            _0x1c11('0x62'),
            _0x1c11('0x70'),
            _0x1c11('0x71'),
            _0x1c11('0x72'),
            _0x1c11('0x73'),
            _0x1c11('0x74'),
            _0x1c11('0x60'),
            _0x1c11('0x75'),
            _0x1c11('0x62'),
            _0x1c11('0x60'),
            _0x1c11('0x76'),
            _0x1c11('0x62'),
            '}'
        ][_0x1c11('0x3b')]('\x0a');
        (function () {
            var _0x14d565 = THREE[_0x1c11('0x77')];
            ELPIXEL['u'] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](_0x14d565[_0x1c11('0x7a')]);
            ELPIXEL['v'] = new THREE[(_0x1c11('0x7b'))]({
                'uniforms': ELPIXEL['u'],
                'vertexShader': _0x14d565[_0x1c11('0x7c')],
                'fragmentShader': _0x14d565[_0x1c11('0x7d')]
            });
            ELPIXEL['R'] = new THREE[(_0x1c11('0x7e'))]();
            ELPIXEL['T'] = new THREE[(_0x1c11('0x7f'))](-0x1, 0x1, 0x1, -0x1, 0x0, 0x1);
            ELPIXEL[_0x1c11('0x80')] = new THREE[(_0x1c11('0x81'))](new THREE[(_0x1c11('0x82'))](0x2, 0x2), ELPIXEL['v']);
            ELPIXEL[_0x1c11('0x80')][_0x1c11('0x83')] = ![];
            ELPIXEL['R'][_0x1c11('0x84')](ELPIXEL[_0x1c11('0x80')]);
        }());
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x85')] = function (_0x3da020) {
            var _0x4c7161 = void 0x0, _0x51b33d = void 0x0, _0x4e0841 = _0x3da020[_0x1c11('0xb')];
            for (; 0x0 !== _0x4e0841;) {
                _0x51b33d = Math[_0x1c11('0x20')](Math[_0x1c11('0x21')]() * _0x4e0841);
                _0x4c7161 = _0x3da020[_0x4e0841 -= 0x1];
                _0x3da020[_0x4e0841] = _0x3da020[_0x51b33d];
                _0x3da020[_0x51b33d] = _0x4c7161;
            }
            return _0x3da020;
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x86')] = function (_0x3f5549, _0x2a54cd) {
            (_0x2a54cd = _0x2a54cd || {})[_0x1c11('0x87')] = _0x2a54cd[_0x1c11('0x87')] || THREE[_0x1c11('0x88')];
            _0x2a54cd[_0x1c11('0x89')] = _0x2a54cd[_0x1c11('0x89')] || THREE[_0x1c11('0x8a')];
            _0x2a54cd[_0x1c11('0x8b')] = _0x2a54cd[_0x1c11('0x8b')] || THREE[_0x1c11('0x8c')];
            _0x2a54cd[_0x1c11('0x8d')] = _0x2a54cd[_0x1c11('0x8d')] || THREE[_0x1c11('0x8c')];
            var _0x1aa82a = new Float32Array(0x2 * _0x3f5549[_0x1c11('0xb')]);
            for (var _0x50d4ce = 0x0; _0x50d4ce < 0x2 * _0x3f5549[_0x1c11('0xb')]; _0x50d4ce += 0x2) {
                _0x1aa82a[_0x50d4ce] = _0x3f5549[_0x50d4ce / 0x2]['x'] - 0.5;
                _0x1aa82a[_0x50d4ce + 0x1] = _0x3f5549[_0x50d4ce / 0x2]['y'] - 0.5;
            }
            var _0x4b502a = new THREE[(_0x1c11('0x8e'))](_0x1aa82a, _0x3f5549[_0x1c11('0xb')], 0x1);
            _0x4b502a[_0x1c11('0x89')] = _0x2a54cd[_0x1c11('0x89')];
            _0x4b502a[_0x1c11('0x87')] = _0x2a54cd[_0x1c11('0x87')];
            _0x4b502a[_0x1c11('0x8b')] = _0x2a54cd[_0x1c11('0x8b')];
            _0x4b502a[_0x1c11('0x8d')] = _0x2a54cd[_0x1c11('0x8d')];
            _0x4b502a[_0x1c11('0x8f')] = ![];
            _0x4b502a[_0x1c11('0x90')] = !![];
            return _0x4b502a;
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x91')] = function (_0x34f00a, _0x33d90d, _0x365a42, _0x2597e4, _0x35fcea) {
            _0x35fcea = void 0x0 !== _0x35fcea ? _0x35fcea : 0.5;
            var _0x404b91 = (0x2 * _0x33d90d['x'] - 0x1) * _0x35fcea, _0x19365f = (0x2 * _0x33d90d['y'] - 0x1) * _0x35fcea;
            _0x34f00a[_0x1c11('0x92')](_0x365a42, _0x2597e4, _0x404b91, _0x19365f, _0x365a42, _0x2597e4);
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x2f')] = function (_0x738abe, _0x4eb13c, _0x21e4f6) {
            var _0x5c886c = _0x738abe - 0.5, _0x216f39 = _0x4eb13c - 0.5;
            return _0x5c886c * _0x5c886c + _0x216f39 * _0x216f39 <= (_0x21e4f6 = void 0x0 !== _0x21e4f6 ? _0x21e4f6 : 0.5) * _0x21e4f6;
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x93')] = function (_0x357eee, _0x487b7f, _0x59836a, _0x5b3bdd) {
            return _0x59836a = void 0x0 !== _0x59836a ? _0x59836a : 0x1, _0x5b3bdd = void 0x0 !== _0x5b3bdd ? _0x5b3bdd : 0x1, _0x357eee >= 0x0 && _0x487b7f >= 0x0 && _0x357eee <= _0x59836a && _0x487b7f <= _0x5b3bdd;
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x94')] = function (_0xbac1b4, _0x4d70c6, _0x212175, _0x4307d5) {
            _0x4307d5 = void 0x0 !== _0x4307d5 && _0x4307d5;
            ELPIXEL['u'][_0x1c11('0x95')][_0x1c11('0xe')] = _0x4d70c6;
            ELPIXEL[_0x1c11('0x80')][_0x1c11('0x96')] = ELPIXEL['v'];
            _0xbac1b4[_0x1c11('0x97')](ELPIXEL['R'], ELPIXEL['T'], _0x212175, _0x4307d5);
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x98')] = function (_0x9dfbc2, _0x454291, _0x254d66, _0x423456) {
            _0x423456 = void 0x0 !== _0x423456 && _0x423456;
            ELPIXEL[_0x1c11('0x80')][_0x1c11('0x96')] = _0x454291;
            _0x9dfbc2[_0x1c11('0x97')](ELPIXEL['R'], ELPIXEL['T'], _0x254d66, _0x423456);
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x99')] = function (_0x4b59c2, _0x3321e0, _0x37e643) {
            var _0x2e4e25 = void 0x0;
            _0x4b59c2[_0x1c11('0x9a')] ? _0x2e4e25 = _0x4b59c2 : (_0x2e4e25 = new THREE[(_0x1c11('0x9b'))]())[_0x1c11('0x9c')](_0x4b59c2);
            var _0x5484df = new THREE[(_0x1c11('0x44'))]();
            _0x2e4e25[_0x1c11('0x9d')](_0x5484df);
            var _0x38e355 = new THREE[(_0x1c11('0x44'))]();
            _0x2e4e25[_0x1c11('0x9e')](_0x38e355);
            var _0x49f192 = new THREE[(_0x1c11('0x44'))]();
            _0x49f192[_0x1c11('0x9f')](_0x38e355['x'] / 0x2, _0x38e355['y'] / 0x2, _0x38e355['z'] / 0x2);
            _0x49f192[_0x1c11('0x84')](_0x5484df);
            _0x49f192[_0x1c11('0xa0')](_0x3321e0);
            _0x49f192[_0x1c11('0xa1')]();
            var _0x2ac779 = _0x37e643[_0x1c11('0xa2')](_0x49f192);
            _0x49f192[_0x1c11('0x9f')](-_0x38e355['x'] / 0x2, _0x38e355['y'] / 0x2, _0x38e355['z'] / 0x2);
            _0x49f192[_0x1c11('0x84')](_0x5484df);
            _0x49f192[_0x1c11('0xa0')](_0x3321e0);
            _0x49f192[_0x1c11('0xa1')]();
            _0x2ac779 = Math[_0x1c11('0xa3')](_0x37e643[_0x1c11('0xa2')](_0x49f192), _0x2ac779);
            _0x49f192[_0x1c11('0x9f')](_0x38e355['x'] / 0x2, -_0x38e355['y'] / 0x2, _0x38e355['z'] / 0x2);
            _0x49f192[_0x1c11('0x84')](_0x5484df);
            _0x49f192[_0x1c11('0xa0')](_0x3321e0);
            _0x49f192[_0x1c11('0xa1')]();
            _0x2ac779 = Math[_0x1c11('0xa3')](_0x37e643[_0x1c11('0xa2')](_0x49f192), _0x2ac779);
            _0x49f192[_0x1c11('0x9f')](_0x38e355['x'] / 0x2, _0x38e355['y'] / 0x2, -_0x38e355['z'] / 0x2);
            _0x49f192[_0x1c11('0x84')](_0x5484df);
            _0x49f192[_0x1c11('0xa0')](_0x3321e0);
            _0x49f192[_0x1c11('0xa1')]();
            _0x2ac779 = Math[_0x1c11('0xa3')](_0x37e643[_0x1c11('0xa2')](_0x49f192), _0x2ac779);
            _0x49f192[_0x1c11('0x9f')](-_0x38e355['x'] / 0x2, -_0x38e355['y'] / 0x2, -_0x38e355['z'] / 0x2);
            _0x49f192[_0x1c11('0x84')](_0x5484df);
            _0x49f192[_0x1c11('0xa0')](_0x3321e0);
            _0x49f192[_0x1c11('0xa1')]();
            _0x2ac779 = Math[_0x1c11('0xa3')](_0x37e643[_0x1c11('0xa2')](_0x49f192), _0x2ac779);
            _0x49f192[_0x1c11('0x9f')](-_0x38e355['x'] / 0x2, _0x38e355['y'] / 0x2, -_0x38e355['z'] / 0x2);
            _0x49f192[_0x1c11('0x84')](_0x5484df);
            _0x49f192[_0x1c11('0xa0')](_0x3321e0);
            _0x49f192[_0x1c11('0xa1')]();
            _0x2ac779 = Math[_0x1c11('0xa3')](_0x37e643[_0x1c11('0xa2')](_0x49f192), _0x2ac779);
            _0x49f192[_0x1c11('0x9f')](_0x38e355['x'] / 0x2, -_0x38e355['y'] / 0x2, -_0x38e355['z'] / 0x2);
            _0x49f192[_0x1c11('0x84')](_0x5484df);
            _0x49f192[_0x1c11('0xa0')](_0x3321e0);
            _0x49f192[_0x1c11('0xa1')]();
            _0x2ac779 = Math[_0x1c11('0xa3')](_0x37e643[_0x1c11('0xa2')](_0x49f192), _0x2ac779);
            _0x49f192[_0x1c11('0x9f')](-_0x38e355['x'] / 0x2, -_0x38e355['y'] / 0x2, _0x38e355['z'] / 0x2);
            _0x49f192[_0x1c11('0x84')](_0x5484df);
            _0x49f192[_0x1c11('0xa0')](_0x3321e0);
            _0x49f192[_0x1c11('0xa1')]();
            _0x2ac779 = Math[_0x1c11('0xa3')](_0x37e643[_0x1c11('0xa2')](_0x49f192), _0x2ac779);
            return 0x2 * (0xb4 * Math[_0x1c11('0xa4')](_0x2ac779) / Math['PI']);
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xa5')] = function (_0x485653) {
            return _0x5f3f05(_0x485653[_0x1c11('0x23')]) && _0x5f3f05(_0x485653[_0x1c11('0x24')]);
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xa6')] = function (_0xc0c4e9) {
            function _0x56c255(_0x97e738) {
                return Math[_0x1c11('0xa7')](0x2, Math[_0x1c11('0x20')](Math[_0x1c11('0x4')](_0x97e738) / Math[_0x1c11('0xa8')]));
            }
            if (_0xc0c4e9 instanceof HTMLImageElement || _0xc0c4e9 instanceof HTMLCanvasElement || _0xc0c4e9 instanceof ImageBitmap) {
                var _0x4597e0 = document[_0x1c11('0xa9')](_0x1c11('0xaa'), _0x1c11('0xab'));
                return _0x4597e0[_0x1c11('0x23')] = _0x56c255(_0xc0c4e9[_0x1c11('0x23')]), _0x4597e0[_0x1c11('0x24')] = _0x56c255(_0xc0c4e9[_0x1c11('0x24')]), _0x4597e0[_0x1c11('0xac')]('2d')[_0x1c11('0xad')](_0xc0c4e9, 0x0, 0x0, _0x4597e0[_0x1c11('0x23')], _0x4597e0[_0x1c11('0x24')]), _0x4597e0;
            }
            return _0xc0c4e9;
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xae')] = function (_0x395de2, _0x2198db) {
            var _0x406a88 = document[_0x1c11('0xaf')](_0x1c11('0xab')), _0xab88d7 = _0x2198db, _0x7a3f66 = _0x2198db / (_0x395de2[_0x1c11('0x23')] / _0x395de2[_0x1c11('0x24')]);
            _0x406a88[_0x1c11('0x23')] = _0xab88d7;
            _0x406a88[_0x1c11('0x24')] = _0x7a3f66;
            var _0xc27ee9 = _0x406a88[_0x1c11('0xac')]('2d');
            return _0xc27ee9[_0x1c11('0xad')](_0x395de2, 0x0, 0x0, _0xab88d7, _0x7a3f66), _0xc27ee9[_0x1c11('0xb0')](0x0, 0x0, _0xab88d7, _0x7a3f66);
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xb1')] = function (_0x528d20, _0x51b712, _0x2b3440) {
            var _0x410fa7 = 0x4 * (_0x51b712 + _0x528d20[_0x1c11('0x23')] * _0x2b3440), _0x544c75 = _0x528d20[_0x1c11('0xb2')];
            return {
                'r': _0x544c75[_0x410fa7],
                'g': _0x544c75[_0x410fa7 + 0x1],
                'b': _0x544c75[_0x410fa7 + 0x2],
                'a': _0x544c75[_0x410fa7 + 0x3]
            };
        };
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xb3')] = function () {
            var _0x14d565 = new THREE[(_0x1c11('0x29'))]();
            return function (_0x509e0c) {
                var _0x7e5fc6 = 0x2 * _0x509e0c['x'] - 0x1, _0x34520b = 0x2 * _0x509e0c['y'] - 0x1;
                var _0x19e17f = void 0x0, _0x3271ed = void 0x0;
                if (0x0 === _0x7e5fc6 && 0x0 === _0x34520b ? _0x3271ed = _0x19e17f = 0x0 : _0x7e5fc6 * _0x7e5fc6 > _0x34520b * _0x34520b ? (_0x3271ed = _0x7e5fc6, _0x19e17f = Math['PI'] / 0x4 * (_0x34520b / _0x7e5fc6)) : (_0x3271ed = _0x34520b, _0x19e17f = Math['PI'] / 0x2 - _0x7e5fc6 / _0x34520b * (Math['PI'] / 0x4))) {
                }
                ;
                var _0xd7e235 = Math[_0x1c11('0x28')](_0x19e17f), _0x229ca1 = Math[_0x1c11('0x27')](_0x19e17f);
                return _0x14d565['x'] = _0x3271ed * _0x229ca1, _0x14d565['y'] = _0x3271ed * _0xd7e235, _0x14d565;
            };
        }();
        _0x14d565[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xb4')] = function () {
            var _0x14d565 = new THREE[(_0x1c11('0x44'))]();
            return function (_0x36370e) {
                var _0x1ffe2e = ELPIXEL[_0x1c11('0xb3')](_0x36370e), _0xd2b946 = Math[_0x1c11('0x30')](0x1 - _0x1ffe2e['x'] * _0x1ffe2e['x'] - _0x1ffe2e['y'] * _0x1ffe2e['y']);
                return _0x14d565[_0x1c11('0x9f')](_0x1ffe2e['x'], _0x1ffe2e['y'], _0xd2b946), _0x14d565;
            };
        }();
    },
    function (_0x3d4e6a, _0x483e05, _0x1b4e0c) {
        _0x1b4e0c(0x2);
        _0x1b4e0c(0x4);
        _0x1b4e0c(0x6);
        _0x1b4e0c(0x0);
        _0x1b4e0c(0x7);
        _0x1b4e0c(0x9);
        _0x1b4e0c(0xb);
        _0x1b4e0c(0xd);
        _0x1b4e0c(0xf);
        _0x1b4e0c(0x12);
        _0x1b4e0c(0x14);
        _0x1b4e0c(0x16);
        _0x1b4e0c(0x18);
        _0x1b4e0c(0x1a);
        _0x1b4e0c(0x1b);
        _0x3d4e6a[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xb5')] = function () {
            function _0x5a0b28(_0xa5053) {
                _classCallCheck(this, _0x5a0b28);
                (_0xa5053 = _0xa5053 || {})[_0x1c11('0xb6')] = _0xa5053[_0x1c11('0xb6')] || {};
                _0xa5053[_0x1c11('0xb7')] = _0xa5053[_0x1c11('0xb7')] || {};
                _0xa5053[_0x1c11('0xb8')] = _0xa5053[_0x1c11('0xb8')] || {};
                this[_0x1c11('0x90')] = !0x0;
                this[_0x1c11('0xb9')] = !0x0;
                this[_0x1c11('0xba')] = !0x0;
                this[_0x1c11('0xbb')] = !0x0;
                this['D'] = new ELPIXEL[(_0x1c11('0xbc'))](0x3, 0x1);
                this['N'] = new ELPIXEL[(_0x1c11('0xbd'))](_0xa5053[_0x1c11('0xb8')]);
                var _0x483e05 = _0xa5053[_0x1c11('0xbe')] || {};
                this[_0x1c11('0xbf')] = !!_0x483e05[_0x1c11('0xc0')];
                if (this[_0x1c11('0xbf')] && this[_0x1c11('0xc1')](_0x483e05)) {
                }
                ;
                this['P'] = new ELPIXEL[(_0x1c11('0xc2'))]();
                var _0x1b4e0c = void 0x0 === _0xa5053[_0x1c11('0xb6')][_0x1c11('0xc3')] || _0xa5053[_0x1c11('0xb6')][_0x1c11('0xc3')];
                this['O'] = _0x1b4e0c ? new ELPIXEL[(_0x1c11('0xc4'))](_0xa5053[_0x1c11('0xb6')]) : new ELPIXEL[(_0x1c11('0xc5'))](_0xa5053[_0x1c11('0xb6')]);
                this['M'] = new ELPIXEL[(_0x1c11('0xc6'))](_0xa5053[_0x1c11('0xb7')]);
                _0xa5053[_0x1c11('0xc7')] && (this['C'] = new ELPIXEL[(_0x1c11('0xc8'))](_0xa5053[_0x1c11('0xc7')]));
                this['S'] = new ELPIXEL[(_0x1c11('0xc9'))]();
                this['H'] = ELPIXEL[_0x1c11('0x2e')](0x1e, -0x1, ELPIXEL[_0x1c11('0x2c')], ELPIXEL[_0x1c11('0x93')]);
                var _0x1a579f = {
                    'format': THREE[_0x1c11('0xca')],
                    'minFilter': THREE[_0x1c11('0x8c')],
                    'magFilter': THREE[_0x1c11('0x8c')]
                };
                this['_'] = new THREE[(_0x1c11('0xcb'))](0x1, 0x1, _0x1a579f);
                this['I'] = new THREE[(_0x1c11('0xcb'))](0x1, 0x1, _0x1a579f);
                this['A'] = 0x0;
                this['V'] = null;
                this['F'] = null;
            }
            _createClass(_0x5a0b28, [
                {
                    'key': _0x1c11('0xcc'),
                    'value': function addNodeToAccelerationStructure(_0x33c8b7, _0x4c90c8) {
                        var _0x4d4de9 = this;
                        _0x4c90c8 ? this['P'][_0x1c11('0x84')](_0x33c8b7) : _0x33c8b7[_0x1c11('0xcd')](function (_0x4157b1) {
                            if (_0x4157b1[_0x1c11('0xce')] && _0x4157b1[_0x1c11('0xcf')]) {
                                _0x4157b1[_0x1c11('0xd0')]();
                                _0x4d4de9['P'][_0x1c11('0x84')](_0x4157b1);
                            }
                        });
                    }
                },
                {
                    'key': _0x1c11('0xd1'),
                    'value': function addRenderCompleteCallback(_0x4ba7aa) {
                        this[_0x1c11('0xd2')] = _0x4ba7aa;
                    }
                },
                {
                    'key': _0x1c11('0xd3'),
                    'value': function removeRenderCompleteCallback() {
                        this[_0x1c11('0xd2')] = null;
                    }
                },
                {
                    'key': _0x1c11('0x94'),
                    'value': function blit(_0x271d04) {
                        this['U'] && ELPIXEL[_0x1c11('0x94')](this[_0x1c11('0xd4')], this['U'], _0x271d04, !0x1);
                    }
                },
                {
                    'key': _0x1c11('0xd5'),
                    'value': function enableVPLGeneration() {
                        this['X'] && (this['X']['L'] = !0x0);
                    }
                },
                {
                    'key': _0x1c11('0xd6'),
                    'value': function getBloomPass() {
                        return this['B'];
                    }
                },
                {
                    'key': _0x1c11('0xd7'),
                    'value': function getHighLightPass() {
                        return this['k'];
                    }
                },
                {
                    'key': _0x1c11('0xd8'),
                    'value': function getRenderPass() {
                        return this['W'];
                    }
                },
                {
                    'key': _0x1c11('0xd9'),
                    'value': function getSAOPass() {
                        return this['O'];
                    }
                },
                {
                    'key': _0x1c11('0xda'),
                    'value': function getShadowPass() {
                        return this['M'];
                    }
                },
                {
                    'key': _0x1c11('0xdb'),
                    'value': function getVPLGenerationPass() {
                        return this['X'];
                    }
                },
                {
                    'key': _0x1c11('0xdc'),
                    'value': function getShadowPlanePass() {
                        return this['C'];
                    }
                },
                {
                    'key': _0x1c11('0xdd'),
                    'value': function highlightObjects(_0x333777) {
                        this['k'] && (this['k'][_0x1c11('0xde')] = _0x333777);
                    }
                },
                {
                    'key': _0x1c11('0xc1'),
                    'value': function initializeGI(_0x30caca) {
                        this['X'] = new ELPIXEL[(_0x1c11('0xdf'))](0x1f4);
                        this['Z'] = new ELPIXEL[(_0x1c11('0xe0'))]();
                    }
                },
                {
                    'key': _0x1c11('0xe1'),
                    'value': function getEffectComposer() {
                        return this['j'];
                    }
                },
                {
                    'key': _0x1c11('0xe2'),
                    'value': function insertPass(_0x5980c3, _0x5c5d6) {
                        this['j'][_0x1c11('0xe2')](_0x5980c3, _0x5c5d6);
                    }
                },
                {
                    'key': _0x1c11('0xe3'),
                    'value': function isAccumulationConverged() {
                        var _0x3d4e6a = this['M'][_0x1c11('0xe4')], _0x483e05 = this['O'][_0x1c11('0xe5')]() >= 0x1, _0x1b4e0c = !_0x3d4e6a || this['M'][_0x1c11('0xe5')]() >= 0x1, _0x1cc36c = !this[_0x1c11('0xbf')] || this['Z'][_0x1c11('0xe5')]() >= 0x1;
                        return _0x1b4e0c && _0x483e05 && _0x1cc36c;
                    }
                },
                {
                    'key': _0x1c11('0xe6'),
                    'value': function isSuperSamplingConverged() {
                        return this['A'] / this['H'][_0x1c11('0xb')] >= 0x1;
                    }
                },
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x4ea7b7, _0x13462d, _0x2386cf, _0x11a0d8) {
                        if (this[_0x1c11('0x90')] && (this['G'](), this['A'] = 0x0, this[_0x1c11('0xe7')] = 0x0, this[_0x1c11('0x90')] = !0x1, this[_0x1c11('0xb9')] = !0x0, this[_0x1c11('0xba')] = !0x0), !this['V'] || this['V'][_0x1c11('0xe8')] === _0x2386cf[_0x1c11('0xe8')] && this['F'][_0x1c11('0xe8')] === _0x13462d[_0x1c11('0xe8')] || (this['V'] = _0x2386cf, this['F'] = _0x13462d, this['W'][_0x1c11('0xe9')] = this['V'], this['W'][_0x1c11('0xea')] = this['F'], this['K']['V'] = this['V'], this['K']['J'][_0x1c11('0xeb')](this['V'][_0x1c11('0xec')])), this[_0x1c11('0xed')] || this['Y'](_0x4ea7b7, _0x13462d, _0x2386cf, _0x11a0d8), this['q'](_0x13462d), this[_0x1c11('0xbf')] && this['X'][_0x1c11('0xee')](_0x13462d, this[_0x1c11('0xef')][0x0], 0xa, this['P']), this['C'] && this['C'][_0x1c11('0x97')](this[_0x1c11('0xd4')], _0x13462d, _0x2386cf), this[_0x1c11('0xe6')]())
                            return void this['$']();
                        this['tt'](_0x4ea7b7, _0x13462d, _0x2386cf);
                        this['et']();
                        var _0x2f34f7 = this[_0x1c11('0xe3')]();
                        this['S'][_0x1c11('0xf0')] = _0x2f34f7;
                        this['K'][_0x1c11('0xf0')] = !_0x2f34f7 && this[_0x1c11('0xbb')];
                        this['it'](_0x2386cf);
                        this['j'][_0x1c11('0xf1')] = this['j'][_0x1c11('0xf2')];
                        this['j'][_0x1c11('0xf3')] = this['j'][_0x1c11('0xf4')];
                        this['j'][_0x1c11('0x97')]();
                        _0x2386cf[_0x1c11('0xf5')]();
                        this[_0x1c11('0xe7')]++;
                        if (this['S'][_0x1c11('0xf0')] && this['A']++) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0xf6'),
                    'value': function setSize(_0xf08eab, _0x4e35f1) {
                        if (this[_0x1c11('0xd4')]) {
                            _0xf08eab *= this[_0x1c11('0xd4')][_0x1c11('0xf7')]();
                            _0x4e35f1 *= this[_0x1c11('0xd4')][_0x1c11('0xf7')]();
                            this[_0x1c11('0xd4')][_0x1c11('0xf8')] = new THREE[(_0x1c11('0x29'))](_0xf08eab, _0x4e35f1);
                        }
                        this['N'][_0x1c11('0xf6')](_0xf08eab, _0x4e35f1);
                        this['O'][_0x1c11('0xf6')](_0xf08eab, _0x4e35f1);
                        this['M'][_0x1c11('0xf6')](_0xf08eab, _0x4e35f1);
                        this['j'] && this['j'][_0x1c11('0xf6')](_0xf08eab, _0x4e35f1);
                        this[_0x1c11('0x90')] = !0x0;
                    }
                },
                {
                    'key': _0x1c11('0xf9'),
                    'value': function setAntiAliasingFeedBackParams(_0x34e8ac, _0xe7f273) {
                        if (this['K']) {
                            this['K'][_0x1c11('0xfa')]['x'] = _0x34e8ac;
                            this['K'][_0x1c11('0xfa')]['y'] = _0xe7f273;
                        }
                    }
                },
                {
                    'key': _0x1c11('0xfb'),
                    'value': function updateShadowPlane(_0x31a274) {
                        this['C'] && this['C'][_0x1c11('0xfc')](_0x31a274);
                    }
                },
                {
                    'key': 'it',
                    'value': function it(_0x1b2801) {
                        if (this[_0x1c11('0xbb')] || this[_0x1c11('0xe3')]()) {
                            var _0x296a94 = this[_0x1c11('0xd4')][_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x5230ea = this[_0x1c11('0xd4')][_0x1c11('0xfd')]()[_0x1c11('0x24')], _0xefa9d6 = this['H'][this[_0x1c11('0xe7')] % this['H'][_0x1c11('0xb')]];
                            ELPIXEL[_0x1c11('0x91')](_0x1b2801, _0xefa9d6, _0x296a94, _0x5230ea);
                        }
                        if (this[_0x1c11('0xe3')]()) {
                            var _0x26ce97 = this['H'][this[_0x1c11('0xe7')] % this['H'][_0x1c11('0xb')]];
                            this['ot'](_0x26ce97);
                        }
                    }
                },
                {
                    'key': 'et',
                    'value': function et() {
                        var _0x345447 = this;
                        this['O'][_0x1c11('0xf0')] || (this[_0x1c11('0xd4')][_0x1c11('0xfe')] = this['I'][_0x1c11('0xff')]);
                        var _0x3d4e6a = this;
                        var _0x483e05 = !this['M'][_0x1c11('0xf0')], _0x1b4e0c = !function () {
                                var _0x483e05 = !0x0;
                                return _0x3d4e6a[_0x1c11('0xef')][_0x1c11('0x100')](function (_0xbef3c4) {
                                    _0xbef3c4[_0x1c11('0xcf')] || (_0x483e05 = !0x1);
                                }), _0x483e05;
                            }(), _0x93c99d = 0x0 === this[_0x1c11('0xef')][_0x1c11('0xb')];
                        (_0x483e05 || _0x1b4e0c || _0x93c99d) && this['M'][_0x1c11('0x101')][_0x1c11('0x100')](function (_0x4c421a) {
                            _0x4c421a[_0x1c11('0x102')][_0x1c11('0x103')] = _0x345447['_'];
                        });
                    }
                },
                {
                    'key': '$',
                    'value': function $() {
                        if (this[_0x1c11('0xd2')] && !this[_0x1c11('0x104')]) {
                            this[_0x1c11('0xd2')]();
                            this[_0x1c11('0x104')] = !0x0;
                        }
                    }
                },
                {
                    'key': 'q',
                    'value': function q(_0x5cfac8) {
                        var _0x483e05 = this;
                        this[_0x1c11('0x105')] = [];
                        this[_0x1c11('0xef')] = [];
                        _0x5cfac8[_0x1c11('0x106')](function (_0x49cc98) {
                            if ((_0x49cc98 instanceof THREE[_0x1c11('0x107')] || _0x49cc98 instanceof THREE[_0x1c11('0x108')]) && _0x49cc98[_0x1c11('0xcf')] && _0x483e05[_0x1c11('0x105')][_0x1c11('0x32')](_0x49cc98), _0x49cc98 instanceof THREE[_0x1c11('0x109')] && _0x49cc98[_0x1c11('0xcf')] && (_0x49cc98[_0x1c11('0x102')] = _0x49cc98[_0x1c11('0x102')] ? _0x49cc98[_0x1c11('0x102')] : {}, _0x483e05[_0x1c11('0xef')][_0x1c11('0x32')](_0x49cc98))) {
                            }
                        });
                        this['M'][_0x1c11('0x101')] = this[_0x1c11('0xef')];
                    }
                },
                {
                    'key': 'ot',
                    'value': function ot(_0x1b846d) {
                        this[_0x1c11('0x105')][_0x1c11('0x100')](function (_0x2ffe77) {
                            ELPIXEL[_0x1c11('0x91')](_0x2ffe77[_0x1c11('0x102')][_0x1c11('0xe9')], _0x1b846d, _0x2ffe77[_0x1c11('0x102')][_0x1c11('0x10a')]['x'], _0x2ffe77[_0x1c11('0x102')][_0x1c11('0x10a')]['y']);
                        });
                    }
                },
                {
                    'key': 'Y',
                    'value': function Y(_0xcd7caf, _0x51b54d, _0x3cc087, _0x101708) {
                        this[_0x1c11('0xd4')] = _0xcd7caf;
                        this['V'] = _0x3cc087;
                        this['F'] = _0x51b54d;
                        this['U'] = _0x101708;
                        this['W'] = new THREE[(_0x1c11('0x10b'))](_0x51b54d, _0x3cc087);
                        this['j'] = new THREE[(_0x1c11('0x10c'))](this[_0x1c11('0xd4')], _0x101708);
                        var _0x118976 = _0xcd7caf[_0x1c11('0xfd')]();
                        this['S'][_0x1c11('0xf6')](_0x118976[_0x1c11('0x23')], _0x118976[_0x1c11('0x24')]);
                        this[_0x1c11('0xd4')][_0x1c11('0xf8')] = new THREE[(_0x1c11('0x29'))](_0x118976[_0x1c11('0x23')], _0x118976[_0x1c11('0x24')]);
                        this['K'] = new ELPIXEL[(_0x1c11('0x10d'))](_0x3cc087, this['N']);
                        this['st'] = new THREE[(_0x1c11('0x10e'))](THREE[_0x1c11('0x77')]);
                        this['st'][_0x1c11('0x10f')] = !0x1;
                        this['st'][_0x1c11('0x110')] = !_0x101708;
                        this['j'][_0x1c11('0x111')](this['W']);
                        if (THREE[_0x1c11('0x112')] && (this['k'] = new THREE[(_0x1c11('0x112'))](new THREE[(_0x1c11('0x29'))](_0x118976[_0x1c11('0x23')], _0x118976[_0x1c11('0x24')]), _0x51b54d, _0x3cc087), this['j'][_0x1c11('0x111')](this['k'])), this['B'] = new ELPIXEL[(_0x1c11('0x113'))](this['N'], new THREE[(_0x1c11('0x29'))](_0x118976[_0x1c11('0x23')], _0x118976[_0x1c11('0x24')]), 0.86, 0x1, 0.98), this['j'][_0x1c11('0x111')](this['B']), this['j'][_0x1c11('0x111')](this['S']), this['j'][_0x1c11('0x111')](this['K']), this['B'][_0x1c11('0xf0')] = !0x1, this['j'][_0x1c11('0x111')](this['st']), this[_0x1c11('0xed')] = !0x0) {
                        }
                        ;
                        var _0x1fdfe4 = new THREE[(_0x1c11('0x114'))]({ 'color': 0xffffff }), _0x412f5b = new THREE[(_0x1c11('0x114'))]({ 'color': 0x0 });
                        ELPIXEL[_0x1c11('0x98')](_0xcd7caf, _0x1fdfe4, this['_']);
                        ELPIXEL[_0x1c11('0x98')](_0xcd7caf, _0x412f5b, this['I']);
                        this[_0x1c11('0x105')] = [];
                        this[_0x1c11('0xef')] = [];
                        this[_0x1c11('0xe7')] = 0x0;
                    }
                },
                {
                    'key': 'tt',
                    'value': function tt(_0x1ad7b0, _0x4346d2, _0x4a8cf4) {
                        var _0x356597 = _0x1ad7b0[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x3206ee = _0x1ad7b0[_0x1c11('0xfd')]()[_0x1c11('0x24')], _0x1d1383 = this['H'][this[_0x1c11('0xe7')] % this['H'][_0x1c11('0xb')]];
                        ELPIXEL[_0x1c11('0x91')](_0x4a8cf4, _0x1d1383, _0x356597, _0x3206ee);
                        this['N'][_0x1c11('0x97')](_0x1ad7b0, _0x4346d2, _0x4a8cf4);
                        this['O'][_0x1c11('0x97')](_0x1ad7b0, _0x4a8cf4, this['N'], this['D']);
                        this['M'][_0x1c11('0x97')](_0x1ad7b0, _0x4346d2, _0x4a8cf4);
                        this[_0x1c11('0xbf')] && this['Z'][_0x1c11('0x97')](_0x1ad7b0, _0x4346d2, _0x4a8cf4, this['X'], this[_0x1c11('0xef')][0x0]);
                        _0x4a8cf4[_0x1c11('0xf5')]();
                        if (!this['j'][_0x1c11('0xf4')][_0x1c11('0x115')] && this['N']['at']) {
                            this['j'][_0x1c11('0xf4')][_0x1c11('0x115')] = this['N']['at'];
                            this['j'][_0x1c11('0xf2')][_0x1c11('0x115')] = this['N']['at'];
                        }
                    }
                },
                {
                    'key': 'G',
                    'value': function G() {
                        this['O'][_0x1c11('0x90')] = !!this[_0x1c11('0xb9')];
                        this['M'][_0x1c11('0x90')] = !!this[_0x1c11('0xba')];
                        this['S'][_0x1c11('0x90')] = !0x0;
                        this[_0x1c11('0xbf')] && (this['Z'][_0x1c11('0x90')] = !0x0);
                        this[_0x1c11('0x104')] = !0x1;
                    }
                }
            ]);
            return _0x5a0b28;
        }();
    },
    function (_0x41a72d, _0x5446de, _0x27d1e1) {
        _0x27d1e1(0x5);
        _0x41a72d[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x116')] = function () {
            function _0x389b5d(_0x2f2619) {
                _classCallCheck(this, _0x389b5d);
                this['rt'] = _0x2f2619;
                ELPIXEL[_0x1c11('0xa5')](this['rt'][_0x1c11('0x117')]) || (this['rt'][_0x1c11('0x117')] = ELPIXEL[_0x1c11('0xa6')](this['rt'][_0x1c11('0x117')]));
                var _0x5446de = {
                        'format': THREE[_0x1c11('0xca')],
                        'magFilter': THREE[_0x1c11('0x118')],
                        'minFilter': THREE[_0x1c11('0x118')],
                        'type': this['rt'][_0x1c11('0x87')],
                        'generateMipmaps': !0x1,
                        'anisotropy': this['rt'][_0x1c11('0x119')],
                        'encoding': this['rt'][_0x1c11('0x11a')]
                    }, _0x27d1e1 = {
                        'x': _0x2f2619[_0x1c11('0x117')][_0x1c11('0x23')],
                        'y': _0x2f2619[_0x1c11('0x117')][_0x1c11('0x24')]
                    }, _0x2283ed = Math[_0x1c11('0x11b')](_0x27d1e1['x'], _0x27d1e1['y']);
                this['nt'] = Math[_0x1c11('0x4')](_0x2283ed) / Math[_0x1c11('0x4')](0x2) + 0x1;
                this['ht'] = [];
                this['lt'] = [];
                this['ct'] = [];
                this['ct'][_0x1c11('0x32')](0.1);
                for (var _0x13ff16 = 0x0; _0x13ff16 < this['nt']; _0x13ff16++) {
                    var _0x110e49 = new THREE[(_0x1c11('0xcb'))](_0x27d1e1['x'], _0x27d1e1['y'], _0x5446de);
                    this['ht'][_0x1c11('0x32')](_0x110e49);
                    _0x110e49 = new THREE[(_0x1c11('0xcb'))](_0x27d1e1['x'], _0x27d1e1['y'], _0x5446de);
                    this['lt'][_0x1c11('0x32')](_0x110e49);
                    _0x27d1e1['x'] = Math[_0x1c11('0x31')](_0x27d1e1['x'] / 0x2);
                    _0x27d1e1['y'] = Math[_0x1c11('0x31')](_0x27d1e1['y'] / 0x2);
                    _0x13ff16 < 0x2 && this['ct'][_0x1c11('0x32')](0x1);
                    _0x13ff16 < 0x5 && this['ct'][_0x1c11('0x32')](0x2);
                    _0x13ff16 > 0x5 && this['ct'][_0x1c11('0x32')](0x3);
                }
                var _0x5bcb43 = ELPIXEL[_0x1c11('0x11c')];
                this['ut'] = new THREE[(_0x1c11('0x7b'))]({
                    'uniforms': THREE[_0x1c11('0x78')][_0x1c11('0x79')](_0x5bcb43[_0x1c11('0x7a')]),
                    'vertexShader': _0x5bcb43[_0x1c11('0x7c')],
                    'fragmentShader': _0x5bcb43[_0x1c11('0x7d')],
                    'defines': { 'NUM_SAMPLES': 0x10 }
                });
            }
            _createClass(_0x389b5d, [
                {
                    'key': _0x1c11('0xfc'),
                    'value': function update(_0x210526) {
                        var _0x5446de = this['rt'];
                        var _0x27d1e1 = new THREE[(_0x1c11('0x8e'))](null, this['rt'][_0x1c11('0x117')][_0x1c11('0x23')], this['rt'][_0x1c11('0x117')][_0x1c11('0x24')]);
                        _0x27d1e1[_0x1c11('0x8b')] = THREE[_0x1c11('0x11d')];
                        for (var _0x1a6813 = 0x0; _0x1a6813 < this['nt']; _0x1a6813++) {
                            this['ut'][_0x1c11('0x7a')][_0x1c11('0x11e')][_0x1c11('0xe')] = this['ct'][_0x1a6813];
                            this['ut'][_0x1c11('0x7a')][_0x1c11('0x11f')][_0x1c11('0xe')][_0x1c11('0x9f')](this['ht'][_0x1a6813][_0x1c11('0x23')], this['ht'][_0x1a6813][_0x1c11('0x24')]);
                            this['ut'][_0x1c11('0x7a')][_0x1c11('0x120')][_0x1c11('0xe')][_0x1c11('0x9f')](0x1, 0x0);
                            this['ut'][_0x1c11('0x7a')][_0x1c11('0x121')][_0x1c11('0xe')] = _0x5446de;
                            ELPIXEL[_0x1c11('0x98')](_0x210526, this['ut'], this['ht'][_0x1a6813], !0x0);
                            this['ut'][_0x1c11('0x7a')][_0x1c11('0x120')][_0x1c11('0xe')][_0x1c11('0x9f')](0x0, 0x1);
                            this['ut'][_0x1c11('0x7a')][_0x1c11('0x121')][_0x1c11('0xe')] = this['ht'][_0x1a6813][_0x1c11('0xff')];
                            ELPIXEL[_0x1c11('0x98')](_0x210526, this['ut'], this['lt'][_0x1a6813], !0x0);
                            _0x5446de = this['lt'][_0x1a6813];
                            var _0x19a805 = new Uint8Array(0x4 * _0x5446de[_0x1c11('0x23')] * _0x5446de[_0x1c11('0x24')]);
                            _0x210526[_0x1c11('0x122')](_0x5446de);
                            _0x210526[_0x1c11('0x123')](_0x5446de, 0x0, 0x0, _0x5446de[_0x1c11('0x23')], _0x5446de[_0x1c11('0x24')], _0x19a805);
                            _0x27d1e1[_0x1c11('0x124')][_0x1a6813] = {
                                'data': _0x19a805,
                                'width': _0x5446de[_0x1c11('0x23')],
                                'height': _0x5446de[_0x1c11('0x24')]
                            };
                        }
                        return _0x27d1e1[_0x1c11('0x8f')] = !0x1, _0x27d1e1[_0x1c11('0x90')] = !0x0, this['dt'](), _0x27d1e1;
                    }
                },
                {
                    'key': 'dt',
                    'value': function dt() {
                        for (var _0x376abf = 0x0; _0x376abf < this['nt']; _0x376abf++) {
                            this['ht'][_0x376abf][_0x1c11('0x125')]();
                            this['ht'][_0x376abf] = null;
                            this['lt'][_0x376abf][_0x1c11('0x125')]();
                            this['lt'][_0x376abf] = null;
                        }
                    }
                }
            ]);
            return _0x389b5d;
        }();
    },
    function (_0x230ea6, _0x1f40e8) {
        _0x230ea6[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x11c')] = {
            'uniforms': {
                'colorTexture': { 'value': null },
                'texSize': { 'value': new THREE[(_0x1c11('0x29'))](0.5, 0.5) },
                'direction': { 'value': new THREE[(_0x1c11('0x29'))](0.5, 0.5) },
                'filterRadius': { 'value': 0x1 }
            },
            'vertexShader': [
                _0x1c11('0x35'),
                _0x1c11('0x38'),
                _0x1c11('0x126'),
                _0x1c11('0x127'),
                '}'
            ][_0x1c11('0x3b')]('\x0a'),
            'fragmentShader': [
                _0x1c11('0x35'),
                _0x1c11('0x128'),
                _0x1c11('0x129'),
                _0x1c11('0x12a'),
                _0x1c11('0x12b'),
                _0x1c11('0x38'),
                _0x1c11('0x12c'),
                _0x1c11('0x12d'),
                _0x1c11('0x12e'),
                _0x1c11('0x12f'),
                _0x1c11('0x130'),
                _0x1c11('0x131'),
                _0x1c11('0x132'),
                _0x1c11('0x133'),
                _0x1c11('0x134'),
                _0x1c11('0x135'),
                _0x1c11('0x136'),
                _0x1c11('0x137'),
                '}',
                _0x1c11('0x138'),
                _0x1c11('0x139'),
                _0x1c11('0x13a'),
                _0x1c11('0x13b'),
                _0x1c11('0x13c'),
                _0x1c11('0x137'),
                '}',
                _0x1c11('0x13d'),
                _0x1c11('0x139'),
                '}',
                _0x1c11('0x13e'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
    },
    function (_0x31dd6e, _0x51facc) {
        _0x31dd6e[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xc2')] = function () {
            function _0x4f7377() {
                _classCallCheck(this, _0x4f7377);
                this[_0x1c11('0x13f')] = [];
            }
            _createClass(_0x4f7377, [
                {
                    'key': _0x1c11('0x140'),
                    'value': function buildBVHTree(_0x54b0f3) {
                        var _0x51facc = null;
                        _0x54b0f3[_0x1c11('0x141')][_0x1c11('0x142')] && (_0x51facc = _0x54b0f3[_0x1c11('0x141')][_0x1c11('0x142')][_0x1c11('0x26')]);
                        var _0x5a8af2 = _0x54b0f3[_0x1c11('0x141')][_0x1c11('0x143')][_0x1c11('0x144')][_0x1c11('0x26')], _0x2494a7 = _0x54b0f3[_0x1c11('0x141')][_0x1c11('0x143')]['uv'] ? _0x54b0f3[_0x1c11('0x141')][_0x1c11('0x143')]['uv'][_0x1c11('0x26')] : void 0x0;
                        if (_0x51facc) {
                            var _0x2ef4d4 = new Float32Array(0x3 * _0x51facc[_0x1c11('0xb')]);
                            for (var _0xc3a30b = 0x0; _0xc3a30b < _0x51facc[_0x1c11('0xb')]; _0xc3a30b++) {
                                var _0x65a18f = 0x3 * _0x51facc[_0xc3a30b];
                                _0x2ef4d4[0x3 * _0xc3a30b] = _0x5a8af2[_0x65a18f];
                                _0x2ef4d4[0x3 * _0xc3a30b + 0x1] = _0x5a8af2[_0x65a18f + 0x1];
                                _0x2ef4d4[0x3 * _0xc3a30b + 0x2] = _0x5a8af2[_0x65a18f + 0x2];
                            }
                            if (_0x5a8af2 = _0x2ef4d4, _0x2494a7) {
                                var _0x133beb = new Float32Array(0x2 * _0x51facc[_0x1c11('0xb')]);
                                for (var _0xb197bb = 0x0; _0xb197bb < _0x51facc[_0x1c11('0xb')]; _0xb197bb++) {
                                    var _0x3f117a = 0x2 * _0x51facc[_0xb197bb];
                                    _0x133beb[0x2 * _0xb197bb] = _0x2494a7[_0x3f117a];
                                    _0x133beb[0x2 * _0xb197bb + 0x1] = _0x2494a7[_0x3f117a + 0x1];
                                }
                                _0x2494a7 = _0x133beb;
                            }
                        }
                        return new (function () {
                            function _0x2d7b77(_0x1a249d, _0x6ccfe3, _0x325864) {
                                _classCallCheck(this, _0x2d7b77);
                                this[_0x1c11('0x145')] = _0x1a249d;
                                this[_0x1c11('0x146')] = _0x6ccfe3;
                                this[_0x1c11('0x147')] = _0x325864 || 0xa;
                                this[_0x1c11('0x148')] = function (_0x635274) {
                                    var _0x6ccfe3 = void 0x0, _0x3c2342 = void 0x0, _0x325864 = void 0x0, _0x1777de = void 0x0, _0x50ad7b = void 0x0, _0x4c48f6 = void 0x0, _0x5ecc34 = void 0x0, _0x444551 = void 0x0, _0x139525 = void 0x0, _0x4f0d0e = void 0x0, _0x1987af = void 0x0, _0x5e08fd = void 0x0, _0x446427 = void 0x0, _0x22e6cc = void 0x0, _0x1e4c1e = void 0x0;
                                    var _0x174fd7 = _0x635274[_0x1c11('0xb')] / 0x9;
                                    var _0x1cf601 = new Float32Array(0x7 * _0x174fd7);
                                    for (var _0x53934a = 0x0; _0x53934a < _0x174fd7; _0x53934a++) {
                                        _0x6ccfe3 = _0x635274[0x9 * _0x53934a];
                                        _0x3c2342 = _0x635274[0x9 * _0x53934a + 0x1];
                                        _0x325864 = _0x635274[0x9 * _0x53934a + 0x2];
                                        _0x1777de = _0x635274[0x9 * _0x53934a + 0x3];
                                        _0x50ad7b = _0x635274[0x9 * _0x53934a + 0x4];
                                        _0x4c48f6 = _0x635274[0x9 * _0x53934a + 0x5];
                                        _0x5ecc34 = _0x635274[0x9 * _0x53934a + 0x6];
                                        _0x444551 = _0x635274[0x9 * _0x53934a + 0x7];
                                        _0x139525 = _0x635274[0x9 * _0x53934a + 0x8];
                                        _0x4f0d0e = Math[_0x1c11('0xa3')](Math[_0x1c11('0xa3')](_0x6ccfe3, _0x1777de), _0x5ecc34);
                                        _0x1987af = Math[_0x1c11('0xa3')](Math[_0x1c11('0xa3')](_0x3c2342, _0x50ad7b), _0x444551);
                                        _0x5e08fd = Math[_0x1c11('0xa3')](Math[_0x1c11('0xa3')](_0x325864, _0x4c48f6), _0x139525);
                                        _0x446427 = Math[_0x1c11('0x11b')](Math[_0x1c11('0x11b')](_0x6ccfe3, _0x1777de), _0x5ecc34);
                                        _0x22e6cc = Math[_0x1c11('0x11b')](Math[_0x1c11('0x11b')](_0x3c2342, _0x50ad7b), _0x444551);
                                        _0x1e4c1e = Math[_0x1c11('0x11b')](Math[_0x1c11('0x11b')](_0x325864, _0x4c48f6), _0x139525);
                                        _0x116421(_0x1cf601, _0x53934a, _0x53934a, _0x4f0d0e, _0x1987af, _0x5e08fd, _0x446427, _0x22e6cc, _0x1e4c1e);
                                    }
                                    return _0x1cf601;
                                }(_0x1a249d);
                                this[_0x1c11('0x149')] = new Float32Array(this[_0x1c11('0x148')][_0x1c11('0xb')]);
                                this[_0x1c11('0x149')][_0x1c11('0x9f')](this[_0x1c11('0x148')]);
                                var _0x20289f = _0x1a249d[_0x1c11('0xb')] / 0x9;
                                var _0x4ac10b = this[_0x1c11('0x14a')](0x0, _0x20289f, _0x1ed68b);
                                for (this[_0x1c11('0x14b')] = new _0x13e180(_0x4ac10b[0x0], _0x4ac10b[0x1], 0x0, _0x20289f, 0x0), this[_0x1c11('0x14c')] = [this[_0x1c11('0x14b')]]; this[_0x1c11('0x14c')][_0x1c11('0xb')] > 0x0;) {
                                    var _0x11b69b = this[_0x1c11('0x14c')][_0x1c11('0x14d')]();
                                    this[_0x1c11('0x14e')](_0x11b69b);
                                }
                            }
                            _createClass(_0x2d7b77, [
                                {
                                    'key': _0x1c11('0x14a'),
                                    'value': function calcExtents(_0x2d11b9, _0x22a177, _0x4b83ec) {
                                        if (_0x4b83ec = _0x4b83ec || 0x0, _0x2d11b9 >= _0x22a177)
                                            return [
                                                {
                                                    'x': 0x0,
                                                    'y': 0x0,
                                                    'z': 0x0
                                                },
                                                {
                                                    'x': 0x0,
                                                    'y': 0x0,
                                                    'z': 0x0
                                                }
                                            ];
                                        var _0x5a8007 = Number[_0x1c11('0x14f')], _0x33d0b2 = Number[_0x1c11('0x14f')], _0x56e9eb = Number[_0x1c11('0x14f')], _0x2dda32 = -Number[_0x1c11('0x14f')], _0x3143ea = -Number[_0x1c11('0x14f')], _0x4e9b5a = -Number[_0x1c11('0x14f')];
                                        for (var _0x4d2803 = _0x2d11b9; _0x4d2803 < _0x22a177; _0x4d2803++) {
                                            _0x5a8007 = Math[_0x1c11('0xa3')](this[_0x1c11('0x148')][0x7 * _0x4d2803 + 0x1], _0x5a8007);
                                            _0x33d0b2 = Math[_0x1c11('0xa3')](this[_0x1c11('0x148')][0x7 * _0x4d2803 + 0x2], _0x33d0b2);
                                            _0x56e9eb = Math[_0x1c11('0xa3')](this[_0x1c11('0x148')][0x7 * _0x4d2803 + 0x3], _0x56e9eb);
                                            _0x2dda32 = Math[_0x1c11('0x11b')](this[_0x1c11('0x148')][0x7 * _0x4d2803 + 0x4], _0x2dda32);
                                            _0x3143ea = Math[_0x1c11('0x11b')](this[_0x1c11('0x148')][0x7 * _0x4d2803 + 0x5], _0x3143ea);
                                            _0x4e9b5a = Math[_0x1c11('0x11b')](this[_0x1c11('0x148')][0x7 * _0x4d2803 + 0x6], _0x4e9b5a);
                                        }
                                        return [
                                            {
                                                'x': _0x5a8007 - _0x4b83ec,
                                                'y': _0x33d0b2 - _0x4b83ec,
                                                'z': _0x56e9eb - _0x4b83ec
                                            },
                                            {
                                                'x': _0x2dda32 + _0x4b83ec,
                                                'y': _0x3143ea + _0x4b83ec,
                                                'z': _0x4e9b5a + _0x4b83ec
                                            }
                                        ];
                                    }
                                },
                                {
                                    'key': _0x1c11('0x14e'),
                                    'value': function splitNode(_0x5f12f3) {
                                        if (_0x5f12f3[_0x1c11('0x150')]() <= this[_0x1c11('0x147')] || 0x0 === _0x5f12f3[_0x1c11('0x150')]())
                                            return;
                                        var _0x51facc = _0x5f12f3[_0x1c11('0x151')], _0x16afdf = _0x5f12f3[_0x1c11('0x152')], _0x597eec = [
                                                [],
                                                [],
                                                []
                                            ], _0x463050 = [
                                                [],
                                                [],
                                                []
                                            ], _0x427f81 = [
                                                _0x5f12f3[_0x1c11('0x153')](),
                                                _0x5f12f3[_0x1c11('0x154')](),
                                                _0x5f12f3[_0x1c11('0x155')]()
                                            ], _0x1a6ffb = [
                                                _0x5f12f3[_0x1c11('0x156')]['x'] - _0x5f12f3[_0x1c11('0x157')]['x'],
                                                _0x5f12f3[_0x1c11('0x156')]['y'] - _0x5f12f3[_0x1c11('0x157')]['y'],
                                                _0x5f12f3[_0x1c11('0x156')]['z'] - _0x5f12f3[_0x1c11('0x157')]['z']
                                            ], _0x487c13 = [];
                                        _0x487c13[_0x1c11('0xb')] = 0x3;
                                        for (var _0x275213 = _0x51facc; _0x275213 < _0x16afdf; _0x275213++) {
                                            _0x487c13[0x0] = 0.5 * (this[_0x1c11('0x148')][0x7 * _0x275213 + 0x1] + this[_0x1c11('0x148')][0x7 * _0x275213 + 0x4]);
                                            _0x487c13[0x1] = 0.5 * (this[_0x1c11('0x148')][0x7 * _0x275213 + 0x2] + this[_0x1c11('0x148')][0x7 * _0x275213 + 0x5]);
                                            _0x487c13[0x2] = 0.5 * (this[_0x1c11('0x148')][0x7 * _0x275213 + 0x3] + this[_0x1c11('0x148')][0x7 * _0x275213 + 0x6]);
                                            for (var _0x4433cc = 0x0; _0x4433cc < 0x3; _0x4433cc++) {
                                                _0x487c13[_0x4433cc] < _0x427f81[_0x4433cc] ? _0x597eec[_0x4433cc][_0x1c11('0x32')](_0x275213) : _0x463050[_0x4433cc][_0x1c11('0x32')](_0x275213);
                                            }
                                        }
                                        var _0x2e64e9 = [];
                                        if (_0x2e64e9[_0x1c11('0xb')] = 0x3, _0x2e64e9[0x0] = 0x0 === _0x597eec[0x0][_0x1c11('0xb')] || 0x0 === _0x463050[0x0][_0x1c11('0xb')], _0x2e64e9[0x1] = 0x0 === _0x597eec[0x1][_0x1c11('0xb')] || 0x0 === _0x463050[0x1][_0x1c11('0xb')], _0x2e64e9[0x2] = 0x0 === _0x597eec[0x2][_0x1c11('0xb')] || 0x0 === _0x463050[0x2][_0x1c11('0xb')], _0x2e64e9[0x0] && _0x2e64e9[0x1] && _0x2e64e9[0x2])
                                            return;
                                        var _0x12434e = [
                                            0x0,
                                            0x1,
                                            0x2
                                        ];
                                        var _0x1cac72 = void 0x0, _0x4e621c = void 0x0;
                                        _0x12434e[_0x1c11('0x158')](function (_0x38a5a0, _0x392288) {
                                            return _0x1a6ffb[_0x392288] - _0x1a6ffb[_0x38a5a0];
                                        });
                                        for (var _0xec1a67 = 0x0; _0xec1a67 < 0x3; _0xec1a67++) {
                                            var _0x486aba = _0x12434e[_0xec1a67];
                                            if (!_0x2e64e9[_0x486aba]) {
                                                _0x1cac72 = _0x597eec[_0x486aba];
                                                _0x4e621c = _0x463050[_0x486aba];
                                                break;
                                            }
                                        }
                                        var _0x4a4e5c = _0x51facc, _0x208509 = _0x4a4e5c + _0x1cac72[_0x1c11('0xb')], _0x1840eb = _0x208509, _0x4b06e1 = _0x16afdf;
                                        var _0x1adca2 = void 0x0, _0x52cfac = _0x5f12f3[_0x1c11('0x151')];
                                        var _0x5c5216 = _0x1cac72[_0x1c11('0x159')](_0x4e621c);
                                        for (var _0x522597 = 0x0; _0x522597 < _0x5c5216[_0x1c11('0xb')]; _0x522597++) {
                                            _0x1adca2 = _0x5c5216[_0x522597];
                                            _0x3ffff3(this[_0x1c11('0x148')], _0x1adca2, this[_0x1c11('0x149')], _0x52cfac);
                                            _0x52cfac++;
                                        }
                                        var _0x52569b = this[_0x1c11('0x149')][_0x1c11('0x15a')](0x7 * _0x5f12f3[_0x1c11('0x151')], 0x7 * _0x5f12f3[_0x1c11('0x152')]);
                                        this[_0x1c11('0x148')][_0x1c11('0x9f')](_0x52569b, 0x7 * _0x5f12f3[_0x1c11('0x151')]);
                                        var _0x3be3af = this[_0x1c11('0x14a')](_0x4a4e5c, _0x208509, _0x1ed68b), _0x149bfc = this[_0x1c11('0x14a')](_0x1840eb, _0x4b06e1, _0x1ed68b), _0x2ec574 = new _0x13e180(_0x3be3af[0x0], _0x3be3af[0x1], _0x4a4e5c, _0x208509, _0x5f12f3[_0x1c11('0x15b')] + 0x1), _0x1f1cd1 = new _0x13e180(_0x149bfc[0x0], _0x149bfc[0x1], _0x1840eb, _0x4b06e1, _0x5f12f3[_0x1c11('0x15b')] + 0x1);
                                        _0x5f12f3[_0x1c11('0x15c')] = _0x2ec574;
                                        _0x5f12f3[_0x1c11('0x15d')] = _0x1f1cd1;
                                        _0x5f12f3[_0x1c11('0x15e')]();
                                        this[_0x1c11('0x14c')][_0x1c11('0x32')](_0x2ec574);
                                        this[_0x1c11('0x14c')][_0x1c11('0x32')](_0x1f1cd1);
                                    }
                                },
                                {
                                    'key': _0x1c11('0x15f'),
                                    'value': function intersectRay(_0x4bde1e, _0x21e671, _0x363109) {
                                        var _0xc0ec38 = [this[_0x1c11('0x14b')]], _0x56dd03 = [], _0x30a110 = [];
                                        var _0xb1a2d1 = void 0x0;
                                        var _0x477209 = new THREE[(_0x1c11('0x44'))](0x1 / _0x21e671['x'], 0x1 / _0x21e671['y'], 0x1 / _0x21e671['z']);
                                        for (; _0xc0ec38[_0x1c11('0xb')] > 0x0;) {
                                            var _0x576937 = _0xc0ec38[_0x1c11('0x14d')]();
                                            if (_0x20f0a3(_0x4bde1e, _0x477209, _0x576937))
                                                for (_0x576937[_0x1c11('0x15c')] && _0xc0ec38[_0x1c11('0x32')](_0x576937[_0x1c11('0x15c')]), _0x576937[_0x1c11('0x15d')] && _0xc0ec38[_0x1c11('0x32')](_0x576937[_0x1c11('0x15d')]), _0xb1a2d1 = _0x576937[_0x1c11('0x151')]; _0xb1a2d1 < _0x576937[_0x1c11('0x152')]; _0xb1a2d1++) {
                                                    _0x56dd03[_0x1c11('0x32')](this[_0x1c11('0x148')][0x7 * _0xb1a2d1]);
                                                }
                                        }
                                        var _0xe499b1 = new THREE[(_0x1c11('0x44'))](), _0x5af4a5 = new THREE[(_0x1c11('0x44'))](), _0x30a3e1 = new THREE[(_0x1c11('0x44'))](), _0x2cc7fb = new THREE[(_0x1c11('0x29'))](), _0x409272 = new THREE[(_0x1c11('0x29'))](), _0x5c8b76 = new THREE[(_0x1c11('0x29'))](), _0xd56a69 = new THREE[(_0x1c11('0x44'))](), _0x5489d0 = new THREE[(_0x1c11('0x44'))](), _0x4436d7 = new THREE[(_0x1c11('0x29'))](), _0x40025f = new THREE[(_0x1c11('0x44'))](_0x4bde1e['x'], _0x4bde1e['y'], _0x4bde1e['z']), _0x427ff4 = new THREE[(_0x1c11('0x44'))](_0x21e671['x'], _0x21e671['y'], _0x21e671['z']);
                                        for (_0xb1a2d1 = 0x0; _0xb1a2d1 < _0x56dd03[_0x1c11('0xb')]; _0xb1a2d1++) {
                                            var _0xb2be41 = _0x56dd03[_0xb1a2d1];
                                            _0xe499b1[_0x1c11('0x160')](this[_0x1c11('0x145')], 0x9 * _0xb2be41);
                                            _0x5af4a5[_0x1c11('0x160')](this[_0x1c11('0x145')], 0x9 * _0xb2be41 + 0x3);
                                            _0x30a3e1[_0x1c11('0x160')](this[_0x1c11('0x145')], 0x9 * _0xb2be41 + 0x6);
                                            var _0x372c89 = _0x37f77a(_0xe499b1, _0x5af4a5, _0x30a3e1, _0x40025f, _0x427ff4, _0x363109);
                                            if (_0x372c89 && (this[_0x1c11('0x146')] && (_0x2cc7fb[_0x1c11('0x160')](this[_0x1c11('0x146')], 0x6 * _0xb2be41), _0x409272[_0x1c11('0x160')](this[_0x1c11('0x146')], 0x6 * _0xb2be41 + 0x2), _0x5c8b76[_0x1c11('0x160')](this[_0x1c11('0x146')], 0x6 * _0xb2be41 + 0x4), _0x22b70d(_0x372c89, _0xe499b1, _0x5af4a5, _0x30a3e1, _0x2cc7fb, _0x409272, _0x5c8b76, _0xd56a69, _0x4436d7)), _0x514a98(_0xe499b1, _0x5af4a5, _0x30a3e1, _0x5489d0), _0x30a110[_0x1c11('0x32')]({
                                                    'point': _0x372c89,
                                                    'uv': _0x4436d7,
                                                    'face': {
                                                        'index': _0xb2be41,
                                                        'a': _0xe499b1[_0x1c11('0x79')](),
                                                        'b': _0x5af4a5[_0x1c11('0x79')](),
                                                        'c': _0x30a3e1[_0x1c11('0x79')](),
                                                        'normal': _0x5489d0
                                                    }
                                                }))) {
                                            }
                                        }
                                        return _0x30a110;
                                    }
                                }
                            ]);
                            return _0x2d7b77;
                        }())(_0x5a8af2, _0x2494a7, 0x7);
                    }
                },
                {
                    'key': _0x1c11('0x84'),
                    'value': function add(_0x321fad) {
                        if (this[_0x1c11('0x13f')][_0x321fad[_0x1c11('0xe8')]] || (this[_0x1c11('0x13f')][_0x1c11('0x32')]({
                                'id': _0x321fad[_0x1c11('0xe8')],
                                'val': _0x321fad
                            }), _0x321fad[_0x1c11('0x161')] = this[_0x1c11('0x140')](_0x321fad))) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0x15f'),
                    'value': function intersectRay(_0x57e5a2) {
                        var _0x2dfddc = this;
                        var _0x51facc = new THREE[(_0x1c11('0x162'))](), _0x437787 = new THREE[(_0x1c11('0x163'))]();
                        var _0x263343 = [];
                        var _0x3ae7dc = function _0x3ae7dc(_0x4ef990) {
                            var _0x1c9fc1 = _0x2dfddc[_0x1c11('0x13f')][_0x4ef990][_0x1c11('0x164')];
                            _0x51facc[_0x1c11('0x165')][_0x1c11('0xeb')](_0x57e5a2[_0x1c11('0x165')]);
                            _0x51facc[_0x1c11('0x120')][_0x1c11('0xeb')](_0x57e5a2[_0x1c11('0x120')]);
                            _0x437787[_0x1c11('0x166')](_0x1c9fc1[_0x1c11('0x167')]);
                            _0x51facc[_0x1c11('0x165')][_0x1c11('0x168')](_0x437787);
                            _0x51facc[_0x1c11('0x120')][_0x1c11('0x169')](_0x437787);
                            var _0x356f91 = _0x1c9fc1[_0x1c11('0x161')][_0x1c11('0x15f')](_0x51facc[_0x1c11('0x165')], _0x51facc[_0x1c11('0x120')], !0x0);
                            _0x356f91[_0x1c11('0xb')] > 0x0 && _0x356f91[_0x1c11('0x100')](function (_0x3df4d8) {
                                _0x3df4d8[_0x1c11('0x14')] = _0x1c9fc1;
                                _0x3df4d8[_0x1c11('0x16a')][_0x1c11('0x168')](_0x1c9fc1[_0x1c11('0x167')]);
                                _0x3df4d8[_0x1c11('0x16b')] = _0x57e5a2[_0x1c11('0x165')][_0x1c11('0x16c')](_0x3df4d8[_0x1c11('0x16a')]);
                            });
                            _0x263343 = _0x263343[_0x1c11('0x159')](_0x356f91);
                        };
                        for (var _0x293d7c = 0x0; _0x293d7c < this[_0x1c11('0x13f')][_0x1c11('0xb')]; _0x293d7c++) {
                            _0x3ae7dc(_0x293d7c);
                        }
                        return _0x263343[_0x1c11('0x158')](function (_0x243a45, _0x2e488a) {
                            return _0x243a45[_0x1c11('0x16b')] > _0x2e488a[_0x1c11('0x16b')];
                        }), _0x263343;
                    }
                }
            ]);
            return _0x4f7377;
        }();
        var _0x1ed68b = 0.000001;
        function _0x530e97(_0x71ae80, _0x7db604, _0x308bd7, _0x135bad) {
            var _0x5de31d = {
                'min': 0x0,
                'max': 0x0
            };
            return _0x135bad >= 0x0 ? (_0x5de31d[_0x1c11('0xa3')] = (_0x71ae80 - _0x308bd7) * _0x135bad, _0x5de31d[_0x1c11('0x11b')] = (_0x7db604 - _0x308bd7) * _0x135bad) : (_0x5de31d[_0x1c11('0xa3')] = (_0x7db604 - _0x308bd7) * _0x135bad, _0x5de31d[_0x1c11('0x11b')] = (_0x71ae80 - _0x308bd7) * _0x135bad), _0x5de31d;
        }
        var _0x37f77a = function () {
            var _0x31dd6e = new THREE[(_0x1c11('0x44'))](), _0x51facc = new THREE[(_0x1c11('0x44'))](), _0x2dba80 = new THREE[(_0x1c11('0x44'))](), _0x2cc3f7 = new THREE[(_0x1c11('0x44'))]();
            return function (_0x262eb8, _0x4ec080, _0x1d8cb1, _0x1dad39, _0x83f329, _0x445c97) {
                _0x51facc[_0x1c11('0x16d')](_0x4ec080, _0x262eb8);
                _0x2dba80[_0x1c11('0x16d')](_0x1d8cb1, _0x262eb8);
                _0x2cc3f7[_0x1c11('0x16e')](_0x51facc, _0x2dba80);
                var _0x5777c7 = void 0x0, _0x3c82dc = _0x83f329[_0x1c11('0xa2')](_0x2cc3f7);
                if (_0x3c82dc > 0x0) {
                    if (_0x445c97)
                        return null;
                    _0x5777c7 = 0x1;
                } else {
                    if (!(_0x3c82dc < 0x0))
                        return null;
                    _0x5777c7 = -0x1;
                    _0x3c82dc = -_0x3c82dc;
                }
                _0x31dd6e[_0x1c11('0x16d')](_0x1dad39, _0x262eb8);
                var _0xa8a9a7 = _0x5777c7 * _0x83f329[_0x1c11('0xa2')](_0x2dba80[_0x1c11('0x16e')](_0x31dd6e, _0x2dba80));
                if (_0xa8a9a7 < 0x0)
                    return null;
                var _0x454c9e = _0x5777c7 * _0x83f329[_0x1c11('0xa2')](_0x51facc[_0x1c11('0x16f')](_0x31dd6e));
                if (_0x454c9e < 0x0)
                    return null;
                if (_0xa8a9a7 + _0x454c9e > _0x3c82dc)
                    return null;
                var _0x2a997b = -_0x5777c7 * _0x31dd6e[_0x1c11('0xa2')](_0x2cc3f7);
                if (_0x2a997b < 0x0)
                    return null;
                var _0x481fe4 = _0x2a997b / _0x3c82dc;
                return new THREE[(_0x1c11('0x44'))]()[_0x1c11('0xeb')](_0x83f329)[_0x1c11('0x170')](_0x481fe4)[_0x1c11('0x84')](_0x1dad39);
            };
        }();
        function _0x20f0a3(_0xa0491d, _0x24c21f, _0x175c98) {
            var _0xf6b731 = _0x530e97(_0x175c98[_0x1c11('0x157')]['x'], _0x175c98[_0x1c11('0x156')]['x'], _0xa0491d['x'], _0x24c21f['x']), _0x3a4a78 = _0x530e97(_0x175c98[_0x1c11('0x157')]['y'], _0x175c98[_0x1c11('0x156')]['y'], _0xa0491d['y'], _0x24c21f['y']);
            if (_0xf6b731[_0x1c11('0xa3')] > _0x3a4a78[_0x1c11('0x11b')] || _0x3a4a78[_0x1c11('0xa3')] > _0xf6b731[_0x1c11('0x11b')])
                return !0x1;
            (_0x3a4a78[_0x1c11('0xa3')] > _0xf6b731[_0x1c11('0xa3')] || _0xf6b731[_0x1c11('0xa3')] != _0xf6b731[_0x1c11('0xa3')]) && (_0xf6b731[_0x1c11('0xa3')] = _0x3a4a78[_0x1c11('0xa3')]);
            (_0x3a4a78[_0x1c11('0x11b')] < _0xf6b731[_0x1c11('0x11b')] || _0xf6b731[_0x1c11('0x11b')] != _0xf6b731[_0x1c11('0x11b')]) && (_0xf6b731[_0x1c11('0x11b')] = _0x3a4a78[_0x1c11('0x11b')]);
            var _0x45d7f5 = _0x530e97(_0x175c98[_0x1c11('0x157')]['z'], _0x175c98[_0x1c11('0x156')]['z'], _0xa0491d['z'], _0x24c21f['z']);
            return !(_0xf6b731[_0x1c11('0xa3')] > _0x45d7f5[_0x1c11('0x11b')] || _0x45d7f5[_0x1c11('0xa3')] > _0xf6b731[_0x1c11('0x11b')]) && ((_0x45d7f5[_0x1c11('0xa3')] > _0xf6b731[_0x1c11('0xa3')] || _0xf6b731[_0x1c11('0xa3')] != _0xf6b731[_0x1c11('0xa3')]) && (_0xf6b731[_0x1c11('0xa3')] = _0x45d7f5[_0x1c11('0xa3')]), (_0x45d7f5[_0x1c11('0x11b')] < _0xf6b731[_0x1c11('0x11b')] || _0xf6b731[_0x1c11('0x11b')] != _0xf6b731[_0x1c11('0x11b')]) && (_0xf6b731[_0x1c11('0x11b')] = _0x45d7f5[_0x1c11('0x11b')]), !(_0xf6b731[_0x1c11('0x11b')] < 0x0));
        }
        function _0x22b70d(_0x3c43b5, _0x5962d9, _0xf1fbf8, _0x3015a9, _0x462e8a, _0x201e28, _0x2b8825, _0x301e22, _0x21a682) {
            return THREE[_0x1c11('0x171')][_0x1c11('0x172')](_0x3c43b5, _0x5962d9, _0xf1fbf8, _0x3015a9, _0x301e22), _0x462e8a[_0x1c11('0x170')](_0x301e22['x']), _0x201e28[_0x1c11('0x170')](_0x301e22['y']), _0x2b8825[_0x1c11('0x170')](_0x301e22['z']), _0x462e8a[_0x1c11('0x84')](_0x201e28)[_0x1c11('0x84')](_0x2b8825), _0x21a682[_0x1c11('0xeb')](_0x462e8a), _0x21a682;
        }
        function _0x514a98(_0x500b5b, _0x58b1a9, _0x62b46d, _0x1b636b) {
            var _0x4e2073 = _0x1b636b || new THREE[(_0x1c11('0x44'))](), _0x5847e6 = new THREE[(_0x1c11('0x44'))]();
            _0x4e2073[_0x1c11('0x16d')](_0x62b46d, _0x58b1a9);
            _0x5847e6[_0x1c11('0x16d')](_0x500b5b, _0x58b1a9);
            _0x4e2073[_0x1c11('0x16f')](_0x5847e6);
            var _0x19ec4c = _0x4e2073[_0x1c11('0x173')]();
            return _0x19ec4c > 0x0 ? _0x4e2073[_0x1c11('0x170')](0x1 / Math[_0x1c11('0x30')](_0x19ec4c)) : _0x4e2073[_0x1c11('0x9f')](0x0, 0x0, 0x0);
        }
        function _0x3ffff3(_0x18eb95, _0x4bf9b0, _0x514bad, _0x4de13f) {
            _0x514bad[0x7 * _0x4de13f] = _0x18eb95[0x7 * _0x4bf9b0];
            _0x514bad[0x7 * _0x4de13f + 0x1] = _0x18eb95[0x7 * _0x4bf9b0 + 0x1];
            _0x514bad[0x7 * _0x4de13f + 0x2] = _0x18eb95[0x7 * _0x4bf9b0 + 0x2];
            _0x514bad[0x7 * _0x4de13f + 0x3] = _0x18eb95[0x7 * _0x4bf9b0 + 0x3];
            _0x514bad[0x7 * _0x4de13f + 0x4] = _0x18eb95[0x7 * _0x4bf9b0 + 0x4];
            _0x514bad[0x7 * _0x4de13f + 0x5] = _0x18eb95[0x7 * _0x4bf9b0 + 0x5];
            _0x514bad[0x7 * _0x4de13f + 0x6] = _0x18eb95[0x7 * _0x4bf9b0 + 0x6];
        }
        function _0x116421(_0x2b47a8, _0x3e30d6, _0x278b36, _0x4b597c, _0x3af6ac, _0x75ca81, _0xf6dddf, _0x7be34f, _0x1d20e0) {
            _0x2b47a8[0x7 * _0x3e30d6] = _0x278b36;
            _0x2b47a8[0x7 * _0x3e30d6 + 0x1] = _0x4b597c;
            _0x2b47a8[0x7 * _0x3e30d6 + 0x2] = _0x3af6ac;
            _0x2b47a8[0x7 * _0x3e30d6 + 0x3] = _0x75ca81;
            _0x2b47a8[0x7 * _0x3e30d6 + 0x4] = _0xf6dddf;
            _0x2b47a8[0x7 * _0x3e30d6 + 0x5] = _0x7be34f;
            _0x2b47a8[0x7 * _0x3e30d6 + 0x6] = _0x1d20e0;
        }
        var _0x13e180 = function () {
            function _0x26203f(_0x3130c0, _0xab980, _0xfbc80d, _0x2ff108, _0x280065) {
                _classCallCheck(this, _0x26203f);
                this[_0x1c11('0x157')] = _0x3130c0;
                this[_0x1c11('0x156')] = _0xab980;
                this[_0x1c11('0x151')] = _0xfbc80d;
                this[_0x1c11('0x152')] = _0x2ff108;
                this[_0x1c11('0x15b')] = _0x280065;
                this[_0x1c11('0x15c')] = null;
                this[_0x1c11('0x15d')] = null;
            }
            _createClass(_0x26203f, [
                {
                    'key': _0x1c11('0x150'),
                    'value': function elementCount() {
                        return this[_0x1c11('0x152')] - this[_0x1c11('0x151')];
                    }
                },
                {
                    'key': _0x1c11('0x153'),
                    'value': function centerX() {
                        return 0.5 * (this[_0x1c11('0x157')]['x'] + this[_0x1c11('0x156')]['x']);
                    }
                },
                {
                    'key': _0x1c11('0x154'),
                    'value': function centerY() {
                        return 0.5 * (this[_0x1c11('0x157')]['y'] + this[_0x1c11('0x156')]['y']);
                    }
                },
                {
                    'key': _0x1c11('0x155'),
                    'value': function centerZ() {
                        return 0.5 * (this[_0x1c11('0x157')]['z'] + this[_0x1c11('0x156')]['z']);
                    }
                },
                {
                    'key': _0x1c11('0x15e'),
                    'value': function clearShapes() {
                        this[_0x1c11('0x151')] = -0x1;
                        this[_0x1c11('0x152')] = -0x1;
                    }
                }
            ]);
            return _0x26203f;
        }();
    },
    function (_0x14c2d6, _0x5e2570, _0x36ced2) {
        _0x36ced2(0x8);
        _0x14c2d6[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xbd')] = function () {
            function _0x2fa63e(_0x17397b) {
                _classCallCheck(this, _0x2fa63e);
                _0x17397b = _0x17397b || {};
                this[_0x1c11('0x174')] = void 0x0 === _0x17397b[_0x1c11('0x174')] || _0x17397b[_0x1c11('0x174')];
                this[_0x1c11('0x175')] = void 0x0 !== _0x17397b[_0x1c11('0x175')] ? _0x17397b[_0x1c11('0x175')] : ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x176')];
                this['vt'] = new THREE[(_0x1c11('0x177'))]();
                this['ft'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x178')]);
                this['pt'] = void 0x0 === _0x17397b[_0x1c11('0x179')] || _0x17397b[_0x1c11('0x179')];
                if (this['pt'] ? (this['wt'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x17a')]), this[_0x1c11('0x174')] = !0x0) : (this['wt'] = new THREE[(_0x1c11('0x17b'))](), this['wt'][_0x1c11('0x17c')] = THREE[_0x1c11('0x17d')])) {
                }
            }
            _createClass(_0x2fa63e, [
                {
                    'key': _0x1c11('0x125'),
                    'value': function dispose() {
                        this['Et'] && this['Et'][_0x1c11('0x125')]();
                        this['Rt'] && this['Rt'][_0x1c11('0x125')]();
                        this['Tt'] && this['Tt'][_0x1c11('0x125')]();
                    }
                },
                {
                    'key': _0x1c11('0xf6'),
                    'value': function setSize(_0x1cfea2, _0x1ec747) {
                        this['Et'] && this['Et'][_0x1c11('0xf6')](_0x1cfea2, _0x1ec747);
                        this['Rt'] && this['Rt'][_0x1c11('0xf6')](_0x1cfea2, _0x1ec747);
                        this['Tt'] && this['Tt'][_0x1c11('0xf6')](_0x1cfea2, _0x1ec747);
                    }
                },
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x543611, _0xeaf54c, _0x4d05e5) {
                        this['xt'] || this['Y'](_0x543611);
                        var _0x1ce99f = _0x543611[_0x1c11('0x17e')](), _0x483cc8 = _0x543611[_0x1c11('0x17f')](), _0x2a570e = _0x543611[_0x1c11('0x180')], _0x30bcbe = _0x543611[_0x1c11('0x181')][_0x1c11('0xf0')];
                        _0x543611[_0x1c11('0x181')][_0x1c11('0xf0')] = !0x1;
                        _0x543611[_0x1c11('0x180')] = !0x1;
                        _0x543611[_0x1c11('0x182')](new THREE[(_0x1c11('0x183'))](0x0, 0x0, 0x0), 0x0);
                        this['Dt'](_0x543611, _0xeaf54c, _0x4d05e5);
                        _0x543611[_0x1c11('0x180')] = _0x2a570e;
                        _0x543611[_0x1c11('0x181')][_0x1c11('0xf0')] = _0x30bcbe;
                        _0x543611[_0x1c11('0x182')](_0x1ce99f, _0x483cc8);
                    }
                },
                {
                    'key': 'Y',
                    'value': function Y(_0x2678c8) {
                        var _0x5e2570 = _0x2678c8[_0x1c11('0x184')][_0x1c11('0x185')](_0x1c11('0x186')), _0x36ced2 = _0x2678c8[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x225d85 = _0x2678c8[_0x1c11('0xfd')]()[_0x1c11('0x24')];
                        if (!this[_0x1c11('0x174')] && _0x5e2570 && !this['Tt']) {
                            var _0x20f88a = {
                                'minFilter': THREE[_0x1c11('0x8c')],
                                'magFilter': THREE[_0x1c11('0x8c')],
                                'format': THREE[_0x1c11('0xca')]
                            };
                            this['Tt'] = new THREE[(_0x1c11('0xcb'))](_0x36ced2, _0x225d85, _0x20f88a);
                            if (this['at'] || (this['at'] = new THREE[(_0x1c11('0x187'))](), this['at'][_0x1c11('0x87')] = THREE[_0x1c11('0x188')])) {
                            }
                            ;
                            this['Tt'][_0x1c11('0x115')] = this['at'];
                        }
                        if (!_0x5e2570 || this[_0x1c11('0x174')]) {
                            var _0x427fc5 = {
                                'minFilter': THREE[_0x1c11('0x8c')],
                                'magFilter': THREE[_0x1c11('0x8c')],
                                'format': THREE[_0x1c11('0xca')]
                            };
                            if (this[_0x1c11('0x175')] === ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x189')] && (this['Rt'] || (this['Rt'] = new THREE[(_0x1c11('0xcb'))](_0x36ced2, _0x225d85, _0x427fc5), this['Rt'][_0x1c11('0x115')] = this['at']), this['Tt'] || (this['Tt'] = new THREE[(_0x1c11('0xcb'))](_0x36ced2, _0x225d85, _0x427fc5), this['Tt'][_0x1c11('0x115')] = this['at'])), this[_0x1c11('0x175')] === ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x176')] && (this['Et'] || (this['Et'] = new THREE[(_0x1c11('0xcb'))](_0x36ced2, _0x225d85, _0x427fc5), this['Et'][_0x1c11('0x115')] = this['at']))) {
                            }
                        }
                        this['xt'] = !0x0;
                    }
                },
                {
                    'key': 'Dt',
                    'value': function Dt(_0x1c4490, _0x3c0a71, _0x115207) {
                        (function (_0x584a9b) {
                            _0x584a9b[_0x1c11('0xcd')](function (_0x145a22) {
                                if (_0x145a22[_0x1c11('0xce')] || _0x145a22[_0x1c11('0x18a')] || _0x145a22[_0x1c11('0x18b')] || _0x145a22[_0x1c11('0x18c')] || _0x145a22[_0x1c11('0x18d')]) {
                                    var _0x529611 = _0x145a22[_0x1c11('0x96')] && _0x145a22[_0x1c11('0x96')][_0x1c11('0x18e')] || _0x145a22[_0x1c11('0x18f')];
                                    if ((_0x529611 = (_0x529611 = _0x145a22[_0x1c11('0x96')] && _0x145a22[_0x1c11('0x96')][_0x1c11('0x18e')] && !_0x145a22[_0x1c11('0x96')][_0x1c11('0x190')] || !!_0x145a22[_0x1c11('0x18f')]) || _0x145a22[_0x1c11('0x96')][_0x1c11('0x191')] > 0x0) && (_0x145a22[_0x1c11('0x192')] = _0x145a22[_0x1c11('0x193')], _0x145a22[_0x1c11('0x193')] = !0x1)) {
                                    }
                                }
                            });
                        }(_0x3c0a71));
                        var _0x426660 = _0x1c4490[_0x1c11('0x184')][_0x1c11('0x185')](_0x1c11('0x186'));
                        if (_0x426660 && !this[_0x1c11('0x174')] && (_0x3c0a71[_0x1c11('0x194')] = this['vt'], _0x1c4490[_0x1c11('0x97')](_0x3c0a71, _0x115207, this['Tt'], !0x0), _0x3c0a71[_0x1c11('0x194')] = null), _0x426660 && !this[_0x1c11('0x174')] || (this[_0x1c11('0x175')] === ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x189')] && (_0x3c0a71[_0x1c11('0x194')] = this['vt'], _0x1c4490[_0x1c11('0x97')](_0x3c0a71, _0x115207, this['Tt'], !0x0), _0x3c0a71[_0x1c11('0x194')] = null, _0x3c0a71[_0x1c11('0x194')] = this['wt'], this['wt'][_0x1c11('0x195')] || (this['wt'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['x'] = _0x115207[_0x1c11('0x197')], this['wt'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['y'] = _0x115207[_0x1c11('0x198')]), _0x1c4490[_0x1c11('0x97')](_0x3c0a71, _0x115207, this['Rt'], !0x0), _0x3c0a71[_0x1c11('0x194')] = null), this[_0x1c11('0x175')] === ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x176')] && (_0x3c0a71[_0x1c11('0x194')] = this['ft'], this['ft'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['x'] = _0x115207[_0x1c11('0x197')], this['ft'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['y'] = _0x115207[_0x1c11('0x198')], _0x1c4490[_0x1c11('0x97')](_0x3c0a71, _0x115207, this['Et'], !0x0), _0x3c0a71[_0x1c11('0x194')] = null)), function (_0x498595) {
                                _0x498595[_0x1c11('0xcd')](function (_0x3c4298) {
                                    if (_0x3c4298[_0x1c11('0x192')] && (_0x3c4298[_0x1c11('0x193')] = _0x3c4298[_0x1c11('0x192')], _0x3c4298[_0x1c11('0x192')] = void 0x0)) {
                                    }
                                });
                            }(_0x3c0a71)) {
                        }
                    }
                }
            ]);
            return _0x2fa63e;
        }();
        ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x189')] = 0x0;
        ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x176')] = 0x1;
    },
    function (_0x947033, _0x2437cf) {
        _0x947033[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x178')] = {
            'uniforms': {
                'cameraNearFar': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))]()
                }
            },
            'vertexShader': _0x1c11('0x199'),
            'fragmentShader': _0x1c11('0x19a')
        };
        _0x947033[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x17a')] = {
            'uniforms': {
                'cameraNearFar': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))]()
                }
            },
            'vertexShader': _0x1c11('0x19b'),
            'fragmentShader': _0x1c11('0x19c')
        };
    },
    function (_0x218742, _0x50befe, _0x18737f) {
        _0x18737f(0x0);
        _0x18737f(0xa);
        _0x18737f(0x1);
        _0x218742[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xc4')] = function () {
            function _0x54a3ce(_0x179796) {
                _classCallCheck(this, _0x54a3ce);
                if (_0x179796 = _0x179796 || {}, this[_0x1c11('0x19d')] = void 0x0 !== _0x179796[_0x1c11('0x19d')] ? _0x179796[_0x1c11('0x19d')] : 0.25, this[_0x1c11('0x19e')] = void 0x0 !== _0x179796[_0x1c11('0x19e')] ? _0x179796[_0x1c11('0x19e')] : 0.8, this[_0x1c11('0x19f')] = void 0x0 === _0x179796[_0x1c11('0x19f')] || _0x179796[_0x1c11('0x19f')], this[_0x1c11('0x1a0')] = void 0x0 !== _0x179796[_0x1c11('0x1a0')] ? _0x179796[_0x1c11('0x1a0')] : 0.001, this[_0x1c11('0x1a1')] = void 0x0 !== _0x179796[_0x1c11('0x1a1')] ? _0x179796[_0x1c11('0x1a1')] : 0x258, this['Nt'] = void 0x0 !== _0x179796[_0x1c11('0x1a2')] ? _0x179796[_0x1c11('0x1a2')] : 0x4, this[_0x1c11('0x1a3')] = !0x0, this[_0x1c11('0x1a4')] = 0xa, this[_0x1c11('0xf0')] = !0x0, this[_0x1c11('0x90')] = !0x0, this['gt'] = 0x0, this['Pt'](this[_0x1c11('0x1a1')]), this['Ot'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x1a5')]), this['Ot'][_0x1c11('0x7a')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](this['Ot'][_0x1c11('0x7a')]), this['Ot'][_0x1c11('0x1a6')][_0x1c11('0x1a7')] = this['Nt'], this['Mt'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x33')]), this['A'] = 0x0) {
                }
            }
            _createClass(_0x54a3ce, [
                {
                    'key': _0x1c11('0xe5'),
                    'value': function convergenceMetric() {
                        return this[_0x1c11('0xf0')] ? this['A'] * this['Nt'] / (this['Ct'] - 0x1) : 0x1;
                    }
                },
                {
                    'key': _0x1c11('0x125'),
                    'value': function dispose() {
                        if (this['St'] && (this['St'][_0x1c11('0x125')](), this['Ht'][_0x1c11('0x125')]())) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x56fba2, _0x15ef7f, _0x13fc4b, _0x4ae466) {
                        if (this[_0x1c11('0x90')] && (this['A'] = 0x0, this[_0x1c11('0x90')] = !0x1), this[_0x1c11('0xe5')]() >= 0x1)
                            return;
                        if (this['A']++, this['A'] = Math[_0x1c11('0xa3')](this['A'], this['Ct'] - 0x1), this['St'] || this['Y'](_0x56fba2), this['Pt'](this[_0x1c11('0x1a1')])) {
                        }
                        ;
                        var _0x468988 = _0x56fba2[_0x1c11('0x17e')](), _0x376424 = _0x56fba2[_0x1c11('0x17f')](), _0x355c26 = _0x56fba2[_0x1c11('0x180')];
                        _0x56fba2[_0x1c11('0x180')] = !0x1;
                        var _0xbc2e4d = _0x56fba2[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x1d43fe = _0x56fba2[_0x1c11('0xfd')]()[_0x1c11('0x24')];
                        if (this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1a8')][_0x1c11('0xe')][_0x1c11('0x9f')](_0xbc2e4d, _0x1d43fe), this['yt'](_0x15ef7f, _0x13fc4b)) {
                        }
                        ;
                        var _0x557c51 = this['A'] % 0x2 == 0x0 ? this['Ht'] : this['St'], _0x21b622 = this['A'] % 0x2 == 0x0 ? this['St'] : this['Ht'];
                        if (this['_t'](_0x56fba2, _0x557c51, _0x21b622), this[_0x1c11('0x1a3')] && this[_0x1c11('0xe5')]() > 0x0 && (_0x4ae466[_0x1c11('0x1a4')] = this[_0x1c11('0x1a4')], _0x4ae466[_0x1c11('0x97')](_0x56fba2, _0x21b622, _0x15ef7f, _0x13fc4b)), this['zt'](_0x56fba2, _0x557c51, _0x21b622), _0x56fba2[_0x1c11('0x180')] = _0x355c26, _0x56fba2[_0x1c11('0x182')](_0x468988), _0x56fba2[_0x1c11('0x1a9')](_0x376424), _0x56fba2[_0x1c11('0xfe')] = this[_0x1c11('0x19f')] ? _0x557c51 : _0x21b622) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0xf6'),
                    'value': function setSize(_0x10da1f, _0x5143f2) {
                        if (this['Ht'] && this['Ht'][_0x1c11('0xf6')](_0x10da1f, _0x5143f2), this['St'] && this['St'][_0x1c11('0xf6')](_0x10da1f, _0x5143f2), this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1a8')][_0x1c11('0xe')][_0x1c11('0x9f')](_0x10da1f, _0x5143f2)) {
                        }
                    }
                },
                {
                    'key': 'Y',
                    'value': function Y(_0x49f133) {
                        var _0x50befe = _0x49f133[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x18737f = _0x49f133[_0x1c11('0xfd')]()[_0x1c11('0x24')];
                        if (!this['St']) {
                            var _0x42abb7 = {
                                'minFilter': THREE[_0x1c11('0x8c')],
                                'magFilter': THREE[_0x1c11('0x8c')],
                                'format': THREE[_0x1c11('0xca')]
                            };
                            if (this['St'] = new THREE[(_0x1c11('0xcb'))](_0x50befe, _0x18737f, _0x42abb7), this['Ht'] = new THREE[(_0x1c11('0xcb'))](_0x50befe, _0x18737f, _0x42abb7)) {
                            }
                        }
                    }
                },
                {
                    'key': '_t',
                    'value': function _t(_0x11a3d2, _0x45ddff, _0x20a2dc) {
                        if (this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1aa')][_0x1c11('0xe')] = _0x45ddff, ELPIXEL[_0x1c11('0x98')](_0x11a3d2, this['Ot'], _0x20a2dc)) {
                        }
                    }
                },
                {
                    'key': 'zt',
                    'value': function zt(_0x47d69e, _0x110749, _0x21d53b) {
                        if (this[_0x1c11('0x19f')] && (this['Mt'][_0x1c11('0x7a')][_0x1c11('0x1ab')][_0x1c11('0xe')] = _0x21d53b, this['Mt'][_0x1c11('0x7a')][_0x1c11('0x1ac')][_0x1c11('0xe')] = this[_0x1c11('0xe5')](), ELPIXEL[_0x1c11('0x98')](_0x47d69e, this['Mt'], _0x110749))) {
                        }
                    }
                },
                {
                    'key': 'yt',
                    'value': function yt(_0x44edf2, _0x4e6de5) {
                        var _0x18737f = 0x1 / (0x2 * Math[_0x1c11('0x1ad')](THREE[_0x1c11('0x1ae')][_0x1c11('0x1af')] * _0x44edf2[_0x1c11('0x1b0')] / 0x2)), _0x31b99c = this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1b1')][_0x1c11('0xe')];
                        if (_0x31b99c['x'] = _0x18737f, _0x31b99c['y'] = this[_0x1c11('0x19d')], _0x31b99c['z'] = this[_0x1c11('0x19e')], _0x31b99c['w'] = this['A']) {
                        }
                        var _0x12c0f4 = this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1b2')][_0x1c11('0xe')];
                        _0x12c0f4['x'] = this[_0x1c11('0x1a0')];
                        _0x12c0f4['y'] = 0.001;
                        var _0x910bca = this['Ot'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')];
                        var _0x5887d9 = void 0x0;
                        _0x910bca['x'] = _0x44edf2[_0x1c11('0x197')];
                        _0x910bca['y'] = _0x44edf2[_0x1c11('0x198')];
                        this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1b3')][_0x1c11('0xe')] = _0x44edf2[_0x1c11('0xec')];
                        _0x5887d9 = _0x4e6de5['at'] ? _0x4e6de5['at'] : _0x4e6de5['Rt'] ? _0x4e6de5['Rt'][_0x1c11('0xff')] : null;
                        var _0x44b3bf = _0x4e6de5['Tt'] ? _0x4e6de5['Tt'][_0x1c11('0xff')] : null;
                        var _0x3ae523 = void 0x0;
                        _0x4e6de5['Rt'] || (_0x3ae523 = _0x4e6de5['Et'] ? _0x4e6de5['Et'][_0x1c11('0xff')] : null);
                        var _0x4b04d4 = _0x4e6de5['at'] ? 0x0 : 0x1;
                        if (_0x4e6de5[_0x1c11('0x174')] && _0x4e6de5[_0x1c11('0x175')] === ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x176')] && (_0x4b04d4 = 0x2), this['Ot'][_0x1c11('0x1a6')][_0x1c11('0x1b4')] = _0x4b04d4, this['Ot'][_0x1c11('0x1a6')][_0x1c11('0x1b5')] = _0x3ae523 ? 0x1 : 0x0, this['Ot'][_0x1c11('0x1a6')][_0x1c11('0x1b6')] = _0x4e6de5['pt'] ? 0x1 : 0x0, _0x3ae523 ? this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1b7')][_0x1c11('0xe')] = _0x3ae523 : (this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1b8')][_0x1c11('0xe')] = _0x44b3bf, this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1b9')][_0x1c11('0xe')] = _0x5887d9), this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1ba')][_0x1c11('0xe')] = this['It'], this['Ot'][_0x1c11('0x7a')][_0x1c11('0x1bb')][_0x1c11('0xe')] = this['It'][_0x1c11('0x117')][_0x1c11('0x23')]) {
                        }
                    }
                },
                {
                    'key': 'Pt',
                    'value': function Pt(_0x34372b) {
                        if (_0x34372b !== this['gt'] && (this['gt'] = _0x34372b, this['At'] = ELPIXEL[_0x1c11('0x2e')](_0x34372b, -0x1, ELPIXEL[_0x1c11('0x2b')], ELPIXEL[_0x1c11('0x2f')]), this['It'] = ELPIXEL[_0x1c11('0x86')](ELPIXEL[_0x1c11('0x85')](this['At'])), this['Ct'] = this['At'][_0x1c11('0xb')])) {
                        }
                    }
                }
            ]);
            return _0x54a3ce;
        }();
    },
    function (_0x51c944, _0x307d50) {
        _0x51c944[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x1a5')] = {
            'blending': THREE[_0x1c11('0x1bc')],
            'defines': {
                'SAMPLES_PER_FRAME': 0x4,
                'DEPTH_PACKING_MODE': 0x1,
                'PERSPECTIVE_CAMERA': 0x1,
                'LINEAR_DEPTH': 0x1
            },
            'uniforms': {
                'tQuasiRandomSamples': {
                    'type': 't',
                    'value': null
                },
                'tAOSumPrevious': {
                    'type': 't',
                    'value': null
                },
                'tDepth': {
                    'type': 't',
                    'value': null
                },
                'tNormal': {
                    'type': 't',
                    'value': null
                },
                'tNormalDepth': {
                    'type': 't',
                    'value': null
                },
                'cameraNearFar': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))]()
                },
                'saoData': {
                    'type': 'v4',
                    'value': new THREE[(_0x1c11('0x1bd'))]()
                },
                'ProjectionMatrix': {
                    'type': 'm4',
                    'value': new THREE[(_0x1c11('0x163'))]()
                },
                'numQuasiSamples': {
                    'type': 'f',
                    'value': 0x0
                },
                'saoBiasEpsilon': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))]()
                },
                'size': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))](0x200, 0x200)
                }
            },
            'vertexShader': [
                _0x1c11('0x35'),
                _0x1c11('0x38'),
                _0x1c11('0x126'),
                _0x1c11('0x127'),
                '}'
            ][_0x1c11('0x3b')]('\x0a'),
            'fragmentShader': [
                _0x1c11('0x1be'),
                _0x1c11('0x3d'),
                _0x1c11('0x35'),
                _0x1c11('0x1bf'),
                _0x1c11('0x1c0'),
                _0x1c11('0x1c1'),
                _0x1c11('0x5e'),
                _0x1c11('0x1c2'),
                _0x1c11('0x60'),
                _0x1c11('0x1c3'),
                _0x1c11('0x62'),
                _0x1c11('0x1c4'),
                _0x1c11('0x1c5'),
                _0x1c11('0x1c6'),
                _0x1c11('0x1c7'),
                _0x1c11('0x1c8'),
                _0x1c11('0x1c9'),
                _0x1c11('0x1ca'),
                _0x1c11('0x1cb'),
                _0x1c11('0x1cc'),
                _0x1c11('0x1cd'),
                _0x1c11('0x1ce'),
                _0x1c11('0x60'),
                _0x1c11('0x1cf'),
                _0x1c11('0x62'),
                '}',
                _0x1c11('0x1d0'),
                _0x1c11('0x1d1'),
                _0x1c11('0x1d2'),
                _0x1c11('0x1d3'),
                _0x1c11('0x1d4'),
                '}',
                _0x1c11('0x1d5'),
                _0x1c11('0x1d6'),
                _0x1c11('0x1d7'),
                _0x1c11('0x1d8'),
                '}',
                _0x1c11('0x1d9'),
                _0x1c11('0x1da'),
                _0x1c11('0x1db'),
                _0x1c11('0x1dc'),
                _0x1c11('0x1dd'),
                '}',
                _0x1c11('0x1de'),
                _0x1c11('0x1df'),
                _0x1c11('0x1e0'),
                _0x1c11('0x1e1'),
                _0x1c11('0x1e2'),
                _0x1c11('0x1e3'),
                _0x1c11('0x1e4'),
                _0x1c11('0x1e5'),
                _0x1c11('0x1e6'),
                _0x1c11('0x1e7'),
                _0x1c11('0x1e8'),
                _0x1c11('0x1e9'),
                _0x1c11('0x1ea'),
                '}',
                _0x1c11('0x1eb'),
                _0x1c11('0x1ec'),
                _0x1c11('0x1ed'),
                _0x1c11('0x60'),
                _0x1c11('0x1ee'),
                _0x1c11('0x1ef'),
                _0x1c11('0x62'),
                _0x1c11('0x1f0'),
                _0x1c11('0x1f1'),
                '}',
                _0x1c11('0x1f2'),
                _0x1c11('0x1f3'),
                '}',
                _0x1c11('0x38'),
                _0x1c11('0x1f4'),
                _0x1c11('0x1f5'),
                _0x1c11('0x1dd'),
                '}',
                _0x1c11('0x1eb'),
                _0x1c11('0x1f6'),
                _0x1c11('0x60'),
                _0x1c11('0x1f7'),
                _0x1c11('0x62'),
                _0x1c11('0x1f8'),
                _0x1c11('0x1f9'),
                _0x1c11('0x1fa'),
                _0x1c11('0x1fb'),
                _0x1c11('0x1fc'),
                _0x1c11('0x1fd'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
    },
    function (_0x5b8845, _0x2cbc81, _0x543fd2) {
        _0x543fd2(0x0);
        _0x543fd2(0xc);
        _0x5b8845[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xc5')] = function () {
            function _0xe55be1(_0x326ef9) {
                _classCallCheck(this, _0xe55be1);
                if (_0x326ef9 = _0x326ef9 || {}, this[_0x1c11('0x19d')] = void 0x0 !== _0x326ef9[_0x1c11('0x19d')] ? _0x326ef9[_0x1c11('0x19d')] : 0.25, this[_0x1c11('0x19e')] = void 0x0 !== _0x326ef9[_0x1c11('0x19e')] ? _0x326ef9[_0x1c11('0x19e')] : 0.8, this[_0x1c11('0x1a0')] = void 0x0 !== _0x326ef9[_0x1c11('0x1a0')] ? _0x326ef9[_0x1c11('0x1a0')] : 0.001, this[_0x1c11('0x1a3')] = !0x0, this[_0x1c11('0x1a4')] = 0x1, this[_0x1c11('0x90')] = !0x0, this['Vt'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x1fe')]), this['Vt'][_0x1c11('0x7a')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](this['Vt'][_0x1c11('0x7a')]), this['Vt'][_0x1c11('0x1a6')] = Object[_0x1c11('0x1ff')]({}, this['Vt'][_0x1c11('0x1a6')]), this['A'] = 0x0) {
                }
            }
            _createClass(_0xe55be1, [
                {
                    'key': _0x1c11('0x125'),
                    'value': function dispose() {
                        if (this['St'] && (this['St'][_0x1c11('0x125')](), this['St'] = null)) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0xf6'),
                    'value': function setSize(_0x2464c5, _0x296aab) {
                        if (this['St'] && this['St'][_0x1c11('0xf6')](_0x2464c5, _0x296aab), this['Vt'][_0x1c11('0x7a')][_0x1c11('0x1a8')][_0x1c11('0xe')][_0x1c11('0x9f')](_0x2464c5, _0x296aab)) {
                        }
                    }
                },
                {
                    'key': 'yt',
                    'value': function yt(_0x5ec926, _0x2ba002) {
                        var _0x543fd2 = 0x1 / (0x2 * Math[_0x1c11('0x1ad')](THREE[_0x1c11('0x1ae')][_0x1c11('0x1af')] * _0x5ec926[_0x1c11('0x1b0')] / 0x2)), _0x5a900f = this['Vt'][_0x1c11('0x7a')][_0x1c11('0x1b1')][_0x1c11('0xe')];
                        if (_0x5a900f['x'] = _0x543fd2, _0x5a900f['y'] = this[_0x1c11('0x19d')], _0x5a900f['z'] = this[_0x1c11('0x19e')], _0x5a900f['w'] = this['A']++) {
                        }
                        var _0x396199 = this['Vt'][_0x1c11('0x7a')][_0x1c11('0x1b2')][_0x1c11('0xe')];
                        _0x396199['x'] = this[_0x1c11('0x1a0')];
                        _0x396199['y'] = 0.001;
                        var _0x4a32a6 = this['Vt'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')];
                        var _0xd84c39 = void 0x0;
                        if (_0x4a32a6['x'] = _0x5ec926[_0x1c11('0x197')], _0x4a32a6['y'] = _0x5ec926[_0x1c11('0x198')], this['Vt'][_0x1c11('0x7a')][_0x1c11('0x1b3')][_0x1c11('0xe')] = _0x5ec926[_0x1c11('0xec')], _0xd84c39 = _0x2ba002['at'] ? _0x2ba002['at'] : _0x2ba002['Rt'] ? _0x2ba002['Rt'][_0x1c11('0xff')] : null) {
                        }
                        var _0x5bdf84 = _0x2ba002['Tt'] ? _0x2ba002['Tt'][_0x1c11('0xff')] : null;
                        var _0x2648e5 = void 0x0;
                        _0x2ba002['Rt'] || (_0x2648e5 = _0x2ba002['Et'] ? _0x2ba002['Et'][_0x1c11('0xff')] : null);
                        var _0x5c87f5 = _0x2ba002['at'] ? 0x0 : 0x1;
                        if (_0x2ba002[_0x1c11('0x174')] && _0x2ba002[_0x1c11('0x175')] === ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x176')] && (_0x5c87f5 = 0x2), this['Vt'][_0x1c11('0x1a6')][_0x1c11('0x1b4')] = _0x5c87f5, this['Vt'][_0x1c11('0x1a6')][_0x1c11('0x1b5')] = _0x2648e5 ? 0x1 : 0x0, this['Vt'][_0x1c11('0x1a6')][_0x1c11('0x1b6')] = _0x2ba002['pt'] ? 0x1 : 0x0, _0x2648e5 ? this['Vt'][_0x1c11('0x7a')][_0x1c11('0x1b7')][_0x1c11('0xe')] = _0x2648e5 : (this['Vt'][_0x1c11('0x7a')][_0x1c11('0x1b8')][_0x1c11('0xe')] = _0x5bdf84, this['Vt'][_0x1c11('0x7a')][_0x1c11('0x1b9')][_0x1c11('0xe')] = _0xd84c39)) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0xe5'),
                    'value': function convergenceMetric() {
                        return this['A'] > 0x1 ? 0x1 : 0x0;
                    }
                },
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x45349f, _0xf95863, _0x26a774, _0x1c2d96) {
                        if (this[_0x1c11('0x90')] && (this['A'] = 0x0, this[_0x1c11('0x90')] = !0x1)) {
                        }
                        this[_0x1c11('0xe5')]();
                        this['St'] || this['Y'](_0x45349f);
                        var _0x57df77 = _0x45349f[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x49d620 = _0x45349f[_0x1c11('0xfd')]()[_0x1c11('0x24')];
                        if (this['Vt'][_0x1c11('0x7a')][_0x1c11('0x1a8')][_0x1c11('0xe')][_0x1c11('0x9f')](_0x57df77, _0x49d620), this['yt'](_0xf95863, _0x26a774)) {
                        }
                        var _0x572b53 = _0x45349f[_0x1c11('0x17e')](), _0x2c530f = _0x45349f[_0x1c11('0x17f')](), _0x5142da = _0x45349f[_0x1c11('0x180')];
                        if (_0x45349f[_0x1c11('0x180')] = !0x1, ELPIXEL[_0x1c11('0x98')](_0x45349f, this['Vt'], this['St']), this[_0x1c11('0x1a3')] && (_0x1c2d96[_0x1c11('0x1a4')] = this[_0x1c11('0x1a4')], _0x1c2d96[_0x1c11('0x97')](_0x45349f, this['St'], _0xf95863, _0x26a774)), _0x45349f[_0x1c11('0x180')] = _0x5142da, _0x45349f[_0x1c11('0x182')](_0x572b53), _0x45349f[_0x1c11('0x1a9')](_0x2c530f), _0x45349f[_0x1c11('0xfe')] = this['St']) {
                        }
                    }
                },
                {
                    'key': 'Y',
                    'value': function Y(_0x309aa1) {
                        var _0x2cbc81 = _0x309aa1[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x543fd2 = _0x309aa1[_0x1c11('0xfd')]()[_0x1c11('0x24')];
                        if (!this['St']) {
                            var _0x1a9446 = {
                                'minFilter': THREE[_0x1c11('0x8c')],
                                'magFilter': THREE[_0x1c11('0x8c')],
                                'format': THREE[_0x1c11('0xca')]
                            };
                            this['St'] = new THREE[(_0x1c11('0xcb'))](_0x2cbc81, _0x543fd2, _0x1a9446);
                        }
                    }
                }
            ]);
            return _0xe55be1;
        }();
    },
    function (_0x10eeab, _0x5bb89d) {
        _0x10eeab[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x1fe')] = {
            'defines': {
                'NUM_SAMPLES': 0xb,
                'NUM_SPIRAL_TURNS': 0x3,
                'DEPTH_NORMAL_TEXTURE': 0x0,
                'DEPTH_PACKING_MODE': 0x1,
                'PERSPECTIVE_CAMERA': 0x1
            },
            'uniforms': {
                'tDepth': {
                    'type': 't',
                    'value': null
                },
                'tNormal': {
                    'type': 't',
                    'value': null
                },
                'tNormalDepth': {
                    'type': 't',
                    'value': null
                },
                'cameraNearFar': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))]()
                },
                'saoData': {
                    'type': 'v4',
                    'value': new THREE[(_0x1c11('0x1bd'))]()
                },
                'size': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))](0x200, 0x200)
                },
                'ProjectionMatrix': {
                    'type': 'm4',
                    'value': new THREE[(_0x1c11('0x163'))]()
                },
                'saoBiasEpsilon': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))]()
                }
            },
            'vertexShader': [
                _0x1c11('0x35'),
                _0x1c11('0x38'),
                _0x1c11('0x126'),
                _0x1c11('0x127'),
                '}'
            ][_0x1c11('0x3b')]('\x0a'),
            'fragmentShader': [
                _0x1c11('0x1be'),
                _0x1c11('0x3d'),
                _0x1c11('0x35'),
                _0x1c11('0x1c1'),
                _0x1c11('0x5e'),
                _0x1c11('0x1c2'),
                _0x1c11('0x60'),
                _0x1c11('0x1c3'),
                _0x1c11('0x62'),
                _0x1c11('0x1c8'),
                _0x1c11('0x1c4'),
                _0x1c11('0x1c5'),
                _0x1c11('0x200'),
                _0x1c11('0x1c7'),
                _0x1c11('0x1cb'),
                _0x1c11('0x201'),
                _0x1c11('0x202'),
                _0x1c11('0x1cd'),
                _0x1c11('0x203'),
                _0x1c11('0x60'),
                _0x1c11('0x204'),
                _0x1c11('0x62'),
                '}',
                _0x1c11('0x1d0'),
                _0x1c11('0x1d1'),
                _0x1c11('0x1d2'),
                _0x1c11('0x1d3'),
                _0x1c11('0x1d4'),
                '}',
                _0x1c11('0x205'),
                _0x1c11('0x206'),
                _0x1c11('0x207'),
                _0x1c11('0x208'),
                '}',
                _0x1c11('0x209'),
                _0x1c11('0x20a'),
                _0x1c11('0x20b'),
                _0x1c11('0x1eb'),
                _0x1c11('0x20c'),
                _0x1c11('0x20d'),
                _0x1c11('0x60'),
                _0x1c11('0x20e'),
                _0x1c11('0x20f'),
                _0x1c11('0x62'),
                '}',
                _0x1c11('0x210'),
                _0x1c11('0x211'),
                _0x1c11('0x212'),
                _0x1c11('0x213'),
                _0x1c11('0x214'),
                _0x1c11('0x215'),
                _0x1c11('0x1d6'),
                _0x1c11('0x1d7'),
                _0x1c11('0x216'),
                _0x1c11('0x217'),
                '}',
                _0x1c11('0x38'),
                _0x1c11('0x1f4'),
                _0x1c11('0x1f5'),
                _0x1c11('0x1dd'),
                '}',
                _0x1c11('0x1eb'),
                _0x1c11('0x218'),
                _0x1c11('0x60'),
                _0x1c11('0x219'),
                _0x1c11('0x62'),
                _0x1c11('0x21a'),
                _0x1c11('0x21b'),
                _0x1c11('0x21c'),
                _0x1c11('0x21d'),
                _0x1c11('0x1dd'),
                '}',
                _0x1c11('0x21e'),
                _0x1c11('0x21f'),
                _0x1c11('0x220'),
                _0x1c11('0x221'),
                _0x1c11('0x222'),
                _0x1c11('0x223'),
                _0x1c11('0x224'),
                _0x1c11('0x225'),
                _0x1c11('0x226'),
                _0x1c11('0x227'),
                _0x1c11('0x228'),
                _0x1c11('0x229'),
                _0x1c11('0x22a'),
                _0x1c11('0x22b'),
                _0x1c11('0x1fc'),
                _0x1c11('0x22c'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
    },
    function (_0x29763a, _0x5fdfdd, _0x2deddd) {
        function _0x3ac44c(_0x2a4e75, _0x54c22e) {
            _0x2a4e75[_0x1c11('0xcd')](function (_0x27e705) {
                if (_0x27e705[_0x1c11('0xce')] || _0x27e705[_0x1c11('0x18a')] || _0x27e705[_0x1c11('0x18b')] || _0x27e705[_0x1c11('0x18c')] || _0x27e705[_0x1c11('0x18d')]) {
                    if ((_0x54c22e ? _0x27e705[_0x1c11('0xcf')] : _0x27e705[_0x1c11('0x22d')]) || (_0x27e705[_0x1c11('0x22e')] = _0x27e705[_0x1c11('0x193')], _0x27e705[_0x1c11('0x193')] = !0x1)) {
                    }
                }
            });
        }
        function _0x431f67(_0x425164) {
            _0x425164[_0x1c11('0xcd')](function (_0x450f58) {
                if (_0x450f58[_0x1c11('0x22e')] && (_0x450f58[_0x1c11('0x193')] = _0x450f58[_0x1c11('0x22e')], _0x450f58[_0x1c11('0x22e')] = void 0x0)) {
                }
            });
        }
        _0x2deddd(0x0);
        _0x2deddd(0x1);
        _0x2deddd(0xe);
        _0x29763a[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xc6')] = function () {
            function _0x407bb1(_0x5bb21a) {
                _classCallCheck(this, _0x407bb1);
                if (_0x5bb21a = _0x5bb21a || {}, this[_0x1c11('0x179')] = void 0x0 !== _0x5bb21a[_0x1c11('0x179')] ? _0x5bb21a[_0x1c11('0x179')] : 0x1, this[_0x1c11('0x22f')] = void 0x0 !== _0x5bb21a[_0x1c11('0x22f')] ? _0x5bb21a[_0x1c11('0x22f')] : 0x400, this[_0x1c11('0x230')] = void 0x0 !== _0x5bb21a[_0x1c11('0x230')] ? _0x5bb21a[_0x1c11('0x230')] : 0x1, this[_0x1c11('0x231')] = void 0x0 !== _0x5bb21a[_0x1c11('0x231')] ? _0x5bb21a[_0x1c11('0x231')] : 0x1, this[_0x1c11('0x19f')] = void 0x0 === _0x5bb21a[_0x1c11('0x19f')] || _0x5bb21a[_0x1c11('0x19f')], this[_0x1c11('0x232')] = void 0x0 !== _0x5bb21a[_0x1c11('0x232')] ? _0x5bb21a[_0x1c11('0x232')] : 0x1, this[_0x1c11('0x1a1')] = void 0x0 !== _0x5bb21a[_0x1c11('0x1a1')] ? _0x5bb21a[_0x1c11('0x1a1')] : 0x64, this[_0x1c11('0x233')] = void 0x0 !== _0x5bb21a[_0x1c11('0x233')] ? _0x5bb21a[_0x1c11('0x233')] : THREE[_0x1c11('0x234')]) {
                }
                var _0x5fdfdd = void 0x0 !== _0x5bb21a[_0x1c11('0x235')] ? _0x5bb21a[_0x1c11('0x235')] : 0.1, _0x2deddd = void 0x0 !== _0x5bb21a[_0x1c11('0x236')] ? _0x5bb21a[_0x1c11('0x236')] : 0xa, _0x54b420 = void 0x0 !== _0x5bb21a[_0x1c11('0x1b0')] ? _0x5bb21a[_0x1c11('0x1b0')] : 0x6e;
                if (this['Ft'] = new THREE[(_0x1c11('0x237'))](_0x54b420, 0x1, _0x5fdfdd, _0x2deddd), this['gt'] = 0x0, this['Ut'](this[_0x1c11('0x1a1')]), this['A'] = 0x0, this['Xt'] = 0x0, this['bt'] = new THREE[(_0x1c11('0x44'))](), this['Lt'] = new THREE[(_0x1c11('0x44'))](0x0, -0x1, 0x0), this['Bt'] = new THREE[(_0x1c11('0x44'))](), this['kt'] = new THREE[(_0x1c11('0x163'))](), this[_0x1c11('0x101')] = [], this[_0x1c11('0xf0')] = !0x0, this[_0x1c11('0xe4')] = !0x0, this[_0x1c11('0x90')] = !0x0, this[_0x1c11('0x238')] = null) {
                }
            }
            _createClass(_0x407bb1, [
                {
                    'key': _0x1c11('0xe5'),
                    'value': function convergenceMetric() {
                        if (!this[_0x1c11('0xf0')])
                            return 0x1;
                        var _0x29763a = 0x0;
                        return this[_0x1c11('0x101')][_0x1c11('0x100')](function (_0x227c8a) {
                            _0x227c8a[_0x1c11('0xcf')] && _0x29763a++;
                        }), 0x0 !== _0x29763a ? this['A'] / (_0x29763a * this['Wt'][_0x1c11('0xb')]) : 0x1;
                    }
                },
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x2e87ec, _0x400cb5, _0x48acf8) {
                        var _0x1cf642 = this;
                        if (this[_0x1c11('0x90')] && (this['A'] = 0x0, this['Xt'] = 0x0, this[_0x1c11('0x90')] = !0x1, this[_0x1c11('0x101')][_0x1c11('0x100')](function (_0x4b1df1) {
                                _0x4b1df1['A'] = 0x0;
                            })), !this[_0x1c11('0xe4')] && this['A'] > 0x0)
                            return;
                        if (this[_0x1c11('0xe5')]() >= 0x1)
                            return;
                        var _0x4ee6f9 = _0x2e87ec[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x19af8c = _0x2e87ec[_0x1c11('0xfd')]()[_0x1c11('0x24')];
                        if (this['Zt'] || (this['Ft'][_0x1c11('0x239')][_0x1c11('0x23a')] = _0x48acf8[_0x1c11('0x239')][_0x1c11('0x23a')], this['jt'](_0x4ee6f9, _0x19af8c)), this['Ut'](this[_0x1c11('0x1a1')])) {
                        }
                        var _0x18344b = _0x2e87ec[_0x1c11('0x17e')](), _0x168c64 = _0x2e87ec[_0x1c11('0x17f')](), _0x2e4410 = _0x2e87ec[_0x1c11('0x180')];
                        var _0x1e065e = void 0x0, _0x3c6649 = void 0x0;
                        this[_0x1c11('0x101')][_0x1c11('0x100')](function (_0xafa31a) {
                            _0x1cf642['A'] = Math[_0x1c11('0xa3')](_0x1cf642['A'], _0x1cf642[_0x1c11('0x101')][_0x1c11('0xb')] * _0x1cf642['Wt'][_0x1c11('0xb')]);
                            _0x1cf642['A']++;
                            _0xafa31a['A']++;
                            _0x1cf642['Xt'] += _0xafa31a[_0x1c11('0x19d')];
                            _0x1cf642['Gt'](_0xafa31a);
                            _0x1cf642['Qt'](_0x2e87ec, _0x400cb5, _0x1cf642['bt'], _0x1cf642['Zt']);
                            _0x1e065e = _0x1cf642['A'] % 0x2 == 0x0 ? _0x1cf642['Kt'] : _0x1cf642['Jt'];
                            _0x3c6649 = _0x1cf642['A'] % 0x2 == 0x0 ? _0x1cf642['Jt'] : _0x1cf642['Kt'];
                            _0x1cf642['Yt'](_0x2e87ec, _0x400cb5, _0x48acf8, _0x1e065e, _0x3c6649, _0xafa31a);
                            if (_0x1cf642[_0x1c11('0x19f')] && _0x1cf642['A'] === _0x1cf642[_0x1c11('0x101')][_0x1c11('0xb')] && ELPIXEL[_0x1c11('0x94')](_0x2e87ec, _0x3c6649, _0x1cf642['qt'])) {
                            }
                        });
                        if (this[_0x1c11('0x19f')] && (this['Mt'][_0x1c11('0x7a')][_0x1c11('0x23b')][_0x1c11('0xe')] = _0x3c6649, this['Mt'][_0x1c11('0x7a')][_0x1c11('0x23c')][_0x1c11('0xe')] = this['qt'], this['Mt'][_0x1c11('0x7a')][_0x1c11('0x1ac')][_0x1c11('0xe')] = this[_0x1c11('0xe5')](), ELPIXEL[_0x1c11('0x98')](_0x2e87ec, this['Mt'], _0x1e065e)), _0x2e87ec[_0x1c11('0x180')] = _0x2e4410, _0x2e87ec[_0x1c11('0x182')](_0x18344b), _0x2e87ec[_0x1c11('0x1a9')](_0x168c64), this[_0x1c11('0x101')][_0x1c11('0x100')](function (_0x3b0924) {
                                _0x3b0924[_0x1c11('0x102')][_0x1c11('0x103')] = _0x1cf642[_0x1c11('0x19f')] ? _0x1e065e : _0x3c6649;
                            })) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0xf6'),
                    'value': function setSize(_0xa7c1d8, _0x74f74e) {
                        if (this['Kt'] && this['Kt'][_0x1c11('0xf6')](_0xa7c1d8, _0x74f74e), this['Jt'] && this['Jt'][_0x1c11('0xf6')](_0xa7c1d8, _0x74f74e), this['Zt'] && this['Zt'][_0x1c11('0xf6')](_0xa7c1d8, _0x74f74e), this['qt'] && this['qt'][_0x1c11('0xf6')](_0xa7c1d8, _0x74f74e), this['$t'] && this['$t'][_0x1c11('0x7a')][_0x1c11('0x23d')][_0x1c11('0xe')][_0x1c11('0x9f')](_0xa7c1d8, _0x74f74e)) {
                        }
                    }
                },
                {
                    'key': 'jt',
                    'value': function jt(_0x22a5b4, _0x7578bd) {
                        var _0x2deddd = {
                            'format': THREE[_0x1c11('0xca')],
                            'minFilter': THREE[_0x1c11('0x8c')],
                            'magFilter': THREE[_0x1c11('0x8c')]
                        };
                        this['Zt'] = new THREE[(_0x1c11('0xcb'))](this[_0x1c11('0x22f')], this[_0x1c11('0x22f')], _0x2deddd);
                        this['Kt'] = new THREE[(_0x1c11('0xcb'))](_0x22a5b4, _0x7578bd, _0x2deddd);
                        this['Jt'] = new THREE[(_0x1c11('0xcb'))](_0x22a5b4, _0x7578bd, _0x2deddd);
                        this['qt'] = new THREE[(_0x1c11('0xcb'))](_0x22a5b4, _0x7578bd, _0x2deddd);
                        this['Zt'][_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1;
                        this['Kt'][_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1;
                        this['Jt'][_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1;
                        this['qt'][_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1;
                        if (this[_0x1c11('0x179')] ? (this['wt'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x17a')]), this['wt'][_0x1c11('0x7a')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](this['wt'][_0x1c11('0x7a')]), this['wt'][_0x1c11('0x233')] = this[_0x1c11('0x233')]) : this['wt'] = new THREE[(_0x1c11('0x17b'))]({
                                'depthPacking': THREE[_0x1c11('0x17d')],
                                'side': this[_0x1c11('0x233')]
                            })) {
                        }
                        if (this['$t'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x23e')]), this['$t'][_0x1c11('0x7a')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](this['$t'][_0x1c11('0x7a')]), this['$t'][_0x1c11('0x7a')][_0x1c11('0x23d')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x29'))](_0x22a5b4, _0x7578bd), this['$t'][_0x1c11('0x7a')][_0x1c11('0x181')][_0x1c11('0xe')] = this['Zt'], this['$t'][_0x1c11('0x7a')][_0x1c11('0x23f')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x1bd'))](0x0, 0x1, 0x1, 0x1), this['$t'][_0x1c11('0x7a')][_0x1c11('0x22f')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x29'))](this[_0x1c11('0x22f')], this[_0x1c11('0x22f')]), this['$t'][_0x1c11('0x1a6')][_0x1c11('0x240')] = this[_0x1c11('0x231')], this['$t'][_0x1c11('0x1a6')][_0x1c11('0x1b6')] = this[_0x1c11('0x179')], this['Mt'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x3c')]), this['Mt'][_0x1c11('0x7a')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](this['Mt'][_0x1c11('0x7a')])) {
                        }
                    }
                },
                {
                    'key': 'Yt',
                    'value': function Yt(_0x44ec69, _0x28c60d, _0x5682a2, _0x4b5a96, _0x2e7518, _0x520e07) {
                        this['Ft'][_0x1c11('0x241')][_0x1c11('0x166')](this['Ft'][_0x1c11('0x167')]);
                        this['kt'][_0x1c11('0x9f')](0.5, 0x0, 0x0, 0.5, 0x0, 0.5, 0x0, 0.5, 0x0, 0x0, 0.5, 0.5, 0x0, 0x0, 0x0, 0x1);
                        this['kt'][_0x1c11('0x242')](this['Ft'][_0x1c11('0xec')]);
                        this['kt'][_0x1c11('0x242')](this['Ft'][_0x1c11('0x241')]);
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x243')][_0x1c11('0xe')][_0x1c11('0xeb')](this['kt']);
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23f')][_0x1c11('0xe')]['x'] = this['Xt'];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23f')][_0x1c11('0xe')]['y'] = this[_0x1c11('0x230')];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23f')][_0x1c11('0xe')]['z'] = this[_0x1c11('0x232')];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23f')][_0x1c11('0xe')]['w'] = _0x520e07[_0x1c11('0x19d')];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23b')][_0x1c11('0xe')] = _0x4b5a96;
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x244')][_0x1c11('0xe')] = this['Ft'][_0x1c11('0x144')];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['x'] = this['Ft'][_0x1c11('0x197')];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['y'] = this['Ft'][_0x1c11('0x198')];
                        _0x44ec69[_0x1c11('0x182')](0x0);
                        _0x3ac44c(_0x28c60d, !0x1);
                        var _0x24db92 = _0x44ec69[_0x1c11('0x181')][_0x1c11('0xf0')];
                        _0x44ec69[_0x1c11('0x181')][_0x1c11('0xf0')] = !0x1;
                        _0x28c60d[_0x1c11('0x194')] = this['$t'];
                        _0x44ec69[_0x1c11('0x97')](_0x28c60d, _0x5682a2, _0x2e7518, !0x0);
                        _0x28c60d[_0x1c11('0x194')] = null;
                        _0x431f67(_0x28c60d);
                        _0x44ec69[_0x1c11('0x181')][_0x1c11('0xf0')] = _0x24db92;
                    }
                },
                {
                    'key': 'Qt',
                    'value': function Qt(_0x38e76b, _0x2cb3e1, _0x2c0608, _0x30add3) {
                        _0x3ac44c(_0x2cb3e1, !0x0);
                        this['Ft'][_0x1c11('0x144')][_0x1c11('0xeb')](_0x2c0608);
                        this['Bt'][_0x1c11('0xeb')](_0x2c0608);
                        this['Bt'][_0x1c11('0x245')](this['Lt'], 0xa);
                        this['Ft'][_0x1c11('0x246')](this['Bt']);
                        this['Ft'][_0x1c11('0xd0')]();
                        _0x2cb3e1[_0x1c11('0x194')] = this['wt'];
                        if (this[_0x1c11('0x179')] && (this['wt'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['x'] = this['Ft'][_0x1c11('0x197')], this['wt'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['y'] = this['Ft'][_0x1c11('0x198')]), _0x38e76b[_0x1c11('0x182')](0x0), _0x38e76b[_0x1c11('0x97')](_0x2cb3e1, this['Ft'], _0x30add3, !0x0), _0x2cb3e1[_0x1c11('0x194')] = null, _0x431f67(_0x2cb3e1)) {
                        }
                    }
                },
                {
                    'key': 'Gt',
                    'value': function Gt(_0x7e3fd8) {
                        var _0x5fdfdd = _0x7e3fd8['A'] - 0x1;
                        var _0x2deddd = _0x7e3fd8[_0x1c11('0x167')];
                        _0x5fdfdd %= this['Wt'][_0x1c11('0xb')] - 0x1;
                        var _0x27509e = this['Wt'][_0x5fdfdd];
                        if (this['bt']['x'] = (_0x27509e['x'] - 0.5) * _0x7e3fd8[_0x1c11('0x23')], this['bt']['z'] = 0x0, this['bt']['y'] = (_0x27509e['y'] - 0.5) * _0x7e3fd8[_0x1c11('0x24')], this['bt'][_0x1c11('0x168')](_0x2deddd), this['Lt'][_0x1c11('0x9f')](0x0, 0x0, 0x1), this['Lt'][_0x1c11('0x169')](_0x2deddd), this[_0x1c11('0x238')]) {
                            var _0x180a04 = ELPIXEL[_0x1c11('0x99')](this[_0x1c11('0x238')], this['bt'], this['Lt']);
                            this[_0x1c11('0x247')](_0x180a04);
                        }
                    }
                },
                {
                    'key': _0x1c11('0x248'),
                    'value': function setShadowRecieverBBox(_0x5313d6) {
                        this[_0x1c11('0x238')] = _0x5313d6;
                    }
                },
                {
                    'key': _0x1c11('0x247'),
                    'value': function setFOV(_0x18eb85) {
                        this['Ft'][_0x1c11('0x1b0')] = _0x18eb85;
                        this['Ft'][_0x1c11('0x249')]();
                    }
                },
                {
                    'key': 'Ut',
                    'value': function Ut(_0x2a73ef) {
                        if (_0x2a73ef !== this['gt'] && (this['gt'] = _0x2a73ef, this['Wt'] = ELPIXEL[_0x1c11('0x2e')](_0x2a73ef, -0x1, ELPIXEL[_0x1c11('0x2c')], ELPIXEL[_0x1c11('0x93')]), this['Wt'] = ELPIXEL[_0x1c11('0x85')](this['Wt']), this['Wt'][_0x1c11('0x22')](0x0, 0x0, new THREE[(_0x1c11('0x29'))](0.5, 0.5)))) {
                        }
                    }
                }
            ]);
            return _0x407bb1;
        }();
    },
    function (_0x1a5666, _0x22748d) {
        _0x1a5666[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x23e')] = {
            'defines': {
                'SHADOW_QUALITY': 0x1,
                'LINEAR_DEPTH': 0x1
            },
            'uniforms': {
                'shadowMap': { 'value': null },
                'shadowAccumulationBuffer': { 'value': null },
                'shadowBufferSize': { 'value': null },
                'shadowMatrix': { 'value': new THREE[(_0x1c11('0x163'))]() },
                'vplPosition': { 'value': new THREE[(_0x1c11('0x44'))]() },
                'shadowData': { 'value': new THREE[(_0x1c11('0x1bd'))]() },
                'cameraNearFar': { 'value': new THREE[(_0x1c11('0x29'))]() },
                'shadowMapResolution': { 'value': null },
                'normalBias': { 'value': 0x1 }
            },
            'vertexShader': [
                _0x1c11('0x24a'),
                _0x1c11('0x24b'),
                _0x1c11('0x24c'),
                _0x1c11('0x24d'),
                _0x1c11('0x24e'),
                _0x1c11('0x24f'),
                _0x1c11('0x38'),
                _0x1c11('0x250'),
                _0x1c11('0x251'),
                _0x1c11('0x252'),
                _0x1c11('0x253'),
                _0x1c11('0x254'),
                _0x1c11('0x255'),
                _0x1c11('0x256'),
                _0x1c11('0x257'),
                _0x1c11('0x258'),
                _0x1c11('0x127'),
                '}'
            ][_0x1c11('0x3b')]('\x0a'),
            'fragmentShader': [
                _0x1c11('0x1be'),
                _0x1c11('0x3d'),
                _0x1c11('0x24a'),
                _0x1c11('0x24b'),
                _0x1c11('0x24c'),
                _0x1c11('0x259'),
                _0x1c11('0x25a'),
                _0x1c11('0x25b'),
                _0x1c11('0x3e'),
                _0x1c11('0x25c'),
                _0x1c11('0x1c8'),
                _0x1c11('0x25d'),
                _0x1c11('0x1eb'),
                _0x1c11('0x25e'),
                _0x1c11('0x60'),
                _0x1c11('0x25f'),
                _0x1c11('0x260'),
                _0x1c11('0x261'),
                _0x1c11('0x62'),
                _0x1c11('0x262'),
                '}',
                _0x1c11('0x263'),
                _0x1c11('0x264'),
                _0x1c11('0x265'),
                _0x1c11('0x266'),
                _0x1c11('0x267'),
                _0x1c11('0x268'),
                _0x1c11('0x269'),
                _0x1c11('0x26a'),
                _0x1c11('0x26b'),
                _0x1c11('0x26c'),
                _0x1c11('0x26d'),
                _0x1c11('0x26e'),
                _0x1c11('0x26f'),
                '}',
                _0x1c11('0x38'),
                _0x1c11('0x270'),
                _0x1c11('0x271'),
                _0x1c11('0x272'),
                _0x1c11('0x273'),
                _0x1c11('0x274'),
                _0x1c11('0x275'),
                _0x1c11('0x276'),
                _0x1c11('0x277'),
                _0x1c11('0x73'),
                _0x1c11('0x278'),
                _0x1c11('0x279'),
                _0x1c11('0x27a'),
                _0x1c11('0x62'),
                _0x1c11('0x27b'),
                _0x1c11('0x27c'),
                _0x1c11('0x27d'),
                _0x1c11('0x27e'),
                _0x1c11('0x73'),
                _0x1c11('0x27f'),
                _0x1c11('0x62'),
                _0x1c11('0x280'),
                _0x1c11('0x281'),
                _0x1c11('0x282'),
                _0x1c11('0x283'),
                _0x1c11('0x284'),
                _0x1c11('0x285'),
                _0x1c11('0x286'),
                _0x1c11('0x287'),
                _0x1c11('0x288'),
                _0x1c11('0x289'),
                _0x1c11('0x28a'),
                _0x1c11('0x28b'),
                _0x1c11('0x28c'),
                _0x1c11('0x28d'),
                _0x1c11('0x28e'),
                _0x1c11('0x28f'),
                _0x1c11('0x290'),
                _0x1c11('0x291'),
                _0x1c11('0x292'),
                _0x1c11('0x293'),
                _0x1c11('0x294'),
                _0x1c11('0x295'),
                _0x1c11('0x296'),
                _0x1c11('0x297'),
                _0x1c11('0x298'),
                _0x1c11('0x284'),
                _0x1c11('0x285'),
                _0x1c11('0x286'),
                _0x1c11('0x287'),
                _0x1c11('0x288'),
                _0x1c11('0x289'),
                _0x1c11('0x28a'),
                _0x1c11('0x28b'),
                _0x1c11('0x28c'),
                _0x1c11('0x299'),
                _0x1c11('0x29a'),
                _0x1c11('0x29b'),
                _0x1c11('0x29c'),
                _0x1c11('0x29d'),
                _0x1c11('0x29e'),
                _0x1c11('0x29f'),
                _0x1c11('0x2a0'),
                _0x1c11('0x2a1'),
                _0x1c11('0x2a2'),
                _0x1c11('0x297'),
                _0x1c11('0x62'),
                '}',
                _0x1c11('0x2a3'),
                _0x1c11('0x2a4'),
                _0x1c11('0x2a5'),
                _0x1c11('0x2a6'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
    },
    function (_0x3139c4, _0x5c5e28, _0x5892b9) {
        if (_0x5892b9(0x0), _0x5892b9(0x1), _0x5892b9(0x10), _0x5892b9(0x11)) {
        }
        _0x3139c4[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xc8')] = function () {
            function _0x14cdbd(_0x49dad6) {
                _classCallCheck(this, _0x14cdbd);
                if (_0x49dad6 = _0x49dad6 || {}, this[_0x1c11('0x179')] = void 0x0 !== _0x49dad6[_0x1c11('0x179')] ? _0x49dad6[_0x1c11('0x179')] : 0x1, this[_0x1c11('0x22f')] = void 0x0 !== _0x49dad6[_0x1c11('0x22f')] ? _0x49dad6[_0x1c11('0x22f')] : 0x400, this[_0x1c11('0x230')] = void 0x0 !== _0x49dad6[_0x1c11('0x230')] ? _0x49dad6[_0x1c11('0x230')] : 0x1, this[_0x1c11('0x231')] = void 0x0 !== _0x49dad6[_0x1c11('0x231')] ? _0x49dad6[_0x1c11('0x231')] : 0x1, this[_0x1c11('0x19f')] = void 0x0 === _0x49dad6[_0x1c11('0x19f')] || _0x49dad6[_0x1c11('0x19f')], this[_0x1c11('0x232')] = void 0x0 !== _0x49dad6[_0x1c11('0x232')] ? _0x49dad6[_0x1c11('0x232')] : 0x1, this[_0x1c11('0x1a1')] = void 0x0 !== _0x49dad6[_0x1c11('0x1a1')] ? _0x49dad6[_0x1c11('0x1a1')] : 0x7d0, this[_0x1c11('0x2a7')] = void 0x0 !== _0x49dad6[_0x1c11('0x2a7')] ? _0x49dad6[_0x1c11('0x2a7')] : 0x2, this[_0x1c11('0x2a8')] = void 0x0 !== _0x49dad6[_0x1c11('0x2a8')] ? _0x49dad6[_0x1c11('0x2a8')] : 0x1, this[_0x1c11('0x2a9')] = void 0x0 !== _0x49dad6[_0x1c11('0x2a9')] ? _0x49dad6[_0x1c11('0x2a9')] : 0x2, this[_0x1c11('0x1a8')] = void 0x0 !== _0x49dad6[_0x1c11('0x1a8')] ? _0x49dad6[_0x1c11('0x1a8')] : 0x1, this[_0x1c11('0x2aa')] = _0x49dad6[_0x1c11('0x2aa')], this[_0x1c11('0x2ab')] = _0x49dad6[_0x1c11('0x2ab')], this[_0x1c11('0xc0')] = void 0x0 === _0x49dad6[_0x1c11('0xc0')] || _0x49dad6[_0x1c11('0xc0')]) {
                }
                var _0x5c5e28 = void 0x0 !== _0x49dad6[_0x1c11('0x235')] ? _0x49dad6[_0x1c11('0x235')] : 0.1, _0x5892b9 = void 0x0 !== _0x49dad6[_0x1c11('0x236')] ? _0x49dad6[_0x1c11('0x236')] : 0xa;
                this['Ft'] = new THREE[(_0x1c11('0x7f'))](-0x3, 0x3, 0x3, -0x3, _0x5c5e28, _0x5892b9);
                this[_0x1c11('0x2ac')] = 0xa;
                this['gt'] = 0x0;
                this['Ut'](this[_0x1c11('0x1a1')]);
                this['A'] = 0x0;
                this['bt'] = new THREE[(_0x1c11('0x44'))]();
                this['Lt'] = new THREE[(_0x1c11('0x44'))](0x0, -0x1, 0x0);
                this['Bt'] = new THREE[(_0x1c11('0x44'))]();
                this['kt'] = new THREE[(_0x1c11('0x163'))]();
                this[_0x1c11('0x90')] = !0x0;
                this['te'] = new THREE[(_0x1c11('0x81'))](new THREE[(_0x1c11('0x2ad'))](0x1, 0x1), new THREE[(_0x1c11('0x114'))]({ 'color': 0xffffff }));
                this['te'][_0x1c11('0x2ae')]['x'] = -Math['PI'] / 0x2;
                this['te'][_0x1c11('0x22d')] = !0x0;
                this['ee'] = new THREE[(_0x1c11('0x7e'))]();
                this['ee'][_0x1c11('0x84')](this['te']);
                this['ie'] = new THREE[(_0x1c11('0x81'))](new THREE[(_0x1c11('0x2ad'))](0x1, 0x1), new THREE[(_0x1c11('0x114'))]({
                    'color': 0xffffff,
                    'transparent': !0x0
                }));
                this['ie'][_0x1c11('0x2ae')]['x'] = -Math['PI'] / 0x2;
                this['ie'][_0x1c11('0x22d')] = !0x0;
                this['oe'] = !0x0;
                this['se'] = !0x1;
            }
            _createClass(_0x14cdbd, [
                {
                    'key': _0x1c11('0xe5'),
                    'value': function convergenceMetric() {
                        return this['A'] / this['Wt'][_0x1c11('0xb')];
                    }
                },
                {
                    'key': _0x1c11('0x2af'),
                    'value': function getShadowPlane() {
                        return this['ie'];
                    }
                },
                {
                    'key': _0x1c11('0xfc'),
                    'value': function update(_0x3c9621) {
                        var _0x1890ec = this;
                        this['ae'] = new THREE[(_0x1c11('0x9b'))]();
                        _0x3c9621[_0x1c11('0xcd')](function (_0x41ffc3) {
                            _0x41ffc3[_0x1c11('0xce')] && _0x41ffc3[_0x1c11('0xcf')] && _0x1890ec['ae'][_0x1c11('0x2b0')](_0x41ffc3);
                        });
                        var _0x5c5e28 = new THREE[(_0x1c11('0x2b1'))]();
                        this['ae'][_0x1c11('0x2b2')](_0x5c5e28);
                        var _0x5892b9 = 2.5 * _0x5c5e28[_0x1c11('0x2b3')] * this[_0x1c11('0x1a8')];
                        if (0x0 === _0x5892b9)
                            return;
                        this['te'][_0x1c11('0x2b4')][_0x1c11('0x9f')](_0x5892b9, _0x5892b9, _0x5892b9);
                        var _0x26a01e = new THREE[(_0x1c11('0x44'))]();
                        this['ae'][_0x1c11('0x9d')](_0x26a01e);
                        this['te'][_0x1c11('0x144')][_0x1c11('0x9f')](_0x26a01e['x'], this['ae'][_0x1c11('0xa3')]['y'], _0x26a01e['z']);
                        this['ie'][_0x1c11('0x144')][_0x1c11('0x9f')](_0x26a01e['x'], this['ae'][_0x1c11('0xa3')]['y'], _0x26a01e['z']);
                        this['ie'][_0x1c11('0x2b4')][_0x1c11('0xeb')](this['te'][_0x1c11('0x2b4')]);
                        this[_0x1c11('0x2ac')] = 0x2 * _0x5c5e28[_0x1c11('0x2b3')];
                        this['Ft'][_0x1c11('0x2b5')] = -_0x5c5e28[_0x1c11('0x2b3')];
                        this['Ft'][_0x1c11('0x2b6')] = _0x5c5e28[_0x1c11('0x2b3')];
                        this['Ft'][_0x1c11('0x2b7')] = -_0x5c5e28[_0x1c11('0x2b3')];
                        this['Ft'][_0x1c11('0x2b8')] = _0x5c5e28[_0x1c11('0x2b3')];
                        this['Ft'][_0x1c11('0x198')] = this[_0x1c11('0x2ac')] + 0xa;
                        this['Ft'][_0x1c11('0x249')]();
                        this[_0x1c11('0x90')] = !0x0;
                        this['se'] = !0x1;
                    }
                },
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x503b83, _0x43288e, _0x359956) {
                        if (!this[_0x1c11('0xc0')])
                            return;
                        if (this['ae'] || this[_0x1c11('0xfc')](_0x43288e), this[_0x1c11('0x90')] && (this['A'] = 0x0, this[_0x1c11('0x90')] = !0x1)) {
                        }
                        var _0x4ba6cc = this[_0x1c11('0xe5')]();
                        if (_0x4ba6cc >= 0x1)
                            return void (this[_0x1c11('0x2aa')] && !this['se'] && (this[_0x1c11('0x2aa')](), this['se'] = !0x0));
                        this[_0x1c11('0x2ab')] && this[_0x1c11('0x2ab')](_0x4ba6cc);
                        if (this['Zt'] || (this['Ft'][_0x1c11('0x239')][_0x1c11('0x23a')] = _0x359956[_0x1c11('0x239')][_0x1c11('0x23a')], this['jt']()), this['Ut'](this[_0x1c11('0x1a1')])) {
                        }
                        var _0x401718 = _0x503b83[_0x1c11('0x17e')](), _0x42b3b7 = _0x503b83[_0x1c11('0x17f')](), _0x1c6190 = _0x503b83[_0x1c11('0x180')];
                        var _0x18596d = void 0x0, _0x2be2f1 = void 0x0;
                        for (var _0x227ddd = 0x0; _0x227ddd < this[_0x1c11('0x2a7')]; _0x227ddd++) {
                            this['A'] = Math[_0x1c11('0xa3')](this['A'], this['Wt'][_0x1c11('0xb')] - 0x1);
                            this['A']++;
                            this['re']();
                            this['Qt'](_0x503b83, _0x43288e, this['bt'], this['Zt']);
                            if (_0x18596d = this['A'] % 0x2 == 0x0 ? this['Kt'] : this['Jt'], _0x2be2f1 = this['A'] % 0x2 == 0x0 ? this['Jt'] : this['Kt'], this['Yt'](_0x503b83, _0x43288e, _0x359956, _0x18596d, _0x2be2f1)) {
                            }
                        }
                        this['oe'] && this['ne'](_0x503b83, _0x2be2f1, _0x18596d);
                        this['Mt'][_0x1c11('0x7a')][_0x1c11('0x23b')][_0x1c11('0xe')] = _0x2be2f1;
                        this['Mt'][_0x1c11('0x7a')][_0x1c11('0x1ac')][_0x1c11('0xe')] = this[_0x1c11('0x19f')] ? this[_0x1c11('0xe5')]() : 0x1;
                        var _0x5e909f = this['Mt'][_0x1c11('0x7a')][_0x1c11('0x23f')][_0x1c11('0xe')];
                        _0x5e909f['x'] = this[_0x1c11('0x2a8')];
                        _0x5e909f['y'] = this[_0x1c11('0x2a9')];
                        ELPIXEL[_0x1c11('0x98')](_0x503b83, this['Mt'], _0x18596d);
                        _0x503b83[_0x1c11('0x180')] = _0x1c6190;
                        _0x503b83[_0x1c11('0x182')](_0x401718);
                        _0x503b83[_0x1c11('0x1a9')](_0x42b3b7);
                        this['ie'][_0x1c11('0x96')][_0x1c11('0x103')] = _0x18596d[_0x1c11('0xff')];
                    }
                },
                {
                    'key': _0x1c11('0xf6'),
                    'value': function setSize(_0x164e42, _0x1559ee) {
                        if (this['Kt'] && this['Kt'][_0x1c11('0xf6')](_0x164e42, _0x1559ee), this['Jt'] && this['Jt'][_0x1c11('0xf6')](_0x164e42, _0x1559ee), this['Zt'] && this['Zt'][_0x1c11('0xf6')](_0x164e42, _0x1559ee), this['$t'][_0x1c11('0x7a')][_0x1c11('0x23d')][_0x1c11('0xe')][_0x1c11('0x9f')](_0x164e42, _0x1559ee)) {
                        }
                    }
                },
                {
                    'key': 'ne',
                    'value': function ne(_0x2fc321, _0x35e9b4, _0x818d34) {
                        if (this['he'] || (this['he'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x2b9')])), this['he'][_0x1c11('0x7a')][_0x1c11('0x95')][_0x1c11('0xe')] = _0x35e9b4, this['he'][_0x1c11('0x7a')][_0x1c11('0x120')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x44'))](0x1, 0x0), this['he'][_0x1c11('0x7a')][_0x1c11('0x1a8')][_0x1c11('0xe')]['x'] = _0x818d34[_0x1c11('0x23')], this['he'][_0x1c11('0x7a')][_0x1c11('0x1a8')][_0x1c11('0xe')]['y'] = _0x818d34[_0x1c11('0x24')], ELPIXEL[_0x1c11('0x98')](_0x2fc321, this['he'], _0x818d34), this['he'][_0x1c11('0x7a')][_0x1c11('0x95')][_0x1c11('0xe')] = _0x818d34, this['he'][_0x1c11('0x7a')][_0x1c11('0x120')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x44'))](0x0, 0x1), this['he'][_0x1c11('0x7a')][_0x1c11('0x1a8')][_0x1c11('0xe')]['x'] = _0x818d34[_0x1c11('0x23')], this['he'][_0x1c11('0x7a')][_0x1c11('0x1a8')][_0x1c11('0xe')]['y'] = _0x818d34[_0x1c11('0x24')], ELPIXEL[_0x1c11('0x98')](_0x2fc321, this['he'], _0x35e9b4)) {
                        }
                    }
                },
                {
                    'key': 'jt',
                    'value': function jt() {
                        var _0x3139c4 = {
                            'format': THREE[_0x1c11('0xca')],
                            'minFilter': THREE[_0x1c11('0x118')],
                            'magFilter': THREE[_0x1c11('0x118')]
                        };
                        this['Zt'] = new THREE[(_0x1c11('0xcb'))](this[_0x1c11('0x22f')], this[_0x1c11('0x22f')], _0x3139c4);
                        this['Kt'] = new THREE[(_0x1c11('0xcb'))](this[_0x1c11('0x22f')], this[_0x1c11('0x22f')], _0x3139c4);
                        this['Jt'] = new THREE[(_0x1c11('0xcb'))](this[_0x1c11('0x22f')], this[_0x1c11('0x22f')], _0x3139c4);
                        this['Zt'][_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1;
                        this['Kt'][_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1;
                        this['Jt'][_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1;
                        if (this[_0x1c11('0x179')] ? (this['wt'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x17a')]), this['wt'][_0x1c11('0x7a')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](this['wt'][_0x1c11('0x7a')])) : this['wt'] = new THREE[(_0x1c11('0x17b'))]({ 'depthPacking': THREE[_0x1c11('0x17d')] })) {
                        }
                        this['$t'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x2ba')]);
                        this['$t'][_0x1c11('0x7a')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](this['$t'][_0x1c11('0x7a')]);
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23d')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x29'))](this[_0x1c11('0x22f')], this[_0x1c11('0x22f')]);
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x181')][_0x1c11('0xe')] = this['Zt'];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23f')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x1bd'))](0x0, 0x1, 0x1, 0x1);
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x22f')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x29'))](this[_0x1c11('0x22f')], this[_0x1c11('0x22f')]);
                        this['$t'][_0x1c11('0x1a6')][_0x1c11('0x240')] = this[_0x1c11('0x231')];
                        this['$t'][_0x1c11('0x1a6')][_0x1c11('0x1b6')] = this[_0x1c11('0x179')];
                        this['Mt'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x43')]);
                        this['Mt'][_0x1c11('0x7a')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](this['Mt'][_0x1c11('0x7a')]);
                    }
                },
                {
                    'key': 'Yt',
                    'value': function Yt(_0x4dd28b, _0x2dd67c, _0x3a3cf9, _0x2c219d, _0x259a8b) {
                        this['Ft'][_0x1c11('0x241')][_0x1c11('0x166')](this['Ft'][_0x1c11('0x167')]);
                        this['kt'][_0x1c11('0x9f')](0.5, 0x0, 0x0, 0.5, 0x0, 0.5, 0x0, 0.5, 0x0, 0x0, 0.5, 0.5, 0x0, 0x0, 0x0, 0x1);
                        this['kt'][_0x1c11('0x242')](this['Ft'][_0x1c11('0xec')]);
                        this['kt'][_0x1c11('0x242')](this['Ft'][_0x1c11('0x241')]);
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x243')][_0x1c11('0xe')][_0x1c11('0xeb')](this['kt']);
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23f')][_0x1c11('0xe')]['x'] = this['A'];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23f')][_0x1c11('0xe')]['y'] = this[_0x1c11('0x230')];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23f')][_0x1c11('0xe')]['z'] = this[_0x1c11('0x232')];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x23b')][_0x1c11('0xe')] = _0x2c219d;
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x244')][_0x1c11('0xe')] = this['Ft'][_0x1c11('0x144')];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['x'] = this['Ft'][_0x1c11('0x197')];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['y'] = this['Ft'][_0x1c11('0x198')];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x2bb')][_0x1c11('0xe')]['x'] = -this['Lt']['x'];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x2bb')][_0x1c11('0xe')]['y'] = -this['Lt']['y'];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x2bb')][_0x1c11('0xe')]['z'] = -this['Lt']['z'];
                        this['$t'][_0x1c11('0x7a')][_0x1c11('0x2bc')][_0x1c11('0xe')] = 0x1 / this['Wt'][_0x1c11('0xb')];
                        _0x4dd28b[_0x1c11('0x182')](0x0);
                        var _0x4db136 = _0x4dd28b[_0x1c11('0x181')][_0x1c11('0xf0')];
                        _0x4dd28b[_0x1c11('0x181')][_0x1c11('0xf0')] = !0x1;
                        this['ee'][_0x1c11('0x194')] = this['$t'];
                        _0x4dd28b[_0x1c11('0x97')](this['ee'], _0x3a3cf9, _0x259a8b, !0x0);
                        this['ee'][_0x1c11('0x194')] = null;
                        _0x4dd28b[_0x1c11('0x181')][_0x1c11('0xf0')] = _0x4db136;
                    }
                },
                {
                    'key': 'Qt',
                    'value': function Qt(_0x3c74f8, _0x3ead33, _0xa45c5e, _0xb9711b) {
                        (function (_0x2f66ab, _0x4d3752) {
                            _0x2f66ab[_0x1c11('0xcd')](function (_0x94715c) {
                                if ((_0x94715c[_0x1c11('0xce')] || _0x94715c[_0x1c11('0x18a')] || _0x94715c[_0x1c11('0x18b')] || _0x94715c[_0x1c11('0x18c')] || _0x94715c[_0x1c11('0x18d')]) && ((_0x4d3752 ? _0x94715c[_0x1c11('0xcf')] : _0x94715c[_0x1c11('0x22d')]) || (_0x94715c[_0x1c11('0x22e')] = _0x94715c[_0x1c11('0x193')], _0x94715c[_0x1c11('0x193')] = !0x1))) {
                                }
                            });
                        }(_0x3ead33, !0x0));
                        this['Ft'][_0x1c11('0x144')][_0x1c11('0xeb')](_0xa45c5e);
                        this['Bt'][_0x1c11('0xeb')](_0xa45c5e);
                        this['Bt'][_0x1c11('0x245')](this['Lt'], 0xa);
                        this['Ft'][_0x1c11('0x246')](this['Bt']);
                        this['Ft'][_0x1c11('0xd0')]();
                        _0x3ead33[_0x1c11('0x194')] = this['wt'];
                        if (this[_0x1c11('0x179')] && (this['wt'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['x'] = this['Ft'][_0x1c11('0x197')], this['wt'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')]['y'] = this['Ft'][_0x1c11('0x198')]), _0x3c74f8[_0x1c11('0x182')](0x0), _0x3c74f8[_0x1c11('0x97')](_0x3ead33, this['Ft'], _0xb9711b, !0x0), _0x3ead33[_0x1c11('0x194')] = null, function (_0x2f0a71) {
                                _0x2f0a71[_0x1c11('0xcd')](function (_0x537632) {
                                    if (_0x537632[_0x1c11('0x22e')] && (_0x537632[_0x1c11('0x193')] = _0x537632[_0x1c11('0x22e')], _0x537632[_0x1c11('0x22e')] = void 0x0)) {
                                    }
                                });
                            }(_0x3ead33)) {
                        }
                    }
                },
                {
                    'key': 're',
                    'value': function re() {
                        var _0x3139c4 = this[_0x1c11('0x2ac')], _0x5c5e28 = this['Wt'][this['A'] - 0x1], _0x5892b9 = 0x2 * _0x5c5e28['x'] - 0x1, _0x3b78a8 = 0x2 * _0x5c5e28['y'] - 0x1, _0x2fd765 = Math[_0x1c11('0x30')](0x1 - _0x5892b9 * _0x5892b9 - _0x3b78a8 * _0x3b78a8), _0x5c7849 = new THREE[(_0x1c11('0x44'))](_0x3139c4 * _0x5892b9, _0x3139c4 * _0x2fd765, _0x3139c4 * _0x3b78a8);
                        if (this['bt'][_0x1c11('0xeb')](_0x5c7849), this['Lt'][_0x1c11('0xeb')](_0x5c7849), this['Lt'][_0x1c11('0x170')](-0x1), this['Lt'][_0x1c11('0xa1')](), this['bt'][_0x1c11('0x84')](this['te'][_0x1c11('0x144')])) {
                        }
                    }
                },
                {
                    'key': 'Ut',
                    'value': function Ut(_0x9ccf8f) {
                        if (_0x9ccf8f !== this['gt'] && (this['gt'] = _0x9ccf8f, this['Wt'] = ELPIXEL[_0x1c11('0x2e')](_0x9ccf8f, -0x1, ELPIXEL[_0x1c11('0x2c')], ELPIXEL[_0x1c11('0x2f')]), this['Wt'] = ELPIXEL[_0x1c11('0x85')](this['Wt']))) {
                        }
                    }
                }
            ]);
            return _0x14cdbd;
        }();
    },
    function (_0x358895, _0x5b050a) {
        _0x358895[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x2ba')] = {
            'defines': {
                'SHADOW_QUALITY': 0x0,
                'LINEAR_DEPTH': 0x1
            },
            'uniforms': {
                'shadowMap': { 'value': null },
                'shadowAccumulationBuffer': { 'value': null },
                'shadowBufferSize': { 'value': null },
                'shadowMatrix': { 'value': new THREE[(_0x1c11('0x163'))]() },
                'vplPosition': { 'value': new THREE[(_0x1c11('0x44'))]() },
                'lightVector': { 'value': new THREE[(_0x1c11('0x44'))]() },
                'shadowData': { 'value': new THREE[(_0x1c11('0x1bd'))]() },
                'cameraNearFar': { 'value': new THREE[(_0x1c11('0x29'))]() },
                'shadowMapResolution': { 'value': null },
                'normalBias': { 'value': 0x1 },
                'weightSum': { 'value': 0x0 }
            },
            'vertexShader': [
                _0x1c11('0x24a'),
                _0x1c11('0x24c'),
                _0x1c11('0x24d'),
                _0x1c11('0x24e'),
                _0x1c11('0x24f'),
                _0x1c11('0x38'),
                _0x1c11('0x250'),
                _0x1c11('0x251'),
                _0x1c11('0x252'),
                _0x1c11('0x2bd'),
                _0x1c11('0x2be'),
                _0x1c11('0x255'),
                _0x1c11('0x2bf'),
                _0x1c11('0x2c0'),
                _0x1c11('0x2c1'),
                _0x1c11('0x2c2'),
                _0x1c11('0x2c3'),
                '}'
            ][_0x1c11('0x3b')]('\x0a'),
            'fragmentShader': [
                _0x1c11('0x1be'),
                _0x1c11('0x3d'),
                _0x1c11('0x24a'),
                _0x1c11('0x2c4'),
                _0x1c11('0x24c'),
                _0x1c11('0x259'),
                _0x1c11('0x25a'),
                _0x1c11('0x25b'),
                _0x1c11('0x3e'),
                _0x1c11('0x25c'),
                _0x1c11('0x1c8'),
                _0x1c11('0x2c5'),
                _0x1c11('0x25d'),
                _0x1c11('0x1eb'),
                _0x1c11('0x25e'),
                _0x1c11('0x60'),
                _0x1c11('0x260'),
                _0x1c11('0x261'),
                _0x1c11('0x62'),
                _0x1c11('0x262'),
                '}',
                _0x1c11('0x263'),
                _0x1c11('0x264'),
                _0x1c11('0x265'),
                _0x1c11('0x266'),
                _0x1c11('0x267'),
                _0x1c11('0x268'),
                _0x1c11('0x269'),
                _0x1c11('0x26a'),
                _0x1c11('0x26b'),
                _0x1c11('0x26c'),
                _0x1c11('0x26d'),
                _0x1c11('0x26e'),
                _0x1c11('0x26f'),
                '}',
                _0x1c11('0x38'),
                _0x1c11('0x270'),
                _0x1c11('0x271'),
                _0x1c11('0x272'),
                _0x1c11('0x273'),
                _0x1c11('0x274'),
                _0x1c11('0x275'),
                _0x1c11('0x2c6'),
                _0x1c11('0x277'),
                _0x1c11('0x73'),
                _0x1c11('0x2c7'),
                _0x1c11('0x2c8'),
                _0x1c11('0x27a'),
                _0x1c11('0x62'),
                _0x1c11('0x27b'),
                _0x1c11('0x27c'),
                _0x1c11('0x27d'),
                _0x1c11('0x27e'),
                _0x1c11('0x73'),
                _0x1c11('0x27f'),
                _0x1c11('0x62'),
                _0x1c11('0x280'),
                _0x1c11('0x281'),
                _0x1c11('0x282'),
                _0x1c11('0x283'),
                _0x1c11('0x284'),
                _0x1c11('0x285'),
                _0x1c11('0x286'),
                _0x1c11('0x287'),
                _0x1c11('0x288'),
                _0x1c11('0x289'),
                _0x1c11('0x28a'),
                _0x1c11('0x28b'),
                _0x1c11('0x28c'),
                _0x1c11('0x28d'),
                _0x1c11('0x28e'),
                _0x1c11('0x28f'),
                _0x1c11('0x290'),
                _0x1c11('0x291'),
                _0x1c11('0x292'),
                _0x1c11('0x293'),
                _0x1c11('0x294'),
                _0x1c11('0x295'),
                _0x1c11('0x296'),
                _0x1c11('0x297'),
                _0x1c11('0x298'),
                _0x1c11('0x284'),
                _0x1c11('0x285'),
                _0x1c11('0x286'),
                _0x1c11('0x287'),
                _0x1c11('0x288'),
                _0x1c11('0x289'),
                _0x1c11('0x28a'),
                _0x1c11('0x28b'),
                _0x1c11('0x28c'),
                _0x1c11('0x299'),
                _0x1c11('0x29a'),
                _0x1c11('0x29b'),
                _0x1c11('0x29c'),
                _0x1c11('0x29d'),
                _0x1c11('0x29e'),
                _0x1c11('0x29f'),
                _0x1c11('0x2a0'),
                _0x1c11('0x2a1'),
                _0x1c11('0x2a2'),
                _0x1c11('0x297'),
                _0x1c11('0x62'),
                '}',
                _0x1c11('0x2a3'),
                _0x1c11('0x2c9'),
                _0x1c11('0x2ca'),
                '}',
                _0x1c11('0x2cb'),
                _0x1c11('0x2a6'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
    },
    function (_0x1825a7, _0x479147) {
        _0x1825a7[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x2b9')] = {
            'uniforms': {
                'tDiffuse': { 'value': null },
                'size': { 'value': new THREE[(_0x1c11('0x44'))]() },
                'direction': { 'value': new THREE[(_0x1c11('0x44'))](0x1, 0x0) },
                'step': { 'value': 0x1 }
            },
            'vertexShader': [
                _0x1c11('0x35'),
                _0x1c11('0x38'),
                _0x1c11('0x126'),
                _0x1c11('0x127'),
                '}'
            ][_0x1c11('0x3b')]('\x0a'),
            'fragmentShader': [
                _0x1c11('0x3d'),
                _0x1c11('0x2cc'),
                _0x1c11('0x1c7'),
                _0x1c11('0x12b'),
                _0x1c11('0x2cd'),
                _0x1c11('0x35'),
                _0x1c11('0x38'),
                _0x1c11('0x21f'),
                _0x1c11('0x2ce'),
                _0x1c11('0x2cf'),
                _0x1c11('0x2d0'),
                _0x1c11('0x2d1'),
                _0x1c11('0x2d2'),
                _0x1c11('0x2d3'),
                _0x1c11('0x2d4'),
                _0x1c11('0x2d5'),
                _0x1c11('0x2d6'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
    },
    function (_0x37bf00, _0x3f1948, _0x5c36b2) {
        'use strict';
        Object[_0x1c11('0x10')](_0x3f1948, _0x1c11('0x1d'), { 'value': !0x0 });
        _0x5c36b2(0x13);
        _0x3f1948[_0x1c11('0x1e')] = ELPIXEL[_0x1c11('0xc9')] = function (_0x59e744) {
            _inherits(_0x3f74c7, _0x59e744);
            function _0x3f74c7() {
                _classCallCheck(this, _0x3f74c7);
                var _0x5f2cdc = _possibleConstructorReturn(this, (_0x3f74c7[_0x1c11('0x19')] || Object[_0x1c11('0x2d7')](_0x3f74c7))[_0x1c11('0x1c')](this));
                _0x5f2cdc[_0x1c11('0x10f')] = !0x0;
                _0x5f2cdc[_0x1c11('0x90')] = !0x0;
                _0x5f2cdc['A'] = 0x0;
                _0x5f2cdc['le'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x2d8')]);
                return _0x5f2cdc;
            }
            _createClass(_0x3f74c7, [
                {
                    'key': _0x1c11('0x125'),
                    'value': function dispose() {
                        this[_0x1c11('0x2d9')] && this[_0x1c11('0x2d9')][_0x1c11('0x125')]();
                    }
                },
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x149363, _0x522cb5, _0x252a2b) {
                        var _0x1252f1 = _0x149363[_0x1c11('0x17e')](), _0x16b5f7 = _0x149363[_0x1c11('0x17f')](), _0x585aee = _0x149363[_0x1c11('0x180')];
                        _0x149363[_0x1c11('0x180')] = !0x1;
                        _0x149363[_0x1c11('0x182')](new THREE[(_0x1c11('0x183'))](0x0, 0x0, 0x0), 0x0);
                        if (this[_0x1c11('0x90')] && (this['A'] = 0x0, this[_0x1c11('0x90')] = !0x1), this['ce'] || this['Y'](_0x149363), this['A']++, this['le'][_0x1c11('0x7a')][_0x1c11('0x2da')][_0x1c11('0xe')] = _0x252a2b[_0x1c11('0xff')], this['le'][_0x1c11('0x7a')][_0x1c11('0x2db')][_0x1c11('0xe')] = this['ce'][_0x1c11('0xff')], this['le'][_0x1c11('0x7a')][_0x1c11('0x2dc')][_0x1c11('0xe')] = this['A'], ELPIXEL[_0x1c11('0x98')](_0x149363, this['le'], _0x522cb5), ELPIXEL[_0x1c11('0x94')](_0x149363, _0x522cb5, this['ce']), _0x149363[_0x1c11('0x180')] = _0x585aee, _0x149363[_0x1c11('0x182')](_0x1252f1, _0x16b5f7)) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0xf6'),
                    'value': function setSize(_0x45e773, _0x58bf12) {
                        this['ce'] && this['ce'][_0x1c11('0xf6')](_0x45e773, _0x58bf12);
                    }
                },
                {
                    'key': 'Y',
                    'value': function Y(_0x45b97e) {
                        var _0x3f1948 = {
                                'minFilter': THREE[_0x1c11('0x118')],
                                'magFilter': THREE[_0x1c11('0x118')],
                                'format': THREE[_0x1c11('0xca')]
                            }, _0x5c36b2 = _0x45b97e[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x4cdedb = _0x45b97e[_0x1c11('0xfd')]()[_0x1c11('0x24')];
                        this['ce'] = new THREE[(_0x1c11('0xcb'))](_0x5c36b2, _0x4cdedb, _0x3f1948);
                    }
                }
            ]);
            return _0x3f74c7;
        }(THREE[_0x1c11('0x2dd')]);
    },
    function (_0x159929, _0x5a7c5d, _0xc000c5) {
        'use strict';
        ELPIXEL[_0x1c11('0x2d8')] = {
            'uniforms': {
                'tCurrent': {
                    'type': 't',
                    'value': null
                },
                'tSumPrevious': {
                    'type': 't',
                    'value': null
                },
                'accIndex': {
                    'type': 'f',
                    'value': 0x0
                }
            },
            'vertexShader': _0x1c11('0x2de'),
            'fragmentShader': _0x1c11('0x2df')
        };
    },
    function (_0x313cea, _0x559ea5, _0x233aa9) {
        _0x233aa9(0x15);
        _0x313cea[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x10d')] = function (_0x5293ee) {
            _inherits(_0x3f108b, _0x5293ee);
            function _0x3f108b(_0x37fb3c, _0x1a960e) {
                var _0x3c9e2e;
                _classCallCheck(this, _0x3f108b);
                if ((_0x3c9e2e = _possibleConstructorReturn(this, (_0x3f108b[_0x1c11('0x19')] || Object[_0x1c11('0x2d7')](_0x3f108b))[_0x1c11('0x1c')](this)), _0x3c9e2e), _0x3c9e2e[_0x1c11('0xfa')] = new THREE[(_0x1c11('0x29'))](0.8, 0.9), _0x3c9e2e['V'] = _0x37fb3c, _0x3c9e2e['N'] = _0x1a960e, _0x3c9e2e['ue'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x2e0')]), _0x3c9e2e['de'] = new THREE[(_0x1c11('0x163'))](), _0x3c9e2e['ve'] = new THREE[(_0x1c11('0x163'))](), _0x3c9e2e['J'] = new THREE[(_0x1c11('0x163'))](), _0x3c9e2e['J'][_0x1c11('0xeb')](_0x3c9e2e['V'][_0x1c11('0xec')])) {
                }
                return _possibleConstructorReturn(_0x3c9e2e);
            }
            _createClass(_0x3f108b, [
                {
                    'key': _0x1c11('0x125'),
                    'value': function dispose() {
                        this['me'] && this['me'][_0x1c11('0x125')]();
                    }
                },
                {
                    'key': _0x1c11('0xf6'),
                    'value': function setSize(_0x3496f2, _0x1c31bb) {
                        if (this['me'] && this['me'][_0x1c11('0xf6')](_0x3496f2, _0x1c31bb), this['J'][_0x1c11('0xeb')](this['V'][_0x1c11('0xec')])) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x2b796c, _0x53c159, _0x243a93) {
                        this['Y'](_0x2b796c);
                        var _0x340387 = _0x2b796c[_0x1c11('0x17e')](), _0x13f70c = _0x2b796c[_0x1c11('0x17f')](), _0x2cf841 = _0x2b796c[_0x1c11('0x180')];
                        if (_0x2b796c[_0x1c11('0x180')] = !0x1, _0x2b796c[_0x1c11('0x182')](new THREE[(_0x1c11('0x183'))](0x0, 0x0, 0x0), 0x0), this['ve'][_0x1c11('0x2e1')](this['J'], this['V'][_0x1c11('0x241')]), this['fe'](_0x2b796c, _0x243a93), ELPIXEL[_0x1c11('0x98')](_0x2b796c, this['ue'], _0x53c159), ELPIXEL[_0x1c11('0x94')](_0x2b796c, _0x53c159, this['me']), _0x2b796c[_0x1c11('0x182')](_0x340387, _0x13f70c), _0x2b796c[_0x1c11('0x180')] = _0x2cf841, this['de'][_0x1c11('0xeb')](this['ve'])) {
                        }
                    }
                },
                {
                    'key': 'Y',
                    'value': function Y(_0x6a901c) {
                        var _0x559ea5 = _0x6a901c[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x233aa9 = _0x6a901c[_0x1c11('0xfd')]()[_0x1c11('0x24')];
                        if (!this['me']) {
                            var _0x4ecfbf = {
                                'minFilter': THREE[_0x1c11('0x118')],
                                'magFilter': THREE[_0x1c11('0x118')],
                                'format': THREE[_0x1c11('0xca')]
                            };
                            this['me'] = new THREE[(_0x1c11('0xcb'))](_0x559ea5, _0x233aa9, _0x4ecfbf);
                        }
                    }
                },
                {
                    'key': 'fe',
                    'value': function fe(_0x19d58d, _0x26c77c) {
                        var _0x233aa9 = void 0x0, _0x1d8ebb = void 0x0;
                        if (_0x233aa9 = this['N']['at'] ? this['N']['at'] : this['N']['Rt'] ? this['N']['Rt'][_0x1c11('0xff')] : null, this['N']['Rt'] || (_0x1d8ebb = this['N']['Et'] ? this['N']['Et'][_0x1c11('0xff')] : null), this['ue'][_0x1c11('0x7a')][_0x1c11('0x2e2')][_0x1c11('0xe')] = _0x26c77c[_0x1c11('0xff')], this['ue'][_0x1c11('0x7a')][_0x1c11('0x2e3')][_0x1c11('0xe')] = this['me'][_0x1c11('0xff')], this['ue'][_0x1c11('0x7a')][_0x1c11('0x1b9')][_0x1c11('0xe')] = _0x233aa9 || _0x1d8ebb) {
                        }
                        var _0x2d5ef5 = this['N']['at'] ? 0x0 : 0x1;
                        if (this['N'][_0x1c11('0x174')] && this['N'][_0x1c11('0x175')] === ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x176')] && (_0x2d5ef5 = 0x2), this['ue'][_0x1c11('0x1a6')][_0x1c11('0x1b4')] = _0x2d5ef5, this['ue'][_0x1c11('0x7a')][_0x1c11('0x2e4')][_0x1c11('0xe')][_0x1c11('0xeb')](this['ve']), this['ue'][_0x1c11('0x7a')][_0x1c11('0x2e5')][_0x1c11('0xe')][_0x1c11('0xeb')](this['de']), this['ue'][_0x1c11('0x7a')][_0x1c11('0x1b3')][_0x1c11('0xe')][_0x1c11('0xeb')](this['J']), this['ue'][_0x1c11('0x7a')][_0x1c11('0x2e6')][_0x1c11('0xe')][_0x1c11('0xeb')](this['V'][_0x1c11('0x167')]), this['ue'][_0x1c11('0x7a')][_0x1c11('0xfa')][_0x1c11('0xe')]['x'] = this[_0x1c11('0xfa')]['x'], this['ue'][_0x1c11('0x7a')][_0x1c11('0xfa')][_0x1c11('0xe')]['y'] = this[_0x1c11('0xfa')]['y']) {
                        }
                        var _0x24cabd = this['ue'][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')];
                        _0x24cabd['x'] = this['V'][_0x1c11('0x197')];
                        _0x24cabd['y'] = this['V'][_0x1c11('0x198')];
                        var _0x4e6d47 = _0x19d58d[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x56feed = _0x19d58d[_0x1c11('0xfd')]()[_0x1c11('0x24')], _0x188c5c = this['ue'][_0x1c11('0x7a')][_0x1c11('0x2e7')][_0x1c11('0xe')];
                        _0x188c5c['x'] = _0x4e6d47;
                        _0x188c5c['y'] = _0x56feed;
                        this['ue'][_0x1c11('0x1a6')][_0x1c11('0x1b6')] = this['N']['pt'] ? 0x1 : 0x0;
                    }
                }
            ]);
            return _0x3f108b;
        }(THREE[_0x1c11('0x2dd')]);
    },
    function (_0x5ba66d, _0x59521e) {
        _0x5ba66d[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x2e0')] = {
            'defines': {
                'DEPTH_PACKING_MODE': 0x1,
                'PERSPECTIVE_CAMERA': 0x1,
                'LINEAR_DEPTH': 0x1,
                'QUALITY': 0x1,
                'UNJITTER': 0x0
            },
            'uniforms': {
                'currentRT': { 'value': null },
                'previousRT': { 'value': null },
                'tDepth': { 'value': null },
                'cameraNearFar': { 'value': new THREE[(_0x1c11('0x29'))]() },
                'textureSize': { 'value': new THREE[(_0x1c11('0x29'))]() },
                'lastProjectionViewMatrix': { 'value': new THREE[(_0x1c11('0x163'))]() },
                'currentProjectionViewMatrix': { 'value': new THREE[(_0x1c11('0x163'))]() },
                'ProjectionMatrix': { 'value': new THREE[(_0x1c11('0x163'))]() },
                'InverseViewMatrix': { 'value': new THREE[(_0x1c11('0x163'))]() },
                'jitterSample': { 'value': new THREE[(_0x1c11('0x29'))]() },
                'feedBack': { 'value': new THREE[(_0x1c11('0x29'))](0.88, 0.97) }
            },
            'vertexShader': _0x1c11('0x2e8'),
            'fragmentShader': [
                _0x1c11('0x1be'),
                _0x1c11('0x35'),
                _0x1c11('0x2e9'),
                _0x1c11('0x2ea'),
                _0x1c11('0x1c1'),
                _0x1c11('0x2eb'),
                _0x1c11('0x2ec'),
                _0x1c11('0x2ed'),
                _0x1c11('0x1c4'),
                _0x1c11('0x2ee'),
                _0x1c11('0x1c8'),
                _0x1c11('0x2ef'),
                _0x1c11('0x2f0'),
                _0x1c11('0x3d'),
                _0x1c11('0x2f1'),
                _0x1c11('0x5a'),
                _0x1c11('0x5b'),
                _0x1c11('0x5c'),
                ');',
                '}',
                _0x1c11('0x6b'),
                _0x1c11('0x2f2'),
                _0x1c11('0x1eb'),
                _0x1c11('0x2f3'),
                _0x1c11('0x60'),
                _0x1c11('0x2f4'),
                _0x1c11('0x62'),
                _0x1c11('0x2f5'),
                _0x1c11('0x73'),
                _0x1c11('0x2f6'),
                _0x1c11('0x60'),
                _0x1c11('0x2f7'),
                _0x1c11('0x62'),
                _0x1c11('0x60'),
                _0x1c11('0x2f8'),
                _0x1c11('0x62'),
                '}',
                _0x1c11('0x2f9'),
                _0x1c11('0x2fa'),
                _0x1c11('0x2fb'),
                _0x1c11('0x2fc'),
                _0x1c11('0x2fd'),
                _0x1c11('0x2fe'),
                '}',
                _0x1c11('0x2ff'),
                _0x1c11('0x300'),
                _0x1c11('0x301'),
                _0x1c11('0x302'),
                _0x1c11('0x303'),
                _0x1c11('0x304'),
                _0x1c11('0x305'),
                _0x1c11('0x306'),
                _0x1c11('0x307'),
                _0x1c11('0x308'),
                _0x1c11('0x309'),
                _0x1c11('0x30a'),
                _0x1c11('0x30b'),
                _0x1c11('0x30c'),
                _0x1c11('0x30d'),
                _0x1c11('0x30e'),
                _0x1c11('0x30f'),
                _0x1c11('0x310'),
                _0x1c11('0x311'),
                _0x1c11('0x312'),
                _0x1c11('0x313'),
                _0x1c11('0x314'),
                '}',
                _0x1c11('0x315'),
                '{\x20',
                _0x1c11('0x301'),
                _0x1c11('0x316'),
                _0x1c11('0x317'),
                _0x1c11('0x318'),
                _0x1c11('0x319'),
                _0x1c11('0x308'),
                _0x1c11('0x30a'),
                _0x1c11('0x30b'),
                _0x1c11('0x30d'),
                _0x1c11('0x30f'),
                _0x1c11('0x311'),
                _0x1c11('0x313'),
                _0x1c11('0x31a'),
                '}',
                _0x1c11('0x31b'),
                '{\x20',
                _0x1c11('0x31c'),
                _0x1c11('0x31d'),
                _0x1c11('0x31e'),
                _0x1c11('0x31f'),
                _0x1c11('0x320'),
                _0x1c11('0x321'),
                _0x1c11('0x322'),
                _0x1c11('0x323'),
                _0x1c11('0x324'),
                _0x1c11('0x325'),
                '}',
                _0x1c11('0x326'),
                _0x1c11('0x327'),
                _0x1c11('0x328'),
                _0x1c11('0x329'),
                _0x1c11('0x32a'),
                _0x1c11('0x32b'),
                _0x1c11('0x32c'),
                '}',
                _0x1c11('0x32d'),
                '}',
                _0x1c11('0x32e'),
                _0x1c11('0x32f'),
                _0x1c11('0x330'),
                _0x1c11('0x331'),
                _0x1c11('0x332'),
                _0x1c11('0x333'),
                _0x1c11('0x334'),
                _0x1c11('0x335'),
                _0x1c11('0x336'),
                _0x1c11('0x337'),
                _0x1c11('0x338'),
                _0x1c11('0x339'),
                _0x1c11('0x33a'),
                _0x1c11('0x33b'),
                _0x1c11('0x33c'),
                _0x1c11('0x33d'),
                _0x1c11('0x33e'),
                _0x1c11('0x33f'),
                _0x1c11('0x340'),
                _0x1c11('0x341'),
                _0x1c11('0x342'),
                _0x1c11('0x343'),
                _0x1c11('0x344'),
                _0x1c11('0x345'),
                _0x1c11('0x346'),
                _0x1c11('0x347'),
                _0x1c11('0x348'),
                _0x1c11('0x349'),
                _0x1c11('0x34a'),
                _0x1c11('0x34b'),
                _0x1c11('0x34c'),
                _0x1c11('0x34d'),
                _0x1c11('0x34e'),
                _0x1c11('0x34f'),
                '}',
                _0x1c11('0x350'),
                _0x1c11('0x1d1'),
                _0x1c11('0x1d2'),
                _0x1c11('0x1d3'),
                _0x1c11('0x351'),
                '}',
                _0x1c11('0x38'),
                _0x1c11('0x32f'),
                _0x1c11('0x352'),
                _0x1c11('0x353'),
                _0x1c11('0x60'),
                _0x1c11('0x354'),
                _0x1c11('0x62'),
                _0x1c11('0x355'),
                _0x1c11('0x356'),
                '}',
                _0x1c11('0x357'),
                _0x1c11('0x1eb'),
                _0x1c11('0x358'),
                _0x1c11('0x60'),
                _0x1c11('0x359'),
                _0x1c11('0x62'),
                _0x1c11('0x35a'),
                _0x1c11('0x35b'),
                _0x1c11('0x35c'),
                _0x1c11('0x35d'),
                '}',
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
    },
    function (_0xf2f20f, _0x43034a, _0x4bcffd) {
        _0x4bcffd(0x17);
        _0xf2f20f[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xbc')] = function () {
            function _0x304e8d() {
                _classCallCheck(this, _0x304e8d);
                if (this[_0x1c11('0x35e')] = 0x3, this[_0x1c11('0x1a4')] = 0x1, this[_0x1c11('0x35f')] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x360')]), this[_0x1c11('0x35f')][_0x1c11('0x7a')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](this[_0x1c11('0x35f')][_0x1c11('0x7a')]), this[_0x1c11('0x35f')][_0x1c11('0x1a6')] = Object[_0x1c11('0x1ff')]({}, this[_0x1c11('0x35f')][_0x1c11('0x1a6')])) {
                }
            }
            _createClass(_0x304e8d, [
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x2195c0, _0xaa97fa, _0x2d120d, _0x479aaf) {
                        this['Y'](_0x2195c0);
                        this['pe'](_0x2195c0, _0xaa97fa, _0x2d120d, _0x479aaf);
                    }
                },
                {
                    'key': _0x1c11('0xf6'),
                    'value': function setSize(_0x368c22, _0x2b0ff7) {
                        if (this['we'] && this['we'][_0x1c11('0xf6')](_0x368c22, _0x2b0ff7), this[_0x1c11('0x35f')][_0x1c11('0x7a')][_0x1c11('0x1a8')][_0x1c11('0xe')][_0x1c11('0x9f')](_0x368c22, _0x2b0ff7)) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0x125'),
                    'value': function dispose() {
                        if (this['we'] && (this['we'][_0x1c11('0x125')](), this['we'] = null)) {
                        }
                    }
                },
                {
                    'key': 'Y',
                    'value': function Y(_0x33f446) {
                        if (!this['we']) {
                            var _0x3d8b2d = _0x33f446[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0xf6cbe4 = _0x33f446[_0x1c11('0xfd')]()[_0x1c11('0x24')], _0x130459 = {
                                    'minFilter': THREE[_0x1c11('0x8c')],
                                    'magFilter': THREE[_0x1c11('0x8c')],
                                    'format': THREE[_0x1c11('0xca')]
                                };
                            this['we'] = new THREE[(_0x1c11('0xcb'))](_0x3d8b2d, _0xf6cbe4, _0x130459);
                        }
                    }
                },
                {
                    'key': 'pe',
                    'value': function pe(_0x1002ca, _0x3f336d, _0x2d5782, _0xf023fe) {
                        var _0x32c7bb = _0x1002ca[_0x1c11('0xfd')]()[_0x1c11('0x23')], _0x3f6e36 = _0x1002ca[_0x1c11('0xfd')]()[_0x1c11('0x24')];
                        this[_0x1c11('0x35f')][_0x1c11('0x7a')][_0x1c11('0x1a8')][_0x1c11('0xe')][_0x1c11('0x9f')](_0x32c7bb, _0x3f6e36);
                        var _0x4fbf90 = _0xf023fe['Tt'] ? _0xf023fe['Tt'][_0x1c11('0xff')] : null;
                        var _0x169169 = void 0x0;
                        if (_0xf023fe['Rt'] || (_0x169169 = _0xf023fe['Et'] ? _0xf023fe['Et'][_0x1c11('0xff')] : null), _0x169169 ? (this[_0x1c11('0x35f')][_0x1c11('0x1a6')][_0x1c11('0x1b5')] = 0x1, this[_0x1c11('0x35f')][_0x1c11('0x7a')][_0x1c11('0x1b8')][_0x1c11('0xe')] = _0x169169) : this[_0x1c11('0x35f')][_0x1c11('0x7a')][_0x1c11('0x1b8')][_0x1c11('0xe')] = _0x4fbf90, this[_0x1c11('0x35f')][_0x1c11('0x1a6')][_0x1c11('0x361')] = this[_0x1c11('0x35e')], this[_0x1c11('0x35f')][_0x1c11('0x1a6')][_0x1c11('0x1b6')] = _0xf023fe['pt'] ? 0x1 : 0x0, this[_0x1c11('0x35f')][_0x1c11('0x7a')][_0x1c11('0x362')][_0x1c11('0xe')] = _0x3f336d[_0x1c11('0xff')], this[_0x1c11('0x35f')][_0x1c11('0x7a')][_0x1c11('0x363')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x29'))](0x1, 0x0), this[_0x1c11('0x35f')][_0x1c11('0x7a')][_0x1c11('0x1a4')][_0x1c11('0xe')] = this[_0x1c11('0x1a4')]) {
                        }
                        var _0x181f8c = this[_0x1c11('0x35f')][_0x1c11('0x7a')][_0x1c11('0x196')][_0x1c11('0xe')];
                        if (_0x181f8c['x'] = _0x2d5782[_0x1c11('0x197')], _0x181f8c['y'] = _0x2d5782[_0x1c11('0x198')], ELPIXEL[_0x1c11('0x98')](_0x1002ca, this[_0x1c11('0x35f')], this['we']), this[_0x1c11('0x35f')][_0x1c11('0x7a')][_0x1c11('0x362')][_0x1c11('0xe')] = this['we'][_0x1c11('0xff')], this[_0x1c11('0x35f')][_0x1c11('0x7a')][_0x1c11('0x363')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x29'))](0x0, 0x1), ELPIXEL[_0x1c11('0x98')](_0x1002ca, this[_0x1c11('0x35f')], _0x3f336d)) {
                        }
                    }
                }
            ]);
            return _0x304e8d;
        }();
    },
    function (_0x492ed5, _0x19726c) {
        _0x492ed5[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x360')] = {
            'defines': {
                'PERSPECTIVE_CAMERA': 0x1,
                'KERNEL_SAMPLE_RADIUS': 0x4,
                'LINEAR_DEPTH': 0x1,
                'DEPTH_NORMAL_TEXTURE': 0x0
            },
            'uniforms': {
                'tOcclusionDepth': {
                    'type': 't',
                    'value': null
                },
                'tNormal': {
                    'type': 't',
                    'value': null
                },
                'size': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))](0x100, 0x100)
                },
                'kernelDirection': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))](0x1, 0x0)
                },
                'cameraNearFar': {
                    'type': 'v2',
                    'value': new THREE[(_0x1c11('0x29'))](0x1, 0x0)
                },
                'edgeSharpness': {
                    'type': 'f',
                    'value': 0x1
                }
            },
            'vertexShader': [
                _0x1c11('0x35'),
                _0x1c11('0x38'),
                _0x1c11('0x126'),
                _0x1c11('0x127'),
                '}'
            ][_0x1c11('0x3b')]('\x0a'),
            'fragmentShader': [
                _0x1c11('0x1be'),
                _0x1c11('0x35'),
                _0x1c11('0x364'),
                _0x1c11('0x1c3'),
                _0x1c11('0x1c7'),
                _0x1c11('0x1c8'),
                _0x1c11('0x365'),
                _0x1c11('0x366'),
                _0x1c11('0x3d'),
                _0x1c11('0x2f9'),
                _0x1c11('0x1cd'),
                _0x1c11('0x203'),
                _0x1c11('0x60'),
                _0x1c11('0x204'),
                _0x1c11('0x62'),
                '}',
                _0x1c11('0x367'),
                _0x1c11('0x55'),
                _0x1c11('0x56'),
                _0x1c11('0x57'),
                _0x1c11('0x58'),
                '}',
                _0x1c11('0x368'),
                _0x1c11('0x5e'),
                _0x1c11('0x369'),
                _0x1c11('0x60'),
                _0x1c11('0x61'),
                _0x1c11('0x62'),
                '}',
                _0x1c11('0x36a'),
                _0x1c11('0x64'),
                '}',
                _0x1c11('0x36b'),
                _0x1c11('0x36c'),
                _0x1c11('0x36d'),
                '}',
                _0x1c11('0x36e'),
                _0x1c11('0x36f'),
                _0x1c11('0x370'),
                _0x1c11('0x371'),
                _0x1c11('0x372'),
                _0x1c11('0x373'),
                _0x1c11('0x374'),
                '}',
                _0x1c11('0x375'),
                _0x1c11('0x1eb'),
                _0x1c11('0x376'),
                _0x1c11('0x377'),
                _0x1c11('0x62'),
                _0x1c11('0x378'),
                _0x1c11('0x379'),
                _0x1c11('0x37a'),
                _0x1c11('0x37b'),
                _0x1c11('0x37c'),
                _0x1c11('0x37d'),
                _0x1c11('0x37e'),
                _0x1c11('0x37f'),
                '}',
                _0x1c11('0x38'),
                _0x1c11('0x380'),
                _0x1c11('0x371'),
                _0x1c11('0x372'),
                _0x1c11('0x373'),
                _0x1c11('0x1dd'),
                '}',
                _0x1c11('0x381'),
                _0x1c11('0x1eb'),
                _0x1c11('0x382'),
                _0x1c11('0x383'),
                _0x1c11('0x60'),
                _0x1c11('0x384'),
                _0x1c11('0x62'),
                _0x1c11('0x385'),
                _0x1c11('0x386'),
                _0x1c11('0x387'),
                _0x1c11('0x388'),
                _0x1c11('0x389'),
                _0x1c11('0x38a'),
                _0x1c11('0x38b'),
                _0x1c11('0x38c'),
                _0x1c11('0x38d'),
                _0x1c11('0x38e'),
                _0x1c11('0x38f'),
                _0x1c11('0x390'),
                _0x1c11('0x391'),
                _0x1c11('0x392'),
                _0x1c11('0x393'),
                _0x1c11('0x394'),
                _0x1c11('0x395'),
                _0x1c11('0x396'),
                _0x1c11('0x397'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
    },
    function (_0x270062, _0x32ef4d, _0x4d58be) {
        _0x4d58be(0x19);
        _0x270062[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x113')] = function (_0x48bbfe) {
            _inherits(_0x529e0c, _0x48bbfe);
            function _0x529e0c(_0x4135a3, _0x20ab59, _0x23dced, _0x2ce266, _0x429415) {
                var _0x3c3c5f;
                _classCallCheck(this, _0x529e0c);
                if ((_0x3c3c5f = _possibleConstructorReturn(this, (_0x529e0c[_0x1c11('0x19')] || Object[_0x1c11('0x2d7')](_0x529e0c))[_0x1c11('0x1c')](this)), _0x3c3c5f), _0x3c3c5f['N'] = _0x4135a3, _0x3c3c5f[_0x1c11('0x398')] = void 0x0 !== _0x23dced ? _0x23dced : 0x1, _0x3c3c5f[_0x1c11('0x2b3')] = _0x2ce266, _0x3c3c5f[_0x1c11('0x399')] = _0x429415, _0x3c3c5f[_0x1c11('0x39a')] = void 0x0 !== _0x20ab59 ? new THREE[(_0x1c11('0x29'))](_0x20ab59['x'], _0x20ab59['y']) : new THREE[(_0x1c11('0x29'))](0x100, 0x100)) {
                }
                var _0x1a9c81 = {
                    'minFilter': THREE[_0x1c11('0x118')],
                    'magFilter': THREE[_0x1c11('0x118')],
                    'format': THREE[_0x1c11('0xca')]
                };
                _0x3c3c5f[_0x1c11('0x39b')] = [];
                _0x3c3c5f[_0x1c11('0x39c')] = [];
                _0x3c3c5f[_0x1c11('0x39d')] = 0x5;
                var _0x41661a = Math[_0x1c11('0x39e')](_0x3c3c5f[_0x1c11('0x39a')]['x'] / 0x2), _0x13e921 = Math[_0x1c11('0x39e')](_0x3c3c5f[_0x1c11('0x39a')]['y'] / 0x2);
                _0x3c3c5f[_0x1c11('0x39f')] = new THREE[(_0x1c11('0xcb'))](_0x41661a, _0x13e921, _0x1a9c81);
                _0x3c3c5f[_0x1c11('0x39f')][_0x1c11('0xff')][_0x1c11('0x3a0')] = _0x1c11('0x3a1');
                _0x3c3c5f[_0x1c11('0x39f')][_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1;
                for (var _0x5597a1 = 0x0; _0x5597a1 < _0x3c3c5f[_0x1c11('0x39d')]; _0x5597a1++) {
                    var _0x116d32 = new THREE[(_0x1c11('0xcb'))](_0x41661a, _0x13e921, _0x1a9c81);
                    _0x116d32[_0x1c11('0xff')][_0x1c11('0x3a0')] = _0x1c11('0x3a2') + _0x5597a1;
                    _0x116d32[_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1;
                    _0x3c3c5f[_0x1c11('0x39b')][_0x1c11('0x32')](_0x116d32);
                    (_0x116d32 = new THREE[(_0x1c11('0xcb'))](_0x41661a, _0x13e921, _0x1a9c81))[_0x1c11('0xff')][_0x1c11('0x3a0')] = _0x1c11('0x3a3') + _0x5597a1;
                    _0x116d32[_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1;
                    _0x3c3c5f[_0x1c11('0x39c')][_0x1c11('0x32')](_0x116d32);
                    _0x41661a = Math[_0x1c11('0x39e')](_0x41661a / 0x2);
                    _0x13e921 = Math[_0x1c11('0x39e')](_0x13e921 / 0x2);
                }
                var _0x4d54f1 = ELPIXEL[_0x1c11('0x3a4')];
                _0x3c3c5f[_0x1c11('0x3a5')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](_0x4d54f1[_0x1c11('0x7a')]);
                _0x3c3c5f[_0x1c11('0x3a5')][_0x1c11('0x3a6')][_0x1c11('0xe')] = _0x429415;
                _0x3c3c5f[_0x1c11('0x3a7')] = new THREE[(_0x1c11('0x7b'))]({
                    'uniforms': _0x3c3c5f[_0x1c11('0x3a5')],
                    'vertexShader': _0x4d54f1[_0x1c11('0x7c')],
                    'fragmentShader': _0x4d54f1[_0x1c11('0x7d')],
                    'defines': {
                        'DEPTH_PACKING_MODE': 0x0,
                        'LINEAR_DEPTH': 0x1
                    }
                });
                _0x3c3c5f[_0x1c11('0x3a8')] = [];
                var _0x5d2edc = [
                    0x3,
                    0x5,
                    0x7,
                    0x9,
                    0xb
                ];
                _0x41661a = Math[_0x1c11('0x39e')](_0x3c3c5f[_0x1c11('0x39a')]['x'] / 0x2);
                _0x13e921 = Math[_0x1c11('0x39e')](_0x3c3c5f[_0x1c11('0x39a')]['y'] / 0x2);
                for (var _0x4931b5 = 0x0; _0x4931b5 < _0x3c3c5f[_0x1c11('0x39d')]; _0x4931b5++) {
                    _0x3c3c5f[_0x1c11('0x3a8')][_0x1c11('0x32')](_0x3c3c5f[_0x1c11('0x3a9')](_0x5d2edc[_0x4931b5]));
                    _0x3c3c5f[_0x1c11('0x3a8')][_0x4931b5][_0x1c11('0x7a')][_0x1c11('0x11f')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x29'))](_0x41661a, _0x13e921);
                    _0x41661a = Math[_0x1c11('0x39e')](_0x41661a / 0x2);
                    _0x13e921 = Math[_0x1c11('0x39e')](_0x13e921 / 0x2);
                }
                _0x3c3c5f[_0x1c11('0x3aa')] = _0x3c3c5f[_0x1c11('0x3ab')](_0x3c3c5f[_0x1c11('0x39d')]);
                _0x3c3c5f[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3ac')][_0x1c11('0xe')] = _0x3c3c5f[_0x1c11('0x39c')][0x0][_0x1c11('0xff')];
                _0x3c3c5f[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3ad')][_0x1c11('0xe')] = _0x3c3c5f[_0x1c11('0x39c')][0x1][_0x1c11('0xff')];
                _0x3c3c5f[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3ae')][_0x1c11('0xe')] = _0x3c3c5f[_0x1c11('0x39c')][0x2][_0x1c11('0xff')];
                _0x3c3c5f[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3af')][_0x1c11('0xe')] = _0x3c3c5f[_0x1c11('0x39c')][0x3][_0x1c11('0xff')];
                _0x3c3c5f[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3b0')][_0x1c11('0xe')] = _0x3c3c5f[_0x1c11('0x39c')][0x4][_0x1c11('0xff')];
                _0x3c3c5f[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3b1')][_0x1c11('0xe')] = _0x23dced;
                _0x3c3c5f[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3b2')][_0x1c11('0xe')] = 0.1;
                _0x3c3c5f[_0x1c11('0x3aa')][_0x1c11('0x90')] = !0x0;
                _0x3c3c5f[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3b3')][_0x1c11('0xe')] = [
                    0x1,
                    0.8,
                    0.6,
                    0.4,
                    0.2
                ];
                _0x3c3c5f[_0x1c11('0x3b4')] = [
                    new THREE[(_0x1c11('0x44'))](0x1, 0x1, 0x1),
                    new THREE[(_0x1c11('0x44'))](0x1, 0x1, 0x1),
                    new THREE[(_0x1c11('0x44'))](0x1, 0x1, 0x1),
                    new THREE[(_0x1c11('0x44'))](0x1, 0x1, 0x1),
                    new THREE[(_0x1c11('0x44'))](0x1, 0x1, 0x1)
                ];
                _0x3c3c5f[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3b4')][_0x1c11('0xe')] = _0x3c3c5f[_0x1c11('0x3b4')];
                var _0x58a7db = THREE[_0x1c11('0x77')];
                _0x3c3c5f[_0x1c11('0x3b5')] = THREE[_0x1c11('0x78')][_0x1c11('0x79')](_0x58a7db[_0x1c11('0x7a')]);
                _0x3c3c5f[_0x1c11('0x3b5')][_0x1c11('0x3b6')][_0x1c11('0xe')] = 0x1;
                _0x3c3c5f[_0x1c11('0x3b7')] = new THREE[(_0x1c11('0x7b'))]({
                    'uniforms': _0x3c3c5f[_0x1c11('0x3b5')],
                    'vertexShader': _0x58a7db[_0x1c11('0x7c')],
                    'fragmentShader': _0x58a7db[_0x1c11('0x7d')],
                    'blending': THREE[_0x1c11('0x3b8')],
                    'depthTest': !0x1,
                    'depthWrite': !0x1,
                    'transparent': !0x0
                });
                _0x3c3c5f[_0x1c11('0xf0')] = !0x0;
                _0x3c3c5f[_0x1c11('0x10f')] = !0x1;
                _0x3c3c5f[_0x1c11('0x3b9')] = new THREE[(_0x1c11('0x183'))]();
                _0x3c3c5f[_0x1c11('0x3ba')] = 0x1;
                _0x3c3c5f[_0x1c11('0xe9')] = new THREE[(_0x1c11('0x7f'))](-0x1, 0x1, 0x1, -0x1, 0x0, 0x1);
                _0x3c3c5f[_0x1c11('0xea')] = new THREE[(_0x1c11('0x7e'))]();
                _0x3c3c5f[_0x1c11('0x3bb')] = new THREE[(_0x1c11('0x114'))]();
                _0x3c3c5f[_0x1c11('0x80')] = new THREE[(_0x1c11('0x81'))](new THREE[(_0x1c11('0x2ad'))](0x2, 0x2), null);
                _0x3c3c5f[_0x1c11('0x80')][_0x1c11('0x83')] = !0x1;
                _0x3c3c5f[_0x1c11('0xea')][_0x1c11('0x84')](_0x3c3c5f[_0x1c11('0x80')]);
                return _possibleConstructorReturn(_0x3c3c5f);
            }
            _createClass(_0x529e0c, [
                {
                    'key': _0x1c11('0x125'),
                    'value': function dispose() {
                        for (var _0x269ef1 = 0x0; _0x269ef1 < this[_0x1c11('0x39b')][_0x1c11('0xb')]; _0x269ef1++) {
                            this[_0x1c11('0x39b')][_0x269ef1][_0x1c11('0x125')]();
                        }
                        for (var _0x29dfdf = 0x0; _0x29dfdf < this[_0x1c11('0x39c')][_0x1c11('0xb')]; _0x29dfdf++) {
                            this[_0x1c11('0x39c')][_0x29dfdf][_0x1c11('0x125')]();
                        }
                        this[_0x1c11('0x39f')][_0x1c11('0x125')]();
                    }
                },
                {
                    'key': _0x1c11('0xf6'),
                    'value': function setSize(_0x5ee5c3, _0x21ee88) {
                        var _0x4d58be = Math[_0x1c11('0x39e')](_0x5ee5c3 / 0x2), _0x1aeec3 = Math[_0x1c11('0x39e')](_0x21ee88 / 0x2);
                        this[_0x1c11('0x39f')][_0x1c11('0xf6')](_0x4d58be, _0x1aeec3);
                        for (var _0x47851c = 0x0; _0x47851c < this[_0x1c11('0x39d')]; _0x47851c++) {
                            this[_0x1c11('0x39b')][_0x47851c][_0x1c11('0xf6')](_0x4d58be, _0x1aeec3);
                            this[_0x1c11('0x39c')][_0x47851c][_0x1c11('0xf6')](_0x4d58be, _0x1aeec3);
                            this[_0x1c11('0x3a8')][_0x47851c][_0x1c11('0x7a')][_0x1c11('0x11f')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x29'))](_0x4d58be, _0x1aeec3);
                            _0x4d58be = Math[_0x1c11('0x39e')](_0x4d58be / 0x2);
                            _0x1aeec3 = Math[_0x1c11('0x39e')](_0x1aeec3 / 0x2);
                        }
                    }
                },
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x291d38, _0x3a402e, _0x453140, _0x28533f, _0x23ba65) {
                        this[_0x1c11('0x3b9')][_0x1c11('0xeb')](_0x291d38[_0x1c11('0x17e')]());
                        this[_0x1c11('0x3ba')] = _0x291d38[_0x1c11('0x17f')]();
                        var _0x285d66 = _0x291d38[_0x1c11('0x180')];
                        var _0x4d2e02 = void 0x0, _0x189e27 = void 0x0;
                        if (_0x291d38[_0x1c11('0x180')] = !0x1, _0x291d38[_0x1c11('0x182')](new THREE[(_0x1c11('0x183'))](0x0, 0x0, 0x0), 0x0), _0x23ba65 && _0x291d38[_0x1c11('0x3bc')][_0x1c11('0x3bd')](_0x291d38[_0x1c11('0x3bc')][_0x1c11('0x3be')]), this[_0x1c11('0x110')] && (this[_0x1c11('0x80')][_0x1c11('0x96')] = this[_0x1c11('0x3bb')], this[_0x1c11('0x3bb')][_0x1c11('0x103')] = _0x453140[_0x1c11('0xff')], _0x291d38[_0x1c11('0x97')](this[_0x1c11('0xea')], this[_0x1c11('0xe9')], void 0x0, !0x0)), _0x4d2e02 = this['N']['at'] ? this['N']['at'] : this['N']['Rt'] ? this['N']['Rt'][_0x1c11('0xff')] : null, this['N']['Rt'] || (_0x189e27 = this['N']['Et'] ? this['N']['Et'][_0x1c11('0xff')] : null), this[_0x1c11('0x3a7')][_0x1c11('0x7a')][_0x1c11('0x1b9')][_0x1c11('0xe')] = _0x4d2e02 || _0x189e27) {
                        }
                        var _0x5e3fbe = this['N']['at'] ? 0x0 : 0x1;
                        if (this['N'][_0x1c11('0x174')] && this['N'][_0x1c11('0x175')] === ELPIXEL[_0x1c11('0xbd')][_0x1c11('0x176')] && (_0x5e3fbe = 0x2), this[_0x1c11('0x3a7')][_0x1c11('0x1a6')][_0x1c11('0x1b4')] = _0x5e3fbe, this[_0x1c11('0x3a7')][_0x1c11('0x1a6')][_0x1c11('0x1b6')] = this['N']['pt'] ? 0x1 : 0x0, this[_0x1c11('0x3a5')][_0x1c11('0x3bf')][_0x1c11('0xe')] = _0x453140[_0x1c11('0xff')], this[_0x1c11('0x3a5')][_0x1c11('0x3a6')][_0x1c11('0xe')] = this[_0x1c11('0x399')], this[_0x1c11('0x80')][_0x1c11('0x96')] = this[_0x1c11('0x3a7')], _0x291d38[_0x1c11('0x97')](this[_0x1c11('0xea')], this[_0x1c11('0xe9')], this[_0x1c11('0x39f')], !0x0)) {
                        }
                        var _0x27e138 = this[_0x1c11('0x39f')];
                        for (var _0x38a0cb = 0x0; _0x38a0cb < this[_0x1c11('0x39d')]; _0x38a0cb++) {
                            this[_0x1c11('0x80')][_0x1c11('0x96')] = this[_0x1c11('0x3a8')][_0x38a0cb];
                            this[_0x1c11('0x3a8')][_0x38a0cb][_0x1c11('0x7a')][_0x1c11('0x121')][_0x1c11('0xe')] = _0x27e138[_0x1c11('0xff')];
                            this[_0x1c11('0x3a8')][_0x38a0cb][_0x1c11('0x7a')][_0x1c11('0x120')][_0x1c11('0xe')] = ELPIXEL[_0x1c11('0x113')][_0x1c11('0x3c0')];
                            _0x291d38[_0x1c11('0x97')](this[_0x1c11('0xea')], this[_0x1c11('0xe9')], this[_0x1c11('0x39b')][_0x38a0cb], !0x0);
                            this[_0x1c11('0x3a8')][_0x38a0cb][_0x1c11('0x7a')][_0x1c11('0x121')][_0x1c11('0xe')] = this[_0x1c11('0x39b')][_0x38a0cb][_0x1c11('0xff')];
                            this[_0x1c11('0x3a8')][_0x38a0cb][_0x1c11('0x7a')][_0x1c11('0x120')][_0x1c11('0xe')] = ELPIXEL[_0x1c11('0x113')][_0x1c11('0x3c1')];
                            _0x291d38[_0x1c11('0x97')](this[_0x1c11('0xea')], this[_0x1c11('0xe9')], this[_0x1c11('0x39c')][_0x38a0cb], !0x0);
                            _0x27e138 = this[_0x1c11('0x39c')][_0x38a0cb];
                        }
                        this[_0x1c11('0x80')][_0x1c11('0x96')] = this[_0x1c11('0x3aa')];
                        this[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3b1')][_0x1c11('0xe')] = this[_0x1c11('0x398')];
                        this[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3b2')][_0x1c11('0xe')] = this[_0x1c11('0x2b3')];
                        this[_0x1c11('0x3aa')][_0x1c11('0x7a')][_0x1c11('0x3b4')][_0x1c11('0xe')] = this[_0x1c11('0x3b4')];
                        _0x291d38[_0x1c11('0x97')](this[_0x1c11('0xea')], this[_0x1c11('0xe9')], this[_0x1c11('0x39b')][0x0], !0x0);
                        this[_0x1c11('0x80')][_0x1c11('0x96')] = this[_0x1c11('0x3b7')];
                        this[_0x1c11('0x3b5')][_0x1c11('0x95')][_0x1c11('0xe')] = this[_0x1c11('0x39b')][0x0][_0x1c11('0xff')];
                        _0x23ba65 && _0x291d38[_0x1c11('0x3bc')][_0x1c11('0xc0')](_0x291d38[_0x1c11('0x3bc')][_0x1c11('0x3be')]);
                        if (this[_0x1c11('0x110')] ? _0x291d38[_0x1c11('0x97')](this[_0x1c11('0xea')], this[_0x1c11('0xe9')], void 0x0, !0x1) : _0x291d38[_0x1c11('0x97')](this[_0x1c11('0xea')], this[_0x1c11('0xe9')], _0x453140, !0x1), _0x291d38[_0x1c11('0x182')](this[_0x1c11('0x3b9')], this[_0x1c11('0x3ba')]), _0x291d38[_0x1c11('0x180')] = _0x285d66) {
                        }
                    }
                },
                {
                    'key': _0x1c11('0x3a9'),
                    'value': function getSeperableBlurMaterial(_0x16469d) {
                        return new THREE[(_0x1c11('0x7b'))]({
                            'defines': {
                                'KERNEL_RADIUS': _0x16469d,
                                'SIGMA': _0x16469d
                            },
                            'uniforms': {
                                'colorTexture': { 'value': null },
                                'texSize': { 'value': new THREE[(_0x1c11('0x29'))](0.5, 0.5) },
                                'direction': { 'value': new THREE[(_0x1c11('0x29'))](0.5, 0.5) }
                            },
                            'vertexShader': _0x1c11('0x3c2'),
                            'fragmentShader': _0x1c11('0x3c3')
                        });
                    }
                },
                {
                    'key': _0x1c11('0x3ab'),
                    'value': function getCompositeMaterial(_0x5ec2f1) {
                        return new THREE[(_0x1c11('0x7b'))]({
                            'defines': { 'NUM_MIPS': _0x5ec2f1 },
                            'uniforms': {
                                'blurTexture1': { 'value': null },
                                'blurTexture2': { 'value': null },
                                'blurTexture3': { 'value': null },
                                'blurTexture4': { 'value': null },
                                'blurTexture5': { 'value': null },
                                'dirtTexture': { 'value': null },
                                'bloomStrength': { 'value': 0x1 },
                                'bloomFactors': { 'value': null },
                                'bloomTintColors': { 'value': null },
                                'bloomRadius': { 'value': 0x0 }
                            },
                            'vertexShader': _0x1c11('0x3c2'),
                            'fragmentShader': _0x1c11('0x3c4')
                        });
                    }
                }
            ]);
            return _0x529e0c;
        }(THREE[_0x1c11('0x2dd')]);
        ELPIXEL[_0x1c11('0x113')][_0x1c11('0x3c0')] = new THREE[(_0x1c11('0x29'))](0x1, 0x0);
        ELPIXEL[_0x1c11('0x113')][_0x1c11('0x3c1')] = new THREE[(_0x1c11('0x29'))](0x0, 0x1);
    },
    function (_0x4fd20a, _0x5cc7eb) {
        _0x4fd20a[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x3a4')] = {
            'uniforms': {
                'tColor': {
                    'type': 't',
                    'value': null
                },
                'tDepth': {
                    'type': 't',
                    'value': null
                },
                'bloomThreshold': {
                    'type': 'f',
                    'value': 0x1
                }
            },
            'vertexShader': [
                _0x1c11('0x35'),
                _0x1c11('0x38'),
                _0x1c11('0x126'),
                _0x1c11('0x127'),
                '}'
            ][_0x1c11('0x3b')]('\x0a'),
            'fragmentShader': [
                _0x1c11('0x3d'),
                _0x1c11('0x3c5'),
                _0x1c11('0x1c1'),
                _0x1c11('0x3c6'),
                _0x1c11('0x35'),
                _0x1c11('0x59'),
                _0x1c11('0x5a'),
                _0x1c11('0x5b'),
                _0x1c11('0x5c'),
                ');',
                '}',
                _0x1c11('0x6b'),
                _0x1c11('0x3c7'),
                _0x1c11('0x70'),
                _0x1c11('0x71'),
                _0x1c11('0x72'),
                _0x1c11('0x73'),
                _0x1c11('0x3c8'),
                _0x1c11('0x60'),
                _0x1c11('0x3c9'),
                _0x1c11('0x62'),
                _0x1c11('0x60'),
                _0x1c11('0x3ca'),
                _0x1c11('0x62'),
                '}',
                _0x1c11('0x38'),
                _0x1c11('0x3cb'),
                _0x1c11('0x3cc'),
                _0x1c11('0x3cd'),
                _0x1c11('0x3ce'),
                _0x1c11('0x3cf'),
                _0x1c11('0x3d0'),
                _0x1c11('0x3d1'),
                '}'
            ][_0x1c11('0x3b')]('\x0a')
        };
    },
    function (_0x102121, _0x4c09a0) {
        _0x102121[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xdf')] = function () {
            function _0x1f85d0(_0x103a63) {
                _classCallCheck(this, _0x1f85d0);
                if (this[_0x1c11('0x3d2')] = _0x103a63, this['Ee'] = 0x0, this['Re'] = ELPIXEL[_0x1c11('0x2e')](_0x103a63, -0x1, ELPIXEL[_0x1c11('0x2c')], ELPIXEL[_0x1c11('0x93')]), this['Te'] = []) {
                }
                for (var _0x43ca55 = 0x0; _0x43ca55 < this['Re'][_0x1c11('0xb')]; _0x43ca55++) {
                    var _0x5e1276 = this['Re'][_0x43ca55];
                    this['Te'][_0x1c11('0x32')](new THREE[(_0x1c11('0x29'))](_0x5e1276['x'], _0x5e1276['y']));
                }
                if (this['xe'] = new THREE[(_0x1c11('0x162'))](), this['De'] = new THREE[(_0x1c11('0x3d3'))](), this['A'] = 0x0, this['Ne'] = !0x1, this['ge'] = [], this['Pe'] = new THREE[(_0x1c11('0x3d4'))](0.05, 0x5, 0x5), this['Oe'] = [], this['L'] = !0x1, this[_0x1c11('0x90')] = !0x0) {
                }
            }
            _createClass(_0x1f85d0, [
                {
                    'key': _0x1c11('0x3d5'),
                    'value': function getVPLBuffer() {
                        return this['Oe'];
                    }
                },
                {
                    'key': _0x1c11('0x3d6'),
                    'value': function getNumVPL() {
                        return this['Re'][_0x1c11('0xb')];
                    }
                },
                {
                    'key': _0x1c11('0xee'),
                    'value': function generateVPLs(_0x20f79e, _0x5465c6, _0x43e320, _0x2f0cf2) {
                        if (!this['L'])
                            return;
                        if (this[_0x1c11('0x90')] && (this['G'](), this[_0x1c11('0x90')] = !0x1), this['Ee'] >= this[_0x1c11('0x3d6')]())
                            return this[_0x1c11('0x90')] = !0x1, void (this['Me'][_0x1c11('0x193')] = !0x0);
                        if (this['Me'] || (this['Me'] = new THREE[(_0x1c11('0x3d7'))](), this['Me'][_0x1c11('0x193')] = !0x1, _0x20f79e[_0x1c11('0x84')](this['Me']))) {
                        }
                        var _0x3d20b5 = performance[_0x1c11('0x3d8')]();
                        var _0x4548b8 = 0x0;
                        for (var _0x3bfdee = 0x0; _0x3bfdee < _0x43e320; _0x3bfdee++) {
                            var _0x570f60 = this['xe'][_0x1c11('0x165')], _0xe1b634 = this['xe'][_0x1c11('0x120')];
                            if (this['De'][_0x1c11('0x9f')](this['xe'][_0x1c11('0x165')], this['xe'][_0x1c11('0x120')]), !this['Ce'](_0x5465c6, _0x570f60, _0xe1b634, this['A'] * _0x43e320 + _0x3bfdee))
                                break;
                            var _0x3788b7 = _0x2f0cf2 ? _0x2f0cf2[_0x1c11('0x15f')](this['xe'], _0x20f79e) : this['De'][_0x1c11('0x3d9')](_0x20f79e, !0x0);
                            if (_0x3788b7[_0x1c11('0xb')] > 0x0) {
                                var _0x357f00 = _0x3788b7[0x0];
                                if (_0x357f00[_0x1c11('0x14')] instanceof THREE[_0x1c11('0x81')]) {
                                    var _0x3bff74 = new THREE[(_0x1c11('0x183'))](), _0x4bed80 = new THREE[(_0x1c11('0x44'))](), _0x5df93c = new THREE[(_0x1c11('0x44'))]();
                                    _0x4bed80[_0x1c11('0xeb')](_0x357f00[_0x1c11('0x16a')]);
                                    _0x5df93c[_0x1c11('0xeb')](_0x357f00[_0x1c11('0x3da')][_0x1c11('0x3db')]);
                                    _0x5df93c[_0x1c11('0x169')](_0x357f00[_0x1c11('0x14')][_0x1c11('0x167')]);
                                    var _0x306df0 = this['Se'](_0x357f00[_0x1c11('0x14')][_0x1c11('0x96')][_0x1c11('0x103')], _0x357f00['uv'], 0x40);
                                    _0x3bff74[_0x1c11('0xeb')](_0x357f00[_0x1c11('0x14')][_0x1c11('0x96')][_0x1c11('0x3dc')]);
                                    _0x3bff74[_0x1c11('0x242')](_0x306df0);
                                    this['Oe'][_0x1c11('0x32')]({
                                        'position': _0x4bed80,
                                        'normal': _0x5df93c,
                                        'intensity': new THREE[(_0x1c11('0x44'))](_0x3bff74['r'], _0x3bff74['g'], _0x3bff74['b'])
                                    });
                                    this['Ne'] && this['He'](_0x4bed80, _0x3bff74);
                                    _0x4548b8++;
                                }
                            }
                        }
                        if (this['A']++, this['Ee'] += _0x4548b8, this['Ne'] && _0x4548b8 > 0x0) {
                            var _0x3978ec = performance[_0x1c11('0x3d8')]();
                            console[_0x1c11('0x4')](_0x1c11('0x3dd') + _0x4548b8 + _0x1c11('0x3de') + (_0x3978ec - _0x3d20b5) + _0x1c11('0x3df') + this['Ee']);
                        }
                    }
                },
                {
                    'key': 'He',
                    'value': function He(_0x3238be, _0x17c1c9) {
                        var _0x35a108 = new THREE[(_0x1c11('0x114'))]();
                        _0x35a108[_0x1c11('0x3dc')][_0x1c11('0xeb')](_0x17c1c9);
                        var _0x2d08e3 = new THREE[(_0x1c11('0x81'))](this['Pe'], _0x35a108);
                        _0x2d08e3[_0x1c11('0x144')][_0x1c11('0xeb')](_0x3238be);
                        this['Me'][_0x1c11('0x84')](_0x2d08e3);
                    }
                },
                {
                    'key': 'G',
                    'value': function G() {
                        this['A'] = 0x0;
                        this['Ee'] = 0x0;
                        this['Oe'] = [];
                    }
                },
                {
                    'key': 'Se',
                    'value': function Se(_0x1fb07b, _0x2f4985, _0x38e71a) {
                        if (!_0x1fb07b || !_0x1fb07b[_0x1c11('0x117')])
                            return new THREE[(_0x1c11('0x183'))](0xffffff);
                        var _0x349fa2 = this['ge'][_0x1fb07b[_0x1c11('0xe8')]];
                        if (_0x349fa2 || (_0x38e71a = _0x38e71a || 0x20, _0x349fa2 = ELPIXEL[_0x1c11('0xae')](_0x1fb07b[_0x1c11('0x117')], _0x38e71a), this['ge'][_0x1fb07b[_0x1c11('0xe8')]] = _0x349fa2)) {
                        }
                        var _0xeab149 = _0x2f4985['x'], _0x2c32bd = _0x2f4985['y'];
                        if (void 0x0 !== _0x1fb07b[_0x1c11('0x3e0')] && (_0xeab149 *= _0x1fb07b[_0x1c11('0x3e0')]['x'], _0x2c32bd *= _0x1fb07b[_0x1c11('0x3e0')]['y']), _0xeab149 *= _0x349fa2[_0x1c11('0x23')], _0x2c32bd *= _0x349fa2[_0x1c11('0x24')], _0x1fb07b[_0x1c11('0x3e1')] === THREE[_0x1c11('0x3e2')] && (_0xeab149 %= _0x349fa2[_0x1c11('0x23')]), _0x1fb07b[_0x1c11('0x3e1')] === THREE[_0x1c11('0x3e3')] && (_0xeab149 = Math[_0x1c11('0xa3')](_0xeab149, _0x349fa2[_0x1c11('0x23')] - 0x1)), _0x1fb07b[_0x1c11('0x3e4')] === THREE[_0x1c11('0x3e2')] && (_0x2c32bd %= _0x349fa2[_0x1c11('0x24')]), _0x1fb07b[_0x1c11('0x3e4')] === THREE[_0x1c11('0x3e3')] && (_0x2c32bd = Math[_0x1c11('0xa3')](_0x2c32bd, _0x349fa2[_0x1c11('0x24')] - 0x1))) {
                        }
                        var _0x1282f8 = Math[_0x1c11('0x20')](_0xeab149), _0xdcca13 = Math[_0x1c11('0x20')](_0x2c32bd), _0x504ec6 = ELPIXEL[_0x1c11('0xb1')](_0x349fa2, _0x1282f8, _0xdcca13);
                        return _0x504ec6['r'] = Math[_0x1c11('0xa7')](_0x504ec6['r'] / 0xff, 0x1), _0x504ec6['g'] = Math[_0x1c11('0xa7')](_0x504ec6['g'] / 0xff, 0x1), _0x504ec6['b'] = Math[_0x1c11('0xa7')](_0x504ec6['b'] / 0xff, 0x1), new THREE[(_0x1c11('0x183'))](_0x504ec6['r'], _0x504ec6['g'], _0x504ec6['b']);
                    }
                },
                {
                    'key': 'Ce',
                    'value': function Ce(_0xc62e1d, _0x7ef27d, _0x271497, _0x19088f) {
                        if (_0x19088f < this['Re'][_0x1c11('0xb')]) {
                            var _0x3e058f = this['Re'][_0x19088f];
                            if (_0x7ef27d['x'] = (0x2 * _0x3e058f['x'] - 0x1) * _0xc62e1d[_0x1c11('0x23')] * 0.5, _0x7ef27d['z'] = 0x0, _0x7ef27d['y'] = (0x2 * _0x3e058f['y'] - 0x1) * _0xc62e1d[_0x1c11('0x24')] * 0.5, _0x7ef27d[_0x1c11('0x168')](_0xc62e1d[_0x1c11('0x167')])) {
                            }
                            var _0x4d5e95 = this['Te'][_0x19088f], _0x49d2cf = ELPIXEL[_0x1c11('0xb4')](_0x4d5e95);
                            return _0x271497[_0x1c11('0xeb')](_0x49d2cf), _0x271497[_0x1c11('0x169')](_0xc62e1d[_0x1c11('0x167')]), !0x0;
                        }
                        return !0x1;
                    }
                }
            ]);
            return _0x1f85d0;
        }();
    },
    function (_0x43492b, _0x5d5470, _0x2dbe2d) {
        _0x2dbe2d(0x1c);
        _0x43492b[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0xe0')] = function () {
            function _0x156d05() {
                _classCallCheck(this, _0x156d05);
                this['ye'] = 0xa;
                this['_e'] = 0x0;
                this['A'] = 0x0;
                this['ze'] = !0x1;
                this[_0x1c11('0x90')] = !0x0;
                this[_0x1c11('0xf0')] = !0x0;
            }
            _createClass(_0x156d05, [
                {
                    'key': _0x1c11('0xe5'),
                    'value': function convergenceMetric() {
                        var _0x43492b = this['Ie'][_0x1c11('0x3d6')]();
                        return this[_0x1c11('0xf0')] ? this['A'] * this['ye'] / _0x43492b : 0x1;
                    }
                },
                {
                    'key': _0x1c11('0x97'),
                    'value': function render(_0x3cbb98, _0x34bbbf, _0xde1166, _0x45fcb9, _0x568a99) {
                        if (this[_0x1c11('0x90')] && (this['G'](), this['A'] = 0x0, this[_0x1c11('0x90')] = !0x1), this['Ie'] = _0x45fcb9) {
                        }
                        ;
                        var _0x484ec8 = _0x45fcb9[_0x1c11('0x3d6')](), _0x294af9 = _0x45fcb9[_0x1c11('0x3d5')]();
                        if (0x0 === _0x294af9[_0x1c11('0xb')])
                            return;
                        if (this[_0x1c11('0xe5')]() >= 0x1)
                            return;
                        if (!this[_0x1c11('0x3e5')]) {
                            this[_0x1c11('0x3e5')] = new THREE[(_0x1c11('0x9b'))]();
                            this[_0x1c11('0x3e5')][_0x1c11('0x9c')](_0x34bbbf);
                            var _0x387069 = new THREE[(_0x1c11('0x44'))]();
                            this[_0x1c11('0x3e5')][_0x1c11('0x9e')](_0x387069);
                            this[_0x1c11('0x3e6')] = Math[_0x1c11('0x11b')](Math[_0x1c11('0x11b')](_0x387069['x'], _0x387069['y']), _0x387069['z']) / 0x9;
                        }
                        if (this['Ae'] || this['Y'](_0x3cbb98), this['A']++, _0x34bbbf[_0x1c11('0x194')] = this['Ve']) {
                        }
                        ;
                        var _0x5ae7fe = this['A'] % 0x2 == 0x0 ? this['Ae'] : this['Fe'], _0x2d840a = this['A'] % 0x2 == 0x0 ? this['Fe'] : this['Ae'];
                        if (this['Ve'][_0x1c11('0x7a')][_0x1c11('0x3e7')][_0x1c11('0xe')] = _0x5ae7fe[_0x1c11('0xff')], this['Ve'][_0x1c11('0x7a')][_0x1c11('0x3e8')][_0x1c11('0xe')] = this['A'], this['Ue'](_0x294af9, _0x484ec8, _0x568a99), _0x3cbb98[_0x1c11('0x97')](_0x34bbbf, _0xde1166, _0x2d840a, !0x0), _0x34bbbf[_0x1c11('0x194')] = null, _0x3cbb98[_0x1c11('0x3e9')] = _0x2d840a[_0x1c11('0xff')]) {
                        }
                    }
                },
                {
                    'key': 'Y',
                    'value': function Y(_0x228657) {
                        var _0x5d5470 = _0x228657[_0x1c11('0xfd')](), _0x2dbe2d = _0x5d5470[_0x1c11('0x23')], _0x508c75 = _0x5d5470[_0x1c11('0x24')];
                        var _0x172bfe = THREE[_0x1c11('0x3ea')];
                        if (!this['ze']) {
                            var _0x5d4f4e = _0x228657[_0x1c11('0x184')], _0x29fa95 = _0x5d4f4e[_0x1c11('0x185')](_0x1c11('0x3eb'));
                            if (_0x172bfe = _0x29fa95 ? THREE[_0x1c11('0x3ec')] : _0x172bfe, _0x29fa95 || (_0x172bfe = _0x5d4f4e[_0x1c11('0x185')](_0x1c11('0x3ed')) ? THREE[_0x1c11('0x88')] : _0x172bfe)) {
                            }
                        }
                        var _0x29be3e = {
                            'type': _0x172bfe,
                            'format': THREE[_0x1c11('0x3ee')],
                            'magFilter': THREE[_0x1c11('0x118')],
                            'minFilter': THREE[_0x1c11('0x118')]
                        };
                        if (this['Ae'] = new THREE[(_0x1c11('0xcb'))](_0x2dbe2d, _0x508c75, _0x29be3e), this['Ae'][_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1, this['Fe'] = new THREE[(_0x1c11('0xcb'))](_0x2dbe2d, _0x508c75, _0x29be3e), this['Fe'][_0x1c11('0xff')][_0x1c11('0x8f')] = !0x1, this['Ve'] = new THREE[(_0x1c11('0x7b'))](ELPIXEL[_0x1c11('0x3ef')]), this['Ve'][_0x1c11('0x1a6')][_0x1c11('0x3f0')] = this['ye'], this['Ve'][_0x1c11('0x7a')][_0x1c11('0x3f1')][_0x1c11('0xe')] = new THREE[(_0x1c11('0x29'))](_0x2dbe2d, _0x508c75), this['Ve'][_0x1c11('0x7a')][_0x1c11('0x3e8')][_0x1c11('0xe')] = this['A'], this['Ve'][_0x1c11('0x7a')][_0x1c11('0x3e6')][_0x1c11('0xe')] = this[_0x1c11('0x3e6')], (_0x172bfe === THREE[_0x1c11('0x3ea')] || this['ze']) && (this['Ve'][_0x1c11('0x3f2')] = !0x0)) {
                        }
                    }
                },
                {
                    'key': 'G',
                    'value': function G() {
                        this['A'] = 0x0;
                        this['_e'] = 0x0;
                    }
                },
                {
                    'key': 'Ue',
                    'value': function Ue(_0x315771, _0x59b912, _0x323031) {
                        var _0x5726cb = _0x315771[_0x1c11('0xb')] - this['_e'];
                        _0x5726cb = Math[_0x1c11('0xa3')](_0x5726cb, this['ye']);
                        var _0x433b4c = new THREE[(_0x1c11('0x44'))](0x0, 0x0, 0x0), _0x59a9bf = [];
                        for (var _0x3ed55d = 0x0; _0x3ed55d < _0x5726cb; _0x3ed55d++) {
                            var _0x365961 = _0x315771[_0x3ed55d + this['_e']];
                            if (_0x3ed55d >= _0x315771[_0x1c11('0xb')])
                                _0x59a9bf[_0x1c11('0x32')]({
                                    'position': _0x433b4c,
                                    'direction': _0x433b4c,
                                    'intensity': _0x433b4c
                                });
                            else {
                                var _0x1ddaab = new THREE[(_0x1c11('0x44'))]();
                                _0x1ddaab[_0x1c11('0xeb')](_0x365961[_0x1c11('0x19d')]);
                                _0x1ddaab[_0x1c11('0x170')](_0x323031[_0x1c11('0x19d')] / _0x59b912);
                                _0x59a9bf[_0x1c11('0x32')]({
                                    'position': _0x365961[_0x1c11('0x144')],
                                    'direction': _0x365961[_0x1c11('0x3db')],
                                    'intensity': _0x1ddaab
                                });
                            }
                        }
                        for (var _0x122f56 = 0x0; _0x122f56 < this['ye'] - _0x5726cb; _0x122f56++) {
                            _0x59a9bf[_0x1c11('0x32')]({
                                'position': _0x433b4c,
                                'direction': _0x433b4c,
                                'intensity': _0x433b4c
                            });
                        }
                        this['_e'] += _0x5726cb;
                        this['Ve'][_0x1c11('0x7a')][_0x1c11('0x3f3')][_0x1c11('0xe')] = _0x59a9bf;
                    }
                }
            ]);
            return _0x156d05;
        }();
    },
    function (_0x24a2e6, _0xdf9045) {
        _0x24a2e6[_0x1c11('0x1b')] = ELPIXEL[_0x1c11('0x3ef')] = {
            'vertexShader': [
                _0x1c11('0x3f4'),
                _0x1c11('0x3f5'),
                _0x1c11('0x38'),
                _0x1c11('0x3f6'),
                _0x1c11('0x3f7'),
                _0x1c11('0x3f8'),
                '}'
            ][_0x1c11('0x3b')]('\x0a'),
            'fragmentShader': [
                _0x1c11('0x1be'),
                _0x1c11('0x3f9'),
                _0x1c11('0x3f4'),
                _0x1c11('0x3f5'),
                _0x1c11('0x3fa'),
                _0x1c11('0x3fb'),
                _0x1c11('0x3fc'),
                _0x1c11('0x3fd'),
                _0x1c11('0x3fe'),
                _0x1c11('0x3ff'),
                _0x1c11('0x400'),
                _0x1c11('0x401'),
                '};',
                _0x1c11('0x402'),
                _0x1c11('0x403'),
                _0x1c11('0x404'),
                _0x1c11('0x405'),
                _0x1c11('0x406'),
                _0x1c11('0x407'),
                _0x1c11('0x408'),
                _0x1c11('0x409'),
                _0x1c11('0x40a'),
                '}',
                _0x1c11('0x38'),
                _0x1c11('0x40b'),
                _0x1c11('0x40c'),
                _0x1c11('0x40d'),
                _0x1c11('0x40e'),
                _0x1c11('0x40f'),
                _0x1c11('0x410'),
                _0x1c11('0x411'),
                _0x1c11('0x412'),
                '}',
                _0x1c11('0x413'),
                _0x1c11('0x414'),
                _0x1c11('0x415'),
                '}',
                _0x1c11('0x416'),
                _0x1c11('0x417'),
                _0x1c11('0x418'),
                '}'
            ][_0x1c11('0x3b')]('\x0a'),
            'uniforms': {
                'vplLights': { 'value': null },
                'viewPort': { 'value': null },
                'accumulationBuffer': { 'value': null },
                'currentFrameCount': { 'value': 0x0 },
                'minDistance': { 'value': 0x0 }
            },
            'defines': { 'VPL_COUNT': 0x0 }
        };
    }
];
_Module(_args);