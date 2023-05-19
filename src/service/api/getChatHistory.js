import { BASE_URL } from '../utils/config';

export const getChatHistory = async (id, token, chatid) => {
	try {
		if(chatid.length > 16) {
			const response = await fetch(
				`${BASE_URL}/waInstance${id}/GetChatHistory/${token}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ chatId: `${chatid}@g.us`, count: 5 }),
				}
			);
			var json = await response.json();
		} else {
			const response = await fetch(
				`${BASE_URL}/waInstance${id}/GetChatHistory/${token}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ chatId: `${chatid}@c.us`, count: 5 }),
				}
			);
			var json = await response.json();
		}

		return json.reverse();
	} catch (e) {}
};
