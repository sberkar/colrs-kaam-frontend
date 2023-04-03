import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export default function Navbar() {
  const { auth } = useAuth();

  return (
    <header className="px-20 py-2">
      <nav className="md:flex items-center">
        <div className="md:w-1/4 w-full">
          <img className="h-[60px]" src="/logo.svg" alt="logo" />
        </div>
        <div className="md:w-3/4 flex justify-end">
          {auth.isAuthenticated == undefined ? (
            <div className="flex">
              <div className="">
                <Link to="/login">Login</Link>
              </div>
            </div>
          ) : (
            <div className="flex">
              <div className="">
                <Link to="/account">Account</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
