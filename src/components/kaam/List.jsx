import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import Kaam from "./Kaam";
import { useAppContext } from "../../contexts/appContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function KaamsList() {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const { createChange } = useAppContext();

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPrivate
      .get("/kaam/all")
      .then((res) => {
        let sortedList = res.data;
        sortedList.sort((a, b) => {
          return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1;
        });
        setList(sortedList);
        setLoading(false);
      })
      .catch((error) => {
        navigate("/login");
        setLoading(false);
      });
  }, [createChange]);

  return (
    <div className="px-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {list.length < 1 ? (
            <div>
              <div>
                <img src="/no_result.jpg" alt="Not Found" className="w-2/3" />
              </div>
            </div>
          ) : (
            <div>
              {list.map((item) => (
                <Kaam kaam={item} key={item._id} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
