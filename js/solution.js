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

    const balence = document.getElementById('balance');
    balence.innerText = (numIncome-(totalExpence.innerText));

})