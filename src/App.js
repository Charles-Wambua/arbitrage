import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './pages/Aside';

function App() {
  return (
<Router>
  <Routes>
    <Route path='/' Component={<Sidebar/>}/>
  </Routes>
</Router>
  );
}

export default App;
