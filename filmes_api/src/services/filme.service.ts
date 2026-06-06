import config from "../config";
import { OmdbResponse } from "../types";

const BASE_URL = 'https://www.omdbapi.com';

// listar filmes
export const listarFilmesExterno = async () => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    try {
        const response = await fetch(`${BASE_URL}?apikey=${config.omdbApiKey}&s=batman&type=movie`, {
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return await response.json() as OmdbResponse;

    } finally {
        clearTimeout(timeout);
    }
}

// GET /filmes/:id
export const buscarFilmeId = async (id: string) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    try {
        const response = await fetch(`${BASE_URL}?apikey=${config.omdbApiKey}&i=${id}`, {
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return await response.json() as OmdbResponse;
    } finally {
        clearTimeout(timeout);
    }
}

// GET /busca?q=valor
export const buscarFilmesPorTermo = async (termo = '', pagina = 1, limite = 10) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    try {
        const response = await fetch(
            `${BASE_URL}?apikey=${config.omdbApiKey}&s=${encodeURIComponent(termo)}&type=movie&page=${pagina}`,
            { signal: controller.signal }
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json() as OmdbResponse;

        return {
            termo,
            pagina,
            limite,
            totalResults: Number(data.totalResults),
            filmes: data.Search.slice(0, limite), // limite aplicado localmente
        };
    } finally {
        clearTimeout(timeout);
    }
};