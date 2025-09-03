

async function fetchuser(){
  const user=await fetch('http://localhost:3000/api/user')
  const  users= await user.json()
  return users

}

export default async function Home() {
  const user=await fetchuser()


  return (
    <>
    {
      user.name
    }

    </>
  );
}
