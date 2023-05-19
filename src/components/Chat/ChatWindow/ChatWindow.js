import React from 'react';
import ChatItem from '../ChatList/ChatItem';
import ChatInput from './ChatInput';
import './index.css';

const ChatWindow = ({ activeChat, messages, handleSendMessage, resetChat }) => {
	return (
		<div className={`chat ${activeChat ? 'active' : ''}`}>
			<div className='chat__wrapper'>
				<header className='chat__user__info'>
					<ChatItem elem={activeChat} isChatHeader resetChat={resetChat} />
				</header>
				<div className='chat__dialogue-panel'>
					{messages?.length > 0 &&
						messages.map((elem) => (
							<div
								className={`chat-message ${
									elem.type === 'incoming' ? 'incoming' : ''
								}`}
								key={elem.idMessage}>
								<div>
									{elem.type === 'incoming' &&
										elem.chatId.includes('g') && (
											<span className='nickname'>
												{elem.senderName}
											</span>
										)}
									<span>{elem.textMessage}</span>
								</div>
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
