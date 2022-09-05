import { createContext, useState } from 'react'

const TasksContext = createContext

function TasksProvider({children}) {
    const [tasks, setTasks] = useState([])

  return (
    <TasksContext.Provider value={{tasks,setTasks}}>
        {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider