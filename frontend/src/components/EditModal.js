
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, } from 'react-bootstrap';
import axios from "axios";

const EditModal = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        name = value;
        console.log(name);

    }



    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>{props.title}</h3>
                    <h4>{props.postId}</h4>
                    <Form>
                        <div className="input-group">
                            <textarea className="form-control" aria-label="With textarea" rows={10} defaultValue={props.message} onChange={handleChange} name="editMessage"></textarea>
                            {/* <p>{props.postId}</p> */}
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.onMessageChange}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default EditModal;