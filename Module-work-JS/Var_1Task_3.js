// Форма авторизації з автозаповненням пароля. При створенні об”єкта у
// конструктор передаємо набори логінів і відповідних паролів. Користувач
// вводить логін. Якщо у об”єкті зберігається логін, то автоматично вставити
// пароль у друге поле вводу

let logs = ["Vasya", "Mark", "Nina","Admin","Helen"];
let passwords = ["g","22","sss","1234","12345"];

class Login {
    constructor(logins, passwords) {
        this.logins = logins;
        this.passwords = passwords;
    }
    //check every element in array logs 
    find(inputLog) {
        for (let i = 0; i < this.logins.length; i++) {
            //if el is in array return element`s password
            //logs and passwords related by index 
            if(this.logins[i]==inputLog){
                var pass = this.passwords[i];
                return pass;
            }
        }
    }
}

let log1 = new Login(logs, passwords);

function findClick() {
    let finderPass = log1.find(document.getElementById("login").value);
    document.getElementById("password").value=finderPass;  
    //if log input is empty set value on passField 
    if(document.getElementById("login").value===""){
        document.getElementById("password").value="";
    }
}
//call func findClicl every 30 miliseconds
setInterval(findClick,30);