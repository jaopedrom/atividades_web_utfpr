import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import {
  FilmeBuscaQuerySchema,
  FilmeParamsSchema,
  OmdbResponseSchema,
  ErroSchema,
  FilmeBuscaResultadoSchema,
} from '../../schemas';
import { buscarFilmeId, buscarFilmesPorTermo, listarFilmesExterno } from '../../services/filme.service';

const filmesRoutes: FastifyPluginAsyncZod = async (fastify) => {
  // retorno lista de filmes
  fastify.get('/', {
    schema: {
      tags: ['filmes'],
      summary: 'Lista filmes padrão',
      response: {
        200: OmdbResponseSchema,
        500: ErroSchema,
      },
    },
  }, async (request, reply) => {
    try {
      const filmes = await listarFilmesExterno();
      return filmes;
    } catch (error) {
      request.log.error(error);
      return reply.code(500).send({ erro: 'Erro ao buscar a lista de filmes' });
    }
  });

  // busca de filme por termo
  fastify.get('/busca', {
    schema: {
      tags: ['filmes'],
      summary: 'Busca filmes por termo (query parameters)',
      querystring: FilmeBuscaQuerySchema,
      response: {
        200: FilmeBuscaResultadoSchema,
        500: ErroSchema,
      },
    },
  }, async (request, reply) => {
    const { termo, pagina, limite } = request.query;

    try {
      const filmes = await buscarFilmesPorTermo(termo, Number(pagina), Number(limite));
      return filmes;
    } catch (error) {
      request.log.error(error);
      return reply.code(500).send({ erro: 'Erro ao buscar filmes' });
    }
  });

  // retorno de um filme pelo id
  fastify.get('/:id', {
    schema: {
      tags: ['filmes'],
      summary: 'Busca um filme pelo ID',
      params: FilmeParamsSchema,
      response: {
        200: OmdbResponseSchema,
        500: ErroSchema,
      },
    },
  }, async (request, reply) => {
    try {
      const filme = await buscarFilmeId(request.params.id);
      return filme;
    } catch (error) {
      request.log.error(error);
      return reply.code(500).send({ erro: 'Erro ao buscar o filme' });
    }
  });
};

export default filmesRoutes;