exports.getDate = function(){    // An Anonymous function

// var getDate = function(){

let today = new Date(); //Javascript Date objects, new Date() will give the current date.

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return day = today.toLocaleString("en-US", options);
  
}

exports.getDay = function(){

// var getDay = function (){

    let today = new Date(); //Javascript Date objects, new Date() will give the current date.
    
      let options = {
        weekday: "long" 
      };
    
      return day = today.toLocaleString("en-US", options);
      
    }
    