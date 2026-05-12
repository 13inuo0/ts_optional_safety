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
