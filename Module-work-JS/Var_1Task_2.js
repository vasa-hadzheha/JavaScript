// Дано оцінки учня за 5 предметів у 12 бальній шкалі. Вивести номери
// предметів, з яких у учня задовільні оцінки?

let studentMarks = [12,4,6,10,7];

for (let i = 0; i < studentMarks.length; i++) {
    if(studentMarks[i]>=7){
        console.log("Student have a good mark from "+parseInt(i+1)+"-th subject")
    }
}