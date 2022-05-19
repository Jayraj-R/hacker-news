import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getStoryById } from '../../functions/story';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Story.module.css';
import Image from 'next/image';
import { formateDate } from '../../functions/date';
import leftIcon from '../../public/assets/left.svg';
import loading from '../../public/assets/loading.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Article = () => {
	const router = useRouter();
	const [story, setStory] = useState(undefined);
	const [commLength, setCommLength] = useState(5);

	useEffect(() => {
		async function handleData() {
			const data = await getStoryById(router.query.nid);

			if (data) {
				setStory(data);
			}
		}
		handleData();
	}, [router]);

	function convertToPlain(string) {
		return <div dangerouslySetInnerHTML={{ __html: string }} />;
	}
	function Comment({ author, text, created_at }) {
		if (text != null) {
			return (
				<div className={styles.commentBox}>
					<span className={styles.author}>{convertToPlain(author)}</span>
					<span className={styles.text}>{convertToPlain(text)}</span>
					<span className={styles.time}>{formateDate(created_at)}</span>
				</div>
			);
		}
	}

	return (
		<>
			<Header />
			<Navbar />
			<div className={styles.container}>
				<section onClick={() => router.back()} className={styles.back}>
					<Image src={leftIcon} width={18} height={18} />
					<p>Back</p>
				</section>

				{story ? (
					<section className={styles.flex}>
						<div className={styles.heading}>
							<span className={styles.title}>{story.title}.</span>
							<span className={styles.author}>- {story.author}</span>
						</div>

						<div className={styles.content}>
							<span className={styles.subTitle}>Points : </span>
							<span className={styles.value}>{story.points}</span>
						</div>

						<div className={styles.comments}>
							<span className={styles.subTitle}>Comments :</span>
							{story !== {} &&
								story.children.map((comment, ind) => {
									if (ind < commLength) {
										return (
											<Comment
												author={comment.author}
												text={comment.text}
												created_at={comment.created_at}
											/>
										);
									}
								})}
							<section className={styles.flex}>
								<div
									onClick={() => setCommLength(commLength + 5)}
									className={styles.expand}
								>
									<p>Expand</p>
								</div>
							</section>
						</div>
					</section>
				) : (
					<div className={styles.container}>
						<Image src={loading} height={300} width={300} />
						<p className={styles.loading}>Loading...</p>
					</div>
				)}
			</div>

			<Footer />
		</>
	);
};

export default Article;
