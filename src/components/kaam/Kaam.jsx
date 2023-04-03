import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAppContext } from "../../contexts/appContext";
import { useAuth } from "../../contexts/authContext";

export default function Kaam({ kaam }){
    const { auth } = useAuth()
    const { createChange, setCreateChange } = useAppContext()
    const axiosPrivate = useAxiosPrivate()
    const navigate = useNavigate()

    const [isCompletedClicked, setIsCompletedClicked] = useState(false)
    const [deleteClicked, setDeleteClicked] = useState(false)

    function handleIsCompleted(){
        setIsCompletedClicked(true)

        axiosPrivate.put(`/kaam/${kaam._id}`, {
            isCompleted: true
        })
        .then(res => {
            setCreateChange(!createChange)
            setIsCompletedClicked(false)
        })
        .catch(err => {
            navigate("/login") 
        })
    }

    function handleDelete(){
        setDeleteClicked(true)
        axiosPrivate.delete(`/kaam/${kaam._id}`)
        .then(() => {
            setDeleteClicked(false)
            setCreateChange(!createChange)
        })
        .catch(err => {
            navigate("/login")
        })
    }


    return <div onClick={!kaam.isCompleted ? (() => handleIsCompleted()) : undefined} className="flex justify-between items-center my-2 hover:shadow-lg shadow-gray-100">
        <p className="border-l-[4px] rounded px-2 text-lg font-inter font-medium text-gray-900 border-[#00ff]">
            {kaam.kaam}
        </p>
        <div className="flex">
            <button onClick={() => handleIsCompleted()} disabled={isCompletedClicked}  className="mx-5 empty:hidden hover:bg-gray-100 p-2 cursor-pointer rounded-full">
                {!kaam.isCompleted && <AiOutlineCheck size={"1.5rem"} color="blue" />}
            </button>
            <button onClick={() => handleDelete()} disabled={deleteClicked} className="hover:bg-gray-100 p-2 cursor-pointer rounded-full">
                <AiOutlineDelete size={"1.5rem"} color="red"/>
            </button>
        </div>
    </div>
}