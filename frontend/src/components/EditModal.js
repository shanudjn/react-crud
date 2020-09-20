
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


const EditModal = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let propsMessage = props.message;







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
                            <textarea id={props.postId} className="form-control" aria-label="With textarea" rows={10} defaultValue={propsMessage} onChange={(e) => {
                                props.setUpdate(e.target.value, props._id)
                            }} ></textarea>
                            {/*  */}
                            {/* <p>{props.postId}</p> */}
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => { console.log(propsMessage) }}>Save</Button>
                    {/* <Button variant="primary" type="submit" onClick={(e) => {
                        props.setUpdate(e.target.value, props.postId)
                    }}>Save</Button> */}

                    {/* <Button variant="primary" type="submit">Save</Button> */}
                    {/* <Button onSubmit>Save</Button> */}



                </Modal.Footer>
            </Modal>
        </>
    );
}



export default EditModal;