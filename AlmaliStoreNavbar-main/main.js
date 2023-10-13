const myMenu = document.querySelector('.main__nav2__menu')
const BurgerMenu = document.querySelector('.burger')
const main = document.querySelector('body')

BurgerMenu.addEventListener('click', () =>{
    myMenu.style.left ='0'
    main.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; 
})