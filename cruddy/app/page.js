import Image from "next/image";

export default function Home() {
  return (
    <>
 <div className="bg-teal-200 h-screen flex justify-center items-center py-6 font-bold w-full">
  <div className="flex flex-col p-4 bg-green-500 ">
    <h1 className="text-3xl font-extrabold text-black-400">Welcome to Cruddy!</h1>
    <button className="py-2 px-6 w-fit text-white-600 bg-amber-600 rounded-md hover:bg-teal-500 cursor-pointer text-xl"> Welcome back Jacques!</button>
  </div>
  </div> 
    </>
  );
}
