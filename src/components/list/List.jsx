import axios from 'axios';
import ToDoList from './ToDoList'
import Page2 from './Page2'
import { Link } from "react-router-dom";
import React, {useState,useEffect} from 'react'


function List() {
const [userList, setUserList] = useState([]);

useEffect (() => {
    const URL="https://reqres.in/api/users?page=2";
    axios.get(URL).then(function (response){
        console.log(response.data);
        if(response.data.data){
        setUserList(response.data.data)
        }
    })
    .catch((error)=>{
        console.log(error);
    });
}, []
);

  return (
   <>
<div className=' header'>
            <ul>
                <li className='link-sty'>
                     <Link to="/form" className='lik'>Create</Link>
                </li>
            </ul>
</div>
   <div>
   {
    userList.length > 0 ?(
        <ul>
            {
                userList.map((item, index)=> {
                    return <ToDoList user={item}/>;
                })
            }
        </ul>
    ):(
        <p>sorry, Wait the content is loading.....</p>
    )
   }
   
   </div>
   <Page2/>
   </>
  )
}
export default List;