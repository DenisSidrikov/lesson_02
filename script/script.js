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
    percentDeposit:0,
    moneyDeposit:0,
    mission: 50000,
    period: 12,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:1,
    asking: function () {
            if (confirm("Есть ли у вас дополнительный заработок?")){
                let itemIncome=prompt("Какой у вас дополнительный зароботок?","Таксую");
                while (!isNaN(parseFloat(itemIncome))) {
                    itemIncome = prompt("Какой у вас дополнительный зароботок?","Таксую");
                }
                let cashIncome=prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
                while (!isNamber(parseFloat(cashIncome))) {
                    cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
                }
               
                appData.income[itemIncome]=cashIncome;
            }

        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
            appData.addExpenses=addExpenses.split(', ');
            appData.deposit = confirm("Есть ли у вас депозит в банке?");
      

            let sum = 0;
            let finalSum = 0;
            let expenses,sumExpenses;
            for (let i = 0; i < 2; i++) {
                expenses = prompt("Введите обязательную статью расходов ?");
                while (!isNaN(parseFloat(expenses))) {
                    expenses = prompt("Введите обязательную статью расходов ?");
                }
                sum = prompt("Сколько тебе нужно потратить на " + expenses + " в месяц?");
                while (!isNamber(parseFloat(sum))) {
                    sum = prompt("Сколько тебе нужно потратить на " + expenses + " в месяц?");
                }
               
                appData.expenses[expenses]= +sum;
            }


    },
    getBudget: function(){
        
            appData.budgetMonth = money-appData.expensesMonth;
            console.log("Бюджет на месяц - " + appData.budgetMonth);
            
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
            console.log("Бюджет на день - " + appData.budgetDay);

        
        
    },
    getTargetMonth: function(a,b){
        let returnNumber = Math.ceil(a / b);
    if (returnNumber < 0) {
        console.log("Цель не будет достигнута!!!!!!!!!!!!!!!!!!!!!!!")
    }
    return returnNumber;
    },
    getExpensesMonth: function(){
        let sum=0;
        for ( let key in appData.expenses ) {
            sum += appData.expenses[key];
          }
          appData.expensesMonth=sum;
         
          
    },
    getStatusIncome: function(){
        if (appData.budgetDay === 1200 || appData.budgetDay > 1200) {
            console.log("У вас высокий уровень дохода!");
        } else if (appData.budgetDay === 600 || appData.budgetDay > 600) {
            console.log("У вас средний уровень дохода!");
        } else if (appData.budgetDay > 0) {
            console.log("К сожалению у вас уровень дохода ниже среднего!");
        } else {
            console.log("Что то пошло не так");
        }
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = prompt("Какой годовой процент?",10);
            while (!isNamber(parseFloat(appData.percentDeposit))) {
                appData.percentDeposit = prompt("Какой годовой процент?",10);
            }
            appData.moneyDeposit=prompt("Какая суммв звложена?",10000);
            while (!isNamber(parseFloat(appData.moneyDeposit))) {
                appData.moneyDeposit = prompt("Какая суммв звложена?",10000);
            }
            
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth*appData.period;
    }
};
for (let key in appData) { 
    console.log("Ключ:  "+ key +"Значение: "+appData[key]);
}
appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log("Период равен" + " " + appData.period + " " + "месяцев" + " " + "Цель заработать " + appData.mission + " рублей");

let expenses = [];
let sumExpenses = [];
let totalExpenses = appData.expensesMonth;
console.log("Расходы за месяц - " + totalExpenses);

appData.period = appData.getTargetMonth(appData.mission, appData.budgetMonth);
console.log("Сколько месяцев нужно для достижение цели - " + appData.period);

console.log(appData.expensesMonth);
console.log(appData.expenses);
appData.getStatusIncome();
console.log('Возможные расходы '+ appData.addExensesp);
