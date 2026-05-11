import { connectToMongoDB } from "./mongodb";
import User from "@/app/models/Users";
import { NextResponse } from "next/server";


export async function PATCH(request, {params}){
    try{
        const {userId} = await params
        const formData = await request.formData();
        const updatedData = {
            name: formData.get("name"),
            age: Number(formData.get("age")),
            profession: formData.get("profession"),
            isMarried: formData.get("isMarried") === "on",
        };

        await connectToMongoDB();
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true }).lean();

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(updatedUser, { status: 200 });

    }
    catch (error) {

        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });

    }



}