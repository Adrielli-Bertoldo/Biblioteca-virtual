import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRespository";


export class LivroController implements LivroRepository {
    listarTodos(): Livro[] {
        throw new Error("Method not implemented.");
    }
    listarPorId(id: number): Livro | undefined {
        throw new Error("Method not implemented.");
    }
    cadastrar(livro: Livro): void {
        throw new Error("Method not implemented.");
    }
    atualizar(id: number, livro: Livro): boolean {
        throw new Error("Method not implemented.");
    }
    deletar(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    buscarPorAno(ano: number): void {
        throw new Error("Method not implemented.");
    }

  
}
