import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class PostMessagesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        let tempData = {
            topic: this.state.title,
            message: this.state.message
        }

    }
    render() {
        return (
            <>
                <h5>Form</h5>
                <div className='form' onSubmit={this.handleSubmit}>
                    <Form>
                        <FormGroup>
                            <Input type="text" name="title" id="title" placeholder="Title" value={this.state.title} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" name="text" id="exampleText" placeholder="Message" value={this.state.message} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
            </>

        )

    }

}

export default PostMessagesForm;