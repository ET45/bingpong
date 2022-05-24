export default class Ball {
  constructor(ballElem) {
    this.ballElem = ballElem;
    this.reset;
  }

  get x() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
  }

  set x(value) {
    this.ballElem.style.setProperty("--x", value);
  }

  get y() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
  }

  set y(value) {
    this.ballElem.style.setProperty("--y", value);
  }

  reset() {
    this.x = 50;
    this.y = 50;
  }

  update(delta) {
    this.x = 5;
    this.y = 15;
  }
}
