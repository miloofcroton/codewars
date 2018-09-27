function isNice(arr) {

  return arr
    .every(el => arr
      .some(comp => comp === el + 1 || comp === el - 1 ));

}