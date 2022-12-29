
import throttle from 'lodash.throttle';
var throttle = require('lodash.throttle');


/////////////////1///////////////

const STORAGE_KEY = "feedbeak-form-state";
const formData = {};
const feedbeakForm = document.querySelector('.feedback-form');

feedbeakForm.addEventListener('input', throttle(onFormInput, 500));
feedbeakForm.addEventListener('submit', throttle(onFormSubmit));
sddTextToInput();
function onFormInput (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function onFormSubmit (e) {        
    e.preventDefault();      
   console.log('Helloy form');
        e.currentTarget.reset();           
        localStorage.removeItem(STORAGE_KEY);    
       };
 function sddTextToInput () {

    if (localStorage.getItem(STORAGE_KEY)) {

         feedbeakForm.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
         feedbeakForm.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
    }
};
       