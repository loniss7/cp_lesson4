import { Term } from "./Term.js";
import { Polynom } from "./Polynom.js";

export function parsePolynom(input) {
  const clean = input.replace(/\s+/g, "");
  const parts = clean.match(/[+-]?[^+-]+/g);

  const terms = parts.map(p => {
    if (p.includes("x")) {
      const [coefPart, powerPart] = p.split("x");

      const coef =
        coefPart === "" || coefPart === "+" ? 1 :
        coefPart === "-" ? -1 :
        Number(coefPart);

      const power = powerPart?.startsWith("^")
        ? Number(powerPart.slice(1))
        : 1;

      return new Term(coef, power);
    } else {
      return new Term(Number(p), 0);
    }
  });

  return new Polynom(terms);
}
