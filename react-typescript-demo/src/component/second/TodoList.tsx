

// import react from 'react'
export default function TodoList(todo: any){
    return(
        <div className="todo">
            <h1>Todo List</h1>
            <div className="todo-list">
                <center>
                {todo.todo.map((todo:any,i:number) => (
                    <div className="todo-item" key={i}>
                        <input key={i} type="checkbox" checked={todo.complete}/>
                        <label >{todo.text}</label>
                    </div>  
                ))}    
                </center>        
            </div>    
                        
        </div>
    )
}

