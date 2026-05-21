import axios from "axios";
import { serverUrl } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setNotificationData, setUserData } from "../redux/userSlice";
import { useEffect } from "react";
import { setPostData } from "../redux/postSlice";

function getAllNotifications() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const fetchNotifications = async () => {
    try {
      const result = await axios.get(
        `${serverUrl}/api/user/getAllNotifications`,
        {
          withCredentials: true,
        },
      );
      dispatch(setNotificationData(result.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNotifications();
  }, []);
}

export default getAllNotifications;
