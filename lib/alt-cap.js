function capitalize(s){
  let splitS = s.split("");
  let ans = [];

  for(let i = 0; i < 2; i++) {
    let temp = [];
    splitS.forEach((element, index) => {
      if (index % 2 == i) {temp.push(element.toUpperCase())}
      else { temp.push(element) }
    });
    ans.push(temp.join(''));
  }

  return ans;
};
