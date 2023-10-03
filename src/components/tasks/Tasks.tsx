import { useAppContext } from "../../context/AppContext";
import TaskCard from "./TaskCard";

function Tasks({ showDone = false }) {
  const { tasks } = useAppContext();

  const renderCards = (showDone: boolean) => {
    const newTasks = tasks.filter((value) => {
      if (value.done === showDone) {
        return value;
      }
    });
    return newTasks.map((task) => <TaskCard key={task.id} task={task} />);
  };

  return (
    <section>
      <div className="p-5 border">
        <h1 className="text-xl sm:text-2xl font-bold">Tasks</h1>
      </div>
      <div>{renderCards(showDone)}</div>
    </section>
  );
}

export default Tasks;
