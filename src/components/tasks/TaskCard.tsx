import { useAppContext } from "../../context/AppContext";
import { Task } from "../../utils/interfaces";

interface Props {
  task: Task;
}

function TaskCard({ task }: Props) {
  const { handleChecked } = useAppContext();

  return (
    <div className="bg-gray-800 border p-5 flex justify-between text-lg sm:text-xl first-of-type:border-t-0 hover:bg-gray-950 transition-colors ease-in text-gray-200">
      <p>{task.content}</p>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => handleChecked(e, task.id!)}
      />
    </div>
  );
}

export default TaskCard;
