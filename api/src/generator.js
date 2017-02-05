'use strict';

var mymax = function(a, indexes) {
    var m = -Infinity, i = 0, n = a.length;
    for (; i != n; ++i) {
        if (a[i] > m) {
            indexes = [];
            m = a[i];
            indexes.push(i);
        }
        else if (a[i] === m) {
          indexes.push(i);
        }
    }
    console.log(indexes);
    return m;
}

var generator = function(firstName, lastName) {
  // TODO : Decompose each name in letters
  let letter = firstName.split('');
  letter = letter.concat(lastName.split(''));
  // Read all Names existing in the database
  let names = ["titi", "toto", "tutu"];
  let scores = [0,0,0];
  // Score each name regarding inputs
  names.forEach(function(element, index) {
    let score = 0;
    letter.forEach(function(el) {
      var re = new RegExp(el, 'gi');
      let result =  element.match(re);
      console.log(result);
      if (result !== null) {
          score += result.length;
      }
    })
    scores[index] = score;
    console.log(score);
    console.log(element);
  });
  console.log(scores);
  let indexes;
  let bestResult = mymax(scores, indexes);
  console.log(indexes);

}

generator("ttuut", "oooo");
