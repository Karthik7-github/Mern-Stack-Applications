import React,{useState} from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  //console.log(data)

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }
  
  return (
    <div className='headbox'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username✌️</span></h1>
        <button onClick={logOutUser} className='logoutbtn'>Log Out</button>
    </div>
  )
}

 export default Header

// import React, { useState, useEffect } from 'react'

// const Header = ({ data }) => {

//   const [username, setUsername] = useState('')

//   useEffect(() => {
//     if (!data) {
//       setUsername('Admin')
//     } else {
//       setUsername(data.firstName)
//     }
//   }, [data]) 

//   return (
//     <div className='headbox'>
//       <h1 className='text-2xl font-medium'>
//         Hello <br />
//         <span className='text-3xl font-semibold'>
//           {username} ✌️
//         </span>
//       </h1>
//       <button className='logoutbtn'>Log Out</button>
//     </div>
//   )
// }

// export default Header