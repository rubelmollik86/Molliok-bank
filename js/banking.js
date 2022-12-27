// hanndle deposite button event
document.getElementById('Deposite-Button').addEventListener('click', function () {
    // Get the amount deposited
    const depositeInput = document.getElementById('Input-Deposite');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    // console.log(depositeAmount);
// update deposite total
    const CurrentTotal = document.getElementById('Deposite-Total');

    // const currentDepositeAmount = CurrentTotal.innerText;
    const CurrentTotalAmountText = CurrentTotal.innerText;
    const currentDepositeAmount = parseFloat(CurrentTotalAmountText)
    const NewDepositeTotal = currentDepositeAmount + depositeAmount;

    CurrentTotal.innerText = NewDepositeTotal;

    // update Balance
    const BalanceUpdate = document.getElementById('Balance-Update');
    const balanceUpdateText = BalanceUpdate.innerText;
    const previousBalance = parseFloat(balanceUpdateText);
    const NewBlanceTotal = previousBalance + depositeAmount;
    BalanceUpdate.innerText = NewBlanceTotal;


    // clear the deposite input fild
    depositeInput.value = '';
})