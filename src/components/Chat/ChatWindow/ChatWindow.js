import React from 'react';
import ChatItem from '../ChatList/ChatItem';
import ChatInput from './ChatInput';
import './index.css';

const ChatWindow = () => {
	return (
		<div className='chat'>
			<div className='chat__wrapper'>
				<header className='chat__user__info'>
					<ChatItem isChatHeader />
				</header>
				<div className='chat__dialogue-panel'></div>
				<footer>
					<ChatInput />
				</footer>
			</div>
		</div>
	);
};

export default ChatWindow;
