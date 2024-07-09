import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';
console.log(styles);

const Todo = ({ todo, index, deleteTodo }) => {
    return(
        <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
            <RiTodoFill className={styles.todoicon}/>
            <div className={styles.todoText}>
                {todo}
            </div>
        </div>
    );
};

export default Todo;