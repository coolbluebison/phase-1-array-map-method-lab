const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  let tutorialsReturn = []
  for (const sentence of tutorials) {

    const word_list = sentence.split(" ")
    const new_word_list = word_list.map( (word) => {return word[0].toUpperCase() + word.slice(1)} )

    let newSentence = ""

    for (const word of new_word_list) {
      
      newSentence = newSentence + word + " "

    }

    tutorialsReturn.push( newSentence.trim() )
  }
  return tutorialsReturn
}

console.log(titleCased(tutorials))


// const titleCased = (sentencesList) => {
//   return sentencesList.map((sentence) => {
//     const words = sentence.split(" ");
//     const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
//     return capitalizedWords.join(" ");
//   });
// }





function xxx(sentencesList) {
  
  for (const sentence of sentencesList) {

    const word_list = sentence.split(" ")
    word_list.map( (word) => {return word[0].toUpperCase()} )

    const newSentence = ""

    for (word of word_list) {
      
      newSentence = newSentence + word + " "

    }

    newSentence.pop()

    return newSentence
  }


} 




