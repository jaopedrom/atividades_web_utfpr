import { z } from "zod/v4";
import { ErroSchema } from "../schemas/common.schema";
import { OmdbResponseSchema, OmdbSearchResultSchema } from "../schemas/filme.schema";

export type Erro = z.infer<typeof ErroSchema>;
export type OmdbResponse = z.infer<typeof OmdbResponseSchema>;
export type OmdbSearchResult = z.infer<typeof OmdbSearchResultSchema>;