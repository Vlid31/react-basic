import { useState } from 'react'
import styles from './TodoForm.module.css'
console.log(styles)

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    
    return(
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input placeholder="Enter new todo" value={text} onChange={(e) => setText(e.target.value)}  />
                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}

export default TodoForm