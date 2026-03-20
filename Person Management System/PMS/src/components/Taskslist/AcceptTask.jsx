import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <div className="tlistbox greenb">
        <div className="tlb">
          <h3 className="tlh3 text-sm">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="tbh2 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="tbp text-sm ">
         {data.taskDescription}
        </p>
        <div className='acptbox'>
           <button className='ab1'>Mark as Completed</button>
           <button className='ab2'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask