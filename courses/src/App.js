import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import Home from './components/Home';
import AllCourses from'./components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/header';
import Menu from './components/Menu';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  const btnHandle=()=>{
      toast.success("this is my first message",{
        position:"top-center",
      });
  }
  return (
  <BrowserRouter>
    <div> 
      <ToastContainer /> 
      <Container>
        <Header/>
        <Row>
          <Col md = {4}><Menu/></Col>
          <Col md ={8}>
            
              <Routes>
                <Route path='/'element={<Home/>} exact />
                <Route path="/add-courses" element={<AddCourse/>} exact/>
                <Route path="/view-courses" component={AllCourses} exact />
              </Routes> 
            </Col>
        </Row>
      </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
