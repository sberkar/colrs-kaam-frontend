import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function Account() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const [currentUser, setCurrentUser] = useState({});

  function handleLogout() {
    axios
      .post(
        "/u/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setAuth({});
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }

  function handleDelete() {
    axiosPrivate
      .delete("/u")
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axiosPrivate
      .get("/u/current")
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="px-20 flex flex-col justify-center items-center mt-5">
      <h2 className="text-2xl font-medium mb-2">{currentUser.email}</h2>
      <button
        className="border border-primary text-primary rounded-lg p-2 mb-2"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
      <button
        className="bg-primary rounded-lg text-white p-2 mb-2"
        onClick={() => handleDelete()}
      >
        Delete Account
      </button>
    </div>
  );
}
