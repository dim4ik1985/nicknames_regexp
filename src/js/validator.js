export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUsername() {
    const regexp = /^[a-z]+([a-z-_]+[0-9]{0,3})*[a-z]+$/;

    if (regexp.test(this.nickname)) {
      return this.nickname;
    }
    throw new Error('Недопустимый ввод');
  }
}
