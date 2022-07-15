import TodoProvider from "./context/TodoContext"
import Todos from './components/Todos'

function App () {
    return (
        <TodoProvider>
            <Todos />
        </TodoProvider>
    )
}

export default App