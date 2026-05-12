let user: {
  //   name: string;
  //   gender:string;
  //   sddress:string;
  [key: string]: string | number | (() => string); //유니언으로 넘버, 함수 등 가능
} = {
  name: "철수",
  gender: "male",
  address: "seoul",
};

// this 사용
interface Person {
  name: string;
  printName: () => string;
//   [key: string]: string | (() => string); //위와 같이 다 작성하게 되면 인덱스 시그니처를 사용하지 않는것과 같은 상태.
}

const person: Person = {
  name: "John",
  printName() {
    return this.name; //에러 발생 가능성 -> name에 타입 지정으로 해결
  },
};

person.printName(); //에러 발생 가능성 -> printName() 타입 지정
