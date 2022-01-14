var products = function sum_(){
    var milk = prompt("Input price of milk:");
    var bread = prompt("Input price of bread:");
    let sum= parseInt(bread) + parseInt(milk);
    document.write("milk:="+milk+"</br>"+"bread:="+bread+"</br>"+"sum:="+sum)
}
let myElm2 = document.createElement("h1"); 
document.body.appendChild(myElm2);
myElm2.innerHTML = "Create btn SUM OF PRODUCTS"; 

let btn2 = document.createElement("button");
btn2.innerHTML = "SUM OF PRODUCTS";
btn2.type = "submit";
btn2.name = "formBtn";
document.body.appendChild(btn2);
btn2.onclick=products;