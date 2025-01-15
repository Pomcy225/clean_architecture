import { TodoRepository } from 'src/application/repositories/todoRepository.interface';
import { Todo } from '../../domain/entities/todo.entity';
import { CreateTodoDTO } from '../dtos/create-todo.dto';

export class CreateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(createTodoDTO: CreateTodoDTO): Promise<Todo> {
    const todo = new Todo(
      Date.now().toString(),
      createTodoDTO.title,
      createTodoDTO.description,
    );
    return this.todoRepository.create(todo);
  }
}
