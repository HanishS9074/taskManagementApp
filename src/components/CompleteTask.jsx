import { useContext } from "react";
import { myContext } from "../context/TaskContext";
import { useMemo } from "react";

const CompleteTask = () => {
  const { formData, handleOnDelete } = useContext(myContext);
  const completeTask = useMemo(() => {
    return formData.filter((task) => task.status === true);
  }, [formData])
  return (
    <>
      <div
        className={`w-full max-h-90 bg-green-200 rounded-xl flex flex-col justify-start p-5`}
      >
        <h1 className="text-xl text-center font-bold mb-3">Complete Task</h1>
        <div className="h-3/4 overflow-y-auto overflow-y-scroll">
          {completeTask.length === 0 ? (
            <h3 className="w-full bg-green-400 font-bold items-center flex flex-col p-5 gap-5 rounded-xl">
              No Task
            </h3>
          ) : (
            completeTask.map((tasks) => (
              <div
                key={tasks.id}
                className=" flex flex-col gap-5 px-5 py-3 mb-5 rounded-xl bg-green-400 overflow-hidden "
              >
                <h3>Title : {tasks.title}</h3>
                <p className="w-full text-justify">
                  Description : {tasks.description}
                </p>
                <div className="flex justify-evenly">
                  <button
                    onClick={() => {
                      handleOnDelete(tasks.id);
                    }}
                    className="bg-red-500 py-2 px-7 rounded-xl"
                  >
                    {" "}
                    Delete
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
export default CompleteTask;
