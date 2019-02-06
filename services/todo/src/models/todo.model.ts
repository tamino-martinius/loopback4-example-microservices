import {Entity, property, model, belongsTo} from '@loopback/repository';
// import {TodoList} from './todo-list.model';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
  })
  isComplete: boolean;

  // @belongsTo(() => TodoList)
  @property({
    type: 'number',
    required: true,
  })
  todoListId: number;

  getId() {
    return this.id;
  }

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
