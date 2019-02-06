import {Entity, model, property} from '@loopback/repository';

@model()
export class Account extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  customerNumber: string;

  @property({
    type: 'number',
    required: true,
  })
  balance: number;

  @property({
    type: 'string',
    required: true,
  })
  branch: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'number',
    required: true,
  })
  avgBalance: number;

  @property({
    type: 'number',
    required: true,
  })
  minimumBalance: number;

  getId() {
    return this.id;
  }

  constructor(data?: Partial<Account>) {
    super(data);
  }
}
