import React from 'react';
import './index.css';

const PhoneModal = ({ isVisible = false, onClose }) => {
	const keydownHandler = ({ key }) => {
		switch (key) {
			case 'Escape':
				onClose();
				break;
			default:
		}
	};

	React.useEffect(() => {
		document.addEventListener('keydown', keydownHandler);
		return () => document.removeEventListener('keydown', keydownHandler);
	});

	return !isVisible ? null : (
		<div className='modal' onClick={onClose}>
			<div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
				<div className='modal-header'>
					<h3 className='modal-title'>Введите номер</h3>
				</div>
				<div className='modal-body'>
					<input type='tel' />
				</div>
				<div className='modal-footer'>
					<button onClick={onClose}>Закрыть</button>
				</div>
			</div>
		</div>
	);
};

export default PhoneModal;
