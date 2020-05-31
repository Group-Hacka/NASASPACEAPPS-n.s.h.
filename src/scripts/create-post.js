export const createPost = (post) => `
<li class="card-post">
  <figure class="card">
    <img src="${post.links[0].href}" class="card-image">
    <figcaption class="card-title">${post.data[0].title}</figcaption>
  </figure>
</li>
`;

export function buildHTML(parentElement, posts) {
  let html = '';
  for (let i of posts) {
    html += createPost(i);
  }
  parentElement.innerHTML = html;
}
