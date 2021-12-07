let doorgaan = false;

//Selecteren van drank of frisdrank
function changeBg(item){

    let list = document.querySelectorAll(".list__listItem");

    for(let i = 0; i < list.length; i++){
        let overlay = list[i].children[0];
        overlay.style.backgroundColor = "#202020";
    }
    
    let child = item.children[0];
    child.style.backgroundColor = "#eee";
    doorgaan = true;


    //Opslaan in van soort drank of frisdrank in local storage
    if(item.childNodes[3].textContent.trim() === "Sinas" || item.childNodes[3].textContent.trim() === "Cola"){
        setFris(item);
    }else{
        setDrank(item);
    }
    
}

//Checkt of er een keuze is gemaakt
function check(pagina){
    
    if(doorgaan === true){
        if(pagina == 'drank'){
            window.location = "kiesFris.html";
        }else{
            window.location = "laden.html";
        }
        
    }else{
        const error = document.getElementById("error");
        error.style.display = "flex";
        setTimeout(closeError, 1000);
    }

}

function closeError(){
    const error = document.getElementById("error");
    error.style.display = "none";
}

//Gekozen drank opslaan in local storage
function setDrank(item){
    let drank = item.childNodes[3].textContent.trim();
    localStorage.setItem("drank", drank);
}

//Gekozen frisdrank opslaan in local storage
function setFris(item){
    let fris = item.childNodes[3].textContent.trim();
    localStorage.setItem("fris", fris);
}

//Veranderd tekst en kleur in box naar gekozen frisdrank
function changeText(){
    let charFris = localStorage.getItem("fris").substring(0,2);
    let charDrank = localStorage.getItem("drank").substring(0,2);

    let box = document.getElementById("box");

    box.innerText = charDrank + charFris; 

    let soort = localStorage.getItem("fris");
    
    //Veranderd kleur in fill naar soort frisdrank
    if(soort === "Sinas"){
        box.style.setProperty('--fill', '#EB6A0A');
    }else if(soort === "Cola"){
        box.style.setProperty('--fill', '#202020');
    }   
    
}