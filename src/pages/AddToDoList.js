import { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/card";
import { Checkbox, Label } from "flowbite-react";



const AddTask = ({tasks})=>{

    const navigate = useNavigate()
    const {name} = useParams()
    const [checkedTasks, setCheckedTasks] = useState({});

    const [clickedTask, setClickedTask] = useState()
    const [completedTask, setCompletedTask] = useState()

    useEffect(()=>{
        getTask() 
        

       
    },[])

    useEffect(()=> {
        if(clickedTask){
            taskCompleted()
        }

    }, [clickedTask])

    const getTask = () =>{
      const taskFound = tasks.find(task => task.title === name)



      setClickedTask(taskFound)

    }

    const taskCompleted = ()=>{

        console.log('clickedTask-->',clickedTask)

        const result = `${clickedTask?.completedTasks.length}` + '/' + `${clickedTask?.completedTasks.length + clickedTask?.unCompletedTasks.length}`

        setCompletedTask(result)
    }



  



    
     return (

      

        <>
        <div>
            <div className="flex flex-row ml-4" onClick={()=> navigate('/')}>
            <IoArrowBackCircle  className="text-4xl mt-4" />
            <p className="mt-6 mb-4">Back</p>
            </div>

         
            <div>
                <Card title={clickedTask?.title} tasksCompleted={completedTask} />
            </div>
            <div className="ml-4">
                <p className="text-center font-bold mb-2 text-2xl"> Tasks</p>
                {
                  clickedTask && clickedTask.unCompletedTasks.map((task,idx )=>(
                    <div key={task.title}>
                        <Checkbox
                        
                        checked={checkedTasks[task.title] || false}
                        onChange={(e) => setCheckedTasks(prev => ({
                            ...prev,
                            [task.title]: e.target.checked
                          }))}
                        id={task.title} />
                        <Label 
                        className={checkedTasks[task.title] ? 'line-through' : ''}
                        htmlFor={task.title}>{task}</Label>
                    </div>
                  ))  
                }
            </div>

            <div className="ml-4 mt-4">
                <p className="text-center font-bold mb-2 text-2xl">Completed</p>
                {
                  clickedTask && clickedTask.completedTasks.map((task,idx )=>(
                    <div key={task.title}>
                        <Checkbox
                        
                        checked={checkedTasks[task.title] || true}
                        onChange={(e) => setCheckedTasks(prev => ({
                            ...prev,
                            [task.title]: e.target.checked
                          }))}
                        id={task.title} />
                        <Label 
                        className="line-through"
                        htmlFor={task.title}>{task}</Label>
                    </div>
                  ))  
                }
            </div>


        </div>
       
        </>
     )
}

export default AddTask