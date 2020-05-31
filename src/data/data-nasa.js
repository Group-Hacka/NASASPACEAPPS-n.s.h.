export function getDataNasa() {
    return fetch('https://images-assets.nasa.gov/recent.json').then(response => response.json());
}

export function getImageDate(date) {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=7As68BdpLsEG33zGVMDuuXePs7kb5qUqBEEov5Pj&date=${date}`)
        .then(response => response.json());
}
