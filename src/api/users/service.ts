import { prisma } from "../../libs/prisma";

export async function findUsers() {
    const users = await prisma.user.findMany();
    return users;
}

export async function findUser(parameters: any) {
    const user = await prisma.user.findUnique({
        where: { id: Number(parameters.id) }
    });
    return user;
}

export async function createUser(parameters: any) {
    const user = await prisma.user.create( parameters.body );
    return user;
}