function getPar1(){
    var milk = prompt("Input price of milk:");
    console.log(milk);
    return milk;
}
function getPar2(){
    var bread = prompt("Input price of bread:");
    console.log(bread);
    return bread;
}

function sum_(par1,par2){

    let sum= parseInt(par1) + parseInt(par2);
    document.write("milk:="+par1+"</br>"+"bread:="+par2+"</br>"+"sum:="+sum);
    return sum;
}

