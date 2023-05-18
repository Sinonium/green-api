import { BASE_URL } from '../utils/config';

export const sendMessage = async (id, token, chatId, message) => {
	try {
		const response = await fetch(
			BASE_URL + `/waInstance${id}/SendMessage/${token}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({chatId,message}),
			}
		);
		const data = await response.json();
		if(data?.correspondentsStatus) {
			alert(data.correspondentsStatus.descr)
		}
		return data;
	} catch (error) {
	}
};
