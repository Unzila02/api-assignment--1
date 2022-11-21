import {React,useState} from 'react'

import './Form.css';

function Form() {
  const [user, setUser]= useState("");
  const [title, setTitle]= useState("")


  const clickHandler=(e)=>{
    e.preventDefault();
    if(user===''& title===''){
      alert("kindly Fill the form")
    }
    if (user!==''& title!==''){
    alert(`The User ${user} and her Job Title ${title} is Added. Thank you for Creating new user.`);
    }
  }
  const userHandler =(event )=>{
    setUser(event.target.value)
    }
  const jobHandler =(event) =>{
    setTitle(event.target.value)
    
};
   return (
    <>

    <main class="form-signin w-100 m-auto text-center">
      <h2> Registor New User</h2>
  <form >    
    <div class="form-floating">
      <input type="text" value={user} className="form-control top" placeholder='Username' onChange={(event)=>userHandler(event)}/>
      <input type="text" value={title} className="form-control last" placeholder="Job Title" onChange={(event)=>jobHandler(event)}/>
    </div>
    <button class="w-100 btn btn-lg btn-dark btn-setting" type="submit" onClick={clickHandler}>Create</button>
  </form>
</main>
    </>
  );
}
export default Form;