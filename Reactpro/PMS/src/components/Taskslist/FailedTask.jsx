import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="tlistbox redb">
        <div className="tlb">
          <h3 className="tlh3 text-sm">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="tbh2 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="tbp text-sm ">
           {data.taskDescription}
        </p>
        <div className='fbox'>
            <button className='fb1'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask