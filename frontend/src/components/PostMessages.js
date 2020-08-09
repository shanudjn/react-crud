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
                        <div>
                            <Card body>
                                <CardTitle>{message.title}</CardTitle>
                                <CardText>{message.message}</CardText>
                                <Button>Go somewhere</Button>
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