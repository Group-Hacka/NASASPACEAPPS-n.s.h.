import { getDataNasa, getImageDate } from '../data/data-nasa.js';
import { buildHTML } from './create-post.js';
import { filterLike, sortByProp } from './index.js';
import { dateBirthday, photoBirthday, listPosts, search, sortSelector } from './selectors.js';


function searchPost(list) {
    let posts = filterLike(list, 'title', event.target.value);
    buildHTML(listPosts, posts);
}

function sortPost(data, prop, upOrDown) {
    let sorted = sortByProp(data, prop, upOrDown);
    buildHTML(listPosts, sorted);
}

getDataNasa().then(response => {
    const data = response.collection.items;
    buildHTML(listPosts, data);

    search.addEventListener('input', searchPost.bind(null, data));
    sortSelector.addEventListener('change', () => {
        let upOrDown = false;
        if (sortSelector.value === "true") {
            upOrDown = true;
        }
        sortPost(data, 'title', upOrDown);
    })
});

dateBirthday.addEventListener('click', () => {
    const dateValue = document.querySelector('#date').value;
    getImageDate(dateValue).then(response => {
        const img = `<img src="${response.hdurl}">`;
        photoBirthday.innerHTML = img;

        const facebook = document.querySelector('#facebook');
        const twitter = document.querySelector('#twitter');
        const whatsapp = document.querySelector('#whatsapp');
        
        const share = document.querySelector('#share-friends');
        share.style.display = 'block';
        
        facebook.href = `http://www.facebook.com/sharer.php?u=${response.hdurl}`;
        twitter.href = `https://twitter.com/intent/tweet?url=${response.hdurl}&text=Essa foi a imagem da Nasa no dia do meu aniversário: ${response.title}`;
        whatsapp.href = `https://api.whatsapp.com/send?text=Essa foi a imagem da Nasa no dia do meu aniversário: ${response.hdurl}`;

    });
});
