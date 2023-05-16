import React, { useState } from 'react';
import PhoneModal from '../../modal/PhoneModal';

const ActionBar = ({ logout }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [showModal, setShowModal] = useState(false);
	return (
		<div className='action-bar'>
			<div
				onClick={() => setShowDropdown(!showDropdown)}
				className={`action-menu_btn ${showDropdown ? 'active' : ''}`}>
				<span>
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
						xmlSpace='preserve'>
						<path
							fill='currentColor'
							d='M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z'></path>
					</svg>
				</span>
			</div>
			{showDropdown && (
				<div className='action-menu__dropdown'>
					<ul>
						<li onClick={() => setShowModal(true)}>Добавить чат</li>
						<li onClick={logout}>Выйти</li>
					</ul>
				</div>
			)}
			<PhoneModal
				isVisible={showModal}
				title='Modal Title'
				onClose={() => setShowModal(false)}
			/>
		</div>
	);
};

export default ActionBar;
