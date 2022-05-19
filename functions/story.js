const BASE_URI = 'http://hn.algolia.com/api/v1';
import axios from 'axios';

export async function getSearchStories({ keyWord = '' }) {
	try {
		const { data } = await axios.get(
			`${BASE_URI}/search?query=${keyWord}&tags=story`
		);

		return data;
	} catch (e) {
		console.log('Error:', e);
		return null;
	}
}

export async function getLatestStories() {
	try {
		const { data } = await axios.get(`${BASE_URI}/search?tags=front_page`);

		return data;
	} catch (e) {
		console.log('Error:', e);
		return null;
	}
}
export async function getStoryById(id) {
	try {
		const { data } = await axios.get(`${BASE_URI}/items/${id}`);

		return data;
	} catch (e) {
		console.log('Error:', e);
		return null;
	}
}
