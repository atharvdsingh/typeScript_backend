import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface i{
  username: string;
    email: string;
    password: string;
    firstname: string;
    lastname?: string | null 
}
const insertinto:i={
    username:"aatharv",
    email:'dev@gmdail',
    password:'asraad',
    firstname:'asdkta',
    lastname:'alkt'
}
const c= prisma.users.findFirst()

async function insert(inserting:i) {
   const result= await prisma.users.create({
        data:inserting
    })
    return result;
}
console.log(await insert(insertinto));

