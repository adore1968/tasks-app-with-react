import { useAppContext } from "../context/AppContext";

function TasksVisibility() {
  const { showDone, handleShowDone, deleteTasksDone } = useAppContext();

  return (
    <section>
      <div className="p-5 border flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-5">
        <input
          type="checkbox"
          checked={showDone}
          onChange={(e) => handleShowDone(e)}
        />
        <h2 className="text-xl sm:text-2xl font-semibold">Show tasks done</h2>
        <button
          onClick={() => deleteTasksDone()}
          className="text-lg sm:text-xl px-4 py-2 bg-red-600 hover:bg-red-500 transition-colors ease-in rounded sm:w-fit w-full"
        >
          Clear
        </button>
      </div>
    </section>
  );
}

export default TasksVisibility;
