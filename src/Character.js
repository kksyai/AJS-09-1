export default class Chatacter {
  get attack() {
    return this._attack
  }

  set attack(value) {
    this._attack = value * (1 - ((this.distance - 1) * 0.1));
  }

  get stoned() {
    return this._attack
  }

  set stoned(value) {
    this._attack = value - Math.log2(value) * 5;
  }
}
