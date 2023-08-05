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

export { deepSeal };
