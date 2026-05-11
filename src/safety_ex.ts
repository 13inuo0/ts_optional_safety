function greet(user: { name: string; age?: number }) {
  console.log(`Hello, ${user.name}`);
  console.log(`You are ${user.age} years old`);
//   "You are undefined years old" 출력
  // age가 undefined일 수 있으므로 체크 후 사용
  if (user.age !== undefined) {
    console.log(`You are ${user.age} years old`);
  } else {
    console.log("Age is not provided");
  }
}

greet({
  name: "철수",
});
// 옵셔널 타입은 매개변수의 객체타입에 관한 안정성만 체크.
// undefined로 인한 예기치 못한 결과까진 체크X


