const login=document.querySelector('.login-section')
const loginLink=document.querySelector('.Login-link')
const registerLink=document.querySelector('.register-link')
registerLink.addEventListener('click',() =>{
    login.classList.add('active')
})
registerLink.addEventListener('click',() =>{
    login.classList.remove('active')
})