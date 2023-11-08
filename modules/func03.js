//export default const f1 = (a) => a * a; //錯誤的寫法
const f1 = (a) => a * a;
export default f1

export const f2 = (b) => b*b*b;




export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `${this.name}: ${this.age}`;
  }
  toString() {
    return JSON.stringify(this);
  }
}
const n = 12;
const m = 15;
export { n, m };