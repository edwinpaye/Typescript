import {DefaultCrudRepository} from '@loopback/repository';
import {Roles} from '../models';
import {AbcdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RolesRepository extends DefaultCrudRepository<
  Roles,
  typeof Roles.prototype.id
> {
  constructor(
    @inject('datasources.abcdb') dataSource: AbcdbDataSource,
  ) {
    super(Roles, dataSource);
  }
}
