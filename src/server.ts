import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

const PORT = 3333;
const app = fastify({ logger: true });

const start = async () => {

    await app.register(cors);
    await app.register(routes);

    try {
        await app.listen({ port: PORT })
    } catch (err) {
        process.exit(1);
    }
}

start();