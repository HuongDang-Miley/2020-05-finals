const makeRunOn = function (str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.' && i !== str.length - 1) {
      result += ','
    } else {
      result += str[i]
    }
  }
  return result
}

const totalScore = function (arr, multiplier, third) {
  let sum = 0
  for (const obj of arr) {
    sum += obj.score
  }
  let total = multiplier === undefined ? sum * 1 : sum * multiplier
  return third === undefined ? total : total + third
}

const nightOwls = function (people) {
  let result = []
  for (const person of people) {
    if (person.asleep === false
      && person.localTime >= 100
      && person.localTime <= 400) {
      result.push(person)
    }
  }
  return result
}

const getToBed = function (people) {
  let result = []
  for (const person of people) {
    if (person.asleep === false
      && person.localTime >= 100
      && person.localTime <= 400) {
      let newPerson = { ...person }
      newPerson.asleep = true
      result.push(newPerson)
    } else {
      result.push(person)
    }
  }
  return result
}

const findIndices = function (arr, callback) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(i)
    }
  }
  return result
}


const Faqtory = function () {
  return {
    questions: [],
    length: 0,
    addQuestion: function(question){
      let obj = {
        text: question,
        answered: false,
        id: this.length
      }

      this.length++
      this.questions.push(obj)
    },
    answerQuestion: function(id, text){

      for (const obj of this.questions) {
        if (obj.id === id && obj.answered === false) {
          obj.answer = text
          obj.answered = true
        }
      }
     }

}
}









if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
