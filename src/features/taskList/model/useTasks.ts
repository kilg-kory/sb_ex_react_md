import type { TFilter } from 'shared/filterdButton/index';

import type { ITask } from 'entities/task';
import { useState } from 'react';

export function useTasks(initialTasks: ITask[]) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState<TFilter>('all');

  const removeTask = (id: string) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  const changeTask = (updTask: ITask) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === updTask.id ? updTask : task))
    );

  const filteredTasks = tasks.filter(
    (task) =>
      filter === 'all' ||
      (task.completed ? filter === 'completed' : filter === 'incompleted')
  );

  return { tasks: filteredTasks, filter, setFilter, removeTask, changeTask };
}
