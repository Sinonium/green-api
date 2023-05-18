import { BASE_URL } from '../utils/config';

export const getChatHistory = async (id, token, chatid) => {
	try {
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
		const json = await response.json();
      return json.reverse()
	} catch (e) {}
};
