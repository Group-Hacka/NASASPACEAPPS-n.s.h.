import { getDataNasa } from '../data/data-nasa.js';

getDataNasa().then(response => {
    console.log(response.collection.items);
})