const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.responseType = "json";

xhr.onload = function() {
    // const listOfPosts = JSON.parse(xhr.response);
    const listOfPosts = xhr.response;
    for (const post of listOfPosts) {
        const posetEl = document.importNode(postTemplate.content, true)
        posetEl.querySelector("h2").textContent = post.title.toUpperCase();
        posetEl.querySelector("p").textContent = post.body;
        listElement.append(posetEl);
    }

};

xhr.send();

