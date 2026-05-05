import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoPaste } from "react-icons/go";
import { myContext } from "../context/TaskContext";
import { IoClose } from "react-icons/io5";

const ShowAllTask = () => {
  const {
    filterStatus,
    handleAddTask,
    handleEdit,
    handleOnCompleteTask,
    handleTaskList,
    showAllTask,
    finalFilterTask,
    isFilterMode,
    setFilterStatus,
  } = useContext(myContext);

  const containerStyle = showAllTask
    ? "fixed inset-0 z-40 w-full h-full p-10 flex flex-col bg-black/50 backdrop-blur-sm "
    : "flex  flex-col w-full max-h-90 bg-green-200 rounded-xl  p-5";
  return (
    <>
      <div className={containerStyle}>
        <div className="flex justify-between mb-3">
          <span className="flex items-center gap-2">
            <GoPaste /> {isFilterMode ? "Filter Task" : "All Task"}
          </span>
          {isFilterMode && (
            <div className="flex gap-5">
              {["all", "complete", "incomplete"].map((status) => {
                return (
                  <label
                    key={status}
                    className="flex gap-1 items-center cursor-pointer capitalize"
                  >
                    <input
                      type="radio"
                      name="filter"
                      id=""
                      checked={filterStatus === status}
                      onChange={() => setFilterStatus(status)}
                    />
                    {status}
                  </label>
                );
              })}
            </div>
          )}
          <button className="flex items-center gap-2" onClick={handleAddTask}>
            <FaPlus />
            Add New Task
          </button>

          {showAllTask && (
            <button
              onClick={handleTaskList}
              title="close"
              className="absolute top-3 right-10 text-2xl text-red-500"
            >
              <IoClose />
            </button>
          )}
        </div>
        <div className="h-3/4 overflow-y-auto overflow-y-scroll ">
          {finalFilterTask.length === 0 ? (
            <h3 className="bg-green-400 font-bold items-center flex flex-col p-5 gap-5 rounded-xl">
              No Task
            </h3>
          ) : (
            finalFilterTask.map((tasks) => (
              <div
                key={tasks.id}
                className="  flex flex-col gap-5 px-5 py-3 mb-5 rounded-xl bg-green-400 overflow-hidden"
              >
                <h3>Title : {tasks.title}</h3>
                <p className="w-full text-justify">
                  Description : {tasks.description}
                </p>
                <p className="text-white">
                  {tasks.status ? "Completed" : "Incomplete"}
                </p>
                <div className="flex justify-center gap-10 items-center flex-wrap lg:flex-nowrap">
                  <button
                    onClick={() => handleEdit(tasks.id)}
                    className="bg-red-300 py-2 px-7 rounded-xl"
                    disabled={tasks.status === true}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleOnCompleteTask(tasks.id);
                    }}
                    disabled={tasks.status === true}
                    className="bg-red-500 py-2 px-7 rounded-xl"
                  >
                    {tasks.status ? "Completed" : "Complete"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default ShowAllTask;
