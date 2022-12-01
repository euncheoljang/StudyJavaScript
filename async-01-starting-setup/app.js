const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(posData => {
    console.log(posData);
  }, error => {
    console.log(error);
  });
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