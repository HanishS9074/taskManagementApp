import { useContext } from "react";
import { myContext } from "../context/TaskContext.jsx";

const TaskFrom = () => {
  const {
    isOpen,
    showForm,
    handleCancleTask,
    formInput,
    handleInputChange,
    handleOnSave,
    editFormData,
  } = useContext(myContext);
  return (
    <>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="">
            <h1 className="text-center text-xl font-bold my-2 text-white">
              {isOpen ? "New Task Form" : "Edit Task Form"}
            </h1>
            <form
              className="bg-orange-200 flex flex-col p-5 gap-5 rounded-xl"
              onSubmit={handleOnSave}
            >
              <div className="flex justify-start gap-3">
                <div className="flex flex-col justify-start gap-7">
                  <label htmlFor="title">Title : </label>
                  <label htmlFor="description">Description : </label>
                </div>
                <div className="flex flex-col justify-start gap-3">
                  <input
                    type="text"
                    name="title"
                    placeholder="Write Task"
                    id=""
                    className="py-1 px-3 rounded-xl "
                    required
                    maxLength={100}
                    onChange={handleInputChange}
                    value={formInput.title}
                  />
                  <textarea
                    required
                    maxLength={1000}
                    name="description"
                    id=""
                    value={formInput.description}
                    placeholder="Write Here"
                    rows="5"
                    cols={50}
                    className="resize-none overflow-hidden border-black py-1 px-3  rounded-xl"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center gap-20">
                <button
                  type="submit"
                  className=" py-2 px-5 rounded-xl bg-red-400"
                >
                  {editFormData !== null ? "Update" : "Save"}
                </button>
                <button
                  type="button"
                  className=" py-2 px-5 rounded-xl bg-red-400"
                  onClick={handleCancleTask}
                >
                  Cancle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default TaskFrom;
