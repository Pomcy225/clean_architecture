import { Todo } from '../../domain/entities/todo.entity';

export interface TodoRepository {
  create(todo: Todo): Promise<Todo>;
  findAll(): Promise<Todo[]>;
  findById(id: string): Promise<Todo | null>;
  update(todo: Todo): Promise<Todo>;
  delete(id: string): Promise<void>;
}
