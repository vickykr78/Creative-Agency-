const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const section = document.querySelector('.section')
const socialBar = document.querySelector('.social-bar')

toggle.addEventListener('click' , () =>{
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
    if (toggle.classList.contains('active'))
        socialBar.classList.add('active')
    else
        socialBar.classList.remove('active')
})