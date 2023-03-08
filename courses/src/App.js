import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import Home from './components/Home';
import AllCourses from'./components/AllCourses';

function App() {
  const btnHandle=()=>{
      toast.success("this is my first message",{
        position:"top-center",
      });
  }
  return (
    <div>
      <ToastContainer/>
      <Home/>
      <AllCourses/>
    </div>
    
  );
}

export default App;
