import { menuBar, showMenu } from './selectors.js'

const menuExhibit = () => {
    showMenu.classList.toggle("menu-exhibit");
}

menuBar.addEventListener("click", () => {
    menuExhibit();
});

