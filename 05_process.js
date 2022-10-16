const process = require("process");

process.on("exit", (code) => {
  // 노드 프로세스가 종료될때
  console.log("exit 이벤트 리스너", code);
});

// process.exit(); 아래에 존재하는 코드를 실행하지 않음

process.on("beforeExit", (code) => {
  // 이벤트 루프 작업이 종료되고, 노드 프로세스가 종료되기 직전
  console.log("beforeExit 이벤트 리스너", code);
});

console.log("출력");

// 출력 결과:
// 출력
// beforeExit 이벤트 리스너 0
// exit 이벤트 리스너 0
