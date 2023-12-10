import React, { useState, useCallback } from 'react';

const LobbyScreen = () => {
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log({ email, room });
  }, [email, room]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  return (
    <>
      <h1>Lobby</h1>

      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email Id</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        
        <label htmlFor="room">Room Number</label>
        <input type="text" id="room" value={room} onChange={handleRoomChange} />
        
        <br />
        <button type="submit">Join</button>
      </form>
    </>
  );
};

export default LobbyScreen;
