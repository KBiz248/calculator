let total = 0;
let total1 = 0;
let total2 = 0;
let result = 0;
let operator;




function one(){
    total = total*10+1;
    console.log(total);
}

function two(){
    total=total*10+2;
    console.log(total);
}

function three(){
    total=total*10+3;
    console.log(total);
}

function four(){
    total=total*10+4;
    console.log(total);
}

function five(){
    total=total*10+5;
    console.log(total);
}

function six(){
    total=total*10+6;
    console.log(total);
}

function seven(){
    total=total*10+7;
    console.log(total);
}

function eight(){
    total=total*10+8;
    console.log(total);
}

function nine(){
    total=total*10+9;
    console.log(total);
}

function zero(){
    total=total*10;
    console.log(total);
}

function clearTotal(){
    total=0;
    total1=0;
    total2=0;
    console.log(total);
}

function add(){
if(total1){
    total2 = total
  }else{
    total1=total
  };

  
  operator = 'add';
   

  total=0;
    
}

function subtract(){
    if(total1){
        total2 = total
      }else{
        total1=total
      };

      operator = 'subtract';

      total = 0;
}

function multiply(){
    if(total1){
        total2 = total
      }else{
        total1=total
      };

      operator = 'multiply';

      total = 0;
}

function divide(){
    if(total1){
        total2 = total
      }else{
        total1=total
      };

      operator = 'divide';

      total = 0;
}

function operate(){
    total2=total;
    

    switch(operator){
        case 'add':
            result = total1 + total2;
            break;
        case 'subtract':
            result = total1 - total2;
            break;
        case 'multiply':
            result = total1 * total2;
            break;
        case 'divide':
            result = total1 / total2;
            break;
        default:
            break;
    }

    console.log(result);

    clearTotal();
}