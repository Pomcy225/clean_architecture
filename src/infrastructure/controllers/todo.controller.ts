import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateTodoUseCase } from '../../application/use-cases/create-todo.usecase';
import { GetTodosUseCase } from '../../application/use-cases/get-todos.usecase';

@Controller('todos')
export class TodoController {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly getTodosUseCase: GetTodosUseCase,
  ) {}

  @Post()
  async createTodo(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.createTodoUseCase.execute(title, description);
  }

  @Get()
  async getTodos() {
    return this.getTodosUseCase.execute();
  }
}