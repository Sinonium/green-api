import { BASE_URL } from '../utils/config';

export const deleteNotification = async (id, token, receipt) => {
	try {
		await fetch(
			`${BASE_URL}/waInstance${id}/DeleteNotification/${token}/${receipt}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	} catch (e) {}
};
