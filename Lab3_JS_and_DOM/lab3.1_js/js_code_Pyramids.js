function pyramid_1(){
    var x = prompt("Input count of steps:")
    for (i = 1; i < x; i++) {
        let j=0;
        do{document.write("*");j++;}while(j < i)
        document.write("<br/>")
    }
}

function pyramid_2(){
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
document.write(string+"</pre>");
}
