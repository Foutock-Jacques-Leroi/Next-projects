export default function Navbar(){
    return(
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li><a href="/account/dashboard" className="hover:text-gray-400">Dashboard</a></li>
                <li><a href="/account/stats" className="hover:text-gray-400">Stats</a></li>
                <li><a href="/account/profile" className="hover:text-gray-400">Profile</a></li>
                <li><a href="/account/settings" className="hover:text-gray-400">Settings</a></li>
            </ul>
        </nav>
    )
}