import { TodoRepository } from 'src/application/repositories/todoRepository.interface';
import { Todo } from '../../domain/entities/todo.entity';

export class GetTodosUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }
}
