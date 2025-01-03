'use strict'
localStorage.removeItem("game6");

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

    let newImage = document.createElement('img');
    newImage.setAttribute('src', pic);
    let newImageHolder = document.createElement('div');
    newImageHolder.setAttribute('class', 'image-holder');
    newImageHolder.appendChild(newImage);

    let newPrice = document.createElement('div');
    newPrice.setAttribute('class', 'price');
    let newspan1 = document.createElement('span');
    newspan1.textContent = gameName;
    let newspan2 = document.createElement('span');
    newspan2.textContent = "Price: 50$";
    newPrice.appendChild(newspan1);
    newPrice.appendChild(newspan2);

    let newGame = document.createElement('div');
    newGame.setAttribute('class', 'game');
    newGame.appendChild(newImageHolder);
    newGame.appendChild(newPrice);

    localStorage.setItem("game6", newGame.outerHTML);
    console.log(localStorage.getItem("game6"));

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