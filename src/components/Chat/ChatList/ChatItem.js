import React from 'react';

const ChatItem = ({ active, isChatHeader, elem, onClick, resetChat }) => {
	return (
		<div
			onClick={onClick}
			className={`list__item ${active || isChatHeader ? 'active' : ''}`}>
			<div className='img__wrapper'>
				{isChatHeader && (
					<div onClick={resetChat} className='arrow-icon'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 25'>
							<path
								style={{ fill: '#e9edef' }}
								d='M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z'
								dataname='Left'
							/>
						</svg>
					</div>
				)}
				{elem && (
					<>
						<div></div>
						<img src='' alt='' />
					</>
				)}
			</div>
			<div className='list__item__info'>
				{isChatHeader && <span className='nicname'>{elem}</span>}
				<span className='nickname'>{elem?.phone}</span>
			</div>
		</div>
	);
};

export default ChatItem;
