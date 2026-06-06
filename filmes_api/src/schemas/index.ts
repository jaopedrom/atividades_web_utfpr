import { z } from 'zod/v4';
import { ErroSchema } from './common.schema';
import { OmdbResponseSchema, OmdbSearchResultSchema, FilmeParamsSchema, FilmeBuscaQuerySchema, FilmeBuscaResultadoSchema } from './filme.schema';

z.globalRegistry.add(ErroSchema, { id: 'Erro' });
z.globalRegistry.add(OmdbResponseSchema, { id: 'OmdbResponse' });
z.globalRegistry.add(OmdbSearchResultSchema, { id: 'OmdbSearchResult' });

export {
    ErroSchema,
    OmdbResponseSchema,
    OmdbSearchResultSchema,
    FilmeParamsSchema,
    FilmeBuscaQuerySchema,
    FilmeBuscaResultadoSchema,
};
