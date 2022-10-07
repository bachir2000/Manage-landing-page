const email = document.querySelector('.email'),
btn = document.querySelector('.footer .primary-btn'),
errorText = document.querySelector('.error-text'),
menu = document.querySelector('.menu');

btn.addEventListener('click',()=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        errorText.classList.add('desabled');
    }else{
        errorText.classList.remove('desabled');
        email.focus()
    }    
});


menu.addEventListener('click',()=>{
    document.querySelector('.navbar nav').classList.toggle("active");
});