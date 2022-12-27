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


// Withdraw event handeler
document.getElementById('Withdraw-Button').addEventListener('click',function(){
    console.log('Withdraw clicked');
    const withdrawInput = document.getElementById('input-withdraw')
    const withdrawAmountText = withdrawInput.value;
    const withdrawNewAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + withdrawNewAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // Set balance after withdraw
    const balanceTotal = document.getElementById('Balance-Update');
    const previousBalanceText = balanceTotal.innerText;
    const priviousBalanceTotal = parseFloat(previousBalanceText);
    const NewBlanceTotal = priviousBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = NewBlanceTotal;
    // clear withdraw input
    withdrawInput.value = '';

})