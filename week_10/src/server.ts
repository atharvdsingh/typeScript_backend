import connectDb from "./utils.js";

 const clinet= await connectDb()


//  const CreateTable=`
//  CREATE TABLE user2 (
//  id SERIAL PRIMARY KEY,
//  email VARCHAR(20) NOT NULL UNIQUE ,
//  password VARCHAR(20) NOT NULL)`
const insertTable:string=`
    SELECT * FROM user2
`
type insertSchema={
    email:string,
    password:string
}
const data=['atharv@gmail.com','atharv12341']
 const user=await clinet.query(insertTable)
 
 console.log(user.rows);
 