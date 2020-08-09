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
                        <h1>{message.title}</h1>
                    ))
                }
            </div>

        </>

    )
}

export default PostMessages;