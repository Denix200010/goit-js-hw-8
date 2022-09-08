import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
let localStorageData = {};

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);
populateOutput();

function onFormInput(e) {
    localStorageData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(localStorageData));
    
}

function onFormSubmit(e) {
    e.preventDefault();

    localStorage.removeItem('feedback-form-state');
    localStorageData = {};
    const { elements: { email, message } } = e.currentTarget;
    if (email.value === '' || message.value === '') {
        return alert('Пожалуйста, заполните все поля для ввода!')
    }
    
    console.log({email: email.value, message: message.value});
    formRef.reset(); 
}

function populateOutput() {
    const parseData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (parseData === null) {
        return;
    }
    formRef[0].value = parseData.email || '';
    formRef[1].value = parseData.message || '';
}

