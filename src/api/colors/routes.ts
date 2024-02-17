import { FastifyInstance } from "fastify";

async function colorsRoutes(server: FastifyInstance) {
    server.get(
      "/",
      (req, res) => {
        res.send({ message: "Hi! word this is colors routes" });
      }
    );
}
  
export default colorsRoutes;