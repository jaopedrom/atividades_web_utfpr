# API de Filmes - OMDb API Integration

Esta é uma API desenvolvida em Node.js com Fastify como parte de uma atividade acadêmica. O projeto tem como objetivo principal consumir dados da [OMDb API](https://www.omdbapi.com/) e disponibilizar rotas para buscar informações sobre filmes aplicando boas práticas de validação, documentação e tipagem estática.

## Tecnologias Utilizadas

- **Node.js** (v20+)
- **Fastify**: Framework web rápido e de baixo overhead.
- **Zod**: Declaração e validação de schemas em TypeScript.
- **fastify-type-provider-zod**: Integração do Zod com o Fastify para validação automática de entrada (rotas) e saída, e inferência de tipos.
- **Swagger (@fastify/swagger & @fastify/swagger-ui)**: Geração automática da documentação da API baseada nos schemas do Zod.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **tsx**: Execução de arquivos TypeScript diretamente no ambiente de desenvolvimento.

## Estrutura do Projeto

```text
src/
├── config/        # Configurações gerais e variáveis de ambiente (OMDb API Key, Port, etc.)
├── plugins/       # Configuração de plugins do Fastify (Swagger, Zod provider)
├── routes/        # Definição das rotas da API (Módulo de filmes)
├── schemas/       # Schemas do Zod para validação de requests/responses e tipagem
├── services/      # Lógica de negócio e comunicação com a API externa (OMDb API)
├── types/         # Definição de tipos TypeScript exportados dos schemas
├── app.ts         # Configuração do Fastify e registro de rotas/plugins
└── server.ts      # Ponto de entrada (entrypoint) que inicializa o servidor
```

## Como Executar o Projeto

1. **Clone e Instalação**
   Certifique-se de que está no diretório do projeto e instale as dependências:
   ```bash
   npm install
   ```

2. **Variáveis de Ambiente**
   Crie um arquivo `.env` na raiz do projeto e configure a sua chave da OMDb API e a porta da aplicação (por exemplo, 3000):
   ```env
   PORT=3000
   OMDB_API_KEY=sua_chave_aqui
   ```

3. **Rodando a Aplicação**
   Utilize o script de desenvolvimento (que utiliza `tsx watch` e a flag nativa `--env-file`):
   ```bash
   npm run dev
   ```

4. **Acessando a API**
   O servidor iniciará em `http://localhost:3000` (ou na porta definida no `.env`).

## Rotas Disponíveis

Todas as rotas estão documentadas via Swagger e prefixadas com `/filmes`. Você pode acessar a documentação interativa no navegador após iniciar a aplicação:

- **Swagger UI:** `http://localhost:3000/documentation` *(verifique a URL exata configurada no seu plugin)*

### Endpoints Principais

- `GET /filmes`
  Retorna uma lista padrão de filmes (utilizada na Home).

- `GET /filmes/busca?termo=valor&pagina=1&limite=10`
  Busca filmes por termo, com suporte opcional a paginação e limite local de itens retornados.

- `GET /filmes/:id`
  Busca os dados de um filme, série ou jogo específico utilizando o ID único do IMDb (`imdbID`).

## Documentação da API

Devido ao pacote `@fastify/swagger` em conjunto com os schemas do **Zod**, a API valida automaticamente se os dados enviados (query strings, params) e os dados retornados (respostas HTTP) seguem os modelos definidos, oferecendo além de segurança, uma documentação interativa rica para explorar e testar a API localmente.
