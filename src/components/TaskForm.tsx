import { useAppContext } from "../context/AppContext";

function TaskForm() {
  const { task, handleTask, handleSubmit } = useAppContext();

  return (
    <section>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex text-lg sm:text-xl items-center sm:flex-row flex-col gap-5 sm:gap-0"
      >
        <input
          type="text"
          placeholder="Enter a new task"
          value={task.content}
          onChange={(e) => handleTask(e)}
          className="text-gray-800 px-4 py-2 sm:flex-1 w-full rounded-r"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 hover:bg-blue-500 transition-colors ease-in sm:rounded-r rounded sm:w-fit w-full"
        >
          Save task
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
