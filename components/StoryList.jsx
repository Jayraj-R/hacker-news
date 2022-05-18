import { useEffect, useState } from 'react';
import { getLatestStories } from '../functions/story';
import styles from '../styles/Story.module.css';

const ArticleList = () => {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		async function handleLatestStories() {
			const data = await getLatestStories();
			if (data) {
				setStories(data.hits);
			}
		}
		handleLatestStories();
	}, []);
	console.log(stories);

	const formateDate = (data) => {
		const date = new Date(data);
		console.log(date);

		var seconds = Math.floor((date.getTime() / 1000) % 60),
			minutes = Math.floor((date.getTime() / (1000 * 60)) % 60),
			hours = Math.floor((date.getTime() / (1000 * 60 * 60)) % 24);

		hours = hours < 10 ? '0' + hours : hours;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;
		console.log(hours, minutes, seconds);

		if (hours > 24) {
			return `${hours / 24} days ago`;
		}
		if (hours > 0) {
			return `${hours} hours ago`;
		}
		if (minutes > 0) {
			return `${minutes} minutes ago`;
		}
		if (seconds > 0) {
			return `${seconds} seconds ago`;
		}

		return 1;
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Latest News</h2>
			<section className={styles.storyList}>
				{stories.map((story) => {
					return (
						<div className={styles.storyCard}>
							<span className={styles.storyTitle}>{story.title}.</span>
							<div className={styles.flex}>
								<span className={styles.storyAuthor}>{story.author}</span>
								<span className={styles.storyCreated}>
									{formateDate(story.created_at)}
								</span>
							</div>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default ArticleList;
