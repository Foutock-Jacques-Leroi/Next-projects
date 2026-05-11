import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4 text center items-center ">
                <li><Link href="/" className="hover:text-gray-400 text-xl font-extrabold">Back to Home</Link></li>
                {/* <li><Link href="/account/dashboard" className="hover:text-gray-400 font-bold">Dashboard</Link></li> */}
                
            </ul>
        </nav>
    )
}