function changeBg(item){

    //Selecteren van een listitem
    let list = document.querySelectorAll(".list__listItem");

    for(let i = 0; i < list.length; i++){
        let overlay = list[i].children[0];
        overlay.style.backgroundColor = "#202020";
    }
    
    let child = item.children[0];
    child.style.backgroundColor = "#eee";

    if(item.childNodes[3].textContent.trim() === "Fanta" || item.childNodes[3].textContent.trim() === "Cola"){
        setFris(item);
    }else{
        setDrank(item);
    }
    
}

function setDrank(item){
    //Ophalen soort drank en zetten in local storage
    let drank = item.childNodes[3].textContent.trim();
    localStorage.setItem("drank", drank);
}

function setFris(item){
    //Ophalen soort frisdrank en zetten in local storage
    let fris = item.childNodes[3].textContent.trim();
    localStorage.setItem("fris", fris);
}

//Veranderd tekst en kleur in box naar gekozen frisdrank
function changeText(){
    let box = document.getElementById("box")
    box.innerText = localStorage.getItem("fris"); 

    let soort = localStorage.getItem("fris");
    

    if(soort === "Fanta"){
        box.style.setProperty('--fill', '#EB6A0A');
    }else if(soort === "Cola"){
        box.style.setProperty('--fill', '#202020');
    }   
    
    console.log("fris " + localStorage.getItem("fris"));
    console.log("drank " + localStorage.getItem("drank"));

}