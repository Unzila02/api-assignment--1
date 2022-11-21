import {BrowserRouter, Routes,Route} from "react-router-dom";
import List from "./components/list/List";
import Form from "./components/form/Form";
function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<List/>}/>
          
      <Route path ='/Form' element={<Form/>}/>
      
         
    </Routes>
    </BrowserRouter>
    
  
  
     </>
  );
}

export default App;
