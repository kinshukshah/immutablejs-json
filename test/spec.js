import { deepSeal } from "../src/index.js";
import assert from "assert";

let obj = {
  a: 10,
  b: {
    c: 10,
  },
};
deepSeal(obj);
assert.ifError(null);

console.log(`\u001B[32m✓\u001B[39m Tests passed`);
