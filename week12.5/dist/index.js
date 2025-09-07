import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const insertinto = {
    username: "aatharv",
    email: 'dev@gmdail',
    password: 'asraad',
    firstname: 'asdkta',
    lastname: 'alkt'
};
const c = prisma.users.findFirst();
async function insert(inserting) {
    const result = await prisma.users.create({
        data: inserting
    });
    return result;
}
console.log(await insert(insertinto));
//# sourceMappingURL=index.js.map