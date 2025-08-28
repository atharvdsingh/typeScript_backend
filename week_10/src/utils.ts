import {Client} from "pg" 

const connectDb =async ()=>{

    
    try {
        const clinet= new Client({
            connectionString:process.env.DATABASE_URL
        })
       await clinet.connect()
        console.log('connection done')
        return clinet
    } catch (error) {
        throw error
        
    }
}

export default connectDb