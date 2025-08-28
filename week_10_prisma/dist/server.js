import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function createUser(params) {
    const res = await prisma.user.create({
        data: params
    });
    return res;
}
const data = {
    email: 'one@one.com',
    password: '123432'
};
const getuser = async () => {
    return await prisma.user.findMany();
};
const insertinto = async (a, { email, password }) => {
    const res = await prisma.user.update({
        where: {
            email: a,
        },
        data: {
            email: email,
            password: password
        }
    });
    console.log(res);
};
console.log(await getuser());
const updateData = {
    email: 'one@one.com',
    password: '124one'
};
//# sourceMappingURL=server.js.map