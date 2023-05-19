import React, { useState } from 'react';
import ChatItem from './ChatItem';
import ActionBar from './ActionBar';
import './index.css';

const ChatList = ({ logout, setLogin, activeChat, setActive }) => {
	const [chats, setChats] = useState(
		JSON.parse(localStorage.getItem('chat')) ?? []
	);

	return (
		<div className={`list ${!activeChat ? 'active' : ''}`}>
			<div className='list__wrapper'>
				<ActionBar
					logout={logout}
					setLogin={setLogin}
					setChats={setChats}
				/>
				{chats &&
					chats.length > 0 &&
					chats.map((elem, index) => (
						<ChatItem
							active={activeChat === elem.phone}
							onClick={() => setActive(elem.phone)}
							elem={elem}
							key={elem.phone}
						/>
					))}
			</div>
		</div>
	);
};

export default ChatList;
