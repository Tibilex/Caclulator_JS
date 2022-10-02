document.addEventListener('DOMContentLoaded', function(){

    let buttonPlus = document.querySelector('#plus');
    let buttonMinus = document.querySelector('#minus');
    let buttonMult = document.querySelector('#mult');
    let buttonDev = document.querySelector('#dev');
    let inputLeft = document.querySelector('#leftValue');
    let inputRight = document.querySelector('#rightValue');
    let result = 0;

    buttonPlus.addEventListener('click', function(){
        document.getElementById('oper').innerText = '+';
        let left = inputLeft.value;
        let right = inputRight.value;
        result = (+left + +right); 
        AddElement(left, '+', right, result);
    });

    buttonMinus.addEventListener('click', function(){
        document.getElementById('oper').innerText = '-';
        let left = inputLeft.value;
        let right = inputRight.value;
        result = (-left - -right); 
        AddElement(left, '-', right, result);
    });

    buttonMult.addEventListener('click', function(){
        document.getElementById('oper').innerText = '*';
        let left = inputLeft.value;
        let right = inputRight.value;
        result = (left * right); 
        AddElement(left, '*', right, result);
    });

    buttonDev.addEventListener('click', function(){
        document.getElementById('oper').innerText = '/';
        let left = inputLeft.value;
        let right = inputRight.value;
        result = (left / right); 
        AddElement(left, '/', right, result);
    });
    

    function AddElement(leftV, operator, rightV, result){
        let elem = document.createElement('p');
        elem.innerText = `${leftV} ${operator} ${rightV} = ${result}`;
        document.getElementById('history').append(elem);
    }
});