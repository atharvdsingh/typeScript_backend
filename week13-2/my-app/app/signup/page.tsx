"use client"
import axios from "axios";
import { ChangeEventHandler, FormEvent, FormEventHandler, InputHTMLAttributes, useState } from "react";

export default function(){
const [email, setEmail] = useState<string>("")
const [password, setPassword] = useState<string>("")
    


async function fetchApi(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    console.log(email,password)
    const res=await axios.post("http://localhost:3000/api/user",{
        email,password
    })
 console.log(res.data)

}



    return (
        <>
        <div className="flex justify-center min-h-screen w-full  bg-black
         items-center" >
            <div className="p-5" >
                <form onSubmit={fetchApi} >
                    <input  onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="enter your email" />
                    <input onChange={(e:any)=>setPassword(e.target.value)} type="password" placeholder="enter your password" />
                    <button className="submit" >submit</button>
                </form>
            </div>


        </div>
        </>
    )

}