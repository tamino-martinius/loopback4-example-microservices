import {Entity, model, property} from '@loopback/repository';

@model()
export class Transaction extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  TransactionId?: string;

  @property({
    type: 'date',
    required: true,
  })
  dateTime: Date;

  @property({
    type: 'string',
    required: true,
  })
  accountNo: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'string',
    required: true,
  })
  transactionType: string;
}
