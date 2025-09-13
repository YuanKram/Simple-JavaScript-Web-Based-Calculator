// a simple personal project calculator by YuanKram ; https://github.com/YuanKram
// this calculator incorporates arrays for the screen display and simple document manipulation using innerText
// all the comments below are created when doing the project

//the calculator only allows 3 array which will be the first index as number, second is for the operator and third is for the 2nd number

const buttons = document.querySelectorAll(".button")
let screen_text = document.querySelector(".input")

let screen_result = document.querySelector(".result")

//all calculator buttons

// another idea implementation, separate the calculator buttons from 4 different const objects as; numbers,operations,equal and bakcspace
const calc_btns = [{
    value: "0",
    element: document.getElementById("btn0")
},
{
    value: "1",
    element: document.getElementById("btn1")
},
{
    value: "2",
    element: document.getElementById("btn2")
},
{
    value: "3",
    element: document.getElementById("btn3")
},
{
    value: "4",
    element: document.getElementById("btn4")
},
{
    value: "5",
    element: document.getElementById("btn5")
},
{
    value: "6",
    element: document.getElementById("btn6")
},
{
    value: "7",
    element: document.getElementById("btn7")
},
{
    value: "8",
    element: document.getElementById("btn8")
},
{
    value: "9",
    element: document.getElementById("btn9")
}
,
{
    value: "+",
    element: document.getElementById("btnAdd")
},
{
    value: "-",
    element: document.getElementById("btnSubtract")
},
{
    value: "*",
    element: document.getElementById("btnMultiply")
},
{
    value: "/",
    element: document.getElementById("btnDivide")
},
{
    value: "=",
    element: document.getElementById("btnEquals")
},
{
    value: "<",
    element: document.getElementById("btnBack")
}
];

// const calc_operations = [
// {
//     value: "+",
//     element: document.getElementById("btnAdd")
// },
// {
//     value: "-",
//     element: document.getElementById("btnSubtract")
// },
// {
//     value: "*",
//     element: document.getElementById("btnMultiply")
// },
// {
//     value: "/",
//     element: document.getElementById("btnDivide")
// }];

// const calc_equal = {
//     value: "=",
//     element: document.getElementById("btnEquals")
// }

// const calc_back = {
//     value: "<",
//     element: document.getElementById("btnBack")
// }

let screen_input = [];

//checking of id on each button
buttons.forEach(button => {
  button.addEventListener('click', function () {
    const clickedId = this.id;
    console.log('Clicked data-id:', clickedId);

    const btnObj = calc_btns.find(button => button.element.id === clickedId);

    if (!btnObj) return;

    const value = btnObj.value;

    // used switches in comparing the value clicked instead of for loop which complicates the code more
    switch (value) {
      case "0":
        if(screen_input.length === 0 ){
            break;
        }
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        screen_result.style.display = "none";
        if(screen_input.length === 0 || isNaN(screen_input[screen_input.length - 1])){
            screen_input.push(value);
        }
        else{ //this concatenate the number string in the index 0 or index 2 of the screen_input array
            screen_input[screen_input.length - 1] += value;
        }
        screen_text.innerText = screen_input.join(' '); // this concatenate all the elements in the array and display in the document

        for(let x= 0;x < screen_input.length ; x++){
            console.log(screen_input[x])
        }
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        
        if(screen_input.length < 1 || screen_input.length === 2){
            break;
        }
        else{
            screen_input.push(value)
            
        }
        screen_text.innerText = screen_input.join('');
        for(let x= 0;x < screen_input.length ; x++){
            console.log(screen_input[x])
        }
        

        break;
        

      case "=":
        if(screen_input.length === 3){
             const operator = screen_input[1];

        let result;

        switch(operator){
            case "+":
                result = addNum(screen_input);
                break;
            case "-":
                result = subNum(screen_input);
                break;
            case "*":
                result = multNum(screen_input);
                break;
            case "/":
                result = divNum(screen_input);
                break;
        }

        screen_result.innerText = result;
        screen_result.style.display = "block";

        console.log(result);
        }
        else{
            break;
        }
        screen_input.length = 0;
        break;

      case "<":
        screen_result.style.display = "none";
        const lastIndex = screen_input.length - 1;

        if (lastIndex >= 0) {
            const lastItem = screen_input[lastIndex];

            if (!isNaN(lastItem)) {
                if (lastItem.length > 1) {
                screen_input[lastIndex] = lastItem.slice(0, -1);
                }   
                else {
                screen_input.pop();
                }
            } 
            else {
            screen_input.pop();
            }
        }

        screen_text.innerText = screen_input.join('');

        for(let x= 0;x < screen_input.length ; x++){
            console.log(screen_input[x])
        }

        console.log("Not Number? : "+ isNaN(value));
        break;
        

      default:
        screen_result.style.display = "block";
    }
    
    // for(let x = 0; x < 16 ; x++){


    //     let indexResult = indexChecker();

    //     let btn = calc_btns[x].value.id;

    //     let btn_result = isNum(btn);

    //     if(indexResult){
    //         //if true only add the string value on the first index and if operators are clicked it advance to the second index
    //         if(btn_result){
    //             screen_input[0] += `${btn}`
    //         }
    //         else{
    //             screen_input.push(calc_btns[x].value)
    //         }
    //     }
    //     else{
    //         //the id is not pushed inside the scrren_input; solution add .id because clickedId is a string 
    //         if(clickedId == calc_btns[x].element.id){
            
    //         // goal is push numbers in the first index if still no operator is clicked
    //         screen_input.push(calc_btns[x].value)
    //     }
    //     }
        
    // }

    

    // for(let x=0;x < screen_input.length;x++ )
    //     {
    //       console.log(screen_input[x])
    //     }

    

  });

});

// operations functions
function addNum(array){
    return parseInt(array[0]) + parseInt(array[2]);
}
function subNum(array){
    return parseInt(array[0]) - parseInt(array[2]);
}
function divNum(array){
    return parseInt(array[0]) / parseInt(array[2]);
}
function multNum(array){
    return parseInt(array[0]) * parseInt(array[2]);
}

// function indexChecker(){
//     let num1 = screen_input.length;
//     if(num1 > 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function isNum(btn){
//     let convert = parseInt(btn);

//     if (convert >= 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// function isCheck(x){
//     if(x === "+"
//         || x === "-"
//         || x === "*"
//         || x === "/"
//     ){
//         isOperator();
//     }
//     else if(x === "="){
//         isEquals();
//     }
//     else if(x === "<"){
//         isBack();
//     }
//     else{
//         isNumber();
//     }
// }

// nonsense function since there is a NaN method that can be used
// function isNumber(){
//     console.log("this is number")
// }