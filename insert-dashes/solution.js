function insertDash(num) {

console.log(num + ":num");

var fullNum = num.toString().split('');

for(var i= 0, j = 1; j < fullNum.length; i++, j++) {
  
  var number1 = parseInt(fullNum[i]);
  
  var number2 = parseInt(fullNum[j]);
  
  if (number1%2 && number2%2 === 1) {

number2.toString();


number2 = "-" + number2;

fullNum[j]= number2;

}

 }


 
 return  fullNum.join("");
 
}
