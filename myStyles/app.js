let percentNumber =document.getElementById('number');
let counter =0;
setInterval(() =>{
  if(counter == 90){
    clearInterval();
  }else{
    counter +=1;
    percentNumber.innerHTML = counter +"%"
  }

}, 10)
let percentNumber2 =document.getElementById('number1');
let counter2 =0;
setInterval(() =>{
  if(counter2 == 75){
    clearInterval();
  }else{
    counter2 +=1;
    percentNumber2.innerHTML = counter2 +"%"
  }

}, 25)
let percentNumber3 =document.getElementById('number2');
let counter3 =0;
setInterval(() =>{
  if(counter3 == 99){
    clearInterval();
  }else{
    counter3 +=1;
    percentNumber3.innerHTML = counter3 +"%"
  }

}, 25)
let percentNumber4 =document.getElementById('number3');
let counter4 =0;
setInterval(() =>{
  if(counter4 == 85){
    clearInterval();
  }else{
    counter4 +=1;
    percentNumber4.innerHTML = counter4 +"%"
  }

}, 25)