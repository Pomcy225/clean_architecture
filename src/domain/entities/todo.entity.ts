export class Todo {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public isCompleted: boolean = false,
  ) {}
}
