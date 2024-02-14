
import {FiSearch} from 'react-icons/fi'
import { Link, Outlet } from 'react-router-dom'

export default function Header(){
    return (<>
        <header className='bg-slate-200 text-slate-700 sm:text-xl'>
            <div className='flex items-center justify-between max-w-7xl p-3 mx-auto'>
                <Link to="/">
                    <h1 className='flex flex-wrap font-bold'>
                        <span className='text-slate-400'>First</span>
                        <span>Project</span>
                    </h1>
                </Link>
                <form className='flex items-center bg-slate-100 p-2 rounded-xl'>
                    <input className='bg-transparent w-24 sm:w-64 outline-none px-2' placeholder="search"type="search" />
                    <FiSearch/>
                </form>
                <ul className='flex gap-5'>
                    <Link to="/">
                        <li className="hidden sm:inline">Home</li>
                    </Link>
                    <Link to="/profile">
                        <li className="hidden sm:inline">Profile</li>
                    </Link>
                    <Link to="/about">
                        <li className="hidden sm:inline">About</li>
                    </Link>
                    <Link to="/signin">
                        <li className="">SignIn</li>
                    </Link>
                </ul>
            </div>
        </header>
        <Outlet/>
    </>)
}

