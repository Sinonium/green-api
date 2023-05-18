import React, { useState } from 'react';
import ChatItem from './ChatItem';
import ActionBar from './ActionBar';
import './index.css';

const ChatList = ({ logout, setLogin, activeChat, setActive }) => {
	const [chats, setChats] = useState(
		JSON.parse(localStorage.getItem('chat')) ?? []
	);

	return (
		<div className='list'>
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
							active={activeChat === elem}
							onClick={() => setActive(elem)}
							name={elem}
							key={elem}
						/>
					))}
			</div>
		</div>
	);
};

export default ChatList;
