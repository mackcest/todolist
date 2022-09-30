import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inbox from './containers/Inbox/inbox';
import Login from './containers/user/Login';
import Signup from './containers/user/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/signup" element={<Signup />} />
      <Route path="/inbox" element={<Inbox />} />
    </Routes>
  );
}

export default App;
