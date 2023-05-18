import React from 'react';
import ChatItem from '../ChatList/ChatItem';
import ChatInput from './ChatInput';
import './index.css';

const ChatWindow = ({ activeChat, messages, handleSendMessage }) => {

	return (
		<div className='chat'>
			<div className='chat__wrapper'>
				<header className='chat__user__info'>
					<ChatItem name={activeChat} isChatHeader />
				</header>
				<div className='chat__dialogue-panel'>
					{messages?.length > 0 &&
						messages.map((elem) => (
							<div
								className={`chat-message ${
									elem.type === 'incoming' ? 'incoming' : ''
								}`}
								key={elem.idMessage}>
								<span>{elem.textMessage}</span>
							</div>
						))}
				</div>
				<footer>
					<ChatInput handleSendMessage={handleSendMessage} />
				</footer>
			</div>
		</div>
	);
};

export default ChatWindow;
