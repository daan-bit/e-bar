function changeBg(item){
    let list = document.querySelectorAll(".list__listItem");

    for(let i = 0; i < list.length; i++){
        let overlay = list[i].children[0];
        overlay.style.backgroundColor = "#202020";
    }
    
    let child = item.children[0];
    child.style.backgroundColor = "#eee";
}