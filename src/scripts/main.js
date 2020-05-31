import { getDataNasa } from '../data/data-nasa.js';
import { buildHTML } from './create-post.js';
import { filterLike, sortByProp } from './index.js';
import { listPosts, search, sortSelector } from './selectors.js';


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
        if(sortSelector.value === "true") {
            upOrDown = true;
        }
        sortPost(data, 'title', upOrDown);
    })
})