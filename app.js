const email = document.querySelector('.email'),
btn = document.querySelector('.footer .primary-btn'),
errorText = document.querySelector('.error-text');

btn.addEventListener('click',()=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        errorText.classList.add('desabled');
    }else{
        errorText.classList.remove('desabled');
    }    
});