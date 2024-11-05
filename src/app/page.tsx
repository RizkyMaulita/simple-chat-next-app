import Sidebar from "@/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default async function Home() {
  return (
    <div className="flex h-screen bg-slate-200">
      <Sidebar />

      {/* List Chat Container */}
      <section
        id="list-chat-container"
        className="container-contact h-full bg-white overflow-y-auto border-l border-r"
      >
        {/* Search Contact */}
        <div className="sticky top-0 p-4 bg-white h-[8rem]">
          <div className="h-[60px]">
            <form className="flex flex-col items-center justify-center">
              <label className="w-[90%] input input-bordered rounded-2xl flex items-center gap-2 bg-slate-100">
                <input type="text" className="grow" placeholder="Search..." />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </form>
          </div>
          <div className="divider"></div>
        </div>

        {/* List Chat */}
        <section className="flex-1 overflow-y-auto px-2 space-y-2">
          <div className="h-[125px] bg-red-300">Item 1</div>
          <div className="h-[125px] bg-pink-600">Item 2</div>
          <div className="h-[125px] bg-green-200">Item 3</div>
          <div className="h-[125px] bg-blue-300">Item 4</div>
          <div className="h-[125px] bg-red-300">Item 5</div>
          <div className="h-[125px] bg-pink-600">Item 6</div>
          <div className="h-[125px] bg-green-200">Item 7</div>
          <div className="h-[125px] bg-blue-300">Item 8</div>
        </section>
      </section>

      {/* Main Chat Container */}
      <section
        id="main-chat-container"
        className="container-chat flex flex-col h-full bg-white rounded-r-[30px]"
      >
        <div className="bg-white p-4 h-[8rem] rounded-tr-[30px]">
          <div className="h-[60px] px-[25px] flex justify-between items-center">
            <div>
              <p className="text-2xl">TechPlus Company</p>
              <p className="text-gray-500">32 members</p>
            </div>
            <div className="flex flex-row gap-[30px]">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[23px]"
              />
              <FontAwesomeIcon icon={faPhone} className="text-[23px]" />
              <FontAwesomeIcon icon={faEllipsisV} className="text-[23px]" />
            </div>
          </div>
          <div className="divider"></div>
        </div>

        <div className="flex-1 overflow-y-auto px-2 space-y-2">
          <div className="h-[120px] bg-red-300">Item 1</div>
          <div className="h-[120px] bg-pink-600">Item 2</div>
          <div className="h-[120px] bg-green-200">Item 3</div>
          <div className="h-[120px] bg-blue-300">Item 4</div>
          <div className="h-[120px] bg-red-300">Item 5</div>
          <div className="h-[120px] bg-pink-600">Item 6</div>
          <div className="h-[120px] bg-green-200">Item 7</div>
          <div className="h-[120px] bg-blue-300">Item 8</div>
        </div>

        <div className="p-4 mt-3 flex items-center">
          <input
            type="text"
            placeholder="Ketik pesan..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
            Send
          </button>
        </div>
      </section>
    </div>
  );
}
