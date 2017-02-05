'use strict';

var loadNames = require("./loadNames");

var getIndexes = function(a) {
    let indexes = [];
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
    return indexes;
}

var generator = function(firstName, lastName, category, gender) {
  // TODO : Decompose each name in letters
  let letter = firstName.split('');
  letter = letter.concat(lastName.split(''));
  // Read all Names existing in the database
  let names = loadNames.loadNames(category, gender);
  let scores = [0,0,0];
  // Score each name regarding inputs
  names.forEach(function(element, index) {
    let score = 0;
    letter.forEach(function(el) {
      var re = new RegExp(el, 'gi');
      let result =  element.match(re);
      if (result !== null) {
          score += result.length;
      }
    })
    scores[index] = score;
  });
  let bestResults = getIndexes(scores);
  let resultIndex = bestResults[0];
  if (bestResults.length !== 1) {
    resultIndex = bestResults[Math.floor(Math.random() * bestResults.length)];
  }
  console.log(names[resultIndex]);
}

generator("ttuut", "oooo");
