import Fastify from 'fastify';
import config from './config';

import swaggerPlugin from './plugins/swagger';
import zodPlugin from './plugins/zod';
import filmesRoutes from './routes/filmes';
import requestLoggerPlugin from './plugins/request-looger';

export const app = Fastify({
  logger: true
});

// registra plugins
app.register(zodPlugin);
app.register(swaggerPlugin);
app.register(requestLoggerPlugin);

// rota raiz
app.get('/', async () => {
  return { mensagem: 'A API de filmes está funcionando!' };
});

// registra rotas
app.register(filmesRoutes);

export const start = async () => {
  try {
    await app.listen({ port: config.port, host: config.host });
    console.log(`Server listening on http://${config.host}:${config.port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};