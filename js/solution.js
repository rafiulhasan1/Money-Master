const balence = document.getElementById('balance');

document.getElementById('calculate-btn').addEventListener('click',function(){
    const income = document.getElementById('income');
    const stringIncome = income.value;
    const numIncome = parseFloat(stringIncome);
    // console.log(numIncome)

    const food = document.getElementById('food');
    const stringFood = food.value;
    const numFood = parseFloat(stringFood);

    const rent = document.getElementById('rent');
    const stringRent = rent.value;
    const numRent = parseFloat(stringRent);

    const other = document.getElementById('clothes');
    const stringOther = other.value;
    const numOther = parseFloat(stringOther);

    const totalExpence = document.getElementById('total-expense');
    totalExpence.innerText = (numFood+numRent+numOther);

    
    balence.innerText = (numIncome-(totalExpence.innerText));

})

document.getElementById('calculate-savings').addEventListener('click',function(){
    const save = document.getElementById('save');
    const stringSave =  save.value;
    const numSave = parseFloat(stringSave);

    const parsentage = numSave*(balence.innerText)/100;

    const savingMoney = document.getElementById('saving-amount');
    savingMoney.innerText = parsentage;

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = (balence.innerText)-parsentage;

})