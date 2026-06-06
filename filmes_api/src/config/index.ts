export interface AppConfig {
    port: number;
    host: string;
    omdbApiKey: string;
    swagger: {
        title: string;
        description: string;
        version: string;
        routePrefix: string;
        serverUrl: string;
    };
}

const config: AppConfig = {
    port: Number(process.env.PORT) || 8080,
    host: process.env.HOST || '0.0.0.0',
    omdbApiKey: process.env.OMDB_API_KEY || '',
    swagger: {
        title: 'API externa de filmes',
        description: 'API REST simples com Fastify',
        version: '1.0.0',
        routePrefix: '/documentation',
        serverUrl: process.env.SERVER_URL || 'http://localhost:8080',
    },
};

export default config;
