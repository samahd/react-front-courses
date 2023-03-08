import React from "react";
import {Jumbotron,Button,Container} from "reactstrap";
import { ToastContainer,toast } from "react-toastify";

function Home(){
    const funCall=()=>{
        toast.success("done",{
            position:"top-right",
        })
    }
    return (
    <div>
        <ToastContainer/>
        <div class= "Jumbotron" className="text-center">
            <h1 className="display-3">Salman Ahmad</h1>
            <p>
                This is developed by Salman Ahmad for learning purpose.It's backend is on spring boot and frontend on react js
            </p>
            <Container>
                <Button color="primary" outline onClick={funCall}>
                    Start Using
                </Button>
            </Container>
        </div>

    </div>
)}

export default Home;