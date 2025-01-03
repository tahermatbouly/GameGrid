const components = document.querySelector("#components");
let nnn;
for(let i=1 ; i <= 6 ; i++){
    nnn = localStorage.getItem(`game${i}`);
    if(nnn){
        let tempContainer = document.createElement('div');
        tempContainer.innerHTML = nnn;
        let div = tempContainer.firstChild; // Recreate the original div
        components.appendChild(div);
        console.log("yes");
    }
}















// const dynamicDiv = localStorage.getItem("1");
//     if (dynamicDiv) {
//         const tempContainer = document.createElement('div');
//         tempContainer.innerHTML = dynamicDiv;
//         const div = tempContainer.firstChild; // Recreate the original div
//         const components = document.querySelector("#components");
//         components.appendChild(div);
//         console.log("yes");
//     }else{
        
//         console.log("no");
//     }

// localStorage.removeItem("g");
