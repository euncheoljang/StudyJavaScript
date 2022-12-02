const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      }
    ),
      opts;
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition(
//     (posData) => {
//       setTimer(2000).then((data) => {
//         console.log(data, posData);
//       });
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
function trackUserHandler() {
  let positionData;
  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000);
    })
    .catch(err => {
      console.log(err)
      return "on we go..."
    })
    .then((data) => {
      console.log(data, positionData);
    })

  // 콜백함수가 실행되기 위해서는 항상 메시지큐와 이벤트 루프를 통과해야한다.
  // 그래서 getting position... 이 먼저 실행
  setTimer(1000).then(() => {
    console.log("Timer Done!");
  });
  console.log("Getting position...");
}

// trackUserHandler가 callback function임
// 리스너는 브라우저가 관리
button.addEventListener("click", trackUserHandler);

// let result = 0
// for (let i= 0;  i < 9999999999; i++) {
//   result =+ i;
// }

// console.log(result);
