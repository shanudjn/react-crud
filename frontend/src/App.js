import React from 'react';

import './App.css';
import PostMessages from './components/PostMessages';
import PostMessagesForm from './components/PostMessageForm';

function App() {
  return (
    <div className="App">
      <PostMessages />
      <PostMessagesForm />
    </div>
  );
}

export default App;
