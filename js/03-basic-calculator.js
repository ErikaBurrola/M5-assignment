// ADD A FUNCTION CALLED CALCULATE
function calculation(x,y, operation){
    let result = 0;

      switch(operation){
        case '+':
           result = x + y;
           break;
        case '-':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
           result = x / y;
           break;
        }
            
   return result
}
let x = 0;
let y = 0;
let operation = ' ';

do{
    // COLLECT FIRST NUMBER FROM USER
    x = parseInt(prompt("First number"));

    // COLLECT SECOND NUMBER FROM USER
    y = parseInt(prompt("Second number"));

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt("Introduce type of operation add\'+'  subtract\'-'  multiply\'*'  divide\'/' ");

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    let result  = calculation(x,y,operation)
    if (!isNaN(result) && result!= 0){
        alert(Math.round(result))
        break;
    } 
    
} while (!isNaN(x) || !isNaN(y)  || !isNaN(operation) || operation!== ' ')









