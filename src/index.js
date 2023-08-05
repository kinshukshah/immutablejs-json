export const deepSeal = (obj) => {
  for (let key in obj) {
    const value = obj[key];
    if (typeof value == "object") {
      deepSeal(value);
    }
  }
  return Object.seal(obj);
};