"use strict";
let isNamber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;
let start = function () {
    money = prompt("Ваш месячный доход?");
    while (!isNamber(parseFloat(money))) {
        money = prompt("Ваш месячный доход?");
    }
};
start();

let appData = {
    budget:money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 12,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    asking: function () {
        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
            appData.addExpenses=addExpenses.split(', ');
            appDate.deposit = confirm("Есть ли у вас депозит в банке?");
    },
    getAccumulatedMonth: function(a,b){
        return a - b;
    },
    getTargetMonth: function(a,b){
        let returnNumber = Math.ceil(a / b);
    if (returnNumber < 0) {
        console.log("Цель не будет достигнута!!!!!!!!!!!!!!!!!!!!!!!")
    }
    return returnNumber;
    },
    getExpensesMonth: function(){
        let sum = 0;
        let finalSum = 0;
        for (let i = 0; i < 2; i++) {
            expenses[i] = prompt("Введите обязательную статью расходов ?");
            sum = prompt("Сколько тебе нужно потратить на " + expenses[i] + " в месяц?");
            while (!isNamber(parseFloat(sum))) {
                sum = prompt("Сколько тебе нужно потратить на " + expenses[i] + " в месяц?");
            }
            sumExpenses[i] = +sum;
            finalSum = sumExpenses[0] + sumExpenses[1];
        }
        console.log("сумма!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + finalSum);
        return finalSum;
    },
    getStatusIncome: function(){
        if (budgetDay === 1200 || budgetDay > 1200) {
            console.log("У вас высокий уровень дохода!");
        } else if (budgetDay === 600 || budgetDay > 600) {
            console.log("У вас средний уровень дохода!");
        } else if (budgetDay > 0) {
            console.log("К сожалению у вас уровень дохода ниже среднего!");
        } else {
            console.log("Что то пошло не так");
        }
    }
};

appData.asking();
console.log("Период равен" + " " + appData.period + " " + "месяцев" + " " + "Цель заработать " + appData.mission + " рублей");

let expenses = [];
let sumExpenses = [];
let totalExpenses = appData.getExpensesMonth();
console.log("Расходы за месяц - " + totalExpenses);

let accumulatedMonth;
if (totalExpenses <= money) {
    accumulatedMonth = appData.getAccumulatedMonth(money, totalExpenses);
    console.log("Бюджет на месяц - " + accumulatedMonth);
} else {
    alert("Твои расходы превышают доходы!");
}

appData.period = appData.getTargetMonth(appData.mission, accumulatedMonth);
console.log("Сколько месяцев нужно для достижение цели - " + appData.period);

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log("Бюджет на день - " + budgetDay);


appData.getStatusIncome();