import React, { useState } from 'react';
import './index.css';

const PhoneModal = ({ isVisible = false, onClose, addPhone }) => {
	const [phone, setPhone] = useState();
	const keydownHandler = ({ key }) => {
		switch (key) {
			case 'Escape':
				onClose();
				break;
			default:
		}
	};
	const handleAddChat = () => {
		addPhone(phone);
		setPhone(null);
		onClose();
	};

	React.useEffect(() => {
		document.addEventListener('keydown', keydownHandler);
		return () => document.removeEventListener('keydown', keydownHandler);
	}, []);

	return !isVisible ? null : (
		<div className='modal' onClick={onClose}>
			<div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
				<div className='modal-header'>
					<h3 className='modal-title'>Введите номер</h3>
				</div>
				<div className='modal-body'>
					<input
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						type='tel'
					/>
					<button onClick={() => handleAddChat()}>Добавить</button>
				</div>
				<div className='modal-footer'>
					<button onClick={onClose}>Закрыть</button>
				</div>
			</div>
		</div>
	);
};

export default PhoneModal;
