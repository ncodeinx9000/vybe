import { useSelector } from "react-redux";
import dp from "../assets/dp.png";
import { useNavigate } from "react-router-dom";
import FollowButton from "./FollowButton";

function OtherUser({ user }) {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="w-full h-[80px] h-[80px] flex items-center justify-between border-b-2 border-gray-800">
      <div className="flex items-center gap-[10xp]">
        <div
          className="w-[50px] h-[50px] border-2 border-black rounded-full cursor-pointer overflow-hidden"
          onClick={() => navigate(`/profile/${user.userName}`)}
        >
          <img
            src={user.profileImage || dp}
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="mx-[10px]">
          <div className="text-[18px] text-white font-semibold">
            {user.userName}
          </div>
          <div className="text-[15px] text-gray-400 font-semibold">
            {user.name}
          </div>
        </div>
      </div>
      <FollowButton
        tailwind={
          "px-[10px] w-[100px] py-[5px] h-[40px] bg-[white] rounded-2xl"
        }
        targetUserId={user._id}
      />
    </div>
  );
}

export default OtherUser;
