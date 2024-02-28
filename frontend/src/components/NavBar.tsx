type Props = {}

function NavBar({ }: Props) {
    return (
        <div className="navbar sticky top-4 flex w-full p-8 relative">
            <div className="absolute inset-0 bg-[#efede6]  bg-opacity-10 backdrop-filter backdrop-blur-sm "></div>
            <ul className="flex justify-between w-full text-xl z-10">
                <li>Logo</li>
                <li>Menu</li>
                <li>Charts</li>
                <li>Data</li>
                <li>Msc</li>
            </ul>
        </div>


    )
}

export default NavBar