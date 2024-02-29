import WomanAvatar from '../assets/WomanAvatar.png'

const SearchBar = () => {
  return (
    <div className="flex p-[5px] rounded-[50px] bg-gray-200 items-center bg-opacity-50 shadow">
        <input className={`p-2 pl-5 m-1 rounded-[25px] outline-none focus:border-blue-500 shadow`} placeholder="Search..." type="text" />
        <div className="w-10 h-10 m-2 rounded-[50%] bg-gray-500 shadow overflow-hidden">
            <img className='p-1' src={WomanAvatar} alt="Woman" />
        </div>
    </div>
  )
}

export default SearchBar