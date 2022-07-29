const throttle = require('lodash.throttle');

//TODO => initialization

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = 'feedback-form-state';
const objectStorage = {}


//TODO => parse from Locale Storage

const parseObjectLS = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (parseObjectLS) {
    if (parseObjectLS.email) {
        form.elements.email.value = parseObjectLS.email;
    }
    if (parseObjectLS.message) {
        form.elements.message.value = parseObjectLS.message;
    }
}

// TODO => onFormInput callback
function onFormInput(e) {
    objectStorage[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectStorage));
}


// TODO => onFormSubmit callback
function onFormSubmit(e) {
    e.preventDefault();

    const { email, message } = e.currentTarget.elements

    const formData = {
        email: email.value,
        message: message.value,
    }

    console.log('This is Form Data:', formData);

    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
}

// const formData = new FormData(e.currentTarget)
// formData.forEach((value, name) => {
//     console.log(name);
//     console.log(value);
// });

// TODO => Event Listener
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
