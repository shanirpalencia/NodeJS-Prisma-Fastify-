import { FastifyReply, FastifyRequest } from "fastify";
import { findUsers, findUser, createUser } from "./service";


export async function getUsersHandler() {
    const users = await findUsers();
    return users;
}

export async function getUserHandler(req: FastifyRequest, res: FastifyReply) {
    const id = req.params;
    const user = await findUser(id);
    return user;
}

export async function createUserHandler(req: FastifyRequest, res: FastifyReply) {
    const user = await createUser(req);
    return user;
}