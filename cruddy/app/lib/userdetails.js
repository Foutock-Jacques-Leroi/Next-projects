import { connectToMongoDB } from "./mongodb"
import Users from "@/app/models/Users"


export default async function Udetails({ userId }){

    // const {userId}  = await params
    // console.log(userId)
    await connectToMongoDB()

    const users = await Users.findById(userId);
    
    return(
        <>
        <div className="bg-teal-200 h-screen flex justify-center items-center py-6 font-bold w-full">
        <div className="py-6 px-8 text-2xl text-shadow-indigo-50 flex flex-col justify-center items-baseline">
            {/* <h1 className="text-2xl">Hello !</h1> */}
            <h1 className="text-2xl">{users.name}</h1>
            <h1 className="text-2xl">{users.age}</h1>
            <h1 className="text-2xl">{users.profession}</h1>

            
        </div>
        </div>
</>
        
    )
}