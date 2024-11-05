import { User } from "@prisma/client";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  user: User;
  index: number;
}
export default function UserContactRow({ user, index }: Props) {
  return (
    <div className="h-[7rem] bg-white rounded-lg flex p-2 items-center cursor-pointer">
      <div className="w-[17%] h-full flex justify-center items-center">
        <Avatar user={user} />
      </div>
      <div className="w-[68%] h-full  pl-2 flex flex-col justify-center gap-1">
        <p className="text-lg font-semibold">{user.username}</p>
        <p className="font-light text-gray-700 truncate">
          Last message from user lalala1223 lalala
        </p>
      </div>
      <div className="w-[15%] h-full  flex flex-col justify-center items-end pr-2 gap-2">
        <p className="font-light text-gray-700">13.02</p>
        {index % 2 ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <div className="badge badge-primary badge-md">12</div>
        )}
      </div>
    </div>
  );
}
