// @flow

export default class Class {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  action() {
    return `I'm class with name: ${this.name} and i am able to perform an action!`;
  }
}
