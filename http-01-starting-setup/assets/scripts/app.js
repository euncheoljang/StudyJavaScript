const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something went wrong!"));
      }
      // const listOfPosts = JSON.parse(xhr.response);
    };

    //
    xhr.onerror = function () {
      reject(new Error("Faild to send request!"));
    }
    
    xhr.send(JSON.stringify(data));
  });

  return promise;
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/pos"
    );
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
      const posetEl = document.importNode(postTemplate.content, true);
      posetEl.querySelector("h2").textContent = post.title.toUpperCase();
      posetEl.querySelector("p").textContent = post.body;
      posetEl.querySelector("li").id = post.id;
      listElement.append(posetEl);
    }
  }
  catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    titile: title,
    body: content,
    userId: userId,
  };

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enterdTitle = event.currentTarget.querySelector("#title").value;
  const enterdContent = event.currentTarget.querySelector("#content").value;
  createPost(enterdTitle, enterdContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});
