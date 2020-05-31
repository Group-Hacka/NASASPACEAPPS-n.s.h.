const menuBar = document.getElementById("menu-bar");
const showMenu = document.getElementById("show-menu");
 

const menuExhibit = () => {
    showMenu.classList.toggle("menu-exhibit");
}

menuBar.addEventListener("click", () =>{
    menuExhibit();
});
