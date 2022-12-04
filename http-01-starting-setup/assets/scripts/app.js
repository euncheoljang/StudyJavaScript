const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts");

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.onload = function () {
      resolve(xhr.response);
      // const listOfPosts = JSON.parse(xhr.response);
    };
    xhr.send(JSON.stringify(data));
  });

  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const posetEl = document.importNode(postTemplate.content, true);
    posetEl.querySelector("h2").textContent = post.title.toUpperCase();
    posetEl.querySelector("p").textContent = post.body;
    listElement.append(posetEl);
  }
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        titile: title,
        body: content,
        userId: userId
    };

    sendHttpRequest(
        "POST", 
        "https://jsonplaceholder.typicode.com/posts",
        post
    )
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", event => {
   event.preventDefault();
   const enterdTitle = event.currentTarget.querySelector("#title").value;
   const enterdContent = event.currentTarget.querySelector("#content").value;
   createPost(enterdTitle, enterdContent);
});
