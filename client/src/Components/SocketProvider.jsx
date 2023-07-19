import React, { createContext, useMemo } from "react";

const SocketContext = createContext();
const io = require("socket.io-client");

export const useSocket = () => {
  return React.useContext(SocketContext);
};

export default function SocketProvider(props) {
  const socket = useMemo(() => io("http://localhost:8000"), []);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
}
