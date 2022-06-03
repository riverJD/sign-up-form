


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

