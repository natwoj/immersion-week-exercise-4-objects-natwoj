module.exports = function sortWords (arr) {
  let outputObj = 
      {
    even: "",
    odd: ""
      };
  let tempArrEven = [];
  let tempArrOdds = [];
   
  for (let i=0; i< arr.length; i++) {
    // 1. arr with even
  if ((arr[i].length % 2) == 0) {
  tempArrEven.push(arr[i])
   // 3. assign to key even
  outputObj.even = tempArrEven;
               }
    // 2. arr with odds
       else if {
  tempArrOdds.push(arr[i])
    // 3. assign to key odd
  outputObj.odd = tempArrOdds;  
   }
    else if (arr.length === 0) {
      // output 
    }
 }
   return outputObj;
 }
 