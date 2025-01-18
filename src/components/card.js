import { CiCirclePlus } from "react-icons/ci";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { useNavigate, Link } from "react-router-dom";


const Card = ({title,tasksCompleted})=>{

    console.log('passed title', title)

   const navigate = useNavigate()

    return(
        <div 
        style={{
            position: "relative",
            border: "solid",
            height: "20em",
            borderRadius: "2em",
            backgroundColor: "#3a3d3f",
            color: "white",
            marginBottom: 8

        }}
        >
            <div
            style={{
                width: 1/3
            }}
            >
            <p
        style={{
            fontSize: "2em",
      
            marginLeft: 15
        }}
        >{title}</p>

        


            </div>
            <p
             style={{
               
          
                marginLeft: 15
            }}
            >Tasks completed: {tasksCompleted}</p>

          
            <CiCirclePlus onClick={()=> navigate(`/add-task/${title}`)} style={{fontSize: "3em",position: "absolute",bottom:9, right:10 }}/>
         
            <PiDotsThreeCircleLight style={{fontSize: "3em",position: "absolute",bottom:9, left:10 }} />
       
        </div>
    )
}

export default Card