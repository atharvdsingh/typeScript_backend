import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
interface user{
    email:string,
    password:string,
}

async function createUser(params:user) {
    const res=await prisma.user.create({
        data:params
    }
    )
    return res
    
}

const data:user={
    email:'one@one.com',
    password:'123432'

}
// console.log(await createUser(data));




interface update {
    email:string,
    password:string
    
}



const getuser=async()=>{
    return await prisma.user.findMany()
}
 
const insertinto= async (a:string,{email,password}:update)=>{
    
const res=await prisma.user.update({
    where:{
        email:a,
    },
    data:{
        email:email,
        password:password
    }
})
console.log(res)

}
console.log(await getuser());
const updateData:update={
    email:'one@one.com',
    password:'124one'
}

