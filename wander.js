


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




function passwordCheck(){

    const passverify = document.querySelector('#check_password');

    console.log("checking passwords..")

    if (document.querySelector('#password').value != passverify.value){
        addError(passverify);
    }
    else {
        removeError(element);
    }

}

function addError(element){
    element.classList.add('error');
}

function removeError(element){
    element.classList.remove('error');
}