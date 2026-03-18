import React from 'react'

const TaskListNumbers = ({data}) => {
  //console.log(data)
  return (
    <div className='tasklist1'>
      <div className="tasklist2 blue">
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className="tasklist2 green">
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Accepted</h3>
      </div>
      <div className="tasklist2 yellow">
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className="tasklist2 red">
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers