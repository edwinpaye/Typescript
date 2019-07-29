import {DefaultCrudRepository} from '@loopback/repository';
import {Universidades} from '../models';
import {AbcdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UniversidadesRepository extends DefaultCrudRepository<
  Universidades,
  typeof Universidades.prototype.id
> {
  constructor(
    @inject('datasources.abcdb') dataSource: AbcdbDataSource,
  ) {
    super(Universidades, dataSource);
  }
}
