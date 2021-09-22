////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
   if(num1 < num2){
    return num1;
  }else{
    return num2;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  //base case if num is even
  if(num === 0){
    return true;
    //base case if num is uneven false
  }else if(num === 1){
    return false;
    //if num is negative
  }else if(num < 0){
    //return funct called with neg number
    return isEven(-num);
  }
  //recursive case
  return isEven(num - 2);
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  //set count variable to add 1 to 
var count = 0;
//loop string
for(let i = 0; i < string.length; i++){
  //each time the string at index matches the character that is being checked
  if(string[i] === char){
    //add 1 to count
    count++;
  }
}
//return count to parent function
return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  //set count variable to add to 
var count = 0;
//loop the string
for(let i = 0; i < string.length; i++){
  //if string at index is a B
  if(string[i] === "B"){
    //add one to count
    count++
  }
}
//return count to parent function
return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
