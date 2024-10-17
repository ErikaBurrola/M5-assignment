let coinFlip;
let num = parseInt(prompt("How choice Rock(1), Scissor(2), Paper(3)?"));
coinFlip = parseInt(Math.round(Math.random()*3)+1);

    if(coinFlip===1 && num ===1){
        document.write('</h>'+"Try again. Same result"+'</h>');
    } else if(coinFlip===1 && num ===2){
        document.write('</h>'+"You lost. Because the computer was Rock"+'</h>');
    } else if(coinFlip===1 && num ===3){
        document.write('</h>'+"You win. Because the computer was Rock"+'</h>');
    }

    if(coinFlip===2 && num ===2){
        document.write('</h>'+"Try again. Same result"+'</h>');
    } else if(coinFlip===2 && num ===1){
        document.write('</h>'+"You win. Because the computer was Scissor"+'</h>');
    } else if(coinFlip===2 && num ===3){
        document.write('</h>'+"You lost. Because the computer was Scissor"+'</h>');
    }
    
    if(coinFlip===3 && num ===3){
        document.write('</h>'+"Try again. Same result"+'</h>');
    } else if(coinFlip===3 && num ===2){
        document.write('</h>'+"You win. Because the computer was Paper"+'</h>');
    } else if(coinFlip===3 && num ===1 ){
        document.write('</h>'+"You lost. Because the computer was Paper"+'</h>');
    }