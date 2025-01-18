import Card from "../components/card";
import { IoBulb } from "react-icons/io5";
import { BsFillLightbulbOffFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

const Homepage = ({ tasks, name }) => {

    const [count, setCount] = useState(0)
    let [anotherName, setName] = useState("Ned stark");

    let nameRef = useRef(); 

    const submitButton = () => {

     


 
   
    };


    const handleOnChange = (e)=>{
      console.log(e.target.value)
    }
   



    

    useEffect(()=>{

     
     
    }, [count])


  
  const [isBulbOn, setBulbOn] = useState(false);

  const titles = tasks.map((task) => task.title); //map returns an array

  const tasksCompleted = tasks.map((task) => {
    let result =
      `${task.completedTasks.length}` +
      "/" +
      `${task.unCompletedTasks.length + task.completedTasks.length}`;
    return result;
  });

  const turnBulbOnOff = () => {
    if (isBulbOn) {
      setBulbOn(false);
     setCount(2)
    } else {
      setBulbOn(true);
      setCount(1)
    }
  };



  return (
    <div>
      <div
        id="top-section"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1",
        }}
      >
        <div className="flex flex-row justify-end mr-4 mt-2 ">
        {isBulbOn ? (
          
          <IoBulb
            style={{
              marginLeft: 40,
              fontSize: "30px",
            }}
            onClick={turnBulbOnOff}
          />
        ) : (
          <BsFillLightbulbOffFill
            style={{
              marginLeft: 40,
              fontSize: "30px",
            }}
            onClick={turnBulbOnOff}
          />
          
        )}
        </div>
        <div
          style={{
            marginLeft: 40,
            fontSize: 14,
            marginTop: 10,
            marginBottom: 4,
          }}
        >
          <p>Hello {name}</p>
        </div>

        <div
          style={{
            position: "absolute",
            top: 60,
            left: 40,
          }}
        >
          <div
            style={{
              width: 2 / 3,
            }}
          >
            <p
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Your Projects(4)
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 40,
            top: 70,

           
          }}
        >
          <img
            style={{
              width: 70,
            }}
            src="/profile.jpg"
            alt="profile pic"
          />
        </div>
      </div>
      <div
        id="task-section"
        style={{
          marginTop: 120,
        }}
      >
        <Card title={titles[0]} tasksCompleted={tasksCompleted[0]} />
        <Card title={titles[1]} tasksCompleted={tasksCompleted[1]} />
        <Card title={titles[2]} tasksCompleted={tasksCompleted[2]} />
        <Card title={titles[3]} tasksCompleted={tasksCompleted[3]} />
      </div>

      <input

         placehoder="enter your preferred GOT character..."

        // onChange={handleOnChange}

       ref={nameRef}

         type="text"

       />
        <button type="button" onClick={submitButton}>

Submit

</button>
    </div>
  );
};

export default Homepage;

/**
 *
 * CREATE A TASK ALGORITHM
 * initialize an empty array ---> tasks
 *
 * list.push(get data from the form)
 *
 * saved and added to to the to do title
 *
 *
 *
 *
 *
 *
 *
 *
 */
