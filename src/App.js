import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './pages/Aside';
import Register from './pages/Register';


function App() {
  return (
<Router>
  <Routes>
   <Route path='/' Component={Sidebar}/>
   <Route path='/register' Component={Register}/>
  </Routes>
</Router>
  );
}

export default App;
