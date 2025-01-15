import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateTodoUseCase } from '../../application/use-cases/create-todo.usecase';
import { GetTodosUseCase } from '../../application/use-cases/get-todos.usecase';
import { GetTodoByIdUseCase } from 'src/application/use-cases/get-one-todo.usecase';
import { CreateTodoDTO } from 'src/application/dtos/create-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly getTodosUseCase: GetTodosUseCase,
    private readonly getTodoByIdUseCase: GetTodoByIdUseCase,
  ) {}

  @Post()
  async createTodo(@Body() createTodoDTO: CreateTodoDTO) {
    return this.createTodoUseCase.execute(createTodoDTO);
  }

  @Get()
  async getTodos() {
    return this.getTodosUseCase.execute();
  }
  @Get(':id')
  async getTodoById(@Body('id') id: string) {
    return this.getTodoByIdUseCase.execute(id);
  }
}