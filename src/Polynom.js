import { Term } from "./Term.js";

export class Polynom {
  constructor(terms) {
    this.terms = terms;
  }

  diff() {
    const result = this.terms
      .map(t => t.diff())
      .filter(t => t.coef !== 0);

    return new Polynom(result);
  }

  toString() {
    if (this.terms.length === 0) return "0";

    return this.terms
      .map(t => t.toString())
      .filter(s => s !== "")
      .join(" + ")
      .replace(/\+\s-\s?/g, "- ");
  }
}
