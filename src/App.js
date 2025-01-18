import Homepage from './pages/Homepage';
import logo from './logo.svg';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom"
import AddTask from './pages/AddToDoList';


function App() {

  const taskMade = [
    {
      title: "Holidays in Norway",
      completedTasks:[
        "Book flights to Oslo",
      "Reserve hotel in Bergen",
      "Research fjord tours",
      "Apply for travel insurance",
      "Make restaurant reservations",
      "Plan Northern Lights viewing"
    ]
      ,
      unCompletedTasks:[
        "Pack winter clothing"
      ]
  
    },
    {
      title: "Home Renovation Project",
      completedTasks:[
        "Get contractor quotes",
        "Choose paint colors",
        "Buy new fixtures",
      ],
      unCompletedTasks:[
        "Schedule electrician",
        "Order new flooring",
        "Clear out garage",
        "Donate old furniture"
      ]
    },
    {
      title: "Website Launch",
      completedTasks:[
  
      ],
      unCompletedTasks:[
        "Finalize content",
        "Test all links",
        "Optimize images",
        "Set up analytics",
        "Configure SSL certificate",
        "Create backup system",
        "Schedule social media posts"
      ]
    },
    {
      title: "Garden Planning",
      completedTasks:[
        "Design layout",
      ],
      unCompletedTasks:[
        "Buy seeds and tools",
        "Prepare soil",
        "Install irrigation system",
        "Build raised beds",
        "Create compost bin",
        "Schedule planting dates"
      ]
    },
    {
      title: "Birthday Party",
      completedTasks:[],
      unCompletedTasks:[
        "Send invitations",
        "Order cake",
        "Book venue",
        "Plan activities",
        "Buy decorations",
        "Arrange catering",
        "Create playlist"
      ]
    }
  ]





  //useState---->keeps track of the state

  const [username, setUsername] = useState("User")

  const [newStudents, setNewStudents] = useState([])







  return (
    <>
    <Routes>
      
      <Route path='/add-task' element={<AddTask />} />

    </Routes>

    <div>
   <Homepage tasks={taskMade} name={username} />

    </div>

    </>
  );
}

export default App;
