const $openMenu = document.querySelector('#openMenu');
const $closeMenu = document.querySelector('#closeMenu');
const $nav = document.querySelector('nav')
const $takeBackground = document.querySelector('#takeBackground');
$openMenu.addEventListener('click',  ()=>{
    $nav.classList.add('openMenu')
    $takeBackground.classList.add('darkBackground')
})
$closeMenu.addEventListener('click', ()=>{
    $nav.classList.remove('openMenu')
    $takeBackground.classList.remove('darkBackground')

})