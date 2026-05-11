import delay from "@/app/lib/delay";


export default async function Stats() {

  await delay(5000);

  return (
    <>
 <div className="bg-teal-200 h-screen flex justify-center items-center py-6 font-bold w-full">
  <div className="flex flex-col p-4 bg-green-500 ">
    <h1 className="text-3xl font-extrabold text-black-400">Welcome to your stats page!</h1>
    <button className="py-2 px-6 w-fit text-white-600 bg-amber-600 rounded-md hover:bg-teal-500 cursor-pointer text-xl"> View your profile</button>
  </div>
  </div> 
    </>
  );
}   