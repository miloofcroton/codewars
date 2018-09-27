var gimme = function (inputArray) {
  const orig = [...inputArray];
  console.log(orig);

  const val = inputArray.sort((a, b) => { return a - b });
  console.log(val[1]);
  console.log(orig);

  return orig
    .indexOf(val[1]);
};

console.log(gimme([3,1,2]));