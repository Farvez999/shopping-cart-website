document.getElementById('btn-phone-plus').addEventListener('click', function () {
    // return to newCaseNumber
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber)
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    // return to newCaseNumber
    const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber)
})