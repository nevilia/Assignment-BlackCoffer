import { Link } from "react-router-dom"
import Logo2 from '../assets/Logo2.png'

type Props = {}

function SlideOver({ }: Props) {
    return (
        <div className="sticky top-0 left-0 flex w-[330px] py-10 px-10 gap-10 flex-col text-xl z-20 ">
            <div className="flex justify-center h-[120px] px-auto "> 
                <Link to={'/'}>
                    <img className="h-full" src={Logo2} alt="" />
                </Link> 
            </div>
            <hr className="h-px bg-[#001845] border-0" />
            <Link to={'/'}>Menu</Link>
            <Link to={'/'}>Charts</Link>
            <Link to={'/'}>Data</Link>
            <Link to={'/'}>Dashboard</Link>
        </div>
    )
}

export default SlideOver