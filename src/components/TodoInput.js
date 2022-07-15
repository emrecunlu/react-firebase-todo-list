import { addDoc, collection, serverTimestamp, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { db } from "../utils/firabase";

function TodoInput () {

    const [todo, setTodo] = useState('')

    const submitHandle = async (e) => {
        e.preventDefault()

        const docRef = await addDoc(collection(db, 'todos'), {
            title: todo,
            completed: false,
            createdAt: new serverTimestamp()
        })

        setTodo('')
    }
    
    return (
        <>
            <div className="todo-form">
                <form onSubmit={submitHandle} className="flex gap-x-5" method="POST">
                    <input type="text" className="w-full h-10 outline-none px-5 text-sm font-medium placeholder:font-normal" value={todo} placeholder="Lütfen yapılacak bir iş giriniz." onChange={e => setTodo(e.target.value)} />
                    <button className="h-10 w-10 bg-gray-200 flex items-center justify-center transition-all disabled:bg-gray-400" disabled={todo === ''} type="submit">
                        <AiOutlinePlus size={18} />
                    </button>
                </form>
            </div>
        </>
    )
}

export default TodoInput