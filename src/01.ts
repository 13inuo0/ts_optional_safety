const add: { (n1: number, n2: number): number } = function add(n1, n2) {
  return n1 + n2;
};

console.log(add(10, 20));

// const greet1: (name: string) => string = (name) => `Hello,${name}`;
// console.log(greet1("철수"));
// 객체타입으로 시그니처 지정하기
const greet1: {(name:string):string} = (name) => `Hello,${name}`;
console.log(greet1("철수"));