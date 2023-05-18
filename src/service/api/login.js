import { BASE_URL } from '../utils/config';

export const login = async (id, token) => {
	try {
		const response = await fetch(
			BASE_URL + `/waInstance${id}/getStateInstance/${token}`
		);
	} catch (error) {
		console.error('Ошибка при выполнении запроса на аутентификацию:', error);
		throw error;
	}
};
