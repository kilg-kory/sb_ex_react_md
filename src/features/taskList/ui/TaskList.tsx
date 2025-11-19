import TaskCard, { type ITask } from "entities/task";

import styles from "./TaskList.module.css";
import { useCallback } from "react";

const TaskList = ({
  tasks,
  onDelete,
  onChange,
}: {
  tasks: ITask[];
  onDelete: (id: string) => void;
  onChange: (task: ITask) => void;
}) => {
  const cbOnChange = useCallback(
    (task: ITask) => {
      onChange(task);
    },
    [onChange],
  );
  const cbOnDelete = useCallback(
    (id: string) => {
      onDelete(id);
    },
    [onDelete],
  );

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className={styles.taskListItem}>
          <TaskCard task={task} onChange={cbOnChange} onDelete={cbOnDelete} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
