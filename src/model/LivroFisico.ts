import { Livro } from "./Livro";

export class LivroFisico extends Livro {
  private _quantidade: number;

  constructor(numero: number, titulo: string, autor: string, ano: number, quantidade: number) {
    super(numero, titulo, autor, ano, 2); // 2 para Livro Fisico
    this._quantidade = quantidade;
  }

  public get quantidade(): number {
    return this._quantidade;
  }

  public set quantidade(qtd: number) {
    this._quantidade = qtd;
  }

  // Método específico: controla empréstimo
  public emprestar(): boolean {
    if (this._quantidade <= 0) {
      console.log("\nNenhum exemplar disponível para empréstimo.");
      return false;
    }

    this._quantidade -= 1;
    console.log("\nLivro emprestado com sucesso.");
    return true;
  }
}

// Teste simples:
const livro = new LivroFisico(1, "Dom Quixote", "Miguel de Cervantes", 1605, 2);
console.log(`Quantidade inicial: ${livro.quantidade}`);
livro.emprestar();
console.log(`Quantidade após empréstimo: ${livro.quantidade}`);

