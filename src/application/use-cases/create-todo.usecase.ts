
import { TodoRepository } from 'src/domain/repositories/todoRepository.interface';
import { Todo } from '../../domain/entities/todo.entity';

export class CreateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(title: string, description: string): Promise<Todo> {
    const todo = new Todo(Date.now().toString(), title, description);
    return this.todoRepository.create(todo);
  }
}
