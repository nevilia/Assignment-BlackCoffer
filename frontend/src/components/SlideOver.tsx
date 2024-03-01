import { Link } from "react-router-dom"
import Logo2 from '../assets/Logo2.png'

type Props = {}

function SlideOver({ }: Props) {
    return (
        <div className="sticky min-h-[800px] top-0 left-0 flex w-[330px] py-10 px-10 gap-10 flex-col text-xl z-20 overflow:hidden ">
            <div className="flex justify-center h-[120px] px-auto "> 
                <Link to={'/'}>
                    <img className="h-full" src={Logo2} alt="" />
                </Link> 
            </div>
            <hr className="h-px bg-[#001845] border-0" />
            <Link to={'/data'}>Data</Link>
            <Link to={'/'}>Dashboard</Link>

            <div className="mt-[120%] p-[15%] bg-white h-[100px] bg-opacity-30 rounded-[18px] text-[#002855] w-full">
                    Built By Nikita Birua
            </div>
        </div>
    )
}

export default SlideOver