import {Entity, model, property} from '@loopback/repository';

@model()
export class Universidades extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  ubicacion?: string;

  @property({
    type: 'string',
  })
  facultades?: string;

  @property({
    type: 'string',
  })
  carreras?: string;


  constructor(data?: Partial<Universidades>) {
    super(data);
  }
}
