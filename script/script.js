"use strict"; 

function getAccumulatedMonth(a,b) {
    return a-b;
}
function getTargetMonth (a,b) {
    let returnNumber=Math.ceil(a/b);
    if (returnNumber<0){
        console.log("Цель не будет достигнута!!!!!!!!!!!!!!!!!!!!!!!")
    }
    return returnNumber;
}
 function showTypeOf (a){
    console.log(typeof a);
 }
 let isNamber = function (n){
     return !isNaN(parseFloat(n)) && isFinite(n);
 }

let income = 'freelance';
let mission = 1000000;
let period =12;

let money;
let start = function(){
    money = +prompt("Ваш месячный доход?");
    while (!isNamber(parseFloat(money))){
        money=+prompt("Ваш месячный доход?");
    }
};
start();

console.log("Период равен"+" "+period+" "+"месяцев"+" "+"Цель заработать "+mission+" рублей" ) ;
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(addExpenses.length);
console.log(addExpenses.split(', '));
let deposit = confirm("Есть ли у вас депозит в банке?");
showTypeOf(money);
showTypeOf(addExpenses);
showTypeOf(deposit);


let expenses=[];

let getExpensesMonth = function(){
    let sum = 0;
    for( let i=0;i<2;i++){
        expenses[i] = prompt("Введите обязательную статью расходов ?");
        sum+=+prompt("Сколько тебе нужно потратить на " + expenses[i] + " в месяц?");
        while (!isNamber(parseFloat(sum))){
            sum+=+prompt("Сколько тебе нужно потратить на " + expenses[i] + " в месяц?");
        }
    }
    console.log("сумма"+sum);
    return sum;
}

let totalExpenses=getExpensesMonth();
 console.log("Расходы за месяц - "+totalExpenses);

let accumulatedMonth;
if (totalExpenses <= money){
    accumulatedMonth  = getAccumulatedMonth(money,totalExpenses);
console.log("Бюджет на месяц - "+ accumulatedMonth );
} else {
    alert("Твои расходы превышают доходы!");
}

period =getTargetMonth(mission,accumulatedMonth);
console.log("Сколько месяцев нужно для достижение цели - "+ period);

let budgetDay = Math.floor(accumulatedMonth /30);
console.log("Бюджет на день - "+ budgetDay);

let getStatusIncome = function(){
if (budgetDay === 1200 || budgetDay > 1200){
    console.log("У вас высокий уровень дохода!");
} else if(budgetDay === 600 || budgetDay >600){
    console.log("У вас средний уровень дохода!");
} else if( budgetDay > 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего!");
} else  {
   console.log("Что то пошло не так");
}
};
getStatusIncome();