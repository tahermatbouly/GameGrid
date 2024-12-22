'use strict'

const profileMenu = document.querySelectorAll(".remove");
profileMenu[0].style.display = "none";
profileMenu[1].style.display = "none";

const purchaseMenu = document.querySelector(".purchase");
purchaseMenu.style.display = "none";

function showProfileMenu(){
    profileMenu[0].style.display = "grid";
    profileMenu[1].style.display = "block";
}
function hideProfileMenu(){
    profileMenu[0].style.display = "none";
    profileMenu[1].style.display = "none";
}

function showPurchaseMenu(){
    purchaseMenu.style.display = "grid";
}
function hidePurchaseMenu(){
    purchaseMenu.style.display = "none";
}






function switchToWelcomePage() {
    window.location.href = "/home.html";
}

























let ct = 0
let flag = 0;
const cartCt = document.querySelector(".ct");

function addToCart(gameName, pic){
    
    if(flag == 0){
        ct++;
        cartCt.textContent = ct;
        flag = 1;
    }

}

const info = document.querySelector(".game-info");
info.style.display = "none";
let flag2 = 0;

function showInfo(gameName){
    if(flag2 == 0){
        info.style.display = "block";
        flag2 = 1;
    }else{
        info.style.display = "none";
        flag2 = 0;
    }
}


function goToCart(){
    window.location.href = "/cart.html";
}