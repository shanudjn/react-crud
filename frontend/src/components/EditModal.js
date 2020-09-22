
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


const EditModal = (props) => {

    const [show, setShow] = useState(false);
    const [postId, setPostId] = useState(props.postId);
    const [title, setTitle] = useState(props.title);
    const [message, setMessage] = useState(props.message);





    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setUpdate = (e) => {
        console.log(message);
        // console.log(props.message);

        setMessage(e.target.value);
        //console.log(message);

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
                    <h3>{title}</h3>
                    <h4>{postId}</h4>
                    <Form>
                        <div className="input-group">
                            <textarea id={postId} className="form-control" aria-label="With textarea" rows={10} value={message} onChange={setUpdate} ></textarea>
                            {/*onChange={(e) => {
                                setUpdate(e.target.value, props._id)
                            }}  */}
                            {/* <p>{props.postId}</p> */}
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => {
                        props.handleSave(postId, message);
                        handleClose();

                    }}>Save</Button>
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