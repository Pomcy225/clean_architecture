import { TodoRepository } from 'src/application/repositories/todoRepository.interface';
import { Todo } from '../../domain/entities/todo.entity';

export class GetTodoByIdUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(id: string): Promise<Todo> {
    return this.todoRepository.findById(id);
  }
}
