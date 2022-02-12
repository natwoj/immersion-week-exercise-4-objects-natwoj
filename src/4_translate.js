module.exports = function translate() {
  
function translate(obj, str) {
  let newStr = str.split(' ');

  for (let i = 0; i < newStr.length; i++ ){
  if (obj.hasOwnProperty(newStr[i])) {    
    newStr[i] = obj[newStr[i]]; 
  } else {
    console.log("Error: missing value");
    return "Error: missing value";
  }
}

console.log(newStr.join(" "));
return newStr.join(" ");
};
translate({
    "je": "I",
    "suis": "am",
    "pere": "father",    
    "ton": "your"}, "je suis ton pere"
) // 'I am your father'

translate({
    "the": "le",
    "cute": "mignon",
    "your": "ton",
    "dog": "chien",
    "is": "est"}, "the dog is cute"
) // 'le chien est mignon'

translate({
    "the": "le",
    "cute": "mignon",
    "your": "ton",
    "dog": "chien",
    "is": "est"}, "the dog is fluffy"
) // 'Error: missing value'module.exports = translate;

};
