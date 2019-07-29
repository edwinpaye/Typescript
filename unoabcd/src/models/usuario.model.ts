import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
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
  apellido_paterno?: string;

  @property({
    type: 'string',
  })
  apellido_materno?: string;

  @property({
    type: 'string',
  })
  id_rol?: string;

  @property({
    type: 'string',
  })
  email?: string;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}
