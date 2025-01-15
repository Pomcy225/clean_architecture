
import { TodoRepository } from 'src/domain/repositories/todoRepository.interface';
import { Todo } from '../../domain/entities/todo.entity';

export class GetTodosUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }
}
