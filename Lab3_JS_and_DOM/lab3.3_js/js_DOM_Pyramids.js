let myElm3 = document.createElement("h1"); 
document.body.appendChild(myElm3);
myElm3.innerHTML = "Create btn Pyramids";

let print = document.createElement("p"); 
document.body.appendChild(print);
print.innerHTML = "print Pyramid_1 <br/><br/>"; 

let print2 = document.createElement("p"); 
document.body.appendChild(print2);
print2.innerHTML = "print Pyramid_2 <br/><br/>";

var pir1=function pyramid_1(){
    var x = prompt("Input count of steps:")
    for (i = 1; i < x; i++) {
        let j=0;
        do{print.innerHTML+="*";j++;}while(j < i)
        print.innerHTML+="<br/>"
    }
}

var pir2=function pyramid_2(){
    var x = prompt("Input count of steps for second pyramid")
let string = "<pre>";
for (let i = 1; i <= x; i++) {
  // printing spaces
  for (let j = 0; j < x - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "<br/>";
}
print2.innerHTML+=string+"</pre>";
}
 

let btn3 = document.createElement("button");
btn3.innerHTML = "PYRAMIDS";
btn3.type = "submit";
btn3.name = "formBtn";
document.body.appendChild(btn3);
btn3.addEventListener("click", pir1);
btn3.addEventListener("click", pir2);