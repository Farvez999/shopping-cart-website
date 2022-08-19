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

function updatePhoneNumber(isIncreaes) {
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

function updatePhonePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 1219;
    const caseToElement = document.getElementById('phone-total');
    caseToElement.innerText = caseTotalPrice;
}

// Sub total
function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmmount = parseFloat(taxAmmountString);
    setTextElementValueById('tax', taxAmmount);

    // calculate final Total
    const finalTotal = currentSubTotal + taxAmmount;
    setTextElementValueById('final-total', finalTotal);
}