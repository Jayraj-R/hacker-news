import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Hacker news - Jayraj Rathod</title>
				<meta
					name='description'
					content='Simple NextJS news catalogue to displat news regarding hackers and related.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>Hacker News</main>

			<footer className={styles.footer}>
				<a
					href='https://github.com/Jayraj-R/hacker-news'
					target='_blank'
					rel='noopener noreferrer'
				>
					Source code
				</a>
			</footer>
		</div>
	);
}
