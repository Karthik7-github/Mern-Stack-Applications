import React, { useState ,useEffect,useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userdata,setUserdata] = useContext(AuthContext);

  const [taskT, setTaskT] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskdate, setTaskdate] = useState("");
  const [taskcategory, setTaskcategory] = useState("");
  const [taskassignto, setTaskassignto] = useState("");

  const [newtask, setNewTask] = useState({})

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setTask({taskT,taskDescription,taskdate,taskcategory,taskassignto,active:false,newTask:true,completed:false,failed:true})
//     console.log(task)
// };

useEffect(() => {
  //console.log("Updated task:", newtask);
}, [newtask]);

// const submitHandler = (e) => {
//   e.preventDefault();

//   const newTask = {
//     taskT,
//     taskDescription,
//     taskdate,
//     taskcategory,
//     active: false,
//     newTask: true,
//     completed: false,
//     failed: false
//   };

//   setNewTask(newTask);
//   const data = userdata 
//   console.log(data)
  

//   data.forEach(function(elem){
//     if(taskassignto==elem.firstName){
//       elem.tasks.push(newTask)
//       elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
//     }
//   })
//   setUserdata(data)
//   console.log(data)

//   setTaskT('')
//   setTaskDescription('')
//   setTaskassignto('')
//   setTaskcategory('')
//   setTaskdate('')
// };


const submitHandler = (e) => {
  e.preventDefault();

  const newTaskObj = {
    taskTitle: taskT,
    taskDescription,
    taskDate: taskdate,
    category: taskcategory,
    active: false,
    newTask: true,
    completed: false,
    failed: false
  };

  const updatedUsers = userdata.map((user) => {
    if (user.firstName === taskassignto) {

      return {
        ...user,
        tasks: [...user.tasks, newTaskObj],   // ✅ FIXED
        taskNumbers: {
          ...user.taskNumbers,
          newTask: user.taskNumbers.newTask + 1
        }
      };

    }
    return user;
  });

  setUserdata(updatedUsers);
  localStorage.setItem("employees", JSON.stringify(updatedUsers));

  setTaskT("");
  setTaskDescription("");
  setTaskdate("");
  setTaskcategory("");
  setTaskassignto("");
};


  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form onSubmit={submitHandler} className="admform">
        <div className="mainf w-1/2">
          <div>
            <h3>Task Title</h3>
            <input
              value={taskT}
              onChange={(e) => setTaskT(e.target.value)}
              type="text"
              placeholder="Make a Task"
              className="formt bg-white"
            />
          </div>

          <div>
            <h3>Date</h3>
            <input
              value={taskdate}
              onChange={(e) => setTaskdate(e.target.value)}
              type="date"
              className="bg-white formt"
            />
          </div>

          <div>
            <h3>Assign To</h3>
            <input
              value={taskassignto}
              onChange={(e) => setTaskassignto(e.target.value)}
              type="text"
              placeholder="employee name"
              className="bg-white formt"
            />
          </div>

          <div>
            <h3>Category</h3>
            <input
              value={taskcategory}
              onChange={(e) => setTaskcategory(e.target.value)}
              type="text"
              placeholder="design, dev etc...."
              className="bg-white formt"
            />
          </div>
        </div>

        <div className="desf w-1/2">
          <div>
            <h3>Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows={10}
              cols={50}
              className="admdes bg-white"
            ></textarea>
          </div>

          <button className="admbtn">Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
