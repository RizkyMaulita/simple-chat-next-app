import Sidebar from "@/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

// export default async function Home() {
//   return (
//     <div className="min-h-screen w-[100%] bg-slate-200 relative">
//       <Sidebar />
//       <div className="ml-[10vw] min-h-screen w-[90vw] flex flex-row relative">
//         <div className="w-[400px] bg-white px-[10px] absolute border-r-2">
//           <div className="h-[150px] w-[380px] fixed bg-white pt-[35px]">
//             <form className="flex flex-col items-center justify-center mb-[30px]">
//               <label className="w-[90%] input input-bordered rounded-2xl flex items-center gap-2 bg-slate-100">
//                 <input type="text" className="grow" placeholder="Search..." />
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 16 16"
//                   fill="currentColor"
//                   className="h-4 w-4 opacity-70"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </label>
//             </form>
//             <div className="divider"></div>
//           </div>
//           <div className="mt-[150px]">
//             <div className="h-[150px] bg-orange-300"></div>
//             <div className="h-[150px] bg-red-600"></div>
//             <div className="h-[150px] bg-pink-400"></div>
//             <div className="h-[150px] bg-purple-400"></div>
//             <div className="h-[150px] bg-yellow-500"></div>
//             <div className="h-[150px] bg-orange-300"></div>
//             <div className="h-[150px] bg-red-600"></div>
//             <div className="h-[150px] bg-pink-400"></div>
//             <div className="h-[150px] bg-purple-400"></div>
//             <div className="h-[150px] bg-yellow-500"></div>
//           </div>
//         </div>

//         <div className="ml-[400px] w-[100%] bg-green-900 min-h-screen absolute">
//           <div className="w-[100%] bg-white h-[150px] fixed ">
//             <div className="h-[100px]"></div>
//             <div className="mx-[20px] divider"></div>
//           </div>
//           <div className="w-[100%] mt-[150px] bg-pink-300 min-h-screen">
//             <p className="text-3xl">TEST</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default async function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-300 flex flex-row">
      <div className="container-sidebar h-screen">
        <Sidebar />
      </div>
      <div className="container-contact min-h-screen relative">
        <div className="absolute min-h-screen border-r-2  container-contact">
          <div className="h-[150px] border-r-2 container-contact bg-white fixed pt-[35px]">
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
          <div className="mt-[150px]">
            <div className="h-[125px] bg-red-300">Item 1</div>
            <div className="h-[125px] bg-pink-600">Item 2</div>
            <div className="h-[125px] bg-green-200">Item 3</div>
            <div className="h-[125px] bg-blue-300">Item 4</div>
            <div className="h-[125px] bg-red-300">Item 5</div>
            <div className="h-[125px] bg-pink-600">Item 6</div>
            <div className="h-[125px] bg-green-200">Item 7</div>
            <div className="h-[125px] bg-blue-300">Item 8</div>
          </div>
        </div>
      </div>
      <div className="container-chat bg-green-300 min-h-screen relative">
        <div className="absolute min-h-screen container-chat">
          <div className="h-[150px] container-chat bg-white fixed pt-[35px]">
            <div className="h-[60px] px-[25px] mr-[30px] flex justify-between items-center">
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
          <div className="mt-[150px] p-[20px]">
            <div className="h-[120px] bg-red-300">Item 1</div>
            <div className="h-[120px] bg-pink-600">Item 2</div>
            <div className="h-[120px] bg-green-200">Item 3</div>
            <div className="h-[120px] bg-blue-300">Item 4</div>
            <div className="h-[120px] bg-red-300">Item 5</div>
            <div className="h-[120px] bg-pink-600">Item 6</div>
            <div className="h-[120px] bg-green-200">Item 7</div>
            <div className="h-[120px] bg-blue-300">Item 8</div>
          </div>
        </div>
      </div>
    </div>
  );
}
