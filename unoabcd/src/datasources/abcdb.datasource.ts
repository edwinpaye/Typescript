import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './abcdb.datasource.json';

export class AbcdbDataSource extends juggler.DataSource {
  static dataSourceName = 'abcdb';

  constructor(
    @inject('datasources.config.abcdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
