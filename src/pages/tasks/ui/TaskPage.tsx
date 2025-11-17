import TaskListWidget from "widgets/taskList";
import styles from "./TaskPage.module.css";

const TaskPage = () => (
  <div className={styles.taskPage}>
    <h1>Задачи</h1>
    <TaskListWidget />
  </div>
);

export default TaskPage;