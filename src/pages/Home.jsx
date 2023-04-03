import LoggedInUI from "../components/LoggedInUI";
import UnLoggedUI from "../components/UnLoggedUI";
import { useAuth } from "../contexts/authContext";

export default function Home(){
    const { auth } = useAuth()
    return <div className="md:flex w-full px-20 my-8 justify-between">
        {auth.isAuthenticated === undefined? <UnLoggedUI />:<LoggedInUI />}
    </div>
}