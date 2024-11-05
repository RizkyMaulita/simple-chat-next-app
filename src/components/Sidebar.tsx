"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faAddressBook } from "@fortawesome/free-regular-svg-icons";
import {
  faUsersRectangle,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="w-[10vw] h-screen bg-white border-r-2   rounded-s-[30px] fixed ">
      <div className="flex flex-col items-center py-[25px] gap-[30px] ">
        {/* Profile Image 100%*/}
        <div className="avatar mb-[25px] cursor-pointer">
          <div className="h-[70px] rounded-full bg-blue-300">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <div className="avatar flex flex-col items-center gap-[8px] cursor-pointer hover:text-blue-tersier">
          <FontAwesomeIcon icon={faComments} size={"xl"} />
          <p className="text-sm">All Chats</p>
        </div>

        <div className="avatar flex flex-col items-center gap-[8px] cursor-pointer hover:text-blue-tersier">
          <FontAwesomeIcon icon={faUsersRectangle} size={"xl"} />
          <p className="text-sm">Groups</p>
        </div>

        <div className="avatar flex flex-col items-center gap-[8px] cursor-pointer hover:text-blue-tersier">
          <FontAwesomeIcon icon={faAddressBook} size={"xl"} />
          <p className="text-sm">Contacts</p>
        </div>

        <div className="divider w-[80%] mx-auto my-0"></div>

        <div className="avatar flex flex-col items-center gap-[8px] cursor-pointer hover:text-blue-tersier">
          <FontAwesomeIcon icon={faGear} size={"xl"} />
          <p className="text-sm">Settings</p>
        </div>

        <div className="avatar flex flex-col items-center gap-[8px] cursor-pointer hover:text-blue-tersier">
          <FontAwesomeIcon icon={faRightFromBracket} size={"xl"} />
          <p className="text-sm">Logout</p>
        </div>
      </div>
    </div>
  );
}
