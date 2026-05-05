import { useContext } from "react";
import CompleteTask from "../components/CompleteTask.jsx";
import Header from "../components/Header.jsx";
import ShowAllTask from "../components/ShowAllTask.jsx";
import TaskFrom from "../components/TaskForm.jsx";
import { style } from "../css/multipleComponent.module.css";
import { myContext } from "../context/TaskContext.jsx";
import Profile from "../components/Profile.jsx";

const Home = () => {
  const { user } = useContext(myContext);
  return (
    <>
      <Header />
      <div className="lg:w-screen lg:flex p-5 p-5 lg:p-0">
        <Profile />

        <div className="lg:w-full lg:max-h-110 p-5 ">
          <h1 className="text-xl">
            Welcome back, <span className="font-bold">{user.userName}</span>
          </h1>
          <div className="flex flex-wrap lg:flex-nowrap w-full min-h-100 mt-5 gap-5 p-5 justify-between  bg-red  rounded-xl shadow-xl border-2 border-solid border-red-400 ">
            <ShowAllTask />
            <CompleteTask />
          </div>
          <div>
            <TaskFrom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
