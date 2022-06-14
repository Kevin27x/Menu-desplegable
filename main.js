let listElements = document.querySelectorAll(".list__button--click");

listElements.forEach(e => {
    e.addEventListener("click", () => {
       //Agrega una clase al elemento singular y se la quita al siguiente click (con toggle)
        e.classList.toggle("arrow");

        let height = 0;
        let menu = e.nextElementSibling; //hermano adyacente del elemento
        //console.log(menu.clientHeight) muestra el height del elemento 
        //console.log(menu.scrollHeight) muestra el height del menu, sin que se desborde
        if(menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    });
});