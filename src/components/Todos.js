import TodoInput from "./TodoInput"
import { useTodo } from "../context/TodoContext"
import Todo from "./Todo"

function Todos () {

    const { todos } = useTodo()

    return (
        <>
            <div className="h-screen min-h-full w-full flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-xl mx-auto">
                    <TodoInput />
                    <div className="todos mt-5 flex flex-col gap-y-5">
                        {todos && todos.map((todo, index) => (
                            <Todo key={index} todo={todo} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todos