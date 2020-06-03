// count objects in array by property
export const countObjectsWithEqualProperty = arrayOfObjects => {
  return arrayOfObjects.reduce((acc, elem) => {
    acc[elem.name] ? acc[elem.name]++ : (acc[elem.name] = 1);
    return acc;
  }, {});
};
