const $btnCart = document.querySelector('#cart');
const $cartInfo = document.querySelector('#cartInfo');4
const $addToCart = document.querySelector('#addToCart');
let $totalNumber = document.querySelector('#total-number');
let saveNumber = 0
const $itemPrice = document.querySelector('#itemPrice');
const $minus = document.querySelector('#minus');
const $plus = document.querySelector('#plus');
let $infoTotalItems = document.querySelector('#infoTotalItems');
const $showItemPrice = document.querySelector('#showItemPrice');
const $showTotalProduts = document.querySelector('#showTotalProduts');
const $showTotalPrice = document.querySelector('#showTotalPrice');
const $emptyContent = document.querySelector('.emptyContent');
const $cartContent = document.querySelector('.cartContent');
const $deleteContentCart = document.querySelector('#deleteContentCart');

$btnCart.addEventListener('click', ()=>{
    $cartInfo.classList.toggle('showCartInfo')
})
$cartContent.style.display='none';

$minus.addEventListener('click',()=>{
    if(saveNumber != 0){
        saveNumber-=1
        $totalNumber.innerHTML=saveNumber
    }

})
$plus.addEventListener('click',()=>{
    saveNumber+=1
    $totalNumber.innerHTML=saveNumber
})

$addToCart.addEventListener('click', ()=>{
    $infoTotalItems.innerHTML=$totalNumber.innerHTML
    if($totalNumber.innerHTML>0){
        $emptyContent.style.display='none'
        $cartContent.style.display='grid'
    }
    $showItemPrice.innerHTML=`$${$itemPrice.innerHTML}`
    $showTotalProduts.innerHTML=$totalNumber.innerHTML
    $showTotalPrice.innerHTML=`$${$totalNumber.innerHTML*$itemPrice.innerHTML}`

})

$deleteContentCart.addEventListener('click', ()=>{
    $showItemPrice.innerHTML=0
    $showTotalProduts.innerHTML=0
    $showTotalPrice.innerHTML=0
    $infoTotalItems.innerHTML=0
    $emptyContent.style.display='grid'
    $cartContent.style.display='none'

})


