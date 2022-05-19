import { useEffect, useState } from 'react';
import { getLatestStories, getSearchStories } from '../functions/story';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import loading from '../public/assets/loading.svg';
import { formateDate } from '../functions/date';

const ArticleList = ({ keyWord }) => {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		async function handleLatestStories() {
			if (keyWord) {
				const data = await getSearchStories({ keyWord: keyWord });
				if (data) {
					setStories(data.hits);
				}
			} else {
				const data = await getLatestStories();
				if (data) {
					setStories(data.hits);
				}
			}
		}
		handleLatestStories();
	}, []);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				{!keyWord
					? 'Latest News'
					: `Search result for '${keyWord}'
				`}
			</h2>
			<section className={styles.storyList}>
				{stories.length === 0 ? (
					<>
						<Image src={loading} height={300} width={300} />
						<p className={styles.loading}>Loading...</p>
					</>
				) : (
					stories.map((story, ind) => {
						return (
							<Link href={'/news/' + story.objectID} key={ind}>
								<div className={styles.storyCard}>
									<span className={styles.storyTitle}>{story.title}.</span>
									<div className={styles.flex}>
										<span className={styles.storyAuthor}>{story.author}</span>
										<span className={styles.storyCreated}>
											{formateDate(story.created_at)}
										</span>
									</div>
								</div>
							</Link>
						);
					})
				)}
			</section>
		</div>
	);
};

export default ArticleList;
