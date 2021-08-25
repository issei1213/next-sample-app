export interface UserName {
  firstName: string;
  lastName: string;
}

export interface IUser extends UserName {
  age?: number;
  getUserInfo(): string;
  updateUser({firstName, lastName}: UserName): string;
}

export default class User implements IUser {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getUserInfo(): string {
    return `名前: ${this.firstName} ${this.lastName}、年齢: ${this.age}`
  }

  updateUser({firstName, lastName}: UserName): string {
    this.firstName = firstName
    this.lastName = lastName
    return `名前: ${this.firstName} ${this.lastName}、年齢: ${this.age}`

  }
}