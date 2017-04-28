// @flow
/* eslint-disable no-console */
import Io from 'socket.io-client';
import {
  IO_CONNECT,
  IO_DISCONNECT,
  IO_CLIENT_HELLO,
  IO_CLIENT_JOIN_ROOM,
  IO_SERVER_HELLO,
} from 'shared/config';

const socket = Io(window.location.host);

// eslint-disable-next-line no-unused-vars
const Socket = (store: Object) => {
  socket.on(IO_CONNECT, () => {
    console.log('[socket.io] Connected.');
    socket.emit(IO_CLIENT_JOIN_ROOM, 'room-1');
    socket.emit(IO_CLIENT_HELLO, 'Hello to everyone in the room it\'s client!');
  });

  socket.on(IO_SERVER_HELLO, (serverMessage) => {
    console.log(`[socket.io] Server: ${serverMessage}`);
  });

  socket.on(IO_DISCONNECT, () => {
    console.log('[socket.io] Disconnected.');
  });
};

export default Socket;
