import React from 'react';
import './App.css';
import PostMessages from './components/PostMessages';
import PostMessagesForm from './components/PostMessageForm';



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <PostMessagesForm />
      <PostMessages />
    </div>
  );
}

export default App;
