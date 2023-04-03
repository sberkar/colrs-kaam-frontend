import { useEffect, useRef, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAppContext } from "../../contexts/appContext";
import { useNavigate } from "react-router-dom";

export default function CreateKaam(){
    const isCompletedRef = useRef()
    const [isCompleted, setIsCompleted] = useState(false)
    const [kaamValue, setKaamValue] = useState("")
    
    const { setCreateChange, createChange } = useAppContext()
    const axiosPrivate = useAxiosPrivate()
    const navigate = useNavigate()

    useEffect(() => {
        setIsCompleted(isCompletedRef.current.value)
    }, [isCompletedRef])

    function handleSubmit(){
        axiosPrivate.post("/kaam", {
            kaam: kaamValue,
            isCompleted: isCompleted
        })
        .then(res => {
            setKaamValue("")
            setCreateChange(!createChange)
        })
        .catch(err => {
            navigate("/login") 
        })
    }

    return <div className="border border-gray-200 rounded p-4">
        <h2 className="text-center text-3xl font-medium font-inter">Create Kaam</h2>
        <div>
            <div className="w-full mb-4">
                <label className="text-lg mr-2 block">
                    Kaam:
                </label>
                <input
                type="text"
                name="kaam"
                onChange={e => setKaamValue(e.target.value)}
                value={kaamValue}
                placeholder="Enter Your Kaam"
                className="w-full block border border-gray-300 rounded px-2 py-1"
                />
            </div>
            <div className="w-full mb-4">
                <label className="text-lg mr-2 block">Is Completed?:</label>
                <select value={isCompleted} className="block border border-gray-300 w-full" ref={isCompletedRef} onChange={e => setIsCompleted(e.target.value)}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </div>
            <div className="w-full">
                <button type="submit" className="text-lg py-2 w-full rounded bg-primary text-white" onClick={() => handleSubmit()}>Create Kaam</button>
            </div>
        </div>
    </div>
}