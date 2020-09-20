import React, { useState, useEffect } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';


import axios from "axios";
import EditModal from './EditModal';



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
    const setUpdate = (text, key) => {
        const items = messages;

        console.log(items)
        //console.log(key);
        console.log(text);


        // items.forEach(element => {
        //     if (element._id === key) {
        //         element.message = text;

        //         //console.log(additionalMessage);
        //         console.log(element.message);
        //     }

        // });



    }


    return (
        <>
            <div className="data-list">
                {

                    messages.map((message, index) => (
                        <div key={index}>
                            <Card id={message._id} body >
                                <CardTitle>{message.title}</CardTitle>
                                <CardTitle>{message._id}</CardTitle>


                                <CardText>{message.message}</CardText>
                                <div className='btn-group'>
                                    <EditModal title={message.title} message={message.message} postId={message._id} setUpdate={setUpdate} />&nbsp;&nbsp;
                                    {/* */}
                                    <Button>Delete</Button>
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