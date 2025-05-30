import * as readline from "readline";
import { parImpar } from "./parImpar";

export function Controller(action: Number, rl: readline.Interface) {
    switch (action) {
        case 1:
            console.log("outro trabaalho");
            break;
        case 2:
            parImpar(rl);
            break;
        default:
            console.log("Escolha alguma opção...");

    }
}