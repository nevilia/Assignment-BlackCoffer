import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"


function NavBar() {
    return (
        <div className="navbar rounded-3xl shadow-md sticky top-4 flex w-full p-5 px-10 relative z-10">
            <div className="absolute inset-0 bg-[#efede6]  bg-opacity-10 backdrop-filter backdrop-blur-sm "></div>
            <div className="flex justify-between w-full text-xl z-20 items-center">
                <div className="flex justify-between w-[20%]">
                    <div className="sm:hidden pr-4">
                        <Link className="pr-4" to={'/'}>Home</Link>
                        <Link to={'/data'}>Data</Link>
                    </div>
                </div>
                
                <SearchBar/>
            </div>
        </div>


    )
}

export default NavBar