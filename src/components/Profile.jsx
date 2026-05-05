import { useContext } from "react";
import { myContext } from "../context/TaskContext";
import { style } from "../css/multipleComponent.module.css"

const Profile = () => {
  const { user, handleAddTask, handleTaskList, handleTaskFilter } = useContext(myContext)
  return <>
    <div className="w-full lg:w-1/4 lg:h-118 flex flex-col sm:flex-row lg:flex-col gap-5 items-center lg:items-start bg-red-400 rounded-xl lg:rounded-none  lg:rounded-tr-xl lg:rounded-br-xl p-5 shadow-lg ">
      <div className="w-full flex flex-col py-5 px-3 gap-3 items-center">
        <div className=" flex flex-col items-center">
          <img src={user.imageURL} alt="" className="rounded-full w-30" />
          <h2>{user.userName}</h2>
          <span>{user.email}</span>
        </div>
        <button className={`${style} md:shrink-0`} onClick={handleAddTask} >Add A New Task</button>
        <button className={style} onClick={handleTaskList}>Task List</button>
        <button className={style} onClick={handleTaskFilter}>Filter Task</button>
      </div>

    </div>
  </>
}
export default Profile;