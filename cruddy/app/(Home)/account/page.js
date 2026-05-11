
import Link from "next/link";
import info from "@/app/lib/info";
import Counter from "./counter"
import { Suspense } from "react";
import Load from "@/app/lib/load";
import UserList from "@/app/lib/userlist";

export default function Account() {

  return (
    <>
 <div className="bg-teal-200 h-screen flex justify-center items-center py-6 font-bold w-full">
  <div className="flex flex-col p-4 bg-green-500 ">
    <h1 className="text-3xl font-extrabold text-black-400">Welcome to your account page!</h1>

<Suspense fallback={<Load />}>
    {/* <UserList /> */}<p>Hello!!!</p>
</Suspense>

{/* <Counter /> */}
    <button className="py-2 px-6 w-fit text-white-600 bg-amber-600 rounded-md hover:bg-teal-500 cursor-pointer text-xl"> View your profile</button>
  <a href="/dashboard" className="py-2 px-6 w-fit text-white-600 bg-amber-600 rounded-md hover:bg-teal-500 cursor-pointer text-xl mt-4"> Go to dashboard !</a>
  </div>
  </div> 
    </>
  )
}