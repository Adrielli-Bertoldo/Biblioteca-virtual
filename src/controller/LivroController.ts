import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRespository";

export class LivroController implements LivroRepository {

    private listaLivros: Array<Livro> = new Array<Livro>();
    private numero: number = 0;

    /* Listar todos os livros */
    listarTodos(): Livro[] {
        for (let livro of this.listaLivros) {
            livro.visualizar();
        }
        return this.listaLivros;
    }

    /* Procurar livro por número */
    procurarPorNumero(numero: number): void {
        let buscaLivro = this.buscarNoArray(numero);

        if (buscaLivro != null) {
            buscaLivro.visualizar();
        } else {
            console.log("\nO livro número: " + numero + " não foi encontrado!");
        }
    }

    /* Procurar livro por título */
    procurarPorTitulo(titulo: string): void {
        let encontrado = false;

        for (let livro of this.listaLivros) {
            if (livro.titulo.toLowerCase().includes(titulo.toLowerCase())) {
                livro.visualizar();
                encontrado = true;
            }
        }

        if (!encontrado) {
            console.log("\nNenhum livro com o título '" + titulo + "' foi encontrado.");
        }
    }

    /* Atualizar livro */
    atualizar(numero: number, livro: Livro): boolean {
        let buscaLivro = this.buscarNoArray(numero);

        if (buscaLivro != null) {
            this.listaLivros[this.listaLivros.indexOf(buscaLivro)] = livro;
            console.log("\nO Livro número: " + numero + " foi atualizado com sucesso!");
            return true;
        } else {
            console.log("\nO Livro número: " + numero + " não foi encontrado!");
            return false;
        }
    }

    /* Deletar livro */
    deletar(numero: number): boolean {
        let buscaLivro = this.buscarNoArray(numero);

        if (buscaLivro != null) {
            this.listaLivros.splice(this.listaLivros.indexOf(buscaLivro), 1);
            console.log("\nO Livro número: " + numero + " foi deletado com sucesso!");
            return true;
        } else {
            console.log("\nO Livro número: " + numero + " não foi encontrado!");
            return false;
        }
    }

    /* Gerar número do livro */
    public gerarNumero(): number {
        return ++this.numero;
    }

    /* Buscar livro no array por número */
    private buscarNoArray(numero: number): Livro | null {
        for (let livro of this.listaLivros) {
            if (livro.numero === numero)
                return livro;
        }
        return null;
    }
}


