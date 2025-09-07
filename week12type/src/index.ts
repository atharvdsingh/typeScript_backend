type user={
    email:string,
    age:number
}

const u= new Map <string,user> ()
u.set("home",{
    email:'one@gmail.com',
    age:23
})
console.log(u.get('home')?.age);
