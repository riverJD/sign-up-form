


const modal = document.querySelector(".modal")


const infoButton = document.querySelector('#info-pop');

const closeModal = document.querySelector('.close-button');


infoButton.onclick = () => modal.style.display = 'block';

closeModal.onclick = () => modal.style.display = 'none';

window.onclick = function(e){
    if (e.target == modal) 
    
    {
        console.log('close');
        modal.style.display = 'none';
    }
}

// Verify password and confirm password are same
function passwordCheck(){

    const passverify = document.querySelector('#check_password');

    console.log("checking passwords..")

    if (document.querySelector('#password').value != passverify.value){
        passverify.setCustomValidity('Passwords must match.')
        addError(passverify);
    }
    else {
        passverify.setCustomValidity('')
        removeError(passverify);
    }

}

// Automatically remove non-numerics and place dashes 
const phoneFormater = document.querySelector('#phone_num');
phoneFormater.addEventListener('keyup', (e) => {

    // Remove anything that isn't a number
    let phoneNumber = phoneFormater.value.replace(/\D/g,'');
    
    let inputSize = phoneNumber.length;
    console.log(phoneFormater.ValidityState)
    // Ignore delete/backspace so user can delete number 
    if (e.key == 'Backspace' || e.key == 'Delete') return;
    

    if (inputSize >= 3 && inputSize < 7 && e.key != 'Backspace'){
        phoneNumber = phoneNumber.substring(0,3) + '-' + phoneNumber.substring(3)
    }
    else if (inputSize >= 7){
        phoneNumber = phoneNumber.substring(0,3) + '-' + phoneNumber.substring(3,6) + '-' + phoneNumber.substring(6)
    }


    phoneFormater.value = phoneNumber;
    phoneFormater.setCustomValidity('');
})

let formValueCheck = [];

// If an input is valid, add its value to an array
const formelements = document.querySelectorAll('.form-element');

    formelements.forEach(input => {
        input.addEventListener('change', () => {
            console.log(input.reportValidity())
            if (input.checkValidity()){
                console.log('valid')
            formValueCheck[input.name] = input.value;
            verifyForm();
            }

        })
    });
    
// If our verified values array object is the same length as 
// the number of inputs, allow submission
function verifyForm(){
    console.log("checking")
    console.log(Object.keys(formValueCheck).length + " " + formelements.length)
    if (Object.keys(formValueCheck).length == formelements.length){
        
        document.getElementById('create-account').classList.remove('inactive');
    }
}

// These are broken up into helper functions for future scalibility
function addError(element){
    element.classList.add('error');
}

function removeError(element){
    element.classList.remove('error');
}
