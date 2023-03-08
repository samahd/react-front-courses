import React from "react";
import { toast, ToastContainer } from "react-toastify";
import {
 Card,
 CardBody,
 CardTitle,
 CardSubtitle,
 CardText,
CardFooter,
Button,
Container
} from "reactstrap";

const Course=({course})=>{
    const deleteMsg=()=>{
        toast.warning("deleted");
    }
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={deleteMsg}>Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )

}

export default Course;