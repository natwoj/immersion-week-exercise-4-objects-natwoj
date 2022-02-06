module.exports = function rmCensored() {
  function rmCensored (obj) {
    for (let [key, value] of Object.entries(obj)) {
      if (key.includes("*") || value.includes("*")) {
        delete obj[key], delete obj[value];
        console.log(obj)
      }
    }
    }
    
    const veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
    rmCensored(veggies)
    console.log(veggies) // { potato: 'starch', collard: 'green' } 
  
};
