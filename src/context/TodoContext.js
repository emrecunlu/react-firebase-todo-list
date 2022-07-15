import { useContext, createContext, useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from "../utils/firabase";

const TodoContext = createContext()

function TodoProvider ({ children }) {

    const [todos, setTodos] = useState(false)

    useEffect(() => {

        const todoRef = query((collection(db, 'todos')), orderBy('createdAt', 'desc'))

        const unsubscribe = onSnapshot(todoRef, (snapshot) => {
            const todos = snapshot.docs.map(todo => (
                {
                    id: todo.id,
                    ...todo.data(),
                }
            ))

            setTodos(todos)
        })

        return () => unsubscribe()
    }, [])
    
    const data = {
        todos,
        setTodos
    }

    return (
        <TodoContext.Provider value={data}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext)

export default TodoProvider