

import User from "@/app/models/Users";
import { connectToMongoDB } from "@/app/lib/mongodb";  
import EditUserPage from "@/app/lib/editform";

export default async function EditUser({ params }) {
    await connectToMongoDB();
    const { userId } = await params;
    // const user = await User.findById(userId);
    console.log("User ID from params:", userId);
    
return (
   <>
   
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        {/* <div className="w-full max-w-sm">
            <EditUserPage user={{...user}} />
        </div> */}
        <h1>NOt Yet!</h1>
    </div>

   </>
  )
}