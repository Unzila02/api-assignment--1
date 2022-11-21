import React from 'react'
import {Routes, Route,Link} from "react-router-dom";
import Form from './components/form/Form';
import List from './components/list/List';

function Btnnav() {
  return (
    <>    
    <Routes>
      
      <Route exact path='/List'>
          <List/>
      </Route>
      <Route path ='/Form'>
          <Form/>
      </Route>
    </Routes>
    </>
  )
};
export default Btnnav;
