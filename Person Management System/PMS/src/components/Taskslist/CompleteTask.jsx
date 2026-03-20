import React from 'react'

const CompleteTask = ({data}) => {
  return (
   <div className="tlistbox pinkb">
        <div className="tlb">
          <h3 className="tlh3 text-sm">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="tbh2 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="tbp text-sm ">
          {data.tskDescription}
        </p>
        <div className='ctbox'>
            <button className='ctb1'>Complete</button>
        </div>
      </div>
  )
}

export default CompleteTask
