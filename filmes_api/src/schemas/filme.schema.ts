import { z } from 'zod/v4';

// schema para cada item retornado dentro do array
export const OmdbSearchResultSchema = z.object({
    Title: z.string().describe('Título do filme, série ou jogo retornado pela API'),
    Year: z.string().describe('Ano de lançamento da mídia'),
    imdbID: z.string().describe('ID único do título no IMDb'),
    Type: z.string().describe('Tipo de mídia (ex: movie, series, game)'),
    Poster: z.string().url().describe('URL da imagem do pôster da mídia'),
});

// schema para a resposta principal da OMDb API
export const OmdbResponseSchema = z.object({
    Search: z.array(OmdbSearchResultSchema).describe('Lista de resultados da busca'),
    totalResults: z.string().describe('Número total de resultados (retornado como string pela API)'),
    Response: z.string().describe('Status da resposta da API ("True" ou "False")'),
});

// schema para os detalhes de um filme
export const OmdbMovieDetailSchema = z.record(z.string(), z.unknown()).describe('Detalhes do filme retornado pela OMDb API');

// schema para parâmetros de rota
export const FilmeParamsSchema = z.object({
    id: z.string().describe('ID único do título no IMDb')
});

// schema para query de busca
export const FilmeBuscaQuerySchema = z.object({
    q: z.string().optional().describe('Termo para a busca de filmes'),
    pagina: z.string().optional().describe('Página dos resultados'),
    limite: z.string().optional().describe('Limite de itens (opcional)')
});

// schema para o resultado da busca por termo
export const FilmeBuscaResultadoSchema = z.object({
    q: z.string().describe('Termo buscado'),
    pagina: z.number().describe('Página atual'),
    limite: z.number().describe('Limite por página'),
    totalResults: z.number().describe('Total de resultados na API'),
    filmes: z.array(OmdbSearchResultSchema).describe('Lista de filmes retornados'),
});