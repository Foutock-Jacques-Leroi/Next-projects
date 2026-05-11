import Footer from "./Footer";
import Navbar from "./Navbar";


export default function layout({children}){
    return(
        <html lang="en">
            <body>

                <Navbar />
                {children}
                {/* <Footer /> */}
                
            </body>
        </html> 
    )
}