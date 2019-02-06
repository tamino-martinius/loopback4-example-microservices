import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {TodoList} from '../models';

export class TodoListRepository extends DefaultCrudRepository<
  TodoList,
  typeof TodoList.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: juggler.DataSource) {
    super(TodoList, dataSource);
  }

  public findByTitle(title: string) {
    return this.findOne({where: {title}});
  }
}
