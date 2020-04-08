"use strict"; 
function getExpensesMonth(a,b) {
    return a+b;
}
function getAccumulatedMonth(a,b) {
    return a-b;
}
function getTargetMonth (a,b) {
    return Math.ceil(a/b);
}
 function showTypeOf (a){
    console.log(typeof a);
 }

let income = 'freelance';
let mission = 1000000;
let period =12;
let money = +prompt("Ваш месячный доход?");
console.log("Период равен"+" "+period+" "+"месяцев"+" "+"Цель заработать "+mission+" рублей" ) ;
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
console.log(addExpenses.length);
console.log(addExpenses.split(', '));
let deposit = confirm("Есть ли у вас депозит в банке?");
showTypeOf(money);
showTypeOf(addExpenses);
showTypeOf(deposit);
let expenses1 = prompt("Введите обязательную статью расходов №1?");
let amount1 = +prompt("Сколько тебе нужно потратить на " + expenses1 + " в месяц?");
let expenses2 = prompt("Введите обязательную статью расходов №2?");
let amount2 = +prompt("Сколько тебе нужно потратить на " + expenses2 + " в месяц?");
let totalExpenses=getExpensesMonth(amount1,amount2);
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