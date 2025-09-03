

import axios from "axios";

 async function getUser(){
  const user=await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return user.data



}

export default  async function Home() {
  const data= await getUser()
  return (
    <>

    </>
  );
}
