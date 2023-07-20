import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../Components/SocketProvider";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div>
      <footer>
        <h2>Video Conferencing Website</h2>
      </footer>
      <h1>Please Enter Your Email & Room ID</h1>
      <h5>Ready To Nonstop Calling</h5>
      <form onSubmit={handleSubmitForm}>
        <label className="label1" htmlFor="email">
          Email ID
        </label>
        &nbsp;&nbsp;
        <input
          className="input1"
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label className="label2" htmlFor="room">
          Room ID
        </label>
        &nbsp;&nbsp;
        <input
          className="input2"
          type="text"
          placeholder="Enter your room id"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button>Join</button>
      </form>
    </div>
  );
};

export default LobbyScreen;
