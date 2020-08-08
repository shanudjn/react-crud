import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const PostMessagesForm = () => {
    return (
        <>
            <h5>Form</h5>
            <div className='form'>
                <Form>
                    <FormGroup>
                        <Input type="text" name="title" id="title" placeholder="Title" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name="text" id="exampleText" placeholder="Message" />
                    </FormGroup>

                    <Button>Submit</Button>
                </Form>
            </div>
        </>

    )
}

export default PostMessagesForm;