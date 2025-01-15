import { Injectable } from '@nestjs/common';
import { Todo } from '../../domain/entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from '../database/entities/todo.entity';
import { TodoRepository } from 'src/domain/repositories/todoRepository.interface';

@Injectable()
export class TypeOrmTodoRepository implements TodoRepository {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly repository: Repository<TodoEntity>,
  ) {}

  async create(todo: Todo): Promise<Todo> {
    const entity = this.repository.create(todo);
    const savedEntity = await this.repository.save(entity);
    return new Todo(
      savedEntity.id,
      savedEntity.title,
      savedEntity.description,
      savedEntity.isCompleted,
    );
  }

  async findAll(): Promise<Todo[]> {
    const entities = await this.repository.find();
    return entities.map(
      (entity) =>
        new Todo(
          entity.id,
          entity.title,
          entity.description,
          entity.isCompleted,
        ),
    );
  }

  async findById(id: string): Promise<Todo | null> {
    const entity = await this.repository.findOneBy({ id });
    if (!entity) return null;
    return new Todo(
      entity.id,
      entity.title,
      entity.description,
      entity.isCompleted,
    );
  }

  async update(todo: Todo): Promise<Todo> {
    await this.repository.update(todo.id, todo);
    return todo;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
