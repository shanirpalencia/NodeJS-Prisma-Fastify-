import Fastify from "fastify";
import fs from "fs";
import path from "path";

const server = Fastify({ logger: false });

(async () => {
    try {
      await server.listen({ port: 3000 });
      console.log(`Server listening on http://localhost:3000`);
    } catch (error) {
      console.error("Error starting server:", error);
      process.exit(1);
    }
})();

const directory = "src/api";
const items = fs.readdirSync(directory);
for (const item of items) {
	const itemPath = path.join(directory, item);
  const itemName = path.join(itemPath, "routes.ts");
  server.register(require(path.resolve(itemName)), { prefix: "api/"+item })
}
