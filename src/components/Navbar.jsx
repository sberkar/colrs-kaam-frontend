import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <header className="px-20 py-2">
            <nav className="md:flex items-center">
                <div className="md:w-1/4 w-full">
                    <img className="h-[60px]" src="/logo.svg" alt="logo" />
                </div>
                <div className="md:w-3/4 flex justify-end">
                    <div className="">
                        <Link to="/login">
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}