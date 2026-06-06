import Fastify from 'fastify';
import config from './config';

import swaggerPlugin from './plugins/swagger';
import zodPlugin from './plugins/zod';
import filmesRoutes from './routes/filmes';

export const app = Fastify({
  logger: true
});

// Registrar plugins
app.register(zodPlugin);
app.register(swaggerPlugin);

// Registrar rotas
app.register(filmesRoutes, { prefix: '/filmes' });

export const start = async () => {
  try {
    await app.listen({ port: config.port, host: config.host });
    console.log(`Server listening on http://${config.host}:${config.port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};