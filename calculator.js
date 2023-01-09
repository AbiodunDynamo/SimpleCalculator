const screenDisplay = document.querySelector('.screendisplay');
function populate(){
    const display = document.querySelectorAll('.btn-num');
    display.forEach((btn) => {
        btn.addEventListener('click', function(e){
            let content = e.target.value;
            content.textContent = `${content}`;
            console.log(content)
            //display.appendChild(content)
            //screenDisplay.appendChild(display);
        })
    }
    )
    
} 
populate()

function add(x, y){
    //return x + y;
    console.log(x + y);
}

function subtract(x, y){
    //return x - y;
    console.log(x - y);
}

function multiply(x, y){
    //return x * y;
    console.log(x * y);
}

function divide(x, y){
    return x / y;
    console.log(x / y);
}

function operate(operator, num1, num2){
    //let operator = ["+", "-", "*", "/"];
    if (operator === "+"){
       // return add(num1, num2);
        console.log(add(num1, num2))
    };
    if (operator === "-"){
        //return subtract(num1, num2);
        console.log(subtract(num1, num2))
    };
    if (operator === "*"){
        //return multiply(num1, num2);
        console.log(multiply(num1, num2));
    };
    if (operator === "/"){
        //return divide(num1, num2);
        console.log(divide(num1, num2));
    }
}
