const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData => {
    setTimeout(() => {
      console.log(posData);
    }, 2000);
  }, error => {
    console.log(error);
  });

  // 콜백함수가 실행되기 위해서는 항상 메시지큐와 이벤트 루프를 통과해야한다. 
  // 그래서 getting position... 이 먼저 실행
  setTimeout(() => {
    console.log("Timer done!");
  }, 0);
  console.log("Getting position...");
}

// trackUserHandler가 callback function임
// 리스너는 브라우저가 관리
button.addEventListener('click', trackUserHandler);

// let result = 0
// for (let i= 0;  i < 9999999999; i++) {
//   result =+ i;
// }

// console.log(result);