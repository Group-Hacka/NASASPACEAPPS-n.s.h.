const qs = (selector) => document.querySelector(selector);

const listPosts = qs('#list-posts');
const search = qs('#search');
const sortSelector = qs('#sort-select');
const menuBar = qs('#menu-bar');
const showMenu = qs('#show-menu');
const dateBirthday = qs('#date-birthday');
const photoBirthday = qs('#photo-birthday');


export  {
    dateBirthday,
    photoBirthday,
    listPosts,
    search,
    sortSelector,
    menuBar,
    showMenu
}