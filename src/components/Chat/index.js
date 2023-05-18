import React, { useEffect, useState } from 'react';
import ChatList from './ChatList/ChatList';
import ChatWindow from './ChatWindow/ChatWindow';
import { getChatHistory } from '../../service/api/getChatHistory';
import { sendMessage } from '../../service/api/sendMessage';

const Chat = ({logout, setLogin}) => {
	const [activeChat, setActiveChat] = useState(null)
	const [messages, setMessages] = useState([]);

	const handleActiveChat = (elem) => {
		setActiveChat(elem)
	}

	const chatid = activeChat
		?.split('')
		.filter((i) => i !== '+')
		.join('');
	const id = localStorage.getItem('id');
	const token = localStorage.getItem('token');
	const handleSendMessage = async (message) => {
		const messageId = await sendMessage(id, token, `${chatid}@c.us`, message);
		setMessages((prev) => [
			...prev,
			{ idMessage: messageId, textMessage: message },
		]);
	};

	useEffect(() => {
		(async () => {
			if (chatid) {
				const data = await getChatHistory(id, token, chatid);
				setMessages(data);
			}
		})();
	}, [activeChat]);

	return (
		<>
			<ChatList logout={logout} setLogin={setLogin} activeChat={activeChat} setActive={handleActiveChat}/>
			<ChatWindow messages={messages} handleSendMessage={handleSendMessage} activeChat={activeChat}/>
		</>
	);
};

export default Chat;
