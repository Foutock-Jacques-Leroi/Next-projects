// app/(Users)/users/UsersList.jsx — async server component
import { connectToMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/Users";
import UserList from "./userlist";



export default async function UsersList() {
  await connectToMongoDB();
  const users = await User.find({}).lean();  // Suspense catches this await

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserList
          key={user._id.toString()}
          user={{ ...user, _id: user._id.toString() }}
        />
      ))}
    </div>
  );
}