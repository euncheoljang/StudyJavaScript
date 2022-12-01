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
  event.stopPropagation(); // default event가 막니는것은 아님, 조상 엘리먼트만 막음
  console.log("Clicked BUTTON");
  console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// // 리스너가 많아서 별로임
// listItems.forEach(listItem => {
//   listItem.addEventListener("click", event => {
//     event.target.classList.toggle("highlight");
//   });
// });

// 효율적인 방법
// list.addEventListener("click", event => {
//   // list에 이벤트리스너를 등록해도 target은 실제 클릭된 부분인 li를 가리킨다
//   event.target.classList.toggle("highlight");
// });

// 단점 복잡해지면 어려움
list.addEventListener("click", event => {
  // // currentTarget은 리스너가 적용된 요소를 참조함
  // console.log(event.currentTarget);

  // 가장 가까운 li를 찾음 클릭된 target이 li이더라도 li를 찾음
  event.target.closest("li").classList.toggle("highlight");
});

// 전파여부는 bubble 프로퍼티로 확인 가능

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