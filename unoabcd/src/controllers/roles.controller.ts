import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Roles} from '../models';
import {RolesRepository} from '../repositories';

export class RolesController {
  constructor(
    @repository(RolesRepository)
    public rolesRepository : RolesRepository,
  ) {}

  @post('/roles', {
    responses: {
      '200': {
        description: 'Roles model instance',
        content: {'application/json': {schema: {'x-ts-type': Roles}}},
      },
    },
  })
  async create(@requestBody() roles: Roles): Promise<Roles> {
    return await this.rolesRepository.create(roles);
  }

  @get('/roles/count', {
    responses: {
      '200': {
        description: 'Roles model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Roles)) where?: Where,
  ): Promise<Count> {
    return await this.rolesRepository.count(where);
  }

  @get('/roles', {
    responses: {
      '200': {
        description: 'Array of Roles model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Roles}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Roles)) filter?: Filter,
  ): Promise<Roles[]> {
    return await this.rolesRepository.find(filter);
  }

  @patch('/roles', {
    responses: {
      '200': {
        description: 'Roles PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() roles: Roles,
    @param.query.object('where', getWhereSchemaFor(Roles)) where?: Where,
  ): Promise<Count> {
    return await this.rolesRepository.updateAll(roles, where);
  }

  @get('/roles/{id}', {
    responses: {
      '200': {
        description: 'Roles model instance',
        content: {'application/json': {schema: {'x-ts-type': Roles}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Roles> {
    return await this.rolesRepository.findById(id);
  }

  @patch('/roles/{id}', {
    responses: {
      '204': {
        description: 'Roles PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() roles: Roles,
  ): Promise<void> {
    await this.rolesRepository.updateById(id, roles);
  }

  @put('/roles/{id}', {
    responses: {
      '204': {
        description: 'Roles PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() roles: Roles,
  ): Promise<void> {
    await this.rolesRepository.replaceById(id, roles);
  }

  @del('/roles/{id}', {
    responses: {
      '204': {
        description: 'Roles DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rolesRepository.deleteById(id);
  }
}
