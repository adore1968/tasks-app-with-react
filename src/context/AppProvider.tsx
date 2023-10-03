import { ChangeEvent, ReactNode, useState, FormEvent, useEffect } from "react";
import { AppContext } from "./AppContext";
import { ShowDone, Task, Tasks } from "../utils/interfaces";
import { v4 } from "uuid";

interface Props {
  children: ReactNode;
}

const taskInitialState = {
  content: "",
  done: false,
};

function AppProvider({ children }: Props) {
  const [task, setTask] = useState<Task>(taskInitialState);
  const [tasks, setTasks] = useState<Tasks>([]);
  const [showDone, setShowDone] = useState<ShowDone>(false);

  const handleTask = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setTask({ ...task, content: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task) {
      const newTask = { ...task, id: v4() };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setTask(taskInitialState);
    }
  };

  const handleChecked = (
    { target }: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const checked = target.checked;
    const newTasks = tasks.map((value) => {
      if (value.id === id) {
        return { ...value, done: checked };
      }
      return value;
    });
    setTasks(newTasks);
  };

  const handleShowDone = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const checked = target.checked;
    setShowDone(checked);
  };

  const deleteTasksDone = () => {
    const newTasks = tasks.filter((value) => value.done !== true);
    setTasks(newTasks);
  };

  useEffect(() => {
    const item = localStorage.getItem("tasks");
    if (item) setTasks(JSON.parse(item));
  }, []);

  useEffect(() => {
    if (tasks.length > 1) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <AppContext.Provider
      value={{
        task,
        tasks,
        showDone,
        handleTask,
        handleSubmit,
        handleChecked,
        handleShowDone,
        deleteTasksDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
