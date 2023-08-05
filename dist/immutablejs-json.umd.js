(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["immutablejs-json"] = {}));
})(this, (function (exports) { 'use strict';

  const deepSeal = obj => {
    for (let key in obj) {
      const value = obj[key];
      if (typeof value == "object") {
        deepSeal(value);
      }
    }
    return Object.seal(obj);
  };

  // export const capitalize = (word) =>
  //   word.charAt(0).toUpperCase() + word.slice(1);

  exports.deepSeal = deepSeal;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
