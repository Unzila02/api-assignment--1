import React from 'react'
import './List.css'
export default function ToDoList({user}) {
  return (
    <>
    <li className='shadow p-3 bg-body rounded set'>
<span className='setting-up'>
    <div className='image '>
    <img src={`${user.avatar}`} alt="user-img"/>
    </div>
    <div className="user-details">
    <h3>{`${user.first_name} ${user.last_name}`}</h3>
    <p>{`${user.email}`}</p>
    </div>
    <div className='icons'>
    <i class="fa fa-pencil-square-o"></i>
    </div>
</span>
    </li>
    </>
  )
}
