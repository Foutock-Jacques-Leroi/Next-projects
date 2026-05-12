import User from "@/app/models/Users";
import { connectToMongoDB } from "@/app/lib/mongodb";
import EditUserPage from "@/app/lib/editform";

export const metadata = {
  title: "Edit Users – Cruddy",
  description: "Edit users in the fyjl user management system.",
};

export default async function EditUser({ params }) {
    const {editId} = await params
    await connectToMongoDB();

    const user = await User.findById(editId).lean();
    // console.log("User ID from params:", editId);
    // console.log("User data:", user);

    return(
        <>
        
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-sm">
                <EditUserPage user={{...user, _id: user._id.toString()}} />
            </div>


        </div>  
        
        </>
    )
}