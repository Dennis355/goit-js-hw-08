
import throttle from 'lodash.throttle';
var throttle = require('lodash.throttle');


/////////////////1///////////////

const STORAGE_KEY = "feedbeak-form-state";

const feedbeakForm = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || 
 {
 };

feedbeakForm.addEventListener('input', throttle(onFormInput, 500));
feedbeakForm.addEventListener('submit', throttle(onFormSubmit));
sddTextToInput();
function onFormInput (e) {
    formData[e.target.name] = e.target.value;

  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));


};


function onFormSubmit (e) {        
    e.preventDefault();      
//    console.log('Helloy form');
   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
        e.currentTarget.reset();           
        localStorage.removeItem(STORAGE_KEY);    
       };
 function sddTextToInput () {

    if (localStorage.getItem(STORAGE_KEY))  {

         feedbeakForm.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email || '';
         feedbeakForm.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message || '';
    }  
    else { 
    //      feedbeakForm.email.value = '';
    // feedbeakForm.message.value ='';
};
};
       




////////////////  2  //////////////////

// const STORAGE_KEY = "feedbeak-form-state";
// const feedbeakForm = document.querySelector('.feedback-form');

// const formFeleds = feedbeakForm.elements;
// console.log(formFeleds);

// const btnSubmit =  feedbeakForm.querySelector('[type="submit"]');
// console.log(btnSubmit);

// btnSubmit.addEventListener('click', clearLocStor);

// function  clearLocStor () {
//     localStorage.clear();
// }

// function attacheEvents ( ) {
// for (let i = 0; i < formFeleds.length; i++) {
//     formFeleds[i].addEventListener('change', throttle(changeHandlerForm, 500));
// }
//  }

// function  changeHandlerForm (target) {
   
//         localStorage.setItem(this.name, this.value);
//         console.log(this.name, this.value);
    
// }

// checkStorage  ();

// function checkStorage  () {
//     if ( localStorage){ 

    
//     for (let i = 0; i < formFeleds.length; i++) {
//     formFeleds[i].value = localStorage.getItem(formFeleds[i].name);
//     }
// };
// };



