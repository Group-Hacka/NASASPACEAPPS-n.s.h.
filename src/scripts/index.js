export function filterLike(posts, prop, value) {
    return posts.filter((post) => {
        post = post.data[0];
        return post[prop].toLowerCase().includes(value.toLowerCase())
    });
}

export function sortByProp(posts, prop, upOrDown) {
    return posts.sort((current, next) => {
        current = current.data[0];
        next = next.data[0];
        const az = current[prop] > next[prop];
        const za = current[prop] < next[prop];
        const compare = upOrDown ? az : za;
        return compare ? 1 : -1;
    })
}