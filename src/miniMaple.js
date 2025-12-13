import { parsePolynom } from "./parse.js"

class MiniMaple {
    diff(polynomStr) {
        return parsePolynom(polynomStr).diff().toString();
    }
}

export { MiniMaple };