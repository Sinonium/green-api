import React from 'react';
import ChatList from './ChatList/ChatList';
import ChatWindow from './ChatWindow/ChatWindow';

const Chat = ({logout}) => {
	return (
		<>
			<ChatList logout={logout}/>
			<ChatWindow />
		</>
	);
};

export default Chat;
