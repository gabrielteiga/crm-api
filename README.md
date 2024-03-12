# CRM API with NODEJS + Typescript + MongoDB

## Technologies
    - NodeJS
    - Typescript
    - Fastify
    - MongoDB
    - Prisma
    - Postman

### Run software (dev mode)
    npm run dev

### Acessando API
    POST - localhost:3333/customers (Data to insert: Body Request)


### Explaining Database Image: Docker MongoDB Replica + Prisma (Just for knowledge)
    To use Prisma + MongoDB + Docker we have to create a replica of Mongo. Dockerfile in ./mongodb_rs/Dockerfile. This image is use in the docker compose file project, avoiding problems with environment configuration.

    Link of the instructions: https://github.com/prisma/prisma/tree/main/docker