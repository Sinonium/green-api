import { BASE_URL } from '../utils/config';
import { deleteNotification } from './deleteNotification';

export const getData = async (id, token) => {
	try {
		const response = await fetch(
			`${BASE_URL}/waInstance${id}/ReceiveNotification/${token}`
		);
		const json = await response.json();
		await deleteNotification(id, token, json.receiptId);
		return json;
	} catch (e) {}
};
