export class Term {
  constructor(coef, power = 0) {
    this.coef = coef;
    this.power = power;
  }

  diff() {
    if (this.power === 0) return new Term(0, 0);
    return new Term(this.coef * this.power, this.power - 1);
  }

  toString() {
    if (this.coef === 0) return "";

    if (this.power === 0) return `${this.coef}`;
    if (this.power === 1)
      return this.coef === 1 ? "x" :
             this.coef === -1 ? "-x" :
             `${this.coef}x`;

    if (this.coef === 1) return `x^${this.power}`;
    if (this.coef === -1) return `-x^${this.power}`;

    return `${this.coef}x^${this.power}`;
  }
}
