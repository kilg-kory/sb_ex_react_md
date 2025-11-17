import type { TFilter } from "shared/filteredButton/index";

import type { ITask } from "entities/task";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useGetTasksQuery } from "../api/taskApi";

export function useTasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filter, setFilter] = useState<TFilter>("all");

  const { data, isSuccess } = useGetTasksQuery();

  useEffect(() => {
    if (data) {
      setTasks(data)
    }

  }, [isSuccess, data]);



  const cbRemoveTask = useCallback(
    (id: string) => setTasks((prev) => prev.filter((task) => task.id !== id)),
    [],
  );

  const cbChangeTask = useCallback(
    (updTask: ITask) =>
      setTasks((prev) =>
        prev.map((task) => (task.id === updTask.id ? updTask : task)),
      ),
    [],
  );

  const cbAddTask = useCallback((title: string) => {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }, []);

  const mFilteredTasks = useMemo(
    () =>
      tasks.filter(
        (task) =>
          filter === "all" ||
          (task.completed ? filter === "completed" : filter === "incompleted"),
      ),
    [tasks, filter],
  );

  const cbSetFilter = useCallback((filter: TFilter) => setFilter(filter), []);

  return {
    tasks: mFilteredTasks,
    filter,
    setFilter: cbSetFilter,
    removeTask: cbRemoveTask,
    changeTask: cbChangeTask,
    addTask: cbAddTask,
  };
}
