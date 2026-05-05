import TaskContext from "./context/TaskContext.jsx";
import Home from "./pages/Home.jsx";

const App = () => {


  return <>
    <TaskContext>
      <Home />
    </TaskContext>
  </>
}

export default App;
