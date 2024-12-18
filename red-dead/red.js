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
    window.location.href = "/index.html";
  }