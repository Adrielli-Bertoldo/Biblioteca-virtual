import readlinesync = require("readline-sync");
import {Livro} from "./src/model/Livro";

export function main() {

    let opcao: number;

    while (true) {
    
    console.log("\n---- MENU BIBLIOTECA ----");
    console.log("1 - Cadastrar livros");
    console.log("2 - Listar livros");
    console.log("3 - Atualizar livros");
    console.log("4 - Apagar livros")
    console.log("0 - Sair");    
    opcao = readlinesync.questionInt("");

    if (opcao === 0) {
        console.log("Biblioteca virtual - Amplie sua inteligencia...");
        sobre();
        process.exit(0);
    }
    
    switch (opcao) {
        case 1:
            console.log("\n\nCadastrar Livros\n\n");
            break;
        case 2:
            console.log("\n\nListar livros\n\n");
            break;
        case 3:
            console.log("\n\nAtualizar livros\n\n");
            break;
        case 4:
            console.log("\n\nApagar livros\n\n");
            break;
        case 0:
            console.log("Saindo do sistema...");
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
        }

    }
 
}
function sobre(): void {
    console.log("Biblioteca virtual - Amplie sua inteligencia...");
    console.log("Desenvolvido por: Adrielli Bertoldo");
    console.log("GitHub: https://github.com/Adrielli-Bertoldo");
}

main();


