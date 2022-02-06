/*module.exports = */ 

function sortWords (arr) {
  let outputObj = 
      {
    even: [],
    odd: []
      };
  for (let i=0; i< arr.length; i++) {
    arr[i].length % 2 == 0 ? outputObj.even.push(arr[i]) : outputObj.odd.push(arr[i]);
   }
   return outputObj;
 }
 sortWords(["work", "hard", "mommy"]);// {
 // odd:  [ 'mommy' ],
 // even: [ 'work', 'hard' ]
 // }
 
 sortWords(["oh!", "ah!", "hi", "my"]) // {
 // odd:  [ 'oh!', 'ah!' ],
 // even: [ 'hi', 'my' ] 
 // })