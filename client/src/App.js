import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Crud from './Components/Crud';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import EditUser from './Components/EditUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path= '/' element={<Crud/>}/> 
         <Route exact path= '/adduser' element={<AddUser/>}/>
        <Route exact path = '/alluser' element= {<AllUser/>}/>
        <Route exact path='/edituser/:id' element={<EditUser/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
