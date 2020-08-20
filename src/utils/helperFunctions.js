// count objects in array by property
export const countObjectsWithEqualProperty = arrayOfObjects => {
  return arrayOfObjects.reduce((acc, elem) => {
    acc[elem.name] ? acc[elem.name]++ : (acc[elem.name] = 1);
    return acc;
  }, {});
};

// returns tru if object is empty
export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0;
}

export const countObjectOccurences = (array, type) => {
  const obj = {}
  array.map(elem => (obj[elem[type]] === undefined) ? obj[elem[type]] = 1 : obj[elem[type]]++ );
  return obj;
}
