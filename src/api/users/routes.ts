import { FastifyInstance } from "fastify";
import { getUsersHandler, getUserHandler, createUserHandler }from "./controller";

async function usersRoutes(server: FastifyInstance) {

    server.get("/",
      getUsersHandler
    );

    server.get("/:id",
     getUserHandler
    );

    server.post("/", 
      createUserHandler
    );
}
  
export default usersRoutes;