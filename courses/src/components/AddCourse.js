import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddCourse=()=>{

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form>
                <FormGroup>
                    <label>Course Id</label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="userId"
                    />
                </FormGroup>
                <FormGroup>
                    <label>Course title</label>
                    <Input
                        type="text"
                        placeholder="Enter title here"
                        name="title"
                        id="title"
                    />
                </FormGroup>
                <FormGroup>
                    <label>Course description</label>
                    <Input
                        type="textarea"
                        placeholder="Enter description here"
                        name="description"
                        id="description"
                        style={{height:150}}
                    />
                </FormGroup>
                <Container className="text-center">
                    <button color="success">Add Course</button>
                    <Button color="dark ml-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;