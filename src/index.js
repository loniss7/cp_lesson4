import { MiniMaple } from "./miniMaple.js";

const maple = new MiniMaple();

document.addEventListener("DOMContentLoaded", () => {
    const exprInput = document.getElementById("e");
    const varInput = document.getElementById("v");
    const button = document.getElementById("b");
    const result = document.getElementById("result");

    button.onclick = () => {
        try {
            const expr = exprInput.value;
            const variable = varInput.value;

            result.textContent = maple.diff(expr, variable);
        } catch (err) {
            result.textContent = err.message;
        }
    };
});