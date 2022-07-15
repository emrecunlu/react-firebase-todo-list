import { AiFillDelete } from "react-icons/ai"
import classNames from "classnames"
import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../utils/firabase"

function Todo ({ todo }) {

    const todoRemove = async () => {
        const deleteRef = doc(db, 'todos', todo.id)

        await deleteDoc(deleteRef)
    }

    const todoCompleted = async () => {
        const completeRef = doc(db, 'todos', todo.id)

        await updateDoc(completeRef, {
            completed: !todo.completed
        })
    }

    return (
        <>
            <div onDoubleClick={todoCompleted} className="todo cursor-pointer w-full bg-gray-200 flex items-center justify-between px-5 py-3 select-none">
                <div className="todo-title">
                    <span className={classNames({
                        'text-[15px] font-semibold': true,
                        'line-through': todo.completed  
                    })}>{todo.title}</span>
                </div>
                <div className="todo-remove" onClick={todoRemove}>
                    <AiFillDelete className="text-red-600" size={18} />
                </div>
            </div>
        </>
    )
}

export default Todo