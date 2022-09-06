import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const localStorageData = {};

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);
populateOutput();

function onFormInput(e) {
    localStorageData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(localStorageData));
    
}

function onFormSubmit(e) {
    e.preventDefault();
    formRef.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(localStorageData);
}

function populateOutput() {
    const parseData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (parseData === null) {
        return;
    }
    formRef[0].value = parseData.email || '';
    formRef[1].value = parseData.message || '';
}

