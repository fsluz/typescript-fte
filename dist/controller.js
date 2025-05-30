"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = Controller;
const parImpar_1 = require("./parImpar");
function Controller(action, rl) {
    switch (action) {
        case 1:
            console.log("outro trabaalho");
            break;
        case 2:
            (0, parImpar_1.parImpar)(rl);
            break;
        default:
            console.log("Escolha alguma opção...");
    }
}
