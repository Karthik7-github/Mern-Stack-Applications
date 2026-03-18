import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="tlistbox blueb">
        <div className="tlb">
          <h3 className="tlh3 text-sm">{data.cateogry}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="tbh2 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="tbp text-sm ">
          {data.taskDescription}
        </p>
        <div className='ntbox'>
            <button>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask