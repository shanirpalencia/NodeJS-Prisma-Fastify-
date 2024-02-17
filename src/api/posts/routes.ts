import { FastifyInstance } from "fastify";
import { getPostsHandler }from "./controller";

async function postsRoutes(server: FastifyInstance) {

    server.get("/",
      getPostsHandler
     );

     server.get("/:id", (req, res) => {
      const  id  = req.params;
      res.send( { message:  id });
     });
}
  
export default postsRoutes;