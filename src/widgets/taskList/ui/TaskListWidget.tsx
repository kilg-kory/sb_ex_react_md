import TaskList from "features/taskList";
import { useTasks } from "features/taskList";
import FilteredButton from "shared/filteredButton";

import AddTask from "features/addTask";

const TaskListWidget = () => {
  const { tasks, filter, setFilter, removeTask, changeTask, addTask } =
    useTasks();
  return (
    <div>
      <FilteredButton value={filter} onClick={setFilter} />
      <TaskList
        tasks={tasks}
        onDelete={(id) => removeTask(id)}
        onChange={(task) => changeTask(task)}
      />
      <AddTask onAddTask={addTask} />
    </div>
  );
};

export default TaskListWidget;
