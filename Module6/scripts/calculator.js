function input(num){
    equivalentCheck();

    let y = parseFloat(document.getElementById('result').value);

    if (document.getElementById('decimalVar').value == 0){
        num += y * 10; //multiply the text input by 10 and add the value of num
        document.getElementById('result').value = num; 

    }
    else{ // if decimal is true
        let decimalCount = parseInt(document.getElementById('decimalVar').value);

        if(decimalCount == 1){
            num *= 1/10; // using math to place the decimal point
            y += num;
            document.getElementById('result').value = y;
        }
        else{
            document.getElementById('result').value += num;
        }
        
    }

    decimalCount ++ ;

    document.getElementById('decimalVar').value = decimalCount;
}

function opperandCheck(){
    if (document.getElementById("operand").value ==""){
        document.getElementById("operand").value = document.getElementById('result').value;
        document.getElementById('equivalent').value = 1;    
    }
    else{
        operatorCheck();
    } 
}

function operatorCheck(){
    let a = parseFloat(document.getElementById("operand").value);
    let b = parseFloat(document.getElementById('result').value);

    switch (parseInt(document.getElementById('operation').value)){
        case 1:
            a+=b;
            break;
        case 2:
            a-=b;
            break;
        case 3:
            a*=b;
            break;
        case 4:
            a/=b;
            break;
        default:
    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById("equivalent").value = 1;
}


function  operators(option){
    switch (option){
        case 1:
            document.getElementById("operation").value = 1;//+
            break
        case 2:
            document.getElementById("operation").value = 2;//-
            break
        case 3:
            document.getElementById("operation").value = 3;//*
            break
        case 4:
            document.getElementById("operation").value = 4;// /
            break
        default:
    }
    opperandCheck();
}


function allclear(){
    document.getElementById('result').value= 0;
    document.getElementById("operand").value = "";
    ocument.getElementById('operation').value = 0;
    document.getElementById("equivalent").value = 0;
}
    
function plusminus(){
    document.getElementById('result').value *= -1;
}

function square(){
    document.getElementById('result').value *= document.getElementById('result').value;
}

function percent(){
    document.getElementById('result').value *= 0.01;
}

function equals(){
    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById("equivalent").value = 1;
}

function equivalentCheck(){// this allow the last value to remain in view until other buttons are pressed
    if (parseInt(document.getElementById('equivalent').value)){
        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0;
    }
}

function decimalP(){
    if(document.getElementById('decimalVar').value == 0){ // prevents multipul decimal points
        document.getElementById('decimalVar').value == 1;
    }

    if (parseInt(document.getElementById('operation').value)){ // if this is an empty string, it will return false
        document.getElementById('result').value = 0;
    }
}