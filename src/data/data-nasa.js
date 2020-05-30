export function getDataNasa () {
    return fetch('https://images-assets.nasa.gov/recent.json').then(response => response.json());
}