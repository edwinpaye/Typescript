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
import {Universidades} from '../models';
import {UniversidadesRepository} from '../repositories';

export class UniversidadesController {
  constructor(
    @repository(UniversidadesRepository)
    public universidadesRepository : UniversidadesRepository,
  ) {}

  @post('/universidades', {
    responses: {
      '200': {
        description: 'Universidades model instance',
        content: {'application/json': {schema: {'x-ts-type': Universidades}}},
      },
    },
  })
  async create(@requestBody() universidades: Universidades): Promise<Universidades> {
    return await this.universidadesRepository.create(universidades);
  }

  @get('/universidades/count', {
    responses: {
      '200': {
        description: 'Universidades model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Universidades)) where?: Where,
  ): Promise<Count> {
    return await this.universidadesRepository.count(where);
  }

  @get('/universidades', {
    responses: {
      '200': {
        description: 'Array of Universidades model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Universidades}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Universidades)) filter?: Filter,
  ): Promise<Universidades[]> {
    return await this.universidadesRepository.find(filter);
  }

  @patch('/universidades', {
    responses: {
      '200': {
        description: 'Universidades PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() universidades: Universidades,
    @param.query.object('where', getWhereSchemaFor(Universidades)) where?: Where,
  ): Promise<Count> {
    return await this.universidadesRepository.updateAll(universidades, where);
  }

  @get('/universidades/{id}', {
    responses: {
      '200': {
        description: 'Universidades model instance',
        content: {'application/json': {schema: {'x-ts-type': Universidades}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Universidades> {
    return await this.universidadesRepository.findById(id);
  }

  @patch('/universidades/{id}', {
    responses: {
      '204': {
        description: 'Universidades PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() universidades: Universidades,
  ): Promise<void> {
    await this.universidadesRepository.updateById(id, universidades);
  }

  @put('/universidades/{id}', {
    responses: {
      '204': {
        description: 'Universidades PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() universidades: Universidades,
  ): Promise<void> {
    await this.universidadesRepository.replaceById(id, universidades);
  }

  @del('/universidades/{id}', {
    responses: {
      '204': {
        description: 'Universidades DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.universidadesRepository.deleteById(id);
  }
}
