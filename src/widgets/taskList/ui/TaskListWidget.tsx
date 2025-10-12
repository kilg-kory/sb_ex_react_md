import TaskList from 'features/taskList';
import { useTasks } from 'features/taskList';
import FilteredButton from 'shared/filterdButton';

import type { ITask } from 'entities/task';

const initial: ITask[] = [
  { id: '1', title: 'Сделать ДЗ по продвинутому реакту', completed: true },
  { id: '2', title: 'Оценить сделаную работу.', completed: false },
  { id: '3', title: 'Выпить кофе', completed: true },
];

export default () => {
  const { tasks, filter, setFilter, removeTask, changeTask } = useTasks(initial);
  return (
    <div>
      <FilteredButton value={filter} onClick={(value) => setFilter(value)} />
      <TaskList tasks={tasks} onDelete={(id) => removeTask(id)} onChange={(task) =>changeTask(task)} />
    </div>
  );
}
