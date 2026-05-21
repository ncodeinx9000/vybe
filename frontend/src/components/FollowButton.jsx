import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { serverUrl } from "../App";
import { toggleFollow } from "../redux/userSlice";
import { useParams } from "react-router-dom";

function FollowButton({ targetUserId, tailwind, onFollowChange }) {
  const { following } = useSelector((state) => state.user);
  const isFollowing = following.includes(targetUserId);
  const dispatch = useDispatch();
  const { userName } = useParams();
  const handleFollow = async () => {
    try {
      const result = await axios.get(
        `${serverUrl}/api/user/follow/${targetUserId}`,
        { withCredentials: true },
      );
      if (onFollowChange) {
        onFollowChange();
      }
      dispatch(toggleFollow(targetUserId));

      // REFRESH PROFILE DATA
      const updatedProfile = await axios.get(
        `${serverUrl}/api/user/getProfile/${userName}`,
        { withCredentials: true },
      );

      dispatch(setProfileData(updatedProfile.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className={tailwind} onClick={handleFollow}>
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}

export default FollowButton;
