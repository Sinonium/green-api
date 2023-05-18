import React from 'react';

const ChatItem = ({ active, isChatHeader, name, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={`list__item ${active || isChatHeader ? 'active' : ''}`}>
			<div className='img__wrapper'>
				<div></div>
				<img src='' alt='' />
			</div>
			<div className='list__item__info'>
				<span className='nickname'>{name}</span>
			</div>
		</div>
	);
};

export default ChatItem;
