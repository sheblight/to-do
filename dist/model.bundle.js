(()=>{"use strict";var a={85:(a,t,e)=>{e.d(t,{Z:()=>o});const o={save:a=>{"object"==typeof a?(window.localStorage.setItem("data",JSON.stringify(a)),console.log("Saved data.")):console.warn("Cannot save data because target data isn't an Object")},clear:()=>{window.localStorage.clear(),console.log("Cleared local data.")},hasExistingData:function(){return window.localStorage.data||!1},getDataCopy:function(){return JSON.parse(window.localStorage.data)||null}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return a[o](n,n.exports,e),n.exports}e.d=(a,t)=>{for(var o in t)e.o(t,o)&&!e.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:t[o]})},e.o=(a,t)=>Object.prototype.hasOwnProperty.call(a,t),e(85)})();