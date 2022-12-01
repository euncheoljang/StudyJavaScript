// const buttons = document.querySelectorAll("button");
const button = document.querySelector("button");

// button.onclick = function() {

// };

// const buttonClickHandler = event => {
//   // event.target.disabled = true;
//   console.log(event);
// };

// const anotherButtonClickHandler = () => {
//   console.log("Thie was clicked!");
// };

// // 오버라이드해서 어나더 핸들러만 실행됨
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// 다중으로 리스너 가능
// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener("click", buttonClickHandler);
// });
// buttons.forEach(btn => {
//   btn.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", event => {
//   console.log(event);
// });

// let curElementNumber = 0;

// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;

//     if (distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         curElementNumber++;
//         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//         document.body.append(newDataElement);
//     }
// }

// window.addEventListener('scroll', scrollHandler);

const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log(event);
});


// 기본적으로 이벤트는 버블링으로 실행 (안에서 밖으로, button -> div)
const div = document.querySelector("div");

div.addEventListener("click", event => {
  console.log("Clicked DIV");
  console.log(event);
});

button.addEventListener("click", event => {
  event.stopPropagation();
  console.log("Clicked BUTTON");
  console.log(event);
});


// // 캡처링 이벤트 리스너
// const div = document.querySelector("div");

// div.addEventListener("click", event => {
//   console.log("Clicked DIV");
//   console.log(event);
//   // 조상을 먼저 실행하고 싶으면 true 넣기
// }, true);

// button.addEventListener("click", event => {
//   console.log("Clicked BUTTON");
//   console.log(event);
// });