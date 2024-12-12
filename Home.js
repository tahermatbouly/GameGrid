'use strict'

function switchToWelcomePage() {
    window.location.href = "index.html";
}


function goToGame(game){

    // if(game == "gta"){
        
    //     window.location.href = `gta/gta.html`;

    // }else if(game == "fifa"){
    //     window.location.href = `fifa/fc.html`;
    // }else if(game == "red-dead"){
    //     window.location.href = `red-dead/red.html`;
    // }

    window.location.href = `${game}/${game}.html`;

}




