import Card from "../components/card";
import { IoBulb } from "react-icons/io5";
import { BsFillLightbulbOffFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

const Homepage = ({ tasks, name }) => {

    const [count, setCount] = useState(0)
    let [anotherName, setName] = useState("Ned stark");

    let nameRef = useRef();

    const submitButton = () => {

     

      setName(nameRef.current.value);

      console.log('new name is',anotherName)

 
   
    };


    const handleOnChange = (e)=>{
      console.log(e.target.value)
    }
   



    

    useEffect(()=>{

     
      console.log(`I have been updated by useEffect`)
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
        {isBulbOn ? (
          <IoBulb
            style={{
              marginLeft: 40,
              fontSize: "2em",
            }}
            onClick={turnBulbOnOff}
          />
        ) : (
          <BsFillLightbulbOffFill
            style={{
              marginLeft: 40,
              fontSize: "2em",
            }}
            onClick={turnBulbOnOff}
          />
        )}

        <div
          style={{
            marginLeft: 40,
            fontSize: 14,
          }}
        >
          <p>Hello {name}</p>
        </div>

        <div
          style={{
            position: "absolute",
            top: 20,
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
              Your Projects
            </p>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 120,
            top: 60,

            width: 1 / 3,
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
