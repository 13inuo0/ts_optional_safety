let user: { name: string; readonly age: number } = { name: "철수", age: 20 };

user.name = "영희";
user.age = 30;
// readonly를 붙인 뒤 age의 값을 변경하려 하면 오류발생.
console.log(user);
