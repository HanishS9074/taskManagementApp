import { createContext, useEffect, useRef, useState } from "react";

// Here to handle useContext Hooks

const myContext = createContext();
const TaskContext = ({ children }) => {
  // Here to Handle Theme Code

  const [theme, setTheme] = useState("light"); // Here to handle useState Hooks

  const handlClickOnTheme = () => {
    // console.log(`ClickMe`);

    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
    document.body.style.color = theme === "light" ? "black" : "white";
  }, [theme]);

  // Here to Handle how to save data in local storage

  const [formData, setFormData] = useState(() => {
    const inputTaskData = localStorage.getItem("formData");
    return inputTaskData ? JSON.parse(inputTaskData) : [];
  });

  useEffect(() => {
    //Here to handle useEffect Hooks
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Here to Handle Input Filed code

  const [formInput, setFromInput] = useState({
    title: "",
    description: "",
    status: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFromInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [editFormData, setEditFormData] = useState(null);

  const handlerOnChangeDescription = () => { };

  // Here to Handle Save Botton Code

  const handleOnSave = (event) => {
    event.preventDefault();
    const today = new Date().toISOString().split("T")[0];

    if (editFormData !== null) {
      const updateData = formData.map((task) => {
        return task.id === editFormData ? { ...task, ...formInput } : task;
        // ? {
        //   ...task,
        //   title: formInput.title,
        //   description: formInput.description,
        // }
        // : task;
      });
      setFormData(updateData);
      setEditFormData(null);
      // setShowForm(false);
    } else {
      // const { title, description, status } = formInput;

      const newTaskForm = {
        id: Date.now(),
        ...formInput,
        date: today,
      };

      setFormData((prev) => [...prev, newTaskForm]);
    }
    setShowForm(false);
    setFromInput({ title: "", description: "", status: false });
  };
  // Here to Handle Edit Button code

  const handleEdit = (id) => {
    // console.log(`Click me`);

    const taskToEdit = formData.find((task) => task.id === id);
    if (taskToEdit) {
      setFromInput({
        title: taskToEdit.title,
        description: taskToEdit.description,
        status: taskToEdit.status,
      });
      setEditFormData(id);
      setShowForm(true);
    }
  };

  // Here to Handle Show Date and Day on top-right side

  const todayDate = new Date().toLocaleDateString("en-IN");

  const dayName = new Date().toLocaleDateString("en-IN", { weekday: "long" });

  const user = {
    userName: "Hanish Kumar",
    email: "123@gmail.com",
    imageURL:
      "https://cdn-useast1.kapwing.com/static/templates/circle-background-profile-picture-maker-regular-abe86059.webp",
  };

  // console.log(`${JSON.stringify(user)}`);

  // Here to Handle TaskForm Component

  const [showForm, setShowForm] = useState(false);
  const handleAddTask = () => {
    // console.log(`click add new task form`);

    // if () { } else {
    setShowForm((prev) => !prev);
    // }
  };

  const handleCancleTask = () => {
    setShowForm((prev) => !prev);
  };

  // Here to Handle Complete Task Component

  const handleOnDelete = (id) => {
    // setFormData(formData.filter((prev) => prev.id !== id));
    setFormData((prev) => prev.filter((prev) => prev.id !== id));
  };

  const handleOnCompleteTask = (id) => {
    const statusUpdate = formData.map((prev) =>
      prev.id === id ? { ...prev, status: true } : prev,
    );
    setFormData(statusUpdate);
  };
  // Here to Handle search Bar code
  const [search, setSearch] = useState("");

  const handleToSearchTask = (e) => {
    setSearch(e.target.value);
  };

  const filterTask = formData.filter((prev) => {
    return prev.title.toLowerCase().includes(search.toLowerCase());
  });

  // Here to Handle Calander

  const calanderRef = useRef(null);

  const [selectDate, setSelectDate] = useState("");

  const handleDateFilterChange = (e) => {
    setSelectDate(e.target.value);
  };

  const filterDateTask = formData.filter((task) => {
    const matchSearch = task.title.toLowerCase().includes(search.toLowerCase());

    const matchDate = selectDate ? task.date === selectDate : true;

    return matchSearch && matchDate;
  });

  const handleCalander = () => {
    calanderRef.current.showPicker();
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const [showAllTask, setShowAllTask] = useState(false);

  const [isFilterMode, setIsFilterMode] = useState(false);

  const handleTaskList = () => {
    setIsFilterMode(false);
    setFilterStatus("all");
    setSelectDate("");
    setShowAllTask((prev) => !prev);
  };

  const [filterStatus, setFilterStatus] = useState("all");

  const handleTaskFilter = () => {
    setIsFilterMode(true);
    setShowAllTask(true);
  };

  const finalFilterTask = formData.filter((task) => {
    const matchSearch = task.title
      .toLowerCase()
      .includes(search.toLocaleLowerCase());
    // const matchStatus = true

    const matchStatus =
      filterStatus === "all"
        ? true
        : filterStatus === "complete"
          ? task.status === true
          : task.status === false;

    const matchDate = selectDate ? task.date === selectDate : true;

    return matchSearch && matchStatus && matchDate;
  });

  return (
    <>
      <myContext.Provider
        value={{
          formData,
          todayDate,
          dayName,
          user,
          showForm,
          formInput,
          editFormData,
          filterTask,
          calanderRef,
          selectDate,
          filterDateTask,
          isOpen,
          showAllTask,
          handleDateFilterChange,
          handlClickOnTheme,
          handlerOnChangeDescription,
          handleInputChange,
          handleOnSave,
          handleAddTask,
          handleCancleTask,
          handleEdit,
          handleOnDelete,
          handleOnCompleteTask,
          handleToSearchTask,
          handleCalander,
          handleHamburger,
          handleTaskList,
          handleTaskFilter,
          finalFilterTask,
          isFilterMode,
          setFilterStatus,
        }}
      >
        {children}
      </myContext.Provider>
    </>
  );
};

export default TaskContext;
export { myContext };
