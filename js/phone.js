document.getElementById('btn-phone-plus').addEventListener('click', function () {
    // return to newCaseNumber
    const newCaseNumber = updatePhoneNumber(true);
    updatePhonePrice(newCaseNumber);
    calculateSubTotal()
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    // return to newCaseNumber
    const newCaseNumber = updatePhoneNumber(false);
    updatePhonePrice(newCaseNumber);
    calculateSubTotal();
})