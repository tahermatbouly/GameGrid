"use strict";

function switchToSignupPage() {
  window.location.href = "Signup_screen.html";
}

function switchToLoginPage() {
  window.location.href = "login_screen.html";
}

let images = [
  "Images/pixilated-controllers.webp",
  "Images/wallpaperflare.com_wallpaper.jpg",
  "Images/wallpaperflare.com_wallpaper5.jpg",
  "Images/wallpaperflare.com_wallpaper4.jpg",
  "Images/wallpaperflare.com_wallpaper3.jpg",
  "Images/wallpaperflare.com_wallpaper2.jpg",
];
let i = 0;
function slideRight() {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  if (i == 0) {
    document.getElementById("adventures").style.color = "rgb(0, 255, 234)";
  } else if (i == 1) {
    document.getElementById("adventures").style.color = "rgb(119, 0, 203)";
  } else if (i == 2) {
    document.getElementById("adventures").style.color = "rgb(0, 145, 255)";
  } else if (i == 3) {
    document.getElementById("adventures").style.color = "rgb(255, 62, 62)";
  } else if (i == 4) {
    document.getElementById("adventures").style.color = "rgb(186, 255, 249)";
  } else if (i == 5) {
    document.getElementById("adventures").style.color = "rgb(255, 129, 38)";
  }

  const image = document.getElementsByClassName("pic")[0];
  image.style.backgroundImage = `url( ${images[i]} )`;
}

function slideLeft() {
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }

  if (i == 0) {
    document.getElementById("adventures").style.color = "rgb(0, 255, 234)";
  } else if (i == 1) {
    document.getElementById("adventures").style.color = "rgb(255, 0, 162)";
  } else if (i == 2) {
    document.getElementById("adventures").style.color = "rgb(119, 0, 203)";
  } else if (i == 3) {
    document.getElementById("adventures").style.color = "rgb(0, 145, 255)";
  } else if (i == 4) {
    document.getElementById("adventures").style.color = "rgb(255, 62, 62)";
  } else if (i == 5) {
    document.getElementById("adventures").style.color = "rgb(186, 255, 249)";
  } else if (i == 6) {
    document.getElementById("adventures").style.color = "rgb(255, 129, 38)";
  }

  const image = document.getElementsByClassName("pic")[0];
  image.style.backgroundImage = `url( ${images[i]} )`;
}
