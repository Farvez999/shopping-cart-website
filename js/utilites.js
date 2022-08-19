function updateCaseNumber(isIncreaes) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    previousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;
    if (isIncreaes == true) {
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCasePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseToElement = document.getElementById('case-total');
    caseToElement.innerText = caseTotalPrice;
}

// Phone Increase And descrease

function updateCaseNumber(isIncreaes) {
    const caseNumberField = document.getElementById('phone-number-field');
    const caseNumberFieldString = caseNumberField.value;
    previousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;
    if (isIncreaes == true) {
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCasePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 1219;
    const caseToElement = document.getElementById('phone-total');
    caseToElement.innerText = caseTotalPrice;
}