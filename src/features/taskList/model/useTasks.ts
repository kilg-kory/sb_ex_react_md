import type { TFilter } from "shared/filterdButton/index";

import type { ITask } from "entities/task";
import { useCallback, useMemo, useState } from "react";

export function useTasks(initialTasks: ITask[]) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState<TFilter>("all");

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
