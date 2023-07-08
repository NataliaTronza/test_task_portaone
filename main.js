const text = document.querySelector('#text');
const result = document.querySelector('#result');
let words = [];
text.addEventListener('blur', getResult);

function getResult() {
  const value = this.value;
  // const result = getValue(value);
  // console.log(result)
  result.innerText = getLetter(value)
}


function getLetter(value) {
    words = value.split(' ');
    const letters = findLetter();
    for (let letter of letters) {
      if (isUnique(letter, letters)) {
        return letter;
      }
    }
}


function findLetter() {
  const letters = []
  for (let word of words) {
    for (let letter of word) {
      if (isUnique(letter, word)) {
        letters.push(letter);
        break;
      }
    }
  }
  return letters;
}

function isUnique(letter, array) {
  counter = 0;
  for (let elem of array) {
    if (elem === letter) {
      counter++
    }
    if (counter > 1) {
      return false;
    }
  }
  return counter === 1;
}