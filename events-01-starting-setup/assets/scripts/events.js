const button = document.querySelector("button");

// button.onclick = function() {

// };

const buttonClickHandler = () => {
  alert("Button was clicked!");
}

const anotherButtonClickHandler = () => {
  console.log("Thie was clicked!");
};

// // 오버라이드해서 어나더 핸들러만 실행됨
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// 다중으로 리스너 가능
button.addEventListener("click", buttonClickHandler);

setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000);