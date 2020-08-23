import React from 'react';
import axios from "axios";

import { Button, Form, FormGroup, Input } from 'reactstrap';


class PostMessagesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();
        let tempData = {
            title: this.state.title,
            message: this.state.message
        }
        await axios.post('http://localhost:8000/postmessages/', tempData);

    }
    render() {
        return (
            <>
                <h5>Form</h5>
                <div className='form' onSubmit={this.handleSubmit}>
                    <Form>
                        <FormGroup>
                            <Input type="text" name="title" id="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" name="message" id="exampleText" placeholder="Message" value={this.state.message} onChange={this.handleChange} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
            </>

        )

    }

}

export default PostMessagesForm;