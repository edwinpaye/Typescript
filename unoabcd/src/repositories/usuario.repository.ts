import {DefaultCrudRepository} from '@loopback/repository';
import {Usuario} from '../models';
import {AbcdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id
> {
  constructor(
    @inject('datasources.abcdb') dataSource: AbcdbDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
