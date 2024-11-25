import React, { useState } from 'react';
import TodoItem from './task'; // Assuming TodoItem is in './Header'

function TodoList() {
    const [order, setOrder]=useState(true);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false,
        },
    ]);
    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTasks([...tasks, newTask]); // Fixed spread operator
        setText('');
    }
    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed }; // Fixed spread operator
                } else {
                    return task;
                }
            })
        );
    }
    return (
        <>
        <div
        style={{
            height:'full',
            width:'full',
            margin:'auto'
         }}
         >
        <button onClick={() => setOrder(!order)}>
         Swap Order
        </button>

          <input
            style={{
                height:'10px',
                width:'300px',
                margin:'auto',
               backgroundColor:'greenyellow'
             }}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => addTask(text)} >Add</button>
            </div>
              { order ? (<div 
                style={{
                    backgroundColor:'gray',
                    alignContent:'center'
                }}>
                    {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
                ))}
          
             </div>) :
             (<div
                style={{
                    backgroundColor: 'gray',
                    alignContent: 'center',
                }}
                className="todo-list" >
                {tasks
                    .slice() // Create a copy of the array
                    .reverse() // Reverse the copy
                    .map((task) => (
                        <TodoItem
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            toggleCompleted={toggleCompleted}
                        />
                    ))}  
                     </div>
                        )}


        </>
        
    );
}

export default TodoList;
