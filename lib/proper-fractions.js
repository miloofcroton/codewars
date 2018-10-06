
module.exports = class ProperFractions {


  properFractions(n) {
    if(n === 1) return 0;
    let a = n, i = 2, primeFactors = [];

    while(a > 1) {
      if(a % i === 0) {
        a = a / i;
        if(primeFactors.indexOf(i) === -1) primeFactors.push(i);
      } else i++;
    }

    return Math.round(primeFactors
      .map(a => (1 - 1 / a))
      .reduce((a, v) => { return a * v; }, 1) * n);
  }

  properFractions1(n) {

    function isPrime(num) {
      if(num === 1) return false;
      for(var i = 2; i * i <= num; i++) {
        if(num % i === 0) return false;
      }
      return true;
    }

    if(n === 1) return 0;
    let product = n;
    for(var i = 2; i <= n; i++) {
      if(isPrime(i) && n % i === 0) {
        product = Math.round(product * (1 - 1 / i));
      }
    }
    return product;
  }

  properFractions2(n) {

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

  properFractions3(d) {

    function GCD(n, d) {
      let GCD = 1;
      let larger = n > d ? n : d;
      for(var i = 2; i <= larger; i++) {
        if(d % i === 0 && n % i === 0) GCD = i;
      }
      return GCD;
    }

    let count = 0;
    for(var i = 1; i < d; i++) {
      if(GCD(i, d) === 1) count++;
    }
    return count;
  }

  properFractions4(d) {

    function GCD(a, b) {
      if(b == 0) return a;
      else return GCD(b, a % b);
    }

    let count = 0;
    for(var i = 1; i < d; i++) {
      if(GCD(i, d) === 1) count++;
    }
    return count;
  }

  properFractions5(x) {

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


};

