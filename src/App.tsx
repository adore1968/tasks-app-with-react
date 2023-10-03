import Tasks from "./components/tasks/Tasks";
import TaskForm from "./components/TaskForm";
import TasksVisibility from "./components/TasksVisibility";
import { useAppContext } from "./context/AppContext";

function App() {
  const { showDone } = useAppContext();

  return (
    <main className="px-5">
      <div className="max-w-2xl mx-auto flex-col mt-10 sm:mb-0 mb-10 gap-10 flex">
        <TaskForm />
        <Tasks />
        <TasksVisibility />
        {showDone && <Tasks showDone={showDone} />}
      </div>
    </main>
  );
}

export default App;
