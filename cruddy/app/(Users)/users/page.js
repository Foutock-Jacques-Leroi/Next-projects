// app/(Users)/users/page.js — server only, NO "use client"
import delay from "@/app/lib/delay";
import { connectToMongoDB } from "@/app/lib/mongodb";
import UserList from "@/app/lib/userlist";
import User from "@/app/models/Users";   // mongoose only here
import { Suspense } from "react";
import Loading from "@/app/lib/load";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function UsersPage() {
  await connectToMongoDB();
  const users = await User.find({}).lean();
  await delay(3000); // simulate network delay

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex justify-between ">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Directory</p>
          <h1 className="text-5xl font-bold text-gray-900">All users</h1>
          <div>
         <Link href="/users/addUser" className=" font-extrabold gap-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
          + New User
        </Link>
          </div>
        </div>
        <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserList
              key={user._id.toString()}
              user={{ ...user, _id: user._id.toString() }}
            />
          ))}
        </div>
        </Suspense>
      

      </div>
    </div>
  );
}