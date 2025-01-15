import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodoController } from './controllers/todo.controller';
import { TypeOrmTodoRepository } from '../domain/repositories/todo.repository';
import { CreateTodoUseCase } from 'src/application/use-cases/create-todo.usecase';
import { GetTodosUseCase } from 'src/application/use-cases/get-todos.usecase';
import { GetTodoByIdUseCase } from 'src/application/use-cases/get-one-todo.usecase';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [
    {
      provide: 'TodoRepository',
      useClass: TypeOrmTodoRepository,
    },
    {
      provide: CreateTodoUseCase,
      useFactory: (todoRepository: TypeOrmTodoRepository) =>
        new CreateTodoUseCase(todoRepository),
      inject: ['TodoRepository'],
    },
    {
      provide: GetTodosUseCase,
      useFactory: (todoRepository: TypeOrmTodoRepository) =>
        new GetTodosUseCase(todoRepository),
      inject: ['TodoRepository'],
    },
    {
      provide: GetTodoByIdUseCase,
      useFactory: (todoRepository: TypeOrmTodoRepository) =>
        new GetTodoByIdUseCase(todoRepository),
      inject: ['TodoRepository'],
    },
  ],
})
export class InfrastructureModule {}
