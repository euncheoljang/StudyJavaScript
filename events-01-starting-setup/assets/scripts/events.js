const buttons = document.querySelectorAll("button");

// button.onclick = function() {

// };

const buttonClickHandler = event => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("Thie was clicked!");
};

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
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", buttonClickHandler);
});

window.addEventListener("scroll", event => {
  console.log(event);
});

let curElementNumber = 0;

function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;

    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}

window.addEventListener('scroll', scrollHandler);