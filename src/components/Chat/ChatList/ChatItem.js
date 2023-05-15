import React from 'react';

const ChatItem = ({active, isChatHeader}) => {
	return (
		<div className={`list__item ${active || isChatHeader ? 'active' : ''}`}>
			<div className='img__wrapper'>
				<div></div>
				<img src='' alt='' />
			</div>
			<div className='list__item__info'>
				<span className='nickname'>Lorem, ipsum.</span>
				{!isChatHeader && <span className='text'>Lorem ipsum dolor sit amet.</span>}
			</div>
		</div>
	);
};

export default ChatItem;
