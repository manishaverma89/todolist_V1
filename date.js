module.exports.getDate = getDate;

function getDate(){

let today = new Date(); //Javascript Date objects, new Date() will give the current date.

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleString("en-US", options);
  return day;
}

module.exports.getDay = getDay;

function getDay(){

    let today = new Date(); //Javascript Date objects, new Date() will give the current date.
    
      let options = {
        weekday: "long" 
      };
    
      let day = today.toLocaleString("en-US", options);
      return day;
    }
    