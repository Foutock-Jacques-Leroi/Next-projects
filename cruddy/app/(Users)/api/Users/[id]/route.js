import { connectToMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/Users";
import { NextResponse } from "next/server";


export async function DELETE(request, {params}){
   
   try{
    const {id} = await params

    await connectToMongoDB()

    await User.findByIdAndDelete(id);

    return NextResponse.json({message: "User deleted successfully!"}, {status: 200})
}
catch(error){
    console.error("Error deleting user:", error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });

}
}


export async function GET(request, {params}){
    try{
        const {id} = await params   
        await connectToMongoDB()
        const user = await User.findById(id).lean();

        if(!user){
            return NextResponse.json({error: "User not found"}, {status: 404})
        }
        return NextResponse.json({user}, {status: 200})
    }
    catch(error){
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
    }
}

export async function PATCH(request, {params}){
    try{
        await connectToMongoDB()
        const {id} = await params
        const formData = await request.formData();
        const updatedData = {
            name: formData.get("name"),
            age: Number(formData.get("age")),
            profession: formData.get("profession"),
            isMarried: formData.get("isMarried") === "on",
        };
        const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });

        return NextResponse.json({ user: updatedUser }, { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
}
