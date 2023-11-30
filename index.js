// https://selosele.github.io/2020/11/23/nodejs-create-webserver/
// 기본 설정
const express = require("express"); // require("http")가 아님, http 모듈만 사용하는 것에는 한계가 있다.
const app = express();
const PORT = 3000;

// 정적 파일 불러오기 - 정적 파일이 위치할 경로를 public이라 많이들 함
// cf. __dirname 관련 참고 https://reload1bronze.tistory.com/97
// app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + '/public/generous'));

// 라우팅 정의
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/generous/index.html");
});

// 서버 실행 - node index.js 명령으로 서버 실행 시 터미널에 출력
// cf. JS 백틱 사용 관련 참고 https://hasumang.tistory.com/33
app.listen(PORT, () => {
	console.log(`Listen : ${PORT}`);
});
