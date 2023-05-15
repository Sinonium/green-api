import React, { useState } from 'react';
import './index.css';

function ChatInput(props) {
	const [inputText, setInputText] = useState('');

	const handleInputChange = (event) => {
		setInputText(event.target.value);
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			props.onSend(inputText);
			setInputText('');
		}
	};

	return (
		<div className='chat-input'>
			<input
				type='text'
				placeholder='Type a message'
				value={inputText}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
			/>
			<button
				onClick={() => {
					props.onSend(inputText);
					setInputText('');
				}}>
				<svg
					viewBox='0 0 24 24'
					height='24'
					width='24'
					preserveAspectRatio='xMidYMid meet'
					class=''
					version='1.1'
					x='0px'
					y='0px'
					enable-background='new 0 0 24 24'
					xmlspace='preserve'
               color='#8696a0'>
					<path
						fill='currentColor'
						d='M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z'></path>
				</svg>
			</button>
		</div>
	);
}

export default ChatInput;
