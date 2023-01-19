// import react from 'react'
import {useState} from 'react'
import TodoList from './TodoList'
import './todo.css'


export default function Todo(){
    interface Todo{
        text:string,
        complete:boolean
    }
    // const todoList:Todo[] = [
    //     {text:"Walk the dog", complete:true},
    //     {text:"Write app", complete:false}

    // ]
    const [todoList,setTodoList] = useState<Todo[]>([
    ])
    const [todo,setTodo] = useState<string>("")
    

    return(
        <>
            <div className="todo">
                <h1>Enter the TODOS</h1>
                <div className="form">
                    <form >
                        <input type="text" placeholder="Enter the todo" onChange={(e)=>{
                            setTodo(e.target.value)
                        }} />
                        <button type="submit" className='todobtn' onClick={(e)=>{
                            e.preventDefault();
                            setTodoList([...todoList,{text:todo,complete:false}])
                            


                        }}>Add Todo</button>
                    </form>
                </div>
            </div>   
            <TodoList todo={todoList}/>
        </>
    )
}