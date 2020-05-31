const qs = (selector) => document.querySelector(selector);

const listPosts = qs('#list-posts');
const search = qs('#search');
const sortSelector = qs('#sort-select');
const menuBar = qs('#menu-bar');
const showMenu = qs('#show-menu');


export  {
    listPosts,
    search,
    sortSelector,
    menuBar,
    showMenu
}