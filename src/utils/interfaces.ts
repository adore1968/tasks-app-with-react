import { ChangeEvent, FormEvent } from "react";

export interface Task {
  content: string;
  done: boolean;
  id?: string;
}

export type Tasks = Task[];

export type ShowDone = boolean;

export interface AppContextType {
  task: Task;
  tasks: Tasks;
  showDone: ShowDone;
  handleTask: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChecked: (
    { target }: ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleShowDone: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  deleteTasksDone: () => void;
}
