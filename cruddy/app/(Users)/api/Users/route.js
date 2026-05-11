import { connectToMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/Users"; // one import, used consistently below
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToMongoDB();
    const users = await User.find({}).lean();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    const user = {
      name:       formData.get("name"),
      age:        Number(formData.get("age")),  // convert string to number
      profession: formData.get("profession"),
      isMarried:  formData.get("isMarried") === "on",
    };

    await connectToMongoDB();
    await User.create(user);

    return NextResponse.json({ message: "User added successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
  }
}

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