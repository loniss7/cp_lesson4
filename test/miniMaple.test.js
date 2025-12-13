import { MiniMaple } from "../src/miniMaple";

const m = new MiniMaple();

test("constant", () => {
    expect(m.diff("5", "x")).toBe("0");
});

test("negative constant", () => {
    expect(m.diff("-7", "x")).toBe("0");
});

test("variable", () => {
    expect(m.diff("x", "x")).toBe("1");
});

test("linear term", () => {
    expect(m.diff("3x", "x")).toBe("3");
});

test("negative linear term", () => {
    expect(m.diff("-x", "x")).toBe("-1");
});

test("power 2", () => {
    expect(m.diff("x^2", "x")).toBe("2x");
});

test("power 3", () => {
    expect(m.diff("x^3", "x")).toBe("3x^2");
});

test("coef and power", () => {
    expect(m.diff("4x^3", "x")).toBe("12x^2");
});

test("simple polynom", () => {
    expect(m.diff("x + 1", "x")).toBe("1");
});

test("polynom with minus", () => {
    expect(m.diff("x - 1", "x")).toBe("1");
});

test("full polynom", () => {
    expect(m.diff("3x^2 - x + 5", "x")).toBe("6x - 1");
});

test("full polynom", () => {
    expect(m.diff("4x^2 - 3x + 5x^5", "x")).toBe("8x - 3 + 25x^4");
});

test("spaces", () => {
    expect(m.diff("  3x^2   -   x +  5 ", "x")).toBe("6x - 1");
});
