import axios from "../api/axios";
import { useAuth } from "../contexts/authContext";

function useRefresh(){
    const { setAuth } = useAuth()

    function refresh(){
        axios.post("/refresh", {}, {
            withCredentials: true 
        }).then(response => {
            setAuth(prev => {
                console.log(prev)
                console.log(response.data.accessToken)
                return {...prev, accessToken: response.data.accessToken, isAuthenticated: true }
            })
            return response.data.accessToken
        })
        .catch(err => console.log(err))
    }

    return refresh;
}

export default useRefresh