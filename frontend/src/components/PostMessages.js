import React, { useState, useEffect } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';


import axios from "axios";



const PostMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = async () => {
        const result = await axios.get("http://localhost:8000/postmessages/");

        //console.log(result);
        setMessages(result.data);
    }


    return (
        <>
            <div className="data-list">
                {

                    messages.map((message, index) => (
                        <div key={index}>
                            <Card id={message.id} body >
                                <CardTitle>{message.title}</CardTitle>
                                <CardText>{message.message}</CardText>
                                <div className='btn-group'>
                                    <Button >Edit</Button>&nbsp;&nbsp;
                                    <Button className='btn-danger'>Delete</Button>
                                </div>
                            </Card>
                            <br></br>
                        </div>
                    ))
                }
            </div>
            <br></br>
        </>

    )
}

export default PostMessages;