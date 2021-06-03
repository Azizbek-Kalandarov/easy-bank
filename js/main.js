let burger = document.querySelector('.burger')
let check = document.querySelector('.check')
let overlay = document.querySelector('.overlay')
let body = document.querySelector('body')
burger.addEventListener('click' , function(){
    check.classList.toggle('checked')
    body.classList.toggle('overflow')
    overlay.classList.toggle('show')
})
overlay.addEventListener('click' , function(){
    check.classList.remove('checked')
    overlay.classList.remove('show')
    body.classList.remove('overflow')
})