import readlinesync = require("readline-sync");

export abstract class Livro {
  private _numero: number;
  private _titulo: string;
  private _autor: string;
  private _ano: number;
  private _tipo: any;

  constructor(numero: number, titulo: string, autor: string, ano: number, tipo: number) {
    this._numero = numero;
    this._titulo = titulo;
    this._autor = autor;
    this._ano = ano;
    this._tipo = tipo;
  }

public get numero() {
    return this._numero;
}

public set numero(numero: number) {
    this._numero = numero;
}

public get titulo() {
    return this._titulo;
}

public set titulo(titulo: string) {
    this._titulo = titulo;
}

public get autor() {
    return this._autor;
}

public set autor(autor: string) {
    this._autor = autor;
}

public get ano() {
    return this._ano;
}

public set ano(ano: number) {
    this._ano = ano;
}

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Livro Simples";
                break;
            case 2:
                tipo = "Livro Fisico";
                break;
      }
        console.log("\n*****************************************************");
        console.log("MENU BIBLIOTECA:");
        console.log("Número do livro: " + this._numero);
        console.log("Título do Livro: " + this._titulo);
        console.log("Autor do Livro: " + this.autor);
        console.log("Ano do Livro: " + this._ano);
        console.log("Tipo: " + tipo);
        console.log("*****************************************************\n");
        
    }
  }
