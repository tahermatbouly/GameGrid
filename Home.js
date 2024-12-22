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
    // window.location.href = `bf3/bf3.html`;


}









// function searchGame() {
//     console.log("Search button clicked");
//     const query = document.getElementById('search-bar').value;

//     if (query.length > 0) {  // Ensure the query is not empty
//         window.location.href = `search_games.php?query=${query}`;
//     }
// }
