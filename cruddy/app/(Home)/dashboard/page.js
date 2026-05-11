import Link from "next/link";

export default function Dashboard() {
  return (
    <>
 <div className="bg-teal-200 h-screen flex justify-center items-center py-6 font-bold w-full">
  <div className="flex flex-col p-4 bg-green-500 ">
    <h1 className="text-3xl font-extrabold text-black-400">Welcome to your dashboard!</h1>
    {/* <button className="py-2 px-6 w-fit text-white-600 bg-amber-600 rounded-md hover:bg-teal-500 cursor-pointer text-xl"> View your profile</button> */}
    <Link href="/account" className="py-2 px-6 w-fit text-white-600 bg-amber-600 rounded-md hover:bg-teal-500 cursor-pointer text-xl mt-4"> Go to account !</Link>
    <Link href="/dashboard/stats" className="py-2 px-6 w-fit text-white-600 bg-red-600 rounded-md hover:bg-teal-500 cursor-pointer text-xl mt-4"> Go to stats !</Link>

  </div>
  </div> 
    </>
  );
}