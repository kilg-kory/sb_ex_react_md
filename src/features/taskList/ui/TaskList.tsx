import TaskCard, { type ITask } from "entities/task";

import styles from "./TaskList.module.css";

export default ({
  tasks,
  onDelete,
  onChange,
}: {
  tasks: ITask[];
  onDelete: (id: string) => void;
  onChange: (task: ITask) => void;
}) => (
  <div>
    {tasks.map((task) => (
      <div key={task.id} className={styles.taskListItem}>
        <TaskCard task={task} onChange={onChange} onDelete={onDelete} />
      </div>
    ))}
  </div>
);
