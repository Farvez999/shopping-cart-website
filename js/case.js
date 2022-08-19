document.getElementById('btn-case-plus').addEventListener('click', function () {
    // return to newCaseNumber
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber)
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    // return to newCaseNumber
    const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber)
})