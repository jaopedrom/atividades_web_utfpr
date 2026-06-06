import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import type { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import {
    jsonSchemaTransform,
    jsonSchemaTransformObject,
} from 'fastify-type-provider-zod';
import config from '../config';

async function swaggerPlugin(fastify: FastifyInstance) {
    await fastify.register(fastifySwagger, {
        openapi: {
            openapi: '3.0.0',
            info: {
                title: config.swagger.title,
                description: config.swagger.description,
                version: config.swagger.version,
            },
            servers: [
                {
                    url: config.swagger.serverUrl,
                    description: 'Servidor local',
                },
            ],
            tags: [
                { name: 'status', description: 'Status do servidor' },
                { name: 'filmes', description: 'Filmes' },
            ],
        },
        transform: jsonSchemaTransform,
        transformObject: jsonSchemaTransformObject,
    });

    await fastify.register(fastifySwaggerUi, {
        routePrefix: config.swagger.routePrefix,
    });
}

export default fp(swaggerPlugin, {
    name: 'swagger',
});
