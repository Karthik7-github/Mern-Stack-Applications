import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userdata,setUserdata] = useContext(AuthContext);
  
  return (
    <div className="allto">
      <div className="allti redb">
        <h2 className="text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 ">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 ">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 ">Failed</h5>
      </div>
      <div className="">
        {userdata.map(function(ele,idx){
        return <div key={idx} className="allti border-2 border-emerald-500 border-solid ...">
        <h2 className="text-lg font-medium w-1/5">{ele.firstName}</h2>
        <h3 className="text-lg font-medium w-1/5 text-blue-400">{ele.taskNumbers.active}</h3>
        <h5 className="text-lg font-medium w-1/5 text-yellow-400">{ele.taskNumbers.newTask}</h5>
        <h5 className="text-lg font-medium w-1/5 text-white-600">{ele.taskNumbers.completed}</h5>
        <h5 className="text-lg font-medium w-1/5 text-red-600">{ele.taskNumbers.failed}</h5>
      </div>
      })
      }
      </div>
      
    </div>
  );
};

export default AllTask;
