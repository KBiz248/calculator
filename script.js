let total = 0;
let total1 = 0;
let total2 = 0;
let result = 0;
let operator;
function changeDisplay(){
    document.getElementById('display').textContent = total;
}




function one(){
    total = total*10+1;
    console.log(total);
    changeDisplay();
}

function two(){
    total=total*10+2;
    console.log(total);
    changeDisplay();
}

function three(){
    total=total*10+3;
    console.log(total);
    changeDisplay();
}

function four(){
    total=total*10+4;
    console.log(total);
    changeDisplay();
}

function five(){
    total=total*10+5;
    console.log(total);
    changeDisplay();
}

function six(){
    total=total*10+6;
    console.log(total);
    changeDisplay();
}

function seven(){
    total=total*10+7;
    console.log(total);
    changeDisplay();
}

function eight(){
    total=total*10+8;
    console.log(total);
    changeDisplay();
}

function nine(){
    total=total*10+9;
    console.log(total);
    changeDisplay();
}

function zero(){
    total=total*10;
    console.log(total);
    changeDisplay();
}

function clearTotal(){
    total=0;
    total1=0;
    total2=0;
    result=0;
    changeDisplay();
    console.log(total);
}

function add(){
    if(total1 && operator){operate(); total1 = result;};

    if(total1){
        total2 = total
    }else{
        total1=total
    };
  
  operator = 'add';   

  total=0;    
}

function subtract(){
    if(total1 && operator){operate(); total1 = result;};

    if(total1){
        total2 = total
      }else{
        total1=total
      };

      operator = 'subtract';

      total = 0;
}

function multiply(){
    if(total1 && operator){operate(); total1 = result;};

    if(total1){
        total2 = total
      }else{
        total1=total
      };

      operator = 'multiply';

      total = 0;
}

function divide(){
    if(total1 && operator){operate(); total1 = result;};

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

    total = result;

    changeDisplay();

    total1 = total;
    total2 = 0;
    total = 0;
    operator = null;

    console.log(result);

    //clearTotal();
}