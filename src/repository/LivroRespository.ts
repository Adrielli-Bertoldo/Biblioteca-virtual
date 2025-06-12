import { Livro } from "../model/Livro";

export interface LivroRepository {

  // CRUD de Livro
  listarTodos(): Livro[];
  listarPorId(id: number): Livro | undefined;
  cadastrar(livro: Livro): void;
  atualizar(id: number, livro: Livro): boolean;
  deletar(id: number): boolean;
  
  // Método específico de Biblioteca
  buscarPorAno(ano: number): void;
}
