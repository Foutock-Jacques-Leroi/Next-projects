import Navbar from "@/app/(Home)/account/Navbar"

export default function layout({children}){
    return(
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html> 
    )
}