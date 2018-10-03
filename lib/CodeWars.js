
module.exports = class CodeWars {



  properFractions(n) {
    // combination of ideas... slower than propertFractionsA too

    const factorer = number => Array
      .from(Array(number + 1), (_, i) => i)
      .filter(i => number % i === 0);
    const sieve = new Set();
    const factors = new Set([...factorer(n)]);

    for(let i = 2; i < n; i++) {
      if((sieve.has(i)) || (!factors.has(i))) {
        continue;
      }
      for(let j = 1; j < Math.floor(n / i); j++) {
        sieve.add(i * j);
      }
    }
    return n - sieve.size - 1;
  }


  properFractionsA(d) {
    // works but is still too slow

    function GCD(n, d){
      let GCD = 1;
      let larger = n > d ? n : d;
      for(var i = 2; i <= larger; i++){
        if(d % i === 0 && n % i === 0) GCD = i;
      }
      return GCD;
    }

    let count = 0;
    for(var i = 1; i < d; i++){
      if(GCD(i, d) === 1) count++;
    }
    return count;
  }

  properFractionsB(x) {
    // also works but runs 500% slower per http://jsben.ch/
    // doesn't work for super large numbers?

    const factors = number => Array
      .from(Array(number + 1), (_, i) => i)
      .filter(i => number % i === 0);

    const primeFactors = factorsArr => factorsArr
      .filter(factor => factors(factor).length === 2);

    const multiples = (numArray, limit) => numArray
      .reduce((acc, curr) => {
        acc += Math.floor(limit / curr) - 1;
        return acc;
      }, 0);

    const primeMultiples = (num) => multiples(primeFactors(factors(num)), num);
    
    return x - primeMultiples(x) - 1;
  }

  rot13(message) {

    return message.split('')
      .reduce((acc, curr) => {
        if(curr.match(/[A-M]/g)) return acc + String.fromCharCode(curr.charCodeAt(0) + 13).toUpperCase();
        else if(curr.match(/[a-m]/g)) return acc + String.fromCharCode(curr.charCodeAt(0) + 13);
        else if(curr.match(/[N-Z]/g)) return acc + String.fromCharCode(curr.charCodeAt(0) - 13).toUpperCase();
        else if(curr.match(/[n-z]/g)) return acc + String.fromCharCode(curr.charCodeAt(0) - 13);
        else return acc + curr;
      }, '');
  }

  array_diff(a, b) {
    
    const dict = b.reduce((acc, item) => {
      acc[item] = true;
      return acc;
    }, {});
    
    return  a.filter((item) => {
      if(!dict[item]) return item;
    });

  }

  capitalize(s) {
    // this is the alt-cap challenge
    let splitS = s.split('');
    let ans = [];

    for(let i = 0; i < 2; i++) {
      let temp = [];
      splitS.forEach((element, index) => {
        if(index % 2 == i) { temp.push(element.toUpperCase()); }
        else { temp.push(element); }
      });
      ans.push(temp.join(''));
    }

    return ans;
  }

  gimme(inputArray) {
    //this is the find-middle-element challenge
    const orig = [...inputArray];
    const val = inputArray.sort((a, b) => { return a - b });
    return orig
      .indexOf(val[1]);
  }

  isNice(arr) {
    //this is the nice-array challenge
    return arr
      .every(el => arr
        .some(comp => comp === el + 1 || comp === el - 1));
  }

};




