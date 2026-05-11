// app/(Users)/users/[id]/page.js
import { connectToMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/Users";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function UserDetailPage({ params }) {
  const { userId } = await params;

  await connectToMongoDB();
  const user = await User.findById(userId).lean();

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-400 text-sm">User not found.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">

          {/* Banner */}
          <div className="h-20 bg-gray-100" />

          <div className="px-6 pb-6">

            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-white text-2xl font-semibold -mt-8 border-4 border-white">
              {user.name.charAt(0).toUpperCase()}
            </div>

            {/* Name + profession */}
            <h1 className="text-lg font-semibold text-gray-900 mt-3 mb-0.5">
              {user.name}
            </h1>
            <p className="text-sm text-gray-400 mb-5">{user.profession}</p>

            <hr className="border-gray-100 mb-5" />

            {/* Details */}
            <div className="flex flex-col divide-y divide-gray-50">

              <div className="flex items-center justify-between py-2.5">
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                  </svg>
                  Age
                </span>
                <span className="text-sm font-medium text-gray-800">{user.age}</span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V6a2.25 2.25 0 012.25-2.25h4.5"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5h9M7.5 13.5h5.25"/>
                  </svg>
                  Profession
                </span>
                <span className="text-sm font-medium text-gray-800">{user.profession}</span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                  Married
                </span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  user.isMarried
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-gray-100 text-gray-400"
                }`}>
                  {user.isMarried ? "Yes" : "No"}
                </span>
              </div>

            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-5">
              <Link
                href="/users"
                className="flex-1 text-center text-sm text-gray-500 border border-gray-200 rounded-lg py-2 hover:bg-gray-50 transition"
              >
                ← Back
              </Link>
              <Link 
                href={`/users/editpage/${user._id.toString()}`}
                className="flex-2 text-center text-sm text-blue-500 border border-blue-200 rounded-lg py-2 hover:bg-blue-200 hover:text-white transition"
              >
                Edit
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}