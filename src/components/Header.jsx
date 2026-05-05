import { CgDarkMode } from "react-icons/cg";
import { myContext } from "../context/TaskContext.jsx";
import { useContext } from "react";
import { FaCalendarDay } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";



const Header = () => {
  const {
    theme,
    isOpen,
    handlClickOnTheme,
    search,
    todayDate,
    dayName,
    handleToSearchTask,
    handleCalander,
    selectDate,
    calanderRef,
    handleDateFilterChange,
    handleHamburger,
  } = useContext(myContext);
  return (
    <>
      <div className="w-full px-4 md:px-10 py-5 flex flex-col lg:flex-row justify-left lg:justify-between items-center shadow-sm mb-12 gap-6 lg:gap-0">

        <div className=" flex justify-between items-center w-full lg:w-auto">
          <h1 className="text-2xl text-center ">
            <span className="text-red-400">Dash</span>board
          </h1>

          <button className=" lg:hidden text-2xl p-2" onClick={handleHamburger}>
            {isOpen ?
              <IoClose />
              : <GiHamburgerMenu />
            }
          </button>
        </div>


        <div className={`relative flex items-center w-3/4 lg:w-full max-w-md lg-w-150 `}>
          <input
            type="search"
            name=""
            id=""
            value={search}
            placeholder="Search your task here..."
            className={`w-full py-2 pl-4 pr-12 rounded-xl shadow-lg focus:outline-none ${theme === "black" ? " " : "border-1 border-solid border-white text-gray-300"}`}
            onChange={handleToSearchTask}
          />
          <button className="absolute right-1 bg-red-400 py-2 px-3 text-white rounded-tr-xl rounded-br-xl">
            <FaSearch />
          </button>
        </div>
        <div className={`${isOpen ? "absolute flex flex-col gap-1 top-15 right-1" : "hidden"} lg:flex lg:gap-5 text-xl items-center`}>
          <button className="hover:text-red-400 transition-colors">
            <IoMdNotifications />
          </button>
          <button onClick={handleCalander}>
            <FaCalendarDay />
          </button>
          <input
            type="date"
            value={selectDate}
            ref={calanderRef}
            onChange={handleDateFilterChange}
            name=""
            id=""
            className="invisible w-0 h-0"
          />
          {selectDate && (
            <button
              onClick={() => handleDateFilterChange({ target: { value: "" } })}
              className="text-xs text-red-500 bg-red-50 p-1 rounded-full"
            >
              <MdOutlineClear size={18} />
            </button>
          )}
          <div className="flex flex-col items-center text-sm">
            <span className="font-semibold">{dayName}</span>
            <span className="text-gray-500">{todayDate}</span>
          </div>
          <button onClick={handlClickOnTheme}
            className="p-2 rounded-full hover-bg-gray-100 transition-colors">
            <CgDarkMode />
          </button>
        </div>
      </div >
    </>
  );
};
export default Header;
