import axios from 'axios';
import ToDoList from './ToDoList'
import React, {useState,useEffect} from 'react'


function Page() {
const [userList, setUserList] = useState([]);

useEffect (() => {
    const URL="https://reqres.in/api/users?page=1";
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
        <p>Sorry! Wait The Content is loading .....</p>
    )
   }
   
   </div>
   </>
  )
}
export default Page;