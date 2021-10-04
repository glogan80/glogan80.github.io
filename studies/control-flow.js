/**
 * CONTROL FLOW - the order or method by which code is read and executed based on a series of 
 * conditional statements.
 **/
 
 // IF - Use if to specify a block of code to be executed, if a specified condition is true
  
 // ELSE-IF - Use else if to specify a new condition to test, if the first condition is false
 
 // ELSE - Use else to specify a block of code to be executed, if the same condition is false
 
 // SWITCH - Use switch to specify many alternative blocks of code to be executed
 
 // Below is a common example of Control Flow:
 
function fizzbuzz(){
  for(let i = 1; i <= 100; i++){    // by creating a for loop we're telling the conditional statements to 
                                    // run between 1 and 100 and to increment by 1
    if(i % 3 === 0 && i % 5 === 0){ // IF the # is modulus of 3 AND 5, return "FizzBuzz" to the console
      console.log("FizzBuzz");
    }else if (i % 3 === 0){ // when a # does NOT meet the above IF statement, look for # modulus to JUST 3
      console.log("Fizz");  // and return "Fizz" to the console in that case
    }else if (i % 5 === 0){ // IF the conditions of IF and the FIRST else if (you can have multiple else if)
                            // then check to print "Buzz" to # that are modulus of 5 with 0 remainder
      console.log("Buzz");
    }else{
      console.log(i);       // for everything ELSE, return i (in this case, the number)
    }
  }
}

console.log(fizzbuzz());

//3. Switch Statement
let expression = 'Townhouse';
switch (expression) {
  case 'Studio':
    console.log('Studio has 1 room');
    break;
  case 'House':
  case 'Townhouse':
    console.log('House and Townhouse have 4 bedrooms');// ==> prints: "House and Townhouse have 4 bedrooms"
    break;
  default:
    console.log("Sorry, we are out of the " +  expression + " options.");
}
 
//Only first true statement is executed
let age3 = 27;
if(age3 === 27){
    console.log("this is the first true");
}else if(age3 < 29){ // ==> even though this statment is true, the code will not run because conditonal statements stop at the first true statement
    console.log("this is true two") ;
}else{
    console.log(false);
}