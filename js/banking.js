// hanndle deposite button event
document.getElementById('Deposite-Button').addEventListener('click', function () {
    // Get the amount deposited
    const depositeInput = document.getElementById('Input-Deposite');
    const depositeAmount = depositeInput.value;
    console.log(depositeAmount);

    const CurrentDepositeTotal = document.getElementById('Deposite-Total');
    CurrentDepositeTotal.innerText = depositeAmount;

    // clear the deposite input fild
    depositeInput.value = '';
})