import {Entity, model, property} from '@loopback/repository';

@model()
export class Roles extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<Roles>) {
    super(data);
  }
}
