import { Client } from "pg";
const connectDb = async () => {
    try {
        const clinet = new Client({
            connectionString: "postgresql://neondb_owner:npg_Fk2pm8wBtcTI@ep-restless-queen-a1ckrjp0-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
        });
        await clinet.connect();
        console.log('connection done');
        return clinet;
    }
    catch (error) {
        throw error;
    }
};
export default connectDb;
//# sourceMappingURL=utils.js.map