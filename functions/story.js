const BASE_URI = 'http://hn.algolia.com/api/v1';
import axios from 'axios';

export async function getStory({ keyWord = '' }) {
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