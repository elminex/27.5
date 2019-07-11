import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';
import CommentForm from './CommentFormContainer';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <CommentsList />
        <CommentForm />
      </div>
    </>
  );
}

export default App;
